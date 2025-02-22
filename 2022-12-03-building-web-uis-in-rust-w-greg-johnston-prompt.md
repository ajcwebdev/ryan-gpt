---
showLink: "https://www.youtube.com/watch?v=zgY7ql1xwW4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Web UI's in Rust w/ Greg Johnston"
description: ""
publishDate: "2022-12-03"
coverImage: "https://i.ytimg.com/vi/zgY7ql1xwW4/sddefault.jpg?v=6387ffbc"
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

[00:00:00]  all right hello welcome to my stream today it's gonna be fun we are going to be talking about rust web assembly web UIs a lot of really cool stuff yeah let's
[00:00:21]  give people a moment to kind of join on come say hi in the chat if you're here I'm gonna maybe post some stuff on social here for a moment let's
[00:00:33]  see what we got here all right yeah now it works I don't know what was up YouTube was being weird hey hi everyone yeah let's kind of get this going on I
[00:00:48] 'm just gonna get this up on Twitter and whatnot I'm a little bit behind the times here because I was actually just doing a podcast on pod rocket pretty much back to
[00:01:01]  back so I have not put up the live thing yeah hey yeah thanks for joining on actually I'm gonna see if I can even present my screen or that one time that
[00:01:14]  you know all right let's see here profile yeah it's working sweet let's let's find find this a lot of cool stuff this week in JavaScript but not in JavaScript gonna
[00:01:31]  talk about that a bit later but let's just give people it's tough to go on let's go here live talking rust web AP UIs and I guess I'm
[00:01:45]  gonna I'm gonna drop my twitch thing because that's that's nice twitch.com/ryansolid hopefully that's right alright alright alright how's everyone doing today
[00:01:59]  though I noticed a comment that I probably want to mention here in a second about my love of types and types typescript and I think that might be I think I think it
[00:02:18] 's a a misunderstood misunderstood is the best way I can put it because I am while I might have made comments about typescript I how should I put this I am not
[00:02:36]  a hater of typescript and I'm not a hater of typed languages I've used actually several typed languages this is in regards to this comment here I actually just
[00:02:49]  think that types in JavaScript are kind of awkward I think it's it's actually typescript that is tricky I've used like you know a number of other type languages it was
[00:03:01]  just it's it's actually typescript specifically which I find awkward I kind of joked with prime the other day that you know about learning rust and I was like oh
[00:03:12]  it's got to be better than typescript right so that that that I just want to clarify that I'm not a hater of types it's just that I think it
[00:03:21] 's hard to type a language that was made to be dynamic and then like it's just difficult to act like the types are always there anyway oh yeah how's everyone doing I
[00:03:35]  I just like streaming this off because now that I'm an affiliate and you get those terrible ad rolls we got to give people a few minutes to actually join on and I
[00:03:43] 'm not cool enough to have one of those intros in fact I think someone made one of those intros for me you know like the like you know now waiting with the
[00:03:51]  cool music but then I'd have to figure out how to actually link it up so yeah yeah so what about pocket rocket yeah no I did a solid start uh um podcast
[00:04:05]  it should be out probably hopefully towards the end of the month maybe early new year but yeah I'm pretty excited about that is for us the next type script I don't know
[00:04:15]  I mean maybe we'll find that out today I heard there's like some other fun stuff with rust you know like compile times but like I I don't know anything we
[00:04:25] 're gonna I'm gonna learn everything today so yeah this is a good point type script when consuming patch is a completely different story than writing packages because then by others yes definitely and
[00:04:36]  I I on both sides I think you should be writing type script because the benefit for the end users is huge to have that API all type it's beneficial if you're writing
[00:04:45]  an application you should be writing in type script so like everyone should be writing in type script it's just I don't have to always like it because it's it's
[00:04:52]  it's it's like that I think I've used this before it's like that like what was it Batman not Batman Begins the middle movie the one with the Joker it
[00:05:01]  wears like the thing we deserve versus the you know the thing we need or whatever I I'm just terrible paraphrase on that one but that's how I feel about type
[00:05:09]  script I don't know if I'm gonna touch rust myself today I this is this is like a learning kind of first experience here yeah yeah yeah okay yeah I'm I
[00:05:24] 'm glad I know there's a lot of interest in rust yeah yeah no that's the real streamer that's when I'll be a real streamer when I when I
[00:05:36]  figure out how to have those cool intros yeah javascript is awkward it kind of like lets you do anything and everything um I guess it's kind of like view
[00:05:48]  we like view we like javascript so yeah I don't all right how many engineering hours do you think we'll waste the next decade making wows on widget you nothing
[00:06:01]  that we do today uh yeah I mean this is interesting I think there's I think there's clear trade-offs and I think those trade-offs will exist for a
[00:06:08]  long time I don't think it's I think the narrative right now is too simple and I think we'll get into that today yeah all right uh sarcasm yeah no it
[00:06:22] 's good once you go typescript you can't go back yeah yeah that's what I hear honestly for me personally I don't find this the case like honestly I I like
[00:06:31]  enjoy going back to javascript I just know from like a principle standpoint like it's the wrong move like everything should be written in in in uh in typescript it
[00:06:41] 's just like it's just one of those things like you do what you do you do the right thing not necessarily the thing you want to do um I do wonder if there
[00:06:52] 's like a better type language you know it's just it's the gap right like I don't want to pretend that typescript and javascript are equivalent like that
[00:07:02]  you like that you can do every because like there's things you want to do with typescript you want it to achieve a certain goal so you can't act like you can
[00:07:11]  do everything in javascript if you're on that like technically you could do everything in javascript but you might not necessarily achieve that goal and if that's the
[00:07:19]  goal we shouldn't pretend like typescript is like a superset of javascript in a sense it's it's a subset um but like I I'm I'm talking
[00:07:27]  very much on like semantics here oh thank you thank you thank you thank yeah okay so have I wasted enough time yet oh interesting correlation is is this last holdouts because
[00:07:48]  you were coffee group devs probably I don't know like for me personally yeah coffee script is like the opposite of typescript and completely awesome in like a different way it's
[00:07:57]  like the it's like showing what like sometimes you can have two different extremes that are awesome it's just the middle the compromise that sucks and coffee script is kind of like
[00:08:06]  that opposite side of things yeah and definitely made me not want to switch to typescript okay enough just lingering around here yeah yeah yeah exactly proxies functional programming okay um I
[00:08:22] 'm just you know we're doing doing a good job wasting time um we we probably we probably need to to actually get this going right okay so uh yeah I love just
[00:08:35]  shooting stuff with you guys okay yeah you much like typing more after years of flow type uh no not uh the javascript type I don't I don't I don
[00:08:52] 't know honestly I feel like if the language was typed in the first place then that's what I'd be wanting because otherwise you just invent a new language that looks kind of
[00:08:59]  like the old language which is fine but I feel like we need we we need that anyway yeah uh explain your issues with typescript yeah let's go back I think I already
[00:09:11]  put this up um type proxies functional programming jsx is another one that I bet that's a small one they literally assume all jsx is like react like you
[00:09:20]  literally can't make a jsx element a div you like you can cast it but you can't just go like this div is a div you just like can't do it
[00:09:28]  anyway I'm I'm just ranting off let's let's actually get this rolling for once so I would like to welcome Greg to the stream okay how you doing Greg
[00:09:37]  hey great how are you I'm I'm pretty good I'm just as you might have saw there I'm just kind of talking typescript with people because everyone loves typescript
[00:09:47]  and I I am I think it's a necessary like I think it's necessary but it's not like my favorite thing I'm actually as I said I'm not anti type
[00:09:55]  languages so I'm very interested to learn more about about rust but typescript is hard because what it tries to force on javascript in my opinion anyway right um but
[00:10:03]  yeah how about how about you tell us a little bit about yourself Greg uh who are you I am um my name is Greg Johnston nice to meet you all I'm the
[00:10:14]  creator of the um leptos web framework I am a freelance developer um and I basically got into rust because I had shot myself in the foot so many times in j
[00:10:26] avascript um like I have a day job um that's 60 percent of my time I freelance 40 percent of the time I'm a parent 40 percent of the time and now
[00:10:36]  I'm an open source maintainer 25 percent of the time which adds up to a large number and I have had so many times where it's like a Wednesday morning and I
[00:10:44] 'm a one-man freelance show and all hell breaks loose in production on something and it was because um a function I could have sworn would never return undefined returned
[00:10:55]  undefined and then I tried to access some field on it or whatever and it's so I actually got into um got into rust through my own um my own bad practices
[00:11:06]  as a javascript developer so I do most of my most of my work that people paid me for is in um angular originally and now I I've done some work
[00:11:13]  with clients using solid um which has been a great experience um so yeah I mean but I've rust is sort of since I first got into it a couple years ago has been
[00:11:21]  a language I'm really excited about and being able to write my own projects and my own applications in kind of full stack rust is how I got to where I am so I
[00:11:30]  see yes oh sorry yeah I just want to say I saw um Nova in the chat I just want to give a shout out to like an actual rust expert I'm a I
[00:11:38] 'm a a happy rust user but there are some people who are real um titans in the rust community um so good to see you here yeah because what I want to
[00:11:45]  I just want to pause a moment on angular um yeah sorry what do you say just I want to clarify when you say angular do you mean angular or angular.js I just
[00:11:53]  want to know which one I mean angular okay which I started on probably angular 4 or something and is now right angular a gajillion um 15 yeah I think 15 just came
[00:12:04]  out yeah yeah it sounds right um I I most of my most of the angular stuff I'm working with is a kind of legacy and I have done some updates recently but
[00:12:13]  I'm probably running older versions of of angular than that but angular is actually kind of how I got into the reactive programming stuff through that right angular rx yeah originally yeah yeah
[00:12:26]  um just in there yeah like people people maybe don't know this this is just a tangent about angular before we start um like a lot of angular tutorials and things lead you
[00:12:37]  down a really bad path because rx.js is sort of deeply embedded in that framework like they use it for angular core libraries and stuff like their HTTP client is built on
[00:12:48]  rs.js but it doesn't actually drive the change detection so a lot of these angular tutorials and stuff will have you create an observable subscribe to it and then like
[00:12:56]  set um stateful variables from the description right and there's actually this other thing that you can just put this async pipe in a template in angular and it will manage
[00:13:07]  all the subscription for you and clean up properly and it's super clean yes sorry so it's one question sorry yeah uh I I I this is highly on irregular but my wife
[00:13:18]  is called like three times back to back I need AJ's asking what the sound is I just got to answer this sorry stream just give me two seconds okay okay Ryan if
[00:13:27]  you want yeah yeah just just keep going okay yeah yeah all right so so anyway so like a lot of um I don't know if you all have used angular or not but
[00:13:34]  a lot of um kind of good practice in angular is you want to compose these observables in a way that you can write the observable within the body of your function and
[00:13:44]  then you kind of um subscribe to it in the a template and it displays it um and you have these kind of observable streams that you're creating with all of their
[00:13:53]  um operators and adapters and stuff um and that was kind of how I got into the the reactive it's it's a little bit of functional reactive programming um but it's
[00:14:03]  almost the opposite of solidjs if you're familiar with solid like you have to start by combining these um these observables um explicitly and then you do operations on them uh
[00:14:13]  and it's kind of like you have this dependency array up front and then you're doing these operations on it um so anyway like seeing I kind of tried to recreate that sort
[00:14:23]  of thing in um in Rust a couple times and once I sort of found solid in the last year or two um it became really clear that you can actually do that kind of
[00:14:33]  reactive programming without um without the dependency arrays needing to be explicit and that was that was pretty exciting um so a lot of how I kind of ended up doing this was through
[00:14:44]  okay iterations on what does reactivity look like in Rust and the the solid JS and I know I know Ryan you didn't invent signals but like the the solid JS approach with
[00:14:55]  the auto tracking um signals is a really neat solution to a lot of problems I had run into with RxJS of like combined latest and having like six different observables
[00:15:05]  you need the latest value from and that kind of explicit dependency array right right right okay yeah and that makes a lot of sense because like I'm not there was people who
[00:15:14]  follow the channel for a long time know this I actually tried to use uh Rx type primitives like because there's a TC 39 proposal for our for like for observables
[00:15:24]  and I was like okay I'm gonna build solid off spec I'm gonna use web components I'm gonna use observables and like there was this time in 2016-17
[00:15:32]  I was like really following um uh under staltz and like like cycle JS and all that stuff and I was like I was like maybe I'll build something kind of like
[00:15:40]  knockout but with Rx and it was like I was fighting like every single part of it from like colds uh producers to like freaking uh like you like how like
[00:15:51]  only behaviors have values you can't pull from Rx like so like yeah I can I can it's like it's really good for streams which makes sense uh it's like
[00:16:03]  it's a transformation thing it's not it's not particularly great for trying to like do a bunch of course synchronizations in like 50 different places at the same time so
[00:16:14]  um they work they can work together if you can pipe them together but for the like the core of the UI framework I don't think it's necessarily the right choice and I
[00:16:22]  think that's why the Angular team is actually looking at signals I um I've been talking to them a bunch actually um and we're talking to them a bit more soon they
[00:16:31] 're definitely exploring what it means to have this kind of I don't know what to call it like I don't know if it's lighter but like this type of react
[00:16:40] ivity so that's interesting so yeah okay so that's how you got the reactive uh perspective kind of playing around or doing stuff with Angular yeah yeah so I mean want to get
[00:16:51]  into it want to talk about Rust WebAssembly yeah I mean yeah I mean we could probably we could probably get started right pretty quick here I always like tend to dwell on
[00:17:03]  points for way too long in tandem but the truth of the matter is um I don't really have anything more to say about Angular um um but okay I do have like
[00:17:12]  one question for that like just out of curiosity because um as people know Leptos has uh some inspiration from the signals and work I've done in Solid um how how did
[00:17:23]  you in case I missed this when I was on the off the headphones how did you actually find Solid in the first place I'm just curious that's such a good question um
[00:17:32]  I think like what happened right is I um I was doing this stuff in Angular and I'm like okay how do I compose these reactive observable you know chains in a
[00:17:45]  functional way and so I'm just like anybody else googling stuff whatever and I kind of learned about functional reactive programming which is its own kind of paradigm right which um is
[00:17:56]  really tricky honestly like I had a lot of I actually that my first Rust UI library was a functional reactive programming library and I found it just really hard to implement basic stuff because
[00:18:08]  I think I think a lot of us think in terms of mutations like I would like to add a to do to this list I don't want to listen for the events of
[00:18:18]  add to do and then do this other thing to get an ID out of some like it was really hard for me to think in those ways um right and so but I
[00:18:25]  always knew kind of reactive reactive programming was interesting um and I think it was really around the time um you know I was kind of doing this work on my own trying to develop
[00:18:34]  different ways of like reactive programming and Rust um and around I feel like around a year ago Solid really had a big increase in popularity and I just started seeing seeing mentions on you
[00:18:46]  know front end Twitter type worlds um and so I was like okay I'll check this out and then it was it was pretty immediately obvious to me um I had also I
[00:18:54]  guess around the same time probably I um played around with Sycamore a little bit which is kind of the the original um solid inspired Rust framework um and there are some things
[00:19:04]  I don't love about about Sycamore um but it kind of clicked like okay this is this solves a lot of the problems that I had found difficult in particular and
[00:19:13]  we talked about this in it's really hard I I was using this async stream based approach in Rust which was a lot like an RxJS type approach except that
[00:19:23]  in in Rust it's really hard to combine two streams and get the latest value of each one and do some work with them that kind of RxJS um combined
[00:19:33]  latest or generally combined latest okay right and in Rust because of the ownership model in Rust it's it's actually quite hard to do that and I had to sort of create a
[00:19:41]  way of getting around that um and it's just messy um and then seeing that kind of auto tracking model um really clicked for me so I kind of knew okay I'm mostly
[00:19:50]  working in Rust um I really like this solid JS model um obviously like practically speaking for me it's a lot easier um if I'm doing work for somebody to be doing
[00:19:59]  it in in JavaScript um just in the sense of you know being able to hand it off to someone else in the future or whatever um but I was I have a lot of
[00:20:06]  control over things so I was able to do some projects in solid and kind of learn um and it just makes sense as a model to me so people will notice like the implementation
[00:20:14]  is actually pretty different in some ways and in other ways it's like a port of DOM expressions um but the the reactive implementation is is pretty different but a lot of the
[00:20:23]  APIs are really similar to solid because I think in a lot of ways they're just kind of the right um approach I mean that's funny thought about it for a long time
[00:20:31]  so it's that's where I get the most friction it's funny it feels like because people see the benchmarks and they see they get the overall red thing but then it's
[00:20:38]  the APIs where they're where they're like that like and don't there's the right use of the right case I think but it's it's it I have to
[00:20:46]  say almost more definitive statements so that people don't like do really terrible stuff and not realize why but yeah I that's that that is interesting because I know Sycamore and
[00:20:57]  Leptos did slightly different choices on the API side of things but we can probably look at that much much later on we're going to look at it in in particular I
[00:21:05] 'm gonna show off Sycamore 0.7 and then how um which is the last version and then how Sycamore 0.8 and Leptos kind of
[00:21:13]  solve some of the problems that you get out of like a Sycamore 0.7 and earlier in different ways um so that'll be kind of a little later in what
[00:21:20]  I what I was gonna show off okay well then yeah uh let me I'm gonna actually throw a banner up here it makes it easier yeah um but yeah where are we
[00:21:28]  starting right now what should I call this banner just so I can have a good marker um should we start with some very simple um yeah yeah sure start start with wasm then
[00:21:37]  we'll do a little bit of rust and then we'll do vanilla rust uh all right all right then I'm gonna just do this all right let's just do this
[00:21:49]  here we go all right so perfect great yeah tell tell us a little bit about wasm uh and awesome yeah yeah so so wasm web assembly um is basically one of the
[00:22:02]  four programming languages that can run in your browser so you obviously have html css javascript and then there's this mysterious fourth thing called web assembly and it's
[00:22:13]  it's basically a compilation target for compiled languages so um it's a binary format it's um platform independent and the browser will compile it to native code so you can use
[00:22:28]  it to compile um rust go c sharp whatever compiled language c plus plus c um into this web assembly binary format and then it gets streamed down to the browser and compiled into
[00:22:43]  native code and runs so in the same way that um if you load a website it might load some javascript parse the javascript run the javascript you
[00:22:52]  can load a website which will load a web assembly file which it has to do via javascript um but it will then download the web assembly compile it and run it so
[00:23:03]  it's basically a way of writing um the kind of code you would write in javascript for a browser in other languages and rather than compiling rust to javas
[00:23:12] cript or something you can compile to this web assembly target and then run um run code in the browser right it's funny the even though you just gave a great explanation the
[00:23:25]  chat's more focused on the fact that you called html uh a language of course it is right but no i html is a language like if you look i
[00:23:37]  people like i don't know programming or what is programming or what is coding that's whole thing but if you have some kind of defined syntax and semantics that transforms a
[00:23:46]  certain behavior i think it counts as a language yeah well i mean what is it if not a language um but anyway so yeah so and so i was saying this to you before
[00:23:57]  the stream started but i hear two kind of um takes on twitter or reddit or whatever about web assembly which are both pretty wrong and so it's very common to see
[00:24:08]  um somebody posts like man web assembly is amazing in two or three years everybody's going to be writing their their whole apps in rust they're going to compile to web assembly they
[00:24:18] 're going to ship it down to the browser and you're going to render your whole ui in a canvas and it's going to be super fast and amazing um this is
[00:24:26]  not a good idea can explain that and then the like the smart money conventional wisdom response is somebody comes into their replies and is like no way wasm is way too slow
[00:24:36]  in accessing the dom if you want to write your back end in rust or whatever do that and then write a nice front end and spell preact maybe some solid um and you
[00:24:46]  know that's the way to actually do your dom stuff um and those are basically both wrong like on the one hand it's it's a terrible idea to create a whole u
[00:24:55] i rendered in a canvas and ship that down to the browser the browser already does that work for you right like if you ship down a mega gigabyte of web assembly in
[00:25:05]  order to render widgets in a way that you can't style with css and that's totally inaccessible like you've just wasted so much of your time and and if
[00:25:14]  and google and or whatever yeah this is it and google's money apparently yeah yeah yeah yeah so if you're on the flutter team and you want to do that whatever that
[00:25:23] 's that's that's your call um but like don't do it yourself right um and like granted you can do a lot of work to make the accessibility and stuff happen
[00:25:30]  like that's that i'm not i'm not meaning to trash them but i don't think that's the future of the web i think the future of the web is the
[00:25:36]  web platform um and it turns out that like web assembly there are some actual performance limitations um on web assembly's access to the dom right now but um that's all else
[00:25:48]  being equal so like everything else being equal a solid js implemented in rust compiling to wasm will be a little bit slower than a solid js in js but solid js in
[00:26:03]  js is so much faster than something like a svelte a preact a react an angular that leptos solid js in rust is going to perform better than s
[00:26:12] velte even though people think of svelte as being really snappy um because it's like the architecture swamps that overhead from the wasm um right and and that
[00:26:22] 's that's largely why i wanted to kind of bring you in and start talking about this is because this is a trend that i started noticing about just over a year ago i
[00:26:29]  was like i've been watching i you know like i just kept watching the rust libraries just kind of like teeter up up up you know across it and it was kind
[00:26:38]  of interesting to me because like um i'd heard this dom story and i had some experts you know people who basically suggested as much to me and talking about how when this new
[00:26:48]  blank thing comes out in wasm you know they'll do it and then it'll be like and every time this conversation happens they're like well you know maybe two three years
[00:26:57]  you know like it's just like very loose conversation i was just like okay well i'm i'm i'm not going to bother here but i i was still like it
[00:27:04]  was kind of hit this point where i like there's a bigger like i'd see rust bind gen which i guess we'll talk about in a minute but i'd see it
[00:27:13]  move up you know and then get to a pretty good place but then the gap between the vanilla rust and the frameworks was significantly larger than the gap between the fastest javascript
[00:27:25]  frameworks and vanilla javascript and i was trying to figure out like why that is and i thought part of it might just because javascript got so hyper optimized on
[00:27:34]  its tooling like around it that like you don't write javascript and get javascripted like javascript doesn't exist without build tools and essentially like we've
[00:27:43]  already kind of gone to a point where we're like compiling our javascript and maybe we've just gone so crazy down that like local maxima that like this
[00:27:52]  is the truth and but then i started when rust library started showing better performance showing up um it was because they'd taken a different approach they'd actually looked at solidjs for
[00:28:03]  example and i realized that you know maybe this is different and you offered a much better explanation for that yeah and like there are real so so i should say that the main
[00:28:13]  one right uh what you're talking about is that i think it's it was originally called the interface types proposal which would allow web assembly to directly access the dom and right now
[00:28:23]  everything has to go out through this bridge via javascript um and that includes some due to some annoying things um the cost of shipping strings across that is pretty high so
[00:28:35]  and of course like creating dominoes is entirely strings because you have the tag name you have all the attribute names you have attribute values you have text nodes the entire page is
[00:28:45]  strings um so obviously there are ways of minimizing that like using template node cloning and stuff like solid does like leptos does um but there is a real cost it's
[00:28:55]  just that if so if we could get that interface types it's now on the third iteration of that it's been like four or five years it's not anywhere close to
[00:29:06]  happening um in theory yeah the wasm frameworks could be just um ounce for ounce as fast as the javascript ones um but we don't need to wait for that anymore
[00:29:15]  like we have there there are other things that are a little slow like load times are still a problem um with some binary size and stuff um but in terms of just the raw
[00:29:24]  dom manipulation um that's just not the actual thing limiting performance anymore um okay yeah i mean and that's that's that's a really key um observation because it's it
[00:29:38]  not being the dom itself but being the things around the dom creation means that you can just maybe approach things a little bit different and and get you know get more get more performance
[00:29:49]  and i'm gathering that's what you have done with leptos like part of it might have been changing to the reactivity model um that allowed you kind of to kind
[00:29:57]  of bypass what people typically thought that bottleneck was versus it was very common early days for people to imitate v doms and like react and they maybe they hit those bottlene
[00:30:06] cks like bigger for some reason or or i think so um and i think that you know maybe there are different reasons for that but i think that's a big part of
[00:30:16]  it is the is the what's the architecture that you're choosing um and i think that rust's ownership model led a lot of people early on and by early on it's
[00:30:26]  like you know three four or five years ago um when people first start these rust wasm frameworks into a v dom type approach and we'll we'll see that once we
[00:30:35]  start looking at a little rust like the the u u is the kind of big um biggest most used rust web framework and is a v dom based kind of react style library um
[00:30:47]  there's something really clean and beautiful about their code because it fits really well with the rust ownership model and the borrowing model um right it's just that in order to do that
[00:30:56]  it's actually hiding a huge abstraction which is the whole virtual dom runtime which is making it slower right so and obviously you can have fast v doms um but it's
[00:31:06]  like in order for you to feel like you're writing this really clean beautiful rust code it's actually hiding all this stuff and you hear this with react i think sometimes too right
[00:31:16]  it's like this is just javascript it's like well the reason it can look like it's just javascript to the developer is that you have 70 kilob
[00:31:22] ytes of javascript in the background letting you do that right right yeah yeah yeah i mean there's yeah there's always a lot of that svelte actually is
[00:31:30]  usually my favorite example of that although they don't claim to be just javascript but then just javascript in a different way like the reason you can just write let
[00:31:41]  count and have that update is a ton of other stuff going on like javascript doesn't work like that i and to be fair all frameworks have this to a certain
[00:31:52]  degree and it's not just because of compilation it's like because as i said react does their jsx compilation but like even when you look at hooks and stuff um i was
[00:32:00]  in a conversation with j phelps uh you know very prevalent in uh rxjs uh i think he worked at netflix um you know like uh he was saying that
[00:32:12]  like he basically said that react had created their own language he said that even solid had created its own language essentially even if it wasn't the compiler side it was actually the
[00:32:20]  the the semantics around like like how you write stateful code and i think that was fair um but not all these things are equivalent i think it's fine to just not
[00:32:33]  pretend that it's just plain javascript right like it's i think this is something you've always done rel is just acknowledging here's something that's a feature of of
[00:32:42]  solid as a library and that allows you to build it out of primitives that then like you can reuse somewhere else because it's not part of the language the the only
[00:32:51]  thing is the the jsx transform like i i understand the idea of talking about reactivity as a language like that's a domain specific language type type of thing um but yeah
[00:33:02]  i mean the the i think that the it's usually the users of frameworks right who are like ah svelte is just plain javascript let whatever equals whatever and it
[00:33:10] 's like yeah in order to be just plain javascript there's so much going on behind the scenes to make you feel like that's true um right yeah and and
[00:33:18]  with its own set of trade-offs so they said you know where the complexity gets pushed one of my favorite examples is i i've been really focusing on the role of escape
[00:33:27]  patches and stuff and that's like my new unifying theory on this why why react it has its friction point is because like every framework has escape patches you always need those
[00:33:37]  control pieces um you always go beyond what they can do and the farther the framework gets from what it's able to perfectly abstract even in those escape hatches they're like the
[00:33:47]  more detached the developer feels and the idea of complication so when people are sitting there complaining about use effect in react they're complaining about the escape hatch um and i feel like
[00:33:59]  uh like that it kind of comes into like the distance we get from that is kind of yeah i don't know this is just something i've been kind of thinking about
[00:34:07]  in terms of web design that this is actually uh what do you call it like uh one of those ranges or something that you could maybe use as a metric to decide like where
[00:34:16]  like a certain quality of your framework like some characteristic that actually might matter is actually like i i don't have a term for this yet but essentially based on how well like
[00:34:27]  escape hatches uh match with the model um anyway but yeah i think it's actually time now to actually get started on actual stuff so like maybe maybe you got some stuff to
[00:34:40]  share with us right yeah yeah yeah um so first i'll just say um before i throw up a little a little rust on the screen for anyone who does not know what rust
[00:34:49]  is um rust is a systems programming language which means its main function is an alternative to languages like c plus plus and c like if you don't know rust is really um
[00:35:01]  the closest sort of cousin in comparison is is c plus plus like people switch from c plus plus to rust it doesn't give you some of the control that like a c does
[00:35:11]  but it's also much closer to the to the machine than um something like javascript or even something like you know swift or go or whatever i i got one important question
[00:35:20]  i've heard rust is the cure for cancer can you confirm um no comment ferris that there's a joke in there about ferris the crab and cancer and and whatever
[00:35:31]  but i don't know what it is um okay but so so basically the the values of rust are um memory safety more than anything else um performance and then i would say like
[00:35:45]  expressiveness and developer experience um so i'll just put up i'll start sharing my screen and and show you what the heck i'm talking about all right there we go
[00:36:02]  let's get you in there yeah all right can you get crabs from using rust uh chat is great okay good times i saw are we good can you see this um this
[00:36:19]  hello world uh i can see it yeah i mean i is this this was the size we agreed upon didn't we we can can you try one more yeah let's do that
[00:36:28]  yeah yeah cool um so basically right like you know this is just rust and vs code right if i if i run this it's going to compile it and then it's
[00:36:37]  going to print hello world right this is not complicated stuff um so when i'm talking about memory safety um this is what i mean if you look at rust it's fairly familiar
[00:36:46]  if you're you know javascript user you can probably understand what's happening here fn is function main is going to be what runs we've got the curly braces um
[00:36:55]  so instead of const and let in javascript we have let and let mute mute for mutable okay so let's say if i say like let x equals zero okay
[00:37:07]  um x equals two all right this is an error right you cannot assign twice to the immutable variable x nice okay making it mutable okay cool so now i'm gonna make
[00:37:23]  it mutable right that's fine um i can do you know x plus equals one print line x and this is just gonna print three right um so it's does string
[00:37:36]  interpolation work with just like any kind of quotes then is that just like a thing so this is yeah this this print line thing um this is there are a couple of mac
[00:37:43] ros like this in in rust okay um so you have this um quotes and then the curly braces and you can put a simple variable name in there or if you want to add
[00:37:51]  other things it could be like x times two here right um right to put another little expression and it's going to give us six um but so this is you know whatever
[00:38:02]  um but the reason that rust cares so much about this mutability stuff right um you have three different things you have a value that you own you can have a reference to something
[00:38:15]  which um you don't own or you can have a mutable reference to something which means that you're allowed you don't own it but you're allowed to change it
[00:38:24]  um and i'll show you what i mean um okay you can have as many immutable references to something as you want but there can only be one mutable reference and if
[00:38:34]  there's a mutable reference there can be no other immutable references so that's actually really that's actually really awesome in a sense because like that's what i struggle
[00:38:43]  with reactivity freaking all the time i you you want to control that mutation you don't want to just like pass something around a billion places and have everyone mutate it exactly
[00:38:52]  so this is just defining a little data structure we call data it has a field called value um i32 is in a 32-bit integer integer kind of thing that you get
[00:39:03]  in kind of lower level languages um yeah that if you're just using javascript you might not know but yeah well this is a this is a vec that's an
[00:39:13]  array yeah this is bringing back memories uh i did a lot of c plus uh before i did c sharp um and even there you know vector right the the difference between uh different
[00:39:26]  array like structures actually matters here right so this little colon question mark is to do like a debug okay oh right because i didn't so so you're seeing me you're
[00:39:38]  seeing me program live in rost right um so this this prints a debug version of something you can't just print a vector as a string and that was telling me um you
[00:39:47]  actually didn't derive the debug trait on this data struct and it gives you these really helpful error messages like it told me consider doing this and so i'm going to just
[00:39:57]  derive debug on that which just means that it knows how to print the kind of debug version of it um so you see this and that's just a basic push statement right like
[00:40:06]  i'm pushing pushing value onto it okay um so now let's say i want to get the last value of this so i'm going to say let last equals data two
[00:40:17]  we've got a three life thing right um yeah oh yeah so is it is it very common to use a snake case for function names yep it's all it's all snake
[00:40:30]  case um okay so and it will actually cargo the um clippy which is the little lint tool will actually yell at you if you do camel case or anything else um okay
[00:40:39]  and so right so now let's say we've got this do stuff to the list function um obviously in this case it's it's really stupid you'd never do this
[00:40:46]  but when you're working with um you know data across the whole application you do stuff like this sometimes and that's going to take a mutable reference to the data right um
[00:40:55]  and it's going to do some work on that data um so let's say it just pops something off the list okay and we're going to print last one um you
[00:41:06]  see the problem does anyone else see the problem here i'm not a rough problem so i've taken this this is actually not a problem in javascript but it's a
[00:41:20]  current logic error right so i've taken a reference here right to the last item in this data vector gotcha and now i've done stuff to list which is now there's
[00:41:29]  nothing there yeah yep so in javascript someone correct me if i'm wrong in javascript where you have a garbage collector um each of these things each of these
[00:41:39]  data structures is an object that you create it now the garbage collector knows that it exists and so it's tracking all of every references yeah as long as why yeah as long as
[00:41:51]  last exists you're not going to lose reference to it so last right has a reference to it so when you pop it here it's no longer in the data vec array
[00:42:01]  but it does still exist here rust doesn't add the overhead of the garbage collection right so these things um the actual size in memory of this is four bytes it's just that
[00:42:14]  i32 the wrapping struct is actually just yeah is actually just um only exists at compile time right it compiles away um which is something rust tends to call like zero overhead abstract
[00:42:26] ions right so you can write stuff that compiles away to nothing um which is more efficient at runtime right however um this is the problem you're trying to solve the problem
[00:42:35]  of memory safety without a garbage collector because garbage collectors have lower performance than not garbage collectors yeah um but if you do this um you now have a dangling reference and a dang
[00:42:48] ling reference means a reference into memory that has basically been freed so when you create these things you're allocating memory for that vector and now the compiler basically can't guarantee
[00:43:02]  what's in that memory because you've popped this thing off the stack um it off the end of that vector i mean it could be um still the old data it could be
[00:43:13]  total garbage uh it could have memory that was handed back to the operating system has been allocated to a completely different program right it can't guarantee anything about that and this is
[00:43:23]  the source of like a huge number of security issues in c c plus plus um right code is these kinds of memory errors and there are lots of different kinds of memory errors um
[00:43:33]  none of this has anything to do with front end right right we're in the browser it's a sandboxed environment web assembly is sandbox just like javascript the worst thing
[00:43:43]  that happens is your program crashes and you get an error in the the console in the browser um but these kinds of optimizations are the reason that rust and c plus plus
[00:43:54]  are the most used languages for web assembly because if you have a garbage collected language you have to ship the garbage collector inside the wasm binary they're working on um garbage collection
[00:44:06]  for wasm now um but yeah it's like stage three i think at this point so they're starting to implement stuff um which is cool i mean it'll be really
[00:44:15]  good for things like go um but basically like it it's part of what makes rust so efficient relative to something like javascript especially if you're going to like run it
[00:44:23]  on the um on the server right yeah a rust server is much more efficient than a javascript server because it's able to do these kinds of optimizations because it is
[00:44:31]  a systems programming language um but you have to follow these borrowing rules so when people talk about fighting the borrow checker this is the kind of thing they're talking about well i
[00:44:40]  want to have some kind of immutable reference to something but i also want to mutate it somewhere um and if you just step back a second and you think about creating
[00:44:49]  a user interface in a language like this um user interfaces are all about being able to mutate something yeah from something else like if you talk about any kind of event listener
[00:45:03]  or whatever in in the dom um it's about this thing needs to have permission to mutate this at any time and that's exactly what rust hates um so we're going
[00:45:15]  to look at um how you actually do it right okay and this is where we're going to start getting into into some some web assembly stuff so um ignore all my imports
[00:45:24]  and stuff up here so we're going to do just like a bunch of vanilla um uh vanilla rust and wes and bindgen stuff here i'm using a build tool called trunk
[00:45:32]  if anyone's curious that does like live live reloading and stuff um and a dev server and so on um but this is basically just you know a rust binary file just like
[00:45:42]  the other one with an empty main and a bunch of other junk i've put in here um and let's just see like uh first of all i'll give you the
[00:45:49]  the really vanilla wasm bindgen version then we're going to use some leptose helpers that will just make things a little cluttered um so let's say let
[00:45:58]  window equals wasm bindgen window right and what wasm bindgen this is like i i was talking about it in the benchmarks because it's like the like the i called
[00:46:09]  it the vanilla version so this is just something that exports all the like dom or web apis like yeah and i actually typed typed the wrong thing too so wasm bind
[00:46:19] gen is what generates uh is is kind of the glue the bridge between web assembly and javascript and then there's a separate package called web sys which it's cool
[00:46:28]  they actually take um what are called web idl um files in web interface definition language probably i think um yeah but which which actually define like all of the web standard apis
[00:46:40]  and they use those to auto generate rust functions and then bind them to the the javascript so when we do this like let window equals web sys window um this
[00:46:50]  is calling out to the the window you know window object you have in your javascript right um but you see it it returns an option which is we in rust we don
[00:47:00] 't have undefined we have um and we don't have exceptions so we have option which can either be some value or none and then instead of in exceptions there's
[00:47:12]  this result type we'll probably see in a second so when you call window um this kind of makes sense right because there are environments you could be in um i can't think
[00:47:21]  like do you have window in web workers for example i don't know where you um we i mean we don't have window in node right so i you know i guess i
[00:47:31]  guess it's it's not guaranteed that you have access to a window object at any given point okay um so in in rust we can handle this in a better way um
[00:47:41]  the sort of messy way is just to say dot expects um so this just unwraps it it's gonna just crash if there's no window but we're running in the
[00:47:49]  browser there will be a window okay okay and then we're gonna say let document equals window dot document my body equals document dot body okay except i'm pretty sure this also
[00:48:00]  returns an option right right okay because there might not be a document in the window okay there might not so this this is how you have this is how you help it make the
[00:48:11]  nice error messages because so when it now when it panics it will give you that expect message gotcha okay you could just do dot unwrap which just panics with
[00:48:22]  unreachable code or something um as the message expect is kind of the nice one if you were writing real application code you shouldn't be unwrapping or expecting this much
[00:48:32]  stuff but we just we know that there's going to be a body on this html page it's fine okay um okay so now let's just say um you know
[00:48:40]  let p equals document dot create element yeah p um so strange seeing snake case like this i mean i use snake case for years on databases and backends even in coffee script
[00:48:54]  and javascript but to seeing it for the function names is the one that's that's taking me a moment and see like again i'm this is why rust analyzer
[00:49:02]  is great it's giving me some help here um oops we're getting covered but um so like even creating an element returns a result because that could throw an exception i guess
[00:49:16]  of some kind okay okay you know it prevents you um set inner text is coming to me here because there is no set in your text there's inner text and you can assign
[00:49:24]  it or there's i don't know that was set set text content right okay but so that's like that's really calling it as a function yeah yep exactly because instead of
[00:49:34]  we don't have getters and setters in rust and so uh i could say um p dot text content is a function that returns option string there may be some text
[00:49:48]  content and if i want to set it i do set text content okay interesting see okay yeah this is just interesting because as i said those apis are generally from a javas
[00:49:58] cript standpoint people view them almost like they're just plain properties on the object you know just like assign it or whatnot so okay right um i i don't actually know what
[00:50:07]  board i'm on okay 80 81 cool so that's um hello wasm and if i want to change this um make sure i'm actually in the right place this is where
[00:50:17]  you see the compile time comments okay hello ryan there we go right so yeah i'm gonna make this probably a little bigger for you guys all right so this is this
[00:50:25]  is you know this is pretty basic um dom manipulation stuff just done in rust in a way that's um a little messy uh but what we're going to do i think is
[00:50:34]  just do a kind of basic counter example where we're going to um have a counter with a value with a plus one button and a minus one sure um so let's start
[00:50:45]  um with just the increment button uh at this point i am just going to switch over to using some leptos helper things that wraps okay error messages and stuff um so
[00:50:56]  this like great element function these are internal things like if you're actually writing leptos code you wouldn't be using this stuff um yeah create element button and increment dot set
[00:51:06]  text content the the the the get the get and set functions are really funny to me just because like like they're almost the the default like almost like the expectation that you'd
[00:51:17]  have a get and set function um which is refreshing to me for some reason yeah and it's i would say it's it's the sort of thing that's not common
[00:51:25]  in actual native rust code like you wouldn't get her in a letter like that most of the time you would have a mutable reference to something i mean maybe if you're
[00:51:37]  trying to provide an api you might do that um but you'll notice none of these like when i have set text content here this takes a plain reference not a mut
[00:51:46] able reference right and that's part of this wrapper thing like you're calling out to javascript which has no concept of this mutability you're trying if i call this
[00:51:55]  function javascript is gonna gonna handle this thing it doesn't have that rust ownership going on okay okay so now we've got our two our two buttons right um except
[00:52:11]  that i didn't append that one if you see it giving me these errors right this again is rust being like hey um this might throw in an exception when you append that child
[00:52:21]  right now you're ignoring that exception and that's fine but it does give a warning um just to tell you this this may cause an error um anyway so i click these
[00:52:29]  buttons nothing nothing's going to happen um do you want to see the really messy version that involves a lot of boilerplate for an event listener or just use the quick version uh
[00:52:37]  yeah we can probably use the quick version it's fine so we're gonna just add click handler to these things um so i'll just acknowledge that it's not this simple
[00:52:49]  usually okay exactly um but that's just wrapping stuff again you would never have to do this if you were using an actual wasm framework it's just the some of the bridge
[00:52:59]  code um so this is a this is a this is a um this is the closure format this is the same as open parenthesis close parenthesis would be um and i actually
[00:53:07]  probably will leave out that move for now so i'm going to define a variable that we're going to call um uh count and it's going to be a mutable
[00:53:16]  mutable variable because we're going to change it and when you click the increment it's going to add plus one okay i'm just going to wrap this um and then what
[00:53:25]  do we want to do like we probably um we're going to do the old school the event listeners are both going to update that um that paragraph so we're going to do
[00:53:33]  p dot sets yep text content some i love it like i've done this exact demo in javascript before oh yeah actually this is the uh no this is great this
[00:53:45]  is because this is this is how i teach solid so seeing this is actually really awesome okay and it's telling me that my closure is supposed to take one event one argument here
[00:53:55]  and it took zero and great this doesn't need that and guess it wants me to pipe because i do that automatically in the framework so it's mad at me oh good
[00:54:07]  okay so now it's giving us an error sorry about the weird formatting here this is saying um this closure may outlive the current function but it borrows p which is owned
[00:54:17]  by the current function so what that means right in what this function is running just like a solid component it's a setup function so this is going to run once and then end
[00:54:27]  and when it ends all of these um all of these rust variables i've created are going to be dropped they no longer exist it's they're out of scope but it
[00:54:36]  tells me but you're trying to access it from this long live um closure so it says just add move and that will move it into the closure fine we're gonna do that
[00:54:46]  i think it just gave me some error i couldn't see good now it says borrowed here after move so i moved it into the closure then i try to append it to
[00:54:58]  the thing so let's just move this up above that you get into this stuff with rust sometimes where if you have something that you actually can borrow um and then you like move
[00:55:09]  it in somewhere else um you you can just reorganize the order of the code um and not cause yourself that problem okay so let's see if this um there we go okay
[00:55:20]  so we just created a button that you click and it does something cool all right now we're gonna have a little fun we're gonna do the exact same thing all right
[00:55:29]  on the decrement it's going to get mad at me aha because now i've already moved p in here and now i'm trying to move it in here right so
[00:55:42]  this we're going to do something that is it starts to get into why some of this stuff is awkward in rust and you start to see some of the framework solutions so we
[00:55:53] 're going to do let p equals p.clone okay loans that paragraph which is just a reference to a dom node so it's so it's not called it's not
[00:56:02]  cloning the actual dom node it's it's not it's not element dot clone node it's just cloning that reference um so that you now own it you can
[00:56:11]  put it in both places and it's going to work so we're going to do plus one yeah all right are you ready if i do this all right did you see that
[00:56:22]  oh yeah you've already cloned it okay so it's updating the same paragraph element right um but we just created a stale closure because i moved this count in here
[00:56:39]  so now there's a mutable variable inside this closure called count that starts at zero right and there's another immutable variable inside this closure called count that starts at zero
[00:56:52]  right we click this it updates count to one and it sets the text but it doesn't update this outside thing it updates what's inside the closure right so yeah when we do
[00:57:04]  this it's one two three and then we do this it's starting it and then if we do this again it's starting back at five we have two completely separate state full
[00:57:13]  variables that are updating the dom which is okay this reminds me of coffee script so i'm going to actually so that you can kind of see the solution i'm going to
[00:57:24]  wrap it in this in this state structure um and so we're going to go back in here um we're going to call it state instead and state is going to be count
[00:57:33]  zero and let's try let's try doing this and let's see what the compiler yells at us about so we're going to do state.count minus equals one okay so
[00:57:42]  you're boxing it now i mean this the the the term i use this in javascript you're you're boxing it essentially like you're keeping one reference and like
[00:57:52]  you do this a lot i would call it um i would say like i'm wrapping it in this in this struct why is it not but but what i'm getting at is
[00:58:04]  this is like use ref right like in react like they they they have use ref so that they like there's a dot current on it and they do it so that they
[00:58:15]  can keep the reference to the same like ref but allow the mutation of the sub property without losing reference to the ref yeah we would get to actually doing that right now it is
[00:58:27]  not doing that um and i'm actually really curious about why this is compiling so basically the the problem here right is that we are moving this state into um into the
[00:58:44]  first closure yeah and then we're trying to move it into the second closure um but we can't move the state into both of those closures we could do it with
[00:58:56]  a really simple count value because that's just a number and so it gave us that stale closure thing um okay but when it's a structure like this we haven't told
[00:59:04]  it you can just copy this and move it around okay and so i'm i'm actually genuinely a little curious i've i've clearly done something wrong here because this should
[00:59:18]  not compile and i'm curious as to why it is maybe it's let's see i'm looking at chat right now i'm only accessing the count and it's copy you
[00:59:28]  are only moving the count member you're only moving the count member which is copy no okay this is awesome this is actually a new rust feature this is disjoint capture sorry okay
[00:59:38]  so this is something so i've continued to focus on myself i thought it wasn't going to be an issue but actually um the issue here is that it it rust is
[00:59:45]  now smart enough to know i'm not actually trying to capture that entire state structure yeah i'm only trying to capture capture count so it's actually still um it's still
[00:59:57]  it's still just moving the count like it was before um because oh that's so that's so great i must have actually when i was running this earlier i wonder if i
[01:00:07]  was on a lower version or something because it this this used to be a compile error but the the compiler is now smart enough to know i'm only accessing count and so it
[01:00:17]  can just move it in it doesn't fix our still still closure problems so let's say um we do something totally different that's no longer a counter right but we're
[01:00:26]  going to have it set that count value is now a string okay here's the error i was hoping for okay so it's going to be a little hard to read over here
[01:00:37]  if i go into the terminal and if i do cargo check good so now it says the value was moved into the closure here right to set it this first time so it
[01:00:51] 's no longer available to be moved in here okay okay so now we have to do the kind of wrapping that that you were talking about um so the way that we opt into
[01:01:02]  some garbage collection in rust is with um rc which is a reference counted pointer it basically wraps this thing it lets you clone this so that now you can move it into
[01:01:15]  two places at once so now the the reference counting wrapper owns this state and we're going to hand out two different references to it um so we're going to do just
[01:01:27]  like we did p equals p dot clone we're going to clone that state to do and then we can move into two places okay now we've got a new error that's
[01:01:36]  progress and rust always progress and rust let's see hmm okay we cannot assign to data in an rc because we can't have two mutable references to the same thing right
[01:01:48]  um so an rc has to only be immutable data so you're talking about escape patches earlier so this is the sort of um rust escape hatch that you use in
[01:01:59]  this kind of situation so it's an rc wrapping a ref cell um what ref cell does is it basically moves the borrow checker to run time okay so instead of at
[01:02:11]  compile time checking to make sure there can never ever be two mutable references to the same thing it checks at run time to make sure there isn't a mutable reference
[01:02:25]  and an immutable reference um and so the way that we do that is we add this borrow mute count um state dot count dot borrow mute this is very interesting and what i
[01:02:38]  mean by that is this clearly is a language that cares a lot about um control in terms of like immutability mutability like assuring that you can't like get
[01:02:50]  yourself in a weird state caused by like you know mutation but in order to do this you enter a whole realm of new language to explain uh this like describe this system like yeah
[01:03:08]  yeah and the and it's and it's a performance thing right it's because the values are like in this order memory safety performance um developer experience expressibility like i'm
[01:03:22]  kind of sad we're not seeing the awesome dx stuff of rust we will see that in a few minutes um right but the reason right is that you could wrap every single
[01:03:32]  thing in this that is overhead that's not necessary for 95 of the variables you're declaring and so the it's like the performance difference between rust and other things is you you
[01:03:45] 're opting into this kind of um runtime it makes sense it makes sense to me every let variable in svelte is a signal but does it have to be right
[01:03:55]  it's exactly kind it's exactly the same thing um and it's okay so oops because i changed the port um so we've got this right um okay okay so this is
[01:04:07]  what we wanted i mean the counter thing is now broken because rust got smarter than i am um but we are able to access that to change it from both of the things i
[01:04:15]  promise it's not the steel question um so that's the that's this is going to be right this this is awkward nobody would want to write ui code like this
[01:04:29]  this is why frameworks exist and so the interesting thing right when when when you do demos and you look at javascript um frameworks and different models and different patterns a lot of
[01:04:38]  it is about how do we drive change like right we mutate we mutate a variable and nothing happens so how do we then say and now update the dom and that
[01:04:47] 's true in the rust ui stuff too and in um you know web assembly ui stuff i guess in general um but it's not just that it's it's how
[01:04:55]  not only how do we change how do we update the dom when we've changed shared state but how do we make it comfortable to share state when this kind of pattern with a
[01:05:09]  long and you know a closure that lives forever that is a callback when an event fires that can mutate something is really uncomfortable for rust's model um yeah in c
[01:05:21]  plus plus it would be fine because you could just give it a pointer to that state variable and then it could update that however it wanted um yeah but that's how you create
[01:05:31]  like memory errors right that's why that's why rust is a language right to prevent the kinds of errors that can come about when you're just passing out pointers like that
[01:05:39]  willy-nilly um yeah so i guess it's it's probably useful to to pause and ask like if there are questions at this point yeah if there are things that
[01:05:48]  you want to talk about um i might stop sharing my screen for a second if i can figure out where uh stop screen i i i can also stop sorry if in the future
[01:05:58]  i can always stop sharing the screen so it's it's easier because then you don't have to go through that again um but uh yeah no i i think this is
[01:06:05]  i think this is interesting for a moment uh mostly and it was that last comment and maybe this makes more sense to the c plus programmer in me or whatever but um it's
[01:06:16]  funny because we we went through c c plus and we got to like c sharp and we got to the thing was like okay we're auto garbage collecting like that was the progression
[01:06:23]  where we're like okay don't worry about pointers and references that much like we're we'll create data structure stuff so you don't have to worry about that anymore and
[01:06:31]  we'll take care of it as you know dot net and all that java whatever but what this did was at that same fork in the road back then was like okay no
[01:06:40]  no okay well i mean we need references like you need to be able to point to things in memory but we're not going to give arbitrary pointers if i'm understanding this right
[01:06:47]  so like you yes you can keep a reference to something but you can't uh like share that like you could you could keep along that derived train of where that reference is
[01:06:59]  but you can't just be like yeah pointer pointer pointer pointer like so it's like it's very intentional and by basically removing half of the language to deal with that it required
[01:07:11]  new concepts but it meant that like um things are much more restrictive much uh you kind of get rid of this uh like whole category of problem if i'm understanding it yeah
[01:07:21]  totally i mean it's and this is why like the to be fair rust in the front end space sometimes feels like overkill because you can't cause the kind of security
[01:07:33]  vulnerabilities you can in like a server um with a memory error in a tab in chrome right however the thing is um yeah right this is this is the question um so the thing
[01:07:47]  is um i'm gonna finish a thought and then happy to talk about that um single language stacks are really good um like we all love having a single language stack um in
[01:07:59]  terms of being able to write you know an app that's one app that's javascript all the way down or that's rust all the way down um and the problem
[01:08:07]  is rust or c plus plus running on the server is just way faster and can take much more of a load than javascript running on a server so if you're gonna
[01:08:18]  write something that's the full stack in one language it's actually kind of awkward that we've taken javascript which is super well suited to the browser and put it
[01:08:27]  all the way down into the back end and now we're just being able to take back-end languages and put them into the front end because some of the rust stuff is
[01:08:34]  it's overkill in the browser the kind of memory safety but it's absolutely dynamite on the server because it lets the compiler do these incredible optimizations that give you this
[01:08:43]  really good server-side performance um so like i don't know if anyone saw primogen has been doing this little like leptos versus react benchmarking thing and we
[01:08:52]  got it down to the point where it's this crazy animation he's setting he has 1900 dom nodes to make a little terminal and then he's setting the class on each one
[01:09:02]  of them reactively to make an animation of scrolling text it's a ridiculous way to do something um but we got it to the point where the leptos version is like
[01:09:10]  15 20 faster than react on the browser right yeah on the server side it was able to take 30 30 sorry 30 times the load so like the response time for 150 simultaneous
[01:09:27]  connections to this rust leptos server was 250 milliseconds to get a 250 millisecond response time from the fastify react version he could only have five connections so the rust
[01:09:40]  the rust version could take 30 times the connections as the javascript version that's server that's impressive because i mean react is not a spectacle uh on this side but when
[01:09:50]  we're talking about other frameworks being faster than react in javascript land it's like a five times faster not a 30 times faster kind of thing like like like like
[01:10:03]  like you on a three-put thing you might see yeah yeah i i'd say the the in some really constrained crazy benchmark i might see 10 x against react and javas
[01:10:15] cript but that is the that's like using some like super contrived example and using like marco um so like it's like yeah that's that's that's that
[01:10:24] 's that's yeah it's like it's almost it's basically a whole order of magnitude beyond what even the fastest javascript yeah yeah yeah and so and that's
[01:10:33]  like huge right and i'll be honest right one of the cool things about the web is that i i think in some ways that the unsuitability of javascript for
[01:10:41]  the server has driven a huge amount of innovation and things like edge runtimes and stuff right like it's actually driven really cool innovations in how do we make stuff really fast even
[01:10:49]  with a slower language well and it's paired with the problem i mean maybe you might have opinions on this side but it's that on the browser perspective the network is the
[01:11:01]  bottleneck more than even the back end server so if we have to optimize like when you consider about the network travel we talk about hydration we talk about like that whole side of
[01:11:12]  things um savings that we can make on that side are feel like they're like 100x like or like like like so like i've made this kind of comment before that
[01:11:23]  this is might it depends on the scale of your javascript app like if your app is not that big it doesn't really matter but like i've made this comment that
[01:11:31]  improvements on the front end that come from using javascript on the back end or actually make a bigger difference to your users than the improvements you can make on the back
[01:11:40]  on the back end and and it's paired with the idea that like this terrible mentality that you can always throw more money at your back end like so even with that five you
[01:11:48]  could go up to 30 by adding six servers and you there's actually no solution on the front end to get that kind of gains unless you do that so i've been very
[01:11:57]  strong on the javascript on the back end for that reason and but i acknowledge it's because we're trapped to have javascript on the front end this is not
[01:12:04]  a property of javascript itself um it's just the property of the fact that you need the javascript framework um on the front and the back end to have
[01:12:13]  the same knowledge to be able to optimize for the front end so that's that's been my whole position on this right and why i've been like very skeptical not skeptical i
[01:12:21] 've been like it's very difficult and why people have had a hard time with a lot of my message here because they're like well we like our back end languages uh and
[01:12:28]  they're trying to do the split i'm like no if you actually want to get the best for users you can't do the split use the same language on both sides
[01:12:35]  and i even if you hate javascript you'll do better for users if you suffer through this um for stuff that is like very view oriented like the rendering like sure like
[01:12:45]  pull all the apis i need like any your expensive business line pull it all out of javascript don't do that but like the actual rendering piece having that information on
[01:12:53]  both sides um it can make a bigger difference overall because of the constraints of the browser but it's but it is those constraints that browser of only running javascript why
[01:13:04]  we're here today whereas if there were other language options that could be as viable on initial load as javascript which i don't think we've actually got there the yet
[01:13:14]  um then the whole equation changes but that's why i'm so pushy on javascript on the server right now even though my back end friends cringe terribly is because
[01:13:25]  literally that's how you can make the best sites right now yeah and for sure like if like timed interactive right is the the silver bullet that javascript still has over any
[01:13:37]  web assembly approach period um i mean the web assembly compilation is is super fast but you know comparatively speaking um if you build the same app in in solid js and in
[01:13:47]  leptos or anything in the wasm space the the time to interactive the load times are just going to be way faster in whether that's solid start svelte kit
[01:13:57]  whatever and like the the the you're exactly right the javascript loading time swamps the server response time in a lot of ways and in fact like let's be honest
[01:14:05]  especially because we have this javascript glue code i would be willing to bet that if you did this in a a rust wasm framework and you did it in a
[01:14:14]  javascript framework especially the the you know once we like the javascript glue code for leptos is probably the same side as like solid core right unminified
[01:14:27]  it's like 20 kb i don't know what it would be unified it probably you know right three or four or five or something but you you know it's not
[01:14:33]  just the wasm it is actually the javascript glue to do it um i'm gonna turn on my light because you're not gonna be able to see me about five
[01:14:39]  minutes because i forgot it's december um and i'll be right back and what do you think do people want to see how we could um implement a kind of pseudo redu
[01:14:47] x in about five seconds as as a solution to some of these problems yeah i mean yeah let's let's let's move that over in a minute yeah uh yeah but yeah
[01:14:55]  this is this is definitely interesting zone i i'm glad everyone is is here with us um because this is i i think there is a i think there's a lot of
[01:15:06]  interesting questions being answered here yeah sorry i was just talking a bit while you were going doing that um but yeah i i think i think it's it's definitely very because
[01:15:17]  like if there's potential to change that equation um at least in some way it's it's it's probably going to be around here so yeah okay let's let's let
[01:15:27] 's let's keep on going with the stuff i mean per that conversation we're just having right leaving aside the load times um if you could provide the right abstractions at
[01:15:39]  a framework level to get around all of this messiness about shared ownership and mutation um then the rust front end thing starts to look more attractive right because the hard part that we
[01:15:52] 've been looking at is like these rc ref cell wrappers all that stuff um yeah so i'm going to show just one other way of getting around this in pretty vanilla
[01:16:00]  um and then uh and then we'll look at like you we'll look at sycamore we'll look at leptose um okay so i'm going to start
[01:16:07]  sharing again all right i have to do that see see i still control it anyways and you got the little hider the little bar at the bottom yeah so this is this why
[01:16:24]  i will hide in the future just tell me and i'll i'll do it yeah sounds good um okay so um there's a little bit of like a kind of maxim
[01:16:35]  in rust worlds um which is you can either communicate by sharing memory or share memory by communicating in other words right if if i need to um if i have two separate things that
[01:16:48]  are running like my two different click handlers i can either synchronize the state between them by sharing some chunk of memory like this wrapped state yeah or i can synchronize
[01:17:00]  between them by sending messages of some kind um so what we're actually going to do is do like a tiny if you're familiar with yeah yeah because you're talking about shared
[01:17:10]  memory stuff just a question came up and i know it's not exactly related but i just want to understand some because i know that the system language you got like a multi
[01:17:18] -threaded kind of type logic and all that but the browser and stuff we don't and someone's asking uh can you do concurrent code in wasm um and and
[01:17:27]  along those lines well rust core value is safe concurrent code wonder if there's are ways to make the framework even faster what is the initial okay this is not related yeah so i
[01:17:39]  just yeah so rust rust core value is safe concurrent code yes are there ways to make the framework faster using concurrency no are there ways that you can do concurrency in
[01:17:54]  web assembly yes it involves using web workers and then using the web apis like is it message channel that you use i don't i'm not yeah yeah yeah yeah yeah
[01:18:05]  okay yeah and we already know and web workers we already know the overhead for that at least today is not worth it you know it's not going to speed up here if if
[01:18:13]  they introduced actual multi-threading in the browser right then that would be a different sorry within the yeah it's just not gonna happen right because everything that we're doing is
[01:18:23]  single threaded and in fact this rc ref cell stuff i'm doing this is the single threaded version there is a multi-threaded version that you would use like
[01:18:30]  if you were doing code on the server or for an app that you're running on your computer um it's it has a little bit more overhead so we're actually optimizing for
[01:18:38]  the single threaded case in this example um okay and somebody asked about pointers a point a pointer is just um a reference into a particular place in memory um and that means that um
[01:18:51]  you know you can uh you know when you allocate memory right you get this pointer into that it's like a javascript a reference to a javascript variable refers
[01:19:00]  to some object that like is in garbage collector land a pointer is like a raw pointer into memory um and it's the way you deal with different objects in different languages and stuff
[01:19:09]  but yeah it's not important for what we're talking about necessarily i'm just trying to think of how the best way to explain it right because when you get the reference you
[01:19:18]  have the the reference to the thing so you like you have the thing right and then with a pointer you uh like you almost unwrap it but to get back to the
[01:19:30]  reference like it's it's the actual it's the thing that's pointing at it that you can pass around yeah does that i don't i hope that i probably worse explanation
[01:19:39]  than your explanation that's fine and i don't actually do a ton of like the real systems programming stuff either so it's totally fair um the and what i would say
[01:19:47]  is the danger with pointers is that a pointer is literally a number that's the address in memory of that object which means if that if that memory is deallocated like
[01:20:00]  in c and c plus plus you manually allocate memory and then you free it and so if you still have a pointer into memory that you freed that's a pointer into garbage that
[01:20:10] 's not going to behave the way that you're expecting it to and that causes all these memory safety issues and the confusion for javascript developers here is that we implicit
[01:20:19] ly kind of pass references without even realizing it so you don't realize where that difference is like when we're dealing with objects and stuff like i i think i think like uh
[01:20:31]  i know there's a difference in javascript language specifically why that's like not the case and why we tell people not to think about bypass by reference but um and
[01:20:40]  value rather but the thing is like uh you you never think about this in javascript but like in most languages when you're trying to like pass an object into a function
[01:20:53]  it's not like you're actually talking about like when it's not like a simple primitive value you actually have to like say where it is like it's not yeah yeah
[01:21:04]  and rust abstracts over a lot of this and that's what the whole borrowing system is so like when you see me do things like um you know this and symbol i should
[01:21:13]  have explained maybe a little bit more of this with references um i recognized it right away yeah yeah yeah yeah not everyone else would have no not if you're if it's a
[01:21:21]  bunch of javascript developers this and is taking a reference of something so saying hey i'm not trying to take ownership of this object i'm just referring to it which
[01:21:30]  means i can access it immutably um i can access its fields i can do some stuff to it um but it's not mine it's a reference it's like showing
[01:21:41]  it's like pointing me to to somewhere else that owns this thing um so we so we did this whole thing right with like the the state being wrapped in rc ref cell
[01:21:52]  and so on um but there is another way to do this right which would be um to create an enumerated type we'll call it message and it's just gonna
[01:22:02]  have two variants so this is how you do enumerated types in um in in typescript right this would be like type message equals ink or deck right um so it has
[01:22:14]  two possible values um they have a lot more capabilities than the than the javascript ones that we might not see in this example um and then so we're gonna try
[01:22:24]  to do this like communicating um sharing memory through communicating so instead of directly mutating this state what if i created something that was like um message sender message receiver and this
[01:22:46]  is a just a channel that's going to be able to take four messages at a time not important um and these this is going to be beautiful so what if i send a
[01:23:00]  message saying hey i want to increment this thing instead of um instead of trying to mutate this this value so we're gonna do message sender dot send increment um and
[01:23:21]  then on the decrement we're going to send a message saying let's do the decrement um so these are event listeners um we don't need those clones anymore this
[01:23:32]  um this compiles it doesn't do anything it nor does it compile great okay so this this needs to be mutable so so we need to clone the message sender again
[01:23:41]  because it's the same exact problem that we've had right um right and i think this one we should just be able to move it yay okay so that compiles it
[01:23:55] 's not going to do anything um what if i then take this message receiver and this is going to be asynchronous it's um a little awkward this is how you spawn uh you
[01:24:09]  go out and you listen for a promise right you uh you have to do it explicitly in in rust um all right like future is that what the yeah yeah yeah so this
[01:24:20]  is a a future is a promise in rust um okay so this line right says um this is going to give me an iterator of of futures of promises this next so every
[01:24:33]  time i call next it's going to give me a promise that will resolve when there's a message that i'm awaiting and while there's some message um we're going
[01:24:43]  to do some stuff so let's go back to our count example yeah so this actually works so we're going to declare the count here and while we're getting this message we
[01:24:56] 're going to just see what the message is this is how we do a switch right interesting if it's increment this is okay right so yeah it's an iterator because
[01:25:08]  i'm like i'm thinking it's like generator but not okay okay yeah so it's it's a stream a stream is basically an iterator of futures in in in rust
[01:25:17]  um but what i'm getting at is this will just like run on its own right every like message it's like the next is it kind of like is it like a yield
[01:25:26]  in a generator like because like what causes that like you're not calling this function every time to like you're not pulling right like right so it's it's a push
[01:25:34]  pull so this this is a this channel is a kind of push pull um asynchronous system so every time we send one of these messages it it it resolves the promise we're
[01:25:46]  waiting for in this receiver and then this this await resolves and we have some message this is just a way of getting that that value yeah um and so then we can
[01:25:58]  do let's hope this works oh this is just because i forgot this needs to be some okay that compiled how do i let me shrink this all right the first working increment
[01:26:34] ing and decrement encounter we did it we did it guys we made a counter after an hour and a half on stream um but the so so the point of this actually right
[01:26:44]  um yeah was not the counter which is a dumb example it's that um this is the exactly the kind of um state machine reducer pattern that you see in a lot
[01:26:55]  of state management libraries like redux right um this is you have some state you have some enumerated type of messages um and then you have things that dispatch i forget what
[01:27:08]  it's called in in redux um these these event listeners are dispatching a message yeah and then this thing now this does not scale um because we've actually um we
[01:27:20]  we for reasons that don't matter this is the only place we can use this message receiver so we would have to drive our entire dom update from right here but maybe it's
[01:27:29]  actually not so stupid i mean i mean i'm going to throw out there that redux's whole approach was having one single global store essentially like obviously in practice you didn
[01:27:40] 't put everything into the redux store but there were definitely proponents that said like you should you should like that was like a design architecture that you're going to put everything
[01:27:49]  in redux if you wanted to right but you okay so you're saying though just like following here kind of on this progression you're saying that basically okay if you can't
[01:27:57]  mutate everything uh hoist it up and use a message system because then you don't have to worry about the borrower and and then the thing is that i
[01:28:05]  know about this and maybe i don't know if everyone knows about this is when you start going to this kind of like single driven message system something like a redux even x
[01:28:12]  state to a certain degree um it's it's it's basically set up for immutability um yeah because like you're you're getting you're losing any local information about
[01:28:23]  mutation you're basically just saying okay give me some instructions and generally the easiest way to communicate that involves like you know you start with maybe messages but then you're like okay
[01:28:33]  i'm just gonna make reducers or whatever you're gonna like essentially build out this whole system uh where you're doing what i call coarse grain uh change yep exactly and and
[01:28:43]  this is our reducer function right we we could have we could have done this more neatly we could have made this an update function on that state type um and maybe that's
[01:28:51]  actually what we'll do we'll call it state update message and over here we're gonna yeah now you're writing your reducer essentially yep um update and take a mut
[01:29:02] able reference to self and it's gonna take a message to that stage type yeah and now you see how i added this other thing this is where rust does start to have the
[01:29:11]  the dx and the um expressiveness in in things like pattern matching um right so i've just added this which you could do this with a tagged union type in javas
[01:29:21] cript right um but this carrying other data inside an enumerated type is is not as straightforward in javascript um right yeah so there's there's our reducer increment
[01:29:35]  plus one decrement minus one yeah and then this pattern matching really can be pretty advanced right so i'm saying and if the message is set name and if name is r
[01:29:46] yan then do something else and now rust is complaining at me because i'm missing a match arm what if name is not ryan right so this is just i'm going to
[01:29:55]  ignore that for now but that's that's how you can implement these kind of state machines the sort of thing that you might um reach for redux or xstate or
[01:30:04]  something is pretty um comfortable to do in native rust code because of the power of this pattern matching um and so on but so this model right like we just invented elm um
[01:30:18]  yeah if anybody's familiar with elm right the way that the elm model works it's model update view and so you have a model you have an update function and
[01:30:30]  then what you would do is literally have a view function um that is a function that yeah that it takes takes an immutable reference to yourself yeah and then you're left with
[01:30:44]  this problem um now you need some kind of virtual dom or something um so we're actually gonna um kill this here and look at you which is exactly this right yeah this
[01:30:55]  the it's funny because i feel like in javascript this was not the logical approach like approach to get to here that the react team actually came from a little bit out
[01:31:07]  of left field um applying kind of these these these patterns and like like even though like mechanically like because you're in javascript and you have to do stuff certain
[01:31:18]  way anyways like it might not be as that big of a difference this is where like react's best practices kind of derived from um you know outside because that was the thing is
[01:31:30]  before react we were doing we had like declarative views and updates and reactivity and all this stuff but react was like uh this is kind of messy we need we need more
[01:31:39]  structure we need actually more rules or best practices and they they borrowed it from here essentially exactly because in javascript world right we don't have memory safety issues if you
[01:31:53]  mutate something in an unexpected place right but you can still create logic errors by doing that i have personally written bugs in production that are unwritable in rust in j
[01:32:06] avascript by mutating things you know and you've done examples on stream these deeply nested objects and all of a sudden you forget to do a deep clone you do a
[01:32:15]  shallow clone and now you're mutating the object from some other component and the thing is and i don't know if this is is like you you're a little bit
[01:32:23]  lucky because you were using angular not angular js if you actually went back before that kind of influence we had something in all javascript frameworks called two-way binding and
[01:32:34]  um that's probably people will get all my case on this but like one of the most dangerous patterns when you have a system that um is event based like when you have so
[01:32:47]  many different abilities to uh like update things from all over the place um two-way binding comes a little less of a problem if you have better control mechanisms but um it
[01:32:59] 's still very dangerous and almost if you kind of walk into that world of where react came into where everything was like two-way binding it was just like mutate mutate
[01:33:08]  you know like popping popcorn everywhere um yeah so and that's not going to cause a memory safety issue you're in a browser it's a different sort of thing but controlling that
[01:33:18]  i mean that's that read write segregation it's the same idea of controlling what you can mutate where um and that model when you're doing it in elm which
[01:33:28]  is a totally immutable functional language or if you're doing it in rust where you really want to know um because the the problem right of that rc ref cell thing right
[01:33:38]  is it it when you wrap something that way it allows you to take those mutable references at runtime which is nice but you still have to write your code in such a
[01:33:49]  way that you're not simultaneously mutating something in two places so if you get particularly with reactive libraries it can be tricky if you get into a like a create effect you know
[01:33:57]  if you're trying to read something and set something within the same it's nested it can get a little bit messy you're like you're mutating something out from under
[01:34:04]  yourself and all of a sudden you've got an infinite loop or whatever um so that the the sort of clean apis of this mutability this this almost a mutable
[01:34:15]  phase and this immutable phase um are what's so appealing about the the elm thing and in elm it's all just immutable you do that sort of stuff that
[01:34:24]  you get in javascript where it's like you know an object and you're you know you're you're spreading the object so that you're not mutating it whatever
[01:34:32]  something like um you you actually can write beautiful code so this is you this is i took this example straight from their repository um but it's almost identical right in a funny
[01:34:42]  way so you've got your message with increment and decrement you've got the state struct they have this component trait so this is how you implement a trait for a oh okay
[01:34:51]  so sorry i thought you was like react but it's like straight up elm isn't it we're gonna see the two the two the two modes of you okay they have
[01:34:59]  a functional component version now um so it's straight up elm right because you've got this message type that's the message properties is component properties so elm is ide
[01:35:08] ologically opposed to components the entire thing is supposed to be one big tree you has components absolutely um but so you've got this create this is how you create the state i'm
[01:35:18]  just used to like the three defined section when you ever look at any elm code it's like one two three and i'm just seeing that block in front of me right
[01:35:25]  now exactly yep so you've got you know your your model right here and then you have the three functions create update yeah and it's the same exact thing i just wrote
[01:35:35]  um note this this update function returns a boolean of whether it the component should re-render okay there you go that is super powerful because you can do things where you
[01:35:47]  update state but you know that you don't need a re-render it's a way of controlling the yeah should component update yeah yep um should component update exactly and then
[01:35:57]  you've got your view um and maybe if you're not used to reading rust code you might not appreciate how elegant this is this is really really beautiful and really really a clever
[01:36:06]  solution because you have three you have you have two distinct things you have an update function that takes an immutable reference to the state of the component right and then you have a
[01:36:16]  view function that takes an immutable reference and so you know you're able to write ordinary rust code without those wrappers right rc ref cell everywhere when you have a
[01:36:28]  click they have this neat little neat little guy this context that you're passing in okay has a link associated with it and then you do dot callback and it dispatches a
[01:36:39]  message gotcha um and when you do that dot callback that sends a message to the runtime that's handling the component it calls the update function with that message it mut
[01:36:50] ates the value it tells you you should render and then you get into the mess well i mean before the mess i just wanted to say is react wishes that you couldn't update
[01:36:59]  state while you're in the middle of rendering right like that this like literally the view code here can't actually updates state like it's like impossible for it to update state
[01:37:10]  is what i'm seeing here and just so i understand hml exclamation mark this is like a macro of some sort like how are we getting it it's like template literal
[01:37:18]  it looks more like jsx no this is this is great this is great um so job um in rust right there's something called a um a proc macro procedural macro there are
[01:37:30]  a couple different kinds of macros macros run at compile time to to modify your code so a proc macro like like this right actually takes a stream of rust tokens and
[01:37:44]  transforms it into a stream of other rust tokens so it's basically doing a jsx transform at compile time but it's native to the language it's not like an external thing
[01:37:55]  um and so you write these proc macros using rust code and so pretty much most of the frameworks have some kind of thing like this they call it different things we call
[01:38:05]  it view um but this basically lets you write a very jsx type there are a couple of things that are different like you notice we have to wrap the strings in quotes and
[01:38:14]  then in you you also wrap them in curly braces which is a little awkward um but yeah i mean this is jsx right um it's it's pretty close you get
[01:38:22]  it yeah just just seconds or did we lose the stream for a minute or okay if people are saying it's back sorry i think the twitch stream dropped for a second but i
[01:38:32]  think we're good okay um okay yeah so this is this html this is this is giving you vdom right this is this is your jsx um this ht
[01:38:42] ml type is oh look they even give it to you pub type html equals vnode so that html that it's returning is just a virtual dom
[01:38:50]  node um so so this is super elegant but it relies on a whole runtime because the only way that you can define this totally declarative immutable dom right like this is to
[01:39:04]  have a virtual dom that's powering the whole thing right because there there isn't a there isn't uh like you don't replace all the dom nodes every time and this
[01:39:12]  is literally a render function exactly exactly and and so the the secret right this is why right rust this stuff is a little awkward you you you need that rc ref cell
[01:39:23]  wrapping somewhere and so they just do it when you when you implement component it wraps it around this data structure just like we had in our example it's wrapping this in those escape
[01:39:34]  patches but you if the user don't see it because what it does is just does that borrow mute that we did and then it runs the update function that's interesting so
[01:39:43]  the state borrow does the view so the model is still defined outside of the component like you say like this is the structure of my state um and then you ex like implement i
[01:39:55] 'm gathering that's like extend it's like a class it's like yeah this is just yeah this is just the way that in rust you implement methods on something um so
[01:40:04]  you have you don't have um function update this is like invalid you could never do this for defining okay um a method or a function on something that the data structure itself is
[01:40:17]  defined with its data and then you do a separate impl block to do methods so i could do like um okay and then you know you can do whatever you want so this
[01:40:32]  is this is a trade um like an interface okay um yeah and you're implementing that interface for this data section yeah um and then once you've done that right you says if
[01:40:43]  you give it a component i know what to do with a component what i do with a component is i wrap it and i run it in this event loop uh i give it
[01:40:50]  this context and i let it dispatch these things and when it dispatches them i go through my whole little loop um gotcha yeah the downs so this is super clean really
[01:41:00]  nice um a lot of advantages to it it's almost like you have a separate little redux store or a separate little state machine powering each component that gets super verbose
[01:41:10]  though because now for every single component you want to define there's no such thing as a function component in this style you're defining a data structure you're defining a message type
[01:41:21]  you're defining all these functions and to do like a very simple set state is like okay now i'm gonna go up here i'm gonna add something else right it's
[01:41:29]  just people don't like the developer experience of that for for you know good reasons so you get um in you a functional component version too which is um gonna look more familiar maybe
[01:41:43]  to folks um i added a bunch of comments about the implementation here that we can ignore for now okay so this is this is now we're defining a function component it's
[01:41:51]  that same function app which returns that html type and now we've got let's state equals use state um interestingly it doesn't return an integer it returns a type that
[01:42:01] 's called use state handle um okay and then you've got your callbacks these are a little awkward right because now you've got let's state you you have to manually clone
[01:42:12]  that state now and then move it into this wrapped callback but then you can do something that's state dot set so it's a little bit like a set state kind
[01:42:20]  of thing that's funny so you're like inventing hooks here okay these are hooks yep yep these are hooks this is exactly inspired by react hooks this comes after react hooks and
[01:42:29]  it's a way of doing exactly that kind of hooks based stuff um but you know what i looked up what use state handle is okay it's use reducer handle fine
[01:42:40]  what's use reducer handle value isn't isn't rc i'm laughing because in react this is also an implementation detail you you stayed in react is actually built on top
[01:42:49]  of use reducer i just yeah i don't know about the process of developing it but it's very clearly react inspired and it may be the sort of thing where they implementation
[01:42:58]  is inspired too um but if you if you look at what a use reducer is okay you've got a value that's wrapped in our good old friend rc and then
[01:43:05]  you've got just dispatch so it's almost like every use state is a mini component in the old style yeah um so now okay you've got that stuff um callback
[01:43:16]  by the way that's another rc type um use state handle set is is kind of interesting it's doing that same it's actually not interesting it's doing that same component
[01:43:24]  work we talked about um so just just out of curiosity or do people like this came after so i guess people do like using this like this approach this is what they're
[01:43:36]  moving to and you get benefits right because just like with react hooks you get composability you can compose hooks you get this sort of inline um i could create another use state
[01:43:48]  here much more easily than than that three-part thing um but you start running into those same react problems you said like oh this is great you don't have the issue of
[01:43:57]  mutating state while rendering um this gets you into all the same kinds of issues because this is a render function now right so this is going to rerun every time so
[01:44:07]  you need to do all that same react stuff of uh what does it mean for this to be stable between re-renders i mean it's all the same stuff um and
[01:44:16]  you just you know it looks very similar same jsx whatever but so in in a sense they shrank the components down that they had into those individual states but not in
[01:44:25]  a reacts not in a pre-act signals excuse me kind of way because every time any of the states you have like if i create another state um it's going to
[01:44:36]  re-render the whole whole thing so even though um i had this other thing here right current state two yeah yeah um in a sense this is a micro component but it is
[01:44:51]  going to cause the whole outside to re-render um yeah and so it's it's fine it's a fine-grained implementation of a coarse grained yeah yeah
[01:45:01]  yeah yeah this is this is react hooks yeah or or it's actually maybe it's like view right it's it's not really fine-grained reactivity so that's
[01:45:10]  different but it's right but it's finer grained primitives driving a coarser thing but it's react hooks it's react hooks yeah because like underneath it's just
[01:45:19]  calling like set state essentially like update like dispatch message read to recall render function well it's interesting because the reducer function that they create for this use state i that's
[01:45:33]  what i did look up the the reducer function is just like blow out the old value of the use state and set it which makes sense because you're doing set state um
[01:45:42]  but it's like these are fine-grained in their cycle but okay that that cycle doesn't it it then calls when this updates it calls update on the whole component
[01:45:56]  um it calls interesting yeah okay yeah yeah so i see i see what you're saying that's why you were comparing it more to viewer pre-act signals yeah yeah yeah and
[01:46:05]  it's not a great comparison um but but yeah okay i see what you're saying yeah it's somewhere in between react hooks and yeah anyway um so that's that's
[01:46:13]  the kind of vdom this is the main this is you know the big library with 23 000 stars on github or whatever um i want to take a look at where
[01:46:22]  do i have sycamore seven good i want to take a look at sycamore sycamore is um i remember this this framework was called maple originally it was called
[01:46:31]  maple it's a little confusing yep um but so sycamore is like the the original kind of solid inspired rust framework um i used it a little bit there are some
[01:46:39]  differences from from leftos whatever um but you can now you see right this is a solid type framework so where'd my rest analogy go um so you have you know let counter
[01:46:51]  equals signal new um increment uh but wait a second okay we still have to clone the counter because this is just we're closing cloning it we're moving it into this closure
[01:47:03]  to set it okay right we've got this stuff about dereferencing of a variable um all this kind of stuff um i gave you okay or this shorter version right um
[01:47:13]  so now you have this like cloned macro so that instead of manually cloning stuff you can do this you can just tell it clone this and move it in um it
[01:47:22]  doesn't show off really well in this in this example but let's say i had um my counter to equal signal how about i do like a create effect um so funny like
[01:47:34]  the little syntax things that i'm familiar with because of like c type languages that the audience might not be familiar with because that's that's interesting this rust doesn't have
[01:47:45]  a new operator is it just like is that a static method on this that's exactly right yep so this is so it's it's sort of a convention that you define a
[01:47:55]  new and so right so when you have this this is a static method on the signal type so apologies to any javascript people who have no idea what we're talking about
[01:48:03]  um it's it's you know it's not the most important but so so what i want to say right was look at this um uh this let's call this create
[01:48:12]  effect um sycamore this is sycamore 0.7 i want to be super clear sycamore 0.8 solves this problem sycamore 0.7 and
[01:48:25]  prior um this is not a dependency array um you don't need dependency arrays it's fine-grained reactivity it will it will auto-track its dependencies but you
[01:48:37]  end up having to create a dependency array of sorts because you need to clone those count those those signals to move them into the closure so that same awkward right stuff to move it
[01:48:48]  into the closure that we were doing earlier um you had to do totally unnecessarily um right and the rest of this example is the same exact stuff that we've seen um so
[01:48:58]  sycamore eight and leptos are both trying both kind of attempts to solve this problem in different ways um just can i can i see this a little more like
[01:49:06]  spend a second can you scroll down yeah so they also they're using uh a different syntax it looks like pug i know it's not but it's probably this is probably like
[01:49:16]  hyper script type syntax or colon instead of the jsx syntax well it's funny right because you still need a view macro because yeah this stuff looks like more like a rust
[01:49:27]  data structure but it's not um and it's got this parentheses for attributes it's got these braces this is as far as i know their own domain specifically i don't think
[01:49:38]  anybody else uses this um it reminds me of pug which is funny uh i've used a lot of white white space matters uh templating languages from the early 2000s and 10
[01:49:47] s and they look like this a lot even marco concise mode looks like this a lot right right um but so it's basically and yeah sorry i kind of scrolled
[01:49:57]  through this but to give it credit right um you've got your your signal you've got this increment that's setting the signal the decrement that's setting it um we
[01:50:07]  don't need to talk through all this because it's the solid stream right but um when you do these event handlers and this get this is fine-grained reactivity
[01:50:17]  so this like solid this is a setup function not a render function and it's just gonna cause this text node to update over and over and over even with the funny wrappers
[01:50:28]  this already looks cleaner in a sense in my opinion than the the new u function components right interesting interesting but that's just because i i know the clone is awkward it was
[01:50:41]  just there's something there's a bunch of extra stuff in there i i i don't and in the u functional example we had to clone it too yeah yeah and yeah i
[01:50:50]  just this just seems noisier i don't know anyway yes yeah yeah okay so sycamore eight right um uh there are two types of um i i hesitate even
[01:51:01]  to get into this right but there there's something called copy in rust and there's something called clone yeah so cloning a data structure is like i can clone a string which
[01:51:13]  is going to copy all the bytes in that string and give me a new string um i can clone a data structure it gives me a deep clone of it right that's
[01:51:22]  a totally separate structure that gets a little it's actually maybe a confusion in the rust language which is a problem but with something like rc which is that reference counting pointer in
[01:51:34]  that case cloning it actually is because you're cloning the pointer not the object inside it it's still it still refers to the same thing so the rc is the
[01:51:42]  same that's why we were able to share that object between two things um there's so that's cloning you have to do it manually yeah um there's something else
[01:51:51]  that's copying and so for a value type like a number that's super small in memory you can just copy it and you can copy something if it's small in memory and
[01:52:02]  if just copying those bytes of memory gives you the exact same thing so if i take two and i copy the bytes and it's two those mean the exact same thing basically
[01:52:11]  right like a two is a two yeah the stale closure thing we got into is that it's not the same two it's now a different it's now a different two
[01:52:20]  um but so if you copy something you can then move it into a closure without having to clone it explicitly so when you look at this look at how much better sycamore
[01:52:31]  0.8 is than 0.7 this is the whole component so create a signal yeah then we have the increment callback the decrement callback the same exact template
[01:52:41]  that's it there's none of the cloning you'll notice create signal returns a reference to a signal a reference is a copy type and then just like um we're wrapping
[01:52:55]  those escape hatches the signal internally is doing that wrapping but you don't need to worry about it it's just giving you a reference back the signal you can move it
[01:53:06]  around whatever um anybody with rust experience um may start getting nervous um because this reference now has a lifetime um lifetimes are one of the trickiest things to work with in
[01:53:19]  rust in my opinion um they're one of the things that trip people up the most in terms of like fighting the viral checking or whatever um it's a really clever way of
[01:53:28]  solving this problem it does involve some unsafe code in their internals and unsafe code in rust doesn't mean something is necessarily a problem but it means you're opting out
[01:53:41]  of some of the safety guarantees of rust right um because right this in a sense is not legit you're creating a reference to a signal the signal is going to be dropped after
[01:53:52]  you run this function and then these closures are accessing that signal so sycamore actually those really clever stuff where they have this scope they introduced this notice in between 0
[01:54:03] .7 and 0.8 um the scope now owns the signal and the scope actually also um i have to look back at their internals i think the scope owns the event
[01:54:14]  listeners like they they do it in a clever way so that it can't it doesn't cause problems but it is tricky like they've had they've had issues they have
[01:54:23]  an open issue right now in their repository with like a problem that one of the rust safety checking tools has given them with their implementation right it's tricky to do this it also
[01:54:34]  um once you start i don't have an example to look at but once you start um using child components and things you get into problems because the lifetimes have to
[01:54:44]  match up so you start doing these like generic lifetime annotations um on things and it gets just this is just a lifetime it like it gets complicated pretty quickly because it's dealing
[01:54:58]  with references because you're still living in that world of memory safety when it's giving you right this is something um and i'll just show you a little left host code
[01:55:07]  um of the same exact thing this is i think probably the example that's on the readme anyway you you have scope as well are you using using the same kind of mechanism
[01:55:20]  yep we have um because i love you ryan we have read write segregation here by default um uh yes that's lovely and then it's the same exact thing right but so
[01:55:28]  you notice what this is returning is a read signal not a reference to a read signal and we're somehow still moving it into this closure without copying it sorry we're copying
[01:55:38]  it we're doing that without cloning it um and then it's you know you'll see it's a jsx type syntax again um right this has actually turned out to
[01:55:49]  be super handy because you can do things like um uh so i can do like class equals if i knew any tailwind i would be able to actually do this um tail
[01:56:00] wind cli just works with this because it actually does like pattern matching on things that look like jsx and that's cool our syntax is close enough to a mix of js
[01:56:10] x and svelte because we have some like yeah of this stuff going on um yeah it will actually tailwind just works with it i didn't realize i've never used
[01:56:20]  tailwind before somebody asked and they're like hey do you know if tailwind works with this and i had no idea i just used css and they tried it and it
[01:56:26]  it just does so that i mean it's an advantage to using something that's a not a standard standard right um right but this is this is the same thing but the
[01:56:35]  way that we solve that problem is um rather than giving you a reference that can copy into stuff the signal type is actually just like a small id a numeric id that
[01:56:49] 's a reference into the reactive system right um so if i uh this read signal structure this is a little noisy you can ignore this um it just is a runtime id and a
[01:57:06]  signal id and both of these are basically array indexes so when you're passing around a signal in leptos what you're really passing around is just some kind of
[01:57:17]  index into the reactive system which is really handy because it means you can copy it super easily that's like eight bytes um you can pass it around it doesn't have a lifetime
[01:57:26]  because it it you know you can pass it around you can throw it away it's a stable reference into the reactive system you can serialize it alive yeah so i was
[01:57:34]  going to go this means that every single reactive node actually has a a stable id uh yep and the reason i did that was not for resumability reasons i mean when i
[01:57:46]  wrote it this way i had an eye on that idea um but the reason i did it was for rust memory and ownership reasons because now all of the signal values and all of
[01:57:54]  the subscribers and everything live inside one runtime data structure and it just hands out these ids and so all your effects and all of your callbacks and stuff just have a
[01:58:07]  little id um and so yeah i mean you can you can serialize the whole reactive graph if you run it once on the server you've got all your dependencies and the
[01:58:18]  entire thing is like just these short little numerical identifiers um uh so that's just a slightly different way of solving that same problem right right right yeah and just for clarification on
[01:58:30]  this part um okay you you guys don't have the over what i call the over wrapping problem because it's still runtime reactivity you can like not everything needs to be a
[01:58:41]  computed you can just pass around expressions as functions essentially or like closures yeah move blank and yeah this is still a thing okay yeah so yeah and then at the point of
[01:58:55]  execution on the server you would just like col you'd be collecting those nodes anyway so you can then just grab the ids off them okay yeah i mean i i have not
[01:59:07]  i have not tried to do this right you said this is what you would do because here's the issue this is the the big problem and that quick has done so much
[01:59:15]  work to try to solve you don't actually it's not actually that um hard to serialize the reactive graph if you implement it in this kind of way what's really hard
[01:59:24]  is to know that this thing depends on set count and i think to do it we would have to wrap every single one of these in some kind of a macro and it
[01:59:33]  would be it would be hard i think it would be easier for solid because you're you you can already because the compilation isn't baked into the language as much you have a
[01:59:43]  little more flexibility in it um yeah but it's still really hard i mean it's really hard because what all what you need to know is not just which signals update which effects
[01:59:53]  but which callbacks update which signals um and that's the hard part to get out of this at runtime because you don't run these on the server so you can't
[02:00:05]  track it like at yeah yeah and what uh really smart stuff that quick does is they like they with their uh event handlers and js like they like add extra annotations it
[02:00:17] 's not like they can come like marco we had a cross file compiler that like literally analyzed the whole thing he knows everything compile time and that's what marco six
[02:00:26]  does quick does a hybrid it just annotates it with the necessary information so that when it hits it again at runtime it can collect it in a certain way that it knows so
[02:00:35]  like it's it's kind of like the 50 50 they didn't want to have a compiler that spanned across all the files so they compiled in the information so that they
[02:00:43]  could hit it at runtime right anyway right yeah that's yeah it's very that's very very clever um yeah so this is something that like was it's funny one of
[02:00:52]  the first issues on you know anybody opened in the repository was like consider adding resumability like quick and it's like yeah thank you that issue is going to be open for
[02:01:02]  a little while um but it is i mean people are clearly excited about these approaches and oh there's the one other thing that i would i would note is like we do
[02:01:08]  have this um you can just set count um right or right and that's the function version yeah mutable reference to the thing and this is really handy for stuff like um if
[02:01:20]  you're working with a big array like one of the differences in the js framework benchmark stuff is when we're mutating an array we can actually mutate an array it's
[02:01:29]  it's almost like everything i've never used create mutable yeah in solid but it maybe it's like that um it's like every signal you can mutate it internally
[02:01:38]  which means you can push something onto uh of an array a vector which means you don't have to clone the entire thing which it definitely is a saving the de-optim
[02:01:48] ization there is that every time you call the update even if the value doesn't change it's gonna trigger um its dependencies because um you're telling it that it's updating and
[02:01:59]  if you do a check inside here uh no we could put some bounds that require something to be um right the challenge on the reactive side because technically we have create mutable
[02:02:11]  and we also produce which lets us do it is that the proxy overhead is not insignificant and i'd like if you and if you do something with a proxy and you're like
[02:02:23]  i'm going to unshift i'm going to put something at the front of the array it changes the index so it literally goes through every element of the ray and
[02:02:31]  it hits the proxy getter through the like the or the center like literally moves everything one by one up the array so like you'll like if you have a thousand element array
[02:02:40]  and you unshift you do a thousand pro like a thousand proxy hits yeah it's funny there's there's a guy in our community who's working on um a new
[02:02:46]  renderer right now which is really cool um but we had a very similar issue where it was like why is why is remove row so slow and it was like he's
[02:02:56]  doing this key diffing and because removing the first row just spat out this result of removing one row and then moving 990 rows 999 rows up one it's that same
[02:03:07]  like when you're mutating something sometimes you accidentally um uh you've caused these issues in in the rest of your implementation i think improvements of proxies have kind of
[02:03:17]  changed the equation and maybe i like i should look at it again sometime but like generally speaking when i tested it early on it was it was like for like stuff the js framework
[02:03:25]  it was just like clone the array it doesn't matter like compared to actually like hitting the proxy overhead um but yeah yeah no it's super super interesting uh this like the
[02:03:36]  serialization acts as you mentioned it it's more than that to because you have to you have to replace the lexical scoping that is the other trick um to doing
[02:03:46]  the resumable stuff uh could you let those be more quick like yeah so someone actually literally right exactly yeah and then and it's interesting because quick like this is actually where
[02:03:58]  i've been sitting and stuff and maybe we talk a moment about this because people are here it's like people don't realize this about quick because of like they use react
[02:04:07] ivity and like people and they use it to wake up stuff too so people are like oh okay so like what's the difference between solid and quick or whatever and and what they
[02:04:16]  don't actually realize is quick is more like preact than it is like solid like it's actually a vdom library that like when you update a signal you rerun the
[02:04:24]  whole component or load the whole component in the page um but what they've done is they figured out like if you get the signal all the way down to the vdom
[02:04:31]  like you can just update the one thing and not ship the component for that one specific case so it's actually the same as preact signals they have that trick where if you
[02:04:40]  get the signal all the way into the vdom the biggest difference is quick saw solids api and was like okay this is really like the preact signals way is kind of
[02:04:48]  like a really awkward because now you're like is signal like you're suddenly in this weird zone where you're like chaffing the check and you have two different types of
[02:04:56]  things like signal versus not signal and you have to design your components that way it's really awkward dx and and and and so the guys from quick were like no no we
[02:05:04]  want to like solid where like we don't care but so they use the compiler to kind of go yeah it could be signal like like essentially and if they lose the optimization trail
[02:05:14]  anywhere like if you go count plus one they're like okay this might not be signal so now we're going to pull in the whole component again but like they let the you
[02:05:22]  know get most of the dx benefit of solid still there but i want to point out that like they're they they are not a fine-grained renderer so that
[02:05:31] 's why like like it doesn't have the same kind of performance profile of leptos or like solid that we're talking about here um but the problem is when you go
[02:05:40]  into fine-grained renderer and fine-grained on this stuff uh it's it's it's even harder like to be able to do those things like those
[02:05:50]  those look kind of like pre-act style hack kind of thing that we're talking about here doesn't won't work for you anymore like because literally like the whole system is
[02:06:00]  worked off these partial pieces and like that's what mark that's what marco 6 has been taking so long it's it's literally the fine-grained stuff plus the
[02:06:07]  compiler um like there's nothing else like that but this is where the challenge is because i was sitting there with manu and it was and we're like i we were like
[02:06:16]  what's more i was like i think this is going to come down to like the splitting what's more important quick's ability to fine-grained async split the
[02:06:24]  javascript code at those points or composability of your of your hooks because like they're kind of like hesitant they're like uh like drive signals and like hooks and stuff
[02:06:34]  requires a lot more dollar signs and a lot more like you don't need to but like it's a lot more work to do composition but they also don't want to lose
[02:06:42]  the ability to not send the template so they're like okay maybe we can inline computeds um you know which is like called the over wrapping problem um but they're
[02:06:51]  not sure they want to give that power to the end user because then it's like this whole the the their boundaries on dollar sign boundaries just explode um exponentially so like this is
[02:07:03]  kind of one of the the challenges here where we're sitting here um talking quick and solid was that like a perfectly fine-grained renderer might make resumability
[02:07:13]  um more challenging from the serialization standpoint like um but not resumability sorry resumability could be fine because resumability is just not execution stuff you can make it
[02:07:24]  resumable but the the lazy loading code bit yes would be would be very difficult so that that that's kind of an interesting point i just want to make out because
[02:07:35]  we were talking about on terms of that distinction that that um it isn't resumability i think you can get resumability both ways because resumability is just about
[02:07:43]  not running the code and being able to unwind um like some of the closure like even the granularity of unwinding the closures only matters perhaps as far as the
[02:07:55]  code blocks in which needs to execute and uh like when so like i i i think it'd be interesting to play with that granularity and loosen it up because like shipping a
[02:08:06]  bit more extra javascript code doesn't really matter if you're not running it so so like like i'm obviously on large javascript that's not true but
[02:08:16]  like on on smaller javascript that's that's interesting so that's that's why i like i'm kind of like in this interesting place because like i think the merger
[02:08:24]  of the the concept that we're doing of lepto solid here and quick might be very very difficult um to like it's like that cost triangle like i right now
[02:08:36]  marco6 is the only thing that um that i know that can somewhat like probably solve it but they're even they're not doing the fine-grained async splitting
[02:08:47]  of the code i think that's like a really challenging challenging piece like basically they might be at odds with each other essentially like the fine-grained performance uh versus the fine
[02:08:58] -grained lazy loading like they they might actually um you know like it's like this trade-off might be a real real thing and we we might have to figure
[02:09:08]  out where the right balance is between which side needs to um get uh loosen up a little bit if we want to get both solutions i i know this is a tangent but it
[02:09:18]  was just something i was thinking about and the problem right now is like we're very much in our own camps because i'm like i would not give up composability for
[02:09:27]  anything right and and then i think they're very attached to their lazy loading code thing so um it's gonna be interesting to see how this develops sorry i just went on a
[02:09:37]  tangent i don't know if you have any thoughts or you know it's great i mean it's it's really interesting in the rust web assembly conversation just to kind of
[02:09:44]  loop back to the state of web assembly and i have this will i think lead into a last little demo that i i want to do um the biggest weak point right now of
[02:09:55]  web assembly is code splitting and it's actually kind of interesting because web assembly does streaming compilation so you usually have one monolithic wasm file but it gets compiled as it streams
[02:10:09]  down chunk by chunk from the server in the in the sense you know javascript you have to wait for the entire javascript file to load and then you can
[02:10:17]  parse it and execute it um but wasm because it's compiled can you know the compiler can arrange things in such a way that um each section can be compiled independently as it
[02:10:28]  as it comes down and so the files tend to be larger but there's almost a weird way in which like the javascript bundle splitting and code splitting is almost a
[02:10:37]  way of creating streaming compilation for javascript when it's native in in wasm but the problem is that you can then get that main.js down really small and do
[02:10:47]  interesting things with lazy loading code and stuff that right now you just can't do in in wasm there is a tool that's just come out that's for um ms
[02:10:54] cripten which is sort of the more the c plus plus plus ecosystem of wasm that allows you to split something and it does this interested like instrumented run it's
[02:11:03]  called wasm split and it and it kind of splits your file into two um and it almost makes it look like it's just a slow synchronous function call the first time you
[02:11:12]  call something in that other bundle so it helps with that initial load time um but the load time is like the time to interactive as you're downloading in that streaming wasm is
[02:11:22]  still a is still a problem um so part of what what i've been trying to do is how do we develop patterns like remix patterns like solid start patterns that work before
[02:11:31]  your web assembly has actually downloaded um i have this this demo i'm just going to do there's this great build tool someone in the community made called um cargo leptos
[02:11:42]  which does like a um it's almost like a like a live reloading dev server but it compiles both the web assembly for the client and the the server side um
[02:11:55]  and i was i was just messing around with this before we we got on the call so it there's a chance it's broken like any demo that you've just built before
[02:12:03]  before you start right um like every single stream yeah yeah exactly and you know i don't know why it actually needs to be recompiling right now but that's fine um but
[02:12:13]  this so this example is basically um to show you while it while it compiles um this is our kind of solid start e type thing right um oh it's because i
[02:12:24]  have rust analyzer on maybe if i that's going to cause me problems whatever we'll let it go um so if you if you look at this right this is just a
[02:12:33]  single file application basically um it's checking if you're on the server and then sqlx is kind of a type checking sql interface for rust so it
[02:12:43] 's accessing the database um it's doing this register server functions which we'll see in a sec um okay and it's defining this studio structure and then we have these server functions
[02:12:54]  um which you all are familiar with we define them up in this scope but this is defining a function that if you call it on the server runs the body of it um
[02:13:03]  and if you call it on the client does an async call out to the server to run it that's cool to see that even here because that was like one of the
[02:13:12]  new things that we're just playing with but i know and you guys are the first other framework i've seen do this now that's i really i really felt fred's
[02:13:21]  comment at that panel that you were on for what are you excited this year stealing whatever ryan's doing yeah um there are a lot of benefits to someone else innovating
[02:13:29]  and then you pick up the good pattern right but so we've got this you know this is like get to do whatever i um you know we've got one to add a
[02:13:37]  to do delete a to do um and then it's you know us very similar nested routing right um creating a resource to load the to do's using this get to do
[02:13:49]  server function right this um this is a pattern i'm still trying to figure out how we handle um mutations right or how you how you know when to refresh something so we
[02:14:00]  actually have these uh a multi-action and a server action and i have this little version signal on them and every time they run this updates um which means if you if you
[02:14:11]  depend on them in your resource this is a regular resource if you depend on them in this resource um right whatever week the second argument it's going to rerun it's
[02:14:21]  going to recall this get to do is every time you mutate it yeah yeah yeah exactly because our thing is we built i mean that part was like easily built on top of
[02:14:33]  resources but more than that we actually built a lot of this mechanism around the concept of routing so like it was like it was like if you do a mutation um and we got
[02:14:43]  this from remix that idea that like we will just refresh all the data on the route um and but then when you do forward navigation we're only fetching the data for
[02:14:52]  the new partials that come in i'm actually documenting this kind of behavior and the difference between new navigation versus update semantics because i'm working on a new generalized requirements site
[02:15:05]  proposal for taking if you've seen our movies app demo at all the one with the client side hybrid routing like this like we basically send no javascript and have like
[02:15:14]  a single page app experience um there's a lot of optimizations and stuff that people that we haven't done and that people aren't aware of and i'm trying to spec
[02:15:22]  out what it would look like if possible to make a make this hybrid routing uh universal solution uh anyway sorry a little tangent but yes no that's that's fine i need
[02:15:32]  to actually check yeah good okay um right so here this is just um you know crash um there we go uh so this is having some kind of issue when it should be reload
[02:15:45] ing whatever um but you can see that little pending state right for a few seconds while it's doing that work um and then it should be reloading this data and it's
[02:15:55]  not um so this is great like this is cool this is a a progressively enhanced form right like we like that stuff um if you look down here i have this nice little
[02:16:03]  multi-action form component it's connected to this action it's awkward to do add to do dot form right like you have um but it's the same kind of thing um
[02:16:11]  yeah svelte kit went this direction yeah yeah i'm actually sending the arguments here as a url encoded um form data type thing right so you can actually add
[02:16:27]  arguments here um if i had like an input type equals hidden yeah yeah that's same equals whatever i could add that as an argument up in my server function right um yeah and
[02:16:38]  the benefit of doing it that way instead of with json is um is this that we're just gonna hope works right this is the thing i was i was fixing right before
[02:16:47]  we started i'm gonna turn off web assembly okay oh so oh this is interesting because what you're saying is progressive enhancement has even a higher bar benefit for web assembly because
[02:16:59]  it's not even just it's not even just turning off javascript it's like it works without web assembly yeah of course tell me you tell me that time to interactive
[02:17:07]  matters on this application right the the cost of wasm and time to interactive this is interactive this is interactive with web assembly web assembly this is fine the links work if there
[02:17:21]  were links the form works if you structure it correctly this is a multi-page app written yeah in a nice rust front-end framework running with no web assembly at all um
[02:17:32]  yeah it's much better if uh you know if i don't screw it up of course and if it's you know if it can do it and it actually gets the
[02:17:41]  stuff right um it's much nicer to do the progressive enhanced form we had that nice little optimistic ui for a second like that's cool that's that's good yeah but
[02:17:51]  i think this is the way forward for web assembly stuff in a lot of okay that makes sense i am not smart enough to solve the code splitting problem with web assembly i hope
[02:18:02]  that somebody else is that's so out of my wheelhouse but this kind of stuff of um progressive enhancement right now we have just a rust server side app i'm i
[02:18:12] 'm putting an artificial delay on this because it's all on localhost and it's a sqlite database it would be it would be you could not see the change
[02:18:19]  um just for the optimistic ui but i mean you now have a super fast rust web app that works even before web assembly is loaded nice yeah and that's a pretty
[02:18:30]  good deal to be able to write that in an isomorphic full stack way as if you're writing front-end code you've got this co-located server function
[02:18:38]  up here doing its thing like i really like this pattern i um i stole it from you i stole it from remix i appreciate you all very much for the work you've done
[02:18:47]  but i think this is the way forward for web assembly stuff because this can be a super fast app and then it benefits from the web assembly on top of it yeah no
[02:18:57]  that's that's great i i mean you might have not heard my long ransom pe is no replacement for proper hydration and it can be confusing but the difference is i'm also
[02:19:06]  talking in a zone where javascript frameworks are using that for as a or like for complacency you know but on like you know what i mean like i i've had
[02:19:17]  long debates with the remix guys that like like there's a if you land on a page and you click a button and like again this is i mean over exaggerating but
[02:19:27]  like like you click a button and does a full page reload versus if you had waited like half a second later and it wouldn't do a full page reload like the the actual
[02:19:38]  the experience drop off is actually considerable um which is why i didn't like people i didn't like the argument that uh progressive enhancement is like a replacement or like like like
[02:19:50]  like like it it it removes our responsibility to solve hydration right but on the other hand um this is also as you mentioned like web assembly is not at a place where we can
[02:20:03]  actually solve those problems whereas in javascript i think we are in a place where we can solve those problems right so like i i think this i think this makes a ton
[02:20:12]  of sense in terms of getting like adoption and stuff in because like now you can go look okay like you don't have to necessarily suffer it the page will work um you
[02:20:22]  like this this is a very compelling argument for people building full uh uis and web assembly as i said progressive enhancement is important in general because javascript doesn't always work
[02:20:34]  there's so many reasons why you want to build uh things that are progressively enhanced it's really uh it's funny we call it progressive enhancement but it's really the other
[02:20:42]  thing uh was it uh graceful degradation iteration yeah exactly that's what that's what it is um yeah so exactly i think because not even if you're on like an older
[02:20:54]  ios or older android it might not even support web assembly at all like you may have a device that just won't load it at all and if you have one of these
[02:21:01]  faked you know button on click equals navigate somewhere that's going to be the world's most frustrating app you've server-side rendered an app that does nothing no you want
[02:21:11]  to build but it's going to be the way you want to do it and it's going to be the way it's going to be the way it's going to
[02:21:16]  be the way it's going to be the way it's going to be the way it's going to be the way it's going to be the way it's going to
[02:21:18]  be the way it's going to be the way it's going to be the way it's going to be the way it's going to be the way it's going to
[02:21:20]  be the way it's going to be the way it's going to be the way it's going to be the way it's going to be the way it's going to
[02:21:22]  be the way yeah yeah yeah yeah this is this and this story this is a very compelling story on your side for closing that gap because you're not going to as you mentioned
[02:21:29]  you're i we're not going to the time to interactive is like it's not going to it's not like javascript is going to have that like that's
[02:21:36]  where we're working right now javascript is going to have that for a while but with this you can legitimately say like it's probably okay and you got to do this
[02:21:46]  like this makes it very viable um because right now the biggest legit argument against wasm is the initial load like it's it's it's it's that the dom updates
[02:21:59]  as you've shown there's not a concern like the the other stuff so this yeah this is this is very powerful um okay someone's asking like what the bundle size for uh
[02:22:09]  for like leptos was earlier in the stream and i didn't want to bring it up right now yeah yeah so i was just loading it to see if i could actually
[02:22:17]  um check that out and i just compiled the release build let's see if this is a useful number okay so so the release build i have not done everything i don't
[02:22:23]  think i even set the flags of how to um yeah okay good i did so this is 473 kilobytes of of web assembly um that will for the to do app
[02:22:33]  yeah yep yeah that'll gzip down whoops um that'll gzip down to oh i i turned off the server that that's probably 100 kilobytes gzipped
[02:22:44]  um right which is okay yeah i mean 100 100 kilobytes uh to do mvc is basically next js um yeah yeah yeah right right right so if you're
[02:22:54]  comparing to next js right yeah we're killing it if you're comparing a solid solid start svelte kit we're not um but it's important right like i would say
[02:23:02]  four four ish three or four years ago mozilla published a an article on their streaming compilation and what mozilla basically said was um at this point firefox's compiler can
[02:23:15]  pretty much compile web assembly as fast as it can come in over the network so like if you're on a cell phone with less power it can compile it pretty much as
[02:23:25]  fast as your cell data can send it in and if you're on a desktop it can compile it pretty much as fast as your wi-fi can send it in um and
[02:23:32]  that was three or four years ago and the other browsers are all have all cut up and all that too um and it's kind of like there are definitely load time impacts
[02:23:41]  the more the slower a network you are on and the lower power the hardware the more you notice it um and that's why we're doing the graceful degradation stuff but it
[02:23:51] 's not it like is a hundred kilobytes gzipped too much to wait for for most user interactions in most applications this is a very simple the the thing that
[02:24:01]  actually get us on bundle size are actually serialization and deserialization um of data because it has to be typed um that's a whole nother conversation um but there
[02:24:11]  are things that bloat the code um this is fairly hefty like those counter examples those counter examples would have been um 55 kilobytes on un-gzipped
[02:24:23]  10 maybe 10 15 kilobytes gzipped and leptos is kind of hefty sycamore you can get a component that's down in like maybe 40 kil
[02:24:31] obytes so that's like 10 kilobytes gzipped um at that point that's not um but that's for a counter right i mean that's nothing but the
[02:24:38]  run times like yeah it's the actual runtime for this stuff is smaller in wasm terms then like react and react-dom are in JavaScript terms. Right. Because someone
[02:24:50]  was asking about the scaling as it grows. So the component size is a bit larger just because of that. Okay. Yeah. It scales poorly because there's no code splitting
[02:25:01] , for sure. The more you add and the more different kinds of data you're serializing and deserializing and there are certain gotchas. But it can
[02:25:13]  scale up to being a megabyte in a release build for an application, and that's a lot to download. I mean, gzipped, maybe 300 kilobytes
[02:25:23] . That's a big ask for timed interactive. But again, that's why exploring some of these patterns is important. Yeah. No, I mean, there's a whole
[02:25:36]  class of apps that don't care anyway. So like if you can at least make it, it just needs to get to that point where people can use it and it
[02:25:46]  doesn't, they don't sense the clunkiness. If you can get to that point, then that's interesting. Especially if there are people who were like,
[02:25:57]  yeah, I want to build everything in Rust. Like why not? Yeah. I mean, I don't know what language Figma is actually written in, but it's
[02:26:04]  WebAssembly. As its output, I assume it's C++ or something. The reason that like Figma is the best known and most used Wasm-based
[02:26:12]  app, because who cares about load time? You're sitting in the thing, you're doing design work. It boots up faster than Photoshop would and whatever. So I think
[02:26:22]  that that is like never, they're never going to rewrite eBay and use Wasm, right? Yeah, but there are lots of other apps. I mean, it
[02:26:30] 's like that spectrum you were showing the other week in terms of are you on the high performance really an app thing or not? I was just looking at the questions and
[02:26:44]  stuff and seeing if there's anyone, because if you have a question, you probably don't have time, but you can try and get it in here quick. But yeah
[02:26:54] , I was just going to say that, yeah, I think it was really cool seeing the other frameworks because it looks like the work you're actually doing along the lines of
[02:27:04]  like going more kind of like the solid fine grain approach is actually making a better rust DX story as well compared to like you and the more react style, because this is
[02:27:15]  the way it fits in. And then you've gone and created like a SSR wrapper. Is this like a separate package? Like what is this? Oh yeah. So
[02:27:25]  that's built in. It's the same as how solid kind of has three different outputs for the JSX transform. We have kind of three different outputs. So that
[02:27:34]  view macro, if you're in SSR mode, that's just producing strings. Right. That all get, you know, the holes get filled in and they get conc
[02:27:43] atenated at runtime and so on. So, yeah, it just exists, SSR mode, client side rendering mode, hydration mode. We may even be able to consolidate
[02:27:53]  client side rendering and the hydration with the new work that's being done. But yeah, I mean, it's just, it's just built in. It's just
[02:27:59]  part of the app from part of the framework from, from the beginning. That's really awesome. Whereas you, you just shipped, you just shipped SSR in you
[02:28:08]  0.20 like last week. Right. Yeah. Which is also exciting. I think the thing we talked about before was that a question about web workers. But I
[02:28:19]  think the, what we talked about before was that like using WASM doesn't change the equation on web workers. Like essentially if, if web, if web workers weren't
[02:28:27]  good enough for JavaScript, they're not going to be good enough here. Okay. Wasm is not a magic bullet for anything. It's a way of compiling
[02:28:34]  other languages to run in the DOM with the same exact limitations as JavaScript in a lot of ways. Would laptops be able to compile individual WASM buzzers for each page in
[02:28:43]  an app so that, yeah, so they're acting about code splitting. Yes. I have done that. I had an earlier iteration of something where I was doing individual web
[02:28:52]  components that were running a really tiny V DOM and then it was like acting like islands in an MPA architecture. You run into all the sorts of problems of coordinating state
[02:29:01]  and stuff. I just decided to do something different. And it's awkward because in, in rust, yes, you can compile those all separately. It's a little difficult
[02:29:09]  to, you have to kind of do that manually. It's a, it's annoying. And you run into the same problem because one component, if it needs to,
[02:29:16]  you know, deserialize serialized data, be doing something, it can still blow out its own individual bundle. And you may still need it to be on the
[02:29:24]  page. So it's, it's a possible solution. You can do it if you want to go MPA, you can compile all those pages separately and so on
[02:29:31] . But then you're doing an MPA, right? All right. That's great. Well, I know you got to go now. Thank you so much for joining
[02:29:39]  us today. I learned a ton. I think everyone here learned a ton. Um, honestly, thank you so much. Uh, it was, it was so,
[02:29:45]  so awesome being here. Um, and enjoy the rest of the game. Uh, actually, is there anything else you want to plug? I think you should drop if you
[02:29:53] , if you can get into the chat or maybe send it to me in private chat, any kind of links or anything that we should, uh, plug for you before you
[02:30:01]  drop off. Um, we should do that. Sure. I'll just, I'll just drop a link to our, our, uh, repository here. And seriously
[02:30:09] , if, um, you know, if you're interested in getting into rust, um, check it out, check out you check out Sycamore. Um, yeah
[02:30:17] , just, just go for it. Oh, and I'll put my, my, uh, Twitter handle too. I'll put it in the YouTube chat. I
[02:30:23] 'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat.
[02:30:28]  I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat
[02:30:32] . I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube
[02:30:35]  chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the
[02:30:39]  YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat. I'll put it in the YouTube chat. Seriously. I knew
[02:30:53]  about this work going on. We didn't show this on stream, which is funny enough. I'm going to share my screen for two seconds. I'm actually going to
[02:31:01]  show you something because we were talking about performance and talking about this stuff. Let me actually paint the picture for you, which we haven't actually done here. I'm surprised
[02:31:14]  at no point during the stream we pulled up the JS framework benchmark because this is what spawned this whole conversation, right? And that, like, let's get in
[02:31:28]  here. This is infamous table thing here. But if I just want to, like, this is what he meant when he was talking about performance at the beginning. And I
[02:31:37] 'm going to drop off a bunch of stuff that doesn't matter, but look, we saw it we saw you we saw you hooks um we saw let's let's
[02:31:44]  put some stuff in there let's we saw salt let's talk solid um wasm bind gen we talked about that today let's talk we what else did we talk about we
[02:31:54]  talked about leptos we talked about sycamore um uh we probably can't do any comparison without putting react in there uh view we should probably grab some vanilla js
[02:32:12]  and what else do we want uh uh view vanilla js um redwood uh where did i grab sycamore yet sycamore yeah i got it uh we we should grab
[02:32:26]  svelte svelte is a is a performing javascript framework um yeah what else we got yeah i think uh preact probably i'm just trying to get
[02:32:38]  like all the the the big markers that i can get their blazer yeah you know we we we should put blazer in to be fair um blazer wasm um there
[02:32:51] 's also blazer ahead of time i don't know what the difference is on that but let's put them both in uh we don't have live view here this is a
[02:32:59]  client-side updating framework yeah let's put lit in here why not uh lit's versions kind of cheating a little bit by the rules but i don't really care it
[02:33:10] 's not gonna make a difference um okay and i think that's good enough for now i think we have we have the big ones okay cool and let's let's just take
[02:33:20]  a look at this for a second so i didn't mean the full screen it that way i wanted to just do this okay and just kind of understand where where the shape of
[02:33:31]  things are these days because to the surprise of no one blazer is just not anything it's way over here right oh i missed i missed one we didn't actually talk
[02:33:42]  about it today but i i was informed that dominator actually um is sort of gaming this benchmark a little bit um which i was not aware of apparently they do the mikado
[02:33:54]  thing where they uh um kind of like you use a custom data and sinuous where you do this custom you can opt into a custom data format which makes the updates one
[02:34:04]  for one instead of actually uh making it so that you can just use normal data they're actually like gaming it a bit i didn't realize that but uh dominator is
[02:34:13]  another u framework okay or so not you sorry uh wasm framework okay so this is the reason i want to talk about this is just so that you can kind of understand that
[02:34:26]  the wasm frameworks are actually in the mix here with the javascript frameworks right so vanilla js obviously is the fastest right but wasm vanilla is is very close it
[02:34:41] 's just this is basically the same thing written with directly with the uh wasm apis and it is it is surprisingly close you know there is some overhead on some of these
[02:34:55]  things but it is actually surprisingly close so this maybe they're starting at a at a like a slower basis right and then uh we got solid here right so solid solid sits
[02:35:09]  here in between but leptose is only a few points behind solid and if you look here what he was commenting on was while solid is faster for creation um they're
[02:35:22]  they're they they've actually got us on a couple of the uh update benchmarks i need to look at this one i think it's slowed down but they actually have like a
[02:35:31]  couple points where they're they're mostly losing is on creation and removal essentially like big dom operations where you have to add a lot of nodes or clean up a lot of nodes
[02:35:42]  is where leptos is trailing right it's right there and then you get to lit i told you lit's cheating a little bit but it's not like a big
[02:35:50]  deal i mean it's that it's it's all it's it's only like it makes a difference of like 0.04 so lit should be maybe closer to view
[02:35:58]  but it doesn't really matter then you get dominator which i also said is kind of doing a bit of a gaming here then you get view and sycamore which are
[02:36:06]  basically right next to each other again wasm paying the crate cost then you get to svelte which is over here and preact and react and then you and bla
[02:36:20] zer over here but just to show you that like from the update performance standpoint updating the dom is not the bottleneck per se we're actually got to a place where wasm
[02:36:32]  and most of the popular like javascript frameworks are like you're in you know like they're very close uh quick is not quick here per se i mean they're
[02:36:47]  not bad but my understanding is that they're around preact um again think about it it's a virtual dom that updates with signals it's um yeah i i don't know
[02:36:58]  if they're slower or faster than preact they still have to get their implementation but i would imagine that it would look a lot like what we were looking on the pre
[02:37:08] act signal stream okay so how's lit cheating uh 801 is what they're doing is they're putting the selected ui state in the data model uh in this test
[02:37:24]  there uh there is a uh a bunch of rows this is a table benchmark and it's basically like a to-do list essentially um you you draw a bunch of rows do
[02:37:36]  simple crud operations on those rows and there's a selected state on the on the item rows right and if you put if you have a global selected state that projects onto
[02:37:46]  all the rows like row one is selected row two selected um that's how the benchmark is set up but if you put the is selected on every single row then you get a
[02:37:56]  slight performance optimization because when you change from select like it's it's only order of two like you only need to change two rows you change the currently selected and the unse
[02:38:06] lected one um so if you know if you basically set it on one row you just have to know to unset it on the other one and set on the other
[02:38:13]  and set it on the new selected row the one you click on whereas if you do it via projection like you have select rows 12 um generally with the way the rendering works you
[02:38:24]  have to like literally iterate through all the rows to make the change um it's not cheating in the sense that it's um other frameworks you do that sort of optimization under the
[02:38:37]  hood it's more that like the authoring experience the whole point of this test is like write something in a certain way so that you're not polluting the the u
[02:38:46] i model with um with like local state and uh this that's why it gets flagged for it if that makes sense yeah a dx chart it'd be it'd be hard
[02:39:01]  to i think dx is subjective one thing that is interesting is is that you can look at the implementations in code this is very important to this kind of benchmark because like
[02:39:12]  i love i love looking at this kind of stuff because then you can go in and you can be like okay what does it take to render it right you know in solid we
[02:39:19]  got a few function components we create some state event handlers and then we have our jsx and we're done it's pretty nice but you can also like go in and
[02:39:30]  see um you know you can you can look at any of these i think the code side by side is actually really important like what we can see leptos actually i
[02:39:39] 'm kind of curious what it looks like um there's yeah again here's the the setup code then um bro model okay this is where they build the data um so this
[02:39:53]  all set of code and then we get in our app we have our couple signals we have our event handlers and then here's that same thing that we were just looking like
[02:40:02]  look even the four component this is this is very very solid um they didn't talk about it but the leptos like signals being uh tuples or tuples or whatever
[02:40:13]  you want to say and like having that the control flow components and stuff it's pretty cool um yeah so and there's the mount function so it looks cool but you know
[02:40:24]  you can go in here and you can see other stuff too like uh let's look at svelte i know this one because i think i wrote it or i did the
[02:40:32]  svelte 3 upgrade um this main svelte you know it's interesting this is actually you know what this is backwards it's funny svelte now puts the script
[02:40:41]  tags on top but because the original implementation was svelte 2 and i wasn't aware of that convention when i updated it i kept the script tag on the bottom it
[02:40:49]  doesn't really matter much but you can see the same thing right here's that view code and then in here you have your setup and then all your things the thing is this
[02:40:58]  benchmark is very simple that almost all the implementations look the same which made it really easy to go through and kind of categorize them right so yeah how did microsoft manage
[02:41:12]  to make blazor slow the funny thing is blazor is blazor is just i think it part of me kind of wondered if like what what they were kind
[02:41:23]  of trying to do on the prototype side like i know they had a lot to accomplish and maybe they they went for i think they probably went for like a compatibility standpoint they're
[02:41:32]  like can we take this.net setup and let you do everything you do with it and see if it works because like you're right if you start from a minimal standpoint
[02:41:39]  and go okay this does nothing let's let's see if the performance would be viable you wouldn't you wouldn't end up with with this you know like because like these benchmarks
[02:41:49]  you know you know they're synthetic whatever but i i've used blazor apps like the real world demo version of blazor it is noticeably slow i remember once
[02:41:57]  i was the chrome dev tools had a bug and i i loaded the blazor version for the real world demo in lighthouse and it gave me uh like a hundred and
[02:42:06]  i was like what's going on nothing else i did did a hundred they did like 99 or 98 i did like i like svelte and solid were like right up there
[02:42:15]  and blazer got a hundred and i'm like what is going on and then i looked at the trace and blazer took so long to load that it they thought though that
[02:42:23]  it was done they thought like the white page was was it being done um like it like it went for like 12 seconds it was a bad run i think but it was
[02:42:35]  like it was it was just like it went so long that they assumed the page would have had to been done um anyway like yeah one of one of those kind of scenarios where
[02:42:49]  something's just kind of like way out of the range um so yeah i mean yeah i mean yeah the the this this is this is a interesting thing but i just want
[02:43:05]  to show like i think there's trade-offs here like if you look at the kilobyte weight like i don't know if there's something about this runtime we're
[02:43:14]  we are seeing that you can tell which ones are the web assembly ones right well actually that's not completely true react also is like the same size like here's here's
[02:43:25]  a perfect example leftos and re react like react is basically the same size as the the web assembly frameworks um u is a little bit larger and again i don't know what
[02:43:37]  they're doing like blazer makes ember makes ember look bad i honestly i i i have no clue maybe it's the implementation um but yeah other thing you're
[02:43:48]  gonna see is that there's some overhead on some of the the memory side stuff like there's again this is being very granular on this but you can you can tell again very
[02:43:59]  clearly which ones are fast web frameworks and which ones are wasm or react um so yeah no no bla bla bla bla bla doesn't even get yellow oh wait yes um
[02:44:21]  the the load time isn't that like the the actual this is basically a client rendered page so the time it takes for the blank page to load the scripts actually um isn
[02:44:38] 't any worse than anything it looks like react is actually the worst here um so yes blazer did get a green on one slide but other than that it's even struggling
[02:44:48]  for yellow what's the fastest feed on right now um it's a tie and we'll talk about that during this week in javascript like i mean let's clear it
[02:45:01]  i i i i'm trying to remember if there's anything slower than blazer i don't think there is let's just look it's hard to say at times there have
[02:45:12]  been oh yeah yeah chew and i don't know what forego is but chew chew is but even they have like a few good points blazer literally isn't good at
[02:45:24]  anything uh from a benchmark standpoint here um but i mean it's all point of view like alpine js which is really good for like the lightweight javascript stuff can
[02:45:36]  like a petite view is what way back at the back of the list next to um like that ember starbeam thing uh the universal reactivity and blazer and stuff
[02:45:45]  like that so like sometimes like this isn't showing everything in its best light is the way i should put it like it's not like this might be forcing some things into use
[02:45:55]  cases that they weren't designed for like um managing tables and stuff um so yeah i think i missed everything uh i i and this is alpine 3 as well when they
[02:46:14]  switched it to the the view core i think older alpine was actually worse i think it was on the other side of blazer like alpine 2. um yeah the
[02:46:27]  funniest thing is i i've been kind of joking for a while that uh that um uh what's i gonna call it uh i'm gonna change my view here but that like
[02:46:37]  solid should just take back blazingly fast because you know it's been like five years now that we've been like at the front of the benchmark um you know like you
[02:46:46]  know it's a meme but i was like no let's let's just like legit it's like it's retro cycle let's let's do it um but but the
[02:46:56]  funny thing is the original blazingly fast framework has made a comeback so again um let's let's uh let's get ready for this week in javascript give me
[02:47:09]  two seconds here while i get my my twitters in the right zone and not share stuff that i shouldn't be sharing on screen god i should i need to do this
[02:47:22]  off screen from now on because of freaking twitter circles um i only ever show my own profile so it's it's not a it's typically not a problem but like uh uh
[02:47:36]  i just it's worth pointing out okay where are we now all right god what week is it i guess it was wednesday when we uh when we last had a stream
[02:47:52]  okay got that got that what else do we got to talk about i'm not going to talk about this on on this week in javascript but just a side note i
[02:48:05]  was talking about angular earlier um this was a i just i had to bookmark this little little quote here because it was pretty sweet um at least from like where i'm
[02:48:15]  standing is that uh i was talking about looking at signals we're definitely learning a lot from solid js we've been having quick for 10 years at google now and that's definitely
[02:48:29]  a product we're getting inspiration from as well so they're talking about where the future of angular is going i love this though this is a nice acknowledgement minko if
[02:48:39]  you don't know is the basically uh he's the the the lead on angular now he's the he's he's he's the one in charge not charged from manager standpoint
[02:48:48]  but he's like the he's the he's the he's the lead of angular so um it's it's sweet i mentioned even seeing that this kind of inspiration like
[02:48:57]  basically um the talking about leftovers the fine grain reactivity was part of that breakthrough which caused wasm to actually be viable so i mean that's pretty sweet knock it will always
[02:49:12]  be the thank you ben uh always in my heart right all right so i think i think i think i have everything i need for the for for for this week in j
[02:49:30] avascript um yeah let's and we just i'm gonna start with that so let's let's just do this you got you you all ready for this week in javas
[02:49:40] cript all right all right all right all right and we're a little earlier i think this time might work a little bit better for people just like the half an hour means
[02:49:50]  all my like meandering at the beginning means that we're not like super late when we get to this point so yeah if that's a thing comment also uh let me
[02:49:58]  do a theo thing right here for a second you know please like the youtube thing it should be somewhere over here it's funny i'm not full screen so that's not working
[02:50:11]  but uh it seriously it helps um if if you're in there please please do like um like the youtube video um yeah so anyway okay let's let's let's let
[02:50:24] 's get this thing rolling um all right yeah i nailed it okay all right actually let's do that i'm gonna go full screen for a second i'm gonna take a
[02:50:40]  swig of water because i can show off solid merchandise all right all right all right i'm a little decked out today yeah yeah sorry yeah i'm people are stopping
[02:51:05]  watching the stream now you can always go to solidjs.com store yeah i'm sorry i'm i'm i'm just i'm just playing all right um actually sorry
[02:51:20]  give me two seconds i want to open up one more twitter tab um just in case what i want to do is i want to uh in case there's anything solidjs specific
[02:51:33]  that i want to pull up because it i keep on forgetting that there there has been um there's been there's been a lot of cool stuff that's been going on in
[02:51:42]  our ecosystem as well um and i think i i think i should remember to showcase that yeah i yeah it's right here perfect okay now i've got everything now i am
[02:51:53]  ready um i believe let's see what we got in comments don't forget about twitch prime oh right right right yes twitch prime for you who do not know amazon if you signed
[02:52:04]  up for amazon prime you get a free subscription on twitch which you can give at no cost to you to your favorite streamer that's how he says it right yeah right
[02:52:14]  you just just add it and guess what you're you're just giving the money to me you're taking away from amazon um and it doesn't cost you anything uh okay sorry
[02:52:30]  uh sorry i'm mary sub miss uh oh wow thank you aj i this is i have to remember thanks for the hint i have to go back and look at it
[02:52:41]  this is the first time anyone has given me gift subs um thank you so much uh no i'm serious this is this is amazing um i i i'm new to this whole
[02:52:53]  um twitch affiliate subbing thing so um this is so awesome oh wow more gift subs um insanity later i now i can't say that what the a hype train is close
[02:53:09]  okay sweet i i this yeah this is the first time that that they have informed me that a hype train even exists i i i'm definitely not twitching properly so um thank
[02:53:23]  you for making this seem almost like a legit stream oh thank you seriously what's this christmas in december great comment thank you uh uh nice i've been informed uh
[02:53:46]  the hype train is the most hype sentence yeah if i was a if i was better at the streaming thing that it might actually work but no seriously legit thank you um oh
[02:53:57]  yeah prime sub from exkilo thank you there we go we we we are talking about prime subs actually worked so thank you everyone um i appreciate it okay okay okay let's
[02:54:11]  let's actually let's actually do this for real okay um i've been killing enough time i know there are streams out there where people just sit there and interact with the
[02:54:20]  chat for like an hour and then do some actual content but that's that's not um that's not my game so let's let's just do this um banner let's
[02:54:29]  do it i'll get there one day yeah that's funny if ryan becomes everyone's from here all frameworks get signals i mean we're already getting pretty close but yeah
[02:54:45]  i mean if if that's how we push it if the stream popularity is how um is how frameworks make their decision you know part of the decision matrix then yeah that would be
[02:54:54]  interesting oh man good times thank you so much to everyone um yeah we got another prime sub from uh um i i never i don't know how to pronounce anything bland cry
[02:55:10]  ver thank you um i need to keep on switching to twitch oh yeah yeah hype train that's that's crazy level four hype train that's having being having zero hype until this
[02:55:22]  point that's that's that's pretty big yes okay fine you want to plug here you go thank you ag for the gift subs here's a plug fs jam um i
[02:55:32]  i have no qualms saying that it's one of my two favorite podcasts um pod rock and fs jam were great to me right from the beginning and what i love
[02:55:43]  about it talking to hosts always felt legitimately interested in the future web dev and what we talk about similar to stuff we do on the stream which is good because i've been on
[02:55:52]  podcasts some even more popular podcasts and everyone seemed kind of like blase not interested um this is one of the this was these guys are are legit they feel it's got
[02:56:01]  that same vibe that you get from watching the stream so very good podcast all right god oh b woody is continuing to give sub they got from aj okay sweet yeah i i
[02:56:21]  okay yeah yeah it's funny okay i i haven't missed any more prime subs hopefully um or subs okay um all right let's just keep this going i don't even
[02:56:36]  know what a continuing gift sub is someone might have to explain that to me all right anyway uh that's fine we we are actually talking about javascript or actually i
[02:56:49]  guess we were talking about rust but now we're going to talk about javascript right um all right let's let's do this sorry i've been i've been talking
[02:56:59]  so long people are starting to leave okay okay let's let's let's do this um for real i even have a cool intro that i haven't figured out i i've
[02:57:08]  been cutting the video so i could publish these separately i just haven't done it yet because it takes work all right now it's time to talk about this week in j
[02:57:18] avascript um okay so this week in javascript for me has been a few distinct conversations per se um this wasn't necessarily the biggest news week but there was a lot
[02:57:36]  of interesting discussions and i that i think that'll be a lot of fun to look to look into um but before we get into that i'm gonna do a quick shout
[02:57:46]  out here um solidjs new york meetup um sponsored by babble um this is my first time going to new york i'm actually going to be there um so
[02:57:57]  um this is our second new york meetup but uh i'm pretty excited about this one uh just simply to meet people from the east coast that i have not had
[02:58:08]  a chance to meet yet so um yeah if you're in the area you should check it out um it's on uh december 13th and uh yeah i'll be
[02:58:19]  there i think ben ben holmes will be there um david core team of several others so yeah come check it out if you're in the area and let's keep on
[02:58:32]  going actually before i get into um to some of the heavier conversations i'm going to do a couple quick uh solid shout outs just from the ecosystem um one of them uh
[02:58:48]  i don't know if anyone saw this was uh solid final form uh this is a port of a react library but it was added some solid um elements here using a combination
[02:59:04]  of solid primitives and directives to kind of get that form library so it's it's pretty pretty sweet you should check it out if you get a chance um someone i
[02:59:12]  think last stream was like asking if we had certain form libraries this is this mind you is more of a proof of concept than an actual library but there are quite a few
[02:59:21]  um this is another cool one i know it's on um quick has ability to put other components inside quick kind of like astro does and uh guillermo here has been
[02:59:31]  working on this uh pretty tirelessly asking questions working through the problems and now you can use your solid components inside quick um which is pretty cool um like this is this is full
[02:59:45]  like server rendered and hydrating um using you know you can still kind of because they're included into quick you can use quick's rules of hydration for when the solid code
[02:59:57]  loads so it's an interesting angle something you might want to try out um also uh 1.0 release of uh papanazi i don't know how to say this but
[03:00:12]  this is the web ui component library that's built on mitosis so they basically wrote the components once in uh mitosis which is kind of like a solid inspired flavored
[03:00:27]  of jsx and then it outputs it in every framework here so as you can see we've got angular preact quick react solid svelte view web components like essentially
[03:00:39]  this is this is might be the first framework native ui component library because it was able to do it this way where you write the code once and then it's written specifically
[03:00:51]  for um the specific framework to integrate with it this is this is really cool i think this kind of approach i don't know about necessarily it'd be interesting to see how far
[03:01:02]  we can push mitosis in this direction but i think it's really cool to see this kind of path of being able to optimize instead of having an agnostic solution
[03:01:10]  that works with all the frameworks to perhaps optimize for each framework so this is really very also very interesting um okay so i think that's actually it for that kind of stuff
[03:01:25]  let's let's get into the interesting uh discussions um there was two articles this week that i is that were pretty interesting to me because um there there's a reflection going
[03:01:46]  on right now in terms of like the state of react and the javascript ecosystem and the one article was written by kent c dodds talking about why he loves
[03:01:59]  react and the other article um was um where was it uh i'm trying to jump ahead here a bit but it was um this bye bye react js and it's asking like
[03:02:17]  is react going anywhere and i want to talk about both of these for a moment because they're unrelated yet they are completely related so uh let's let's let's start
[03:02:28]  with kent's article for a moment because i i have to admit i have an opinion about this because the one thing that these articles have in common is the the need
[03:02:42]  for the author to justify today why like like who doesn't know that kent c dodds loves react like i'm pretty sure everybody knows kent c dodds loves
[03:02:56]  react why like why are we reminded of this right now like why is this a good time um to to you know bring this up again well for kent's case he's
[03:03:09]  relaunching epic react his training courses and his new next case like his neck moving forward with his you know next journey his career after remix so and i say after remix kind
[03:03:19]  of lightly because he's still very much involved and you know like he's not part of the company working shopify but he's he he very much believes in their vision he
[03:03:28]  gives talks i just saw his talk on remix um at modern front ends um so like like don't get me wrong there's a good reason for him to do it right now
[03:03:38]  but it's part of this kind of conversation right where like he's reflecting on when he first heard about react and about like how it was this you know jump for him
[03:03:51]  off angular but what i love about kent's story in here was he didn't even care about react at the beginning like he was just kind of like yeah a few months
[03:04:01]  like he's like i kind of pushed it off you know i'm so hyped on angular that i didn't really give react more thought than a few months later i started
[03:04:09]  seeing some of my friends and co-workers tried out and share what they thought was interesting they encouraged me to give it a solid shake i put it off for a while i
[03:04:15]  was busy like he just you know like this this is life this is how these things go right and then he said like later on he finally tried it and he's like what
[03:04:25]  he just played it for three minutes and he's like okay i need to change what i'm doing right and i what i love about this article is he's he focuses on
[03:04:33]  react's initial selling value you can argue what whether this is not still true to this day but there is a different difference between simple versus easy this is a design philosophy that
[03:04:44]  we bake into solid js hugely it's it's actually what if you go to like uh our website for example and and go to like the guide section where it's like there
[03:04:57] 's like a thinking and solid kind of thing i i'm trying to i'm trying to remember where it ended up here think solid simple who's better than easy um like
[03:05:07]  this is one of our defining traits this is what we learn from react and i feel like this article really kind of highlights this um and he's he's talking about you know
[03:05:18]  what makes react simple because it's very clear when state updates what happens he likes jsx he likes hooks um even though they weren't there at the beginning and he's
[03:05:30]  like i've been able to do whatever the hell i wanted with react right you know they and then he he leaves it off see talking about the community and stuff you know and
[03:05:43]  the truth of matters like everyone knows this like the most popular framework has the most jobs um i i i did actually have a like i thought this was a very well written
[03:05:53]  article and i think that it kind of really portrays like it's what i would expect from kent um in terms of this but i had to ask the question yeah and
[03:06:04]  i understand the criticism a bit oh the meta framework problem is ssr this is a problem for everyone isomorphic javascript complicated things um so i i do
[03:06:17]  want to kind of put that put that out there that it's the same reason why i created solid start it was literally just because it's so hard to configure ssr
[03:06:25]  um as but i don't know if this is like for react core it's a slightly different question but i was like okay this is my question for like people kind of coming
[03:06:36]  from this mindset and this is not new i like i forget who is it uh was i think corey like there's been a few similar posts about this kind of idea
[03:06:46]  recently and i said reflecting on what it meant to move from angular and looking at the points presented i wonder how many newer solutions compare more favorably than reacted at the time of
[03:06:55]  the same reasoning and what i mean by that is this is something that's real struggle for kind of current frameworks a little bit like svelte or solid is that people keep
[03:07:05]  on going oh you know when you get this or this or the community or whatever but the funniest thing is like when people first invest invested in react there was no community there
[03:07:14]  wasn't this react at that point well arguably better than its competition um was not particularly like like it it'd been around for you know six months or a year like people started
[03:07:31]  like it's funny when people talk about the longevity and the stability question svelte's been around in open source for six years like you kind of pushing back on it
[03:07:41]  um because you know it's new or whatever like six years is not new like i i just kind of wanted to put that out there and that that was basically most of what
[03:07:52]  i was saying on the on this comment we got some great responses react is simple which is one of the reasons why it can get very difficult this is this is the truth
[03:08:00]  about simplicity like if you really want to dig into simple versus easy you gotta like get in a mindset where you understand that redux is one of the simplest state libraries in existence
[03:08:13]  that doesn't mean that it's easy to use people get confused by it all the time and how to wire it up and it's been notoriously hard to teach people
[03:08:22]  for some reason but it is actually very very simple so yeah i i mean there's there's a great conversation on this side but yeah assembly language is simple right upfront cost
[03:08:41]  but yeah some people have felt you know i love that kent is open enough to actually respond to this and go like hey you know maybe maybe the today the gap is isn
[03:08:53] 't even as wide so yeah a lot of criticism react but that wasn't really what my my point was it was more that i i just this is the narrative we're seeing
[03:09:03]  people kind of coming back now because there's been a lot of new frameworks new technologies and this feeling the need to kind of justify why we're still on react and i
[03:09:11]  think it's interesting to kind of reflect on the what got you and like the way things were when we took on react in the first place weren't so cemented as they
[03:09:22]  are today yeah i think there is one this is why when i do those generalized graphs that everyone's like what the hell are you talking about ryan and i'm like
[03:09:36]  it kind of works the same on multiple axes depending on what you're showing it's it's these kind of things um generally the more opinionated you get it gets yeah it
[03:09:46]  i i do see the correlation um okay so that's the first one this one wasn't as big of a thing but i want to i want to kind of jump ahead
[03:09:59]  um to uh to the other one here which is this one because i have more to say about this one i want to talk about the is react going anywhere blog the unfortunate thing
[03:10:15]  apart about this is this blog was released on like uh was this info info executor or something like one of those like kind of generic blog sites oh no this is the
[03:10:27]  guy's personal blog never mind forget about it um the thing was i they didn't post their own uh they didn't i i couldn't find this on twitter i was trying
[03:10:39]  to find where the original blog post was so that um so that like i could retweet it but instead i couldn't find it i looked everywhere and i ended up just
[03:10:48]  tweeting myself and most people thought i wrote the article not most but from the responses a bunch of people thought that i wrote the article what i was trying to say is i have
[03:10:56]  a thread below where i'm giving my response to the article i did not write this article um but it did not come out that way for a lot of people but this article
[03:11:07]  is great anyways because basically it starts with this kind of story where they're like i was talking to someone you know okay first of all react is getting old yeah 10 years
[03:11:17]  old but but essentially they started to start by talking about someone who said that they had to move off react for the e-commerce solution it just wasn't fast enough they just
[03:11:28]  couldn't make it fast enough um and in and and and and the funny thing about this conversation was oh you must have found a better framework so what are you moving to
[03:11:42]  any of these you know it's views felt solid quick you know whatever no we're just keeping react for server-side rendering for now and using vanilla javascript in the
[03:11:49]  front end and my understanding is netflix actually did a very similar move a while a while ago and um the the funny thing is yeah i mean the truth of matters they
[03:12:03]  were probably too invested on react server-side running because even for e-commerce like react server-side rendering is actually pretty slow but as we mentioned in the last uh
[03:12:11]  section when we're talking about wasm um the impact on the client side is is much bigger impact than the server-side part like making your server rendering 10 times faster will
[03:12:25]  improve your costs like your money like how much your it costs but it won't affect your users as much as improving your client side execution so um yeah if you care like
[03:12:38]  if the user part is important then like that's not like being able to leverage this isomorphic you know javascript could be more important but in this case they went
[03:12:49]  all the way they're like we're doing vanilla and i mean that's the thing right um because the compared to classic solutions there there is like there's a lot of improvements
[03:13:03]  that we've made on the single page app framework side that has drastically improved the kind of developer experience right but i mean you could also but i mean there's an argument there
[03:13:14]  that it's not just performance or just dx because like arguably there's better dx than react too like there's a reason why like that's one of felt's like selling points
[03:13:22]  is that it's dx is considerably better or even solid that generally the dx is better or view actually pretty much every front-end framework pretty much suggests that they're dx
[03:13:32]  perhaps it's better than reacts especially since hooks so it's not it's not dx it's not performance um and essentially is this going to become more common now are people moving
[03:13:45]  away from react the same way you know the angular thing you know and i have a theory about that because when you're the big player it's not that the little guys
[03:13:54]  come in it's it's that like the big guys miss something i feel like that's actually the narrative like they they give up ground angular to angular 2 was like a ch
[03:14:06] ink in the armor and that's where things got in it wasn't like it's very hard i mean it was less entrenched then than it is today but it's
[03:14:15]  a lot slower of a path if you're just going to beat any existing solution with a slightly better one but the point is is react the problem you know and i mean they
[03:14:30]  they talk a bit about performance benchmarks and applications and you know ultimately as i go through this yeah they talk about the cost of rewrites like no one wants to migrate
[03:14:43]  um this is going to be echoed in another third uh thing i want to talk about in a minute but like stockholm syndrome is coping mechanisms of captive abusive thing people develop
[03:14:52]  positive feelings towards the captors and they think it is stockholm syndrome and i actually kind of agree when i when i when it comes down to stuff like explaining to people why
[03:15:03]  components shouldn't re-render we've witnessed this kind of thing where people like react has changed the the wider mindset of how things should work um so it is you know
[03:15:18]  and they're saying is about javascript as well right like the fact that like javascript is the only option in the browser so we've been kidnapped so long i
[03:15:28]  think this is a very good take here that like if you've been kind of forced into this or seemingly forced into the situation so long you've like come around to like
[03:15:38]  it um it doesn't make it not good necessarily it's just interesting um but i i i just wanted this i just i wanted to stop on like on this point for a
[03:15:51]  moment just to kind of um the kind of like kind of highlight this um because uh sorry yeah just the the idea that there is a certain pre-presumption of
[03:16:13]  where we we kind of got here right and this is a commonality they have with this and with with kent's post um so let's let's let's go here
[03:16:21]  is react going to be here in the next five years short answer yes like not no doubts what about 10 years and they this is the thing i firmly believe that react is
[03:16:31]  not going to be placed by any slightly better alternatives i believe their complete transformation isn't in their future and then what's it going to look like i don't know blah blah
[03:16:39]  they start talking about examples of things changing but then they go things like resumability islands architecture press and hampsons all those fancy new patterns are just slightly better more efficient
[03:16:46]  ways to accomplish the same goal with a better architecture but hasn't been a major shift in how we write or produce software front-end user interfaces i i think this under
[03:16:58] sells it a little bit but given that the scope that the author is talking about i agree it is actually a new architecture the same way you know i think what's happening
[03:17:11]  with server components and islands is going is like the the same jump is going from mpa to single page apps like old web thing i think we're actually at a generational
[03:17:21]  swap this person is kind of looking at what i feel like is the next one like that's going to happen about 10 another 10 years from now if that makes any sense because
[03:17:32]  like they're talking about ai um ml machine learning like a whole bunch of crazy stuff that doesn't even exist today in prototype like form like it hasn't gone to even
[03:17:46]  the point of like proving the concept right like that like essentially there's this thinking that there's going to be this major shift and and yeah react isn't going anywhere and
[03:18:07]  they're talking about like how you can you know improve the stuff around react and don't get into the millisecond war you know there's more important problems this is all right
[03:18:17]  and i agree with it you know in terms of like it's not going to be performance there's some slight dx wins at the front of the funnel that are going to
[03:18:23]  make a change but honestly this this i don't know if anyone's seen my recent talk about world beyond components this is a very complacent attitude in terms of like waiting for
[03:18:40]  the clouds to part you know kind of like the biblical reference or like some kind of revolution and i i think it's kind of yeah well i mean i actually wrote down
[03:18:49]  exactly what i what i think so i'm just going to kind of go over this for a second because i think it's actually important right even acknowledging reacts aging everyone can agree
[03:18:59]  that it isn't going anywhere the investment is beyond anyone's projects those who have reason to migrate off it will migrate others will not even greenfield development's a challenge to persuade
[03:19:07]  even with the definitive benefits you can go like this is way better for your use case but people still use react because of hiring or whatnot right like but you know and and
[03:19:21]  similarly you know it isn't going to be milliseconds yeah i know that uh there's been stuff there's been solutions faster than react since it came out and like you know in
[03:19:32]  the case of stuff like solidjs which is really obvious to me like literally it's like in what april 2023 it'll be like five years now being the fastest j
[03:19:45] avascript framework according to some benchmarks many benchmarks but like you know i mean like this doesn't this isn't going to be doing and we've seen svelte and this
[03:19:54]  dx wins but the thing is it's not any individual thing it's the fact that the package makes it perhaps interesting enough that people will try it because have you seen anything
[03:20:08]  to indicate that this would be a revolutionary change this whole field is evolution even within react we tag revolution label after the fact when we you know find the things that win and it
[03:20:18] 's too convenient to point at some future we can't yet see the justifier in action to just be like yeah whatever revolution is going to come i'll come back don
[03:20:26] 't get me wrong it's okay to adopt that attitude but i have but when people it's interesting that people want to write about it like they need to like tell others to
[03:20:38]  do it because that that that's why i was getting with the kent c dodds thing a little bit although he his he's not being so like harsh on that
[03:20:48]  point it's like i think it's pragmatic to choose the best solution um you know and across all factors like looking at hiring an ecosystem but like like so please keep doing that
[03:21:03]  but it's like it's too it's just way too convenient to just like this to be dismissive in this zone like if and this is the example i always use
[03:21:13]  like if you went to sleep took off went for a nap between 2018 2013 you'd say react was revolutionary but in my opinion it's much more nuanced so i have no doubt
[03:21:23]  like these big things are coming the kind of ideas you know that keep us busy for like a decade plus but like to me it's just a matter of like like if you
[03:21:31]  want revolution then just like go take a hike for 10 years you know the longer the wait the more like a a revolution will stay but in reality this is many separate small
[03:21:39]  steps of evolution that then when they come together look like a revolution right and that's the whole thing like go do that you know that's that's on you you can you
[03:21:51]  can choose to you know just take off right um i i i was fine there but i added this extra comment because i don't think people really got it i was like next
[03:22:01]  time someone suggests you to wait for that ai from terminator to build your next website you know before you change anything like types you know don't don't change what you
[03:22:09] 're using the terminator api will come in 10 years like just decide for yourself or your situation what like what what's important what you need to do like like if you
[03:22:20] 're not particularly you know you don't have like if you have a little leeway you know things to like consider to make use you know different solutions that are actually you
[03:22:31]  know beneficial then it's worth trying it rather than like kind of get into this mob thing um and don't worry about those people who told you otherwise like you'll see them
[03:22:40]  again soon like progression has a natural way of just continuing forward right or jquery i think is is actually um a more similar comparison right like but maybe angular is because
[03:23:01]  i mean if you don't mean angular js you mean actual angular maybe maybe that's similar um i think the part of the reason people don't care about going off react
[03:23:17]  is because the mentality that doesn't value quality yeah i mean i had a great conversation with dan uh abramov in london and i that's what i was suggesting
[03:23:26]  to him like if if the message is good enough is good enough how do you sell them on even new parts of react if that good enough isn't good enough you know so
[03:23:36]  like there's lots of places where you can do improvement i'm not saying that anyone's going to drop react but that's like the obvious thing right because like i and
[03:23:45]  the reason i wrote this is because there's this like back and forth right you you see on social all these shiny things you know that people follow me you're on my stream
[03:23:54]  i show the coolest stuff as it comes out because these are the hints of innovation that will eventually get incorporated into the next things right wasm all this stuff right but realistically
[03:24:09]  you're not going to pick it up right like everyone knows that you don't you're not going to like like five years ago when you know solid first showed up in the
[03:24:19]  js framework benchmark you're not going to come in and be like okay let's rewrite uh github in it like that's that's not how this works but at a
[03:24:26]  certain point there's this enough push that people feel the need to explain why they can't and this is the part that got to me even long after it stopped being shiny and
[03:24:35]  new because like when i think of stuff like solid that's been in development for so long and it's felt especially that pushback is kind of like like did people push
[03:24:45]  back on react for six years before they adopted it like using you know this this is kind of the thing right like i don't know if it requires the explanation because like
[03:25:03]  this is what you deal with every day you work at coming to work you work on a project you think for a moment like oh this would be cool to do in svel
[03:25:10] te and then like you're like well but that's very unrealistic we're not going to rewrite it so like while i'm kind of sympathetic to this kind of scenario on
[03:25:20]  the other hand like change doesn't happen by doing nothing i want to i don't i want to emphasize like things don't need to change you don't need to migrate but
[03:25:27]  i i think focusing like this counter argument is misaligning stuff it it makes this discussion stop being about the possibility it's just like like it's like a dead stop you
[03:25:41] 're just like yeah ecosystem hiring like that's what it's about we should be talking about the future we don't have to talk about right now necessarily because the danger is
[03:25:50]  that it creates a narrative that stop gaps the future on the practicality of the present like this we need a revolution you know we need something to be 10x better like this
[03:26:01]  inaction is self it's a self-fulfilling prophecy you know like it doesn't need that kind of push right like if you have a fire in the desert it
[03:26:11] 'll kind of put itself out right you don't need to pour water on it you know you can have these kind of considerations at the same time and a healthier narrative is
[03:26:20]  one that recognizes the ongoing cycle that every you know every stage is different because you've got to consider the future and the past you know and and the present and but not cling
[03:26:32]  too hard to the past so that you can allow things to move forward in little pieces you know progress is incremental at many levels so like while i can appreciate that this is kind
[03:26:41]  of like a trickle down effect here because like the the author of this article mentioned at the end that they they got this a lot of these ideas from talking to k
[03:26:49] ent c dodds and j phelps and ben lesh and um you know a number of others um i just want to throw it out there to the thought leaders invest
[03:26:58]  you know that be fair a lot of them are vested very much in react because that's how they built their career like like and that's why they're very much in
[03:27:09]  the stack quote like remind them where they started because they likely invested with in react in the first place with far less right like that's what ken's article is great here he
[03:27:21]  lit or not this one this one is he he literally tells us that he basically invested on react with nothing right yeah first mover thing but the thing is react wasn't even
[03:27:39]  a first mover like because that would have made it like very revolutionary there was already declarative stuff there's angular there there was other solutions at that time it isn't even the
[03:27:50]  first mover thing it is like it is now because it's harder to like the the spaces become more entrenched but like it's not even it's not even that and
[03:28:02]  like as i was mentioning before like there is like uh where am i looking for here is it this one no this is solid one it's this one uh with all due respect
[03:28:14]  i will yeah here we go i will not stop using react until something 10 times better comes along and today that thing does not yet exist there's literally nothing that i can
[03:28:24] 't do with react that i can't do with other frameworks plus the ecosystem is massive we have things like for selling next every large company in the world still uses it get off
[03:28:32]  my lawn so this is this is the reason they like the influencer types are getting nagged by people to look at other frameworks and other solutions because they improve on things in like
[03:28:45]  a slightly different angle and they're just like go away you know i'm i'm i that that's that's sort of the the scenario here right and this this is kind
[03:28:56]  of where i was getting into this because i was like look but you could say that about vanilla js right you can literally do everything with with with anything right like that's that
[03:29:07] 's the whole point but like there are constraints that come in like you can't make react smaller or faster you can't fundamentally change how it renders you know it doesn
[03:29:19] 't even take you know crazy new i think crazy sorry but like inventing like new patterns like quick is doing or marco like in resumability to make that claim like
[03:29:28]  literally there are places where because of the structure of stuff you can do stuff that react doesn't do mechanically granted but it has implications on how you author apps architecturally
[03:29:44]  even the fact that people need to point this out right basically speaks volumes though like and that's why i'm wondering like why does everyone right now want to double down on on
[03:29:56]  this message right like brian larue who i don't usually agree with basically said that they felt the same way about you know web standards and that's what i'm
[03:30:10]  saying like you can literally do anything with anything so like and and and nadir said well it's because i've been seeing these blog posts about react dying and it's
[03:30:21]  it it is but what i was getting at is these blog posts that talk about react dying come to the same conclusion you know 10x revolution you know it's just an ampl
[03:30:32] ification for the status quo and i mean it feels like a bunch of people patting themselves on the back to be like it's okay guys don't worry they have us
[03:30:43]  down right now but you know we'll get there and it's it's weird because it's like the championship team doing that when they're already leading by like i don't
[03:30:55]  know x number of points like the blogs that declare that reacts dead don't actually ever declare that reacts dead that would be crazy right like yeah you you don't get to
[03:31:13]  move like that's a thing i mentioned a thing there there is whole ecosystem of training people hire like react is not going anywhere but what i'm getting at is that the
[03:31:29]  dead thing is sort of like a it's like a thumbnail like on a youtube video it's like a hook to just like sit there and and just go react is the best
[03:31:40]  because it's the best it's like it's it's not an interesting narrative and it's it it's it's like it's fine that that's true but i feel
[03:31:50]  like it's the thing that doesn't need to be said because you know that so i mean that's that's where that's where like this whole conversation kind of went to
[03:32:01]  i think i think it's interesting because like i i think it's pragmatic from a company standpoint to to to like go look i'm on react i'm not going to touch
[03:32:14]  it until like there's a reason like a migration story but i think it's like from a mindshare standpoint this kind of like pushback is kind of whatever i
[03:32:28]  i don't have to say anymore i think i think anyone who actually looks at it and reads it kind of gets gets like gets it you know so um yeah i i
[03:32:41]  there there is some you know conversations about the individual points where i talk about you know like this this comment about reacting revolutionary always pulls people out i said a great conversation in here
[03:32:55]  about like knockout and how mvvm was like components and you know but i think the high level kind of takeaway from this from my opinion is like no react
[03:33:07]  is not getting replaced i don't know if there's ever going to be another react js like i don't i don't know if if if if we should be expecting
[03:33:17]  that but like the the this revolutionary revolution thing that that they're talking about here might be decades out right like the promise of like like what is it like no code you know
[03:33:33]  builders and like all this stuff you know been going on for decades already like nothing in the last 30 years makes me think that like the revolution is happening in that sense right
[03:33:47]  now what we're seeing is the same progression we've seen that about every decade or so we learn better on our architecture and we're in one of those swaps right now
[03:33:57]  and react is part of the previous one and they're they're making a move to the new one but there might be new solutions that align with the new one better right
[03:34:13]  right i i think we're at a point in time when the best versions of react will cause a migration point people to migrate to other framers perhaps yeah and you mentioned pre
[03:34:22] act um and that's the thing that dan you know i i don't know like i i i can't help but feel that the the react team you know has to be
[03:34:33]  sorry dan and the react team and seven all them have to be considering about like is are things kind of forking like that when preact goes in and like writes their
[03:34:42]  signal stuff into the into the compiler and go look look you can use react with signals and doing this like like are we at a point where people are kind of starting to fork
[03:34:53]  react um i think it's a consideration even if the revolution happens in five years do we have the way of worse tech i'm not going to call react worse tech i
[03:35:07] 'm just saying like generally speaking these things people there's like a bus factor uh not bus factor i don't mean bus factor that's the thing they talk about when someone gets
[03:35:15]  hit by bus i mean like the the frame rate i mean like the super mario one speed runner uh bus factor like where even if you get there earlier stuff gets kind
[03:35:26]  of batched together um basically everything's in a group of frames but if you're not if you don't watch speed running that probably makes no sense to you okay it but
[03:35:34]  like essentially there is like these things move in groups like you rewrite your app every five to seven years so when those things happen you look for the next thing um i i think
[03:35:45]  what's happened is we've we've kind of stagnated on the current status quo for too long and people are using that to justify the the next thing so yeah yeah
[03:35:55]  it's a very different bus factor yeah yeah banks are still using cobalt like and this is fine web moves faster it's like a it's like a five to
[03:36:08]  seven year cycle instead of like uh like a several decades cycle so yeah i mean i mean i am this project it will exist it's i'm actually talking to an ai company
[03:36:29]  that's looking at code mods to do this um but uh i i think i think it's i i just want to kind of get out there that these things are always
[03:36:40]  moving and it only looks like a revolution from a from a from a far distance so it's fine that like when you're doing your stuff to kind of phase it out don
[03:36:49] 't worry too much do you work in your area but don't use that as a justification to tell others to not get into new technologies because you're going to wait until
[03:36:58]  something's 10x better the truth of matter is with that attitude you won't recognize the next thing even if it came and hit you in the face that's that's the
[03:37:05]  truth it's fine you don't have to be on the front of the edge but you literally will not see it coming if that's the kind of attitude you take no
[03:37:20]  i mean it's it's it's tricky right like um you when you have users you have to move slower you have to figure out the right best patterns and reacts going through
[03:37:31]  one of the most they're having their angular 2 moment people just haven't realized that yet and they're doing they're handling it amazingly that's that's what the truth is
[03:37:40]  mitosis ai yeah and honestly yes that's that's i i've i actually talked to them about using mitosis maybe to help seed the intelligence i think it's pretty
[03:37:51]  cool yeah i'll share more as stuff kind of moves on but yeah anyways that that this is a this has been a topic um all right where are we going let's let
[03:38:04] 's get back into our stream and it's it's semi-related but not completely related um i want to i want to mention uh that this kind of ties into i
[03:38:17]  don't know if everyone saw this um theo and alex russell had a had a conversation um about uh sorry just gotta do some moderation um theo there we go gone
[03:38:34]  no i haven't talked about this debate yet so this this is this is what we're on to uh one comment i'm learning react from c plus desktop so far loving i
[03:38:50] 'd love to switch solid right away but component loves for reactor very convenient um yeah if there's component libs for other for solid as well like if that's what you
[03:39:00] 're into um so um i i mean i don't let that stop you honestly you could just poke into the discord see what's going on and then you'll get a get
[03:39:12]  a good thing you know i i think the ecosystem argument from a library standpoint is overblown i think from a hiring standpoint it's very real so people should care about
[03:39:22]  that but i think in terms of like what you can do with the framework in terms of libraries and stuff the ecosystem argument is is thin okay yeah so yes okay theo had a
[03:39:32]  conversation alex talked to himself that was kind of the takeaway a lot of people had i was in there i was there in person me and akil we we popped up from
[03:39:45]  from san jose to to be there i didn't talk about it because the video hadn't been published yet um right i i didn't i you could definitely tell that
[03:39:58]  but to be fair it wasn't designed in a debate format there was no moderator right it was like uh theo doing an interview which meant in order for it to get rolling
[03:40:11]  theo had to basically go alex what's your platform and he did that um the beginning of the talk alex kind of they they basically introduced their positions a bit which was
[03:40:24]  and their positions had a strange lack of overlapping in the sense that theo's like i'm a guy who makes apps you know let's see if i still got the scale
[03:40:36]  draw from last time he's like theo's like i live over here right and and i pretty much live completely over here and alex is like okay that's fine um i
[03:40:50]  i'm i'm helping people with stuff basically up to here like this this side of things right right we're like maybe this line this is alex's line alex
[03:41:04]  was on this side so they're they're like not overlapping at all which was kind of amusing at first because i was like i've people talk about alex talking on this
[03:41:12]  platform but part of me was like man like i knew theo wasn't going to engage him on benchmarks or anything but part of me was kind of like oh man like theo
[03:41:26]  talking about experience on ping might have no relevance to this uh conversation like you know but the truth of the matter is that comes down to the question of who do you think the
[03:41:37]  majority of web developers are and that was the first part of the debates like real consideration right because like the you know alex's thing is like most development happens in existing spaces
[03:41:48]  um so you're like remaking existing products or working in a place that's fairly known and theo's working startup so clearly it's like the opposite side making paving
[03:41:59]  new stuff i've worked in startups i understand like it's it's a very different different zone um but but yeah i mean the the challenge of course of having that that
[03:42:17]  kind of separation is that like they don't really care to talk on those points because like honestly even if i was in this position where alex was i there's no point
[03:42:30]  engaging theo on like what matters for a startup because he in his head he's like yeah that's like the five percent case like that just i'm giving like a little balance
[03:42:40]  here from from from from that kind of scenario whereas like um alex keeps on walking into these these projects and then basically needing to like unscrew them like they're like completely
[03:42:58]  messed up and then he has to fix it and he sees it over and over and over and over again and it's it for me it's a position that i can like
[03:43:05]  i feel like i can relate to especially when i was the time of working at ebay and seeing kind of the support issues and understanding the difference between what it's like
[03:43:12]  working with like a small team of developers building stuff in the startups versus like like working in an environment where people might not like especially uh you know a lot of the junior dev
[03:43:23] s really not understand the tools they're using yet be expected to put code out at an incredible velocity in order to like hit metrics and stuff so like like i i i
[03:43:34]  when i was sitting there in the chat or sort of like actually physically there i was like i'm glad alex is getting a chance to see that say this but i i
[03:43:44]  mean this was not the debate anyone agreed like thought they were coming to because like at one point they're like oh should we use react for e-commerce and everyone was like
[03:43:53]  like theo and alex are like no like both of them like they were agreeing almost too much for it to be a debate so like this this is like up to the
[03:44:05]  half point you know of the debate and you can watch into more detail but like it became about management and i think that's interesting because it's about the decision-making process
[03:44:18]  of like when to choose react which is very related to what we were just talking about where at the same time react is getting more popular and being used in places it wasn
[03:44:26] 't originally intended for and then like it's kind of like if you choose react in that environment it's kind of on you and like do you need to do the costly rewrite
[03:44:35]  in something that doesn't even fit like what alex kept on seeing in his world was that people would like try and take something rewrite and react and then just fail because
[03:44:43]  and like it wasn't impossible to make react work properly in that zone it just wasn't really made for that situation um so yeah at the halfway point i was like oh man
[03:44:55]  this is just gonna like two guys talking past each other the second half was a little bit more interesting in that alex went out the gate much harder um especially on the
[03:45:06]  react sentiment this was supposed to be like a single page app thing so a lot of people thought we'd be talking like astro versus you know or like that kind of thing
[03:45:15]  and it wasn't um and i think my favorite part of the whole discussion was when theo quite smartly at the beginning of the talk got alex to agree on some of
[03:45:26]  the principles that he believed in like like not in principles but like if you have a react app you shouldn't migrate it and all like already like it doesn't make sense
[03:45:35]  you know you're there all those things and at a certain point where where alex kind of got the heaviest of the arguments out like the peak pinnacle where a
[03:45:43] lex was like yeah you know and i you know almost felt like clapping for him like he said it theo was like yeah well what about this which you said and that's where
[03:45:51]  the real switch happened and that led all the way to the end of the debate when the q or the discussion when the qa happened which was kind of really where uh
[03:46:00]  you know finally i guess what theo's perspective was coming through because the truth of matter is the problem where the disconnect is is even if everything alex said was true which i
[03:46:12]  generally agree with and seen with large teams i think this i think his perspective is largely undervalued like immensely undervalued i think i think everyone who's like you know
[03:46:22]  just talking about should actually stop and like listen to what alex says like another 10 more times um but on the other hand when it came down to like okay so what
[03:46:31]  do we do about this there wasn't really a solution it was like oh maybe you can look at web components which you like that's not a solution um and i think that
[03:46:42] 's where the the gap is because the thing that i like the kind of was awkward about that how should i put like that that part of the discussion was that it felt
[03:46:55]  like you only had two choices you use react or you use like whatever this web component like thing is and the truth of matters it's possible to satisfy alex's side
[03:47:09]  of the discussion and get the dx and developer experience to react if you just don't use react and don't use what alex suggests like there's a whole realm of solutions
[03:47:21]  that would probably make alex much much happier walking to those scenarios and also not be any harder for developer to pick up than react of course training is the problem and the the
[03:47:39]  whole ecosystem around it but it's like i felt like we were set there choosing between two terrible options right like and and and theo addressed this at one point he was like
[03:47:52]  you know if the new beta docs for um reactor written and solid like they're amazing for just learning web dev in general then i'd do that and i brought this up before
[03:48:02]  you know patterns.dev this is basically even though it's really the chrome team oh and lydia so that's fair from like this is basically a next js like this
[03:48:13]  is basically just next js like how do you they talk about some few design patterns but when you get to like the the web fundamentals it's basically a next js course like the
[03:48:24]  stuff is built in react because that is the standard so like yeah i mean solution is solid or quick any number of solutions honestly right um like there's there's just there
[03:48:47] 's more options out there if we aren't constrained to just those two the problem is the stuff has gone so hyperbolic because of some kind of warping that we're
[03:48:56]  kind of stuck here that's that's what i what i took away there because i'm like okay this wasn't a debate alex did talk a whole bunch about his
[03:49:04]  platform he said a lot of really good things he didn't really engage theo theo managed to finally force him into engaging him at the end in which point theo's you know perspective
[03:49:14]  about startups and getting stuff basically was very relevant and important in the takeaway that people walked win the the fact that theo got there at the end actually made the little bit that
[03:49:25]  he did say that much more impactful um but like the truth of the matter is because it's so binary this conversation that we're like missing the fact that like it is completely
[03:49:42]  solvable i i remember theo made that joke when i was on stream with him a couple weeks ago he's like man you're gonna make my debate with alex russell
[03:49:48]  that much harder after i showed him the movies app demo which you know which if you all remember was a movie was solid movies that it it's it's like it's
[03:50:00]  a it feels like a single page app essentially it has like the same kind of you know it has the fast load of an mba but then it has all the animations and
[03:50:09]  the triggers and stuff single page app it's basically like a single page app the thing is like 13 kilobytes of javascript like nothing this is a this is the
[03:50:17]  smallest version of the movies app out there right now and it's it feels like a single page app like this is this is this this kind of approach kind of like server
[03:50:26]  component s approach is game changing for that huge portion of stuff and we've talked about that previously like there are solutions that are potentially out there that will satisfy satisfy people if we
[03:50:38]  can figure out how to kind of push them out there because like the truth of the matter on on on that stuff is yeah people dx is still going to drive stuff people
[03:50:49]  are going to use react they're going to use what makes sense but it's like if you have the opportunity to make the choice um like maybe there's there's more options
[03:50:56]  out there that's that's that's that's that's that's that's essentially you know where where that kind of sits um yeah okay yeah all right let's
[03:51:21]  can i think that was most of that part of that let's continue on okay um oh yeah there's so many little spoils or reveals this week that i mean like things
[03:51:41]  that kind of came up um like i just gonna take a moment here like the v conf uh vite has been publishing the separate videos for the talks now mine isn't up
[03:51:52]  yet i don't think but like the framework discussion talk is up which is great um another great one is uh tanner's uh tan stack router intro from jamstam comp
[03:52:04]  this is a very very like well pulled off um talk he he coordinated his slides with his video it's it it feels it felt like like going to like a reveal from
[03:52:17]  like like when like a car company releases a new car like it just it it it had that like like like wow factor just from like his presentation it's only 10 minutes just
[03:52:30]  watch it um okay so yeah let's sorry it's funny there's one more thing i want to say about the alex russell's conversation and it keeps on slipping
[03:52:42]  my mind i remember it for like a second and um i it keeps on slipping so if if it comes back i'll bring it up again but i i just i keep on
[03:52:51]  uh i keep on there was like one really good point that i just can't remember so um anyway i want to take a moment to to plug um next week i am speaking
[03:53:05]  at is serverless ready um with a number of other awesome people including fred um astro um dax in this like they're just it's great people jac
[03:53:17] ob um yeah so yeah this is this is gonna be fun the funny thing is this if you haven't been paying attention to this one there's this is serverless ready um
[03:53:30]  account and it's basically it's been like a meme account um if you go back to the beginning they just they they created this account like somewhere in october and it
[03:53:43] 's like is serverless ready no you know it's it's just all like it's managed to get 3 000 followers before posting anything else other than just memes about
[03:53:58]  about whether serverless is ready it's anyway um as a kind of a viral uh campaign what they they they wanted us to do was um was to basically will service ever be
[03:54:18]  ready and then basically answer that question with a quote um and uh the people chose different ones i uh let me see your quote tweets there's there's a there's a
[03:54:41]  bunch of great ones here uh theo i think was the first one service will be ready when deployment is easy as merging with github um but uh i i i chose a
[03:54:48]  spicy one service will be ready when it supports streamed responses um which if for for for any of you who don't know most serverless services do support stream responses by
[03:55:03]  that i mean like hdp chunked encoding that means like you as a developer can like respond with a stream and and the and the html will come in pieces
[03:55:12]  that you control html standard or htp standard does actually stream content it gets big chunks that sends them across like you like you're not going to send it
[03:55:22]  all at once it does get broken up in a package it streams um but to control how it streams there's a standard that was created in 1997 um htp uh
[03:55:32]  1.1 time period um called chunked encoding so that's what i'm talking about and basically every platform uh most of them support it now except for aws um and
[03:55:48]  you know i knew that serverless is very close to aws so i like asked dax if it was okay and he's like yeah no problem this is coming which
[03:55:57]  is sweet honestly i'm i've been waiting for it um and i'm aware many serverless and edge sir you know like because people started like replying like like uh like
[03:56:08]  i think dane this like uh who's in charge of like r d at cloudflare but it's like look we got streams you know like this is a good opportunity
[03:56:17]  actually for a lot of the providers to talk about that that you know the remix guys are big on streams you know um you know the cloud run apparently has streams you know so
[03:56:29]  this this was kind of fun um until it wasn't fun i want i want i want to actually i want to i want to actually show this for a second because uh
[03:56:40]  the i don't know we we we talked about this conversation with brian before um but it kind of calls into question whether hdb streaming is important and basically points us
[03:56:59]  that we should be um using web sockets which i think is a little bit unfortunate because like they really have like they're for different purposes um like i i don't i
[03:57:15]  don't know like basically aws doesn't solve this one so it's like okay important frankly if initial render the problem hd streaming solution it's like just just fix your
[03:57:26]  database right get yeah just just migrate off whatever you're using and migrate to dynamo db that's the solution and it aw supports many primitives blah blah blah there
[03:57:39] 's so much more to learn beyond html okay thank you um but like there's a reason like initial there there's an architectural reason why we're looking at h3
[03:57:56]  streamed responses and not web sockets you know things like not wanting to have long sessions on the server necessarily like there's a reason why this technology is good like but
[03:58:08]  it felt like like it was like a little bit you know i don't know condescending a little bit so i was like okay fine fine like assuming it was that
[03:58:20]  simple and that we like talking about front end devs like we're sorry front ends think it's you know like they have no clue would you criticize them for trying to maximize
[03:58:31]  what's within their range like is there anything wrong with adopting streaming like you might as well adopt it because it'll make things better doesn't make things worse right like these
[03:58:39]  aren't mutually exclusive improvements right and the problem is if we're basically telling front end devs they don't know anything and that's a perspective like you know a back-
[03:58:48] end dev would take do you think anyone would listen to the front-end dev who's telling them that oh no the solution is just uh you guys need to replace your
[03:58:56]  back-end like like i i don't know how practical that is in many situations um like you know there's any like these other types of streams sure but like we're
[03:59:15]  not interested in that because like there is a specific problem being solved here it's a he he criticizes it for terrible ux it's not a terrible ux it
[03:59:27]  actually if you think about it it's the same ux that you find in um single page apps essentially where you can get the shell super fast and then the data loads as
[03:59:39]  needed right like i'm a friend of dev too but i don't see assumptions for front-end framework marketing especially ones that claim good performance to demonstrate anything but it's just
[03:59:51]  like what what what what what is this about this isn't marketing this is like i i learned about the stuff at ebay like this is this is large scale e-
[04:00:00] commerce like this is you know and and this isn't about like selling frameworks this is like core technology so he he accused me of doing i don't know like anyways yeah
[04:00:20]  i i don't i i don't i don't know where this was coming from or why he was so angry about suggesting that people could improve user experience and performance by streaming
[04:00:33]  but yeah i'm gathering i struck a nerve because aws doesn't have this feature but yeah i don't know um anyway uh but yeah if you want to know what
[04:00:43]  the reason i brought this this conversation up is because if you want to know about the ux of of uh of of it someone someone actually was asked me that question they
[04:00:53] 're like i don't i don't get it it can you do a demo of streaming at hp and compare the experiences right the problem is streaming matters the more requests and stuff
[04:01:03]  scale simple demos never show it off right but um like if you want to understand the difference this is the difference between streaming and not streaming essentially the left hand side is like
[04:01:14]  if you wait on the api and the right hand side is if you stream this is this is essentially the difference in experience you will paint hold on the on the on the
[04:01:25]  left hand side but essentially i showed this and you're like oh so it's like a single page app yeah it does feel like like a client side rendered app the difference is
[04:01:35]  it's server rendered so you do all that data fetching everything at the very beginning right and that means that you can send the static stuff right away serve the stuff on
[04:01:43]  the data and you don't have to wait if if you if this was a client app you'd have to do like three handshakes before you could even request the data
[04:01:51]  like you have to get the html back and then you it reads that there's a script tag so it goes back to server gets the javascript then it runs
[04:01:59]  the javascript and goes okay now i know i need to make a request and if it's so then it fetches and then it goes again you do three round
[04:02:06]  trips and streaming lets you do it in one round trip like this is not rocket science like anyway uh yes this is twitter being twitter but i i i want to take a chance
[04:02:21]  to just defend streaming and it's coming to aws soon so soon every platform will have the ability to do stream responses so just a interesting little side tangent here um let
[04:02:33] 's get back out of this uh okay but i want to end this week in javascript with a couple much more positive things first of all i thought this was
[04:03:01]  great dominic ganaway big fan of his work creative inferno happened to just go on the js framework the other day because he he's been working on some something he
[04:03:11] 's been working kind of like a new framework idea um and he's like what the hell happened apparently in chrome the latest version chrome chrome 108 every framework also scores 108.
[04:03:28]  um not every framework but essentially we were looking at js framework benchmark earlier the the fastest ones that aren't vanilla um i we are missing a couple that um in here there
[04:03:42] 's a couple more in between but essentially inferno solid melina and block dom are all scoring the same average score um in the benchmark and he was comedy he's like i
[04:03:55]  i haven't like no one's touched the performance in inferno in like six seven years like um it just suddenly got faster in the last couple versions of chrome and it
[04:04:09] 's funny because i was like yeah and i want to add i i haven't touched the performance in solid really in five years it's been like at the front of the list
[04:04:15]  for about five years now um but like this this is kind of just showing how uh javascript engine optimizations over time kind of like help push things forward um yeah i
[04:04:27]  i think i think that was kind of the interesting thing what i love about this actual example is and this is what he was pointing i was like look v dom not slow
[04:04:36]  is that actually we have we have multiple like solid fine grain rendering inferno v dom melina this is actually based on svelte's approach and uh block dom which is
[04:04:51]  like a v dom that does node cloning and you can look like they they're slightly faster than each other in like little niggly bits in different places but from the point
[04:05:02]  of view of this js framework benchmark we basically got to the maximum now where like like this benchmark no longer can differentiate between the fastest approaches it's been that way for a
[04:05:13]  couple years now but um that's how far the javascript engine optimizations get like don't get me wrong you guys have seen you know other frameworks are much further
[04:05:24]  behind but like the front of the pack is actually almost kind of collapsed okay so apparently someone from the solid discord told him to go look yeah yeah yeah um that that makes sense
[04:05:47]  uh solid discord by the way here's a little push you guys should all go in there because that's where framework authors hang out if you if this is the kind of
[04:05:55]  conversation you like like what we've been talking about here understanding how frameworks work um literally like everyone working in this performance space are in our discord we're always chatting about you know
[04:06:06]  on certain channels at least about like you know of conversations with greg from leptos or dom or fabio from bovi and all that like like the the just
[04:06:16]  um very close community on the front end on the performance side so if that's your thing do come on by um but yeah this this for me was a very it's i
[04:06:26]  love this story because i've always said the vdom isn't slow like not from a rendering standpoint i do have concerns that the way that frameworks get you to author in
[04:06:38]  the vdom causes end users to write slower code but optimizing it from a render standpoint um is is essentially like like it's all the same like we we you can express in
[04:06:52]  very tight code really nice uis and it'll render faster if you write the perfect code you can use any fast library and get fast uh you like it's not true
[04:07:04]  necessarily of every library but you can use every fast library and get good results regardless of these vdom or not it's just that i think that certain patterns around um like
[04:07:14]  component re-rendering puts more the user code like under the bus so that be less isolation more unnecessary work you know that kind of thing yes basically i think i think so
[04:07:31]  i i i don't i i actually believe so i don't think they've actually made significant changes in the last several versions uh inferno's uh yeah i mean let
[04:07:45] 's just pull up the js framework one more time but i i i didn't put inferno in there um earlier because it was kind of distracting from what i wanted to show
[04:07:54]  but yeah i mean uh let's let's let's let's just go in here like where are we let's remove not all the implementations because they added a new category
[04:08:06]  um that eliminates stuff that we that i don't feel is worth yeah implements like eval it's a security thing but i don't think it's important okay so
[04:08:16]  let's do that let's pull everybody in here um inferno and solid or here basically both i guess they're 109 on this run whatever they're basically all the like
[04:08:25]  the four of us are basically all the same right and then if you scroll here to do to do where are we lighter html view imba sycamore elm
[04:08:41]  svelte it's over here to do to do to do preact it's over here yeah and then mithril and then angular and then stencil and finally oh
[04:08:55]  marco and then react yeah so i definitely should thank you for reminding me that so yeah we need we need we knew we need new benchmarks right um yeah i mean the
[04:09:16]  the obviously like yeah i mean that what's happening over time is the front of the scale is getting heavier so while preact is like kind of significantly back here probably well
[04:09:33]  maybe right in the middle of the chart so to speak it's because we're just getting more and more libraries um in the front of the chart like that's what's happening
[04:09:44]  over time um preact has pretty been like has been pretty much there for the the longest time kind of right you know very slightly ahead of middle or whatever um so yeah
[04:09:58]  it's it's but yeah this is this is kind of where things are at on the js framework benchmark at least and there's other benchmarks you can do but unsurprisingly
[04:10:08]  almost all synthetic benchmarks actually reflect very similar yeah i'm it it's getting it there's so much data in it i'm zoomed in right now which makes it even
[04:10:22]  harder but like usually you just kind of like at this point i'm almost always choosing which ones i want to focus in on um and sometimes just using the filter to like just
[04:10:31]  drop everything off just go none just makes things a lot easier because then you just like you're like okay i'm just gonna you know get rid of anything that has like
[04:10:39]  a weird flag on it but anyway okay not terribly important okay let's let's uh let's get back in here so for me this was this is cool right like like
[04:10:50]  this this this is this is like a nice progression and i i love this narrative like it i wrote this article like two years ago um javascript framework performance comparison and i
[04:11:06]  i also performance champions and i finally got the performance elite i like i put solid and inferno in this category even though at that point the gap was much bigger because i
[04:11:17]  wanted to point out that these frameworks whether these virtues on or not doesn't matter and um that funnily enough that the fastest frameworks here were using jsx like because there
[04:11:34]  was a kind of myth that templates were like better for optimizing so um anyways i just always good to see that like we have a good example of like of it's always
[04:11:46]  nice when the examples um actually line up with like the theory so to speak so i'm super happy about that the other thing that i'm happy about and probably the the the
[04:12:00]  last bit of news on this uh is milo modern me um milo is the youngest core team member on the on solid js core team uh he he joined on with
[04:12:18]  us when he was still in high school um and really i i hope it's not disparaging to call him a kid but really smart kid and um he's he's been
[04:12:30]  kind of like working in a way at different stuff trying to understand how the like solid code works but like he he he got it right away i mean his early contribution to
[04:12:41]  solid involved like playing around with different rendering patterns and stuff like always really got into it um and when i started the uh working group for solid uh 2.0 uh which which
[04:12:54]  i advertised a few months back um him and a few couple others really wanted to get on to looking at what the future of reactivity would look like in that model i
[04:13:03]  said there's a few stipulations i want to look at better lazy evaluation of memos you know our crate memo i want to look at um potential for serialization so um
[04:13:15]  i i i thought like i i kind of pulled a bunch of them together um milo uh shane from uh uh uh cairo fat super fast uh reactive library um
[04:13:34]  you know and even uh you know talking a bit with uh um ben collide wave uh created esno like there there are some really smart 20 21 year olds like you know
[04:13:49]  first year university students right now working on some really complicated patterns like they just they came up in this wave and they're just like they're it's part of what they do
[04:14:00]  so i started just like connecting them with each other uh it led to some good discussion um i'm not sure that it ultimately uh uh you know i'm not sure that
[04:14:14]  like ultimately they they they didn't end up necessarily working completely together but i think i i like to think that sharing of ideas at least got the conversation rolling a bit and mil
[04:14:25] o is like okay i'm gonna go and see if i can apply what i've learned about this reactivity and make it more optimized because i always talk about in solid that
[04:14:36]  i didn't optimize it as much as i could have optimize it as much as i could have because i wanted to do some features like uh time slicing and stuff and i
[04:14:43]  you know i just got to a certain point where i had the time box and move on and i like i have examples in solid repo of more performant reactive implementations we
[04:14:51]  just don't use it because like i want to keep the features and the performance let me make this straight improving like performance on this reactive level is not going to like even
[04:15:04]  budge the js framework benchmark like not by anything substantial so like with dom operations and like like you're not going to necessarily see the impact of this reactivity but obviously if
[04:15:15]  we can optimize it can make it better and that's what milo did and he wrote this article i believe it's his first article um i was trying to i was
[04:15:24]  like oh you're gonna share it on twitter he's like i'm not on twitter i'm like okay no problem no problem so i i shared it for him um and that
[04:15:30] 's not the reason why you want to read this article the reason you want to read this article is because he actually explains in a like it is complicated but in a fairly
[04:15:42]  visual way how reactive algorithms work and he shows from like mob x how it works how preact evolved that thinking and how he took some of the ideas from sjs and solid
[04:15:57]  and from preact and managed to get something even more optimal right and this is just this is great um honestly if you want to understand reactivity at that next level to
[04:16:13]  understand like how like it actually works this is amazing article from that perspective but what's even more amazing to me is that i mean maybe not more amazing the article honestly to try
[04:16:25]  and explain this stuff is actually really challenging um so i'm very proud of it he he succeeded at everything he did reactively he he tested wide graphs what wide graphs are
[04:16:36]  is like when you have like single dependencies they're dependent on by like a whole bunch of stuff like like so you have a signal and you have like a thousand effects deep graphs
[04:16:46]  are like when you have a signal and you have like a bunch of memos in the middle like a bunch of derived data and then uh you basically just see what's
[04:16:57]  on the other side and dynamic graphs are when you change up the dependencies so like first run it depends on some things second run depends on other things and this important measure and understand
[04:17:09]  the impact of because frameworks like svelte for example and react don't have dynamic graphs so they're they're always kind of starting they don't take the overhead of
[04:17:19]  bookkeeping it but they they it leads them to having to perhaps overrun things they don't need to overrun like executing things too many times um preact of the bug
[04:17:29]  so he wasn't able to benchmark it there but what i loved about this is actually really displayed of stuff because from solid's perspective wide graphs are really the only thing that really
[04:17:38]  matter and solid solid solid's performance on wide graphs was actually pretty good um let me see if i got here yeah pretty good right because think about it when you're building
[04:17:50]  user interfaces you have a bunch of signals like in your components and stuff and maybe in like context and then you have a bunch of places you use it you might have some like
[04:18:00]  derived value you might have like you know the the double count so the speaker date format or something but usually the depth is like one or zero maybe maybe two three tops you
[04:18:11]  never really have deep graphs but you have wide graphs sometimes the you know maybe not like thousands wide but if you think about it like the number of different places you might call um
[04:18:24]  in global storage you might call a specific signal across your page like user information that you use in your avatar to show the name and the page to show profile stuff like like
[04:18:36]  you might actually use the same thing like it i'd say the order magnitude difference between wide and um and deep like like it's it's like it's it's it's
[04:18:47]  like it's like a whole order more likely to have a wider graph than a deep graph so that's what i optimized for but what's sweet about this is reactively
[04:18:58]  top solid on the wide graph it taught preact on the deep graph which is and on the square graph too and on dynamic it literally it literally surpassed us in in all
[04:19:14]  of these benchmarks and the thing is what people saw recently when preact released preact um signals they did a benchmark that was floating around from the maverick guys which
[04:19:25]  is this kit benchmark it was basically the deep case which as i said is not very useful for real apps but this is what was getting getting thrown around um so he he went
[04:19:34]  further and was like okay let's let's benchmark other dimensions and i think this is a much fuller picture of what that reactivity looks like and then using that fuller
[04:19:46]  picture he made the library that was fastest across them all so big props to milo on this right um uh and if if you don't like i i posted this in
[04:19:58]  here it's also on the the twitter reply is i don't know if everyone's familiar with with him but jin the creator of a small framework russian guy writes great
[04:20:10]  articles about reactivity but they're a little dense and the translation loses a bit he said he was impressed he literally is never impressed about anyone else's library like on reactive side
[04:20:21]  he's always like oh like they don't know what they're doing all reactive libraries suck blah blah blah except mine he he said he was impressed and he did it in his
[04:20:30]  benchmark and it scored the highest so um i think we have a legit fastest reactive uh state library right now a new a new a new champion has been crowned cairo
[04:20:47]  was that for a while i haven't checked cairo recently i know they made design decisions which have slowed it down a bit so we might have to compare that but for for
[04:20:56]  all purposes milo has has done it he's pushed um uh reactive state manager like don't get me wrong this is not like solid or pre-act like the full
[04:21:08]  like actual rendering performance or stuff this is just like the signals like just the reactivity part but he did it through clever use of algorithms and he explains how he did it here
[04:21:20]  um and i mean you know why i'm excited about this because this reactively is going to be a library that he's going to go out there and you can use
[04:21:29]  you'll be able to use it with react and lid and this is going to be his project on that um solid has different constraints because of time slicing and transitions and all that
[04:21:38]  stuff so we might not get to hit the speed but um the intention here is with solid 2.0 we're going to adopt this sort of pattern which should should improve our
[04:21:50]  speed across the board if not get all the way to where reactively is um definitely improve significantly um where from where we are today in the firmware space so i'm very
[04:22:01]  excited to incorporate this kind of improvement into the next version of solid so yeah so yeah i i think this is huge ah right and i think with that that's this week
[04:22:34]  in javascript all right yeah so how's it going chat some of you still here that's awesome what what what time are we we like 4 pm see this is
[04:22:46]  what happens you start half an hour early and you're not we're not competing for my sushi time so yeah yeah i'm free to ask answer some questions we've got time
[04:22:56]  today so what's up um will solid 2.0 have a lot of breaking changes or mostly those under the hood it's mostly under the hood stuff i think the biggest one
[04:23:06]  is we're struggling there's there's two apis that i introduced for necessity that i'd like to do something about and that would be the breaking changes are um one
[04:23:14]  of them is create computed not many people use it but i want to find better patterns there so that we can like get it out of of the way and the second one is
[04:23:24]  class list um on jsx i i think i think those are like where the visual kind of breaking changes are the rest of the stuff might be there might be some breaking stuff
[04:23:33]  in the reactivity but not in the sense of like i know this is like the worst sense but not in this not in the sense of like api changes in that
[04:23:42]  um if the memos are lazy in there might be a few places where that like changes the initialization behavior it's not going to change the um it's one of those
[04:23:52]  things where it's like shouldn't change like 95 of code but like it but it might change the behavior in like even more like 99 it's like the last one percent
[04:24:04]  might end up with a different behavior slightly um so that's what we're going to look to but it's not an api change it's just like a slight i don
[04:24:14] 't expect much of a change but it should just make most code more optimal better performance but i think those are the three kind of areas yeah you guys are crazy 2am
[04:24:26]  here but that's the thing when you do a stream worldwide what what can you do right i feel asleep start over yeah yeah yeah no we're good we had a really good
[04:24:39]  stream today the rust content was amazing like honestly top shelf and um there's a lot of great conversations this week in javascript about the future of the web and i
[04:24:49]  think these conversations are going to continue um for the next little while just because i mean the react developer influencers have noticed us right like not not just like us solid but like literally
[04:25:00]  us other libraries that exist otherwise they wouldn't be like telling everyone like hey you know like they they view it as like you know the tales of react's deaths are largely
[04:25:11]  overplayed but no one all if you read all the reacts dying articles none of them actually say reacts dying so like i this is uh yeah i don't know what's
[04:25:21]  up something in the water um i think i think there's a i think there's a there's a bit of wind on the on the seas or whatever kind of speed you
[04:25:30]  know time of change kind of situation um but yeah i i think i think these are i i think there's very interesting times bun 0.3 release late late tonight if
[04:25:41]  all goes well man i i i haven't i haven't talked to the rest of the team but if if they're anything like jared yeah i mean that's awesome um
[04:25:51]  i want to do more work with bun when i get a chance jared like majorly stepped up he actually built like a solid compiler like right before he did the release which
[04:26:02]  is crazy you're like okay like if you're i mentioned this before on stream but like if you're doing a release like next week do you just like take a day
[04:26:08]  off and write a compiler for a random framework oh jared subner does that's what he does that's how he gets some work done because he he he sees something he
[04:26:17]  wants to do and then he does it so yeah oh right it's good times yeah no thank you for joining yeah no it's been it's been great i went react
[04:26:30]  to view to hyper app oh good you hyper app was a cool was cool i like that that's like a bit of a yeah so now i'm debating vanilla jazz to avoid
[04:26:41]  the headaches i mean it's fair you know like these things are going to keep on evolving right um the the like this is the fear you have right when you put there
[04:26:51]  if if you if you move too quickly then you might move to things that are essentially the same right because you could argue that all of these are essentially the same on the same
[04:27:01]  like on the same thing like they haven't fundamentally changed the way um um you're building apps don't but the funny thing is like within them they are changing it like s
[04:27:12] velte kit is an example of where i consider a reason to maybe be worth moving off you know from something to something else but yeah this is this is the challenge here
[04:27:24]  um like if you if you can handle vanilla js then yeah but often that's not the case right um like you want to be able to scale it up with declarative u
[04:27:35] is and whatnot do you think javascript frameworks will be server-side first in the next five years or is that just a current hype yeah that's interesting um i
[04:27:48]  there's there's a couple players there's things in there i don't think it's hype like i think these kind of trends take a long time coming and i i feel
[04:27:57]  like if i was to say that it was hype that would be like calling single page apps hype some people still think that though so like i not everyone's going to agree with
[04:28:11]  this perspective or take but like because i saw someone who's saying like they're i guess i'm gathering they're a rails developer they were like oh yeah you know they
[04:28:19] 're like they said that single page apps improved the dx like five percent or something like like they they pulled some number out of their hat and arbitrary like you know but then you
[04:28:27]  lost so much and it's like no single page apps did a lot and for the cases that needed them they were amazing um i do think the server focus is is legit
[04:28:38]  i think i think we swung too far the other way um i think the more interesting question is whether i always talk about the problem with writing two apps this was a
[04:28:49]  problem in the past during the multi-page app it's funny calling it that but during the classic web serving page time you know you had your html server app and
[04:28:58]  then you had like your javascript app you had the two apps that sucked we don't want to go back there definitely not but then the single page app we like brought
[04:29:07]  it all together and then eventually led us to being isomorphic and then you kind of got this question you're going to ask yourself you're like what what i'm
[04:29:14]  saying is now is it's not an intro it's not whether it's going to be server first because server first i think is going to be legit real it's whether um
[04:29:21]  we believe that the authoring experience is isomorphic or dedicated and by that i'm dedicated i mean actually optimized for the platform like if if you're suddenly in a realm
[04:29:35]  where you're actually saying like most your code is server only it's weird to write it isomorphically like you almost want to say like no this is server code i
[04:29:43]  can make this more performant more optimizable and i think that's where the struggle is in the migration from because it's it's unclear where that goes because on one hand
[04:29:53]  we've really enjoyed developing stuff in the single page app world because it's isomorphic it just you just write one app i don't think necessarily having dedicated server perspective stops
[04:30:05]  us from writing one app because when you get into the isomorphic stuff it still works on both sides but it's i think it's a more interesting question yeah i
[04:30:12]  think that's gonna be awesome i mean it's yeah what comes after everyone adopts signals yeah i mean well i mean in my opinion what comes after signals is that you people
[04:30:31]  actually change the way that they're rendering i think i think whether it's through compilation or other means i think that it like i think the component rerun model of react
[04:30:42]  and the like the vdom stuff changes even even uh it's funny uh dom who was talking about who's like look it's a vdom and it's fast and infer
[04:30:51] no his new project isn't really a virtual dom not in the same way he uses reactivity but like if you asked dominic anyway what a virtual dom is he he
[04:31:02]  tells you it's the holes in the template it's not like the template it's not the actual virtual dom you generate he he basically describes it the same way i describe a
[04:31:10]  reactive system so in my opinion what comes after signals is actually the fine grain rendering um you know it might be hidden behind compilers or stuff and dx considerations all that
[04:31:22]  but essentially the mechanics that you see in solid that's that's that's where it's view vapor already took a stab towards it i think we're going to see more and
[04:31:31]  more libraries try and get more like like that how does really break the current ecosystem if it affects composability completely if it doesn't affect composability um that then then not
[04:31:51]  really at all it's the composability that i'm concerned with with it um because if you if you start having to worry about serialization stuff it gets um pretty pretty poor
[04:32:00]  i would never like resumability isn't that important that i would ever sacrifice um composability we like we'd have to like think of a different solution or a different
[04:32:10]  abstraction um you know way to work around it you like um composability and being able to like build up behaviors and have modular apps is way more important than resumability is
[04:32:22]  because like as i said resumability is like the last 10 or whatever like if you already can eliminate most of javascript code you know other ways and even like
[04:32:32]  core screen lazy loading you you know like astro level of stuff like resumability is just like the little bit at the end so i think it's good i think it
[04:32:42] 's important i think it's how we optimize things moving forward but it's it's we we there's things that just can't be sacrificed it's more return the old in
[04:32:49]  a new fashion better check yeah that's what we keep on doing and that's you know the whole stairwell versus the circle metaphor people talking like the spiral staircase um yeah
[04:33:02]  it's because we swing too far in the pendulum right the funniest thing is people who this is what i find repeatedly people who never swung back are where i look to to
[04:33:10]  understand where the next thing's coming from right i've realized i myself was that person for a while because like i never swung to the vdom um but on the
[04:33:20]  other hand uh another example that is the marco team and like islands and partial hydration and it's funny this is why i'm always so supportive on react side of things like
[04:33:32]  even if i don't think that's where things should be right now i feel like i i will learn more from react in the future like after they get through this next
[04:33:40]  hump awesome i'm glad to hear it yeah i mean uh signals are behavior subjects except they have the auto tracking the problem with rcs that makes it hard is that like everything
[04:34:01] 's too fixed it makes it like it was kind of what uh greg was talking about with leptos like the it kind of pushes you more towards these core screen
[04:34:12]  things you don't have to you can definitely do things fine-grained but it's like clunkier so like it just ended up like the idea is the right idea
[04:34:20]  it just the execution is is harder so i and i think that the the the real insight there was what while we did you know solid shown how you can decouple the
[04:34:29]  kind of like view architecture from the um signal uh or like reactive architecture we didn't try and force it like mvc we didn't say like this over here tree
[04:34:39]  this over there true we we overlap them because they do sit together we just have to recognize that they're not always like the same thing right like they they layer on top of
[04:34:47]  each other they interlace with each other they just like that was the problem with the component model because like it says yes state one for one with view this is more like
[04:34:56]  you know there's still an ownership there's still a hierarchy like from this point on down in the code that's where the signals live because you don't need it above you
[04:35:06]  know it's it's it's this component that needs this kind of state but it's not the same it doesn't cause us to have to like re-render stuff it
[04:35:14] 's the combined latest problem with rx.js that makes it more challenging for these kind of synchronizations see the thing is when i used rx i want everything to
[04:35:22]  be a behavior subject i want to be able to pull the value everywhere and to do that required like this overhead of just like two behavior on the end of everything i literally built
[04:35:32]  solid with an rx kind of flavor early on like in the 2016 17 period to kind of like see if i liked it and i was just like after like six months
[04:35:43]  or of playing like that i was just like man i i'm just like wasting my time why am i fighting this so hard for standards and it was because i thought it would
[04:35:52]  become a standard the same way that i've kind of felt about web components eventually too i was like like why am i fighting so hard to like for something that's not
[04:36:00]  like not really solving my problem yeah i'm just kind of catching up with the comments here js frameworks are ideal for demanding ui performance in large application systems yeah three or four
[04:36:20]  apps mobile okay where are we going here what's going to happen to class list everyone wants another class list this is a problem everyone loves class list the problem with class list
[04:36:29]  is there's two ways to go i move it into a directive but then you can't pass it through but it solves my problem because my problem is that composing it through
[04:36:38]  component props is really awkward because you have multiple ways to set classes and trying to merge it for someone for an authoring perspective is basically impossible um i i could um the
[04:36:51]  other option is i've folded into class the problem with that which drives me nuts is that if someone writes and i i'll show you you all this really quick here if someone
[04:37:04]  writes this uh let me go here playground um it doesn't matter okay if someone it doesn't really matter what code i have in here this is from a presentation if someone
[04:37:16]  goes in and writes like um let's let's do something let's just go div and and write class class class equals something okay we can do count so it doesn't
[04:37:35]  error on me if we do this it's ambiguous what this is this could be an object maybe we get a ray syntax and the thing is today in solid we know that literally
[04:37:49]  we can just like call we can just like set the class on this directly like um it's like it de-optimizes the most base case in solid's class
[04:38:04]  system i think i'm probably forced to go this direction admittedly because that's what people want from a dx standpoint but it just it does definitely like i'm very aware that
[04:38:15]  this basically forces us on a path where we we have to essentially um de-optimize the base case all right where are we yeah yeah use the platform right better
[04:38:52]  abstraction change the platform use plan not the hardest part about standardization is is that you know that you're always going to be behind the gambit you're always going to be
[04:39:01]  like um like you're never going to be the latest thing and so you've got to leave room for the latest thing to develop and then learn from and pull it in
[04:39:10]  the challenges is if you pick a target that is too ambitious things might move at such a rate and your the thing you built designed out might be too big to actually like ever
[04:39:24]  become the thing i i feel like this was a bit with web components because i was like i think they i think back when web components were created they were exactly what we
[04:39:32]  thought we wanted from a component library like like like like it could replace frameworks but now it's like no they can never replace frameworks like it's just not even the same problem
[04:39:42]  it's like completely different thing and i think that's like like and you use frameworks to author them like i think that's where the the challenge is like at this point like
[04:39:54]  i wish if we could like kind of backpedal and like look at like what the fundamental building blocks were in a smaller chunk and see how we could get that into
[04:40:02]  the platform because the the whole story um just isn't compelling enough and things move in too much you know like we might have learned that this wasn't the direction you know if
[04:40:12]  we'd gone with smaller steps i don't know it's so hard because the problem is the i've heard the opposite complaint i think it was rich hair saying that this thinking
[04:40:19]  the problem the web platform is the fact that they think that if they can just make small incremental steps over time that they can like build towards something and reality doesn't work that
[04:40:27]  way so i mean this is not an easy problem yeah the right tool for the right job right i actually made it an rx type library for solid the problem was i
[04:40:45]  found like every time i was doing it i was just like why am i writing these uh like like i could write the same code in solid with like less code for the simple
[04:40:54]  cases when you get the complicated stuff nothing matches rx on that side but if you go into solid primitives we have a bunch of like helper operators that work with mem
[04:41:03] os so you can like use them you can basically use you can functionally compose um or create memo to basically work like rx js if necessary yeah yeah they put
[04:41:26]  the function in it because you feel like this is a problem you need to solve yeah but man you know like the compiler can we can do such am i just i'm
[04:41:38]  not showing my screen can i the reason class list is so sweet here and people pointed this out to me before and they they're like i can't believe solid does this
[04:41:49]  is like if you're like i don't know let's say something and you do something like this like we we toggle the specific property based on the count like the compiler like
[04:42:02]  when you inline the objects can do really powerful things so then we can be like oh this all right let's do something else and then like um i'm gonna make
[04:42:14]  something else up count two or something like we we actually can like go okay like we can we can update the individual classes independently using optimal apis from this compilation i i see
[04:42:25]  like it's like oh if this one's changed so i'll go this one i thought show this one i i wish this is not something you can do with just a
[04:42:35]  runtime library to have that kind of performance thing i like it it's just it's it's the challenge right what's the next thing after jsx that's hard um better
[04:42:50]  jsx i don't know that's the problem is the reason jsx is good or is powerful is because of um like it isn't because of hyperscript it's
[04:43:00]  because like like like every tool out there like babble and this this is this is kind of like the react effect in another way but like every tool out there knows how
[04:43:08]  to parse jsx um and i don't mean like compile into hyperscript i mean literally just parse it and once you know how to parse it you can build custom transforms
[04:43:16]  and you can do all that kind of stuff and just made it really really easy plus i like how port from a client side perspective i think like i wouldn't say the same
[04:43:24]  for server-side templating but for client-side templating jsx's portability like div equals div is incredibly powerful for composition so like i think jsx has
[04:43:33]  features that i wish were there i'd be really cool if like i don't know if there's a world i want to go into but i imagine others might is like if
[04:43:42]  do expressions were inside jsx natively and then you could use for loops and stuff and if statements and turn it like in jsx then the syntax would actually be analyz
[04:43:52] able they'd be like possible to actually do optimal control flow without using like components if that was what you were into kind of way that we do turn areas i don't
[04:44:03]  know if i want to go there but like other than like that which is like kind of way out there and like maybe what's the other thing that i that i liked uh
[04:44:13]  um like punning like like the ability to like have some like syntax shortcuts jsx basically does everything i would want it to do like and it's and it's it
[04:44:22]  does it tightly in a way that makes sense without introducing um new conventions or syntax and what i mean by that is like like uh like if you like i know passing a function
[04:44:34]  to jsx is weird to some people like you use it passing callback but i mean it's still an extension of the javascript like you can picture it um the
[04:44:42]  challenge i have with a lot of different templating languages especially ones that use directives is that like the the changing the semantics of what an attribute is um i like
[04:44:50]  that there's there's like none of that like like you don't have to like read the attribute to know what it does like it literally like syntactually tells you function
[04:44:59] ally what is going on because of like the the way it works like an example of breaking that rule right now is ref ref is not is a special property it is not the
[04:45:08]  way an attribute is supposed to work we are kind of missing that in jsx or in all the templating languages but like other than ref react is pretty clean on that
[04:45:20]  and jsx is pretty clean on that and i i i want more of that rather than like i'm just not a like either like svelte does where they have like
[04:45:29]  the specific language but then um it's not composable like handlebars it's like you don't get to compose them the same way you compose components so really like for
[04:45:38]  me jsx actually is checks pretty much all the boxes um of what i'd want out of a templating language especially for client-side rendering um so yeah it's it
[04:45:49] 's tricky yeah the problem is a lot of this like this is what you will find a lot of stuff is small startups and like close source stuff you're not going to
[04:46:09]  find the stuff out in the public yet um that's just the reality of where we're at right now um we're only getting we're we're like starting to get people
[04:46:16]  and be like hey be a case study like it's just like a lot of our adoption has happened post 1.0 like people played with it but now they're building real
[04:46:25]  projects it takes six months to a year to start seeing the output of that um so yeah i'm hoping that we will see more of this in the wild solid native people
[04:46:33]  come saying let me pull you pull up something like okay there's different ways you could build solid native and i'm just gonna go like anyone who says solid native just this project
[04:46:44]  might be dead right now someone made a wrapper over react native but they what they were saying like don't think of this as react native just think of this as the first step
[04:46:52]  we get this working with react native then we can build our own thing eventually and we build it up this is a very pragmatic view of this because the truth of the matter is
[04:46:58]  trying to make something like react native and solid would be like i i i like i don't know if people realize this but like there's the react core team at meta
[04:47:06]  right you know who work on the react stuff they they don't make uh react native like they have i think there's like there's more people around making react native and supporting
[04:47:16]  the ecosystem i think microsoft helped them a bit too like than people making react at a meta like it like there are other teams and platform stuff around react but like what
[04:47:26]  i'm getting at is like react native is huge amount of effort that like that's not something like an open source project can pull and make themselves um you know easily without making
[04:47:36]  it like a priority and for me the web side of stuff is more of a priority like if we change our focus like the same way we change our focus in solid start we
[04:47:44]  can make solid native happen but it's not like compared to everything else going on there's no way i could prioritize that um i could help organize it and if there's
[04:47:52]  interest kind of push towards a project but this is this is what i'm kind of getting at it there's nothing in solids custom renders and whatnot that would prevent us from
[04:48:01]  having solid native people have made solid native like a basic version of it people have done stuff with uh native script and stuff um you know and also obvious things like tori and
[04:48:14]  you know electron and that kind of stuff but what i'm getting at is like this is completely within our wheelhouse to do it's just like it's it's very
[04:48:22]  hard for me where i'm sitting to prioritize it but if there's interest we could definitely foster an environment where we can like work towards and i i don't know where this
[04:48:31]  project ended up but um i think this is i think this is interesting i like this what's the next thing after typescript i don't know is it esno or
[04:48:52]  whatever like i i i p we started the stream where i was talking being kind of critical of typescript and um i think that's that's actually like more fair where
[04:49:05]  i'm thinking of it's actually typescript that i find like it i don't mind typed languages um at all it's typescript is actually the only one that rubs
[04:49:13]  me wrong um so like i don't know maybe it's because i'm still trying to write typescript like javascript and that's the problem and i refuse to
[04:49:23]  give up javascript but i mean i wonder if they're like a different approach and i know ml languages are out there uh like reason ml and all that where you know
[04:49:34]  people are doing like smart stuff where they actually build a better language to actually work with the types in a way that's actually makes sense yeah it's a hard one because like
[04:49:44]  someone makes a language that actually you want to use as much as javascript with that flexibility and works with types and isn't like messy like typescript like will anyone
[04:49:56]  move to it like that that's the problem because like trying to get people to use a new language is super almost impossibly hard people talking about esno yeah esno
[04:50:19]  looks pretty cool again another super smart kid sorry i stop calling the kid but when when i'm almost double their age i get to do that right that's that's my right
[04:50:30]  that's it's old man talk um all right news yeah people talking about react native yeah i heard the react native team is three times the size react team yeah i i
[04:50:54]  will that yeah i especially probably more now because i think the react core team is a lot smaller yeah you can definitely do a lot of great pwa development right now so
[04:51:05]  yeah don't worry about that oh man brandon you're asking all the great questions today um how do you decide what to build around solid instead of just building the primitives
[04:51:22]  yeah i i struggle with this i did i didn't want to like i i always say how i didn't want to create solid start i hope other people did i i
[04:51:28] 'm like happiest sitting there working on the primitives um i felt like ssr was a place where it was so complicated and hard to configure that like we needed to think
[04:51:38]  about the primitives there too like maybe there's like fundamental stuff that's why we have stuff like server functions and why i'm spending so much time looking at server component
[04:51:47]  type stuff because i'm trying to think of like if there's like the web is a unique place like the thing is you can when i'm looking at like the zones you
[04:51:58]  can go like you know like solid native for example most things that aren't the web that aren't the client server model have different natural needs like the though and while a mobile
[04:52:12]  app talks to a back end you know know it's like not being served in the same sort of way um and i realize like a lot of people like draw the comparison
[04:52:21]  like trying to make react native more like react web you know like that kind of thing where like you know you can like have server components and that kind of architecture and there's
[04:52:29]  probably reasons to do that that i haven't seen i think the difference is meta has been using relay to ship components as json or like json s format for a
[04:52:41]  while now um and actually ebay has something similar called the experience service so like when they talk about this stuff it's like not the same as the way like we think of
[04:52:49]  it or using it like from like the public consumer standpoint and i i think i i think it's funny because like if you split there like almost everything that's else that
[04:53:01] 's app like doesn't have that same initial load consideration that the web has you know the restricted resources the device consideration um i mean iot does care about size but it's
[04:53:12]  not because of the network you know what i mean it's just because of like limited resources right so like i consider that in the same category as like solid native or whatever
[04:53:23]  where we could just focus on making the most powerful app like primitives and and build that the web requires a completely different consideration because as much as you try to hide it like
[04:53:34]  you're only getting trouble if you ignore the fact that the client and server are different things and that this is part of a folk equation so this is a much trickier problem
[04:53:42]  than why i spend most of my time there but that's that if that i i don't hope that answers the question a bit of like why i've been focusing more
[04:53:50]  on that side um but yeah i am always thinking about the primitives trying to streamline it like 2.0 is more of a opportunity figure out how to streamline lower the number
[04:54:01]  of primitives you know or deprecate some or transition them and change the boundaries that's where that's where i enjoy working the most um i keep on trying to you
[04:54:09]  know write articles and give people ideas so that they can go and build stuff but then maybe i'm not very good at conveying it and i end up having to build
[04:54:17]  it myself or core team like people close to me end up building it um but like meta framework was one even the islands router the stuff that showed off with the solid movies app
[04:54:27]  demo i i was like trying to explain people how to build it like last january you can go check out my dev too i have like uh i have like a fun article
[04:54:34]  about like the return to server side rendering like i've been i've been trying to like i was like i went in the astro discord in january and like you guys
[04:54:40]  need to build this thing and they're like what are you guys talking what are you talking about ryan i'm like no no trust me you want to build this thing
[04:54:45]  and they're like i don't i don't even get what you're talking about i'm like no it's like server components i'm like trying to explain and they're
[04:54:49]  just like i have no clue what you're talking about i'm like okay okay well we'll circle back again later um so yeah i don't know i i don't have
[04:54:58]  the privilege i guess to always i i want to keep on moving things forward so um i i i do try and be pragmatic by looking at if anything's too big of
[04:55:09]  a chunk i don't want to take it on but sometimes i we don't have a choice if it's important enough i haven't touched it i i we've had a
[04:55:18]  handful of libraries i've got some feedback i would love if someone like the keel took a big interest in it too i'd love to try and get some of the feedback
[04:55:30]  back in like someone did make a pr about a couple things i wasn't sure though enough i needed i don't have enough people tell like talking together about the direction of
[04:55:39]  the customer renders enough to know which of the decisions are the right decisions to make no one's that invested on the customer renders much they're more just toy projects so
[04:55:53]  yeah people talking about coffee script espresso script t script thank you yeah app stores and pwas it's it's a little bit fun because you then you try and wrap it
[04:56:09]  in like one of those like web view things and apple has like a whole policy that says like you can't do that but it's it's unclear because i've seen i
[04:56:20]  know companies who have done it if as long as they catered the the ui in a way that felt like it was it was apple and but yeah the apple like
[04:56:28]  like apple will not let you just like put a pwa in there and like not use their controls for navigation all that stuff so it is definitely trick trickier yeah i
[04:56:48]  mean uh uh vitigami my old startup uh made a pwa and got in the app stores but got an android apple struggle i i don't know where that story ended
[04:57:08]  yeah yeah yeah i mean i i talked to fred last week and i think we're now finally on the same page but that's the thing it's just the timing
[04:57:15]  and when we put the effort in to kind of think through this stuff so i've definitely talked to the astro guys a lot recently about my thoughts on rscs and
[04:57:22]  the the future of hybrid routing why do framers use virtual domain don't know um uh well i mean kent c dodds already gave us the answer to that um
[04:57:37]  where is it uh yeah it was in here something about virtual dom is actually kind of simplistic um to be fair i mean there's different versions of simple but like i feel
[04:57:50]  like virtual dom let us go to a a place where we could just be like okay just re-render it again it's almost like a game engine kind of mentality you just
[04:57:59]  like throw it away re-render it um and it doesn't in a way that the performance isn't particularly bad uh i think it also in that sense it provides a really
[04:58:11]  nice safety net because like you can't get yourself in trouble the problem is you also give up a huge amount of control but like the i mean don't get me wrong
[04:58:20]  you can do terrible things with a virtual dom but like there's like a certain floor for most things like don't get me wrong you can just keep on piling it on
[04:58:30]  there and just trashing your app but i think it it's fairly sane is the term i'm going to use for like a default of how to render it's also easier
[04:58:39]  as a leptos guy's mentioning like for someone coming in and going okay i rendered this function now i just render it again like it just removes the whole concept of like
[04:58:49]  what updates you of course how do you ever optimize it i feel like hooks for react were like they were like realizing that they actually needed a language to describe change like they introduced
[04:59:02]  hooks because they needed to get away from that simplicity it was like too simple they didn't give them the control they needed so they invented a language for it and in that
[04:59:10]  sense um that simplicity has disappeared and i i think like yeah it really is just that initial benefit of simpler model um and now that we've optimized past that point um even
[04:59:28]  like those on the virtual dom side of the argument will just say oh virtual dom is not important it's a uh implementation detail well yes you want to say that because it's
[04:59:41]  no longer simple enough to just explain the whole system as a virtual dom um and it is a fairly important implementation detail if you have to think of the whole world as always
[04:59:49]  re-rendering but that's where they're going that's where the direction they're heading yeah i haven't played it with much of it i know nikhil's been
[04:59:59]  back to making 3d demos this last few weeks so yeah um i i just need to push him to actually publish it for real do you know why it isn't nik
[05:00:07] hil is like a tinkerer he likes building stuff i don't think he really cares to maintain solid 3 in the same way he he enjoys 3d so he's gonna
[05:00:18]  play in it and if you know he'll he'll probably fix bugs and maintain it just because he loves it but the second that he's not interested i don't think that
[05:00:28] 's where he wants to be at so if we really want to take solid 3 to the next level i think we need more investment with people with nikhil the kind of
[05:00:37]  like bringing in a more organized way but i think i i think i think it's uh i think it's i think it's pretty sweet honestly what from what i've seen
[05:00:43]  of it yeah yeah i'm describing i'm exactly describing the the react model in terms of where the simplicity went out the window i think the vdom still has all the traits
[05:00:58]  that we were talking about i but i i think i think others even on the vdom side are they need to solve the same problems react solved like like view did it
[05:01:10]  with reactivity and preact is now kind of going okay maybe not hooks i want and that that helps a bit but it doesn't actually change the fundamental thing that you're
[05:01:19]  trying to solve but you get to a certain part with the virtual dom you're like i want to optimize and you realize that your your choices are limited like you can optimize
[05:01:28]  from like a rendering library standpoint like um like dom does you know he's doing crazy work there and he did crazy work back in the day with inferno but from like an
[05:01:38]  authoring standpoint um standpoint you need to kind of that's what keeps like that's what's leading to stuff like hooks or signals driving it like signals driving vdom isn
[05:01:49] 't really like naively is not better either it's actually almost kind of worse so like there's there's definitely a place that like a question being asked to be solved
[05:02:08]  awesome i had to hear that yeah yeah yeah no yeah mark is amazing mark is my hero all right we're at five hours right now unless there's anything else i think
[05:02:26]  i'm just gonna call it order my sushi and have a great weekend well i don't know about all you um let me check twitch chat make sure i didn't miss any
[05:02:35]  subscribers you know i i haven't been in here for a while there we go we we we earlier when i wasn't paying attention we received a level three hype train em
[05:02:47] ote so um there we go that's that's a new that's new for us so nope twitch looks good youtube looks good um thank you all for joining us this was an
[05:03:04]  epic stream honestly the rust stuff just blew my mind um thank you all have a great weekend see you all next week when we talk i think about next js 13.