---
showLink: "https://www.youtube.com/watch?v=2ZEMb_H-LYE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Astro SSR w/ Fred K. Schott"
description: ""
publishDate: "2022-04-09"
coverImage: "https://i.ytimg.com/vi/2ZEMb_H-LYE/maxresdefault.jpg"
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

[00:00:00]  um thanks everyone for waiting i'm running a minute late here i was just taking care of some stuff and making sure that my drink was poured but um welcome to my stream
[00:00:14]  tonight oh we got we got a bunch of people right off the bat i guess some people are excited to see astro i'm just giving it a minute come say hi in
[00:00:22]  the chat um so you know i know you're alive yeah this is what the friday night stream is all about you know you've had a long week at work we
[00:00:34] 're just going to relax here and uh and look at some astro i think uh that that's the plan at least um i'm i'm super fortunate to have um f
[00:00:46] red with us this week which is really cool um because i was just like i was going to do this anyways everyone knows like some new technology you know some new new s
[00:00:55] sr stuff i'm going to try it but to have fred on board is just going to make this so much easier yeah a lot of excitement in the chat it's
[00:01:03]  great i know where did everyone go i don't believe stream yard sometimes when they tell me the numbers apparently everyone just left the stream i think i offended like 20 people at the
[00:01:15]  same time so i apologize i'm sorry how's everyone doing oh apparently we have solidjs in the chat good to see you yeah great to see everyone coming in oh
[00:01:41]  man yeah i mean pretty fred's been busy this week i'm so glad he can make some time to join join us because he's seriously been everywhere i mean this has
[00:01:50]  been a big week for after obviously but um i i'm i'm i'm pretty stoked on that yeah so just give you guys a couple more minutes you know kind of make
[00:01:58]  your way over make sure you got your drink poured or whatever oh all right yeah no i'm actually really excited about this because i i looked at astro the first time
[00:02:13]  about you know i mean i've looked at it as soon as it came out obviously and it's all like doing integrations and solid integration was always a pretty early game but
[00:02:21]  i actually looked at it on stream some of you might have seen that and we just kind of played around and got a feel and saw how how we could use you know
[00:02:28]  solid kind of like signal communication to make it really easy to communicate between components and we tried a bunch of stuff and it was actually because i broke hydration by accident when i was
[00:02:37]  like hacking the integration it was one of the first times i actually saw solid's lazy progressive hydration work where people where we we clicked the page a bunch of times and we're
[00:02:46]  like oh why is it not hydrating and we triggered it and then selling everything updated because solid recorded everything that happened before hydration and then replayed it and that was like
[00:02:55]  one of the coolest moments on stream for me um but we didn't and we got to play and build some stuff but we didn't get to get like super deep and part
[00:03:03]  of that is i mean i built my my wedding website back in the day and a few other things but i've never been the static site stuff what hasn't been where i
[00:03:11]  have my experience it's not where i i just have stuff off the tip of my fingers i i build a lot of dynamic sites um so you know it was very easy
[00:03:20]  for me to go okay astro is great for this one use case but ssr well that blows things wide open so i'm like really stoked on this because you know
[00:03:29]  now like we have another game in town on on partial hydration we'll talk about that in a minute and what that means but to me that's huge right because um there's
[00:03:38]  only a handful of frameworks that have this ability to do um this sort of approach to hydration and astro gives it to everyone like it's like bring what you have you
[00:03:51]  know you can play too and while frameworks like quick and marco are like pushing the boundaries even further along like astro sort of hydration very similar to what marco's had
[00:04:03]  you know for the since you know almost the beginning but what it means now is everyone has that and that was good enough for marco for seven years now we have it
[00:04:12]  with reacts all pre-act felt whatever so you know this this is this is huge and i'm super excited and i said super um honored to have fred on the stream
[00:04:24]  tonight so um we're gonna you know usually i just kind of go solo on this week in javascript but this was kind of like a you know this is this
[00:04:34]  was if you ignore astro for a second this has actually been kind of a slower week in javascript so i'm just gonna bring fred on right now let's
[00:04:40]  just get started you know um let's let's let's welcome to fred to the stream oh my god i'm honored yeah it's so great to have you here um
[00:04:50]  this this this is gonna be a lot of fun because i i want to talk after i want to understand the 1.0 beta and i i and then i want to
[00:04:58]  build something and kind of play with it and as you know because you know the second i caught wind of of this uh release i was like give me an early preview show me
[00:05:07]  show me show me and and you know now we get to actually do it with everyone here so i'm pretty stoked about this yeah i'm so excited can't wait it's
[00:05:15]  been a very busy you're getting very loopy fred um after a week of launches and it's been a busy one so hopefully i can channel that energy into um some
[00:05:23]  weird friday night content yeah i mean that's that's what we're all about here i think that's everyone gets me i'm usually like half asleep i come in
[00:05:29]  i'm like this has been the longest week ever guys i'm sorry and then next thing we know we're like chatting still three hours later i'm gonna try to keep it
[00:05:36]  tight because we got a guest tonight and that's why we're not gonna spend a ton of time here but let's have some fun with it and uh yeah so let's
[00:05:41]  let's let's get started here i'm gonna i'm gonna throw up the this weekend javascript banner and i'm gonna start sharing my screen here um obviously as i
[00:05:50] 've already mentioned uh let's switch to this view the astro 1.0 beta is a big deal but um there's a couple other things i've been going on
[00:06:02]  this week not not as much as usual um one of those things was uh uh some personnel moves um two two big ones i've been watching this recently because people have been kind
[00:06:13]  of moving around there's been a there's been these shifts and notable ones and obviously we've seen the members the react team kind of go to um new homes and one
[00:06:21]  of the ones this week was um brian who's kind of responsible for all the dev tools on the react team actually has moved on from uh meta and is joined uh replay
[00:06:33]  and if you guys haven't seen replay replay is amazing it's this uh software that it's a browser basically you get a browser and you can record anything with it and just
[00:06:42]  replay it and scrub it backwards scrub it forwards and yeah i mean i am i use it all the time honestly i use it this week debugging um just because like sometimes you
[00:06:52]  get the really hard problems and you're trying to track down some weird timing issue you know you're doing ssr and streaming and stuff's coming in weird and then you
[00:07:01] 're like i can never reproduce it you try and like put a log or debug it and that interferes with how things run with replay you just record it naturally reproduce it
[00:07:10]  and then you can go back and go oh let's log or look inspect this value here and you can just do that as many times you want without losing your place it's
[00:07:18]  absolutely amazing i haven't used it myself yet but i remember the idea of sharing is it har files like bug reports with like an har file attached you have to like download that
[00:07:27]  just to like browse like try to recreate what they do for free it's very cool yeah it's it's it's insane and um i mean he joins uh uh some
[00:07:35]  other react community people that you're aware of um mark erickson a maintainer of redux you know famous for its time travel and stuff you know makes sense um also
[00:07:45]  uh a few weeks back uh joined replay so they're building quite a team there um i think they've started out a bunch of like former mozilla devs and they've
[00:07:55]  now uh kind of been growing it out and you know it's honestly everyone on the framework side who's been using this stuff like it's such an incredible tool to have
[00:08:04]  because uh you know as a friend was just saying you can go you can just tell someone to go record it and give you the reproduction and it just it saves some it's
[00:08:12]  it's like the best way of being reproductive it's it's it's like a video recording except you can debug it like it's it's insane ryan you're sponsored
[00:08:20]  by replay right that's why we're talking about it yeah right yeah yeah replay give ryan money well one thing that was cool that i didn't see i don't
[00:08:30]  pay attention enough sometimes and i think they might have even mentioned this to me i went to the website you know because someone was talking about it i was like oh yeah check it
[00:08:38]  out check it out check it out and then i was like you know blah blah looking and you know i knew they quoted me and then i was like solid js logo there
[00:08:45]  you go there i got the logo so yeah um big props to replay obviously um the other big move this week um was another one you know you never know you never see these
[00:08:57]  things coming obviously but um jason miller critter preact um it's been at google quite a while looking uh working on like you know web and web performance and stuff
[00:09:08]  and he's actually moving on to join shopify um i don't know what he's doing in shopify it'll be interesting to see shopify has been working on
[00:09:14]  hydrogen a new framework um based on react server components um which is like on their side of things i mean honestly i don't know where this goes what this means but it seems
[00:09:25]  interesting enough to to point out um on this on the stream so i'm i'm looking forward to see what what uh jason does what he announces where things are
[00:09:35]  going because um always watch his work he has um he has an incredible eye for optimization and um you see this in the work in pre-act and whatnot like it's it
[00:09:45] 's it's super small super tight it's not an easy job to actually kind of emulate all the features of like a framework that's like 10 times larger than your framework and
[00:09:54]  like sure it's not like exactly the same and there's differences but to be able to kind of give that compact give that kind of experience to people and make a real
[00:10:03]  alternative that people you know use um is is awesome and i i just can't wait to see what he does next jason's awesome i worked with him at google there's
[00:10:12]  there's a strong google to shopify like pipeline right now i don't know what's going on over there but yeah wow yeah i know for sure um yeah so i
[00:10:20]  mean other than that see and this is why i just pulled fred on here is because um yeah i saw some chatter about react 18 and people getting their first kind of look
[00:10:30]  into it but honestly it's still early i'm we're just gonna let that play out and see how it goes um but the other two things i mentioned what was announcements big
[00:10:40]  release announcements 1.0 beta for astro and then the other one was uh redwood i know everyone's familiar with redwood um it's so they're a real
[00:10:47]  1.0 we were a 1.0 beta like we start two months and then june 8 is our 1.1 that is a good clarification here that's that's
[00:10:55]  fair red and redwood's been uh around a bit longer too than astro project uh to some of my knowledge they've been working on this for a while and i think
[00:11:02]  three years yeah so um yeah this was a big a big one for them um for those who aren't familiar it's a meta framework and uh based on react but it's
[00:11:11]  more than that it's kind of like i don't know what to call like batteries included like they have every piece of the stack i think they said they're like built
[00:11:17]  for startups i don't know if that's still the marketing line that was would you call it rails for like jamstack like meta frameworks it feels very railsy there's
[00:11:25]  like a generate command because like every page has like eight different things you need to like sorry that sounds snarky it's really powerful it's super cool um yeah i mean
[00:11:33]  yeah that's the thing yeah i think i think that's probably fair i don't know if anthony's around this week and you could clear that up at all but
[00:11:41]  yeah i i yeah and we're seeing we're seeing more of these kind of opinionated uh stacks and like things are getting complicated and there's more details so i it's
[00:11:51]  really nice for a lot of applications to just have everything built in to have that again because like i don't know if most people i don't know if everyone's seen it
[00:12:00]  if you're a little bit older timer like myself you remember this video from i think it was like 2005 or 2006 where dhh sat down and was like okay guys i
[00:12:08]  got 15 minutes i'm just gonna fire up a whole app and he just sits there with the terminal and he schedules scaffolds everything and he's just like typing typing typing into
[00:12:16]  these talks and he just goes through this whole app and he builds it from like nothing to a fully working database crud update do this edit and and deploys it to roku
[00:12:26]  i think and he does he does the whole thing in 15 minutes like full comment section like full data like verification log in yeah it was really cool i remember that yeah exactly
[00:12:36]  and that we haven't been there on the web for a while i mean you could argue that rails has been doing it this whole time so there but there's been a reason
[00:12:43]  for those other trends javascript has kind of had a bigger play more interactive in the browser and it's taken a while for us to kind of get to a point again
[00:12:51]  where we can pull in all of those kind of elements and and kind of get that experience i mean obviously redwood is a great example of of having made like a lot
[00:13:02]  of the decisions for you and kind of completing the whole picture but this is this carries on to a certain degree to any of the meta frameworks these days they're just they're
[00:13:11]  getting all a little bit more ambitious doing a little bit more seeing how they can leverage the infrastructure more we have we have a lot of changes you know stuff serverless functions
[00:13:19]  edge functions like a lot of a lot of kind of technologies kind of building up to what might be the next big thing so it's it's it's redwood isn't
[00:13:30]  in isolation it might be just one of the best examples of like going like here's the complete package right now but you know we we're seeing so many meta frameworks kind
[00:13:40]  of come out um there's been this like real i don't know people keep on using this term bundling unbundling thing like the the bundling has been going
[00:13:47]  on for a couple years now and we're getting to a point where like these frameworks are real you know solutions and um i mean even that isn't uh you know separate from
[00:13:57]  what's going on here with astro so this is beta release but we're talking about what i believe to be quite a capable almost platform of sorts but yeah you know that
[00:14:08]  i don't mean to make this about me but i see you're already going there would you call astro a meta framework it's someone just asked me the other day
[00:14:14]  and i'd like kind of like we've used site builder in the past which feels like old archaic what do you what would you call like what how would if as
[00:14:21]  much as these terms mean anything what would you call astro yeah i mean it's interesting because yeah i usually i use that term but like sometimes yeah i'm not quite sure
[00:14:30]  which side of like the fall on it because traditionally this creating meta framework required a bunch of investment having um you know certain types of opinions and building those pieces out um and
[00:14:43]  just being like this is the way to do it and what's happened for me at least is um like i'm gonna back up a little bit because a little talk with solid
[00:14:54]  here is people you know instantly wanted they're like where's your next js where's where's your your way of doing this stuff and i didn't really care to build
[00:15:02]  that myself i i knew that what the pieces were so i started building pieces and what ended up happening for me was two projects showed up almost at the exact same time of a
[00:15:12]  couple years ago and they basically let me just take my pieces and kind of hobble something together without going through the effort of making the meta framework so to speak and it
[00:15:22] 's changed my perspective a bit those two projects are snowpack and beat um and and basically suddenly i was like wow i don't have to do all of this work you know
[00:15:32]  like especially when they were the kind of first bundlers to really recognize ssr as a thing and they're more than bundlers like i don't know what to call
[00:15:40]  those but once that was out there i was like okay so i'm going to use this to build my meta my meta framework so to speak and i started building pieces and
[00:15:47]  started doing that and then like at a certain point i think this happens to everyone who kind of goes to this thing uh you you go this isn't even a thing in itself
[00:15:55]  it's just a bunch of stray plugins like like i could this is like infinitely configurable i don't feel like i'm trapped and i i think part of this actually is
[00:16:05]  we we we should thank people like uh jason miller i think he came up with the universal plug-in spec or something i'm not exactly clear on where the
[00:16:14]  from and the past kind of based off like roll-ups plug-in system and suddenly even though it's a you know maybe a meta framework it it kind of crosses a
[00:16:24]  gray line with like a a starter template like like you can kind of do this without being as opinionated as you might have been in the in the past so i don't
[00:16:33]  know if this is where you were directing it um fred but like essentially my perspective has changed greatly on it because like some when i think about solid start now for example
[00:16:42]  which is on the side and yeah it has some opinions but none of them are hard held because you can just replace any piece of it it's just a beat plug-in
[00:16:48]  or it's just like a a little like something you just like add you know i i'm kind of you know even server-side rendering for us is like that it's
[00:16:57]  just like oh like add the server-side rendering module so to speak i i don't even know anymore this has become kind of a murky gray area but it's
[00:17:05]  really cool because the the line between like cma and like next in a certain sense might be blurring and i don't i don't know where to place things like i
[00:17:18]  don't how do you feel about that like what do you put after we we started calling it a platform which i think is kind of half the fact that we work with
[00:17:27]  any framework which we can talk about like that makes it feel very like you said pluggable kind of like pluggable on the other direction like you can build on top
[00:17:35]  of it pluggable versus um made up of plugins um or extendable through plugins so that's what we've been using but we've kind of played with all of them
[00:17:44]  and i think the platform's the first one that's felt right yeah it's funny i also like meta framework always felt like a kind of made up term like what's what
[00:17:51] 's meta about it and like no one actually defined the meta part of meta framework so yeah yeah for sure uh yeah i don't know where i picked up that term or
[00:18:00]  where it came from but it seems oh it's like i think pretty standard it's like it's like a it's like a framework squared it's a framework of like bl
[00:18:06] itz was the classic meta framework because it was built on top of next which is built on top of real like it was it was a the the tower was growing on that one
[00:18:14]  yeah yeah yeah because we're like how many layers and the thing is yeah it's funny like it's like it now feels like a slightly different pattern and like i said
[00:18:24]  we we're not like the only person like and ask them the only person to see this because like you start playing with beat and i i guess you would have seen this much
[00:18:33]  earlier you know working on snowpack and stuff to a certain degree as well you just you just start seeing just how like maybe generalizable this stuff is like um there's another
[00:18:43]  v uh um project of v plugin ssr that came in very early on and a similar goal of kind of pulling in all the frameworks uh i know that they have
[00:18:53]  a whole huge set of features and like different things but like it was interesting them because they were thinking i think a little bit more next js you know kind of single page app
[00:19:01]  initially i know they are supporting other cases now but i'm just like you you kind of start looking you're like well everyone needs file system routing like how different is it going
[00:19:09]  to be between the different things so everyone needs these pieces and suddenly you just it's like you have this other ecosystem and yeah i don't know then you repackage
[00:19:19]  it repurpose it for your your own thing yeah i don't know where this goes like the whole the whole range is kind of um like yeah i'm just glad that with
[00:19:32]  these tools i don't feel like i'm back in that i'm ever in that zone again where i'm like okay what's my webpack that config um like and
[00:19:40]  trying to like figure that out i mean there is configuration but a lot of these pieces of configuration itself is so pluggable that essentially like you just kind of can put a
[00:19:50]  lot of pieces together and make them work and it's not that same effort and one of the classic challenges with this was like with things like cra you have this like you have
[00:19:59]  to eject right like if you want to change the system and the difference here is the a lot of these pieces are just kind of like they were built from the beginning to
[00:20:10]  understand that they were part of like a plugable thing like the reason cra has ejected is so that the whole project can move together you know all the dependencies and all that
[00:20:19]  and don't be wrong if you have a bunch of different things working you can still get you know it's like anything on npm you know weird things not working and crossing
[00:20:26]  so maybe we still do need that other layer layer layer like astro but like it's it's really cool to see um like meta platform oh no we're back in
[00:20:39]  it meta meta is a great word i mean you just can't get rid of that um yeah i maybe this is kind of jumping around a bit but like i know you have
[00:20:48]  thoughts on this and it's something that we've even chatted about like one of the things that astro it's like if we were taking a bet on anything it
[00:20:55] 's this bet that like you know react routing and like file-based routing is not that different but from svelte routing from view routing like the idea of like serving a
[00:21:04]  route isn't really tied to a framework or like how you generate ui it's it's a concept that is repeated across all these and duplicated and kind of
[00:21:13]  going back even to the story of like you're building solid like day one i want a story for building an app with solid well i don't have to build like a router
[00:21:20]  just because they're like every framework every meta framework has this idea of needing to pick a a real framework and then build all the way down um so like we kind of have
[00:21:29]  this idea like well like could we be the foundation this platform that like does routing and then you bring a ui framework to the picture when you need interactive ui and it
[00:21:38] 's kind of a different model because right now it's the framework all the way down and we're saying no it's astro all the way down meeting at the kind
[00:21:44]  of point of interactivity and that's where you bring in the framework so it's like kind of changing the role of framework i feel like you've also seen the benefit of
[00:21:51]  tying the ui framework to routing because it lets you do a lot of data loading with routing so i i feel like maybe you even disagree with how i've framed i'd
[00:21:59]  be curious to hear your thoughts on that it's it's it's it's interesting because i i yes i and i'm also kind of always a little bit skeptical of
[00:22:10]  agnostic approaches people tell me something agnostic and usually that means that like it works for the most popular solution or like whatever the author had intended and usually most of
[00:22:18]  the time for me personally that means it doesn't work what i built that's just been my history web components whatever like it just it just didn't actually like i had to
[00:22:26]  kind of go in my way and the interesting thing about astro is is maybe because it's extension this every website um you know is is it's a website it it
[00:22:37]  has a server or static generation whatever but like when you route you go to a location and that's being you know handled on the server yes there's client-side routing i
[00:22:47] 'll get to that in a second but essentially that mechanism is a truth of the web so that mechanism is agnostic so if you build something around server-side routing
[00:22:56]  you're you can actually pull off being agnostic because every framework and every tool has to account for the fact that's how that's that is what the web is and
[00:23:05]  yeah i think projects that try and be how to put it agnostic and try and do client-side routing are probably going to have a very very very very hard
[00:23:18]  time and it's because the change management system of these libraries is different like right down to how they render the update all that stuff from the server perspective you're just serving h
[00:23:29] tml and you're serving javascript and every framework has to handle that so server routing is fine but client-side is kind of a mess to generalize and i
[00:23:38]  haven't seen that successful to have a universal client-side router so uh right now what that means is you have two paradigms two conflicting paradigms essentially and
[00:23:53]  i mean you've heard this mpa spot like that that that is the the the split right so i've you know i've been very single page app oriented so you know
[00:24:02]  i built a lot of stuff around routing because routing is the background of the app and if you control the whole app and it's that single experience you kind of have to
[00:24:09]  own it and you and for a single page app i believe you do have to own it but multi-page app it just takes it off the table because you just you just
[00:24:17]  you can just push it all downwards and this is not unique to what we're talking here with astro to a certain degree because like it just it is the nature of like
[00:24:27]  multi-page apps forever you know right back to the days when you had a static page with a little jquery on it right and while that that's always had
[00:24:34]  this kind of like eventually as client apps got more complicated we kind of got this point where like oh that's sort of the like the two app maintaining problem it was harder to
[00:24:44]  because like it's such a you know like you had the right different code and you had to be very aware of like if you are going to client render or hydrate it
[00:24:52]  and what's really obviously cool about something like astro is you just put in the client component it still works on the server to like render and then it hydrates naturally
[00:25:01]  and you don't you keep the more single app feel yet have this server model and and the thing is like this is a beginning i think of like we're going to see
[00:25:13]  more and more and more of this react server components actually from a squint like step back of squint view is another version of this like it's like today's react in
[00:25:23]  islands with a new react that no one's really understood or seen yet outside i mean dot server dot astro we'll worry about the difference of that later but like like
[00:25:33]  you you see the parallels there um marco doesn't differentiate on file name but it again there's there is this kind of thing and same with quick and it's progressive loading
[00:25:44]  this place where maybe some version of viewing the app as if it's server rendered and this doesn't mean that you can't do client-side routing with it and that
[00:25:53] 's like a more that's a topic probably for another day it gets a little complicated but it means that it is a different perspective and perhaps this is a zone where we can
[00:26:02]  be a little bit agnostic i think it gets like i think the game changes you start asking yourself questions like if you live in a world where a lot of the stuff
[00:26:11]  is static and it's kind of on the outside what's the role of the stuff on the inside and it maybe it doesn't actually look like it does today that's
[00:26:20]  a starting point where there's like okay grab pre-act or spell and stick in that island or grab react server commodes grab react today but the thing it's like if
[00:26:29]  we believe this is the way forward and that we can solve the the problems and the you know the user experience we want with this approach it actually changes what we want out
[00:26:39]  of these islands so yeah i mean i sort of went tended way out there simple question but what i'm getting at is like um this is still an area very much in progress
[00:26:50]  and that we're very much learning about so i'm i'm i'm excited about it even if i've still built a lot of stuff that might look like you know it
[00:26:58] 's um you know tied to the router and the client because it needs to be for those kind of architectures we're talking about a different architecture this is a different thing
[00:27:08]  it is very different and i think while today we're kind of like we're borrowing from the past and we're kind of boring from sort of reporting from the recent past for
[00:27:19]  the single page apps and we're boring from the little further past when we talk about the old mpas and kind of merging together at some point this becomes its own new thing
[00:27:27]  and that's what i'm excited for and that's that's part of what tells me about astro because i see the path there and it excites me about quick
[00:27:32]  it excites me about marco i want to see what these things are and it starts here yeah i mean early astro like when we were starting it was like oh like
[00:27:41]  are people gonna like this like the idea of doing work on the server even a year ago it's kind of like i don't know if people are into that they really like
[00:27:49]  this universal app concept where you just don't think about it which is like kind of secretly code for like it's going to run a lot of stuff on the client instead
[00:27:55]  and i feel like even in the last year like react server components even though they aren't new like i think that's pushed a lot of people to be like oh like maybe
[00:28:02]  doing all this stuff on the client is bad and like we just find ourselves like perfectly in the spot of like oh good like right as we're hitting v1 like people are
[00:28:10]  seeing what we're seeing which is like yeah and like astro we should look at the astro syntax at some point because it's like it's just unabashedly
[00:28:17]  like this is server code like we're not trying to run on the client and therefore we can design a language that's like so much simpler you don't have to worry
[00:28:24]  about like your hooks and how they render in a function call like it's just like it's so designed for simplicity because there's no reactivity to worry about which is like
[00:28:32]  all you have to worry about in solid as you design it now svelte and react they're all i i'd be curious about if you agree with this but like every
[00:28:41]  the problem with tying a full app architecture to one framework is you're taking a front-end framework that was designed for front-end reactivity and to solve those problems
[00:28:51]  and now pulling into the back end and into a place where there is no reactivity and so you're throwing away like your head is constantly thinking about hooks and you're like
[00:28:59]  in a world that doesn't really need hooks because it's running one render on the server running once there's no real state to worry about other than like what your single page
[00:29:07]  state is um yeah i feel like we are the first i don't know like we at least are already seen the benefit of like we just designed astro for the server
[00:29:15]  and therefore got to skip like 10 of the hardest problems you probably had to solve which you know solid's a great language it solved them in really interesting ways but um that idea
[00:29:23]  of not having to worry about the front end when you think in server code i feel like is our superpower versus react server components you're just bringing that same complexity into the server
[00:29:31]  now the same way you were before but now even like more so in a weird way yeah i mean it was jarring for me when i first started working on the s
[00:29:38] sr for solid because i've searched like okay i'll just take js dom essentially and just put in there and it's like nope okay next plan and in the end if
[00:29:46]  people aren't familiar with solid's ssr it's kind of cool because reactivity it's not about the execution of reactivity but the language of reactivity carries enough
[00:29:56]  intent with it that you can kind of see in intention so today if you use solid um for ssr we yeah there there is not really any reactivity on the
[00:30:07]  server um we we serve a different runtime and we compile the code differently so we actually completely give you something completely different when it runs on the server um and um in a sense
[00:30:18]  marco does a similar thing and it's felt too um yeah you can see it in your ripple like your playground right there's like an option like look at what ss
[00:30:26] r mode output looks like it's like yeah it's more function calls right more more output yeah yeah like essentially like we instead of building elements we're building strings and it
[00:30:36]  kind of changes the stuff a little bit but it is it is kind of interesting because you're right the pattern might not fit and i mean well you can you kind of see
[00:30:45]  this i already see this a bit with marco and even react server components is their server components are rule there's there's there's no state like there's no hooks in
[00:30:54]  those components um so it's it's like it's it's kind of an interesting thing because right the authoring experience is different when you want to cater to that platform
[00:31:05]  so i i think this is an interesting place to uh you know for to see what like does that change the perspective of what that balance is i think it is interesting and this
[00:31:15]  is mostly just because you know i'm thinking my future future head is that i want to be able to keep all the benefits of single page apps into this model so i i
[00:31:28] 'm still not 100 sure what this the quote quote server part of it looks like in the end if i if i want to do that so i i'm still kind of
[00:31:37]  like holding out to kind of see what that means are we you know forever changed to some like super compiler or whatever like to see see what this means in terms of development but
[00:31:50]  i think for right now there's like all the innovation like a lot of a huge amount of innovation in general is happening on the mpa side so we're gonna let
[00:32:01]  that ride we're gonna see how those optimizations we have to catch up so much it's like spa world is like 10 years of like funding and development and mpas have
[00:32:10]  just been like i don't know like html and handlebars is that what you want like i feel like yeah there's so much room that we have to catch up
[00:32:15]  to get to that developer experience yeah and it was very i mean and yeah there wasn't an interest even like i i know this because of the work on marco team
[00:32:24]  has been trying to say this for like eight years so like check out we're doing stuff really cool and and people are probably like uh where's your client side router it's
[00:32:32]  like you don't need one where's your state management well it's it's not really the same thing okay well this framework clearly doesn't have client side routing your statement
[00:32:40]  like and and yeah i'm glad that that's what like when i first saw astro like i i perked right up and when it was because i was just like i
[00:32:51]  you know it's funny i i i i'd only recently joined the the marco team or whatever but i was still kind of like i was like it's happening i
[00:33:00]  mean we need to be careful yeah we need to be careful because i feel like we didn't invent partial hydration at all but like i feel like there was something about how we
[00:33:09]  presented it that just kind of clicked in a different way so we are like yeah we sit on the shoulders of marco and a bunch of other maybe not even that many other
[00:33:16]  projects but definitely marco it was it was time i think it was just one of those interesting things right where you know different different timing and stuff happens at the right time
[00:33:28]  and you kind of get there um but you know as you mentioned earlier people aren't necessary like this is going to be a shift and some not every app goes here right away
[00:33:38]  or it's you know in the right place for that and people some people are you know obviously skeptical perhaps you know of of like like is this a real thing or m
[00:33:49] pas a real thing like you you know it's partial hydration a real thing is this just some way for people to find work to do so that they can get attention like i
[00:34:03]  i don't know like oh yeah this whole project's an ego trip obviously that's the only reason i'm doing it of course i thought that was obvious um remind me to
[00:34:12]  show you at some point nate did a really cool so nate more on our team is awesome and he's been doing he's had this like spa mode for ast
[00:34:17] ro in his brain which i i've been trying to push him to not call it that because it feels like it's just like build a great react app on top of ast
[00:34:25] ro it's much more like what if phoenix live view but for astro and like kind of what if react server components but like what if we streamed ht
[00:34:32] ml updates to the client instead of running you know basically what if astro on the server became the client interactivity it's super cool it's super early but it's like
[00:34:41]  also i think kind of what you're getting at like the future mpa path is like still so far away we're still like scratching what that could look like yeah and
[00:34:50]  but but on the other hand it makes a kind of a lot of sense if you want to universalize if you want to make some if it is like i don't know
[00:34:58]  if it's possible i don't know like i don't know if we do all this work and then decide you don't know these things just belong in their own zone but
[00:35:04]  if if there is a potential for merging or bringing them together you you have to it has to start with mpas because that like mpas are the foundation of the web
[00:35:16]  like like you like you can always have an mpa and put a single page app on it like you can it's a multi single page app you know like like you like
[00:35:25]  if you always have that ability um because that is what single page apps are they're like a single page that you know that will third out of maybe multiple we just forget the
[00:35:35]  rest of them and then we do everything in that zone so like from like there are architectural differences single entry point multi-entry point like all those kind of things but like
[00:35:45]  generally speaking if if we are going to bridge that gap like mp the mpa piece and the like the way the web works clients server model is has to be a piece
[00:35:56]  of that model um because the truth of the matter is we have real restrictions and limitations with the browser and like it doesn't it doesn't matter like even to a degree
[00:36:07]  obviously we can lazy load things and whatnot but ultimately any architecture which is based on having everything in the browser needs to load everything in the browser and i'm not stating anything you
[00:36:21]  know too surprising here but if if it is built that way then it's like an inevitable conclusion it doesn't matter how much optimization you have yeah that was my favorite thing
[00:36:30]  about astro in the early days people being like well how do you how can you say it's faster than next js like how can you like next js is optimized what are
[00:36:38]  you talking it's like no no like zero is faster than one byte of whatever optimized like you just can't compete with zero with you know it's math it's zero equals
[00:36:48]  zero yeah and you're you're much more performance but maybe i've just reduced a pretty serious topic but like well it's just such a like logical like you just kill
[00:36:58]  it you can't i mean no it's it's the hot performance topic right i mean that was spelt's claim to fame rethinking reactivity the whole thing he did
[00:37:07]  there was he was just like he did the whole was a condo mary condo he was just like get rid of it and yeah i mean that's kind of i
[00:37:17]  mean it's not like that's maybe not as accurate there but it's kind of true you you we have the server you have to we can use it and that and
[00:37:25]  that's that's been like kind of the fun thing here and like learning with ssr as i mentioned because like solid has some very interesting challenges to solve in this because
[00:37:35]  without virtualization without diffing like stuff like hydration it's also with jsx something so like out of order so like unpredictable plug how the hell do you sort like without
[00:37:44]  a virtual dom or any kind of representation hydrate out of order credit anything and the trick for me and this is the trick that i keep on seeing here is you you have
[00:37:53]  to treat the whole system as a single system because the way the you know like a virtual dom knows stuff is because it has its tree and then it dips it solid didn't
[00:38:03]  have the tree and it does everything a single pass well i stopped and i realized no solid actually has a first pass before the passing browser it's a pass on the server
[00:38:10]  so you have the ability to leverage the fact that the server already rendered everything once to give you the knowledge later and this this kind of interplay only happens when you acknowledge that
[00:38:21]  the server is a thing that exists and i i think i think that that's all part of this learning um on this bus or single page app side you know this is a
[00:38:30]  slow path for us learning because we we've already have these established patterns and kind of like what we do even if we kind of like oh yeah we really maybe it's a
[00:38:38]  a little bit much but we like it so it's gonna it's we might get pull kicking and screaming so to speak but i i like there's just so much potential
[00:38:48]  here that we shouldn't really you know be ignoring it you know totally right so what are you drinking by the way that looks nice yeah it's a long island uh this is
[00:38:59]  one of my more go-to drinks here um i've got a few that i kind of swap up but yeah this this one is i've i've always got i
[00:39:06] 've always got i'm gonna i'm gonna i'm gonna plug this not because i'd like it it's very odd it's a tea like an iced tea like not a
[00:39:13]  mike's heart iced tea it's just literally tea with it's very weird i i don't know if i like it uh oh where'd i go yeah there you go got
[00:39:22]  the camera zoom kind of going i don't know if anyone's ever had this before i literally i saw it i was like i'm just gonna buy this once try it i
[00:39:27] 'm probably never gonna try this again i'm liking it more than i thought yeah just tea tea with alcohol yeah i'm just gonna see if there's anything anyone's in
[00:39:36]  the chat because i've been sort of ignoring i've been having such a great time talking about here oh my god ian with the call out it's an we're talking
[00:39:41]  about island architecture you're drinking out long island iced tea that's just that's that's fate yeah yeah no for sure yeah yeah i mean there's so many benefits when you
[00:39:53]  when you can start looking at how you can use the server to leverage stuff but yeah maybe maybe maybe it's time we switch gears a bit because uh i yeah i mean
[00:40:03]  i i think we've chatted enough for now and we're gonna keep on chatting but i want to build something this is what people can i call out one more one more
[00:40:11]  comment before we go yeah go for it someone said when is next actually gonna die it's never gonna die it is react react and next they're the same thing it's never
[00:40:19]  going away whoa whoa yeah this this is this is this is this is an um like i don't know if this commenter realized what they just kind of like i think
[00:40:27]  they were just being snarky but that is there's a lot of truth behind that comment it is never yeah exactly think about it like sebastian doesn't leave meta to
[00:40:37]  go work on next for next just to go like like i mentioned on stream probably like every week for the last month this is huge because sebastian is like i don't
[00:40:47]  know secretly or not so secretly like what kind of considered almost the the holder of the vision on the react core team like like continuing the legacy from jordan like it would pass
[00:41:00]  the torch to him he he's been he's been kind of like the the guy who puts the big ideas together and he's working on stuff for the react server components next
[00:41:08]  is gonna be on react server components react server components like for anyone who might want to be critical react or whatever and stuff they could have just sat on their laurels improved
[00:41:18]  their developer experience a little bit and been like look guys we're the most popular framework we're just going to keep on doing what we do well and just keep on putting out
[00:41:27]  the hits but they saw the change coming they saw the change coming before most people saw the change coming and they they they're gonna they're gonna be here like when this
[00:41:38]  switch happens i'm talking about in the new frameworks and you know you know astro matures through its 1.0 and and when you know uh you know you know maybe
[00:41:48]  maybe people finally decide that marco is really cool and quick kind of matures and when we start finding these new patterns we i'm not sure if every framework is going to
[00:41:59]  make this change and going to make it here but react is going to be one of the ones that's still here so uh like yeah i i'm going to kind of
[00:42:07]  point out reactor next because these guys were already like they they're doing stuff in their own way but it's very clear they know what's going on so yeah i mean maybe
[00:42:16]  a sarcastic comment but i i think it's important to to actually recognize that like every time that people have been following my stream know this i i've been i've
[00:42:25]  looked at marco i've looked at quick i've looked at react server components looking at astro there is a huge amount of common ground here there's different ways different opinions
[00:42:34]  what one does the other doesn't and you know you know there's always going to be that like they can't do this or we believe this is the best way you're
[00:42:40]  always going to find that but there's a huge agreement here um and that is actually around that mpa mentality so this is only growing and react is react is right right
[00:42:53]  there with with them even if it seems a little bit different this is like react server components aren't what most people think they are is what i'm saying and we're going
[00:43:03]  to see how that kind of unfolds over the next probably two-ish years yeah yeah it's going to be i feel like it's been so just like unchanging
[00:43:11]  for like 10 years and then all of a sudden like everything's in flux like i don't know why i'm sure there's something about why maybe it literally was like v
[00:43:18] ete and like es build maybe i don't know there's a lot happening that's very cool to see yeah yeah yeah definitely definitely um probably edge edge rendering like the end of
[00:43:26]  no yeah i'm not trying to i'm like trying to send you on tangents i promise i'm not yeah i know and you are right the the effect of service
[00:43:33]  and edge is actually a big part of this because i think that people have a certain threshold for complexity and i remember this because i i remember the.net days and i i
[00:43:45]  like it was like a bulky like like there there is it kind of got to a point where this isn't the first time we tried to do these fully isometric apps uh
[00:43:53]  like.net like web forms and stuff they they had this view like never touch javascript and you write your code like it's all server code and we'll take
[00:44:01]  care of everything and make it interactive in the client it's kind of like the reverse of what we're doing right now and it was a mess and i call it the dark
[00:44:08]  ages sometimes and but my point is at a certain point people are just like well i can just make a client-side app and it that that simplicity even if it was like
[00:44:16]  a d opt in a certain way was enough to get move things forward jamstack you know classic jamstack because you can't say jamstack now and actually
[00:44:25]  mean what like what it is the classic jamstack was a simplification and made things like really easy in this world of you know all these details around maybe server rendering and
[00:44:36]  how do you get your spa to work with and all this you're just like look just serve the stuff static fetch this here's a like here's the prescription fill it out
[00:44:43]  do do the thing and what's changed now is we have you know edge and serverless functions and it's kind of like oh your cdn isn't static anymore
[00:44:52]  and that's a huge game changer and it's just it's just a bunch of these little things kind of rolling at the same time javascript single page apps have been
[00:45:01]  steadily growing i don't have i wish that's the quote i should have had alex russell had this i think i showed it last week this like chart and it's
[00:45:08]  it's just like the steady line on the mean size of javascript it's just it's just it's just like it's like a perfect 45 degree ryan you
[00:45:15] 're you're a streamer you don't need to have links on you just say chat find me that and then like someone will be like aha i have it yeah no
[00:45:22]  that's that's a good point um get on it chat it's an official ryan message yeah yeah and definitely definitely definitely um yeah uh let's see here uh so i
[00:45:36] 'm i want to get into some code that's the only thing um um trying to decide if uh if if we can if there's anything else we want to kind of
[00:45:49]  chat on on that um before we get to a kid on it chat exactly with the with the rocket emoji that's the thing um i think we can press so i i've
[00:45:59]  used this in the past the and i see nate in the chat too like nate i'm sure has like nate would be a fun guest if you've ever
[00:46:05]  run on a third person that would be crazy i mean as long as you guys aren't worried about i mean i've done the three before it's sometimes fun um i mean
[00:46:12]  i could see if i can get him a link let's see what let's see what i got here because uh invite perfect so can you get it to him i'll send
[00:46:21]  it to you through private chat you can you can get it you can get it to you can get it to him that way i i don't like he could be like
[00:46:29]  you know in his robe drinking his own long island iced tea who knows but what i what i was gonna say was that i've used the um so we had monday so
[00:46:40]  we've been doing the launch week monday was a v1 beta announcement and like we announced our june 8th official date and talked about like the philosophy of the project
[00:46:49]  which could be fun but tuesday was the ssr announcement and there's some code snippets in there which are both like kind of double as a good intro to
[00:46:55]  astro syntax if you've never seen it and also like oh why does this click really well for astro ssr and that could be a good jumping off point to
[00:47:03]  get into some code yeah let's let's just start there i'm on astro.field so where do i go from here blog is under learn learn uh blog and then
[00:47:14]  scroll down a bit we've been doing obviously a lot of yeah it's been something every week this week it's oh my god it's been exhausting it's been so
[00:47:20]  fun but so exhausting um yeah that's that's the big one um is it was a link off this one or no it's just if you scroll down we talk about the
[00:47:29]  motivation so we're sort of rendering or sorry in this article yeah in that article um yeah there that i think it might be delayed one more up you might need to zoom
[00:47:41]  out honestly to film the screen like sensitive to the people who watch my stream on their phones i'm sorry to those people honestly that's the code snip i was going to say
[00:47:52]  is useful oh yeah we commented it to hell so um maybe it won't fit but yeah yeah and yeah we're definitely going to get straight into this yeah because check this
[00:48:01]  out import api from api essentially await api if it's not there do a redirect otherwise draw this html i mean you you just read it from top to
[00:48:11]  bottom right i didn't read the comments i just read the code but i'm sure that's no so i showed this to theo who does like wednesday dev and and ping
[00:48:19]  and all this other he's just like a terminally a thought leader even though he's building like a totally unrelated company theo's great um and i was like theo i
[00:48:28]  know you love trpc look how easy it is to use trpc he's like why would i use trpc i can literally make a database call in here
[00:48:34]  right this is only running in the server right it's like yeah you can literally just like why don't even import from api just import prisma or whatever it is and
[00:48:41]  like just call it get the data if the data is not there literally the that return statement is probably my favorite favorite because like we were horrified by this when we realized
[00:48:51]  it was actually a good pattern like you can just return and stop rendering you know if you've ever done that with hooks like you have to make sure you only return a certain
[00:48:59]  path like because all the hooks have to run it's like there's just none of that to worry about you can make a fetch call in here you can do whatever you want
[00:49:05]  in here return if you want to drop out and then at the end if it gets the end we're going to return a 200 we're going to render some html
[00:49:11]  and use whatever variables from the front matter that you want yeah and it's all because there's these three lines these three dashes right here yeah we call it the front
[00:49:19]  matter it's like you know stolen from markdown but it's our front matter oren says it's php exactly it's like remember how fun php used to be
[00:49:27]  like we would never use it now but like that was fun right you could just do whatever you wanted in php and it was easy that's what we're like kind of
[00:49:35]  like unironically that's what we're trying to recapture here yeah yeah no i mean yeah and we were talking about even rails earlier like like just like i know
[00:49:45]  but like this this ability to just like author this single like this this kind of experience and and not have to worry about like what the like the client side you know complexity that
[00:49:55]  kind of comes with it it's funny because like there is that whole conversation about like is it easier to build client-side app or server-side app and all this and
[00:50:03]  the truth of matter is like it's not actually a simple answer because like in some ways if you view your app as an app a fully client-side model without compromise
[00:50:12]  is actually kind of simple because you just read an app it's almost like writing mobile if you view a server-side app or site as like a web page where you can
[00:50:21]  just like go here i got a request do my stuff then that's also really really simple it's always in the middle that you have this like complexity um yeah i i have
[00:50:33]  an update from nate he is in bed on his phone i that's nate nate deserves a ton of credit for this release since it's been really cool this
[00:50:40]  blog post was written by matthew also has been working for like months on ssr so just to shout out a couple people on the team nate matthew
[00:50:46]  ben holmes from slinkity just joined uh tony sullivan um erica is yeah there's just a bunch of people worked on this week it's been
[00:50:54]  really fun yeah no for sure i love ben's videos i mean i always loved oh my god his whiteboard yeah the whiteboard he's been wearing the astronaut helmet in meetings
[00:51:03]  it's incredible he's got such a fun uh energy to those um look my discord still on let me call out so it comes so one was that one thing i'll call
[00:51:12]  out is that we started this as an ssg right so this was all about like running code to then generate html and the like idea of well like actually
[00:51:19]  you'll have access to a request and response and then you can just the same idea applies so we were like kind of blown away by how easily this maps to the idea of
[00:51:27]  rendering html in the server you just now have access to a request and a response yeah no it makes other thing that i'll call out is the next code snippet
[00:51:34]  which we don't need to spend a bunch of time on if you scroll down a little bit um i'll just throw this as an idea out there um we also have this
[00:51:41]  idea of a js function inside of your because you're we use file-based routing there's your pages directory it's not astro files that's that special syntax and
[00:51:48]  then we added the ability to have a dot js file which would essentially be a function that we'd call and you could totally control like you know what's the file extension what
[00:51:56] 's the content type like give us an image and we'll generate an image in your final build right right again like totally blown away how easily this mapped to ssr where
[00:52:04]  it's like all right this is an api hook this is give me a function it'll do something when a request comes in it'll return the response like the whole
[00:52:11]  transition ssr maps so easily with what we were building we were kind of blown away by it that makes sense just so i understand this one is this is this a feature
[00:52:19]  built in where it actually looks the js file and go do you export a post to get like is this like oh good yeah good question so if you're in ssr
[00:52:26]  mode uh pages slash api slash profile is the razz or slash api slash profile is the route it's going to hit if you as the user with a request hit
[00:52:34]  that route in your browser or anywhere um the server is going to respond by if it was a post looking at the post function it found it it was exported it'll call
[00:52:43]  it whatever's returned gets returned yeah so actually this it's funny because i'm fairly familiar with all the different meta frameworks except next for some reason i've never used next but
[00:52:52]  um essentially right next is react how have you it's like saying you've never used react yeah yeah yeah i i'm yeah i'm gonna do that um but yes actually
[00:53:02]  this this file format actually reminds me svelte kit actually has this yeah definitely inspired by that yeah um okay yeah so that's cool i'm going to i want to i
[00:53:13]  want to i'm just going to open one of my random windows that i have open right now um let's just do this and i want to kind of jump back here
[00:53:22]  going into my examples folder and i want to start a new astro uh project um was it like npm and knit i'm gonna i'm gonna pull this up for people
[00:53:32]  on the cell phone people like nate um who watched my stream on cell phone it always i don't know if i can do that um i don't know if you
[00:53:40]  can do that but i don't know if you can do that i don't know if you can do that or if you can do that i don't know if you can
[00:53:46]  do that i don't know i don't know if you can do that i don't know if you can do that i don't know if you can do that i don
[00:53:53] 't know if you can do that i don't know if you can do that i don't know if you can do that i don't know if you can do that i
[00:53:59]  don't know if you can do that i don't know if you can do that yeah i don't know if you can do that i don't know if you can do
[00:54:02]  that i don't know if you can do that what am i looking at i'm actually looking at solid start right now sorry um npm and knit it's um i
[00:54:10]  have so many examples sitting around here npm and net uh was it astro is there anything special i have to do here um i think that'll work and then what i
[00:54:20]  mean we know what we're doing here great everyone knows i'm gonna do this i've actually but we're we're building hacker news right um i've been waiting for
[00:54:30]  to have this the reason why this is exciting for me i'm just gonna take the is it generic or minimal i'd say yeah i'd say minimal is probably for you as
[00:54:40]  a bona fide javascript thought leader nerd i think that's your that's your bread and butter yeah okay so let's open up this because uh finally you also
[00:54:54]  got me in your back seat so or your your passenger seat so i got you i'll i'll make sure it's easy let's do this okay so example while you're
[00:55:01]  doing this i'll just talk to hey hey audience um there's a bunch of other ones there that uh ryan didn't click there's a docs template there's a portfolio
[00:55:09]  template there's a starter that's like a little bit more built in um there's a bunch of cool stuff and if you go to astro.new um you can see
[00:55:16]  all of those in a browser that also lets you open them in stackplit so you don't even need to run it locally okay beautiful okay so yeah sources pages index
[00:55:25]  astro our fav icon everything looks pretty straightforward and this is in ssg mode so the first thing i want to do right now is how do i make this ss
[00:55:35] r mode i want to i want to i want to what do you call it uh it's an adapter um you want an adapter yeah so we have this concept of adapters
[00:55:43]  also inspired by svelte kit which lets you take wherever you're trying to host it and basically condense that configuration into one line for you the user right so um
[00:55:51]  what's my easiest way because i think i like i know what they're called but is there like i i can just mpm install it but is there like a secret way
[00:55:58]  of doing it i thought there is i'm not sure so it's for integrations we have astro ad which is super cool i don't think it's set up for
[00:56:05]  adapters that's fine we'll add solid later yeah exactly use that for solid um npm install ask at astro js slash let's use node.js i bet that
[00:56:14] 's the easiest one to download or node.js i think node.js if it doesn't work it'll fail yes that's the quickest way to find out i think
[00:56:25]  it's yeah because no just yeah no chance yeah okay oh yes uh oh i mean yaroslav in the chat says it does work for adapters there you go but well
[00:56:38]  not found out there you go yeah astro ad um was built by or kind of in collaboration with someone in our community uh chris i don't know his last name
[00:56:47]  um really cool feature or no that was at juan oh shoot i don't know we had so much stuff going on i forgot well two amazing people in our community okay cool
[00:56:57]  so yeah and if i remember because i i'm i kind of have this psychic ability not because i've already kind of played with this before i just go in here and
[00:57:06]  i just go i import it something like import uh node from at astronode so smart and then i just go something like adapter no look at that type completion oh the best right
[00:57:20]  yeah this is very easy right so now in theory i i should i should have our node adapter which actually affects us in dev even though when like instantly we know that now
[00:57:31]  this is one of the things i hit when i was playing with it because at first i was just like playing with stuff and then i you know i was like i'm going
[00:57:36]  to add the adapter later and then he was complaining to me about get static props or something and i was like oh man what am i doing wrong add the adapter off off
[00:57:45]  front if you want to do ssr it's but yeah and then from here it's just the good old mpm run dev and we've got our beat background oh
[00:57:54]  beta 5 things have moved let me see if i can pull this over into here and do this and yeah okay so okay sweet i think we saw this already but i'm
[00:58:10]  pretty sure this is just because our page is literally like an h1 with a astro in it perfect it works ssr um um okay i mean we're gonna do
[00:58:21]  a bit more than this but um yeah this this is sort of yeah i mean so minimal just can't get more minimal than h1 tag yeah so what i want to do
[00:58:31]  here is i i do have a bit of a bootstrap stuff i want to bring across um i'm going to bring my api across because um i've already
[00:58:40]  you know i i have this api it's probably a terrible api admittedly but i use it in all the hacker news examples um and it's just it it gives
[00:58:52]  us three endpoints get user get story and get stories and it there there we go it's it is fetching for the third party api um but this just makes
[00:59:03]  it really easy for us to you know just use fetch and for some reason that's this api you have to like fake a user agent if you run a consumer i've
[00:59:11]  gone through all this we don't no one else doesn't worry about it but now hello it's me chrome i'm here for my hacker news yeah so it's it
[00:59:19] 's me your friend chrome yeah i mean honestly this is probably not even really user as long as i don't think it is definitely not a real chrome user agent i just put
[00:59:28]  something in there and and they like solve my problem and i'm just like i'm moving on so yeah this is this is the same in all my examples and what we want
[00:59:36]  to do here is we're gonna we want to fetch all the stories from the thing like just to so people know what we're building here i've probably built this like a
[00:59:45]  bunch of times but um you know the the hacker news example you click you go to the comments if this i don't know what's going on there but and then they
[00:59:56]  they're collapsible right and essentially basically the listing page that is mostly static and then there is another page which you need to hydrate in order to yeah you've thrown down
[01:00:09]  the gauntlet like this is really hard to do performantly yeah because it's it's it's it's it's it's it's hierarchical and and i
[01:00:17]  like this example because the first page yeah you can just turn off the javascript remove the script tag no deal you know and we can play that game but this page is
[01:00:25]  fun because you you can write some vanilla js and do the hydration but it's hard for a declarative spa to hydrate this in a reasonable way because it's hierarchical
[01:00:35]  because the things are nested in each other and so like you can't just go like don't hydrate and then just do this thing like it's it goes in
[01:00:42]  and out of it so this is why it's a very simple example but proves um some type of hydration but we'll come back to this example like the finished example later but
[01:00:52]  just to like put some stakes like to put some sticks on the story like i've seen you like this is like thor's hammer of like performance like i haven't seen anyone
[01:00:59]  be able to really top solving this even like in like twitter wars of like oh well like you're so fast can you do this and that it's like no no this
[01:01:07]  is like a really clear example that's a really clear use case like how do you do this while not like just eating up the main right i mean really hard to do the
[01:01:16]  reigning champion is marco on this one because it has partial hydration future marco is going to be really cool quick has some potential here um but it still has some data
[01:01:25]  serialization considerations in the current version they're going to they're working on that so right now marco is is a champion here my hypothesis is we might not be able
[01:01:34]  to get to marco kind of controls the whole world so that it has it can kind of do everything and it probably is still going to be our winner you know where we
[01:01:41] 're sitting but my hypothesis is that that astro plus solid is about as close as you're going to come to that out of any other like combination today because astro has
[01:01:52]  a very similar partial hydration to marco and solid has incredible performance in the little bit we're just bringing in solid to do this um that we'll be able to do
[01:02:02]  something pretty pretty incredible okay i'll put one more set of six i have not seen you do any of this i have no idea what's going to happen i am like you
[01:02:09] 're setting that up i don't know if you're setting that up to like knock me down at the end of this i i'm going into this blind i'm very excited
[01:02:16]  yeah so let's let's let's see how what we can do here so yeah as i said i just want to show the app to people i have done a bit
[01:02:23]  of this to be fair um we're still dealing like as i said solid what was the client-side framework it's still you know areas that can be improved astro is
[01:02:34]  1.0 beta we might find some like small performance tweaks here that we can apply and then that will make the difference this isn't the difference with marco is ebay
[01:02:41]  scale eight years like we're not going to catch that probably right now but i i think we're i think we're going to still blow almost everything else out of the
[01:02:51]  water so let's let's let's i can't tell if you please don't don't hurt me like this ryan please don't set me up to shut me down
[01:02:57]  no i hope we can get there i hope we can get there so let's let's continue here like this is going to be like the most savage video if you're just
[01:03:05]  like oh i can't even get it to work oh what a piece of crap but yeah we'll do this piece by piece so let's the first piece here is we
[01:03:14]  i think we should start with this data fetch call because of that and as i said i've built parts of this and oh yeah actually let's let's i've got a
[01:03:23]  few other things i can kind of copy over for my other projects give me a second here i'm gonna have a styles folder let's call it and there's just some
[01:03:32]  global styles i'm going to paste from here and nothing fancy um one thing i have done is i i don't know what astro's purple is or whatever you can tell
[01:03:44]  me but i want to give it this its own unique look so we can tell the difference see this is why you need nate nate's a big big designer on the
[01:03:51]  team like as both building astro and also designing it let me i'll get you the hex all right i can do that much we'll figure that out later i'm sure
[01:03:58]  he hasn't memorized but i will find you that hex but yeah uh let the first thing that i want to do is we're going to have a shared layout here and
[01:04:09]  so i'm going to make a what i think it's probably customary like a components folder here um sorry new folder components folder and um as i've made this demo so
[01:04:26]  many times i'm used to porting and i'm used to making people wait because we had um fred on here i kind of already um ported pieces of it
[01:04:36]  but we need a i'm just gonna call it new file layout um yeah also while you do i'll say like you know so just to give everyone some context of why i
[01:04:46] 'm a little more paranoid than i normally would be uh astro v1 beta release astro ssr an experimental release inside of a beta release so if we don
[01:04:55] 't hit a single bug here i'm gonna be amazed i think ryan might have known that was my fear and done a little bit of lead lead exploration machete through this
[01:05:03]  path for us so that we don't hit too many rough edges so if anyone hasn't seen it one of the coolest things about mpa and you see this right away with
[01:05:11]  both the quick and the marco versions is we get to just make our links anchor tags like there's no like link component router or anything like this component is literally like
[01:05:18]  this is the basis for our whole app this is our header it's like here's some styles um here's some meta oh it's this marco hacker news let's make
[01:05:26]  this astro hack yeah oh i'm doing a terrible job can i can i just pitch like one or two cool things going on here yeah this is really it's ht
[01:05:33] ml your your eyes do not deceive you like an html comment will work here so it's not jsx it's like truly html and then we try and
[01:05:40]  be a superset on top of that by giving like essentially jsx expressions you can inject into it so we're truly just like trying to be html if you
[01:05:48] 've come from something that feels more html less js like that's our plan here that's our big play yeah so uh what you see here and maybe i hate it
[01:05:58]  fine i'm doing i'll be nice and big here um the one interesting point here is that we have a slot and that's how we interject uh children so this is basically
[01:06:08]  we're going to use this layout on all the pages and then just interject the children so this means here essentially and it's pretty easy right we just import um layout um
[01:06:19]  from what is it like dot dot dot slash components slash layout look at this lovely completion um oh my god that's erica erica is awesome um she's been working
[01:06:32]  on our uh language tools for the last month and this is not what it used to look like it's very nice yeah so we're just we're just doing layout here and
[01:06:40]  then we'll keep our header astro for now just so that we can kind of see it but now if all went well um and not this um we can come back
[01:06:54]  to this yeah here we go um nice we have i have an update on the color nate has posted in chat now i looked for it our logo's a gradient i don
[01:07:04] 't see that color anywhere i think he made it up i think he got nervous and just picked a hex that's my theory but yeah i trust him well i will i
[01:07:13]  will i will go with that then nate i don't mean to throw you under the bus i just i tried wherever this is in the code base i can't see it
[01:07:22]  okay so what i want to do here then is i want to find all the instances of this and i want to replace it with hash af43 ff okay so this
[01:07:39]  is going to be our ass that's not our dates no nate's full of it that's not our color i refuse to believe that go back to the other i like
[01:07:47]  the other color better yeah much better go that way um sorry what it there we go yeah yeah we're going to do this one okay i'll find i'll find the
[01:07:59]  right there this is i'm the designer now possibility right you need a better contrast with the white text yeah exactly um all right so okay so yeah so now we got our header
[01:08:11]  um i think one thing that i wasn't sure about um and i had this maybe you can answer this i had this i won fun with uh remix too is there's
[01:08:24]  there's there's there's only there's normal routes and then there's like seg range segment routes but is there like star routes like i i've been trying to figure out
[01:08:33]  there's this basically the problem with hacker news and i hit in every example is that the root route can be slash or something so you kind of want it like to serve
[01:08:45]  like star essentially not just a segment that matches but also no segment and i wasn't sure if you could do it right now i mean the easiest way is i can just like
[01:08:55]  copy and paste the index page and it's kind of fine because it gets served separately it's not like we're paying any cost for that it was just it was just one
[01:09:01]  of those things that i wasn't sure if there was a solution yeah we again really inspired by i mean spelt kit which was inspired by next so the whole file-
[01:09:08] based routing idea of putting inside of square brackets dot dot dot whatever you want just the path to be saved awesome yeah i i like that's what i used in solid start as
[01:09:19]  well but remix was different and i didn't see the dot dot dot anywhere um so actually that's what we want to do here um we want this kind of teach to
[01:09:30]  actually be i'm gonna call it stories like this hopefully everything updates i know sometimes yeah so if i just go around now nice it's a single page app right every page is
[01:09:43]  the same so that's a joke i mean if we jumped so much around tonight like just the pitch of astro like if i could just five seconds i promise um if
[01:09:52]  you're trying to build a super dynamic like dashboard portal like figma don't use astro like our whole thing is that like our focus is content-based sites so marketing
[01:10:03]  sites uh your recipe blog um with ssr now e-commerce is definitely a focus like anything that's about getting content to the user as quickly as possible is like our
[01:10:13]  bread and butter everything else we're not super interested in that being said what you just like are starting to piece together is you can just build an spa in astro like
[01:10:21]  it's not our focus but like just put a react component on the page and serve it to every route and you now have a spa so yeah to set that context like that
[01:10:30] 's our focus but a lot of things are possible in this model which we're only starting to kind of see come to fruition yeah yeah i mean the the whole joke with what
[01:10:39]  i was doing there is actually it is actually serving a separate page it's like multi-page app every time but it's because it's the same page yeah exactly you
[01:10:46]  can do it theo is also saying that ping is is ping using theo is ping using astro i thought you guys were maybe not i don't know anyway so what i did
[01:10:55]  here and we'll get we'll come back here i just caught my component across because honestly the most painful part about porting these things the one fun part i had was like
[01:11:04]  okay there is every framework has like slightly different syntax and like in some ways i was like okay astro it's probably gonna be really close to solid because it's js
[01:11:14] x like syntax but it doesn't have the component control flow so it's actually like remix but then when i do remix i have to rename all the class names and stuff because
[01:11:21]  like solid uses html conventions and jsx like astro does but it has special control flow so i like and then i was like okay so it's gonna be like
[01:11:28]  marco because it's like html but then marco like is is has like the ability to not use curly braces and stuff so i actually i saved everyone a
[01:11:36]  ton of pain by porting this stuff ahead of time when it's like the pages like like like or components like this because it's just like writing this kind of logic isn
[01:11:45] 't even hard but like you just you you kind of have to do like a bit of a mental thing like astro supports fragments so like we're good you know like i
[01:11:54]  actually don't even know why this one's in a fragment that's that's hilarious and i'll even say you don't really usually need fragments it's only when you get
[01:12:01]  into this javascript expressiony type injection thing that you kind of you lean into more of a jsx type they're just things for how we translate to yeah usually
[01:12:09]  you don't need it when you go into js expressions you need to think a little bit more in jsx but ultimately very similar yeah so yeah it was all good and we
[01:12:18] 'll get we'll get to this okay so what i'm going to do here is let's go back to the page here so we've got let's let's let's
[01:12:24]  um load our data i think that's the first thing that we're going to do here and just show how easy that was right because um it was what was it was
[01:12:33]  like import get stories stories from uh dot dot slash what lib api i called it okay and then this is just a function so what we need to do here um i think
[01:12:53]  is like let's let's just confirm that we're not insane and that we can just literally just go await get stories and then we can pick a type which um well
[01:13:03]  type script let's see my my typing is terrible but i top and page one i mean even just the hint there is so cool right console.log stories right like let's
[01:13:16]  just let's just let's just oh there we go so really subtle point here like again none of this is happening on the client all in the server which means you're
[01:13:26]  in the terminal to see that console lock exactly yeah because nothing nothing sorry nothing's even getting close to sent over yeah so there we go so now we we we have our story
[01:13:37]  so i mean done right now we just have to show them and it is actually kind of like that um i mean we we want to we actually want to do a little
[01:13:46]  better than that and i again i'm just going to copy some stuff i already have here and it's probably we might actually because we have a star route we can probably simplify
[01:13:56]  this a little bit i didn't realize we had star routes because i grabbed the params i i don't know if this is i guess we'll find out if if
[01:14:05]  if this is if this is still the case here because i think what did i do here because this one is um this this should be um type and this should be page and
[01:14:19]  yeah see and then i got rid of my console log why did i get rid of my console log um i guess we're going to see if i want to confirm a
[01:14:31]  couple things because the the uh the uh what i call it the star thing is news like i don't know if it doesn't put it on params i want to know
[01:14:39]  what what params are yeah you can just yeah log all of astro.params see what's yeah let's let's see what that is and actually if i'm
[01:14:45]  doing that i don't want to do stories because i'm gonna i'm gonna lose it so actually you know why am i why am i why am i fading away yeah so
[01:14:53]  stories is undefined because i'm on slash but now when i go to new it's there perfect yeah so you see essentially as we navigate around if we're on
[01:15:04]  slash it's undefined but then when we go to show yeah we're gonna we're gonna get what we need so i'm still totally on the server yeah so um
[01:15:11]  while you're while you're looking at that just dylan asked what is one of the hardest things about or what are the hardest things about building building astro um i'd
[01:15:18]  say one thing about where we're at right now with this beta like we've totally focused on core like are these things possible so you can see what i'm sure you
[01:15:26] 're like familiar to you using url to like create a new url and then get the search pamps for that there's a lot of that kind of stuff in here
[01:15:34]  where it's like very low level and i think what we want to do over the next two months until our june 8th v1.0 release is like what should
[01:15:42]  getting the params off the url look like because this feels a little you know the page is just kind of a little rough here yeah so if you know how to
[01:15:50]  do it it's great but like like url creating a url even for me is a little tough yeah so we managed to like i confirmed it because they only show jobs
[01:15:59]  type job on the job page so we were definitely fetching the right page and like we just went to the jobs page we can see it but we can't navigate around yet
[01:16:07]  because we don't have the rest of it so let's let's continue on here so really cool like we just did data fetching like there you go uh there's
[01:16:17]  there's your api or whatnot we just got our we read some stuff we basically got the type from the top and then we haven't hit this yet there's query parameters
[01:16:27]  we can we can just you create grab the url object parse it using like search prams like built in kind of browser style apis um set our you know i
[01:16:37]  have a bunch of or so basically if it's undefined it's top or if it's undefined it's one then we feed into our weight function now we
[01:16:44]  have our data so that's that's kind of it for this and what i want to do now is actually build the view out and yeah i mean i i'm not going
[01:16:53]  to waste anyone's time with building the view out i'm just going to copy and paste you know from previous examples and stuff i've done before um this is going to
[01:17:03]  probably error because there's story component and i just wanted to but just before we go there okay so yeah this is pipe i think yeah it's type and yeah so yeah because
[01:17:15]  i made some differences because of of stuff so it's complaining to me right now that story is not defined and that's because um we need this story component here so i
[01:17:25] 'm going to import story yeah so a big thing about what we've tried to do here is like this should feel like you know if you're using svelte right someone
[01:17:34]  mentioned like it's like the script tag it's felt on top of the template if you've used react or solid or preact it's like here's your jsx and
[01:17:40]  here's everything that came before you return that um i can import your components at the top i can tell i copied this part of the code from marco originally because there is
[01:17:50]  an html comment in here and it's working beautifully so um this works in astro as well there you go right i'll call out nate did a ton
[01:18:00]  of work on our compiler like originally we forked this svelte compiler in the early days and like didn't have all this cool stuff like it's just been so cool
[01:18:08]  like having a really powerful compiler that we also control like for our use cases just awesome but you can see though like all of the the actual uh a lot of the the
[01:18:17]  stuff is all uh jsx like and when we get to here we just map um the stories and one of the funny things i love about this too right i think because it
[01:18:27]  renders once on the server like we don't care about stuff like where's your key you know not at all not at all it's the best right because the thing is
[01:18:36]  like it is really important if you use a client-side framework and they don't show you a key you have you they better be doing what i call uh referential
[01:18:46]  equality checking i.e they their framework must be based on mutation and they must do fine-grained updates so like there aren't many of those frameworks solid is one of
[01:18:56]  those frameworks but otherwise if the framework is felt or view they might not be yelling at you to to to use a key but you should be using a key just you know but
[01:19:06]  in this case here no no worry no key no nothing so we we just map it just go hey we have those stories that we fetched up here we're going to
[01:19:14]  map it we're going to basically import another component this component guess what just destructure out the props see astro props get the props this is the story that we passed render
[01:19:25]  some stuff i have a lot of logic here and conditionals because there is a lot of state in here this is probably a little bit fred mentioned you don't always need
[01:19:34]  fragments stuff but this is one of those examples that is actually more dynamic on the server but it's fine that this happens on the server because this this doesn't change like
[01:19:45]  the a story doesn't stop being itself you know you you can have all this conditional logic put it all on the server and have it not go with the client and render really
[01:19:54]  dynamic things because what you're going to see here is this one stories page is going to be able to render you know a dump a bunch of different states um so with
[01:20:03]  this yeah like let me let me call out two things real quick yeah i mean sorry i don't mean if you're about to show sorry i might have just interrupted like the
[01:20:12]  coolest thing um sorry you show your thing there's just two cool things on that file that i want to show off but this is really cool i thought it was time to
[01:20:18]  show people that we've now actually have like this is all that the the demo on next js never actually had the other pages like they just we did we just stopped here they
[01:20:33]  just stopped here and and i don't know if they had the next page and yeah we we've got full pagination now and that and like this is when we had
[01:20:42]  static sites i i never built the hacker news example because like trying to like i guess i could do a fetch and then figure out and then like in some ways ssr
[01:20:51]  can be a little simpler we have real dynamic data like this because i you don't have to worry about it you just like fetch it from this location read the url in
[01:20:59]  real time and like we this is as i said fully paginated we can navigate we can go to jobs jobs have a slightly different thing i don't know why the ui
[01:21:09]  does this i copied this example originally from view this is the view to hacker news example um but you know here you know we can handle different stuff different types of links um
[01:21:21]  domains like these ones have by and this is all just kind of built into the template okay that was what i wanted to show yeah no that's cool i my stuff's not
[01:21:31]  even that cool um i think it was at the top i don't remember oh yeah this is something if anyone's a typescript user um we don't really it's kind
[01:21:38]  of hard to show but you can also export interface props and type your props so that any consumer of this component will give you typescript errors so if you had a type
[01:21:47]  for story that was you know points is a string url is a string um you could export interface props and define that like you would any props and you then have type checking
[01:21:57]  in and the editor and all the good stuff yeah this is partially my fault um i some my other demos for this are actually all typescript and i was kind of like
[01:22:06]  i wasn't 100 sure on it and when i'm not 100 sure on something i avoid typescript just because like in those cases i i forget which demo i was doing i
[01:22:15]  think i was doing remix and we were just sitting there and we were just like why doesn't this type error go away and like everyone in the chat i had like a bunch
[01:22:21]  of people like making suggestions and and like we we never solved it and it wasn't remix's fault like i had the exact same example and like like and the same ap
[01:22:29] i that was being imported into everything we're just like this makes no sense and that was the end of that so i i i do i have interfaces for all this stuff i
[01:22:39]  just didn't bring it over with me i have api.ts as well um so i guess i'm not showcasing that it is still cool though that you know
[01:22:47]  with modern build setups even with js files and stuff you still get so much help um to just do this stuff but yeah it's it's there if you need it it's
[01:22:55]  like kind of like we support it if you want it if not you can write valid javascript we're never going to like complain about your javascript either so yeah
[01:23:02]  i feel like so much gets lost like i don't need typescript it's like cool then don't use it it's there if you want it what i'm going to
[01:23:07]  do really quickly here is like we jump straight into these dynamic routes like this one page is just powering like like that's like 90 of the demo um i want to
[01:23:17]  do a little bit more here though i'm going to add a user's route and i'm going to add or sorry a user specific route but always plural you know resources rest
[01:23:26]  that whole thing and stories and i'm going to fill them in users one is actually really really simple i don't think it's worth us spending any time on really because it
[01:23:38] 's basically a static thing and again i'm just going to make an astrophile you know this is what fred was talking about earlier this is a like it's
[01:23:45]  a little different than before uh when when we were i was working on the graphic for the stream uh the my guys from the solid community were like they put the solid logo on
[01:23:55]  and i'm like we're gonna do solid but it's not it doesn't it's not logo worthy on this demo that i'm doing tonight because this is this is like
[01:24:03]  the that site is 90 astro 10 solid solid just does like that little magic that you need um yeah nate this is such a thing for us writing like actually the
[01:24:13]  v1 beta release post nate like really called out like if you go back to our original post we were like terrified that dot astro was like not a good idea and
[01:24:20]  that people just wanted to use only solid only react yeah and like i think all of what we've learned is even if you love your framework for interactivity and for ui
[01:24:29]  like it's just you naturally want to convert more things into astro components as you go so that's been a huge that was not obvious when we first started this but
[01:24:37]  like yeah even as the creator of solid like i'll just use astro and i can convert it when i need to yeah i mean and that's the whole thing right i
[01:24:45]  mean for what for its purpose like because solving stuff like partial hydration is not a simple problem necessarily like it requires a bunch of bundling consideration i'd rather not work like i
[01:24:56]  i like optimizing rendering performance and all that stuff like i'm not gonna lie when i was playing with this a bit i could see a couple things and i was like man
[01:25:03]  am i gonna start opening prs on astro to improve uh sir or sir hydrate please please ryan oh at least issues at the very least issues right but you know
[01:25:13]  i was like i'm gonna leave this for now but like like just small little things i noted but like that's where i spend my time and where my focus i i don
[01:25:22] 't really want to worry right now about how to bundle this stuff and astro just like like the amount of solid we're gonna pull in here is going to be almost
[01:25:28]  nothing there's some cool stuff i learned while i'm doing this stuff like like here here's a cool one set html this is dangerously set it in your h
[01:25:37] tml um in astro and it's it's you know it's it's a nice little um what's term directive kind of built in there's lots of little cool
[01:25:47]  convenience things in this case for this page for users we're just doing the same thing again except this one's easier we just grab the user with this id this is like the
[01:25:54]  very common case that first stories page is like one of the more complicated things it has pagination it has like you know like like different types of stories your typical like give
[01:26:04]  me profile id page like usually boils down to this like do api call with id from route and then you know if user show it if you know like like that's it
[01:26:16] 's it's so simple we use our layout component again because we're all styled and when we come back here we'll be able to click on jake and yeah
[01:26:24]  there's not much to this silly tab but you know that's all we need it to be so yeah it's really cool you know and so yeah don't let's not
[01:26:35]  go there now is actually where i wanted the fun part because um we're going to finish the i mean this isn't the complete fun part we're going to finish the development
[01:26:45]  of this app and then we're going to like look at it and evaluate it but right now the the the context part the reason that i want to bring in solid is
[01:26:53]  this next page because i want to do that hydration and i could just have astro render but then i don't get those cool collapsing comments and there's a few ways we
[01:27:00]  can do it i've seen you guys pushing uh our kind of one i guess i don't know the connection but uh fuzzy bear i think or a fuzzy bear on that you
[01:27:10]  know has been talking and he shared uh was x element with me and that's one of the really kind of cool different approaches i'm going to use solid just because i
[01:27:19] 'm like used to my declarative kind of approaches but it is interesting to see different patterns when when your need for client-side stuff minimizes you can kind of scale the
[01:27:28]  solution for the amount of client stuff you can start really light with something as i said like x element which has has aspects of what like those like sprinkles frameworks like al
[01:27:37] pine.js right like like that kind of like like just you know just enough to do what you need or you can kind of scale this example probably is probably would still fall
[01:27:48]  into that x element sort of range of things um but i just you know obviously i'm the author solid so i'm going to solid but like you can kind of scale from
[01:27:56]  that all the way up here based on what your what your need is and i find that really interesting and i want to i'm interested to see what new ways people come
[01:28:04]  up with to kind of approach javascript one like you're already in a javascript environment there's such a boon in my opinion to having javascript on
[01:28:13]  the server um it's kind of what makes this possible and i know that's in my opinion why even marco's had challenges in the past because like in marco is
[01:28:23]  also we know the front matter but it's also very easy to do stuff like this but you know like the the it's the single page app crowd that's really into
[01:28:33]  the javascript the classic mpa crowd is like actually never give me any javascript like stay away javascript to stay away from me so i'm i'm
[01:28:43]  hoping that projects like astro can change people's minds but maybe maybe not but i i i guess we'll just have to see yeah i think that's where like the
[01:28:53]  streaming html stuff and like that spa demo there's some cool stuff around here but like our whole thing is like yep just bring a framework when you want it like when
[01:29:00]  you need interactivity go for it um and i think we're experimenting with what that could look like if you don't want a framework but for now solid it's a great
[01:29:07]  choice so how do we add solid here what what's what's our magic sauce all right so you've you've already exited the server well intuitioned um right now
[01:29:17]  we come with no frameworks installed by default so if you try to import a solid component anywhere or just say what is this i don't know right um this is where that ast
[01:29:25] ro new component or command that i mentioned that's juan worked on um which is awesome if you just type astro add actually i think without anything after it um you'll
[01:29:33]  get this cool little picker you can say astro add the thing you want to add but for now i'll just show like the basic like wizard i can see this
[01:29:41]  okay oh right you're gonna need to use the mpx um yarn before using yarn all right the funniest thing is this i think this is super cool i've never seen
[01:29:53]  a selector like this i've screwed it up the first time i see astro like after two months every time press spacebar i just like oh solid enter yeah i know
[01:30:02]  i've done the same thing i think we got a user issue that we tracked down for like two hours and realized like wait did you press enter or space yes space to
[01:30:10]  select enter to submit okay uh for yeah i mean we're just going to skip this for now but some cool stuff here turbo links that's one of those like uh that's
[01:30:20]  the the router that kind of like replaces in the client like full page party town that's the uh third party script offloader from builder um tailwind if you guys
[01:30:30]  know i don't know what sitemap is but i'm sure it's just as cool um it's just a site map right yeah creates a site map based on your
[01:30:37]  uh routes i don't think it works with ssr because who knows what your routes are oh isn't this convenient actually yeah scroll up the make it a little bigger if
[01:30:45]  you can like if you can make the window because it'll tell you kind of what it's about to do oh no it's even cooler here yeah it saw the code i
[01:30:52]  already oh oh actually i see what you're saying i don't even have to copy it it's literally if i say yes it's just going to do it it just
[01:31:00]  does it so you install the the integration for solid and you also install solid as a peer dependency that lets you control the version yourself manage it yourself something like react 17 to 18
[01:31:11]  now that's like in your hands yeah i noticed that obviously it's got the up arrow so it should be fine but i'm just i'm just gonna like for sanity here
[01:31:20]  make sure that we are on solid because i actually you're the the new renderer stuff that I did for solid also had a solid patch release because I realized that I
[01:31:32]  didn't support multi hydrogen the way I thought I did so I want to make sure that I have the latest version of solid I mean this only matters if in the case of
[01:31:42]  it being recursive like all the other cases is fine but then I was like this there's this crazy recursive thing going on in this comments example and I want to
[01:31:51]  make sure that I'm on 14 yes that's a fun this is just more for your audience and your npm ls and then the thing you're looking for we'll
[01:31:58]  give you a nice little CLI output npm ls solid dash js I do that all the time I'm constantly just like unsure what I'm building on top of beautiful
[01:32:06]  see there you go see I I don't know any of the CLI stuff I'm like I'm like sitting there with the GUI kind of going through I'm like
[01:32:13]  people at work always point out they're like Ryan you could just like literally do this one thing in CLI and like I never remember things in the CLI yeah watching
[01:32:20]  someone else code is like the best way to like learn how bad you are at some things like the first time I saw someone use VAM I was like oh I've been
[01:32:27]  like up up up down down down this person was just zooming oh yeah look see Dylan's already on this is who I work with this one I'm talking about yeah yeah yeah
[01:32:38]  Dylan's great so yeah okay so now that we know that we're probably in a good spot um we and our magically updated the thing here has solid we're gonna we
[01:32:50] 're gonna kind of lay out this this page so um again it starts like the other one because it's just ID got astro right and for anyone who doesn't know so
[01:33:03]  with the dot dot dot we're just gonna match literally everything that comes after it's super lazy without the dot dot dot it's like it's like star and star star
[01:33:12]  and globbing like it's only gonna match up to the next slash if there's a slash so I'm gonna drop this page in because I'm not gonna type it for
[01:33:18]  everyone it's very similar to what we've seen um previously um is like if there's a story show it um I don't I like I'm not too worried about
[01:33:29]  like loading states and stuff here which is kind of different to some of the other examples because like with streaming you can like have a server doing loading and stuff in our case everything
[01:33:38]  is going to be loaded on the server by the time we render it so we don't worry about that we just like is it there um and like I'm just doing
[01:33:47]  straight up JSX tricks here and then we're gonna just show our story header with the points and the user and all the stuff from our API and then we're gonna map
[01:33:54]  to a bunch of the comments and this in itself seems perfectly fine but see the thing that why this is interesting why we haven't shown this yet is everything we've done
[01:34:06]  up to this point has been a hundred percent on the server like there is no JavaScript and we're just doing everything that that was this has all been no JavaScript to for
[01:34:15]  this next thing we actually need JavaScript which means we there's there's there's there's something that I want to do here and this is this is the challenge and I'm
[01:34:25]  going to show it in the solid hacker news right now we're going to take a little sidebar so that you can and this is not the solid this is literally everybody except
[01:34:35]  Marco in the in these examples when you get to a page with a bunch of comments let's see 35 comments um what's going on here dynamically imported oh is this oh
[01:34:45]  this happens to me sometimes where like the cache version of the different JS assets are different so when I first load it it's like pointing to the wrong service worker thing I I
[01:34:56]  I I don't like service workers I think I'm in the minority there I saw some tweet about like anything like with a service worker will always build anything without it it's
[01:35:05]  like I have definitely seen more bugs with service workers than I have like so I mean I guess it's one of those technologies where it's like if it's working you
[01:35:11]  don't see it and if it's not it's the worst thing in the world yeah so what what I want to show here is that essentially these are nested so generally
[01:35:20]  speaking if you're if you're hydrating top down like you you you need to be able to re-render these components with this text and what that means is when
[01:35:34]  you load your page there is going to be obviously um the content of the page so we're going to see all these comments like these are a bunch of hydration IDs from solid
[01:35:44]  but when you're going to see oh my god those IDs are wild I feel like I'm reading binary or some sort of yeah I I know the thing is they actually g
[01:35:50] zip find so like I actually did some hashes and the hashes were like worse it's kind of cool yeah I I don't hate it but but yeah I mean
[01:35:58]  these are all the separately hydratable things but but my point is you I mean maybe it's easier to see from the network tab when I go to Doc and and
[01:36:06]  do this and look at the the preview I know the previous response and format it what you're going to see is like all the stories are are here um where is it yeah
[01:36:22]  like okay there's two things going on you're going to see all the HTML stories that are rendered and then oh right this is the initial response I can't do this
[01:36:32]  here because streaming haha it's funny it's down here somewhere I'll get there the stream content is at the bottom but see why I'm I'm going through blobs and
[01:36:39]  blobs of json here like this is an insane amount of json because in order to hydrate it I need all the data on the client so like we're still
[01:36:46]  going through json here and I don't care what you're like react to use anything you're going to be doing that and then oh it's the exact same thing
[01:36:54]  again now it's HTML go go go go go go we we have double the data because what's the side like just bytes of this response like what are we looking at yeah
[01:37:05]  let me see here uh HTML um sorry I think if you just close the uh little x next time again they'll tell me 66 kilobytes for this page so that's
[01:37:14]  oh yeah json object and then again serializes html yeah this is like I picked solid I could have picked remix I could have picked uh quick I could have
[01:37:24]  picked stelt I actually have all these examples it's all the same thing here but there's something that Marco does and something that Astro can do with pressure hydration in that
[01:37:35]  if something is rendered on the server and fetched on the server if we have those two pieces of information that we know it can't be refetched on the server and
[01:37:43]  the thing that drives the fetching is on the server then we know that the data can never change and the only data that we need to send down is the data that
[01:37:52]  we pass to any top level client components and what's interesting is how do you do this when it's recursive because they're all in each other so we don't want
[01:38:02]  to pass like like that must be hard because you have clearly these are client components with server components inside them because we want to be able to ideally we want to be able
[01:38:12]  to render this on the server yet wrap it in the client component and then have render this on the server and wrap in the client component and it wraps all the way down this
[01:38:22]  is actually kind of tricky so there's there is a secret to this and that's I did I do it with Marco and as it turns out Astro can do it
[01:38:32]  as well which is really really cool is that I'm going to make our comment about Astro and and show everyone what we're doing here because it's actually comment.ast
[01:38:42] ro is actually pretty simple you can kind of see what's going on here for a second we'll bring toggle in but it's kind of recursive each list item the
[01:38:51]  comment if you remember in our in our page we actually the ul and we said you know map over the comments each comment is a list item and show some information about self it
[01:39:00]  sets its inner html but then if there's a common dot lane it has a client component and the server component essentially Astro component passes its itself as a child
[01:39:16]  like as like a like I don't know the term is like like props like like as a child to to the uh to this client side component um Nate is like freaking out
[01:39:28]  in the chat if you're not watching it's just like yes I've been waiting for a good use case for recursive partial hydration yeah yeah right because essentially like Astro
[01:39:37] .self is this cool little thing where the comment can can do itself right but essentially we're actually because of the way this works the client component is just receiving the final
[01:39:50]  output from this map so technically I mean this is if you use web components this makes sense to you because it's the same rules of the shadow dom and the light dom like
[01:39:59]  like the client like regardless of what what happens in the shadow dom the outer light dom renders so it even renders the stuff that you pass into other web components so there
[01:40:10] 's no like conditional stuff going on and what's happening here is the server is rendering this and he goes okay this is a client component whatever and then the server continues rendering
[01:40:18]  this and he goes okay into self gets another one of these keeps on rendering oh it's a client component it's fine I'm just gonna keep on rendering so it just keeps
[01:40:25]  on rendering the whole page except knowing that some chunks of html are ultimately going to end up being passed to some client component but doesn't care so it renders all
[01:40:34]  the comments on the server and it fetches the comments on the server like I showed before so it kind of knows that the client never needs to re-render those comments
[01:40:44]  and the client never needs that data so the client component is actually really really really really simple um I'm gonna go and show you the last piece of this puzzle by making
[01:40:59]  toggle.jsx um because this is just gonna be a solid component here or actually huh did I oh it's funny it's fine it's like it's actually toggle
[01:41:11] .tsx in my example I like I snuck typescript in but there's no you can do it you can do it that's like the whole runtime I mean I
[01:41:18]  I don't know if you're in Brian your editor will freak out but in astro that's fine yeah so essentially the as I showed you there's this like crazy passing
[01:41:29]  through because as long as toggle doesn't have to render something from the server it's just going to get props about children we've all seen it and those props about children
[01:41:40]  well I'm just going to insert them here in my solid element and not really worry about it like this is this is this is this counter this is our counter example on the
[01:41:48]  playground like it it's it doesn't get any harder than this it's like create a signal toggle it when you click on this anchor um I know maybe semantically wrong whatever
[01:41:59]  this is that I copied view blame them and and essentially we're just we have we have a ul item it's in our client component and we're just toggling um
[01:42:08]  like we're just we're just showing the server rendered content it doesn't really matter so essentially yeah this this is no more complicated than like the the starter playground we just added
[01:42:20]  a little bit of state some you know showing the collapsed indicator and then choosing to use the style tag here to display block or display none right we're just we're just
[01:42:32]  controlling the visibility and yeah I mean that's all I need here and then I saw an astro.self that's the children you're passing yeah exactly because it needs to
[01:42:42]  pass more comments to itself it's recursive right and astro.self what is that again I I'm like half like prompting but also like I want to kind of
[01:42:50]  remember myself it's it's it's it's the comment component again it's itself right nested is yeah literally itself import yourself um single file components have this concern you
[01:43:01]  need a special api for it like because there's no definition like with with react or solid the component is here so if you like function toggle and I want the nest to
[01:43:13]  toggle I can just go I can just go toggle like I have access to it but in in single file component stuff like astro or svelte um or view um
[01:43:21]  you you don't you don't have access to it so the way that astro handles this and I again I don't know why the types are complaining but I don't
[01:43:29]  care this works um is that you have a special helper and that we've got self it's actually saying actually it's this component so we're just doing inception comments and comments
[01:43:39]  and comments and comments and interjecting a client-side wrapper for toggling and what this does which is you know really cool assuming I've saved every little piece of this
[01:43:50]  puzzle uh I see something this is where my heart starts beating I'm really excited for this to work is I'll start saying enough saying a prayer yeah what's cool about this
[01:44:01]  is um toggle.jsx hasn't been saved that could be an issue uh yes what did I change here yeah okay it was just like a mistype so it
[01:44:14] 's fine cool if this all works we go here we yeah well we see the page that part was obvious but it should hydrate and it should collapse oh nice so this works
[01:44:26]  and what's the coolest part about this five components total right pretty much yeah this entire site yeah yeah yeah yeah yeah that's why this is an easy one for me to
[01:44:36]  build you know good like like benchmarks are are like tests are always terrible that way you have to make them easy to build so you can do them in anything but then like they
[01:44:44] 're they're like too simple of an example but it makes it kind of easy for us here at least and what's cool about this is we're back on our network tab
[01:44:52]  and yeah we're in dev we're going to look at this not in dev in a moment but we're we're in dev right now and when we're in dev
[01:45:00]  um and we look at the document well I mean did I did I did I hide the lead there I mean it is it's got some size but it is is this the
[01:45:10]  same page I'm probably like on a page that's like has way more comments or something blackberry no one let's let's grab the same story two six thing here
[01:45:18]  so 200 and 311 comments yeah I mean I I don't know about there's different oh do you know what the difference on page size is going to be here what's
[01:45:28]  that you guys don't minify your html or gzip it in dev yeah yeah oh yeah so part of it's in dev maybe but um yeah so we'll
[01:45:37]  look at production here so don't worry about the size too much but yeah it's it's not compressed white spaces but okay so there's some stuff here but what I
[01:45:46]  want to show here is you're you're not going to where is it I gotta see like I see some solid hydration scripts that's fine but what you're not gonna see
[01:45:57]  in this output is is any sort of you know what let's pick a smaller page so we can see what we're talking about something with like like is there yeah maybe new
[01:46:06]  we let's pick something that has like like two comments one comment might be too few one give me something it's Friday night on hacker news yeah three comments what I'm
[01:46:20]  what I'm getting at is um okay so we see some hydration script for solid has almost nothing in it but I'm trying to see if there's anything in astro like
[01:46:29]  I think there's like a there's like just very little here I think I think we're gonna have to you know what we're gonna we're gonna forcibly
[01:46:38]  do something bad to show what I'm talking about but what I'm gonna do is if we didn't have the solid component like this and we didn't do this nested
[01:46:46]  and we went like hey toggle let's see what I'm gonna do so let's pass um comments to it like like now we're gonna go comment dot comments what's
[01:46:56]  gonna happen is in theory when this page reloads yeah do you see it uh toggle no where is it yeah see see yeah where that toggle was I'm expecting us to see
[01:47:13]  we're gonna see it needs to serialize a bunch of data and I I think that's it that that string you're looking at right now is yeah exactly is this
[01:47:26]  thing and if if I now that I know where it is which is it's it's kind of up here in the setup script near the top if I can find something like
[01:47:35]  in the middle slightly larger uh 24 might be enough to see it um and maybe if I prettier it we should start seeing yeah like there should be there's a bunch of
[01:47:51]  data serialization happening um and yeah you know like it it's it's the same deal it's the remix solid stuff I showed you before but because we don't need to
[01:48:03]  do this and render this stuff and when we reload now I mean again it's hard to see necessarily in depth but you're gonna see yeah I can't scroll sideways like
[01:48:13]  it's all gone see like that's it yeah so we avoided a whole bunch of data serialization and this this is this this is this is this is a decent size savings
[01:48:22]  it's a decent hydration savings because you know you're not re-running all this code like you just shrunk it right out and obviously this is something more on the
[01:48:31]  performance side that I'm obviously like stoked on yeah this is what we're doing because what we're doing is we are rendering it ssr every component is its own little
[01:48:38]  island so we're going to ssr it static html and then if there's anything for it to do you can hydrate again but like if you didn't
[01:48:45]  pass in any data right like the data is in the html it's been already baked in yeah exactly so like yeah 24 comments who cares but it like you know
[01:48:55]  we we find something significantly big enough it's going to make a difference so what I'm going to do now is this is this is it like we made the hacker news demo
[01:49:03]  can I can I throw one thing out there have you tried any of the other client handlers um because client load is going to like hydrate it on load I guess because
[01:49:12]  it's all the same component doesn't really matter yeah exactly kind of visible I mean when you scroll to it it'll hydrate versus you know it's below the fold
[01:49:18]  exactly I want a load for this and maybe that has its own implications but I was like I was like we're just we're deferring the inevitable there's only one component
[01:49:26]  on this whole page well yeah I wouldn't say that could like idle would actually be I think a good use case here because like well you don't really need to click it
[01:49:33]  immediately most users aren't they're going to like read a little bit and then let's do this let's do idle I'd be interesting you know what we can do too
[01:49:39]  we can we can bet we can see if there's a difference here like why not like we can benchmark in a minute but yeah I mean let's let's go to
[01:49:45]  62. for any watchers the difference is load is like literally as soon as possible hydrate this idle is wait for the page to be done and then hydrate it it
[01:49:53] 's all still working obviously so I'm gonna let's go with idle for now and what I'm gonna do now is I don't know why I'm making my own I
[01:50:00] 'm the one scared of this breaking why am I throwing new changes in build okay build work oh right I want to run this so I I mean I'd love to deploy
[01:50:10]  this to netlify or something but right now we can do something simpler I don't I'm hoping this works uh but nate had or not nate so matt had
[01:50:19]  this demo and what he did in the demo was he created a really really simple uh server folder like that just was a node server and being completely uncreative as I am
[01:50:30]  I literally just stole his his node server where where did I paste it did I paste it in source um this is my luck yeah here it is server I'm just gonna
[01:50:41]  pull it out of here move and I I like I changed it a little bit but essentially all he did was he went like uh he went like uh he went like this just
[01:50:52]  like run let's let's go npm run server so now that we built it we just do this and this this is just node you know node server there's nothing fancy
[01:51:02]  here it's an mgs file we just handle a request you know whatever okay so I'm gonna I'm gonna go npm run server now and if this works we
[01:51:12]  should have it on localhost and just to kind of yeah for again for people watching so we set the adapters node.js all that means is that we're creating in
[01:51:20]  our build the thing that we've created because we're in ssr mode we need some sort of server so we've created a node server a server that will run in
[01:51:27]  node really easily yeah you could do netlify and it'll run in netlify you could do uh you know for cell deno so node is just the one
[01:51:33]  that that's why like that's what's being imported here you can see it is line four my question maybe we should try one problem that i hit with this and it looks
[01:51:43]  like i thought it was fixed before i started this uh session but it looks like i'm hitting and i thought it would have to be able to save it for a while
[01:51:51]  and i'm hitting it right now i don't know i'm hitting it right now is that the the default setup doesn't handle static rendering so what ends up happening is it
[01:51:55]  like certain assets get absorbed by the the renderer essentially and i was starting to refactor some stuff and i ran out of time to do it because the fallback handler
[01:52:06]  actually handles static properly but uh like by default astro catches it and then it doesn't like it ends up not rendering css and everything's uh is a astro rendered
[01:52:19]  page so like astro css and i get a page and and matt was like well you you're the one who provides the server mjs just just it it it
[01:52:29]  works fine 90 of the time the reason it doesn't work fine for us right now is because our source folder which did i yeah so our source folder our pages starts with like
[01:52:41]  a star route so right yeah you're gonna always want to serve the static assets before you hit a route right is it possible to flip the order of these in your so
[01:52:49]  yeah and and that's that's that's what i'm looking at here because i started on this process and essentially oh yeah ssr handler and serve static i think just
[01:52:58]  need to be flipped right well this one's a nested one so the question is can i like my sir static here is very very very simplistic because i took what he did
[01:53:07]  there so what i want to do is something like this and then kind of want to call next inside of oh i was going to say inside of your catch basically if you don
[01:53:16] 't find the file just go to the next middleware instead of uh yeah yeah it's just it's it's because it's also the fallback so we're doing
[01:53:24]  like a little bit of of uh you know like yeah like we're we're playing a bit of a game here it's it's it's it's fine i need i
[01:53:36]  guess this is just like yeah so line 17 and 18 instead of doing anything just call next and move on yeah look this isn't gonna now i'm gonna lose stuff that
[01:53:48]  doesn't match but i don't really care well you can handle that after oh i guess yeah because then it's gonna always hit the uh yeah you're basically never having a
[01:53:58]  404 in this world yeah it's fine let's see if that's enough to do it yeah salt beautiful okay so we're gonna we're gonna bring this over onto
[01:54:08]  another screen here and let me give me give me a second here bring it over and now this version is the real version so to speak because the other version was in dev mode
[01:54:24]  and we're done with this and this version what the difference is is when i refresh the main page here you aren't gonna see any javascript there is no j
[01:54:33] avascript because there doesn't need to be this is a server rendered page yeah right four requests i think i see on the bottom left yeah um and yeah if i go to
[01:54:43]  all you're just gonna see like some css fav icon like this is your page and then when you go to the page that does hydrate yeah there's some script
[01:54:54]  but um yeah what's going on here oh yeah let's go back to js here yeah so what did we do here yeah so it's like 10 kilobytes of j
[01:55:04] avascript um here um maybe the newer sol it's a little bit bigger than the last version but i was gonna say one one thing here that we have not up so i
[01:55:13]  would say like we have these like core concepts we haven't really done like okay how can we fiddle like this whole two month period is basically like let's actually audit
[01:55:20]  this the idea of sending three less than a kilobyte files is like we could probably just bundle those up together yeah our bundler is pretty aggressive in unbundling
[01:55:28]  which if you're doing something with like h3 is not a huge deal but i i bet you're on an http one server right now yeah yeah so yeah this this is
[01:55:36]  this is this is pretty nice and pretty pretty easy so yeah we we essentially um yeah like this is small like if you want to understand oh man i we almost need to
[01:55:47]  deploy to netlify for me to really do this real have you have you tried the node or the netlify adapter i think that's where those are like literally days
[01:55:56]  old so we announced this and like all the platforms have been helping us build them i would yeah we could try it but there's definitely bugs there yeah okay okay so let's
[01:56:04]  let's say here so then we like at least we got this going and yeah just just for comparison's sake because you know let me let me just copy this url
[01:56:14]  here for a second localhost yeah i'm gonna copy this and then what i'm gonna do is i'm gonna go to an incognito window um oh that just happens
[01:56:25]  to have all the other hacker news demos um well look at that what a coincidence um someone in the chat said they just deployed to netlify like just minutes ago so
[01:56:38]  oh do it then i'm being see this is me being too nervous okay go for it what's the worst that could happen it's a friday night deploy some code deploy
[01:56:47]  to production i can't remember if i like it's been a while so already i know as of like a couple hours ago i checked like our ssr example where
[01:56:58]  like yeah i'm being a nerd don't listen to me okay so we need to yeah okay so what do we need to do we need to do a couple things here we
[01:57:07]  need to go into yeah we need to go npm install at astro jf slash netlify yep yeah chat is calling for my blood if things go wrong it's
[01:57:19]  more entertaining exactly exactly the right way to think about right and then we need to go into a thing and we need to change this to netlify lify and net
[01:57:32] lify i'm depending on you chat too like if like because like yeah i mean i'll be able to build this with netlify no see okay so what am i
[01:57:46]  missing ensure a site is specified in your astro config if you provide a base in your astro does anyone know what this means oh i do i do um i believe
[01:57:54]  it needs actually the readme would probably be a better place to resolve this i think it just needs to know where it's deploying to to be properly configured in your like net
[01:58:04] lify config okay so i'm assuming you mean this for you yeah right there um although there now i see oh yes site where your netlify app will be deployed
[01:58:13]  feel free to use a local url to test local bundles so i think you just need to know the site url of netlify before deployment can i make the
[01:58:21]  reason why can i make something can i make something up i don't know if it'll work but you can definitely try i mean i can also go to netlify and
[01:58:29]  and and see what's up but yeah let me while you do that i try to make something up for first i think it'll just be like maybe poorly configured in some
[01:58:36]  way but let me actually look at the code while you set that up oh yeah sorry i should have copied more example when i looked at it because let me look here it's
[01:58:46]  it's inside no it's outside so it's netlify comma site okay outside so it's like right here yep that's correct and then i want to like i i
[01:59:02]  i want do i want to steal this from you know i i maybe i'll make the name more specific i i'm trying to remember what i use for was it h
[01:59:19] n no hacker oh you know what it is we oh this is kind of interesting we send it i wonder why we do this wait two seconds i'm going to try and i
[01:59:28] 'm going to go into my netlify on the screen that's off screen so you guys can't all see me entering my secret codes and stuff so it's two
[01:59:37]  second login for so while you do that i'll talk so for some reason in the handler we actually create the request object from the path that we get from the event like new
[01:59:48]  url parentheses the path of the request and then comma that site argument you gave us so the request object is what you're basically configuring here with your site i'm surprised
[01:59:58]  by that because it feels like something that we'd be getting for free from the event so i'm just gonna look at the netlify docs um weird that the event
[02:00:05]  wouldn't send the full url that doesn't sound right yeah yeah i i guess here's the thing i'm i'm overthinking this too much because what i should be
[02:00:17]  able to do here is i can't remember what the netlify commands are but like these are that apply deploy is this like a thing and then i guess what's
[02:00:28]  my package json say example minimal let's look before we do that let's let's name it something else astro the astro solid h accurate god there's too many
[02:00:40]  things astro solid hn and maybe i'm pretty sure that'll be unique so we won't conflict with anyone so we'll make it also astro solid hn
[02:00:57]  okay no one's gonna have a problem that create and configure a new site yes team yes me site name optional the awesome ryan solid site um let's try instead astro
[02:01:12]  solid hn dot all right do i have to do that yeah do i have to do the dot netlify myself i don't know i've never actually done that
[02:01:27]  this way i'm still trying to find out what the net like for some reason it's really hard to find the netlify please okay so what's our public folder
[02:01:35]  for this it's dist um dist i think check dist yep maybe just client uh oh no wait sorry have you rebuilt since doing that yes okay then the dot netlify i
[02:01:49]  believe is where we've built to oh shoot now that's something else client server i would say client i think it's client i would publish the directory it's probably just
[02:02:00]  it's probably just this is the format it needs yeah i mean i'm sure where is it uh chat saying just i believe that's correct you have no idea how hard it
[02:02:14]  is to find just documentation on what the event object has okay so now we're going to see the draft website oh right give it a second probably first deployed yeah probably sometimes
[02:02:29]  this takes a minute if i remember correctly losing my my mind there's just no documentation on the event object absolutely not i'm on the second page of google okay email oh
[02:02:47]  who knows all right white side draft no but this is netlify telling me that it's taking a moment this is not this is not um it's not anything on ast
[02:03:00] ro that you know of yeah i mean astro hn manual deploy the site has not been deployed yet okay deploy your site what maybe we just may this means we just
[02:03:24]  need to go to prod right like just push to prod right that's i don't know about that um nate's saying that he thinks it's dot um you're
[02:03:31]  publishing your folder and dist is like where it netlify is going to look um you can also look at the logs i bet they're going to complain in the logs about
[02:03:40]  something if we're just straight up not finding it okay let's let's pull this across to them the two things i see chat saying they're saying say run npm run
[02:03:47]  build again maybe we configured it um incorrectly and then it's saying i think it's dot which i actually agree i think that netlify is looking for your root folder
[02:03:55]  npm run build yeah just maybe maybe one more time it can't hurt oh something already seemed to have changed so that's yeah but i think it might have just deleted it
[02:04:05]  oh no there's an actual netlify folder yes oh that's what's missing that's what you're trying to deploy okay netlify folder okay okay which means i
[02:04:15]  kind of gotta there's some kind of i might have to do like it's not going to ask me this setup thing again so i might have to do something like this
[02:04:24]  where i pretend like i've never deployed this before and netlify will be like oh yeah link this directory to uh creating configure you want to do a new thing yeah there
[02:04:35]  you go but i actually oh i see what you're saying yeah makes sense um partial site name yaroslav thank you for the uh the help there i swear i built
[02:04:48]  it but whatever okay now is it is a daughter is it netlify it's going to be it's going to be now i think it's not yep yep yar
[02:05:07] oslav says nullify i fully believe anything that they say at this point yeah so this was probably sent yeah it was shipping that as like a static folder but like just full
[02:05:20]  of oh you know a node built server right and can now let's go here and i'm just going to close this one down and this one yeah this is it look
[02:05:36]  at i couldn't even tell it loaded so fast yeah no and yeah i mean that's the truth of mpas these days right um you know what i'm ambitious i think
[02:05:45]  it worked perfectly i've already decided that i don't know if everyone hasn't caught on you can see when i get nervous i start like shifting my seat more oh man
[02:05:55]  all right it's all good okay so and it's i always i always like this because um that's what i got nice it's not different when you like gzip
[02:06:11]  it and do all that stuff when we go to this comments page yeah here we go how about 4.9 kilobytes boom how about that yeah how about that look look
[02:06:25]  look at our our main chunk this is this and let's let's before we get cocky yeah solids on that page oh god that would be so embarrassing that would be that
[02:06:34]  would be a gift for the rest of my life right so like let's let's do let's do some size comparisons here just as like a a kind of preliminary thing
[02:06:45]  here like this is a comment page it's a stupidly large comment page but just just to kind of give you an idea that doesn't affect the js size felt is 19
[02:06:56] .7 kilobytes okay um solid is 14.1 watch out before you do this breakfast on the moon and chat is saying it's actually 20 kilobytes and
[02:07:10]  something's cached oh disabled cash what's cash oh yeah i think he's looking at um the bottom the 20 kilobytes total yeah yeah five of that is uh is
[02:07:22]  javascript yeah yeah exactly yeah yeah i'm just looking at pure javascript here so yeah because like the main page different solutions have zero so yeah 4.9
[02:07:34]  19.7 for svelte solids 14 solid starts 14.1 uh remix is going to be about 70 if my memory serves 60.3 and then marco five
[02:07:48]  not quite as small on the compilation size it's actually probably going to be about 15. uh yeah 18 okay sorry 18. so marco's thing is that its current runtime
[02:08:00]  isn't as tree shakable it's like a little bit outdated so the like the next version marco is going to be smaller it is doing the partial hydration and
[02:08:07]  we'll kind of see what that means in a minute but yeah this is this is sort of um our scenario and what i'm going to do here actually is i'm going
[02:08:15]  to load one i missed the sorry i missed the first what was solid and svelte uh felt was 19.7 kilobytes and solid was 14.1 kilob
[02:08:24] ytes that's awesome that's so cool so solid and astro just peanut butter and jelly yeah so yeah let's let's load the the performance it's making fun of
[02:08:36]  me in chat can you make him stop nate's making fun of me yeah i'm very excited so yeah oh yeah or just put it up in front of everyone cool um
[02:08:48]  i'm excited because i actually haven't seen a this running on netlify and b i don't think i've seen an example of this big of ssr
[02:08:54]  i've been doing a ton of work on all the like non-ssr stuff matthew's been pounding the pavement on this so this is just really cool for me
[02:09:01]  to see i'm having a great time obviously yeah and this this this is just this there's some slight differences here actually the other examples are on cloudflare i often use
[02:09:09]  cloudflare for these examples from an edge worker but so there's slight differences i actually have netlify versions of the solid ones and there's like slight like a 0
[02:09:18] .2 difference on size like they do actually do things a little bit different but like ballpark like this is pretty this is pretty real reasonable this is the smallest hacker news
[02:09:27]  comments page i've ever seen um i've seen smaller than the other ones client-side rendering solid is very very small you know i originally made this demo without any suspense like
[02:09:38]  the solid example has suspense transitions it actually has like the whole nine yards um it's doing like it's doing concurrent rendering and stuff in that 14 kilobytes um but the
[02:09:48]  the original client-side version that was really simple was um 9.9 kilobytes uh for the client-side because server-side requires some other code and some
[02:10:01]  other stuff this is basically yeah five kilobytes right it's this one sometimes it's like sometimes it loads it's 4.9 sometimes it's five it's like it
[02:10:09] 's it's a rounding error essentially but like yeah 4.9 also to call out so i think i mean the waterfall is so small but i believe the move to client idle
[02:10:17]  pushed most of this javascript everything except for 700 bytes to post load post like pages ready document content loaded i think that's a red bar it's really hard to see
[02:10:28]  but it's just like where that work is happening that's why we're here right like let's let's let's let's look at some of these timelines here just to
[02:10:36]  kind of get an idea let's let's just this is this is a mean example there's 1400 comments on this page so i like using the mean example because oh my god
[02:10:44]  this is this is as mean as i can get for for us i'm gonna i'm gonna look here because what's this word first paint yeah okay we let's let
[02:10:51] 's give it one more go because sometimes it's gonna you know maybe warm up i don't know it's it's it's it's this is a very mean example okay
[02:10:58]  here we go that's better uh 1200 first paint yeah because like look what it's freaking doing and then and then yeah i mean there's there's some stuff going on
[02:11:08]  here um because it has to do the rendering and stuff like this is not nice on anyone about 1500 when it's done so like this kind of level is something i don't
[02:11:16]  think people are optimized for so to be fair this might not be the most flattering timeline i think for astro but i my my suspicions let's let's start
[02:11:26]  easy um let's let's do remix um where are we network um let's just kind of look at what the the timeline is like here okay um okay again we give it
[02:11:39]  a warm-up run oh that's still pretty good though yeah i mean everybody is not terrible here yeah so yeah so i i think there is there there i i think
[02:11:53]  i think this comment stuff might not be as as favorable as as i as i want it to be here yeah because it actually looks like remix and astro or hand in hand
[02:12:02]  i wasn't i wasn't sure if that was actually going to be the case okay yeah that's interesting but but yeah um yeah i mean it this is not as i said
[02:12:11]  i i this part we we didn't get to deploy it so this i i've never seen this i'm doing this it's blind too um let's give svel
[02:12:20] te one more chance i love the idea of just like a first pass like all we throw that one out we always get the second one yeah yeah so yeah oh but a little
[02:12:32]  bit longer to hydrate um this this this one yeah solid um let's try this uh streaming uh yeah that's gonna get us i should use the async version yeah
[02:12:49]  let's go that way oh right you're doing the full like okay you get the shell rendered then the page yeah but look at the difference first paint 100 milliseconds that's yeah
[02:13:00]  that's incredible but yeah i mean yeah it finished hydrating around the same time so uh this is on a desktop of the fast connection so we're actually not seeing the
[02:13:11]  impact of the hydration as much in this one i think i mean can we go back to the astro one real quick because now i want to see it like having seen all
[02:13:18]  these we're getting our first paint at yeah so i wonder what's going on there no the first paint is fine it's just why is this hydration taking so long and i
[02:13:27]  i think our secret probably oh my god look at that is is a bunch of separate evaluate scripts i wonder if you guys bundle your scripts together for hydration like this is an
[02:13:40]  insane there's there's like hundreds of top level components yeah well if you go back to the elements you'll see exactly what's going on there um yeah yeah like everything every
[02:13:48]  one of those toggles i believe comes with a script tag it's in the head isn't it yeah oh my god this is this is this is the mean this is me
[02:13:58]  being this is like the meaning yeah no no no i know this is just exciting there's a lot of stuff to clean up here right can you open up one of those
[02:14:03]  just to show yeah like 151 more not even shown yeah so in each one of those toggles we're actually doing a setup there's even like a no there's literally
[02:14:11]  empty javascript data and then a setup call yeah so i mean and a dynamic import within that with a promise dot all right yeah there's some cleanup to do here yeah
[02:14:20]  let's let's yeah so i mean this this is this is probably going to be our our our gold standard here um let me sorry let's try this one more time
[02:14:32]  yeah i'm so excited i can't wait to clean this up yeah okay yeah so marco is a little bit crazy because 200 milliseconds first paint largest contentful paint is
[02:14:44]  at 600 milliseconds because because some some yeah i yeah okay marco is still somewhere in a crazy zone it actually does everything in less than a second but that's the dream because
[02:14:57]  it's sending on the html and then like even hydration is like a pretty like snap your fingers kind of thing right it's like kind of best of both worlds script
[02:15:04]  all of those entry points this is like your multi-entry points except it's all in one file yeah there is like a bunch of ids because it needs to register
[02:15:11]  them but essentially it's compressed all those scripts you have into the into just this so this is where we want to get this is like this is where we want to go yes
[02:15:19]  and i don't think there's anything stopping us i mean those scripts are like generated yeah there is nothing uh there is nothing stopping you know exactly as i said uh you're
[02:15:28]  already skipping all the data hydration like all right like in the serialization so and this is on desktop so this is this is like the serializations taking the full cost the
[02:15:37]  brunt of the cost but not the um hydration cost okay i i have to i have to know just yeah i mean we'll just take it as it is we're in
[02:15:49]  beta so we're just gonna we're just we're just gonna do we're just gonna oh i gotta do this not for an incognito window um yeah i mean this
[02:16:03]  is a mean mean mean test but let's i said i don't i i don't know well now i'm curious how mobile is going to perform with yeah this is
[02:16:10]  why this is why i wanted to do this because if this does better than 50 percent like it's it's that's what everybody else is except for marco is is
[02:16:18]  at 50 percent on a page like this yeah on this exact page exactly nice that's awesome there there you go this so yeah the mobile like didn't yeah i mean this
[02:16:42]  is oh but why isn't it 100 ryan no never take anything less than 100. no but this this is the comments page with the hydration this is the crazy one that
[02:16:50] 's huge like i i mean i don't like showing this one but i oh okay i i i i what remix take the hit i'll do the others soon i i
[02:17:02]  i just i wanted i wanted to to people in chat were asking for more hot takes so i feel like this is the time it's it's late in the stream all the
[02:17:10]  thought leaders have gone to bed this is late night hot takes that 94 is incredible almost that's awesome but this page and that's with like a ton of cleanup still needed so
[02:17:19]  that's really how that makes me happy here we go remix 47. okay it's so funny when something like yeah that's just that's that's wow this is where
[02:17:30]  remix gets hit largest contentful paint hydration yeah and that time yeah that time lapse too it doesn't have the shell that in right so let's let's do on slow network
[02:17:44]  you're not actually going to see the streaming as prevalent on some of the stuff and honestly page insights i don't know if it uses lighthouse which means it hides some of
[02:17:53]  the server costs like we found something out a few weeks ago but let's let's just keep on going um this page is page feed your like best in class way to do
[02:18:02]  this i use web.dev slash measure and i'm never sure that's better it just this is faster like for the for web dev i got to wait for it like it
[02:18:10]  takes a while yeah which means it is better and i think ultimately that's where we we we have to go here but i'm just gonna just for just curious we're
[02:18:21]  gonna we're gonna go here like this is not yeah see i'm confident now that i've seen that 94 i'm so confident that you like you you have nothing to worry
[02:18:35]  about fred i've never seen 94 on this on on this and i think you're right i think the idol was the trick um like 46. so just yeah you
[02:18:49]  know it's it's hard hydration blocking time this is this is hard stuff and as i said this is this is this is the cost of this is a a stupid page
[02:19:00]  um let's let's let's like let's not kid ourselves like why would you look 1400 comments like i'm gonna put my own framework to to to you know i'm
[02:19:09]  ashamed a little bit here but i i i know that we're solid sits on this and i am pretty sure that it is it should be i mean i'm hoping i don
[02:19:22] 't like look way worse than like remixers felt but i i'm pretty sure we're like right in the same zone again 47 yeah okay that was 50s yeah it
[02:19:31] 's it it's it's the same thing even look streaming it it got us oh interesting it got us the loading placeholder like a few frames earlier um so so why is
[02:19:45]  that why is that still slow to get you the loading placeholder just for the slow network on mobile it's still like it's it it it doesn't come as like
[02:19:53]  on a fast network streaming feels like like jamstack except the fetching starts sooner it's just like best of in worse in slower networks it does start approaching approaching like wait
[02:20:03]  block to render so you you you don't take any penalty for it but it it isn't as pronounced on the faster networks it actually feels like the the shell's instant and
[02:20:15]  then you actually feel the loading state right right yeah i saw that in your tab earlier okay yeah so and then the last one um and yeah i i think i think see
[02:20:26]  marco doesn't have the lazy loading and i think that idle is the thing that is going is oh wow that's that is gonna blow my mind that's gonna i
[02:20:37] 'm not even ready for that because i think that i i'm pretty sure marco's score here is 87 not 94. i'm i'm i'm pretty sure yeah
[02:20:48]  it's 87 ish um oh i don't want to see yeah i mean i i think yeah for this one i feel like you can see the hydration and the blocking time
[02:20:59]  and everything is down um and yeah but yeah so there you go that's wild i haven't even seen that yet that's wild let's let's i'm i guess
[02:21:08]  that's all it's all html it's all css and then the javascript that does have to load half it like it's a it's a comment
[02:21:15]  so i i think the the case you can make is does a toggle need to happen on load or idle i like i promise i said i don't know because that seems to
[02:21:24]  make sense to me i wasn't trying to game any system quick sometimes times out because it's server rendering can't handle the page it's like one it has good client
[02:21:33]  side stuff but it's server rendering isn't there yet um it's not i need a microphone to drop where can this is where ben would have a prop for everything there we
[02:21:45]  go quick is 51. this is wild this is real like this is blowing my mind yeah so yeah this this i mean this is this is this is a stupid test because of
[02:21:57]  the data serialization cost but but you've seen with the hydration and stuff i think i think idle is probably making that that the the the this the slight difference i'm
[02:22:07]  gonna i'm gonna give marco like one more chance to get higher than six i was gonna say oren's making a great call can someone test hacker news itself because i
[02:22:16]  feel like they to their credit there's not a lot of javascript on that page i think i think the biggest bottleneck here is we're not using them i'm
[02:22:24]  hoping hacker news is faster because because of because of their um what does it call it because of they have uh what do you call it uh yeah let's let's find
[02:22:33]  the was it y combinator or news go out why combinator.com their css and stuff isn't the same style and they're using their own thing so let's
[02:22:43]  give that a shot oh not the home page though you want the same story oh you're right right right right damn it what am i doing this will be like super fast um
[02:22:51]  yeah sorry uh what's their url format for this let's go to one of these item id okay um yeah this is yeah this is yeah yeah obviously yeah that's
[02:23:04]  i hope so um 50 no that's good okay what is it built on i feel like this was one of those like paul graham just like okay dunking on
[02:23:14]  people i gave marco another chance uh he got to 76 um better than 67 so yeah uh yeah so essentially yeah i mean and you can see the characteristics here the blocking is
[02:23:28]  pretty good but i think i think let's go back to astro's original run here and see here yeah i i i think that idol is is the is the is
[02:23:38]  the secret here well because it did it yeah so what did it do it did a contentful paint in two seconds and then was interactive in 0.9 right yeah what was
[02:23:47]  it even doing i guess at that 0.9 seconds because there's like one script on the page i guess i guess those setup scripts were like attaching on document ready yeah yeah
[02:23:56]  see if you look at here marco's hydration is pretty good it's actually 0.7 nice but but uh i'm like so maybe i we got to put this
[02:24:06]  on the same hardware like is it possible that actually no do you know what it is put to the api i'm pretty sure is being served from aws and these are
[02:24:18]  coming from edge workers and oh so that's the difference for the point so if you shift if you shift this all 0.7 down i think yeah so this that makes
[02:24:33]  it that makes this a different yeah i wouldn't be surprised it puts actual marco and astro almost in the exact same category if you shift this points you shift this seven
[02:24:42]  down because it'll be two seconds if only we had a cloudflare workers adapter i mean i could actually move the other direction see i just read it this week and
[02:24:52]  then i was like i ran out of time nice nice we had luke from the cloudflare team was looking into it and then i think also ran out of time yeah
[02:25:00]  so yeah so i mean i guess this isn't a completely fair comparison on that side but my my my our our point here is that if anything for this stupid example astro
[02:25:13]  at worst is in the same class as as marco for for like like you know what i mean like yeah like in this example okay so they're similar yeah their hydration
[02:25:26]  is snappy it's probably just like custom javascript yeah yeah i don't think they probably like like i mean they don't have the common compression but their equivalent would
[02:25:36]  be these opero yeah right so oh there's a there's a little compressor on the right there all the way to the right of the oh yeah yeah oh yeah so
[02:25:46]  yeah yeah yeah so yeah yeah okay so in any case okay do you know what though we're gonna we're gonna find out how much that idol makes a difference right let's
[02:25:57]  let's let's let's do it while while we're here i know it's getting late we're we're gonna call it pretty soon but you know we've had
[02:26:04]  a pretty successful night but just this is this is speaking to the also to a bit to the uh where is it here the um um the power of being able to control these
[02:26:18]  things from from astro and make these on a component by component basis yeah exactly right so you got something critical throw a client load on it you got something like super heavy and
[02:26:27]  it's way down the page client visible will mean it just won't even hydrate until the user gets to it um so like an image carousel is like the
[02:26:34]  example we always use yeah and i'll revert it back after this thing um to the idle if that's the if this is the case that makes sense yeah i saw someone
[02:26:46]  asking in the comments if you're going to post this somewhere and definitely plus one for me yeah always yeah yeah all right um yeah so we we're we're there so
[02:26:57]  um let me get here and rerun astro here but yeah i just say it's a little bit unfortunate because i think we're probably like i told you i saw mar
[02:27:16] co in the 80s high 80s i think i think we're like i think we're like a plus or like a plus minus 10 gap on the lighthouse score because
[02:27:24]  of the difference of the location of the api thing like i think all the other it might be uh huh okay let's let's run this one more time just make sure
[02:27:36]  it's not blip it 62. so the the idle is actually what makes the difference here um because we're just saying like for this test we're saying don't even
[02:27:46]  hydrate at all essentially that's i mean i believe that that is the proper thing based on the use case i also believe that that's probably not a very fair test
[02:27:55]  then so yeah it's the power of partial hydration like we don't need to hydrate it why would you hydrate it yeah so yeah i think i think that's where
[02:28:03]  we're sitting here i think when we do hydrate marco's hydration is slightly more efficient but we're we we but like it's in the same kind of range
[02:28:13]  but generally speaking you're seeing the like even the 66 is much better than 40 47 you know what i mean so if you if you take lazy out of the equation you're
[02:28:29]  you can already see the benefits of partial hydration sorry jacob um you know even when we're talking about loading all the javascript you can already kind of see
[02:28:38]  the difference there and there's a few other factors that like look i'd like to get everything on the same hardware and running the same stuff you know but and we also again
[02:28:48]  so the next two months for us are all like tightening this up so like i i would call this a beta number for us yeah exactly to be fair remix is only recently v
[02:28:56] 1 i would assume that's pretty dialed in it's probably in the same boat as us we we can't this is not a this is a difficult challenge to solve
[02:29:06]  you we can't single page apps can't partially hydrate like it doesn't make sense it's not how they work i think there's techniques to improve hydration i'm looking
[02:29:16]  into it quick has some of those techniques because to to be fair so that's marco um like like there there is quicks getting hit here not because of its hydration
[02:29:31]  time look 0.6 actually um it's getting hit here because it's so slow to respond because its server rendering is slower than the other solutions interesting and because um it
[02:29:44]  it still has to do all the data serialization oh interesting yeah so that's that's the fastest that's even faster than marco or by a bit by a point one
[02:29:52]  exactly yeah right it's in that bucket it's in the bucket it's very fast and you think about it makes sense because quick actually does no hydration because you have to click
[02:30:01]  on it to load the hydration like it's 100 progressive yeah so it's like like yes so basically quick's hydration would be the slowest or fastest in this example but
[02:30:13]  i i mean we we've done this on well this makes me feel better about my idol thing if quick's able to do it so can we like the best way to win
[02:30:20]  is not to play just defer the work well i mean there there are trade-offs to this do you want do you want to see something yeah sure i i mean this is
[02:30:30]  mean and i think quick would bundle it in a smarter way the way that say you're doing it with lazy and stuff but if if i if i'm if if if
[02:30:37]  if i want to be mean here what i do is i go fast 3g and then i click a button and then we wait right that was all like essentially it could have
[02:30:50]  been client-side work that then became network with quick right i what do you think about that because i think about that with client visible a lot like it's so cool
[02:30:58]  to say like hey if you never get to it why load it it's also cruel that like well we actually had all this time where we were idle where we could have loaded
[02:31:06]  it yeah and now you're on a poorer network connection yeah and my gut here is yeah i mean client visible is probably useful because there's those things that are off page and
[02:31:16]  use it selectively i almost always i'm going to reach for client title or client hold like it just like click is like almost never when i want it unless it's
[02:31:25]  like one of those like here's a repo we'll show you an image of it and then when you click on it we'll actually load the code that's acceptable but like
[02:31:32]  that's a very rare case for the most part um i want i'm like visible is okay because we know it's off screen idols probably the best yeah i think so too
[02:31:42]  because visible also has a like there's a you're doing an observation that was observable observable handler what's it called uh mutation no it's a mutation observer i
[02:31:52]  think i should know oh no no intersection observer yes intersection observer and for every one of those toggles it's probably gonna get pretty expensive right um yeah so i just i just
[02:32:02]  wanted to kind of like throw that in the mix because like you and a real site quick would bundle this and load it like pre-load it like load it like the way
[02:32:12]  you're doing an astro um this is just the dumb version without telling the optimizer what to do i just there's a whole dimension to loading and there's a
[02:32:19]  quite and this is a more fundamental question right with quick they're saying like we don't want the end user to worry about reduce analytics do some safe defaults and we'll
[02:32:27]  we'll kind of get there you know and and then with astro you have um a very explicit um i'm in the wrong spot no i'm in the right spot a
[02:32:36]  very explicit api for it um i'm not gonna tell the the us and marco are big fans of this because in our opinion just for some food we thought we
[02:32:48]  think partial hydration should be automatic like the like if we control the whole framework there's no need for dot astro versus dot jsx we can just automatically do this without the
[02:32:58]  end user doing anything like essentially we could just do the split and just look at the code and we don't even have to do it at a component level we can literally like
[02:33:04]  go like this part of the code needs to ship this part this part i'm gonna be like the whole thing disappears and if there's gonna be a framework that's gonna
[02:33:11]  get a smaller comments page than what we did tonight marco six is gonna be that um like we'll see if we can beat that 5k i think i think i don
[02:33:19] 't want to put too much words in the mouth michael estimates 2k um i think so i was gonna say like if i know like you at all i feel like this
[02:33:27]  is now like you're i've if anything given you just inspiration like not gonna stop until we get that under 5k right but on the other hand we actually really like
[02:33:39]  this so for us we don't want to conflate the islands with the lazy loading mechanism but this explicit thing handles so many cases nicely because if you kind of have a rough
[02:33:52]  view of your pages like idle lazy you just kind of litter it in there and there's there's a difference it like it makes sense here because these are the natural boundaries
[02:34:01]  but there is conceptually potential for a difference between partial hydration boundaries and um lazy loading boundaries you can you could actually have larger um lazy loading boundaries and then like you know like
[02:34:17]  still partially hydrate on under those lazy loading boundaries obviously doesn't make sense with like the way astro structured but it just it was just we we really really like this
[02:34:28]  um it makes things so easy and i think it's enough that maybe it doesn't need to be automatic but i said uh i'm i'm sure it could have like a
[02:34:38]  a little brawl bring mitch go in oh my god yeah i would love to get their take on it honestly i think for us it's like that's the idea right
[02:34:45]  there's the buy button on the screen and the like image carousel off of it and like even though your framework can handle hydrating both like there's context that
[02:34:53]  you as a developer are like imbuing this with which is that this is essential versus this is not i'm sure quick yeah like that's kind of the automatic doesn't
[02:35:02]  mean that you can't also add context so i'm kind of painting a false dichotomy there yeah i will say that one one thing that like i lost this battle originally
[02:35:10]  but i think it's where we're going because as we learn more of coming back to one thing we said earlier like as you build an astro site you just like
[02:35:18]  naturally want to move more and more things into astro and you only reach for the framework when you need interactivity right now we default to static like no client and i think
[02:35:27]  i would prefer i no i definitely would prefer client idol as the default or if not that an explicit like you must do any client and we have like client none um because i
[02:35:37]  think that's what like when i build an astro site now the only reason i'm using a framework is because i need this to hydrate some way so why am
[02:35:43]  i defaulting to this no interactivity like my default now is that i'm using it because i need interactivity um that's where i want us to go i don't
[02:35:51]  know if we'll be there on v1 time like it's a little late to start making huge changes like that when we had the discussion it was early days we were still
[02:35:58]  scared like is astro actually good enough for this but from what i've seen like even here like you're using solid when you need interactivity so why would we default to
[02:36:06]  not being client idle yeah yeah exactly yeah no it's it's it's cool and this is really cool what i like about this whole thing um obviously from you know where
[02:36:16]  where i'm sitting on on the solid side is like this is a really viable way like now what i get to work on and consider myself with is is like obviously there's
[02:36:27]  going to be single page apps and um go pick up solid starters it's great for that but if if this is what you want solid is a completely viable option like as
[02:36:37]  as we're seeing here because like we we just need to like where where is it uh sorry this one the 66 there there is some some cost going on here uh we don
[02:36:50] 't know how much that a lot of that's probably on my side do you know what i mean like i i don't know if i could really quick i feel like
[02:36:57]  because we're painting very rose like the 92 of 94 is awesome um what we have to deal with though is when you move it to client load is you're hydrating each
[02:37:06]  of those as individual islands so a thousand different islands or whatever that is that's that is on the framework like how fast is your framework at that i bet react would just tank
[02:37:15]  honestly like they're so optimized for the one route on the page to rule them all that like i doubt they've optimized this enough right so yeah to be fair like if
[02:37:24]  we were trying to do like a pure hydration test between marco and an astro or whatever with the fastest hydration we could find this would be the the actual comparison it would
[02:37:37]  have been this one versus uh not that one this one like this would have been the actual comparison but the thing is we're not going to worry about that because we just
[02:37:48]  deployed idle again and uh you know it is what it is but it's good you you you now being aware of this means we we we have we have something to work on
[02:38:00]  um both on both sides actually um yeah i think that's that's where we meet right we need to get better about bundling those scripts so there's not 150 scripts on
[02:38:08]  the page and then the framework is just like as fast as your framework is we want to juice that for every island yeah and and yeah let's see sometimes we spike so
[02:38:20]  but i'm just now that we're back on idle i'm just gonna give it one more run see see our lovely 90s or again hopefully hopefully it wasn't just the
[02:38:32]  spike we just like hit it how heartbreaking would that be it was just the perfect run even if it was a perfect run we're talking about plus or minus like you know
[02:38:40]  a handful um so yeah usually no no no let's let's make sure that i did this right was this just the i mean not that that's that's still like the
[02:38:53]  best score we've seen otherwise but let's make sure let's make sure that this is not i i didn't just like ruin the whole magic oh that would make me my
[02:39:04]  that make me a little bit sad i mean it's still the best score but it's not as it's it's it's not as like we've conquered the world
[02:39:09]  okay it's the best score you've seen all night you can't take that away from me there is some very there's some variable here i'm just gonna give netl
[02:39:20] ify one more push and um you know or it's simple we just keep on pressing the button until we oh yeah other people do that right when they want the lighthouse score
[02:39:35]  they want they just run it for five and pick the best one why yeah there is something with this i've seen like there is a spike version and a non-spike
[02:39:44]  version like sometimes streaming can get a 0.8 where other ones can't and it doesn't always happen like not this it's when it's not like for this page
[02:39:55]  but like for the initial load page you can get you can get streaming yeah okay okay that's a bit closer isn't the first one always the uncashed one i feel like
[02:40:04]  i always throw out the first one on this on page speed yeah yeah i mean yeah that's it i mean yeah i mean we're we're we're still we're
[02:40:12]  still in the like this is a 90s range kind of thing i yeah i won't see green again but maybe maybe maybe the more we run we'll just keep on keep
[02:40:21]  on i'm sure they have a cost every time you run it we're just gonna minus a couple um yeah i mean yeah exactly in chat let's just rerun it until
[02:40:31]  it works exactly there we go green oh yes oh the best it was always 96 i won't believe anyone who says otherwise okay okay so we'll we'll put right you
[02:40:41]  keep clicking it i bet we can get 100 oh i don't there's certain things that will prevent 100 and i'm pretty sure this yeah right here is going to prevent the
[02:40:54]  100 the the red on the first contentful paint um will prevent us i wish i wish we'd been seeing um i wasn't looking was it the the first paint or
[02:41:03]  the hydration that was causing it to be in the 80s yeah yeah i see yeah i didn't i didn't i didn't see that we might have to refresh on the
[02:41:11]  video no no no no no let's keep it we'll keep it at 90 i think we're good i think we're good here yeah we're good yeah so um i
[02:41:16]  don't know any more questions for fred because i've we're already kind of well over time it's been two hours and 40 minutes but um i haven't looked
[02:41:26]  at the chat at all any any comments how do people feel about this this is pretty exciting i feel like early on people are asking for more hot takes i feel like we've
[02:41:35]  delivered them with the uh the framework comparisons oh will you put astro in the ssr benchmarks yeah let's do i can do that because the ssr benchmarks are
[02:41:43]  just static i mean it's hard because they have hydration tests but if i ignore the hydration tests i can just use straight astro files to do the isomorphic benchmark
[02:41:52]  there's a benchmark um that tests pure raw rendering speed um on the server i don't know where you guys sit on that um but yeah i i technically with what i have
[02:42:04]  here i could probably add astro to it it can't do like the test is supposed to be isomorphic benchmark so it does hydration too which means like astro
[02:42:12]  on its own won't be able to compete in that but right if there's an interest to know how fast the raw rendering is i mean we can probably do that at some
[02:42:21]  point too yeah sometimes it's hard to categorize like just not having a say on the client side like i think you early on were like it's hard to be agn
[02:42:28] ostic and i think that's the limitation we have like we're agnostic of the framework and it means we have to be like pretty opinionated about other things like
[02:42:35]  use case like being focused on content and you know it's it's kind of the choice that we made so that's our one everyone gets one agnostic choice and that
[02:42:42]  was ours framework can astro replace something like next or remix yeah so i feel like this is this is my favorite pitch because it's like controversial and exactly the way i like
[02:42:52]  it like if you're building something super stateful super dynamic the user's logging in and moving data around dashboards like don't use astro like that's just not what
[02:43:01]  we're for um if you're building a content site a marketing site a landing page a e-commerce anything that's about getting content to the user um as quickly as possible
[02:43:11]  with some inner activity on it that's where astro shines so if you're using right next or remix for that today like you should be using astro um maybe if you
[02:43:18] 're scared of the beta that's totally fair like wait till v1 but like you should eventually be using astro that's our pitch there you go yeah and yeah i the
[02:43:28]  add to that yeah it's solving right now at least this isn't always going to be the case but right now these actually kind of stay in their lanes enough like where
[02:43:38]  like if you want the more dynamic stuff use you know next or you know remix or maybe even better consult start um but like they're for that astro is on the other
[02:43:51]  side of the spectrum and um at least right now i don't even feel like this is really like competition on a certain side like i guess e-commerce is where this
[02:44:03]  overlap is happening and i'm going to be really interested to see uh you know are is this the move that makes astro like e-commerce like like i think there's
[02:44:13]  an interesting play in zone because when you can do stuff like this like like i took the 96 off the screen sorry but like then like it there's a there's a
[02:44:24]  real question there like how how it's going to take a while before say like rscs or like hydrogen get that optimized or like with reaction components stuff this this is a
[02:44:33]  compelling story and i think for now you know there's that there's can i share so i've been working on something and this is not at all ready to be like shared
[02:44:41]  so like if you can find some way to promise that this won't get put in the final video i would love to share an image with you and get your thoughts i
[02:44:48]  can't i i don't i my editing is like minimal i i just upload these straight so i'm not going to promise that oh no now people watching are going to be
[02:44:57]  so curious what was it yeah i think we'll have to do this offline then i yeah yeah i've no no editing here sorry okay well here okay i can i can
[02:45:07]  no i'm not gonna be able to okay never mind oh no you know what no one minds dunking out or not even dunking it's just wordpress um they have
[02:45:14]  to get to like the they have to get to like the three hour mark of this video anyways right so exactly no i'm not gonna show the whole thing um here let me
[02:45:21]  um or let me send this to you give me one i'm gonna do like the biggest ms paint scribble of all time okay while you're doing that uh nak
[02:45:30] il solid start team actually uh wanted to mention something all these requests response frames probably should collaborate and figure out adapter layer together yeah we've all implemented this all of us um he
[02:45:40]  he did it for solid start uh you know and where i guess we've been getting he's been doing a ton of work there and then like obviously remix cell kit like i
[02:45:49]  think we all astro we're all doing the same thing yeah it is true and they're all there except for remix these are all built on beat so beat that's
[02:46:02]  what we need beat universal deploy adapters so we like every beat project can just swap them in okay i've got it okay got it it's gonna be a browser tab um
[02:46:17]  that you can feel free to share i've taken out the bad stuff the dangerous thoughts as you might uh you might say all right so are you gonna share your screen i
[02:46:25] 'll just post it in private chat and you can open it i don't i'm always scared to share my screen the first time yeah because then do you have a mac and
[02:46:32]  it's going to tell us that you have chrome's been doing that all the time to me it's it happened to me last stream even though like i stream literally every week
[02:46:39]  and it's like oh we don't we don't do that it's like really i know this was okay so we're going back to a question from a second ago
[02:46:46]  because this took me forever but um here's this is how i'm trying to kind of visualize how we see the world and i think this is the closest i've gotten and
[02:46:54]  actually that focus but not yet delivering should now be green because this was made before we had ssr and now i believe we are like happily meeting that um i'm trying
[02:47:01]  to lay out all these use cases on a general spectrum between static and dynamic content and both content focused and interaction focused um i would actually make some changes it's been a
[02:47:11]  while since i've done this oh okay like what's the red bar but you're just you you don't i'm hating what i've done because that's where people get
[02:47:16]  into trouble i'm not going to speak for any of these frameworks yes but what i'd argue is that we are special and that we're really focused on content where everyone else
[02:47:23]  is focused on the right side of this and then trying to say and we can do other things because those are easier to do but they're not like performance becomes a concern and
[02:47:32]  you're optimizing for the app instead of the marketing site um you just are i think what we've learned through this entire year of working astro is you can't be
[02:47:41]  everything to everyone and by starting on the right side and moving left you end up being not what everyone will you it's the same thing like you're just not the best for
[02:47:51]  that use case and we think our take is that people are coming in with their use case first and their framework second and not the other way around and so by focusing on
[02:48:00]  a really solid use case everything on the kind of middle to left side of this we think we can tell a better story than everyone here who i'm too scared to show whatever
[02:48:09]  i thought that's fair and it is it is it i it's funny because solid start is like let's pretend it's the same as svelkit like it's it
[02:48:18] 's let's pretend it's identical i i agree with what you're saying here i don't in my opinion today without something like astro marco or quick i'm
[02:48:29]  i'm i don't even yeah you can get here i'm not i don't i'm not even happy with the getting over to the e-commerce line i'm like
[02:48:36]  once you get over to even the e-commerce line i'm just like nope you probably should have used one of those mpa frameworks yeah that's everyone is gonna say
[02:48:46]  this is i was talking about e-commerce being like that center zone where like everyone's kind of like fighting over right now i don't think the right side has any substantial
[02:48:57]  claim there or any potential to make any substantial claim there in my opinion i'd say wordpress is probably still doing the best job there for a lot of people right they're
[02:49:05]  coming in with their use case which is like i need e-commerce they're coming in with like their set of tools which are all these plugins um one change i would
[02:49:12]  make to this today because i haven't looked at this in a while and it's already how i've kind of rearranged in my head i think e-commerce is just
[02:49:17]  so interesting a because it's where a lot of the money is so it's like where all these companies are driving and b it's also i think we're content and interactive
[02:49:24]  kind of meet so i would kind of draw the two arrows like almost overlapping right there because it's really content focused in that like it's about getting a thing in front of
[02:49:32]  you but then it's also about them getting you to click the buy button like both of those are essential in a way that like for publishing it's kind of more about
[02:49:40]  getting it to you and in facebook it's kind of back in you more interacting with the stuff on the page like liking is the thing that they care about right engagement but e
[02:49:48] -commerce is just right like both are kind of equally important you can't you can't deliver one without the other so anyway it is an interesting charter thinking because the truth of
[02:49:57]  the matter is the right hand side frameworks never initially ever expected to not but to get past those that side they were like happy that they were trying to fight with mobile apps
[02:50:07]  and like native mobile like stuff really far right and there was like the spa frameworks like never at all cared about it and i i feel i i don't even i don't
[02:50:17]  even know if it's even other own volition it's just like people really like the dx and all the work going into these frameworks and the single app model and all like
[02:50:25]  the nice niceties there and that kind of pushed it to suddenly people are like oh i'm building my blog site or my e-commerce site there and you know i
[02:50:34]  mean also alex russell will go like length on this but like not everything's a single page app and um yeah it's interesting because and and we're already seeing i
[02:50:43]  mentioned a bit with react server components you you coming you can't i in my opinion it's very hard to come at this from the right you actually have to almost you almost
[02:50:54]  have to come from the left to get into the middle there and like uh it's funny because of the i i don't have the quote offhand but the uh bre
[02:51:02] tt from shopify was saying that he's like i don't i do my my graph you know uh let me let me see if i can go back far enough to this
[02:51:09]  because this is how i got this is how i got flagged um by the way why do you think i'm so scared to hide all the data like showing a graph
[02:51:17]  on twitter is going to get people mad tell it or but really it's like putting words in other people's mouth is going to get right but you remember this this is how
[02:51:24]  i knew that this was coming and i i contacted because you showed this shooting out but i put this i put this out here and when i put this out um brett
[02:51:32]  from hydrogen i think he was like he's like i kind of feel like hydrogen's like over here somewhere or like this and i'm like no i'm gonna stick it here
[02:51:41]  because like i think that's conceptually where it is but i understand what you mean like you he they almost had to cross over here really loosely and then back pedal back a
[02:51:51]  little bit like that's the only way you get there you have to give up a lot from like like from the react single page world perspective and then kind of layer it
[02:52:02]  back on to get there and the frameworks who are sitting right here are like you know i'm just going to inch a little bit closer this way and like it just it's
[02:52:11]  kind of natural you're just kind of like you know an inch you know we could stay here but we can also just add a few things and maybe maybe maybe maybe maybe we
[02:52:20]  maybe we just get a little closer to this line and yeah here's what i'll say i think that this is one of those charts that you could have rotated and it
[02:52:27] 'd all be the same but because we're all in the top right we feel like we're kind of patting ourselves on the back um i obviously love where we're at
[02:52:33]  i'm sure you do with marco and like quick i think is an awesome project but um yeah i i think everyone charts just make people mad i don't know this this
[02:52:42]  one made makes people less mad than i thought it was you know who got mad on this chart everyone below the center line they were like yeah well i think they were right
[02:52:50]  because haven't they all basically added some ssr yeah in such short notice i didn't even notice like also i i i've always been this is where i live right
[02:53:00]  like solid and i live up here i'm aware of this now you know i've been working marco but like i didn't pay any attention to this it just wasn't
[02:53:06]  my thing so but then i looked and like oh it was like gatsby october 2021 redwood like it's all been in like the last six months to a
[02:53:14]  year like and you know astro might it's funny you caught my attention so i've moved astro but actually astro might actually be one of the later ones yeah elder
[02:53:24]  beat us to it 11d builder beat us to it gatsby beat us to it redwood i think is ssr yeah you press might be the only one that
[02:53:32]  isn't yeah but right but i mean and it makes sense too because they they have not stuck here right so yeah yeah so yeah this this this table's done it's
[02:53:42]  collapsed context has collapsed i would say it's a pretty damning i feel like we've maybe even started here so maybe we're coming full circle it's a pretty damning
[02:53:52]  um i don't know something of of jamstack like the idea that like eventually you'd like you're this is i was trying i don't think i did i don
[02:54:00] 't know i'm too hard on myself for this talk i gave it a jamstack comp but brian i think put it into brian rinaldi did a
[02:54:05]  blog post which i'll try and find the link to like jamstack is an idea that doesn't scale like eventually like from you're going from zero to ten great pre
[02:54:14] -build it you're going from zero to 100 pages okay pre-build it a thousand okay it's gonna be also ten thousand like eventually you're gonna hit a limit of
[02:54:23]  how long that build takes that isn't feasible and like as a model that is just a horrible place to be like a model that does not scale with you is one that's
[02:54:31]  gonna then force you to make a major architectural shift late in the game yeah and i think that's like probably what this chart shows more than anything is like eventually their users
[02:54:41]  grow and then say i need ssr and like i'm ready like jamstack just didn't scale and that's a tough place to be so i don't know
[02:54:48]  i feel like there's this kind of very quiet like what is jamstack debate going on and like the maximalists of jamstack need to like understand that users
[02:54:56]  are just leaving jamstack and that's a problem i think i don't know it's something we really tried to do which is like we still are ssg by
[02:55:03]  default so if you didn't put an adapter there all pre-built you're good and it's only when you opt into ssr that you get these features so the
[02:55:10]  idea is like fix the scaling problem zero a hundred a thousand you can still say ssg eventually you just added it after you become ssr and you keep scaling
[02:55:21]  yeah no and and that's the thing right uh yeah so yeah this chart is over there is no lower end bottom like even if you press this and beat press or a couple
[02:55:32]  others are still down here it's it's it's like there's other paths for them it's it's kind of this is no longer a thing the only but left
[02:55:41]  to right is still a thing for now and this one the the top the bottom one at least there's like an obvious path it's not that far you saw it with ast
[02:55:50] ro when you were doing it you're like well like this already makes sense like we're already kind of already there and i i the left to right is actually a much much
[02:55:58]  much harder problem that i'm not sure if we might try and collapse left to right in this then realize like what a horrible mistake we've made um so i i'm
[02:56:07]  but you know so much of the industry right now is a bet on will react server components work and if they do and they work well and they're performing and users love them
[02:56:16]  like that's a pretty good i bet that's going to change the game a lot if they don't that's going to be a lot of people are betting on that i
[02:56:23]  wonder what's going to happen yeah yeah for sure and my my hedge here as i said is i don't think it's going to be the only game in town because i
[02:56:31]  think the guys who are already on the right hand side are actually closer to the like reacts close to the finish line in the sense that they recognize the problem five years ago
[02:56:40]  and have been working towards it where admittedly a lot of stuff on the side not so much but otherwise i think this these this these guys are closer if that's their goal
[02:56:54]  like to attack you know so i think we're gonna yeah this is gonna be a interesting area i don't know if this is gonna be like it's gonna work it
[02:57:02] 's gonna be a real thing but yeah the vertical's gone it's just horizontal and even horizontal is changing now so who knows yeah yeah exactly i will say it's the fun
[02:57:11]  part about like i think the other thing that this all like everyone here has chosen a framework to bet on and we get to play with everyone i think that's something i
[02:57:19]  really love yeah like that's like we're like we're like we're not a bet against react we're like a bet on react to like if react gets better we get
[02:57:25]  better if solid gets better we get better so it's fun we just get to like i don't know we get to both be like the troublemakers and also like no
[02:57:32]  but like bring it come and use it with astro that's great yeah yeah no i'm i i think i think that's that's really quick just because in chat breakfast
[02:57:41]  on the moon the same jam stack is really nice for the use cases that suit it that's exactly what i'm saying is like until that site gets too big which inevitably
[02:57:48]  will if it's successful and then it's no longer good maybe that's simplifying it too much but that's like that's the difference like we're trying to be good
[02:57:56]  at our use case but then we grow with you and i think a purely ssg is just not going to grow with you to a certain size i'm just going to
[02:58:05]  put this up on the screen one more time just so that we can kind of bask in its glory thank you for showing me this this has made my whole week after a
[02:58:14]  very long i told you demo i mean it's a silly demo but it this still you know obviously feels nice and uh and uh yeah i don't know i i i i
[02:58:25]  gave you guys in chat a chance you've you've had your chance to ask the questions it is been three hours i'm calling this the stream so um i don't know
[02:58:33]  any closing thoughts or anything you want to say i think we've got the good closing thoughts and do you want to plug anything fred i mean the number is great just
[02:58:41]  look at the number for a little bit longer i guess we could just stare at the number and is there a way to fade the screen out um i will no i will i
[02:58:48]  will very quickly quickly quickly um the people on the team who built astro um deserve a ton of a ton of thanks nate like was just the v1 beta release person
[02:58:58]  and just kind of crushed it all again we've been working on this for months so it's just really exciting to see matthew's been working on ssr so
[02:59:04]  he deserves a ton of the credit on this um again erica i'm working on i think princess dev in our discord um did a bunch of work on the vs coded
[02:59:13]  stuff ben tony just like everyone fuzzy you mentioned um working on stuff in the community there's just a ton of cool stuff going on um i feel like it was like an
[02:59:22]  end of a podcast um astro build is our website astro build slash chat is our discord um a ton of stuff going on in discord we just started a hackathon
[02:59:30]  and actually inspired by solid hackathon so um was chatting with dan from your community over there and and got a bunch of good feedback got some feedback from you so we just started
[02:59:38]  that that's astro debt build slash hack if you want to build some of this cool stuff with us i mean not to take down that wonderful number but let's let's
[02:59:45]  actually give that a little bit of screen time because yeah the solid hack finished up this weekend i doubt anyone's gonna get started on that but there is still time if you want
[02:59:53]  to see if you can enter both hackathons with the same there was there was like a one day week window someone could have done it i mean it's it's
[03:00:01]  it's it's still going right we we actually extended it because there's oh nice we ended it on a friday that's like a really weird time like i guess end
[03:00:09]  of the week and we're like let's give people the weekend so they actually have until well let's let's look what hack dot solidjs.com two days 21 hours
[03:00:20]  okay you have two days to win both prizes you can do it i believe in you yeah yeah we gave just a little bit of extra time because yeah like if you've
[03:00:29]  been working on it and you like got to this point you're like oh man it's not ready yet i i'm giving you an excuse to ruin your weekend no i am
[03:00:38]  a perpetual procrastinator so i appreciate it yeah so yeah ours is obviously not as pretty you can tell it's a notion page but there's a bunch of prizes you know thanks
[03:00:48]  to our sponsors for letting stuff like this be possible a bunch of rules it's all happening in discord so join us in discord there's a hackathon channel you got a
[03:00:55]  month so this is helping us kind of build out our ecosystem test our ecosystem we're looking for feedback from all this um you know the whole next two months from us from now
[03:01:03]  until june 8th 2022 are all about solidifying stabilizing polishing um some of the performance like you maybe haven't seen i've been taking notes as we've gone like
[03:01:12]  a bunch of performance stuff we're going to polish before then um stuff like this is just really exciting no it's and yeah it is super exciting i the potential these hack
[03:01:21] athons i didn't realize on until it happened for i we'll see what happens with astro but for solid oh you know everyone's like where's the ecosystem and we
[03:01:29] 're like oh we got lots of things for different things and then but everyone's like where's where's the component library and we're like we have solid bootstrap the
[03:01:36]  first thing we now have material design and like hope ui which is like chakra like we got two complete full sets of component libraries all this plus so much more i i
[03:01:46]  can't wait to see what people build for astro and like you know what things will look like in a month yeah we're super excited i think a lot of our maintain
[03:01:54] ers are chipping in and participating i think some of our core maintainers are going to take a couple days like yeah this is gonna be exciting so it's happening like you
[03:02:01]  know like all good procrastinators you got four weeks but um if anyone's doing stuff sooner um we're gonna be around in the weekend we're gonna be around just
[03:02:09]  a little more regular in that channel when people are hacking we're gonna be there so come say hi awesome all right we're gonna we're gonna sign off then so um thanks
[03:02:18]  everyone for joining um this was an awesome stream thanks fred for coming on this has been amazing um truly oh my god brian thank you for having me i feel like you
[03:02:26] 're one of my favorite developers in this space so i feel like just learned a bunch from you even watching this things yeah no this is a lot of fun okay good night everyone
[03:02:33]  um till next week um i don't know what i'm doing um i don't know what i'm doing yet next week but we'll we'll find out can i
[03:02:38]  just say real quick yeah not as bad as you think just tea it's just tea all right good night everyone take care everyone