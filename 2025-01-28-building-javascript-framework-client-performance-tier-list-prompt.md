---
showLink: "https://www.youtube.com/watch?v=E5amN0_1XyE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building JavaScript Framework Client Performance Tier List"
description: ""
publishDate: "2025-01-28"
coverImage: "https://i.ytimg.com/vi/E5amN0_1XyE/sddefault.jpg"
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

[by:whisper.cpp]
[00:00.00] promise but i'm looking here at purely client side rendering what you know so i'm not focusing
[00:08.78] on primary backend very much you won't find a next js on here and i'm looking at declarative
[00:13.54] libraries jquery um just doesn't make sense because it's like vanilla js like there's no
[00:21.20] like you can write it as infinitely if you want to know vanilla js is god tier it's above s tier
[00:26.24] it's it's not even on here but i mean yeah so like you know yeah jquery is god tier as well from from
[00:36.76] that perspective right we just have some fun here because i actually laid them out in the order that
[00:44.96] they were released would you believe it that the very first declarative javascript framework that
[00:51.40] was released not the most first to get popular but released by date was actually my buddy here
[00:56.10] the big k knockout js um at least so i was thinking i'd just go in order right right from start to
[01:05.76] beginning but the truth of the matter is i realized as i kind of sat and looked at this list that there
[01:10.26] are definite anchor points right and almost this whole chart has to be anchored around the most
[01:19.42] successful most popular most known javascript frameworks otherwise you guys watching won't
[01:24.58] have a state of reference to understand what we're talking about yeah there's three views actually yeah
[01:30.58] i mean let's start with react because react is the it's the thing that everyone probably has experience
[01:39.54] with that they can put on a state of reference where should i put react what do you guys think i have
[01:49.76] an idea where i should put react but i i want i want chat to help me out here
[01:53.02] anyone anyone guessing where i'm gonna put react
[01:59.48] all right we got an e come on chat i need some participation and f f we got c
[02:06.94] react scan i think it says it all c c or d c yeah okay b c right in the middle c or b
[02:18.90] have today d c d yeah b c yeah so all over the place right this is why we have to start with react
[02:29.10] because without react we don't have we don't have a frame of reference so for me react is a solid
[02:34.96] deke tier um i think i think it is basically it's not the worst we've seen it's not it's far from the best
[02:45.74] um it's still considered a passing grade but barely
[02:53.70] let's keep on going okay so now we have our frame of reference all right let's go back to the beginning
[03:02.24] where should we put knockout js if react is a d where should we put knockout js the first declarative
[03:11.80] javascript framework used signals back in the day
[03:14.80] because i'm a stickler to performance surprise surprise surprise i see some bees going in there
[03:22.30] bees bees knockout's actually an e
[03:24.50] i get why you guys see when it came to updating very specific parts of the dom
[03:31.76] knockout to this day still runs circles around react the problem with knockout though
[03:36.56] was you had to create the page you had to actually render the stuff initially and knockout would go
[03:44.22] through your html templates and find all the data bind things and then reprocess it making it
[03:48.96] making it actually incredibly slow to render so right knockout no knockout was a fine-grained render
[04:01.00] actually this this is actually why i'm doing this chart knockout the very first framework was a fine-grained render
[04:08.96] it has it doesn't just have signals it has what i call what we're going to define as fine-grained rendering
[04:16.00] it was the first fine-grained rendering framework um it was the first one of the first possible the first declarative
[04:22.00] framework but it was it actually was a fine-grained render and it had signals it just was so bad at actually
[04:31.54] rendering the html like that like knockout was smart if you changed a control flow it didn't re-execute the
[04:40.26] whole tree it did partial like it had all the aspects of of of fine-grained in fact solid's original control flow
[04:48.06] i learned how to write solid control flow by looking at knockouts internals um knockout had pinpoint updates
[04:54.54] and modern fine-grained control flow so it was a fine-grained render it just was bad at rendering
[05:01.74] yeah so let's go backbone backbone backbone is a tricky one backbone as described would re-render
[05:19.82] the whole like people would use backbone and then they put like almost like jquery type enhancements
[05:30.12] if i use pure backbone and had it re-do the templates um the thing you have to understand is this is all
[05:38.30] pre-virtual DOM so like knockouts that hey put a bunch of you know observable signals in there and
[05:46.38] update little things backbone was like we have models and then we re-validate views which means completely
[05:51.34] recreate them from scratch
[05:52.68] yeah it's hard because part of me says that no no backbone should be like e i don't know if there's
[06:00.04] actually a a considerable difference between backbone and knockout um it's it's on the fence i'd say it's
[06:08.04] below knockout but is it an f tier um i thinking of the benchmarks at the time like the spinning circles
[06:16.68] and stuff backbone was actually fairly good on updates i think that's going to put in the same category as
[06:23.18] knockout this one's controversial but let's keep backbone with knockout
[06:26.72] uh these are all client-side frameworks that basically all do the exact same thing
[06:38.34] they are literally there to update create apps and update this this is not like something you choose
[06:43.82] because of a use case these are almost all completely equivalent they have special defining features
[06:48.98] but they're they're all almost equivalent
[06:50.78] right and we are considering legacy here because we are starting historically right i haven't caught up
[06:59.22] to react yet um angular js
[07:02.16] angular js like angular one
[07:10.14] is a tricky one
[07:13.38] it
[07:15.38] it it it it actually and because the benchmark time look at hype js react 14 or whatever it's
[07:25.78] actually i'd say on average ahead of knockout but below react
[07:29.78] um which sticks it solidly in an e tier for me it's close to d um but
[07:39.36] but like for me from performance and stuff angular one was never like it it was dirty checking in a sense you can say that angular one
[07:53.36] was the first block dom um approach we'll get to that later um but it was a dirty checking system that did a lot of
[08:01.76] unnecessary cycles and re-rendering um and those things cost more
[08:08.76] and the last one that that i'm going to talk about that came up before react is ember
[08:12.16] ember was like knockout it had
[08:16.16] originally embers over time has evolved i probably should have more ember on here the only reason i won't have more ember on here
[08:23.76] because the newer versions of ember did not actually ever change its performance profile
[08:27.90] ember to this day still is in the same place even though it's completely been rewritten and new engines and glimmer and all this kind of stuff
[08:35.68] um unfortunately for ember um not everybody can be a winner um
[08:40.92] from a performance standpoint ember had great features i was an ember developer
[08:46.14] um i was a knockout an ember developer brian florence was an ember developer
[08:49.88] um
[08:50.80] but like it was it was basically just slower at everything like even this even though it used reactivity
[09:00.96] to do like some kind of fine grain stuff it was still even slower doing that reactivity
[09:05.20] and then they replaced their engine with almost something like a v-dom and it was still the slowest v-dom
[09:09.60] and then basically every historical line of the way ember has always been pretty slow don't get me wrong there are frameworks
[09:17.84] on this list that are slower than ember and we'll get to them but this is this is what the first
[09:25.12] four year three to four years look like there was more frameworks but you guys wouldn't have heard of them i tried to pick
[09:29.68] frameworks that have like over 10 000 stars today there's a few exceptions but they're ones that possibly you could have heard of
[09:35.28] look now this is up to 2014 we're sitting at 2014 right now react looks pretty sweet here
[09:47.44] in 2014.
[09:48.56] we talked a little bit about each one react the first virtual dom library comes out at this point
[09:56.80] and it is significantly better a whole category better than every other library that came out at its time
[10:03.68] it was not the first declarative thing it wasn't the first like i'm just a view knockout was
[10:08.32] actually has the exact same advertisement you know but it was significantly better than
[10:17.04] everything up to this point right you'll be like where is it okay this are i just included this one
[10:24.48] because i needed something else also from that time period uh 2013 14 time period this is reactive
[10:30.24] this is rich harris's originally reactive framework um it was used git dot set and set for its like signals
[10:39.28] implementation um it's very early work in him making kind of like a knockout-esque framework and in so it
[10:46.72] is also pretty solidly e tier um but just wanted to give a quick shout out there because rich harris was
[10:54.24] already there prius felt days um now we're getting into 2014 what else came out in 2014 marco
[11:03.20] marco primarily a server-based framework right they invented islands out of order streaming
[11:10.96] basically suspense um by 2015 they had all the features that we you know we we talk about these days
[11:18.56] but we're talking about client-side rendering so marco surprisingly i don't know if you guys guys know
[11:26.64] where marco goes where where do you where where do i see some s's and a's in there i i don't want to
[11:33.28] i don't want to disappoint you all but marco is not for client-side rendering thing marco is actually i'm
[11:42.96] gonna put a d these days i think it's kind of slid to an e but it's always been very close to where react is
[11:51.52] yeah all right now we got view and i'm gonna count this category as view one and view two i know there was
[12:01.20] improvements over it but
[12:02.72] is actually an interesting one you're guessing beat here that's not a that's not a bad guess
[12:13.68] not a bad guess c i think d tier maybe c yeah
[12:16.40] yeah view i'm gonna give it our first c tier um
[12:24.08] it i don't know what about it i think it was a slightly faster virtual dom they had uh signals
[12:31.92] under the hood to kind of make its re-rendering process a little bit better but generally if i go
[12:39.44] back as far as i can view has been basically just a t a category above react view always under it yeah
[12:50.32] right so view view is pretty good um but view was not the only one around that time single file
[12:55.52] components started showing up we had things like riot i don't know if anyone's familiar with riot
[13:00.16] i imagine not but i'll help you out riot is also a c um it you like view these these are new vdom libraries
[13:13.28] that used signals essentially or under the hood some reactivity to trigger their vdom
[13:18.32] in the 16 period you guys might not know this one mithril this one was like a faster pure functional
[13:26.56] approach to the vdom i'm also going to put that as a c um basically people saw react and they're like
[13:32.80] we can do better
[13:34.56] right
[13:40.72] and they they did honestly um as as time kind of went on we start seeing things fill in
[13:50.96] where's aurelia yeah i don't have aurelia to be fair i and i just realized i don't have elm either
[14:03.12] um yeah this is one of the first um
[14:09.52] like compiled to javascript framework pieces so let's get elm in here
[14:17.36] because elm
[14:25.92] is might be it's hard it's it's either c or it's yeah i'm trying to think of because like i
[14:36.88] know off hand where elm sits these days right it's kind of uh it's kind of a c maybe
[14:47.44] but i feel like historically it might have been more of a b so it's like
[14:50.80] oh it's it's tricky let me let me i'm i'm actually going to pull up an old gs framework
[14:59.52] benchmark with elm back in the day just to kind of get my bearings here yeah let's let's look at this
[15:08.40] elm because like okay mithril 122 view 2 115 uh
[15:17.04] yeah elm is 1.34 ember is 2.14 just to give you so i don't know why mithril is slow on this
[15:29.28] one this is pre-release yeah mithril is like 1.22 there okay yeah okay that's good enough for me
[15:33.68] i'm going to put elm as a solid c
[15:35.36] okay so there we go we got elm in here you're starting to see a trend right um
[15:43.04] it was a vdom like react but again what we're seeing here is a bunch of vdom libraries that are
[15:52.32] slightly improved over react
[15:54.48] so the next one on here is important this one honestly i think is going to be the most controversial
[16:02.80] placement for me where does inferno go because there's clearly a trend you're seeing how we're
[16:09.12] kind of building up we started in e react showed us that d was possible and then you know marco came
[16:15.84] in and then a bunch of these guys improved but then out of left field we get in inferno and
[16:23.44] inferno if you go look at tests and stuff today it's probably verging s tier but the pro the thing
[16:31.76] is the funniest thing about inferno is about two years ago something changed in the browsers and
[16:38.16] inferno suddenly got faster without the code changing so like it's like should have it always been faster
[16:44.56] most of inferno's life it's been a solid sorry a solid a tier oh did i drag anymore so i i'm gonna i'm
[16:55.84] gonna put it here for now it's questionable but but it's it's it's it was the first framework that was
[17:06.80] like like it just skipped the category there was no b frameworks things people are just kind of
[17:11.52] creeping past react to see and inferno's like yeah yeah you guys this space is a lot bigger than you
[17:16.96] thought like when react came out people were like oh we probably hit web rendering performance pinnacle
[17:22.56] you know and inferno was like you guys aren't even halfway there um
[17:28.72] it's what's questionable is whether inferno should be s tier
[17:31.84] yeah power static analysis and jsx dominic ganaway way ahead of time with in its approaches in terms of
[17:42.72] optimizing he took something that looked like react and made it way faster by clever engine level
[17:49.36] optimizations and using uh static analysis on jsx um which would later lead him to get hired
[17:57.20] at facebook to work on pre-packed for the react core team and his compiler skills to come up again
[18:03.84] because he was also the lead on svelte 5. um so this is this is i i already mentioned where rich
[18:10.08] harris kind of jumped in the game um back with reactive but dominic made quite the debut
[18:16.96] irrelevant for the stream yeah he worked on lexical at facebook as well um kind of the react core team he
[18:26.32] tricky with the tricky part with compiler analysis is you need to set some certain boundaries or rules
[18:32.96] or constraints around it and the react core team with the concurrent model wanted to go a different
[18:37.92] way so basically they weren't able to apply his optimizations and he found himself kind of sitting
[18:44.40] on the react team and being like how do i fit in he the projects that interest stuff that they hired him
[18:49.76] for you know because like he basically blew everyone away with inferno he found himself like not being able to
[18:54.64] actually work on react moving forward so we picked another incredibly difficult problem which is
[19:01.12] getting high performance in text editors along with accessibility
[19:05.44] so there we go we got inferno
[19:09.68] all right next is preact
[19:13.36] where where do we think preact come up those two came up out almost i think a month or two apart from
[19:19.84] each other we're right at the end of 2015 right now
[19:22.08] no i will not be placed i follow benchmarks preact actually from a performance standpoint has always
[19:31.84] basically been another one of these c's
[19:33.76] um it's it's a good c but it actually and most of its life has lived very very close to view maybe even
[19:44.32] slightly behind view so preact is going to be a c
[19:49.28] next one i'm using the modern logo but i'm only going to give angular a second thing it's arguable
[20:00.80] that angular 19 forward or the next version of angular like there should be another angular at
[20:04.80] the end of the list and it should use this new logo but i'm now doing angular instead of angular js
[20:09.20] order doesn't matter i'm just putting them in the order that they were released at the specific tier
[20:20.16] so angular 2 3 4 5 whatever d maybe even e any any any anyone else got got any guesses where i should put this
[20:32.80] i'm waiting on you what do you got e d c s d yeah angular
[20:50.16] angular has always this is the weirdest thing i don't know how they do it angular and react
[21:01.44] have been lockstep for basically forever i like only recently that's why i mentioned it in the last
[21:09.44] year or so i've been seeing stuff maybe different types of control flows and stuff like things
[21:14.72] starting to where where angular is separating itself but no matter the release no matter what came out
[21:21.04] react got a little bit faster angular in fact they basically have been lockstep for all of time
[21:26.16] right is the same at the the funniest thing is most frameworks actually move up at the same time so
[21:37.28] generally actually yes this this this there's very there's not enough it's very rare that frameworks
[21:45.84] actually move more than maybe half a tier away from where they were sitting
[21:49.60] comparative to their competitors
[21:51.60] no this is not angular powered by signals this is angular like for the last like this is angular 2
[22:01.68] through i don't know 17 or whatever um yeah angular with signals is probably a c maybe even a b the
[22:12.88] funny thing is angular tends to actually always be just a tiny bit ahead of a react it's funny because
[22:18.64] when you talk to angular folks they like react i don't we i don't pay attention to react i don't
[22:22.80] look outside of google you know like historically but they've always somehow managed just to be like
[22:28.48] right there like right in front of all right now we get svelte one and two so let's we get svelte one
[22:41.60] and two i'm not that familiar with svelte one but i'm so this is basically svelte two
[22:46.00] svelte one and two
[22:50.16] is any guesses i know because i'm the one who did the upgrade from svelte two to svelte three in the js
[22:58.24] framework benchmark um but this is svelte two this is before they got the the you know updated
[23:06.72] syntax in the new compiler and all that kind of stuff got some c's some b's some d's b or c yeah
[23:13.36] i'm gonna say that svelte two oh man was a significant improvement over or or svelte itself
[23:20.48] was a significant improvement over reactive but it is also c tier yeah a little bit
[23:28.24] the disappearing framework thing really caught on with svelte three this is if you've never seen
[23:35.28] old svelte two it looks more like reactive it had like single file components but it had like dot get
[23:40.32] and dot set for state there's no like let variables felt three it's a svelte that everyone knows this is
[23:46.80] the svelte that now that was 2016 that was actually the end of 2000s towards the end of 2016. this framework
[23:55.20] might have actually come out before svelte and i might put in the wrong order but we have inferno
[24:00.88] at a and um everyone else is kind of below it i'm gonna this one here's a small framework
[24:13.68] blazer has a client rendering framework um to my knowledge i htmx does not blazer actually has like
[24:23.12] a javascript framework that does rendering this one here is a small one this one's called imba it was
[24:33.60] made by like the scrimba people it was a compiled language kind of like elm concept um and they they
[24:44.24] they caught kind of called it out as like the fastest framework they made this stupid benchmark
[24:49.12] that uh rich ended up using in the svelte 3 release where they showed it was like 20 times faster than
[24:54.32] react the reality is it wasn't but if you're looking at the time and the type of frameworks that were
[25:01.76] popular and available um you know there were other faster frameworks i don't have like the fastest beat
[25:07.36] on things they weren't that popular like other than they're like you can imagine when inferno came out
[25:12.24] that there's like half a dozen other smaller frameworks that work like inferno but nothing
[25:16.56] that kind of caught on imba solidly is going many of you probably don't know it but it's going to be our
[25:24.88] first b can't drag on this computer at all because it's stupid it's gonna be our first b tier framework
[25:34.64] it actually did have significant performance improvements over what had come before um but it
[25:40.00] was it wasn't quite the same um again it was a virtual dom approach it was leveraging a compiler just
[25:46.88] not as efficiently as um inferno its big point of sale though was like the dx if you ever seen it
[25:53.60] it's like coffee script almost and the templating like constant coffee script it's like this it's
[25:57.92] completely its own language yeah yeah the marketing on imbo was really good i remember that
[26:08.08] all right so we're basically at 2016 right now and between 2010 and 2016 we went through half the list
[26:18.64] most it was a very fast period we went from 2004 13 14 with react to filling in the rest of this chart
[26:24.96] in almost no time right um next one i got here is hyper app it's got like almost 20 000 stars on github
[26:37.76] you probably don't remember it was this is when library started like preact kind of started this
[26:41.76] small library thing because preact was only three kilobytes hyperact was like can we do it in like 1.2
[26:46.56] kilobytes um hyper app uh is performance wise was you know a v dom or whatnot so it's it's it's it's
[27:00.40] it was small so it loaded faster but it is still going to be this dictionary popping up
[27:07.44] so much fun it's still going to be in this category i think um that's why i feel like it
[27:12.88] i don't know if anyone knew it
[27:13.92] why was preact fast and reactive important signals preact always went with a slightly lighter more
[27:22.08] optimized version of it as v dom preact and react historically have been closer in performance and
[27:27.28] people give them credit for um but they've generally always just been a bit ahead a lot of people when
[27:34.80] they when inferno came out they they assumed that preact was like up with inferno you know those are
[27:40.80] the two leading things but preact and react were a lot closer than preact was to inferno
[27:46.08] it preact was created probably for size i think i don't know we'd have to ask jason miller but
[27:55.12] preact was considerably smaller react even back then was still like 30 some odd kilobytes preact was three
[28:00.48] kilobytes in forno split the difference around eight or nine kilobytes five or maybe ten kilobytes but
[28:06.40] inferno was about speed
[28:14.64] no preact is still a v dom until this very day um preact is yeah
[28:20.08] the i this is why there's a lot of misconceptions out here i really want to clarify on some of these
[28:28.00] parts um if if there was a major change like preact stop being a v dom um i i we will get to it um and
[28:37.20] we'll have a separate category but preact is still here okay i got one for you all lit
[28:47.20] this and this it's funny because i i didn't put this out here because people start saying like
[28:51.92] their favorite web component frameworks like stew lace or whatever generally speaking web components
[28:57.28] will add a tier to your performance so like if you're an a framework you made a web components
[29:02.64] actually that's not true if you're towards the top end like an s or an a it'll take two tiers off
[29:08.16] and then if you're like maybe like d it'll take one tier off so if you had react and put in a web
[29:12.48] component now you have e if you had an s tier and you put it in a web component now you'd have a b
[29:17.84] tier thing so lit itself i'm talking about the renderer i'm not talking about the web components
[29:23.20] i preact yeah no lit has no v dom it's a dirty checking system but it it and another uh lighter
[29:30.40] html i think or what was the original one hyper html hyper html by uh which actually came out before
[29:37.28] lit and did exactly the same thing um just as i said not as popular and he made like four different
[29:43.60] frameworks every time he came up with the new version andrea diamachi ended up like making it
[29:48.56] different and then getting different github stars unfortunately so like it never got popular but hyper
[29:52.80] html in the spring of 2017 pioneered a completely new type of rendering bringing back dirty checking
[30:01.44] but leveraging the fact of cloning templates um and more specifically template literals because template
[30:07.04] literals have this weird property i don't know if you guys know with tag template literals it remembers
[30:12.16] the static array like the static strings that you pass to it so if you have a i mean i can just put
[30:19.04] something in here so you can see what i'm talking about but if you have a tag template literal like
[30:22.88] html and you have a function like let's say function my component right and then in here you have this
[30:32.88] right so you return html right so you return html and then you put like i don't know div
[30:39.12] really care whatever and then you have some interpolation in here where you have like some value
[30:46.96] five whatever what this gets converted into essentially like html function and then it's like an array of static
[30:56.80] and then like a list of uh the holes right and this static array
[31:09.20] is static forever if you call this function 10 times they don't recreate this array they just know
[31:14.72] this array exists which means that you can use this array as a stable reference even if you re-render or
[31:20.88] recall this component over and over and over again in a sense it works like a vdom but um it only fills in
[31:30.00] the holes by dirty checking the values in the holes and the static arrays serves as a stable reference
[31:35.04] kind of the same way that react hooks would keep references or whatever like um and this is an
[31:39.84] interesting property built into the base of the tag template literals but it basically invented a whole
[31:44.72] new type of rendering back in 2017. it works like an inferno vdom kind of yeah and in so
[31:54.48] lit html is small fairly small maybe about 12 or 16 kilobytes and it's it's our second a tier something
[32:03.12] finally joined inferno at the at the top so um credit goes or you know credits due so to speak um
[32:11.60] even if lit you know with the web components and everything ends up maybe
[32:18.96] a b to c tier lit html is a brilliantly fast renderer
[32:30.96] all flames is a pattern right well i mean blazingly fast you know this is this is the origin or the
[32:39.12] original blazingly fast inferno right so these flame logos were trying a good way of showing people that
[32:45.04] you're blazingly fast okay okay now we're getting into 2018
[32:51.04] this is one you guys might have heard of it's called alpine
[32:56.16] um it let's see if you can guess where it goes it's a fine-grained rendering
[33:04.48] system like like some of the earlier ones we saw like knockout it uses signals it does not use a vdom
[33:12.96] and it uses template data binding kind of like knockout did so when it renders the template it
[33:19.04] has to parse through the uh html to to to get its bindings
[33:24.96] it is based on views reactivity package but as people should know reactivity performance actually
[33:37.68] doesn't impact render performance very much like if you're if your reactivity package is very slow
[33:43.12] it will but if you take almost any modern one and swap it your framework won't be faster
[33:49.12] i'm that's not true of like five uh five years ago but these days like the the optimal change
[33:57.68] between reactivity doesn't make a difference alpine is going to be our second one to go in the f category
[34:04.48] actually um alpine
[34:06.48] has fast reactivity but it's templating is slow even slower than um knockouts they didn't optimize
[34:16.64] things like control flows um even though it was fine-grained um it's interestingly enough not even
[34:25.20] us because of the view because they got the view reactivity in their own stuff it's not even particularly
[34:30.72] small um like if you remember there's a petite view thing evan made over a weekend um because
[34:38.72] someone made some comment about you know alpine being like a better view even though they was using
[34:43.36] views js reactivity and now and i think that you don't piss off in you especially when it's something
[34:49.92] that like literally he could spend a couple hours because view one was kind of like alpine or closer to
[34:55.68] knockout and so essentially um it it's like it's basically knockout but maybe slightly smaller than
[35:08.96] knockout but generally just a similar approach to knockout js just kind of worse
[35:23.68] um yeah i don't know it's an interesting one because in some ways it's really easy to adapt
[35:33.44] adopt alpine for uh backends the same way it's easy to adopt knockout or backbone or some of these original
[35:40.40] tier ones for backends which has made it popular it's like a retro version but in some ways um it
[35:45.52] hasn't actually improved and maybe even slightly worse than the original like in some ways alpine is
[35:50.32] better they're better at handling what i call like hydration type scenarios where you're like trying to
[35:56.88] wake it up in the client then knockout knockout never really considered those kind of scenarios
[36:02.16] but on a raw performance level in the client alpine is none yeah see everyone says it'd be biased but the
[36:09.92] the benchmarks don't lie solid i'm gonna obviously where am i gonna put solid
[36:19.04] a tier no it's always the first s tier according to the modern to the mod did modern the funniest
[36:27.04] thing is it kind of did but it didn't do anything the browsers changed so this is why i said inferno
[36:34.80] was the most controversial thing here because the browser changed and now inferno and solid are almost
[36:40.40] next to each other inferno might be like slightly behind but it was from no change on inferno's part
[36:46.24] the browser's the browser changed
[36:47.92] so we've seen some compiled js libraries yeah blazer was also came out in 2018
[36:58.16] and we're getting into the compiled languages that aren't javascript blazer
[37:02.00] some people made a joke that blazer could have its own category and they're not wrong blazer
[37:10.40] like blazer is basically this it's like almost feels bad putting blazer next to alpine and ember
[37:20.08] because alpine and ember are at least a tier's worth better than blazer blazer is essentially
[37:28.24] like it's it's hard to con like if you went out and just
[37:38.08] took some javascript and then like
[37:40.80] json stringified it and then inner htmled it everywhere and like didn't
[37:51.36] like didn't do anything you could think of optimally it would probably be faster than blazer um
[37:58.16] it's not blazer's primary purpose but it's it's like
[38:07.36] yeah i don't know
[38:07.92] html is fine it's just that um okay next one another first of the rust libraries this one was
[38:19.92] based on react it's called you it's a rust framework that renders um
[38:25.68] a beat on just like react see what i'm hoping you get out here for the most part is from this point on we
[38:34.40] can start getting more accurate guessing where these things go
[38:41.12] yeah you spelt y-e-w like the tree
[38:44.88] any guesses for you did anyone even know you
[39:02.40] probably fascinating react there is an overhead of doing wasm in the browser that people have to get
[39:08.72] over and you was not the one who figured out how to do it that being said you was impressive
[39:13.92] because as the first rust compiled framework it actually did a decent job of matching its uh its
[39:21.36] influence so you here is i can spread these out a little bit you here is actually a d tier
[39:29.52] yeah wasm has overhead um because of the communication in the serialization boundary
[39:41.36] so pretty cool to see rust on it we've got blazer some some c sharp uh we got elm we got imba you
[39:50.32] know uh where's imba here some different you know compile languages
[39:57.04] but i mean u has almost 30 000 stars on github
[40:00.64] okay now we're in for a big one one one one that really revolutionized the way people think this is
[40:09.20] svelte 3. um svelte 3 um was a pretty significant jump up from svelte 2. not not the biggest to be fair
[40:22.00] um but svelte 3 definitely was an improvement here so technically it everything had been revised with
[40:31.92] the new compilation but mechanically it was the same general idea where it was doing dirty checking that
[40:37.76] was compiler optimized um but i i think rich had moved away from i don't know if he compiled the
[40:45.84] signals in one or two but he moved away from from the like old reactive reactivity and almost went
[40:52.96] straight to like let's get rid of it all let's just use the compiler on the language so yeah svelte
[40:57.68] we got some guesses we got bleep plus ba yeah b plus is actually probably the the where this svelte 3
[41:06.72] goes um i think i think it is a good b framework it is i'd say slightly better than imba for performance
[41:15.20] um we're gonna copy one of these
[41:17.20] so we're we're seeing we have seen over time libraries kind of start getting up there but like
[41:25.68] in terms of a timeline
[41:32.00] this group has been taking a little bit more to move up right um we're now this is 2019 right so
[41:38.88] by the time svelte 3 comes out we already have inferno we have lit we have solid um it is a it is
[41:45.60] a sizable improvement to svelte though
[41:53.12] right and then the next one i have on my list i guess i'm jumping right to 2020. i guess the rest
[41:59.60] of 2019 was a quiet year um which is
[42:03.84] view 3. was that 2020 or 2021 i it doesn't really matter they were working on it long enough
[42:15.60] so we're gonna we're gonna put view 3 in and can you guys guess where view 3 is
[42:18.48] yep
[42:27.28] slightly behind svelte a little bit slower than svelte but solid b tier
[42:44.08] the interesting thing about about these is going from 2 to 3 they updated their change management
[42:52.48] systems both of these frameworks but they didn't actually change their mechanical mechanics or
[42:57.76] rendering this is still dirty checking this is still a v dom just like this is a v dom
[43:02.00] yeah september 2020 yeah so i'm i'm i'm i'm pretty i'm pretty accurate here
[43:14.56] the f tier stands for flutter flutter and blazer can battle it out but flutter web i don't know if
[43:20.40] flutter mobile is any good but flutter web is not particularly impressive
[43:25.04] preact preact equals view but react at this time no preact is still in the same place preact hasn't has
[43:35.52] not moved at this time preact is still solid c um 2019 2020 preact is is in the same place
[43:45.12] okay now we're getting to
[43:50.56] 2021
[43:57.12] and the next framework i have on the list is
[44:02.00] quick incredible non-hydrating framework has signals um right out of the frameworks that we have listed today at this point
[44:12.80] um
[44:13.76] the only one that has signals that was created after i mean it's hard to say view had signals
[44:22.64] under the hood so then view view 3 actually still has signals plus a v dom svelte has an optimized compiler
[44:29.52] quick is
[44:30.48] uh well let's see if you can guess quick has
[44:34.96] signals plus a v dom
[44:40.00] where do all the signals plus v dom libraries go
[44:46.72] the difference between view is a weird exception because they did incredible
[44:52.48] compiler analysis but all these signals plus v dom libraries are actually right here
[44:59.52] so quick comes in as a c tier
[45:01.60] yeah in terms of performance in the client quick was great but not in terms of performance client it's not
[45:15.84] uh outstanding it's actually it in preact i think they might even have the same base on their v dom
[45:21.44] implementation like the same inspiration uh there's a couple like oh god what is it called there's a few
[45:27.44] a few different v dom implementations that were created back in the 2014-15 period um yeah
[45:32.56] so v dom plus signals
[45:36.48] can they can they generally
[45:41.92] highlight really well for the single pinpoint update case but then you're paying more on the
[45:50.00] re-render because the signals are heavier than the v dom so if you're re-rendering stuff signals work
[45:54.40] against you if you're doing pinpoint updates signals work for you they're kind of at odds with each other view
[46:00.96] through careful compiler analysis with view 3 managed to just break out of that but they are the only one
[46:08.08] that and i think it might be true to this day that does signals plus v dom
[46:13.52] above a c tier that that that again makes view 3 a view impressive
[46:23.12] okay you guys see the line phase i got one for you million js it uses a mechanism of using a compiler to
[46:34.08] to to to basically um flatten out all the v dom nodes into cloning um similar to way solid
[46:46.08] and what it does cloning but keeps the holes can like v dom ish
[46:52.56] yeah from its description it should be an a tier list but from its actual score and performances in
[47:02.16] benchmarks we've got our second s tier
[47:04.40] million is very fast i aiden came out and did this whole video where he's like
[47:14.40] showing 70 percent fast in react that was not accurate
[47:17.36] right but million
[47:29.84] is definitely faster than other solutions block dom in general slasks because it's basically
[47:36.00] it's it's basically an optimal mentality of the v dom it's essentially a place where you've erased
[47:44.88] everything um but the holes the way that um you know you know dominic ganaway always described to
[47:53.60] me what a v dom was right it's funny because for like you see svelte 3
[47:59.68] and view 3 here but a lot of people at this time period thought selt 3 and view 3 and solid were
[48:04.48] all the same the the this is not the case actually i wonder
[48:10.00] so yeah i mean it's arguable that in practice million might be
[48:18.40] an a tier because it still has to deal with a re-render model maybe if you add million plus signals
[48:24.88] you know you could do something smart there um but from a raw rendering benchmark performance
[48:29.92] standpoint you know when people are clocking it million is about as fast as it gets million is
[48:38.40] actually in those kind of tests faster than solid but it also can't hide um like it doesn't it doesn't
[48:51.60] solve the architectural problems so there's cases where million would be worse
[48:56.40] if we remove spas do we need reactivity um no i guess but if you can't remove i mean when you say
[49:12.80] single page apps okay no it basically depends what you mean by single page apps if you if you if you need
[49:19.28] client-side interactivity you need reactivity so i guess i'll put it that way
[49:23.68] well it's still a vdom library that depends on re-renders so even if you
[49:38.08] render the stuff fast it's like the exact opposite of the knockout problem when we talked about knockout
[49:44.64] earlier we're like it's incredibly fast at updating the one thing but then it sucks at rendering because
[49:50.08] it also does template processing and whenever you switch page you know it's slow million is incredibly
[49:55.52] fast at just rendering but it's it's it's not as good at like in theoretically at doing the the more granular
[50:04.72] work architecturally because it can cause uh re-renders we'll get to that as i said
[50:12.40] we're getting pretty close to the end of the time here on the tier list so that we can actually get
[50:16.72] into the guts of fine-grained i just wanted to get people thinking about the kind of terminology and
[50:21.60] things we talk about
[50:22.32] how how relevant is rendering speed in the 80% case let's say after i mean it's it's a good question if
[50:36.48] you're talking apps um rendering speed is it can it can impact like the sluggishness and the feel of
[50:45.28] the apps to to a certain degree but how much hard to put into numbers when you're in a certain range
[50:54.24] here how much of a difference is each one making i'm i'm not sure i will say it makes a bigger difference
[50:59.92] than reactivity performance but um i i don't know if it makes a huge uh difference but i'm again this is
[51:14.08] mostly about talking about i'm thinking about things architecturally and if they have the impact you're
[51:19.04] right none of this could matter conceptually but this is just where this the tools sit from my perspective
[51:29.92] uh well this start this is a good time to kind of bring this up because adding signals to another
[51:35.76] system has overhead in a sense solid signals plus millions rendering technique is what solid is
[51:46.32] he does the same thing the cloning the nodes and like he i i told you how leo from mithril's big
[51:58.96] helpers um you know experience and bounce ideas when i was starting um i i i spent a lot of time with
[52:05.76] aiden when he was first developing million um and you'll see a lot of solid type influence in million
[52:12.32] although he also was looking at the other block dom library um block dom it's actually called block
[52:18.24] dom so to be fair there are other impacts on that as well but in a sense that the modern rendering technique
[52:27.36] is kind of that it's just in like a rendering benchmark you're not going to tell the difference
[52:33.20] like you'll see the signals overhead but you won't see the lack of signals not overhead
[52:46.56] um inferno um inferno still has a vdom it caches vdom nodes but it still has a vdom browser changes to
[52:55.12] close the gap i think of the overhead of doing that where million um actually like gets rid of the static
[53:01.60] nodes like just turns them all into templates it doesn't care about them where um you're still dealing
[53:08.32] with vdom nodes with inferno yeah this has nothing to do with server side rendering and first contentful
[53:18.80] paint it was funny i was reading a benchmark or some client performance choice thing where they're
[53:23.04] comparing all the client side frameworks and they're literally using lighthouse that makes no sense like
[53:28.56] it makes sense from the perspective of like i want to compare back-end technology or whatever but if you
[53:33.44] take this list of frameworks and then only compare on lighthouse like you're it's ssr you're testing you're
[53:39.44] not testing the the framework's render speed okay next one
[53:47.68] leptos leptos is a signals-based reactive library written in rust it's basically solid.js if it was ported to rust
[53:59.44] the only rust i've ever looked at was when i had greg from leptos on stream i i it was sounded really
[54:08.64] novel but i don't know yeah every every framework in this list will get 100 in a hello world pretty much
[54:15.20] uh i i i don't think blazer will i it is arguable that these f tiers can't make that 100 and in a
[54:23.68] hello world maybe that's the the yeah
[54:26.08] yeah leptos i think you guys know there's a slight overhead getting pretty good at guessing leptos is an a
[54:38.64] uh
[54:41.20] yeah this next one's dioxis it's a block dom uh built in it
[55:07.84] yeah leptos is in rust and wasm right we have a few of them we have blazer
[55:16.08] we have you um leptos was huge because it actually showed that you could be fast and use wasm like
[55:26.40] these ones are all in like react range and people like oh this this is like like look if you want to
[55:32.72] write a highly interactive app where you don't care that much about maybe page load times
[55:36.96] you can use leptos and it will probably be smoother and outperform a react app that's what this is
[55:43.36] basically suggesting
[55:44.24] dioxis is also an a says greg it's weird though because if i if i i wasn't going to give it an a but
[55:55.60] that's only based on the js framework benchmark performance can you explain maybe greg maybe this is
[56:00.56] not fair maybe this is incorrect but this this is this is where i was going to put it
[56:09.84] greg says that it's an a so should we trust greg i don't know maybe greg knows what he's talking
[56:21.76] about about rust more than i do fine greg you've convinced me it's going to be an a
[56:26.32] it's possible for the for the old version this is my list
[56:37.68] this this though in a sense is this do you know what i mean it's solid a million but in rust it's
[56:47.12] this is happening right here okay this is react compiler
[56:52.72] fun one where does the react compiler go
[56:58.72] raw rendering performance this isn't about the code you write this is about just raw rendering performance
[57:09.68] yeah i'm gonna i think this one's gonna be fun
[57:19.28] for all you guys saying d why why are you saying d
[57:38.96] same as react yeah yeah i did give them too much of a hint yeah it's a d react compiler
[57:45.44] is writes really good react code but if you but what happened to the did i crop it by accident
[58:01.44] it let's let you write really good react code but it also
[58:06.00] doesn't really change much similarly if if quick
[58:15.92] beat on with signals is here you can guess that preact with signals is also still a c tier
[58:22.32] it doesn't change the quality of the of it have you noticed to go from c to b has almost requires compiler
[58:29.36] um interference
[58:32.16] going from b to a has required dropping the the beat on for the most part
[58:41.52] to either a block dom or a reactive thing inferno is just so optimized that dominic somehow
[58:51.92] changed the math
[58:52.72] yeah just just kind of putting that out there yeah so yes the react compiler doesn't change anything
[59:05.12] yeah benchmark code is already written in an optimized way exactly
[59:13.92] it just means you don't have to write the optimization instead of your dev that being said if you look
[59:19.84] at the optimized code for frameworks that aren't called react you'll find that um
[59:29.12] you're like the non-re-render frameworks you'll find that funnily enough
[59:32.48] the basic code is the optimized code um it's it's it's an interesting thing that we started noticing
[59:41.28] is that the idiomatic code for solid was the optimal code where the idiomatic code for react was not
[59:48.32] the optimal code um the optimal code um it is it's interesting
[60:00.16] i mean the million js that goes in the benchmark people use million in react but it's not react doing
[60:10.16] the rendering so i don't count million as like you're he in a sense million maybe doesn't belong on this list
[60:17.12] because um aiden doesn't really didn't really want to make a full framework and push it
[60:23.92] but like there's basically nothing in the it's million is more like a parasite that lives in your react
[60:33.04] app like there's nothing about the part that million doesn't that is react
[60:40.16] so we got two left we got svelte 5 and we got view vapor
[60:47.28] yeah i mean people kind of can guess where this is where does svelte 5 go
[60:55.60] i already kind of revealed this earlier svelte 5 is s tier
[61:10.16] so svelte 5 is not any is not any slower
[61:18.24] really svelte 5 and solid are basically identical um this and it's because they are also very
[61:28.16] identical like very close in implementation um so um it signals it's fine grain rendering a lot of the
[61:38.08] stuff that we talk about today um it's as i said we started with reactivity and we're back here you
[61:42.88] know 15 years later
[61:44.40] vapor i don't know where vapor goes because it hasn't been released vapor in evan's original show
[61:57.28] was s tier in the current benchmark it's a tier i'm going to be an optimist and stick vapor up here
[62:05.84] because i trust the view team will does good stuff and that it will get there when it gets there
[62:10.56] but but that is my completed list i think um we can shrink this down a little bit blow it up but okay
