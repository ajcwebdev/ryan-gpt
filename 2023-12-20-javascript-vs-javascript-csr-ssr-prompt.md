---
showLink: "https://www.youtube.com/watch?v=kHsTiFWz3sY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "JavaScript vs JavaScript - CSR  & SSR"
description: ""
publishDate: "2023-12-20"
coverImage: "https://i.ytimg.com/vi/kHsTiFWz3sY/maxresdefault.jpg"
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

[00:00:00]  all right hello everybody i'm going to try and pull off a stream um today to be fair about an hour ago i had no internet it came back for the last like
[00:00:15]  20 30 minutes so i'm hoping it stays that way but we could probably lose internet at any point so let's let's uh let's hope that we are lucky today and
[00:00:27]  we fall in their whole basically they started doing work on my place on monday like out in the street and then they were like oh we'll come back on thursday and
[00:00:36]  then i was like oh damn i was going to stream on thursday instead of friday um so i'm like okay i'll i'll try and do something on wednesday
[00:00:43]  and then i get the notification this morning that they're actually doing stuff so you know can't win right um how's everybody doing i yeah i'm gonna fix up twitch right
[00:00:38]  now it's it bugs me every time i do a stream on twitch it puts it in the wrong category um which is kind of annoying because we should be in software and
[00:01:08]  it's it's all streamyards fault so i think this has really been hurting our discovery not that as many people watch on twitch as youtube all right how's it going
[00:01:19]  everyone hey hey yeah um so yeah what we're gonna do today is basically like an extended this week in javascript just you know there's a couple topics that came up
[00:01:38]  from you know twitters and whatever and i was like okay let's let's just talk about it i i felt like it might not be as relevant after christmas i
[00:01:46]  mean don't get me wrong people love to discuss the same topic over and over and over and over again so i'm sure none of this um goes but it's funny it
[00:01:56] 's like at this time of year everybody just wants to kind of like chip in their opinions and double down um you know it's like year ending and everyone's kind of
[00:02:05]  reflecting on what they did this year um i'm uh i've been actually uh um working on uh an end of year article um kind of follow up to what i did last
[00:02:20]  year and um that definitely you know is crossing my mind as well as well as i was working on it so i can't hear myself as well as i'd like just
[00:02:29]  a second all right all right yeah i know it's wednesday how's everyone doing i know it's an odd streaming time i thought what i would do was sneak in
[00:02:45]  between prime and theo but i don't think theo's uh streaming today um so instead i just get the end of prime's overlap which i'm sure um you know how many
[00:02:57]  people are watching prime right now and you guys watching prime right now primed at 1.8 um k viewers right now all right let's get i'm just gonna tell
[00:03:12]  people that we're live mostly because uh um as you all know um if you saw my tweet there was a there was a reasonable chance that i wouldn't be live today all
[00:03:25]  right let's do this quote um twitch tv slash ryan solid right right here no i live no i am live i'm glad i caught that before i press post i
[00:04:03] 'm probably not even spelling xfinity properly whatever you don't know what you're saying yes congrats on beta 2 release thank you um that and the router releases were
[00:04:21]  like um quite an endeavor i actually glad i merged the the start release properly i made a mistake with the router release i i know this is kind of off topic but i'm
[00:04:32]  just going to throw this out here if people aren't aware of stuff if you've ever looked at your github profile you have this lovely color graph right right and
[00:04:43]  i always talked about how there's this terrible gap where i was traveling and doing conferences right that like stuff wasn't going on this was my vacation and then you're like well
[00:04:54]  what's going on in here there's a lot of gaps and then here well the thing is the thing is this only shows gap uh commits to main branches and until you
[00:05:07]  merge the work you've been doing it doesn't show up this was actually even more like sparse like the other day um and what's fun is when you go and you
[00:05:21]  make hundreds of commits on a feature branch and then you squash merge it and it counts as one commit um i did that with the router so like this this section is much
[00:05:33]  spacier than it should be so to speak even this isn't quite i wonder if this is up to date it doesn't feel like it's up to date because i remember
[00:05:41]  when i checked yesterday i was like there's way more anyways let's not worry about too much but essentially this this doesn't always tell the full story um so to speak
[00:05:56]  although it does tell you that i stopped working on weekends after this summer so but anyway let's let's continue on yeah i moving from 0.3 to 0.4 is
[00:06:21]  a lift i think the easiest way for someone to do that is to keep the old version of the router with or 0.9 i guess you'd probably be on 0
[00:06:33] .8 um with 0.4 so you can keep the route data loading patterns initially um new solid start works kind of router agnostic i i need to do one more
[00:06:45]  release on 0.9 but generally speaking you can continue to use the older versions of the router with the different apis with the new solid start so like that gives people
[00:06:57]  a path it was really awkward writing docs when i was like going through and it was like how do you do this and i'm like this isn't solid starts responsibility how do
[00:07:03]  you do this data loading i'm like do i write a guide for something that has nothing to do with solid start it's an interesting question right i think the create t3
[00:07:12]  people had this problem because you could you know opt into a whole bunch of different libraries do you provide docs for those libraries it's it's a balance since i think that
[00:07:21]  i don't have particularly a lot of time for anyways okay yeah we should talk about that a little bit today yeah i have a lot of topics that i want to that
[00:07:32]  i want to talk about um it's kind of a mixed bag um right so like um yeah this this this is just in terms of solid start and stuff yeah this this is
[00:07:51]  one of the biggest challenges i'm facing with this stuff right now because when you move really fast um even though it didn't feel like it was fast um it's hard
[00:08:00]  to leave stuff that's kind of like on the table um so to speak and uh i knew this was like there was always this risk when you with with this solid start beta
[00:08:11]  that's where we put all those warnings out right so it's like it's it's tricky um because we were at the this flux like this time period this period in time
[00:08:21]  where everything is changing it was very obvious by even the end of 2022 that everything was going to change um in i mean we knew early in 2022 that like the whole paradigm
[00:08:36]  around how we approach server rendering was going to change so it's very hard to try and like you end up torn between building the best solution of last gen and then focusing in
[00:08:46]  and building the best solution of the next gen or the next generation and this is a lot of tension because if you invest a whole bunch of time on the previous generation then
[00:08:57]  you are like way behind and it's okay if you have users but when you're when you don't have users and you're new and stuff you can't be you can
[00:09:05] 't come in the gates at the back you got to come in the gates at the front so um this was a very challenging time to figure out where things fit in um
[00:09:16]  we now have something that i'm very confident in because we we separated things along the rate of change things that are changed and opinionated those aren't part of start anymore the
[00:09:27]  core start now can be much more stable so this is this is this is kind of like an extension of what we've done with solid ecosystem in general people assume that this meta
[00:09:38]  framework should be the most opinionated piece the piece that sits on top of everything else and puts it together and in a sense that's why the meta framework frameworks were formed
[00:09:48]  but i think we actually have to build from the base more than anything we have to understand that like it's actually things like the router that are more most prone to change right
[00:10:01]  solid itself hasn't changed that much in the last x number of years i want solid start to take on those kind of characteristics right um that's it's a different mentality
[00:10:12]  but it's something that was essential as a small open source team trying to maintain this stuff because honestly knowing the type of change that's coming in the next year or two it
[00:10:22]  would be stupid for us to just like whip out a remix or next gis clone like just absolutely the dumbest thing we could do in our position um like i i
[00:10:31]  know this doesn't sit with people trying to build up with solid today but it's like it just it really makes no sense yeah um big the other thing is like solid
[00:10:52]  start beta 2 um the apis are good but some stuff still needs to shift around here i since we're talking about salt start we should might as well just start there because
[00:11:02]  like that's the release piece uh uh but and i can show you by actually going to the the repo here i'm actually going to go stay there we'll get into the
[00:11:12]  the main dirt of stuff in a few minutes but what the reason i want us to start here is these examples now in this repo um which are also start examples if you
[00:11:24]  went into this bare example and i did turn off to be fair i did it asks you whether you want to use ssr or not but this example does not have a
[00:11:33]  router does not have doesn't need sr actually most examples don't need ssr because we support server functions even with client-side rendering but if you come in and
[00:11:41]  see this like hello world application where it's just an app tsx app css basically an index html i call entry server and then like your your render command
[00:11:52]  the difference between this template and github solid js whatever it doesn't just want to get here the difference between that template and like these templates like let's just look
[00:12:11]  at the base ps template source app tsx app css index which is i believe our render call yeah and then index html is out here it's it's it
[00:12:27] 's basically the same thing so i think ultimately what we're going to see here in this all-star project is these templates actually just become our templates and don't belong
[00:12:38]  here probably um and that we're going to replace the cli for solid start which i can't even build anymore um which is this other package here create solid with the new
[00:12:51]  rust cli that um tommy pop and a bunch of them have been making so like solid start like and this mdx library honestly just doesn't belong anywhere i
[00:13:00]  don't really know what to do with it it's just like a couple plugins someone can make this themselves i think it's like one file like like i don't even
[00:13:07]  know where this belongs it doesn't even belong here like mostly commented out so what i'm trying to get at is like start is just this and it's it's it's
[00:13:21]  interesting because it makes it less a meta framework and more of just like a i don't even know what to call it it's like it's like a is it like
[00:13:29]  a framework like solid's a library solid start is a framework like it's just the platform you build things on it's not like i figured out every piece of the puzzle for
[00:13:43]  you interesting yeah i mean we take big influence from astro team in the astro docs so yeah and that's the other thing like how many docs efforts do we need
[00:14:05]  can we merge it i mean to be fair there was a bit of a thing when i released the new version the router and all the docs had just been released with the old
[00:14:12]  version the router i mean i told everyone new version was coming but like what are they going to do right so like there is some interesting tension and putting it together but if
[00:14:22]  it's consolidated that gives us one place to look and one place to update so i think it's just a win well this is what i'm talking about redwood has incredible
[00:14:38]  opinions and ways to make your life easier and all the pieces built in the more you go that direction the harder it is to move with change it's just it's like
[00:14:47]  it's just you're not set up to do so you can try to reposition but like i think i i i think i even started witnessing this a little bit with the
[00:14:56]  crate t3 app obviously they were the trpc update happened at the right time so they were able to like kind of like shield it and like make it work but like
[00:15:06]  if prisma doesn't become the thing and it's a different database like you start becoming responsible for the modules you include even if you don't mean to do you think
[00:15:17]  that's what's going to do right so i think that's what's going to do right now yeah i mean it's interesting because we've been doing a lot of r
[00:15:31]  d we've been doing r d on islands and hybrid routing type stuff on one side we're doing r d on solid 2.0 but these aren't places where people can
[00:15:40]  actually help we're like for the most part like you got to get pretty deep to understand if you want to help with solid and get started you kind of want to probably
[00:15:48]  come in in at the edge we have stuff like community libraries solid primitives there's a whole rfc process there for introducing new primitives start is actually now that we
[00:15:58] 're kind of getting here is actually a good place to start on because it's actually it is a little bit higher up now that like the critical decisions are made you know
[00:16:08]  bugs i mean i always point people to docs but i feel bad because how does someone who doesn't know a project come in and document it i mean it's a good way
[00:16:15]  to learn but it's like like our biggest gaps are going to be things that are that are missing that you'd have if a large company was working on the framework where
[00:16:31]  they have people doing it right we have the r d people working on experimental stuff we have you know you know people really passionate about these various ideas it's the it's
[00:16:42]  the regular normal you know quote-unquote boring stuff that we have as the gaps but it's not boring stuff because the stuff that makes impact on people so i mean this
[00:16:51]  is just kind of the tricky part of open source i i always say like go try something build something and then see what frictions you hit and that's the perfect place to
[00:17:02]  start but um yeah that's a very generic answer yep surprise wednesday stream yes yes yes i i i try and keep solid very minimal sometimes people kind of complain about some
[00:17:23]  of the stuff that is core um like suspense and transitions but like there are certain considerations i i think we're getting a lot better at figuring out where those lines are but generally
[00:17:30]  speaking yes the router is like we didn't take the view approach and even um we didn't even really try and take the svelte kit or uh you know type
[00:17:40]  approach where we like svelte kind of all in we we're more of a react philosophy type library where stuff is out in the ecosystem but when you're a small player
[00:17:51]  like we are um someone has to build in the first place so a lot of libraries did start as things that i built over an evening or two um and then you know got
[00:17:59]  picked up more and some of them are in the solid uh official organization somewhere in the solid community organization where we've had other people pick up them like dev tools and us
[00:18:10]  lynch so yeah um solistop beta 2 actually is an astro it's nitro it's built on nuxt um so this is this is this is the
[00:18:24]  the new feature stuff you can uh hear about on the release but the the the headline here uh where am i the headline here is nitro backed we've got these crazy
[00:18:40]  new super powered server functions um router metadata library agnostic which is really powerful not big deal maybe in solid because we only have like solid router for the most part but the
[00:18:53]  potential here is huge and then we really made sure that client-side rendering works properly in this release we had a lot of bugs in the previous beta where csr didn
[00:19:01] 't work and even hybrid csr but by that i mean server render pages where you just have client rendered only components we we really want to make sure that it worked in this
[00:19:09]  release um i'm gonna i'm gonna talk a bit about astro in a bit because there there's some matthew phillips had a really good tweet that
[00:19:18]  i want to dig into that's kind of on topic today i mean pr's have changed i mean i'm interested i don't like go and rewrites solid starts file
[00:19:35]  system routing api because you prefer a different one and put up a pr without having a discussion about it first but you know there's discussions on the repo but i mean one
[00:19:45]  of the coolest things about dart always was is oh i mean i think we can see it if we look at it let's let's look at it this this is this
[00:19:53]  gives you an indicator here solid start has had 168 contributors okay and she's by 5.6 that's amazing let's look at solid js itself 156. so
[00:20:15]  in a short time this beta project has had more contributors than solid itself and i think that that's the whole thing here it is easier to come in and help us here so
[00:20:26]  we like as i said don't just like change something that's clearly an api decision in a pr without discussing it but you know yeah i'm i'm definitely open
[00:20:37]  to prs here that's the difference between solid and react that that probably needs a longer stream i don't know it's it's been a slow go i i i
[00:20:57]  haven't seen the output of it yet i keep on hearing about these internal projects um you know people like oh yeah some some people are using solid at google i know for sure
[00:21:06]  that netflix has some solid stuff going on i don't know how that project went right um primogen was using solid for a while during his for his day job um
[00:21:18]  i i know that like uh they were testing you know some mobile or tv ui stuff but i don't know like i know other companies have told us about uh you know
[00:21:30]  stuff they like there's a lot of astro solid stuff like uh nordvpn or capital one but yeah i i i i've i've been waiting to see
[00:21:41]  like uh like the push i keep on hearing about these projects from really excited developers that are having a great time with it but i i haven't actually seen the like i'm
[00:21:49]  just waiting for the shoe to drop are you concerned about the crazy appendage uh a little bit the the trickiest part is binchy in the middle um in the sense
[00:22:05]  that veat is veat and we kind of pass the plugins everything straight through veat is cool nitro does do some stuff um it's the interesting part is and the
[00:22:16]  reason i'm not being critical of vinchy here but the reason vinchy is interesting is because vinchy is actually the piece that does all the work like all
[00:22:24]  the heavy lifting and putting together after that point solid start is like trivial amount of code vinchy is actually doing all the heavy lifting so that to be fair that is
[00:22:32]  probably like the the point that there's the most concern so to speak um with this stack but like it kind of needed to happen this abstraction level and i mean i love it
[00:22:49]  like i was doing something earlier today i was fixing a bug and someone's like the the file system routing for delete api routes doesn't work and i was able to just
[00:22:57]  go in and just like change like two lines and like fix it the fact that like vinchy's set up to just like go in i think the our key thing
[00:23:05]  here is each piece has such minimal responsibility that it's not too bad the challenge is when the pieces shift under it and it's harder to kind of have them all reconcile i
[00:23:18] 'm not as i said as worried about nitro and uh beat but i think vinchy does wire a lot of the pieces together and i think that's probably where
[00:23:29]  we should you know keep our eye um no but resumability really it depends on what you what you think about resumability like quick's partial code splitting optimizer
[00:23:46]  like i guess you could say we did build it with a resume building in mind in the sense that with a with a but with a special bundle bundler layer like we use
[00:23:56]  for server functions and islands and stuff we leave the the door open for some of this you know more advanced javascript code splitting that being said when i think about res
[00:24:04] umability i don't think about it in the same way quick thinks about it i think about it closer to the way marco thinks about resumability and it's it
[00:24:10] 's it's about not running code it's not about code splitting anyway yeah yeah it should be any framework that has streaming should be able to do it the tricky part is
[00:24:30]  it's very infrastructure specific so it's like at least today to get it to work i'd have to go work with netlify closely to do it and work with verse
[00:24:39] ll closely to do it um it's possible that we figure out how to generalize this at like a nitro level but like i right now it's a next js for
[00:24:49]  cell feature i i think we need to get it and like a next js netlify feature and then the next like we need to kind of like span this out a
[00:24:59]  bit and see what it looks like um i'm very stoked now this all start beta 2 is to work with the netlify team closer on you know this kind of stuff
[00:25:07]  they're making great platform primitives um so yeah between them versell a couple others i think those are the only two that could actually do partial pre-rendering because they
[00:25:15]  have both sides of the infrastructure the thing you don't understand about partial pre-rendering is that it is basically like if you could deploy your whole app to the edge
[00:25:26]  partial pre-rendering basically does nothing it just doesn't matter so it's it's basically for services that want to keep the serverless like the node server functions close to
[00:25:35]  the database over here and keep the responses fast like the edge and get in the best of both worlds but it requires this like infrastructure link that's very specific to versell right
[00:25:43]  now all right sorry catching up on chat here you guys are just firing them off quickly i mean not the whole thing but i mean there there's there's a there's
[00:26:05]  some difficulty here in that i think the best way to explain this isomorphic javascript is a bit of a pain in the ass i'm not gonna lie i
[00:26:16]  don't think anyone actually wants it but it's having javascript on both sides is kind of the thing that informs us to make the most optimal client experience and have good
[00:26:25]  dx the challenge is like it's very hard to get like you know all three or the like the the whole triangle and um this is why like ebay had a java
[00:26:40]  backend they still have a java backend their api services and all that but their web servers are all node so that they could do uh server-side rendering in node
[00:26:52]  and using the same framework marco on both sides so that they could optimize the delivery of the page um both you know with the streamed results partial hydration using the knowledge of
[00:27:04]  the javascript framework on both sides to optimize the thing the page it was very early come i mean these days we're not like all starting to explore this but this
[00:27:11]  is like a decade ago um more that ebay did this kind of technology move and yeah they've moved all of ebay.com off of java for the web servers
[00:27:20]  but there's still a significant java presence with all the apis like there's the whole rest of the backend that doesn't involve rendering pages i probably just didn't
[00:27:44]  update it when when did yeah i guess it's like six months old or something that's interesting yeah i must have updated my ide because i haven't went to satisfy his calls
[00:27:55]  they seem to be working yeah i didn't even i didn't even look what's this one typescript yeah 4.74 weird it's like locked to a version for
[00:28:07]  some reason it doesn't matter yeah uh translation is an interesting thing we had really good translation for our original doc site i don't know if we're there for the new doc
[00:28:19]  site that's a good question the one we should put towards the docs team um show if you sign up for our discord and just like pop in the docs channel i'm
[00:28:26]  sure there's someone would more love to talk to you about this stuff a funny thing is dominic ganaway from spelt really wanted this perfect world to happen uh to
[00:28:43]  a certain degree he he was trying to shop around well actually he wanted to build the next framework he's just like forget about all your existing frameworks let's build a new
[00:28:49]  framework unfortunately we couldn't find the backing and you know everyone was too tied to their own project and he ended up joining the spell team um well not unfortunately to their benefit but
[00:29:02]  um no probably not oh today's stream i'm just going to do this week in javascript so i i'm talking about so i'll start a little bit right
[00:29:17]  now but that's not even really my my my goal here i will actually want to talk about like what's been going on with discussions on twitter i mean the funny thing is
[00:29:25]  all these questions that you you all are asking are very like the article i'm working on for year end is very related to it like moving edge actually happening to me i feel
[00:29:36]  like this whole thing died off after pre-realized db communication costs well exactly right um that's why partial pre-render is an important feature um and it's
[00:29:46]  especially exemplified by the fact that you know react server component architecture the way that it is today and next encourages waterfalls so it's kind of like there's no way that
[00:29:57]  that it was a good idea of plan and to be fair yeah like i i a lot of databases just can't move to the edge ever like we just data security is
[00:30:10]  going to be concerned so like from that perspective i think as i said a couple a year or so ago that like this monolithic authoring with distributed deploy is where things are
[00:30:19]  at i the only reason i was mentioning that that whole thing was because like some services like dino or cloudflare like only have their edge offering so like it just
[00:30:29]  that is the offering it doesn't make sense for them to offer partial pre-rendering like you either you use it that way or you or you don't right like but
[00:30:41]  yeah we we should look at that because you're right the db communication cost can even be worse than the direct server cost from the client but that i mean that's an
[00:30:48]  argument for client-side rendering over ssr2 which we can get to in a minute yeah you don't need rust yet i'm sorry i mean i'm a
[00:31:04]  big fan of greg and leptos and stuff like and i think it's really cool that you can do these things but javascript being the language of the web
[00:31:13]  has pretty much shoehorned these things in a really hard pushed way that these even these large companies they're looking for performance wasm is not giving the wasm will
[00:31:23]  give them like performance for certain types of widgets but it's not going to be like the overall architecture it's not the fastest way to get content on the page to deliver that
[00:31:30]  like you know initial user experience so like we're still not javascript is kind of tied everyone's hands if i so at the end is issue of waterfalls the
[00:31:54]  server all data calls are hoist the edge the db community better place yeah but i mean there's still this sort of reality truth that you're like i mean you can
[00:32:05]  think about it even when you render client apps right when you are as much as we'd love to send everything off in a single flight every time we don't right we
[00:32:19]  like it just doesn't work out that way so there are some inherent waterfalls so in a sense if i think especially for the working on the server function thing they've kind
[00:32:31]  of they kind of figured out how to reduce the waterfalls from client to server right like it's a nice model and to have you just push that back one more layer
[00:32:41]  and now dealing with waterfalls from from edge to uh database server even if you did it more optimally like you brought loaders in on the server which is you know kind
[00:32:53]  of like what i'm you know pushing towards it feels a bit unfortunate because you're like i just cleaned this up and now we're just doing the same thing again right
[00:33:05]  um couldn't we get rid of this all together the challenge obviously is that in reality even if your server and database are close to each other waterfalls can still be a thing
[00:33:21]  there's a reason there's graphql data loaders uh you know n plus one problem there's there's a reason like when i was building oram i took you
[00:33:29]  know it was very critical that i figured out ways to reduce the number of database requests like you you you don't want these waterfalls even if the latency is relatively low
[00:33:44]  waterfalls are never a win but if you're trying to sell a developer experience like react is with react server components and next you know like where they are right now i can
[00:33:55]  definitely see why it's like kind of self-defeating if like you just push it down the thing and it's very obvious whereas if you could kind of get
[00:34:02]  away with it up to a certain scale and it's nice enough you could just kind of like push the problem under a rug and be like yeah this is pretty sweet like it
[00:34:13]  becomes that much longer until you have to worry about this problem so it's almost easier to change the infrastructure like change the architecture of the you know like change the actual like
[00:34:25]  building blocks then then actually change the like software architecture in this case because their target is an api rather than what something they're trying to do mechanically and i i think
[00:34:37]  i'm not criticizing this because i think from developer experience this is an important thing thinking right like you can see what happens when you build apis that were designed for performance
[00:34:47]  first um not for ergonomics first um and some people have accused solid of this perhaps like the react team that's your feeling signals i actually think the signals thing is actually ergon
[00:34:57] omic from like understanding data flow like it actually makes sense to me but especially because i'm taking the position that i i think data flow can't be ignored where react team's
[00:35:06]  like oh no people don't have to worry about it but then they introduce hooks where they do have to worry about it like i'm as vindicating as that is i
[00:35:15]  i'm just trying to say it's like if you think that you don't have to worry about it then you can kind of push that off to the side but like this
[00:35:22]  scales out to a different level you one could argue say quicks dollar signs are you know they're way more for a mechanical reason you would never want them there if it weren
[00:35:33] 't for the case that you needed them there that that's what i mean it's kind of interesting because it they can actually now sell two functions instead of one i don
[00:35:53] 't know if that has a dollar price to it but it's just interesting i mean i don't think so i'll be the same way out of order streaming doesn't work
[00:36:11]  with progressive enhancement not really i mean the edge function could note that the client can't handle it and then it could buffer the whole stream and then send the whole result at
[00:36:25]  the end you're not really winning anywhere but it still work kind of the same way we do with streaming like sometimes like we we look for bots and we're like you know
[00:36:33]  like you can like set up middleware and be like hey there's a bot here we don't actually want to flush we want to hold the stream and send everything at
[00:36:41]  once in order streaming and wait for everything to finish work without javascript out of order streaming does not interestingly enough um in order streaming is like really hard to do with js
[00:36:56] x um although like like i i know some frameworks support it it's it's funny in order streaming is really good for like can i see it live here in order streaming
[00:37:07]  looks like ebay.com i mean it's too fast but like essentially it's really good when your content kind of comes down in these sections and you just kind of feed
[00:37:18]  them in and there's no layout shift out of order streaming is very app-like right it feels like your old single page apps where you have this like it feels like
[00:37:25]  where's twitter can i reload twitter somewhere see the loaders come in and stuff i mean ideally this would be already perma perma rendered maybe not the circle but yeah i
[00:37:41]  i don't know generally no yeah i mean but this is a matter of skill some people used to complain that old svelte was easier up front some those people also
[00:37:56]  hate ruins for some reason but they're kind of living in lala land i saw a post i think primogen put some post out um let's see if i can find
[00:38:04]  it the primogen right uh um i'm probably not going to find it he he it was it was some very pro felt for beginners post that he wrote that and there
[00:38:30]  was a linked article um i'm never going to find it am i we should talk about dhh and this no build thing that's hilarious you can actually literally see the the
[00:38:47]  javascript waterfalls happening here he's like literally like broadcasting why this is not the best idea um yeah i'm just not finding it never mind doesn't matter my
[00:39:07]  point is like i think and maybe this because i'm gonna you know advanced developer whatever term you want to use for it i think we put way too way too much emphasis
[00:39:19]  on on the like easiness up front bit don't get me wrong you don't want to be uninviting to beginners you have to make sure that you find a way
[00:39:29]  to hold their hand make sure they understand the concepts to move forward but if you build your whole framework around that concept the end result of when you become further along the path
[00:39:43]  is never going to be as nice or clean you know okay yeah i mean it depends on your business if you're ebay no literally squeezing every possible thing out of performance
[00:40:15]  is a hundred percent worth it you're in e-commerce at any kind of large scale you you should be just trying to squeeze every inch out of performance everybody else like i
[00:40:26]  don't know i i mean it's it it enters a more relative thing you see correlation but there's also what kind of performance right i think i think it's interesting
[00:40:39]  we keep on seeing dax show these demos right where like look look look at how fast i can look up 60 000 users and do this whole you know super you know
[00:40:50]  performant thing this kind of performance is not the same as your lighthouse scores this is your update performance and granular rendering performance thing right rscs won't help you do this
[00:41:01]  no they won't because that's not what they're for you know rcs are kind of like a routing paradigm don't get me wrong this amuses me to no
[00:41:12]  end because all of this whole this whole dialogue that we've been talking about client-side rendering versus server-side rendering the dax and like nex are going back and
[00:41:21]  forth with involve basically react server component projects versus client-side solid js projects i don't know if people realize that everyone keeps on asking his stack which isn't the point
[00:41:32]  because you could probably build this relatively good in a lot of front-end client stacks he's saying architecturally server components aren't the fit for everything but because everyone's like
[00:41:43]  oh what stack it must be the stack that makes it faster we've got a lot of a bunch of people who are now like yeah man solid js equals fast i mean we
[00:41:50]  already knew that but like it's definitely amusing to see these like 1.2k tweets here kind of get us to that dialogue i think react to start with hard meeting
[00:42:07]  is not as funny yeah it's pretty opinionated maybe not like like here use this exact library but react like from where i'm sitting has a lot of strong opinions i think
[00:42:18]  the difference is there's a difference between libraries that go like use this tool and libraries that actually say like these are our philosophies and best practices we won't force you
[00:42:28]  to use these tools because we you know but this is how the best put the pieces together um i think if you don't have either or then it's a bit like why
[00:42:39]  are you doing this like either you're like use these libraries because i have the solution or you're like i have a belief how things we've done in that in that
[00:42:47]  sense as i said it's all aligns much more with react than some of the other frameworks um i think if you're worried about hard to maintain i think it's because
[00:42:57]  currently there's like i remember people who had old class component react sites didn't complain about the maintenance maybe it was too early in the react life cycle they complained about not being
[00:43:10]  able to like extend behaviors and having good patterns or mix-ins i think the this maintenance thing really came out post hooks because you have two things at odds being aware of
[00:43:22]  how data flows your app and not being aware react told you don't care yet you needed to care that contradiction right at like almost a fundamental level is why react code bases
[00:43:34]  have become harder to maintain in my opinion okay and yes when you take a best practices approach you can always add that layer on top i that's why i like i'm
[00:43:55]  very what's the term bullish on react style philosophy in these cases because like you can always find a way to walk into some specific opinions you there's enough people you go on
[00:44:12]  twitter you'll find someone who tells you the best way to do something don't like it's not hard to find that but not having the flexibility to change well depends what
[00:44:22]  that opinion is but sometimes that's the death sentence i don't know where dh is aha is in in in some regards like i just don't like i i don't
[00:44:40]  i don't i don't um actually i talked about this on stream why i think the no build thing is silly but there was actually an article this week um or no
[00:44:51]  actually in october after he did his first thing and i think everyone should read this article because it's completely on point um here let me let me let's talk about
[00:45:08]  this article for a minute um also i want to switch over to twitch and um thank people who have subbed including um ilkou99 who oh no that's just a
[00:45:23]  watch streak that's that's still cool i three streams in a row is nice i i appreciate the support so i thought i thought i was having some subs coming in oh there
[00:45:31]  alien codes subscribe to tier one awesome see you again okay so let's talk about this okay sorry i we'll get to this in a minute i just read this comment and
[00:45:58]  i i have to respond to it i mean i use angular it's a pain but it forces you to record the right way so when i work on react review projects it
[00:46:04] 's much easier you can write however you want yeah yeah yeah that's the opinionating part the funny thing is like this is where people have the different comfort levels because like when
[00:46:12]  i look at react i'm like wow like like like when i see react and i see the way they talk about it and i see the way they document and i see the
[00:46:20]  way they suggest patterns like in my head i'm like this is not signals friendly they are very opinionated they do not want signals right i don't think most people like
[00:46:29]  see that necessarily right off the bat like like i've watched mob x and react do this dance for years you know what i mean but on the other hand like if you're
[00:46:39]  just like this is the angular way what happens when angular is like yeah we change our mind we're gonna use signals now or something like and they change the way like they
[00:46:48]  just like that's a pretty strong signal sorry to say like like i think everyone has their own comfort in terms of where that balance sits um i think you're going to find
[00:47:03]  that there's different benefits i think a lot of enterprises a lot of places where you want to like make the development machine are going to go towards places where those opinions are there
[00:47:12]  and there's just like this is how you do it don't question me why i do it just the way you do it but i think when you're trying to solve
[00:47:21]  novel new solutions and you want that flexibility you're going to definitely favor the other way anyways this article um the three c's concatenate compressed cash um we can run
[00:47:40]  early july 23 began underwhelmed and left unfinished of course dha steward what this guy did was he's like okay is bundling worth it right because what does
[00:47:50]  bundling do it puts everything into uh the same file so it's instead of separate files it compresses them so generally you use like minification terser i mean i
[00:48:00]  don't know if that's that's the obviously there's going to be compressing it over over the network and then on the other hand you have this question of cash
[00:48:06]  and validation right concatenate is probably the trickiest but to get right because even though three c's happen order decisions happen later okay blah blah blah in ht1 world
[00:48:24]  we're left with six resources at a time right if we need to go down 18 files that super chunks of work we could bring it yeah okay see this is the thing
[00:48:32]  i'm not used to all these like chunks um so but what he showed is that h uh hdb2 should have changed things but it actually doesn't necessarily like he
[00:48:47] 's showing you know the impact of fetching 12 and he this was very interesting hd2 was 1.4 times slower and about three times three or 3.3
[00:49:00]  times heavier and i think the reason is when you split into separate files you end up actually adding extra weight to it is this a compress size as well because the other problem is
[00:49:10]  you can compress less efficiently when it's not like bigger chunks compress better yeah compression favors larger files the oversize 10 smiles would be greater than the original one add to the
[00:49:21]  browser scheduling mechanisms were unlike the dispatch all 10 requests right he was showing that with no compression many files was slow was was smaller from a css standpoint it was all css
[00:49:36]  if this is css this is actually kind of cool because css can't even minify when you consider minification as part of this as well these numbers even get
[00:49:44]  more exaggerated okay but yeah many files three six six three versus one large file so it's definitely better for many files but as soon as you gzip it it flips or broadly
[00:49:56]  it it flips more extreme like this graph kind of shows it it's like once you add compression the the equation just flips right around and then finally yeah he's talking about
[00:50:06]  cash and validation obviously cash busting and stuff is tricky and there's like a balance here but like this is another example of one of those things where like if if you take
[00:50:17]  you can always do less concatenating or you know change the scheme when you have a build system in place but if you take that out of the picture you just tie your
[00:50:26]  hands from being able to be as optimal as you can be it just like it's it's just kind of like there might be a reason to do go no build but
[00:50:34]  like you are definitely taking away your power to to you know deliver an optimal site anyways we need more resources that dive into the problem these these solve exactly sometimes it feels like
[00:50:53]  react to the stick red active than this react is definitely because react is a general purpose front-end framework most of these are general purpose the thing is these frameworks generally don't
[00:51:02]  solve a specific problem like they solve it like in a wider sense they solve a specific problem but all view solids felt all kind of solve the exact same problem so like you
[00:51:16]  know some are faster some like the differences are nuanced enough and situational enough in a lot of cases that it's hard to actually just be like choose this when you want to
[00:51:27]  do this and choose this when you want to do that on the meta framework side you know architectural you know like comparing astro to next that's a little bit clearer of a
[00:51:36]  division but um you know something like react is it's popular and you can generally do everything sold oh and sorry i missed it and lots of people use it sold our meta
[00:51:53]  frameworks that hydrate on the client like next to do for heavy content sites or static generated site to generate the scenario depends on how dynamic the stuff is i don't think obviously
[00:52:06]  like the one of the scenarios here is like how bad is that javascript in that hydration and how much does it actually matter for your site that's another question right
[00:52:14]  generally speaking if you don't need it you know then like don't bother but i think i don't know if for everyone it's that simple because what if you do need
[00:52:25]  it right there's a spectrum which is kind of why people like astro but i i think the message kind of gets lost a bit right so like while a lot of
[00:52:40]  the you know of this like choose the right uh tool for the job kind of conversation comes up which is like because the right tool for the job is usually not based on technical
[00:52:52]  merit in my experience like it's a little bit but it's not like that like there's definitely a right tool for the job given your team and your organization and all that
[00:53:01]  stuff but it's not always as like technical there's too much overlap and nuance um sometimes there's so i don't know if there's always a right tool for the
[00:53:11]  job from a technical sense but there's often a wrong tool for the job and that's probably where you want to avoid things like you know there's certain cases where i would
[00:53:22]  not want to use react probably in those cases i probably wouldn't want to use solid either but it would be maybe passable right um you know i'm just as an
[00:53:33]  example uh anyways this article is is is just great it gives it gives hope for you know different bundling stuff but i i it just the dhh conversation is just i
[00:53:51] 'm tired of it i don't know what he's selling i it's it seems like a lot of garbage how concerned do you guys think that the the development team should
[00:54:12]  be looking at migration path okay i should rephrase this a bit because when i was working in a startup i was very concerned about how easily i could remove this this piece
[00:54:32]  of this software i was like okay if i i don't want to use this chunk can i remove it and replace it so i i will agree with it what i was
[00:54:40]  more getting at is there's a limit to to that right you can define boundaries and look at like certain types of technology you're like okay i have a database system how easily
[00:54:52]  is this swappable or this you know but i think one of the challenges is within the same zone it's very hard to predict the like i used angular in 2012
[00:55:04]  i'm going to use react 2016 like the for the thing that will replace the thing itself and not the boundaries i think it's hard to be prepared for right like you can
[00:55:17]  think you can set the right boundaries but you'll probably fail like i went through a migration where you know i kind of watched this kind of pattern where we had to completely
[00:55:28]  like we were just changing our view patterns so we were moving to like a web component with knockout solution from like a very mb mb or sorry mvvm
[00:55:37]  pattern and sure it started with just replacing the view layer but then we had to change the hook up to the data layer like basically all our cleanly built boundaries no longer were
[00:55:49]  clean because the the boundaries themselves shifted architect architect architecturally so like i think we do have to somewhat anticipate removing pieces but then we also have to realize that boundaries change over
[00:56:04]  time so we we shouldn't necessarily put too much work into enforcing the contract of those boundaries necessarily unless it's a people boundary because when people are involved everything gets more
[00:56:16]  complicated but if you're kind of within the same team or whatever maybe not because those walls the more you build up the harder they are to tear down and that is the biggest
[00:56:25]  pain of migration in my opinion the boundary shifting not the replacing libraries thing what color is your lab bikini though thank you oh man no frameworks use signals should be easier yeah
[00:56:56]  i mean there's hope maybe a browser standard signal i'm glad that these forces at play that try to standardize and these other forces that try to innovate they're like
[00:57:05]  constantly like they're forces they're not people they're not groups that things shift where they fit on the spectrum over time but there are forces at play that cause us to constantly
[00:57:15]  pick apart things that innovate and other things to try and find standards and without both working really hard at the same time we don't progress right like so i don't know i
[00:57:28]  i want to be optimistic about the other side i i obviously spend my time on the uh pushing boundary side less on the standardization side um oh i guess i spend my
[00:57:40]  time in the middle really because i focus on the primitives but like it's just never that easy okay so um yeah okay i we talked a bit about no build i don
[00:57:57] 't actually have much more to say about no build to be fair but i want let's let's talk a bit about this whole ssr csr thing because um
[00:58:05]  yeah it's it's kind of funny because this data loading pattern here that he's showing here yeah you probably wouldn't want to use a server component for it but you could
[00:58:18]  put this component on an rsc rendered page and can i get the same thing i guess i what he's talking about though is i think this is like an offline setup
[00:58:30]  so like local first is it local first so funny local first we go through these trends in web dev because local first was like so hot late 2010s like from 2017 through
[00:58:43]  2020 and then it's like disappeared everyone like went to ssr during covet maybe it was a push for e-commerce and you know all the vcs buying up all
[00:58:54]  the the open source frameworks and they're like how do we maximize our our profit because in e-commerce page loads or everything we need good ssr i don't know
[00:59:03]  but um people haven't been talking about local for first much the funniest thing though is and i've showed this on stream before i wonder if i can show it again people
[00:59:13]  might remember that i did i used to do this like hacker news was it hacker do i even have it anymore hacker and hacker news csr yeah i usually use this demo this
[00:59:27]  is a client rendered hacker news demo right and you know it's pretty fast it's it's it's we're fetching directly from the client you know and it's
[00:59:38]  all client rendered doesn't even render the page and you'd think that if i went to a page that says has a bunch of comments in it and i reloaded the page
[00:59:47]  and then i took an ssr page that you know version that has pre-loaded the page and then hydrates it that the ssr page shows the content
[00:59:57]  first so it should win on like a lighthouse score ironically not necessarily because they look at stuff like blocking time and javascript and when especially pre-streaming before we
[01:00:12]  had streaming the server render page would be slower to respond because it needed to fetch all that data before it showed anything in the browser and if you're the funny thing is like
[01:00:23]  yes if i took this to browser simulation did mobile you'd see that you might see the difference but locally you know on my machine so to speak you never you'd never
[01:00:32]  see it because i'm in silicon valley and i have a fast internet connection if the internet connection was fast enough um it would outscore it and in fact this is how
[01:00:42]  solid before we had ssr was winning all the real world demo comparisons and stuff against all like the uh you know next js's and uh what was the sapper
[01:00:52]  equivalents because literally their server function or sorry their server rendering actually made the page load lower slower which it's crazy now it's partially because they weren't handling data waterfalls
[01:01:03]  properly and like a whole bunch of other stuff and people building these demos weren't necessarily the framework authors and you you know so on so on but my point was that with a
[01:01:12]  fast network connection you're never going to really suffer this and even early solid streaming we never used to stream html we actually used to stream only data it was it
[01:01:22]  is slightly faster in these fast network situations than streaming the html and you might be like how is that possible they both end up fetching on the server on that initial
[01:01:35]  request they both serve the page right away both start you know rendering the javascript right away well the difference so subtle was that when the server rendered page hit the suspense
[01:01:52]  um like it base basically like the the the server rendered page hit the suspense boundaries it would stop because it needed to wait for the content to come from the server to continue
[01:02:06]  hydration where the stream data version while it still needed the data to actually finish the page it actually kept on rendering into the suspense boundary the way it does when you use client-
[01:02:17] side suspense right it's doing it off screen so that when the data came it just filled in the blanks and showed what was there which ended up being faster than moving the
[01:02:26]  content that you streamed to the bottom of the page the html and inserting into place and then hydrating it crazy right so i just want to point out that
[01:02:39]  there it isn't necessarily completely clean cut another example is like all these server loaders that we're using these days and server functions sometimes when you do the hop like do
[01:02:50]  i have to scale or draw this think like think think about what what happens here we have you know api service over here here's our api right and then here's
[01:03:04]  you in your browser um actually let's use a different shape for api never mind let's let's let's let's do this let's use a different shape for
[01:03:15]  api i'll make it a circle okay our api server is over here right again part of this is we're talking about classic kind of architecture sometimes when you try and
[01:03:28]  put an existing architecture into a new architecture you know you're not gonna have the best results but um what do we want the background or browser to be i don't even
[01:03:39]  care whatever put a browser here and let's make this a our serverless function and we'll give it a different color let's do that okay now when you do client-
[01:03:59] side render app leave the arrow white you're gonna do this when you do uh uh like move your data fetching to the server app you're going to do this if
[01:04:17]  if it's just proxying it like maybe this is the edge maybe this is this like assuming that you're always still going to get your api like you have a
[01:04:26]  separate api service which a lot of everyone coming out of the 2010s did which has an interesting thing because you can already see the length of this is longer than the
[01:04:33]  length of this um obviously this is because i drew it but sometimes you know edge functions it can be like this sometimes it can be a bit like this you know you know
[01:04:47]  you know what i mean like sometimes it's it's sometimes it's like this you know and in in these cases you know it's actually kind of you know which side you
[01:04:57]  do more of more of this or more of this i don't know right but in almost all cases where you can do this this might be the most direct pipe like you
[01:05:08]  only need to do this on initial render but this kind of split you know like there's a lot of reasons to do this you know security considerations or like caching or there
[01:05:20] 's a whole bunch of other reasons why you might want to do this but i just want to kind of point out here that like server functions to just fetch another api
[01:05:28]  um are adding an extra hot potentially i guess are the best dax apps are so fast that friday shifted today so i i just i like it's okay sometimes shaving
[01:05:58]  these milliseconds for like if you only have to go here and you don't have to go here well guess what you just want considerably right so like it's not as clear cut
[01:06:06]  i just wanted to show that like technically speaking it's kind of like if i took go rendered my page on the server or rust or something and then wrote pinpoint javas
[01:06:22] cript updates using vanilla js kind of jquery-esque my hydration costs would be basically zero um and i'd have a very optimal page and i you know basically have a
[01:06:38]  server first architecture maybe you know i could even add like swaps i could do something like htmx does and in like swap pieces and like can i kind of
[01:06:48]  get this and like if i did exactly the right thing handled the right javascript in the right way like that could be more optimal if i made the right decision points at
[01:06:59]  every point you know in terms of when to swap with htmx when to do js when to do this then using some modern framework abstraction but then there's like
[01:07:09]  there's always this question like will that scale with people and if that's the case like how much am i losing here versus like like i can apply those optimizations elsewhere right
[01:07:25]  caches or whatever like just trying to understand where a reasonable balance of how concerned you could be because at a certain point the one thing we do know a hundred percent is
[01:07:35]  that if you just were jquerying and htmxing it there is a level of complexity that that will be absolutely insane and it will get to that complexity
[01:07:44]  before say react does but maybe you don't get there so who cares right this is a bit like when people have been asking me on stream about astro i keep on
[01:07:58]  getting them i'm not ignoring you i'm gonna get to astro in a minute i just i just wanted to kind of frame this a bit properly because i i i
[01:08:09]  want to talk about this ssr csr thing first essentially yeah i'm having a good time using htfs and lit components and lit ssr yeah there you
[01:08:23]  go um i that that that gives you a few slightly higher level tools um and i think i think an experience like this is almost like it's almost like a makeshift
[01:08:36]  astro at that point right because you're using htmx to load partials then you can server render these uh lit hydrated components and you kind of yeah you
[01:08:47]  kind of just made astro so to speak um so i'm sure and the cool thing is like you didn't pick up in a sense you didn't pick up astro
[01:08:55]  you just used a couple things you chose and put them together so that's very powerful but i i am getting somewhere here eventually ignoring astro fans is dangerous i'm not
[01:09:06]  not ignoring astro fans we'll get to we'll get to astro um i i want to i want to where are we where are we yeah we already talked about da
[01:09:19] x here but um it's he's been going back and forth um with this guy and honestly i read this tweet and there was so much i wanted to unload out of
[01:09:38]  this one like i was like man i could just do a whole stream on this one tweet and that's largely why we're streaming today um but i i think there's other
[01:09:47]  references points that we don't have to like spend as much staring at guillermo's face right here um but there's a there's a lot of nuance here now
[01:10:01]  i i kind of want to look at this a bit because i'm glad he clarified the csr spa world because as we saw from multi uh last week um there's a
[01:10:11]  lot of people when they say single page app they mean csr um i think single page app and csr should not be equivalent equivocated like i think like single
[01:10:23]  page app can be csr'd it can be ssr'd the thing that makes a single page app is because it operates off that client style routing basically the app
[01:10:37]  has this like the it's a single connected client side app the part that makes the architecture it is client rendered client hydrated in a sense but the fact that the whole it doesn
[01:10:52] 't prevent it from being pre-rendered is all i mean like it it it is fundamentally a single entry it's not like islands and i'll explain the difference of
[01:11:04]  server components in a minute um but these characteristics define its architecture right you must be willing to ship all the code for all the possible data before rendering can begin this is why you
[01:11:15]  see so many spinners blah blah blah um you know he talks about google a bit but yeah let's let's pick this apart um a little bit yeah see i don
[01:11:24] 't consider server components a single page app architecture and i'll explain that in a bit but next has always been you know historically a single page thing that was why it was so
[01:11:37]  hilarious when guillermo posted um single page apps were a zero interest great phenomenon i uh yeah i i if he was talking about csr i get it but in my
[01:11:47]  head he was talking about next.js like that's how i read it which you know but i i know that's not what he meant it was just that was where my
[01:11:57]  amusement was yeah no this this is the problem with csr was not a term right we just had single page apps that were originally client rendered then they had a pre-rend
[01:12:08] ering and just in the same way that when originally multi-page apps was not a term mpas no one called it it was like we had websites you know like my
[01:12:17]  rail site and then we had single page apps we had to backtrack once this often happens once you get a category once you define it you have to define what the other alternative
[01:12:28]  is so now that ssr has become so prominent we now have to say csr but they are both single page apps and and in the sense now that single page
[01:12:38]  apps have become so prominent we have to say multi-page apps and just instead of just saying website because website could be either it doesn't mean anything anymore so okay one of
[01:12:45]  the reasons react server components are inevitable much like thanos is ui is a function of data this is true data drives pretty much all of user interface like sure there's layout
[01:13:01]  but it all is driven off data right this is why i think data flow is really important in ui components why i'm a big fan of signals because there's a
[01:13:11]  difference between saying this in the general sense and drawing this or state or whatever the hell you want to call right we we've all seen this ui as a function of
[01:13:32]  state thing before in general i can agree with this the problem is when i see this this implies like um state composition right like this implies that that you know we should define
[01:13:53]  that function is could be function sorry i'm trying to think of like i'm trying to i'm like making up notation while i go i shouldn't even use that but
[01:14:05]  i'm i'm kind of just capital f function um defining function is i'm just whatever could be function one state plus function two state and so on right the the problem i
[01:14:27]  have when i look at this is it almost looks like it's a single tree like that it's just like you and and it actually could be state part you know here
[01:14:40]  like and this isn't necessarily true this is like i think the biggest flaw with the like react from a fundamentals thing it's not a tough law it's like a choice
[01:14:57]  to oversimplify it to to basically say that this is true because then it removes a lot of the things you have to consider but in general state and and ui
[01:15:10]  overlap but they aren't the same thing they aren't the exact same tree state can affect multiple functions which this can handle as well but the problem is you can tell the
[01:15:19]  problem right off the bat you your state only has one entry point and then it works out that's not how these things work those connections are not necessarily along the composition boundaries and
[01:15:34]  they don't the ownership doesn't fall out here somewhere where you pass the state in like let state and then passing it that that is the flaw or limitation of thinking purely
[01:15:48]  in like react zone these things are tightly coupled and related but they aren't the same boundaries they aren't actually the same thing um this doesn't have very much to do with
[01:16:01]  this tweet it just it immediately caught my head here because react server components you know and data fetching inside the component and stuff like the the whole like pattern and not ho
[01:16:17] isting and like all that thing kind of it it makes perfect sense for react because it plays into the same over simplification which is probably the source of most tension in
[01:16:29]  react architecturally although it's also the source of the most simplification like it's a double-edged sword um i just wanted to point out that ui is a
[01:16:37]  function of data in a general sense yes in a functional programming sense i think that is like the react brain sort of thing and i think it's not quite necessarily the best way
[01:16:54]  to model stuff that's cute like it's it's fine this is a good model you need a mental model when you go into using a framework stuff that the mental model
[01:17:10]  is more important than the tool itself okay sorry a question came in before i should have moved on um let me just a second but that i just want to kind of lay
[01:17:28]  that out do you think you will get to a point where all we can do all the rendering the client no sr even for seo heavy pages assuming that the kind can
[01:17:33]  start data fetching and stream it down no no i'm that first i mean unless something fundamentally changes with the web in terms of preloading you know because the the e
[01:17:45] -commerce guys who are seen to be driving the direction of the web are all about that first hit the reason we do all of this is because shoes if this link click
[01:18:03]  is slow i've already bounced this must be a single page app you see how slow that was i'm i'm on fast internet sorry kareuma usa does anyone here
[01:18:22]  do better how about rothy's not bad rothy's this alone is is is probably going to have to be impacted i mean it depends where the money's coming from
[01:18:42]  but it's like if you can solve this problem why don't you that wasn't a dax out yeah well but the the data fetching isn't that okay okay
[01:19:07]  okay well i mean sorry maybe i misunderstood your question when i say client rendering i'm assuming the data fetching is happening on a waterfall from the client but to the let
[01:19:16]  me read your question do you get the point where we can do all the writing on the client no ssr even for seo the server can kickstart data fetching
[01:19:22]  and stream it down okay well i mean yeah i mean that i mean that is ssr kind of i mean i used to do this in my own old spa pages
[01:19:36]  we'd server render the the data into the top of the page and then we'd render it with the client side that's how we used to run it a bit of g
[01:19:42] ami um yeah i mean okay may it's interesting i didn't talk about this yet but see google bot can handle the seo of these javascript heavy pages that do
[01:20:01]  the rendering but they they downgrade it like if they can read the html synchronously like they they they give it a different like the scoring and stuff works different
[01:20:10]  than if they can't get the page all all at once um so i don't know i feel like we're still a ways from from uh from this really being a thing
[01:20:24]  it's interesting though because i can see the desire here especially when you talk about offline experiences because you're like you're only paying that upfront cost once you know like in
[01:20:35]  a sense mobile apps are like that you like download the app and then you're kind of done right it's interesting like what we're optimizing for it's quite possible that we
[01:20:45] 're over compensating for this scenario oh what's this website middle ground but like i don't know yeah yeah yeah yeah i know this is about other backends and this
[01:21:15]  is the problem i mean it could change in the future and stuff right the way stuff's heading right now for the best client side um experience you have to use javas
[01:21:25] cript on the server it's just like non negotiable like it's it's that's why i made that comment when prime rated my stream a little while ago about like the
[01:21:34]  best thing you could do to improve your performance of the app for your front end users is use javascript on the server and they're like i'm not like i don
[01:21:42] 't mean for everything all that but i am actually relatively serious about that right now i know people are doing go server component stuff it's really interesting with a server component model
[01:21:53]  that you could be like well i can make the server components use go like if they could process the javascript the problem is like how dumb is your templating versus your
[01:22:03]  logic i it almost always leaves you into two systems which is fine you're kind of opting into it for performance reason but i don't think i think the er like
[01:22:18]  the dx people are going to be chasing after something else for quite some time because there's this hope dream that we can just write stuff a single sort of way and for all
[01:22:29]  the work and almost all the things that involve splitting the languages don't give you that that experience the thing about this drawing here um that i showed in excala draw earlier
[01:22:47]  where i struggle the api is consider an alternate um architecture that looked more like let me put something here what color do i make this blue i don't really care an
[01:23:10]  alternate architecture that looked more like this now i've made this edge this could literally be any server we don't really care server thank you skeletal draw let's widen it
[01:23:31]  a little bit this is why triangles are not good or this is why diamonds are not good shapes but what i'm trying to get at is if you remove the api hop
[01:23:46]  this could essentially be the the same difference like this is your api i heard a node.js tribute say they have built more perform.js apps than rust apps
[01:24:17]  i i i i'm not sure what to think about that because it's like i i think the beginning heard a node.js contributor basically says a lot but yes i mean
[01:24:26]  javascript doesn't have to be slow i remember we were testing at our startup um the difference between running our service in node and running it in uh python and because
[01:24:38]  of the like i think we're using tornado or something because of the the uh parallelization of the way node was handling like async it was actually more performant for our
[01:24:50]  use case than using python for example i i don't know i there might be scenarios where this makes sense you know the true diamond problem yeah yeah so yeah the reason
[01:25:19]  i i want to draw this for a moment was just to kind of like highlight that uh let me see there is a question that someone had written a comment here about data fetch
[01:25:31] ing it's fine i'm not gonna worry about this all right i was recently thinking about sr and even though it's not good and even that it's not good
[01:25:39]  enough because we are proxying your request to an api maybe we need to figure a good way to templating with progress of enhancement yeah sorry i i took it out
[01:25:45]  of context i was just thinking about the fact that like a lot of the monolithic frameworks are actually telling you to do this and not do this like if you have an ap
[01:25:54] i make it a separate endpoint like have them both talk to the same like this the same back end that was the only thing i was kind of playing with anyway um because
[01:26:07]  they're making use of edge servers yeah right exactly that's probably where the it comes in you then you effectively need a certain api i don't know does prisma work
[01:26:20]  on edge yet prisma even fast okay let's get back to our our buddy guillermo here okay in a csr spa world you must be willing to ship all
[01:26:30]  the code for all the possible data before rendering can begin this is is that true no that's not true for rendering to begin i i we had to think about this again
[01:26:51]  now obviously if you do break it up a bunch that's why you see a bunch of spinners especially if you don't module preload and parallelize them you know
[01:27:03]  what i mean like you should make sure but see in a csr world you don't know what page you're going to be on so you can't very easily module pre
[01:27:10] load them like if you go into a hacker news example here and we go to the network on our csr version there's probably not that many uh this is is this the
[01:27:21]  new version oh yeah damn it i gotta i gotta always go incognito because freaking chrome extensions okay let's go here let's look at the js what okay so yeah
[01:27:36]  see because it gets the main bundle it gets the stories page but then it's like oh i didn't realize i needed um actually this stories page is something i injected myself usually
[01:27:47]  it would get the name bundle because i knew that most people would land on the stories page so i always load it but most people get the late main bundle like get the
[01:27:55]  main bundle and then they cascade into the specific page they need right because like so like this was a performance hack i did myself um whereas like when you ssr the page
[01:28:05]  you know exactly what javascript you need the for the page so if i went to like this version what you're going to see is these load at the exact same time
[01:28:16]  see entry and id because you you have that information so i will i will i will bite on this a bit because on csr you don't need all the code because
[01:28:29]  you don't need to load the code not on your route but um you don't know what page you're on before you know what page you're on so there's this
[01:28:38]  inherent waterfall if you could use code splitting so there's like always going to be that spinner i don't think spinners are a bad thing streaming for example also has lots
[01:28:46]  of spinners because you send the response back before the data so i think i mean there's a question here there's there's a balance but when you can send back feedback
[01:28:59]  like from an affordance standpoint you can go you can either go wait for the whole thing and wait for the whole thing and it shows up in one go which is smoother
[01:29:07]  if if it happens relatively fast or you can show feedback while it's loading and load the thing sooner and show that it's loading usually up to a range that is better if
[01:29:21]  the if it's fast you want the you you might not want to be as heavy-handed if you already have content on the page you probably don't want to drop back
[01:29:30]  to a loading spinner but on that we're talking about initial load here like tell me i'm going to the next page like like to the new site or whatever so yeah
[01:29:42]  i i i'm not necessarily i i'm not necessarily complaining about the spinners but um there is this waterfall and you do need the javascript to hydrate how
[01:29:59]  who's telling you what like something on the server needs to know what like this you need the the first bundle to load in the client parse execute to figure out oh window
[01:30:22]  location i'm on this page which what's the next javascript chunk the server would otherwise have to be able to have the routing information to make that decision for you to
[01:30:31]  pre-render it so like in a pure csr example you don't get the module preload the the the next the page like the soonest you can do it is
[01:30:40]  when that first chunk of javascript executes yeah yeah i mean i'm the way he worded this is why i felt like a little bit you know you know
[01:30:58]  what i mean like that's why my first thing was like no this isn't true but i mean let's continue imagine if google was a single page app the calculator weather
[01:31:11]  shopping flights snippets all ai movies playing rest in every custom experience the client would know how to render for a server to load up all these code paths is not no big deal
[01:31:20]  servers are bigger than clients okay sure deal with lots of stuff and they can keep it in memory yeah blah blah blah blah blah okay but i'm not google i think more like
[01:31:31]  google than you give yourself credit bors or you should be think about future flags under development experiments geotard experience promotions ai capabilities adding blah blah blah okay servers have data
[01:31:42]  ai's servers know how what to render clients get it in one fell swoop as a stream without extra hops it's actually the simplest architect you can see even one of that
[01:31:50]  has made google amazon facebook succeed billions of users before you ask yeah okay co2 okay let's ignore the co2 for a minute um okay let's let's let's
[01:32:01]  let's dig into this because like the conclusion is correct there's a reason ebay uses marco for years amazon has never picked up react for amazon.com why google has
[01:32:20]  whiz right that's why i made this quote about this the best argument use quick dev that i've ever heard because if you're going to use a framework to talk
[01:32:30]  about google search the the internal framework at google that does search photos and that is called whiz quick was basically based off that framework so you know that that was the point of
[01:32:46]  a bunch of people means like shouldn't i use solid start i'm like hold your horses we'll we'll we'll we'll get we'll get here it i want
[01:32:56]  to i want to pick at this a little bit okay maybe i should ask answer some questions it has what i said so far made made sense okay one thing ryan does
[01:33:30]  the ssr rendered only happen on initial page load after initial page the app it's in the client side rendered all the time well it depends on what the service is
[01:33:40]  um for google search and ebay.com those are mpas so no it is not just initial thing they literally they don't use traditional single page app architecture they use
[01:33:54]  multi-page app architecture um but there is tension to do more client side stuff as well um you can see how this could extend into client like architectures where i'm going
[01:34:18]  in a minute i think i get it loading spinners bad pulsing skeletons good yeah yeah yeah of course okay okay so you guys were with me okay now okay does let
[01:34:42] 's let's first contend with this if google was a spa calculate whether shopping flights feature snippets factory all the ai experience blah blah blah every customer experience the client would
[01:34:52]  have to know how to render it yes so does it need to know how to render it when the page loads is is is is is the question now that's that's
[01:35:11]  a more interesting question because he's right that whatever you render on the page if you want to hydrate it the code has to be present to hydrate it have you ever
[01:35:31]  loaded a website where they put a placeholder like pretend you have a code id on your documents page and you don't want to absolutely kill your light your your page score
[01:35:43]  because you don't want everyone to have to load it until they scroll into it or whatever it's not uncommon to render one component on the server and hydrate basically nothing there
[01:35:56]  and then on some kind of interactive point at that point actually load it in you might even eagerly load the javascript it just won't be blocking for for a
[01:36:05]  hydration standpoint right do you do you all know what i'm talking about right if i go to solidjs.com and literally like idiots we put a code editor like right on
[01:36:16]  our home page which would obviously kill our performance but the trick is it's below the fold we're not feeling it we're not feeling it yet when i scroll down uh
[01:36:30]  there it is right see that this is this is usually a quick demo but like literally it's not hard to wire up yourself at a more coarse grain level more pictures yeah
[01:36:56]  yeah i maybe we'll need the escalator out but i i want to i just wanted to show like the simple lazy put this behind a lazy component you trigger something that will
[01:37:07]  cause it like to like the signal that switches and because we never server rendered it right now the question is if it's above the fold then you know it's it's
[01:37:21]  a very different experience if i went to google search try cars this time and like you saw loading spinners for these like side panels and you know you know like so can
[01:37:40]  we server render it and then wake it up lazily yeah yeah so you it's exactly this is this is like what i'm getting at is the biggest hack to get
[01:38:02]  around this is client render only client only i added a client only component to solid start like a lazy loader i was thinking of putting a placeholder um option in it as
[01:38:13]  well which i think you people probably all love because then we could actually show the the um alternate ui and then the problem is if i had the placeholder ui
[01:38:26]  you'd probably need well no it's probably fine you you you just control no you need all the i need to expose the triggers like so yeah you got to wire it yourself
[01:38:38]  but it wouldn't be hard to make like a lazy wrapper you know that was built on like what triggers it and just be like here you go here's a component that does
[01:38:46]  this behavior but that's a very csr focused approach what if you actually wanted to server render it it's also ux issue if you're a client rendering something that
[01:39:13]  takes a while to be interactive that's not a great experience better to show a user-friendly placeholder yeah sure um but yeah yeah yeah yeah i think that's fair um
[01:39:23]  but like i i i i i'm now talking at the scale of like google search like they're not doing it because this is particularly slow they just don't know what
[01:39:32]  they know until they actually do the search cars has a different panel than i don't know restaurants right let's do restaurants you know i got a map now like if
[01:40:01]  google amazon on spa with skeletons and loading soon they they don't though right like guillermo is right their performance critical stuff is not using single page app technologies they're not
[01:40:15]  like using react you know like that's not how this works now don't get me wrong guillermo is making the argument for why you should use server components um because
[01:40:23]  he's saying that they're a little bit different but they're not using js they're also using js in the background well that is true whiz is being used in
[01:40:37]  combination with java and they actually have a java to javascript compiler at google um like the kind of interrupt interrupt between them i forget what it's called but anyway
[01:40:48]  i've had lots of technical discussions with both the angular whiz teams at google um the where but coming back to this is if you want a server rendered there is kind
[01:41:06]  of a little white lie that's around right now and i think this is when i'm this is when i piss off all the astro people i i suppose maybe maybe
[01:41:17]  i don't lazy hydration is a myth like you can do it if something is truly isolated like if you have an island that is basically a micro front end yes you can
[01:41:32]  lazy hydrate but if any communication if if there's global state at all then it's possible and that can be read inside that island then it's possible that if anyone interacts
[01:41:57]  with the page you can no longer hydrate this doesn't take view transition api that just like really exemplifies it if you're trying to make something very app-like
[01:42:09]  experience and it doesn't matter if you view all your islands as like micro front ends you know you have lots of different isolated services but once you're sharing state hydration will break
[01:42:19]  or may break if someone interacts with one part of your page and you haven't hydrated the other part this this is this is just the reality of it this is something that
[01:42:32]  i think everyone's going to come to realize in the next year or so people making simple content sites will you know still go this way and do that but i think people are
[01:42:41]  going to start understanding that there is a real limitation to you know islands in this sense um people don't know this marco and big companies that use islands like ebay
[01:42:59]  they eagerly hydrate their islands there's a reason why react server components eagerly hydrate you can't lazily hydrate yeah i mean you don't necessarily have
[01:43:26]  to lazy load the js either i would tell people not to this is why i always like made a big stink quick obviously eventually got to pre-loading the js but like
[01:43:35]  i was always like you guys are like this is just not the battle to be fighting there's a certain amount of like you've already cut like 80 of the javas
[01:43:43] cript you know like why are we like maybe like there's places where you want to lazy load the js like if this map wasn't above the fold yeah let's lazy load
[01:43:55]  it like my my uh my uh my code editor you know maybe you know maybe there's an argument for but like i feel like those zones are very specific like you you
[01:44:10]  know like damn that map is expensive that code editor is expensive well they write some of their js and java that is something i don't know enough about angular i know
[01:44:30]  they like classes there um but anyway um but where i'm going to hear is you can't lazily hydrate really so in a sense guillermo's right if you
[01:44:45] 're going to server render this stuff what you have to do is like you you just don't know the problem with this is he's making a strongman against csr
[01:44:58]  in single page app world and to be fair like we talked about you can just put the placeholder up but if we're talking rscs of against like server rendered single
[01:45:10]  page apps i you know and like i think this is a fair argument to make because to my knowledge there is only one way that you can lazily hydrate i wonder
[01:45:24]  if anyone sees it because the problem with lazy hydration is that the state on the server has to represent the current state of the dom you could lazily hydrate if at
[01:45:43]  the point of interaction you knew for sure you could hydrate it just in time like essentially the piece as you needed it before the the action would cause a change now there
[01:45:59] 's two problems with that first of all if the javascript isn't there that's kind of expensive like now i'm waiting for it so like you know we're not
[01:46:07]  doing this for preloading considerations the second is suddenly you're like okay let's run the app or this part of the app once in hydrate mode and now let's
[01:46:18]  apply the change i mean this is how react selective hydration works but like that's only on initial page load you know and most of the time people like aren't going crazy
[01:46:27]  clicking at the beginning like they do it they know it's an expense but they do it as soon as they can so that you don't generally you're not not everyone's
[01:46:36]  gonna feel it so really the only way to do something like lazy hydration is resumability because then at that interaction you just wake up that code and run it for the first
[01:46:52]  time there's no delay there and but you see the prerequisite you need a fine-grained reactive system where you need to know the data dependencies of isolated parts of
[01:47:03]  your app otherwise you can't um you can't hydrate like that so wiz at google is eager in the way it loads it doesn't do uh quicks like lazy loading
[01:47:16]  javascript thing that as far as i know but it is resumable right because it doesn't have to execute the hydration code until it gets it doesn't really
[01:47:29]  hydrate it it executes the code when it needs to run the code that is the only way like you do it like client this is why when i use astro
[01:47:39]  i use client load or client idle i ne i would never consider using any other the client things unless it like like client visible and all that unless i knew that this was like
[01:47:51]  truly like a micro front end or a different thing or like i was you know putting in a one of these suckers right like you can't lazy hydrate it is
[01:48:03]  broken and the the challenge here obviously is that even resumability can't save you from what's not currently on the page right because it can wake up what it knows
[01:48:18]  about from reactive dependencies but if that reactive dependency is on the next page you're going to navigate to then it can't wake you up so from that perspective i'm a very
[01:48:33]  long way about saying is resumability doesn't solve uh routing essentially it's not it's i always called react server components a routing problem solution resumability is not
[01:48:46]  a routing solution it's just a purely uh hydration solution so this is why when i was reading about this i was like he's talking about resumability he's not talking
[01:48:59]  about react server components he's not talking about routing he's talking about resumability now don't get me wrong react server components do partial hydration do you have this ability
[01:49:11]  to basically tell the client which components are needed which client components are needed because the server rendering you know goes down that path and then because it's partial you only need the j
[01:49:24] avascript for that one part and you know that whole thing but i mean you could argue that to a certain degree about any ssr couldn't you the trick is
[01:49:37]  not needing the javascript to run immediately for all of these widgets on the page only as they're needed so that's where my my my my split is here does
[01:49:53]  that make sense yeah yeah yeah yeah you need reactivity sorry i didn't let you answer did you need reactivity in order to do lazy hydration um to be fair granular lazy
[01:50:09]  hydration and resumability are a spectrum so i was saying like you need to go run everything but like in theory if you only need to run the portion of the reactor
[01:50:19]  graph that needed to update like create it while you're updating it it's not resumable by say misco standards but i would consider that sufficient um and as long as
[01:50:29]  there's no delay because you weren't like loading js it was there so you could process it synchronously that overhead would probably be perfectly fine so to speak so yes react
[01:50:40] ivity is probably the true answer here but i i i'm just trying to frame this so you understand that like it's the realm over by resumability where this would be
[01:50:52]  a consideration um so yeah this is a great pitch for quick um because as i said um and you can kind of see all the things people talk about spock and i
[01:51:09]  code split and all this stuff and the answer is i think we just went over it sort of but not really that all being said there's other ways to solve this problem and
[01:51:26]  until you're google maybe this doesn't matter as i said i'm not picking rscs for this uh perhaps out of top did you see the experiment with astro
[01:51:49]  was quick if so do you think the combination makes any sense or common reasonable case i don't know i think it's good that quick is in astro in the sense that
[01:51:57]  like astro is like the place you get to try everything everyone everybody's friends so that's a good place to be you can like put your stuff together they're like
[01:52:08]  the micro front ends for everyone you know like but without the overhead of micro front ends they're they're micro front ends on the server i.e micro front ends done the
[01:52:16]  right way so yes if you have a mostly the thing is you could do everything that astro does in quick on with quick by itself but this is like a good gateway
[01:52:31]  for quick um astro has been great for solid for that sense but yeah like does quick need astro not really it can do everything that astro does without it um oh
[01:52:41]  except for maybe the view transition api right now i'm not sure i said quick's routing solutions are either mpa or bring all the javascript back so yeah
[01:52:52]  i don't know maybe there's a uh middle ground but i'd say at that point the the gains for quicker you know assuming you have a bunch of big astro pages
[01:53:02]  and small uh components aren't going to be any different than like using svelte or solid with astro not really i mean sure they don't hydrate but like
[01:53:09]  i guess like with the google consideration yeah maybe but then again at that point where you're getting that micro i'd probably use quick on its own right well and i think this
[01:53:23]  is sort of where we're getting to what our source of innovation now is coming from large companies i know this right i've seen these patterns both from working at ebay
[01:53:35]  and also from you know on the frameworks and also from like you know working closely with the people at google i don't know about meta's set up as as well um but
[01:53:44]  like that's where things are at we there's this question it's like these well this is the thing it's a very real thing for you know netlify or rese
[01:53:56] ll or whatever we have customers are like we want to sell products and have the performance of the big guys how do we do that today and i would have said a couple
[01:54:06]  years ago if someone said nextjs i would have kind of chuckled i would have been like yeah no but they've made incredible um progress in the last couple years things like
[01:54:15]  server components that really you know close that gap right um so like i think that's why we're getting here but there's a lot of people who aren't building that
[01:54:32]  yeah kroger is all react and i'm sorry if you've ever read taylor's um article it's it's the most it's like there's nothing more real world
[01:54:46]  than to see like someone demo a future for kroger which would absolutely demolish the react site in every metric he actually even brought them phones like that stream is amazing you
[01:55:01]  should go back it's like a year or so back i should post it the stream i did with taylor he brought them the phones they sold on their own websites and was
[01:55:08]  like how do you guys like using kroger.com and it was like he did like a simple checkout process and it took him 22 seconds on the phone with the new
[01:55:20]  you know marco based whatever site and it took he he he ran out on video on on twitter to like show it all like it took it took over two and a half
[01:55:30]  minutes to do the same checkout process on their react site like like i told you earlier that there was probably wrong solutions for the you know you know there might not be a
[01:55:41]  single best good option but like yeah walmart.com is another great example of a of a react single page app they don't all have to be terrible like that the next
[01:55:55]  is working really hard to change the math there but i'm just i'm just you know there's some of it is innate some of it like improvements are coming yeah i
[01:56:06]  said earlier stream that's that's kind of what i'm thinking like at a certain point it's like what you could use beat directly but like and you still can but like
[01:56:20]  why not just give people the tools where they can literally just jump and then leap all within one go like they aren't losing anything there why is quick on his own well
[01:56:31]  really only quick and marco were concerned with this i mean marco obviously has always been that it was built for ebay for this purpose quick was uh uh was basically m
[01:56:45] isco seeing what you know they were doing internally at google and after he left the angular team being like we need to open source this find a way to you know do this to
[01:56:54]  like help e-commerce he's working for builder which makes a cms to be fair you guys are gonna all love this do you know who one of the main core
[01:57:03]  creators of wiz is i don't think everyone knows this even though i'm you know talking a lot about quick and stuff the i don't think he necessarily was the original only
[01:57:15]  guy i think there's a couple of them internally who created it but multi cto of versell was one of the like core main maintainers at least if he wasn
[01:57:25] 't the creator he's the guy who showed the world he did the first like conference talk on wiz um he's you know what i mean so it is interesting to see the
[01:57:35]  misco and uh and and uh multi go back and forth in in this thread because i think i wonder if i can find it it was just kind of funny because i
[01:57:50]  quote tweeted it which got a lot more eyes on it than misco's tweets it got buried here he has replied google search works on top of wiz wiz is resumable
[01:57:58]  and is really good at not loading all code at once that's why it's such good time to interactivity rsc is a step in the right direction but it does not
[01:58:04]  go far enough it still has large islands which require eager code execution through hydration google search would never work as an rsc the ultimate is resumability as in quick inspired
[01:58:11]  by wiz but it takes that up to a whole new level blah blah blah and then multi i've watched these guys go back and forth i was at a conference and it was
[01:58:18]  actually really amusing it was like multi on one side of the table and misco on the other side and me being like you guys both have really good ideas you continue to be
[01:58:26]  wrong about this although by now it might just be in price language since i did give you a few early quick steps wiz loads code as early as possible see this is what i
[01:58:33]  was talking about it eagerly loads code but lazily executes it exactly like rcs but a little slower due to lack of preload support um it hydrates laz
[01:58:42] ily right reactates can preemptive hydration superior to lazy hydration as it gives a great early interactivity and allows you to ignore the laziness respect to the programming model i
[01:58:52]  do think this might be the big shift that we see over time here because my experience is that the laziness is overrated it's the reduction of actual hydration costs that is
[01:59:04]  the bigger win and the reduction of code so yeah anyways it if it's if it is superior than rcs could run google search pretty sure the answer is no every test
[01:59:15]  i've ever done presumably built beats hydration it makes sense there's just less code to run download and execute oh yeah rc would be great for google search like see this is
[01:59:25]  this is this is fun they're going back and forth fun fact my internal chest yeah so he's saying like this is like this is him going back to about like how
[01:59:33]  because of a migration story from something earlier than wiz he had to actually do eager hydration and yeah anyway blah blah blah they there's you won't hurt sniping you taking
[01:59:47]  my old job to prove you wrong uh i i love that the wiz team is is is is staying very quiet on here like i don't see jadden in here anywhere
[02:00:01]  no they're just like let it let them let them argue i i love that that wiz and marco have taken sort of like a legendary status of just being like the
[02:00:10]  ultimate system system that like goes beyond what any like people in open source are doing anyways probably but i mean part of it like the thing is they all have custom solutions for the
[02:00:25]  other piece then again like react has been fairly successful and meta like don't get me wrong the infrastructure around is different they have relay they have a whole bunch of stuff but like
[02:00:35]  the front end framework is only going to be the blocker if it affects the infrastructure like react before server components and would definitely not be suitable for certain things server components take
[02:00:46]  it to a different level whether it actually closes the gap completely is another question um but yeah I believe XHP does, I don't know for sure, but their
[02:01:10]  PHP server that BigPipe set up, that they set up in the late 2000s, like 2008-2009 period, was a big influence for Marco. And
[02:01:24]  I guess they had, I think they had out-of-order streaming there, I mean, I'm pretty sure, so I imagine. No, no, I mean
[02:01:36] , literally, maybe now, but, like, you don't know, there's incredible pressure inside eBay to, like, not, I don't know how much to speak
[02:01:51]  about it, there's a lot of teams and people coming in for developers to use React, and the same thing in Amazon, everyone's like this, and every time
[02:01:58] , like, a new team comes in, or contractors, and then they do a bake-off, and React just falls flat, like, it just isn't good
[02:02:07]  enough, like, just not. So, like, for the use case, it's not just because they're stuck on legacy systems, it is literally just not good enough
[02:02:17] . There was, there was a great set series of posts from Amazon about this a couple years ago. Like, it just, it just really, it's not even
[02:02:26] , it's on both sides. It's the server rendering speed. Marco is one of the fastest server rendering JavaScript frameworks, like, not even close. You put them in
[02:02:33]  Ben French, it's like, why is this always, like, so much faster, bandwidth, everything? It's kind of crazy, and, like, even before
[02:02:41]  getting to the client rendering part, which is a slowdown, even, like, Netflix, who was very strong React for a while, like, and they were on the
[02:02:50]  early adopters, they showed them in the React film. Like, less than two years later, they told everyone about their crazy discovery of how to get better performance by
[02:03:00]  server rendering React and not using it on the client. Like, React's evolved a lot from there, but it's not, like, it's not just because they're
[02:03:11]  on legacy systems. Those legacy systems are often more better suited. Like, it's one of those challenges where, like, the solution's more suited for the specific use case
[02:03:20]  that it's hard to get someone else out. Because, trust me, if they could, people would jump all over it. It just actually isn't good enough.
[02:03:27]  Like, they, like, trust me, like, the amount of belly aching that I heard about, you know, Marco when I was there, like, from developers
[02:03:40]  was a lot. And it wasn't, it was, it was mostly, it wasn't even for technical reasons or for, like, even that much on dev experience.
[02:03:51]  And it was literally because they were worried about their React, not working on React affecting their career. Interesting. So, a way to alleviate pressure on the servers,
[02:04:10]  that's interesting. Yeah, yeah, sorry, I just answered that. Yeah. React, in general, is about, I mean, in simple string-based benchmarks
[02:04:35] , React itself is about 10 times slower than, say, even Solid. But Solid is not as fast, it's faster than Marco on pure server rendering, but not on
[02:04:45] , like, bandwidth thing. Marco is considerably faster when you consider bandwidth type considerations. React creates a virtual DOM on the server and then stringifies it, where other server
[02:05:00]  renders literally are, like, basically template languages. It's, it's, it's definitely, I mean, how much does that matter? 10x? Did the
[02:05:09]  page take 3 milliseconds of render or 30? It's actually probably more, like, did it take 1.5 milliseconds or 15 milliseconds, maybe, like, at an
[02:05:20]  extreme. I'm sure that 10 doesn't scale up. I'm sure it's, I'm sure it's more, like, one takes 2 milliseconds and one takes,
[02:05:27]  like, 8 milliseconds or 10 milliseconds. Like, you know what I mean? Like, depends on the page, depends on the payload or stuff. Like, I don
[02:05:34] 't know if that matters much. Svelte was on the table. Svelte, but no, basically, classically, no client side. Svelte was
[02:05:53]  actually faster than React, about twice as fast, but it was still much slower than Marco or Solid for the longest time. Svelte's now in the similar range
[02:06:02]  on server rendering, but the, the, the partial hydration part of the solution was too important. And streaming. Streaming is very important for eBay's use case. Yeah
[02:06:13] , it's funny, like, he works at Netlify, or, sorry, Netflix. I can't say Netlify, I meant Netflix. Did I say
[02:06:25]  Netlify earlier? I meant Netflix. He, he, they went from full React to React just on the server to, what are we going to do with React
[02:06:34] ? Now, don't get me wrong. I think any JavaScript framework might thopper under Netflix's scrutiny, so to speak. But, like, it's an interesting
[02:06:47]  tension. Yeah, yeah, even React created VDOM. I think they now have a string method, but for the longest time, let me, where was it
[02:07:07] ? SSR bench, maybe I should just go to my GitHub. I can probably find it. I forked it and I probably had the last update on it.
[02:07:21]  Benchmark. Framework benchmark. Isomorphic UI benchmarks. This is the classic one. Let's go to my updated thing. But, like, if you
[02:07:41]  look at the history, it's the same, too. Don't look at those results. Look at these results. One is a search result page from eBay with all
[02:07:47]  the header and, like, tons of markup, not much interactivity. The other one is just, like, a freaking color picker, like, a to-
[02:07:53] do MVC little app. And what you're going to see here is that, like, Preact and React are actually the slowest because of this VDOM transfer
[02:08:03] . View is here. Svelte is, and Inferno, Svelte is pretty decent. And then, obviously, Solid, Now, and Marco,
[02:08:17]  right? And then Color Picker, Marco, again, Preact and React, kind of like here. View, Inferno is pretty good, although they're kind
[02:08:26]  of cheating in one of the examples. They don't escape something. Solid and then Svelte. Solid, Svelte should be faster now. I don't think
[02:08:38]  I have the latest update here. Svelte is now about double of what it was before. So now it's in the 67-ish, and I think here
[02:08:46]  they're going to be about 18 or 20-ish. Yeah. You know what I mean? But, like... Oh, sorry. My cam is hiding the text
[02:09:04] . Hopefully, I scrolled it enough that people can see it. Anyways, this is just pure... But, yeah, if you look at, like, the older
[02:09:17]  runs, like, back in the day, like, what's this one? Oh, this is client-side. Yeah, never mind. Let me go to the actual
[02:09:25]  official results. This... I mean, you can actually see it in the graphs. Like, the last time this was updated back in 2019 by them. Like, the
[02:09:35]  client stuff was kind of, like, mediocre for Marco. But the server stuff, it was just, like, not even close. And I feel like... Yeah, I
[02:09:46]  don't know. Anyway. The other ones you didn't see were solids. Yeah. It was much faster. Classically, after Svelte 5, it won
[02:10:10] 't be. Because they're switching to basically compiling to solid. But classically, that was a thing. I have a study showing that Svelte scaled...
[02:10:23]  By the time you got to any kind of mediocre, medium-sized applications... Like, once you got past a small app, Svelte was larger than most frameworks.
[02:10:33]  And then, like, once you got to, like, a chunky app, you know, maybe 80 unique components, Svelte was larger than React on the client.
[02:10:39]  Yeah, I mean, it's possible. Because Marco uses its compiler. Like, a lot of the tricks that Svelte have been looking at are... Like,
[02:10:55]  that's what Marco and Marco6 does. It uses compiler to know better about reactivity chaining. Which means that it could, like, do even more. Once I
[02:11:06]  wrote an article that I said that solid was not the best for server-side rendering, potentially. Because our template analysis wasn't as effective as it could be if we had
[02:11:19]  it. Like, it doesn't matter for client, but for server, it might matter. So, in theory, like, the stuff that Dominic was talking about
[02:11:26]  reminds me of conversations I had with the eBay team three and a half years ago. Like, if you look at Michael Rawlings' articles... You can go to Medium
[02:11:36]  on this. Let's see. Can I find Michael Rawlings? Yeah. If you go and find his... Maybe you don't need a single-page app. Yeah
[02:11:51] , back in 2020, people didn't realize this. Generic hooks. I think this one's probably the best example of it. He actually talks about what he calls
[02:12:00]  subcomponent hydration in here. This is before we kind of got into the resumability thing. But he was talking purely... And this is very similar to the stuff
[02:12:10]  that Dominic's been talking about. Right? So, probably worth a read. So, we've had him on the show. We had him on the show only
[02:12:28]  a few weeks ago. Brilliant. Brilliant engineer. All right. Thoughts on this? Okay, let me see what this is, Dave. Help me understand Next.
[02:12:47] js real quick. If I want progressive enhancement, people might have a JavaScript disabled on the VueMite site. But I also want the performance benchmark streaming by using suspense
[02:12:55] . How do I achieve that? The moment you disable JavaScript, all your suspense balls actually remain stuck forever. Yes. No. No. It just means you can't
[02:13:08]  stream it. It doesn't mean you can't use suspense. Suspense is just a loading mechanism to tell the server when it's done. So, technically speaking,
[02:13:18]  if you don't flush till the end, you can still stream it. In Solid Start, we used to have you choose which render method. But now, for example
[02:13:28] , if you go into Solid Start, and you go in here, and you go Start SSR. True. General. Streaming. But if you go Async,
[02:13:39]  maybe you need a better name. This is coming from Solid Render Async method. Now, this will work with JavaScript turned off. It just, even though you wrote
[02:13:48]  the same suspense code, it just doesn't flush it till everything's ready. This is the old, like, wait for the page to finish thing. I changed that
[02:13:54]  from being the default, like it was before. But, like, and with React, there's a hook, like, on shell complete or something. I'm sure there
[02:14:03] 's a way you can tell next not to flush the stream until the end. Okay. Is there a response here? Yeah, but in order, streaming doesn't solve
[02:14:15]  a bunch of things. It only, yeah. Brian Florence talking about hydration or lack of it. Okay. I don't know. The current Svelte hydration mechanism
[02:14:37]  that has directions to stop crawling and hydration on the components that have no change. So, it's similar to the subcomponent thing Marco was doing. Is it? Because
[02:14:50]  it's, you can't just stop. You have to restart as well. Like, the way the subcomponent with Marco was doing was using the reactivity to
[02:15:03]  auto, so maybe it's similar. I don't know. The auto detect the reactive dependencies, and then, like, they were going to use a bundler to do
[02:15:12]  it. Once we discovered we could do resumability, it's drastically simplified the approach, because then we could just use tree shaking. But, originally, they were
[02:15:21]  going to use bundler analysis to track the reactivity and know which things could have props, you know? Yeah. In order, streaming is good. It just, it
[02:15:37] 's like a different thing, like I was talking about earlier. Yeah. I mean, I don't know. It, we want to be good web citizens. Progress
[02:15:56] ive enhancement is, like, an accessibility consideration. I keep on telling people this, and no one likes my framing, but I'm going to keep on saying it. It
[02:16:05] 's not a replacement for hydration. It's not even that good as what happens before JS loads off, because, like, that could mean interacting with the page early gives
[02:16:17]  you different behavior. It's actually kind of bad. That's why most frameworks now actually load inline scripts. Quick isn't the only one who's, like, a
[02:16:24]  bootloader. Solid has this hydration script. React has it. Otherwise, selective hydration wouldn't work. You know what I mean? Like, we all are loading
[02:16:31]  scripts, small scripts, at initial page render time. So that, that's how streaming works, right? Like, so, yeah, I don't know. It
[02:16:43] 's, it's a hard one. It is interesting because working with the form APIs is kind of miserable. So I'm glad, like, we, we, we
[02:16:56] 've got some answers there, but, like, I kind of, I don't know if I'd use the form APIs myself. I just, like, use action,
[02:17:04]  be done with it, you know, server function away. I don't know. It's hard. I can see use cases. I think it's good we support it
[02:17:13] . It's just, like, it, it's just never going to be as good at a certain point. You, like, it's so funny. When you
[02:17:21] 're using CSR, CSR, this isn't even, uh, am I reading out of practice? Like, trying to talk seriously, and this is what gets on
[02:17:32]  my screen. Um, God, look, can I get back to somewhere reasonable? Just close this tab. Um. I'm not going to call it a waste of
[02:17:49]  time. It's just something you definitely, you know, we try and reduce the trade-off, but you're definitely opting into it. It might be overrated
[02:18:01] . I feel like the Remix guys are using it, like, as a bit of, like, a solve for everything. Like, I kind of don't want,
[02:18:08]  if someone clicks a link on my page before the client router, loads, to reload the page. I kind of, like, wish that doesn't happen. I mean
[02:18:17] , it does happen in solid, you know, but part of me wishes that it didn't. It's hard to, like, you know, it's better than nothing
[02:18:25] , but it's also kind of, like. What profile have we been on? Okay, back here. Yeah, I think we're good with Guillermo, right
[02:18:39] ? So, he's a Kent C. Dodds. I, uh, Attila is doing a good job trying his best. I don't know if you,
[02:18:53]  you, if people saw this, but, um, his series, he did the new, uh, intro video, and he's been doing a series of videos on stuff
[02:19:02]  like nested reactivity and stuff. Oh, come on, Alexa. What are you doing? I don't know if you guys heard that. Uh, Siri thought
[02:19:11]  I said her name and is talking to me from my other laptop, which is sitting over there. Anyway. Okay. Uh. How are we doing? Okay, yeah
[02:19:27] , so, let's go, let's go back here. Do I even want to talk about this? Maybe later. I want, I actually, I know what I
[02:19:40]  want to talk about. Okay, let's just get this out of the way before we move on. Um, Gatsby is not dead. Now. It's
[02:19:51] , it's, this is a pretty funny thing because I have to admit, I, I don't work on the frameworks team and I'm pretty much in isolation. So
[02:20:01]  me talking about this is probably kind of terrible because like, I, I kind of thought Gatsby was dead when, uh, Ward and, you know, prominent G
[02:20:08] atsby people are like, it's dead. Um, then, you know, I'm kind of like, oh, I guess Gatsby's dead. I
[02:20:17]  am not on the frameworks team, but, uh, just, there's an interesting positioning here, but they did a whole blog about the new work that's going into G
[02:20:28] atsby. So, um, future Gatsby. While Gatsby framework is no longer the new kid on the block, it's not going away anytime soon
[02:20:34] . It's been battle tested by companies for many years and used for large, real world, high performing websites, including many enterprise customers. Here in LFI, we committed
[02:20:41]  to continue supporting Gatsby. Um, in addition, framework stable, predictable, high performing. We're now working to give it extra superpowers. We're a
[02:20:47]  strong integration with composable web connect and create. Okay. Um, closely tied to prior structure through adapters feature. So yeah, they're, they're basically making
[02:21:00]  generic adapters for Gatsby, you know, Matt Billman says, well, we don't plan for Gatsby to be a place for the main innovation in
[02:21:12]  the framework ecosystem take place. It'll be a safe, robust, reliable choice to, to build production quality websites and e-commerce stores and we'll gain new powers
[02:21:20]  by way of great complimentary tools. Okay. So there you go. Just in case you guys didn't know, Gatsby is not dead. There you go. Offic
[02:21:27] ially not dead. Yeah, maybe. Yeah. I mean, I, I honestly, I work at Netflix and I thought I was dead. So yeah. Apparently I
[02:21:44] , I, to be fair, I've, I haven't been paying attention to recently. I've been very focused on the solid releases, but no, I, I
[02:21:51]  know that there's, there is a frameworks team that work relentlessly on working with all the different frameworks, um, Gatsby remix next, um, et cetera.
[02:22:02]  So I like, there, there is a team here still, you know, getting, moving these things forward. The only available adapter is the Netlify one.
[02:22:15]  Yeah. Okay. Fair enough. Maybe I should convince them to move to nitro. Okay. Okay. Okay. Yeah. I know where I wanted to go next
[02:22:27] . Cause this one gets a little spicy. Also, whoever this person is, they clearly watch my stream. Maybe after the fact, big props and thanks. I appreciate
[02:22:40]  this statement and this is props to all you guys apparently to watching Ryan stream and like, and like 50% of the viewers are framework authors, dev rel workers, and open
[02:22:49]  source leaders. Dude's like every rapper's favorite rapper. I think Theo probably said this first, but it's always entertaining or, you know, nice to see this
[02:22:57]  kind of thing. I like being appreciated for the work and I'm glad people enjoy the streams. So just throwing that out there. Um, okay. This is the
[02:23:07]  one I want to talk about. Cause it's right on topic for today, which is if your use case is right, heavy use client side rendering. If you're read
[02:23:16]  heavy, use server side rendering. If it's in the middle, use islands server side rendering to boot up single page app. Almost never. I'm the nerd's nerd
[02:23:27] . There we go. Thank you. This is an interesting stance. It's it keeps boundaries very clear, but like what the, do you know what the challenges with
[02:23:52]  this? And maybe this is again, us trying to oversimplify things. The challenge with this is in order for me to understand what he's even saying, which
[02:24:01]  is fine. I do understand it is I have to understand. And what right heavy is client side rendering is read heavy is what suicide rendering is what islands are. Like
[02:24:14]  what I mean is there's like a rubrics I'm going through to make this decision. And while, you know, this is an argument for right tool for the
[02:24:28]  job, which, which is, could be fair from a evolution, you know, direction of the future perspective. We're always going to try and do better with than
[02:24:48]  what any given tool gives us today. So it's kind of interesting because here's a practical argument here. The practical argument here is for, for this is like what I
[02:24:59]  showed you before when I looked up shoes, right? Google search probably should never be a spa. Neither should these websites probably. If like, that's their purpose.
[02:25:13]  Right. And what I think, um, what he's saying is like, if I go to my cart and then I have to do this, see, sure.
[02:25:24]  This could be a spa, you know? Um, sorry, I should probably add, add some shoes to my cart. Okay. If I want to go through checkout
[02:25:33] , I'm not going to go completely through it, but like this can be a spa experience. In fact, if you looked at that navigation, we actually, it was
[02:25:42]  actually an MPA navigation. The site is an MPA side note, right? You can see. And, but I bet you the checkout is a single page app.
[02:25:51]  So like, basically he's asking the question is, do we ever need sites to load fast, like an MPA, be interactive, like a spa and actually,
[02:26:05]  you know, handle the client side navigation and whatever. This Google search should be PWA be right. It also suggests that Google's about the best tool about everything yet
[02:26:24] . Is he just saying, don't use remix. I mean, the funny thing about that comment is when remix came out, I liked a lot of technology stuff, but
[02:26:37]  in my head, this was the zone I was mapping. I'm like, if I just map everything into the distinct categories, I think, I think, uh, Fred
[02:26:44]  K. Scott did this, where he went from like, I did this also in one of my articles, but Fred put the tweet, I think originally up. And
[02:26:51]  like, everyone got mad at him when he put the ranges that Astro covered and like what next covered stuff, like remix didn't actually fit anywhere. Like, you know
[02:26:59]  what I mean? It's like, if you can go, if you're on this side, you should just use Astro, if you're on this side, you
[02:27:03]  should use something more app, like, you know, whatever. And then like, so that comment is interesting to me because it actually brings me, brings back memories.
[02:27:13]  Um, do we need server rendered single page apps? And it's interesting because when I rewrote, when we rewrote Vidigami, that was the
[02:27:25]  like Twitter type app back in 2019, 2020 time period, 2019. Um, I said, no, I don't need server rendering straight up. I was just like
[02:27:38] , no, we don't need server rendering. Maybe I'll render some Jason into the head of the page. So like, it saves me from doing a couple of
[02:27:44]  off round trip type things, but like, I don't need actual server rendering and I guess that's fair. But the, the, the, the, on the
[02:27:54]  other hand, if server side rendering had worked as easily as it does today, I might've been like, why not even for logged in pages? Like, sure. Like
[02:28:09]  it can feel like a better experience. And it's like, why would I not do that? But I, I, I get like, I think this is like
[02:28:24]  a lot of the assumption here or like, uh, tension here is, is that, right? It's like, I know this is where Astro has been kind of
[02:28:36]  positioning things, but it's like. It works because the islands are basically micro front ends. Once you're in the middle and your islands are not micro front ends.
[02:28:57]  Then you're kind of in a different zone where you are very torn between these two. Astro fits a very nice place in the middle, which means that like, before
[02:29:08]  this, it wasn't easy to make the, you to like, like the, the gap between. The first two here was way too large. Now, this is
[02:29:17]  just a reasonable middle ground, just use it. But I think. That middle ground has a lot more space. Still. And while this is one take of the middle ground
[02:29:28] . I don't think it's an, I like, I don't think it's an unreasonable take. It just wasn't enough. It wasn't middle. It
[02:29:36]  was basically this one. With like a little bit. What's the practical difference between this single page app and a big island? Inside every SSR spot is an island application
[02:29:53]  struggling to get out. Uh. He did a similar. Yeah. See, I feel like it still mostly holds up other than frameworks make SSR less painful now.
[02:30:10]  So it's less of a trade off than it was. I think this is the thing. It's the amount of friction. But I mean, I would say that
[02:30:24] . I realize that friction is real. Otherwise, you know, would we have client side render mode in solid start? Would we have client only? Like there is some friction
[02:30:34]  here, but the more that friction reduces, the less these divisions matter. I once drew a quadrant. It's probably not going to show up on my recent images because it
[02:30:45]  was so long ago. Yeah. And I'm zoomed in. I once drew a quadrant in one of my docs and it was, it was basically showing frameworks where they
[02:30:52]  sat. In terms of, um, MPA to SPA and where they sent from, um, SSG and dynamic rendering and like where they mostly sat. And
[02:31:01]  what I watched was I watched the top and the bottom collapse on themselves. Like essentially the, the, every framework SSG is now like this, some amount of status generation
[02:31:12] . I mean, it's just the type of cache. It makes sense. And I think that the collapse on the other axis is kind of imminent. And I know
[02:31:21]  right now we have really strong sides. You know, this is why people are looking at stuff like HTMX, right? Like it. Like, and we all see
[02:31:30]  something a little different. I see when I see HTMX, like HTMX made a friction that was previously kind of a pain in the ass, a little
[02:31:39]  bit less. You know? So now you can just kind of like do these partials without like some crazy setup on your backend. You can just kind of like write some
[02:31:49]  HTML. It hits an endpoint and then you're, you're good to go. But like, does it fundamentally solve the problem? Well, if you are building a
[02:32:02]  site that has isolated chunks, maybe the same site that uses islands, sure. But if you're still at all have the potential of being on that other side, then no
[02:32:13] , right? I think the thing is a lot of JavaScript frameworks like React came about because of the heavy right side of it. And we've watched them trying to stretch
[02:32:23]  into the, you know, more content side to varying levels of success. And actually mostly failing. Let's face it. Mostly not being as good as the solutions that are
[02:32:34]  there. But with every iteration, it gets significantly better to the point that like I personally, I knew it's unsurprising given who I am, find it hard
[02:32:47]  to picture that if I'm thinking about the future, the future doesn't involve improvement along that avenue, like along that direction. This is, this is fine for now,
[02:33:04]  but it's, it's, it's like, like you just know that this isn't where the things end. And I mean, this was the argument that when
[02:33:12]  I was talking about Marco and MPAs, you know, you know, Rich Harris was giving me about client side navigation, right? And that's why he, he
[02:33:20]  got a little smug when Aster added the view transition API. The thing you got to understand is on that argument, the reason I found that interesting is because the single
[02:33:30]  page app frameworks made the mistake of thinking that they had the right solution. And then everyone just needed to like get on board. The truth of the matter is, they
[02:33:40]  needed to learn a crap ton from the MPAs, like you don't get RSCs, if you don't understand how islands and multi page app frameworks work.
[02:33:48]  Like there needed to be a learning there. Even stuff like HTMX, like HTMX is like, almost like a primitive to accomplish the routing that you get
[02:34:01]  with something like RSCs, but RSCs are like a layer that handles that orchestration above it. So I think it's good that the whole ecosystem is realizing
[02:34:12]  that there's a shift and there's a problem and they're all playing around in the space, you know, with different tools, kind of circling around the same solution
[02:34:20]  until these things kind of level out. I'm not ready to like put my foot down that this is where things are at. HTMX is my favorite islands framework
[02:34:34] . Yeah, yeah, yeah. I mean, this about the really big island. Yeah, yeah. I've always had this conversation with people because like, the definition of
[02:34:46]  single page app was like always hard. And I was like, I'm like, you can put a single page app on every single multi page in your multi page app
[02:34:53] . Is that a single page app or a multi page app? You know what I mean? Like the way that it scales is very powerful for islands. The problem, the
[02:35:04]  only challenge with islands is how do you deal with the fact of what lives outside the islands? And don't say nano stores, because that doesn't fix the hydration problem
[02:35:15] , because lazy hydration now is not only something that you have to worry about when the page loads. It's on future navigations. This is a routing problem is fundamentally a
[02:35:26]  different architecture. Like, it's funny, it's it's why the react like guys at first hour were saying that I always considered like multi is something along the lines
[02:35:38]  that that like, he considered RSC is a single page app, you know, SPA kind of thing. And I can get that from the perspective that like, he
[02:35:48] 's like, my definition is that the truth lies in the client, like the state persists, you know, across, you know, then, then it's a single
[02:35:57]  page app. But I, this is not like, this is not like a classic single page app, in the sense that like, the server is a necessarily part of
[02:36:09]  the, of the, the solution. It's not just like, oh, I pre rendered the page, now the servers involved at every step. Maybe my framing initially of
[02:36:18]  like single entry point, multi endpoint isn't right. Because in the case of like server components, even though there's multiple entry points from each island, technically, they all
[02:36:28]  communicate together in a consistent manner. Does that make it a single entry point? I mean, it's, it's arguable. Yeah, but I mean, on
[02:36:39]  the other hand, like, it's bundled in such a way that it's deduped, you're only going to load it once, ultimately, even if each
[02:36:46]  one's like, give it to me. Well, I mean, here's the question. If it could SSR, like, I guess there's a question of
[02:37:01]  like, it would be cost effective to put that extra work on the server. But like, I think the experience would be better if it could SSR. No,
[02:37:09]  like, don't be wrong. Resumability is a nice way to hydrate. It doesn't, it's like, routing is kind of where the hicks up
[02:37:21] . Resumability doesn't solve routing. Resumability is a, is a optimization that is useful when the, um, amount of code you need to hydrate
[02:37:34]  on the page gets extremely high. And you don't want to get into the zone, and it, and it's server rendered, and you don't want to get into
[02:37:46]  the zone where you have to manually manage it. Because if it's not server rendered, it doesn't matter. And if the quantity is not completely that high, there
[02:37:56] 's other partial solutions that'll probably get you like islands, for example, or RSCs, or those solutions will get you like 90% of the way there, I
[02:38:04]  think is a very good optimization. It's just like, it's not an architecture. I don't view resumability as an architecture. I think it is a very
[02:38:15]  good performance optimization. We, the funny thing is we've always been able to do this. This isn't, I like, so I don't think this is the
[02:38:28]  future. That's, that's the thing. Like, I think like, like, I remember I used to build sites with Jade, and they'd render single page apps
[02:38:41]  on them. You know, like, what makes Astro special is not that it's an MPA that does client side rendering islands, it's that it can server
[02:38:50]  render those islands. Otherwise, this is stuff that we've done forever. Obviously, like the dev tool experience and stuff is good. But from like a technological standpoint, go
[02:38:59]  build your templates in ERB, and then put some JavaScript islands, maybe wrap it in a web component, you know, like, maybe DHH is right. No
[02:39:11] , no, like, that's fine. But that's not what that's not what we can do. Right? Like we can do more than that. They could
[02:39:21]  be if you if they are true micro front ends, then you could handle it outside. Right? And that's the one thing that persists. But if we're building
[02:39:30]  applications, and we want to handle not, you know, the fact that we have static stuff and things that aren't interactive, we want to be optimal about the delivery of
[02:39:39]  these things, then the URL is not going to be sufficient. Same reason why, like, picture scenarios where you have stores, like, you know, like, I
[02:39:47]  mean, in the react sense, not like the solid sense, but like, global stores, and like, any, if your pieces talk, then like, the router is
[02:39:58]  not going to be enough either. Is buildless a solution? No, buildless is, we talked about this earlier, buildless is useful for teaching people, maybe,
[02:40:08]  but it's also kind of like, we can always optimize better with with a build. Buildless to me just means like, hiding the build at an earlier step in
[02:40:19]  the process, like Dino pretending that it doesn't compile things. Maybe like, it's interesting, like, I've talked about this before, dev has been talking about
[02:40:37]  this recently about the idea that react is just trying to recreate the browser with server components, you know, that's, it's, it's an interesting positioning. He
[02:40:44] 's done more looking into it after the original comments here. It's like, maybe that's the, like, what they're, we're virtualizing these days. I
[02:40:54]  told you this is all a router thing. So like, what is a router? Like, what is a browser, but a big router? I can't comment on
[02:41:05]  the next API specifically here for cookies and headers. I probably, I mean, even Nitro went through this problem where they had like previous APIs. I like getting closer to
[02:41:15]  web standards in the sense that it's easier to like support these non-node platforms. I feel like when Guillermo comes on and says like, oh, we realized
[02:41:22]  that non-node isn't a real thing. Yeah. Again, today he's being pragmatic. That's a reasonable take, but it's like, if we
[02:41:31] 're looking a little bit further out, this, it's, it's, if we can, you know, personalize on something here, I think there's a lot
[02:41:41]  of potential because the people making the worker stuff don't really just want to put note on the worker. There's, they want a chance to change things, you know
[02:41:47] , whether buns, that new change or whatever, you know, I just, I've watched the struggle, you know? Yeah. I mean, it may be, but
[02:42:02]  I can make that Hacker News app incredibly slow by just changing the network speed. Like if I simulate slow network that it goes from being maybe faster by 10 milliseconds to being
[02:42:15]  definitely slower by multiple seconds. Like it's just not even close. Like if not, if network or device speed is into consideration, CSR is like a clear,
[02:42:26]  clear loser. Not even, that was what pushed me. I was doing, uh, there used to be a site that was called like HN PWA. And
[02:42:37]  these examples used to actually work now, like none of them work, but they gave like these scores, right? Lighthouse interact, all this. And I was like doing
[02:42:45]  my normal like tests and I was getting really good scores, but like one of the, these, I was just like really slow. Like, yeah, this is a,
[02:42:54]  this is a good example, right? The lighthouse score is good, but suddenly we have 6.2 seconds here. And you're like, like, I think at
[02:43:04]  an example where my lighthouse was like 97, but it wasn't like preact here. I was getting like six seconds. I realized that CSR, like it's,
[02:43:20]  it's a tricky balance. Cause if you could talk to the people who live in the regions who have the slow devices, who use stuff like mini apps, they just
[02:43:29]  know that all the crap is slow. So they actually often prefer almost like CSR, like offline first and loading in the background because they just know it's, it's
[02:43:39]  hopeless. But it's kind of interesting that on the Western side, we see these scores and we're just like, man, we have to do something about it. I
[02:43:48]  know from like an e-commerce standpoint where the first load is what matters, like the, this is not acceptable and they do have to fix it. Everyone else.
[02:43:57]  It's interesting. Like maybe offline first could be another way to make significant gains, but like, yeah, what's this one application show with SW pre-cache issue
[02:44:09]  to a server push, broadly solidify assets, server rendered. Yes. This one's even server rendered. Isn't that crazy? Yeah. Anyway, most of these
[02:44:20]  demos don't work anymore. This is the one that I got solids current demo from you, but the one that I build in every framework, I was the view to example
[02:44:33] , but anyway, like if I was on average, just going to like across the spectrum, make a decision, you know, because these lighthouse scores are maybe desktop,
[02:44:45]  I don't even know if they're mobile. I would say that SSR is definitely faster than CSR, like generally wider speaking. I would, I would, even
[02:44:56]  though it's possible for it to be the other way, if I was going to take the like whole group of stuff, I'd say betting on SSR is better
[02:45:04]  than SSR is smarter. Okay. Okay. That's fine. That's fine. That's fine. That's fine. That's fine. That's fine. That
[02:45:08] 's fine. I'll see you guys in the next one. Yeah. That's fine. Yeah. That's fine. That's fine. That's fine. And that
[02:45:13] 's fine. That's fine. That's fine. That's fine. That's fine. That's fine. That's fine. That's fine. I'll see you
[02:45:18]  guys in the next one. Yeah. That's fine. I'll see you guys in the next one. You guys in the next one. Yeah. That's fine.
[02:45:26]  That's fine. Yeah, you're talking about camping. This is the same thing where they prefer almost an offline first experience. I think that's where the gap is
[02:45:51] . And it's possible that when devices get like, there'll be a hard swing back from this position when the like, when like the vice catch up, it hasn
[02:46:01] 't been. If you look at the graphs, like Alex Russell has some amazing graphs. I don't know if I want to show them right now, but he showed that
[02:46:07]  basically the bottom end of the spectrum has barely moved in 10 years. But the top, while the top end has gone faster and faster and faster. Yeah, there you go
[02:46:22] . Pressure is literally shipping is building running at functions. Yeah, there you go. Anyway. Yeah. I think, I think that, uh, where was I
[02:46:33] ? It's. I don't think this is where the ball stops. If that makes any sense. I think that the everything we're doing right now is exploring the middle
[02:46:46]  in the same way that island scale. you know, these other solutions can scale as well. And the question is like, if you get in a world where you start
[02:46:59]  building islands with view transition API from Astro, which does like a semi client, like a, what do you call it? flamethrower JS style, or
[02:47:06]  what's the stupid, the rails library of turbo style navigation? Like, and you compare it to like a fictional imaginary optimal version of RSCs. So not like
[02:47:20]  RSCs as they are today in react, maybe not even using react and you compare them and you go like, what's the difference? It's really going to come
[02:47:27]  down to the fact that one can handle state consistently and can be used to build real apps and the other one has to become a single page app at that point to do
[02:47:38]  that. Like it has to make a larger island. It's funny because when I use Astro, I make very, very small islands. Same thing with Marco, even
[02:47:48]  though I'm trying to do app like stuff. That's where you want to get to. You don't want large islands. Yeah. I mean, I don't
[02:48:06]  know if you ever want large islands. Yeah. Yeah. This doubled up. Yeah, exactly. So yeah, this, I think the current push right now is largely because
[02:48:25]  of money driving e-commerce. People who are in this state are bouncing right now that they don't even realize that they're losing the customers. It just like, have
[02:48:38]  you ever used a really slow spa on a good connection and like the and sometimes you have to refresh page. Like, do you know what's a good example? AWS
[02:48:56] . You've used AWS console. Like it's complicated. It's hard. And it's like, I, I kind of wouldn't mind if it was SSR.
[02:49:08]  I'm not going to lie. Like, yeah. Like even the, the, the, the J, the JS loading cascade and stuff from SSR, because it
[02:49:21]  knows what page it's on. Like, I don't know. It's funny. I, it seems like I got a lot of CSR fans here, which
[02:49:31]  is fine. As I said, solid was built in the CSR first environment. It's very good at CSR. It's the, it's, even though
[02:49:38]  we're not maybe the, the fastest hydrating solution, or we don't have server components right now. We, we are arguably the fastest client side, one of the
[02:49:45]  best choices for CSR applications, which is why there's a big push on it. And start. I just, I was, I, I like, I've changed
[02:49:56]  my mind over time. Cause I was very CSR and I thought SSR was a waste of time. I might like, I changed my mind. So I,
[02:50:02]  that's why I like, it's, I don't see myself changing my mind back. I can see a world where offline first makes a comeback. Um, it just
[02:50:10] , it's, it might not, I I'm wondering when that is, I don't think it's anytime soon. That's a more interesting question. Do I
[02:50:30]  consider it irresponsible start a new big project now without islands and RSCs? No. Mostly that these technologies feel kind of intermediate right now. Like they're like, they
[02:50:42] 're not quite there. I don't know how, I think that it's exciting. I think if I was in e-commerce, I would be like, finally,
[02:50:53]  I get to use. React or whatever framework I want and actually build something performant. Finally. But outside of that, like if I was in those boats, yeah
[02:51:03] , I like, I'd be like, I couldn't jump off it fast enough. You know, like I feel like maybe Shopify felt like that, you know, but
[02:51:10]  like everyone else, I don't know. It's, it's, it's, it's probably a good solution. I'd consider it, but I'd also,
[02:51:20]  yeah, I'd be like, you guys kind of skeptical. I'd be probably doing a single page app with like, maybe CSR, you know, maybe,
[02:51:26]  you know, or I'd add server rendering, you know, if it, you know, I feel like what I do is I'd like turn server rendering on, build
[02:51:33]  the app, have stuff break and then be like, okay, I'm turning off server rendering and, you know, you know what I mean? Like that's,
[02:51:38]  that's probably, let's be realistic. We, we start a little more ambitious and then we have to ship. You know, that's probably where my natural tendency would
[02:51:47]  be. Um, and then you, you tell yourself that you're going to turn on server rendering again in the future, but you won't maybe it is possible that
[02:51:59]  the big thing is with RSCs or certain component type architecture, it's shrunk the size. And this true with islands to a certain degree as well, but it
[02:52:08] 's shrunk the size of the isomorphic components and isomorphism is kind of the ugly parts. It's like the places where we try and make it work on
[02:52:16]  both sides, but it wasn't designed to work on both sides. This is kind of like where I'm agreeing with Matthew Phillips in that sense. Like he doesn't
[02:52:23]  actually want, I think he just wants the client render the islands, not even use them as server render them in a sense, because like, like isomorphism has never
[02:52:36]  been perfect. It's been kind of like a flawed solution that we've kind of had them make do with. Like we don't have a DOM on the server, let
[02:52:43] 's pretend. So server components remove that. So in a sense, they're less brittle. I imagine the most brittle setup is the server side rendering plus spot.
[02:52:55]  This is why you guys have real reasons to complain. Server components should be less brittle, which in theory, at least, used means that you might have a lot nicer
[02:53:09]  experience. using the app router, though, we did. And we had the rush revert the page. Yeah. Yeah, you see this. Yeah. I
[02:53:41]  guess you're basically echoing what I was saying. Like. It's not. You have to adopt the paradigm, you know. Yeah, I'm hoping to do
[02:54:03]  something about that. Benton, you weren't using it right. The classic react thing. I know it's so funny because you have like the classic like react core team
[02:54:12]  says people aren't using it right. And my version of it is like you're not thinking far enough into the future. You know, like I get it. It's
[02:54:19]  fine. Okay. I'm not having a super long stream today, even though I got a good audience right now. I got only a couple more things for you all
[02:54:29]  today. Sorry, someone asking why. Why quicker it's large rounds with react? Probably they reduce the interaction points. I think that's odd in general. Generally, I
[02:54:44] 'd want more of my coding quick as possible. In fact, I'd be really sad putting react inside my quick app. Like if I got that far where I could
[02:54:56]  pull the trigger and get my team on quick. That's like the hard part. Like it'd be sweet if, you know, you had a next.js app and
[02:55:06]  then suddenly you could go like, oh, look, this new page is all on quick and people like sweet. But if I'd gone to the point where we're like
[02:55:12] , yeah, let's just rewrite the sucker, you know, like change the route. It's now a quick project. Yeah, make a large react island. You know
[02:55:20] , it's a good starting point, but it's going to be harder to break it down. You know, like you do want if you're going to get rid
[02:55:25]  of it, you're going to break it down. I don't know why I have no idea. All right. So let's see. Do we have anything fun
[02:55:40]  to end out on here? We talked about solid start beta to talked about. Yeah, we talked about. We didn't talk about this. I don't even know if
[02:55:52]  I want to talk about this. When I started web APIs, HTML, then XML and JSON. Yeah, we saw the stream. If you want to know what I
[02:56:01] 'm talking about, watch me use a server function to send a response that serializes a response and then like pulls data asynchronously off that response that was sent back in
[02:56:15]  the serialized version of the response. It's funny because I feel like these guys are kind of joking. A JavaScript library that returns JavaScript from the server and runs it on
[02:56:27]  the client, you know, by the innovation. But it's funny that it's like it's not that far off of what the whole server function, server action things are
[02:56:37] . People, I think, thought when I wrote this, I was talking about react. But in general, this whole server function thing happens because we control the JS on both
[02:56:45]  sides. Okay. Yeah. For people who are wondering what this was about, just out of curiosity, solids resources support both of these. And the second one will actually be
[02:56:42]  more performant because it doesn't have to trigger suspense. That's, that's all I was getting at. Because if you return something synchronous, like if something,
[02:57:12]  if it's an async function, it will always resolve async. Even if our cache user is a promise, everyone keeps telling me use promise for cache users. We
[02:57:18]  still generally have a way to access it synchronously. React does too. Like their use has to insert something on the promise to resolve it synchronously or use like a week
[02:57:29]  map or something because otherwise it'll just keep on suspending indefinitely because every time you get to the promise, even if it's the same instance of the promise,
[02:57:36]  when you go to read the promise, you can only get the value asynchronously. So how do you do that during a synchronous render process? Well, you force getting the
[02:57:44]  synchronous value. And the reason I wrote this is because everybody in their dog is going to write that first version of this function. Everybody. Nobody is going to write the
[02:57:54]  second version. But the second version actually can be optimized in the first cannot. If you watch me, sometimes you write the second version accidentally. You'll write like a
[02:58:07]  create resource or create async call and use call fetch my thing and just return it and you don't make that function async. But a lot of people actually like go
[02:58:16]  in and go, okay, create resource takes an async function and then they await the one thing they're listening for and then they return that. And you're kind
[02:58:26]  of like, you just added an extra micro task cop for really no reason. Internally, there might be another promise. So, yes, you know, who cares if
[02:58:35]  it's two micro task, like two micro task queues or one or whatever. But it's just it's the language. I got a lot of people telling me
[02:58:45]  that TypeScript would have fixed this for me. But the thing is, actually, I didn't want the fix. Ironically, I actually wanted the optimization and I don
[02:58:54] 't people talking about Zolgo not knowing what they get. The funniest thing is like or mentioned that you can await it anyways. And in both cases, it won
[02:59:06] 't end up being that different. But. There's something like this has got to do with the coloration of async await essentially, right, because. You could also
[02:59:19]  just wrap this itself in an async function. I think someone put that in there and return the thing synchronously and there's like no qualms here. It's
[02:59:33]  just realizing that the scope of where you put that async function actually has an impact and can actually have different performance characteristics anyway. I don't know. You guys got pretty
[02:59:50]  quiet here. I honestly, I think a lot of people thought this was clickbait. I had someone go, oh, they sort of like ranting off of me and
[02:59:56]  then they're like, oh, wait, you created solid. You weren't just click baiting people. Let's conclude our season game. I don't know.
[03:00:09]  A hundred percent. But they are definitely a version of something that I would consider has considered a lot of the tradeoffs. They are like a path that actually is fully
[03:00:20]  considered where I don't know if everything else is. RC's problem right now is that they're not like as optimal. There's a lot of gaps. There's still
[03:00:28] , you know, like there's things and the models incongruent and. But. Fundamentally, there's, there's, there's sound, whether
[03:00:39]  that works for everything, you know, is a whole other question. It's sure if it has this better. I think we have to return significantly. Yeah. The
[03:00:57]  promise way is cleaner if you're handling errors. Yeah. It depends on like where people come and tell me, well, the try catch is better here. And then this
[03:01:04]  one has dot catch and there's different syntaxes for it. Some people told me that I actually did the stuff wrong. Yeah. Sorry. The fetching part is more
[03:01:17]  or less the same for both of these. It's the return cash to user that, that it's where the difference is. Yeah. I don't even, I
[03:01:30]  honestly, like how many likes are on this? I don't even know. I'm zoomed in. This might be my most liked post ever. I think, I
[03:01:38]  think, uh, joining Netlify was also around this amount. I don't. I, I, I, I literally posted this while, um, waiting to pick
[03:01:49]  up my daughter from her ballet performance. It's so funny that this, I just wasn't expecting this reaction. What's the overhead of triggering suspense? Well, it
[03:01:57]  depends on what the suspense is, right? Cause it's, it's all about if you have to render the fallback. Like you suddenly went into a whole different world
[03:02:08]  that you could have probably just avoided. Yeah. I don't know. Some people were mentioning that will react in that, but I was like thinking about it more and
[03:02:20]  it's like, no, react has to still asynchronously resolve. But maybe by the time, cause this is an immediate async. Like maybe by the time. Like
[03:02:28]  if, if react. If this was wrapped in a use, I think react synchronously wouldn't be able to get the value. So it would suspend and then,
[03:02:41]  um, wrap it. When it resolved instantly, it would add a way to synchronously access the value that then it would tell it to re-render again. So like
[03:02:51] , yeah, like you're causing at minimum, uh, another re-render in react even as well. Yeah. Uh, where, where were you working? Before
[03:03:11]  I was working at Netlify, um, I was working at eBay, um, uh, on Marco. Um, and then before that I was working at Vidig
[03:03:19] ami, uh, which was a startup making like a social, like an Instagram for schools. And then before that I was working at a.net shop, um,
[03:03:29]  active network building. Like, uh, they build a lot of, I was in their government section. I was building call center software. Um, and like.net,
[03:03:39]  like C sharp and like, like full stack. It could be, but I, I was just like, for the sake of my argument, it didn't really matter
[03:03:53] . I just was trying to show synchronous versus asynchronous resolution. Anyway. Um, yeah, I think let's end this on a light note syntax. I always like bringing syntax
[03:04:13]  discussions in because these are the kinds of things that people argue about, um, you know, over the holiday breaks and stuff. Right. And. This is a S
[03:04:25] velte or a view user coming in and going like, man, I really don't like the show component. And it's weird that the false happens here and the
[03:04:39]  truth is here and it takes all the space. I lose track of the condition boundaries are. And I thought this was interesting because it started with a discussion of like why
[03:04:53]  view and Svelte, um, you know, and their two purpose APIs were, were better than JSX, but I think I ended up swapping the argument around
[03:05:06] . I just want to throw this in. This is just a testimony to how sweet JSX is. I, I know I can use switch and match, but you
[03:05:14]  know, Svelte if else shines, it'd be nice to have name slots and all this. And I was like, Oh no, no, no, no,
[03:05:18]  not, not name slots. What I said to them was if it bugs you self close the tag, use children as a prop name, then you can put them in
[03:05:25]  order and keep the equivalent indentation. What's cool about JS check is children is just a prop and any prop can take JSX. No need for a slot concept.
[03:05:33]  Personally, I find it much cleaner. Try making a custom four component in Svelte review, something you do for pagination or virtualized lists. Like, like sure
[03:05:40] . The specific native control flow is more to purpose, like Svelte each, but you can't remake that in user land. Okay. So they went and saved
[03:05:48]  me the problem of actually making the screenshots to my point. See, if you did your show component like this, then you can actually see the arguments. But then he was
[03:06:00]  like, yeah, but then I, you know, he changed, he went and he was like, yeah, I don't like show. I'm actually going to rename
[03:06:06]  it to my if component. And then he, he went and actually implemented it in two seconds. And then he was like, wow. And this, you know,
[03:06:15]  I think this is, should be the moment for people when JSX clicks for them, because then it's just like, they went from something that, you know, maybe
[03:06:24]  they didn't find ergonomic to the exact thing they wanted. And it basically took them no effort. Yeah. I mean, this is hard because the if and else
[03:06:46]  have no relation to each other. The problem with this is you're now you're designing like a specific DSL. I think the key part here that I was trying to
[03:06:59]  point out to him was that solid doesn't treat for or show as special. In some ways, it's a weakness. We're talking about server side optimization and in
[03:07:08]  solid, you can literally write your own for loops. Like, like we can't optimize as well. But on the other hand, it's not a compiler trick. Your
[03:07:19]  components, my components, his components, her components are all treated identically. There's no like if and else are special kind of situation. You're right. This
[03:07:30]  isn't reactive. And I told him that he should just write the turnerary and put in a fragment. Otherwise, it won't update. But but like.
[03:07:43]  The power here is that the baseline primitives of the framework. Like I might have talked about this before, but I feel like it's worth mentioning again is I think it
[03:07:56] 's really powerful whenever you can. Take something. Let's say import X from somewhere. Right. And then you can go const. Y equals. X. Now,
[03:08:19]  I'm oversimplifying, but like what I'm getting at is if you can. If you in user space can provide something that has the same abilities as something else
[03:08:29] . That's how it feels first party. Like, for example, I can go. I can go. What's. Create signal. And I can go. Well
[03:08:46] , function. I could obviously assign it, but I can go. Create my signal. I don't. This. Well, what's the property? This is.
[03:09:00]  And I can return. Create signal. Args. This is. This is a superpower. Dark mode, please. Yeah. How did this end up in light mode?
[03:09:22]  I don't even know. This. Yeah. This is very powerful property. Because, sure, you wouldn't do this, but it means that everything else that follows the
[03:09:38]  shape gets treated the same way. Similarly. For. My for. Once. Like, there's a, there's a natural tension here because as a language creator.
[03:10:06]  Like. Everyone can create their own map function in JavaScript, but not everyone can create their own for loop. So sometimes having, similarly, everyone can, you know.
[03:10:16]  So there is value, I guess, to recognizing that there are certain control flows that are built into the language. And those are not extensible. But, like,
[03:10:28]  this, as a concept, is so core to what we do with Solid. I feel like this is, like, the place where Solid and Svelte kind of,
[03:10:42]  kind of split. Because I, can I create my ruin? I don't think you can. You can, you can't, like, there's no way to make
[03:10:54]  my, like, I could be wrong, right? But you can't create my state in the, in the same way in Svelte, right? Like,
[03:11:04]  you can wrap it and create your own wrapper, but you can't create dollar sign my state. I, I, I just, I, overriding global is
[03:11:30]  a, is a different, is a different thing. That thing is already global. I, I just mean that, like, in general, if you take an approach of
[03:11:41] , I don't know what to call this, composability like this, then essentially, like, the sky's the limit. Because you don't have to worry.
[03:11:52]  Like, from an ergonomic standpoint, yeah, there's obviously limits to JSX, you know, that are innate to it. So if you create a purpose-t
[03:11:58] emplating language, you can do better or whatever. But, like, if you've already acknowledged that, like, I'm using JSX or I'm using JavaScript in
[03:12:04]  this case. Like, if you're already in this zone and you're not trying to create a compiler to create a new language or something, like, what this does
[03:12:13]  is it means that the end user, if they don't like something about the API, all the trivial, silly things that drive people nuts, they can make it their own
[03:12:22] . Right? Infinitely. They can wrap the my four and the, the four and the my four and the thing, like, all the way up. And they
[03:12:32]  can keep the same patterns because everything else in solid knows how to handle these or these or whatever. And I feel like this principle is undervalued. I've, I
[03:12:43] 've ranted about this on stream before. I just wanted to kind of point out that I, I feel like when, when, when people do the syntax comparison,
[03:12:50]  especially when they show me show and four components for, and I've done the conversion myself. I have a stream where I do, I think it's called like, it
[03:12:57] 's, it's my least watched stream where I talk about REPL diving and I compared data binding in different frameworks and syntax. It's a complete stream about syntax comparison.
[03:13:09]  I just go, yeah, create me, uh, your own version of this control flow and show me what it looks like, like create a show component or a for
[03:13:18]  loop. And the thing is, once you start getting to react, you realize that this is something that they are also like suspense is just a show component. Do you know
[03:13:27]  what I mean? Like you start realizing that like error boundaries, like you start realizing that these things and these compositions, layouts, conditional layouts, like are just part of the
[03:13:38]  way we build. So giving people building blocks in the right form and giving them this basically principle that is, as long as you follow this, we will treat you the
[03:13:49]  same, you know, not special case you is really powerful. It's like the complete offset end of the S of the spectrum from having a specific DSL to do everything
[03:13:59]  like adding new syntaxes. Sometimes you need new syntax. Like Marco says HTML is insufficient to describe all these ideas. So they added new syntaxes to the, to
[03:14:11]  the tags, but it's all categorical. Cause like once you use those syntaxes, you can use them consistently for everything. It's not like, it's not
[03:14:21]  like, uh, I have a V for and a V if like, sure. Syntactically to be fair, those have similar, they're just using attributes
[03:14:28] , but the actual semantics of what those things do actually differ based on what the tag says they are, which is like, especially true of control flows versus attributes.
[03:14:39]  Because like some of them apply to the children, some apply to the element itself, some involve the element replicating itself. Anyway, it's, it's hard. I
[03:14:57]  mean, everyone has their own choices, but I would never like the, these are the characteristics that I consider valuable. Rather than like, like the pure aesthetic look of
[03:15:11]  it. It's interesting. You have to write your, you're talking about the, for the ruins. Yeah. You have to write your own. Yeah. Can I
[03:15:23]  make my own suspense? I mean, according to this, you can write suspense is not a compiler trick. It has its code. So if you wrap my suspense and
[03:15:36]  suspense, yes, you could, you could. And you, I mean, I don't know what you would do. Maybe you'd wrap the fallback or the children
[03:15:42]  there. There isn't that much exposed, but yes, you can make my suspense. So all the stores are a little bit weird, aren't they? Yeah.
[03:15:54]  The async and stores are the two places I'm looking at change. The main thing is I really liked immutable JS. I liked file core from Netlify or
[03:16:03]  sorry, Netflix, stop saying that. So like that, that impacted my design there. I was really big on these immutable APIs for the most part. I'm pretty
[03:16:13]  sure stores are just going to be produced. essentially we are going to keep the read, write split, but I think we will just make it default to produce and people
[03:16:21]  will mutate because it is mutating. I think, I think there's actually a semantic thing that confuses people. Their stores are internally mute mutable. So
[03:16:28]  we shouldn't really hide that fact because people get really confused. Yeah. Yeah. In fact, solid signals repo library already does that. I just need to, I'm
[03:16:48]  happy with solid start where it is. I get to actually, I had three big projects and solid start took me all year. We still got more work to do.
[03:16:57]  Don't get me wrong, but now we're getting to a place where. Who's rating. Welcome, welcome. Oh, wow. We actually have people in our channel
[03:17:19] . This, this so rarely happens. But yeah, solid start is at a really good place now with the new beta release that. I can focus on solid 2.
[03:17:30] 0 and finishing the hybrid routing stuff finally. But yeah, I, I think. I think. Yeah. Thank you for the raid. Or actually here you are. Right
[03:17:48] . Did I get that right? No. Yeah. Um, yeah. So I'm, I'm, I'm, I'm, uh, I'm super excited
[03:17:58] . Funny thing is we're actually just about the wrap up here on the stream. Actually. I w I've been talking all about, um, CSR versus, um
[03:18:08] , SSR and about all this drama on Twitter. The last, uh, the last, uh, couple days really. Um, as well as the new solid start
[03:18:17]  release. What is solid start solid start is. The meta framework, say the Svelte kit or next JS for solid JS, another client side JavaScript framework. Um
[03:18:31] , and this release, uh, is getting us very close to our, it's 1.0 release. What's next on the roadmap. Honestly, this release is the
[03:18:44]  big one. We're, we're, we're headed to 1.0. Um, that's, that's my hope. We'll, we'll get RC candidates
[03:18:51]  after we fix some bugs. The big thing with this one is we were now built, we changed our adapter layer for multi-deployment to be built on Nit
[03:18:59] ro, which is what Nuxt uses. So they handle all the, you know, I want to deploy to Purcell or Netlify or Cloudflare or,
[03:19:07]  you know, Dino or whatever that, that layer is now being handled by, um, Nitro. So we don't have to maintain that anymore. I made the
[03:19:16]  framework router agnostic, which is kind of crazy to a lot of people, but you can use any solid JS router with it. Now, which opens up,
[03:19:23]  you know, people to use different patterns, different data loading things. Then the trick to doing that was the file system routing, which you don't have to use, but
[03:19:32]  if you want to use it, is just an injectable as a, as basic config in. You can use the component and you can put it into your router, however
[03:19:38]  you want. And then it's just a route definition that you can use to generate routes with your router. And then in your pages, along with your default page component,
[03:19:47]  which gets automatically lazy loaded code split. You have the ability to actually set more of your route definition. And this just gets merged on. So in that case, we
[03:19:55]  essentially can, you know, have loaders for, you know, different like router. If you, if you, if you're using, you know, something that's
[03:20:02]  kind of like react router style, then you can just use, you know, those loaders and actions. If you want, you know, like, if you want
[03:20:08] , if you want, if you're using tan stack or solid router or whatever, like basically. And, you know, the key to this is we've designed in a
[03:20:15]  way that's very isomorphic. So we have server functions, but these server functions can be called from the client. You can in fact use CSR, like
[03:20:24]  client only rendering with server functions, because we've kind of abstracted the difference between actions and server functions. Server functions are something that we've had for over a year now
[03:20:35] . We were the first meta framework, I think, to add server functions. But, and we actually had server actions built in, but now we've pulled the actions to
[03:20:42]  the router. So if you want to use those actions, use solid router. If you want to use, I don't know, tan stack mutations or create query,
[03:20:50]  you know, use it, use it with solid router, use it with tan stack router or whatever, you know, like essentially. It's a matter of layering the expectation
[03:20:59] . We, we just giving the primitives, the pieces you need to build. Obviously we're going to have prebuilt templates all set up with what you want. You
[03:21:05]  can just install them, feel the CLI. But the idea here is that core, you can go from client rendered and then just hit a switch. And now it
[03:21:15] 's SSR server rendered. We have a few tools to help with this. Like you can specify, like do dynamic imports, like lazy, where this is like only runs
[03:21:22]  on the client and skips out of hydration. But generally speaking, this goes the full spectrum. We even have an experimental islands mode to do stuff like Astro style.
[03:21:31]  It's not ready yet, but this is all the idea here is that we can get solid start to 1.0 and lead the more volatile changing stuff to essentially.
[03:21:45]  Like later, because it's all swappable. It's not the meta framework itself. If you just go install solid start for the CLI MPM init or
[03:21:56]  PMPM create solid and choose the bear template, you'll get basically an app that reminds you of create react app. It will server render or create VDAP,
[03:22:07]  but it's like five kilobytes of JavaScript. It's just like literally like a hello world app, right? That's the baseline. You get a five kiloby
[03:22:16] te app. And from there, all the other pieces layer on. My goal here isn't to be like, this is the one way you do this. It's
[03:22:25]  to encourage people to create stuff like create T3 app. You know, people will make meta frameworks. They will bundle around this. This is expandable and we will use
[03:22:35]  this for our starter templates, you know, for, you know, when people just like I'm learning solid. Here you go all the way to the other meta frameworks.
[03:22:43]  It's a layer over solid, but it's kind of taking the role of the bundler. It's not actually like, it just makes all the hard SSR
[03:22:52]  parts easy. It's not, it's not telling you how to live your life. Right. Are these loaders universal? Yes. Well, it depends on how you
[03:23:04]  set up. Right. Like, cause the pattern we use in solid is universal isomorphic loaders because we, we, we use server functions. So you might
[03:23:16] , if you, if this get user is a server function, then it will only run on the server. Right. Like it, my last stream I did last Friday
[03:23:25]  was all about this and how this all worked, but like essentially we can also tell like import is server from solid and like decide if you're going to run this on the
[03:23:35]  server, the client, et cetera. But like, this is an example for this router. We have, you know, a cache API. And that way you can
[03:23:45]  like basically fetch it here and fetch it in the component. And this will allow code splitting and nested routings to parallelize the fetching hoisted out. And
[03:23:56]  then you also support link preloads like on hover. But yeah, we, we switched around for the new version of the router. We had different patterns for the old
[03:24:06]  version of router. Both work with solid start. The new version went this way because it will support hybrid routing and server function in the future. Cause it doesn't use context
[03:24:14]  as a mechanism. It uses the cache. But this is all part of like the thinking, right? It went into finding the right division. The router is the most opinion
[03:24:21] ated or volatile part of a meta framework. By not making it the meta framework, you can actually make the core a lot more stable, right? We're going to
[03:24:32]  continue working routing. Routing is the future of JS frameworks for the next year. That's like, I often say react server components are a routing concern. So like,
[03:24:40]  this is, this is how we approach it, right? I don't want people like, there might be, I'm trying my best to make, you know, for
[03:24:49]  solids, first party stuff, like universal APIs, so that like, we won't have an app directory page directory, you know, scenario happening here. But if there
[03:24:59]  were, then it's, you know, we have approached, you know, to like, just to adopt it. So this is, this is basically the gist of
[03:25:10]  it. Now that we've got the right separation, right responsibilities, it's going to be a lot quicker and easier for solid start to get to 1.0.
[03:25:17]  So yeah, I mean, there's a ton of other features here that I'm not talking about, because they aren't in solid start anymore directly, because we added,
[03:25:25]  you know, the router has like new, better async primitives, etc. You know, we also did, you know, these server functions are incredible, they
[03:25:35]  can serialize crazy data, like you can have the server function basically return an iterable async iterator, and then like have the client iterate and ask the server for
[03:25:46]  data over the wire. Like we have JavaScript executing on both sides here. So it's like, I did a funny demo the other day where I had the server return
[03:25:54]  response, which serialized a response, which had a stream on it. And we like literally, like from the client, read the response from the response and got the JSON
[03:26:03] , like got the stream off it like, and that's like, that's the kind of power here, you can have promises that serialize objects that also serialize promises
[03:26:11] , this, you might be going, why do you want to do this, but like there, there is impact to these kinds of things when you consider, you know,
[03:26:19]  what you can stream like picture, picture a scenario here, where, you know, you have this knowledge of what data like you have a cache API set up with your
[03:26:30]  router for something, and you have this idea of actions and data invalidation. Well, you could go, you could be on a page, you could update that data and
[03:26:40]  post it to the server and say, hey, on this server action, I want to redirect to this other page. And I want to load this data. And I
[03:26:49] 'm not talking about RFCs here on hell, it could even be a client rendered application, you're just because of the cache API, you, you basically have this
[03:26:58]  knowledge. And so the actions, you know, what you're going to invalidate, you just post and go, I'm going to add this list. And I'm
[03:27:06]  going to, let's say you're adding, I'm just trying to pick something you're adding a user to a list of users. And you want to, you
[03:27:13] 're on the details page, and you want to redirect back into the list page. And you want it to update, well, there's nothing to stop, stop this kind
[03:27:20]  of paradigm to be able to post to the page, you know, essentially, and while it's on the server, recognize that, hey, these cache keys are going
[03:27:34]  to get fetched, like call this load function on the server for the next page you're going to. And because like, let's say you only want to invalidate
[03:27:42]  certain things, pass that invalidation logic along. And then when it returns the virtual redirect, the client to tell it to client navigate to the next page, it could
[03:27:57]  also send the body back as promises that are serialized. And as the server finishes fetching the data for the next page, it loads in. So essentially, the client
[03:28:12]  gets a response right away, starts doing the navigation, realizes the data is not there. So it starts suspending. But the server is already data fetching in the
[03:28:20]  background. And as the promises resolve, promises on the client resolve, and everything finishes. Single flight mutation in client side render mode, no server components. One of the biggest
[03:28:31]  differences with Solid and React is like, our suspense, we've had suspensor data fetching for three, four years now, we never had server components. So like,
[03:28:42]  almost all these things that you, you know, React uses with server components that are like advanced use cases, they just work with Solid the way you always build apps.
[03:28:50]  Don't get me wrong, I think server components are great. I think there's a lot of potential here. I just don't think we need to limit ourselves saying
[03:28:57]  like, this is the only way you can build an app. Anyway, if you missed, well, I'm really at the end of my stream here. I know you
[03:29:14] , you, my plan today was actually the stream, before your stream, like I figured I was gonna be done like an hour ago, and just kind of, you know
[03:29:22] , catch the end of Prime stream kind of sneak in and then your stream, but then I found out you weren't streaming today. So, you know, it is
[03:29:30]  what it is. I hope your appointment went well. But yeah, essentially. Yeah, the problem is, I'm actually almost at the end of it, I did end
[03:29:47]  up going a little later, because what ended up happening was Xfinity, they gave me that notice. So like, we're gonna be in your area doing repairs
[03:29:56] , like on Thursday. And then they like, I like advertise the stream this morning. And then they're like, we started doing repairs in your area, you may notice
[03:30:04]  issues with your internet. I'm like, come on, guys. Yeah, yeah, yeah, yeah, yeah. It's so funny, because now that I got
[03:30:14]  the raid, I kept on going, because people, you know, were interested in what Solid Start is. As I said, I imagine stuff like server components are in our
[03:30:24]  future, we already showed a demo of hybrid routing. But the biggest thing here, and I've been feeling it all stream when I've been talking to people in the chat
[03:30:32]  is that a lot of people feel like they've been left behind. And I think there's a lot of good ideas that we're seeing out of next and stuff.
[03:30:41]  And I don't know if everyone's ready for it. And I don't think you have to be left behind. Right? I think that's just been the struggle,
[03:30:49]  like, between developers working on applications. Yeah, like, they should change to the new architecture. It's great. But it's like, you know, I,
[03:30:57]  you know, my, I always use Tanner as my poster boy, it's just like, he creates the greatest router of all time. You know, JavaScript writer of all
[03:31:08]  time, and, you know, with the type system and stuff. And like, what's he going to do with it? Well, if you don't use react
[03:31:18]  well in a meta framework, you're kind of hooped. So, you know, that's the message. So I think, I think that's where I'm sitting
[03:31:28]  these days. I'm pretty happy where things are at, I was able to reduce solid starts code base from about 10,800 lines to about 1400 lines, maybe,
[03:31:41]  roughly, so almost 10, shrunk it by 10 factor. And I, and the, I, you know, reorganize the files, and you know, it went
[03:31:50]  from 150 lines of code to our 150 files to about 30 files. So like, this is significant reduction for us. Right? So this is going to make this, this
[03:32:04]  is the difference between, you know, making the router not part of it, you know, all these pieces will actually make solid start able to be much stabler than
[03:32:11]  it would otherwise. Honestly, stuff is changing too fast. And you have to understand where the change is happening, and account for that. It's funny, you do this
[03:32:22]  in your own projects, you know, when you're building your applications, I mean, it only makes sense that I, that we do the same thing when we're building
[03:32:29]  open source projects. Yeah, deleted code is the best, right? Yeah, no, no, definitely. But yeah, you guys got me, I honestly, I
[03:32:44]  raved about everything already, I raved about everything from the this to the guiramo, uh, tweet to Dax's continued, um, you know,
[03:33:01]  performance demos. So I don't know, I don't have to tell you guys. Yeah, no, I'm just, I mean, you talk about this.
[03:33:14]  Um, the funny, the biggest move, I have to admit was, let's see how many open issues are on solid start right now. There's zero pull requests,
[03:33:23]  and 21 open issues. Yeah, error running on cloud for workers, I probably need better documentation on how to cloud flare workers working. Yeah, I'm gonna have to,
[03:33:31]  I'm gonna have to show them. Okay, that's fine. It's there. I kind of went in, and I warned everyone, but I closed every issue
[03:33:40]  basically in the repo. Um, I people are calling this issue bankruptcy these days. But I actually went through, and I knew, like, we changed so much of the
[03:33:52]  base. And I know, like, if, if this was a real product, you could never get away with, you know, this, so to speak. But like
[03:33:59] , we literally warn people every step. And the truth of the matter is, we've changed so much, I can't even go through every issue and, like,
[03:34:06]  test it. It doesn't even, a bunch of them don't even make sense. I tried to move them, I did spend time on every issue, I closed 230
[03:34:13]  issues, I think, and 22 pull requests. Um, things have gotten a little bit out of hand. So, you know, there, there is a trade off here
[03:34:24] , I don't like doing that, per se, even if they get doing it felt actually really good. Because it's like a new start. But the real,
[03:34:34]  the realism is those issues would have sat there forever. So, um, you know, it is what it is. You want to know about server functions? Yeah,
[03:34:54]  yeah, yeah. I mean, it's like server functions, you realize that I know that it's a no go. Yeah, yeah. One thing we didn't,
[03:35:01]  we didn't do closure extraction. Um, I don't know if we error hard enough about this, but we don't do closure extraction. There's a way to like
[03:35:08]  bind variables, but it's very explicit. There's no like hidden closure thing going on. Um, server functions should work basically anywhere. But one thing that I've been
[03:35:19]  doing is, I don't like them in the middle of the components. So I actually have been designing APIs that discourage you from putting them in the middle of the
[03:35:27]  components. Because what we did with solid, uh, router was we made these cache and, uh, uh, action APIs. And what's beautiful about them is you declare
[03:35:37]  them outside of the component and then you import them anywhere. So you can get optimistic updates for the specific action anywhere because you just import it. And then you have the
[03:35:45]  action and then you just go like use submission or whatever on the action. And then you get all the live submissions. And similarly with the cache API, you want to put
[03:35:55]  it both in the loader and using the loader and in the component or in the load function, then in the component, you don't have to with the route pre
[03:36:03] loading, like to be fair, you could probably fetch inside the components, just like you do in next and be like, I'm fine. I'm just never
[03:36:10]  going to be convinced that that's fine. But you could do that pattern if you really wanted to. But again, with a cache API and, you know, calling it
[03:36:21]  preload, we're encouraging you to pull it, the server functions out of the components, which puts them top level, which, uh, resolves a lot of the
[03:36:29]  weird closure extraction problems. Cause I explained this on stream previously, but essentially if I go here, the problem isn't like, I wonder if I can back up to
[03:36:40]  it far enough. Probably not. I probably refresh the page. Let me see if I can jump back to last stream. No, I can't. Okay. What I
[03:36:48]  was trying to say is the problem is never, isn't like import database from database and putting this in a S you know, whatever my server function. This isn't
[03:37:02] , this isn't the problem, right? Use server, right? DB something, right? This isn't the problem because top level module scope always exists. You don't
[03:37:13]  need to close your extract or write anything for this. This, you can just like make this part of the module. Cause you, you end up just basically exporting this in
[03:37:23]  the background. It becomes basically its own module when you break it off from the rest of the code. But the problem is that if you have function, say my component
[03:37:35] , cause even here, even this, look, let me go const secret here. this top level. Again, you don't have to do any close extraction. It
[03:37:55] 's there. It'll just be split into the module. It will never, ever, ever make it into the client because like, especially this one, cause you can see
[03:38:03]  it's pure. Like the, every bundler worth its salt, which is every bundler would never, ever send this to the client. However, if I do
[03:38:15]  this and I put it inside again, we're still fine. But if we put this in here now, again, we're not in server component land yet. So like
[03:38:28]  no one would do this anyways, because they'd be like, wait, this component's going to go to the client, but let's pretend we weren't server component
[03:38:35]  land. Like this, this code has to get hoisted out. You can't like generate it while the component's running. Like it's an end point. It has
[03:38:46]  to exist. Right. So technically this becomes, becomes this, we pull it out again. Right. And the problem is now where's the secret coming from? It
[03:39:00] 's like not defined. Where's the secret coming from? And which means that we have to actually go here and go like my server function two equals my server function bind,
[03:39:15]  whatever, null secret. Like that's the only way now in here or something like, I'm just going to pretend like it's this or something like now we know
[03:39:31]  that like this secret or whatever you get my point. Now we can get access to it essentially. And we have a specific component interest, but in order for you to call
[03:39:46]  this from the client, this is no longer, this is being sent as basically an argument to this function implicitly, which means it needs to be in the client if
[03:39:57]  you're going to call it on the server. So I don't like this, honestly. Um, so we don't do closure extraction. If you want to do this
[03:40:08] , we have like a special bind like method and you can call it yourself. But then I hope you can see that you're literally telling like explicitly saying, call this
[03:40:16]  function with this argument and it should click on you that it's in the client. Hopefully. Oh yeah. Sorry. Let me, yeah, I should have switched to this
[03:40:28]  view. How's chat doing? All right. So let's start. Thanks, Theo. Uh, Yeah. I mean, quick does it and react does a
[03:41:07]  special, uh, like, uh, what do you call it? Encoding. I just, I just, I didn't want to play this game. I mean,
[03:41:12]  so people are saying like, Hey, this is still not very obvious. I mean, I think the taint API or something like that is definitely required regardless. I'm
[03:41:20]  glad that's where we're getting to with these things. Like, cause now we're like understanding what primitives and pieces we need. Yeah. I'm pretty much
[03:41:39]  done. I argued about this a lot and he convinced me, not sure if I've shared that argument with you or not. I mean, I saw some tweet on
[03:41:51] , uh, on, uh, on Twitter about putting the function inside. Like I had it before. I just, the biggest reason you want this bind thing is because then
[03:42:02]  you don't have to deal with stupid form data. God form data is the worst, right? Like, and this can still work with JavaScript turned off. Right.
[03:42:12]  Um, but yeah, but the truth of matter is manually doing the bind yourself also still works with JavaScript turned off. And, um, you also can avoid ugly form data
[03:42:26] , right? Like I, I, one of the examples in the solid start repo, um, basically has all nicely typed server action arguments. So the thing is,
[03:42:37]  I did avoid this whole thing and just like use the action directly. You know what I mean? Like not use the forms, you know, maybe I'm not the most
[03:42:44]  progressive enhanced person out there, but, but I mean, for the people who do want to go this way, you know, I'm hoping it does enough. Right.
[03:43:00]  I, I, okay, Theo, let's bite. Cause let's, my question is like, couldn't you just call the bind yourself? Like check this out
[03:43:08] . Do, do, do, do, do, do, do source routes index. So here I got a bunch of my actions and whatever defined for my server functions,
[03:43:18]  which I think I just put them over here. I was just like lazy. I just put a use server at the top. You know, these are all using on storage
[03:43:26] . They're just database functions. I pulled them in. I might put this in an API layer somewhere else, but this is a single component. But what I did
[03:43:34]  here was where's my delete button. Well, first of all, let's look at the API for the delete button. edit to do remove to do ID number.
[03:43:46]  See, this is way nicer than form data garbage, right? You just go, I want to remove to ID number. The problem is obviously is how do you get this
[03:43:55]  form action into this button here? Where is it? Is this, um, remove to do, right? And if I try and stick this into my form action here,
[03:44:05]  it's going to be like, no, no, no, no, no. This is not form data. This is not, um, like this does not match.
[03:44:11]  I can't just stick my action into this here because it has an argument on it because it removed to do is an action with argument of ID number, but I didn't
[03:44:21]  do bind. I did with, and now it's basically a bind call. And now I just one liner button form action, remove to do with to do ID class,
[03:44:27]  the story. And now I get to keep my TypeScript because it works like, it works like partial application in TypeScript. So now like if I was to take
[03:44:40]  this out and let's just do it out here somewhere. And when const r equals this, what you're going to see is, um, this is an action that doesn
[03:44:53] 't take any arguments essentially. So like, I'm just, I'm just basically using partial application. I didn't use bind cause there was interfering with some weird type stuff
[03:45:04]  that like, like the native bind thing. I couldn't figure it out. I probably could. And honestly, I don't want people to think that they can pass
[03:45:10]  a null to it. Cause like this is not like, or this to it. Cause we're not actually ever going to bind this. We control this. But the idea
[03:45:17]  was that you could just basically, as long as you partial apple applied all the arguments up to empty or form data, then you could just like basically inline it. And
[03:45:26]  what's beautiful about this. I like too, it's because this even works client side, because technically this is a, is a reactive wrapper and to do dot ID
[03:45:36]  is a reactive access. So every time that the, uh, ID changes, like if it could update in this case, it doesn't, it will actually like fine gra
[03:45:45] ined update the action here. Um, anyway, I don't know if that makes sense. Yeah. Yeah. Yeah. It feels similar. So it requires your state
[03:46:12]  of detail. It gets more correct. Yeah. I, I, I, I, I'm, I'm, I'm everybody knows I nitpick on this kind
[03:46:18]  of stuff, right? Like it's kind of the reason where like our server functions are just functions. I make you wrap it in action. If you, if you want
[03:46:24]  to have action semantics. But the reason I do that is because this action doesn't come from solid start, it comes from the router. So like, because action
[03:46:33]  is a routing consideration. So the actions work completely client side without server functions, or they can work with server functions. Um, kind of like the remix trick, I suppose
[03:46:42] , but there are action semantics. They're not tied to the router. They're not like, like remix is very, what hate OS, like very restful
[03:46:49] . This setup essentially is like still RPC ish, except you can do it without it actually making any RPCs. I know weird, but essentially that, and
[03:46:59]  then I, I had some fun. I got, I figured out how to get forms working without transformation. This is all runtime. Um, but yeah, anyways,
[03:47:08]  I have a whole stream on that. Um, but yeah. Okay. I tested new versus R and I have a question about variable in memory server side. Reset is
[03:47:26]  each load. I know a 9% of these kids are resistant like data. So why does this happen? Okay. This is one downside and me and Akil are
[03:47:32]  working on this right now. The problem with the memory is that unlike react, our server functions, aren't always RPC calls. If you call a server function on the
[03:47:44]  server, cause they're not server actions, it's perfectly valid to just call them and like, while you're getting stuff. Um, and they, they actually create a
[03:47:52]  second copy of this branch. So like the server RPC endpoint is one copy in, in memory. And then the, the one that gets included as your main rendering
[03:48:04]  is a second copy. And I would like to do something about this. I talked to Nikhil about this, see if we could like merge the streams, so to speak
[03:48:10] , but generally speaking, you actually get two copies and you'll see it actually console log twice for anything drive downstream from a used server. Um, that means that, yeah
[03:48:21] , if you use unstorage or some kind of persistent storage, you're not going to have a problem, but it means that local variables thing. And I do consider
[03:48:28]  this behavior a little bit buggy. I mean, on, on the other hand, you could argue that it, once you deploy this to a real environment, you can
[03:48:34] 't expect like pretend they were deployed to different places. Like you can't expect your API, like you could like any, anything that you would consider, you know, like
[03:48:43]  memory, like it would never work if you deployed to two workers or, you know, two edge functions or whatever. But on the other hand, it's a,
[03:48:51]  it's kind of a pain in the ass for local dev. I like, I like just like putting an array and, you know, when I'm testing an idea,
[03:48:57]  you know, so like, I get it. Um, so while this probably is not a big deal for production and you'd have real persistence, it is kind of like
[03:49:07]  a, a stumbler. Um, I have talked to Nikhil to see if we can do something better here though. The thing with server functions here is we
[03:49:21] 're, we're not, we're not trying to do like actions are semantic by the router. Server functions are literally anything you do in API. I think I was,
[03:49:30]  I think I was building an app on stream last week and I was just like, I went from like the simple, like here, I have a to do list in
[03:49:37] , on my page. Right. And you know, like I just hard coded to do is equals array at the top of my page. And then I moved them to a
[03:49:45]  separate file and then I, you know, pretended it was on a server and I made an API route. But then at a certain point I just was like, okay,
[03:49:50]  let's get rid of that. And I deleted the API route. And then where I imported those variables onto the page, I just had put the use server at the
[03:49:58]  top of the file. And suddenly they just worked like API routes without wiring it. You have to obviously be aware that you are creating API routes, but the idea here is
[03:50:08]  these are basically just like API routes. If you want to fetch something on the server or run something on the server, you use server functions, right? Um, this is
[03:50:18]  not like, it's been the hardest part about teaching this stuff is because actions and caches and all that other advanced stuff are another layer. Like they're like,
[03:50:28]  Oh, I want to handle these very specific behaviors to do with routing. Server function is like literally just remote type safe, remote call. And by type safe, I mean
[03:50:37] , it's type safe, you could be, but like, you know, across a network boundary, it's not actually doing type validation. But as I said, what
[03:50:45]  I like about this is I finally solved the problem that Theo was complaining to us about. I don't know if I went on Theo stream and, uh, about a
[03:50:53]  year ago and I took what he said to heart because he, he told me, he was like, I'm really confused by like this crate server dollar sign versus when I
[03:51:04]  don't use it, which one's the server function. It's not clear that these arguments are on the client and these arguments aren't on the client. And like,
[03:51:11]  there was a bunch of confusion there. And I realized that I didn't like all these overridden specialized parameters. I just wanted like server dollars on like one server
[03:51:21]  thing. So that was one change. The other thing is he gave us half points on TypeScript, which sucked. He's like, okay, your, your actions are
[03:51:28]  great. You know, those are type safe. But when I go into your component and I try and fetch something, you have to use like a use route data return type
[03:51:35]  of type of route data garbage. Right. And, and I was like, okay, well, um, well, what if we use a cache function kind of set
[03:51:48]  up and this cache is a fine grain cache. It works on the server, you know, the, like a request cache, like, uh, the default next behavior,
[03:51:55]  but it also is a store in the client that when the data invalidates, like it's not a long lived cache, it's actually just a preload cache, but
[03:52:02]  it essentially, if you do a refresh on a page and you don't want to reload all this stuff, you can like put validation things on it, but it's
[03:52:10]  mostly for like a back cache. And like, it's a five second, like navigation cache. It does not last very long, but on the positive is when you get
[03:52:19]  the same to do list back, it automatically diffs it and goes, oh, that one switched to done. And it just changes the one thing fine grained with the
[03:52:26]  store. But on the other hand, the way you use it is you might throw it into your load function, which I don't have in this one here, like you
[03:52:35]  for preloading, but you just use this new create async primitive and you literally just go get to dues. And because you just use the same function, see
[03:52:43]  what does get to dues? Well, it has no arguments, but it's just typed, which means this one returns. What does it get to dues return a promise of
[03:52:51]  to do array. So what's this? You guessed it an accessor, like a signal of to do is array. So like the type script issue is done, right
[03:53:00] ? Um, again, actions, you can put them in forms, you can use action, you can do optimistic updates, you just pass the action to it. And
[03:53:07]  now we know that we have a submission of this data type, which is lovely because now, you know, you can type your errors that come back from your APIs. Everything
[03:53:17]  is just like TypeScript happy, which makes me happy, funnily enough. Um, because like, I remember like, I think I was showing this the other
[03:53:27]  day when I went, like, we have a really simple auth example with a login, right? If you go in here and I mean, I'm doing throw, I
[03:53:34]  know next doesn't, but this is actually the semantics. I didn't want to hide it. If you think about it, if you get the user, you,
[03:53:42]  uh, where's the good one? Where's the login? I'm trying to show is essentially it's really weird because you throw the redirect, but you return the
[03:53:52]  errors. And the reason you do that is because now this law, this function is, it takes a form data. I didn't feel like making this one a width because
[03:54:01]  the, all the fields are literally, it's a login form. It's using form data anyways. It's, these are like username, password, and like a toggle
[03:54:07]  for whether it's login or register, but the return type is promise of error because it's not a response because like redirects or things you throw, um, it
[03:54:19] 's promise of error. So if I go into my page here, I know that if I use this is for optimistic updates, but it can also show errors. It's
[03:54:29]  like using the submission. I know that this can only, the result can only ever be an error, which means that the type of the result here is an error. So
[03:54:36]  I get the message off of it. Like TypeScript works beautifully with, with this solution. Right. Um, and, and even the, the trick I did to
[03:54:49]  get this to work so that it can tell that it, that the action doesn't work. Like I can't just put any function here. It's not going to like
[03:54:56] , it's not going to accept this, you know, it's going to be like, Hey, that's not right. It's, I can't even put any
[03:55:01]  action there. The action has to be compatible with form data, um, or be empty. So like, yeah, this is a huge leap forward for TypeScript.
[03:55:10]  Yeah. Yeah. Let's see the, the thing for me that I wanted to do, which I don't show in these examples was the, you, you see
[03:55:32]  the problem with the wrappers, right? Cause you go into the, you go into the, the, where's my to do, my to do app example, you
[03:55:42]  end up importing stuff from the server function and then wrapping it again, which is really a pain, right? Like, cause, uh, where's, sorry, where is
[03:55:52]  my, is it not this one? I don't want to do the login. I wanted to do the to do MVC. Um, you, you go in
[03:55:58]  and you're kind of like, why am I doing these wrappers again? What I wanted to actually do is it's not in this example, but maybe, maybe my
[03:56:06]  hacker news does it is move all of these into the API layer and then inline the use server calls instead of globally doing them. So essentially when you make your API
[03:56:16] , um, where's the lib, it's more like this. Okay. Ignore, pretend this fetch API is database. What I'm actually exploring is export, get
[03:56:28]  stories, cache, async load inside use server, inside use server, inside use server. And then essentially we don't, we don't have to, we don't
[03:56:40]  actually have to name the intermediate function. I know that's kind of silly, but like essentially I was picturing people just to make a data layer, you know,
[03:56:48]  in a shared location so they could actually reference it in multiple places. Um, and essentially put the server function, use server inside the, the calls. That that's
[03:57:04]  what I was thinking anyway. Uh, I'm glad, I'm glad to, I'm glad to hear that. Uh, this, you were right. I didn't
[03:57:21]  see it right away. It takes someone else to think something, I spent so much time with it. Um, there's a lot of reasons for the current APIs there.
[03:57:27]  They've been through a lot of thought, especially preparing for a potential server component feature. We, you know, people could just like not do the load and even a hybrid
[03:57:37]  feature. I've been thinking about a world where certain route sections are classic SSR spa and certain ones are like server function and like how the data loading story can tie in
[03:57:50] . Maybe I'm like overthinking it mostly migration story, but I think all, I think, I think the pieces line up. Um, anyway. Um, but
[03:58:02]  yeah, so nitro, this cool stuff, solid start, um, beta two, I'm, I'm, I'm hoping we're on a fast track to 1
[03:58:10] .0 because yes, routing server component type stuff that's going to keep on coming. But this is like what, when, when we add that stuff, it's going
[03:58:20]  to be like, Oh, what do we do? We have to update solid or we update the router. It's not solid. Start doesn't care that much. I
[03:58:27]  think to be fair for server components are probably big enough that I am going to have to actually look at the server functions. They might have to handle a few specific forward
[03:58:34] , a few specific headers, but like that's, that's essentially it. And that's why I've been able to reduce the code. I remember it was, it
[03:58:41]  was really, you know, like it's, it's Vinci takes care of a lot of heavy lifting. That's why I just like, it's a few pieces
[03:58:48]  of config. And then, you know, it leaves me free to build stuff like the router stuff. I actually have fun building, like working through these kind of structural
[03:58:57]  patterns, you know, that's, that's what I like doing. Okay. Use server inside cache would mean that you cannot reuse the pure fetcher anymore on the server
[03:59:10]  anymore. But like, why wouldn't you just cache it anyway? Like the cache only exists the length of the request. So I'm assuming that if you call the
[03:59:20]  same function with the same arguments during the lifetime of the single request, you'd probably want the same answer. Maybe that's not true, but I think it's actually like
[03:59:29]  a fairly reasonable assumption. Yeah. Oh, and obviously it goes without mentioning all this stuff automatically works with hydration. You don't have to do anything special, right?
[03:59:42]  It's, it's because it's using solids, primitives underneath. So serialization, streaming, suspense, everything just automatically works. Um, which is very nice for
[03:59:50] , you know, using server functions with tan stack, you know, and all that. I have a hacker news example I showed the other day with using tan stack query instead
[03:59:57]  of these primitives. It's whatever you want. Ah, okay. That was, that was my, my short, I'm getting shorter at explaining my solid start
[04:00:09]  beta two is pretty sweet. There is no beta three, no beta three. No, no, my great. Okay. You're just trolling me. All right.
[04:00:19]  But yeah, I'm, I'm, I'm excited for this. I, I think this is like, like, I, I, I put it out there
[04:00:26] . I could see the change coming. We showed off cool things, but I didn't feel as confident moving forward. You know, like it was always a little irks
[04:00:35] ome, you know, I was like, uh, things are going to change. What's going to happen. Where do we sit? This is a much more stable,
[04:00:43]  much more like, obviously there's bugs. We'd like just released it, but like, this is a much more sane approach to breaking up the responsibility. Okay.
[04:00:56]  Okay. I did not plan to stream all day. I've been going for four hours already. I think I'm going to call it. Um, I'm glad I
[04:01:04]  got to sneak into Theo's spot here and get a few extra viewers, but, um, thank you everyone for joining today. Um, again, uh, you guys
[04:01:13]  are what makes the stream. Awesome. I, where's that bookmark again? Um, was it right here? Uh, I wanted to, I'm never going to
[04:01:22]  find anything. Am I this one? You guys are awesome. So, um, thank you. And, uh, you guys have a good Christmas. It's my
[04:01:38]  last dream for real. I know last time I said that was my last dream, you know, on Friday, but no, I snuck one more in on you all
[04:01:44] . So, um, I'll see you guys all in the new, in, in the, uh, the new year. Um, catch you later.