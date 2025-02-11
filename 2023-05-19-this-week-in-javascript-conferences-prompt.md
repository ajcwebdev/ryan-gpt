---
showLink: "https://www.youtube.com/watch?v=KMGJk2VtQ3I"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This Week in JavaScript... Conferences"
description: ""
publishDate: "2023-05-19"
coverImage: "https://i.ytimg.com/vi/KMGJk2VtQ3I/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 7-10 minutes long.
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

[00:00:00]  Hello everyone welcome to my stream today it's been a few weeks hopefully everything still works here I've been out and about doing the conference thing and we're gonna talk a
[00:00:18]  bit about that we're gonna talk a bit about what's been going on and it's not over I've I've got a few more conferences after this so this is
[00:00:29]  just an opportune it's a break not really a break in the middle of things so sorry just getting everything set up here so yeah why don't everyone say hi in the
[00:00:45]  chat and we'll get started here in a few minutes I know it's been a little while people probably aren't used to coming out here on Friday um it's been
[00:00:56]  what like god it's been like a full month really actually I think my last stream was April 21st ish so yeah it's definitely been a while yeah hi everyone
[00:01:11]  yeah it's uh it's been some time but on the positive that means we actually have something to talk about it's fair we usually have some stuff to talk about but um
[00:01:24]  there's just there's you know a lot of news that usually comes out around the same time as all this conference stuff's going on and usually while I follow that too
[00:01:34]  I get up on these kind of deep dive tangents on certain specific topics and new realizations happen all during the flow and we'll just kind of talk about that keep it
[00:01:43]  kind of cash as we do that um I probably should tell people that I am live streaming so we can get that rolling let's see here I did advertise this one I think
[00:01:56]  so I have like so much to scroll through to actually find this okay yeah what's everyone been up to has anyone actually been to any of these conferences I'm talking about
[00:02:10]  it just seems like there's been so many um you know in the last little while live I gotta remember like it's like it's been so long I'm like what
[00:02:24] 's what's what what's what's my twitch handle here right what is it uh just ryan solid probably twitch tv slash ryan solid let's actually make sure that works
[00:02:36]  and we're just killing those pre-rolls for those of you who are joining us on twitch oh there we go audio back through that's something else we got to
[00:02:45]  play with a bit today because I actually got to see if uh if um next I'll pull this over here if uh we can listen some of these conference talks and kind of
[00:02:56]  look do them live a bit it's not full talks but there's definitely portions of um that I wanted to look at so um yeah let's let's get this all going
[00:03:09]  all right as people are joining on yeah it's it's been a little while and I don't have some cool guests today unfortunately um to tell about some new innovation that
[00:03:21]  they're doing um we we're gonna um have some more guests come in when I finally come back and get more full-time um there's been some people I've been
[00:03:32]  meaning to talk to um and we'll talk actually about some of the stuff that they released um over this past little while too as we go how are we doing on time
[00:03:40]  it's what it's only four minutes let's just let's kill some time for a moment oh sweet we got some people we got some people in here yeah no innovation lately
[00:03:48]  right Dax will there be a segment called this month in javascript later um probably not because like that's the whole stream here it's not like I've been working
[00:04:01]  I mean I've been doing some work but like I haven't been working in the same kind of zone that I usually work on or have guests speak on like I'll
[00:04:09]  give the big shocking reveal here if I if I go over to github um you can tell when there's conference season because if I go to my repositories or what
[00:04:20]  is it my profile on github here we go okay so this is the last year looking pretty good mostly kind of regular this is the last month um there's some
[00:04:34]  greens in here some darker greens but my point is you can basically see when I started on this stuff and I have not been nearly as active um you know I think I
[00:04:46] 've only got like I don't know I'd be surprised if if there's seven if there's like more than 20 contributions in the last few weeks so yeah um not
[00:04:57]  my usual work not my usual schedule so subbed to get past the pre-roll ads so I could get here just in time here and talk about getting past the pre-
[00:05:10] roll ads of course so yeah anyway it's it's it's all good um we're we're we're rolling as I said I suspect to a smaller audience because when
[00:05:24]  you have a routine people generally come regularly so um we can probably get started this is going to be a loose one it's basically going to be just like a full this month
[00:05:33]  in javascript um but I want to look at a couple things as we go talk about a few things um and just general impressions of what's been going on uh conference
[00:05:44]  season is an interesting time um in that there are two it feels like it is really a season and there's two of them there's one in the springtime between say
[00:05:55]  april and june and then it kind of dries up a bit during the summer and then there's clearly one that starts towards the end of september through november um
[00:06:03]  there are you know conferences here and there you know in february and december and august at various times but it seems like they mostly happen during these kind of concentrated
[00:06:16]  times so um yeah I I there's been so many that it's going to be hard to talk about them all I mean obviously I've been at a number the last
[00:06:29]  few weeks I was at uh where was I was I was I was I think I think my journey recently started actually the IJS uh um London and then I was in
[00:06:40]  react-a-thon and then I was at uh um bgs belgium but during the same time we've had we've had uh we had a bunch like
[00:06:50]  uh google io um there's been view london um there's remix conf uh there's yeah there's there's just been a ton of um hello thanks for joining
[00:07:05]  us hello just getting all the highs and yeah so you see it's starting to roll this this this wasting time for like eight minutes at the beginning really works you know so I
[00:07:16]  apologize to the people that came early but you know it is what it is um we haven't really started anything yet um where are we where are we I'm like okay
[00:07:27]  I I'm almost at the start I'm gonna I'm gonna run this today off Twitter mostly but then we're gonna like go off tangents and stuff um mostly because I
[00:07:39]  think if there's a key takeaway through all this is that um there's a lot of innovation that's been going on the last year and I've talked about this and
[00:07:50]  it's like it's finally getting to that point where people are like let's showcase what we've got and it's and this this stuff is coming from all over the place
[00:07:58]  so you're gonna see that throughout we're gonna be talking about like little little pieces and um for me uh I don't know if anyone actually noticed this uh let me
[00:08:10]  but personally I am excited this is going to keep on coming up but just throwing this out of here I am excited what am I excited about I'm excited about everything this has
[00:08:22]  been an incredible amount of change and new innovation and risk and people trying you know a lot of different stuff ways to make our life slightly better ways to completely change how we
[00:08:36]  do do things and um I'm just gonna leave I'm gonna leave that thought here as we uh as we start going through the stuff not the CEO of signals anymore yeah
[00:08:45]  no that was someone else gave me that title um you know but uh I I thought this was I I thought that this more accurately depicts where I'm at at the moment hey
[00:08:59]  long time yeah I I realized after the last stream um that I didn't get the time stamps in I don't know so busy traveling um I have to thank him for
[00:09:13]  basically making all the time stamps or all the YouTube videos that you watch um I just forgot to actually copy them into the notes until like a week ago so yeah CEO of excitement
[00:09:24]  there we go that's even better title uh all right all right here we go here we go here we go yeah sorry that's I it's it's important to me
[00:09:37]  because after about it like we'll get into that in a minute let's let's just um first start talking uh I'm going to talk a little bit about IJS
[00:09:50]  IJS was in London um which you know I've only been to London twice and the first time well we have a whole other stream about that um you know I was
[00:10:01]  at the conference that shall not be named uh and this time um did not have the same level of expectation um because it wasn't sold at such a you know rate of
[00:10:15]  having thousands and thousands of spectators but it's a good you know tight conference some good talks um I'm hoping some of them will get up at some point soon I actually
[00:10:25]  really enjoyed a talk from Mishko Hevery where he compared the update model with all the frameworks in a way that was really digestible I think I think my favorite
[00:10:34]  part about that talk which isn't probably public or live yet what is this uh whatever um was that he drew this little diagram and I'm going to draw it for you all
[00:10:43]  because I found this diagram really really helpful to me basically what he did was he drew a circle he drew and the funny thing is after I draw this someone's going to
[00:10:53]  tell me that he already shared the exact same diagram on Twitter somewhere he drew this and then I mean you're gonna have to excuse my artwork here in a second um and then
[00:11:05]  he drew okay maybe my lines are too thick how do I yeah whatever doesn't matter it's probably because I'm zoomed in so far he drew something like this and you
[00:11:15] 're gonna have to excuse me here where I'm going to try to to draw this and then maybe I could put some circles on the end all right this is this is
[00:11:29]  this is the fun part right and then like this okay you can kind of see it so this is a pipe and then he he put our other circle in the middle maybe
[00:11:48]  we should color the circle then we can we can see stuff easier okay this is let's let's give it a fill color let's make that no let's make it
[00:11:56]  solid let's do this yeah and you do this okay and this and I I quite enjoyed this because you guys are like what the hell are you doing Ryan well he he wrote
[00:12:16]  this as well did not go to school for visual arts no did not so what yeah I mean I I this is this is pretty poor right is everyone if is everyone
[00:12:45]  okay here okay but what he he he helped explain the idea behind reactivity but by saying like you can have a value a signal is a is a bucket with a value in
[00:12:55]  it and an observable is a pipe with a value that flows through it right and obviously with better drawings you know we can stand by this but I think the visual actually
[00:13:11]  is incredibly helpful um he went on the show how re-renders work in every framework which was really cool because a lot of people have a hard time showing that Svel
[00:13:19] ta is actually a component-based framework that re-renders components very similar to react and not like solid or signals um people think they're similar and he did a very
[00:13:27]  good job of actually demonstrating that but I the easy you know one screenshots take away was this image and I think it's very helpful for the angular folks out there you know
[00:13:59]  um trying to like reconcile these things because there's certain properties that come when you have these different shapes of primitives right like a value has no way to pass it around except
[00:13:59]  for the value you can't like get the latest you like it things have to rerun where you can pass a bucket and always just like go what's in the bucket
[00:14:29]  right and then obviously a pipe this actually has like a hole on both ends like it doesn't actually contain the value the stuff passes through it just subtle kind of piece but was
[00:14:29]  very valuable um from that talk so I hope it gets published and people can uh check it out right so the other thing that was really cool about ijs for me was um
[00:14:29]  I got I got to sit down and talk with Dan Schaefer and for you uh all who don't um know he is one of the most prominent voices on the
[00:14:38]  js jabber podcast and i've been sharing recently that i've been on the js jabber podcast like multiple times in the last couple months talking about everything from future frameworks hydration
[00:14:47]  solid start all that kind of stuff and he did this really great talk on web fundamentals and looking at uh like the way that we measure stuff with core web vitals so
[00:14:59]  for those who don't know there's like two things that go on and if you watch my stream a lot you see you see lighthouse scores right we go in we make a
[00:15:07]  hacker news demo and then we you know go to page speed insights and when we go to page speed insights for my demos usually because i literally just made them on stream we only
[00:15:19]  get the numbers for the specific um you know lighthouse speeds which is a synthetic test the reason we go to page speed insights is it's not on your computer it's on
[00:15:30]  your computer it's on a computer that is out there um that is standardized in a sense so you can go like no matter where i test this you know this is there's
[00:15:39]  this stock machine that makes that you know or set of machines that make this distinction and core web vitals also use a lot of the same scoring but they are actual based
[00:15:51]  on real user data and if you remember a month or so back fred from astro put out an article that we talked about on stream a bunch about like comparing the web
[00:16:00]  vital scores and um during dan's talk he was also talking about comparing the web vital scores you know and like some of the newer frameworks you know obviously like astro quick and
[00:16:10]  solid do much better because obviously smaller sample size and we don't have the historical legacy of using techniques that aren't um as you know well performing like we've learned a
[00:16:42]  lot over the last several years and the thing is sites that were made seven years ago well guess what they're still up there still affecting these scores um so it's a little
[00:16:42]  bit of an unfair comparison on that side but um it's it's really cool kind of seeing that there's like both the synthetic and the actual from working through these through these
[00:16:42]  um things and what was cool for me at least was i uh i i i was also i watched uh another talk i think it was from uh um nissu uh
[00:16:54]  talking about uh like the fact that the browser has a lot of the performance metrics built in that you can just use as javascript apis and actually um today i actually
[00:17:05]  had a talk with uh michael um mokni who works on the chrome team you know to talk about performance and about core web vitals because one thing that you
[00:17:16]  the big boogie man so to speak and this came up in dan's talk was that there's a new metric and it's not that new everyone's been hearing about this
[00:17:25]  for a while um what is it called imp um interaction next paint and the idea is the the current vitals um aren't really good at measuring interactivity and if you
[00:17:37]  look here and this came out in dan's talk which brought my attention to it is it will replace first input delay in march 2024 so we're talking about in less than a
[00:17:45]  year this will be the metric and i've been talking to some people about this metric and they were like this is terrible for single page apps and whatnot and actually the scores
[00:17:56]  that dan showed showed that most single page apps just did very very very poorly here which was very concerning obviously someone who works a lot with client-side routing and you know if
[00:18:07]  these page metrics mean you know that you know this has impact on seo you know google search rankings it has you know it makes things challenging but luckily i have learned well
[00:18:19]  not luckily fortunately i've learned that um imp was not what i thought um which is really helpful to know um so i'm going to talk about that for a minute because hey
[00:18:33]  as i said this is going to go wide um so let's let's actually talk about that first of all i mentioned earlier that you can get um a lot of the web
[00:18:41]  vitals directly in your browser it turns out there's like a package for it like everything else npm install web vitals and then it's like on seal you know
[00:18:50]  this is uh you know what's this is this content layout shift what's cls i can't remember first input delay largest content full paint and essentially you can just use these
[00:19:02]  apis directly in javascript you know what else is cool that was brought to my attention you can get a browser extension and actually see the stuff like check this out if
[00:19:11]  i refresh solidjs.com we're going to see some numbers here okay so lsp here was 447 millisecond that's pretty good i'm in san jose
[00:19:18]  so whatever um there's a bit of a content layout shift let's can i get some more okay well it's just really fast okay but when i interact with the page here
[00:19:28]  let's say i go from guides to get started it'll actually give me first input delay and it'll give me imp like real time so like if i interact with something
[00:19:37]  here like uh i don't know what let's let's go to i'm trying to go to a page that isn't like in a different page reload um oh there's
[00:19:46]  there's imp that one was 30 uh or sorry interaction 32 milliseconds that's good let's do another one um server sometimes apparently there's a threshold before they even get measured but
[00:19:56]  what's cool is you can see here when you extend it you can actually see how much time is spent on input delay on processing time in javascript and on presentation
[00:20:04]  day delay the time they render it um it's pretty cool because what michael was actually telling me which is cool is one of the things he likes to do to play with
[00:20:12]  this metric is look at switching between light and dark mode because you kind of like have to hit every element on the page so you can see when i switch to light mode here
[00:20:21]  that the imp score actually more represents what's going on right because the input delay was almost immediate then the you know i got a fast computer processing time was almost nothing for
[00:20:31]  um and then the presentation actually took 50 milliseconds to actually render the page but the fact that this isn't just um a measure that you get from like you know going to
[00:20:42]  lighthouse so one of the things is lighthouse is um synthetic and generally speaking to date most it's all been load metrics so like you didn't like if you want to see imp
[00:20:54]  or these kind of metrics you'd have to actually go and have your site up for several months see the core web vitals for it i didn't realize you could literally just
[00:21:02]  get a browser extension and if anyone's interested get it i think it's just called web vitals this browser extension which is really cool um sorry it's chrome it's
[00:21:11]  a chrome extension but it's not the apis aren't specific to chrome um it's part of yeah here web vitals um here did i get this yeah this one and
[00:21:22]  yeah offered by adi osmani so that's the indicator i'm just going to drop this in here yeah and as for the package the package is yeah i think it
[00:21:36] 's just web vitals yeah the web vitals npm install web vitals or pmp install web vitals so um this as i said we we we go in here
[00:21:47]  and we always play with our lights house scores but now we have a new tool where can literally like if you wonder how imp is going to work on your page try it
[00:21:58]  like i mean obviously this is my local computer like there's a trade-off here right like there's a difference like not everyone has my device right and setups so and i
[00:22:06]  i i'd be interested to see like does the plugin get impacted by let's say i go into performance tab and then i like do some stuff here like where are we
[00:22:18]  cpu throttle let's 6x it you know so if now i'm 6x slower and then i go back to the console and then i switched light to dark mode is
[00:22:31]  it impacted i don't know let's see yeah maybe looks like it's a bit slower i don't know it i mean obviously your your um mileage will vary depending on
[00:22:51]  it um but this this is uh uh interesting this is uh this is a cool tool um another one to add to the arsenal when when testing your site and also very helpful for
[00:23:04]  me as a framework author to go like our transition is a good thing i didn't actually get into what imp is and why i'm less worried about it for single page
[00:23:11]  apps now um i can pull out the oldest scala draw for the this one as well but it's it's easier to show the timeline so excuse my drawing yet again but
[00:23:20]  essentially my understanding at least is that like think of a typical timeline like when you click to do something you might i'm gonna i'm gonna make a i'm gonna make a
[00:23:33]  timeline with a base and i'm gonna go that way okay and then so the first thing that happens is user interact so they click something right click okay and then let's
[00:23:44]  pretend it's like a spa navigation right the next thing that happens is some short period afterwards you're gonna have the actual code for the event handler fire right and then hopefully
[00:24:03]  we'll see this event handler will oh there's something about that line this event handler will um probably add some kind of pending state you know like i'm routing and this
[00:24:23]  is like because the event handler does a bunch of work like fetches data on your on on the server so at some point later here data comes back so i mean we can
[00:24:35]  add like another like i don't know we can add like a a region here with like some green or something we can go like we can just gonna call this region i
[00:24:50] 'm oversimplifying here but we're gonna call this region like uh data fetching it can also be code fetching if you're code splitting but we're just
[00:25:04]  gonna sneak this guy in here and um yeah i mean whoever mentioned that i'm not a graphics person is like dead on you know like actually yeah whatever okay and then this event
[00:25:23]  here is going to be like data loaded and then then we're gonna like finally near the end of our arrow here i'm gonna put one more of these on and we
[00:25:42] 're gonna say page rendered okay now the interesting thing is if it's almost easy to show this like with multiple colors but if you get rid of this pending state indicator here
[00:26:06]  the end user has no indication that anything has happened until you get to here so they're paying the cost of essentially this whole thing if if you don't put this pending
[00:26:21]  state in right like this is this is this is what they see this is very bad for imp because essentially the time frame is from this click all the way till the page is
[00:26:32]  rendered very poor but um if you sorry so the time for imp is this whole range but all right if you indicate pending state then like we're here essentially like if we
[00:26:54]  don't lock up stuff and we just like give people a visual display right so exactly ding ding ding ding ding use transition um we we have an react we have an so
[00:27:10]  like my concern is that you're not really measuring what the framework has to do true but this is what the end user experiences in theory right like the thing is if the framework
[00:27:31]  is really slow in here or here or like this this shouldn't really be about the network it should be about the potential painting to be fair but the the key part to
[00:27:42]  understand is when we have stuff like transition apis indicators um ways to you know like not lock things up which classically we we did a really poor job of locking things up
[00:27:56]  um then uh we we have less the fear don't get me wrong there are slower interactions as you saw when i was on the solid website here um like this one's
[00:28:06]  a slower slightly slower interaction not enough to get us dinged but you could picture there's probably some kind of interaction that's slower um uh like i don't know i don
[00:28:15] 't know i don't know i don't even know if messing in here actually okay so playing in the playground is actually not bad but you could pretend it's not hard to
[00:28:24]  imagine there's something slower in the page and um info punish you around all interactions it's actually the worst interactions and the longer that someone's on a page the more likely
[00:28:35]  they're going to come across those worst interactions so if you're in a multi-page app and people interact with a few points they might never hit them but because a single
[00:28:43]  page app is like the whole app you know like you never leave the page as far as google's concerned then like any interaction on any page in your app could count towards this
[00:28:52]  and it's the worst score that's why they have a pretty high threshold to get a good in imp you only need to get 200 milliseconds but um which is as you
[00:29:00]  can see like at least locally on my computer um a lot of these scores are very easy like they're like we're scoring in like the 20 millisecond ranges um because we
[00:29:10] 're not going to a server we're really good we're using transitions it's built right into solid router so like you probably have you know if you use the is routing
[00:29:17]  or whatever you're probably already have the ability to get really good imp scores but um it's it's important to understand that single page apps are a bit more susceptible even with
[00:29:30]  all the tools that we have available to us um i am honestly rehashing a lot of the stuff that michael just told me so um give him credit there he's in
[00:29:38]  the chat right now um uh so but i i think it's important for us to understand this because this was important clarification for me and it all came out of me being
[00:29:48]  in a conference sitting with dan shaver and being like huh because one do you know my concern was can i show you a demo um uh let me let me show you a
[00:29:57]  demo let let's go to the tutorial solid has on transitions right here we go transitions last tutorial in our thing and if you go here and you refresh you see your loading
[00:30:10]  state and the loading state for the playground don't worry too much when we switch okay so i actually have to turn on the transition that's without the transitions and from an imp
[00:30:20]  standpoint that's actually not bad because it literally shows loading right away that's just fall back fall but let's go to transitions now okay so when i do transition you might have
[00:30:29]  not even seen it looks like it's delayed see that one's it's too fast because what i'm doing here it's still too fast oh it grays out see
[00:30:37]  that time it happened it grays out and what i did was i actually made a style sheet where i put a css animation on here where i wait 300 milliseconds ease in
[00:30:48]  the transition i remember reading somewhere about rails theory whereas if you were too jarring on and also falling to fallback is too jarring but if you're even too jarring
[00:30:56]  showing the loading state like even indicating it like graying things out um if you can delay that by a couple hundred milliseconds or three four hundred milliseconds like within the threshold that
[00:31:06]  people used to they'll think the app feels faster even if you didn't give them a loading indicator even if it is actually slower to show them anything then then if you like
[00:31:14]  immediately do it and take it away from them um there's studies to show this and if you listen to react talk they talk about like this this bus thing like waiting for
[00:31:24]  the bus i we've implemented some of these things in solid and i immediately went there and i was like oh this is we're actually telling people not to show the impact of
[00:31:33]  transitions right away um luckily talking to michael he says it's about the possibility of paint and not necessarily the paint so they're looking at heuristics here that won't
[00:31:42]  punish people for delayed css transitions or whatnot um so my understanding is that this shouldn't impact your imp score and allow you to provide that you know nicer dx so when
[00:31:53]  it's fast like that you never see a loading state 167 milliseconds but when it's slower like that you get a chance that that's the gist of it so um
[00:32:02]  while there's still caveats around being a single page app i am much more confident that the apis we're building right now will help us score better in websites moving
[00:32:12]  forward all right it will not wait for data fetch regardless okay good good to know it looks like an infant zero how is that possible um i i think we i think it's
[00:32:34]  just like the yeah this is a good question um but i think it's because the network isn't involved it's the processing post of event handler it's it's the
[00:32:45]  blocking time till paint is my understanding mind trying to find a slow yeah yeah yeah we we do actually the the router does actually have um some stuff but how should i put
[00:33:11]  it there is an active state but the idea of transitions which is interesting is that like you're still on the current page while the other like i didn't actually show this
[00:33:20]  really here but if you look if i get a slow one maybe i need to change the example the force is slow one like if i update our delay time to something much larger
[00:33:29]  like this what you're gonna see is this doesn't move until like it's done we actually purposely keep things in the past um and state in the past so it's
[00:33:45]  like technically speaking we could feed it back through but i don't know if the rendering would catch up with it there that is interesting if we used our own pending state to show
[00:33:57]  it then it would trigger it there's there's there's some fun stuff around the way um transitions work i actually like this idea now that i'm thinking about it more because
[00:34:06]  we already are aware of the pending state on the anchor tags we could just read into that same pending state that's actually a really good idea and it would give people like
[00:34:15]  it would be the no effort version of it um if i i mean it depends i mean i think it's much more common to attack the content but maybe not like maybe that
[00:34:24]  pending state is how you add like a little thing yeah i it gives people options at least i mean you could do it yourself very easily by using the is router but as
[00:34:34]  a built-in it's an interesting idea okay yeah i think sometimes the measurement is a little thing but yeah i mean when i made the islands demo this is how it came
[00:34:52]  on michael came on my radar originally was i made the islands demo uh was it the the the solid like our server component style demo the one where uh where it's
[00:35:01]  like five kilobytes but it has client-side navigation michael came in and he's like okay p75 is well below 200 milliseconds like i feel confident here and i
[00:35:10]  was like okay cool cool um i i think i think this is very much achievable as long as we have the right affordances and i think the frameworks these days are actually
[00:35:19]  really helping uh developers accomplish that so i'm optimistic we i i could tell talking to michael and having many conversations with adi asmani as well the chrome team is
[00:35:28]  listening they're right in there understanding not just the problem space but understanding how um the solutions are being built in the frameworks and helping guide those directions a bit and even sometimes when
[00:35:39]  they're like hey you know you're kind of optimizing for the the the wrong thing they they tell us so um yeah i i i think i i think this is a
[00:35:48]  very healthy relationship all right but cool eh if you hadn't seen it um this this this uh chrome extension i'm i'm gonna have endless fun with like just you we can
[00:36:04]  just kind of go anywhere and just like see what's up again it's your computer so this is not like what you you don't don't go post this on twitter um
[00:36:12]  you know i mean like sometimes page speed gets used that way because it's kind of like a neutral central ground although nothing in benchmarks is truly neutral um but uh yeah it
[00:36:24] 's just this this is going to be endlessly enjoyable for me i'm i have to admit all right yeah how do transitions or stores the stores are mutable yeah that's
[00:36:41]  that's a great question i i did do some stuff to address uh delaying the writing to the end of the batch but i think there's something innately challenging about that
[00:36:51]  the answer to your question is inside stores they have signals so the signals can still read we now read i made a change in 1.5 so the signal reads actually inside stores
[00:37:02]  don't read the serializable state but read the signal state and so they don't read from the store structure they read from the internal signals and those signals are affected by
[00:37:12]  the transition so you do get the previous value um is there holes in that theoretically probably if you're trying to walk through the structure in a certain way maybe i don't know
[00:37:26]  maybe not because you're always reading from the signal it's an interesting question but yes to answer your question because signals will read in the right transition state in uh in theory
[00:37:35]  uh stores should be fine for this okay cool um let's keep on going then everyone with me still i don't have any orange juice today um i didn't get a chance
[00:37:47]  to pick any up when i came home all right let's keep on going but yeah i love the kind of conversations that come up from conferences and the connections you make um
[00:38:05]  you know around this stuff okay so we're good on that do check out the extension um what what is this all right this is imp yeah cool all right that all makes
[00:38:18]  sense oh yeah see this you're new to the stream i literally drink orange juice pretty much every stream from a glass from a straw um it started from when i used to
[00:38:33]  do my streams at 8 pm and and that time of night it was not orange juice it was other beverages um but that that's kind of been my thing and i just don
[00:38:43] 't have it today am i planning to do a future reactivity design well it's actually kind of interesting the following week when i was at reactathon i had like a
[00:38:59]  crazy oh you asked me to do a tldr of that yeah because i shared a bit of that didn't i um i yeah maybe not right at the moment but i
[00:39:11]  had even crazier ideas kind of come out of of that and uh yeah we'll get we'll get there uh sorry i basically i've been preparing my thoughts in in
[00:39:24]  like a hack md um future reactivity design where i i've been designing out a new async approach built into the core of of solid um it's reactivity this
[00:39:37]  is purely at a reactivity level um without even thinking about like the rendering piece necessarily although it's like in my head uh how it works which naturally handles async in
[00:39:49]  a really cool way um in that it is blocking like react where you actually throw promises but so you don't have to do null checks but it's limited to the reactive graph
[00:40:01]  so it doesn't block components and this would allow um yeah both not needing to null check but also being able to um basically reduce the amount of waterfalls um significantly so
[00:40:17]  we could keep our like nest the suspense kind of scenario where you fetch above i was playing an idea where we could actually use a compiler to wrap things so you could write stuff
[00:40:26]  that looks like this like where you can go like await fetch await fetch users and instead of having it again compilers are kind of fancy and i don't know if i
[00:40:33]  like this uh but this this actually came up from a conversation i just come up with this new async and let's talk about because it happened at reactathon i i
[00:40:41]  just came up with this new idea for doing this really cool semi-blocking async approach and i'm sitting there in at a speaker's dinner um the night before um
[00:40:52]  the conference with who else but theo and theo is telling me he will never do any like he'll never go back now that react has async components with react server components it
[00:41:03] 's over right um and and i was like yeah but like async components fundamentally is just a really bad pattern like really it blocks it causes waterfalls associated with the view
[00:41:19]  hierarchy rather than the data hierarchy like it there's there's like there's so many like i hope you don't away to wait you know like sure you can promise all but
[00:41:29]  like you're still locking in at that level like it's good in that it pauses and continues for you um which saves work on the server but on the client you
[00:41:38]  can have other state changes which complicates things in uh frameworks that render more than once like and in solid actually that wouldn't be that bad but in react it's like more
[00:41:45]  problematic and i'm just like like why do you want this thing that is just like loaded with foot guns and just like really not a great pattern and he's like yeah i
[00:41:56]  don't really care i just i just await and then it does it and it just makes sense to me and i was like i get it like like i i get it
[00:42:14]  you know what i mean like why can't we just fetch our data and be done with it and i was like i was like look it's only one extra wrapper i forget
[00:42:22]  what i tried to show him i tried to show something that was like this like create memo async whatever like it's only it's only one extra wrapper and he's
[00:42:31]  like yeah but i just i just want to i just want to write a component and wait it and i'm like yeah i know and that's that's when i i
[00:42:42]  realized though that the reactive primitive part is the key part right if people want to do that there's very little i can do to change it but something that occurred to me that
[00:42:54] 's really cool about async and i know i'm kind of tangenting out a little bit was that like async is really analyzable this isn't like dest
[00:43:01] ructuring props if you've ever tried to like destructure props uh with a compiler and i think what's what's what's this one uh babel plug-in solid
[00:43:12]  on destructure you know if if you if you're coming from react and you like really have to destructure your props there's a there's a there's a there
[00:43:21] 's a there's a babel plug-in for you um you can definitely go and do this and then you can destructure how you like and it'll all still work
[00:43:31]  and stay reactive and everyone's like oh why don't you bring that solid core well it's because now put it in a separate function put it somewhere else and now it doesn
[00:43:38] 't work like basically we're kind of lying to you about the rules just in the scope and people seem to be fine with that mostly in a lot of cases like but
[00:43:48]  it's it's tied to this component mentality right like it's the svelte mentality or the react uh compiler mentality they only care what's in the function in front of
[00:43:59]  you you are looking at a component and that is what gets compiled you've pulled the code outside and you're in a different language essentially like you're in react script and then
[00:44:09]  you're in javascript or type script like it's and this is this kind of awkwardness around the compiler thing that really um you know you gotta you gotta pick
[00:44:18]  your battles and destructuring for me is an awkward one because it goes against the fundamental fact that you you know stuff happens on access so try and teach someone why destruct
[00:44:27] uring works and something else doesn't and explain oh no the component doesn't actually render we just do a complicated transform where we basically take everything you destructured and then actually
[00:44:36]  access it where you access it and it's like it's it's it's not the way i want to teach beginners but what was interesting is async is completely locally analy
[00:44:45] zable because it's colors like essentially you know that something's async because it's async and because there's an await like if something happens in fest user you don
[00:44:54] 't actually care how what happens in fetch user all you care about is like at the end you get this promise and you know this so from a compiler standpoint async await
[00:45:04]  doesn't have all the negative properties of like some of these other rule benders things is because it actually does only care about what happens in the component because everything downstream doesn't
[00:45:15]  matter it's async so i was like it wouldn't actually be that hard to take this and compile it to like whatever i'm showing above here like just look here and
[00:45:25]  go okay there's an await statement just wrap it and then since this version of uh uh does throwing it would actually work what i mean by that is like if it if
[00:45:38]  it got it doesn't throw the whole view it just throws in the reactive expression so like you could picture you know a scenario like this where like we're doing something async
[00:45:49]  where we fetch a user um it can actually like when it goes to read the user at that point throw full name and set that it's async and then if someone else
[00:45:59]  reads it down here also throw and say it's async and then when it resolves repropagate through and we can do this whole thing of data propagation without actually
[00:46:06]  rendering into the dom or doing any of the stuff as long as you separate the pure parts from the side effects and now i'm getting kind of technical here but i just wanted
[00:45:55]  to kind of point out that it's interesting that if i was okay messing with the semantics here which concerns me because like this isn't blocking if someone put a console
[00:46:22]  log down here it'd run immediately so i'm like yeah but it's but it's also completely opt-in because otherwise there won't be async components in solidage
[00:46:29]  i just don't see that happening but if if someone wanted to do this then in theory they could basically write this and this is better than throwing at each one and like
[00:46:41]  redoing the work like react does it's better than promise all because promise all still would stop at this point because literally this one stops here and this one stops here it's
[00:46:53]  like where it's red and since it calc since it stops where it's red you basically have the perfect amount of blocking without the null checking anyway so this but the
[00:47:10]  downside is you mess with the semantics of javascript because the weight isn't blocking so i don't know if i like that but it's interesting that in a world
[00:47:18]  where people are like literally i can't handle using a wrapper i i need to await something i just want to like just use the data directly what's interesting about this model is
[00:47:29]  this would work for client and server side solid no problem which is really kind of cool because then it's a universal data fetching primitive that works across the board whether you
[00:47:38] 're using server components ssr csr and that's something of interest to me which we'll get more into in a minute why not pull all the promises well i mean
[00:47:49]  the problem with pulling all the promises is then you can't have stuff that come in independently like see how this is a different suspense boundary then we i mean you can pull on
[00:48:00]  we do pull under each suspense boundary then you can stream them separately then you can update them this keeps things independent right blocking is kind of bad like it it just innately
[00:48:10]  leads to other waterfalls i don't know why we're so hyped on introducing waterfalls even if they're on the server now like it just seems like a really poor decision
[00:48:20]  and okay i have to put it the idea is some amount of waterfalls are unavoidable admittedly right so there's nothing we can do about it right so we
[00:48:28]  can try and you know sometimes you can hoist the data fetching you can use deduping as a form of data fetching but the truth of the matter is at
[00:48:35]  a certain point there will be a hierarchical consideration and then you'll be stuck which is fine because it will happen but the question i have is does that hierarchy should it be
[00:48:45]  related to your data dependencies or your view dependencies and to me it has to be data because view has other considerations i mean it's possible to always get to the other by
[00:48:55]  careful optimization but if we get to a world where you're like installing the stuff off npm packages like all hell breaks out like this is this is not a solution that makes
[00:49:05]  sense so i'm i am very much trying to see if there's ways that we can keep this performant uh in any case analyzer book i mean yes i i
[00:49:19] 'm talking about literally top level like if it is a component you don't care what happens downstream here it's just i'm still skeptical on losing that transparency messing with the sem
[00:49:30] antics too much like right now i do mess with semantics but there's a clear boundary in the jsx the components being the boundary interesting um it might be what people
[00:49:41]  want though you know yeah yeah yeah i mean i'm just talking about i'm trying to generalize the resource thing at a core level where it is a promise to signal thing
[00:49:54]  but i i think if i want to do it in a way that lets people not have to deal with the undefined state if possible basically we're all trying to make
[00:50:03]  continuations in javascript um yes yes um and this is a lot of the same influences did it like we've been using the patterns that they use in remix for
[00:50:19]  years like honestly even before i ever saw remix so did sapper so did knox basically every other framework other than react was already using the patterns that remix was using um in
[00:50:28]  terms of hoisted data loading because like on the client if especially when you got code splitting you know like this all goes back to amber actually which also influenced uh react router
[00:50:37]  early days but then react router went through its teenage years and around react router 4 and kind of like still could do it but kind of drop that as the default you know this
[00:50:46]  idea of you know specifying all your route configuration up front and then having the knowledge of being able to prefetch everything at nested levels like this has been bread and
[00:50:55]  butter for most frameworks for years but for some reason in react you know it's good enough no one cared um but i mean obviously the remix guys being the author of react router
[00:51:04]  were very aware and very concerned and they're like look when we build apps we build it like this but no one else seems to be doing this let's actually like enforce this
[00:51:12]  in a way that says like hey this is a good pattern let's do it which is why they've probably had a lot of friction with server components because like moving it
[00:51:19]  to the server um helps with the cost like it reduces the cost and there are other ways to mitigate things but ultimately like it can it still leaves a lot of room right um
[00:51:34]  waterfalls are huge like back in the day i used to say that you know i didn't need ssr because my client demos were so fast it was because i'd
[00:51:42]  eliminated waterfalls i was comparing to like suicide render frameworks that were like full of waterfalls and i don't know i'm not even talking about waterfalls in the client
[00:51:50]  i'm talking about waterfalls on the server and it was just it was like shooting fish in a barrel so like going back there terrifies me um honestly but i mean i
[00:52:00]  mean you know so yeah i mean this is this is kind of you know tricky area um work there i'm just trying to catch up on on stuff universal reactive yeah yeah
[00:52:22]  i mean this is all part of we're separating a reactive library for the next version of solid so this is all you know the kind of work and thinking going into and i
[00:52:32] 've had i had a few other conversations uh some with even mitch go heavy and i've realized there's a lot of similarities um to the way we're handling as
[00:52:39] ync like you got to think something quick needs async throughout because like everything is async because all code could load at any point like the way it's written in truth it
[00:52:49]  all gets pre-loaded anyways but i'm saying like they had to write the framework in that way so like um i a lot of people handing out the virtual dawn level
[00:52:59]  um i i think we can handle at the reactive system level and then make this something usable by everyone that's that's my hypothesis at least if you have a you have
[00:53:12]  no waterfalls i don't know if that's serious or just a joke because it's like it's but i i think it's a joke right because like the idea is
[00:53:22]  like as long as like suspense is handling all this stuff you don't actually see it because oh i mean let's be fair a lot of people thought that when suspense was
[00:53:29]  introduced it would just solve the waterfalls and then the react team was like yeah no it doesn't um and that's why they pushed server components they didn't actually give you
[00:53:36]  the data fetching um approach on the client because they're like too many people are going to make waterfalls because their base premise is we need the co-location right
[00:53:48]  like we're assuming people aren't doing what remix does if you do what remix does with suspense it's actually quite nice that's what i mean i'm saying what remix
[00:53:57]  does so that's literally what the developer experience with solid start has been like you fetch the data you hoist the data fetching and it all happens at the route level and
[00:54:05]  then all the pieces come in as they're available code split data whatever suspense handles it automatically streams it does everything for you um you know in a lot of ways because our prim
[00:54:15] itives work the way they do like you can nest a suspense on the same component under we don't need things like remix as a weight component and stuff like it just works
[00:54:24]  really nicely um so yeah but i i mean there's always an extreme like why is co-location so important what think about the size of your page the size of your
[00:54:37]  uh like your like how many people are working on a given page like i i feel like this and i don't say this a lot of people say stuff oh it's because
[00:54:44]  meta is solving problems that meta has or whatever it's it's not like that because a lot of times i just say like whatever you know but it you know on that
[00:54:52]  you know because like people are too quick to just say like it's other people's wrong but i do actually think on a scale thing co-locations biggest benefit is that
[00:55:00]  you don't have to like you can stay local so if you have like one team working on one part of the page another team working on one part page it's this isn
[00:55:06] 't an option like to kind of like try and hoist stuff and work together like this is just the reality so if colocation everywhere is the reality you kind of have
[00:55:17]  to give up that you're going to be super performant here and you're gonna have to find other ways to mitigate it like i think that's just the the reality and
[00:55:23]  they the thing is they have one of the best solutions to do that in relay um at meta i mean it's amazing but like it's an interesting divide the cross between
[00:55:35]  taking that kind of technology and those kind of ideas and then bring them to the general populace to kind of be able to use them and i think there's a gap here
[00:55:44]  still that's just my personal feeling like i'm all for relay remix uh um style or that it's being called but you know this hoisting of data fetchers does
[00:55:56]  a good 80 90 impression you know you can always load co-located stuff from the component into those loaders that was a pattern that i thought originally i i'd
[00:56:05]  like dot data on our routes as a separate file and then i was thinking you put dot data beside your components and then it'll code split and then you'd have data files
[00:56:12]  and put other data files you know like the whole architecture you can build around that um but the current position is don't worry about it's on the server and i think or
[00:56:23]  you know deal with it as you need it as it's on the server and i think that's an interesting position to take because like on one hand yeah like for sure
[00:56:31]  like how long before you actually notice a problem it could be years like why worry about it now on the other hand like you start feeling for why the guys from remix have been
[00:56:44]  so hesitant on this stuff because they're like look we kind of did that with react router we let things go people did really terrible stuff and we felt it was almost our
[00:56:56]  job to fix it like to teach people we made remix to be like look this is how you do it don't like you do a lot of really poor stuff and like when
[00:57:06]  you've been through that cycle once you're just like i never want to do that again so anyway um this is a little it's kind of tangent on this but it
[00:57:25] 's important because i i this is this is kind of the challenge um been kind of coming into talking about react server components and stuff and react-a-thon uh which
[00:57:37]  which came right because um i i found myself on on a on a panel um you know talking about talking about that um i'll get back to block vdoms in a
[00:57:51]  bit yeah yeah yeah yeah all right yeah so this this is this is this is kind of a funny thing we're at react-a-thon and we're having a
[00:58:06]  panel on server components and who's in the panel i mean obviously shooty's amazing job moderating and making sure we're on topic and keeping the flow going but like
[00:58:22]  the expert panelists you know here to talk about server components is myself originally fred um but then replaced by ben the true series ceo of astro as we all know
[00:58:32]  now um and tanner lindsley now to be fair putting getting ben in here is a huge upgrade because ben has done incredible work he was had that stream with dan
[00:58:45]  abramoff where he probably was the first person that actually like with dan unveil like how you can use server components like in an outside next thing i know there's
[00:58:53]  like an example in the react repo but i'm sorry guys that that example is useless like that was the first thing where made server components actually you know like oh this is something
[00:59:02]  i can approach as anyone but like other than you know but he also works on astro so other than being a bit of a server component sympathist from that standpoint this is
[00:59:13]  not your typical server component panel panel and it's kind of it's kind of interesting i i actually want to see if i can can find a snippet from this because
[00:59:30]  it was a lot of fun um we were all very civil because it's not like tanner lindsley or ben holmes or myself are very aggressive over the top
[00:59:40]  you know but we are talking about something which a lot of people hold with a lot of skepticism and i think i think i think this has been kind of the challenge
[00:59:50]  um with server components in general uh and in getting adoption because we just talked about how react still to a certain degree follows like a good enough mentality on things and then people like
[01:00:03]  okay well if my thing's good enough why am i even bothering listening to this um it's funny can we find reactathon day one let's let's see if we can
[01:00:10]  find that reactathon day one stream all right let me see perfect perfect perfect oh no this is just is this the this this is only isn't the whole thing is
[01:00:31]  this the whole thing no no this is the reactathon in the park this last year haha okay let's see if i can get some audio through here so we can actually watch
[01:00:44]  this a panel full of our that's not accurate we're actually all bullish on on it um tanner doesn't have much use for it today but he sees potential in
[01:00:55]  it i am obviously very much into the concept if maybe you know we can discuss the finer points of the implementation you know like we are and um they are looking at how to
[01:01:07]  add client-side routing in a server component ask way into astro so this is this is not a bunch of people who necessarily um you know want to have you know
[01:01:19]  a negative opinion about it and most most of the panel was really good about good on that point but i want to highlight a section i want to i want to get to
[01:01:31]  the point i want to get to the point where where theo asks a question so give me a second you guys can't you guys can't hear this no this was in a
[01:01:42]  synagogue um you can't hear that right like when i was playing it no one could hear it i'm going to change my audio device for a second and see if we
[01:01:57]  can get this through so let's let's let me change to my macbook speaker this will might change the audio sound is that better okay okay sorry i was trying to
[01:02:23]  see if i could yeah because last time that's all i had to do i just had to change it let me take my headphones off for a second i think it's because
[01:02:32]  the speakers aren't working oh i see i know it's because chrome's not playing through it i just need to change the audio device on chrome that's what i have
[01:02:42]  to do i have to remember how to do this though um i think i'll just change it on my um system settings here for a second uh do do do do um sound
[01:02:58]  is it sound so let's not get ourselves now we are kind of in this new paradigm this is a big change and a big step right there we go okay so i
[01:03:19]  both have to change my mic and change sound it's fine so let's just scroll forward yeah thing and also those that rely heavily on react context based tools and in my
[01:03:31]  enterprise like will my code break if we are it's true like they're just going to see more and more growth into okay here we go it's like that's the only
[01:03:42]  thing we have to do is like oh you know hats off to to the react team because that's hard that's hard to do yeah i remember seeing a brand new react
[01:03:51]  18 and it works totally fine so go in port it ask us the spicy ones all right here we go go for it so we've talked a lot about the friction for
[01:04:11]  the adoption here i am curious how we could frame this we touched on it here against previous adoption like when we first used react we had to do a rewrite anyways like that's
[01:04:23]  part of how this works i think that hooks was a one-off in that sense where hooks was one of the few times we didn't have to rewrite everything to get something
[01:04:30]  i'm curious like how big does the difference have to be for y'all to consider the rewrite and how much do you think people are going to be moving in that
[01:04:39]  direction and in contrast to when we moved off of whatever reason before to react in the first place this is actually a fairly conservative question and as like he's he wasn't actually
[01:04:52]  trying to get the spice i don't think but he i think because of his positioning recently and if you watched his talk theo's been getting into conference talks recently he's
[01:05:01]  done a couple of them and i'm quite impressed with the content and the drive he did the keynote at this one especially trying to get people you know if server coins are going
[01:05:09]  to succeed it's going to be about how the community adopts them so you know big on him here trying to like kind of bring the conversation back into a civil place fortunately
[01:05:19]  it has the opposite effect on the speakers who you know rightfully may have a slightly different perspective uh i think a lot of that has to do with frameworks um because like
[01:05:34]  if you have you know a small to medium or even a large app like and you're considering rewriting uh right now like the only choice you have is to use next
[01:05:45]  right and and you want to use a framework you want something that's going to hold your hand through the process and you want the support and the ecosystem around that framework so that
[01:05:54]  you feel safe in your decision right but right now uh like there are so many applications that don't you know have the capability to move to a new framework or let alone
[01:06:07]  a new host or even have a host like a server at all right so i think um obviously having more frameworks uh having more options for developers to try them out without having
[01:06:23]  to commit to so much in one go um i think that's probably going to play an important role sure but now react was a new frame or should we just treat this like
[01:06:37]  it's switching to a new framework yeah replacing reacts so that something else doesn't yeah okay i'm yeah i mean yeah if if rea if this is if this is a
[01:06:45]  completely new framework then i mean isn't this the point where people consider switching to other frameworks as well like not okay that i i i don't think yeah i don't
[01:06:57]  think it's as big uh of a move but as that but it is tricky because i find like it's easier for people to take an existing app i i this is my
[01:07:06]  experience with solid at least it's easier for us to go like okay let's take a react app and put some solid components in the like the the leaves so to speak at
[01:07:15]  the end you're like okay i wanted this thing optimally i'll just like put it at the bottom um view with view vapor is actually taking this approach as well you
[01:07:24]  can use view and then you can use their new compiler fancy thing like in the leaf notes but you it's a bigger ask to swap out the root of your application and i
[01:07:33] 've been seeing some frameworks trying to like position like look you can use your react stuff inside our framework that's a harder sell on the migration i think that's the problem the
[01:07:41]  challenge here is because with server points that is exactly it it's like you have to swap you can't just like incrementally adopt it the leaves you actually have to like
[01:07:47]  take the root out and then move the pieces in i actually to a certain degree that's doable because you get to keep those pieces and then shrink them in size over time but
[01:07:58]  that direction is actually a much more longer painful process than doing it the other way where you attack it and then kind of go up so i think that's where the challenges
[01:08:11]  it's not quite as hard as completely switching frameworks but it def i mean but almost but i mean people are coming to me these days i'm just i i can tell you
[01:08:21]  personally like it feels it does feel like i would be moving to a new framework because you are it's it's a paradigm shift there's syntax changes there's new environments there
[01:08:32] 's new execution models there's so much new stuff that it does feel like a new framework and that's not a bad thing right because at least it's a good spiritual
[01:08:42]  successor to what we have angular but like like with angular i did i felt very lost when i was you know in angular 1x land and angular 2 is like kind of lo
[01:08:54] oming around for years i didn't know what to do and that's when i when i switched to react so it can either be a really great opportunity for react to say
[01:09:03]  hey we know it's not you know for the us the ecosystem to say yeah we know it's it's a it's kind of a big process to move but let's
[01:09:12]  make it as easy as possible i don't know what those tools are but they need to exist or like the pain could potentially drive people away from from gaining the benefits right
[01:09:24]  did you want to add something yeah i mean i remember the like original question was around like at what point is like the benefits worth the trade-off of like it is i
[01:09:36]  mean you can compare struggles of like would it be hard to move react to svelte versus react create react app to next i don't know it depends on the app
[01:09:44]  it really depends on how much you would have to uproot like my last company we were struggling to like go from create react app to a file-based routing system mostly because
[01:09:53]  the incremental adoption was so hard because you're going from less opinions to a lot more opinions and react server components as they exist today like they are built around like the app directory
[01:10:04]  and other things as it exists right now so like if the benefits aren't super strong like you're building something highly dynamic and it's like okay i could uproot the
[01:10:12]  routing system and do something completely different might not be worth the trade-off but if you're going from like almost no seo presence and no server rendering to full server rendering
[01:10:22]  seo managed for you routes are actually easier for developers to understand so the friction is worth it for onboarding junior devs all these other reasons then suddenly the trade-off
[01:10:31]  is really worth it and you can bring like your react design system along for the ride which is usually something that might be weighing down larger systems so like yeah it's really
[01:10:40]  when you're in that pocket of like content stuff e-commerce and anything that really benefits benefits from the server all right okay can you guys hear me all right again let
[01:11:00]  me see am i coming yeah okay yeah i am am i coming through yeah it's hard for me to tell when i'm coming through the speakers or not okay i i won
[01:11:08] 't yeah let's let's let's let's talk about this for a moment like this is this is this is one of those things right um i'm gonna bring my
[01:11:19]  head back in here um i love this segment because it was pretty real um you know it and i think everyone had actually really really good points um here and it's funny because
[01:11:35]  this is at a react conference keep in mind this like this is reactathon um and we're talking about the hottest new technology server components and i said everybody here is someone
[01:11:49]  that i've considered very respectful uh in terms of you know the overall um you know framing of things and it's it's tricky because like they all have really good points the
[01:12:00]  biggest one is majority apps probably are still in this cra zone right and like moving to next as uh as uh ben pointed out was actually challenging in itself and this is before
[01:12:16]  the app directory and now the app directory is like another thing it's almost like being two zones removed and hoping that the ecosystem can make that move across basically two migrations at
[01:12:27]  once obviously you can just jump to the last one but conceptually it's actually um a big move and this is what a lot of conversations have been around recently um i
[01:12:39]  feel like with this stuff because like it's like this is a very cool technology and very powerful but the difference between react in 2013 and react in 2000 uh let's take it
[01:12:53]  up and react in 2023 is that now they're the the incumbent and they have basically all the users and in 2013 i mean if you watch that honeypot video you know
[01:13:05]  what i'm talking about they kind of came off and they're like look we kind of saw that there was a better way to do things so we just told everyone that there
[01:13:11] 's a better way to do things people didn't believe us but we were like you know a little bit brash a little bit you know like they they were a little bit
[01:13:20]  aggressive which is fine but like they came they you know they were right kind of like we did need to change the way we were doing things they were they were right about
[01:13:28]  a lot of things maybe not everything but a lot of things and we had this current ecosystem of things and they really enacted change by being the small player that came in with like
[01:13:39]  we know how to do things better um and actually the rich harris's talk where he talks about like the frameworks actually says that is like you know he actually says like
[01:13:49]  we do it better here you know we don't live in these mud huts but you know with you know we live in these cities of technology with skyscrapers or
[01:13:58]  whatever like paraphrasing them a bit but it really was that kind of feeling that they were like look everyone's doing it wrong the concern is right now it feels like
[01:14:10]  that kind of attitude is still presence except everybody is react users so it's like instead of in kind of like pushing up against like a bunch of you know people using other tools
[01:14:22]  and being like that it's like pushing up against pushing against like their own community you know this is why someone like Tanner would even speak up because he's like how how do
[01:14:33]  i move from cra to like needing a framework and actually know we're serving opponents now like that is a massive ask and i i realized i was sitting there at reactathon
[01:14:45]  at the clerk hackathon talking to people from across the ecosystem um and a number of them were there before say the versell event that was happening that that week um or that
[01:14:56]  evening and i was thinking about it and it's like it's not just even the the singular feeling of you know the community who's obviously going to be off put when
[01:15:07]  there's big migrations it's hard even if you try your best efforts people are going to be put off by change i mean they trusted they believe they built and now you
[01:15:14] 're saying like no that's not quite the right way to do things you need to change what you're doing but it was like coupled with this like apple-esque like
[01:15:26]  like kind of like exclusive like we are the cool folks attitude it was such a huge like i i was just sitting there i was like this is this is what's this is
[01:15:38]  what's happening it's not like any of the pieces of the alignment's bad but like suddenly we're we've gone from this world where we had kind of like some almost
[01:15:46]  cocky no better devs coming and saying you could do something differently becoming the biggest player still keeping that attitude and now surrounding themselves with like we've been working on something
[01:15:59]  we think you're gonna really like it like it's just like the wrong presence or attitude to get the average developer on board you know exclusive events like it's it's
[01:16:14]  just like oh man like i i i if people say cult i don't know if it's necessarily called like is apple cult maybe but like i i it's it's just
[01:16:29]  like there's this exclusivity at a time when we need to be embracing it and i i gotta say this is not everyone this is just the perspective you see i've been
[01:16:37]  seeing on social media i think actually react core teams and doing um amazing work and when i say the core team i don't mean the core team you've been you're
[01:16:44]  aware of i'm talking about i conversations with joseph on i had conversations with eli white people who actually have you know from meta been reaching out trying to get that read
[01:16:53]  on the community trying to understand where people are at and where they're missing the tanner will tell you himself what amazing conversations you have with these people who care about the future
[01:17:01]  of react but it's not the public image right now and i i i think i think there's something that'd be done about that i mean be fair them showing up
[01:17:11]  at remix conf which i'll get to in a few minutes is actually a big step in the right direction but this is i i was trying to place my finger on what's
[01:17:19]  the problem with react next for cell because it's not like somebody's controlling someone else that narrative is boring and tired and never was true but it's like it's like
[01:17:29]  it's almost like too much together too exclusive too we know better and it's the most alienating thing that i could picture um when you just put all the pieces together
[01:17:39]  and that was the the stark contrast between what i felt and saw at react-a-thon and then like you know what came immediately after i'm going to catch up on
[01:17:59]  chat now and see if i can address on some of this stuff what do we got here it's also ask the engine words to adopt new infrastructure in the form of serverless
[01:18:12]  or node i think yeah yeah i mean that's theo is doing a great job spreading the good word um so to speak um but yeah i mean this this migration has been happening
[01:18:24]  for a decade ish not that i guess when do we start all moving serverless stuff i guess what 2016 on some eight ish years so you know we're getting
[01:18:33]  to full swing now it takes five or seven years to to move from the version to the next version of your product so like we're at that point where we're past the
[01:18:42]  halfway point where everyone's kind of like asking this question um yeah i mean what went viral over this whole thing or not viral was that tenor straight up compared it between angular
[01:18:54]  one and angular two and you know maybe that's fair the funny thing is you talk to people who work on angular and they'll tell you like oh we did a great
[01:19:03]  job on the migration which you know everyone else is like but like they from they had to migrate all these apps in google so they did they wrote scripts and migration they tried really
[01:19:13]  hard um to to help people with that shift at least internally i don't know my understanding it didn't go so well in the ecosystem because like just conceptually different enough um
[01:19:23]  so yeah i mean it's interesting we're all going to go through migration so we're all going to have trouble i'm not going to get all high and mighty right
[01:19:30]  now considering solid for example is 1.0 like you know we will have this will be you know elements of this will be in our future but i think what what's interesting
[01:19:40]  of this is that it's why you know tanner's where he's at like tanner picture being a guy who builds probably the most amazing typescript router that we
[01:19:51]  know of across all frameworks at this point and having no place to put it because he's a react developer and he needs a framework for it right he essentially has to build his
[01:20:01]  own framework at this point and he doesn't want to build a framework he's a basically a veet cra guy so i mean obviously we we this is how we even got
[01:20:10]  into the same loop of things because most solid users are still on the cra veet kind of side of things they're only just getting into server rendering with solid so we
[01:20:20]  have an opportunity here to take them with us and take them with us to server components that's obviously because we don't have that legacy but it's something that's of high
[01:20:28]  value to us it's interesting um and i understand why it's because it takes time to figure out these things why it hasn't communicated as such a high value on the react
[01:20:36]  community and i think part of it is because they need to prove the idea first so they've been focused very much on next which might not be as incentivized but this
[01:20:45]  is essentially the crux of of the of the the challenge here right um let me see some more comments here yeah i mean and and this is this is an interesting challenge to
[01:21:00]  talking about like the it's a people problem because you already have people working on these teams in that and we're basically saying no you got to do everything in javascript
[01:21:08]  which is something that i talked about in an article a while ago the javascript paradox like this is a real concern and consideration definitely um but yeah i mean this is
[01:21:18]  this is a tricky thing to navigate even from the way teams and organizations are set up ben had the best answer and tanner had the spiciest yeah but it's funny when
[01:21:32]  tanner lindsley is the one giving the spiciest takes like where are we at i mean like i mean there's a certain practical sense there he's like
[01:21:43]  what what am i supposed to do what are you guys telling me i've got all this code in react and now i need to do what with it okay so i can basically
[01:21:50]  choose any other framework like that that was where he was at he's he's been he's been trying to figure this out for a while yeah he's in the working group
[01:21:59]  you know he's not out of the loop on this stuff it's just it's it's just been a challenge which is fine like server components are great technology this is
[01:22:06]  this is this is the challenge um you know like the approach of server components i'm very bullish on in general i think it actually addresses a lot of um a lot of the
[01:22:17]  like performance considerations around react uh especially around server rendering i mean it's hard to say that i don't actually don't know if the server rendering is actually that performant
[01:22:25]  um react server rendering has never been particularly performant but the truth of the matter and i've said this for a while is you can scale up servers to a certain thing take
[01:22:32]  those costs up to a certain scale you're fine but the end user impact on stuff like hydration is not something that you actually have any control over and this makes an impact on
[01:22:40]  your end users which is something that i think is worth considering and you're looking at yeah yeah okay just reading this um bercel branding react culture elitist yeah
[01:23:00]  yeah i'm just catching up was anyone in react at uh vete conf um no last year i don't think so uh there was there was an almost no like there
[01:23:11] 's a bit of a tension there i don't think which is weird to me because like honestly beat is the best way to get started with react today um for most people and
[01:23:21]  i mean it's arguable that it's next now i guess but v like like i'd say until rscs came out i mean i guess you would want server-
[01:23:33] side rendering as well but like then you there's that but for like everyone who did not care about server-side rendering veat is like was has been like c like
[01:23:41]  just a better cra in every sort of way and adding server rendering to it wasn't even that hard i think rscs make it harder so nakil you were on my
[01:23:49]  last stream uh spent so much time trying to get uh certain points into veat um veat is great um thought come from the reaction reaction yeah i mean and we've
[01:24:06]  we've been saying this the whole time i think uh there's a tweet someone said that like on the stream was the first time they heard the the take that dan gave at
[01:24:13]  remix conf which is simply the fact that they are the first ones willing to actually try this stuff um as it turned out the situation with at meta internally was like server components they
[01:24:25]  saw use for potentially but like the types of teams that were inter like they have to get buy-in and i i know this too working from ebay like if you
[01:24:33]  want to get funding and people working on stuff you need to have buy-in internally in the company and if if there's other priorities on the product teams like you know let
[01:24:41] 's say the best place for server components was in their storefront and the storefront was busy working on something else like maybe a whole bunch of legislature came in that made them
[01:24:51]  really have to be worried about privacy or security or something you know like and now the product teams are spending the next six months you know dotting their i's and crossing their
[01:24:58]  t's they're not going to focus on server components which means that there's no vehicle to carry it next and bursell offered the ability to actually continue the evolution of
[01:25:07]  react that they've been envisioning for years like it's hard not to take that up right um it's it's just like other places are skeptical let's say you can
[01:25:16]  go to remix or gatsby but they're both like i don't know about this we already been building our own patterns when you guys were kind of you know doing whatever
[01:25:24]  you were doing and finally they found a buyer essentially who was like yes we're very interested in what you're doing and we're willing to basically give up their existing patterns
[01:25:35]  to embrace what the react team thought was the best approach so like it's not an easy place to be the only challenge is it's it's almost too good you know i
[01:25:47]  mean like the that alignment it's just it's almost yeah i i'm glad that as i said they're showing at remix conf is a perfect example of you know trying
[01:25:55]  to address this in a way you know going to the people aren't trying to actually you know address this but for the first six months of narrative this was not very very uh
[01:26:06]  you know friendly position so to speak right not that anyone is being outwardly aggressive it's just like the like you could just get this atmosphere sense all right i'm almost
[01:26:22]  caught up you know what do we got here rcs do sell farms are very bearish on getting larger doctrine the games are not worth the rewrite cost needed for most business are
[01:26:35]  going to have that mindset very see as a niche and almost indefinitely which means that when the rewrite time comes around they might look at other technologies essentially is what the the
[01:26:44]  writing between the lines is on that one and it's interesting i this is just about the success arc of any product right like how much can you change and still be the same
[01:26:54]  thing i think there's something very react like in the solution still i see it i like it it you know that excites me but i mean this this is a challenge
[01:27:07]  any like large player faces yeah yeah yeah yeah yeah it it is this but it it's uh it's it's ph freezer do you guys want me to talk about ph
[01:27:29] p for a minute sorry i this is the thing like it bugs the react folks more but like it still comes up it's like all the people who talk about like rails or
[01:27:38]  php or whatever like previous server technology it's like not the same thing and doesn't accomplish the same things ultimately like the thing is i think we can learn like there's
[01:27:49]  there's a thread or something that came up and people were like uh they were like do you expect solid start to you know get all these features that you know these like
[01:27:58]  because someone's talking about i think adonis which was like a js framework that has taken care of all the stuff that you like a lot of very very similar stuff to
[01:28:05]  like laravel or whatever like it actually cares about the typical back-end things and and i'm like maybe one day but i mean i'd love to lean into it
[01:28:12]  i mean our only requirement is to be able to run javascript on the server we don't really care beyond that we needed it mechanically to solve the hydration problem
[01:28:19]  solve the bundling problem solve a whole bunch of other stuff so i i would love to see us get there it's just the reason the front ends in your back end zone
[01:28:28]  is because we actually need to solve a problem that in my opinion is actually way more impactful on the end user than you know even if you made your site like five or ten
[01:28:37]  times faster on the back end um so there's like a really big need here to address these problems and that's why you know you have these js people coming coming in
[01:28:49]  but php alone is not even ballpark solving this problem even stuff like live view is a different use case like it's just not like this is not the same thing
[01:28:59]  um no yeah i don't want to talk about asp.net web forms ever again i've kind of like blocked that part of my memory out of like it's just it
[01:29:10] 's gone yeah i mean and the thing is serverless is it's the funny thing is as we get better scaling and all this stuff like it gets its range goes farther
[01:29:36]  and farther but at a certain point like it's just what's become easier than ever right now is idea to start up to mid-sized company like that path has just gotten
[01:29:48]  incredibly fast incredibly you know like you have the tools and it's amazing how far you can get until you like get hit and then you actually need to form like a real
[01:29:58]  engineering org around infrastructure and whatnot but for people who are already there they're they're not running out the door to pick up this stuff um i do think there's wins for
[01:30:07]  them that's why like all like let's look at this all this hydration stuff that we're talking about quick um you know marco side note i actually loved from this
[01:30:19]  conference was um marco did hashtag marco did it first uh came up um it's a great hashtag can apply to most things in front end so do go out and use
[01:30:30]  that um but like when we're talking about these things and like why you know we're doing the you know our islands router and solid start and all this stuff these techniques
[01:30:41]  and stuff um also react server coins these techniques actually originated from larger organizations like big companies that had real problems you know especially in the e-commerce space or whatnot and and are
[01:30:55]  kind of making their way down into the mainstream so like this does have the ability to help large org i think the unfortunate part is that mid to large orgs bought in on
[01:31:06]  the like what i call the commercial version of react or whatever and then they went and implemented it and then now they're like sunk costs and there's nothing they can do
[01:31:16]  this is the alex russell comes from he's like he was like facebook doesn't use react the way that everyone else does and they should tell people about it because he
[01:31:24]  felt that the problem is people believe something and then do something atrocious and then they're stuck there's probably some amount of truth to that and i mean that's
[01:31:37]  why i get so concerned about patterns and stuff but it goes beyond that because once you're at a certain scale all of this stuff is just hopeful thinking all these patterns are about
[01:31:45]  thinking you you're going to make exceptions you're going to break out of it you need you need a systematic approach so that you know all the teams and all the developers can
[01:31:54]  align and that system probably exists on top of the framework i don't think the framework can be good enough to be that for everyone so the company's going to make actually
[01:32:03]  hard engineering decisions how they build their culture how they build their patterns and then at that point you're still going to have exceptions and stuff to the rules no one ever actually builds
[01:32:12]  the stuff exactly by the book because there is always going to be fringes on scaling and stuff like like this is unavoidable and i i think we just have
[01:32:23]  to be realistic with it and understand that the sweet spot for a lot of these tools might be in that earlier segment however it still gives you the good baseline for the later segment
[01:32:35]  as long as you understand that it's not the end all be all but that's my opinion uh parasocial i'm going to open this i'm going to trust
[01:32:53]  you here because i think i think i know exactly which tweet this is um yeah yeah okay yeah this is this is the one that i was looking for yeah thank you um
[01:33:07]  let me go back to actually sharing my screen a little bit the react team is telling for sale what to do for caniloni and then this is actually what most of the
[01:33:19]  community gets wrong i first heard this pressure on ryan streams it's not the next is the one who's pushing react to new server side directions next was the only big framework
[01:33:27]  who agreed to cannibalize their framework by that i mean that you are using more react features and less next features and support all those features react react has won much more
[01:33:35]  from the collaboration the next did i like this at the time i don't know why it's not still liked twitter is weird these days anyways um yes yes this is this is
[01:33:48]  exactly what happened at remix conf yeah that's a good question part of it is i haven't because i hadn't shipped solids uh server component thing for real so i haven
[01:34:05] 't really dug into it i i do have a one of the biggest differences is the state preservation happens in such a way that it's more like it's not asp.net
[01:34:14]  anymore we're not playing like the serialization like back and forth piggybacking game the client has a very important role in this process in that it retains state and
[01:34:23]  it doesn't serialize it back and forth it actually is a living part of this system so it's kind of funny it's it's i wonder if it's like a
[01:34:31]  reverse model like we have stateless backends right um and then a lot of the ways people have been solving this like more integrated thing is like things like live view where you
[01:34:40]  have like a stateful back end where you keep a persistent connection but in in a sense the way this works is you have like a persistent client um so it gets bootstra
[01:34:48] pped initially with what it needs but then the persistent client is actually you know cutting into cutting into stuff i i guess you know what let's look this collaboration started like several
[01:34:59]  can you guys hear that well years ago you know this collaboration started like several years ago it someone's got to tell me if you can hear that because i did change my audio
[01:35:09]  around and if you can hear that then we're in this awesome place okay you know on the one hand i get a lot of criticisms of resale on the other hand
[01:35:17]  it just gets under my skin when people say oh like resale is telling the react team what to do well like actually the uh the react team is telling them what to do
[01:35:28]  it's it's it's it's more complicated but the reality is resale has invested years into building out our vision and it would you know like when sebastian left
[01:35:40]  meta uh if resale would not you know if resale was not building a server components framework he would have gone somewhere else that would have been that client that would have been
[01:35:50]  willing to build that still like work on the thing that he was interested yeah because he's building the architecture like he knows what he wants to do and there needs to be a
[01:35:57]  place to prove it yeah and so that's that's kind of part of it like they've invested years of like full-time engineering time into proving out our direction and
[01:36:07]  we appreciate that and we want to extend that to more companies as well beautiful yeah yeah exactly yeah yeah yeah exactly and this is why these like i don't like the comparison
[01:36:26]  that people make sorry i i'm jumping in and out two conversations here essentially but yeah in in any case um yeah this this is this is a great one i should have actually
[01:36:36]  bookmarked this one i'm gonna actually add it to my bookmarks right now for future reference this collaboration started like several yeah so yeah i mean this is this is
[01:36:47]  this is kind of the scenario we find ourselves in with um you know react react server components and just in general uh why there there's all this spice going i think i finally
[01:37:05]  caught up with chat so i think we're in an okay okay place to kind of move on from this topic for a minute um and don't worry there there's more
[01:37:14]  here uh that we will get into in a minute what's what was cool though um is in the holes i'm gonna we'll take a moment we'll get back to react
[01:37:25] -a-thon in a minute but in in the holes there was actually a few really cool releases and things that went on i i want to talk a bit about um
[01:37:33]  um block dom uh if you haven't seen this it's a virtual dom approach um that was pioneered by literally a library called block dom um technically one more um another small
[01:37:47]  library had a very similar approach and um then we've seen it be picked up more recently in million js and in ev which is a the what the original fast v dom
[01:37:59]  library and the idea is it's a virtual dom that's built on holes like basically i mean this is a very mechanical thing without jsx but essentially the idea is that they
[01:38:12]  they use the same kind of optimization solid does to clone the static parts and then they focus on just updating the holes in the template so basically this started showing up in the js
[01:38:21]  framework benchmark about two years years ago i think they like after the reactive libraries showed how they're much faster than the virtual dom libraries they're like okay well what can we
[01:38:30]  do and what they did was they applied a very similar type of static analysis that we use in solid but to a virtual dom library i wasn't expecting this to happen uh necessarily
[01:38:40]  because if you've ever talked to members of the react core team they're very big on the fact that like that there's no create separate from update it's all the
[01:38:50]  same process well guess what you can't optimize this i've written articles about that whereas these guys are like yeah okay well i don't care so they separated create from update and
[01:38:59]  very much kind of like svelte in that kind of mentality and managed to get a very fast approach to the virtual dom that's basically indistinguishly fast
[01:39:08]  from reactive libraries so um what's really cool is aiden actually made a 150 line uh code snippet demo where like if you want to understand how it works you literally just
[01:39:18]  can look at this he calls it hundreds 100 js as a joke it's similar to what i did with the reactivity library he made a 100 line version of a block dom
[01:39:27]  virtual dom based library so this is great to analyze if you want to understand how this stuff works right um and actually it went and released an article talking about how this stuff
[01:39:42]  works as well and i think this is great this is this is um this is one of the biggest changes in virtual doms um since you know react introduced concurrency but currency
[01:39:52]  currency is like improvements in one direction this is the biggest improvements on like raw performance we've seen in virtual doms since really inferno ev time period it's been six
[01:40:03]  or so years so i i think it's very interesting right now its interaction with react involves a lot of rappers um aiden said he was actually influenced by the solid react rapper
[01:40:13]  a little bit in terms of figuring out how to like make them play together um but uh if you're looking for that uh sort of uh what's the word like insin
[01:40:25] uous or like the way of like getting into react and this like converting it into something more performant in areas this is this is this is this is one technique of doing
[01:40:34]  it yeah yeah we got we got we got we got aiden himself in the chat here yeah so yeah very very very cool technology another another one that i want to point out
[01:40:50]  is uh quick went 1.0 also right around the same time period so um yeah this this has uh been uh been a long time coming for them as well they were
[01:41:04]  waiting on some features i don't think they actually delivered on those features i think they decided like they were looking for out order streaming a few other things i think they decided to
[01:41:12]  just go with it because like they've been stabilizing stuff for a while and there's been a lot of conversation i this has been one of the challenges uh you know
[01:41:20]  i i first got involved with quick um because we we us an astro and everyone we're having a hard time marketing and being like why is this not an xjs um
[01:41:28]  and it's funny the conversation still continues on today i'm actually want to pull something up for my benchmarks or my bookmarks i think is relevant oh so yeah this is the
[01:41:37]  problem it's hard to weave all the conversations together this evan you quote from april 20th is actually really relevant to what we were just talking about a moment ago
[01:41:45]  um so before i jump right into quick for a second i want to talk about this for two secs i think the emotional element here is that users sense that from the messaging
[01:41:53]  that the react team no longer trust the users to make their own architectural decisions we know it's better for you you might be right but that can still piss people off um yeah
[01:42:02]  when evan hits he hits and i don't mean that like an aggressive way i mean he's just like you know it's like hitting a home run kind of metaphor
[01:42:11]  but i'm not a sports guy so yeah anyway i want to talk about this because i was actually sitting at the conference in london with mishko and i know
[01:42:19]  this is a little bit out of order but it ties into the quick thing and he's like he's like man we got we got a 1.0 coming out next week
[01:42:26]  how do we pitch that we're we're different right and uh i i like this isn't this what happened to view 2v3 a little bit funny is that and
[01:42:47]  maybe a lot of it if i still got jess or some other view people in the audience they'll tell you what's up it's the interesting thing with the view
[01:42:53]  to view view 2v3 thing is they still have a reactivity like a lot of ways the model didn't change just the way you like write your code changed but it
[01:43:00]  was so hard that like core libraries were able to change really easily and stuck close to core but the further you got into the ecosystem the harder it was to make the changes and
[01:43:08]  i i would have assumed that the old components were compatible with the new components and when i talk to people they say that but there's something about the migration that made things so
[01:43:15]  incredibly hard that i don't understand enough to speak to but like again migrations are never as easy as you expect them to happen so on one hand they're you're
[01:43:25]  right and they were like view also was like this is the better way of doing things so yes there might be a little bit of calling the kettle black there um it's i
[01:43:36]  think part of it is that the react um has kind of for the longest time almost felt like it pointed at others for doing these kind of changes and now they're the
[01:43:47]  ones so it's like it's an interesting tension we'll get into that a second it's actually just the ecosystem that's like right but like the point is like doesn't
[01:43:56]  matter i that's what i've been trying to figure out just like like i've heard that this was a very painful thing but i don't understand like couldn't the
[01:44:08]  ecosystem just stay in the past uh chat's very sorry just people trying to make quick jokes um it one trying to get one-liners um yeah yeah but even if this
[01:44:27]  was like so this is that says a marketing problem but even with this marketing problem like who cares right like like just stay on the option api and go on with your
[01:44:39]  day was there some piece that was incompatible like that's the part that i don't understand because everyone talks about this pain and i know when it came to stuff like
[01:44:46]  nuxt it was really painful because view kind of like my understanding is especially nuxt they they hand hold you through everything so accounting for both scenarios was something they had to care
[01:44:55]  about but i wondered if other average developers really had to worry about that kind of thing let me switch to my computer okay so she got a lot like maybe i just need to
[01:45:03]  have her on the stream alone just to give like the full like two hours about the two two two three migration it's okay don't don't don't go out of your
[01:45:10]  way too much right now jess it's it's fine i was just curious um but what so many breaking chains plenty on document just went through the migration okay so it did
[01:45:23]  actually affect your existing code that's that's the trickiest part um okay okay well we've been people saw this question so we've been collecting one-liners for
[01:45:36]  for for for quick here it looks like what do we got here um it's quick like mini astro islands kind of there's more to it than that but yes that
[01:45:50] 's an easy way to think about it they they let your eye it's easier they automate making smaller islands it might be a way of doing it but they do more than that
[01:45:57]  they actually don't hydrate those islands they just kind of like resume which probably makes no sense to anyone i've written articles on it but the idea is that the first
[01:46:07]  bit of code that you actually run is actually live code handling your event handler or whatever work you have to do it's not like this like restart the dom thing quick you
[01:46:19]  might not need javascript yet i like that one i i do like that one um what else we got here semi-inappropriate oh what else we got it
[01:46:32] 's like react but with caffeine and cocaine included oh you guys are just getting worse and worse this isn't a kids-friendly stream right but what i mean by the explicit
[01:46:49]  interaction is that interaction that's the code that runs the interaction that runs it doesn't like go then go hydrate something afterwards it literally just like it your code gets rewritten
[01:47:02]  in such a way that it starts from the event handlers and the effects instead of starting from the component tree so you can picture picture your with the difference between islands and
[01:47:12]  like quick is that the event handlers are essentially the the code entry points so all your code starts from the event handlers so like you click on something at that point that
[01:47:21] 's what runs so the code goes oh update the state oh this state needs to recalculate this derived state okay this derived state needs to update this portion the dom in
[01:47:31]  quick case maybe make a virtual dom or update this thing like it depends on the situation so then it goes and does some rendering but that that's like the process through it
[01:47:39]  and if that rendering requires some other state that's already there from somewhere else it might not need to recalculate it because it's unrelated to that change and they've
[01:47:47]  already serialized it that's the whole point it basically it inverts the execution model to be like down from event handlers instead of down from components that's that's how
[01:47:56]  resumability works okay jess actually managed to fit this in a single message so tldr view 2 to view 3 too many ways to migrate and pending one started
[01:48:07]  the migration you had different flavors of view view 2.6 view composition extension 2.6 plus single repository it's easy and the only components that broke were class components and deep
[01:48:15]  watchers right and class components was a different spec that was never actually officially adopted but people had already been migrating to it yeah okay yeah some people were saying that but
[01:48:26]  the reason i don't make this comparison is because it's still very much a js thing i mean htmx always goes back to the server you don't need to
[01:48:36]  here alpine is more similar except alpine actually hydrates a lot of the time maybe not completely like they have holes but like the output of it it's kind of
[01:48:47]  like alpine if alpine were op like these places were opt alpine de-optimized and i feel like quick is optimal in those places but yes i guess it
[01:48:54] 's kind of like if you wrote normal declarative code and then you ended up with something kind of like alpine yeah yeah yeah yeah i mean nothing actually gets rebuilt during hydration
[01:49:09]  in most frameworks like they literally just set up all the state but the problem is like you have a component that creates state that closes over event handler so you have this thing
[01:49:16]  where you can't get to the event handler until you create the component and then create like link things up with quick because they hoist the event handlers out like you can
[01:49:24]  literally just start from the event handler down and not have to run the component tree yeah i figured you could give a whole talk on that okay so like honestly some of the
[01:49:45]  suggestions here in chat aren't that different than the kind of stuff here just javascript you need just when you need it see just in time javascript the world's
[01:49:54]  first constant at scale framework the funny thing about the just in time javascript thing is is like at a certain point you're just like wait that's not typically actually a
[01:50:03]  good thing and so they this has been one of the challenges they have because they actually tend to preload everything anyways like everyone else so there's there's this challenge the challenge
[01:50:10]  they've been having those a lot of members of the react team keep on saying um two on it's way too technical wouldn't know the value are saying like server quotes
[01:50:20]  do the same thing and that's not even remotely true um um to be fair like server components do a good thing but what quick does is actually distinctly different with especially
[01:50:35]  the the the way that they have to handle the way they break up the code for serialization um is very different than that i'd say server components more like islands and quick
[01:50:44]  is a little bit something else then there's this whole zero to one thing anyways this this this this you can understand how i got early involved in this because it's really
[01:50:53]  hard to figure out how to actually markets markets a new javascript framework lazy loading its best stream javascript like a video you know ship fast fast it's quick um
[01:51:06]  but this conversation actually led into some more discussions that were actually not quite as civil and i don't know i can't quite get the link in but it it led into a
[01:51:18]  conversation where people are saying like reacting quick are the same aren't the same and this um this was uh got like a little bit on the heated side of things because where
[01:51:30]  was i going on bookmarks um sorry all my stuff is really out of order um see like i was supposed to already talk about this right with rossopedia i'm having
[01:51:41]  a really weird reaction to this next stuff it's like it's strong as it's like the same kind of reaction i get when i think about being raised in the cult
[01:51:49]  it's a dev framer i shouldn't be having strong reaction um anyways okay which gets me back to the beginning of the stream the problem is and that you could see the
[01:52:05]  dates at the same time period dan's had to write this response like a billion times at this point and i've seen this response about other things too let's be fair
[01:52:15]  this if we thought quick model let's replace signals here if we thought signals was better we would have literally implemented it we don't think that it's better when you combine compiler
[01:52:25]  which does stuff and this the fact that our interaction like anyway okay fine this is this not quite the same but my point is like um the the this is the defense of
[01:52:38]  this position like we've thought about it um and you know one misconception i've noticed is people seem react doesn't go with the sum approach because we're bound by past limitation
[01:52:47]  but look at hooks and rc's when we see something clearly better we don't show it we don't think quick's approach is clearly better we're not excited we
[01:52:55] 're not excited we're not excited yeah yeah i'm not gonna lie for some reason this last phrase was more triggering to me than than anything and right twitter makes everyone angry right
[01:53:15]  that's that's that's the gist of it right i think i was going to quote tweet this one i'm pretty sure that um oh someone oh wow this is
[01:53:26]  this is gold this is true atm um we would have made react the faster from ground but we would have had compromise and backbrook badly i know i tried this plus the
[01:53:35]  wave react has a store thing we're going to mean for anyone knows this is the creator of inferno uh dominic uh i don't know if he wanted his private messages
[01:53:43]  aired on the internet but they're here now hooks around it proves this but it's too late they're not trying to win a performance they know they can't win it
[01:53:50]  in order to make react faster in the hood they have to break billions of apps yeah because he they tried to bring some of the stuff in um right but this is people saying
[01:53:58]  like look um this isn't necessarily you know this reminds me of the fox and the grapes fable i don't is anyone familiar with this my my i i mine actually
[01:54:13]  here starts with dan jutan because he wrote almost what i was going to write it's okay we know you're not excited about blank blank blank blank blank blank blank blank this
[01:54:22]  this this this is this is the this is the thing there's so much exciting stuff around and i want to dig a little bit deeper on this because like there is this kind
[01:54:32]  of feeling out there and i you know this is what i was talking about again about worrying about positioning things in such a way that like um like the dismissiveness it's
[01:54:47]  fine like i get that there's different priorities you don't care about it but this for some reason rubbed me in all the wrong ways and um i i kind of want
[01:54:56]  to go back to the root of one this because in in mishko's response which actually you know what let's go let's go to mishko's quote
[01:55:04]  tweet in response where he talks about the fox and the grapes is i demoed the proof of concept of quick to dan he dismissed it then as not feasible now that it's
[01:55:14]  actually a product he's dismissing is not worthwhile and the thing is i remember when that demo happened because there was there because this and this is this is the difficult this will
[01:55:32]  paint the full picture here this is the difficult uh situation you kind of probably are going to be when you're when you're like in this whole place right um where you
[01:55:44] 're like the incumbent and you've got people who are basically looking on every word so what dan wrote and this was this this is the conversation which convinced where mishko reached
[01:55:55]  down it's like here check out quick he did the demo because of this january 27 2022 it's good for a library container to stay in touch what people are saying
[01:56:02]  personally i found disconnecting from the professional front on twitter's a rejuvenating experience i wouldn't want to go back there at least not for as long as i work
[01:56:08]  in the space react has been around for what eight years now exceedingly popular for five that's a lot of a field without a single vendor that's still changing and exploratory
[01:56:16]  i can see how it can get tiring it's a bit incumbent so it's fair to target for punching up it's kind of like java sure the thing for me is
[01:56:23]  that it that is the most demoralizing framing ever i am personally excited by new things i see react as new something ahead we are working towards not something i bought into
[01:56:33]  and now feel stuck in working on java is impactful but but this kills the vibe for me i wish all people who aren't excited to use react could use something else see
[01:56:41]  this is a very honest take and i appreciate this i know it's not realistic because market legacy etc but it's really the feel force to use it that kind of creates
[01:56:49]  a sentiment that makes me feel sad and i want to opt out of these conversations ultimately it has been a while and it makes sense for something new to become popular and replace it
[01:56:58]  a market leader my main problem is i'm not excited again by anything that's on the table today i hope someone is doing something very different than i that i haven't seen
[01:57:07]  yet um so i mean that's that's fair right but the the this this this is what triggered the whole conversation a year ago when he demo when mishko went
[01:57:22]  and demoed quick um and i don't know i don't know it's a tricky balance i i just this this give a bit more context on the whole on the
[01:57:41]  whole kind of conversation um around this stuff is that a lot of work goes into a lot of different directions by a lot of different people um and it's an interesting place to
[01:57:53]  be in when to get pulled all the ways for the developers trying to make those decisions it's also an interesting place to be as people building those tools um that's what
[01:58:03]  i said so this one's a little full circle for me because um uh quick show your bio right um right um yeah i am excited i i i i'm i'm hoping
[01:58:21]  dan gets excited too i know he does you can tell i'm i'm i'm i'm just hoping that we can get to a place where we can all be excited
[01:58:30]  again um so that that that's that's that's sort of perception perspective on on this kind of part of the conversation um okay okay cool cool let's i'm just
[01:58:53]  making sure okay yeah we're we're still we're still okay yeah we we still got tons to go let's let's keep on going let's keep on going all
[01:59:06]  right dan just ran out of characters um but yeah i mean there's been some cool stuff sneaking in the releases um uh yeah i mean i'm gonna drink some water maybe we
[01:59:22]  take a quick break not break i'm not gonna leave the computer i'm gonna keep on going i mean um there's a couple other topics that are sorry a little bit lighter
[01:59:33]  weight um that i can talk to about for two seconds um one of these is uh i mean i'm gonna use this opportunity to catch up on some solid news just really
[01:59:42]  quickly um first of all the new react query dev tools um are actually written in solid so like the one if it doesn't matter if you use felt query react query view query
[01:59:54]  or whatnot they've been rewritten in solid i was working uh with ryan arian sorry um about on the stuff and we realized that when we applied some more fine
[02:00:05]  grain changes which i think we talked about in the previous stream um actually maybe it's right here yeah these fine grain changes they were able to triple the number of live queries they
[02:00:17]  could have open in the dev tools by using the solid version um over the react version so that's very cool and um i'm looking forward to more of that kind of stuff
[02:00:26]  going honestly this last couple weeks i've been traveling but it's awesome to see people get involved in the community and asking to figure out libraries like i there's too many
[02:00:36]  things going on um obviously i i figured for you announce this but obviously um solid js now is on blue sky as well as um uh post.news which another twitter alternative
[02:00:48]  was written all in solid start um product probably the biggest production solid start site so uh getting there other solid news um we've we've got some more people working we um
[02:01:00]  working on the docs effort at solid um which is very cool uh um yeah yeah there we go sponsorships um just just cool little things um haven't talked a lot about
[02:01:18]  netlify even though i work there but um uh they've been using solid to build some stuff in their marketing site which is cool little demos um just starting to see
[02:01:27]  stuff getting integrated in a more useful way um yeah just really cool to see you know um yeah sarah joining us on docs um modular forms now works in solid quick and pre
[02:01:42] act and it's been having quite a run um um um um yeah honestly i've i've been so stoked like native script here now you can make native apps in solid
[02:01:54]  like there's just been so many library things i don't need to keep on track track top of them i was like traveling and like trying to like how about traditional backend
[02:02:05]  hono inertia and solid working together um so now i guess you can use it with your php uh i think inertia i guess this is hono js but i don't
[02:02:16]  know what hono js is what is hono js ultra fast web framework for edges fast but not only fast but inertia lets you basically take like any kind of classic server backend
[02:02:25]  and then like it's kind of like astro ish um but with the non-javascript backend i think they're working to getting the javascript running
[02:02:34]  on the backend as well to kind of fill in the thing but yeah so i don't know f1 simulator i i can't keep on top of all these things anymore i
[02:02:44]  used to cover this stuff in streams um here's here's another lovely one you can count an orj dev uh creator create jd app theo goes and releases upload thing
[02:02:54]  and like two days later he's got the solid start version working so i mean props to him like this is basically he makes sure that anyone who who likes uh next js features
[02:03:07]  man this is my job seriously so yeah um basically he anyone in the solid community doesn't feel wanting for anything in next thanks to the amazing work of orj dev um yeah
[02:03:18]  okay that's that honestly there's just yeah there's the javascript java i just want to really quickly react admin now available in solid so if that's a
[02:03:29]  thing for you solid works really good in data visual and admin tools so this is a huge thing um kind of like ag grid so i'm very happy to see these ports happening
[02:03:39]  honestly um yeah we'll get to the rest of this stuff later but yeah modular forms i'd love to see this happen i love seeing this happening in the ecosystem like stuff
[02:03:49]  like picking up not just like the core library oh sst like too many things for me to cover so let's let's let's just get back on track i just wanted
[02:03:59]  to do some solid news and highlight a few really cool things so okay let's let's let's get back around oh you i i wanted to integrate with with nitro
[02:04:16]  i just yeah i i i think nitro is interesting i also think astro is interesting so it's it we we we need to figure out how to you know where
[02:04:27]  we want to sit on the balance of all these things anyways let's let's continue on uh with with things because okay yeah we talked reactathon honestly great peeps um
[02:04:41]  man this is this this is this is a game changer eh like if you want to talk about signals for a second like just pick like angular has one of the best learning communities
[02:04:52]  out there they just have so much content and stuff and to see stuff like this is just like you're pr i'm not the ceo of signals today so i don't
[02:05:01]  know um i'm just excited but you're proud of your company is doing so well yeah um this is this is this is really cool to see um to see that react
[02:05:13] ivity is getting so omnipresent in the way people think about front ends um and signals specifically um this was a great moment not to spoil the love in this in this picture
[02:05:27]  but i in fact did give mishko the solid shirt it so happened that i had the quick shirt from steve not mishko steve the ceo actually
[02:05:37]  gave me gave me the shirt um and uh because i i had his shirt so he's like oh here have a quick shirt he's like oh wait these are the 1.
[02:05:47] 0 limited edition shirts um like like not everyone in the team even has these and he's like oh whatever you can have one and then when i went to go to mish
[02:05:54] ko's shirt he's like oh wait i i've got a quick shirt or a builder shirt for you here i'm like it's okay it's fine steve already gave
[02:05:59]  me one and then mishko i pulled it out because mishko was like i showed him he's like what i don't even have that shirt um and uh
[02:06:06]  the guy across from us on the table uh zach he was like he's like this is a great photo op so that's how that's how this happened um anyway so
[02:06:23]  yeah yeah in in any case it was a cool moment this is at the uh you can see it's in the 816z building this is from the hackathon this is
[02:06:32]  a very cool idea um where i i'm interested to see if we're going to have more of these sort of hackathon things in the future this one was a closed event
[02:06:41]  to be fair but i i wonder if there's a way to kind of like open it up almost like workshop style where you can have like because there was like there's
[02:06:51]  a lot of really cool stuff that i saw and demoed and talked to people while i was there um this this might have been actually the most interesting thing it's where i
[02:07:00]  first saw the cloudflare demo and a few other things i'll talk about in a minute okay okay i don't want to go there yet don't want to go
[02:07:08]  there yet okay cool all right so where am i going next um let's talk signals for a moment yeah let's let's let's let's talk signals um and we
[02:07:31] 're gonna we're gonna listen to the react team talking about signals because i was talking about angular and how a lot of people are adopting signals um it came up during remix conf
[02:07:42]  so i i'm we're gonna we're gonna slide over to another clip here um signals when are signals coming is this is this a troll or is this a real question okay
[02:07:52]  it's a real question all right i just i just gotta check uh all right yeah we want we want to do signals uh we can do signals um yeah um so i
[02:08:04]  think that signals there's probably two things that people are kind of wondering about when they ask about signals and they're that's probably developer experience and performance um the developer experience piece
[02:08:16]  is i don't want to have to declare dependencies um right i want uh i don't want to think about just kind of like stale closures and things like that
[02:08:24]  um the performance piece is that uh signals are kind of designed to do the minimal amount of work when you change some state we can kind of do the minimal amount of work um
[02:08:34]  and i think that signals are one way to attack both of those problems i think it's interesting um because i wouldn't say that it's the dx thing is just erasing
[02:08:45]  the dependency rays i mean that's one of the dx benefits but the biggest dx benefit is actually it gets rid of the need for like um how should i put it language
[02:09:00]  around performance optimization like the the language for the most part of signals is state drive state effects there's no use callback use ref react.memo whatever use event is
[02:09:14]  or whatever that they're working on like basically it removes a lot of the language of the framework that is necessary to describe like how to cache things i guess you could argue that
[02:09:26]  create memo or use memo like derived values is the exception um but like for the for the for the most part like that's optional obviously which is the same argument i suppose
[02:09:38]  with react but that like you are talking about stuff in the terms of the data graph and the intention of the data and not about like compensating for how things re-render
[02:09:49]  like that's not part of the language so to me that's the bigger dx thing than the dependency race anyways let's continue on But they have their own trade offs and
[02:10:02]  so what we've seen with the number of libraries that have adopted signals, I think it's everyone but us, did I get that right? Is that they make some really
[02:10:14] , there's some, you know, real developer experience trade offs there and it just becomes a different way of thinking about your code. And so Solid is a great library and
[02:10:22]  I think it's also like a very emblematic of this like kind of signals based approach but if you're used to working with React, it is a bit different and
[02:10:32]  so your components run once. So if you early return from a function, that's it, none of the other code will ever run again. So that is a very different
[02:10:41]  way of working than React and we think that the React style is a bit easier to reason about and so what we're doing is kind of looking at those two problems and
[02:10:52]  saying, okay, how can we, we hear you about the developer experience pain points of, you know, declaring dependency arrays. And so we have a bunch of ideas planned
[02:11:00]  for, like improvements to hooks, you know, some new hooks coming that will kind of alleviate that. Also looking at compilation to automatically fill in the dependency arrays. On
[02:11:12]  the performance side, we're working on forget, which is a compiler that will kind of automate. Yeah. I'm going to take a moment on this one. Yeah.
[02:11:21]  I don't understand why that's confusing. I mean, it is if your frame of reference of the world is like, like immediate mode. Like if, and it's
[02:11:27]  so funny, it's crazy to me because I don't think that's the natural place you start on the DOM. Like when you first create the DOM, like once
[02:11:33]  you understand what the DOM is or HTML is like, once you go and create stuff, you understand it's there. And then you update it, that it's like mut
[02:11:41] able by its nature. You don't think that you like have something that you like recreate all the elements. Like, like your goal isn't to be like, oh,
[02:11:48]  now I'm updating some text from an input. I'm not going to like recreate the whole DOM again. Like that's not the natural way of the web, but it
[02:11:56]  is the natural way of react. And I think for someone who say like a view developer, um, for example, not to pick, pick on anyone here, um
[02:12:04] , like we're used to that thinking you go between view and solid and you're just like, yeah, it's like the same thing. Right. But like coming from
[02:12:12]  react, it's like very different because they've, they've managed to shield you via abstraction from the fact that the DOM itself is a retained mode setup. Like you actually
[02:12:22]  have, uh, things that are persisted hooks was the first indicator from react that things needed to persist between rendering it was where the compromise kind of came in and why
[02:12:31]  it's almost like something they see they need to fix where, you know, it was sort of an acknowledgement of like reality, you know, being different from the ideal.
[02:12:40]  And I think that's why it is a big change. Cause if you come in here with a very react mindset, you just kind of assume that like everything just reruns
[02:12:49]  over and over again. like it might do it a couple extra times, but like, who cares in the end it's settled. The problem is once you actually have
[02:12:59]  to, I think we're a lot of people come in and maybe people with more, some levels of experience in terms of trying to debug performance and stuff. It's like
[02:13:07]  very painful mentality when you, when you're trying to like figure out like why things are slow. Um, so like, I guess there's that DX element as well
[02:13:16]  to consider, which ties into the UX, but it's yeah. I mean, I, I hear this over and over again was like picking up solids, like taking the
[02:13:25]  bicycle and flipping the handlebars backwards. Um, which is very odd to me, but I can, I can definitely relate. Cause in a sense, that's how I
[02:13:33]  felt when react showed up and I think a lot of people did. that's why react got friction because people are like, like this whole re-render all the time
[02:13:40]  thing seems crazy and they showed it was definitely doable. So yeah. I mean, what can I say? But yeah, um, yeah. Notically memoize and
[02:14:07]  achieve kind of what we, we, we hope, um, you know, making sure that your app is kind of re-rendering the minimal amount possible as you
[02:14:14]  change state. So kind of two different approaches to tackling those two different problems, but while still retaining the same familiar, you know, react programming model that you're used to
[02:14:23] . Yeah. I think that's a good way to say it, that it feels like signals are, it's, it's just a different model, right? Yeah.
[02:14:30]  It's like, it's like when I played with solid, it totally messed with my mind coming from, because I've used react for years and I just, I guess
[02:14:38]  I just expected it to work like react. Right. And it wasn't until after I started using it, I realized, oh, there's no virtual dom here.
[02:14:44]  Right. Completely from model. Right. Oh, there's no, like, this is not like set state at all. This is like a broadcast into that little node.
[02:14:52]  They're telling it, Hey, something changed. Yeah. Go update. So I, I would maybe like slightly, I think like there's. Yeah. Michael's a
[02:15:01]  perfect example. Cause he, he had the day one experience when most people, he came in, tried solid and was like, wow, this is amazing. Everything just
[02:15:08]  works. And then he realized where the differences were. And this is, that's always the test. If you're a react developer, you might just not like this inn
[02:15:14] ately. There's something about reacts model that appeals to you. And I think that's a good thing that there's differences. My biggest concern was historically react was trying
[02:15:21]  to say like, you're doing it wrong. And it, it, it became almost dogmatic to the point that like, when we had the signals conversation, you know
[02:15:29] , a few weeks back or in back in March or whatever, it was like, Dan was comparing our model to like ghost two statements and basic. And at which point I
[02:15:36]  just had to disengage. Cause I was just like, like, like that error of like, we know better to that degree, you know, you're open to
[02:15:46]  having your opinions, but it's like, it's, it felt very, you know, down talking, so to speak. So like, it's, it's,
[02:15:55]  it's fine. And we, we just have the standoff where it's like, they talk about some future that they might achieve someday. And I just go open
[02:16:03]  up your browser. Um, just reading some comments here. Is it normal or not that a feature to your library? Cause create engine in the middle. Yeah. I think
[02:16:21] , I think this, I think this is important. See, I like the react keeps up clean. Someone asked me today if I thought that react would ever adopt signals.
[02:16:27]  And I'm like, not in a way that it's going to be out in the open if they ever did. I think there's mechanical bits about being event driven
[02:16:33]  instead of top down that helps structurally. And actually most frameworks aren't actually leveraging that as well as they could be. Sure. You can independently like pass updates through your
[02:16:42]  system, but like, there's actually structural pieces that help from that independence that a memoized system will just have to force. Like even when you have stuff like Svel
[02:16:52] te or whatever, you have the same problem. Like if you, you can do smarter things through memoization, but you're still running more code than you actually need to
[02:16:59]  run. So like there's a potential future where react does adopt something like this under the hood, perhaps, but maybe not. They don't necessarily need to like,
[02:17:09]  if performance isn't their absolute goal here, which I don't think it is, then maybe it's fine. And like, um, I think it's good to be
[02:17:17]  restrictive. I I'm one of the biggest defenders of the dependency arrays in react. I actually think it makes a lot of sense when you have something that runs top down like
[02:17:24]  that, when the mental model isn't based on like, like this kind of auto tracking system. And you have to be aware of the scope outside and inside the scope
[02:17:32] . Then being explicit about those boundaries is valuable. It's the same reason. Quick has its dollar sign. React has its dependency arrays. Erasing that is actually scarier
[02:17:40]  to me. But that's a whole, that's another topic. And maybe we can look at that. Yeah. So this is an interesting thing. Solid is
[02:17:53]  not hard if you've done things other reactive. React is all you've known. You see why it can be confusing. And then that makes sense. I can emphasize with
[02:18:02]  people who will only know in one world, both imperative and reactive programs are comfortable. Yeah. And I think they're becoming more comfortable with more people these days. Right.
[02:18:15]  There's always a way of, of doing the other thing, right? You can be explicit about dependencies in solid using on. You can use untracked to be
[02:18:23]  like explicit the other way. Right. So there's always a mechanism to be explicit. I think there's value in explicitness in our render model. Like I actually debated
[02:18:35]  being explicit about all this stuff at the beginning, but then in our render model, I couldn't do it because literally our expressions are those. So like, you're not
[02:18:43]  going to put your dependency arrays in your JSX. So I was like, that's pretty much a lost cause. We have to be more strict instead about how data flows
[02:18:50]  through our apps. So there was other concessions made. Yeah. I mean, there's foot guns. Basically, people talk about like, if you make a
[02:19:06]  react effect without dependency arrays, and it causes an infinite loop, the equivalent and reactive library is making an effect that reads the same signal that it writes to. Right.
[02:19:19]  Rethinking, reigniting, best practices. Yeah. I mean, I like that there's this like age old back and forth here. I think what's most interesting
[02:19:28]  from my perspective is a bit of like a, perhaps a pragmatist, is that at a certain point, the ideal and the practical have to meet. So we can
[02:19:39] 't stay as idealistic as we want and we have to make compromises. And I think it's always, I think that's the real place where we meet. I
[02:19:47]  don't live for the ideal. I live for the practical. I think the ideal guides us, but what we deliver is the practical. So that's why this is
[02:19:54]  even a discussion because for ages, for like at the beginning, when I heard, you know, the whole react rhetoric, I was like, yeah, you know, I
[02:20:01]  can't argue with that ideal much. And it made sense to me, you know, but then when you get to the actual implementation, you can go like, oh,
[02:20:08]  I can definitely argue with that. Right. And it's often opt out like there's this duality that plays out, but let's hear what Dan has to say
[02:20:17] . Like virtual dom is not like the important part from like, it's, I hate the term because like everybody means something different by it. But, um, it's
[02:20:28]  that, that is an implementation detail of like how exactly you work with the code. I think that signals changes is more than implementation detail. It changes, uh, like
[02:20:39]  you can't write a bunch of code that you, you know, it's just like, I think, I think the early returns is, uh, a good example.
[02:20:47]  Just, uh, like in react, when you write, if is logged in return dashboard, else return something else. Then like, if the, the, you know,
[02:20:58]  this, the result of the render would be the same regardless of, um, you know, if it renders for the first time or like for the 10th time
[02:21:06] . So it, it doesn't matter how many times it runs. It's just whatever the props are, you look at the condition, you look at the return, you
[02:21:13]  see what the UI should be. So it, it kind of like react kind of removes time from the equation. Yeah. I mean, until react hooks, right. Um
[02:21:24] . Well, signals is a bit different because your component is kind of like a constructor. And so it's really like, if you have top level conditions, like if
[02:21:33]  just, if is logged in return dashboard, it kind of means like that just runs the first time. And from that point on, like, uh, you have to,
[02:21:42]  you know, you have to use like different patterns to regain the same kind of dynamic, uh, thing. And so we, uh, we just don't like this
[02:21:50]  very much. And, uh, we do like the, you know, we do like the, uh, targeted, you know, the fact that it can, you know
[02:21:58] , uh, by default, it, uh, doesn't over render. Like it's very granular, but then there is a price for that, which is, you
[02:22:06]  know, we can't be as expressive and we'd like to remain expressive. So the way we would like to do this is more like on the compilation side.
[02:22:13]  And then for things like there are cases where, yeah, the expressive argument is interesting. Um, because it's, it's, it's, it's, I wonder
[02:22:23]  how, how to, how to like place that. Cause like this actually ties back to that conversation I had with Dan, um, on the end of one of my articles
[02:22:32] , where he was showing this like situation where he had like a let variable that he had conditionals writing different values to the let variable inside the component body. And he
[02:22:41]  was like, how would you do this? Now you add another condition or you add another piece of state you need to set. And then like this, and I was like
[02:22:47] , why don't you just like, this is a mess of code. Why don't you just unwind it and write it in a declarative manner where everything equals a
[02:22:56]  variable. And then suddenly, like once you kind of reformat it that way, the code is much clearer. And it's actually the same code you would write with
[02:23:06]  react hooks. That's also more optimal. So in a sense, they are, they make, they are guarding your ability to write. I like my hunch is really messy
[02:23:17]  code, um, which is, is an interesting position, but I mean, it means that like anything you write could work. So from that perspective, there's something
[02:23:28]  attractive about it. Because then like, you're not saying like, no, you need to follow a pattern. You need to, you know, set a bunch of rules
[02:23:35]  up. But again, this is, I think this is important because it's like reflective of the mentality, right? One system is about setting up a bunch of, uh
[02:23:41] , rules. Essentially it's completely declarative. Like even your data is declarative. Your JSX is complete declarative. Your reactive relationships are declarative. Every piece
[02:23:51]  of it is declarative. You set the rules, you set it once and you forget it. Where, um, whereas I guess what he's saying is the react
[02:23:58]  approach is kind of taking a more imperative approach where you can kind of just like rerun it and just like kind of mess with stuff as you want in the flow. And
[02:24:07]  this lets it be more expressive because you're not forced into these kind of declarative patterns. Right. Right. Yeah. Different in the same. And. Sounds like
[02:24:28]  an excuse. Are you able to have more. I'm telling you more. There was a change. Yeah. Yeah. I mean, this, this is an interesting question
[02:24:39] , right? Like, because I feel like most of the, if you, if you replace signals in most of the arguments, you could go back to when they went
[02:24:47]  to classes to hooks and actually apply the same arguments there. So this is all a scale. I think is a really good way to look at it. If you have
[02:25:02]  a bunch of hooks and you can't really, really return. It's like half. Yeah. So, I mean, it is interesting. It's fine. As I
[02:25:14]  said, like, I think it's okay to take this perspective. I'm just, I, it is. It was interesting to me because like the, the example of
[02:25:22]  the early returns, he's right. You almost have to pull the early return into, uh, in that case, you have to write, wrap the whole expression or
[02:25:30]  make it part of the templating, um, and return the thing that has the conditional rather than have the conditional and the logic. So it's, it's, I
[02:25:39]  think we, it was the difference between control flow versus data flow. And like, there are different languages and theoretical places where like people prefer both patterns if you, if you
[02:25:48]  look at it. So like, I, again, this is part of that duality that I was talking about. Like we're like, there's two clear patterns that
[02:25:54]  have been kind of dueling each other since the beginning of time. Let's continue. Or, um, you want some kind of, maybe we miss some primitives
[02:26:03] , uh, for kind of, uh, deep like updates between like different parts of the tree that like don't pass through. We can do that with context now. Yeah
[02:26:12] . And like, sometimes if, if you don't kind of unwrap it, like if you don't care about what the value is in the middle, we could maybe
[02:26:19]  provide better primitives for that. But we would like to explore that after we solve like the main cases for the compiler, because you never know like how important it is
[02:26:27]  until you've exhausted, like what we think is the primary approach to this problem. Okay. Which is an interesting one because I like that this is a primary approach to the
[02:26:37]  problem and that they're approaching it very practically from the standpoint, but this problem has existed since the beginning of react. I don't, I don't know if, if
[02:26:45]  people were there like at the beginning, remember this. Most libraries had a solution for state before react, like they, they had like patterns and stuff and react came in
[02:26:53]  and were like, yeah, we don't have an opinion about state initially. Don't be wrong. Stuff like flux and redux and stuff came very quickly after once they
[02:27:00]  realized the, they just left people to do whatever, like bad things happened. But it was never actually react indoors. And over time we actually saw the ecosystem grow around the
[02:27:09]  state management. But like, since the beginning, there's been this clear gap of the fact, like it's a reason why like Tanner was making those tweets where he's
[02:27:16]  like the best way to like manage state and react is not use react for state. And we see this again with things like, uh, react three and, and you
[02:27:23]  know, all the stuff that commanders guys do with like, we actually good at, you know, doing its render view thing, but it's state management is kind of just
[02:27:30]  localized. And yeah, you can use context, but context, like redux use context in version six and had the revert in version seven because the performance was atro
[02:27:38] cious. Like essentially like it's not built for that. And this problem that needs to be solved is not a new problem. It's existed for 10 years. So
[02:27:49]  like the interesting thing is I actually, while this is a new basis for state that I think will give them a lot more power and control. I think this actually doesn
[02:27:58] 't solve the 10 year old problem. Interestingly enough. I'm just reading some chat. How are we doing? First, we have declare hooks, early returns. Yeah
[02:28:18] . You have to like, there's a hook order thing. Yeah. I'm aware about that. Set a function in react conditional hooks. Well, here's the,
[02:28:25]  here's the thing. Like people also going to react case for about conditional hooks. Like in reactors are hard in solid, conditional hooks are hard. Yeah. This is
[02:28:33] , this is, this is, this is kind of the point, right? Like I, when people were giving react flack about not being able to do hooks and if
[02:28:39]  statements, I was kind of like, when are you actually doing this? Like, when does this actually make sense? Right. Um, like it, I think, I
[02:28:51]  think you can view the dependency raise a bit as conditional. Like, I don't think you lose anything, uh, over that part of the hook rules. Um,
[02:28:58]  like I can picture scenarios where I might want to, but in any case where I'd want those things to be dynamic and solid, I'd have to wrap them again.
[02:29:06]  And then there'd be a fixed hook. We can nest hooks in solid, which actually alleviates a lot of this tension. But if you actually want it to be dynamic
[02:29:14] , the top level is going to be a fixed point the same way it is in react. So like, I never viewed the hook rules on that side being problematic.
[02:29:22]  I viewed the still closures being awkward. I viewed, um, the inability to nest perhaps being awkward, but never the, like how they were fixed. Like that part
[02:29:31]  is not actually terribly problematic. Um, many people use reacting effectively, like over the components, mass amount of complex competition and cloning. So it gives a trend box
[02:29:46] . Yeah, exactly. Like it kind of leads you to not doing this by default. Yeah. I mean, ultimately there's so many analogs between the different approaches and
[02:29:58]  stuff. Um, so yeah, I, I, yeah, let's, let's, let's, let's let Dan continue for a moment. That's something
[02:30:07]  I really appreciate about the approach of the team. Um, when I joined is just seeing how, yeah, we can just like add signals. It wouldn't be, uh
[02:30:16] , it'd be very, fairly trivial to add it. True. Um, but digging deep, um, as a value to figure out, like, what is the problem
[02:30:25]  that it's solving? Uh, what is the best way to solve that problem? Uh, what trade-offs are there for other things, uh, that could be
[02:30:32] , that we could be doing? Well, and it's, it's okay to have opinions too, right? And to be like, you know, we don't need
[02:30:38]  to adopt every, you know. But it's also not new, right? I think like there is a big push for it, but it's, it's been around
[02:30:45]  since like 2030, like first state libraries for React, many were signals based. I feel like, um, I feel like. Yeah, he actually pointed out that many were
[02:30:54]  signals based. They, they kind of are still signals based. Like not exactly. Like I understand like Jyotain isn't exactly, um, and recoil because
[02:31:05]  they, they actually trigger React's own state mechanism under the hood. But they, they, they still rely on these kind of like external atomic state things. Uh, anyways
[02:31:15] , let's continue. And you might disagree, but I feel like computed properties in Ember are kind of very similar to signals. Um, true one. I,
[02:31:26]  I had a bad experience working with computer problems. Yeah, I think, I think maybe like philosophically where we land is that, um, that signals as an implementation detail
[02:31:35]  is fine, right? Uh, so for example, if we could, if a, if a compiler could detect that a prop you're passing from way up top is only
[02:31:42]  used way down in some leaf component and we can just transparently turn it into a signal and get the same, you know, uh, benefits, that's fine.
[02:31:49]  What we don't, where we, where we kind of disagree is that signals shouldn't be a kind of first class part of the, um, the programming model that you
[02:31:56]  kind of have to actually think about like, oh, I have a, I have a signal, um, and so like solid kind of tries to hide it, but it
[02:32:03] 's not fully hidden and you see that with the, with the earlier turn. Um, and so I think for us using, starting with compilation and then maybe having signals
[02:32:11]  as an implementation detail down the road is like more, more where we're going. Yeah. Can you have your cake and eat it too? Yeah. Yeah. Yeah.
[02:32:19]  Yes. You mentioned briefly. The, there, he brings up the potential of using signals under the hood. Um, uh, Joe also worked on relay. And I
[02:32:28]  think I, I, I forget it. I guess I didn't book market. Devin Gabba, uh, said something about using framer motion and talking about how
[02:32:36]  they basically use signals to trigger animations and react. And I said like, look like, but he's like, I miss reacts. Nice API there. But I mean,
[02:32:43]  the truth of the matter is like this sort of decoupling is kind of necessary. Compiler. Can really only solve this if by hoisting it outside of
[02:32:52]  the tree hooks suggest this is the solution, right? Again, keeping state outside of the re-renders. But like, um, it would be interesting. A compiler
[02:33:02]  like that would have to know how communication works across components and across files. You need to cross a file analysis similar to Marco to actually have a compiler to be able to accomplish
[02:33:13]  that unless reacts heading down that path. Um, this is just going to be a gap. Yeah. Yeah. What do we got here, chat? Yeah. I
[02:33:29] 'm not sure what they lose at the edge. Well, it makes things more ambiguous. It's only you have two patterns. Like I did a whole stream about how I
[02:33:35]  found the signal approach and preact confusing. Like I was trying to write benchmarks and I had to concept, like I had to measure it to tell which way was faster because
[02:33:45]  like, it was not a clear win. And I like overall, I managed to get the average because the way the benchmark was working, like I took a certain choice
[02:33:54]  of decision. I know performance isn't the only marker, but it becomes tricky when you like, if you take something like preact version, where you have to pass the
[02:34:02]  signals all the way down to the VDOM, you suddenly have to have APIs that are signal aware. I think quick, um, did something much smarter there from
[02:34:09]  more, much more similar to solid where they just said like, look, we're going to wrap whatever you pass down access to the value. You do it that way because
[02:34:17]  when you pass the signal now, now you're checking, is it signal, you know, and you get in this zone now where like some library support signals and some don
[02:34:23] 't. Um, and I think that's, that's kind of the challenge because then suddenly like like it kind of like might de-opt in certain places or rer
[02:34:31] un things unexpectedly. It throws almost like a live grenade in, and actually I, we'll look and see if we can find it. But Dan Abramoff actually made
[02:34:40]  a tweet about like how, like basically warning people using signals in react could cause like unexpected things. And he had like a whole thread about this. I think there's
[02:34:49]  a GitHub issue. So like there, there is considerations of why you wouldn't want to do this. But you're right. They said it, I think this is a
[02:35:10]  good point because they said it wasn't just a performance optimization at the beginning, but then they rely, they basically at the end said that like performance, you know,
[02:35:19]  is the kind of tie around. Isn't the main arguments? Yeah. Yeah. It's an, it's, it's a form of that. It's not just
[02:35:32]  early returns. It's the fact that like, you can't just like write some arbitrary JavaScript, like early returns is the most obvious application of that. Another one is like
[02:35:41]  have let variables in the component body where you do a bunch of like conditional stuff and like sometimes set the values and sometimes set stuff funny enough. When sorry, excuse me
[02:35:51] . When Dominic Ganaway made his like compiler, the basic compiled react, forget like syntax down to signals in his short lived framework octane, which is pretty brilliant
[02:36:04] . He actually made a rule. He's like, you can't put light in the component bodies. Cause if you get rid of let in the component bodies and say
[02:36:11] , every variable has to be cons, like it can't be reassigned. The analysis is quite doable. If you know what a component is. Then you can, you
[02:36:19]  can analyze most things and basically make a react like compiler. And like a react, forget like compiler and compile it to signals. I mean, he put that together in a
[02:36:30]  couple of weeks. I I've made a joke that if react ever releases react, forget, um, and that someone will have like solid forget out within a week.
[02:36:39]  Um, just because of like how easy it is to adopt the existing primitives, um, to fit the pattern. It, it's just going to take the, a
[02:36:50]  certain type of analysis. Now I don't, I think they're doing further with forget. So that actually isn't the true. I think they're even looking at Type
[02:36:56] Script types and things and they're doing like tons and tons of micro optimizations, but the core of like the high level, like write the expression, turn it into
[02:37:04]  signals is not, you know, uh, some smart people could probably figure out how to do that over a couple of weeks with reactive primitives. Um, if they put
[02:37:13]  a couple of constraints in like, but I think the react team is actually saying like, no, we don't want those constraints. Funnily enough, they still have
[02:37:21]  to worry about the body of the component. Cause if you pull something out of the component, I, again, I don't think they're doing cross-file
[02:37:26]  analysis. So you have to be very omnipresent of the fact that there was rules inside of the components and outside the components, very similar to like Svelte.
[02:37:32]  So I'm, I'm interested to see how it lands. This is all speculation, but like, do they get into cross-file component stuff? Do they use
[02:37:38]  the type system to inform stuff? Like there's interesting options here that I want to see what, where they go. Um, so it is interesting. Yeah. Yes.
[02:37:55]  Um, it's very clear that performance numbers return in their mind. It's been good enough the whole time. And they prefer it. Yeah. Yeah. I mean
[02:38:01] , it will be interesting to see. I think, I think the, I think the compiler could help with certain, uh, you know, regions of performance optimization. I
[02:38:10]  like if you, if you expect react to release, forget, and then put it in the JS framework benchmark and it to score top scores. Um, I, I,
[02:38:17]  you, you'll probably be very disappointed, but if you expect it to actually handle a lot of, you know, tricky cases in your app that you have to manually
[02:38:24]  performance optimized right now, I think it can do that. No, I, my understanding is for forgetty is a complete memoizing compiler. Um, and not really
[02:38:34]  leveraging reactivity at all. Angular compilation and react. Here we come up. I mean, you guys have a lot of experience of with Ivy. Um, and the work
[02:38:43]  that goes into creating, creating a great compiler. I have, I have a decent amount of experience working on the Marco team. Um, it's definitely interesting zone.
[02:38:50]  And especially on this one, cause the Marco's approach, um, Marco was a V Dom, uh, with version five, tried to break it up in a way and
[02:38:59]  kind of land in a place that was sort of their first version before I joined on the team was very not signals. Like then Michael kind of pushed us more towards signals.
[02:39:07]  I joined the team. We looked at that and kind of a more runtime approach. And then Michael took some time off. He came back and that's when he like the
[02:39:15]  resume ability thing clicked for him. And we moved, uh, to compile time reactivity generally. And the thing is once you get into that zone with fine, even
[02:39:23]  if it's fine grained, if you go into compile time reactivity, except it's, it's kind of like Svelte, but it worked cross files in
[02:39:30]  a lot of ways. It's like the most, it's like the most, uh, optimized memoizing compiler. Like it's not reactivity anymore in the classic sense
[02:39:38] . Funny thing is over time, they actually, because of edge cases started adding more runtime mechanisms and queuing in anyways, like that's where we ended up. But
[02:39:46]  like for a brief moment in time, it was completely just code organization, like code ordering to make, to make it work. And, um, what was funny was that
[02:39:57]  was when the most insights came in from our perspective, because even though it technically broke along the reactive graph and w and didn't really use signals. So, so to speak
[02:40:10] , so you could kind of argue it was top down. We had a very hard time talking about it top down when we like tried to explain to people how the code
[02:40:16]  executed, we realized that we, we had to just talk about dependencies. Like that, like we, we talked about it, like it was reactive anyways, even though we
[02:40:23] 'd kind of gotten away from signals. What was cool is in the end, we kind of got back there again. This is like the ebb and flow. But
[02:40:30]  what it's there is this convergence. When you talk about reactive language, um, I, I, I mean, I almost think it comes back down to that Mish
[02:40:41] ko drawing. I drew earlier about the circle in the bucket. I think the whole question on signals and react side is whether you ever have to be aware of the bucket
[02:40:49] . Um, so that's, that's the interesting debate. And I think if your stuff lives beyond components, unless you have perfect omniscience across all files, or
[02:41:01]  like your, your language is built for that, you need to know about the bucket. Because otherwise like the, the scope of your reactivity will be limited to the
[02:41:09]  scope of your compiler. Like it isn't spelled. Okay. Let's see if there's anything more on this. Uh, react, forget. Yes. Now that is
[02:41:20]  something that I don't know if a lot of people in here have actually heard about, uh, react. Uh, okay. They're done with the signal question. That
[02:41:26] 's fine. Um, I want to grab one more quick segment from this talk. Cause I thought, I thought it was interesting, uh, having the core team, um
[02:41:34] , talk about stuff. Um, what I was referring to is this bucket diagram, right? Like the, the, the question between these two is like, can you
[02:41:42]  actually express everything you need without the bucket? Um, I'm not, I'm not sure. Cause if you have component boundaries, you're moving behind between places, there
[02:41:51] 's definitely a bucket. Um, okay, let's, let's, let's grab this. Cause they actually were talking about forgetting debugging. Uh, Chance, is that
[02:42:00]  you? What's up, dude? Um, wait, wait, wait, wait for the mic. Shruti's on her way. Coming. Oh, Sh
[02:42:06] ruti's here as well. There he is. Go Shruti. Uh, yeah, back to, uh, react forget for a second. One, I'm
[02:42:18] , I'm really interested in that project. And one thing I'm wondering is if you've started to explore, uh, debugging in that sort of environment. Uh,
[02:42:28]  the one thing I sort of worry about is when you start hiding things behind a compiler, they get obscured to the point where when something doesn't work as expected, it
[02:42:36] 's hard to figure out why. Um, Dan, you had mentioned, uh, community involvement in tooling in terms of observability for server components, but with something like
[02:42:45]  the compiler with react forget, it seems like it might be more of a, uh, an internal meta or react team concern. So I just want to get your thoughts
[02:42:53]  on it. Yeah, that's a great question. So yeah, um, how are we thinking about debugging for forget? Um, it's been something we've thought about
[02:42:59]  very much from the beginning. Um, and, uh, we see, uh, kind of a, a few stages to forget the first being kind of just getting the
[02:43:10] , getting the first version out there, um, where the, the actual output of the compiler is kind of designed to be more, um, debuggable. Uh,
[02:43:18]  so for example, within, once you kind of have like an idea of what forget is doing, console.log does something very sensible and predictable. Um, and so
[02:43:26]  if your console.log is running, it means that that value that you're logging is being reevaluated if it's not running, like, so there's a predictable
[02:43:33]  semantic that you can, you know, begin to understand. And I think that's interesting that he, he mentioned this cause I, I, not to divert too far.
[02:43:41]  I'm just going to open something for my drive. Uh, this is about the console.log thing. Um, uh, I, I don't know if I'm
[02:43:46]  going to keep this in my talks all the way through, but this is something I want to show an example. And I, I was corrected by someone in the React
[02:43:54]  team that said, since this returns numbers, they don't need to memorize anything. So they're like smart enough to know this, but I just want, I just,
[02:44:03]  I forget if I gave this example on stream before, but I just want to think about this. Pretend this is your React component and you put a console.log in
[02:44:10]  each of these functions. Basically, this is like, pretend you're at a restaurant, you get the items and then you calculate the tax based on some federal tax and then
[02:44:17]  get on some state tax. So then you show the total, which is the subtotal plus the federal tax plus the state tax. Right. And, and picture now
[02:44:29]  the state tax changes you like somewhere up higher in the UI, you change the state. For some reason, it was someone had put in, you know, a different state
[02:44:37]  and then you change the actual state. Like what reruns in this component, if you pretend that you have this auto memoization happening. Right. And how do you
[02:44:47]  explain it? Because like, you could think that like, this is what I mean about the console.log thing. And I was talking about this async components earlier in
[02:44:55]  the stream where I said, like picture if you went await await and console.log in the console.log ran immediately. Uh, you know, after those run,
[02:45:04]  even before the awaits finished loading data. It's, it's kind of unnerving. And similarly, what would it be weird if only one console.log logged in
[02:45:14]  this example with calculate tax? Um, because only the state tax change. So they were smart enough to look at the function arguments here and memoize them and then be like
[02:45:22] , okay, actually, the one state tax changes. We don't actually run this function, run this function, and we only run this one. And it's because
[02:45:29]  we know that this one changed and then we, you know, recreate our VDOM and send it back. Like that's the optimization you expect. And this one,
[02:45:35]  it's not too hard. But I mean, at a certain point, um, you can picture these functions instead of being inline functions were actually expressions all inlined inside
[02:45:44]  the, this component here instead of being outside. Like at what point, um, can you say your component runs top down when it's hand, when basically things update
[02:45:55]  handpicked in a way that isn't explicit based on any kind of dependency arrays or anything. You're literally just like, oh, this runs. And why does this
[02:46:02]  run? Well, because this dependency changes, like you might start thinking of things almost in a sense, like it's reactive. Um, so the, the semantics of
[02:46:10]  console.log is very interesting because console.logs are side effects and reacts, depending on the fact that because your components are pure, except for when you use create
[02:46:20]  a use effect, that you're never going to observe the fact that they're completely could be messing with the execution and execution order for the sake of keeping memoization working properly
[02:46:30] . Like, like if they want to be smart, the way solid is around control flow, they will have to look at those early returns and wrap them in blocks, you
[02:46:38]  know, so that they can do branches dynamically without like rerunning parts of your code. And if they do that kind of reorganization invisibly for you, things like
[02:46:50]  console.log are going to be the thing that shows you that the model is not what you see it is. Um, just kind of a interesting aside, but I wanted
[02:46:59]  to, I wanted to kind of, kind of put that in there. Okay, let's continue. and used to debug um the code the code is we're not
[02:47:07]  doing like crazy reordering okay things like that so a lot a lot of things that are gone that are going into making it more predictable but longer term we also see probably
[02:47:16]  even having a react language uh server like id integration so a language server in the technical term um so that you can actually have you know much more feedback in your id about what
[02:47:26] 's going on our understanding of the code is even more sophisticated than what the es lint the current es lint rules can do uh and so we can you know suggest
[02:47:35]  to you oh like maybe you want to um you know refactor your code in this way because it'll memoize better um or things like that uh and so that'll also
[02:47:42]  help um and then and then we'll definitely have to integrate with dev tools so um and that again that may be end up being a community involvement um but i think the language
[02:47:52]  server side is definitely something that we're thinking about working on not committed to yet but something that we are thinking about but yeah certainly developer experience has got to be it has
[02:48:00]  to actually be predictable um for developers um and we we we are pretty happy with the model that we've come up with we think it is pretty predictable once you kind of work
[02:48:09]  with forget a little bit you got to begin to develop an intuition um and i think that like that's actually probably the most important thing is that if it's actually predictable to
[02:48:18]  the developer and i think we think we've got that so but yeah definitely something to think about i would maybe add that like because i'm not involved with the project i
[02:48:27] 'm just observing so i i do feel like it is interesting because um again like the compile target is not something that's you know some inscrutable like bytecode or whatever
[02:48:39]  it just really rewrites your code in a way that maybe like for some people i think might actually feel more natural for because like you think i just changed this thing
[02:48:48]  like why does this re-render and then forget like rewrites it to say if this thing changed like recalculate this piece otherwise don't so you kind of
[02:48:59]  feel like oh i see yeah makes sense like i don't so when you debug it there is a feeling that it kind of does what maybe you would do yourself but it
[02:49:08] 's just too annoying to write by hand yeah i love dan's description there because it's exactly how we talk about solids uh dom compilation on jsx right we go you look
[02:49:21]  at it and then you can see like oh there's there's something there's an effect there that updates this piece of the dom it's almost like what you would have written
[02:49:28]  yourself if you were just going to write the code to be optimal i this is the i i enjoyed that part of his description in the compiler because at some point i'm
[02:49:38]  like okay like is that just like a i don't think it's just like a he he's saying like instead of having it in the hook it's almost like right in
[02:49:46]  front of you you get to see like if this condition do this else do that so i think i think there is value on that on the transparency it's just interesting if
[02:49:56]  that um yeah it's definitely a shift for people when they start like looking at the code and it's adjusted in our case right now it's limited to jsx but here
[02:50:05]  your whole component's going to kind of get re-written on you and new conditionals and stuff will kind of sneak in um yeah what we got here oh well that's
[02:50:14]  high quality comment yeah sorry i just switched over to twitch i realized i haven't been over there a bit uh thank you for the subscribe uh dev and yes i do i
[02:50:25]  do stream um i can't show this because that was your subscription notice so i can't actually show it on uh on stream yard but thank you uh i appreciate the sub i
[02:50:36] 'm actually scrolling back now to make sure i didn't miss anyone else's subs um i've i've been very focused um you know here uh did i miss anyone's
[02:50:47]  subs i hope not a lot of first time chatters today which is very cool um it's it's it's great to see well if i missed your subs it's probably
[02:50:56]  from over an hour ago and i apologize thank you for subbing anyways um it's all good yeah there it is i almost forgot you streamed there thank you i'm
[02:51:10]  curious to see if it means people be lazy yeah i mean hard to predict i i hope people just write good enumatic code anyways like that would be like you you're
[02:51:25]  i i think the idea is your code your code should be readable that's the more important than like especially if you want it to be maintainable like on one level you
[02:51:34]  can just be like like and this part of that debate i had with dan was like like is it about like how easy it is for you to write at the time or is
[02:51:41]  it like how easy it to read later and i think that's a fair question i think it's both depending on what you're doing um readable code is just better code anyways
[02:51:51]  generally speaking i mean there's always exceptions there's always performance optimizations maybe i'm one not to talk but um i i i i think they're trying to account for
[02:52:04]  the widest range of authoring patterns for better or for worse but it was just interesting i love this little description dan gave because when he's talking about the dev tools i
[02:52:13]  was actually literally picturing the ones that damien made recently i don't know if everyone saw that uh from a couple weeks back where he had a solid dev tools showing
[02:52:21]  how he could trace the reactivity throughout the whole tree automatically you can like see like i update the signal it updates this place down here like it was really cool and the way
[02:52:30]  dan was talking about the compiler also made me kind of think about similarities of how we describe our compilation but applied in a different place i don't know if there's anything
[02:52:38]  else on this one there's a bit of like gpt feeling there yeah that's cool it's helping me right helping me out okay there we go but ai is actually an
[02:52:46]  important topic in consideration here um because i feel like with the right language primitives like right now we have language models is it hard to to kind of extend from that like things
[02:52:57]  that are easier compiler targets would also be easier ai to target targets i i mean there's a reason why solid is is one of the easiest um frameworks to actually target from
[02:53:08]  a compiler perspective it's why we have so many alternate syndic taxes and plugins around that in the community was because when you give people the primitives if they want to develop
[02:53:19]  and have something look like svelte they can just use a plugin develop svelte have it output solid going the other way is not that easy in a lot of cases
[02:53:26]  so yeah i i can definitely respect that kind of language positioning um because that's something we already kind of experienced in solid community yeah i'm big on prunitives everyone
[02:53:39]  knows that okay cool cool um okay let's let's i think i i don't know if there was much else from uh remix conf i mostly focused on the react side of
[02:53:51]  things i know they've been doing great work on hmr and and yeah with remix and um i don't want to understate any of that stuff but um yeah i
[02:54:01]  i i just thought that was kind of an interesting interaction um just to see the core team talk about these topics uh where was i wanted to go next um right okay there's
[02:54:13]  a couple places we can go okay i know where i want to go next um hmm let's yeah should i go here let me i'm just i just want to check
[02:54:27]  against my bookmarks um see which way i want to go because we already talked about imp um so i actually don't have much to add for web io i haven't actually
[02:54:39]  seen i didn't watch most of web io um conference i know there's some highlights on angular and stuff but the big thing up for me was uh obviously this talk about
[02:54:52]  um in first um input to next paint which we already talked about um firebase has been obviously adding support for tons of frameworks and stuff but that's not really where i'm
[02:55:05]  gonna go okay yeah we're talking about other cool announcements and stuff you want to talk about we want to talk about flexing performance i mean there's nobody better than j
[02:55:14] ared sumner and uh yeah i mean new javascript bundler 200 times faster than webpack uh i forget did he actually put it in the art yeah yeah okay here
[02:55:28]  where where where's where's he likes to show graphs no did he not put the graph in here maybe it was on his personal tweet he just had the most ridiculous graph
[02:55:38]  i i saw it somewhere it's fine uh where he shows the the the new version of bun is faster than es build almost double the speed and then it's like hundreds of
[02:55:47]  times faster than the like other bundlers i'm i'm i'm excited i mean bun's you know gonna take a while to get the kind of same level of stability
[02:55:57]  of other things but every new feature everything he he approaches was such a performance-oriented aspect it's just it's almost just best if you're you know in you know competitor
[02:56:08]  or whatever and the thing just to kind of like do what you're doing and you know jared will get there eventually um because like no one puts the same kind of focus
[02:56:19]  on uh like on these kind of benchmarks um i i guess you could hire your own jared's and then you could do that as well but yeah i every time i
[02:56:31]  see a new bun post i just have to smile because i know that he's got some kind of benchmark that's just absolutely absurd um yeah yeah yeah yeah speaking about dev tools
[02:56:50]  a lot of cool stuff's been going on a views done a couple conferences while my understanding is that we can't expect vapor until maybe q4 um nux has been
[02:56:58]  doing a lot of improvements um that i've been hearing little bits from not and one of the coolest ones is actually this these dev tools um i think everybody's going to be
[02:57:07]  pretty um what's the term uh where you you why is it not company doesn't matter uh people are going to want these dev tools because look look look look what anthony
[02:57:19]  is saying here now the latest nux dev tools you're able to inspect elements open the corresponding source right inside the embedded vs code and edit them with hmr full feedback
[02:57:26]  loop makes changes about needing to learn project structure even leave the browser is that not cool like literally go in inspect the area you want to fix go in edit it with hmr
[02:57:39]  like on the floor like it is the connectivity between the visuals like and to be able to adjust the code obviously this is more powerful first like design type things um but yeah
[02:57:50]  i mean it's very powerful and this is a very nice looking demo um i'm sure you guys have seen this demo before um and uh yeah this is very very cool f
[02:58:00] omo a little i mean i think everybody is going to want this um yeah this is very cool yeah i've wanted to learn to because when you when you if you go in
[02:58:11]  the browser in html you can do this but once you get into javascript framework you lose this right if you go in the browser you can just like edit
[02:58:16]  the javascript html in line you can see the changes it's a good way to actually teach people like why the web is so cool um but uh bringing this
[02:58:24]  back into the frameworks like this is yeah this is what i expect from nuxt and stuff the view uh community ecosystem is really like developer user you're focused in this kind
[02:58:35]  of stuff that's it's it's it's incredible um so yeah definitely very very cool right um where where was i gonna go sorry i didn't talk about the verse
[02:59:00] ll release much uh even though i did was very quick to you know talk about the apple ask feel of the stuff i think it's very interesting to see how versell is
[02:59:10]  positioning themselves um i i i get the impression that it's almost like the new heroku like they're your one shop uh one spot shop so to speak um and i i
[02:59:22]  think with the addition of blob and kv and postgres like services that they provide for you which means you're going to be paying a slight premium but it means that
[02:59:32]  like it's just all right there i think that for them this kind of completes a story they've probably been thinking about for a while now so um that is definitely uh interesting
[02:59:44]  approach um i actually i i i'm i'm i'm i'm glad to see this kind of consolidation and like if this was the direction they're going i'm glad to
[02:59:53]  see this kind of piece together because actually this is probably the first thing in a long time that has differentiated the approach between say netlify and versell who've
[03:00:02]  been neck and neck for ages you know perceptually in terms of like the way they approach this stuff um netlify has no interest to my knowledge of ever offering their own
[03:00:12]  database services and are still working on beta pipelines and going to people where their data is it's just a different strategy this is perfectly valid as well but it's just it's
[03:00:20]  just interesting because this was the first time in a while that um i've actually seen such a clear difference in direction um so uh very cool to see um versell kind
[03:00:33]  of realizing this vision as i said i i do get this feeling they're seeing themselves kind of the modern day heroku where you can just kind of go in and get
[03:00:40]  everything you need um which is very cool um okay okay talked about next how okay should we should we go here i think we should go here let's let's i'm
[03:01:00]  gonna check chat for a minute it's not their services though right it's not their services though right so yeah i guess that's the trickiest part because by repackaging
[03:01:13]  the it's kind of like all the other stuff like you pay a premium but because they're offering that ease of developers um it makes it like you know people will pay
[03:01:22]  extra for a time at least um to get started and i think if you're targeting a lot of like the and you know people in the lower tier pricing things like getting all
[03:01:33]  the hobbyists getting all the like early stage startups this makes a ton of sense because they don't have to go looking or worry about anything it's like all just right
[03:01:42]  there you know um will this scale out worse than other solutions perhaps um you know but that's the once you get to that stage where you need your own databases you need your
[03:01:55]  own other things then like you'll eventually scale out of a lot of this stuff so i i think i think this works if that's like if that's the vision in terms
[03:02:04]  of having like the one-shot place right um even you know some people are critical on the prices um and that's fair because how easy it is to go sign up
[03:02:17]  with services these days but there's just as many people probably who just won't bother to do the research won't bother to go look other places and um maybe even just like
[03:02:29]  you know banking for sales brand and be you know kind of kind of like the apple thing i started earlier and just pay that a bit more you you know it all actually
[03:02:38]  lends into the to this sort of image and brand for versell so i think it makes a lot of sense yeah will they ever run their own yeah i mean this doesn
[03:02:51] 't stop them from running their own in the future as well yeah yeah i mean i'm not saying it's hard but i'm saying that like you put all those things together
[03:03:03]  and you probably have something that's very compelling for some people okay how is this not illegal i want to talk about this one um because yeah yeah yeah i i do want
[03:03:18]  to talk about i mean some there's quite the problem is i i'm not going to like sit here and watch the whole rich harris talk on here and he spent a
[03:03:27]  lot of time talking about solid in the in that um video which i said in the past means we must be doing something right um i i think i think i already kind
[03:03:37]  of gave my feedback on that talk uh in my previous uh stream where i was basically saying like i think most of the like most of the he didn't actually end up bringing
[03:03:50]  up some of the bigger concerns uh with the colocation other than like the tree shaking problem um but for the most part like the things that he brought up were are relatively
[03:04:01]  easily addressable like there's an issue with quick in terms of like uh some source map stuff but again that should only happen in dev and like the he's right that
[03:04:09]  we should be careful and actually this example is partially why we should be careful um and uh there's actually a better example where people actually show it where the problem is but
[03:04:25]  i i i i i think this is one of the things where it makes it kind of obvious because one of the things that we we hit a lot of criticism with bling
[03:04:33]  and it quicked it a bit as well um it's with our dollar sign functions um that because stuff's in the same file now you could leak stuff and the funny
[03:04:43]  thing is if you're going from client to server like if you're if you're going from like uh like an r rpc call kind of thing like server dollar sign
[03:04:57]  or whatever and you're defining the client file the danger isn't anything there because the code in the in the server function doesn't actually make it to the client the problem is
[03:05:10]  if you import something that has side effects like the database or something it's possible that the tree shaking doesn't work properly and actually richard rich's talk he actually mentions
[03:05:19]  that roll up actually had a convention that automatically solved this for you he actually had solved this with roll up but then he realized that his heuristic was insufficient and that it
[03:05:29]  like broke other things and he had the role he had to roll it back not the play on the puns but like basically if we could have just used what rich is like
[03:05:37]  assumption here and was in roll up we wouldn't have this class of problem at all um because there's there's two ways code gets into the into the client uh with
[03:05:51]  with these things it's either through um um things that don't get tree shaken properly like even if they're not used like inside it but because they have side effects the
[03:06:05]  roll up can't remove them and places where you could have closures um and use closure extraction this is something that solid and bling doesn't have currently but quick does and
[03:06:16]  actually actually every components do where you could close over some value um in a way that it gets to the client but the funny thing is in a situation where you're going purely
[03:06:27]  from client to server um the you don't actually and it's like you know like you're in a client file conceptually like you actually don't have the second problem
[03:06:40]  even with closure extraction you don't actually have the second problem you only have the tree shaking problem that you can if you don't understand what i mean it's like uh let
[03:06:48]  me open up a playground just really easily kind of talk about this what i mean is like pretend you have something like this or like server dollar sign or whatever it doesn't matter
[03:06:59]  what the syntax is but like like the const function equals server dollar sign and you have some async thing that only runs on the server okay so the problem is is like
[03:07:11]  this is client only whatever but let's pretend you have import pg from pg whatever okay right and then you use it in here okay now this has you know p
[03:07:25] g dot table whatever it's been a long time you guys will forgive me for for for whatever right i i can't remember the the the the the api here but what
[03:07:37]  i'm getting at is like in all in most aspects here this is only used in here the client build will not have it here so when you when we like shake this
[03:07:51]  out it doesn't come in and even if even if you like use process let's go const secret equals process dot m something secret you know even if you do this again only
[03:08:07]  in the server code not a problem never gets to the client even if you do this even if you do this this is still not going to the client because it's only
[03:08:19]  ever read in here like see i'm i'm just let's i mean you can see right now it's not it's not highlighted when i add it here now it's
[03:08:29]  referenced what i'm getting at is it's it's never making it's not never going to client the the problem is if in theory you have a package that like has
[03:08:39]  side effects and doesn't trust this tree shaking and what rich said in his talk was he used to make it that he would figure something didn't have side effects unless you like
[03:08:48]  did this if you did something like this where you didn't import anything from it he'd be like okay yeah this definitely has side effects this does not so this always has
[03:08:57]  to come this does not but essentially um even at this level this is not closure extraction because you just end up with a bundle with this in it and a bundle with the rest
[03:09:10]  of the stuff or sorry a bundle with this in it and a bundle with the rest of stuff in it where closure extraction and the reason is anything top level you know it can
[03:09:20]  exist in the module closure extraction comes in is when you move this into this now suddenly if i'm reading again this is still fine because it's top level never making it
[03:09:35]  the client but if i'm reading from count here right inside my server function well first off the serializer function reactivity makes this a little bit fun but what i'm pointing
[03:09:49]  is this value of count doesn't like if you're if this runs the first time on the server and then it runs in the client so what i'm pointing is that
[03:10:00]  this this the prop the challenge here is that this value of count belongs to this instance of the component so it like needs to remember if it ever executes like maybe in an
[03:10:11]  event handler like in a click handler or something you know over here it needs to remember the instance of that count so that's why you have something called like closure serialization
[03:10:20]  which we don't support yet in bling or um in solid start but it's because it's not it's not module level module level you have no problem the code's
[03:10:30]  always there this is like a counter has to instantiate in order to do this because behind the scenes the way these server functions work is they actually hoist this up so
[03:10:41]  that it can be exported in itself and bundled so any instance based stuff has to be kind of like associated with the declaration at the call site like you like you can picture
[03:10:51]  like it's like bind count or something like that if it makes if it if it helps like essentially you have to actually make the function global essentially and then where you initialize
[03:11:05]  it in here you actually have to bind the specific instance to it yeah you could hoist the signal but then you'd be sharing it between all components i want each counter
[03:11:16]  to have its own instance of its count so each have its own like data that it's sending you can also avoid this very simply by calling the function with the argument and not
[03:11:25]  using closure extraction closure extraction is just like convenient like right now in solid if you tried to do this count thing it would error and say like no you can't use count in
[03:11:34]  there but you can use secret you just can't use count because it's a local scoped variable that you're trying to close over but in quick and in the r
[03:11:41] scs they actually let you do this um but again this is a client component there's no problem you're not going to bring in your secret as i said the only way
[03:11:51]  to bring in secret is if you like import something that doesn't get tree shaken which happens more often than you than you realize um uh which is the thing like and even
[03:12:02]  in those cases like unless the server is actually the export level in the other file importing stuff from another file even might still also have this problem like unless the contract is that it
[03:12:15] 's going to be rpc like putting a dot server in the file name it's not actually changing this either um in the case of something like uh react whether you
[03:12:24]  have a used server on the top of the file and it says like this is server yes that's fine because you never actually import that in but if it's just like but
[03:12:32]  that's understanding that it's an rpc a remote procedure call right um what i mean by that is like someone asked actually asked uh lee like why do i have to
[03:12:43]  put use server if this is already a server component right like it's and i'll get into that in a minute but it's important to understand because this is not just
[03:12:52]  a server component this is explicitly an rpc that gets called from the client or the server depending on the situation in this case it's actually always from the the client because
[03:13:01]  it's from a form but where i was going with this is like the danger here is about tree shaking even module extraction here is not actually that like we don't support
[03:13:17]  it because as i said i was not convinced like reactive values might not play nicely here like there's there's complexity like because you have to treat reactively synchronously like what
[03:13:28]  if someone calls this server what someone closes over a server function inside of create effect i know i'm getting into a weird zone but i'm just saying like we can't
[03:13:37]  track on the server um we could track at entry like so if you called the function and called the count then you could have that expectation but i there's there's oddities
[03:13:46]  there but let's ignore closure extraction in this case for a second but just i want you to understand that the only source of the leak here is from the fact because everything here
[03:13:56]  is client by default except for the stuff that you've marked a server so the only place that this comes in is in some weird non-tree shakable scenario
[03:14:06]  and it's not that weird as in a lot of node packages don't tree shake and like again i'm not quite sure how your secret gets in there exactly but you might
[03:14:15]  try and pull pg in and then you have to say in your vconfig externalize it like people deal with this stuff all day long in solid start repo so i
[03:14:22] 'm not gonna like i know this is a real problem because a lot of server packages don't tree shake and don't uh like aren't marked as uh pure which is
[03:14:34]  unfortunate but almost all client packages are so like generally like not all of them but most modern ones are so like generally we don't as client-side developers we don't hit
[03:14:44]  this problem as often then we go to the server and just like why is all this stuff kind of getting pulled in when it doesn't need to why do i have to
[03:14:50]  set in my config not to right but what i'm saying is this what's cool about that you might see you might say that it's like it's um secret like this
[03:15:02]  is where the problem comes in because there are these cases where things are side effect uh full false but like none of the basic cases actually um uh like the typical basic cases
[03:15:19]  the module level have this problem and more so most of the things that people think are fixes actually don't fix the problem so they actually have this problem anyways and they don't
[03:15:27]  even realize it um what was interesting though is because obviously we got a lot of flack about that and you know the separate file thing and you know the the react you
[03:15:37]  know kind of thing was like oh this is why we have used server and use client separately except let's let's look back at lee's example here aren't we doing this
[03:15:49]  everywhere yes this is the second thing what i just described is not unique it's funny that we're like we're getting on our high horse on this right now um is i
[03:16:01]  want to i want to put it out i want to put this out there this thing i'm sure i'm showing server dollar sign like his way but this behavior that i
[03:16:09] 'm explaining right now is the exact same with uh get server side props uh remix loaders export loader basically everything we've been using for ssr i if i go
[03:16:26]  back to older svelte frameworks uh priest felt kit say basically everything we've done in ssr has always worked this way just on a complete aside this is not
[03:16:34]  new and because the closer extraction doesn't actually make a difference here i can basically say we can just say that this is how ssr has worked for eight nine years so
[03:16:44]  this is not a new thing the funny thing that the reason it's coming to attention is because certain parties want to make a big deal out of it all of a sudden even
[03:16:54]  though it's literally how they've worked for eight or nine years so there's that as well so that's that's actually a very good point i i can see why
[03:17:02]  it seems like it's sketchy but it's also been like that for eight or nine years um like this isn't this actually isn't new um but let's let
[03:17:15] 's let's let's move this a little bit further along the dial a bit um i want to get back here because and this is why i was i was i was talking
[03:17:27]  about this um let's let's look at this example first he's he's showing that like with the page directory you have like basically a handler it handles the submit in
[03:17:39]  our component which does a fetch request um based on the form data and then on the other side you have an api route and all this stuff and someone was quick to point
[03:17:51]  out like yeah and like no freaking kidding remix solved this um it turns out a lot of people have solved this problem in pretty much every framework but like essentially this is probably
[03:18:01]  the most verbose way you can handle this and then they're like look use server do it form super simple right like in a sense and the the big thing that the the
[03:18:13]  next team is talking about here is like look you can only use use server in server files you can't put them in client components so you don't have to worry about the
[03:18:20]  tree shaking thing right you either import them and because the contract is rpc you know that that code never actually gets imported so that's good because just having dot server
[03:18:30]  doesn't always mean that exactly it depends on like how you use it anyways and um yeah so this is great except there's one little gotcha that people don't realize and
[03:18:44]  it's the same question why this has used server and why this doesn't have used server this is already a server component on the server and has used server in it right
[03:18:52]  which means that this is actually happening between two separate requests the closure if there is a closure over this data like this one doesn't have a closure so we're fine but if
[03:19:02]  there's a closure and you're in a server component you you're essentially it's the same thing that i was explaining over here when i put this inside here it still
[03:19:16]  needs to get hoisted up right so now let's do this now you would never put a secret in a client component like why the hell would you do that but if i
[03:19:30]  put a secret in my server component like i don't know why i have a server counter but if i put if i put my secret in my server component and then i
[03:19:41]  use it here well we're we're good right because it's it's always on the server does anyone see what the problem is this very safe approach and i'm using server
[03:19:55]  dollar sign it doesn't matter use server is like the same thing okay let's let's use server let's doesn't matter okay sweet use server okay um the problem is
[03:20:11]  that we have to hoist this up right we have to pull it up how does the secret isn't here anymore it's up here so we actually have to be like
[03:20:29]  function dot bind secret right and then i'm going to say this function is what we put in our click handler okay right how does the client who submits the form able to
[03:20:43]  call this server function with the right secret between two two different requests well i mean it needs to tell the client how to make the request of that so that the actual answer
[03:21:00]  um as as given up is yeah we'll just serialize i mean it doesn't have to be an input this would be true even if we weren't using forms this would
[03:21:09]  be true if we were using any kind of mechanism where we were passing this server function to a client component because it needs to the closure means it's instance based if the
[03:21:21]  secret was up here at the top it would be fine we wouldn't have to use closure extraction but because we're using closure extraction we actually have to send the secret to the
[03:21:30]  client to send it back to the server because it can't be persisted between requests because it was instantiated now i don't think you should probably do this but
[03:21:38]  i could picture a stupid scenario where someone was like like if authorized you know what i'm getting at you know something maybe with an early return whatever like if authorized then get password
[03:21:54]  or get whatever like and thinking that because they're on the server they're perfectly fine but what's not obvious is that with use server in a server component is that while
[03:22:04]  you see a server it's really server client server other than tree shaking mishaps this has all the risks of both going server client and client server when closure extraction is involved
[03:22:12]  um it's just it's interesting to me that this is the way the narrative has shaped when like even keeping everything in a server file isn't actually safe and this is what
[03:22:27]  people were showing they're showing like literally secrets inside the rendered html forms obviously you can add uh some sort of uh you know you can you can hash it up
[03:22:38]  or use some kind of encryption and then decrypt on the other side or do whatever you need but my point is like it's very interesting to me that we're kind
[03:22:47]  of getting into this zone um where we're being kind of critical on this stuff to be fair to be fair without closure extraction you don't have this problem because it would
[03:22:57]  just error like you wouldn't expect the secret to be able to be in the local scope it'd have to be global and if it's global then it never needs to get
[03:23:04]  sent to the client so it's an it's an interesting choice um but it it's it was one for me that whenever i see this example now um that's what
[03:23:15]  i see um because like i guess the difference is this one is something you can avoid where it's just like don't do something where you close over um server data in a
[03:23:27]  server component because it actually gets sent to the client versus i guess hidden tree shaking which we've been relying on forever but it is an interesting tension right because like don't
[03:23:38]  get me wrong i don't i don't like the fact that the like either case leaves us open and the challenges one of the real challenges here is like the incentive to put
[03:23:48]  the server function in a client component um is because of the help people ease their migration right i told you it's very important for us to move people from cra mindset to to
[03:23:59]  next to rscs like do the one two three and the easiest way to go with that is you can literally leave the data fetching where it is if anyone's
[03:24:08]  seen solid they know what i'm talking about where you can literally take react query and just go server dollar sign it and now you don't need a you don't have to
[03:24:18]  change a bunch of your like uh conventions essentially and you can move basically from client to ssr to server components and follow this kind of trend line so that's that
[03:24:31] 's that's the justification but again we have to solve the tree shaking problem in the case of uh this pattern we need to solve the closure serialization security problem which i'm
[03:24:45]  sure is easy solve i'm just pointing out there that it was very interesting to me how much criticism recent days have come about this stuff you know keeping server and client separate
[03:24:56]  and we can still run into these kind of issues yeah i i know there's concern about app state yeah i i mean i don't i was or yeah asp page state i
[03:25:12] 'm hoping this is why i said we weren't like uh we weren't going there again i actually don't think closure extraction is worth it currently maybe people will convince me from
[03:25:21]  like a dx standpoint but i think like it's funny that this issue actually isn't a problem with closure extraction it's actually completely safe without closure extraction um and what like
[03:25:32]  it's like why can't you just like the the reason for it is because forms don't give you a way to call the function like you don't have a way to
[03:25:41]  bind it you know what i mean so i understand why we're here it's just like all these patterns um are still kind of getting worked through yeah exactly why do we
[03:25:56]  want the closure extraction yeah i'm i i think it's so like how else do you get arguments into it see if you control the call site it's a little bit different
[03:26:06]  like picture like forms are awkward well but i guess yeah you're right if people yeah i mean there's other yeah actually this one's i mean maybe this one just shouldn
[03:26:18] 't happen like if you have the secret you should basically say no you have to pull it in yourself inside here and not in the component body like it should just be strict i
[03:26:28]  was going to say that you can't really call handle submit like bind it with the arguments you want because like in a more typical case with a client um thing like you
[03:26:39]  don't need like now this is server counter i've gone too far but you you know i mean you can always just pass things as arguments without closure extraction like this is always
[03:26:50]  an option to pass things as arguments it's actually a lot clearer because there's no hidden thing going of course you know never bet against dx wins people want dx wins will
[03:27:00]  always usually come out and trump because someone wants it bad enough they'll like warp the whole world to fit it so i i can't say for sure um but yeah this i
[03:27:08]  guess i actually did make this point next not to say it's bad it's just that it isn't all that different between solutions separate files definitely help with some issues but there
[03:27:14]  are a few different classes of problems we've done client server for years gsp loaders but server client with extraction is a lot newer right um so this is something that quick
[03:27:23]  actually i think had to deal with a a little while ago when they realized that there was a problem they i think they i figure what their solution for it was but um
[03:27:31]  quick also had to look into this because it's very similar yeah i think the biggest difference with svelte kit um is that i don't i don't think there's
[03:27:44]  any opportunity to close over actually let's look does svelte kit have this potential problem let's look is it it's it's it's it's kit dot s
[03:27:55] velte dev right kit dot svelte dev let's let's let's look here because what i want to understand is they have server files that's fine but it's
[03:28:03]  not enough to have server files you have to make sure that your loaders and your sir oh they don't have server components right this scenario only happens in partial hydration based
[03:28:18]  frameworks it's quick you know for example that support rp rpcs um react server components the stuff we do in solid start um yeah actually i don't think svel
[03:28:31] te has this problem because they haven't got here yet this is kind of what i was joking about earlier when i was saying that if rich is talking about you that means
[03:28:41]  you're innovating server only modules okay let's see what that is yeah uh let me try that jess all right let's pull this over my guess is it's
[03:28:58]  just a okay private m variables okay yeah okay so they're using the same yeah this is just an extra protection um that's cool it's not server components though it's it
[03:29:14] 's basically i don't know if you've seen in bling we have uh we have uh bling github we have something called secret dollar sign but it also
[03:29:24]  works with file extensions so um it's a secret you know it's just like extra layer defense um but we we also have secret files you know the it's the same kind
[03:29:40]  of thing um so yeah i mean this is this is the question right like should we just set conventions around things that are secret and then if that's the case and we
[03:29:52] 're gonna we're hell-bent on going this direction anyways like is that all we can do right that that's that's what i'm asking right like maybe we shouldn
[03:29:58] 't be so quick to you know kind of yeah i don't know the the only one that definitely gets you with stuff from the server in the client is this version though
[03:30:15]  which is interesting um the other ones seem like they could be solvable because like literally if you didn't pass it to the client that this example that i was showing based on
[03:30:26]  lee's example obviously that's not what lee's doing but like if you didn't pass that from the server to the client to the server the function literally doesn't work it
[03:30:34] 's not like something i guess you'd know right away but i feel like you should know right away so like that that's that's that's essentially it i this isn
[03:30:41] 't the pick apart this i think this api makes a lot of sense it's why we're excited about bling and um you know all that stuff it's very very
[03:30:48]  very similar right um there's so many applications when you can get into these kind of patterns um uh if you saw manu's uh click handler quick example from a month
[03:30:58]  back same kind of thing this this is like i think this goes through everyone's head it's why blitz exists in the first place like the when we first went back to
[03:31:06]  the server and we're like oh monoliths are okay now like it just unlocks all these patterns it's kind of like this will this will happen if we ever go
[03:31:13]  oh stayed on the server is okay now everyone's going to like be making crazy stuff live view style and be like oh this is so much simpler like don't i actually
[03:31:20]  was very impressed when i saw had live view js um donnie on stream because like in a way it was a lot simpler i think there's definite trade-offs there and
[03:31:29]  people worry about forgetting about the past we haven't forgot about the past it's just like like it's it's a it's a bit of a balancing act between like we
[03:31:40]  got rid of monoliths in the past for a very good reason and we're trying to solve the monolith problem differently this time is essentially it we're relying on
[03:31:53]  compilers and bundlers as a way to distribute our stuff across the new age um infrastructure using serverless using all these services kind of like automatically splitting our code um so
[03:32:04]  because to a certain degree co-location and um monolithic authoring is a lot simpler to wrap your head around so as long as we can eliminate the performance concerns
[03:32:17]  there um there's benefit of course the challenge is um is like a lot more considerations too when you consider security and what not anyway i found the best the best quick slogan
[03:32:40]  yeah i mean this is where we're at right now this is the i'm happy about a few of the cold shots that i made in my uh in my in my
[03:32:52]  article at the beginning of the year and this was one of them i think this is this is where you know everybody's playing this game it's i mean vercell is very
[03:33:02]  obvious because they've been very vocal about it but like uh oh you know just seeing the work that's happening with um sst at amazon um netlify has basically
[03:33:13]  uh the build file output api they've had it for a long time they just never advertised it um so like this idea where you can just stick infrastructure in folders and have
[03:33:23]  it automatically deployed to different parts um it's so odd to me that we our marketing doesn't push things out in those channels as much but um you know like everybody's
[03:33:32]  kind of looking at these solutions um on how to you know build in a way that's like quick to boot but doesn't suffer you know scaling issues as quickly yeah this this
[03:33:45]  this this meme has been floating around i use this i i use this meme also um a little bit to talk about uh uh compilers uh but yeah anyway um i
[03:34:01]  just want to point this one out because this this this was a hot issue and there's a better example i've lost it along the ways but i just i just wanted to
[03:34:10]  like i think it's important to to understand that um i'm not going to dig into this one dax um just fyi this whole edge is a place thing it conf
[03:34:21] uses me and confuses people working on standards it confuses basically everyone um but i i would love if marketing didn't get in the way here but i can't i
[03:34:34]  can't talk about it i think it's important though i i will go over this just enough so that people are are gonna are going to at least like read this because it
[03:34:43] 's this at least is a good like why am i even talking about edge being a place right i'm gonna explain this without any marketing terms taking the time to write this out
[03:34:52]  so please read it carefully before you reply and try to disagree that's that's a good prefix to pretty much everything we have a primitive called serverless function this is a
[03:34:59]  reasonable name it is a function that can execute without thinking about what server it runs on we can pull out two properties of a service function where it's running and what's it
[03:35:07]  running for the where it could be a regional data center like us east one in north virginia or it can be at the edge closer to your user or maybe another location we
[03:35:15]  haven't thought of for what it can be things like node.js dino golang who knows any kind of like runtime um so we can look at products that serve
[03:35:25]  these combinations node.js plus regional which is aws lambda configured with node node.js plus edge which is aws land that edge actually probably only like half of them right
[03:35:36]  v8 isolated edge cloudflare worker isolated regional cloudflare pin to a region goal.js basically there's a whole bunch of different combinations of these these two things
[03:35:44]  to form what we call thing the root issue is your cells taking the non-marketing term edge which always refers to where and users describe specifically a product creating immediate confusion because
[03:35:53]  they say edge runtime instead of saying v8 isolate the second part is now additionally using the phrase serverless function not as an umbrella term for everything but for one specific combination of
[03:36:02]  what and where yeah that was the whole debate i actually am not as close to this one as dax is so i don't have opinion but i think it's important
[03:36:13]  that you can understand why um this has been very confusing especially when if you look at they were working on the standards a few months back and trying to like make edge a thing
[03:36:23]  and then vercel's like no you can't do it that's our marketing term um which was really interesting to have a standards conversation around that because like you know
[03:36:32]  what i mean like they're kind of like very it's very different worlds um i actually had a good chance to meet up again with uh um luca um and uh nic
[03:36:45] olo uh or nicholas i got a devil uh both guys working on tc39 standards when i was in belgium and uh we had some great conversations about modular module
[03:36:57]  extraction you know what let's see if i can find it let me look at my i i this actually is very relevant to what we just did if i go to my
[03:37:04]  notifications which probably have way too many and i go down a little bit here um i might be able to find what i'm looking for yeah here we go yeah nicolo here
[03:37:14]  we go um different frameworks are moving towards co-location of code that runs the server and the client some examples are react use server use client quick with the server dollar side
[03:37:24]  and solid with their server doesn't they all use functions that can be confusing behavior because they close over variables from server to client and vice versa module expression could give clear boundaries
[03:37:33]  so module this he's talking about basically um uh built-in javascript syntax for doing this it might be another good use case shortness it gets cc ryan
[03:37:41]  thanks for the idea um yeah so they are looking at this on the on the on the um on the standard side just fyi this is this is what happens when you have
[03:37:53]  bring people together conferences so maybe good things will happen it also might mean it will take 10 years before anything happens but i'm just glad to have the conversation started we can
[03:38:01]  we can kind of go from there all right all right what do we got here how's chat going uh related rfc for astro i did not what what do
[03:38:18]  we got here oh yeah yeah yeah yeah the client side routing one yes i i very much saw this one because i was very much involved in in in uh convincing them that
[03:38:31]  this should be a thing um um yeah if you actually see the post where uh nate announced it he actually linked my my rough notes document about how i was thinking about how
[03:38:45]  to approach it um it's interesting because we used micromorph from them to actually build solids version um i don't think they're looking at nested routing but just
[03:38:57]  adding client-side routing faster as i said i i this is why i was talking about imp at the beginning i think everyone's going to be impacted by that um thing like
[03:39:06]  i i i my my feeling is that a lot of the single page app frameworks are just are saying multi-page app frameworks are just going to become this new sort of framework
[03:39:12]  i don't want to call them single page apps because they actually really aren't like most uh single page apps but um sorry um but it's definitely it's definitely a
[03:39:24]  thing um to expect this kind of client-side routing and rsc approach to show up i mean p i mean i i don't have to show the movies app demo again
[03:39:33]  you guys have all seen the movies app demo it just like you see that and you're just like it's just like for that instant in time you're just like wow
[03:39:42]  i can literally build something that has no javascript and feels like a modern single page app like all like yeah it feels great yeah people talking about edge functions edge functions are
[03:39:55]  specific to javascript um i can divide yeah yeah um remember to read uh the discussion's running in yeah i mean and this has been the question right and tanner
[03:40:19] 's quite right where a lot of the stuff is client updated anyways so not necessarily i think the thing you have to understand here is what we're talking about is another architectural
[03:40:29]  shift it doesn't stop you from doing all the stuff you've been doing in these client dashboard apps it just gives a new baseline which means that like the i did a diagram
[03:40:36]  a while ago it's probably not in excalder anymore like if i scroll around maybe i'll find it see i have all my notes from my other streams here like i
[03:40:43]  had one where i showed like a bunch of let's like zoom way the hell out yeah okay not not this one um but essentially um how should i put it uh uh get
[03:40:59]  back to reasonable zoom um what i what i wanted to say is that uh we're the idea is changing the foundational perspective on what the web is like almost outside of the c
[03:41:15] dn case and even though and it still works in the cdn case um or should work in the cdn case essentially the web starts on the server so
[03:41:24]  if you treat the application development as something that starts on the server that little bit of a shift let's makes it more unifying with the rest of the web we we've
[03:41:35]  so hyper optimized on the one zone in the client so yes this is not going to suddenly make your life better in any sort of way but what it's going to do
[03:41:45]  is hopefully um make it so that people who go hey i want to build a website or build a web app that decision isn't so like this or this apps versus sites it
[03:41:57]  means that you could approach them the same sort of way with the same based technology and then build towards your goal but as someone building a dashboard today you could probably care less
[03:42:08]  like you don't need to do anything that's the whole thing like nothing here means you need to do anything i think one of the problems is a lot of the routing solutions
[03:42:19]  right now don't cater to the client side case quite well enough and that's something i want to address but like they it doesn't really restrict what you can do it
[03:42:28] 's just like additive but unfortunately additive in the way that you have to re-architect your app yeah yeah um that is exciting and it's something that we'll be able
[03:42:44]  to leverage um we already had code splitting us all start but so moving to astro we kind of lose it but then i hope we get it back again so like this is
[03:42:50]  exciting um yeah and not just you commission them um met with igor with fred and mishko and we're all sitting there and igor like pointed out that
[03:43:00]  astro didn't have it and he's like okay enough people push on it fred's like we'll make sure it happens baseline in the container apis laid out okay
[03:43:20]  yeah i mean that that might be interesting i hadn't actually looked too much in detail there um i just know that like at least from what i the conversation i had with
[03:43:29]  them they weren't focused on in the same sort of file system like automated nested routing approach but if they have an api for it i could definitely see supporting that i
[03:43:37]  probably need to catch up on where they're at on that all right okay so edge is a place sorry dax um i don't want to talk about this anymore fair
[03:43:49]  enough um let's keep on going yeah talked a bunch about solid star and jabber we've talked about remix conf oh hey talking about code extraction um very very very cool demo
[03:44:07]  i i'm i'm loving the way that manu is selling new um features these days um and this one is using worker dollar sign um this is obviously something that we
[03:44:18]  we thought of ages ago but like he actually went and did it another one was web socket dollar sign um right i i'm pretty stoked to see this like work the thing is
[03:44:29]  like this is the case you need something very expensive because once you go into worker dollar sign you're opting into async this isn't about like there's a reason we
[03:44:38]  don't use workers for concurrent rendering but if you have something really expensive the ease at which you can use this is really cool and i love you can see work a dollar sign
[03:44:47]  it could also be use worker i can very much see this is part of the that distributed thing i was talking about where distributing stuff in space essentially the idea that we're building
[03:44:58]  monolithic and then we can distribute the work through different like spaces or different like environments and i think it's actually more interesting just this if if you consider time i'd love
[03:45:08]  to see macros like this affect like do this a build time or whatever you know like i think there is a lot of dynamicism available to us now to have the
[03:45:16]  single application and then distribute the work based on you know some amount of automation some amount of manual intercepting this does add complexity but it is definitely something that is cool um
[03:45:29]  yeah yeah all right yeah i forgot to link this right because this is like one of the first things i think it was back in february like we proposed doing this but
[03:45:40]  no one actually got around to building it someone's asking if this is going to come to solid start only through bling honestly uh features in solid start um itself because a lot
[03:45:50]  of them are going to they're going to get they're going to incorporate other libraries or we're moving the responsibility i'm not like working on say server functions right now
[03:46:00]  because eventually they'll be replaced with bling server functions i guess essentially um we're looking a way of distributing out the libraries and the work and as always making solid start um
[03:46:11]  a combination of a bunch of primitives um so workers should come at some point along that timeline kind of working towards that um i think there's a few other suggestions if
[03:46:22]  i go to the readme of some cool apis that are definitely in consideration websocket dollar sign lazy obviously this is the client interactive dollar sign clearly someone watches theo streams
[03:46:34]  um because he use interactive i think that's what he wanted to call it um anyway uh why is the dollar sign coming to solid it was just for this and actually we
[03:46:51]  had the dollars we've had the dollar sign in solid start uh for just over a year now um we didn't have quick style of breaking server stuff apart but we were
[03:47:03]  we were we were the first to do the compiled rpc stuff in the modern meta figure i don't think blitz did is there's compiled blitz might be but
[03:47:13]  the the the server dollar sign uh thing started from solid start um uh but essentially uh the compiled rpcs are really interesting i think um as i said there's a
[03:47:29]  lot of benefit to them uh but i think that uh there's still a lot of room to explore here which is what i was suggesting even in here like this is very cool
[03:47:40]  i i love seeing every time as i said man who does such a great job selling this let me see what if i told you that you can run code in a web
[03:47:48]  worker directly from gsx please keep watching for a long love it um very very very very cool um yeah a lot of stuff quick's been doing is very much on fire
[03:48:00]  recently so um very cool to see these kind of applications come in and i think it's largely part is like they've hit 1.0 now so now they can can expand
[03:48:08]  out to a lot of the other ideas they're working on stabilization before now they can like kind of play with some of the stuff they want to play with um so yeah
[03:48:15]  i expect more of these kind of things this is the kind of stuff that i'm talking about um sure it's it might not be terribly hard to start up a worker thread
[03:48:24]  today but these kind of conveniences probably do add up at a certain point yeah view use yeah exactly yeah i was gonna say yeah view use has one we probably have one
[03:48:36]  in uh solid primitives like the the difference these compiler things are just yeah is this a compiler trick i mean i'll check it out if it's worth doing but um like
[03:48:50]  it isn't too hard to to uh get the runtime up and going it's just this new kind of trend of using the compiler the bundler as a as a way of
[03:48:59]  of of doing this stuff i haven't actually haven't looked too closely at this one i probably should let me just pop it up why not um nice okay so it actually
[03:49:18]  okay so it does actually straight up call the function that you provide that you provide here that's that's cool how does the bundling work i'm actually kind of interested
[03:49:37]  does it do closure extraction this is this is interesting to me because most of most of the the frameworks have done some sort of um uh like the bundling it's hard
[03:49:56]  to do this without the bundling piece right like hmm that's interesting usually there's some kind of syntax to tell you like in place oh crap you like if you use
[03:50:07]  this this now gets pulled in or whatever but yeah yeah veet yeah veet using workers is also very interesting uh very easy to use yeah but yeah this is this is sort
[03:50:24]  of the um yeah in any case this this is sort of like the i expect to see more and more of these kind of things and i said extending more be even just
[03:50:36]  beyond like oh do this in a worker but like we're i we might it's interesting i don't know how much this automates versus manual but this idea of like spreading
[03:50:47]  the compute cost around this is all about this monolithic splitting up this monolithic architecting um yeah we don't have to talk about that okay other cool stuff i told
[03:51:01]  you i was excited um do you want to go there yet let me see here uh we talked about this we talked about this did we talk about sorry i'm just it
[03:51:15] 's a lot of stuff um is this this this okay i just want to make sure that i didn't choosing and again built in solid that's not okay cool um okay
[03:51:37]  just another cool thing that we came across um i i mentioned i saw this at the the hackathon um and uh i thought this was kind of cool uh but they just launched
[03:51:52]  it well this past week is that this idea of the new cloudflare app starter actually runs the cli of the other of the other frameworks and then it completes using
[03:52:07]  their cli at the end to deploy it so like the end to end it um making it super easy that you can just go like start a cloudflare app do you
[03:52:15]  want to use i mean he showed it right here do you want to use this is it's a solid but it's it's solid start so you choose whatever angular ast
[03:52:23] ro docu-sword gatsby hono next the quick solids felt view remix you know so you can choose any of them it runs their cli so use their
[03:52:31]  templates all their setup and then it comes back in to the cloudflare which does a deploy and then you're you're all done which is really quite cool kind of experience
[03:52:41]  for getting started because then cloudflare doesn't have to maintain anyone else's templates this way or like cli they just kind of like as long as they know how to
[03:52:50]  install their adapter then they're into the setup they're all good there's some concern people had about it breaking but i think this is i just hadn't seen this that
[03:53:01]  much i think this is really cool this idea of super cli i don't know who else ends up using this but um yeah i don't know it was just something
[03:53:13]  very cool to see um because i just know after you know at netlify we have templates for all the different frameworks at for cell you know and every time i make an
[03:53:23]  update that's major enough i have to go into for cell make a pr change the template there you know that whole thing this this you know that whole thing just goes away
[03:53:33]  you just run the cli i mean i'm sure there's other headaches but very very very very cool um um okay sorry let's get back here no i want to
[03:53:49]  go to here um okay a couple things marco did it first sorry uh this this is funny i i this just caught my eye design by copy paste is one of the best
[03:54:06]  principles i've learned in software better than solid or any what you have acronym i agree it seems trivial but it combines deeply useful properties safe non-erroring removal safe
[03:54:15]  non-conflicting duplication safe non-splintering moving and and and then jlarky um you know goes ahead and says that would have been even
[03:54:27]  easier to copy paste state zero effect this how would you pass return values from one to another you'd have to nest them render props then remove them or something like that which is
[03:54:35]  use marco gets to come in with the humble brag that they've solved all that obviously anyway yeah um and yeah just just amusing to me this maybe one day this will
[03:54:50]  be another hashtag marco did it first um let me see okay okay cool okay only other thing i want to talk about that i thought was really fun um had a lot
[03:55:09]  of fun in belgium um and uh great group and we it was it was kind of interesting um i i think a lot of new people to solid at this talk so
[03:55:27]  it was it was it was a good chance to kind of get a good feedback and one of the coolest things i don't know if it's a cool story it's
[03:55:33]  a very interestingly weird story at first was we um we we there was a solid meetup um that we a bunch of us were trying to get over town to get to and
[03:55:46]  uh it took us a bit to actually find the place because it was like in an abandoned warehouse district and we're going through like these back alleys and like there was like
[03:55:56]  it didn't look the most uh pleasant place to be in perhaps but then we managed to like go through this like abandoned warehouse and go get all the way up to like
[03:56:04]  the fourth floor and there's like this cool uh place where they had like a bunch of server racks and all that and i actually gave a solid uh presentation to like a
[03:56:15]  handful of people um where i got to do a remake of a kind of like remake solid from scratch um i realized after doing that i i should probably do more workshops but it
[03:56:26]  was actually a very very cool experience in general i i it's it's it's interesting when you're in like a new place or a new city you know and you're
[03:56:34]  traveling and you just like kind of just wing it and that's what i felt like this was it's very interesting experience um yeah if if anyone's like interested and their
[03:56:45]  stuff aligns with my travel i'm more than happy to come and talk about solid um you know very variety of situations uh i'm gonna be in amsterdam i'm gonna
[03:56:54]  be in portugal and i'm gonna be in uh finland coming up uh but yeah this experience was really cool and the people there definitely appreciated it it was it it
[03:57:03]  was it was cool to kind of like formalize uh a bunch of the kind of conversation points that we've been having for a while here actually i think i think uh i
[03:57:15]  think it was what yeah i actually quite it's always interesting when you have a few of those moments where like you have the conversations and then someone says something back to you that
[03:57:26]  you've been saying forever and you start kind of uh it crystallizes it better for you so it was definitely it was it was definitely quite cool um right uh obviously this
[03:57:39]  was a boost to me but fine grain best feature is decoupling component data components are not a thing here this unlocks amazing dx throwing an error is better than resiliency when
[03:57:47]  trade-off is ux performance degrading performance is like playing paying taxes it's better to know up front that than to have multiple surprises when someone comes to collect i i
[03:57:55]  think these these are very interesting insights and something that um i'm going to appreciate more which is why i did the strict mode stream you know a month or so back and
[03:58:06]  i think um i think these might be the bigger takeaways from a lot of the recent progressions through things uh and where the philosophical line drawing starts happening in the future you know
[03:58:19]  i think rust has already suggested this to us um that and even typescript to a certain degree that like like our our strictness or so our errors should be concerned with
[03:58:33]  correctness so to speak um so you know in this case i'm talking performance but i think this is a very interesting perspective and that's the only reason i'm bringing up
[03:58:44]  i still have more things to think about here and what the repercussions are but it was it was definitely very cool to have like you know a small group of people kind
[03:58:52]  of like test the idea and then reiterate it back to me in a sense and go like oh i hadn't really thought about phrasing it that way anyway um yeah i
[03:59:22]  mean nitro is as well there's a couple standards forming around this kind of stuff so like uh we're then there's hat tip the thing is there's actually multiple standards
[03:59:33]  that is like the xkcd thing i'm just trying to consolidate around where like i guess nitro is a good bet because nuxt is behind it but where
[03:59:39]  there's like company of people actually supporting these things and not i'm hoping one day that that piece can be consolidated around the builds how are belgian waffles um i
[03:59:51]  didn't actually have any when i was there i'm sorry to say there were i didn't see any at our breakfast um i i had belgian chocolate which was
[04:00:04]  very good um but none of the waffles anyway um hey dan you you you're perfectly fine to come on stream this is my stream so come say what what whatever you
[04:00:31]  want to um and join on the stream you're perfectly welcome here anyway um where were we yes um what wait wait wait something happened oh dan just gifted a whole bunch of
[04:01:00]  subs wow holy holy wow that's that's a lot of subs 50 tier one subs from dan um well thank you very much for this i'm sure everyone in everyone here
[04:01:24]  very much appreciates all those subs very very very cool all right give me a second you drink some water yeah i guess guess that that's always the other side of
[04:02:03]  this yeah i guess i guess that that's always the other side of this yeah i mean i i this this didn't come up um on the stream but uh dan's no
[04:02:10]  longer working directly with us on the solid project um we we parted ways um there's some differences obviously uh that that that were had and um my my hope is
[04:02:22]  that um we can be um it can be you know in a better place in the future and be more more amicable situation so i i i as i said um um
[04:02:35]  i i i had to take some actions to um protect solid um and i i for those who don't know what i'm talking about it's fine you can go on
[04:02:48]  solid's discord and see what's going on there this is i for the most part something that i i didn't really it's honestly not not not a lot of people
[04:03:08] 's business honestly and um i i respect people involves privacy in this manner so um you know that that's really all i really want to say about this at this time um i
[04:03:12]  i respect people involved privacy in this manner so um you know that that's really all i really want to say about this at this time this at the at this time but
[04:03:25]  um obviously dan's still here gifting people subs and uh we obviously love all the work dan's put towards solid project over over the years so um you know it you know
[04:03:39]  it's unfortunate when things get to this situation um but i'm i'm hopeful that in the future there's healing for all around for for everyone and we can all learn
[04:03:52]  from this experience but yeah no um it's it's been a it's definitely been a crazy month uh you oh sorry i didn't mean to go home i might like
[04:04:20]  accidentally show somebody's private circles but what i wanted to get at is like it's amazing the kind of situations and conversations that fuel you know other types of conversations and push innovation
[04:04:32]  forward um jamstack conf last year was what started the whole tenor astro solid kind of um kickoff largely um influenced by theo putting us together to some degree
[04:04:49]  um all people who had who believed in what theo was doing um and uh even now it's it's it's awesome to finally meet a lot of the people um that
[04:05:02]  i've met online i i realize i've only gone to certain places but uh definitely if you're ever in the situation do come and say hi um yeah i i you always
[04:05:12]  hear interesting cool stories i actually heard a cool story that i need to track down this someone told me that their employer had got solids working completely in next they'd taken my
[04:05:23]  demo where i made solid work on the client side and they made it work with ssr so you could completely put solid components inside next.js without micro front ends which
[04:05:32]  is really cool it's something i want to i want to look at um you there's so many people building different stuff out there there's so many different uh technologies that are
[04:05:43]  just beneath the surface coming to fruition right there's there is a lot to be excited about um and i'm i'm very stoked about uh all that's been happening in
[04:05:55]  recent times because that's what the things the conference have been doing is giving people a chance to showcase um uh really cool things really cool developments in in all these ecosystems i probably
[04:06:07]  missed a couple conferences too um these are just the ones that came to mind one day we will meet yes or actually wrong one sorry everything moves i meant i just cropped out
[04:06:37]  of all the photos i swear we've met though the people don't realize how tall theo is i mean on on that on that note i i posted this picture right um
[04:06:49]  about me at 19 and actually now that i think about i was probably 20. i think this was actually 2003. anyways uh oops gave up my age i think you guys all
[04:06:59]  know and then theo theo you know obviously looks all clean cut here and people are like uh you know what was it i saw something someone said i thought it's hilarious um
[04:07:10]  um 19 year old ryan would definitely take 19 year old theo's lunch money but i don't think people realize just how tall like how big theo is like um yeah just
[04:07:27]  that's that's that's the first thing that came to mind um i actually okay here's a great one i don't know theo is gonna like this one but i
[04:07:36]  i i i got a story to actually share uh related to meetups and conferences and whatnot i got the chance to meet up uh again at reactathon with uh vincent he
[04:07:47]  works in um meta he's in he's kind of like uh on the team that does like the the kind of platform level integrations with react like like stuff like uh
[04:07:58]  basically like not react core but right outside of it that make sure that product teams can use react well and uh we hung out at at a meetup uh about a year ago
[04:08:09]  um i think so i gave a solid talk at one of the react meetups and it was one of the first times to hang out with theo in person and uh we've
[04:08:17]  been talking online a bunch and vincent was there and ben the promoter was there and we we went to a bar afterwards and it was it was vincent reminded me
[04:08:27]  of this story because uh i i'd actually forgotten about it because we were we we head out after you know the bar does uh i think like like last call or something it
[04:08:40]  was it was it was a bit earlier it wasn't like a 2 a.m kind of deal and there's this guy out there and he's like how he he
[04:08:46]  wanted us to like fight club essentially he was like he was all like who who's gonna you know you know i got some money here i'll pay you see you guys fight
[04:08:54]  each other and we're all like no what are you talking about um and it's an odd fellow too because he seemed to know way too much about streaming and stuff and twitch
[04:09:01]  then theo kind of got into a conversation with him about you know different trends on streamers getting banned by twitch or something it was just i guess only in san francisco
[04:09:10]  sort of conversation um but anyways he just wouldn't let it go and like me and ben were both just kind of like whatever just kind of like start walking away from this guy
[04:09:20]  right and and then at one point he's like finally he's like okay fine like who do like i don't know if he's kind of egging stuff on or
[04:09:27]  something he's like like who do you think would win if if if if everyone was gonna fist fight here and like as i said me and ben were just kind of like like
[04:09:36]  walking out of it and then the guy was the guy was thinking and he's like he points at vince and he's like that guy because he's he's got
[04:09:45]  a mustache and and and and then and and then vincent said to me he's like don't you get it that's why theo has a mustache now obviously it's completely
[04:09:58]  unrelated it was like six months before but it was i i found i found i found i found that story funny um anyway yeah they're they're they're spicier ones
[04:10:15]  probably but yeah it it was it was just it was just funny because basically this silly guy on the street thought uh thought uh vincent would win because he had a mustache
[04:10:31]  but anyway just the anyway yeah i'm i'm i'm not promoting a pro fighting uh narrative here it's just it was it was just it was just amusing to me anyway
[04:10:52]  uh how are we doing how are we doing on time it's only 4 11 but you know i actually this is most of what i wanted to cover today i think i
[04:11:01]  don't know i i think we we did a good job of covering most of the topics um i my deal is that for the next ooh i'd say next few weeks i
[04:11:17]  have more conferences coming i'm going to be at go to in chicago next week and then i have uh gs nation in amsterdam j nation in portugal and
[04:11:31]  then future front ends in finland how did this actually land because i know we've had this in canary um how so let's start beta going yeah yeah um we
[04:11:51] 've been making i think i showed a little bit on stream about how we made progress on uh astro um we're down now to uh there's some fixes that should have
[04:12:01]  gone on the astro release that came out last week i think 2.5 came out last week or sort of like just the other day i think it might have actually
[04:12:08]  been on wednesday um that we've also uh i got rid of a lot of the annoying dev warnings and stuff so um mostly you saw my commit history earlier on i haven
[04:12:19] 't been doing a ton the little bit that i have been doing has mostly been looking at issues for solid and working on the astro integration um we have you know flash of
[04:12:27]  unstyled content we have some issues with mdx still um but a lot a lot of the other stuff's working now environment variables are working um so we can
[04:12:40]  get off up and running and i'm basically telling people who work on adjacent libraries things like the stuff that uh jd uh they create gd app to give it a try
[04:12:50]  and see if they can make it work it's available on app beta like so if you install uh npm init solid at uh beta you will get the new astro
[04:13:01]  version um it it's as i said there's there's with all these things there's going to be edge cases but i'm hoping over time to push most of those um
[04:13:12]  into the deployment adapter level um as we clean things up once we get that done we'll be able to uh focus again on api updates and and whatnot i i've
[04:13:24]  i've i've i've basically starting to formalize in the same way formalizing docs team again uh formalizing uh solid start team getting people involved there and we're we
[04:13:35] 're branching the r d side separate from the beta effort um and i've been posting plans this week on how to approach that so i'm i'm still traveling so it
[04:13:45] 's been challenging but my hope is that uh in the over the next couple weeks we can kind of start moving it towards a point where we can get more people on it
[04:13:56]  more eyes more people like contributing it's just kind of the timing was awkward i was hoping to get most of the astro migration done before i started in conferences and it just
[04:14:05]  did not work that way you can take over busy well that's the thing we're very close to where other people can can actually make meaningful contributions again i need to clean up
[04:14:18]  a bunch of stuff but like uh it's like the astro i demoed this on my last stream which is a month ago like the astro thing was already close
[04:14:27]  then we're we're getting closer now um it's just a couple really painful issues uh around mdx and some bundling stuff things that are like tricky to solve that
[04:14:37]  i'm hoping we just need the right eyes and right focus um jess here helped us fix all our tests um so uh we have the test suite running now on astro
[04:14:46]  um only the node environment because just the way we're set up but at least um we we have tests running which is very helpful and um essentially we're we're you
[04:14:57]  know we're making progress um i i do want to as i said i want to wrap this up i think there's a lot of potential here i think there's a lot
[04:15:03]  of really good ideas um and i'll have more exciting announcements about solid start hopefully in the next couple weeks um as we put together our plan um and funding for uh for
[04:15:15]  r d so very exciting stuff any other questions before i call it uh early yeah i mean only four and a half hours or whatever but um i actually don't really have
[04:15:30]  much more content today testing continues to be the only thing i'll see aren't doing is all i think well you're you are very good at it um aren't you
[04:15:53]  crazy yeah yeah i think i think i'm doing pizza for dinner tonight i think that's what's going on homemade pizza um so very good no sushi or korean barbecue today
[04:16:03]  but um yeah no it's it's it's been a lot of fun um i think i covered everything the only reason i'm dragging a little bit here is because i know
[04:16:12]  that i will not be back on stream again until late june um it's going to be another month um just because i i'm taking some vacation time after the conferences
[04:16:25]  to uh with the family gonna go to utah do a bunch of hiking and all that stuff so um just just kind of putting it out there just in case i forget something
[04:16:37]  because it's gonna this is this is kind of like the uh impromptu in the middle stream to make to you know say hi for just a bit so those
[04:16:48]  gift subs are worthless oh yeah i'm i'm sorry um yeah just it's just the unfortunate timing of these things uh once once i'm back we will be back on
[04:17:05]  regular schedule i said there's a lot of cool people i want to talk to i'm aiden i'm gonna have him on we're gonna talk million js talk about exactly
[04:17:12]  what the block dom is obviously gonna be some good progress since i'll start i'm i'm gonna try and tap some people in astro's shoulders coming up and see how
[04:17:21]  their client-side routing stuff is going um i there's a lot of really cool topics that and really exciting stuff happening right now um so uh i'm i'm looking
[04:17:31]  forward to seeing this stuff kind of uh come together over the summer and then hopefully have some you know bigger announcements and releases coming out in the fall that's kind of where we
[04:17:41] 're at um it's one of those things i gotta be pragmatic and practical about um obviously there's a lot rely on the community and building that up but also we are a
[04:17:52]  relatively small project um and we do what we can so um you know as always any help is very much appreciated come by the discord you know and live stream from zeon
[04:18:10]  yeah i i i'm i'm i i'm i'm i'm looking forward to zeon uh definitely um off bryce canyon um yeah it's it's it's
[04:18:19]  it's it's gonna be good i don't know if i'll have my recording stuff with me who are we rating um who are we rating good question see i don
[04:18:29] 't follow enough people so the only person that i follow that's online right now that isn't playing legend of zelda tears of the kingdom because i i traditionally followed game
[04:18:42]  people play who played like speed runners and stuff the only person in our space i'm following right now is dave i don't know what he's doing right now i
[04:18:48]  guess i can see what he's doing let me see he is programming in laravel i i almost don't want to go there laravel blade that's what's
[04:18:58]  on his screen right now am i going to send you guys all over to a stream about uh php is that what's going to happen i think that's what's
[04:19:09]  happening yeah yeah yeah yeah i think that's exactly what's happening i apologize to everyone else yeah you're unfollowing yeah it's it's over um yeah it's okay
[04:19:27]  dev was here earlier and i'm i'm trying to say his name properly um because it's spelled dev but it's it's actually like dev so um yeah i'm
[04:19:37]  sorry you all but if you guys are still around um we're going to cut over to dev thanks for joining me today thanks for joining the stream as always and uh i'll
[04:19:48]  see you guys in a month um uh have fun