---
showLink: "https://www.youtube.com/watch?v=MIWNTo8Xa9M"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This week in J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶  Portland"
description: ""
publishDate: "2025-07-11"
coverImage: "https://i.ytimg.com/vi/MIWNTo8Xa9M/sddefault.jpg?v=686ee5a4"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one-sentence description of the transcript and a one-paragraph summary.
  - The one-sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one-paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).
- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should each cover approximately 3-6 minutes of content.
  - Write a two-paragraph description (75+ words) for each chapter.
  - Ensure chapters cover the entire content, clearly noting the last timestamp (HH:MM:SS), indicating total duration.
  - Descriptions should flow naturally from the content, avoiding formulaic language.
Format the output like so:

    ## Episode Description

    One sentence description encapsulating the content within roughly 180 characters.

    ## Episode Summary

    A concise summary of the transcript, typically 600-1200 characters or about 100-200 words, highlighting main topics, significant points, methods, conclusions, and implications.
    ## Chapters

    ### 00:00:00 - Introduction and Overview

    A comprehensive introduction providing readers with the main themes and concepts explored throughout the chapter. The content highlights significant points discussed in detail and explores their broader implications and practical relevance.

    Connections are made between concepts, emphasizing interrelationships and potential impacts on various fields or current challenges. The chapter sets a clear foundation for understanding the subsequent discussions.

## Transcript

