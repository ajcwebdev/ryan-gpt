---
showLink: "https://www.youtube.com/watch?v=jHDzGYHY2ew"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS 1.5"
description: ""
publishDate: "2022-08-26"
coverImage: "https://i.ytimg.com/vi/jHDzGYHY2ew/sddefault.jpg?v=6306bb41"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 03:57:23, which means the transcript is three hours and fifty seven minutes).
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

[00:00:00]  Hello everyone welcome to my stream today I'm going to be flying this one solo I'm going to be talking about what went into building solid 1.5 so this isn
[00:00:14] 't going to be just a stream about the features I'm gonna actually talk about the implementation the design the decision so I went behind it so this is probably a pretty in
[00:00:28] -depth hopefully you're you're all in for that that's what we do around here right so I'm gonna give everyone a second to join in on the stream just gonna
[00:00:39]  pump it here on social channels just give me a second while we get started see here yeah I've been trying to decide whether like I should be pushing twitch more or should be
[00:00:53]  pushing YouTube it's kind of a interesting balance I started everything on YouTube and I quite like that but to be fair twitch has a certain amount of interactivity that's pretty
[00:01:08]  cool so yeah let's just people are starting to trickle in alright perfect how's everyone doing today there you go see we got we got some different opinions here some
[00:01:35]  twitch bias going on and all and apparently YouTube has less sorry where is it here yeah YouTube has some less latency in South Africa apparently so maybe there's no clear winner here all
[00:01:48]  right no I'm I always enjoy these streams like this one because I get to kind of talk about what I've been working on and in more detail you know half the
[00:02:01]  time we're looking at what other more than half time what other people are working on but the these ones always get to be a bit of a showcase and kind of like
[00:02:11]  talk through a lot of the decision points that matter to me so to speak yeah thank you yeah no 1.5 has been going on for a little bit now honestly so
[00:02:27]  yeah it's uh we'll talk about that in a minute I'm just a just welcoming everybody on here as we get started it's given a couple more minutes I think I
[00:02:40] 've shared the link in all the proper places now so let's give just another minute or so I'm gonna do this we can JavaScript later like I've been doing recently
[00:02:57]  with the guest streams I think it just works better that way I'm um gotta wait for my hot takes so to speak um not that I'm sure they're that hot
[00:03:08]  but um you guys definitely uh um got me last week with the the bun announcement I wasn't prepared for that or not bun announcements or the the the Dino announcement I wasn
[00:03:21] 't prepared for that um it was it was pretty pretty pretty I don't know what the term is just like off the cuff like I hadn't I was not ready this
[00:03:30]  week I did pay a little bit more attention in there because well I mean how could you not um the conversations this week have been all around that but we'll get to that
[00:03:39]  later on in the stream um right because we're here mostly to talk about what's been new with solid and solid 1.5 yeah nice people coming in from all over the
[00:03:51]  world it looks like that's awesome all right looks like we have more YouTube representation than Twitch right now though so people on Twitch got it got some work to do I don
[00:04:04] 't know it's fun work I have to do I think I think there's a big gap between having I think I have like 3,000 subscribers on YouTube and like
[00:04:13]  200 on Twitch so we we got a bit of a gap to cover all right how's people still coming in yeah what we got Pakistan well I guess the new streaming time has
[00:04:33]  helped some people it's probably pretty late where you are but um I used to stream at 8 p.m pacific which meant it would be like 3 a.m
[00:04:42]  or 4 a.m for you so um glad you're you can all make it it's hard you can never get like a perfect time for everyone someone was like oh I
[00:04:50]  can you stream something more EU friendly and it it's it's it's possible obviously um we went a little bit earlier but yeah perfect time for you great to see you
[00:05:02]  Alex all right lots of hot topics yeah yeah and honestly for the stream I want you guys to kind of keep me honest because I'm gonna be I'm gonna be talking about
[00:05:13]  implementation I'm gonna be talking the details and sometimes I get caught up on those and it's gonna you know if you have a question you don't understand what I'm
[00:05:22]  talking about please ask in chat please you know like no no bad questions here I I want to make sure what I'm saying makes sense because sometimes this stuff is pretty complicated and
[00:05:33]  I've spent so long in this like narrow focus that I'm like I don't realize like how off the deep end I've gone all right yeah okay we I guess it
[00:05:42] 's been five minutes of me just rambling waiting for things to get started so I probably should get started right like that's that's why we're here um yeah maybe
[00:05:53]  I should create a banner so I can remember where I started um not that here we go see so is everyone ready better than five in the morning yeah oh yeah all right well
[00:06:10]  it looks like we got some people here okay so let's let's let's get started and talk about solid 1.5 um which is a release it's been in
[00:06:20]  the works I would say since July ish sometimes when I'm working on one minor release like there's so many bug fixes fixes that I'm just chasing the previous one for
[00:06:33]  quite a while like between 1.3 and 1.4 um there was a lot bug fixes we did a lot of ssr work in 1.3 like streaming
[00:06:43]  and did like basically completely updated our capabilities on what we could do with ssr and this is really important for working on things like solid start and I was working and iron
[00:06:53] ing out bugs for weeks and weeks and weeks um thank you to everyone who jumped in on those newer um ssr technologies right off the bat and helped test it it
[00:07:04]  was incredibly valuable but 1.5 was kind of was kind of a funny one and let me explain why um let me get my my screen in here um not like that
[00:07:20]  like this 1.5 almost started immediately um after the 1.4 release like sometimes you you do everything and you you you you plan everything out and then you miss something small
[00:07:41]  that's essential and you go like how did you miss that well in our case in solid's case um there's certain apis that we have that I never use never
[00:07:54]  recommend and like just like I basically say like avoid unless you need to know what you're doing and that seems like a weird choice like why would you have apis and
[00:08:06]  solid that you should never ever use and the reason is it's not never ever it's just sometimes there's edge cases when you live in a reactive declarative world there's
[00:08:19]  boundaries to other code other systems and you know imperative procedures things that aren't exist that you don't have control over and um essentially in those situations um you do need other
[00:08:34]  tools you need to bridge that gap and it's important to me and it's always been important to me with solid to bridge that gap because that's how you can slide in
[00:08:43]  and make the same kind of comparisons and stuff like if we didn't have our like in solid you almost never need the data diff but if we didn't have the ability
[00:08:51]  to I couldn't show how fast our approach is compared to vdom libraries in heavy data diff situations you know like like we wouldn't be able to like someone would have to
[00:09:05]  build that and for those like cases you know that you need it it needs to be there but some not every tools for every job um and what happened in 1.4
[00:09:17]  I know this is a long wind up is I added two features at the same time top level arrays in stores which is the chef's kiss or whatever like this this I wish
[00:09:25]  I'd thought of how to do this earlier this is this was the thing that suddenly made stores and signals top level feel really nice because you were kind of tempted previously to kind
[00:09:36]  of put them all into like a single store and make these big singular store objects once we got top level arrays you could just be like this is a store this is a
[00:09:44]  signal I understand everything works nicely you get rid of unnecessary nesting it's a really big feature but at the exact same time um we added uh it's funny it's it
[00:09:55] 's like it's like a it's like a liner note here somewhere like it's not even like something that like made the headlines but I fixed a very very long time
[00:10:08]  bug in solid um which I don't even like did I even mention in the release notes probably it was just like a simple bug fix um but it's like it's like
[00:10:20]  it's probably buried in here somewhere um yeah wow it's not even I I'm probably just not seeing it right now anyway the problem was that solid had this batching
[00:10:33]  mechanism this ability to kind of like put some uh changes together and apply them at the same time because if you're going to update a bunch of stuff you don't want to
[00:10:41]  like always just immediately update and the the problem was that stores never listened to it they just ignored this mechanism and since it came up so rarely no one really noticed um and
[00:10:54]  that you know seemed like a good thing to fix like when we were thinking about they also didn't obey concurrent rendering properly you could get leaking and bleeding so I was like this
[00:11:07]  is something really high priority from a mechanical standpoint kind of in the background not even maybe release worthy that I want to fix and I and I did that as part 1.4
[00:11:16]  and I we talked about on the building 1.4 stream and and uh what ended up happening was I was pretty happy with myself I did the release and like within the
[00:11:32]  first day someone's like create mutables broken and and I was like wow yeah you're right this actually just doesn't work and that's pretty huge right you do this
[00:11:48]  release you work on it for you know months and you kind of figure out where the right balance of pieces and features are where you want to be and then you break something that
[00:11:58]  again I never use and never recommend but there are use cases and some people like this primitive and it's just completely busted because I fixed a bug so right off the bat I
[00:12:11]  was like okay I didn't rush to it and try and patch it or something this was too fundamental and I didn't want to lose like I didn't want to just
[00:12:19]  like trying to hack in some fix here because like then it wouldn't make sense we I realized I had to rethink things a bit um and this kind of came at a perfect
[00:12:30]  time where we started rethinking the future of solid anyways um if you aren't you all aren't aware um started a working group here um it's it's pretty empty right
[00:12:40]  now in terms of discussions I think there's only like like thing but I started kind of pitching ideas towards the future of uh reactivity in solid 2.0 and there
[00:12:51] 's there's actually a decent amount of discussion here and people had ideas and proposals and stuff like you see I'm still scrolling like this this has been a really good process for
[00:12:59]  us and I hope to engage this more in the future but what I want what with all these kind of conversations happening simultaneously 1.5 started a different place it wasn't
[00:13:09]  trying to necessarily chase the bugs even though there was a big bug here but like actually go well we can't release this until we actually know what our future looks like and that
[00:13:20]  was a big part of it um sorry it just caught up on a comment on stream I just want to throw this one in at this point the name for 1.5
[00:13:29]  isn't the good batch referring to the Star Wars the bad batch the funniest thing is I had suggested the bad batch but then people like oh they might people might not get that
[00:13:38]  reference and think that it's like a bad release um it just didn't occur to anyone to say the good batch is like a reverse play on it um but yeah I wanted
[00:13:48]  to point this out because this was definitely in the short list anyway what what so on that note that's where I kind of want to start talking about sol 1.5
[00:14:01]  today because every piece of this basically started with us asking about what the future should look like sol loses interrupt with rx.js I hope not um there is actually some feature
[00:14:17]  improvements that were made as part of 1.6 even improve um observability um uh small there's some small bug fixes and tweaks so um I believe there there isn't
[00:14:29]  an issue unless you're aware one that I'm not aware of there's that there was actually work done on the rx.js integration stuff as part of 1.5
[00:14:38]  but it was pretty minor so I didn't end up talking about in these release notes um but yeah and so I I what I've done here is going to set the
[00:14:48]  stage right so we had a whole bunch of issues that kind of opened up all around the same time too and before I talk about what we did in 1.5 I want
[00:15:00]  to perhaps highlight what we didn't do okay sorry I should have made a banner for that because what we didn't do in 1.5 is actually more than you'd
[00:15:19]  think and I think it's important here to to kind of give a basis so you can kind of understand a bit on this decision process um there's a couple issues here um
[00:15:29]  and I'm just going to pull them up right now so you can kind of see what what I'm talking about but they were just like let me see if I can
[00:15:38]  find it um this is a good one boolean attributes um another one yeah okay cool I'm just going to show you all a couple kind of funny issues you get when
[00:15:57]  you're building a framework and you're just like what like a little bit like what's going on um because the answers aren't always obvious right for example this one was
[00:16:09]  a this one was a fun funny one someone pointed out that error boundaries do not catch falsy values and I went down a crazy rabbit hole here because people were like no I
[00:16:20]  if I throw undefined I I want it to like properly work with errors and the same thing with create resource create resource error boundaries people are throwing undefined and
[00:16:31]  going like why is this not like working properly and you can you can understand why um because if you hold the error in a value variable and the value is undefined that
[00:16:39] 's the same as if there is no error so I went I went down this whole rabbit hole of trying to change everything so we could have undefined errors and I realized
[00:16:49]  that was like you know this is one of those things you can you can look at the discussion here I started making like special symbols to define like there is no error but
[00:16:59]  then once you started moving things across boundaries every single place I took an error as an argument now needed to go like past the second argument that's like is there an error and
[00:17:12]  just kept on branching out and out and out kind of coloring the whole code base and I was like like have people people got to be messing with me at a certain
[00:17:22]  point I got so frustrated with this issue that I I was just like like why are you throwing undefined errors um so we actually changed the behavior here in in a different
[00:17:33]  way we actually ended up saying like if you throw like undefined errors we're just going to make an error object that's under like like unknown error and handle it
[00:17:40]  that way I know that's kind of like taking a pretty big assumption there but this had kind of gone completely out of hand because it was funny because I went through the code
[00:17:50]  and I thought I hit all those points but then when I re-implemented it with this like undefined error I found a whole bunch of bugs because of stuff
[00:17:58]  like invisibly failing because of this whole undefined thing and now that partially could be my fault because of my lack of typescript skills or whatever but trying to account
[00:18:08]  for things that aren't there but are there is the weirdest experience and I wasted like a week on this and it was the biggest waste of time ever but I learned something important
[00:18:20]  here because like yeah I mean it's there's a lot of thought and talking in here but this was just like the perfect example of how you can kind of get pulled
[00:18:30]  down a rabbit hole for something that's like like there's always edge edge cases and you have to I think the almost most important part is being able to explain them rather than
[00:18:41]  actually um even more so than like the fact that they exist because sometimes it's not worth fixing them it's and this was one of them we had another really interesting one and
[00:18:54]  I'll kind of leave this open to to you all to decide which way you think was the best way to handle it but boolean attributes this is something that um
[00:19:03]  in the end we decide to not make a change but there there there is there was it was noted that in solid if you had a boolean attribute on an element it
[00:19:15]  would put in quotes here essentially like it does in HTML but if you put a boolean attribute on a component it would pass true through and this was kind of inconsistent
[00:19:31]  but the challenge here is you can spread things right you can you can you can spread values coming in from a component and if the component that you lose the information on whether
[00:19:48]  it's boolean or not once you just have an object of props that is like foo true so you you have two options foo can either be true or fo
[00:19:56] o can be empty string when you have a boolean property and our uh our position here is kind of inconsistent because on a regular element it's a string but on
[00:20:11]  a component it's true and in a sense on a component it has to be true because as i said you can't differentiate so there was well unless the proposal is to
[00:20:23]  make it always an empty string which is where where where we can where we were kind of debating it and this seems very logical from the html side of things right like
[00:20:35]  because this is this is what you'd expect from html but the funny thing is i looked at javascript frameworks and not a single one had taken this decision
[00:20:44]  point i already knew this like way back but they're they're they're most people want true um funnily enough like to to be um true um which is which is
[00:21:00]  kind of interesting right because the the problem is if you look at the difference between the the rows there's like a difference here and to be clear this is only for non-
[00:21:15] boolean attributes i know i'm getting kind of technical but the way that react most frameworks handle this is they keep track of which attributes are actually boolean attributes um
[00:21:25]  versus not and actually you know what i'm going to show you something really quickly here so you see so you guys can understand what i'm saying there are actually different like
[00:21:36]  there are different um attributes that actually work differently like draggable only works if if uh let me see can i put drag on the button yeah there it is only works if
[00:21:51]  if you put true if if if draggable is just there like this it it doesn't actually work so there's there's like boolean attributes and pseudo bo
[00:22:02] olean attributes and this is kind of like why is a dom so freaking weird right and essentially none of the frameworks actually have have chosen the line with with html
[00:22:21]  um there's basically two approaches that frameworks have chosen here um one is the way that solid does where it treats the the element boolean special and actually svelte has
[00:22:33]  the exact same behavior and the other one is you treat this one as true so if you do this it's the same as this which is what preact react in inferno
[00:22:44]  does and arguably in a sense that one's more consistent but it breaks expectation on on standard dom so as i said this is a very technical um scenario and you notice on
[00:22:57]  the react version draggable would be sufficient like this would work in react because it would make it draggable true but in solid you actually have to make it true
[00:23:13]  to actually do this whether it's um sorry whether it's uh like this or the string and this is i this is like one of those interesting things and actually the same is
[00:23:25]  true as svelte as well it's just like the dom under how much of the dom do you hide from people and how much do you change expectation here because on one
[00:23:35]  side you kind of wish that this would just work for draggable but if this just works for draggable then boolean properties um and stuff like i think
[00:23:45]  people are talking about sorry not there people were talking uh not that one people were talking about things like data properties don't work properly like data hk and like a bunch of
[00:23:57]  dom stuff like there's actually this is another one of those places where the compromise is not great right luckily there's far less of these boolean thing like basically we
[00:24:10]  know which properties are the defined dom boolean properties and how to handle them and then we handle the rest in in a way that reflects how they would be handled in h
[00:24:20] tml so i think i think this is one of those interesting cases where some people are very strongly on one side some people very strongly on the other side and it's
[00:24:32]  weird but we landed in the middle still which meant it was no change and we continued on but i just i just want these are the kind of conversations that you start having when
[00:24:40]  you get into this zone right um something has a question what about an own language like salt or script body textiles and people have done that if you are interested in this
[00:24:52]  um there are projects um where people have done stuff similar to it my opinion on this is like if someone wants to put in the effort to do this go for it but it
[00:25:02] 's a ton of work like because you suddenly don't get the free syntax highlighting and the prettier and linting and uh typescript and like you basically have to build
[00:25:15]  the whole ecosystem from scratch um but yeah i mean if you if that's where you want to spend your time then that it's maybe something worth doing um anyway so there
[00:25:31]  was one other issue but i'm not going to get too far into it but uh it was about stores and wanting to remove the symbols and i went through a bunch of benchmark
[00:25:44] ing and realized that you know there's performance implications so again we left it as no change but really with this release the reason i want to highlight this before we got into
[00:25:52]  the guts of it is i just wanted to talk about and show how how much like debate and deliberation went over um these very might like seemingly minor details um because these conversations
[00:26:06]  are happening again right um um and yeah i i think i think i think that's enough for this kind of preamble here um let's let's talk more about
[00:26:19]  what we actually did with solid and a couple a couple of them is uh the ones that i was pretty happy with before we again get into the more technical stuff is i feel
[00:26:29]  like this release again um kind of improved um how should i put it quality of life improvements that that's how i'm going to say call it um i was actually really
[00:26:42]  stoked that a lot of other people came in and kind of helped contribute um one of one of them was milo from the core team he he solid is now if you notice
[00:26:52]  a pmpm workspace turbo repo um it's easier than ever to get started to download the project run test build all that stuff there were some clunky bits that were
[00:27:03]  kind of awkward with all these manual scripts everything is so much faster and nicer to use if you want to contribute you can you can literally just pull it down run the commands there
[00:27:12] 's no weird like oh you have to build before this turbo repo takes care of everything for us i've been super stoked on this change and that that was a big one that
[00:27:21]  came in here so thank you milo um and there were there was a few small um uh features like things people probably have been asking for forever um like uh as everyone
[00:27:36]  knows solid has a children helper which helps you get the children um if you need to process them specially so you might be like c equals children props dot children right uh sorry
[00:27:53]  in a function and this will kind of like deeply resolve the children for you and and um actually i'm on 1.4 point so i can't show you here um
[00:28:05]  let me hack the url so i can get the latest um now the thing is if if there is a single child what ends up happening is uh it's just the value
[00:28:21]  and if it's an array it's an array but now if you want it to always be array you can just go sorry the types aren't updated in here but you
[00:28:29]  can actually just call to array on this thing right so you can either access the children directly like this or you can call to array and you now will will get um we'll
[00:28:41]  we'll get the children as an array and just in case you don't believe me because typescript we haven't actually updated this this the release just came out today um we
[00:28:50]  need to get this updated there there is actually some simple array handling just a small thing people have been asking about this a lot recently porting react libraries they're like how
[00:28:59]  do i how do i simply move the children um to an array so i can iterate over them these patterns all work in solid even without it be dom there's just some subtle
[00:29:11]  differences um typescript stuff has definitely been a lot on on on our mind here um like uh and one there's something called node next which i knew nothing about before this
[00:29:28]  release but against uh this another place where someone from the community came in um and basically updated everything added extensions everywhere explicit extension export fields across solid and um uh dom expressions to
[00:29:44]  support uh node next which is the new kind of typescript um resolution so yeah i mean these things are just they're small things but they're really nice things that make
[00:30:00]  stuff you know um easier to use and actually while i'm on typescript we're going to nail off one more feature um before uh which is actually probably one of the um
[00:30:12]  i have to put it one one one of the the ones that i actually thought was worth highlighting on the release notes um which is keyed control flow and some of you
[00:30:26]  might be like well what why am i thinking about keys again i thought you didn't need keys in solid right um and the answer to that question is actually a little bit more
[00:30:41]  um involved but the simple thing is the reason you don't need keys in solid is because we use mutation to update things so we keep static references so you don't need
[00:30:52]  keys because the the actual instance of the thing is the same but there's two different uh behaviors you could have with a conditional like see this conditional that's in front of us
[00:31:04]  right here where we go show when there's a user and we have a div with a username i i think that's pretty straightforward scenario you expect when there's no user um
[00:31:13]  that this doesn't show but when there is a user this this shows the the challenge here though is and this doesn't come up too often there's two different ways you
[00:31:25]  can update this in a fine-grained system in in a vdom system you don't care right you'll just re-render that like when this changes you're going
[00:31:33]  to re-render the children every time anyways you just re-render re-render re-render but when you have a when you have a fine-grained system you
[00:31:41]  could either re-render the children every time like a vdom or you can just up only update the fine-grained bindings and update the specific places inside it
[00:31:54]  so when user changes you actually only care if it goes from true to false not if user changes because user will is bound here maybe it's found somewhere else those will independently
[00:32:07]  update anyway and by default that's how our show component works it only cares if it switches from truth to falsy and every little piece updates independently but there are use cases where
[00:32:21]  you want to quote key it so recreate the dom nodes when you when you when you go to the new area and um like whenever the user changes and people have asked for
[00:32:30]  that like do you have a keyed component well the truth is show has always done that through the form of a callback like this where you can tell this user is just
[00:32:39]  the user passed in and whenever user changes it just reruns this function which means it recreates this div and and reevaluates this and because this user is coming from
[00:32:49]  here and it's not a function it can never update independently it's pretty clear what it does and has a what and it has one other really nice benefit to it which
[00:32:57]  is you know here that it's resolved like because because of the way this sits in typescript has no way of knowing that uh a user here is is resolved like um i
[00:33:11]  could probably show this very easily in the playground but this is going to complain at you because they're going to be like i don't know if there's a user um because
[00:33:18]  it's possible for user to be undefined being inside here typescript has no knowledge but here we can we can actually type use it'd be like look user is
[00:33:26]  defined so a lot of users using typescript were using the callback form just so that they can save themselves from putting explanation points in and that works but that's not great
[00:33:42]  because we just talked about it do you actually want to blow out the children every time like do you actually want to recreate all these dom notes most of the time the answer
[00:33:52]  to that is no and while this was a really reasonable split from like an like a normal standpoint because like again you would only ever really want the callback in this form if
[00:34:04]  you were keyed and otherwise this is just shorter and nicer why won't you do it that way typescript makes us completely change what we we want to do essentially which
[00:34:13]  is very common theme with typescript if there's benefits but it it sometimes likes to kind of like get in your way when you're trying to like design clean apis and
[00:34:28]  the the the way we ended up actually um well that someone's mentioning the chat here is yeah pass render yeah render props right well render props is the only way for
[00:34:44]  us to type narrow here because there's no connectivity between these two things this has been my philosophy unfortunately it's not good enough at a certain point people really like people into types
[00:35:01] cript this angers them furiously um like my early take to api design was like make something that is like good like look at it work through it and be like
[00:35:12]  this is something that is innately good and then try and do your best with typescript i was never willing to suffer typescript for api design i'd never make something
[00:35:22]  worse because of typescript um over time i realized that the better way to do it is make the good version and then make the typescript version and that way people who are
[00:35:32]  willing to go through those hurdles can because they get benefit from it like there's no denying the benefit of typescript um it's just like it's there's only so
[00:35:42]  much we can do like typescript just can't do everything right like so like it it just it it is what it is right so yeah i mean the what i we've
[00:35:59]  done in 1.5 is add this keyed prop and what it does is say yes i want this keyed i mean if you think about this is a better ap
[00:36:08] i anyways but you're explicit you're like when i want this keyed i want this keyed so you can now make it keyed and whenever user changes it will re
[00:36:16] -render this whole thing well it's kind of wasteful or like like as i said sometimes that's desired but now it's explicit when you want it and similarly for
[00:36:27]  the callback we have this now my challenge here is that um we don't want this change to be breaking and and there's a reason why i went this approach with key
[00:36:40] ed and i'll explain it here is that with a callback that passes a function instead of just the value it is possible to have type narrowing via a render prop
[00:36:54]  in the same way this is and have it update fine-grained it can still only run the function once but now that you have an accessor in here you can actually
[00:37:02]  it can type eliminate the falsy values so you know you can use your typescript you know what's it make your cake and eat it too and but the problem is
[00:37:11]  we think callbacks are always keyed the way solid is right now so this is kind of a preemptive approach to it today callbacks are always keyed and
[00:37:22]  i i can't break it right if if i if i tried to add this function things would go bad unless we added other prop tricks and it's a nasty business but what
[00:37:32]  we can do today is if you go and try and use a callback because you're a typescript user and you think you want the type narrowing and you don't
[00:37:38]  put the key property on we can yell at you and you can be like oh i have to add the key property which i'm hoping discourages you or makes you realize
[00:37:46]  that you're actually opting into something of a behavior right like go oh by doing this it is now keyed i i have to actually consider that and um eventually when when
[00:37:58]  we can do a breaking change we'll add the callback that's type safe um you can still as i said always just put like a question mark or an exclamation mark
[00:38:08]  here but as i said from the perspective of you know it's kind of like a typescript purist here's a solution for you and it you know it kind of
[00:38:18]  it makes sense sorry uh refresher again just yeah i think that's a fair question i did explain it a minute ago what keyed does is saying key it specifically to the
[00:38:29]  value so re-render the children whenever this value changes which is slightly different because in no on the normal operation it's whether whenever it changes from true to false keyed is
[00:38:40]  actually saying like no going from user one to user two means i want to re-render this which is it it's not the most common case but it is an important
[00:38:50]  case so yeah does anyone have any more questions like this um on this sorry specifically i i think i i just want to show because typescript is always kind of there and something
[00:39:03]  we always have to kind of be aware of and honestly everyone knows like most people know that like i'm like i usually can avoid it i the last three or four months
[00:39:12]  i haven't been um i almost start every new project in typescript um and the reason for that is i i i i think it's fair to say that as an
[00:39:22]  end user like as a developer using typescript it's a lot nicer than uh being a library writer and other people have said this before but like if i start a project and
[00:39:32]  the types work and i kind of do it and like if something doesn't work i just go like any and move on like especially if i'm making quick demos so it's
[00:39:38]  just it just it just helps me a little bit and when stuff doesn't work and i'm frustrated and any doesn't work i can always go as unknown as any like
[00:39:46]  there's i i like it's not going to end my day i can keep the red squiggly and move on on the library side you don't get to do that your
[00:39:54]  types have to be correct and it's like this constant thing right like i think i showed once that at a certain point like half rprs are typescript related that's
[00:40:03]  either just suggests how bad i am at typescript or just like how nuanced it is to get the right types um so yeah i i just wanted to kind of throw that
[00:40:14]  out there just from a perspective side that i am as much as it might sound like i'm kind of anti typescript it's more that i just don't find it enjoyable
[00:40:25]  but there is a certain practicality of it and it has been affecting how i've been writing solid as as you all know i we did convert solid to typescript back very
[00:40:33]  early on i think late 2018 or in 2019 so solid core has been written in typescript for i don't know two three years now so um there there is a like
[00:40:44]  it's definitely something we consider it's just i still try my best to make the best possible api and then think of typescript later i know some people will say types
[00:40:56] cript will help you build better apis i call bs on that because in some ways you can make clear apis but it limits you're already putting restriction on what
[00:41:06]  you can think like what you're capable of doing you're you're applying these assumptions and i don't like how that gets in the way of innovating but like once you
[00:41:15]  get there you know reconcile it and figure out what you can do with it so yeah um yeah there's a lot of open issues related to jsx and stuff on types
[00:41:31] cript you can you can read them when stuff comes out i think one of the ones that really have been challenging for me is the one that you uh return jsx has it
[00:41:40] 's always jsx element you can't like make a div a div which is like think about how much that unlocks for us um i'm hoping one day right solid
[00:41:50]  containers get more popular other solutions get more popular this is sort of inevitability but until that happens we we just have to kind of be patient okay so yeah is that it for
[00:42:01]  my my little bit on typescript was there any other quality of life things oh yeah um some small stuff like the in operator like uh like like um let's do something
[00:42:15]  like this this now can be reactive in in our proxies um so and solid now if it sees an in operator inside like the jsx will actually recognize it as
[00:42:30]  a reactive expression and wrap it properly so again these are just niceties that come as you use solid and you realize hey you know there's new patterns you can build i love
[00:42:42]  this because when you give someone a bunch of primitives like they can kind of build anything on you so um yeah this this has been really kind of fun and a lot what
[00:42:52] 's cool about all these quality of life improvements is almost all of them except for the key control flow one um came from uh the community making the prs and doing the
[00:43:03]  work um so big like big on on people getting involved and helping making this release um what it what it is okay so should we get into the the the guts of things how
[00:43:17]  how are you all doing now to chat this is the the light topics i want to talk about i want to talk about the big topic for this release uh what do we
[00:43:27]  got here types are great until i need to change types themselves yeah or types are great until you need to change typescript itself um maybe that's a better quote um i guess
[00:43:38]  that doesn't happen for people as much as it happens for me but the prospect of having to change typescript comes off comes up like every every day or every week it feels
[00:43:49]  like a lot of just random people asking about solid start um i did do a stream about this do check it out like seo and solidjs and all the stuff yeah
[00:43:59]  like we have ssr and stuff and i'm going to talk about ssr improvements a little bit later in the stream um but yeah i mean solid is you know
[00:44:09]  a newer framework you know there's probably some rough edges especially on some of the newer features but generally speaking it's a fully featured framework capable of doing anything you can do
[00:44:20]  with with react or view or svelte or any of that we might be missing some third-party libraries but like if you can do it in them you can do it
[00:44:27]  here pretty much coffee script for the win um yeah did we manage to get here without talking about coffee script and it's like the opposite world um um but it it was
[00:44:42]  fun anyway okay so let's let's let's talk um about the the the big one here um good let me throw a banner here here you go for reference from earlier in
[00:45:03]  the stream let's talk about the new batch yeah i i definitely missed an opportunity there um batching the funny thing about this topic uh and the new batching which is
[00:45:18]  like the core feature here is i'm hoping that after i do this stream and talk about batching like we pretty much never talk about batching again like the part of the
[00:45:27]  the goal here was um understanding how we can shift our thinking and to a point where maybe batching isn't something everyone has to worry about that that's that's really
[00:45:41]  where i ended up but i did not start here if if if anyone follows me in my writing on dev2 one of the coolest things is i tend to write write about
[00:45:51]  what i'm thinking about right like um and what's what's i'm actually working on at the time i think there's a certain learn in public element to it that maybe
[00:46:01]  not everyone realizes but like when i read an article it's usually incredibly relevant to what i'm working on at that time or what i'm thinking about and this um this
[00:46:11]  topic of batching uh is no different i actually wrote an article a few weeks back called the cost of consistent ui frameworks i've been staring at this problem for months and
[00:46:23]  months and years it feels like and i mentioned it in here but i posted something january 2021 so a year and a half ago or something about how like every framework does
[00:46:34]  this code snippet differently um and i think this is a kind of good insight into the frameworks because it reflects not just like some mechanical thing but their philosophy and their understanding what
[00:46:50]  change means in their in in the framework like what um how they view the role of javascript and the language and all that someone was asking earlier about svelte
[00:47:01]  and stuff and svelte has a very different view of what the programming language is for building uis are um and different goals for that which is why um i i don
[00:47:12] 't often compare solid to svelte um just because like they're they have completely different motivations so so like i don't know what i think it's a very different
[00:47:36]  view of what i want to do i think it's a very different view sorry i'm just catching up on chat oh okay sorry okay cool anyways what what i wanted to kind
[00:47:44]  of point point out is that yeah react was zero zero zero and just so people who haven't seen this although i imagine a lot you have this situation has the three primitives
[00:47:54]  which i call like the three main building blocks of modern ui which are the the state or signal the derived state or like memo and the side effect which we're going
[00:48:06]  to read with a ref and this example um like as it all frameworks have those three mechanisms even though if they're hooks or reactive or svelte or whatever and every single
[00:48:18]  one gave me a different answer when used from uh from an event and yeah i mean this this isn't i've talked about this before on stream the there's there is
[00:48:32]  something i do want to bring up in this is this is just the default behavior when you're outside of the normal flow of the reactive system and one of the things that
[00:48:43]  i i pointed out as being important is that in react zero zero zero zero everything is consistent because like if this was a sum count or count double count and double count in the
[00:48:54]  view essentially if they're all zero they're all like correct like count is still double count and then the view is two like it's consistent but in in the middle two
[00:49:11]  we lose consistency and at one point i was like okay well clearly react and solid are the best ways to approach this right and sorry that's my like strictly better uh kind
[00:49:27]  of faux thing but the the the reality is a lot more uh subtle than this and essentially um yeah like react we really like consistency read the article for more details on this but
[00:49:46]  what i want to point out is this example is is sort of outside of the reactive system so the handling here while interesting things aren't actually as different when you get into
[00:50:01]  the internals you like at a certain point when you're inside a framework you're going to have to decide you're going to have to update things and and code runs top
[00:50:10]  to bottom like you know i mean like code runs like in a sequence at some point things are going to be inconsistent outside of the system should you be able to observe that incons
[00:50:20] istency what's the question here that's all i was asking but more interestingly internally obviously if you update some state and then some drive state up before that drive state updates
[00:50:31]  it's going to be able to sync and before those effects run well that's going to be able to sync this is just a natural evolution um of like like or so not
[00:50:40]  evolution it's just a natural flow of things updating so the only guarantees we can keep are things outside of the system and i want to make it clear solid's new batch
[00:50:52] ing behavior right off the bat does not change this nothing in this table actually changes for solid's new batching behavior but the reason i wanted to talk about this is because of
[00:50:59]  the non-default case like what if i had more than count i updated and i wanted to update like count one and count two i might not want to run everything
[00:51:14]  twice like the way i do in solid it's not bad in solid because solid as a as many you know does find great updates so if one cell has count one in it
[00:51:25]  and one cell has count two in it and you go count one count two like there's no overhead like you can but if somewhere those converge then in this situation you there
[00:51:39] 's intermediate results right count one is one well count two is still zero and so on so there are situations where you want to group changes together and the truth of matter is
[00:51:52]  inside the reactive system we already do that the only reason that solid has this behavior is because it runs synchronously and because it runs synchronously there's no opportunity except maybe intercept
[00:52:07] ing the click handler to insert the batching ability whereas in some frameworks that run on microtask cues they can batch automatically because the first place you call count they're like
[00:52:19]  okay look we're not going to run anything till later so we're just going to queue it up and then you can call 10 different things and then later we'll do
[00:52:25]  it but because solid synchronous um you need to kind of manually wrap it which is the batch function which is where this whole conversation stem from now if that's if that's if
[00:52:37]  that makes sense this whole conversation is not about you generally is not about how things work inside the reactive system it's about how things like event handlers or timeouts or
[00:52:50]  async calls work and that would have been the case except for solid did one kind of funny thing which is a thing that broke things is it batched all side effects um
[00:53:03]  which meant that essentially actually i should i should i should i should actually explain this a little bit before solid 1.5 even though solid work like this most of the time
[00:53:19]  when you entered a batch it actually worked like react i i very much cared about this consistency thing okay like and i can i can show you what i mean in a playground it
[00:53:33] 's probably the easiest way to actually do this so if i had two signals and i'm gonna go back to 1.4 here so sorry deleted the whole thing go
[00:53:47]  back to 1.4 and okay well there we go let's let's create two signals and just kind of show you what i'm talking about i'm going to count one
[00:53:58]  and count two i'm not going to worry about returning anything for the moment send count one count two and let's um create an effect and in our effect um hmm
[00:54:26]  i just think of the best way i want to show this in our effect um i'm going to actually have to create a couple effects to show you what i'm talking about
[00:54:36]  we're going to listen to count one and we're going to listen to count two and i'm going to console log our effect okay sorry i probably should have set this
[00:54:54]  example up before i even started here but let's just let's just do it right and i'm going to also do this a little bit funny in that i'm going
[00:55:06]  to i'm going to i'm going to just use a timeout to to start our things because i want to i want to show batching outside of the outside of the
[00:55:15]  the system okay so we're going to set count two and actually we'll give it a nice pause of like a second and we're going to set count one to one
[00:55:31]  and actually let's just listen to them both in the console log so we can see what happens okay beautiful okay so originally we're zero zero and then when we run
[00:55:56]  set count one this hopefully you all can see this maybe i can make it a little bigger um but essentially we if in our timeout we set count to one it updates the
[00:56:10]  first count and it runs the effect a second time and if i do it set count two you're gonna be like oh wow you actually ran this effect three times once initially
[00:56:27]  and then on each update and this is this is where the the desire for batching comes in because if this was just somewhere else in the reactive system like i'm i'm
[00:56:41]  gonna pull this other one in here let's call it create computed if i just made this create computed um so i guess create computed well let's see what happens this this
[00:56:53]  is a little bit yeah that's too quick yeah okay so this is one of the challenges here because once you're in the reactive system everything's batched and it's optimized
[00:57:04]  so it's hard to show the okay so my but my point is at a certain point you're like okay well i don't want these to update separately so you create
[00:57:13]  a batch okay and now when you create your batch create batch i'm sorry what i call create batches batch when you batch it um you'll see that it it now applies
[00:57:32]  both these changes at the same time right that's that's the that's like the basic um the basic scenario here right it applies them both the same time but what what
[00:57:43]  i wanted to kind of show out is if we red count here actually you know i can just pull it all the way to the bottom if we go uh console dot log
[00:57:58]  count one and count two and we kind of do something like this um let's call this timeout sorry there's like i'm half what you're going to see is
[00:58:19]  the effect runs then timeout runs and the value still haven't updated yet and then and then the effect runs with the values if i pull this actually let's call this batch
[00:58:36]  if i pull this outside of the batch like after here and call this timeout what you're going to see is effect runs then batch runs with the old value and then
[00:58:50]  at the end of the batch the effect runs and you have the value and finally the timeout console log runs with the value so it runs synchronously like at the end
[00:58:58]  of this batch line everything is updated but inside the batch the values haven't applied and this is essentially why batching is a thing and what solid did was it auto batched
[00:59:16]  effects so it pushed all the basically held the values of the signals um till all the effects had run kind of and this is good in a sense because you really shouldn't
[00:59:29]  be writing signals and effects too often but um it it was kind of awkward um when you did and the problem is with immutable data it's usually easy to represent um
[00:59:47]  stuff as separate independent changes like these counts are separate but with mutable data i'm getting kind of full circle here we actually hit a really weird problem um so this is what
[01:00:03]  i wanted to kind of show here and which i had there um this takes a minute to kind of wrap your head around but pretend you had an immutable array so and
[01:00:15]  actually if anyone have questions so far i realize this is a lot um let's see uh okay yeah yeah so these guys are going i i've talked about that these guys
[01:00:47]  are going back and forth about the about reactivity as i said we started the discussion on reactivity for solid 2.0 and there's like a debate right now about
[01:00:55]  the best way to model some stuff um we're going to get there actually a little bit later in this explanation but what i wanted to to kind of show here in it with
[01:01:05]  with this example um is that um sorry and it's this example i want to show here is that if you have something that's like an array that's like an array
[01:01:14]  that's immutable picture you have an array that's abc and you want to perform two operations on the array you want to remove the item at the first index like um
[01:01:27]  maybe remove item uh what it was here i maybe remove item b or something and then you want to take that removed item and put it at the beginning of the list you you
[01:01:39]  have to do two operations right if this was immutable you would just return the new cloned object right you would like uh like if we had an eight let me just
[01:01:50]  find some space down here if you had an abc right const uh list and you went like a b c if if you wanted to like grab like if you want to
[01:02:08]  do this move operation with the mutable thing you'd be like okay well actually um i'm going to i mean this is kind of messy but you could basically go take list
[01:02:22]  one put it there and then take the yeah i'm trying to think how yeah i mean you you kind of get i mean the proper way would actually involve like a bunch
[01:02:37]  of slicing and stuff i don't feel like doing that right now but like you could picture you could just you could you could just rearrange the order of the list and then if
[01:02:47]  i console dot log new uh list and new list you're gonna you're gonna you're gonna see maybe i should turn off our time mode and stuff for a second you
[01:03:00] 're gonna see um like what you expect because you you you're always setting a new list but when you do mutation on on on a list um you like you're you
[01:03:14]  take steps you're gonna splice out the piece that's missing and then you know insert it in and it could be a push or an unshift or something but i
[01:03:24]  just i just took this example but if i if i if i take this here and do this with uh do this with a a mutable uh list so let's go
[01:03:37]  uh mutable equals abc then we get the move and then mutable splice you notice we never reassign we never make a new list in this example because we
[01:04:05]  actually mutate the original list what you're like like you can see that you get the the right output right um and this is this is a common pattern like common thing
[01:04:24]  when you have immutable data you express you you're kind of pushed to expressing all the changes a single operation it's kind of also why maybe batching isn't as important
[01:04:31]  because you'll tend to represent things as a single change okay now but uh with mutable data you're like constantly like it's sequences because you're you're changing this then
[01:04:42]  moving this the order of the operations matter if you if you add something it can change future moves and this this this this is really awkward if you're in a batch um
[01:04:56]  like our crit effect was because what would happen and this is the bug that showed up right away someone did this example with with this thing that's designed to be mutable is
[01:05:05]  it would grab it would splice out so it would go okay i'm gonna queue up removing the item and but it actually grabbed the item and then when it went to
[01:05:15]  do the second change it was like okay well i still haven't applied the first change and i'm so i'm not going to apply the first change i'm just going to
[01:05:21]  take that item and put it at the beginning so what we end up with is b a b c essentially the first remove operation never happens because we kept the value in the past
[01:05:34]  right and if that's not clear why that happens i'm let me let let me show you subtly different but it's the same idea if i bring back the our
[01:05:44]  example here and instead of setting count two i set count one twice to in our batch what ends up happening is you don't see the effect of count one it's as
[01:06:01]  if count one like setting count one to one never happened because it only needs to apply the last change if you keep things in the past every every subsequent change just overr
[01:06:12] ides the previous change that's how react and keeping things in the past works so like it's innately broken for things that are sequences so like as i said i was i
[01:06:24]  was very proud of the fact that i like fixed concurrency and all this stuff um and i basically had alienated these kind of create mutable things as i said i
[01:06:34]  never used create mutable so i never really thought about it unfortunately but this is this is this is kind of the problem and i think it goes further than this because as a
[01:06:47]  person using these apis if i go back to this example if if it's fine because i called out this batch you get it right the default behavior is nice but what
[01:07:00]  i was trying to get at is in if if this instead was in uh let's like put it in an effect or something okay so let's get rid of the batch um
[01:07:13]  and now this timeout has no meaning and this was just in a second create effect okay right if if i did this solid 1.4 auto batched effects which meant that
[01:07:29]  that this in that this in the past behavior here you you were opted into without actually calling batch yourself it's a good default it makes a lot of sense but people like
[01:07:48]  were not ready for this because they're like they're just writing some code somewhere gets called in effect doing some reactive stuff and it it wasn't they're like why is
[01:07:57]  this the old value didn't i update the value um i said this is really good because it's consistent if if we added double count in here um um yeah count count
[01:08:21]  one times two let's get a memo in here create memo if if we added double count in our in our in our thing here um what we're gonna see is double count
[01:08:39]  is still in the past right um our effect runs zero zero zero yeah so this is kind of um consistent but kind of counter intuitive for a lot of people and it doesn
[01:09:00] 't work with mutable data period and i i started having to ask myself like how much does this actually matter like this is really it's very settling to go between something
[01:09:19]  that like updates automatically and then suddenly something that doesn't update like this this this inconsistency bugged me but like i could argue that it was consistent and the thing is
[01:09:34]  with a reactive system we actually we even without this hold the signal right mechanism we already have batching built in and this is this is kind of the funniest thing about this
[01:09:51]  um because you the the the truth of the matter is you don't in this situation here i mean this is not very deep but you don't necessarily want set count to update
[01:10:06]  immediately before this next line like you do want these batches to happen naturally you you just don't want to see the old value right you like innately you're like
[01:10:18]  yeah i don't i don't i i want these both to apply at the same time and because sometimes you can get some weird infinite loops where you trigger something for set count
[01:10:26]  one and it like changes the conditions of what this effect is running on might even cue this effect to run again before it's even gone to the next line that would be
[01:10:37]  bad we we do actually not want things to always propagate immediately because you get really weird place you want your code while it's executing top to the bottom to be consistent um and
[01:10:48]  for that reason um at a certain point i kind of gave in and i realized that we didn't need to keep things in the past um really for any particular reason and
[01:11:04]  while i don't care about create mutable i don't think people should be using it for the most part there's no reason for it to break and honestly sometimes when you
[01:11:14] 're doing stuff you do think in sequences so let people operate in sequences and the funniest thing and i'm gonna explain how this works in solid in in a second here but
[01:11:28]  if i go back to the the code to actually implement this um where was it simplify batching where's the original one sorry give me two seconds here um it's right
[01:11:41]  at the beginning here um i actually did this as two uh versions because when i first tried new batching i was like oh i should uh maybe we should do things like s
[01:11:54] velte does like make it inconsistent so that the initial values update but um but everything stays in the past but what i want to show you and really highlight which is kind of
[01:12:05]  funny about this pr is or sort of this this commit sorry i'm in the test file where's the signal file yeah all this pr does is delete things out of solid um
[01:12:18]  for the most part i mean these lines change but if you actually look the the replace lines simpler than what it would left before we actually i just went in and deleted the batch
[01:12:28] ing stuff solid's underlying system actually already to this to basically get the behavior everyone wanted already i just needed to delete stuff i just make solid smaller um for the most part
[01:12:43]  and the funny thing is this this first pr got us to svelte level and our certain up pr this first this first commit um and then our next commit which happened
[01:12:55]  a little bit further down here um i saw a minute ago something about batching probably should have to do to do um continue to delete more stuff is what i was trying to
[01:13:16]  show basically all we had to do to get what we were looking for was actually delete a bunch of stuff out of solid actually like make it smaller and yeah the the and
[01:13:33]  let me let me show you what the key difference is here because we were holding the values we had to make a construct to hold the values and it isn't really necessary
[01:13:48]  because of a couple things so i'm gonna i'm gonna i'm gonna pretend to share this link which should hopefully i'm gonna save this just in case it doesn't allow
[01:13:59]  me to change this to 1.51 and show you what happens now basically the batch now is observing the latest values and the and we we we basically just went straight
[01:14:26]  to where we needed to be and it's not just create effect it's actually the batching in in general there's some subtlety here but i want to i want
[01:14:36]  to show you something that's important the reason that we can do this and react doesn't do this is because we use getters because we use getters you don't
[01:14:46]  have to worry about to like this not being updated we can both apply the change at the end and eagerly evaluate any drive data without it being inconsistent this is this is
[01:15:06]  this is this is this is view but it was also always solid it was just solid how solid worked outside a batching but inside the reactive system i realized we just had multiple
[01:15:19]  batching systems so i just deleted one of them that that was the that was the revelation here right because solid already has this this ability to evaluate and let me put batch
[01:15:34]  let's go back to our set timeout so i can show you this a little bit better because i think the set timeout better is is more visual i just want to
[01:15:42]  show that in effect this works fine but if we bring back our batch right first of all there's no need to to put this here because it's already updated but
[01:16:08]  i i i the reason i want to kind of illustrate this in more in steps is this is actually you know what i'm going to i'm going to show you this is
[01:16:24]  how we're going to do it we're going to console log in the memo it's a little trick we're going to console log inside the memo to show you what i
[01:16:33] 'm doing again you shouldn't do side effects in a memo but let let's let's console log inside the memo so look what happens in in our in our in our
[01:16:44]  system here i'm gonna remove this one so that i have less noise but what you see happen is the memo runs the first time then the effect runs and then when we do
[01:16:57]  the timeout again the memo runs and then the and then the effect the the the effect runs so this you might be like okay no no big deal but look what happens
[01:17:15]  if i remove double count from here this is important because it goes memo effect batch initially or memo effect originally and then we do our timeout and then our batch goes batch
[01:17:32]  memo effect if you if you notice me moving the double count in and i'll put it back in again for a second actually moved where the memo happened when i put it
[01:17:43]  inside it inside it actually ran before the batch command and when i deleted it it ran after and the reason it runs before the batch command is it's literally running right here in
[01:17:58]  line when we're asking for it so you can't console log until this is has already ran right but when i get rid of it it runs at the end of the
[01:18:11]  batch like everything else um so it runs like basically just before the effects run so what what we can do basically the reason this whole mechanism works is we can defer executing everything in
[01:18:27]  a batch unless you ask for it which means we can always show you the latest value if you ask for it because we have this push pull ability and i i can explain a
[01:18:38]  bit better what that means but essentially it will run eventually anyways but this this way if you choose to opt into reading stuff ahead of time we can preemptively calculate it
[01:18:51]  for you in the case of things like memos because memos are derived so we know the second you set this signal even if we haven't propagated the change we
[01:19:00]  know that it that this memo is out of date and that the next time you read it you're going to have to recalculate it right so this this is this
[01:19:09]  is why we didn't have to be too hardcore on this even with stuff like transitions suspense and concurrent rendering i don't because we already fork and this is more technical fork the
[01:19:21]  reactive graph it's okay to be like this because those eager values aren't going to they're already forked they're not going to merge with the existing graph so like
[01:19:33]  essentially um we can do this eager thing and to be fair there are cracks in this in that if you go back to my original article that i was showing here the cost of
[01:19:48]  consistency you're going to see view when you're inside the effect like while the reactive system is running because like while you're in that batch one runs you're asking for
[01:19:59]  two so it calculates but the until the end of the batch we can't possibly apply the the dom effect right so when you're in a batch it looks like this and
[01:20:11]  when you're outside of a batch it looks like this but the the funny thing is in reality inside a batch on if you don't ask for it it's actually like
[01:20:23]  this you know it does the least amount of work up front and this has huge impact as i said most of the work here was deleting code but the bigger thing here is people
[01:20:37]  were batching before to try and do things like okay i want to apply these together and do the only place you need the batch is in that set time out or call
[01:20:49] back whatever like essentially you can now pretty much forget that batching is a thing for the most part because in the simple case like the create effect i showed you before you you
[01:20:59]  know you'll just do stuff and then if you read double count well you it'll be up to date you don't have to worry about this yeah so someone's asking
[01:21:08]  bi-directional reactivity yeah it's called push pull um is is kind of like technical thing and i didn't again did not invent this this is how mob x works
[01:21:16]  um and it's it's it's it's actually quite clever because because what push pull does and i'm going to open excala draw here it's probably got some garbage
[01:21:35]  on here i don't even remember what this was you guys remember this stream i i don't know um looks like some out of order streaming thing but the whole thing with
[01:21:46]  with push pull is that um we we mark the reactive graph before we actually apply the changes so like i'm going to go left to right because it's easier but i
[01:22:07] 'm just going to pretend like we have some kind of graph here and we're going to kind of branch out i always like doing branches but we'll probably only follow one branch
[01:22:19]  out um i'm just gonna show some kind of propagation you can think that of the start of the propagation as as a signal right like the thing that's sort of un
[01:22:34]  unwritten here is and again these don't have the perfect lines but essentially more than often than not you've got like these kind of three zones and this is this i'm
[01:22:49]  stealing this straight from mob x if you go find him uh michael uh west straight article you're going to see this like immediately on any of this right because he'll be
[01:22:59]  like because this will be like signal and then this will be memo and this will be let's say effect it doesn't have to be but like this is this is essentially
[01:23:13]  like a representation of our reactive graph and like to be fair this probably it's kind of like like something like this and all we need to do essentially is is it
[01:23:32] 's kind of moved when when someone updates this goes like hey this this thing's updated we just kind of move through the graph and i guess maybe color selection is the best way
[01:23:45]  to handle this but i'm going to be doing a lot of copy and pasting i guess to kind of work our way through it we have a video so we can we
[01:23:51]  can do this kind of live um i don't need to produce artifacts but essentially someone goes in and goes okay bam we update this right next i'm going to use orange
[01:24:03]  okay can can everyone see that maybe i should make the lines a little thicker um okay and someone's updated the signal at the second that this signal updates we know that this
[01:24:23]  memo needs to reevaluate we know for sure this thing is dirty so let's let's let's let's do that and this one too because this is definitely updated
[01:24:33]  this is this is now dirty okay but these ones we don't know because the memo could evaluate to the same value so for these ones suddenly let's make them kind of
[01:24:47]  like a greenish color okay and do this okay and oh man you're going to get me into an argument on stream aren't you i strongly disagree with this but we
[01:25:14] 'll we'll get back there um okay essentially um with this kind of propagation we can we mark the whole tree and what's what's important about this is even if we do
[01:25:31]  something like go depth first in our decision i i i don't know if i should actually use memo uh effects here uh as as an as an example i i want to show
[01:25:40]  that there's layers but the truth matter this only gets interesting if if i do this actually and make the memo layer a little bit more complicated and maybe put an effect out
[01:25:53]  here that listens to to these um because actually i'm gonna i'm gonna take a prop from uh milo who made these boxes um what i wanted to point out here
[01:26:08]  is at this point and actually this box can be green we don't know if these actually need to update okay but we know that these ones definitely do and if if if
[01:26:25]  we take something like a like a depth first algorithm and i i mean you can pick which side we traverse first um we can actually like the the signal itself gets updated it's
[01:26:42]  fine but then we can like run this one first and it goes okay i need to rerun and on it updating like realizing that it gets a new value let's say
[01:26:52]  the signal went from zero to one like our example it it goes hey buddy you need to re to to update right and we're we're going depth first here when when
[01:27:12]  when we get to this guy here he's going to be like okay well i need to update but when he runs and you can picture this like this grid like if you need
[01:27:23]  a visualization what's going on here picture this as some signal s and i'm going to make this block and then these are memos a a b i'm doing it
[01:27:43]  upside down for most people probably but what i wanted to show is like something that looked like this would would essentially have have essentially b or a equals some function of s i
[01:28:07]  know i'm getting into math terminology here but then c c here is actually some function of a and b so a lot of times when i do these i just skip the
[01:28:22]  function of and just go like it's a plus b right and and this is just derived from s okay now what i'm getting at is if you have c equals a a
[01:28:36]  plus b and a is updated because we went down this track so it's in black so this is now one this is now one but b is not one yet it's
[01:28:50]  still orange so it's still zero when you get to c if you're not smart about this you're going to temp you're going to go a c equals a plus
[01:29:03]  b and you're going to end up with one which is not the the right reality you want to be in right what you want is you want to go oh so what we
[01:29:13]  actually do in a system like solid is when we go we in this case we know we have to run c so we're not we're going to go run it but when
[01:29:21]  we get to a we're like okay yeah no problem a get the value get that one and then when we get to b we're going to like oh b you're
[01:29:28]  out of you're out of you're out of date you better run so while we're in the middle of c here we like i showed earlier with the double count that's
[01:29:37]  that same kind of pull mechanism we we essentially go okay let's evaluate this right now so we solve it we make that now is one and then c is like okay good now
[01:29:46]  you're up to date um i'm going to uh i'm going to get my proper thing of two sorry when b updated it also set this one to to orange as
[01:29:57]  well but you can kind of see how this propagation works right um and i mean it gets it can be a little bit more complicated than this because sometimes the like sometimes uh
[01:30:16]  this arrow isn't so direct like sometimes this arrow isn't here and sometimes um there's there's some other convergence basically there's all varieties of diamonds you can make when you
[01:30:34] 're when you're playing with this um right and but you you start you can once you have like a degree of separation you can you can see how this gets a little
[01:30:44]  bit more complicated i'm gonna we're gonna do one more example here um so i'm resetting the board so you can get it but i'm hoping after this example um
[01:30:53]  sol's reactivity will make a little bit more sense and we can we can kind of move on from this whole batching thing right but all right let's get all the
[01:31:05]  way back to the beginning these are all black these are all black okay and um i'm just gonna put another little circle in here let's add e to our equation all
[01:31:22]  right you all still with me uh someone's asking if this change affects any benchmarks no that's what i'm saying because all this stuff only affected things kind of like outside the
[01:31:38]  reactism like if you're writing signals from effects which never happened in any benchmark or if you're like uh writing stuff from event handlers where you're introspecting
[01:31:49]  values so basically this was just simplification and deletion so me spending this much time on this topic is probably unwarranted because you guys will just be like oh yeah
[01:32:00]  so everything just works you know and forget about it but i i think this is an opportunity to actually explain reactivity a little better right so like let's let's run
[01:32:17]  this example one more time um and and can i you can you can now picture that this c is just a function of a and the actual interesting one is e which is now
[01:32:33]  a function of c and d right right and i guess i'll just add this one back up what was it c is equals a i'm just doing one layer i'm
[01:32:48]  going along the bottom here yeah so okay so okay so let's let's let's let's let's just run this right so update our signal to one see this stuff
[01:33:05]  would be good for like the old rxjs style like diagram so people can see change propagation but update to one you are now invalid okay okay okay and is you notice
[01:33:21]  we only have to do this dance on signal on signal right okay so we actually go all the way through so there's definitely need to work maybe need to work like we don
[01:33:36] 't know these ones need to rerun but it's important because if you go up this chain right so like if we set one and then we're like okay so now
[01:33:46]  we need to recalculate a so a becomes that and a gets it's one right we're just doing a straight pass through this now becomes orange but you know something
[01:33:57]  here like this this example is a little bit different this time because now okay we're like okay done now we run this one because i said we we add them depth first
[01:34:10]  so we're actually going a c e b d so we go here and you might be like why do depth first breath first would probably solve a lot of these problems it would
[01:34:20]  but when you write code the first time like like think about nested things like components and components or like even this console log like the children you you you essentially have to
[01:34:37]  be able to like everything does execute depth first right you you you hit what's ever inside this line before you hit what's in this line so if you want to maintain that
[01:34:48]  consistency you actually want the reactive system to also propagate depth first so in any case um where am i going uh oh man there's so much discussion going on in the in the
[01:35:05]  chat that i want to like jump in on because it's like lacks the cross framework nuance element of it but we'll get to that in a in a minute um anyways
[01:35:16]  so see we have c here um and we're updating it so now it goes black and we know that this one is now orange and now we go to update e and
[01:35:32]  e knows it has to rerun right when e goes to rerun it gets c and like okay cool c is one but when it goes to get d d is like um
[01:35:50]  i might be okay but i actually don't know so we actually have to d has to like actually go back up here and go okay b and again we can we can
[01:35:59]  do this with your derivations because we both know what listens to a memo and what it depends on we can actually walk up the graph and be like okay okay let's go
[01:36:08]  back to b and b is like okay yeah i definitely need to run so b runs right and b gets the one now at this point um d becomes orange and um it
[01:36:32]  then it runs and you can see how it funnels in and we get the right value but it's more interesting if if the situation around d was like only if it was
[01:36:44]  conditional like what if d actually or like what what if what what if one of these actually didn't need to update in that case um we're still good and i guess the
[01:36:57]  best way to show that this i said that was the last example uh this is going to be the last example i promise um is what if c is some kind of conditional
[01:37:12]  like c basically goes only updated if if if a is bigger than one otherwise keep it at zero right so if c was like nah we're going to return uh a if if
[01:37:28]  a is bigger than one then we're going to return a otherwise we're going to return zero okay okay right so basically c remains unchanged in in the scenario if if we
[01:37:45]  actually did that this propagation and we kind of get back to where we were where i'm kind of rewinding it a bit but where these are all green still right
[01:37:58]  and and we get uh we we just finished doing a so a marks this one as needing to work so i kind of rewound to this point right and if we
[01:38:19]  got to this point right and c evaluates and c goes okay a bigger than one no a equals one okay so i'm going to stay at zero if c doesn't update
[01:38:30]  it's just going to go black and it's not going to notify this one it's going to stay green at which point e doesn't need to run e doesn't
[01:38:46]  know if it actually needs to run so we end up doing is going back to to b um and working at it out that way so i mean there's there's some subt
[01:38:58] lety here um actually i guess that's not true actually sorry i'm confusing it again but it's interesting because you can get you can get to e and before you
[01:39:08]  run e because it's green it knows it doesn't let me correct myself because it knows it doesn't know it needs to run it asks the question like we did a minute
[01:39:15]  ago like it goes up the tree and if by chance d is the same and i hope this makes sense it could this one could go orange depending on if this one actually
[01:39:28]  successfully updates and makes this one orange then e will run but if this one also bails out e will go okay well i asked everyone and nothing changed and it just won't
[01:39:41]  run so we have this ability to stop the propagation anywhere along this this tree and i'm sorry this is very technical but this is probably maybe the last time you're ever
[01:39:53]  gonna have to worry about this um because this this behavior happens for you automatically but if there's any kind of takeaway from from this one two three thing is solid very very very
[01:40:09]  clearly here has um an update stage it has a pure computation stage and it has a side effect stage and these things are actually clearly scheduled right like there's clearly like
[01:40:48]  one two three and the reason i wanted to show this is this is not unlike react right because in react and let's give it give ourselves a nice react blue here you're
[01:41:07]  gonna you're still gonna like up set state here right do the update and then you're going to go and go what is it uh view equals a function of state right
[01:41:19]  you're gonna run all your components and then then you're gonna diff and patch over here okay these systems actually lay on top of each other with the same kind of split
[01:41:35]  which is really important because this is why we can do things like run all the pure computations and hold the side effects till later for things like suspense or concurrent rendering or all
[01:41:50]  the things that apparently you need you can only do with a vdong because we actually have the same stages so uh this uh i think this is i i think this is
[01:42:14]  is important to kind of talk about because i i i i was on twitter and someone uh was they got they they'd released the tan stack query and they're talking about
[01:42:22]  suspense and suspense lists and adam maracas was like what solid has this without a vdom blah blah blah how is this possible and it's possible because reactivity is like it
[01:42:35] 's like promises it's a primitive right like a vdom is a system like uh like uh you know like you're building a specific engine or building a specific thing but
[01:42:48]  reactivity is just a way of modeling something like how should i put it like go back in the day to something like node when everything was in written in callbacks right and
[01:42:58]  then someone introduces promises like you can do all the same stuff without promises that you can do with promises promises just let us model stuff slightly different so that it like made it easier
[01:43:10]  because now suddenly our ability to kind of pass them around gave us the ability to kind of make the async guarantees portable but if you look at it like you can do
[01:43:20]  the same stuff and and the truth of matter is with but if you've written your whole architecture on node callbacks then like doing that migration was actually kind of painful like just
[01:43:30]  because you kind of like had to like switch every place kind of like invert the pattern a little bit and um like there was nothing wrong with necessarily doing the callbacks but
[01:43:40]  suddenly promises kind of changed the way you could do things and that's really the way that i i i look at reactivity and and whatnot because like you can build a v
[01:43:53] dom in a reactive library like it's just a representation we don't need it in the same way once we had promises we no longer needed like have any of you ever
[01:44:03]  used q or q async with the old callbacks and node like you had special libraries or even like some of the cool stuff people are doing with generators not the generators are
[01:44:10]  a bad thing i'm just saying you basically structurally set up your program around these queues and had these libraries and you made like the queue system was the base of it
[01:44:21]  i i did this kind of development and then the callbacks would all kind of feed into it and that would be your architecture but once you had promises that whole thing just disappeared
[01:44:27]  you're just like okay well i'll just use a promise and that to me is very similar parallel here there's no reason you couldn't do anything with a vdom
[01:44:37]  that you can do with a reactive system the the only challenge is the maybe the differences or complexities of modeling it and whether you want to take on certain kind of overhead because like
[01:44:49]  a vdom is like yes we need like the vdom we we want to do this diff like that's the assumption the same way like it'd be like having callbacks
[01:44:56]  with that queue library you could always press promises into that queue library like you you can do that but when you're like well i got promises i don't really want to
[01:45:03]  use the queue library that that that's where this the thing is like you can do it um but you're kind of like i'm going to try and avoid doing this if
[01:45:12]  i if i don't have to not everyone's on that boat like like view does both or whatnot like you can definitely put them together but it's kind of like do you
[01:45:21]  really need it and um i don't know i if if anybody's an old node developer who witnessed going between callbacks and promises i feel like it's the same kind
[01:45:29]  of thing here i'm not suggesting that promises and effects are the same thing that like they're replaceable with each other i'm just but more the the similarities between using call
[01:45:39] backs and promises once you have a primitive you know that gives you this kind of power built in it compared like as they promise compared to callbacks you suddenly can do more like
[01:45:50]  you can you can suddenly go oh okay yeah i actually don't need the model it this way it helps in the simple cases that even helps in the complicated cases it just
[01:45:57]  scales differently because you change your mindset um yeah i don't know sometimes i go on these little side rants and i don't know if they make sense to anyone yes so
[01:46:08]  some of you get it man there's there's this discussion going about like how close you are to the dom or just javascript between vdom and non-v
[01:46:19] dom and it's like i think some people are just uncomfortable with compilers um like like let i just gonna address this one in chat because people keep on going back and
[01:46:32]  forth with it okay actually sorry before i do that someone's asking can you please explain the difference between push and pull here yeah push was a process where we went forward where
[01:46:42]  we went orange and then we're like okay you become orange you go come orange it kind of pushes down the line pull is when we got up to e and we're like
[01:46:50]  oh i don't know about you oh actually i don't know about you and you went back and it was actually from accessing the value that you're like okay i actually need
[01:46:58]  to look up i need to look up and and then you pull it up and and this is actually a big difference between like rxjs and um like signals or like
[01:47:10]  malbec style stuff because stuff like rxjs is push only there's no concept until you get to like behavior subjects and stuff but there's no concept in the basic observ
[01:47:19] able of owning a value it an observable is an event stream it's just a series of values do do do do do you never ask the observable what your current
[01:47:27]  value is it's like what is current it's just a moment in time whereas in fine-grained systems which are kind of like synchronous by nature they the the primitive the
[01:47:38]  signal actually represents the value in a sense the these names are almost reversed i think observable is like a terrible name for a stream um and maybe signal is a better name for
[01:47:48]  a stream i don't know but like one intends to represent the value that it is like it is the thing and the other one is represents the container it's a
[01:48:01]  very subtle kind of difference and i think it even comes down to even some people's opinions on what naming and stuff should be around around this stuff um but that's the whole
[01:48:14]  thing when you're when you do a change and you propagate it out and you propagate it out that's push i want to cut fans out pull is when you're like
[01:48:21]  oh this is stale let's walk back up and figure it out uh yeah but the thing is the reason you you're in this yes but yes it is eager versus lazy
[01:48:40]  but it's also because um there's strictly pull based systems and strictly push based systems i used rxjs as an example of a strictly push based system but you can
[01:48:50]  look at react as a like a pretty much strictly pull based system it's not 100 true but like um when you rerun the component and then you check the the dependency ray
[01:49:02]  to decide if you're going to rerun something but then you you you each time you're you're the as you run through the code you're asking the question always
[01:49:09]  um you're not like going like i'm pushing this out to this specific place you're just like update this component and let's pull what we need to pull from it so
[01:49:17]  react is like very much on the pull side um rxjs is very much on the push side solid and viewer in the middle um yeah so yeah sorry yeah is it
[01:49:32]  is there actually can you play some examples from real life um yeah i guess my examples with the with the stuff was not very clear with the equation but um this is it always
[01:49:47]  gets harder to abstract it out i think things like the show component are where you get graphs like this are where like we talked about keyed and non-keyed um
[01:49:57]  earlier in the stream and the the the way that something can decide like the keyed versus non-keyed is actually really important if you have a situation where um i mean
[01:50:12]  let's quickly kind of pull this out but if you have a situation like um i'm gonna quickly just make a div here with a with a count in it and luckily
[01:50:35]  we already have our count one so we can we can use it we can re-leverage leverage this right um this might not completely answer your question but i think it's
[01:50:45]  important for this because to actually accomplish things like the show component requires this kind of knowledge because if you're going to say um count one is bigger than five and to be
[01:51:06]  fair this will actually force us into a boolean anyways but you you got to ask yourself how do you isolate this change because if if count is bigger than five show
[01:51:23]  count okay that's easy but what happens when count is is um five six seven eight nine ten this statement is still true if you re-evaluate this every time
[01:51:38]  count changes um like we need two memos we need to actually split the graph because if this side effect was just like if if you kind of naively thought about this
[01:51:51]  and you're like okay well i'm kind of thinking of this like a crate effect and i'm going to go if count is bigger than five bigger than five yeah console log
[01:52:11]  expensive work okay right let's let's let's let's quickly um yeah i'm going to go back to not returning anything and we're doing count one actually no that
[01:52:26] 's not true i'm going to use a button let's get a button let's get a button all right and we're going to say call it click me right now and
[01:52:39]  we're going to do something like on click oh what is it uh set count one can't see if yeah set count one previous count plus one okay and maybe we can
[01:53:01]  format the document but it won't work because we're blowing up okay and did i spell create no i didn't i just put a constant in front of it okay okay so
[01:53:10]  now when we click it right we also kind of actually know what we we want to see what the count one is in the view just so that we can you know know
[01:53:23]  get some feedback on our on our progress here so okay click me one click me two three four five okay so far so good now we got the six and we we're bigger
[01:53:34]  than five so we did our expensive work oh we're still doing every time we're redoing our expensive work this isn't good right this this isn't good right you can
[01:53:52] 't just make a reactive system out of signals and effects right um the the the the the you you you you would do stuff very wastefully right and even if you try
[01:54:09]  and do smart batching and splitting you're still going to get um it's possible with a deep enough tree kind of like what i showed here where these are like different depths
[01:54:20]  even if you try and group things together like if you if i delete d like you that pulls e up and then like even if you try and like use scheduling as a
[01:54:32]  way to get around it you're still going to uh do unnecessary work um so this this is part of why memos are so important because you actually if you actually want
[01:54:44]  to make the show component you do this cost condition this is all show is honestly like it's a little more complicated but if you ever want to like i always say oh
[01:54:55]  you can just make your own control flow it's super easy right um we just need to extract this out if you make a memo around the condition now and say instead of
[01:55:08]  this check the condition as we click sorry um let's refresh that oh yeah i got cream memo as we click and now it's going to do the expensive work right but now
[01:55:25]  because of the memo it's only did that expensive work once because this resolves to true never changes again between true and false which means that this effect never runs again right
[01:55:35]  and kind of get back and i hope i'm answering the question properly this is why you can come up with some of these advanced graphs because yeah you could compress everything into the
[01:55:45]  effect in theory um but that would be incredibly inefficient right because effects don't have this two-way graph if you if you have more effects you just have more effects they
[01:56:03] 're just like a they're just like a a line right you just they don't have this kind of depth thing all they have is dependencies they they they don't talk to
[01:56:14]  each other right how do we write the create memo function that is super hard um this is the most trickiest part of the reactive system and the most important part that's
[01:56:31]  why i said like create memo is the reason why reactivity um works today mob x that was the thing because the basic version of this was like an effect writing a signal that
[01:56:43]  was that was like i when i teach reactivity i'm like oh just pretend like an effect writes a single but that is not sufficient here um right and it's not
[01:56:53]  just to avoid effects it's to avoid expensive calculations like other memos sometimes the other memos are expensive too right the the reason the system's so complicated is because like if
[01:57:08]  they always updated if there's no conditional updating here like if c or d couldn't drop the line then it would be much simpler system because you'd be like okay well
[01:57:16]  i i know all the effects once i queued them all these effects are going to have to run anyways and then you can just pull the values and like you make this much
[01:57:23]  simpler i think someone was actually showing that view i i said view was like mob x someone was showing me the view actually doesn't solve the diamond problem and actually is inefficient in
[01:57:33]  the way that i'm talking about here i don't know if that's true i haven't verified it myself i just someone was showing like oh view some example of you not
[01:57:39]  solving the diamond problem i i think that requires verification because i i'd be very surprised if that was true um but this is why as i said memos are super super
[01:57:51]  important um and kind of like a piece of this puzzle like if you don't like it's more apparent for us being a fine-grained library because we rely on this
[01:58:01]  behavior that's how we get every pinpoint update right uh this is why solid is what it is right and why reacts memo everything you can't remember the name seems like well
[01:58:20]  the thing is you don't do you know the power here is the explicitness like you could also not right there's a lot of times where the memo isn't necessary
[01:58:36]  right i like this control react kind of gives you this control i think when you go to a compiler like one of the things i always talk about with svelte or or
[01:58:45]  whatever is without the ability to be explicit about these things you can't optimize like like because if every let is a signal that's an easy one to actually optimize out of
[01:58:56]  but like then every let's a signal and if every dollar derivation is a dollar sign then every derivation is a memo like you don't you can't make that distinction
[01:59:05]  and optimize for for your situation and it's all that often i'm like actually guys don't worry too much about the memos most of these things are are handled in
[01:59:13]  important pre-made stuff for you like control flow components and stuff you need to know this to write libraries but if you're writing an application code you can base most of your
[01:59:21]  own code probably unless you need like no it's expensive probably doesn't need memo it's it's the uh it's like the the glue that needs to do the memoization
[01:59:31]  um so we we can can set you up on defaults that generally are less overhead than just auto-memorizing everything if you have uh could you have a memo
[01:59:42]  that stays in an unupdated state for a while if it's not used say used later in set time um right now no but there's potential for this right now because
[01:59:56]  of this situation that i was showing here where like it might never get to the end or whatever i do have like this thing at the like when you get past the the
[02:00:07]  execution get past the batch i'm like okay let's let's clear out the pure computation queue because i want to make sure that like we didn't leave any loose ends but
[02:00:18]  um it's because you have both ways tracing and you could say like if something's not listened to then it doesn't actually need to run i believe doing the right stuff
[02:00:30]  with auto cleanup you could probably make a system like that but i this is something i'm still evaluating um um there's some details of solid specifically that make me not as confident
[02:00:40]  there mostly because like i think in the pure reactive system you could but in solid we do other fun stuff with effects like the concurrent rendering stuff and that that always plays into how
[02:00:48]  we approach these solutions yeah that you just missed probably the most technical explanation part of the the whole thing so uh yeah so yeah i mean the takeaway here is i'm hoping
[02:01:06]  that for the most part none of you need to work now that i've explained how everything works none of you will ever have to worry about this that's that's that
[02:01:15] 's why we did this work because it disappears into the background and i'm i'm very stoked about that property here um in terms of batching but yeah this is this was
[02:01:26]  the big one um the the one that required the full excala draw um yeah i i think this is i i was really torn because i was like okay like part of me
[02:01:41]  was like maybe i want svelte but this because i don't like inconsistency like i really dislike i mean it's funny svelte is inconsistent but it
[02:01:51] 's like in a very explainable thing but one of the biggest conversations we had was getting rid making sure that pure is pure i don't know if this means strict mode in
[02:02:01]  the in the in the future if this means that solid is going to go on a path where we live long enough to be our own villain you know like the whole like react
[02:02:09]  thing where it's like strict mode is too strict but i think we we really should get into a zone here where create memos don't write signals and that we can
[02:02:18]  depend on this part of the graph being derived because as long as no chaos happens in here we can make huge amounts of of assumptions um not just for optimization but like um
[02:02:35]  for consistency all right so how are we doing uh how far are we in here uh two hours in wow that was a big one okay so we still got two big topics though
[02:02:49]  that are the for the release we have i want to talk a little bit about resources and ssr still so um let me see here we can make a little thing
[02:03:04]  here all right let's get back to our release page and let's talk about resources i hope there's no more questions here right create signal inside create memo yeah we don
[02:03:17] 't have hook rules so don't don't worry about stuff like this um it's all just the same when i say creates you could create actually creating a signal inside create memo
[02:03:30]  is okay because you're actually like it's a derivation you're creating like you're you're taking some data and using that data to create a memo the problem is
[02:03:39]  writing a signal inside a memo because then you're like triggering another update but actually creating one inside a memo is perfectly valid to to our benefit here i don't think we have
[02:03:55]  to worry about this too much because no i actually made another primitive called create computed that is set up to be clearly for this case so people shouldn't be using memo this
[02:04:07]  way already like like i don't think this is actually a real problem it's more of that people were using create effect or create computed and people using create effect aren't going
[02:04:15]  to have a problem here they might be doing stuff that's unoptimal but they're not going to like it's not a big deal people using create computed we're going
[02:04:20]  to move people off create computed in 2.0 and that was part of why i was able to do this batching because once i resolved that yes we don't need
[02:04:28]  to worry about the weirdness then everything just simplified as i showed you from the commit i literally just deleted a bunch of code out of the solid and it's probably faster now
[02:04:38]  and smaller so me you know this is from me spending a bunch of work and time to you know to maintain something for your sake and maybe it wasn't maybe it wasn't
[02:04:49]  needed i do that a lot um maybe go back and look at the stream a little further i the last half an hour i'm literally was just explaining how all this works
[02:05:02]  yeah happy about this yeah it's it's a good step forward i'm glad everyone's happy about this okay so let's talk resources um resource stuff is actually a little bit
[02:05:12]  more straightforward um the first one that's really easy and again a typescript thing that everyone's going to love because people love typescript um is that we're going to
[02:05:21]  add a new state field uh to create resource which means that all the five possible states are all representable here like the whether it's ever resolved the value whether it's currently
[02:05:33]  loading or whether it has an error and people love this with typescript obviously and i'm going to pull up not the js framework benchmark um um why is the js framework
[02:05:44]  benchmark like the only thing i have open um actually let's see do i have another one no new window it's open solid here for a second to just show you what i
[02:05:55] 'm talking about um i could just go to the repo but whatever um let's go to solid not ssr source reactive signal yeah what i want to what i want
[02:06:17]  to show here is that is now with the resources because of this we get to do fun stuff like this where we create interfaces for each potential state which are type narrowing
[02:06:37]  so essentially if you indicate the specific string we know whether the value can possibly be undefined or not or or whatnot so this is this is kind of of nice um
[02:06:50]  for typescript the ironic part about this change is if you're using error boundaries and suspense you should never use this really like um this is really good for like people doing basic
[02:07:03]  stuff but error boundaries and suspense are designed to automatically handle the stuff for you on read so i added this because it's very very wanted and it gives people more insight into
[02:07:14]  what's going on especially if they're not using these features but like the golden path probably suggests you should never use this because you shouldn't be the one taking care of like
[02:07:26]  all these conditions so anyways um it is very powerful though because type narrowing is important and uh just wanted to show that because like yeah the resource type literally just becomes a
[02:07:43]  union of of of these different states um that one's easy one i think the i think the most requested one is this one but how about resources that are stores now i haven
[02:08:00] 't landed on a final api here and i i there's some there's some interesting decision points because if you if i made a crate resource store suddenly we have like
[02:08:12]  a split where now whoever implements react our solid query um or turbo query or whatever has to make this choice and like expose it to the end user and stuff like do they
[02:08:26]  have two primitives do you know there's this natural split on reactivity so instead as i said this is kind of copping out kind of doing like the uh experimental
[02:08:35]  unstable whatever like kind of thing but essentially i've created the ability for you to just um pass in the underlying signal and if that signal happens to work like a store that's
[02:08:47]  cool what i think what's cool about this we'll be able to play with things and decide what kind of patterns we want to do for example in this example i gave
[02:08:54]  here i make something that looks like a signal right it's just grabs a value off the store and it sets it but i create a store under the hood and i actually call
[02:09:04]  it with reconcile to do data diffing so what this means is every time you like let's say you refresh a list from an api um you know and get the full
[02:09:14]  list back it will just data diff and it'll be like okay bang you changed only the completed field on to do two and then just fine grain update that instead of rer
[02:09:23] unning anything it just will just jump through and that ability for fine grain is super powerful um and like don't get me wrong like this is this is gonna be part of solid
[02:09:34]  start like i showed that cool to do's demo the the other day using our actions and loaders like we're gonna bootstrap this in so that you know we
[02:09:44]  can do the almost remix-ish if we want to reload all the data without re-rendering anything and still getting our fine-grained updates it's super powerful and
[02:09:54]  for those of you those who know reconcile has been benchmarked and it's very it's basically very similar performance to stuff like inferno like the fastest feed on libraries so i
[02:10:02]  i think having this ability is really powerful um and it's people don't realize yet and because i haven't wrapped this into like a nice like crate resource um crate store
[02:10:12]  resource or whatever primitive this one might be slow to catch on but i wanted to show you guys if in case you want to tinker with this and come up with ideas of
[02:10:23]  how to um mess with the storage and resources and do a lot of different stuff with it i think i think this keeps the api really open and as this case which
[02:10:30]  is the obvious case i'm already seeing benefits with the work we're doing on solid start um uh it it lets me do smarter stuff like the that if you did watch my
[02:10:42]  stream there was a to-do example right i probably have that like up here somewhere um where was i yeah like uh not the bare one oh yeah to-do example
[02:10:56]  right um if if if without this kind of deep fine-grained um ability to do the updates the resource what ends up happening is every time you pull from the server it
[02:11:10] 's going to need to recreate that list item which means that there's no way that the actions all have to be declared top level if you want them to kind of like
[02:11:20]  be an overarching thing as soon as you have this dip thing then this no longer becomes a problem and you can actually nest the action stuff this was very essential for the work in
[02:11:32]  uh solid start so i just wanted to kind of point out um this is super powered because this is like the the the the kind of use case that i feel that's
[02:11:42]  been missing for people um because like what if the data does come from an outside source and you don't get to do fine-grained updates well now you do all right
[02:11:53]  no comments on this one i thought this one like in my mind this is the one people would be most excited about but yeah maybe maybe apps aren't there yet the last
[02:12:02]  thing i want to talk about on resources is something called um is this one is probably not going to matter to most people on the stream but unless you're someone working on ast
[02:12:17] ro or fastify um actually sorry one question did come in is something like solid query bound to create resource i think something it should be um the thing is the one we
[02:12:33]  don't just throw promises which is a difference from react so the resource is that async primitive so no like people have been talking about stuff like i i haven't looked
[02:12:45]  at solid query yet and seen all that but like what we want out of these kind of integrations is just a caching system solid already often handles all the mechanics around ref
[02:12:56] etching and suspense and all that kind of stuff um it's kind of unfortunately on the react side it's like the opposite where like when tanner had to go and add
[02:13:04]  the the suspense stuff you had to actually like go and add the suspense stuff and like figure out how to handle and you have to toggle it with a flag with solid you
[02:13:11]  you just use create resource primitive and it's all built in it just works you know transition suspense all that stuff but it means that universal solutions maybe the boundaries are different like really
[02:13:23]  we just need the caching mechanism and you can always abstract the caching through using the resource fetcher it there's been multiple libraries that do that maybe none of them are
[02:13:31]  as featured as uh um uh solid query or tan stack query is but like if you can see how you get there because if you get to use these primitives that are
[02:13:43]  baseline and solid anyways the same thing used in a router the same like primitives those libraries get small like there's no reason for a query like add-on on top of
[02:13:54]  solid's resources to be more than like 5k and i'm i mean even with all the features of of of like tan stack router or sort of tan stack query like
[02:14:05]  uh like it it it it's just like all the all the pieces you need all the all those just are built in so i think i think that's one place where the
[02:14:16]  agnostic solutions are going to there's a shift um because of this primitive but we need the primitive as i mentioned because we it's not just a promise we don
[02:14:27] 't throw a promise and throw away your stack our suspense resumes fine-grained yeah this is something this works perfectly fine if if we can because you get to write the
[02:14:51]  setter um if if i can pull up this code again you the only problem is you're going to have to figure out how to make typescript not complain because i don
[02:15:00] 't know how to yet but people tell me it's possible because look you write the setter so if you're setter you could do something like like if you need
[02:15:09]  deep updates like like you can write whatever setter you want the thing is you just have to recognize that if it's coming from uh if it's coming from the create resource
[02:15:22]  itself it's just going to pass you the data so you you you might have to do a little bit fancy but you can you can anchor stuff off here like you you
[02:15:31]  have this is what gets passed right back out through mutate again so you have complete control here is a minimal caching thing outside the scope solid yeah yeah but it's super
[02:15:42]  easy i i have i showed this on stream you could literally make a simple caching thing by just like going outside the resource and going like const some object and put a key
[02:15:50]  key and then using the fetcher like um i probably haven't actually showed this on stream maybe that's worth doing at a different time but like the problem is i can
[02:16:00] 't it's so hard to make assumptions about caching like there's a billion different ways to do it and i tried stuff like coming with cache components and all this stuff and
[02:16:08]  just it was a mess and i realized at every point even if i came up with a custom cache thing the custom cache thing would have to have a like a way to inject
[02:16:15]  a custom cache into it it just and then i was like well what's the value here because it's hierarchical well sometimes caches aren't hierarchical there basically was
[02:16:23]  no i couldn't i i spent a long time on this pre um i'm trying to remember what what release it was but like i spent over six months toiling on this
[02:16:32]  and writing in discord about that um right so like so like yeah i mean if you think about it it's just because it's as i said these mechanisms are really because
[02:16:48]  because there's a fetcher in create resource you can always intercept um the query coming in and then be like oh don't run the request just fetch it just just grab it
[02:16:59]  out of the cache so you have completely the ability to then once you write this custom caching logic to wrap your own create blank resource and be able to use that c
[02:17:11] aching and solid start doesn't do much with the caching but it does use key and validation similar to react queries so um it's just an example of this kind of being
[02:17:21]  used because these are all just options and things you can pass in it's very composable i as i said i just i couldn't make i create resource is kind of
[02:17:29]  complicated but in my mind right now it's as simple as i can possibly make it um and i know there's a lot of stuff on here like why did i add all
[02:17:39]  these states if it's as simple as i can make it but like the real attempt here is to make this as basic as possible it's just um the part of that
[02:17:48]  is slicing up the responsibilities and understanding what what pieces you need right all right uh sorry not this one so that's that's it for resources there there isn't actually oh no
[02:18:00]  that isn't sorry i didn't get to do the last one um i got interrupted the the which is good just double checking anyone else have any more questions about stores and
[02:18:13]  and whatnot in create resource just take a drink here the funny thing is what i what i love about some of these changes is and this is why i'm emphasizing so much
[02:18:32]  on the decision making process here is because a lot of thought went into these and like a lot of conversation but the implementation for some of these things is really simple like look at
[02:18:43]  this option dot storage or create signal like the implement this was literally passing an option through and just like there implemented like this is you know this is very easy because then this
[02:18:58]  is the same stuff as before set value which then gets passed in out um as mutate later like this i i did try and keep things as simple as possible and a lot
[02:19:11]  of these things actually weren't hard things to do they were just things that required a lot of thought um in terms of api design and where this goes um okay so
[02:19:20]  the the last thing on the resources is something that probably won't apply to apply to most of you mostly interesting probably people who like write like fastify dx or like islands
[02:19:31]  frameworks around solid is sometimes you want solid sometimes you want solid to uh um more or less uh how should i put it you want to have resources and do all the stuff when
[02:19:48]  it wakes up in the client you want to be able to do client-side routing and transitions and all the nice stuff but when you initially render the page probably from a
[02:19:55]  server rendered page you don't actually want solid to fetch the data like maybe it's islands maybe it's coming in through props maybe you have some serialized data that you do
[02:20:04]  in your framework to do data fetching and you don't want solid to handle the data fetching see what's wonderful about solid solution is as if you embrace it completely
[02:20:13]  like solid start or rigidity or whatever um the resources just do all the work for you like you just you just do the create the resource it does it it does the fetch
[02:20:24] ing on the server auto serializes the data across the line and then wakes up hydration's like oh okay there's the data source and it does everything and then it updates
[02:20:34]  on change and you don't have to do anything it just magically automatically works this is the other reason why we have resources because it just connects the server to the you don't
[02:20:41]  have to worry about double fetching you don't have to worry about serialization everything automatically works but if you have a solution where it's in your benefit to do the
[02:20:50]  fetching out front like like like these ones like solid has parallelized data fetching and nested routing so we generally don't need it for our own solutions but let's
[02:20:59]  say you're fastify and you want to build your own framework around solid and you want to do the data fetching or your astro and makes sense to do the fetch
[02:21:05] ing outside the islands sometimes you not only don't want to fetch on the server and you don't want to fetch on the client you just want a way of injecting the
[02:21:13]  data and going like it's good and the thing is resources already have something called initial value but initial value is more just a placeholder like what if you never fetched
[02:21:23]  or you know and what if or you want something in place before you fetch and what we want is something that say hey actually don't do the fetching and there's ways
[02:21:36]  to do that already you can already set like say we took the same convention as swr whereas if your source like your query is null or undefined we just don't
[02:21:45]  fetch but it's really awkward to have the server not fetch and then the client not fetching like well no actually like where's the data coming from like there's this
[02:21:55]  weird like because the second you actually you want the source to actually be subscribed to something you want to go like on this parameter change update um so people have been doing weird hack
[02:22:05] y stuff where they like do an is server check and they create a signal on the server and then they create a resource in the client and they like set it false and
[02:22:14]  like add all the conditions i was just like oh man this is this is nasty so what we do now is we can say when you set set up your resource you can just
[02:22:23]  go like tell me where i initially want to load that data from is it from a fetch on the server or is it from this initial value blob and because it's part of
[02:22:32]  the ssr process it's not going to refetch on the client regardless but this will tell the server like hey don't serialize the data it's it's
[02:22:38]  already in this initial value which will also be in the client code obviously so you you have the ability now that the resource data gets serialized however you want maybe you put on
[02:22:50]  this dot data thing um and then in the client when it wakes up it goes okay yeah i'm going to fetch it from there but it still runs the source the reactive part
[02:22:57]  of the of it so that it creates the subscription it just doesn't do the fetch and then when the next time that subscription changes well then it updates and this gets rid
[02:23:05]  of like a whole bunch of custom code uh these people were writing and they can literally just go initial ssr load from initial value and yeah this is as i said mostly
[02:23:15]  for uh those kind of framework writers but this is just it takes away a whole nastiness is this discussion all reflected uh the it should be merged imminently uh we have
[02:23:28]  a i've created a pr i'm imagine it's just getting reviewed and it'll it'll be in the docs now the cool thing about this release as i already mentioned is
[02:23:35]  there are some behavior changes and like a couple small things but it's it's it's about the direction more than anything um but yeah for now use the release docs as
[02:23:48]  docs but the these will be merged very soon um all right so that's it for resources um let's talk about ssr okay i'm gonna make a quick banner here
[02:24:01]  for myself i spent yeah i spent a lot of time on ssr in this release um a lot of time and uh it it it's been this continuing cycle um
[02:24:18]  i don't know if if everyone probably knows or wants to know the history here but when i first created solid i didn't care a bit about ssr solid's client
[02:24:28] -side rendering is really fast in fact it's a funny story i was doing a benchmark with the builder guys and we were all like sitting there and i was trying to
[02:24:36]  figure out i'm like why is hydration so slow in solid but the rendering so fast and all this and actually the answer the question was solid was server rendering and then completely rec
[02:24:46] lient rendering in this benchmark um and the funniest thing about it was it wasn't even the slowest it was still like faster than most of the frameworks doing twice the
[02:24:58]  work um but again i i was doing a lot of this benchmarking and that was kind of um part of this was um because this kind of picked up the conversation with builder
[02:25:11]  and i i finally got to do a bunch of work i wanted to do a long time and what this comes from is okay at the beginning solid sorry kind of step back in
[02:25:21]  the beginning with solid we didn't do ssr and then the first version of ssr was really quite bad we put the dom and reactivity um yeah i
[02:25:31]  don't know if sometimes it's easier to to maybe just write this out okay so version one next let's get this here just so you can see this kind of progression i
[02:25:43]  don't know if this is value for anyone but we got we had the dom plus reactivity on the server which don't ever do this so we had like js dom
[02:25:53]  plus like client version of solid right and the reason i wanted to do this was because i had no idea how i could possibly update things after the fact and stitch it all
[02:26:09]  together um so the first thing i did was like i was like okay let's get rid of the dom and do a stringing cat this is probably like too lengthy so
[02:26:27]  now we just have the client version and it could do all of this um stuff and this version was okay but honestly reactivity on the server put us into like like really
[02:26:42]  slow uh like on benchmarks and stuff we're like as slow as like react or preact or something right and um i was like i guess oh fine like but we were no
[02:26:51]  marco we were no inferno we're no svelte or view even like we weren't in a good place here and i was like okay well what can what can
[02:27:01]  i what can i what can what can we do differently well and when i did my research what i realized was the we didn't need reactivity for synchronous rendering so like
[02:27:13]  there's a couple different methods like there's there's like render to string right which just runs synchronously there and then i created render to string async and this is why
[02:27:25]  i need the reactivity because if like some data fetching happened and then it loaded i needed to be able to update stuff right so this is where render to string as
[02:27:34] ync came in right and to be clear at this point we already had suspense on the server and stuff this is like three years ago but like the mechanism was still kind of similar
[02:27:42]  to what we have now um but it was using all this reactivity and but it was really slow so what i ended up doing i was like okay i realized when i joined
[02:27:53]  the marco team in 2020 that i wanted render to stream okay and the the problem was like i could do a third version here which was string concat plus foe
[02:28:11]  like plus like mock functions and what i mean by that is i could concatenate strings instead of like using a dom and then instead of using signals i could literally just
[02:28:25]  return like a function that returned a value like just fake reactivity and like you can tell that each one of these is fast is like slowest slow faster and when i did
[02:28:36]  this and did a bunch of optimization i wrote that article a couple years ago solid i came up solid was the where was it like medium uh sorry not maybe it's easier
[02:28:48]  to go uh how we i wrote the fastest javascript framework i wrote there we go again yes um yeah you just search on google you'll find all my old articles yeah
[02:29:04]  um um and the this this synchronous approach anyways and we're working with this was eventually what led to the like the kind of huge performance gains that we had um still hold
[02:29:19]  true to this day but the problem was it didn't work with render to string async right so let's see if there's garbage in the chat let me change that
[02:29:35]  okay so essentially i was like i i was like oh man this sucks i could do this work but it you know okay so it's like optimal poor and then when i looked
[02:29:52]  at render to stream i realized something uh originally i was like because i was like oh this is this is gonna be poor right but what i realized was if i didn't
[02:30:03]  if i only stream the data but didn't um but only like if i rendered the shell synchronously the same as rendered a string but then only stream the data so nothing like
[02:30:15]  re-rendered or did like updated on the server i could actually and this was the revelation around that time use option three to have super fast streaming and then sync the
[02:30:29]  data over and then have the client render the data after the fact now this isn't pure streaming but it allowed me to basically have two modes of ssr and two
[02:30:39]  different compilations actually originally so essentially if you wanted render to string async you got the poor version otherwise you could do the optimal version and you might be asking why the
[02:30:49]  hell would you bother with having this poor version well the reason is ssg because there's no i didn't want a browser to do ssg i needed the
[02:31:01]  whole thing to resolve so ssg could be slow and then i was telling everyone else use render to string or render to render to stream so this is like a really simple
[02:31:09]  way of doing it um it's different than what we do today but essentially um you you know you could basically do that first render where you render the page and render the
[02:31:19]  header and maybe the sidebar and then essentially could have like sections no this is black still sorry could have like sections here where like oh the content like obviously the main content needs
[02:31:36]  to be loaded in after right but maybe even the contents of the sidebar could be loaded in after and what we what we would do is we'd client render them yeah
[02:31:49]  sorry ssg is static site generation right but my point is what we do is we render this black shell and then after the client instead of doing and we'd hydrate
[02:32:01]  it um and then when we hit these boundaries which happen to be suspense boundaries we would just always client render the suspense boundaries so replace the fallback with client rendering and this
[02:32:14]  was actually like pretty performant pretty pretty easy to do and it meant that i was pretty happy that we basically had the fastest ssr solution because of i could make this
[02:32:25]  assumption but this is a terrible place to be because we had like six different compilation modes and like different versions and it was it was not fun so over time and this is
[02:32:36]  a really long explanation obviously get to where i'm getting at we started i started merging them with every release um kind of getting them closer the first thing um and finally i think
[02:32:48]  around when when i want to say around 1.0 um i managed to get rid of reactivity on the server um like i got the i got the base first i
[02:33:05]  was able to get rid of reactivity on the server and then i was able to um merge the like have them running on like the same compilation and then finally uh around
[02:33:22]  yeah i guess around 1.3 when i when i did the new streaming i they they actually share most of the same code except um there was specific hooks like in the
[02:33:37]  code like if your async do this if your stream do this um so there was like specific code paths i almost had like two versions of everything on the hydration and the server
[02:33:46]  it was it didn't affect hydration that much i i for 1.3 i managed the big thing that did with 1.3 was merge the hydration logic so the same the
[02:33:55]  client could hydrate the same rather whether it was async or streaming but the server still had different paths with 1.5 i finally merged this in to the same thing
[02:34:08]  completely and and i i mean completely like if we go to dom expressions now um and you look at the implementation of of the uh of the server render to string here or surrender
[02:34:23]  string async it's literally calling render to stream and there's a promise it's like render to stream then um and i actually the way i implemented this was use the
[02:34:36]  same render stream code and then added a then right now there's like a pipe and a pipe too which is which is how we uh like do the difference between node streams and
[02:34:47]  readable streams but what this i mean you even though i still ship the separate apis what we're moving towards here is actually having a single render function on the server more
[02:35:00]  or less um basically an eight uh um basically an async render is just a stream that flushes at the end and there's no revelation that's how react works too like
[02:35:13]  with their streaming renderer um but it took us a long time to get to this point and the benefits there well it's not the benefits the reason we i i like
[02:35:24]  yeah yeah how do i phrase this the reason i want to go here is because these worlds kept on colliding because in in a uh in a uh let's get back
[02:35:36]  to my scale draw in um a streaming version of something you can always know that the shell is going to have streamed at the beginning so like when you do like an error
[02:35:46]  boundary if something throws an error later you just throw it across the network and the client renders the error boundary but and similarly like when you have suspense um you render the client
[02:35:46]  and then you can see that it's going to happen in the beginning so like when you're doing like an error boundary so like when you're doing like an error boundary
[02:35:50]  if something throws an error later you just throw it across the network and the client renders the error boundary but and similarly like when you have suspense um you render the client and
[02:36:01]  then as the parts come in you shift the html and you insert them right and that that's like with 1.3 we had the full html streaming and
[02:36:01]  that just kind of worked but with async but with async you do all those insertions on the server so i had like slightly different code paths because i was like
[02:36:20]  okay we need to do a string insert rather than flush a script that makes the browser do it and the same thing with error boundaries and while these things were separate you know there
[02:36:29] 's a lot of extra kind of code the manage um i knew i wanted to put them together but i was forced to it because we added a feature called defer stream um
[02:36:39]  i i understand we added a feature called defer stream and i i i i've talked about this before and what defer stream does is it lets you like selectively choose when to
[02:36:55]  do that first flush so like you could be like oh i actually need this sidebar content before i flush the stream and again i'm not getting into too much detail we
[02:37:05] 've done this on a different stream but essentially you could select like on the resource go wait for this one and in that case you actually do want to do this insert on the
[02:37:14]  server instead of in the client and while i optimize some of those cases for the most part i did what i always did async was the one that took the hit so essentially
[02:37:26]  you know if like error like error boundaries always rendered on the client even if they could render on the server simply because it's way simpler because i have that logic and now
[02:37:39]  that those lines had blurred because of this whole like defer stream thing i knew i needed to come up with a with a different approach so this is this is this is what
[02:37:52]  motivated that i booted this person twice they're like different people yeah and i'm the only person who can do it apparently anyway um i guess like if i had mods
[02:38:16]  and youtube or something i just don't know enough about that anyways what i'm getting at is these lines very quickly blur and with 1.5 we actually now if you defer
[02:38:28]  a stream we'll do the work on the server always because that's the same as the work we do if it was async and if if if if if it's
[02:38:37]  if it's streaming it's working in the way that it has since 1.3 and what this means is ultimately we've taken what started as like two completely separate systems separate
[02:38:49]  compilations separate runtimes and now have finally merged them into the same routine the same everything and it's just a spectrum which is really cool because it as i said
[02:38:59]  it made me focus on adding more features and being able to improve stuff like now that we have those guarantees around server rendering we added on cleanup on the server which you might think
[02:39:08]  is weird but we do do render effects on the server like things that to do rendering so you might need to do a cleanup like if you hit a branch um this came up
[02:39:17]  with solid start what if you set a status code on one branch and then it fails and it goes to the air boundary well then you might want to like unset the
[02:39:27]  status code or the header or the whatever right like you know like the meta tags because we build this all into the way solid renders being able to use the same mechanisms
[02:39:39]  to clean up makes a lot of sense um but yeah i i spent a whole bunch of time benchmarking um we i i managed to improve the raw string rendering by about
[02:39:47]  eight percent um and oh i want to give a quick shout out here um uh a lot of uh libraries um serialization is a big cost and a big thing a lot of
[02:40:02]  libraries um use a library by rich harris called devalue um i don't know if you've ever seen this one devalue i think even view uses it
[02:40:15]  um devalue rich harris um it's it's very easy um to use and it lets you serialize stuff across the wire you just you can basically just go dev
[02:40:27] alue this object and then inside your your script tag you can literally just like read it in um and server render um what i ended up doing um was get a little
[02:40:40]  marco magic in here um dylan uh from marco had written his own serializer a couple years ago anticipating marco 6 and they're still working on it their serial
[02:40:50] izer for actual marco 6 is crazy um because of like all the resumable stuff um but he gave me access to his repo where he wrote his serializer and
[02:41:01]  i mean benchmarked it's like six times faster than devalue so um even in simple benchmarks i was doing i was like seeing um like two three times improvements on the
[02:41:14]  overall server rendering speed so i am pretty stoked um to have to have access to this um hot piece of marco technology um um i need i give him credit and and
[02:41:27]  and and whatnot and link back but i he might want to release it at some point so i can give him proper mit credit and stuff oh i'm guarding him on on mit
[02:41:36]  no seriously i didn't cover this but i was doing benchmarking and yeah i don't know if this is the right time to talk about it yeah it probably is um
[02:41:44]  you you all might have seen uh what i was gonna say you might have seen like that tweet that i talked about from last week no no no this one um the the the
[02:41:58]  benchmark one where i was showing the numbers from builder or whatever this one um and i'm just going to talk about this talk about this for a moment this one it was
[02:42:15]  a raw rendering one so it was fine um and solid has a good score and it's very simple it's like a hello world so like this doesn't show very much
[02:42:19]  solid has a very fast renderer but steve backed up a bit and took a more advanced uh uh uh example and he freaking auto can ended it and what was noticeable is
[02:42:31]  like solid was still like top four ish or whatever and svelte and we were kind of all in this kind of range like everybody was like at like um like
[02:42:40]  the throughput on them uh was at uh i'm trying to remember what the like the numbers were but like i don't remember the scale but let's pretend everyone was like nine
[02:42:51]  like ten like i think svelte and salder around 12 um i think fresh actually beat us around nine uh quick wasn't in it because they had a bug or something
[02:43:01]  apparently um but you know and all the way up to like things like angular or angular or or next who were around like 16 or 18 or something right marco was one
[02:43:10]  like everybody was like in this range from the tens to the teens and marco was one like like like like it was it was just insanely faster and i started looking into it
[02:43:23]  and there's just so many details that you don't realize like salt salt might have the fastest string renderer like the actual rendering is the fastest and you're not going to
[02:43:31]  get penalized too hard for how you string render in javascript um but like i started like the length of the of the html actually started making more impact
[02:43:42]  on compression so like the like how much you serialized or the um all the overhead um in our case we're using solid start and actually converting to the response request objects uh
[02:43:53]  that we're doing where marco was just using like node directly had an overhead that's another thing and like almost the meta frameworks have a bunch of unseen overheads that
[02:44:03]  are probably more impactful than the rendering that you do with them like i i know from benchmarks how fast solid renders but whether salt like salt start still does decently but like
[02:44:16]  it's only one piece of the of the puzzle and i think we haven't done enough good benchmarking on seeing the whole overhead of the meta frameworks because in a lot of
[02:44:27]  cases the bigger meta frameworks um have like like that overhead makes like that overhead makes way more of a difference than like how slow react is anyway just just i i spend a
[02:44:39]  lot of time in here because one of the benchmarks i couldn't get the number down in solid and i tried all this stuff and i i changed the asset insertion and like
[02:44:47]  a whole bunch of things but we've got a bunch of performance improvements out of this i they're all measurable so i'm like happy about that but um ultimately like you
[02:44:56] 're like inking out uh inking out uh throughput numbers when put into like a real world situation so i think i think i think it's i think it's interesting i
[02:45:03]  said i'm proud of where solid start is given you know how new it is and and whatnot we're we've we score pretty well on those benchmarks but like you look at
[02:45:03]  something like marco and you're like almost embarrassed you're like like like it's just so much faster um so uh you know just sorry little tangent but just kind of
[02:45:10]  um talking about the benchmark because you're only as slow as the next bottleneck um we're gonna do more work here in solid start in the beginning uh or coming up
[02:45:18]  as we we gear up right now um it's only as slow as the next bottleneck um we're gonna do more work here in solid star in the beginning uh or coming
[02:45:24]  up as we we gear up right now um it's the next bottleneck um um we're gonna do more work here in solid start in the beginning uh or coming up
[02:45:40]  as we we gear up right now um it's pretty safe to say when you step out holistically from it um actually solid start and svelte kit are very they're
[02:45:47]  they're neck and neck on performance they're almost identical um so even though some of the benchmarks would suggest that solid is much faster than svelte um when it comes down
[02:45:56]  to actual uh like kind of holistic benchmarks i think today we're we're very very similar to very very similar uh kind of coming out uh kind of coming out slightly had
[02:46:04]  a remix and next and nuxt and angular universe and all those solutions so yeah still places to work on we've optimized some areas but there's more work to do anyway um
[02:46:14]  but yeah that's that's that's the thing like i i i i did some good work that improved some benchmarks but we still need to really um engage the whole holistic view
[02:46:25]  of performance on server rendering and i'm that's why i'm very glad by the work that steven steven builder are doing there all right sweet i think that's
[02:46:35]  it on ssr the cool thing about ssr you don't have to do anything it's just faster that's that's that's the that's the that's
[02:46:42]  the the the key part here i think we actually talked about most of the things there's just like a lot of like low-hanging fruit stuff like css types now
[02:46:51]  in our types which improved our jsx type slightly um there we we i fixed a bunch of bugs um fix that scheduling benchmark someone had made someone had a benchmark that should
[02:47:04]  react was faster at like concurrent rendering i fixed it so it works in solid um that that's that's most of 1.5 release um to be fair um it's as
[02:47:12]  i said it's it's a bunch of little things it took a lot of work and a lot of decisions in the process but it just makes the whole overall package just feel
[02:47:12]  a little nicer um less places where you're going to get caught up or stuck um well i hope at least uh uh uh i i i still occasionally i i watch streams
[02:47:21]  when people pick up solid for the first time i don't really um look at the docs and then they have a really hard time and i still reflect on that a lot
[02:47:32]  trying to figure out how do we make things easier like um because that's the last thing anyone wants you know so yeah i i i i hope that we can avoid that
[02:47:55]  more in the in the future um there is like definitely a balance between giving people the right level of control and power to make performant apps and making it intuitive to people coming
[02:48:09]  from all different sorts of backgrounds uh you guys are killing me yeah well but not only him i watched a casa do stream that was like that too uh but yeah that was
[02:48:23]  the one that was most recently yeah and yeah and a lot of great stuff's been happening uh especially since the astro release you know what um let's let's let's
[02:48:38]  let's shift gears i think i unless there's more questions about 1.5 i think it's time to get into this week in javascript um uh let's
[02:48:47]  let's get ourselves all ready for that um it's funny though because i actually don't think this week in javascript has a ton to do on on my uh on
[02:49:02]  on my thread let me just pull out my notes give me a second everyone everyone's still doing good my batching explanation didn't uh cause your brain to melt you're
[02:49:16]  still here with me on a friday afternoon or whatever time it is where you are all right yeah okay let's clean up a bunch of stuff no no no that's
[02:49:35]  not what i want to do um all right okay give me two seconds here all right i could do this all off screen but that would that would ruin half the fun right
[02:49:54]  sweet it's funny this week in javascript for my personal stuff wasn't actually a ton of things except until like the last couple days when everything kind of started blowing up
[02:50:11]  but on the uh on the uh on the on the other side um it's there there's been a lot of other conversations that i see are probably worth talking about um
[02:50:25]  let's start that one there okay cool um and there okay i'm i'm all set so let's let's get ready here yeah not the afternoon for you i've
[02:50:37]  you're a trooper that's all i gotta say um yeah thanks for that i'm gonna start clipping the this week in javascript separately if you notice i've been
[02:50:55]  doing that recently how i've been approaching it um so um so yeah i i i we're we're gonna be making these pieces more accessible in the future that's my
[02:51:11]  hope i don't think my content really lends to being like clipped eight billion ways if you ever watch theo stream he literally just like he's just like okay let's
[02:51:19]  get ourselves situated and he's like on for like 10 50 minutes gets the perfect clip then he's like okay what's next guys and he just he lays out his stream
[02:51:30]  like in these segments and then they just make the perfect youtube videos um i don't think i'm ever gonna be on that kind of thing uh all the stuff gets too tied
[02:51:38]  together and in depth but i we can pull out this week in javascript so that's something i want to do all right so let's get that ready all right
[02:51:50]  it's time to talk about this week in javascript um for me i have to admit um i was kind of detached from a lot of the other conversations that have been
[02:52:04]  going on um i i've been thinking a lot about the future of solid right um solid 1.5 we were gearing up to um which was the theme of the
[02:52:13]  stream today um and i can't think about the future without thinking about the problem of hydration and uh resumability and i i kept on seeing these discussions where people um were
[02:52:29]  talking about resumability and like equivalating it with like what quick does and i i felt that that wasn't a really accurate view of it so i wrote an article
[02:52:42]  and the funny thing is i had a lot of fun with this one because it's it's a it's a tough technical problem but the whole situation is kind of absurd so
[02:52:52]  i i hope that came across on this article google apparently didn't like it this this article did not get picked up by google search or like android search which is usually like my
[02:53:01]  bread and butter um maybe they just didn't appreciate the title and stuff but um what i mean by the situation so absurd is that things like hydration in a sense have no
[02:53:15]  business existing and um resumability as a solve for that sort of is in the same boat um and these are also the terms that no one really gets like i'm
[02:53:27]  sure mark deglash knows what hydration is but it's still a funny joke because let's face it like hydration makes you think about water and um i mean there's so
[02:53:39]  many levels on on on this one but essentially you can read the article to get more details but i'm a big i'm very excited by the work that um misco
[02:53:50]  or misco and um all the guys over at builder are doing um in terms of resumability with quick and also the work being done with marco um six which is
[02:54:02]  also along that same path um and i thought it would be worth trying to i yet again try and uh kind of generalize this because i i guess i have a slightly
[02:54:16]  different opinion um than than what's been telegraphed so far on this thing i think there are things about quick and quick's architecture that make it very impossible or very difficult
[02:54:30]  to impossible for other frameworks to replicate there's a reason why quick is the way that it is and there's a reason those other frameworks are the way they are and they split
[02:54:40]  however i'm not convinced that resumability the actual core resumability part couldn't be applied to other frameworks which is a is why i'm spending so much time
[02:54:52]  generalizing it because i've i've watched quick take it one way and marco take it like a completely different way and see that there's a huge amount of similarities but
[02:55:02]  where the common ground is is enough of an overlap that it should be possible reasonable if your framework has a meets a few criteria and um that's something that i i'm
[02:55:15]  going to probably establish more in the future and write more about but i just wanted to start establishing the baseline here and the thinking so people can understand exactly what resumability means
[02:55:25]  um and um that's why this is important because the work here is important because we do want to get away from hydration and the key there is getting rid of the runtime
[02:55:40]  components which if anyone's been following me and solid know that that is what solid does solid is not resumable but the key part to make something resumable is
[02:55:51]  being able to break something that looks like this apart into something that looks like this and that is i mentioned earlier about promises and reactivity that's definitely something you can do with
[02:56:03]  reactivity you just need to be able to serialize it um so yes this has been on my focus and the thing is i think there's multiple ways to approach this
[02:56:14]  um right it this this what i'm about to draw right now actually i'm gonna slide down just so i can keep it um it might not make sense to a lot of
[02:56:25]  people but i want to i want i want to show you a sort a sort of path that probably i've been thinking about because this is probably not the path that you
[02:56:43]  you think about but if if i'm there there's a certain common mindset here in terms of approach and it's not about where you fall in this list but it's
[02:57:09]  about understanding the shared heritage here and this is an idea that i'm just kind of playing with but i wanted to kind of throw out here for you for you all because it
[02:57:23]  might give some indicator um here yeah i didn't forget view i just views just not on the same side and this i people probably going to be like offended by this because
[02:57:48]  people are offended by every chart but this is not a philosophy chart like i usually do or values chart this this is this is um this is about an implementation chart um and
[02:58:05]  why i i'm not i'm not convinced that not all frameworks um can not do resumability eventually if you if you follow this the funniest thing is between each generation
[02:58:21]  the the people they they look at the other side to get influence on the solution it's it's i like this is just kind of a something i've been working with here
[02:58:31]  but what's what's common about this side the top side here is that it's like this top down thing and to be fair quick isn't a perfect representation of an
[02:58:44]  extension of solid it's just the best that we we can have but this is like the difference between the fine-grained um and like event based and and the difference
[02:58:55]  between the the like top-down compiler centric approach and the be fair react is not a compiler but you have to understand that um and when we get over here the
[02:59:07]  lines blend enough that i don't know if this is exactly true but when i'm when i'm trying to get at is in angular you had this like digest cycle where like
[02:59:16]  you made everything dirty and you re-rendered essentially it could be backbone you could put whatever react added a v dom that improved on it um and it kind of borrowed from
[02:59:25]  the mvm model from knockout essentially of like components like like the idea of making instance-based stuff where angular had like like like ng scope it didn't account
[02:59:35]  for it view came from the knockout school but it borrowed from angular a lot of the stuff it did for binding or and whatnot right like in terms of like how syntax and
[02:59:46]  how what it represented it um to be fair it added a v dom also from react so like you can see that it's kind of kind of coming from that side svel
[02:59:54] te took that simplicity from view um but kept a component-based system where like essentially components are what we render um like it's not like reactive in like the like the
[03:00:07]  the more common like the like the it's not reactive in the way that like reactive systems are reactive and then solid borrowed from react on top of view side to take the
[03:00:22]  philosophy but what it did when it went from here to here is it actually um uh further granularize the rendering right so like there's this like api cross matching while
[03:00:38]  the technology of like of this is going here and yeah i mean maybe this end part isn't exactly correct because technically marco is more fine-grained than quick but
[03:00:51]  marco is using a compiler to basically run like this part is arguable okay but what i wanted to get at is the way the hoisting like it's actually possible
[03:01:05]  that i actually have these switched it's actually possible that marco belongs here and quick belongs here these are these are uh closer but that's kind of the point we're
[03:01:12]  we're we're hitting a potential convergence point here and what what i'm i'm trying to get at is when i look at svelte's compiler and how it influenced
[03:01:22]  how marco does resumability and i look at how quick serializes reactivity that's similar to solid right it's not quite as fleshed out they still have a
[03:01:30]  vdom you you kind of see that like the the reason i have this line here is react forget basically could make react into svelte right like it's essentially memo
[03:01:43] izing at all the decision points and view vapor could make view into solid right so how far do we have to go to make solid into quick or svelte into marco
[03:01:59]  and i'm gonna argue maybe not that far right i mean there there there there there is a question here and that's that's sort of what i'm looking at here
[03:02:13]  because it's harder to do the whole mile like it's very hard to picture react becoming quick like it's b but it might not be because they can't do that but
[03:02:24]  maybe that you know michiko is very vocal about his generations maybe there's already been a generational architectural middle ground that's already happened that we just didn't acknowledge so to
[03:02:37]  speak and it's because these have to leapfrog too that it's harder to picture you know right so like it like it is like when i look at this when
[03:02:56]  i look at quick and i look at svelte they seem the closest to being able to do uh resumability similar to marco or quick right but when i look
[03:03:06]  at what react and view are doing they're they're looking at how they can become svelte and solid like like and at the point that view becomes solid can it
[03:03:17]  also become quick like yeah i mean the be fair these these two are so experimental that i don't feel like we've seen their final version i i want personally i want to
[03:03:32]  see quick get more fine-grained with this reactivity and i want to see marco marco's solution is actually amazing i just want to see it actually um
[03:03:41]  uh i want to see it actually come out right ha there this is the question you should be asking right because what do these have in common this has been what i've
[03:04:02]  been struggling with since january and this is what i talked about in the future of solid stream is is are we inevitably forced into heavily heavy compilation because that's a place that
[03:04:13]  i don't necessarily want to go but there to be fair the compilation might not be that heavy depending on what the patterns fit because like marco very heavy like svelte
[03:04:22]  level like more than svelte because marco cross file and analyzes everything and knows the whole universe and it's going to be pretty hard for any framework to come
[03:04:32]  even close to it from a performance optimization standpoint it's just it's especially mart 6 it's just it's just so far like down that path it's insane but um the
[03:04:43]  question is how composable can we get this stuff and quick already has with your dollar sign has already suggested that there's a path there but i mean i i think it
[03:04:56]  goes beyond that because you know thinking even further in terms of primitives and and what that and what that means like even with the server function solid start i have this feeling of
[03:05:07]  these kind of pieces i i feel like there might be a place where the compilation can still be reasonable yes yes exactly and that's what i mean by react becoming svelte
[03:05:20]  um right like like you it's in this view of the world they're just further behind on this curve right i don't know if everyone can like go down this path
[03:05:37]  and it makes sense for them but well it's not it's not a matter of i don't think so it's it's resumability is a hydration technique so
[03:05:50]  if partial hydration could be deferred to solid start and like the whole lazy loading bit like solid starter i've had conversations where using solid in quick could maybe be like the holy
[03:06:01]  grail of that thing have solids fine grain with quick's ability to slice some stuff up i think there's still like questions of how big those chunks are i'm not
[03:06:10]  completely sold as i mentioned multiple times on how big those lazy loaded chunks should be right but i think it's you know like i think i think there's still details to work
[03:06:21]  out on on on the quick side on that but generally speaking resumability is just a hydration technique so if we can come up with um a compilation that lets us do better
[03:06:31]  hydration and better ssr i think that's something within our wheelhouse orchestrating it islands what lazy loads all that stuff that that that definitely can be separate but for
[03:06:41]  me resumability and why i'm so focused on it is actually a core concern well astro is like we're just talking about one of the orchestrators like astro
[03:06:57]  is not on this chart because astro doesn't worry about any of this right astro will be like oh you want to do this interactive thing um you can use j
[03:07:08] query or you can use solid like astro doesn't care um like they're working on patterns to improve the orchestration like the routing and the islands and stuff the
[03:07:21]  way i see astro on this picture and why i'm so stoked on people using astro um and and with solid and doing that stuff is like astro makes it really
[03:07:32]  nice to build certain types of sites and content sites and even go beyond that astro can get pretty complicated uh there's an example that i want to probably show on the
[03:07:44]  stream um in a minute but like this is resumability is a core framework concern so if solid becomes resumable then astro with solid becomes resumable do you
[03:07:59]  you you follow me so um this this is this is just where all this thinking goes is because you can have resumable islands like resumability is independent of how
[03:08:11]  you slice up the code um and i don't think that's why i wrote the article i don't think that is understood by most people when they read something because it's
[03:08:20]  of no fault just quick is an amazing solution that takes all the considerations into play and builds the whole thing and i think that's amazing but you know it's funny because
[03:08:31]  i'm not a framework agnostic kind of guy but i am definitely like a lessons learned generalist because i like we i like weaving the threading the needle i like
[03:08:41]  finding the the the path that lets me navigate things in a slightly more optimal way and from that perspective where i'm sitting i'm very curious on what things are rules and which
[03:08:53]  things can be bent so yeah i think i think i think astro um and solid have a long future of being best buds so to speak because as we improve these core
[03:09:08]  mechanisms and astro works on their um you know ability to orchestrate it to make the best possible content sites and those kind of like that area where they they focus on you
[03:09:20] 're going to have the best combination there solid start might be able to do the same stuff as astro but as i said in previous stream like even if we were like
[03:09:28]  technically more performant or whatever it's not going to attract the same kind of thing like we're focusing on a different sort of experience and i think even as things converge the
[03:09:41]  experience is going to be important yay astro yeah a lot a lot of the astro love here so that's that's the thing the the challenge on the that side
[03:09:52]  is that do the lines between the meta framework and the like core framework blur when you real when you have to do anything the thing that quick and marco have in common is
[03:10:07]  they realize they're like crap if we're gonna do this no one else is doing this like astro isn't bundling the way we need the bundle and like if
[03:10:14]  you're gonna do this you end up um putting all the work in to build the whole infrastructure from end to end because it didn't exist for you at the time and depending
[03:10:25]  on your approach you can get a you know you you you can get in there like people asked or i saw a thread where someone was like oh so quick plus astro and
[03:10:36]  kind of but you wouldn't get the best out of like it just doesn't make sense you wouldn't necessarily get the best out of quick like you could do that in
[03:10:43]  a sense and maybe someone will um and in a sense quick's core experience is more say feels more like something like solid start so maybe like astro from a content side would
[03:10:53]  like give that experience thing but like quick has already completely decided that it's going to handle that part of the puzzle and it's still working hard on that side containers micro
[03:11:02]  front ends like they're doing more work there like they're going to just deliver their solution marco is a little bit more interesting because now as other frameworks have abilities to bundle
[03:11:11]  stuff in ways that are marco compatible i could see them more likely to slide into them but again the the thing with marco is like the primary use case or like experience
[03:11:21]  is similar enough to astro that that that's probably why they want to integrate because they're like both like i'm html first you know so yeah there's
[03:11:31]  more uh nuance and complexity when talking about how these different frameworks come in but all the ones that i put on here are your typical client-side single page apps um and i
[03:11:43]  think there i think there's a path forward that's all i'm saying um yes can you please show a real world example for resumability well and this is the
[03:11:55]  thing that i why i suggest like reading the article it's every resumability is good in in theory is good in any case because all it means is we don't hyd
[03:12:08] rate so when the page loads javascript doesn't run and then when you interact with it some stuff runs but it has nothing to do with lazy loading so a real world
[03:12:17]  example for resumability is literally anything that that's the problem it's just like it solves hydration if it successfully does it i think we need to measure and understand the
[03:12:25]  trade-offs and serialization but in theory there is no use case for resumability it's just better period which is a weird statement to say can presumably have slow
[03:12:39]  numbers oh yeah yeah you get what everyone sees is what i was talking about that lazy loading thing i i i've done this like so many times on stream where people are i
[03:12:49]  pull up the quick hacker news example right and i go to look at a story and then um i i go here and then i go oh look slow 3g and then
[03:13:02]  i click the button and then you're like oh there we go but the reality of it is you're going to preload that in the background and resumability has nothing
[03:13:15]  to do with this that's what i was trying to say if you read the article this lazy loading thing is something that quick does and you can always preload but you you
[03:13:22]  could also just have all this javascript to begin with and it worked instantly it's resumability is about not executing code it has nothing to do with loading code
[03:13:31]  i i just i want to make that very clear this is what people associate with resumability this lazy loading this is not resumability i i think this is i i
[03:13:39] 've been trying to shift the message there and i think michiko has been recently as well because of this backlash quick does multiple things that are not resumability yes yes
[03:13:49]  it may never be an awful solution for everything but will be a great place for other servers to converge and some things yeah it's a great platform for experimentation um to try different
[03:14:01]  things and honestly for its baseline case it is just so great that's why you keep on seeing people using astro because they're like they're just like wow i i just
[03:14:10]  i just grabbed a website and i just dumped it in it just worked and i'm i'm happy because for a lot of things that's all you need yeah if you
[03:14:18]  watch the stream we we do support stuff like islands and client site navigation with islands so um it's experimental but yes solstart in theory technically could do the same stuff but i
[03:14:33]  think i i think you're underselling astro if that's the only thing you're looking at yeah yeah it's also a very easy thing to to kind of put
[03:14:45]  out there i i agree completely like people are just kind of looking and be like oh yeah like this is an easy uh point to make but the unfortunate thing and you're going
[03:14:55]  to see this as as benchmarks and stuff um come out um not for astro is really good for its use case so not for that but for the like spell kit is
[03:15:04]  really really quite good um solid start is going to be really really quite good and i hope that people give it a chance um but uh astro is an easier sell but like
[03:15:14]  again that's because of the migration story because maybe you start with your next js app you move to astro and you maybe switch to preact at that time and you're
[03:15:24]  in a pretty good place or maybe you switch to solid um like it's it's a really nice story that just works really well for a lot of things uh the stream
[03:15:34]  yard does this automatically i i need to if i'm not careful i tell it to use my last category and it just keeps on switching it on me well yeah i mean
[03:15:50]  sword uh like this is why i'm saying that resumability getting completed is really where my concern is and the reason i wrote the article because quick is resumable period
[03:16:08]  you can use the optimizers to decide how it bundles so you could just say like load all the javascript up front and it just won't execute it and
[03:16:15]  i think funnily enough for most of the type of sites where people are making like the head-to-head comparison with astro or whatever that's what they should
[03:16:22]  be doing like it really that lazy loading thing is a kind of a cheap parlor trick um i but this is my own personal feeling i think with a really really like
[03:16:33]  expensive complicated app like the thing is quick can scale all the way into spa mode like full spa feeling stuff if you're going to go there yeah you want to be able
[03:16:45]  to slice stuff up like this i think for most people if if they could just be like client load like like the or whatever like the way that they mark the islands that's
[03:16:54]  all they need like that that handles like the 90 case like the astro thing i think that that's but resumability the actual hydration story that's important that makes
[03:17:05]  a difference and i want to that's why i want to like draw or separate those lines yeah right but and once you understand that that's the mechanism you don't it
[03:17:19] 's not about what i just showed everyone um with the whole uh uh like lazy loading thing it's literally just boot up where you left off the funny thing is sometimes with those
[03:17:31]  demos they kind of get a little overstated because like any ssr page if you copy the html boots up like that i mean like because there's there's
[03:17:45]  there's a script tag that starts the process which means if you copy and paste it like it works i i think the challenge with some of these demos is like there's
[03:17:54]  elements of this that will literally happen like it's we need better demos to differentiate the elements of it because you can you can go yeah sure i can copy this html
[03:18:04]  and have it boot up like i i think i i because like the script tags and the javascript are present so i i think i think the difference also is as
[03:18:15]  quick as you don't run the javascript which is what which is what the whole point is and why that resumability is important yeah and that's the thing i
[03:18:24] 'm sorry for anyone who's newer on here i've been writing articles about this for months and doing streams about this stuff for months there's a lot of back context that people
[03:18:35]  have been following along but it was still worth me writing this new article about resumability because of this so um so i i think i think that we need to measure
[03:18:45]  these things and understand the cost right um quick right today like the status of it right now is it is it proves the potential that this architecture works like there's no gaps in
[03:19:00]  the api design or like to cover the base case there's probably more things we want to do with it but it shows like like this is a doable thing but the
[03:19:09]  implementation probably still needs consideration they've been doing a lot of work now they're kind of like on the second phase now where they're like okay we made it all work but
[03:19:16]  our server rendering is bloody slow so they just replaced the dom render with a string render much faster right we saw that in the benchmark um but you know still figuring out edge cases
[03:19:26]  on server rendering client performance these are all areas where they haven't given any consideration to and now they're like okay now that we've shown it's a thing can we
[03:19:36]  make it fast so we're gonna we're gonna see over the next few months if they can make it fast um right there's different types of fast architecturally quick has an
[03:19:45]  advantage over it ever almost everything but in practice we don't know that yet we need to see the cost of serialization like i have to like is it better to have
[03:19:55]  an app that is four kilobytes loaded eagerly with astro or one that's 25 kilobytes with quick but you didn't load it eagerly like there there
[03:20:06]  are devils in the details here and i think that's what we're missing today um anyway so yeah i mean that's where i started this week and this helps you
[03:20:18]  understand why i've been thinking about it but um yeah there there's a there this is a good read if you really want to get into the resumable discussion um and
[03:20:28]  i i i'm i i said for myself um i jumped right right to the 1.5 stream because there really wasn't much else for me but what was happening interestingly
[03:20:43]  is solid's been getting a lot more attention the last few days which i i like i've been seeing these great demos partially probably because of astro we got this like to
[03:20:54] ri app thing um i love nikil's work on solid and 3js but um we're just starting to see this kind of like um like here's here's the the
[03:21:07]  suspense list and the uh 10 stack query example or whatever we're starting to see like how solid can actually integrate into other things real workflows that people are having um yeah here
[03:21:20] 's one migrated zap run to astro build with salt i gotta say i'm really impressed right another asked great astro tweet and why is this not liked okay astros in
[03:21:30]  app mode they actually use client load and it's actually just a solid app on an astro page but because they have that kind of flexibility they could just like wait the
[03:21:41]  whole zap app is astro now well technically it's actually sounds like it's solid but you can kind of see how these two pieces work together really really nicely um for a
[03:21:52]  lot of situations and this is this is what this has been like i i highlighted a few of these but this has been the the whole week um for me really oh side
[03:22:03]  note if you saw this this is pretty cool it's like a little rpg type stuff where you pick your framework and i was absolutely delighted to see solid showed up on the
[03:22:12]  on the list here of 8-bit icons um so yeah really fun um anyway yeah i i this has all been about 1.5 and thinking for the future for me
[03:22:26]  but there's more outside of the spectrum of solid and all the you know great stuff that's been going on with us this week um so we probably should uh should talk about
[03:22:38]  that and a lot a lot of it seems to come down to this framework wars i don't know what else to call it the javascript runtime uh side of things
[03:22:54]  is heating up big time and as i said last stream i was caught a little bit off guard um when people were like oh did you check out the dino announcement and
[03:23:04]  i was like no i haven't checked out the dino announcement and um this week had its own share of controversy before i get into that though i i just want to highlight
[03:23:17]  this because this flew completely on under the radar i didn't retweet it or anything because i i i don't know enough about next but maybe you people in the stream
[03:23:26]  know about next but like let me open this thing because like what is this 54 likes and 31 retweets for this this thing but if i if i understand correctly here net
[03:23:42] lify has created their own next js edge runtime that offers a bunch of features that versell doesn't um especially things that i would consider like pretty standard like being able
[03:23:58]  to like you know modify the html i just don't understand what this is about because admittedly when i picked up for cell with solid start like the day they released
[03:24:10]  edge functions i literally just put solid start on for cell edge streaming and had it working and i was like bam like drop the mic you know kind of thing it was just it
[03:24:18]  was easy it worked great i've been working on the build apis but it sounds like next js actually doesn't actually leverage the edge functions very much at all so um
[03:24:27]  yeah i'm i'm very curious to understand this better because from what i'm reading here this like if if versell next doesn't have this i would be i'd i
[03:24:39] 'd actually be compelled pretty i'm just surprised no one's talking about this maybe there's too much other drama but this this seems like quite capable i it sounds like just
[03:24:52]  from the way it's saying it sounds like a lot of the edge like lower lower features aren't available from inside next and i'm confused by that a little bit so um
[03:25:01]  hopefully someone actually has more clarity there but maybe maybe worth people checking out um this feels very different from what i've seen from netlify and next in the past where
[03:25:15]  you know there's always this thing it's like oh do you support this for cell feature do you have isr do you have this but this is like netlify is
[03:25:22]  like no forget that we're we're actually just going to give you features that in next that for cell doesn't even have um i don't know surprised more people aren't
[03:25:31]  talking about this oh awesome news the solid side is on 1.51 and the docs are ups so there you go everyone so yeah yeah this this is interesting um netl
[03:25:46] ify edge obviously works on dino so i mean there's obviously some benefit from from i mean what's interesting versell's on cloudflare so but from my understanding
[03:25:57]  the way versell uses cloudflare is a little bit indirect so there's still like some like i've actually seen this in slightly in benchmarks that if you go straight to
[03:26:04]  cloudflare it's a little bit more performant i haven't seen the same difference when i've compared dino to the next or netlify edge but i i
[03:26:11]  feel like i'm not qualified enough to make a full statement on that yet i've only played with it cursive cursive was it like a little bit um okay so
[03:26:23]  yeah but this is only like one thing right i i mean uh we we've been we've been seeing like uh where is it yeah i mean how can we not talk
[03:26:37]  about what's been going on with um oven or or bun or whatever um unsurprisingly to most people in my circle um at least the oven has raised seven million um to
[03:26:51]  to basically fuel a company built around bun um so uh this is this is pretty big um jared is going legitimate you know so to speak although to be fair um there
[03:27:08]  is a whole drama around their hiring thing and honestly i'm not going to comment on it because it doesn't have to do with the technology um people can people can kind
[03:27:22]  of feel what's comfortable for them i've i've overworked at startups i don't feel worse off for it but i like it's a choice you have to make
[03:27:31]  you know and um i i wouldn't be surprised if even though this is like a overwhelmingly negative thing for a lot of people like in the sense of like the vast majority of
[03:27:43]  people when they see this ago like i wouldn't surprise this this that posting that he did gets him exactly what he's looking for so so i'm i'm uh i
[03:27:56] 'm i i i think the posting might have been a little bit aggressive you never have the context in twitter to explain what you mean but i yeah i'm this is not my
[03:28:08]  area to comment on i'm more interested on um the evolution of how like the whole bun and dino thing of the coin because if we go on twitter here and we
[03:28:22]  look up dino because i said last week dino was like yeah we're gonna be the fastest right straight up um and they released this 1.25 release but it like
[03:28:38]  you know some people are like well why isn't bun in this benchmark for example and then there's like this there's some shots fired going here um basically yeah correctness
[03:28:47]  is important for davis we're comparing production software not demos right so there at some point i think there's going to be a i think it looks like unfortunately i mean we
[03:28:59] 're going to see a little bit of fighting past like um i i i like when there's a focus on performance always kind of uh concerned when um you know like it
[03:29:17]  goes to a place where like and it's hard not to where like you almost need like a third party to come in and kind of moderate this whole thing like we may
[03:29:33]  or may not have to ship the a new experimental hp server that's faster than all the other general percs web servers period like i i i think once you get into
[03:29:52]  a game where you're kind of like posturing over who's the fastest like i as i said just show me the numbers i'm i'm i'm i'm not i
[03:29:59]  can't comment on any of this until we we see some numbers so yeah i i think i think that this is there's gonna be some i'm hoping there's some
[03:30:14]  good competition here and that drives people to you know make a better platform i am cons i do see a bit of already aggressive jabs kind of going back and forth so let
[03:30:25] 's hope that curbs out um is is all i'm gonna say about this for now um i i it's tricky because you have companies that are funded and and like
[03:30:40]  that are you know mission driven and they're they're trying to like they're like we have to be the best and there's this like kind of tension there right and it
[03:30:54] 's it's it makes me sad sometimes because you know then i i see stuff like this which is again kind of continuation of the love fest from from last week where we
[03:31:04]  had 11d and astro um we got we got quick and astro here i think they're a uh some conference in zurich or something and and both of them have
[03:31:14]  been posting how much fun they had with each other comparing notes talking about the different ways they can improve performance for page loads i i saw nate did a whole thing where
[03:31:24]  he was like resumability blew my mind you know i i just love uh you know seeing this other side of it um which is very far removed from like the yeah it
[03:31:39] 's interesting because both of these companies actually are companies as well so it's not like this is completely removed from the vc side of things it's just it just it
[03:31:48]  has a very different feel than some of the conflicts that we've seen in the past few weeks right i think the thing with on on this side is on the astro and
[03:31:59]  the quick marco side like we're got a point where we're like we're building the benchmarks together because we're carving out new ground and we're showing what the performance
[03:32:07]  can be i don't know if it gets competitive at a certain point but right now we don't even have the way of measuring it so this is all just like we
[03:32:14]  know that we should have an advantage over the incumbents so like we're doing work that that can showcase it and and better understand so we can improve because that's what our
[03:32:25]  goal is i'm hoping that kind of improvement is the goal be that comes out of this whole dino bun thing and it's not just like who can post the fastest
[03:32:33]  numbers this week um yeah i you know what i mean it's just yeah i i uh yeah i i i i'm i'm looking forward to that um i i i did
[03:32:50]  actually pick up this tweet um not to do with javascript but i just something for people to think about because i will have to admit the deletion of tweets
[03:33:02]  on twitter um bugged me a lot um because as someone because you don't have the source of thing to reference from and since i was involved with a scuffle here recently
[03:33:12]  i actually feel like maybe it's worth a comment or two in here um there are a lot of situations where it's good to delete a tweet yeah um it's spreading information
[03:33:21]  due to misunderstanding situation change it's being misinterpreted your position changed it's causing harm you think better of it you want to honestly it's causing harm is the only
[03:33:32]  thing on this list that i think is probably a legitimate thing if your position changed i guess i i wonder if it's a bit a different problem when you're like a different
[03:33:41]  scale like if you have someone with a hundred thousand followers you never get to correct what you've said on the internet someone will quote you on something that you don't even believe
[03:33:49]  in anymore um like something that you like literally could have changed your mind on it the same that same day you posted it um and it's there forever so i i i
[03:34:03]  do wonder if it's easy for some someone you know who doesn't have that same kind of following just go like oh i stand by what what i say um so yeah
[03:34:15]  i i think i think it's i think it's interesting to say at least um i do like that kent is addressing it though because this did get a lot of fl
[03:34:24] ack from people um and understandably so um yeah i don't know i i think i think this is an interesting thought experiment i think understanding the scope of your influence and
[03:34:35]  being conscious of it is part of this in a sense kent would know better than me or anyone because he he he he has that kind of pusher thing yeah almost 200
[03:34:45]  000 followers um right like and some of these lines are pretty arbitrary like it's causing harm could mean could be in lots of ways you know um so yeah i i i
[03:35:02]  think i think it's interesting and then there's a question is if there should be a memorandum on deletion like or like if if even if you would delete
[03:35:13]  should you leave it around for a week or something like if i don't know i i think i think this is a interesting question the best we can do is hope to
[03:35:23]  post something that we would never delete um that's worked for me so far but um i don't know if maybe maybe there's a feature where that isn't the case so
[03:35:36]  anyways it's just uh it's interesting something to reflect on i'm glad that they addressed it head on at least because this was kind of a criticism um oh i didn't
[03:35:47]  talk i got off bun without talking about the last thing that i thought was really cool about bun we'll sneak it in here um while standard web apis are great for
[03:35:55]  compact react is designed to be compiled for multiple host environments we don't mind maintaining special builds for specific host environments to maximize performance i thought this was really cool because jared has
[03:36:06]  come up with a way to make reacts uh stream rendering faster on bun and he said it would work for solid which i'm pretty stoked about and seb is like yeah you know
[03:36:15]  what you come up with something for your platform like we'll build towards that and i think i think it makes sense from like we see this in meta frameworks with like the
[03:36:26]  adapters but it's interesting about this kind of thinking in core and i'm glad that this is the thinking so yeah um all right yeah uh let's see where was
[03:36:48]  i i guess is there only one other big topic for this week in javascript um i want to talk about routing because i love routing and it came up again so
[03:37:05]  thanks to you for this this one um svelte's been proposing um a new a new router um and it's been kind of controversial and yeah i i don't even
[03:37:18]  think i have it up anymore let's let me see if i can grab the discussion like just new hot off the press this week um making huge strides here um in terms
[03:37:31]  of what what what the ideal way um the structure stuff is and a lot of people when they see this they're just like what is going on but i i think this
[03:37:42]  is worth review by pretty much everyone who's kind of in this space because i i think that on the routing side there's actually um a few considerations in terms of these
[03:37:59]  file system routing solutions i mean the first consideration is whether you should be file system you should be file system routing at all um and to be fair um the the the there
[03:38:17] 's obviously that like first level um where people are like well um how should i put this they're like see a little bigger um where you're like yeah i just don
[03:38:36] 't like file system routing but i mean actually at a more granular level as well like should apis be file system routing versus pages should actions be file system routing alongside with rotor
[03:38:48]  routers like there's a whole question of what the split is and you know even like depending on the frameworks that there's single file components where the different pieces of the
[03:39:00]  routing story get situated because you immediately have this question of like i guess the second question which is how should you split the files right like should it all go in one file
[03:39:14]  should it go in in uh multiple files and once you start kind of like going through the degrees of this decision matrix here i think you start realizing what rich says has um um
[03:39:26]  has maybe some more legs to it than you might have thought right um because this makes a huge difference if your routing setup pushes you to have lots of files then it can
[03:39:40]  look really nasty like i think i think where is it here uh no it's not it's not a reply to this one i thought i thought that i saw an example where
[03:39:54]  it's like the the old version of svelte routing versus the new version is like the the new version is like a thousand times better they've gone to a really nasty
[03:40:03]  place and this is actually way better but you look at these pluses and you're like why are there pluses well it's because he wants to indicate when you have
[03:40:11]  multiple files that these are pages or things that need to be added as routes versus not like because once you go multi-file putting things as not like you hit an inf
[03:40:23] lection point between like what what what is part of the route versus what is like not part of the route right like uh like like should be bundled in and this plus
[03:40:38]  says like it's opt-in instead of the the usual opt-out so i think this is actually really interesting i like these uses of shadow routes like this remix and solid
[03:40:48]  start have this but they use underscores but i i don't know i like the aesthetic of it so it's kind of interesting i think the i think the page
[03:40:55]  versus layout thing though almost prices you more into the plus thing because suddenly you now have more files right off the bat so the i think that the the first the the next question
[03:41:08]  here is should your nested routing be explicit like that you know pages layouts or should it be um shadowed and by that um it's the thing that nux does
[03:41:25]  and remix and this all start to do whereas if you have a file the same name as the folder then the folder is the children right and um yeah i i you can start
[03:41:37]  seeing how these decisions start chaining into each other right so like it's funny i took i took the really crazy svelte version that this guy posted i don't
[03:41:51]  have an example of sorry i don't have it at the moment i'm not gonna dig it out and then i i can and he had converted it to the new svel
[03:41:57] te router which was like half the size and then i converted it to solid and it was even smaller and the remix style but the thing is after i showed it to some people
[03:42:06]  they looked at it and and and they're like wait but i don't know what this does like i forget what the rules are foreshadowing so like it's
[03:42:14]  not as simple as just making it shorter and making it more compact but there's a question of like explicitness right but there's trade-offs if you have a billion plus
[03:42:24]  pages and plus layouts then like good luck finding the like which version the files or whatever you're using but yeah i i think i think this is is um at minimum this
[03:42:39]  is this is kind of an interesting topic to go through the decision points on um because it might start yeah i'm missing the the last point right what was the last one
[03:42:54]  after we after we do shadowed it's opt opt in versus opt out you kind of have to run through the whole tree and think about how the scales and i'm and
[03:43:07]  i wouldn't be surprised because next js already decided to go explicit with a new routing instead of shadowed i would not be surprised if they come to a lot of the
[03:43:20]  same decisions that svelte kit does because like just simple consistency things right because if you don't put the plus also then like um like it helps indicate what what the
[03:43:35]  page is right like or the layout is like what if you had a route called layout right i mean there's complexity here but like this this this is a the i don't
[03:43:52]  i think this is getting bad beats and i think that when we look into this further in the future people are going to be kind of surprised that maybe we didn't do things
[03:44:01]  this way before i'm not convinced completely but i want to reevaluate everything along those decision points but i'm not done talking about routing because um the uh there is
[03:44:14]  this really cool demo again astro in the where it's essentially doing these new page transition apis the interesting thing for me is page transition apis don't support mpas
[03:44:29]  yet so they're definitely hacking something to make this look the way it does um but i'm still pretty stoked on the the prospect here um because i think that this is
[03:44:42]  kind of illustrating what mpas could look like in the future um without single page apps so this might be a world where for you know another place where like maybe you don
[03:44:53] 't need a single page right you know we saw a week or so back a flamethrower from uh fire ship talking about doing some client side kind of turbo like
[03:45:05]  routing in our solid start stream showed how to do nested server a client like server rendered client routing um hybrid kind of like turbo links but fine i like but like nested
[03:45:16]  i i think we're going to see a lot of cool experimentation here and um i i think examples like this are showing the way i think the transition uh the shared element
[03:45:24]  transition api is probably going to be a big part of this right um i talked previously about the generations of frameworks being defined by the routing solution and in a sense like
[03:45:34]  we wouldn't have isomorphic uh apps today if we didn't have um the history api and push state because you wouldn't be able to refresh on a page you
[03:45:47]  know and have the slash url because navigating to it would have caused the page to reload like to have client side handle the url bar gave us um gave us this
[03:45:57]  ability to have isomorphic frameworks and that's something the browser gave us i feel like shared element transition api is probably a big part of what enables the next generation of
[03:46:07]  routing which means it enables the next generation of frameworks yeah but do you know what my understanding is that the single page app mode was behind a flag that mpa hadn't
[03:46:23]  even happened actually no maybe maybe he explains how he does it on the stream um uh because that my that was my understanding at least since the api doesn't support mpas
[03:46:41]  at the moment i need to intercept the route change with navigation to add event lists or navigate to handle the dom updates okay so yeah uh yeah yeah it might be interesting to
[03:47:01]  see how that looks on a slow connection one thing that i will point out though is if you presumably you're going to have to fetch for data on a slow connection anyway
[03:47:14]  so i wonder how different this would look like from like say uh concurrent suspense type uh situation where you basically hold the current page and then swoop into the next page as it
[03:47:29]  finishes i i it would be it would be interesting to see to be fair to date um ht like client side html swaps have been felt slower than client
[03:47:40]  render so i i don't know i i think i think that you're right it's worth checking out um but yeah this is this is this is this is interesting stuff regardless
[03:47:50]  um and i just kind of wanted to talk about that um and kind of showcase it the last thing i want to talk about routing was going back to this question where we
[03:48:01] 're like should we file system route and probably the biggest reason not to is the type script side of it um and i know people have been looking into it um tanner has
[03:48:10]  made it made it very clear that he's very interested in react location having full zod type scriptability on the query parameters like on every piece of it and file system routing um
[03:48:21]  makes that uh challenging to to say the least i'm sorry just gonna um and i think there are actually only limited options that you can do there um i i i would
[03:48:40]  love to see a way that we can get yeah it's a hard balance because the file system routing is becoming more and more prevalent and important as we continue to add like
[03:48:56]  loaders and actions and more pieces that need to kind of integrate into the routing story wiring it up is honestly a lot um and it's it's just but on the
[03:49:15]  other hand there is this desire for the for the for this type script of the ability and i as as i as i had mentioned like there are other solutions that people are looking
[03:49:28]  at someone has this uh like code generator again i don't know if this is my favorite approach but it parses all your remix loaders and actions and automatically documents all typ
[03:49:37] ings per each route right that's that's interesting i think there's solutions i'm hoping with compilers um to actually get us there because while i'm not going
[03:49:48]  to push anyone to file system routing and i'm not saying file system writing is the best it has that low effort launch point that is essential i think for you know the h
[03:50:02] tml first content build side like i think if frameworks that are more like javascripty did javascript routes no one would make as big of a of a
[03:50:11]  deal out of it but it does it kind of takes away a little bit from that like oh i just have some html file feels for stuff that feels more static and
[03:50:20]  i don't think i don't like that we have to choose right and as usual if if if typescript makes me have to choose like i'm going to i'm
[03:50:32]  going to brute force them side because like like that's that's that's what it comes down to um right this is it's it's the same kind of question of like
[03:50:41]  should uh should typescript dictate your apis or should typescript work for you anyway um all right anyway um i think that's that's mostly it um as i as
[03:51:12]  i said this week in javascript um was maybe i kind of wish there was more releases but i i you know and more new things to talk about um the stuff
[03:51:25]  like the netlify stuff and the dino stuff like the announcements were made but i i haven't seen as much chatter but um i'm still stoked to see all the
[03:51:34]  new astro projects coming to fruition this week seeing awesome demos like this um so hopefully we can keep things positive into the next week and uh and have another good week in
[03:51:48]  javascript so until next time all right how how how how's everyone doing uh it is hot where i am um it is definitely hot yeah no we've been we
[03:52:19] 've been going now for almost four hours so um i i i think i think we we've pretty much covered it right um talked about solid 1.5 talked about this
[03:52:39]  week in javascript and some of the stuff that's been going on i don't think there's any sneaky benchmarks or uh hidden dino announcements that i missed this time
[03:52:50]  but what do i know um and it seems like the the stream's kind of chilled down so i don't know if there's nothing else i think we call it r
[03:52:59] yan any thoughts on solid start timing to do a beta release i mean i've been i've been working on 1.5 because those features are key i am now literally working
[03:53:10]  on the last two features that i care about on solid start um which is uh we're doing a little more work on the action api it's good but i feel
[03:53:24]  like we can do better it's just clunkiness that's inherent to using forms everywhere and i i want to smooth that out a bit i mean it's it's not
[03:53:34]  it is the trade-off and it has other places where it alleviates things but i i i i feel like there's still room i want to review the routing i
[03:53:43]  think rich harris stuff was important but yeah this is all kind of implementation stuff and then yeah i mean it's just switch to docs and see if if we can get the
[03:53:53]  release out um we'll have hopefully a more stable usable version even before the docs come out and that's what i'm focusing on the next few days um so i i
[03:54:05]  think that um i think i i i i'm i'm i'm hoping that we can get the beta release out in the uh towards the end of september um maybe maybe
[03:54:21]  when i come back from finland i'll be speaking at react finland um uh september 15th um so got a lot of work ahead though like when i did
[03:54:32]  we're gonna have to find the right level of balance it took me six weeks to do the solid docs originally and i feel like we've raised the bar every time that people
[03:54:42]  will expect more out of their docs and that's probably what's gonna push things back but again this is just a beta release so as long as we have some stuff you
[03:54:52]  know and make that clear i think it's okay that the docs remain a bit of a work in progress but we need to cover the the key parts um so that's that
[03:55:00] 's what i'm looking at next solid start is now that 1.5 is out solid start becomes more uh of the focus again we got the pieces we need to to get
[03:55:10]  beta out the door so that's that's what you have to look forward to in terms of the stream um i'm hoping dylan piercy from marco um will
[03:55:21]  join me if not next week uh possibly the week after to talk about what it takes to make a language like a typescript language server if someone asked earlier like what what if
[03:55:34]  we could just you know use solid and build something like svelte on top of it i'm like yeah i mean people have done that but if you actually want to get
[03:55:43]  the full benefit there you have to do work and dylan's done this for marco and marco 6 coming out and um i think it'd be great to talk
[03:55:50]  to him to understand what it takes to really make your own language um in a javascript framework so yeah i think i think that's that's what we have to look
[03:56:02]  forward to um as i said some great talks coming up i'm really stoked for finland i'm stoked for beat conf um uh so many conferences coming up jamstack
[03:56:14]  comp um javascript days with jet brains like i i could go on i there's like something every week js js conf poland i think i'm i'll see how
[03:56:25]  that goes so yeah there's just a lot of really great things coming up so um uh front-end masters actually uh the plan is to do front-end masters um
[03:56:36]  first week in november so um yeah a lot of really good content coming uh some more beginner focused content hopefully um today's stream was all about all the advanced stuff but um
[03:56:48]  you know this is all part of the pieces that go into building um uh performant powerful ui framework all right well a lot of you stayed all the way to the
[03:57:01]  end today so that's that's awesome um so um yeah let me see here if anyone else is streaming on on twitch although i'm i'm not really good at this i
[03:57:11]  don't follow anyone or anything so unless it's like someone i know it's probably unlikely that i yeah no i'm i'm not a big twitch person so i think
[03:57:23]  we're just going to wrap up tonight uh this afternoon depending where you are um thanks for joining me and uh see you all next week