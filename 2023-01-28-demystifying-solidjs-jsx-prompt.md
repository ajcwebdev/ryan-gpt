---
showLink: "https://www.youtube.com/watch?v=5du6jBlryIc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Demystifying SolidJS' JSX"
description: ""
publishDate: "2023-01-28"
coverImage: "https://i.ytimg.com/vi/5du6jBlryIc/maxresdefault.jpg"
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

[00:00:00]  Hey everyone how you doing today? So I'm running a little bit late. I was just helping a company that's based on solid and solid start and they have a big
[00:00:15]  beta release coming out pretty soon here and I wanted to make sure that that went off without a hitch so I was helping them a bit on their on their project which took
[00:00:27]  me a little bit closer to time than I had hoped so how's everyone doing today we're just gonna get started up here in a minute I'm gonna do some posts on
[00:00:37]  social and whatnot and we can we get right to it sorry I also updated my Mac like right before that so you know I'm glad my screen still shared yeah all right
[00:00:52]  all right geez I have so much open crap here I'm just cleaning stuff up how's everyone doing yeah let's give people a moment to get to get joined on and
[00:01:06]  whatnot all right that's cool yeah first first timer to the stream that's awesome I it's it's it's almost impossible to put a stream at a time that like everyone
[00:01:20]  can participate in usually your best choices for me is like first thing in the morning Pacific time but I like streaming a bit later if anyone knows I used to stream at 8 p
[00:01:29] .m. Pacific time which is I said there's no good time but there's there's quite possibly a worst time and that worst time was the time that I used
[00:01:37]  to originally stream at so at least we can be thankful that I don't stream at 8 p.m. Pacific anymore because well that probably was okay for parts of Asia it
[00:01:49]  was a basically complete no-go in Europe and it was really awkward for even the east coast of the U.S. Hey everyone joining on yeah let's see here
[00:02:01]  let me get twitch going too just so I don't miss any of your great contributions that come in through twitch because it does not stream that through stream yard for me so give
[00:02:12]  me a second here it looks like prime is still live so not that his viewership really always lends into ours but we're just getting started here what we got here nine
[00:02:25]  people on twitch every most people most of you all coming in from YouTube then let's let's let's see stuff yeah solid shirt yeah I am definitely rocking the solid shirt
[00:02:33]  today um yeah but we we are just getting started here um let me sorry I'm like I'm so far behind just because of that I to be fair I'm really stoked
[00:02:48]  about this project that I I don't think I'm supposed to spill the details but they they already have close to a million customers and um it's in the social media
[00:02:59]  space and uh yeah I mean this is probably one of the biggest projects right now for for solid and solid start so I'm very very excited about that um yeah Twitter conversations
[00:03:15]  with Jacob where I'm I'm like uh oh god so it's like I can't find anything anymore this is what happens when you're like late to stuff okay where am
[00:03:30]  I demystifying okay uh let's see here quote tweet we're live I'm gonna advertise a twitch link because I think that's probably better twitch tv slash ryan
[00:03:44]  solid all right yeah how's everyone doing today hopefully not as chaotic for you as it's been for me hey Brandon how are you doing ooh I'm doing presentation on solid
[00:03:57]  for work and building the slides and solid starts so I'm really excited for this stream yeah no it's it's good yeah I JSX is this topic that like keeps on
[00:04:09]  coming up and I get it and I it's kind of like an interesting spectrum of things from my perspective um how compilation and all that kind of fits in so we're
[00:04:18]  gonna we're gonna look at that a bit today um you know compilation is definitely uh um a spectrum and and that was a convert that was a conversation that had recently uh you
[00:04:33]  know come up on Twitter I covered it on this week in JavaScript last week and I think that uh I think we live in a world in an age where like you know
[00:04:45]  maybe I'll save the hot takes until we we actually get rolling right I right now I'm just killing the Twitter ads at least that's my excuse for myself I think I
[00:04:53]  need I think personally I need a moment to get like settled generally speaking I need to like I need to like kind of take it all in and be like okay streaming mode because
[00:05:02]  once we're in streaming mode that we're just going straight for like who knows three four hours five hours sometimes so yeah I mean solid it's not a framework it's
[00:05:13]  a wardrobe yeah and we're gonna talk about frameworks versus libraries later like there's no way I can't touch that topic right like that is that is one of those topics that
[00:05:21]  I love to talk about because it's such a philosophical thing on the design side and that's something I find very very very interesting rxs singles it's not that
[00:05:33]  interesting of a conversation surprisingly um it's like they they solve different problems I actually did a stream that touched on this a bit but I didn't go that deep because like I
[00:05:46]  don't even see it being controversial it's kind of like okay you can use them both together if you really want to hey bro okay um where are we streaming well I
[00:06:02]  mean what is a framework I'm I'm I'm some of you uh might be familiar with dev he does some videos um kind of part of Theo's community and whatnot and
[00:06:16]  we literally Thursday afternoon talked like kind of async from this like while I was doing work and whatnot about what is a framework we I spent like four hours kind of back
[00:06:27]  and forth passing messages and we're just like it's a tricky topic and I we're like he was trying to produce a video so like he could have like a really insightful
[00:06:35]  take we'll see if that uh goes because I think he's gonna do it this weekend but like at the end of the conversation like every time we got to a point we
[00:06:44] 're like oh yeah that's it that's the distinction that's really good we like came back around again and we're just like no but there's this exception and this
[00:06:50]  doesn't fit in and the truth of matter is you you almost just gotta like stop the dial at some point to find the right frame of reference that makes sense for the conversation
[00:06:58]  you're having this is not like a concrete left side right side of you one versus the other kind of thing because there's also the oh wow I just got raided
[00:07:09]  didn't I wow okay what's going on everybody um thank you thank you for coming in um my name is Ryan I'm creator solid js and I stream on Fridays uh looks
[00:07:25]  like looks like what do we got here is this is this I'm just kind of scrolling up back on twitch see you can tell I'm not a real streamer because I
[00:07:33]  use stream yard so um I actually have to go into twitch chat to actually find out what the hell happened is this is this prime yeah we just got raided by prime
[00:07:42]  that's awesome prime is in crowd Ryan hates typescript I was very impressed by rust um when I when I when I saw it with leptos uh I did a
[00:07:58]  stream on that about a month ago um it's funny I don't I think types are important I think type systems are probably what are going to save the javascript language
[00:08:10]  I just think it's tricky I think typescript is kind of an abomination and like so at times I prefer that I just use javascript just because I'm like
[00:08:17]  not lying to myself but that's kind of my my my my own take on things um yeah thanks for the subs coming in uh by the way thank you um nicol
[00:08:27] ax histroff I'm sorry I mastered your name for giving out some gift subs in the community and adriui thank you very very much um but yeah let's
[00:08:39]  let's let's let's just uh let's just get started on something here because I think I think I've killed enough time talking about nothing um if that's okay with
[00:08:50]  everyone here today um topic is going to be um JSX so I'm just going to do this see you can tell I'm on stream yard because I got I get
[00:08:59]  these nice little pre-made banners here um and that marker will help me edit the video later like that's how low budget or like I run around here you probably see
[00:09:09]  the flicker from my green screen on the side of the screen if you look closely but yeah I want to talk about JSX today because compilation and JSX um you know
[00:09:19]  always seems to be a topic and I think there's a lot of preference here between what different people like and in my personal opinion a lot of this does come down to
[00:09:29]  personal opinion but for myself personally again uh this choice actually had mechanical merits and there are things I like about JSX specifically um that got me there so but let's start wide
[00:09:41]  I mean I'm pretty sure most of you have seen um JSX but I'm going to just just in case you haven't I'm I'm going to I'm
[00:09:52]  going to I'm going to I'm going to pull it up there there JSX sorry if you search for JSX it's actually an airline I don't know if anyone
[00:10:00] 's aware of that I'm going to share my screen watch watch I just updated my mac watch this be a complete fail here where where it's going to ask me to share
[00:10:11]  my screen okay no we're okay we're okay um okay yeah so I'm not booking flights um I'm looking for JSX spec okay see JSX meta open source
[00:10:25]  all right here we go did you know that JSX is actually a spec it's not react it's it's an open spec yes it was created by facebook or meta you
[00:10:38]  see facebook in the url but it's a spec and my favorite favorite favorite part about the spec JSX is the very first line of the spec JSX is an
[00:10:50]  XML like syntax extension to ECMAScript without any defined semantics hmm it's not intended to be implemented by engines or browsers hmm it is not a proposal to incorporate JS
[00:11:04] X into XMAScript spec itself mm-hmm it's intended to be used for various pre-processors transpilers to transform these tokens into standard ECM
[00:11:13] AScript there we go like we're done we know what JSX is no I'm serious this is like the definition I I talk to people and nobody like follows this definition
[00:11:26]  I wish this was the definition thing happened I my first Twitter argument ever was actually arguing over what JSX was with like Rich Harris um I joined Twitter and everyone was like
[00:11:37]  you're wrong some some people were like no JSX is runtime and there's no compiler I'm like what what what do you want and then so other people were like JS
[00:11:48] X is Hyperscript which is and it's kind of like JSX is involved in a lot of things but as you just read here JSX specifically is not any of
[00:11:58]  these so yeah I mean there's there's a lot of influence from browser spec and they go in here and talk about why they they weren't they didn't want to
[00:12:06]  go the e4x route why they didn't want to use tag template literals they have a whole thing here explaining the the decision choices in terms of JSX and I
[00:12:17]  I full-heartedly agree with almost all of these um so yeah this is just to kind of like put it out there JSX not equal React JSX not equal
[00:12:29]  even Hyperscript JSX is this syntax that is a markup like looking living in in JavaScript that's that's all it is I should talk about XHP no
[00:12:44]  I I don't even know what XHP is to be fair so there you go I PHP lang okay yeah see no I'm not going there I'm so glad
[00:12:53]  JSX is not runtime as well me too um because yeah this we're going to talk about this for a moment so but I just want to show you what what JSX
[00:13:08]  is versus what it is not the thing is if I go if I go over here to like let's go TypeScript playground always write TypeScript playground when you search this
[00:13:23]  sometimes if you search for TS playground you end up with a completely different kind of playground not what you were looking about nothing to do with code this it's just it's
[00:13:34]  it's it's it's yeah anyway um okay so let's see if I can go in here let's let's see if this is configured to handle JSX properly anyways
[00:13:45]  I like using TypeScript yeah beautiful because what TypeScript will tell you right away which is really important is that if you make a div in JSX it's React so you
[00:13:53]  look React create element JSX is React um this isn't true TypeScript lets you preserve JSX if you want but but generally speaking there is JSX is a bunch
[00:14:09]  of gets most commonly transformed into a bunch of of function calls something that I refer to as Hyperscript it does not always get transformed that way but most commonly transformed that way
[00:14:23]  right and what's special about Hyperscript um actually I think Hyperscript has a website you if you've ever seen it Hyperscript yeah Hyperscript not
[00:14:33]  Hyper this is like a different Hyperscript okay this Hyperscript um see this is Hyperscript require you get an H function H the whole structure of Hyperscript
[00:14:46]  is it's a function where the first argument is either a string or a function the second argument which is optional um is an object to describe the props and then the third
[00:15:02]  object or any additional arguments passed in depending on the flavor are the children right and um so as the props are optional so basically h h1 hello gives you this that's what
[00:15:19]  Hyperscript is for but the thing is there's this H function and this H function could be whatever the hell you want it to be solid actually has a Hypers
[00:15:26] cript version but that's not the JSX transform that we usually use um but most tooling that automates stuff most importantly TypeScript um either assume Hyperscript but most of
[00:15:38]  the time they just assume React so it makes sometimes wrestling with JSX with tooling a little bit fun but um in any case you can kind of see this in action here because
[00:15:49]  let's see maybe I can blow this up again a bit better so you can see it better it's like the text on this side just isn't getting much bigger if
[00:15:55]  I make a native element lowercase it's a string and I'm not passing any children if I make it a cap whatever civ I don't even need to then you see
[00:16:05]  I pass the functions through if I add some properties to it like high equals and these are usually you know in curly braces that indicates you're going into JavaScript plan you know you
[00:16:19]  know you will see that now we have an object with high name and if I do a spread I could take something like some other props and you'll see the compiler is
[00:16:31]  smart enough to actually compile in object dot assign to to merge these things together right and if I put another prop on the other side hello I'm saying I don't know
[00:16:47]  something something whatever you you know more of the same right it all just goes in this giant object dot assign let's give our civ um some some children and those children could be
[00:17:04]  other elements which have their own create calls or they can be some text you know like they can actually just be straight up text like hello and then they can also be um
[00:17:22]  another variable here let's let's put name in here again I don't know why I'm putting name in here again it doesn't really matter um but essentially what you
[00:17:31] 're seeing is this is getting passed as the last argument to our first create element call and you basically have a bunch of these nested function calls that's that's what most
[00:17:39]  the time jsx transforms to um and you can replace that react create element with h or preact create element or any number of it but this is the most common transform however
[00:17:52]  going back to this jsx spec there is no mention of hyper script here like you will not find this transform mentioned anywhere in the spec and not every framework actually does it
[00:18:06]  this way um because there's a couple problems I mean they're not huge problems but it's kind of obvious when you look at the hyperscript examples here too especially
[00:18:21]  one of the challenges with hyperscript is every single thing is its own function so it can handle it this gets away from the ability to like analyze it like separate static parts
[00:18:33]  from dynamic parts um another fun thing is the children execute before the parent right because like think about if you have a function who takes a property whose whose value is is the result
[00:18:48]  of another function that other function has to run first so it kind of runs inside out um which as I said these this means that when you create this you're not aware
[00:19:02]  of its parent so like there's a whole degree of optimization that you don't get to do when you just use hyperscript and people who write fast performant javas
[00:19:11] cript libraries know this the inferno the fastest feed on library does not use standard hyperscript they compile to their own format with jsx solid does not use hypers
[00:19:21] cript because they compile through their own form with jsx but this is the thing that comes shipped with all the tools if you're using dino and they're like there's
[00:19:32]  no build jsx just works it's this we saw it it's a typescript thing here but jsx itself is not that constraining of a language as you might think
[00:19:42]  i mean it's very dynamic you can put in any kind of javascript expression not statement expression inside these kind of things right you can't put a for loop in
[00:19:52]  here but you can you go like name dot length bigger than five you know name otherwise too short you know like you can you can put any kind of valid expressions in these
[00:20:10]  in these holes and as you can see it's it's it's not doing anything smart it's literally just like putting them in there in the right place inside the inside the
[00:20:20]  element right it's just a pending a bunch of children children one children two children three it's a pretty easy transform to follow but keep in mind things like object dot assign still
[00:20:30]  sneak themselves in here so they are aware of when you have multiple attributes or props on your components and they they are doing you know there is a amount of transformation happening here
[00:20:45]  right so i just wanted to kind of like introduce jsx this way because there's the jsx which is built into tooling from the transformation side which is not the js
[00:21:02] x spec it's just people choosing react and then there's the jsx the language which is great because the great thing about jsx the language is it's also has a
[00:21:12]  bunch of tooling just works out of the box for it right we like you don't need typescript to get code highlighting right obviously typescript types themselves not perfect when you don
[00:21:24] 't use it like react but still work without with the custom compilation if you at least somewhat follow the same things that react does um basically being able to use things like prettier
[00:21:37]  and all that tooling at least knows what jsx is so there's a big advantage to still using jsx even if you aren't doing what react is doing yeah we
[00:21:49] 're we're gonna we're gonna get there in just a few moments yeah tailwind out of the box that's great yeah all the tools that use that you can use to
[00:21:58]  analyze it pre-processors sometimes like i was able to port uh versell's uh styled jsx with almost no code even though solids like completely different from react mechan
[00:22:09] ically like the the the transform part of like converting the style tag in and stuff was actually really really simple and worked almost identical um i mean and and the other thing here
[00:22:24]  is this is a runtime mechanism like you could write your code like the code on the right here no one does but you could um like and by that i'm saying like obviously
[00:22:34]  all compiled code has to run at runtime but the thing is because there's a standard transform like a standard like mechanism behind it you can be like oh like i could author
[00:22:45]  it like this i have the apis this is still human readable or parsable yeah i'm just catching up on chat here for a second sorry a little bit behind what we
[00:22:59]  got here uh are these essentially shorthands for dom create element they could be but in the case because what i was getting at is this h function or the create element
[00:23:12]  function could be whatever you want it to be but most of the time because think about it because you're creating this stuff out of order and whatnot and it's every like if
[00:23:22]  you just have this with nothing else equipped you every time you call the function that does this it's going to create everything so creating all those dom elements would be really really
[00:23:31]  expensive but if so most of the time this is used for something called virtual dom it generates a fake version of the dom so that you can like put all these together get get
[00:23:40]  your big blob of object diff it against the previous version and then go to the dom and update it because how do you break this apart like let's say only this line has
[00:23:49]  to update like this is just a bunch of functions that are nested that need to run like you can't put it in here without putting in here without putting in here
[00:23:57]  put it without here breaking apart hyperscript is not really it needs more consideration and to be fair solid supports hyperscript um just not our main jsx transform does this
[00:24:10]  so it is possible but what it involves is a lot of functions like wrapping everything in functions so they can be lazily evaluated and then your h's are inside functions which call
[00:24:18]  and create other h's and that way you can get some granularity about like this function calls only run these h's this function calls these h's but from ergonomic
[00:24:25]  standpoint you can imagine it's like soup it's it's i've tried to showcase solid without the uh with the h function um on stream a while ago and i i or
[00:24:35]  maybe it was like a presentation i did and it was i was kind of embarrassing because i i screwed up myself like i was doing it and i was wrapping it and i missed
[00:24:43]  a place and i was just like like it made it made me teaching reactivity look really bad and like if i get tripped up on it you'll probably get tri
[00:24:52] pped on up on it it's it's if you're an expert and there were libraries like this a predate solid that were like yeah yeah we can you know do it
[00:25:00]  do it all with just functions and and whatnot um for reactivity i don't think it's the right match okay but yes in theory this h function could be anything is
[00:25:11]  there performance overhead open um a little bit but minimal it depends on what you're doing with it there is a bit of performance overhead here um but i i don't think
[00:25:25]  you should probably focus too much on that part um and i actually benchmark solids hyperscript version versus solids like jsx version and versus a tag template literal version we have three
[00:25:39]  versions our tag template literals also do not use hyperscript version the hyperscript version was like 12 slower in like the js framework benchmark which put it about in line
[00:25:50]  with stuff like inferno and but the fair the be fair the the where that overhead was was probably in mostly certain optimizations we weren't able to take i actually took
[00:26:02]  solids universal renderer we have the ability to to render like whatever mobile 3ds whatever and i made a dom render out of it really naively on stream one time and it
[00:26:12]  also scored pretty similar maybe it's tiny bit better than the hyperscript one so i would say it's not the hugest overhead it just does get in the way
[00:26:24]  of a few of the types of optimizations i'd like to do and it's the ergonomics that kill it like it's just so painful to use yes but as i
[00:26:37]  said like you really don't want to do this like you you if you're a masochist like go for it um you don't get the performance you lose the
[00:26:50]  ergonomics it's just it's it's a lot of pain so all right uh where are we gonna all right so where are we going okay so let's let's
[00:27:15]  continue on this and sorry just it's funny i'm so i had notes that i wanted to put on here to help me go through this so let me let me see what
[00:27:25] 's going on here oh they didn't cloud sync well that's fine we're gonna do this blind then i know what i wanted to talk about today okay let's be
[00:27:36]  before i get into um yeah let's let me see here before i i get into solid specific stuff just yet um i i i think i want to kind of make a bit
[00:27:54]  of a spectrum here so we're going to jump into the scaladraw for a minute like we tend to do on the stream and um i i feel like there's
[00:28:13]  kind of a spectrum here right we're gonna we're gonna draw a line and it's not gonna be a dotted line it could be a solid line and on one side
[00:28:24]  of our line here we've got like why is this so thick okay all right i must have been doing some funny cover art stuff okay one side of our line we're gonna
[00:28:41]  say i'm gonna put something like i don't know what i'm gonna put over here let's let's call it i want to put like in tag template literals
[00:28:49]  i'm gonna put over here i'm not gonna talk about hyperscript but like if you're looking at templating and dsls on one side you got this and
[00:28:59]  on the opposite side like the i mean these ranges extend beyond what i'm gonna draw here i'm just gonna write like two words um marco six okay there's there
[00:29:18] 's other libraries that are probably somewhere in the middle to varying degrees and not on the same same line but like another example here that i put over by marco six you
[00:29:30]  can imagine svelte and then maybe around here you're gonna get like view and angular and then over here i'm gonna put react jsx okay or hyperscript
[00:30:06]  style jsx and i'm just talking about in a javascript framework there's a sort of range of things and what i what i want i'm trying to get
[00:30:16]  at here is that like there's a line that's about here in in the spectrum where it's like there's defined runtime semantics okay and what i mean by that is
[00:30:34]  like if if if i if i looked at the tag template literal thing and they go with reactivity i need to wrap all these like expressions and functions if i want to
[00:30:44]  write a compiler that did that that would be wouldn't work because there's an expectation that even without the compiler the tag template literals will work i could take a tag template
[00:30:58]  literal and compile into something more efficient but i can't change the semantics of how it works without it not being able to work at runtime without a compiler so like what
[00:31:10]  i'm getting at is like even if it if you can take template literals on css uh versus you know html and all that stuff which you're saying is
[00:31:20]  like have different semantics in terms of what they expect the thing is the runtime expectation of it itself is fixed we don't get the mess with that you can't change what
[00:31:29] 's inside the holes so to speak so just to kind of like put it on on this side of things there's a there's like another line that some people will put
[00:31:47]  and i don't know if it's completely fair around here which is like as i mentioned compilation is always about people's comfort it's it's it's it's a sliding
[00:31:59]  scale but people like to draw lines so i'm gonna draw lines with them right that's that's that's what we're gonna play here see it kind of represents the
[00:32:08]  compilation need but it's also a reflection of people's comfort level with stuff right because like i would argue like also very strong on this side somewhere here you might find uh quick
[00:32:21]  is kind of over here too even though quick is kind of like has elements of this it's like over here you start messing with the code a lot more um like here
[00:32:33]  both react jsx and view and angular templates only mess with the template part of it but these start introducing new syntaxes and dsls around it instead of just using like
[00:32:46]  like jsx has xml like semantics and then expressions that are javascript beyond that it's like it and because it's been standardized on this um it kind
[00:33:02]  of ends up in this middle zone where arguably i i could easily see someone from this camp saying that these things are the same category but but essentially in in this zone right
[00:33:15]  like we're we're like like people immediately are like yes like this is uh how do we want to categorize this but like like uh welcome you your compiler overlords okay
[00:33:34]  right and in the middle here is this kind of zone that jsx lives in don't get me wrong once you cross this line there there is a compiler involved but there
[00:33:48] 's like this kind of impression that the compiler is doing something simple like it's like oh this jsx is just doing function calls and the it's because there's like
[00:34:08]  a standard output it doesn't feel like it's framework specific or specific to like what the tool needs and i feel like and this is arguable solids jsx transform is right
[00:34:22]  here on the spectrum okay because it's not solids only i actually wrote for those who aren't familiar i wrote solids jsx transform to be uh reactive framework agnostic
[00:34:36]  it works with mob x it works with view it works with um knockout it works with sjs it works with rxjs it works with um like it works a lot
[00:34:51]  of of stuff and and i i i published this library you can still find it solid still uses called dom expressions and it on stream i made a preact version about a
[00:35:04]  month ago where and we we tested on stream and it was it was way faster than preact or preact signals because it actually used it the way solid does and if you
[00:35:13]  ever interesting interested you can go to the js framework benchmark um and you can see that a couple years ago i did submit a lot of my libraries so if we go uh
[00:35:25]  where we go which implementations we do none you can see some of my libraries in here mob x jsx few rx jsx i think knockout had something in it
[00:35:37]  here i think there's a thing uses runtime generation yeah uh knockout jsx these approaches are obviously not as fast as solid but they are all up at the front of
[00:35:50]  this like there's preact um there's felt like there's angular like i would love one day for our jsx approach to to at least to be standardized in a similar
[00:36:05]  way that the hyper script compilation is but to get there we we probably have to make a few trade-offs on design and we'll talk about those today right um because
[00:36:17]  people like to use the term transpilation like it's not a compiler and it is it's not anything magic that once you cross this first line like you're in this zone
[00:36:33]  you can't pretend like you're better than it but there is a perception thing and there is a line here and solid has kind of squeaked in before that line even
[00:36:42]  though we're literally just looking at each other across the chasm like it's it's very close so this this is sort of how i frame where where these things sit you
[00:36:53]  might you might disagree with me you might you know have a different opinion i'm cool with that i just wanted to kind of put put point out that this is kind of like
[00:37:03]  the template dsl compilation spectrum of things like this side it is the runtime you can't really mess with it otherwise like it's not going to run the way it does
[00:37:12]  without a compilation here there's like this expectation that compilation is consistent that you don't have like special cases you'll see in sol's case that there are a couple special cases
[00:37:22]  and maybe that's a bad thing um here you start getting into a place where you're just like i'm going to just you know first just do add um you know
[00:37:33]  my own dsl syntax to the templating then here i'm going to you know control the language and here i'm going to control the universe um so i'm not going
[00:37:44]  to say good or bad there's huge benefits that you can do seemingly over only over here but again people thought for the longest time that on the other side there's huge
[00:37:57]  benefits that you could only get over get over here and with solid we kind of showed that we could kind of get some of these benefits across the line so i i think i
[00:38:08]  i i don't think these lines are as hard set as people believe but this is a perception thing and that's why i'm writing it in so right i can still
[00:38:24]  write jscode with create component stuff right and the thing is you can still write solid without jsx um which is where i want to get to so yeah what do these
[00:38:35]  lines represent there i i mentioned it but it's it's this line is much foggier this line's very clear this is the line where we go between something that
[00:38:43] 's like a compi like not compiled compiled like where it's like this thing is expected to work always without a compiler this thing could be done without a compiler but like you
[00:38:53]  probably wouldn't and this side is like yeah you're just giving into the compiler like this is not happening otherwise view does have jsx support so yes i'm just i'm
[00:39:04]  specifically talking about view sfc or whatever like because views jsx is actually like reacts jsx i'm i i this this isn't just react this is like hypers
[00:39:18] cript you know like the this is this is the whole like this is that whole bucket of things i this is just talking about the level most people don't use view with js
[00:39:32] x um i actually saw a great article today um explaining the uh you know what how dangerous is it for me to open discord while i'm streaming on stream right now um
[00:39:42]  i'm going to remove my screen for two seconds because i'm probably going to show something terrible if i don't and i'm going to show you an article that was posted
[00:39:51]  today the which might be one of the simplest um where is it here it is yeah okay yep let's open it okay i'll give my screen back here now i just
[00:40:05]  have a terrible tendency to show stuff occasionally on stream that i shouldn't um so yeah don't don't yeah i mean that's the basic thing but i don't want
[00:40:22]  to i don't never say never is is kind of the where i want to you know there's always exceptions to every rule okay someone wrote what's the difference in solid react
[00:40:31]  and views reactive system compared and this is such a simple diagram that i that i loved it it in react they put the console log re-render in the top of the
[00:40:41]  component and then they showed a button click and the idea is every time you click the button this console log here reruns and react runs the whole component in view they did it
[00:40:51]  with jsx look view with jsx completely doable if you notice how view returns a function here it's because in view this part runs once this part runs every time the
[00:41:03]  component re-renders so like react you're going to see the re-render every frame it's just at this point not at this point so instead of having weird hook
[00:41:10]  rules you do the setup once and then here's the render function and then in solid they didn't actually have a render it's almost impossible to make this like you you
[00:41:20]  have to like get into the system to show something updating because you literally have to like go into the you have to make a separate effect or you have to like inline something
[00:41:28]  inside the count to actually get it to to re-render and i'll show you why that's the case in the in in here there's no re-render console log
[00:41:35]  it's like it's you it just can't re-render so it's really cool to see this kind of three stage where you have react component re-renders
[00:41:43]  view jsx re-renders solid you know this expression re-renders um you know it's in the scope and comparison okay so yeah this was a fun little article
[00:41:58]  to kind of compare you know what let's just drop it in the chat here don't don't battle me on semantics okay you you can re-render anything if
[00:42:10]  you try hard enough okay anyways getting back to jsx um i i'm actually going to now that we kind of seen this differentiation i'm gonna do i'm gonna do the
[00:42:25]  introduction of jsx install in two ways right so let me get a banner here just so that i have a timestamp jsx in solid by the way how's everyone
[00:42:35]  doing it it's awesome to see so many people in i gotta thank prime for that obviously but um yeah i hope i hope everyone's having a good time this is what we
[00:42:45]  do on this stream we dig into javascript and javascript framework topics reasonably deeply um so yeah what i'm gonna do is the problem is if you watch my stream
[00:42:59]  uh what was i debugging looks like it's still a counter somewhere um this is actually probably from my previous stream uh i just like doing this whenever i'm like starting from fresh
[00:43:13]  here all everything okay you know what actually i don't even need any of this i just this is just a reminder in my head that i then need to do this okay cool
[00:43:20]  so what we're gonna do here is i'm gonna do something that you've probably seen before um and i've done this a billion times at this point but i just
[00:43:31]  want to i want to go through the process of getting in the mindset of solid js actually before we actually look at what i actually do this this this is this is like my
[00:43:41]  favorite way to introduce solid and that is we're gonna create a signal and we're gonna create an effect and if you use react these things look kind of similar they're
[00:43:58]  not the same thing but some state some side effect and um what i'm gonna do here is i'm going to yeah how we want to start this yeah it's fine
[00:44:11]  we're just going to create an effect um and we're going to create a signal i'm gonna i'm gonna do the silly counter example that i do all the time
[00:44:25]  i don't know if i've actually done this one ever on my stream but i do this in almost every single talk or presentation i do on solid so we're just gonna
[00:44:33]  do this we're gonna we're gonna take a count and then we're going to console log sid count unsurprisingly see that zero down here hopefully maybe we can go
[00:44:46]  maybe i may i'll do like the count is we'll do something like this okay the count is zero okay and i'm gonna just do something like set interval for a second
[00:45:02]  and every interval we're gonna set count to count plus one okay and what did i break okay yeah there's some warning that can probably go away it doesn't matter so
[00:45:22]  you see count counting up um it's not terribly surprising for anyone who's seen reactivity before we have a signal we have a we have an effect and the way i always
[00:45:35]  present this is it's funny when someone teaches reactivity they always teach you with console logs it's very illustrative um but they get an idea of what this has to
[00:45:43]  do with jsx and compiling like think about if you had a reactive system and you're like man i want to use this to update ui or dom you might start
[00:45:52]  by making some dom elements right and you might do so by saying document.createelement um and we'll make like an h1 and you might append that sit
[00:46:06]  element to the dom you might be like okay this is this is this is why i want to keep this because the playground has changed over time and i wanted to make sure
[00:46:17]  that i have a mount element just just sitting here um just so that and then i'm gonna go mount element dot append rh1 okay sweet and right now rh1
[00:46:38]  you can't even see it it's invisible um so let's give the h1 some text using this is just dom apis and it'll just be like hello thank
[00:46:50]  you okay so this is working no no no surprises um yeah hey i i think this is the best way to introduce people to the topic of jsx and solid i i
[00:47:06]  apologize that people have seen this before this this only take about 10 minutes um yeah you see like some reloading in the here kind of going off in the in the background but
[00:47:19]  what like it doesn't take a genius to kind of go okay well instead of doing that what if we just like made the effect update the text every second instead of um
[00:47:33]  and yeah that's this is not actual what's that comma doing um what what if we made the the effect update the text every second instead of doing a console log so now
[00:47:44]  we don't worry about the stupid console anymore okay sweet so it's counting up and like this is fairly easy to conceptualize because you're like i created some dom elements and
[00:47:54]  then i'm using the solid library jquery style to update the one you know the text node whenever the account changes this is what you would do with the reactive system
[00:48:02]  if you didn't have any templating right and i like there isn't anything too special about this but um what i want to do here actually is i i want to
[00:48:23]  take this a little bit further because the self updating interval is cute and all but what i usually do when i demo this is i make a button okay and the button document dot
[00:48:38]  create element button and we're just doing vanilla javascript right like you don't need a framework we'll give that button some text like honestly you have no idea how
[00:48:49]  much harder this used to be back in the day but like if if you've joined web dev in the last decade but like it is so easy to use vanilla javascript
[00:48:59]  now to do like stuff you want it's like like it's just like oh yeah on click i i mean that's not a new thing but i'm just what i'm
[00:49:06]  getting at is like it's for small things getting vanilla javascript to work is really really simple and what we need to append it to our doc append sorry what am
[00:49:18]  i doing button now we have an h1 and a button okay what did what did i screw up okay i didn't now when we click it we have a working counter like
[00:49:25]  i'm not going to say this is like probably everyone's favorite um favorite way to write stuff but you can see that with reactivity we can do pretty optimal stuff without
[00:49:40]  doing anything so you thank the browser gods for this kind of stuff i i think in the early days everything was like lowercase um yeah i yeah so this as i said
[00:50:15]  this is just a counter unsurprising okay but the the cool thing is and this is how we introduced jsx to everyone i'm like if i'm not thinking a system
[00:50:26]  i'm not thinking like how do i make this crazy framework you just don't want to write all this crap right so like you might be like what if i could just
[00:50:37]  write this instead and this still be a button right and what if i could say give this button uh this the funny thing is because i'm using the same variable this still actually
[00:50:54]  works because it's this is actually just a button it's adding that text content and adding this on click i actually have to comment this out to actually show that the button
[00:51:03]  is is actually empty so let's give it a button and then let's give it let's make it click me right um and we want a click handler on it so
[00:51:18]  let's do this and then you just gonna move this click handler in like this is can i format this does it matter no okay this is like a tiny bit more convenient than
[00:51:30]  that you know it kind of feels declarative our counter still works it's we just replaced this with this now i want to be clear solid does not exactly replace this with
[00:51:41]  this that's what i'm going to get into today but this helps people get into the mental model of solid and why i consider this more on this side of the line than
[00:51:51]  that side of the line right this is this is this is one of those things but it's a little bit trickier than this because this there's nothing controversial about this
[00:52:03]  what's more controversial is if i go to this h1 and you're kind of like okay so you made an h1 tada all right where are we let's
[00:52:17]  comment this out and you're like well what's the text content actually we never needed this hello it was it was getting set right away anyways and we're like okay well we
[00:52:29]  want the text of our h1 sorry like writing what i'm thinking rather than what i'm supposed to be writing count is count right now this is going to still work
[00:52:46]  but this is a little bit fancier because you're like wait wait wait how did this become this and what's happening here is we actually are looking in the hole right i
[00:53:11]  usually glaze over this when i when i teach people like basics of solid but we actually because this is jsx we can actually analyze what is getting passed in and we go
[00:53:21]  is this a function call or is this a property access because if it's not neither of those there's no way possible with reactive language and javascript for it to update
[00:53:32]  if you just pass a value right if it's just count now solid does this unwinding thing so like it's kind of in the jsx or sorry in the dom
[00:53:44]  runtime um which lets us still work but what i'm getting at is if you just pass a variable a variable can't be reactive you have to call the function you have to
[00:53:56]  access a property a variable has no getter no function to intercept so it's fairly safe with solid to actually look for function calls and look for dot statements to make a
[00:54:11]  or it's member expressions is the proper term to make a decision of whether to wrap this thing in an effect or not that's all we do it's a super simple he
[00:54:20] uristic we go is this does this contain a function call or a member expression if so wrap this in in in an effect otherwise just assign it straight like we're doing
[00:54:30]  before and as i said what we end up here is a completely working counter but this is this is the basics of this kind of semantics and just to finish my demo that
[00:54:40]  i always do here what i what i end up doing is i is i make our thing into our counter app because as you said no one writes all this code like this
[00:54:53]  they usually write something that actually can be modular composable reusable like into something that they like to call components but what i'm getting at is we can basically return our h1
[00:55:09]  and button uh from from our counter here and if we take the return of it if we just call counter like a function and spread it right in because if you don't
[00:55:22]  use that happens this still works and we can get kind of this ergonomic thing where if we start replacing the pieces in a way that you know resembles more like templates you know
[00:55:38]  and maybe this array becomes a gsx fragment and we get rid of that comma always gotta remember to get rid of that comma and i and i get prettier ago here
[00:55:50]  um and you know this is this kind of thing is like doable but like let's make it like slightly more um convenient for people solid gs web and go render our
[00:56:07]  counter um in our mount element which i'll just inline it at this point i don't really care um if we get back to here again this this is why people say
[00:56:20]  we look like react but you can understand that this is not like where this came from like this this this is a function that runs once counter, do, do, do
[00:56:38] , do, do, do, do, do. Because the only thing we did was make an effect that updated the text here. Like I basically did full circle back to
[00:56:46]  that article that, that I showed a few minutes ago, because essentially these are just DOM elements that were just, and this counter function gets called once and you just use
[00:57:00]  the patterns you normally use. And usually when I do this demo, I do like two more examples. I'm not going to do both. I'm just going to do
[00:57:10]  one more example here because I think it's, it's necessary for people to see it. I'm going to add one more fragment here. And what I'm going to
[00:57:17]  do is I'm going to make two counters. This isn't obvious perhaps for everyone at first, but it, and it wasn't actually completely obvious to me, but
[00:57:29]  you start kind of understanding quickly that like, sure, if you call a function twice and they each create their own stuff, you're going to each have their own state.
[00:57:42]  But because we started without components, in fact, components aren't really a thing. If I pull this out, now you have two functions that refer to the same variable
[00:57:52] . So you've just created global state and this counter is still only runs twice because you called it twice. That's, that's the concept here, right? Like this
[00:58:05]  is not a component model. This is like, we got some functions that return some stuff and we have some state that updates that stuff. And it's not about re
[00:58:16] -rendering stuff. Like nothing re-renders. You can pass, and, and I, I, I like this sort of example because it shows kind of how
[00:58:28]  minimal, like the transformation is conceptually. It, it, it, it kind of, you get this idea of like, oh, we're just dealing with signals
[00:58:39]  that happen to return, you know, some functions can kind of construct together to build up some DOM elements. But there, there's like, there's a little bit more
[00:58:52]  to this story. And now I remember why I do the last example. And I guess I should do the last example to finish the story off because the last example is
[00:59:02] , it's not just about, um, it's not just about global state because global state. Because global state isn't actually that useful in a lot of cases.
[00:59:15]  It's also about, it's also about tree state because we construct trees of, of behaviors, right? And we still want them only to run, run once. And
[00:59:31]  I said, I was only going to do that one more example, but even when we have components here, we don't want that characteristic to change. Um, so
[00:59:43]  what I'm going to do here is show that off a little bit, because we're going to instead pass count as a child to these. Okay. And now we need
[00:59:58]  to use something called props. And oh, wait, toggle the wrong way. And then in this case, it's props children. And I'm going to, I
[01:00:12] 'm going to actually pull this one out too, and make a props on click. It doesn't really matter what I call this click thing, because it's all, it
[01:00:21] 's whatever I name it. There is whatever I name it here, props on click. And I'll do it again here. So each of these now has, shows
[01:00:34]  it and updates it. And they are sharing the same signal though. So you're thinking, oh, why did I do it twice? You could have just used the same
[01:00:41]  function in both places. I could have. It's because I want to show you that if I change one of these upgrade by two, you know, I'm just messing
[01:00:47]  with things. How about this one times two? I'm like building custom expressions into here. And if, if, if, if I set that up, right.
[01:01:00]  See, it's funny. Some, I can tell something's not building properly because I'm not seeing the app on the, the console log app is not coming here.
[01:01:07]  So at some point I broke this. Let's see if I can get that. Does anyone see my, see my, uh, my error yet? Um, what
[01:01:18]  I'm going to do. I'm going to copy this so that just in case, if I refresh the whole page, we hopefully should be able to see my error.
[01:01:27]  I'm, I'm probably missing something really dumb. Am I missing like a, a closing thing? Oh, is it this? Thank you. Thank you, chat
[01:01:42] . But if I do this, you'll see that this one's showing double the count. This one's calling, showing one time the count. This one will update it
[01:01:53]  by two. This one updated by one. And these only console log once, even through components. In fact, it doesn't matter how many components. It doesn't matter
[01:02:03]  if using context. It doesn't matter at all. And the reason again is it's the same trick. Instead of wrapping these expressions that call functions in components with create
[01:02:15]  effect, like we did earlier, we wrap them in a getter. So you can picture this call essentially like I can, we can actually make this by hand if we
[01:02:24] , if we want to. It's not exactly the same, but, um, it, it will, it'll illustrate my point. We can, we can use
[01:02:33]  JSX here and we, we can call this function and we can go, uh, the props are going to pass in here are going to be on click equals this.
[01:02:48]  Um, and children is actually going to be get children, and we're going to return count. Um, oh, this return count for this one. And I
[01:03:05] 'm missing a comma. If we, if, if we do this, it's, it's, it's basically the same thing that we did. If we see that
[01:03:18]  the JSX has a function call in the expression or a member expression, like a dot thing, we can just wrap it with a getter. And what that does
[01:03:25]  is basically make it a function in here, which means that then it gets called under that initial create effect. The problem is if we did not make that a getter,
[01:03:36]  the value could never change because we just evaluate it right now. We just be, I mean, I can kind of show what it would do. The problem is this is
[01:03:44]  a reactive expression. So I'll do it this way. I'll go const, uh, value equals count. And I'm, I'm just going to execute it
[01:03:55]  out here. Okay. And then if we just went children equals value, if this only runs once, there's no possible way that value could update. If you can see
[01:04:08]  only the bottom counter is updating. It's just, it's impossible for it to update because you ran it once. If you wrap it in a function, you can
[01:04:17]  ask for the latest value whenever you need to. Right. The, this, because in react, there's components are a real thing in solid. There is one thing that
[01:04:33]  the counter, the comp calling the component like this does, it wraps it in an untrack. It's like, like we know not to like listen to stuff,
[01:04:41]  but generally speaking, outside of dev mode, like production mode. Our components are just functions that you like, like call once and all the work happens on the prop transformation
[01:04:52] . But that shouldn't be surprising. Because if you look here, that's what happens in the JSX transform for react as well. If you have to handle things like
[01:05:01]  spread, well, it, it has to do some prop transformation. And so, so this is, this is, this is, this is just kind of like really
[01:05:11]  high level before we actually look a little deeper at like the principle behind the JSX transform in solid. Right. And you, and you might be going like, well
[01:05:29] , the thing is, if this is a getter, like we just had, like, where am I here? This is a getter. Like you have, this
[01:05:41]  is the whole reason we lose reactivity when someone comes in here and, and just does like a, a console log in here. And it was like, I'm
[01:05:50]  going to console log props dot children. This console log is only ever going to run once per component. See, it runs counter zero, zero. Actually, let's,
[01:05:59]  let's add a string here. Hey, right. Hey, zero. I click this. The thing works, but the, the, Hey, Oh, Oh, this
[01:06:11]  is funny. It's working because it's working because of the, uh, this wasn't unwrapped. This is the danger of unwrapping. It re
[01:06:21] -renders the whole component, recreating all the DOM nodes, everything. This is why we do this. Because if you just put this, I told you there's
[01:06:30]  the one difference, that one difference protects you against accidentally causing a whole crap of extra work by top level. Um, uh, um, access you, you do not
[01:06:45] . Yeah, this, this is why components do want that one thing. When I first created solid, it did not do that one thing. In fact, it, it
[01:06:55] , it did not do the untracked guard and you could, you could make components re-render if you wanted to, by just destructuring the props.
[01:07:03]  Um, I was like, no, no, we hard line on that. So now, sorry, let's do this again. Um, when, when we get this
[01:07:10]  working here, what did I do wrong? Um, uh, the playground freeze on me again. This keeps on happening. Like I missed some particular thing. Um,
[01:07:27]  let's hope this refreshes properly. Oh, did I bring back the, the error? Um, what I was getting at is, okay, this is working. Okay
[01:07:43] . Let's console log here. Console.log. Um, you see this update and this stay at zero and what, what I'm getting at is that accessing this
[01:08:02]  in a function that runs once is never able to rerun again. That's the whole point. The only things that can rerun again are going to be things in
[01:08:12]  the JSX, which we know are getting wrapped by the compiler. And when you make, you know, your, your hooks, so to speak, right? Like,
[01:08:20]  um, those will rerun again. This is not a function. It's a getter. And the reason it's a getter is because, I mean,
[01:08:31]  is because if, in this case, children is usually the thing, but in this case, we don't want to differentiate. If someone uses a signal, it works.
[01:08:44]  If someone passes five, it still works. You don't want to, like, you don't want to make this a function because if it was a function, then
[01:08:56]  like, like you, you'd have to be like, you might, you know, like, or pass it straight through. You might have to like check. You'd
[01:09:04]  be like, is this signal is not. And that leads to over wrapping in my, in my opinion, because, and a bunch of bulky code, you know, that
[01:09:10]  you always get the value when you access it, whether someone's using signals, expressions. I've used a lot of reactive libraries in the past where it's really awkward
[01:09:19]  where you, you, you might have something where you could go like, haha, I can pass count. And then, and then you're like, oh, I want
[01:09:26]  to make it count times two. And then suddenly it's like, oh, now I have to add the function call and times two it, or maybe it's dot value
[01:09:36]  or whatever. Like once you get into that range and those kinds of shortcuts, you're just leaving like, like places to mess up your code. So we just
[01:09:48] , and added complexity, um, as it turns out for, for managing, um, like trying to decide what props you do. This is way simpler. You just use
[01:10:00]  the stuff in the way you would expect to use it. And if they, if they, if the, if the child, if the parent passes in reactive stuff or
[01:10:07]  not reactive stuff, you handle it all the same. And, and in this way, you actually usually reduce making extra, um, wrappers. Like if you get something
[01:10:18]  that is a five and you're like, oh, I have to convert this into a dot value. You don't have to do that here. Like, it's
[01:10:23]  just not a consideration. Right. And yes, TypeScript becomes like a pain in the ass too, because then you're like, accept value or access or a value.
[01:10:39]  And I mean, people go in that way. Don't get me wrong. In solid, you offer the components. They're just functions. So you can pass signals down
[01:10:44]  and not call them if you really want to. But then you're introducing this and everyone who goes that way generally just like walks back. on it. It's just
[01:10:53]  not worth, like, it just, this provides a type of consistency, but you can't destructure props because destructure props is the same as this console log here.
[01:11:03]  You're executing them outside of things that this is the whole can't destructure props thing. It's because reactivity wants to, it matters where you read values and react
[01:11:13] ivity. That's how it knows exactly what to update. So you can embed, if you embed into the object, it makes it kind of convenient. And it actually
[01:11:24]  has a power that it helps us do dynamic spreads, which is hard to do with functions. Because if the shape of their props can change, like you're like,
[01:11:33]  things can come and go, then it's very difficult to have fixed functions versus being able to dynamically track things that may or may not be there, which solid actually handles.
[01:11:47]  It handles all these crazy cases, so for the most part, you kind of come in and use it, you know, spreads and spreads and spreads and all the crazy
[01:11:56]  stuff that you'd expect in a fun, in a, in a library that runs over and over again. And it just works without running over and over again. So
[01:12:06]  yeah, there is some complexity there, which we'll probably get to in a, in a few minutes. Yeah, yes, yes. So we have, there's
[01:12:21]  an ESLint plugin to warn about, um, the destructor props. So yeah, there, there is this, there is some interesting stuff. Someone's mentioning the
[01:12:39]  TypeScript thing where TypeScript kind of, if functions in TypeScript aren't idempotent, like it doesn't know, I don't know if it's the
[01:12:47]  right term, but it doesn't know. Like if you call the same function twice, you're going to get the same, same value. It doesn't understand pure
[01:12:52]  functions or like that kind of thing. And with getters, TypeScript's kind of broken. It doesn't realize that you can change the value. So it defaults
[01:13:02]  the opposite way. So in our case, you kind of would prefer if they were idempotent or like that kind of thing. So that's like the one little
[01:13:10]  value of using the dot value, but the dot value has a lot of other really bad trade-offs. Um, especially around, uh, read, write segregation and
[01:13:20] , um, especially around like accidental tracking and, um, uh, uh, uh, yeah. Uh, uh, encouraging extra wrappers, especially like, you know,
[01:13:35]  being like writing APIs that expect a dot value on the end. And then suddenly being like, Oh, I don't have a dot value. I better wrap it in
[01:13:42]  something and computations and adding that stuff is, it's not free. Like the whole when to memo question is, is still real. Even in reactive systems, reactive systems
[01:13:51]  tend to have a tendency to over memoize, uh, use too much memory. Um, and actually hurt performance in the opposite direction. All right. Everyone's
[01:14:08]  still here with me right now. Drink some more cheese. But this is kind of like the introduction, but I know many of you signed on here cause you want to see
[01:14:24]  a lot more. Um, cause if you ever opened up the playground, even in this example that I've created here, you, you will kind of notice something.
[01:14:44]  You'll notice that you don't quite see those document dot element calls and the effects in the same way. You'll see, well, you'll see this. And
[01:14:53]  what's cool about this at least, which is decipherable in the same way, say react is versus like, if you look at Svelte or you look at quick
[01:15:01] , you look at Marco, like stuff like doesn't resemble. I mean, Marco today is different, but like future Marco stuff doesn't exactly resemble what you wrote.
[01:15:10]  It's all got moved around and changed and stuff for the most part, um, this all stays the same. And then when you get into your components, you'll see
[01:15:23]  that these things get trans, uh, get, get transformed a little bit differently. Um, than I just said, but it's not hugely different. Um, and the
[01:15:34] , the basics of it is like, you can actually see here that. when we hand compiled the, the, the counter, it's actually was, it's like
[01:15:47]  the same code here, right? We went on click, colon, set count, get children, return count. This, this, this is exactly what it does. It
[01:15:55]  just has this create component call, um, to, to, to make that untrack wrapper that I was talking about. And in dev, it adds some stuff.
[01:16:05]  One of the trickiest things with solid and dev tools is that most dev tools, you like to kind of show the component tree. And since solid doesn't have components
[01:16:13] , it made it actually really a pain initially. Cause like there'd be nothing to show in the dev tools, just like the reactive graph. So, uh, we
[01:16:20] , uh, we, we, we add extra reactive nodes that are inert to say like, this is a component here. So we can actually trace the reactive graph and make
[01:16:33]  fake components for dev tools. Um, so yeah, interesting little thing. But what I was getting at is you can see that the fragment here is just the array calling
[01:16:44]  the counter functions with the props we just talked about. And then this one again is an array and the first one inserts those children and the second one adds the event listener.
[01:16:57]  Now you will see a couple of these helper functions, like insert and add event listener that come from solid JS web. Um, you will see create component, which I
[01:17:06]  told you already is basically like a no offer, just not track function. You'll see, see template. And these helpers are a little bit more involved obviously than what
[01:17:15]  I showed earlier, but they're actually pretty easy to, to figure out. Like this insert one, um, we can look at the code, but it is a
[01:17:24]  complicate version of basically create effect, get the value from here and based on like the situation where you're inserting it to either set the text or append DOM nodes or remove
[01:17:44]  the DOM nodes. So there's a very minor kind of DOM diff in here, but essentially that's what insert does add event listener is literally at like, just adds
[01:17:55]  the event listener for our event delegation system. Um, and then, yeah, I mean, the big difference here is this line. Okay. So let's talk about this
[01:18:08]  for a second. we don't do document dot create element like a thousand times or I'm, I'm exaggerating, but like, you know, a dozen times
[01:18:21]  for each element in your template, it's more memory intensive and it, you know, it, it just takes more code. And it's a little bit like, you
[01:18:33] 're going to see why in a, in a little bit later, but in terms of hydration, it actually makes hydration and non-hydration work very similar. Instead
[01:18:42] , what we do is we take the HTML string and we turn it into a template. And this template call is basically the template element in, uh, HTML. So
[01:18:57]  we get that element and we clone it and then we walk to the places where we want to insert or add event listeners or whatnot. So the compiler just grabs the static part
[01:19:10]  of the HTML. This is very similar to tag template literal libraries like lit figures out the most optimal way to walk to it. this is faster than using like document select
[01:19:21] ors and stuff. We, we, it just creates like a walk, like first element, next sibling, you know, first child, next sibling, next sibling to,
[01:19:28]  to find the elements. And then it, it adds the create effect or whatever, or sets the value around those specific DOM nodes. And, and, and that's
[01:19:40] , that's basically it, um, for this, but I, I'm already kind of jumped in a little bit further than I wanted to get to just now.
[01:19:53]  Um, but I wanted to just kind of show that it is like what I showed, except we don't create the elements one by one. We use templates and that we
[01:20:04]  have some special helpers to kind of manage a few of the specific types of inserts, but effectively they're like adding that create effect. Um, but yeah, we
[01:20:18] 're going to dig into this a bit more, but before that, I think, I think I need to sort of talk about our compilation, um, holistically. And
[01:20:27]  this is actually kind of why I wanted my notes from before is I'm kind of sad that they never ended up syncing properly. It's funny. I saw them,
[01:20:34]  uh, you know, what's this, is this, is this, no, nevermind. I saw them on my other computer and I just started adding to them and
[01:20:41]  I didn't add them here. And the reason is solid has, yeah, I'm just going to write some stuff down, you know, what we're going to
[01:20:51]  talk about. Solid has, uh, three, three major compilation targets today. Okay. We have, we have dom, we have SSR, which I'm going to
[01:21:06]  say string. And then we have universal. Okay. Sorry. I'm just catching up here on chat. There's a bunch of people asking, talking about specifics here
[01:21:25] . Uh, what are we getting here? What's the easiest way to convert a project for interactive solid? Um, will you, will you, yeah, maybe,
[01:21:36]  yeah, I'm going to think about that. It's, it's actually the reactive system that does all the cleaning up. We don't have to do anything special,
[01:21:46]  which is interesting. Um, yeah, I'll see how that ties into what, what we talk about today. Um, what I don't get is why would only
[01:21:59]  one text node change in the browser if the whole element is cloned on each update? We don't clone the element on each update. Sorry. If, if I,
[01:22:12]  if I didn't make that clear, this, this function still only runs once, right? This is still the whole thing runs, runs once the only piece visually that
[01:22:23]  you see, you know what? I'll make this a little bit more visual for, for you to kind of, so you can see this a little better. Um,
[01:22:29]  I'm going to use the text content, um, attribute instead of using children, um, because children has to handle a few other cases, which this one, which text
[01:22:40]  content does not. Um, and, uh, I guess I should make this a. Like this technically, this is not equivalent cause we only have to update that one
[01:22:53]  text node. Whereas this is replacing the whole count is, if I, if I do it like this, you're going to see this a little bit easier effect. So
[01:23:03]  this is create effect call just alias because of the compilers gets its own version, L data count equals, uh, props dot children. So what happens is
[01:23:16]  we cloned our node. So we got our H one. And if you notice conveniently in these text considerations, I, we have a little trick. We actually create the
[01:23:25]  empty text node as part of the template, we walk to it to get it. So now we're sitting on that text node. Um, and as it turns out
[01:23:33] , replacing the value of the text node rather than recreating the text node is faster, which is why I did what I just showed. If it, it just creates effect
[01:23:42]  and goes text node, set the data counties, the props for children. This is exactly what we did by hand earlier with the crate effect. So, I mean, here
[01:23:50]  you go, create the element, create an effect that updates just the text when it updates. This is, as I said, it's, it's, it's
[01:23:57]  identical to what we had compiled. Um, it just like insert has to handle a few more cases where in this case, we know, like it's always text. So
[01:24:06]  technically if you see them in benchmarks, sometimes I do this. It's like, if you know, you're dealing with text, this is going to be slightly more perform
[01:24:13] ant because it removes like, oh, are you trying to insert dom nodes? Are you inserting a fragment? Like it removes all that and just goes, okay, I
[01:24:20]  just need to update the text. Yeah. How should I put this? Um, I did, I purposely haven't talked about how salt, like reactivity works in the
[01:24:41]  stream. Um, so that I, that will be a missing context here. I'm, I'm, I'm assuming it here that everyone's familiar with how solid
[01:24:49]  reactivity works. Um, it would take me, it take me like a whole stream to talk about the reactivity subject itself. Um, and I'm not going to
[01:24:58]  do that now. The shortest version is available on any of my talks. Uh, I, you know, I'm, I just, I wasn't intending to do
[01:25:05]  like the 10 minute version of the reactivity intro here. I did take some assumptions that people have seen the reactivity before. It's not effect is our effect is
[01:25:15]  based on fine grained reactivity. Um, it's, you update an atom, it tracks whenever it updates, recalls that function again. It's, it's
[01:25:24] , it's different than proxies a bit. Um, yeah, yeah, I'm not going to go too far down on that. But what I'm
[01:25:33] , what I'm getting at is like, this function is still this function. It just, it runs once. Um, it's only these expressions. Like, it's
[01:25:42]  like, there's no, the, the, the return is the final output. So it's like, we just write, the compiler just writes a few more hooks for
[01:25:50]  you. That's like the way to think of it. You know how you, you write some hooks when you write your code, the compiler writes a few more hooks
[01:25:55] . It's just, it's, it's, it, that's, that's kind of what it's doing. Uh, I, I, you know what,
[01:26:03]  remind me to talk about this later. I do want to talk about this. I talked about it at the beginning, but it's, this is not the right time
[01:26:14]  to talk about the standardizing, standardizing on it. Okay. So, um, yeah, enough on this. I wanted to kind of go back to here. So
[01:26:26]  we have three compilations. We have DOM, SSR, and Universal. And I think it's important to mention this because the Universal, in theory, should be
[01:26:36]  able to work for everything, including DOM and SSR. But the DOM was the first one that I did. The SSR is the second one. The Universal and
[01:26:43]  the DOM are very, very, very similar. The SSR one is the special one. So we can look at that. And the, the, I think the best
[01:26:51]  way to look at, look at this is look at kind of like, I'd like categorize, categorize, I don't know what to call it features, but
[01:27:01]  categorize like parts of the compilation. Cause some of them, some parts are shared between every of the three targets and some parts are, um, specific to the,
[01:27:14]  to the, to them. And so like the, the first thing is like components, all, all of solid compilation uses the same component transformation, universal SSR DOM.
[01:27:30]  And this is a really important point because I'm going to, I'm going to like destroy this whole thing for a moment. But yeah, let's just, let
[01:27:38] 's just destroy this whole thing for a moment. Um, let's remove render. Let's just destroy this whole thing. Yeah. We're done with this. I
[01:27:47] 'll regret this later, but that's fine. What I wanted to show is that if I create, I don't know, it's fine. I'm creating a different
[01:27:58]  counter, but I'm going to create a counter. And I'm going to create, it's funny that I'm redoing some of my work here, but let
[01:28:08] 's do count set count. I want to emphasize this really on because people from when I, when I show this demo, people assume that solid, like Svelte is
[01:28:18]  really tied to the DOM. It is not at all like, there's nothing stopping us from doing native compilation or anything. And I, even without a custom renderer
[01:28:29] , right? Like the thing is, it's different than react in react. They're like, look, you can change the H function. It can be for your,
[01:28:39]  um, it can be for the terminal and react acts the same way. And they separate the DOM stuff and in solid case, a universal renderer is kind of like
[01:28:49]  that, where you can change how native elements work. But before we ever had universal rendering, people were making custom renderers in solid. And the reason was that like,
[01:29:01]  I don't know what system this is. Okay. Like, I, I don't know, create effect. But my, my, my point is like, if
[01:29:15] , if I'm going to use console.log, we can pretend that this is some like native something. Okay. My, my point is. And you see the native
[01:29:30]  something you can build stuff up with the components. You can create reactivity, write your effects against, you know, you can create something, you know, like,
[01:29:49]  I don't know, you could be like const. Native object equals something or other, and you can construct it and maybe you can return it. I don't, I
[01:30:00]  don't, I don't even know what we're doing here. And I can add some console log and I can do all this. And if you look at the
[01:30:06]  output code, there is nothing DOM specific about this. Like, I understand console log is a, like a browser API or whatever. But what I'm, what I
[01:30:23] 'm getting at is you can build up systems on top of solids components and compilation and nothing in here. Like there's no DOM API. You can import this in an environment
[01:30:34]  that doesn't have the DOM. And you can get all the nice features. You can pass props in, you know, what do we want to pass in here?
[01:30:44]  Something else. I'm just, I'm just making stuff up again, like I did earlier. And if you look at it, this create component call with the merge
[01:31:03]  props, this preserves reactivity. If you're wondering what merge props does, it's just our version of object dot assign. Essentially here. That doesn't lose react
[01:31:15] ivity. Like, there, there is, there is nothing here that is DOM specific. Well, where's the clone node? We didn't, right? Do you
[01:31:33]  see what I'm getting? Where's the template? If you don't. Looks like solid is a, yes. Like if you don't make a, if you don
[01:31:45] 't use a lower case. JSX element, there is, there's, there's, there's no DOM, right? The clone node. Right? Like what
[01:32:03]  I'm, you're, you're, you're right. If you want to use lowercase elements, what I was getting as the people who made like the pixie
[01:32:12]  port, like made the, like the, like made the canvas thing with solid before we had universal renders, they would just write the props. Have them come in
[01:32:24]  here, you know, and then they would create effects that would update the canvas based on the props. You know, and then they build the whole system off a bunch of
[01:32:34]  their components. They use context and everything. And they, and they build the whole UI off components, never using a lowercase, um, element. And they never
[01:32:44]  pulled in the DOM. Right? So like rendering isn't even a solid doesn't care what you do in create effect. So in a sense, like solid has no
[01:32:56]  concept of rendering. It doesn't, it doesn't really even know about the DOM. Uh, if that makes sense. Uh, the compiler does because the compiler can like
[01:33:07]  generate optimal DOM stuff when you use the DOM compiler, but like solid itself has no clue about the DOM and this. Yeah. Solid JS web does essentially. Right.
[01:33:19]  Um, yeah, the, the difference of the solid three library, um, uses our custom renderer, which I want to get to here in a moment. Um
[01:33:33] , so yeah, so just catching up, make sure I didn't miss anything on, on Twitch. Um, cause I'm terrible on that. Just in case like someone
[01:33:43]  dropped in. Um, okay. So let's, let's yeah, merge solid has a two because merge props. There's a few things that I export through web from
[01:33:56]  the solid core because, um, stuff like four, like we haven't talked about control flow and we should probably do that before we get too much deeper here, but
[01:34:08]  stuff like our, like our four component and control flow component, um, it, it comes from solid because it, um, yeah, sorry. Uh, it doesn
[01:34:27] 't like me doing this cause I need to, um, stuff like our four component and all that are just runtime components, but because they're useful, like it, because
[01:34:45]  they're just functions or just components. It's kind of useful to have them in all environments, not just the web. Like again, four is not dom specific.
[01:34:53]  Um, our control flow stuff, which they're basically just reactivity utilities. Do you get export through solid JS web, but we re export a lot of these kinds of
[01:35:04]  things through our search through normal solid JS, but we do react, re export them through web. So the compiler can automatically put them in if we need to. One
[01:35:14]  of the things about, I don't know if I love this, but I did set up solid. So you don't need the four for the four to work. Cause
[01:35:20]  I, I liked kind of stuff like Svelte and like, like how easy control flow was with view and stuff. TypeScript won't let you get away with this
[01:35:27]  anyways. So it's almost like a not important feature anymore, but yeah. But the reason control flow is important and why I feel this is part of why we're on
[01:35:42]  not there, this side of the line is that solids four component is not a map function. It is special, but it is not a compiler trick. It's not
[01:35:56]  like, it's literally just calls create component four. We don't do anything special for it. And if you go into the solid code, you will see that it is
[01:36:06]  just, uh, like a memoized mapping helper. Essentially. It's just like a, a function you can use. Our array map function without the JSX.
[01:36:16]  In fact, this is what I used to do back in the day with knockout where I had have to map like big nested tree structures of signals into each other.
[01:36:24]  It's kind of a mess. Thank God we have proxies and stores today, but that's how you used to do it. So like it's important.
[01:36:32]  And I always really emphasize this, that like, if you don't like solids four component, you could write your own, you can write paginated on top of four.
[01:36:38]  You can not use four. You can find a more optimal way. You can go and do that. You could just use map in solid. If you want to, you
[01:36:44]  don't have to use for it. Just it's map is really inefficient because every time you call it, it has to run through all the items in the list.
[01:36:51]  And if what you're returning is DOM elements, you're recreating all the DOM elements. Don't do that. Four is smart enough to be like, oh, you
[01:36:58] 're only changing the one, you know, item in here, or you're moving this. It only does the work it needs to. And because the way solids nested
[01:37:07]  reactivity works, most of the time, if you say have, and I covered this in my last stream, when I started with immutability versus immutability,
[01:37:15]  immutability and like difference between react and solid. If you update the address on user five in a list, we don't rerun reconciliation. We only update the
[01:37:24]  one street address in user five and we don't rerun the list again, which is something that every other JavaScript framework does. So in a sense, yeah, we're
[01:37:32]  almost cheating the benchmarks because by design, we do less work. And like, and, and, and, and like less work than, um, I guess view works like
[01:37:46]  this as well. But they rerender the comp, the render component. It's all just the one expression, but like less work than Svelte, less work than
[01:37:54]  react. It's just by design. I, I've done this before, but you know what, why not? Just, just to, just to hit home, just
[01:38:08]  how, like what four is doing. I'm just, I'm just going to pull this up for a minute. Just cause like, let's just look at it
[01:38:18] . Cause. Um, okay. So in the solid code base, there is a component section here. No, it's our components flow. Sorry, flow. And
[01:38:34]  inside you'll find most of our shift control flow components. And four looks really, really, really, really simple in that. It, it looks to see if there's
[01:38:43]  a fallback. And if there's a fallback, it needs to kind of set it up so that it can pass it through. But all it is, is
[01:38:50]  it creates a memo. Interesting. I wonder why is this not behind a dev check? Okay. It doesn't really matter. Um, it creates a memo that calls this
[01:39:06]  map array function. Okay. And this map array function is where all the work happens. It just takes the each property from four. It passes the children. And.
[01:39:21]  And it passes the fallback. And you might be like, oh, why didn't you wrap these children? Well, the children for four is always a function. So
[01:39:29]  you know that it's not reactive. It's like the callback function, the render prop. So essentially it passes the render function. It passes the wrapped each condition.
[01:39:41]  And then it passes the options object, which has fallback here. So it's a little bit of mapping, but all the work happens in map array. And map
[01:39:48]  array. Is it here? It's a little bit complicated to follow. Admittedly, this is why you're probably not going to write your own. But more or
[01:39:59]  less, it goes in here. It takes that list, that first argument. Executes it. And this whole thing returns a function. So this is what's going
[01:40:11]  to get wrapped in the memo. Okay. So you have a memo that executes the function. Where it tracks the, whenever the array itself changes. This is why it
[01:40:21] 's not tracking the children and stuff. It's literally like, did the array change? Did you swap? Did you add items to the list? Replace it?
[01:40:27]  You know, it just looks for when the array changes. And then it untracks the whole rest of this, where it does a basic version of diffing. Right
[01:40:37] ? This is similar to virtual DOM diff, but it's a little bit different. And all it does is it goes like, oh, if you're emptying the list
[01:40:46] , we'll dispose of everything. If there's a fallback, render that fallback and create that. If the list was previously empty, just add all the items
[01:40:58]  to the list and return that. There's a bunch of shortcut paths. And then the last option is like, okay, the old list had items, new lists have items
[01:41:05] . Go through, skip the common prefix, skip the common suffix. Shorten the list to the range that needs to be diffed. Create a map and go
[01:41:15]  through and do a basic diffing thing and move everything around. And then return the final thing. I'm like glazing over it a little bit. But essentially, this
[01:41:31]  is just a complicated runtime memoizer that does a diff. But we ship it as a component because like the compiler doesn't need to do this. And you can just
[01:41:47]  not use this or use this. I think it's pretty convenient to use this. Yeah, well, the reason we need separate routes inside is because each iteration of the array
[01:41:59]  needs to be disposable independently as you add and move stuff. So if we go, oh, you have five items. And the next time around, you have four items.
[01:42:06]  You removed an item. We have to call the dispose function. And every route manages its disposal separately. So this is someone asked earlier how disposal works. Well, components
[01:42:18]  don't have life cycles. If you think about it, if you nest a bunch of components in some JSX and some other stuff, if there's no condition,
[01:42:27]  like no for loop or no show or conditional branching, nothing can ever be unmounted if its parent doesn't get unmounted. So instead of having a
[01:42:39]  bunch of boundaries at every component managing their own life cycle, which is completely wasteful, Solid only introduces the life cycle at control flow points. So it's based on the
[01:42:50]  structure of your application. This drastically removes the overhead that most reactive libraries have because they like to track stuff like at a component level. Like you can kind of think to
[01:43:00]  a certain degree, like view, their render JSX is wrapped in a crate effect or, you know, like, so, or Svelte, you can kind of
[01:43:08]  think of it that way too. Like basically you update something in their zone and the whole component reruns. And this, this approach removes that. So it's this,
[01:43:19]  Solid scales on components about as well as a virtual DOM library. So if VDOM libraries don't care, they don't create extra wrappers. They just chunk
[01:43:27]  out a bunch of extra crap whenever, you know, like all the virtual DOM models. But the thing is, if you optimize your VDOM, you can memoize
[01:43:35]  stuff, not recreate them. Vue does a good job. Inferno does an incredible job at this, and you can optimize that way. But reactive libraries tend to
[01:43:44]  like over memoize, over wrap. And this is where the cost comes. We solve this with Solid by removing the components, essentially. It gets rid of the overhead
[01:43:56]  of typically you find in reactive frameworks. Could you build one of these? Yes. Smart kind of stuff like this. Adobe actually did. It was funny. When I forget
[01:44:17] , someone wrote an article about a year ago. And they were really like in support of Solid's control flow elements, because they were like, they're like, when
[01:44:26]  your React app gets big enough anyways, you'll want to optimize this stuff. Solid just comes optimized out of the box. Like, it's not a big deal. But
[01:44:36]  if you think about it, if you have giant tables and lists in React, and you map it, you're recreating all those virtual DOM nodes every freaking time.
[01:44:46]  Virtual DOM nodes are much cheaper than real DOM nodes. But if it matters, you are doing a ton of unnecessary work, perhaps. So you could write a memoized for
[01:44:58]  loop for React if you wanted to. And it might improve performance in some edge cases. I don't think it's important enough for like the React team to ship that
[01:45:07] , because they don't have as heavy of a cost. But it is a potential consideration. It's not that hard to keep track of objects that were already iterated on
[01:45:24] . Yep, it is not. Part of the reason there's so much code is because the for component, actually, and this mechanism, I hate unnecessary overhead. And
[01:45:39]  you might, you guys might find this interesting. Not only is this diffing algorithm, like you can make a much shorter version that just compares maps. This one has a
[01:45:47]  bunch of like, shortcut optimizations, like the suffix and prefix optimization. The other thing that we do is, if you don't, if you don't pass
[01:45:57]  the function with two arguments, like if you don't use the index in the Solids4 component, we save a bunch of things. Because otherwise, we have to create
[01:46:07]  a signal per row to hold the index in the for component. Because like, the index value could change. Like the item itself never gets recreated, even when you move
[01:46:20]  it. Even the DOM moves with it. And the only thing that can change is the index. But if you don't need the index, we don't need to
[01:46:27]  create the signal every time. So this is like, there's a little bit of complexity that added there. So that we can erase creating extra signals if you don't use
[01:46:38]  it. I mean, it's a silly thing, but you know. Okay, anyways. Hopefully I'm like not too tangenting off. Okay. Okay. So
[01:46:54]  getting back to my Scala draw here that I was trying to say is that the reason I was bringing this up is that components in solid is kind of the easiest place to
[01:47:03]  start the compilation because all versions of our compiler work the same. And it's truly universal. And then the next thing I want to talk about, um, which shows
[01:47:24]  up in all of ours. And it's kind of a question for people is Boolean expressions and ternararies. And actually there's a sub point here.
[01:47:38]  I should talk about spreads a little bit. And then I think for, if we're, if we're going through this topic here, um, there is, um
[01:47:50] , native elements. And then the last category, our least favorite category. Remember this chat, this is our least favorite category is, um, custom attributes. Okay.
[01:48:06]  But basically when I look at the compilation, I look at, I look at, at these four levels. And I get a little swig of this orange juice.
[01:48:26]  And, and we've already talked a bit about components, but what I want to do actually is show you my favorite tool in the world. Okay. This thing is called
[01:48:40]  AST Explorer. And if you would be, if you would be, you know, so inclined, you probably, you know, to write your own plugins, this is
[01:48:52] , this is, this is the awesomest place to start, because you can choose what you, what do you want to use? So we've got,
[01:48:59]  you know, different things, languages, and I'm not going to use acorn. I'm going to use Babel. Um, yeah. And what you get to
[01:49:12]  do is you get the right code on this side and it outputs out the AST on this side. And what's AST? Abstract syntax tree. And sometimes
[01:49:24]  you'll hear the term CST, which is concrete syntax tree. There is a difference. At the level that I sit with this stuff, I, it probably doesn't
[01:49:32]  matter that much. Because what we're doing is we're taking, something else parses the JSX for us and, and the JavaScript for us. And that's
[01:49:41] , that's where I sit. At that point, we can figure out what we want to do with it. Um, And parsing and lexing is its
[01:49:50]  own interesting and complicated topic. And people who invent their own syntax go through all that. But luckily for me, JSX exists. And I was talking earlier, you know
[01:50:00] , I was saying, oh, you know, it's cool. We have code formatters and syntax highlighters and TypeScript. And all these reasons to use JS
[01:50:08] X out of the box just works. Don't have to worry about that. Well, the other really cool thing you don't have to worry about is that there are pars
[01:50:17] ers that are common that you can use. So you don't have to worry about getting this AST, right? Like most tools will, you know, that support
[01:50:26]  AST transformation. JavaScript will have a way to support JSX. And I mean, that's a wide variety. You can use Babel, you can use SWC
[01:50:34] , you use the parsers directly, things like Acorn. And, um, you, you know, a lot of times systems are built on top of these, these
[01:50:44]  systems and you're able to like go there, right? I think this is an incredible superpower here that we've unlocked in the JS community. And something that's almost an
[01:50:56]  expectation is funny. We, we started from a place where, you know, JavaScript was just like JavaScript and it didn't work in every browser. You'd write everything 10
[01:51:04]  different ways to work in every browser. And then thanks to Babel, you only had to write it one way. And then it ended up in, you know, the
[01:51:10]  10 different ways for the different browsers. But now we've kind of gone to a point where we've been so accustomed to these tools. They go beyond, uh,
[01:51:19]  like just that, that, you know, translation. It's like, you can do really powerful stuff with it. Right. And yeah, as you can tell, I
[01:51:29] 'm a big fan of, of the work, you know, with Babel. And if you, if you think about it, like, let's go back to our
[01:51:34]  chart here for a second. Every JavaScript framework leans on compilation to some point, almost the, the only exceptions are things like lit over here. And sometimes you'll
[01:51:45]  find like a preact or react using tag template literals. Um, but like everything else and everything that's really pushing the space, both on ergonomics or performance
[01:51:57]  is using compilation. Like, I think it's pretty understood that there's limitations to the language and um, that we, we, we need to kind of, you know
[01:52:10] , look at. And I hit this in reactivity, but we, everyone hits us on templating to a certain degree. So like, I am big proponent
[01:52:19]  that I think no build is a myth because even the people who use no build, like in Dino are actually building. It's just a matter of like, um,
[01:52:29]  standards and whatnot, you know, like, it's like this, but the thing is like, I don't think anyone should fool themselves. Like just like, you saw
[01:52:39]  the JSX spec earlier. JSX is an XML like syntax extension without any defined semantics. The fact that TypeScript chose to export react is them making a decision
[01:52:52] . That's not like is against the standards. It's like the, like, it's not against it, but it's like, it is something in addition to the
[01:53:00]  standards. This is not a standard. So like pretending like adhering to this is like adhering to the standards or like on the no build side, I think is kind
[01:53:11]  of fictional at best. Um, anyways, that, that, that's a, that's a, that's its own. That that's their own. That's
[01:53:19]  your own rant. Um. Yeah, yeah, yeah, I know. Uh, that's more talking about for the future. We'll still, still, still, still
[01:53:31]  time to get there. Um, okay, so what's sweet about AST Explorer? We can just write div here. And guess what? This one doesn't turn
[01:53:41]  it into react or create element. Babel does not do that. Babel gives us this lovely thing called the JSX element. And the JSX element has an opening
[01:53:52]  element. which has an identifier and also the closing element. And if we give it some children. Well, guess what? Now we have children with the JSX text
[01:54:06] . This tool is great. Like it literally highlights as you hover over it, the parts of the syntax that you're like looking at. So we're like, you
[01:54:14]  can go like this. So then it's like, um, text. And then we, our children are text. And then we have an expression which contains an identifier
[01:54:25] . And guess what? Guess what? Let's call this the function. I can tell now that there's a call expression inside our expression container. Maybe I should do something
[01:54:34]  special with it. Oh, guess what? I can tell now that there is a member expression inside our expression container. Maybe I can do something special with it. Right?
[01:54:48]  Like this gives you all the information you need to do. And then note the best part about this tool. Babel seven. All right. Let's. This is a
[01:55:03]  funny thing where they, their example in here is that they reverse the, the, any identifier. So this name something becomes Eman night toes, but we, we can
[01:55:13]  do, we can do, we can do our own version. We can go JSX element. And then be like, okay, what does the JSX element have
[01:55:23] ? See, we, we're not transforming anything. We get the same thing in and out, but we can go, our JSX element, um, that has
[01:55:32]  a opening element. So, okay, path dot get opening, uh, was it opening element. Um, yeah, dot get, sorry, I'm missing a string
[01:55:59]  close dot get name. And that name is an identifier. Sweet. It's a div. Okay. And what can we do with this div? Well, uh,
[01:56:21]  yeah, I'm trying to decide if I want to actually much in the way of a transform here. But my point is like, we, you can use the information
[01:56:29]  you see in the explorer to write your transformation. So let's just console log this for now. And if I do this and look at our console, we'll see that
[01:56:40]  we have a node path. Okay. We, we still got a little bit more things. Let's do dot node, dot node. And it's a JSX
[01:56:48] . And I, I, I guess we actually, can I just go get name name? Yeah. Which is also a node path. And then top dot node. Div
[01:57:03] . We got our div. And if we change this to capital div. Now we get our capital div. What I'm getting at is this structure is fully introspect
[01:57:16] able. And then you have the ability to get pieces of it. And what we could do is we could, uh, let's see. Okay. So we got T
[01:57:23]  here from Babel. So we can be like, actually it's funny. Cause the hardest thing with Babel sometimes is actually. Yeah. So they, they actually replaced
[01:57:35]  the. Cause I'm trying to remember the syntax right now off the bat for replacement, but we could, we could like just be like, turn this into a,
[01:57:44]  a call expression and call div as a function instead of returning the JSX element. And that's all we have to do here. And here we can, instead of,
[01:57:52]  instead of having a JSX element, instead replace that with a function call call that calls that identifier we just got as a function of that name. We call this met
[01:58:07] aprogramming in real language. It's fair enough. So yeah. Yeah. We're let's, let's, I, let's go over the code
[01:58:25] . See, this is all setting us up for where we want to go next. Right. I want to show you how, what AST looks like, and we can
[01:58:31]  keep on going back here. If we ever have any questions of what it looks like, we can just like drop a code snippet in here and introspect it.
[01:58:38]  This is what transforming it looks like. And this, sorry, not this, this is the sort of topics like this is the three high level compilers. And this
[01:58:50]  is the sort of topics of things that we have to transform with solids compiler. All right. All right. All right. So everyone's doing good. Yeah. Okay
[01:59:19] . Ah, good. People seem to still be around. So that's, that's, that's a good sign. Okay. So let's, let's continue
[01:59:26]  this conversation into, I, I wanted to probably, it makes the most sense to look at, let's see, did I already open the DOM expressions package? I was
[01:59:38]  in solid. Let's, let's go back to DOM expressions. I wanted to look at, um, and you can actually see the DOM expressions project. My first
[01:59:52]  stream ever was actually on me picking apart. It's actually split into four folders, DOM, SSR, universal, and shared makes a lot of sense. Right. And
[02:00:05]  the shared folder has pre, pre-process, post-process fragment component. So the other thing we didn't mention is JSS fragments are also being basically raised the same
[02:00:16] . So components and fragments are the same in all, um, in all different, uh, yeah. In all different, uh, versions and the, and the,
[02:00:29]  the entry for the transform is as well. Because essentially that code that I just showed you in AST Explorer, um, see if I have index here is what I
[02:00:40]  want is right here. Remember how, um, we just set up that visitor and it, and we said, Hey, what we want to look at? Well, in
[02:00:49]  solid's case, we want to look at JSX element, JSX fragment. And we wanted some stuff to the overall file in the program. So this is,
[02:00:58]  this is essentially all we've done here. We, we just took our AST Explorer here and we've gone and crap, grabbed a few visitors that we actually care about
[02:01:11]  from there. You saw that transform JSX, which is in shared it's under transform here. Um, and transform JSX, um, basically does a couple things
[02:01:27] . It handles transforming this, which is weird. And, um, I guess it's worth mentioning because it's one of those edge cases on the compiler. I don't
[02:01:37]  know where I want to talk about this, but it's in the generic part. So we probably should talk about it now. It's just that you use a lot
[02:01:43]  of like, there's a lot of nested functions happening. And when people use the, this keyword, um, things can get really messed up. So we actually have
[02:01:54] , uh, a global transform that looks for this expressions and hoists them up so that they don't get messed up, uh, when you're in the JSX.
[02:02:05]  So any, this is in the JSX, um, get hoisted to the context of the function that was calling them. Um, I don't know if this
[02:02:13]  is a perfect in every case, but when I say hoisted, what I mean is like, essentially you end up with, um, I'll just drop it here.
[02:02:22]  But essentially like if, if someone's using, um, I don't know, div again, this almost never comes up in solid unless someone's using classes, um
[02:02:36] , and kind of forcing their way, we generally don't use solids. What it does is it'll, it'll, it'll, it means that like, if you
[02:02:44]  had to like my component like this and you did something like this, let's pretend you did this. Um, we actually end up doing like cons self equals this self
[02:03:01]  this, um, just because, uh, with a bunch of arrow functions getting injected and stuff and call sites like this gets a mess. This seems to have been working fine
[02:03:17]  with people using classes, but people who, people who like, nothing in solid encourages you to use classes for components. Like it's, it's, you really have
[02:03:26]  to go out of your way to do this, but some people like that. So they do. Um, but this is, this, this is a perfect example of using
[02:03:36]  like a sub transform. Cause what ends up happening is that we do, we're calling like a separate traversal from that point in the JSX looking for this expressions
[02:03:45] . And then it sees if it's, we've already generated an ID. So it like looks and goes, Oh, have we already generated it? And if so,
[02:03:55]  replace it with this ID, but otherwise in the scope, generate this ID. And then at the end, if we have this ID, like this has been used somewhere,
[02:04:05]  we walk up to find the, the parent statement block, and then we create a variable, a const variable with an ID with that self there, um, and insert
[02:04:16]  it before the declaration. Um, this is, this is like a, what's cool about this example is it's a very good example of very, like a micro plugin
[02:04:26]  of something you might do with Babel. Um, right, like this, this one's an, is a, is a funny one. Um, and this is
[02:04:36]  one of those things where like, there's a little complexity here, right? We, we found this out, um, because someone was trying to use classes. And I
[02:04:47]  said, you will not find classes like in our documentation. We, we do not like, it's really hard to use classes with solid, but if there's a will
[02:04:54] , there's a way, right? Um, so, but this is a kind of product of the fact that we do a lot of function wrapping. So this,
[02:05:04]  this is important to bring up here, even at the, like as part of the general transform. Okay. But the, the, the, the bread and butter of our
[02:05:12] , like, so to speak thing here is like our main transform is this transform node. And this is how we actually transform the JSX element specifically. And if it
[02:05:24] 's a JS, yeah, it's funny. If it's JSX fragment, we say that it's not top level versus top level. This is funny. I I
[02:05:34] 'm, I'm trying to think of it because JSX fragment. It it's because we send both code paths along the same code path. If you, if you
[02:05:43]  remember our index here, both fragment and element are actually the same call. So essentially when we do this transform, this is where we do it. We just check at that
[02:05:59]  point, is it a fragment? Then we don't treat it quite the same as we treat an element, which will be maybe more relevant in a minute, but essentially
[02:06:08]  we do this transform. And then the result of that transform gets passed into what I call a templating function. And the templating function, um, you see this,
[02:06:20]  get create template. It's because there's a different version of this templating function per, um, different transform. Universal, um, Dom, SSR all have
[02:06:32]  different versions. So we need to use the configuration to figure out which version we get. And then ultimately we replace what's at the path, which is that JSX
[02:06:44]  element with whatever is in this template that we generate. So, um, the way we've created it in solid, there's, it's actually like, there's like
[02:06:51]  two stages. There's like the parsing to like a structured result, almost like our own projection of the AST. And then there's a template function to kind
[02:07:03]  of like rewrite it back out in the specific output we want for the specific platform. Um, so transform node is the workhorse that gets called over and over and over again
[02:07:15] . And luckily for us, it's not that long of a front function here. Um, it, it basically goes like, and this gets used in multiple places. This
[02:07:25]  doesn't just get used at the top level. It gets used like on children JSX elements inside. So that's why you're going to see there's a check
[02:07:32] . It goes, is it a JSX element? Is it a JSX text element? Or is it a static expression that we can evaluate as text? Is it an
[02:07:41]  expression container? That's like the curly braces. Is it a spread? And that, that actually handles most of the top level grammar that we have in a JSX.
[02:07:57]  Um, the, the, the key thing here is if it's a JSX element, we kind of defer to the platform first, um, because this transform element
[02:08:12]  is also, um, per, per thing. It can either be DOM, uh, SSR or universal, but the fragment, we just directly call the fragment transform
[02:08:31]  calls. I think the only other thing I want to point out that's kind of interesting here is this get static expression. Um, because sometimes things, yeah, let
[02:08:47]  me see if I can find it. Get static expression. Um, sometimes there are things that are not text nodes that we still treat as static in solid. For example
[02:08:58] , if, um, we can use this really cool thing in Babel called evaluate. What Babel has this ability. That's not like documented practically anywhere where you can
[02:09:17]  get an expression and tell it to run the JavaScript at compile time for that expression. And if it feels like it has all the information, like there's no external exports
[02:09:26]  and like functions it has to call or like, you know, stuff that could like change. If it's just like a static variable, like a string or like a simple
[02:09:36]  math, like three plus four, like some, maybe, maybe you've, you made a constant at the top of your file because you want to like pull it out
[02:09:43] . We can use this with Babel and determine if it can be resolved to a simple number or string. And then we treat that like, like it, like it's
[02:09:57]  a static string. And you'll see this kind of trick actually in, in, in solids. Let's put in the compiler here. I can show you what I'm
[02:10:05]  talking about. Cause we can do, we can do something like this. Const hello, or let's, let's do something more fun. Styles equals, I don
[02:10:13] 't know, background, color, red, I don't know. And then we can go down here and be like div or style tag like this. And I don
[02:10:33] 't know why you want to do this, but, but because. Okay. What am I missing here? Obviously this doesn't work, but what, what is, okay
[02:10:45] . It's, I think it's like playground still getting like locked. Okay. Okay. One of that semicolon. do you, do you see what, what
[02:10:59] , what, what the salt compiler can do is see how that text is inside the style block in the template. Yeah. It's still here too, but this isn't
[02:11:09]  going to be used. You see how it's grayed out roll up or your bundler is just going to drop this line of code ultimately, but we just inlined
[02:11:20]  the expression. And now instead of like, how do I, how do I break this so that it doesn't inline it? Um, yeah. I don't
[02:11:29]  think we inline template literals that have value interrupt or something. Yeah. Instead of us cloning the temp style node and then inserting these styles, we do know it
[02:11:45] 's static here because there's no function wrapper because it's just a variable where is, if it was like this, then, um, then it would, yeah,
[02:11:54]  this actually, we, we have an optimization for this, but then, then, um, it would insert a function. The funny thing is in this case, we actually
[02:12:05]  know that it's a function call. So we don't actually, we pass it straight through. But what I'm, what I'm getting at is in this case
[02:12:12] , you'd clone it and then you'd set it in later. But if something can be resolved by the compile, by the compiler, we can actually inline the expression
[02:12:22] . And as I said, this, this is the thing that we like, I'm kind of doing it as I go. I wanted to categorize it because
[02:12:36]  this is something like, I don't think SWC has, but the, the, the, I guess I should probably, I've realized as we're talking about here
[02:12:46]  that there's actually one category above, above this, which is like, um, top level stuff. And that is static expression detection. I learned this stuff when I
[02:13:06]  was working on the Marco team, um, and this handling, which we talked about before. Okay. Um, cause Marco makes huge use of this kind of analysis. This
[02:13:20]  is why it's so effective because in Marco, being able to tell what's static like that or not in like different situations allows it to do partial hydration at like an insane
[02:13:29]  level. Um, anyways, uh, this isn't the most important optimization to be fair. So it's not necessary. Um, but I, it, it kind
[02:13:42]  of gives you an idea of like, um, the types of things you can do with Babel. Um, but in any case, um, where I was getting here
[02:13:53]  is that we can break the categories into like basically five different types of things to handle. And some of them are universal. And some of them are specific and the specific
[02:14:09]  ones are the native elements and stuff related to native elements and the, uh, the template thing or write out as I call it. Um, so let's, I
[02:14:25]  said, I said, we should start with components or fragments here, right? Um, let's, let's look at a fragment for a minute. Fragments is
[02:14:41]  probably one of the easiest ones here. We saw if it's a JSX fragment, we call this one thing. And the reason fragments are easy is that essentially we
[02:14:52]  run this filter call, which basically removes like excess white space and that kind of stuff. Even, uh, even reacts like compiler has similar stuff. Like you can do funny
[02:15:02]  stuff with the formatting. So this kind of like normalizes the children. And then we go through each child. And if it's JSX text, we do some
[02:15:13]  decoding, um, which is to look for special characters. We trim additional white space off of it. And then if there, if it still exists after that,
[02:15:23]  we kind of push it together into, um, into a string literal. We create basically strings. We convert them from JSX text to what JavaScript considers a string. Otherwise
[02:15:37] , if it's not text, then we transform it using that same transform node function we called before. And we just kind of give it some extra hints like, hey
[02:15:45] , this is a child of a fragment. And we take those results and we pass them to that template thing to, to, uh, to transform them. Okay. We
[02:15:58] 'll show what the template is in a, in a, in a minute. But you can kind of see that this is basically just text cleanup and then just calling the transform
[02:16:05] . It's, it's just an array. We're just, we're just converting. Instead of one item, we're converting an array of items. The component
[02:16:14] 's a little bit more involved because components, um, both have, uh, attributes and they have children. So as you can see, there's, there's a bit
[02:16:24]  more code involved on the, on this side, but to kind of get like a high level look at this, um, essentially what we do is we look at the component
[02:16:38] , we get its identifier. At this point, this is only called if we've already determined that it's not a lowercase name. Like, um, this gets
[02:16:45]  called from the element transform, which we haven't looked at yet, but essentially it goes, oh, this element, it does not have a lowercase name. It must
[02:16:54]  be a component and we need to convert it, um, essentially into, what does it do here? It, it basically flattens out all the member expressions because you
[02:17:03]  can go like provider.context.whatever. It's just, this basically gets us, uh, a string for the component name so that we can like call
[02:17:10]  it as a function or reconstruct the member expressions and stuff for it. Um, not going to focus on that too much. The, the biggest process of this, of
[02:17:21]  this piece here is we iterate through all the attributes on it. And if it's a spread, we do a bunch of special stuff. Um, which means we start
[02:17:31]  like collecting, um, properties, but otherwise for the most part, um, we just go through the list of attributes and for components, there isn't that many special
[02:17:45]  attributes. Luckily they, the, the only thing a component cares about is, is it a JSX expression or is it just like a string, right? Um,
[02:17:54]  and yeah, so where we are. So if we're have a JSX expression, then if it's dynamic, do this else do this. And all we're doing
[02:18:07]  here is we're actually going through and creating an object. Cause if you saw the example that we did earlier in the playground, which I've obviously regret deleting at this
[02:18:18]  point. Um, but when we had our capital div and we had like a prop, like, hello world. This create component call is generating this prop thing, right?
[02:18:37]  So hello, hi S it's, it's, it's basically pushing to this object. If, if there's a spread in between, you know, now we
[02:18:50]  need our like basically equivalent of object.assign and we're just constructing all the objects and keys to generate this thing. So we keep a running track of each object.
[02:19:02]  And then we keep a running track of the properties on those objects as we run through, through here. So that's what you're, you, you see that all these
[02:19:10]  push statements, like running object, that's the current object past these properties. And then somewhere here, uh, when you hit like a spread, it's like,
[02:19:18]  oh, I'm going to start a new object and push it to, um, where's the spread here? Um, the props. So, and set a new running
[02:19:29]  object. So we're just like going through the attributes and constructing this thing. And the only special property. Um, there's, there's two special properties that we
[02:19:44]  have to be worried about here. One is children. And the other one is ref. Children is special only because. You can also pass stuff in between the tags in
[02:19:59]  JSX. So if, if, uh, I guess the perfect way of showing this, if, if your JSX element here has children like this, like span.
[02:20:18]  And simultaneously someone writes this children, because these are the same thing to a degree. Let's make a div. This one takes precedence over this one. Um
[02:20:37] , and you can see it here. Uh, we're cl we're cloning the span, not the div. See, we made it a span. And there's
[02:20:46]  this div is nowhere here. If I made this children, like something different, you're going to suddenly see that we now have a div in here, but the child takes
[02:20:56]  precedence over the prop. Right. So this is true of all JSX. One of the things that's kind of tricky is Sol's compiler is obviously more complicated
[02:21:08]  than the react one. And there's a couple of optimizations, but certain properties of it are actually fairly standard. Like the handling of this, like if you think about
[02:21:17]  it, our component function here is basically the same as their H function. So you can picture what we're doing here is not that different than how react would transform, their
[02:21:28]  like create element function. but, um, what I'm getting at is in that case, we have an early return. The other special one here is ref and you
[02:21:39]  can see there's actually a ton of special code for ref handling. Um, and that's because solid has two different forms of ref. Um, one of them is ref
[02:21:52]  equals, uh, like a function. Um, which will be like, you know, get the ref and it'll check if it's a function. And if so
[02:22:04] , it'll call as a function. Otherwise it'll assign it. This is the standard transform here, because you have to understand that this could be, because we also support
[02:22:15]  this form. So you can like, uh, did I, yeah, we support this form. Uh, sorry. Which just assigns the ref. So it's
[02:22:29]  like in this case, it's like, well, ref D is not a function. So we're going to just assign the value to D if it is a function.
[02:22:38]  Um, then this, but what gets complicated is what if someone calls a function here? Like, what if like one thing in this case, we know that if they
[02:22:49]  call a function, the only thing they can return is a function because you can't assign to the return value of a function. So the transform is like a little bit different
[02:23:00]  now where it's like, if the return value is a function, then call that function with this. Otherwise, if it's nothing, don't do anything. So
[02:23:07]  there's some complexity because of the type of grammar you can like pass into the refs. Yeah. The big thing here is we handle in the inside of components, ref
[02:23:22] s are always a function. You can see that ref function, but on the outside, they can be handled by function or assignment. So this is the, probably the only
[02:23:35] , like the the children thing is kind of like obvious, like the child takes precedence, but this is probably the only special property that solids, uh, components have
[02:23:46]  from a compilation standpoint is to be able to handle, um, refs because this solids refs work like forward ref. Like they handle it. Like now when you're
[02:23:55]  inside div and you define function div and you want to use a ref, well, it's just, it's just, it's just, it's just on the
[02:24:03] , it's just on the props object, right? It's like props. Props dot ref. And this is going to be a function, but you can also pass
[02:24:15]  it into little div. which can handle a function or a value. See any, so there, that's a forward ref. Um, essentially. So yes.
[02:24:41]  Uh, the thing is I can't determine, I can't determine a return value or whatnot, which is why there's a runtime check here. That's like, is
[02:24:49]  what I'm getting a function? So, so yeah. Uh, what made you support implicit assignment in refs, but not for setting signal values? I mean,
[02:25:13]  you can set signal values that works as well. Um, like this, this, if you look at it, if it's a function, it calls it with it.
[02:25:20]  So if this was set count, like this will, this will just call set count. It'll go, oh, set counts a function, call set count. So
[02:25:28]  we, we, uh, support both. What I was getting at is that from the forward refs API standpoint, everything gets converted into a function internally. So this is
[02:25:41]  it for components. There's no other special thing here. Um, it's just this forwarding ref mechanism essentially. Uh, so like this is a little complicated.
[02:26:01]  Cause there's like weirdness with typescript that we have to account for. Cause there's like, there's actually typescript checks in here as well, which is,
[02:26:09]  I'm glad someone else figured that part out. Cause I had no clue that was even a thing. But generally speaking, the, the, the trickiest part here
[02:26:18] , um, is if it's dynamic, then we wrap it in a getter, which isn't that hard. You just say object method, get ID, block statement
[02:26:32] , return statement. So basically this is the code that wraps it in the getter. Otherwise just pass the value straight through. That's, that's it. I
[02:26:39] 'm hiding. I'm gonna get to this in a minute. Um, but we're not, we don't have to worry about that just yet. Um, so
[02:26:51]  the, we collect the attributes, the children side, as you can imagine is also just collecting, um, more of these. And again, deciding if it's a get
[02:27:03] ter. Um, we do a heuristic for solid. I mentioned that it's, if it's a function or if it's a, uh, uh,
[02:27:11]  what is it called? Or, uh, member expression, like a dot, because that could be like a pro getter that we wrap. We also wrap JSX.
[02:27:21]  If we detect that the thing is JSX, we also wrap it because, um, we want our JSX to be, we don't want it to the ins
[02:27:31]  it to execute inside out. So, um, JSX is also wrapped. So our children are lazy. So if you pass props to our children and you don't use
[02:27:40]  it, like you don't insert it like in a statement or something or whatever, then we don't actually create the children. Unlike react or virtual DOM library, where that
[02:27:49]  creation at the top level will just create a V node that says type component children. If you actually ran the children in solid, you'd actually be running them. We do
[02:27:57]  everything in a single pass. We don't have like first pass create V DOM, second pass do stuff. So for that reason, all our evaluations lazy. So like
[02:28:07]  essentially it's all JSX in expressions is also wrapped in a getter. Yeah. Getters to track reactivity in general, but for JSX, you don't
[02:28:24]  actually need a getter from a reactivity standpoint because its own reactivity works like an onion. So its own expressions will have their own create effects, which will have
[02:28:35]  their own tracking. And that context, um, of the parent level will be untracked anyways. So like, it's not about reactivity. It's about
[02:28:46] , um, for JSX, it's about, um, for JSX, it's about not like doing unnecessary work. Um, so it was, that was a
[02:28:54]  realization when I realized that it all kind of fit into the same pattern. I was pretty happy because it meant that like, we could treat these things the same way and get
[02:29:03]  the same results. Like destructuring breaks reactivity. Destructuring also, uh, would cause early work by re-rendering children. The, the real
[02:29:13]  problem is reactivity based, but it's not tracking. It's context. Solid's context is based on the ownership graph. Like if that, that subtree,
[02:29:23]  I showed the for loop before it creates a new route. You can pretend that the context belongs to that or the nearest provider and you kind of walk up that tree. If
[02:29:33]  you start creating children outside, like ahead of time, like, like if you didn't wrap them in a getter, you'd be creating the children before you're creating
[02:29:42]  the parent, which means that it couldn't do a lookup on the context. It would actually have the parents, parents context instead of the proper parents context. So
[02:29:53]  for this reason, we want the parent to execute before the child, because not only for tracking, but for establishing the, the, the tree hierarchy of context as well.
[02:30:05]  So there's a lot of like, it all kind of fits together in the graph. This is basically a single pass system instead of a double pass system. And for
[02:30:15]  that reason, we, we don't want to create things inside out. Yeah, honestly, the, the, the, the pull towards having just the assignment style ref
[02:30:38] s is because of the simplicity of syntax. It's very common. People want to do stuff like that in react. And it was like, I got it from SJS
[02:30:45] . It was not my idea. I saw this in a different framework that was doing stuff. And I was just like, well, that's so convenient. It feels so
[02:30:52]  easy and so powerful. I agree that it can lead into. It can lead, it can take you to places where things might not update, you know, like if
[02:31:05]  you don't use a signal, then it can't update. But like, uh, Damien's right here, the, like the 90% case, it just works
[02:31:13]  and it's less code and people like that. So like, it's one of those like awkward trade-offs where you're just like, like, we didn't need
[02:31:19]  that. But unfortunately, like I had it from day one. And if I tried to take it away now, people would be like, why are you making stuff so hard
[02:31:25] ? Like, why do you do all that stuff? Like it's because it's like, it's one of those things that's like so easy shortcut. Like you
[02:31:32] 're just like, yeah, let X, you know, bam, you know, like kind of split as the very common case, you don't actually need a signal for
[02:31:41]  it. Yeah. And it's also weird with TypeScript. Again, a lot of these decisions happened before TypeScript really was in my frame of reference. like you
[02:31:53]  gotta, this is 2016 time period, um, for anyone wondering. But there is a way you can do this and not worry about that. So anyway, refs are
[02:32:09]  one of the topics we've been talking about because it'd be interesting to, there's a few different patterns on refs that we could do that might even be better than
[02:32:17]  what we're doing right now and might even be better than just using signals for it. It's kind of interesting. Um, but yeah, where I was getting here
[02:32:30]  is for the most part, children also just get added on and they, they, they're generally going to be wrapped. And then that's, that's basically it
[02:32:44] . Like the children transform is not that different than the fragment transform that I showed a minute ago where we can filter out the children and then call transform on it and then call
[02:32:58]  the template on it. So I'm going to leave on components there. Um, I'm trying to think if there's anything else I want to touch on before I
[02:33:07]  continue the next thing. Static expression detection components. We talked about spreads and how it basically just merges them into an object. Um, okay. Let's talk
[02:33:17]  Boolean expressions and ternaries. No, I w we, we never need a use ref. It, it, not really. No, actually, uh, I
[02:33:32] , some, there is a TypeScript syntax check, but we actually don't look at TypeScript at all. We don't have that thing. It'd be, I
[02:33:38]  built again, everything with solid, assuming that you wouldn't be using it with TypeScript. Like TypeScript was like something you can add if you wanted to. We
[02:33:46]  don't depend on TypeScript really for anything. Like basically the places where we account for TypeScript in the compiler are places where like, like where TypeScript allows for things
[02:33:54]  to get screwed up. Like, and we have to fix it because like the syntax of TypeScript actually changes what the compilation is. And then we have to like address that
[02:34:04] . Whereas, but we don't like use types for anything in the compiler. I do think we'll talk about that later. About the, the role of types in
[02:34:13]  the compilation in the future. Uh, that's the thing, propter. Could you use AST to check the value of props to the instructor and create those if they
[02:34:35]  don't exist? Yeah, uh, there's a Babel plugin for this actually. We have Babel plugin on destructure. Someone in the community made a plugin
[02:34:45]  that like undoes the prop destructuring. Do you know why I don't like this? Maybe it's a good time to do a tangent on this. Like I
[02:34:52] 'm fine with people using the tool if they know what they're doing. Um, yeah, it's made by Ornn. Um, I, it's kind of
[02:34:58]  like, you know how React has dependency arrays? How hard would it be for React to compile away the dependency arrays? I'm going to tell you, it'd be actually
[02:35:09]  really quite easy. Right? The worst thing that happens is things run too often, maybe. You know, like if you, if you want to like make the empty
[02:35:21]  array case. But they could like tailor for that if they wanted to. Like it's, it's not hard for React to get rid of the dependency arrays. And it
[02:35:28] 's just like, it's not terribly hard for us to make destructuring work. But there's a, like a, there's a huge reason why you don
[02:35:34] 't do this. Because like React forget, um, not forget about it, sorry. React forget is, is addressing that. But it's not addressing that by just getting
[02:35:48]  rid of the dependency arrays. It's doing something much smarter that makes more sense than consistent. React wouldn't just get rid of the dependency arrays and go like, huh,
[02:35:55]  calling it a day. Like it, the problem is let's pretend we do that. We get rid of the destructuring, right? One thing we're missing
[02:36:05]  on that is we don't know what a component is. TypeScript can help with us, but let's like, generally speaking, we have to know which functions to un
[02:36:11] -destructure. But the problem is destructuring is not the problem. Destructuring is a symptom of how reactivity works. So if I fix destruct
[02:36:23] uring and then you go do something later on where you are passing around a value, like let's say you destructure right in the component, or you have a helper function
[02:36:32]  where you pull a value out and you read it not under a tracking scope, or you do something like that. And then you're like, why is this not working?
[02:36:38]  How did I break reactivity? And I look at the code and I go, oh, it's because you're accessing it out here. And you're like, yeah
[02:36:46] , but I could, I could destructure, destructuring worked. Why does destructuring work and this not work? And my explanation would have to be,
[02:36:57]  well, in solid, we do this magical thing that only works in this case. And, uh, it, it, uh, just happens that, uh, because,
[02:37:08]  uh, you, this thing says component here that we do it in this one place, but all the other places you got to be careful. Like it's so fundamental
[02:37:20]  to how the model works, trying to hide it is just silly. It's like that cr in that, that's like creating an abstraction that leaks for like no reason.
[02:37:31]  Like if you want to fix it, you got to patch it everywhere. Um, could you do it everywhere? Could you do it across file boundaries? I mean,
[02:37:43]  with a smart enough compiler, you could do it everywhere, but like, how should I put it? Svelte hasn't solved this problem because the reactivity can't
[02:37:50]  leave files. Like you would need to track every file in your project and then all the boundaries and see what gets passed and understand that those things are things that can't
[02:38:01]  be destructured and then go through the short answer is probably not like you could probably add a syntax for it. You start going, okay, well, if I add dollar
[02:38:10]  signs to variables, it's like, you go down like a whole path. Like this is just the wrong way to be thinking about this. Like it's, it
[02:38:20] 's like, you can, you can add a whole level of complexity and new syntax and new stuff to, to solve this one problem that isn't even a problem. Like
[02:38:29] , it's just, you know, like, I know people like destructuring, but it's like, what you actually want is to bring reactivity into the
[02:38:42]  JavaScript language. It's not destructuring that matters here. Do you know what I mean? Oren says, I made this plugin for people who understood solid just to
[02:38:57]  have a nicer syntax, not the fixed destruction because I don't really see it as a problem, right? Like this is a convenience thing, but the thing is like,
[02:39:03]  it's not something that I would want to default because it would be like, it'd be confusing from a teaching standpoint. It would like, it would muddy the water
[02:39:12]  on how solid works. No, that's the thing though. But like Svelte hasn't solved this. Like the, the way to Svelte solve this by
[02:39:28]  going like, oh, no custom hooks. Like you, you can't make create local signal, like, or like local storage signal or something. Like they solved it
[02:39:38]  by just like removing what I consider the most important aspect of solid, which is composition. Don't get me wrong. They have stores, but like, it's not part
[02:39:47]  of their native language now. And now you have like a separate construct for it and you have to use special syntax to, to write it, like to signal it by
[02:39:55]  using dollar signs. Like you, you, you enter this whole other zone and maybe that's a good trade-off. But like my gut feeling is like, if you
[02:40:03]  have a choice between just doing JavaScript and extending JavaScript and like inventing syntax to solve problems with the language in a way that is ultimately going to be inconsistent anyways, like
[02:40:15]  it's not a hard choice for me. I don't know, but I mean, I don't think everyone agrees with this, which is why solid is different than S
[02:40:23] velte or view. Like I, like each of those has, has a different take on this. So it was like Svelte's take is like, you
[02:40:32]  know what? That's fine. We don't need to do it anyway. View's take is like, no, no, we have to be able to do everything and
[02:40:40]  we have to make it easy. Let's invent a whole bunch of syntax, like the ref sugar stuff. And what you end up with is like that meme from Twitter
[02:40:47]  last week with the, with the, the defined props thing. Uh, like these are not without trade-offs. I, I, I, my, my position thing
[02:40:58]  is like, I like what Svelte did because it's like unapologetic. It's just like, screw it. We don't need this. I disagree
[02:41:05]  that you need it like hard, but I respect when you can just make that kind of cutoff. But the, the compromise in the middle is the worst place you can
[02:41:14]  be. In my perspective. But if you disagree with me, go use view. And like, that's cool. Like, that's just not, that's not S
[02:41:21] velte's philosophy. Right. So. So anyway, little tangent, but I wanted, I wanted to just kind of, I think, I think that's a good
[02:41:44]  point to actually address the destructure thing because it's like people look at it. Like it's, it's like the dependency arrays. I'm very, I defend
[02:41:51]  the dependency arrays and react a lot. They make a lot of sense. People think they want to get rid of them. But I think that's, I think looking at
[02:41:58]  reacts model, the dependency arrays are a good thing. That's not the pain. People conflate that pain with the dependency arrays. The, the pain is the re-
[02:42:08] render model. And the fact that trying to communicate between two different hooks, when the, when the hooks can exist at different times through different paths. Like you rer
[02:42:17] un the component and stuff persists on different branches. Breaks are sort of imperative mind of the way that react works. React works top down. And suddenly you have
[02:42:28]  an if statement essentially. And it's not an if statement because if statements would break the hook rules, but conceptually you have an if statement where both realities happen at the
[02:42:37]  same time. Or like could like where you can have the branch not taken also still exist. And I think this is like really mind bending that the dependency rays like emphasize
[02:42:50]  on that. But the dependency rays aren't the problem. The dependency rays are a smart design. Yeah, I mean, this is a, the, the, the
[02:43:19]  view specific thing, right? I, I don't know. I don't know if like you, you can, is one better than the other? I'm not sure
[02:43:30] . Like, I think it's, it's very easy to look at Svelte and go like, that is sweet. Like that is clean. Like you can
[02:43:39]  look at it and be like, you know, like it might not do everything, but you can be like, I can't complain about that. There's no, there
[02:43:47] 's no leaks. It looks nice. It types nice. about what i wrote it's a lot harder when like you go okay like which which syntax trade-off is
[02:44:01]  worse dollar sign is less characters than dot value but so is uh a function two sides of function bracket that's also less characters like i don't know this is something i don
[02:44:13] 't understand people in we this dollar sign dollar sign kind of convention we actually have a plugin for this also in solids community you can go use it uh uh there's a
[02:44:22]  battle plugin called i think like solid labels and there's another one there's like there's react of ours there's there's like two or three solid plugins that add that syntax
[02:44:32]  to solid they're just not officially supported because like as i said my perspective on this is like if you want to do it go do it but like like we're a lot
[02:44:41]  smaller project we don't have as many resources i like it's very like i can it's it's a lot harder it's a lot fuzzier where the the
[02:44:53]  win is in this scenario where it's like at least felt i can easily see where the win is like there's the value i gave something up i get something else in return
[02:45:02]  the middle zone is like yeah i don't know you know oh this this it never happened okay yeah i wasn't sure yeah i'm glad if that's where it ended
[02:45:25]  up i'm glad that didn't happen i wasn't sure i i know like there's some script setup stuff like i don't know where things ended up but like this
[02:45:34]  is a place where the compromises really suck i read a whole article on about a year and a half ago called uh on the the quest for reactive script um i could probably
[02:45:44]  find it here somewhere but um reactive script reactive script november 2021 okay a little bit of a tangent but it does come up as part of the compiler thing also yeah maybe
[02:46:16]  we'll talk about this later yeah i think that that will be the time to talk about that stuff okay let's continue on um where are we uh yeah so we talked
[02:46:25]  about this so we're it's funny though because the next topic is a place like we as i might have been really harsh there on that middle ground thing just now with with
[02:46:40]  you know these compiled syntaxes and like undestructuring the props and stuff but i had a similar challenge uh on the next topic um with solid which is uh bo
[02:46:56] olean expressions and ternararies and it's as divisive if you go talk to fabio and chat he will tell you that this is the exact same thing
[02:47:04]  as what like you know view did or what like the undestructive thing is because i just i did make a decision with solid to mess with boolean expressions and t
[02:47:14] ernararies inside of jsx and you might be going like you kind of look at this and you're like well why does it work here and not work somewhere else the
[02:47:23]  argument i just made it gets pushed right back at me and in defense and i have to be able to answer that question the thing is it doesn't the choice itself doesn
[02:47:35] 't matter as much as being able to justify it which is a sad thing to say and for me there's an easy there's a easy justification for this because it's in
[02:47:48]  because i can make a boundary i can go it's in the jsx you might think that's flimsy but i at least i have a clear answer to that
[02:47:57]  to that that question i've set a boundary and i've limited to that so from a design perspective i can be like look this fits in this space and this is true here
[02:48:06]  the destructure problem is a lot messier it it it goes beyond the boundary of what solid compiles today solid doesn't touch anything outside of the jsx so i can
[02:48:17]  reinforce this that way where i can't do that elsewhere right yes yes jsx is already an established boundary so from that perspective um like there's a justification but there's
[02:48:37]  like anything like destructuring is kind of painful right this one is is a performance optimization consideration and when i realized i could do it i went with it so what what
[02:48:49]  am i talking about i'll show you what i'm talking about i'm going to use our buddy div again and this time our div is going to have is going to
[02:49:04]  have condition and string now before i added this kind of stuff you had to use the show component and solid like that was the way that you did conditionals um you didn't
[02:49:22]  have to but it was really it could be inefficient the same same way using map is inefficient generally and you want to use four and if you look at this there's nothing
[02:49:39]  special here i did a condition and it returned a string okay who cares well the the the there's a problem here like i i i i'm going to show you why
[02:49:53]  why we do this okay um i'm trying to think of the best way i i have because the jsx is too smart i'm i'm gonna have to i'm gonna
[02:50:03]  have to show you visually why we do this okay this is i showed you the for component let's deconstruct the show component because that's that's that's the way
[02:50:12]  this works so i'm gonna i'm gonna make count and i'm gonna make set count okay and that equals um create signal zero and i got rid of all my import statements
[02:50:30]  earlier import create signal from solid js okay cool okay now what i'm going to do here is if count is bigger than five console.log success okay now i'm
[02:51:08]  gonna use console.log for like both of these um but it's not really how should i put it it one's a spying on it so i'm gonna be a
[02:51:25]  spy and then the other one is like our desired outcome so if i'm gonna set interval again and we're gonna make it for a second and we're gonna go sorry
[02:51:50]  we're gonna go set count is count plus one okay and we go back here create effect is not defined perfect and i'll talk about this so you see spy counting up
[02:52:08]  here at the bottom four or five and then we're gonna uh see success and yeah we start seeing spy success spy success spy success this is fine for some logic here right
[02:52:22]  because we're just we're just running it like this is not surprising from a reactivity standpoint that we'd log let's say bigger or equal to five five will be the
[02:52:31]  match point okay sorry we're not surprised that this starts doing this however this is not what you want to do when this is like expensive control flow you know expensive element like
[02:52:51]  what you actually you don't you first of all like this part's fine like you're just checking oh count updated do i draw it yet do i draw it yet do
[02:52:59]  i draw it yet but once you get above six you don't want to keep on logging expensive element like recreating it from scratch every time so the way you solve this is
[02:53:13]  essentially with reactivity is you go const show equals create memo and you go count bigger than five okay and now check this out spy runs once expensive runs once and we're
[02:53:44]  done essentially it ran once figured out it shouldn't show the thing and all the way up to five it doesn't run this again and then when we flick and this condition
[02:53:58]  becomes true it runs it again because show changed and runs the work and then nothing else here it never runs again because it stays true does that make sense to to everyone that's
[02:54:18]  what that's why i made a show component because baseline reactivity doesn't it's not magical baseline reactivity doesn't have the like it's set up to rerun
[02:54:39]  over and over again right so we need to pull the condition into a memo so the show does is it takes your condition writes it in a memo and then and then does
[02:54:48]  your side effect however what i was getting at here is a ternary operator does not do this right like how does it know to do this because why does it do
[02:55:09]  this let's assign it to a variable maybe oh type script's actually working huh that's awesome okay it's fine i'm looking at the compilation anyways um okay tern
[02:55:22] ary operator is just going to rerun this whole expression right insert this whole thing so right now solid's smart enough he goes okay you're just returning a string like we don
[02:55:33] 't care enough about a string but if you return to div well let's memoize the condition force it to a boolean and then return the actual expression that we
[02:55:50] 're going to return to evaluate is actually only clone this when this memo does it we just the ternary like we just turned this code into this code we created a memo
[02:56:11]  and then if show clone the note so basically we determine and how do we determine if this is operation expensive well the same way we determine if something's dynamic if it's
[02:56:22]  a function call a member expression or a JSX element same heuristic um and that's what we do it doesn't matter if it's if it's this like we
[02:56:38]  have to memoize the condition this what's is this one sorry um oh wait is that one not working oh right okay interesting I thought that one worked we should double check
[02:56:54]  that okay um does it or work I think there's a reason why you can't do this with the or expressions yeah because you can't force memoize this with an or
[02:57:07]  expression um um because this could be the value that you return anyways um which is fine because um in an or expression case if you think about it um the condition is
[02:57:34]  the thing you're returning anyways so it's not a boolean it's like a thing so this is not going to bite you in the ass generally you're not going
[02:57:41]  like counting plus five you're it's the thing you're returning like and if you're returning the thing and you're running it over and over again you you kind of got
[02:57:49]  a problem already anyways anyway um but this is additional compilation and this is one of the fancy things that we do with solid because I had a choice I didn't have to
[02:58:05]  I didn't have to do this right um but without doing it you'd have that count up thing problem like if the expression kept on moving like it was based on a length
[02:58:19]  or something you'd recreate all the children every single time it updated once the condition was true and um that that essentially um is what led us here and as I said this
[02:58:34]  is this is this is probably one of the most fancy parts of of it so I I I kind of skipped over this earlier when we were looking at the compiler but if
[02:58:51]  you if I go into the component code there's that one part under dynamic that I was like I'm gonna I'm gonna talk about this in a minute it was because when
[02:58:57]  we got to is dynamic it goes if is a logical expression a conditional expression then run transform condition otherwise I'm just making an arrow function just wrap this with an arrow function and
[02:59:08]  this transform condition is a pretty cool piece of code where is it again uh shared utils um transform no sorry utils it's uh let's see transform condition it recurs
[02:59:26] ively goes through checks the dynamic nature of each like part of the grammar like because you can nest ternaries and ternaries and all that and it goes through and
[02:59:38]  based on the dynamic nature of the expressions and the structuring in that it actually creates all the right memos all the way down to do this so because we can do like
[02:59:49]  we can do like other this this div and it still has to be based on right like memoize this return expression which does this which has like you can see there's
[03:00:08]  multiple memos like different clone nodes um this is this is the the probably yeah you could write this with a bunch of show components um but i made a choice here that we
[03:00:25]  could have optimal termary operators um which is an interesting thing because people are like well if you do this why can't you just fix map why can't we why can't
[03:00:35]  we just use map here and not have the for component and have map compile to the for component and the answer to that is this is actual analyzable grammar let's
[03:00:48]  go back to a ast explorer and grab this code snippet that we had here right let's if i go in here and put this in here what you're going to see
[03:01:00]  is uh let's we want here you're going to see okay we have a logical expression okay so first we have a conditional expression who has uh a conditional expression who has
[03:01:15]  test is a call expression and consequence is a logical expression um and then that consequence the left side is a call expression and then the right side is a JSX element like
[03:01:31]  we can see this grammatically that this is a language construct if i just went like hmm s dot map something like all this tells me is that you call the function called
[03:01:51]  map do you know what i mean like like okay this is an identifier call the function called map what the hell's map like like this is not this function a function name map
[03:02:07]  has no defined semantics like from the language perspective like yeah like the ternary is part of the language if you could use do expressions in here and put a for
[03:02:20]  statement in here yeah then we could compile a for statement and have it act like solids for loop if we wanted to but or for component but what I'm getting at is like
[03:02:31]  I'm not going to magically compile map mitosis does this though that's what mitosis does it kind of goes well if you put something called dot map in there we'll
[03:02:43]  just kind of assume that's like how do you explain that to someone oh we just look for functions that are called map and transform them like right you get what I'm
[03:03:03]  getting at like yeah I I mean some people like it's an arbitrary line or something I don't think so like one is like what if this functions now called map two
[03:03:25]  like this this is not this is like like you you have the syntax in javascript to tell you what the intent is this doesn't tell me anything yeah maybe with
[03:03:46]  type analysis types might be our way out of this dilemma we're in right now but that's not where we're at and I've been told by multiple people every time I
[03:03:54]  make that suggestion that TypeScript isn't the language isn't capable of doing what I want anyway so let's continue on our little journey here that is one of the fancy
[03:04:07]  things and everything I've talked about right now all solid output whether you're using universal or what not works that way and the thing is I think I have a code sandbox
[03:04:17]  it's like custom DOM renderer we did it on stream and what we did was solid custom renderer has a bunch of like create component create element type calls you just define
[03:04:32]  you get basically define a few things that we need and we compile the elements in a set way with universal and essentially the component calls and everything is like what we've seen
[03:04:46]  to date so let's talk native elements because that's probably the next topic here is TypeScript okay with the ternary thing I mean this is valid it doesn't
[03:05:10]  matter what I compile it to it it matters what like what you write is TypeScript fine with this expression yes type TypeScript is generally fine the only the only like TypeScript
[03:05:23]  doesn't care what I output it only matters that this makes sense the only reason that TypeScript might not be happy with this is because it doesn't know how to narrow on
[03:05:33]  a function calls return value because it thinks different but generally speaking TypeScript is perfectly happy with this yeah so yeah where were we yeah going back to my scale draw I think
[03:05:57]  we've covered everything that's universal now now let's talk about the state these last two native elements and custom attributes are specific to the compiler although the DOM and universal ones
[03:06:09]  are very close they're almost identical the SSR one is our special case and probably one of the last things we'll get to so let's get out of here and
[03:06:19]  look at what the DOM one looks like and it's just two things remember how do you transform the element how do you print out that template right and the transform the element is
[03:06:29]  kind of following the same pattern as the component one in that it does a bunch of processing stuff but ultimately what ends up happening is we transform the attributes we transform the output
[03:06:46]  for each of these based on whether you're hydrating or not hydrating it changed the output slightly the code regeneration generate and hydrate mode and not hydrate mode for both
[03:06:56]  the server and the DOM version which complicate things but the basic pattern is the same there's a few special attribute things that I handle up front which we'll talk about later
[03:07:04]  and you'll see them everything related to class classless style these ones are the special attributes of beyond ref but even looks like some stuff around inner html text content
[03:07:16]  where are we getting here where are we this is set attribute sorry this is not what I'm looking for I want transform attribute yes yeah so here we go we this this this
[03:07:31]  is the preprocessing I meant to talk about stuff about styling and about classes we'll get to there but this main loop down here which is basically get me the
[03:07:42]  attributes for each attribute go through it and this is very similar to the component one where essentially we're looking for static values or looking for dynamic values looking for things that could be
[03:07:56]  thought of as static values so let me see here here's the ref code it's actually almost identical to the component one we have to check for non-null assert
[03:08:10] ions because that breaks typescript but other than that it's very similar and we get a similar output which I didn't show before but I think is fairly what is it ref
[03:08:24]  equals w it's a very similar output where we get like what you're going to see here on the DOM element ones is instead of just calling it we call this function
[03:08:39]  called use and the reason is because refs and directives are basically the same thing the only difference between a ref and a directive is the directives have specific code they call
[03:08:56]  we ended up using use this use function as just a way of having common behavior between them early returns don't work easily in solid well it depends on what you mean by
[03:09:12]  work early returns work in solid right because it's just a function that runs once so if you return something early that thing that you that that works that you return will continue to
[03:09:25]  work right that makes sense I know that's not what you were asking though but like it's it's it's it's it's it's almost like a nons
[03:09:37] ensical question do you know what I mean like because people say early returns don't work but technically speaking how could they like it just it it's it's it's
[03:09:50]  it's a question that it's like it's like it's an area that just doesn't make any sense like it's like if you call a function and you have a
[03:10:00]  conditional and it returns then it did it did its thing the early return worked so like yeah I don't I don't know how to phrase this in a way like it
[03:10:15] 's basically it's not the question isn't so much asking if early returns work it's asking if solid runs this function over and over and over again and it doesn't so
[03:10:25]  yeah like this was actually one of the contentions when we were talking about this with the guy working on the react for get compiler because he was like he made a big thing
[03:10:40]  about early returns not working and it's kind of like well they work you know what I mean like if you have a function and you return the value it works I didn
[03:10:51] 't quite get it I'm like is your expectation for the other expression that isn't on the early side to somehow run if you don't call the function again like it just
[03:11:05]  it's kind of like in that it's just kind of in that space where like doesn't make sense like it's like yeah I mean get condition if get condition
[03:11:39]  return something returns something else my like I'm trying to set up a situation here where I could like somehow make it make sense but like it just yeah yeah I mean I
[03:12:05]  guess it's simple to say early returns don't work but they do work they just don't do what you might expect them to do if you expect a function to run over
[03:12:14]  and over again anyway where was I but yeah where I was going here was that the use here whether you use ref or use our use syntax which is like use something equals
[03:12:38]  I don't know whatever it is this one calls use like this and it uses a third parameter to pass the expression that you pass to the use statement oh is that is
[03:13:12]  that the concern like people like don't understand how you do the branching logic yeah you can use the show component essentially is probably the easiest way to do it or use
[03:13:20]  a fragment with a ternary or something like I get it like if you want the if you want the logic to branch in your component then the thing you have to return
[03:13:32]  has to be branchable is the best way to put it because it only runs once yeah like because it returns you return the thing that branches if that makes sense yeah
[03:14:07]  I so how right but show component can yeah how should I put this yeah the you the thing is because we don't have hook rules you could define new state inside it
[03:14:35] 's funny because in react you can't actually define new state after the early return anyways because of hook rules so like in solid you the expressions make it harder you could you could
[03:14:49]  do it as an expression but it would be like a tedious one where you declare the variables above and then assign them you know as expressions you can use ifes you can
[03:15:00]  use the function form of show but unfortunately right now that's keyed but it didn't have to be right like you can technically declare signals at any depth in the JSX
[03:15:10]  template it's like they have their lifecycle based on the the reactive tree not the component tree so you can just insert signals anywhere in the JSX where you can write them and
[03:15:23]  you can create them and those effects will get released when their parent gets released in the hierarchy of the JSX if that makes any sense re-renderings like it
[03:15:57] 's put my logic set up on you yeah I guess I don't know how that works right I guess you could split your template up more granularly but all your logic
[03:16:10]  still had to be declared above the first return statement otherwise hook rules would bite you so like from that perspective if you replace your if statements and conditions that were doing those early returns
[03:16:26]  with more JSX to wrap them then you kind of end up in the same place anyway just want to show the ref version on the components use a different function but
[03:16:50]  it is very similar to the native elements it's very similar to the components the other thing so that's the refs see same thing use children we have a yeah I
[03:17:07]  don't want to talk about special attributes yet we'll talk about them in a minute a lot of the stuff on the DOM is actually like that you know what actually it might
[03:17:17]  be easier for us to look at the universal renderer element first to see it although it is a little bit different in the universal renderer we go through and again ref is
[03:17:30]  special like I mentioned before but and use you can have actions on our custom elements or sorry custom renderers you can add directives but beyond that it actually isn't that
[03:17:46]  different than the component one when it comes to until you get to the children and inserting them and the difference here is it calls functions you define for the universal renderer like insert
[03:17:59]  node create text node and returns those instead of doing the template cloning so in the universal renderer things get created one by one because we don't have template cloning
[03:18:15]  like I showed earlier so essentially it'll call the provided create element call or insert node call from the compilation spreads spreads do the same thing as components where we collect all the
[03:18:38]  properties let me let me show this off again a little bit let's add spread spread spread here what you're going to see with spreads is where is it got too much
[03:18:54]  noise I'm not actually seeing the spreads come in you're going to see a slightly different helper here called the spread helper but it works I need something with more properties you
[03:19:11] 'll see what I get to in a second you'll see merge props come out again merge props basically the spread helper gets the element and then it gets the props that you need
[03:19:24]  to spread on it and again it uses merge props to do it the reason we use spread helper here is if you don't use any spreads in your code on native elements
[03:19:32]  you don't need to bring in the spread helper and the spread helper is very similar funnily enough to a hyperscript function like something you'd use in a V
[03:19:42] DOM library because it literally needs to go over all the props and be like has this one changed has this one changed and do a shallow diff against all the props because once
[03:19:52]  you have spreads involved you have to look at the combinations of the different props if everything is directly assigned we can optimize it one to one but with spreads we have to do
[03:20:02]  a shallow diff so this actually brings a nice chunk of code in which is similar to what you'd find in a virtual DOM library and that's why we have this operator
[03:20:15]  but other than that it actually just uses merge props to put the rest of stuff again and if you watched one of my previous streams I think it was creating solid 1.5
[03:20:25]  I did a lot of work on the spread here to optimize certain cases where it could tell when certain props were safe to be put directly into the template because they're the
[03:20:44]  lowest level and the spread would always be spread on top of them and they never override so there's a bunch of optimizations that we look at in the order that spreads and
[03:20:51]  attributes are put on here in order to produce the best output yeah the well the object dot assign part is the merge props the spread part is the hyperscript function so
[03:21:08]  in a sense this is almost very equivalent here is very equivalent to what you do in a virtual DOM library if you don't use spreads then solid is able to do really optimal
[03:21:19]  pinpoint updates like you know if we pick I don't know let's make this it can go set attribute title d right and if we make this reactive you can go create
[03:21:34]  an effect that sets the attribute title whenever d changes right but once you get spreads we kind of it starts devolving more similar in those cases to what you get from a
[03:21:45]  virtual DOM library so sorry I was just reading chat for a second to see where we're at essentially this kind of mechanism is the same whether you're using custom render
[03:22:23] er or a typical client renderer because we'll just call a set attribute call an effect and I think one of the cool things that solid does is effects and react computations
[03:22:35]  are actually kind of expensive so making a billion of them isn't actually good so to speak like it isolates them so that they don't run multiple times but we're
[03:22:49]  trading one thing for another thing yeah we got rid of the component overhead but now we're on the dynamic side incurring more cost than we need to so while computations are
[03:23:01]  not super expensive we still do things so that we can what was I don't know I'm just gonna make something a placeholder equals see if I make this eight it
[03:23:15] 's just gonna show up in the template up here placeholder equals eight but if I make it H you're gonna see something happen a little differently here our effect now wraps both
[03:23:29]  attribute checks and evaluates the value and does a shallow diff to decide which attributes to do so we actually introduce shallow diffing back in to reduce overhead of creation costs of
[03:23:44]  having multiple effects so this is something that all our renderers do the DOM renderer the universal renders do technically SSR doesn't do this but I'll explain SS
[03:24:04] R last but we use this grouping of effects as a way of reducing like the overhead cost of update is so minimal here compared to the cost of actually creating scaling with interactivity
[03:24:20]  well and this comes into the question well if they're not memoized the thing is we call our reactive primitive create memo but it's not it's not memoized in
[03:24:40]  the typical sense if you're saying like because our system is based on mutation and things don't run over and over again generally you're always going to have the same reference
[03:24:55]  anyways where this gets you is if D is not a create memo but an expensive calculation that you're doing then you're redoing that calculation every time however if D is a
[03:25:05]  signal or you know solid create memo or whatever then and most simple things that you do for formatting here like too lowercase then it's kind of like you know what I
[03:25:20]  mean like what is it too lowercase like you are doing extra work here but like there's whole articles on people like telling people not to over memoize and react it's
[03:25:34]  not worth it our default here is to not over memoize once you get like this only matters when you get to a place where you're doing expensive operations otherwise the cost
[03:25:47]  of creating that memo on creation isn't worth it if that makes sense so I think this is I just wanted to show this off because this sort of optimization is a minor
[03:26:11]  one but it actually adds up when you have lots of interactivity and let me show this in DOM expressions what you'll see is when we go over the attributes here there
[03:26:31]  should be a transform attribute here child knows transform attributes if it's dynamic we push it to a separate list to get processed later otherwise we write the set attribute statement like we
[03:26:47]  did there and this dynamic list will get handled later what I haven't shown at all yet is the templating functions and what these do is the results collect all these symbols like
[03:27:03]  the expressions like the walks the template and what the create template function does is it iterates over them gets all the declarations puts them in a big variable decoration and those
[03:27:15]  will be like clone element walk to the node to get the elements all that kind of stuff gets printed out and then it will go through all the expressions we collected and wrap the
[03:27:28]  dynamics in the single grouping like we just showed and then return that all out and that's essentially here and here's what wrap dynamics looks like it goes through and creates all
[03:27:43]  the checks and initializes it you basically just create for each one push on these identifiers and then print them out again you'll see a lot of these patterns when you're
[03:27:59]  doing AST transforms it's a lot of just like creating taking one object and converting it into a different object with a few helper functions like make an expression statement with a
[03:28:10]  logical statement of type and that's first argument is a binary expression with a member expression of this like you're just linking these kind of things together so yeah I mean I
[03:28:28]  don't know if there's a ton of interest in the thing I always get asked about the compiler topic so like I feel like it's important to talk about it and bit
[03:28:37]  on its implementation I'm the last I mean that's mostly how the elements work like the difference between the universal and the DOM one is that the universal one calls like specific
[03:28:50]  crate calls that you define in your universal renderer and the DOM one makes a clone node thing and instead of your the universal renderer when it makes crate calls it assigns
[03:29:00]  them to variables and the universal one generates the walk the generator of the walk is a little bit interesting where is it transform children because I think there's one case that I
[03:29:14]  haven't talked too much about that's awkward with any system that clones nodes we should look at it yeah let's look at it the one case that is awkward for systems that
[03:29:25]  clone nodes is space expression space I I I'm going to emphasize this by putting text on both sides if you're cloning the nodes it's really easy to go like
[03:29:43]  oh um like this is the first child insert it before this is the last child but if you have text wrapping your expression here and you clone the node the clone node doesn't
[03:29:58]  have doesn't have this location it just has space DD this and this whole thing is one text node I mean you can look at it here it's one text node so
[03:30:10]  I gave away the secret here we need to put a marker in the clone thing lit does this lit does a lot more markers than this but for solid this is the one place
[03:30:21]  where we definitely need a marker because when we clone it we have to be able to find it and have a node that we can't have this being one single text node
[03:30:29]  because we want to update this one place so this is one of the places where the walks get more interesting because we actually end up walking down into it stepping over it and
[03:30:45]  then inserting our stuff where this comment node is because that's basically how we find it so we have to actually detect this case in the compiler let me see here where is
[03:31:11]  the best place to look at the walk generation I think if I look for next sibling I will find it okay yeah as we're iterating through the children we keep track
[03:31:31]  of identifiers and you see this I here it's like if you're the first child it's first child otherwise it's next sibling and this code here is we're iter
[03:31:41] ating through the children we transform the child's results and then the resulting template we append to our own template this is how we're like building it up like if it's
[03:31:57]  just like a string like we're just building up the string here and if the child has an ID which is saying that it's a template then we have to like based on
[03:32:10]  what iteration we are on the children start creating the identifiers to walk through and be like first next this is not smart I am not doing crazy analysis I'm doing it
[03:32:20]  as it goes as we're iterating and transforming I'm just going okay here's the first one here's the next one here's the next one and just adding them
[03:32:28]  to that declaration so that later when we print it out we have the full list and we assign a unique identifier which is what that child ID is so that L1 L2
[03:32:40]  L3 so that we can use that identifier in any expressions we do but the key part is as we get the children we actually the parent absorbs the children's declarations and
[03:32:52]  it all pushes up so all the declarations get hoisted all the expressions all the dynamics all the post expressions I call them and then a few other ones post expressions only
[03:33:08]  matter for hydration we have a few things where we do event replaying but essentially there's these things all get absorbed from the child as we walk to create this one thing to
[03:33:21]  get printed out at the end and then yeah if the child isn't a DOM element then we just insert the expression directly and that's what that insert call is again you
[03:33:34] 'd have to go through the code in much more detail to get the full gist of this but I wanted to show how we get the walks the thing is we do a
[03:33:42]  couple smart things in that we don't print all the walks out if we can tell that the child has nothing interesting we skip the walks essentially we skip going over it we
[03:33:56]  have a quick analysis where we look forward and go okay does any of the next siblings have any expressions in them if not let's just stop walking from this point so there
[03:34:06] 's a few things but I do rely heavily on stuff like roll up to prune any unnecessary walks if a couple of them do get in this isn't the smartest thing it
[03:34:16]  was a very brute force quick and easy way of generating the walks I think the most interesting part is in the expression insertion this is the place where we figure out if
[03:34:35]  we want to make a place holder or not where we're like check the length of the children hydration has different behavior here so that's why they're marking it basically because hydration
[03:34:48]  wraps these expressions in markers instead of just putting one in the middle because hydration needs to find ranges because it doesn't know how long it is and it needs to pull all
[03:34:57]  those elements out but the basic case for what we're doing right now with the DOM is it basically determines if this is a case where it's boxed by text nodes does
[03:35:08]  it wrap by text if so create that place holder and then as we go we do a bit of this look ahead kind of thing to determine these conditions so we create the
[03:35:22]  right template and the right expressions yeah okay good thank you I'm a little bit out of space talking fairly technical here and so thank you very much I appreciate you telling me
[03:35:49]  that what I'm saying is actually making some sense but yeah there's a lot of detail here it took a while to kind of come up with this the biggest thing here is
[03:36:02]  if you can see this in solids playground I am going to talk about hydration briefly here so you can see the difference it's that for we have the single I'm going
[03:36:16]  for the single expression we put that in if we're doing client side with hydration we actually have closing and opening comments so that we can actually collect the range in between because we
[03:36:33]  don't know the server might put 20 characters or one character so we need the boundaries on both sides so again it follows the same pattern of doing this walking but the difference
[03:36:46]  is in hydration when we get to a marker we go walk to the next marker and grab me the bounds that I need to do my operation so it's similar but different I
[03:37:00]  was able to reuse the same patterns for hydration this is one of the reasons we use template cloning because if you think about it when you're client side rendering this is all
[03:37:13]  you need and it's most optimal and if you don't have this weird case you don't need any markers and everything works wonderfully if your server rendering the first time you
[03:37:22]  run you're not cloning a template it's already you already have the HTML that's rendered on the server so instead of calling clone known we call get next element and what
[03:37:29]  get next element does is it's like am I hydrating yes in that case so it goes oh hydrate get me the next chunk of elements and that will be my
[03:37:50]  element whereas if you're not hydrating this still has to work client rendering even when you're not hydrating because what if you navigate or change some part of the view you
[03:38:05]  still need to actually do client rendering when you hydrate and some frameworks like Svelte have like two separate code paths but what's really cool with this template approach is
[03:38:15]  that we can hydrate the first time by not running the template and just grabbing the elements and the next time we get here we go oh not hydrating we just clone this
[03:38:26]  template and it has the exact same walks so in a sense like the code for hydration and client side rendering is identical this drastically reduces on size that's one of Svel
[03:38:41] te's biggest size issues people pointed out that Svelte is bigger generally speaking than a lot of frameworks in terms of compilation size output but actually they get even bigger when you
[03:38:53]  add hydration into consideration and this approach basically reduces the hydration code is almost the same size as the non hydration code because it does basically the same thing it just walks it's
[03:39:08]  slightly less optimal because it does this marker walk when you're client rendering but yeah I mean I could probably look at figuring out how to not do that it was just this is
[03:39:24]  very simple basically hydration and rendering work the exact basically exactly the same on the client side so just want to point this out because if you look in here there's a little
[03:39:37]  bit of extra code that's like if you're in hydration mode wrap them instead of inserting a single one that's essentially the difference here okay okay yeah this detect expressions is
[03:39:52]  what I was talking about earlier where we kind of like go through and see if there's anything of interest so that we can skip generating extra walks where we don't need to
[03:40:00]  but and there's a couple interesting things like people like web components we wanted our web components to actually have context so we actually in a few places write the reactive context onto
[03:40:16]  the DOM element because web components can wake up async which is really annoying so this way we can actually find it on the tree and walk out if you watched my last video
[03:40:24]  on how to make solid work in islands so when I went to react I knew exactly how to share context between two distinct trees with solid by using this little trick of walking
[03:40:40]  the DOM and writing it in but this is a little bit extra we do so that we can support the reactive context for custom elements okay so I think that's most of the
[03:40:58]  DOM stuff other than the special transformations that we do for special attributes okay and where do I want to show that a lot of times with special attributes you can kind of view
[03:41:20]  them almost as directives in a sense where you could write some custom logic to them and then call a function so if I have a div and I go style equals my
[03:41:39]  style we just create an effect and we call the style function okay and what's the style function it's a runtime thing that does like goes through your style object and applies and
[03:41:54]  sets styles it's not it's not fancy and to be fair if I do class list it's kind of like identically the same thing so there's a few special
[03:42:04]  properties like this that we look for and that the base transform for it is just call the function and I don't like having special properties that much I think style is necessary I
[03:42:15]  think something around class is probably necessary but you know class list are not arguable but like essentially there's a couple things and it's for native dom generally classes and styles
[03:42:32]  are special but there's also you know click handlers sorry I'm in hydration mode I can see it's telling me to run hydration events click handlers and you see this
[03:42:47]  like sneaky delegate clicks this is how we do it we essentially based on what types of handlers you're using in your template we say hey add that click handler to the
[03:42:57]  document based on which events we add that but what I'm getting at is the baseline is we have a few helpers to handle transforming specific types of attributes to be fair in
[03:43:12]  a custom renderer you can still do a lot of this stuff if you look at my silly custom renderer I built here I just had to make it that like if you
[03:43:20]  set property name equal style then I needed to do this and then if it starts with on then I need to do that like this is not what solid does but I just
[03:43:30]  wanted to point out that like it's very common for libraries like this to have special helpers that at runtime manage like stuff like there's so many weird things in the DOM
[03:43:41]  you hit like if you like you have to set an attribute to false all the properties are different than attributes there's a billion little weirdnesses that the frameworks hide from
[03:43:57]  you and they come up in the form of these helpers because if we just were like oh yeah set the property straight through it doesn't do what you want and every
[03:44:05]  time that's the funny thing is that's where solid started from I try to be really basic and just like transfer it through no one expects that or want you to do that
[03:44:14]  ultimately they want you to coerce things to strings and normalize what they said because if you just set it straight through stuff doesn't work the way you expect it to
[03:44:22]  so you do need that layer I keep it minimal and solid but it still exists and it exists like it's part of the h function or the create element function in react
[03:44:33]  like everybody has this code it's just when you have a compiler like this where we're not doing a single h function and we're doing fine grained updates so we're
[03:44:45]  not just calling create element every time you're going to end up with a few like click handlers or like style and stuff and I guess you could say this probably you
[03:45:07]  could yes yes yes yes that's that's what we do event delegation gives us good performance benefits and it lets us do cool things like use array syntax which is a runtime mechanism
[03:45:23]  by the way that's why we have that add event listener call that I showed you you can pass in like if you do like if you have like a for loop and
[03:45:33]  you pass an array you can be like function user dot id or something you can use this syntax and it's funny because we're seeing the compiled version here because I kind of
[03:45:49]  gave it away a bit here if I pull this out into something else R const R equals here okay let's do this you'll see this add event listener and it's
[03:46:03]  going to be able to handle that array properly and what's cool about this is without making an extra closure it can actually call this function with the appropriate data for each iteration
[03:46:14]  against the delegate without creating like a thousand functions so but you saw I purposely been attacking this topic in a funny way because from the universal standpoint you can map these all to
[03:46:43]  a set property solid has a few special helpers no big deal and it handles all the cases but you know I'm a performance junkie so solid transforms for almost all
[03:46:54]  the special properties also have an additional special transform version which optimizes if you inline the thing which is very common and I think you just saw what happened when I put this
[03:47:05]  in here you actually don't call the function and you directly put the click handler and the click data directly on listener thing I can actually do the special case directly based on
[03:47:22]  what it sees in here and this isn't limited to this like if I go I don't know let's do background color you're going to see our effect here isn
[03:47:45] 't calling to style it's calling style set property background color d and if at the same time I was like border radius I don't even got I'm going to embarrass myself
[03:48:00]  here from the last time that I actually did any CSS I don't know if I do this you're going to see something really interesting the border radius 3 pixel gets set
[03:48:12]  here and only the background color is put in the effect so it actually determines based on which expressions inside the style tag are dynamic and can individually separate the static from the dynamic parts
[03:48:28]  of the style tag to ensure like that if you inline the object we can actually get even more optimal updates and only update the specific style on the specific element and class
[03:48:47]  list is like this too toggle based on not DD class border radius class I didn't realize I hadn't done this with styles but class it's smart enough that it actually sees
[03:49:06]  static element of the class list and puts it into the template and realizes that you actually only this is the only one that can change and wraps that individually in effect so
[03:49:22]  so if you inline inline stuff in solid and that's why we do that static eval stuff I'm trying to extend that inlining benefit to things that aren't
[03:49:32]  inlined you you can get even better stuff and Svelte does this sort of trick this is this is a Svelte like trick to be fair we don't
[03:49:44]  need need it my custom renderer that I built that's really dumb here like this was as fast at the time I mean I don't know the benchmarks Inferno
[03:49:56]  has gone a lot faster recently without changing anything but it was as fast as the fastest VDOM libraries even without this but you can't trust a benchmark that test one individual
[03:50:09]  thing I I I'm taking performance here from a holistic approach this is just faster you know it's just it's just better so I mean animations you know you want to
[03:50:24]  get that 60 frames per second smooth animations update just the style property that's changing you know what I mean like this is this is this goes beyond benchmarks it's just like convenience
[03:50:36]  where you just write stuff and you just get the most optimal code inferno got faster because warmups were added well there you go well and that you're getting at why
[03:50:57]  I did this it's for the tree shaking because if you inline all your class lists or inline all your styles and do it all like this we don't have
[03:51:06]  to bring in the class list operator the style operator because the thing is inlining does something really really important it tells us tells the compiler that the shape of this can never change
[03:51:18]  right you might be able to change a value but not the shape see the thing is if you change this to like s this and this or something we have to use class list
[03:51:28]  because I need to diff the previous against the previous and you know what I mean like we got to go through and be like oh did you add properties did you change the
[03:51:36]  object did you you know what I mean like you suddenly have to be removing stuff and adding stuff if you just do this it's just like we're just overriding if
[03:51:46]  background color doesn't change we know it's gonna be the original you know or the class isn't is applied originally it's not going to change until you change d like
[03:51:53]  this sort of optimization works because you know you're always just replacing what you have there so this kind of compilation's biggest benefit is it lets you tree shake all the vdom
[03:52:10]  big diffing type helpers like spread brings in helpers classless and style bring helpers if actually have stuff change if you can give me something that's statically
[03:52:22]  analyzable like this then we can do better is it hard to maintain such use cases that's an interesting question for the most part it hasn't been because each one is
[03:52:35]  attribute based so you just have to say these are the rules for this attribute so it's very modular and it's like when I wrote the universal renderers it was almost
[03:52:45]  like copy paste the code and delete a couple blocks because it's like this attribute we don't have a special attribute just remove it like it's very self contained the only place
[03:52:53]  that it's not is class and classless that was my mistake you you have two different ways to set class and when you have to concern that across spreads across like other
[03:53:03]  types of things it's messy this works perfectly good if each attribute is only responsible for one specific part of the thing so in a sense classless was a mistake the problem is
[03:53:16]  there's two ways out of that mistake make it a directive which drastically reduces its power you can't spread it you can't do a bunch of stuff or make it into
[03:53:25]  class but you know what the problem with making it into class is the most common use for class might be something like this class equals s okay or s and I mean it's
[03:53:40]  not too bad we have a helper for this now class name helper but this thing basically before I made the helper I need the helper generally speaking this doesn't have all the
[03:53:55]  class list logic right but the problem is if someone does this it has to have all the class list logic basically I can tell if someone went class and did an object and did
[03:54:07]  a bunch of stuff here I can be like oh that's a class list or an object I can optimize it if we supported arrays here as well I could just passes s
[03:54:19]  now the problem is this helper needs to be the giant helper that figures out how to do everything and this is the base case basically we de-op the most basic case in
[03:54:34]  the code it's not a big de-op because you could from a performance standpoint you can just have an early exit and be like if this is a string do the thing
[03:54:42]  but like it's the animated class or something and now if we went this direction we'd be merging class to class list we'd basically be making the code bigger and de
[03:54:57] -optimizing the most basic case which is unfortunate because if you add compiled syntax you better make it work runtime as well because not everyone is going to just inline the
[03:55:11]  object on you like if you if you support you know you know this syntax you know class you know whatever true you better make sure that not only this works but this works
[03:55:35]  you you can choose not to it not to be optimal or you can decide how much work you want to do there to optimize like you can tell here I can do more
[03:55:45]  optimizations with solid if I want to I think this is evaluable to the point that we could actually have this as class in here I haven't done that not a big
[03:55:54]  deal but I'm saying is if you do stuff in your compiler you better make sure that works at run time thank you well but the class list is a problem I
[03:56:31]  do need to solve this because class list and class having two ways to set classes is like this dueling thing where they can override each other and that's not acceptable so
[03:56:41]  this has to be addressed in solid 2.0 something has to change here we either have to depower class list and tell people to use stuff like the class libraries or we
[03:56:52]  have to merge them and do off the base case class and having both is not good this is one of my mistakes in designing this and the biggest reason is I had a way
[03:57:07]  out right before 1.0 I was like what if we could just do this so force class list to only work if if if someone used like a class directive because then
[03:57:22]  class could stay the same and this is basically saying hey you know this is like it's essentially saying hey you have to use the syntax so you're forcing people to in
[03:57:40] line the object if you want to use class list you have to inline the object the problem is because of what I showed you before with the inlining thing it has to
[03:57:49]  work both ways this means it doesn't have to work both ways because there's like no way for people to do this otherwise right they can't pass an object through like
[03:58:00]  this is very clear syntax to force the issue the problem with this is this part isn't dynamic that something can't be dynamic and something that's really really important about class list
[03:58:12]  here is how many use CSS modules right you need to be able to do stuff like styles dot my class you need to be able to do stuff like this and class list
[03:58:28]  will let you put dynamic stuff in here okay so okay that's enough on this I think we've covered the special properties this is the place where I feel like if we
[03:58:58]  were trying to standardize is the sketchiest everything up to I know the ternarys are weird and stuff but I think I could write a spec in such a
[03:59:07]  way that we could take solid and support it run time can be less performant than the compile time thing but you have to support both so it's kind of like an
[03:59:40]  interesting tension the only thing left that I want to cover before we do this week in JavaScript is I want to talk about SSR because as you can imagine SSR is different
[03:59:54]  than the other ones SSR is like completely different because there's no reactivity the funny thing is we were able to write the compiler in such a way that if I
[04:00:19]  go into DOM expressions and the component part works the same it's just the native elements instead of compiling it into create element calls we compile it almost into a tag template
[04:00:31]  literal aren't performant so instead we deconstruct a tag template literal essentially so if you look here this template is the array like a tag template literal like when you actually define
[04:00:48]  one and then each of these are the holes that go in that array the thing is when we're doing DOM rendering and creating the template for the client side rendering it's
[04:00:58]  very similar to this process of collecting the strings so there's a lot of commonality on the template collecting piece and the components work the same the fragments work the same the only
[04:01:09]  place that gets interesting is is how to handle expressions because we could wrap everything in functions but we don't need to because they're not reactive all the time there are places
[04:01:25]  where we do and components still do because we need the children to execute after the parents so to speak so from that perspective everything from the component side down works the same it
[04:01:42] 's just the native elements work differently and instead of having a bunch of insert expressions and helpers we're filling the holes in this string we generate our hydration ID and then it
[04:01:54] 's funny we see some escaping and this is the key thing you have to understand about SSR any value that the end user can supply in SSR could cause like an
[04:02:07]  attack potentially so we have to escape every possible value coming through and this is an expensive process it's the thing that kills benchmarks someone found a way to get our escaping logic several
[04:02:21]  times faster a few years ago and that was the boost that got solid to be the fastest SSR framework and just this past year Svelte added the same improvement to their
[04:02:34]  stuff basically they saw that PR come in and they're like we need this and sure enough a couple years later they added it so this is like it's funny on the
[04:02:47]  DOM there's so much nuance and like the right way to don't read these properties and traverse these properties because they're cheaper and like do this work when and insert these
[04:03:02]  this way and there's all these secrets like update the data on a text node it's faster than creating a text node or this like there's a whole bunch of little tricks
[04:03:11]  the SSR with strings is just pure brute force like like string concat and like micro benchmarking like there's no nuance here it's just like how fast can I
[04:03:26]  bash a bunch of strings together and escaping is really expensive so we try to do some smart stuff here but it's definitely a tricky scenario let me see if I can get
[04:03:41]  rid of this because like if I turn this into something yeah what's what's going on here if you notice the class list here is actually getting flattened you don't see
[04:03:55]  in the class list helper we're actually concatting the string and if I add like a class here as well you'll see we're actually instead of using class list helper
[04:04:05]  we're actually converting this like flattening the string out so we got D space whatever this thing is from class list essentially a bunch of those helpers go away because they
[04:04:20]  don't have the need to set and unset and it's all about each case having the optimal string output this is definitely the most custom compiler of the bunch by far
[04:04:33]  so like I mean I could pull up the code for a minute it's it's actually surprisingly not terribly different that's the beautiful thing about like the structure is a little bit
[04:04:54]  different you have a declaration your expression your dynamics we construct the template there are less helper functions but essentially it is a very similar where is it normalized attributes transform attributes it's
[04:05:16]  the same kind of thing we go through each attribute we find the special cases the things that never run on the server like click handlers setting properties can't do that because
[04:05:31]  we're only outputting attributes to html use ref these all just get skipped and then you know there's a little bit of special thing about going like if someone does
[04:05:44]  inner html you have to like mark it that it doesn't get escaped you know the trick to the escaping thing I should talk about a little bit more because there's
[04:05:53]  a trick to escaping let me explain the problem this is something that most frameworks don't have to face but we have to unfortunately with solid the problem is yeah I'm going
[04:06:04]  to get rid of classless for now I'm just going to pick some arbitrary thing like title equals la la la right the problem is this whatever this is actually I'm going
[04:06:16]  to use I'm going to use insertion it's even better because yeah I'm going to the problem is JSX lets you do this most templating frameworks don't
[04:06:27]  let you just insert arbitrary stuff you know like their templates are congruent you can't just like go up here and go like something equals another div right and the problem is this
[04:06:43]  guy here has no clue what he's getting the problem and challenge is you only want to escape things once if you escape things multiple times then you're going to like double
[04:07:01]  escape it and then you're screwed you can only escape things once if you want them to work properly because then they only get unescaped once so I don't know
[04:07:13]  what the something is I have to escape it but I don't want to escape valid HTML so our templates can't actually return strings like the JSX can't return just
[04:07:26]  a string because you then escape that string and then you'd be escaping the div and you don't want it to escape the div right like see the JSX is special because
[04:07:42]  you can literally just like mix and match it however you want and it's the return value of it like that matters so we did something really simple I mean I can't
[04:07:56]  console log here because we're not running SSR here but we return an object that looks like this T for template and then here's your string and now we're okay
[04:08:19]  I mean I probably should use a special symbol that you mention it probably should use a special symbol yeah I think I think we need to use a special symbol it's probably
[04:08:36]  a good reason to use a special symbol that's actually a really good point but essentially this is the extra overhead we have on SSR it wasn't enough to make our SS
[04:08:52] R slower and it's still way cheaper than a VDOM because the way we collapse it well because we an object like an object here isn't serializable if someone
[04:09:07]  went div like attributes don't take objects children don't take objects is is like so like if someone passes an object at some point down in the tree it actually has to
[04:09:27]  be like inserted as a string so we we actually only need to worry about escaping the final string or the final like primitive value that gets converted so it's if by giving wrapping
[04:09:42]  an extra object it it basically just skips escaping and goes goes straight to to doing to doing it which is why we probably need the symbol now that I'm talking it
[04:09:52]  out loud but yeah this this is basically like you wouldn't need this but it's because JSX can be created out of order and it can be inserted into itself S
[04:10:19] velte and like a lot of frameworks don't have this problem view like they don't have to worry about this problem so this was definitely like a little bit of extra fun
[04:10:30]  but in the end we got there other than that even though this is like the weirdest compilation it's actually kind of simple because it's it just it's just it's
[04:10:40]  a you know it's just a number of these type things as I mentioned everything else ends up kind of working relatively the same as before like I don't know let's put
[04:10:52]  this here look look now now it's an array like it it it's it's funny how with the right structure in the code you can have like repeatable patterns even
[04:11:13]  if the way the stuff gets printed becomes different because the way we print is completely different for different situations and I've been doing a lot of work recently I don't know
[04:11:27]  if it's actually in the latest playground to reduce some of that printing for example I realized if like check this one out I think this will work if let's put this inside
[04:11:42]  a div let's make it a different element I don't need this I'm hoping this is the latest so I can show off something here yeah yeah okay check stuff
[04:12:18]  this is just a silly example of a type of optimization we can do here classically if you're inserting some HTML like if the template's in line and we can see
[04:12:30]  it's in line I shouldn't need to wrap it in the extra object right and I shouldn't need to escape it because you know that this is valid so one of the
[04:12:38]  more recent changes in solid is if you're if you have some kind of conditional logic and and it's like you're inserting a template in line inside we can see that
[04:12:48]  and in this case it actually flattens it out it actually does the addition of the strings right in line without the extra SSR call and without the extra escaping right because
[04:13:03]  you don't need to escape this because you can see it I mean that's the that's the thing you could go down rabbit holes of optimization with with this kind of stuff
[04:13:12]  once you once you realize um like the patterns here escaping escaping is the name of the key so you see the tension here between what we can do with a compiler versus like
[04:13:30]  generalizing the approach to work and when you start getting as I said solid is very much on that line the SSR might tip us on to the other side of the
[04:13:40]  line client side stuff is fairly straightforward but this is it's an interesting range of things because I mean I got right into the JSX but the thing is if you're writing
[04:13:51]  this code right like if this is your let's pretend this is your code function app even when you get in the dregs of of our stuff right and you're like
[04:14:06]  okay const d set d equals create signal SSR is a little bit of a departure I have to admit maybe this one's like a little bit too far but at least
[04:14:22]  for me it's still very easy to see what we compile to like you see like oh it's some strings that are getting added together client side you clone this template and then
[04:14:35]  you do a reactive statement here so I mean it's just I'm used to this so you know everyone has their own comfort level like where I was starting before where like
[04:14:52]  a hello world in Svelte we have we actually have to do something on here like on click equals because this isn't really the hello world you need to actually mut
[04:15:05] ate some stuff if you want to see the full case here we go like like you can still see and make sense of what's happening here to certain degree it's just
[04:15:29]  it's just a very like there's different levels of comfort in how far you get away from what you wrote funny enough Sol's SSR and Svelte SSR
[04:15:38]  look very similar they actually went with the template literals but you can you can actually see this should be very similar to what we were just looking at but you can you
[04:15:54]  can see the on the dom side and let's make it hydratable it's it's it's it's a little bit more involved because the difference of not having the
[04:16:11]  reactive system and the how how much compilation this is a balance game right anyway yeah tag template literals are template literals are fine just using template literals are fine but
[04:16:28]  when you do like like like tag template literals there's an overhead and if you're doing client side rendering like who cares like like it's not a big deal but I
[04:16:39] 'm doing like SSR benchmarking where like literally the speed of strings is what's killing you it was it was noticeable enough that I stopped outputting tag template literals
[04:16:48]  template literals and normal string concat is almost indistinguishable it's it's the it's the reason that we use tag template literals is because um our
[04:17:00]  SSR function actually like iterates and through the the data gets in and has to convert some of that into strings and stuff so um in a specialized way um because we
[04:17:15]  don't just return strings we have to like flatten out those templates like the the colon t objects we have to flatten them out somehow and and arrays and stuff like that and I
[04:17:26] 'm pretty sure Svelte's approach because they don't have to worry about that they just always return the strings and then it just concats directly so they don't need
[04:17:34]  they don't need uh like a tag template literal they can just get away with the template literal which in theory should make it possible to have faster SSR in my benchmarks
[04:17:44]  that is not the case but theoretically speaking I wrote an article about that where a place where I thought solid might be weak um I do think certain type of template languages do have
[04:17:54]  advantage on SSR rendering speeds um because of they can be more optimal the truth of the matter is we haven't seen them be more optimal but they could be because yeah
[04:18:08]  it like I know all the extra I have to do with solid if I was able to delete that um I could make solid stuff even faster so they definitely could be faster anyway
[04:18:21]  um do do do do um okay before we get in this week in JavaScript I want to do one more topic relating relating to uh to JSX um which is to talk
[04:18:38]  about the future and and and like because yeah I made I made the choice to go to JSX um here we are some people think that's you know questionable but I think
[04:18:53]  it's super powerful and yeah so there's a couple things that have been going on first of all people have been trying to get JSX into the browser I have not
[04:19:03]  been a fan of that even remotely I think it is a bad idea if you go back to my chart the benefit of JSX is that it lives in this zone if you
[04:19:13]  try to move JSX over here you just have a different syntax for tag template literals and I don't get to do half the stuff I want to do I had a
[04:19:21]  conversation with Andrea about this and and he very quickly realized like like even before like he got you know put off by like the way we handle like turneraries and all
[04:19:32]  that but even before that I could get the sense that like even if we we talked about everything we talked about today and got rid of a lot of the special stuff just the
[04:19:42]  way we wrap stuff and functions lazily and do all that stuff was enough that like it was too awkward for him to standardize on it and this has been my experience with
[04:19:51]  standards in general I've had like I'm just used to like people coming up with universal agnostic tools and they just don't work for us and that's fine
[04:20:00]  I just I I don't I think it's like if the browser gets that and that's how people want to do things that's okay like I'm still just going to
[04:20:12]  do stuff differently the only place it gets awkward is if there's this expectation now oh you support JSX that means it just works naturally in the browser and it's like no
[04:20:23]  like that's the change in definition that makes things difficult right like I didn't step on tag template literals like I because tag template literals were in the zone I
[04:20:34]  respected that zone and our tag template literal solution works at runtime you know doesn't need a compiler but if if people try and change the boundaries on this it's quite awkward from
[04:20:49]  my perspective this is the this is why JSX is so powerful specifically because it does not have defined runtime semantics and I'm pretty sure the people at Facebook when they
[04:20:59]  wrote this did not want it to be part of the browser spec ever and I'm full support of it not going there there's other things I'd love to see like react
[04:21:09] ivity perhaps get into the spec but JSX is just really too much of a good thing and serves too much of a powerful role here that quick picks up JSX any
[04:21:24]  new framework we can just come in and have a templating language for us and get rolling and the minute you bring that to the browser you restrict what we can do I
[04:21:35]  gotta not lie I'm a little bit critical on the Dino side of things because of this I love Dino but if people are going to pretend that JSX is what
[04:21:45]  TypeScript transforms it to then like that's not JSX that's Dino script or TypeScript you know so like I very much like JSX being exactly where it
[04:22:06]  is I'd love if the spec could move forward in the future right but I think the thing is like it is not it is an XML extension for JavaScript with no runtime sem
[04:22:20] antics that's what it is I start and end on the same point yeah I mean I'm not trying to spell specifically I don't know what it looks like but the
[04:22:36]  problem I'm hitting on the complexity thing in my head is if we want reactivity in the language it better not have dollar signs I'm guilty of this on the compiler side
[04:22:48]  our server functions the dollar signs and quick and we have to get rid of the dollar signs that's going to be we know we've succeeded when there aren't the dollar
[04:22:58]  signs the dollar signs are like this really obvious glowing thing in our face that we're dealing with the complexity and we do this on purpose so that people realize they're dealing with
[04:23:09]  the complexity we can't get rid of the dollar signs you could say just delete them no but we need them very invisible and confusing so when I say without the dollar signs
[04:23:26]  I mean the whole gambit yeah well I mean okay I don't know what that looks like it's not like they're going to give us runtime AST transformations right
[04:23:45]  like the platforms aren't going to support that like they're going to output like some kind of object form or some kind of function form like hyperscript or something like that
[04:23:57]  and for us neither of those work really because if it's already been converted into an object then everything's already been created too late and if it's function form you don't
[04:24:10]  want it running inside out so like yeah Dino can plug into SWC he can plug into Babel I was recently chatting with a guy kind of out of Theo's
[04:24:28]  community and he got solid SSR working with the Babel transform I believe in Dino so like full stack solid Dino he griped about it a little bit because he
[04:24:41]  didn't want to use Babel but like it is possible I just saying like the no build thing is kind of a myth I think it's a challenging thing for the
[04:24:58]  future because like it's funny Dominic Ganaway big fan Critter of Inferno he's been working on something that's like like I'd say like he says
[04:25:06]  it's a mix between react svelte and solid but I'd say it's like 80% solid 15% svelte 5% react and he went to the
[04:25:21]  browsers he went to the he went he tried to he was like we need reactivity in the language and he started playing or we need better JSX and he started pushing stuff
[04:25:30]  on Twitter if you've been following him and Brendan Ike himself said JavaScript is not a control flow language and like basically just straight up shut down the whole atomic getter
[04:25:41]  thing and it was like okay I mean he's not in charge anymore but I'm sure people behind it can carry his sentiment as well so I guess we'll have to see
[04:25:50]  so like even if we could find a way to not standardize the whole thing or something it's just I don't know I'm going to talk to some more standards
[04:26:03]  people I kind of kept away because I was disillusioned because like every time I tried to do something it was like oh yeah that's not something that we'd expect
[04:26:11]  people to do and I'm like okay well fine I'll go do this over here and it just it's been that over and over and over again it's like oh yeah
[04:26:19]  web components here's the universal oh yeah no for react because they're doing something with javascript that javascript probably wasn't made for like they're bringing their
[04:26:38]  functional stuff like all the way through and I'm bringing the reactive stuff all the way through so you know here we are hey how's it going Raiders where are we coming
[04:26:51]  from wow thank you CM Griffin thank you very much for dropping in we're just kind of getting to the end of stream JSX works it's a very technical topic and
[04:27:06]  we are getting ready to do this week in javascript where I talk about all the stuff that's been going on on twitter we're almost there I was just kind of
[04:27:16]  lamenting on attempts to getting JSX in the browser and just where that kind of sits I am not a big fan of that happening so I'm glad it kind of stuck
[04:27:30]  here but there's other places things I would like to see so like everyone has their own agenda so it's really hard to get standards so I respect that I get that
[04:27:38]  but in the meanwhile I can just kind of go okay let's not worry about that and just try and build crazy stuff yeah I mean yeah there's a lot of I
[04:27:57]  don't I don't want to call it like yeah it's tricky yeah I don't I don't know all right so yeah let's let's let's shift gears here
[04:28:10]  did that answer the thing for the future I think so I have this article that I haven't released yet all talking about why I don't think anyone I think no build
[04:28:21]  is a joke but I it comes down to like the fact that when we have these tools on our like we should think of it as a tool we can always get better performance
[04:28:33]  smaller bundle size better ergonomics more extensibility and like ultimately what we can do with the tooling versus without we can always do more so like I this is like a
[04:28:48]  no brainer like that ship has sailed but I understand why there's like a kind of regressionary pattern we want simplicity to get rid of the complexity I want that too
[04:28:56]  but it's not by denying what we already have we just need to shift the things around in a way where we can make sense of them again it's not about getting rid
[04:29:06]  of tooling that makes our life better it's about figuring out how we can apply it to the right places and bundle it in a way that it makes sense that's what it
[04:29:19] 's about maybe I'll release this article one day maybe not okay okay so I'm going to drop off my screen two seconds while I just get ready for this week in
[04:29:33]  javascript yeah let me close that down I hope you guys enjoyed the exploration on JSX I definitely did it's a lot of fun I hope this answers people's questions
[04:29:49]  this has been a topic that people have been asking for for oh ages sorry my computer is going to die if I don't plug in again it's always hard I roll
[04:30:00]  over my screen and sort of roll over my power cable and I have no room here because of this green screen that is acting up on me today but who cares let's see
[04:30:13]  here let's zoom in get my tabs all ready to go it's good because we had there was a few cool conversations this week from my perspective but I don't know
[04:30:30]  where does our week start oh yeah yeah yeah yeah yeah yeah there was there's there's there was a good there was a big release this week too yeah okay my week
[04:30:41]  started january 22nd i think from my perspective okay let's get this going everyone still alive i know this has been a long long stream um uh let's do this i
[04:31:03] 'm do this off screen now just in case i don't want to show people circles um i managed to edit that out of the old video but i feel very bad about
[04:31:12]  that um so yeah i think i think we're good to go i'm trying to think of where i want to start on this stuff do a little solid stuff do a little
[04:31:26]  bit of yeah okay okay let's do this um let's blow this up a little bit more okay cool all right everyone still with me drink a little water before we get
[04:31:47]  started yeah oh that's nice i've been talking so long you know all right let me get the banner up yeah all right yeah so everyone's doing good that's good
[04:32:15]  that's good let's let's swap modes to the last section of my stream today i want to welcome you to this week in javascript where we talk about basically everything
[04:32:24]  that i find on twitter in the week that's interesting to me i know anticlimactic okay let's let's get started um i'm gonna talk a little bit uh
[04:32:33]  about solid before we get into the deeper topics um we hit 25,000 stars on github this week which was pretty cool um definitely psyched about that it's been
[04:32:46]  a long time coming we've kept a pretty good pace since the 1.0 release but um it's always nice to hit another milestone it's it's it's been pretty
[04:32:55]  good um and okay yeah we're not going to touch that one yet let's let's keep on going um we also got a rave review from man kenny wheel
[04:33:08] er um honestly this is quite possibly the highest level of compliment i've ever seen about a javascript framework um if if you want to know how to compliment someone with their
[04:33:20]  on their javascript framework um this definitely ranks up there um honestly i don't know what to say this is i think i think the quote tweets say enough but um
[04:33:32]  no it's it's it's it's it's definitely a proud moment for me and the solid community um but uh yeah basically we're coming out of award season you
[04:33:57]  know in javascript and we had a good run this year i'm really stoked to see the excitement and stuff that's been coming around on solid um other than that
[04:34:06]  i want to point out we got another animation library auto animate um really cool simple library that came out this week do check it out um but that's that's most of what
[04:34:17]  i wanted to cover on the solid thing the other big news that we should all be talking about is astro 2.0 dropped this week and honestly i'm pretty excited
[04:34:29]  about this i i almost was like i should pull fred on we can do that i mean fred would love to come on the funniest thing is i dig into the really
[04:34:38]  techie technical topics and i think there's a couple in this release that would be really interesting to get into but um that's not what astro 2.0 release is
[04:34:48]  about astro 1.0 they released ssr and it was like a big deal and it changed the mechanical way you can approach astro this release is kind of
[04:34:58]  like a bunch of stuff that they had just made better this is this is a quality of life release they looked at what people were using understood their use cases and really listened so
[04:35:12]  i'm very stoked on this release from the from the fact of that in that like automatic type safety for markdown mdx and it plugs right into zod if you haven
[04:35:24] 't seen this like watch ben's video on it it is really cool if you're building this type of content sites which is what you probably are doing with astro this
[04:35:33]  is a killer feature these content collections it's i know other static generators have it but astro is kind of like bridging this gap between that world and like the next js
[04:35:45]  world even though you know you can't really compare the projects head to head and having this sort of feature in here is just the right mix of simplicity and power right
[04:36:03]  they they added a feature that's often requested we get this one on solid start too you know being able to actually opt into static rendering specific pages like right now astro has
[04:36:13]  like static mode ssr mode but now when you're in ssr mode you can go static render these specific pages i again this is a great feature i think it
[04:36:24] 's pretty much every framework needs to have this feature now this is definitely on my list of things to get into solid start but they this really ties together like unifies their
[04:36:35]  story here because i think one of the coolest use cases for astro now is like make that static content site like always been good at that but at the same time right alongside
[04:36:47]  it make that more dynamic experience i often talk about how astro might not be the best choice for your single page app you can build something on top and kind of do
[04:36:56]  it like it doesn't have the same levels of tools that you'd find like in a remix or spell kit because it's hard to do that when you're agnostic
[04:37:04]  but if that dynamic side of things isn't that much and you're using the same things and you're in the same zone like this just bridges the gap in a way
[04:37:16]  that really tells a compelling story so very stoked about that they added some better error overlays obviously it's not a feature I care that much about because I never write code with
[04:37:25]  errors my code is perfect dev server optimizations on HMR right and when your framework is server rendered generally like it's tricky because like now you're like what do you
[04:37:49]  do diff stuff from the server see if you upgrade to client rendering then for the most part client rendering can do the rest of the HMR for you like you only need to
[04:37:57]  worry about the server rendering initially but Astro's design means that they have to HMR in a different way so I'm glad this is the topic that I wanted to
[04:38:05]  talk to them about on a technical stance I think this would be really interesting to see how they did that beat 4.0 that's awesome this update's been nothing but headaches
[04:38:14]  for me so I'm glad to see they pull through I'm going to look at their PRs and issues to see how they solve a bunch of stuff so I'm
[04:38:21]  very stoked about this and then the Astro open roadmap they have a great governance model I think Astro is really cool in how open they are and now showing this is a
[04:38:35]  great way to get the community involved even further Astro is a great project it's one of my favorites it was my pick of the year for the JS survey I'm glad
[04:38:43]  to see that on my comment about errors I'm sorry I was flipping on Theo stream which had Fred there was a comment about framework authors never seeing their own errors because they
[04:38:57]  know how to not make those errors because they know how the code works so they don't spend as much time there and I think that statement is completely true I see most of
[04:39:08]  the errors when I sneak on and watch other people's streams so yeah that was the joke I was making in case you missed it okay so yeah Astro 2.0
[04:39:25]  release yeah as I said it wasn't quite the topic for the stream but if this is like I couldn't be more excited about this release it the release I was waiting for
[04:39:35]  for the last couple months knowing that it was coming I was like this was on my radar is like I want to celebrate in my own way it just yeah all right now
[04:39:53]  we get to get into some other more interesting areas yeah is that are we like just straight into these topics now yeah okay yeah let's just let's just dive in okay
[04:40:10]  one more short one before we dive in Damien who's on stream earlier oh no you're still here yeah yeah has created a very useful library for React developers trying to get
[04:40:25]  into solid unfortunately I missed it I wasn't able to cover this in my stream last week where I covered getting solid in React well Damien has brought hooks into solid for
[04:40:40]  better or for worse and he posted up this great example which some people are just like is that how you make a counter in solid that's insane and and the funniest thing is
[04:40:54]  I knew what like this is why I made this comment because the second I saw this I knew what he was doing this example is from one of my favorite articles of all
[04:41:04]  time in the React space which is Dan Abramoff wrote an article to show how to use hooks to make a counter and it's funny because yeah let's see Ryan Florence
[04:41:20]  yeah here it is we talked about this in the previous stream where like in order to make the use interval counter here you needed to basically use a ref to save the call
[04:41:31]  back and use multiple effects to do all this stuff and you know the punchline in solid it's like a two liner but what Damien did was literally copy that code drop
[04:41:45]  it into a create memo and ta-da working react counter yeah I mean clearly I'm pretty sure this is a joke we basically have zero use for hooks in solid if
[04:42:01]  anything like bringing this model in is like more costly and just more verbose but it was I at least found it funny maybe you will too this is something the solid community
[04:42:21]  likes to do they like to rewrite other frameworks mechanisms into solid or use compilers or do crazy technical stuff I kind of wish they just helped me with solid start but this
[04:42:36]  is funny too that's not a stab at Damien Damien's been doing the dev tools for solid and he's been doing a great job on those so I'm
[04:42:47]  glad to see him having fun on it okay so let's talk about this but to talk about this I actually have to talk about where this whole thing started let's go there
[04:43:09]  so we talked about this actually last week on stream and people have been talking about this for months now but it takes somebody like Theo to go open the issue on on reacts
[04:43:23]  github and that issue that he opened on the reacts github was create react app is not a great recommendation to be making especially for newer developers as an educator I
[04:43:35]  run to countless issues blah blah blah he basically says we need to change it right and I think he's completely right and I think most people think he's completely right we
[04:43:53] 've said over and over again even in his stream where he's talking about the pathline for new developers just get them started with VEAT but he didn't even go
[04:44:03]  as far as saying use VEAT here he just said like hey oh no he did the title says with VEAT okay so there we go so yes with V
[04:44:12] EAT which most people agree is pretty good advice I think there's some complicated issues here but I can't help but feel that this post which sparked a lot of conversations and
[04:44:31]  obviously like Devin comes out he's creator parcel he's like well why VEAT not parcel you know you know like it's more complicated than that and I think
[04:44:41]  the React team recognizes that too because if they choose whatever that new thing is they're probably displacing some part of the community or something like I appreciate React didn't play favorites
[04:44:52]  and at the same time there's all like if like what is it beta docs beta dot react js dot com because the problem Theo's having is if you go to
[04:45:03]  the doc like the main doc sites right now on React they send you right to CRA and you know it's it's his stream covers this portion of it better I want
[04:45:15]  to focus on the part that comes after this but where is it quick start no is it not here start a new React project oh no yeah create React app that's interesting oh
[04:45:33]  yeah yeah so yeah create React app is still like the even on the beta docs is still the main thing but in any case it's kind of a complicated issue and I
[04:45:52]  think this conversation came at a time that it sparked a similar conversation on the other side of things too because like Andrew Clark went and wrote this if you use React you should just
[04:46:09]  be using a React framework if your existing app doesn't use a framework you should incrementally migrate to one if you're creating a new React project you should use a framework
[04:46:15]  from the beginning blah blah blah React framework choice should have built-in solutions blah blah blah next remix expo blah blah blah blah blah blah this is like there's some great
[04:46:36]  questions but if you don't need SSR same answer basically basically this is a pretty controversial statement to make for a lot of people because React went out the door originally saying
[04:46:51]  you don't need a framework we're just a library that was like the positioning that happened and you might be like I can't help that these conversations aren't even though they
[04:47:05] 're distinct conversations they get kind of piled in because people kind of go well if you're not going to use CRA should we just tell them all to use next JS
[04:47:12]  and there is potential that because I mean people kind of come in here and they're like this guy he goes Daniel he goes do you have any guidance or success stories how to
[04:47:25]  incrementally migrate existing apps to framework and then Andrew just straight links to the next docs right like like this this is this is like this is why this kind of conversation is
[04:47:51]  going on because it's very interesting with all the new stuff especially the server components and SSR there's a lot of reason why you'd want it to have a framework
[04:48:00]  but there's like there's this kind of consciousness for a while that like what made react so good was that it wasn't a framework from that definition what's a framework and
[04:48:12]  what's a library is a tricky one here but it's kind of interesting I actually went through most of the quote tweets at some point because I wanted there's a lot
[04:48:34]  there's actually a lot of support initially on a lot of the quote tweets saying like yes absolutely yes next is awesome yes and I wasn't sure if that was actually going
[04:48:45]  to be the response here at first because I think but I've seen this has progressed over time I reckon this section the default shouldn't be Vite but until React docs
[04:48:57]  are updated no longer mentioned React Yeah I think that this is where the tension is if they kind of also don't necessarily want to recommend Vite because they want to recommend like
[04:49:11]  a next or remix because like people have more success maybe that first step of just having a template like de-getting a template or exactly isn't the experience they want
[04:49:22]  people for entering React now Yes and this term I spent like four hours talking to dev recently I think I mentioned about this just going back and forth on what it means and it
[04:49:39] 's funny because I never I feel like our render UI libraries like React and Solid are basically frameworks already anyway so it's like a hard distinction but because most people say that React
[04:49:50]  is a library and next is a framework I'm just going to keep on those lines I'm going to say there is an arbitrary line semi arbitrary where there's some philosophical
[04:50:02]  line being drawn and whether the terms mean anything it's based on this kind of feeling of where those lines sit we just need to differentiate we don't have names for these things
[04:50:13]  they should recommend Astro yeah I mean that's again a different way of building React but I mean they could actually you know if they are serious about this approach they should
[04:50:28]  recommend Astro right Astro gives you all the tools you need to build with React in a specific way that involves islands yeah they should recommend Astro that's interesting I
[04:50:40]  like that flowchart it's like I appreciate that Theo made his flowchart but this kind of thing there's no Selma tried to do this from Netflix or sorry
[04:50:59]  Netlify and she just gave a talk that I was participating in as well at the conference the other day where she's like we need more JavaScript framers she tried
[04:51:08]  to make the mapping and she's like this is just a stupid exercise like it just doesn't it doesn't it doesn't really work like you there was lots of choices the
[04:51:23]  reason for those choices involve many factors that I think a single decision tree is not going to cover you're probably safest to pick something with reasonable defaults and go with it I
[04:51:33]  know I'm not making my case very strong here because I'm just saying go with next.js but for the most part unless you have specific reasons you probably should go
[04:51:41]  on a prescribed path for the most part for a lot of things I just got to tell you I never liked CRA in the first place I never liked next when I saw it
[04:51:51]  I actually just have this predisposition to hating JavaScript frameworks like the framework ones I love libraries you see tell me I glow when I talk about React or Svelte or
[04:52:02]  whatever but then the opinionated framework comes along and I'm just like so like it sounds like I'm contradicting the advice there I think V is a great choice because
[04:52:14]  from that layer up build your thing but it depends on what you're doing like the tricky part and this is what Theo said that I didn't realize he said Twitch was
[04:52:24]  built on CRA like actual startups are picking up these starter templates and building their company around it that that was scary I did not realize that it makes sense but I didn't realize
[04:52:34]  that I when we built our React app at my last startup I built all the custom web pack configs myself it took a while but to actually settle it down and get
[04:52:50]  everything working took a month and a half not steady work but we had to keep on tweaking and getting it there and getting the right pieces and doing all that and then I
[04:52:59]  never felt like I had to eject this later or have to deal with that crap but modern tools today don't have to worry about that and this is part of the they
[04:53:15]  want ease onboarding like everything like they've already soaked up all they can in that range now they're getting the late adopters they're taking over angular like they're just
[04:53:26]  it's okay that there's different sides to this thing right over time when you get to a certain level adoption it's kind of inevitable I said survive long enough the hero
[04:53:36]  becomes a villain and I just wanted to add that I don't think frameworks are the only place that have evolved a lot in the last couple years I think beat has shown that
[04:53:46]  the capability of build tools has jumped leaps and bounds as well using beat is so much better than using CRA and in this conversation beat is the webpack and CRA is
[04:54:01]  the next both sides have improved drastically which is really where this conversation came in of course a lot of the responses to this were more critical I'm trying to see if I
[04:54:22]  can find the one I wanted to find here maybe it was response to this one because our buddy Dan Abramoff basically got pulled into this conversation this is stretching okay what Andrew
[04:54:43]  means to say it's hard to hand roll something as efficient as frameworks have evolved to but if you don't you will be equally efficient to hand rolling look like in 2015
[04:54:49]  it's not like it got worse with time no and the reason that I kind of challenged this this kind of thinking is because I actually think the gap between VEAT and
[04:55:09]  Next is smaller now than the gap between custom webpack and CRA I actually think it hasn't gone further away I think it's actually gone closer which is a different take
[04:55:22]  the floor what you can do basically with no config something like VEAT is much higher so much for we're seeing a commoditization of frameworks like everyone can build a
[04:55:29]  framework it's kind of like what web components did briefly in 2010 where everyone was like yeah I can make a UI render library I've got web components and now I'll
[04:55:38]  just like do some rendering and I can make my own JavaScript framework or whatever VEAT's doing that with meta frameworks like everyone can build their own meta framework so like I
[04:55:49] 'm if I was a company you know I might actually consider building my stuff on VEAT like that I mean things like SvelteKit SolidStart Quick Marco have all
[04:56:03]  made that bet with their networks Nuxt I think too basically everybody but React and Angular and I know analog is getting built on VEAT but everyone basically but the React
[04:56:15]  community is completely on VEAT so I don't know if there's political things here but like I think it can't be understated I understand that VEAT
[04:56:27]  is the CRA in this comparison but VEAT or not CRA VEAT or I understand that VEAT is the custom config in this consideration it's not even
[04:56:41]  CRA but it has come miles from what we were doing hand wrapping configs the thing is some of this was on them some of this was on VEAT maturing
[04:56:58]  the thing is VEAT shown it's possible as soon as these things stabilize in VEAT and a few have done it everyone else gets there quicker yeah I've
[04:57:20]  heard of Turbo Pack I talked to Jared Palmer maybe I mean Turbo Pack shows promise the thing is VEAT is so not opinionated about that stuff it's not about
[04:57:31]  fighting on technology VEAT will adopt what technology needs VEAT is all about the API interface they've almost managed to somehow create a standard by getting everyone to adopt their
[04:57:40]  thing that if Turbo Pack wants to succeed it would be by copying VEAT's API and offering better performance maybe but then couldn't you just make VEAT better in
[04:57:51]  that world it's an interesting place VEAT has won so hard the last couple years that like you saw the JS survey it's like the number one thing for the
[04:58:01]  last couple years in every category it's very hard to picture like React's a big community so maybe and Vercel's a big pusher so possibly but from a pure
[04:58:12]  like so I can't count that out but like VEAT has sort of taken over everywhere else so yeah I mean we'll see how that whole you know side of
[04:58:40]  things continues to evolve on that side but like what I'm I'm just like I think ultimately yeah he's saying just because you build a framework on VEAT doesn
[04:59:02] 't make it a framework it just makes it like a niche framework right but like that that that's fine that was good enough for react back in the day you know so
[04:59:17]  I think I think it's I honestly think this whole thing is a maturity thing on the react side I think you can play both sides of this I don't think like this
[04:59:27]  is just a strictly better kind of scenario I think that this is just like where react is in its life cycle and that's perfectly fine I like that they're owning it
[04:59:37]  react 18 came out people kind of like what feature did I get is it just strict mode and double console log now you you're like this is what I got react is the
[04:59:46]  library for building frameworks of the future or whatever like whatever angle thing that's what you get so I I'm all for this right like I like people like to like draw
[04:59:57]  lines between different things like I don't really care about this anymore on that side I think it's exciting new journey direction with react I hope they start hyping remix they need
[05:00:10]  to make sure things don't fracture or fragment I hope they start hyping astro maybe even I think that's great like different frameworks and real app like with with react
[05:00:26]  it's cool that they have so many choices in there so I think this is good and like it's tricky stuff like server components really does display certain libraries there is an ecosystem
[05:00:36]  cost here and I think there's going to be some pushback from those libraries but they were the same libraries that were pushing back against hooks to a certain degree because they
[05:00:45]  were like you know you're telling us that react is taking over the state management to a certain degree you know and they're the most vocal against use effect you know like this
[05:00:58]  is all part of the cycle and this cycle I think is becoming more clear to others Dax made this great post that I think kind of captures it let's me catch up
[05:01:09]  front of Twitter disrupt technology emerges react messy ecosystem emerges best of it gets bundled next JS bundled thing is too rigid to keep up the times it's unbudd
[05:01:16] led next disruptive phase solid JS cycle is right like this this is basically like my perspective on this I agree with this I don't know whether solid or whoever's in here but
[05:01:33]  as being solid and I'm here when I saw this stuff happening I'm just I'm like cracking the champagne I'm like I'm not going to fight anyone with this
[05:01:40]  good for you own it and that's their focus and they're just opening up that space if you want to build without a framework it's funny people go isn't solid start
[05:01:56]  a framework well you should watch my most recent talk I was at a free conference on Thursday I'm also giving again Tuesday morning talking about solid start and about how it is
[05:02:09]  a very strange type of framework in that it's super modular that's what I believe in I don't know it's hard to predict the future on this side of things you
[05:02:20]  never know what disruptive technology will catch but this is just all like if you're looking for this pattern each of these stages can last different lengths you know things are looking up
[05:02:34]  I was working on that presentation and I realized that I've literally used this slide in every single talk I've done well the thing is T3 still has all the stuff
[05:02:56]  on Next I'm talking about modular lower than T3 because T3 is adding a more opinionated layer on Next and I think that's important I'm talking about being even
[05:03:07]  less opinionated about what Next delivers like including even less stuff like taking it at a lower level but yeah I mean and one way to do that is focusing on primitives
[05:03:21]  and I said I just keep the slide just keeps on coming Werner Vogels from Amazon like nailed it I just every time I get here I want to shout this one right
[05:03:33]  so yeah I've definitely been playing into this dialogue a little bit it's it's good right and I think this has pushed a lot of other conversations like this one here
[05:03:49]  Jamie Kyle you know famously you know one of the critters of Babel like he's like he's saying how JS firmers need to separate themselves from the bundlers it
[05:04:00] 's time to move on from the webpack days every firmer could easily be making use generic primitives and the thing is he might be just like speaking kind of from
[05:04:08]  a react scope or whatever but like VEAT has kind of and because VEAT was based on a standard but on roll-up like came like you know the standard
[05:04:17]  plugin architecture like this is already happening maybe maybe just not in react land you know and like I think it's hard to get completely there because what we've seen on the
[05:04:29]  framework side is actually kind of the opposite frameworks that have to deal with client server bundling and HMR stuff like Astro stuff like quick stuff like Marco have really been trying
[05:04:42]  to figure out how to make the bundlers work to them so much the point the I'll tell you a little story about Marco which I mentioned here is that they had
[05:04:48]  their own bundler and then we're like oh you can talk about standardizing on those primitives but funny thing is all the frameworks that I've just mentioned all work
[05:05:20]  on VEAT so it's not perfect but VEAT is doing something right right so I guess React server components is the exception but yeah I think this is a good
[05:05:35]  conversation I think it's kind of already happening though and I'm hoping maybe we get real standards out of it I it's tricky though because right now the stuff that is
[05:05:45]  happening in marco 6 or quick is really pushing the boundaries on what we think about bundling and frameworks so it's hard to if you jump on primitive too soon and try
[05:05:54]  and say this is the story we'll be chasing it forever with missed opportunities yeah like so is this a political thing right because view is like thing like is that their concern
[05:06:14]  I don't know I beat is just good I mean from the end user perspective I think it's a little bit trickier when you're where I'm sitting but it is
[05:06:26]  just good and yeah I mean this topic probably could just go on for quite some time but it there is there is this like there is this tricky balance of things it's
[05:06:49]  cool that we're seeing we're seeing right now this crazy bundling of monolithic approaches and I think it's good because it coincides with the move back to the server
[05:06:58]  you gotta understand single page apps grew at the time that microservices were getting big like the REST API stateless stuff and spas like the things go hand in hand now
[05:07:07]  we're seeing like this move back to the server we're seeing more monolithic stuff and it's interesting because someone keeps on asking in chat they're like hey what do
[05:07:14]  you think about mobile and that and we're seeing that getting pulled in to these things too like all in under this one monolith because the thing is for the longest time
[05:07:20]  you spend a lot of time crafting the perfect API that work for your web services and mobile and that the API service was part of the thing you're starting a startup starting a
[05:07:29]  company you have the web thing maybe next and then you create the API server to power your mobile app that you you know create React Native or whatever and like now we're like
[05:07:41]  okay well we want to bundle this all up you know it's interesting to my understanding React's working with stuff like server components on mobile so like it's like it's
[05:07:54]  interesting to see this kind of all merge together at one point we thought we would be doing PWAs that doesn't seem to be so much the case so I think that this
[05:08:05]  continues to be part of the conversation and stuff and a lot of times people come around and they're like oh Ryan what are you doing on mobile there I would love someone to
[05:08:12]  you know work on stuff on mobile the thing is I got to be practical here there's nothing you've seen from the JSX compilation mobile like it's totally doable the
[05:08:21]  problem is something like React native is like it's like a I'd say it's like a three and a half four year project with with like a team of maybe I want
[05:08:39]  to say about 15 developers I just don't have those kind of resources like realistically like maybe like there's things that meet us halfway things like native script like other projects to
[05:08:57]  kind of make this more thing but like someone going creating React native today and be like oh where's your react like that's crazy who's someone has to invest in that
[05:09:05]  you know like I'd love to see it but like there's no way I could at all responsibly consider doing that where where Solid's at with what like our open source
[05:09:18]  community do if someone wants to start that initiative within Solid we'll get the full support and see if they can build up those people in that interest completely on it but like realistically
[05:09:25]  like yeah I think yeah I mean I don't know if native scripts good everyone tells me react native is like way better so like the problem is react native completely dominates
[05:09:42]  it and no one's going to recreate that realistically it has Microsoft engineers helping in with their own versions and like like it is huge yeah if someone wants to fund that but I
[05:09:58]  think that's yeah you know what am I doing here why am I why my notifications um okay so what I got I got I got one what I got here yeah yeah
[05:10:20]  I got one more topic here I wanted to talk about JavaScript churn because it's a good time people keep on talking about this stuff and I saw someone I saw someone
[05:10:40]  write a comment I mean who cares about a random comment but they said something along the lines of like they should put svelte and solid and quick in a separate category
[05:10:52]  because any JavaScript framework that hasn't been around for more than a couple years shouldn't be part of the survey because it just messes with results and it doesn't surprise me
[05:11:03]  because no one wants to talk about the front end results anymore last year it was kind of like oh yeah the new framework and then like after a couple years of solid and s
[05:11:16] velte and you next more quick and all like being at the top of the chart and we just increasingly see this push down people are just like I can't move to
[05:11:25]  them this is just like they don't want to talk about it because it's almost depressing these stats must be garbage you know what I mean it just gets into this place
[05:11:34]  and people kind of get defensive about it and I was just like I mean I keep hearing about this JavaScript framework churn you know like you use a framework and then it's
[05:11:49]  no longer good and you got to move to the next one and I was just like seriously when was the last time you picked up a JavaScript framework you know it's your
[05:11:56]  job you know something not not something you just like hobby looked at one week or whatever but actually did something built something with it and then and then it was like yeah you know
[05:12:06]  what this is so outdated and we can't it's unredeemable we need to switch to it like don't the thing is software cycles work pretty long anyways so
[05:12:15]  it usually isn't going to happen in the first five to seven years anyways but like the people responded it was all like angular JS and they're like yeah back in 2015
[05:12:32]  I switched from angular to react or something that was like one person mentioned something about view out of that and maybe I don't have that many view people like you know responding but
[05:12:44]  like and view is not even dead but I can get like the view 2 view 3 migration might have been kind of painful but this perceived churning of JavaScript frameworks has not
[05:13:05]  been the case for like a decade and I just wanted to point that out to everyone again because you know obviously as a newcomer I'm going to point that out because it
[05:13:15] 's like React has been around for a decade Svelte has been around for seven years in November Solid turns five in two months of open source not five from when I
[05:13:28]  started developing it which is like seven years ago no like five years open sourced at the end of April like to even get to the point of being in a conversation you have
[05:13:40]  to go through years of development and usage and all this stuff it's it's it's kind of funny like how long it takes for like saying to die or what not
[05:13:58]  it was interesting because I thought maybe some people would try to argue it and a few people did but the people did they had nothing and like most people are just like huh
[05:14:07]  yeah huh but like when you professionally framework doesn't have churn but ecosystem definitely unstable for a while every company has a different flavor of react bundle yeah yeah so that's what
[05:14:25]  that's the other thing it was AngularJS or people talking about the different versions of react they had but so that's within the framework itself though so what I'm
[05:14:35]  getting at is like even if you pick the right bet long term you're still going to hit churn like I picked react well guess what I was on react 2 I'm
[05:14:47]  on react 3 I know that's not the versioning but effectively this happens to everyone this is just it's such like there's certain things in software which are guarantees do
[05:15:04]  you know what I mean like they're just guarantees you can't avoid them and pretending like you can is just like setting yourself up poorly because you're like mismatching expectations you
[05:15:20]  choose the most popular solution there's still going to be internal churn with inside that to varying degrees you choose something else like who knows like it's it's it is
[05:15:33]  it is interesting to me that like it's kind of like a similar conversation that came up in this thread that like web components are future proofing and it's like yes the
[05:15:47]  interface is future proof because it's standardized but you still write that code in a framework probably like you still use lit or polymer and yes you can interop them but you
[05:15:57]  really want polymer and lit on your same pages like you're talking about maybe a migration story you're not talking about the fact that it did actually one is actually really no longer
[05:16:11]  thing in fact polymer might be the latest churn story date wise you know it wasn't as popular but like like polymer is dead and lit kind of took its place like
[05:16:24]  that happens in web component world too like there's just things that are fundamental to the nature of software development is the best way I can put it that like you just gotta like
[05:16:37]  look at things based on qualities or properties how easy is this to replace how modular is this what impact does have on the rest of my system it's not it's not
[05:16:45]  like I chose this one solution now I'm good and the higher in the stack yeah this is a good point the more churn yeah so you're getting there like this is
[05:16:57]  why I was talking about this because the higher in the stack and the more opinionated I think stuff like NextJS are way churnier than say React itself it's
[05:17:10]  just like but the problem is when you have that much investment it's hard to get off of it so this is why it gets more painful in time it's actually kind
[05:17:23]  of insane how next is hugely high satisfaction consistently year over year so I'm very impressed with that because generally the way this goes is the bigger heavier thing is the thing that gets
[05:17:40]  more dissatisfaction over time because it can't keep up yeah like yeah this goes to me on software fundamental entropy yeah well here's the thing I've been wondering about
[05:17:59]  this though like what stops you from booting up an old project I guess is it like the interface points have changed or something because like the web itself is mostly backwards compatible
[05:18:11]  my jquery code from 2008 still works like did you like not package lock it like this is something I'm wondering about because that discussion did come in a bit here too
[05:18:26]  me too yes this is this is about how you approach your whole project modularly and look at pieces by pieces and sometimes that involves going like okay the over architecting thing
[05:18:52]  is this framework or this approach and we're going to be stuck with it and so be it so we'll pick pretty well and just live with it you know it's
[05:19:01]  just that's the reality that's why you don't see this this this churn thing I guess the only thing you can complain about is that people are always innovating and
[05:19:11]  that seems like a silly thing to complain about probably probably known mantra resolution yeah probably yeah yeah yeah I mean so I don't know I just wanted to throw this out
[05:19:46]  here because it's like yeah you know I I think I think we're at a time where you know some things are shifting around and it's and the the writing's
[05:20:00]  on the wall there so it's it's exciting time period you know we have innovation pushing the boundaries on one side we have the big guy kind of growing up and stepping out
[05:20:10]  of the kiddie pool and being like we're you know we're we're big you know and like like not much actually changes here it sounds like everyone picked react about
[05:20:27]  10 years and they're still using react so you know good on them like maybe this is self-fulfilling destiny someone said that I had that the problem with this is
[05:20:37]  that it has survivor bias right but the thing is like even if it has survivor bias I mean there hasn't actually been that many players like like that actually got past the
[05:20:57]  first step right people people aren't talking about this churn when they're looking at the latest frameworks that submit to the JS framework benchmark you know that happens like once a month
[05:21:09]  there's a new framework probably more like twice a month they're using it to justify and not picking up something that's felt and I think that's silly right like it
[05:21:20] 's fine it's a legit reason you can say that's your reason but it's like it's pretty weak I think it's just like it's a good reason to add
[05:21:31]  to the list when you're like want to just reassure like every other reason you have like there's plenty of good reasons to pick certain choices over others job market ecosystem considerations
[05:21:42]  it's just like yeah anyways I think I said my piece on this one people turn into a crazy amount of improvements showing up every other day and other reasons don't have
[05:22:03]  it yeah are we just moving so fast there's so many people focusing on the problems here that we're constantly evolving at a rate that's just uncomfortable yeah how much did
[05:22:22]  the web dev feel growing in the past five years that's a good question I'm not I'm not sure I it will always feel that way to people who have less experience
[05:22:35]  from the perspective that like if react was the only thing they ever knew and suddenly now there's like all this other stuff coming in the conversation but so they never saw the
[05:22:47]  2010s to 12s and saw like how there was like tons of frameworks before react maybe I don't know I think they'd also be the most excited to see that change
[05:22:56]  depending on who they are so yeah oh yeah yeah everything is taking leaps and strides yeah beat versus gulp there you go or grunt do you remember grunt
[05:23:14]  even before gulp I still like ember good for you I ember was I was I'm a place in my heart for ember I used ember a lot
[05:23:28]  between 2013 and 2015 grunt was the boss and bower yeah ember data I remember that that was big they were they weren't just giving us a front-end
[05:23:46]  framework they're giving us a structure for for how we handle data loading and it just happened to work perfectly with your rails back end yeah this is the fun part I get all
[05:23:57]  the old old guard on stream all just going tell it telling about all the crazy technology they used before the modern era like there was just so much stuff like you have no idea
[05:24:08]  it's so weird how much potential and how much innovation is going on and how squashed it's been compared to like like the the ecosystem there's so much the ecosystem
[05:24:19]  needed to stabilize and needed to like you know fix on a few solutions and get productive but stuff just continues to move forward I think we're at like a like a pretty reasonable
[05:24:32]  balance now so yeah I mean yeah I mean we just need the architect for change you know and that's easier said than done I think there's a lot of philosophies
[05:24:56]  behind that Theo talks about that a lot on the stream too you know he evaluates things on and this is much more important when you're in the early stages of the
[05:25:03]  startup but you tend to evaluate things on how easy you can rip them out to replace them that's actually a decent metric that was definitely what I was thinking the whole time that
[05:25:12]  I was working at startups between 2012 and 2018 it was like definitely or 2020 rather I was definitely like thinking through that kind of logic anyway I think we're going to wrap up
[05:25:26]  pretty soon here I think that's pretty much this week in JavaScript I don't know if I missed any releases or anything important I have as I mentioned I have a talk
[05:25:38]  that I'm doing on Tuesday if you didn't see the one that I already did this week same talk rethinking isomorphic JavaScript with Solid Start where I talk about future
[05:25:47]  of SSR and that kind of technology and yeah I think we're pretty good to call it I don't know if anyone has any more questions for me but yeah check
[05:26:00]  the chat above what do I need to check the chat above there's so there's so much chats I don't know what I'm missing how does Marco avoid churn being
[05:26:14]  so old yeah good migration I honestly Marco is we've been very aggressive with Marco in terms of the redesign with version 6 and even the redesigned version 4 Marco every couple
[05:26:26]  versions just goes through a crazy migration and as long as eBay can handle the migration it's fine it's actually very similar to Angular in that Angular has amazing migration tools and their
[05:26:37]  move from AngularJS to Angular was amazing from that perspective they were able to do that even at Google the problem is that doesn't work great with the wider ecosystem Marco doesn
[05:26:47] 't suffer from a wider ecosystem anymore the project kind of became very unpopular outside of eBay because people thought it was dead even though it was doing incredible stuff behind closed doors
[05:26:58]  so Marco gets to start from scratch again in a sense not really the migrations will happen because we have to support all of eBay I think we're all done thank you
[05:27:23]  all I hope everyone enjoys the streams and we'll figure out what we're doing next week I'm not quite sure yet I wasn't sure for this week either so yeah
[05:27:37]  I'll catch you all next time