[00:00:00]  all right hello everyone and welcome to my stream today uh the new setup so we might be in for some technical issues today i'm hoping that it all works um but uh
[00:00:16]  yeah i think we're pretty good let me know in the chat if uh if you can hear me see me uh it's definitely been a while there we go there's
[00:00:31]  life hello uh let me uh get twitch going here to make sure i don't miss any messages from twitch um there's my channel yeah it's uh it's been a he
[00:00:51] ctic month or news yeah new background yeah well a new location i i was actually gonna um originally pull up my green screen and show san jose again um when i started
[00:01:06]  uh like my old background uh but uh it's actually a little bit awkward the way my desk is set up to get the green screen here i can but i would have been
[00:01:17]  fiddling with it for like three minutes taking it down afterwards uh it just it's just not worth it um no no green screen here anymore um this is my actual office
[00:01:27]  although to be fair my previous one was my actual office is taken from a different angle but now with my new place i've actually set up the stuff in a way that
[00:01:37]  you know um my lego collection is behind me you know and whatnot so like i you're not just looking at a picture of a closet or something uh hey ryan why
[00:01:52]  you look different um it might be because i'm wearing my glasses right now i i it's surprising it's like the bit of the clark kent superman thing
[00:02:02]  i don't know uh no uh the one in the middle there uh so yeah you can't see my yamaha acoustic off the side is uh is a jackson
[00:02:21]  soloist um custom shop uh us uh all mahogany 10 10 uh jackson soloists tend to be alder body through um through wood um i got a mahog
[00:02:33] any one which is an interesting choice because a lot of people get soloists because they're like shred guitars or like the 80s like you know like the scorpions or r
[00:02:40] andy like i guess randy roads played flying b but you know what i mean like you get jacksons because they're like the crazy shred guitars and that's why
[00:02:47]  most people get older bodies i was actually the like i did lead stuff but i was actually the rhythm guitar player you know that i mean being the rhythm player guitar player doesn't
[00:02:55]  mean you you know still can't do harmonized sweet picking but um uh i i was actually trying to see if i could get something that sounded a little bit more like an
[00:03:04]  sg i i love i know it's funny it makes no sense right i mean gibson style different setup right um set neck you know this is through body i mean
[00:03:14]  to be fair um set neck and through body are probably closer in sound than say like a bolt on like like with a fender but like uh yeah i was i was i wanted
[00:03:25]  something a little bit uh beefier and chunky um uh i replaced the stock uh uh seymour duncan's i with uh with the uh blackouts um which is funny
[00:03:36]  it's kind of like emgs but um they're a little getting more they're almost like they switched the 85 and 81 like it's almost like they switched the pick
[00:03:44] ups around uh so like it's a little bit more chunkier on the back end and it's less like a shred guitar it's not like you know kirk hammett
[00:03:50]  like razor bladey kind of from the 80s kind of sound anyway um yeah i guess that answers that question so we got into guitars pretty quick here anyways i'm gonna put
[00:03:59]  my glasses back on because um yeah my computer screen is actually farther away from me from chat now so i'm gonna look at that i'm gonna look at that um all
[00:04:13]  right um he looks different because he's not on a green screen yeah i mean that's fair too i've always had these earrings i've had these earrings since i've played
[00:04:26]  in my played in my band like years and years ago i mean maybe it's a haircut and you're noticing it more or something but yeah oh that's awesome i i
[00:04:40]  mean i'm excited for you i i think it i keep on i i really want one of these solid companies to like really succeed in an open way i mean don't get
[00:04:52]  me wrong actually i now have an example that has succeeded um cursor uh is built on solid i didn't know that i and the the uh ceo or whatever he or was
[00:05:03]  the cto the guy reaches out to me and he's like oh yeah we've been using solid for three years uh uh we heard about it from our college professor who
[00:05:11] 's actually a member of the solid community uh and and we've i was just like yeah seems pretty good why not it's so funny he was so nonchalant about
[00:05:19]  it but um there's a lot of startups that have been using solid because they want to you know push the technology they want to be able to get the best performance out of
[00:05:26]  their applications unfortunately not all startups succeed so like every time there's that list of like companies that you solid i i like look at it and then people are like yeah they don
[00:05:34] 't exist anymore they don't exist anymore you know it's like i'm glad that people keep on making projects and doing that and i i guess another big success for us
[00:05:44]  has been uh lightning uh tv you know uh like the ubc or sir nbc and universal like the television apps and stuff um but yeah i i love hearing people getting
[00:05:57]  chance to be solid yeah yeah yeah sorry yeah i i you can you can geek out on the music stuff for for ages um i mean there's so much like details in
[00:06:10]  the gear um yeah i but yeah that's that that that jackson in the background is is is kind of became my baby it's like it just it's just a
[00:06:22]  beautiful guitar um yeah ebony fingerboard roller inlays 24 frets i mean you need the full two octaves otherwise what are you doing um anyway blocking not
[00:06:42]  like it's even got the allen keys like i love how they have the allen keys actually like hidden behind the headstock so like if you ever need to loosen it because like
[00:06:49]  everything's locking on there so like when you go crazy with the whammy bar like it doesn't come out of tune it's just as i said it's like it
[00:06:54] 's the full 80s shredder guitar except i chose the body wood of something a little bit more um substantial a little chunkier right like like as i said it's more
[00:07:05]  of like the gibsons that have the mahogany you know like the les paul or the like the sd which is more of my favorite or les pa
[00:07:12] ul jr those are pretty sweet too anyway hey cousin how are you doing oh yeah the web version telegram is a solid version i make point oh yeah they default right one
[00:07:27]  i mean i guess there's a political angle too like i mean use whatever apps the best but i i i that's cool over at capital one we use uh oh yeah
[00:07:36]  yeah i i know that it's always tricky because capital one doesn't like they've reached out to me a couple years ago but like i haven't like um something don't
[00:07:44]  always talk about um openly i don't know yeah i i mean we've had like short-run things have been really big like uh uh compass uh like election voting software uh
[00:07:59]  uh uh written in solid so like the whole uk election in 2024 had millions of people you know coming in and voting in the uk and that was a solid powered app i
[00:08:10]  mean there's there's lots of examples of it obviously it's just you know but i mean that's actually going to like bring us a bit into the topics today because i
[00:08:20]  i've got a lot to cover actually i made myself a list so that i uh don't forget anything and uh i think we've covered the first bit which is talking
[00:08:31]  about my move to portland and how awesome my guitars on the wall are um or lego collection actually i managed to put most my lego back together as you can see
[00:08:39]  behind me except for the stuff that's sitting right on the counter behind me on the lower shelf uh i have the the deku tree breath of the wild slash uh um tears
[00:08:49]  of the king power slash uh or ocarina of time where you can like set it up for either deku tree design and that set got completely demolished in the
[00:08:57]  move so i have to rebuild it anyways yeah i had awesome internet i just um is cheap the i it's because i'm if see i was if i go from obs directly
[00:09:11]  i'd be fine but because i'm using stream yard they charge you like double the amount of money to do 1080p over 720 and i i i i actually think i
[00:09:22]  mean it's arguable but people say the mac built in macbook cams are good and and they're decent but i think you make the bigger notice between 720 and 1080
[00:09:33] p is when i'm like screen sharing like i think like from a camera perspective you're not actually getting that much so i always trying to keep my text big but yeah
[00:09:41]  it was it was mostly that it was a difference of a few hundred dollars essentially uh to between 720 and 1080 i'm i i have one uh gigabyte internet um so it
[00:09:56]  was just i wanted to see if there was like a noticeable quality difference and i mean maybe you guys can tell i did not tell a noticeable quality difference when i went down
[00:10:08]  to 720. um although although afterwards more people came in and like why is your stuff 720. i was like well i i realized i could drop stream yard and just go to
[00:10:21]  obs directly at points in the past like i was always worried about the ping and or sorry not i was worried about the chat and about the uh um being able to get
[00:10:32]  guests on the stream uh you know like needs solutions i know twitch has their like guest star thing or whatever it's called um theo did offer to give me ping for basically free
[00:10:42]  um so i i mean that's the funniest thing i probably could just tap into him he was he was like if you're he knows that i'm not techie on this
[00:10:49]  stuff so he's like you know he was like you know like if if you're happy using streamer just keep on using stream yard but you know i built all these solutions
[00:10:56]  before so if you need a better streaming solution you know you can hit me up and i i'd probably get you hooked up with with stuff at a reasonable you know price
[00:11:05]  but yeah yeah yeah yeah just an iphone pro yeah i yeah i can't promise that honestly um making the stream shorter just means less content for you it's not like
[00:11:28]  i i mean right now we're talking fluff but it's not like a stuff stuff i um we'll talk a bit about that on the videos and stuff like um and
[00:11:37]  talking about the shorter form versus long form because i think there's like a it's like a an interesting perspective there like i realize people don't want their time wasted but i
[00:11:47]  in my opinion people who do stick around for the stream get 10x the value per time than the people who watch the videos it's it's way better um i i
[00:11:56]  understand that there's some people who don't have that kind of time but the people who stay are 10x better for it so you know it is what it is and i
[00:12:05]  don't stream every week anymore so maybe it'd be better to do like smaller more stream but it depends on when i got content or when i don't have content i'd
[00:12:15]  rather just like get the five hours or six hours if i have to though generally not six hours i it's a long time ago um out there and then like look i don
[00:12:21] 't stream for three weeks well guess what pretend that was two hours for each of three weeks like how is that not better than like just not getting that content so solid's
[00:12:33]  done what no solid's not done i don't understand i think it's not using easy facts here they're still around okay yeah i i i know samuel it's
[00:12:53]  just uh the come the ones that i like really published size like uh like um post.news the the twitter clone like that was like a big topic was like wow someone
[00:13:04] 's building uh like a twitter competitor kind of like master on blue sky uh i i they're not around anymore but that was all solid start um and uh what was another one
[00:13:14]  we we did a co-article thing with like the guys from stash pad i i i mean i i don't know what stash pad is still around but
[00:13:21]  the people that i was in contact with or that aren't don't apparently work for stash pad so i'm gathering something happened to them so like i know there's a
[00:13:29]  lot of people still out there using solid it's just it's it's yeah we need to do better on yeah yeah for sure um then come back you know a week
[00:13:47]  later you know if you want to i i try and get timestamps although recently i don't have my like my guys uh jesse pence was amazing for over a year
[00:13:57]  did the timestamps for me um i mean recently and i gotta talk to aj about this uh guy big redwood guy he's been on the stream before he's been
[00:14:04]  using ai to generalize uh lm summaries just so that you can get some like reasonable markers in here now obviously i this is an unusual thing i i usually don't
[00:14:12]  waste time for 15 minutes and get right to the good stuff um but yeah i mean yeah we i mean we could talk about you the thing that i it's always funny when
[00:14:26]  i go on social medias people have no idea that basically the effort with solid start and tan stack start is basically in lockstep basically anything that is true about tan stack
[00:14:38]  start is true about solid start it's just who does it first or like earlier solid start was leading the initiative doing all basic quarter that would lead to tan stack start now tan
[00:14:47]  stack is taking the initiative while we focus on solid 2.0 but generally you can assume that those two projects are basically identical um and i don't just mean the solid
[00:14:57]  port of um tan stack start i mean like generally we're working on the same core it's even the same people working on the solid part of hand stack start as solid start
[00:15:06]  so it's like um these things are i think it's complicated and i will talk about that a bit later but um i know everyone's that like really wants the latest news
[00:15:20]  on this stuff but these things take time because we're in an ecosystem that's shifting the beat and invariable variable or sorry the m api whatever you want to call
[00:15:30]  it is a huge deal in terms of what we can do with v and i think it has implications way wider than what people are thinking about or at least people not in the
[00:15:40]  know or thinking about and maybe that's worth talking about on its own but i i just want to kind of put out there that like um like in a sense the dav
[00:15:48] inci vacation already started when we swapped out the server plugin service function plugin it's going to take a bit more because uh tan stack built some of the pieces very specific to tan
[00:16:02]  stack router and we need an agnostic solution but like generally we're on the same page it's just funny because i say when i go on twitter and say something people
[00:16:09]  are like oh but i heard this bubble and it's like yeah i i i know but if i'm not saying it there's a reason i'm not saying it not
[00:16:19]  because uh i'm out of the loop so to speak anyway yeah i mean the thing is they're further along on on the process vinci does have some holes uh the
[00:16:37]  challenge is that the we need to do more on top of the tan stack start base to get to where we need to be because uh this the the biggest difference between the projects
[00:16:50]  is is the goals and as yourself someone being practical just trying to build your application you probably don't care about those goals as much as i do but uh solid starts goal
[00:16:58]  is to be a a baseline for all solid projects not just ones that are tan staff and i think it means that i need to generalize a little bit further from what t
[00:17:09] anner's doing obviously tanner actually loves general solutions and agnostic solutions so like he's he's on board to build the pieces the way that they need to be built
[00:17:16]  it's just like they have i think about four four or five people working on this pretty directly right now two guys uh related solid involved three guys directly on their stuff like
[00:17:26]  a bunch of people directly working on the 10th start where solid start is kind of in a place where it's just kind of in maintenance uh you know while and kind of
[00:17:37]  fairly stable while tan stack's actually changing and breaking and doing a bunch of stuff right now and solids most solids focus on solid 2.0 rather than start at the moment yeah
[00:17:50]  yeah yeah we'll talk about nitro towards the end of the stream if you're still around you know four hours from now or whatever quick city we use v plugins they
[00:17:58]  don't come into the environment yeah yeah and this is where some of the the thing is like we all had beat plugins doing this it's just i think i think there's
[00:18:09]  a bigger shift in the whole ecosystem that's about to come and i think that will actually i will talk about it but it's not what i want to talk about for first
[00:18:20]  uh it's all signals i do welcome i mean i didn't get it from there but that is kind of what made me fall in love with it like i got signals
[00:18:29]  from knockout js but i having programmed vhdl fpga um before and doing that kind of stuff i absolutely like clicked with me because that that was something like i
[00:18:40]  was really good at for those who aren't familiar this is like a hardware language so you basically programming programming programming digital circuits and you it's very different than normal imperative programming
[00:18:50]  like a lot of people learn like a c-based language like basic or something which is like do this and this and this and this um vdhl has this idea of
[00:18:57]  like a clock cycle and everything is synchronous it doesn't happen one than the other than the other it's like the next state is the state and it's hard for people to
[00:19:07]  wrap their their head around it i remember there when i was in university uh doing a project like we would do lab work and people like general i'd say most people even
[00:19:16]  people who like acing through the comp side courses i remember them getting into this course and being in the lab and they they'd give like three hours for the lab and people
[00:19:25]  would be like take you know a good like hour and a half or two hours to finish it i was like banging them out in like 35 minutes because like for me my
[00:19:32]  wife my brain was wired that way like it was just like there's something about that just clicked and when i found signals again i was just like yeah this is just it's
[00:19:43]  just the same thing it's just that it's not where i got them from but the tie-in is very uh real yeah i mean expo is awesome tool for
[00:19:57]  react well the other cell is good okay whatever works in solid that's not like expo like is a react thing so it's not going to to to just work you know
[00:20:09]  it's same way react native doesn't just work but um i think it's cool that reacts actually created like whole meta framers whole tooling around this to this degree just the
[00:20:17]  other ecosystems not rich especially mobile like people talking about ecosystem stuff and i'm like well as far as the web goes i think we're in a great place i think mobile
[00:20:26]  is underdeveloped obviously because i mean mobile is an interesting place you have custom renders so you like someone could build something like react native or you know we've got to
[00:20:37] ri and we've got uh native script but like their agnostic solutions themselves right where react native is very react and people will go all in on that thing like react native
[00:20:49]  solutions or something like exo feels more like next.js like where you actually have a specific full stack where something like uh native script feels more like the web itself where
[00:20:58]  it's like there could be six different frameworks right so having the same kind of consolidation and because there's multiple of them you could go native script or torii or whatever
[00:21:05]  like you or you know i mean capacitor too i should mention although that's like more web kind of base but like like there's there's so many layers of there's not
[00:21:15]  the same kind of consolidation which is tricky when you have a small thing so like if say someone like solid core team or something like this is the way and i mean at various
[00:21:24]  points we might have felt close to that because we had people working um crab nebula working with tori like people saw this dx team or whatever um then maybe we could
[00:21:32]  you know consolidate around um attila um dx team you might know him from all his conference talks he actually made a quantum which is like a tori um solid kind of framework
[00:21:45]  and but again like just that much smaller of an ecosystem are you going to have the same kind of push expo is much more polished than i think than anything we have
[00:21:54]  on the mobile side in uh in the solid ecosystem yeah it's confusing probably um i i i get the confusion we weren't sure how these things are going to fall out eventually
[00:22:08]  and where it's going to sit tanner named it start after solid start because basically he was so inspired by the by the he wanted to show that these products were connected
[00:22:17]  and that he the the architecture of tan stack start is based on solid starts it's basically the same kind of thing although you know the way we handle isomorph data fetching
[00:22:27]  and loading and just all the patterns around it like they have a lot more refinement over there because they've worked on things like validators and slightly different syntax more configurability
[00:22:35]  but the actual core architecture is what i talked about in my talk the shape of frameworks to come i basically said look this is how uh future javascript full stack frameworks
[00:22:43]  would work and tanner bought in on it and he's so much so he's like let's call it start as well you know same thing and now we have like two
[00:22:49]  sort of solid starts i'm hoping that clears up as we're able to share more parts and we get better ownership of responsibility but as they're very much focused on getting their
[00:22:58]  main product help primarily react i'm focused on solid 2.0 at a certain point those efforts will realign again oh yeah links is another one sorry thanks for mentioning links
[00:23:12]  uh we haven't looked at links yet but i mean as i said you haven't needed a v dom to do mobile development for ages like uh two years ago i did that
[00:23:20]  native script and tori videos but yeah links is another one i haven't looked at the links integration um at all as i said we because of our universal renderer people
[00:23:28]  have been building these solutions without even my knowledge so i there might even be a link solid render for all i know um just because anyone can literally pick it up the same way
[00:23:37]  they can with react and just make custom render you know like webgl or whatever oh links uses rs pack yes it's interesting so like there's all this this we
[00:23:52]  still have an interesting tool fracturing which makes sense there should be competition but yeah that's interesting yeah as i said i'm not as familiar anyways i've been already talking 25
[00:24:03]  minutes about just shooting the stuff which is fine i i like i like being able to talk shop a little bit and uh let's see if i can roll around into some actual
[00:24:13]  some of my actual planned content today that's good uh um yeah yeah i i i i actually want to open up by starting a bit talking about uh uh the stream and
[00:24:25]  uh basically the the fact that uh i've been doing well i guess the channel more specifically i've been doing these live streams but i've also been putting out videos right um
[00:24:43]  let me see here see hopefully sharing my screen still works not that one that one maybe this one all right you guys can see my screen i'm sure um i've all
[00:24:59]  right i've been asking i i sort of side question i've been asking when solid css module support will be improved is that a priority i i don't even is
[00:25:12]  there a problem with css module support it's not a priority because i didn't know that there was a problem i figured it should just work right um it's one of
[00:25:22]  those things that are kind of framework agnostic isn't it currently beats up to cs class name after solid babble plugin so it should probably be uh uh i mean
[00:25:42]  interesting i mean what's the solution to that i wonder i mean stuff should happen in a different order i guess is my would be the answer to that because like it's not
[00:26:01]  like we can change the transform to account for something that's not there yet hmm this yeah so yeah i mean i'm i'm i'm yeah yeah yeah yeah yeah
[00:26:27]  yeah no that that makes sense i i understand what the issue is it's just like that that that has to happen on the the like plug and order running side there's no
[00:26:37]  way the compiler could account for that i don't think hmm yeah yeah yeah i well good to know i was not aware of this maybe make an issue against the beat solid
[00:26:58]  plugin um specifically uh like that might be a place to draw attention to it i i had no idea that this was a particular issue like it works right some people definitely don't
[00:27:07]  complain about you're saying it's just not performing as it could be which i agree that's um yeah that's that's tricky okay anyways um yeah as you guys see
[00:27:30]  i've been doing short form videos for the last month and they've gone to some good uh some good responses um but it's it's it's kind of opened up my
[00:27:42]  eyes to a different a different side of things i think and i i i wanted to talk a bit about that today because like it's like you guys if you remember like
[00:27:56]  a few weeks back i was like saying i was having trouble teaching people solid because like i saw a comment on the solid intro video where they're like oh is it and it
[00:28:05]  was like why do a whole video about you state i didn't learn anything about solid and i'm like like like basically they were saying isn't this how react works and i
[00:28:13] 'm like no this is like the whole video was trying to show how this is not how react works but the audience doesn't understand how react works so um sorry i just
[00:28:31]  saw something here and i wanted to talk about this one still having to use battle for solid support is a real issue i mean it's it's an interesting dilemma it's
[00:28:50]  before before babble everyone had custom compilers and i remember this because i was working on the marco team and everyone wanted to move towards babble because that seemed to
[00:28:59]  be what everyone was using in order to like instead of having custom compiler plus babble you just do babble which is the the time here that i've worked walked in
[00:29:09]  and what's cool is babble's written in javascript so it literally just works i've been looking for a replacement in javascript ever since and there really isn
[00:29:19] 't one the only reason react developers get away from babble is because things like typescript have it built in but that's kind of like a it's like a cheat you
[00:29:26]  know what i mean like it's without writing a compiler in a different language to support which i i mean we have an swc plugin but it's obviously not as capable
[00:29:37]  because we're still working on you know moving stuff forward you're in a pretty interesting place because whether it's babble or some custom like you're more likely to hit an
[00:29:46]  overlap with someone using babble than your custom compiler so i i don't know how i feel about this positioning like i could argue that like if you wrote your thing in rust
[00:29:53]  you'd be in a better thing but it's like it's it's tricky i mean maybe if oxc gives the right kind of plugin interface we could use and then
[00:30:02]  we can like be like almost like beat native you know in that sense but i i watched a talk from evan recently and like that side of things is not on the priority
[00:30:12]  list so it's like it's tricky i don't think just going to write our own compiler would be the right way to do it at all um but in the meanwhile
[00:30:24]  i don't think there's a much better option than babel if you're going to stay in javascript like i have people doing updates to the compiler doing bug fixes
[00:30:33]  um you know in javascript you know because they know javascript right people get all my keys because it's slower than this bill but east bill doesn't offer plugins
[00:30:49]  so it's like you're kind of screwed i'm sorry i just want to call that out because i don't think there's actually i i don't think that's
[00:30:56]  actually like i don't think there's actually a good option here so i yeah right because because they have the react uh jsx transform built in right not everyone is so
[00:31:16]  fortunate to have these tools build their transform into them so like it's like your options are basically use babel or make custom compiler like svelte did and i don't
[00:31:27]  know that like that's a better way to go or not yeah yeah the the unplugging ecosystem like there's a bundler plug-in thing but i i need
[00:32:01]  ast parser level stuff i mean unless something has changed in the last six months you can't do what i need to do in in there right like there's you can
[00:32:15] 't i use babel because i literally use the the ast parsing level yeah i yeah i mean if if there's if there if there's something at the oxc
[00:32:34]  level i think there's that this is the first solution in a while that i'm kind of excited about right like the thing is if if i'm not able to write
[00:32:44]  in javascript it's still um like it's it's tricky this whole part of the industry is moving towards performance um because you know rust and they're all competing each
[00:32:55]  other on build times and stuff i think that is good ultimately but i'm most it's funny this sorry for this weird tangent but this everyone knows i'm like a performance guy
[00:33:09]  right and i always like look i would never let the end user suffer developers performance consideration you know what i mean like i i talk about that thing like sometimes making things faster
[00:33:20]  developers worth it but you you need like a hundred x win um to make it worth it not like a 10x win or something right every every millisecond you save the a
[00:33:30]  you lose on the end user you better be saving the developer you know at least sorry a thousand time x yeah it's not a hundred thousand you must be you must be
[00:33:40]  saving the developer at least a full second right so like if if if you if something saves the developer 10 seconds or you better not be losing the end user 10 milliseconds right like
[00:33:52]  that's my perspective things but then when it comes to build tooling on the other side i don't i i don't have the same kind of uh perspective i'm like if
[00:34:00]  it makes us quicker to develop tools to better produce user experience i will give up developer satisfaction slightly like like moving everything to rust and not having people being able to work on
[00:34:16]  it is a bigger thing see that doesn't impact your end user it only impacts the developer i i care about the end user more than the developer which makes me very different than
[00:34:25]  evan and view and their ecosystem and i'm sorry to all you guys because my audience here are developers and they're probably going on but i'm sorry what i safeguard
[00:34:32]  is the people using your product not you um so yeah i mean it's it's an interesting perspective um obviously if i can get best of both i will but i'm i
[00:34:42] 'm that's like where i'm like where my basis is for being critical which is probably why solid hasn't been as popular because i'm not trying to you know buy
[00:34:51]  you dinner so to speak um yeah i mean jared literally the day before bun was was released like publicly that day that it shot up to 30 stars the day before he
[00:35:19]  decided that what what's he gonna do the day before release he made a solid transform uh you know just you know for a few hours he's like got up that day and
[00:35:28]  he's like you know i'm gonna release bun tomorrow but i feel like uh just making a solid jsx transform and he did but then he realized there's more to it
[00:35:36]  like ssr and all the other stuff and he just kind of gave up on it but that was the effort of jared in a few hours on the day before
[00:35:42]  the bun release um yeah people can do that but as i said since i'm primarily a javascript developer i'm not going to be like people have made the swc
[00:35:54]  plugin it's just part of it is also on us the plugin and design is not as refined as they react react did something really smart they were like look we only got like
[00:36:01]  the jsx function or create element function build the whole thing up there that api surface can't change solids rarely does but slightly changes what outputs come from the compiler as
[00:36:11]  we learn the patterns better because this has been a there's like i i know this gets on people's cases because they're like oh 1.0 and everything dom expressions is
[00:36:18]  not 1.0 even though solid is it's because we're still learning the best ways to do fine-grained reactivity across the board in terms of compilation we
[00:36:26] 're getting there to a point that i'm hoping that in the future and probably quite likely with a solid 2.0 release we can say like we have cracked fine-gra
[00:36:35] ined rendering to like a place where it's like we know that these are the patterns and this is how everything works but i i did not know that at the time i released
[00:36:42]  solid and solid 1.0 and even the last few years like i'm still shifting and learning especially because there's zones like ssr and stuff where there's different patterns
[00:36:51]  and things you have to consider especially with like you know do you want partial uh hydration resumability you there's there's pieces here that like we still need to get
[00:36:59]  farther in generalizing and i i guess i get it not not everything has to wait to 1.0 at some point just put your stamp on and move forward but even basic
[00:37:08]  things like spread over the last three years have slightly changed in solid and i've gone to a point where i've actually taken them as far as it can be without breaking and
[00:37:17]  so solid 2.0 i hope to actually finally be like i think i know how spreads exactly should work or whatever you know like so there's there is there's enough
[00:37:26]  movement here that it's been not really the push current my privilege i'm not gonna lie like for myself that's my favorite that's what i like doing i have complete
[00:37:45]  control over it beat even takes away some of the control for me but i mean beats wins are too good not to to like to ignore i'm glad you like i'm
[00:37:58]  glad you like my thousand x rule yeah oh crap people all right all right all right all right sorry back back to where i was i was i was i was getting at here
[00:38:16]  um uh but yeah i mean this all started because of you know conversations on x where i was like you know you know kind of frustrated you know where was it uh youtube
[00:38:30]  to do yeah may 15th one of the bigger challenges i assume people find we're in in memory isn't that how react works so we've been getting good responses i have
[00:38:41]  to admit this latest video has more views likes whatever than all but like two or three of my streams and i get it streams are long content the fact that i have streams
[00:38:49]  that have like 40 or 50 000 views is incredible thank you it's funny we're just talking about rust but thank you greg from leptos that rust stream is probably
[00:39:00]  the most viewed stream i have and maybe it's because we overlapped with some primogen viewers for once or something but like he basically taught rust to a javascript
[00:39:09]  developer and explained how leptos worked which worked well with our audience because we already there's an audience fairly familiar with signals and how all that works so it was a
[00:39:17]  great stream but other than that this content is reaching a different class of people and it's actually having a you know good impact right um it's it's weird don't get
[00:39:28]  me wrong i'm still perfecting it it's kind of like a mix between like trying to take almost like topics i like on stream and then giving them a fire ship
[00:39:40]  treatment which is insane because they're way way too complicated to be rushed so you're in this place where it's like you know i can't do a two minute fire ship
[00:39:49]  video but i can do a 10 minute fire ship video at the same uh compression uh i don't know if that's good but it does let me get to a point where
[00:40:00]  i can say say my piece and if people need to learn more then go find it but like it answers the what rather often than the how or even the why and that
[00:40:09] 's something very common i've been finding in the ecosystem i've been watching these videos you know theo does really try and get into the house sometimes um and goes off in the
[00:40:19]  hours but the audience some of the audience likes it but a lot of the audience hates them for it they're like you make me watch an hour video and it's like shut
[00:40:27]  up moron like i'm sorry like like like like it it's frustrating to to watch um to watch that those kind of responses to people actually trying to teach someone something
[00:40:43]  valuable um so but i i want to play the game i was like okay what if i just said the what just get the ideas out there so people can repeat them without
[00:40:54]  understanding what they're saying and or and the people who do know have a very concise summary where they're like look this is what i was trying to say this this is that
[00:41:04]  this this is the this is the clip notes and it's don't know what okay right people don't have to watch thank you but that that's that that that's
[00:41:24]  sort of what i've been playing at and it i i i did the first video which is good explained all the you know different frameworks and what their philosophies for and why
[00:41:36]  they appealed i did the second video which showed that there's really only three ways frameworks work basically the angular way this the react way in the solid way every other framework
[00:41:46]  is basically a copy of that right and um but with my latest video um things kind of went like a different way and i want to talk a bit about this uh so yeah
[00:42:01]  let's i know it's funny people watch this that video probably not watching the stream right now so like there you go but i i i want to talk a little bit
[00:42:13]  about the the latest signals video because okay i'm not gonna lie i was planning this video ever since um remix announced the split i i went i was moving so i didn't
[00:42:26]  have a chance to like record the video or do all that but like i i knew that when the remix team split off that i said in the last stream like they're
[00:42:36]  in our territory now it was not going to be long before they they were going to come and kind of you know pick a bit of fight not not it's not their fault
[00:42:46]  the second you say you're forking off react and you say you choose preact a bunch of people are going to be like why didn't you choose solid i mean
[00:42:54]  we've basically been spending or i'm like or maybe svelte but svelte has a certain thing that's not like react that like react developers don't necessarily identify
[00:43:04]  with so so we've been kind of establishing ourselves for the last few years that like solid is the go-to choice um if you don't want react and you want to
[00:43:11]  actually benefit from the modern web don't get me wrong preact is also another option but in a sense positioning wise solid has basically been saying that preact is basically like
[00:43:23]  react it doesn't do enough to get away from things solid is what you use and you know it's it's the obvious choice right and so i i knew that this was
[00:43:35]  going to come i didn't know how long i took some time off and luckily it it it came right as i was coming back uh when i you know back to work
[00:43:46]  yeah i i remix now but like and it's and they want to fork it too which is a whole other thing so it's not even but yeah fresh but i mean having
[00:44:00]  a meta framework and it fresh is a very specific meta framework right it's not like your typical thing but i i don't call that i don't consider that um necessarily
[00:44:10]  a indicator very much but yeah i i definitely i definitely saw oh sorry you i just saw a comment here that i want to talk about i saw this coming okay sorry i
[00:44:31]  theo repeats himself a lot across videos as occasional watch is fine but somebody who watches them regularly it's a bit annoying when you explain the same thing three times over you know what
[00:44:38]  this is the this is the problem with using doing doing streams as the content for your videos on streams i cover the same content you know from time to time so in that
[00:44:53]  sense yes you are wasting time on my streams i try and space it out you know several months before or even years before i get back to a topic exactly or i said like
[00:45:02]  like hey i cover that stream but it will happen when you produce videos you need to give people enough basis so they know what you're talking about and when you produce deeply technical
[00:45:12]  videos it's really hard to be like hey jump right into this context and i do it sometimes on my stream too or skip the context i make that judgment call but like
[00:45:22]  this is the hardest part you don't not everyone's an expert with streams you can maybe assume that people are experts but with video you want anyone who approaches it randomly first time
[00:45:34]  on your channel to understand what you're talking about which makes it very difficult not to go back to the basics quite often um yeah i don't know how you solve this you
[00:45:42]  can like you can basically link them all like a big tree and be like look if you have more questions on this check out this video and then that video is like look
[00:45:49]  if you have more questions on this check this video but at a certain point you need to give enough of a basis this is one of the hardest things when you when you actually
[00:45:57]  do try and do deep contact if your content is shallow and it only answers what then you don't need to worry about this you know like like a fire ship video usually doesn
[00:46:06] 't care about what you know it's really hard to build a bridge anyways just something i wanted to kind of point out um unless you're talking about him explaining the same
[00:46:17]  thing three times in the same stream again that's also tricky because when you're on the stream type format you're kind of just going off the top of your head so
[00:46:31]  it is going to be less compressed this is why sometimes the videos do benefit from having the script um you know like which is what i've been doing in my recent ones but
[00:46:40]  anyways sorry just a side you can't win in any circumstance though if you link out things people just assume you're trying to get more views across your videos and you don
[00:46:53] 't say you're too big yeah yeah exactly and uh for those who don't know lady blue notes is like uh solid docs this you this is a problem actually in documentation and
[00:47:03]  two as well because and there's so many more dimensions when you're talking about docs because you're talking about like guides versus reference you know what i mean like it's it
[00:47:11] 's a very difficult challenge to both to have data in a singular source of truth and also be applicable in the specific place where someone needs to use it um there's a
[00:47:22]  whole science behind it um she can probably tell us more than i can can but like this this is true in any kind of learning materials uh um very present in things like docs
[00:47:34]  but also um you know can be true about you know youtube videos that go a little bit deeper um all right anyway uh sorry i i love how i kind of get handed
[00:47:50]  it off but i knew that this remix thing was coming and essentially i started kind of like when i was away in my head kind of you know thinking like okay what kind of
[00:48:01]  video can i do i was originally gonna be like a video about signals or maybe a video about myths about signals or you know like some some kind of thing or like what react
[00:48:09]  like i didn't have the full framing until well unfortunately i can't show it because michael jackson deleted it these these guys really like deleting posts uh um but basically
[00:48:21]  michael jackson said signals never scaled right that's why i don't like signal signals don't scale and to be fair they they for a few days they were posting a
[00:48:31]  bunch of stuff i and as i said i think when they said like they didn't like hooks and everyone's like look at solid you're like i don't like solid
[00:48:37]  you know what i mean like it's funny i people were pretty confused a bunch of people were like that came to me they're like oh they're having their signals thing i
[00:48:45] 'm like no no no you don't understand these guys are react guys through and through this is not them saying they like signals uh like this is them saying they don't like
[00:48:55]  anything and between michael and what was ryan my read on react alternatives is their primary selling point is better performance through alternative depending tracking approaches but when i look at the
[00:49:06]  api they're almost identical okay i it's good i'm glad that this stuff has come up because it actually has provided us with a great learning opportunity these guys are big
[00:49:17]  voices in react community and there's they're saying stuff that has merit in a sense like it makes sense what they're saying not that it is true but it makes sense
[00:49:27]  why someone would think what they're saying and it which is the perfect setup to be like look this is actually what's going on and um i i'm like pretty thankful for
[00:49:37]  it because when guys like this draw attention to what we're doing it's it's great for us right i mean to be fair they're probably getting badgered left right
[00:49:46]  and center about like why not solid why not solid why not signals like you know people's like oh pre-ex got signals it's like yeah you know like like they were
[00:49:54]  probably just getting like hit left right and center like i don't know if they expected that like but when you leave the react umbrella you are in a different zone and so
[00:50:02]  that you know in typical their fashion they're like you know actually i i really like how ryan handled it this time in the past he's asking questions he's putting ideas
[00:50:11]  out there now don't get me wrong when you do that and i've done this myself you're not saying it to be completely agnostic you're not you don't
[00:50:18]  you ask questions in such a way that imply what you're thinking but but do it in a way that what's wonderful about asking questions is you don't come off as
[00:50:29]  a jerk right well being able to actually basically say what you're going to say so ryan's actually been handling the situation wonderfully um in my perspective but it's also i
[00:50:42]  will take that i don't i don't care what ryan or michael jackson think about this stuff that much but they have opened the door you know now we
[00:50:50]  get to talk about it so i'm pretty excited about this michael and ryan rants about how hooks are so bad made me check if it's 2008 again solid
[00:51:06]  stuff performance definitely solves me it's a nice bonus i may be biased in salt the first firm i actually started using but react feels very magical that's so funny if it reacting
[00:51:16]  would love that statement right the mental boss all the benefit for me yeah yeah fine-grained rendering yeah yeah these are great comments right and what i'm getting at is
[00:51:31]  the funniest thing is he wrote this june 28th um yeah okay yeah so i i yeah i i yeah um yeah this is just as i was getting back yeah um i
[00:51:45]  i wrote this this long thing it was always way more than about performance i started solid because i like the mental model more right um but the reason that performance has been such
[00:51:58]  a focus is because i had to cut through this whole v dom versus dom slow stuff and the funniest thing is ryan florence is kind of partially responsible the final nail
[00:52:07]  on the rack came out and they were like they were like you know we're fast enough right like that was the thing they compared to angular they didn't compare it to
[00:52:18]  knockout they compared to angular like we're fast enough and people were like yeah that's weird re-rendering everything can't be optimal right it was actually around uh a
[00:52:27]  react hype 2015 or whatever like ryan florence's dbmon talk where he showed the diffing and he put uh ember uh angular and react net user and
[00:52:36]  react just destroyed it in this benchmark that's when people started going oh v dom is faster he's he he might not realize it but in my mind he is actually right
[00:52:48]  around the catalyst that actually started the thing so like when i i entered a world where i had to prove that the v dom was not the fastest way like performance became a thing
[00:52:57]  because if performance wasn't good enough like if if the solution wasn't better technically how how am i even going to start the conversation to move off the more popular solution this like
[00:53:07]  if you want to talk if for us to even get somewhere i have the solution has to both be technically better has to be nicer to use like it has to check all
[00:53:16]  the boxes across the board to even be considered even an alternative so um that's why this thing started this way because there's like there there's huge misconceptions here um um this
[00:53:29]  starts pre hooks react adopt this language later honestly for some people on the side things that was enough it's true i i know a bunch of people working on signals libraries i saw
[00:53:38]  hooks and they're like yep my job is done they just want the composition but that's only one factor key differences react inflates state with ui awareness ui organization
[00:53:46]  on the state of change to declare body or descendants need to rerun if things change the signals it's only the computations that depend on it it looks similar but it means
[00:53:53]  that state runs through components then rather are the components i do believe there's preference here right and this is true i i believe that people have different opinions on like what model fits
[00:54:04]  with their mindset more but there are a lot of people who think the run ones is simpler um especially as just stuff starts scaling up it makes changes more isolated you don't you
[00:54:15]  don't get to that point where you're looking somewhere in the tree and you're like this is rerunning and it's rerunning because of something above and i just don
[00:54:21] 't know what thing above is causing it like why am i getting here like there there's a it's it's there's a sort of it's sort of funny because
[00:54:32]  this was a complaint against signals originally right like oh updates fly all around and do all this stuff but at a certain point granular chains because they isolate or separate state separation because the
[00:54:47]  increased complexity level let's say the number of props we're sending through components you do get to an inflection point where the signals model is actually simpler because there's you've
[00:54:55]  you've isolated the pieces better uh interesting yeah i mean signals solve a very specific type of problem and it just happens to be that that problem is really good with ui
[00:55:13]  i mean i think people have known this almost for three decades i think people are doing this research in the 90s they were like looking at uh ways of doing reactive programs
[00:55:22]  for ui it's just because a lot of ui is just about state synchronization there's like lots of things that could be interacted with and things that tie into things
[00:55:29]  you need a solution that gives you that guarantee you know where you know at a point in time you have things synchronized that is the benefit of reactivity and signal solutions
[00:55:43]  yeah react was definitely faster than angular ember at the time the funny thing is in that benchmark they were faster than how people implemented knockout but in most things knockout was
[00:55:53]  actually way faster than react like i shouldn't say most things uh that that's wrong sorry on updates react knockout was way faster than react react was faster at creation knockout
[00:56:04]  was faster at uh um updates but it was like a it was it was a very noticeable difference like you clearly chose one or the other um and in my head when i
[00:56:16]  looked at the ryan florence thing i'm like people update more than they create now that might not be true if your page is mostly static but then you've got
[00:56:24]  to go like why are you using react then like i'm just i'm just kind of throwing that out there like like update performance was something that i considered more valuable than creation
[00:56:34]  performance at the time it wasn't until years later that i realized you could have both so anyway um i go on and on about like how far you can take this into
[00:56:48]  the future so but my point is that generally speaking i'm glad ryan's asking the question because these are common thoughts and try to redefine you know and look at education
[00:56:58]  in the react ecosystem so i i created i created this the video um for those who haven't checked it out um it it might be worth checking out i know i i
[00:57:11]  don't always site promote my content but honestly i feel like i've repeated myself on this content like a billion times um key key moments in this video that i want to talk
[00:57:22]  about uh before we move on is um you know signals are not the same as they were 15 years ago um actually have to let this add play i think um i'm
[00:57:39]  not gonna play the video for you guys all but just my point is that guarantees have gone better the graph is directed um we don't just like have things ping-pong
[00:57:50] ing all over the place it's been that way since mob x mob x in 2015 was a game changer and it was in the react ecosystem of all things surprisingly but that
[00:57:59] 's when the like there are other solutions to that like sjs is actually older than mob x go figure but there's been a lot of advances here which means that the stuff
[00:58:07]  that people are talking about back in the day is not the same um it is kind of interesting though actually i have a question because this might be just worth looking in on
[00:58:18]  its own but how many of you have actually watched i wonder where i have it in here is where is it was myth signals or magic i'm trying to remember which myth
[00:58:36]  it is i have a clip in this in this video um from from pete hunt and i i i'm actually curious have how many of you have watched react versus the world
[00:58:54]  by pete hunt it's it's a it's a talk um i i almost want to cover it on the channel because it i i know that's like more of a
[00:59:01]  theo thing to do but it's like it's so it's so good at making the point that i want to make let's see here rx and mob actually are
[00:59:23]  easy for bad devs to create a ton of bad code at the time yeah i mean i don't view mob x the same way i view rx js the tricky
[00:59:33]  part is mob x had to work in reacts world so it was never it was never comfortable there like it worked it was actually kind of cool it kind of turned react into view
[00:59:51]  um but it never sat quite right which meant that it was always not where the react team wanted the framework to go it was always in conflict which is like i love the
[01:00:04]  fact that like if you follow the history and you understand that redux was like the other big state library that were competing and obviously redux won but it it was largely from
[01:00:13]  the blessing of the react team so much so that the people who created redux became the react core team like it when you put it in that perspective it's actually kind
[01:00:22]  of funny the problem is mob x never had the right framework for it like mob x never never never had um had um had the um like the actual ferment that could leverage
[01:00:40]  its ability in a sense solid was like revisiting that i mean there there were slightly more performant ways to do the reactivity the mob x at the time and i you
[01:00:50]  know did went different ways but my work into solid was basically like what if you started with something like mob x conceptually and just made something made for it rather than trying
[01:01:01]  to jam it into a system that doesn't like it the hunt parts that like one minute oh yeah yeah yeah history of signals yeah yeah thank you this talk if like sorry
[01:01:25]  yeah like yeah we haven't really got people in the chat kind of participating here but like who has watched this talk he's at a college campus if if if if a bunch
[01:01:35]  of you have not watched this top talk i think that we should just watch a bit of an on stream maybe about 20 minutes of it i know it's a big investment but
[01:01:47]  honestly this talk is is one of my favorite react talks in retrospect um i'll link it in a minute but i'll link it in a minute but okay so you you
[01:02:02]  haven't yes it it doesn't imply but almost everyone who's moving to signals right now is is envious of fine-grained rendering like that's why they're doing
[01:02:15]  it historically there's a different way to reason out signals the dx seem better like view has used basically signals this whole time for developer experience reasons not for performance or architectural reasons
[01:02:28]  they just thought that like it was a little bit easier to for people to grok and i think svelte started that way too they didn't have signals exactly but pre
[01:02:36]  their compiler thing they did have like a basically a mob x style get and set api if you go to svelte one or two it's it's actually kind
[01:02:43]  of crazy when you think about it that in the last uh seven years ish or eight years you know react's gone through one major api change from going from classes to
[01:02:55]  to hooks view has gone through i guess one major api change i mean view one of you two i guess we're similar enough but then they switch from the composition ap
[01:03:07] i spelt has gone through three major ap or two major api changes going from get to compiler and then compiler to uh to runes and then um in that same period
[01:03:20]  of time solid is basically at the same api now this is because the convergence happening and people kind of repositioning getting to it is but it just it's something interesting
[01:03:31]  in my mind that um we were fortunate enough to be like the the framework coming in 2018 that came out just late enough to basically see what the future was and solid basically
[01:03:43]  picked its api before hooks came out so it's not like we copied react here um we did a little bit with the tuples but generally speaking like we came out just
[01:03:53]  the point of time to say like this is the future and the future hasn't changed in the last eight years on on that side so it's an interesting um thing because
[01:04:02]  it's a fairly safe bet whether you get to fine-grained rendering or not to just go like this api is what people want to use regardless of what framework you
[01:04:10]  yeah i mean is there use case signals outside web when you write a buffer instead of a dom is a reason to use single yeah i mean if the outside process already has
[01:04:32]  its own synchronization process i could argue that you don't the value comes in if you can keep things granular like there is a hierarchical consideration signals can always be more
[01:04:45]  granular than the limits of what you can do with a memorization system because the events are just disparate like they they can notify things even nested hierarchically in terms of
[01:04:55]  data dependencies they can notify things that you had to have no choice but to run through a certain thing but that being said one of the biggest benefits of signals is the fact
[01:05:05]  that they force a clock like they're synchronous so if you already have a clock or pole system you might not gain as much here especially if that pole system has to redo all
[01:05:13]  the work anyways like if you're feeding a signal system into something that's uh immediate mode you might not get the benefit this is why i haven't been sure that mobile we
[01:05:23]  are the right choice i mean you can do anything with signals technically because it's just a notification system so like i can picture a world in which you could like do the
[01:05:31]  handle the rendering completely differently um with signals you know on uh on these kind of things but the dom being a retain mode basically means that in terms of abstraction lineup it is way
[01:05:43]  better choice than trying to like it will always be closer lower level more performant than doing something like react where it's trying to force immediate mode on top of retain mode
[01:05:54]  okay yes yes yes uh and you can go back even further i mean i i show that in the video really quick quickly here where i was talking about the api change
[01:06:21]  uh for react uh because me and my own ads getting caught up by my own ads here it's fine but i i this is from one of my talks see here's dan
[01:06:33]  abramoff adding you state to react but if if the next slide here let's pause on this for a second i i kid you not this is knockout um in
[01:06:42]  2010 versus hooks into thing yes it's not a tuple in knockout you would you'd actually pass call the value the function with the value that's how you write and
[01:06:53]  then you just call the function to read the value but if you look at the similarities here syntactually basically knockout had observables pure computeds and computers computers are effects
[01:07:01]  pure computers or memos or what we call computers now and observables are signals or state or whatever the the analog here is almost identical i i'd been using this pattern
[01:07:11]  for like almost a decade because i was an early knockout doctor and when react books came out there they were like i i i you don't understand i had one of those
[01:07:22]  like drop your cup like choke on you know moments when i saw dan do that i was just like what the and the funniest thing is if you i to this date i love
[01:07:30]  pointing this out signals libraries or knockout is not mentioned as a prior art for hooks on the official docs still to this day they basically would not acknowledge that reactive even mobx
[01:07:41]  like even things in their ecosystem they would not acknowledge that reactive systems were prior art to hooks even though like api wise people are just like come on guys like like yeah
[01:08:04]  i mean we'll talk we'll get into jota in a minute i i wanted to actually talk about jota today but let's let's let's keep on going on
[01:08:12]  for a bit so that we actually can push this stuff forward a little um what i what i wanted to say about this video i said a few key points i think we should
[01:08:22]  look look at that p uh that pete hunt talked uh in a minute here um is that signals yeah it reacts not the same as it used to be signals aren't
[01:08:34]  the same what they used to be people do want it for fine-grained rendering as the chat has already pointed out and we're in just such a different place now that
[01:08:43]  what we consider magic is very different like because i remember signals are magic first myth this was the biggest myth early on i don't hear this as much anymore but people still
[01:08:53]  when solid came out people were like oh it's that compiler it's like no the compiler is literally like react is a jsx compiler it doesn't matter everything's runtime and
[01:09:01]  i think it's funny we've gone full circle where from a place where react is magic essentially like or to a place where almost react is magic right signals are these days
[01:09:10]  probably the simplest solution um when you consider stuff like react compiler and that um signals don't scale a lot of people commented that they wanted more info about this i i this is
[01:09:23]  another great talk um did i link any of these talks in the actual thing um no i didn't damn it jing chen's chop talk uh rethinking let me let
[01:09:33]  me see if i can pull pull this up what is it called rethinking uh best practices at facebook not best oh great thank you this no the react thinking best practice it
[01:09:58]  wasn't that one it was let's just let's see if i put her name in will i get it i'm like literally just not gonna find it here am i
[01:10:22]  it's funny this is this is this is just like okay this is just like okay this book this is just like okay this is like i'm like i don't
[01:11:14]  know what's going to do i don't know what's going to do i don't know what's going to do i don't know what's going to do i don
[01:11:17] 't know what's going to do i don't know what's going to do i don't know what's going to do i don't know what's going to do i
[01:11:18]  don't know what's going to do i don't know what's going to do i don't know what's going to do i don't know what's going to do
[01:11:19]  i don't know what's going to do i don't know what's going to do you guys still there sorry something weird happened on the stream please someone write something in
[01:11:29]  chat so i know that you're alive okay cool all right yeah it's so funny because i literally pulled this out as a source the other day and now it's like
[01:11:48]  it's like not happening flux react hacker way rethinking web app development facebook found it okay sorry sorry everyone this talk is the talk that eventually sold me on react i just want
[01:12:16]  to throw it on here this is another one that people should check out but there's this like great moment where she's like talking about mbc and being like look
[01:12:23]  we're we're we're we're basically uh you know shown this as our example but in reality it's more like this and then like this and then what the hell happens
[01:12:35]  here you know like and this has kind of been the basis here i i think people some amount of people are actually interested in what has changed since this in more detail or
[01:12:46]  more understand what people are complaining about if you want to understand the original complaints i do suggest watching this video um yeah i love my face there sorry yeah i can't win
[01:13:04]  anyway anyway um i do suggest people watching that video it's it's it really puts you in the perspective of like a 2013 2014 developer and why they chose react people nowadays just
[01:13:17]  in a lot of ways don't get it yeah okay i just moved this mess into the component tree right um yeah and flux is a real like the problem was nothing was
[01:13:31]  unidirectional like people people basically were like data binding is great let's data bind everything that's that is not good like that's why my knockout apps fell apart
[01:13:41]  ultimately we started enforcing better patterns and i figured out ways to do things but like react was legit like changed the way we approach web dev when it came in it the interesting
[01:13:51]  thing is a lot of it got equipped attributed to the technology when i think it should be attributed to the best practices in the philosophy that's that's that's what people
[01:13:59]  need to get to you can have those philosophies and things with other technology bases it was just that react was like so blatantly like look you guys are doing it wrong this
[01:14:07]  is how you do it and they were right no nitro is going to be at the end when i do this we can javascript yeah i mean it's good
[01:14:28]  the funniest thing is we we had basically already mbvm was like one hop away from components we'd almost gotten there in fact my team had actually gotten there before react
[01:14:41]  came out but in a different way the problem with um mbvm uh let me scale draw this really quick i'm sorry for people who literally don't care but the
[01:14:51]  problem with mbvm is you got model and you got view okay and slip label the model view now classically with mbc you had a controller apparently that was
[01:15:13]  in the middle but in mbvm they're like we got this thing called view model and this was a good upgrade over control the problems controllers are controllers are sing
[01:15:27] letons they do not contain state so model has persistent state thing nothing in femoral here views are whatever you're going to show like your template your jsx whatever but you
[01:15:39]  had this piece in the middle originally was controllers and the problem when it was a controller sorry let me explain the problem is controller i'll make this controller first problem with this
[01:15:47]  controller is you would have the model data and then you have the view and then you have this problem that was like oh someone selected something in the view and you're like crap
[01:15:54]  uh it doesn't belong in the model because we don't want to persist it you might be actually showing the this model in two different places in the ui you might
[01:16:02]  actually be showing this model over here too you know in view in view two right so there might be another view over here and and there might even be another controller right so it
[01:16:17]  was completely possible that um like you suddenly have this is selected state and controllers are singletons they can't control state and then models don't have persistent state so where
[01:16:32]  the hell do you put is selected and the answer to that in angular was like weird like dollar sign scope they had this thing you kind of kind of pass through the controller that
[01:16:41]  would act as a sort of context it was a mess so what view model did was like oh don't worry view model owns state um great now you have a place for
[01:16:55]  that is selected but you you people started having this like dilemma right um because there's you have two options here i i i'm wondering if you guys can see the two options
[01:17:11]  option number one is you can wrap your models with view models so option number one looks a little like this you you wrap your models with view models and then you can reuse the
[01:17:23]  view model in multiple places right a lot of people are like this is much more dry you know don't repeat yourself you know because you might write your view model in something like
[01:17:32]  knockout with a signal so this would be like your database model this would be your knockout and then this would be like your templates right and this way you could only have
[01:17:41]  the same signal once so when you updated it it could update both view locations and you're in a great shape so and don't get me wrong this problem still exists today
[01:17:53]  in a sense but then there was a second type of view model which was like what if this has selection like the problem is with this model is if this has selection and
[01:18:05]  this doesn't have selection now you're carrying a selected state here that you don't need even if you like make a copy of it and it has its own view model it
[01:18:12]  has properties that aren't necessary on all views it starts being an amalgamation so the other option was and this is what our company ended up doing was we got rid
[01:18:21]  of these more closer to the model view models and we started going okay view models should basically be one to one with the views that they use now this wasn't intuitive at the
[01:18:34]  time because it wasn't very dry but we started doing this and that way yeah sure the same model might have multiple view models it's not you know reusing all the code
[01:18:44]  you might actually have duplicate code in some places between your view models that work on the same models but you you didn't waste things you could you could actually use composition here
[01:18:57]  to be like oh this view model has this set of fields that it cares about and reuse it in these view models and not these emails i know it's a little bit kind
[01:19:06]  of clunky but when you start realizing it when you start looking at this in a different scope you start realizing that uh sorry you start realizing that uh you start realizing that
[01:19:14]  this whole box here very soon later just became component right and so like mbvm was like basically just a step away from from getting to this point and if you
[01:19:36]  wonder about what's going on in this model we haven't been able to completely get away from this from an optimization standpoint this box up here let's make it green is what
[01:19:54]  we call uh like global state today right like this still exists there's still the desire to build use the framework state primitives you know in a in a way that can
[01:20:06]  be reused across components but like at the time that react came out react was like let's just do this and forget this exists which confused the hell out of people because there
[01:20:19]  really were two use cases even though most of the time people were using this where they should be using this react was like no let's force people this way this is a
[01:20:27]  better practice to push stuff more into components like this in more cases it removes all the weird zigzagging and problems so they were right to force people this way but this still
[01:20:38]  existed and react basically ignored this existing through its whole history um but in for me when i look at component architecture i still see a layer like an mbvm underneath does
[01:20:51]  that make sense yeah i'm not surprised i think people people they you you get to that point where you like you realize the best practices and then you go oh well maybe
[01:21:10]  angular wasn't built with those best practices in mind but it might not be completely the technology that did it yeah the biggest challenge i have with mvvc and even to
[01:21:22]  this day is is is essentially uh figuring out the right ownership for ephemeral state and i know it's completely doable because what you can do is you can make like
[01:21:34]  sub models and you can like release and create models i mean i did this kind of stuff it's kind of like dynamic global state kind of scenarios and contextual but there's something
[01:21:41]  really cool about the component tree isolation in terms of context yeah i made two extreme worlds but the truth is in something uh like there is the context in the middle which sort of
[01:21:51]  plays tries to unite these worlds right even to this day some people will say like you can almost pull all stuff out and just like re like react is just a view thing you
[01:22:03]  know so to say like this part belongs to react i but i think the reality is this can never completely go away this can never completely go away but there is this there
[01:22:13]  is there is this kind of tension here uh that sounds painful you know i mean a component architecture will still have a problem composed of behavior forcing behavior tied to components
[01:22:52]  tends to compose multiple behaviors when you need the test or need the nest yeah i mean it's not perfect but i i think that there is a certain conceptual bit that your model
[01:23:02]  is not completely independent of your view i think the problem with the react model is it conflates it's such to the point that it is the same thing the component like
[01:23:15]  this i i i have this like little note about own state here right the component ends up owning the state and there's no thing about it if you can somehow isolate the
[01:23:24]  state change from this unit then you get the ability to to still modularize in a reasonable way like create state as parts of the ui are visited but not tie the update
[01:23:40]  cycle to it in such a restrictive way right it's like and that's like that's basically the way i view things these days right like the in a signals library the
[01:23:51]  the state is not owned by the component like it's created there and it's owned in the sense that like hierarchically when you go to this part of the tree the state
[01:23:58]  now exists where it didn't below before and when you leave that part of the tree you'll be gone but it has no indication on what the update behavior of that part is
[01:24:07]  or what depends on it it's just saying like look we know that in this this vague subsection we will now need the state where we wouldn't need it over here
[01:24:16]  but it doesn't dictate that like now these this part of the ui is forever tied to this you know and every piece of it is tied to it and i i think
[01:24:27]  that's an important but subtle distinction that's why hooks are introduced into this proper composition by now i'll come as close to them i mean or you can view it that
[01:24:45]  hooks were the actual last guys to figure this out and everyone who was using signals was already doing this before them except hooks also aren't as good because they don't they have
[01:24:56]  that tied ownership right um like they they they went like halfway it was basically there's signal solutions that actually solve this better maybe not 100 as people are telling me right now
[01:25:09]  in chat but then hooks were like a half measure to kind of get react almost there okay sorry again for a little tangent but i i thought it was important like the mv
[01:25:22] vc vc kind of thing but it just it helped understand that diagram and understand like some of the concerns people had like it was real because everything people didn't respect un
[01:25:31] idirectional flow and in fact it was if if signals were just effects writing other signals you basically didn't have a directed graph once you have a directed graph you start
[01:25:40]  getting into a place where like like like things flow predictably yes it's com it's signal context instead of components but in a sense the way signals run like their uh
[01:25:55]  updates is it's kind of like react runs actually it's very similar with the unidirectional flow the pure computations the side effects it's just it's just um
[01:26:05]  more granular than components so this graph can run through your component graph without being that graph so i think i think that's like the key thing like those characteristics that made react so
[01:26:15]  good in the first place are actually present in single solutions right like which is a complete game changer when you when you when you understand that it's because like a signal it
[01:26:24] 's immutable right and then it's derived and then it runs once and in order and once you have those characteristics it's it's yes it's not as coarse grain it
[01:26:32] 's like yes component rerun ui redo it's not as simple from that mentality but you still can know that it's this and this and this and i think that's
[01:26:42]  a key piece okay um so yeah i mean i i get why and i could probably do a video on the whole scaling complaints and stuff it just people need enough basis to
[01:27:00]  be able to talk about that um what it was you got this is one of my favorite ones uh myth three is overlooked so many times yeah a lot of responses i got to
[01:27:09]  the video were like oh we can have signals in react and i'm like uh i mean react hooks and react compiler this is more updated i i did some benchmarks earlier that
[01:27:23]  they was a little bit different they're basically the most optimal handwritten hooks implementation the most compiler optimized hooks implementation where you don't hand optimize are basically the same like there's
[01:27:33]  there's like they're trading shots with each other and then react classes are like the tiniest fit behind them and then any other state solution you're going to add
[01:27:42]  on is going to slow it down because there's always a way to write react more directly than what a state solution can do to run it right there's always going to be
[01:27:50]  this tiny overhead i'm not saying it would be enjoyable i would say like writing more performant code with something like jotai is definitely easier but it's like it is an
[01:27:58]  overhead over react because react still has to do what react does you can't beat hand-optimized vanilla react the same way you can't beat hand-optim
[01:28:06] ized vanilla js no one writes it that way because realistically you're you're going to benefit from it and i i i every time i say that someone's like what about pre
[01:28:17] act well guess what what about preact like like adding signals here in one place oh now that one benchmark got faster but because everything else you know still has a vdom
[01:28:36]  tie-in like it actually made the rest of it slower like i guess swap rows with hooks and this i don't know why this is slow i think there's something up
[01:28:43]  with the class implementation why swap rows is is slower but generally speaking classes with preact are faster than their hooks implementation and their signals implementation and it makes a ton of sense
[01:28:57]  why so like the mo adding something like this is even with a crazy optimization that react does where they like actually avoid the vdom in like one special case but the problem is
[01:29:13]  like still when you're doing a bunch of other stuff they can't they can't avoid the vdom or if you avoid the vdom you take a hit somewhere else
[01:29:19]  there's like this challenge where you have to still create the signals and in a re-render model then you're like you know what i mean like these things play against each
[01:29:26]  other view had to deal with this for years they finally kind of solved it um pre-vapor by like adding like like there's this tension where uh the reactive system wanted
[01:29:35]  the components to get larger and the vdom wanted the components to get smaller because the smaller unit change the vdom does the less work it does and the reactive system the
[01:29:43]  less boundaries there are the the less overhead there is communicating that reactivity between components right in solid i worked really hard to remove the boundary of performance on components but classically this
[01:29:52]  has been the challenge so view had this weird problem where they wanted the components to be large um and that would help with some benchmarks but then they wanted them to be small to
[01:30:00]  leverage the vdom so what they end up doing is come up with the answer with large components and then special vdom like uh memoization like v memo like markers on
[01:30:11]  the vdom itself to say like hey don't reuse it which is you might think oh that's kind of cheating but to be fair inferno compiler basically did that that's
[01:30:18]  what inferno has been doing all of these years right what's fast speed on library um but like in in a sense these technologies are at odds with each other you like
[01:30:30]  adding signals to a vdom library does not make it better in any way really um you might have better dx you know like the view argument if you want to actually leverage the
[01:30:40]  benefit you need to switch which is a hard message to swallow which is why a lot of people probably when they got this part of the video were like i'm a react developer
[01:30:46]  i can't swap to react why are you telling me that i can't benefit here like it was and it's like well it's something you should be aware of it
[01:30:55] 's fine you don't need to use this stuff you have to understand the philosophy there's benefits to react's approach you know but this is kind of like thing compostable
[01:31:16]  is bigger than compostable that's an interesting anyway um what was myth for react compiler equivalent to components i i love uh heavy misco uh quick had a great article i i
[01:31:33]  still link that in this video everyone should should should check it out but he he he basically was pointing out like before it starts this one before it came out he was like
[01:31:44]  the compiler is because he was annoyed do you know why every time react we talked about signals or talked about what we were going to be doing um reacting was like everyone's like
[01:31:55]  oh no but the react compiler is going to come it's going to solve everything it's like he's like no react compiler can't solve react it's fundamentally works a
[01:32:03]  certain way the react compiler will never solve this problem and and basically he's right and the thing is this actually undersells how much better signal solutions are because it doesn't
[01:32:16]  even talk about nested signals it talks about proxies or stores where i think people kind of conceptually get this right we're like you have an app in and there
[01:32:25] 's some state up here that's shared it doesn't matter if it's global or whatever but if you have stayed up here that's shared and mutation down one path render
[01:32:32]  one path in in a react app when you cause the mutation the the the everything has to flow from the state down and re-render everything it has no other choice you can
[01:32:44]  be smart about it using memorization where you can go like oh this branch doesn't update but if the change is down here you still have to get all the way down here
[01:32:51]  to do it because there's no other linkage whereas like you know obviously with a signal system the fact the state up here doesn't really matter like because updating the state and
[01:33:01]  then the link is the actual thing is down there you can just basically sidetrack the whole tree no amount of memorization will get you this it's because there's an
[01:33:07]  event under the hood that basically says it's not this component is updated like when you update state in a in react or svelte 3 old svelte or svel
[01:33:15] te 4 is over like this too when you update state somewhere all it can say is like hey my component has an update update i need to retry and see what happens
[01:33:24]  svelte old svelte was like memoized by by default it was pretty good at this in fact the react compiler is a lot like the old svelte comp
[01:33:32] ilers a little bit more advanced but generally signal solution is the only way you're going to cut this out and it's even more prominent when you consider that instead of
[01:33:42]  having a single state atom like a whole list where you know kind of have to do that you can have like nested state structures you can have things like uh um you know
[01:33:53]  like if you had an array with uh some model in it like maybe like i hate using to do as an example but it has a unique id and then there's a specific
[01:34:01]  field on it because each of those are signals nested in signals or whatever it's completely possible that you can go into like the specific to do and change it to completed
[01:34:11]  and it do still do this level update where it's like oh completed it's that one thing that says done that has to change it doesn't have to recheck the list
[01:34:22]  doesn't have to recheck the item doesn't have to recheck the the row you know it just literally goes okay that one thing and the the react render model even
[01:34:32]  with the most memorization if it's that thing down there that changes you have to go and go okay well the list is updated because this one thing changed the item updated right
[01:34:40]  so then we have to look at the row and then what part of the row okay this thing it can prune as well as it can but it still has to go through
[01:34:49]  that process at minimum um which is something that it basically very difficult to do and it's not impossible because when you use things like external state libraries you can technically pull your
[01:35:03]  state outside of the owning component put it out here and then you could like go okay i have my state out here and then i'm going to connect it to here but the
[01:35:10]  tricky part is in reality you might be using pieces of those state like it's not just a straight tree down like maybe it's branching maybe you're using piece of that
[01:35:17]  state over here piece of that state over there piece of that state there like like now this state management solution out here actually has to go okay i'm going to use this
[01:35:26]  atom here use this atom here use this atom here and actually i want to use a specific selector on that atom because i don't want the whole atom change to change so
[01:35:32]  you're actually kind of like it's kind of like the difference between using fragments in uh relay and trying to wire it yourself like basically in the signals version you just kind of
[01:35:44]  be like okay create some state like i'm in react pass it through and it's done like it literally feels as natural where when you go to something jotai you're
[01:35:50]  something like all if you you you really care about where the jotai atom enters the tree it's actually important because that now becomes where the state is owned like if you bring
[01:36:04]  your atom higher because you don't want to deal with the details and you can just like have the rest re-render you can but then that's the start of your
[01:36:11]  tree it's wherever you use atom you just that's where where it starts like it's better than re-rendering the whole freaking tree but every single touch point is because
[01:36:23]  it's still component based becomes the starting point now you can get component granular with this system but it basically if you took the same code written naively in react without thinking
[01:36:35]  about it and ported into solid it would just work that way without you doing any manipulation where in jotai you'd actually have to like go through the effort of of like
[01:36:42]  making sure that you are importing things as low as possible like what happens if you add a child component that now uses a specific field and you don't need it yourself well now
[01:36:52]  the answer uh you know is not just pass the prop down it's like okay now get rid of the use hook here and move the use hook into the child component oh
[01:36:59]  what if someone else is using this over there okay we have to use it move it also into a different child component too so now instead of having one component we now have two
[01:37:06]  components using the use you know what i mean like there's a whole challenges of pulling the state completely out this is like what i was talking about earlier it's not it's
[01:37:15]  not so clean um when you as when you can overlap it without having the repercussions of that overlapping does that make sense yeah so yeah what i was getting at is the
[01:37:33]  context aspect of it basically turns could let react kind of do this but then the nested reactivity part is actually still a problem like like context if they solve context in
[01:37:50]  a smart way they basically can do what i was just saying where they can like move the tree down from here to like here but now you're still talking about you're still
[01:38:01]  talking about where it enters the component and like and when you start getting to partials it gets more complicated now obviously they've been working on a selector api to do
[01:38:10]  this and kind of like when people see it in matching like cool this kind of works like signals all that but the craziest part is if you literally just use the signal model
[01:38:19]  just didn't do this you could literally just like use context pass props do whatever the hell you want to pull it out the global state if you wanted and it would all just
[01:38:26]  work the same way in the optimal way without any consideration like this is all a bunch of hoops to try and fight against the system right like like like this like people
[01:38:43]  ask me often what's the difference between uh say atoms and signals and like api wise they're they're actually kind of similar like uh some people were i i saw some
[01:38:57]  reddit post it was actually kind of funny it was like reddit why not using signals react something i can't remember it yeah yeah yeah recently found signals i tried in
[01:39:11]  the beef cool we were so accurate why the center is amazing whatever the public can be okay maybe it wasn't this one um someone someone wrote something uh people's signals are more
[01:39:25]  complex oh that's hilarious no i i the funny thing is i guess they get asked this like weekly someone was comparing them to to jota and atoms and i was reading
[01:39:36]  a reddit post and i was like they basically said oh it's because you have more control with jota and blah blah blah and implicit implicit and i was like no it
[01:39:42] 's nothing to do that it's just the react render model doesn't work that way and people don't like it like let's pull up jota on the screen for a
[01:39:49]  second guys like uh sorry i spelled it wrong joe time okay let's let's let's let's pick it up here okay so we have an atom out here somewhere
[01:40:00]  and then let's i want i want something yeah okay filter is not interesting i want something like a selector of some type use get the getter and the setter i
[01:40:11]  want something that shows derive state because without drive state i don't i don't care about this very much um i mean you will notice use use use use use basically the
[01:40:22]  use becomes the entry point of your app this is the part that matters now this component is tied for this to this atom not like where it's actually used but the whole component
[01:40:32]  is um what am i where is it they call them selectors right select atom uh did do to slide down in person person okay okay that's maybe they don't call
[01:40:50]  it selectors i'm trying to look at what the equivalent of a computed is because this looks like it just pulls out the specific thing some there's some explicit where you can
[01:41:01]  use like a get method um store dot get basically the idea was that the tracking in atoms is explicit because you the context provides you a get i'm not finding the right
[01:41:17]  code example here so what are attachments send me a link tell me what attachments are i've never heard of them do i but you have atoms depending on other atoms yeah yeah
[01:41:46]  i like it forms a graph a lot like a signal graph it just they they said something along the lines of like the the stuff's explicit and i was like yeah i mean
[01:41:54]  that's a choice like if if anyone's ever seen uh bobby by uh fabio um you know he uses dollar sign as a wrapper getter if you actually like
[01:42:06]  look at the coding you import this and then instead of calling as a function you just go dollar sign the value i don't the equals false is something else but generally speaking he
[01:42:15]  his shortcutting of writing the code doesn't make it easy to read okay yeah getting the value of an observable like basically he has an unwrap function that you can call
[01:42:25]  anywhere right but even more so if you want to like make the tracking work in a specific way non-globally uh there's another signals library called uh met
[01:42:35] ron um by robby speed it's been helping a bit with some of the efforts recently on the solid two-point and reactivity thing and if you look at this ap
[01:42:43] i uh it's a it's very i mean he calls them atoms it's very jotai like um where uh subscribing to a change and then where is it computed yeah
[01:42:55]  he does this he's you use get like explicit get now there's challenges with this because like how do you do templating in a clean way if you have to inject the
[01:43:04]  git context right like it's it's like you right now solids jsx hides the functions so there's no place to put the get in if you have i guess you could
[01:43:15]  write the functions in yourself and be very explicit but like one of the nice pieces of templating is like you can just go like past the this kind of past the value
[01:43:23]  mentality and this kind of gets in the way of it a bit but my point is i mean you could understand why jotai has its api if jopa is explicit like
[01:43:32]  this with gets then it can't work in the templating you have to do use at the component level honestly react doesn't is not going to reward you for being more fine
[01:43:40] -grained they're literally going to rerun the component anyways so it makes sense so there are even though technically you have this kind of push-pull reactive graph
[01:43:50]  in practice atoms end up being very very different than signals because they still can't like escape the react render model react you're kind of trapped into this model which as i said
[01:44:02]  can be fine can have benefits whatever but it is not the same it is not equivalent and uh that's you know maybe hard pill for people watching the videos to to kind
[01:44:12]  of swallow right right um the last bit about my video is i just show that uh we literally have custom renderers concurrent rendering all the other stuff but my point is i just
[01:44:24]  needed to get this out here because like the just the stuff that i was hearing from like the react crowd over the years it's always the same stuff and it's like it
[01:44:35]  feels so untrue i had to write a whole article right if you guys remember react versus signals 10 years later um because it's just the same stuff that is just not
[01:44:48]  the case and as many people as much as you know a couple hundred thousand people have viewed this article over time and the great conversation i have with dan abramoff at the
[01:44:58]  end most react developers are not going to see this article i bet you i wonder if more people will see that video i just did than this article over the course of time
[01:45:07]  even though this article probably is one of the like most you know powerful statements in terms of what i'm talking about you know uh uh uh let's just drop it in
[01:45:22]  here too for the sake of it yeah okay yeah adam get adam get other okay yeah it's inside adam perfect thank thanks robbie i i knew you would know yeah i
[01:45:45]  mean i i talk about signia a lot on the stream actually because the they've actually have a interesting solution to diffing so when i i talk about mutable stores and
[01:45:53]  stuff i've taken a completely different off approach to it the the thing is signia has a very good way of doing this granular uh communication but it's a little clunky
[01:46:02]  to write and then they can because they know react is their output again i feel that's decided their shape of their api like if they weren't using react they would
[01:46:12]  go a much different way i think it's beneficial in that they they let you make more complicated data structures but they're still basically i've been working on primitives that do
[01:46:24]  forking as in you start with singular source maybe a couple sources and you can actually end up with more signals out and most things in reactivity actually merge you end up
[01:46:35]  with like multiple sources and like sure they're all over the place and you have different merges happening but ultimately you end up merging into a single thing it's like most deriv
[01:46:42] ations you know are either one-to-one or multi-to-one like you merge downwards and signia is really good at keeping the separation while doing that merging i
[01:46:50] 've been working on forking just completely changing the math here and i think i think they're interesting approaches but i i think if you know that the final ui can
[01:47:01]  actually benefit from forking it's a different thing like if you're going to go into a v-dom anyways you're going to render a bunch of components anyways the merging
[01:47:07]  is fine because like literally everything's just going to merge into that single api but if you have granular updates on the end there's a big benefit of actually keeping the things
[01:47:15]  separate actually isolating it through the tree action forking so to speak like not all merging has to result in a single everything being tied together and that's why it's much more
[01:47:25]  interesting to me but again these are great solutions in that space but people are starting from this assumption that everything works like react and they really shouldn't be like that is
[01:47:34]  old thinking yeah in metron we use abstracting the template if you need to drive inside the template you create an inline computed in the next version literally do an inline
[01:47:54]  function with the read yeah yeah no i i i get what you have to do it's just yeah i i do think it's part of the reason like that in the
[01:48:05]  way react is why like jotai and the their atoms solutions never really touch what we've been doing with signals it just doesn't money when literally they get no benefit from it
[01:48:16]  so there is a difference here and i i do want to talk a bit about the this explicit implicit kind of thing and some of the challenges there and maybe a bit later
[01:48:25]  but uh let's let's let's keep on rolling for now um before i i get to the pete hunt talk um still interested people want to look at that is i
[01:48:38]  just the funniest thing was after i did all this you know i posted my stuff on reddit and i know reddit is notorious for being you know but it was the
[01:48:49]  type of responses um that i that you get sometimes that are kind of funny and i'm going to open up this one and let's see if i can find uh find the
[01:49:01]  uh the react one uh what am i looking for signal yeah let's go here i i get less this on my youtube this is hilarious people talking about the covers i for
[01:49:23]  this one i didn't even use myself i was trying to get a picture of my react bro you know but why someone's asking why you do that i'm like it's
[01:49:31]  science and it's true as i said this will be my best video to date but anyways let's let's go uh yeah oh i love mark erickson creator or
[01:49:41]  maintainer redux he loves how my 10 minute video is shorter content but no what was it here what every react developer should know about signals but given that every doctor by definition
[01:49:52]  being react developer is stuck with react what should he do with this knowledge my answer broaden their horizons and being able to better to recognize where react in the future react sits
[01:50:02]  in the wider solution space potentially through that find a better appreciation for the react for what react represents and be able to identify with challenges and choices the developers behind it may compare to
[01:50:11]  other solutions and ultimately become a better developer engineer and maybe even a better person because of it um yeah i'm glad that that went over well because it's it they're
[01:50:28]  basically a bunch of people telling me that react developers have a hard time appreciating it um hence the down votes because i mean i i don't know where it landed oh i
[01:50:39] 'm at 27 now when i first posted this video it stayed at like zero the whole time basically people had where everyone's downloading it on this forum um but it was just
[01:50:48]  kind of funny uh okay cool now i know some kind of abstract pattern is using more or less in some js libraries i'll go back to using react until i mix that with
[01:51:01]  it you got me at the got signal shirt petty i know but it's a barber got clipper shirt i'm going to go elsewhere oh man anyways uh sorry there there's
[01:51:12]  more um but i i i want to talk about this seriously and i i'm not going to poke i'm not trying to poke at this uh author i wish i could
[01:51:20]  blur it out but maybe that's too late i really like solid initiative i don't feel like i need to know about signals to build a web app it seems more technical than
[01:51:27]  every react developer needs to know if the goal is to market solid to react goler i think it needs to be more from dumb user standpoint view rather than how it works all
[01:51:34]  the enthusiasts and technical nerds out there find material solid themselves and this is a great video for them great video i think bit too complicated for me but the runtime which is
[01:51:43]  fair it is complicated so the concern is that like i position this material as stuff that people should know and is that crazy to think that people should know this kind of stuff i
[01:51:54]  i just want to kind of talk about this because i there i i talked a bit about this on x um but what i was like it goes and i realized another poor
[01:52:06]  assumptions that developers want to generally know how the tools work it seemed obvious to me one would but i'm noticing confusion and sometimes resentment when teaching things that can be put to use
[01:52:15]  like even i saw a bit of this even with my other videos it's kind of like i know signals has very little to do with react but this is also an opportunity
[01:52:22]  to understand how react render model works and um it's it's it's interesting just like this kind of mentality of what i need to get things done versus like my wider general
[01:52:36]  knowledge i think think this is a topic in general right i've been lying for so two years ago i've been even allowed to i've yet to even be allowed to
[01:52:50]  write a piece of people don't care they just want to keep using react yes yes at the end of the day isn't every react angular vote developed its dsl highly
[01:53:05]  abstracted code js frames cannot be more than js language itself i just don't get it yes i mean but it's i i i think it's in one of these responses
[01:53:15]  let me see if i can find it um not that one sorry for my university topic but i still want to share my prejudgmental thoughts well i guess it's def
[01:53:25]  it's the definition of non-leaky abstraction that its user doesn't need to understand how it actually works underneath sorry i'm like not picking on this guy i think this
[01:53:33]  is the most reasonable well articulated like he spent the time to talk to me about this which i i very much appreciate and and and and and love here is that like a lot
[01:53:44]  of people feel this way maybe a better title would have been the myths about signals or singles versus react rendering i know it sounds a bit controversial policy triggering title either way i
[01:53:54]  value your contribution improving it can be significantly smaller yet like this guy's very polite but like is are are we dealing with non-leaky abstractions i i kind of put
[01:54:06]  this in my comment but when you're looking at jsx div element it's still supposed to represent div and it has events and it has css and it has things like
[01:54:14]  i don't think our modern framework abstractions are non-leaky i think we throw something in front of you that kind of looks like something familiar and we kind of
[01:54:22]  get away with it like felt was the worst for this in a sense where people like it's just vanilla javascript in the html like hell no right but but
[01:54:31]  like like you know like there's that kind of perception that like like like like these like the abstraction is not non-leaky like you you you can't use this
[01:54:47]  stuff without going to mtn or using the dom like react can try and buff out its docs as much as it possibly can but like we you should you should know enough
[01:54:55]  to understand the how to compare equivalent solutions maybe or that like the dom is retained mode so you know and react isn't so like what does that mean like why what like
[01:55:06]  it's fundamentally at a little bit at odds each other so how to like knowing like how it can work kind of a little bit important you don't have to be able to
[01:55:14]  create the framework yourself you got to be able to at least be able to like make sense of where it sits be able to go like oh nuxt is to next as
[01:55:22]  react is to view you need to like some people don't know that like you you need to have a level of knowledge hopefully to be able to categorize so you can for
[01:55:32]  later learn the specifics of it or whatever but at least be able to bucket things and when we spend all the time talking about what is going on we lose a lot of the
[01:55:43]  why and especially the how and i think i think that that is a really you difficult challenge right now because people are like oh you should promote solid without talking about talking about
[01:55:53]  how it works and it's like it's funny react didn't promote itself by not talking about how it worked back in the day like you you have to be different if it
[01:56:00]  looks the same and you know you can't mechanically talk about like how it operates then like what's the point right like Right. But I mean, what is there
[01:56:25]  a problem with the error boundaries in solid? We actually have an error boundaries component. I, I think a lot of people obviously don't know the specifics of solid. Solid
[01:56:40]  is very react aware, which surprises people. Part of it is I'm very JavaScript framework aware. So I spent the time to learn how all the frameworks worked. And then
[01:56:53]  kind of looked at how that sits to the point that, unfortunately, for a lot of people who come in with stuff, it's I have an answer for every question you
[01:57:01]  throw at me, which is not, it's kind of annoying. It's kind of like the know it all problem. But it's like, that's what I spent
[01:57:07]  my time doing and studying. Like, I have never been a Pete Hunt. I can admire him. He came out and he was like, look, what we're doing
[01:57:17]  is so much better. You have to understand, blah, blah, blah, blah, blah. I've never been that confident because I'm a senior developer. You
[01:57:25]  know, my answer for everything is it depends, but. I kind of wish at times and I kind of feel like you almost need that level of forcefulness. Kind of
[01:57:34]  get get through and I might be going there in the future because at this point. it's kind of getting a lot clearer. You know, it's starting to get
[01:57:52]  a lot clearer, like where these things actually sit. It's, it's, it's, it's all nice that we can all say like everybody's good or whatever
[01:58:01] , but some technology has definitely progressed in ways that exceed other technologies in certain areas. I say people should try writing confusing. Yeah. Writing your own framework is great.
[01:58:10]  If you have time, I can't convince everyone to write their own framework. I did because, you know, I realized this is the vision of my friend, but
[01:58:18]  that's awesome. I, I, I, I did that exercise myself. I think even before you get to there, a lot of people in this stream, a lot
[01:58:26]  of people on our discord who have written their own framework. Robbie, who's in here written his own framework, right? Like, it's just, you don't
[01:58:36]  need that. I think it's very valuable at a certain point in your career to kind of understand it, but you should at least be able to go like bucket A bucket
[01:58:43]  B, you know? See, like just kind of get into the categorizations. Yeah. Oh, hooks are leaky abstraction, but no one rules. Yep.
[01:59:00]  You're a no-it-all problem is reason number three why Trestle is full. I mean, you can't just base it on the, you should question
[01:59:10]  things. You can't base it on the one person, but I just, I'm very much in a position to be able to answer these questions because I dealt, I
[01:59:17]  had to cut through so much crap to even get to the start. So many people, I mean, you don't appreciate the why of you need a free market until
[01:59:46]  you actually try and build yourself. And the thing is, if you, I mean, people will get here naturally because at a certain point, they'll be like, why
[01:59:53]  am I dealing with all this crap? So you start cutting it out, you start like not using it and you're like, okay, you know what, I don
[01:59:58] 't need Nuxt. I've got view, you know? So I'm going to just plow ahead and you might get very far. And then at a certain point
[02:00:06]  you're like, okay, I need server rendering, view has server rendering, great. Okay, so now I'm going to build the thing and I'm going to build
[02:00:09]  on a beat and then you're going to be like, oh shit, then I need to handle this. And then before long, you're like, you're recreating
[02:00:14]  Nuxt, right? And then you're like, crap, you know, I could have probably just used Nuxt, right? This always happens, but now you
[02:00:22]  know why, right? I just picked a, you know, in your lane example, shout out to Alex makes great content, especially on the view ecosystem. But this
[02:00:32]  is true in any framework, any kind of level of abstraction. You're going to, you're going to like learn at a certain point, you're going to hit something
[02:00:44]  you don't like and you're going to go around it and then you're going to learn why. And sometimes you will come up with something better for your use case
[02:00:50] , maybe not the general case, sometimes you will come up with something better the general case. It's a good thing to get there at a certain point when something's not
[02:00:56]  working for you in your specific case, feel free to step out of the bounds. But at a certain point, yeah, you need to know why. I'm not saying
[02:01:03]  every beginner needs to go out and know why, but I'm saying that we should, as a community, embrace the fact that we should be learning. Yes, yeah
[02:01:19] , they have, they have a rules problem. There's actually one rule. You can lose reactivity. Every version of our rules problem is simply the fact that you have
[02:01:34]  to be aware of the tracking scope. It's all the same problem all the way down, so it's a little simpler, but that's the thing. And I want
[02:01:41]  to be clear on this. I'm not saying that there aren't different trade-offs. I'm saying that people should be aware of the tool that they are using
[02:01:48] . That is what I am saying. They should be cognizant of the basics of how it works. Solid's whole ecosystem is built on knowing this stuff. It's
[02:01:58]  a reflection of myself in a certain way. I think every ecosystem sometimes is like every framework is a reflection of the situation in which it came into existence. And every ecosystem is
[02:02:08]  somewhat the reflection of its early creators and maintainers. And you guys, I mean, sorry, got me. But this has a big part of, you know,
[02:02:22]  thing. It's why Solid is notorious for attracting other framework authors. We're like this breeding pool of like everyone who writes their own framework. They sit in there and they
[02:02:31] , Fabio is hilarious sometimes. You'll be in there basically like picking people off and be like, yeah, I don't like how Solid does this. We do
[02:02:38]  it much better and bad, like literally in our Discord, picking people out of to go use this framework. And it's like, I'm okay with that. I will
[02:02:46]  stand by my decisions and are, you know, where I've made mistakes or, you know, like, you know, I say I, I mean collectively, we Solid
[02:02:53] , you know, the different parts. You know, I have a big part in that, but like, obviously there's many people working in Solid and put up the
[02:02:59]  test because like, that's where our reputation is. That's where our thing is, you know, and that's what they like getting there because something challenging comes up.
[02:03:08]  We talk about it, right? It's something difficult coming out. We try and understand it better. Right. And that's, that's the kind of community I
[02:03:14]  want. Um, it's not, and it's tricky because it's sometimes not beginner friendly. Um, the truth is, I think the concepts and stuff can be taught
[02:03:27]  in a way that are beginner friendly, but there is a certain undertone here of people who really care about how things work. And, um, I know, think
[02:03:40]  frameworks and tools get away from that after they grow because just the number of users aren't all going to be like that. It just is one of those characteristics you find around
[02:03:49]  a community, usually, uh, probably because of myself. Oh, yeah, yeah. Daryl here, another framework writer. Hardest for anything I've done in
[02:04:01]  my career. Yeah, yeah. I mean, it's not for everyone. But like, kind of get like, you know, just get a bit of a picture
[02:04:11]  of what's going on in your head. Yeah, yeah, yeah. Props destructuring. Yeah. Yeah. But if you understand, it's the exact same
[02:04:28]  problem again, right? It's the fact that you are un-tracking something, reading something at the point of where it's not being tracked. As I said
[02:04:36] , it's all the exact same problem. Anyway, um, yeah, I, okay, let's, let's, let's, let's move on. How
[02:05:02]  far are we in? We about two hours into the stream. Okay. I still got some things. How am I doing on my list? I'm about a, God
[02:05:08] , I'm about a quarter of the way through my list. Okay. I gotta, I gotta think about how I'm gonna talk about this then. Um, should we
[02:05:17]  do some old Pete Hunt talk or should we move on? Um, some of these topics are not actually very big. Actually, no, I already covered Adams versus signal
[02:05:27] . So I'm actually, no, I take that back. I'm about a third of the way through my list. Closer to half. Yeah. You know what
[02:05:33] ? I think we have time for some Pete Hunt talk. Yeah, let's, let's, let's, let's see if I can get that set up.
[02:05:42]  Uh, bookmarks, I don't need to listen to the whole talk. Um, sorry. I don't know if I want to comment on this before we go there
[02:05:56] , but this will be omnipresent. Just think about this image. This is like, this is old knockout and stuff effectively under the hood. When you use like
[02:06:06]  a computed essentially did this. But the funny thing is you can still do this in react or solid today. No one should ever freaking do this. Um, but I
[02:06:15]  think naturally people lend to this kind of thing. The state needs to be derived. Um, this is terrible in any framework. Um, but in, in react developers heads
[02:06:28] , they think this is what signals are. Um, but I mean, from this perspective, you guys got signals at home. Uh, signals do not do this. Um
[02:06:36] , unless you literally are using effects the same way you got basically the same patterns that are dumb and react or dumb with signals. Like, um, but just look at
[02:06:46]  this kind of sink in this. Um, to kind of, to kind of get this in. Right. Um, oh, I did have a few more remix quotes in
[02:06:56]  here. Juicy ones. Disillusioned with hooks. Everything seems unnecessarily complex. It's just funny because I thought they were great. Stockholm syndrome. Um
[02:07:05] , what else was fun? React made enough missteps of the years that the space is right for disruption. That's the only reason I think about going up. Good.
[02:07:15]  People don't love hooks. Suspense asked for quite a bit from reactor. Unfairful, you know, okay, here we go. This is the talk
[02:07:22]  I've been talking about this whole time. Um, I'm going to pop this into a separate window in a second. Uh, but I'll also link it here because
[02:07:32]  I know you guys love it. Um, okay, let, let me quickly, uh, let's go back to somewhere in there in the beginning. And let's
[02:07:43] , let's just, uh, let's just give this a role. I I'm, I'm impatient enough that I don't know if I'll be able to watch
[02:07:49]  the whole talk. You know me, but let's, let's change how I present the screen. Uh, stop screen, uh, share specific Chrome tab. And
[02:08:07]  I am going to, I think overlay myself the bottom corner. Yeah. And let's look at, in my opinion, people always point at some of the other people,
[02:08:18]  uh, hunt talks and stuff, but this is the most like in your face. He probably was right. When Aiden's. Yeah. I mean, it happens
[02:08:41] . It's, it's tricky. React doesn't, team doesn't want you to do that either, either. It's just people naturally hold onto state. They're
[02:08:49]  like, okay, everything is state. I needed state. And you, the problem is you, you would think. The reason this is funny is because cooks force you to
[02:09:00]  think about data flow. Okay. Keep that in mind when you watch this video, it's, it's, this is why people are in this zone. At a
[02:09:06]  certain point in this video, you're going to swear that he's actually condemning modern react and not all these other libraries. It's, it's, it's,
[02:09:15]  it's wild. Yeah. Same applies to view. Composition. Yeah. I mean, we, we all have these, these derived things. React itself does. React
[02:09:24]  doesn't want you to do that. Um. Right. Putting into one object is an easy way of kind of directing it, but like, then you lose granularity perhaps
[02:09:38] . Right. So like the, like, don't be wrong. I think in like a case like that, that makes sense. You're in a single component, single
[02:09:45]  scope. Like who cares? You're literally going to re-render that component anyways. Right. Right. Right. Right. Right. Right. Right. But like
[02:09:51]  wider range of, of solution consideration. Yeah. Let's honestly, this is such an oldie, but a goodie. I think we just need to like, we
[02:09:58]  just need to, we just need to give this a run. Okay. Let's see. Do you, do you guys hear the audio and then recently he left this book
[02:10:08]  and started this company. Could you hear that audio at all? Sorry. I know it's a little bit noisy, but could you hear that? Yeah. Okay. Yeah
[02:10:15] . Thanks. How's it going, everybody? Nice. You guys are surprisingly high energy for how late in the day it is. I always like checking out the stickers
[02:10:29]  on everyone's laptops to get an impression of like what people's backgrounds are. But how many people here built like an application with JavaScript before? All right, cool. What
[02:10:38]  kind of frameworks you guys use or libraries? Keep in mind the time period of this. This is like, 2013 or 14 time period. So just volunteer. Angular.
[02:10:57]  Okay. React. Sorry. We got Ember over here. Angular over here. Someone yelled react. Backbone. All right. And D3. D3. Okay
[02:11:06] . Meteor. Meteor. Cool. Roll. Roll. Roll. Roll. Roll. Oh, like vanilla JavaScript, the true hipster framework. Okay. Cool
[02:11:18] . All right. So we got like a lot of experience here, which is good. So my name is Pete. I was at Facebook for a while, doing a bunch
[02:11:25]  of stuff, working on Instagram stuff for a while. Recently started a startup, pretty unrelated to front end, but doing a lot of fraud and spam detection stuff. When I
[02:11:33]  was at Facebook, I built kind of the first big application with React. And then when I was working on it, I realized that there were all these problems with React
[02:11:42]  and it wasn't ready for prime time. So I ended up being on the core team of React for a long time and pushing it through open source and building a bunch of
[02:11:48]  features there. One of the reasons why I was motivated to do that was because I really, really love the web. I think the web is like this great technological marvel
[02:11:58]  that we have and it kind of defines our generation. So I ended up leading the web team at Instagram while being also on the Facebook JavaScript infrastructure team. And this is a
[02:12:08]  team that kind of goes around and figures out the best ways to write Facebook or write JavaScript at Facebook. And it's interesting because he came into the React because it wasn
[02:12:20] 't quite where he wanted to be. Let's hear a little bit more. Sorry. At the beginning, I don't have too much to interrupt on. So we're
[02:12:26]  just going to kind of let the talk flow for a bit, but we'll get there. We kind of go and sell different techniques to product teams. I was also on
[02:12:35]  the React core team and I really like the web, especially because it's everywhere. Yeah. I guess it's a bit later because he's not on the core team
[02:12:46]  anymore. At the same time, I really hate the web, like a lot of things about the web. It's a terrible API for building applications. So the guy who
[02:12:56]  did raw JavaScript, vanilla JavaScript, like your hardcore, like props, because it's really hard to build applications without help. And even though we have some upcoming standards called web
[02:13:06]  components that make this a little bit easier, it's still like a very, very hard API to use. It wasn't designed for building applications. Another thing that I
[02:13:15]  really hate about the web is DOM manipulation is really slow. You guys know what the DOM is? All right. Pretty much everyone's nodding their head. It's the
[02:13:22]  DOM manipulation is very slow. Slow compared to what? So let's hear what he has to say. But like, this is one of those, this I'm saying
[02:13:38] , this is just prime. You have to understand until people watch this whole content, I ate this stuff up. You don't really understand the perspective that maybe I've been
[02:13:46]  coming into from. Let's just keep on going. In case you didn't nod your head, it's the way that a JavaScript application interfaces with HTML and can change
[02:13:55]  the page. And it's really slow. And the slowest part about it is layout. So when you change a part of the page and you have to change the way
[02:14:02]  that text wraps around something, that's really slow. And understanding when it's going to trigger a fast... I know you think differently, Daryl. But I
[02:14:12]  think the web component comment is the only comment that has aged incredibly well. Layout change or slow layout change is pretty difficult to understand without a lot of experience with the like
[02:14:26]  kind of web inspector and all those tools. And the Google Chrome team in particular is doing a great job building tools to make this easier, but it's still really hard to
[02:14:33]  understand. Another reason why I hate the web is the standards process is really slow. But this is actually by design, so it's kind of a good thing. The
[02:14:41]  reason why the web is everywhere is because it is standardized. And that means that all the implementers implement the same thing. So we can deploy an application once and have it
[02:14:49]  run anywhere. But it also means we don't get a lot of features. And the features that we do have are designed by committee and they tend to be slow. But
[02:14:57]  at the end of the day, the biggest problem is that we're building documents. The web is designed for documents and we want to build applications. So Facebook needed a
[02:15:06]  solution to this problem. We were sick of building applications that looked like documents. And we wanted to build applications that performed like applications and felt like apps. So does anyone here
[02:15:17]  know, like can someone tell me what an application is on the web? What does it do? No? Okay. Are you guys CS students? I don't know
[02:15:27] . All right. So the way I think of an application, an application does basically three things. It listens for user events from the browser. So it gets clicks,
[02:15:38]  keystrokes, mouse movements, touch events. It handles network events. So a request coming in from the server via either an XML HTTP request or WebSocket. And
[02:15:49]  it also issues network requests as well. And it manipulates the DOM. That's pretty much all it does. Basically it responds to events and puts pixels on the screen
[02:15:56]  and sends stuff to an hour. It's actually like a pretty difficult thing to do once you start to write an application. And I think that Dykstra had a
[02:16:06]  lot of really great advice for us. Kind of back in the 60s and 70s about how to write great applications. And he says we should do our utmost to shorten
[02:16:16]  the conceptual gap between the static program and the dynamic process. To make the correspondence between the program and the process as trivial as possible. Makes sense. What the hell does that
[02:16:26]  even mean? I'll tell you what it means. This is a buddy list on facebook.com on the desktop site. Now I'm going to read to you a
[02:16:37]  series of network events coming in from the server. And I'm going to ask you what this looks like at the end. You guys ready? Alice went offline. Bob went
[02:16:47]  offline. Steve went online. Bob went online. Charles is idle. And Charles is on mobile. All right. What does it look like? These processes that evolve over time
[02:16:58]  are really hard to understand. Like holding all that state in your head is crazy. Yeah. So he's talking about declarative versus imperative, which is very important.
[02:17:09]  Key point here is why we use web frameworks. I like the starting point here is this change of making things be state or data driven instead of process driven. Right. It
[02:17:20] 's not about events necessarily. And I didn't dig into this earlier. I mean, I can possibly pop over to another tab and talk about it a bit later.
[02:17:29]  But there's this kind of chat going on about this week about like like Rx versus signals and like things that what he gave you was a series of events. And sometimes
[02:17:40]  with events, events are good because then, you know, on each thing that changes, you can do something. But for displaying or synchronizing UI, events are actually a
[02:17:48]  harder way of like visualizing what's going on. Like events flow into the system all over the place. What you ultimately want is that perfect reconciled system.
[02:17:57]  Right. It would be a lot easier if I could ask you what that looks like by just looking at this JSON data structure. By looking at this, you could probably draw
[02:18:11]  a picture of the buddy list pretty easily. That's because this is a static snapshot in time of what the buddy list should look like. It's not a series of
[02:18:19]  events mutating state that changes over time. It feels me? All right. So have you guys heard of this thing called data binding? The Angular people probably have.
[02:18:32]  Backbone people maybe as well. It basically takes the user interface, which is a dynamic process that changes over time, and it tries to make it look more like a static
[02:18:41]  program. So you take a snapshot of your data, and some system somewhere syncs up your user interface with that data. And so I like to think of data binding as
[02:18:51]  a polyfill for reactive JavaScript in the DOM. And for those of you not familiar with what a polyfill is, it's a JavaScript library that kind of makes a
[02:18:59]  feature that's available in the next version of JavaScript or the DOM available today. It's like a shim. And what data binding is, is it's basically a way
[02:19:09]  of saying like, hey, I wish that the DOM could automatically update itself based on variables in JavaScript. Let's make it work. There are people still trying to make this
[02:19:18]  go through the proposal. I'm actually going to, if it starts with getting templating into the language, I'm going to talk a bit about if I have time
[02:19:25]  later about Justin's latest work, the guy from Lit in terms of template standardization. But it is important to kind of point out here that with the signals proposal, you
[02:19:38]  know, all the framework guys are like, let's hold back and like, be careful. There's a bunch of people salivating over the potential of just passing
[02:19:47]  signals directly into DOM and having it directly update. And I think this talk actually gives a good, some good backing of why that might be not great. But yeah,
[02:19:58]  let's, let's continue. Or that maybe there isn't a single standard way of doing it. Justin Donald: Now, the problem is that these data binding abstractions
[02:20:07]  that we have are leaky abstractions. And they're really, really not simple. So Facebook had a traditional kind of data binding approach a couple of years ago. It
[02:20:18]  was called Bolt. It's actually still on GitHub, I think. And it ended up getting very, very complicated very quickly. Justin Donald: Sorry, just a side
[02:20:26]  note. I'm noticing, Jack, sometimes it's not the most, yeah, I agree. That being said, Svelte syntax used to, I would agree 100
[02:20:36] % with you with Svelte 3 and 4. It is way lighter. Svelte with ruins, we're talking about the difference between destructuring a tuple
[02:20:44]  and like using a single variable that writes like the syntax difference mostly matters. I guess the setters are still more, more thing. Yeah. The syntax place, like
[02:20:58]  from an ideological, like from an idea standpoint of like, these are pieces of my language. Like I need to write here. I need to read here. We need to
[02:21:07]  update there. Syntaxually there are, it's slightly longer, but, but like in terms of like number of concepts and locations, it's basically identical, right
[02:21:16] ? Like solids syntax is slightly more verbose because we believe in read, write segregation and enforcing more control mechanisms mostly. But like when people put code between say solid
[02:21:33]  and Svelte side by side, solid version will be like the line will be slightly longer because it has a couple more characters. But there won't be more lines
[02:21:41]  of code is the best way I can put it. Yeah. And there there's things that do way better than Svelte. I don't think it's an important
[02:21:54]  metric at all. I think conceptual metrics and I think mechanical things. If people want to get over code turn assist. Yeah. They should all use Marco. It blows
[02:22:04]  even Svelte out of the water. Yeah. Oh, sorry. Just before I continue, get you guys celebrating Ryan Turnquist for, you know, solid router
[02:22:22]  creator joined Marco team as I left the Marco team. He reached out and wanted to talk about doing a stream coming up about Marco six, which I think if you guys know
[02:22:33] , given my policy and Marco six means I think we're getting pretty close because I'm not allowed to talk about. I said, I swore that I would stop talking
[02:22:44]  about Marco and Marco six and how incredible it is until it actually came out. I, I think we're getting very, very close. So get excited. Why is
[02:22:57]  Marco not no more popular? People always ask me this. Um, it wasn't marketed. It's in a weird place. It's just funny when you, it's
[02:23:03]  like, it's my poster child of someone of technology that just so far ahead of its time and so much in some ways better than all the equivalent things that what it does
[02:23:11]  that it just, it just kind of blew past where people are. Yeah. I don't, I don't know. Anyway, Ryan stream is the best person Marco
[02:23:21]  six news. It only counts when I bring it up. Yeah. I had this problem gushing about Marco basically anytime I, I'd be like saying something and I'm
[02:23:30]  like, Oh, of course Marco does this, you know? Um, yeah. Anyway, okay. He says contemporary data binding here. Cause he's talking about at
[02:23:44]  the time, but let's continue on. Sorry. I got sidetracked. More district. The thing that made it difficult was that we would build an application and it
[02:23:54]  would work. And then we would play with it for a while. We would get these bug reports that come back in and say, Hey, the user interface is broken or
[02:24:01]  this button doesn't do what it's supposed to do. And we couldn't reproduce that bug report. So the most important thing that we realized is that we want to
[02:24:08]  just have reproducible bugs. Like we don't even care if the thing's easy to make or if it works, but as long as it breaks consistently, like we'll
[02:24:15]  take that that's a win. Um, so Dijkstra again says simplicity is prerequisite for reliability. Reliable systems are predictable. So how do I want to stop
[02:24:24]  on that breaks predictably is a win. That is a huge, huge, huge, huge, huge, huge point here that probably gets, uh, washed over a bit
[02:24:36] , right? Because I, I, there's a different aspect of it, um, here, which I talk about with signals and solid for per se, but like
[02:24:44] , in my opinion, if, if something like the thing that goes wrong with solid, the most is you lose reactivity. Something isn't reactive. Someone destructed
[02:24:55]  a problem. And then it just breaks and basically like, uh, it will usually break at the point that someone makes the change. It might not be where they expect
[02:25:06]  that change to impact, but it, they will break it immediately. It will not be hidden. It will be broken from that point on immediately broken. You, you did
[02:25:15]  something wrong. It broke. Hopefully, you know, a little debugging, you will find it. What happens in the react model these days is you might, it might
[02:25:28]  render properly, but, um, when you do the equivalently bad thing, um, it will be render like four or 16 times. You like your performance will go
[02:25:39]  out the window. I, I, I heard someone, uh, I think it was my favorite, someone, uh, Jay Larky mentioning that he was porting
[02:25:47]  some code to solid and had an infinite loop. And it was like the one time he hit an infinite loop in solid. And then he was like, Oh, it's
[02:25:53]  weird signal solid doing infinite loop. You know, when reacting, and then he looked, he's like, Oh crap, the react code that he copied it from already
[02:26:00]  had the infinite loop buried in. He just hadn't noticed it. And, um, I like, obviously I think any framework that does an infinite loop will do an infinite
[02:26:11]  loop and it'll die out and it won't like, like it will term stack or whatever, like you, you'll be done. But like, generally speaking, I
[02:26:19]  think it's interesting when he's talking about his, his guideline for reliability is that it breaks early. And in solid, our kind of guideline for performance is that it breaks
[02:26:30]  early. Basically working solid code is performance solid code, generally speaking. Um, so there's a, there's parallels here. Um, yeah, true story. Yeah.
[02:26:56]  You guys seriously arguing about felt syntax, uh, it's just so yeah. Uh, the, the class thing or whatever, I mean, Svelte has its
[02:27:11]  reasons for doing what did I think I already talked about this on a stream, you know, about like their choices, obviously anyone involved in solid disagrees with Svelte
[02:27:19] 's choices. It's so I don't think any, you guys are going to hit any kind of thing. I, I, I do not prefer Svelte
[02:27:25]  syntax. I, in fact, it's funny at Svelte 3 or Svelte 4, when someone said it was more terse or whatever, and, and
[02:27:31]  I would agree with them. I had nothing to argue against. I'm like, yeah, you know, it is definitely more terse. It's more straightforward to get
[02:27:36]  through to when they added runes, they added signals and deliberately chose to do things in a different way, which is perfectly fine for them. But obviously we had the
[02:27:46]  choice of going that way. In fact, we have plugins that do similar before Svelte runes even existed where people did it because they liked it. So yeah,
[02:27:55]  it's funny. Cause I don't, you guys aren't going to agree on this. Um, we fundamentally just because Phil's philosophy behind solid, all these other kind
[02:28:02]  of pieces and understanding solid decision is very rooted. um, in mechanics. So you guys are going to basically talk past each other. I, I just know like,
[02:28:12]  in fact, you had a similar debate and I mean, this is not like who picked what you, you sided with us. Um, but you know what I mean?
[02:28:20]  Like there, there are reasons to not go the way that Svelte did. Svelte chose to go that way, which is good. It makes a unique solution
[02:28:25]  and people like it, but you guys are not going to agree about it in the course of this chat. I am pretty sure. And they're still going. All
[02:28:38]  right. It's fine. Let's keep on going. Make a system simple. Now, simple is one of these words that gets thrown around all the time. And you
[02:28:49]  ask two different JavaScript library authors, like which one is simpler. They'll always say theirs is simpler. Um, even though, you know, everyone has a different idea
[02:28:56]  of what simple means. Um, but does anybody here know who Rich Hickey is? Has anybody heard of the Clojure programming language? Okay. So Rich
[02:29:06]  Hickey is this guy with this huge Afro and he invented the Clojure programming language. He's super smart. And he has this great talk that I suggest
[02:29:13]  everybody goes and watches, um, called Simple Made Easy. And at the end of the day, he comes down and he says, what matters for simplicity is that there's
[02:29:20]  no interleaving. So Rich makes a distinction between what is simple and what is easy. So easy is something that's relative. What's easy for you might not be
[02:29:30]  easy for me, or what's easy for me might not be easy for somebody else. It's all dependent on what our experience is. Some people find like C programming
[02:29:37]  really, really simple and building user interfaces in JavaScript really difficult. And sometimes it's vice versa too. Some people, you know, it just matters what your experience is.
[02:29:47]  But simplicity, we can make that actually an objective thing. And we can say, hey, when you're looking at a single piece of code, how many different concerns are
[02:29:54]  interleaved in there? How many things do you have to load into your brain to understand what that piece of code is doing? So it's important to understand that
[02:30:05]  simple is not, um, not equal to familiar. And so just because you have experience with a, with a piece of technology, um, or the status quo says you
[02:30:13]  should do something, doesn't mean it's simple. It means it's familiar and it might mean it's easy to you, but it doesn't mean it's simple.
[02:30:19]  So we're talking a lot about, um, data binding and there's a couple of approaches that you can take to implement data binding. The first one I'm going to
[02:30:27]  talk about is key value observation. They used to call signals KVO, um, or the equivalent of it is funny that the key value observation is what they, is
[02:30:38]  what they call it. Cause a lot of them used objects, um, kind of like views, um, options API. Um, uh, Ember is notorious for this
[02:30:48]  knockout funnily is, is the only one that had the ins to discrete signals. I guess meteor kind of had discrete signals too. Let's see. Because
[02:30:58]  in order to understand why we actually built react and did something different, you need to understand what the status quo was because you really shouldn't invent something new unless you have something
[02:31:08]  new to add to the conversation and the body of knowledge. So key value observation, um, powers libraries like Ember, Knockout, Backbone, Meteor.
[02:31:17]  Um, if you've ever done any iOS development, um, there's key value observation, um, in iOS as well. And it's built around the ideas of observ
[02:31:25] ables and computed properties. If there's KVO in iOS, does that mean that the iOS model is retained mode, not immediate mode? I'm, I'm just curious
[02:31:33] . I don't actually know this, but if mobile models are retained versus immediate, that suggests that solid has, and signals have a place on mobile more than react does.
[02:31:42]  just, just hypothetically speaking. These are the fundamental building blocks of a key value observation system. So let's imagine, for example, um, for this, for
[02:31:55]  this lecture that we're building, okay, this is a good point. I was tempted to do this, but people watch me, I imagine at 1.5 speed.
[02:32:07]  So if I make his talk 1.5 and then you, someone else puts 1.5 on top of it, they're going to hit a problem. So I
[02:32:13] 'm going to have to, I'm not going to 1.5 speed it just because I, uh, I, yeah. Although a lot of people say they slow
[02:32:23]  me down, but okay. Fine. I'll meet you in the middle. We will slightly speed him up. We will give him a 1.25. a list
[02:32:37]  of top companies by the percentage of votes that are upvotes. So we have a data structure sitting around somewhere like this, where we have a list of companies, and
[02:32:45]  each one has a title, number of upvotes, and number of downvotes. And I'm an amazing designer, so I rendered a UI that looks something like
[02:32:51]  this. If we were to build that with Ember, we would construct a template that looks like this. And what this says is it creates an unordered list
[02:33:00]  with the UL tag, and it says for each of the top companies in that data structure, render the title, and then next to it, render the score with a
[02:33:06]  percentage. Okay. Now remember, we didn't actually have a score item in that data structure. Um, all we have are the upvotes and the downvotes
[02:33:13]  and the title. So we have to compute that score as a percentage. Okay. So let's walk through how we would build the JavaScript portion of this application with an eye
[02:33:20]  towards how this abstraction leaks. So first we make a function that computes the total votes given a company. Now I'm going to use Ember for this example because
[02:33:30]  it's a very, very popular implementation of KVO, and those teams have spent a long time trying to make this as predictable and easy to understand as possible. So the
[02:33:38]  observable properties that we have here are called upvotes and downvotes, and you call company.get to get the current value of them. So you get the
[02:33:43]  current value of upvotes and downvotes, and we add them. And our company object has a computed property on here, which is indicated by that dot property called
[02:33:52]  score, and it takes the number of upvotes, multiplies by 100, divides it by the total number of votes, and it converts it to a percentage.
[02:33:58]  Now, one thing to keep in mind with computed properties is that that dot property syntax says, "Hey, whenever the upvotes or the downvotes change, make
[02:34:07]  sure that the score is recomputed." You guys following what's going on in this code? Okay, cool. Right. And while we go through this example, picture
[02:34:15]  how you'd write this code today in React. So similarly in the app model, whenever the list of companies changes, we want to change the list of top companies.
[02:34:23]  And the reason for that is we're resorting this list. So top companies is a sorted list by the total number of votes. So it's the most popular company.
[02:34:30]  And then finally, we instantiate it with a little bit of boilerplate down here, which is mostly made up, but you get the point. So if we were
[02:34:39]  to run this today-- well, I actually built a little test app that randomly changes the number of upvotes and downvotes by plus or minus five as the application
[02:34:46]  goes on to simulate live updating data. And so when you're running that application, it looks like this. Yeah. So you see the numbers are automatically updating, right
[02:34:54] ? I'm tweaking the data model, and the job is updating. I'll replay it again if you can see it. It's very exciting. This looks good,
[02:35:01]  right? You guys good with this? All right. So you guys just approved my diff, and we're going to ship this to production. That's what happens in industry
[02:35:10] . It's not resorting the list. The second item is lower than the third item. Interesting observation. So I've used this example in like three or four conferences,
[02:35:20]  and nobody has caught that. So the point of that-- all right, A right there. The point of this is that like everybody else in this room didn't see
[02:35:29]  that. So it's actually pretty difficult. It's very easy for this bug to slip by, right? So where is that bug in this code? Now you're really
[02:35:39]  on. So the problem is the sorting was wrong, right? So it's probably in this top companies thing where we sort by the total number of votes, right?
[02:35:50]  We're calling the sort method in JavaScript, and let's assume that the sort method actually works correctly. Like that's not the problem, but that's a good check.
[02:36:06]  Yeah. Do you guys see what the problem is? I haven't watched the talk in a while, but my guess here is that this depends on companies, but doesn
[02:36:15] 't depend on upvotes and downvotes because-- no, actually, actually, this is actually interesting, actually. Sorry, no. Yeah. It's because they
[02:36:27]  explicitly listen to companies, but don't explicitly listen to the-- see these-- they're calling total votes, which call the get votes and get downvotes, but
[02:36:37]  they're not actually creating a dependency here because they're only listed-- the way Ember works is it's-- it's all the tracking dependencies are explicit, right? Let
[02:36:45] 's-- let's see what-- what he sees-- sees. Yeah, this is basically the dependency array is missing these-- these values, so to speak. The property
[02:36:55]  isn't for upvotes and downvotes in top companies, so the upvotes and downvotes change to sort of-- Exactly. So what he meant is
[02:37:02] , right now we're saying, hey, when the list of companies changes, re-render the top companies list, right? It's not looking at the individual items within
[02:37:10]  the list. So when you mutate an individual company within that-- Svelte switches signals to solve this problem. You're actually right. Svelte tracking could only
[02:37:18]  track within the scope of the function it was in. Svelte 3 or 4 would actually have broken exactly the same way, funnily enough. Interestingly, Knock
[02:37:27] out would not have been broken by this example because you don't explicitly-- because it has automatic tracking, because you don't explicitly put the thing in. This is-- this
[02:37:39]  is actually, like, this is caused, in a sense, by two things: dependency arrays and the fact that this is kind of dynamic. Like, no one--
[02:37:48]  you can't put all of these in the dependency array, you know, specifically. And these are separate atoms, so to speak, right? In React, because the expectation
[02:37:58] 's immutability and you redo everything anyways, you-- it doesn't matter. You wouldn't listen to this in a granular way. If, like, if you update
[02:38:06] -- because it's immutable data, if you update upvotes or downvotes, that updates the company, which updates companies, right? You have to clone all
[02:38:13]  the way up the tree, so it doesn't have this problem. So, Pete's saying reads should track, right? He's saying you should use signals, right
[02:38:24] ? No, he's not. Let's keep him going. No, but I mean, Knockout, you would make-- if you-- these are separate signals, you
[02:38:36]  would make an observable array, and then you would-- each of these objects would have an observable on it. And then when you went through this process of reading
[02:38:45]  it, it would actually-- this computed would actually get all the properties, and this would just work. Yeah, yeah, I don't remember right, Ember.
[02:39:01]  But yeah, I mean, it's because of explicit tracking that this breaks, which is hilarious when you consider React. So let's keep on going. And you change the
[02:39:12]  number of votes. You need to observe that and tell top companies to update. So the way you do that is with this glorious syntax. This is, like, a thing
[02:39:21]  that Ember made up, okay? Actually, I think they might have borrowed it from Apple, but, like, somebody made this up who was not, like,
[02:39:27]  a long-dead computer scientist. And I like using stuff that long-dead computer scientists have made, or people who have invented the language in, like, 10
[02:39:34]  days, like, . The point I'm trying to make here is not that this is a tricky API. It's that it's not simple, right? We're thinking
[02:39:41]  about our business logic here. We just want to sort the damn list. But with this, I have to load the part into my brain that's, like, how are
[02:39:46]  we tracking changes throughout this? So I'm not just thinking about how my application works. I'm thinking about, how do I tell the framework to track changes in this data
[02:39:54]  structure? Yeah, I mean, what Pete's saying is that using mutable data and re-render stuff on stuff changes. That's what he's saying. Be
[02:40:11] , it's a simple model. You don't have to worry about where the data is flowing in your app. You literally can just blow it out. It removes these bugs
[02:40:19]  because you're not going, oh, I miss tracking this thing. And to be fair, when a lot of people think of signals and stuff, they're worried about
[02:40:25]  this kind of tracking thing. But, like, the places where you introduce the risk of not tracking generally are the places where you give people the ability to explicitly track or unt
[02:40:38] rack. This is why I never initially liked the watch API from Vue. I preferred untrack. Don't get me wrong. Untrack is like
[02:40:47]  absolute too. And it does the same thing. But sometimes people have a false sense of confidence when they think that they're tracking exactly what they need to track. Do you
[02:40:57]  know what I mean? Like, it's a subtle thing, but like, and technically we have an on helper that does this as well and blah, blah, blah
[02:41:08] . I mean, you end up in this zone, but it is, it's, it's, and if we do split effects, we'll do it. But again
[02:41:13] , that's leaving the system. I think that like a different case or argument can be made there. Um, but generally speaking, these aren't effects. These are,
[02:41:21]  this is derived data. This is use memo as Dev was pointing out. Um, and essentially explicit dependencies as the necessary for things to work is, um, a source
[02:41:36]  of bugs, um, that in a sense react didn't care about because there's a mutable and re-rendering, but react hooks said you should care about it
[02:41:45] . So, yeah, I mean, that would actually be an entrepreneur, but he doesn't know how to do it. So it's only supposed to track everything or
[02:41:55]  rerun everything. Yeah. Right. Um, yeah, like in, in modern side, this is very, very interesting. Yes. And this was kind of the conclusion
[02:42:08]  I came with knockout. I did go to implicit, uh, dependencies for effects in solid because rendering was effect. Um, but in hindsight, um, I think that
[02:42:23]  like that was back in 2000, like before I created solid back when my knockout days, this was the conclusion I'd reached as well. Right. You might be
[02:42:33]  selective on how you want things to leave your system, but, but inside the graph, you shouldn't be playing this game. Yes. And it's true with your explicit
[02:42:45]  tracking, because you don't have this problem because you actually, your track is your read. The key part is the separating the description, the track from the read.
[02:42:55]  This is, this is the problem. If your track is a read, you don't have this problem. I, I showed it a bit on stream. This it's
[02:43:02] , uh, uh, kind of Adam signals library and framework, I believe that, uh, Robbie has created, uh, I might have the, the link earlier in the
[02:43:11]  chat. Um, yeah, I, and these are all really legit, um, arguments against stuff, but as are ironically, I don't think signals today have this
[02:43:29]  problem. And in a lot of ways, the react has this problem today, not as bad as this, but it react books introduce this problem. So let's continue.
[02:43:41]  That's interleaving. That's another thing to put in my brain. So, uh, once we make that change, they're resorting all the time, just
[02:43:49]  as they should. Now we fixed the bug, um, which is great, but we just solved the problem. We shouldn't have had that problem in the first place.
[02:44:03]  Uh, this section, uh, you guys, you guys gonna ask a lot of questions later? See, now he's talking about knockout. Take it as a
[02:44:11]  no. Okay. So we'll go through this section. All right. I'll just blow through this other example really quickly. Um, here's another problem with, with
[02:44:18]  KVO. So this is, this is, um, this fixes some of the problems of the previous type of KVO. This is a system called knockout. And
[02:44:24]  imagine we're building a stock trading app or a stock purchasing app where the share price is changing all the time and want to order a certain number of shares. And we
[02:44:30]  see the cost changing. Okay. We want to purchase stock. We use another domain specific language rather than handlebars in our previous example. We use, um, uh,
[02:44:39]  HTML attributes to annotate our DOM, um, for knockout. What this says is basically, okay, I want to bind the text of the span to this format currency
[02:44:46]  function, whatever that current value is. Um, oh God, can you picture using a template language like this? You guys, you guys have no good, no idea how
[02:44:53]  good you have it now. Anyway, this input binds the value of the input to the share. So when somebody types into the text box, the variable shares gets updated
[02:45:02] . And then we update the total cost, um, by computing the cost. We find that the value of the total cost span, um, whatever this format currency costs.
[02:45:10]  Okay. This makes sense. Yeah. The only thing to point out is this value is a two-way binding. It's a data bind. Um, it's,
[02:45:19]  it's not completely implicit, but it kind of comes in the territory when you, when your signals have the read and write baked into them, people can build APIs like this
[02:45:28] . Oh God. Yeah. Alpine and data star. Yeah. At HTMX. Oh man. Yeah. If some people are, uh, gluttons
[02:45:45]  or punishment, I guess. Let's keep on going. Okay. So we have for that currency function, um, basically just slices off all of the last two,
[02:45:54]  um, digits or digits of precision. Um, the attributes are as declarative as you can get, but I don't know. I think semantically, I,
[02:46:08]  it's simple stuff like, like setting like, uh, specific attributes. First of all, the syntax is very verbose, like, because you're actually, you're
[02:46:16]  not just like setting the attribute you're going to set, you're, you're like data bind. This attribute name is this, like, it's very, very verb
[02:46:24] ose, but like more so if you want to talk generally about it, attribute semantics are basically like setting description on the language. When you start putting like control flow
[02:46:33]  in like that and you start doing that, like you're actually warping the semantics. Um, and it is, I agree with Pete that it's a very
[02:46:40]  special DSL like thing. I will, I will say that reacts biggest only place. They only have two things that I feel like breaks the language specific barrier. Um,
[02:46:51]  and why kind of like with GSX, he prop and ref, these are two things that are kind of messing with the semantics. But when you start doing stuff like
[02:47:03]  your control flow as data bind attributes and stuff that impact, uh, descendants and like, like on elements that like, and, or using it to inject like a new
[02:47:14]  context, uh, like we're, we're, yes, you can technically use attributes for that, but we are very much warping the, the purpose of, uh
[02:47:23] , attributes. Yeah. I mean, if you mean from the perspective, using data as a way of distinguishing, see back, the reason they did this was yeah,
[02:47:36]  because back then you didn't want to collide with the, the, the Dom space, um, like namespace. So you put data in front, so you could
[02:47:42]  say that the, Hey, this is not going to collide with any existing attribute or property or whatever. I think something that people don't realize and, and react probably somewhat
[02:47:51]  responsible for this kind of mixture or change of mindset and stuff. Cause they kind of like try to abstract completely off it is a lot of web frameworks actually really tried to follow
[02:47:59]  web standards. So they really did try, um, to, you know, follow the rules and be good players in, in, in the zone and do the right by
[02:48:07]  it. And, you know, trying to adopt web components and make their APIs, you know, resemble web components. So in the future, they could like erase that
[02:48:14]  part of the thing, you know, that, that was also this time period. If you want to understand, like people were really trying to work with the platform other than
[02:48:22]  react. Um, and react kind of showed everyone was, and the way the web platform actually ended up developing was that betting on the web platform was the wrong thing to
[02:48:34]  do, right? Like it, it will get there eventually, but it, maybe, but you know, like, especially you can see today, you know, the way
[02:48:44]  web components have turned out, you know, like as definite proof of this, like, um, generally speaking, um, it doesn't got your back, you know
[02:48:55]  what I mean? Like it, it does at the lowest sense, but you, you have to walk through so much more stuff. It's not solving the problems for you
[02:49:03] . As he said, they were, they're focused more on documents that I think that I've talked to the company, like the Chrome team and these guys have moved
[02:49:09]  past that. Um, especially in the last decade. Um, but like, especially at this time period and obviously because the web stuff moves so slowly, like basically the decisions
[02:49:21]  being made in 2010, 2011, 12, 13, 14, 15, we, we didn't really get them, you know, because of how slow things move until 2020
[02:49:28] . The, the stuff that's been going on since 2015, probably much better place, but you don't get that till 2025. Do you, do you know what I
[02:49:36]  mean? So like, uh, like, I, I think, I think kind of like understanding that puts this a lot into perspective because like, they were really trying
[02:49:48]  to follow the web standards. Um, honestly, closest to standards and it's gotta be probably like something like lit, like one of the web component frameworks, I,
[02:50:06]  I, I, I, any, I mean, but the problem is they're also shaping it. Like, like Justin built the templating for lit and then came back
[02:50:15]  and was like, look, this is what like, he was like, this is what we should build in the browser. And he, they almost went that way. And
[02:50:22]  then some people like, cause they were like, Hey, hold it. And in the meanwhile, we actually showed that like fine grain rendering was more performant than what they
[02:50:28]  were doing in lit. And like, we don't want to be stuck here forever, perhaps, but like, it's kind of almost like a manifest destiny in that
[02:50:36]  sense. Like the, the framework closest to the web standards is the one trying to build the standards. So like thing, all the other modern frameworks are not, I mean
[02:50:43] , when people talk about like Svelte versus view or solid versus all this stuff, I don't feel like they're all in that sense, the kind of the same
[02:50:50]  level of things. They literally use JavaScript and they use features of the platform that makes sense for them, that they can leverage the best ability. And if stuff doesn't
[02:50:59]  work well for them, they just don't use it. It's, it's not using standards for the sake of using standards. It's using standards when they're beneficial
[02:51:05] . You know, uh, I came across a crazy article the other day and I, maybe I'll show it later where someone was like, solid isn't the future or
[02:51:13]  something. It was a response to my web component thing. And the person basically like their argument was, I will even use web standards when I know they are not the best
[02:51:21] . And I'm like, I can't even talk about this on stream. Like I couldn't see where the street, I was going to first cover on a stream
[02:51:27]  at some point. And then I was like, how do I even argue against this position? Like from like where I'm standing, that's like literally the stupidest thing
[02:51:35]  you could ever say. You always choose the best for your user. You don't, or anything you, how do you choose a solution for the sake of like knowing that
[02:51:44]  it's not the best solution. And he basically said like, I'm going to die on this hill where if the web standard says it's the best, I are just
[02:51:50] , it's the way to do it. I'll do it. Even if I know that it's not the best way to do things like there's, there's
[02:51:56]  no conversation to be had there. Right? Like that, that doesn't even make things better. Like if you see something as standard and it's not working as well,
[02:52:04]  it should be, you should be vocal about it. You should talk about trying to guide things in the right way, if possible. You shouldn't, you shouldn't just
[02:52:10]  stand by it when you know what's not the best thing you'd be doing. Let's just honestly, it's hard to talk about it is just how poor of
[02:52:19]  a position that is. Anyways. Yeah. this happens when people come over with Skype personal user experience. It's Litt's argument is that because no one else
[02:52:42]  wanted to invest the time to get through the standardization committees that only it's only lit's opinion that gets into standards. Yeah. I mean, that's, that
[02:52:49] 's, that is fair, but it's also because it wasn't even remotely like the, the react did a reset on our thinking on the web. And it was like
[02:53:00] , don't get me wrong. There's the downsides to it. And there's trade-offs and the react implementation and the Alex Russell's the world and the performance
[02:53:05]  all that. But you guys like, the web is much larger than react. Granted. But for that aspect, those people building those kind of applications react is like
[02:53:18] , if you, if you're trying to be like, look, web components of those solutions versus react, it's not even a battle reacts slaughtered it. You know
[02:53:25] , I I'm not necessarily going to be the biggest react fan of like other frameworks, other approaches, but come on web components. Really? Like it's not even close
[02:53:33] . And then, and you can't even make that argument in a, in a, with a serious face. So don't get me wrong. There are ways to leverage
[02:53:41]  web components. They have their uses. There's things that can be done. There's ways that, but like trying to just like straight up do it, like say
[02:53:48]  like, like this is a direct competitor that these components are the same, the other components like head to head is it doesn't work. Um, so like we kind of
[02:53:58]  got at this really awkward place. I think there's been a lot of effort, especially on the standard side to reconcile that gap of the last couple of years, I have
[02:54:07]  much better relationship with the people and work on the standards now than I probably would have in the past. much better than say Pete hunt and the react team back came in
[02:54:14]  because they felt almost like attacked by this. But the truth is the react guys were right. I I'm sorry. You like, you guys have to like settle it in
[02:54:22] . They were right. You were wrong. Like sinking. I'm not saying this as some like Megan react fan, just understand this. Uh, it might, you guys
[02:54:31]  might have reasons for what you did and the bigger picture and all this stuff, but within the scope of the thing being talked about, react was right. So figure out
[02:54:43]  how to regroup and reconcile and move forward from there. And I think the current group, uh, of people working on the stuff definitely has, but historically, this has
[02:54:54]  not always been the case. Um, okay. Anyways, let's, let's continue going on. He's got a KVO thing. I want to see what
[02:55:14]  he's doing here. Um, we have a stock view model, which is our model that we're creating. Remember we referenced the price and we referenced shares. Um,
[02:55:21]  so those are two observables. Um, the price we have in this example, just randomly vary, um, varying and the number of shares is initialized to zero
[02:55:28] . And then the cost is a computed property, just like in our previous example, except in this case, we don't have to explicitly list off what our dependencies are with
[02:55:34]  that dot properties. In fact, we just call them as functions and the system figures it out. Sweet. So if we wanted to make this, um, a little bit
[02:55:41]  more flexible and we want to either buy a certain number of shares or total dollar amount of shares, things get pretty crazy. So this field is changing all the time. It
[02:55:50]  becomes very difficult for me to like insert something. Okay. Um, because where's the code and it's, you know, resets my input sometimes. Um,
[02:55:56]  and that's because, okay. Do you guys see what the problem is? Well, does he actually show that in the code? How is he writing to the fricking
[02:56:19]  cost? How is he writing to the fricking cost? Oh, because he didn't show the template. He's, he put. Computers shouldn't be writ
[02:56:36] able except under special cases. We just call them as functions in the system. Yeah, yeah, yeah. Okay. We want to either buy a certain number of shares.
[02:56:43]  Well, it's changing all the time, but sometimes, um, and that's because. We have to make a change to our computer. Okay. So he made
[02:56:49]  a writable computed. Writable compute. It's funny. I, I, I actually kind of agree with him on this point in terms of the, this is
[02:57:07] , this is not how you solve the problem. Um, this is how you did use to solve this problem with knockout back in the day. Um, but essentially
[02:57:18] . What he's doing is he's causing this kind of bouncing behavior. The price and the amount of shares that the user is entering are fighting over what is the canonical
[02:57:29]  source of truth for this value. So we have to add some of that crap. I don't even know what it does, but like, that's what you have to
[02:57:33]  do. Anyway, on Angular. Oh, okay. Yeah. And then he just kind of passed by it. It's too bad, right? It's funny. Uh
[02:57:41] , because in solid 2.0, I've been working on some, like, writable computed things, but they, they don't resemble that. And I,
[02:57:46]  funny thing is I think you still has that form of writable computed. Um, I think. Uh, the, the key characteristic that you have to do when creating a
[02:57:56]  writable computed is make it so that the derived state overrides the, the writable state and the writable states ephemeral. In that case, that's
[02:58:04]  that, um, scenario, uh, doesn't really happen. The other thing is he's pointing at the fact that it was push base without actual, uh, synchronization
[02:58:13]  effect. Cause like, I kind of wonder what that example looks like in react with hooks. Cause yeah, links, link signals are more like the, they are based
[02:58:31]  on the writable work that I was doing. Like the newer type of writable, not like the classic ones. There's a slight difference in their semantics. Um
[02:58:39] , where the, the, the derived signal actually owns the writable signals. So the, the derived is higher in the hierarchy where the classic writable computed, it
[02:58:49] 's more like, um, the, it's more like having effects, right? To, to, to signals. The, the, the, the, right. Cause
[02:59:02]  like the, the, the link signal or the kind of writable, uh, computed or writable memo, or actually one of the new base signal APIs and solid
[02:59:09]  2.0, the idea is it's more of a derived, like the use case for it is if you wanted to synchronize something with props, it's a fem
[02:59:16] oral. So if props come down and you go, I want props to, I want to credit something writable so I can update within my component, you know, the
[02:59:24]  count, but I want it to update when the props count comes in too, and have that override it. That is the case for writable. Not to have something
[02:59:32]  bite for the source of truth, but to basically project an ephemeral state on top of a, a derived state so that you can start as the drive state.
[02:59:41]  temporarily ephemerally right over it. And then when you actually push the update up the tree and then comes back down again, you, you basically replace the drives,
[02:59:51]  uh, the ephemeral state with the drive setting and start over. Let's like reset. It's very useful for doing forms basically. Um, but if you notice
[02:59:58]  in that zone, it's actually a unidirectional flow. It's not this fighting for state kind of thing. So like for the most part, what I'm
[03:00:05]  saying is that pattern, he basically tried to find the most contrived, uh, example of a specific API that he could to make it do that. Um,
[03:00:14]  and it doesn't like, you just don't, no one does that anymore. I don't think. Yes, exactly. And Svelte's derived being writable
[03:00:30] , I believe again, works the way that I am talking about. This kind of writable computed, no one, like, as I said, I, I wrote
[03:00:41]  a lot of the modern stuff. You guys have been following my stream. I wrote about this and I've been wrote about this stuff online about five years ago, right.
[03:00:50]  About how I would approach the problem. And in the meantime, solid hasn't been able to, hasn't kept up as working on solid start, but other frameworks and solutions
[03:00:57]  actually implemented the stuff that I talked about. Um, and so they're, they're not this, you know what I mean? Like, uh, the where's
[03:01:05] , where's the, where's the, the, the, the problem with this is. This is literally writing. to these things like even in knockout the correct
[03:01:19]  way to do this is not this the correct way to do this is is to actually make an independent state variable and i used to put a sub observable on the computed and
[03:01:31]  then have that kind of write back in both ways like this is just terrible honestly like look what it does it basically formats down combines these two together and then when you write
[03:01:42]  it it tries to parse and split and write to both of them um the funniest thing is i bet you even with this api and i probably this is where view gets by
[03:01:54]  you don't have to experience what you that he experienced in knockout today like this is just not a thing at all anymore but it he has a valid point for the
[03:02:04]  time period yeah this wasn't contrived in 2010 no i i think so it's it just but i'm just pointing out that this this thing isn't like if this
[03:02:16]  is his only argument against implicit tracking it doesn't say so much basically his first argument was that we should auto track and i think everyone here got it this one is like
[03:02:26]  we shouldn't the lesson from this one is we shouldn't um synchronously like write back um like in a computer like this is basically like writing to state in an effect that
[03:02:41] 's that's kind of like his argument except yeah this he basically said don't use don't use use effect to write state this this actually that's what we saw earlier
[03:02:52]  this this is this is uh this is uh aiden's picture right don't you i'm even back then we he knew we knew don't write the state and use
[03:03:04]  effect that that's essentially what you're seeing right here anyway on angular um so i covered kvo both in its explicit form where you list off the dependencies which has a lot
[03:03:22]  of like you know very easy to understand bugs and implicit kvo where you can still see these problems with data flow and arguing over who is the source of truth the third approach
[03:03:29]  which i think is is better than the kvo approach is this thing called dirty checking which was popularized by angular a couple years ago and this is a again i'm
[03:03:36]  a great designer this is a very common unit on facebook where you put a profile picture next to somebody's name like and we put those like everywhere so let's make a reusable
[03:03:46]  component for that in angular and see how it works so we start by creating this thing called a we basically use this thing called a directive so fb avatar is that component in
[03:03:54]  angular it's called a directive we say hey create this fb avatar and use the current user that my controller is providing does this make sense i don't blame you if
[03:04:02]  it doesn't because it's angular but so i'll get into how the scoping stuff works but basically this refers to this user equals user thing refers to a variable in
[03:04:11]  the scope that controller provides and it'll make sure this avatar is kept up to date always so the way that we do this is in angular we create a new module we create
[03:04:19]  a controller on that module my controller there's the dollar sign scope i was talking about where the controller is um a singleton and then they have to like inject the the temp
[03:04:31]  for like the local then this dollar sign scope thing is where those variables are looked up and so we initialize the user variable on the scope to be my user object you
[03:04:38]  can imagine this being fetched from the server somewhere sent down to some payload and then we want to actually render this data structure so we say okay create this this directive called f
[03:04:47] b avatar and this is our specification for how it should be rendered so i don't actually know what restrict e means i think it means restricted to an element you can only use
[03:04:55]  it as an element but that's a location detail but the point is that this says hey render this template and then make sure that the user always updates when um when the controller
[03:05:03]  when the value on the scope update so that's where that user dot people or user equal sign thing and we're also using this fb pick directive that we can also
[03:05:11]  define so we can use composition here where say okay i want a reusable profile pick component that we might use in a different ui so there's like face piles in in facebook
[03:05:18]  and then we want to reuse it in this other media object now the problem here is that we can't actually use our existing javascript tools to understand this so um if
[03:05:27]  anybody's ever used a linter before like jshint um it doesn't understand what these strings do these are just okay strings so if you want to know whether you
[03:05:34] 're using a directive that hasn't been defined you're so well you've got to run it and you got to hope that you hit that code path and it's really really
[03:05:39]  difficult also if you want to get a stack trace you know if this directive throws an exception and you want to see what other directive was creating it um it's very difficult to
[03:05:47]  get that as well that's because we're rebuilding a lot of javascript in order to use dirty checking what dirty checking does is it just goes over everything in scope and
[03:05:54]  checks hey is the previous version equal to the next version and so you have to pass everything through this scope and you have to use directives in order to build your application
[03:06:00]  not functions the point is that you can't build applications with these it's that there must be a simpler way and the angular number knockout folks focus a lot on um developer
[03:06:14]  ergonomics and making things um work as well as they can but i just think that they're built on some fundamentally worse ideas that's um you might be thinking web components
[03:06:23]  right now um i am kind of coming around to the idea a little bit uh there's a lot of stuff in what the web component spec that is nice being able to customize
[03:06:32]  um how selects work for example it got down um so there's a lot of great stuff in web components but it's not going to be yes yeah i mean he didn
[03:06:39] 't really i mean he was talking about scope he was talking his argument was the fact that like basically there's this like giant shared scope that's kind of like all woo
[03:06:50] ing in but he didn't really there was no broken example here he the the way he detracts against angular is sort of the way we detract against react do you
[03:07:00]  know i mean where he's like like he the templating is part of it but he's like basically saying like look we're kind of like you're doing this thing and
[03:07:07]  then it just all kind of jams together and then the whole thing kind of just like reruns you know like that that's the kind of impression i got from him
[03:07:13]  in the same way we kind of go oh you know react can i just hit the state and the whole component reruns like it's it's that kind of thing and and
[03:07:20]  yeah and he's he was arguing about the the linter and the strings but like it's funny because tooling now has caught up um so that they actually have pretty good templ
[03:07:31] ating processes on compilers and on strings and whatnot he's not wearing a bathroom so i disregard his argument uh it's yeah it's kind of funny that uh that
[03:07:52]  people people it's felt really i called svelte templates string templates at one point and rich got really offended and i think it's because of this kind of mentality i i
[03:08:01]  honestly was like uh it's just when you inject a different language that isn't javascript as a top level scope i call it a string template apparently that has negative
[03:08:11]  connotations because of this kind of thing but i don't know anyway um let's keep on going what does he say about what one is well i'm not gonna watch a
[03:08:20]  little video we're almost to where i wanted to stop your app the way that you structure your application and that's what react tries to solves how do you structure your application and
[03:08:26]  if you like the dom um web components is kind of more of the same regular um uh dom api so i kind of think of it as standard as worst practices it
[03:08:34] 's kind of a bummer um what if we had a reactive javascript there remember we talked about yeah deva yeah so basically if you watch this talk auto track dependencies
[03:08:44]  don't synchronize state don't write template strings there's a talk recipe for solid js yes um pretty much right but it's also react uh kind of no i mean
[03:08:54]  if you view old react as basically auto tracking all possible dependencies it's also react hooks came about because they needed actual control and composition and performance and that basically threw one out
[03:09:10]  the window so um but yes i i i i i i i think i think you're getting the point pete hunt it would be a huge fan of solid js which he
[03:09:19] 's not just throwing that out there like a polyfill for reactive javascript in the dom so let's look at this example again remember this the most loaded companies at the
[03:09:31]  top by the per and then the percentage of the votes that are are upvotes now we had to hack around this and create all these observables or pass things through
[03:09:38]  scope in order to get this automatic updating right otherwise in javascript if you update a variable all of its dependencies aren't automatically recomputed right because program flow goes from
[03:09:46]  top to bottom but imagine that they were so we can write our javascript like this we have the same stuff at the bottom basically we get our general total number of votes
[03:09:54]  on an unordered list that shows the title and then the percentage of votes that are upvotes this is really cool the way he wrote this code by the way because
[03:10:04]  immediately see he's he's leaning into the fact that he's he's using a virtual dom right off the bat like he's like look what if we can just say that
[03:10:17]  you list um has a class name um has this ability to sort uh list take the first three and then map them to um uh dom elements yeah basically yeah react is just
[03:10:38]  javascript this is all just regular javascript there's no framework involved here um we have some helper functions to create the elements but other than that this is plain j
[03:10:45] avascript a slice map um you know summing stuff like it's all pretty basic stuff and what's great about that is that since javascript is like by some
[03:10:52]  definition a real programming language you can actually use regular techniques for abstracting stuff right like you don't have to create these directives and you don't have to create um observ
[03:10:58] able computer properties you can just say oh you know that expression in there looks like pretty ugly i want to pull it out into a function um and you just do it like that
[03:11:08]  you know functions work the funniest thing about this is like i mean he does a great job of bearing the lead here is that if the ember example was written implicit with
[03:11:21]  knockout at the beginning and he was doing his work here um the knockout version is more efficient than what he's doing and it's i don't think it's
[03:11:34]  any more or less code but let's keep on going what's also pretty cool is that we could unit test this separately too imagine that this is like this big complex piece of
[03:11:40]  ui possibly reused in multiple parts of the code base you want the team that owns that reusable piece to be able to test that separately from all the places where it's
[03:11:47]  used again if you can't think about individual pieces separated from each other then that's more stuff you have to load in your brain and that's not simple yeah this is
[03:11:57]  an argument to be fair of why not to pass signals as props because then you have to be aware of whether they're signals or not if you but the react had something very
[03:12:07]  right there that if you treat all inputs as reactive or possibly reactive then the decoupling thing is real and this is a principle that i took on with solid right people complain
[03:12:18]  about the property structuring but if you know if you go look any prop can be reactive you can't destructure and you just take that as a rule then you're
[03:12:25]  basically safe like you like i know it's something you have to jump into at first but what it means is ultimately things will just work in the same argument that he's making
[03:12:34]  for react here so we can't do this today because javascript is not reactive and more importantly the dom is stateful so when the way that you interact with the dom
[03:12:41]  is you say hey i want to set the text of this element to this or i want to change this color over here and then it sticks and if you make another change to
[03:12:46]  the dom that change that you made previously is still there and this is just like that buddy list example i gave earlier where you've got all of these events going um and
[03:12:53]  you're thinking about all this mutation over time and it's very difficult for you to predict what does the whole page look like at a given point in time so rather than deal
[03:13:01]  with the staple dom uh the reacting created something called the virtual dom uh which we like to think of it as a less leaky polyfill for reactive javascript in the
[03:13:10]  dom lessly it's used in a lot of places um i actually have these slides left over from before react was like super popular uh but it's using our search products our
[03:13:18]  insights product it renders these charts g and vml but now i can say it actually like renders well in the best part a um and it will get live updating
[03:13:25]  data and it will render it for you and remember there's no data binding artifacts here i'm just simply expressing the logic of my application so how does this work and so the
[03:13:34]  model we like is whenever any piece of data in your application may have changed we render everything that sounds crazy and it sounds like kind of annoying it's actually really really nice right
[03:13:46]  we're not thinking about like the buddy list we're not thinking about event a b c and d over time we're just taking a snapshot of the data model and then
[03:13:52]  we're re-rendering everything in one pass so you can just fit all that stuff in your head without thinking about the entire history of what your application's done and so
[03:13:59]  what react does is react re-renders everything to a virtual dom representation which is fast and then it dips that representation with a previous representation which is fast and then it only
[03:14:08]  updates the dom with what actually changed so for example if you render um you know a div with a class name and that class name attribute changes we have to figure out hey that
[03:14:17]  div is still there so don't recreate the element just change the class name property to be what the user wanted it to be and this leads to like the ability to build
[03:14:24]  really expressive applications so um this is some definition of expressive power but i like this one better um it's called practical expressivity which is the measure of ideas expressible concis
[03:14:34] ely and readily in a language he is right that the power of using javascript exceeds the power templates but ironically sometimes the the ability to limit um actually gives more power
[03:14:47]  because of uh constraints setting uh limitations which means that things have to work a certain way and by doing so you can actually make other assumptions that are actually more impactful i i to
[03:15:02]  be fair i'm not saying either way or is better in this case i'm just kind of throwing that out there so how much typing does it take to express something how
[03:15:11]  much stuff you have to put in your head and so if you think about all the examples for uh where we did data binding versus the ones where we we used react or the
[03:15:18]  virtual dom we had to fit a lot more we had to type a lot more code and put a lot more in our head um but the reason why people tolerate this low expressive
[03:15:25]  power of data binding systems is they because is because they think that re-rendering and diffing is prohibitively expensive this is why this has never been done before because
[03:15:32]  people think you can't you know re-render the whole application they think that's going to take a while and then they think walking through every single thing that you re
[03:15:38] -rendered and checking what changed is also going to be expensive so nobody tried it they just tried to track you know what is the underlying change in my data model and then
[03:15:44]  propagate that through to the dom with those computed properties or dirty checking that skill this is a great quote every system has constraints um specifically around cost so like i said kvo
[03:16:01]  entangles your application code with observables you got to think about how your data is being kept up to date when you're doing kvo angular style dirty checking means you
[03:16:07] 're not allowed to use functions anymore to build your application you have to use directives and the um virtual dom also has constraints as well it's not perfect it needs a signal
[03:16:15]  to say something may have changed in your application that's it this could be be object.observe this could be any event um the signal that react uses if anybody's
[03:16:24]  used it before it's called set state it's a method that you call when something has changed in your application now the key thing to think about this or to think about with
[03:16:31]  this is that kvo your um your observables are inter are entangled inside your application so when you're building your application you're always thinking about it with angular scope is
[03:16:41]  always throughout your application with virtual dom this signals at the edge of your application you build most of your application not worrying about it and then at the very edge you have the
[03:16:48]  signal that says hey something changed so this is why we built react is to get these properties um but we also had the opportunity because we're just kind of building a system um
[03:16:56]  based on javascript we had the opportunity to do it right um from the beginning so we were able to avoid domain specific languages when we're building this yeah the reason for
[03:17:03]  that is that when you introduce domain specific languages so these would be like the magic html attributes to inform data binding composing things with strings i i think we you guys
[03:17:12]  get the idea i think we we heard it enough yeah yeah i i i my gut feeling is this i mean let's let's look i think it's around 2015 because
[03:17:23]  he's not at facebook anymore um february 2015. yeah i mean you you i think you you guys get the the idea i'm i i i i just wanted
[03:17:37]  to uh yeah don't playing jsx a lot here yeah i i mean maybe he never quite liked jsx but yeah i mean i i i you you get the thing
[03:18:04]  it's it's it's it's interesting because he has a lot of reasonably good points um but like this turned in like these kind of topics turned into something that got very
[03:18:18]  far from where it started and i said the most ironic part to me at least is that this talk is very poignant place to say that like maybe react hooks weren't
[03:18:26]  the best design i'm i'm just he basically i feel like he could have used his like explicit dependency tracking amber example there obviously we didn't need to go all the way
[03:18:37]  deep in here i just wanted to kind of i think it's people nowadays don't have enough appreciation for these old talks um i don't know why i haven't voted this
[03:18:46]  one it's just like this is kind of the basis of what our stuff was built on okay so anyways let's let's just uh i'm i'm i'm ready
[03:19:03]  to move on from from here let's uh let's get back to uh um sharing the screen um whole screen uh let's go here entire screen this one i do that other
[03:19:20]  share screen so that i can get audio um anyway it's a cool talk if you want to watch the rest you can but you you get the gist of it um
[03:19:32]  let's continue on with where i want to go from here uh yeah yeah yeah op10 yeah i mean it's it's kind of interesting to see how we've kind of
[03:19:47]  gone almost full we've kind of gone through a full circle um people are expecting their data to be special now but like basically after this talk three years later everyone's using
[03:19:58]  a syntax that resembles uh kvo right like so whether he likes this or not there's something in people's minds that kind of led them back there of course you know
[03:20:14]  we have that whole uh you know uh we have the the this whole example um you know this is always a risk when you when you build stuff that's way just people shouldn
[03:20:29] 't do this you know this this was his argument against knockout essentially in any case it's a classic more people should check out that kind of content we might cover some
[03:20:44]  more in the future i just um it's it's very interesting to see the difference of where we've been and where we're going to okay um all right what is next
[03:20:54]  i wanted to shift gears here because we originally i was going to talk about atoms uh versus uh signals a little bit later um there's one other topic i wanted to kind
[03:21:05]  of like slide in here very quick um for my bookmarks and i i i do think it's interesting a little bit to at least talk about it because um and it came
[03:21:17]  out in pete's video when he was talking about the difference between viewing systems as events versus viewing systems as like uh like like the synchronized state and the ironic thing
[03:21:29]  is signals became that synchronized state thing like early days they were basically events which is a fair argument from his standpoint but when they became these push-pull systems that we
[03:21:40]  have today they were they're they're lossy you lose notifications but they synchronize basically you got the same guarantees you got with react in a more granular manner manner so
[03:21:51]  like um it's interesting to watch what's been going on in the angular community a little bit because there's like they've been building this stuff on basically events feeding into their
[03:22:04]  dirty checking for ages and then signals are coming in and people are feeling a bit of displacement here quick reminder rxjs can do everything signals can signals can't do everything
[03:22:12]  rxjs can this doesn't mean that i'm saying you shouldn't use signal to be smart about the ratio just standing check since many devs want to eradicate arc
[03:22:19] s 100 for no reason which is kind of funny um sorry there's a common one is angular bros uh it's it's a podcast i've actually been on this
[03:22:37]  podcast um yeah i i disagree with this kind of like they're just different things we've already talked about signals are different than atoms signals are different than observables in that over
[03:22:58]  rules are event system signals are a state system so they like they cover different things um we've probably talked about this in the past i just it came up again and i
[03:23:06]  just thought that it was funny because i've actually built event systems on top of signals and i've tried to build signals on top of event systems like i used the tc
[03:23:16] 39 observable spectra originally built solid signals and then realized it was not a good fit um because i needed to add back all those guarantees in a sense rx has
[03:23:28]  subjects which are you know basic value carriers but they don't have graph dependency guarantees they can't guarantee stuff propagate synchronously or only once right so you basically the value of using
[03:23:42]  rx observables at the baser signals is almost nothing because basically all the code that matters is actually the code that's not there and similarly i had rx stuff
[03:23:52]  in uh like i made solid rx years ago back when i used to notify always on change in my memos but like the whole point of signals is not to always notify
[03:24:00]  be like look value hasn't changed we care about stabilization not about just discrete events so like you there's ways to force the values through you can always return a different object you
[03:24:11]  can you can say equals false or you know you there's ways to force it but then you have to make sure it goes through your whole tree so events make sense i
[03:24:19]  agree actually with pete hunt from that talk because essentially what you the way you should be thinking about things is events exist at the outside of your system and they come in and
[03:24:29]  then they they trigger things and they they're also great leaving the system you know when you someone you know interacts the ui and they trip they you know or do something you
[03:24:41]  know like some kind of calculation happens and then you have to like log something out it's like an effect it's it's leaving your system um and sometimes it's not
[03:24:49]  the polling that you want where you want the event where it's like stabilized like the way signals work it's actually every time this happens you want this to propagate through like you
[03:24:58]  definitely you don't want it to lose signals can lose um events being fired because they literally don't care they only care about the snapshot in a lot of ways signal systems
[03:25:06]  like react essentially like react is just like a really it's like if your app had like one signal instead of like hundreds of them right so like it fits in the same zone
[03:25:15]  you can actually apply that thinking here which is interesting because how many people use rxjs and react i mean yeah i said they're fighting each other the whole argument here
[03:25:31]  was like we're here because when building ui something like 90 of the problems are state synchronization and like 10 maybe our event transformations most event manipulation is trivial or can happen
[03:25:40]  outside the ui layer i'm not saying that events are trivial i'm just saying that a lot of people their idea of an event is oh there was a click handler
[03:25:48]  oh you know you know like it's not complicated don't be on the arcs people like look at our elegant drag and drop solution with debouncing it's like that
[03:25:59]  is a great use for rxjs but a lot of people it's literally just like they were using rx for state synchronization before that essentially when you when you remove
[03:26:13]  all the state synchronization part and you're left with the the event part there's a whole class of apps that literally don't need any rxjs it's i
[03:26:23] 'm so i we shouldn't be suggesting using like one replaces or uh displaces the other but even like i had this conversation with the react or sorry the angular core team like
[03:26:34]  they kind of understood this they're like like obviously we don't get rid of rxjs it just like how much do people generally need rxjs in this world
[03:26:47]  they change can be invented as an environment experience that redux observable yeah and and redux is one of those things sitting at the end edge of your system right and like
[03:27:06]  it makes sense we're at the edge so there there's some people arguing against this so there's that's a lot of people going to get rid of that's what
[03:27:21]  i'm saying and i'm not going to get rid of the replace signals just because well no it's not just because it's because i literally don't need rxjs
[03:27:29]  yeah where is it signals are abstract are just an abstract event snow and i think by the end of this it's a kind of interesting uh conversation matthew phill
[03:27:42] ips um uh for those who don't know matthew phillips obviously like astro core team is yeah cto of the astro technology company yeah but he's
[03:27:52]  also uh one of the maintainers of can js for you know the guys who go deep that was one of those reactive frameworks uh back in the day like like uh like back
[03:28:02]  in the knockout days um so like he's familiar enough with like observables from like a signal standpoint that but the the funny thing is as we go through this conversation
[03:28:13]  um he's basically arguing for events and against signals so i it's funny this is how the conversation started but it's like because basically singles do in some ways do less than
[03:28:27]  events in order to be more do use that constraint to be more powerful um so sure so event management gets pretty complicated and random real-time features i agree that i but
[03:28:36]  most people aren't doing that which would be more common for web dev tools didn't make it so hard i i have an interesting question for mike and i know he watches these
[03:28:43]  videos often enough that he might you know check it out later but but like could the problem be why you don't see more real time is because people can't even get past
[03:28:53]  the state synchronization problem like essentially if you've solved state synchronization then that opens the door to do more stuff with events it makes it easier because you you're suddenly
[03:29:04]  not worrying about that people haven't even got past state synchronization that's why we see less of this stuff and if you yeah like it's not because these aren't hard
[03:29:13]  problems it's just people haven't even been able to get up to the up to bat yeah he's tried to build state management on top of it i mean there are
[03:29:22]  state uh uh there are event-based state systems um like and people talk about the uh like the actor pattern and like x state and the states up but like i mean all
[03:29:33]  that stuff ends up living on the edge of the system because ultimately the ui you know you know it's like it's like game you fps you don't need to
[03:29:45]  render every possible frame in the middle you just need to make sure that at any frame you don't have tearing so like um that's the job of state synchronization we get
[03:29:56]  rid of the tearing um these solutions are allowed to exist it just on the scale of you know from document to app to like video game i guess uh there's not that many
[03:30:08]  people hard on the app side that's been the argument and honestly that's where i've always lived on the app side but there's even less people on the video game
[03:30:15]  side um but it they do exist you know we're seeing more complicated real-time systems and stuff coming in so yes each has their place but when you're talking about in
[03:30:25]  the scope of all angular devs yeah most of you can get rid of your rxds like it's not controversial should all of you definitely not anyway just short little
[03:30:55]  topic let's just keep on going it's it seems that matthew's talking about signals as an architecture rather than as a primitive is that how you see yeah yeah
[03:31:05]  yeah yeah like um if we go deeper into this i don't want to go to the point is more that singles are simplified type event the simulation comes from hiding the root event
[03:31:16]  from you but the consequences signals are lossy you lose intent yeah um as long as your app is purely derivative this is usually enough but when you have side effects it becomes
[03:31:29]  complicated to use so much as usual advice not do side effects of reactive data good the consequence is you have to match two different types of paradigms in your head and people
[03:31:37]  struggle to do that like i agree completely with this chain of thought um i just think that the state pro the state synchronization problem is hard enough that it's worth introducing a
[03:31:47]  system for it and in fact you can view react as one of those types of systems um like in this context of conversation all ui frameworks have something more in common than
[03:32:01]  like this event based things like because this quality that we're talking about is the same in react same as all of it same in all the ui frameworks um let's see
[03:32:18]  it's an attempt to move as much as the clean abstract as possible while ever going distant from the reality outside um yeah i think there are two worlds here it's obvious
[03:32:32]  if you ever try to write a reactive programming language it's definitely inside and outside the system it's best print inject the language in the existing language where it is in native
[03:32:40]  react tries to hide this yeah i mean yeah ultimately getting into like writeable computants and stuff like there's a zone where we can do state writability and we can we
[03:32:55]  can like get there but like in general this is a like there's a reason why things are structured this way to try to keep things pure and derived uh matthew
[03:33:05]  has had he i'm really interested in what he's been thinking in terms of this because he's kind of at odds with this current declarative thing he thinks components are kind
[03:33:14]  of a mistake and he thinks that the current declarative systems basically pushing us into making it about a state synchronization problem is the wrong model so i think from that perspective um
[03:33:25]  it's interesting i don't know what the alternative looks like to be fair but like by his grouping something like solid or react which in a lot of ways are very different
[03:33:39]  actually still fall into the same category of bucket uh i i i don't see any different like almost every signals uh framework actually has a proxy based state um like i i
[03:34:05] 'm going to talk about a bit today actually i'm i've been working like on redesigning parts of our stores and solid they're called stores in view they're called reactive
[03:34:16]  um it's interesting because they have consequential properties that people don't understand because they even even though they are just made of many many immutable cells by nature they actually
[03:34:27]  become a mutable structure instead of an immutable structure which has implications i'm going to get into that in a bit right um but it's actually one of the superpowers
[03:34:38]  of fine-grained reactive renderers because again when you have proxies and you have like arrays of objects with properties in them and you combine it with basically they
[03:34:49]  work like signals like they have auto tracking to where it's used you end up in this zone where you can just skip the whole component tree have the state where the hell you
[03:34:57]  want and without selectors or anything i get perfectly granular updates i'm actually a big big proponent proxies are why i created solid in the first place um i
[03:35:07]  thought people wouldn't be into signals i'm not going to lie i made signals the advanced primitive and i needed i originally create store in solid was called create state and i and
[03:35:16]  i was pitching it as like a replacement for react free access yes we had funks come out it's not classes react hooks hadn't come out yet but i thought everyone would
[03:35:24]  use the object form over the signal form and then people really got into the signal uh composition aspect of it especially after react hooks came out but yeah i mean the the it
[03:35:39]  really comes down to do you care when the whole thing changes or do you care when part of the thing changes if you care when part of the things change you should be using
[03:35:49]  stores basically if you're doing collections at all you should be using stores like models like where like individual properties can change if you are doing like more simplistic wiring controlling singular states
[03:36:05]  then use signals like it anyway uh yeah so let's yeah well let's keep on going uh yeah i'm over half my list now and i'm about three and a
[03:36:25]  half hours in stream okay i gotta i gotta pick up the pace a little bit um okay i this is the part of the stream where we we start talking uh hack mds
[03:36:36]  before we do this we can javascript yeah yeah make stiffing easy and i think that's an important quality uh for using stores okay so let's let's i
[03:36:49] 've been away but i oh god why is it doing this i got this new mechanical keyboard and it's so funny because like um i'm not one of those guys you know
[03:37:07]  i don't care about my vim keystrokes or whatever um yeah it's literally so funny i got the keyboard specifically for this use case so that i wouldn't
[03:37:22]  have to worry about um uh okay we're back um so i wouldn't have to worry about about this kind of stuff um i don't know um um let's see
[03:37:41]  here i don't know oh god this is what happens when you're away sorry give me a second all right uh sorry there's a direct reference here okay so i have
[03:38:16]  to open that on x to actually and i can't actually get to it i think sorry it's i'm trying to like copy it but i'm not in a place
[03:38:38]  where i can actually copy the message um on youtube i can't really copy it and it's actually twitches and they don't like you post links so it's only
[03:38:47]  twitch that does but actually i've never tried this on x i thought that it would just show up as a comment here i've actually haven't played on x in terms of
[03:38:59]  uh the comment huh how do you chat on x anyways like how do you respond to uh okay okay i see if i go into the i see if i go into the
[03:39:14]  video i got it yeah that's why i prefer arches they're more directly built-in events like model view updated and tonight yeah yeah yeah i mean this this is what
[03:39:28]  i was kind of getting at he he doesn't like components he doesn't like state synchronization so like i i love that he says this i just don't know what it
[03:39:39]  looks like model view update is like elm right um but like yeah i i think i talked enough about this kind of stone of things because like this is all fine but
[03:40:08]  like like it's like it's like it's just a different model that as i said signals spoke to me immediately because it was like my fm pga uh programming
[03:40:18]  uh this might speak to someone i just haven't seen like i guess elm is the only thing i can think of like yeah yeah i think it's like i think
[03:40:39]  it's like i think it's like it's like it's hard to understand events in that thing where he's like i did this this is what's my result to be
[03:40:45]  fair you don't have to keep that in your head with a good event system the event system will handle it for you but um trying to write the logic to consider how
[03:40:56]  events interact each other can be complicated which is why things like xstate where you're actually like describing event changes it's like a sort of meta programming and like like it
[03:41:09]  to be fair signals or maybe you could see in another meta program the biggest thing is that they let you once you're in the graph like inside reactv land you return to
[03:41:21]  a place where even though the graph is technically declarative and it all wires together you actually get to write your code snippets imperatively kind of like react it's just in
[03:41:29]  smaller scopes so like you get into the zone where most people understand a b like understand how to write their small pieces that way it's much harder to try and picture
[03:41:37]  how 15 different places come in and how they interact with each other right so like i think this has always been the challenge like when you when you need to find like state machines
[03:41:48]  you know you need it but most people that's very difficult starting point okay okay so hackmd i did a little thought experiment a little while ago um and because uh
[03:42:09]  nick uh from uh he did he works on a lot of cc 39 standard stuff uh ribaldo i can't remember his name he also he's a guy he's like
[03:42:19]  the maintainer of babel um uh he he was like he was telling me that async context was at at risk of not getting into the browser basically they pitched it
[03:42:29]  and then the the browsers were like yeah this is too much work we don't want it like it's too hard to get it to work in the browser do we really need
[03:42:37]  a context or async local storage and he was like i need help from the community to kind of make the argument um so i wrote an uh a write-up for him
[03:42:45]  about that a little while ago actually it's probably in here so i rough note all my notes um um async context is solid yeah yeah client i i basically wrote this
[03:43:03]  for him so he could use it to make his argument and i was talking about the probably the biggest benefit of async context is is the ability to have stack bullets work
[03:43:12]  in the client so that like um we can actually simulate the server stuff because everybody is using uh sir uh async context and server these days with server functions because you need a
[03:43:25]  way to inject the request um consistently the problem is server functions in their wonderfully simple api remove the request object as part of the signature generally um so that they can be
[03:43:38]  transparent with the client you don't have to do it that way i different versions of solid i've played with different patterns of getting in it it's actually a pain in the
[03:43:46]  ass problem though because you can't rely on this in case the person doesn't use uh use an arrow function you can't like if you change the arguments then like it
[03:43:56] 's actually a pain so the the i honestly had been like okay this kind of sucks but then obviously next js goes in and goes look ta-da you can use con like
[03:44:08]  they basically forced every platform to support async local storage um because they were like patch version 13.1 or something they just decided that like they were going to add it for
[03:44:19]  the the runtime works fine number cell and they broke cloudflare netlify basically everyone else in existence um and i i was like looking them and i'm like man
[03:44:29]  geez it would be amazing to have this kind of power because like i debated this api but i'm like i can't use async local storage uh even though this would
[03:44:39]  give us the smoothest butter api i can't use it because no one supports it so you know i because you got to remember like we were working on server functions
[03:44:48]  and solid uh about almost a year before next js got them um i technically there were other solutions doing these kind of rpc things but i think the like the common modern
[03:45:00]  service uh functions did come from solid start and um i'd love to use that api but i i couldn't it next just brute forces its way through and i kid
[03:45:12]  you not within two months every platform supports async local storage except the the client side web platform so stack blitz is broken for everyone so yeah async context uh it
[03:45:29] 's this idea that uh let me open a playground really simple come on is it just the google search bar is broken okay i'm just not going to go up there i don
[03:45:40] 't know what's going on with me sorry not playground i haven't playground okay it's fine we're we're here delete it okay let's start to i don't
[03:45:49]  even care what's in here uh all it's the idea that um i mean maybe if i looked at the proposal that would be even easier but the whole idea is that you
[03:46:02]  can you can save something you know what i'm actually gonna look at the proposal it's easier than me to do it async context no not manager proposal see if i
[03:46:20]  can find it the idea is you can set something in scope like uh like a variable or like on the before the await and have access to it after the await yeah unless they
[03:46:40] 're hacking stuff they still don't because it's not it's not standard yet and the browsers haven't implemented it it's it's it's a kind of pain it
[03:46:47] 's it's very hard to polyfill we in a sense uh solutions like solid and a few others like react who actually use async context they actually we we kind of like
[03:46:59]  semi use our own mechanisms to inject context back in but the whole power racing context is we we don't need to um segue proved ergonomics writing async be cool okay
[03:47:12]  so he's giving a full explanation here but yeah he's talking about zone js uh because like angular literally worked off this where it tried to like basically attach into the biggest
[03:47:25]  problem async await is from the outside of the async function you just have that promise then you there's no way to intercept between when after the await and what happens
[03:47:37]  to the end of the function like the caller synchronously has the context up to it you think about this like uh reactive system we use tracking for for example if someone we we
[03:47:51]  push a global variable onto the stack that says hey this is tracking right now and then um when the function's over we remove it so only things while it's running track
[03:48:03]  so if you put a set time out in the middle and read something that's gonna like the function's gonna run past the set time it will schedule it but then it pops
[03:48:12]  itself off the stack so at the time that that thing gets read no one's tracking and it's the same thing with async await it gets to the promise returns the promise
[03:48:20]  out but then everything after the await happens outside of our scope so like the most common thing that you hear people talking on the client with this is like wouldn't it be cool
[03:48:29]  if you could track after the wait i actually don't think that's actually very cool in a lot of cases but i'll talk about in this article um but the the
[03:48:38]  key part is on the server it means that you can save information between requests so you can go look i'm gonna put the request object on here and then do something async
[03:48:49]  and then when i come back to the this location in code i'm gonna still have the same request right because you can't put on a global because the server supports multiple requests
[03:48:56]  coming in if you rely on a global you could get trounced technically speaking in solid we do use a global for some kind of context before async context and we actually
[03:49:05]  had this trick of like swapping it in so we would we basically we have special primitives so whenever something is about to go async we store it and then because we
[03:49:14]  have special primitives when it comes back we actually have the control to go like okay we're about to call the user's remaining code and we'll set the context back in
[03:49:22]  but it's because but it won't like the user doesn't await anything it's like the only primitive that's in the language that lets you uh handle continuation in the
[03:49:33]  same sort of way is um uh generators generators let you intercept because you control the yield back and you can keep like before you yield it back you can basically do what you want
[03:49:45]  you can set something up so it's kind of forced us into an interesting place because uh essentially the browsers didn't want to didn't want to do it you know like
[03:49:57]  this whole kind of thing like i i honestly don't care about this use case as much but being able to handle pause starts on uh like component context in terms of hydration and
[03:50:09]  stuff there's a lot of benefits to being able to do this this has historically been really expensive in node and it's impossible to polyfill over time there have been performance
[03:50:17]  improvements but this is very powerful because like so i think for a while ago someone in the react core team i think was sebastian mark was like what if all context was as
[03:50:25] ync context like basically making the argument that like maybe you wouldn't even need a context api if you know react could just like you could just set it in the kind of
[03:50:35]  like react scope context and then it would always just resume like within the scope of where your things are running um it's it's an interesting api with a lot of
[03:50:45]  practical applications on the server um but i i so i i kind of started trying to play around with like what if we had async context um in the client you know like
[03:50:57]  what would that change how we looked at things because like i know like the svelte guys are really intent on this because like their new api uh kind of brings
[03:51:09]  a weight to the top level yes and explicit tracking the async without async context right um which is why i actually started looking at this i was looking at metron
[03:51:28]  uh uh i was working r3 uh which is uh milo's new push-based reactive system and he was like i want to take this direction and i was like okay
[03:51:36]  you can do that underlying but there's no way anyone was ever going to like the solid is not going to go that way like we arrived at where we wanted to um like
[03:51:45]  regardless of this so i i kind of started kind of playing around with this and i think the whole async uh i think there's a lot of topics nested around
[03:51:55]  here that i want to get into if possible um so that's why i want to talk about this a bit today because it's the oldest write-up that i have on
[03:52:04]  the hack md um so basically i the argument i've always made about this thing is i know i've been a big proponent of keeping tracking on the signature side
[03:52:18]  thing in fact i'm let me uh dump this into here in case people want their own reference to it remove what what the sorry what oh weird for some reason my copy
[03:52:46]  key has the word remove i don't that was just what try this again i'm having funnest time with this new mechanical keyboard i mean it looks cool i don't
[03:52:58]  know let me let me let me show you this new glowing mechanical keyboard thing i got i got i actually got this when i got hired at sentry um i'm not
[03:53:08]  usually the type of person to use one of these but you know here here we go it's it's even got glowing lights i don't know if you can see that yeah
[03:53:14]  probably not uh it's like no ryan you can't do that all right let's try this again i mean did it i mean did it lose track of the mac
[03:53:37]  shortcut buttons let me try here like maybe it thinks i'm on windows right now okay done oh actually you know what this is probably the wrong share link sorry yeah this is
[03:54:00]  the right share link ignore the first one anyway um okay i know i've been a big prone to keeping tracking on the synchronous side of things this is also because you want to
[03:54:19]  hoist out expensive async stuff anyways like pretend you're grabbing the most liked comment off a user's favorite post if you have a sequence like this like await the user
[03:54:26]  await the post await fetch you know and they all depending on these different things it would be terrible to refetch everything just because the light count changed right i know above isn't
[03:54:37]  reactive but conceptually you want to break apart that process user post and even comment probably all should be separated from finding the most like as you can see it's basically right along
[03:54:45]  the await boundary where you want those separations you you basically want each one of these in a separate computation how different is this if if it looked like this see now you
[03:54:58]  see i'm not fetching anymore i'm assuming that the fetch happened above in parallel and now i'm just awaiting the stuff now the the consequence is something that arguably be synchronous
[03:55:09]  after resolution is always going to be async but you can't but you aren't doing a bunch of extra work the promise is essentially cast what what i'm trying to say
[03:55:17]  here is the problem with this example is because you're fetching here every time right if you actually did the fetching above and your process just did the await you're
[03:55:27]  actually not doing much extra work but await is forcing everything here to be async um even if it doesn't need to be like if the user hasn't changed um you know
[03:55:39]  but the like or count changed yes this is not going to fetch a new user right but it will force this to not be resolvable synchronously it'll you know micro
[03:55:52]  task queue each of these not a big deal for the most part but it's just something you have to consider it it would impact something like hydration don't get me wrong because
[03:56:01]  signals can resolve synchronously this is infinitely better see so i i you know but basically if i separate these into separate processes these are all separate create asyncs and then
[03:56:17]  create a memo and and do this in this case even if the above multiple async resources read a single computation it'll all run as expected and the reason is because like i
[03:56:27] 'm saying like even if we read all of these in here because um they they can be accessed synchronously if they're all available there it won't go async right
[03:56:39]  however with our throwing mechanism you can end up with this so i've been working with something like essentially with um where you throw on async that's not available right so
[03:56:54]  if you did a you could end up a place where like it does an expensive calculation and redoes the expensive calculation because you end up throwing it those signals are async there
[03:57:04] 's a chance that the first couple expensive calculations rerun yes there are no side effects so from the correctness standpoint there's no problem which you can't say about create effect
[03:57:11]  hence why it's split but we always restart basically i'm i'm just trying to create an argument for why you might want um continuation right so do you do you guys
[03:57:27]  understand the difference between uh between um uh when i when i say continuation what i mean what i mean by it right because there's there's a couple different mechanisms i'm
[03:57:45]  trying to think if i want to scale it or out but when you have uh a try catch and there's an error you lose the context stack right you basically somewhere up in
[03:57:57]  the stack you have a try and then execute some code and wherever it errors underneath it will throw it up to the nearest catch and the catch boundary will will do those logic
[03:58:10]  and then it continues from that catch boundary so um uh yeah i guess i'll draw this let's go white um medium size let's blow this up a bit so i
[03:58:27] 'm not so huge all right let's try this so what i'm saying oh yeah this is it's medium size but it's actually pretty small okay whatever so what i'm
[03:58:40]  trying to say is let's say we have some tri block right and then we have catch and see i don't know if i should be using a scale draw or code
[03:58:52]  editor for this but my point is you're going to call some function here right and no matter how deep down this function is because you might you know that function function might call
[03:59:08]  function two and function two might call function three the the way this executes is if somewhere down here function three throws something i don't really care what it is um
[03:59:32]  what ends up happening is you run here go down the chain throw something and then it runs and handle error let's put the error in here and then it goes to the next
[03:59:51]  line right so essentially this is not continuation this is how javascript works right uh continuation is more like async await where um essentially it gets to the point where it
[04:00:13]  can't run anymore and then it pauses and then it continues right in a lot of ways um yeah i guess i can't talk about this without coloration can i
[04:00:28]  there's a lot of similarities between async await and and errors and the reason is like this this was talking about error catching right let's make this large okay error catching right
[04:00:44]  but what if we had the same uh kind of code example and we're talking about um async okay let's talk about async well we're gonna update the code
[04:01:03]  a bit as we go to get to where we need to be let's say but let's let's start our code example with async and in async we're in
[04:01:11]  a block and we're we're gonna first of all let's just call our function we're gonna come back and check check check ourselves later but generally we call we call
[04:01:23]  our function now the the first thing is that yeah let's let's let's actually i'm trying to think of how to describe this but the first thing is you know is
[04:01:40]  if you just call an async function like this it's going to get to the next line once it gets to the first await in that stack if you actually want to
[04:01:53]  await it like if you actually want to you know process it and then get to the next line you know kind of like how we have this track catch actually get to the end
[04:02:06]  of it you actually need to await it first right got it now the the thing is if we have function okay maybe i can just copy this make my life a lot easier
[04:02:25]  yeah let's copy this if we have function like this and punch to um and instead of throw something we're like await something well we have the same micro problem all the
[04:02:41]  way up the tree right because if function three isn't going to await this await unless you also await function three and function two same problem and in fact to tell the the
[04:02:54]  the the the thing is async we actually have to do this so there we go now we get the behavior that we're expecting but you you kind of see like air catching
[04:03:12]  um there are similarities between air catching and async except async actually continues as in when this finishes uh let's get in here let's go in here this is actually
[04:03:37]  next this next happens before this next right this is next to essentially um which which is um obviously when you throw you can't continue right but the continuation means that you can
[04:03:57]  actually continue here and actually have this next run and then this next and this recursively back up the stack before you hit this next evergreen meme i hope this is related dev
[04:04:13]  and you're not just sending me on a wild goose chase but i will i'll take a look uh yeah this this meme never gets old function a function b function as
[04:04:27] ync function yeah yeah yeah yeah yeah this this is this is where i'm getting to this is this is uh this is called coloration right um uh to do to do
[04:04:42]  where where's my escala draw right we've had the color basically our whole graph but we get continuations out of it so another way of doing continuations is with generators
[04:04:54]  as well so but they require coloration so we're in this kind of interesting zone because i'm going to argue that uh almost all async pretty much requires some type
[04:05:11]  of coloration like every solution you can think of like in a sense uh this is direct coloration but if you if you start thinking about um null checks let's pretend
[04:05:26]  let's pretend you have a system where something is null until it's resolved if you if if you pass it through a bunch of functions you're going to have to check at
[04:05:38]  each point the potential of this thing being no like i don't get me wrong like i understand that you can check higher up in the tree but if these functions are designed to
[04:05:46]  be reusable in different places uh so like function three can be used used under function two but also under function 56 you're going to have to check if it's null if
[04:05:57]  if it can accept null nullable values basically so regardless of what solution you do you need this async always has this coloration right and like even if you're not using
[04:06:17]  async functions you either you know and you're trying to be smart about it like use signals or something you know you still are going to get to a zone where you
[04:06:27] 're null checking or you're waiting like there's some kind of syntactical weight because the code has to be aware of how to handle the situation it can't handle there
[04:06:38] 's only one mechanism in javascript that can handle situations that it doesn't know how to handle in a colorless way and that's over here until we threw something
[04:06:50]  yes there's a starting point but in between the starting point and everything else here there is no coloration now there are programming languages out there and javascript is not one
[04:07:03]  of them that have the ability to do error error catching in a continued way without coloration basically throw something here and then if it's handled here properly continue from where it
[04:07:19]  threw from javascript unfortunately is not one of those languages but it is an interesting property um in a sense it's funny people have like these technical names for these things
[04:07:32]  but if you ever heard the term algebraic effect um this is what they're talking about i don't get caught up in the old camel lingo or whatever but essentially they
[04:07:41] 're talking about a source of being able to do continuations in a colorless way okay why am i talking about this right now um i i yeah dev again with the
[04:07:55]  link uh dan abramoff has a great article about algebraic effects and he goes through this whole thing about like the the like basically if you can ask a specific type of
[04:08:13]  question like i don't know how to handle name or an aspect i don't know how to handle logging you can write your code in a way that goes like look i
[04:08:21]  need the log here but i don't know in the system how logging's handled ask for a logger and then something in like a try catch basically goes uh resume with the
[04:08:31]  logger like so ask your name resume with the name that this is a simple example this is a great article honestly this i don't have to explain it thanks to dan ab
[04:08:38] ramoff um but the the the reason i i'm bringing this up is because almost um i i i as i started like looking through these this kind of like async
[04:09:00]  context kind of thing this this is the fundamental um challenge here if you want things to be colorless um you basically end up throwing this is why react throws promises um and
[04:09:20]  but like there's no solution of like you you either you you either colored whether it's null checks or async functions or you you're basically throwing like there's there's
[04:09:36]  no actual realm in the middle between between that so it it just this is an interesting problem to solve because if you throw you have the risk even when you're pure of
[04:09:46]  doing expensive calculations again like in a sense you kind of wish that you could continue but um i don't know like that sorry i just need that basis to continue with this conversation
[04:09:59]  hopefully that makes sense to people um you just got all the links today effect language what is this the research level language oh it's a brick effect i mean you also find
[04:10:27]  stuff like this i believe in like ocaml and other functional languages i i'm anyways continuing on where it's going here now in javascript there are only two
[04:10:35]  forms of continuations generators and async await unfortunately async await we can't reinsert our tracking context so you have to use generators or we have to wait for ac context
[04:10:45]  to arrive so what i'm getting at is not exactly there's a third option which is manually pass the tracking function um right so this this this is kind of like the
[04:10:58]  thing is like if you did want to say track uh across boundaries you either have to use generators or you have to pass the track count cities this way you can track after wait
[04:11:13]  except sure that's fine increasing but you need but maybe now you need it in create memo create effect pretty much you need to switch anywhere because anywhere that could be async
[04:11:22]  downstream you still have this problem because async reads you know like like async is innately causes color coloration so you can't get away with just making your async
[04:11:39]  primitive like this basically every everything needs to be um how do we get that into jsx i mean robbie has answers he talked about earlier but i'm not i'm
[04:11:51]  not sure i'm convinced moreover you need to be able to support async functions and promises everywhere it's hard to become this coloration issue again tie script isn't going
[04:11:59]  to be our friend if you put a weight inside the jsx expression it will want your whole component to be an async function yeah i i was playing around with this
[04:12:06]  the svelte syntax right right and i was like okay i mean when i say the salt syntax i obviously i was looking into like years ago before svelte's proposal
[04:12:16]  but i'm just i just for similarity i was like playing around with a place i put a weight and they're like oh you can't do it but the problem is solid
[04:12:24]  compiles up the functions so the actual only way to make this shut up is to do this um oh sorry uh am i not yeah yeah sorry yeah is it's to
[04:12:35]  do this um and like sure our compiler could fix this but this is like not what you actually want you don't want an async function you just want like if you look
[04:12:47]  at the compiled output you want you want see it's still airing here because you actually want the async to go here like it it conceptually works right like like
[04:12:58]  um but the problem is that this the syntax is disperated like you need a much like this is not a compiler level thing that i could do unless i control the pars
[04:13:12] er as well like basically you know like with jsx i only actually control the compiled output i read the ests but i don't decide what the parser can read
[04:13:22]  you need a fully custom parser like something you haven't felt to actually accomplish this because otherwise like this is like removing this is an error for babel it can't get
[04:13:33]  past that um because it's just not correct javascript syntax even before we talk about how we can compile it anyway just a funny kind of side notes but let's
[04:13:47]  continue here while this is a solution right now i don't think it'll ever be the ideal one firstly where this matters is the minimal case if you force coloration on everyone
[04:13:56]  everything will just be chain of promises people will resolve high just to avoid this mess secondly when other solutions appear this will look overtly complicated yes jotai has this api people
[04:14:07]  aren't passing jotai atoms through their props and using their the hierarchical trees it is acceptable there but i think it would be very challenging the core state management and u
[04:14:15] i framework as i said robbie's challenging this assumption but this is what i've concluded so what can we do if we want to give people the superpower in the future without
[04:14:22]  completely butchering their code what if you throw by default on access but signals are also venable i.e you can await them they're both promises and signals then most
[04:14:33]  of the time you wouldn't but at some time in the future when async context arrives we could add a feature to be able to let pure computations take async
[04:14:40]  functions and have continuation since all computations need to be able to handle async anyway in 2.0 it isn't that far a stretch that when the time is right we
[04:14:49]  give this power that way when async context lands people will find it worked just and people find that work needs to be sequential we let them be fair we probably could do
[04:15:00]  this with generators today but i have some reservations mostly i haven't thought through this too hard and i think async context we can do almost automatically the the catch of course is
[04:15:09]  the random function value isn't going to be venable right it's the is signal problem right because anything can be reactive if you want to wait an arbitrary expression maybe some props
[04:15:21]  you need to pass through you know you you might need to use like a resolve helper what this does is turn any reactive expression into a promise and it could shortcut if the
[04:15:30]  input is already venable but then you could build it could be a built-in mechanism so so what i'm saying is if you directly have something from create async you
[04:15:38]  could just await it or create memo or anything or if you have some kind of expression like a props expression you could wrap the expression and resolve and await that if you cared about
[04:15:52]  it but of course you could always just do this knowing the function might run twice so what i'm saying is like this is an optional thing by default we throw in the
[04:16:00]  memo but if you it's really important that it doesn't run twice you could have the option of awaiting it this is just a quick thought but i think if we were ever
[04:16:10]  convinced giving this power this is the way to go mostly that we don't have to force promises everywhere especially in things like jsx which aren't going to have that sequential problem
[04:16:19]  right it's fine-grained and we give users the ability to stuff if they really want to of course the performance could really suck with async context and using weight
[04:16:27]  anyway and this isn't worth doing but it feels more in line what we're going for basically what i i was just making this argument for why um i'm not interested in
[04:16:35]  changing our apis to using a weight directly or using the get tracker from my perspective um not only is it not necessary in the 90 case it's also um or actually
[04:16:50]  probably like 95 case it's it's also solvable in a future like we we haven't closed off the design potential here how our stuff works um i don't know topic
[04:17:02]  interesting but it was it was just kind of a thought experiment because i'm as i said i'm not even convinced that you don't want to separate these like why aren
[04:17:11] 't these already memoized do you know what i mean like why like there's probably some scenario where this is your case but it's interesting to kind of open the space because
[04:17:22]  you definitely don't want to do it between fetches and you kind of don't want it to force async when things can be synchronous so the react i think the the
[04:17:32]  best solution is making it opt-in um for people where it's really important it's just um like because obviously awaiting a micro task is better when expensive things are involved
[04:17:50]  than say throwing but that's a choice that i think the developer has to make and i think in 99.9 chances throwing is the correct answer it'll be fine anyways
[04:18:02]  but some people might disagree but that's why i want to talk about this today just kind of a mental experiment uh how are you doing chat you still with me okay let me
[04:18:18]  look at this if everything's async there's only one color true the funniest thing is i mean you you do pre-act right have you done much react since suspense
[04:18:42]  has come in the the there is challenges there in that the fact that like components re-render and it's like a very widescreen thing but non-null
[04:18:50] able async is incredibly a blessing like react basically you get something here and you can pretend that user is always user even though you're fetching it like you you don
[04:19:03] 't have to null check it and as long as the scope of the lines the durations that's kind of clear it actually makes writing the code way simpler because you remove all
[04:19:15]  the coloration throughout all the null checks all the things like all the conditionals all the like it basically um like drastically improves like i i don't i don't think it
[04:19:27]  actually ends up being that like basically if you're in a world where you have to pretend everything's reactive anyways pretending everything's async is actually not much of a stretch
[04:19:35]  at all like i could see in a like it's plain world that this would be different but if you're in a world where like like you have to write stuff in such
[04:19:42]  a way that it tracks that you're wiring stuff implicit like by by saying like okay uh props id is reactive so we have to put it under this create async reactor we
[04:19:51]  put on the memo put this in the js if you're already wiring the stuff that way kind of naturally which happens just by writing stuff in a way that's declarative
[04:20:00]  saying like this uses this you're creating those bounds for findings to you already once you do that for the most part um i mean obviously somebody debugging uh specifically following the trace of
[04:20:11]  the code will see this and be like okay that's something but for the most part from a logical standpoint it's not like it's not it's actually not that big of
[04:20:20]  a deal um coloring is a feature but it also makes uh refactoring incredibly expensive and it moved the i think the reason reacted suspense and the movement is you don't
[04:20:37]  always control all the components in your tree like someone introduces async somewhere you have to basically refactor the whole component tree like in terms of props of what's what's
[04:20:49]  allowable i like there's something very attractive from a modularity standpoint and the ability to kind of move stuff around um to be able to like remove this color oh you
[04:21:13]  mean remove the create i'm i i don't know it's kind of served as a as a like a fixed point on the api shape i i mean it's interesting
[04:21:28]  you uses three characters recreates five characters so that all obviously uh just kind of stands the way stuff and people feel as bulky but it's also kind of like i
[04:21:37]  mean this is silly i just the people who talk about like shortness and svelte i i i i'd almost add a character into the api just to kind of
[04:21:47]  point out how ridiculous that is um i i'm i'm just saying like i i don't know i i never actually thought about it it's concise pattern i don't
[04:21:55]  want to switch to use i know viewed did that but use has a very specific meaning in the vdom contents and we didn't we needed to differentiate ourselves from react even if
[04:22:06]  it's just a matter of changing the wording slightly Serious question. Maybe you don't do then and they just have resolve for everything. I mean, the problem is
[04:22:28]  like, it's the wrapper function API, which isn't bad. This is what Bobby does. It's an arguable thing. I just, or use reacts. Use
[04:22:35]  is another argument for it. It's just weird that you, if you're already wrapping something to then do the second wrapper, every time I go down this path, and
[04:22:42]  I think I've done on the stream a couple of times, I just end up back in the same API again and going like, no, this just doesn't make sense
[04:22:49] . It's continue. You know what I mean? Like it just, it just doesn't make sense. Function coloring would make the split effects make more sense.
[04:23:00]  I mean, this is why it's funny though. This is why we have the split effects so that we could basically say the front half is the only thing that's interrupt
[04:23:12] ible, but I get it. Yeah. So preact has suspense. Yeah. Yeah. Right. They have suspense, but not transitions. Yeah. Yeah. Yeah
[04:23:21] . I mean, I get it. The problem is I actually, I feel for react in this way, but it's actually their own fault. So I don't care
[04:23:31] . It's just when I was building the, uh, the suspense permanence and stuff in solid at the same time that react was building the stuff, except I was releasing
[04:23:37]  and I was building solid start built on it. And then I watched remix rebuild the whole thing without it. I felt kind of bad for the remix team. Cause I was
[04:23:37]  like, man, everything they're doing. is just a worse version of this. And I understand they can't do it because react hasn't released it. And I
[04:23:43]  think, I think that like that's fine. And react hasn't given the tools, but the actual solution as opposed by react. And I know they haven't given
[04:23:57]  people the way to do it because they're like, Oh, you have to use with RCs or stuff is actually better than what reactor tan stack is doing. It is
[04:24:05]  just actually strictly better. It's unfortunate. They can't get to it because of how reacts up. So you get it. It's just a better solution. Anyway
[04:24:34] , I mean, the, the problem is like, I mean, decorators are also not spec, but you can't decorate a function. As far as I know,
[04:24:46]  you can decorate, like, you can decorate, like, you know, the, the problem is like, I mean, decorators are also not spec, but you can
[04:24:46] 't decorate a function. As far as I know, you can decorate, like I I've looked at syntactical things. The thing is. You can decorate classes
[04:24:57]  and class methods, right? I just thought it never bothered me anyway. Yeah, yeah, yeah. I love the frozen reference. But, um, uh, the
[04:25:12]  funniest thing is when you actually have a working system that gets rid of this, it's so much better. I'm just so sad for the react apps who haven't experienced
[04:25:21]  this. Like in solid, this has been our last five years. The funny thing is solid is nullable. So it's like not perfect, but having good working
[04:25:29]  suspenses. When I take the 2.0 code, it's just like, I get that feeling I get from react with suspense, but then combined with the single,
[04:25:39]  it's just like, this is, it feels like, I'm usually not the guy that played like the hype train, but it feels so right. Uh, it
[04:25:45] 's so hard because you try to convince people like dev sitting there and doing their thing. But like the second you touch it, you're just like, wow. Like this
[04:25:52]  is how it should. Like it just, it, it. I'm, I'm excited for solid 2.0. That's all I gotta say. You can
[04:26:00]  use either both products in slightly different places. I think if, if tan stack is doing what you need, you should probably use it right now. Cause they have more dedication
[04:26:12]  on getting, uh, building it out at this moment in time. Solid is kind of like, are there the people who are working on solid start are split between tan stack
[04:26:21]  and solid start right now. Um, because the work that's fundamental to moving solid start forward is also being happening in tan stack. So like, it depends. There
[04:26:29] 's benefits to both of them. Solid start has some more advanced features in terms of communication protocols. Uh, I did see tan stack just got the selective rendering thing, uh
[04:26:38] , with that star, which is cool. Something like mechanically you can do in solid start if you use like client only components, but they built into the config, which
[04:26:46]  is something that I always had in my head, but I just like with the route config thing, but I just never got to doing it. I actually think it'd
[04:26:51]  probably be pretty trivial for us to add that feature. I just, um, but that's an example where tan stack is taking some of the refinement farther on stuff that
[04:26:58] 's mechanically possible to do in solid start, but isn't actually being done today. So like, I think that like, um, from that part, tan stack start
[04:27:08]  is refining at a faster rate than solid start is. Solid start was always a bit more primitive, but it also. They're going to have different roles when all
[04:27:15]  said and done, uh, tan stack start. It's going to be like a next JS full fledged framework, all the details. Solid start is going to be probably
[04:27:23]  it shrinks down. Like it's basically our create react app. It's basically like our create beat app with SSR. That's the goal. So I'll start
[04:27:34] . So over time, these projects will, um, I called it start. I called it start because I literally wanted it to be like a starter template. Um,
[04:27:43]  I, you know, low in opinions, low in frameworks, which puts a different place from the task, which has all these built-ins. My eventual goal was obviously
[04:27:51]  have stuff, uh, be able to just be built on top of solid start for solid. However people wanted, including things like tan stack start, but we're going to
[04:27:59]  see, it's going to take a while for those efforts to completely like merge together. Oh, really? They, they, they added single flight mutations. Haha.
[04:28:14]  That's awesome. Uh, let me see that dev. Where, where, where is that? Let me grab that off Twitch. No, that's the wrong one.
[04:28:23]  Uh, let me grab that off Twitch. Now this is your spicy take. This is different. This is. Sorry. This is what I was talking about a minute
[04:28:40]  ago. Spence enables a bunch of cool stuff. React render, blocking, promise, caching, e-recaching components. So the only downfall is signals.
[04:28:51]  It's like you had to put something there. Yeah. Anyways. Yeah. I mean, this is why it's really hard for us to talk about it, but sorry
[04:28:57] . Uh, is it, this is a SvelteKit link. Okay. Ah, man. If only solid could get more funded developers working on stuff. We
[04:29:06] , we have a lot of good ideas over here. Um, but yeah, I mean, this is how all single page apps should work. It's a shape of
[04:29:14]  frameworks to come. And I said it, uh, I guess about a year, a year and a half ago. Um, tan stacks following suit. Uh, every
[04:29:21]  people, this is what frameworks will look like. Not RSCs. What we did with all start. It's fine. I actually think there's a world where something
[04:29:27]  like RSCs eventually gets there. But I think what we're going to do is, uh, we're going to do a lot of work. Um, we're
[04:29:29]  going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we
[04:29:32] 're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um,
[04:29:35]  we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work.
[04:29:38]  Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work
[04:29:41] . Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of
[04:29:44]  work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot
[04:29:47]  of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a
[04:29:50]  lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. We're going to do a
[04:29:53]  lot of work. Um, we're going to do a lot of work. We're going to do a lot of work. Um, we're going to do a lot
[04:29:56]  of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a
[04:29:59]  lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to do
[04:30:02]  a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. Um, we're going to
[04:30:04]  do a lot of work. Um, we're going to do a lot of work. Um, we're going to do a lot of work. We're going to do
[04:30:08]  a lot of work. If you haven't watched this talk, uh, uh, which talk is this talk? Oh yeah, no, I actually haven't watched
[04:30:40]  it. I saw the proposal, but I actually haven't watched. This is right around the time I took off. This is the salt talk that he did about the as
[04:30:53] ync stuff. I haven't actually had a chance. I should check it out. I am very interested in what they're doing in a, in async as well.
[04:30:59]  Um, yeah, it was fast. Anyway, um, anyways, this is cool news. Um, I definitely, definitely interested to see things progress like this. It
[04:31:22]  makes sense. It's, it's, it's single flight mutations. I'm, I'm glad that. I don't know if that is that the term people
[04:31:29]  use now. I'm pretty stoked on that. As you guys know in the stream, uh, single flight mutations, uh, started as a hack MD in this,
[04:31:39]  in this, in this, uh, in this, uh, in this thing a little while ago. Um, probably in this one back in January, 2024, but
[04:32:02]  yeah, um, you guys were there in real time as we figured out how to actually make this work. Um, well, since both of them are based on single
[04:32:17]  flight mutation, the stream should follow this thing. Yeah. I wonder if this is the first time I actually used the term. I might've used it before this. Cool
[04:32:23]  that it's becoming the term. It's like a thing. Didn't really market it, but I'm glad that. Glad that. Um, anyway, uh,
[04:32:34]  where was I? Right. Talking hack MDs. I got a few more. So it is. Uh, you know what though? Maybe we leave proxies for
[04:32:52]  the streams getting a little on the longer side. I think I have a whole bunch of topics, uh, hacking these about projections and proxies. And stores,
[04:33:02]  um, all three of these. I'm still working on this one. I'm not even done. I'm going to leave that to next week. We can talk more
[04:33:09]  about, uh, uh, nested fine grain reactivity next week. Uh, I can save the topic. Let's let's just switch gears into this. We can
[04:33:17]  JavaScript now. I think, I think, I think, I think we are, uh, we're at that time of, of the stream. Yeah. We're
[04:33:32]  at that time. We're at that time. We're at that time. We're at that time. Yeah. We're at that time. We're at that time
[04:33:39] . Yeah. We're at that time. We're at that time. We're at that time. We're at that time. We're at that time. Yeah.
[04:33:46]  We're at that time. Yeah. Or in passing. Yeah. He did not. Of course not. But he, all the features are basically the features that I
[04:33:54] , yeah, of course. Yeah. Server function. I mean, the pattern just, it just, it just fricking clicks. So it's so crazy though.
[04:34:05]  Cause like it took, it took more time in HackMDs and the streams and talking through this stuff than actually implementing it. And it's like, oh man,
[04:34:13]  I wish I had more people implementing stuff. Anyway. Yeah. Yeah. Experimenting with server functions. Right back to the first V talk. Yeah. I mean,
[04:34:27]  it's one of those, it's always tricky when you, if you spend your time on the R&D side, you're obviously going to be the first people to
[04:34:42]  stuff. So like, you know, it's, it's, the other frameworks are watching now. So stuff is proceeding much, much quicker, which is cool.
[04:34:51]  It means the ecosystem is moving at a much faster pace. Right? Like, like solids rendering technique has arguably been the best way to render the Dom for like, I don
[04:34:59] 't know, seven, eight years. Um, but you know, it's only been the last year that people have like other frameworks have caught up to the, to where
[04:35:09]  that is, uh, server functions did not take that long. Uh, after we introduced them four months later, quick added them about, uh, almost, uh,
[04:35:17]  almost a year later, next.js added them. Um, Svelte kit's going to be getting them now. Like rich is great at introducing new topics. So
[04:35:28]  maybe, maybe, yeah, let's see if we can borrow from that. Um, the, this work that we're doing on async, I think is incredible
[04:35:39] . Um, I know Svelte's doing a lot of async stuff. I still like our solution a little bit better, um, because it's even more un
[04:35:46] blocking, but we'll see how things evolve in time. I think the stuff that we're doing at stores and projections is actually more important. Um, so yeah
[04:35:54] . Uh, if you're interested in the async stuff that we've been showing off, uh, the, then, um, um, go to my signals 2
[04:36:12] .0 stream from about three or four months ago. Uh, it was in February. Yeah. I did a stream in February showing the stuff that I work on. And
[04:36:21]  basically the whole first two hours of the stream is focusing on this. Obviously we don't have the nice polished version, a conference talk version. Um, but I have
[04:36:28] , I show off basically working examples of how this approach is completely groundbreaking. No, no, no, no. They didn't talk to me. They do not like signals
[04:36:44] . Everyone's like thinking that we were, the remix is not in our camp. As I said at the top, they, they, they never talked to him about
[04:36:55]  doing so that was never going to happen. Um, anyways, uh, let's, let's switch this around to this week in JavaScript. Give me a second to get
[04:37:06]  my screens ready. Well, as I said, we'll, we will definitely talk about proxies and signals and, uh, stores and all this stuff next week.
[04:37:14]  I had enough stuff, thankfully with, uh, with talking about algebraic effects. Um, and talking about the react videos. You guys kept me talking today, which
[04:37:25]  is not hard to do, but definitely. Wasn't part of my original plan. So let's, let's see if what we can do. Um, okay.
[04:37:41]  So I'm going to pull up my own profile. I'm going to pull up solid. I know I'm off screen. And then I'm going to pull up my
[04:37:50]  bookmarks and then we are good to go. Uh, it's, it's just, it's, I see more posts like this every single day. So maybe
[04:38:08]  this is how I'm going to start this week in JavaScript. Um, let's, let's, uh, let's go. Let's get into here. Writing chess
[04:38:17] book.com and solid JS has absolutely ruined me. Dealing with react performance issues drives me crazy now. And it's not just performance. React constraints feel like shackles
[04:38:24]  once you've experienced signals, but react one too hard and now we're stuck. It it's, I'm glad that the, like the fire is starting to be
[04:38:31]  lit. I'm hoping 2.0 is when we can finally like approach this for real. I was so concerned with 1.0 to make sure that everything was equivalent.
[04:38:39]  We have more resources, more power, more stuff behind us. It's just. Maybe it's time to go Pete hunt the world. You know? Um, I don
[04:38:47] 't know. I don't know. I don't know. I don't know. I don't know. I don't know. I don't know. I don
[04:38:54] 't know. I don't know. Um, I think so. Cause they, they, they, they're important. And honestly, it's all like, they
[04:39:15] 're pretty core from my perspective. I, I still have more hydration, SSR stuff to go through. What isn't blocking is the specific Mac, uh, mechanism for
[04:39:23]  the signals. I, I, I did lose about two or three weeks. Um, uh, kind of towards the end of May. And the, when I first
[04:39:33]  got back, uh, looking into our three, uh, Milo's new library, which does push based. It's not quite ready to where I need it to
[04:39:40]  be yet. It's still likely potential, but I'm not going to hold up. I'm not performance based improvements or aren't going to be a holdup for solid
[04:39:48]  2.0. Like we're already performing enough, you know, maybe not in like some very narrow reactive benchmark, but like, we're already better than solid 1.
[04:39:58] 0 and like JS framework benchmark. We're still at the front. Like, it doesn't matter. That's not going to be hold up, but mechanical things.
[04:40:03]  I think it's important to get right. So stores and projections are important. Um, in my opinion, and I working in R3, which is more constrained force,
[04:40:13]  push, maybe realize there's a big flaw in projections. And I'm going to talk about that next week. Um, but it's very important. Uh, what do
[04:40:22]  we got here? Sorry, just reading this, uh, chat. What do you think about preact? Is better current to reactor is at 99% the same.
[04:40:46]  It's smaller. The funniest thing is even from a performance standpoint, react and react aren't actually that different. Um, especially when you get into like heavier V DOM testing
[04:40:54]  and stuff. It is funny. People always assume that preact was like much faster than react. It's, it's not really, um, I, it's
[04:41:01]  in the video. I show a link to hide it, but like preact is like, like in the JS framework benchmark comes in, you know, maybe like, uh
[04:41:12] , 10% in front of react, like in the whole scale of things. Like it's like a 1.4 versus like a 1.5. Um, but
[04:41:19] , um, I think you actually, when you get into more hyper race diffing differences in them, they're, they're actually a lot more similar than you'd expect
[04:41:28] . Um, size is big though. Right. When it's like 10 times smaller, it is a considerable difference, but that's basically the biggest thing going for it.
[04:41:37]  It's kind of tricky because if you use preact the way I feel it's intended, you, you have the same ecosystem issues assault, maybe even larger because that
[04:41:47]  so many people don't bother building preact libraries in favor of using react with it. That being said, there are preact specific libraries that are amazingly small and very
[04:41:57] , very good. Um, but like, it's, it's, it's kind of that kind of world. Cause once you bring react libraries back into preact,
[04:42:04]  you're kind of already losing again. Um, and at that point, yeah, I mean, people will have their opinions, but generally I would say you probably just end
[04:42:12]  up using react anyways. Like what's that extra 30 kilobyte difference. If you're bringing in an NUI anyways, like it, like, and now you get
[04:42:20]  all of reacts features, which exceed what preact has, um, preacts part of it straight off and be minimal is it doesn't have all the features. Um
[04:42:29] , solid actually has a lot more of those react features. Ironically, uh, smaller, uh, in the sense that we've implemented them into using different technology or different
[04:42:37]  approach, but it's, it's yeah. Preact team is not stoked about people reacting, not stuck about people putting stuff in preact. Cause it literally messes
[04:42:46]  like with the GSX plugin. Like it gets in the way of them being able to do kind of optimization. do kind of optimizations they want to do with the
[04:42:51]  compiler. Like it's, you shouldn't do that really. Like you can it's, uh, but it's not really, yeah, there's no way that the
[04:43:01]  react team is stoked about that. You're messing with their stuff. Um, anyway, uh, yeah, let's, let's, let's, let's,
[04:43:15]  let's, let's, let's get going, uh, more into this. Um, uh, where do we want to start? Um, well, I mean
[04:43:26] , we can start right with here. Here's my prediction. I love this. I, I, I, David called shot October 31st, 2022. Here's my
[04:43:36]  prediction. Under Shopify, pre-act and remix will integrate deeply and form a new framework that starts as a react compact framework and aggressively breaks away from it philosophically.
[04:43:44]  with Miller Jackson and Florence under this one roof. You can, you have all the talent you need. It took a few years, but, uh, the people don't
[04:43:56]  know. Dave's our community manager. Um, solid jazz. He keeps, he keeps the ecosystem flowing, but yeah, for three years ago, that was a pretty good
[04:44:05]  cold shot. Um, let's, let's continue on here. Um, oh yeah. I feel like, why did I bookmark this tweet? And I remember
[04:44:17]  now is I, I'm, I'm usually, I, I got better of it, but when Michael Jackson made the comment about, uh, uh, signals, not
[04:44:28]  scaling, I was very tempted to quote tweet something along the lines of, of, you know, this is another tweet that probably won't age well. Um, but
[04:44:40]  now that I've shown this, this tweet out, he's probably going to delete it. Um, so let's not focus on that too much. Um, we'll
[04:44:56]  get into Justin stuff in a minute. Um, I thought this was interesting. This is more remix stuff, but he's just like, basically like filling in the blank
[04:45:18] s. He's probably getting a lot of crap for splitting off react. And it's just kind of funny. Um, I, I, I, he's,
[04:45:26]  I, I, maybe I read this wrong, but like, basically this is all you ever hear from anyone. Now when you just say like, don't use react,
[04:45:36]  use felt do this. Everyone's just like the ecosystem, you know? Um, anyway, it's just, I saw that I was like, oh man, same,
[04:45:44]  same, same stuff. Anyways, let's, let's continue on here. Uh, I actually have a list that I, I wanted to attack too. Um,
[04:45:54]  yeah. First thing I have on my list is right here. RSCs and Vite. This is big. Um, they're talking about, cause it, it
[04:46:01]  will help remix, get them in. But if you guys remember, Nikhil made an RSC. Plugin for Vite back like three years ago, but nobody was
[04:46:09]  happy with it, but it worked. And then he got Vinchy to work as the first thing to do with RSCs. And it's taken almost now
[04:46:16]  two or three years. Um, from that point in time when he got RSCs working in Vite to us actually having the actual solution. Um, but it's
[04:46:26] , this is the legit actual solution. So I, this is huge. Um, right. Before the only way to use RSCs and Vite was basically to use
[04:46:37]  Vinchy. Right. Um, it's, it's, it's, I'm glad that people working close to it. Like you have to understand that this
[04:46:48]  was actually really tricky because like the React team had to sign off on it being the way they wanted it to work. And it, you know, like someone had to be
[04:46:57]  close enough to Vite to do it. Like, this is why, you know, launch Wolf, like Nikhil couldn't just go in and go like, look
[04:47:03] , I implemented it, which he did, as I said, almost three years ago. But, um, now like this is a game changer. It just, it's
[04:47:12]  kind of, you're almost asking why did this take so long? It's almost like too late. Like it's not too late. Like obviously RSCs are
[04:47:19]  still thing growing and all this, but like, it's odd. It's, it's kind of like, why would you only have them work for Webpack? Like
[04:47:28] , why wouldn't you, like when you release a new feature, you want it to work on every platform and obviously you can't support every platform, but you, you
[04:47:34]  have to do at least two to prove that it's viable. And if you do too, then, um, then like people can move on or do stuff with it
[04:47:44] . When you, when you like, it's like when meta frameworks, it would be like a meta framework coming out and be like, look, our stuff only works on
[04:47:50]  Netlify. Right. And then like, like you'd be like, okay, but what about Cloudflare and Vercel and, uh, you know,
[04:47:59]  Fastify and all these other ones, right? Like people would have bad feelings about that. And it's crazy that in a sense, like React only working on Web
[04:48:11] pack actually kind of did the same sort of thing because no one uses Webpack anymore except for, um, like there's a lot of like people like create React app,
[04:48:20]  but like in terms of like meta frameworks and stuff, no one uses the Webpack anymore except for, uh, next, like basically nobody. So like I, they
[04:48:29]  needed to do it to support next, but like, so like, yeah, it's, it's kind of like one of these things where it's like, I don
[04:48:49] 't know. I mean, I'm glad this has happened. This is a long time coming. It's weird. Cause like how much did this interfere with the,
[04:48:57]  the, the adoption of RCs at the beginning? You know, how much did this lend to that narrative around Vercel that probably isn't completely fair yet? Here
[04:49:06]  we are. You know what I mean? Like anyways, it's, it's, it's, it's good. It's very good that this exists. So this
[04:49:15]  is awesome. Right. And the MBA API was key to it. Right. Like basically Nikhil in, I don't know if people realize this, Nikhil created
[04:49:24]  Vinci, not for solid start. He kind of had moved on to doing react stuff with his work. Um, he's, he could hire people that way. And
[04:49:33]  he, he, he'd done enough stuff, but he still felt like some obligation to us. I mean, he's a good guy. He felt, but he
[04:49:39] , he built Vinci because he wanted to use RSCs with VEAT and he thought Next.js was super slow in depth. So the primary reason he built
[04:49:46]  Vinci was actually to support RSCs, even though that's not how most people end up using Vinci and solid start and the 10 stack start of the users.
[04:49:53]  He actually created literally to support RSCs and VEAT. Um, so like it's, it took seeing that to get the API in order to get actual
[04:50:04]  RSC things. So it's been a long journey. So like, I think we, everyone involved, even Nikhil, who's not really involved in this directly should
[04:50:11] , you know, pat themselves on a background job. Well done. It's just kind of crazy that it took this long, not on the part of the people who worked
[04:50:23]  on creating this plugin, just the fact that this was not a priority on the react side of things. Yeah. I think parcel VEAT to it. Like,
[04:50:36]  is there a bias here? I wonder, I've always wondered if there was, I think it's, it's interesting. Yeah. Okay. Like VEAT
[04:50:51]  is a weird hack of things and I've, I've hit this before, but you're like, why wasn't there a rollup plugin? I mean, if there
[04:50:57] 's a rollup plugin, then someone could have done something. Yeah. Why do they call them RSCs and not SCs? That's, I mean,
[04:51:17]  I think, I think it's a react trademark, right? I mean, to be fair, RSCs do speak on a proprietary react protocol, right? Yeah
[04:51:31] . But like, I, I do feel like embracing VEAT earlier, and I understand probably didn't make sense. Like everyone lives in their own scope of the
[04:51:50]  world. So they only have certain perspective of what they're seeing. Right. But VEAT was like the, it's, it's the most clear, obvious win
[04:51:58]  that there's been in the ecosystem in over a decade. Like in the way that, like, I would say even more than like, oh yeah. Back in 2014
[04:52:04] , it's like, yeah, reacts to feature VEAT was that even like more so when it came out. It's, it's literally the only thing on developer
[04:52:14]  servers surveys that continues to outpace a hundred percent. Like it's just, it's clearly the thing and you don't have need hindsight for it. It was clear from
[04:52:23]  almost the beginning, this whole path. I, you have to be coming from a very interesting perspective to not like see that. Um, even like when it's kind
[04:52:32]  of sheltered a bit from the react ecosystem, big voices in the react community. People like, you know, Theo even like made it very clear that like VEAT
[04:52:41]  was the obvious choice. Yes. The plugin design using like roll up was the game changer. And we got to thank the Preact guys for this. Jason Miller and the
[04:52:55]  unplugging was basically saying like, oh, like that was the whole thing of like, just realizing you have a universal plugin mechanism. That was, that was the piece
[04:53:02] , right? But yes, other frameworks can and will likely implement them differently. I guess the interesting part is, is there like a general server component plugin possible now?
[04:53:23]  Cause like Vinci, uh, basically works independent of react, uh, as a hook in. And if we could get the equivalent, uh, here, like with V
[04:53:38]  plugin, I think we could do that. he based it off bun actually uh which i don't he he looked at bun app which is a thing jared sketched
[04:53:47]  up one day he's like wouldn't it be cool if we did this guys and then he like never did it but uh nakil saw that and he actually recreated that
[04:53:54]  on top of beat and that's that's what vinci was i i it's funny vinci had implementation issues that a lot of mess he kind of hacked it together but
[04:54:02]  the the actual idea behind vinci is something that um i think is still actually what i'm actually looking for in that middle layer it's like maybe this will eventually lead
[04:54:14]  to more features inside beat but like even three years later he created he created the right abstraction maybe just the not best uh implementation because he was literally doing what v did in the
[04:54:26]  first place hacking a bunch of tools together and him by himself didn't have the wherewithal to actually fix how all that hacking worked but from an api standpoint from a
[04:54:34]  boundary standpoint from a position standpoint from like when i look at the the axes graph of how solution space it is still to this day i think the the right what's
[04:54:42]  going to be doing so that's what i'm going to be doing so that's what i want to be doing so that's what i want to be doing so that's
[04:54:53]  what i'm going to be doing so that's what i'm going to be doing so anyway uh what else i got here yeah selective ssr this is cool um
[04:55:07]  i i looked at this immediately i'm like i thought about doing this but i never did it because there's like a hierarchical concern here the answer to the hierarchical
[04:55:16]  concern is actually really simple you can only override one direction once you go to uh data only or like once you go to uh server false you can't go to server true
[04:55:29]  underneath it it gets ignored i you have to read the small print but basically it starts from server true data only client only like it goes through those steps and truthfully if i
[04:55:42]  was going to implement this feature myself in a framework i would have just stopped at uh data only um i i i don't think there's any value to ssr
[04:55:57]  false we'll see i might be proven wrong but essentially to me ssr false is data only but i i think this is a perfect example where where tanner is being
[04:56:11]  very flexible to handle all these cases i would be so tempted to freaking streamline it more so i think this is like he talks about here root defaults ssr true
[04:56:31]  post sets false so neither before our loader will run on the server and the root component won't be rendered in the server post sets ssr true but inherits false
[04:56:38]  from its parent because the inherited value can only change to be more restrictive true has no effect inherited false or remain see this is a smart system as i said my the only thing
[04:56:48]  is i can't think of a single scenario where i actually basically any scenario in which hmm i i'm trying to think of a scenario any scenario in which i i want s
[04:57:03] sr false and not do the data fetching you'd immediately go well couldn't you just fetch the data in the component at that point and the argument is not on future
[04:57:12]  navigations so the only time you would actually want data only or not want data only like you would want to not fetch on the server is if the client is closer to
[04:57:22]  the data source than the server at all times yeah i mean it's a small thing but i think i would actually change it around a bit i would go i mean i
[04:57:37]  understand this is kind of clever because data only is also kind of like true but it's a string you know where false is false so you can like use truth eating but i
[04:57:45]  don't i don't i'd almost view like ssr is data only that is what ssr is because you're not ssr when you say ss
[04:57:51] r false you're saying i'm not ssr in it but i'm catching the data and then i and then like so to me it's like ssr
[04:57:58]  true ssr false and then like ssr no data you know what i mean like i understand it's a small semantic thing it's just like in my head the
[04:58:12]  special case is actually the no data that's a rare case we're saying data only is actually fairly common uh it's not as common as ssr true but it
[04:58:22]  i think the two most common things are ssr true and data only anyway uh let's let's see here uh um what else do i have on my list uh
[04:58:46]  justin's proposal next okay yeah so i only got a couple things left i'm going to quickly blow through some of the solid stuff um just for people keeping track because i
[04:58:56]  haven't streamed in a while um local first operation built with solidjs yet there's so many lovely examples coming out here is your react app slow and you code to error
[04:59:08]  prone are you unnecessary using memory context use motion we're investigating an approach that lets you use solid components inside your react app you need pass state preprops i love this idea
[04:59:16]  by the way because um using react components in inside your um uh your solid app is the react problem all over again like you're just diluting it but if you have a
[04:59:31]  react app and you want to start the migration at a certain point you're going to have to do the top down flip and when you do you're going to go all in
[04:59:38]  and that's what i want but until that point get a taste it's cool um solidjs with effect ts there's just so many integrations and things happening now that
[04:59:49]  i don't even have to get my hands in it uh urban planner mutable reactivity looking at stores maybe we'll review this a bit when i when i talk about the
[05:00:00]  stuff next week um starter projects i just this was a good podcast uh if you guys didn't check it out um talk for quite a while which is unusual for the podcast
[05:00:11]  usually people cut me off um yeah i'm gonna speak at js nation uh this year um in new york what else we got permix uh oh it's it's
[05:00:30]  like an auth system cool this is cool ai i've been finding a lot of ai code startups as i said before using solid for some reason even though solid apparently doesn't have
[05:00:45]  as good you know models with the lm it seems like the people building ai tools want to use solid um i talked to another startup founder not this guy even uh uh
[05:00:56]  yesterday about this stuff it's just i keep on getting these messages i i think i think that i think we're getting close to the right time i'm excited okay so that
[05:01:03] 's it for solid um i don't think there's much on my timeline okay let's let's talk about the last couple topics today um do to do uh first one
[05:01:20]  is justin's proposal okay um justin justin justin justin justin i'd love to hear this week job okay okay i've looked at this stuff in the
[05:01:33]  past declarative partial updates um i read this article i haven't read the new one so let's let's do a skim here and see what this about the time
[05:01:43]  is right for a dom templating api okay that's his argument i've always i'm gonna put some bias out here i've always been kind of against this i've
[05:01:51]  been worried like that we haven't really figured out the best way to do templating and it'd be very scary if everyone just started going along the wrong path here sorry
[05:02:08]  i hope to meet you in person then again if it's yeah uh oh are you are you gonna speak in person and everyone i guess you'll find out yeah i'm gonna
[05:02:19]  be there in person this time um i i haven't been taking as many trips to europe as recently um like i usually go to js nation i didn't go this year
[05:02:27]  um but i'm gonna be at the new york one yeah all right okay web platform is most successful application of all time okay let me put this link in so you guys
[05:02:36]  can see it god why am i in vista print there all right okay yeah i've got i've got little i've got little kids now i i'm not even going
[05:02:55]  i'm not i'm not gonna be a beat comp i'm gonna try and do the panel but i i got invited to do beat comp in person i i just i got
[05:03:02]  i got a little newborn i i'm not making the trip um right now um i do a stateside trip but going to europe is like an all-week affair pretty
[05:03:13]  much all right the proposal is high level i we're already getting the opinions we haven't even got into it yet well i'm a sexual plan as much i hate the dom
[05:03:30]  sometimes receives it's served blah blah blah has shown amazing tools yet the dom is missing one of the most important popular features in modern web development templating currently no work way
[05:03:37]  yeah yeah probably said yeah he's right because we have to care about security and stuff when we're building stuff the kind of template in cornerstone all modern frameworks um the reason
[05:03:46]  to clear template one thing i love about lit and i i i think this is like a trademark sign of anyone who's does like less popular frameworks generally speaking is he mentions like
[05:03:55]  pretty much everyone um look he's got marco in here um and i i tend to do that as well i i appreciate this because a lot of a lot of authors
[05:04:07]  a lot of things they they'll they'll like stop at react view angular you know and then like their framework um quick isn't spelled properly but i i think that can be
[05:04:18]  forgiven um the reason is that declared templates are popular but you count i i mean it makes this argument that everyone uses it far spirit imperative dom api is easier to secure
[05:04:28]  get six tech performance can be faster than all the handwritten code stack analysis efficiency rendering becomes possible because you basically just end up with strings yeah fair to see a technique wins so
[05:04:38]  completely on so many axes that's good for dx in new york's yeah agree template is great what's probably the current situation the biggest problem is the stream core needed early
[05:04:45]  the web platform should adapt your needs and actually see we also read concept of lacking templates bad for everyone because you suffer long-term app downloads blah blah blah blah blah blah
[05:04:55]  okay uh well huh is that true i'm like i'm i'm i'm thinking like you need to download the the actual specific template any way right okay developers need to
[05:05:13]  reach for a library that's tools to do based things or it gets you okay so now he's just talking about like basically using web command as blah blah blah frameworks are hard
[05:05:21]  to build because they implement templating blah blah proper restriction blah blah blah okay okay they've been proposals for e4x yeah yeah big one shift firefox eh for simplification
[05:05:30]  blah blah blah good time to address the big reason i think now is that frameworks have worn great cow past the pavement it's true that they're a lot of variety use line
[05:05:37]  template solutions they're actually very similar in a lot of ways more similar to use we understand our template syntax and reactivity miles a lot better than that i agree but also
[05:05:45]  not everyone uses a framework and this value okay this in-flight proposals very low like dom parts which but i think higher level ap is like to fully take it off more load
[05:05:54]  interesting i was excited about dom parts because again i like small things i think when we're ambitious it's very dangerous on standard side okay uh popular client templates out the sheer from
[05:06:05]  the synthesis findings blah blah blah okay sure even cross h2l based yeah versus jasker base yeah see he puts a lid on the side which is i i actually
[05:06:13]  agree with this lid and solid actually have some of the most similar templating and the way we actually handle web commodities is actually similar um where the but yes it's funny how
[05:06:22]  he puts it on that side it's i don't know if like felt people would agree or whatever though i think svelte is an interesting one i think svel
[05:06:30] te's i i mean these are just sfc formats to be fair but i think svelte is an interesting zone where it's templating languages relatively more powerful than
[05:06:40]  you'd expect things get more similar newly tested apis can do it similar semantics populate system dumps template expressions blah blah blah blah and this is me reading at 1
[05:06:49] .5 that's made a good initial dom creation but bad for template updates which are still imperative we can build apis in today's javascript tag template literals
[05:06:59]  okay uh challenge of tag template literals has been that i don't get the compiled in the way i want and i like having function expressions tag templates are great but they're
[05:07:09]  often unsung hero feature but they are a bit more syntactic over in the jsx yes especially with useline components some people love jsx yes so why don't we
[05:07:16]  add jsx to javascript oh please don't tell me they're going here the problem is jsx all syntax and semantics thank you okay thank you sorry thank
[05:07:24]  you justin they actually say that in the spec and because they made that guarantee i don't think it can ever be added if it actually is a breaking change to jsx
[05:07:33]  added to the browser everyone like it's the this is what i mean in a way you could say like it's worth getting angry at things like typescript and esbuild all
[05:07:42]  those guys who build the react compiler semantics built in because that is not what jsx is and you guys and they're kind of pushing this thing that basically builds react
[05:07:51]  into it i was talking that guy was working the uh the lm ai thing and he was doing this simple example where he was using like babel standalone and the client to
[05:07:59]  test some kind of generated thing and he's like can i do this to solid and i'm like yeah you just need our babel plugin and you can run it with bab
[05:08:06] el in line it could work and he's like oh why don't i need this react i'm like it's because react is built into babel um kind of crazy
[05:08:13]  but yeah so it's been a semantics nail that's probably already the hardest part of hypothetical js pros but there's a chicken egg problem when it comes to templating in
[05:08:34]  order to ensure jsx like synthesis so it's supposed to fully express a dom templating we need to target templating system to verify it gets it seems like react already
[05:08:40]  provides us but some ways reacts can play it's less powerful expression than all the other systems which he doesn't say all but it is christian's react is the part of
[05:08:47]  way to explicitly bind properties events or gentlemen blah blah exactly again people love jsx yes they're actually probably popular blah blah blah luckily the good thing is non-standard js
[05:08:54] x is the purest syntax of no runtime spanish yes this means we can build just take left literal piles as many as we want blah blah blah blah okay interesting so
[05:09:06]  he basically wants to use something similar to tag template literal and then have us compile to it why oh why don't we do h12 first the answer would be h12
[05:09:23]  it's a much much larger undertaking of you it's nice to play javascript blah blah blah yes you don't have to worry about control flows so just template definitions j
[05:09:30] avascript subset reactivity v dom definutes react template identity used in yeah yeah okay yeah so he he he these are the three ways to render he he gave lit the the
[05:09:48]  nod here but this is basically dirty checking i give angular the nod but in my video i literally used lit as my example for dirty checking so i i'm i'm okay
[05:09:56]  with with him saying like these are the three modern ways that people do uh do rendering it's it's i could i could argue that the angular and lit actually sit here um
[05:10:07]  and classically svelte and but view and svelte have come over to our side now and angular is on its the way it's just comfort the model works
[05:10:17]  the data unfortunately slow compared to other parts and barriers and diffing algorithms template editing which is thing is fasting and similar results to differing in a majority use can use it's
[05:10:25]  not it could swell take the little two that's something it would be straightforward to specify signals are great in my opinion i strongly support the proposal if i not care to dp
[05:10:31]  to be in signals with signals of work when they're doing there's a lot of data non-signal form and platforms that don't produce signals re-rendering
[05:10:39]  is an easy way to pick up non-signal data pretty easy to have a system of sports both templating and fine green of course it's the models of
[05:10:46]  things um okay i mean technically because i built on top of tag template literals with solid i can agree with this signal up here one of the passage of single finder would
[05:10:57]  never need to be re-rendered but it could always work yeah exactly yeah um typically it's done on the component layer i think this makes template identity with signals that winning
[05:11:06]  combination that's fast okay okay because i mean signals don't need the template identity but there's he's right there's no actual downside of this um other than syntax but
[05:11:18]  he i mean we we just compile it the question is the part is scheduling of dom updates like does he expect signals to natively interact with this okay i mean this is
[05:11:42]  only part one i get where he's going for i yeah except for a compile target okay okay this doesn't say very much i i kind of get where he's coming
[05:11:59]  from prozo says that if something is a single then an effect must be added by the browser and update automatically but where does the effect come from yeah i mean there's there
[05:12:13] 's holes here if that's not the case yeah yeah but like i yeah see it's dangerous to assume that native signals to directly go to the dom if that's where
[05:12:32]  that's going to be i i'm going to drag my feet on this one again so let's get into let me let me see what the other the other article says
[05:12:39]  okay yeah constraints web compatibility standard file standard javascript javascript graphics low influence over serious no performance regression existing data economics blah blah blah these are all good qualities opinions with
[05:12:57]  functional style programming composition blah blah blah blah blah blah tabulate syntax looks fine oh he's comparing them okay yes and he's using a for loop it's interesting because there
[05:13:23] 's different semantics these things do very different things like map and uh b4 are pretty different uh is actually b4 and map are actually kind of similar in a lot
[05:13:36]  of cases no but like like like like our our map array is very different like some of them use memoized mapping and other ones don't there's like the actual mechanism of
[05:13:51]  the i don't think like like react doesn't memoize its map it literally re-renders the whole thing see i thought what he was going to say is like
[05:14:07]  this belongs outside the templating language is like inlet it's outside i'm i'm happy with this because then you can just stick whatever the hell you want in here the
[05:14:34]  mutate domains they are evaluated okay tag template literals i'm following you i mean they're bulky that's why you don't want to use them the react team actually
[05:15:01]  made an argument against something like tag template literals because they knew they were coming no there's there's no problem here binding template parts yeah okay on prefix yeah okay i
[05:15:28]  mean that's fine i i'm actually not that i mean it's okay to define things here i think this is like a bit i mean this is kind of the fact
[05:15:43]  that he feels he needs to do this shows that html is kind of flawed you know to begin with uh it is interesting i i solid does something very similar with
[05:15:56]  we have prop colon uh on colon after like we actually have different syntax for this for j i suppose if jsx wasn't a limit we might have considered a shorter syntax
[05:16:18]  so they work well so i mean this is fine he hasn't really talked about signals okay here we go so it can be more efficient in some cases yes so then there
[05:16:47] 's a lot that happens between this and this there's a lot of important details if it's getting up okay okay of course they're asking for something like this but okay it
[05:17:01]  is interesting though like if we're getting to a point of defining things that we're fine with this then jsx would be fine my argument was that i didn't want
[05:17:14]  jsx because i i'm worried about being able to define these kind of things isn't this just standardizing lit honestly yes or no i think it's more actually this so
[05:17:25]  because it's in goals and the shape is the most of it accomplish that it's like it's probably because apollo team have the same constraints in the web platform blah blah
[05:17:33]  blah blah blah blah blah it's still not saying what this does exactly but i'm assuming this outputs dom elements actually i'm not even sure what it outputs because if
[05:18:15]  it re-renders it has to use it fixed in place i guess it does output dom elements and then like associates them with the tag template literal so that they're
[05:18:27]  cached yeah okay i guess he's assuming it's some sort of list helper in every version yeah i mean i'm okay leaving the list helper to user space but like
[05:18:44]  when you start like trying to tie up the knot with fine-grained this is an area that i don't feel is nearly as worked out and it's funny as someone
[05:18:53]  who's been working for 10 years we just haven't had the exposure and the different opinions in here yet like i'm not gonna pretend like you know we have the most
[05:19:00]  experience this is the one way but like i don't know like you know what i mean like i think he's he's trying to jump in on and he's like oh
[05:19:10]  there's a proposal but like yeah he i get why he's working on this this is the same thing i my gut feel is we need to start smaller and maybe get
[05:19:22]  here he's i mean if if he's had a hard time get this across before i he's gonna probably have a hard time again like i i hope um i i hope
[05:19:35]  that uh i would love to just see if we can have some nice low-level primitives to improve the problems that we have today i mean obviously this is what i
[05:19:49]  say as a framework author i understand like this is arguably the biggest like black spot on web components from like uh like look they're so easy you can just get started standpoint they
[05:20:01]  like they don't have a full solution so like he needs this to happen um but it's i i i on some level if we ignore change updates like and i don
[05:20:21] 't know if you can do this without actually like making space for the signal spec but if we can basically not do what he's saying about signals and this still gives a templ
[05:20:33] ating language that we can like use as a fragment like like you know to create dom elements i see some value of it but i think i think there's probably a lower
[05:20:42]  level primitive that will in the meanwhile handle this case better as we figure things out i know it's funny i was complaining about the those standards moving too slow are moving slow but
[05:20:51]  i actually don't think they move too slow i think it just we we we need to move slow because we have to be careful what am i looking at here i
[05:21:10] 'll go twitch tree aware fewer task scheduling i think it's useful the way this could jump onto the task i mean we all build this it's funny if you look at
[05:21:39]  the solid 2.0 code i have a queue um i think i i think this is interesting kids he needs a way to organize it to web cones this is again another
[05:22:06]  one of those really like weak spots where like when you have a third-party framework you kind of get this kind of chewing it's when when i think about this and i
[05:22:12]  look at the cues that we have solid 2.0 it stuff like suspense completely messes with the cue we had to completely redesign the stuff to handle the suspensive transitions
[05:22:23]  like like this is kind of why i don't want the signals directly into the dom because i can make a picture something nice like this and then picture smashing it to hell when
[05:22:33]  with some of the advanced uh stuff i want to do with async and signals which is so but yes um this makes sense the lack of candlesticks is why it
[05:22:51] 's left out of the signals proposal it's also impossible but like yes but for good reason like i think i think i think i think i think it wouldn't get done
[05:23:18]  but on the top so i think we already have a tree that cuts yeah like i can see value of this just existing i just don't want i it's we're
[05:23:46]  very close to a line where it's like are we just going to build solidjs into the browser and i i don't like some people have asked me they've looked at
[05:23:55]  dom expressions and they were like you know which is our fine-grained render and they're like can we generalize this in a way that everyone can use it and
[05:24:02]  it's like i've shown it's possible if you look at js framework benchmark i had a fine-grained version of view like years before view vapor you know and like
[05:24:11]  like but like i don't know you know what i mean like i still think that assumes a lot i like how he's approaching this this is at least reasonable that that
[05:24:39]  he's not making it prescriptive like this way it's challenging is when you want to take this behavior and actually make into a templating language like this i get
[05:24:50]  and i don't have a problem with he's just adding custom scheduler and the fact that dom has a scheduler is great you know why it hasn't had a schedul
[05:24:58] er yet it's just taking it farther than this is where things get dangerous okay it's interesting it's cool um okay last topic let's talk for sale okay it's
[05:25:19]  looking at the chat here am i the only one who thinks that maybe we shouldn't be adding more frame of frontiers web standards leave frame of frontiers the framework keep
[05:25:44]  this low i i just think i just think that like we should just be very selective in a small forces adding new capability developer that keeps is mistaken yeah i mean we're kind
[05:25:59]  of stuck the web has to be backwards compatible oh yeah i remember got all the a plus promise spec libraries um there were so many promise libraries back in the day all
[05:26:30]  right um okay so yeah let's let's talk the last thing i know you're still you're you're still you're still here right um okay uh there's actually two
[05:26:48]  topics related um but let's go to my bookmarks i think okay first the quick one after five years i just finished my last week of her cell whatever i'm grateful
[05:27:06]  this community and proud to have helped people learn reacting next many tweets sent to friends i guess i don't have to wear it all black now i'm going to switch up my
[05:27:12]  wardrobe i mean this is a big news i i people are excited for his next move so i'm gathering there's something really cool going on um but the way i look
[05:27:23]  at this is lee rob is the last of a certain time period in web dev um the dev rel like there's still dev rels but he's the last of like
[05:27:36]  what i call the that the classic phase of of dev rels um kind of where like which kind of during the transition into what like way uh things move now um you
[05:27:50]  know i don't think we have the same kind of uh i don't know if we have the same kind of dev rel poll these days as like it used to you know
[05:28:01]  i'm talking about like the there's that chain you know for a long time that was like netlify strongpoint right through um jason langstrom uh sarah dr
[05:28:11] asner uh cassie cassie cassie um like the there there there there have been like uh and versell also along with lee uh god why can't i remember
[05:28:24]  her name right now um i feel like we're kind of hitting the end of that classic dev rel era and lee might be the the last one standing um yeah yes i
[05:28:38]  do yeah exactly um williams yeah yeah um like so this i i mean obviously there's still people doing dev rel but this there was like this kind of classic period of
[05:28:51]  dev rel that kind of covid kind of impacted and changed the way we viewed the job and you know people somebody said a while back that like dev rel was a zero uh
[05:29:01]  interest rate thing or whatever like the whole air thing shifted um yeah lydia yeah yeah yeah and um for a while there i was thinking to myself like lee is like almost like
[05:29:20]  the classic one even he's shifting his techniques in terms of like kind of videos and stuff he put out but like it just i feel like this is a the final send
[05:29:28] -off at the end of an era um maybe it's just my age because these are the people that i followed you know i i wasn't like this is a time before
[05:29:38]  like we started getting more like youtube influencer types into our space and stuff um you know and obviously people likely make good use of youtube and all the tools available but it's
[05:29:49]  it's it's different now um so it's it's definitely very cool to kind of i don't know it's i don't know what what to think about this it
[05:30:01] 's uh it's uh it's definitely a a change um so he wrote an article here uh about things he learned i think these are all great lessons um uh what do
[05:30:13]  we got here go go hard at work and work home i respond to a next tweet while sitting at a beach during my honeymoon that probably sounds insane and yeah it actually is so
[05:30:22]  i was my first startup i worked up before versa i would leave work and turn that part of my brain off but ironically because the passion building things i would spend nights we said
[05:30:29]  writing code being forms yeah been there it's tim passion for work i loved it yeah this is a very dangerous combination when your work week is your passion passion without boundaries leads
[05:30:38]  you to burnout if you're going to go hard work everything you have to learn to go home yep i'd like helping developers i'd like to upset covers as a happy one
[05:30:49]  so i'd like to give away my legos you can do both you can build a self-driving car and take the ferrari out on the drive sometimes i started
[05:30:55]  to spend way more time on recruiting to hire people actually love the work for one day and slowly i was able to build the system allowing me to actually disconnect from work when i
[05:31:03]  need to exactly obviously device will rebound some media because that's not what i want i want to go hard at work i want to ship lots of code stream not simply putting
[05:31:10]  in the hours but when i'm offline i'm offline yeah anyway you can really you can work really hard and set clear boundaries yeah everything can be done faster if you push fear
[05:31:22]  you pace without being an asshole the ideal safety team and ship if you're okay we think slowly they will aggressive deadlines okay grace eventually how quickly you shipped listen to feedback and
[05:31:32]  iterate on the product okay that's a that's probably very good advice like set aggressive deadlines for yourself it often starts with a simple question what would it take to ship next week
[05:31:47]  instead i feel like this is maybe a lesson that i knew one time when i used to run product teams that maybe i have i have uh gotten away from in my heavy
[05:31:56]  r d roles these days um scale or die trying yeah what's the takeaway scale yourself by hiring great people and building a support team okay taking on ship doesn't mean taking all
[05:32:08]  the work yourself yeah yeah yeah always be recruiting if you don't scale him your best bet you're overloaded yeah yeah things higher questions hell yes or no it means say
[05:32:18]  no to many good but not great cabinets closing great people sometimes requires unconventional measure when the company is growing fast there's always more to do with the capacity allows if you can
[05:32:28] 't support another team's request because your team's too busy you can have said done yeah okay you have to act fast performance okay yeah i mean this this this makes sense don
[05:32:37] 't swoop and poop new products starting theme you cannot ship this keep in mind for months then i came in the last minute and started asking to i poked decision made
[05:32:49]  months ago i didn't have the context and understand these traits okay yeah this is a good management tip everyone was mad at me in fact the terms huh yeah i think this is
[05:32:59]  yeah this just this happens when people get higher up in the kind of out of it um talk to people first shocking yeah listen to your team best ideas win it's okay to
[05:33:12]  change your mind i reviewed every versell tweet for years i thought i had good reason for this someone needed to be the person stop the line from shipping i'd test the
[05:33:20]  product to take back you can't take back social posts good true sure you can delete them but it looks sloppy oh yeah once the message got the community it's hard to un
[05:33:29] wind people would tag me regardless and i have to go clean things up i came bottom neck and there's friction getting posts i thought i was doing things that don't scale and
[05:33:35]  make stuff always available but then i went on an actual vacation where i turned off the phone i realized it wasn't working the process was slow and had a lot of proof
[05:33:42]  of steps so honest to myself fallacy of treating also supposed to same as they said what happens in companies is that one size fits all decision making process where one's heavyweight
[05:33:50]  process all decisions including lightweight ones two-way door decisions should be made by individuals well actually one-way doors if you mess up with a tweet about a small feature you could
[05:33:59]  just repost and everything will be okay the teams working on these changes should have autonomy to ship gave people autonomy yeah be willing to change your mind and present with the information
[05:34:11]  okay the only thing constitutes to my tears falling curiosity yeah if there's teeth flashed here startups can be messy and imperfect but rewarding yeah it's awesome good stuff lee um honestly
[05:34:28]  i think everyone thanks to your service over the years at brucelle you've did a great job of um promoting brucelle and also like just making the company feel
[05:34:36]  like that much of a friendlier place you know from the outside okay i know you guys have been waiting for this because i i did write some stuff um it's the
[05:34:58]  last topic uh yeah proxy stuff will come up next week when i talk about stores um and it's my fault i kind of changed i mean other people saw this too but i
[05:35:12]  kind of triggered off this the ball whereas like the news as you guys know nuxt lab got uh acquired by bursell um and nuxt lab just so people understand technically
[05:35:28]  um the creator of nuxt uh sebastian uh company that he built around nuxt but actually from the for the practical standpoint day-to-day nuxt is actually
[05:35:40]  maintained by daniel roe um i know subs hasn't been like especially hasn't been like hands-on for years in the same way and he's been building a uh
[05:35:50]  a product he's been building a company which is a little bit different than nuxt the framework so you have that i i've had this explained to me before in the past
[05:35:59]  and maybe i'm not getting it 100 right but you you have to understand that there's a difference between nuxt labs and nuxt right so for you who do not
[05:36:06]  know what nuxt is which i doubt anyone in the stream is the case nuxt is uh views meta framework um like next it was kind of built kind of separate from the
[05:36:18]  core team that wasn't the trend back then uh it wasn't like you know like svelte kit or solid start um this is more like next where onto an enter
[05:36:28] prising uh individual decide that hey there's a market for full stack framework and i my understanding is sebastian was actually very influenced uh by journey with uh next so um i
[05:36:51]  guess i'm trying to remember where the actual article is i don't know if i uh yeah see this is gear almost one but i think the the the nuxt team wrote
[05:37:06]  something different not slap stewards and critters stewards and see see how they run critters and stewards of nitro nuxt are joining herself so basically nuxt was labs is
[05:37:17]  off doing its thing building product building a company daniel rowe working on um nuxt itself and then um puya uh uh working i mean obviously daniel worked on the
[05:37:32]  nitro a bit too but like puya is kind of on js uh thing building all those underlying pieces that power nitro which powers nux so this is like a
[05:37:41]  very linux mentality of every piece goes together to build the final tool um so as there's like a there's there's a few different pieces here so as i said nu
[05:37:51] xt the view framework um nitro this kind of uh underlying meta framework builder that has most of the core pieces like the back end server like the non-view parts and
[05:38:06]  then nuxt lab the company but who they get to bring in for this is obviously daniel rowe puya and anthony foo is also working under them so the
[05:38:17]  what's cool about nuxt lab is they're obviously company but he also funded open source initiatives i mean don't care on nuxt benefited him but these are all key
[05:38:28]  people uh both in the view ecosystem and also because of like especially puglia's work through on js uh in the wider ecosystem in terms of people like h3 um as a
[05:38:40]  server framework is used now by several platforms and nitro more importantly is the basis that we chose to build vinci on which meant that solid start and uh tan stack start
[05:38:54]  were built on that uh along with analog aside um nitro so yes when i saw this news i did not see it coming coming coming even if i probably should have and
[05:39:06]  i just kind of sat there and i'm like huh this means like we're all versell and i know i know like who cares i but like i i was just like
[05:39:23]  this is kind of like a weird inception moment for me right it was like it was like huh like astro and remix are outside of this and then i put quick city
[05:39:38]  in here and the quick city guys are like yeah we're looking at nitro it's like okay so maybe quick city is going to be in this list too so fresh which
[05:39:44]  is like very you know specific um but like other than like remix which who knows i mean remix future is a whole other thing i don't even know where that sits but like
[05:39:56]  it's kind of i i kind of it's kind of like for me really like i i added these guys later as i was thinking through it but like i was like
[05:40:02]  in my realm of things where i care about my touch everything but astro is now coming out of versell i mean and remix obviously too but you you get what i'm
[05:40:11]  saying and because the creator of under yes is working there right um and it's something to think about right because um i i i just said i don't know when i
[05:40:26]  wrote this i wasn't sure what i was thinking right because i i mean i've worked for versell competitor netlify in the past um i've been involved with uh
[05:40:39]  you you know certain things like with the cloudflare folks about you know equal play and all this kind of stuff around you know you know openness and next and dax
[05:40:49]  and like the whole thing uh i maybe don't always have the the best feelings around versell but on the other hand they they fund svelte kit and svelte
[05:41:01]  in the same way i got funded netlify i i was super stoked when that news happened so there's been there's it's hard to kind of separate a lot
[05:41:08]  of feelings about like next from versell and from like the whole thing for a lot of people so it's like it was a lot so that's that's all i was
[05:41:16]  saying but i feel like this sort of ended up firing off a kind of chain of of of things a little bit and i didn't i wasn't sure right because truth of
[05:41:27]  the matter is this is a net positive thing but finding funding sources for people working on open source and important projects is the most dire thing that's in need of anything and
[05:41:39]  honestly um versell making this kind of investment is amazing like this is just this is just continuing that message i mean as i said three people working on svelte and s
[05:41:54] velte kit three people working on nuxt and nuxt related stuff um that's that's a nice chunk of six heads um working on stuff like i might have have
[05:42:06]  grief complaints about how in the past next js has been like almost too for cell centric but i don't have any concerns with that um with the nuxt team these guys
[05:42:19]  have always been very open and it hasn't impacted svelte or svelte kit at all um so and i and i think actually uh if i go back to
[05:42:27]  my bookmarks uh here um wherever they are um evan you said something along a similar lines the main reason i'm optimistic about for cell nux is how they treat s
[05:42:40] velte since acquiring it if they do the same for nux which they claim they will and i believe they will then i think it's a net positive for viewing nux
[05:42:47]  users completely it's what's interesting to me is just that next has generated a certain amount of bad will towards versell and while this has not carried towards felt and i
[05:43:06]  don't think it'll include the nux it was enough that when this happened when you take something like you don't understand njs sort of represents and beat especially when you
[05:43:15]  see the tie-ins it's like the freedom fighters you know like if people want to make some crazy star wars level epic battle of fictional stuff that doesn't actually exist
[05:43:25]  if you look at it like that way then you people like did the empire just uh hire the leaders of the rebellion like the the like p there's there's like this feeling
[05:43:38]  where it's like people don't know how to you know what to think about it and it kind of push things about like i have no doubt that nux is going
[05:43:48]  to be able to do and thrive under under versell but people like why did versell make this move right like what what is going on here what's the thinking about it
[05:43:58]  and i'm not sure you're gonna have to ask them um uh where is it what do you mean exactly i don't know i didn't see this coming but sure
[05:44:10]  this makes a lot of sense nitro represents the most popular agnostic way to build meta frameworks that can deploy anywhere having goodwill there here towards versell ensures that portion
[05:44:17]  will be secure for all frameworks so like a way of you looking at this is okay it's not like the ideas stuff isn't gonna stop working on everything but if you
[05:44:26] 're in a situation where you know there's goodwill and stuff and people are working and you're right next door to the other guy working on the platforms of versell i
[05:44:32]  mean it makes sense that the versell integration will probably get better which will actually benefit every single one of those frameworks up there so that's positive um could it be classic access
[05:44:41]  united next she's expressing the hood no no no next is part of tool chain developed next is part of the chain of tools developed under versell and less widely used outside
[05:44:51]  including turbo pack um and versell's platform integration nitro is built on beat and has agnostic platform integration while it's possibly consolidated i'd be surprised that's the
[05:44:59]  aim at least near term they've invested a lot in tools that work really well with their platform this feels more like ensuring they get a bigger piece of the pie out of everything
[05:45:04]  that isn't next maybe versell indirectly becomes the preferred deployment platform for these other frameworks the nitro njs team is very dedicated to the open web so i don't see
[05:45:11]  any problem here but there's always consequences of this sort of shuffling what what i mean is people are involved narratives are involved like it's interesting like on the surface
[05:45:22]  mechanically what's happening is great but people will talk people will think people will have opinions and it will cause things because do you know what happened after i posted this bunch of
[05:45:32]  people were telling me that tan stack start is not nitro blah blah blah blah blah i would never touch it versell product and it's just like whoa whoa whoa first of
[05:45:39]  all tan stack start is using nitro people are trying to prove me in the dependencies and i'm like look look look they're saying they're moving away from it as
[05:45:46]  hold on i i know what's going on with tan stack start um like whoa and i realized like even suggesting or saying this kind of put this thing into you know out
[05:46:09]  there tanner was getting enough stuff back that he actually had to to to clarify nitro is a valuable tool and we'll continue to support it as we build adapters start
[05:46:17]  1.0 but it'll not be hard dependency we have been working for a while towards veet native to support any veet plugin that uses mv api to configure
[05:46:24]  build output yes and people might have missed that yeah they they they had tan tanner and tan stack were under versell funding for like six months people might not remember that
[05:46:40]  they had a contract um and in such a way that tanner got to build what he was building and doing his thing and he just got like extra bonus referrals if he helps
[05:46:50]  you know my understanding i i can't remember the exact details but like you know people chose to deploy to versell or whatever but it's yeah but like i i think
[05:47:07]  people still don't understand the relations between these things vinci chose to use nitro i was talking with nikil we talked it through we just both decided nitro was the
[05:47:18]  best choice here it wasn't the perfect choice but it was the best choice in terms of what our use case was in the process of devinchifying you know getting rid of
[05:47:27]  that you still have to be able to deploy places so nitro is still there now the thing is there's always more nuance and context here so i i'm willing to
[05:47:38]  get into that with you guys uh for a moment but but i think you know yeah now the best part comes nitrous we need to just be pulling as well right because the
[05:47:51]  environment api allows for that and that's kind of what we've all been waiting for basically what happened was we as usual can never wait for people to build things so
[05:48:00]  uh you know uh brandon roberts had already built uh nitro 2 like the older version as a v plugin and we use that as a base for 10 stack start
[05:48:11]  is a part of way of getting away from using vinci as i said ironically my my mind vinci is actually like vinci just happened to choose nitro and was constrained
[05:48:21]  by no environment api what vinci actually does in that last little bit of layer is the part that tan stack had to rewrite but it's the part that i actually
[05:48:29]  want back uh because it was actually agnostic solution where the tenor solutions some of them are gnostic some of them are like tan stack router specific i think it's
[05:48:36]  the wrong boundary for me people have been trying to convince me that i need to change i'm thinking on this but um after seeing how solid start works and because actually um and
[05:48:46]  understanding how the pieces it's the right move for someone building a tool that works agnostic across all frameworks but is the wrong tool for a framework that wants to be
[05:48:54]  agnostic across all solutions so like i'm very convinced that i that vinci had the right boundaries um so there's some more work to be done there um but like
[05:49:05]  you have to understand there's been friction like slight friction between nitro and us since the beginning because we only really wanted part of the nitro solution uh nitro in
[05:49:15]  some ways is too opinionated for what we want to do i think math phillips like i never understood why you guys picked nitro um it's kind of opinionated
[05:49:24]  but it also got out of our way a bit uh like we were able to sidestep it um so like my response to tanner was i i mean we talked about
[05:49:34]  this privately but i want to put this out so you guys understand it i think it's very tempting given new capability to eliminate the middle layers and by that i mean the
[05:49:41]  layer between solid start and beat or pansec start and beat i don't know they're completely eliminatable it's just at minimum the minimum most the minimum minimal solution is lighter
[05:49:52]  than nitro's today what direction nitro takes will probably be the bigger decider in its role moving forward so in a sense you see a v plugin as a way of
[05:49:58]  lightning but nitro is still kind of opinionated maybe still so too much for what we actually care about but let's keep your vote here ironically even though vinci has
[05:50:06]  been the first casualty of the simplification the unique parts of it are still the parts i'd most like to see in that middle layer vinci in many cases sat closer
[05:50:13]  to beat the nitro task ended up rebuilding a lot of it anyway on a better foundation but also in many cases that cater specifically to tan stack like the rudder it makes
[05:50:22]  sense but it's pushed all started to taking back ownership of those pieces that i was trying to get rid of in the first place don't get me wrong from an api
[05:50:29]  surface perspective vinci was basically one for one replaceable with the meat and api and after all it inspired it right but it is also the part that made the asset
[05:50:38]  management custom file-based routers and router agnosticism impossible in general it could be rebased definitely at straight v plugin and that's the direction it should go but
[05:50:47]  the eventual solution is kind of kind of look like what vinci looked like uh in a way i you know but we're still a little away from and we're still away
[05:50:55]  from generalizing what that layer looks like right we haven't created the agnostic thing we like even with tan stack start because they're still building a specific solution today
[05:51:03]  for themselves we haven't actually got the back to that general solution so i still think there's an opportunity for such a solution to exist after reshuffling i'm just
[05:51:10]  unclear if that solution's nitro nitrous and might be have very specific opinion in a way that we don't care about or if it's just another tan stack offering because
[05:51:17]  truthfully tan stack already went and rebuilt a bunch of stuff or something else the the tricky part here is understanding what's not being said or understanding what like how this all
[05:51:29]  fits in it nitro will not be a hard dependency what does that mean right and i know that i'm getting away from the whole versell thing but i feel like
[05:51:47]  the only reason that we're talking about this at all right now is because of herself thing happened if people weren't hammering about it we're kind of get a court uh
[05:51:57]  uh cart ahead of the courts like what does beat native mean these are things that don't exist today so while we can speak about this and we and clearly there's a
[05:52:10]  plan as things sit right now can stack solid start use nitro i'm i'm not saying that you know and there's no intention to remove nitro i you know necessarily
[05:52:26]  but if it's an optional dependency that means there must be another way to do what nitro is doing so whether that way is the better way or not it's something
[05:52:40]  that remains to be seen in the future so i think i think this is why kenner wants to get but like i feel like there's been a lot of pressure because of
[05:52:47]  this versell thing and i think it's kind of silly honestly uh because through the matter the solutions don't exist yet so the ecosystem has to come along now what can
[05:52:58]  that solution look like well that's an interesting question right what does v native work out like is it could we live in a world where we could eliminate most of these middle layers
[05:53:06]  you know is there a world where you could just go straight to beat and not need nitro to produce the output you need for the specific platform and i think the answer to
[05:53:15]  that is maybe right the tricky part is you have to make it deployable on cloud providers with server rendering beat can make server builds but how do you make that server build
[05:53:29]  work for the provider um like cloudflare or netlify or all the specific ones they have a lot in common they're very similar but i think it requires the provider
[05:53:38]  to integrate directly with beat like beat plugin netlify rather than i mean i think this is a win for everyone right now we're in this weird zone where literally every
[05:53:48]  meta framework has to have their own adapter and either nitro is doing it for you hat tip or something like that or the the the like if it's a popular framework you
[05:53:58]  know like next and they don't make their own adapters netlify and cloudflare have their own uh uh adapters for next i i love it at netl
[05:54:07] ify we used to call it the the next run time it was it was too big to be called an adapter it was so complicated um to get it to run on the
[05:54:14]  uh the thing and there's a netlify team that basically uh managed that like it was important enough for to have next have equivalent next support to versell that there was
[05:54:25]  basically we had a a kind of a next team at netlify in a sense um i mean that wasn't their only responsibility but you understand like that that that integration
[05:54:36]  is not trivial right so you're in this kind of weird place where you either the providers trying to do work on frameworks and they're not going to care about every framework you
[05:54:46]  know uh you know if you're not in the top three or four you know like cloudflare is this kind of case like i don't know how their solid start uh
[05:54:53]  thing is these days like they were trying to run their own instead we kind of take it on ourselves we built our own adapters and you know we're like okay we
[05:55:01] 're going to manage this i can't wait for purcell like i remember when i did that first edge streaming demo i was just like screw this i'm just going to make
[05:55:07]  it i don't i i i don't care i think it's a lot of work for all parties involved if we can get to a point where it's just a
[05:55:15]  matter of a generic beat plug-in to deploy to and dev i think the key part people miss about nitro and it's partially because we didn't do it in v
[05:55:24] inci is the nitro cares a lot about the dev environment it's giving this consolidated thing and it's based on that mjs philosophy of that like that's uh lowest common
[05:55:33]  denominator like design with the same tools deploy anywhere so basically and you have the same dev and uh production experience in both places well what would a beat native solution look like well
[05:55:47]  let's think for a minute what if cloudflare provided a b plugin that worked in dev and prod in that world you could use cloudflare specific uh stuff in depth
[05:55:58]  you could use durable objects you could use those pieces and not the problem is when you built your app you'd have to make that decision first so you it wouldn't be
[05:56:07]  as easy to switch between providers per se if you use special features of those providers but you would have a consistent dev environment and arguably you could get rid of that middle layer so
[05:56:18]  i think that's you know thinking out loud where something like the emden api in beat is enabling and we're barely just scratching the surface of it so i think that
[05:56:28]  the the design or the look of this middle layer changes i think if we move to a world where adapters aren't the important part and people can just use provider based
[05:56:37]  plugins to handle dev and prod then it really comes down to what kind of feature abilities you want to be exposed out of of your your functions or your workers or whatever you're
[05:56:45]  doing and if we get into that kind of world um ironically um it's the stuff like the generic file system routing server functions like some of those plugins are generic some of those
[05:56:57]  things basically what vinci provided ironically so it's like full circle vinci's had a big mess because it had to integrate a bunch of uh different tools and could be
[05:57:06]  beat native but i think avinci built today on beat would actually be in a much better place anyway that's me just speculating on what this means it's but it's
[05:57:17]  a very different topic from where we started here which is simply the fact that i uh i'm pretty sure this versell stuff is going to blow over and i think people are
[05:57:26]  taking it too seriously i especially on blue sky twitter's tame i was on blue sky and people were like really arguing with me that you know salt's our tan stack start
[05:57:34]  has nothing to do with versell and it's just like man like who cares seriously nuxt is fine nitro is fine the biggest like the parts that i'd be concerned
[05:57:52]  about aren't the parts you're going to be able to see or get from a release announcement it's like is it possible that in this kind of situation not enough funding
[05:58:00]  or push gets pushed towards these frameworks like you don't get to see that obviously hiring the developers is a first step but sometimes you need marketing you need stuff and if the company
[05:58:09]  has different alignments and they don't push other resources then yeah maybe there might be a problem maybe nuxt but like clearly nuxt lab was at a point where they
[05:58:18]  wanted to sell and i i know void zero was not a possibility i i'd be surprised if that conversation hadn't happened at some point um i don't think it's the
[05:58:26]  right play for where void zero is right now anyways right um but i think that like essentially this is a very strong move for the open source in terms of development if there's
[05:58:42]  implications in terms of you know how this impacts future growth of these projects i don't know if we've seen it in svelte we can't tell because we haven
[05:58:50] 't seen the other reality right self has grown during that time period with resell with or without its help and the thing is if you look at it from the perspective of these
[05:58:59]  developers like rich harris i mean he was working on at the newspaper and doing some stuff work having paid resources is a plus in itself that's already increased his capability what he
[05:59:10]  can do right and what's capable of the framework so like like i think that like you could always argue that maybe in these positions that companies aren't incentivized to do
[05:59:21]  more for the frameworks and i could even hardly say that's true of solid you know netlifier century like how how much are they actually going to push solid out there i
[05:59:30]  don't know remains to be seen in general just the first step of having developers and resources have that ability to work on thing is is is not a guaranteed thing in the
[05:59:41]  current uh um you know economy and where we're at so i mean this is this is just good the worst thing that could have happened is if nux labs was you know
[05:59:52]  perhaps having trouble or couldn't get acquired or and things under and it's only no one's funding nox that would be terrible this is great by comparison so i mean
[06:00:02]  i don't know the situations i don't know the strategic pieces of this but like clearly at minimum this is as good as the status quo has been going does it is it
[06:00:13]  as good as other options who knows but that's not really up for us to make a decision on okay sounds like tanner wants to build that smaller little layer yeah maybe
[06:00:32]  he will give me a collection of the plugins that are based on the new bingy i he's not incentivized to do the stuff that he already has with router though
[06:00:40]  so we'll see but maybe that's where it is yeah netlify and clapper eventually calls since all they don't open next right anyways i'm just getting there
[06:00:53]  twitter wasn't that tame at least from the nuxt perspective yeah i think it's just the fact that like uh um blue sky is a little bit more on the the openness
[06:01:08]  side yeah it's kind of it's interesting uh like like it was like it's like the opposite side of the thing like on one side nux is getting crap from
[06:01:19]  versell the for sale stuff which i expect they would get more on yeah yeah i i don't know it's kind of interesting these guys just getting worse uh if it wasn
[06:01:29] 't for people at mark there's some rich house i would never go there yeah oh haven't explained why the void zero thing okay cool cool let's see if i can
[06:01:40]  just quickly grab that sorry i i i'm just catching up with the chat oh come on sometimes the the the chat when i switch and i haven't been on the window
[06:01:52]  doesn't update right away um come on why am i not seeing it there it is or zeroed itself with an early stage startup and if we have a capital it wouldn't
[06:02:08]  make sense for us yeah okay okay that's exactly yeah they're the official word i mean in a lot of ways you see that can make sense but it's also i
[06:02:17]  think it's an interesting like noxt is a subset like void zero is kind of beat nox is a specific framework it's interesting nitro is an interesting i think nit
[06:02:30] ro would be the more interesting play for void zero and you know and i i recently joined another uh kind of discord chat words like uh evan and uh tanner and
[06:02:41]  myself like it's it's nitro beat and the tan stack solid start people kind of working together on kind of coming uh talking about how to split up the stuff in the
[06:02:50]  middle layer i think the interesting thing is i don't know in a in a beat m world like does it just take beat getting a couple more features to make most the reason
[06:03:00]  we use nitro disappear do you know what i mean like i i think i think i think i think stuff is shuffling around rapidly at this point which is why
[06:03:08]  i was kind of annoyed at like all the conversation going down because like i get bursell thing and pushed it but like let's not push the horse before it's there like
[06:03:17]  you know in the same way i i don't i don't usually show or case or talk about like how great something is until i have a demo showing it like i i
[06:03:24]  believe in having the thing in hand before you you know make the statement um yeah oh there excel funds both for sale and void zero yeah so it isn't even a red
[06:03:50]  versus blue you know coca-cola versus pepsi people kind of do yeah yeah there you go anthony's working on verse uh for visual having contract vo
[06:04:01] iseo to work on v dev tools now yeah yeah yeah yeah exactly yeah so yeah i mean i i just think that like this is an example of stuff getting overblown
[06:04:17]  it's people have liked because of the the problem is it i feel like maybe the view community caught blindsided they didn't i don't think you guys maybe realize just
[06:04:28]  how hostile the react ecosystem environment has gotten and with remix stepping out things have gotten more like there's there's some weird thing that's as i said not even completely like completely
[06:04:41]  real like where people have this perception on how like there's good guys and bad guys as i said it's almost like uh like we have like the you know the star wars
[06:04:51]  playing out or like um um the foundation you know like some big empire versus the you know so it's like it's not even react has gone in and versella and
[06:05:07]  nexicon such a weird place that there's a certain people just looking for some kind of narrative and it's it's really unfortunate because it where it gets to me is
[06:05:16]  when it pushes talk and about technology based stuff that has um that like without the grounding to actually technology i think there's a lot of really interesting stuff going on let's
[06:05:28]  just not like go in and be like like like like let's not get pushed so much into this kind of politics of things if this is the state of twitter and blue sky
[06:05:37]  i don't even look at hacker and yeah i oh god i yeah i don't know or reddit reddit would be the worst i tweeted this check on i'm
[06:05:50]  going to use nuxt because i hate herself people in your life they are having a pretty hard day today yeah because there is like a political alignment thing there are people like oh
[06:05:59]  at least what got me to say the statement but it was someone was like at least i can still use tan stack start and i'm like nope like i was just trying like
[06:06:08]  i started this whole thing because i was trying to like you know you know like my part of it was just because i'm trying to be like look like everybody like it
[06:06:23] 's kind of like that thing i think theo probably did this i watched a bit of his video where he's talking about like companies fun pieces of open source that are used by
[06:06:30]  everyone i think this is more than that i think this is like it's not just like the one obscure thing you know that's way down in the stack um i think
[06:06:44]  that like um even though nitro is kind of under the hood i think there is like i think it's a little bit more in your face than that but on the other
[06:06:51]  hand like yeah everything is everything you know like there's it's kind of it's kind of sad um i think it's a little bit more in your face than that
[06:07:09]  i think it's a little bit more in your face than that but i'm not i'm not i'm not it's his to publish did he ever release it if he
[06:07:16]  released it the that's a different thing but i'm not i'm not i'm not oh when did he publish it okay yeah i didn't see that one though i
[06:07:36]  guess it was about a month ago when i was away um is the video available anyway i'll check it out in the future i i'm wrapping up the stream now we
[06:07:42]  have gone way too long we're over six hours this is probably sorry nakil we beat the longest dream ever probably i guess we'll find out when it's done um but
[06:07:50]  he was very proud to be the longest dream i i'm i'm so done um i gotta go yeah uh this stuff will all blow over i do think there's some really
[06:08:03]  cool development going on though so look forward to that i guess as for everyone else uh have a have a great weekend all right