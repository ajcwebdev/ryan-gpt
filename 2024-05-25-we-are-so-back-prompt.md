---
showLink: "https://www.youtube.com/watch?v=VdDJbrh23zo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "We Are So Back"
description: ""
publishDate: "2024-05-25"
coverImage: "https://i.ytimg.com/vi/VdDJbrh23zo/maxresdefault.jpg"
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

[00:00:00]  all right hello everyone we're gonna kick this old school no intro screen or nothing we just can get straight to the good stuff right now straight to me sipping on this
[00:00:14]  wonderful wonderful coconut water how's everyone doing today yeah everyone doing good that's some good coconut water yeah come say hi in the chat some of you say hi really early what
[00:00:36] 's 5 38 am my time but so it's cool that you can chat before the stream even starts yeah not late yeah yeah thank you thank you thank you hey hey awesome to
[00:00:53]  see everyone here yeah we're gonna have some fun today i hope you know i don't know i it's an interesting one because i feel like a little bit out of
[00:01:03]  date on some stuff um because i i haven't been keeping up i've been working on things that are you know tricky um but on the other hand like i feel like this
[00:01:18]  stream has a real opportunity to go off the rails and where you go really deep on something you know you know so yeah i mean that has its own danger right yeah hey
[00:01:35]  hey johnny yeah happy friday yeah how long has it been it's been like a month and it wasn't my intention i just some you know events can have happened
[00:01:47]  on fridays you know um my daughter had like the singing thing one time and it just kind of turned out that way i was like trying to think of an idea for a
[00:01:57]  stream and i could get into it and the thing is i i've been writing a lot of like hack mds and working through lots of really cool ideas and you know
[00:02:04]  i might find some time to talk about those today as well but you know it just it just you know i i warned you all back in february that i won't
[00:02:12]  be streaming as much because trying to get you know work done um obviously solid start release was a big push the last little while um but in general while stuff is happening at
[00:02:27]  a rapid rate it's tends to happen in bursts i do like using the calmer times to showcase some of the really cool projects out there in the ecosystem like talking about lightning
[00:02:38]  js you know seeing solid powering you know tvs comcast you know stuff like that is really cool oh god how good does it feel so good i this is the
[00:02:48]  problem is when you're getting towards that like last bit where you're trying to push something across the finish line you're like do you hold it up a bit longer like there
[00:02:55] 's a couple bugs that one particularly that just been driving me nuts but i knew that like it wasn't going to get fixed in time of like my target release window and
[00:03:06]  it was just like okay like it sucks but it will get fixed and we just got to move forward on it right you know so i i'm very glad i we i started
[00:03:17]  solid start uh in 2021 i mean technically i was looking into stuff over christmas of 2020 um time period um but like beat 2 came out and i was like okay they
[00:03:34]  support i moved off snowpack i i made a couple issues for fred over there for a bit but then i like moved off snowpack and then i was like okay let
[00:03:42] 's do this and then like a lot of the core ideas actually showed up in that that early version um they're a little different i i think even before solid 1.0
[00:03:52]  release we had actions they weren't the compiled rpc you know server stuff that we have the today that's what nikil added about almost a year later but we
[00:04:01]  i like the basic patterns that i wanted to follow there were there in that you know first version you know i'm i used to show off streaming on the edge for cloudfl
[00:04:11] are and then for cell when they launched it and netlify right we were their first streaming framework on it in all on all of those platforms um but to go from
[00:04:25]  those awesome prototypes to the actual like release version was actually pretty difficult it's i i really hate making opinionated decisions and working through this stuff and i think we did a pretty
[00:04:36]  good job but i mean it's it's it's it's always challenging people a lot of people were just like just pull the trigger stamp it ship it we'll worry
[00:04:45]  about this in v2 and i was like yeah but i don't want to set the wrong expectations um so yes it's been a lot i've been learning some just reading
[00:04:55]  twitter last week i i hope so i think there's been some really good high level debates about a lot of topics and i want to get into them this week that's
[00:05:03]  why this can go a lot of ways depending on where you all are with me chat um so to speak thank you yeah very long time oh what's the bug adding new routes
[00:05:18]  um during uh basically if you have a catch-all route it will serve up the old code so you end up in this weird place where um the new page gets added
[00:05:29]  and i you're the client of the server serves up the 404 page and then the hydration doesn't match so you get a hydration error and like it doesn't go away
[00:05:38]  it's like cached in some weird way and it's nerve-wracking as hell because you can actually fix it by either turning on and off the dev server or actually
[00:05:49]  going in um the browser and actually disabling uh like basically like refreshing on the cash i didn't notice this for as much right away because i always run cash off but
[00:05:59]  like it's it's it's really frustrating because like what's the first thing you do when you get a meta framework and try something you like add a new route and everybody
[00:06:06]  crashing on that i just picture although like i'm trying solid start for the first time oh what hydration error it's a nightmare scenario the bug itself isn't like when you're
[00:06:16]  actually building the stuff isn't that big of a deal but it's like literally the worst bug possible for the like i'm a new developer i just opened the cli
[00:06:24]  i'm gonna start solid start today it's like literally the worst bug nice nice hype train okay yeah thanks for giving me know what's going on on twitch yeah wow yeah
[00:06:43]  level two hype train thank you very much for people who've been subscribing who do we got here we got dev subscribe thank you hernan yvv um oh dev 15 months
[00:06:55]  very appreciative xd was taken subscribe with prime remember that you can always subscribe with prime if you have a prime account um it's a free sub to one of your favorite
[00:07:06]  channels badger dev 16 months wow thank you very much for subs um very much appreciated next has been changing some stuff on their caching might talk about it might not let's
[00:07:24]  let's keep on going yeah yeah yeah yeah yeah yeah it's yeah yeah yeah it's just a dev bug we we have more of those because we built this fancy dev
[00:07:37]  layer with vinci more the more bugs on the dev side definitely anyway i i we got some people on the stream now we got over a hundred i guess i could get started
[00:07:58]  i probably should retweet that we're live there uh yeah i mean i have so much to cover today i don't i'm not even 100 sure where i want to
[00:08:08]  start i made some notes but the notes are not i don't think the notes are going to get us to where we need to get to you know so to speak i think
[00:08:14]  there's just you know stuff present share screen watch this be like been so long that i won't even remember that i that i share my screen okay it worked good uh
[00:08:27]  i like putting twitch for the live link because it's just a better interaction i think i don't know if you're on youtube please hit the like button helps a ton okay
[00:08:44]  like an enormous amount kind of unsettling amount actually but yes um anyways i'm live twitch tv is that even my right yeah it looks right okay thank you i like seeing
[00:09:02]  stuff like and we're live but i don't care i'm just lazy switch is better all right well that's uh that's good to know all right all right here
[00:09:14] 's a i like i love those approach to solid new conversation the thing i think missing for a good glossary all the terminology in the space it's not well defined anywhere yeah
[00:09:24]  and i'm i'm not much healthier it's funny i just did a podcast this morning and or it was like a meetup thing where i met and it was an
[00:09:32]  angular audience and i'm like presenting my normal stuff and i was like oh yeah this is probably just missing a little bit like i think take some time to stop it's because
[00:09:42]  uh angular is a community that actually has a slightly like some of the stuff is now kind of uniting but classically they've had a bit of difference in jargon like
[00:09:50]  they use different terminology for different stuff and certain areas haven't been as explored so like when i i was like sitting there talking about like you know how i jump between all
[00:09:58]  the frameworks like rapidly like i this is my problem i talk to people i expect everyone to know react most people to know svelte or view and so like it was definitely
[00:10:07]  like i was like pausing a moment i'm like crap like am i actually making any sense to anyone am i like yeah angular is a bit of a gap for me and
[00:10:18]  minko come on stream and teach me about dependency injection and stuff but i and obviously the the reactivity and the signal stuff i i get but historically i know less
[00:10:27]  about angular than most of the friends most of the other frameworks i feel comfortable sitting with the framework authors and a panel or subbing in for them to answer questions angular is not
[00:10:37]  one of those frameworks yeah there's there's an insane amount and the train's still going thank you thank you talk today was great good okay so at least i made some
[00:11:01]  sense thank you thank you i appreciate that all right we got more we got more subs coming in oh man you guys you guys are sorry i just saw what dev posted you
[00:11:26]  guys are having too much fun with the memes i mean i'm not surprised but like oh man it does feel a little mean doesn't it i don't know i there
[00:11:51] 's been a lot of conversation about what fine grain reactive our reactivity means this week we'll talk about it um it's just yeah react is reactive so they need that
[00:12:17]  they're trying to find i understand why they're trying to find a place here um place here it is funny that the the whole community kind of built out around this stuff
[00:12:28]  to be fair i don't know the order of these hands i feel like maybe ember might have maybe out of these ones ember was probably first to have some kind of
[00:12:38]  fine-grained reactive system probably anyway it doesn't really matter um but we'll talk a bit about what this means today i just there's been some like really it
[00:12:53] 's hard to it's hard i guess to be the popular solution sometimes you invite the conversation you don't realize it like i saw something the other day like like this one like
[00:13:12]  i have to admit i i i like i get the sentiment behind this it's just like it's a little it's a bit overkill because it's like not supposed
[00:13:31]  to be the same thing so like in a sense i think the problem is we've gone to a point where the dialogue suggests that we're comparing the same solutions i don't
[00:13:38]  know who's wholly responsible for that i think it might be because everyone's like signal signals signals and they're like uh you know we have our own thing um but we
[00:13:47] 've now got to a point where it's like kind of obvious these aren't quite the same things and people are like yeah i don't know it is tricky because like almost
[00:14:03]  everything in solids ethos these days and signals ethos in general has been like let's keep things minimalist right let's i i i've spoken very much you know publicly
[00:14:14]  about you know my concern around compilers and stuff you know like obviously felt went more a bit more that way or whatever but like about layers and abstraction and all this you
[00:14:24]  know and how much i valued reacts early you know principles and stuff so like i i get where there's like this audience that like sees i don't know what this is like
[00:14:34]  is this supposed to say they added for 358 000 lines of code um for the compiler or something i mean it's not like that's the code you shipped you know to
[00:14:43]  the browser but like like it is still something right i think i made a meme a while ago where i showed like a iceberg like the titanic iceberg and showed like you know
[00:14:54]  the compiler being the thing underneath the water so to speak but like it is it is very interesting you know this is a breast code so it's clearly better oh man
[00:15:22]  yeah thing you learned yeah they compiling before hooks were released well it was probably like on the consideration see people have to remember if immutable anyone who's working with a mut
[00:15:38] able system and and this you don't have to look at javascript you you can look at other languages you know like functional language and stuff immutable is by its
[00:15:48]  nature less efficient like there's it's just it's like the physics of it so the tricky part and the fun part of it sometimes is figuring out how to make the intent
[00:15:59]  like what you're trying to do obvious enough like and conveyable enough i don't know if that's a word that you can kind of optimize under the hood you know take
[00:16:10]  something that looks immutable but actually like cheat and add mutability in certain places so you can improve performance right or you know persistence you know like think about like react doesn
[00:16:23] 't actually re-render everything right right obviously memorization is a classic technique but it's it's it's like the way you use hooks and stuff it's a little bit
[00:16:32]  you know like react components are not actually pure functions completely because of hooks i mean give you like there's there's a bunch of gray area that you can kind of leverage
[00:16:47]  here to kind of get the ultimate results you want right they're they're they have a vision and a direction they want to take and i thought this was actually uh covered pretty
[00:16:55]  good we'll we'll get to it that though i that's just it we can go all over the map here um because there's some q a maybe we can look
[00:17:02]  at from react conf we can look at dan abermos uh conversation there maybe in a bit or sort of talk i mean one of the interesting things for me was i was
[00:17:11]  like google io um during react conf so i kind of actually missed everything um and it was you know different environment uh i watched some stuff from angular heard some new web dev stuff
[00:17:21]  um a lot about ai um but like in the background reacts just like dropping all the hits you know the new remix stuff and or react router stuff so i i think for
[00:17:34]  my own sake i'm gonna have to spend some time doing ketchup and i hope you don't mind doing that ketchup with me uh sorry off top of what time zone you live
[00:17:44]  a little bit i'm west coast i'm in california talk about compilers i'm just catching up with chat here sorry give me a second yeah but
[00:18:12]  forget is saying that you don't have the right code for not to be executed i can't wait to get my phd in react well i if you forget about it
[00:18:35] 's an interesting tension we have here as a framework author because i i i built solid not worrying that much about newcomers react is obviously popular so they are and what they're
[00:18:47]  trying to do here is bridge the gap between the phd people and the newcomers in a way that is both elegant for the phd people but also like simple or easy
[00:18:57]  enough for the newcomers to come in and not like shoot themselves in the foot too terribly um it's always the gap that's interesting on that progression see frameworks historically have
[00:19:07]  always taken different approaches to it um i think the problem is is if you take a very primitive space approach like react always has and you have all these small pieces so to speak
[00:19:19]  at the beginning it's great but at a certain point you will accumulate pieces it's unavoidable so like at a certain point abstraction is probably a necessary evil it makes
[00:19:34]  things less simple but it might make things easier and you you don't have the luxury of being able to just shift your model or change your boundaries all the time right so you
[00:19:44]  know if react is written from scratch today maybe some of those early things could have been done differently which would need would mean we'd have less pieces today which would mean we
[00:19:55]  would wouldn't need to be here yet i think it's natural in terms of the life cycle but it's also why we get new things right things evolve new simpler things
[00:20:09]  come out we shift the boundaries a bit and it's just constant shifting all right so let's let's let's look here enough of the the silly memes um i i
[00:20:34]  i get it you know i i know while i feel like this is being really mean to react on certain point i feel like they may have for better or worse invited this conversation
[00:20:49]  so i'm gonna stay somewhat neutral on this it wasn't like i was like going around retweeting these things it is interesting to see community response and i'll you
[00:21:00]  know i'll take that with measure but yeah this this this stream really starts here with funny enough react core team member ricky dropping this bomb of a tweet saying you know like
[00:21:15]  look at all that's happened in the last week or so right some of these topics i know a lot about or i know enough to talk about some of these topics i
[00:21:25]  don't know as much and probably don't care as much but i think we can just together with this plus you know maybe some bookmarks that i've collected over time it
[00:21:36] 's funny i'm not zoomed in i think it's because they changed to that x finally officially that my tabs are not zoomed in enough so that server sent events
[00:21:47]  are another great technology you can't use if you choose serverless i don't think that's true i think it depends you can't use it like fully like a web socket
[00:21:58]  stream for long periods of time but i've been thinking of some really cool stuff you can do with uh with uh service send events okay let's let's go back in
[00:22:08]  time here when when was the last time i streamed oh yeah that was cool too okay i think i think i think i think we caught up okay so okay sdu
[00:22:42] i has a good chance to be the next big buzzword i what is sdui oh yeah server driven ui okay interesting yeah i guess we could talk about that
[00:23:01]  a little bit uh yeah i mean there's a few things and actually it's funny you mentioned the exo rcs because that's probably the topic like out of all of
[00:23:08]  them that i probably didn't look at and probably let's see evan bacon right that's who's behind this okay okay i mean rscs and mobile make a
[00:23:28]  ton of sense because i feel like i feel a lot of ways we might not even be looking at rscs if it weren't for mobile like at ebay and i
[00:23:41]  imagine a lot of large companies have this we had something called the experience service and it actually sends descriptions of components because every company wants their design systems on mobile and web and
[00:23:52]  everything all to match and their interfaces but we're dealing with different technologies so like it's not always easy you know you have different you have specific components for the specific platform you
[00:24:05]  got to deal with um and but syncing up design changes is a pain in the it's just huge pain so a lot of them have these like almost descriptive things and
[00:24:15]  in some ways it's less efficient than just like rendering it in the first place but this power gives the ability to drastically simplify these kind of approaches because now almost like on the
[00:24:27]  web you're just serving up like the view the components and whatnot so i i'm not surprised at all to see rscs make it to mobile it's it's
[00:24:37]  a it's a logical place for them to be i guess the part is that some people did not expect it because they were like server like web but i mean and because we
[00:24:47]  view you know applications you know like mobile apps generally is like application size but um everything has a back end right if you want to synchronize data right even if mobile kind of
[00:24:59]  usually takes an offline first type of approach if your site is actually based largely on web content like you know a facebook or whatnot like you're going you're going to these
[00:25:10]  apis all the time so like being able to control the ui that way makes a ton of sense you know same thing with ebay auction site like there's just things
[00:25:18]  that are conceptually primarily websites instead of like productivity tools are going to want this so yeah i i think if that's the the thing i think that makes a lot of
[00:25:30]  sense um everybody has the event they're only stupid i see one of the first standards for it unlock so much cool shit on mobile yeah yeah okay yeah exactly yeah and it's
[00:25:43]  it's it's an interesting it's an interesting uh it's an interesting thought process right because when you look at stuff like rscs your first your first thought is
[00:25:58]  like why like to use html right because it's already like uh serialization format the web understands you you know there's a lot of like you already have the tools
[00:26:10]  that generate it presumably so why not use html and you can and you can use html well actually it's funny some reasons because of the way solids designed
[00:26:23]  you know i i had some fun looking at html and how to best optimize it but like were i a vdom framework like preact i would very much put would
[00:26:33]  be able to easily whip together something that works like rscs using pure html and probably do a very good job at it in fact if i was preact and
[00:26:42]  i didn't care about react's concurrent features i'm pretty sure you could hit the holy grail to affect it in terms of performance with an html based solution
[00:26:51]  i think it's possible also with stuff like solid but it takes a lot more it takes a little bit more work but that all being said um there's clearly benefits for platforms
[00:27:07]  that don't understand html to not use html it is interesting though in the mobile space where um like even native scripts uses html type abstractions
[00:27:18]  like dominator um to mobile so like part of me wonders if html as a serialization format might just persist over into mobile anyway because of like the how much much
[00:27:30]  tooling is this on web already and people might be like kind of inclined to go that way but i mean that's another topic you know yeah there's a lot of discussion
[00:27:46]  going on i'm having a hard time um hard time seeing it and in stream yard i actually don't get the tags side note so like i i i guess i can go
[00:27:57]  back to to to um um twitch and try and find a bit so driven ui is a very very old idea fine-grained updates also not new ideas all these
[00:28:09]  these come in cycles yeah tricky not to control by hypertransition use the best purchase the problem zone yeah i mean yes generally yes the thing is because these things are always at
[00:28:24]  different points where of where they are in the cycle it's it's not like they all and because you build more than this like a single application might have multiple facets to
[00:28:35]  it usually it's more like it's not necessarily pick the best tool for the job completely more of like pick a tool and just hope it kind of spans across the distance well
[00:28:46]  enough right which is why i have a lot of patients there's tools like react which can generally do most things generally pretty well um anyway um but yes a lot of old
[00:28:57]  ideas resurfacing well it's because a lot of times technology exists but it's not the right time you know like maybe some other change pushes it forward uh like another funny one
[00:29:09]  along this lines is i sometimes think that like we wouldn't have stuff like server components if we had stateful servers like we were talking about the server sent events but you know
[00:29:18]  serverless functions infrastructure expanding out that way has pretty much defined the direction of the web why you know you might not use a phoenix live view and why you would
[00:29:29]  use a you know a system like say you know server components are a partial um partial hydrating kind of solutions um which are stateless so yeah this is this is this is
[00:29:41]  there's always going to be a lot of noise or fun around uh you know the whole these these kind of topics but funnily enough if you look like out of order
[00:29:51]  streaming is my favorite it's been around since like 1997 and we just keep on coming back to it you know i think finally it's become de facto but it took quite
[00:29:59]  a long time um anyway yeah yeah i mean i know there's a lot of interest in this topic uh um it is it is it is it is definitely of interest the
[00:30:18]  tricky part obviously is trying to figure out the impact on the web i think ai might be ultimately the the reason the server-driven ai uh or server-driven ui becomes
[00:30:36]  more of a thing right um there's always like a catalyst which took one idea that before and it didn't quite get there all right all right quick another question before i
[00:30:52]  get too side tracked here what is it um here's what i asked current because i don't live with spelling can easily work vanilla whereas uses a react quite constantly custom inflation what
[00:31:04]  do you think about that i don't think i mean everybody has refs i think the i think there's like a slight niceness when your components don't re-
[00:31:11] render so that you can kind of just like just write some code in your component and be like oh i'm using some vanilla.js stuff and it feels easier because you're
[00:31:18]  like i don't have to worry about it i'm not like i'm not thinking about react here i'm just doing my thing so i just go okay now i'm in
[00:31:25]  this zone and with react you have to worry about reacts render cycle even when you're like outside you know and it's kind of like but you can you just get a ref
[00:31:36]  you use an effect and you're you're kind of done with it so like that's why they make wrappers so it's like you wouldn't you don't need
[00:31:43]  the wrappers but you make the wrappers and react so that it feels like react whereas in these other libraries you kind of just don't make the wrappers because it doesn
[00:31:53] 't feel contradictory to just go in there and just add stuff like that so i mean is it harder to do i don't think so i think it's just a preference
[00:32:03]  it's kind of you know you know it's like a purist thing it's like when you go talk yeah yeah no exactly it's not it's not harder to
[00:32:28]  do it's just like they i think it's a preference thing in terms of api it's not easy i mean is it the life cycle then like i feel like
[00:32:41]  react gives you this tool with use effect that's just like stick me on the outside like you have to like be aware of this but it's like i i guess like
[00:32:53]  like i don't know the pain in blood yeah yeah so anyway anyway um i don't know if i have much to say other than this makes a ton of sense to
[00:33:16]  me um i think it's it's a cool tool i'm i'm still struggling with server components on the web so i am you know i'll hold anything beyond that which
[00:33:31]  is why this topic is probably makes a lot of sense but why i have very little to say about it yeah thank you yeah i mean it's a waste video so something
[00:33:47]  like yeah yeah ai is in the background is sort of driving a lot of stuff right now i think i mean it's not i think it's kind of obvious it is i
[00:33:58]  think partially even why we're talking about um server persistent state and all this stuff too it's it's it's this desire of of the current model not being interactive enough
[00:34:10]  which is interesting we've been spending so much time with our frameworks trying to go to the left side of the spectrum um do you know what i mean when i say the left
[00:34:19]  side uh there is that chart that fred from astro always talked about even talked about on our stream i think he showed it on our stream but he was too scared to
[00:34:27]  post it because he thought like everyone would hate on him where he's trying to put the frameworks into categories based on their holotypes like from from portfolio to figma and
[00:34:37]  i always put like the portfolios on the left side and figma on the right side of the spectrum and we've been working really hard to make things easy enough that people
[00:34:47]  want to pick up our tools on the left side so you can make your blog site there's so many more customers there in the content side marketing advertising side that's why
[00:34:55]  rcs are the way they are they aren't the best for apps they're actually better for low interaction stuff they scale up to apps perhaps but that's like not where you
[00:35:04] 're in my opinion where you're making the win which is an interesting observation when talking about mobile which are very application-like but again this is i mean it's kind
[00:35:13]  of like uh micro front ends like like the need for uh the component ai's or the component based um server driven ui i don't i don't feel like it's
[00:35:26]  an optimistic choice it's like a optimized choice it's a choice because of need right um because of some requirement and uh generally what i'm kind of getting at is that
[00:35:42]  we've been working so hard to go left where everything indicates that you know over time we all generally move right we hope generally want more interaction we all want more javascript
[00:35:53]  you know so to speak so yeah it's a very interesting tension right now and it helps understand why we we're seeing a lot of passing ships right now where people are just
[00:36:02]  like not getting these concepts because it's like why do you suddenly care about going left you know there's a whole audience that's like constantly looks right all right so somehow
[00:36:22]  we got talking about ai and i am not an ai expert i i am not at all i've been asked on panels to talk about ai and i'm just like the only
[00:36:30]  thing i know about ai is that i don't know ai so like yeah yeah you guys are going i love the energy in chat right like you guys are just going mad
[00:36:41]  in here anyway expo turbo pack 100 percent i i don't i don't turbo pack is like that thing you use when you don't use v right yeah i don
[00:36:59] 't really know anything about turbo pack um i can try quoting this and seeing what this is i was now passing 100 from the test from next js i guess that's an achievement
[00:37:18]  because the problem is turbo pack was trying to be faster and get like web pack compatibility and next js would be like the web pack solution because everything else is on v so
[00:37:29]  um yeah i can see in some circles why this is a huge huge huge deal um okay cool turbo repo is cool i use turbo repo yeah you can skip turbo pack yeah
[00:37:48]  yeah yeah turbo turbo repo is awesome all right well we're gonna talk react compiler let's go let's go next in my list tan stack start alpha i've been talking to
[00:38:05]  tanner like every other day because he he's it's it's he's hitting the issues and bugs that i hit you know a few months ago and we're kind
[00:38:15]  of like he's like oh how did you solve this problem and like check this out he's like oh okay you know like we're kind of working through it um he's
[00:38:22]  he you know tan stack.com is on his new framework which is very cool um but it's now it's like okay i proved that it works it can do incredible things
[00:38:34]  how do i get this in other people's hands right um so yeah i mean i i love working with tenor that closely um lots of energy lots of ambition and the
[00:38:48]  impact of his work touches so many people um so like yeah we i just love chatting with him we should get him back on stream one of these days soon um basically he
[00:39:02] 's he's been going hyper the last few weeks on just pushing this forward right i think once i was like solid starts kind of close to 1.0 he's like okay
[00:39:12]  i guess everything's here let's let's go for it right i i feel like i've been doing a little bit of the you know we've been doing a bit of
[00:39:19]  the battle testing on this stuff vinci's still got bugs we're still working through stuff but um the second vinci powered framework coming out soon is very exciting obviously this
[00:39:29]  only helps that ecosystem and more people on nitro i've been hunting down nitro bugs the last couple uh the last week or so to leading up the solid start release so
[00:39:37]  the it's like v just it we might be slowing starting kind of slow but the more we get things towards the stack the more consolidated it gets we see this with beat six
[00:39:48]  you guys are going to see a bunch of uh one really big vinci feature make it back into v core which drastically simplifies um how creating something like vinci would
[00:39:58]  work in the future for some people might not even need it and um you know this this is huge really for all the deployment providers they're providing this vinci has this idea
[00:40:08]  of routers or separate builds that all kind of come aside and figure out how to handle the graph and bundles between them beats now bringing that functionality internally with this new
[00:40:17]  feature called environments and beat six and um it's just incredible to see this growth sorry i i'm a big beat chill if you can tell um it's just it's like
[00:40:27]  the best technology that's come out in the last couple couple years um it was it was really cute i suppose to some people's perspective as me and uh evan with the
[00:40:36]  solid start release right let me see if i can find it had a a little bit of an exchange because um he he thanked me for in the in the release announcements for
[00:40:47]  mentioning veed and it's just like how could i not um let me see here solid start yeah almost 2000 likes that's that's good for us um let me see if
[00:41:00]  i can find the the post the post engagement quotes yeah yeah congrats to solid team and shout out to be glad to see solid solid foundation like i sit here i doubt
[00:41:11]  i would have attempted this otherwise in a time where every incentive incentive is to build specific solutions to align with the source of funding and to ship fast feet makes building ambitious apps and
[00:41:20]  libraries in the open possible what i mean by that is look at this all these stars are aligning between ai between um you know uh like infrastructure needed to support this you
[00:41:32]  know between frameworks aligning with infrastructure you know where you have these frameworks that are literally like being built by infrastructure setups like things like remix at shopify or next for cell or
[00:41:44]  whatever and in the law time in those situations you can leverage stuff easier more if you bring it internal like a lot of companies have their own bundlers uh historically right because
[00:41:58]  you know they get exact control over what they need they build it out they build the stuff for their infrastructure for their hardware and they end up with a very specific kind of custom
[00:42:07]  stack and beat has somehow been good enough to buck that trend you know it's kind of like the trend you you need a meta framework right i i i was when they
[00:42:18]  were retiring create react app i was like i was like oh you know i i you know beat was a logical choice they they instead decided to push next and uh and remix on
[00:42:28]  the on the react core team um and and mentioned gatsby as well i suppose but like like v i guess wasn't quite there on the server side of things there's
[00:42:39]  pieces missing but tools like veed are what keep us from having to go the specific tool that soon it pushes the it raises the floor for everyone i i can't express enough
[00:42:52]  how awesome veed is in in doing that and every time it adds more features pulls more of those pieces say from nitro or vinci into the core the more capable it
[00:43:01]  gets of doing this this is the trend to to fight against getting locked into a specific provider or a specific uh you know type of infrastructure or specific thing like yeah i you
[00:43:13]  know otherwise you're gonna find yourself you know deploying your apps to you know you because you chose a framework and that framework has a meta framework that happens to work on one infrastructure
[00:43:26]  platform that happens to use one build tool that happens to use like the whole chain becomes proprietary and that's like scary right anyway uh on js it's so based yeah
[00:43:55]  yeah on js is great we were just talking about is that possible um i don't see why not it's just a format for for doing server communication built through the router
[00:44:22]  it's yeah if tanner wants single flight mutations without rcs because rcs actually do single flight mutations so do mpas if you think about you just change the thing you
[00:44:32]  load the next page tanner can completely get those if he wants them yeah i mean next js shifts with a standalone mode that can work on a variety of providers that's
[00:44:55]  the official dance so i didn't say it i mean let's if you look at most js frameworks now every single one uses an adapter system astro quick solid start s
[00:45:34] velte kit they all make work to make template remix they make work to make their stuff work on every single platform no no one assumes that a single run time would actually
[00:45:48]  be sufficient i it's interesting though i mean i wonder i wonder if i can actually look it up maybe i'll do it later it's it i netlify has some
[00:46:02]  of our own like own adapters for some like we work with the team so like i think the remix uh netlify adapter actually is like uh hosted by netlify
[00:46:11]  if you look at the next js adapter and like the remix adapter or cell kit adapter or something it's it's kind of funny uh it's like the difference between like
[00:46:20]  like you know a single file or you know like a couple files and like something enough that um we call our adapter for next at netlify a runtime the the we
[00:46:33]  call it the the the next runtime so just to put into perspective the it starts with standalone mode and then it adds all the other features um yeah it it's it's
[00:46:57]  it's it's interesting and in any case we're not talking about next js yet we might talk about later i want to just shout out how awesome beat is again all
[00:47:18]  right just going back and did i miss anything on the twitch chat no i do not believe i did okay all right all right all right i'm i'll put this out
[00:47:41]  up here um in a sense if i was a react core team member this would be my perspective adapters set a high floor but don't raise a ceiling for what's
[00:47:53]  possible we should thank next for saccharine's own capability in order to actually try new things every provider is still trying to catch up to isr yes right um you sometimes
[00:48:03]  it's kind of like standards right you you it's always good that someone pioneers in a direction um you know i mean like like you know like let's say the work
[00:48:17]  you know solid did with signals and then others adapt it adopted and then we get to a point where we're like okay let's you know try and make a web standard of
[00:48:24]  it right there's just like multiple steps in this product issue but someone at the beginning has to go against the grain or someone at the beginning has to do the work out on
[00:48:31]  the limb not use things that aren't available on other platforms to do it right so i'm fully you know and if i'm the react core team to be able to actually
[00:48:39]  take these thought experiments and be able to implement them for real and ship them that's incredible because it gets to prove the model makes things possible i just prefer to not pretend like
[00:48:49]  it's anything else other than that you know what i mean like if that's the case then that's very cool right it's it's just like you know then it it
[00:49:01] 's kind of like the open they got very upset about the open next thing right yeah you know yeah i mean the the the the cache stuff for isr with netl
[00:49:20] ify is very very cool it's cool how they use just headers and it's it i think the biggest limitation there might be the difference for the like like like the ppr
[00:49:28]  like the specific infrastructure pieces that for sol is using like even to try and implement ppr on another um platform is actually kind of challenging right right i actually i i let
[00:49:50] 's skip ahead for a second because we're talking about this stuff is this we'll come back to ricky's post in a minute i saw something cool the other day
[00:50:01]  plain ppr partially pre-rendering without a framework what parchment but when that lives platform permit is this simply blend plain static hnl without any framework or even build system
[00:50:12]  with the help of netlify edge functions so my guess already because of the edge functions thing and because i know a bit about our infrastructure is this is not equivalent to what
[00:50:20]  recel does but i'm get but i'm but we developed this probably so we could add ppr to next the idea is that a static page is served from the
[00:50:29]  edge as fast as possible with the areas the page left the place where dynamic content the server will start fetching the dynamic content in parallel with the response stream and then append the
[00:50:36]  dynamic responses to their spawn stream from the static shell at the end so yeah basically what i was describing on a stream last week yeah okay so it's using it's a
[00:50:53]  little bit low level i think that this article feels like it's written for me it's like ryan if you want to add ppr to netlify this is how
[00:51:05]  you do it yeah i mean it's just mechanically showing how you can basically do how to like stream in the content and then insert it basically using script tag see inner
[00:51:16]  html but yeah yeah so i i think i actually just summarized it this was basically so we could add ppr to to to the next runtime but we they published
[00:51:31]  in a way that this would work on every javascript framework which again i kind of respect for some odd reason it's also referred to as out of order streaming yeah
[00:51:59]  yeah i i i this is what i was kind of getting at i was kind of it's out of order streaming with a static surf shell basically it's saying like cache
[00:52:08]  the shell plus out of order streaming right but the difference is versell actually has special to my understanding special infrastructure to handle this in in a way that allows um um the not
[00:52:23]  cause the like basically they have like us i don't know the term is like like you don't have to spin up the web the the worker you don't like they
[00:52:32]  basically just have something at their cdn layer that just goes okay that this is the type of request i'm going to send this back and open up the stream and they
[00:52:41] 'll do that without firing any client javascript at the edge in order to do it whereas this approach is basically i mean it's like the poor man's version of it
[00:52:53]  in a certain way it's like the the it's like what you would do if you didn't have custom infrastructure um you know i mean this is this is why you
[00:53:04]  deploy your react apps to versell because no one else has stuff specifically for or your next apps to result because no one else has this specific thing this this basically accomplishes something
[00:53:17]  similar but it you know it's you see you see the you see the slight difference right next versell tied like this delivers this sort of feature this approach probably works with
[00:53:32]  astro solid star spelt kit probably works with everyone um but yeah so anyway so i i do think this is interesting i i think it's also a difference in in
[00:53:58]  positioning like i appreciate as i said the the temp tier i'm not sure this is equivalent which is the the challenge but it definitely caught my eye because i like looking at
[00:54:10]  things from a primitive perspective i like looking at what these building blocks are um you know it's funny because you think i'd be into standards then but i i it's because
[00:54:19]  sometimes once you have those pieces you can your ability to redefine how like your reality works just becomes so much more capable anyway i see there's a little bit of like
[00:54:38]  next for cell fighting and yeah i mean uh there's gonna be there's gonna be some you know stuff here funnily enough while we're here matt cain um
[00:54:54]  who made that post happens to also i was trying to get him on the stream uh to talk stuff uh because he's and rob and a few other people at netlify
[00:55:06]  are responsible for making the next uh adapters or sort of runtime for uh netlify and i i thought like having him talk about his experience um and i think i
[00:55:18]  think that's a great experience would be really eye-opening for a lot of people um but he is actually moving on from netlify um uh so uh he's
[00:55:26]  he has not announced what his next move is um although he says it's tied to um open source so i'm looking very um looking forward to it because obviously his work
[00:55:41]  um and you know at on the framers team at netlify has been considerable you know um and he's done several other things at netlify as well but i
[00:55:53]  just like you you always saw his kind of comments and association in terms of like the the you know getting next working on um a non-versal platform you know and
[00:56:02]  reverse engineering stuff so always very impressed with that so i'm sure wherever he goes next he'll be doing very cool things anyway um let's keep on let's go back to
[00:56:21]  our our list here because i don't even remember what we were talking about we started talking about tan stack start and turbo pack and expo should we just talk about look
[00:56:35]  i want to see what this action rfc is let's talk let's talk astro actions um react 19 support for astro actions is that what we're talking about
[00:56:58]  oh is this just using sorry is this just using oh no no no no no so it's taking astro's previous actions api and they actually feed also into react
[00:57:19]  that's cool i i okay okay it's not compiler time i'm i'm i'm saving the big guns a little bit later we will get compiler time um yeah okay
[00:57:37]  i'm just i'm getting the smaller topics off the base this is cool i want to quickly because then i don't worry there'll be lots of compiler meat to get into
[00:57:50]  okay yeah because astro actions have this whole like zod interface um handler blah blah blah like set likes interesting part about their api is define action it reminds me of you
[00:58:09]  know like it's it's back to like uh i think it's probably it's probably makes sense it's like it's inside the use server it's the function call
[00:58:17]  the function call has some benefits that i do miss but i wasn't going to fight the react trend but now at least i understand what this feature is and it's cool that
[00:58:27]  plugs right in yeah it's because it's native yeah i think that's one of the most interesting things about uh react 19 and the work the react team do is doing it
[00:58:37]  because they're comfortable pulling these features into core which is something that i'm actually not comfortable with yet that's why it's in start or the router because i want to
[00:58:47]  i want to understand where these things go you know when something gets into sol.js core that it's like you know it's it's much more you know resolved i like
[00:58:57]  i like i like the pattern of pull it slowly pulling stuff in i mean generally speaking react does too but i think that this stuff is just such fundamental and big that i can
[00:59:06]  see why they're like going straight there um we're in a different point in our cycle but in any case i i think the astro rfc is interesting i
[00:59:17]  think it was natural for them to want rpc functions and the fact that it interrupts nicely natively with the the with the frameworks is a really nice touch is there
[00:59:25]  anything else in 4.9 that's interesting uh container api allows render astro quotes outside in astro applications this is how you can render okay interesting okay and then
[00:59:40]  stabilized experimental features security crsf origin i18 to me okay cool cool stuff incremental but nice nice okay keep on going this action solved the post problem now someone needs to
[00:59:59]  solve the form data problem are you talking about like the fact that form data and the types are just horrendous yeah oh it's the the new container api yeah i
[01:00:23]  i i'm trying to picture the use case where i want astro components in my non-astro project like i just start with an astro project i guess like
[01:00:33]  because in my head astro components are html but i guess it's like this is like these inception things because the astro components can then have client components so you
[01:00:41]  can make like lakes of islands or something like you could have like can i have a react app which has yeah i don't even know how that would that doesn't make sense
[01:00:50]  yeah never you know what i mean yeah i mean forms do suck in general like it's unfortunate that that's like the protocol we have to use for progressive enhancement we we
[01:01:11]  do like lots of tricks you know with server functions like binding variables or closer extraction but it's like still sometimes the form data is actually just form data right like it's and
[01:01:22]  you could try and like be smart about it but it's like then it's like magical you know what i mean like sometimes your forms have form fields in them um and
[01:01:30]  then you're back to this you know yeah it just sucks yeah the container is great for you testing after components or i'm hoping to use for dynamic branding your entire pages without
[01:01:47]  script and style hosting yeah i'm i'm not familiar enough with web standards to really answer that question oh there might be binary okay there you go yeah i guess the the
[01:02:05]  thing is because you can have like you can actually like you can do like way more with form data right depending on like the the format types right like use forms to upload
[01:02:17]  things or whatever yeah files yeah yeah yeah yeah okay yeah i mean i walked into that one all right all right um let's keep on going um all right uh uh uh
[01:02:51]  uh what's a lot what do we got here million lint is is it officially 1.0 or is it just rc one oh rc okay this is the thing
[01:03:04]  that tells you why your react app is slow right this is this is this is interesting i this is actually a good prequel for what we're going to talk about a
[01:03:19]  bit later but it's funny million latest to solve unnecessary re-renders and react without playing graphs this was kind from our frustration how difficult it is to make performance react websites
[01:03:29]  i mean this is a brave thing to say some people would be like skill issue um but that's like the really like nasty take of it but the the truth of the
[01:03:43]  matter is if you look at million and i think we might get to this later is million solves one type of react performance problem the type that you can measure and um you know
[01:03:55]  micro benchmarks and stuff and then the react compiler i suspect solves the other type of performance uh thing the one that happens but no one realizes you know until it's too late
[01:04:09]  so um this is like very complimentary because in one side million can't stop your react app from rendering over and over again right it like basically aiding comes up with a super
[01:04:22]  fast thing you know we'll look at js framework benchmark it's front he's genius ability to like as fastly render that one component as fast as possible and then you stick
[01:04:33]  in your react app and it's like you know no one cares you know that that so this is this is like the other side what's interesting is is this at cross
[01:04:43]  uh purposes with a react compiler that also like did did million linter get that much harder to use now that react has a compiler that auto memoizes so if million goes oh
[01:04:54]  this is a linter this is a thing that shouldn't be performing and react forgets like actually we got you covered you know this this is actually really interesting for timing
[01:05:05]  yeah so sites are bad for business yeah okay but it's interesting so it's profilers his approach isn't purely like linting thing right so are they running prof
[01:05:22] ilers in the background that that that is more interesting so okay so he's talking with the rack follower here okay good i'm glad he's addressing this million l
[01:06:04] int is super present should exist but the fact that this makes me unhappy yeah i mean it's interesting because you know million i i believe now has vc money behind it and
[01:06:19]  doing this stuff so it's it's it's it's interesting to me that um that like there's basically like a company behind this kind of thing like the the the
[01:06:33]  business of making react faster is worth money that's interesting yeah so he's talking about where incidental automatic memorization actually groups together things that shouldn't be grouped together yeah
[01:07:02]  so he's talking about where incidental automatic memorization actually groups together things that shouldn't be grouped together this is cool technology and i like the fact that it uses
[01:07:32]  measurement to make decisions that is that is actually like the thing you always want concept like separately there's like an architectural purity thing but this is actually like this actually matters right that
[01:07:47] 's the thing that's hard to do to actually tell yeah yeah he sent this along to me a while ago and i didn't get a chance to test it out i
[01:08:03] 've been very busy as you know but this is very cool okay i i get it now i thought it was like uh code analysis but this is actually like there is but
[01:08:16]  it's actually backing it with profiling which is interesting to me i'm investing in it because there's definitely money in the synchronization build process editor browser and linter yeah
[01:08:35]  like the whole tooling around this stuff has a lot of potential it's i've been talking a lot about this for people on the signal side because i feel like knowledge of the
[01:08:44]  data graph uh it would lead to like not just those crazy visual dev tools that i've showed off you know that we have and we work on but picture your ide being
[01:08:54]  able to trace the data things like knowing like the what you can do with signals and the traceability potential there is so high that if there was similar amount of money or effort
[01:09:06]  going in on that side i can only think of what you could accomplish of course signals are not deployed enough that we have enough maybe data or incentive for people to go that
[01:09:18]  way and people are still at the earlier stage in the project that performance is not really a concern that people are investing that but it goes beyond performance it goes to like actually i
[01:09:29]  can see guiding the way you develop your code anyways let's keep on going all right all right did i talk about solid start point one photo i i guess i did a
[01:09:48]  bit i mean at the beginning i don't know if there's much to say i feel like i've written the same blog post like four times at this point um i'll
[01:09:56]  i'll throw it up on the stream for a second here like uh oh man there's so much good stuff going on right now sorry i'm just looking at all my
[01:10:08]  bookmarks um let's just go here for a moment um yeah you know it's funny because if i like duplicate this tab across and then i go to about blog and go
[01:10:35]  to backup couple and go to solid start beta what do we got here nested file system routing okay yeah server functions server functions okay route data and actions oh i didn't really
[01:10:56]  talk about that i guess i well maybe single flight mutations yeah i guess what i'm trying to say is that for me this is the most uninteresting release because we just
[01:11:16]  we just built something that we've been building for two years and it's finally ready for prime time but you know have we talked about single flight mutations probably on stream because
[01:11:32]  i mean i showed them off i'm and i talked i theorized about them on stream actually and i showed them off in the in my uh solid stream that i did back
[01:11:43]  in january december i actually showed them going uh yeah it's the i invented the term which is i might as well start video on dropping it tonight oh nice yeah
[01:12:01]  i mean i it's because i came up with the term like basically on stream writing hack mds and stuff like basically i wanted to mimic this was the one waterfall that single
[01:12:15]  page apps had not solved that mpas and react server components solved innately so i was like okay can i is there a way to make other than obviously some bundle size
[01:12:26]  things but like you're already contending with say react right now and you're already tending with serialization stuff i was like can can i make it so that people from
[01:12:35]  a like uh architectural side aren't um wanting for server components in any way like they had no no argument from my perspective that i can cover and i realized what if i
[01:12:46]  solve single flight mutations in a single page app because it's funny i was i was theo's theo's here which is sweet but i was watching his his review of dan ab
[01:12:56] ramoff's talk at react comp and um and there's something that in a sense i was i was thinking about covering that on the stream not dan's talk but theo
[01:13:08] 's watch over dance talk because it really watching dan's talk and then into theo's analysis it really drove it home for me this thing that i hadn't realized um this whole
[01:13:20]  time and i'm not talking about how brilliant dan's talk is it like getting people they have for server components to finally click because they they clicked for me a long time
[01:13:30]  ago it was understanding that like why people are so resistant to them because if you come up okay yeah yeah i almost want to i almost want to look at this for a moment
[01:13:43]  it's on this router no because we pulled the we broke everything apart which which is why i didn't talk about it the islands router would have to go in the router now
[01:13:51]  instead of solid start which in sense makes sense the router is where it belongs um but uh i focused on 1.0 release rather than focusing on that the islands are still
[01:14:00]  in solid start but the router needs to get into the router so yeah i mean i mean i guess the first question is can i even find it i don't know how much
[01:14:14]  time i want to spend like looking through it um but let's see here first let's go show more where are you i don't even know how they choose the order
[01:14:26]  of people on here because i'm pretty sure i i'm only subbed to a couple people on this list and i'm theo is one of them so uh where sometimes the
[01:14:41]  recent broadcasts are yes remix dead laravel this one is this it or yeah yeah yeah yeah okay sorry i you guys can't hear it like this give me two
[01:14:58]  seconds i have to actually open this in a chrome tab which i have oh let's get here let's pause it let's full screen it and then i have to change how
[01:15:16]  i'm presenting it in stream here give me two seconds so uh stop screen present share screen chrome tab also share on all right tell me if you can do this video do
[01:15:39]  this let me share start at i have this link in here so what is it can we can we hear theo talking yeah sweet okay now i'm gonna skip react and it
[01:15:55] 's called react for two computers okay their feedback and thoughts and he's given the dan's given variations of this talk kind of like explain the two like he had uh the two
[01:16:05]  histories of react he's really trying to point out this duality and a lot of stuff what i want to get to is a little bit further on um where where i
[01:16:15]  don't know where is it it's the hardest part about scrubbing this stuff where where he's showing the code examples right yeah yeah yeah and there's this nice chunk here
[01:16:28]  if we can why am i just not i'm so i suck at scrubbing right now let me see if i can get to the beginning of the beginning of this code
[01:16:36]  example okay all right let's just run this client and that's where i think this starts to get a little magical say this particular interaction has to be synchronous like i want the
[01:16:49]  data to already be there with that screen i don't want to wait for it uh to kind of come later like and the thing before theo says anything here he's this
[01:17:00]  example is he's got a fetch api that's returning i guess some kind of html or text and he's just putting it inside here so what he's got
[01:17:09]  he's got a reveal button that on click he then goes and fetches the data and he sticks it inside the like he replaces the content of the document body so he
[01:17:19] 's he's basically doing like this is kind of like a client uh like a router essentially but like not a full page uh or it's like a full page swap without doing
[01:17:33]  a full page reload it's doing ajax swapping the content of the whole page right so things i've seen people do despite the screws off things things are do i
[01:17:41]  do either with that screen i don't want to wait for it uh to kind of come later like i want to be able to ensure low latency for specific interactions so how how
[01:17:52]  do we fix this any any ideas right he's complaining that he has to wait on clicking like that like you don't get the data until you actually do the click um
[01:18:07]  so it's uh it's it's kind of like not obvious how to approach this problem if you look from the client-centric perspective because well this is this is all i
[01:18:16]  got right i have this fetch call have to await it uh there's not much i can do there uh so maybe one thing we can do is we can look at the server
[01:18:24]  code so this is my server you can see there is an npi endpoint that i created that reads from a file this is my list of cat names i know there's
[01:18:35]  going to be some web devs here that aren't as familiar with the server side stuff so i'll do a quick explanation here so there is a script tag here that says
[01:18:45]  uh here's the here's the client code uh for for this page which points to this code and just to kind of make it more visually obvious what is really happening in
[01:18:56]  our program and how our program is really structured i'm just going to copy and paste this so i'm going to put the code of this uh client code in line into the
[01:19:05]  script so that's not necessarily like the best way to write production code and there are more kind of efficient ways to do this right uh but for illustrative purposes i think it
[01:19:17]  really helps uh kind of explain what's what's going on in the code yeah sorry theo the reason i want your version isn't for the part on dan's talk it
[01:19:26] 's actually for what you do after dan's talk um so if i i'm not skipping theo's stuff to be really watch his video if you want his takes um it's
[01:19:35]  it's great um i i'll get there see the the first thing um that you see here is this is kind of old school like i mean also we didn't have as
[01:19:49] ync functions or whatever um but like back when you did html you would you know define any interactive behavior um almost like in a script tag like this or maybe you
[01:20:01]  import a js file that had all your like click functions in there or whatever right um but like we got so far away from this when we went to single page apps but
[01:20:12]  like uh like even knockout makes me think of this because we used to like i'd render erb templates and then they would like render the javascript framework code in
[01:20:23]  to the like the actual markup of the html i am genuinely really curious so if you're watching this right now and you're trying to follow along and figure
[01:20:39]  out server components i want you to comment what timestamp it clicks for you because i know this talk is going to make this click for a lot of people so say in
[01:20:50]  the comments what timestamp in this video was the one where the server component mindset clicked because i already see in chat this is where it's starting to click for some of y
[01:20:59] 'all yeah but it's gonna get way cooler in a second this is this is actually i thought this was a really smart thing you did the oldest side note i thought this
[01:21:06]  was genius because watching the chat react is like they kind of got to it is really what he just did here okay over code and the client code as kind of two separate
[01:21:14]  programs that talk to each other they kind of pass messages to each other or like request stuff from each other but now i'm kind of looking at it from a different perspective so
[01:21:24]  i kind of look at it as a single program that spans two different devices that spans two different computers it's like a program that's evaluated kind of in two steps to be
[01:21:34]  clear about the two steps in case you're not following which is understandable this is a crazy concept that's being communicated here the first computer is the server that generates ht
[01:21:45] ml like the html we think of it as a file if it's in our public folder in our code base but most html is generated at request time and
[01:21:53]  the contents of that html can change based on information that the user has specific to them it could be your auth information it'd be the route that you went to it
[01:22:01]  can be what you want i'm going to assume you guys know that i mean we're going to for example again we want to make this function synchronous we want to make the
[01:22:09]  click handler synchronous so okay which is called lifting state up where you put the state into a parent component and then you pass it down what if we could lift data up and
[01:22:20]  instead of lifting it through a parent component we lift it up to a parent computer so we will lift it up to the server i'm gonna just copy and paste this from here
[01:22:33]  i'm gonna put it here i love this interesting i'm expecting this to be do you know i love this because it's just the same trick i do with signals when
[01:22:42]  i show people that you can just pull the crate signal out of the out of the thing and you get global state this i that kind of uh like moment you live for when
[01:22:54]  kind of coming up with this these talks right but i started feeding i learned this stuff and i love it well but you have to understand the implications of this right i mean he
[01:23:02] 's not done if we scroll if we scrub a little bit further here while it's playing that makes sense on um how do you get the data back into your stuff you
[01:23:12]  actually have to inject it in so he's jason stringifying it here to actually get the data so he fetches on the server the key thing you have to understand about
[01:23:22]  this is he's now fetching it before your click happens regardless of your click he's just grabbing all the data up front on the server render he's hoisting it
[01:23:31]  you know like we do with route loaders essentially like you're you're he's pulling all the data out fetching it at initial request time and then serializing it
[01:23:42]  into the page this is kind of how all our ssr works today i mean other than the in line click handler bit but you like we magically serialize i don
[01:23:52] 't actually i don't know if this happens automatically react it's all like if you make a resource we magically serialize all your your data for you but i know like next
[01:24:00]  data is an example of the serialization and like there's serialization happening so while this seems incidental you're making a choice here of where the like the code goes
[01:24:12]  like if it was html here you're making a decision you're suddenly going i want this to be something that is served as part of the initial page load instead of
[01:24:23]  something that i fetch later right um there there there are performance consequences of making this move these are not equivalent you're making a conscious trade-off or decision right like but
[01:24:39]  it is very it's very cool to kind of like sometimes people don't think of it this way but in a sense what when i think of ssr i do think
[01:24:50]  of it this way for some some reason but let's let's continue going to think about uh client and server and i'm just gonna continue down this rabbit hole and and
[01:25:01]  see see where it leads me so the other thing i'm noticing is okay like when we hit the uh when we hit the server and we want to serve this page uh and
[01:25:11]  um the first thing that happens is that okay i already see a misconception in chat so i have the statements because when people say rendering they're assuming it's just the part that
[01:25:21]  is interactive is modified based on things the server does other solutions do yet but not needs based on what yeah i mean tell i'm skipping over this a little bit because maybe
[01:25:32]  i don't complete like i i if you ever built knockout in in like erb you did actually serialize the stuff that wasn't shown so to speak right like because
[01:25:48]  you you would client render template pieces but you needed the template for the pieces that you haven't shown yet sometimes you'd show something without um like you'd show something and
[01:26:00]  that content wouldn't exist yet exactly but you still need it and it's it's an interesting tension because when we ship anything between the server and the client or anything there's
[01:26:12]  actually two places things can go it can either go in the code or it can be part of the like dynamic response right we actually what a lot of these solutions we're
[01:26:19]  doing right now around server rendering and stuff it's just shifting where stuff goes we if stuff's in the code it can be cached but it's also fixed in size it
[01:26:28] 's not as dynamic as stuff that we can generate at runtime so if you put stuff into the data the data happens on every run if and if you look at like resume ability
[01:26:37]  um from that eye is basically making the bundling part of the data so based on like what's used or whatever or like you bundle it small and then the data drives
[01:26:50]  what code is pulled in and in sec in a sense server components are are driving what uh html or markup is getting pulled in right we're moving stuff from code
[01:27:02]  which is static to to being driven by the actual data that happens at request time that's that's the way that i'm generally looking at a lot of these technologies but
[01:27:12]  there's a trade-off for that right because innately increases bandwidth right so like these are these are considerations like to be fair um there's a lot of bandwidth considerations when
[01:27:25]  you have to deal with hydration and having data there to hydrate and the the difference between like part of it like if you need to create something on the client or hydrate
[01:27:34]  something the client and the templates in the code the template in the code is going to be the static parts in order to get the dynamic parts you also need the data and
[01:27:43]  then the output is going to be the combined pieces you end up with the double data problem right because you need both the but it's not just a double data problem if you
[01:27:53]  think about it it's also the double template problem because you have the template serialized in the html and you have the template in the javascript code with with
[01:28:03]  react server components you remove the template from the javascript code on the server component side right or with islands so you solve the double template problem so to speak but um
[01:28:15]  and that's why the code gets smaller but the the double data problem can be trickier so anyways let's continue here for a a moment because i see a lot of
[01:28:33]  parallels to my like 2000s web dev here um and i think anyone who's a php developer rails developer will as well but i think he's going a little bit
[01:28:43]  further let's keep going to do we you know we call the api but where where does that happen well we hit the same server that serves this api it returns to
[01:28:53]  json and returns it like this and i'm like do i really need an api for this like maybe in some cases uh but probably not in this case because you
[01:29:03]  know i only have one usage so i'm just gonna paste this code here and i'm gonna delete this api handler remember when dan tweeted you don't need apis anymore
[01:29:12]  so i could click bait it for a thumbnail like he actually tweeted that with the knowledge i would abuse it he wasn't joking in so many cases the idea of an api
[01:29:21]  is just not a necessary abstraction anymore we don't need to expose data via urls if it's only being used to render a ui we can just do the thing the
[01:29:30]  api did and render the right ui with the right context yes but what is i mean if we're going to go really stepping out what is data and what is
[01:29:41]  an api because i i mean this whole thing is an api the html is the data right like and i know i'm getting really meta here but yeah let
[01:29:50] 's keep going for a minute uh let's verify that it is that works and uh you know you could say maybe what about abstraction like what about the api was not
[01:30:03]  really enforcing separation concerns or anything yeah i don't care about any of the other you have like a whole picture of what's really you know what's really happening including both
[01:30:14]  the server and the client side to send them on this computer but if i look at the yeah the data in my sorry i went too far i select bi and them one
[01:30:22]  from from them uh and i really only need one of them so it doesn't make sense to send all of them so maybe i'll just take these lines and i'll actually
[01:30:30]  move them up and i'll extract them uh i'll put them here so this is something i can do ahead of time this is very smart because this is what islands kind of
[01:30:40]  do because you see you see what you've done here you've reduced the amount of data you need to serialize if you only need to send one of the cats instead
[01:30:46]  of all of the cats right you basically only need this is closure extraction in a sense you basically only in a in a funny way this is like manual closure extraction you only need
[01:30:57]  the data that that is sent here to be serialized the other data does not need to be serialized it's only if there is code that suggested that you could switch cats
[01:31:09]  but instantly he's kind of solving the double data problem here on this computer and i can pass the cat name instead through json and so now if i refresh the page
[01:31:20]  and i press reveal you know it still works but if i look at the the data inlined on the page uh it is only data for this uh one single thing oh
[01:31:30]  this looks like some code i wrote in like 2003 uh with like php and you know interpolating strings and just like passing things uh kind of like a mad scientist um but
[01:31:46]  if you're kind of functionally brain like maybe you'll think of this as oh this is kind of like partial application over the network there's this concept of applying a
[01:31:57]  function in like several steps and this is kind of like this except that there's also like a network step in between uh which is kind of interesting but i think the main way
[01:32:07]  i kind of look at this is that we've removed all the boundaries that are inessential to the problem that sentence kills me oh it's so good it's the the magic
[01:32:18]  here i say this a lot and i'm going to keep harping on it until it clicks for everybody react broke down the idea that model view controller was the only way
[01:32:28]  to have like react challenged the idea that model view controller was the right way to yeah yeah no i i this this is this is where we get a lot of our dx wins
[01:32:38]  right theo's going on here is that like reacts that these separations weren't necessary um co-locate them and they're trying to co-locate them again
[01:32:48]  obviously when he jumps we're gonna jump a little bit further now because um if i'm right there's not as much left on this part of the example and then i didn
[01:33:00] 't jump too far did i okay yeah okay let's get let's get back to here um where are we this is like relay was the first step in it you know
[01:33:13]  like a function into other functions and like give them names that correspond to product features opponent okay i'm trying to get to where call this one uh cat name generator because that's
[01:33:26]  what it does uh it's gonna have out there okay so he he's he's starting to kind of rewrite this now in react and modern react uh and i'm gonna
[01:33:34]  need to give this thing a name so and he's showing how the users client clear i don't actually care that much about it actually this is where i actually like jumping way
[01:33:42]  ahead because theo at the stream is like okay is this not sticky enough for you guys and he jumped into building his own kind of you're gonna bleed all that for now just
[01:33:53]  right auto completing because what we need is cat name string so now we need to return something here button hi and the app itself doesn't matter all that much you specifically want
[01:34:09]  the more reality set show i'm going to change this to revealed set or that was i want to get to the punchline because he's past cat name as a prop
[01:34:19]  okay this is instead of fetching it from an api or embedding it manually in the script tag or doing all the other things that might get cat name to this component
[01:34:27]  instead we just pass it as a prop the thing passing it happens to be a component that is running on the server but that is so much easier than fetching from an ap
[01:34:35] i hoping the data comes back in the right format making these things reusable all of that sucks let's just make sure it works before we go any further though try to make
[01:34:44]  this button a little more of a button all right styles will kill wind let's keep on going right then we return so there's some space these is effectively its own endpoint getting
[01:34:55]  its own data super super cool i hope that by now these patterns are starting to click and the magic of server components are starting to be a little bit more visible here it's
[01:35:06]  all composable we can just make multiple of these ready to see where things get real crazy though what if we want to pass children what if we want to render an entirely
[01:35:22]  different component when this changes instead so instead of just cat name string we can pass it children react dot react node so now this is expecting children so we'll give it a
[01:35:41]  he goes a little bit further to actually change it to where send a javascript down you don't have to pass data you can pass markup or even pass another component
[01:35:52]  if i wrap this with like react confetti then each one of these would send a javascript down if i wanted to make this a counter component too which is everyone's
[01:36:00]  favorite let's make a quick counter counter dot tsx use client export function counter yada yada typical counter i just let autocomplete do its thing it seems to
[01:36:12]  have done a good job if the reveal is instead for a counter which i can just change the child here to be counter now when i click reveal i get the counter instead
[01:36:27]  right so what and i don't know if it's gonna be as big of a thing for me or for you guys as it was for me when i was watching this
[01:36:38]  but i realized this this for me when i was watching the stream and kind of getting kind of clicking on this how cool is that that i am this is what server components do
[01:36:49]  okay like the fact that and if you understand that they are sending this markup and if this is a dynamic decision at the choice at the point on the server they can actually
[01:37:02]  decide like choose like the thing is if the decision on the server can be changed in the client then all possible paths are rendered ahead of time so this is what i was
[01:37:12]  talking about the choice where the hoisting is if the decision is made on the server that cannot be changed on on the client then we don't have to send all the
[01:37:22]  different uh avenues only the one that is actually rendered and that piece is very different than a client-side app however most people are not going to bother worrying about that because
[01:37:37]  this whole thing we were talking about composition this whole you know put this in that and that all this rules that we're like wow this is so powerful if if someone just looked
[01:37:46]  at this code and grabbed this one read file here and hoisted it up here and said use server every other piece of this still is just as composable the difference is you
[01:38:02]  end up with more javascript code in the client the template is sent you know for all the different permutations in the javascript um right because it's
[01:38:12]  like that second case where the decisions in the client decision to the client you have to actually send all the possible paths the template might be smaller than the output html but
[01:38:22]  you're always taking that cost up front where server components you don't have to however all the composition properties have been the same so i i started getting it i was like
[01:38:34]  this is a brilliant way to show people how to do server components in a sense like like how the capabilities are mechanically that hoisting thing was brilliant but for a lot
[01:38:49]  of people and i think that's the one of those questions the hoisting can also happen right here you can just go hoist onto the server and then the whole
[01:39:00]  rest of it doesn't necessarily have the benefits of server components but you don't have to change any other way of what you're thinking so you're sandwiched between like
[01:39:12]  the uh this is just php this is simple who cares and the classic react devs who are going why can't i just pull this out why can't this just be
[01:39:24]  a loader like like remix why am i why am i worried about this interweaving of composition between client and server and the fact that works when composition always just works
[01:39:37]  in the client right for me that was the ding point because i was watching this and and if i was really pessimistic i could convince myself that i i don't care about
[01:39:50]  any of this and that's that's that's why people keep on fighting it because as cool as it is mechanically the difference and people disagree with me the difference between
[01:40:07]  this await here and this await pulled up here like there's a lot of consequences that come between that switch but it's hard for people to actually tell the difference and if one
[01:40:23]  tells them that they can use react the way that they've always done it and the other one says they have to like completely change their mentality that's a tougher order i know
[01:40:31]  this is a weird take but this is this it was i had to get through dan's talk and then through theo like explaining all the benefits based on the talk for me
[01:40:40]  to understand why even after this people just might or people who might just just not see it right like it's why you know the tanners you know and why remix router or
[01:40:54]  react router or whatever it is these days is like when people are getting stoked about it i actually think and we'll talk about react router i actually am not i don't
[01:41:02]  i'm not actually that jelled about like it i i it's it's a nice like i i think remix is taking it the right direction i just don't care about
[01:41:14]  doing server components that way i feel like it misses the point but i understand from this why it makes a lot of sense because like i you know the fact that this returns
[01:41:25]  the cats or it returns maybe some markup with the cats is all that most people see on their thing because they're used to that composition pattern already like you know in
[01:41:36]  a way this is why i was able to settle with solid start and single flight mutations where it was because i was just like we just hoisted up into a used server and
[01:41:47]  then all the other stuff isn't what you're worried about anymore right i don't think it's as efficient theoretical zone but i don't have to fight with theoretical react
[01:41:58]  efficiency i have to fight with actual react efficiency and that's the battle i feel comfortable with right but like this is at least for the time being but this is this is this
[01:42:10]  is where the challenge comes in anyway i like this type well i mean it's i'm i don't know i don't know if i like this like it's interesting
[01:42:28]  though right well the thing is we're constantly just moving the code but like trying to find the balance point between moving the stuff between the code and moving it and the data and
[01:42:38]  figuring out what's the best way to optimize our bandwidth and load execution stuff like and we we're coming up with nicer more controlled ways to move stuff between the code and
[01:42:47]  the data and finding what that sweet spot is because like once you use server components in the basic sense and you start getting advanced and this is so funny because i remember like ast
[01:42:57] ro guys pointing at me that no one used astro the way i used astro because i used astro like server phones i was like as granular as possible tried to minimize
[01:43:04]  serialization most people are just like here's my old app as an island you know like once you go deep down the side that control um is very powerful if you can
[01:43:17]  save serialization you know but the question is like do react server components actually save serialization um they don't because the vdom diff that they send across so you're actually
[01:43:27]  not winning for all that effort which is really frustrating from my perspective but i like it it it it it's it's like it's it's one of those things where
[01:43:39]  it's like there's so much potential here um so but it's not even clear to me completely like because people are struggling with the uh the abstraction it's not clear to
[01:43:55]  me necessarily that's the right one you hope people over time get used to it and like it i'm pretty i was pretty bullish on this very early on especially um but
[01:44:05]  like there are different ways and we and it feels like the community in general is taking a lot of time just understanding what kind of control they want or where they get it and
[01:44:19]  the differences between it because for a lot of people hoisting that up is infinitely simpler for them from where they're standing today and it's hard to argue with them
[01:44:32]  when the performance type aspects might not have impact them like at all anyway do you guys want me to talk about i was preparing for a conference talk i was going to drop
[01:45:02]  the bomb at the conference talk but i actually was working on quick a bit last week and i i i'm done with this part here but it is related to this i i
[01:45:12]  was doing some benchmarking you know i i'll you guys will get a little sneak peek of of a little bit um let me pull some of this off screen so it
[01:45:25] 's not i i i i mean it's no sneak peek to you guys who watch my stream all the time but you you all know how i uh use hacker news demos right
[01:45:36]  oh right i gotta share my screen not my tab um let me give me two seconds to to do this um present stop screen present share screen entire screen okay all right i
[01:45:58] 've i've done i i i've done this hacker news death page in a bunch of frameworks you guys can all guess which frameworks are which on this page some of them might
[01:46:08]  surprise you hey brandon uh yeah we we did talk about it i think most we're going to talk a lot about react probably for the next little bit right i
[01:46:21]  i've done this on stream everyone who's been with me can kind of guess first good piece of news is most of the frameworks have creeped above 50. um there's
[01:46:31]  um i'm not going to shame the ones that are in the 40s still although everyone was in the 40s you know a couple months ago but i'll give you a
[01:46:38]  hint solid's the last one down here at 66 because it was always slightly faster than the than the other ones and next is actually 59 here next pages directory for some reason
[01:46:52]  it's very good at lighthouse there's something they do in the way that it flushes they always get the first paints faster these two are they are the pair that are always
[01:47:03]  identical to each other they're they're they're buddies in arms um remix and svelte kit now i we built the page in astro we all know what ast
[01:47:15] ro looks like right you know fred fred i still remember that time fred jumped out of his seat right right thank you brandon i appreciate it was a lot of
[01:47:30]  work i i know you do a lot of work with analog as well it's just a lot right and this is astro solid to be fair i mean if you if
[01:47:38]  you're going to go with astro you might as well you know take it all the way through right and later on i do it with quick and quick scores i mean there
[01:47:52] 's variation but quick score is pretty respectably uh generally speaking i did the same one with react server components right 64. upper end better than pages similar to solid actually but
[01:48:09]  something occurred to me in my hacker news demo that i did for quick it's an mpa like astro so they can make a bunch of assumptions do you know what happens
[01:48:18]  when i put a client side router on quick oh what do you know it scores the same as react server components because the serialization had to come back and i i will
[01:48:28]  explain this more in my talk but essentially it could tree shake out the data because it knew the state would never change but once i added a client side router it doesn't have
[01:48:38]  use client new server doesn't have that break the decision points are now very high up in the tree because the router is really high up in the tree because you have to switch
[01:48:47]  the routes so instantly all that data serialization comes back so suddenly it's just an efficient hydration solution and in this test you know with a thousand comments the code size and
[01:49:01]  they're all comments the same kind of the code size isn't going to kill you the execution cost you know varies this was a 63 could be 64. i'm going to
[01:49:11]  assume that next and quick are the same and solid start as well at 66 they're all basically the same speed because the code cost size is not going to kill you on
[01:49:19]  a freaking hacker news demo execution well hydrating 1400 comments seems like a lot but minimal this is purely serialization the difference between needing the data and not needing the data and islands
[01:49:36]  can trim it completely mpas with quick can trim it completely but react server components or basically anything with client side routing has trouble technically solids islands router was a 90 as well
[01:49:48]  and it had client side routing but that solution is flawed just like view transition api in astro like it doesn't it doesn't work for real apps in terms of actually
[01:49:58]  persistent state i i and lazy hydration i think i explained you have to change your approach slightly um i talked about that in the talk but what i'm but like generally speaking
[01:50:09]  there is a zone where you could probably solve the serialization problem but react server components are not it the quicks model isn't defined boundaries enough to actually solve it maybe they
[01:50:18]  need containers maybe they need a different api maybe they need a new router they're working on but it doesn't exist today these are solvable problems i just want to
[01:50:25]  point out that client side routing with partial hydration no solution today exists to at least my satisfaction and the and in the end you end up with stuff that basically when the bottleneck
[01:50:39]  is on data or serialization which is true for a lot of static low interactive sites the kind you'd actually be choosing these tools for the changes are the differences are probably going
[01:50:49]  to be pretty negligible there we go that's what i have to say about it today how uh hey shy speak of the devil talking about it quick yeah but it's
[01:51:02]  not that it this is a fundamental architectural problem like like it's not like this is you need to have clear boundaries if you want to solve the serialization problem right like that
[01:51:18]  when it comes to client-side routing funnily enough wiz is not too concerned with that because they're mpas i think like you know what i mean like generally
[01:51:30]  speaking the types of apps that a lot of people gone for uh quick for are highly interactive but very important for loading but aren't maybe they don't care about the persistent stuff
[01:51:42]  they're not going to hit the same kind of zone yes but and i i actually prefix this a little earlier in the talk about this the this is in general people will
[01:51:59]  build towards the benchmarks or like this and then you end up not proving anything but like this is a very quick way to to measure the cost of bandwidth or uh of serialization
[01:52:11]  i'm not imagining this you're right is it important data serialization well it depends but i talked to you know the whiz people i talked to the guys in you
[01:52:21]  know at google high on the performance side i've talked to people at ebay about this serialization is an important problem it is one of the biggest issues this again about that
[01:52:29]  balance between moving the code between javascript and data right static stuff that can be cached and things are not there is a balance here and this is yeah this is
[01:52:41]  just it was an interesting kind of you know tangent right like i just wanted to kind of just thrown it out there okay um it's fine i i'm gonna have a talk
[01:52:52]  about all about the different hydration techniques uh when i get back to uh what at react summit this year but i just kind of wanted to to put that out there that this
[01:53:09]  is not a solved problem by any means are you guys still trying to argue with theo in the chat uh okay well yeah let's let's keep on let's keep on
[01:53:41]  going here um i i don't know if i'm trying to remember if i have more to say about react server components before we talk about the compiler um let me see here
[01:53:58]  yeah i i yeah react router b7 was that actually released anywhere or i think i have to actually go to the react comp talk react comp 2024 okay um not day two
[01:54:11]  day one i love brian florence does always get the prime react on placements you know or like the prime react conference placements uh i only want to i
[01:54:29]  don't want to watch this whole talk i want i want to get to the the reveal moment okay let's uh let's uh let's let's share the proper screen
[01:54:56]  with audio so we can get here present share screen there share see ryan florence um it's just moving to a different route so what's different that was dropped from
[01:55:12]  about a 700 kilobyte and so i don't need this content anymore this is a funny function this has nothing to do with let's see if i can actually find
[01:55:20]  what i'm looking for really similar um or sorry no the next one is the same as this whatever uh all right so this is this is a single page app you can see
[01:55:28]  we get a little like loading state up there like loading a single page app uh if i go into my v config in react router v7 i can say ssr true
[01:55:38]  make that change and then i can come back to my thing here and i can say instead of a client loader let's do a loader all right and you're
[01:55:47]  not going to believe me so i have to prove it so i'm going to disable javascript and i'm going to reload this thing and it rendered the heck yeah i
[01:55:56]  i like this demo because i've been giving this demo for a couple years you except we don't change anything on the loader side you literally just go into the config and
[01:56:04]  change ssr true false but i this is powerful but it's not where i want to get to i he's got to go one step further pre-render so
[01:56:16]  he's trying to show all the features i just want to get there he's right everything is the router one day like you know what this bit of ui this list of
[01:56:23]  products there these top products we want to move that rendering to the server with rsc so how do you move rendering to the server in react router v7 well you select
[01:56:38]  your code that you want to move to the server and then you move it to the server and then you come down here and you look at this products and you're like
[01:56:53]  what is what what is that well it's i guess it's some stuff that i can render oh yeah like i told you we're uh i'm running on an experimental react
[01:57:06]  router and a beta of react so i got to restart this thing oh my goodness look at this i mean this makes a fun demo the thing is do you this what's
[01:57:27]  what's happening in this example here the div the header maybe the nav bar you know or whatever are all client components they're all stuff you're sending the javascript
[01:57:49]  to the client that you don't actually need to because these are actually all static this is these are the parts that you get the most benefit from using rscs for and
[01:58:00]  they're sitting inside the client components when i saw this api i was like so i i asked jacob i'm like so i can put client components in here too
[01:58:11]  right so can i just are you going to tell me that in the future i'll start my app like this and then i'll move the stuff up and then at a
[01:58:18]  certain point i'm just going to all my files are just going to be export async function loader and that will be my entry point i just won't have default components
[01:58:25]  anymore because literally in every case i can possibly think of i want this and the header to be server components not client components i don't know i i i'm not sure
[01:58:40]  if you can use client and import them in i i don't have ryan florence here like theo did the other day i can't remember what his answer was i
[01:58:48]  i'd hope so because otherwise you'd end up with lakes nox server components actually work kind of like this but it's also kind of like who cares like you just i
[01:58:57]  mean i guess it's the unified ui aspect but on the other hand it's kind of like you're you're just sending a larger payload right probably i mean maybe
[01:59:09]  you don't need to send all the data but if you were smart about what data you sent yeah i mean it's interesting you're you're moving the code from the js
[01:59:22]  to the data serialization like that like that's what this move is right it's the same hoisting that we've been talking about all stream it's just a
[01:59:34]  rc which means so i should be able to import client components and stick them in here which if that's the case then yeah i think i think this is a good mic
[01:59:45]  i think this is smart from a migration standpoint right because you go client loader to loader to every endpoint being a loader instead of being a a default component you
[01:59:58]  guys still what are you guys arguing about are you you guys aren't talking uh i see a promise all and i've initially thought about how blocking rscs are but
[02:00:20]  that's not what you guys are talking about are you no i don't even know if i want to know you must be what you must if there's 20 computations that
[02:00:32] 's going to be yeah yeah i don't was it pre-fetching i just used the naked link component to be fair shy if you want i can i can
[02:00:50]  share the demo it's quick uh quick hn spa pages dev and then the actual github for it is probably under my profile somewhere here as i said i think
[02:01:06]  this is actually just fundamental to i mean maybe the score isn't maybe we can look more at the score but i think the architecturally like i saw the serialization come back
[02:01:16]  which is what i would expect quick because i i picked something specifically um i picked something specifically that was expensive on serialization anyways uh let's yeah this is a good migration
[02:01:42]  story but i feel like it buries the lead a little bit but i understand like if this was what it takes for people to get there i think i would be pretty happy
[02:01:51]  about this from the react perspective as well because then it'd be like okay people are adopting rcs even though it's kind kind of like upside down um so yeah
[02:02:21]  i've i've wondered about this i mean i i get that but there are i guess it depends on your caching approach if you want to cache closer to the browser there
[02:02:31]  are benefits to having separate requests because then you can cache them independently this has been actually one of my biggest um concerns with this because it'd be very easily for me easy me
[02:02:43]  to make all our u server calls batch on future navigations like the the reason i do it on the mutation part for single flight mutations is because like everyone hits that right
[02:02:55]  like you if you do a mutation on a page and the next thing is like redirect like everybody hits that waterfall i wanted to get rid of it but if you're forward navigating
[02:03:04]  and you do a bunch of parallel requests at the same time or and or maybe changing a query url or some something minor or small uh even in these cases where you
[02:03:13]  just just just like slight navigation maybe changing one route section or you know one piece of it um i've i've struggled with deciding whether it's better to send them all as
[02:03:25]  a single request or or not um because sometimes you don't need all to make all the requests first of all i mean that's the obvious one to me um and sometimes
[02:03:40]  you they can be cached independently and have their own rules for data fetching so like i'm actually not convinced necessarily on highly interactive or apps that this is actually true but
[02:03:56]  i'm i'd be interesting to talk about at some point like generally yes because there's more points of failure right as long as your single request is streaming you're not
[02:04:06]  going to get bottlenecked by it right so one classic problem putting everything on single request is then you're you know the the everything is as slow as the slowest thing but
[02:04:15]  if you're streaming back your response then you don't have this problem so i like i'm cool with that it's just more thinking like this is also a you know a
[02:04:23]  place where i wasn't sure if i can make that decision uh it was something came up like dan even off was even kind of pushed into it i was like yeah i
[02:04:32]  mean i could definitely go and i go start right now and make all the server functions uh microtask batch and automatically strip back through and ta-da you know but do
[02:04:42]  i actually want to do that i'm not actually sure yeah yeah streaming is is definitely uh the very important there it just this is the kind of things that i've been
[02:05:01]  thinking about all right it's one of the reasons why i haven't actually like our our single flight mutations stream back the response i could have all the separate requests stream back
[02:05:11]  the responses too which we're streaming data not rcs but who cares right if the code's already in the client it can render it i mean this is one of those the
[02:05:20]  data versus html thing is an interesting one i forget if i told everyone this at one point solid streaming didn't stream outdoor streaming to do html only to data
[02:05:29]  so we'd render the static shell really quick on this on the server and then the server was done except for sending back the data over the wire because a lot simpler i didn
[02:05:38] 't have to worry about handling async resuming and suspense and stuff on the server as much there you just hit a suspense boundary and you're like we're done guys
[02:05:46]  and it worked well not done because you have to fetch through but we didn't have to worry about sending it back or doing any kind of like stitching it in on the server
[02:05:55]  timing and all the stuff and the funniest thing is on fast connections doing the data approach was actually way faster because the client getting those cache javascript from the cbn
[02:06:08]  so the page would come back with the shell pretty quick synchronous renders are always pretty quick and then it would get it would start the javascript up at which point you
[02:06:20]  know on that same request it's still streaming back the data so it starts to going to to do it and the data is still waiting for it and it starts rendering the
[02:06:26]  page it starts rendering the suspense on the client and it starts rendering the like html for the page that would go there and of course because solid's non-blocking
[02:06:33]  it keeps on rendering everything except for those like holes where it needs the data and then as the data comes in it would fill those holes and then like swap them into view but
[02:06:43]  what's interesting is i found because solid was able to start rendering the page under the suspense boundary before the server sent it back and because we were serializing less data over
[02:06:53]  the wire compared to html later it was slightly faster to not serialize the the html because the client actually got ahead of it but the problem was that i
[02:07:04]  then i started around the time i started working ebay uh you know i i put on a slow network request and then yeah it was very noticeable how much faster sending the h
[02:07:15] tml is because in that scenario when you have slow networks slow devices load cpu the html can come back and swap into place and be visible with out of
[02:07:26]  order streaming before solid has even loaded or before even the like hydration has happened right in my approach where i was using data hydration is what put stuff into place whereas out of order
[02:07:39]  streaming like we have today and in most frameworks that stuff content comes into place irrespective to the state of where the framework is it could it could have already started hyd
[02:07:49] rating it could have not hydrated it comes in as fast as it possibly can but the bandwidth is more so on a faster connection it was actually worse yeah just interesting right um again
[02:08:01]  that's why i'm so focused on the the the the data versus js divide here okay i mean do you know actually here's a crazy one for you guys let's
[02:08:18]  we were talking about ppr earlier let's think about this for a second there's there's there's an ex what what if what if what if you didn't use an
[02:08:27]  edge function for ppr you use the client i mean you guys are going to love this one right right what if you just serve the static shell from the cdn
[02:08:38]  immediately and then when the client loads it directly talks to the back end and gets and gets the rest of the streaming content and inserts them into place it's not on a
[02:08:53]  single request this way but the the the cache ability you know like there's you basically just straight up like the the i'm i guess i'm talking poor man solutions where you
[02:09:05]  don't have like specified infrastructure that can cdn and batch a stream into it automatically without like firing up a worker if you just had a cdn you could just
[02:09:13]  send back the shells and then have the client to initiate initiate that now you're not processing proxying through the edge server anymore it would look you know because you see
[02:09:23]  all the suspense boundary fallbacks and everything it would look almost identical the difference is the data request would start when the client got it rather than when the edge function started rendering so
[02:09:37]  i it would probably be slower but it just just see in my mind i think i mean we have to we'd have to benchmark this but in my mind i think the
[02:09:46]  the extra hot or the weight for the javascript to getting to the client in a lot of cases um would be slower than just booting up the edge worker and streaming
[02:09:56]  through like typical out of order streaming but on a fast network like i was talking about where the js and the html is cached and static and it comes right
[02:10:06]  in and you just start that request right away that would probably that could be faster i don't know maybe worth measuring maybe it depends on the use case but just just kind of
[02:10:19]  putting it putting it out there that it's possible that you know you know there's an avenue there right like why not i there's a lot of performance care most of
[02:10:39]  my work on the framework side at ebay was around resumability um that's we have a name for it now thanks to misco and quick but we were basically working
[02:10:48]  on resumable partial hydrated solutions uh marco6's resumability was compiler analyzed based based on a language so think of it kind of like i don't even know
[02:11:01]  how to explain it i mean it has weird syntax for people but it's like a signals compiler that does perfect resumability essentially like without like denoting the boundaries so
[02:11:17]  it's it's just consistent i it's it's it's gonna be cool but i'm not allowed to talk about it anymore i told myself that i wasn't going to
[02:11:27]  talk about it until they released something uh guys are uh sorry there's been so much arguing in the chat i don't even know what to do with it all right
[02:12:07]  anyways considering the new techniques of rendering hydrogen ppr version blah blah blah blah is there any of this that is easy implement with a video easier to implement with a vdom than
[02:12:19]  with a signals based press yeah react server components server components are easier with a vdom than they are with um because they're it's a diff based approach um whereas signals
[02:12:33]  is much easier like it's almost necessary for resumability for true resumability um i yeah i yeah i don't know if i have anything else to say the
[02:12:52]  fact that react router is the thing and it's just a v plug-in makes a ton of sense as i said me and ryan florence are completely aligned on
[02:13:00]  that most of solid start was is actually in solid router you know like we have those features like the server functions and stuff you know which they are getting from react core but
[02:13:10]  like other than that solid start is mostly about the router so even though the router doesn't ship with it um this is why i'm confident with the 1.0 i know
[02:13:19]  this is going to scare people a little bit and we'll because the router doesn't the router doesn't ship with solid start the positive is we have to make sure that
[02:13:29]  the interact between the the solid start any future version of the router um works but it means so that you can keep on using whatever version of the broader but it means that the
[02:13:39]  router has room to change without solid start necessarily changing we just update templates you know you can have templates have the old router versus the new router or whatever you know i i
[02:13:51] 'm pretty happy with the router is and we already made the pretty big changes uh recently um but i my point is that most of what makes solid start you know when people build
[02:14:01]  apps feel like solid start is actually not solid start so that's a very interesting kind of place to be in and why i'm more confident about 1.0 in general because
[02:14:13]  we've got a lot of flexibility there okay let's keep on going um i guess we're at react compiler time you guys want to talk react compiler is that something people
[02:14:28]  care about well quick's been exploring into this zone but one of the the thing is quick started it was a bdom approach to resumability they still re-rendered
[02:14:45]  components like they had they have to render components when it resumed and if you because quick doesn't have a fine grained renderer like solid they have some optimizations
[02:14:57]  now which is really cool but they don't have like view vapor or svelte 5 or solids fine-grained renderer if you combine that with resumability you
[02:15:07]  like things get even crazier is the way to put it because even less code has to rerun like the quick has that optimization and i guess you could say wiz does
[02:15:20]  from a manual optimization standpoint because they don't they're not like a lot of their stuff is manual you know with a js controller but like historically i think was it's done
[02:15:28]  a lot of like almost inner html to solve things picture if you had that fine-grained level of reactivity of like at the node level we were we
[02:15:38]  were making like toy demos like to do mvc examples um where this is usually unheard of in javascript frameworks where the total bundle size it makes sense got smaller
[02:15:50]  when we added server rendering like most frameworks when you add when you have a client render framework and you have a something that's completely interactive like a to do mvc
[02:16:01]  adding adding uh server rendering to it actually makes it larger um it was actually shrinking stuff because the tree shaking could you know be that effective you know across the board anyways another day
[02:16:18]  all right okay so everyone wants to know what i think about uh react forget and the truth of the matter is i um let me share my screen i didn't really want
[02:16:36]  to say much about react forget right because honestly the team has done an amazing job the goal is incredibly ambitious when when everybody you know comes in and they're like doing saying this
[02:16:50]  stuff like it was kind of like you know let's just see how it plays out i think i think there's a lot of uh you know uh there's a lot
[02:16:59]  of you know interesting uh yeah oh i didn't talk about this that's fine we'll get to it later let's just talk react forget you know there's a there's
[02:17:14]  a lot of like benefit to dx like we've seen this with svelte think of how much people love svelte 3 svelte 4. the funny thing
[02:17:29]  is if you go on go on reddit there's like a contingent of people who absolutely hate svelte 5 or like are worried about it and they keep on comparing
[02:17:38]  it to to react hooks api and stuff and like clearly they're not really on the same page but i get it svelte is kind of departing from that
[02:17:48]  and react is kind of going to where svelte 3 was you know so like it's an interesting choice and one that i didn't really care to make much of a
[02:17:58]  comment about because you know it has profound implications right reacts now like a compiler you know people every framework's a compiler jsx compiler but people don't realize just how much
[02:18:13]  react got for free over the years you know because typescript decides oh jsx native you know we've got our own transform dino just works you know like it's no
[02:18:23]  build and i'm like it's like no you're building the jsx but reacts kind of gotten away for free in these kind of zones all the tooling just works for it
[02:18:34]  you know you don't have to worry about anything you know all the ids everything's built for react and now there is a compiler right like there's no denying this
[02:18:46]  compiler and it's kind of incredible but i it's not something that i personally would have wanted from react i don't need a compiler for my react code i don't think
[02:19:03]  i don't i never cared so when someone's like oh we got the compiler you know makes writing stuff easier blah blah blah i'd be like yeah yeah i'd keep
[02:19:12]  the control right you know someone can go write a compiler for solid that uh these undestructures props but i'm not going to use it because i don't need to and
[02:19:23]  it's another thing you know but then the silly dialogue started popping up right and i don't i don't know where it started from maybe it had to do a bit
[02:19:38]  with like q a things maybe it's people are pestering the react team too much about signals i i don't know maybe it's the choice of language of in react comp
[02:19:50]  they they called it fine-grained rendering and you know i was like okay whatever i ignored it for a while you know a couple days at least i feel like it's
[02:20:02]  been a week or so when was it like last thursday is like the 16th or something was announced but it just kept on going just kept on kept on kept on
[02:20:10]  going and it's and it and it was kind of like why are people so insistence in putting signals in react and why is the react team trying to position like they
[02:20:23]  have a similar solution one question i think is worth talking about is whether the compiler is necessary for react to keep the direction they have well i mean i guess maybe it's like
[02:20:42]  this is the ultimate goal what's the best way to lock people into a technology but create a new language right like maybe that's reacts exit strategy they're going to create
[02:20:56]  the the react language and then like i i don't i don't know it's i think the answer is mostly yes um compilers necessary i i hoped it wasn
[02:21:11] 't necessary i like old react and maybe just because i'm old old people like old things i but like if the answer is it's necessary then like i don't know
[02:21:28]  because i like check yourself before you got to wreck yourself you know like i don't know i don't know if you're going to be able to do it yeah i
[02:21:47]  don't know if you're going to be able to do it yeah i mean yeah let me let me grab that dan had some choice some choice stuff oh you are you
[02:22:10]  are you just sharing this tweet again well but that's the thing it i i agree with them it's you know yeah i mean yeah i mean sorry i thought you're
[02:22:37]  going to share some of the actual let me see if i can grab my stuff from my bookmarks right everyone has something to chime in on this topic i i admit when
[02:22:59]  they put the fine-grained thing i was like i uh this is a bit of a stretch adi azmani put a table out uh and i probably bookmarked
[02:23:09]  it here here it is how to navigate javascript frameworks in 2024 and obviously next js is the only one that has everything but they only get to have everything because they have
[02:23:19]  fine-grained reactivity right um right and like these charts are so hard because like does knox have server components they have a feature called server components are they actual
[02:23:33]  server components by my definition to my knowledge the answer is that is actually no but you know like it's it's good to be everything in the chart right so like you
[02:23:53]  know islands server components to me it would be a lot safer to just put these two together and just call server components partial hydration kind of and then just be like okay a lot
[02:24:04]  of solutions have some sort of partial hydration solution um but yeah i i saw this and i was just like i didn't i it's only after that and then i saw the
[02:24:16]  react comp thing where they said fine-grained react rendering or fine-grained reactivity or whatever whatever whatever the thing was and i was just like i was like
[02:24:25]  okay this is very odd to me positioning wise because like you could say that this is growth and awareness from the react side but it's also kind of like it's like when
[02:24:41]  svelte kit came in and and dubbed uh transitional apps and all the people who are working on these partial hydrated solutions like astro were just like what the hell you
[02:24:55]  know i i get you want to side with us and compared to the in the big picture i guess you're close enough but you've been working in the space for a while
[02:25:03]  you know working on these specific solutions that are you know defined as fine-grained reactivity and then the biggest player comes in and goes like you know you know we
[02:25:13] 're fine-grained reactivity it's like no you're not you know so people have that impulse even before we we want to talk about the technical bits which we will
[02:25:21]  talk about but like it's it's it's kind of hard there you know it's lonely at the top so to speak um yeah fine-grained re-rend
[02:25:35] ering yeah i mean i know people in our community have been championing champion uh championing this term i think dave might have coined this originally my take is fine is
[02:25:53]  fine for react compiler if we define it relative to the framework's rendering model okay i will see if i can find that link yeah i i get what you're trying to
[02:26:15]  say the problem is when you have a term and it was the differentiating factor for the frameworks and the thing that comes in that they're trying to differentiate come from tries to
[02:26:28]  use the same term and doesn't actually accomplish exactly the same thing it's it's it's it's it's it's it's challenging i understand they're just trying
[02:26:37]  to say that they have something that's kind of equivalent but it's like yeah the funniest thing about this one specifically fine-grained reactivity is fine-grained had
[02:26:50]  been termed that people have used for years and years and years and it was a thing i actually think i have the first published article uh that used the term fine-gra
[02:27:00] ined reactivity um in in a in a published article i know this is weird we actually searched i forget who it was we're searching for the term on google trying to
[02:27:08]  find the earliest mention of the term fine-grained reactivity and it was my from my medium articles back in 2018. um but it's like kind of close to this
[02:27:20]  one um so to speak i might sense i think this is more a struggle for developing mindshare than it is struggle over technology react has to address signals and fine-gra
[02:27:29] ined rendering if they aren't doing signals they need an alternative the whole community yeah which speaks to the power of a lot of these ideas it just you know it's it
[02:27:40] 's tricky um right um and yeah i mean people there's been a lot of conversation going on here i like frameworks that are fast without a compiler so many people read that
[02:27:58]  comment wrong fyi he's saying that he likes frameworks that are fast without the compiler not that he wants fast buildless frameworks i think i think oh why is why why
[02:28:17]  is this guy so smart i always agree with almost everything he says everybody seems to zero on and on on without a compiler the statement was are fast without a compiler i didn't
[02:28:28]  read this as criticism compilers in general but approaches which try to address performance issues only after the horse is already bolted from the barn this this comment needs more love
[02:28:43]  anyways right that's what i'm saying i was surprised we couldn't actually find published works i we i was even trying to like go through academic papers to see if i
[02:29:01]  could find the like the the combination like i was going through like elm signals things from 2012 and trying to find some old frp papers like i couldn't find yeah
[02:29:22]  yeah i mean that that's a and you know what that's that's that's that's good but it doesn't really matter it just this has been a term for us
[02:29:39]  for a while and you know there's been a lot of conversation i hate the way twitter opens stuff here is this wow this is just a long okay so dan abram
[02:29:54] off makes the comment down here somewhere that i already lost go back and forward in order to do fine green re-rendering the the library needs to be aware of i like
[02:30:05]  this fine green re-rendering the library is aware of data flow there are a few ways to do this one way is to wrap values and setters like view mobx
[02:30:10]  so you're not dealing with plain values anymore but we're playing about as a react um two another way is just all those splitting the code into two phases non-re
[02:30:19] active construction and reactive template but then you have to use yeah you can't use early returns there's something they said where they're talking about they they describe authoring stuff in
[02:30:29]  solid as almost metaprogramming where you're describing the program rather than writing the program and it's i actually like that comparison because react is very immediate almost like like
[02:30:43]  imperative it's like when this happens this will be running you're describing it as it's running and i agree with solid you are just you're saying i'm setting a rule
[02:30:56]  and everything from now in the future will follow this rule so it's like set and forget whereas um react is like this is the like imperative logic that you're running like
[02:31:08]  this is this is like this then this then this then this and this to me it's like a shift between imperative and declarative even though react is declarative like their model
[02:31:17]  is very this is why i always say react model always felt more imperative because it's like it's very immediate whereas we we create the thing that will go the distance so
[02:31:30]  it is an interesting thing um dota flows when yeah because if statements are more analyzable to be fair we could transform that if we really wanted to but he's
[02:31:52]  showing this he's it the tricky part about analyzing code ahead of time is the same limitation that we hit when working on marco um marco actually because it knew all
[02:32:06]  the file look all the i i said i wasn't going to talk about marco 6 but it's relevant here because we knew the reactivity of we weren't sure whether
[02:32:14]  to call it signals originally or like fine-grained when we started on marco 6 because we knew the data dependencies and you didn't have to write like signal syntax it
[02:32:21]  just looks the variables we knew the reactivity the whole project is a cross file analysis we could kind of do this kind of analysis that he's talking about but literally everywhere
[02:32:31]  even cross files right and and the funny thing is we actually chose to do a runtime reactive system in the end in the implementation in the side because even if you can kind of
[02:32:45]  determine like the problem is it's like the dependency arrays in react the arrays don't change so your only choice is to over subscribe because any potential path like a compiler doesn
[02:32:58] 't know which branch you will take so it has to optimize for the case of any possible branch right um so like this is one of the limitations also with i with svel
[02:33:10] te right where with a runtime system you can have dynamic dependencies that change at runtime you think that'd be slower but a lot of optimizations that have gone in have actually
[02:33:17]  addressed that a lot of stuff uh that uh reactively does or that uh svelte 5 has done the newer reactive systems have kind of optimized on the cleanup step to not
[02:33:28]  be as wasteful for dynamic dependencies but basically the biggest thing that i actually saw as a limitation was nested reactivity from a compiler analysis standpoint is almost impossible it's
[02:33:41]  very hard to track properties on objects like to know like the granularity of change like with stores or and things we use proxies for and funnily enough that is
[02:33:53]  where the most incredible power of fine grain comes from i'll show you what i'm talking about right i know you guys are really busy you know in the chat going crazy here
[02:34:04]  like i don't care about this early return stuff obviously i had my past my demons or that ages ago if you've ever used a uh a component library that doesn't
[02:34:13]  use function components that use like templates like view or whatever angular you're like it's okay we can live with returning the a single you know a single return you know but
[02:34:27]  yeah uh yeah i there's just so much of this conversation we'll hold the my thought that i was getting to we'll get there in a minute um what do we got
[02:34:38]  here granular has different levels view three closes it gets close but vapor is where they're gonna make it yeah so you know he's he evans standing in our court backing
[02:34:48]  us on this um i'm not surprised he would write um when we got here dev what are you up to has the state changed no it's the state changes this changes yes
[02:35:00]  okay let's run some code no no no it's this element you know fine-grained reactivity you guys are just hostile eh these are fighting words uh oh man
[02:35:19]  the react file is amazing feature engineering and it's gonna solve a lot of problems while i'm running blah blah blah blah yeah it's just it's the it because this is
[02:35:33]  what it is it's a bunch of dirty checks uh can we look at acd yeah okay fine uh let me see if i can find that one i'll take anything from
[02:35:44]  andrew clark so saw some people say that rack covers our mission that use memo stacks and we put a response to react in reality we had officially smart five in mind
[02:35:57]  the whole time we're working hooks and depth arrays never would have shipped otherwise yeah okay we we always believe in compilers react started just j is for pragmatic reasons you can
[02:36:08]  start using without rewriting your existing data this is also what doesn't rely on any non-js syntax blah blah blah ruthless pregnant is in the very the extra runtime compiler
[02:36:16]  additional blocks yeah yeah yeah we're big salt fan too rather the compiler part now works on swath is simply untrue then yeah of course no i i i yeah i actually
[02:36:26]  talked about this a bit earlier i'm not i'm not surprised that they they are always had a compiler in the plans it's just like it it also for me makes react
[02:36:37]  less react but this i mean on the other hand this is very react so you know because people see this and you know it i mean i i was this graphic was shared
[02:36:56]  with me propagated change state relationships okay fine-grained reactivity failed diff check yeah the thing is if this diff check fails depends where the state comes in but like
[02:37:18]  you know a lot of times you can short circuit if no one's setting state in here which this example doesn't do it gets here and then it just forgets about the
[02:37:27]  rest of this um right so yeah this is why i'm having a hard time with a lot of the visualizations for people people because at a shallow level it's it
[02:37:40] 's fine you can see the svelte admiration like look here if we go to let's go to svelte dev right uh not rethinking reactivity let's just
[02:37:48]  well i mean that'll probably get me there but let's let's go to svelte and let's go to the ripple and let's make something that actually changes
[02:37:59]  let's go on click equals did i get my syntax right i don't even know name plus exclamation mark i probably actually have to make this a function this proper is
[02:38:16]  this name name sorry i actually have to go actually right yay okay yeah it's not fine thank you svelte for correcting my accessibility yay okay working svelte code
[02:38:38]  let's add a second piece of state let other name equals chat apparently i can't spell and let's add a second button that updates chat okay this is svelte
[02:38:57]  3 you know classic svelte and we'll call it other name and other name world chat sweet okay let's look at the js output here okay i know this is super
[02:39:15]  zoomed in for you all we have a bunch of nicely named variables for our elements in our state on create that's what c stands or create created an element we create
[02:39:27]  some text space button okay not interesting on mount we append all of these things into the dom not interesting not mounted if we we add click listeners i guess okay whatever on update if
[02:39:44]  dirty flag matches with one do this and set this data if dirty flag matches do this set this data and if we look at t1 and t5 and we've been
[02:39:57]  paying attention um t1 is this text node the name and t5 is the other name text node it's these two text nodes so they're pretty smartly here this set
[02:40:11]  data is a dom helper that directly updates the text content nodes so see people used to call this finding uh reactivity and i didn't because the this process is you set
[02:40:24]  state on the component doesn't know matter what set state calls and it calls this update function now don't get me wrong solid does group some of the level of effects and i
[02:40:31]  can show the difference in the way that we group stuff but that was an arbitrary choice that i made it's not part of the architecture we could also make every single thing
[02:40:40]  separate it's just but svelte's model is you know why because this whole thing that we're looking at this crate fragment is basically oh please be still there oh that
[02:40:54]  makes me very sad i you ever do that like swipe and actually back button oh that's fine i i don't need this for the rest of this this crate fragment here
[02:41:07]  is essentially look class components felt has class components that essentially on a niche create the stuff um through these life cycle functions my point is basically there's like a a dirty check diff
[02:41:22]  on stuff every time you run update it runs a component function that diffs the stuff and then calls the appropriate action in their case directly on the dom rather than making them
[02:41:33]  into uh uh a separate v dom representation that's then laterly diff but generally it's just uh a dirty check that's that's that's how svelte works right
[02:41:45]  is everyone following so far do we need do we need do we need a mod sorry i missed something uh yeah how do i made some people mods in the past but i
[02:42:09]  can't remember how to dev how do i make you in mod yeah okay that's what i thought you're around here you're around here enough anthony's a mod
[02:42:27]  but he's not around all the time capanello okay dev you're in thanks does does anyone else want mod privileges while we're at it okay okay okay cool i
[02:43:08] 'm family you can trust me okay um my point is we've seen this before um and in fact when we've had the marco compiler on stream it's kind of
[02:43:19]  similar to one of the coolest things about uh these approaches ah damn it i'm i am gonna do it again this makes me really sad i mean it only took me a minute
[02:43:37]  but i have more but i have more here on click the problem was i was trying to like probably just like do a scroll anyways and then uh uh um where is
[02:44:02]  i wanted to get here i should do something more structurally different this is my there's like a context that gets read from see context zero context one so like they store these
[02:44:21]  variable references and this actually helped us figuring out how to do resume ability in marco quick has a similar idea because you could serialize the data globally and then inject context
[02:44:33]  into the component and then essentially it would pick up from from basically these references from an index okay but i i wanted to show this because because of essentially like i i could show
[02:44:49]  more complicated stuff here but this is just yeah let's look at the click handler it calls uh set state i mean invalidate see like when this just gets turned into that
[02:45:04]  state index the the the new state because these return like they just they know that it returns the value they just inline it like this if i had something that was like name
[02:45:17]  equals name plus i mean i could probably show you name equals name plus i i think i mean i think they might shortcut the the the the assignment here like scared yes oh
[02:45:31]  no they actually just inline it they don't even care okay it's fine because they know it's a statement that it returns the value anyways but like essentially felt kind of
[02:45:41]  compiled into a smart react it's not too hard to figure out that other people could have for years assumed that they're become a compiler right they have a class component they
[02:45:52]  compile their assignments into set state functions and then they do this dirty check there is one key difference here this is updating specific dom nodes rather than producing a v dom but you
[02:46:08]  can see if you can see the same sort of you can see the same sort of and they're using bit flags here but you can see this kind of checking thing right let
[02:46:14] 's let's uh let's continue here for a second because one of the coolest things that react did for us is they made us a playground to check out the compiler right so
[02:46:28]  you can make this kind of hello world scenario here right and you can see what it generates and this is kind of cool right this the dollar sign is that context right so
[02:46:42]  this is like hook almost like pulling the context to is one of those assigned variables you start seeing the similarities here if zero is cached this probably means something that's like
[02:46:53]  always cached like this is completely static then yeah so here it returns the div and assigns it to position zero and then basically whenever this doesn't match it just says return
[02:47:08]  the previously rendered nodes right very simple switch right things off to get a little bit more interesting if we go const count set count equals use state and then hello world count
[02:47:37]  because now we determine whether we render this all based on if count changed or not i mean and this is our first hint that maybe this isn't quite the same it doesn't
[02:47:49]  need to be because you have a vdom but if we went other that other and we put other in here what happens if count or other changes then re-render this
[02:48:08]  section okay so basically if anything changes do all the work otherwise um return the previous cache notes right seems seems reasonable especially compared to this and this is very i mean the first
[02:48:28]  difference you can see between this and svelte i mean well let's actually do something more similar to what i did with the svelte example which is let's put
[02:48:39]  two buttons on all right and count i just want to like eliminate the possibility let's see let's see how this does it other count i don't know i haven't played
[02:48:56]  with this see this is actually cool now let's see if making it a div makes any difference i doubt it will see so it's only because it's in the same
[02:49:07]  element there seems to be uh spaces do you see this count does this element and then oh it's other let me put this here see they actually split count from others so
[02:49:26]  we are actually basically if it's within the same elements same text area they're going to group it together but if it's in a separate element they actually do split it
[02:49:34]  they go if count changes run this jsx other this jsx and our div is the container that contains both of them and if either ones of these change then we remake the
[02:49:45]  div so um you can already see that this actually is doing better than what you'd probably do typically with react right okay so i i mean one thing that is interesting is
[02:50:04]  this code does feel like it's exploded a little bit um but when i when i was thinking about this the very first thing that i thought about was i don't know
[02:50:15]  if you guys remember misko hevery wrote an article a year ago and was like reacts upcoming compiler only solves part of the problem he's he didn't look at the compiler
[02:50:30]  he didn't know what it was he just knew conceptually that it wasn't gonna he he wasn't solving the same problem right and the reason this article was written was
[02:50:43]  because he was getting very frustrated at this time this is right before signals week if you notice and this and misko and the quick community did actually um trigger signals week like the
[02:50:55]  whole big you know when all the react core members from all of history came into way in why signals were not cool and um i wrote three articles like that that week because
[02:51:07]  they're trying to promote quick talking about the power of reactivity and signals and they and they kept on getting these dismissive responses from people around react being like oh yeah the
[02:51:17]  compiler is gonna solve that and he's like no the cop the compiler doesn't solve that and they're like oh yeah compiler solves it for a while there once you know we
[02:51:25]  singles are picking up you know triggered a bit you know also by angular adopting them right that was like the first catalyst and then this kind of battle came on there there was
[02:51:38]  this kind of thing because it's every it was getting frustrating as other competitive you know framework authors you'd be like look we're doing this work it's good work and it
[02:51:51] 's producing good performance and react team can basically just dismiss all the work we're doing and people won't you know even look our way because oh they'll solve in the
[02:52:03]  future with their super compiler right and this was like no i'm not going to let them wait a year and then basically like have it failed to deliver anyways i'm going to
[02:52:14]  write an article right now to explain why this future compiler is not going to solve your problem right and he uses this example where he's talking about state separate render and mutation
[02:52:30]  where he kind of splits the buy button from the shopping cart okay and long story short was after hearing you know enough about you know this whole you know compiler thing you know
[02:52:48]  from my perspective and i i realized this is just a joke everyone pointed out to me that this meme template is when you're you know you show the house on fire but i
[02:52:58]  saw this and i was just like oh man are we trying to say that the compiler is the same as signals that that was like the line that was a step too far
[02:53:05]  for me i was like okay let's remake let's i mean it's a hypothesis but let's remake misko's example with forget and solid so i did and i did
[02:53:19]  something dumb here which is add this delay it helped the logs show properly i kind of regret doing it now because the react team took it out of context i was just trying to
[02:53:30]  show that pretend this is console log i just wanted to show that if i put a console log in each component here on this whole tree even though react does a smart thing
[02:53:42]  with in terms of re-rendering and stuff but if i put a console log in every part of the tree a lot of people assume that the compiler would change like
[02:53:53]  what gets re-rendered perhaps and if you look at this stop it if you look at this seriously is this gonna just is it info which is the annoying one just like
[02:54:10]  warnings okay there we go go away warnings okay oh i but i got rid of info just oh man i'm just okay let's try this again i am just okay okay
[02:54:36]  app abcd initial render when i click increment app abcd everything re-renders okay i now i made this fake work it wasn't to show actual work
[02:54:49]  it was to simulate synchronous work as in a large tree of components and checks i doubt react would ever get that big this is not to synchronize your application work like use
[02:55:01]  memo drive value this is to synchronize the overhead of actually just framework style work react obviously doesn't have this overhead but i'm saying is if a component has any kind of
[02:55:14]  overhead you know like where a loop that calls it from a react render cycle loading context whatever you know making the hook stayed in the right place any kind of overhead synchronous from the
[02:55:24]  framework side i just wanted to like show the renders app abcd and the reason for this is that is we could probably see this from our forget compiler why don
[02:55:37] 't we just i mean i could i could take it in the yeah i mean i didn't show you this app let me show you what it does okay you state passes
[02:55:51]  count down okay into component a component c has a click handler on it and i put this console log clicked in so that we can see the click happening that sets the count by
[02:56:03]  one a calls a component b that gets the count and component b is a div with the count in it component c passes the click handler through to component d which has the click
[02:56:13]  handler and again the whole point of this is a show like this tree where one side is the buy button and the other side is the shopping cart right with the shared state
[02:56:25]  now why does the whole tree re-render some people might be wondering they're like i thought forget was gonna save re-render work why oh man i am just this
[02:56:43]  is so okay okay why why is this re-rendering well let's see if the compiler can give us hints if count changes render component a that makes sense if count changes
[02:56:57]  render this on click well it's because set count depends on count so it also this also depends on it and then this div look at the console static and then we can
[02:57:12]  compile it all here and then here's our final output so you can understand that count changing actually affects both branches even though it's not like a live dependency um oh i
[02:57:24]  guess it is because of the closure right otherwise it would always be the same count right because it's not a getter so this is actually important part i guess of why that
[02:57:34]  model works i guess if you yeah so when i built the solid version you guys can guess the difference obviously because it calls the rendering once right and then when you press increment
[02:57:54]  nothing but click shows up again because components don't re-render now obviously the do work doesn't impact here because this only happens on initial render so like the react like it
[02:58:07]  was unfair of me to put that in there because in reality this is representing you know like it's like i was scaling this the amount of memory work which is not really fair
[02:58:22]  because if i was scaling the amount there i should probably like scale some drive thing so ignore this but my point is these components never rerun again right it doesn't matter if
[02:58:33]  if if i made a transformation between component a i made it you know count times two or something so we should double the count it still doesn't cause it to re-
[02:58:43] render again um this is just part of this the fun fine-grained reactive thing yeah if you use the callback state with react i i think it doesn't if we
[02:59:00]  go count like this i think it should be smart enough when i click increment yeah it doesn't it doesn't re-render cnd if we if we if we use
[02:59:12]  the callback state so interesting point side point when writing your new forget code remember that closures can kill you um so to speak so i mean this causes a whole other tree
[02:59:28]  to re-render that doesn't need to just because i use the variable directly instead of using it in the callback form i think that's that's a good observation
[02:59:39]  anyway right i'm trying to come off as these things are different i mean one of the challenges here and i'm we'll get to it in a second is obviously when
[02:59:57]  i put this work in it led to a conversation right because then suddenly ricky comes in later he's like to do the work in the recompute right so he's like
[03:00:08]  he he made the memos and then both the solid like i'll show the solid example just for sake he he because it reacts the same he put the the the work in
[03:00:17]  a memo or i mean it doesn't need to be a memo could even be a function call and then now we are slow we're taking the full brunt of the
[03:00:26]  thing too and it's re-rendering according to this but the reason it's re-rendering is because he's calling the render the update of the memo not the
[03:00:34]  call of the function that's fine but that's why i said the point was the the work was unfortunate the difference is i'm i'm not i wasn't making a
[03:00:46]  situation where the work was like it knows how you had to put props count here you know i wasn't making a situation where where the uh how should i put it the uh
[03:00:59]  everything was derived i was trying to show up a situation like what misco was showing um we actually went on pretty deep which was a lot of fun just for people to see
[03:01:10]  he gave me an opportunity because he showed me use transition you can click 10 times in a row and interrupt only the final commit value so he actually made this version which is
[03:01:18]  kind of cool because this is people know about async about transitions but react also does transitions even on synchronous data when it's our work when it's really long so if you
[03:01:29]  if you look at this version of it it's using the memo again but if you click a couple times it doesn't it doesn't it doesn't show until the final
[03:01:43]  value so it can process it all which is which was a lot of fun because um it's been the first time in a long time that i got them use transitions in solid
[03:01:54]  i tried our synchronous and thing and do it and you can see the thing if you click it a couple times you could it doesn't anyways it was interesting because they literally
[03:02:09]  in the react comp uh that thing that dev highlighted they were saying that suspensive transitions you know we think it'd be pretty difficult to implement in the signals framework um it was
[03:02:20]  very cool to have an interaction with the core team member we're about to actually show them it working in the signals based framework the really ironic part is we released it before
[03:02:28]  they hit because it took a while um anyways um it wasn't necessarily perfect it was just kind of amusing to me um anyways that was a great interaction but what yeah i i
[03:02:40]  mean not everyone spends as much time looking at frameworks as i do so i i i shouldn't expect the react team to make comment uh like like to know like what solid
[03:02:52]  does or doesn't do it is a little bit frustrating at times admittedly because like like stuff gets said and people go yeah this is why and it's like no actually not
[03:03:03]  like i i had the argument with paul from like react three like a couple years ago and it's just i'm like eventually i had to be like man please can you
[03:03:12]  just stop saying that it's not pop like you need reacts model to do this stuff i literally have demos showing you otherwise you can just stop spreading that you know it it
[03:03:25] 's it's tricky when you have bigger voices in the community and you have like more popular projects making these kind of statements um because it keeps them on top so it's
[03:03:40]  like it's it's it's it's challenging yeah oh what a question yeah i mean i mean maybe maybe this is not real fine-grained let's be at
[03:04:19]  least we all know how we feel when you call things suspense to be fair most suspense implementations are like like don't do transitions and don't do the like don't
[03:04:29]  do the full thing um they aren't all the way there but i i i would love to you know if they don't think that the solid implementation is up to snuff
[03:04:41]  i but i wouldn't mind talking to them it's only called fungi reactivity if it comes from the solid region of canada otherwise it's called what's what's
[03:04:51]  felt in three years ago oh man this this is endless and it's yeah more like what's felted when does felt three come out 2019 so it's like almost like five
[03:05:12]  years ago but yeah so svelte has a async component uh or weight component uh which is kind of like you put a promise and then it holds it at that
[03:05:31]  place but like suspenses inversion of control i think um we have it uh i guess uh technically uh view has it too um they they're they're they're they're if
[03:05:44]  you have like uh async in your like setup function you can have a similar behavior yeah but it's different like svelte's very much a templating concern where
[03:05:55]  you put the await like like you put the promise in the await so yeah anyway this is i i i i saw that my example wasn't really good enough and i
[03:06:24]  was like okay well what if we took a different example right um my favorite example i give this one all the time in my talks which is huxpro original react compiler gave
[03:06:38]  an example in his original talk and his example was a to-do app and i actually love this example because i i use it in my talks because it was so illust
[03:06:49] rative because if you remember in huxpro's original thing he started with something very simple that looked like this you know like sorry no like this where there's some state and
[03:06:59]  then you update the state and there's a for loop and then he showed how to implement it with react and it was like freaking you know with the memos and stuff to
[03:07:06]  get it to like only log stuff in the right places was insane like he had to do a whole bunch of stuff and then he showed the compiler output and that just blew people
[03:07:14] 's minds because it was just like gigantic but the code you wrote returned back to something simple like this and i use it as a thing it's like you don't need
[03:07:22]  a compiler with solid well it's more than not needing a compiler with solid i did actually have the but one thing that was actually shown me by i was trying to figure out
[03:07:31]  and i haven't solved this yet is i was i was uh let me get here uh where is the yeah i'm in the i'm in the right file is that
[03:07:42]  how do you did no actually i'm not in the right file i need to go how do you detect change in in react uh in react forget right because i in solid i
[03:07:58]  had to put the console logs in the checked binding in order to detect when it was created or updated because if i put in the component it wouldn't actually run right we
[03:08:11]  already know this but i tried to do this for the react forget and unfortunately it didn't work the way i was hoping it to but it makes a lot of sense why it
[03:08:24]  works the way they do look what they do props on change they guard on that one check box they guard on that one to do text they got on that one but the
[03:08:36]  the problem is that console log that i put in here for a checked finding t0 what's t0 console log prof to do they actually hoist it out so it goes
[03:08:50]  in the the component body because they recognize that only the last return is the part of the expression and because of jsx isn't lazy evaluated like us they do run this
[03:09:00]  every time the component runs so they hoist it out so i can't actually isolate so i was trying to figure out how to put something in this branch rather than have it
[03:09:09]  every time the component runs because every time the component runs is not particularly interesting in react do you know what i mean like it's actually like we know already that the component
[03:09:22] 's going to run a whole bunch right so i was having a hard time because let me show you why i was having a hard time because i go here and i click the
[03:09:30]  check box and to do's is called filter is called and three create update update to do's is called i just checked one box why the hell is everything freaking called and
[03:09:45]  the answer is because of this hoisting what because those components do get called they just don't re they return the the same stuff so this really should in this case be
[03:10:02]  a single create call but the filter calls legit and the to do's component uh let me go here is it i put it there just so you can people can see it
[03:10:11]  the to do's component running is legit obviously so you you call the the the reason that the the filter happens is because when you have state in react and you set updated to
[03:10:25]  do it's immutable so you actually have to update the list and then the whole map function needs to run again which then runs through all the components again which then diff
[03:10:36] s down the tree so yes i mean checking the check box will make the filter be called call call all three of these components although only one is actually getting updated i w i
[03:10:48]  need a way of showing this right and fortunately when i change this to do's component is called this but nothing else is so you can see that the memorization is working
[03:11:01]  this trick is the props have something called visibility that gets passed to um uh the or sorry theme color that's passed here so it did go through this component so to do's
[03:11:17]  has to run but it didn't run the map function so you can see that the map function doesn't get run when you change the theme color the theme color um but
[03:11:25]  this component runs over and over again but the challenge here is like if i add a to do let's add four um again filter is called which is the the get filtered here
[03:11:41]  and then the four to do's and what's interesting is if i switch from all to active which they're all active again let me see if the filter is called because
[03:11:56]  you changed it and all four to do's are created again my guess is that in reality none of these will be created and it'll be a single filter call it's just
[03:12:06]  i don't know with the compiler how to show this but the reason i actually wanted to show this from a fine grained perspective is is let's go install and check
[03:12:16]  the box okay it adds one to do undo one so we can assume that for react it's doing that but do you see the biggest difference here it's not calling filter
[03:12:26]  as i'm checking the boxes sure if i switch to active it will call filter but and they're you know but checking the boxes doesn't call filter and you might be like
[03:12:43]  okay what well it's because it's because simply speaking that when we use a store and we update the done on the to do it's not immutable so we don
[03:12:59] 't actually end up recreating the list we literally update one field on our data and it updates one field on the ui it does not run the map function it does not
[03:13:10]  diff the the the map this whole filter function doesn't get called again to apply the visibility it does not then diff with the dom it doesn't do any of that it
[03:13:20]  literally just updates the one place react forget doesn't do that and compilers in general have a very hard time doing this right like we use proxies for runtime for
[03:13:37]  this it's it's hard for traceability to have something update on a single field but this is one of the big superpowers here why it's all so good in
[03:13:47]  tables and charged lists and all this stuff it's because we can update the stuff directly from hoisted upstate without having to re-render all the stuff below it right are
[03:14:00]  you guys still here are you guys arguing about c sharp like do you understand the difference even though this is over overrunning the the key part here is that every time all
[03:14:12]  this extra stuff reruns and it might not matter like this might get shortcutted but the filter getting called the mapping over the stuff the you know different all of that is avoided
[03:14:27]  with signals this is a this this is this is different so i mean i don't know who cares right who who who cares right because like i i have a theory at
[03:14:49]  least right right i do like it's only theory i i mean i don't know i understand putting heavy things for work okay i do think that some dialogue around forget has
[03:15:00]  missed the point it will make the average react that faster and easier to write my suspicion is it won't significantly impact the performance ceiling react it won't win any benchmarks but making
[03:15:08]  the average app faster is really a good thing if the default leads to you leads you to more success than certain problems disappear or delayed significantly so in that it does have something in
[03:15:16]  common with signals idiomatic code is the most performance that's the win right it's just like so you know i mean we could leave it at that but yeah he's
[03:15:29]  talking about loading it so hux uh i forget where it is but somewhere in here i'm supposed to really get this it is an optimized component function still gets actually top down
[03:15:44]  having branches of chemistry skipping so there was one thing saying rerunning one is no longer thing is another my brain's failing me yeah because it's definitely rerunning the components
[03:15:50]  i think we've shown that it's not really reacts getting top to bottom i guess what blocks my brain is that react all already allows conditionals how is this different to be
[03:16:00]  fair the whole point of react liar is that devs don't have to think about something fundamentally different they can maintain the good old rerun component mental model even though it's
[03:16:05]  now it's actually doesn't work the actual performance characters oh and i just meant to go i'm in the performance ceiling reacts overall model because they're still not the compiler
[03:16:16]  won't raise the performance in the react itself as we shared during the rack up this is what we've seen in practice very well memoys code got faster with react compiler because
[03:16:26]  the compiler can actually apply optimization so much more thoroughly than a human would think to do interesting should we test it i don't know let's test it they think it's
[03:16:42]  actually you're going to make things faster then let's freaking test it i'm going to find the most optimal existing react implementation that i can find something that's been tested for
[03:16:58]  years in terms of performance benchmarks and see if the compiler makes any difference on it let's let's let's do that faster than react without the compiler i don't know
[03:17:18]  what's this oh it's called the js framework benchmark um let's let's take a look here now the beef i i mean i don't know i said it was my
[03:17:31]  suspicion i can't confirm this stuff you know and running stuff on stream live is not going to be perfectly indicated but i i'm curious like right so i mean i've
[03:17:48]  got react and i've got solid and i got vanilla js i think that's all i need the first question is can we actually get react going i'm sorry i i
[03:17:57]  actually only i i hadn't touched this i only got it re-running just before the stream because i haven't touched this in over a year that's the funniest thing people
[03:18:06]  don't realize solid js has been i think i think someone posted something in my bookmarks and i book i actually grabbed it because i was like i was thinking about it yeah
[03:18:15]  this one news js framework benchmark graph right and it was showing you know the history of frameworks on the js framework benchmark right and the funniest thing is i haven't made any
[03:18:26]  i haven't touched you can imagine solid's performance pretty much at all since before this graph starts if you go back to like 2019 or that was like the last time i was
[03:18:35]  working really hard on it this benchmark's just been sitting here the whole time and in fact solids kind of got worse slightly over time because things have changed the browsers and other frameworks
[03:18:43]  have actually done work here i i literally just haven't touched this in like five years um so i'm a little rusty right it just you can see view i've always
[03:18:55]  been impressed with like look at views done they've done these like waterfall level of of performance improvements over the last little while angular look at this nice react has kind of just gone
[03:19:09]  with the flow i feel like browsers have been trying to optimize for react so they're just getting kind of free wins um it would be interesting to go back before hooks pre
[03:19:18] act same kind of thing just slightly below react svelte like solid it's slowly gone kind of slightly worse over time but probably mostly hasn't been changed since svelte
[03:19:28]  3 until svelte 5 makes a change right and this is before vapor right so yeah i i don't know let's let's what do we need i think we
[03:19:40]  should just take the stock react hooks implementation right now i haven't done this in such a long time that i'm probably not going to remember how to do this properly but if
[03:19:50]  we take this and paste it the last time i think i did anything here was like when i did the pre-act stream when i made the pre-act rx uh
[03:20:01]  like thing like two years ago let's call this react forget all right sweet sure why not all right let's do this all right luckily this is one main js so it
[03:20:24]  should be pretty easy to do and it looks like it's been updated to fairly new syntax like create root and stuff so this will make our life a little bit easier yeah
[03:20:33]  this is already an enigmatic updated react what version of react is this on because we need to get to the latest okay okay let's hop back all right let's look
[03:20:43]  at one of my um stack blitzes and see if we can pull i mean this is beat so i might not be able to get the exact thing let's let
[03:20:56] 's go here but what i want i want to i want to first get some react versions let's let's these look good i'm gathering we can use webpack to build
[03:21:10]  it and we have babble loader i think that's all we need there was some docs here wasn't there on uh on react compiler what is it what's it
[03:21:27]  like this what you'll learn blah blah blah what's the compiler do what's the color assume strict rules rules getting started compiler health check i don't need es lint
[03:21:38]  okay babble babble plug-in react compiler okay okay um let's get into no that's my web server let's go cd dot cd was it react forget
[03:22:02]  i called it okay we should i think everything should be up to date yeah okay all right so now we have react plugin react file or whatever this probably belongs in the dev dependencies
[03:22:23]  but whatever the what i don't really i don't care we're just playing okay and then what's in this config it's like options i think i just left it
[03:22:38]  blank last time yeah let's just let's just put an empty object in there it's fine let's go um yeah so this is presets and then we're going to add
[03:22:59]  plug-in like that i i i haven't done this before just letting you guys know i'm this is this is just yeah i'm surprised no one's done this
[03:23:19]  yet maybe people have done it themselves i have no clue honestly we're just gonna kind of go with it we're gonna have to do this this i like this example actually helped
[03:23:27]  write the original hooks implementation with some feedback from the react core team way back in the day when when hooks are added um and they told me the user user reducer so
[03:23:35]  i did and then there's a bunch of memoized components and stuff we might have to do some tweaking but i'm hoping that that is it let's let's
[03:23:46]  just start with an npm run dev okay what's wrong here oh yeah i forgot to i forgot to change this back into just empty object i don't know if there
[03:24:06] 's special compiler options we want okay let's see if i go to localhost three no was it 80 80 for this one 80 80 react or get okay well first part
[03:24:32]  of the test works whatever i'm doing isn't breaking it it just it just works which is beautiful i guess the interesting question is is the compiler actually being applied here do we
[03:24:47]  see a bunch of like like it's gonna be fun it's it's it's it's in one freaking bundle uh i'm gonna guess it's gonna be near the
[03:25:00]  bottom okay this looks like it maybe i see a bunch of these function references i see a bunch of equal signs f this f that yeah yeah okay i mean i think so
[03:25:33]  yeah if this not equals this this looks like the compiler right like i'm not being insane it's yeah yeah this looks like the compiler yeah this not equal this react does
[03:25:46]  not normally compile that kind of stuff in okay this looks like the compiler yes turn it off and see if it changes thank you obviously i don't think this has got hot module
[03:26:00]  reloading this is old school let's look uh let's look at a component here yeah i don't see any of those t t dots actually that'd be interesting let
[03:26:17] 's just out of curiosity um fuel and finder i want to see so this is 184 kilobytes without the compiler this is not gzipped or anything let me
[03:26:33]  see that's freaking huge okay we'll talk about that later i wonder what's going on we're in dev mode too so that's that's that's might be fair
[03:26:43]  um but i'm kind of curious we'll do the actual measurement later but the size might actually also give us an indicator of how big it is okay only went up one kil
[03:26:55] obyte that's good there's not that much code oh wow welcome um okay okay so at least it's functioning which is which is the first step here um now
[03:27:32]  i guess an interesting question is am i supposed to just remove the memo functions like my gut feeling here is if if i is that i'm supposed to if i want to
[03:27:46]  go back i should just do this i think i think that last one's an easy one if it's always true i think we can figure that out pretty easily be
[03:28:11]  a compilation yeah i mean i got props on how easy this was to just get working um okay yeah i'm i think i think that's like is that like did i
[03:28:37]  just do it like is that it i like i don't think i the thing is this is already fairly heavily optimized like we already hoist state ups to make sure that it
[03:28:47]  doesn't do anything dumb you know and with the way we pass the reducers and are designed to prevent re-rendering yeah yeah so anyway i think i think that
[03:28:58] 's it um let's all right build prod let's build prod i mean i i guess we should actually check that all the functionality works i i'm pretty confident given how easy
[03:29:12]  this was that that this all works like if i go create a thousand clear create append yeah we're in the two thousands that worked yeah i don't know um create ten
[03:29:30]  thousand clear create a thousand update every tenth row highlight remove swap okay nice all right well okay uh let's close a couple of these actually i'm going to keep that one
[03:30:05]  over we don't have to show this spell grapple anymore so the next part is the boring part you guys because um i'm actually going to because i'm running my
[03:30:19]  computer and it's hosting a live stream and we're doing this stuff i cannot trust anything in this folder because when i run stuff right now this is just very preliminary so we
[03:30:34]  do not want any of this stuff in this folder so what we want to do here so what we want to do here is we want to run keyed vanilla js ed
[03:30:49]  react hooks and keyed react forget what did i what did i what did i am oh am i in the wrong window what did i do oh yeah i'm in the
[03:31:04]  oh i'm so lazy i just like don't want to i don't want to type it again ah whatever keyed keyed vanilla js keyed react hooks keyed
[03:31:32]  react or get and this is this is why this is incredibly boring part now because it needs to actually run anyway i i mean honestly i i'm i'm actually pretty uh
[03:31:55]  oh you're saying it's not gonna well if i if i spelt it wrong it's not going to um oh i can't see now it's just not going to
[03:32:11]  run it and actually it it you're right it's not running it know why because you would have done forget first because forget starts with uh with an f which comes before
[03:32:23]  hooks it's fine we'll run it right after it just skips it so it's gonna do hooks and vanilla now and then we'll do forget right after okay it's
[03:32:31]  all good guys all right well while it's doing this and i can't really do much on my computer because it kind of hydrax it what do you guys want
[03:32:44]  to talk about no that's not true i i can technically it's going to take over the my main window i can interact with chat here for a moment what's been going
[03:33:00]  on with you guys the thing is i don't control which i don't think i control which window it shoots it to and the problem is it's it's even if
[03:33:11]  i try to like pull something out in the foreground it's going to keep on doing it and we don't really want to be messing much while this is going so this is
[03:33:17]  this is this is a good time to ask me any random questions while this runs perfect how long until solid start v2 stable release i'm not worrying about solid start v2
[03:33:29]  right now right what what i'm worried about uh uh i is solid v2 i we're doing some really cool work on async um mostly uh i'm a big
[03:33:45]  fan of reacts async model i don't know if that's been obvious enough to people one of the coolest things about reacts model is how purity extends all the way down to
[03:33:55]  effects they have this really cool superpower in that they know which effects even depend on async values and that's something we don't have today in solid which is really annoying
[03:34:11]  because technically speaking reading in effects is already too late like you don't do the effects until everything is landed so generally speaking it's fine but we don't if if if something
[03:34:27]  is async and it's read the first time in an effect it won't block which is our problem which is it's because essentially like it doesn't realize till it
[03:34:39] 's too late that it needs an async value like if if you read it anywhere else if you read it in rendering it's fine but it's user effects that are problem
[03:34:51]  if you read it during rendering if you read it in some computer value we know and we go okay trigger suspense but if you read it if you read it for the first
[03:34:58]  time in an end user effect we don't know and react gets around this because they have the dependency array so they know up front that like if you have some kind of as
[03:35:07] ync value you use and the only place you use it is an effect again i don't know many use cases that are like this it will know that um you know this part
[03:35:17]  needs to suspend so this is this is an interesting um piece but if you solve that in the same way you saw earlier when we were using the create memo um you know
[03:35:34]  uh that uh ricky put the create memo into all the components and you can have this like additional thing um to try and show like the work getting done in solid but
[03:35:45]  if we make a kind of similar change we can do the pure part all the way through the reactive graph without running the components essentially it will happen invisibly for you like in
[03:35:55]  the jsx but not obviously in your end user effects but with that ability we could basically mimic reacts promise throwing style blocking async where you don't have to do null
[03:36:09]  checks the colorless kind of approach but through the reactive graph instead of through um the component tree which is kind of cool because in the same way that solids uh signals push all
[03:36:23]  the work down to the leaves this would push the async blocking down to the furthest leaf essentially where it's finally red in the end which as i said is is
[03:36:37]  very very very cool and it's one of the main focus on solid uh 2.0 is this kind of update to async because it'll make our transition type stuff a
[03:36:47]  lot cleaner and you know like these kind of edge cases i'm talking about again people don't hit this very often but when they do it's kind of like why the
[03:36:56]  hell is it doing that and it'll also um yeah it will give us basically the this kind of incredible power to block on data without coloring stuff right which is i just said
[03:37:14]  really powerful because then you can write your components without nulls like you can actually go okay this doesn't accept nullable properties and it's way down in the tree and
[03:37:24]  then you can load data higher up in the tree and you can pass through prop drilling and without the components running in the middle necessarily without you you know having to do a check
[03:37:35]  like is the data here a component that was authored not expecting async data will be able to handle it perfectly and it won't be blocked at a component level it
[03:37:44]  could be blocked right at that text node like that's that's what i'm talking about um i i i i think it's that's that's what i'm excited
[03:38:01]  for and you know what i did i was scrolling the chat and i did the exact same thing i did on the svelte demo uh you know where i it went
[03:38:26]  back so i backed out of stream yard uh i'm so sorry uh let me present my screen um on the positive it looks like uh the benchmark has moved on to my other
[03:38:44]  window right now um which is kind of um nice anyways all right how's everyone doing yeah yeah i i i yeah it's it's it annoys me thinking to say
[03:39:08]  the back company browser yeah i hope so because i don't i don't generally want to disable the motion but it's gonna be in the browser no no the benchmark is
[03:39:19]  doing fine uh it's still off doing its own thing so we're good on the benchmark vanilla js is is well into in its paces and then we'll switch to forget
[03:39:29]  in a second here yeah yeah we're good yeah stream art has caused me some problems in the past but it's also a cheap option you're so back thank you i
[03:39:46] 'm just going up to see where i missed the chat i actually wasn't aware of that detail um so i can't really speak much to it uh what do you pardon
[03:40:04]  the dom parts proposal the way they help with dom yeah i mean there's a couple proposals that people are working on now that i think could help i think the dom parts is
[03:40:12]  really interesting if it's performant um i think it's low enough level hopefully that it's not the same problem like i'm always concerned about bringing templating into the language
[03:40:23]  because we might find smarter ways to do it oh guess what it decided that it wanted this window again oh it's all good so yeah i mean there's a the hardest
[03:40:38]  thing for me on specs is you kind of got to wait for them to ship before you can even like talk about the viability of them because you got to see how they
[03:40:45] 're implemented do you want to talk about tca and thrills if you're to the best dream i missed it yeah i talked a little bit about it i'm i
[03:40:51] 'm happy and i talked about the signals 2.0 stream i i'm happy that the spec is coming got to a point where it's stage one i'm glad the conversations
[03:41:00]  are happening i think it's i think it's challenging um the next stages might be a little bit more challenging but if i mean if we can get this all the land it
[03:41:10] 's pretty exciting um yeah i don't know if i have much else to say at this point i it's very cool to see so many framework authors aligned which is really
[03:41:20]  it's really cool from that perspective right um how long does the benchmark take yeah i mean earlier before i i would say generally about five minutes of framework um but i don't
[03:41:36]  know how long we've been running it for now because we're almost through two frameworks when did i start it when i should have timed it but it's about five minutes
[03:41:50]  of framework it was i want to say that i was we started it about 12 minutes ago well this one here that i'm running on is a macbook pro it's
[03:42:14]  my work computer which funnily is not the computer i do i classically do most of my work on it jumped across windows again it's like whatever window i have
[03:42:24]  focused at the time that the that it runs uh yeah i mean my my suspicion is that we won't see much difference because like basically this is this is super like my
[03:42:54]  comment was i think that for a lot of code bases react compiler will make things a lot better a lot faster a lot faster the defaults being faster um that that was
[03:43:04]  my take and assumption um joe was trying to say that even highly optimized code could see benefits i i want i want to i want to yeah i i i shared that
[03:43:17]  tweet dev a few moments ago but yeah um okay did it's i think it's done let's do hooks now yeah i i i shared that tweet dev a few moments ago
[03:43:25]  but yeah um okay did it's i think it's done let's do hooks now or forget yeah see so let's just yeah it's it's slash keyed and
[03:43:53]  then we don't need to run run these ones we just need to run our last one okay let's run forget let's go all right well it ran two so
[03:44:14]  that was more like 10 minutes yeah i mean someone was asking earlier why we use use reducer and it was just easier the interesting thing people don't always realize and it's
[03:44:33]  why use callback exists in react is that and it's always confusing i think this is actually one of the disjoints between me and the react guys um they treat
[03:44:42]  functions and everything as memoizable so like if you make a new if it closes over a different version of the variable then you have a new version of the function so when they
[03:44:51]  were solving a lot of solutions and saying oh what's a solid version look like they would make these really their assumption was like oh we need a new version of the of
[03:45:00]  the of the function handler passing it through and um and and a lot of times it's all i'd be like no no the count the original reference is still good so we
[03:45:13]  don't actually need to memoize functions or worried about functions it's just easier to just literally read the thing and that what that ultimately did in a lot of these conversations was
[03:45:22]  the solid solution became drastically simpler than the like they were starting where the their assumption was and they're like look how simple this is and they thought the solid solution they'd
[03:45:31]  be like look how you know awkward this is and then i i was like no but we don't have to worry about the function being memoizable and then it was like both
[03:45:38]  solutions are simple in their own way um and i think use reducer is kind of in this category here because of having the single function to the the the state propagation rather
[03:45:51]  than like the set state yeah and and this that's exactly what i i've been trying to say it's just i i think this will make a difference to many real code
[03:46:06]  bases ones that even think that they're very optimized i you know but if this does make a difference i'm actually kind of interested right obviously because the yeah i mean yeah
[03:46:25]  i'm i'm definitely interested if this does make it's it's possible that this does make a difference and i think that's pretty cool you know i mean this is
[03:46:35]  not the most accurate test so if we're within you know five because i'm running all the stuff in the background right now if we're within five ish points of it
[03:46:42]  i'm gonna assume that they're equal and it's any given run um but like yeah i mean this might not be completely optimal i think there's some react state libraries that
[03:46:56]  somehow get ahead of this which makes no sense to me so obviously there's like there might be places where even this implementation could be improved slightly so yeah i mean this
[03:47:28]  is this is this is the challenge here do you know do you want to know why this is the challenge here it's because million js destroys this benchmark do you know i mean
[03:47:42]  like just like i i can't even write the solid implementation as efficient as a million js inflation because the million js implementation doesn't even like the things that make react simple is
[03:47:56]  what lets million be so simple in this benchmark because they're not it's not worrying about like state management in a way that like actual apps would write like signals do bring
[03:48:09]  an overhead so million is like how fast can we just strip everything out and just blast this one scenario don't worry about nesting don't worry about like any kind of scenario
[03:48:19]  and it's interesting because on one hand you have this thing that shows such incredible performance improvements in terms of uh raw benchmarks and then you have forget which we will you know
[03:48:35]  may or may not have some impact here but actually is probably more meaningful like as i was saying earlier when we're talking about the the million lint for as fast as million
[03:48:45]  is it probably isn't always going to make a huge difference on your app i mean there's the old um inferno um um inferno's been around and inferno
[03:48:58]  isn't quite as fast as million but like we've had eight years of where people could have gone to you know used inferno um and essentially had some good benefit changes there
[03:49:09]  and and meta facebook my understanding did this test and and they they were like no we're going to go our way and not go there you know go that direction they did
[03:49:26]  other types of research um in this benchmark it is million without react is kind of the thing i i i don't know if adding million in like is million always in react
[03:49:43]  i should actually look at the implementation but it basically sidesteps react almost immediately is what i'm getting at yeah uh we got more react people in here hey yeah it
[03:50:08] 's it's i was highlighting on the chat so it's still running on the other side oh all right i can never remember this is a problem i haven't done this
[03:50:40]  in such a long time i i despite popular belief i even though i you know i used to spend a lot of time on this framework uh benchmark i it's been years
[03:50:51]  i can't even remember where the the results are i know that he does stuff like this yeah okay yeah so i would say in this benchmark interesting they're essentially the same i
[03:51:11]  don't know why there's variation on on create many rows it is interesting that select row seems slower here i wonder if it's an example of where i mean we'd
[03:51:23]  have to run a few times this is this is too close for it to be like statistically significant for my opinion but like this is a bit of a gap and it actually doesn
[03:51:38] 't vary much i wonder if there's an example where like say memoization doesn't benefit i mean as much this is a stupid test to be fair this is the the shortest
[03:51:48]  test in the whole benchmark and it has to be super slowed down to even see the difference because we're literally talking the speed of clicking a row so this one is the
[03:51:57]  most wonky one on the whole benchmark but it's also the one that shows the benefits of uh fine-grained updates more than others because literally you don't have to
[03:52:07]  run the for loop like if you have a fine-grained system like solid and you update one to do in a big data store it's good and you update the
[03:52:20]  one id it's going to update the one row it's not going to go okay mutable data clone the the array which doesn't matter but insert the same items except for
[03:52:31]  the one that's changed you know like now go through you know map over that notice that that's the same um so don't recreate all the other ones create the one
[03:52:44]  new one for that and then create the new thing you know like that whole process just gets skipped when you have like true fine-grained rendering but like um yeah it
[03:52:58] 's interesting swap rows is basically the same remove rows create many rows got faster but it could be variable run we could run like this but i can't trust the results too
[03:53:10]  much because of the setup we're running under but um yeah i mean this suggests according to this average that forgets negatively slower because of this one test um i don't know
[03:53:26]  how much time i want to sit on it i could rerun this one test for both and see if there's any change here i'm i'm curious enough that i
[03:53:34] 'm going to just run the one test this will be a lot faster we just go dot dot bench and we actually have put them both in here we want to go keyed
[03:53:44]  react hooks and we want benchmark oh four underscore think i'm pretty sure it's all four it's always oh four because this is the let's just let's just run
[03:54:06]  those two again okay yeah sorry i i'll blow up the results after this one sorry yeah this is this is in terms of public benchmarks this is probably the i it's
[03:54:43]  it's it's it's stand out in terms of the community effort in terms of the people involved if you go back you'll see prs from many framework authors you
[03:54:52] 'll see edmund you and rich harris and you know lots of people you know contributing to this over the years uh stefan has always tried to keep things pretty fair there
[03:55:03] 's categorization at one point i when i was more involved i went through every that's how i learned a lot about the javascript frameworks i went through every framework to
[03:55:11]  see if they were cheating essentially because solid cheated initially our first post we came in at the top and people are like no no no no and it's like oh i didn
[03:55:18] 't realize that so you know i kind of went back in that and over time i helped by scanning all the frameworks they're done um much much faster to run one test for
[03:55:29]  two two frameworks um you know not yet okay i it got a little faster and this one was a you know a couple points faster it could change run to run but
[03:55:52]  this i think this actually suggests that the forget version here is actually slightly slower um let me let me plus it up for you guys right partial update i cannot like i kind of
[03:56:07]  want to look at all these micro ones the c i it might be that forgets just like tiny bit slower because it's like this is so optimized structurally that maybe the
[03:56:18]  overhead of doing the checks is enough to show up even though like like versus not doing checks that aren't necessary i don't know i think we'd have to spend more
[03:56:24]  time here um to say anything conclusive anything else interesting here um memory usage slightly higher oh it's it's my hooks do you know what it is also this isn't fair
[03:56:35]  i'm using react 18. we don't want to do this i should have used react 19 on the hooks version this is react 18. this is it's fine it
[03:56:59] 's fine it's all fine sorry sorry it's just not fair if you don't compare against the same version of react right so i'm gonna have to run the hooks
[03:57:38]  version again it's only one framework this time instead of three frameworks it's just okay anyway yeah sorry there's a lot going on chat all right i still have to
[03:58:28]  zoom the results don't i did i zoom them how much more do i have to zoom them it's running right now it's just like it's fine i did zoom
[03:58:50]  them a bit i feel like but maybe i can zoom them more all right yeah this tests memory it tests output size it tests everything so that's why that's why 19
[03:59:17]  was important to me because i wanted to make sure that we were testing yeah i can should i over look i can i can switch layouts so it does the overlay but i thought
[03:59:30]  i might be blocking something it might be blocking something i think it's actually better for what i'm doing to do it like this sorry okay okay okay because see 18
[03:59:54]  here you can see that forget is the compressed size is like different but i think this is mostly going to be just the difference between react 18 and react 19. it's 40
[04:00:01]  versus 49 and i don't first paint i guess it's impacted by that yeah comparing against react 18 is just not fair you guys are asking sushi or pizza i'm pretty
[04:00:24]  sure it's leftover pasta i made um what is it just like you guys um the like the pea one you know with broth hadn't actually made it before a little freshman
[04:00:38]  from the garden too pretty good all right see sorry guys i i i just if i'm gonna do this i want to do it right always need three points right this
[04:01:08]  is why i run three frameworks you need the control which is vanilla like the triangulate you need and then you need the two things you're comparison if you ever do a benchmark
[04:01:18]  and it's just two things you don't have like you need the baseline always it just otherwise you don't you don't know what you're comparing something could be 20 times
[04:01:28]  you can always find a way to blow something up so it's like 20 times faster or whatever all right forget slower it might be a tiny bit in this example but it
[04:01:55] 's again we're talking about probably the most one of the most scrutinized optimized benchmarks um out there oh is it just called the react compiler i i i like calling
[04:02:13]  it forget but that's good then then we can take it back i you you know if they're gonna call their stuff fine-grained rendering i could call solid set
[04:02:30]  and forget okay okay didn't really did yeah i mean there's a lot of things that make different benchmarks reliable uh part of it is you you have to be you have
[04:02:57]  to scrutinize um like what is being tested is actually being tested i'm less it is hard to make benchmarks like actually real world or fair from that perspective but the
[04:03:09]  best you can do is make sure that like you're testing the thing that you're trying to test right even if it's important or not important um it's hard to find
[04:03:18]  a perfect balance between things to tests that are actually valuable versus not um wait is this real was was it ever called use action you would know i didn't see the action
[04:03:43]  now that i think about i didn't see the proposal until like maybe a week a couple weeks before it was released i think you were on the inner circle on on that
[04:03:54]  ah okay okay it's done it is done all right ha ha ha ha ha ha it's because 19 is slightly yeah yeah 18 19 is where the slowdown is coming
[04:04:46]  and not from forget yeah you called it some things are faster with forget some things are slower slightly um we still see create rows being slightly faster and swap rows being faster um
[04:05:07]  but select is still slower right this is i think this is the only test that's as granular enough like this i always call the this one the fine grain test this is
[04:05:19]  the one that all like knock out like if we knock out beats react on on this one like you know what i mean like like this is this is the and i think this
[04:05:29]  is the one where memorization costs would show up the most where if it wasn't necessary um seven six four nine six eight five yeah yeah so bigger difference between react 18
[04:05:50]  and 19 than the difference between here between forget and non forget which is cool because we were able to use memos forget has higher run memory it looks like except interesting this
[04:06:03]  crate cleaning cycle was improved maybe the cost of the memo function has impact has impact there run memory and then yeah we see the size grow it was not forget size but react
[04:06:20]  19 size increase that actually made this giant difference the forget code uncompressed is two kilobytes bigger but it's half a kilobyte difference in the end here and
[04:06:35]  everything else is basically equivalent so i mean i'm just gonna say that these are identical as you predicted parasocial right i mean sometimes extra like dan wrote a great article
[04:07:04]  a while ago about when to use memo and he's saying like like memoization itself isn't always good although it turns out that i think it's good more often the
[04:07:13]  times than we realized as long as the mechanism is lightweight enough and that's what forget has proven um but yeah if you have the most optimal code and then you add memoization
[04:07:23]  just like if you have the most optimal code and you add signals signals are not making it any faster memoization is not making it any faster i would just consider this a wash
[04:07:32]  which is good do you know why do you know why i'm assuming this is good because some features that are good from a performance standpoint ultimately actually have a cost when it
[04:07:43]  comes to raw performance like if we go here and we look at um something like where we we were doing oh god where the hell i'm in class react so i've
[04:07:57]  gone too far react classes where is class react faster than hooks again it never used to be oh it is no react hooks is here yeah yeah classes is here ooh classes got
[04:08:14]  faster interesting okay hooks when they were released were faster than classes for quite a while um where are we quicks over here where my hooks use transition yeah going from use transition like
[04:08:28]  using the concurrent apis for react just turning them on in a test where it probably doesn't apply has a bigger slow down than turning on forget forget is at least basically
[04:08:40]  invisible if you don't benefit from it so it's like kind of a free win i mean it's kind of like why not you know so yeah yeah yeah yeah you
[04:08:57]  know it in the best case scenario it does nothing you know or worst case scenario does nothing basically maybe make your bundle a little bit bigger but probably i don't know if it
[04:09:13] 's going to make that big of a difference sorry i'm just trying to get back to to stuff yeah looks like we're getting more and more people up at the front
[04:09:22]  here you know this crowd gets bigger every day us and svelte are yeah what's happened this run is changing those head inferno got in front of us and svel
[04:09:32] te which is odd because nothing has changed yeah yeah no what i was gonna i did it again but i was gonna say is that the select row um metric is is one
[04:09:55]  where you'll generally see reactive libraries um at the front of the list and then block dom and million are impressive that they get this far up on the select row tests they
[04:10:12]  actually beat out solid which is impressive inferno but so classic view the svelte five next what's the difference felt five next and svelte what i'm so is
[04:10:28]  there two svelte fives i guess that's old svelte oh well whatever enough looking at this solid's worst metric is garbage collection it's clear rose let
[04:10:42]  me go back to here uh yeah where is it um let's go back to where's it's funny it's like where do i yeah let's go back to sorting by
[04:10:59]  geometric if you look at solid the thing that's holding it down the most um and svelte 5 is memory we are it's not memory because our memory is actually
[04:11:11]  fairly low if you look here not compared to like uh um like block doms type stuff let me see here uh no our memory is still pretty comparable but for some reason i
[04:11:25]  think the memory release of the signals i think it's related to memory something about cleanup is our worst metric here it's so it's a thing keeping us down if you
[04:11:34]  look at this if you look at if we were to take something solid and something like uh million you'll see that most of the scores are almost identical except this one is a
[04:11:46]  killer right 13 versus 15.5 or 16 c 3.6 is comparable for 14 how's blocked i'm doing there or million 400 like yeah it's mainly this
[04:11:59]  clear rose thing solid's best metric now doesn't isn't that stand up anymore because it used to be select row and partial update used to be really good for us i think
[04:12:16]  this is a poor run i don't know why this is so high right now but um this run looks like it's just poor in general but something this is not what
[04:12:26]  i'm accustomed to but i don't think we have a particularly best metric we're pretty good all around that's that's how we got in front of the beat on libraries
[04:12:34]  was that we're uh yeah and and and yeah svelte 5 next is the right one and then there's felt five classic which is pretty cool um this is their
[04:12:58]  this is impressive improvement to say the least um but anyways uh enough of this um let's let's let's continue going i think we kind of showed at least from like a
[04:13:13]  pure raw dom kind of benchmark you know like yeah i mean i wasn't expecting any difference um i'm glad we went back and tested react 19 because that made a bigger difference
[04:13:27]  essentially okay okay let's let's keep them going all right and just clarify i mean the performance of the reacts overall model in comparison with signals not that the compiler won't
[04:13:41]  raise the performance ceiling react itself yeah i'm not sure if it does that yeah um but as i said it doesn't have to okay um let's go bookmarks let
[04:14:02] 's see if there's let's see if we pick up any there's a few other things for this week in javascript i wanted to kind of talk about we're
[04:14:08]  not doing this week in javascript the whole thing is this week in javascript um yeah i don't even feel like getting into this this is this this was
[04:14:22]  prime baiting i just i flagged both of these because it's funny that you ask the same question you switch the thing and i was i was amused reading some of
[04:14:30]  the responses because at first everyone on i why choose solid over next and it was all like i care you know other than dax being funny you know people are and people
[04:14:44]  clarifying that next is like solid start most people are like some performance comment and then when you go to the next side why do you choose next over solid everything is ecosystem ecosystem
[04:14:57]  ecosystem right so i it's yeah it's funny because when people got the more detailed responses the solid over next reason was almost always technical and the next over solid reason was
[04:15:16]  almost non always non-technical so i thought that was interesting at the time Hmm, what's here? I don't know if you guys saw this. They have
[04:15:40]  this new API that they're working on the DOM. I haven't had a chance to review it yet. But it's it's moved before API that basically my understanding is
[04:15:51]  allows the the like move reparenting elements without losing without losing the context on it, which is kind of actually huge. I don't know how frameworks will use it
[04:16:04] , but it's if the performance is good, it's kind of really cool. Let's see what else. I don't know if we need to talk about the compiler
[04:16:16]  stuff anymore. I want to give a little shout out to Devo on this stuff. Oh, no, not this one. That's see, I did have the
[04:16:29]  tweet that showed the remix one. That's not the one that I was looking for. It's fine. Let's see here. Do you know what's kind of funny
[04:16:38] ? Let's talk about this for a second, because it came from the solid start article. How many people hate file system routing, like just absolutely hate file system routing?
[04:16:50]  Like, I think almost everyone actually dislikes file system routing. Right. Some people have come around to it, but I had this fun. There's this thing where
[04:17:02]  this guy posts this after article and like a lot of people are like, why would I ever want this thing? Right. Right. And PHP did file system routing,
[04:17:14]  right? There you go. It just makes sense. You know, it's gross. You don't know, it's for some reason they're correct. I think a
[04:17:23]  lot of people don't understand why it even exists, right? And I actually replied, do you want the actual answer? File-based routing removes a huge amount of complexity
[04:17:30]  and linking bundling to the concept of pages. Important for generating lazy bundles, preload tags, and asset management. It's why every meta framework has it and
[04:17:37]  basically impossible to avoid. The alternative is so much worse. It's untenable to date. I've never seen a config based system deliver everything in a manual way. Now
[04:17:46]  there's some people who get in, who respond to me saying, oh, what if you did this? And there's some potential here, but like holistically looking at
[04:17:53]  what the system has to do. So like one of the things I'm saying, like, even if cell start lets you not use the FS routing, I wouldn't recommend
[04:18:01]  it. Swap your router library, but keep the file system is what I'm saying. And the original poster actually had some really great questions here. I've been
[04:18:17]  waiting for this comment, very interesting point of view. Just to make sure I'm not taking a version specifically of a general concept, I haven't recently learned that there are
[04:18:22]  actually multiple different concepts applied to file-based routing. From viewing all TanStack, one seemed much more accessible to me, so if for some reason I couldn't
[04:18:29]  use Angular config-based routing, I would lean towards that one. I heard that next is opt-in, opt-out, can you config-based, follow,
[04:18:34]  mix, and match, right? And solid starters as well. But what I was going to say is most of these concerns arose around SSR and smart lazy loading plus pre
[04:18:42] load. Stuff like TanStack actually doesn't do it without file system routing. TanR has asked me yesterday if you had any ideas how to accomplish it without.
[04:18:49]  Frameworks that have opt-in, opt-out generally are opting out of more than just more things and people don't realize. Like generally, it still works and
[04:18:56]  only impacts initial page load performance, so you might not notice it. But like when you don't use the FS routing, you give the framework less information. I do
[04:19:05]  think this is potentially solvable in other ways, but I'm not sure those other ways are an improvement, and I have yet to see them, which says a lot given
[04:19:11]  that FS routing isn't ideal. But at least the boundaries of analysis are clear and the syntax is cleanly defined. And it's so funny, like the day before I
[04:19:18]  post this, TanR actually dropped this one. I haven't liked it yet. After being very bullish on code-based routing, I've come back the other way pretty
[04:19:25]  hard. Any route convention is way better than most random systems I've seen emerge without it. There's pushback against file-based routing on the idea that you must
[04:19:32]  build everything or even the significant portion of the feature for location in the actual file for the route. If it fits there, then do all of it in the route. If
[04:19:38]  it doesn't, why not just build it into the feature TSX and render feature, whatever. Scourability, convention, flexible, creative. Rigid on the parts
[04:19:45]  you don't want to screw up the others. Yeah. So, yeah, anyways. I think this is interesting. I think this is because he's working on TanSt
[04:19:56] ack start, and he started being like, man. To try and solve this stuff well, it's really hard to do it without FS routing. So, just wanted
[04:20:05]  to kind of put that out there. People see this. Like, obviously, these conventions drive people crazy. I had fun with designing this because my choice for this is a
[04:20:17]  weird one, perhaps, but it's consistent. We only have three rules, I think, for routing. And I know there's a lot of file name conventions and
[04:20:29]  stuff, but our rules are simple. Wildcards go in brackets. And the other rule is, like, sorry, params go in brackets, wildcards, or
[04:20:41]  dot, dot, dot, dot, right? And then anything with a parentheses around it, or I guess there's four rules. Anything with parentheses around it is just removed
[04:20:53]  from the route. It just doesn't exist. It's structural to allow children to go in, or children not to go in, because we have the rule that files
[04:21:04]  name the same rules as the folder, produce a layout. But what it does is, all those use cases, whether you want to have named index routes, whether you
[04:21:15]  want to have group routes, whether you want to get out of routing, all use the exact same convention. Which is just, it's the same mechanism, which is
[04:21:24]  just remove the stuff beside, it's basically comments. The parentheses are route comments. I think this is interesting because no file needs to be named the same. And this
[04:21:35]  is the only thing that it's fighting you. It's basically saying that in terms of annotations, like you could, yeah, I don't know. It's interesting
[04:21:44] . I like what we built in terms of options, but yeah. There's a RFC, or there's a proposal for this in the works. I'm not sure
[04:21:53]  I love it, but I think it's probably fine. I'm still struggling with it because most things you can do with parallel routes, you can do a different way.
[04:22:02]  And there's a lot of implications here. I was talking to Tanner about this too, and I forget if he finished implanting parallel routes, but he said the Type
[04:22:09] Script for it was just horrendous. One thing that's always possible here with FS routing is we could expose, write your own route convention. I think Vinci does
[04:22:32]  a really good job here, so it's not actually that hard. Like as long as you, the challenge is the input into the router. Yeah, I mean, it
[04:22:43] 's probably fine. The one thing that's kind of interesting about start is because of the structural nature of these things, while we convert these properly, the parens actually make
[04:22:56]  it into the route config that comes out the other side. I don't think people are using other routes and solids start yet. And this is probably one of those things
[04:23:06]  to like, you know, before 1.0, I had the lockdown, so we're kind of where we're at. But it is interesting that the ignoring the pare
[04:23:13] ns bit is part of, I guess, technically not our output out the other side that you get in file routes. So, yeah, I don't know, basically
[04:23:22]  what I'm saying is if someone wrote their own FS router for solid start or so they could use their own conventions, they would have to target an output format that isn't
[04:23:31]  the final output format that they see in file routes. So we'd have to explain what that output format is, but I guess I could refine that before publishing it because
[04:23:39]  it's not a feature we currently have today anyway. Anyway, anyway, I thought this one was interesting because FS routing is controversial, but it's kind of actually also
[04:23:45] , you know, like necessary, unfortunately. Ready to return RCs from use query, use mutation. Ready to return RCs from use query, use mutation. Ready
[04:23:49]  to return RCs from use query, use mutation. Okay. because fs routing is controversial but it's kind of actually also you know like necessary unfortunately ready to return
[04:24:11]  rcs from use query use mutation caching is still going to dispense with them yeah yeah the tanner this kind of interesting idea is like instead of putting them in
[04:24:25]  loaders what tanner is doing here which is kind of cool is it's i think it's like solid start where you can have use function you saw the release article for
[04:24:34]  solid start where we show the use server inside the use query or create query why not return rcs from there too well the answer is structural considerations i think but it's
[04:24:48]  interesting well the problem is that i don't picture is you use query doesn't feel like a route level consideration like it feels like it's independent points so like a use mutation
[04:25:08]  is fine but you actually like how do you scope what the output is coming back for the page like i know that i that i guess if you call it out and treat
[04:25:20]  it like it's an action and then it will always re-render the whole page then yeah i mean and yes tanner could definitely do that um but i think it changes
[04:25:29]  it changes the semantics like a bit like when we use use mutation use query um yeah it's like with user server we we keep tanner semantics of the granular
[04:25:43] ity of the updates whereas use action is very like a hammer you know it's like a lot wider i mean i i i think it could be done though i just question
[04:26:00]  is whether he wants to mess with this like i i was fine because i was designing a new system essentially with working on start what was this one can i remember rich har
[04:26:15] ris wrote something someone needs to invent felt with but with jsx initially it was because i was copying api from an earlier project so my co-workers would have an easier
[04:26:31]  time adopting it b because i believe they would be impossible to get the same performance so i think it's a little bit of a afterthought um yeah this is an
[04:27:09]  interesting thought they're they're basically selling the civil server components basically seb is suggesting that caching is and that or dynamic versus static is like a fundamental idea react is actually as
[04:27:28]  pure functions not just that happen to be rendered that's why concurrent mode all these things are built in the same api similar next has dynamic or static which isn't something
[04:27:37]  the default in the page it also allows creating ppr expressing dependency is okay yeah it's funny because reactive libraries actually really focus on the difference between dynamic and static yeah i don
[04:27:54] 't know if i have anything more to say on this i it's funny because i think i think i think i think i'm just using server use client focus today's
[04:28:01]  implemented reuse case rather than the concept they unlock in the future yeah i i actually think that is an interesting when you talk about concepts unlocked in the future i actually want to talk
[04:28:12]  about one of my hack mds here just a second let's let's sign in with github we got a few more minutes left um uh because i think i
[04:28:21]  already talked about reactivity in a previous stream what i want to talk about here is let's go back to my profile there's a few things that i didn't talk about
[04:28:34]  on on my profile i talked about this we talked about this we talked about this didn't talk about this react summit that that that that that that that that that that that
[04:28:43]  that that this is fun by the way if you if you want to be sold on solid start check that out but what i wanted to go here is this is a pain
[04:28:52]  in the ass sort of public service announcement why is clone nodes broken compared to import node this is like something only framework authors appreciate but seriously we use clone node and solid because it
[04:29:07] 's 30 percent faster and then all these things started breaking the last like little while it wasn't always that way but new features and stuff and so and the firefox team claims
[04:29:16]  that that's how the feature works in the past firefox team claims that that's how the features work in some cases it's very frustrating like lazy on image elements don
[04:29:22] 't doesn't work properly when you clone it instead of import like it just i feel like they should just fix this i don't know if it's hard but anyway okay okay
[04:29:32]  so this is what i was looking for yo dog i heard you like servers and you like signals what if you had signals on the server so this is kind of like uh
[04:29:43]  an idea i guess kind of like live view where um my understanding is you could set the reactivity up on the on the server and then like i i mean i don't
[04:29:54]  even know what this does maybe i just have to dev on at some point and you can actually tell me what this is doing because when i look at this and i'm thinking
[04:30:01]  this whole thing is client i'm like do i send the javascript for a minute i get the whole thing where it's creating signals and it's using those signals so
[04:30:06]  that like the live connection keeps it live but is this client updating i'm not sure it's an interesting idea right um you know because you know obviously you get synchronization
[04:30:17]  all this stuff we and you know i i i think this is a if you can get past you know dateless i think this is interesting i was very impressed when i had
[04:30:30]  live view js on the stream um you know a while back because of how simple the model was it was as simple as like a single page app simple like basically on the
[04:30:39]  extremes of models very simple when you're in the middle of the hydration and all that stuff things get really tough and um um i i actually two weeks ago wrote my thoughts
[04:30:56]  on on this um another one of these um articles i think i might have shared this one somewhere but when uh seb was talking about the using um use server for more i
[04:31:09]  started thinking about this like myself uh i guess it was before he's actually said that i'd already been kind of thinking along these lines but you know there's different types of
[04:31:19]  solutions like server only signals like live view equivalent where you can basically send the minimal to the client and just have the signals update and do pinpoint updates right now most of them use
[04:31:30]  like morph dom and do like these like diffs but what if you could like restrict it not at like a super sub component level like have fine-grained rendering on
[04:31:41]  the server like solo does and then just like send the updates over the wire you know in a granular way might be might be pretty cool um obviously client only signals this is kind
[04:31:51]  of like what solo does today where we can just use server in places um and i can and and then what if you want to like shift the the thing kind of like
[04:32:01]  you know move stuff back and forth what if you have both you know because the cool thing about this is um yeah i i i started having this idea what if create async
[04:32:13]  which i've been talking about for weeks on the stream as like a new async permit what if it didn't only support promises what if it supported async iterables
[04:32:22]  and for you people who don't know what async iterables are it's a it shows up on a symbol on a return type but if you ever have an async
[04:32:30]  generator function like a generator function like that like yields await statements you get what you get back is an async iterable um readable streams are async iterables um rx
[04:32:42] js observables are actually async iterables they can be pulled in the same way so if an async primitive async primitive supported async iterables you basically that
[04:32:54]  each time the data comes here it just updates you'd basically have a built-in um mechanism and you could say that the only like the initial run here is when it's
[04:33:04]  suspending until it gets the first data back and then it just has a stream of data to the back end right this is what i mean by an async generator function right
[04:33:11]  it's like yield await promise resolve this promise resolve b and the funniest thing is and here's a readable stream that's also and maybe a server-side signal access there
[04:33:21]  i was like maybe if you sit a signal with an async iterable i mean that's a stretch but the funny thing is you might be familiar with solid and i showed
[04:33:29]  it here is you can you can do this with our use server we support async iterables with our server functions um because they that's how we stream back stuff it's
[04:33:41]  like a readable stream so it's you could picture that you could have you know create async subscribe to like a user or something user id and then the use server here
[04:33:54]  with that id sets up this thing and as long as this you know is open it just continues to send it and this is just using fetch i mean we could talk about service
[04:34:05]  and events and web sockets but it's interesting that even today in solstart i mean we don't have this create async support for async iterables but if
[04:34:11]  you did you would almost immediately get streaming support as a as a primitive into uh the reactivity and because this side is guaranteed to be handled by my super asynchronous that i've
[04:34:22]  been shouting about for solid 2.0 everything downstream of sync would just work beautifully right the thing is service and events are one way and uh the fetch is one way i mean
[04:34:36]  to be fair actually i was i was thinking it was actually kind of funny like what what if uh the i'm i'm explaining one way here with you server because i
[04:34:46] 'm still picturing that you'd update data you know using like an action or something like a server function and then once you've set the state it would get picked up by
[04:34:55]  these like things you know awaiting data and then kind of send them back out but you know i started thinking okay well can we do it with two-way well maybe because
[04:35:05]  if you can put a readable stream as a request body too it's not just the response being readable stream but if you could serialize a readable stream outwards then maybe you
[04:35:15]  could actually use fetch even for two ways like don't get me wrong you you could you could just say like configuration wise like use server use fetch or use web or web so
[04:35:25] ckets like it's probably possible to like configure the protocol and the communication behind this right because use server is just a reference it's just a way to tell the bundler
[04:35:35]  how to split the package the actual implementation could be configurable but you know i started thinking about like crazy stuff like what if um you wanted to be like pass signal over the
[04:35:47]  wire so like then you could have memos on the server that listen to signals that you pass through i think this is a extreme like you see the difference of what i
[04:35:55]  did up here sorry when i get to those reasonable examples every time the user id goes it creates a new fetch request but usually you're going to subscribe to one user and then
[04:36:04]  you get the stream and then it's like swap again tear down get a new stream so it makes another request and when that happens that's when they async you know
[04:36:14]  they're like we're entering suspense or transition but what if what if you could kind of sorry where is it two-way communication right here what if you could like send the
[04:36:25]  signal over the wire somehow see how i'm passing user id i'm not calling as a function and then it doesn't actually cause create async to run again it just causes
[04:36:36]  this memo on the server to run again which then it's update value through here triggers i don't know if there's a use case for it but i just started thinking
[04:36:48]  okay that's pretty cool yeah right i mean people could use different underlying technologies but i was like maybe you could do it with fetch kind of interesting right real time press well
[04:37:06]  i'm saying but the difference between this and i guess yeah i'm looking only at getters like create async i don't know if there's a use case for two
[04:37:18] -way in this way that i'm talking about like direct signals probably more interesting i don't know if like use server is the right syntax for it but i started thinking like
[04:37:29]  what if you could like say if you exported a signal or an async iterable from a file what if importing it automatically did it for you i i think i explain
[04:37:38]  why that's probably isn't going to work nicely because we can't tell the difference between server functions so i was like toying around with syntaxes but it would be interesting
[04:37:46]  if you could essentially just be like use server export a signal and then import it and then essentially like i don't know how useful this one is because usually you want to
[04:37:57]  subscribe to something like it's it's if you have a database you need to subscribe to a specific model you know not every change in the database so how do you i don
[04:38:07] 't know how how to pass input into this one right so like it's kind of interesting you know yeah i'm not i'm not i'm not actually sure if this
[04:38:22]  is a great pattern but i i i think that we're because of ai and because of you know this kind of stuff we were talking about earlier for why people are looking
[04:38:33]  at like um like uh the server sent uis i think i think there's a lot more potential space here if you're talking about solutions that are not completely stateless maybe
[04:38:49]  the state just needs to be serializable maybe you have durable objects i don't know i think i think there's something interesting here um i'm i will drop this i
[04:38:58]  already dropped this in solos chat a while ago but i'll drop this in here in case anyone cares to read it you know server dollar and quick it's with me if
[04:39:12]  you use it as an initial function you can make it work the same way just you you just check the content type yeah i mean are you server uh does do async
[04:39:26]  iterables i was more commenting on like this is this this trick here is a is a compiler trick like like so like the the syntax difference here i don't know maybe you
[04:39:45]  commented this much earlier yeah it's like it's like the like it's because i can't differentiate um from the syntax like like whether like i i my idea here was
[04:39:59]  like using a proxy essentially and then going okay yeah this is a signal because like i want typescript to work um i guess this would have the right types yeah so actually types
[04:40:09] cript would work for this it's more of like i had a reason i have to read this again tricky part is the client doesn't know what sort of reference it's
[04:40:17]  getting so you'd have to tell it somehow funny enough like it's like it's kind of like the problem i have the why the get api is designed the way it
[04:40:24]  is in solid start server functions like we have we need to even though the reference is a proxy we still need to know what how to call it so to speak like i can
[04:40:35]  make it that all destructuring is is automatically it but what if you have like a memo like we need some way when we have this reference to know what we're
[04:40:44]  dealing with um before we even make a call is what i was trying to say i don't know if that makes any sense yeah i mean you could use a different directive there
[04:41:02] 's different there's different thoughts here i'm just not sure yet use socket yeah but i think the biggest thing you have to be careful of and part of the reason why
[04:41:13]  react does not use use action is you don't want to make a billion of these you don't want like it's actually one of the reasons i i moved away from server
[04:41:21]  dollar sign is because i realized that it would lead to like everything dollar sign and that's less powerful than you know we have to be very particular about the characteristics of the
[04:41:34]  reference i think i want to say it doesn't necessarily have to represent a single technology it has to it has to represent a specific type of idea anyway bling bling bl
[04:41:48] ing bling bling yeah i mean yeah it was one of the ultimate deciders beside the fact that react is pretty much kind of strong-armed us here it's just
[04:41:57]  you don't it's it's very tempting and way too easy to make like a billion of these but but the scariest thing about a billion of these is like rxjs
[04:42:07]  like look at how many operators we have like that's that's not a good thing you know it is but it's not like it's scary yeah well you have to choose
[04:42:21]  what you want those composable things are to be right um hooks reactive primitives are fine because they're they're extension of the same concept they're all the thing like
[04:42:36]  the dollar sign for the most part and quick is all the same thing i guess quick has a generalizable dollar sign version where you can like make a dollar sign function out
[04:42:46]  of anything so they have a way of defining the rules at runtime which i think is probably i think that's fair but like i'm talking about i guess use servers challenge here
[04:42:56]  is like the kind of magic like what does it mean for an import or an export to be used server what what is it actually exporting to to the client or whatever the
[04:43:06]  consistent behavior there are the references is more important i think than anything anyways use php yeah i know everyone yeah yeah yeah okay okay anyway um oh yeah i i think i
[04:43:24]  think there's a lot of potentials i was very excited to see devs post and obviously i've been thinking about this recently and he's been bugging me forever anyways
[04:43:35]  like not bugging but kind of like hey you know um you know it's google io yeah i i'm just going back in time apparently aws streaming didn't work
[04:43:52]  properly until dax fixed it um i don't know if everyone saw this i'm going to post this one just because it's so good i mean we need references you know
[04:44:02]  we've been handing this one out a bit to people with react teams trying to say hey do you want to try solid this is one of our you know kind of success
[04:44:11]  cases uh for a startup that decided to take a chance with solid and build a kind of google docs style um thing anyway yeah i think yeah i don't when when's the
[04:44:29]  last time i streamed i think i think i think we're at the end here um i want to quickly look here but i think i streamed with wow april
[04:44:43]  19th it's been over a month so i haven't even told you guys about the awesome new fellowship program you know what i'm gonna take a minute on this stuff just
[04:44:56]  to kind of wrap up here we added two new fellowships um recently and they're actually it's funny everyone i told you about that thread where people are saying oh ecosystem
[04:45:07]  ecosystem but like we're investing in our biggest uh component libraries uh so we're putting money towards the maintenance and uh you know upkeep and improvement of both cobalt and
[04:45:20]  corvu um which are very very cool component libraries um in our ecosystem if you haven't checked them out you should because i hear people all day long talking about these amazing
[04:45:33]  libraries in react i think we we've got some good options here corvu is a collection of open source ui premise for solid yes that are unstyled accessible aimed to
[04:45:43]  be highly customizable right so yeah i don't know i'm pretty sure if we look we'll find a equivalent react library that is exceptionally popular that it takes this level i don
[04:45:56] 't know anything about component libraries it's gone way too complex for me to figure out what the difference is between all the different ones but all i know is this stuff is
[04:46:05]  yeah pretty good yeah corvu plus cobalt solid ui i don't even know what that means that it sounds like an equation of some kind yeah so it's very
[04:46:19]  awesome to be able to support these kind of things because now you know nowadays and you'll see this dave jumping in on the threads and people are like oh ecosystem ecosystem
[04:46:27]  ecosystem he's like okay what are you looking for because legitimately we can answer the simple like ecosystem means a different thing now than it meant a year ago even when people say you
[04:46:36]  know comparing solids ecosystem to react it's not about not being able to find solutions that they need it's about like the number of s maybe maybe it's not even the
[04:46:47]  number solution it it it's training it's it's it's it means a much more extended thing than simply like can you do this in solid and do those things exist
[04:46:58]  because the answer is typically yes ecosystem means gatekeeping i i a little bit doesn't it yeah i i uh he phrased it he's phrased it so well oh sorry
[04:47:15]  what what's solid ui.com solid ui.com yeah i'll take that build your component library did i did i put the right one in beautifully designed components that
[04:47:37]  let you copy and paste accessible customer open search i don't even so yeah i don't know anything about this but i'm sure people who are looking at this are like
[04:48:06]  wow this is exactly what i was looking for so yeah solid ui is like shad cdm built on top of cobalt and corbu yeah so this is i
[04:48:19]  guess this is the hot stuff this is what everyone's like nikil i asked him like at one point i'm like why are you building your stuff in react and he
[04:48:25] 's like i can't build start a project without shad cbn that's what he said to me and i was like okay i have no clue what you're talking about and
[04:48:33]  i looked it up i'm like it's been around for four months like this was like a almost a year ago and i'm like how how can you not start any project
[04:48:42]  without it it's been out for like no time um well it led to vinci so uh it's all good anyway anyway um oh yeah shad cn versus shad c
[04:49:07] dn what does this even what what does this even mean i i i'm just i'm i'm not cool anymore uh milky stream was fun um js party this was
[04:49:19]  actually relatively really good talking about the future of solid and stuff i i i my first time on js party this one is actually one of the best podcasts that i've done
[04:49:33]  all year um people comparing signals to go to statements and i said they're backlinked i don't even want to argue about this anymore yeah here's the last one oh
[04:49:44]  programming jokes yeah i don't know i feel like last stream i was talking about how go to is always considered like the worst thing and people you say like the trade office
[04:49:57]  signals is like that kind of you know linking but the truth of the matter is like signals do backlink which is why we can build stuff like dev tools yeah i don't
[04:50:07]  know i don't even want to get into it i feel like i feel like that's old news and i feel like we're up to date unfortunately it's going to
[04:50:13]  be a while before i'm uh before i'm streaming again because um i have family vacation and i'm at react summit the next couple weeks but um i'm just really happy
[04:50:26]  to have seen all the growth around the solid ecosystem the last little bit um both leeching solid start and now like you know yeah no now just like seeing like we
[04:50:42]  release stuff and like people you know i mean i was involved in this but it's just cool to have content just flow without having to like build it all ourselves so very cool
[04:50:54]  i i don't even know what usewallet is but i'm stoked to see that solid getting shortlisted as like you know second or third major framework supporting a lot
[04:51:07]  of libraries um so yeah i don't know anyway just signals everywhere okay i'm good i'm done i i don't have anything more this week i it'll be in another
[04:51:24]  few weeks till i'm back again but um it was very awesome to hang out with all you and honestly to get a bit of a grip on what you know the react
[04:51:38]  forget stuff i i think it will end up being fairly predictable kind of what we expected but you know now we know we can we we don't have to say suspicion we we
[04:51:52]  went and we looked at it and we and we tested it and we understood it we see the differences we see some impact on performance and and now now we can say
[04:52:11]  we know oh chocolate easter bunny mentioned do i do i actually have that anywhere uh like looking uh oh the uh the the old sign we used to hang this in our
[04:52:37]  practice place anyways it's almost five hours i am hungry i'm thirsty i'm not out of water yet i don't think there's anyone to rate at this time i
[04:52:59]  don't know yeah i think i think i think we're just going to call it an evening all right all right everyone have a good one until next time all right everyone
[04:53:10]  have a good one until next time all right everyone have a good one until next time all right everyone have a good one until next time all right everyone have a good one until
[04:53:10]  next time all right everyone have a good one until next time all right everyone have a good one until next time