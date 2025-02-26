---
showLink: "https://www.youtube.com/watch?v=REXtIuAJ3dE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Breaking Down the Web /w Dan Jutan"
description: ""
publishDate: "2022-04-23"
coverImage: "https://i.ytimg.com/vi/REXtIuAJ3dE/maxresdefault.jpg"
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

[00:00:00]  Hello, welcome to my stream tonight. Sorry, I'm running a minute late, it looks like, but I can still spend another minute here waiting for people to join
[00:00:09] . Actually, tonight hopefully is going to be a little bit of fun. It can be a little bit of drawing too, I imagine, which will be fun as well,
[00:00:22]  hopefully, because I'm going to try my best to explain a bunch of the topics that we've been talking about on stream. It's kind of come up a couple
[00:00:33]  of times now, where people have, you know, mentioned, they're like, you know, I feel like I'm walking into the middle of a conversation that's already
[00:00:43]  started. And in a sense, they have, this has been kind of building up for months now. And I thought it'd be really nice to kind of take a step
[00:00:50]  back. All right, happy Friday. Let's give some greetings to people. You joined on time, or I just joined late? Same thing, right? Hey,
[00:01:00]  David. But, yeah, I know that I am not always the best at explaining things. And, you know, that's okay, I don't have to be
[00:01:14] . But to help with that, we're going to actually have Dan Juden, who is basically responsible for the whole docs team on Solid to help me out here, because
[00:01:30]  he is great at extracting the the useful parts for teaching and helping people actually understand what I'm saying. So hopefully, together, we can answer a number of those questions
[00:01:43] , and kind of, you know, make these topics a little bit more clear for people. I have to admit, I always start with this week in JavaScript. And that
[00:01:58] 's usually like, straight into the deep end. So I'm going to try and be a little bit more conscious of that tonight. just specifically, because I think we
[00:02:05] 're going to kind of backpedal a bit and talk about some of these concepts at a more fundamental level. But, yeah, definitely something to think about, especially considering
[00:02:17]  that the topics this week in JavaScript were kind of technical. So, anyways, without any further ado, yes, it is a mojito tonight. I mean,
[00:02:32]  I'm going to invite Dan here on the stream. Hey, is it working? Yeah, we are here. Cool, cool. Yeah, it's funny, because the
[00:02:44]  thing about this week in JavaScript is that half of it is like this super complex technical side, which is like, we're innovating on this front, let me tell you
[00:02:51]  about it. And the other half is like gossip and drama, which you need, like, no technical knowledge to understand. Yeah. So yeah, hopefully it's enjoyable
[00:03:03]  for people. And yes, no, tonight is not a magic stream. I'm sorry. Maybe one day. hey ryan all right well i guess i i i
[00:03:13]  got uh i got enough here so that we can actually get started um so what are we doing here 320 yeah actually i'm running late so yeah let's just david's
[00:03:25]  like we love the drama david david's like i make the drama uh yes um oh right that though yeah there was some fun i wanted to find that astro
[00:03:39]  tweet um the one the one about uh the astro solid we'll look for it in a minute yeah there's some drama in there anyways let's let's let i'm
[00:03:47]  gonna share my screen here and we're gonna um we're gonna get into this week in javascript of course my luck is this isn't gonna work like that one other
[00:03:58]  time that it didn't work no we're good all right all right so this week in javascript for me started scrambling tuesday morning because netlify um
[00:04:11]  announced that they were releasing their new edge functions and to be fair i i knew it was coming um some of the frameworks had gotten some early access and um they'd actually reached
[00:04:23]  out to me towards the end of last week and i was like so busy trying to get ready i i get ready for the stream and whatnot that i didn't actually get
[00:04:33]  to looking at it till monday night and i was working on it and i found a few issues and i was like okay i can't release this and then tuesday morning
[00:04:43]  it was out and i was like oh crap okay i'm gonna figure this out um and uh yeah the announcement went out and i started scrambling uh to get uh my
[00:04:51]  my hacker news demo up and um managed to do it but the the the kind of and if you didn't see it we posted it up it was the kind of the typical
[00:05:02]  solid start set up with uh um typescript jsx you know on top of beat um there's the whole streaming ssr at the edge that was kind of cool i
[00:05:11]  didn't realize they had streaming until i actually was like in there playing with that i was like oh my wait a second there's the streaming interfaces so kind of discovered it
[00:05:19]  without any docs um figured it out you know the whole thing with the suspense stuff code splitting and this is actually the netlify stuff built small some of the smallest uh payload
[00:05:29] s we actually have um it's it's i wrote 12.6 but yeah it's 12.5 kilobytes of javascript on that initial page load um but
[00:05:36]  the the one thing that i found was that the streaming wasn't compressed um essentially they weren't g-zipping the stream responses which was a little bit awkward for you
[00:05:48]  know the kind of performance testing i do um but uh this actually pushed um the team um at deno um to actually get streaming in and they they they actually added it
[00:06:04]  um and released it today and i didn't have to do anything this example now um to my knowledge is fully streaming i mean we can take a quick look here and by the
[00:06:13]  way one one thing like this all of there's no node here this is all dino so like the is that true like the the solid function render to stream or whatever solid
[00:06:23]  ssr function you're calling that's all running on dino yes yeah yeah exactly yeah the the i it was very similar actually to the workers api so it
[00:06:33]  was a very quick um lift and um set um here but yes it's completely dino um and yeah i i mean let's let's quickly do here i mean maybe i
[00:06:44] 'll explain what i'm doing a bit more later but i just want to i want to double check that everything's good but yeah let's quick do a profile and what
[00:06:53]  you'll see here is html response is this big blue thing up here resources are loading before it is done so yes streaming is working if we go in the network tab
[00:07:07]  um and look at all yes 6.2 kilobytes so our page is small it was like 30 when i did this release and we'll see content encoding gzip
[00:07:18]  so they're doing gzip here um on the response what i was seeing before was asking for gzipped or deflate with accepting coding but getting not getting that back so
[00:07:31]  now we have a fully functional um example and i have to admit um it looks pretty nice um i'm pretty i'm pretty stoked on this actually actually i actually made a
[00:07:44]  straight dino deploy version 2 and added that adapter so i was about to ask you like does this work on dino deploy yes we added that adapter this week as well um
[00:07:53]  but let's just do i just want to see we got cloud flare here too so we we've got these both kind of sitting right next to each other um and yeah
[00:08:06]  i mean one thing that i found i don't know if it's the api location or whatnot but yeah uh yeah these i mean was this solid start yeah this is all
[00:08:18]  solid start yeah i just yeah i don't know why that what's going on here this is you know what my problem is i i should not be doing this in a
[00:08:27]  normal browser window you should always use incognito because like your extensions or grammarly is mean i use uh loom and loom sticks dom elements everywhere so yeah let's
[00:08:42]  let's not let's not do that usually i always have this but let's quickly just do a look at the the the profile timeline here our cloud flare end of our
[00:08:55]  netlify here oh that looked fast i think i think we're talking we're all talking holy crap that was fast what what happened there i've never seen that that fast
[00:09:10]  67 millisecond first paint and you know and this is the lovely part about streaming right and i'll maybe explain more in the late in the end and then it's all
[00:09:24]  done by 131 milliseconds i don't know i think that might have been a bit of a blip um where yeah what our cloud flare was 228 and force 34.
[00:09:36]  let's let's let's give cloud flare another shot here i think we can do better um or not yeah here we go this is more typical 130 first paint and then
[00:09:50]  we're kind of all done around 3 40. so yeah i don't know what's up with that maybe it's this hacker news api for for this demo this um
[00:10:00]  netlify edge version is the fastest that we've seen um in terms of um this to be fair this is like i just mean locally for me so i think it
[00:10:11]  all depends on where the edge locations are um and yeah this is one of the things by the way about edge that makes it hard to wrap your head around is that unlike traditional
[00:10:24]  server side stuff where you have your lamp server or your node server you can't do edge locally the entire point of edge is it's somewhere else special close to the user
[00:10:35]  and so you can't like see it uh or conceptualize it unless it's literally running on you know netlify or whatever yeah and i mean we could we could probably
[00:10:47]  do our our mean example and don't get me wrong this is not going to be as nice as those astro scores we saw you know a couple of weeks ago or
[00:10:56]  even marco i showed last week with the split components we we got into the low 80s without doing any kind of deferred stuff which again we'll talk about more later
[00:11:07]  but i don't know i i mean i wouldn't be doing my due diligence here if i wasn't showing people on stream uh netlify versus cloudflare yeah
[00:11:17]  um you know so this is this is a little fun for for for people one thing about oh all right that was the remix example that was my bad oh it's okay we
[00:11:29]  can show off how bad remix is wait what oh no that's not what we're doing sorry sorry don't go there you know what the solid start svelte kit and
[00:11:37]  remix are all basically identical in this example okay i was like 36 i was like wow that was just an unlucky run right okay 54 for solid and actually you know what i
[00:11:50]  think what we're going to see here is when the load is heavy we're hitting almost a local maximum on spas it's basically going to be the same in every framework
[00:12:00]  and it's going to be the same in every edge deploy or whatever like when we at least in this tool when we get here um like you you mentioned that there was
[00:12:14]  like a good run or a bad run do you have to run this like a hundred times to get a good sense of what's going on uh not often usually within three the
[00:12:22]  thing is there's just like there is some inconsistency here i yeah i mean okay there's a 48 i mean we can run it again we saw last time when
[00:12:34]  i did this that all the frameworks got about 47 including this run got 47. my gut is there's a there's a range plus or minus about there's a 10 point
[00:12:46]  range so if you run it enough you'll see the different range so we got 50. let's just look at the numbers here i don't this this is suggesting the
[00:12:55]  cloud how did they actually like how do they calibrate this thing like how do they choose what 100 is yeah i mean that's the thing these scores sometimes weigh i've shown
[00:13:03]  the client csr killing client-side frameworks like the version with no server-side rendering so because it got such a high contentful paint and again we'll probably explain this
[00:13:12]  differently later but yeah it's just funny earlier i ran this one and i got a 55 and you know this one we just got a 54 i run it again we might
[00:13:21]  get a 50 or yeah you know that remix got a 36 we've seen 50 or 47 on the stream with remix so yeah we got a 47 this time with cloudflare
[00:13:31]  so we're still in this 50 range on this part of this is there's so many pieces where we can actually hit latency like we're depending on not just the worker response
[00:13:41]  time we're depending on the api this is a third party api we don't control that right right so yeah i mean when there's a good run it's
[00:13:52]  yeah we're ballpark in the same range here like the netlify replied faster but spent more time getting to interactive like this is the same code and this is a good
[00:14:06]  point like the hydration costs for these should not be different so i mean how much do you trust this a second different in hydration cost is kind of significant so yeah keep in
[00:14:19]  mind there is this kind of variation okay yeah it's interesting to like think about like how do you take most advantage of being on the edge like i get your third party ap
[00:14:30] i is a good example what about an image hosted somewhere else like how do you make sure that it's hosted here to take advantage of edge i don't know i still
[00:14:38]  haven't wrapped my head around edge properly i feel like i'm a really good i'm a really good like edge beginner um yeah yeah that's good maybe maybe we'll get
[00:14:47]  to it i suspect that might be a little bit out of scope anyways i'm pretty stoked about this because there's there's a lot of performance here um and netlify
[00:14:58]  now joins the ranks of cloudflare and versell who use cloudflare um you know so we have two major players right now on the edge and that's d
[00:15:11] ino and uh cloudflare and um now all the you know the main providers that we go to have edge and they have streaming which means that like they're prime for solid
[00:15:21]  start or svelte if you take it guillaume wanted wanted to show off today that static rendering and svelte rendering was almost imperceivably different um
[00:15:32]  i don't know what kind of page he was rendering but i'm not surprised um either is michael rawlings from marco it turns out that html string and
[00:15:41]  cat on the server which was spelt marco and solid do is much faster than generating a v dom or loading up js dom and rich harris uh weighed in to
[00:15:50]  agree he's like yeah this is one of those kind of under discussed problems with stuff like this shadow dom it's only really appropriate for static content since you need a server-
[00:15:59] side dom implementation just as web dev community was waking up to the fall hit jam stack right um not to mention you can't stream into the shadow dom so my brain is like
[00:16:11]  breaking thinking about what that means yeah i mean sure that's that's that's fine just to be clear like the post here is saying that running svelte running server
[00:16:23] -side svelte on every request is very cheap so like comparing that to just running your server-side svelte once saving it and serving it is almost no difference
[00:16:35]  yeah and then we've seen some of these benchmarks before right um uh let me see if i can find it isomorphic ui benchmark this marco did these ones
[00:16:44]  but let's see can i see the forks on it um not create fork i want to see the forks oh yeah i was looking for this this week we were talking
[00:16:53]  about i'm like what where's why doesn't solid get a thing in the image well it's because i haven't enlarged it yet 32 forks let me see if
[00:17:00]  i can see it yeah so where's my version because i actually went and updated but look look at some of the names on here evan you made a version he did
[00:17:10]  it true adm inferno svelte love it this isn't the js framework benchmark but this is as close as you got for benchmark that for server-side rendering today and
[00:17:21]  there we go ryan solid's version and oh don't go to my profile oh we don't you don't want to talk about the new github 3d
[00:17:30]  landscape model of your commit graph have you seen that no i i don't think i have yet but what i do want to do and i'll give it is is go to
[00:17:40]  my updated branch where i actually updated the frameworks and ran the results and um have not updated these graphs but you can kind of see the advantage of using string over um most
[00:17:55]  of you don't don't get me wrong inferno is fast um yes dylan this benchmark can be better but it's it is the best we have on the server side
[00:18:10]  stuff unfortunately for the raw rendering you can see it right here though look at this marco 8000 pre-act 900 react 800 it's like 10 times faster rendering on
[00:18:23]  marco view does a valiant effort at about 2600 so that you know and inferno about you know three three and there's actually two benchmarks the first one here the
[00:18:34]  search results is actually an ebay page so it's a huge amount of static content so this really taxes um more bdom type things because they build a bunch of notes that
[00:18:43]  you don't need solid 22 000 and svelte actually isn't the best on this one um i i've i've been kind of helping i kind of pointed s
[00:18:52] velte in a direction where they have a pr that will increase their server rendering by about four times so they should get very close to the marco numbers if when they merge
[00:19:01]  that pr um but yeah uh the you can i mean this kind of spell actually actually undermines what i was trying to show here um about the veto on being slower than
[00:19:13]  string king cat but you can look at solid and marco to see what performance ssr looks like i'm saying that like the the posts you know with still being a
[00:19:22]  lot faster than you know yeah being a lot faster than the react is kind of like shooting fish in a barrel yeah because i mean in this case view has a better argument to
[00:19:32]  the same thing and they use a v dom yeah exactly right and and to be fair yeah view actually has made some nice improvements on ssr like even here svel
[00:19:44] te is 6 000 view is eight is 8 000 and inferno is 24 000. the color picker is a much simpler test it's just like a color picker thing
[00:19:54]  and it's a more dynamic test but you can see that right here marco 20 000 you know uh inferno actually this is inaccurate because i actually looked inferno it
[00:20:03]  has a bug where it's not escaping a certain thing it should be escaping its real number it should be more like 18 000 here it it's actually leveraging the fact it's
[00:20:10]  not escaping something there's there's an issue here um but generally speaking inferno is very fast for a v dom and it's super optimized so sometimes it's not just
[00:20:22]  a v dom thing but that pre-act and react or like again like what's this four times slower than marco and more like 12 times slower than solid um so yeah
[00:20:34]  i mean when you when you kind of get away from like it's we're talking order magnitude super side rendering performance difference um like when we're when we when you're
[00:20:47]  going to these string renderers well i guess except svelte but um compared to the v dom generally speaking i like svelte's an outlier on the string side
[00:20:58]  and inferno is an outlier on the v dom side i mean the guys who wrote inferno know what they're doing i'm a huge fan everyone knows that um if
[00:21:06]  if someone's going to show you that the v dom is capable of amazing things it's it's gonna it's gonna be that and i know dom gets a lot of credit
[00:21:14]  because of the initial design but even the people who currently maintain it he attracted some of the greatest minds in on like the v dom side in terms of raw performance like don
[00:21:24] 't get me wrong react team is actually incredible people under credit that hugely um they're trying to this is a raw rendering benchmark they're concerned more about full application considerations but when
[00:21:36]  it comes to raw speed you know the kind of stuff that um that you know guillermo is talking about here um yeah i mean this is the ceo of ur
[00:21:45] sell right yes this is the ceo of ursell um this is kind of like uh strings are where you want to be as i said um i mean i'd love to
[00:21:56]  do more benchmarking here as i mentioned like svelte's good but um i think both of my frameworks are are much better so uh we we we can do more
[00:22:07]  more you know like you sign mutatingly make the argument that we can do better benchmarking and that we should probably move on from benchmarking yeah i mean it has some
[00:22:18]  value for the maintainers like like well i don't think people should base their framework decisions on this like oh completely like like unless there's a business case to be made
[00:22:31]  don't worry about it you know and observe your own code look at your own bottlenecks it's your you probably your bottleneck's probably somewhere else but for library maintainers
[00:22:42]  the best we can do is give you the best like floor or whatever like like give you the best um stuff to work with and for that reason benchmarks are great for us
[00:22:53]  like yeah i love it i i sat there when i my first version of the solid uh ssr was using js dong it's hard like when you have a reactive system
[00:23:03]  and all this stuff as using reactivity on the server when you have all this stuff you're just like okay well that's where i can start and actually that's where
[00:23:10]  quick is kind of today um you kind of just have the system you're like okay let's get server rendering and you do it and you're like yes i got there right
[00:23:20]  i worked a bunch i just kept on peeling back and benchmarking and testing and testing until i get to a point where um solid arguably has the fastest server rendering um today of
[00:23:32]  a javascript framework and it was through those benchmarks and i've seen this again happen even the client the js framework benchmark uh major props up to uh um to uh
[00:23:41]  why is his name escaping me right now uh he he's he's big in the con solid discord um he he's he's been working on a reactor framework very similar to
[00:23:59]  solid and volby is called and he's he uh he's managed to uh actually get up in front of us um uh part of this is a bad run but it
[00:24:10] 's very comparable and compared to composite which is also based on i think dom expressions and some stuff we've seen in the solid community i've seen three or four people over the
[00:24:21]  time come in and build their own reactive render from scratch and then learn all the lessons through using the js framework benchmark yeah fab fabiano yes thank you yeah oh that's
[00:24:31]  yeah that's that's this that's him that's awesome or fabio maybe yeah sorry yeah he the bobby or i think it's called this is is what is his
[00:24:40]  doing and i mean this even goes back earlier sinuous um it was a fork of my hyperscript version of solid um but he he again tuned it to make it smaller
[00:24:52]  than what i did like incredibly small um let me see where he's at yeah it sounds like he's two kilobytes smaller um than than solid um you know so
[00:25:03]  like these guys yeah it's been three or four times use this benchmark as a way to confirm including myself we all use this to define the most optimal ways to render the
[00:25:17]  dom you know um in a sense you're using it to compare to yourself like you're using it yes way the engineering cost you know the the cost of these engineering decisions yeah
[00:25:27]  that's how we learn all right so yeah don't people you know don't just like go you know there's more to the life than benchmarks but i mean it's
[00:25:39]  a hard challenge and i i like even blocked on this is a beat on right here look at this uh i mean there's these numbers are all really close we're getting more
[00:25:49]  and more entries up at the front so like yeah and every run's a little different so that's like the difference between these is kind of more accented than you'd think
[00:25:57]  like maybe i should get rid of the the stuff that's not real but yeah blocked on where's where's elm my favorite javascript framework um not that far back
[00:26:08]  right here cool cool elms 131 so if my it should be very close to svelte yes svelte is 125 and view should be yeah view props on
[00:26:18]  them look at that view got in front of svelte recently um so yeah uh yeah so i mean it's it's just one of it's just one of those
[00:26:32]  things of course if you guys don't know elmo stack is my meme stack where you use elm on the front end and ok on the back end so you get like
[00:26:42]  this amazing functional programming stack but yeah my point is like there's different technologies and and different approaches and this kind of stuff pushes innovation like this is the fastest vdom implementation
[00:26:58]  we have ever seen um it actually got faster than a reactive thing i knew it was theoretically possible i wasn't sure if it'd like sharp in front of solid or not but
[00:27:08]  i knew that conceptually there was more we could do with the vdom so you know this is really really quite cool um i don't talk about micado much because it
[00:27:17]  kind of is not doing the same thing as the others i think it's it's kind of this one probably deserves like a 772 it's not the same but um
[00:27:28]  generally speaking we have a lot of different approaches here and i think it's it's uh it's really cool anyway sorry tangent but just understanding that benchmarks still have a role and
[00:27:42]  that performance is still a real thing okay let's continue with this week in in javascript a little bit then yeah i'll butt in less it's it's fine
[00:27:52]  people people like this stuff okay so yeah taylor hunt released another article um and he he was basically explaining why he didn't go with a single page app router but this is
[00:28:06]  actually a good article um talking about the benefits and trade-offs of single page app routing versus multi-page app routing um which again is a topic i want to cover today
[00:28:15]  if possible so um i quite enjoyed this because it was a lot like rich harris's uh transitional laptop from last fall and i think it just puts into into perspective that
[00:28:26]  we're always dealing with a lot of trade-offs um and honestly that that talk about routing got me thinking again because again i'm going to reference about the docs i think
[00:28:36]  people should read these things if they get a chance but eager uh miner if you guys are not familiar he is one of the core he was well he was one of the core
[00:28:45]  maintainers i i almost call him like a lieutenant um uh so to speak of of the angular team like angular is one of the biggest uh framework dev teams so you know
[00:28:54]  saying you're on the angular core team might mean you're pulling a couple dozen people or something um igor was like one of the you know main people there you see you
[00:29:04]  can go online find his conference talks about he recently moved to cloud flare to redefine how the web works on the edge again edge big deal if you know if you're playing
[00:29:12]  keyword bingo and he he started he described the different javascript frameworks as different generations and he said like we're currently on generation two but generation three is coming in
[00:29:22]  and the way he one of the things that was interesting for me is i kind of i saw some of the generation stuff like i like generation zero like the classic websites which you
[00:29:33]  know that was a thing and i saw the single page apps and that was another thing but then i i i thought we're like we're going on to the third thing
[00:29:41]  now he added as something in the middle he said there's a difference between the single page apps that were around in 2009 2010 and then the ones that were kind of around in
[00:29:51]  2015. even though react kind of crossed those boundaries from his perspective there was actually a shift when like the next js of the world came out and it was funny because i
[00:30:03]  wouldn't have made that distinction before but once he said it i'm like he's talking about routing he wasn't talking about routing yeah no igor is like and the article
[00:30:17]  by the way you know even if you're you're not so interested in like the the generations of front end just to see his perspective someone who built it from the beginning
[00:30:27]  to now was it was an amazing article yeah yeah no for sure and he it's very human element to it he actually talks a bit about his struggle and his journey um so
[00:30:35]  it's a great article overall but i i for me it when he made that split i i've been immediately lined it up to routing because there was a difference between gen one
[00:30:44]  and gen two you couldn't really do the same kind of server side apps that you do today when all you had was hash state in the browser we needed real urls we
[00:30:52]  need a push date and if we even though he didn't really like he in my mind almost invented a new generation it actually aligns exactly with the paradigm shift in routing
[00:31:05]  and what i've been saying is that there is a paradigm shift in routing happening right now um so this was really actually quite exciting for me um because like once it clicked on
[00:31:15]  me i'm like like this is just even more emphasis on that of course what ended up happening is um it pulled out you know the htmx crew and this
[00:31:26]  is basically like the future of like gen zero i actually like this image a lot um it's it's kind of a funny thing and i i gotta give them some props here
[00:31:43]  on how how they're approaching this i mean the middle is supposed to be next js right like yeah yeah exactly this is this is like the modern kind of thing you know
[00:31:56]  you have your apis over here and then you have your your um server mvc model and they have a client mvc model and there's x you know you
[00:32:05]  know what i mean like yeah the component model and then what they were saying is just go back to the beginning and look what they did they actually removed the javascript
[00:32:13]  so it's interesting there there is some proponents of this kind of side of things um i think it's good for some things i think there's a reason why we ended
[00:32:26]  up here i think we can do better but not necessarily and by the way the differentiation made in in igor's article that gets back to something that i mean something i learned
[00:32:37]  from you which is that from a beginner's percept perspective next js is not a spa next chance is marketed to us as like look we're pre-rendering your thing
[00:32:46]  and so it's different um but like in your mind it's it's all part of this spa generation but you can differentiate in the sense that well it is letting you do
[00:32:59]  some like server side client side routing yeah magical magic now we have a differentiator one two it's funny i just never crossed my mind like that like even swix's
[00:33:11]  article the the three ages of javascript he he he put one and two together himself i think the one and two split was much more obvious for the angular team because they
[00:33:21]  were there at the beginning of generation one with angular js and they came in right as gen two was like starting to take off with angular two like they actually made that switch
[00:33:35]  over that gap i don't think they were necessarily the definers for the second gen but essentially they were there right at the beginning of gen ones and for that reason it was
[00:33:47]  very clear to them what the difference was where the age lasted longer for them so they could cut it in half like well yeah and there was a difference there was a critical
[00:33:55]  difference whereas if you came up with react you might have just saw react as like leading into gen 2 and in a sense it was all just the same gen i mean i've
[00:34:07]  seen this before some people this happens all the time actually people kind of go to me and they're like react was revolutionary like jquery and then you had react right
[00:34:17]  they like literally skipped gen one like i'm like no the react was amazing and it and it was a game changer but it was actually like from my perspective and i've talked
[00:34:31]  about this a bit before it was incremental like like there was this generation one but for a whole group of developers coming in they just like skip that generation one was a thing
[00:34:40]  yeah it's it's it's funny but yeah i mean i've talked about mbm mbvm and mbc this is at least that knowledge is stuff
[00:34:53]  i don't feel like we need to talk about today because it's it's not part of the future of web dev it's the past that might not actually matter as much
[00:35:01]  but yeah so uh is there anything else i can talk about before i go there yeah yeah i'm before i'm going to go there i'm going to talk about people
[00:35:11]  voting for solid hack um no it is true though if you get a chance everyone should try and vote for a solid hackathon um it's you know i think there's been
[00:35:20]  over 50 submissions and you know you know show support to people the participants check out the projects a lot of fun um i saw some people tweeting and talking about it this week
[00:35:31]  which is great um so definitely check it out and also while i'm at it i was on js jabber which was a lot of fun i was listening to this today i
[00:35:38]  think it went really well i'm glad i was worried um dan really is the driving force i'm not you but he was asked yeah no he was asking those really good
[00:35:50]  like conceptual questions yeah yeah and he he basically um what was i going to say um he had to leave early because it was right after the time zone change and the time zone
[00:36:05]  or sorry that like the clock's changing and they didn't change for him so i was really worried that after he left it would kind of drop off and but the final
[00:36:13]  thing i only listened to the first 20 minutes so i need to go see what happens after he leaves no i mean it was good but yeah i think i think it's i
[00:36:21]  think it's one of those things um okay yeah good we got we got more stuff i'm gonna i'm choosing to skip over some stuff because it's a little technical but
[00:36:30]  we'll get back to it again i do actually yeah sorry this is a tweet where that we were talking about netlify getting the the stuff um and yes they they
[00:36:40] 've got the dino within a week turnaround got all the everything updated um which is amazing okay yes so the big um mishko articles this week right yeah i'm skipping
[00:36:54]  it i'm i'm leaving that i i didn't even have time to get through it yet but it looked really monumental i have to check that out yeah which is i'm
[00:37:03]  leaving that to last um so i'm going to talk i actually released a marco article this week which i am super super stoked about um for people to check out this
[00:37:13]  is this is i've been waiting to release this article for like um like it feels like a while it's so funny because we wrote these first articles in the series in uh
[00:37:28]  november 2020 and now it's march 2022 we went through a redesign through that point but i've we've been benchmarking at every point figuring out the the kind of
[00:37:38]  like the best approaches validating that we're thinking is right i've seen marco go from basically parallel to solid to like back to like svelte like multiple times over
[00:37:49]  the last two years but finally we know that we've taken care of the edge cases and we're in a good place so you know i finally talk about what it means
[00:37:58]  to have a compiled fine-grained reactive system what the performance looks like which i think there's some improvements still to be made but like we're talking like inferno like
[00:38:09]  performance like marco this is the biggest jump i've ever seen in javascript framework here i was very impressed with you you know jumping 30 marco is jumping like
[00:38:19]  a hundred percent on client-side performance and you know it's funny because we do so much work and the end result is really something quite simple you just come you just take
[00:38:32]  stuff and split into functions and have functions call other functions and bye bye reactivity it's funny you write stuff reactively so we know how to break things apart into functions
[00:38:46]  but then the execution is literally just simple function calls you if you change the value of a then you do all the updates you need to do for a and then all the updates
[00:38:59]  you need to do where a intersects with b and that's that's it when we're talking about marco and reactivity is this really marco's foray
[00:39:09]  into like you know that spa area it's interesting because mark you could always build a spa with any mpa framework castro likes to talk about oh you can just put a
[00:39:19]  spot on the page so you could use marco that way because it's kind of why why would you ever do that yeah why marco does this other stuff you know you
[00:39:26]  don't need a client-side router and again when we talk about architecture later on this will kind of make more context so not really but it's nice when your performance
[00:39:37]  is this good no one's going to complain about you being a spa like react has edged up over the years react and marco and angular used to be all the same
[00:39:47]  around 210 and you can actually see some older versions of react in the benchmark i think and they're still out there but react has gotten a little faster each version 17 18 they
[00:39:56]  they kind of got gone a little bit faster to be fair everybody else has gone way faster during that time period you you know back when react was 200 view was about 1.
[00:40:06] 7 view is now like 125 which is like you know amazing but when when your performance is up here no one's going to complain about you being as i guess what i'm
[00:40:17]  trying to say is like in my mind if we're not talking about features relating to routing and building then we're in interactivity the air interactivity territory where it doesn
[00:40:26] 't matter if you're a spa or an npa like does that make sense yeah yeah yeah but i mean the routing is really important like i was getting at earlier so i
[00:40:36]  can almost never talk about these things without talking about routing but yeah yeah well this example has nothing to do with routing it's interesting to me for that reason well yeah and and
[00:40:45]  and that's the thing right this article focuses on composability and it focuses on size the reason we kind of did this is someone who commented to me like man solid isn
[00:40:56] 't the smallest at any size point anymore um and they're right before this was solids like strength you know around five to ten to do npcs on the page so roughly
[00:41:08]  multiply that for two to three for components like so around the 20 component range solid was the smallest framework it was still respectful kind of going up um and to be preact is
[00:41:19]  and solid kind of preact is actually pretty small here and you know they kind of keep neck and neck but marco is now taking over the area and gone even a
[00:41:26]  little further on where solid was this the um the smallest and cut into svelte considerably like marco optimal range here between five to 20 is exactly what you want for an
[00:41:40]  islands or partial hydrated framework because you don't if you're up to like 80 to do mbcs on a partial hydrated page i don't know what you're doing like
[00:41:49]  that whole point is you don't ship the javascript and that's why this is a funny article for me because marco six is really good in an area that
[00:41:58]  it doesn't really care about like like it already doesn't ship 80 of the page it's like astro you don't ship 80 of the page it's the last 20
[00:42:08]  and it's like at that point when you have options like marco and solid and you know and svelte here um especially on the smaller end like and preactive
[00:42:20]  you know it's kind of just like why are you doing anything else um i think comparing marco to astro is interesting for this kind of reason where marco is opinion
[00:42:33] ated across the stack so to speak and so you get you get interesting situations like this where it's like oh yeah because marco is so great here it doesn't need to
[00:42:42]  be as great here but it might as well be you know what and the thing is yeah last week we threw the gauntlet or not two weeks ago we threw the
[00:42:50]  gauntlet down the solid marco demo and you know solid's the best in this range um the solid marco uh or so the astro um solid demo was the
[00:43:00]  smallest to do mbc or sorry hacker news art um version we'd ever seen it was five kilobytes it was 4.9 kilobytes essentially i think
[00:43:09]  marco can do better there but i i think it's really cool to see partial hydration with a super small super efficient performance framework like it's it's cool that before like
[00:43:19]  before astro like you look at marco and just be like i mean it's funny most people wouldn't look at marco but you look at marco and just be
[00:43:27]  like i'm never gonna beat this like like i don't care how fast my js framework benchmark performance is or any of this when that page loads nothing's even close i
[00:43:37]  i mean i make comments like this and people think oh you're just being super ball no it's true for the it's like the biggest hidden secret in javascript frameworks
[00:43:46]  but for like the last like five seven eight years like for page loading and javascript frameworks marco has just absolutely killed it like it's just not even close it's
[00:43:56]  it's almost embarrassing you know people were like oh what do you think of ssr and next and stuff and i was like oh i don't know it's like
[00:44:01]  a two out of ten like you know and i'm not thinking things that salt is any better i'm just saying like marco was like that much better in that range and
[00:44:11]  then astro is kind of interesting when you have frameworks like solid or pre-act or svelte you you you actually can do a really good impression of like old mar
[00:44:21] co of course new marco in that area is is is going to be a whole game changer and there's going to be a follow-up article when we talk about
[00:44:28]  this but i just i this was a fun one for me because i've been waiting to to show you what we've been working on show you how you know this this this
[00:44:36]  is the area that i've been excited about and i've cared about you know um when i joined the marco team it was like how do we change how the browser part
[00:44:43]  works that's been that was kind of like the the thinking why um when i joined on the team and to see this is incredibly feeling of success to me even though a
[00:44:56]  lot of credit goes to him obviously michael and dylan it's just like we took a completely different framework philosophy approach you know html first you know like that
[00:45:10]  almost something on the svelte side of things and show that you can just you can just jump the performance all the way up the tree like you you can you can get
[00:45:20]  here multiple ways that always excites me i i was showing you about the vdom you know how you get that performance out of block dom like this performance is there for
[00:45:32]  anyone if they if they choose you know it's it's obviously stuff like the islands the hydration are a trickier question but i really believe that it is possible with the right
[00:45:45]  architecture maybe a fine-grained one um that you know view or svelte or you know others could potentially you know get into the type of performance that um marco
[00:45:56]  and solid have been enjoying you know um so yeah that's to you guys i know dylan's here and also i just want to say we're moving forward with like
[00:46:06]  the tags api right like the marco dsl system that you've demoed in the past yeah yeah yeah exactly yeah for sure for sure yeah and i i always loved
[00:46:17]  that uh you know i you know coming from things like view like i thought you know making turning a variable into sort of this like declarative html tag and and
[00:46:28]  just yeah i i love this i don't think this gets enough credit i don't think people talk about it enough i think it's super fun from a design perspective to look
[00:46:37]  at this and be like okay this is kind of cool html is everything it's also cool about this is and the things that get kind of over the thing and i
[00:46:46]  won't dwell on here too long is when you have stuff laid like this when you can just like have the the effects next to the you know the state next to the
[00:46:54]  dog like you just cut and paste sections of code and because it's fine grained like solid it just runs once and as you know the state can be located anywhere there's
[00:47:06]  no no hook rules or anything you can nest it in a for loop you can do all that with solid as well the jsx doesn't always lend to it but you can
[00:47:12]  always just like make a for loop and then go okay i'm just create signal inside like that will work it takes the it takes the the view slash svelte d
[00:47:21] sl thing further because you know in in in view install your dsl is connecting your markup to your state somewhere else here because your state is part of the markup it
[00:47:31]  feels so natural it's cohesive it's crazy because this unlocks something you know uh incredible from an editing maintenance stuff i'm it it might not even be clear here but
[00:47:45]  marco's syntax is also the most turst you know svelte prides itself a lot of being like write the least code marco now is write the least code
[00:47:52]  um and there's even a terser syntax if you're crazy um called concise mode that works like pug like whitespace matters but essentially this is actually the easiest approach
[00:48:02]  i've ever seen to refactoring and code writing pretty much ever um yeah dylan dylan says we we made reactive scripts some people call it html and like
[00:48:11]  yeah sorry for calling html like i see what you're doing um at its core the idea of a reactive script is like everything is declarative by default and that's
[00:48:21]  what this is so and that's also html is html is just like yeah yeah people people won't appreciate this right away i hope they do catch on
[00:48:29]  but essentially the when hooks came out and you saw the way the colors kind of move together and you could co-locate and you had to write less code um it's
[00:48:37]  the same here solid has those aspects but the jsx is like 80 but not 100 of the way like maybe jsx2 would do it marco has their own syntax so
[00:48:47]  they're able to just you know we were able to just build it to this purpose which is crazy because um it it it kind of as i said it unlocks this this
[00:48:56]  capability that um you've just never seen anywhere else like basically like the old like i i forget i had an example with like effects and stuff that i was using in all the
[00:49:08]  frameworks and when you had to edit something you had to edit in even with hooks you still have to edit in four unique places in the code they might be next to each other
[00:49:15]  they might have been part of the same hook like changing a dependency and all that kind of stuff but with marco it was literally one location like you and because it's
[00:49:26]  one location you can just cut and paste it like yeah i i i heard um i think dylan on a podcast and they were they were really grilling him on like so did
[00:49:37]  you guys like spend thousands of hours making vs code extension for this and he was like yeah it's a pain point um so like there there are like rough rough downsides
[00:49:47]  to this approach but you know if you have if you have those resources and if you implement those i mean it it it feels unique but it feels designed for for a purpose
[00:49:58]  like yeah and i really appreciate that kind of design for me personally and i i have actually this is kind of leading and i have a blog post uh or another article coming out
[00:50:08]  next week actually talking about marco and solid this is an exemplification of a direction that you can think of like svelte had kind of showed people like oh compil
[00:50:18] ers are the future and everyone was kind of on that path you know a lot of people thinking of the future marco can kind of show whenever i always say when i
[00:50:25]  see marco i see svelte's future potentially like it's like svelte actually added const um you know mark const uh tags or to to spell very very recently
[00:50:36]  it's and i i that right because obviously we we've been designing this and we had a market tags api last summer and like like this is this is this is our
[00:50:45]  dollar sign actually our script letton marco was actually kind of with that we've had this for years and years and years and svelte's kind of like discovering this
[00:50:53]  and i i i know it's kind of funny like that's on that side and sometimes when i view on the reactive system i feel like they're discovering a lot of
[00:51:01]  stuff that we knew about from the solid side um and viewed philosophically maybe more on the svelte you know kind of side of things but what i'm getting at is
[00:51:10]  i think there's some competing philosophies here and i mentioned what excites me is the fact that all paths lead to rome you know maybe slightly different and i don
[00:51:19] 't know i i for me right now there is still maybe two philosoph high-level philosophical things and i think that both approaches i want to see where they get to and for
[00:51:30]  me one approach to that the kind of just javascript um you know you know localized almost runtime compiler is part of the equation but just like you just write javas
[00:51:45] cript um code like solid react is very much on that side and marco is showing what the the compiler owns the world i'm a language side it's like framework versus language
[00:51:56]  and um yeah i i like the fact that we can explore both of those so yeah i think i think this is super cool um yeah sorry which we're gonna move on
[00:52:11]  to the next topic here um but yes um we're gonna talk about marco a lot in the coming weeks especially as the we make progress in the alpha i'm gonna talk
[00:52:21]  about hydration which is the last topic here i want to talk about because we yeah michiko hebry released this article um and actually helped him a bit with it on the
[00:52:35]  editing side to kind of make it hit but i i noticed that i because i've i've read things he's written before obviously i'm a very writing oriented person and like
[00:52:45]  i could tell this was a team effort and i appreciated it a lot yeah i think i think this this was this was an interesting one because we had to kind of push
[00:52:54]  the push it a little bit because misco had the idea he knew how to explain the problem really well he had the the whole explanation of it but the tricky part of this
[00:53:05]  kind of article is you don't want people you don't mind if people get kind of mired in the details when you're talking about the overhead of hydration but you don
[00:53:12] 't want people to get too mired in the details when you're talking about the solution because otherwise if the solution is as complicated as the as the problem you're solving
[00:53:21]  people are just going to turn off yeah it needs to feel like you found the magic bullet even if behind the scenes the magic bullet is pretty complicated exactly so that was my biggest
[00:53:31]  contribution i i read the original article and i'm like you can listen to me or you're not misco but i want you to completely change the order of the sections and
[00:53:39]  and and pull everything about the solution out to the to towards the end and and focus on the overhead part and then kind of just lay out the solution you know once that
[00:53:49] 's happened so we aren't kind of you know and at the end you know that and with that kind of input um we ended up with this article which i think the happiest
[00:54:00]  thing i about this article and i don't want to talk too much about hydration versus resumability yet is that people who classically are gen zero like on the classic
[00:54:12]  mpa side got it right away we've had a hard time explaining this in a way that's compelling um the whole that's surprising to me because i would think they also
[00:54:23]  don't like hydration as this almost but they read was they read the article for what it was supposed to be the point of this article is you're not really hydrating
[00:54:34]  when you're resumable and generation zero frameworks didn't hydrate generation one framework you were afraid that they wouldn't understand that resumability is more like that right yes
[00:54:47]  and and that's what they saw here i actually i didn't even it wasn't that afraid i just wasn't sure that like this was a new thing for me a bunch
[00:54:55]  of them came up those people came out of the woodwork and they're like yeah we've been doing this for like 15 years and it's like yes you have because
[00:55:03]  they start talking about progressive enhancement and all this stuff and they're like this just sounds impressive handsome but the the key key key key difference here they get to stop and think about
[00:55:13]  is you're authoring your whole app the way you author like react and then you know kind of same idea with marco you just write an app you know javascript
[00:55:21]  app full app like not not even worrying about islands and stuff like you're literally just writing an app and then it hydrates like jquery that was the incredible thing
[00:55:34]  about about quick from you know what i what i've understood from this so far is like they've managed to have that you know almost paradigm shifting level optimization just be an
[00:55:46]  implementation detail so you just like write your app the way you would write it and like they take care of the rest and that is right yeah i mean that's groundbreaking yeah i
[00:55:55]  mean yeah i mean if we're gonna call that groundbreaking i'm gonna call marco groundbreaking too because basically i think marco broke the ground before anyone else was breaking the
[00:56:04]  ground what i mean is like marco's partial hydration was automatic in the same way you'd write the code as normal and then marco would discover the islands for you yeah
[00:56:14]  yeah like with astro we we think about it we choose it it's deliberate you know with this it's yeah right exactly but the the big thing is yeah this is more
[00:56:24]  granular so and i think that's the key once you got to the granular once he basically said look we're not doing anything about attaching event handlers i think it finally clicked
[00:56:34]  and they're just like yeah that's that's what we do except this is crazy because it's actually this full declarative app like if the other option is basically having
[00:56:44]  two apps you know render on the server and then like have a javascript layer on top unifying that yet getting the benefits this is this article really shook up the conversation
[00:56:55]  and there's a lot of clarification here enough that i that this kind of almost encouraged the stream a bit um you know it was the comments uh you know about you know
[00:57:05]  i don't understand what you're talking about but it was also just like i feel like i'm gonna have to run an article like wtf resumability because yeah i
[00:57:13]  also like when i got to this article i was like i need a weekend for this like i'm not reading this like on wednesday at 5 pm or whatever right and it
[00:57:21] 's part of part of it is you know i've written about resumability in this hydration thing before and more from a human angle talking about how both marco and
[00:57:30]  quick independently stumbled on this kind of solution and almost exact same time really and essentially started working on it and recognized that it was like a better hydration but didn't recognize until
[00:57:48]  very very recently that maybe it's not even hydration um but we'll talk about that more it just essentially this was this is this this this has been the conversation basically all
[00:58:02]  week for for me like um actually you'd appreciate this one dan i just retweeted it before the stream um i don't know this article here is talking on hydration for
[00:58:14]  non-technical oh i have to read that i i didn't see that that's amazing it basically it's it doesn't actually talk about hydration at all it just talks
[00:58:22]  about the confusion around the language and i think i'm gonna pull this up right now yeah i i wish i read this just because this interaction actually happened on twitter um i
[00:58:32]  was part of we talked about web components and i think this is you can tell this this this this this guy has like uh he's a humanities student or something like you could
[00:58:42]  tell this at the background like he's taking this very much from a language sociology kind of mentality the philosophy of explaining stuff on the web yeah yeah and look at this exchange
[00:58:53]  foo you don't need javascript frameworks use web components use the platform bar but js is part of the platform what's wrong with using js framework through web components can
[00:59:01]  be used anywhere unlike component x or js framework y which can't be used without that framework that's not using the platform bar sure component x needs js framework y but it all
[00:59:11]  boils down to logging js to render html and handle state events so using the platform then why would you not use a js framework that does a b and c better
[00:59:19]  foo but you can't take the component x and use it elsewhere without a js framework why can you your code is tied to that framework how's that using the platform plus
[00:59:27]  web components are great support for a b and c you can use web component framework z for that you need a webcam framework framework to to build your app how's that different than
[00:59:38]  using a js framework also js framework why can compile to web components too so it's using the platform just as much i mean this is how twitter works like this happens all
[00:59:50]  yeah exactly i mean he has his finger on the pulse of that well i mean this was this is why i posted that web component stuff you know a week or two ago because
[00:59:59]  i was just like this is just dumb you know but this is the conversation you know this is this is this is this is this is this is it so he talks a
[01:00:08]  bit about hydration and talking about reusing the word and he pulled up some etymology and how people describe hydration and okay yeah you you know he's a humanity student when
[01:00:17]  he titles section hydration and its discontents which if you're not familiar like there's a freud uh a freud book called civilization and it's discontent so
[01:00:26]  yeah okay i just wanted to throw this one out here i i'm sure you would approach appreciate this one dan but um yeah i mean it's it's it's tricky
[01:00:35]  right um i mean you made the same a very similar article with transitional apps yeah yeah yeah i i was a little i was a little i didn't get a mention in this
[01:00:46]  one so i was a little bit like uh but i mean reading it i i could re i was reading my art like parts of my article in it so exactly so but
[01:00:54]  yeah i i just like the angle and i like the tone i that's the thing i love about this i i think it's a human aspect and i think it's really
[01:01:02]  important for people to kind of acknowledge that um when dealing with these things and looking at these things uh yeah i mean and yeah i mean i've got a couple more yeah
[01:01:18]  we've already been going an hour but we're almost cool whoops well we're almost done here oh yeah i mean i i love i love the astro and solid covers
[01:01:27]  i just want to like you know uh i'm it's no secret that i'm i'm i'm involved in the astro community and like i will first of all obviously
[01:01:35]  this is my opinion that astro and solid are like the perfect duo um but the way this conversation went was like it was just fascinating and like also like x element gets
[01:01:48]  like a shout out there like yeah you know along the way you know and i'm obviously friends yeah i mean who made it so what ended up happening and with this comment i
[01:01:57]  said i love asterisk only community where we get to argue syntax is more like svelte or jsx and both you right was that someone was their argument about
[01:02:05]  it being the best thing um but i love svelte and excellent would be even better but solid ain't bad and and and i always laugh at this because it's almost
[01:02:18]  anywhere you post something someone's just like but sounds better like it's the best part about this is svelte could not be further from x element they are two very
[01:02:30]  different things right right but it was it was just amusing to me because it's very often has to be part of the conversation right so it has to compare it to svel
[01:02:40] te but but it was it was it's kind of amusing to me because yeah and and often when people on the salt side come in they always like come in oh actually blah
[01:02:48]  blah blah and they over explain and they're probably the people that really annoy you but this on the svelte side they always are just like it's better and they don
[01:02:55] 't say anything else and and so dave was just like okay i'm i'm i'm taking the bait right and it started it started this thing this thing svel
[01:03:03] te and astro share some which is which is funny because astro literally is a variant of jsx right right so it was really amusing to me but i mean i love
[01:03:11]  it because this this this this is the thing if if you use felt and you feel like astro has become your templating language like that's success for astro that
[01:03:22] 's amazing right right like like it is jsx i i actually uh if you watch my stream on astro um i i was actually showing off some code examples and this conversation
[01:03:35]  goes on for a while um but i i there there there's actually like i have a code example in here from the stream and you look at and you're like this i
[01:03:44]  think i'm looking at react but it's an astro file um yeah like but yeah i still the fact that it can be anything for everyone is really cool and i
[01:03:55]  i think people undervalue that i was talking to matt from astro and he was like well we were thinking in the future expanding other syntaxes and let people make stuff more
[01:04:03]  native to them and i was like sure i mean i get it that's a direction but you kind of already are doing a good job if this is what happens if people
[01:04:13]  are arguing like astro is best with solid know what's best with spell and they're arguing about it on a syntax level that that means you've succeeded like that's that
[01:04:21] 's what people are really fickle and fiddly about when that's the argument you know astro has has won because like either way you're using astro i mean
[01:04:32]  like look this this is you know we're talking earlier about like explicit islands versus like you know optimized automatic islands and this is sort of the the benefit of the deliberate islands
[01:04:44]  approach is that you can make them as different from each other as you want um so but yeah i mean that's most of of of of it i had one other tweet
[01:05:00]  uh that i've grabbed that i forgot to talk about um but maybe it'll come up later i'm not going to worry about it too much it's just one other thing
[01:05:10]  happened this week that i completely was not aware of i pulled this tweet up before because i was talking about how different the perspectives were and when i was looking at the gen
[01:05:17]  x gen one thing i was thinking about this right um this tweet again because michael jackson obviously uh one of the critters of remix big on you're really gonna bring
[01:05:28]  back a six-year-old tweet here yeah yeah i know big on server-side rendering big on um you know progressive enhancement all this stuff and this is like the
[01:05:37]  exact opposite just to show how much changes in six years right and but some things never change look at who responded to him back in 2016 trying to explain why ssr was
[01:05:51]  something worth pursuing this is this this yeah this made me oh my gosh this thing about the isomorphic router and then like he uh and it goes on to like make
[01:06:04]  an isomorphic router yeah um and stateless and progressive enhancement like i mean was dylan telling them how to make remix back in 2016. yeah i don't know this
[01:06:17]  this is this this this one just i didn't realize this i focused on sunil's thing about you know because yeah ssr you know and you know other places in
[01:06:27]  the world that have performance things like it makes a difference but dylan was here no one really noticed i think i like these tweets that's why they have now um not
[01:06:38]  that this was actually particularly popular tweet either um you know maybe i go back to the beginning it's like yeah but like it just yeah i don't know this this this is
[01:06:48]  just it's one of those things where like it's funny i've now remember what it was when i was reading that article that was talking about hydration from the like from
[01:07:01]  that social side they took they basically referred to marco like this framework lost in time like like it's like marco's been making the same arguments for 2000 years like yeah
[01:07:14]  right like like like that's what it sounded like and i i wanna like the timing with this was just perfect because i was like i was like i guess it was because
[01:07:23]  if i look back five six years ago i'm gonna find you know or seven years ago maybe i'm gonna find dylan and michael fighting the good fight and people just
[01:07:36]  completely ignoring it like there's like history here no one's gonna do this kind of deep diving but if if you look back you're gonna you're gonna find the the
[01:07:49]  roots of what is like where we are today it's it's it's just it's crazy anyways um this this this is this is this is why building in public and stuff
[01:07:59]  is important in talking about this you you you make kind of a history um you know articles you you see the progression you see the thing i i'm a bit of a
[01:08:08]  historian this way i look at the the stuff because when i solid was something to wear because i worked on knockout and i looked at these technologies and they and how they built
[01:08:21]  up right and for me so uh knockout had something that was really good and kind of ahead of its time and i built solid on that and it's funny because when react
[01:08:32]  hooks were announced i already had eight years under my belt building with these compositional patterns like it's incredible about of experience you get more experience when you have like thousands of
[01:08:45]  people using your framework but eight years is still a lot of time to learn stuff even for a few people and when i looked at marco when when i joined on that team
[01:08:54]  it was like the same thing it's like everyone's talking about this now and obviously i got in a little ahead of those conversations but marco had like eight years and an
[01:09:04]  ebay scale of learning and stuff you don't you don't think they've learned things that we're going to discover all over again with react 18 or with astro
[01:09:15]  or quick like yeah i think there's so much about this i mean you never know when what you're invested in is one day going to become the topic of discussion and
[01:09:27]  the sort of um you know opportunity point that the people that people see and also it's it's it's also like you should keep your eye on who knows what and wow
[01:09:39]  and like who you can learn from like look look look look at this explaining partial hydration to to michael jackson you can use who now is like yeah we're waiting
[01:09:53]  for the javascript to download yeah like it remits is now the forms the forms guy right like we can use forms to to do everything and and you're still like
[01:10:04]  teaching him that principle six years ago i mean to be fair he's old school so he was aware of this i i i think this was this tweet was just being a
[01:10:13]  bit like you know off the cuff you know this it's just it's just funny to me because when you read it out of context like this it looks like exactly what i
[01:10:21] 'm saying right yeah i mean yeah we can give we can give them jason some credit um yes so it's just yeah it's yeah little little little things you find anyways
[01:10:35]  i i think we're done here this was the this week in javascript i want to i want to kind of change over we've been talking too long and we
[01:10:42]  need i think you're east coast right so we're gonna try our best to kind of dig into this as as much as we can so hopefully everyone's still with us um
[01:10:53]  so yeah i i think it's time to close down these tweets yeah it was it definitely leads into what we want to cover which is like breaking down um the topics that people
[01:11:06]  are talking about whether that's rendering um on the client of the server uh routing and of course the the big bad hydration that's what i think for me where i want
[01:11:18]  to start um is looking at the like the of the overview of a page load is what i'm going to call it you know what i'm going to make a little banner
[01:11:27]  for it so that i can actually throw it on the screen overview yeah this this is this is and i gotta give theo shout out i don't think he's around tonight
[01:11:35]  but um he was trying to he was kind of showing people some of these things on stream and i like the way he was talking about it so i i want to kind of
[01:11:44]  go there um on this because i'm going to use like the classic network diagram approach um for a second and i think this is going to help us because we need to
[01:11:53]  identify before we even talk about things the terms that we're talking about like what are all these like acronyms that everyone goes off about when talking about performance and page
[01:12:03]  load and stuff and for me the easiest way to draw this is starting with two lines you know and one line is the user and the other line is the server okay and we
[01:12:24] 're gonna we're gonna do like the arrow thing where we go back and forth and talk about the flow of of just what happens when you load a web page i think because
[01:12:33]  we'll talk about portions of this but this is going to be like our legend um for a conversation tonight because then we can actually is the is the page in the middle by
[01:12:43]  the way because like the page takes the input from the user that's just from the server you you'll see what i'm talking about here because what i'm going to do
[01:12:50]  i mean i'm going to i'm going to just go user server and this might be an oversimplified model and we might have to do some other stuff in a
[01:13:00]  minute but the reason i want to do this is because first thing that happens is we hit a url the request yeah url request so this is like you go
[01:13:16]  to a page okay and i'm going to talk about http because i'm going to talk like basically about like our standard sorry like our standard html page load because you
[01:13:26]  can request a lot of things from a server you can request apis you can request you know a ton of things but i want i want to talk more about um like
[01:13:34]  just a standard web request and actually is anything going on on on thing yeah i might want this eventually you're right yeah i'll i'll be monitoring the chat i have a
[01:13:51]  separate okay so i mean the first thing to do is you hit that page you know we hit this url right and then the server needs to like i haven't decided
[01:14:05]  how i want to show this yet maybe i should just use some colors the server decides that hey i'm going to maybe an orange is a nice color i'm going to spend
[01:14:17]  some time here deciding yeah yeah pretty much uh gonna be like yeah what do i what do i want to reply processing the request right yeah and the reason i'm giving this
[01:14:33]  time is so that you can see like there is some work going on and at a certain point later and we'll we'll dig into what goes on here it's going to
[01:14:42]  go like okay well i'm going to actually respond back with something and that's something is going to be that html document essentially so we're going to respond with
[01:14:54]  the html document it's actually going to be headers first actually to be technical um but like it's going to be it's going to be headers plus html
[01:15:08]  okay yeah what one thing to like notice and that you might sort of take for granted about like the server processing the url request if you like you might have this model
[01:15:21]  of like you know go to example.com x versus example.com y as being two separate programs running on a server and that's not true right it's like example.
[01:15:33] com has one server and when you hit x or y both of those go through the same program is that true um yeah i mean it depends but yes generally speaking um you
[01:15:53]  have i mean there's more details there i i am going to focus mostly on the like applicate like the javascript not even javascript but like like we get
[01:16:04]  to load balancers and we can also get get into like different models of concurrency on the server multi multi-threading versus like node.js is like non
[01:16:13] -blocking async but generally speaking um you you you're hitting one web server it might be a multi-web server and it's gonna you know it's gonna
[01:16:23]  be a route right that's where we get to the like yeah yeah it's it's it's going to know how to handle your request it's not like when i open
[01:16:32]  a folder on my computer and i can choose one file or the other right well i mean you you're the router in that case right exactly okay whatever we we're on
[01:16:40]  the same page okay where am i going uh html headers um and i'm a process this is kind of like parse plus uh render html essentially so this is
[01:16:57]  this is when we we actually can i don't know maybe maybe i'll just do another line what i actually want to do is move this whole thing yeah there we go
[01:17:16]  parse and render html but the thing is as part of this html or perhaps the headers we're going to find out that we need other assets so what
[01:17:25]  we do is we go back to the server again and go multiple times actually but we'll pretend like it's one here and go request request assets and why don't we
[01:17:41]  like send javascript and css essentially like what what what's the differentiator between what is considered html and what is considered an asset well i i mean basically
[01:17:52]  html is literally the html and and i'm being sort of rhetorical here like i want to understand like uh how why it's why it was
[01:18:01]  necessary to like not send the assets because we didn't know what we needed until we needed it right so because there's caches and stuff here generally speaking you're serving h
[01:18:11] tml and as it hits it when i say assets i'm talking about images css out of script i'm talking about all of this these things so the the headers
[01:18:23]  plus html might say something like link rel equals this and then only when that gets to the client um is there actually an interest for the server to serve that file yeah
[01:18:37]  i mean we're not talking about like http push and there's like other ways that the server when it gets initial requests can like pre-warm the stuff um i think
[01:18:48]  some of the newer stuff in htp3 is interesting but push had this problem because it wasn't great at caching validation scenario because there is a cache here so it
[01:18:55]  would over send only the browser knows what it doesn't have okay so there's this idea that if you um go to the same web page again you do not have to ask
[01:19:06]  the server for that css file because you had it from last time yes exactly yeah that's the cache or james file yeah and when you say http let's make
[01:19:17]  that explicit the arrows the way these two things are talking to each other is through http yes yeah that's the protocol here um and usually these assets are pretty cheap to be fair
[01:19:31]  they make so we're going to have this error like there is processing but the it's usually not these are usually static so you i mean sometimes the html is
[01:19:41]  all static as well which shrinks that down but essentially now we respond with those assets right and the reason i want to show this whole thing is because i think it should be
[01:19:53]  clear to you at this point that we didn't get any javascript to this point like maybe there's some inline in the page but generally this is where things
[01:20:07]  kind of start going because now we're gonna again put some time here parse you know basically parse execute parse and execute assets um and we'll just give it a bunch of
[01:20:23]  stuff okay um so let's go parse yes we we got we got some um you know caching headers on your your css will determine that and dylan sort of
[01:20:41]  mocks me mocks me a little bit like you're missing an ssl handshake here you man you know i'm i'm not i'm not i don't even
[01:20:51]  want to go to the network layer really i mean i i'm i'm taking this mostly from the i think level like i think it's safe to say that http is important
[01:21:01]  to conceptualize and the you know network handshake might not not be as important but right but the reason i wanted to show this is that some point some point after this
[01:21:14]  point some point down here you know depending on how long this execution takes we're going to get to a line and at that point it's going to be like there's
[01:21:26]  going to be like a load event now you might be like what about everything else because you might have heard some terms and and we we can we're going to use maybe a
[01:21:41]  different color here and and actually we'll make load event at a different color too because i i i feel like it deserves um i feel like it deserves um to be part
[01:21:52]  of this other color thing um like i believe like scaladross skills are number one but what i want to what should we make these event colors maybe like yeah great i don
[01:22:06] 't know green is okay um and this is the earliest possible javascript event well javascript it's a little ambiguous on where the javascript comes in with
[01:22:19]  a load event but generally speaking once it's done kind of handling all the stuff that um comes in for the page you guys in the chat are the worst see this this is
[01:22:33]  the only reason why this stream might not be the best idea because the people who usually watch this stream a lot of them like are really i i was kind of expecting this
[01:22:45]  and like it's okay um i'm hoping that we can use this as like the fodder for creating more beginner oriented like standalone videos but like yeah i i guess i guess
[01:23:02]  i hope that there's still stuff to learn if you already know all the stuff like the back of your hand but maybe maybe that's not true um so what i'm
[01:23:11]  putting in here is there are a couple things that are actually that we can actually say with certainty and one of those um is time to first bite which is very often abbrevi
[01:23:23] ated to ttfb um and ttfb is and load event are two things that like this can shift a little bit but these are things that are kind of
[01:23:35]  fixed different architectures some of the other stuff happened but we measure time to first bite but the first get that response back and then there's a load event another word that
[01:23:46]  you're going to hear often um here is something called time to interactive or tpi and it is also kind of some sometimes i'm looking at the load event if it's
[01:24:07]  like a client rendered architecture um it might actually it's it's basically synonymous with this load event because usually there's a break um you might sometimes you fetch async
[01:24:22]  data at this point um and well i guess it's i guess it's not fair you're saying there might be a possibility where the load event triggers but we won't
[01:24:34]  consider the page interactive yet yes yeah yeah because like it hasn't rendered so i i at as soon as i'm i feel like i'm doing a terrible job here because some
[01:24:46]  of these things are fixed and the other things actually changed dramatically based on the architecture when so the load event is more independent of the architecture because the idea there is just the browser
[01:24:56]  is finished for now is that fair saying that the browser is finished you know the browser only knows to a certain point like when it when it finishes loading all the initial scripts
[01:25:06]  and running them it's like okay i'm i'm done you know or like yeah you know like when it's in that thing but what ends up happening is like other stuff
[01:25:16]  occurs perhaps like okay you fetch from an api and but you still haven't rendered the page like as if a client rendered page might the whole page might be blank to this
[01:25:28]  point this is why i can't put in the other metrics the other metrics that are important to be to be aware of and we just put them over here is first paint
[01:25:36]  uh yeah i'm gonna write them out first paint first contentful paint and these are super dependent of your architecture you're saying like it's you know if you if you build
[01:25:54]  your app so that um as soon as that parse plus render html happens there's content on your page like maybe maybe it could be even back there uh or or
[01:26:07]  is there is the earliest is like what what's the earliest that your first contentful paint could be don't yeah the first contentful paint technically could be right yeah that's
[01:26:23]  what i was curious about that's the earliest but that could also be your largest contentful paint all of these maybe i just grabbed the whole block could be anywhere on the
[01:26:34]  spectrum pretty much yeah sorry why did they grab it yeah sorry they can they can yeah it's in the wrong place it's almost like i want to move the whole thing over
[01:26:45]  to kind of explain what i wanted to do here maybe i will give me there this whole thing these these ones can basically span anywhere starting from here to like infinity down
[01:27:10]  here like yeah it's a much later okay like they so so these are sort of observing attractive they they i mean time to interactive is going to be after this uh most of
[01:27:23]  the time but essentially what yeah what i'm trying to get at is like these these things could could span anywhere over this time period um depending and these are observational sort
[01:27:38]  of like uh the load of it is more procedural like the browser always goes through a process at a certain point it will say hey i've loaded but this is more maybe you
[01:27:47]  have to understand a little bit about what the page is going to it wants to be before you can say when the the paints happen dylan brings this up there's the
[01:27:57]  dom content loaded and there's a load event and maybe we should look at a real page um i don't have any images on the hacker news page to see what i'm
[01:28:07]  talking about because when you go into lighthouse and you do this little game here you'll see these events that i was talking about talking about um that's what these these things
[01:28:17]  are right see there's dom content loaded and there's loaded on load event i'm usually and again this is you notice like there's some async stuff out here like grammar
[01:28:29] ly like let's not do this and let's go incognito again oh did i already close it okay new incognito window let's do it again um reason
[01:28:42]  she want to show this off is because yeah yeah i guess see look at large contentful paint sitting out here the load event and the dom content loaded are they're they're
[01:29:03]  always around this range i actually look personally for the end of javascript running so what's so what's the difference between loaded and content loaded well dylan told us
[01:29:17]  here yeah but it doesn't make sense after hml and blocking assets are done instead of load all assets initially requested on the page are loaded and see yeah i mean what what
[01:29:26]  is it what is a blocking asset let's talk about that well like um inline script tags um are a blocking asset okay the idea is that like you know when that
[01:29:42]  when that html is first rendered the browser says okay great i need to go grab all these assets there might be further assets that are blocking um oh okay great this
[01:29:56]  was confusing me so you can like like like like here it's like you you load first and then they're still blocking assets and then you have dom content loaded yeah so these
[01:30:08]  events i i mean when you look at them these enough you're just kind of like why did it choose this point i don't know uh there this isn't a perfect
[01:30:15]  science but yeah style sheets are blocking too yeah which another one like um there are a bunch of blocking so is is is the good way is the way of looking at it being
[01:30:27]  like the browser is going to request a bunch of content a bunch of a bunch of assets some of those things are necessary or blocking and some of those things are not when
[01:30:38]  the blocking ones are done we trigger one event that's dom content loaded and when the rest you know all of the things were requested then we trigger another is that fair yeah and
[01:30:49]  i'm gonna stop using this demo because this demo is bad because i'm using streaming we haven't showed streaming we should use a a more typical yes this this is this
[01:30:58]  is more typical see we loaded the html this is the first part then from the html we're like oh we have to request these assets so we load the
[01:31:10]  assets and this is two javascript files in a css file right why is there like what asset is considered non-blocking here that is separating dom content loaded
[01:31:22]  from loaded well in yeah yeah look this one sometimes feels like it's just like yeah let's look here see dom content loaded decided that it lines up with with this script execution
[01:31:43]  here um or they decided like i guess this is when they had a breather and this is when it's done that's what sometimes i think loaded it's the closest
[01:31:53]  to like the hydration score you're gonna get where dom content loaded um and let's see if i can bring this back my scrolling it it's a very right there dom content
[01:32:05]  loaded is lining up right here with uh let me see here the initial execution of the html and the javascript that was on the initial page like okay let
[01:32:23]  me see this another way there's never a request a new request between dom content limited and limited well i mean it depends but yeah of the assets that we talked about to to
[01:32:38]  date um well i don't think there should be right like right like the idea is that like browser requests a bunch of content some of that is blocking when that's done
[01:32:50]  dcl when all of the request is done loaded yeah well i mean look at this timeline html there's some other trail tailing stuff we fetch our stuff and then
[01:33:01]  look at this this starts doing work when the css finishes what's this what's doing the work down here on the the timeline like oh the browser is using the c
[01:33:12] ss to like do a bunch of work yeah okay you draw the layout do the paint and we haven't done dcl yet yes and dcl is at the end of that
[01:33:21]  so you see this html css where's my label where's my dcl label it's gone yeah we got to scroll yeah it's it's part of this
[01:33:30]  dcl first conflict paint and large paint because this all does it all at the same time in dcl it's all right here essentially like essentially once it's done doing
[01:33:40]  all the paint loading the css the paint it's done this is this is that it's this is the the critical path for dom content loaded that one always generally makes sense
[01:33:52]  this one sometimes feels as i said like yolo like yeah i'm kind of i'm curious like what tasks and and loading because it doesn't like if i look at
[01:34:00]  the network the network thing up top it doesn't look like there's any new network stuff happening between dcl and loaded right but loading isn't about the i feel like it
[01:34:11] 's it's they they are expecting it's basically after a bunch of like the synchronous scripts run that are oh okay so this is actually really important load does not mean arrived
[01:34:26]  it means processed well uh yeah well the thing is look like yeah yeah yeah this is a network at the end of the last javascript we start running a bunch of this
[01:34:37]  javascript code and the load event looks like it sits in there at basically the first pause this task is a micro task queue like it's it's it's essentially this
[01:34:47]  is the this is the end of the javascript it runs that javascript and then it is it pauses right here because you get to a new micro task
[01:34:55]  and that's when the load comes in i i don't know that's my guess on or that's like what it seems to be the load event as i mentioned like if
[01:35:06]  you have a client rendered app will happen at the end of the initial javascript running but then you're like fetching some other right but one thing to just be
[01:35:13]  clear about is whether loading is a is is it really about the network or really about the browser processing the stuff from the network because like it seems like it's not really about
[01:35:23]  the network because first of all dcl triggered before all of the uh before the network was finished and load triggered quite a bit after all the stuff yeah yeah dcl is
[01:35:39]  about blocking and paint painting load seems to be from my experience tied to that initial javascript execution like the like the non-async part of the javascript like
[01:35:51]  the like loading the assets running the synchronous javascript load event um and and uh one thing uh we're probably familiar with calling document.onload and registering an event
[01:36:04]  handler to that that's this that's this red thing right yeah okay yeah so yeah the the hopefully this makes sense uh it well it it makes a bit more sense now but
[01:36:19]  it also sounds like it's okay if you can't pinpoint and predict exactly when dcl is gonna fire and when load is gonna fire because it's kind of up for
[01:36:28]  grabs well it's it's it depends on a number of things it depends on both the network time and the processing time and whatever so yeah usually the like dcl is something
[01:36:41]  but no one talks about dcl when they're and no one really talks about load either when they talk about stuff the the things they talk about are first paint are usually
[01:36:48]  first contemptible paint largest contemptible paint time time to interactive which is if this was an spa would all three of those green labels be after the load yeah i mean yeah let
[01:37:02] 's let's look at it hacker news yes sir i have an sba for for you and we haven't talked about this yet but and this is an app that is
[01:37:13]  completely client rendered so this is let's go back here for a second before we go here we've been talking about server render page that page that i've shown you was this
[01:37:22]  classic page you saw everything happen you saw the request for the html go out this is the html coming in right so that long blue bar is basically waiting
[01:37:33]  for this then there's some time and then we see the the yellows going out for the assets like the css and the js and that's the time you're seeing
[01:37:42]  here and then essentially then we see the the code at the bottom that was running and then yeah the load events the dom content load and the load depended on the the c
[01:37:54] ss which is blocking was ready to dsl the other one was ready to see and this first contentful pane in our example was right where the html was finished
[01:38:07]  rendering right down here that's that's really uh can we define contentful yeah that's again fuzzier i think it's based on a certain percentage of the page chrome
[01:38:17]  just kind of defines these messages so in other words chrome knows what the end state of the page is and so they can be like okay a whole bunch of that was there here
[01:38:29]  yeah i mean i i think they look at the viewport in terms of how much the html have loaded okay yeah but um conceptually the idea behind a content
[01:38:40] ful paint is like it's useful yeah because the first contentful paint is about like the shell and largest contentful paint is the thing so you got they actually show you a
[01:38:50]  bit where they continue large contentable paint is like they decided when when we got to the point where we rendered up to this okay point of the page we've got the
[01:38:58]  largest contentful paint the first contentful paint was was just the container or yeah and these these are almost uh in our async example they're almost at exactly the same time
[01:39:09]  because we we served the whole html page in one in in one go like the page is fully prepared when we sent it back and for that reason this is the
[01:39:21]  speed of painting like if we look down here we're just we're just like this is just rendering like it's what's this is 194 and this is yeah i don't
[01:39:32]  even know what's showing different on the timeline it's actually the same time right we're getting we're getting super useful markup from the server and the only difference between
[01:39:41]  these green labels is how fast are we rendering that useful markup right now if we switch now to uh an app that is rendered in the client like this app you're gonna
[01:39:52]  see um maybe i'll go to the network tab i think the preview you uh the response you're gonna see a bunch of html because it's fully server rendered and
[01:40:03]  that's what we're talking about now single page apps that we're talking about is the complete opposite when i go to this page and i go to the network tab and
[01:40:13]  i refresh it what we're gonna see pre preview is nothing we're gonna see essentially this this is all the html we sent we literally sent an empty document with some
[01:40:30]  is this like way quicker to load than that other example because we're gonna see that because we're gonna do this right now okay all right so yeah for look look what
[01:40:44]  happened on our timeline this is 73 milliseconds this is all from cloudflare edge so it's the same uh this one's netlify but uh whatever whatever whatever yeah
[01:40:56]  so my my point is though is that if when we look at our network um not our network or performance tab here i this this was 165 so this took half the time
[01:41:10]  to load the html yeah okay and now that second bit those assets that are being requested by the browser are much more substantial in this version no they're they're
[01:41:21]  gonna be the same it's just the line looks larger these are taking 30 40 milliseconds these are taking what conceptually wouldn't it make sense that now we're fetching the
[01:41:35]  populated data no that's the thing single page apps need to hydrate which we haven't talked about so you send all the same code inside in fact usually hydration is more
[01:41:48]  code okay cool this is good we can get to this later the the cool thing to note is just like let's look at those green labels here here we get a first paint
[01:41:57]  like pretty early on because as i guess as soon as i'm kind of curious why that first paint is it way early like when we first get that very boring markup
[01:42:07]  like why don't we do first paint there well the thing is it does there is some blocking things uh it does take a little bit but you look there is a difference here
[01:42:18]  first paint is at 126 here you know let's run it one more time let's see if we can get it any earlier damn it the last time it's totally
[01:42:28]  changed okay let's do okay let's zoom in this is so hard to learn from if every time you run this the the order of the labels no it's part of it
[01:42:40]  is just zooming in enough this is actually the same thing first paint is yeah and now and at first paint standpoint um it's actually almost nothing on the page i think that
[01:43:00]  they just call it first paint because like it rendered the html first contextual paint is when it renders this shell that we're used to seeing here like the the header
[01:43:08]  like you saw in the loading that it would be header and then it loaded in the content and the difference here is the load event and the dom content loaded event fired at
[01:43:18]  this point but we're not actually interactive because essentially there's an api request these new gray ones here well this was the fav icon but this one here is an api
[01:43:33]  request so our when we do client render this all still happens maybe a little faster because we aren't spending as much time here but now at this point when it's a
[01:43:46]  client render rendered architecture we're actually going to go and hit an api endpoint in this case it's actually a different api so as uh could be different server right yeah
[01:43:59]  yeah maybe we'll just put another line here it could be the same server it could be but we're gonna now request request and this is what we call jamstack
[01:44:18]  yeah yeah uh jamstack sometimes does a little like well i guess a static but it sometimes doesn't send a completely blank page but my point is we request api and
[01:44:31]  then we respond and then essentially it's after the load event and then we do some more work and then it's it's interactive so like there's a lot of hands
[01:44:46] haking going on here is is is kind of the the point here um so like this in the end finishes up with his final paint and interaction and stuff at 250. but
[01:45:03]  the funny thing is this finished up with this final paint and everything but but but we saw we saw useful information way earlier well we yes exactly right because this one didn't
[01:45:28]  actually render the contents of this page until here where this one yeah i mean that's that's sort of the the difference you're like yes like in total maybe if you
[01:45:38]  add up everything they're about the same but changing that order of the labels means that your user is seeing content earlier you know so the gap between this first paint or the the
[01:45:51]  this large contentful paint and and when it's done on a server render is what we call hydration because it needs to do this javascript work to make the page
[01:46:02]  interactive and now it's hot time to interactive in this case is like a little bit even after the load event but the funny thing is in this case they're both interactive at
[01:46:12]  the base at the same time but the the the the difference is you don't you can't interact with the page so at this point you're still seeing like the loading
[01:46:21]  indicator until you get here and then here you see the page you think you can click on it and you can't until here um so it's funny because yes this is
[01:46:35]  definitely better for visuals but when this time gets long bad things happen because it affects users perspective so i think it is this is why we focus so much on time to interactive because
[01:46:47]  it is actually important this whole time the first paint or large contemplative paint is insufficient we need first versus large so that we can differentiate like there's a huge difference between
[01:46:59]  first contentful and large contentful when you're client-side rendering but but as when you're when you're um server rendering often they're the same thing yeah if if
[01:47:14]  they're close together it means that the first thing your server is sending is useful yeah it's significant right and the the the thing is what we've been focusing on so far
[01:47:26]  i actually have in my article um and i made this table about when do you render um i think this might kind of i'm hoping we've we've talked a bit
[01:47:37]  about these enough that maybe it's time to kind of put this in a chart for so so we can see it a bit and essentially i've kind of defined i wrote this
[01:47:49]  article it's kind of a response to adias monnie's article where he kind of shows all the ways to render and it the most recent one was very react focused
[01:47:57]  and i wanted to look at this in a very general sense and what i've kind of identified was that there's basically four there's basically a few different axes and tables we
[01:48:06]  need to kind of understand for how i categorize things and frameworks are actually a combination of these approaches but generally speaking for on the render side you there's four choices if
[01:48:17]  we just focus purely on the rendering um at a high level and we've talked a bit about um static but the examples that we're looking at right now are actually ss
[01:48:30] r and client so when do we render well when we we made a request and after we fetch that data and then the client we render in the browser when is the data
[01:48:41]  filter okay gotcha so by by render it means when do we generate html yes yes that's that's what i mean sorry and then when is data fetched well
[01:48:50]  at the beginning of the request on the server so this is this i said process the request but this is also where talking api where and i'm gonna give that the
[01:49:00]  orange side this is where you you do like data fetching um yeah or this is interesting because like not like not every site has to be giving you data but like you can
[01:49:13]  have a useful site that doesn't doesn't use a database or doesn't use an api but like i i you know this is an important differentiator in a realistic job
[01:49:21]  i'm gonna say data fetching or csr is is is here right um so this this this kind of um doing and what this means is time to first byte is
[01:49:41]  relatively high for ssr where that's what we were talking about before like wow this is like a ginormous html file for ssr yeah um cool
[01:49:50]  yeah because what ends up happening is this shrinks considerably which means this shrinks too right and and and it also means you get your first paint earlier but your first paint
[01:50:03]  isn't contentful sorry quick question is it possible use a server framework like express fast find return sr rendered solvish yeah definitely and um solid start does support that at
[01:50:15]  the beginning of the stream i was actually showing how we can use like edge networks to do the streaming but yes uh we can we can def we also uh to answer your
[01:50:24]  earlier question it's okay to be drunk here um i i missed it i was too focused on what i was doing um but what i was like oh yeah sorry what i was
[01:50:39]  getting at is yeah um yeah we talked actually a bit about ssr here um but where i was getting at is that essentially when we when we look at at this
[01:50:53]  time to first byte it's very easy to see how this kind of kind of collapses up more when you have the client side rendering we saw it visually too but largest contentful
[01:51:04]  paint you know for ssr should be a little bit faster than client right we i said they were comparable on a slower network you start seeing them separate right this is a
[01:51:14]  230 versus a 250. um this gets more accented the slower and this this is because the contentful paint depends on the data exactly so essentially when we go to fast
[01:51:28]  3g which never feels very fast and we rerun our timeline to kind of like look that was surfer you can actually see the loading state there yeah um where do we
[01:51:40]  get we get we get to 2000 for csr like when you do it here on the ssr version you're not going to see the loading state but it's
[01:51:52]  it's already done um it's it's done at 1400 milliseconds so like client-side rendering is like what uh what is it it's like another 30 or 60 slower
[01:52:09]  or something um yeah so and and yeah if your network is really slow and and your client you know i mean another what what if your api is closer to your server than
[01:52:22]  it is to your client that could be another factor right yeah i mean in our little diagram here we made it closer to the client but if right realistically it might be more
[01:52:32]  over here yeah like we're just adding more time yeah but basically like the more data driven your app is the more the more content there is to fetch maybe the more benefit you
[01:52:46] 're going to get from ssr right now one thing that you saw here is with ssr lowest largest contentful paint and first contentful paint are identical where
[01:52:59]  it's much larger on on our example right because here yeah what is it yeah they're all the same dcl is okay it's like seven milliseconds the first paint is like
[01:53:14]  kind of useless with csr it's like a it's like a white spitter or something and then the first contentful paint is like a shell yeah the first paint
[01:53:22]  is yeah i'm client rendering is fast 12 48 first contentful paint here is only 50 milliseconds later from blank to this it was pretty quick but yeah this is like a whole
[01:53:34]  like on the slow network it's like almost a second later so someone in chat says we can do paint flashing can you turn that on oh yeah that's cool yeah that's
[01:53:44]  true yeah i wonder if we'll see it sometimes stuff that's a little bit more dynamic let me see let's let's just rerun this like this ah aha yeah
[01:53:56]  you can see the all right so that that first green flash is the first contentful paint right yeah and then on this one it's just gonna be one all right i gotta
[01:54:09]  turn it on here sorry rendering okay let's just do it yeah you see my hover state okay it's gonna be yeah oh interesting how the the nav is later the nav
[01:54:23]  buttons maybe i have a uh some css or some yeah maybe this one doesn't have still has a transition in it there's like a there's a small css transition
[01:54:34]  i love this but what i don't love is how the color is it like the color should correspond to a label so like you can see the first contentful paint as
[01:54:46]  a different color than contentful paint whatever i'll talk to you yeah that's that's an interesting suggestion for them but yeah you can you can see the the difference here and
[01:54:57]  then as i mentioned server rendering requires hydration where for interactivity with the client doesn't and just for a little bit more perspective server rendering that we're talking about is like
[01:55:08]  rails and php and next and remix and svelte kit and all like and this is interesting because you know next and remix for example do hydration extremely differently so that will
[01:55:21]  affect these metrics as well right no next are like identical like who's the so who's the one with the the zero the zero kiloby next will have react server components
[01:55:34]  but that's a react feature so remix could have it too all right i guess i guess i was thinking that like one of these uh like really basically what i was thinking is
[01:55:45]  that remix has this idea that like you never have to hydrate for interactivity because your form to do all the work right that's what i was thinking about we haven't
[01:55:54]  talked about that but that's the first column here um and i mean it yeah i mean hydration but basically what i'm saying is for for next like requires for activities always
[01:56:10]  yes and for me remix it's no sort of yeah i mean we if you want to talk about hydration we can do we can go there we can get that i'm
[01:56:21]  not going there it's because i don't think that i don't in remix and next or like i don't consider progressive enhancement doesn't negate the the the need for
[01:56:33]  if you if you have interactive javascript like you can choose to not have an interactive javascript like you can always choose none but like to effectively choose none it
[01:56:45] 's a very very simple process that you remove the script tag from the page like anyone can make a form out of html you don't need a framework to do that
[01:56:54]  so generally speaking i'm talking here actually i was wrong it's not the first column remix and next and sell kit um definitely this this is where they live rails php
[01:57:06]  this is the server rendering you know this is the client side this is a create react app this is this is you know um why why is marco not in there because i
[01:57:17]  have a small couple more distinctions here that we haven't talked about before i go to streaming i'm going to talk about static for a second this is the idea that
[01:57:26]  at build time you render it or it could be from a cache so technically with ssr once you've rendered the page or isg from from next and stuff you essentially
[01:57:38]  don't need to render it at request time and you can do it like either where is that cache is that cache of the client in a cdn yeah cdn
[01:57:45]  or wherever you're serving the the pages from so caching kind of blurs the line here this is why when addy did this thing um brian was like actually
[01:57:56]  here and he was drawing arrows and like doing this and sketching and scribbling over it um because he he was like well caching completely changes dynamic um and you you can
[01:58:08]  you can also um cache in the browser there's there's several layers of caching someone in chat is very persistent every time we mention cache they say make sure to set
[01:58:17]  the cache headers yes yes can you explain what that's about yeah yeah because you can actually say how long this should like be good for essentially okay gotcha so like this it
[01:58:33] 's very helpful to give these hints um uh you know for the communication with the client and server so like uh i said like you don't need i uh the reason the
[01:58:42]  cache header comes out and remix kind of was doing doing that is they're like look this is built into the browser you don't need like is isg which you haven't
[01:58:51]  talked about which is like uh incremental incremental static generation or like fancy things they're like look all that's static generation is this side of things all it is is a cache it
[01:59:06] 's just when you're doing the caching um and so i i do describe this as static here but the truth of the matter is any of the ssr techniques
[01:59:15]  here can leverage caching um because they can just go i'm not going to generate it again you know the the way that is um g or incremental static generation works with next
[01:59:29]  is you make the request they they go okay well we got the old version of the page but we know that it's out of date we'll just send you the old
[01:59:35]  version of the page and we'll next time someone requests that the new version will be there because we generated it like it's just yeah another way of looking at this is the
[01:59:44]  reason the the the cases when you can do ssg static rendering is when that usefulness of your data lasts a long time right because then you can go ahead and be
[01:59:56]  like yeah i'll just rent you know build this once or or or ever so often right and to be fair some ssg firmers do ssr now i
[02:00:03]  put eleventy here it's probably like they do ssr as well now so it's like it's kind of hard to split it i mean even astro used
[02:00:10]  to just be in this column and now exactly right and now it's very much it does both but but you look you can see the advantages where you can do it here because
[02:00:19]  look developer or build time or whatever obviously data fetched you know at that time i say build time but it could be at cache time or whatever but look what look what
[02:00:28]  happens time to first bite suddenly is is low instead of high like yeah it might not be as low as client but it's it's low enough because you're not fetching
[02:00:37]  data exactly and lowest contentful paint the largest contentful paint you can't get to it faster than this because on the client it's high because you need to fetch the
[02:00:50]  data after the fact it's on the on the ssr versions here which we haven't talked about them it's medium because you got to fetch the data you know at
[02:00:58]  the time the server gets the request but here you already have it so essentially and first contemplable equals first thing so this is just like you can't beat the performance here
[02:01:11]  it's just so if you do both which most things do is you take a hit the first time and then afterwards you go to this and but essentially you can see why these
[02:01:25]  are both very beneficial over client um client rendering right if you have data yeah because of this this is the thing so oh yeah yeah that's too bad yeah ryan fl
[02:01:41] orence does have good content remix um really leverages um certain parts of the platform where you know there's like other systems that might not be necessary i do like the simpl
[02:01:52] ification return to that a lot oh i see interesting well that's good i mean we were kind of pushing them a little bit i guess they i mean it's like gu
[02:02:07] illermo's thing earlier where he's like look when you got the edge with a fast framework like it's it's pretty freaking fast like you don't even so the idea
[02:02:14]  is that you don't really need a cache if you can just run the whole thing again no and it's sort of like the edge is like dynamic is the new static the
[02:02:23]  edge is the new cdn okay so the edge lets you do the same kind of convenience and speed of storing a cache near the user except now your cache can actually
[02:02:34]  do the rendering right the only thing is i don't know i still feel like there's cache header considerations the edge doesn't solve the data problem that's what i was thinking
[02:02:49]  doesn't your edge still have to go fetch the data again it might be farther yeah so yeah i i don't know i i i think i think the there's cache
[02:02:59]  headers or this is still a thing but i wanted this there's i left this one for last because this is might be the most complicated of the bunch but um this is where
[02:03:09]  react 18 solid mark was there is a solution which actually um is almost like i i for some reason it's easier for me to understand the solid streaming thing than it is for
[02:03:23]  me to understand what the heck react server components are it's not the same thing that's the problem there's two technologies partial hydration and streaming marco does both react server
[02:03:35]  components does both but they are two separate technologies so this has nothing to do with react server components oh so react 18 is is just because react 18 support streaming not because we have
[02:03:48]  react server components your components aren't even out yet okay this is nothing to do with server components i can i can rest easy you don't have to worry about whatever the
[02:03:56]  heck that is uh okay cool cool so what do we start using hd cache headers are more about telling the client to cache although cdn can pick up it on it
[02:04:06]  also and some experiences you probably don't want the client caching at all imagine a bid page yes oh so sometimes the client does cache data not just css files but actual
[02:04:17]  data oh you mean like locals yeah yeah yeah yeah yes yes yes uh yeah i mean you can fetch caches i don't know if you've ever done that like you
[02:04:29]  can you can okay yeah like when you actually fetch you like like apis you can do that but the bid page is a good point right because some people always go like a
[02:04:40]  lot of people talk about e-commerce they talk about static and all this and like ebay ebay is all dynamic like why i mean an auction site would need to
[02:04:51]  be more dynamic than than a typical it needs to be snappy when you're when you're bidding yeah right imagine waiting for incremental static regeneration before you you make your your bid
[02:05:03]  right right and this so and this is kind of why marco's in this zone marco kind of it was like is there a solution that actually improves on this and
[02:05:14]  while nothing touches lowest contemptful paint you can't if you look at streaming ssr it's low medium this is a detail but it's other than being able to do
[02:05:31]  it ahead of time it has the best potential out of out of all these options for performance and that's why react 18 added that's why solid hasn't that's why
[02:05:41]  marco had it and we can we've been watching this unfold because on this page when we refresh it on our slow network you can see it take a second you know you
[02:05:52]  can see it like with the x do its thing refresh this one on slow network it's faster but then you're waiting for it and streaming is this middle ground right because
[02:06:04]  what streaming does and we'll show it in a minute is let's open our thing and we will it's a slow network oh it's funny sometimes it flickered there for
[02:06:17]  a second sometimes you won't see it on stream yeah see it's it's it's funny because in this case there's not enough data let's pick something that's
[02:06:28]  larger like do you have something with a lot of comments 154 isn't a ton let's do it is it not going to do it for me just because i'm showing
[02:06:39]  it some sometimes streaming doesn't show up as nicely with network throttling in these tools yes i turned off the network thought and you see it it's not funny um
[02:06:50]  essentially it looks like client yeah but as we saw on the performance the this one important thing is the source of the data here is the server the server is is talking to the
[02:07:06]  api yeah let me get the timeline here just so we can see it here because we looked at this one which is basically like um uh you know ssr this
[02:07:23]  is like your typical you know framework and when you look at streaming well this one didn't actually give me a streaming looking timeline this is sometimes the problem i have with these dev
[02:07:37]  tools yes it's not giving me the streaming looking timeline yeah i'm not going to get on stream i've shown it before it's funny when i turn off the thr
[02:07:44] ottling we'll see it but then i won't have as much of a defined difference see we see it here when i turn off the throttle what are we looking at well
[02:07:51]  it starts fetching the assets before the html is finished yeah and the first paint happens here instead of here so the idea here is you front load the data fetching
[02:08:06]  by using some fancy html techniques yeah so i haven't showed you streaming streaming streaming is the data fetching happens here but the difference is you take this end of
[02:08:19]  this and you move it up like this yeah and then the data so yeah i'm going to leave this here for the original and we're going to we don't we do
[02:08:31]  this this is this is this is the trick we don't wait you know the this the server is still responsible for the data fetching so it's not like the client
[02:08:40]  rendered example the client renders so the server still both serves the html and fetches the data but now it can start sending the html before the data ever
[02:08:50]  arise yes and and this kind of comes in maybe here and in the end it might be there around the same time but this gap now has uh uh first paint and
[02:09:10]  first contemptible paint probably and is it true that you can only do this if your rendering library is able to kind of pull apart the data from the rendering i'm being sort
[02:09:24]  of abstract here but like solid is is it true that solid is able to do this in a in a way that like another framework might not be able to yeah i mean
[02:09:34]  it takes some consideration um because like reacts had streaming since react 16 but no one calls that streaming in a modern sense and they try to deprecate that usage well what what
[02:09:49]  what was it really you could kind of sit like render to a stream and then flush it as you felt like it but the problem is it you you like when do you
[02:09:58]  flush it because like and flush i mean send it over the wire because reacts can only serialize so much of it so like you like it was more like you could just be
[02:10:09]  like that that was really what i was trying to get at with my question because how can you render something unless it's there so essentially the problem was you if you're trying
[02:10:17]  to output like you have to make a vdom and then essentially serialize it to html so what you could do with the old streams was like okay i'm
[02:10:26]  going to write my headers now and then i'm going to you know while i'm rendering the react app and then i'm going to write render out the react app and then
[02:10:34]  i'm done this out of order streaming or even in order with marco's case let's is that the render is actually set up so that it it can actually send parts
[02:10:45]  of the html ahead of time and in our case what we do and i did this in the streaming stream in more detail we actually send it almost like the client
[02:10:53]  rendering we actually show the placeholder like we use suspense on the server and just do the synchronous render with the placeholder send that across the wire and then as the data finishes
[02:11:05]  render the missing pieces and data and send those across the wire yeah you have to be able to serialize the data understand where the data fit it's kind of like separating
[02:11:18]  the pieces of the puzzle in a way you have to be able to know where the data is needed exactly so that you can send the shells i guess um you have to dec
[02:11:29] ouple the data from the rendering yeah so it's it's it is interesting though because on this page even comparing to the client side render sorry i'm going to put
[02:11:44]  the paint flashing on again you can see the difference oh sorry i'm using fast 3g that's not fair oh maybe not yeah maybe not maybe it's not as big
[02:11:59]  a difference as i was hoping to show um but what it does do is give as you see on the faster network it gave you know when when when the html is
[02:12:13]  able to get there fast enough and there's a big enough gap between the html and the data loading when this gap is big enough you actually get almost like the
[02:12:25]  client side rendering experience like this one but like that much sooner um so you get that loading state and you get things to the people as quickly as possible um and kind of leverage
[02:12:39]  that whereas um on the slow cases like the worst case what happens here is all the html kind of comes in at the same time the network's kind of slow so
[02:12:47]  it just kind of comes in and you don't see that flicker and we we saw this when we were doing the slow the the slowdown it just looks the same
[02:12:55]  as async so it kind of scales well in both cases which is what makes um sorry what makes interesting here we still need hydration to make it interactive right yes still requires hydration
[02:13:09]  it's all the same thing except this is an option now where we we just significantly improved our our first paint um and our time to first bite i mean this this is
[02:13:22]  independent from the idea of the edge right yes yeah edge edge is just it's changing like the the length of these lines yeah you're just doing this i thought it'd be
[02:13:34]  really cool one way to do like an interactive graph for this but essentially this this is like this is kind of the spectrum here on server rendering so when i look at a
[02:13:46]  solution for me personally this is what i'm asking is this primarily a static thing like caching is like a nice city that you're aware of that can work for any of
[02:13:56]  these three you can cache stream like it's still html cache stream thing like it might like move the last thing into place but if it's in order it doesn
[02:14:05] 't like we we cache streams at ebay you know where where it makes sense so so if i'm using solid should i always choose streaming ssr over ssr
[02:14:14]  the only trade-off is the i mentioned here about the headers the headers need to come in before any body content and the challenge with streaming is you have to send those
[02:14:26]  headers at this point before you've loaded the data which means you have at that point you're going to have to be like yeah it's a successful request before you've actually
[02:14:35]  you have to know a little bit ahead of time in order for that header the reality might be that there needs to be like this line might actually need to be more like this
[02:14:45]  because you need to do a little bit of data fetching 47 or you know you check something or the other option is say screw it and let the client handle it um
[02:14:57]  essentially um we always send successful header exactly okay but it's synchronous you do like it's not exactly at the line like you do do i said we just described react server components
[02:15:09]  but i don't want to explain why we did because that's a whole rabbit hole i don't think these are this is not what i consider react server components um uh
[02:15:21]  like the street rack server components do stream but it's like it's like another thing i i think yes for where you're right where we're sitting right now we're just
[02:15:33]  talking about four types of rendering so when when i look at my framework um for server oh he was he was responding to someone else i'm sorry i didn't realize that
[02:15:44]  okay fine um this is react server components yes right oh okay that's the difference between um that that that that's the special thing about react server components is you have a
[02:16:01]  stateful session on the server with your vdom which solid when solid does um you know runs reactivity on the server you know you you could argue that you're one step
[02:16:13]  away from doing something like that yeah i mean to be fair i like purposely don't we removed for performance reactivity on the server for the most part yeah yeah but like
[02:16:26]  you were playing in in that game yeah yeah yeah yeah but yeah let's get there like the implementation that is less important i think i think the key part here is this is
[02:16:35]  this is the anatomy of the fetch and this is the first piece of of of what we're talking about here because we're this is when do you write yeah i i
[02:16:43]  love this and like we might not have a ton of time to like build off of this but this is the foundation i like how you describe like anatomy of the of the site
[02:16:50]  fetching and like one thing i do want to maybe dip our toe in before like i collapse is like um how this interacts with routing like yes i have another table about routing
[02:17:03]  because there's three things that you should be asking yourself you should be after rendering you should be asking about routing and you should be asking about hydration wait what what happened with
[02:17:12]  our uh our headers here our server hybrid transitional client versus because it's different this is why these things don't belong on the same graph you can't there this is not the
[02:17:25]  the four ways of doing it and the four ways of doing this it's a matrix you can combine these four ways of rendering with any of the maybe not all of them
[02:17:37]  but like with any of the four ways this is why this is a complicated thing actually this makes a lot of sense like let's take the static example in this static example i
[02:17:45]  could actually do client side routing yes so the two ways there would be um service side routing is my static example uh like creates a different file for each route and then i serve
[02:17:58]  you know the corresponding one or my static thing basically generates one you know page with a bunch of javascript the javascript has that routing right right exactly and it
[02:18:09]  and it hydrates so for example of that is um yeah jamstack is essentially when you have a static site and then you do client-side routing yeah wow so this
[02:18:22]  this is why an mpa you know traditional mpas could either be static with um server-side routing or ssr with server-side routing yeah so what i
[02:18:33] 'm getting at is that yeah exactly what i'm getting at is and we haven't added hydration this is why when i see a chart like um the the adias money chart
[02:18:43]  which has like six things on it i kind of laugh because like i did the combinatorics there's 128 possibilities okay and this is with my generalization there's more
[02:18:54]  there's more differences and subtleties here um this is this is why this is tricky um but that's why i've had to break up the table i'm like can
[02:19:04]  i do this with three tables instead of one table and and hopefully like i think this is why it becomes a bit of a game of like pin the tail on the donkey in
[02:19:12]  the end where you just go okay instead of focusing on this once we understand what these are maybe we should just pick a framework and then see what choices it makes across the
[02:19:21]  the matrix and then right it's less useful to like imagine all the possibilities than to see concrete examples yeah so i am curious though now like i think i understand server-side
[02:19:31]  navigation and client-side navigation yeah and maybe we like yeah i mean a server-side navigation um just just for i mean the beautiful thing about this hacker news demo is
[02:19:43]  i actually can show you the difference because the server-side navigation is marco right look look at the circle here when i go to page one it fetches another file yeah
[02:19:55]  and you see the cool loading states that's streaming at work this is why streaming is so important in mpas because it looks like client loading state you don't see any
[02:20:05]  flicker but you actually get instant responses streaming is so powerful in multi-page apps because you essentially it looks almost like you have client client rendering going on right um so if
[02:20:19]  i if i had a piece of javascript fetching the next page from the server i it would look like this but i would not get that browser loading state right
[02:20:32]  yeah yeah and yeah i mean do i have a example of that because a lot of the solid examples use um transitions which hide that state because like streaming is kind of showing it
[02:20:46]  again but if you have a you're not you're not going to see that right like uh actually i do have one don't i uh astro or astro solid
[02:21:05]  example um did i get that right the astro solid example doesn't do streaming right so you see this loading thing in the corner but now we don't see the loading state
[02:21:16]  and we don't even this is pure uh static what is this this is this is server sorry yeah with server routing but without but this one is without streaming and this one
[02:21:30]  was with streaming so with streaming we saw the loading state almost immediately right i mean sometimes it's tricky to yeah you saw that right and without streaming you see this looks like
[02:21:48]  there's a bit more of a flicker here but it's pretty good there isn't flicker the browser tries to hold the page as long as it can and then show
[02:21:55]  the new page so we don't have to watch this this gets to thomas's question here can you explain why the orange top bar seems to stay consistent when you toggle pages
[02:22:05]  is because the top bar streams in as part of the first paint the new page i think it's because oh okay i see yeah because again looking at our at our diagram
[02:22:16]  here with streaming the browser actually when you go to the next navigation it it holds till here and then does it so right so it's it's almost like if you could slow
[02:22:27]  it down super super granularly you would see a flicker like yeah i mean that's the whole thing there they yeah they try to hold it i mean that's what
[02:22:38]  i'm saying in this astro example i am seeing a bit of a flicker in the text i don't know exactly what's going on there but essentially it looks it
[02:22:46]  holds it and we're not seeing white paint flash people talk about mpas and they're like oh those white flashes of paint that hasn't been the case for for years
[02:22:55]  like it's the same way when people talk about hydration they talk about white flash of paint that's that's garbage that's not a real thing and someone showed me something once
[02:23:03]  that cloudflare.com like that that is not that that is not that this is not a this is not this is a single page app with like uh something weird this
[02:23:17]  is not the standard way hydration works just like the white flicker paint um yeah yeah um yeah i don't know what's up with with with with the the site there
[02:23:33]  but someone pointed this out to me on twitter and i was just like no that but okay that wasn't a good example but that's not what hydration looks like so yeah browsers
[02:23:43]  are very clever about it and what's cool about it again is with streaming you get to show the next page that much sooner and give the people the you know like the
[02:23:54]  the more loading indicator so in a sense marco speed up here on streaming you know maybe this is more jarring because i don't have a nice loading state i don't
[02:24:03]  have like the you know like the grayed out like you you know what i'm talking about like the like nice placeholder things but it depending on how long it takes
[02:24:11]  to load and whatnot this can create a much more responsive experience um even though it's an mpa but in both cases like it's pretty good right so this is server rendering
[02:24:26]  um and we talk so this is server and this is client so you guys are probably like what the hell are these two things in the middle but let's let's just
[02:24:38]  look here server there's multiple entry files um like this and when i say code entries i don't mean html i mean code like each page has unique javascript
[02:24:51]  it runs like each different page it's its own bundle yes right from the top where is in client routing because they have to load the other bundles there's a single root
[02:25:02]  bundle that loads the other bundles like maybe through code splitting so it doesn't matter if you're on the comments page or the main page you have one code entry it
[02:25:12]  does this is not about how many html files as we mentioned you can statically generate 20 html files a single bundle and it is a single page app it
[02:25:23]  is not a multi-page app right right yes yes because it's what we're seeing before with the streaming the first pane includes the top are and the rest of pages
[02:25:38]  loading spinners yes exactly so you just you get this illusion of almost like uh you could you just get quicker responsiveness with streaming in the mpa which has to do that
[02:25:50]  full page on every navigation um but let's look here with server navigation you don't need any additional javascript in the browser to do it right i mean we we
[02:26:05]  didn't we didn't we didn't we didn't look at this here but we got i can tell you something about this network tab there is no javascript on
[02:26:15]  this page um in terms of bundles and guess what streaming added a little javascript but it's actually in line so guess what um oh yes i gotta redeploy this
[02:26:27]  this is actually annoying this is veed this this javascript bundle is actually nothing look at it it actually has nothing to do with any code on the page it's
[02:26:35]  like a dev server style yeah let me see let me see if i got one i got i got what marco hacker news let me see i don't have it too okay
[02:26:46]  yeah we this was a regression and b we got rid of it but essentially there should be no javascript on this page this this file is just like a polyfill
[02:26:55]  for something that like it literally does nothing um and this is because marco is completely a effectively a static generation well it's the ssr is server rendered so there's
[02:27:10]  no need for it i'm glad the astro page we can see this but essentially there's no javascript needed to do this navigation i guess i guess what i was
[02:27:16]  saying is why does the marco one not need hydration because there's this example this first page has no hydration it's just links like there's nothing to hydrate there
[02:27:26] 's nothing you can do except navigate to new locations no interactive components so to be fair on like remix or literally any framework you just remove the script tag and do this but at
[02:27:36]  that point you still need to navigate out and do a new page and once you go to a page that has javascript like this one you know you're taking the
[02:27:47]  full brunt of it where um you know a framework like astro here we we saw loads five kilobytes of javascript for this page and marco which is
[02:27:56]  a little bit larger right now loads 18 kilobytes um to be fair but this will be smaller in the next version but my point is like it's not like 100
[02:28:07]  kilobytes like um what like next actually yes like you you you know like uh where are we so is this clients see this one needs hydration because we do this yeah
[02:28:30]  there we go there's our 83 kilobytes so what's the routing here yeah so anyways uh next is a is a is a is a different case right we've been
[02:28:42]  looking at server side rendering ones um client side ones single code entry point doesn't reload in the browser yeah deserves client state um doesn't render on the server it requires more
[02:28:55]  it requires more javascript an example that's react router but it's this is also this is felt kit this is remix this is solid start um they are all next pretty
[02:29:10]  much all of them and you can you can see this even though we call the solid router isomorphic you'll still say it's a client side like what does it
[02:29:19]  mean yes because it needs to it actually once you get here look when you need to this there's no spinner here we're not reloading anything so in fact this ht
[02:29:30] ml didn't move it's somewhere in here that the the content's changing let's see so the the server does not help us do any routing here no see there it just
[02:29:39]  it's just swapping out these html so what does it mean for for it to be like a isomorphic nested routing solution that kind of thing which is
[02:29:47]  what we have here all it means is that it can render once on the server and then and from any page you can render on the server but when you swap into new
[02:29:56]  sections we can just swap out oh i see what you mean so the server is aware of of the routing solution so that it can serve you any of the pages as your starting
[02:30:05]  point but in order to do the mechanics of the routing you need a client-side mechanism yeah yeah and you don't need one for these like they don't need any j
[02:30:14] avascript to move around here yeah we need javascript because that page needs javascript but we'll get to that in a minute yeah let's talk about these
[02:30:21]  middle ones before i fall asleep yeah yeah um so turbo turbo links is um essentially uh a technology from um the rails guys and it's it's built with mpa in mind
[02:30:37]  and i'm gonna i'm gonna pull out turbo links docs so that we can we can show what it says here but it says essentially turbo links makes navigation web faster get
[02:30:47]  the performance benefits of a single page app without embedding flexibility so what they do is when you follow a link click turbo links automatically fetches the page from the server oh this
[02:30:56]  is what i was i was telling you about the javascript can fetch the new page from the server swaps in the body emerges the head and they all incurred
[02:31:05]  without a full page load i don't have a turbo example off hand um why does it have to merge the head because like the css could be different yes yeah um but
[02:31:19]  turbo is um a lot of the kind of stuff that we've been looking at it with some the mpa frameworks recently um maybe a more granular version i don't have
[02:31:29]  ryan's uh example for me which is right now at my fingertips um which was like a nested turbo-like router where you could actually swap out the parts um he
[02:31:40]  has a demo that i've been showed previously on stream uh which i feel like actually be really useful so why is this better than the client routing well it's hard yeah
[02:31:54]  let's look at the table and let the table answer the question because you nothing we've talked about today yet explains why we'd want to do this and the reason for that
[02:32:02]  is first of all everything about server now is not going to reload anything and it doesn't preserve client state it's kind of the same as mpa and it does render on
[02:32:12]  the server after javascript in the browser is is is is is the key part here this requires a low amount of javascript this is why i actually wish i
[02:32:24]  had ryan's demo which i don't have at the moment to kind of show you and this is because all your javascript is doing is asking the server for more
[02:32:31]  info and then swapping things out yeah ryan even did a nested routing version and like where i was talking about where we're swapping it and for the few guys
[02:32:42]  who do not know nested routing i'm just gonna remix run this idea that a page is a bunch of layers so you can just swap out like if you click a
[02:32:58]  nav here it'll swap out this section if you click a nav here it'll swap out this section and this kind of nested thing lets us kind of not re-render
[02:33:08]  pages and when i say swap out i mean in the client side it means just client rendering but uh ryan turquist made a version that does server rendering swap outs
[02:33:17]  like this and essentially um where i was getting at is it was 1.4 kilobytes it didn't matter which page we went to we navigated around we swatched
[02:33:30]  the page out like the routing was 1.4 kilobytes and obviously the page if they need hydration would have different amounts of of javascript but it didn't
[02:33:40]  need anything more whereas um i i mean client i say hi but a client router also in needs the javascript to render the page so it's like a like the router
[02:33:56]  itself there's an overlap you're saying you say the router itself might only be yeah four kilobytes or six kilobytes or something but you need all the j
[02:34:07] avascript to then render the page where with a server being rendered on the server first it literally could be and we haven't talked about hydration but you could be the server is
[02:34:21]  rendering the page so you don't need so that's necessarily need to have all the javascript what's the benefit of hybrid over server i mean i guess if you don
[02:34:32] 't want to reload the page in the browser ryan if you want to send it to me on discord you can and i'll get it i don't have discord open but
[02:34:41]  i i'll grab it off screen and i'll grab it so send me a private message on discord yeah yeah and and yeah it could which is it doesn't right now
[02:34:58]  but that's brian literally whipped up this demo um in in an evening or so there we go let me get this one going and it takes a little bit because you
[02:35:11]  actually have to define boundaries and you have to do a little bit of work here theoretically they could though which is is what we're saying here so let me show you this very
[02:35:22]  very very simple example here but this is a nested router using solid app router um a little hydration but what you're going to see here is this is he made some
[02:35:33]  special element to kind of denote stuff like it does require different structure when you swap it actually does swap out the pieces so this post details if i go from post one to post
[02:35:46]  one comments it's only going to swap out this con this stuff see post one and if we look at the network and look at all we're going to see the serial
[02:35:58] ized uh kind of semi streamable like json format of of sending the html of the wire and swapping the stuff out so arguably this is more efficient than server
[02:36:10] -side routing because it only grabs the new stuff yeah but i mean there's flaws here because how do like how do i update the it's not flaws but it's
[02:36:19]  like you still this this alone it doesn't like what if i need to change the navigation i don't really understand the benefit of this over server-side routing well it does
[02:36:30]  it avoid it's like if you have ads on the page stuff it avoids the full page like this has benefits over server routing because you often don't want to reload
[02:36:40]  the page yes yeah reloading the page is is generally like there are benefits because then the browser handles the navigation and there's like you know like it's more native and you
[02:36:51]  don't like you can avoid memory leaks and a whole bunch of things people will tell you and it's in taylor's article that i talked about that i shared this week
[02:36:57]  but generally speaking we're we're really like the reason spas are so attractive is because of that so these new approaches are trying to get us closer to to single page
[02:37:08]  apps from our mpa we haven't talked about why mpas which is hydration which we won't be able to get into tonight because it's too big of a topic but
[02:37:17]  but essentially um we we're trying to there are benefits to having multi-page apps in terms of javascript payload which already showed um and this is a way of
[02:37:33]  being able to bring those benefits um to multi-page apps essentially yeah so what do we got here yeah exactly like animations right like i i did show the loading state in mar
[02:37:49] co with streaming is does a a pretty good impression but you wanted to be able to do animations right yeah smaller updates yeah just reading some of these comments here yeah yeah
[02:38:11]  suddenly you get a lot of the single page app um trade-offs um that you didn't have to deal with before but as i said this hybrid approach works with a rails
[02:38:20]  app you know what i mean like you can hydration is something specific kind of to our javascript frameworks in terms of how to add interactivity but like you can take
[02:38:33]  classic um static or ssr or streamed ssr pages and now not have to like reload the page so that's the benefit of hybrid it can be clunky
[02:38:44]  a lot of people i've talked to that's used hybrid say it feels clunky and i agree every time i use hybrid it feels clunky the first time that it didn
[02:38:52] 't feel clunky for me was actually using this demo and i know there's not sending much data but essentially the nesting routing i feel like is the savior being an
[02:39:05]  htmx um which i brought at the beginning the stream is also kind of in this idea where it can swap out pieces of the html from the server and
[02:39:12]  i think instead of treating as a full page load like turbo links um is you know better along that path so you might be asking there's one more in this in this table
[02:39:25]  that i that i drew here um and that's something called transitional and i i named this after the whole transitional app thing this this kind of routing i've only seen one
[02:39:37]  example today and that's react server components um we've talked about it on the mpa side about how we can achieve this but it's a little it's a little bit
[02:39:49]  different i think it's funny client is like kind of an island it's funny to use the term island over here to get to the transitional you actually kind of have to
[02:40:00]  attack it from the left you can sort of see when you go back to the foundations you have server and then you're like okay let's bring it to the client you get
[02:40:07]  hybrid and transitional is like taking hybrid to the next step yeah this is we and i don't have an example offhand because i'm not going to fire up the react
[02:40:17]  server components demo i think i mean i could but essentially we're back to having a single entry point like the single entry point might seem like a weird sticking point when you get
[02:40:28]  in the middle because the truth matters you can always have multiple single page apps like you can have a server and each page is a single page app with its own navigation this
[02:40:39]  so you can have because an mpa can always have a single page app on it so it's kind of funny but this distinction is worthwhile because i'm saying a server app
[02:40:53]  could have multiple transitional apps you want it but essentially it's moving back to a single route for the application so it's like client routing but it does not reload in the
[02:41:03]  browser and this time it actually preserves client state not just the stuff above where the transition happens but like essentially it um preserves it um in in on a whole and it
[02:41:20]  like the other one renders after the fact it requires more javascript maybe not as much as client rendering because it doesn't need to render all the components on the
[02:41:29]  page but it has the ability to um but it needs more to be able to handle this very complicated navigation is this is this the streaming of routing it's it kind of is
[02:41:45]  like in terms of like if you're looking for that hot spot it's the thing that seems to have come like there's probably some terrible trade-off here kind of
[02:41:56]  like streaming has that headers catch but it's the thing that's kind of wound itself into the middle where you like you get the best of this and the best of this right
[02:42:05]  well what you're saying is no one's really doing this right now right this is this is the thing that everyone talks about you talk to um michiko from quick we
[02:42:13]  talk to the guys on marco we're all like oh yeah this is the thing when i wrote that article back in january that server routing is the future i was talking
[02:42:23]  about this um uh what is it to see if i can find it because i talk about the different types of routing here when i say the return to server-side routing and
[02:42:33]  i said you know we have our classic multi-page app which is the server routing we have html frames which is this turbo thing i was talking about and then
[02:42:43]  we have server components and this article you know kind of explains it a bit better but you can already see this when you click between invoices and subscriptions yes this swaps
[02:42:56]  out but this also has to change and if you interact with something here maybe something up here needs to change too and as you navigate you don't want to lose that state
[02:43:09]  so the way react server components does it is they treat the whole page like a vdom but they still fetch from the server and there's a lot of talk about how we
[02:43:18]  can optimize this still use nesting and whatnot but essentially instead of just swapping out the html kind of naively maybe you know this transitional routing involves being able
[02:43:32]  to selectively preserve the client and swap out you know like the basically in react case diff the server parts like it's not just about maintaining the the client islands so to speak
[02:43:50]  which we haven't talked about it yet but it's not just about um you see how this is nested in here it's not just about keeping the interactive parts of
[02:44:01]  the page it's actually that the stuff that is on the server you know like the stuff that we kind of already where is it here sorry this one stuff that we we know
[02:44:12]  it's static like i already said that this page doesn't need um doesn't need any javascript because it's all static but if we go here something that's
[02:44:26]  more dynamic you know there are static parts interleaved with with dynamic parts with this transitional routing we would have the ability to take the things that are static on the server
[02:44:44]  essentially the things that like aren't the client components here and have them also update um yeah basically also have them still able to update um which without losing the um like without
[02:45:04]  just replacing everything so so i mean it's kind of like there's like it like you ask the server for the new states just like turbo does but instead of just like sw
[02:45:14] apping it you do a diff yes exactly and the reason that there's still it's still kind of ambiguous a bit for people's like diffing is a very react way of
[02:45:24]  doing it what if we could do it fine-grained right like there's different mechanisms but you're essentially looking at a means to basically do the heavy lifting of the
[02:45:37]  static parts on the server while you navigate while being able to still do small updates but keeping that server mentality and the reason the server mentality is is good and i don't have
[02:45:50]  an example in front of me is have you ever been to a place where you've submitted a form like a maybe a login page you're you're you're you're
[02:46:01]  submitting your new blog post um if if you've if you've ever done that um sorry like i almost wanted to go to def too but i i'm in any cognito
[02:46:13]  right now sorry like if you've ever gone to that and let's say create a post and you click publish if this is a client-routed page what ends
[02:46:25]  up happening is you post your new thing and then you're still sitting on this page maybe showing some indicator and then the client goes oh um i'm gonna wait to the response
[02:46:39]  and then i'm gonna navigate you now that i know it succeeded i'm gonna navigate you to the page that shows shows the actual post perhaps or maybe shows the list of
[02:46:51]  posts or something yeah yeah and at that point you go okay well i'm going to that page now client fetch again you actually do two requests um i don't know if this
[02:47:00]  one because you do you do a request to get to the new page and then a request to populate the data on that page exactly right but on a classic server rendered
[02:47:10]  thing you just post the whole page there and it returned with the new data yeah exactly and what's cool about this like all the uh sorry where is it all all of these
[02:47:25]  methods that aren't client they get to do that because you basically get to know you're on the server with the new location you know the client doesn't have to go
[02:47:37]  oh did this work did this happen you you literally come back with the new location and the client goes okay this is a new location i know what to do with it yeah as
[02:47:46]  long as the server has a a say in in the routing it can it can you know do some smart things where like intercepts a request that recurs with a new route i
[02:47:57]  guess yeah and yeah i i i've separated these into those uh four categories because i do believe that this transitional routing is not the same as hybrid like it is a it
[02:48:09]  is a different step it's it sounds smarter to me right um but it's probably the the i guess the question is you know if you want to keep it four versus three
[02:48:21]  it would come down to let's say they're both hybrid and transitional are very you know well developed options would you still sometimes choose hybrid over transitional and if you and if
[02:48:32]  you you would then i would keep it as four yeah and the and the truth of the matter is there might be the because the the first of not every framework could support transitional
[02:48:44]  in theory and the other reason is yeah actually i don't know it's actually hard to say because there's perhaps hybrid is more efficient like we're gonna see this is
[02:48:59]  the biggest question mark i just i'm securing a space for this because i know it it already exists and it will continue to exist um but as i said when i say medium
[02:49:09]  here the truth of the matter is like i'm saying medium because in react it means you have to bring in react plus more i think the react server components was demo was
[02:49:19]  like 50 kilobytes of react before you do anything and sure zero kilobyte components but it's 50 kilobytes of react and turbo links is probably like or something
[02:49:32]  like that like ryan's demo i i didn't open up the the where is it was in the other no it was here ryan's demo when we go to
[02:49:43]  the network and we refresh the page we're going to see this 1.4 kilobytes of javascript we're not hydrating here but i'm saying that that
[02:49:53] 's it like we're doing all our routing here and that like something like turbo can be really really really small um yeah so there's a huge gap in our understanding today
[02:50:06]  of what this means but it is conceivably possible that this medium could it could be actually medium like instead of 50 kilobytes maybe we can do it in 10.
[02:50:17]  and this client side as i mentioned the client side router itself might only be four six nine 10 kilobytes or whatever um but because you need all the code to render the
[02:50:29]  page after the fact it's not just high it's like super high essentially there's just no room but we're only looking at one table once you had these two tables
[02:50:40]  suddenly the intersection of them starts making sense you know for some of these things high and medium are only going to make sense when we talk about hydration and talk about how much j
[02:50:52] avascript coding in the browser like essentially these tables do impact each other when you have the combination because you can have something that's high and then in another table have something
[02:51:02]  that's like none or minimal and you've basically cancelled that out right it's like that's the example of mixing a like basically statically generating your like what your one entry
[02:51:14]  point route system and it's like well i could have done this with way less javascript if i chose the server-side server-side routing yeah um by the
[02:51:24]  way i probably should sleep but yeah yeah this is where i wanted to get to today um especially as we spent an hour on uh this week in javascript yeah no this
[02:51:38]  was great and i feel like this gives me a great basis for for moving forward and like following the conversation as it develops yeah so so yeah thanks so much and and um
[02:51:50]  i'm just looking at the chat to see if there's any any stuff we really missed but uh yeah a router and that can be in line exactly like the turbo example you
[02:52:02]  could literally inline the javascript for for the router like it just it's it's it's barely any overhead we always yeah yeah i know it's it's
[02:52:14]  great i i kind of want to make a video out of just the part where we went through the the the fetch life cycle i think that'd be really interesting yeah yeah and
[02:52:23]  i can give you the copy of that uh recording um or sort of like of the actual actual salad right yeah yeah yeah definitely save that excel draw um i i next time i
[02:52:37]  i i think i think it probably makes sense for me to pick up um this conversation on my next stream anyways because hydration presumably is still gonna be the topic and um honestly
[02:52:50]  this gives me a little bit more time anyway because it is a tricky topic these ones are clearly sorry these ones are clearly tables and you can just cross and mix them but a
[02:53:02]  little sneak preview for hydration is it's actually three different axes itself it's it's it's and i think this makes the conversation more challenging so we'll we'll kind
[02:53:16]  of look at that um next week and actually talk about like what what the hell is resumability and yeah different types of hydration how that plays together hopefully today just from
[02:53:27]  looking at this matrix you can very clearly place most of the frameworks that you're familiar with because 90 of them are going to be ssr or static routing plus client-
[02:53:42] side routing yeah and and maybe you use a few ones that are actually ssr plus you know like astro has servers i'd rather astro yeah yeah you know
[02:53:58]  um which is a little bit different and you know if you if you're wondering what the rails people are doing they're using hybrid plus turbo oh no hybrid is turbo plus yeah
[02:54:10]  plus ssr right yeah yeah already from this you can kind of see oh so if i take streaming and i take transitional now that's that react server components demo yeah
[02:54:24]  so we are actually um you can actually use this framework um to at least talk about the solutions i i do actually think that while a few options do play to a a
[02:54:40]  couple zones for the most part you can actually fairly easily bucket the combinations and it's not just four times four um 16 combinations to be fair i think a few of them are
[02:54:51]  vacant but yeah it's kind of like what you were saying before like we could talk theoretically about it but it's more substantial to like look at examples right but i think with
[02:55:01]  this this is this is how i think about it so this one i posed the question i was like i i told them i think there's three things i think it's
[02:55:09]  routing i think it's rendering and i think it's uh hydration the only problem is hydration is its own complex thing so um i think yeah so we'll get to it yeah
[02:55:21]  i think this is good ground setting so that next week you can be like okay we talked about all of this let's move in uh and yeah it'll be exciting so
[02:55:32]  yeah thanks so much for bringing me on and uh i definitely like feel like i had a lot of my questions answered so i don't know if anyone in the chat i feel
[02:55:43]  like they might have been more helpful but what i am hoping is that uh people come and check out this video will also learn something i think there's i think this is
[02:55:52]  this this keeps on coming up uh in the solid discord people posting links some articles and being like what's going on uh where where is in the conversation how do these architectural decisions
[02:56:03]  actually impact things and hopefully that those questions have been answered so yeah i'll be i'll be splitting this up into or or or remaking videos as we you know all
[02:56:14]  right sweet so yeah thank you everyone for joining us tonight thank you dan for joining us tonight um this is a lot of fun and uh i hope everyone has a great weekend um
[02:56:24]  yeah have a great weekend thanks so much see you