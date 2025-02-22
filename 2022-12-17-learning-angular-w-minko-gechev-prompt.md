---
showLink: "https://www.youtube.com/watch?v=tfxxeknwsi8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Learning Angular w/ Minko Gechev"
description: ""
publishDate: "2022-12-17"
coverImage: "https://i.ytimg.com/vi/tfxxeknwsi8/maxresdefault.jpg"
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

[00:00:00]  all right all right how's everyone doing today i am running a little bit late i apologize for that hopefully my mic is working it sounds like it's working all right there
[00:00:17]  we go very much last minute putting together the stream for those who weren't aware i actually went to two meetups on opposite coasts two days in a row i was actually
[00:00:31]  um sorry i was i was in new york um tuesday night to do the solid new york meetup you might have seen that um it's on this on the
[00:00:43]  channel and it's like oh man um and also i came back to go to the react christmas party um the put on by ben and you know reactathon and event loop
[00:00:56]  and whatnot um then the following night so i actually was on two plane flights back to back i basically barely slept and then i got back and then i finally slept and that
[00:01:05]  was like yesterday and now i'm finally caught up and then i was like oh we need a stream yeah we're gonna we're gonna have minko on today um
[00:01:18]  which i'm very excited about um he's now the lead of the angular team um at google and he's he's gonna come and join us in a little under an hour
[00:01:28]  around 1 p.m pacific time uh so we got we got a little time right now get things going i gotta like catch up on some stuff catch up on chat
[00:01:37]  actually announce the stream because i sort of just literally was like making covers and stuff like right as that we got up to got to showtime so to speak so let me see
[00:01:49]  here let me give me a moment i just wanted to make sure that i was live at the right time when i actually advertised it you know um so where are we at
[00:02:04]  there we go twitch chat is live hey hey aj hey nate just seeing making sure that all the everything is going good yeah yeah yeah yeah no it's it's awesome
[00:02:23]  when you can just like go on twitter and go hey anyone want to talk about something and see if we could we could we could get um it going but no i i'm
[00:02:32]  i'm serious about learning angular um it's been much too long since like angular's always been there you know like right from when i got back into uh like javas
[00:02:42] cript frameworks i mean to be fair maybe not at the very beginning because i i kind of i did get in right on that jquery query train um but like it was
[00:02:52]  pretty much always there as like an option i could choose i i i just had this path um path that led us straight to knockout kind of like i was on the
[00:03:02]  microsoft path so to speak through the 2000s so i went i kind of went like straight to knockout and then when i went to go okay i want a bigger opinion
[00:03:11] ated framework i was suddenly like kind of left with a choice i'm like there's two options by that point it was either angular or ember and i actually went with em
[00:03:18] ber um at the time because embers uh change model reminded me more of the reactivity of knockout so that i i know it's not quite the same thing but that
[00:03:27] 's what kind of got me there and i just never picked up angular and then like react came out and then it was like okay well you know reacts minimal kind of like
[00:03:35]  knockout is and then view and then like everyone kept on going on that trend and i never really got back to learning like an angular and aurelia or any of like
[00:03:43]  the bigger opinionated frameworks it just wasn't really in the cards so to speak so um yeah i think i think it's interesting i've i've had plenty of discussions
[00:03:54]  with members of the angular team in the past and like talked about you know a lot of their new direction i don't think i don't know we're going to get too
[00:04:01]  far on that today i i think i'm going to save that for a future stream but like for me right now it's just like take the perspective like i'm a reactive
[00:04:08]  or you know someone like along those lines hasn't used angular and goes like what's the deal what's what's angular all about that's sort of what i'm thinking
[00:04:17]  the hell there's like sirens in the background somewhere they're not outside i feel like one of my kids toys so i don't know where it's coming from it
[00:04:32] 's weird but yeah so like that that's just gonna give us a little bit of uh context here um in terms of where we got it there there's been a lot of
[00:04:46]  like cool stuff that's been happening um this week anyways like why when i actually put the question up on twitter you know people are like um gave me quite a few suggestions
[00:04:57]  of what we could have also talked about on the stream actually i wouldn't mind even pulling a few of those up and maybe giving them a moment's time just while we're
[00:05:08]  while we're kind of getting set up here and got the stream rolling uh let's go on twitter here um let's see where we are all right let me share my
[00:05:26]  screen i was practically forced to use angular sorry it's not showing up here no that's not it and i still don't get how it works internally well i mean it's
[00:05:37]  it's it's interesting right because i think what's cool about angular is they wanted to kind of keep backwards compatibility i know the migration from angular one to angular two was
[00:05:47]  a thing but i think what was interesting is um there's a lot of different paradigms you could approach to building front-end web right and i think it's interesting
[00:05:59]  that angular has lived through kind of all of them like like it was around at the beginning it morphed and changed slightly with you know the changes that came you know with
[00:06:13]  the component model you know and maybe even with some of the reactive stuff that's going on happening right now so it's kind of like it's interesting to me to see how
[00:06:21]  that changes perspective i've had a couple chances to to talk to some angular folks when i was like an ng poland um and like miss go to as well because you
[00:06:32]  know like some stuff like zone js you know which for the for those who aren't aware is this very interesting change detection system that they have in angular that lets them kind of
[00:06:42]  like treat async threads as like they're being part of the actual change system like it can actually track through promises um is really quite innovative in like a different direction than
[00:06:54]  a lot of others went if you talk to mishko he kind of regrets it now but on the other hand like it's really interesting stuff right like there are similar things
[00:07:05]  in node if you if you've seen this before like node has uh um ability i figure what the primitive is called where you can actually like basically keep context through async
[00:07:16]  promise resolutions that's why you don't do five-hour streams you run out of ideas yeah it's the funny thing is surprisingly we've i've managed to just keep on
[00:07:28]  going like usually around thursday or whatever or wednesday like i i like something has happened and i'm like yeah that's the topic for this week but what what ended
[00:07:38]  up happening this week uh was i just i was so tired that like it honestly it was last night when i was like okay what am i doing like it just it just it
[00:07:48]  just the way the timing went give me like 24 hours like figure something out it just it needs sometimes needs a little bit of thought uh just yeah see angular has like great
[00:08:05]  tooling around this kind of stuff i think any framework built with a large company in mind would have to um migration story for marco was really cool like this too like just so
[00:08:16]  much like you you've got thousands of apps internally it's like you you need to make sure that you can actually move people along with it zone is a broken hack yeah
[00:08:28]  i i i'm not gonna pretend that i'm qualified to to make that um statement myself i don't know domain api thank you that's that's that that is what
[00:08:41]  i'm talking about yeah yeah i i'm i'm hoping so that's why i'm doing this because like honestly i i am angular is just like the one i never
[00:08:56]  learned and sometimes like i'm like i was a little bit scared or like until minko was like hey let's do this i was a little bit like i i don
[00:09:05] 't i don't know how i feel because it's funny even me today is different than me like eight years ago i feel like when i learned view for example i started learning
[00:09:17]  view again recently because of uh because of like the stream you know looking into nuxt i and just like the different binding syntax and stuff i i kind of got like i
[00:09:26]  had trouble with it it wasn't intuitive for me anymore but i feel like younger me like back in 2012 or 13 would have got view like right away um but like now when
[00:09:37]  i was looking at it i'm like like there's just a couple things and then when i i'm like okay wait i've seen stuff like this i can apply that pattern
[00:09:43]  i look and then i get tripped up because there's like multiple shorthands and i like i got lost in the amount of richness in the detail and the like
[00:09:51]  the shortcuts and like the the way they build everything on top like i bet you if you know view very well like everything would kind of just fall into place and it would be
[00:10:03]  like very terse and it makes sense and you'd really really love it but for me it was like i'm like okay so this syntax is the same as this syntax except
[00:10:11]  you know like if there was there and then it's like okay so like different symbols meaning different things and like it took more and i know this is a common complaint from
[00:10:20]  react developers when looking at view or angular or even a little bit at svelte um i i don't think learning that stuff is necessarily that big of a hurdle because once
[00:10:29]  you have it you're kind of empowered by it but like it means like for someone like solo learning you know in the course of a stream or something it can be tricky because
[00:10:37]  you even if i know what i'm looking for i can still have a really hard time uh if that makes any sense i i think that aspect um react uh does
[00:10:52]  actually like like it it isn't they they sold it pretty hard early days but i don't think it's like as understand like don't get me wrong when you look at
[00:10:59]  jsx there's a bunch of weird stuff to you like why can you render props and stuff like there's things you don't expect that you would do so people learning are
[00:11:08]  going like oh that's weird like why would you do that but then when like the clicking point for you with jsx is like you're like oh it's like javas
[00:11:15] cript and you're passing functions and you can their javascript expressions like once you can like understand the syntaxual piece of jsx the rest of it just follows you
[00:11:25]  don't actually i you never have to go reference it you never go oh i forgot what that symbol or what that shortcut is or what that what that uh like like special property
[00:11:35]  is or whatever like you might have to do that with hooks but not with the jsx so much and i feel like that that is a different type of thinking or learning
[00:11:47]  like i feel like if i learned view eight years ago maybe angular and then came back to it eight years later like there'd be more stuff that i would have forgot so to
[00:11:55]  speak um it's it's it's interesting ryan it's the closest thing to going to the amount of tougher wisdom from elders it's almost crazy he feels like this
[00:12:10]  for us well i appreciate that um but it's like no one knows everything and it's it's tricky um because if you i don't want to misrepresent stuff um
[00:12:24]  because everything's in a reflection of where you currently are in your current knowledge of things so even if i can like it's why this sort of stuff concerns me a little
[00:12:35]  bit because how do i put it like in one sense i could go remake view or react or you know maybe even angular like i could go like make a like sketch and we
[00:12:47]  could start like programming it out and remaking it where but i'm way more likely to get caught on like some kind of syntax thing like how like not mechanically how to
[00:12:56]  do it but how to actually author it and that that kind of stuff um is is tricky because it's like you know you spend a lot of time in references and troubles
[00:13:06] hooting and and that kind of stuff which is actually how real programming works in real environments when you're actually doing stuff you have to look it up it's just like um it
[00:13:16] 's less dense on the content side um which is something that like i'm conscious of i mean i know sometimes people say the stream is too dense but like i like having
[00:13:29]  a really high amount of information um to be able to present right right right so what some angular knowledge coming here zones actual detection is so rough that angular libraries turn off the automatic
[00:13:44]  change detection you see a component declare on change detect strategy on push they've matched with manual cd yeah so my understanding and we make clarification the later is like there's
[00:13:54]  this angular was based originally off this like dirty checking thing whereas it was it isn't unlike like if you think about it a diff is a dirty check so like a vdom
[00:14:03]  is a dirty check um but angular was originally like way back not a component system it was kind of a global thing so this could kind of get kind of messy um because it
[00:14:13] 'd be like okay now we know so the it was it was like the most you know how react we talked about push and pull on the stream before and reactivity and
[00:14:22]  um react likes to say how it's very pull i feel like angular might have been the most pull based system like they they they were kind of like um anything changed at a
[00:14:33]  certain it's almost like set intervaling it it's not quite the same but they they basically go like let's figure out like when's a good time after we change
[00:14:42]  the stuff and then we let's just you know do the dirty check and see what's changed and this would get into a crazy mess of things and then at a certain point
[00:14:50]  people are like okay well let's push changes rxjs kind of stuff and reactivity but then you so you'd have to turn off the other change detection model so then
[00:14:58]  suddenly now you have like two like a fully pushed system and a fully pulled system um i've seen crazy talks like i i didn't understand half of it but like michael
[00:15:08]  hadley i i think i got his name right did it talk about like partial zoneless angular and i just like what okay you know like because he's a performance
[00:15:16]  guy on the angular side so like i feel we'd have a lot to talk about but like um it was it was it was kind of like i was trying to like get
[00:15:25]  my head around what was going on there but it's interesting as i said to bring what's really cool about angular in this sense is change detection is part of the conversation
[00:15:35]  like it's it's part of like how you authored it it's not like the framework decide that for you sometimes that's that's complicated right it's kind of like
[00:15:44]  it's the same way i'm saying that's kind of cool in the same way that react doesn't handle global state for you like it's like oh yeah you could use
[00:15:52]  uh kind of like a redux style or mob x style you can kind of like swap it in it's because there's parallels there but on the other hand like a
[00:16:00]  lot of times that's what people like love svelte or something because it's or even solitude degree because it's like look this is how things update you do it
[00:16:10]  that way and you don't have this degree of like inconsistency but it's really interesting in angular's case because they're a framework that has patterns um much more opinion
[00:16:20] ated patterns to my knowledge so having this both this um flexibility plus a rigid rigidity on patterns creates a very interesting combination i can only matter imagine that there's just so
[00:16:35]  many different patterns that come from the combinatorics of these and multiple types of best practices like i'm just speculating here but like this is the output i'd expect
[00:16:46]  of that kind of decision making where like you'd have ranges of best practices yeah it's interesting yeah yeah yeah but yeah i mean before we even got to got to angular topic
[00:17:06]  today i was just like we got a lot of cool ideas so let's see if i can talk about a couple of them here while we're sitting here using solid for
[00:17:13]  general non-ui related state management i'm we're going to talk about this in the future because even though you can do that very easily you can just literally import solidjs
[00:17:21]  and just use your reactivity if you go it's funny um i i'm terrible pronouncing names but um see creator of js bundle if you if you all aren't aware
[00:17:34]  of or is it bundle js yeah there's this great site where you like people know bundle phobia but bundle phobia doesn't give you the real numbers unfortunately i found
[00:17:47]  out this site is actually giving the server values for solid but um rather than the client values so this is actually a little bit misleading actually unfortunately at the moment it wasn't always
[00:17:57]  like that um but what i wanted to show about this is you can find a library go add module and then what this this lovely lovely app will do is it will let
[00:18:11]  you say what things you want to export from it like let's say i only use create signal and create effect let's pretend this then you can tell the build and it
[00:18:25] 'll go oh yeah this is um this size one kilobyte 750 bytes gzip like this is true tree shaking bundle phobia you go you solid and they'll be like
[00:18:37]  yeah seven kilobytes real answer solid is much smaller than that and this site is really great for that but my point is that i'm actually going to be working um
[00:18:46]  on solids next reactivity to make this more clear make it easier to package out the reactivity separately so um yeah i think i think this is going to be a topic that
[00:18:59]  that's big um in a few months okay okay compare create jd app would create t3 app install kit yeah that's interesting for those who haven't seen it create
[00:19:09]  jdf um is actually create p3 app built on solid start which is really cool um so it's got like solid off trpc prisma so you can get like
[00:19:21]  the full react stack um you know that people build them next but in solid start this is really cool um uh i haven't used it and maybe this is why people want
[00:19:33]  to see it on stream but i it's it's interesting to me because it sounds like you a lot of your time isn't maybe once you have these libraries a lot of
[00:19:41]  time isn't so much writing state management it's writing like code to connect the databases and the trpc endpoints and doing all that stuff so the swap from create t
[00:19:50] 3 app to create jdf might not be as big as you think it is i think i think it's interesting because you the jsx you know it's kind of
[00:19:57]  the same anyway so having this kind of experience might be like really interesting for people who want to like get instant wins over next js without much effort i haven't looked at that
[00:20:13]  but i should look at it i i think that one is actually pretty accurate just built on top solid start yeah but it's but you know i i think i think that
[00:20:27] 's i think that's interesting to start seeing seeing this kind of thing happen and um the svelte kit a lot of people probably want me to talk about svelte
[00:20:37]  kit oh this was an interesting one coffee script of typescript oh man this kind of scares me too i mean i love coffee script i might be like scared because i'd
[00:20:47]  like it oh man no i can't go back to coffee script it's like interesting like this is probably the worst part about coffee script like people trying to do yaml
[00:20:58]  type syntax with the white space matters best thing about coffee script was that everything was an expression that was that was the best thing about coffee script you you just like inline
[00:21:10]  for loops and it really dense like like really condense your your logic um yeah i can't go here um maybe if i had a guest to talk me through it but i
[00:21:21]  can't do here like literally the conversation about coffee script just like goes on and on further down on this thread web animations i know rich has stayed the past feels that application framework
[00:21:30]  should include animation primitives i mean uh man it's hard it's hard like this is what it's kind of like the question i said about change management i feel like
[00:21:43]  animations and like css and in general are topics that people are really opinionated on like really really like we can't get any agreement on it so being able to choose one
[00:21:54]  seems like incredibly hard um i think they're also hard to implement in user land which is a really good argument for what why rich wants to bring it in house my happy
[00:22:07]  place is libraries for this i i i i want to do the least possible with the framework even with the meta framework i want to do as little as possible i i really am
[00:22:16]  on that side of the philosophy i i am not a fan of frameworks generally which is why i probably didn't touch angular once i got to a certain point which is going
[00:22:25]  to be interesting today because while i can appreciate the the motivation i want to see the benefits and i think that might be another reason why i have redwood on in the future
[00:22:35]  too like to kind of understand like by putting this all together and saying this is the way is it just the reduction of the decision matrix that we're winning or is there
[00:22:47]  some kind of cohesive um like more than the sum of its parts thing going on because if it's just the decision matrix you say but i mean i'm sure that helps some
[00:22:57]  people but that's like ultimately not going to sway me but if it's like somehow the combination of some of the parts and because you always have these pieces together you actually get
[00:23:06]  something more powerful out of it that's interesting um so yeah what do we got here have i played with trpc at all um no i was going to wait till
[00:23:21]  trpc 10 came out and then and then i watched alex's talk um it's been tricky because by the time trpc 10 came out and all this
[00:23:31]  came up i started thinking theo had a great chart um where he drew a graph um i mean i could probably try and dig it up if for people who haven't seen it
[00:23:41]  actually yeah this would take me like two seconds to find probably t3.pg who's still live but not live because of some some bug okay if i just keep on scrolling
[00:23:53]  down on here on on theo i think i'm gonna find what i'm looking for but honestly i i'm surprised if i i probably should have bookmarked it is
[00:24:02]  it's honestly one of the like if you want to show someone a graph and just have everyone in the room agree um this is the one i literally have never seen anyone everyone
[00:24:11]  thinks this is like a spicy take but it's like it's more of like this was the graph that people were always waiting for but am i actually gonna find it theo
[00:24:22]  tweets a lot apparently here we go this one yeah let's let's let's bookmark this one right now so we like never lose it again okay this is a great graph
[00:24:36]  this is this is this is like the best graph one of the best graphs i've ever seen and because it's this is this is this is really relevant um that there
[00:24:49]  is this zone where trpc just kills it because then you're like okay the graphql unrest and like honestly like when i was when i when i was working on
[00:25:00]  the graphql solution for ebay i don't know if many are familiar um i i built the first client side part of the graphql solution for ebay
[00:25:08]  um because they've been looking into doing this this makes a lot of sense you got different teams api consideration and um the that's that's you know where this kind of
[00:25:18]  fits in and right the back end isn't typescript you know we've got a lot of java at ebay um and there's a lot of things to figure out
[00:25:25]  um especially with hydration and stuff and that's why it took someone from the marco team to kind of come figure it out because we wanted to support streaming um with uh
[00:25:33]  with our client and also not ship the graphql client where we didn't need to so like it was it was a very complicated partial hydration problem but my point is yeah
[00:25:45]  place for this then you get to this trpc zone zone and it's amazing here but the problem is when you're in this zone you're probably today using a meta
[00:25:56]  framework you're using remix or next or solid start or whatever and as i said if i was just building this stuff myself and not i think trpc is really interesting
[00:26:07]  the problem is once you get into that zone you're gonna find all the meta frameworks are working in this zone whether it's server components or loaders and actions so i like
[00:26:16]  i've spent a whole bunch of time in the zone on the stream talking about solutions that occupy the exact same space as trpc and then you're kind of like
[00:26:24]  okay well trpc is really good i should use it and then it just like every time i get to that like you know i mean like i'm not i'm not
[00:26:32]  the user right now because of the problems i'm solving i'm not like um working for a startup that is building a monolithic app right now right uh and i'm working
[00:26:44]  in meta frameworks and looking at how they're solving the same problems so it's it's i haven't done it like i've wanted to but i think it's awesome
[00:26:53]  that there's an integration there and i think trpc really does well in that space i think some of our built-in meta framework mechanisms aren't there yet but as
[00:27:04]  a guy who's always forward-facing i'm spending my time investigating those a little bit more than i'm investigating trpc um mostly because although i should look at
[00:27:13]  trpc maybe for a bit more experience uh influence just like to understand um even better some of the things you're doing it just it hasn't really come down because like
[00:27:22]  i we so i find sometimes with frameworks we attack things from fundamentals again and like you know like server components where you're like re-asking or reframing the the core
[00:27:34]  question uh rather than um uh yeah rather than like pulling a solution that already is there because again it's kind of like that thing i was talking about some some of its
[00:27:46]  parts right like you you're kind of tempted to um like find ways that you can shortcut the division between stuff just because you don't want to uh um you you don
[00:28:04] 't want to like build up walls that are unnecessary i hope that makes sense um sorry just occurred to me that i actually have to send minko the link for him to
[00:28:14]  join on when when it's time give me two seconds yeah there we go um okay how we doing chat chat alive here i should look and see i went on a little one
[00:28:24]  of my rants uh how we doing all right redwood yeah the return of rails but for javascript yeah i i mean i i built a few rails apps back
[00:28:43]  in the day it wasn't it didn't feel too different for me than using like mvc4 like a.net like it was like i mean i think mv
[00:28:51] c4 was actually inspired off rails i think we had a like a thing where we had asp.net web forms which were terrible then rails are like was like significantly better
[00:29:00]  and then they were like okay microsoft how how can we do this like rails and then they made it the mvc um but yeah i mean it's it's it
[00:29:08] 's tricky this move to server focus changes what's important and i think that's something we always got to keep in mind all right how are we doing uh could angular be
[00:29:26]  lesser opinion than react next i think that's an interesting question i think the the way that next has been going or then the react has been going it's arguable who wants
[00:29:35]  to orchestrate more because here's the thing i think angular it feels almost like the reacts kind of go okay this is how we pull the pieces together and they and they're
[00:29:45]  like here's the the path and they're getting to having opinions about things that classically they might have not had opinions about in the in the past but at the same
[00:29:54]  time angular might have had opinions in those areas and now but angular has multiple opinions in those areas so in a sense having a bit more choice might actually make it feel less
[00:30:07]  opinionated if that makes any sense so i think that's a great question i don't know yeah sure i'll answer this one i want to build my administrative app in solid
[00:30:24]  start but i'm worried about hiring people in the future because it'd probably be much harder to find ads that can work in solid versus react but i don't also don't
[00:30:31]  think that learning solid is very difficult at all if you already know react i know you are probably a little biased but what do you think about startups betting solid yes yeah this
[00:30:38]  is this is actually my the reason i'm answering this is this is one of my hardest problems right now um people talk about ecosystem um and people like i think there's something
[00:30:48]  i saw some tweet about like what's holding solid back from getting traction and i said it was like education i feel like it's important to i i feel i'm going to
[00:30:56]  talk about education i mean like in the broad sense from training courses boot camps to everything like getting new developers into it i'm talking about better docs i'm talking about guides
[00:31:08]  youtube the whole thing um because it isn't difficult to learn solid especially coming from react i'd like to change that especially coming from react part obviously but because i i believe that
[00:31:17] 's true but the problem the thing that i'm seeing right now that's interesting is we're starting to get companies startups betting on it and i mean actual real projects like
[00:31:27]  things that are significant and they're going to hire and it's like where do they find that expertise um and that's that i admit this is a lot better place than before
[00:31:40]  when people like this is the other side of the thing there's a bunch of people going oh i'm not gonna learn solid there's no jobs in solid now there's
[00:31:45]  that there's it's like now that there's starting to be jobs they're like people are looking for you if you need to be connected on that side you know like come
[00:31:54]  in the discord we have there are positions and people looking for solid developers it's just like it's just it's like this tricky back and forth because it's all about momentum
[00:32:06]  and movement but it's like this catch-22 scenario because like if people feel they can't hire for solid solid then they don't make the posts which means people don
[00:32:14] 't think they can learn solid for their job and you kind of see like the only way this just gets rolling is the ball gets rolling and um it it's a it's
[00:32:22]  a tricky balance to think that's why this takes time and it's a much slower growth rate wave because of this perception because react is very cemented which was not true of
[00:32:33]  the frameworks that were around in 2012 2013 or whatever when react came up because let's face it people bet on react after like six or eight months nowadays it's like oh
[00:32:42]  yeah svelte's been around for six years that's not long enough like i think it's comical almost um like i understand it but like it actually has to start
[00:32:57]  probably with the companies you know um you know where people actually find positions and they're like yeah we want to do this and this and then that drives it individuals will keep
[00:33:10]  on learning stuff as hobby projects regardless but at a certain point people companies have to decide if this is the choice they want to make and they have this the challenge though it is
[00:33:18]  harder to hire i i worked on a custom stack with knockout um and not many knockout devs out and i did that for eight years and when we switched to
[00:33:28]  react in 2019 with the rewrite um all right i mean this is a decision made back in 2018 to be fair um it was so easy to get bootcamp devs funn
[00:33:38] ily enough like in retrospect two years later talking to them they're like oh man uh quality wasn't as good i'm like yeah well you hired bootcamp devs so
[00:33:48]  like you know i mean like you know and who was training them right i think i i think it's interesting because i startup always actually hired more quote junior developers so it's
[00:34:02]  not like we changed the quality it just it changed the way that like the expectations in terms of like output and training time because we used to expect that it would take months to
[00:34:10]  ramp up and then suddenly once i was react we we i'm pretty sure people who followed me assumed that they could just jump in so it's this is this is this
[00:34:20]  is a tricky question um i'm the people are starting to bet on it there's been a few startups now and there's more um part of the reason why is in new
[00:34:30]  york um this is gonna i think you know each team will come along in time when it makes sense for them um i can't make this decision for you unfortunately it
[00:34:42] 's it there's a there's a difficulty there but as you said was it that hard for you to learn solid from react maybe not then like that's the cost you have
[00:34:56]  to weigh into it will you get a better product out of it that depends on what you need yeah we probably should dig into this in depth pretty soon um it's funny
[00:35:12]  because in a sense he just he took we were doing something that was sort of hybrid that was kind of strangely unique and milo looked at it and he was like why don
[00:35:21] 't you just do it this way like why are you doing all this extra stuff and like it just hadn't occurred to me so he simplified a bunch of stuff and i think
[00:35:27]  that's the key part here but it has a lot of repercussions i i feel like when the time is right we'll really dig into this um but it's very
[00:35:37]  interesting to see pull based um um it's it's still push pull but a bear it's like more pull based than we've ever been before and i think this really is
[00:35:48]  a game changer um i think this is going to be the sweet spot for for fine-grained rendering frameworks i think i i feel like there's a couple things that
[00:35:59]  were hard for us to do um on the vdom or react side um because of how pull based they were i feel like this is the final piece that bridges the gap if
[00:36:08]  that makes any sense like i had to do a lot of complicated stuff for concurrency and and i'm hope like it seems like this is going to be our our our
[00:36:17]  path forward here rust versus sig oh man i don't you know i i i can't say anything about it maybe we get jared on here and you can talk to
[00:36:29]  talk to us through this um you you use a root basically i could see someone just packaging those two together but we use create root um with solid with the effects because the clean
[00:36:46]  the extra logic we need around clean up and like subscribing and managing the cleanup and stuff isn't needed in the core of the framework so there's no point building it into
[00:36:54]  every effect yeah yeah talking about the edge compute can it change things it's more like they just want to do more with cdns um i feel like someone actually asked
[00:37:14]  this question um and i was thinking of covering it in this week in javascript um so i guess we'll have to we'll have to see how that goes but i
[00:37:26]  think it i think i agree it's it's more like microservices versus monoliths is a better framing for it because i think what it's one of those we're
[00:37:34]  back at a point where like give me some more simplicity stuff's too complicated because microservices are complicated and essentially everyone building an app was like screw it like i don't
[00:37:46]  need to make an api server for a while that was the common knowledge because you're like i have a mobile app and have a web app i don't know what's
[00:37:54]  changed on that side because that still seems like a real thing but um essentially i think the web right now is over i don't know what the term is but like there
[00:38:07] 's a specific term for this like over betting on simplification like this is a good sign though this means we're at the point of a pivot or a change like you always
[00:38:16]  take one step back before two steps forward we're at the one step back right now so um i'm hoping this reveals new better patterns over time yeah see this this is
[00:38:39]  this is a great question i've never worked with solid js so i've seen around i still know what it solves other than blah blah blah blah don't what makes it stand
[00:38:51]  out and the thing is what makes it stand out isn't like a feature that's going to jump out at you necessarily like i think this is this is the problem or
[00:39:03]  the challenge here right and i don't want to sit here and talk of performance all day because it's hard to sell performance i don't think selling performance is actually great
[00:39:13]  thing to do like it's a side effect but it's not like what you sell so it's not about it's not what what does it solve that others don't it
[00:39:25]  doesn't solve any new problems per se it changes fundamentally i mean it changes fundamentally how it mechanically works in a way that lets us move towards new spaces to solve new
[00:39:44]  types of problems that we haven't seen yet it doesn't i don't like there's there's two types of things that new technologies tend to do right they either like
[00:39:54]  make something that already exists better um or they um enable a whole new way of doing things i think the technology behind solid does both but without having the ability to invest and like
[00:40:08]  get deep into the to the and how entrenched the ecosystem is and basically the way that the ecosystem literally looks at the current state of things and says that's the standard like
[00:40:18]  you can come up with the craziest new technology that's great groundbreaking and everyone will ignore it unless react does it um partial hydration comes to mind streaming comes to mind these technologies
[00:40:30]  have been around for years and years and it basic like seeing how marco was treated and seeing like react point the arrow and suddenly even hooks like pointing it back to fine-
[00:40:41] grained reactivity we had hooks like essentially years before reacted but it you know it takes a big player to push so pushing the the the new stuff is incredibly hard and
[00:40:53]  usually pretty much fruitless so people focus on solid on how it just makes everything better currently you know by being slightly architected but the problem with that is that's a focus
[00:41:03]  on like small changes like that's a focus on like um that's like oh it's a incremental 10 improvement but that's not the benefit you get of get of going
[00:41:14]  with solid it's the potential of removing the change model from the component model changing the architecture in such a way that we can decouple these things that have been constraining
[00:41:23]  us um in many ways over the last few years right both in scale performance but also just in the way we author and think about how we should you know manage updates in
[00:41:36]  our code reactivity is the secret behind almost all new development going on in the partial hydration space you know fine grade reactivity is like it's it's the thing that driving
[00:41:47]  it solids renderer happens to be the most furthest on the path on the rendering side and that's why you're seeing benefits against like the way we currently do rendering but
[00:41:57]  if you look in other avenues this technology can be applied and have you know big benefits there as well like that's the change that's happening right the world beyond components as
[00:42:07]  i was calling in my talks um this isn't so it's not going to be like a single feature because it's it's it's it's more of a uh a
[00:42:15]  change of the like underlying way we do things i don't know hopefully that answer makes some sense it's big enough to be influencing and changing the way lots of frameworks are
[00:42:30]  changing what they're doing how are we doing here right i mean we we have a lot of wonderful tools for developing but a lot of like cooking recipe for it yeah yeah
[00:42:56]  this is why i was talking about education but it's also just simply the fact that like velocity is more important ultimately you're delivering your product so even if i told you that
[00:43:04]  solid changes the fundamental building blocks underneath in a way that lets us build into the future like yeah no that was awesome to see anthio stream primogen saying he used solid
[00:43:15] js in his day job primogen works at netflix so i don't know what that means yet but i don't know what that means yet but i guess we'll
[00:43:22]  find out yeah no that was awesome to see anthio stream primogen saying he used solidjs in his day job primogen works at netflix so i don't know what
[00:43:42]  that means yet but i guess we'll find out it starts small. Angular dev asking about stuff like, here's the thing, I don't know enough about Angular's
[00:44:12]  ecosystem to be able to answer these kind of questions. I think SSR is an interesting area on Angular, and we'll be sure to ask Mingo about it a
[00:44:22]  little bit because I don't really understand the SSR story. I've made a few comments in the past when people have been critical of single page apps and SSR,
[00:44:31]  and I found out that I was wrong because I didn't take into account Angular. So this is a gap for me and something that we should ask Mingo when he's
[00:44:40]  here. All right, I'm just catching up. The chat is so much further ahead than I am. This is why Theo doesn't read chat anymore. He just
[00:45:01]  skims over it. I don't even have to say probably. It's not the best back-end language. The problem is JavaScript is the best way to optimize
[00:45:09]  for the client right now, especially with hydration and that whole stuff. And then it's just like, oh, let's see. Yeah, let's see. Let's
[00:45:16]  see. Let's see. Let's see. Let's see. Let's see. Let's see. Let's see. Let's see
[00:46:46] . Let's see. Let's see. Let's see. I've definitely missed out. There's a lot of really smart people who work in Angular and this blind
[00:46:58]  spot. Like, Michiko gave his first resumability talk, you know, that led to Quick back in 2019 and at an ng-conf. I feel like
[00:47:09]  if I had seen that or the Marco guys had seen that, things were very different. It took us a whole other year to discover resumability on our own independently.
[00:47:20]  Like, we hadn't seen Wiz and we kind of just had to, like, look at what we've done at eBay. And Michael Rawlings is kind of, you
[00:47:28]  know, genius and he landed on it, but that might have never happened. And so, like, I think that, I think that, for me at least,
[00:47:41]  there's value. And I think for people who want to get to work, there's value. So, there might be other value there as well. I just don't
[00:47:51]  know about it. But, yeah. See? Sweet. People using Solid at Work. That's awesome. That makes me happy. Yeah. I think you need
[00:48:21] , like, a pretty advanced example to be able to show stuff side by side. I saw a talk when I was at Modern Front Ends and the other Solid Talk there
[00:48:32] . And I was sitting there with Chris from Create T3 app and he was like, man, I love that presentation. He's like, it felt like when you watch
[00:48:43]  a comedian that's completely deadpan. Because, like, he's like, I was waiting for the punchline the whole talk. Because he went and he built this
[00:48:52]  Solid app. But he didn't, like, he highlighted some of the benefits of Solid, but he didn't go too far. He's just like, I'm just
[00:48:57]  going to build an app. Just use JSX and Solid and just do it. And everyone was, like, expecting to see some, like, big difference or thing.
[00:49:05]  And the app just was so easy, so fast, just felt really natural the way it was written. That it was like, you know, like, where's the
[00:49:12]  punchline? And it was like, no, no, it just, it just worked. And it was, like, there was nothing to it. It wasn't complicated
[00:49:19] . It was just, like, exactly the way it worked, the way you would think it would work. And, you know, there was no weirdness around,
[00:49:27]  like, hooks or memos or, like, there was none about it. It just wrote it. And it felt like React because of the JSX and stuff. And
[00:49:35]  it was, it was just so funny because, like, he's like, man, I love that. Like, he's, you didn't even have to sell me
[00:49:40]  on it. Just, like, walking through it. And I'm like, man, that's a gamble. Like, I don't feel like I could give that
[00:49:45]  talk or presentation. But it was, it definitely felt like, like, kind of funny to see it from someone who's, like, very in the next community, being
[00:49:54]  one of the maintainers that create T3 app. So, yeah, you're on Windows, aren't you? Yeah, sorry. There's some path resolution issues
[00:50:17]  on Windows. Windows is tricky because none of the developers develop on Windows. And then it's, like, there's, like, you don't convert a path in one
[00:50:27]  place and then the whole app breaks on Windows. So, yeah, this is why Solstarts still in beta Windows. Sorry, like, I'm actually half serious
[00:50:37] , but. All right, let me look over at Twitch. It's funny, I'm, like, catching up on stuff here. Oh, wow, I got a
[00:50:49]  bunch of GIF subs on Twitch. Thank you so much, BeWoody. This is why I usually follow the StreamYard chat so that I can, like,
[00:50:58]  see YouTube and, uh, it at the same time. But, uh, I pop over to Twitch every once in a while to see what's going on. And
[00:51:06]  thank you so much for those subs. Um, this has been really cool. I need to figure out how to engage on the Twitch side of stuff a lot better, you
[00:51:13]  know, in the future. in the future. I'm sorry. Yeah, what do we got here? Yeah, sorry, it was clear. It's definitely
[00:51:35]  a bug. Um, there, there's a path issue on Windows with spaces. I'm sorry. Um, uh, what's effective stream on benchmarks? Um,
[00:51:44]  yeah, yeah, no, we, we actually showed that Lighthouse doesn't benefit from streaming. Like they, they put like a fixed, like if something, they
[00:51:58]  basically put the load time of everything up to a certain point. And then like, like if, like if you go over it, then it's more expensive. It
[00:52:08]  basically, it's almost like putting a, like a compressor or limiter on, on, um, on audio. It's like, that's how Lighthouse works.
[00:52:15]  So it basically hides the expense on the server. So streaming never shows up. And in fact, it shows up as a negative because out of order streaming actually requires some like
[00:52:24]  DOM operations to move them into place. So like, it's kind of frustrating. Cause you, when you go to like a webpage speed or whatever, like the thing where
[00:52:31]  they do the timelines, you can see streaming having a benefit. Like it definitely has a benefit, but like Lighthouse doesn't reward you for streaming at all. In
[00:52:37]  fact, it punishes you. So it's, it's, it's actually really annoying. And it's why Ryan Florence for the longest time said, Oh, streaming
[00:52:43] , I don't see the point. He's looking at Lighthouse and Lighthouse. Like, as I said, we actually wrote an article on, um, uh,
[00:52:49]  the Marco team where we actually like showed and we looked at the docs and like it, it, it actually, I should try and find that. Like it basically showed that
[00:52:57]  Lighthouse basically just, it works in a way that streaming doesn't get any kind of benefit for the scoring, which is really unfortunate because you get a way better user experience
[00:53:06] . Yeah. Yeah. I mean, I'd be interested to see, I think Rx is tricky. I've been, I, I, if you didn't
[00:53:14]  see it, um, there was a great article about, um, Rx, um, and, uh, where was it? Uh, where was it? It
[00:53:28]  was, uh, Mike, uh, Pearson. Do, do, do, do, do. Where am I? Go to my profile. Um, last week. And
[00:53:38]  I, I think, I think it pretty much, I don't know. Yeah. Mike Pearson. Here we are. Um, I, I, I don't
[00:53:46]  know too much about the angular specifics here, but I definitely think reading it, everything you said made complete sense to me. So I, I, most the Rx
[00:53:54]  is really good at certain things and not as good at other things. So I, I'm, I'm, I'm interested to talk to the angular guys when like
[00:54:02]  signals get a little bit further along in progress. And I'm probably going to bring, I've been talking very closely with a few of the angular team about signals. Um
[00:54:09] , I'm going to bring one of them on, uh, in a month or two or whenever they, they're at a good place to share what they've been working
[00:54:16]  on. I have a really good discussion about that. Do you think classroom? No, I don't. I mean, classes have their place and they, they're
[00:54:28]  actually beneficial in some places. Um, like it's mostly just that, like, yeah, I mean, it's a tricky one because like a lot of the times we
[00:54:44] , we prefer non-class based arguments. Um, non-class based architectures and that might be because classes are awkward and also might be because it's not trendy
[00:54:50]  to do OOP. Okay. All right. All right. So, yeah, I, I think, I think that, uh, I think it's interesting, but
[00:55:05]  yeah, we're almost at time here for, uh, for Minko to join the stream with us. So I'm just going to see if I can answer
[00:55:11]  any last questions before we switch gears here. Um, desert creatures that are suspicious when things simple work on first try. Uh, maybe, maybe that's why they're suspicious
[00:55:23]  as felt as well. Um, yeah, I, when I developed on windows, I developed on windows actually until 2019. So I was all WSL. S
[00:55:36] velte kit does not, uh, Rich has talked about adding it in the future, but it is Svelte kit is mostly like remix and all that kind of stuff
[00:55:52] . Um, so nothing too fancy there. Um, but I, I never count Svelte and Rich out. Um, they, they, they, they are
[00:56:04]  masters at delivering developer experience. So it'll be interesting to see where they go here. Um, I, I want to learn angular the right way. So do I
[00:56:16] , I, I think that's what we're going to do. We're going to do here in a minute, honestly, perspective. I think angular has a very
[00:56:28]  long history. And as I said earlier, has lived through all the changes and the opinions and the fashion, you know, that's gone over the last few years. Um
[00:56:38] , and it's still here. So like, I think there's a lot of learning from people who have worked in the trenches, understand that evolution in a way that when
[00:56:50]  you just jump on the new thing, you miss out on it. It's, it's a lot harder to not be that and actually figure out how to, where
[00:56:56]  that fits in your model and your world of things. I think it gives a much wider perspective. And I think that's what this is much more interesting. And I'm
[00:57:03]  glad to hear the angular docs are good. Okay. Anyway, let's, let's, let's, let's switch this around. I, I enjoyed answering your questions
[00:57:10] . I didn't actually talk that much about the other stuff that we could have talked about on stream, like league of legends. This, this was a popular option as well
[00:57:17] , but I'm, I'm, I'm unfortunately not too familiar with video games. And instead let's switch this around and give me two seconds here. I'm
[00:57:24]  going to throw this in. Um, but we are going to get started on the main content of our, of our stream today. Um, so let me get that going
[00:57:37]  and let's, uh, welcome Minko onto the stream here. Hello, how are you doing today? Hello, great. How are you doing? I'm
[00:57:46]  doing pretty good. I, uh, I, I, I would, I start my stream, uh, at noon on Friday. So I was able to just, uh
[00:57:52] , go through chat and answer a bunch of random questions. A lot of interest about angular, which I admit, I told them I did not know very much about, which
[00:58:00]  is the point of the stream today, but, um, definitely excited to have you here and learn all about that. Um, sure. How about you introduce yourself and
[00:58:09] , uh, you know, tell us a bit about yourself and your involvement in the angular project. Sure. Yeah. Currently. I, I guess I've been involved
[00:58:18]  in the open source community for over 10 years now doing different things on GitHub. Originally they were mostly focused on angular, um, around style guides, tools for static code analysis
[00:58:30] . And eventually I joined Google. I was, uh, also doing work around static analysis in go, uh, trying to experiment with the predictive prefetching space.
[00:58:39]  Um, now, uh, at Google, I am involved in both angular and whiz, primarily working on angular and figuring out how we can make, how we can enable
[00:58:52]  innovation in both products. Uh, interesting. So the, I don't know if this is a new thing. I know whiz has existed at Google for several years,
[00:59:00]  but I didn't realize that there was a close connection between angular and whiz. Is this a newer thing or how? We're sibling teams. Okay. Yeah.
[00:59:10]  No, but I, for those who don't know about whiz, it's an internal framework used by Google on stuff like Google search and Google photos. Would, would
[00:59:17]  you like to add anything to that? Uh, like what whiz is? Sure. Yeah. I guess it's a framework that has been around for close to 10 years
[00:59:26]  now. And, uh, it serves really well the performance use case. It is really well optimized for fast server side rendering. And, uh, It's interactive.
[00:59:39]  Yeah. Because, uh, it's like, there are very different. Like there, there is, there are a lot of different terminologies used for what happens after server
[00:59:47]  side rendering internally. We use one thing like Mishko is making popular with quick busy mobility, but that's pretty much the concept. Right. Yeah. So this
[00:59:55] , this was the framework that influenced, um, Mishko to go in the direction needed with quick. Um, but yeah, that's, that's cool to see
[01:00:02]  that the, the teams, you know, communicate and that they're like, as you said, sibling teams. That's, that's pretty awesome to hear, but yeah
[01:00:09] . Um, angular, as mentioned to some of the people on chat, um, is been like the framework that's eluded me to this point. Largely
[01:00:17] , I, I've been doing web dev since, uh, I don't know, like, uh, God, I can't, I, I was building band websites
[01:00:26]  in 1997 when I was in music, but then like professionally, I guess I got my first web job job in 2006 or something. Like there wasn't just like some
[01:00:35]  contract website and I was like very much in a.net house and then they introduced me to knockout. So it was very lightweight, like updating ASP backend type stuff
[01:00:44] . And then like, next thing I know I was kind of like on this reactivity path and I just never actually went to like, you know, react got popular.
[01:00:53]  And I just never actually like everything was these like smaller libraries. I never actually, I went like jQuery knockout, um, kind of react, but mostly still
[01:01:01]  knockout to solid. I, I, I basically never went into like, I did a few projects in Ember, but that was like, I never, I never
[01:01:08]  did a proper framework. So to speak. I don't know if angular is what we'd call a proper framework, but I just try not. Yeah. Maybe you can
[01:01:16]  help me understand how, like where, how, like, you know, the library versus framework thing. Like what makes angular framework? Yeah. Like I see how probably
[01:01:25]  around 2012, our path crossed a little bit. I was building a lot of, I was building a UI components with jQuery. Um, that was my job. Right
[01:01:36] . That's, um, at high school competitions I was using. I just wanted to write everything myself. So I was not using jQuery. I was implementing back then
[01:01:44]  XMHTP requests, uh, using like different fallbacks and so on and so forth. Uh, and after that I took the angular JS path. Right.
[01:01:53]  Uh, and he took the knockout path. And from there, react. I got a brief switch to react when I was working on my startup. But, uh,
[01:02:01]  I still kept contributing to angular in my spare time, angular JS and angular afterwards. Right. Right. So were you around for the angular JS to angular migration or was that
[01:02:12]  around when you got into it or just out of curiosity? I was actually working with react by then working on my startup. Right. And in the meantime, I was
[01:02:20]  working on a book for angular, which was my technical reviewer. That was actually kind of like a dream come true back then. Uh, that was back in 2014,
[01:02:29]  2015. And clearly angular, there was no documentation at that point. Uh, so, uh, that's how I'm involved in contributing to the framework as well.
[01:02:39]  Just reading the source code, finding to do comments, adding like, uh, I don't know, flattening to some provider arrays in the dependency injection or whatever I found
[01:02:49]  potentially helpful. And, uh, kept contributing. Yeah. A bunch of tools. And that's how I ended up in 2018 joining the team. Okay. So it
[01:03:01]  was 2018 when you joined the, the actual team at Google on angular. Yeah. Got you. Okay. So it's, it's been, uh, four years now
[01:03:09] , I guess, roughly. Yeah. Um, interesting cause I, my understanding cause maybe it's just cause, um, you're the one who reached out to me
[01:03:19]  when I like came and spoke with the, for the folks, um, the angular team at Google. Um, what do you do on the team these days? Yeah.
[01:03:28]  I joined region. I really, so in my spare time, I was writing open source. I was blogging a lot and speaking at conferences. It was a lot of
[01:03:35]  fun and I wanted to continue doing that when I joined Google. So I joined in developer relations first and like leading developer relations. And now I've been interested in getting
[01:03:45]  a little bit, like more like holistic viewer over what's angular is and the direction we should be heading to. So I'm doing more mostly product work. Just figuring,
[01:03:58]  yeah, just product roadmap, talking to people, seeing what they need and figuring out how we can work together with the rest of the team to solve these problems. Gotcha
[01:04:09] . Yeah. Yeah. That's, that's interesting. Cause like people don't realize this all the time that like frameworks are products still. Like they are like, even
[01:04:16]  if they're like dev tools, right? Like they're, they're in a space where the end user isn't actually the ultimate customer, but they're other developers.
[01:04:23]  So there, there's a real, there's a real product there. Prioritization, real matter of like going out there, doing user research, which is developer research
[01:04:34] , I guess, in a sense. Yeah. That's interesting. Like to actually have resources to do that. Sorry. It's from my perspective, I, you
[01:04:41]  know, we, a bunch of volunteers, but to actually like have it formalized like that. And that's cause the angular is a, you know, it's a
[01:04:48]  machine. Like how, just roughly for people, how many people work on like the angular team at Google just to kind of get an idea. Yeah. About 25 people
[01:04:56] . 25. Okay. Yeah. Okay. So it's smaller than the flutter team. Oh yeah. Yeah. I'm sorry about that. That was just like,
[01:05:05]  whenever I talk to someone from around angular or Google, they make some kind of comment about flutter or dart and it's all good. It's all good. Yeah
[01:05:13] . Yeah. Yeah. Flutter is targeting a lot of platforms and kind of like the more kind of like a difference. Partline for application development. Their web is mostly
[01:05:25]  a medium for you to get your application rather than using the web platform to develop it. If this makes sense, it's more of a medium to get the executable
[01:05:38] . Right. Right. Yeah. You know, I, I, I, I did try and play with it a bit cause I want like benchmark it for the web.
[01:05:43]  And then I realized like it was just its own complete world. Like I couldn't even figure out how to make it generate the same HTML that I would want to benchmark against
[01:05:52] . And I was just like, okay, I'm just going to leave this countless. Yeah. So yeah. You know, because I, I think the right way to
[01:05:59]  do it for web is canvas. And I was trying to see what the flutter like non canvas one is. And then basically everything that I saw was like, just
[01:06:07]  don't do that. Just flutter is an app rendering engine, like thing you'd like view it. Like it's like a canvas thing. So I moved on.
[01:06:14]  It's fine. Sorry. I didn't mean to go into flutter. It's just, it was just in terms of, I, I, I always hear like
[01:06:20]  the off comment and I was just like, it was, it was just kind of funny, but okay. So about 25 people that's, that's cool. And
[01:06:26]  then I guess the whiz team's got another couple handfuls or people to working on it too. Yeah. Pretty similar teams. Yeah. Yeah. So no, that
[01:06:35] 's, that's cool. Okay. That gives me the kind of perspective of like with the court angular. Cause like, I know there's a angular's huge, like
[01:06:43]  network of thing. One of the things I just want to mention to you, cause I was at NG Conf in Poland, you know, because there's a JS
[01:06:49]  Conf that I was talking there. I was incredibly impressed by the GDE and the GDE program. I'd only really gone to react conferences and I know there's
[01:07:00]  like GDs that come and talk at those, but the difference in atmosphere and positive vibe that came from that whole program and how, you know, speakers and everyone approaches
[01:07:11]  what they do. I don't know. It was amazing. I think, I think that's a real success for Google. And in so because a lot of the
[01:07:16]  GDs are actually angular experts as well, like a huge win for angular and its community. Um, cause there, there's some comments here where people are joking in
[01:07:24]  the chat about, you know, angular being dead or this or that. I'm like, you there, you, you go to an angular conference, obviously in the founder
[01:07:32] , but I, I think the vibe is more pro angular than when you go to a react conference and if the react devs at a react conference, I, I think
[01:07:42]  angular has built a community. That is very, um, like, I think the GDE program is a huge part of that. I think the advocates and the system
[01:07:51]  there is, is amazing. Um, I don't know. I just, that was my comment. Cause I came into both ecosystems a bit from the outside and I was
[01:07:59]  blown away. Um, but by the NG con, uh, community, um, when I was at the conference. Yeah. Yeah. I see some comments. Actually
[01:08:07] , we did a like pretty bad job with branding. Uh, I see a lot of comments about anger being dead. And I don't blame people. It's confusing
[01:08:15] . Like we have angular JS. Yeah. Uh, which was the framework that originally started working with back in 2011 or 2012. And at a certain point, the team saw
[01:08:24]  that anger just doesn't scale too well in terms of performance or like the application size. Uh, and, uh, developed angular. And the difference between anger just and
[01:08:34]  angular naming place. Why? So just like the jazz to fix. And the difference in the logo is just that angular doesn't have a border around. And that's not
[01:08:44]  a very obvious difference. Browning wise though. Uh, when we discontinued angular JS. People got confused that we actually discontinued angular. Right. This is still
[01:08:55]  an ongoing issue that we're trying to somehow resolve. Um, yeah. Yeah. In fact, angular is more this newer framework compared to reacts looking at release dates.
[01:09:05]  Like release of 2016. Yeah. Yeah. No, for sure. And that was a big jump. Yeah. I mentioned it earlier about the angular JS to angular jump
[01:09:14] , but it, I can understand why the decisions are made at that point that way. Cause the thing is like, you want to, you want to like, like it
[01:09:22]  was, it wasn't even angular. Like when it came out after angular JS, it started from version 2.0, right? Like it was the idea that this was
[01:09:30]  a continuation and that the migration path was a happy one. And I, when I talked to Mishko sometimes, he's still very, very proud of that migration path
[01:09:38]  to a certain degree. And I know that, I don't know how, maybe that worked. Yeah. It's an interesting one. I don't know. There
[01:09:46]  was a different perception, I guess, in a lot of parts of the outer community. And the timing was awkward because it was also the time. Like it was like the
[01:09:53]  perfect timing for when react also just happened to just show up at like the worst possible time, you know, just being like, Hey, if you're going to change all
[01:10:01]  this stuff, you know, maybe change all this stuff over here. But yeah, I think that you're right. There's a lot of confusion. I remember when
[01:10:08]  the angular JS, like there was an official announcement that it was like end of life or something or reaching there around 2019 or something. And people were very, very confused.
[01:10:16]  Yeah. Even years later. Yeah. We had confusion at Google. And I mean, we're a company building technology. So we're trying to work on this,
[01:10:26]  trying to control the perception. Yeah. Yeah. No. So, yeah, it's all good. I, as I said, the topic is an interesting one, but
[01:10:37]  what I really wanted to push out there was that the GDE program and what it's enabled people to do and speakers from all over the world to come together as a community
[01:10:46]  is an amazing thing. And it's, yeah, I think it's a big part of just the backbone of like the people and the angular community in general.
[01:10:57]  I think Google and GDE program has done amazing stuff. I would encourage you. Yeah. I would love to, like, if you want to visit the energy complex
[01:11:07]  here, I'm sure that there might be some topics that we can, that will be relevant for like for you and for your community. Uh, I would, I would
[01:11:15]  love to just have you join us there. It's, it has been really, really sweet event. Like I was, I spoke at this event for the first time
[01:11:25] , I think in 2015. Yeah. I'm originally not from the U S I'm from Bulgaria. Right. I didn't know anyone. I just, I've just
[01:11:33]  seen some friends like on GitHub. That's how I was making friends mostly. And I went to this event and like everyone was really sweet and welcome. I kind of
[01:11:40]  made more friends that I've managed to make in, in Bulgaria for like, let's say two years. I made them for like two days at ng-conf. Um
[01:11:48] , I, there is something around the community that a lot of people just did right. Uh, that's way before I joined Igor was doing a fantastic job. Uh,
[01:12:01]  Jeff has always been like an important part of it. And the whole ng-conf organizer team, they just set a really good tone on how people should be active.
[01:12:09]  at this event, being like friendly and, uh, and inclusive this. Yeah. Pretty. That's one of my favorite things. That's why I've been doing kang
[01:12:17] aroo for over 10 years now. Yeah, no, that's, that's awesome. And you do really see it. I mean, it is interesting. Cause yeah,
[01:12:23]  I was in ng-conf Poland. Um, but yeah, there's, there's a, there's a lot of, uh, Eastern European, uh, people of
[01:12:30] , of note in the angular team and, you know, both now and historically. Right. Um, so I, I, I guess there, there's a bit of
[01:12:37]  that. I, I hung out with Mishko like the whole time there. We were doing solid and quick talks and stuff. And, uh, he, he
[01:12:43]  just kept on trying to explain to me the nuance between the language differences and, and stuff between Slovak and Polish and, uh, and Czech. And, uh,
[01:12:52]  I, I just didn't realize like how much of the, uh, you said Bulgaria, like how much of the, uh, like the Eastern European, um, crew
[01:13:01] , uh, for angular, you know, is a, is a real thing. Um, but, uh, yeah, no, lots of fun. Um, anyways
[01:13:09] , uh, sorry. I did good on reminiscing on that. Um, but we, we probably should kind of turn this over a little bit. And I just want
[01:13:16]  to, I, I just want to like do a little bit of a get started, which probably as, as I mentioned is, uh, uh, oversimplification
[01:13:24]  of stuff compared to some of the cool topics we can talk about as well. Um, but I, I think for a lot of people on my stream, um,
[01:13:31]  a lot of react devs, uh, some people are familiar with solid, you know, maybe they've done some view angular for a lot of us has actually been a
[01:13:37]  bit of ending, but there are a lot of angular devs here. There's a higher proportion. I can see them all come out in the chat compared to a lot
[01:13:42]  of my normal streams. Um, but like, uh, I think it'd be interesting just to kind of look at this very beginner focus thing, because like, as I
[01:13:51]  said, the first thing you notice probably with angular coming in is it's not react. Um, and I think this is always interesting when you see frameworks because, um
[01:13:59] , they, how should I put it? Like if they came up at the same, like you could tell when frameworks have been inspired by react, even if they like,
[01:14:08]  they came out after react and, um, angular has a history that proceeds reacts. So even if there was some influence with the angular from angular JS, uh, like,
[01:14:19]  or like er, sorry. Even if there's influence angular from react, um, angular JS is like more of the direct path to it. So it means that a
[01:14:27]  lot of conventions and small things that are different, but are actually kind of the same, like without realizing it, you know, sometimes the language is different. They own terminology
[01:14:36] . So having that translation layer here could help me a little bit. I think, um, I'm just going to pop my screen open here and I think I got
[01:14:44]  to the right website. It was funny earlier. I searched angular and see, I have this, again, you talked about marketing. I have this terrible tendency. If you
[01:14:51] , if you look for solid, you can imagine you're not going to find like anything relevant to my framework. And, and this is, this is true for a
[01:15:00]  lot of stuff. So I, I, I have this tendency that I just do this, right? I'd go, okay, there, there are confining. Cause
[01:15:05]  like, if I'm looking for, I could pick something else remix. Okay. Well, and this one, this actually worked, but usually like in the past, I
[01:15:12] 've done the search. Usually I have to take JS on the end of everything that I did. So you can imagine what website I ended up when I looked up angular JS
[01:15:20] . Um, but I, I, I am now in the right website, I believe. Uh, I don't. Uh, I was looking at the, yeah
[01:15:28] , I guess also search might be able to kind of know that you're looking for JS things and kind of providing context aware results. Hopefully. Yeah, yeah, yeah.
[01:15:37]  I think it's improved over time, especially as like, like remix was well known. I know when I first looked up remix, it was definitely not the first results.
[01:15:43]  Um, but yeah. Okay. So deliver web apps with confidence triangular. Okay. This, this is okay. I'm just, okay. Okay. Okay. So
[01:15:55]  we, we got some stack blitz action happening right off, right off the bat here. I'm going to blow this up again. Maybe I should pop this out in
[01:16:02]  like a different window to kind of understand this. Let's, let's do this. Okay, cool. So welcome to angular. Um, you see this fine? Everyone
[01:16:13]  chat, you see if I may go. Yep. I see it. Well, yeah. Cool. Yeah. I just want to blow stuff up a little bit so
[01:16:21]  we can make sure. I think that this actually has a text preference thing too. Someone told me one time, um, workspace settings. Cause it's like VS code in
[01:16:30]  here. Um, uh, I can like text. Yeah. Okay. Fine. Someone from chat will correct me very quickly here. Okay. It doesn't matter.
[01:16:42]  Um, first question in chat. What is zone JS. Let's leave that for like two seconds before we get into zone JS. I, I just want to, I
[01:16:53]  just want to like, I'm a reactive. Oh, although actually, no, I guess I don't get to leave it for two seconds. It's literally the
[01:17:00]  first line important at the top of the file. Yeah. Uh, we'll, we'll get to that in two seconds though. I'm going to. Okay. Comp
[01:17:06] onent from angular. Makes sense. Um, this is a directive I'm gathering. So this, this is a decorator, sorry. This is a direct, a
[01:17:13]  decorator that decorates a class. Um, okay. And then we have a bootstrap application, which is our program entry point. I think I'm, I
[01:17:22] 'm doing okay so far. So, um. And I guess something that is slightly different here is the like equivalent of the render function. It doesn't accept a parent element
[01:17:34] . It's instead uses the selector of the bootstrap component. Oh, okay. So there's, there's always a single entry component. And then it
[01:17:44] , this is like a jQuery. Like this is like, there's a div somewhere. Yeah. Add, add. Oh, it's actually an, an element.
[01:17:52]  Interesting. But it could be any selector, right? I could do like div and like put an ID on it. And this would still work. Yeah. There are
[01:17:58]  some constraints. We're doing the depend, the selector matching at build time. So there are some constraints. Like we're not going too crazy, but, uh,
[01:18:06]  we support like basic selectors. Yeah. Okay. Yeah. So interesting. Yeah. Cause the first thing I saw here, I was like, oh no, no
[01:18:14]  web components are coming to get us. Um, but no, this is just a, this is like just an unknown element or whatever, you know, uh, from the
[01:18:22]  dom perspective. Um, all right. And then, so I see, so yeah, no, no mount point. It's just, this is the select, this
[01:18:30]  is the selector standalone. I heard about this is like new, what, like angular 15 thing, standalone components. Is this a good place to start with standalone components?
[01:18:38]  Like, is this the future moving forward? Yeah. Okay, cool. So I probably won't have to learn about a whole bunch of stuff that already exists. I
[01:18:44]  don't need to worry about. Okay. Um, yeah, I, I might ask you about that in a minute and then template. This is fine. We have
[01:18:53]  a tag literal that's giving us, um, some HTML string with some syntax. That's specific. I know I recognize double curly braces as being, uh, like a
[01:19:05]  insert, like, uh, being like a interpolation point. I've seen that in several frameworks. This must be a shorthand for events. Yeah. Okay.
[01:19:16]  Okay. I mean, I, I, I'm following there. That's, that's, that makes sense. Um, I do have a question though. I
[01:19:23] , just cause I, this is actually fairly different from my world here. Um, I understand that this counter is doing count plus one. Um, and we have a working
[01:19:33]  counter where, where is the event object? I'm just, because I'm so accustomed to these being functions. Yeah. Is, is it, if I wanted to access
[01:19:44]  the event object, is there a way of doing that? Like, yeah, the event object is a dollar event. Gotcha. Okay. So yeah, this, okay
[01:19:54] . Yeah. I'm trying to think back. Cause like knockout was like this too. There's like a few special arguments or properties that live within the binding scopes
[01:20:01] . Okay. Yeah. And, uh, so this here is not necessarily an expression that returns a function. The function is this kind of, this is kind of a statement
[01:20:10] , I guess. Right. The event handler here is a statement and, uh, it could be a function to which you can pass dollar event or it could be just
[01:20:19]  this like side effect statement here. Right. You can always hoist it out. I was just kind of interested. Like if like there's, there's, there
[01:20:27]  isn't a syntax like this. Right. Like. Yeah. Yeah. Yeah. It's kind of inclusive, I guess. Right. Exactly. Okay. Gotcha. Okay
[01:20:38] . Let's see. Can I do something like just go increment and then like do what this dot count. I'm just guessing here. Is this. Yeah, exactly
[01:20:52] . Equals this dot count plus one. And then if I wanted to use this, could I, could I replace this with something like increment? Um, it needs to
[01:21:06]  be a function call. Oh, right. Cause it's not a function. Right. It's an expression. Yeah. Awesome. Okay. Right. And then what
[01:21:15]  you're saying is we can also forward the event through like this. Yeah. And then TypeScript is complaining at me properly. And then, I mean, I, I
[01:21:24] , I don't really know. Console.log event. I don't know. Uh, whatever. Let's console.log the event. Point or event. Perfect
[01:21:39] . Yeah. And that's kind of magical. Actually, actually, I would say that's like a pretty simple like developer experience to get started with because you don't have
[01:21:48]  to explicitly set the state anywhere. Um, it just works. Right. But it comes with its trade offs. Yeah. Which. Yeah. This is why I started
[01:21:58]  here because, um, I think from a syntax standpoint, this makes sense to everyone. Uh, I'm hoping, uh, we'll see how chat's doing on
[01:22:06]  this so far, but essentially we have a class. Um, and the class kind of tells the shape of our state and our methods and things we can do with it.
[01:22:19]  And then we decorate it with component that says, Hey, this is a component that it mounts here. Um, and this gets a standalone. Um, and this is
[01:22:28]  its template. This is its render function. If you're thinking old school react, like this is, this is the render function. What's interesting is, yeah,
[01:22:36]  this is just like straight up mutation. Like, like people are like the first, the first thing people are going to go is like, is this reactive? Like, you
[01:22:46]  know what I mean? Cause like, at least for my audience, they're like, Oh, they must be using a proxy and detecting change in that. And I I
[01:22:53] 'm gathering the answer to that is no. Yeah. We're not using proxies at all. I mean, very much also depends on, on the definition of reactive
[01:23:00] , I guess. That's something I got like in a, in a conversation with like Mishko on Twitter, like recently, because just kind of propagation of changes
[01:23:11] . That's what to me reactive means and how you're going to do that. It just, it's kind of a matter of like syntax and it has some semant
[01:23:18] ical difference. So it has some trade-offs. This is completely, this, this is, I'll say it's reactive. Yes. Um, and, uh,
[01:23:27]  yeah, the way it works, I mean, I don't know also how much time we have. I can, we can go in depth, but want to also
[01:23:32] , and also I don't want to, I don't know how much more in, how much in depth we need to go here. Yeah. I mean, we,
[01:23:40]  we can go a little bit more. The, the, my stream is generally pretty advanced. This is okay. They, they might not know angular, but we do fairly
[01:23:49]  advanced topics. I think, I think, I think we, I think we need to take this at least a, uh, another level or so, uh, deeper
[01:23:58]  here. Cause okay. So yes. Uh, in terms of the term reactive. Yes, I agree. Generally. I'm not going to differentiate often when I'm
[01:24:05]  talking like about the solid or use type reactivity. I like, Oh, this is fine grained reactivity. Or like, I try and give it a specific title
[01:24:11] . And I'm also, I wrote a whole article about how, you know, I, you know, if someone tells you react, isn't reactive, like it really
[01:24:19]  doesn't matter. Like I actually wrote, wrote that article, um, because, because people were like really differentiating on. I'm like, I hate to tell
[01:24:26]  it to tell you guys, but in a lot of ways, uh, Svelte and react are really, really similar. Yeah. Um, and that's not that
[01:24:34] , that's something like my, my, my, this chat, you know, this stream people generally are actually familiar with that fact. So we've gotten that low.
[01:24:41]  So can, can you, I, and maybe, maybe, maybe I'll pull up my Excalibur so I can try and draw or talk about it as
[01:24:48]  we talk just so that I can like visualize it. Um, but can, can you, I'm gathering this is, are we going to talk about zone? Like,
[01:24:57]  like, how is it possible that without a proxy or without any of this, we know that when you update this count, um, like, okay. Like, like
[01:25:09] , do I believe you like I just, I can console log this, you know, like, let's just like, what are we dealing with here? I, I
[01:25:15] , I wanna, I wanna, I wanna see what this is. What is this? Yeah. Yeah. This is, this is just a class. Um, okay.
[01:25:24]  So yeah, but I just wanted to, you could tell when something's a proxy, it looks completely different. Yeah. That's something that I'm really happy with that
[01:25:31] . It's not a proxy because it just acts the way that you would expect it to act. It's just like a property of type number and that's it.
[01:25:38]  All right. Like if, for people who don't know, like, look, I'm just gonna do like a, oh, it's TypeScript. Right. Um
[01:25:44] , let's. But if I, if I make a proxy here and I console log it, um, no, it's not showing me. Maybe, maybe, maybe
[01:25:52] , maybe, maybe here. Okay. You see where you, this is what it usually looks like. You see like target prototype handler. This is a handler object.
[01:26:01]  Like this is the proxy. There's a bit of indirection. If, if I go back to, to console logging this, and I press this button, it
[01:26:11] 's still just that class. Um, so yeah, I important, important note. Okay. Done with my side wine. Let's, let's talk a bit about
[01:26:21]  what's actually happening here. Yeah. So. Zone dress, um, let's say, um, let's see. So ideally what we would like to do is
[01:26:31]  after what anger generally does is after any, anything that can happen in the browser that might have mutated the state in your application. We run in detection and change detection is
[01:26:44]  traversal of the component tree. And we check whether any of the binding has changed. And if any of the binding has changed in any of the components, we just update
[01:26:52]  the corresponding, like the associated view. Okay. Okay. So when you say when anything in the browser could change examples of that would be any event, um, like
[01:27:03]  browser event, what, what other, um, is there other types of things? Yeah. Uh, I mean, any callback or if a promise, I mean,
[01:27:12]  yeah, this includes. Okay. So like, so like set interval. Yeah. Like, uh, something you can do is, uh, you can have like, uh
[01:27:19] , in, in your, you can delete this, uh, or you can keep it actually. And you can create like, uh, just add the controller out the
[01:27:27]  constructor in the constructor. You can add set interval. Not that it's like a good idea to do that in production cover just as an experiment. Okay. I'm,
[01:27:36]  I'm in. I, uh, okay. I have a constructor and I can do set interval and I can go, uh, let's yeah, let's just
[01:27:46]  do this. Let's just make our counter go every second on its own. Right. This is, uh, yeah. Yeah. And this will close over the right
[01:27:56] . This. Okay. That's right. Um, yeah, there we go. We have our self-incrementing counter. Yeah. So we are assuming that you
[01:28:04]  can update the states in any of your components that you have bound to like pretty much anywhere. How? Sorry. Okay. Yeah. Not, not like. Yeah.
[01:28:17]  Yeah. Yeah. That's, that's a trick here. Yeah. Like, like, yeah. Cause I mean, I know enough JavaScript to be like, what's
[01:28:27]  going on here. Okay. Okay. Okay. Sweet. Okay. So it is patched. Yeah. Okay. Okay. So, cause I'm like, I didn
[01:28:38] 't do anything. I didn't import anything. I didn't, I didn't, I didn't patch it, but you, you patched it. Yeah. Yeah
[01:28:44] . And by patching all the asynchronous APIs, kind of angular can not angular, but zone.js that's, that's the power of zone.js. It
[01:28:52]  can plug into the browser's event loop and invoke change detection when it makes sense. And we have decided to invoke change detection when the microtask queue is empty. So
[01:29:02]  every time when the microtask queue is empty, we run change detection over the entire component tree. Man. Who came up with this crazy thing? That's, that
[01:29:12] 's, that's insanely. Like you think like that's an ambitious project to, I know zone's been around for years and years and years and years. That,
[01:29:18]  that feels like something very ambitious. Was zone always there right from like angular.js, original, original like days? Like, is this helpful? You know, in
[01:29:27]  the original days, you have to call change detection sometimes manually. And I guess the team when they were designing Angular, Angular, they did not want to do that. So
[01:29:36]  they decided to. Okay. Okay. Put into the events into the browser's event loop. Yeah. So like I was saying earlier before you joined the stream that Angular
[01:29:45]  is very pull based in a sense. The original, original version was literally like, almost like pull for changes. Yeah. This is very similar. Just the trigger of the
[01:29:56]  change detection is different. No, not, not always different, but like, yeah. Yeah. Yeah. Yeah. Yeah. Okay. Yeah. I mean, but
[01:30:09]  I mean, that this is more ideal in the sense that like, you, you, you know, something's changed, so you should always be able to cue it.
[01:30:13]  Right. That, that, that, that, that, that's the idea here. And, oh man, that's, that's, that's interesting stuff.
[01:30:18]  So, okay. So patching all the timers, all the event listeners, all, all that kind of stuff somehow in this magic zone JS file. So,
[01:30:32]  um, and then any time that happens, let the queue run itself out because, and then go, hey, has, wait, okay, wait, wait, wait,
[01:30:45]  wait, wait, wait, wait. There must be like a really quick check to know, like, if anything has changed, like if you should dirty check at all.
[01:30:52]  Cause like, if, if like, like what if I didn't update the account and set interval? Like. Uh, it's still going to check. Yeah.
[01:31:01]  Okay. But like, is it gonna check the whole component tree? Yeah. Okay. Okay. All right. Yeah. And, uh, so yeah, so we have
[01:31:10]  the, the, the micro task queue. Like, so we invoke one micro task, one micro task. I'll try to go to the micro task queue. We have
[01:31:16]  like the queue of micro tasks. We invoke all of them. And at the end of this, we plug a call to the anger exchange detection, where we traverse the whole
[01:31:24]  component tree. And for every single template, we check which binding has changed and have changed. And we update the corresponding part of the view. That's, that's
[01:31:33]  pretty much on a high level. And right. This to an extent, I mean, we can compare it a little bit to react because it's by default, it's
[01:31:41]  global. Like you have the whole, you can, you have the whole like component tree that you need to deal with. So there are ways to, to trim that
[01:31:49] , to like prune that tree in ways. Like you can make assumptions that in this part of the component tree, nothing has changed because this component depends only on its inputs
[01:31:57] . So we can completely forget about it. Right. Yeah. So they're like, it starts. Okay. Okay. Let me think here. Right. So. Huh
[01:32:09] ? Okay. A couple of questions there. Okay. First question. You say the bindings. So the thing that it walks over is actually, I mean, I
[01:32:19]  don't like these things. Yeah, exactly. Okay. So, cause it's like, it knows that the HTML is already there. So like, it doesn't have
[01:32:26]  to like do anything with the, like the button itself. Like it's no virtual DOM thing. It's like, we've already constructed the object. We've constructed
[01:32:33]  the bindings. So essentially we are, sorry, we have the DOM. Yeah. We have, I guess another tree of bindings of DOM to state connections. Yeah
[01:32:44] . And then those ones all have, are guarded by some kind of simple equality check I'm gathering in JavaScript. You probably don't want to read from the DOM I'm
[01:32:53]  gathering. Like you, you, you have like a data structure that sits in. Yeah. In JavaScript memory. And then when a change happens, the default behavior is
[01:33:03]  I'm going to go to the top of the tree and I'm going to go through and go, okay, have you changed? No change, change. Yes. Update
[01:33:12] . And then finish it. And then what you're saying, okay, the first level optimization here is you're like, okay, you get down there and you go there
[01:33:17]  and you get to component and you're like, oh, hey, component, have any of your props changed? Nope. You know, okay. Then don't worry about
[01:33:26]  it. I guess my, and then we can start the propagation, but I guess my question is, okay. Okay. I think I got it now. It's
[01:33:36]  because this count is tied. It is owned by the components. So if, if, if, if, even if the props don't change and that propagation stops top
[01:33:45]  down, something lower down could also have a state update and it can just start propagating from that, wherever that's classes where that state update is. state update is
[01:33:55] . Yeah. So, okay. So you don't have to, okay. If I'm just trying to get my head into this, but if, if you have like
[01:34:03]  a component tree, you know, like, and then you're the, my counter is like in a leaf node down here. Like I've moved my, this,
[01:34:10]  this button down somewhere low. Yeah. And then I press the button there. I don't have to run the whole tree. Cause it's basically starts from the comp
[01:34:19]  class that owns the count. Right. Kind of at certain, at certain points, since you can have a bind, like you can depend on some global objects and let's
[01:34:28]  say in the top level component, you have bound to a property of this. You have created a binding to a property of this global object. The leaf component can still update
[01:34:36]  this property. And then in order to reflect this change, we will have to perform global change detection. Right. Right. I was just trying to like, think of like
[01:34:44] , yeah, yeah. Yeah. Yeah. So if you have some kind of global state and the change. Yeah. I see. Yeah. It was more just.
[01:34:53]  Okay. Okay. Yeah. Yeah. Yeah. It's a run point. Yeah. You can make assumptions in your application. If you have like a, you're kind
[01:35:02]  of like, you say, okay, like I have really good understanding of where I'm mutating the state. So I can hint angular to not check this part of the
[01:35:06]  component tree, because it doesn't, it's not going to call such like global state update. I'm not going to update the state of this part of component tree,
[01:35:14]  unless like I pass new input. New proper. Okay. So there's some kind of annotation maybe. Yeah. Right. And for react developers, think react.mem
[01:35:23] o. I think I I'm making a parallel here. Like with react.memo, you can say, Hey, don't rerun some of these components.
[01:35:30]  Cause you, if this condition isn't met and you can, so you can kind of annotate it. If I'm understanding it. That's my understanding as well for
[01:35:37]  react in the past. It was like when react had the object and cloud-based component, they still have them. But like, it's going to be did components
[01:35:45]  update. I think should component update. Yeah. I'm getting it from the chat here. Yeah. Yeah. Yeah. Gotcha. Yeah. Yeah. Very similar to,
[01:35:55]  and, and something you, you are already, you already like started touching on was how the update happens. So anger has been having a compiler since early days. Yeah
[01:36:04] . And, uh, this template like in, so at compile time, we're going to generate some codes, like some instructions on how we're going to render the view
[01:36:13]  and detect for changes. So we generate two blocks. One of them is for rendering the template. And the other one is just for figuring out what changed in the bindings
[01:36:22]  and updating the view. Okay. Okay, cool. So the, is there, is there any way to see the compiled output? From this, like. Yeah.
[01:36:32]  Probably. I'm, I'm just curious. Uh, let me see if I can, I know it might not be terribly valuable for everyone, but yeah. And actually
[01:36:42] , sorry, just a second. Apparently I missed a whole bunch of gift subs from angular is the best, um, on Twitch. So we just got, I don't
[01:36:50]  know, was it 10 gift subs, um, from angular is the best. Um, thank you so much for, for, for, for subbing to the channel.
[01:36:59]  Um, yeah. So very, very awesome. All right. Um, but yeah, let, let me, let me get back to where I was, what I
[01:37:10]  was looking at here, which is seeing if I could, I'm just curious, cause this is such a simple component. I feel like if we wanted to find the
[01:37:18]  source code for just a moment, we could, and I realized that everyone, everyone's like, wait, this is a beginner angular comment, uh, uh, angular content
[01:37:26] , but this is, this is what beginner angular content looks for me. Um, yeah. So this is the difference. Once, once this was that, this was
[01:37:36]  the turning point. Once Minko agreed to join on, I was like, okay, man, this game on. Um, I, the tricky part is actually figuring
[01:37:44]  out, okay, this one's called GitHub HC, something, something, something. And that might not make it easier. Usually I can find this stuff pretty easily,
[01:37:55]  but it's not the, sometimes it's in the node domain preview flame. Here it is. I think. Yeah. Here we are. And then here dev turbo to
[01:38:05]  do. Here's our source code. Oh yeah. Here is. That's perfect. Awesome. Just cause I like throwing away around terms. I know nothing about.
[01:38:14]  Is this like angular Ivy? Is that what this is all about? Like the. Ivy rendering. Yeah. Yeah. Okay. I'll be happy to talk about that too
[01:38:23] . It was a lot of fun. Yeah. Yeah. Right. So our class is still here. Our class has not been touched. Look at this. Look, look
[01:38:31] , look, look, see add component constructor. Angular has not. I mean, they moved obviously the top level thing into the constructor. Like they're supposed to, but
[01:38:39]  our class is naked here. It's not been changed. That's cool. Um, then it gets exported as a, as a named export. We have some special
[01:38:47]  properties here. Um, add one button. So this is probably doing something to set up. Define component. Yeah. Okay. So this is, this is where,
[01:38:55]  this is where our decor, our decorator gets compiled to, which basically takes in our class and tells, tells us all the stuff we need to do so that it generates
[01:39:07]  this. Oh yeah. I heard about this from Mishko that use these funny symbols. So no one else does it. And it was causing problems on older devices
[01:39:16]  and stuff. Or like, like in some places it was like two characters instead of one character. And like some crazy story about this. Yeah. We have, uh
[01:39:25] , we've had one of the team members of like chakra, uh, edge, I guess, virtual machine. Yeah. So he was familiar with, like very much familiar
[01:39:36]  with how the lectures work, the JavaScript lectures work and which characters are valid and not. So that's it. Yeah. That's it. Yeah. So, um
[01:39:47] , okay. So then we got here and then, okay, this is interesting. So this generates our template. And I, I like this, our templates, a render
[01:39:54]  function and elements start element. And, oh, this reminds me of what was that incremental Dom had the same. Yeah, exactly. It's a similar. Yeah.
[01:40:03]  Yeah. Yeah. So, you know, yeah. Um, so just out of curiosity, what like, is there, is there, there's no virtual Dom in,
[01:40:13]  in Angular, right? Like, so this, uh, but what, like, what is this generating this, these commands? Is this like, because this, this
[01:40:22]  looks virtual Dom ask, like having like these, like constructors and stuff, because like, is like, does element and just output a div or whatever, or a button
[01:40:33]  in this case? Okay. Um, but it's still built piecewise from the template. Okay. And then text interpolate the spaces on both sides. And then
[01:40:43]  move the counter, put the space in and then, okay. Um, blah, blah, blah, some extra information. I don't really care about. And then telling
[01:40:51]  it this and then the original. Yeah. So here's the original thing. Okay. Cool. Yeah. But yeah, what was interesting for me was that the class was
[01:41:00]  basically untouched. It gets decorated here for something with what Angular needs. And then the template gets converted into a series of, um, instructions essentially. Um, and
[01:41:12]  how to create the Dom elements. Uh, but text interplay, this helper must be, is if our, okay. Here's an interesting one for me. Just,
[01:41:24]  just, okay. This is, this is why I wanted to look here. Um, could I format this like a little bit better? Oh yeah, yeah, yeah
[01:41:32] . There we, there we go. Much better. Okay. Yeah. Okay. So check this out. This is, this is what I thought. I was missing this
[01:41:40] . If our, there's a bit flag here for one and two. And essentially if create run this, if update run this. Right. Like I, am I
[01:41:50]  more or less. Right. Yeah. So yeah, exactly. That's a, that's a block. Yeah. So essentially they're using bit flags to mode it.
[01:41:57]  And this is what Minka was talking about where it splits the, the kind of template code in, in half. So you can, you can have like the creation
[01:42:06]  stuff. And actually this, this piece is similar to actually how Svelte works. Svelte actually splits the, the functions into like a few, they have a
[01:42:13]  class with a few life cycles in it. And then you, so you can create your dorm elements once. And then afterwards it's literally like, okay, let's do
[01:42:21]  here. I don't know what this advanced thing is, but essentially this is what the text should be. Um. Yeah. We have something like a cursor and inter
[01:42:30]  interplay to check whether there are changes or not. And depending on whether it changes or not, you like. Right. Yeah. Because that's the one thing I'm
[01:42:38]  missing here. I don't actually see the equality check or the, like the, the dirty. Interpolation instruction. I can, I can send you a link to
[01:42:44]  the instruction. It's. I, I believe you. I think that's okay. Um, essentially inside the helper function, we do actually the dirty checking. Okay.
[01:42:53]  Yeah. Um, or I, I don't know if I should use the term dirty checking. People don't like that term anymore because of angular one inferior or angular
[01:43:01]  JS one. Um, but yes, the diffing, the, the shallow diffing happens right here. And then we, we split the crate from the update.
[01:43:09]  Sorry. This is, this is great for me. Cause I've always been curious, but I didn't actually know this is like a hundred percent how it works. Okay
[01:43:15] . Yeah. Does everyone in chat understand that? Does this make sense to you? Basically they take the template and split, split the crate from the update. And then
[01:43:22] , um, they have special helpers to both create elements and handle stuff like, uh, updating. Right. Cause like initially they can just go like set the text to
[01:43:31] , you know, add one for the button. So this is these, these numbers seem to be some kind of reference. So like I'm gathering the, you know
[01:43:39] , you have button one and then this child text node and then add one, and then that element ends. And then for the next text node, we, or is two
[01:43:47] , we, we can set the text for it. And then down here we have actually, I said, maybe this creates a text node. Yeah, nevermind.
[01:43:54]  This is, this is probably create text node. Now that I see it, it's actually, yeah, this is create text node with this text here. We create an
[01:44:00]  empty text node, but it's fine because on initial run, we know we actually have to run the create and the update logic I'm gathering. Yeah. And then it
[01:44:07]  goes and it actually sets that text on the first run. Okay. Gotcha. So this is actually the first run. We actually can run both of these and actually, I
[01:44:15]  mean, I can, uh, source maps. I don't feel like messing with. Okay. Nevermind. Um, okay. I don't need to. Oh
[01:44:23] , you shouldn't be able also to get, we, we ship something with Chrome in version 15. That will probably not allow you to go to source maps or maybe instead
[01:44:30]  of this as well. But like we are, uh, yeah, pretty much like ignore listing, uh, stuff that is coming from node modules so that you don't dig
[01:44:39]  into zone.js and, uh, angular runtime. Yeah. Cool. Okay. So yeah, this, this makes, this makes a lot of sense to me. So
[01:44:47]  we create some elements. Some have default text. Some are interpolated. And then afterwards we can just take the shortcut path and do that. Um, okay. That
[01:44:55]  gives me a basic enough knowledge. I think it's always interesting when it gets like more complicated. Like, like when you suddenly have child components because they, there's like
[01:45:03]  a split. And, but I'm imagining that the split is very similar to what's felt or, uh, this is where I guess felt and angular have in common
[01:45:12] . People don't talk about too much as the fact that like without a virtual dom, this is generally how you do it. You split the updates from the creates.
[01:45:19]  Um, and then when it comes to components, you gotta go like, okay. Uh, new starting line. Like now it has its creates and its updates and then kind
[01:45:26]  of tie the tree through. Cause it's kind of interesting. Cause sometimes an update can cause a new create for a component or, uh, or that. Um, all
[01:45:35]  right. Uh, where do I wanna go next here? With the child components. Yeah. Something interesting with the selectors. We also do the selector matching at
[01:45:43]  build time. So when we're doing this compilation process, we figure out which components we need to render on particular places. And we just insert component creation calls in a similar
[01:45:53]  way. Oh, okay. Okay. Okay. Now, now this, yeah, yeah. This is a great question for me as a reactive. Cause like I can see
[01:45:59] , understand what a selector is from a top level perspective. Like I go, okay. My app starts here. You telling me that nested components have selectors too
[01:46:06] . Like what, what does that, what is that? Or how does that work? That's something that I've been thinking a lot about recently. Actually. And
[01:46:12]  we have been talking with like other people on the team as well about selectors because select, I, that's actually a really interesting topic. Um, so how are we
[01:46:21]  using components within our view and front end frameworks? And I see two main approaches. One of them is like kind of selector based approach. The other one is more of
[01:46:32]  a JSX based approach or. And I, I prefer to not go JSX based approach because Svelte uses the same approach, but just using JSX.
[01:46:42]  I, I kind of call it like JavaScript. Right. Like we're using the JavaScript scope. And in the selector based approach, we're kind of creating a dynamic
[01:46:51]  scope with what components are available within the scope of the template. So, okay. Before we go there, just two seconds here. Cause I, the part that I
[01:46:59] 'm missing and I think the audience might be missing and maybe it's in here or maybe we can do it. Actually, no, we can, let's do it ourselves
[01:47:06] . Can, can you help me? I think for us to get to the next stage, we have to make like one more component and just see what the authoring experience
[01:47:15]  is of adding our first, like not top level component is here. Yeah. So I'm going to, I'm just going to, I could make a folder for
[01:47:23]  clones, but I'm not going to bother with that. You can use the same file. It's fine. Oh yeah. It's not going to be pretty, but
[01:47:28] . Okay. Yeah. I, I, so I could just also just use the same file. Okay. So I'm just gonna, I'm just gonna put something up
[01:47:37]  here. Okay. So first thing I'm going to need, do I need to export it or does it matter if I'm only using it here? It's okay
[01:47:43] . Yeah. You don't have class. And I'm going to be like, I don't know what I'm going to do with this one. Let's, uh
[01:47:48] , let's see. We haven't, we haven't counter what kind of other silly component or whatever. I'm going to just call it my, my, my component
[01:47:55]  right now. If I haven't done that. Okay. Yeah. I'm just going to call it that you guys use Pascal case as well. So it's class.
[01:48:01]  Uh, I haven't written a, I don't write classes too often. Um, okay. So, and for now, all we're going to do here is
[01:48:11]  we're going to say standalone. Oh, that's, uh, in the decorator. Oh yeah. Right. Not in there. Okay. So this actually just needs
[01:48:20]  its own state. So we're just going to put, um, we're going to do greeting component. Very, very, um, unoriginal here. And actually I
[01:48:27]  don't need this. This just shows you how little I use classes. So we're going to put some hoisted there and then, um, I'm just gonna leave
[01:48:35]  that. Yeah. We're not going to worry about it being super stateful at this point. I know it's kind of, we'll get there. Okay.
[01:48:40]  So, and then we're going to have at component and our at component is going to have what? Stand alone. True. Yeah. It's going to have,
[01:48:53]  um, a template, which is going to be like H1. And then I'm going to be like, hello. Um, name. Right. Yeah. Yeah.
[01:49:05]  A selector as well. Right. Right. Right. And somewhat selector. Yeah. We're going to change this. Sorry. This is my greeting. And
[01:49:14]  we're going to change the selector to, um, like this is, is that usually how you, how you, how you, how you do it. Okay
[01:49:24] . Cause yeah, we'll, we'll, we'll, we'll, we'll actually pass a prop through here in a minute too, but let's just, let
[01:49:31] 's just start with this. And then how do I put my greeting in my button? You can add just my greeting element in the template of the, oh, actually
[01:49:42]  before that, I mean, yeah, that's the first step and this is going to error, but you can add it to the template, uh, to the template of
[01:49:50]  the, of the, uh, at one button components. So let's okay. If I, if I, if I go here and I just, sir, do I
[01:49:59]  put it like this? Like the match the selector? Yeah. It's going to be self-closing or. Yeah. I guess officially by the HTML spec
[01:50:09]  that's not that it's how we. Okay. So this is like, okay. Like, like web components. Okay. And I'm missing a tee. My.
[01:50:16]  Greetings. Is it most common to use elements like this rather than like, like bib with classes on it? Uh, for components. Yeah. So now, now this doesn
[01:50:27] 't work because we need to find like in this template, like this is not a known element in HTML. right. So in order to, uh, tell, to
[01:50:37]  state that the migrating component is available in the scope of this template, you have to update, you have to add property to the components, the greater object there. So
[01:50:47]  here you can add the property called like imports. Uh, and this on the right. Yeah. Yeah. Yeah. Exactly. Yeah. Okay. That makes sense to
[01:51:00]  me. It's easy. Type script and a little bit of knowledge and you, we can get there. Okay. Okay. the reference and then it knows how to
[01:51:09]  use the selector once it recognizes that it's in its scope. View is actually, uh, or at least some stuff in view reminds me of this. I had some
[01:51:16]  fun. I like changing my, like telling view to recognize or another component. So it's, it's very similar to this actually. Yeah. Frameworks are inspiring
[01:51:24]  each other. Yeah. And okay. Okay. And then, okay. Now let's pretend that I want to pass instead of this owning the stake. Can, can
[01:51:33]  we pass the name from our, from, from, from here? So we have something called inputs. Okay. So you can, uh, the input I guess is going
[01:51:41]  to be in the, uh, my greeting components. Okay. The input is going to be in, sorry, this one. Yeah. You can import from, from Angular
[01:51:53]  core. You can, uh, that is the input is going, well, you can do it there too, but it's less, less. Okay. No way to
[01:52:00]  do it. That's the right way. So in the, uh, my greetings components. Yeah. For first you can import from their inputs. Yeah. Yeah.
[01:52:10]  And, uh, in my greetings components in the body of the class. Yep. Uh, you can add, actually you can just prefix name with apps input because it's
[01:52:23]  a decorator. Decorators. Yeah. It's a, it's a function. Okay. Nice. Okay. Okay. And then this is, then this
[01:52:32]  becomes the default value for the input, right? Yeah. And you can pass the value. If you go down to my greetings, you can use, use, uh,
[01:52:40]  square brackets. Okay. Square. Square. Square means bound value or? Yeah, exactly. Uh, the best is string click. String. Okay. So then
[01:52:51]  it's like, okay. So then this is name and then this is, uh, name. Yeah. Okay. Does that work? Uh, okay. Does that
[01:53:01]  work? Cause I was hoping. I think it's gorgeous. Step stack. Compiling changes. Okay. Come on stack. Let's. Hopefully you'd save this.
[01:53:11]  Yeah. I know sometimes like you're like, you're like, yeah, I'm like supposed to. Okay. Yeah. Because like, it's not doing it
[01:53:22] , unfortunately. And if I refresh the page, the chances of this actually being. Okay. Okay. That's good. Yeah. I know. I should sign in.
[01:53:35]  I don't know why I'm not signed in on this computer. Probably cause it's my work computer. I do most of my solid dev work on my own computer.
[01:53:42]  Interesting. Stackplus is not happy with me all of a sudden. It was fine up to this point. Did we miss something syntaxually? That's like causing stack
[01:53:51]  flits to get in a, in a fit. Internal. It looks like internal, like stack was got some. Inter token. I, but that, that, that
[01:54:07]  was. Did it? Okay. Input. Good input. Good. I think on our side, we're good. Yeah. Yeah. The current state of things
[01:54:17]  should be fine. Now. Yeah. Cause that's unfortunate. Okay. It's like, okay. Let's just. Back off here for a second. It,
[01:54:27]  it, it went crazy on us. The second I did this. Right. Okay. Okay. Okay. Okay. Yeah. Yeah. I mean, yeah. So weird
[01:54:34] . So funnily enough. Okay. So this. Okay. I'm going to do that for a second. Cause that makes it angry. If I go input
[01:54:41]  input. This is fine. If I go here and go like name. Okay. I'm not going to bind anything yet. Let's just do like name. Oh
[01:54:46] , that's. That's okay. Okay. I'm going to do that for a second. Cause that makes it angry. If I go input input, this is fine
[01:54:54] . If I go here and go like name. Okay. I'm not going to bind anything yet. Let's, let's just do like name. Oh, that
[01:55:02] 's. That's okay. Okay. Okay. Okay. Thank was doesn't like something there. Okay. Let's not call it name. Let's call it something else
[01:55:14] . Uh, what am I going to call this? So our name is sometimes a really weird variable person. Okay. Um, my green, my green person. You
[01:55:28]  find on the anger side and person. Not that. Okay. Okay. Name, name, name. Or person, person, person. Uh, now I'm going
[01:56:01]  to go. Person equals. Something. Yeah. This would, this is going to pass the string FG. Yeah. Which is good enough for me, but not good
[01:56:14]  enough for stack blitz. Oh man. Okay. Let's do we have some information here? Yes. It should be fine for Angular. Uh, I guess. Yeah
[01:56:25] . Yeah. Well, this, this, this was like my, my super cheap way of getting started with this stuff. Cause then I didn't need to. Didn
[01:56:31] 't I could, I could, we could pull down a repo if that makes sense. Um, I don't know how much more code stuff. I, I'm
[01:56:39]  only doing as much code as we're doing to kind of understand the explanation. I'm getting a pretty good idea. At least like this makes sense to me. It's
[01:56:45]  in tactually. And I I'm following it. And then there's just. Yeah. It's, isn't this crazy though? Like it makes no sense.
[01:56:52]  Like it, it's not even like the binding or anything. It's like the second or the name of the property. It's like the second that it's like thinks
[01:57:00]  it has to pass something to my greeting. It's just like, no, you know, we're done. Uh, we can, we can talk a little bit about
[01:57:08]  selectors. Maybe, um, they're going to do another production. But yeah, I mean, I, okay, let's talk about selectors here for a
[01:57:16]  moment because I get what you're saying though. Now I understand why selectors exist because it is, it is actually the way that you do it because each, the components
[01:57:28]  aren't actually linked by JavaScript context, which is really interesting to me. They actually, their scopes are completely isolated. Yeah, exactly. Yeah. This, this also
[01:57:37]  allows some, some flexibility. let's say like Angular introduced an image directive in version 15, which is very similar to the next image component. Right. Yeah. So
[01:57:48]  to use the next image component, for instance, you have to import the image component from somewhere and replace all your images with the image components, which is absolutely valid. Uh
[01:58:00] , and, um, it's not such a big of a change, so it's relatively convenient. It's convenient. The thing that selectors allow you to do
[01:58:08]  is to enhance the behavior of existing elements in your application without updating the templates at all. So you can just create a selector image. Right. Which matches all the different
[01:58:21]  images in your application. And the next time you compile your application, the behavior of all the images is going to be enhanced. Oh, oh, I see because.
[01:58:30]  Oh, interesting. So you can have a, you can have multiple components attached to the same element. And like, what, like, is on, like, if the
[01:58:38] , one of them doesn't like, like. It's, it's directives that do that. Uh, but, uh, cause I go and I'm, I
[01:58:47] 'm like, what if like the only one of them can have a template or stuff would go really wrong. Exactly. Yeah. Yeah. We have a primitive code directive
[01:58:56] , which is something like component with our template without the view. Okay. I got you. Okay. I got you. Okay. Okay. Yeah. I've heard of
[01:59:06]  the term directives. but I, I'm, I think I might be miss. Does direct direct directives like, uh, uh, I don't know if
[01:59:15]  I need the right one, but I'm just like a little bit curious on the syntax. Just cause I think. Directive very similar to what's your, the way
[01:59:22]  you're developing components. Add directive and to specify a select there. And, uh, that's pretty much it. Yeah. Directive. But is it, is it
[01:59:30] , is it a decorator itself? Um, not errors. I just want directive. Yeah. Um, directive is probably like the most common or there is API directive
[01:59:42] . Okay. So it's a decorator that marks a class as an angular directive. Gotcha. So it looks similar. And then you have similar stuff to components,
[01:59:53]  except the key is you can have multiple directives on the same element. Oh, Alex from in the chat is suggesting that we may want to export the, uh, child
[02:00:05]  class to fix. Okay. Okay. So the export does make a difference for stack blitz. All right. Um, well. Okay. Okay. Okay. Let
[02:00:17] 's try. What do I want to do here? Person equals D. Yes. Yes. Okay. Thank you so much, Alex. Okay. So now we can do
[02:00:30]  person equals, uh, sorry, still string name and box it. It, which means, well, yes. Okay. Hello world. Beautiful. That's what I
[02:00:44]  did. So world overrides our angular here. Okay. That's great. Someone's mentioning that I could also do something like if I really wanted to, you,
[02:00:58]  this is one of those syntax things that I could do. Like I could do this if I really wanted to. No, no. Yeah, this you have to remove
[02:01:05]  the square brackets in this case. Oh, okay. Okay. Okay. So square brackets like saying like, hey, I'm directly doing this, but you can also interpol
[02:01:14] ate and I can do like this. Yeah. Okay. Yeah. Okay. Gotcha. Interesting. Okay. I gotta kind of think about that string thing for a second because
[02:01:26]  this one is saying like, we're just passing this string with an interpolated value and the other one's saying we're passing the value. Yeah, exactly. Yeah
[02:01:34] . And this is a lot. Yeah. Okay. Yeah. We evaluate this one as an expression in the context of the components. Angular has two way binding too, right
[02:01:49] ? We can have two way binding. Yeah. But we try to of course, very directional data flow. Yeah. I couldn't remember what the symbol was. Oh
[02:01:57]  no. Yeah. Did I get it right? You got it right. You have to just import forms and update this to ng module. Okay. Okay. Yeah. I
[02:02:08] 'm just, I'm just fooling around. Don't, don't mean to do that. Okay. Okay. Yeah. So chat's great there. Intervol
[02:02:16] ving is calling to string. So it's best to stay with it for binding properties. Got you. Right. Yes. That makes sense. And this is all back
[02:02:24]  to history of attributes on HTML elements and the whole thing. And apps attributes versus props and all that fun. Okay, cool. Um, so yeah, we were talking about
[02:02:34]  selectors and that leads us to decorators. Um, and interesting. So decorators are act. Yeah. This is something I did not understand. I don't know
[02:02:44]  if I'm going to write a decorator right now. Cause I don't know what, Oh, actually, can we write a decorator? Sorry. I attended a
[02:02:49]  little bit, but create our own or. Yeah. I mean, like something silly, like, can we make the, add a decorator that can make like the
[02:02:56]  set of class of red or something? I know you wouldn't do that. Like you'd use class normally, but we could make a decorator that like any selector
[02:03:02]  match could set the text red or something, right? Like it. Oh, directive. A directive. Sorry. Yeah. Yeah. I don't. Oh, so you
[02:03:12]  can make your own decorators too. Of course you can, right? Yeah. In JavaScript. Yeah. Yeah. Yeah. But because there are different versions of this one
[02:03:19] . Yes, sir. I use the word. Okay. Different D word. But yeah. So we can make, can we quickly make a directive? So like.
[02:03:28]  Yeah. You can, I feel like this is part of, of, of my angular learning knowledge. Uh, so we have a directive and we'll have a class that
[02:03:36] 'll be like. export it too. Export it too. Just cause I don't know what's up and be like, make it red. Okay. Maybe make it
[02:03:46]  blue reds. So aggressive. Okay. Although red, you know, angular is red. So we're gonna make it red. Um, okay. Okay. You
[02:03:55]  can delete the, the parentheses there. Oh yeah. Yeah. Yeah. So you can specify a selector now. Okay. The selector. The button it's in
[02:04:05]  the directive metadata. Okay. Sure. I can do a selector for button. Sure. And then we can. Okay. It's up in the directive. Oh
[02:04:17]  yeah. Sorry. Okay. Selector button. Okay. And it's not standalone, right? That's only a component concept. Um, all right. So now
[02:04:29]  this directive will apply to all buttons. Okay. Yeah. And, uh, the next step, uh, I mean, you can, there are like different things.
[02:04:38]  You can do like, let's say we can directly. We can let, let's touch on dependency injection. Okay. Okay. Sorry. Yeah. You, you helped
[02:04:48]  me go where to go. What, what, what do I need to know? Maybe I just went here cause it, it seemed like the next step. But yeah,
[02:04:52]  dependency injection seems like it's an important part of angular. I mean, no, we, we can do it, uh, directly while, while building this directive. We
[02:04:59]  can just, just use, uh, um, some, a function called inject. So. Okay. So what, where do I do this? Uh, in,
[02:05:12]  uh, you can inject element ref. So in, in the component, in the directive body here, you can type inject and use element ref, I believe. Maybe send
[02:05:24]  it to private chats. Cause I'm not quite following what you're saying. What you're saying. Uh, so in the classic, we can try to do this
[02:05:31] . And here we go. Yeah. Here we go. X or class through element equals. Okay. Okay. So yeah, we're just setting a top level thing
[02:05:43] . Element. Inject. Okay. And then element ref, which I'm hoping I will know what that is. Okay. Inject is something that I'm going
[02:05:53]  to need to import, right? Yeah. Import from angular core. Yeah. Okay. Okay. And then element ref. It's something we're going to get in
[02:06:04]  a, in a minute. I'm gathering. Okay. So, so far so good. What, what, what, what do we do next? Uh, after
[02:06:15]  that, just let's see. Uh, oh, we can import element ref as well. Okay. Quick fix. Okay. Cool. Interesting. So like directives have
[02:06:31]  some like powerful primitives under them as well to make it easy to author them. So like this is, this is like, how do you get the element reference for what
[02:06:39]  the directive applies to? Okay. Yeah. Interesting. So you can try to, you can import, uh, um, I mean here in, uh, yeah,
[02:06:50]  let's, let's, uh, import this directive in the app components and we can, we can just add it to the imports. All right. Okay. Okay.
[02:06:59]  In the imports up there. Yeah. So then we can go, uh, my greeting and then we also need make it red. Yeah. Okay. Oh yeah.
[02:07:09]  Oh yeah. And we can make the direct of standalone. That's a good. Okay. So, okay. So direct, I should just get used to writing standalone from
[02:07:17]  now on. Yeah. We're eventually going to flip the switch and make everything stand alone one day. Okay. Yeah. That's cool. Yeah. And, uh
[02:07:29] , yeah. And here, let's say in after viewing it, ng after viewing it, that's the life cycle hook here. Okay. Sorry. It's just so
[02:07:38] . And the like, so it's like a fun. Yeah, exactly. After what? Viewing it. Sorry. Am I saying viewing it? Did I hear
[02:07:46]  you right? Oh, it's a view in it. View in it. Okay. Yeah. I'm like, after viewing it, I'm like, yeah, what
[02:07:52] 's up? Yeah. After viewing it. Yeah. Yeah. Here we can just log the element for now, just to preview it. Perfect. Okay. But okay.
[02:08:01]  The element that I'm getting here is this dot element. Yeah. Okay. And it is a element ref. And when an element ref is, it has a native
[02:08:12]  element underneath it. Okay. So this is, okay. So we have a special object that for handling refs, probably for stability. Yeah. And then, and then
[02:08:19]  there's a specific reference. So this is kind of like use ref and how you do dot current. Yeah. Okay. So I'm, I'm, I'm,
[02:08:27]  I'm following. Yeah. In ng view, in it, we can just make the button. Right. We can just manipulate the styles. Right. Beautiful. So
[02:08:35]  we can literally just go in here and go like, okay, this element dot native element dot style. Was it style dot background color? I, I, I, it
[02:08:49] 's been. Yeah. Equals red. Oh, like, sorry. Hold on. Right. Yeah. Yeah. Okay. Yeah. Yeah. Yeah. Yeah.
[02:09:00]  Yeah. That's always fun. Yeah. That's kind of like the thing with, uh, selectors that you, it can, if like anywhere that this director is
[02:09:09]  available, it's gonna apply the logic to like all your buttons. There you go. Sorry. Well, when, as I was typing, I was like, I was
[02:09:17]  like, where's, where's my autocomplete? It's because native element can really be anything. So I needed to coerce it to an HTML element
[02:09:25]  and then the rest of my completion works. Okay, cool. Um, okay. Um, and then now we have a red button. Um, and in fact,
[02:09:34]  if we wanted to, to do something funny, like, uh, I don't know, let's look at our greeting component. And if we added a button here,
[02:09:44]  for some reason, we'd have to apply the directive to it, but we could be like, um, change. I'm just gonna put that in there. We
[02:09:53]  could also in theory. Okay. Well, that, that, that's good to know how this works because it doesn't, it's interesting. It doesn't apply globally
[02:10:04]  here, even like on the tree, cause they're isolated. So you still get, you're still like, when you first were telling me about this and matching out select
[02:10:12] ors, I was like, I'm like, that's pretty permissive, but no, no, no. This is only within the range of, of the components
[02:10:18]  that have recognized that they need to make it red. Yeah, we create a scope, uh, like a dynamic scope here with standalone components. The scope will be within
[02:10:27]  the, like at one button, but it could be like a bigger, larger scope if we use the, so like the concept of engine modules also. Engine modules are a
[02:10:36]  way for us to declare a scope in which we have certain components and directives available and they're, they kind of create a namespace. We can think about it as
[02:10:46]  a namespace. Right. But okay. And, and this kind of ties in because like, I'm sure you'll correct me because I'm just picking up like
[02:10:54]  the pieces of conversation. The thing is historically you used to always have to make an ng model, but now that there's standalone ng models are optional. Yeah. Yeah,
[02:11:03]  exactly. Okay. Yeah. It's funny. I, I don't know angular, but I've like overheard enough conversations to be dangerous. Um, so.
[02:11:10]  Uh, something, something here that would be interesting also is, uh, the style encapsulation. That's something that I pretty much, I kind of like a lot because
[02:11:19]  your styles would not be leaking. I've seen like that works on like before style encapsulation like was a thing. And, um, I would happen to have like
[02:11:30] , uh, um, colliding selector in different parts of the application and just get unexpected results. So if we declare, let's say you can add, uh
[02:11:40] , in this, uh, my greetings component, you can. Okay. Change the border. Let's say if. Okay. You can just use styles. Um, okay
[02:11:50] . Okay. Okay. Cool. So this is a built in thing. Okay. You can have square brackets here and you can add templates, uh, string literal. Okay
[02:12:01] . And, uh, yeah, just. Okay. Yeah. I can like button and then be like, I don't know what I'm going to do. Border
[02:12:11] . Uh, what am I going to do? Can I do a border radius? I'm just like, not a, it's been so long since I've actually,
[02:12:19]  uh, border like five pixels solid. Yeah. Yeah. Yeah. Yeah. Fun. Right. Right. I was, I was like thinking about rounding the corners and then
[02:12:31]  I'm like, man, I don't remember anything anymore. Um, okay. Yeah. Yeah. Gotcha. Okay. So that's cool. And this is,
[02:12:38]  yeah. So this is style encapsulation. Um, and okay, actually I want to, I want to do it. Here. Cause this is the more interesting place to
[02:12:47]  do it. Cause like this. Okay. Cool. Cool. Yeah. This is, I mean, both places are interesting for their own reason. Yeah. Yeah.
[02:12:56]  Yeah. This is pure isolation. It's not even hierarchical. Yeah. Yeah. Okay. Gotcha. Yeah. So yeah. So this is built right in, um
[02:13:05] , similar to view and Svelte. Um, Angular probably did it first. I'm sure. Um, so yeah. Yeah. Okay. Okay. Okay.
[02:13:12]  That makes sense. So then we've got template blocks, we've got style blocks, and then we have our component JS blocks. Mm-hmm. They're isolated.
[02:13:17]  Selectors are how we tie them together. Imports is how we, um, do this whole mechanism of getting directives and other components. So explicit connections, um
[02:13:28] , you can make them into modules, but standalone is this new cool way that you can literally just wire them up yourself like this. Okay. Is this a good time to
[02:13:38]  talk about dependency injection in general? Because this is, this is the, this is the piece that's like missing to my understanding for most react devs. They're like
[02:13:47] , yeah, yeah. Dependency injection, like context. And, um, someone, you know, academic will come out in the conversation. Like, no,
[02:13:55]  that's actually the service locator pattern. Um, dependency injection is slightly different. Um, so yeah, I, I mean, it, it's, it, it
[02:14:08] 's, I don't actually know the difference to be true. I used dependency injection in Java back in the day and it felt very different to context. Could you be like
[02:14:16]  defining your classes and you'd be like listing possible, you know, modules and stuff. Yeah. What does this mean for angular? Why is it important? Actually,
[02:14:25]  maybe we should like really high level for people. Cause I don't like the average react dev doesn't actually even know what dependency injection probably is. Yeah. I can see
[02:14:33]  why, why I would particularly, why I particularly appreciate dependency injection. And I've been simulating dependency injection to an extent in like variety of different contexts, including in react
[02:14:44] . actually I have an integration of angular dependence injection in react. Oh, really? Yeah. Uh, I mean, the funny thing is I'd probably understand that maybe
[02:14:53]  even better in a sense, cause then I'd like understand what you're doing, but like, what can we just start? Like what, what, like what is
[02:15:01]  it and what does it do? Yeah. So let's say we want to move some of our business logic to like, let's say we have like a user list
[02:15:12]  and to get this user list from somewhere, like from an API somewhere. Yeah. Or a network. Uh, one, one way to get the users is by using like
[02:15:23]  fetch. We're just fetching directly within the components. I guess we're going to use something like use effect maybe. Yeah. And, uh, we're going to
[02:15:30]  fetch, get all the users and visualize them. And that's decent. Like we can definitely do that. Right. If we want to test this components, what we can
[02:15:38]  do is just send requests every time when we run our unit tests or, uh, which is not ideal, or we can just monkey patch window.fetch. But
[02:15:48]  like monkey patching is also not great because you can forget to revert back the patch. Right, right. For sure. And it makes things complicated. And then you
[02:15:57]  decide to build your whole framework on it. And next thing you know, you release next 13 and you monkey patch fetch. Okay. I got, I got sidetracked
[02:16:04] . I'm sorry. Back, back to angular here. Um, yeah, no, I, I, yeah. Okay. Okay. So something we can do,
[02:16:12]  something we can do in this case is just pass fetch as an argument to the components. Let's say as a parameter. And we're already injecting this dependency. So
[02:16:20]  we're creating kind of like dependency injection in a way. Um, we're passing the dependency as an, as an argument. I'm not saying that that's exactly dependency
[02:16:28]  injection. Right. And that's not how we're implementing it in angular, but that's an option which. Right. To make our components independent from the implementation of
[02:16:38]  this service for. Right. Stuff. Another, uh, would another example be just like globals? Yeah. Like you said, injecting fetch, but you could also
[02:16:49]  have the fetching happening outside and just inject the data as well. Like that's another, that's another thing. Um, I guess eventually we'll have to use
[02:16:58]  fetch somewhere. Right. And if we want to test this component, we will ideally want to abstract the fetch implementation. Okay. Or we have built in support for that
[02:17:09]  with, um, most like most lately with the inject function, the inject function allows us to inject certain. Like objects, uh, that, uh, oh, uh,
[02:17:24]  the inject function that we're using actually already in the directive up. Yeah. Here we're injecting. Oh, great. Right. Yeah. Of course. Yeah.
[02:17:34]  Okay. Yeah. Yeah. Okay. Gotcha. Okay. And we'll, we can, we can fast like some fake implementation of element ref. If we would like
[02:17:42] , if we would like to in some test environment. So that's, that's pretty convenient. It doesn't have to be the real dome. It could be like,
[02:17:47]  I don't know, we can just mock it to an object that has a style property. And we test whether we have changed the background power of. Right. Okay.
[02:17:56]  Okay. Okay. So syntactically, I mean, this top level in their class, but essentially we'll have our classes. And at some point maybe the directive
[02:18:04]  or in a component or something, you'll be like inject. Of. But I mean, L element ref here is a type of injection. Like it's a type of
[02:18:17]  thing. It's not the. Exactly. Yeah. So we, we associate, we, we inject like the, the type kind of, we call it a token
[02:18:26] . We, and we associate, and we can, we can have different implementations of, of, of this, of this thing. One of them is currently the DOM
[02:18:35]  element or like the element ref, but it could be something completely different. And sometimes we can even create like a, we can have multiple things. Let's say,
[02:18:45]  let's say that's like a very made up example. a bullet. Let's say we have a different rendering strategies. We have rendering strategy, like in the web
[02:18:55]  worker. And another is in the main UI thread. And another is. I don't know. Like we're using rendering like a. React native like solution where we're
[02:19:05]  passing calls to the native platform. Yeah. We can create multi provider. That's how we call it. So we have. Yeah. Implementation of your render
[02:19:14] er. And depending on the platform you're into, you're getting the right implementation. The one that you actually need. Right. So. So, okay. Just,
[02:19:23]  just cause like there's, I've seen this from view a little bit, but I haven't actually looked at what the view does. There's inject, which is how
[02:19:30]  you consume or inject in this dependency by this definition. Um, so do you register these with a provide method somewhere potentially? Yeah. These are implicit. This one will
[02:19:46]  be. So they're in your article structure. It's actually a whole injector tree. Okay. Mostly matches the dome, but there are some extra injectors. And
[02:19:55]  in each one of these injectors, we can have different so-called providers. The providers are usually pairs of, uh, like a token and kind of like a
[02:20:05]  implementation of this token. Right. And let's say in, in, uh, in this, there are some default ones because like every, every node has like an associated
[02:20:18]  element usually because the node injectors are associated with components. So. Okay. Okay. Okay. Okay. Okay. Yeah. So I, I'm starting to make
[02:20:33]  like connect dots and I'm not sure if everyone in the audience is with me on, on this dot connection. Um, but, uh, the thing is we have
[02:20:46]  a heart hierarchy in react context and those, but we're the providers only pro they, they have, there's a symbol, but they provide a value. They don't
[02:20:58]  necessarily provide an implementation. So like maybe you could use context to create this sort of dependency injection model. But, um, but I, but, but, but here
[02:21:13]  it is. Okay. Yeah. I'm, I, I don't know this. I'm just trying to think in my head. Cause it sounds like it sounds like
[02:21:19]  it has elements of it, but it sounds like it's actually has more, like there's more to it. Like there's like, let's say here we can
[02:21:24]  have a fetch implementation. Yeah. We have a directive right here. Let's say I'm going to like, let's say. I'm going to like, let's
[02:21:33]  say. pretend right now that this is just like a component tree so we have i'm going to give you a little bit more screen so everyone can see you yeah so
[02:21:41]  we can have like uh i would just make things up this is going to be a paragraph this is going to be a div here this is going to be another paragraph and this
[02:21:49]  is going to be a spam why not and uh actually this might be more confusing so we have different containers of dependencies and at the very top we have that's a little like
[02:22:01]  wrong for in the angular context but it's like accurate enough to work for our example so we can have implementation of fetch right here or http yeah oh um oh okay i
[02:22:11] 'm close yeah yeah and let's say here we have a directive that requires fetch and and everywhere we have element ref element ref element ref so here we have a directive uh
[02:22:29]  add directive and in this directive we're injecting let's say fetch yeah okay so uh we're going to look into this injector here if it has fetch if it has
[02:22:44]  fetch we're going to return it directly but we can't find it so we go to the parent injector there is no fetch here either so we go end up we
[02:22:51]  end up going to the uh like root injector and yeah instantiate it because it can also depend on other things let's say fetch can depend on it might not be fetch
[02:23:02]  it might be like graph ql and it may have like uh let's say a transport layer which could be http or it could be a web socket and it could be in
[02:23:10]  another parent injector there so in this case we'll have to come here to resolve the dependency of fetch and eventually we're going to end up providing fetch to the directive
[02:23:20]  and it's like a it's also pretty fast mechanism but anger does it like if you ask mishko he'll be so proud of the bloom filters as we use here
[02:23:27]  but it doesn't really matter too much about from implementation's point of view i guess the good thing is that you can yeah you can just inject the dependencies that you want to
[02:23:41]  and your component or directive it is not going to think about implementation at all it is just going to or it is not going to think about how to instantiate this fetch
[02:23:50]  if you just request it and it comes for free for you uh and if you want to pass a fake implementation you can just take this directive isolation in your test case right you
[02:24:00]  pass a fake fetch and yeah yeah yeah yeah okay i yeah let's get back around to here yeah um yeah i can see the power of it what the thing that i
[02:24:12] 've been trying to figure out is like i i'm now in that second stage where i'm like i want to see what you did to implement something similar in react like how
[02:24:20]  much complexity layers you have to like layer on top maybe share with me later i don't think we'll be able to talk about that on the stream today but i'm very
[02:24:27]  curious to see that because i feel like um i feel like i'm starting to get like a bit of a picture here because these three things are very powerful the way they
[02:24:38]  work together the directives the dependency injection and then like the component selection layer like basically they like the three pieces um like give you a lot of power in being able to
[02:24:50]  like wire stuff up behind the scenes like essentially in a way that isn't directly hierarchical on the tree where we're very much used to um kind of like used to doing
[02:25:04]  that um uh like like in react everything is very much the tree so much the tree that when their context updates like you end up re-rendering like a lot of the
[02:25:12]  tree like it's just it's whereas this feels like like it it's very isolated um so yeah no this is interesting there's some complexity that comes with it but i
[02:25:22] 'm seeing how this kind of like builds on and very consistent in terms of patterns too if i'm switched back to our code view here like just the way using directives on
[02:25:31]  classes um this is as i said a bit more alien to me because like you know it's been a while since since my java days so much you know kind kind
[02:25:41]  of things but i can see how consistent this is like especially you like we can do an experiment here we can just create a service that's how we call the classes that you
[02:25:51]  inject we can just create like a a service at top uh okay before directive okay so yeah tell me what service is one more concept i'm not aware of but i hear i
[02:26:02]  i've heard it from angular as well so is it another one of these that injects that injectable because you're injecting the service that inject in sorry injectable
[02:26:14]  yeah and uh you yeah you can pass an object here yeah uh with property provided in because you're specifying in which injector it goes so you can pass the semicolon
[02:26:27]  and uh a string root like fruit is the like fine thing in the root injector that we discussed from the injector here yeah and you just create a class that can
[02:26:37]  have like a i don't know one method that invokes alerts or something okay sure class um we'll call it a capital alert so i part of me is wondering if like
[02:26:49]  the browsers are removing alert but i hope it's still there right now okay walk something in the console i don't know yeah yeah okay console yeah let's let's do
[02:26:58]  console just in case okay and then okay and then what am i doing now i'm just a decline you can define a method uh look for example that look that uses console look
[02:27:14]  yeah yeah and oh i can yeah okay cool and then yeah and here in the directive you can have uh in make it red you can have another inject let's say you
[02:27:31]  can have a console property which equals inject console yeah and inject it injects console the class console okay yeah i just decided to call it console p just because like the window
[02:27:50]  has a console on it so i didn't want to look at it i guess it doesn't really matter here okay yeah yeah you're doing it you have uh you can just
[02:27:59]  invoke uh console that's lock with and you should see holla hold on in the yeah and then if i go here nice okay cool okay so like this could be whatever
[02:28:18]  i could do like do something like fetch my data and then you know whatever stuff and then essentially just be able to use it anywhere that i inject it yeah and then easily
[02:28:32]  override it in tests right and just be like okay i'm going to write because this is well huh just just because this is how do you get the same console symbol like
[02:28:46]  like yeah it's a single time it creates uh it's going to be instantiated and the the instance is going to be cached so you're going to get the
[02:28:55]  same one next time okay but it's interesting like if we look into that uh it's interesting how does it play with something like uh like progressive hydration or like resume mobility because
[02:29:07]  we can inject something from anywhere and this thing like this is kind of like has some we need to preserve the state somehow in the dome let's say yeah okay we'd
[02:29:22]  like to uh that's just like an open question nothing that we have right now uh just thinking how like this this is pretty developer like provides developer ergonomics you can do whatever
[02:29:32]  you want right but also having so much uh flexibility doesn't allow you to go right yeah yeah yeah this is interesting because there's that two-edged sword right because
[02:29:48]  stuff can really come in anywhere um but i mean the links are direct oh yeah this is interesting yeah isn't it because like you yeah it's interesting because there's like a
[02:30:01]  different graph here to consider yeah yeah yeah yeah huh yeah i this is new to me so i still need some time to process through it but i'm kind of like i
[02:30:11] 'm seeing how powerful this layer is on but i'm also i'm also seeing yeah yeah that's that's an interesting choice like to kind of think about because this is yeah
[02:30:22]  it well here i mean it's not just this like i don't know if you're aware i i follow the also the react ecosystem very far they've been doing really
[02:30:30]  cool stuff with server components and partial hydration that way and but one of the things that's making really hard to serve components is like context is kind of really broken um which is
[02:30:40]  their like kind of pseudo weaker dependency injection model and even with that one it's like hard like i can it might be and i've been talking with michael on quick and
[02:30:49]  he was like we need we're using context which is fine you hear him grumble about it because he's he's always like he's like i don't know how
[02:30:56]  anyone tests anything in react blah blah blah but like um he he was he was like we need like a reverse context too to be like stop caring about context here because you get
[02:31:07]  into this zone where you're like this data could be used anywhere do i have to serialize it all like can i stop you know like how do i how do i break
[02:31:16]  this stuff up this is this is it's an interesting design zone to kind of think through now with where you know where we're now thinking of more ways like at first
[02:31:25]  we were we had these large apps in the angular js right and then we got to a point where we were like okay components that makes it more manageable right um and a lot
[02:31:37]  of us you know a lot of frameworks and even like here with anglers to a certain degree i see the same with svelte and react like it was like let
[02:31:43] 's tie the life cycle to the components now i know we didn't talk about it today but angular has different change models as well which were like hey this isn't always great
[02:31:53]  use on push or something and then you can manually set it using something like rxjs reactivity to kind of like control it in a different way outside of like the normal
[02:32:02]  change detection but um then now we're getting to like you know and that was kind of a progression it's kind of like the same way people use mob x and react
[02:32:12]  to kind of drive it or view framework is essentially that if you kind of just step back from view to a certain point they're like using reactivity to drive these components and
[02:32:20]  but now when we're talking about stuff with uh like marco6 quick like you start getting to you know all the like even partial hydration to a certain degree with stuff like
[02:32:31]  um react server components or astro or solid start like even to a certain degree maybe not as granular we're talking about trying to break stuff up in an even more granular
[02:32:40]  or create crazy kind of way and there's like this conf conflicting piece between the like the power of like everyone knows globals and signaltons like have the trade-off
[02:32:52]  on that and that's why we have these great patterns around providers and injections so that we don't make mess of our code but we've now we're now kind of fighting
[02:32:59]  against the power of the that kind of connectivity we did and the convenience of it with like no no no we want to we're going to try and break stuff around and
[02:33:08]  make it almost like jquery again like i mean that's an interesting thing we want to we want to have like the best of both we want to have like oh yeah
[02:33:15]  just you know inject this blah blah blah but then at the same time like uh you know framework output jquery for me you know like it's it's it's
[02:33:22]  it's wild yeah yeah it's it's interesting yeah we're we're looking into so we didn't discuss some of the trade also depends on injection it's like very magical
[02:33:31]  in angular and sometimes it's it's great like for getting started with you don't create proxies it just works sometimes it doesn't work though you were we're discussing
[02:33:40]  the child parent relationship and let's say we were performing traversal from top to bottom yeah but like the component at the bottom you might have bound to let's say a
[02:33:49]  getter and in this gather you may have a side effect that mutates the state of the parent component and in this case change station is going to work because he needs to
[02:34:00]  do another loop like another we need to traverse the component tree again and so we have a development check called expression changed after checks like so we throw okay yes and uh yeah
[02:34:13]  this global change section just doesn't work with such granular lazy loading right so it's just there are different approaches to different trade-offs i guess yeah and i think that's
[02:34:27]  one of the most interesting things about angular having and i mentioned at the beginning again is just having seen those trade-offs seen that result thing and then figuring out like okay
[02:34:36]  can we like it's an interesting choice of like a framework and library when you are opinionated and you you cover a larger area of things when those new things come up you
[02:34:44]  have to go okay how do we do it in an angular way how can we enable our developers to do this without messing with everything else and because like i remember when i first
[02:34:52]  heard about on push i was like and that zone thing and then i think i saw some talk by was it michael hadley or something which was about like partial zone
[02:35:01]  something or other and i was just like can how does this work do they talk to each other like it's wild to me that multiple change uh detection approaches can exist in the
[02:35:11]  same you know zone like not so sort of like framework or like application and it was like the kind of considerations and like engineering problem there to kind of like like that's interesting
[02:35:23]  i don't know i i probably could pick your brain about that forever i it's very it's very it's very interesting to see how like um how how to find
[02:35:32]  like powerful solutions in that in that like it's it's the it's it's the philosophy piece i when you talk to frameworks and framework authors there's there's always like
[02:35:41]  a slightly differences on on philosophy um and that's why it's always interesting to talk to places where the philosophies are a little bit different because then you're like like
[02:35:50]  the decision making becomes a little bit different um yeah yeah yeah yeah and uh yeah um anyway yeah that's the semantics is super different also the syntax is really interesting which because
[02:36:08]  the syntax i'm noticing how just people get really attached to syntax at a certain point it gets a little bit like um the syntax brings you like feelings about things it feels
[02:36:17]  feelings yes feelings it is actually a feelings thing like an emotion that people feel like like i i you when people talk about jsx or people talk about svelte language or
[02:36:28]  whatever it's like there's like an emotional reaction to it which is that which is i i love that as well like we we found this with marco right like it doesn
[02:36:37] 't matter how smart or well designed a language is somebody might see it and just be like like immediately have like an emotive like you know like emotional uh you know appeal
[02:36:48]  to it or not appeal like a reaction to it and that's that's interesting too because like that part also plays in on top of just like sometimes it reflects the philosophy sometimes
[02:36:59]  it's just like you naturally get there and then yeah i think that's why we have so many frameworks like there's so many different combinations of these kind of things so yeah
[02:37:07]  um yeah yeah uh man oh we're we're we're basically out of time i don't know i was trying to see if there's any quick questions in chat that
[02:37:15]  came through while we were chatting there i should have actually put it out there because i we got to let minko go here in a minute um but yeah i can yeah
[02:37:22]  um like i can definitely stay for a few questions yeah so if anyone's like this is your chance if anyone got a couple questions here um we should probably fire them off
[02:37:31]  a lot of people talking about the beauty of angular and its architectural design yes it's come up a few places then then like it's right next to someone saying like the syntax
[02:37:41]  highlighting on the on the templates and the css you know in the strings and stacklets was probably gave them an emotional reaction yeah it wasn't great by the way like that
[02:37:52] 's something that we should fix established in visit us called we have in your language service that provides better syntax highlighting i don't know if you can install an extension here maybe
[02:38:02]  maybe we can't you can't is this going to become a series um i'm going to talk more with um developers from angular um coming up this has been a blind spot
[02:38:10]  for me um i i think we'll see when but in the coming months i'm gonna have power on we're going to talk reactivity in angular at some point in the
[02:38:17]  future so that's going to be interesting from today i just wanted to get like a really high level i know we got deep in sections but for me this is still high
[02:38:24]  level like it's just understanding the core change mechanisms understanding the core building block pieces and i think we got an idea that we talked about services we talked about dependency injection we talked
[02:38:33]  about directives components selectors like a lot of the like key concepts of building flux we did not talk about rxjs it's fine um many of you on stream already
[02:38:42]  know about rxjs we talked about reactivity a decent amount if you want to bug me about rxjs we can we can do that um but yeah angular seems
[02:38:51]  fine but zone is very suspicious i think the angular team might be thinking that these days as well i'm i'm not yeah we have plans how to make zones optional and it
[02:39:02] 's uh yeah zones have they're like magical a little too magical sometimes so like let's say there are some cases that we need to um like for instance i mentioned that
[02:39:15]  we're running change station when the microtask queue is empty but it's some in some cases we can't plug into the microtask queue with async awaits because
[02:39:23]  that's like a syntactical thing rather than an api that we can right so uh in these cases we perform a compile time transform that does the same thing which
[02:39:34]  is works right but yeah no that makes sense uh exploring how to make zones optional and how to make change detection local also and uh run only run it only in components that have
[02:39:48]  been affected by a change which means that we need to impact the developer experience a little bit right right um okay okay some people like oh any idea for angular to be like next
[02:39:59]  js or whatever no let's not go there let's i actually here's a few here there's a question someone was like any like what what what's next wrang
[02:40:07] ler i know you guys spent a couple years on on ivy and the standalone components was a big release very recently what what what what what's coming yeah one of them is
[02:40:16]  improvement in the server side rendering experience there are some developer experience improvements we can do and also some like we currently can make our hydration story better for sure so that's something
[02:40:32]  that we're looking into actively and see how we can evolve it from there uh so that's okay i mean that's improve like core web vitals okay that's that's
[02:40:42]  key yeah so you guys are working looking at working on some of the hydration stuff and ssr stuff so i guess the question about next js wasn't actually that far far
[02:40:50]  off i i heard about angular universal in the past i've never used it i've heard someone was working on a beat based framework around uh angular uh yeah brandon yeah
[02:41:01]  yeah exactly right yeah yeah uh so uh you know uh which uh what is it called again um analog analog yes it had an a and i knew it like yeah analog yeah so
[02:41:12]  that was a massive shout out um and yeah so there there there's been a lot of progression there i i yeah i'm i think it's awesome you guys who work
[02:41:20]  on hydration um i know that there's been some exploration into reactivity and signals which also obviously is something i'm very interested in we'll see how how that goes and where
[02:41:29]  that lands but yeah it sounds like there's a lot of really cool stuff that that there was some people who initially were like oh why are you looking at angular i'm like
[02:41:36]  don't you don't you don't count angular out uh i think there's i think i think there's a lot of interesting stuff going on um and that was my
[02:41:44]  mistake in the past i as i said i completely missed misko's talk in 2019 about resumability and uh i would have been much better off if i'd been paying
[02:41:53]  attention and that that was on me so i'm paying attention now yeah uh you mentioned already the exploration we're doing around like change detection a little bit about taking it local and
[02:42:03]  uh running only in affected components that's going to be a significant improvement i'll say the change detection in angular right now is pretty fast with this compile time transform that we
[02:42:11] 're doing right we're not running it in the most efficient way so uh we can definitely work on on fixing this and uh uh a good thing about angular having dependency injection in
[02:42:24]  out of the box and having like a standard router and uh standard forms and standard way for managing even like states uh to an extent like there is global state which we have
[02:42:37]  some patterns but like we have we don't have an opinion approach allows us to build a lot of developer tooling so for example you can preview the routes in your angular application pretty
[02:42:47]  stand in a pretty standard way uh or you can preview this entire components or uh injector tree within chrome dev tools or angular dev tools in this case right uh so yeah
[02:42:59]  these are some other things that we're working on better developer tooling no that that that's awesome i'm that's the thing people don't realize when you've got such a
[02:43:10]  large framework and like large like usage i mean like so many like like you you got opinions you got pieces and you have such like you have a real user base you have
[02:43:22]  google you have you know you know all the users worldwide um it takes an amount of consideration that you know the guy by himself in the basement creating the framework doesn't have to
[02:43:34]  worry about in terms of stuff so it's a different move it you know these things are sometimes a long time in the making like react 18 it took like six years essentially
[02:43:46]  i mean there are 17 in the middle but no one counts that one like um and i i'm it's cool to see like all that work that went to ivy kind
[02:43:53]  of you know getting the compiler to where it is now it's like it's i got this feel and you can you know confirm you know deny whatever but that like there's
[02:44:02]  this kind of sense in the angular community that it's like okay we did the work we did the heavy lifting we got the new foundation it's it's go time like yeah
[02:44:08]  let's there's a mental value for sure yeah like i definitely got that feeling like just with the exploration into hydration like all the all the current modern topics a lot of
[02:44:17]  interest people reaching out talking about that on the angular team in the community um so yeah the ball's rolling again so like you know sometimes you got to do the hard work first
[02:44:26]  to get to where you want to get to um i feel like the anglers right there front and center just like the rest of us right now we're um exploring this
[02:44:35]  new zone that's kind of kind of been coming up the last couple years so very exciting times really really excited about um i mean sim we're getting a lot of inspiration from
[02:44:45]  the work you're doing with solid like a friend of mine actually recently messaged me he started his startup and he said uh i'll tell to ryan that uh you inspired
[02:44:52]  me to use solid for my project that's that's that's awesome i'm so happy to see that influence come out for me like i had my own kind of journey which
[02:45:00]  was like really believing in this approach and nobody really even recognizing it and react basically killed all the projects that like i liked the react was like no you do it the react
[02:45:10]  way no one and i'm like okay no one wants this and then just suddenly something changed a few years ago and people are like oh this is actually good and i'm like
[02:45:18]  i thought it was but i was so for the ecosystem can convince me otherwise so um i'm glad to see that influence come around and yeah i'm i'm very much looking
[02:45:26]  forward to the future of that aspect especially in angular i don't know if you guys are like i think there's a choice to be made there with the signals and i
[02:45:33]  think it's not a clear like i think people don't understand how it's not a clear like it's not just like oh yeah instant win like you have to think about
[02:45:40]  it and where it makes sense so but i'm as long as you guys are working on that stuff i'm willing to as you know help out or talk through any kind of
[02:45:47]  stuff because i'm i'm very stoked to see stuff in this direction same yeah really enjoy the collaboration all right we should let minko go because it is time um
[02:45:57]  and yeah solid mate nice um but yeah no uh thank you so much for being here uh joining us give me a little intro to angler i'm gonna have to look at
[02:46:07]  it more in the future i know i'm definitely gonna have power on maybe even have yourself on again at some point when i get a chance to actually dig into a little bit
[02:46:14]  more code um but this this was great thank you so much thank you yeah thank you for having me really really enjoy this chat yeah awesome we this is not the end of
[02:46:22]  the stream we're going we're going to keep on going but let's give me go send off but all right how's everyone doing that was awesome honestly like i like it
[02:46:35] 's it's it's it's it's i shouldn't say it's incredible when you know how many amazing people have worked on angular over the years um you know and the
[02:46:47]  fact that they have like a team of some of the you know brightest engineers hired at google working on this project but like it's it's it's it's a difficult
[02:46:56]  uh problem when you have like so many internal teams to support external teams when you're when you're sitting there and you're you're kind of working through this problem space and
[02:47:06]  you have both the legacy of being successful and the constant changing uh of the web it it's it's it's it's very interesting and honestly i i i learned a
[02:47:21]  lot from this i i was so happy because like i'm not gonna lie if i'd done the angular stream myself we would have kind of dug around but we wouldn't have
[02:47:28]  gotten here so quickly because like for me i know this is not a beginner stream and like the way we talk but i i like when i see something i i have to
[02:47:37]  ask that question i'm like yeah what does the compiled output look like like what what why are we doing this and having minkle here to answer those questions was so so key
[02:47:46]  um yeah um so i know i i most of you were at least polite in chat and weren't like i know there's some some some angular react uh you know back
[02:48:00]  and forth where people are saying some snide comments tried to ignore them for the most part but um yeah i i think i i think that uh i think i think this was
[02:48:09]  a good chat and i i'm gonna do more in the future i know i know angular sometimes gets a bad uh rep so to speak but i don't i don't think
[02:48:17]  it's i i i i you gotta put it in the perspective of like you know what kind of evolution that's gone through and like where it is like it's funny
[02:48:28]  i i do i honestly i wonder in in a short period of time will people be looking at react like this you know because at a certain point you're like you start needing
[02:48:38]  to solve more advanced problems you've become more opinionated then you realize that there's limitations in the language things you have to patch you know use event effect whatever you know
[02:48:47]  like and then suddenly like at a certain point you've you've kind of created your own dialect in your own place and reactivity is definitely the type of things that would take
[02:48:58]  you there too so um these things are just a little bit different but you can see the incredible power here i hope everyone watching can see the incredible power here you don't react
[02:49:07]  as better you can uh people trolling in my chat of course you are how's how is twitch chat going i haven't actually checked over here for a little while um
[02:49:16]  right so yeah i mean yeah no okay we're still good we're still live okay that's awesome don't check here it's trolls yeah no seriously it is funny when i
[02:49:31]  go like look over at the twitch chat compared to the youtube chat it's like that it's like the youtube chat there's just like oh yeah i had this angular project
[02:49:38]  or you know i'm really interested in this and this and i go to twitch chat and it's just like you know react is better uh it's not trolls just one oh
[02:49:49]  man you all are great uh i i i'm i'm i'm not criticizing and you everyone yeah everyone knows view is the best right yeah uh the the funny thing that
[02:50:05] 's interesting is i don't know if this is actually like as true today um i actually went to that one of those meetups tom chino uh spoke who was like the
[02:50:21]  he he was like the management manager on the react team for years and years like switching through their like early days through kind of like the mid days he hasn't he wasn
[02:50:30] 't i think he left a few few years ago but um he was talking theo asked him this great question and he you know about like react becoming more a framework than a
[02:50:42]  library and tom tom like agreed he was like yeah so like we are getting into a place where react and angular comparison might actually finally be relevant where it's never relevant before you
[02:50:53]  know sometimes that's like the comparison conversation i have with uh with uh svelte and solid people ask me about this because it's kind of like i don't actually think
[02:51:03]  like you can build this you can have a next.js on react right or you can build like a framework on top of of solid like solid start but i think the
[02:51:13]  thing you got to understand is even when you get to the framework zone the way they look at things or value things historically has been different than maybe the way angular does i actually
[02:51:22]  think that philosophy is changing a bit um so i you know like for me that's kind of like an interesting topic on its own uh all right the pools that pays me
[02:51:40]  the most yeah wow you know that's that's definitely the way to go you i i think that that is that is that's how you do it right i mean these things
[02:51:53]  are different but then like how different are they you know like that's why people talk about that whole 10x thing but like let's face it the stuff moves forward increment
[02:52:09] ally anyways every time every time someone mentions wiz i feel like a lost art has been hidden from us yeah i mean marco is in the different than wiz but also in that
[02:52:20]  kind of category except it was open source so it wasn't hidden we just kind of slept on it um all right all right so what else are we doing today yeah we
[02:52:35] 're gonna do i gotta get quickly set up here for this week in javascript i was that was fun playing with angular but there's a there's a few topics
[02:52:44]  that we should talk about this week um just kind of getting that going uh where are we going here let's see if i can get my twitter going i gotta be so careful
[02:52:56]  now because we got all those like private circle things that keep on showing it and some of those conversations are actually like really good um but yeah oh it's funny yeah everything's
[02:53:07]  in my bookmark i like didn't tweet this week at all i was like i was i was kind of uh i was doing uh the the new york event and
[02:53:18]  then i was at that meetup in san francisco like the next day and i just kind of like yeah okay so let's get that sorry i know i'm not sharing
[02:53:28]  my screen right now um yeah i mean we don't have time now i one thing i was debating on doing today because like obviously spell kit is a big deal and spell
[02:53:40]  kit was released um but like uh yeah it was kind of an interesting uh i people talk about forms and like part of me was like maybe we should just build some form solution
[02:53:56]  right now like wouldn't that be fun like i i'll talk about it in a a minute okay you know we'll we'll talk about it in a minute let's
[02:54:05]  do that okay and then what else do i want i want solid sorry you guys have no clue what i'm doing but that's all good i don't think this week in
[02:54:13]  javascript is going to be the longest this week in javascript so that there's a temptation here actually you know what before we do that let's quickly look at
[02:54:20]  what minko sent us um uh let's let's let's let me share my screen a second let's see here i i'm kind of curious how he sent
[02:54:31]  me this article from 2017 implementing angler's dependency injection in react understanding element injectors and i we'll we'll probably be able to tell really quickly here whether um this article
[02:54:46]  is just over our heads for being able to just talk through here because honestly i i feel like i only got about 70 of what minko was saying at the point
[02:54:54]  i'm gonna have to like sit with dependency injection for a moment um but okay like what is this using okay so this is injection js for angular core blah blah blah i just
[02:55:10]  want to see if there's like is this just a whole system built outside of react and then layered on top okay so providers provider can be yeah i'm just like semi
[02:55:28]  curious what are we doing here reflect they get how much of this is just playing around classes to make sure they play it's a fork of react 15 4.2 okay
[02:55:44]  so this might be just like this is like pre-hook so provider can big okay service okay yeah so this is yeah this so this is not just uh like a mechanical
[02:56:00]  thing this is like literally can we uh yeah yeah this looks like it was even maybe pre-modern context being in react it's like Although the mechanism doesn't look
[02:56:24]  like it's necessarily too complicated. That's interesting though. But the approach he took looks like he's, he actually had the fork react and get in there and then change
[02:56:36] . Okay. This might be a good read for another time. I don't think, I don't, I don't, I think this probably, I was like kind
[02:56:45]  of, if there was a lot of React code in here, I'd be like interested in following it. But it's more of that, like all the code is
[02:56:51]  basically written in this library and then the React is just consuming it. This code manipulates React's internal user prior problem. Yeah. So it's not, it's not
[02:57:01]  anything in user space. Oh well. Yeah. Okay. When did it, I don't know. I didn't join on Twitter until like after this had already changed.
[02:57:19]  Okay. So forget about that. Okay. Was there anything big on. I love Ben's work. Okay. But that was a week ago. Yeah. I don
[02:57:38] 't know. I want to grab a couple more things before we could do this. we can JavaScript. Someone mentioned the Astro release. Oh, there we go.
[02:57:48]  Astro, let's do Astro release. Astro. There we go. Somehow I missed the 1.7 release. Yeah. Oh, well, because it happened
[02:58:02]  while we're streaming. All right. Okay. This looks interesting. We should, we should look at this. This is what happens. I'm in the middle.
[02:58:17]  Sorry. Who does a Friday release? Seriously. It's supposed to do it before Friday. And then I get to look at it. So I stream at this point.
[02:58:24]  Cause no one does a release on Friday. All right. Cool. All right. Let's, let's blow some stuff up. All right. Everyone's still alive
[02:58:38]  out there. All right. Let's, let's see where we're going here. Go here. Yeah. I don't even know what order on attack this stuff in
[02:58:59] . Friday is the best time release. You got the whole weekend to fix it after. Yeah. Yeah. Yeah. Yeah. Yeah, whatever. Friday is the best
[02:59:07]  time release. You got the whole weekend to fix it after. Yeah. Yeah, exactly. Oh man. Yeah. It depends on what, like what it is to be
[02:59:16]  fair. I worked in education and I worked at schools. So in a sense, this was actually made a lot, a lot of sense. You know, if you want
[02:59:23]  like to test something like a big release, but like. Like that was only for our big, big releases. It's like, you generally, you don't want
[02:59:32]  to ruin people's weekends. Okay. Okay. Let's, let's, let's, let's, let's get this going here. Let's go back to me
[02:59:44] . And actually I brought water in this room, but I was like in such a rush to get started. I, I missed it. One sec. Oh man.
[02:59:56]  Water. Thank God. Water. All right. All right. That's so much better. You're trying talking for like hours on end when no, no water.
[03:00:21]  It's like, all right. All right. Okay. Um, yeah. So I probably don't have like the most news, but let's, let's just,
[03:00:29]  let's just go with this and see where it goes and stay active chat. We'll, we'll keep, we'll keep things rolling. You know how this goes
[03:00:35] . So, um, I know where I'm going to start. All right, let's do this. So let's talk about this week in JavaScript. Honestly, this
[03:00:51]  week in JavaScript, uh, I haven't been following as closely as I usually do. I, I was traveling a lot for me. It meant, uh, going
[03:01:01]  to both New York and San Francisco meetups back to back and, um, trying to keep PRs down, uh, you know, and solving issues along the way.
[03:01:13]  So I have to admit, I missed most of the big events and I'm only kind of finding out about them after the fact. Um, but I think pretty much
[03:01:24] , honestly, the, the biggest thing that happened this week by far was the release of SvelteKit 1.0, which probably surprised many of you because I did
[03:01:38]  not really cover SvelteKit today. Um, we covered SvelteKit a year ago on a different stream. There have been some improvements, um, but
[03:01:47]  for our purposes, um, a lot of the changes have been cosmetic or, you know, like, uh, how should I put it? Like syntaxes, things that
[03:01:58]  make the user experience a lot better or, so the developer experience a lot better, but mechanically, you know, didn't really change too much. I was, I
[03:02:05] 'm very happy that they addressed a few of the things that actually had confused me on a street on the stream, stuff like what runs on the server only, or what
[03:02:14]  runs on server and client, because we, we, we, there was different ways to fetch data last time on, when we did the stream and it was not very clear
[03:02:22]  what the best pattern is. Now it is, they, they've solved this simply by saying like, like, look at these answers, right, or these questions right off
[03:02:30]  the bat. These are all the answers that are questions they intend to answer using SvelteKit. And I think, I think this is a good way of looking
[03:02:39]  at it, you know? Um, and I'm, I, I think maybe this is a good test for any meta framework, right? Like let's, let's
[03:02:49] , let's look at this list for a second. How do I structure my source code? Do we have an answer for that? What's all start? Hmm. Maybe
[03:02:59]  mostly I get, I guess. I think there's some flexibility there, but yeah, I, I think, I think the answer is mostly how do I add server
[03:03:07] -side rendering? Yes. How do I add routing that works on the server and in the browser? Yes. How do I make client-side routing accessible? That,
[03:03:15]  that is good. SvelteKit have that built in. That's a great feature. Um, the, the answer to that is you have a area lives section that
[03:03:23]  updates, but I think that's a great one. Um, I mean, that's part of the answer. There's more to the answer to that as well.
[03:03:30]  You have to have, um, tabable, um, selections in, in order to do navigations and a number of other things. Actually, accessibility is a very challenging
[03:03:40]  problem. Uh, but yeah, it'd be interesting to see what the, how they handle that on best practices. How do I fetch data? Yes. How do I
[03:03:47]  mutate data candle errors? Yes, yes, yes, yes. How do I optimize? Yes. How do I handle environment variables sensibly and securely? Yep. That
[03:03:53] 's a, that's a good question. Um, how do I, CSP and yep. How do I add service workers? Know what to cash? Yep.
[03:04:00]  How do I perform my application deployment? Okay. Yeah. So I could does so with design by real world army of beta testers. Many who've been railing cell
[03:04:12]  kit in production for some time. Exactly. I think it's, I think it's valuable to have a long beta period. Uh, remix basically did when they were
[03:04:20]  close sourced and, um, we just starting with solid where we're basically like a year and a bit behind the others. I think that, I think it's very
[03:04:28]  valuable though. A lot of learning comes from this beta period. So people who are critical about this, I think, I, I mean, I don't, I,
[03:04:37]  I don't, I don't think it's founded. I think you got to understand the amount of effort that goes into the framework, like the core libraries, like S
[03:04:43] velte or solid by comparison are kind of a lot easier. Sure. The hard engineering problem from a, like a mechanical optimization standpoint and like making sure that the prim
[03:04:53] itives work, like from a design standpoint, but it often it's these meta frameworks where the metal hits, you know, the, the road or the rubber hits the road
[03:05:03] , so to speak. So a lot of these questions, you know, when you're writing, making the core framework, you're like, oh yeah, there's a
[03:05:08]  solution for that. Do something like that. But we're not actually the ones doing it now, when you get the meta framework zone, you are the ones doing it.
[03:05:15]  So that's, that's a big change up. So. Um. It's different from his friends. Yeah. So talk about next remix talks about Astro felt
[03:05:24]  kit does things a little differently. OK, let's see how Svelte kit is different. Yeah. Um, unlike traditional MP apps are everything defaults to client
[03:05:36]  side navigation after initials. OK, yeah. So this is like this part is the same as next and remix. Blah, blah, blah. Yeah, OK.
[03:05:46]  OK, so they're just saying that they're not doing. Um, MPAs. It's funny though, like the framing, unlike traditional multipage apps.
[03:05:54]  Oh, or MPA frameworks. Actually, you know what? This is an improvement. I, I didn't, I didn't catch the orbit yet. This is
[03:05:59] , this is, this is a good thing. Cause like MPA frameworks are also desirable in a different sense. So, OK, so it's basically like we're not
[03:06:06]  Astro. Um, we're, we're more like next. OK. Okay. Unlike traditional server frameworks allows you to use one language. Yeah. OK, so
[03:06:15]  very similar to reason for next or remix. Unlike static side generators, you can build apps with personalized dynamic data. OK, right. OK, so not, none of this
[03:06:23]  is actually. Unique particularly, but look, OK, what's all you have flexibility? Many framers assume one correct way to build it out. Probably is more nuanced
[03:06:34] . It's not true. For example, print. OK, so this, OK, this, this sounds like a jab at remix a little bit. It's not
[03:06:40]  true. For example, that pre-rendering static pages is a poor man's cache control. It also lets you do build time validation or render data from a file system
[03:06:46]  that your edge function can't access and acts as a hedge against flaky databases. It's not. Yeah, it's interesting. What do I feel about this? Because
[03:06:56]  I do think pre-rendering is a form of caching. It's a scale. That being said. There's different types of caching, right? Like pre
[03:07:07] amp. There's like, you know, cache through like, you know, like, you know what I mean? Like there's stuff that happens on demand and stuff
[03:07:14]  that you can trigger. Um, so like, but yeah, I don't think, I don't think. It's fair to say that it's not like the
[03:07:24]  browser cache and catch row headers is not the only type of caching you should be considering. Do you feel it's OK? So, OK, so basically they're taking
[03:07:34]  a stab here saying that they want to do SSG unlike remix. So that's a remix differentiator. Um, in focus app, you can make these choices of
[03:07:40]  granules. You need page. You look around as pre-rendered by repls rendered in dynamic switching to sing a lot of code. Yeah. And that's what
[03:07:46]  they call transitional apps. Oh, that's weird. I don't like that definition, but I can't argue with it. Rich came up with the definition. Um
[03:07:55] , you know, transitional apps is his thing. I'm glad that we don't have to fight over it because I, I have no interest in transitional apps, I guess
[03:08:03] , from that definition. I mean, sure you can do that, but like, I mean, do most solutions do this? Like we haven't built this in solid start
[03:08:15]  yet, but it's, it's like, you know, like an hour away from adding. We just didn't bother doing this yet. I just, I,
[03:08:22]  while I think the statement is true, I think like the remix perspective works like 95% of the time. So like the, just haven't got to that last 5%,
[03:08:33]  but this is do most framers like next. Like, I don't know this. I'm legitimately asking the chat here. Do most framers like next let you go
[03:08:40] . Yeah. Pre-render this page. Don't pre-render this page. Um, or yeah. It's interesting saying that transitional apps being about pre-rend
[03:08:58] ering is weird. I don't know. That's, that's, that's a, that's not what I expected. Because like, if you actually go to Rich
[03:09:06]  Harris's original talk. Um, he's actually, when, when he, like when he's talking about transitional apps. I realize you guys can't hear this right
[03:09:15]  now, but when you get to the end of the talk, he's talking about Svelte as being transitional app, but then he, he mentions other frameworks that are
[03:09:26] , that are working in this zone. Right? And. And. He talks about react server components. He talks about Marco. He talks about quick. He talks
[03:09:39]  about quick. And he talks about astro. And all of these solutions. Sorry. Are not. This. They're, they're, they're, they're
[03:09:51]  actually a partial hydration transition. So. Okay. That's, that's interesting, but let's, let's move on from that. Um. Because so it uses
[03:10:02]  V, blah, blah, blah, fast hot module reloading. Yep. It's freaking awesome. Type script. Roll up, blah, blah, blah. So I
[03:10:10] 'll get to do all this stuff. Awesome. Awesome. We're going to deploy my apps. Of course. For cell, Netlify, Cloudflare, Azure
[03:10:19] . Can you provide adapters added support for Deno, BUN, Firebase? Yeah. No, it's great. Yeah. And even adapter node. Yeah. And
[03:10:28]  you can use adapter static. The terms of a static enter for any website, including GitHub pages. Yeah. No, honestly, SvelteKit was. Some people
[03:10:36]  point to salt start and remix, you know, SvelteKit was our biggest influence, not even close. Like when I was sitting there at the beginning, even before
[03:10:44] , like they really embraced beat. And we were like all in a beat. I just kept on like trying to reverse engineer SvelteKit's code and look at that
[03:10:52] . Um, that was like the basis, the whole adapters, everything was like kind of going, looking at what SvelteKit had done. So, um
[03:11:01] , big influence for me and for us with solid start. So it's awesome to kind of see that full picture come together. Um, yeah. And then a bunch of
[03:11:10]  thank yous. Okay. Yeah. Yeah. I got to think about this. This is one of the hardest challenges that I've had talking about solid start or talking
[03:11:17]  about SvelteKit or remix or all these things. They're kind of like all the same. like obviously the stuff like the experimental islands stuff that we're doing
[03:11:24] , you know, and the separate components stuff that next is doing that. Those are very, very different. But like when, when you go and you go, okay,
[03:11:33]  let's talk about, um, these frameworks. It's, it's kind of like the, you want your framework to be boring because then like, you don't have
[03:11:42]  to worry about these decisions and everything just works. But it's like, I find it harder to sell it. Cause you're kind of like, yeah, we suppress
[03:11:48] , we support progressively enhanced forms. And you're like, yeah, of course you do. Like that. That's a baseline. Now you support, um, you know
[03:11:55] , like answering these questions now is just kind of the expectation. It's not a, you know, and I think this is the challenge because it's like talking about the
[03:12:01]  unique value prop. It's like you and everyone else. Right. So it's like, honestly, I'm having this problem with solid start as myself. Like I'm
[03:12:10] , everyone wants me to do some talks on solid start. And I'm just like, yeah, I mean, I kind of like keep on pulling myself over to the
[03:12:18]  experimental stuff because I'm like, yeah, this is my problem to solve though. Maybe this is just my personality. I need to, cause it's just like, what
[03:12:27]  do you want? You want something stable, something that works well and gives you all the tools you need. So I think this really delivers. It's just like, it
[03:12:37] 's, it's hard to, this is probably probably why I didn't do the stream. It's hard for me to get excited about that part as much right now
[03:12:44] . Cause I feel like we're on the prefaces of something even bigger happening. I'm not saying Svelte is not on that road as well. It's just
[03:12:52]  like SvelteKit 1.0, solid start 1.0. This is about filling that gap that we need to get our community and get people using it and actually
[03:13:00]  get into real production apps and actually get ourselves out there. But things are changing. Let's keep on going. Oh, there's a what next at the end.
[03:13:13]  It's the beginning, not the end. It's ready for a decade. But we're getting started. Roamac was built in I in 18. Awesome. We
[03:13:19] 're at a static regeneration. Makes sense. Grinder control over deployment region structure. Image optimization. Yeah. Definitely was playing around with that recently. Many other friends. Next
[03:13:28]  year. We'll also work on Svelte for more on that later. Yeah. Don't have as far as Svelte community, blah, blah, blah
[03:13:33] . Subscribe. Okay. Yeah. Yeah. Yeah. This is interesting because there's like, there's two things happening right now. The edge stuff. And I like,
[03:13:47]  so like sometimes I'll like sit in a meeting, you know, or, you know, maybe talk with some people at Netlify and talk about the edge and what
[03:13:53]  we can do there. And there's like a whole range of optimizations that we can do on these platforms. And they're similar enough that we could probably deploy the
[03:13:59]  same kind of optimizations across the, like the different platforms like Cloudflare for cell Netlify. And, and, and, you know, you talk about like
[03:14:07]  handling better stuff like static regeneration and like more granular, um, caches and, you know, more control over deployments. And, you know, these kind of
[03:14:18] , you know, better stuff for like image processing and like that kind of layer of stuff. And, you know, uh, you want your internationalization, your router.
[03:14:27]  And like, there's like, and like being able to like serve different, like there's a whole range of stuff you can do with edge middleware, um,
[03:14:34]  detection stuff like, you know, built into these platforms that you can leverage and do incredible stuff. And then like on the complete other side, you have like what, you
[03:14:42]  know, Marco or, you know, our experimental branch or quick and what they're doing. And like, yeah, man, there's, there's a lot of
[03:14:49]  really cool stuff. And it's like, it's, we'll, we'll see how it like all kind of comes in, but this is, this is kind of
[03:14:59]  like, there's like the, right now there's, and it's happening even at a smaller ecosystem level. There's the bundle up the build up, which like
[03:15:10]  we're trailing react, like next is a leader there. We're always going to be trailing the big player in this game of bundling up. Cause there's
[03:15:18]  just, it's a difference between the community sizes. And then there's like breaking down, splitting apart, changing the boundaries, changing what's possible, changing the way we
[03:15:29]  develop, um, you know, an architect or code. And it's very tricky when you're like on the smaller frameworks, you know, less ecosystem that have this
[03:15:43]  capability to maybe take things to the next level to prioritize between bundling up and it, and like innovating in the space. So yeah, it's, it's,
[03:15:52]  it's interesting. I'm looking forward to Svelte 4. Cause Svelte 4 is where that innovation is going to come from. I'm pretty sure on the
[03:15:57]  Svelte side, um, I, there's a lot of potential in Svelte's compiler. And I think they're, they're going to look at
[03:16:03]  granular stores. I'm pretty sure. I think, I think there's something missing there. I've been, I don't, I think they didn't need it because
[03:16:10]  of what they were doing before, but the more ambitious they're getting, they're going to, they're going to need something like that to scale. So I'm,
[03:16:15]  I'm very much looking forward to Svelte 4. I think I'm going to be very, very excited about that. I think, I think meta frameworks are just
[03:16:23]  not built for me. I think that's where we're at. Yeah, yeah, we need this kind of related to that be one of solid start question, right
[03:16:36] ? OK, so similar thing. Ben did this great video here about progressive enhanced forms and why he thinks the Svelte versions are amazing. Do you know what?
[03:16:48]  I put a challenge out there for people here. If you think your form solution is the awesomest for progressive enhanced forms. I want you, I want to
[03:17:00]  remake to do MVC. I know to do MVC is a super simple thing. This is like, you know, everyone sees me redo hacker news over and over again
[03:17:09] . I want to remake to do MVC. And the reason I want to remake to do MVC is to do MVC is the simplest app like thing. Like if
[03:17:16]  you think about it, the JS framework benchmark is to do MVC. Whereas like hacker news is like a very simple like content site. Like whether you do the movies
[03:17:25]  demo, you do hacker news. It's like the same thing, you know, and an e-commerce site might be like a hacker news demo that has a cart that
[03:17:31]  happens to be to do MVC. Like, like there's a very oversimplistic way of looking at stuff. But I, when, when, when determining
[03:17:39]  the, not the full usage, but when looking at the mechanics of very simple elements of your system, I think these examples. Very quickly highlight whether they're saying, like
[03:17:54] , I still used to do MVC to this day. Um, to, to essentially go like, do I like this framework? Cause like, I remember this to do
[03:18:03]  MVC. And then we, we find that framework crank because remember crank JS. It was like an async generator thing that got rid of suspense to do, you
[03:18:11]  know, to do stuff. And yeah, I mean, this looks like it works fine. Okay. Beautiful. And then, and then I looked at their to do MV
[03:18:21] C example and I was like, okay, what's going on? Okay. Why are we mechanically adding event listeners and our components are generated. Okay. I'm fine
[03:18:29]  with that. Add events. This is a key down prevent default title trim. Okay. This looks kind of familiar from to do examples and then while true yields. What
[03:18:38] ? Okay. Okay. That's fine. Doesn't this header render once or the render multiple times? I guess every time the title changes. Okay. Add these event listeners
[03:18:49] . Okay. Okay. Okay. Okay. That's a lot of event listeners. And now we're doing this or yield. And this might be a completely unfair.
[03:19:00]  Look at it. Like while this is a react like framework with JSX. I, I immediately was like, I couldn't picture myself author a authoring like this
[03:19:15] , this dot refresh. And then I'm like, I don't know why they chose to use events like this or communication. But when I saw this, I was
[03:19:23]  just like, you know what, this is probably not for me. I like the concept of crank a lot and I'm not here to hit like criticize on it.
[03:19:33]  I just wanted to point out that to do NBC is still like essentially, you know, like a benchmark in terms of getting that first look and understanding of what's going on
[03:19:45] . I see no, well, that's the funniest thing. I'm Mark Vansky or whatever the guy from a front end masters. He rewrote the
[03:19:52]  vanilla version. Right. And it was like 600 lines of code really well written, really clean with modern JavaScript. And you, you look at that and you're like for
[03:20:01]  something as simple as to do NBC. Yeah, man. Like vanilla. Like it's, it's sweet. Like, and like, yeah, it's not about being
[03:20:10]  the best example. Right. It's about under like finding the smallest unit that you can compare on to take to the under, to like, look at it. And
[03:20:18]  I think, I think we should, we should put to do NBC up to the test. Like if you're going to tell us that with your progressively enhanced forms, we
[03:20:27]  can build apps. Well, show me to do NBC because honestly, like, yeah, what I miss from two is off. Yeah. But off is the next level.
[03:20:39]  Like that, like after the hacker news. Yeah. There's probably needs to be an off level thing. Cause that, that, that's a routing question and like
[03:20:46]  authentication and like that kind of thing. Context. Like that's when you start into global stores and all that. First two stages is content site, hacker news.
[03:20:56]  Crud like operation. To do NBC essentially. Right. So. Um. Can see Dodds made this version for remix. It's three months last commit. So it
[03:21:09] 's, it's like, it's out of date, you know, and he set up some like a database and entry and stuff. But I, I think this
[03:21:14]  is like should be our gold standard here when we're looking at what we should do for a to do app. So in the route, there's a to do's thing
[03:21:21]  and there's an outlet in it. Why is there an outlet? It's funny. I didn't realize that. Okay. Okay. But okay. So here's
[03:21:28]  the header for it. This is, if you look at this JSX, this is your typical JSX for a to do app. It only takes that much. I
[03:21:35]  mean, I can, I can pull out like a, the stock one that I used, like super tight, small to do NBC that I used for, um, uh
[03:21:44] , the comparison of all the frameworks. Um, I'll just use the solid one for a second. Um, but like, if you go into here and look at
[03:21:53]  the JSX, it looks almost identical to the remix one. Like this is all the HTML or JSX you need. This is the whole to do MVC and solid
[03:22:01]  using a signals version. Um, or no, actually no, this is using a store version. All right. I'm using a store. Interesting. It doesn't really
[03:22:09]  matter. Um, this wasn't the one that I actually used. I used a single version for the comparison, but what, so there, everyone was the same, but
[03:22:15]  what I'm getting at is like, this is your JSX, right? What's cool about the remix one is it's also handling progressive enhancement. And it's
[03:22:24]  also handling some errors and stuff, which, um, most of them don't have that much, you know, for, but what's interesting to me is the reason I
[03:22:34]  like this example is because it has optimistic updates. Right. Right. So you can see stuff in here, like optimistic to do's remain and no to do's and
[03:22:43]  like, like class name, like it shows like how there's optimistic stuff playing in to like. All complete is optimistic to do's remain and remaining after length equals like essentially
[03:22:57]  it's using the optimistic updates to kind of figure out some extra logic, um, to, to render the UI. And I, I actually didn't look at the
[03:23:05]  Svelte kit and, uh, version. Maybe we should take a look. Does the Svelte kit forms have optimistic updates? All right. Svelte.
[03:23:12] dev, um, Svelte kit. Yeah, sorry, I can, I can, I can get bigger text. Um, uh, let's look here.
[03:23:24]  Um, forms. Or actually maybe we should turn the word optimistic. Optimistic. No, because honestly, optimistic updates are the best, best, best part of what remix
[03:23:43]  is doing. I've said that multiple times. I don't really like, I mean, we could do it without it, but let's see what. Okay.
[03:23:53]  Nice named actions. I love this. See, they can export multiple. That's one of the reasons we went with the API choice for solid start. Okay, so
[03:24:01]  blah, blah, blah. Do the action stuff. You get the page data and the action data. Okay. Okay. So we get back form success. Yes. We
[03:24:14]  get back errors. okay okay okay that's cool handling redirects that's cool loading after mutation that makes sense progressive enhancement yeah sure sure apply action sure custom event listeners
[03:24:45]  yeah yeah huh okay I wonder hmm hmm hmm hmm I mean this is this is actually why I want to I think it might be worth building this to do example with the optimistic
[03:25:08]  updates because actually I think if you went back to core react with it or core solid it might actually be as complicated as this remix example like uh like or like complicated like
[03:25:22]  the reason I'm saying this complicated is first of all there's all this combination of optimization logic which is sweet but then like what I'm getting at is here's okay
[03:25:29]  this one makes sense you know when whenever you have a toggle fetcher form so this is how you toggle the checkbox um there's going to be a form in each list
[03:25:39]  item if we go down okay the footer has um some filters these are links so they work fine but there's a clear form clear fetcher form and then each each
[03:25:55]  list item also has a form to toggle if you're going to check it or update it so you know delete you know so there's a whole bunch of forms here to simulate
[03:26:08]  for the for that and then um essentially the key big one is is when you start typing you actually have multiple in-flight requests going um when you have the optimistic update
[03:26:23]  turned on and the way that the re this remix example does that um is in here there's a new to do ids map where each one has a create input that is
[03:26:37]  generally hidden I guess um well it's not like the current one like when it's not the new one so they make a bunch of hidden forms and that correspond with each
[03:26:47]  like even though it looks like one input field it's actually creating a hidden form and then has multiple in-flight actions because you have multiple copies of the form on your page
[03:26:59]  and then they're able to at the end of the list um not only iterate over the forms that are present but also over the over the ones that are in flight so
[03:27:18]  you can see them both um to do's to render what's to do's to render my guess is to do's to render is yeah to do's plus optimistic to
[03:27:31]  do's put together see so um essentially they're creating multiple forms on the fly as you're doing these multiple in-flight to do's and this is basically the mechanism this
[03:27:47]  is why I want to recreate this because it's I think it's simpler without forms but I think there's a lot of hidden logic here people don't realize how much
[03:27:54]  this is saving them in a certain way and I think it would be interesting to see a comparison between this example built in like remix version built in svelte kit and built
[03:28:06]  in solid start I made a very simple version in solid start um uh uh I have to admit that I don't have all the error validation logic that the remix one has
[03:28:23]  in there so I I need to update it a bit but um the this this this example was really big for me to kind of figure out um we're back to one
[03:28:35]  file again but essentially really kind of started thinking about like how to handle like here's all that logic around the remaining count and like the optimistic updates like if you know it'd
[03:28:46]  be interesting to see if there's what the svelte kit equivalent would be for completely progressively enhanced optimistic updated to do mvc app because I think that should be the
[03:28:55]  kind of gold standard like I I did this and I was like I got this app to here and I was like you know what I I accept this but I have to
[03:29:04]  admit it took me a long time uh almost like two or three weeks during the summer I just was not happy with getting this example to work in a way that I liked so
[03:29:14]  um yeah let's like let to do mvc decide for us all right yeah no elm it looks so awesome in these kind of scenarios so yeah I'm okay
[03:29:33]  what else we got here apparently twitter has removed twitter spaces feature I don't know if this is true but this has me alarmed because I have a we have a event
[03:29:43]  tomorrow with misco fred um myself daniel roe a whole bunch of us um are actually supposed to be doing uh a space talking javascript frameworks tomorrow at uh
[03:29:58]  I think 12 30 um pacific time so yeah I I hope this there's more to this it's back okay sweet because that was just like really random all right what
[03:30:16]  else do I want to talk about here okay yeah we got we got a couple ones ah it's funny we we featured uh we featured Devin last week uh after the better
[03:30:28]  react uh conversation and then this week he came back with something completely office opposite and I it's funny because last week he's like we should all bet on um quick because
[03:30:40]  quick's doing something that no one else can do which is a good take this week he came back and he's like we should all bet on solid I think I think we
[03:30:50]  should just take both threads and then just like be like and and put them in their entirety but I wanted to showcase this one today just because I showcased the other one last
[03:30:59]  week um so what what does he got here um let's see is this the thread I think it's a really interesting credit could quick apps work without with javascript
[03:31:12]  disabled could quick be implanted without a virtual dom my bet is solid will ultimately be the winner react is good for apps solid is good is better for apps leading software companies create
[03:31:21]  apps like twitter where they have long lasting sessions I suspect completely removing vdom is the hardest part of this equation hmm I actually suspect he's right but I think presumability
[03:31:33]  is also a very hard equation I think the problem is that both of those hard problems make the combination of those ideas even harder I think once ryan figures out good network prints
[03:31:45]  like how to resume it's basically game over I think it depends on what my what our goals are um because it might get resume ability not sure if want that that lazy
[03:32:00]  loading stuff which is probably the more breaking thing I'm seeing someone's asking the target domain a solid starter solid itself um to work like quick it would be have to be solid
[03:32:14]  um but I think I think resume yeah actually resume ability would have to be solid I think resume ability is a responsibility of the renderer it's like like someone came to
[03:32:24]  me and was like oh when will astro get resume ability I'm like no astro doesn't get resume ability it's not within its wheel part resume ability is like a
[03:32:32]  it's someone will get on my case for calling it hydration but and it's not hydration in the classic sense but it falls in the same domain like you are resumable
[03:32:41]  or you are replayable but it's that responsibility is completely on the renderer and the underlying framework and it's not a responsibility of the meta framework you have to build it
[03:32:50]  in you can't just like add ability to some like to react or something you know like you you have to build it in um but okay let's keep on going here
[03:32:58]  um also what kind of apps or software do you want to work on some will care a lot about flatter learning curving accessibility to lower end devices and with bad connectivity they'll
[03:33:07]  go over remix sure I'd love to work on monoliths like gmail blah blah blah blah okay for these monolith solid is a clear runner it's not just faster
[03:33:15]  render performance it's also less javascript new ecosystem less garbage be done less model okay yes okay remix is great for apps for the user's clear objective yeah okay okay
[03:33:23]  today quick is a is great for any monolith that also cares about initial page loading yes like google search blah blah blah blah i think it's easy for solid quick to copy
[03:33:30]  what they want from remix very very true but it's hard to choose between quick and solid yeah okay good well he leveled it out at the end because at the beginning
[03:33:38]  he said that's solid for me the difference is solid quick it's a quick it's a support for react components yeah i don't know how much this actually matters but we
[03:33:51] 'll we'll see and solid's focused on client-side rendering performance this this one's always interesting for me because i guess it's architecturally concerned with client-side rendering
[03:34:03]  performance but it's like something that i that we haven't really test touched much in about five years spent like literally the last three years working on ssr but yeah
[03:34:11]  i i think the converge i think the interesting take but i think the i think the convergence is is actually difficult so i just want to stop on this thread for a minute because
[03:34:22]  i think i think it's an interesting question because i do see where this perspective comes from but i also see a certain range that like i don't know if solid ever
[03:34:33]  goes all the way to where quick is so i don't know if this statement is true like the game over but i think i think it might be interesting to see how
[03:34:45]  good certain ranges are where solids benefits are are impressive enough or make sense enough that not going the full way doesn't matter i i think i think that's interesting but i i
[03:35:01]  the only thing the only thing about this that i ultimately because i said i wanted to look at both takes because like they're both fair and we put them together is is
[03:35:10]  was it um mpm downloads how do we look at mpm trends let's look at mpm trends do you know how little any of this matters um let's let's
[03:35:22]  do this okay so we we let's what do we want we want solid js right okay sweet we've been having a pretty good run recently right and we're being compared to
[03:35:33]  so we want to see what we want to do quick right okay let's do what is it builder io where is it at builder io slash quick right what is it quick
[03:35:57]  okay it's just quick sweet that's even better quick okay right um is that nice okay okay now okay okay sure okay okay no that can't be no this is not
[03:36:20]  right but where are we that's like that's like the create quick command i want the actual like it's not going to be in here um sorry this is this is
[03:36:48]  bugging me a little bit it doesn't really i don't actually need quick to show what i want to want to show here but i i want to i want to
[03:36:57]  i'm trying to do a scaling example here so uh whatever open oh it's not on this computer i'm gonna install their their starter just to find the actual quick maybe i
[03:37:17]  can maybe like find it in the yeah okay there we go at builderio slash quick there we go thank you like that's way better there we go that makes sense okay okay
[03:37:36]  right so we we play this game right where we start talking about npm trends right and then as you go up the scale um who would be next um maybe some like
[03:37:51]  right right and then uh um what's next after inferno uh lit oh man i'm not why why don't i know lit okay it doesn't matter let's go
[03:38:13]  bigger let's go preact right i mean do you know what i mean like the narrative of us competing let's keep going okay sorry where's lit okay yeah so there
[03:38:37] 's lit there's preact let's keep on going what's next svelte watch it happen again okay oh damn it's felt screwing our graphs over because the stupid
[03:38:48]  spike man i i really dislike whoever did that um fine jump to view oh view's got the stupid spike too man this is angular angular angular angular and view are almost
[03:39:11]  identical um here we go okay so we just keep on zooming out and then we get to react like my point is like us talking about who's gonna win down here on
[03:39:39]  the floor is so meaningless because you're sorry inferno solid and um quick are basically a flat line here at the bottom in comparison then you get like lit and you get
[03:39:59]  like um preact and svelte is actually around lit and preact range as well and then you get up to like view and angular and then you end up i react
[03:40:13]  like we're talking just like this is just not yeah yeah those someone's asking where the spikes are coming from yeah automated automated tools almost positive um there were i talked about
[03:40:27]  a few weeks ago i we were like uh i was yeah there was some ci thing i think that just spiked svelte and then a and spiked view like way
[03:40:37]  past react just for like a day um let me let me see where let's see if i can get svelte in here just to show let me show you how
[03:40:44]  silly this is look for like a 20 for a couple day period svelte got to be the highest and then let's let's let's put view in i think it
[03:40:56]  happened like right after yeah oh views is view still on the thing it's funny because some people are like maybe the traffic's real like no this is oh man this
[03:41:13]  is the problem is like this doesn't help anyone it just screws up all our numbers yeah yeah yeah yeah um we're we're we're yeah let me let me clean
[03:41:27]  up a few of the big ones just to get them out of the way svelte it's not but let's let's clean up react and probably preact and
[03:41:37]  angular get back into a zone where we're like this so we're asking about astro um is that the right one yeah maybe um yeah because astro and solid always have
[03:41:56]  pretty close numbers yeah that looks about right and then eleventy you don't know what eleventy's package is is it is it eleventy yeah interesting i
[03:42:11]  don't know what the core package is but yeah 11d might be bigger i don't know but i know like a lot of us are like in in here right like um
[03:42:30]  yeah like you if you look over the five-year trend like over a longer period there there's been ci spikes in the past like look at these inferno ones like you
[03:42:41]  can see that things generally kind of slowly head up right so like someone who thinks that's that you know this is not a it's not a yeah anyway okay oh okay at
[03:42:57]  eleventy eleventy yeah okay yeah so 11d is right there with solid and astro right inferno yeah yeah okay yeah so 11d is is right
[03:43:21]  there with solid and astro right inferno yeah right so yeah i mean actually i wonder if the solid and astro curves are correlated like it looks like we really kind
[03:43:49]  of went up steep at about the exact same time um but my my my point is like it just these kind of conversations are interesting to have kind of a hypothetical standpoint but don
[03:44:02] 't take them too seriously because literally we aren't even like a sliver on what's what's going on i don't know all right let's go into here i
[03:44:16]  i just want to pull out this comment because i i'm just always impressed with how well dan abramoff responds to things and so i i just want to put this on
[03:44:29]  realizing i know react pretty well by now what do i do with all this information maybe a stripped down version of react called react like to address the rise of solid js or
[03:44:45]  a flavor with memoize dom and new compiler to address svelte i feel like wrapping interest is never going away but it also sold the valor i always use svelte
[03:44:52]  i'm not sure what you mean by react like but would not be a react if it was like solid react and solid significantly different models both react and solid teams happen to be
[03:45:02]  very fond of our respective approaches as for memorizing compilers something the team is exploring just funny like some and someone's like react like you already exist is preact
[03:45:12]  it just i i just wanted to highlight this little one again because like as silly as this seems i this these are real narratives that i hear over and over and over and over
[03:45:22]  and over and over again um i i feel for dan he's so patient with his answers and so he's so clear with them um i just yeah i just wanted that
[03:45:34]  one caught my eye for a second but here's here's here's actually an interesting question we came up a little bit earlier in the stream and i want to kind of talk
[03:45:43]  about this for a second i'm really confused about what people want do do meta frameworks like next all started become your whole app like rails and you do everything from apis
[03:45:52]  html or will people still want standalone apis or apis focus frameworks this is this is a really interesting question um because i think the answer to this like when i
[03:46:03]  was working on solid start i was like always like of course people build their own standalone apis because they're going to want to build uh you know like mobile apps and whatnot
[03:46:11]  but i think there's a dx expectation and reacts kind of setting the bar especially with stuff like react native that people secretly just want like expo and next to just like
[03:46:23]  merge together and then they have this this crazy and this is small scale a large scale you're always going to end up breaking it out again this is this is the truth but
[03:46:32]  like for people just getting started and they want to handle everything they want to like there's this movement to make things as monolithic as possible like put your react native app in
[03:46:41]  your react app and i think i i this is why i supported this stuff with like solid start because like i was very skeptical because i was like i kind of just like
[03:46:51]  don't you build your api separately if you want to support anything well these things have to go through phases and we we are back at the monoliths monoliths
[03:47:02]  don't scale um but i think it's interesting because i think i think there's an interesting scaling scaling scaling mechanism here that we have to think about and as long as
[03:47:17]  we scale the right way we have the ability to to kind of do more than we think or realize and what i want what what i want to talk about here for a moment
[03:47:29]  is um this pattern that i've seen on on the way things scale in general um because and i have no clue how i'm going to draw this i just opened the
[03:47:41]  scale draw just because i i i want to bring up this point because i see this over and over and over again because like generally there's there's two types of scaling right
[03:47:51]  there's vertical scaling and horizontal scaling and usually you start with something small like a little box this is you right and then everyone knows that horizontal scaling is really complicated because what
[03:48:12]  horizontal scaling looks like is if i took this box and went like like went crazy with it and this was like you know we're gonna just like make a little collage
[03:48:23]  of these boxes over here um right okay right so let's put some text here horizontal scaling whereas vertical scaling looks more like like like this usually it looks a little bit like
[03:48:47]  this right no one's gonna tell me i have vertical and horizontal mixed up but whatever i i it doesn't matter one feeling works like this one feeling works like this and i
[03:49:01]  find this in almost all things of engineering because i've been in i've been in this zone where i've had to make the choice like you start with this and then
[03:49:11]  i worked at a startup where they're like we're gonna eventually get here so let's go straight here right and we did everything with microservices and you know we made tons
[03:49:28]  of uh what are they called like nano machines on uh on on aws and like we're just like let's just jump over it it's funny but like classically
[03:49:39]  other platforms like like this is more the classic path where people are like this is easier to do right but everyone knows eventually you're gonna go here but going from here to here
[03:49:57]  sucks can i put that sucks like it's usually the problem with this is it's like it's hard to break apart something that you just like made bigger and bigger and
[03:50:17]  bigger yeah we are pulling apart our model i think it's painful yeah this this sucks both of these this is like this is going this way is what should i call this unnecessary
[03:50:33]  pump complexity like way unnecessary complexity when you're when you're when you're dealing in this right and this is like oh oh i'm trying to think of what to call
[03:50:54]  this but this this this is like happens naturally like when you do nothing like like the the the this this scenario is not like a one size like i i worked for a
[03:51:13]  company where we did this and then literally like we had a small team and i actually went we kind of reverted and went did this a whole bunch uh because we were just
[03:51:25]  like screw it we we were trying to scale for something that we never reached and we wouldn't be reaching for years see because part of the thing is what you say is
[03:51:34]  there's a meant and the reason i want to show this is because there's a mentality out here and i kind of agree with going this direction and acknowledging that this sucks from
[03:51:45]  the perspective is you kind of want to stay here as long as you want as you can like going over here is like oh i need micro front ends i need micro services if
[03:51:54]  something has micro in the front of it you probably know it's trouble um but but like if you're like do nothing like and trying to stay here as long as you
[03:52:07]  want you eventually end up here and i see this happen over and over and over again and it's because and and like this conversation comes up multiple ways in different forms like even
[03:52:18]  going back to the theo alex russell debate um i felt i felt this sort of scenario again because it's like um he's like you should start with a performance
[03:52:31] -oriented mentality this is something that adds unnecessary complexity at the beginning makes your job harder but you'll be happier when you get somewhere whereas like the other thing is like just do
[03:52:41]  what's easy and get the product a to b because you're never going to get here if you don't if you don't get there you see a parallel between this and
[03:52:48]  like the if you don't if you don't don't get to where you need to get to um this part this last move doesn't make like this is this is
[03:52:56]  like premature optimization so to speak but i i think it's really important to recognize that almost in all these cases there's this pattern right like you can basically and quite often what
[03:53:10]  happens in this pattern is the smaller things you end up at the end end up resembling the thing you started with the most you actually going this way doesn't usually look
[03:53:18]  like this it usually looks like like like like i don't know maybe we should do something here like round the corners let me see if i see if i can select this one
[03:53:31]  maybe we should like round the corners and or change the gradient fill and like maybe yeah can i make the lines sloppier maybe round the edges maybe change the color slightly
[03:53:46]  to like uh this color like usually this it's more like this um so like this transforms into this over time if you do nothing and then when you go back you end
[03:54:01]  up having to like go back to more of these and yeah i mean there's lots of reasons for that what's cool about vertical like like i want to talk about vertical
[03:54:17]  sorry it's fork of hands on god scaling what's cool about vertical scaling is often i mean don't get me wrong like when i say vertical it's not just a vertical
[03:54:27]  horizontal scaling it's this category thing usually things in this category you can solve for a long time by just throwing more money at it because you don't have to add complexity you
[03:54:35]  just go make the machine bigger right like you can ride this out longer than you'd expect i understand you can throw more money and make more machines but i'm saying is
[03:54:45]  usually you can get pretty far by just throwing more money at this as well um so you can ride this way longer than you you would you might think and honestly in this zone
[03:54:56]  you might be pretty happy um because this zone will give you a whole bunch of headaches but yes and the ch sorry the choice of this technology is an example of that kind
[03:55:10]  of choice right do you use mongodb or use postgres and with the thing mongo scales horizontally right but when you're here and and and if you're not
[03:55:25]  using mongo right like mongo kind of sucks too sometimes i i use mongo when i you've got a bet when i was in this company that went like this
[03:55:31]  we 100 use mongo you know or dynamo db or whatever like we were like of course but it kind of was like a crappy decision we actually ended up pulling more
[03:55:41]  and more back into postgres over time like this the reason i'm showing this is because i think that this this happens over and over and over again at many levels with
[03:55:56]  many types of architecture and this is just something you have to understand is that like doing this is not necessarily right you kind of want to stay on this as long as you can
[03:56:07]  and and essentially like acknowledge that you will probably do this one day um but you can try and be smart about it you can look at when you're doing this and maybe
[03:56:27]  like do a hybrid you know like horizontal scale where it makes sense or you know like or you can like make sure that each piece here stays somewhat divided so you can break
[03:56:40]  it apart later like there's preventative measures you can do to a certain degree and keep that in mind but um i just want to show this because when you come into this
[03:56:50]  equation generally there's always this choice and i think what's interesting is some people mentioned this earlier do things like edge functions change this because like if if you remove the unnecessary complexity
[03:57:04]  here to go across the bottom you may have just one like you you can just circumvent this whole tree the problem is to understand that there is this unnecessary complexity right so
[03:57:20]  at any given point in time prepare for horizontal scaling but vertical scale as much as you can exactly that's probably what you you you you do this is why like theo has his
[03:57:31]  whole philosophy on like how easy he can throw stuff away that's like the biggest thing he values because he knows he doesn't want to go over into complexity land he wants
[03:57:39]  to stay here as long as he can give me trpc you know give me you know these solutions that are baked you know that but like when you're sitting here and
[03:57:49]  you're like you start evaluating on like how easy you can break it apart or throw it away and i think i i think this is just kind of important dynamic because when i
[03:57:56]  think about meta frameworks it's kind of the same thing when i look at remix or i look at next or salt start and stuff i'm like i know i'm building
[03:58:03]  this i've built this before i've built this before i've built all of these before i know that i'm building this i feel for the people who who are looking at
[03:58:12]  this i feel for the people who are looking at this as well but right now i'm building this because we all start here and i'll try and give you as many tools
[03:58:22]  to feel to do this but you're gonna have to be smart about it even meta frameworks you know like have to account for the potential eventually going here are we talking front
[03:58:35]  and switch to back end well the thing is this conversation is front of the back end we have to talk about it because it is it is back end right it's full
[03:58:51]  stack it's these monoliths um right so like i've seen some terrible terrible monolithic systems that are too large like stuff built on old um you know dot net stuff
[03:59:04]  like there's a reason microservices take take off but the problem is then once like like big companies use them every startup is like yeah i need microservices and micro front
[03:59:13]  ends and you're like man that is a terrible decision when you have a team of five people like really bad decision and um i i think that it's helpful to just kind
[03:59:27]  of see it see it kind of like in this kind of scope of how these things progress and where it goes because then you could start doing you might be able to identify
[03:59:40]  technologies where you can remove this unnecessary complexity see i think edge for example makes this line in this particular case simpler but going back to dax's question when i'm talking about
[03:59:54]  the problem i had with the problem with my diagram here is i made all the boxes the same color and the same homogeneous the reality is that this also includes a few other
[04:00:06]  colors in here as well i'm like not showing that as well as i should be um so like essentially the api question this this this isn't a clear-cut
[04:00:27]  thing the reason i want to show this is because i think us the meta framework providers job only really extends here and then with hints of how to go here and how to go
[04:00:38]  here this is beyond the responsibility our only concern is getting people started because it's it this is going to depend on company size it's going to depend on um company makeup
[04:00:50]  organizational conway's law whatever you want to look at and all we can do is give a solution that gives you all the pieces that you could go either way this is why
[04:01:02]  i love the concerts yeah yeah yeah yeah but it's not just like the adapters the adapters about the deployment i'm talking about the actual architecture of the whole app like
[04:01:16]  cell kit is one of these remix next solid start kind of things where we're just giving you enough that you can scale vertically if it makes sense for you or hopefully bail
[04:01:25]  out and go into horizontal scaling if you want to this is very important in solid starts design as well that's why we did everything so primitive and so granular because we really wanted
[04:01:33]  to be able to rip that out sorry like just just like go this way if you need to like just these are now just web servers right and i think i think that
[04:01:44] 's i think that's i think that's uh like i think that i i don't know if this answers dax's problem question but i think both are relevant and and
[04:01:53]  that essentially yeah what are some of these answers i think the big problem with monolith parts of jss slow blah blah blah i think metaphorics the back end of the
[04:02:01]  builder optional the best 20 good dx opportunities whole app includes some form of governance blah blah blah form databases system he's great great responses starting up build them on the long as possible
[04:02:18]  as you scale easily break into existing feed separate yes thank you brandon wait this guy has some experience that he he built blitz okay yeah see you know what the problem
[04:02:31]  is the api server approach was essentially one of these where like to get started you needed an api server like before you did anything it was like here build a web server
[04:02:43]  an api server we didn't need to start here with less boxes i think this monolithic flip is just letting people do this approach again because for a long time we were
[04:02:56]  like let's just start here with less boxes like even though this is purple we're really already over here and you're gonna you should add green because that's your ap
[04:03:03] i service and you should add red for your authentication service and you know what i mean like i think modular composition design is important a system level but i think at every point you
[04:03:14]  get to make the decision of what kind of approach you're going to take to scaling because different systems have different life cycles and different needs so yeah so i mean this takes
[04:03:40]  knowledge to make the right decision too many people will just follow this path into oblivion um which is like the alex russell theo conversation about use react everywhere or whatever
[04:03:53]  by building this are we tying our hands by saying like you could go either way i mean we're not preventing anyone from doing something are we encouraging bad behavior i don't think
[04:04:04]  so i think it should be clear how to get out of it if you need to at least from the beginning the problem is that a lot of people will layer stuff on top
[04:04:12]  of here that'll make it harder to get out later and that's just the nature of the beast i don't know if there's much we can do about it but it
[04:04:19] 's definitely something i think about okay i think good on that topic let's let's talk about um this one is this the last one that i wanted to talk about today
[04:04:34]  probably oh no i want to talk to astro let's do this and then we'll talk about astro release i think this is a i love ryan floren
[04:04:47] ce's spicy takes are like i don't know what his batting rate is for me personally but like sometimes he's so on and sometimes you're just like man that's
[04:05:00]  but this this is this is one of my this was one that i think he's he's on because sometimes you make decisions to kind of guide people and they it ends up
[04:05:07]  guiding them to the exact place you don't want to go so ryan floor said react 18 calling use effect to use memo twice on mount in dev to make components concurrent
[04:05:16]  mode safe is ironically making people do exactly what they don't want them to assign stuff and rest during render i was talking to someone about this being a psychological thing because basically even
[04:05:26]  if this makes you clean up your effects or make no side effects in your use memo and make things clean and pure and that's what it's supposed to encourage no one likes
[04:05:35]  seeing that network request go across the wire twice or like see that side of web connection socket connected and disconnected twice it's really discouraging or disheartening as like a
[04:05:47]  developer when you're like trying to like trust the stability and even if you know it's there seeing it twice erodes on that on like trust at a certain level and i
[04:05:57]  think i think i think it's good that he called this out because like he's right you can hack around it using refs or like hoist it or do stuff
[04:06:04]  and maybe you should hoist in a lot of cases but this is a really easy solution that messes with stuff in a way that they don't want originally concept would use
[04:06:13]  reacts or simply the hard one was this then hooks trade this for object identity i didn't post the lexical scope all which generally forgiving trick mode is completely unforgiving we
[04:06:21]  trade forgiveness for concurrent rendering yeah that's an interesting progression progression right it's almost like react hooks are too loose at first and they did that to make the the adoption easier
[04:06:36]  and now we're paying for it why do i feel like it's like this graph again okay let's move on um um is concurrent rendering worth it okay now okay so this
[04:06:47]  goes deeper i didn't actually read this i only read the beginning here and i was like you're on ryan that makes sense this also makes sense is concurrent rendering worth
[04:06:56]  it ooh i love the idea of input that filters a complex list and have the ui immediately responds always instead of the main thread being blocked sometimes the ui i don't
[04:07:07]  know if that all this is worth it okay yeah i mean honestly this part i didn't really care about or big calendar you are you want to click the next month button quickly
[04:07:15]  and not have the thread blocked and see active state and the buttons versus three minutes after mouse to the block because you input render this i think is sweet if i had any
[04:07:22]  freedom of the routine it would be to show the value here two people are struggling before we'd optimize the component here and there and with a memo and student component update now it
[04:07:30] 's like you have to optimize your entire app so a few cases are automatically optimized and that's that's interesting point of view this is what i'm talking about like i
[04:07:38]  don't criticize the vdom from a rendering performance standpoint but i wonder about the way that it forces everything into the single piece that you're you're basically stuck with this level
[04:07:54]  of optimization consideration and this is very much true right and i i'm guilty of this like all the time like all the time so like i think i think it's interesting
[04:08:10]  right because like um we we spend a lot of time as framework authors trying to figure out like how we can guide people to where we want them to go because like i
[04:08:24]  see this in solid so i'm working on solid 2.0 a little bit right now starting on the reactivity again and there's certain cases that i'm like we were
[04:08:32]  way too permissive we should have been stricter we should have guarded and helped people do the right patterns and then there's other places where i'm like we can
[04:08:38] 't do that it's escape hatch but and we in fact we should actually loosen things up even more here but making those choices and figuring out what makes sense is tricky and
[04:08:48]  we can be wrong and stuff can shift and the repercussions of that is actually significant um man you're on fire yeah i don't know if you remember this about a uh
[04:09:04]  maybe weren't around the stream back then but like about six months ago someone figured out how to get two-way binding working in solid and i i don't get me wrong
[04:09:12]  i literally did everything i thought i could to prevent people from using two-way binding but what they managed to do was feed a getter setter pair into our props
[04:09:20]  object so that it wouldn't transform and then they would control the getter setter and then because our stuff just functions like that's all you need in solid to get two
[04:09:27] -way binding work and obviously the syntax was just horrendous because you're like writing getter setter props and like but like they did it like yeah i don't
[04:09:46]  know like yeah i don't know yeah i mean yeah so like yeah i i can definitely identify with with that i remember when i retweeted that i was like yep this
[04:09:52]  is a thing so like i i i think i think the the thing is both of these demos that he's talking about react showed at the hooks like or at the he
[04:10:08]  said put the value here and the both of these demos were uh react iceland in march 2018. that he the the dan's presentation showed an input field with the search
[04:10:23]  and then he showed uh the like moving between like a couple pages like in a movie app or something like so if we understand this is the value what value like how do we
[04:10:35]  how do we show this to other developers beyond that dan's answer are strict mode docs helpful like how to fix bugs and do this and i actually think the answer to this
[04:10:47]  is no i i think this is a psychological thing even knowing this is actually doesn't make it any better i said why it does it and i said okay here we go i
[04:10:58] 'm just seeing a lot of folks attempting to dance around the eager bug detection i don't have solid feedback just notice the program monoreactive found ourselves very difficult to many people
[04:11:04]  now oh the tweet's been deleted that can't be right i think he's i think he's right is there more to this thread i mean we should we should keep this
[04:11:18]  for all preservation you know i ryan florence deleting a tweet is not unheard of so i generally wonder if concurrent rendering is worth the cost twitter's dying yeah don
[04:11:33] 't refresh you like other ways to deal with user typing to input and updating the screen really requiring all this i don't think things we're trying to detect here have much to
[04:11:42]  do with concurrent rendering the bugs i'm seeing your catcher use the actual bugs that would occur in other circumstances he's right about this it's it's actually enforcing
[04:11:49]  reacts render model it's just really feel bad when you can experience that in the side effects like if you're writing code that you feel is outside of reacts model and then it
[04:11:58] 's running twice it's like you want to punch something yeah i mean dan's trying to explain it but this isn't something you explain this is something you feel uh it
[04:12:19]  yeah you know he's right it detects bugs yeah i think i don't i don't like this thing about concurrency i think i think brian is conflating
[04:12:28]  them yeah he mentioned the fact that ryan florence was showing off how he could use he could use uh transitions to hydrate without blocking the main thread i haven
[04:12:47] 't seen this actually in fact performance in a meaningful way but let's see because hydration yeah i don't know but it is yeah i don't know but i don't
[04:13:00]  know but i don't know but i don't know but it's interesting okay yeah so okay yeah so yeah so is this all just positioning preact like okay like let
[04:13:14] 's step back here and be like skeptical of people's intentions is this all a matter of positioning preact as being good enough as reacts successor like use preact with remix or
[04:13:30]  something like that like i i don't think so because i think i think i think this is a legit pain i feel it like i i said this is a this is
[04:13:39]  a feeling thing this isn't a thinking thing but if if someone was skeptical they might come to that conclusion here that but the truth matters i think some members of remix team and
[04:13:53]  reacts vision have been in amount of conflict for a couple years now so i don't think it's like a political thing as much as like maybe we just naturally end up
[04:14:06]  here because of how long these two sides haven't been seeing eye to eye yeah yeah i i i think i think i think this is like one of those kind of situations
[04:14:23]  because like i don't i don't i don't think this is yeah this yeah this is an interesting thing i think i think maybe this is just a really feel bad feature
[04:14:39]  like it's not about because he's right this doesn't have to do with concurrency like i remember uh theo tripped on this on stream when he said like i suck
[04:14:48]  at react and um he his assumption was that something in react had changed and obviously this is because strict mode um showcased it but the truth of the matter was like fundamentally
[04:15:06]  he was missing some information on how react worked that he didn't need to operate to use react quite effectively but he didn't know something about how it always worked and strict mode
[04:15:17]  like succeeded at teaching him that lesson so in a sense like from framework author damn perspective you're like it did exactly what it was intended to do but like i think even
[04:15:28]  when you know about it it feels bad that that's that's an interesting place to be be in i mean yes with concurrent rendering i agree on the statement but this is not
[04:15:47]  just about it's not just about concurrent rendering like uh like this this actually highlights like how hooks work but yeah i think this is interesting because every time you look at concurrent
[04:16:01]  rendering especially time slicing you're like is there a different way i actually had this conversation with milo this week because you know there's there's a real cost to considering it
[04:16:11]  and i'm still convinced even if i'm not convinced in time slicing i'm still very much convinced convinced that um concurrency is still something that belongs in the framework rather
[04:16:23]  than something that you kind of build on top like in the router like you could use the router and you could do simulate like the page load story but it's an interesting thing
[04:16:33]  because in other cases i've made different decisions like server components in react it's very fundamental whereas we built server components into solid start as a router feature for to me that
[04:16:43]  made sense um but async knowledge and consistency as part of the framework i feel like is something that is very much in the frame the like core libraries purview and something
[04:17:02]  we have to like think about yeah and this is an interesting design thing i actually generally like putting little barriers in or like even i was talking about like enforce like you can make
[04:17:18]  solid solid signals have that get or set or split but you could like clearly make a primitive that passes them to down together but having that little thing is like very suggestive
[04:17:28]  it's like hey the store and the set store are separate you know what i mean like if i'm trying to pass them together i have to pass it twice like there
[04:17:37] 's this little bits of friction which then go kind of prompt different sorts of patterns and i think that's really important defaults do matter but like and even if they're painful
[04:17:54]  it's it's okay but like so like i identify with a lot here i think the challenge here with the strict mode is people this doesn't it doesn't feel like
[04:18:08]  when you see the split on create store or create signal it's a library and you're like oh stupid library i i this is painful i'd rather it work the other way
[04:18:19]  but you you blame the library and you look at it and you're just like you compartmentalize it as like okay it's this convention i have to i'll work with
[04:18:26]  it the way they think makes sense or i'll work around it or i'll deal with it and you do it but the problem the strict mode thing is i think people
[04:18:34]  feel like this is my code you did this to me like it's not like the library anymore it's like my code is running twice first of all like you you might not
[04:18:43]  know and be like like gets you know hung up on like what's going wrong and think of the bug but even after you know it there's this like psychological thing that
[04:18:52]  reacts messing with your code and the library should never do that like i i think that's the the root of this that like it's it's not just like guardrails
[04:19:03]  it feels like it's messing with you and i i don't know i don't have enough i don't have like a psychology degree i don't have enough understanding and building
[04:19:13]  products and stuff to know if there's like a name for this or something but i feel like they've stumbled into something especially because as ryan said where's the good
[04:19:21]  benefit trade-off the problem was react 18 came out and gave us this one great feature you know the double console logging or the double running effects like the strict mode change was
[04:19:32]  like the only tangible value people felt like they got from react 18 until next was released so like there's a real disconnect between the value and the the pain and it's
[04:19:43]  it's like it feels like it's messing with you right like it's the code you feed into react when i say like when i'm in yeah i mean messing with your
[04:19:58]  mental model i'm okay with i think people should learn react properly and if that helps with the mental model i i think i think all for it i think it's more
[04:20:06]  that like it's like the code it messes with the code you write like the routines you write it's not like it prevents you from writing code a certain way you can
[04:20:14]  still write it that way and then it's like it's it's yeah but yeah i mean this is a very interesting conversation with ryan and dan here um i think
[04:20:29]  concurrent is still undersold or under understood but it is very tempting to kind of back down from it um and be like hey like especially in fine-grained reactive systems there
[04:20:42] 's a lot of it's very easy to simulate stuff that you do in concurrent mode or like concurrent rendering like stuff like the multi-tab thing without um without like
[04:20:54]  resort like resort to performance loss because you can do it fine-grained you can like pause and resume where you need to and you can do that the thing is i think
[04:21:03]  the i think what it forces you to do is more awkward i think you have to like hoist stuff more and you have to like control it more but the thing is routing
[04:21:10]  already hoists everything so there's an argument there you know like i always talk about like clicking to the next tab you know and still showing the existing tab like you know
[04:21:18]  how do you render both tabs well the router can render both tabs at the same time without like you doing anything but how do you make the tab not update well that means you
[04:21:28]  have to delegate to the router to handle the tab you know for that one specific case you know like read the state off the url or something like that you know what i
[04:21:37]  mean and so there are solutions and we've been doing it for years and years and years and because of the way fine-grained reactivity works you don't pay
[04:21:43]  the cost of like re-rendering in these situations so technically speaking there's no actual it's it's actually a very efficient way but i think the authoring is awkward
[04:21:51]  i actually think the way that stuff like suspense and transitions work and the way they delegate is actually very elegant um and it and i think for stuff like async i don't
[04:22:02]  think it's okay just to push it into the domain of like orchestrating libraries but you know maybe like when someone makes like the pre-act version of solid they'll
[04:22:15]  they'll do that and talk about how much simpler it is all right um i think that's good on that topic i guess the last thing for us to do here is look
[04:22:28]  at the new astro release what's going on with astro all right how are we doing okay minor release experimental pre-render api deploy an astro server without
[04:22:50]  sacrificing the speed of casual static printer api allows you statically pre-ender specific pages of build time someone's asking about this so svelte kit is not the only
[04:22:57]  ones who do this this is as i said well this is the challenge a lot of the meta frameworks they can literally copy each other the the hardest the hardest thing to copy
[04:23:07]  like forms are easy to copy the static page thing easy to copy the hardest thing to copy is partial hydration and res and like presumably like the hydration stuff is really hard to copy
[04:23:17]  and maybe even stuff like the the hybrid routing stuff we've been doing a solid start because it like it's all the elements but yeah i think but even that is probably
[04:23:28]  doable i think it's generalizable i've been i think we can look into it but i think the partial hydration stuff is and mixing it maybe mixing with the client is going
[04:23:39]  to be the hardest stuff for people to copy but stuff like static pages pre-rendering super easy as well as like the form stuff very easy okay new error overlay nice
[04:23:51]  content collection experimentation api organize your markdown mdx content easy manage collections add type safety to your front matter with schemas okay generate money okay i don't know what
[04:24:03]  these are is there documentation on this on this thing at all like what are content collections here it's in the pr no this is just the okay sweet it's actually
[04:24:20]  already in the let me let me grab that off twitch here because the links work in twitch and they don't work in stream yard beautiful okay content collections let's let's go
[04:24:37]  all right so what are we looking at um let's blow this up a bit so people can see okay define config experimental conco okay cool it's okay content directory oh
[04:25:06]  this is okay we're getting into like eleventy territory here like where we're like passing like all posts have the same front meta properties all newsletters have the
[04:25:26]  same front meta properties okay and we have zod okay maybe i'm still not completely seeing the what this does so okay i know how zod works so okay i know how zod
[04:25:56]  works we're going to get collections blog interesting because yeah like they're talking about markdown files so it's like get me all the published blogs okay got you map
[04:26:36]  over them interesting so markdown is data almost it's funny because i think ben did something like this when he was playing with solid the other day and i i didn't
[04:26:51]  even click on me because he was like loading markdown for something it must have been on his brain so to speak he used fs and the solid started um or Okay
[04:27:01] . Interesting. Okay, cool. Yeah, I think I got the gist of it, but it's actually like super powered ability to handle documents. So I think
[04:27:29]  the comparison to 11 D is fair here in a sense, but essentially, like, yeah, that seems pretty powerful. I haven't really done much on like the static content
[04:27:47]  side or like the blog side, except for like making demo apps to show off features of frameworks. Like I made a Marco tutorial based on like a blog site, I
[04:27:55]  could see how this would be like super easy and super powerful piece there. Because in like, if you're just coming in, you're building your blog site, you can
[04:28:02]  literally just dump stuff into this content folder, build a structure through your Astro files. And then just like, all you have to do is drop in the new MD,
[04:28:11]  MD file or markdown file for each blog as you finish it. And like, everything's just wired up, and it's just going to work really nicely. And
[04:28:18]  you get all the benefits of it being structured by tools built in for Astro. Yeah, I think that's super powerful. I'm very exciting for people, especially
[04:28:26]  building those kind of content sites with lots of like documents. Astro uses many, any framework you want. Astro itself is just a server thing. And then you
[04:28:41]  can put in components from any, any JavaScript library framework. It's the, the Astro, I focus on Astro too. Astro solid is like one of the
[04:28:49]  sweet combos. Any of the small frameworks like solids felt or preact because the partial hydration work really well. So they're the most common ones. I think a lot of
[04:28:56]  people actually don't use react, like, or when they make the move to Astro with react, they actually switch to preact. And a lot of the quite
[04:29:03] , there's been a number of like, of our first bigger production sites being used on solid were actually Astro solid sites like Nord VPN and whatnot. You use react with
[04:29:19]  Astro. I mean, you can, but yeah, I mean, it was interesting. I, I actually saw an Astro react site the other day. Um
[04:29:28] , um, where a guy had ported, I think he worked at for cell and he was like, he'd moved his next app to an Astro site. And
[04:29:37] , uh, I remember looking at it because so there was some comment made about like page loads between it and like navigation. And I was, I was looking at it and
[04:29:48]  I like load the site and I was like, I don't know, this is pretty fast, but then I went to slow, slow three G or whatever. And
[04:29:55]  I did it. And then I saw it and I was like, oh no, there's this weird leg. And then I'm like, sure enough, it's cause
[04:29:59]  react is there, but like for like, um, like it was like lightning fast on the like fast network. Like I, I, I was not suffering this like blog
[04:30:13]  a blog site for not being a single page app. Like not, not, not at all. So yeah, it's Astro's great. Cause you can do
[04:30:23]  any of that, you know, uh, is there any other highlights from this one? I think, I think that's, those are the big ones, right? Super
[04:30:32]  header setting domain and doing cookies. Yeah, no, I actually think this pre-render thing is interesting. I'm surprised they hadn't done this before. This API
[04:30:43]  of export cons pre-render true. That's an interesting one. And something that I've been thinking a lot about, cause right now I just did something really simple.
[04:30:52]  I just made an array in the config at the top and said, screw it. I hate these named exports, but it's like so hard to avoid them. And
[04:31:01]  it's the, and it's very easy. The problem is if you make conventions around like exporting objects or configuration objects without a compiler, you can't get the code splitting
[04:31:14]  you want. So this separate exports, let the API to be more universal. But man, at a certain point, I kind of like, like, when does this be
[04:31:25]  better if you could just like export a single object and do stuff? Cause like, like, I don't know how type I do, you get autocomplete when
[04:31:36]  you try and go export constant and you try and start running pre-render. You don't remember if it's preload or pre-render. Like I, I don
[04:31:42] 't like having generally, I don't even like the config objects admittedly. I don't like having a bunch of special named properties. It makes things awkward. TypeScript
[04:31:52]  helps with that though. But. Hmm. It's interesting. I know Svelte does this or Svelte kit does this as well. So it makes a
[04:32:00]  lot of sense. It's an easy API to use so I can see it, but. And I know I'm going to get pulled into more of these export cons
[04:32:08]  before we're done. It's just something that I'm always thinking about. Yeah. And next did do this for, um, they, they made actually a language server
[04:32:22]  plugin for react server components. Um, you know, using TypeScript to do like all of these kinds of special stuff. And I have to admit the fact that that
[04:32:31]  has to exist is what's making me seriously reconsider server components DX. Like, I think that's a sign of like, like something bad is happening. Um, like that
[04:32:42]  was the, that was like the last thing I was like thinking, I'm like, Oh, there's something awkward about the DX. Then I'm, then I saw
[04:32:47]  that plugin and I was like, man. Okay. Yeah. We've definitely crossed a line here. So yeah. Um, yeah, it's interesting. I don
[04:32:57] 't know if it's a good solution. It might be the best solution out there. I'm just, I'm just telling you what I think like off the top of
[04:33:03]  my head. So yeah, I think this requires more thoughts, but I, I'm always excited by a new Astro release. Um, Astro is a great tool
[04:33:12]  for building, um, partial hydrated, um, websites and it, and it's so easy to get into and just use, which it's just, it's really
[04:33:23]  good at what it does. It feels like a solution to the, yeah, I think, I think so. But I also think that's pretty much this week in
[04:33:36]  JavaScript. Oh, well, I don't know. Did I miss anything? I th I th I think, I think we're pretty, we're pretty good on topics
[04:33:46] . I think, I think, uh, God, I hate how like ads just sneak in. I'm like sitting on a promoted thing. Oh, interesting. See,
[04:34:00]  I'm gathering this is size. Jacob eBay is telling us how I think they just reduced the size of their, their, of their runtime here. And those are pretty significant
[04:34:16] . Unless it's a benchmark speed. Like what is this? Can we find out what this is? I guess we're not going to find out. That's too bad
[04:34:26] . If it's size it like this, there's a pre act narrative here somewhere because pre act has that effect on people. you're not going to find out what
[04:34:36] 's going to be, you're not going to find out what's going to be. You're not going to find out what's going to be, you're not going
[04:34:41]  to find out what's going to be. You're not going to find out what's going to be. You're not going to find out what's going to be,
[04:34:44]  you're not going to find out what's going to be. You're not going to find out what's going to be, you're not going to find out what's
[04:34:46]  going to be. You're not going to find out what's going to be. You're not going to find out what's going to find out what's going to be
[04:34:50] , you're not going to find out what's going to be, you're not going to find out what's going to be. You're not going to find out
[04:34:52]  what's going to be, you're not going to find out what's going to be, you're not going to find out what's going to be, you're not
[04:35:00]  going to find out what's going to be. We'll talk about, you know, you know how solid and react are similar and blah, blah, blah, and
[04:35:10]  they're right. The thing you don't understand is to do stuff like these dev tools takes like completely, like really took a lot of thinking to kind of figure out how
[04:35:21]  to even approach it because we're dealing with a very different type of system for rendering. I am very impressed with the work Damien's been doing here. Um,
[04:35:32]  like this, this is really cool. I'm going to have to play with this a bit more soon. I'm I got the oldest issue open on the solid repo is
[04:35:41]  build good visualization dev tools. And I don't know if we're all the way there yet, but look at this. This is already like component owners, Dom. He
[04:35:51] 's got the different graphs going on so you can see like this is already like such a huge step forward. Um, Damien's one of our fellows work on the
[04:36:00]  solid fellowship program and he's doing amazing work here. I, I hope I can help him to do make these things even better. Like this is, this is a big
[04:36:10]  missing piece for us. And he's doing, he's just, he's just nailing it. He's just, he's just like hitting it out of the park
[04:36:16] , so to speak. Like I'm, I'm very impressed with the, what he's been doing here. And this is so needed. Like if you want confidence
[04:36:25]  in how your system works, show people under the scope of a, of dev tools. Like see that those components don't rerender, you know, like this, this
[04:36:35]  is. Look, look, like you can actually see which reactive. Yeah. But yeah, uh, that's very cool. And man, Tanner's just dropping hints
[04:36:53]  left, right and center. I, I love how most people who see this think this is, he's talking about like a solid. Integration, like talking about like
[04:37:01] , like solid, uh, 10 stack router or solid query or stuff. This is so much bigger than that. Um, we'll, we'll, we'll talk
[04:37:09]  more in the future. Um, this was fun too. Prime's talking about solid switch and match. Apparently, uh, he leaked on Theo stream that he uses solid in
[04:37:23]  his day job. And most people know that prime works at Netflix. So that that's pretty sweet. And finally, newest version of code mirror is out. Um, or
[04:37:33]  sorry, code image, not code mirror. It uses code mirror in it, um, which lets you create these stylized, uh, like, um, screenshots of
[04:37:42]  code. The site looks super slick. It uses, it uses the motion, uh, motion dot motion, one, sorry, uh, animations and like solid and solid start
[04:37:53] . Like this, this is, this is, this is just a showcase of, of, um, of, of, of what you can do is solid start here.
[04:38:02]  And because this is like, has to be client only. Um, just a slick, slick thing. Yeah. We have the, the motion one library, um,
[04:38:16]  for solid motion one. Yeah. I see, do we see any cool animations here when I'm clicking around? Like I've already played with the site before, but yeah
[04:38:26] , I don't know. Uh, it's always, it's always, it's always interesting. Um, because like some stuff has to be client only here,
[04:38:36]  but yeah, I don't know. Maybe dissect this at some point, but very, very, very cool stuff to see. We're seeing like actual sites and apps being
[04:38:47]  built in solid start. And yeah, look, uh, he did one of the, uh, the scroll animation effects. Um, do you know solid doesn't
[04:38:56]  use a virtual pop? Yeah. Nicely done. All right. Um, is there any other solid stuff? No, I don't think so, but okay.
[04:39:09]  We, we got there. Yeah. He said he built it in salt. He said, he said, he said he built it in solid start. Yeah. Nice
[04:39:16] , nice. Yeah. So I'll start has a lot of bugs, especially if you use windows. Um, although I guess then it's arguable who has the bugs
[04:39:24] , but, um, we're still working on stuff. There's a lot of like edge casey bugs, but like the happy path stuff works pretty well. It's
[04:39:40]  just unfortunate that we have lots of bugs still. All right, cool, cool, cool. How are we on time? 4:42. Yeah, I'm,
[04:39:49]  I'm good to cut this off whenever. Um, I got my, you know, sushi coming tonight, but yeah, yeah. PRs help a lot. Um,
[04:40:01]  someone had actually asked when I was looking, let's, let's go back to my, my, uh, my profile page. Um, one second here. And look
[04:40:13]  at here. Uh, what am I streaming today? Um, someone's there was a question about like, how can I help with salt start and where we're at?
[04:40:21]  I think, um, 10 sec router. Jared bun. There's something here. I wanted to know. Okay. Um, basically we are still lacking very much on
[04:40:37]  docs, um, and, and like the quickest way to get to the GitHub. Um, we have like 104 open issues. If you know anything about me, this
[04:40:51]  number is incredibly high. Um, 19 poll requests. So yeah, I will usually keep the doc stuff rolling pretty fast. Um, although last week, geez, I've
[04:41:04]  been so busy this week. Um, just keep it coming. Um, we will get to it. Important part right now is identifying the issues so we can triage
[04:41:11]  them. So anyway, um, I, how are we doing? Where are we at now? Cause Twitch is still strong. YouTube starting to weaken off. That
[04:41:34] 's cool. We need dark theme. Um, I think, uh, I think I'm good to call it. I don't think there's, there's really anything
[04:41:42]  else to talk about today. Is there, um, except yeah, streaming schedule. I'm, I'm probably, I'm definitely taking next week off. I'm probably
[04:41:52]  taking the week after that off too. So it might be a couple Fridays. I probably be back in the new year after this, I might like find an occasion to do
[04:42:00]  a stream or something, but like, I, we're off schedule, you know, so to speak, um, this is my last stream probably before like holidays,
[04:42:09]  so to speak. So, um, yeah. So if I don't talk to you all before that, we can pick it up in January. Walk the dog at 1
[04:42:26] :43. Is that 1:43 AM? Yeah. Thank you all. Okay. Well, let me see. Is there anyone else going on? Yeah, no,
[04:42:37]  every, I can't actually literally no one I follow on Twitch is streaming right now. I don't follow that many people, but literally no one is streaming, which is
[04:42:48]  interesting. Okay. Well, I am, uh, ready to call it then. All right. You all have a good night and until actually, sorry, until we
[04:42:59] 're, we're back again. Have happy holidays.