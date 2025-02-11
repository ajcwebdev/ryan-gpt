---
showLink: "https://www.youtube.com/watch?v=7hpUcRGgxq8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "First Look at Analog w/ Brandon Roberts"
description: ""
publishDate: "2023-07-22"
coverImage: "https://i.ytimg.com/vi/7hpUcRGgxq8/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 7-10 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 05:19:13, meaning the transcript is 5 hours and 19 minutes and there should be around 30 chapters).
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

[00:00:00]  All right hello everyone and welcome to my stream today. We're just gonna get started up here in a minute but as you know we gotta kill some pre-roll and
[00:00:10]  we gotta remind everyone that we're live so I probably should just get to it. I'm pretty excited about the stream today because I get to, as you know I've
[00:00:20]  been building a meta framework for myself solid start and it's been a long process it's you know I never wanted to build a meta framework originally I was working on solid
[00:00:30]  I was like okay sweet someone else will build it but you know we kept on getting you know the ask people kept on being like hey I want you need something like next and
[00:00:38]  I was like no that's too much work never do it no it's crazy but then Vite2 came out and I was like okay okay okay I mean actually I was
[00:00:47]  looking at Snowpack actually first to be fair Snowpack came out and and they had SSR support and I was like okay this might be a real thing and then V
[00:00:55] ite2 and I was like okay yeah this is the thing and it's kind of crazy to you know that realization where it went from something that I was like yeah never in
[00:01:03]  a million years too much work to realizing of something that we could actually build and a lot of that comes down to Vite. So I'm obviously very interested to hear a
[00:01:13]  story of other authors you know working on meta frameworks and how you know Vite has impacted that and what it's enabled especially in this case analog which we'll be looking
[00:01:22]  at today is built on angular which you know is kind of historically been known for having its own tool chain kind of being kind of separate from the rest of the JavaScript ecosystem so
[00:01:31]  it's pretty it's pretty cool to see you know a meta framework being built with a lot of the same tooling yeah hey everyone come say hi in the chat eh what
[00:01:43]  as you come in I'm I'm just giving the spiel and also I should probably let's see here um I'm just gonna haven't actually shared my screen yet uh
[00:01:54]  entire screen this one yeah let's uh let's retweet this and tell people that we're we're live here we're gonna have Brandon join us in a few minutes
[00:02:05]  and it's gonna be pretty good yeah I was just looking at this cover I was actually having some fun trying to figure out what I wanted to do for this right analog kept
[00:02:15]  on making me think of like circuits and clocks um and yeah I was trying to think of the biggest flashiest thing I could come up with um yeah it's that I
[00:02:26]  could showcase the logo with eh it works um we're live what is it uh htp uh actually twitter is smart enough that if I go twitch dot tv slash ryan
[00:02:39]  solid this should work okay I think whatever whatever okay fine I'm not risking it all right yeah good people coming into the chat let's get past that uh twitch pre-
[00:03:02] roll eh yeah all right plus I know I know I it's interesting I never really expected originally when I started streaming um just because of my interests and stuff that uh the
[00:03:17]  angular folks would be like a big part of you know our viewership because I talk a lot of reactivity which was I mean signals not angular has rxcs but I
[00:03:29]  talk a lot like react and I wasn't expecting it but um some of our angular videos have been some of our best videos to date in terms of viewership over time especially
[00:03:31]  like the one we have with the core team when we had uh Alex and Pavel join us uh live to talk about signals um so I you know I'm pretty excited
[00:03:38]  about about that I there's and even when minko came and tried to teach me angular and how dependency injection works so yeah I mean there is an interest out there angular
[00:03:43] 's been kind of on a bit of resurgence people are rooting for angular it's kind of funny how you go from the like being the big most popular framework to being
[00:03:52]  almost like an underdog story again like it's it's it's kind of cool to see because I think I showed this before actually you know what I'm gonna show
[00:04:00]  this right now while we wait for people to flood in right uh what is it state of javascript right if I if I go back I forget which year it was
[00:04:08]  maybe I mean I should get the latest right is that the latest and I went to the like obviously um where is it libraries frontend let's see it okay yeah this
[00:04:22]  year was more impressive on my story but angular's the only javascript framework that I know in history that has like declined to tighten greatly declined to decline and then started
[00:04:33]  crawling back up I'm just I'm just throwing that out here everybody else usually like sure there's a little variation here but usually when once you're down you're down and
[00:04:54]  out like here's ember you know what I mean it's not just frontend we can go back end frameworks too it's a little variation here but usually when once you
[00:05:01] 're down you're down and out like here's ember you know what I mean it's not just frontend we can go back end frameworks too it's a little variation
[00:05:01]  here but usually once you're down you're down you're down and out like here's ember you know what I mean it's not just frontend we can go back
[00:05:01]  end frameworks too it's just like like here's like here's gatsby like so angular angular is still very much alive and kicking you know yeah no twitch is great
[00:05:11]  for the chat I actually should pull up twitch in another window because I miss all those wonderful twitch specific features through the streamer chat like I don't get to see your subscriptions
[00:05:25]  I don't get to see um uh you know first times chatter all that kind of stuff easy fixer skipping pre-rolls yeah you can sub yes obviously you can
[00:05:37]  sub yeah the twitch did the link not work that's we have way more people in youtube today than in twitch how's that going okay yeah okay they're starting to come in
[00:05:47]  okay good good good all right angular was the first framework I used I started in v11 okay that's not that long ago but I I found the story a lot recently has
[00:06:00]  been like the last five there's been a lot of react that when I talked to a lot of newer developers are like there's it's not about html c
[00:06:07] ss or you know anything else it's just like I learned web dev in this bubble there was react to be fair during that same time there was also angular but um it was
[00:06:16]  very different at the time when angular js first showed up on the scene yeah see we got some angular fans here right so yeah no this is good this is good uh there
[00:06:32]  we go people are starting to show up I said those pre-rolls are deadly all right wish angular elements forgot my love lit is lit by angular rocks yeah I mean
[00:06:48]  web components is a whole other thing I don't even know if I'm going to talk about those today but yeah I it's interesting that within google itself they've had a
[00:06:55]  lot of fracturing but this happens at any large company right like different people different objectives working on spaces that could be considered similar and then you end up with multiple solutions to
[00:07:06]  the same sort of problem at least it gets yeah yeah can we have the twitch link yeah sure sure it should just be twitch tv slash ryan solid I think I might
[00:07:21]  have to make sure that I actually have the whole https colon okay putting that out there okay so we probably should get started here because you guys have probably seen seen enough from just
[00:07:34]  having my my face up here and we have a guest today um to talk about angular and about his meta framework analog which is built on top of angular so um like give me
[00:07:45]  one second I know that's like the perfect lead in but yeah I I'm like behind on my my my uh banners and stuff all right here we go okay let
[00:07:57] 's try that again obviously you you all have uh seen enough my my smug mug here that we should actually bring on our guest today um to talk about angular and more
[00:08:10]  importantly his meta framework analog uh which is built on top of angular so um let's let's welcome brandon roberts to the stream hey man hey how are you doing
[00:08:23]  good how are you i'm doing pretty good you know um it's a nice sweltering hot day here in san jose um these lights are gonna just burn me
[00:08:33]  up in no time um yeah it's not it's not as as hot here today but yeah we've been having some of that that heat also not maybe not so much as
[00:08:41]  out there but yeah somewhat yeah so i'm super stoked to have you join us as i mentioned before i was a you know a javascript library framework author and i've
[00:08:51]  now found myself being a meta framework author something we have in common um where you have been building um a javascript meta framework in angular but before we actually talk about
[00:09:02]  analog let's talk about angular just for a moment because like i i guess why angular like what's what what's your background or history with angular what what led you to building
[00:09:12]  a meta framework in angular yeah yeah so that it go it goes back well it goes back some years now at this point so um i've been in the angular community probably
[00:09:25]  seven or eight years now and but prior to that i was a back-end developer i was doing php had done some c sharp uh vb uh vb.net
[00:09:36]  that that was even further back from that uh further back there but uh but yeah so i was uh doing back-end work at a job they were doing they were doing
[00:09:47]  like full stack php back then so they were like everything was on the server uh everything was rendered that way but there were i was actually working on a it was a public
[00:09:56]  facing site uh and they were migrating it from just php four or whatever it was back then to php on the back end and angular js on or angular js what
[00:10:07]  it is called now on the on the front end so uh i i had always wanted to get into like the front end ecosystem so uh my friend mike mike ryan who
[00:10:18] 's uh we've worked on projects before open source projects before too uh which i'll get into but he he asked me if i wanted to try some work on angular js and
[00:10:28]  in addition to like doing the back-end work so i was like yeah sure i'll get you know i'll see what uh what we can try to get going and build
[00:10:36]  so i kind of started down that path of doing front-end angular js work back then but this was around about the time that angular js was uh i guess ramping
[00:10:46]  down and like angular 2 at the time was in alpha stage i believe so this is like 2015 ish yeah 2014 2015 yeah around about that time um so yeah i i
[00:11:00]  had gotten in angular 2 was coming along um and like i said it hadn't even gotten shipped yet officially so and where we worked we kind of had the luxury of being able
[00:11:14]  to basically ship basically ship whatever we wanted to so if we wanted to you know ship cutting edge or be on the bleeding edge of uh projects and things we we got to pick
[00:11:24]  our stack so right uh so yeah we were we were shipping we were shipping angular 2 uh projects while it was still in alpha beta stages and that was initially how i got
[00:11:37]  involved in well at least got introduced to angular js and then angular too uh but how i really got involved in the community was uh basically like trying to i wanted i always wanted
[00:11:49]  to start contributing back to open source so i basically jumped in on github and because angular 2 was you know still people were still trying to figure it out and we
[00:11:59]  had done a good amount of work on it uh i was going into github i was helping people with issues uh i was trying to just can kind of getting involved in
[00:12:08]  the in the community with uh angular so i would you know help people there i ended up you know somebody that was working on the angular more directly uh on the docs they asked
[00:12:20]  if i wanted to they noticed i could i could pretty i could communicate pretty well with uh as far as helping people with issues and things like that so i ended up working
[00:12:29]  on the angular docs team uh for a stretch also uh okay in the community so yeah so just to kind of get the get that you're building angular 2 projects that like
[00:12:42]  ahead of angular 2 getting released which is the first thing that that caught my head i don't no one does that anymore like everybody's like oh you know that's experimental you
[00:12:52]  know i've noticed the huge repulsion against like not proven stuff these days whereas like if you go back to 2013 14 15 people are like oh yeah this has been around
[00:13:01]  in beta for like six months like let's let's go but um but the other thing here is you got involved in open source and that's huge um yeah what how like
[00:13:11]  how what did that look like initially for you i'm just i'm digging in a little on this but i just because the open source angle is like kind of obviously interesting to
[00:13:19]  me like um was this just something you had some time when you were like between stuff at work or did you like take this on yourself how did how did how did because
[00:13:29]  it led to you actually working on the official angular docs which is amazing um yes just elaborate a bit more on that yeah sure um i had like i said i had been wanting
[00:13:41]  to get involved in i've been like yeah i've been basically a consumer of open source for the longest like when i was uh much younger i used to i used to run
[00:13:51]  linux uh distributions and build all that stuff from scratch and uh i got exposure to like open source in that way but on the like consumer side of things and it was
[00:14:02]  something that i thought was like a kind of a large barrier to to contribute to because you know if i'm coming in looking at the linux kernel and all the machinery and
[00:14:14]  reviews it takes to contribute to that instead of looking at smaller projects it seems like a very large lift to to kind of get involved in open source but uh like as i
[00:14:24]  kind of moved along and kind of used some other projects then it became it became more obvious that open source was more approachable in other areas there's like it's not like
[00:14:36]  the linux kernel and nothing else there's like of course a multitude of uh open source projects out there so getting involved in angular kind of gave me that that window that foot
[00:14:48]  into the into the open source ecosystem i kind of found a place where i could slide in uh and it was it was great i mean the people who were on the angular
[00:14:57]  team at the time one of them being rob warmald who is the founder of another open source project that i worked on he uh he was like one of the first people i
[00:15:06]  kind of interacted with in the angular project and then you know it was you know i just came in i was like hey i want to help and it was like hey we need
[00:15:13]  some help so uh and then the other people in the community uh definitely gave me opportunities to to kind of thrive there so the one the first part was like i was doing
[00:15:25]  all this like in addition to my day job so i wasn't doing like open source at work or anything like that so it's always mostly always been like um nights and weekends
[00:15:36]  and um you know side side project work that kind of thing as far as contributing to open source but that's kind of how i how i initially got in and kind of
[00:15:45]  moved my way along the the the ecosystem there yeah no that's that's that's awesome here because like as you said you were just had an interest you you always kind of
[00:15:53]  you know interested in open source but you got to go you know something more attainable or like and then next as i said you you do some stuff you help a bit
[00:16:03]  and next thing you know you're writing docs um for a stint um when was that the you're working on the angular docs around what time period uh well i yeah i
[00:16:14]  had two stints on the docs this was around probably 2014 2015 um this was around angular 2 it was coming out of beta they had official like the official docs and stuff
[00:16:27]  up then uh so i was like doing the day job thing i was writing articles and things for the docs and working with the rest of the the docs team there and like in
[00:16:38]  addition to that i was still like helping people on github and and then i ended up getting involved in and most of these things like like i said kind of came out
[00:16:48]  of the the job that i had before where we got to experiment with a lot of things uh so we ended up basically building something that was like redux for uh angular
[00:16:58]  um which is called i mentioned rod warmall before which is the that opens us projects in grx so it's like uh redux and rx js kind of mixed together
[00:17:10]  uh which is like a combination that not many people were uh were necessarily interested in at the time but uh but yeah we we kind of shepherded that project alone i
[00:17:23]  mean there is what is it redux observable on the react side someone you try and do a similar thing i guess i can picture it but you're right it is an
[00:17:31]  interesting thing because you're mixing push-based reactivity with like a centralized synchronous store uh at least that's the re the reduxing i don't know if if it
[00:17:42]  was a little bit different in angular to suit rx more it's just i know how many i saw the redux observable side and that was like like you know what
[00:17:50] 's the other one redux saga on the generator side like sagas yeah you and you're like definitely like like it's a very cerebral place to live um you know they
[00:17:58] 're trying to figure out how all this all wires whereas yeah i would i imagine that because ngrx became kind of like de facto uh store technology or angular i imagine it
[00:18:08]  might have been a little bit more approachable but um yeah they yeah and that was that was kind of where i guess like my i guess i my footing in the ecosystem
[00:18:18]  kind of really grew was the ngrx project and uh right like i said rob started the project and then uh me and mike uh kind of took it over from there and
[00:18:27]  kind of ran with it and kind of built out a lot of the things uh like the thing that's similar to uh redux observable in ngrx is ng
[00:18:36] rx effects uh which is just like a side effect uh management library but right but yeah the yeah it ended up becoming like the choice uh in the ecosystem just because angular traditionally
[00:18:49]  hasn't i say angular as if it's a person but they they haven't taken a they didn't take like a stance on what you you should use for state management
[00:18:58]  so and people were looking for you know something to use in that area so we kind of slid into that spot and uh kind of kept iterating on on the project and
[00:19:08]  kind of grew it to to where it is today so yeah yeah that's really cool and it's actually very indicative of the time i think everybody was kind of that was the
[00:19:15]  thinking was attractive about say react and angular both was that you would start with like plain looking data almost and then you would just like they both had different mechanisms whether it was
[00:19:27]  reacts virtual dom or angular zone js but like they made it that you in theory didn't have to worry too much about how things change if you just like you could just use
[00:19:38]  plain data and it would update um it's very interesting to see how in both spaces that evolved in time to that people are to the not people we already said angler
[00:19:48]  wasn't a person um to the frameworks actually realizing that you know no no we we should probably make our data special and understand our changes because you're going to get there eventually
[00:19:59]  anyways but yeah that evolution was very i feel like it's like something that needed to happen i think the ecosystem needed to go through this whole cycle to understand where we are
[00:20:09]  and um on the english one yeah ngrx was like it's you know it's like you know when people talk about redux and react i'd say ngrx
[00:20:16]  even more so with angular than redux and react because redux got replaced by other things over time my understanding is ngrx is still to this day the yeah the
[00:20:25]  the store still yeah it's still widely widely used uh if we're just looking at like npm stats or whatever like one in six apps are still using and it's still
[00:20:37]  like our our downloads and things are still growing which is kind of indicative of of the project at in our like our team has grown over time it's just been like a a
[00:20:48]  nice project that uh that i'm proud of anyway that still i mean it's not that the project isn't going anywhere but yeah but yeah it's definitely growing over time
[00:20:55]  in the community and even with the like the evolution of angular and signals and everything like we're we're kind of rolling in with that with that space too just because we've
[00:21:05]  you know we've done it for a while so we've had conversations with the team too about you know what does a you know what does this world look like for like existing
[00:21:14]  apps or even going forward with in a world where like ngrx has been you know kind of like the mainstay for a long time so yeah no definitely know
[00:21:23]  that and that's awesome um so yeah working ngrx and then you know this is all through uh yeah i mean mid to 2010s um what yeah is there much more
[00:21:38]  like let's head towards analog how does how do you get from there to analog what what happened what do you see yeah so um so yeah like i'm working on ng
[00:21:51] rx i'm like and we're like building stuff with angular we kind of live in this sort of bubble kind of thing where you do things i call it like the angular
[00:21:59]  way like you kind of talked about this before where like angular does its own thing or kind of like on this island we're off on uh you got your own angular has
[00:22:08]  a very like comprehensive system its own tooling build tools and all that and uh just looking at like where the web because i've i mean i've been around the web for like
[00:22:19]  a long like a really long time at this point so uh just looking at where like the landscape of the web was going um tools like everybody was like using webpack and
[00:22:30]  then like v came along a few years ago a couple years ago or at this point but uh and it seemed like v came along and then like the resurgence of these like
[00:22:41]  better frameworks just started like popping up like svelte kid and next js if you want to you know call it a meta framework but the the thing and it was one
[00:22:50]  of those things like okay angular already does a lot but these other it seemed like people were coming at it from like a different approach as far as like the meta frameworks go as
[00:23:02]  far as what you get out of the box so that was kind of my my initial what i like said what i was looking at as the landscape of where meta frameworks were
[00:23:12]  before i even got the the like idea to kind of move forward with that so right right hey and i mean a key part of the meta framework thing is that they are full
[00:23:22]  stack and ssr and yes i know that angular did have some sort of ssr solution historically but i don't remember it was an angular universal yeah i don't
[00:23:33]  i don't know if anyone actually ever used it much i i like i never got the impression when even when i was like talking to people in the angular community that they
[00:23:40]  they spent much time with ssr uh generally speaking so that must be interesting yeah i got that that kind of impression also i mean yeah angular universal has been around for a
[00:23:51]  while and uh so there's there's angular universal which was uh it was still like i think like a community a community driven project uh i believe like patrick uh sta
[00:24:02] pleton patrick js as as i like the car people like to call him he him and a few other people jeff welpley and even uh jeff cross from
[00:24:11]  that works at nx now i think they were part of the people that were on there originally on that team uh trying to move the universal forward so yeah universal was a
[00:24:20]  solution that's out there uh for ssr and it does some things with ssg and pre-rendering too uh and then there's also scully which was
[00:24:29]  another like it had a it was it had more of a focus it was like a static site generator that's like it was like gatsby right uh but for angular so
[00:24:38]  uh it kind of wrapped around your angular app uh in that way to that you build static sites on top of that so there there have been some other projects out there that
[00:24:50]  of course predated uh analog but they weren't necessarily meta frameworks they were like universal does a little bit of this scully does a little bit of that uh and um but
[00:25:01]  they were still just kind of staying in in their like niche i would say as far as what they were offering and then of course like i said angular already is a framework
[00:25:12]  itself so trying to for me it was like part of it was i'll be honest it was like out of spite like like they're they're these other everybody else has a
[00:25:24]  meta framework out here why doesn't why can't angular have one also to kind of package up these kind of things on top of it to make the experience better there so uh
[00:25:35]  it kind of started out that way because i thought about it thought about starting the project even a long way before i actually tried to make put the pieces together to try to
[00:25:45]  make it work because i i was kind of like you i wanted i wanted somebody else to build the thing uh and then i could just like talk about the thing and use the
[00:25:54]  thing because uh then i wouldn't have to necessarily have the burden of uh all the maintenance and all the the things that come along with that but uh but like i said
[00:26:04]  at some point i i i wanted it uh bad enough that i was willing to like sink some time into it to see if it would at least go somewhere so uh so that
[00:26:13] 's kind of how i got the the motivation to to start the project at least this is sort of an aside but i was just interested does angular change much version to version
[00:26:23]  it was just like my company's using angular and universal for news public front in germany a lot but it's a bit of a struggle we're also still on v10
[00:26:28]  so that's part of the problem man yeah so yes uh angular does two major versions every year uh so every six months they do a major and the the angular has gone
[00:26:43]  through a good set of changes along the way that have held some projects back one one of those things being just like the ivy project or the ivy initiative i think whatever
[00:26:56]  you want to call it but ivy was like a rewrite an internal rewrite of the angular compiler and its rendering system but they wanted to do all this in like a backwards compatible
[00:27:08]  way where you could still one day you could flip over to ivy and ideally your app would still work the mostly the same way but that process took like uh v10
[00:27:20]  yeah let's do that process took like two or three years um and like angular i think slowed the the things around angular kind of slowed down around that time that they were doing
[00:27:34]  that but but yeah like i said two two majors every year and the goal has always to been not to break things as much as possible but people just invariably get stuck
[00:27:45]  on older versions because something that they were using didn't get updated or uh because it's it's hard to move like the titanic right because the ecosystem has to move along
[00:27:57]  with it so uh angular is still moving along but uh but the more of the some of those changes and things did hold some people or projects back that haven't been able
[00:28:08]  to upgrade yet gotcha okay yeah it was a little bit of an aside but i was just like thinking about that because you we were talking about angular 2 a moment ago and
[00:28:16]  then suddenly talking about migrating from 10 to 16 and i was like it's only been a few years i don't know many other frameworks that have gone through that many major
[00:28:26]  versions in that period of time but it's good i mean if you're on a cadence you have an expectation and it lets things keep on moving forward there's a positive
[00:28:32]  to that it was just um it was just yeah something that it was a little bit interesting a little bit unaccustomed to and a little like react suddenly showed up at react
[00:28:42]  15 but that's because they were in 0.14 0.13 and then they're just like they were like okay we're just going to instead of going 0.
[00:28:52] 15 we're just going to call it 15.0 there was never a react 1 or react 2 or whatever they just went straight they react 1 was basically react 15. oh
[00:29:00]  okay i did i today i did not know that i just i've all i guess maybe my first uh references to it probably around 15 16 and then yeah because i i
[00:29:11]  look at look at like the other projects like that and you look at react and it was like 16 to 17 or it was like four or five four years or so before they
[00:29:22]  bumped that next major so yeah i mean i i 15 wasn't really 1.0 but it was a big change to stability i guess like 13 like there's really from public
[00:29:31]  standpoint been like 13.13.14 15 uh 16 17 18. there's been about six versions of react like and the first couple kind of blurred together so like maybe
[00:29:42]  there's been four versions like that that's just what i you know so yeah it is a little bit different you know there's four versions of svelte um there's
[00:29:51]  uh there's three versions of you um so yeah yeah there's also a version of angular that never existed the version three version three which i kind of had a part in
[00:30:02]  but uh but uh that's a that's what maybe an inside inside joke that still lives to this day yeah yeah you know that's actually true i didn't i never saw
[00:30:10]  angular 3. there was angular 2 and angular 4. but yeah i was like i was counting by even numbers but it was it was more of like the uh what was
[00:30:19]  it html or there there went from like es3 to es5 like es4 just disappeared um so yeah the the yeah the inside story on that one is we we
[00:30:33]  built a router called njrx router and angular router wasn't necessarily settled at the time so what we ended up doing was folding njrx router into angular
[00:30:45]  and they just skipped from two to four because like we were on the that was the router was version three and uh the rest of the framework was still on version two so they
[00:30:55]  just like bumped everything to to version four so a nice little nice little back story there yeah okay okay cool cool yeah so yeah um yeah we're just talking angular stuff now
[00:31:07]  but yeah so veat yeah make a meta framework because you can because it's like let's show that angular can be part of this uh community you know that's moving forward
[00:31:19]  with meta framework what's hip what's cool what people are talking about on twitter um yeah i had yeah i had dug into like i said trying to put the pieces together and
[00:31:29]  it was the the choice was like do i want to go with webpack and try to put something together there with that or like i said veat was taking over basically
[00:31:37]  taking over the landscape and try to see if if we could get something working with that but uh and would angular even like fit into that model of how veat works and everything
[00:31:49]  so yeah that was uh like i said part of the initial initial uh challenge there to get those two things working together because like i said part of me we wanted angular to
[00:32:01]  get off of this island of uh well we like we're doing our own thing we don't necessarily interact with the community community-based tools i guess as much and that sort
[00:32:12]  of thing so uh that was that was that part of it part of where i wanted to use veat as kind of like a baseline also i think i've seen recently even
[00:32:21]  that there's some official templates that use veat these days or i saw an announcement or something i thought i saw minko post something like a month or so ago
[00:32:31]  like veat has actually come into the angular ecosystem beyond analog now well yeah veat uh angular does use veat today but it's only as a dev server so it doesn
[00:32:43] 't necessarily take full advantage of uh veat's like build pipeline they have a solution there where they're using like es build uh to compile everything and then it uses uh
[00:32:55]  veat to veat's dev server to to serve those artifacts and that's kind of how the the infrastructure is kind of moving along there right okay yeah i mean it's
[00:33:08]  still cool to kind of see them move forward but yeah let's uh let's talk a little bit more analog um so yeah i guess what when when i guess was was
[00:33:18]  it shortly after v2 when this all got started like it was the same time that i started looking at it was a little bit later i i first heard of analog at the
[00:33:26]  vconf um last year but um yeah i think it was um i think it was v3 when i like really kind of started diving in to see what what would work
[00:33:39]  and what wouldn't work because like starting from scratch uh of course like angular has its own tooling but they they do have a package like the angular compiler you do have access to
[00:33:53]  use that so and i was kind of looking how that is used in the the regular angular tooling to see what how we could bridge the gap there with uh angular compiler and
[00:34:04]  veat so they they have a slightly different model on how angular compilation works versus how uh things integrate with veat because veat is very much about like single file compilation uh
[00:34:17]  hmr all those uh things that come along with it and angular's the angular compiler is built around uh it's it's built around typescript so it heavily embed basically
[00:34:29]  wraps the typescript compiler and adds like angular specific metadata to it so uh being able to use those two things together this was the initial step was getting the veat plugin
[00:34:43]  to be able to you know uh transform like angular source files and run it through uh beats build pipeline so yeah i see it thanks y'all for the thanks for the shout
[00:34:55]  out there uh but yeah that was the the initial idea on at least to get any of it working it had to start with the veat plugin because that's like that's
[00:35:05]  like the window into the veat ecosystem uh was for me right right and also to have ssr working with that too um i don't as i said i don
[00:35:14] 't know what the state of ssr was all i the only thing i know about angular ssr was that they didn't do hydration they just like re-rend
[00:35:22] ered like ssr and like they had two modes ssr and client rendering and they just put it together there's no like hydrate the thing uh is that that
[00:35:31] 's still true today or no there this this has helped the the ecosystem also but there there has been more of a focus on the ssr story in angular so uh
[00:35:44]  now it's in developer preview but there's client hydration that's uh included you can add client hydration to your to your ssr setup and we're not doing this destructive
[00:35:57]  hydration anymore where uh of course like i said you render it on the server then it basically destroys everything and and rebuilds the the entire tree but now it it renders
[00:36:08]  on the server and then on the client it will attach the correct listeners and hydrate the application directly in place without doing the whole destructive hydration destructive hydration uh as it used
[00:36:21]  to so uh that part has gotten better about the the uh the process of how you work with ssr and angular and analog uses uses that also but that was developed like
[00:36:33]  i said and went the uh in ang by the angular team itself and i believe in probably in conjunction with the probably chrome aurora uh team because they they i think they
[00:36:43]  have been doing like a big push on performance uh in the in the like broader ecosystem and uh i've i've heard more than once that uh angular out in the wild uh
[00:36:55]  it's not there has not been very fast and perform it uh traditionally so uh making them more of a they've made more of an effort to to work around that so
[00:37:04]  yeah no i yeah that makes a lot of sense and from the way you're talking about it sounds like these updates are something that you were very easily able to like the core
[00:37:12]  team access feature and then you were able to just like turn it on and it worked pretty straightforward then for you yeah the yeah the ssr like we i guess to
[00:37:20]  be to be clear we aren't using any of like the angular universal uh source or anything like that because they they have moved basically a lot of the thing the the internals
[00:37:34]  of what angular universal used to be like into the core framework so um so basically like any i don't say anybody but like any project can basically take advantage of those ss
[00:37:46] r api and client hydration and use those to build something with so yeah yeah analog is still building on top of on top of angular at the at the end of the day
[00:37:57]  for for those things yeah no that's that's good and i'm glad that it's that that's straightforward that's this is what i was sort of getting at when i
[00:38:04]  was talking about going between the different versions and stuff and it feels like there's been a shift in the angular team in the last i want to say i don't know how
[00:38:12]  long like it feels like the last year and a half uh roughly where like i don't know it's part of that you know revitalizing but it's also just feels
[00:38:23]  like it just a different angular team i know it's not completely i mean some of the the the old guard have moved on you know like mishko and igor
[00:38:30]  and all them have kind of moved on but it's more than that uh it feels like yeah i think i think so too uh the like it's interesting that you have that
[00:38:41]  because someone asked me if if mishko and igor ever moved on from angular did did that that i think it that it would survive uh past that and i was
[00:38:50]  like you know we'll have to see because i don't know you know once the like the kind of figureheads of a framework leave then you gotta see where like where things
[00:39:00]  are going to go from there but but like you said the things are definitely taking a turn and i i attribute that to people like sarah drasner and uh mink
[00:39:10] o getcha who are on the angular team and uh even other people simona it's too many people to name but there's definitely have been some people who have like
[00:39:19]  transitions off the the angular team and some people that are still there but the team that that is there now or that has they have like built up over i think the past couple
[00:39:30]  of years like you said it's definitely has a different take on how angular should be positioned and the things that they focus on so i think it's been healthy for the the
[00:39:40]  i think it's been healthy for angular and healthy for like the community uh in that way uh i did get a question i wanted to wait to the right time to ask
[00:39:48]  and this feels like the right time they're like are you afraid of angular doing their own meta framework is like they've been you know they've been pushing the boundary a bit
[00:39:57]  or is there any concern about them getting in the game themselves uh i have had that yes i i honestly that is in the back of the back of my mind but i
[00:40:08]  i do have conversations with the team about uh like what they're building so we do have a like a line of communication there so if they if they do then hey maybe uh
[00:40:18]  we'll see what what comes out of that but i haven't gotten any indication in the near future that they're that they're going to build their own thing but like i
[00:40:27]  said i i was on the fence of like building the thing in the first place but but it was more because i wanted to see it happen so if the if the team
[00:40:36]  sees that as a focus then we'll see where things land there because there's already some like overlap there now even with like angular universal and uh there's an upcoming feature where
[00:40:48]  angular angular cli will be doing ssr uh and ssg so there is some overlap there but i think there is a space for a meta framework in angular
[00:40:59]  even despite what the what the team does so yeah yeah i'm like trying to think of like i'm not under any ndas or anything angular team has been doing something
[00:41:07]  a lot of really cool stuff recently i mentioned a year ago that they did a bake-off with all a bunch of javascript frameworks where they like they're like hey
[00:41:15]  angular team and wiz team and you know people work in the frameworks team at google let's you do svelte app you do a react app you do a view app
[00:41:23]  see how it's different understand it and get perspective well they just did i mean again they just did another one except they did meta frameworks uh this past week so hey i hey
[00:41:37]  i i wasn't under nd8 also but i was there analog was a part of the yeah analog was part of the the meta frameworks in that group so uh i
[00:41:45]  take it as a vote of confidence uh right right i i think they're trying to understand what those pieces are needed for all the metaphors yeah saltstart was in that group
[00:41:55]  which surprised me because sometimes they're like you know i'm in beta and they're like a couple of at one point someone asked a question they're like where's this feature
[00:42:01]  i couldn't find any documentation on it i'm like yeah because uh we haven't implemented it yet um but yeah you know and i felt kit quick city i like i think
[00:42:10]  a whole most of the known meta frameworks were part of it and then this is part of that change of perspective that i'm talking about but it also suggests that um they
[00:42:18]  are looking at this from a primitive standpoint from a platform standpoint less so from uh like we're going to build a next competitor standpoint so i i just that's why i want
[00:42:28]  to throw that out there because uh yeah i had a suspicion analog would have been in that group and uh and uh and i think it i think it like you said looking
[00:42:37]  at i think that is where the the team more focuses on is these days it's like the primitives of the building blocks that enable things like uh analog to be built
[00:42:47]  or even other like solutions in that area so that's the part that that's the part where i think the at least the relationship there is healthy and that we're not like
[00:42:56]  trying to step on each other's toes or anything um in that way so uh if if they build some things that you know help it help improve what analog does you know i
[00:43:07] 'm all for it and even you can see that with the new things they have uh come out recently rfc's for so and even with signals and everything all these
[00:43:16]  things i feel like are moving angular angular along uh angular itself along now where it like stands in the in the ecosystem as a whole we'll see but uh but i like the
[00:43:27]  shift of where where things are going definitely so someone's asking here speaking angular performance times do you think angry signal like one of the y on the gsm approach mark i
[00:43:36]  feel like that's a question for me um right now i wouldn't expect a huge difference because signals are initially being used just as a way to like drive zone or drive like
[00:43:46]  the the existing change detection it's just like a a very coarse grained way of doing it phase two will make that better which they're already like designing out they have r
[00:43:57] cs for it phase three is when you finally get to there and at that point we might be seeing some pretty impressive stuff but we're probably a few years away from that
[00:44:05]  but the is the question that will will eventually get there um possibly i think there's certain constraints around the way angular works but i the one thing i've noticed about the team
[00:44:15]  is they're willing to kind of you know mess with the perception a little bit and as long as they have a migration path and one thing i've noticed is that work that
[00:44:24]  they did previously on the compiler and stuff has abstracted away a lot of those details to a point that and the templating that they can do more than you might expect
[00:44:32]  they can do just because they have that abstraction layer yeah uh i hope that's a good answer i i just couldn't say js framework i couldn't i couldn't help myself
[00:44:41]  that's your trigger word the js framework benchmark yeah but yeah uh yeah like you said being more like i said performance-minded uh like i said we'll we'll
[00:44:55]  see what the what the benchmarks show up in a few years like i want to see some the thing with i know we're talking about analog also but like i said the thing
[00:45:05]  about angular that has been with me for the longest time is i want to everybody's going like when is angular getting jsx i'm like i you know i don't i
[00:45:13]  don't see it happening because just for like from a control standpoint and uh they already have like their own templating language and everything so uh we'll see like what that
[00:45:23]  evolves into if it just like google's flavor of jsx but yeah but yeah yeah uh just to follow up on that signals don't actually make a huge difference in the benchmark
[00:45:34]  they make like the fractional like if like the difference between the speedy reactive system once makes no things most of that benchmark is just dumping dom elements onto the page um
[00:45:42]  so yeah i i there's there's other pieces to it as i said uh angular interestingly enough on a performance standpoint it's it was always interesting i'd always talk to angular
[00:45:54]  folks about performance and they always there's a perception in the wider ecosystem that angular wasn't very performing but when i talked to angular folks there was a perception that their stuff was
[00:46:02]  performing and i was always confused about this discrepancy and i realized that a lot of it had to do with like the problem scope like angular rarely ever micro benchmark
[00:46:11] ed but they would like look at some kind of larger thing and then make the determination on the performance on that which is actually a better way to determine performance but there was always
[00:46:20]  this like kind of gap between the people who would be doing micro benchmarks and people who were doing this kind of like trying to look at real worldish scenario characteristics thing um
[00:46:31]  but um yeah i i think i think there's just more awareness now of how that fits into the whole story now because the problem is most people when they pick up a framework
[00:46:40]  they go and they hear performance they go make some stupid test and it's the stupidest test it's like how fast can i update this text in a dom node and then
[00:46:47]  they go this is slow this is fast and it just so happens it's all really really good at those tests like really really really good but there's more to performance than
[00:46:57]  than that um so i will say this angular has managed over the years them and react are always around the same performance level except angular is usually always just a tiny bit in front
[00:47:08]  i don't know how like what what what the what like on my benchmarks stuff i don't know what the thing is but over time i've watched this over like almost a
[00:47:17]  decade uh they they seem to be always lockstep and angular always seems to be just like a tiny bit in front of react i don't know if that's just like
[00:47:24]  they're playing the long the long game on performance day so yeah it's it's interesting um anyway um okay so um okay i want to look at an analog here in a
[00:47:37]  minute and talk about it we're starting to get a little bit of qa uh type questions which is what i expected here i'm trying to think about if i want to
[00:47:46]  push them off too much but i actually i got before we get into it it's it's hard without looking at it for some uh tristan asks here with hindsight if
[00:47:53]  you could start analog again would you done differently you know um but yeah without seeing it it's harder for me to get that perspective from the audience standpoint but this is a very
[00:48:03]  probably a very good question so you go for it sure yeah i've i've talked about this um on twitter also about if i could do some things differently and one of
[00:48:15]  those things was uh being built on like the for some people don't know like analog is built on top of nitro as like its server engine um but the what i would
[00:48:28]  if i could go back and like have a fresh look at it today the way astro has come along and kind of built up that infrastructure to me like astro is
[00:48:38]  basically like a meta framework in a box like it has all the pieces to do ssr to do ssg uh to do api routes all those things are kind
[00:48:49]  of provided for you and and you can hook into astro's like infrastructure so one of those things would be to if i could start fresh i would look at using astro
[00:49:02]  as like the thing underneath um and i actually looked at doing that but the i think some of the things i ran into well some of them were technical and some were just
[00:49:13]  like uh people problems i guess if you want to if you want to call it that like on the on the technical side i think that things fit together well and i can make
[00:49:22]  them work uh on the people side of things they i think it would have been too far gone from the angular ecosystem to use astro uh in that way so that's
[00:49:33]  interesting sounds like we should share notes see i i went the other path and i've been tinkering with astro the last couple months where i've had time not at
[00:49:42]  conferences and obviously i've hit a lot of the technical snags in that and i'm like i'm you know i'm not gonna lie i'm i i didn't give
[00:49:49]  nitro a good enough first look so i think we need that we should share notes um yeah the yeah the i was like i said i was looking at because when i
[00:49:59]  when i started analog i was like uh i was a team of one uh trying to get the project off the ground before so and i didn't want to like have to rebuild
[00:50:10]  the whole world of like deployment targets and messing with uh browser support in different areas those all that stuff i wanted to try to get something that was working off the ground so
[00:50:23]  uh and i looked at nitro because i didn't know that nitro at first was like great practically decoupled from nuxt because nuxt uses nitro also uh
[00:50:34]  but it allowed it it felt like to me like nitro provided that that sweet spot of being able to drop it in something else and or drop it in uh another library
[00:50:46]  because it has a javascript api that you can hook into so uh yeah those were the that was like the friction the friction points for me was to get the project
[00:50:58]  going was not to have to rebuild everything from scratch and then not to have to support like cloudflare and netlify and every target out there from scratch it's not
[00:51:09]  fun yeah yeah we we built everything from scratch and now we're like that's what we regret about solid start we're like we should have not built everything from scratch but
[00:51:18]  yeah maybe we'll look at nitro a little bit uh and how it fits in when we look at this code but let's let's let's flip modes a little bit
[00:51:24]  here and start actually looking at what an analog project might look like or like what what analog looks like i don't know how i should get started here should i actually i'm
[00:51:32]  going to pull up the website just for a second so i can so i can take a look at this and we can talk to that a little bit and then maybe you
[00:51:41]  can show off some code here in a moment but i'm gonna yeah let's switch to this mode analog full stack angular meta framework beat power yeah i'm gonna i'm gonna
[00:51:52]  change the tagline here at some point but yeah that's the that's the one for today and trying to trying to do something that's you know less centered around meta frameworks
[00:52:00]  and kind of like something that that's a little more catchy but we'll see i know what i know what the goal is we just got to put it put it down
[00:52:08]  there so yeah that's that's that's the punch line today anyway what do we got here someone's like can i uh nathan's here can i get the elevator pitch
[00:52:16]  for analog okay the elevator pitch is uh it's a meta framework that helps you build and ship applications faster with angular so there's the elevator pitch all right so yeah we
[00:52:31]  got ssr and ssg what does hybrid mean in this i just it hybrid in this case means that you can still have ssr running but it's like
[00:52:41]  a combination of pre-render pages plus ssr gotcha gotcha you want to pre-render part of this the app and still have some other parts uh rendered
[00:52:50]  at at request time then it supports both of those right and this in fact was the feature that the angular team asked for that i was like not implemented yet so start it has
[00:53:00]  a fully static mode and a fully dynamic mode it doesn't have a half and half mode i added that in the angular inter or so the astro integration but i have not
[00:53:08]  that was the missing feature so this is a key feature here and then file-based routing and api ropes and this is the analog logo right here um yep let me
[00:53:18]  yeah bye yeah i i came up with the logo because i felt i've said this before like if you're going to go through all this work of trying to put a project
[00:53:25]  together you got to come up with a logo so people will recognize the thing so it still has the uh i think maybe you can see where it's going to yeah yeah i
[00:53:36]  mean because i i see i see a combination of the nuxt logo with the angular yeah because the nuxt logo looks like this with the angular red with like some kind
[00:53:48]  of analog signal across the top but that's that's so sorry the nuxt logo was not part of the intention here well sort of the well i'm going to blame it
[00:54:00]  on the triangles because nuxt logo has triangles the next js is triangles oh right for sale yeah yeah does next have triangles or is it just for salt yeah it's i
[00:54:12]  think it's for salt but yeah yeah yeah yeah yeah for sale logos triangles so yeah it kind of followed kind of followed in that path of of using triangles for the the logo
[00:54:23]  and then like i said the the kind of wave link in the middle there was kind of like the analog um the analog across in the logo there i had originally i didn
[00:54:33] 't really have a good name for the project at first yeah uh but there was another github project uh that had the name it was another person who tried to do something
[00:54:43]  crazy with angular and they the github repo was named analog so i was like hmm okay that was i kind of had the same idea it's a crazy idea but i
[00:54:53]  wanted to see it happen so i kind of lifted that name and was able to get the the domains and everything for it so the the branding was like intentional as far as
[00:55:03]  the project goes okay makes sense so solid start for angular or next or stout kit exactly that's that's what this is it's the the the full stack meta framework for
[00:55:13]  angular okay yeah i need to add i need to add solid start to the list there i don't have it uh in the intro there as far as other meta framework i think
[00:55:22]  none of these other ones are in beta i've been kind of we've been kind of dragging our feet it's fair you you you can add us when you you want
[00:55:30]  to i i have not been pushing solid start too hard on the advertised users i mean there's some companies using us in production i've been only pushing solid start on like here
[00:55:39] 's some crazy technological innovation you've never seen before that kind of angle um so we still need to stabilize it to a point where i feel better pushing it on people um
[00:55:49]  so to speak but yeah um you have a coi script it looks like yeah it makes it easy to get started yeah there's a couple of ways you can generate a new
[00:55:59]  project uh there's like the create analog way and then we also integrate with nx right spaces so if you have a because nx is like pretty big within the the angular
[00:56:10]  ecosystem also so if you want to like generate an analog project inside of an nx works nx workspace you can you can do that too right right so and then we
[00:56:19]  got routing we have api routes static site generation server-side rendering yeah i yeah i just want to quickly break for quick define event handler okay yeah so this is part of
[00:56:33]  uh like i said using nitro underneath and h3 is a part of that whole like njs yeah njs framework system so it allows us to like hook into that
[00:56:44]  for api routes uh in that way and this is kind of like i said driven through nitro but we kind of built a bridge internally in analog to kind of mill those
[00:56:53]  two things together yeah for those who aren't familiar with nitro the next js guys well sort of the next gis it's funny because this is not sponsored by there's
[00:57:02]  there's there's sorry this there's nux sorry i just say i meant nux the nux um there's a nux labs or like the nux company
[00:57:11]  which is independent slightly from the nux framework even though they sponsor work on the nux framework and then njs is like on the other side which is the core pieces that
[00:57:23]  are used in nux but completely open sourced and you know like different slightly different project lead like daniel is involved but he's not like the main guy where he
[00:57:32] 's like the next open source guy who's you know so but njs has nitro which is a web server engine that works on cloudflare netlify yep uh
[00:57:44]  dino edge for cell like everywhere h3 which they do you think it's just a whole bunch of it's like the unix philosophy a whole unplug in on storage it
[00:57:52] 's it's a whole bunch of small pieces that work across all the platforms so then like you don't have to worry about all this stuff um like unstorage for example
[00:58:00]  is a key value store that apparently works everywhere whether you're using kv stores in cloudflare or whether you you know have some other probably i wouldn't be surprised if
[00:58:12]  they get the the new versell kv uh in yeah it works yeah it already works with uh yeah for sale kv also yeah so there you go um does nitro
[00:58:21]  use the web standard fetch api it does not does it this is like no that's the one thing i found in my research although it looks like they there's they
[00:58:29] 're going to support uh standard web streams in their next version of h3 i heard but yeah yeah uh yeah that was one thing i did notice is that the the like it
[00:58:40]  doesn't use the standard request response uh model there but i think there is a way i've i've seen someone submit a pr i believe that has support for that but
[00:58:51]  like i said it has to go through h3 and and everything else before to make it to nitro but yeah that was one of the things i considered uh in that way
[00:59:00]  if i if i but i think you could like say you could probably support it if you wanted to uh but at least for getting something off the getting something off the ground it
[00:59:09]  works like it is today yeah what's cool about the the thing is we actually mentioned this to to daniel is when you go to nitro page they they show it
[00:59:20]  all as like it's almost like it's an own opinionated meta framework thing where you could kind of swap in any render you want yep but what what what what they don
[00:59:29] 't talk about which is actually cool and what i'm seeing in your project is instead nitro kind of aliases everything and you can kind of like use it all together
[00:59:37]  and they have a coi and they have everything but all the pieces are independently available this is why you were able to just like directly go to h3 library and go okay
[00:59:47]  i wanted to find an api route like nitro probably if i go here and go ap uh where is it routing api route like they have a whole convention and a
[00:59:57]  whole thing but you can still use the pieces without following nitro's specific conventions um if i understand properly so yeah that's it's definitely interesting to me but okay so
[01:00:09]  yeah i i maybe this is i'm like looking at the reference material maybe it's better just to um look at a project next next next yeah not the first time i've
[01:00:22]  seen that that name the next yeah but yeah yeah for solid the one that's mostly people consider is sexed um um because socks are nox doesn't really do it
[01:00:36]  anyway yeah but yeah i i've had enough of those um anyways uh let's let's next yeah okay let's how about how how would you just let's just get started
[01:00:50]  looking at actual nitro uh uh the analog project um how would you yeah sure i can uh share my screen here and all right i'm gonna dig into move this over
[01:01:04]  here share beautiful uh window to the screen um all right so i see your code editor so i think i can just pop this in yeah you are live now we can see
[01:01:21]  your vs code okay cool uh so i did i i'll admit i did the the i'm catering catering to the audience here and i did analog uh hacker news uh
[01:01:33]  like this with this project so uh we could drop the drop the i'll drop the link to it in the in the chat there but um or actually i i can i
[01:01:43]  can send it up to both yeah yeah let's do that but yes this is like a typical uh analog project uh that i dropped in there for people want to drop the link
[01:02:00]  there but but yeah on the surface the the setup here is is pretty standard here if you're like i guess from an angular point of view there are some subtle differences here
[01:02:09]  because like i said angular is about its own tooling it has a lot of its own tooling built in so you don't necessarily get access to much of the configuration but uh but
[01:02:19]  one thing i did want to do was to like i say integrate with veet so we have like the standard veet config here the analog plugin is kind of what drives
[01:02:28]  everything there and uh you have option uh pre-render routes here uh index.html is at the root um normally so that's pretty pretty standard fare there so uh digging
[01:02:42]  into some of these other files like the main if we look at i think in solid start there's like an entry client and an entry server yeah uh so here we have
[01:02:51]  like the main dot ts and this is like the client uh this is basically the entry on the client side yeah and uh then we have a main server here yeah and this does
[01:03:00]  the server side rendering like i said using standard angular apis with render application there so okay that part's uh pretty straightforward the part that kind of analog brings to this is uh
[01:03:14]  the file-based routing is one thing that that we have here so in our pages we do this by convention also we have our pages directory here okay and this turn looks
[01:03:27]  familiar yeah it does it yeah that's what like i said compared to like i said the other meta framers out there these are similar concepts so we have the stories uh route
[01:03:39]  here like i said i i use the i think i i use nikil's uh his um veet uh react server components example that i kind of migrated over from here
[01:03:51]  yeah uh yeah we got the stories page uh everything is defined with dot page dot ts yeah and so we have our components here with stories and this and these how you define like
[01:04:03]  the the route so this is like a catch-all route right with the three dots and the stories there um for that one so but you can have many different types of
[01:04:12]  routes if i wanted just to create like an about route then or a static route i could do it in about page dot ts and that will work there so the and the dot
[01:04:22]  page before the ts is just an indicator to the file-based writer like this is a page if it didn't have that it would treat it like something else yeah initially uh
[01:04:31]  we had a routes folder and everything that was a typescript file inside the routes folder was considered to be a route but as we kind of went along we noticed that people
[01:04:43]  wanted to like co-locate their components and things next to their pages so we ended up switching to like the page convention to only trick only treat those things with the dot
[01:04:55]  page extension as as routes do you never consider putting like a plus sign in front of it or anything like that no no that i don't i i did notice it but
[01:05:06]  i didn't want to go down that route the convention here is is a lot similar to uh the one for remix or even i think i would say even solid solid start yeah
[01:05:17]  it looks like it yeah as far as like the convention goes where like parent you can have like layout layout directory or layout files and layout directories but uh this one is
[01:05:27]  pretty pretty shallow there but no i didn't want to i didn't want to do the plus page and uh those extra files there that are common in other ones like uh s
[01:05:37] velte kit and in next.js so yeah it's interesting because yeah we got our convention from i think nuxt originally and i think remix is very similar to that and
[01:05:47]  old next was kind of similar but then they went kind of somewhere else uh i i was i was looking at all the different stuff but yeah let's get back to the
[01:05:54]  example here so you got the mapping between the different data types that looks familiar you have the you have the just top level template which has an app stories component so there's first
[01:06:05]  a top component which just has like the layout and then another component here which actually handles the yeah this display yeah so we have the yeah the the components themselves are just exported as
[01:06:17]  default uh because we're using angular's new standalone components uh and and that that was another thing that kind of unlocked what analog could do because before with module everything had to
[01:06:28]  be registered related to a module but with standalone components we can kind of we can declare everything a component needs uh within its imports so this one just has this dependency on the stories
[01:06:39]  component that gives us this here and then you have your controller code down here that i have for just fetching this this fetching this fetching the stories list there so
[01:06:50]  right um so yeah we have the the story like i said that looks familiar you can you know kind of did have some rxjs in here but that was just to uh
[01:07:01]  to kind of translate what translate the the map stories to like the making a http request this has signals already too if i'm understanding here you have your data services this is
[01:07:14]  there's an hn service a router service i don't know what the story ref is and then you have the stories come in as a a signal with an array of stories
[01:07:25]  okay yeah so yeah we yeah i'm i'm kind of building where kind of where angular is going uh with this example with using signals and everything so i'm using am using
[01:07:36]  a mix of signals and observables here but yeah we it has the signals are in developer preview but you can still use them today uh and get some more feedback about that
[01:07:48]  but uh yeah i hope you don't mind my questions just because i'm less than angular folk but if i understand this correctly the the when the component initializes um we get
[01:07:58]  an rx stream from the router that we look at the router and when it hits the right event message like the navigation end it maps out the completed url and you
[01:08:13]  use that url to pipe back into the hn service to do the data fetching and then and then until while this thing's mounted you do you you subscribe until it
[01:08:24] 's mounted and then you pull the story tap is like it's funny it's like it's like it's subscribe almost um and then you set with no side effects yet
[01:08:33]  and then you subs then you set the signal that we had above with the output from that so this this wires the router event all the way through to the signal that uh ends
[01:08:46]  up getting this the that set of stories and then those stories when they get set immediately get passed as a prop down to the app stories component okay yep yep everything kind of
[01:08:57]  flows in that yeah everything flows in that way and uh the kind of the reason that i had to go about doing it this way is because when you initially come into the component
[01:09:07]  we want to get because we have like two two streams of events here like this is a stream of events so when you if you're navigating between the tabs at the uh
[01:09:17]  if i go back here yeah if we go to new and then show so we're still navigating it within the same component but the url changed the only thing i'm disappointed
[01:09:28]  about this example is the header bar should be like a nice red color to match analog that's true yeah i i i i i went for uh functionality first and then and we
[01:09:40]  we we got a little behind on the on the pot on the the red polish so i'll i'll update that so people can see it in post as they say yeah other
[01:09:48]  thing i'm going to mention really quick just to do it the the hide stop sharing thing actually shows up on the stream so you just press just yeah yeah there you go yeah
[01:09:58]  just aside yeah there you go yeah okay cool uh yeah so like i said this is just driving the stories page and this is just a convention here if we want to go to
[01:10:09]  the uh stories you can define each page for some of the this is probably the most leg work that i had to do was like translating the the jsx to um like
[01:10:19]  angular's templating language but uh pretty standard stuff here with the routing you you might have actually an easier job with the very first version of the hacker news demo was actually a
[01:10:32]  i ported this from view which ironically would have had probably a closer syntax to angular's um but yeah yeah that was that was fun for me i had to convert all
[01:10:43]  the like vifs and v4s back into jsx and terminaries and stuff but anyways yeah okay yeah i went the other direction with that yeah but uh this is just
[01:10:53]  pulling for this one is a little less uh rx js heavy but uh we're just pulling the id well angular has this feature now where you can uh get the id
[01:11:05]  as an input or a prop uh for a route so a component input binding is used here to get the id um in which it matches the id over here for the page and
[01:11:16]  then we just grab the story uh for that uh to get the components and then this is kind of like that nested nested components that can kind of drill down uh
[01:11:25]  there so if we go back into here uh it gives you that same yeah uh tree nested tree of collapsing components yeah collapsing components there uh for angular that i'm sure people
[01:11:38]  will go and dig into and uh maybe you can you can use this for the the angular analog benchmarks or something like that so yeah yeah no this is this is a yeah
[01:11:49]  i i have a pretty good idea i know where this app ends up right now and it's it's it's because it's almost i don't want to call binary it
[01:11:57] 's just single page app with ssr it doesn't matter what your framework is we all come in on that death page i call it at around 48 on the lighthouse it
[01:12:05]  just there's nothing we can do about it um there's been a few that are slower on occasion but generally speaking it's just simply the fact of you get a large page
[01:12:14]  of comments you have so much to hydrate and that recursive hydration prevents frameworks from doing clever tricks to cheat so it i like the example but yeah i mean you can
[01:12:24]  see from the code the templating is pretty good and you and there's syntax highlighting this is this is good like i haven't been i used to use you know string templ
[01:12:32] ating i know that's like an unfair thing frameworks in the past but the tooling has caught up you know significantly so yeah the angular language service reveals code and even the webstorm
[01:12:44]  and other things have have the syntax highlighting for the angular templates there too i did want to point out uh one more thing that we talked about the kind of the client side
[01:12:53]  hydration there uh but here's the this was the thing that that allows the s kind of the ssr story to get better for angular it's the client hydration because if
[01:13:03]  we don't use this particular uh function here then it'll do it'll behave the way it used to where it does the destructive hydration every time you reload the reload the
[01:13:14]  page so as opposed to just attaching to the event listeners and kind of hydrating the hydrating the application from there it's interesting and it's just a provider angular's di
[01:13:25]  is so powerful that it it can represent even those kind of concepts with it that's that's crazy to me um yeah so uh i follow that yeah the the data complexity
[01:13:36]  on the stories page is definitely more complicated because it has to handle the route prams and the the wild card routes where the other ones you can just feed like the parameters straight
[01:13:45]  in through the data fetching so these ones are just straight component except for like the recursiveness of the comments can i see one of the components for like the like either
[01:13:55]  the comment or the stories just something that's yeah okay because these are a little bit like more straightforward because they don't have the they they just get props so yeah the component
[01:14:06]  is literally like here's my props add input i'm gathering is the prop representation in angular yeah yeah yeah because the yeah the components are classes uh we don't have like
[01:14:17]  async we don't have functional components in in angular um at least today so if if and when that happens we'll see what that looks like uh so i'm i am
[01:14:27]  interested in that but yeah inputs are analogous to props in uh solid or react or other other frameworks there and uh we get our styles that are like scoped by default if
[01:14:39]  you want to have ones that are just particular uh to this component too but yeah this is pretty standard uh angular template syntax as far as the router links uh this it it
[01:14:51]  routing in angular is different than like solid for example where you have like the a component there yeah and we use we just hook onto the the anchor tag itself and use like a
[01:15:02]  an attribute binding there to to build the route so this will look the same way in ssr and still render the hrefs and everything so yeah uh that part
[01:15:13]  uh of it there and then like inner html that's like set set dangerously html i can't remember what yeah all right solids is actually in our h
[01:15:21] tml we just we just did the same as you guys but yeah react is dangerously set inner html and then there's an object with like a property on it
[01:15:29]  um yeah uh yeah but yeah i mean i i i get a feel that's what that's what i meant like so with the ones with the data is not a concern
[01:15:38]  you do actually spend in a simple app like this most of your time in the templating and then it's just a matter of yeah some the the way that the the i
[01:15:48]  guess the injection works i don't know what these imports are but i'm gathering it's just like that's how you indicate that these are the components that you need like right
[01:15:55]  router link is used inside here yeah these are like the depend basically the dependencies of the of the template uh right for this or they could have providers in here too but these
[01:16:04]  are the things that the template depends on like the router link is here and common module brings in things like ngf and ng4 uh which that'll change when uh angular
[01:16:14]  has an rfc out for control flow uh syntax uh which will change how that how that works in the future and then the comment comment component is just like a self-
[01:16:26] referencing uh self-referencing to this component because we're like building that tree right tree down and the toggle component uh around that which kind of layers this uh
[01:16:36]  this here because we're using i'm using in angular what's called content projection but in solid this would be like children yeah uh something similar to that so exactly yeah yeah
[01:16:48]  i it's cool angular x is a term for it okay because when i was trying to explain like that mechanism michael was the first one who tipped me off and he
[01:16:56] 's like oh yeah you mean uh uh projection and i was like oh okay good that's good because it actually helps explain concepts like rscs actually funnily enough um
[01:17:05]  oh i i love this question this is a good question i i think i know the answer to this question but inspecting analog hacking news app hl there's these empty
[01:17:14]  comment tags within the allies what are these for do you yeah yeah so angular uses these uh these comment nodes are like hints to the to angular's rendering rendering system of uh where
[01:17:28]  these nodes are like in the tree so it it actually uses those uh like ng4 for an example it uses those for hints of where to place things and uh it gives
[01:17:37]  information about how to how to track those across renders and things like that so that's what those comment nodes are in the tags there in the in the in the rendered h
[01:17:47] tml there and especially if angular now does non-destructive hydration or rather just hydrates um there's more situations where you're going to need comment nodes like this to
[01:17:56]  match up stuff from the server and the client yeah um just like there's you can get away with stuff in the client because you know you're rendering it so like there
[01:18:03] 's a few places where you need it for references uh list is a perfect example because you you're you're going through a list of different elements you actually have to know where
[01:18:11]  one starts and ends um like sure in list with it's just li's it's pretty easy but you can have situations where you can have multiple elements at the top level of
[01:18:20]  the list and stuff like that so these help you like frame off sections of the html yeah um another perfect example is adjacent text notes how do you how like when
[01:18:29]  you have text that's like some kind of static text and then you have some dynamic text and then you have static text when you ssr it you're just getting one
[01:18:37]  text blob there right so how do you like get in there and like separate out the pieces so comments are used a ton in javascript frameworks a little bit in client
[01:18:47] -side rendering but an absolute ton when you need to hydrate um yeah definitely so and uh the i don't know if it'd be it should be included here but the
[01:18:57]  the hydration or the uh this is the deployed app but the client-side hydration in develop developer preview kind of tells you what it's what it's doing when you're in
[01:19:09]  development mode as far as like the nodes that all the nodes that it hydrated and how that process worked because you you do have an option to skip certain things in hydration in
[01:19:18]  the hydration process if you know some components need to be uh like reconstructed after ssr too so it gives it does get a little more control there and i think even
[01:19:29]  with the the upcoming defer uh deferred loading syntax uh coming to angular there it'll be more more granular there also the first syntax is that for streaming do you know or
[01:19:40]  uh it's not for streaming i can i can go here to angular angular and discussions uh so this is deferred loading a new rfc oh okay yeah so it gives
[01:19:53]  you deferred blocks um to give you more control over uh the template loading of things in the template so okay so this is like lazy components this is like our lazy function yeah
[01:20:05]  yeah lazy function and but that's still an rfc uh now but that will be coming where you have different triggers on how you can do that uh how you can
[01:20:15]  like i said defer when templates are loaded and it will it'll handle this like at the compiler level and create like uh dynamic imports for these things so you can even not or
[01:20:26]  not load parts of your template until these certain triggers or things happen there but uh but that's still something that's coming there and from talking to the team there is it
[01:20:37]  seems like there is a pathway where you could have things that are uh rendered on the server but like today it's like an on it's a binary it's like an on
[01:20:47]  and off uh kind of thing where you can render on the server and then you can everything either gets hydrated on the client or it gets recreated but you could get to
[01:20:57]  a point where you could render on the server have it displayed on the client but it never needs to be like hydrated on the client so it could just be in place uh in
[01:21:06]  the future so there's it this is something that possibly could come out of later with the deferred deferred syntax uh deferred loading but that's that's where this is
[01:21:17]  just where it is today so i would definitely recommend people check out the the rfc uh for that okay yeah no that's that's that's cool i'm just
[01:21:26]  actually looking at the the the example here actually i uh i um you know me i'm like sitting here looking and i'm like okay okay what's what's our payload here
[01:21:39]  um it looks like uh is this a netlify edge deploy or netlify functions deploy do you know it's a functions deploy it's just a regular nitro
[01:21:49]  does give you yeah it's just a regular deploy uh it does deploy functions along with the the app so uh the index page probably if you go to like slash new or if
[01:22:00]  you click on new and refresh it'll render it through the ssr uh but it's just a reg it's still just a not an edge deploy but okay that
[01:22:09] 's something that it would it would support deploying to netlify edge if we chose that as a target gotcha so 91 kilobytes uh payload which is actually very similar
[01:22:20]  to next i think uh just just out of curiosity this is next app directory that we built on stream yeah it's basically the same size it's 90 kilobytes so same
[01:22:32]  same sort of uh javascript payload um scenario okay cool cool just kind of uh getting a perspective on like where this kind of fits in on stuff um yeah yeah i
[01:22:44] 'm sure there's yeah i'm sure i if i could have like optimized it maybe it's maybe shaved off a little bit more but for the for the practical purposes of showing
[01:22:55]  like i said what analog does and top of angular yeah that yeah parts there so yeah yeah yeah no that makes sense and then this one's always about 0.3 bigger or
[01:23:03]  a point yeah a little bit yeah no this is okay so yeah like that gives a ballpark on size and stuff um just wanted to take a a quick look at this
[01:23:13]  one here um you know i'm gonna do something just because i'm mean um because i haven't done this for a while last time we tried this this net didn't work
[01:23:23]  okay we got to remember this number three zero one eight six three two six three zero one maybe i should just copy it somewhere three zero one eight six three two six check
[01:23:34]  zero one eight six oh has it had to be like stories or yeah yeah it's it's probably stories yeah um fine i'm just gonna i'm like so lazy i'm
[01:23:45]  just gonna duplicate this page and then just get again three two six eight six three two six eight six three two six the last couple times i tried to run this on stream
[01:23:55]  it like didn't work which is well i mean i should actually see if i should actually see if it actually it's fine can i trick this and then make it show up
[01:24:07]  now because the what ends up happening a lot of times is that this the api craps out so to speak okay right um and i haven't been able to run
[01:24:20]  these as much recently um because yeah page speed is so sites has has has you know um ran out on me um see because i yeah i used to do this in every framework
[01:24:33]  here's toolkit but see like i had a list there already yeah um and if i grab this i mean i can actually just see if the page even loads in the browser
[01:24:45]  sometimes this page is just so mean that depending on the processing time yeah see it's got 1400 comments on this page which which is just the the meanest of the mean um
[01:24:56]  so to speak see this is what's been happening i think i used to like push page insights so hard that they started like being like no no your request takes too long we
[01:25:04] 're not gonna like humor you anymore and i'm like so i haven't been able to do this on stream for oh almost a year now when i did the next r
[01:25:12] sc i had the exact same problem yeah okay actually that's pretty that's pretty standard actually we finally got a score back but this is this is what i was talking about how
[01:25:20]  brutal yeah this this page is okay okay so yeah actually okay i i mean i should give a second run but yeah this felt kit version is 47 as i mentioned solid start
[01:25:33]  remix and that we're all about 47 48. it looks like this we might be back in business i'm gonna give i'm gonna give this one more go but actually that
[01:25:41] 's the other thing they they cache the results now see i i've drive these servers hard so like they don't let me get new results every time i don't think i
[01:25:48]  i miss this this used to be like the funnest part of my stream right part of the stream demolishing uh yeah work benchmarks here we go yeah next let's
[01:25:59]  go with next uh 12. oh man this is bringing back memories now you have another another test target so yeah yeah yeah no this is this is good this is good how things
[01:26:10]  evolve over time this honestly this is a bad test if you talk to the chrome guys they're like use core web vitals lighthouse is is only an approximation you know they they
[01:26:18]  give me a little bit of flack on this sometimes but um this is just taking me back um uh but yeah no it's it's uh it's it's uh
[01:26:28]  it's uh it's definitely one of those things where it i guess i should throw up one more just to show that like it's possible to score okay but you need to
[01:26:38]  like you need a crazy framework to do it um astro solid hn yeah here we go this is this is partially hydrated you know but yeah see i don't even i
[01:26:48] 'm not convinced these it's almost like it would just just like come back like in 10 minutes okay there you go oh there we go next 12 got a 49 there's
[01:26:58]  a variation of plus or minus five or so on any given run um oh there we go okay 41 like it's it's what my point is like you can be running remix
[01:27:10]  the same spelt kit you could be running your best spa apps um this this test is just for partial hydration this is how i convince people that they should be investing on
[01:27:21]  uh in in partial hydration but this is good to see the analogs in the same so i didn't put solid start solid start is i i guess we gotta we got a
[01:27:29]  minute here we can put solid start in here too yeah um not island solid start islands is very performant i want i want the other one p s solid hacker news which
[01:27:45]  one do i like solid hacker news bercelle god i've my other problems i built solid hacker news on like too many too many different ones well let's just do
[01:27:57]  netlify because it's yeah let's just do this you'll see this one will also be in the 40s um whereas astro yeah that this is this is this
[01:28:07]  is this is this is my mean test and you can tell these are all different because there's a different color see this one's purple this one's black this one's
[01:28:16]  felt orange okay and this is all the more all the more incentive for me to switch the analog one to red now so exactly exactly well red it red in a good way not
[01:28:26]  in the the bad performance way yeah no but the the the this is good i'm i'm actually glad that the uh it looks like page insights are back yeah yeah ryan
[01:28:36] 's they're ready ready for you to destroy some more benchmarks yeah yeah and to be fair this is the this is a much better tool um uh for for for getting timelines
[01:28:49]  and stuff especially when they like debug this that's more of like um yeah i for yeah solid actually i figured out a serialization trick that actually improved proved performance slightly out of
[01:29:01]  the 40s but it was it's it's yeah you can tell astro quick so uh marco is like in this zone but yeah this is not a spa test
[01:29:15]  this is just uh this is just what do you what what would you consider to be a good measure even if everybody's in the 40s like how do you move the needle
[01:29:25]  on the in the uh in on a test like this on test like these this is this is this is hard um i have to admit uh but now that this is working
[01:29:34]  do you know what that means that means uh oh i think we we will woken the monster that means that what i had it a moment ago right uh it was auto-
[01:29:44] complaining for me uh hacker news i wasn't able to do this on the next rsc stream but we can all right we might be able to get at this one too
[01:29:54]  we might be able oh yeah see i did try and put it in here we might actually be able to get the the server components what i'm what i'm going to
[01:30:02]  get at is this test is mean to frameworks that have to hydrate essentially so the usually the trick is figuring out how to speed up hydration but the problem is even even
[01:30:17]  solid's crazy amount of speed up on its own only gets gets us five points like right so i i mean people could do probably better in theory i'm thinking about like i
[01:30:29]  might even talk about this later uh after before this week in javascript about resumability and stuff but there there are different approaches to the technology but this is all at
[01:30:38]  a core level this is not this test is not something that the meta framework author can do anything about it's not something that the end user can really do anything about this
[01:30:47]  is this is straight you know this this is me going straight back to you know the angular team at google or straight back to this this is you know um but oh man that
[01:30:58] 's okay there you go okay yeah so react server components 59 yeah do you see so rscs are already um and actually when i did hydrogen hydrogen was also around this
[01:31:12]  around 62. so our rscs like pre-remix i'm sure with remix now it's slower but like um like pre like rscs are an example of
[01:31:26]  a of a of a improvement on on that um it is interesting though that as i said that um like astro or quick or like that style is going to get um
[01:31:41]  going to get better scores than rscs but that's an implementation detail in theory i think rscs can get into the into the high 80s if they were implemented
[01:31:51]  differently or maybe not react um okay but this is so the remix uh remix team isn't there well i saw they they're looking at doing rscs but right is there
[01:32:01]  similar to how nyx is doing theirs or i i i imagine they'll have their own kind of flavor in terms of apis and how they do it but like the
[01:32:08]  core mechanism for how the data loads and stuff or not the data loads because people have async components all that but i mean the core mechanism of how the stuff gets to the
[01:32:16]  page is going to be defined mostly by the rsc stuff does the rc need to hydrate uh that's a complicated question it's kind of weird well as it
[01:32:27]  depends on yes it depends on if you have to you got any client uh components all right mixed in there right yeah yeah yeah this the way we build these this test is that
[01:32:40]  with rscs or whatever is that i mean we can look at an actual page sorry and i know i'm diverting a little bit i was just so excited that this
[01:32:48]  worked but if you if you go to an example here this needs to be stateful so this is an island and then you project the see we have the term project i
[01:32:58]  told you it helps with server components you start with the server data and then you project these comments into the island and in so the server data stays on the server and you just
[01:33:09]  recursively project through and then it's only the client components like these little wrappers the toggle component in your project like you in fact do you actually have the toggle you
[01:33:22]  do you have the code open still uh yes i do you flip to that for a second if you look at your project it's only the toggle component that actually needs to get
[01:33:30]  sent to the browser because the toggle component has a signal in it right signal true here the open true but if you go to the comment component there's no signal here like there
[01:33:40] 's nothing actually interactive on this part the toggle does the stuff so the whole idea is with rscs or islands you can ship and only hydrate the components with the
[01:33:51]  signals in them so it's a little bit more trickier than that there's a structural consideration but for this simple test that's basically the scenario the interesting thing as i mentioned
[01:34:01]  before is this rsc thing um like it's still 90 kilobytes it's the same size there's only one component to be fair but it's like um the
[01:34:11]  baseline of even getting next to the point where it can not ship all the components you're already at 90 kilobytes um so for small apps and stuff people aren't going
[01:34:20]  to notice any kind of difference but yeah i'm sorry i diverted a bit this is this is on me i'm just so excited that this actually worked it's been so
[01:34:28]  long it's good at least have like i said if anything we get uh we get the uh another another test case for the for the benchmark so you can figure out how
[01:34:39]  to how to iterate on that but uh but yeah yeah yeah yeah yeah yeah to be fair this is this is a mean test the reason this is the mean test is i'll
[01:34:49]  show you if you i mean maybe next isn't the best version if i take uh it's actually easier for me probably the show solid start solid hn movie or not
[01:35:02]  movies sorry it's funny i the yeah that was another one i was gonna throw out there like the taste js movies uh app i know there's an angular version out there that
[01:35:13] 's uh built by the the arcs angular team uh and michael lackey and i know they they squeeze every bit of performance out of that so uh those are another
[01:35:25]  good test also yeah what i want to show is this is our our islands routing basically our server component demo um and what i want to show here is obviously uh sorry i'm
[01:35:37]  not in this is easier to show when you're in cognito this is why i had a different window open before new incognito because i have all my extensions it
[01:35:48]  doesn't affect the other test but it affects what i want to show here um when you so you want to you want to still showing uh mine you want to share yeah let
[01:35:59]  me switch over thank you yeah thanks for reminding me yeah so yeah this simple test is like this page is only five kilobytes but that's not the only reason why this
[01:36:08]  is sort of a mean test is because when we get to like there's some scripts to get started and whatever but when you get to like the you know next json
[01:36:16]  or whatever like all the stuff that you need to serialize to the page to hydrate there's nothing here because of that islands trick right whereas if i took pretty much any
[01:36:26]  other thing actually let's look at the analog example again um let's look at it again and i'll show you what i'm talking about because of the need to hyd
[01:36:37] rate um it it's funny that test might even do better with the old destructive hydrating but my guess is if i look hard enough here somewhere maybe i'll have to maybe
[01:36:49]  it'll be easier to look at the network tab and look at the uh what am i looking at uh document my guess although i could be wrong about where it shows up
[01:36:59]  come on um is i'm gonna see a blob of data for hydration somewhere here yeah it'll be like all the way down at the bottom yeah yeah i was trying to find
[01:37:11]  it i was trying to find it um in the regular markup but i couldn't uh did to do script yeah ng state yeah yeah okay so what oh does oh does
[01:37:23]  it consume it is that what it is yeah that's what yeah all that the uh data gets serialized and put into that angie state during the uh rendering and then
[01:37:33]  when it when the application starts okay yeah i found it i found it there yeah so this big blob of fun every framework spits down but with islands or rscs although
[01:37:45]  next actually serializes something about as big as this so it doesn't matter but with like islands or like quick or whatever you actually don't send um this data down it's
[01:38:00]  basically empty so you get double hit with this example you get hit for the serialization cost for needing to hide the upgrade and you get hit from the javascript bundle like
[01:38:11]  code splitting difference on the partial hydration so this this is why i use this because i needed an example um at some point because i think i forget who i was talking about maybe
[01:38:19]  ryan florence from remix and he's like oh your technology is really cool but they they like don't do anything and i'm like okay let's let's
[01:38:26]  let me put remix on the left side and let me put something else on the right side and we can talk about how they don't do anything um leave it leave it to
[01:38:35]  ryan to ryan to light those stoke those little fires here and there but my point is ryan florence that is yeah yeah my point is like yeah like
[01:38:46]  this it's funny because it like don't get me wrong i am pretty stoked like old angular might have not even had i guess it would have had for destructive hydration it
[01:38:56]  would have still had this but yeah the this anglers make it was in very short time making leaps and bounds improvements in this area it's a as i said analog looks
[01:39:04]  like it's in the exact same class as solid start remix next you know that kind of uh stuff in terms of this ssr style kind of performance and hydration stuff so
[01:39:14]  i'm i'm pretty stoked on to see that but i as i said i was also very stoked to actually be able to finally measure rsc's and next um because
[01:39:20]  they they are a slight improvement um which is what i was hoping to see anyways uh yeah uh those are fighting words anyway ah that's that's enough that's enough of me
[01:39:36]  playing around with this i think i i i i got to look at what i mean ah sorry did i close i closed it too fast i actually want to look at one
[01:39:45]  more thing well i got got you here and got it here which is i wanted to look at i mean it's just minor i i i'm always interested and this is probably
[01:39:57]  more of an angular kind of question thinking or whatever but i'm always interested just to look at like those little difference you meant the script ng states right but i'm always
[01:40:06]  a ng version i'm just interested to see what the serialization formats look like yeah so these are the comments that were but it's not on every li it's it's
[01:40:18]  at the end of blocks so yeah okay uh let me pick a different one yeah just just just curiosity on like what does the yeah that's cool and it's able to
[01:40:36]  match up see solid has these crazy hydration ids because our stuff all gets created out of order but it's it's this is this is pretty clean i'm gonna say the
[01:40:44]  output like the html output um for this solution is actually pretty tight um yeah i think that yeah i think it's actually it's it's a little less than
[01:40:53]  it used to be because you like for each item in ng4 or a list everything i think there used to be like a comment node for each one of those or even in
[01:41:01]  other areas like ngfs and things like that it used to keep those things in place but maybe with the maybe they did something extra there with the hydration that helps with that yeah
[01:41:11]  so that's nice that's that's 88 kilobytes um i i don't that's for the html document uh see when you get into crazy hydration tricks
[01:41:20]  you get pretty pretty big here i'll see this is the problem see see how the api is starting to throttle me yeah see i'm only getting 300 comments now oh yeah
[01:41:29]  and that's why you're only getting 80 ah damn it we we've we've killed it for the day they said all right that's enough fun with the benchmarks and things
[01:41:39]  our service gotta hold up yeah okay okay fine fine fine but yeah no it does actually look like the html is pretty compact for the um it's one of the
[01:41:48]  most compact i've actually seen if you look at any ssr framework but those comments are important if you have something like cloudflare that likes auto removes comments for min
[01:41:55] ification purposes you need to turn it off all ssr frameworks like people come to us and like oh it's crazy cloudflare is breaking solid blah blah blah it would
[01:42:03]  literally break every ssr framework um okay so it's good to know because i've been playing around with trying to deploy the cloudflare well angular they they come
[01:42:13]  up with some uh ways to or they work with the cloudflare team to get angular deployed on cloudflare workers and then i had had a separate effort to get that
[01:42:23]  working with analog too so uh yeah that's a good it's a good thing to to know i have to have to remember that yeah it's just it's understandable they're
[01:42:32]  like oh we can minify the code and remove all the comments and stuff but we need those comments like yeah there's a question about like what do what do the com
[01:42:39]  nodes need it just we need those markers because they don't affect styles we don't want to like make a component for ever like a element for every component or do something like
[01:42:48]  like comments are these like invisible markers they're not the best for like um traversing like you can't like find them as easily you can't just go like query selector
[01:42:58]  node find me the comment with this id like you you know we do tree walkers and stuff like this to to you know do that i but it's it's one
[01:43:06]  it's the only way to to do stuff without it like impacting layout like i tried a few tricks in the past and every time every time i've done it someone eventually is
[01:43:17]  like this breaks this thing in my table and i'm like okay fine like it's if we didn't have to use comments it could be faster um but what would be the
[01:43:26]  what would be the alternative to using the the comments then well i mean you as i said you could make make dummy nodes like like put an extra div in there or something
[01:43:35]  and then you can just literally go like find me the div with this id yeah instead we have to like tree walk the the whole tree to like or from a certain known location
[01:43:44]  and tree walk to find the the comments and what you know do that but i i think they're they're working on some dom parts or something rfc or whatever
[01:43:55]  on the uh platform that will help with this i just don't know the details on that yet but yeah comments are very useful um and you find a lot of the frameworks are
[01:44:05]  getting really deep down the the this whole side of things let me see if i can find it quick uh it's not actually maybe maybe page insights is the one that will
[01:44:13]  help me remember these these these links because i i because i i stopped remembering them quick how about https colon slash quick city hacker news okay here we go it's the one i
[01:44:28]  want you just need like a page that are uh like a quick uh link list uh list of links to each one of these things yeah but what i wanted this what i was
[01:44:38]  trying to show here is that if i go over here and i pull up the quick example and um as i said oh actually i can't run the freaking api right
[01:44:47]  now because it's throttled so never mind this one you hammered it this one yeah sorry sir that was wrong uh uh i i i i meant uh this this this
[01:44:58]  uh where was it this one uh what i want the show is that we're talking about using comments right like the more hydration savvy you get the crazier the comments start
[01:45:12]  kidding because like at this point they're trying to recreate like everything and this actually starts being uh more and more of a of a problem uh uh because yeah i mean the h
[01:45:28] tml just gets bigger and bigger and bigger right so um but yeah i mean they're hashing and doing but yeah this this is kind of the what what what i
[01:45:39] 'm what i'm getting at right because in this point like the reason you have to do this i'm actually i might talk about that later on stream if i have time or
[01:45:47]  maybe next week is like they literally have to match and key each set of elements if they're not going to like rehydrate and rerun the whole thing they literally have
[01:45:55]  to like find nodes as they hit them because they don't they never have the original state of the app they like it doesn't hydrate it doesn't go over once
[01:46:02]  and go this is the original state let's match it up it's more of like you change something here's the new data update now as if you had the original state there
[01:46:11]  in the first place so they literally have to serialize every possible thing into the it's the dom anyways it's crazy sorry um i i'm going a little crazy uh was
[01:46:20]  there anything else we want to show in analog or is it a good time for q a um uh let's see i can i i guess show a couple more cool cool
[01:46:29]  things there let me switch that over let me switch back over to your screen i'm done doing my benchmarking there we go yeah the the couple other things i want to show
[01:46:40]  i think we went we showed some of this in the docs also was the the api routes and these are actually file based routes also uh in in analog so you can
[01:46:50]  define these uh api routes uh within the server directory and you'll just get an api slash you know path right there out of the box there too so there is that
[01:47:00]  part and uh i mentioned about the route pre or pre-rendering we do ssr by default which you can toggle on and off but if we wanted to pre-
[01:47:10] render some routes we could drop those in here and this is kind of similar to solid starts configuration also i believe yeah um where you could just throw a couple routes in there
[01:47:20]  we are look maybe looking at some other options as far as being able to discover it like define these pre-rendered routes closer to the the pages themselves yeah uh so that
[01:47:30] 's another another thing that we're looking at looking at doing there yeah we're looking at that too that's funny like yeah you're right i built the api to support
[01:47:38]  partial static i just never actually got around to implementing in all the adapters because i had to write all the adapters ourselves so it's kind of a so yeah this
[01:47:46]  is one of the benefits this is when i went to astro i was like oh yeah this is really easy i already have the api for it but i didn't actually
[01:47:53]  like because suddenly i i had to have one abstracted place whereas before you know all this code was in each adapter anyway but yeah okay that's cool so you have pre-
[01:48:02] render yeah i i think it's interesting you guys the one thing you don't because you don't i didn't notice like you don't have like the action loader
[01:48:09]  kind of thing like remix or whatever so you're already not you don't have conventions around file system routing already that are based on exports and that so you're not like there
[01:48:17] 's no real place to be like export pre-render um with solid we have that export route data so we are actually thinking of changing that to be like export route config and
[01:48:26]  then have the data function and pre-render and all those things as just being an options in that one object but yeah it's tricky because once you make that jump to
[01:48:35]  the file system routing having those kind of conventions like it's i don't know if it's magical or you know what i mean like it's yeah the the couple other things
[01:48:43]  that we do have is uh we have things that you can like because the analog router is built on top of the angular router so we can extend the you can actually extend
[01:48:56]  the config of uh what what the angular router does and we do that through this kind of similar to route meta route metadata and uh you can define so this is one of the
[01:49:07]  things you can do like if you want to set the title for the route or if you want to add like meta tags or things like that you can do that additional config here
[01:49:16]  uh another thing that we which kind of lends in or goes into what you mentioned before about having like a separation of things that can run uh purely on the server uh
[01:49:26]  we've merged this in recently but it still needs some some polish but i could go here and create like an id uh dot server dot ts file here okay that's very s
[01:49:39] velte kit like okay yeah it it does look very similar to svelte kit but you can export a load function not load config from file if i can type here
[01:49:55]  uh so this load function and we import uh this do this here not from express from analog js router and i think we actually used some some of the similar naming from uh
[01:50:11]  svelte kit all because i thought it was a good uh name there yeah but we have like request uh a request response and params um params and yeah this uses
[01:50:27]  like the pay server load there so uh you can we use this i call it server side data uh but uh you could you know do some data fetching here and return
[01:50:39]  just an object of loaded data or right yeah yeah of serializable data yeah and then uh if we we can actually reference that inside of this function here so uh instead of doing
[01:50:55]  getting the user or the stories here we could have like data equals inject uh we have an inject load uh function there right and we use like type of load from the server
[01:51:09]  yeah uh there uh let's see yeah yeah it looks a lot like our route data or remixes uh loaders pattern and cell kit yeah it's the same it's the
[01:51:20]  same kind of i gotcha yeah but yeah this would uh i'm sure i'm missing probably what the what the data should be returned here but it changes to an object
[01:51:30]  or something like that uh but yeah inject load this will give you this will actually give an up an observable of this data but we could but we could turn this into a
[01:51:40]  signal also right uh with the it's like a helper function from from angular uh that would do that so if i import to signal yeah from interop yeah and i'm
[01:51:52]  sure i'm typing something there but are we missing a close okay yeah i'm missing something there but um but yeah so you could you could do some data fetching on the
[01:52:03]  server and like offload some of this off of the client too so which could in maybe save you some some kilobytes over the wire uh things like that so and
[01:52:12]  this never and this this code never reaches the clients which is pretty pretty standard practice there too so yeah that's another thing that we've been uh working on in in there so
[01:52:23]  we do have that convention of a page and a dot server file here next to it so it gives us a little more flexibility there of things we could do in the future that
[01:52:31]  could only be you know only be done on the server uh and not make it to the client so maybe you're shipping less you know less code less angular code to the
[01:52:40]  client and maybe offloading that some of that to the server so yeah no that makes sense yeah so loader setup uh did you guys look at the mutations of the progressive
[01:52:49]  enhanced forms or the other side of the yeah we haven't haven't looked at that yet like angular angular already has like a solid form solution or i'll say two solid
[01:53:00]  form solutions in place yeah with reactive forms and template driven forms but there isn't a good story there of how those two things can interact with the server so if we have like
[01:53:11]  with the progressive hydration or not progressive hydration progressive enhancement excuse me uh to be able to like have javascript turned off and the form still work so that is something that we
[01:53:23]  could look at i think something we'll probably revisit in the future as far as some api or something we can kind of build around that to to provide some solution there
[01:53:33]  no no i but i see the core of it here and it's it's i i love where the meta framers are these days because you can see mostly imports are from
[01:53:39]  angular itself you're reusing angular's existing router you're using angular's all all the pieces exist you the the analog itself is mostly just putting it together in a specific way
[01:53:49]  um with a few conventions and a few automated you know compiler tricks like route meta here and stuff that like basically kind of finish it off which is which is nice um from
[01:53:59]  a maintenance standpoint especially if you don't have to deal with the adapters um so yeah no i i'm i i i i'm getting it yeah this oh i think i
[01:54:09]  see what i'm sorry it was racking my brain i couldn't and then there you go so now we have our like type safe yeah data there so because i didn
[01:54:21] 't return the async from the from that there there we go so now we get a signal of that of that data object back so yeah just for completeness yeah no no
[01:54:32]  that yeah and that makes a lot of sense yeah no these these patterns too like once yeah it's going to be interesting because you as you're in a scenario where you're
[01:54:42]  like supporting both like patterns people accustomed to angular and then patterns that people are getting like more standard on because like on one side people might think that the what you just showed
[01:54:53]  me the dot server and the data and stuff is almost more straightforward you just grab that get the signal call it a day but i think it's not a conventional pattern saying angular
[01:55:03]  today so you also have you know the rx streams and the that kind of stuff yeah that that that was part of is part of like the overall like motivation and vision
[01:55:12]  for analog also is to like you shouldn't feel like you're like completely coming out of the the angular like ecosystem and things like that because those are usually like the first questions
[01:55:22]  people ask are like is this using the angular router or am i gonna lose you know like angular's ng update and things like that so you're still like this is definitely
[01:55:33]  like a spin on angular like outside of uh outside of google's tooling and everything that's built in but uh but yeah the we we still want to have some like comfort or
[01:55:44]  comfort insurance that you're you're still using angular at the end of the day we're just providing like a nice integrated experience on top of that so yeah someone some uh
[01:55:55]  sorry uh dav agaral um asks uh this uh what if your angular service could talk did you did you actually follow up on this at all no we're still that's
[01:56:06]  another thing that's on the on the table here that we're looking at this was another thing that patrick js had mentioned also he actually did a spike at this but i
[01:56:16]  think it would be interesting to do minko minko getcha did something like this also a while back where because a lot of what you do with your interactions
[01:56:25]  in angular you know revolve around services so if you can like i said offload that to the server and basically we're we're creating the connection you know between the server
[01:56:36]  to like pass that serialized data back and forth then i think that could that could have a nice experience to it also and in in addition to like shipping less code to
[01:56:45]  the to the server it's not quite like react server components or anything but something like that in angular i think would be beneficial i mean to be fair this is more like uh
[01:56:55]  server dollar sign or use server like the rpc calls um but yeah this is definitely something that uh we've been playing around with a lot um in solid start yeah
[01:57:07]  i've been yeah i've been following you and uh tanner's effort on this with like the bling project uh and i was trying to like you said we're we
[01:57:16] 're trying to all get in on the same on the same boat here to try to get something together on that because i think i think it's a pretty elegant solution to to
[01:57:25]  be able to uh use like the server dollar or the fetch dollar on and just have that kind of that data get uh moved over extracted off to the servers so yeah i
[01:57:36] 'm i'm still in a world where i'm trying to figure out how that fits in it's it's there's a there's this like tension between like the island side
[01:57:45]  or the server component side and then the rpc side and like who wants to even be thinking about all this stuff it's like because it's it starts on the server
[01:57:55]  goes to the client goes back to the server there's actually three three zones and people until recently have been thinking in one zone i build my app the end it's so
[01:58:06]  like this has been a been a big thing um but yeah no that's cool i i i miss this tweet when it obviously originally came out but uh it's cool to see
[01:58:16]  exploration or thinking in that all right yeah that was that was what like i said that was partly inspired by the like i said the bling uh project and things like that
[01:58:27]  so and even like i said minko's project is uh t i can ts rpc i believe it was yeah repo that he had a while back yeah yeah yeah
[01:58:38]  yeah no it makes a lot of sense uh i every i mean here's the thing once you get into the meta framers zone you just like think i could wire this for
[01:58:45]  you like on our first version of server it wasn't server dollar sign we were using proxies it wasn't a compiler but it did basically the same thing i added
[01:58:53]  to solid start back in 2021 like it was just like i knew you like once you go there you like and i think next not next themselves but like in their ecosystem there was
[01:59:02]  like a library like that too like you just go there and you're like man it just makes a lot of sense to because you have all the pieces there is a trap there
[01:59:11]  don't get me wrong but i it's too tempting not to at least look into yeah yeah and yeah like you said the the build like the meta framework building on top
[01:59:21]  of like the primitives and things that are already there it just gives you so much opportunity to oh it'd be nice if we did this or it'd be nice if we
[01:59:30]  just kind of handled that for the user but uh there is there is a balance of things that you kind of have to go through because at the end of the day you
[01:59:39] 're still having to maintain all that the magic per se that people will get uh used to uh to do things like that so yeah it's definitely a trade-off you gotta
[01:59:49]  you have to manage yeah you know it's yeah it's it's interesting too because when you're in the meta framework space you are sandwiched between and we talked about this
[01:59:58]  a bit earlier the core team working on the library and like the you know potential user there because like sometimes like a lot of people will go to you instead of going straight
[02:00:08]  to angular so to speak but what you're capable of is both a function of what you're able to add as features and what uh the core team wants to support officially and
[02:00:18]  sometimes i mean that's where the communication is really key because i've seen cases where the meta framework has gone and re-implemented a whole bunch of stuff that the
[02:00:27]  core team was going to add as primitives and then like there's this awkward moment where everyone's like uh what do you do in the and then the the meta firm
[02:00:34]  was like well i want to keep on using what we built it works slightly better for our use cases and then it's like no but you should use what what we built because
[02:00:43]  it like we're trying to make sure that everyone's on the same page and there's like this this kind of tension um so yeah this is this has been very much on
[02:00:51]  my mind i i mean what i'm talking about right now is rscs and remix um like the whole like literally the transition api suspense and all that remix basically
[02:01:00]  invented their own version of that that's not even rscs and react seems like look we we've got this and then it's just like you know um but it's
[02:01:11]  it is it is interesting uh kind of figuring out how to find that balance in that place and it's got to be about communication right like it's got to like understand
[02:01:20]  where say angular is heading and then figure out how to work that into you know what you're building and i mean because there's an opportunity here because you're like right on
[02:01:29]  the edge and where the people are doing them where you can add more of these features and try things out that the the core team can't make a decision on it take them
[02:01:37]  like they don't have enough data like they you know yeah and they're and they're like there are some things that maybe they're just not they just don't think
[02:01:45]  should be part of the framework i mean they're they have a you know i would say a relatively small team which they do a bunch of great stuff with but i mean at
[02:01:55]  the end of the day you you have to have the like the people and the to to be able to like execute on those things too so some of those like even with
[02:02:05]  like going back to njrx like the that that that need was there and we kind of feel that need uh because there wasn't like an established solution there so uh
[02:02:14]  but like ideally for me like like i said that communication line would be there with the team as far as what they're building versus what we're looking to build and how can
[02:02:24]  we like do those things together and not uh like you said not have those awkward conversations of like okay are you gonna are you gonna shut that thing down so we can so
[02:02:35]  we can uh so we our thing can kind of live in that in that space too because yeah it's an awkward awkward place to be when uh when that when it doesn't
[02:02:46]  go that way so like i said ideally we have like a good line of communication there which we we do have a line of communication there today so um yeah i'm happy
[02:02:56]  about that no that's super good and super important i think that's i think that's something that actually we haven't seen the effect of but i think react might have historically
[02:03:04]  um not been so good in that area but now actually has been improving in the recent little bit because as i said there's the obviously the whole thing that happened the last couple
[02:03:15]  years while everyone's waiting for suspense um but uh it's i feel like it's even like it's even more than that um the potential when when you don't when
[02:03:27]  you don't have the that kind of community communication available because like how do you yeah how do you how do you how do you get anything done it's a lot easier for
[02:03:35]  smaller frameworks to deal with that like you know felt kit can get ahead of it solid can get ahead of it but with angular or react or something so widely used it's
[02:03:43]  definitely something that's uh you know yeah i think we're yeah i think we're all right i think analog project is probably a little bit unique in that way and that like
[02:03:53]  you have solid and you have solid start so you kind of have you have more like direct control over both things and like the direction of of both things as or even like s
[02:04:02] velte and svelte kit that sort of thing but i think maybe next and react is even though they're that that gap seems to be shrinking but they have they
[02:04:11]  kind of have that same uh relationship also as far as owner ownership of the thing that you're building on top of yeah i actually yeah that gap has shrunk uh considerably now
[02:04:23]  but you know yeah um yeah that's good uh so yeah let's look is was there any more uh demo little pieces you want to show off i i think i think
[02:04:36]  oh yeah you have a lot of oh there's more okay that's exciting because we have actually talked about most of the key functionality um yeah i did want to touch on one
[02:04:46]  quick thing here this is just in the analog repo itself uh and we to go back to nitro the integration there so yeah we can kind of dig into like the the nit
[02:04:56] ro pieces here um because at the end of the day like the all that interaction happens through this v plugin that connects nitro and analog together so um also how much i
[02:05:08]  want to get into here but nitro like i said nitro has a javascript api let me close some of these things here okay yeah no i you got my
[02:05:18]  full attention here i i'm very but uh yeah when i was looking around for like solutions to be able to hook into uh to not because like i said nitro had
[02:05:27]  all the deployment targets there they had a nice uh story there about reusability so this is kind of the part that where we kind of connect nitro and v together in analog
[02:05:40]  so we load in the nitro uh apis here and it's simple or not simple as that but you can create a nitro instance here and create a dev server
[02:05:49]  and we're hooking into veet's middleware uh to be able to use that nitro server as like a node uh a node handler so to be able to hook
[02:06:00]  into that is not much uh at least you still have to figure out how to watch i still had to figure out how to wire that part up but nitro i said
[02:06:09]  nitro has nice apis around how it can give you that that handler that you can pass to any middleware uh in this case uh veet's middleware which is
[02:06:18]  like connect underneath but uh being able to use that part and everything as far as like the server related things kind of hang off of that like the ssr uh rendering we
[02:06:29]  have the renderer here which it's pretty straightforward it uses the ssr build and uh we call the that main dot server file that i just showed earlier it calls
[02:06:40]  that render function for the ssr support uh the pre-rendering nitro actually handles the pre-rendering side of that too um and this is what we use
[02:06:52]  during the build and some of the some of the things that we've actually added actually build on top of the hooks that nitro has underneath also because it lets you hook
[02:07:00]  into like the pre-rendering cycle nice so you can you can hook into as things are being generated and as the pre-pages are being pre-rendered that
[02:07:11]  part's there we had somebody uh q from the community actually put this feature in which is which is pretty good also uh to to do that part but this the the other part
[02:07:22]  about about this plugin is that because it's veet and because it's like like a veet plugin out of the box we could drop this into like a standard uh
[02:07:33]  veet project right and uh we kind of talked about this uh earlier because someone someone was asking in chat they're like for analog why did you go with nitro as a
[02:07:44]  beat middleware versus beat as a nitro middleware yeah and i feel like this is almost the answer to the question coming up here yeah i wanted yeah i wanted the
[02:07:53]  i kind of wanted the veet and nitro integration to be like as simple as like a drop-in thing because with nuxt it's a little different because it it
[02:08:01]  controls more of the like the entire life cycle within nuxt as far as the hooks and things go but this is more of a drop-in that you can do here so
[02:08:10]  i had i even tried this with like a just vanilla solid project and i copied like the dev server part in uh but this is like the veet the nitro plugin
[02:08:21]  from uh analog js it inside of this um veet project uh with solid and you know we define of course we had to define some things manually because these things are handled within
[02:08:34]  the analog plugin but yeah uh but it it it still works like uh you get the api routes you get the ssr you get the pre-rendering and
[02:08:44]  that's that's that's the part that i think that shines about like the v ecosystem and that it allows you to build these kind of plugins that you can like drop into
[02:08:53]  to other environments so that that's that's if if this just works that's crazy you don't know how many weeks i spent adding that to astro i'm just putting
[02:09:03]  out there but yeah but yeah that i mean yeah i know like i said i just this is like i said more credit to the nitro team and the v team for
[02:09:12]  like enabling basically like enabling meta frameworks to do this kind of thing but uh that is one thing that i'll i think i think i pushed this up on github too
[02:09:23]  but i'll drop that in the in the chat there also for people to kind of pick through there and see but that was kind of my vision part of what i wanted
[02:09:31]  to do with the veet nitro connection also was create a plugin that was kind of agnostic enough to where uh you could drop it into a react uh vanilla react
[02:09:43]  project uh solid whatever yeah and you get like that meta framework in the box is what i call it you kind of get that experience there so uh that's part of the part
[02:09:54]  of what came out of this effort if anything also is to be able to put those pieces together yeah no this this is very cool because it's just a little little little
[02:10:08]  drop in plug-in uh question yeah so you are is there file there's no file based routing or anything special here going on right is it just no no this is just
[02:10:19]  uh i just went with the solid starter and uh right but i i just meant yeah so like the nitro plugin is only responsible for just getting the runtime up getting the
[02:10:28]  dev server up and then you can build all your other conventions on top of how you generate the code and all that stuff so it's very you right yeah the yeah the only
[02:10:36]  file system routing in here is this this is part of nitro also so you point it at this directory and it looks and see what the what the structure is for the ap
[02:10:46] i routes gotcha you can set that part up also but this could like i said if you were using solids uh file based router you could drop that in uh i'd
[02:10:54]  imagine you could drop that in here too yeah it's just funny there's there's a there's some comments from the chat that one reminds us like like how frankenstein
[02:11:03]  can we go can we drop an ally we can we go down we could this was another thing another thing also i can jump into the docs here integrations astro uh
[02:11:16]  and this was two parts like uh astro was using you mentioned it earlier snowpack they were using that before and it had support for all the angular it had support for all
[02:11:26]  the basically ui framework components uh so i had tried to get it working with snowpack before but i think i hit a roadblock there or something but then when they switched
[02:11:37]  over to veet then that kind of opened up the door to be able to use angular in astro so we actually do have it if you want to go down the
[02:11:45]  rabbit hole the veet rabbit hole of what it unlocks uh you can use uh angular components inside of an astro project uh using this using this integration here so uh that
[02:11:59]  part does work too so there you go there there it is yeah now people are having some fun with franken meta framework like i said it this was part of this it
[02:12:13]  was extending extending angular into other ecosystems right because that's what i felt like veet uh did was extend extended all that build tooling to any project that wanted to use it that
[02:12:27]  you could build on top of so uh uh like i said i think that i felt like angular should have a have a a space in that in that area also or be
[02:12:38]  able to tap into veet's ecosystem yeah no and this is this is part of that so oh man that's that's too good i'm i'm i'm pretty stoked
[02:12:48]  on that i have to admit somebody yeah somebody they asked the question so yes if basically if it works in in veet then we can drop some angular in there if that
[02:13:01] 's if that's your thing so yeah yeah i that's i guess that's fair it's funny that the frame is called analog but it's modernizing angular yeah no no
[02:13:13]  i it's some amazing work you've been doing to i i mean this is all as i said this feels like it's all part of that narrative even though you're not
[02:13:21]  like officially the angular core team the effort you're doing here definitely feeds into the narrative of a modern angular like a revitalized angular seeing these pieces in conjunction seeing the standalone
[02:13:34]  components you know and using them which makes it like look like other frameworks like what we've come to expect in terms of like oh yeah just throw this here this works and uh
[02:13:46]  angular doesn't look like the you know the odd you know the odd one out anymore so this is this is really cool i always think of that uh that meme with uh
[02:13:56]  i think it's ted bushymi i can't think of his name but uh he comes in with he's got the red hat turned around he's like what's up
[02:14:05]  kids that's how it's that's how it kind of started out with uh how we were kind of how i was kind of pitching this of like angular coming back to
[02:14:13]  the table with uh with everybody else that's kind of uh migrating and moving the eco moving the ecosystem moving along with the ecosystem is what i is what i call it so
[02:14:26]  oh wow okay i think i think i think we should start uh getting any other questions together for for brandon so that uh we can ask them while he's still will
[02:14:39]  he still with us today um start collecting those questions but um it always takes a minute so um a lot of break yeah no exactly yeah i i the heat is starting i
[02:14:51]  should have brought the straw so we can no i just kidding yeah i finished my orange juice already yeah back on orange juice again um but yeah no i i i it's cool
[02:15:07]  to see i i actually that question about the veet versus the nitro like back and forth i had the exact same question um before the stream i'm glad that someone
[02:15:18]  asked it because i was like i looked at it and i was like huh so it's a dev server but i i see it now right it's just make stay with ve
[02:15:25] et being the primary thing because yeah the the beats the plugin system this is the this is the biggest challenge you start making these wrappers and then you make your own config i
[02:15:34]  mean that's an option too like maybe none of those details actually need to matter but like on the other hand there's something nice about it just being a beat config right
[02:15:43]  like yeah yeah the what you get out of a traditional angular environment is like you don't besides the angular json thing file and things like that like you don't really get
[02:15:54]  access to much of the like the internal configs and that's by design they want you to not have to worry about like the build process and things but i think in meta
[02:16:04]  frameworks and things like that they i think there's a good balance to be had there to where you can have the vconfig and still provide a good set of like
[02:16:13]  defaults out of the box so uh and then people will you know people can tinker if they want to they can kind of tweak things or add additional stuff there but um
[02:16:22]  a good balance is there is kind of what i what i was aiming for so that you know out of the box you're going to get like the optimal setup but you
[02:16:32]  still have the like the like little bit of configuration there that you you have access to if you want to be able to get add some more things so yeah um i think we
[02:16:42]  already got the answer to this question but the loaders are type aware right like uh the you you it's the type of trick that we use in remix and in solid
[02:16:53]  um yeah yeah the loaders are are type aware so you do get the the type safety of what the what the return is yes yeah through the import this is one of those
[02:17:05]  areas that i've been trying to think of if there's different solutions because i i forget i think it was theo made a list a while ago talking about features and frameworks
[02:17:15]  in terms of type safety and he gave that a half point because having to like say type of and pass into the generic not auto inferred was uh was it was a downside
[02:17:26]  compared to say like async await in a react async component or whatever so he gave us a half point for that but yeah i think it's i think it's a
[02:17:35]  it's a it's a trade-off because um because we could have went with like the load the direct loader pattern within the within the file and maybe have more
[02:17:45]  direct connection there but using the like the separate server file approach you still want to have like some connection there so i think it's yeah more about the trade-off of what
[02:17:57]  what what did you what do we value more in this case and like angular was like the trailblazer on uh leaning into typescript so that's usually like what we
[02:18:09]  try to lean towards first yeah yeah i know that that makes sense yeah angular's got a very long history with typescript um they they were probably the first framework to actually
[02:18:23]  yeah that that that whole uh types angular leaning into typescript because angular at one point was trying to create its own version of typescript basically it was called at script uh but
[02:18:35]  then they ended up ditching that and just using the like i said wrapping around the typescript compiler and then that kind of trickled into angular was using it then types
[02:18:46] cript like became an approved language inside of google and like they started writing everything every like typescript was a requirement then and uh even through our interactions with like p with ngr
[02:18:59] x inside of google like it's type safety across the board like hardcore types on everything so because they're they like max definitely maximize their usage of of typescript there and
[02:19:11]  i think angular was a big was a big part of that all right um typescript was made for angular it's it's it's interesting because like i said thank you the
[02:19:28]  angular i think took a different approach than most other frameworks in their usage of typescript because to me like typescript is more of like a pass-through in some other
[02:19:39]  some other frame because you can still write those applications without using typescript at all but with angular like it's been a requirement since day one so uh that's what i think
[02:19:51]  there there is a difference there in how they leverage how it's been leveraged in the within angular like for better or worse uh whether what's your opinion on typescript
[02:20:02]  is but of course you're seeing like svelte usually go a different approach with just vanilla js and uh js doc but uh but yeah right oh okay yeah this question came
[02:20:14]  up earlier and i didn't uh highlight it but uh because while you were authoring there people there was a question they're like oh can i put this html in
[02:20:21]  a separate file um yes yes the uh external styles and templates are supported there like all the things that you normally are accustomed to with angular are supported in analog as far as
[02:20:34]  external tiles templates uh being able to use like sas uh in your inline templates and things like that so those things are supported also which we we yeah we did have
[02:20:46]  to do some work on those to to get parity with what the the cli does because vee is like i said vee has different um different apis and things to
[02:20:57]  to do css transforms and things so but yes that does work all right all right um oh oh i see okay we're getting some more outside questions now uh i don
[02:21:11] 't know how much you know on the angular community in in general but uh people asking about angular dart and about angular native do you know anything about those angular native has never been
[02:21:26]  a thing as long as i'm i as long as i know but angular dart was or i would say angular dart uh is is still a thing uh that i learned uh
[02:21:36]  here recently um but angular angular dart were like two i don't know two divergences of the same framework at one point in time but angular dart ended up just like completely
[02:21:50]  going off a different path which i think was good because trying to support two ecosystems with two different languages uh with the same framework was uh seems like it was going to be
[02:22:00]  a recipe for a disaster but uh but those yeah they did diverge and angular dart still is uh alive and well as far as i know i think there's a like a
[02:22:10]  community-based version of it also but yeah i was i was surprised to hear that it was uh still being used but it still has a place i guess uh inside uh inside
[02:22:23]  and outside of google so uh so that is there there you go all right all right um i think we're good on questions for today um we should all thank brend
[02:22:33] an for joining us i learned a ton about um analog and uh self a bit selfishly i learned a bit about nitro which i'm pretty interested to see more about um
[02:22:44]  but uh yeah i mean it's very clear that going with angular even in the modern hipster i'm just like spinning out a cool app thing you're not suffering any
[02:22:56]  um if you've got options like uh analog to use so um thank you very much for joining us today brandon um the street's going to continue i'm going to do
[02:23:06]  my this week in javascript and i'm actually i think i want to talk about resumability we'll see how much time we have i've got some really interesting
[02:23:14]  insights there but uh yeah um it's it's been a blast uh is there anyone you would like to shout out or any thing you want to uh yeah sure uh well
[02:23:25]  yeah first of all i appreciate uh appreciate allowing me to come on the stream and talk about analog and meta frameworks and everything else uh really had a good time there uh shout out
[02:23:35]  to the other other contributors on the team uh marco who's also on the ngx team and robin who's done uh has been both of them have been big
[02:23:43]  contributors to the project and definitely the community uh so definitely want to give a shout out to them um yeah people in discord uh i would invite people to come in there and check
[02:23:55]  out the analog discord and everything that too so uh check out the project and you know try it out give us some more some more hearts and likes and things all the good
[02:24:05]  things so yeah awesome awesome yeah a lot of hype a lot of love from the chat um it was great having you on um hopefully we'll have you on again as um more
[02:24:16]  things progress so um until then until next time uh we'll be seeing you thanks see ya uh that was awesome um i it's it's it's cool to see angular
[02:24:32]  sort of reinvent itself you know what i mean like it's it's cool to see it um kind of keep up with the time that we're you know i mentioned this a
[02:24:42]  few streams back about the self-closing components you know but i it's really awesome to see like as i said when you're looking at analog there when the standalone
[02:24:53]  components stuff and the loaders and stuff it's it's all the same patterns you know um to a certain point there's a kind of an obvious trend like you get in
[02:25:02]  the space you're like oh yeah we should do something like this and everything kind of converges um but it's cool that like in a sense the framework like angular or react
[02:25:12]  or svelte or solid or whatever isn't the thing that prevents you from that level of experience i mean i experienced i realized that when i used create t3 app
[02:25:22]  or create jd app right um that it was basically the same thing like the fact that a solider react actually made a lot less of a difference until you open the performance
[02:25:32]  benchmark tab um but it's interesting because a lot of those abstractions are what you actually spend more of your time doing than the simple ui stuff so uh it has an
[02:25:46]  important place you know is there a repo for the solid nitro yes oh yeah we should have got brandon to share that he said he said he he i don
[02:25:56] 't think he's actually committed it up he said he should um but there is a uh veet plugin nitro that he has published let's see if i can find that
[02:26:09]  veet plugin nitro um there it is analog gsv plugin nitro oh come on just you ever do that search and then you like don't get the g
[02:26:22] ithub um it's probably because it's under the analog um thing someone probably could find the link better than i can um because i got like the npm link not
[02:26:36]  the uh the repo link yeah also i should mention although i'm like super super late and i apologize to these people is that early on the stream i got i got a few
[02:26:54]  subscri uh subscribers and i was so into what uh brandon was saying i didn't give a shout out but um going back here let's see if we can find it
[02:27:03]  we definitely got a couple new subs although it's probably been like two hours since they subbed um why can't i even see anything anymore oh yeah oh this is so
[02:27:15]  sad the chat like scrolled up past it i can't even see it i know julianng subbed for 10 months i didn't even realize have i been a twitch
[02:27:26]  affiliate for 10 months well i guess i have so thank you and there was one other that i just don't remember off the top of my head but thank you i think it
[02:27:36]  was like a seven month sub as well so apparently there's been a few of you who've been been here the whole time i've been affiliate uh what else we got
[02:27:46]  going here but yeah the the idea is nitro is another solution which builds the whole adapter layer in right this is the layer that no one wants to keep on building over and
[02:27:59]  over and over again and um they made v plug-in nitro which for some for the life of me i can't seem to find it maybe if i go to analog
[02:28:08]  if i go to analog github i will find it maybe it's in their packages apps packages packages sorry i probably should share my screen so like your people can see
[02:28:24]  what i'm actually doing um sorry this is apps analog packages viet plugin nitro all right let's drop that in the chat oh lynn art phoenix already
[02:28:43]  beat me to it yeah okay thanks um there you go um the other thing is uh um sorry where is it going i yeah it's it's it's it this takes
[02:28:58]  care of all the the the adapter level right and um uh what do i want to look for um you do need to kind of figure out how to get um those things kind
[02:29:10]  of together um actually let's just go top level top level right um so maybe i'll get him to come on here one of these days again but similar idea was uh
[02:29:30]  uh nikil has been working on i don't know if you've seen bun app it's like uh uh it's something that jared kind of put together where you
[02:29:41]  could kind of like define generic config um for basically setting up the right type of bundler for the right app so you could like kind of support anything from react server components to
[02:29:53]  client-side react to solids felt remix everyone in the same kind of setup and it's by using this idea of combining bundlers with route mapping um and it can handle client
[02:30:05]  and server as long as you make the right bundles and assign it to the right location it can work um nikil went and ported it to um uh veet
[02:30:17]  essentially and into javascript and then use nitro as a server thing for deployments so he created something where he literally yeah this is how you do react sr solid
[02:30:29]  ssr basically put any framework into it and he he can do everything from rscs to client only react to basically solid um server client whatever and have it all
[02:30:42]  automatically have pre-rendering uh deployed a cloud flare you know all the stuff all because of nitro um so this was like his idea of of taking a baseline of how
[02:30:54]  to generically make a framework builder um you know because it sounds like with nitro you need like they have an opinion layer a layer this is like one level up in
[02:31:02]  terms of sending convention um but yeah anyway trying definitely fails the benchmark of finding stuff on the internet i hear that jared made me on i yeah i would love to talk
[02:31:22]  to jared sometime i i i actually yeah it's so weird i yeah i probably if i asked him on i he he's sometimes a bit of a private guy he's
[02:31:31]  not the kind of guy that come on camera but i mean he he uh i don't know he he might we could probably talk with jared if that's something you all
[02:31:40]  would be interested in i talked to him a bunch especially about the bundling stuff because he want he when he was designing bun app he was like you you know look at
[02:31:51]  this right what do you think do you think this could work for solid as well and actually bun released 0.7 today which adds support for a bunch of other frameworks he actually
[02:32:00]  previewed me that he had solid start working completely in bun but um he said for some reason that basically there's something like laughing he's like yeah sorry this won't get
[02:32:10]  into 0.7 it'll be in 0.8 it'll be in the next version um but it's cool and i'm i'm also what was like man no
[02:32:17]  rush um we we're we're looking at the astro uh you know rebase or maybe even nitro rebase i guess um so you know all the work you're
[02:32:26]  doing like this all start right now might not actually be the the ultimate goal we we know for sure with all start we want to get rid of the adapters um so we
[02:32:35] 're just like looking at this kind of base um setups you know so that we can abstract that away oh what's what what what are you sharing with with us here lyn
[02:32:55] n it's funny in the background well well while this was going on i was running the solid islands and the quick stuff but we didn't get the full number of comments see
[02:33:03]  it's 115 comments it's probably too small for you to see not the 14 or sorts of 1100 comments instead of 1400 it's 300 comments short on both of these
[02:33:12]  and i was like oh man these aren't the real numbers i was trying to show like both quick and salt start uh islands router you know like our rscs get about
[02:33:20]  the same score and they're in the mid 80s this is shifted up because um like 20 percent of the comments are missing these should both be about 85 um so yeah
[02:33:34]  it's it's just uh yeah but yeah let me let me pull up that other link and see what's going on here okay yeah this one has the full amount of
[02:33:47]  comments in it although i think this is probably the standard solid hacker news not the islands one right oh that's that's that's that's that's kind of slow for
[02:33:58]  the page to show up which which solid hacker news is this one is it the one that i used or is this yeah url towards the top yeah this is the net
[02:34:21] lify edge one yeah so this is like our standard single page app one not our islands one or whatever yeah this is the one that scores around 54 or whatever yeah there's
[02:34:29]  a lot more data in this one this is a much better tool if you want to like actually analyze where the time is being spent um uh let me see if i can see
[02:34:43]  because you can get like you can look at the timing when the resources come in this one has streaming you can see the resources beat the full page render coming in uh lighthouse
[02:34:51]  kind of masks the screen streaming for you so you don't actually get to see the whole thing um so this actually is a little bit more accurate on that side um and what
[02:35:02]  you're seeing is yeah it's interesting because the purple if i remember is is actually not scripting or anything it's like just like dom painting type stuff right uh or now
[02:35:13]  that can't be images what is that it's the purple the biggest thing is this page is absolutely humongous so it's like there's this huge amount of stuff
[02:35:28]  there's this js block here and then why am i not reading this properly it's so funny i was expecting to see something much more it says image but image doesn't make
[02:35:43]  any sense um yeah in any case yeah it shows you each request made it on the page to get that fav icon web manifest of you know little chrome icon uh android chrome
[02:36:00]  92 interesting um but yeah entry client js and cs the specific page and the initial page load for the html anyway this is a great tool in general you can actually
[02:36:19]  see the paint scroll in you can see like on this slow i'm gathering this is a very slow network you can see that the page doesn't load at first and then you
[02:36:30]  you can see the benefit of having the shell and then you can see the streaming data because the data doesn't show up until here um and then it's almost immediately done
[02:36:39]  here but basically this shows you the advantage of streaming because if you didn't have streaming this would be white all the way to here that's why i use this when i showed
[02:36:48]  the remix guys because they're like streaming doesn't matter i'm like okay yeah i will show you a page that shows up and gives you a loading indicator at 1.
[02:36:56] 7 seconds versus yours that will take five seconds they came back four months later and like okay we have streaming so um anyway that's probably enough on that for now oh that's
[02:37:10]  a 4g that page is just brutal i was thinking 3g anyways sorry just benchmarks is obviously we can get a lot of fun intended there but yeah i was trying to
[02:37:22]  decide did i want to do this week in javascript or did i want to talk about some more future future topics like how much time we have it's 2 30 i
[02:37:29]  could go for a bit so we could talk about some some some cool stuff um what's that replay io no uh i was looking at web page test um anyway uh yeah
[02:37:53]  so something that i was thinking about bimmer last week when i was you know or the week before i was doing this like silly escaladraw thing where i was like ast
[02:38:06] ro rcs sir you know solid server components quick marco bro kind of on the scale i was like i started thinking about a dave made this really funny joke where
[02:38:16]  he's like is this like the likelihood to ship like here versus you know marco six that you know hasn't come out and he's not wrong but i started what
[02:38:36]  if like i've been looking a lot in this zone because there's real obvious wins here if you have islands who cares about resumability i'm just gonna straight up put
[02:38:51]  it like if you have partial hydration that will reduce 70 or 80 of your hydration costs remove 70 80 percent of your code who cares about that last 20 comparison like today you
[02:39:05]  got 100 of that right and if you look at the benchmarks i was showing you a moment ago there for simple tests like that there is no distinguishable difference between quick and
[02:39:19]  astro and solid start with the islands and rscs react sure slower but i mean react wasn't really going for performance primarily they're like okay if we improve performance that
[02:39:33] 's great but like and they did um you know they on that simple silly test react now is 10 points higher than uh like next went from 48 to 58 or 49 to
[02:39:50]  59 or whatever right they're 10 points higher but i was like okay there's a dx consideration when you get into this explicit stuff no everybody just keeps on like choking over themselves
[02:40:04]  when they're like oh what i have to think about what's on the server and the client and stuff right we're getting existential on what marco is but what i
[02:40:20]  started thinking about was you know i mentioned this last week what if marco was always right you know like what if we just assume that everything marco has ever done has generally
[02:40:35]  been the smartest thing you could do right and i i kind of live in but like obviously there's implementation things but let's say like directionally they have the right vision
[02:40:45]  no that's h no that's htmx htmx hmm no i don't want to talk about htmx i don't think i have
[02:40:57]  anything to say about it i noticed recently people have been talking about htmx which is confusing to me well actually it's not that confusing i guess it's i think
[02:41:05]  htmx has its role right now i think it's important that people go use that understand what's wrong with that mentality and then you know move on um but
[02:41:17]  i i think i think yeah i think that's really all i want to say about htmx um anyway it's the new milk yeah yeah and you've i
[02:41:28] 'm probably taking about as equally seriously um anyway um well sorry i'm i i i there's probably among us now yeah i i don't know what to say it has a
[02:41:49]  very specific place where it's interesting but then it's just not a zone that i live in so i think it's it's fine like i think people need to be
[02:41:59]  reminded that you can do a lot with less right you know what i mean like we've been sitting there building up these like big machine machinery around js and this is what i
[02:42:08] 'm talking about the whole rsc thing gets us in this zone where like we're like oh like now i have this thing and this thing and then these work like this
[02:42:18]  and the server stuff has to work this way and the client works this way and then they work together and like then i do this or and it's a lot so we have
[02:42:25]  to remember like as somebody like you can just like use some html or use some javascript and just like get there right it's a good reset kind of perspective
[02:42:37]  um to to see that right that's that's that's where i kind of see it but as i said that's about the extent of which i have any interest because
[02:42:46]  it's like it's kind of like you know you can't just like there's different scales of optimizations and right solutions for the problem and we've been building systems to
[02:43:02]  automate where things go to an example that maybe back-end people would understand is like in hardware like cpus have caches and then you have ram right you have like
[02:43:10]  level one level two maybe level three cache on your cpu and then you have ram and then you have a hard disk and in a way htmx is like oh
[02:43:16]  what happens if you got rid of the ram got rid of the the cpu cache and just had cpu writing directly the hard drive like think about how simple that is and
[02:43:26]  you'll be like damn wow get rid of all that complexity it just works i don't need any cash just do it but like at a certain point you're just like
[02:43:37]  wait i can't actually do anything real with without that like there's a reason why we have caches or or um you know memory um right like there's a bit of
[02:43:52]  a similar vibe there um where it's just like don't work you don't have don't sweat the details so to speak but it will get you in trouble eventually perhaps
[02:44:01]  although what you found is people found that svelte has the tools if they look hard enough for them um and i you know with an early ecosystem htmx might
[02:44:10]  eventually have the tools too so i mean that's probably fine just do it marco marco's appeared on the stream it's over if your cpu doesn't work
[02:44:29]  yeah yeah i guess there is a bit of an abstract thing it's not quite the same metaphor it's just you're right and maybe that maybe that's the thing right if
[02:44:43]  we find the right abstractions i just i think sometimes that the abstraction is too restrictive that we end up just having to build the thing on the outside anyways and that's
[02:44:51]  the thing and maybe that's the same vibe i sometimes feel that this felt abstraction is a little bit too restrictive right so htmx is like how strict can we make
[02:45:00]  the abstraction to the point that we don't intend to do the majority of things but we make the one thing we focus on work in a simple manner and i think at
[02:45:13]  that they succeed so that's that's probably a better way of looking at it as i said the problem is like i'm trying to like spend a lot of time scratching my
[02:45:20]  head trying to figure out like how to move stuff forward and sometimes you have to look back to move forward you know and that's where that fits in it but like uh beyond
[02:45:29]  that like as i said i don't really have much to really think about on the htmx side leaking abstractions are are a death nail yeah unless the goal
[02:45:40]  like svelte is one of the most successful abstractions i feel as long as you're like not trying to do something too ambitious with it in a certain way and i
[02:45:47]  don't mean you can't build big apps with it you can but it's like if there's a certain range of problems there and you never have to hit them then
[02:45:52]  you never have this problem in the same way i feel like um like to more of an extreme is the same with htmx so um the truth matters a lot of
[02:46:01]  us are just building websites so like who cares right i'm i am doing something very different than building websites but i have to acknowledge that there's this overload right we'll talk
[02:46:16]  about in this week in javascript in a a bit about like the intensity of this overload and when it's done to the community um and the problem is i come
[02:46:27]  here week to week and i still um like i'm still piling on to that overload because anything i'm going to talk about is going to be incredibly difficult to follow or
[02:46:41]  complicated to think through and it's also an abstraction thing where i'm trying to think of if there's a way that we can make a nice abstraction in the same in the
[02:46:50]  same vein as what we were talking about a minute ago which perhaps htmx does the only difference is the thing that i'm trying to solve is i guess significantly more
[02:47:03]  challenging so it's like it's just like in a different place on the scale um so yeah this is this is what led me down this path where i was like okay
[02:47:17]  i had given up on a certain direction to a certain degree because i looked at it and i was like i the options here are pretty bad and are pretty heavy is the best
[02:47:32]  way to put it and we're only accounting for the last 20 30 percent perhaps but you do these mental explorations because you sometimes realize that you can get more than the
[02:47:42]  20 or 30 percent and that's what i why i looked at this because i was like okay on one hand we have something like quick which just the dollar sign can't
[02:47:56]  be the future in my mind i know it's unfortunate thing to say it's just like as long as we're living in a world with with the dollar sign and this might
[02:48:03]  include server dollar sign too i don't know um i don't think we've solved the problem like this is a uh uh along the way step conversely on the mar
[02:48:16] co side how the hell do you build the like the compiler they're building is so like no one's built a compiler like this can we solve these problems without building like the
[02:48:29]  super compiler so i started going okay fine what if i want to make resumability happen you know i've been kind of pushing it off because like as i said it's
[02:48:40]  not where we get our biggest wins but what if we want to make it happen what what would that look like so i wrote uh some thoughts down and i i can share
[02:48:48]  this in the chat for people who care i think the problem is if you read this you're gonna be like this is just ryan talking garbage out of his head and i
[02:48:55]  have no clue what he's talking about so i'm hoping to actually explain what i'm talking about answer questions and then we can kind of think through this together which is much
[02:49:02]  more helpful than trying to read something and being like uh you know what the hell is he talking about everyone who read it was like i'm gonna have to read that like
[02:49:11]  three or four more times and i'm like yeah i know this is just rough ideas that i'm spitting off the top of my head um but my my whole concept here
[02:49:19]  which is one that i actually got to give credit to michael rawlings from marco for suggesting a couple months ago when i talked to him was i i just want to
[02:49:29]  explore it more and i'm sure the marco guys have explored it more every time i talk to them it's like they have some hidden secret they're just like they
[02:49:35] 're just all knowing um but i was like okay we have reactivity i was hanging out with michael a lot in the last set of conferences and he kept on going about
[02:49:45]  how signals are the key to everything and i'm like yeah of course i know that but no i i actually listened to him like more closely and understood what he what he you
[02:49:53]  know his interpretation of what that meant and i i was like okay we have the graph right like and you can think about this like if you have a component graph right right
[02:50:05]  like let's let's pretend we have like uh what's that fill let's can i fill this with nothing sure if we have a bunch of components right let's just throw
[02:50:16]  a bunch of these around sorry where's another one why can't i grab this one okay there we go and you have like component and you have a component tree how many
[02:50:26]  more of these do i have endless components okay sweet and they pass the way this kind of works in a framework like solid is inside the component you might have pieces of state and
[02:50:42]  i'm actually going to fill these okay and what you end up passing down um how do i want to visualize this yeah let's do that and then let's let's
[02:51:02]  move this over here let's make one more of these i think that's what i wanted to do what you end up doing is you end up like passing let's go
[02:51:25]  white on these props or maybe maybe green is a good color yeah let's do green you end up passing props when you pass the props you're not really passing the component like
[02:51:36]  you're passing this state it could be reactive it could be static but let's pretend this is the reactive state you also have some static state which uh we can draw with
[02:51:44]  maybe blue but the static state is the state it never changes so it's only the reactive state that we actually care about so i'm not actually going to bother with the blue
[02:51:52]  never mind so i i'm you know yeah so i i wanted this because i want a couple scenarios you might have a component that doesn't have its own state and then rep
[02:52:04] asses the parent state down to this you might have your own state and the parent state so you might actually end up passing your own state down and the parent state down as
[02:52:17]  props like certain portions of it this might have two things of state and this one might get both of those this one might get this one but what i'm getting at is
[02:52:34]  if you look at an app component hierarchy as a bunch of reactive nodes it's a new blog this is a fair question no it's when i post stuff to dev2 i
[02:52:52]  post in a consumable way this is not at all ready to be consumed this is a brainstorm this is not like uh i've discovered it when i post a dev2 i
[02:53:00]  have an example and i've code and i show people how this stuff works this is a thinking but yeah we'll talk about this a bit later yeah so the the i
[02:53:16]  want to talk about this because sorry i'll bring this up resumability has nothing to do with lazy loading it quick does three different things resumability is one of it
[02:53:29]  but quick is not resumability like you do you understand like i i i've been trying to explain to people what resumability is mishko everyone's trying
[02:53:39]  to explain to it but i'm i'm the reason that i wanted to show this graph here is because i i wanted to kind of point out that like if you view the
[02:53:51]  app here you might have some other props coming in and i'm gonna give those props a blue arrow they're not going to connect to a circle because they might be static
[02:53:59]  oh damn it i arrowed these this one's green okay let's get out of here now i'm gonna be blue you might have some static props too like things that
[02:54:12]  don't change see that's not connected to anything on the end you might you might have maybe it's the same piece of information past here but what i'm getting at
[02:54:24]  here is the if you assume that you know these connections at server render time because you have to run all the code once on the server when you start up your app you
[02:54:46]  don't necessarily need all this stuff right and one way to solve the the okay i have to add this the next piece for this to make sense we need to add um what
[02:55:01]  should i use triangles we need to add event handlers oh damn it i did it again this is the problem i always have with a scale draw i switched to the new
[02:55:09]  color while i'm still highlighting the previous thing okay so let's let's make uh let's make a event handler let's pretend that um and let's pretend there's an
[02:55:23]  event connected to the dom here okay and it writes this to this signal okay and actually i almost actually i don't maybe i want to text you right to this signal an
[02:55:49]  example of this is like if you have you pass like an on click to here as a component prop and then you pass it on click to here as a component prop and
[02:55:59]  then it finally gets in the dom down here so this is like this is kind of the scenario i'm talking about but in in most frameworks when you start up your app it
[02:56:11]  runs down and it basically recreates all the state you need and reruns all these components all the way down and that's what hydration is but and it attaches any
[02:56:26]  necessary uh event listeners let's say in our case for the for this simple example i only have one event listener it also um queues up any effects that needs to run but
[02:56:41]  in something that's resumable you don't want to rerun everything on the on the on the boot up in fact you you you you basically only want to attach
[02:56:53]  this event handler and the funny thing is solid already does this um i don't i don't know if anyone saw my astro stream a long time ago where um there was
[02:57:02]  a problem with the way astro was hydrating and i it wouldn't work properly until i like scrolled up and then scroll down again when i refreshed the page it
[02:57:12]  was just some it was actually a solid adapter issue not astro's own fault but it showed something where i was in solid i was like clicking a bunch and then i scroll
[02:57:20] ed up and scrolled down and then suddenly the counter jumped to 10 when it hydrated um because i collected all the clicks and this is something that react solid and quick do and
[02:57:31]  i think astro to a certain extent maybe for but i i know for sure like as a core framework react solid and astro all collect oh sorry react solid and quick
[02:57:43]  all collect your events before the app has hydrated before it's even finished loading this is like all part of the streaming thing we in react they do something called selective hydration so like
[02:57:53]  if they i mean this tree is kind of backwards for my example but in react if you if they were let's say they're hydrating right to left for some reason they
[02:58:00]  start hydrating here and they start hydrating here and then you click the button react goes okay so quit hydrating here quickly hydrate this side and then let this interact
[02:58:08]  before you finish hydrating the rest of the stuff that's how selective hydration but for that to work you have to basically be aware of the event handler before you ever hydrate
[02:58:18]  um in solid we don't have selective hydration we just collect the events and then replay them like when we get to here we're like oh someone has already clicked this let's
[02:58:27]  replay it and feed it back to the system and with um uh what's the other one uh sorry with quick well they do this resume ability thing but it's it's
[02:58:44]  the same idea you just attach all these global event handlers so we're already doing that react already does that that means in theory once the inline script is on the page
[02:58:54]  the page is interactive whether you're solid react or quick you don't actually have to wait for all the code to run you don't actually have to wait for the whole
[02:59:02]  thing to be hydrated now what happens when you do click you know is a different story right because in solid's case you're going to wait for the whole thing to hydrate
[02:59:15]  if you know before it happens or or if you're lucky you know it hydrates early in react's case they will um try and prioritize your hydration and in quick's
[02:59:28]  case well there is no hydration it just goes and and and does it if we ignore all the lazy code running and stuff this is the fundamental thing that that that differentiates there
[02:59:41]  the all three of these solutions are interactive it's not like um i don't know if remix has implemented that now they probably have but like classically like ssr
[02:59:52]  like before react 18 um or in svelte or viewer a bunch of other frames some of them might have this kind of stuff if you tried to click or interact with the
[03:00:01]  app before the javascript is loaded or hydrated um all you would get is progressive enhancement essentially like you would just like oh that's a link tag or it wouldn't do
[03:00:09]  anything you'd swallow your click and it'd be gone like that's why if you have pe at least it would go reload the page but um so in a sense you
[03:00:18]  could say like p progressive enhancements gives you a different experience though because you're reloading the page so you could say it's interactive at that point but i i i don
[03:00:27] 't count that that i mean that's like a worst case scenario but like generally speaking your app wasn't interactive until you were done loading all the code and hydrating whereas
[03:00:38]  in modern frameworks that isn't the case right and i i want to emphasize this because i want to be understood a little bit like what the difference is between resumability between
[03:00:50]  what quick does and how like these aren't exactly the same thing and what portion of this do we actually care about because if you're interactive and you're non-block
[03:01:03] ing or something like maybe it's okay if hydration takes longer right that's what reacts arguing but as we saw with a million stream uh last week just being faster is a big
[03:01:14]  benefit like let's pretend solids five times faster than hydrating than react today well i i you know that selective hydration might not actually matter at all it might be just more code
[03:01:26]  to to complicate things right um it might have been better just to be faster right and um but you could argue it at a certain size that was that would be consideration
[03:01:37]  but on the other hand you know even with quicks resumability where they don't need any of the code to be there to be you know interactive technically the others don
[03:01:50] 't either um you know the code still needs to be there to actually run the code so it's not like you're actually zero kilobytes of javascript at
[03:01:57]  the beginning like that that's not you're not counting properly you have to count the code required to complete the interaction so when you click and it does the thing and then it
[03:02:07]  completes the thing that's what you want to measure i think imp is kind of along that lines that's what imp is so quick knows that so they preload the scripts
[03:02:17]  eagerly so in a sense everybody is preloading javascript the difference is a resumable framework doesn't hydrate or doesn't get blocked by hydrate between
[03:02:28]  that interaction they but they all preload the javascript they all collect the modern firmers all collect the event they don't lose your input it just takes a little
[03:02:37]  bit longer between um when it goes um so to speak now don't get me wrong there's impact of quick stuff all being asynced uh like that which means that they
[03:02:47]  do have slightly higher costs after the fact on updates right like there there are trade-offs for the different approaches but i just say like holistically speaking it's not about lazy
[03:02:57]  loading it's not about um it's about code execution is what i want to focus on here with zoom ability okay still following me uh quick sidebar here when you refer
[03:03:11]  to how does react store client component on there do the consequences no that's the difference it's not like dot net it's the reason it's it's not stored because you
[03:03:24]  don't unload the page right i imagine router refresh is just like the the app router refresh which means the app is still there in the client you don't need to send
[03:03:31]  anything back to the server the trick is when the server gets a new url and goes to render the parts that it needs but if the refresh um then there is no new
[03:03:42]  url they know what components to render they just don't render the client components on the server and get the new props going into those client components and then when it gets
[03:03:54]  to the client they just while they're diffing all the rsc stuff that comes back they hit the client component and go like oh yeah same component pass in the new props
[03:04:03]  update it on the client so basically the whole trick to rscs is after the initial page load you never render client components on the on the server so you don't have
[03:04:11]  to send anything back and forth because all you need to do like every page starts from the server so there's no there's nothing to send like all the like in a
[03:04:23]  server component setup the topmost thing is always a server component so and there's no state in it so it's only these static things kind of so like your starting point is
[03:04:32]  going to be a component like this where it has state pretend this is green and or sorry blue and that this red arrow doesn't go up all you need to know is
[03:04:41]  what props get passed into the client components um that back and forth trick is what asp.net used to do which was terrible um big mess and you'd be sending the same
[03:04:52]  data back and forth multiple times this is why this is different because the client app never unloads they just use diffing okay but i want to be resumable and
[03:05:07]  the the thing is sure i have this information here but it's really tricky if my first point of entry here is this code here where i go set state essentially update count pretend
[03:05:21]  this is a count state here that i pass through and pass through and then i get to the event handler and i'm like count equals count plus one and the the problem
[03:05:31]  is when you get to this point if first of all you need to know what count was right was was count uh was count 10 what was count so you need to know that
[03:05:46]  and i mean i think i've shown this in code before but uh let's trash this or second like i mean you can see this right here even without going through the
[03:06:00]  components if this is my code entry point increment it can't live in here inside this function that i never run it has to run up here now how the hell do i get
[03:06:17]  set count up here how do i get count up here if i haven't created the component that creates the state right that that's the that's the problem right like if you
[03:06:33]  sure you have this event handler but how do you you do it right and quick's answer to that largely it involves a lot of serialization right you you can go okay well
[03:06:46]  i can pretend because i can pretend it's not hard to know you can go this is location zero for this for this component instance so you can say this is component one
[03:06:59]  in the tree the topmost component let's say and this is zero so 1.0 is the signal and now instead of doing that you can basically go like you know
[03:07:11]  look like let's call it uh let's go context one zero and actually it's the second index in the array so context for component one the first piece of state or
[03:07:31]  actually let's call it component zero context for component zero first piece of state zero the setter so here's one and the count is is zero it's the first argument
[03:07:44]  of the array right and tada now as long as we write the right thing into these locations in context um we can essentially have our stuff so if we write that this
[03:07:59]  is you know a zero context zero zero is a signal with a value one um you could you have the information you need to you know create it and then there's this other
[03:08:12]  part where you actually want to update the dom and for that you you have to also kind of go okay well i need to also know that the signal and you know this
[03:08:23]  because your server render it you need to know that the signal also has a dependency um basically if you gave every signal a number so you know this is the first one in the
[03:08:32]  app so this is you know signal zero um and you gave every like effect a number or something you know and this is effect zero the first effect in the app then like
[03:08:43]  essentially you can go signal zero has effect zero as its dependency and then as long as you had the right way of when you run it to like link it to the right way
[03:08:56]  you could possibly unwind this thing and this is essentially what quick does um and you know because of this hoisting because like the way we pulled this out and kind
[03:09:08]  of pulled this out you know there there is this concern right that well what if you have something else like const some number and then i don't know like i'm just making
[03:09:25]  a situation up but like there's a concern this one is actually a good example uh what if increment is by numb right like you start having closures other closures so
[03:09:38]  then maybe you give this a location and whatnot this is static so it's pretty easy but it's like what if it's get numb you know like this this continues on and
[03:09:47]  because of the potential of this hoisting and the need for this value that's returned to be serializable um they quick came up with the convention they're like okay well
[03:10:00]  we should put dollar signs on stuff to tell you that hey this is gonna get hoisted out and i think with quick even if you don't inline it you have
[03:10:09]  to put a dollar sign around the function call as well i forget if they've changed that slightly but what i'm or the function definition but what i'm getting at is they
[03:10:16]  put all these dollar signs in here so you know that hey this has to be serializable that gets passed in here like because we're going to serialize all these values
[03:10:26]  and you have to be aware of us doing this otherwise you know at runtime you're going to get some random error that's like this value isn't serializable and you're
[03:10:33]  like why the hell should this value be serializable so that in in a bunch of different places they put dollar signs to kind of warn you indices sound like how hooks have
[03:10:45]  to run in the same order yeah it's kind of it's a kind of bit like that but if you think about it a setup function that runs once also has that property
[03:10:52]  because it only runs once so there is no it only runs in one order right um yeah yeah computers are getting more fun because if you got to serialize like yeah a computer
[03:11:04]  is actually an easier example here because if it's like const double count you can actually see the problem because you're like create memo uh count times two well you're referencing
[03:11:16]  this count like if you don't want to if you the you know the thinking is like if you only need the code that you need at the specific time if you don't
[03:11:24]  need this code then you know this should be dollar sign two and and so on that's kind of like the whole thinking we break it up as small as possible we know all
[03:11:34]  the all the possible serialization boundaries we serialize what we need as we run on the server and that's basically um how quick goes so there's a will serialize
[03:11:45]  dollars and this might serial yeah dollar sign is like it's it's it's all a might and because it's kind of like if you use well here's a similar scenario
[03:11:56]  if you put use client on a bunch of your react components it's only the top most used client component that actually has to have serializable props because that's the one that
[03:12:05]  goes over the server uh server client boundary for server components um all the other used clients basically do nothing and it's kind of similar quicks compiler will arrange all the code
[03:12:16]  and use the dollar signs to both inform the compiler and also inform you that this could be serializable or need to be serializable but they enforce it because they automate where those
[03:12:28]  boundaries happen you don't define it so from that perspective this is probably the one of the sanest things you could do because otherwise like it could be just literally anywhere you
[03:12:37]  could be like in the middle and they're like because of like some intersection of reactivity they're like sorry this memo needs to be serialized all of a sudden you're
[03:12:43]  like but i was calculating some unserializable value with it what like they that's that's why they do this oh yeah okay quicks the second i see what you
[03:13:00] 're saying yeah yeah it's actually using this kind of abstraction is actually kind of safe and in fact this abstraction we've seen it before too what's another example of it oh
[03:13:10]  svelte svelte um let's do this svelte dot dev um repl let name 2 be hello world 2 and then we actually need to actually i'm
[03:13:30]  gonna handle myself we need to put click handler on here otherwise it's not going to do what i want to show which is that um name plus equals exclamation mark the
[03:13:42]  reason what am i doing here oh whatever i don't care this is felt telling me that i have a accessibility error my point is if you look at the compiled output here what
[03:13:56]  you're going to see here in svelte besides you know all these light nice us developers like using these kind of t12t but you're going to see here
[03:14:06]  is there's going to be like index based dirty checking uh oh right i need sorry name two that's my problem there we go i'm like why is there only one yeah
[03:14:16]  where is it we're going to see index based dirty checking here if index is one do this if index is two do this they basically do the same thing they just put
[03:14:29]  these into slots um okay so svelte is the same category the only difference is um svelte is localized and we want to do this like svelte only cares
[03:14:40]  about the component right like dirty in this whole check and this whole context is literally like re-render the whole component right svelte like react re-renders whole components
[03:14:48]  but we want it at a more global sense in our in our in our in our system here so how does quick handle on serializable stuff well that's the thing it
[03:15:01]  just errors at you and i to my knowledge it goes hey this thing isn't serializable like if you're crossing a dollar sign boundary it has to be serializable end of
[03:15:10]  story that's why they've worked so much they have one of the craziest serializers in terms of like different kinds of things they can serialize basically if there's a
[03:15:18]  dollar sign it has to be serializable no this is a lie it has nothing to do with lazy loading they load all the code eagerly that he shows that demo so that
[03:15:35]  like people can uh so so like people can see that the code doesn't need to be there but in reality quick loads all the code the same as everyone else yeah sorry
[03:15:49]  i i seem harsh on it just even me even i'm feeling their frustration a bit and it's the problem is how they teach it um the the they teach it by showing
[03:16:00]  you that the code doesn't need to be there which is a really nice trick but then everyone's like oh well if i want a subway the truth of the matter is
[03:16:09]  i mean if if you go to like i don't know builder.io i'm pretty sure this will work although they do another page technique but if i go here and i
[03:16:19]  like flip this and then i go was it sources come on p uh disable javascript at this point or not not disable javascript sorry that's the wrong one
[03:16:32]  i want to sorry i want to enable javascript again my bad enable javascript i want to turn off the network right um offline like i hope there's an interaction
[03:16:47]  on here that i can show but like see they do this trick where they actually only load half the page on their their website but like code that okay maybe they didn't
[03:17:01]  make their own website do okay sorry this is like the worst demo um okay never mind maybe in theory they should have already loaded the the code for the for this menu um
[03:17:18]  uh to to my knowledge um the second that i shrunk the screen so to speak i mean they could have done it eagerly in general but the way quick generally works is
[03:17:29]  that they preemptively the builder site might be a little bit too aggressive on the js bundles yeah they are yeah this is actually i yeah okay never mind okay fine
[03:17:42]  this is a fair this is a fair concern depending on how people build their quick app um but in general i like from a theoretical standpoint if you build quick the way that i
[03:17:56]  would build quick this won't be this wouldn't be a problem you also wouldn't be able to be as like huh i don't load the code because i would load the
[03:18:04]  code like this is part of why i don't care as much about that aspect of quick because like that whole trick doesn't like if you if if you can take advantage
[03:18:22]  of it too aggressively then you have the exact problem that you're worried about and if you do the sensible thing then there's actually no particular advantage of doing it that way
[03:18:34]  versus doing it how another framework would do it right okay cool so i guess the builder.io website actually isn't the best example i'm sorry mishko for doing that
[03:18:44]  i wanted to prove your point home but i guess i i missed on that but um like what i'm getting at is like these are other concerns right the quick is so
[03:18:58]  was so focused on that lazy loading though that they made sure that they were going to serialize all these little pieces so i came at it and i was like well what if
[03:19:07]  we don't serialize everything what if we like literally don't care because like in the most resumable sense yes you have all that data let's ship it all across
[03:19:14]  but it's one of those like memory versus cpu questions and if the cpu isn't that bad i told you it's the last 20 percent um i mean you
[03:19:22]  could argue this uh serialization isn't that bad either i guess but but i i started thinking well what what the problem with the serialization thing is if with if you don
[03:19:32] 't do the dollar signs like if you can do the dollar signs and now everything needs to be serializable and it's kind of a pain in the ass i'm sorry i
[03:19:39] 'm just i'm not going to be convinced on otherwise but if if you got rid of the dollar signs and tried to do the smart thing the problem is once you hit
[03:19:48]  something that wasn't serializable that needed to be serializable you were you're screwed like the system has to work that way unless it didn't so i was like okay baseline
[03:19:59]  what if you didn't have to serialize anything would this be possible could we actually pull off something very similar but serialization could be opt-in and optimization like there's
[03:20:12]  certain data that you know is serializable like resources like async stuff you know when you're going to load something async and you expect to go across the client server
[03:20:19]  you're like yeah okay fine that can be resources have to be serializable they have to be serializable today and solid you know this it's fine but i don't want
[03:20:26]  to worry about some random crate memo down the line right so what what i start i started thinking about okay if you assume that they're often like a resource is often then is
[03:20:38]  it impossible to do resumability and i looked at this graph i got a lot of kid noise in the background right now someone is very sorry okay um but if
[03:21:08]  you look at the graph here we actually have things that are separate or tied together independent of the component system like for example if you need a code over here for this part
[03:21:25]  you don't need this code over here do you know what i mean like like you can see that there's a logical place where this breaks apart it's actually along the reactive
[03:21:35]  graph it doesn't need to be every freaking point right it's actually and the thing is it occurred to me you can see that in this code like the original code i
[03:21:47]  have here with this account the signals themselves are always like the source is always in the code whether it's serializable or not there's nothing hidden the the initial value is
[03:22:04]  always in the code it could be one it could be new date it's always the the initial value is always in the code and the other key part about the initial value
[03:22:15]  is that um it never changes during ssr unless you do something like new date or random but we already know anyone who's done ssr in any framework knows you
[03:22:26] 've got to make the client and the server match otherwise things go terribly bad right like so yes our new random thing what is it sorry math dot random um but yes like
[03:22:47]  this is this is not going to work anyway in in you know standard hydrating you know framework so to speak so if you just assume the rules of ssr that
[03:23:00]  the client has to match the server signals never be get get changed during ssr the only thing that happens is you drive data off resources so your resources can load and you
[03:23:11]  can have async data but that's derived you can have those code paths but signals themselves never get run into no no set state on the server it means that the initial code
[03:23:18]  for initializing it could be like it could be props dot whatever it doesn't matter is always in the code that you encode in like in the code you encode
[03:23:28]  sorry like it's always there you don't have to worry about serializing it somewhere else because it's always part of the actual code right and when i started thinking about that
[03:23:44]  i was like what if you could just basically like you can tell when expressions are static like what if we could just look at a component like a counter like this and essentially
[03:24:02]  break up each expression into a bunch of like use that trick quick was doing with the uh with the um um hoisting it up so to speak you know like i was
[03:24:16]  showing here with the numbers and the zeros and the ones and whatever um what what if you could just instead of serializing numbers like serialize all these code locations right like
[03:24:28]  creating the signal the um cloning the template perhaps this silly console log that i put in this example for no reason just to prove my point um this event handler um sorry this
[03:24:45]  is the event handler right that's up it's basically get the scope and then increment it by one um what's this one this is the dom renderer the idea
[03:24:57]  is if you could register them on a hash based on code location you could combine both the code location like so the compiler hash based on like line number this in this file with
[03:25:07]  an instance hash based on the hierarchical ids you ever seen the data hks in solid um like basically the idea that you know at the top there's component one and
[03:25:16]  then it's children like if you want an idea of what what hierarchical ids look like like we could pretend like let's let's make a hierarchical id system
[03:25:24]  zero zero point zero zero point one zero point two i i think i'm hoping no i'm hoping kind of get the point why is it zero point zero point zero
[03:25:57]  um zero point one zero okay sounds like a burrito but what i'm getting at is if you have some kind of hierarchical id system combined with ability to like hash up
[03:26:24]  specific code locations you both you could basically unwind the component and this simple example is actually not even optimized because you could tell that this console log has no dependencies so you
[03:26:36]  could probably just remove it from this global registry and just only include it but down here my point is you can hoist it up or you can call it as a function and
[03:26:49]  run all of them directly and this if you've ever seen solid code this is basically what it does it creates the signal right call so create the signal s1 run the
[03:26:59]  console log s2 create the template add the click handler insert um the children the account and then return the element and what i'm getting at is this you could know because it
[03:27:14] 's static you could actually get rid of it and just put console log in in here like wherever the s1 line is just keep it in mind but the idea is you
[03:27:22]  we don't actually need to serialize it as long as the code that that we initialize here actually writes it to the scope or reads it from the scope right and
[03:27:38]  okay this is pretty technical but what i'm getting at is if you if if our component is only rendered once on the server you don't need the client render path it would
[03:27:49]  only render again if there's a conditional like a show statement above it so you can actually just remove this code and i actually showed in this example i should have if i remove
[03:27:59]  this code t0 see this t0 here it's only like i should make template pure the other ones aren't pure it's only referenced in here you can actually remove
[03:28:07]  the template call right from the code here but what you're ended up here so forget that this is here you're ended up with just a couple statements that are registered globally and
[03:28:18]  this event handler and then what ends up happening is when the person you know we serialize something in the dom about the location of the event handler when we server render and when
[03:28:29]  the person clicks it just goes to that location which finds you know e0 it goes to read the scope finds this using that combination finds this location finds that there's a
[03:28:45]  signal there which is fine it creates it with the initial value here like we're not actually saving much and then it knows i mentioned about the dependency checking it knows when we
[03:28:58]  ran on the server that its dependencies include the inserting it inside the the button here like the count is used here so it then goes okay i create it and now i have to
[03:29:10]  run this statement which reads the element um uh so it reads the signal and then it reads the element which is scope one scope one calls this get next element call which knows that
[03:29:24]  it's hydrating or that not hydrating that it's like initial run i like there's a little bit of detail here and it doesn't clone the template it just
[03:29:32]  gets it from the dom we do this this is how we hydrate today so we get the element and then we insert it basically we run the code backwards from the event handler
[03:29:40]  instead of from the component and what ends up happening is when you click on this it just kind of goes up the red and down this but it doesn't it doesn't
[03:29:50]  do a first hydration pass and it doesn't touch anything over here it basically just runs through the dependencies here so and it doesn't do that until you click on it but it
[03:30:02] 's not the same as hydration because with hydration generally you actually have to like you have the previous data you go through and go oh count was one let's wire this up
[03:30:11]  wire this up wire this up at this point count is already two and you're running it the first time and the the key is because sorry going back to my document because you
[03:30:24]  read the scope which created the signal and then immediately incremented it which you you you're basically just chaining the um thing now it's not this is obviously not the
[03:30:37]  most efficient thing in the world because we are sort of creating the stuff as we go which is not unlike hydration but we're not doing it in two passes we're doing it
[03:30:48]  in one pass and if we serialized we could skip some of these creation steps but it shows that without serialization we could still do significantly less work yeah this is similar
[03:31:01]  how update propagation but it's not but yeah exactly that that's that's that's the idea like what if we could just use the graph at the point of interaction instead of
[03:31:13]  running the components initially as long as the only thing we have to serialize is not your data but the reactive graph like the dependency of the nodes that that's the whole
[03:31:24]  idea like we serialize we have like some kind of consistent system for identifying the the signals and the computations but your data doesn't have to be serializable so you don
[03:31:35] 't need the dollar signs that like i i talk about it a bit later that this might not be perfectly efficient because you can have data graphs not that it's not the diamond
[03:31:46]  problem but very similar where if you change a in this approach and go to c and then go to e well it's going to go i need d and b and if
[03:31:56]  you had serialized d if you serialized all the values when you changed a yeah you need to recalculate a and c and get back to e but you wouldn
[03:32:05] 't have to do b and d because you would have already had the serialized value right the thing like this is banking on the fact that like initially you don't run anything
[03:32:11]  but then when you go and change a well then yeah you're gonna have to rerun c you know what i mean like a has changed so you propagate it down the
[03:32:20]  biggest difference here is without serialization you can't prevent um grabbing all the paths downwards but as long as you serialize key things like um async data things that are expensive
[03:32:35]  like you have to go to the server like so if d was like a resource and you just went to d and go yeah i got the value and just move on then
[03:32:43]  then you're kind of like in this interesting boat where it's way cheaper than hydration but you're also kind of not forcing people to have to as i said serialize or
[03:32:56]  put dollar signs everywhere like what we're talking about here is in that last 20 percent instead of doing the most optimal thing you can imagine at the cost of like literally like
[03:33:12]  breaking your code of building places or whatever you do something that is like i don't know it's like it's like a 20 of a 20 you know what i mean
[03:33:23]  we're just we're still catering for the 60 for like the 60 or 70 case right so like at a certain point that that that percentage just shrinks to something very
[03:33:35]  very small right that that's basically the whole concept of what i wrote in this document is the thinking through if systematically if you could unwind components would it be possible i i
[03:33:46]  noticed something else that was kind of interesting about this was that um and this only works on like static stuff without components but it's important what i noticed was when i did the
[03:33:59]  props example which i don't explain very well i have to admit but this idea is like what if you now have a child component like a button component in here and you you
[03:34:08]  with a button in it and when i was looking at this kind of basic example of a counter with a capital button and you know little button inside i i started just writing
[03:34:19]  out the code because i knew that the this one would have to have a way of initializing the props with its scope right and you're like how do you get that scope
[03:34:30]  well i mean i have to think about this a bit but if you're going from here to here you just remove the last digit of the hierarchical id and if you
[03:34:42]  think about a context lookup could work like this too right you you just have to walk up by by using the hierarchical ids but um i mean there's details
[03:34:55]  that work through there but what i'm getting at is the weird discover i realized is that the create component call for the button with the props this is yes this has expressions
[03:35:09]  inside these uh inside the you know on click and read children or whatever like like this whole this whole button has expressions but the create call only happens when you call create so if
[03:35:23]  if if you look at it i realized something kind of funny that in a simple situation like this if this was your whole app let's say if you never imported counter to
[03:35:34]  render this button i mean i don't have the import statement up here doesn't actually get used anywhere else so you could actually not import this as well automatically it's only the
[03:35:48]  which would eliminate this template um you know it's only the effectful stuff this stuff that actually has to stay around so when you i actually did this example later on in
[03:36:00]  the doc but when i was like looking through this thinking i realized like wouldn't it be funny if like in our counter props example if you if you actually removed it you could
[03:36:15]  essentially this is me erasing the default exports and removing the template and removing all the equal so equal whatever this is what would remain um which is literally like nothing the only
[03:36:29]  thing that runs at hydration time is like register a function register a function register a function register a function register event it's like there's no there's not really any execution you
[03:36:40]  know like it's just basically like put this in a map put this in a map put this in a map put this in a map essentially and you eliminate all the template code
[03:36:50]  automatically like these are really simple h1b1s but if you had a lot of html you'd actually just like shrink that out of the bundle automatically hopefully
[03:36:58]  some people are still with me i know this is like heavy stuff but yeah i i i think this and what was interesting for me about this realization is that if you could do
[03:37:12]  this kind of code elimination by banking on this inversion through presumably this is why frameworks like marco or quick haven't been looking at rscs as much because like you
[03:37:29]  don't you kind of go well i don't need islands right like if i'm i did the smart enough i could just um avoid needing islands at all essentially because i
[03:37:46]  can tree shake out the the dead code i was thinking about this but i realized that there's actually this this is actually where the the the you yes see how do you
[03:38:03]  do islands routing though yes yeah first of all yeah how would you csr and uh subsequent navigations well one way you could do it is assume that the roots for those
[03:38:15]  islands are always server right and then just go okay my root is server which means like you know i have this kind of funny idea here where i was like what if like the
[03:38:26]  hydrate call or the thing didn't actually need the app component you could just import you know like this and then just say hydrate from the root and then if your
[03:38:36]  app component looked like this it would basically other than some props things but you could say if empty props weren't really a thing like essentially you could just automatically turn your code into
[03:38:45]  import statements right like this because you don't actually need any of these to be to create it and this one only runs once and then like you basically just out like shake out
[03:38:54]  all the code but i realized that this thinking was not perfect because okay the biggest benefit of islands in addition would we have a place that i defend to identify this is where
[03:39:06]  you serialize the props we don't need all the props all the way up it's code size optimization but it's serialization yeah so basically if you don't have islands
[03:39:15]  in this example you would always even if this component is base like this component has state but if this component didn't have state like if if if there was no green here
[03:39:31]  and it was only blue down um you'd still need to um like you're not like you're not getting you're not pruning the props essentially you'd have to go
[03:39:47]  all the way to the root component and if you have islands you can just go like i'm going to serialize props from here like obviously this is server component now so it
[03:39:55]  wouldn't have state but my point is you can basically indicate what point you serialize the props at and chop everything above it not that that everything is much that's what
[03:40:04]  i was saying here i was like oh that everything might not be nothing much it might be just like a bunch of empty statements that don't matter but um it's more than
[03:40:12]  that it's that i realized a couple things think think about this scenario uh how do i want to show this think about when you you have this jsx it's going
[03:40:28]  to look like layout something okay and the reason i pointed out is this gets compiled into uh you know the props object for layout exists and it has get children get children create
[03:41:00]  component something okay my point is this doesn't tree shake out because the props get hoisted and now this reference is in there like if this was just div it's fine
[03:41:16]  but as soon as you insert components and other components these get lazily created notice the git this is how almost all front-end frameworks work but there's an exception um server
[03:41:27]  components eagerly create their children right because you know that they'll never get re-rendered they get re-rendered once on the server and then the client even
[03:41:37]  if you show and hide them like 10 times they only got rendered that one time on the server so to properly tree shake this without it being like basically because this can be dynamic
[03:41:46]  it's it's tricky to actually drop the code out properly to hold on like basically all the prop right sorry i think i lost the internet for a second but yeah what
[03:42:07]  i was getting at is quick solves is because like all of their props are serialized marco so then they don't worry about this because they're like very aggressive on
[03:42:16]  the serialization marco doesn't worry and and they do code splitting and like they if something could be there they just pull it in you know like it's like they don
[03:42:24] 't care whereas we want to differentiate marco solves this because the compiler goes into the child components and like goes oh could this be dynamically generated well we know this information so we
[03:42:35]  can like they know marco knows exactly how the whole reactive graph works like they they analyze the whole freaking thing so they're like oh yeah this can't change so they
[03:42:44]  can be smart about it we don't have that compiler we don't want to go crazy with dollar signs so the other way is i said is server components actually eagerly insert
[03:42:56]  their things which let these be tree shakable again so i i realized that if we actually like this tree shaking that i was talking about basically like sure this example is
[03:43:11]  great but it basically ends at the router or the first context provider because like what like yeah let's change this to provider you know we're done however if this is server
[03:43:30]  component like we're in a server component world and then this is a server component still well then the fact that this is a client pro component this provider doesn't matter we can
[03:43:41]  still remove the code if if this if is basically what i'm getting at because if you're in a server component context you know that you're basically going to um create this
[03:43:53]  template or this piece eagerly so to speak all right yeah i i'm probably starting to lose some some of you all but i wanted to kind of point out that was
[03:44:08]  the second thing and then finally when after the fact navigation we talked about this when we were talking about um how react server components work there's a reason i answered that question
[03:44:21]  earlier um about uh the router refresh when you change the page in a hybrid router and you go to the next thing and you're still or you do a refresh or whatever it
[03:44:37]  never renders the client components again on the server how do you know what the client components are to not render again right because the only the reason you do that is because
[03:44:46]  of context and if there's a risk of context being read in any component it just it will break so if you know that hey this is a client component then you can you
[03:45:00]  know make that determination again marco can trace down the whole graph and go oh your use blank blank blank is actually calling context which actually now we know so we can be
[03:45:12]  smart about it but like any framework that doesn't go through like 10 can't trace through 10 files to figure this out has no way to know that use blanky blank is
[03:45:22]  actually a context call i mean you could say it's a hook so you can just say but then like as i said you're back to a heuristic which is basically
[03:45:30]  like if it's stateful you're just automating the islands that might still be an option here i didn't discount that i'm just saying like if you're at
[03:45:37]  a point where you're just going going if it has a use or create call or whatever it's a client component then it's still a client component like you're just autom
[03:45:45] ating it so essentially this doesn't remove the the the potential of like not having islands explicitly like you could automate the islands but my point is that you still need some way
[03:46:01]  of marking that could be understand at compile time that there's an island there whether it's manual or through some heuristic um because otherwise you wouldn't know not to render
[03:46:14]  it on the next render okay give me some water sorry yeah everybody got really quiet about like 10 minutes ago um but yeah my the whole theory behind this is that regardless of
[03:46:49]  all these specific cases i have in here essentially it should be possible to unconstruct the component into statements remove the static ones or the things and keep them in there and
[03:47:01]  basically replay it's not so is this resumable i asked well it doesn't hydrate but it does replay portions of the graph as it needs it um it should be
[03:47:13]  possible so yeah maybe i can't call this resumable but it basically replayed the portions of the graph at time and in so remove initial load time and the impact
[03:47:27]  of that interaction cost is not going to be any worse than i don't even think it's worth the most resumable frameworks if you think about it other than the when
[03:47:39]  right because if you think about it any resumable framework has to actually when it gets to the serialized signal go oh okay i need to create that or have that
[03:47:47]  representation or link up the nodes do the work they do create stuff on the fly they just don't do two passes the difference is this would resume more of the app that that
[03:47:57] 's the best way to put it this would resume more of the app on interaction it'd be like it's not doing any more work in total it's just doing like a
[03:48:08]  it's doing it a little bit sooner but not immediately and the cost of resuming compared to hydration is just not comparable like the cost of resuming over the cost of
[03:48:19]  uh like this is something we have to measure but like if you think about it like any interaction like if you have a button that adds a row to a table like it
[03:48:36]  we're in that level of heaviness not like i'm re-rendering your whole freaking screen right like the added cost of that first interaction i imagine is almost nothing in
[03:48:48]  fact mishko made a test where he was showing his resumability like the cost of interacting like what i'd expect is in 90 of the cases it would be
[03:48:58]  equally as efficient as most resumable ability of resumable solutions and in that last 10 it's still you know barely on the on the meter so to speak yeah
[03:49:15]  i'm listening just need to read the blog post actually that's everything yeah yeah that's fine and honestly this blog post is not even a blog post it's probably too messy
[03:49:22]  at least greg knows what's going on here yeah yeah which is something is yeah i mean i would have to prepare better resources and stuff well what's really cool about
[03:49:40]  this approach and the reason why i'm talking about it is if it is worthwhile doing if we can measure it this actually isn't like a solid star feature it just resume res
[03:49:49] umable hydration or as you call it is just a different hydration technique so in theory today when you have the solid compiler you just go hydratable true like and then it
[03:49:59]  generates well actually we see it right here look um let me remove the garbage actually let's just trash can it yeah okay look if you go here and you go the output
[03:50:08]  you see client-side rendering looks nice temples whatever and you go client-side rendering with hydration it's almost the same but it's a little bit different uh we account for
[03:50:19]  stuff like git next element so like you don't always create the template sometimes you grab it um we run those hydration events i was talking about where we you know the ones we
[03:50:29] 've recorded it's mostly and there's that pure call in the template i was talking about like it's mostly the same code but it's a little bit different to suit
[03:50:38]  hydration and then server-side rendering is different completely but my point is this is just a different hydration technique so in theory we could just replace solid server-side rendering and client
[03:50:50]  rendering with hydration technique with this and then everything all our ssr would be this type of resumability it's like it has nothing to do specifically with solid start has
[03:51:00]  nothing to do with islands it has nothing to do like this technique might not shave off a bunch of code um without islands like i was talking about like all the things i
[03:51:11]  was talk talking about but it is literally just a straight compiler swap like you basically just go okay when you're instead of hydrating generating that code hydrate generate this code and
[03:51:21]  now all solid apps whether they're an astro whether they're anything like maybe you're not shrinking the code but they they won't execute they'll execute this way so this
[03:51:29]  is kind of cool because it gives a it's actually completely independent of the islands router research what well this is what i'm getting about this isn't there doesn't need
[03:51:45]  to be a use case it's just it's just like less expensive hydration it's like would you like less expensive hydration on your app i think the answer is yes always
[03:51:57]  like if you if you serve a render would you like like you know how i i in that benchmark earlier i showed that solid start was like five points ahead of all the other
[03:52:07]  ssr frameworks because i'd improve some serialization this would be like that like what if you could just take take the spa framework exactly as it is today and then
[03:52:17]  it's like oh another we this resumable thing actually gained us another x number of points what what if it scored 80s what if it like a low 80 like maybe
[03:52:26]  it's not maybe there's some more code than the island example so you know it's like slightly lower but it's literally just a spa like it's just better hydra
[03:52:34]  better hydration it's there's no actual use case for this beyond it being ssr now if you combine that with islands or rsc stuff you get like a much
[03:52:42]  better thing and that's like more in like solid start range but this is just like what if we hydrated differently yeah i mean that's that's what i'm getting at here
[03:52:51]  i don't know what the gotchas are yet i mean there's a few things that i talk about here but instead when i came up with solids hydration approach no one had
[03:53:00]  ever done fine-grained hydration in a javascript framework before i had to kind of like invent an approach that made sense we have those data hks and all
[03:53:07]  this stuff with jsx like it was challenging because there was there's literally nothing like it there's no hydration for knockout js there's like no one has had ever done
[03:53:18]  it before and then i'm looking at this and i'm like this is just a different approach to hydrating which kind of plays off the reactor graph so if we can serial
[03:53:27] ize the reactive graph and the component trees hierarchically then this is just a alternate way of hydrating i don't know like it's possible that that first interaction cost takes
[03:53:39]  a hit in some cases and then we have to like we have to measure but my my gut is because how the average reactive app is not too deep it's wide in terms
[03:53:49]  of how it it does it you don't do many like big transformers you do mostly a bunch it fans out so this is built very much for fan out because you only
[03:53:57]  need to worry about the sections i think some of the big trade-offs that i've realized here it's first of all in the same way that no one's actually
[03:54:02]  figured out fine-grained resumability except maybe marco um like quick has a vdom you ever wonder why quick has a vdom it's largely because structural changes
[03:54:14]  actually add a complexity here quick has not figured out fine grains uh resumability in terms of structural changes so i you know hypothesized what that could look like um in
[03:54:27]  here but it looks like from my guess it's doable but i i mentioned before quick had those keys in the dom well then you need keys how do you get keys well basically
[03:54:38]  i think our four component would might have to have a key concept again i don't know if that's worth the trade-off but i'm just throwing out there if
[03:54:47]  if if adding a key to four is might be what it takes then there is a trade-off right it i mean that's a gotcha right you your four component now
[03:54:55]  needs a key i mean adding the key is a thing you know but i you know i but there's plenty of frameworks that have keys and don't really complain about it well
[03:55:04]  i mean then you're going to get a hydration mismatch essentially i mean it's not hydration but you're going to get the equivalent of hydration mismatch yeah the problem
[03:55:19]  is it still has to match right so it's either going to replace all the dom nodes or you know like the i don't think there's any salvaging it because you
[03:55:30] 're there's no hydration so the problem is if you have a list that's a b c d and the very first thing you get and we didn't serialize your data
[03:55:37]  because it's like a bunch of crazy objects and we want to do that and the very first thing you get back because someone swapped the rows is a b d c then
[03:55:43]  we have to know like which one was c and d in order to to move them and we have to like we have to like grab the elements and go okay these are a
[03:55:52]  b c d do we have a we have b c and we have to arrange them we have to do a basic diff so like um yeah i think i think for this i
[03:55:59]  think a key would have i think this is the biggest trade-off i think you'd have to add a key the four component would need a key but like as i
[03:56:14]  said like so these are these are these are things to consider um i obviously haven't gone too deep on this but there is a bit of a mapping thing uh right like
[03:56:27]  in the dom like the stuff you see in quick like another trade-off is you're going to have more artifacts in the dom like more of those uh comment nodes um so
[03:56:36]  we we do have to measure that it's just it's just interesting in that if it is worthwhile this has nothing to do the code splitting has nothing to do with islands or
[03:56:46]  partial hydration it's just like maybe more efficient hydration but as i said i think you could basically call this resumability it's not it's it like in the quick
[03:57:00]  calls their stuff resumability but when you miss a fine-grained update and get a component re-render it's it's like that do you know what i mean
[03:57:08]  like like quicks as long as you don't have fine-grained structural updates then you don't have like true resumability because you're like you're you
[03:57:20]  know creating feed on nodes and doing a diff and re-running that component and you know what i mean like i would argue that that's not the purest version of res
[03:57:31] umability um anyways so like it's about that level of deopt the difference you know and again this is only yeah i love that you said it's not going too
[03:57:47]  deep yeah i guess it's pretty deep yeah i mean this this is the this is this is the question right i i the thing is my gut is if if if you
[03:58:00]  if we if this proves worth it it should be the new norm honestly like because it's like so far i don't see any like the big goal of this exploration and something
[03:58:17]  about the c is that it actually didn't really have much in the way of gotchas or trade-offs so you could author components the exact same way as i said the
[03:58:24]  only thing that i've come across so far is the four component maybe there's a different solution for it but if we can solve the four component as a key is one
[03:58:34]  obvious option um then yeah like look like you just write the same code and it just rearranges it slightly so this could very much be the the the default way of doing
[03:58:53]  hydration hdmx yeah yeah sorry yeah i was trying to read your thing presumably is it is there a gimmick that you can do dehydrate back to the h
[03:59:09] tml yeah i mean that part is the gimmick part i mean the thing is what javascript framework can't do couldn't do that i i it's funny because
[03:59:23]  they talk about it being a special thing but you think about it next has you know next i guess it's because everything's in that context so it's not so hard
[03:59:33]  to just be like okay write that out to a div but if you think about it like every framework serializes a certain amount of state into like a next json script or
[03:59:41]  whatever and then when the thing starts up it like has that data there and it goes and if you copy that same html into a different browser it would do it the
[03:59:51]  trick is that with quick you because they already centralized all the data structures through the the registry or whatever through the lookup they can just serialize it back in but you
[04:00:00]  have to understand quick used to actually keep it in the dom that every time you updated it would update that but can you imagine how slow that would be because the dom like you
[04:00:09] 're just adding an extra update to like touching the dom nodes every time you change something so quick stopped doing that they started consuming the script and then gave you the ability to write
[04:00:18]  it back out when you wanted to freeze it and move it i think there's more interesting things about the their their approach especially the vdon whatever because they're talking about
[04:00:27]  like you can like start an app on a build pipeline and then pause it and then start it there like in the same way react server components are talking about how you can split
[04:00:34]  the execution react across those different spheres quick is talking about pausing and resuming through the same sphere so i think i think there's more potential here um when you look at
[04:00:47]  the ability like what you can do when you serialize everything but as as usual i'm mostly looking at this from a performance standpoint um and with the kind of practical mind
[04:00:58]  in the sense that if you follow what i've been saying and i get at this at the very end when i'm talking about like is this insane is that this this
[04:01:10]  this could be basically an invisible optimization like especially if you combine this with something that automatically could detect where islands are like marco has done since 2017 then you literally could base
[04:01:26]  i mean i don't know if i'm okay with that because i don't know you don't you this the prop serialization like where it starts might be confusing but if
[04:01:36]  people were accepting of that you could literally take something like a i mean there's some syntax stuff aside but you could basically take like solid startup author it exactly the same way
[04:01:46]  you would today you know with few api adjustments whatever and it would actually just be rscs and resumable without you changing any code i i don't know if
[04:01:57]  that's the goal because i think there's sometimes you want to know about serialization there's places where things could be explicit but understanding like you know that you could use
[04:02:06]  a heuristic and be like look we know what's reactive in templates extrapolate now we know which components have reactivity in them you could basically just treat this whole thing
[04:02:16]  as like uh optimization like just like and at that point yeah you just go like i'm like that optimization could be like simply i'm doing ssr like at that point
[04:02:27]  it's like right at client side and then go okay ssr mode bam you get all this because the only thing you need to know this is why i was asking
[04:02:35]  the the everyone last week i was like what needs to be on the server right we we started writing a list didn't we data fetching secrets analytics sessions server only assets i
[04:02:46]  just like thinking i'm like if you had use server or server dollar sign or something and you annotated your code and then you basically um had this that i'm talking about
[04:02:58]  then if you had a client-side app you just write it as normal and then you'd be like okay i have uh i have to fetch from the database so i
[04:03:07] 'm just going to use server or server dollar sign or whatever and just you know put a couple things there the difference between that and going okay now i'm server mode and it
[04:03:18] 's just automated islands uh or islands routing automated resumability like you know in both cases that because you put that server there it's going to run on the server the
[04:03:32]  rest of the details might not even matter to you again i like explicitness because i like control but it's just it's just one of those things that i think i
[04:03:45]  think in a world right now where people are sick of trying to like juggle these mental models um it might be an interesting idea i my guess is that it's going to
[04:03:57]  fall somewhere in the middle but i'm just this is what i'm thinking about it but the biggest reason i think about it and the biggest reason that excites me is because
[04:04:05]  if this is possible resumability can be done at any time it's completely independent of the other stuff this has nothing to do like we still need a solution for server
[04:04:14]  components or for you know islands routing or whatever this is just a hydration optimization you know it's the last 20 but they can be worked on independently they can be done or not
[04:04:29]  done like this that that's what's interesting to me because this suggests if we do the right stuff we don't need to rewrite we don't need to reset the ecosystem
[04:04:37]  we don't need like maybe a major version at worst and that's that's interesting to me you know yes yes and it doesn't run all the other component create code
[04:05:05]  and it shakes out all the dead templates and would never be rendered and yeah even inside the islands what's cool because picture picture if that counter component was the island essentially it was
[04:05:16]  the client component we actually can reduce the code with inside the client components as well um there's basically three states if you think about it i wrote about this like three years ago
[04:05:25]  and i didn't this is the first time we've i've actually come up with a way that it actually realizes it is that when when you have um you have the
[04:05:32]  components that are completely server components they have no business on the client they don't have any state they don't have event handlers um they just render some stuff then on the
[04:05:44]  opposite end you have the dynamic components because like they get re-rendered on the client like you have a for loop and you have to like add a new iteration to the
[04:05:52]  list or you have like uh something that's under a conditional that you know dynamically gets created or whatever and then in the middle you have the top level things that are they
[04:06:03]  have state they have event handlers but they don't actually re-render so like you don't need the template or you don't need you don't like you don't
[04:06:11]  like you don't need like any of the um yeah like any of the kind of like initialization stuff in the client but there is like three categories of components if you
[04:06:21]  look at it that way and what this does is say server components over here which is the first category client components basically over here which is the second two categories and this optimizes
[04:06:33]  the third category back into the second category or whatever like that that's essentially what i'm saying it gets rid of the extra code and it gets sort of the extra execution
[04:06:43]  i imagine they talk because next js talks with chrome team a lot they work together i think rsc is a we've already shown our performance improvement um over uh next at least
[04:07:02]  in theory uh like older patterns at least in theory they seem to be you know a couple points higher on the lighthouse so to speak so i think and that's in a
[04:07:10]  simple example i'm sure they actually have bigger benefits elsewhere so yeah i mean chrome's interest in solid um and the solid start money in the aurora project was around research into
[04:07:20]  these this is a very low javascript version of kind of something similar to server components but it's also in the hydration the stuff like this this is very interesting i i
[04:07:31]  think it'd be i think we're in this interesting zone where we we can tell kind of what's possible and we see prototypes everywhere what's possible but people are having
[04:07:41]  a hard time with the shift so it's either that they just need more beat over the head enough times like rcs is really trying that right now um or it's possible
[04:07:50]  that we just haven't hit the right dx point where people can just wrap their head around these ideas um so yeah i i think the technologies that are going to define where
[04:08:04]  things are heading are already present i think this resumability stuff has more merit than people give it credit for i think it's tricky and we haven't seen many frameworks leverage
[04:08:16]  it on the other hand i i don't know if it's some i don't think it's the most important optimization we can do in this space right now i i
[04:08:22]  i i'm still very much on the server component kind of zone of things but i think the mechanical pieces are present between stuff like um server functions rpc type stuff automation
[04:08:36]  between um the the server component islands router type things and between resumability i think resumability is part of this equation or at least a consideration here um if it proves
[04:08:49]  that the serialization or the overhead um is not too much and just spitballing i don't think it should be um right i mean this is the opposite extreme to
[04:09:02]  quick where you don't serialize anything the truth of matters you land in the middle and you start serializing certain key things and you'd be smart about it and i think
[04:09:09]  you might get to a really nice place as long as we can kind of figure out these details yeah i'm very interested in imp um i want i want to make sure
[04:09:23]  like first input delay was close to right but i want to make sure that we can give that not just on the initial page load but as every time we interact with our app
[04:09:33]  we get good response good timing um you know as we incrementally load the javascript we need as we you know do what we need to do all right yeah i
[04:09:46]  knew that would take a while so yeah i mean this is the trickiest part of this whole thing is that like what assumptions you can make here marco knows they have
[04:10:09]  their compiler they know they can pull this off i'm pretty sure quick has its serialization has its v-dom it it knows it can you know it can pick up the
[04:10:23]  pieces i'm proposing a possibility where we combine both approaches um and uh again i don't i'm even less certain than definitely less certain than those two but i i think
[04:10:43]  it's interesting but it's also not something we have to worry about tomorrow or today because as i said it fits into a very specific role in optimization but i think it
[04:10:52] 's i think it's interesting um and something worth thinking through expanding on well i mean let's not get ahead of ourselves no one's implemented this right um i yeah i
[04:11:23]  don't know i i it's it it comes it comes down to what like what you think is important like the lazy loading thing maybe there's like really large apps i i
[04:11:39]  talk to the guys from wiz occasionally at google and they're very much on the lazy loading pieces of quick maybe not quite as small but they definitely feel that lazy loading aspect
[04:11:48]  is really important for them and um you know so it's hard to say like maybe the things that i kind of dismiss and the way i talk about to say that they're
[04:11:59]  less important are actually important at a certain point and that's where that fits but i mean you know what i'm trying to do what i always try and do is which is
[04:12:06]  thread the needle and when you thread the needle i mean the whole point is almost to come up with that perfect balance where you know what i mean like so you know
[04:12:26]  if if if if if what we're hypothesizing is good and it actually gets built then we we can we can talk about it then that's that's that's how i
[04:12:39] 'm gonna put it all right let's let's get ready for this week in javascript give me give me a moment here i know that was a lot i probably
[04:12:56]  i like lost half the audience going deep on this stuff but it's it's something that i've been thinking a lot about and i think that people are sleeping a bit on
[04:13:12]  resumability conceptually i'm not saying everyone should go out and use quick necessarily at this moment but i think that the value of what's being worked on is a
[04:13:23]  lot higher than people realize and i think that um well i said the same thing about rscs right um it's just that um these technologies still need to prove themselves
[04:13:43]  and that's that's going to be the challenge for the next little while right i i think we're all kind of expecting that um so i mean i don't know it
[04:13:56]  is what it is yeah i mean i saw actually a tweet from um devon gavitt uh critter uh earlier today and um it was along the lines of um
[04:14:23]  like he said always put ux first but then he's like he he changed it and he's like okay i i reframe that a little bit he's like start with
[04:14:36]  good ux and then work back to good dx and that's what we're talking about here right we like in a sense people move because of dx often not ux
[04:14:48]  you can smash them over the head about performance and all this and no one cares no no one cares but if if you manage to find the sweet part of dx and deliver
[04:15:03]  it then you're into something right so people move on dx alone right like if server components didn't had a significantly better dx and didn't provide anything on performance i think some
[04:15:14]  people would move to it anyways like i think we're seeing a bit of that like async components are attractive from a dx point even if in my opinion they're kind
[04:15:22]  of a bad pattern but like like people love it like oh i can just locally just async away it all over the place you know this is great you know la la la
[04:15:34]  and like that will be enough to buy win people over regardless of if their performance goes through the you know goes gets worse or whatnot so i i think that like yeah
[04:15:52]  you know the load on demand as we presumably specifically can be still implied without the lazy loading yeah yeah exactly or execute on demand is basically is basically the the thing and that's
[04:16:11]  what marco was doing marco's compiler is so crazy that you're not even going to worry about the load on demand aspect of quick because like it's so small
[04:16:20]  like i i just i still can't get over the fact that the marco hacker news demo is was 1.6 kilobytes like if you load the code you need
[04:16:32]  to in quick for example to use that page well guess what it's like 20 kilobytes like i'm not saying that like obviously like that's a bad scale example because
[04:16:44]  it's like one small component but like my point is like um like that that would be the one downside of making this the default uh i didn't mention this before the default
[04:16:58]  uh hydration approach solid i think the code gen size would be larger maybe 10 to 20 larger the the uh islands counteract that because they make it small again and in a sense
[04:17:09]  it's some of the code elimination does it but if you had no code elimination with that uh resumable hydration approach i think the code gen is slightly larger and so
[04:17:20]  like um yeah maybe it makes sense to pair these things up yeah where's the point of prove it our season maybe we're going to have yet to prove real better examples i
[04:17:32]  haven't seen outside of cherry picked examples yet yeah i mean right the thing is they kind of show that they have the potential but no one's going to move if the
[04:17:41]  dx doesn't get them there and if the way people do simple benchmarks isn't giving them that gratitude they won't move you know they open up the thing go why is this
[04:17:50]  slower why is this bigger like i showed you the next 13 movies app demo is larger than the next 12 one this is just insane like that's a full app like why
[04:18:00]  is this happening it's okay it's okay so yeah i mean yeah yeah anyway um let's let's get this week in javascript queued up for the few
[04:18:27]  of you that are left with me um here so i think we're i think we're good i think i am set up here um yeah let's do this let's
[04:18:42]  talk about this week in javascript so i i haven't been that busy on twitter um the last little while um for various reasons just trying to keep focused um so most
[04:18:59]  of the stuff is going to be stuff that i pulled off other people's threads i think the only thing i tweeted this week was right after i finished writing that resum
[04:19:07] ability without serialization document um i wrote ever gets distracted from work you know you should be doing to work on a different problem you've been thinking about for a few months only
[04:19:17]  have that euphoric high of crashing of solving that crashing back down when you realize you still need the work to do in front of you first and i got really stoked about
[04:19:24]  the resumability thing right after i wrote it but then i realized that i need a serializable reactive uh reactive graph which we're not going to get to solid 2
[04:19:33] .0 so you know there's people working on solid 2.0 there's people working on you know the are the are uh the islands router stuff so like this is just
[04:19:43]  going to take time but you know i was supposed to be doing work to help you know get the islands router stuff back in shape and i got distracted writing that whole doing that
[04:19:55]  whole exercise for the resumable stuff it's fine i got it in eventually but i just wanted to kind of throw that out there you know apparently a lot of people
[04:20:05]  uh relate to this problem right you you're working on this thing and i mean some menial merges you know you're just sitting there going like grinding at it and you
[04:20:13]  do just like yeah apparently apparently everybody uh has it has it has an example of this but yeah i i this is why i've been trying to stay away from twitter a
[04:20:25]  little bit but there there there were some you know good announcements and stuff that happened obviously i mentioned bun 0.7 um i didn't actually look it up yet so let's
[04:20:40]  let's see if we can pull this one up bun 0.7 i probably could just go to jared's tweet beat tevis failing yeah why don't i just
[04:20:53]  go to jared this is like the most indirect way of getting there yeah but that's the whole thing they got beat working in bun which is the whole key this week's
[04:21:07]  goal for bun is beat support september 25 2022 took 10 months longer yeah it took the whole time but yeah beat dev runs workers postmaster structured clone async local storage there
[04:21:18]  you go yeah this this is all huge stuff um i've been talking about why async local storage is going to be big it's the missing piece right now that we
[04:21:29]  have on our server functions um and a bunch of node stuff but yeah buns coming along nicely um i haven't liked this yet but i should um this is this this is
[04:21:43]  pretty sweet that's how r d works this is what i'm talking about it probably was just a matter of doing the work at the right time his his if you're in
[04:22:01]  heavy r d mode your job is efficiency rather or sorry is uh effectiveness rather than efficiency you know if if this can make a big dent on stuff it's probably good that
[04:22:14]  i worked on it versus being you know super efficient so to speak so yeah yeah jared jared's not losing steam um really cool to see this um really cool to
[04:22:31]  see this workers yeah i mean there's just let's see maybe we should just see what what else he's got here yeah and he's talking about some of the later
[04:22:45]  0.6 updates but beat support huge right workers huge structure clone this new api that's good async local storage is actually huge because literally next js and everybody's just
[04:23:05]  going to be using this at this point more memory reductions more jared benchmarks yeah no readable stream to form data see he he's he pays attention to what the frameworks are
[04:23:21]  doing this is smart these little efficiencies he's making will let frameworks run faster on his platform specifically if people leverage it yeah he's he's very much tailoring to
[04:23:34]  what the specific frameworks are he's very much in key with it i i got to give him a lot of props for that um i guess it's part of his you know
[04:23:43]  starting as a bundler but he's very connected to like the tools that are needed very very cool no buns and zig but i think his point is if you can find
[04:23:59]  system programmers who couldn't c plus or zig you know he's going to take them but yeah oh yeah i guess that's true right because the v8 bindings yeah
[04:24:12]  although actually is that only for certain platforms because isn't isn't a bun mostly was like the safari engine the javascript core or whatever but i guess i guess i
[04:24:27]  guess uh yeah i guess i guess it depends on yeah i wonder if like no compatibility or depends on the platform stuff i don't know enough about this but i i know
[04:24:39]  that that he didn't use like i thought i thought primarily it was javascript core like this the same engine that safari uses okay um on the solid side we had
[04:24:52]  some news everyone started announcing it before we officially did but we brought in three new fellows i can't be more stoked because every single one of these are actually a little a
[04:25:03]  lot more high higher profile than yeah you know pretty high profile in our community between alexis the guy behind our hmr plugin solid refresh he did a whole bunch of the
[04:25:14]  compiler plugins he built a bunch of meta framework stuff he built his own island solution and all that he's the guy who's the main doing the majority of the work on
[04:25:25]  the solid start r&d around the islands router um with nikhil focusing on some of the lower level bundling stuff um around the base but he's doing a lot of
[04:25:36]  the he's taking on the he's building the benchmarks right now that we're going to be using and he's uh he's going to be doing a lot of the work
[04:25:43]  this year um sarah uh she she and uh shogun um michael uh uh the docs team uh did a stream this morning at 9am which was very cool
[04:25:55]  talking about solids docks um and she is joining us sponsored by racer um working on the docs effort and yeah a lot of people are really happy to see that happen um
[04:26:09]  i super proud it seems like each each each of them have their own announcement which had a lot more traction than our official announcement but it's very awesome to see um to
[04:26:20]  see um to see see this and then the the one that i was showing originally at the beginning or jdev student from israel basically makes sure that no solid developer ever has
[04:26:32]  any kind of uh wanting for stuff found in the react ecosystem if next js has it or create t3 has it we have it he he even built like he's he
[04:26:43] 's ported all the t3 style stuff into solid start with createjd app he's even made the like upload thing theo's stuff uh there's a solid version because of
[04:26:55]  our solid uh integration because of him um solid trpc prpc like it just it just keeps on going um he makes sure that yeah if you you you aren
[04:27:06] 't missing anything from the next ecosystem so he's gonna work on solid start um he's on the other side instead of on the rnd side he's on the stabilization side
[04:27:14]  he's going to make sure that we get out of beta um make sure that the tooling around it's what we need i rely on a lot to actually understand what the
[04:27:22]  ecosystem needs so make sure that we don't have feature misses so very stoked about uh about having or uh as one of our fellows here so yeah big announcements for all three of
[04:27:34]  these um fellows that's the term we use um and uh yeah yeah he has a pr for clerk of course he does right um that's what i mean like there's
[04:27:48]  there's no there's no you you aren't going to be missing anything for like he's he's trying his best to make sure you're not missing anything from the next
[04:27:57]  ecosystem when you come to solid yeah so yeah getting getting this stuff in is awesome and this is this is with the you know the core team that we already have together with uh
[04:28:12]  the addition of these uh fellows and stuff we're really moving stuff forward i as i said i hope to have a couple more announcements on a couple more fellowships coming out but
[04:28:22]  um that i'm still putting together but we are we are you know i i've always we've always kept a pretty small core team but if we you know add the fellows
[04:28:32]  and stuff to this kind of group of people you know um maybe we should you know take a letter from view who's always had a very large core team and kind of look
[04:28:41]  at like how we can uh an astro i think is another one great communities and look at how we can energize and get more people working on solid but this is
[04:28:49]  a very good start he basically solid ecosystem it's funny that's what people used to say about alexis too right because alexis did a lot of uh um um
[04:29:01]  i think he sold start ecosystem is basically the the way like he's the meta framework side of stuff um but yeah so this is this is this is really the big news for
[04:29:11]  us big news for us um yeah i mentioned their stream already we're gonna have solid office hours being put on by the the dot dev team um in august gonna give
[04:29:21]  it a shot um so yeah come and ask me questions ask me questions and whatnot um and they're gonna kind of do in a structured ways talk about the road map uh
[04:29:30]  my talk from js nations up uh where i talk about suspense the full version from finland is not up yet which is has a lot more examples but i still think this is
[04:29:43]  a really good showing of kind of understanding how like with fundamental primitives you can build um the stuff like you don't like it's about finding the right boundaries and understanding
[04:29:54]  what pieces and i think the problem right now is a lot of people all it makes it easier to ship these things as a single thing so you can like wrap them all around
[04:30:01]  and be like look you have rscs they do all this but rscs are like the final wrapper of several different technologies coming together and i talk about how we could
[04:30:11]  take a lot of the same primitives and do a lot of stuff with a lot of patterns people have today without rscs so um you know streaming transitions and all
[04:30:21]  that so it's a good talk and uh i mean in that regard actually i want to i want to actually pull this out uh that was posted today um tanner got streaming
[04:30:35]  ssr working in tan stack router which means that he's got most of the pieces he he needs to kind of have the baseline now of pretty much uh modern framework
[04:30:46]  meta where he has loaders he has mutations he has he has you know streaming um he's basically it sounds like he's looking at most of the remix uh um um feature
[04:30:57]  set and just getting them ready so that like the more baseline stuff when we figure out the basis start or whatever we can just get you know maybe on the same page i
[04:31:07]  mean he's been building some some examples just straight and express maybe you know we we just need to find the the right base for for for his stuff here but he he's
[04:31:16]  filling in the pieces right he i was talking to him earlier and this one i was talking about having the right premise react 18 does have the pieces you need to build this stuff
[04:31:24]  he said though unfortunately only the first bullet point came from react team and he basically had to build all the rest of this which is very different than how you know the integr
[04:31:33] ations with solid worked because we basically had everything up to here already built um and the people could just use those primitives but he got there and he showed that you can
[04:31:44]  do it so you know this is this is uh yeah see he's he's showing the streaming and stuff coming in um which is interesting because this is not a server component demo
[04:31:57]  this is you know similar to remix who also does does streaming uh without server components um but yeah so another feature for tan stack route i i love one of the comments i'm
[04:32:06]  so confused there's so many decisions to make tune stack everything seems to have a drawback a constant second guess choices tan stack route seems amazing but tuning over next app router
[04:32:13]  feels daunting you know and i i understand this is the the thing what's the difference between a streaming you know data loading whatever framework and rscs it's not apparently obvious
[04:32:31]  to people so making them have to choose or be aware of these things makes it actually really difficult but still very cool to see that yeah very very very late but uh it
[04:32:48] 's all good um but yeah uh let's let's yeah we talked about bun we talked about tanner i think and we talked about solid i i just yeah let's let
[04:33:01] 's talk a little bit about a few other things that have been going on um i think this this was an interesting the remix guys are clearly working on rcs they've
[04:33:09]  been talking about like how they have something for server actions that uh that uh um i think um they they say they're excited about but at the same time i've been seeing
[04:33:26]  kind of tweets like this from ryan florence which are like i wish the rcs had waterfalls like network tap in the browser clearly they still believe in their
[04:33:34]  hoisting and this is like there's some tension it's kind of like when you talk to them about streaming they're like yeah we have the feature but we're like
[04:33:40]  not stoked on it i i get the feeling with rscs it's a bit of this i don't know i i guess we're gonna have to find out and pay
[04:33:46]  more attention but i didn't look at terminal and now we're turning yeah i mean he's admitting that you know you don't avoid this just by using remix like you
[04:34:00]  have to be aware of waterfalls but it's it's it is interesting because with the with the whole uh you know with the whole you know nesting and stuff it might
[04:34:14]  not be as obvious but i this is this is a good sign for the react ecosystem because i said people like remix or gatsby or whatever like certain people frameworks could
[04:34:23]  just drag their feet if they want to and if next can out there on a limb proving themselves there's a lot of exhaustion on their part and the react team is really push
[04:34:33]  and they can just be like yeah we'll adopt it when people like it you know what i mean this is suggesting that we're getting to a point where they're like okay
[04:34:41]  we're you know we're we're looking at this because before that they weren't and you know the longer that goes on though in a sense they almost benefit from it
[04:34:56]  if in the sense that makes it harder for next i i don't know it's it's like they could just take as much time as they want yeah no i i
[04:35:04]  i'm not too sure what gatsby is myself um to be fair but um yeah i mean i mean there's a whole risk in that too you know i mean it
[04:35:18] 's fine the remix is the the other react framework and maybe we only need a second one um to kind of tell that story but you everyone knows that the download numbers for
[04:35:29]  a newer framework are not usually in the same realm as the the bigger frameworks over time i i don't know if remix and gatsby have crossed lines yet but um yeah
[04:35:38]  uh yeah i wasn't sure if i was gonna have enough time to like enough stuff on this week in javascript so i actually put this in here because i i wanted
[04:35:49]  to i wanted to see this versell relay released and react guys released something about performance i was like i probably should look at that and see what they think performance is um
[04:35:58]  but maybe we'll come back to this oh see here's some this is more of what i was talking about sermons are like magic for reducing bandwidth blah blah blah i hate
[04:36:07]  this trade-off though for remix eight kilobytes every time you validate a specific basically ryan's still out there digging a bit on on rsc so you could tell
[04:36:16]  it's almost like a twist my arm kind of thing or like we have to like test it to prove it um yeah i don't know ryan's back i mean
[04:36:26]  i think i mentioned that last week so that's kind of cool but i'm this is the vibe that i'm getting i'm getting like yes we're looking at it but
[04:36:34]  you know maybe we're not the happiest about it um okay cool um i'm like spoiling other stuff i want to leave that for a moment talk about marco a bit
[04:36:47]  today i honestly don't know what dylan piercey is doing he's just trying to cause violence um this stupid tweet i i i was like seeing people like c
[04:36:58] ory how so whatever you know doing tweets about this stuff and i'm like what's going on why are people talking about camel case and pascal case well i found the original
[04:37:08]  source and expect my surprise when i when it's our our man dylan from the marco team yeah i this is why tech twitter is stupid this is i was talking
[04:37:21]  about earlier why i don't spend as much time anymore i just i just what's going on to be fair um i used to make case for years and years and years in
[04:37:33]  coffee script um we had full stack way back in the day because databases and like back end stuff and you know case sensitivity and stuff snake case makes a ton of sense but
[04:37:42]  i'll tell you the second that i moved to camel case it was just like i never wanted to go back again i it's just so silly that it's an aesthetic thing
[04:37:51]  but like you know and i think everyone's seen this silly maybe matthew phillips thing so maybe he's actually the start of this um but like i don't
[04:38:03]  my my variable names at least aren't that long so i'm not i'm not sweating it shouting case for the win oh thanks uh let me see if i can grab
[04:38:19]  a j okay yeah so to answer my remix uh gatsby question i don't know if this is the best remix package to look at i have no clue why g
[04:38:35] atsby spiked but generally speaking um then the spike is messing with our numbers gatsby is slowly declining and remix is slowly gaining um but they're still about double so
[04:38:50]  at this rate they'll probably meet in about a year but both of them might accelerate especially gatsby's down might accelerate so yeah there you go screaming snake case
[04:39:14]  this is what happens when the react team is quiet for too long what i've sentail win yeah yeah it's like we need something oh man yeah no this is this is
[04:39:28]  yeah i'm glad there's a bit of lightness you know always on tech twitter but it's also just like what you know what's going on um let's take a
[04:39:38]  quick look at this article because i i want to understand how react 18 improves performance transition suspense reacts or components okay so there's an explanation here of how main thread and long
[04:39:51]  tasks work yep to do when it has to be processed all the tasks must wait yes 50 seconds around blah blah blah so they're talking about based on the fact the device
[04:40:06]  must create a new frame every 16 milliseconds so yeah long tasks are bad so what are we talking talking about total blocking time okay interaction the next paint imp yes again measured on
[04:40:20]  interaction through task okay this is actually okay yeah talking about the diffing and reconciling stuff this is where a lot of the work was react rendering i see right and this
[04:40:37]  is yeah no this is good explanation because it's talking about the pure part this is where all the side effects happen up to here this is pure you could like throw this away
[04:40:46]  um right and they're showing that react rendering is a long task which is probably pretty fair um this is a long list i guess i went a little too crazy okay i
[04:41:08] 'm not going to see anything in that demo but showing that vent key press long task okay then we talk about high priority and then low priority still commit phase yeah this is
[04:41:21]  actually this is these are good visualizations here of in terms of the part of the pure versus the side effect part basically low priority stuff gets sliced um um this is what
[04:41:32]  i was trying to explain on the million stream uh last week when we were showing the difference between concurrent mode and react and then million just making stuff faster um and i was trying
[04:41:44]  to explain like i'm like when we added more dom nodes it didn't make a difference because the problem is this commit phase still has to happen so if you just make this
[04:41:51]  commit phase bigger like it doesn't like if the commit phase overruns the blue phase you're not going to notice concurrent rendering anyways but in the case where you have
[04:42:03]  a bunch of low priority tasks which are small and distributed you can definitely start seeing a benefit here because it can yield because we made the whole bar shorter so to speak so
[04:42:17]  you mark it with a transition so do urgent update transition we have the same mechanism in solid but we don't actually do the scheduling we use it for a different reason but and
[04:42:26]  then they're showing this can go in yeah we're never going to see any difference on the actual but showing you just a lot more sliced what's interesting though is i
[04:42:40]  guess we don't have the total timeline what i was trying to show like you see it's way less blocking like all these like where this is like like uh where is it
[04:42:50]  this is like barely walking there's just these little um is that there was that delay in the million demo last week um because even though it's the the problem is you
[04:43:06]  you really want to only apply this for low for low importance stuff to do to do okay client-side rendering react server components okay but default the components aren't expected to
[04:43:42]  have any client-director activity client-directive okay okay okay okay okay yeah i mean this is a pretty good explainer cache the cache the cache function i
[04:44:16] 'm i'm super interested in this cache function um in general because it lets you generalize like around simpler async await type things and i don't just mean async components
[04:44:29]  i mean just in general okay okay so yeah this this this focuses a lot on this like um slicing kind of thing in most examples i think the hardest part for people to
[04:44:46]  to try and figure out and it goes right back to the beginning here you're like what the hell is this big blue thing and what can i actually do like this and
[04:44:59]  i think i think i think what a lot of challenges is for a lot of interactions this big blue thing is actually could be a much smaller blue thing and then you start going
[04:45:09]  why do i care because the problem is it's the big red thing that you don't get to do anything about and when you have a slower device the the they both
[04:45:23]  get longer so to speak anyway okay cool that's well i hadn't looked at that article i was just curious i mean this is one of those interesting things i think you when
[04:45:40]  you're solving a problem of different types of scale different kind of problems come up and i think i i'm trying to picture like what's the ideal case for the concern rendering
[04:45:48]  because the thing is it's not you know how i was talking about earlier like people tend to like pull down something and like do a simple performance test and be like hi
[04:45:56]  you know my stuff's good the problem is like i showed with the millions demo last week and it's the same thing when you solid or whatever it's like when you take
[04:46:03]  something that just is faster like let's say it's 10 times faster and then you put against something with scheduling and you're like like you're not impressed you but you're
[04:46:12]  also missing the point so almost all concurrent demos involve simulating slowdown because you can't just add dom notes that makes the red part larger you actually have to make up
[04:46:23]  busy work in in micro benchmarks because it's like how could you possibly generate work that's that expensive that's like realistic what well the answer is in a real app that gets
[04:46:33]  big enough you have enough interactions like more data interactions between your props and stuff and your react rendering gets bigger you know you have to re-render more components or you have
[04:46:45]  to do more calculations and you know all those things that update because of something else and it just gets larger and larger to a degree that it has nothing to do with the fact
[04:46:54]  that your ui is relatively simple it's all just all the other stuff that you're doing around that data and in that world um if you can find a logical way
[04:47:07]  to break it it can't be a singularly expensive task it has to be something distributed that you can split up like if you're running one memo that's really expensive well
[04:47:16]  what's going to block you you know regardless right um it's got to be like hundreds of memos you know that you don't need to be recalculated
[04:47:27]  or hundreds of components um that's why every as i said every demo has simulated slowdown um because it's not easy for someone just to pick it up because they'll
[04:47:42]  expand the wrong things which makes it about the hardest feature to sell in the world because it does not make things faster it makes them less blocking but sometimes if you make things fast
[04:47:53]  enough you don't even notice that they're blocking so and the ironic part is like when the red part gets big it becomes blocking anyways so then it just feels like it
[04:48:07] 's slower and blocking so yeah this has been very difficult to find the right spot for it people have come up with very specific use cases but it doesn't feel very generalized but
[04:48:20]  as a philosophy it's interesting because you can see how it fits into all these react paradigms the interesting thing is like what we did with solid was we just take all
[04:48:30]  these same features and you just get rid of the little blocks but instead picture that our blue line is like way shorter then like we still have the the the main benefits which
[04:48:44]  is like basically like doing stuff on the side like hey i want to render the next page while i'm on the current page you know but you don't have the complexity and
[04:48:55]  slowdown of scheduling so it's tricky um yeah i feel like that million demo was from last week is what you like couldn't illustrate it better of the trade-off
[04:49:06]  between being fast and being um concurrent is it at facebook club you don't want the whole app to crash because the issue is one part yeah yeah but i think one part
[04:49:23]  could still actually drag down the whole thing the work still needs to be kind of distributed i mean it's that's kind of like microservices too i mean at a certain level
[04:49:45]  like this is you you there are people in the equation there are programmers and we're not all going to do the best possible things right so you kind of got to account
[04:49:57]  for that inefficiency um one way is to section them off give them their own microservice uh you know another way is isolate them yeah as you know parasocial thing
[04:50:10]  uh isolate them in their own little low priority bubble um yeah i i i can see where this could apply it's just it's it's not the thing that you verify like
[04:50:24]  like when someone goes oh i've got this new concurrent feature let me go give it a spin and see how fast it is it just you in fact it's slower i think
[04:50:33]  i showed a while ago the js benchmark someone were like yeah let's use concurrent features on the js framework framework of course it was like 20 slower than react was normally actually
[04:50:43]  is it still there i don't even know i haven't been to the js benchmark this week oh yeah we're back 1.08 i like that million got a good
[04:51:03]  run too 1.07 so solid's been getting bad runs recently so yeah but they got rid of my delete the ones i don't want to look at because basically all
[04:51:18]  these 772s ignore ignore million is the fastest right now from this run evie's the second solid's third okay anyway sorry i got distracted let's look at let's
[04:51:30]  look at react like uh let's see if we can find it react maybe it never got merged i think oh no here it is react hooks use transition here we go versus
[04:51:47]  react hooks over here okay so react hooks is a 1.75 actually you know what let's let's let's let's let's narrow this thing down and in fact let
[04:52:00] 's do something else everybody's been bugging me about legend state all week i have no clue what happened i talked about legend state like last fall um react signal list yeah
[04:52:11]  oh this is interesting i guess people are uh adding signals to react whether they like it or not um but let's go react hooks hooks use transition let's where's legend state
[04:52:25]  react where is it oh did those guys never release the the the keyed version only put in the article if that's the case that they're that's that's that
[04:52:40] 's too funny let me see here legend state okay there it is so they're under l they didn't yeah they didn't even bother putting react in their name that's that
[04:52:52] 's that's ambitious don't even know you're using react okay yeah this is actually really impressive because you shouldn't be able to get faster than core react but um it
[04:53:05]  means that there's an inefficiency in the core react implementation but i wanted to show this this is what happens to when you add concurrent mode to basically the same code it goes
[04:53:15]  from react speed to ember speed that's before you're leveraging the benefits of you know concurrency um i think that's ember speed i should go back to all
[04:53:28]  again 211 that's gotta be ember who's 211 ember is 219. that's close yeah marco is 195 yeah ember speed anyway um yeah
[04:53:53]  i mean there's definitely trade-off only firebase users you trust that says a lot doesn't it oh jack did a video yeah i mean the the hard part about it
[04:54:08]  is that like in theory you can't beat react like that's fast as even though in the benchmark they show that uh legend state is like slightly ahead um you can't like
[04:54:22]  in theory react you should be able to implement react and be faster than it legend state might be easier to author it that way but in general it's always the baseline but
[04:54:31]  the point is like even at um one where did the rest of the table go oh there it is even at 1.75 you know with like or where's let's
[04:54:44]  say 1.68 like doing a good number oh yeah actually here you go react here is 1.68 so it's tied jota actually for this run was the one in
[04:54:54]  front and 165 it doesn't matter but you could assume these are basically around the same speed you you can't be faster estate management can't make you faster than the library
[04:55:04]  by itself not really so unless it makes you better at authoring code for that library so like what i'm getting at is it's like that that's not even gonna
[04:55:13]  get you to preact you know or whatever but you get to still you know you understand what i'm getting at um and similar if preact signals is on here they wouldn
[04:55:24] 't really be any faster than preact like you basically can't escape the base of the framework is what i'm getting at oh man that's oh yeah i i get
[04:55:41]  it i i i i i get it like there's like that very narrow part of the audience that cares but everyone else is kind of like is he just talking bragging
[04:55:52]  to himself yeah um like there's some there's relevant information in here but yeah okay fair enough um okay i want to talk about um yeah let's talk about this um
[04:56:17]  i feel bittersweet sharing i'm leaving my job at meta in a few weeks working in the react org at meta has been an honor i'm thankful for my past present
[04:56:25]  colleagues for taking me in letting me make mistakes helping me see my strengths and being kind and sharing their time yeah i mean i'm i'm not surprised by this news i
[04:56:47]  was not an insider on it every time i talked to dan over the last few months he he's been sounding like he's been looking at other opportunities and he's been pretty
[04:56:56]  public about it i feel like where he's just been like what else can i do um you know so obviously there's a whole bunch of quote tweets people talking about end of
[04:57:06]  an era and what not and and and it is in a sense because but that end of that era this switches this feels more of like not the beginning edge at that end
[04:57:15]  of the era at the beginning edge is when the core some of the core people from you know core visual people like people known moved uh from you know when brian bond went
[04:57:28]  to replay and seb went to versell and then a bit later andrew clark went um this is sort of like the one the last bastions of that side like don
[04:57:39] 't get me wrong there's a ton of people working on react and meta really talented people amazing people people i've met a number of them at conferences recently um you know there
[04:57:49] 's a lot of stuff going there but dan has been kind of the public face and meta um for it and i think it doesn't matter where he goes and even his continued
[04:58:00]  involvement with react it's gonna feel a little bit different i'm almost a hundred i'm almost positive he's not i mean i could be completely i could be completely wrong
[04:58:14]  uh obviously but and he definitely can has considered and talked about versell in the past it's just i don't think you could tell that's not what he's looking for
[04:58:23]  and he just read more of this yeah in the past year i kept on saying i'm leaving a year or so but the moment never felt right i want to finish the
[04:58:31]  new docs see a use suspense data fetching trees are worth the team both have shipped the spring i felt hesitant leaving earlier because not too long ago leaving meta used to mean leaving
[04:58:39]  the react team right so the react team has already become distributed react for a multi-company project so he's staying as an independent engineer similar to sophie um and this
[04:58:53]  means that i will not actively be sponsored to work full-time on react by any company but i will stay involved in the teams working under me this suggests to me that
[04:59:00]  at least he's not intending to work at versell on react or next or whatever i mean essentially yeah i'm this i was debating myself i didn't actually quote tweet
[04:59:15]  this one because i feel like usually i like talking about announcements that are like i've got my next gig a leaving announcement like this has huge impact so we should talk about
[04:59:25]  it but it's also like there's a lot of like unknowns right but it is it is pretty clear from at least this that like that that's not the case i mean
[04:59:38]  think just think about what dan's been doing the last few years he came in as a like a hotshot programmer worked on redux him and andrew clark had some
[04:59:47]  other projects and stuff they do came in got the work on react over time it became very obvious that he had a gift for teaching and explaining things and he would write and
[05:00:02]  he said in his words that he got outshun programming by the other developers but i i mean i've been in that situation myself when i joined the marco team i
[05:00:11]  felt like that too to a certain degree and i did it's more like he i think he saw the gaps and understood what needed to be done right you know if if
[05:00:19]  you got people on the team amazing engineers doing work you know let them do that work where are the gaps and um he obviously ended up getting involved with the docs project because again
[05:00:33]  important work that need to be done and he as i said he's a great he's a great teacher so he's kind of been away from the stuff i actually he
[05:00:42]  talks about all this in here i'm pretty sure uh one of the things i grounded towards explaining things i practiced writing overreacted and later rachel neighbors inspired me to
[05:00:50]  write react dev together i poured my heart on the project but i bit off more than i could chew right so he talks a bit about like stuff akin to burnout what has happened
[05:00:57]  is my standard for writing has gone higher but my writing ability did not he's so hard on himself but he basically his expectations make it difficult right he see i'm getting
[05:01:11]  the impression that stuff just stopped being fun to a certain degree you know like they're hot there stuff was fun in the abstract because he's working on a team delivering incredible stuff
[05:01:23]  to the web and changing the way people do stuff but like in the specific um things became a bit of a slog right he talked about burnout and stuff explaining the server components but
[05:01:36]  this is more than that um you know we talked about that last week or the week before um i i'm just getting the impression that it's time for a change and
[05:01:45]  i think we'll end up with a much more level leveled out dan after he can uh you know get away like he was i enjoy this type of work but it's
[05:01:55]  not sustainable to do on my own is taking a toll emotionally at some point being a single point of failure stops being fun i was feeling i'm failing both team yeah this
[05:02:02]  is a lot it's it's i'm always amazed about how um open and honest he can be you know in public and convey that meaning really clear to people but yeah um
[05:02:16]  obviously a lot of emotion and a lot of stuff went into where he was said this um what this means in practice is still um something that we'll have to leave to
[05:02:30]  see but yeah i mean he's had a lot of weight i mean what's that thing follow the person not follow the framework whatever like he's definitely the the most visible member
[05:02:44]  of the react team right um and he's kind of he's carried that torch and part of that working at meta did actually kind of enforce that when in terms of actual
[05:02:57]  like like technical leadership we've got joe savannah right obviously working at meadow and we have sub uh working um at for cell and it's just it's a different
[05:03:08]  sort of presence um sub especially as we know is kind of the visionary behind a lot of the work that's been going on react the last seven year so years um but
[05:03:19]  you you know dan has had a very important role he's very self-critical himself on this but um the his impact on the on the whole ecosystem especially as the kind
[05:03:33]  of face and the learning about react you know i remember we looked it up a little while ago we looked up uh jordan walk and it was a picture of dan ab
[05:03:43] ram hoff um i i think um you know i think this is why a lot of people want to come out and say like thank you you know so to speak um i
[05:03:55]  like this i don't have plans and goals i just have a hunch that now that things i care about are not going to fall on the floor it's right moment to
[05:04:05]  try something new and feel like a beginner again yeah yeah i know this this this is uh this is i feel like in a sense maybe this also needed to happen to really
[05:04:28]  enforce that image of like the new react and like the this distributed thing dan being as visual and i know this is nothing in plays into his decision at all but as as like
[05:04:39]  visual as he is like out there and the meta association like this this actually changes the perspective people have eat when stuff happens it's it's interesting yeah people follow people not
[05:04:53]  brands yeah that's exactly what i was kind of getting at although i imagine react has a lot of followers but like my point is like dan is who you follow so to speak
[05:05:01]  right i i it's funny dan more says that directly i more say that like this is like something that happens when you're you see when you're like a manager too like
[05:05:18]  some you have people on your team who are really good at what they do and they know what they're doing and you you make sure you let them do that and you
[05:05:26]  support them in doing that like it's if you want stuff to get done a lot yeah sometimes it's about stepping out of the way right like and um i don't take
[05:05:37]  that as a thing like dan's like overly critical himself i forget where he where he's where he wrote that uh uh i saw it somewhere where he was like talking about
[05:05:48]  but like i i think that like yeah there's different ways that help that make the most sense for the the different things and the most important thing is getting everything across the finish
[05:06:05]  line and i think that's that's what experience teaches you and that's what like like that's what ultimately becomes the important part um is the the final product goes across
[05:06:16]  the line and you know all the pieces fit yeah we we talked a bit about this i mean there was a lot of blowback on server components both him and lee felt like
[05:06:30]  they were at the forefront kind of pushing it and talking the message and i it's too easy everyone knows this is not a new story it's it's way too easy
[05:06:39]  to just be there and you know be critical because you can so like i i think it's obviously this is all parts of the thing but i don't i don't think
[05:06:52]  this is a major contributor it's just like sometimes when you're you're trying to push new ideas you hit friction you know and it this it's hard also when you
[05:07:03] 're on a project that's the incumbent people want to see it can knock down a few pegs they want to see you know what i mean like they want to see it
[05:07:11]  kind of fail a little bit or that like like you when you're at the top there's only one direction left to go you know that kind of thing so yeah people
[05:07:21]  are looking for that weak spot kind of you know it makes a fun narrative or something i mean it's not that fun but that that's there's a lot of that happening
[05:07:30]  for sure and yeah you know sometimes it's enough is enough parasocial you left me a link i don't know if i want to follow it yeah okay yeah yeah
[05:07:43]  oh perfect yeah you're just saying that react is only 2x dan which is actually kind of um you know i think yeah that's good that puts it in perspective right um
[05:07:57]  i remember for the longest time um i had more followers than solid and then solid got more followers for a while and i'm like good solid will never i will never have i
[05:08:10]  was like in my head i'm like i will never have more followers than than solid um you know like we i got passed to that next level and then eight months later
[05:08:19]  i ended up with more followers with than solid and i realized over time that it's probably likely unless we get to a point like where we're like react or whatever i will
[05:08:31]  probably actually have more followers than solid so um yeah i don't know it's just an aside i i i i don't think so dan's been talking about this for
[05:08:52]  like over a year maybe two years i i i i'm not saying it helps you know when people are just like not like harsh for no reason they're not treating people like
[05:09:04]  people it doesn't help but you're also it comes with it you you expect it you know what's gonna happen yeah so thanks to have you already gone on that yeah
[05:09:18]  yeah i think this is this is a good write-up and i don't want to speculate too much on this stuff i just remember a while ago he was like you know
[05:09:29]  asked me anything and i was like i'd like when are you going to write on over uh reacted again you know his uh his blog and he's like i don't
[05:09:37]  know i have nothing to write right now and i'm like i you know when that's the case that either you're working on something big and you just gotta like get there
[05:09:47]  to talk about it or you're just not excited about new things it's funny i i say that right now and i haven't released an article probably in three months so or
[05:09:54]  four months so i'm i'm probably in the same beginning of that same boat but on that side but i i think you're right i think i think it's a
[05:10:02]  level of excitement that needs to come back again and um i i think it's important um i i mentioned it before i mean it's my whole freaking twitter thing right now
[05:10:16]  was was it was actually a response to dan saying he's not excited and i feel like it's time for dan to get excited again yeah i mean it probably does but i
[05:10:35]  mean at the scale of stuff that uh he's experienced over the years you just you do know that that's the thing like yes there's been toxicity about rscs
[05:10:47]  and stuff right now but like he had to deal with the hooks or suspense when it was coming out and like like he he went through tons of stuff like i remember adam rak
[05:10:56] is or something was like poking at him and he went and wrote a big long github thing like a few years ago and had like on on on the weekend like
[05:11:06]  he i'd say being invested for that long to that degree is can be tiring and the tricky part is like somehow he's managed to make it sustainable for like five plus
[05:11:21]  years but that's that's not an easy task so you know uh i i i i i think there's gonna be a lot of positive that comes out of this but we
[05:11:38]  are definitely this even though this isn't the beginning of what that that era change this is the thing that signals to everyone like like it's happened so um yeah it's
[05:11:48]  gonna be interesting you know where react uh continues to head into the future and uh obviously wish dan the best i hope he finds that spark or thing he was looking for because i
[05:12:01]  i always got the impression when i talked to him he was like he's he's just looking for that thing and he and he he's you know self-conscious about it
[05:12:09]  and i i really do hope you you know you find it yeah we we talked about this tweet last week about the the effort not i don't know the timing seems like
[05:12:28]  suspect and i don't think it's completely unrelated but for the most part like i mean he's just been doing this for years is this the same tweet is that what
[05:12:44]  this says yeah yeah yeah yeah it's this tweet yeah yeah we we did talk about this yeah and lee was was along the same lines wasn't it yeah i i like
[05:13:01]  this because in a lot of ways i think this was this has got people to kind of cool off of it they're like okay fun fun is fun this isn't fun um
[05:13:11]  personally though i think this narrative and stuff is going to continue for a while this this isn't anything about social or about dan or about anything i think react is at that
[05:13:25]  point in its life cycle where people you know the the hero becomes the villain people want it to become the javo that people poke jabs at it and it just is what
[05:13:36]  it is i this is why i think it's so great to have people like eli white and that like working on uh react and meta like just much more even keel like
[05:13:44]  it's a different it seems like the first few years of react there was like a certain kind of attitude and perspective you had pete hunt and jordan walk and like
[05:13:55]  that whole thing it's funny almost since tom mochino was like the common thing in that very startup aggressive we're going to conquer the world kind of phase right that's
[05:14:07]  the one that that's the phase they wrote the movie about like the whole documentary was basically about that first few years um and i i mentioned it before it's funny because
[05:14:19]  the actual react itself like that that's only three years of like the 10 years of react so to speak like it's so much more in the last seven years but that was
[05:14:29]  the phase where it's like the wild west and you know the glory was made or whatever and then in 2015-16 there was a bit of a change of the guard right
[05:14:38]  obviously that's when seb kind of got elevated um but more so uh dan andrew clark a bunch of them kind of came in and started this long transitional period that
[05:14:50]  honestly took took like the whole seven years to kind of pull off i'm sure they thought it was only gonna take two or three years at the beginning to get to where we
[05:14:58]  are now where the react moved from that aggressive you know flippant kind of like it's where we all start to like being like this is a this is the thing
[05:15:10]  and now that they're getting treated kind of like java well it's because they've like they've made it in a way that like um i don't like javas
[05:15:20] cript frameworks usually don't get to so now we're you know we're at this next phase where they almost have to separate that really innovative r d portion like the seb
[05:15:34]  of the world from the like where we are the incumbent thing you know like we listen to your feedback we are the react team and in a sense almost the split between meta and
[05:15:47]  the other ones is where that splits happening right now so i mean that is something worth considering but i'm just saying like this is the next phase of react you know that it
[05:15:57]  just so happened it's not just because it's 10 years it's it's the this release of server components react 18 all the stuff that the transit transformative years of react
[05:16:08]  went through is now released and we're at that next phase so this you know this this is phase three um so yeah i i think the timing and everything makes sense i
[05:16:25]  set myself up for this don't i thanks dev for always keep me honest um but yeah no in in all seriousness um um react today is a different react i i i
[05:16:50]  hope i i also think that there's a need to find some balance in the force so to speak people there's a reason for this is like people for years at the early
[05:17:02]  years of react and whatnot they trusted a framework with that had no evidence that it was ever going to succeed they tried and back in the day people used to be like that
[05:17:11]  and now we're in a place where like with an incumbent people like you if you don't choose the big player you're probably not doing something right and i i think we
[05:17:22] 've almost over corrected that way and that's why you feel this pullback because you know you need innovation from outside you can't always have innovation from inside um you need
[05:17:36]  to test the waters you need to see that things are moving and that's that's part going to be part of this phase three of react because it's it you know it
[05:17:45] 's been the top dog for a long time it's been rising but i don't think people i don't think people will let it move too much further from where it
[05:18:04]  is anyway i think that makes up this week in javascript um look forward to seeing what the stuff means and uh you know where we go from here um clearly as
[05:18:25]  i said new phase for react it means a new phase for front end so um you know it's an exciting time and uh yeah i don't know um i think i actually
[05:18:38]  the way the schedules and stuff work um i'm i do not believe i'll i'll probably check up during the week but i in two weeks time i do not have
[05:18:47]  a stream and i don't think i'm going to stream next week um i have other stuff going on so it might be three weeks till my next stream so um just letting
[05:18:59]  everyone know right now um if i do a stream next week it'll be a short one um but uh following week i will not have a stream anyways thank you all for
[05:19:13]  joining me today and uh till next time have a good one