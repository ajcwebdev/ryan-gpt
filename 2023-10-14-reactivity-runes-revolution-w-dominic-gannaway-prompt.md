---
showLink: "https://www.youtube.com/watch?v=N54FZtNvk_A"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Reactivity, Runes & Revolution w/ Dominic Gannaway"
description: ""
publishDate: "2023-10-14"
coverImage: "https://i.ytimg.com/vi/N54FZtNvk_A/maxresdefault.jpg"
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

[00:00:00]  all right hello everyone and welcome to my stream today I am very very excited about this one I hope you all are too all right yeah and it's because we we have quite
[00:00:18]  the guest today I've been a big fan of Dominic Ganaway's work for years and years and I'm very happy to have met him over time interacted with
[00:00:32]  him and learn from him so to have him on the show today is a great honor and I'm very stoked about that so we'll have him joining us in a few minutes
[00:00:42]  I am just you know gonna shoot the shit for a little bit while we make sure people join the stream how's everyone doing today come say hi in the chat tell me tell
[00:00:54]  me how you're doing yes I'm already into my orange juice I'm going a little too fast today I'm I am hyped oh yeah I see I see you guys
[00:01:05]  are hyped too yeah yeah how's it going Greg yeah good thank you for saying hi in the chat yeah awesome yeah lexical that's that's one of the things we
[00:01:20]  associate with Dominic what else we got here so if we heard how I'm excited this for this yeah no I this is this is gonna be really cool um honestly and
[00:01:32]  one of the most exciting parts about this is I you know we'll see how it goes it's pretty impromptu you know this you know the stream here it's
[00:01:39]  casual so um I just know that um there's a lot to get into um when you look at really the last seven years of javascript framework um development Dominic
[00:01:52] 's had his hand in it so it's it's it's amazing um to to to hear that story all right how are you all doing I think I should probably go on
[00:02:02]  um twitter here and tell people that we're live a lot of a lot of actually interest on this one I mean unsurprisingly but um we've got we we we
[00:02:14]  actually had a lot of people interacting with this tweet um hyping up the stream today so thank you everyone who actually bothered doing that um not repost undo repost quote rep
[00:02:26] ost sorry I'm what they changed the UI ever so slightly in twitter the last like few months and it always throws me off I I published an article today and I'm
[00:02:36]  glad I published it with the title in the text because they they removed the title on links I don't know something new um but yeah I I guess I guess they're experimenting
[00:02:48]  I wonder if their analytics are showing that these improvements are actually an improvement uh whatever sorry I never remember my twitch what is it twitch to you right right it's a Ryan
[00:02:59]  solid I'm chat can probably tell me better than I can uh good people still coming in yeah super pumped nice nice thank you everyone for joining are we gonna reverse engineer twitter
[00:03:17]  I don't know I mean who was that the the one guy came in and he figured he could fix twitter in like a week um I mean can we fix twitter in a
[00:03:25]  stream I don't know all right I'm gonna post this here and get people um joining in on the stream all right all right I know one of these days I'll
[00:03:42]  have like one of those professional looking pre-rolls but today is not that day um yeah okay I think I think I'm starting to get set here george hots yeah
[00:03:53]  yeah that's that's exactly who I'm talking about yeah whatever happened to george I don't know I guess that's a rhetorical question I don't know
[00:04:07]  if I ever actually cared all right let's see here I'm still just killing a little bit more time because if you know me I want to make sure that yeah okay people
[00:04:20]  are starting to show up now all right all right that's good all right I'm just getting set up just give me two seconds but yeah I mean I'm gonna ask
[00:04:33]  the chat have have you guys heard of our guest today yeah you guys are aware of his work just signals and magic that's what you're here for all right you want
[00:04:54]  to talk about lexical yeah that's the that's the fun thing about this dream Dominic has worked on so many significant projects that I bet you we're gonna get
[00:05:05]  have people from all over the place wanting to hear about some about them yeah yes okay thanks chat I'm thanks for showing me that you're alive yeah thumbnail I I honestly
[00:05:21]  I think uh if you guys aren't aware uh David made that thumbnails salt community manager he's been waiting for this one for a long long time I think he had this like
[00:05:31]  already prepped in his head I mean he's gonna tell me he didn't and he just whipped it up in an hour because he is a magician himself but like he's
[00:05:39]  been waiting for me to have dominic on for a very long time um he was involved he built obviously solid's website but actually for people that know he was involved in
[00:05:47]  the inferno website back in the day so they go way back as well so he he was ready to bring his a game for the thumbnail um which is just amazing because yeah
[00:05:56]  it's it's probably the best one yet I'm it's got to be between this one and the bullying one so yeah long time yeah hey hey David how's it
[00:06:05]  going yeah well if you are Svelte people who haven't seen you know Dominic's previous accomplishments they're pretty impressive in their own right so I hopefully you'll learn
[00:06:21]  something on the stream as well um we're gonna we're gonna go hopefully tackle the whole gambit within time constraints I'm me and Dominic can sit and talk shop
[00:06:30]  for hours we've you know done that so we'll have to contain our excitement a little bit here for for the stream but um yeah no it's good I'm hyped even
[00:06:41]  lit has signals now I mean I'm not I'm not surprised I actually saw something about them changing their template to do some pre-compilation yeah we're gonna talk about
[00:06:51]  no build today as well a little bit later on in this week in javascript um so you know unless it comes up before we'll we'll see but yeah yeah
[00:07:02]  yeah no signals are almost everywhere okay okay yeah they have a helper for preact signals okay have I have I been wasting enough time yet you is everyone here hyped yeah yeah
[00:07:20]  no no I the chat's dead silent I guess they don't care I'm sorry maybe let's just drink some orange juice all right here we go okay okay let's
[00:07:35]  go let's go all right all right all right all right okay so um without any further ado I'd like to welcome my friend Dominic Ganaway onto the stream
[00:07:52]  um welcome so much uh thank you so much yeah good to be here and good to see so many people on the in the stream yeah come say hi in the chat you guys
[00:08:05]  yeah no it's it's it's awesome um you've been requested uh for I don't know almost since I started the stream people are like oh we should have Domin
[00:08:16] ic on you know talk about Inferno or talk about prepack or talk about lexical or talk about whatever so um yeah definitely very excited to have you on um
[00:08:26]  I just listed off a few of the you know highlights of your accomplishments but I don't know I usually leave it up to my guests they um introduce themselves a bit so uh
[00:08:36]  here there you go yeah sure so I mean yeah I'm Dominic and lovely to meet everybody and um I guess we can we can start my journey before around the time
[00:08:47]  of Inferno but for those who who don't know me etc currently I work at myself on Svelte um busy harder work making Svelte 5 a reality and
[00:08:58]  hopefully something that people will love um and yeah that's kind of where we are now um and obviously you may have seen the the runes post that came out a few
[00:09:09]  weeks ago and obviously our endeavor into signals which is something that I've been quite passionate about not maybe as much as wrong but you know over the last year or so and so
[00:09:21]  it's been quite interesting taking the ideas and concepts and things I've learned over the many many years working in this space and bringing it to Svelte right definitely yeah
[00:09:32]  I was I was gonna I was gonna ask you yeah because like I I was very stoked to have you on board um you know on the signal side because my first introduction to
[00:09:41]  you was the guy who wrote the fastest virtual dom implementation right um which is incredible uh so yeah I guess I guess we're gonna find out how we how we got from a
[00:09:55]  to b um but can you tell us a little bit how you got started um in web dev oh yeah so oh I don't know how many years now when I was
[00:10:06]  about well let me start from the beginning um when I was say in I started programming from about seven or eight years old and my first language was visual basic five um my dad
[00:10:19]  kind of like saw that I was interested in this game I was playing called nuke with 3d and it had like a map editor and the map editor you could like
[00:10:26]  you know set up very basic primitive programming tools and loved it even though that game was clearly too young for my age group um got into programming from there um and kind of enjoyed
[00:10:38]  making games I kind of really wanted to be a games developer um and then spent most of my teenhood hacking on building game engines and sort of multiplayer engines and it went from
[00:10:50]  visual basic into java and dot net and c sharp uh like originally before that c and uh and along the way I was like enjoyed hacking and modern games at the
[00:11:01]  same time that makes sense like sort of rpg games and that sort of thing I was really interested in that because there are games I could build like 2d graphics at the
[00:11:09]  time it wasn't like 3d moving complicated we have an incredibly similar story on that side because yeah my start was also wanting in game devs specifically rpgs I used
[00:11:19]  to play in like dot net and c sharp and uh like originally before that c but like trying to build these rpg games in the towards I guess the late 90s
[00:11:28]  what kind of rpgs did you like back then like what was your um my favorites were diablo um diablo 2 legend of me was another one that was quite popular
[00:11:38]  too um and yeah I just enjoyed that sort of thing I just enjoyed like rts games I enjoyed like you know warcraft and command and conquer and that sort of thing
[00:11:47]  um and civilization was another one that's popular oh yeah I love civ yeah no I I think I was more on the jrpg side but yeah um civ was uh on
[00:11:59]  the pc game side I I my uncle showed me that he was an engineer and he funnily enough and he was like show me that and he played it over and
[00:12:06]  over again and I got hooked for several years yeah no no I definitely feel you there I used to played renegade command and conquer renegade for many years too no
[00:12:15]  that was quite fun even though it's a non-rts I was sort of fps but late that's kind of what my childhood and I ended up going to university in
[00:12:23]  the UK um forgot to mention I'm based in the UK if that wasn't already obvious um and studied computer science um and when I was there I kind of as my sort
[00:12:33]  of final year project built a full sort of like rpg multiplayer game nice in.net xna that was full of pokemon but like with our own graphics and stuff uh
[00:12:47]  and what's interesting was I didn't want to do the documentation for it which was the majority of the degree and so I coded the entire thing and my I had my house
[00:12:56] mates who worked on it with me did all the documentation so that was all compromised you're not getting pretty good um scores in the end from it so that's quite fun
[00:13:04]  nice along the way yeah I remember xna that was like the they tried to build a bit more of a framework around it because I remember using like direct x directly was like
[00:13:13]  a pain of like super long name dot super long name dot super long name as you're trying to like pull out all these dll stuff anyway sorry I'm I tended it
[00:13:21]  my bad just let's continue I this is very just nostalgic for me yeah and actually one game that you can kind of see that I never finished but I kind of started
[00:13:29]  I even got the trademark for what's called iHacker so it was a hacking simulation game that was meant to be multiplayer and there's another game like it called uplink
[00:13:37]  and so that was kind of my thing and if you go around youtube today you'll find videos going all the way back from then and I rebuilt the engine like seven times in
[00:13:46]  different sort of like languages and different like engines and that was kind of that's part of my sort of introduction to performance is like building game engines and because I had a
[00:13:58]  netbook I couldn't afford anything more I was a student and so I had this really basic netbook and I had to run all this like sort of hardware and software like
[00:14:07]  properly in there and then you know that was where I kind of took a deep dive into building my own game engines how could I get the best frames per second you know
[00:14:16]  how do I get the memory down so that kind of stayed with me for a while and then once finishing university I quickly realized there was no work in the games industry it was
[00:14:26]  like terrible pay long hours and yeah I had a kid in the way as well so I had to like kind of buckle up and just get a job that paid and got
[00:14:37]  me you know a food and a household above my head sort of thing you know so I jumped into sort of the web dev industry working in php um back then there wasn
[00:14:49] 't really much javascript other than you know sort of like I think jQuery had just about came out always before jQuery you know that was that was the time period
[00:14:58]  and yeah that was kind of what we did um building websites for different brands and agency stuff and I did that for a couple of years and then after that I kind of
[00:15:08]  delved more into javascript and sort of more less of a toy language because before that I played with action scripts and other things and I much preferred the sort of form
[00:15:18] ality of using you know .net and java and more sophisticated languages at the time than javascript but when I saw that it was possible javascript and also what
[00:15:26] 's happening to the language that more was coming to it and I kind of took a big interest and actually took a job working in a fintech company specializing in
[00:15:36]  sort of javascript web application development what what time period is this about like what year this would have been about 2014 2015. okay but yeah about 2014. so what was
[00:15:49]  interesting there was that they were building applications for banks and for like you know sort of that sort of clientele and a lot of it was building trading applications where you have
[00:16:00]  very quick uis showing prices changing and ticks and everything like that and it was on mobile as well as desktop and so that was that was insightful and at the time that was
[00:16:08]  powered by knockout so that was a good experience using knockout and using knockout templates and there's a knockout nice something like back end that was written in a
[00:16:19]  mix of c plus plus and c and java and the front end was obviously javascript you know and we had our own huge framework parallel and and these banks trusted what
[00:16:30]  we built and and it was it was there that we kind of I guess I kind of explored open source for the first time as well like really sort of I always wanted
[00:16:38]  to like contribute and build stuff and I had always done that but I was always too afraid of like sharing it in the fear I guess impossible syndrome that somebody would look at my
[00:16:47]  code and like oh you're terrible actually what's really interesting was I built a library called t7 which was like a tag template library that would take your tag template and convert
[00:16:59]  it to like jsx or like react.create element um and I thought it was amazing because at the time we couldn't use jsx at work because we didn
[00:17:09] 't have the build tool in there there was a reason at the time I kind of wanted also to show a library that could build so I built that and then I think a
[00:17:16]  week later Dan Abramov tweeted like how terrible his library was on on twitter and I'd never known about Dan up since that point I was like who's this guy you
[00:17:24]  know why is he saying this for you know um and that kind of got me like inspired like this guy's not going to shoot me down I'm going to try harder
[00:17:32]  and make this well do you remember what his complaint was about it or I don't think it was a complaint I think it was more like this is why we don't need
[00:17:39]  this this is why we need jsx or something but it it brought it brought attention my way when I wasn't expecting it and also like um kind of got me like excited
[00:17:50]  about this sort of thing like I didn't the imposter syndrome kind of wore out I I saw myself as like oh I can I can do this you know um and
[00:17:57]  so yeah I kind of from there decided I want to build a faster react because at the time I think it was react 0.14 or 0.13 yeah um and it
[00:18:08]  was it was not quick especially on mobile and we were building with trading applications and it was quick enough but it was it was still noticeably slow for what we wanted and we
[00:18:19]  just came from knockout and I had promoted this whole change over to react and you know I just saw like an obvious opportunity to like make this faster so around that time
[00:18:29]  sorry yeah I didn't mean to interrupt I just wanted to stop there for a second we'll continue on that thought I just wanted to ask you um so you what what motivated
[00:18:39]  this is just important for me at least I care about this what motivated the move to react from knockout did in the first place um the templates were terrible the two-
[00:18:49] way bindings were causing a lot of issues and bugs um testing them was difficult and also there was um sort of like there was a combination of things like I can't remember
[00:19:04]  fully all the things there were but also the companies wanted to like leverage newer tech and do more you know with what they had do you do sorry no continue there were lots
[00:19:14]  of like ideas going around the company about how we could modernize and it wasn't just react as well it was at the same time we had all this other sort of like
[00:19:24]  tech that legacy code they want to modernize so the idea was whilst we were modernizing that this is an opportunity to also bring in react because I the company doesn't really
[00:19:33]  change that often it's not every year they change their framework it's like every five years so if you're going to change that at the same time you might as well
[00:19:40]  update your sort of front-end UI stack as well do you remember like the first time you saw or heard of react like what your reaction or thought of was around it I
[00:19:49] 'm just curious um yeah I I was I was hesitant at first to some degree but I did try and play with it I did actually really like the idea of I mean I
[00:19:59]  think it came from a game background engine but like having this sort of declarativeness around a UI and either you throw away and like start again the next sort of cycle
[00:20:09]  that kind of right um what is it called the um immediate mode um yeah under yeah and like it always occurred to me it's like it's like double buffering like you
[00:20:20]  keep doing that and then you then commit the the one that you want to stabilize onto the screen that's not how I thought it worked at the beginning so I was like oh
[00:20:27]  yeah this this kind of makes sense and obviously it didn't work that way but like you know it kind of it looked good and I like the idea as well of sort
[00:20:34]  of encouraging people to treat that as like you know as a safe space that your render can be pure and you can like you know sort of go through that way and that that
[00:20:44]  kind of that's why I built in phone I was like this is actually quite good you know some some of the ideas are really impressive and obviously it worked for Facebook so
[00:20:51]  there was you know some some form of validation there that it was good um right so Dan Abramoff calls you off calls you out you have some respect for reacts uh like
[00:21:04]  design pattern you're going to build a faster react but how does that go it was it's originally called system or core js or something I called it before it's called infer
[00:21:14] no but it was just like it was my implementation of a virtual dom um at the same time there was a set of like framework uh sort of virtual dom benchmarks I think
[00:21:24]  it's called the virtual dom benchmark by Boris Kuhl who so he was he was kind of like do you do you know how to pronounce his library is it evie
[00:21:36]  or ivy or ivy or ivy or evie but it could be called ivy as well I mean I mean what he did quite a few libraries back then and
[00:21:43]  also he was quite encouraging the scene he obviously pushed these benchmarks out and there was another guy called joel who built a library called sito um and he and we met
[00:21:52]  up in london at one point whilst he was visiting and we just kind of came up with ideas on how we could build this sort of perfect library uh and it was
[00:21:59]  kind of funny because that's when we actually did template cloning this is all the way back in 2015 or something you know and so like you know lots of ideas then
[00:22:09]  were like how do we optimize you know um v8 at the time was in crankshaft so it wasn't even using turbofan there's an orange sort of jits
[00:22:17]  compiler they use at the time so it was all about optimizing for that and i'd always take that the v8 output and bytecode and decipher and figure out what the de
[00:22:26] ops were and go through it and like um so that was yeah it was a very interesting journey like figuring out how to get the best performance figuring out how to do things
[00:22:36]  intelligently and you know yeah because crank crankshaft was like i remember that time period optimizations seem nonsensical like it'd be really optimized in one specific path
[00:22:47]  and then other ones you'd like completely i know engines always have that problem but crankshaft like it was never it never back then it never felt predictable i feel like
[00:22:55]  with turbofan um they kind of generalize stuff in a way that's at least more sane i don't know maybe that's just yeah i mean that there was um i
[00:23:03]  forgot his name now benedict who worked on like the v8 team at the time um i'd always ping him and say look this is something weird is happening here i
[00:23:11]  have an object literal that has eight properties but as soon as i add nine properties it gets de-optimized it's no longer monomorphic and he'd be like
[00:23:18]  let me check he goes oh yeah sorry we had like some arbitrary number or something you know we've just increased it to 64. and then like all of a sudden like
[00:23:26]  it would be fast enough to do things and i guess also what helped inferno over the years was it was put into the speedometer benchmark speedometer 2 i believe it's
[00:23:35]  called now i know i know they're building speedometer 3 now but back then that was kind of like a good way of getting your framework optimized by the browser and vms
[00:23:43]  because if it was in that that's what they use they didn't track all the other metrics but if it wasn't there there's a good chance they'd figure out
[00:23:50]  how to like make it quicker so over the years you know although inferno was never really being developed by anybody it was maintained um by the team when i left it but it
[00:24:00]  hadn't really changed so much yeah but it was continuously getting improved by the different browser vendors because it was inside their benchmark so you know that's quite interesting to see there but
[00:24:11]  uh how yeah so yeah no which is amazing i i did notice that and over time i've watched inferno i was at last um about a year ago i feel maybe
[00:24:22]  six months ago um like the js framework benchmark slightly changed the way they were doing some measuring and then in over time inferno even though the code basically hadn't changed actually basically
[00:24:32]  just caught right up with with solid and some of the other ones just simply on like over time it's been getting faster without the code changing um which is pretty pretty cool uh
[00:24:42]  to see but when you went i'm just kind of going back now to when you first created inferno so you you set out to build this faster um react essentially um
[00:24:52]  were you concerned about api like like compat or were you just like i want to make a fast vdom and just try and cater to it the best i can like how
[00:25:03]  did you approach this um well there's a lot of things actually so initially it didn't have the same api it had sort of its own api but i i
[00:25:12]  saw that an opportunity to basically the tooling in the ecosystem had changed there was easy ways now of looking into webpack browser if i and basically saying if you import react you
[00:25:24]  can change it to be import this other module instead um so i thought why not do that you know make a compact library then you can just change your webpack config and you
[00:25:35]  can load inferno any time you learn import to react and then what we did then was we ported over all like the react tests that were relevant and made sure we passed
[00:25:44]  through all their tests was interesting at times pre-act had done the same thing that they were going after this compatibility but they didn't bother importing and and validating against
[00:25:53]  the tests so when we didn't get past all the tests we were never fully 100 compliant and that's because we made specific decisions not to so we implemented like part of the
[00:26:03]  synthetic event system that was right implement it all so there were things like that that were differentiating between the libraries but i don't pre-act didn't implement it at all
[00:26:12]  so if you had unchanged and you know there was weird hacks why it could work there but it wouldn't work properly with all the weird things they do um and there were
[00:26:19]  other events too that mainly the event system that things differed for yeah i'm very familiar with that event system the what do you call semi-synthetic event system was
[00:26:29]  what solid ended up adopting and it was directly from looking at inferno what inferno does yeah yeah i ended up rewriting the event system when i was on the react team
[00:26:39]  which we get into later so that's interesting but i would have so okay so yeah it wasn't the you just wanted to do performance the and you saw a free win
[00:26:50]  if you could potentially make these things align from a like api standpoint get the test path for me it was a bit of fun and i didn't expect it ever to take
[00:26:59]  off um i i posted a link to hack and use and then i went out like to a nightclub that same evening and woke up in the morning like like oh where
[00:27:11]  am i what am i doing and looked to my phone and it had like the repository went from 500 stars to 10 000 overnight wow people were clearly looking for a faster react and
[00:27:24]  we had probably like 200 open issues overnight as well like i was like what what happened there you know it's crazy um and yeah it was suddenly gained like a few thousand
[00:27:35]  followers on twitter overnight too when i had less than 100 so it was kind of weird how overnight i got all this exposure and i was like oh maybe i should invest more time
[00:27:43]  into this hacker news eh uh it was funny because this comment came in earlier when we're talking about imposter syndrome about having the guts to even post to hacker news and i
[00:27:54]  did not realize that that you made the post to hacker news that caught inferno on fire originally that's that's pretty cool i made a good logo i think that helps
[00:28:03]  a good logo we had lots of compliments people who designed your logo i was like oh i did you know just hacked it up one evening um in photoshop but no that that
[00:28:13]  was people like the name people liked the logo although the naming thing came in next so obviously we blew up on hacking news and reddit and what else and then like all
[00:28:23]  of a sudden we're getting like emails from like the inferno os community like requesting we change name because there's too much we've obviously taken their name and somebody even sent
[00:28:37]  me a fake dcma takedown notice email which i i got checked over and it was like completely like just from someone holding me but yeah they were angry why
[00:28:47]  you you can't use his name and you need to change and i was like why but we're javascript library that has nothing to do with your operating system you know
[00:28:55]  it's like um but yeah we kind of it i didn't do anything about it just kind of like settled itself but that was my first like negative experience i guess because i
[00:29:04]  was like oh it's positive so far and then it comes and yeah that was the thing that kind of scared me off a bit because i was like as as a sort
[00:29:12]  of framework author i can either pursue this and keep working on this and try and get a gig somewhere working on inferno full-time which kind of could have happened potentially i
[00:29:22]  after working for that company i joined tesco which is a large sort of uk-based grocery store a bit like walmart in the us um and like a lot of we
[00:29:32]  weren't working on inferno there but there was like you know ideas and how that sort of thing could potentially happen in the future there were also other places that were interested
[00:29:40]  i got reached out by netflix at the time and they were like hey come work in inferno full-time and work for us so um but i also didn't really
[00:29:49]  like the exposure to some degree like i'm not a very public person um i i kind of enjoy sort of the technical side of things or like the sort of intermediate side when
[00:30:00]  you're with a team and that's where i kind of do my best not like trying to be an influencer or like some kind of like public person you know so right
[00:30:10]  kind of like and then the negativity from that kind of was like the demand you know that the request to fix something quickly you know um and what was annoying as well and kind
[00:30:21]  of embarrassing was our biggest user was a brazilian porn site um and he had his development team right create all his pr's and issues but he continuously send us bug
[00:30:33]  reports with links you'd open and you're like oh my god what what have you said and they'd be like look like there's a bug with like some dom node that
[00:30:42]  isn't correctly placed and they'll be like all these images around it trying to figure out it's very distracting so like you know that was kind of another side that was
[00:30:52]  like crazy wow yeah uh this is this is this is definitely lots of fun yeah i mean that's the thing with open source right like the copyright thing was something we were worried
[00:31:02]  about too actually that's why we were interested in what you did about inferno because it's like how easy is it for a name to be out there and it's
[00:31:08]  like are you gonna go put a bunch of money in to like try and get some kind of legal protection of this stuff and it's like there's like this whole other side
[00:31:18]  of open source that isn't obvious when you're the guy writing the library but then suddenly when people actually use it there's like a whole bunch of other stuff you have to
[00:31:26]  worry about um government governance models in the community to like you know yeah guidelines and all you know all this stuff and then yeah to boot you know just all the you know
[00:31:39]  the the users you now have um sitting there who can just knock on your door at any time um but i think what a lot of people probably want to know and i won
[00:31:49] 't i kind of uh curious about here is like i i at first i was thinking like about talking about performance and inferno but i think i think people like there's
[00:31:59]  there's what makes a a framework fast is um a lot of small things maybe not one big thing right like what made inferno so much faster in the competition at the time
[00:32:10]  could you summarize that or is this just you know um yeah i mean i could i can summarize it yeah i don't think it was even the fastest to be honest it was
[00:32:20]  probably neck and neck with um boris's library yeah um that so i put it down to like maybe four or five different things so one of the things is when we
[00:32:30]  created the virtual as you would call it the the object structure that represented your downloads and the template um we reused that so that would be the same thing that encapsulates your
[00:32:39]  state so we wouldn't create another data structure there so that meant wayless allocations did how was that done via like i know you have a custom jsx compiler um yeah
[00:32:51]  so that plays part of it so that's the next thing i i guess but like we so when you have like create element out we would like store the download on the
[00:32:59]  create element sort of object if that makes sense rather than create another tree that you then traverse for and put that in there were there were complications around keys like like lists where you
[00:33:09]  have keys because it react has an implicit key where if you don't give it a key it kind of derives a key from the ordering the next thing we did was we
[00:33:18]  had a custom jsx transform which ensured that we weren't creating create elements per se we were creating objects that had um sort of flags bitwise values that avoided us
[00:33:28]  having to do lots of nested if statements so if you imagine like having type div props and some things like that you then have to at runtime go through and say it isn
[00:33:38] 't an array if it's an array how many items does it have if it has items what do you to do with it is it text do something with text the bit
[00:33:45] wise thing that the compiler or the the babble plugin could say hey this has no children it's a string that's all and then bitwise values like interrupting them at runtime
[00:33:56]  is a much much faster way than doing instant solve or is array or typo checks they're actually quite expensive to do them they become quick when the inline cache kicks in
[00:34:05]  but that's if the inline cache kicks in and and and a whole bunch of other things too so we were able to just like save a lot of like sort of
[00:34:13]  runtime overhead by doing that and i guess the other thing was we we use um a very optimized sort of reconciliation pattern for how you deal with lists of items and so the least
[00:34:27]  um subset of basically how you can move the dom nodes in a list in the least possible don operations possible i mean it wasn't the least because there's always different ways
[00:34:38]  of doing it and also it doesn't always follow that sort of schema because on the ui and the web you don't typically do some patterns as much as others you know
[00:34:46]  right so there were ways of like also further optimizing for common use cases but that was kind of what we did um and we also did some other things we had like a much
[00:34:55]  cheaper version of sure component update that you could do it in line this is prior to hooks so we're using class components and we also ensured every single object was mon
[00:35:03] omorphic so we don't same object for everything one object and it allowed the vm to basically use the same hidden class behind the scenes and we we did that and also
[00:35:15]  we never used classes or anything and we tried to avoid looking up prototype methods instead we opted to have dysfunctions everywhere so there were quite a lot of compelling things as
[00:35:24]  well um and they all added up so when you compound them together um it enabled us to have really good points yeah i mean it's it's it i remember like obviously the
[00:35:35]  js framework benchmark which we all agree now is kind of past its prime and the some the virtual dom framework or benchmark was actually more probably indicative or telling of how things uh you
[00:35:48]  know should be but if if i go back to even the earliest days of the js framework benchmark i'm trying to remember was inferno in it like right at the beginning
[00:35:56]  or it came in like a few versions and it it and evie or keevee i think that predecessor were like way ahead of the crowd for the time i'm
[00:36:05]  trying to see if i can actually find like the old round results here i'm doing it a little bit off screen angular pre-act okay inferno isn't in there yet
[00:36:13]  um around three sorry i i'm just sharing my screen for two seconds so people see what i'm actually talking about here because it was is this like the beginning of do
[00:36:22]  you remember this old colored table yeah here's inferno right you can you can you can see how big of an impact this was like these aren't sorted in order but if
[00:36:32]  you go back in the day like vanilla js was all green this is our baseline inferno was 30 slower on average you know with a geometric mean um but like re like if
[00:36:44]  you look at these other libraries there i guess there's this thing called plastique here that was you know actually somewhat in the range but like a lot of the basically at
[00:36:53]  the time like what were you going to pick up a react 1.84 um view 197 uh what else we got in here like ember four yeah i mean we weren't
[00:37:07]  as good at measuring things back then now angular what's angular yeah 241 but inferno like jumped on the scene very much in front of the crowd almost undeniably
[00:37:17]  in these like bench on these kind of benchmarks i understand that on the vdom ones like boris's tests are more specific but this kind of i i remember seeing inferno
[00:37:27]  and being like wow you know like it's almost like vanilla javascript i i have to ask like when you did this succeeded at that goal like did was it did
[00:37:39]  you ever get around to actually like i mean you must have because obviously you've worked with dan years later but did you ever get around to actually like have that conversation with the
[00:37:48]  react guys you know and then be like you know when you're like like how's like inferno so fast or are they kind of like already like you know just made
[00:37:57]  different choices we're on the same page because like for me this was very surprising when i first saw this new framework jump on but i don't know yeah well that's the
[00:38:06]  next interesting thing um so if you fast forward a few weeks from the hacking news and the brazilian incident and then you you come across uh a tweet from sebastian
[00:38:18]  marbo who was the tech lead on the react team at the time and he was like inferno i can't remember the exact quote but it was like inferno is great
[00:38:28]  if i were to rewrite react today i would do it like inferno and then we kind of rambled i was like wow this is uh impressive like where's this come from
[00:38:38]  um and then i got an odd invite i got invite to uh a chat sort of like live sort of event like it's like a mini meetup um at the facebook
[00:38:48]  office in london and because they had a small office there and i went over and just kind of watched the talks and at the end there were like groups of like engineers
[00:38:57]  i didn't know anyone there i was literally by myself and kind of was a i was a bit annoying actually i was like no one's really talking to me but the pe
[00:39:04] eps is good you know i'll stick for them and then i was i just kind of stood in a circle of these people talking and somebody mentioned inferno like without knowing
[00:39:12]  obviously they had no idea who it was and i was like oh cool yeah that's a good library they were talking about it and it turned out the people like christopher cha
[00:39:21] udeau and dan abramov and and they're like oh you look a bit like the guy or something i was like yeah it's me you know you invited me you
[00:39:28]  don't remember and then kind of got talking and they're like come come back for facebook you know um but we want somebody like you to make react faster so um i
[00:39:38]  i kind of nothing happened for a while because like i would have just started a new role somewhere else and i wasn't too sure if i really wanted to work at facebook i
[00:39:48]  wasn't really sure i like i guess the impostor syndrome kicks in i wasn't really sure if i was good enough to work for a company like that and all my
[00:39:55]  interviews at that point had not been about like oh notation and you know linked lists and stuff which i just assumed like the typical google facebook company would ask and i was like that
[00:40:05]  isn't the sort of interview for me you know i like to like do live demos and build something for real and tell me if i'm good sort of thing you know so
[00:40:14]  i decided like maybe i could do it and then a recruiter hooked up with me and i ended up interviewing and getting through the interviews and bizarrely i got pre-
[00:40:23] allocated to the react team so that's like a special path usually have to go to boot camp and you have to like find your team but they kind of like yeah
[00:40:30]  come join the react team you know um and i actually got interviewed by some of the people from the react team which was pretty awesome too so i had these interview questions and did
[00:40:37]  well enough obviously to get through and enjoyed um and i guess you know what was interesting was like i always assumed i'll be joining to make react like inferno make it
[00:40:48]  faster so like you you went through that process because they tipped you off to it but did you guys like have conversations of like like much conversations ahead of time about that yeah
[00:40:58]  that's a good point so dan pinged me and would invite me over to the office like in the evening after work a couple of times and i'd come up we'd
[00:41:07]  grab a coffee we'd sit down at a table and get laptops out and i'd be like this is something you're doing wrong something you're doing wrong you need to
[00:41:14]  fix this you need to fix this you know and like he'd go through and like you know and like take note of the things and he'd explain why something was done a
[00:41:22]  particular way you know but the big thing was like they were in the midst of rebuilding react as it was anyway and that was react 16. right it was a whole new
[00:41:32]  architecture based on fiber the fiber architecture so the fiber architecture was all about you know having this notion of like a diff sort of a fiber graph that represents a ui and also
[00:41:45]  represents the intermediate things in that ui too like your components and your context and the ability to potentially fork it and do things with it to enable asynchronous concurrent rendering basically so
[00:41:57]  when i came around that was what they were doing and actually i got involved in in that sort of thing anyway and so right straight away one of the things i did was i
[00:42:06]  enabled flat bundles so i used to they used to ship like thousands of modules to npm and you'd load it in your in your browser or whatever and obviously they'll
[00:42:15]  be bundled but like it'll be slower so we kind of improved on that and we improved a whole bunch of things and made it see couldn't interrupt with the private
[00:42:22]  things so we got performance better and i did a conference talk in paris that same year where i talked about benchmarking so one of the interesting things a lot of people don
[00:42:31] 't know is is the requirements of facebook are very different from the requirements of your company or some other company facebook is huge like they don't have you know thousands of components they
[00:42:43]  have tens of millions of millions of components um you know they don't have a few hundred developers working on it they have thousands and thousands of engineers working on like these products
[00:42:54]  and it's in one repository so monorepa so it's like a different kind of scale to what you typically are used to so when you open up like um a website
[00:43:02]  that's in on from facebook scale it's like there's probably a good few thousand components being rendered on that one page so a lot of that is actually spent processing user
[00:43:14]  code not framework code so when i tried switching things out to using inferno and another engineer called sophie actually did that just before i joined they tried that there were benefits but
[00:43:26]  they weren't benefits that you'd say are mind-blowing like the time taken to render will be like 900 milliseconds down to 800 but was it worth winning 100 milliseconds from
[00:43:38]  changing framework versus going all in this new direction architecture that wasn't compatible with inferno you know that and so inferno did things like i mentioned before way putting it put like
[00:43:48]  the dom onto the actual virtual itself that wasn't compatible with this immutable fully immutable data structure that could be forked and split but like git it's about that
[00:43:57]  git branch and you know and get rebates exactly so that that's where that came from so instead of that i thought well if i can't change the runtime without you know
[00:44:07]  causing change to the team i'll go ahead and do the next bigger thing i'll build a compiler that makes all your applications much faster can i we'll talk about that in
[00:44:17]  two seconds i just want to back up we we went through a huge amount of uh stuff just there and i just want to back up to one question because the thing that
[00:44:24]  i always wondered about personally and i know the answer because we've talked before but i think that they might want to know is when you joined meta did you have to like was
[00:44:33]  it your choice to uh like stop maintaining inferno was that part of the deal like like like was that a you said before that you were you had you had some negativity with
[00:44:43]  the open source side of stuff and you're like you know maybe it's not for me but like how did you make that decision like how like how did that happen um
[00:44:51]  yeah so when i joined i asked about the sort of processor and i filled a form in that meant that it wouldn't become like ip belonging to facebook and it would still remain
[00:45:00]  a separate entity and they were fine with that but at the same time i didn't want to work on something i i had to detach myself in inferno so i could
[00:45:09]  put everything into react and at the same time i felt like um inferno was always going to be niche and if i could take the things i learned there and bring it to
[00:45:21]  react that i could affect the majority and give everybody the same sort of wings you know it'd be a much more impactful thing and so that my my perspective was i'm going
[00:45:29]  to try and do this on a bigger scale and try and make it work for you know tens of millions of people rather than a few thousand people that might be using infer
[00:45:36] no um and i kind of like you know handed everything over to the team um and there were a couple of engineers on that team who still maintain it today um yeah i actually
[00:45:47]  met up with like the guy that leads the project now and came over to london everything a few years ago so that was really awesome so like that team is still the
[00:45:53]  project still healthy and it's still maintained i believe it's still got funding as well from open collective or something so it's that was maintained but i needed personally to separate
[00:46:01]  myself so i could put everything into working in my new role how how how like between inferno first like being released and you know you leaving inferno how long was that was
[00:46:12]  it like six months a year i um in front of 1.0 came out in january just before i joined or about the time i joined facebook um and that was it
[00:46:22]  that was like the departure i think by that point it had close to 12 000 stars and get help or something yeah so probably about six months yeah that was i mean the
[00:46:33]  project would be i've been working on it for like a year probably more than that but i just didn't open source it because of imposter syndrome i was like no one
[00:46:40] 's gonna like this people just don't get this library you know and so that was kind of yeah that was that's where that went okay yeah okay yeah just for perspective yeah
[00:46:50]  because it's it is definitely hard for i've seen projects that like when they're like initial creator moves on like it definitely changes their trajectory a little bit but um i
[00:47:01]  was that's why i was trying to gauge like how long it had been in and but it also probably affects your attachment to it as well you it sounds like you're ready
[00:47:09]  for bigger things and okay not rewriting react you're going to build the the next compiler so what yeah take take it take me through that just to step back from my
[00:47:21]  perspective um i just want to see the web succeed as a whole like i don't i don't particularly like have fanboyness towards things i i see a lot of like
[00:47:33]  what people you know go into these camps and they're so negative towards the competitive framework i'd see that's kind of childish in some respects because like everyone's all trying
[00:47:41]  to like do the same thing they're trying to make the web better they're trying to innovate and people are trying to learn from innovation and do better but the ultimate goal is
[00:47:49]  to make your ui and your users and who use your website the best possible and the people that develop your website and make the website the best possible thing so it's all
[00:47:57]  about it's all in the virtual trying to do that and the longest time i was i was also met rich harris in like we'd go out for drinks in l
[00:48:05] ondon and that sort of thing every time he was around and i remember like poking him this is like way before even i kind of started in fanno and like hey i
[00:48:12] 've got an idea and like you know we'd throw things around and like he was working on reactive and that kind of inspired me um to like look into doing the framework i
[00:48:21]  guess as well so i was like oh i've got this framework but i'm not going to open source it because it's silly he was like what is it like because oh
[00:48:27]  it's like react but it's way faster and i showed him a benchmark and he was like whoa you should definitely share that you know um so yeah and then like like
[00:48:35]  you're saying that when i worked in a react team we did a whole bunch of things i did a token benchmark and react and seeing what the things were there but ultimately that
[00:48:44]  i saw the next big thing is a compiler like if you were to build a sufficiently advanced compiler could it take your react application and compile it ahead of time um and remove stuff
[00:48:55]  that isn't needed so basically fix the user's code you know and make it faster so there was a project at facebook already started called prepack prepack was a sort
[00:49:05]  of head of time compiler that was built around react native so making react native time start to time faster and there were a bunch of folks based in seattle who were working on
[00:49:15]  that project um one of the a couple of the guys working on that project had like really esteemed backgrounds working previously at microsoft and working sort of like a lot of theory
[00:49:24]  around compilation very you know in a decade's worth of experience of how company compilers work and i'd never built a compiler before i'd worked in this babel
[00:49:35]  plug-in you know i thought well how hard can it be a compiler i mean yeah it's hard it's hard um but it was great because that going through the project
[00:49:44]  and just understanding teaching a compiler about everything so what prepack did was it followed the spec it would it would interpret every line ahead of time and run it basically as if
[00:49:57]  you're running it like normally as a javascript vm but it would know the things are abstract um in other words things that it doesn't know and it would know
[00:50:07]  things that are partially known um and it would know things that are leak that's where they go out to somewhere and you don't know about them anymore so have all this
[00:50:14]  part of theory you know around loops around sort of aliasing and it would generate a serialized tree and then output the content so we hooked well i hooked in sort of like
[00:50:25]  the note the notion of rendering that sort of the characteristics of react so react had obviously classes and he had a dot render method and that would process so we would abstract that ast
[00:50:36]  and evaluate it we'd see the render we see the component you linked to and then we'd go into that component and extract that tree and the props so we do all
[00:50:44]  the things that the reconciler would do at runtime but ahead of time and then we put it all together and what it amazingly did was it took the entire facebook sort of
[00:50:54]  comment reaction user interface that's on your news feed you have all these like components and it inlined all of them into like 250 000 file a single component that was the
[00:51:05]  entire ui right okay so just like just because that's a lot and i'm trying to like get my head around it here what it tried to do as you mentioned is
[00:51:15]  inline things uh in places so that you wouldn't have all these like uh i'm just trying like basically you want to keep the static stuff static so you like what i
[00:51:25]  mean by static is things that couldn't dynamically change you would try and like pre-evaluate them at compile time ahead instead of at runtime so like if there was
[00:51:34]  like i i know this is an example like if there's some kind of math equation that had one actual variable and then like a bunch of actual constants you could combine all those
[00:51:43]  together you could basically execute any it was almost like flattening out the whole like executions so like if you had functions they're calling other functions if there wasn't something specific
[00:51:54]  about those you could inline them and then inline those and then basically just i i don't know i'm trying to understand what you were explaining there that's that
[00:52:02]  that was my it would even run things that it didn't know anything about if you had fully everything abstract in a loop could he unroll that loop right at a fixed point
[00:52:13]  so there were lots of loop unrolling okay there were lots of very complex things so even like object design it would it would be able to object sign things that you didn't
[00:52:21]  even know about at combined with some things and actually give you the right output at the end so it was very smart how it went up i believe the the prepack website
[00:52:31] 's still around so you can actually try it out that's funny i'm going to drop a link in there for people to take a look at if i can find it so
[00:52:37]  it could it could do states it could do props it could do context it could do a lot of things we taught it a lot of react it is um and so it would
[00:52:47]  it would do that so it fully compiled and ran the test and passed the test for it ran the same output for that test for the entire sort of bunch of components for
[00:52:56]  rendering it once basically it passed and it worked the issue was then you just had a you know huge file that was terribly so you can't have a single function of 250 000
[00:53:07]  lines and it not be slow even though that was what was happening before so that it proved that it was possible and it proved that you could do this with like jsx and
[00:53:18]  all with react like a great element that wasn't the limiting factor because at that point in time there was this sort of faction where like we use templates in our framework because
[00:53:28]  that's the only way you can statically determine things and that was just fundamentally wrong you could do things with everything in react and js and that sort of thing and even today
[00:53:38]  this is basically what react forgets doing now on a much higher level um so like that is it's showing what's possible but so that project was very interesting even though
[00:53:47]  it got cancelled and it got cancelled because we weren't seen enough wins like it spent like maybe 18 months and at this point we like still wouldn't see any wins we saw
[00:53:57]  amazing accomplishments but maybe fundamentally the biggest thing that came out of feedback and the compiler was hooks and a lot of people don't know this but that was probably the biggest thing that
[00:54:07]  led to hooks because one of the things that we found that was non-trivial to compiler was this this keyword right in classes you have this and this can mean
[00:54:19]  almost anything yeah javascript great that way yeah so it could it could be bound to something else it could be something entirely it could be the global who knows it could be
[00:54:30]  anything so for a compiler perspective it was very difficult to understand what that was so we kind of thought about making up an alternative api that would remove classes and go over
[00:54:40]  functions and need the compiler to do more then everything's in scope right because like you like your hook you declare a variable you see that where that variable is declared and then you
[00:54:49]  use it like you further down yeah so yeah so it was uh i even came with the name hooks as well which is kind of fun fact um but yeah the team worked
[00:54:59]  hard and i'm like iterating ideas and eventually came with something that was kind of kept secret for a while and we released it to the world at react conf 2016 2017 no
[00:55:11]  2018 18 18 yeah it was october 26th uh 2018 yeah so yeah so the the project got cancelled but we did come out with hooks and hooked was a good accomplishment although
[00:55:22]  it wasn't perfect and i meant that on reflection there were some things about it that would change and that's led to some things here but like um yeah it was definitely
[00:55:31]  a team effort and and it was a good effort as well and we weren't too sure what would happen like when releasing it because you know we were excited but with the rest
[00:55:40]  of the world be happy about losing their class components we're not losing but you know it's it's funny there's a comment here wait so compiler therefore hooks not the other
[00:55:48]  way around and the funny thing is like the number of times that i've heard this kind of story from the react team has been a lot because there was that like five
[00:55:56]  or so years where a lot of people outside of facebook had no clue what react was working on and then like you know after around this after since the suspense talk and then featured
[00:56:06]  with would it feeling intentionally rolled out but kind of realizing that they were i realized a couple years later that they were rolled out almost backwards like like basically figured out what you
[00:56:19]  wanted to do then figured out how to like get there like or like like hooks and then hooks end up coming out but it was actually the like compiler that led to hooks not
[00:56:29]  the other way around it's it's it's wild anyway yeah unfortunately with such a project like react you have a cadency to move slowly not to cause churn yeah
[00:56:41]  otherwise you have like an angular 2 moment where like you have fragmentation so we were very like cautious not to cause any fragmentation um and we'll see we wanted to make
[00:56:52]  sure that it enabled things in the future because the idea was if you don't deprecate classes you keep them around but you can't do something much better then organ
[00:56:59] ically people would go well i don't need to use them this is fundamentally a better pattern i'm going to go with that so i think that's evident that it's happened
[00:57:07]  that way which has been good so that that's why you see react forget being able to do the things you can today it's because like the prior work in the past has
[00:57:15]  enabled that to happen so um so yeah classes are hard for machines yeah yeah yeah no it's definitely um very cool so it's interesting you said that you guys didn't
[00:57:31]  see enough gains um yeah that that's well it's it's it's the thing was we were in uncharted territory there was no no one else even attempting to do what
[00:57:42]  we were doing even like thinking about doing what we're doing and so it was difficult right so there's always a very high chance it won't succeed in the way you
[00:57:52]  think it will but like i was always adamant that they could work so after that project kind of like died off in my spare time i worked on my own compiler and i
[00:58:01]  archived it some github you can see it it's called that that was the project you shared with me because i remember you you you about two years ago or
[00:58:10]  so almost three years you came on the discord and you're like you should really look at this ryan like you should probably really really look at this um and it was this
[00:58:19]  compiler project that you did on your own time um yeah so yeah like all the things that people are doing today with you know million and blocked on it was doing that like yeah
[00:58:30]  like 30 years ago interestingly it didn't clone templates because back then it wasn't as fit as efficient in the dom to clone templates the reason cloning the templates has become
[00:58:40]  fast is because of web components which is lit yeah and like yeah yeah yeah it was nowhere near as fast back then it was actually much quicker just create the elements individually or use
[00:58:49]  in a html so so what back then i looked into was using bytecode so and it wasn't like binary bytecode it was storing an array of integers and numbers
[00:58:59]  and strings that would represent like statically all the stuff in the ui like this is a div this is a span and the codes would inference like this has a class
[00:59:07]  this doesn't have a class and you can do this very quickly so that was really fast and efficient and you can still go there and check the code so the idea was it
[00:59:14]  would do that and you'd get back your component which would like be you know use state use state and then return jsx the jsx would all go it would return an
[00:59:24]  array of all the holes so the holes would reference the parts of your template that are dynamic and so for example you would say like food one two three where food would reference
[00:59:36]  maybe the text content of a div and then one two three might be some class so that the template outside the bytecodes would say at point zero of that array that is
[00:59:45]  my text number and my text content and at point one that would be my class name so it would hook it up and essentially i've always been saying this forever like there
[00:59:56]  hasn't been many frameworks that aren't virtual dom over the years like svelte in my opinion has been virtual dom the whole time interesting yes that's my yeah it wasn
[01:00:03] 't virtual dom in terms of like you create a virtual dom every time the virtual dom has never really ever been about that it's creates an intermediate structure where you're referencing parts
[01:00:14]  that have values referenced back and forth and that's exactly what svelte one or three or four probably two were doing as well yeah that's a fun way of putting
[01:00:23]  it that's a fun way of putting it because i've always tried to point out well you know salt isn't a virtual dom it's more similar to something like react than
[01:00:30]  you think it would it would be it's top-down rendering and where you have holes and that represent values which is what every single virtual dom had in common and non-
[01:00:42] virtual frameworks had as well i mean it wasn't it didn't have as much overhead that's that's so there's there's different levels of virtual dom in
[01:00:50]  my opinion there's but there's full-fledged virtual dom there's a virtual domain where you create an alternative virtual dom which is what react does virtual dom like react
[01:00:57]  today is basically like two virtual ones you have one you create from your jsx and the one you create for your internal structure and then there's you know different takes on that
[01:01:07]  but if you were to go to the most minimal mvp of that it would be there is no structure you create a time to represent your dominoes you just
[01:01:16]  create the values that represent your holes and that's what million and block them and others do exactly yeah that's the thing you describing it was exactly like i'd hayden from
[01:01:27]  million come on the stream about three months ago and yeah this this is very similar or like idea almost identical yeah so that's kind of pretty cool um i shared the link
[01:01:40]  in chat so people can check it out here's the compiler project as you can see this is this project was like five years ago um and yeah about yeah around this time when
[01:01:49]  you kind of put the seal on it three years ago that's when you shared it with me and you came in the discord and you're like you should definitely check this out
[01:01:57]  um yeah this is yeah yeah i mean so and i kind of pivoted this to the react and i was like hey why don't we just like like maybe don't
[01:02:06]  do concurrent rendering and do this instead um and they're like well that's a huge change you know i was like okay you know that was worth trying to ask you know um
[01:02:16]  but i think also the the fundamental point was that this was to show how far you could get with the virtual dom um and what was interesting is signals in today's world were
[01:02:28]  no only as efficient then no it's this bytecode implementation was dramatically faster than svelte 5 and everything we've caught today and what's interesting is the reason why
[01:02:39]  signals have improved so much in performance is inherently because of virtual dom so vms over the years have seen the rise of react and virtual doms and they've had to change
[01:02:51]  their strategy in ways to deal with in lots of intermediate objects lots of intermediate monomorphic complex objects and in doing so they've been inherently made it so signals which you
[01:03:01]  create lots of lots of closures are now much more efficient because hooks inspired having lots of closures within a render yeah it's funny how that works i i i thank hooks
[01:03:12]  for so many things but the ironic part about it from my perspective and i mean to get it here there is like hooks in my opinion may have not been the best compos
[01:03:22] itional unit i mean people have different perspectives that just my perspective like when i saw them i immediately thought of signals and i preferred signals but because of the popularity of hooks and like
[01:03:32]  the impact they've actually made the world better for signals um which is wild yeah no and and i think that was kind of a good realization for me was when i when
[01:03:44]  i left the react team i um i didn't leave reacting for any badness or i didn't get kicked out or anything as people i mentioned it i tweeted it maybe a
[01:03:53]  year ago now there's assumption i left because i wasn't good enough or i left because i wanted to like have normality the issue at the time with the reacting was it
[01:04:02]  was always based in california pst so that's the hour difference for me and yeah eight hours working in the uk meant that i was working like insane hours to
[01:04:14]  to make impact it's a difficult it's a hard company to to do well at so i i didn't have a great work-life balance from that and i think also
[01:04:25]  i'm just i'm like a workaholic from nature so like it was a bad recipe so i wanted a team where i could actually work by an hour so i
[01:04:32]  ended up joining a uk-based team that was building workplace um and workplace was like facebook for companies that's gotcha i do you know it's funny you just said good
[01:04:43]  enough for that i don't think anyone thought of thought that at least from my circles you know on the performance side because it's seeing what you've done and seeing the hard
[01:04:51]  work you put in over the years i think a lot of people thought it was because you came in thinking you could speed up react using the techniques from inferno and then
[01:04:59]  since they had their own ideas that didn't didn't jive i think that was at least that was the perspective that i i i thought initially but it seems i'm glad
[01:05:08]  you put it out there like it's a little bit more nuanced than that yeah in fact before i left i rewrote the react event system um basically we wrote it to
[01:05:18]  be linear and to be far smaller and also account for the sort of new way of how react 17 18 would handle events that weren't on the documents it doesn't do
[01:05:28]  delegation by the document but but by the root and at the same time rewrite the synthetic event system and made it smaller and faster so that was the last big thing i did and
[01:05:36]  then dan that happened what took over from that and then finished off but i said three years and we kind of had some of those cool things along the time it was fine and
[01:05:44]  there was no issues i just needed my own personal life balance back yeah i didn't know that that like that the react 17 event thing was what you've been working on
[01:05:54]  that's interesting because i i mean i could probably ask you like at any time and i don't have to kill people's time on the stream but i was really interested how
[01:06:01]  would the roots you guys got portals still the workout i've been meaning to look into that but you know that that's fine i can ask you later um uh okay so
[01:06:10]  now you're on a uk team better work-life balance um marketplace you're saying um yeah workplace yeah so that was that was interesting because i got to work on another
[01:06:23]  infra team um but i kind of my mind kind of like i always find interesting problems uh and like kind of like so one of the interesting problems well two of them and
[01:06:37]  also whilst working in reacting i rewrote the sort of accessibility apis that were never released in react but they were like core fundamental apis for various scopes that kind
[01:06:46]  of like they power all of facebook's tech for accessibility and accessibility was always a very important thing for me kind of push a lot and innovate a lot at the company and then
[01:06:56]  i continued to do that when i was in workplace but whilst doing that i noticed that people in korea couldn't properly type into the text fields on facebook it wouldn
[01:07:07] 't work like and we use a text ability called draft js um and so we're going through and debugging dozens of issues and it was a nightmare working with draft js and figuring
[01:07:20]  out how it worked but ultimately it failed because it rendered with react and that was the issue because it meant that react was like the owner of the dom um that was problematic
[01:07:29]  in the content editable because if you're the owner of the dom the content editable isn't a good candidate with the dom it tries to change the dom under under the
[01:07:36]  hood yeah you know and if that happens and react doesn't know about the change then you get like remove child errors exceptions at runtime so i was like okay this is this is
[01:07:46]  clearly solvable we can make a much better text editor so i spent maybe two weeks making a prototype by myself kind of hacking it trying to get buying on a team that
[01:07:55]  really didn't build text editors or do anything about that and kind of like pivoted to the company i was like hey that's it's got all in and making your text
[01:08:02]  editor and they were like what but then i showed you the benchmarks it was like dramatically faster like 70 80 faster like 80 smaller amazingly better in accessibility and it was called at a
[01:08:15]  ton outline which eventually became mexico and they were like okay cool this is awesome and kind of i had to fight to make a team and get a team around it and
[01:08:24]  it was successful we had a team rolled it out and then it probably in a year became the most used text editor in the world which is pretty cool like it powers whatsapp
[01:08:33]  it powers facebook it fires instagram and threads and everything you name it and then we came all these other companies kind of came over and like hey this is awesome let's work with
[01:08:42]  us and listen to and so like yeah it was very quickly after open sourcing it became a big deal and that was really cool to see like seeing like that another thing
[01:08:49]  take off and also one's the interesting thing was i really wanted to change the sort of mindset of how you work with text editors because at the time there were only like three
[01:08:59]  predominantly great text editors around in my opinion a praise mirror being one of them it was a very good editor but it had a really steep learning curve and the apr was cumbers
[01:09:08] ome and people often struggled with that plus it was huge in size as well that was one thing we wanted to tackle and it had good performance but it wasn't great for
[01:09:16]  the use cases we wanted at facebook the other one was um was obviously slate but that was kind of buggy for us we couldn't get it working properly and there's qu
[01:09:26] ill and so quill was another one but again it wasn't maintained at the time and it had a bunch of performance issues and code size issues so it was a good good
[01:09:35]  opportunity in the space unlike the framework space which was very convoluted like very competitive i kind of overnight came with an editor and it kind of just got set to this
[01:09:44]  being like you know we should try it why not you know and it kind of took off but that that journey kind of got me back into open source from a different angle and
[01:09:52]  it also taught me a lot about the dom apis because like we talk about like performance of web and like data fetching and suspense and outside rendering and hydration these are simple
[01:10:05]  problems wait till you do content editable and the dom event apis and try and work with the fact that android uses con like input events and and composition events and dealing
[01:10:17]  with wysiwick editors or wysiwick tools like grammarly that change things under the hood or using ime where you type in like korean or japanese and that that
[01:10:27]  mindset of problems is it grows it's terrible but yeah like that that kind of was like wow i can't wait to get back to doing frameworks again uh yeah i i
[01:10:35]  was honestly i wasn't sure if you were going to come back you it felt like when we we chatted during those electrical days also you're very stoked you i can tell
[01:10:46]  you like whenever you're got your eyes set on a project you're all into it we've we've established that through the course this narrative i i but i remember talking to
[01:10:54]  you back then like 2020 and you being our 2021 and being like you know trying to like gauge how where your interest was um on js frameworks and you're kind of like
[01:11:03]  yeah it's a solved problem you know like you know like the performance nothing's really changed since inferno and i tended to agree with you on that um but you're you
[01:11:14] 're back aren't you i'm back yeah um yeah after lexical i decided i need a new challenge um and then decided i wanted to build a framework so i
[01:11:27]  kind of hacked on this thing called obtain in my spare time which was like react revisited body compiler fully signal driven yeah absolutely i was gonna say how many react compil
[01:11:41] ers have you written at this point you know like react like that's probably not true i mean when i get itch i have to like kind of try it out and i
[01:11:48]  think what actually i read i saw a stream of yours when i was like ah i'm gonna try that like i've got some time now i'm gonna try it out oh
[01:11:57]  right were we talking about like making a reactive language compiler like was it yeah back then yeah that's the what i call it solid script i was just joking around but yeah yeah
[01:12:06]  yes i decided to build it yeah and um but along the way that i what i wanted to do was kind of like sort of evangelize that into like could a company
[01:12:17]  enabled me to take that idea and run with it um and dance was no but also in a good way because i also rediscovered that i don't really want to be
[01:12:29]  the head or author of a framework because the negativity that comes with it is overwhelming um when i was in a react team there were lots of positive but there were some negative
[01:12:40]  and that's there are some people out there just it's not nice and it cause a lot of stress you know and like having like death threats and like messages from people over
[01:12:51]  things you do was never nice when i left inferno i got death threats from that because people were like oh i can't believe you would abandon the project you know it
[01:13:00] 's a negativity that happens in open source unfortunately um so yeah i kind of went off and i um spoke to some folks of the cell and well they've been rich harris
[01:13:10]  and um obviously grandma and was like hey could we do this this and they're like yeah let's let's make let's make this makes this work with svelte
[01:13:19]  and that's what it became in fact the repository was called svelte octane i was like they kicked the code name for svelte 5 and so yeah that's
[01:13:26]  kind of where we've been up to we've been hacking on svelte 5. it's bringing those ideas of a new compiler from scratch a new runtime from scratch and
[01:13:35]  going through making all the existing tests from svelte 4 and 3 passing svelte 5. yeah definitely uh i i yeah i mean we we all saw this announcement
[01:13:45]  uh the introducing ruins uh does it right ruins people get on get on me because i always say like like ruins and it's supposed to be ruins but like it doesn't i
[01:13:57] 've said it wrong like my whole life so it's it's i i'm finding it challenging but anyways um yeah i i quite enjoyed this blog uh post i actually told rich
[01:14:08]  when i saw him in person a couple weeks ago because um it's it's got just the right amount of like tying in svelte of the past svelte
[01:14:17]  of the future um and uh and then a few nice little jabs i mean we're gonna talk about this in a minute but i just want to ask you about like this
[01:14:30]  this one statement like every other framework we've come to the realization that knockout was right all along you used knockout back in 2013-14 um um do you have
[01:14:45]  any comment on that was more of a poke i mean the realism was that knockout had big problems even back then of course there was there was i guess two parts knockout
[01:14:56]  there was a the ko observable part um and there was also a template part and so if you took knockout as a package it was a mixed bag like the template
[01:15:06]  thing was a it was a nightmare and the amount of bugs in it and issues that would happen ie was yeah i've got nightmares over that but there was a lot of good
[01:15:15]  as well when it came to the observable side or the signal side as we call it today uh and i think although it wasn't completely right i think there's a
[01:15:24]  lot of things in it that it it did right that we're now revisiting and like i said it's it's also a collective it's like vms have improved over
[01:15:33]  time to account for these things the mindset of the community is no longer like ah i'm happy with okay that's fine you know and also there's as much more appetite maybe
[01:15:46]  because of solid maybe because of view maybe because as well that people want to try these new things and so like i think this is a good opportunity now to like take these
[01:15:54]  ideas and bring them together and that's also why i'm working on this effort to try and and standardize signals and hopefully that becomes a thing in the future but like i
[01:16:04]  do feel that there is uh a missing primitive that we should all have and use and leverage um including react actually that that would make this better um but it's missing and
[01:16:18]  it's it's something that we definitely want there to be and hopefully we can standardize it so we all use the common signal pattern and that will make interoperability which
[01:16:28]  is something that you don't even have today between frameworks a great thing because it's fine to have a bit of solid in your website and maybe a bit of svel
[01:16:36] te and maybe a bit of lip because actually big companies need that they do ask a company that's got millions of lines of code to convert it all to a new framework overnight
[01:16:45]  but they might be able to take a leaf of that new solid or they might be took a leaf of that new svelte so by doing so and having interoperability
[01:16:53]  that enables that to become a thing i think that's important yeah no definitely and i the biggest thing for me that i love seeing about this right is because i as you
[01:17:04]  know when i came out you know with a lot of stuff with solid um people were hiding the reactivity i mean we're still kind of hiding we'll talk about that in
[01:17:14]  a minute but people really hiding like the the wrappers everyone wanted to pretend like their stuff was plain objects or plain javascript like that was like the goal of that time
[01:17:22]  period i spent a lot of time trying to convince people that we needed language around it we needed to like there that there was these three language features and i was i'd
[01:17:31]  write these articles where it could be like like this is the signal there's the state this is the derived value and this is the fact and we are really seeing this the case
[01:17:40]  obviously with react hooks um even though when i talked to dan i realized they didn't really quite think of them this in the same way it didn't seem like like when he
[01:17:47]  was explaining at least the derived values they have a different perception on but like for most people very simply squinting you know at this i mean this is props instead of
[01:17:57]  you state or instead of a state here but you can see the three pieces of of the language um very much on display and it's really awesome to see those three language pieces
[01:18:08]  basically being everywhere at this point right like almost i mean it's it's a shame we don't have something called like variable decorators where you could do that state or
[01:18:19]  act derived before like the constant left right but not like it's not even an understatement we went through about 50 different designs and proposals before we came up with this
[01:18:32]  we tried every single thing you can potentially think of um before we came up with this and we even went fallout trying to use let and constantly be computed for example so there
[01:18:45]  was very like magical rooms but that fell apart because in your idiomatic js or ts file you could just have let that it could be in a loop and then we're like
[01:18:54]  okay well maybe we like make it so if it's a loop then we don't but then yeah yeah outside the loop and pass it through and so like as soon as
[01:19:03]  you start applying it to real world applications it falls down and then we people like maybe we can have it work in svelte modules but not in other modules but then you
[01:19:11] 're like well you can't copy it out and paste it somewhere else that it falls apart you know there's a really important part of coding that spelt doesn't really have
[01:19:19]  today that other frameworks do and it's called co-location the ability you can copy a chunk of code paste it somewhere else it just works yeah there is a comment
[01:19:28]  that was like oh god please no decorators but i was i was trying to say it was like what if you could just do like i'm going to use felt the choice
[01:19:35]  of state yeah or yeah or you can even do it on the same line where does it sit after the var or before the bar like this or let yeah sorry why did i
[01:19:45]  choose far yeah yeah like what if you could do this um like this is very attractive the the the trade-off here that i always like had in my head was the
[01:19:56]  the challenges if you if you do this you know like say console dot log this i mean this there's no problem here you obviously get zero right if you call it as
[01:20:10]  a function here you're passing function of of zero right um and uh and um what's the other case if you go count equals count plus one or count plus plus this actually
[01:20:27]  works because from a language perspective we can actually see that this is a value access so you get the value and we can actually see that this is actually a setter like
[01:20:36]  the from a language standpoint um this a reassignment can still work um the the yeah the only thing that's interesting is if you notice here this function is zero inside a function
[01:20:51]  you know so if you have function here and you got your value this here this value um is not reactive because you can't reactivity can only listen within the scope of
[01:21:09]  the declaration uh only reason i'm mentioning this is this behavior here of what a variable decorator would do i think aligns with what's svelte's doing with
[01:21:19]  its compiler am i correct right right you're right you know in fact we kind of hope maybe that this can help push that forward somewhat because it really leans into if signals
[01:21:29]  become standardized potentially and ergonomically you would like a short way of writing signals hypothetically and so then you could do something like this and i think this is a more
[01:21:40]  attractive proposition than potentially doing you know function calls or having to import something or to create signal um because i i don't necessarily see signals as being too important to expose the user
[01:21:54]  like that's how things are being done up to this point but you don't actually need that like you know like you don't gain anything from having it that's the weird
[01:22:03]  thing no no not not not particularly and i'm actually in complete agreement on that that's actually why i released the article this morning because i wanted to get that down and
[01:22:11]  writing on my thinking on this because this the the biggest concern and i and i'm going a little bit on a tangent here but the biggest concern with the the the the like
[01:22:20]  the reactivity is um implicit passing the mutability around so you can no longer track like what's going on the unidirectional flow you know of through stuff is kept
[01:22:33]  you know through props through components as long as the ability to set or update is very explicit and with the scope based approach it you see where that update happens it has to
[01:22:43]  be defined in the same scope as the thing that declared it um so there is a lot of value there the the biggest thing is that i didn't get to here is like
[01:22:54]  if you ever want to transport this reactivity you do end up wrapping it in a function right it's it's undeniable because you need to be able to like
[01:23:04]  you need to be able to transport it so like i was mentioning how you couldn't get this count out here but like i'm not suggesting someone would do it in a simple
[01:23:14]  case but if you went like i mean this you still can't write to it like this i don't know why someone could do this but if if you went like this and
[01:23:23]  then went like called it as a function in here uh sorry uh you know now i gotta change my example here this could be actually reactive um so uh it's kind of
[01:23:37]  subtle kind of detail but what's i do like the properties of the scope based in that the fact that is it forces you to effectively write setters like if your function wanted
[01:23:48]  to update count you you have to be able to like you know pass in a setter function into this thing because otherwise um there's no way if you're just passing
[01:24:01]  a value in or even passing a getter in that it's possible for it to actually update something that only exists at the scope that it's declared at yeah i i
[01:24:10]  mean we we we've had a lot of feedback that people would want something like a ref like you a wrap of it and maybe that's something we do but alternative is rather
[01:24:20]  than pass the function through you pass an object with count and rather than write get and set we have a new room that's maybe wrap or something a dollar wrap that you put
[01:24:31]  around object literal and the compiler will put the getters and setters in for you and additionally i mean if you can you can kind of see this today where he's
[01:24:39]  like we can do things that would help make performance better so i tweeted about this already but getter setters using closures they're not quick they're terrible and there's
[01:24:53]  actually trying to work with some folks trying to improve that but separately like we can just compile that away to make it super fast um yeah no that yeah that is that is
[01:25:04]  an interesting point on that it's yeah i i guess the thing that i that was attractive to me about this on the other hand is you said you know maybe you can do
[01:25:14]  some more compiler stuff that kind of make it automated and feel more natural especially from the svelte user's standpoint but on the other hand just throwing it out here is even
[01:25:21]  with this which i said what i'm showing here hypothetically doesn't even use a compiler but we can apply this to a svelte compiler you literally can still just
[01:25:30]  wrap it in a function and it works like without any special primitive or extra syntax or whatever like the fact like you can just wrap it in a function and now that function is
[01:25:40]  reactive um yeah yeah and that's that's exactly why we came out with out those because we wanted to test the waters and see if people would you know after two three days
[01:25:52]  people are angry five days they're like oh i'll try it out yeah i'll try it out and i'll try it out in a couple of weeks would they come
[01:25:59]  across the same sort of intuition you have now like oh it's not a big deal we can we can work this you know that's what we want to see right this is
[01:26:05]  why i was saying i think the scope-based reactor is a lot less portable not really in that you can just wrap it in a function i the the funny thing is
[01:26:14]  with with solid you know and i said earlier i kind of agreed is because solid doesn't have an is signal so i i mean i do this on purpose technically i know i
[01:26:25]  probably should internalize an is signal it could let me like the renderer do some kinds of optimizations that we don't do today um it's probably something that i might
[01:26:35]  consider for the optimization standpoint but i i honestly i you as a consumer of these apis i don't want you to be thinking is this thing a signal i want you
[01:26:47]  like as you mentioned like if you port this through you know it's it's just a function so like if if you have to like make is a signal a thing you've
[01:26:59]  kind of like it's it it actually puts a bigger burden on you as the developer who's like creating your components if you start like checking everything if it's a signal
[01:27:08]  and treat it one way or the other you you almost just want people to treat stuff that they need to be reactive as reactive and then the person who consumes it can choose whether
[01:27:18]  they pass something like like tie bind whatever term you want to call something that actually changes to that thing and then everyone's good there's no there's no like worrying about like
[01:27:28]  what's a signal or not you definitely shouldn't like we shouldn't be in this mentality of like hopefully of like especially as i mentioned on the view side where you have these
[01:27:36]  deep hierarchies be worried about like signals as an api that's my perspective anyway yeah i mean and the other thing is like potentially we can improve the syntax in the future
[01:27:48]  so we can have a thunk like an arrow function without the need to have parentheses with nothing in them but there could be shorthand versions of them and and that
[01:27:56]  would make it maybe a bit more palatable for people that are like why can't i just do what react does and pass the value through from the return of a function you
[01:28:06]  know and that's people say that you know that's that's evident in lots of the feedback and at the same time you know one of the really great things about not having
[01:28:15]  signals exposed is that we can change them and we can remove them as well so if we could find another pattern and we can go well we can change it you don't
[01:28:25]  need to worry about that and that's that's kind of a magical power that not having to expose it means that you can just change the entire implementation below someone's feet without
[01:28:34]  them having any chance um so that's kind of what we were going for here um right the reason i wanted to stop here a moment and talk about this was because when
[01:28:44]  i first read this article about hiding it um i forget what example it was there's something about reactivity being hidden i i did i kind of like was like nah nah you
[01:28:54]  know like and the reason was because the of the function wrapper there because i'm like i can see that it's a function i'm still there but like the the that isn
[01:29:05] 't the important part i don't think right it's not important that you pass the function or have that transport it's that like in within any scope here you know that
[01:29:15]  you're looking at or here that you're looking at you can see exactly what you want um to happen because you can see look i'm describing something where okay i mean s
[01:29:27] velte already have this characteristics because it's compiler um where you know you can you can say here is my count the this is okay so you're passing out the account
[01:29:38]  that you get big deal whatever but here is the ability to update this account through this increment so there is no other way this count is going to get changed anywhere in your app
[01:29:49]  unless someone calls this increment function you have complete control over the situation everything's locally scoped like you have this this power so to speak to think locally so regardless of how
[01:30:01]  you wrap stuff on the boundaries who cares because you actually get to see everything and if you move up a layer and then go up a layer it's the same thing at every
[01:30:14]  point and i feel like actually that's what react and the their model gave us and the old like knockout days did not give us with their two-way binding and
[01:30:21]  all that kind of stuff it's like they didn't give us like ability to to to just like see what we needed this was always kind of interesting to me personally at least
[01:30:29]  i don't know if you felt kind of similar as like when i saw svelte um it bugged me that it wasn't composable that i couldn't like build
[01:30:36]  up these like custom behaviors you know easily like they're stores but they're not like the same thing you have to enter another system but i loved that the abstraction kept all
[01:30:45]  the principles of you know unidirectional flow and whatnot yeah and i think that's my biggest gripe with signals over the years was i love fundamentally what they were enabled
[01:30:58]  but i thought they were a terrible api because you end up these weird things where you have maybe signal in libraries yeah as a type and you're like really like yeah
[01:31:09]  that's as leaky as anything right like it could be a signal could not be i'll let both go through and then you also have that weirdness around like setting a
[01:31:17]  value this is something i hated at knockout when you part the function you if you don't call them arguments it's a get you call it with arguments it's now a
[01:31:25]  set you know it's like what people ask me for that all the freaking time they're like why didn't you build solid that way and i'm like besides well see
[01:31:33]  the thing is that the argument those people make now is like typescript makes it more obvious what's going on um but like i don't know well you have this what you
[01:31:45]  see now and it's arguably better than more than because one of the things it gives you is it gives you much more clarity even if it's slightly more verbose in some
[01:31:54]  cases but like i said we can tackle that we've not even released about five years yeah um so you know see the the reason that i i as i said i'm
[01:32:04]  i i we we differ in our approaches a bit on how we like treat it i'm i i'm i mean we'll see how far you guys go with the wrappers
[01:32:14]  and stuff but like for me when i take this crate counter and i use it somewhere else it looks like solid so like like it accomplishes what i care about so i think
[01:32:24]  this is very cool that's why i could see a world where like if this actually got standardized that's kind of cool too right yeah i mean i've seen that all
[01:32:31]  the frameworks would actually look at something like that that's what would be interesting so yeah what do i mean there's there's there's many stakes here there's not like just
[01:32:42]  one thing but after we're not trying to just change like language and felt for the hell of it we're trying to do things to improve things and make things more consistent make
[01:32:52]  things more scalable we're not trying to copy some other frameworks and we we never even looked at the view three's composition api we're building this we'd even know
[01:33:00]  about i didn't know oh this this rap sugar yeah i've never used you personally so like for me it was like our goals were around our experiences working with the things that
[01:33:11]  we worked with before so for me that's obviously working with spelt working with react working the solid and i'm obviously inferno and lexical so when we were
[01:33:19]  deriving these ideas we were very much about let's make things easy for the user so when you have derived you don't need to put an arrow function into it you can
[01:33:28]  just put an expression oh because it makes it more it feel more pure it's harder to do side effects right yeah yeah that is what i actually noted on the stream i
[01:33:37]  didn't i hadn't noticed that when i first saw the announcement then i was like ah yeah like little details like that this is smart yeah like that and this is what this
[01:33:45]  is from my experience working the reaction these are things that pushes people to the pit of success that the possibility of them making less errors and and struggling less with their code you
[01:33:57]  know and so like we just wanted to ensure that and that's been one of the caveats that in my opinion of working with sort of like so observables and signals in
[01:34:07]  the past that people just get tired too much up in the api with them and start trying to compose with them they're like oh i'll do a get here but then
[01:34:13]  i'll drive the get then then spread it and fatten and then filter through it and you're like what did you really want to do that just use a for loop that
[01:34:21] 's probably easy you know and you know you come to a code where somebody's gone over the top with all this logic and you're like i can't i can't
[01:34:29]  debug this and so we wanted to make sure because we're doing something different from hooks because hooks can only be used with inside a component yeah you can have an event list now
[01:34:39]  that does creates a derived and creates a state you can't create an effect that's okay it won't it might let you do that um but you can do those and you
[01:34:46]  can compose and build up like you know you can proxy an object to make reactive arrays and people have already done that so you can actually have fully erect reactive deeply nested
[01:34:54]  arrays now right yeah five even though it's not even available yet people can't really do it yeah i think i saw a project where someone actually took solid store mechanism and actually
[01:35:06]  uh tried to build something like that on top of the ruins it's pretty cool i i kind of yeah that's what we wanted we wanted to endorse that sort of behavior make
[01:35:14]  sure that people can create really cool some things and share them this is something that hasn't been a major like setting point for spout in the past has been quite low
[01:35:24]  of like you know it's felt is typically batteries included you know yeah interesting because like many other ecosystems are very much like we do the most minimal thing ever and then you need
[01:35:35]  to find your thing to do state and transition animations and we're trying to do as much as we can so you don't need to do that which is is good in
[01:35:44]  some respects bad in other ways because it can strive for stifle innovation because then if you have something that does this already do you want to use someone else's when it
[01:35:53] 's already in the library um yeah sorry it was i was just remembering this it what i wanted to say about that earlier point is i think this is a logical place people get
[01:36:06]  to anyways you know like if we're all working on basically the same constraints of the javascript runtime um and we were all uh um kind of like trapped by that
[01:36:17]  and trying to accomplish the same things i'm not very surprised that what the view proposal and the svelte proposal actually ended up looking very similar to each other to be fair
[01:36:29]  um and when you were talking about earlier about using maybe a special syntax about pulling the stuff out across boundaries so you didn't you know have to do the same get set
[01:36:37]  and all that kind of stuff i think they actually went deep down that path um in their ref sugar stuff they had like dollar signs and dollar dollar signs and like crazy stuff i
[01:36:48]  think ultimately yeah here it is i think they ultimately ended up not going that direction actually they dropped the whole proposal for their purposes but i i i like that the difference view
[01:36:58]  has view has like it's coming from a different place i think for svelte this doesn't it's like it's a lot closer in some ways to what svel
[01:37:08] te was doing before but adding that extra capability at least that's my impression yeah it's it's and the thing is like the typical ones are like hey i've got
[01:37:19]  some dollar state and i want to export it from this module how do i do that so for example on that repository if you if you press that add and make it like you
[01:37:28]  know a js file on the left side sorry oh yeah yeah so maybe it's like something.js whatever so a typical request people have today is that hey i've got this
[01:37:37]  and i want to do something i do with today with like store so they go export comments um three is like you know the states and it won't work you would complain
[01:37:46]  that compilers say you can't export this right and they won't come complain i'm like how do i do this you know well you're saying object and object is
[01:37:54]  a way of boxing it up so like rather than have this framework notion of a box subject like react does and well everyone does i guess yeah we're saying you can create a
[01:38:05]  box yourself but additionally if you have all these exports and you probably want to export something else in foo here you probably want to put in objects anyway and then you can
[01:38:14]  say food bar and then you can import those specific things and they are reactive again you just need these getters and potentially we can provide something like dollar wrap or whatever that might
[01:38:24]  be and then you can just access the values you don't need to do dot value dot value dot value you know and so that that's where we're going to is that
[01:38:32]  you can actually make a much better developer experience when you think about what you're actually trying to do rather than trying to just do what other people have done already and that
[01:38:41]  just works you know so we're taking the time we're looking at how things work and what's kind of interesting is if you go to something actually if you do it after
[01:38:50]  maybe yeah if you take away the import for now uh and let's do maybe make a function and inside there we'll do a getter setter so we put count
[01:39:01]  into it it's like create counter like before okay so just something like this yeah all right and then we can move the count from below we can put it inside yeah and
[01:39:16]  then we can return an object with a getter which is count i guess i just can't type yeah what's what's really cool is that that that's really slow in
[01:39:34]  js like we said before so if you look at the js output of this and once you yeah i feel like we're gonna if we don't use it guys are probably pretty
[01:39:42]  pretty smart um yeah we'll just forget about this for a moment okay um yeah don't worry about that output worry about this output so you can see if you scroll down
[01:39:55]  oh did we not turn it off maybe we turned off but yeah we have some optimizations in place that can actually sort of improve some of the things but yeah so that'll
[01:40:05]  be like state and then stay on that yeah exactly let's see if that changes is that it's probably because i'm not reading it properly did that change maybe try to
[01:40:13]  put the sets one as well maybe there's there's some working here okay set was it just a count equals v and i'm missing a comma yeah but yeah i was
[01:40:32]  like i can say what we've done is we've done some some clever tricks there too i wonder why that's not working yeah and also like you you probably saw with we
[01:40:41]  try and improve you need to put that in it in an array um and yeah it's still still a function callback yeah sorry sometimes it's felt i guess like because everything
[01:40:55]  else is so short i just state before initialization uh what am i doing wrong create count get state that's fine use it in here oh you didn't put on the
[01:41:15]  set you didn't put count oh uh yeah it's got the setter but this is called set you should have called it oh oh damn it yeah it's my bad
[01:41:26]  i'm not sure about that um somebody somebody will find that error in the chat chat yeah i'm i'm counting on you all um maybe call it something i'm gonna state
[01:41:38]  maybe call it like counter it could be some bug in there we're still not ready here like yeah there we go all right what am i doing wrong return oh yeah bam
[01:41:55]  okay i'll put that sorry yeah yeah that return is probably what was doing oh there you go yeah yeah yeah yeah see we we detect that we write your code so it's
[01:42:06]  really fast we're using a proto yeah so basically what you're saying is if you see someone is it because it's a getter you compile getters is that yes
[01:42:18]  we detect an object with the getters and setters and and know to optimize them so we can't really do this in js files because this is not spec compliant right yeah
[01:42:27]  compliant because you may notice we do underscore underscore count which would make a non would make a numerable property that previously wasn't numerable yeah but if you were to spread
[01:42:37]  that or something then you'd have something you wouldn't notice so right we we do a similar uh optimization in jsx so we don't add extra wrappers and pass it
[01:42:45]  straight through but yeah yeah i i got you yeah so that avoids using the getter closure all together yeah nice nice i i love little things like this because they they all
[01:42:55]  add up you know um and also like you sort of event delegation as well as we hoist out events um for you you don't need to do anything about it right
[01:43:07]  yeah this is interesting yeah i was i was looking at this output the other day when i was trying to figure out what it what was going on um because you guys have a
[01:43:16]  behind the scenes walker right that's what these functions do like open starts an element and right and then or open will clone that element and then okay specific right sibling and
[01:43:29]  child child sibling yeah exactly and then affect specifically for text i love that this actually one thing i love about this felt um this felt uh language is that when someone does something like
[01:43:45]  this um just because the way it works there's there's i think there's less possible things like you know um like you know that this this can be taxed specifically
[01:43:57]  exactly yeah uh we we also do some things which i think solid should do as well is is when you have multiple adjacent things put them together we put them together if we they
[01:44:10]  don't don't contain a call expression but a call expression might be something expensive or side effect for right gotcha yeah yeah so if you were to duplicate that clicks count
[01:44:19]  that line and paste it below the one we'll see what we do there sorry so if you like 16 if you copy and paste it below yeah yeah oh i see because now
[01:44:29]  there's two of them yeah oh yeah we join them together as well it's another thing we do so we we don't um put individual text nodes individual we we join them
[01:44:39]  and merge all text nodes into one yeah put it like a span or something around each one that will force it to be separate okay yes that's fine i mean i can
[01:44:49]  do that but i'm sure i believe you um but yeah yeah that will so they'll they'll have further down yeah get there yeah we got some childs some siblings
[01:45:05]  oh okay and then you yeah and you you have some render effect grouping here okay yeah but if you were to make counter to account um a function call um in one of those
[01:45:16]  it would break it back out again interesting and so we treat um things where you might do something expensive you'll sign a photo potentially in a function and we treat property access
[01:45:32]  and just no access as being yeah there's our story and that enables like otherwise you have the issue potentially of over firing the the shared render effect yeah i'm just trying to
[01:45:45]  think here because that's interesting well because dot count is just as likely to be like a member access is just as likely to be a function as a function's likely to
[01:45:57]  be a function but but we in our documentation we're saying that if you do that and it's a get to set up then it should not be it should be pure shouldn
[01:46:05] 't be side effect so so you are pushing people more to property access over function call interesting not necessarily there's there's i mean there's the difference in performance is tiny here
[01:46:14]  and we have last my check the most yeah yeah yeah so but i think from our perspective just like google closure compiler that also treats property access as like if it's doing
[01:46:25]  something it should be safe and pure i think it's it's a nice um sort of heuristic to have for a framework um but yeah it is and it's also
[01:46:37]  because typically when people do something like fibonacci would be a great example you would typically put that into a function call rather than a property access so yeah no that's
[01:46:48]  that's interesting yeah because i i never felt i could differentiate them but that's like interesting okay there you go maybe something you can steal back from us probably not because our primary
[01:47:00]  primitive uses functions right like signal does so like because it's our default i doubt we would change change that i think or could change that it's interesting so we do we
[01:47:14]  do a couple of other things as well um so one of the interesting things we do is we try and avoid doing um it's hard to explain because you can't really see
[01:47:29]  the source but for example when you scroll up there in the js output you'll see that we have uh further down we have dot dollar dot sibling dollar dot next etc yeah
[01:47:40]  those calls also handle hydration so when it comes to hydration we don't have a separate output for the code it's the exact same client code that is used for hydration yeah additionally
[01:47:52]  what we do is we call the dot next sibling corner download using its um descriptor property rather than do dot next sibling so whilst whilst profiling this i noticed that we
[01:48:05]  were seeing lots of deox doing dot next sibling dot next sibling dot child it was adding up really because inline they weren't on the inline cache so if you get
[01:48:14]  the descriptor from the download for that particular thing and do descriptor dot call given the download it's actually monomorphic so that that's that's good i've
[01:48:27]  been debating on that piece for a while now because the truth of the matter is this minifies slightly better because you don't like all these child calls get shrunk down
[01:48:39]  to one character instead of like neck dot next sibling dot next okay so there this is something i can steal back i think that's that's pretty cool thanks yeah um and so
[01:48:51]  we do a couple of things like that to just where things about being profiling things that we notice um yeah another thing that we we do in a core as you notice
[01:49:02]  we use var we don't change we don't change the user's code to use var we leave it as it is we we when we generate a template we survive rather than
[01:49:10]  letting const yeah yeah it has a non-trivial effect on initialization as well and that's because the tdz or temporal dead zone um checks that happen don
[01:49:22] 't happen in var um and they're not cheap and they are actually a lot cheaper in in webkit safari but not in chrome there's actually a proposal for t
[01:49:33] c39 to remove them from chrome but that will be a break and change so that the idea behind that is the check is to make sure you're not referencing a const value
[01:49:41]  before defining the const value right yeah like this so again we use var if ours actually a lot quicker i'm taking some notes i'm just going to put that out um yeah
[01:49:52]  so which ones do we have here um use var just go back to the replay on the recording it's all good okay um yeah so that we do like unless we join
[01:50:07]  strings together which is a lot quicker than having that json text knows the update yeah yeah yeah yeah another thing we always ensure we never create text knows directly and we never use
[01:50:16]  dot text content so yes yeah we we always have an empty space and there is no value not no values quicker than dot data um so yeah there's a couple of oh
[01:50:28]  no values quicker than dot data i gotta add that yeah we do the same thing where we create the space and we don't use text content i did not realize that node value
[01:50:36]  is measurably different but that's cool to know as well yeah these are these are great just yeah it's it's been a while since i've actually spent the
[01:50:45]  time to to actually benchmark i this stuff in great detail i think it's been like three years actually since i actually spent a lot of time in the dom stuff it was back
[01:50:53]  when uh pre 1.0 i was like sitting here going over stuff over and over but i haven't touched in quite some time so these little tidbits are definitely nice
[01:51:05]  yeah there's probably more but there's there's hundreds of things we've done in small capacity to make things better and make things um playable a lot nicer with other things one
[01:51:18]  of the things we're now looking into is well i'm kind of exploring experientially is is how we can improve hydration so this this whole topic around you know islands and
[01:51:30]  partial hydration and several components we don't do any of that we just hydrate and that works pretty well as felt because it's tiny and that's not going to get tin
[01:51:41] ier just even if you just felt you can now see your apps get even dramatically smaller yeah i i think this is a big change this is one of the reasons that i was
[01:51:48]  so stoked about the approach that this approach of using the same walks for rendering and hydration is same in solid where you have like the template clone and then you basically just can
[01:51:59]  walk over it in the same way it it means that like in old svelte i think evan you did that comparison with the todo mbc app originally and
[01:52:08]  he showed that like old svelte components scaled worse than a lot of other frameworks but he also showed that with hydration it was actually significant because it was sending down like
[01:52:18]  almost double the code that that it needed to because it's separate paths now um it's basically no size size cost for hydration i imagine unless there's like a bit of runtime
[01:52:30]  in like the core library that gets toggled on and off whether you make a hydrate call but on a per component basis there's basically no size cost so that's
[01:52:38]  that's going to significantly improve stuff um anyway uh sorry continue i just yeah um but we're investigating a two-phase compiler so it's an optimizing compiler that runs not on
[01:52:51]  your modules but actually on the bundle potentially but let's exploring if like maybe modules would generate a metadata file that would be adjacent to the js file yeah so the compiler would go
[01:53:02]  through these metadata files or through the chunk or bundle see where you hydrate something and actually build up prepack and the react compiler go through your entire tree and actually like
[01:53:13]  go hey i can see what props i'm sending this component and i can just inline them or i can see that this component never gets re-rendered in the client
[01:53:22]  ever so i'm just going to remove any of the dot child and dot sibling and dot open and dot close and dot render effect completely including your dot template it all goes away
[01:53:31]  because we know it can never happen on a client in fact if you do this to like using compilers to the nth degree then you can actually make something that
[01:53:40] 's tremendously smaller as small as anything from quick or anything else yeah i mean to be fair quick actually is a fairly large runtime what you're describing sounds a lot like marco
[01:53:50]  6 um which we're going to have michael rawlings on stream next week to talk about just fyi everyone um but yeah yeah i mean marco is actually ahead of
[01:54:01]  its time in many ways but just no one really uses it outside of i guess ebay yeah yeah i mean that's what we're we're taking these ideas into s
[01:54:10] velte these aren't necessarily new ideas but it's more like applying this felt it's quite a new concept but these won't come any anytime same there's actually a ton
[01:54:19]  of things we're looking into how we can improve things that can improve how slots are handled and how you might do on directors which are kind of like can you do something even
[01:54:29]  more fundamentally crazier than that make things a lot better but that will come in like a 0.1.2 release likely yeah in svelte 5. again error
[01:54:38]  boundaries another well requested one yeah as well in a later release how about async i i know svelte has the await component um i know that see that that's an
[01:54:49]  area that i've watched felt improve a lot over the last little while or last few time because um early days a weight component i believe would cause stuff to double fetch on
[01:54:59]  both the client and the server i think that's been addressed now um it have you guys been putting any thought into like async patterns in general in svelte um because
[01:55:09]  to me those are the two like it's like error boundaries and suspense it doesn't have to be suspense but like whatever the equivalent whatever svelte thing is we don't
[01:55:18]  have suspense we have a weight block which is kind of similar in some respects i think it would be quite interesting to explore that we we haven't because we're we've
[01:55:26]  been so busy with everything else yeah but i think potentially in a latest svelte 5 release we can do something there i think we also want to see how things play out
[01:55:36]  with async context which is i think valuable to having a synchronicity between computers and computers and signals yeah it's quite complex to do that today i know obviously
[01:55:47]  solid 2 is going to have some inclination of that with the bubble reactivity layer but i feel that you you kind of still need to have an element of async context
[01:55:56]  in order to make some things work properly um right you're talking about the the problem that all the runtime reactivities uh have around you everything up to the a weight can
[01:56:07]  be tracked but anything after the weight can't be you talk about that scenario yeah and not having tracking inside an asynchronous derived value it works but then it it quickly falls apart um
[01:56:20]  so that's why we i believe we need that uh okay maybe maybe it plays out we don't need it or maybe it plays out we don't that you know that's
[01:56:29]  not required but the thing is like this is like the next space i see people investing time into is how you make we we now signals how do you have a better developer
[01:56:39]  experience working with asynchronous signals um and how you know how does that even happen behind the scenes is a forking is a sort of like the mechanics of how fibers work but it
[01:56:48] 's on your sort of like signal graph would you have something fundamentally different altogether yeah i mean it's interesting i we yeah as you know we did go down that path we tried
[01:56:58]  forking on a node level trying to do something very very similar to react concurrent mode but with signals it's freaking complex and messy and imperfect at least our implementation right now
[01:57:10]  i am definitely you know double thinking that going into solid 2.0 because i'm like man was was that worth it um so yeah there's lots of open questions there
[01:57:21]  definitely on our side as well yeah so yeah there's a ton we still have to do um we we have a uh sort of the next summit for svelte is the
[01:57:33]  11th of the 11th so not long from now um so in a couple of weeks we will have a summit where you'll find out some more information about slot 5
[01:57:42] . um so yeah anyone who's interested check that dates out make sure you check out the event and might be a few surprises for you there too sorry was that on november
[01:57:54]  11th you're saying yeah yeah yeah yeah yeah there's a couple things i'm just scrolling back up in the chat so i can see some i remember one of the
[01:58:06]  earlier questions was all like did you enjoy writing in flow at facebook but i think that might have just been someone being cheeky um but did did you do any flow programming
[01:58:29]  yeah i actually really enjoyed working with flow not when i joined a company that flow made massive improvements in my time there in fact i still find flow better than typescript in
[01:58:41]  many ways today right it's definitely faster than typescript as well they made a lot of improvements around of its speed i think what's more interesting is that because no one's
[01:58:52]  really used flow today they don't really know what's capable of and like they're they're investing time into all different sorts of things like it's got a new syntax so
[01:59:01]  you can actually use the component syntax and it's actually open source that no one never always to check it out but like yeah you can completely do that sort of thing it
[01:59:10] 's like and that's what they use on facebook and it's like their own little world that uses this whole new sort of like type language but i definitely see um um a
[01:59:24]  future where we'll have types in the language right i'll read you hopes anyway which leads on to the comment just now js doc do i like this yeah i don't
[01:59:35]  love js doc um but i've got it i've got more used to it over the time as as you well know we we have a js doc frame rate uh framework um
[01:59:45]  in fact i started this compiler project kind of it was me that kicked it off to build spot five and from the beginning before rich and simon kind of jumped on board and
[01:59:55]  i wrote it all in typescript so we're going to actually go through the process of converting it back to js doc after interesting yeah um i guess semi-related people
[02:00:07]  are wondering are are they're still working going into the language tools do you know about basically typescript support in the markup in sveld um do you know if that
[02:00:17] 's something yes um we want to add it to to the template there's a few issues like is a good one for people we have um an each block where the each
[02:00:27]  block is each item as item each items as item yeah and you can obviously see an issue right there that as keyword is what we use and have been using before anyone thought of
[02:00:38]  using typescript in it but obviously that conflicts now so we've been thinking is is there alternative ways can we have a full block instead of an each block or do we try
[02:00:48]  to make change as be something else so that you can use typescript you know so lots of unopened questions like unanswered questions that we need to figure out
[02:00:55]  in order to get there but it's it's going to come because we have a lot of other things we need to do first okay yeah no that's it's i mean
[02:01:06]  that's the thing with these these things we just keep on there's so many avenues that you can look if there's enough people to work on frameworks uh you know it
[02:01:14] 's it's it's it's it's amazing what you can already do with you know the resources that you do have it's actually cool there's it's the three of
[02:01:21]  you now working uh evercell on spell right we're the three we have uh the team's much more larger than us right right right and they've all been contributing heavily as
[02:01:32]  well um but like yeah three of us full time working on this project um so yeah it's been pretty full on uh but it's been pretty cool as well that's
[02:01:44]  that's that's awesome um the other guy i know rich is in uh east coast time and you're in london time and uh who's who's the other guy
[02:01:56]  again is is in european time he's in germany oh okay so you guys are a little bit spread out but i'm gathering not the same problems you had when
[02:02:04]  you're working on facebook east coast is fine in fact east coast is good because it allows me to get up and like sort the kids out and do stuff in the morning and
[02:02:12]  that's great to hear then going to work yeah so i'm just trying to see if there's any other questions here we talked about async so i'm not gonna worry
[02:02:23]  about transitions um just scrolling through chat here um how efficient are ruins will they prevent unnecessary dom mutation yes clearly you the i mean from what i can tell from this renderer
[02:02:39]  output this is i mean there's like detail differences but this is a fine-grained reactive renderer with with cell 5 right it's very similar to what's solid
[02:02:49]  does or what view vapor is going to do it's the idea of basically create the dom nodes up front walk them add these reactive bindings or whatever you want to call them
[02:03:00]  and have them do fine-grained updates to the dom it's it's as optimal as it can possibly be yeah yeah exactly maybe it's not a bit faster but
[02:03:10]  after you do those changes i mean you'll be catching up next week no doubt yeah no exactly that i'm i'm glad to take it as i said it takes a lot
[02:03:17]  of time it's funny like you i'm sure you guys are going to do this like round and you're going to like do a bunch of optimizations and you're going
[02:03:24]  to be sitting there working on the typescript thing and all the other issues you were just talking about and it'll be like another six months to go back and you know meanwhile
[02:03:31]  the browsers have moved ahead and they've optimized something else uh like uh you know i i've seen this back and forth a couple times i'm i'm looking forward to
[02:03:41]  take these learnings from svelte in here i actually i the last time around us felt improved its uh ssr rendering from some stuff that the solid community had figured
[02:03:52]  out in terms of getting the escaping code faster and improved uh in like the marco's benchmark on the server something like a 20 or 30 improvement on raw ssr rendering
[02:04:02]  speeds in svelte so um yeah no this we we share a lot of ideas especially now that like it's like the means or mechanisms here are really converging for
[02:04:13]  the first time in a while i guess like when the virtual dom came out everyone was kind of like how do we do the virtual dom in this we're seeing like this is
[02:04:20]  this is a different type of render earlier you were talking how older svelte was almost like a virtual dom would you classify this as something you know with svelte 5
[02:04:28]  a little bit different yeah i would that there is an element of virtual moving in solid today and that's what we call it blocks i think you call it owners is that
[02:04:38]  where you have forks in the tree conditionals or uh each block the control flows temporal state that references the dominoes and the last state the next state and that involves
[02:04:50]  diffing it does yeah the list reconciliation algorithm is like almost straight from boris um yeah at one point yeah so there is always an element of virtualdom in in all
[02:05:02]  the things we do it's just how much of that you want and ironically shared render effects are going back to virtualdom yes that's traditionally not something you do in signals you
[02:05:10]  want to have everything as an effect but virtual has proven that isn't not as as efficient as it can be because it's kind of like yeah yeah so there's i think
[02:05:21]  it's we'll be conversional is a mix of all the ideas the best ones from each and we're saying these are what we want as a right the the power
[02:05:29]  of fine grain as i was saying i've been saying in the past was that um it just gives the control over it it's not that saying that being the most granular is
[02:05:38]  always the best choice it just gives you the flexibility to have a control structure for this that isn't tied to the way the end user writes their components necessarily yeah and in
[02:05:49]  fact one of the good things about runes is i see a lot of people say that ruins are just sugar syntax for signals well here's something for you we can also compile
[02:05:57]  them to not be signals right if we see that there's no point of them being a signal because signals are overhead at the end of the day yeah we can remove them and
[02:06:06]  there's a really famous benchmark years ago called dbmon dbmonster in fact that's a really great use case where signals kind of fall apart if the entire
[02:06:15]  ui changes every single time there is no point in like creating a whole single graph setting up connections for it to just then destroy the connections and rebuild them all over again do
[02:06:26]  you know how i solved that one because that one was on my list uh it's i use deep nested proxies and here we go diffing um so it was
[02:06:35]  a virtual basically if you solve stores with a with a diff call on them you basically go back to something very virtual domish we got up to inferno speeds so you
[02:06:48]  know like in the same ballpark so yeah yeah but exactly yeah like there are realms where like vdom classically faster creation um signals faster at updates this this isn't
[02:07:03]  like an all-in either side kind of situation right yeah in fact the quickest way of dealing with that would be two things first of all if you have signals that you'd
[02:07:11]  understand after you inline the child components in each row and cell into the parent you'd come up with a huge render block and then you go well there's no point in
[02:07:20]  having signals here so you can remove them from it so you end up with a single signal that is your entire render block yeah anytime it changes you'd update that single render
[02:07:29]  block which would be like maybe i know i forget how many cells and stuff on that table like maybe 200 200 no value changes every time and that would be as quick as any
[02:07:39]  vanilla jars with implementation out there yeah there is a way of getting both and it's by compilation okay can ruins be important to just use its reactivity well you need the compiler
[02:07:52]  right yeah you need a compiler and you don't import rooms they're kind of like a magical symbolic thing that's always there yeah so yeah the the trick is yeah i
[02:08:03]  don't know how to put it there there is there is a like signals library here but you never actually touch it like you write the macros or the ruins like the compile
[02:08:14]  thing and then the the they handle importing those uh the internal details the signals so to speak yeah i mean you can technically access them but we have like svelte slash
[02:08:25]  internal and that's obviously so we can get access to them but the issue that you'll find as a user is they don't have a very ergonomic api there's
[02:08:33]  no dot get or anything like that so you'll need to import the get function to use it on a signal and then dot set function to use on so there's all
[02:08:41]  these sorts of things you need to take into account and also when you create effects you'll then need to pass arguments a bunch of booleans and bitwise values it will
[02:08:50]  be you won't enjoy it but you could technically do it and we have tests once we open the repository to the public and obviously show this and you'll see the test and
[02:08:59]  you'll see how it works it's not something we're like trying to hide entirely because i think it's very educational that people see this and go oh that's how
[02:09:07]  you do it but at the same time that most people shouldn't have to see it right it can be a black box for the large majority of people out there you know uh
[02:09:17]  another bump on this thoughts i'm taking ruins to make them generic and usable within other frameworks with different reactivity backends um i think what we're trying to do is make
[02:09:26]  signals themselves the thing that are generic and reusable and then you get the best of both worlds i don't think there's much using getting um the ruins at the moment i
[02:09:38]  don't know yeah i mean it's it's an interesting thing right if the signals themselves are browser spec and we all have the same like base thing then in theory the ruins
[02:09:53]  could compile maybe to something generic it's it's it's interesting though because even with the specs that we've been working on with the like for the the group um there
[02:10:03] 's still like a lot of like differences on how you know features based on different types of effects models like we're we're all pretty much i think in agreement about the the
[02:10:12]  the signal state itself and like the drive stuff but when it comes to effects there's still a lot we're figuring out so like it might be premature to try and make
[02:10:22]  them all the same just yet yeah i think from my perspective i want to definitely try and work with probably the solid community in yourself and and milo and others and obviously this
[02:10:35]  world community and seeing how far we can get with that implementation and make it so fully works with both frameworks and then seeing where the holes are what we're missing what we
[02:10:47]  need to do and and i think that that will be the real test to see if this can be something that that can be a proposal for t39 and then can go from
[02:10:56]  there right because yeah for those who don't know i've been talking about the signal spec effort kind of at a distance i've been on the stream um just in the last
[02:11:04]  week or so um dominic's been working on like uh what is it called the prototype implementation or uh is that the right term yeah reference implementation yeah yeah so it is
[02:11:17]  progressing we're hoping in in a in a little while here we'll have something that you know stands up that we can show to other people and then you know get more feedback
[02:11:28]  and a wider audience but it's it's it's it's happening um so that's super exciting right yeah yeah uh yeah it's just so this it's just so
[02:11:41]  funny there are a lot of comments that i'm actually trying to like get get through and say them in a in a in a reasonable order or whatever i got here js like
[02:11:50]  since so js likes syntax in the js file but it's not json working on soft code bases i think it's i'm sorry you can answer it i was just gonna
[02:11:58]  say i think it's pretty clear that you're dealing with something like um a macro like yeah if you use other frameworks there are other compiler based macros you're you
[02:12:09] 've seen dozens of different examples of them um so like it's not so surprising i guess i don't know what's your take on this first of all it's completely valid
[02:12:19]  javascript so it won't break your parser and it won't break anything from that perspective but obviously you need to just like you have already if you start you need
[02:12:28]  to use compiler you can't not use a compiler with spelt so but the difference obviously here is that we're now compiling jsm ts modules it could be that
[02:12:35]  we have um a different prep different prefix or farming so it could be dot svelte.js dot svelte.ts and that could be the the thing that we
[02:12:44]  changed to in order to make it more compatible or less conflicty with other things um so like i said we're still early we haven't released us yet and we don
[02:12:55] 't fully know the answers for everything yeah yeah i mean this is the thing you guys are taking feedback at this point right um yeah so it's exactly like the community has turned
[02:13:06]  around in terms of initial reception i i mean i don't know what perception was i for me i felt it was kind of split and it's understandably split a little bit
[02:13:15]  because on one hand you have people liking the perceived um simplicity of what svelte you know three and four does versus the incredible more capability that comes with svelte
[02:13:28]  5. i don't know do you have opinions yeah this is something that i've experienced quite a lot from lexical and hooks is that when you release something to the
[02:13:38]  public you have usually about a week where everyone's like i hate this why have you changed my beloved thing that i've already spent years doing it's like some survivorship
[02:13:50]  bias basically you you're used to something and it works and you have this perception that you shouldn't change it you know that saying if something works don't don't break it
[02:13:58]  or don't change it and but a lot of the time is it's also because maybe that you haven't experienced the same issues that we're trying to solve like maybe we
[02:14:05]  have you know seen a brighter side and we can guide you to that sort of that place that we can kind of visualize it's not always the case people sometimes get it
[02:14:16]  wrong but we thought in this particular case that the response has been overwhelmingly positive and and that's like it it was it was very positive to begin with but there were obviously pockets
[02:14:30]  of svelte community um folks really and it was mainly the this folk this folk community that had this sort of negative reception in some respects i think the largest i've
[02:14:38]  been overcome now because they were able to play with it we put a record there people were able to explore things and try things out and it actually isn't too bad it would
[02:14:47]  turn out you know especially as you can see the output and you can see what you're getting in return and you can still use all the same old syntax you had before it
[02:14:54]  will work and there'll be some breaking changes because we can't make 100 because you know that's impossible to do changing architectures but we've done our best and we
[02:15:05]  have a lot of tests that prove that we've done a great job there so everything will still work it'll be so much faster than before and you'll get this new set
[02:15:13]  of patterns that enable you to build apps more expressively faster with better dev tooling and a whole bunch of more things in the future it'll be really awesome that's that
[02:15:23] 's that's awesome uh i know we're gonna wrap up soon there's a few questions i'm hoping i can just put in together at the same time uh which is along
[02:15:30]  lines do you have opinions and ideas about svelte kit someone's like does felt have something like blitz and i'm like svelte kit um is felt kit something
[02:15:38]  that you you for you are you looking at like i guess people are just curious about how that fits in people asking about streaming ssr just like anything on that side
[02:15:49]  yeah so um like i mentioned earlier about the optimizing phase about hydration that will fit into svelte kit right we need to we need to own the bundling there so i
[02:16:00]  think we have a ton of ideas for svelte kit that will play in svelte 5 will probably come you know that that's what alpha is our next goal
[02:16:09]  and you know if you'll see that next month we'll get that tons go and so people will be able to play with the code in alpha try it out but svel
[02:16:16] te kit will probably come later that that's i mean yeah so yeah it's something we want to do um so yeah like it's gonna it's gonna be good i'm
[02:16:27]  looking forward to it yeah no i think i think i'm i'm getting there pretty good on questions uh okay fine fine i got one more one i'm that's just
[02:16:36]  because i'm being spicy a little bit here because when i see stuff like this here you go i get asked this question like every day so it's felt enterprise ready and with
[02:16:46]  new release or the community is still small it is enterprise ready if i told you that sort of clients that use it these are clients that are in such as apple meta you
[02:16:59]  know it's massive companies using it uh i don't think we have an issue enterprise and and it's it's obviously got a long-standing community um i think with every
[02:17:11]  new release you have like this sort of like do we wait for the release or do we can we use felt now it's like you can use felt now it will continue to
[02:17:18]  work you know just like anything that you try and use yeah there's any fear that people need to have the the community is more compared to react but then every community is
[02:17:28]  more compatriot right um that can't be a reason not to try something and the biggest one for me is that early days when these frameworks you know felt solid started showing
[02:17:39]  up people like oh you know javascript frameworks come and go you know it'll be like flash in the pan next week this week whatever svelte's been around
[02:17:48]  for seven years um next month svelte celebrates its seventh year since rich open sourced the repo it was uh november 2016 um and yeah i it it's been you
[02:18:02]  know what i mean like this is not a new framework it's been used all over the place you know but at large scales that you know you know maybe you know stuff
[02:18:11]  like new york times and you know like the covid tracker which is maybe a very specific usage to you know companies building you know betting their startups on it or you know building
[02:18:22]  yeah like this is not like oh this is going away next week kind of thing right how long we were talking earlier about projects having you know you know every five to seven years
[02:18:34]  i think the web goes through like these cycles where you're like okay i need to update the project and while i do that i'm going to try and maybe look at
[02:18:39]  framework tools i'm going to bring all these things up svelte has existed now long enough to go through that whole span you know and the truth of the matter is like
[02:18:48]  when most of these when most people jumped on react which got its numbers you know in the first place react was not around even nearly as long yeah i mean i think an interesting
[02:19:00]  thing you're seeing now is you're seeing spikes in lit that's coming up with like huge amounts of downloads and it's people that are moving away from react yeah um
[02:19:09]  big companies are moving away so you there's already a change in the landscape it's not like a massive change but then the change from people moving from jQuery to the next
[02:19:19]  thing was slow and steady and still jQuery is still like one of the most used libraries in the world still right i don't know how many of those websites or web press
[02:19:29]  sites that are like seo holding pages and that's a different story but like you know there's still a large amount of websites out there that that fall into that category
[02:19:37]  yeah and it's kind of interesting i wonder that correlation a little bit because web components are actually one of the best things about web components on a side fact because everyone knows i
[02:19:46] 'm not like the biggest fan of web components but like is that they're actually really good for migrations because they they provide an interface between like like layers they're almost
[02:19:56]  like a mini micro friend not friend not quite but like i think that's when you when you see upticks and web components sometimes it's actually for that reason of people
[02:20:05]  trying to move from a to b um anyone just yeah i think that's why signals are important as a standardization process because that will enable that to be easier it's
[02:20:16]  not the missing piece that we have um because i think you're always going to have differences in how you template things and how you declare things and how you write your code but
[02:20:26]  data flow over in a clean javascript it's always the same you always use arrays or sets on maps and you use something like rjs rxjs or you use
[02:20:35]  something else but they're just the same the fundamental building parts is that you know they don't change yeah and the more we can adopt these we have that potential like i
[02:20:44]  i'm sometimes critical of standard processes um because of you know like the speed that they can move at but the truth of matter is like like the part of the reason why s
[02:20:54] velte has been very successful is getting closer to the dom getting rid of you know some of these layers you know makes things like easier to kind of interact with i think i
[02:21:02]  saw an article and this one talks about once file allows you to easily interact with js so virtually the whole js ecosystem this felt ecosystem this is true of solid this is true
[02:21:10]  of actually these this new uh you know things where when you lower that abstraction layer i mean to be fair you can use refs and react and stuff but it feels very different
[02:21:19]  when you can you know like it's just the thing you're directing in um actually i mean sorry i'm talking about solid for a second one of my favorite things is the
[02:21:29]  fact that a div is a div like literally something i'm not suggesting people do that but they can go const div equals jsx div and like literally are holding the dom
[02:21:37]  in their hand so as as we find better ways to abstract the right stuff and lower the abstraction on the other stuff like the capability um widens there and a lot of times
[02:21:48]  the standards are what makes that possible indeed i 100 agree okay um yeah i think i think i'm good with dom this is not going to be the end of our stream
[02:22:00]  if i you guys like i think i think we've given enough questions and he's got to go because he's his time zone is a lot later than than ours but um
[02:22:08]  this has been an amazing chat i'm so happy to have had you on the stream and talk about all the things you've accomplished over the last several years um is there
[02:22:17]  anything you want to shout out or you know um before i let you go um just yeah thanks for having me it's been a pleasure having this chat and i'm answering these
[02:22:27]  questions and hopefully you know we get to chat again sometime and catch up when solitude.no comes out um i guess you know um if anyone else has any questions or
[02:22:39]  is interested in any of this you can follow me on twitter um and on github and yeah um and you can ping us more i'm on discord as well so you
[02:22:50]  can find me there um on this channel and so yeah if you have any questions ping me and i can hopefully answer them otherwise thank you yeah no thank you um and with that
[02:23:01]  yeah we're gonna say bye to dom yeah wow that was amazing um it's very cool to see that whole progression and very cool to see what they've been working on
[02:23:15]  on on svelte i obviously like i love the back and forth there for a moment there where dominic's like yeah yeah we saw what solid was doing but we also
[02:23:25]  found these optimizations i'm i'm gonna definitely be going and looking at a few of those um the the the frameworks now are actually incredibly similar someone asked earlier are all
[02:23:35]  the frameworks uh you know just the same with different syntax um not 100 as you're seeing here but honestly view vapor svelte 5 and solid are very very um similar and
[02:23:48]  obviously i i'm pretty stoked of being a big part of that happening and dominic obviously it's always been a big influence for me so um very cool to see yes
[02:23:59]  the ceo of hooks yeah it's funny that's not that's not dom dominic's uh legacy he's not going to be known as the ceo of hooks i
[02:24:11] 'm i am pretty sure uh even if he came up with a name um sometimes names just come come to you like bling i don't know brian why do you
[02:24:26]  decide to make props a proxy that returns getter functions um sorry i might be missing this props of prop props don't generally use proxies unless there's a spread
[02:24:43]  in them because the shape can change um generally we just use objects that are getters directly we only use proxies when there's a spread um but oh why don't
[02:24:57]  i make them a prop up oh i see what you're saying why why don't props have come back its functions well it's it's a little bit weird using j
[02:25:06] avascript land in the sense of uh there's a there's a couple reasons uh identifying like like has like in like it's weird to like if you want to check the
[02:25:17]  existence of a property especially if the shape can change because of stuff like spreads making things function is like another thing it means that like every time you access or potentially ask about a
[02:25:25]  property that could be there then you're actually having to create a function even if it's not there right like how would you ask if something there i don't know i
[02:25:35]  think syntactually the approach we use is a lot cleaner from like a dealing with object standpoint it's also nice from the perspective of like um i mean this is a subtle
[02:25:46]  one but when you keep that locality and mentality when you're passing values through like whether it's a signal whether it's a store whether what not you can keep the same
[02:25:56]  interface when you use props the way they are instead of like interjecting functions and i'm a pretty big fan obviously of the approach we've taken it's not quite the
[02:26:03]  same as felt's compiler where it's just like a variable but it's as close as you can get without using a compi uh using like compiling js syntax we only
[02:26:10]  touch the jsx we don't actually touch any other js in any other file even in your components right now do you think you should join the cell tune to bad and solid
[02:26:21]  hard to say i mean it is it's something to think about when you like build something and then everyone else seems to be doing the same thing now you know a couple
[02:26:31]  years later a few years later so like but i mean the writing was on the wall right when when in my opinion when um adam hale created surplus back in 2016 or he
[02:26:43]  created earlier than that but when he showed up on the js benchmark in 2016 it was obvious to me that this was going to be the future of frameworks um so like you
[02:26:51]  know i changed some stuff with solid to get it i said uh you know more human usable my ergonomic deal with design issues i said like locality of thinking but like
[02:27:06]  um yeah i know it's something to consider you know when people you know basically end up all converging on the same spot that's the thing is i've had a lot
[02:27:15]  of time to think about this right solid like where what svelte 5 is just getting to now what view vapor is just getting to now solid's been like that for you
[02:27:24]  know six seven years so we've had a lot of time to kind of progress our thinking there and take more lessons obviously those lessons are being shared with the community which feeding
[02:27:33]  all senses felt and the new versions of view but like i i got a lot more to do and like obviously we're gonna have like little bits of different sort of opinions here
[02:27:42]  right like i see benefits in compilation optimization i do i do see that but it's also i think there's a balance between let's say how much transparency you want to have
[02:27:52]  right like how much you want to keep the stuff in javascript land do you go to compilers early or or not right um how much do you lean on this
[02:28:00]  stuff right like because you know something has function semantics why not just make it a function you know like we have differing opinions and i think that's a good thing
[02:28:10]  i'm just catching up on chat now we're gonna do this week in javascript there's been some hot stuff around the builds stuff this week as well and i want
[02:28:24]  to talk about some insights i've learned about both server components and uh solid 1.8 i think there should be just one implicit signal which is felt solid seems redundant okay
[02:28:38]  that's funny let's move on um to to do like calling something redundant like years after the fact is kind of funny it's like yeah yeah i don't even know
[02:28:53]  do do do yeah yeah i okay yeah there's a big syntax thing i think i think rich actually hit this on the head like a lot of people care about the syntax
[02:29:25]  like that's what drives them the familiarity of this stuff and when i was when i was like uh like you could tell dominic cares maybe about that like myself a little slightly
[02:29:36]  less more on the mechanical side right we see the best way of doing something we just want to build that right and then you know those other details we're trying to like
[02:29:44]  tie them in but that's not the primary focus there so it's like i i think on the user space there's a lot of choices there i mean if people like want
[02:29:52]  to be like make those narratives the other way i mean what what what can i possibly say beyond the fact that like we built something with solid um you know as i said seven
[02:30:04]  years ago and now people seem to be doing the same kind of stuff does it make solid redundant maybe but then on the other hand like what do you what do you
[02:30:30]  think will be their biggest challenge in building react compiler you want to know okay i i i'm i'm pretty good i'll talk about this and actually let me show my screen
[02:30:38]  for a second because the biggest challenge is i think the react guys want let me see if i can go back is an example here they don't want to have this get
[02:30:48]  and set here yeah this is actually prime example they want you to be able to do this exact example without a getters get and set so let's pretend that it's like
[02:31:00]  something like this return count okay they want you to be able to do this and this could be in a separate file so what's interesting is if you do this in a
[02:31:13]  separate file you know stick this over in something over here you know let's let's let's export this out i'm just going to use this export create count okay right so
[02:31:28]  create count okay now as you guys know this is not going to do anything or work properly because that's not how the svelte stuff works but they want to be
[02:31:39]  able to do this more or less and what's hard about this is does this guy know that his value is reactive right like svelte's using the fact that it's
[02:31:51]  kind of leveraging these getter and setters right get a runtime factor but now it looks like this and like this essentially does this actually work that's funny um is there
[02:32:09]  an implicit transformation here let's see why does this work that's an interesting question i wasn't expecting this to work off offhand but like the the something that i'm
[02:32:26]  not expecting is probably happening here that i'm not seeing but the general problem is supporting reactivity across boundaries is is generally um challenging that's yeah what is going on here
[02:32:49]  this is actually interesting so it creates a source and then it wraps it in a get which means that it shouldn't be settable and then sorry i'm just looking at
[02:32:59]  the output here to see if i can figure out what's going on and then when we call create count it it it it's wrapping it as a source again so svel
[02:33:07] te's compiler is actually doing a little bit a little bit of something here that's interesting and then it's mutating it back in local state uh-huh that is
[02:33:24]  that is interesting but generally what i was trying to get at is erasing boundaries is i i it's might the challenge i think with forget might not even be a technical
[02:33:38]  challenge it might be actually the fact that like lacking the language like if you go there's a balance here if you go too far on the language um compilation side of things um
[02:33:53]  like sorry if like if you lack if you try and make it just work as just javascript and you lack the language to express certain ideas it's harder to actually see
[02:34:03]  what's going on so there's there's this careful balance between making it invisible versus it being there like svelte having you pass out the functions of the getters
[02:34:12]  is actually quite powerful way of actually telling you what's going on if you take away everything you kind of lose that a bit um but they have more specific challenges they they're
[02:34:24]  dealing with because they want to be able to support stuff like like i mean i don't know why you would do this but like like like like i'm just making stuff
[02:34:39]  up like they want yeah i don't even know how okay they want to be able to support arbitrary mutations and like pushing to arrays and flow like inside the components um and have
[02:34:56]  that transverse cross file there's a huge amount of analysis involved to make that stuff actually work anyways uh let me catch up on chat after svelte is not
[02:35:25]  in run mode um no this compiled output i think is oh so it oh interesting so it like falls back to beat on like kind of like how quick works interesting that's
[02:35:46]  interesting yeah this is something that quick does where it like falls back to like that that that's interesting a bunch of people in chat are like i've never seen this oh
[02:36:06]  interesting this is the the thank you for the the details here this is this is very helpful um so it's basically has that fallback yeah to keep backwards compatibility that makes a
[02:36:19]  lot of sense hmm interesting yeah i guess that's the only way to kind of bring this in gradually that's tricky because it's it's quite a considerable deopt huh
[02:36:36]  structurally but it's interesting yeah this is one of those things that i've like i've had one of those things like you can literally see what the svelte
[02:36:56]  code compiles to here right like like like like this is actually like more like when we had the older version with the so i'll go back a bit when we had like
[02:37:11]  the older version where we were doing all this stuff like svelte is essentially compiling to this which is what's like like you could write this in solid and it
[02:37:21]  would work create signal and then count and then set count here like there we go now it's now now this is now this is solid create signal count set count you know
[02:37:38]  um the the biggest difference is and and then this is why again why we have different frameworks right is this is completely runtime to save yourself that typing like you now are introducing a
[02:37:54]  compiler that has to look over all your javascript code and all your js files and then like make a decision of how to act differently like effectively you get the same
[02:38:05]  result pretty much and even the same properties of like generally of like signals not being a thing like we don't have a maybe or is signal thing like we don't play that
[02:38:15]  game um but like the thing is like and i mentioned this on my previous stream look get count if i have a count variable i don't wrap it in a getter i
[02:38:26]  just use the count variable like why do i think to wrap this in a function and it's because this is a function call like even if i didn't write a function
[02:38:36]  call it's mentally a function call so in a sense there is a graph that i'm seeing here this saved me typing characters but it did not save me any cognitive overhead so
[02:38:47]  and it's in it and for me personally i think it adds cognitive overhead because like for the cost of just putting a parenthesis in i don't have to think about
[02:39:09]  what a compiler does it just doesn't exist so there's a trade-off some people prefer one way or the other way um so like and as i said the second
[02:39:19]  you pull this out in svelte like okay you're doing dot value but you could also make this a function call you right you can just call dot get and dot set
[02:39:27]  let's let's do this like we're we're not particularly um kidding ourselves so to speak right like what is it uh so counter dot set counter dot get plus one
[02:39:46]  i mean this is terrible like very verbose syntax it's like mob x is box syntax but what i'm what i'm what i'm what i'm getting at is
[02:39:54]  like these are functions like when i'm like like this this really isn't a big deal like i don't know like compared to the extra mechanisms going like this is about
[02:40:15]  as trivial as things get Yeah, I mean, you end up in exactly the same place once you do one level of distraction. It's kind of like, but like
[02:40:39] , this is a, this is like a common thing. Like, can I give you another example? Svelte devs will probably represent this. It's actually too
[02:40:48]  bad we didn't have dominant stream when we went into this piece, but it's fine. Svelte has control flow, like it has like, if and each
[02:40:58] , but if you want to make a custom control flow, you have to monkey rig completely different syntax. That's fine. They have a native syntax for it, which is
[02:41:08]  like a language feature. And then they have a composed syntax for it, right? So like, if, if you want to pass variables into each, I mean, I
[02:41:16]  can just go to the Svelte docs, I think for this Svelte dev. We want something called, um, uh, what is it? Isn't
[02:41:28]  the tutorial? I can find it. I'm looking for, um, what is it called? Uh, not advanced Svelte. I'm looking for, um
[02:41:38] , slot stuff. Where is it? Is there something about slots here? reactivity props. No, I'm looking for, no, no. Yeah. name
[02:41:55]  slots and slot props. I think are the things I'm looking. I'm looking for slot props. I think. I built this before in a whole stream. I just
[02:42:06]  don't have it in front of me right now, but you end up using this much clunkier syntax. syntax, the past new variables. Like if you made
[02:42:16]  your own for loop, you don't get to use each. You have to actually make a component that then uses like, um, these, uh, I think it's
[02:42:24]  slot props or slot variable syntax where you use like prefix attributes as a way to say, like pass this into the context of this array and all this stuff. And my
[02:42:33] , my, my point is like, it's all we chose to use a for loop component because it's like literally the same thing you'd use as an end user.
[02:42:40]  You have the exact same composition pattern. So like it's, it's idipotent. Like if you create a signal in solid and then you made your own signal
[02:42:48] , they would look identical, but it's felt you don't have that property. It's a property that I value. Um, it's felt the native things look different
[02:42:57]  than the, the composed or built things, right? You use hashtag each or you use dollar sign state, but once you build something with it and you make your own
[02:43:06]  abstractions, they don't act the same. Whereas in solid, your primitives, my primitives are identical, right? Because I know what's going on inside of
[02:43:27] , of course. Right. But the, and I think this is an important detail. I think this is why Svelte really works well for people kind of coming
[02:43:34]  in, newer people, all this stuff. I built solid, not for other people. I built it for myself cause I wanted a framework that could control all the details.
[02:43:43]  Like I knew exactly what, um, what I, what I could get out of it. So like, I can never unsee what I see. And the,
[02:43:53]  like, that's, that's the situation. You're right. I think the beautiful thing here is developer experience, debug, really dev tools. Now that we're all
[02:44:10]  in signals, we'll be able to make big advances in that. I don't think the syntax actually matters at all. And as I said, effectively, the second
[02:44:17]  you do composition is felt, you're basically back at solid. So it's only like in that one little zone that is different. Um, and I mean, some people
[02:44:27]  could argue that compilation makes debugging harder because it rewrites your code. Um, I don't think Svelte's compiler rewrites stuff in a way that
[02:44:34]  makes it really any harder, especially with this mode, older Svelte felt a little bit trickier. I used that would have been a complaint about like Svelte
[02:44:40] , um, three or four, but Svelte five looks pretty sweet. With get our aesthetic proxies, compilers constructing is always a problem. We
[02:44:55] 're just passing single around because actually read out there specifically calls a function. Yeah. I mean, this is basically the problem, right? You could add more compiler magic as
[02:45:03]  wrap to try and like hide this fact. But the problem is there is a graph here. And as much as we pretend it's not there, we have to compensate with
[02:45:12]  more wrappers, which indicate to us it is there. So it's like, you need to know about the problem to then solve it by using these extra wrappers
[02:45:20] , at which point, like you're just doing a lot of extra work for like, it almost completely flushes out for me. It's like, it's like if
[02:45:30] , if you can put a dollar sign on something instead of calling a function, for example, I'm, this is not the same case here exactly in terms of syntax.
[02:45:38]  It's like, it's doing the same thing, but now you aren't using Java native JavaScript, you're using a compiler and you save, you know, in
[02:45:47]  this case, like one character it's like, but it's like one thing over here, one thing over there. It's like, it doesn't actually matter, but
[02:45:54]  people will think it matters, which is like, why I think there's like a certain aspect of that where people will care and like it. Yeah, I'm not
[02:46:05]  quite sure I follow, have you thought about modifying wrapping DOM methods of updating HTML with the fact that, I mean, that's what our JSX compiler does, right?
[02:46:25]  You, you, you, you put a text content prop on an element and it goes, create effect text content to do this text content. I'm, you mean
[02:46:34]  like, it's just like hooked type ABIs. I think there's a good argument for like, I think JSX is compact. I think seeing HTML is kind of
[02:46:41]  proven its benefit. Yeah. The left direct font props slots. Thank you guys, you guys, I'm catching up with the chat now. Sorry. Yeah. Yeah
[02:47:01] . I mean, to be fair, these already exist. We've had them for years. It's a funny thing. He mentioned that Vue had that ref sugar,
[02:47:08]  um, thing that looks exactly like ruins. Well, solid has something called solid labels came out November, 2021. You can use something that works just like Svelte ruins
[02:47:19] , um, in, in the solid ecosystem. I think they had a new release this past week. So we've had this for two years. If that's what
[02:47:24]  you care for. I just never push it because I, you can tell, I don't believe it. And that's good. That's why we have different frameworks.
[02:47:30]  Yes, yes, yes. This is the, if we get standard signals, this is what we get picture. If you could have like stack traces based on the reactive graph
[02:47:46] , rather than the runtime, like the, like, instead of having the queue, you know, sometimes if you ever debug in a react graph, you'll sometimes like
[02:47:54]  see like, okay, this change happens and it queues these things. And then later you'll see a queue run off and then you get there picture. If you could
[02:48:00]  actually track through the dependencies and stuff, kind of like a mob X as a tool for that. It could be built right into the browser for everyone. That's like the
[02:48:06]  kind of wins that I want out of the standardization. Yeah. Uh, the problem is V Dom does make a bunch of garbage nodes, but when you're doing
[02:48:22]  optimal stuff like, uh, blocked on type approaches or like, like a naive V Dom is yeah, it can be worse. But like the stuff that Dominic was working
[02:48:31]  on stuff, you know, Aiden with blocked on was working on, they can save a lot of that creation. Cause honestly, all they're doing is they're just
[02:48:38]  getting a bunch of data and diffing it. When you create stuff for the, and in the case of creation, you're just like basically getting the data and drawing
[02:48:44]  it. When you create signals, you're, you're at, you have this extra memory. It's almost like when you add memoization and react where you get this
[02:48:51]  extra memory for all these different primitives. That's why we group effects. That's why we try and, you know, I don't like APIs that lead to people
[02:49:00]  over wrapping. It's because we don't want this extra memory usage. So like classically back in the day, everyone made every binding a different effect and every component
[02:49:11]  prop, a different, like, um, computed or memoized value for each prop. And they've made every component had its own wrapper. And they like, they made
[02:49:20]  all these tons and tons, a huge graph for components. And it made it very heavy. And this is the state of art. This is what people were doing.
[02:49:30]  And it sucked, um, for performance Ember and stuff back in the day. And react came on. I was like, look, V Dom is so much faster.
[02:49:38]  And I was like, no, no, it shouldn't be like, obviously fine grain updates, updating one place in the Dom, when you trigger something instead of re-
[02:49:45] rendering is way faster. But for creation, you're taking all this upfront memory overhead. So it, you know, I, I was playing with it for a
[02:49:53]  year, year and a half when I saw surplus, um, from Adam Hale and he took the opposite approach. He tried to do the least amount of possible here in
[02:50:03]  terms of that creation stuff. He wasn't yet, he was even grouping effects for elements. I took that further and added template cloning, but he was, he was
[02:50:10]  still doing a lot of, uh, the kind of base stuff that we didn't solid. And I, I saw that and I was like, I was like,
[02:50:18]  wow, it was almost the opposite extreme. I'm like, he's not doing enough. Components are like, you can't think locality. You're passing signals
[02:50:25]  everywhere. You know, like it wasn't the, it didn't learn enough from react, but he showed that it was possible to have a reactive library faster than like most
[02:50:35]  V Dom implementations. Um, so like it was, but the way was he optimized reactivity for creation. And that's what I focus on a lot here.
[02:50:46]  We updates are easy. V Dom's update probably fast enough on signals update like way faster than they'll ever. Like we could give up time on updates significantly given how much
[02:51:00]  faster we are than a V Dom on updates, but creation, we have to work hard on. We have to keep our memory profile low. We have to reduce our
[02:51:07]  overhead. So like, this was a classic trade-off. This is why when, you know, the signal stuff all went down back there, the react guys are like
[02:51:14] , Oh, signals libraries are slow or whatever. We changed that. We looked at how to reduce that overhead. And now, because most partially, because we leverage the fact
[02:51:25]  that we render once and can optimize for that creation ahead of time with a compiler. Um, so that's, you know, our JSX compiler isn't that complicated,
[02:51:34]  but on the, you know, it's not, it's, we're not like doing Svelte rewrites of your user code and stuff, but you
[02:51:41]  still get that benefit of, if we can look at it with a compiler, then we can do some of that work ahead of time to optimize the path for creation.
[02:51:49]  And if we do that, that's enough to make the difference. Oh yeah. Yeah. Yeah. Yeah. I mean, that's, that's, that's
[02:52:04]  a whole other thing. I mean, modifying the standards. People are actually interested in this side effect side note that there are people who would love if we, if we get
[02:52:15]  signals, um, in the DOM to be able to, or sorry, in the browser, to be able to use the DOM APIs like this, which is, it's
[02:52:22]  attractive. I think the problem is effects. I don't know how we, we, the scheduling effects is really iffy situation when you consider stuff like, uh,
[02:52:33]  like suspense offscreen and whatnot. And I don't know if the DOM like standardizing on that kind of stuff is actually really tricky. Yeah. Okay, cool. Um
[02:52:43] , let's get this week in JavaScript going. I got, I got lots of stuff to go on here. More of this conversation. Uh, let's, I
[02:52:52] 'm going to pop out on my screen here for a second so that I can get us ready. Um, but yeah, no, thanks for asking the question. I,
[02:53:00]  I, I love talking this stuff. Um, I think it's really cool to, to see the interest in signals. I think it's really cool to see how like
[02:53:11]  there is a lot of convergence of ideas, right? Um, let me see. I've got some bookmarks here as well. Um, it's just, you
[02:53:23]  know, this is a, this area in one way, it's very old, but in another way, it's getting more attention now than it's had in years,
[02:53:36]  which means things are still moving fairly quickly. Um, sometimes I feel like my best input is based on just experience with using it, these patterns for so long and with
[02:53:47]  users, um, you know, you know, having, you know, feedback and going through these cycles. I can bring that experience to it, but there's a lot
[02:53:55]  of really smart people, um, you know, working on actually improving the algorithms, the performance and, you know, changing really how we look at this stuff. So
[02:54:05] , yeah, I mean, in general, um, you know, I'm very excited. Uh, okay. Where are we? Yeah. Okay. That's where this
[02:54:14]  starts. Isn't it? Okay. Um, okay. Okay. Sorry. I'm just getting myself all in the right place. Yeah, yeah, yeah, yeah
[02:54:26] . Okay. Perfect. Yeah. I think I can start there. That's actually perfect. All right. How's everyone doing? You're all still alive. You're
[02:54:37]  ready for this week in JavaScript. Yeah, no, I, this stream is going to be a good one. I can tell when we go back. Um, okay.
[02:54:50]  So let me flip over to that and two seconds. All right. Where are we? All right. It's time to talk about this week in JavaScript. For me
[02:55:09] , there's been a lot of discussion going on the last, uh, you know, uh, little while with, you know, the release of Svelte 5 Ru
[02:55:17] ins, uh, you know, preview or whatever you want to call it. It's not officially alpha or beta or it, but to be able to play with it about
[02:55:24]  the nature of signals. We, you know, we've been seeing this stuff all over the place, but more people are now seeing the aspects of fine grain rendering and
[02:55:31]  framework author, creator of OB reactive library and Vobi framework. Wanted to point out an interesting feature in solid. Um, and I mean, it depends on what you
[02:55:44]  want to call a feature or, or, or bug, but this is something that we saw today in our Svelte stream as well, which is the idea of grouping
[02:55:51]  render effects, right? What he showed was in solid, if he went in here and put a random number inside one of our bindings, and then updated some state
[02:56:04]  that was unrelated to it. Keep in mind, he's purposely using attributes. When we insert children, they actually happen independently, but he's using text content. No
[02:56:15]  one actually uses text content like this, except for optimization. Um, so basically he's showing like, if you update one attribute of an element, um, and not another
[02:56:25] , uh, uh, not another attribute, and there is a calculation that isn't, uh, in a memo, it will actually change random colors, right? And
[02:56:40]  we saw that Svelte, uh, five actually does a similar grouping again, because we have to optimize performance of creation over update, generally speaking. Um, that's
[02:56:50]  what makes this whole approach viable. And, uh, but the question is this, um, expected or unexpected, right? And I could definitely see why this behavior would
[02:57:00]  be unexpected, right? Um, the poll was pretty split as well, right? It was definitely leaning towards bugs. The funny thing is like the, the, the
[02:57:15]  funny thing, um, is the, yeah, sorry. The text content is just the problem, uh, right. But my point is it's because it's the types
[02:57:27]  of situations where like the, the text content also makes it more feel disconnected and obvious. So most people using this sort of example wouldn't, wouldn't have such an
[02:57:38]  obvious case. Like it is a bit scripted for this scenario, but I wanted to talk about this one because if you're using react, you're used to everything re
[02:57:46] -rendering. So like this, this would a hundred percent happen. But if you're using solid, you know, like it's fine grained. This shouldn't
[02:57:55]  happen, right? Like these updates should happen, um, all independently. Well, there's a, there's a cost to that. If, if you listen to
[02:58:04]  Dominic, it can be an actually extreme cost to that. So, you know, we always tell people, if you have something that's expensive, then, you know
[02:58:11] , you should wrap it. But what if you have something indeterministic, like random, right? It's kind of the same thing. Obviously this scenario, he
[02:58:22]  wouldn't like, as I said, it's staged for this, but it's right. It is pulling more than it needs to. And I want to actually pull
[02:58:29]  up an old article that I wrote to talk about this. Because, um, we talked a bit about it with Dominic on stream, but let's see if I can
[02:58:37]  find it. It's, uh, called, uh, performant form. Okay. It's that old. It's not even on my first page. Performant
[02:58:48] . I wrote it. Yeah. No, no. Where is it? Thinking granular. How is SolidJS so performant? I'm going to drop this one in
[02:58:54]  the chat for people. Um, So one of the important things I think gets missed here is I want to say I have this whole section about because we think granular,
[02:59:11]  right? This is where I laid out why this model is good. Um, and it's why is it view and Svelte 5 are picking it up, but yeah
[02:59:19] , use a compiler to get the creation benefit. This is what I was talking about cloning. You want to clone the Dom node, optimize creation on memory, loosen the
[02:59:29]  granularity. Number three, what make it less granular where we are paying the highest cost on update nesting, doing unnecessary work, reconciling lists by far.
[02:59:40]  Now you might be asking why even reconcile lists at all, whatever. But the whole point here is that the biggest creation cost is creating all the extra computations. You can
[02:59:51] 't do much about end user code. Although I was looking at how to merge end user computers, um, and effects at one point. Um, but generally speaking,
[03:00:02]  I can see both sides of the argument. One side of the argument is that this is just incorrect because you should be all react or also like fine grain. There should be
[03:00:16]  no middle ground. The other argument is that it for the most part doesn't matter. And we optimize for the common case in the hopes that if something weird does,
[03:00:30]  you know, not even weird, but hoping that if you, in a situation where it, you know, something executes more often than you want to, it isn't
[03:00:38]  that hard to optimize in the specific case, right? Basically there's already so much of a win by reducing this overhead that in these kind of force situations, things then
[03:00:50] , you know, so be it. Grouping effects. So like, uh, we saw this also in the Svelte example earlier where he had two text, uh
[03:01:07] , updates, like inside the same friend or effect. We do this so that we only create one effect. Technically speaking, if I move the text content into a span
[03:01:18]  here, um, then it doesn't happen. What's happening is, okay. You know what? I have to show this for people to understand. I think let
[03:01:26] 's, let's do this. Um, let's trash can this. I'll see if I can make a very basic version of this example, show what I'm talking
[03:01:36]  about. Okay. So he just added math random. Okay. So, sorry. Let me see it again. Color is the style background color. Okay. Style.
[03:01:53]  I can show this with the compilation without even, um, doing the whole thing. It's, um, background color. Is I'm going to come up with color
[03:02:09] . Okay. See, and then we're going to go const color equals math dot random. I don't, it doesn't even matter what it is. Okay. I
[03:02:22] 'll show the compile output so you can see what I'm talking about. What ends up happening here is we end up grouping the effects together. Um, oh, right.
[03:02:32]  It won't happen in this example. Um, sorry, give me two seconds because this is an insert. This is a separate, um, separate context. Let me
[03:02:43]  do this. So I have to go text content equals this. All right. There we go. Okay. It's fine. What you're going to see here is the
[03:02:55]  effects get grouped together. So both the setting the style property code and setting the data on the text element, um, are both in the same loop, but they have
[03:03:04]  a guard. They're going like, if the value hasn't changed, don't update it. If it has changed, do update it. And, but with math dot
[03:03:11]  random, every time it gets called, it ends up changing the value. So it always invalidates and it always updates. Right. No, Svelte was doing
[03:03:28]  the same thing. The, the, I actually put in a span, um, and it was a separate place and it was still grouped. Uh, you want,
[03:03:46]  this is, this is a contentious area. I suppose they might land ultimately differently, but as of today, they, they do the same sort of optimizations.
[03:03:59]  So yeah, I, I'm just kind of putting it out here. It's just this, this kind of reduction. Um, as I said, I mean, we
[03:04:10]  can try building in the actual value was the same, not two different reactive values. Oh, okay. But I mean, my understanding is that they, they had the same
[03:04:21]  grouping. Um, I haven't played with it, but my understanding is that they have the same grouping. But that's, that's an interesting observation that like as
[03:04:36]  a middle ground, you could say you could, well, you are, the thing is it's the click that's updating the count. That's causing this effect to run
[03:04:47]  over and over again. It just calls color every single time. And usually that's a memoized value or it's a value that it's not expensive to calculate it
[03:04:55]  and doesn't change. So it doesn't update, but because it's random, it gets called every time and it updates every time. Anyway, this, this, this
[03:05:08]  is one of those like trade-offs where it's probably worth thinking and revisiting, but it is the way solid is designed today specifically because at the onset of designing
[03:05:20]  solid, I wanted to show that it was viable to scale. I actually had an article called, um, the real cost of UI components and the difference between these kinds of
[03:05:30]  optimizations, a grouping, like taking a tip from the virtual dom and not grouping. It was all the difference the, like I, and in real apps, you
[03:05:40]  tend to have more bindings. So like for a performance standpoint, to me, this was one of the things that suggested that this approach is viable over the virtual dom.
[03:05:50]  It's possible with engine optimizations in the future, creating more computations could stop being the, uh, you know, as much of a concern, but this, this
[03:05:57]  like go back seven years or whatever, when we were trying to prove that this was even viable, this is one of the keys to getting that performance because except for when people
[03:06:07]  are doing, I mean, I don't know why you're doing math random, but except for these kind of kind of outliers, this generally perform performs better. It
[03:06:17] 's on creation. I mean, it would be like how we used to it. The thing is the costing of splitting by a specific signal would be easy to do.
[03:06:31]  It's just like, in this case, you'd have two effects, which is exactly what we were trying to avoid. The reason that we split on inserts is because inserts
[03:06:41]  are generally structural changes or generally more expensive, right? Like if, if, if, if, if, if I just inserted in here, sorry. And just put in
[03:06:51]  here, like we treat these attribute changes independently of structural changes in the Dom. And that has been a good heuristic for us, right? So like this,
[03:07:09]  this is one of those kind of interesting scenarios where like, it probably will never bite you, but like it is something, you know, to be, I guess, be
[03:07:20]  aware of. It's hard to document, like, this is an advanced kind of documentation thing. It's not like something that like people just pick it up. Uh
[03:07:27] , we'll, um, sorry, where am I? We'll just like, you know, you know, like, how do you, how do you explain this to
[03:07:36]  someone? We explain to them that all the props are lazily evaluated. That's how we explain it. Right. Like, I don't, I don't know
[03:07:50]  beyond that how to actually explain the scenario, but it was an interesting one because I do think that it is like, when we say stuff's lazy, it doesn't really
[03:08:03]  rest with people properly. Another example of that is props children. Every time you call props children, it creates all the children. Like that is the impact of having a
[03:08:13]  lazy, lazy props. You can just do that as well. Yes. Like there, there's a, you can wrap it in a, uh, create memo or derived
[03:08:25]  and svelte. Like there's a billion ways to solve this problem. Once you hit it in the very rare chance you hit it. Yeah. Anyway. All
[03:08:43]  right. Just wanted to start there. Cause that, that was where, you know, some of the conversations are happening. Another interesting one for me personally was, um,
[03:08:57]  not that although last stream was a lot of fun. Um, yeah, I, I talk a bit about web console lit there. Let's not go there, but
[03:09:06]  we did the solid 1.8 release after the stream last week. Um, we put out solid 1.8. And as I mentioned, it was mostly like internal kind
[03:09:20]  of stuff. Um, you know, it's really cool. We demoed it all last stream if you want to see it, but there was an interesting result from
[03:09:28] , from this whole thing. People started getting really weird bugs, um, and reported. Let's see if I can find some of them. I might've closed them now
[03:09:39]  that I fixed them, but, um, yeah, like stuff like they would, I like this one, they, they created some SVG and then it wasn't
[03:09:54]  showing up in the client. 1.7. It worked 1.8. It didn't work. They'd server render. And then instead of getting something with an SV
[03:10:01] G, all these attributes and a path, they ended up with this empty SVG element. And they're like, what did you break? Um, sorry. I don
[03:10:11] 't want to show it. And we were also getting, um, weird things going on with styling with the 1.8 release. And it took me a moment to
[03:10:21]  figure out what was going on. And what was going on is there are libraries out there for solid that precompile their client and their server. And they don't,
[03:10:36]  in solid, we have a mode like Svelte where there's like a hydratable key and it slightly optimized, like there's a difference between opt being optimal
[03:10:45]  for rendering versus like a slight deop for hydration. The compiler code generation is almost the same, but it removes the need for certain markers. So it like, it reduces
[03:10:54]  the code and improves the speed. And what was happening is they, instead of shipping solid source, like we recommend people were pulling in client libraries that weren't hydrating
[03:11:08] , they're just recreating the DOM elements. So this whole time they've been using solid SSR and, and basically doing deep destructive hydration, kind of like angular style
[03:11:17]  and not actually leveraging the benefits of solids, like incredibly performant hydration. And the reason we never could tell was because when we hydrated, even though we didn't create
[03:11:29]  any DOM elements, we would set all the attributes, um, essentially and properties. And in, and in this case, because it was compiled for client render, it was
[03:11:42]  actually creating the DOM elements. So like instead he ends up with basically an empty element after 1.8, because we don't do any of that work anymore. And I
[03:11:54]  started realizing that there is like a fundamental shift here when you're going to solving hydration. I talked about last week about how we didn't update text nodes. I asked what
[03:12:02]  was the source of truth. You know, if, if you hydrate something and you have a random math random in it, you know, you server render it at one
[03:12:11]  number and then you get the client and it would get another number who, what should the DOM reflect? And I said, classically, it should reflect the client's
[03:12:19]  latest one. But in reality, because in a future where you don't hydrate everything, it should actually keep the server value. Well, this is what's happening.
[03:12:28]  It's keeping the server value, which is nothing essentially. And all of, all of this stuff that should be there basically was, um, was basically being removed.
[03:12:43]  So I've had the change in solid, the errors. Now when hydration fails, it has to fail hard. It can't fail in a healing way because we don't
[03:12:52]  include the code anymore to heal it. Basically we've optimized hydration to a point now that we can skip certain parts of the hydration that we can't possibly heal from a failure
[03:13:03] . I think that's actually a good direction, but it means that we actually error now and you're going to get more like if there's a hydration ID mismatch
[03:13:11] , it's an error. If you try to import a client rendering library and during the hydration part of the code, it starts trying to create elements on you. It's
[03:13:18]  going to error and say, hey, this library isn't set up for solid SSR. So it's much, much clearer. It just fails out right away.
[03:13:26]  But this was a big conceptual, um, shift for me. Similarly props. Think about it. Um, solid has this ability to go in here and go like, uh
[03:13:35] , I want to pick something different. I mean, it's fine. Uh, what's an example you can, you can install it. Everyone knows you can put a
[03:13:45]  class in here and be like, I'm going to, I have to use a, like something that it can't resolve to, to force the compilation the way I
[03:13:54]  want it to. Um, but it, we have this class name helper that we use, but if you, you can also in solid go prop class name, and it
[03:14:06] 's just going to compile to like set the class name directly. Like it doesn't matter what this prop is. We could be prop title. I don't care.
[03:14:15]  It basically just does a direct value right to the, to the property. Um, this is kind of awkward, right? Because for hydration, because if you think about it
[03:14:28] , if you trust the server value, you can't render props as HTML, you can only render attributes. So for like input fields, we, we can put the
[03:14:41]  value of the input from the server as an attribute. And even though we use the props to set the value, um, in the client, we have that initial state,
[03:14:50]  but if something's always a property, even on the server, then if we start skipping the code to, to like, to do this stuff, because we're not hyd
[03:15:03] rating, it won't work properly. I've made exception now for prop title or not prop title, but for prop, uh, name space that it will always run
[03:15:15]  on hydration. But this is the kind of mentality shift that we're seeing here where like the less hydration we do, the more awkward it is for, for declarative JS
[03:15:27] X stuff that only happens in the client. Like you can hide it behind on mount or create effect. That's all good. but actually things that can't be serial
[03:15:37] ized into the HTML become, you know, more, more of a burden. Could you leave a flag to leave the code in that would let it recover in those errors
[03:15:50] ? Could you leave a flag to leave the code in that would let it recover in those errors? Um, potentially, but the problem is, I think like,
[03:16:07]  we're just like, it's eventually we get to a point, especially with solid 2.0 design or like, it's just built in such a way that that code
[03:16:18] , those code paths would never run. Like, it's just fundamental. Like we're this is coming right down to the primitives. Like one of the things I
[03:16:27] 'm excited about that we've been working with solid 2.0 is that hydration, like right now you can see this when you go clients hydrations with server running, it
[03:16:37] 's basically the same code as client side rendering. And we think that's cool. It's because on one side, you know, you clone a template and on the hydration
[03:16:45]  side, you just don't clone the template and just run the same code. And it has this kind of reduction in solid 2.0. The actual act of doing
[03:16:54]  the hydration, like these render effects will basically like these effects here will basically have the mechanism for hydration almost built right in where, um, the idea is that render effects are
[03:17:07]  going to have a pure half and an effect for half. There'll be like two functions, one to do the tracking and to do the pure calculations. And then one to
[03:17:14]  actually apply the difference. And this is important because it'll, we can do all the pure stuff first and then all the effective stuff after like, and this is important
[03:17:23]  because we need to like do stuff like off screen and suspense, and we need to be able to control and transitions. And it's a lot cleaner to be able to control
[03:17:33]  the pure side and have it pull eagerly because most of our computations will be lazy. We need something to do the pulling without doing the side effects. But one of
[03:17:40]  the coolest effects or impacts of this is that you can run the front half without running the back half and still know what's being tracked. So in a sense, we
[03:17:50] 'll have by design a mechanism that works for hydration because you could just do the, the non-effectful part and you just skip the effects when you're on the hydration
[03:18:03]  pass. Um, so like these kind of like the way I'm doing in solid, um, 1.8, which I showed, I might've not showed this
[03:18:11]  on the stream last week is that I am, let me show you. I have helper functions for a lot of things. So when we go in here and we're hyd
[03:18:21] rating and we're trying to say, set an attribute, we go, Oh, if it's hydrating early bailout, right? If you're setting a class name
[03:18:34] , early bailout, right. We just added these early bailout checks and then it works in solid 2.0. This will just be implicit by the scheduling of
[03:18:42]  the actual reactive system, that hydration, uh, this kind of minimization on hydration will just work. And the taking the next level is when we're able to serialize
[03:18:51]  those dependencies on the, of, of the graph, then we instantly get resume ability, right? Like it's, it's, it's part of the same,
[03:19:01]  uh, separation, right? You have the, the part that does the tracking and does the pulling. You do the part that does the effects by separating them. We basically
[03:19:11]  get this very cleanly anyway. Um, but now we're in this zone, right? Like where we have to be conscious of like this is, we added some
[03:19:24]  new errors here in dev mode. Um, right. Like in the template function, if, if we're hydrating, fail to attempt to create new DOM elements during hydration
[03:19:34] , check that the libraries you are using support hydration. Like this is like, we're being a little bit more aggressive here. And similarly, the, the classic one was
[03:19:45]  a get next element. Let me find it. Get next element. This classic one, we used to have a lot of like different warning messages. We just always throw
[03:19:54]  now hydration mismatched, unable to find DOM notes or hydration key. It's just, there's no point trying to fix it. The problem is people ignore these warnings.
[03:20:03]  And then I get bugs about like other random things that happen in their app. Now they're going to be like much more common. It's just so much easier. What
[03:20:11]  I love about these kinds of errors now, this one, um, less so, but this one especially is the second you try and use a new library with your SS
[03:20:20] R project or you do something, it'll, it's going to break right away. So you know when the problem is, you're not going to be coming at it
[03:20:25]  later and going, oh yeah, I had a few of those hydration warnings before. Let's try and figure out what's wrong. No, like it's instantly going to
[03:20:31]  be like, yeah, sorry, buddy. It's not working. Um, so like the last change you did is what broke it. All right. So yeah,
[03:20:46]  1.8 definitely had some learnings. I'm, I'm pretty stoked at like what this means for like, um, our progression to doing less work during hydration
[03:21:01]  though. Why does this eight look upside down? It's like an optical illusion. It looks like the top is bigger than the bottom. I don't know. Uh,
[03:21:09]  it adds a lot of complexity. I've thought about it like for single elements and stuff. The thing is cloning a single node actually is even slightly slower than document
[03:21:29]  dot create element. So like, like you could get wins on that. I guess this is, it's one of those things. I know like style components is exactly the
[03:21:44]  argument for making this kind of stuff. I also don't like style components. It's a bad pattern for reactivity. It pushes everything into spreads, which makes it
[03:21:52]  harder, more expensive to do granular stuff. So like, I, I really want to push to having more primitive elements. I, I, I could see, as I
[03:22:04]  said, like it being able to see single element and make that judgment. It's, it's actually fairly trivial. Um, it just, there's like tension here
[03:22:13]  where you're like, wouldn't it be great if the DOM expressions capacity, we wrote in Babel, but wouldn't it be great to work in other things we have
[03:22:22]  in an SWC. I, I'm actually trying to figure out how to remove more of the edge cases so that the, it's almost like a standard compiler so we
[03:22:29]  can implement it in other languages. Um, you know, easier, I, I mean, maybe it's possible we should just like all just build something really fast,
[03:22:42]  like in like our own compiler, like in Zig or whatever, and just be like, that is the compiler. But yeah, I, right now, this one isn't
[03:22:51]  on my radar particularly because like, yeah, it's hard to say the impact of it. All right. Where am I going here? Okay. This is a cool
[03:23:07]  project. I just want to throw this out here. Um, native script, vision OS, um, using solid, good read. I, I, I love seeing these
[03:23:18]  more interesting projects taking fact of, uh, advantage of solids like granular performance. Yeah, I agree with you. There is a lot of that. I, is it
[03:23:40]  every single element that gets wrapped? I don't know. Um, one of the things we're working on and Marco was recombining the templates, which is interesting.
[03:23:51]  Like basically on first run of all the components actually collect the template and then put into something so we could clone multiple components at the same time. Interesting stuff. It's
[03:24:04]  just like, yeah, I don't know. It's, it's, it's, it's kind of a gray area. Um, yeah. Pod rocket podcast
[03:24:16]  was good. Okay. Okay. Let me continue on here. Cause there's a few, the few topics we got here. So I talked about 1.8. I
[03:24:25]  talked about Fabio. Are we ready for this? Do I want to talk about Ryan Florence? I've been, I've been digging his tweets recently. Um,
[03:24:38]  or do we want to, yeah, do we want to talk about server components? Let me see here. Yeah. Let's talk server components. Yes, this is
[03:25:01] , this is the one place that like, this is the, this is the biggest reason we try to minimize the impact of splitting components apart. Um, obviously, but this
[03:25:18]  is, this is the, this is the place where like, it does actually make a difference. The larger, the templates you can get to clone, the more beneficial
[03:25:26]  it is. That being said, if we were create elementing everything one at a time, um, it wouldn't have a performance impact if we, you know, put
[03:25:40]  multiple together or less together, but it would, but when we put multiple together, it'd be worse. So it depends on how you want to look at this,
[03:25:49]  right? Either you can look at clone node as generally an optimization, um, over a fixed cost of creating an element, or you can view it. Um, you know
[03:26:00] , it, a D optimization in the case, a minor D optimization in the case that it is a single element. So it's, or, you know, so it
[03:26:09] 's like, yeah, I don't, I don't know. Another example is the getters that we wrap around component props. Technically those have a cost. And
[03:26:19]  as Dominic was talking about earlier, they are slightly more expensive than they should be because on classes, they're cheaper. Are getters cheaper than proxies? Yes
[03:26:27] . Significantly. Are they more expensive than function calls? A bit. So it's like, like at one point it was like one, three X, 10
[03:26:34]  X, that was like the function getter, um, proxy. But my understanding is that on classes, um, the getters are much closer to function performance, but
[03:26:47]  again, splitting up more components, there's more getters minimal cost, but it's like something that like without. Yeah. That one would probably need inlining.
[03:26:59]  I did look at inlining briefly at one point, but then like there were, there were other challenges. Yes. Um, the key thing here is for the most part
[03:27:15] , you don't like, it's not the updates that cause you, like, if you write stuff in react, you break up separate components because of the way state
[03:27:27]  updates. Like you're like, okay, I have a list and I have the separate state. I should pull the list into a separate component so that it doesn't get
[03:27:34]  impacted by this other state update. And you like, you do it to isolate the changes in fine grain renderers. The state changes don't dictate the split of the
[03:27:45]  components. Um, you do, but on the other hand, like, yes, there is some like slight costs on splitting stuff because they're while the, while the boundary
[03:27:56]  costs aren't a hundred percent zero, right? You, you have to create objects for, I mean, for props. If, if something's in line, you don
[03:28:03] 't have a prop, you don't need a props object. You know what I mean? Like, there's always going to be like slight costs for breaking things apart
[03:28:15] . It definitely is. And I did it, I did this a couple of years ago. Um, it's old, but what's it real cost of UI components
[03:28:26] ? Let me see if I can find it. This was the original comparison. Oh, come on, Google, why are you being so slow for me right now?
[03:28:50]  It's not Google's fault. It's medium's fault. Lovely. We can look at my revisited one. I compare a bunch of different approaches. I talk about
[03:28:58] , um, vanilla JS, solid, lit, svelte and inferno and talk about the impact of components. Here we are. So this is, this is the
[03:29:08]  updated one. The gist is that if you put everything in one component, the VDOM library, inferno was way slower than the rest. Once you put them
[03:29:18]  down into a reasonable place, um, Inferno actually jumps up considerably ahead of lit and svelte, um, because it matches its update boundaries. As we
[03:29:31]  push the components to, to the extreme, um, solid's approach did have overhead. It is slower, but it wasn't, uh, we got ahead of vanilla because
[03:29:45]  I was actually using web components for vanilla. Vanilla is actually web components. So one web component, web component per row, web component per cell. So in the
[03:29:54]  end solid ends up faster than vanilla because it's using web components, which are slow. So like, and I talk a little bit about like, um, the memory usage
[03:30:04]  being an impact here, but let me see. Yeah. I'll put it all in one chart so you can see it. This is what, what I'm kind
[03:30:11]  of getting at is like solid three was slower than, um, um, vanilla two, obviously vanilla one. Um, so like you, you lose stuff by making more components
[03:30:25] . Like it is, there is a cost to it, but comparatively between the different frameworks solid approach, um, does pretty well. Sorry. This, this image
[03:30:38]  is not big enough, but I don't. Yeah. Yeah. Yeah. Yeah. It missed 10 ADP. Sorry about that. You can also go look in
[03:30:52]  the article. Okay. Okay. So yeah. Components are not free. I, I, I guess that it's as close as to marketing. Cause I suggested
[03:31:13]  that component costs are something you don't have to worry about. I still believe that because of the comparison I did, but they're not free in the same way that
[03:31:22]  like every component you make has, you, you created an extra prop object, right? It's just like in comparison of, you know, other things that you could be
[03:31:34]  doing. Okay. So let's talk RSCs. I have been struggling with designing RSCs as you all know, like there's been a lot of API
[03:31:50]  considerations. There's been performance situations. I talked about the double data problem before in stream. Um, serialization is once we get into this world of partial stuff, partial
[03:32:01]  hydration, it seems like all we ever talk about is serialization. And Ryan Florence, actually, he's, he's, he's talking about loaders, but he
[03:32:10] 's, he's actually talking about RSCs here. He goes, the boundary between a remix loader and the component is pretty easy to explain and understand, but
[03:32:15]  we still see devs dump huge objects like user and the return value and leak sensitive information. Maybe we need to rename use loader data. Something more obvious is a client
[03:32:22]  server handoff. RSC serializing pros passed into client posts stresses me out. It's way less obvious what's happening. We have to figure out more explicitly boundaries at
[03:32:31]  the call site of the client, not the definition. So what he's saying is he comes in here and if these weren't called client and serialized and dangerously
[03:32:39]  serialized or whatever, you would not know like that, this is the boundary, right? You have to go look at the code and go, Oh, it says use
[03:32:48]  client, or it doesn't say use client. In fact, this breaks locality of thinking, um, which I will talk about it because that was my article today
[03:32:58] . Um, in a, in a little bit, because you actually have to go to another file to determine what's happening in your own file in this case. And that
[03:33:08] 's, that's pretty significant. There's a reason quick has dollar signs. We might not like it, but, but there is a reason quick has, has dollar
[03:33:18]  signs. So I was, I was like going, okay, well, how does this look in the wild? Because it's not just like, what if those server components
[03:33:29]  or client components aren't even in your own project? You're just like NPM installing. You have no clue what you're going to get downstream. Yeah. Just
[03:33:40]  write your server components in a different language. Yeah. The, the, well, yeah. Cause then you'll definitely know the boundaries. Yeah. No, this is a
[03:33:47]  good call. And actually Astro, think about it for a second. Like in a sense, that's how you could view Astro because Astro's, I mean
[03:33:54] , I'm not saying like write them in Ross and I know your, or go, I think you were doing a demo on go when I saw last, but if
[03:34:00]  you think about it, like Astro has a different templating language, there is no way to really mess that up. You're like, I'm in my Astro
[03:34:09]  file. You are not an Astro file. Like, and they put client right on it. You have to go client load. Otherwise it's not going to the client
[03:34:17] . Like it's very explicit from the call site. Can we tell TypeScript? Um, yeah, maybe, but I, yeah, JSX is terrible. And
[03:34:28]  knowing what elements are like, I can't tell JSX that a div is a div like good luck here. You know what I mean? Like they actually have, if
[03:34:36]  you ever look, I got to look at some great RSC repos and there actually is a way that sometimes you can tell if it's a server component cause it's
[03:34:44]  an async function. So like there's actually like TS ignore the fact that this is an async function, um, all over the, these code bases. But
[03:34:51]  this was an, this, this, I started asking about this cause I wanted to understand. Cause I was thinking for a second, I'm like, what is the value
[03:35:01]  of the NPM ecosystem around server components? Like, why do I want to do this? And the first thing that came to mind was like, man, wouldn't it
[03:35:08]  be sweet to have an API in a bottle, like be like import, you know, like, like the server actions. Like if I could just picture there's an
[03:35:17]  export of like use server from reactor, it's a bunch of server actions and you just import them into your file. And now you didn't have to set up an API
[03:35:24]  endpoint. You can just like basically call them and it works. To be fair in react, it doesn't quite work like that. Cause the server actions can only be passed
[03:35:32] . I, my understanding, can you pass them? Can you import them into client components? I can't remember. I, or yeah, maybe you can, I know
[03:35:40]  next was trying to do this thing with forms, but, but like, wouldn't it be really cool if you could just like import it and then bang, you have
[03:35:49]  an API, right? Yes. There, there, this is, you're, you're walking along the path that I'm getting to. Cause this is what I was
[03:36:01]  thinking too. I was like, oh yeah, maybe those prefixes were a good idea. Yeah. Cool. Yeah. You can pass an import. Yeah. Yeah
[03:36:10] . Cool. Thanks. So yeah. Isn't that incredibly powerful? Like picture you start up a new react project. Don't really care what you're doing in it.
[03:36:17]  Client components, server components. I don't care. Just import the server actions, right? That's, that's a huge win. Like your whole app could
[03:36:25]  basically be a client side app. I know react has specific ways they implemented and this doesn't work, but like solid, we have, you know, the bling or
[03:36:31]  solid, you know, server function stuff. Like that's pretty sweet. You just like picture, if you could package that up, just import an API thing that I get
[03:36:39] , but that's not what I'm talking about here. Why do I care if something is a server component specifically? Um, like anything that talked to a database or anything
[03:36:50]  that wrapped an API that was third party, I could just ship that API and not bother wrapping it in a component. Like what do I gain there? Like the end
[03:36:59] , like if you're designing your app, you have the ability to just go like async await my API. Like, why am I maintaining that? Not to mention like
[03:37:06]  do every backend have the same request object and stuff? Like there's, there's a lot of conventions here that are hard to kind of lop in. So like
[03:37:15] , what am I doing? You know, so I was looking at these and what kind of occurred to me while I was typing this like immediately, I was like, well
[03:37:25] , maybe they're not actually server components because you don't actually mark a server component as a server component. They just have no use on them. So they're shared components
[03:37:32] . So maybe that's the thing. You don't actually ship server components, you ship shared components. Um, and then mark anything that has to be client just in case
[03:37:41] , you know, And I was like, as nothing makes server components, you know, server, besides if you access them under a server route versus under a client route
[03:37:50] , because the truth matters, if you have a component that has no state or anything, anything that would make it a client component and you import it into a server component,
[03:37:59]  it's a server component. If you import it into a client component, it's a client component. Like it, it doesn't like the only thing was, this is
[03:38:06]  not a true statement because when I, uh, sorry, when I, when I looked into it, I found out that I looked at the code examples. There's
[03:38:15]  a lot of async functions because server components can be async functions. Other things can't be Dan Abramoff goes, that's kind of the point. React Mark
[03:38:23] er works as an RC because it's a component that doesn't use client features. Same for syntax silers. So in a sense, like they could just be client components
[03:38:31]  if it imported there. And this is a good revelation for me. It helped a little bit, but I mean, I still have Ryan Florence's concerns about serialization
[03:38:40] . Like we wouldn't bother putting dollar signs on our server functions if, you know, we didn't think this was important to tell people when stuff is crossing the wire.
[03:38:49]  Right. Yeah. I heard you can technically create async client components. Um, yeah. Although they, they said something like they might disallow it in the future
[03:39:00] , but it's like you bringing client points to pass API credentials. Imagine passing database credentials to a server component and setting up the back. But the thing is you could also
[03:39:14]  just like the, you could also just interact directly with the underlying API. Like the piece that I'm starting to get the best use case that I came across for because
[03:39:25]  everyone shipped, showed me their syntax highlighters. Like literally every buddy that replied to this was like, check out our syntax highlighters. There was something, there's a
[03:39:37]  couple of cool things that weren't syntax highlighters like, um, mitosis. I want to talk about it in a minute. And like, uh, I saw,
[03:39:44]  uh, like a query thing that worked SWR one side server comes to the other side. But the problem there was I looked at the library and it's like,
[03:39:51]  okay, so the alias imports so that when you're in a server quote land, it imports one thing. And then when your client component land, it imports a different
[03:39:58]  thing, but they use the same backing API and they put it all in one package. And it occurred to me, the whole awkwardness there, why it was like that
[03:40:04]  is because you have different rules of how you did data fetch on the client and the server. So they have to split the paths and hit the same API where ironically, they
[03:40:11]  could have just called the same API in the first place and not cared. And they could have just made it a shared component, essentially if the, if the data fetch
[03:40:17] ing was the same, like a lot of the solutions that I was seeing here were actually caused by reacts API design, not like, because like they helped just because like they
[03:40:28]  literally were a problem creating itself. Like it was like, the solution was for a problem you didn't need to have, have in the first place. Um, yeah.
[03:40:37]  Syntax highlighter. Um, someone's like, why do you expect them to be an NPM package? I don't know. Syntax highlighter. Yeah
[03:40:48] . This is the query state one. This is a cool library. If I understand this correctly, something that packages always is a client component, like only the client portion and
[03:40:55]  not the server portion, right? Like it works with server components. They had their version, but it was still always the client component. Like, let me see here
[03:41:04] . Okay. Well, this is an API. This isn't a component. Like I, I think after doing this whole look, it was kind of clear that react
[03:41:26]  moved away from the dot server in a sense, because they actually want the default to be shared components. Server components are a fiction. They don't actually exist. You have
[03:41:35]  shared components, like, like just components. And then you have client components to client features. That's that's, that's, that's sort of the situation here
[03:41:44] . So that's fine. But that, that, that is kind of the scenario here. So I was like, okay, that's fine. You know, the
[03:41:59]  interesting part though, is like the ripple effect this has on the ecosystem because of like the internalization and on the serialization. So I, I, I got, I
[03:42:09]  got something to throw at you guys. Tell me if I'm completely crazy here, but I was, I was like sitting around. I was like, okay, I don
[03:42:15] 't like this. Let's see if I can sign in. What am I? GitHub? Sweet. I was like, okay, let's, uh, let me
[03:42:26]  share that in case anyone wants to check this out later. This could be worse. I'm, I, I just honestly, actually, I'm going to open the read
[03:42:38] -only version because it's easier to see. Um, I just was kind of like reading these Ryan Florence tweets and stuff, because one thing, sorry, I missed this
[03:42:49]  for context. Uh, let me get back to here. What got me onto the RSC thing was that I pay attention to retweets. Um, let me
[03:42:57]  see here, view, um, post engagement. And there, there was only a couple of quote retweets or one point. And one of them was from our,
[03:43:06]  our buddy here, Jay Larky. And he was talking about how solids, um, new deduping streaming serializer is something that isn't in, um
[03:43:17] , uh, react server components yet. And that Ryan Florence was also very much concerned about this data serialization problem. And, uh, as I said, I, I
[03:43:28]  started reading a bunch of stuff that Ryan was complaining about here. And it was all the concerns that I've been going over on stream the last little while. So I was
[03:43:36]  like, maybe it's possible to kind of, you know, look at the API design and come up with something more reasonable here. Cause what I, what I keep
[03:43:44]  on coming to, as I look through this stuff is that as much as we want to automate everything and make it magical, you know, and this ties right even into the
[03:43:52]  Svelte stuff and the, especially react forget of all things is that like, we need indicators and language for these things. Like quick is right to put the dollar signs
[03:44:02]  where they do, because we need to know about it. Even if they can automate stuff, the developer needs a language. And because the developer needs a language, like
[03:44:10]  these things can't be invisible. Like, so automation doesn't mean invisible, um, which makes it still a thing, which means that we are cognitive of a compiler and
[03:44:21]  a compiler cost. Anyways, the combination of these kinds of tweets has got, got me back to thinking about what server components could look, could, you know, look like
[03:44:31] . And if this is just like a stupid, stupid idea, but I wanted to kind of put out here, what my concerns were after seeing this, right? Yeah
[03:44:39] . Everything comes down to partial hydration. We need to, why quick has a dollar sign. I am bling has its dollar sign and islands are no difference, but react
[03:44:48]  right now has these three mechanisms, maybe three and a half use client import me as a client component use server. I'm an RPC call that runs on the server,
[03:44:56]  only in server components import server only something else. I think in next I need to be on server or else. And then they have async functions, which are,
[03:45:03]  I think just for the server, although technically not, but should be. So this is how we navigate this space. But there's impact of these decisions. It's not
[03:45:12]  clear from the outside, what type of component you're dealing with. The current ecosystem needs to go add some used client all over the place, or consumers will be creating extra
[03:45:20]  file wrappers. The fact that they have to go put the used client is fine. Like, the thing you have to understand is people who want dot server and dot
[03:45:26]  client, if you're thinking from a package standpoint, can you picture forcing everyone to go into their libraries and changing their extension to dot client? The problem is the client components
[03:45:36]  are the special ones. So you can't just make, well, we'll leave the client at it is, and then we'll add dot server to the server functions
[03:45:42]  because of shared components. That only works in like the astro sense where like, you know, you're an astro and there's nothing you can do about it.
[03:45:50]  But if you want components that can be used in both contexts, then those are the ones that shouldn't have the extension, which means that the file naming convention can only works
[03:45:59]  if you're starting a brand new ecosystem. It would basically break the whole react ecosystem. Okay, moving on. It's clunky to wrap client side higher order functions
[03:46:10]  around RPC calls, picture client cache. Yeah. This doesn't matter much because you only use cache calls in RSCs. But what I mean is like, I
[03:46:17] 'll show an example a bit later here, but like, it's very weird. If you put use server at the top of a file, and then export a bunch of
[03:46:25]  functions, then if you want to use react cache API around those functions, you need to then import them all, wrap them in the cache API, and then re-ex
[03:46:36] port them again, probably to use them in the locations where you want to use the shared calls, probably like, you could cache them in line, but I like generally
[03:46:44]  the patterns you cache at the at their declaration site. Now, again, with RSCs, you're doing all the fetching on the server. So you don't
[03:46:50]  have this hawk problem. But I'm thinking very generalistic, like if I was going to try and use the same solution for CSR server points for everything, right
[03:46:58] ? Also, they're not configurable. Like, how do I change my server functions to use get versus post, or, you know, other things? Like there
[03:47:08] 's, I don't really have much at my disposal. With use server, it's kind of invisible, like there is the async local context, but that's only
[03:47:17]  exists on the on the server, not at the call site. So you don't have the ability to configure them with their API's. This is a big downside that we
[03:47:24]  saw with when we were kind of bling, which is why we kept on going with the dollar sign and not use server there. And then finally, use server and
[03:47:32]  use client look the same, but they aren't like the they're actually completely different concepts. One is for a server RPC. One is for client components or client root
[03:47:44]  entry. So I was like, okay, I mean, I'm gonna put this out to you guys first, and you can tell me that this is just a terrible
[03:47:51]  idea. You know, I'm kind of person who doesn't care about typing, you know, a lot of people were, you know, we just had a whole stream
[03:47:57]  about like, how far someone's going to go to avoid typing parentheses, right? I'm being a bit facetious, but like, I don't care about that
[03:48:05] , that much. I was like, I noticed something the other day, and I've been watching this for a while, there's this idea, and it's coming
[03:48:11]  out in TypeScript 5.3, because it's already a stage three spec of import attributes. If you're not familiar with the import attributes, it's a feature where
[03:48:20]  runtimes can say like, information metadata about the import. So, you know, TypeScript doesn't care what this is. And TypeScript is fine with this, but
[03:48:33]  your browser probably found it. So like, the question is, and this is a big question here, like, I don't know if runtimes will, like,
[03:48:42]  obviously type means something, but if you put something else here, like, you make up a field on these, on this metadata, like, I don't know if browsers
[03:48:50]  will choke on it, but it's an interesting idea that you could tell people how the import should go, like what it should do. Sweet. It's, yeah
[03:49:00] , it's all you can roll up for. Let's go. Yeah. So, okay. Sweet. What I'm getting at is. What do you think of not
[03:49:13]  having client comments and go asteroid when you specify on the client property? Yeah, yeah. I'm almost on the same page, except, yes, I'm very much on
[03:49:22]  the same page. The problem right now with Astro is you can't just like switch the, like, the share components are kind of a weakness. So what I
[03:49:32] 'm, let me, let me, let me continue on with this. Okay. So what if you could like Astro does it on the component and that's a call
[03:49:42]  site, that's probably a very good thing, but then like the, you're adding props to components that don't naturally have them. For me, I was thinking,
[03:49:50]  wouldn't it be natural if you could just like say island true or client true, like something at the import time. That's still enough that when you're looking in
[03:49:57]  your local file, you're in your component, like you're looking here, you can actually see without looking for it that, you know, like this is a client component
[03:50:06] . You, you specify, you can put all your client components together at the import site. Plus, as I said, it's more representative. Like you make the choice
[03:50:14]  at the, on the outside, you tell them that, right? So, you know, I don't know what this is. I don't know if we're
[03:50:24]  allowed to do this, but this is sort of the idea. If we could start like this, that's pretty sweet. And then I was like, okay, well I
[03:50:30] 'm playing around the dollar sign. You put the dollar sign at the end. So originally we put the dollar sign at the end because of quick. And we were like,
[03:50:36]  okay, we could like kind of make different versions of it, but these things aren't really composable in the classic sense. I think they need to be more visible
[03:50:43] , maybe cap it all, put it first. I don't know. I saw Svelte macros, maybe, you know, I, that part isn't that
[03:50:48]  important, but I was like, keep server functions as server functions. Cause they are not the same thing. Um, as long as there's a way to make these
[03:50:55]  very obvious. See right now, this is all black in the syntax highlighter. This is not obvious to me that anything special is happening. Um, if we can find a
[03:51:02]  way to make the macros really freaking obvious, I'd love it. But what's cool about this is with server functions, you can literally do this whole thing. You
[03:51:11]  can go, um, cache server function, some server wrapper, some special behavior, the function that you have there. And then some config options say, I want this to
[03:51:23]  be a get, not a post. Like you could literally do all of this stuff in, in line with the server function. If you're using use server, well
[03:51:32] , that's what I'm saying in one file, use server, do this another file import it, then wrap it. And then still no way to do config and do
[03:51:40]  it. And you might be like, oh no, but you can use server inside the function. Trust me, if you actually go in and use the use server inside the
[03:51:48]  function version, I mean, I could write that out too, but it's like, it's, it's, it's, it's much clunkier than
[03:51:54]  being able to do this. Uh, there's a reason you could say that, oh, use server is not that bad. You can still do it, but there's
[03:52:01]  a reason why I'm, I'm pointing things this way. So yeah. Yeah. Concerns of bundling, you'd strike closures and no surprises terms
[03:52:20] , what gets included. You know, I, I don't know what the convention is, but we all want macros, whether they're like Svelte State
[03:52:25]  or Quick or whatever. So I feel like this is very much a macro thing then. Okay. Pilar hints. I don't hate use client, use server.
[03:52:35]  Like you strict is pretty sweet, but the thing is a lot of times you might not like, I'm hoping that these things just, what I like about both this and
[03:52:47]  these are, they can kind of be ignored if you don't support the thing. The idea is these are completely optional. If people add them to packages, great.
[03:52:54]  If not, well, then limits options, but no harm. Basically, if you try to import a client component that isn't marked as a, you know, use server
[03:53:02] , unless it does something not allowed on the server, like read context, it will work. Sorry. If you try to import a client component that isn't marked as
[03:53:10]  a server component, sorry, I'm trying to figure out how to, this is a bad explanation. What I'm trying to say is these are hints. So like if
[03:53:18]  you try to import, um, a component in a client component and it has used server on it, that immediately the bundler goes, sorry, you're trying to import
[03:53:28]  a server component. It's just like a way that like you're saying this is definitely on the server. Now, the truth of the matter is if you didn't put
[03:53:34]  this in, it's probably going to fail at runtime anyways, right? Cause you tried to do that Prisma database fetch and it's not there. Similarly, if
[03:53:43] , if you tried to, um, in a server component and in a server context route, and you're trying to import this component and it's got a bunch of state
[03:53:51] , like, I don't know, you could, the bundler could fail there as well. If you try to import it. Cause you're saying this definitely has to
[03:53:57]  be on the client date again, it maybe it uses context. Like the thing is, if you're using context in a client component, um, it's going to
[03:54:06]  fail when you're trying to use on the server anyways, it should just at runtime, but this way the compiler and the tooling and your IDEs could actually do smart stuff
[03:54:15] . Um, if they see these flags, I'm the criteria for this naturally, like you could just not do it. See what I was thinking for a bit and I
[03:54:24]  was like, why do we need use client? Like state doesn't matter. We've server rendered stateful stuff forever on the server and it not having state, you
[03:54:34]  know, like you can go to Astro and not put a client load thing on it. The only thing that actually breaks on server components is actually, um, if you
[03:54:42]  have different patterns for data fetching, like react, which I a hundred percent want to avoid. And if you read client-side global state from the server, that will
[03:54:51]  be a hundred percent broken. We showed that on the Astro stream. We showed that a few times. So as like, as long as any component that like uses
[03:55:00]  context, um, like the thing is it will fail and people will know at runtime, but this goes, you go, I don't want it to fail at runtime.
[03:55:08]  I want to fail at compile time. You just mark it on optionally. It's just, it's just a helper. We can ignore this even exists for the most
[03:55:14]  part, but that's kind of the idea. So what does this achieve? Well, it's clear what components you're dealing with from the outside for serialization purposes
[03:55:22] , because you're saying, I want to import this as a client component. Use client is optional. Although whole files modules would be imported, uh, as either client or
[03:55:33]  server, if you know, someone go in and do it. So like if you have an NPM package and they haven't updated yet and you tried to import it,
[03:55:41]  unless they're using a feature that was client only like context, it would work under the server components or vice versa. Um, and you could do that in one line
[03:55:51]  instead of making like a wrapper, like use client, import this, re-export, you know, like whatever, like you don't need extra files. It's
[03:55:58]  literally just the import statement. Um, it's easy to wrap RPCs with higher order functions. I already showed that RPC behaviors are configurable. And finally,
[03:56:07]  use client, use server are equivalent and opposite. They, they mean the exact same thing. So I addressed all the points above the end. I, I've closed
[03:56:18]  off saying, I think we need to know about serialization, um, which may prevent us from ever automating these things completely. Like use client, use server in this
[03:56:25]  proposal could be unnecessary at some point in the future. Like if we had a sign of a compiler that can look at what we were doing, you wouldn't need these hints
[03:56:33] , but I think you would always need the import statements on the outside or the server function because you need to know as a developer what you're dealing with, you know
[03:56:44] , and I'm okay with that. Well, lost a few people there, but I hope you follow it. I've already written a wall of text, but I think
[03:56:56]  it's the best proposal. Mainly it can be used outside of solid and can be used for RPC calls for me on client only, but the same check can be
[03:57:02]  in both and the same. Yeah. Yeah. I mean, to be fair, React thinks their version can work inside and outside of React as well. So, um,
[03:57:11]  can you explain why server components cannot be used in client components? Why this has to do with prop, uh, prop. It's very important that you can't pass client
[03:57:21]  side props to server components because there's only a single, there should only be a single server route. Ultimately you can say in the, on the server, choose to
[03:57:31]  render parts of it, but you don't want to have back and forth waterfalls because of prop change. You don't want to like essentially have a server, have a
[03:57:39] , some kind of change, go to the server, render the server components, get to the client component that has server components in it. But because you, you aren't
[03:57:47]  running the client component because of, it depends on global state or whatever, have it go back to the client now, render the client component, realize that it's props
[03:57:56]  have updated for the server component. Go back to the server. Um, do that. Like it's very important that you can't pass client props to server components. So
[03:58:05]  we use transclusion or what the term is to prevent that, which means no, you can pass them through as children, but they cannot be imported inside a client file
[03:58:14] . Uh, okay. But why is there not a hydration server side? Not following it. Sorry. Yes. All right. Is it marketing client? It doesn't
[03:58:39]  get important as a client component. It just runs through and never hide it. So yeah, that's basically what I'm suggesting. There could be a runtime error if you
[03:58:45]  try to use certain features, but state is not enough of a feature. Maybe on mount. Like if you have effects in it, we can be like, look, you
[03:58:52] 're trying to import, uh, an effectful component only on the server. There's no effects on the server. You know, maybe it's a warning. I haven
[03:58:59] 't quite figured out the details there, but they're like, we do this in Astro a decent amount of time too. What about client components that wrap other libraries
[03:59:15]  like a chat window or anything else? Um, I mean, if they're client components, then wouldn't they be completely client components? Um, yeah, I'm not
[03:59:23]  quite following John. Like the server component tree single server route, you can have multiple client routes under them. Once you're in a client route, you can pass server
[03:59:38]  children through and kind of do that. But like the, once you're in a client route, you you're, you are in the client route. You can't get
[03:59:45]  out of it, so to speak. Um, so any existing library that is a client library, um, can, will work fine because it'll just go under that
[03:59:55]  client route. Um, yeah. Okay. People are losing a few people here. Let's keep on going. Um, Oh yeah, yeah, yeah. Yes. Okay
[04:00:11] . Yeah. Yeah. Then it won't work. Right. But I mean, what I'm also suggesting is like, it also, it kind of won't,
[04:00:20]  it also won't work. Like you should just import if import as a client thing, if you need to import as a client thing, right? Like, yes, there
[04:00:27]  are situations where it won't work properly. Um, if you do it, but like all you have to do is add and use a use client somewhere and then you
[04:00:39]  make sure it happens. Cool. Cool. Okay. Um, let me continue here. So we talked about Ryan Florence, um, THH. Oh man. I laughed
[04:00:57]  so hard when I saw that. Are we at DHH time? Yes. Yes. Yes. Exactly. Yeah. I'm trying to think if I have a good
[04:01:24]  stream on this. Honestly, I've people ask me this every time because it's like the thing they like really struggle with. I'm trying to figure out, I feel
[04:01:32]  like I've explained this for like three plus hours across multiple streams. I'm not going to do it again today, but, um, I've definitely talked about this
[04:01:41]  before. Um, because this like islands have the same restriction like Nastro, basically any system that's worked like this arrives here eventually. Um, okay. Um,
[04:01:59]  let's see here. Uh, yeah, sorry. Uh, just trying to get back to where, where we were. Cause there's a lot of stuff going on here
[04:02:07] . Yeah. We talked about that. We talked about that. Um, before DHH. No, I'll leave this one last. Let's do DHH next.
[04:02:18]  I think there's nothing else here. Okay, cool. So DHH decided to, uh, um, do keynote for, uh, I, I figured it was
[04:02:42]  some Rails conference, Rails world 2023. Yeah. Sorry. I, I'm just still reading comments from this. The lack of isomore data fetching definitely makes
[04:02:58]  us a problem. Yeah. Yeah. That's, that's, that's the thing. Um, I'm assuming here and it's because of solid, like that data
[04:03:04]  fetching will look the same on both sides. And that's what I've been working on. So like, this is, I'm not saying this is like the universal
[04:03:12]  for everyone. I'm saying solid can pull this off because our data fetching will look identical on both sides. Like our patterns and the, the, those won't
[04:03:20]  qualify it as being a client shared or server component. Yeah. That's the sort of idea. Exactly. I, I, I, I'm still working on like exactly
[04:03:33]  API there and stuff, but yeah. Okay. So he talked about a lot of stuff. Um, I, I just want to fix in on the, the no build
[04:03:43]  conversation. Um, because it's a, it's a funny one. I, I, I feel like there's been this growing contingent and it's not surprising
[04:03:56]  of web old timers, people who support web components. Like there's alignment of people who, because I feel like it's largely because they're positioning against modern, uh
[04:04:07] , declarative JavaScript frameworks and like the stuff in it that they're kind of predisposed, um, against this. And don't get me wrong. There is
[04:04:15]  a lot of complexity that comes in these build processes. If you have maybe a, like, I could see a scenario where depending on the size of your team or whatever,
[04:04:27]  like the impact of build times and all this infrastructure around builds could be, um, prohibitive. I, I've actually like, it's, it's funny. Cause
[04:04:36]  like we build tools for our tools, for our tools to get this stuff working, right? We're constantly working on improving the, you know, it's not just
[04:04:43]  like our HMR. Like we spend a lot of time, you know, trying to make sure that the development effort, um, sorry, environment works really quickly. Right
[04:04:53] . And the funniest thing is when we used to develop in JavaScript and HTML on the web back in the day, you would literally update an HTML file, refresh the browser
[04:05:01]  and you'd see it. Right. And like, it's not hard to picture having a script on the page, auto repolling it or whatever. Like you didn
[04:05:08] 't need to build anything and it was super fast. So I can see where, um, this is coming from, from that perspective. There's also, you know,
[04:05:19]  when you have, you know, people who, a lot of the same group who says that single page apps were like a 10% improvement over multi-page apps.
[04:05:27]  I don't know what world these people come from. Like, I mean, I do, but I like, I don't know how anyone could say that with a straight
[04:05:34]  face. Like, don't get me wrong. There are tons of shortcomings with single page apps. Talk about that a lot, but like to actually like just straight face
[04:05:41]  be like, yeah, it was like a 10% improvement rather than like, honestly, it was like a 70% improvement. I think that I'm more concerned about
[04:05:53]  the advice being given here, which is that, you know, lean on HTTP to, you know, import maps to, you know, bundling, you know, no
[04:06:04]  build is something one can do, but you can never pretend like it's better ultimately for your end user than built. You can say that perhaps in your environment, that
[04:06:19]  the cost of build for your developers, you know, is extensive, right? I don't know these scenarios, which would get there that there. Yeah. It's funny
[04:06:30]  when spec compliant people get in there. Multiplicate review is not more efficient than bundling. H3 has a fix and maybe we're probably the thing of the path
[04:06:36] , but no one has tried actually multiplexing a SIM server as far as I know. Okay. I've talked, I've talked a lot about in the past,
[04:06:45]  how, um, it's more than just, you know, being able to pull the right modules out. I'm, I talk about how dead code elimination can happen
[04:06:58]  within the middle of a function, how you can reduce bundles, you know, incredible amounts. The, the way you write your code, when you know that it's
[04:07:08]  going to run through a bundler can be optimized in a way that no one built tools can do. We've, we've done the demos on stream, but like
[04:07:16]  it's, I mean, I, he's clearly doing this to be sensational, but like I, I'm getting his argument is trying to say that it's good enough
[04:07:28] . I, I'm going to find another tweet of his in a minute. Let's keep on going. Yeah. Malte from Vercel been there, done
[04:07:34]  that straight up does not work in HP2. The request overhead is still very substantial and there are concurrency limits. Plus you get waterfalls and inefficient compression. There's
[04:07:42]  no way around bundling for high-performance websites today. like, yeah. Um, I, I agree completely. The funniest thing is at some point, this discussion
[04:08:04] , I, I don't know, Jay Larky, if you're still around, you might have it for me. It got turned into lighthouse scores, um,
[04:08:09]  which I would love to actually see. Let's see if we can find DHH is post on the lighthouse scores, because the, the, let's keep on going
[04:08:17] . Let's see if we can find here. Yeah. This is what he posts. How we built hay wasn't feasible prior to 2020 before import maps. So if your
[04:08:25]  mental model of the web is soaked in the possibilities of 2020, I understand your skepticism, but please don't let it restrict your ability to appreciate progress. Right. Um
[04:08:34] , he points out, I think here that he uses local desktop lighthouse scores. I can tell the desktop because largest content contentful paint is never, uh, like the
[04:08:49]  response time. Let me see if it's in the article, you can't get a first contentful paint of 0.4, um, on mobile. It's you
[04:08:57]  could serve a blank page and you, you don't get 0.4. Um, so these are desktop scores, I believe from his local, you know, computer.
[04:09:09]  Uh, and like he, there's some comparison, maybe it wasn't this one. It was in the tweet between Gmail, because Gmail got 90. Again, Gmail
[04:09:18] , there's no way Gmail gets 90 on mobile. Okay. Yeah. Well, I'm getting some, I'm getting some shares here. Just a second. Let
[04:09:30]  me see if I, if this is the right tweet. Thank you. Yeah. This is the one I was looking for right here. Yeah. Yeah. Yeah.
[04:09:40]  This is, this is a hundred percent desktop. Um, you gotta use something like, uh, like web dev, um, web.dev, page speed insights, and
[04:09:55]  you've got to use mobile scores if you're actually gonna take it seriously. But even so let's look at what he's suggesting here. He goes, we sent just
[04:10:01]  500 kilobytes of JavaScript uncompressed versus Gmail's 10 megabytes. There's a couple problems with this. Like besides the fact of Gmail's legacy here,
[04:10:09]  let's ignore that for a moment. The thing that kind of stands out to me about this is like, we don't know the capabilities of Hey being any, the same
[04:10:19]  as Gmail's like picture if Hey doesn't use as much client side interaction. It relies more on doing like HTML partials or something, right? You're going to
[04:10:31]  maybe send less JavaScript for that, but it'll be visibly clunkier for the end user to use. In fact, most people that I remember when Hey was launched
[04:10:40]  said that it felt clunky. So like you can't, um, really compare it here. And he's like, he's like, we send only 500 kilob
[04:10:52] ytes of uncompressed JavaScript. Do you know what that tells me? That someone could build Hey Hey, I'm not, first of all, they could minify
[04:11:03]  and compress it. Second of all, it's likely that if they were using modern front end frameworks, uh, that leverage, you know, these technologies that let, um
[04:11:15] , you know, like more granular technologies, uh, perhaps things like, you know, islands or resumability that with a smart compiler, that's able to like
[04:11:28]  do, do this stuff. First of all, the code's probably more maintainable if he's doing like crazy j queries type, like partial JavaScript insertions in different places
[04:11:39] , like using stuff like stimulus, which I believe it is what they're doing. But like, I would not be surprised if someone could make a Hey clone in less
[04:11:51]  than 40 kilobytes of compressed minified JavaScript. Like just because 500 kilobytes is good enough for him. I bet you someone with the build tools could make something
[04:12:04]  10 times better. Like that's the problem here. It's one of those, like, you know, if you can do it, I can always do it better
[04:12:12] . Like that isn't a question here. The build tools do just make it better. The there's, there's basically no possible way that they don't like you,
[04:12:26]  the, because of what they can optimize. Yeah. You see solid movies times your solid email. Like, let me see if I can, is this the code for
[04:12:36]  the page controller? It's stimulus, isn't it? Let me hear. Yeah. Yeah. Okay. So their approach to JavaScript is actually a small one. I'd
[04:12:47]  say it's actually, it's, it's pretty, it's, it's good in the sense that it is going to be hard to match them on size.
[04:12:57]  If this is what their code looks like all over the place. On the other hand, I don't, I think I can figure out what this code is doing by looking
[04:13:07]  at it. Right. I mean, this is a very simple example of where they're getting what they're seeing if the anchor element is active and then looking at the
[04:13:22]  scroll height and then getting the bounding size of the entry element and then shifting it and setting margin. Yeah. I mean, my, my point is this is, this
[04:13:35]  is what happens when you like, don't use declarative JavaScript and use imperative JavaScript thing. It's like the jQuery soup. I'm, I'm sure like
[04:13:45]  this approach is possible to be smaller, but like scaling is a different question, but let's pretend it's roughly comparable because I think stimulus as a library is about 20 kil
[04:14:01] obytes. Um, if I remember, it's actually rather large. I remember I was doing a benchmark and I was like, it's funny how much smaller Svel
[04:14:09] te is than stimulus. when they're built for these purposes, um, of doing these small little widgets. Um, but what, what I'm getting at is that like
[04:14:21] , sorry, where are we here? Is that like, it's, it's a, it's a funny argument. You could say it's not necessary, but you
[04:14:30]  can't say that it's, that it's not better. So I get, I guess this is the drama of the week. I just hope people don't fall
[04:14:39]  fall for this too much. Yeah. Sign up for, Hey, you know, that's a, Hey costs money, right? Yeah. Like this is, yeah
[04:14:54] . There are cell guys are right in there. Yeah. Yeah. I mean like, let's face it. Like this is like when, um, someone goes, makes
[04:15:03]  a toy demo and then goes, compares it to the real thing and goes like, mine is so much faster. Right. You know, the funny thing is this works for
[04:15:09]  us often when we make frameworks, people come in and go like, I did the rewrite and solid. It's so much faster than my old site. You know, it
[04:15:15] 's like, yeah, well, cause you've learned something from there. You don't have a legacy, but even, even without that kind of scenario, the same
[04:15:24]  things that would make Hey, smaller would never get detected on Lighthouse, right? Like essentially if Hey reloaded the page every time had the clunkiest user interactions
[04:15:39]  that would have less JavaScript. If it was hard to maintain that would have less JavaScript. You know what I mean? So like you could never actually compare this and yeah
[04:15:52] , anyway, it's, it's fine. Like this feeds in the fire a bit, but it's, it's just, it, it's fine. I think
[04:16:02]  there's a group of people who are worried about the complexity of, of where things are at right now. So the, they'll take a performance hit and, and
[04:16:10]  say something, you know, eat, you know, if they feel like they can avoid that complexity, I just, I don't know if I want to be the person
[04:16:19]  who's, uh, maintaining that stimulus code. So yeah, I mean, whatever. I, I don't know when people come in with this, I haven't
[04:16:56]  seen a legit no build argument. I have to admit, like, I remember like, uh, somebody, Brian LaRue, I think was all like going off
[04:17:08]  about like, guess what guys, you don't need minificate or minification. Um, you can just zip it because, uh, and you use CSS as an
[04:17:16]  example. And if anyone knows anything, CSS is like the least minifiable thing. And he's like, look, minification plus zip versus just zip only made a
[04:17:27]  10% difference on size of the CSS file. And I'm like, like, JavaScript is not CSS. You know what I mean? Like, so, uh,
[04:17:37]  have you ever seen what Terser does like these, these, these, uh, these things, uh, Terser online, but I don't have a code
[04:17:45]  example for you. I wish I had a code example. Like it, it, when it minifies the variables, it looks for the most common characters used in your code
[04:17:55]  that it can't minify and makes the variables those. Like it actually improves your ability to zip. Like it looks for like, yeah, it's, it's
[04:18:08] , it's, it's fine. It's just like, cause it just, uh, it's. So like, I don't know. Um, I actually
[04:18:33]  saw an interesting tweet, uh, from Andrew Clark, uh, who was, who's a obviously core react maintainer, Andrew Clark. He works at Vercel now
[04:18:45] , but he was saying something along the lines of, uh, I think this one's old. I won't be able to find it. Um, he was, oh
[04:18:55]  yeah, here it is. If I had to start a project tomorrow and I were to prohibit it from running server-side JavaScript, I'd probably use HTM
[04:19:01] X. However, if I had the time and resources, I'd build an RSC runtime plus framework for whatever server-side language is available to me. So basically the
[04:19:09]  thing is in a sense, HTMX plus classic spa, uh, thing like, uh, SvelteKit is what server components are solving, except they're
[04:19:22]  doing it in a consistent singular way. Like that, that's a way of, of, of looking at this. Like there's elements of HTMX that are valuable
[04:19:31] , but like, wouldn't it be great if you could actually just have it part of a single system? Yeah, see, client components would be unchanged, but you
[04:19:41]  just write your certain components in a different language. Not as nice as all JS, but the program model would be largely the same. And then someone's talking about, well
[04:19:49] , then all your backend has to be, uh, you know, single server. And so, yeah, I'm disagreeing with that model. You know, yeah,
[04:19:56]  and he, and he links this, uh, this hypermedia versus data APIs. And there's, there's, this, this is, there's a lot
[04:20:04]  of good arguments here. I, I tend, even if I told you I have almost no use for HTMX, I think they have good ideas, right? But
[04:20:17]  we, we need more, but like essentially, yeah, if you haven't read this, it's, it's, it's talking about the benefit of actually passing the
[04:20:26]  mark out back instead of like having to process the data on the client, because especially even with stuff updating, because then the, uh, ownership or componentization can be
[04:20:39]  independent. Like, because the problem is when you have a front end and a backend, you have this like interesting, uh, challenge of like, you have to update the
[04:20:47]  code in both places or like the API changes and the, this talks about like, if you actually serve what you're finally going to serve, um, then like there
[04:20:55]  isn't that kind of split. And that's the philosophy actually behind islands and server components as well. Yeah, exactly. Yeah. So right. So like, basically
[04:21:17]  like my guess is if Svelte had something like server components, you just wouldn't need HTMX. It'd be like same benefit, but just like more integrated
[04:21:26] . Eh, there's differences. Like you have to be able to solve state preservation, right? Like all these partial and like island type solutions have to be aware of
[04:21:47]  this. And because like, this is a challenge for Astro right now, and it's going to be a challenge for any of these kind of hybrids. You
[04:21:54]  can do simple things, but when you try and do the hard things, it's, it's trickier. I'm not sure. I mean, Dom suggested that they
[04:22:04]  it's, I think they're thinking when you go compiler thinking, you go down where Marco and quick is. I don't know that these are mutually, um,
[04:22:12]  exclusive though, because as I was saying earlier, people need indicators. They need to understand when they serialize. They need to understand the rules. You need a language for
[04:22:23]  it. This is the same argument I made about signals, right? Like why any compiler like react makes like for react, forget ironically, even if they're saying like,
[04:22:34]  we've hid the reactivity or whatever they do, it's going to look like signals essentially. Oh sure. You don't call a function. Like you don't call
[04:22:40]  function in Svelte either. Like, you know what I mean? Like it doesn't change the fact that you're aware of the data graph in a local context
[04:22:48] . So like on the same size that, yeah, yeah, not now stores are fine, but the problem is, okay, check it out. If you have, once
[04:23:00]  you get into a part where you're not unloading the page, the MPAs are fine, but once you're not unloading the page, you can't
[04:23:07]  client render the islands or server render the islands anymore on the server because they could possibly read from state that is different, like doesn't exist on the server, maybe a different
[04:23:18]  thing, unless you're serializing the data back and forth, which gets us back in the .NET days. I talked about this on a previous stream. Like it
[04:23:24] 's, unless you have a more complicated system, it's basically fundamentally broken with global state. Um, well, unless you're always client. Yeah. It's, it
[04:23:35] 's interesting. You could always client render in that case, cause you, you're the one making the call. So it's kind of like you server render the page.
[04:23:42]  Initially you do the HTMX call because it knows that the HTMX call it then doesn't render the client components. So it doesn't hydrate, but then
[04:23:50]  renders the client components. Yeah. I mean, I could picture how you could wire it up yourself. I'm just saying like picture that just all actually just working
[04:23:55]  on the box, just as is. Um, not, uh, not a ton. I did very much enjoy that talk. Um, to be fair, um, Dave
[04:24:06] , uh, shared with me a talk that I think you, everyone should probably check out. Um, it inspired me to write, uh, an article this week, uh
[04:24:19] , in fact, and, uh, let me see if I can find the link to it. Cause I'm just looking at it off screen. Cause I don't
[04:24:31]  want to share my personal DMS with the on here. Here we go. Yeah. Let me just copy the timestamp react core team member, um, talking about design
[04:24:43]  for forget. And when I watched this talk, um, it very much, sorry, let me post this in chat. Um, because I was, as I
[04:25:10]  was watching this, I realized that all the principles that he made the forget compiler possible that they were very proud of and what they were trying to accomplish already invested in our
[04:25:22]  signals today. Not to say that the work they're doing is pointless, but it's like, it makes me wonder. Um, um, but yeah, uh, what
[04:25:34]  is it quick? You never know where you are. Well, see, that's the whole thing, right? People, if you can automate it, you, you think
[04:25:38]  you're fine. The knowing where you are part is why I don't think they're mutually exclusive. Um, sorry, talking about server components here for a second.
[04:25:48]  Um, I, yeah, I do want to talk, talk a little bit about this on the forget talk is it directly influenced my article, but they kind of finish with
[04:25:56]  the DHH thing. I'm going to pull out Excalibur for two seconds. Cause I mean, I don't know how to explain this best, but like
[04:26:05] , I keep on thinking that what usually happens is we start like when we're doing standards, we kind of start here, right? We start here and we like,
[04:26:12]  see, you know, let me say, start here. Okay. Let's, why is this? Let's make it transparent. So I'm going to start here.
[04:26:19]  Okay. And then we go, okay, we see, we're like, wow, wouldn't it be amazing if we could, we could go here. Cool. Right
[04:26:31] . Maybe I should just call it like goal. Number one, right. Or it's not even goal. Number one, it's initial goal, right? We,
[04:26:40]  this, this is always what happens. Right. And then, and this happens with standardization process. This happens all the freaking time. So what ends up happening is we
[04:26:52] 're, we're here, but maybe we can't act on it because where we are. So, you know, we're the legacy. If, if, if,
[04:26:59]  if we're like legacy software, the big player here, it's going to take us a while to get to this goal, but everyone here kind of agrees it's
[04:27:06]  the goal. In the meanwhile, there are small players here who are kind of sitting there with you and going, yeah, that's really, really cool. And while you
[04:27:13] 're kind of inching up here, you're like, yeah, I'm going, I'm going to get there one day. They kind of go, oh yeah,
[04:27:19]  yeah. I'm, I'm going to get there. And, and, and they get, they get here and then they get to about here and they're like,
[04:27:25]  crap, this isn't actually what we want. We want, we want this. So in our second time lapse here, these guys are like, okay, now we
[04:27:44] 're ready to actually make some good strides. So they get to about here and these guys would go, okay. Yeah, this is, this, this is where
[04:27:54]  we were at. Yeah. This is much, much better. Okay. So I'm going to zoom out a bit to keep our diagram going a little bit. And
[04:28:02] , and then what ends up happening next is these guys are like, oh, okay. I, are you, you're going to get, I mean, the, the
[04:28:14]  cycle repeats again, uh, is what I'm going to, what I'm going to try and show here in a second. So these guys go and they get here
[04:28:28]  and they're like next initial goal. Okay. All right. Do, do, do, do, do. And again, these guys, let's go blue. These
[04:28:45]  guys are like here, making a little bit, it's accelerating. These guys make their initial start, but actually this guy over here. Small guy goes, during the
[04:29:05]  same time period goes, okay, I'm, I'm going to get here. And then they realize that there's something over here that funnily enough is sitting
[04:29:37]  kind of in the same range as these guys. So what we end up here with is, okay, let's go to the next one. Arrow happens. Arrow happens
[04:29:46] . These guys get here. Here, these guys get here. These guys finally get here. Okay. Sorry. A lot of drawing, but with this whole, Hey
[04:30:09]  thing that's going on right now, it's like, this is DHH and he just got here and the people over here are like, you're on crack.
[04:30:28]  Like by the time I even started, I already knew that this was not going to work. Right. And yeah, these guys are wrong. Let's say, you know
[04:30:39] , let's argue that they're wrong. You guys can battle each other a bunch, but like, I sometimes feel like picture if this length of time of when this
[04:30:51]  happens is like a decade, like how long have most react developers been developing on the web? Like people don't even remember what these guys were thinking back then to even
[04:31:03]  get there. That like it's, it's, it can even sit, as I said, over where that initial goal was, but it's like trying to tell
[04:31:14]  me that this is better than this is insane. Hopefully this diagram makes sense to you. Um, that's the way it makes sense to me, but this, this is
[04:31:27]  kind of this is kind of the thing. And I feel like in some cases with DHH these days, this cycle has happened like maybe like five times and they're
[04:31:40]  just getting to here and like, we're like way up here off the screen. And we're just like, what? Anyway, okay. That was probably a terrible diagram
[04:31:54] , but like that's how I want to summarize DHH. Um, like I, I guess somewhere with a lot of things like this, this is web components too
[04:32:07] . Yeah. I mean, it just depends on what you're, you know, you're, you're talking about, right? Like we just keep on doing this.
[04:32:19]  The funny thing is sometimes there are people here, so I'll make this white that show up kind of in this zone and they're like, and they're like,
[04:32:37]  they don't want to go here, but they realized that they, they miss this. So they're like trying to like, I don't know how far I can take
[04:32:47]  this diagram, honestly, but like maybe at around blue time period, they start kind of going off here. Right. Right. So, I mean, if you want
[04:33:00]  to think this is, this is how I, this is what I view HTMX is, by the way, HTMX is right here, but like these
[04:33:15]  cycles happen and yeah. Anyway. Anyway, I'm sometimes we get to here before we get to here or get to here and we think that like, this is, you
[04:33:37]  know, it's important. It's in the right direction, maybe, but it's not. Yeah. Anyway, I'm, I'm, I'm, I
[04:33:44]  think I've taken this diagram as far as I can take it. Hopefully this makes sense to some people. All right. Let's get back here. Is that it
[04:34:00]  on DHH and no build? Is this funny reading the chat responses? Cause like there are a lot of people very passionate about this position and I, I have no clue
[04:34:12]  what they're smoking. Okay. While I'm in Excalibur, I want to do something really quick here. Last, this last stream, I nitp
[04:34:22] icked this graph about find a course and I, they, I can tell that it's been updated. Um, but I want to, I want to, I want to
[04:34:33]  draw this graph myself for a moment just because I, I don't quite agree with this and it's better than it was before, but let me draw it one more time
[04:34:43] . This is not a, not a stab at anyone. I just, I want to take my own shot at drawing this graph. Okay. So let's get back
[04:34:53]  to a hundred percent and let's try this again. So I'm going to make what a double-ended arrow. Where is it? Arrow. Okay. That's
[04:35:10]  one end. And all right. There it is. Double-ended. Okay. Cool. All right. If I had the cool logos and stuff, it would be good
[04:35:25] . There's like a temptation to try and do really bad drawn, hand-drawn versions of the logo. But like this only take me two seconds to do here
[04:35:39] . Um, God, it's like how badly can I draw the React logo? It's like, can I use the shapes to cheat? Can I like do like...
[04:36:00]  I'm like looking at the, I'm like looking for reference. Yeah. I can't even, I don't, can I, can I angle it? This
[04:36:10]  is like probably a big waste of time actually trying to make the React logo. I did it. Um, can I scale the whole thing? God, see, pretty
[04:36:35]  cool app. Okay. Okay. React logo. What's angular? It's like a big letter. No, no, you blue. No, damn it. Oh man
[04:36:48] . Blue, blue. Angular. We're just gonna make angular a big A. Yeah, that sucks. What's this angular logo look like? It's a white
[04:37:05]  A on a red shield. Okay. Okay, we need to make the shield. How do I make the shield? I don't think I'm, do I just
[04:37:19]  like freeform draw the shield? Can I actually, oh, actually, no, I can do. What's that? I think there's like a... Yeah, yeah
[04:37:30] , yeah. Okay. So it's like, if I press, what's it? That's it. No, there wasn't any. If I press option,
[04:37:45]  maybe? Whatever. Honestly, why am I drawing this? Oh, there we go. Whatever. It's a shield. Okay. Stop doing that. Escape. I
[04:38:06]  don't think I can fill this though, right? No, whatever. We're just gonna put a white A in the middle of it and we'll know that's angular
[04:38:17] . Okay. Angular. And then view. Oh, man. I don't even want to think about this. Damn it. How did... Okay. Sorry, view
[04:38:40] . I think I'm just gonna make a big V. How, how... Like, the longer this goes on, like, the harder, the less likely I'm
[04:38:51]  gonna wanna... It's like a... Can I just make a really fat marker with a pen and just be like, screw this, just be like... Where is it?
[04:39:04]  Stroke width and be like... And then take like a blue color and just be like... Can I just make a blue color? Okay. View. There we go
[04:39:30] . No. Svelte. Let's, let's do the same thing for svelte. And then... And then, uh, solid logo. Uh,
[04:40:01]  like, draw a blue duck. Two teardrops. That'll be the easiest. Um, let's do a medium size and do, like... And then,
[04:40:30]  Quik has a logo too, right? Let me see. Let's look back here. Quik. Oh, man. That's like just too hard, isn
[04:40:42] 't it? It's fine. I'll worry about Quik later. They're not apparently on the, the first graph. Okay. So... Roughly speaking...
[04:40:59]  This is where the framework's classly were from. What is it? Fine... To coarse. Actually not coarse. It's like coarse, right? But if I
[04:41:25]  was to draw the... Not today, but in the next six months, it looks more like, it looks like this. I just wanted to fix this up here. It
[04:41:34]  looks, in my opinion, like... This. When we talk about View Vapor and Svelte 5, it actually looks like this. These ones are stacked.
[04:41:43]  These guys are here. I think. And... I don't know what... Yeah, Angular stacked with Quik might be fair. I'm debating putting Quik right
[04:42:10]  here. Let's see if I can put the logo in here. I don't have... Oh, this is gonna be hard. I only have blue. I don't
[04:42:19]  have, like, purple. So, it's like... Approximating the Quik logo is actually gonna be particularly hard because... Oh, don't do that.
[04:42:31]  Because it's like this. Get a little bit... tip here. All right. And it's like a lightning bolt. Oh, okay. Sorry, guys.
[04:43:21]  This isn't true today, to be fair. These guys are actually... haven't moved... Yet. Like, Svelte 5 will move it. But, like...
[04:43:31]  Anyway. Moving on. I only got one more topic today. So, sorry. Done with the drawing. Yeah, blue... blue semi-transparent for the purple
[04:43:47] . Yeah, like... All right. Last topic today, I want to talk about the article I was working on. Thinking locally with signals. And this article is a big
[04:44:02]  love letter to React. I was watching that talk about... React Forget. And I was thinking... Over and over again while I watched it. I was like... It
[04:44:19] 's amazing how big... The combination of factors for React led to its success. Some people talk about, like, Meta. And, you know, like, that backing
[04:44:27]  bit. Like, even technology-wise. Like, it wasn't the actual tech itself. Like, the virtual DOM or the JSX. But, like... The way
[04:44:35]  they combine these patterns that made it really useful. The lucky thing is everyone else has been able to adopt those patterns over time. And the reason I wanted to talk about
[04:44:44]  this is... I do very much strongly believe that it's important... Design aspect to allow people to have this locality of thinking. We got accused of this, funn
[04:44:58] ily enough, when the whole signal stuff went out. Like, the Devin Gabbitt tweet about, like, you know, two-way binding and stuff.
[04:45:05]  But, like, we don't have two-way binding. This is not a thing. And I thought it would be worth actually writing an article. I did do,
[04:45:14]  like, all those articles before. But I actually just talk about this idea of locality of thinking. Because you're going to hear a lot more of this, I think
[04:45:21] . Because this is really the emergent property that happens when you basically attack or combine the principles that we've come to believe are the correct choices in modern web devs
[04:45:39] . Because if you can look at a single component and be able to be productive without looking at the rest of the codebase, that's a huge boon, right
[04:45:49] ? It allows new developers to get ramped up faster, right? It allows features to be built in isolation. It even lets you return to something maybe you wrote a year
[04:46:00]  ago and understand what it's doing. Because it's, like, you know, only concerned with the modular piece it has. So I think this is an incredibly important
[04:46:09]  aspect of React's design that really made it what it is today. Like, it's not about the VDOM or any of that kind of technology stuff. This is
[04:46:22]  React's legacy. And people don't realize it, but unidirectional flow is probably one of the most important pieces of modern UI design for this reason, right
[04:46:38] ? I think a lot of times because we think of React and we think of immutability, we kind of, like, assume that that's the only way we could
[04:46:44]  possibly do it. But, like, let me explain. Unidirectional flow is really important to understand what's in front of you because essentially you need to have
[04:47:00]  trust in what your code does. When you import some function and you don't know, like, you're looking at some data object you have, and then you pass it
[04:47:11]  somewhere and you have no clue what's going to happen to it, there's no way you can do your work without actually looking at what this does. So this is a
[04:47:23]  large part of why unidirectional flow is really important because you want to be able to know about any possible mutations that happen to the data that you possess. Yeah
[04:47:37] , exactly. Yeah, Elm was completely on this. Or Flux. Yeah, I remember Flux, right? But something that we kind of realized over the years
[04:47:49]  is that it isn't just, like, straight, pure immutability required to actually pull this off. You can actually get the same impact by just having read/write
[04:47:59]  segregation. Like, even React itself, they tell you to be immutable, but some people were mutating it and forcing re-renders, especially in the old class
[04:48:06]  component days. So, like, when they went to hooks with read/write segregation, it actually enforced it even more so because... I don't know if it was
[04:48:17]  intentional, but like... without the ability to pass the thing that can be changed, like, forcing the man... like, how should I put it? Without being able
[04:48:30]  to implicitly pass something that can be modified, you... you make all mutations explicit. And this is one of the things that makes React so powerful. I use some
[04:48:43]  components as an example here in solid, but it's the same function problem again, right? If you have title and set title and you only, you know, pass title
[04:48:55] , then there's no way some component can change it, right? Like, assuming that this is the mechanism for change, you have to call set. And in fact
[04:49:02]  in solid, we actually tell you to call the function and pass by value even more so. Because... I'll get to that in the next section. But this pass by
[04:49:19]  value is a very clear indicator that like, hey, like, if you're getting... think about it, if you have a title, like a string, and you pass
[04:49:27]  it in... someone who gets it on the other side, like, they get the variable and they try and change it. Like, they're not going to change your
[04:49:35]  version of the variable. They're going to have their own version of the variable. So pushing towards like, a place where you're saying, I'm passing the ballot with
[04:49:42]  you, mentally gets you in the right mindset that... like, these signals aren't things that you pass around. From a local scope perspective. Technically, behind the scenes,
[04:49:56]  we do propagate reactivity. But for you authoring, you just look at what's in front of you. If you want the title to update, you call set
[04:50:05]  title. Wow, I think I have my first troll, this is awesome. Awesome. Thank you. So, anyways, as I was going, essentially Svelte
[04:50:29]  Ruins that we saw earlier is kind of the exact same thing. We saw this, right? Title. If you pass a title through, like, you can tell from
[04:50:41]  here, you're passing the, like, the value of title. This is not, like, a signal. There's no way that someone could change your version of
[04:50:47]  title. And again, if you want to update it, you pass an updater function. So, like, in the end, this ends up being identical to the solid
[04:50:55]  example, except it's using a compiler for a little syntax thing. But it actually does exactly the same thing effectively. So, you're going to ask you the difference
[04:51:04]  between read/dejecture flow and read/write segregation? In a sense, not, like, read/write segregation, I guess, doesn't require stuff to flow
[04:51:15] . But, yeah, I mean, that is kind of the key to it, right? Up and down. It's just, it's often associated with immutability
[04:51:22] . But what I'm trying to say is that immutability only has to be a control factor. It doesn't actually have to be, like, a property of
[04:51:29]  the actual data itself. Like, you could have deeply nested reactivity, like a store, which can be mutated and still be fine with read/write segregation because
[04:51:41]  people can't update the different portions. But you could do fine-grained updates from the top and have it still work. So, yeah, yeah, I guess
[04:51:50]  read/write segregation and user/directional flow are almost, like, the same thing, in a sense, because you're going to be passing values around, you know
[04:52:01] , you expect to. Okay, so that's pretty straightforward. How about receiving value from above? That same pass by value approach is actually beneficial for stuff coming to your component
[04:52:15]  as well, right? Like, picture if you could pass signals or values. And this is actually a very important part of solid design. This is where we separated from
[04:52:26]  surplus and sinuous and almost every reactive library that existed before. And Vobi and all of them. Is this pass by value mentality is the key to what makes the ergon
[04:52:41] omics and the DX good. It keeps the principles that we learn from React of this locality of thinking. So, if you could pass a signal or value here,
[04:52:52]  like, do you call it a function or not? Like, what if it's a string? You could say, like, maybe you could check it, right? You
[04:52:59]  could be like, oh, if it is a signal, do it. If it's not, but, like, picture what you'd have to do everywhere in your
[04:53:07] , like, picture if, like, you had 15 props used in a bunch of different places. You'd be doing this kind of check all over the place. This is
[04:53:15]  not funny. You could make a helper function that's, like, basically, like, unwrap or something. Like, basically, get me the value if it's a
[04:53:22]  signal. Otherwise, just give me the value. And I think that's probably the pattern you would use. But, like, essentially, like, types for TypeScript
[04:53:31]  get more fun. And there's a certain awareness of what comes from above they have to be concerned with, right? Another option is you could force them to only be signals
[04:53:44] . Like, earlier we had that question where someone was like, why can't the props all be functions? Well, they could be, I guess. I mean,
[04:53:52]  if you did it in a very non-transformative way and make things signals, like, in solid, you could just pass a function through. It's still a
[04:53:58]  function. That's fine, right? It's not that big of a deal. But picture view or preact signals, which use dot value. You wouldn't want your
[04:54:04]  end user to, like, have to always, like, wrap static values in something that's, like, an object that has a value property on them. Or for them
[04:54:10]  to unnecessarily wrap things in signals that don't need to be signals, right? So I do think it's actually very important that you have that mentality of value passed
[04:54:22]  down. And, and what I say here is providing the same interface for reactive and non-reactive values on the receiving side. Because then you can mentally treat all props
[04:54:33]  as being reactive if you need them to be. If they're not reactive, then they won't update. But if they are, then they can be. You,
[04:54:41]  as a component author, who decides the behavior based on your incoming props and your state, can decide what that behavior should be. But if the person passes you a static value
[04:54:53] , well, then it's not going to update. So that's perfectly fine. Right. In Solid's case, we use prop getters. So I was saying
[04:55:01]  that if you call a function, then we can wrap it in a getter. Whereas if you pass a static value, it's just a static value. We can kind
[04:55:07]  of tell, like, because things that have to be functions or member functions, member expressions to call a function to wrap it. If you just pass a variable, we'll
[04:55:14]  pass a variable through. We don't need the extra getters in that case. But now, inside our component, we don't care. It just will work.
[04:55:22]  If it's static, well, it sets the title once. If it's dynamic, it'll set the title every time. And obviously, using getters has this benefit
[04:55:30]  of, they're kind of, like, semi-immutable. Like, you can't write to them. So they enforce the first principle. Basically, these things work
[04:55:38]  in tandem together in keeping your mentality localized. So these are basically things or properties of React that make React so powerful. But you can basically get the same effect in solid
[04:55:51]  or svelte, actually, after you're watching, if you saw the stream earlier. Because, like, we don't have is signal in solid. We're kind
[04:56:01]  of like telling people that you can't do this. So, like, the reality is we want you to just be able to do this and not worry about it. Now
[04:56:10]  you're not worried about what's coming from above. Now you're not worried about what you send down below. You have complete context within the component you're looking at
[04:56:19] . And as I said, that was the win from React. Could they be interchangeable? Yeah, we talked about it. Signal's the standard. There's the potential
[04:56:36] , right? And which, I mean, yeah, I don't know. We don't know what that looks like, right? Because, like, we've taken
[04:56:45]  slightly different philosophical things. Like, the thing is, you can use Svelte's compiled syntax and generate code that looks like solid. Like, because you still need to
[04:56:59]  put wrappers. So, like, when you use Svelte's syntax, you can basically output code. Like, if you made, like, a custom hook
[04:57:07]  and using your components, that code could look like solid code. It could use our read/write segregation tuples. Right? Like, that's good. Like,
[04:57:15]  a lot of their examples right now use, like, getters and a named action. And I like that pattern as well. But, like, you could use our pattern
[04:57:25] , you know, because keep that read/write segregation, encourage the consumers of your components, of your custom permatives, to also keep the read/write segregation going.
[04:57:34]  But they do read/write. A get and an increment is a read/write and in a slightly different form. So, yeah, like, I could see that
[04:57:46]  side, you know, because, like, but on the flip side, like, solid also basically arrives at the same thing without a compiler. And, like, part of
[04:57:56]  our thing here is, like, oh, you don't need to compile all your JS files. So, like, I don't know if people would bother. I
[04:58:02]  don't, I don't know. So, inside of the components, I have to work with static values. Well, it's not static value. Yeah, I mean
[04:58:16] , with static values, yeah, exactly. With static values, you don't have to worry about. But if you mean, like, we do, inside the component,
[04:58:22]  you're looking at signals, right? Like, you, I mean, if I go back to the original example here with solid. Where is it? This one.
[04:58:30]  Like, in solid, you see that you have a signal. You do call it as a function. There are plugins that work like Svelte. So, like,
[04:58:36]  what I was trying to say on the flip side is, like, if you like Svelte syntax, um, with JSX, like, but, like,
[04:58:43]  their approach, we have tools. So, like, like, you can go pick up solid labels right now and use ruins, essentially, in solid. It's already out
[04:58:52] . So, like, I don't know if people, that'd be enough to put them both together at the same time. It's more like, both frameworks have the
[04:59:01]  ability to give the other frameworks syntax effortlessly. So, it's like, would you bother having both? I don't know. But the reason I'm mentioning this
[04:59:17]  is, in the local scope, uh, if we go back to that example that I had with Dominic, I don't think you can avoid knowing that you're dealing
[04:59:25]  with stateful variables. Like, sure, we're calling them as functions, but, like, the same reason that you wrap together, even though it looks like a
[04:59:34]  variable is, like, there's no way to avoid being aware that there is special rules and a data graph on a local scale. You just can't avoid it. You
[04:59:46]  have a language for it, whether it's this or this or use state, like, there's a language for it. You're going to see that there is these data
[04:59:56]  dependencies that update in a non-standard JavaScript way. Like, by non-standard, it's not top-down. It's, you know, whether
[05:00:04]  you have an auto-memoizing compiler or reactivity or whatever, you're only, only the things that change update. So, if the more you, you know
[05:00:15] , get there with this automation, like what React's looking at, you're still going to locally see the data graph. So, like, the point is, you
[05:00:35]  don't worry about what's outside of your scope, right? So, like, I just want, like, kind of, hopefully follow that, that kind of scenario
[05:00:55]  here. Because, like, inside, you have these state primitives and stuff. Like, when you're looking there, there's no way to unsee the reactive
[05:01:01]  graph, at least from my perspective. Even if it's not, like, reactivity, like signals, you see those concepts of state, derived state, and effects.
[05:01:11]  They're there. But outside, you can, you can trust because of these philosophies. There are limits to this locality of thinking. Right? Well, it
[05:01:23]  might be the most, you know, what I consider a very valuable pattern. You know, we can't perfectly achieve stuff. Because UI components aren't pure. They have
[05:01:34]  state. So, while it's not necessarily having external side effects, the fact that we preserve references and closures can impact future executions, meaning those executions do
[05:01:43]  matter. That's a really fancy way of me saying that, you know, react components with state aren't actually truly pure. And, you know, we clearly have state
[05:01:56]  which isn't pure. So, like, the problem is, even with locality of thinking, we can't control how often our parents call us. Right? It
[05:02:06] 's up to them. So, on one hand, when you take something like reaction render model, you can be like, oh, it's simple. It's local.
[05:02:15]  It's pure input output. But with hooks, that's not true because there's this actual conditional state that has a previous state that isn't the input or output. Right
[05:02:29] ? There's a difference because of the closures and what runs this time through the hook versus the other time that actually changes what it does. And sometimes we hit performance
[05:02:42]  issues that isn't our fault, but related to something that's happening above. And then we're forced out of this locality. So, this isn't perfect.
[05:02:53]  And to be fair, it's not perfect with signals either because people can over notify. We can have that case like Fabio was showing earlier in a sense where,
[05:03:01]  you know, we're pulling the value too much, you know. But I'm getting those random changes, but what I'm getting at is if we pair it with
[05:03:11]  a model that doesn't encourage the parent to recall us as often, i.e. not to re-render us all the time, it does actually help keep our
[05:03:22]  thinking local. I actually think that's the win here with signals to a certain degree is we actually improve upon that React philosophy in a sense because we're able to keep the
[05:03:32]  locality even more so in the sense that, you know, maybe not old React, but React with hooks is impure and you see that impurity every time you do
[05:03:46]  a re-render. Whereas when you're doing re-renders in fine-grained signals, you're not hit up by that issue because it's not the
[05:03:57]  state lives a layer above it. It's not the thing being re-run. I know this is a very nuanced thing, but, you know, because the React system
[05:04:09]  has these built-in guards, you know, like we don't change when the value isn't changed and are finer-grained and so it impacts less. I
[05:04:17]  actually think you can stay in that local frame longer when you have a reactive system than you can when you have a re-render model. But you have different DX signals.
[05:04:33]  Oh, okay. You're talking about count for its props account. Yeah. I understand this from a simplistic standpoint, like, but the thing is we also have stores and
[05:04:41]  stores don't call functions either. The thing is, like, while this is true, there's other impacts of those designs. And one of the cool things here is
[05:04:53]  that, like, stores actually fit more. I have to admit when I was designing solid, I was designing around stores, not signals. I didn't think anyone would use
[05:04:59]  signals. I thought everyone would want to use proxies and stuff. But what we found in our community is more people went to signals than they went to the stores.
[05:05:07]  I'm wondering if the Svelte community is going to find the same thing, but I guess we'll see. Oh, yeah. I should link this article
[05:05:22] . Good call. But yeah, what I wanted to say here is... And this is what I want to say to React users, because I've met a few really,
[05:05:35]  you know, people really into the React mental model, and we have friendly conversations. And I'm like, I'll, you know, swing your perspective some way, someday
[05:05:44] . Like, Maple, obviously, a big Remix fan. And the more I go into these arguments, the more that I feel confident in our positioning in them.
[05:05:54]  Because, like, the problem is, back in the day, people remember, you know, these reactive systems that shot events and effects everywhere, and things would just, like
[05:06:04] , go crazy, kind of like a butterfly effect. But the reality today is that when we look at Psygnosis, concerns are basically gone. They've been gone
[05:06:11]  for a very long time. And for me, I look at this as an evolution of components to hooks to signals. And I know that's weird, because in a
[05:06:20]  sense, signals have been around longer. But signals, and arguably signals applied with React philosophy have been around longer than hooks as well, because solid stuff came out before hooks.
[05:06:33]  But, like, you could also look, you know, this is related to my, you know, my diagram over here, you know, about people kind of jumping
[05:06:45]  off the tangent here. Because if you look, uh, sorry, wrong one, this one. If you look at it, here, components are your whole world. They
[05:06:55]  update your, they manage your updates. Here, we have a more granular thing, but it's still components that update, but you've got a more granular way of controlling
[05:07:02]  the change. And this one is taking that hooks and then making the components not the thing. So it's like, it isn't really a one, two, three
[05:07:08] . But it only works if we maintain those React principles. If we're passing signals around and stuff, not making them unidirectional, then yeah, we're back
[05:07:19]  to knockout in the chaos of the past. You're right. There's a reason why solid doesn't have a signal or Svelte ruins. Don't let
[05:07:25]  you assign signal to a variable. You don't want to worry about the data graph outside of your view inside. As I said, I don't think you can avoid it
[05:07:34] . JavaScript doesn't have automated granular updates. So even if we try to hide it with the best compiler you can imagine with automated reactivity or memorization or whatever you want
[05:07:44]  to call it this week, you still need to have a language so you can see what you're doing. It's the same reason in that proposal I wanted the imports
[05:07:51] . You need a way to tell the developer what they're doing. State. Effect. So I don't think there's a way of escaping it. Even when React,
[05:08:06]  you know, realizes and goes, look, here's forget. It does all the stuff we're talking about. It's not actually effectively any different than solid or S
[05:08:18] velte in this case. So maybe everybody's going to be essentially on the same page. Because the common ground is if you treat everything as reactive, that could be the
[05:08:27]  burden of the decision of what is reactive is pushed up to the consumer. Regardless of whether you're dealing with simple signals, Nessus stores, primitives passed from props
[05:08:35]  or coming from globals or whatever. Because you just behave the way so you will allow the change to happen. Whoever owns the state, like the consumer, the person
[05:08:47]  who calls your component, the one passing the data down, they make the decision of what is reactive or not. And by making your model that way, it's easier
[05:08:59]  to actually author the components for the people authoring them because they're not like checking signals and stuff. They have their locality. So they're worried about making their stuff
[05:09:07]  update. And for that consumer passing the state down, you've completely unburdened them. and you've given them that confidence that they can make the right decisions
[05:09:17] . So that is why this is so powerful. Yeah, anyway, I think, yeah. Comment here where new JSXU drives them, but it's kind of
[05:09:46]  boring. What's interesting is a full cycle from event to DOM render. It's the MVC framework. People forget the origins. That's interesting. Yeah, I don
[05:10:08] 't know. Sorry, I was reading that on the stream. I probably should have read it out loud. It's talking about MVC versus unit directional and saying that
[05:10:17]  react is just an MVC framework. I feel like maybe you could argue that I could see that how it was that in its origins back in the day, but I have
[05:10:26]  a hard time seeing like the modern react hooks as an MVC framework. flux being a pattern for global state, I guess, is the key for them because they're
[05:10:43]  states owned by their components. But what's interesting to me on the signals, which I didn't talk about at all in this article, is that with signals, this kind
[05:10:51]  of doesn't matter because it's all the same mechanism, whether it's local or global. So these philosophies that I talk about here, these principles that we learned
[05:11:00]  from react, apply universally. So yeah, I like this framing. I don't know if everyone else will. This article is not terribly popular at the moment. ever
[05:11:13]  since I lost my Reddit retweets, we can do good on Twitter, but I don't seem to be getting the same audience on my articles recently. But I
[05:11:23]  think this is really powerful. I think this is actually from if like as a react developer, I find this the most compelling because I think this actually shows how this doesn't
[05:11:36]  only address the concerns that people have had historically with signals, but actually shows how it embraces reacts mentality and maybe even takes it further to the point that it's almost
[05:11:49]  like the future like forgets already here. That's my opinion. Well, we'll see if that holds on, but yeah, anyway. I think that's it for
[05:12:15]  today. Someone said fresh 1.5 came out. Let's see if I can find it fresh. There we go. Partials allowed the server to swap out parts of
[05:12:32]  the page. Okay, so that's cool. It looks like they may have finally added something like our router or are they doing stuff like HTMX? Let me see
[05:12:30]  what this is. Okay, so the this is I'm gathering their server component like solution. So this I figured this was like the router we built in solid.
[05:13:07]  This does remind me of solid's islands router. That is very cool. Let's see how they use it. Okay, they just name it as a partial. That's
[05:13:17]  interesting. Okay, and it works the way solids does right now. It literally renders the whole page on the server and then replaces the pieces. Do you know what
[05:13:32]  the problem is with this? the state preservation problem. But I see what they're doing. They're doing it like a slotting mechanism. Yeah, the only thing
[05:13:51]  that's weird about this is the client feels like the client's defining the partials. This kind of breaks. But if they're not word with state, maybe this
[05:14:05]  is fine. The rules of server components and islands are there largely. Not just because of the prop waterfall thing, but it also lets us optimize the double data problem.
[05:14:18]  because the data isn't necessarily necessary in the client for hydration. When you start putting server components inside client components, and because of the ability to relink the link there,
[05:14:27]  you can't actually make any of those assumptions to drop that data for serialization. Double impacted here. This feels like it's HTMX inspired, but I'm not
[05:14:42]  sure if this is the right direction. I understand that in a sense it's simpler than doing server components, but I actually... I'm not sure what this actually gets
[05:14:55]  us. Oh, shipping with view transitions, yeah. Yeah, and this is kind of like where Astro is too, but it like... You got to solve the state
[05:15:03]  problem. Why? Sometimes it reminds me how far ahead React is of everyone else. keep on using React, guys. React is light years ahead of everyone else. I
[05:15:21] 'm glad there's more exploration going on in this zone. I can understand why we want to do everything possible to avoid the complexity of stuff of RSCs. But
[05:15:51]  I am completely sold on even if the React implementation is not great, even if the design APIs around them react or clunky and eager than they need to be and kind of
[05:16:03]  suck from... not suck, but they never sat right with me. I think they're solving the problem in a conceptual level in a good way. React is light years
[05:16:16]  ahead of React. I mean, this is going to be interesting time. We have Quick on one side. We have React on another side. The stuff we're doing
[05:16:30]  with Solid is kind of like hybrid between those ideas. We have Astro kind of like on another side, on the other side of like the third pillar, fresh kind
[05:16:41]  of sitting by them in between us and Astro. There is a map forming here of these different solutions. It's just time to thread the needle like we did before with
[05:16:57]  Signals and show people what it's really supposed to look like. Sounds good to me. All right. Yeah, no, it's too late for Excalib
[05:17:11] ur. I got to wrap up. I got to have some dinner here. But yeah, it's funny. There's this tension of why anyone would use React. But
[05:17:20]  when I look at the way React thinks or approaches the problem, I think they're like mostly right. They're just like, they're just details. But like we
[05:17:33] 're going to have like a bunch of people do stuff that just misses the mark, but kind of does good enough until we realize those shortcomings. I think React maybe overth
[05:17:45] inks the problem, but like they seem to come to what I feel like quite often almost inevitable conclusions. Why wouldn't anyone use React? Well, I mean, that
[05:18:06] 's, that's the other side of it, right? This is a much more common take. I think there's so much potential to outshine React today. And that
[05:18:18] 's why people are trying a lot of different things. Because we're working on features that people don't even realize they need yet. But yeah, I hope when the
[05:18:32]  dust settles, we can have a consistent story where we can be talking about these things in the same light that I talked about thinking locally in that article, where we
[05:18:43]  can see the clear, the emergent patterns winning in terms of the overall benefits they bring, rather than the specific target or even the mechanisms. Because the frameworks are more than
[05:18:55]  the mechanisms they have. They're the ability to provide us with that consistent mental model. You know, our ability to be a framework, you know, for the mind
[05:19:06]  is Rich Harris said as much as for our code. So, yeah. You guys are hilarious. I'm not getting into a React versus the world conversation right now.
[05:19:19]  But I feel like islands were, and root server components are kind of this weird, or server components especially this place where there's kind of a miss. A bunch of people
[05:19:30]  thought they were designing server components for their frameworks, and instead they designed lakes. Lakes are not server components. They don't carry any of the benefit. Islands are. But
[05:19:42]  people coming from a client-side mentality always start with lakes for some reason. And it's unfortunate because it's like lakes are like a stopgap method. They
[05:20:00] 're not going to be where things head, in my opinion. So, oh well. Anyway, I've talked enough. Streams five hours and 20 minutes. I am
[05:20:13]  well past done. I hope you all have a great weekend. Thanks for joining me this week. Next week, we're going to have Michael Rawlings from Marco.
[05:20:23]  Also, thank you, Mitchell Stoon for tier one sub. I haven't been very good at keeping up on the subs recently, but I appreciate it. But yeah,
[05:20:35]  more great content coming next week. And see you all then. Yeah, more Marco. All right, bye.