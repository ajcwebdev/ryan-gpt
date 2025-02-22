---
showLink: "https://www.youtube.com/watch?v=qyQNFstxlzY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring the App Directory in Next 13"
description: ""
publishDate: "2022-12-10"
coverImage: "https://i.ytimg.com/vi/qyQNFstxlzY/maxresdefault.jpg"
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

[00:00:00]  Hello everyone welcome to my stream today um just a second my audio sounds weird to me check no all right just making sure I wasn't actually okay how are you all doing we
[00:00:16] 're gonna get started up here in a minute this stream we're gonna look at Next.js and I have to admit if you any of you saw my previous stream on Next
[00:00:28] .js um I'm not terribly familiar with it I cannot do this a little bit blind so you know bear with me a bit because you know I'm hoping this time
[00:00:41]  will at least go better than last time if you remember last time I had a stream on Next we we're sitting there building a hacker news demo and had everyone on chat like
[00:00:50]  give me hints on like you know how to get started and all these things and we actually were able to port all the remix stuff really really quickly like loader to get
[00:00:59]  server-side props was like straight up swap but like um what was kind of funny was I spent like most of the stream converting link tags to put the anchors on the
[00:01:11]  inside like that was like the whole stream we're just like sitting there like going okay let's let's find another link tag let's put the anchor in move all the
[00:01:20]  properties down and whatnot and we basically we were just chatting for like half an hour while uh while I was swapping anchors and link tags that was my next dream but I
[00:01:30]  mean people seem to like the stream it got pretty good amount of eyeballs especially for its time so you know I think that's what happens when you put next in the title
[00:01:41]  um people are legitimately interested in that it's a lot like you just kind of like jump over the the small hurdles um but yeah I mean it wasn't my it wasn't
[00:01:53]  my best stream uh I hope I do a little bit better with next this time um but yeah I'm very interested I'm gonna have to like reference the docs like a
[00:02:02]  whole ton you know most people when they do streams actually prepare for this um but you're you're you're gonna have to like uh you know bear with me as I actually
[00:02:11]  learn on the fly yeah they they did fix this in next 13 to be clear they actually fixed it the week after my stream they announced it I I I it was probably in
[00:02:21]  no way related but it was really funny because I've like everyone watched my stream and like how painful that was and then like the next Friday there or the next Thursday they're
[00:02:29]  like yeah we you no longer have to do the anchor tag thing like oh okay you know um hey it is what it is but yeah I'm just killing some time let
[00:02:40] 's let's actually post that I'm live on uh on on on the on the socials right now um and actually make sure my screen share still actually works yeah sometimes it
[00:02:51]  just like stops working just for no reason um yeah where are we share screen this one all right but yeah I mean for me actually my my real interest here is server components
[00:03:05]  um mostly that um I've been looking at them for quite some time now I've looked I've looked at different versions I've looked at the original server component demo we did
[00:03:23]  that on stream I looked at hydrogen which I quite liked um so I've been really looking forward to seeing the next js version uh of it um I wanted to like jump
[00:03:33]  on it like immediately when it was released even um but there was a few bugs I'm hoping like a month or so later we're kind of past that stage and we can
[00:03:41]  get a good representation of what's what's going on um uh what else yeah actually I'm gonna pop this in discord too um but yeah I mean that that was that
[00:03:53]  was that was the that's the main thing here I have to say my server component streams are have notoriously bad viewership like like absurdly bad like we could literally be
[00:04:04]  talking about some framework that no one's ever heard of and it gets better views um than uh my server component streams like I don't know if it's the algorithm where
[00:04:14]  people really have no interest in server components but like like it just it's it's disproportional I just haven't been able to figure it out every time I do
[00:04:23]  a stream I was like react server components I'm like yeah this is really cool stuff it's like no one wants to watch it um um and yeah I I can understand
[00:04:35]  that like not everyone sold on the vision of server components um but it it it's an interesting it's an interesting paradigm and it's something that I've explored with solid as
[00:04:47]  well I have to admit when I first saw them I had like two reactions right um but just sorry as you guys all know I this is what I do at the beginning
[00:04:57]  of stream to kill some time um I actually want to jump into discord for two seconds and actually post post in there in case you know anybody actually wants to come in um
[00:05:10]  live talking what are we doing here uh next server components twitch tv slash ryan solid all right yeah I it's it's it's one of those things where like I
[00:05:38]  think people have a couple different views of the world and maybe that's where we should start um our conversation here about the topic of server components in in general um right I
[00:05:53] 'm sold on the solid yeah no that's gonna be a lot of fun and we'll talk about that a bit later as well um yeah I mean for for I find when
[00:06:12]  my stream is actually the opposite if I talk about react people are really stoked my react streams tend to do really really well um as long as I don't talk about server components
[00:06:20]  it's it's it's actually really just weird um um but okay I I think I think I think I think the challenge with the server component thing is we thinking of
[00:06:37]  how to frame this is we've been we've been on this path for a while you know and am I supposed to escaladraw just so that we have pictures while while
[00:06:45]  we do it you know is this just the state of the world these days I don't I don't even think this needs an escaladraw um I just like I
[00:06:55]  I could just keep up the MPA I could just keep actually know what the one that I did from like the the previous stream I can just like recycle indefinitely right like
[00:07:05]  this is just the perfect escaladraw we just we just do this one over and over again um but what I was getting at is even though there's like a clear
[00:07:15]  use case scenario for the longest time there was this narrative where the world is going from left to right right on this on this graph that like essentially you know ignore the top line
[00:07:30]  here I talk about like you know we can hide that or something uh I can't move that toolbar can I yeah it doesn't matter but my whole point is like the
[00:07:41]  the thinking here is that like technology was started in like these static sites into MPAs into single page apps and ultimately everything eventually because of the higher demands of inter activity is
[00:07:53]  going to end up over here everything needs to be a mobile app everything needs to be figma or whatever like that that has been the mentality that's been guiding uh the
[00:08:03]  progress of web dev uh almost for a decade um like we just need like the demands and the technology and like what we want to get out of our sites it's just inn
[00:08:13] ately heading that direction and i think that undersold the potential different sorts of use cases that uh that like people would look at and jason miller um holotypes
[00:08:34]  wrote an article um a couple a few years ago and essentially yeah february 15 2019 he was like he was just like look not every site or application has the same kind
[00:08:48]  of experience so like he was like he he just started like categorizing some of these like social networking social media storefronts content and the thing was as he went through
[00:09:00]  the different types of use cases and he talked about ideal implementations constraint assessment like this is a good matrix to kind of get started in kind of categorizing what you're trying
[00:09:10]  to do because he he like there is a shift that kind of inevitably came here and mostly from people who were keyed into performance people like jason miller um where
[00:09:23]  like you realize that like not only is the full application thing overkill for short session quick view stuff it actually unless you can completely smooth out the experience in a way that we
[00:09:39]  don't have today it's actually detrimental to those experiences it actually makes it worse not everything should be a single page app it was actually kind of funny because i you know
[00:09:50]  thought works they actually had to make a a note you know like on hold that concept that everything should be a single page app like it was enough of a topic that they had
[00:10:00]  to actually add it into as an entry into their like matrix and i think that's kind of like interesting because like that this was the vision that we that we've been
[00:10:13]  sold for quite some time for like a decade now and i i you know i like to kind of see this sort of shift happening because like let's think about this for for
[00:10:27]  a minute if if that isn't true like that kind of changes everything right like suddenly like it makes things a lot open we're talking about ranges of of uh solutions not
[00:10:44]  just like everything has to be directed in a certain direction and what he actually mentioned in here is like yeah there's a lot of stuff here there's single page apps so when
[00:10:53]  he started getting into like okay those are games but when he started to do some stuff like uh content websites he's like you know server rendered with turbo links or you know
[00:11:02]  mpa like he he started talking about multi-page apps and i mean this probably led to his follow-up article about the island's architecture um which now has become kind
[00:11:16]  of uh uh uh how should i put it it's become kind of a staple um article for people in terms of understanding uh the kind of techniques that large e-commerce
[00:11:28]  sites or like certain types of sites like uh things like etsy ebay most notably um have been using for years and years to get good performance even though they're using kind
[00:11:38]  of modern javascript right and like this is a real thing it's been going on for years and years honestly like i think uh ebay's been using internally since
[00:11:48]  2013 this kind of uh technology and for that reason when i first saw server components i was kind of like split i was like at first i thought it was like this api
[00:12:00]  thing i'm like okay so this is like a new way to take the single page app further you know so it's just like some proprietary api but then it took me
[00:12:13]  a while i even wrote an article where i actually have to admit i didn't quite understand the whole implication it took me about a year later when we reviewed it on stream right
[00:12:22]  before that to actually realize like i reread the rfc looked closer at it and i realized that server components were basically the island's architecture like it was the same rules
[00:12:34]  the same the same considerations and that the react team you know a couple years ago had realized that to scale they made the decision and what i mean by made the decision is
[00:12:49]  that they're admitting that a single page app like going all the way to the end of the spectrum is not for everything and that conclusion is huge and it's and
[00:13:14]  i have to make i i really need to emphasize this point because almost everyone that i've seen explore this range get over here and then try and go back and figure out
[00:13:27]  how they can cover a wider range you have to imagine this started becoming relevant for react because now they are in a situation where more and more people are using it and they're
[00:13:39]  like yeah we just converted our whole e-commerce store over to react why does it suck like you know like it was fine for react for meta or facebook's use cases
[00:13:49]  you know and they start they optimized for what they needed i i guarantee what the way they use reactive meta is not the way you use react they they they needed to do some
[00:13:59]  perf stuff that's like on a different level than the way you're wiring it up at home but like suddenly use react for everything becomes a thing and they're like how
[00:14:09]  do we solve this and that's the mental break that needs to happen that's where the switch happens is is the way that that i'm talking about what are we trying to
[00:14:23]  understand i'm talking about um islands and server components yeah i think everyone thought react give you more and more for free and it didn't pan out no no and it's
[00:14:36]  single page architecture in general is is the problem and i think that when you put it in that light it's really interesting because a lot of people out there still believe that
[00:14:58]  we that we're heading like we we're inevitably heading there the complexity of javascript apps needs interactively demands will require us to get all the way over here it's
[00:15:10]  just inevitable what can be javascript will be javascript that that's essentially the modem here like what can make it to the server it's not even what can
[00:15:19]  be javascript it's like what can make it to the sorry to the client will make it to the client right so eventually the whole app has to make it to
[00:15:26]  the client and that's not what react server components are react server components are also not live view for people who you know we're like we've been doing this in the back
[00:15:41]  end and for you know years and years and years also not the same thing yeah like it is a it is it is a hybrid approach not to say you can't do
[00:15:56]  a hybrid approach with live view as well i just i just want to highlight that um this is is not necessarily a stateful back end what we're talking about is the ability
[00:16:11]  to seamlessly take a multi-page app experience and keep the advantages of a single page app that's what we're talking about they made the switch that i'm talking about
[00:16:24]  is you can't come at this from a single page app and try and optimize it to get to server components that's that was the thing we tried for so many years to
[00:16:31]  come up with ways to optimize the single page app experience but the problem is like there's the the core assumption of single page apps makes that untenable like the only solution out
[00:16:44]  there that i can think of that actually solves this from a single page app is the future perspective is quick right and i think this is part of why um quick has been
[00:16:58]  attractive to people recently when they finally click on it because it's like they start going well yeah if if i can break up my javascript in such a way that
[00:17:07]  i can seamlessly transform from like the good page loads of an mpa to a single page app um then i've got it i can just incrementally load the javascript
[00:17:19]  and then get more javascript and then eventually we get there and if i this is kind of one of the interesting things about the the positioning of of quick and everything
[00:17:29]  else and where they sit on the graph is because in a sense their technology um is ideal for that perspective of heading towards the app side of things performance wise i i talked in
[00:17:46]  a previous stream that's that's actually ironically the place where solid kills it so like there's like a bit of a conflict between like having the fastest app-like experiences
[00:17:58]  and having the fastest load time but let's assume that's that's resolvable but if you think about it they've changed the rules so that you know it's actually ten
[00:18:12] able to actually scale up on on javascript but react came to a different conclusion and it's not just react literally everyone else and that concludes and that's why server
[00:18:29]  components are more like multi-page apps than they are like single page apps the conclusion was that if we know we have a server server and we can leverage that server we
[00:18:47]  never need to send a lot of that javascript yes things can still scale up large it's possible it's definitely it happens but if you take this kind of mpa
[00:19:03]  first optimized approach 80 percent of the wins are free more or less and when you look at that last 20 percent you know we can figure out what to do with that later
[00:19:20]  that that's that's where the convergence is so like in a sense this is this there is a fork happening right now in terms of mentality and this is why server components are
[00:19:30]  relevant people talk to me about innovation and what i follow i think i saw some thread and people are talking about you know svelte solid and quicker what i'm looking
[00:19:38]  at uh for innovation and for me um there's different every framework is innovating every framework is kind of looking in their zone of what they care about in terms of um optimizing
[00:19:51]  or innovating on and i think that like you can't make that list without react is my perspective it's your favorite chart yeah yeah it's fred's chart basically
[00:20:10]  well i mean it's an interesting question right it's not the the drawback backs are there's always a trade-off for something like this and the and this is
[00:20:26]  why it's interesting when you look at in terms of chart like this because it's kind of like yeah even javascript scaling adds complexity adds trades offs on uh depending how
[00:20:37]  fine-grained you break it up on serialization right so in a sense maybe that's workable but you've definitely made a trade-off for that and the argument
[00:20:49]  with server components and a lot of these other architectures is like yagni like you ain't going to need it and like essentially until you get over to figma
[00:20:59]  maybe or you know like further on that side you're going to get you're easily going to be able to get hundreds on lighthouse scores like that's not a hard challenge as
[00:21:10]  long as you not it's a hard challenge for a single page app but it won't it's not a hard challenge for um the island type architectures and partial hydration
[00:21:21]  architectures of the future that's the argument like sure you could infinitely scale javascript but who cares if you're not actually if the goal isn't to actually infinitely scale
[00:21:32]  javascript like if the goal is not to send javascript that that's where the thing is like it maybe that like we're like a generation too soon on
[00:21:41]  the thinking and we'll all come around to like that hybrid at some point but like that's that's where the conversation is right now because it's like we're in a
[00:21:49]  kind of a retro back at lash i mean astro in my opinion is kind of is kind of a thing like that astro is showing how far we can do with m
[00:21:56] pas i mean it's kind of what marcos wanted to do this whole time too it's kind of showcase off what you can do with that it's it's very compelling
[00:22:03]  because you don't have any of those complexities or trade-offs and you basically nail it too i mean maybe not if you load a whole react app on your astro
[00:22:12]  page but i think people underestimate islands a lot of times that they oversimplify um the server component interaction they they oversimplify like how little javascript you
[00:22:22]  can send with the right patterns of course those are manual patterns so like why don't you automate it well automation isn't a magic bullet either because it's so sometimes things
[00:22:33]  become very easy to de-optimize without realizing it um sometimes a little friction is good okay right but i i think it's interesting right because there's a trade-off
[00:22:48]  there too because it makes it it puts overhead on the actual performance of like after the load so like but i think it could i think that's the coolest thing about quick is
[00:22:58]  like you could literally load figma or something in piecewise i don't know if it makes sense to but like you could like i the the approach is sound like it
[00:23:08]  is it is right and this is where like the the question is like how much does it matter it's not figma it's it's the most complex this this is
[00:23:27]  this is this is this is this is the next generation of whiz or whatever i uh there's a great talk i saw by multi you know uh for sales uh c
[00:23:35] to guy who created whiz at uh google uh which powers google photos google search like these are complicated javascript apps built on like an mpa surface and the reason i
[00:23:50]  was getting into quick and all this because i actually wanted to talk about this is even though quick can do that get to the figma zone i actually saw that we saw
[00:24:00]  that when i first released my islands architecture uh article like for the client side routing which one was it it was uh sorry just give me a second uh dashboard the uh client routing
[00:24:13]  of the javascript article um i had a nice little table down here where i showed like how big each frameworks was i actually had quick in here originally because it wasn't
[00:24:21]  an mpa it was a client-side routed app it was like what i explained earlier where you start with a little bit javascript and then ended up with like
[00:24:19]  all the javascript and the experience actually wasn't as good like the thing the quick developers realized is even though they could scale up like that it's not even the
[00:24:38]  experience you necessarily want they actually went back to doing um mpa style for their demo and they released another article where it shows quick you know blowing all the lighthouse scores out you
[00:24:50]  know i won't say it on the water because almost every like most of the sites got like 100 or 99 or 97 but they had the highest score obviously um i mean this
[00:24:58]  is a really simple app but the the the the point was more that um like even with this power we're not sure we want to use it and this is why there's
[00:25:13]  an interesting uh kind of sides and question here because and the reason i'm focusing on this point right now so hard is because i a whole bunch of people aren't sold on
[00:25:28]  server components and like this mentality but like no one is actually championing on the framework side that people actually building the tools almost no one is actually champ championing oh yeah sp
[00:25:43] as will solve everything like like like that's the future that that narrative that was so strong up until uh i want to say like 2020 ish like a couple years ago
[00:25:55]  like maybe it's fashion maybe it's trend everybody has moved off that narrative right even the ones able to pull it off potentially so that's profound and powerful to me yeah
[00:26:14]  and the funny thing is i don't even call though like i don't call svelte kit a hybrid like the the traditional like next 12 svelte kit non
[00:26:30] -server component stuff i call it single page app in my opinion is this green bar still uh remix all that stuff is in this green bar like it is not maybe they
[00:26:41]  focus on certain areas of it more than others and if from this screen i was actually saying even if this green bar exists this green bar kind of wants to actually stop at
[00:26:51]  this line you don't even really want it to come over here like this is not a happy place for the green bar this is like where we start getting into and people are
[00:26:58]  like yeah yeah yeah let's turn back um so like like it's i know this is the problem with terminology people call this stuff hybrid and i'm like for my purposes everything
[00:27:12]  pretty much up to server components is not hybrid it's just single page app like it's single page app with server-side rendering or whatever but it is just single page
[00:27:22]  app um yeah i mean there's always going to be places for for single page apps i like or for the technology to do that stuff but the question that there's plenty of
[00:27:37]  like what's another example even like mobile apps although they are looking at certain components of mobile apps which is interesting to me if that model makes sense um but like there are
[00:27:48]  like like tori desktop apps there are all those actually run like client apps more than server apps um so there are definitely places this is why i didn't have it like go
[00:28:00]  all the way across like where i stopped the bar um right i mean this is this is kind of like what richard would call the transitional app right mpa astro
[00:28:20]  plus single page app right um yeah sorry just occurred to me i haven't looked at twitch recently see what's going on yeah nothing new on twitch glad to have you guys all
[00:28:32]  in here though all right so what i was going to say is this is like the transitional app story which isn't bad what you do for those who don't understand what
[00:28:42]  you do is you the thing is every web page has a potential being a single page app so you can take something like a multi-page app like you built an astro
[00:28:49]  and then just go okay this page it's the single page app and build a whole single page app under it astro might not like particularly help you in that way the way
[00:28:57]  like next would or svelte kit or remix which are like tailored for that single page app use case but like you can pull it off and you can kind of like have
[00:29:05]  a whole app that just transcends that story this is like different than having like some pages that statically render in in svelte kit or next or whatever because the
[00:29:13]  the mpa pages are actually optimized unlike what you get from svelte kit remix or whatever but as i mentioned the spa experience takes more custom work on your side second
[00:29:25]  piece of this is it's like it's like a one or for the other the thing is the hybrid the actual hybrid server components thing is actually way more ambitious than that if
[00:29:35]  if it's like it wants to handle both of those cases seamlessly under the same architecture right so like um that that that i i'm hoping even though i haven't like
[00:29:57]  explained how they work or like what they are exactly i'm hoping you're kind of like at least getting in the context of why we're even having this conversation today like
[00:30:05]  um yeah yeah sure figma is extreme but i didn't even get all the way over to figma like i dropped the line here there's there's twitch or something like
[00:30:12]  around here and that like there's places where this thing but the funny thing is i think a fully fledged hybrid server component model is right on the edge where even it can
[00:30:23]  handle that scenario if designed properly with the correct optimizations i've been thinking about this a lot recently and maybe if i get a chance maybe later i'll like draw it
[00:30:32]  for you but i think that a server component architecture could not only do the server rendering you want but it can also if you have really heavy javascript areas can also basically
[00:30:41]  spoof a json api like it basically with no downside so it actually can act as both and because the long persistence of sessions um and you're not like reloading
[00:30:51]  the pages like an mpa you can you can set up your web sockets and and your you know chats and all that stuff and have those sections and all that so
[00:30:59]  like i actually think the hybrid server component model can cover like a wide range that even single page apps excel in today we're just like we don't have the full story yet
[00:31:11]  and i know that we're not gonna see the full story today but i want to see how things are progressing so what's the difference between ssr and rsc
[00:31:22] s yeah sure um that's a good question and that's one that's worth answering because server-side rendering is about isomorphic code okay um let's go to a
[00:31:37]  zone here i'm trying to think if there's a good way to draw this but like because this is this is you write your react app and the code yeah i mean
[00:31:50]  this isn't even it's funny like i can draw pictures and words like just like thinking you might like you know because it's a good visual for this because essentially you
[00:32:04]  can you can you can you can take you can maybe there's a line that we need maybe we can just go like yeah maybe maybe yeah maybe this is how we're gonna
[00:32:20]  do it this is how we're gonna do it okay server browser all right back in the day so we're gonna do a few of these drawings i think um i haven
[00:32:37] 't decided how that's gonna look like i am not as skilled at this as other people but back in the day you would you would like you know come in and be like
[00:32:46]  okay i'm going to build a let's put some text in here a rails app that's not the right color for rails is it um or whatever and it's like
[00:33:01]  a reddish color i don't know whatever whatever a rails app and then you'd be like okay i'm going to connect it to a colors javascript yellow yellow
[00:33:21]  yeah whatever i can't even tell the difference this would be like terrible for accessibility what annoying i'm like not going to have enough colors for my purposes let's hash it whatever
[00:33:36]  okay it's fine i'm putting words on it so the colors are not the only indicator we need okay and you make like a javascript app so you'd have like
[00:33:44]  two apps okay right and then this is kind of unwieldy if you've never done this you might not understand what i say by this but like picture rails has its
[00:33:53]  templating language and you iterate over some data and that data might be like um use a templating language like erb um uh you've never seen it or maybe uh
[00:34:08]  where else it's like well it'll actually show me what some erb looks like yeah yeah see all these like nice little squiggly brackets and it essentially treats the whole thing
[00:34:21]  like a string and you can just kind of like pop in like each and do but the problem was if you want the stuff on the client as well you'd actually have to
[00:34:30]  like put your bindings in like early early days you'd use like jquery to kind of hook in or like once you got declared things like knockout or even
[00:34:38]  early view where you literally like or even angular i think just or you'd like put the bindings in and you'd have like ng4 inside the like like maybe here ng
[00:34:47] 4 in the t-body like you'd essentially have two templating systems sitting on top of each other or you you just like go like screw this i am delegating this
[00:34:57]  to the the client like i'm not going to draw this on the server but that would have like downsides so like you maybe you'd be like okay i'll draw
[00:35:03]  it on the server and then when the client wakes up i'll replace all those dom nodes and redraw it on the client and kind of do like a refresh hydration thing it
[00:35:10]  was just like it was really hard because you you couldn't run the javascript on the client and you kind of like have this thing right so there's this right then
[00:35:17]  we kind of went to a world some like we fast forward a bit and suddenly uh maybe i'll draw the next line um then what happened was we went to like
[00:35:35]  single page app land and in single page app land um we got to take this again and we're just like screw it there's nothing over here um yeah let's let's
[00:35:47]  let's add some more labels and stuff as we extend out this drawing i know this might be like a little bit many of you who watch the stream might already have followed this
[00:35:59]  but it you know it's always nice to have more more colorful diagrams right so where are we here we're like two apps mpa like this is the classic and then
[00:36:19]  and then like next thing comes along and now we're like single page app and this is classic client-side single page app like the server basically didn't do anything it
[00:36:30] 's like i'm like static page right and then the next thing that came along was we're like oh this kind of sucks because you got like you get a blank page and
[00:36:42]  then you wait for the javas you wait for the page to come in which is pretty fast because it's blank and then load the javascript and then render some
[00:36:48]  stuff and then fetch the data from the client and then render some more stuff like it's it's like slow and waterfall and the page takes a while to load so then we
[00:36:56]  get like our next js side of things where we get like the like classic next and remix and all that stuff where we get like um uh our uh our isomorphic uh
[00:37:10]  experience and what that i don't know what they call it uh spa spr ssr but like essentially what we we ended up doing is we just took this exact same
[00:37:21]  thing and we're like what if we actually like ran it here um like we'll run it once here and we'll run it once again here that was kind of like um
[00:37:30]  that that's kind of like where things are today so like we could use ssg and pre-render this part but essentially we took the same code so when we
[00:37:42]  talk about ssr we're talking about taking the same isomorphic javascript essentially so it runs on both both places so like this is the same i don't
[00:37:50]  know how to indicate that this is the same javascript on both sides but maybe the next line will help us indicate that it is as i kind of extend this out
[00:37:59]  a little bit um because what we're talking about now is is it with uh these kind of i don't know what to call them hybrid server components sc type models hybrid is
[00:38:17]  it's a little bit different we have like um let's assume the whole app is about the same size but inside this there are littler pieces maybe they're pink in
[00:38:41]  color actually you know what i should actually swap the colors around technically the big one now should be um some other color like brown and then these ones are going to be blue
[00:39:04]  and the reason the reason i want to swap these colors around um is that which might not be obvious yet is that the blue parts are actually the isomorphic javas
[00:39:24] cript if i can put it over here the blue parts here are actually the isomorphic javascript it's like the same pieces but the majority of the javascript
[00:39:46]  on the outside here doesn't actually run ever in the browser that's sort of the difference um i don't know if that makes any sense to anyone um but this is
[00:39:57]  this is true of server components this is true of um i don't even have to put islands here like it's not even hybrid this is this this is this is the this
[00:40:07]  is the both these architectures have that in common okay so like this is this is essentially the conceptual difference because like you do ssr um and hydrate or whatever
[00:40:24]  the little pieces but the majority of the app actually doesn't and that's kind of the difference with server components hopefully that answers the question all right where are we going just
[00:40:44]  looking at those things is this bob because single point entry how do you define that i mean classically it has to come down to the the routing routing is kind of the
[00:41:00]  most defining characteristic here it's like where the routing the route and rendering work but to be fair what makes hybrid interesting is that we're kind of merging that routing paradigm but class
[00:41:12] ically it's like when you go to the next page is it on the client that's kind of what makes it a single page app all right but that's the whole
[00:41:30]  thing server components essentially is that combination it's like islands plus the client router um that that's essentially what server components is it's like if you took because the challenge is
[00:41:43]  if you go to the next page and you have all this javascript that's only on the server how do you deal with that like how do you actually draw the next
[00:41:52]  page if you don't have the javascript to render the whole page well the classic answer that we you know we're using ebay for like a decade is you just
[00:41:59]  do mpa style and you go to the server you know you just run that javascript and every new page you just send the least amount of javascript but you
[00:42:06]  go back to the server server components are like well what if we could just go back to the server and do that render and then not lose the client state so like that
[00:42:15] 's essentially what it is it's the combination of the client routing with the islands you guys are just you guys are just trolling me here i'm like catching up i'm
[00:42:26]  like 10 minutes behind on chat this is something there's some yeah thanks anthony you actually drew some good diagrams here and now that i'm catching up yes completely remix is
[00:42:38]  completely single page app it's not really any difference than the next 12 or whatever it doesn't it's cool like how should i put it like remix changes the data fetching
[00:42:46]  loading patterns in a sense that resemble more like an mpa in thinking which can symbolize and streams out they got rid of the client-side cache big kudos to that
[00:42:54]  but like it's still essentially the same architecture like they haven't really changed anything all right yes yes server recruits like jsx template only runs on the server yeah yeah
[00:43:17]  i mean it's a little bit more complicated than that but yes that that is essentially what it is what's interesting though is it's it's combine that with client-
[00:43:27] side routing so that when you go to the next page you actually hit the templating language without the whole browser unloading yeah remix is spa ssr they might get server
[00:43:42]  components at some point but the remix is firmly right now in this third line as is pretty much everything svelte kit um solid start except for my new experimental stuff that
[00:43:54]  i showed off in that article um the only stuff down here is react uh next uh hydrogen next um hydrogen next uh what am i talking about next 13 solid start experimental um ast
[00:44:08] ro um isles slinkity that kind of stuff but the the the the chef's kiss is combining the client-side routing sort of fresh is in here too um
[00:44:23]  and that's that is like right now solid start experimental next only two solutions that that have that today really i mean i guess hydrogen too but doing the nested routing and stuff
[00:44:36]  there's only really two places you can find this that's why i'm so interested in the next 13 because other than salt start it's the only one that's actually
[00:44:42]  uh doing the full uh future thing here sorry quick is also in this category i forgot to mention quicks in here but they're not in the they haven't got to the
[00:44:50]  client they haven't got to like the future thing right now that's only solid start in next 13. that's why i'm so interested in next 13. streaming yeah streaming
[00:44:58]  is just a way we get the page up it's it's a great feature but it actually and impacts the way certain decisions are made but it's not really like uh
[00:45:06]  it doesn't change the architecture really yeah i mean there's a few other places but yeah i i think so all of those are missing the router that's why i last jan
[00:45:19] uary i realized that was the solution i wrote articles about this i went to a bunch of communities i went to astro i went then i'm like guys where's this client
[00:45:28] -side router i was like i was like you guys are already so close here i i want to i want to prove out and show that this is a thing and you
[00:45:35]  don't need a virtual dom you don't need react to do this i got let's let's get on it and like i i'm like i want to work on solid
[00:45:41]  i want to work on these fine-grained primitives i want to like focus on like the the core mechanics and can you guys go work on this and then i
[00:45:51]  like i bugged them for a bit then you know people had their own priorities which understands like astro 1.0 was a big deal you know and and whatnot so then
[00:45:58]  we had to go around and build it ourselves anyway so um it is what it is i i i'm hoping now that people have seen what we've done with solid start um
[00:46:09]  because i i mean i didn't highlight it here but this is basically server components at 13 kilobytes like as you move around here we never load anymore we don't
[00:46:20]  load more we don't need them once we get like the stuff that we need to render the page um we don't need to load more javascript um what am i
[00:46:27]  i'm not in pro what is going on here i'm probably in inject script uh i'm i'm not in an incognito window so i'm getting my my
[00:46:37]  what do you call it my uh extensions so they're adding some fun stuff in here yeah anyways um let me adjust my window here some uh yeah it's it's it's
[00:46:51]  not a big deal anyways um no it is a big deal because it stops me from demoing what i want to demo um see 13 kilobytes right and then when
[00:47:08]  you navigate around like because these don't need any more components like we're moving around we're not getting more thing the whole the whole app is 13 kilobytes is because
[00:47:16]  these responses coming in are essentially some inform like the serialized format that tells us assets and actually um could i prettier fire it no not really it returns actually in our case
[00:47:29]  html markup um which we can diff um and even do cool stuff like the search where we can actually um is there a dragon or something i know there's
[00:47:41]  house of dragon like where we can actually keep the focus on this search element while the parts of the page are reloading it's basically a cross between remix's uh nested
[00:47:52]  routing um and uh and and this we actually swap partials it's not very obvious here but this bar here never actually um replaces like if i expand it out because it
[00:48:06] 's using nested routing we're actually swapping out something down here in this outlet and this island like this part never changes um so like it's a combination of like turbo
[00:48:18]  link htl swapping and diffing with nested routing where we only send the partials we need to so like yes um i this is what i want to
[00:48:27]  look at next because i want to like understand how far they are along this road um this is this is why we're we're kind of we're kind of doing this sort
[00:48:36]  of thing um but yes uh fresh is mostly missing that yeah so solid start right now as far as yes yes if you just go use it normally it's remix falcon all
[00:48:47]  this you have to turn on the experimental flag you have to go like islands islands router if you want to get this mode um our doc site and a few other things but
[00:48:53]  it's still like experimental so the the thing that we're talking about for one point beta release is not even even this i think there's still you uh dx considerations which is
[00:49:01]  why i'm not like rushing this out the door i think the technology is sound i think this is really cool i think we can optimize it further and i think this is i
[00:49:08] 'm very excited about this but um when you go and start a solid start project it's it's just like a uh solid version of remix or spell kit just to clarify
[00:49:19]  okay so um where was i yeah not that we were on escaladraw yes yeah so we get to keep a best of all worlds essentially well actually and that's a
[00:49:38]  cool thing uh vdom kind of actually enables a lot of this stuff because what the vdom i mentioned a diff there what the vdom means is like they don't have
[00:49:46]  to actually send it's like picture you can render the vdom on the br in the server and then send the the stuff along and then have the browser do do the diff
[00:49:55]  patching and updating just the parts that change that's essentially what they're doing they're actually using the vdom as like a communication mechanism between client and server so um
[00:50:03]  how should i put it the the problem with vdom like these aren't the these aren't the places that update performance well it's hard to say how should i put it
[00:50:14]  io like waiting on a database is a lot is more expensive than the rendering like when you go to a new page and you're like hey i need to render a new page
[00:50:23]  of hacker news articles or whatever you waiting on the database takes longer than any client framework is going to take to render that so like that's not the blocking part um the
[00:50:32]  criticisms about vdom updates and scalability have to do with updates like you're on the page and you're trying to click something or do something and some kind of interaction that
[00:50:39] 's happening in client javascript land because in this model these blue things are still isomorphic javascript like you are still you still have app in here you like
[00:50:48]  this is the difference between like the server stateful server that like htmx that like always goes back to the server unless it has like the two app thing i
[00:50:55] 'm talking like this is like you still live in like a react app when you're in the in the browser and all the things that happen like you know updates and highlights and
[00:51:05]  shifts and tables and you know all those kind of interactions are still going to be defined by by that but like when you're going back and doing navigation then it's actually the
[00:51:16]  like database or like your back end that's your biggest and the network that's your biggest uh blocker so rcs don't really they they help with that side they
[00:51:26]  don't really they don't really affect the appness part of your app like the more interactivity stuff quick quick is is this it's it's like maybe you could argue
[00:51:41]  that they can load the they can make these a little smaller and load them in a different order but quick is um quick is still in this category um if i was to
[00:51:52]  add another row it's actually still this but with client-side hybrid routing of some sort like i just showed in that last demo which as i said today is only available in
[00:52:04]  next 13 and as an experimental flag in solid start i don't think anyone else has this yet it's the server component thing i see i put server components here but server
[00:52:13]  components are like technically this plus a little bit quick has got a container mechanism which will probably feed directly into them getting the same kind of routing mechanism but like from this architectural perspective
[00:52:25]  um this isn't like this this sort of framing doesn't show quick's advantages quick's advantage in a sense is like how well it can like go from this to this
[00:52:37]  like go from these three to this one and what i'm talking about is like like maybe that doesn't matter right that that's that's what we're that's why there
[00:52:49] 's like still like we're not sure which way the future looks that's awesome here yeah i mean it's still early but you can see how powerful this stuff is yeah
[00:53:08]  it's yeah and like changing the classes on the anchor tags and stuff you actually actually open up the demo and like look at the javascript you'll just see like
[00:53:18]  a couple components like that's it i mean could even be smaller but that page loader indicator like it's it's just like stuff like that yeah exactly except you understand the
[00:53:31]  whole point of this is that it's not websockets i i tried that's why i tried to explain to brian the other day like this is this is the this
[00:53:40]  is not about having like uh connection with your server all the time um this actually doesn't fundamentally change um the nature even of uh like because you can cache pages and stuff
[00:53:54]  like it doesn't actually fundamentally change the way this works necessarily for offline so far i'm just talking about like why server components are interesting and like why like this whole realm
[00:54:09]  of things are um you know like why this is a conversation worth having because i feel like it's this is this is the thing like next 13 they did like the release on
[00:54:20]  the conference and i was like i was like oh yeah here we go beginning of the next era because like okay let's face it here i could release stuff like i mean
[00:54:28]  it doesn't even take me or so someone could release a feature like the hottest new react feature 10 years before react does and actually do a good job of it and no one
[00:54:37] 's going to care i'm i'm serious like like like marco like marco had the islands back in 2014 nobody cared and like i i remember like you can go on
[00:54:49]  twitter and social people like going like condemning them and like now we're here you know but like sometimes this industry takes the big mover to point the the arrow it takes
[00:55:03]  them to kind of miss a bit or like you you don't get in here by just being better like you you if you're a smaller solution you have to be better to
[00:55:13]  even play like otherwise no one's going to pay attention you have to like provide something that's actually better like you know to actually even play ball here so that's not
[00:55:24]  what it's about um it's it's it's about like it's it's about it's about like when the timing is right and when the general masses move and i
[00:55:34]  was excited for next 13 conf because i was like you know what time is up you know i had my awesome server component demo ready you know kind of like last year when they
[00:55:46]  launched edge i had my i i was like ready to just like deploy the versell edge like the second they dropped it right i already talked about this before like i was
[00:55:54]  ready and the response wasn't what i was hoping so i think like i'm focusing on this because people still don't get it and i really want them to get it because
[00:56:05]  this stuff is really cool like really really cool um i want you to get excited about this hell i i didn't quote tweet it so i don't have for this week
[00:56:20]  in javascript but um adam rakis was hanging out with rich harris or something rich was saying that server components are coming to svelte kit or something so um
[00:56:29]  i i think that's pretty cool um i suspect um because they don't have a vdom i suspect some of the demos that we've done with solid actually inspired that
[00:56:42]  decision because we're the first people to show that it could be done without a vdom um and quit uh and rich was very much like standing off and being like oh we
[00:56:51] 'll see how this sits we'll see if people actually find a solution to it um now that we have um i think svelte is ready to kind of jump in
[00:56:59]  on this um and this is this is sort of what i was talking about that innovation like i look at different frameworks for different sources of inspiration i look at svelte because
[00:57:07]  they know how to like make an experience pleasurable like make it really easy for people and they innovate in that range all the time right so like um like there's just different
[00:57:20]  zones that you get different kind of innovations from views another one like that where you like get different learnings from different frameworks yeah this is not a bad way of putting it
[00:57:36]  the thing is quick doesn't have to render only on the server once but that's what puts it in the spa s or like this category or like maybe like the spa s
[00:57:50] sr category like but like it's kind of like hovering this line um but yes the way things are today you use quick generally as an mpa framework um rsc
[00:58:02] s are like a hybrid which i think is good because then you keep the client like you keep that client thing where it's good and htmx and just takes it
[00:58:13]  like off the other end which is kind of a throwback to here which you know a modernized version so kudos but also like why i haven't been as interested in
[00:58:22]  it well that's the thing people came out of that kind of negative and i was like damn it damn it damn it damn it no sorry like seriously i want i need
[00:58:33]  people to be excited about this stuff and i and if you want my selfish reason behind it because like i'm not completely you know like perfect or innocent on this is because every
[00:58:43]  time a new technology comes out it's an opportunity to show how solid's better or astro's better or someone else is better like no one cares about until react does
[00:58:54]  it so like it's if you know it gives us a new ground so to speak i know this is not for me because i'm one of those people who's like i
[00:59:03]  tend to support technical innovation it's not even about the specific technology even better it's just every time they expand the purview and they do the work and they get people
[00:59:12]  to do it it's an opportunity to show how there's better solutions out there because if it's inevitable as things change for boundaries to shift and different types of optimizations to
[00:59:26]  be applied and this progression causes things to change and things to churn you you can't stay on top forever so like i i want react and next and everyone to succeed
[00:59:41]  on a certain ground because i want to push things forward for the web and also because by pushing things forward on the web we get more cooler new things like and we keep the
[00:59:50]  push the progression forward so it's like um yeah i know i know that seems weird to people because everyone sees this as like a zero-sum game but like when
[01:00:02]  when this kind of push happens like hooks think about hooks for a second hooks like changed the way people built apps i was building apps like that like a decade before almost like but
[01:00:13]  like hooks happen now everybody wants to build apps that way and then they find like oh reactivity is a good pattern for this we should do that like that's that's
[01:00:22]  the the power here right i it's it's actually disappointing when the when the big releases come out and they don't like they don't actually just like hit a home run
[01:00:33]  because like it it just makes it that much harder like i i'd rather like these things catch on a little bit more and push more innovation you know but that's that's
[01:00:43]  because where i'm sitting i mean let's be realistic you know at your day job whatever using be practical but like here in the stream i want i want i want to
[01:00:51]  i want to see i want to see i want to see cool stuff i want to see where this stuff is heading um and you know i want to see i want to see
[01:01:01]  projects take risks like frameworks and stuff and i want to see them succeed at that so um yeah okay just change your davy oh man it's bad when you become come
[01:01:19]  a meme oh well brian can confirm no one cared about margaret recently yeah it's it's a sad reality like like you you go on twitter and like ne
[01:01:37] cro like like do whatever that like archae archaeologist thing and you follow the threads and even in time of 2020 you'll find like a dylan piercey or michael
[01:01:47]  rawlings like responding to people being like hey but you can do this and like everyone's just like no you're stupid or like no what who like what and and and
[01:01:56]  and then what when you read them now like in a 2020 or 2022 context you're just like man these guys are so right like so right like what why was no one listening
[01:02:06]  to them um so yeah it's it's it's funny like even even like people who champion the the stuff now that literally saying the opposite stuff to what they championed now
[01:02:18]  five years ago and essentially having michael and dylan be like hey you know there's an argument to the other side like oh man those guys are the best because like
[01:02:28]  they were always so patient that's the best way i can put it yeah yeah that's what we're here we're here to we're here to raise awareness raise education and
[01:02:44]  just understand where things going why because you don't have to adopt it today you don't have to adopt it tomorrow but if you understand where things are going you're not
[01:02:50]  going to get caught off guard and you don't have to necessarily dig too deep if i do a good enough job and maybe if i do an okay job of explaining this stuff
[01:02:57]  someone you know with a bigger audience will pick up slivers of it and it'll trickle down and then they'll do a better job and then people will get it and
[01:03:05]  then they're not going to get caught off by this whole javascript fatigue thing javascript fatigue is like is like my biggest enemy so to speak where i'm
[01:03:13]  sitting because i understand churn is hard people have too much to keep in their heads but the problem is if you just start like getting to a point where you just blanket like
[01:03:21]  la la la covering my ears like which is okay to do pragmatically from like a business standpoint but if people get that way the problem is like every time something comes out
[01:03:31]  they're just like whoa what is this new thing like they missed everything gets there everything like maybe that's like the highest people look for in tech like it's back to
[01:03:38]  that 10x argument where it's like oh things are 10x better you know no things are it's not a 10x better thing this is not like nothing's ever 10
[01:03:47] x better that's just a like very very very rarely and some unless someone's like keeping things perfect purposely behind the cover for you know and honestly unless they have the resources they
[01:03:57]  can't keep that up and most of the industry will be caught up by them and releasing anyways like 10x better is a myth but like if you you know keep one ear
[01:04:06]  open just aware then you don't get caught off guard then you don't get tired by it you just kind of go oh okay yeah i knew this was coming that's kind
[01:04:15]  of logical this the way trends are happening something like this will happen in the future maybe something like this and you just kind of go okay then i know that i'm gonna just
[01:04:22]  continue on on my way you just you just don't get tired about it because you don't have to worry about it it's it's it's the constant like this is
[01:04:29]  the thing you have to use now you know that's what makes it tiring and i i want to avoid that mostly um if we can just learn about these things like at
[01:04:39]  the right time instead of like getting so entrapped and what like yeah you know it's a balance does v dom make a rendering slur nope uh let's just answering
[01:05:04]  that straight up i answered this previous stream virtual dom in itself rendering wise is not slower necessarily you can write it in such an optimized way that it's not my concern with
[01:05:14]  virtual dom comes in patterns around end user code the fact that you're the end user code lives inside the pure render function the computational cost and it's all kind of entw
[01:05:25] ined and tangled together that's where my concern is like essentially uh react re-renders components this is a really easy way to understand this so you know and you you do
[01:05:35]  something like change some computation in the dependency array causes the memo to rerun the component reruns memory runs basically the end user computations and calculations are all part of that
[01:05:45]  equation that rerun and it's all entangled together that's why react cares about fiber and concurrent rendering all that stuff because the only real way to split this apart with a
[01:05:56]  virtual dom model is to kind of go okay well let's do something smart with scheduling as long as we can keep the final rendering and effects consistent then we can kind of like
[01:06:06]  drop frames it's kind of like a video game like animation kind of thing where you just like try and process as much as you can and if you can't you just
[01:06:15]  get to a point of consistency and put it on the screen as long as you don't get any tearing right you don't want any you don't want any tearing you want
[01:06:20]  to keep the v-sync on you know like that that is what the virtual dom handles it um so in itself it isn't slow but you to mitigate end user code
[01:06:30]  kind of block clogging your arteries so to speak like that's what that's essentially where we end up right i i think stuff like fine-grained rendering or virtual
[01:06:41]  is interesting because for the cost of some of the subscription management um bigger portions of your app update independently like you actually end up like decoupling and making those pieces of change
[01:06:56]  smaller which means that there's less like just inherent overhead of like the whole thing being part and tied into the same system people worry about consistency but you can make inconsist
[01:07:05] ency guarantees that's that's the whole point of the reactivity systems that i promote is about glitch free consistency guarantees so there's another way to accomplish those guarantees with a different
[01:07:16]  type of granular model instead of having an internalized one which is like you know you know like react schedule queue you can you can basically look at it based on the the
[01:07:24]  dependency graph that that's essentially the difference so in my opinion um there's probably like maybe a top level scaling consideration we have to consider here but my opinion the thing is like
[01:07:34]  the virtual dom itself isn't slow at rendering but i think like fine-grained approaches let end user code scale better this is a stream into itself we've we've talked
[01:07:43]  about this in the past oh you mean uh server components yeah i'm just using html and a dom diff library written by the guys from astro as i said
[01:07:52]  we borrow from each other is great um view nuxt i don't know i'm gonna find out next week i'm on a panel with with uh with daniel rowe
[01:08:02]  talking about less javascript i they are firmly in this spa ssr zone like the rest of us i know daniel's been playing with some stuff around partial hydration
[01:08:11]  i i i talk to him like every couple months now because of conferences and he was on my stream and stuff and he's always like yeah i got this idea i i
[01:08:18] 've been playing with i got like a little demo but i haven't figured out how to generalize it yet i i'm gonna play with it one of these days i swear
[01:08:24]  so like maybe but publicly facing wise no they're they're not there right now but i know they're interested yeah yeah i mean that's that's the interesting thing right
[01:08:40]  different techniques coming looping around right the thing is you don't actually need the diff for most things most of the time the diff like immediately bails out because it's like
[01:08:47]  you're like you're doing like you're like inner html in the new navigation but there there's a there's there's like that refresh case which is like the
[01:08:54]  the 10 or 20 case where you need the diff but 90 of the time you don't need the diff that's why i didn't want to focus on bringing a virtual
[01:09:00]  dom into the equation to solve these problems yeah the third column is yeah yeah yeah yeah probably but as i said i'm framing it for my purposes right now i i don't
[01:09:15]  the problem is if i do that yeah i mean quick's not going to stay in that one place you know this is just yeah i it's it's fine i i
[01:09:26]  if you understand enough that i suggest that i think the audience watching this will understand this diagram enough to understand what i'm talking about thank you hype driven development yeah so i'm
[01:09:39]  like 10 minutes behind i should check twitch and see if anyone's actually in there oh wow i got some kind of hype train emote i don't know anything about twitch
[01:09:52]  so this is always a little bit fun for me yeah this is this is the challenge i have now right i was theo was like i just ignore people on chat and he's
[01:10:00]  like yeah if you want to like go on chat and talk to someone about this stuff go bug ryan um because he's right i i have this terrible tendency to get off
[01:10:08]  rail i want i want people to learn and be excited about this stuff so i don't care how long it takes i don't care how long we're here i want i
[01:10:15]  want you to feel like you're part of it really because like um it's like just really cool stuff i uh yeah i mean that's that's this whole sub thing
[01:10:30]  oh man it's it's it i mean the thing is there's it feels like there should be money in open source but there kind of isn't so it's such
[01:10:41]  like such a weird place to be is no the only no no that's that's the whole thing most almost all the meta frameworks work on like cloudflare and um uh
[01:10:56]  next versell um dino um aws like they work on like all of them like that's that's that's pretty standard here and i think that's a good
[01:11:07]  question because i i think there's like an interesting challenge there because if we're kind of agnostic like a lot of people when you when you build this this rant belongs
[01:11:16]  later like in this week in javascript a lot of people when you build a framework you kind of like um yeah this belongs later i'm sorry i'll get to this
[01:11:25]  later but the answer your question is that they're they're not only node only only only very few of them are kind of have that kind of limitation all right i'm
[01:11:46]  just catching up sorry you all this is just 700 times better yep sometimes a new technology comes in that is like just there's nothing there and like like literally nothing there and
[01:12:03]  like it's hard to even put a 10x on it because it's like it's just way better because like there is nothing there so unless you've actually invented a new
[01:12:12]  space you know like yeah party town there we go there we go party town gets gets credit i'll give party town this honor all right all right all right we should actually
[01:12:31]  do something here um yeah yeah we should do something here uh ssr support in bun yeah concurrent ranting hmm yeah that would be interesting well i mean uh you
[01:13:08]  mean like a v8 isolate based thing because like cloudflare workers isn't node like it doesn't have compatibility um dino doesn't um bun actually did so because it
[01:13:24]  was intentionally to do so but it didn't need to like they aren't none of those are node aws does run node so the functions functions on versell and yeah
[01:13:34]  i guess there's really like three or four platforms when you think about it the functions the functions on versell and netlify run on aws so they are node but
[01:13:45]  then the edge workers run on cloudflare and dino so yeah there's like three or four there's like three or four run times essentially mainly three yeah i think
[01:13:55]  it's starting to catch on mostly because dino deploys interesting i think i think they still have challenges in terms of like being like but like having the npm install thing
[01:14:06]  is really interesting oh man i mean you know how awesome that is i love jared's work and i love all the works being done with on bun you know like i
[01:14:17]  just yeah partial serialization well i mean these do do partial serialization from a partial hydration sense unless you mean something differently actually we're going to find out about that with next
[01:14:29]  today that's what i want to find out i want to know what they're doing like like like like we know like the hacker news demo we know that um like it's
[01:14:40]  been so long i i figured even where i deployed it was it hacker news solid hacker news hhn islands netlify like we don't have this because of the way
[01:14:54]  this is using the new islands see this is client-side routed like it's not no thing this is doing the thing it's like five kilobytes this app even
[01:15:03]  though we've got like this interactivity we don't serialize all these comments because we like we don't need to hydrate any of these the way this works and
[01:15:11]  i want to see if next is the same we tried this with hydrogen and yeah you know let's just look i'm just wasting time here have i been going an hour and
[01:15:18]  i haven't even done anything yet i'm sorry i can't like the chat distract me that much yeah so you're not late at all no so this is why i started
[01:15:29]  the stream like half an hour earlier i thought i could like buffer in some of this stuff so you know i could like get rid of the twitch pre-roll and like
[01:15:38]  me just rambling at the beginning but like um yeah i mean we should we should try and build something right um what am i doing here no that's not right that's
[01:15:51]  obs um what am i doing here okay no that's not right that's my new experimental reactivity that no one's supposed to know about okay let's just hide that
[01:16:04]  away for a moment you guys didn't see that okay so yeah let's let's let's let's see here okay i guess let's let's let's just like
[01:16:23]  okay so um where where does this start this starts okay let's start by me going in the development folder um what what do i want to do does create next app still
[01:16:42]  work in this uh in this world like i just don't know anything do i just do create next app -sts it's funny i was actually trying to find this command
[01:16:53]  again because i like literally am not a next user and i and i remembered theo was like oh yeah i've got a great website for that um info dot tips or something
[01:17:05]  and and so i i went to info dot tips and i was like okay good i'll get i'll get the link to start up my my next js app right so i
[01:17:15] 'm like okay info dot tips i think no that's not it in init dot tips yeah init dot tips i was like oh sweet start a new project create t3 app and
[01:17:27]  i was like oh this isn't right okay yeah thanks yeah so i was like something has changed here and thanks i'm glad i asked because people are telling me i need
[01:17:45]  um i need to put some other stuff on here um i i should look at create three teeth like it would be in my best interest to look at uh t3 app simply
[01:17:58]  from the fact that i think their cli is awesome and i think we share the same philosophies so i i i experimental app yeah is this the right stuff um create
[01:18:14]  next app at latest dash dash ts dash dash experimental app is is this is this right i like if create t3 app does this as well i'm i'm perfectly fine
[01:18:26]  with it i've just like never this is not the right time and do do i have to make the directory first or will this this will prompt me for directory right okay yeah
[01:18:39]  i want to install this yes okay next rsc hacker news uh do i like es lint no i hate es lint okay actually no that's not true i probably
[01:18:59]  i probably added anything so i don't really care what es lint i just i hate tooling in general it just it just annoys me i don't know one day
[01:19:07]  i'll be converted okay like seriously i i'm one of those like old like you know how there's like the guys who like vim and stuff and they're like crazy
[01:19:19]  i'm like i'm like like the the old guy who likes notepad plus plus like oh next 13 ts by default that makes sense yeah more people should do that and
[01:19:31]  that is me making fun of ourselves we haven't changed that default insult start yet do i trust the authors yeah i'll trust the authors okay all right yeah well this is
[01:19:42]  why i have to look at it because this stuff doesn't come intuitively to me i like i'm just like ready to like open my sublime text editor or whatever like vs
[01:19:53]  code's fine but like you know i'm not i'm not i'm not there you know i need to like look at others to understand what other people like because i
[01:20:05]  can't use my own opinion here well the reason i want to do is emulate it because someone asked me to create t3 for solid start like and the interesting thing that i
[01:20:20]  found with people who tried it and i i guess this is major uh kudos to jd or who put it together was like people like yeah i used it and i didn
[01:20:29] 't really even notice that much that react wasn't there because it used like prisma and trpc and like all the stuff i was used to and then the fact
[01:20:37]  i was just like using solid jsx instead of react jsx was almost nothing so like i for them they like the people who picked it up in private they're like this
[01:20:44]  is basically just like swap over like most of the experience for them wasn't in the reactor solid code it was in like the libraries that they're familiar with so like it just
[01:20:54]  kind of felt like they were just building an app and then it just happened to be like i don't know what the number is roughly uh i want to say like eight
[01:21:03]  times smaller and you know some amount faster you know it was just like you know so i it's kind of cool yeah exactly create jd app yeah let's get a
[01:21:16]  little plug yeah and i know this rule because this is how islands work that that's what i'm getting at this this is why i want this thing on this it's kind
[01:21:29]  of funny because i i feel like there hasn't been enough acknowledgement of like it's tricky i don't know how to put this but like the react team has their own
[01:21:39]  roots for how they they innovate and they discover their stuff like the way they came up with hooks and all this stuff like it's very much on their on their track but at
[01:21:48]  the same time sometimes they don't actually like look at the fact that like the whole ecosystem is working on the same problems as them at the exact same time maybe like maybe not
[01:21:55]  quite as good or slightly different all this and then it's kind of like not drawing those correlations could be a blind spot there um but again reacts the biggest game in
[01:22:05]  town so who cares yeah i am getting distracted again okay so yeah let's look at this pages api okay interesting okay so this this example shows that you can still have an
[01:22:18]  api route here under pages but then the app is where the real stuff's happening and now i'm immediately introduced into whatever this file system routing thing is so we got
[01:22:31]  some global css we have some css modules i don't really care about that that's fine and we have a page the interesting part is i don't know enough about
[01:22:46]  next and this is maybe where i'm going to get oh no here we go layout aha top level layout component is is this head will contain the components return to the nearest
[01:22:56]  parent okay like a weird background noise going on i don't know if you guys can hear it through the stream it's like construction happening on my street okay i'm just
[01:23:13]  so i'm just seeing this stuff all for the the first time okay head and head is lowercase capital case oh okay they're they're going really hard on this okay
[01:23:37]  that's fine i i understand yeah yeah okay yeah yeah sorry uh should i zoom in one more i did zoom in but i can zoom in one more let's do let's
[01:23:53]  do that that's better right sorry i'm just gonna adjust myself again all right um i i you understand what's going on here like literally this without importing it is going
[01:24:05]  to this so i mean let's do the honors looks like i'm in an npm world here so let's just go not pmp i'm like typing it by habit
[01:24:16]  now um uh what's what's the start is it i'm not a is a dev yeah or yeah dev okay i'm right and because i'm you know what doesn't
[01:24:25]  even matter because p as long as like mpm install or it's already installed did it already install beautiful i can use pmpm and just say screw it okay um
[01:24:35]  sure i'll allow it there's a whole bunch of other stuff here okay so we're on port 3000. let's go here localhost 3000 all right ooh okay welcome
[01:24:55]  to next js13 okay we're starting okay um should we just like naively just try and start porting this stuff as fast as we can like i'm trying to
[01:25:13]  make it looks like i don't have much to explore around here it looks like page is important it looks like next image is important i don't really care about it for our
[01:25:21]  point um yeah you know what um what's interesting is i don't i guess we'll find out you know these are anchor tags but these are external they didn't show
[01:25:38]  me what an internal link tag works that and i don't know if i still use link tags or not but i guess we'll find out so um i guess the first thing
[01:25:45]  is i i'm gonna just port an existing app like i always do because it's easier let's let me see what other things i have open here i think i have i
[01:25:58]  just need a new window here new window i'm trying to think of which one i want to use as a base i i do have the next version that we built on
[01:26:06]  stream together but i feel like if the link tags oh like i don't want to convert all the link tags back if that makes any sense do do can i still keep the
[01:26:18]  little anchors inside the link tags like it won't like be bad because like if i go to remix then i have to adjust all the imports but if i go to
[01:26:30]  next i think i'm in a better place but if i go to next i went through all the pain of doing all the link tags and i don't want to do that
[01:26:37]  ever again so can i keep the anchors inside you have to remove the anchor okay yeah i don't want to figure out what a code mod is oh man okay remix
[01:26:59]  it is i'd rather change imports than change code um yeah screw this we'll use we'll use remix as our as our as our example go to its app directory and
[01:27:16]  just let's start do i actually don't really care about the head very much so what i do care is i don't care about css so i'm gonna get rid
[01:27:34]  of this i guess the first thing i want to i want to i want to know and maybe you all know this which is interesting for me is and i'm just gonna
[01:27:51]  i'm gonna empty out this page just because it's distracting me i'm just gonna i don't know replace this whole thing with like a hello or whatever um is it
[01:28:05] 's funny this is the one problem with the hacker news demo always always always the problem with the hacker news demo is how do i do a top level catch all route it's
[01:28:14]  like it's like the first thing that like breaks everyone's demos because i i what i want to do is is essentially just do like a um let's see what's
[01:28:34]  going on here why am i why am i okay whatever it's probably part of the global the global styles i'll worry about that later i'm not too worried actually about
[01:28:48]  we're gonna have to change the data loading patterns to fit the new data loading patterns anyway so like i'm not too worried about the code i have to write i'm the
[01:28:59]  but the first thing i need to do is probably let's with the app folder if i want to add components i still just make like a components folder out here no not
[01:29:13]  in here out out here right so if i want to we're still gonna have like a components folder like this right and i don't feel like can i still do this with
[01:29:25]  the pages directory with all their fancy like pages naming conventions and stuff that that was my question what i am going to do is i'm going to copy some of the i'm
[01:29:23]  mostly going to just copy um all of this stuff from remix ooh i see i see we're gonna actually have to do some work on the uh huh i wonder if the
[01:30:01]  solid version is actually the most similar version oh that's kind of interesting to think that that the solid version might be more similar than the remix version oh but then i have to
[01:30:11]  rename all the class names and do all the maps no never mind we're gonna we're gonna we're gonna we're gonna grab all of these move them across and then
[01:30:19]  we're gonna then we're gonna get to where we need to get to because these these aren't actually like these are not client components um um was it next link or something
[01:30:42]  is it like this do they did oh did they do this is this is this correct do they do they not use two and use href someone tell me that this
[01:31:11]  is true like this is this the right component i didn't oh thank god okay sorry i know it's a silly thing to get excited about but do you know where the stupid
[01:31:26]  two thing came from it came from ember um all right yeah sorry we've always used href in solid because like it makes sense but it makes sense but awesome okay
[01:31:44]  and we're gonna go to next um whatever what's their what's their website nextjs.org okay sure sure sure um and what else we're gonna do here we
[01:32:12] 're probably built with next and for the global styles i'm going to keep on theme i'm actually going to look at my uh i'm gonna like let's just pull multiple
[01:32:23]  references let's open up our previous next app anyways because i think that's the global styles i'm going to want to use um because i have all my all my apps
[01:32:32]  color coded so let's let's go in here and grab our styles that's funny it's like i forgot to yeah i just forgot to remove that i just didn't notice
[01:32:50]  it whatever it doesn't matter um let's put that in our in our global thing um and then the whole reason we did all this is that we wanted our layout to
[01:33:13]  have the nav and we want to import nav from components did i lowercase them that's so not me whatever yeah fancy partial hydration it's partial hydration plus some all
[01:33:40]  right all right so um all right interesting how the fonts getting in here but um yeah i should put nav inside the body tag good call good to call that makes sense um
[01:34:01]  yeah that's interesting um yeah that is that is a good call that could completely be the cause of the the text styling yeah there we go perfect okay interesting though okay sorry
[01:34:46]  so back at chat did we figure out how we were going to do the top level catch-all route does anyone actually know the answer to that question i can create a
[01:35:00]  route group that sounds about right it's an interesting do i actually even need the route group i i think you're right though i think i need to actually start with a folder
[01:35:20]  which is interesting the benefit of the route like i don't know like this global css is just like getting pulled in magically it's unless it's part of layout is
[01:35:32]  it part of layout yeah it's part of that that makes sense um okay yeah this is interesting right because there's like a detachment here because like because we'll
[01:35:53]  get to that we'll get to that in a minute let's let's try and author before we worry about that let's let's like just try and author um the first
[01:36:01]  hacker news page um and then we'll we'll worry about that because the layout is exactly how i want it that makes sense but it's the page that i actually want to
[01:36:13]  load the data um and if we go into one of these we probably i have an api ts and did i do it the same way in remix i just want to
[01:36:28]  double check yeah yeah so we just have this api ts i'm trying to remember if they made me do anything fancy with fetch no okay these ones are straightforward so let
[01:36:39] 's just copy that across um all right and i'm hoping that fetch just works on the server in this environment so that'll be fine and then uh i'm gonna use remix
[01:37:01] 's index route as more or less um a template here though we're gonna have to we're gonna have to redo a lot of this okay i'm just banking on remix
[01:37:15]  being an easier port um because i don't want to deal with anchor tags all right let's just like replace the whole thing actually all right now we don't have this
[01:37:33]  loader function um but my understanding is that i can just go like make this an async function index and we'll worry about the rest of this later but i'm like
[01:37:45]  literally just gonna be like let's just pull all this stuff in here i'm gonna need to look and see how to get the this information but i'm just going to
[01:37:59]  why is map stories and story data is not being used oh it's because of this the index route we'll get to that i'm not gonna worry about that um yeah so
[01:38:12]  that's my first question right how do we okay no loader function we need link from next link next next link and then we need uh we need we need my
[01:38:42]  types i haven't copied the types file across either um types paste i must have not copied it all right love when that happens all right whatever i'm not gonna worry
[01:39:28]  about that for the moment all right so let's keep on moving on i'm just trying to keep up with chat because you guys probably know this better than me me oh
[01:39:56]  thanks sorry i was so busy focusing on this stuff thank you benton to subscribe to the tier one um always awesome i have to actually go look at twitch occasionally to actually see
[01:40:07]  it so thank you for flagging me because i don't always see this stuff on twitch okay so i guess the first question here is how do we access the request
[01:40:20]  the request object um or like basically i want to know how to get the query parameters um but you know what we can we can fake this for the moment yeah okay yeah
[01:40:41]  okay next headers headers headers apis that give me something to look at okay header next headers actually let's just go here next what am i looking for the new docs
[01:41:21]  okay what where are the new docs the new docs okay where are the new docs I don't know. Okay. Okay. Okay. Okay. Okay.
[01:42:37]  I mean, I guess I could also just try doing stuff like this. Like seeing, do I have frams here? If I think is, I don't have
[01:42:52]  frams, that was like a terrible, that's like emmet completions. It's like, no. Okay. The other thing is, oh man. I
[01:43:04]  feel like actually, I have nothing to read off this anyways until I actually implement like the catchall route. Do you know what I mean? I mean, we can
[01:43:38]  just do this. So like we could, and like, do I get search frams this way as well? Okay. Okay. Oh man. Alright. It
[01:43:59] 's funny, like, it's still, it's still aired from like way back, actually while I'm here, why don't I take care of all these Ah
[01:44:23] refs. Whatever. Um, I feel like I just want to like console log props and see how far that takes us. But I don't know if that's
[01:44:37]  gonna feel like it probably. It's all, oh, I know what else is the problem. That's not the problem is. This can, we haven't unrem
[01:44:50] ixed all of these yet. So like, we actually have to look at these as well. Like, uh, link. Um, second. Alright. I think,
[01:45:08]  I think that's what I missed. Sweet. Alright. You really can't find this types file in the root folder. It's really, really quite interesting. Alright
[01:45:41] . But, hopefully... What, what, what, what is the things in there? Types. Oh, okay. Alright. Now, params search params
[01:46:05] . Thank you. Okay, yeah. It's that simple. That's, that's nice. Params search params. Which means that it's just, I
[01:46:20] 'm gathering search params as like a simpler object than this. There isn't any right now, but I'm gonna assume that it's search params. It's
[01:46:28]  gonna be search params page. And it's, this is actually params dot story or something. Or this. It's just, I'm not gonna worry about this
[01:46:41]  just yet. We have to actually create the, the route first. I'm hoping though, that with this, we're starting to actually, um... I mean,
[01:47:00]  I should make this type safe, but I don't actually care enough to do that. So, where am I? I'm just gonna make this an iStory array
[01:47:08]  for the moment. And then, will that make everything else shut up? Other than, I need to know the proper types for the index route. But if everything worked
[01:47:19]  properly, um... Our little Hacker News app should at least be up and rolling. Okay. Because we, we don't have /top yet. Okay. Alright
[01:47:35] . Sorry. See Jeffrey's link. How far back do I have to go? Um... Oh, there it is. Yes, and thank god it's from Twitch.
[01:47:50]  Because, um, YouTube comments and StreamYard I can't, like, actually... Yeah. Okay. Here we go. Let me pull this over. Thank you
[01:48:11] . I appreciate all the help here. Oh! What do you know? There's actually... There's also hook style ones. Okay. This is, like, a
[01:48:25]  little bit cleaner. Ah. Interesting. So it is get. Huh. Oh, this is for client components. The search parameters used... Okay. My bad.
[01:48:52]  So, it's this one. Huh. Alright. They just... They literally just put this type in here. There's no, like, nice, like, function version
[01:49:06]  of the type. Just, like, use page component or... Nope. Okay. That's... That's... I think someone actually already put this in the... Don
[01:49:16] 't use that. Okay. I... I won't. I will use... I mean, it's... It's the same thing, though. Right? It's just
[01:49:26] , like, a better version. Okay. I'll use the better version. Um... It's like this. Yeah. Yeah. It's... It's... Yeah
[01:49:38] . Yeah. It's... Okay. Whatever. Oh, it's always slug. Okay. Got you. So, they don't care about the naming. Okay.
[01:49:48]  Well, for this to actually work, we need to add our route. Um... Maybe I can find that here, how they do the catch all. Yeah. I
[01:49:55]  see a dot dot dot. So, let's... Let's see if this will work. folder... Dot dot dot dot. I mean, I don't have to
[01:50:00]  name it slug, do I? Like, I can name it something else. Okay. Okay. Okay. Okay. Well, for this to actually work, we need
[01:50:07]  to add our... Our... Our route. Um... Maybe I can find that here, how they do the catch all. Yeah. I see a dot dot dot. So
[01:50:13] , let's... Let's see if this will work. Folder... Dot dot dot. I mean, I don't have to name it slug, do I?
[01:50:25]  Like, I can name it something else. Like, I can name it something else. Like, it's... They do slug in their example. I can name
[01:50:34]  it to... Like, I can name it to whatever I want, right? I can... I can say this is stories, and then... This will be stories, and
[01:50:40]  then... And then I can move page in here. Why does voler want to come in here? View language... What the... Um... I'm gonna skip for
[01:50:58]  now. Okay. Let's see if this does something. We could be doing this completely wrong. Okay. That did not work. Let's try and put something here like
[01:51:13]  this, though. But that works. Interesting. Interesting. So, I didn't... It's not quite what I want. It's close, though. I want
[01:51:22]  it to... Not... I want it to match slash as well. Maybe... Maybe if I look at the old Next app, this will give me hints. Um...
[01:51:39]  Next. Oh, they did this, like, double thing. Is that it? Like, where they do, like, this double bracket thing? Is that, like,
[01:51:49]  the secret sauce? Yeah. Yeah. That's it. Okay. Yeah. I'm not wiring it quite up right yet. Okay. But the pagination works.
[01:52:04]  Okay. Sweet. Pagination works. Okay. But... It... We haven't wired up this piece. Okay. But... Progress. Thanks. That's great
[01:52:16] . Alright. So, we're getting somewhere. It's interesting how server components and, like, non-server components do, like, to worry about the use API
[01:52:33]  versus not. I think it's interesting. The nice way to get types is to type page. Okay. Yeah. I mean... Yeah, that's what I was
[01:52:48]  actually looking for. I'm surprised the docs didn't show that. Alright. Cool. Okay. So, let's wire up the... Let's get the rest of this
[01:53:04]  working properly. So, pagination works, even though this is not happy, because I said this. I'm going to pretend like... I mean... Can I pretend
[01:53:14]  like this is true? It seems to be true. Um... Params dot story. What do params look like? Let's just console log them. Let's give
[01:53:20]  it a nice big... Params. Params dot story. What do params look like? Let's just console log them. Let's give it a nice big
[01:53:34] ... Params. I mean, it's the only thing we're console logging anyway, so it doesn't really matter, but... Let's do that, and then
[01:53:43]  like... Here, there's no params, which we know. But then when we go here, we should see something. Oh, interesting. It's an array.
[01:53:55]  Okay. I mean, I can... I can... I can deal with that. Is it always in an array? Um... Well... Huh. Huh. So
[01:54:19]  it's more like this. Uh... Params dot stories. Zero. Or top. And then... I... And then I need to... I need to actually pull in
[01:54:33]  the rest of the code that I have in Remix that I didn't actually bring in here. Or actually have a next version, which is... I need to...
[01:54:51]  Actually change the fetch request to look like this. Which... Um... Has... The type of story in there, too. And last time I hit a TypeScript issue here
[01:55:05] , and we never figured it out. And it only happened in next, and not any other framework. So I was just like... I gave up, and I was like
[01:55:12] , screw it. And... I'm not gonna solve it right now, either. Sweet. Sweet. Sweet. Sweet. Okay. Progress. Okay. So we got
[01:55:26]  the... We got the main page running. Um... But the... The main page is not very interesting. I think what's cool here... I wanna... I wanna see
[01:55:35] ... I mean, I guess I need to do a production build. But right now, like I'm seeing like... This is... This is... Next data is still
[01:55:44]  very much... In... Still very much going. Even though... Technically these are all server components. Although this is like... I see like class name. This looks like a
[01:55:55]  different sort of a serialized thing. Okay. I'm not gonna... I'm not gonna... We'll get into this when we build production builds and stuff and see what
[01:56:03]  things actually look like. I don't know. I don't trust dev. So... Let's continue on. We... We need to... I don't really care
[01:56:10]  about all the routes. But I do need... We do need to get... Um... The... Story route. So that we can do the... Recursive partial hydration
[01:56:21] . Uh... Which is key to this whole thing. So... Um... Let's... Look at... The... So it's like... Stories... ID. Um...
[01:56:36]  So I... Do I have to make two folders here? So like... What I want to do here is actually... Like... I'm gonna actually write it like this.
[01:56:42]  But it's... It's gonna automatically do it. I'm pretty sure... Stories... ID. Uh... What's the syntax? ID. Page.tsx is
[01:56:51]  basically what I'm gonna want, right? Yeah. Um... So I... Do I have to make two folders here? So like... Do I have to make two folders
[01:56:57]  here? So like... What I want to do here is actually... Like... I'm gonna actually write it like this. But it's gonna automatically do it. I'm
[01:57:02]  pretty sure. Stories... ID. Uh... What's the syntax? ID. Page.tsx is basically what I'm gonna want, right? Yeah. Um...
[01:57:12]  Does this actually make a folder called that? Hm. That's cool. Usually it's not what happens. Let's try that again. Story... Stories... Colon... ID
[01:57:31] ... Colon. I'm just messing with VS Code here. Okay. I should just delete this. I'm just... I should do this like the easy way one at
[01:57:45]  a time. I... I think I've actually like just messed up VS Code completely. Okay. There we go. Stories. New folder. ID. New file. Page
[01:58:06] .tsx. Okay. That's... I think that's what we were looking for, right? Alright. Uh... Let's... Let's... Let's...
[01:58:17]  Let's... Let's move... Remix into it. Let's move Remix over. Alright. Alright. So... Loader function. Check. Don't need
[01:58:32] ... Loader data or JSON. Check. We just want to make this async. We want to pull this... Into our component. Sorry. I put the as
[01:58:56] ync in the wrong place. Async. And... Don't need this. Cut off. Everything's one more set of dot dots. And then... It's link
[01:59:26] . From next link. And... All the two equals become the proper hrefs. There's only one. And then... Params comes from here. And then
[01:59:48] ... We'll call this one an... By story. And then... I think... That... I mean... Is that all we need? I feel like I'm like
[02:00:10] ... Forgetting something important. I think I'm actually... I know what I'm forgetting important. I... I have to actually go in and... Update the... Story component
[02:00:16]  to not be... Remix. But did I already do that? But no... The comment component not to be Remix. Comment component needs... Okay, yeah.
[02:00:24]  This is where we're gonna hit our first... Our first bit of fun. Because guess what? We... Have... State. And this is what I was waiting for.
[02:00:35]  Because we actually... We need to rearrange this. And actually the Remix example... Is no longer a good example for us to follow here. Um... Nor is the
[02:00:43]  next example. Because these... Are... Assuming this. So actually what I need to do... Is... Um... I need... What do I need? I need...
[02:00:55]  Um... I need... File... Um... What am I gonna open here? I don't care about Remix anymore. We need... We need SolidStart, don't
[02:01:09]  we? Yeah. We need SolidStart. In fact, I think... And we need... Examples. Hacker News. Components. Story and Toggle.
[02:01:21]  This is... This is... This is... This is the magic here. So we're actually... Um... Yeah. Oh... Awesome. Hey... Coding Garden.
[02:01:43]  Awesome to see you here. We are just... In the process... Of... Converting... Um... Updating... Uh... To a React... My Hacker
[02:01:53]  News Demo... To a React Server Components... In Next13. Um... We've been using Remix. We've been using... Alt and Next12 as inspiration
[02:02:00] . And now that we got to the Server Component part... We're actually using SolidStart... To figure out how to write the Server Components. Because... Uh
[02:02:07] ... It has the kind of optimal pattern. So... Yeah. No. Thank you for the raid. Um... This is awesome. This is probably more people I've had
[02:02:15]  on Twitch viewing me than... Almost ever. So... Thank you. Um... Very, very, very cool. Um... See you all here. So yeah. We
[02:02:25] 're in this process of making... Uh... Our Server Component... Hacker News Demo. Um... I... I... I... I make Hacker News Demos
[02:02:34]  in every single framework. So I can compare them. And... This... This one has... I've been... I've been waiting for. Um... So yeah. Yeah
[02:02:43] , yeah. Let's... Yeah. Yeah, no. Great to see you though. Bye. And I enjoyed you taking the time to show off Solid on your...
[02:02:52]  Uh... JS... Survey one. Uh... He... He wanted to... Uh... Say that he's used it and used it again instead of saying... You know... He
[02:03:02] 'd be interested in learning on the JS survey. So literally in the middle of the survey... Dropped what he was doing. And made a... Solid JS app. Um
[02:03:09] ... Which was really, really cool on the stream the other day. So... Thank you. All right. All right. So let's... Let's... Let's
[02:03:18] ... Let's... Let's do this. Um... Yeah. Okay. So... We need to... While I don't... I've... Solid's got its like own
[02:03:29]  syntax. So it makes it a little bit tricky. What we technically want to do is we want to make a story server component and a toggle client component. And the
[02:03:35]  reason we want to do this is that we... We don't... If we kept the same structure that we have right now, like in the next Hacker News demo,
[02:03:45]  the whole comment component and the recursive comments would... Like we can't... Because this has state, it would have to be a client component, right? And because
[02:03:54]  it's a client component, all of... And it has state because it needs to toggle the... The... The comments, right? If you've seen a Hacker News
[02:04:02]  demo, you'll know what I'm talking about. Uh... I had one here. Yeah. You want to be able to collapse the comments. But you don't want
[02:04:10]  these to be all client rendered. You don't want to have all that data. You don't want to like waste your time. You want the server to render all
[02:04:16]  this. Yet we have this terrible problem that all our comments are recursively collapsible. So it's not as easy as just saying like, oh, make the whole thing
[02:04:27]  client components or server components. Because you're literally interleaving a client interaction. So this is like a beautiful use case of why server components are actually valuable. Right?
[02:04:40]  So let's look at how we're going to do this here. Because what we want actually is to make a new toggle component. And that's where we want to
[02:04:55]  get our state in. And that toggle component is going to... How do I do this? Do I do use client? Did I get that right? I don't
[02:05:04]  even know what that means. We'll worry about that in a minute. We can look at the docs. Okay, so am I using the wrong type of quotes? Should
[02:05:25]  it be like these kind of quotes? Okay, yeah, it's just missing stuff, right? Okay, yeah, they're just telling me like I haven't implemented
[02:05:37]  the component. So in this case, we're going to... At least this component is going to be very React-like. It's not... I'm just copying it
[02:05:47]  from solid. But this is the easy part, right? Because we're just going to go... React... UseState... UseState... ClassName...
[02:06:06]  ClassName... Open... Oh, wait, they don't have classList. ClassList. Okay, well, that's fine. We can... We
[02:06:18]  can... We can do something with that. Um... We can make it... We'll just be a little bit clunkier, but it's not that bad. Okay
[02:06:26] , yeah. So what do we want to do here? It's going to be like... Like... Like... Like... Plus... Um... Open... Open... Otherwise
[02:06:36]  this. Something like that. That... Alright. Alright, so... And... We're not using Anchor. We're going to use... Link... I think...
[02:06:46]  Oh, actually... This doesn't actually... I don't know. This is actually an Anchor for semantic reasons. It's not actually an href. Okay, so
[02:06:51]  that's fine. Um... And... We're going to use... And... We're going to use... We're going to use... A link... I think... Oh
[02:07:00] , actually... This doesn't actually... I don't know. This is actually an Anchor for semantic reasons. It's not actually an href. Okay, so
[02:07:05]  that's fine. Um... And... I don't know. I don't know. This is actually an Anchor for semantic reasons. It's not actually an href
[02:07:12] . Okay, so that's fine. Um... And... I don't know why there's props here. Cause... Oh, props children. Let's just... Let's
[02:07:19]  just... Let's just do it the React way and destructure it. And it's just complaining that it doesn't know what it is. Um... So what... Can
[02:07:30]  I just do like... GSX element? Um... Or actually... Sorry. I'm just... Children. I know there's like GSX types for this stuff,
[02:07:39]  but I'm... In this case, I don't... Okay. Yay. Okay. So... Um... Okay. So this is our stateful React component. Yeah.
[02:07:51]  Oh, yeah. Thank you. I missed a space. Awesome. Okay. So... Okay. So then... The key part of this, and I love this about
[02:08:07]  this, you understand, is the client component has its state, can toggle some classes around our list, but it has no introspection into what these children are. So
[02:08:17]  these children are actually rendered always on the server. And that's where... How this boundary works. So... Um... There isn't even really any props. The children are
[02:08:26]  the only thing that get passed through. So this actually makes things really, really, really simple. And then we just have to change our comment component now to do the
[02:08:35]  right thing. Okay. Uh... Okay. The first... This starts, obviously, with not being Remix. Um... Okay. So... So... Let's
[02:08:48]  do next link. And do that. And now we no longer need use state here. That is gone. And then... This becomes href. Makes sense. And
[02:08:59]  then... Dangerously set in your HTML. Looks good. Good. Good. Good. Good. And now this is where the fun part is. And I'm just going
[02:09:11]  to refer back to Solid to remember what we do here. Which is in the comment component. We do our conditional when there's length. And then we wrap the loop
[02:09:29]  in a four. So... Conditional when there's length. And then... We... We... We do this. Okay. So everything... It just disappears, essentially
[02:09:45] . Um... Chuk. Chuk. Chuk. Chuk. And then... This becomes our... Toggle. And... Format. And then... This
[02:09:56]  becomes our... Toggle. And... Format. And... And then... Pluralize. Pluralize. Pluralize. Was... Pluralize
[02:10:06]  supposed to be in here? Did I miss that? Or did that just get lost in the... Maybe that just get lost in the... In the ether. Is there Pl
[02:10:11] uralize in the solid version? No. Okay. So we just... We just lost in the ether. Doesn't matter. Slightly different formatting for this example.
[02:10:18]  But... Um... I think... The key is... Yeah, right. We... Import... Toggle... From Toggle. And then we go back a couple
[02:10:28]  rows... And then we go back a couple rows... And then we go back a couple rows... And then we go back a couple rows... And then we go back a
[02:10:37]  couple rows... And then we go back a couple rows... From Toggle. From Toggle. And then we go back a couple rows... Okay. I
[02:10:48]  went too far. Why? What is it doing? Okay. All right. We're... We're right in the components folder. So that should... Oh, right.
[02:10:58]  This is just the example of it being really... VS Code just breaking on us really dumbly. Like the original was fine. Okay. And then... Okay. And then
[02:11:06] ... Oh, right. No. We have a key. I was like... We don't need keys in solid. I thought maybe I broke that. But no.
[02:11:14]  We have a key. So what is it complaining about? Someone who knows React... Can probably tell me what's wrong with this. Yeah. It's... It's going
[02:11:23] ... It's going okay. We actually got the... I'm just getting to the part... Where we do the recursive parsing. Okay. It's going okay.
[02:11:31]  We actually got the... I'm just getting to the part where we do the recursive parsing. Partial hydration. On the stream. That's... That's
[02:11:37] ... That's... That's... That's... That's... That's... That's... That's how it's going so far. We haven't really introspected
[02:11:46]  what's going on yet. Mostly, we're just getting this hacker news demo working. I spent like the first hour literally just ranting about why server components are important.
[02:11:54]  Yeah. It's a return type of comment. I mean... Isn't it just... Whatever JSX element this is? Am I returning like multiple or something by accident
[02:12:11] ? No. It's a list item. Hmm. Maybe I don't care. That's always a possibility. Maybe I don't care. So let's look...
[02:12:27]  Let's look here. What's going on? If we go here, do we... Does it work? Does it collapse? Styles aren't quite right. Oh, right
[02:12:37] . I always have to remember this with JSX frameworks. Does the dangling zero... Um... Cause I'm... I'm checking length. Um... Uh... Let
[02:12:48] 's... Let's do something like this. It's fine. Um... It's funny. Did I... Yeah, what's... Yeah, interesting. I'm not
[02:12:56]  quite... This isn't quite right stylistically. I wonder why that is. I wonder why that is. Open. Toggle. What? Okay. I think
[02:13:08]  I screwed up the... I screwed up the class concatenation inside our toggle component. I think I know why. I think I did this. Let's try this
[02:13:16] . Yay. Okay. Okay. Okay. I think I know why. I think I did this. Let's try this. Yay. Okay. We did it.
[02:13:26]  We did it. Okay. Success. Okay. That's great. So... We did it. Okay. Success. Okay. That's great. So... We did it
[02:13:39] . We did it. Okay. Success. Okay. Okay. That's great. So... We did it. Okay. Okay. Success. Okay. That's... That
[02:13:52] 's great. So... So... We have a working... Hacker News Demo piece. Okay. So... This is... This is good. This is where we
[02:14:04]  start actually looking at what's actually going on here. Yeah. I wanna... First of all, there's a console error. I'm interested what that is. Something about
[02:14:17] ... React Dev Overlay. Yeah. I don't know. I don't really care. I guess the first thing is... Can I... Can I look at this
[02:14:29] ... Locally? Can I be like... NPM run... Build... And then like... Run the optimized production build locally? Oh, is it gonna error out on Type
[02:14:42] Script errors? Oh, man. Oh, man. Okay. Which one? We're back to the stupid map. Okay, fine. I guess we're gonna fix
[02:14:50]  TypeScript errors. Hmm. It's absolute. All right. So let's look here. What are we doing here? It's not this one. It's this
[02:14:57]  one. It's this one first. MapStories. Because... TypeString still in there. Can't be used to index type top stringed. Really?
[02:15:03]  Even though I say it's a... Is it... it's this one first map stories because type string cylinder can't be used in the type top string really even though
[02:15:16]  i say it's is it is it supposed to be type of key of why did i just say it's a string no oh beautiful okay we got it it's funny
[02:15:49]  last stream we did this no one we we never we never solved that one and then this one i need to do a little bit of this fun because i don't need
[02:16:08]  half of this and what do we call it id and then this one so we do have to solve this one okay it's the it was it was this right yeah
[02:16:59]  thank you yeah sorry i'm not react i use gsx very differently in solid because there's no virtual dom so like gsx element is like as good as
[02:17:14]  like whatever it's like it's like a slightly um it's basically like a any but it's like a little bit narrower than any okay okay okay that's interesting okay
[02:17:37]  that's interesting we can get rid of the the api route too sorry i forgot that was still here move to trash and let's look at um yeah start we
[02:18:07]  should deploy this realistically but i'm just i just want to sanity check some stuff before we deploy it actually we probably should just deploy it but let's see if this does
[02:18:26]  what i i'm just curious because the most interesting thing to me is how much okay this is better it's interesting what is all this stuff they're serializing for a
[02:18:48]  statically server rendered page there's something about this technology i don't quite understand yet because like you'd think that you wouldn't need any of this like this this page
[02:19:01]  all right there's 15 kilobytes here from we we know better we need to open this in an incognito window but so we but okay yeah i think i
[02:19:22] 'm gonna i i'm happy that this is functional enough um yeah i'm happy that this is functional enough that i want to deploy this next i think i think this is i
[02:19:33]  don't think we're gonna get a real feel for this until we compare a next 12 app with the next 13 app that's that's that's where we're at right
[02:19:40]  now right uh well that's the thing this isn't dev mode anymore i turned off dev mode i did a production build and then i did a i i i did a
[02:19:51]  i'm hoping this is not dev mode i did a that was why i did the production build for because i i i did next start you have to put the comments folder into
[02:20:05]  the app folder to be server once is it is that is that true that doesn't make sense how would you ever like import server components from a third-party library well
[02:20:15]  i mean it's not crazy in size next is 80 kilobytes like it does or like 76 kilobytes so like you're not going to make a next app smaller
[02:20:26]  by using server components all you can do is make anything else that you would have to load less right it scales from that point right so i i think oh right and we
[02:20:38]  have we still have the console log here too what i want to do actually is um i want to deploy this i think we're gonna have to deploy this we have a
[02:20:45]  console log somewhere um yes it's this one so i guess we're we're ready for versell time was it versell yes yes no yeah that's a good one
[02:21:08]  what code what what directory is the code located in the root directory is that right sorry i just never use next i don't know what the correct answer is help me here
[02:21:27]  chat yeah okay that looks reasonable do you want to modify these no all right while we're doing this i'm actually going to look for my up my older version of this and
[02:21:53]  actually i don't think we have uh what's it next hacker news all yeah okay i don't think i have another incognito no i don't okay let's
[02:22:12]  okay let's see first that this works oh interesting did it did it do straight to production like uh prod deploy on the first one because i hadn't built it before this
[02:22:35]  looks like a prod deploy i don't see any name spacing okay okay that's cool let me double check that because you usually usually there's deployed to production run first of
[02:22:51]  all the overwrite later okay yeah thank you okay cool so now we have two next js apps to look at side by side next 12 next 13 server app directory bang let's
[02:23:06]  do it looks like i i still have some some stuff but okay at least the title will help us figure out the differences between these because it looks like i didn't properly
[02:23:17]  set the title for either of them so okay first let's just uh understand javascript for the wire okay so 84.2 on basically a no javascript page anyways
[02:23:30]  and 89.6 okay so you may be like oh interesting size one up well server components have a little bit of an overhead so i guess this is going to be the
[02:23:41]  this demo is just not the right demo to showcase off server components from a pure size perspective um because like technically speaking um they the the the size cost to opt into server components
[02:23:58]  is probably more expensive than the javascript it takes to render this page either that or like what version next are we on here are we still are we still in like
[02:24:10]  the buggier versions that no 1306 hopefully like stuff's been fixed okay let's let's let's let's look at a couple other things here i want to i
[02:24:25] 'm gonna look at the html payload actually because i want to understand how big it is over the wire so if we look at the document here for the same page
[02:24:35]  interesting huh server components version is a larger let's look at the elements i want to i want to understand this next route announcer oh cool that's honestly props to them for
[02:24:52]  having like aria stuff built like right in like in order to properly do aria you have to like a aria live section that one route changes swaps up the the
[02:25:00]  text and this paragraph element so that it alerts people the fact that this is built in is kind of really awesome anyway um does this one have it too probably like i didn't
[02:25:11]  i didn't opt into that that was just there next i don't see it here anyways doesn't matter let's let's uh next data script this is our tons of
[02:25:25]  serialized data um and then here's the next thing but interestingly enough here okay some pushing some probably for streaming the actual serialized amount of data is actually greater because it's
[02:25:43]  passing the server components interesting this isn't just json like i'm seeing hrefs and class names this is their server component serialization is actually flushed into the
[02:25:58]  document oh this is this this is i just astro solid edge i just want to understand what kind of impact that kind of serialization has just 3.1 kilob
[02:26:15] ytes for astro solid solid hn islands how's this one 3.6 kilobytes 6.8 5.1 okay so interesting basically what i was kind of looking
[02:26:39]  at here is there's a certain shelf on complexity before it's actually worth investing because like um the router and the diffing the do surfing components has an overhead right um
[02:26:51]  and uh the reason i'm mentioning this is like this solid version is like it should be bigger this doesn't this version of the diff it should be about a kilobyte
[02:27:01]  bigger it should be about six kilobytes okay let's say six kilobytes for this page but like um it's smaller enough compared to the javascript for
[02:27:12]  actually rendering the page so that the offset is is different enough like if i if i just like pick like a solid hacker news edge netlify demo or something like what
[02:27:23]  you'll see in this example is that the apps like 13.8 kilobytes so going to this actually is this it makes it makes a difference like from here on out
[02:27:35]  it scales better like this is the worst case when you're on the small side and basically this page doesn't require any javascript to run so this is like this
[02:27:43]  is the overhead here see if i actually go on this page on astro there's going to be no javascript like they they don't you don't need javas
[02:27:50] cript for this page to run um astro however is an mpa so it doesn't have a client-side router so that's a trade-off it solid needs like
[02:27:57]  a little bit javascript to run but like essentially this is kind of like the worst case page in terms of size just to kind of understand and i was interested in the
[02:28:04]  dock serialization thing so server components don't save you on data serialization uh on the base case i mean let's let's let's scale it up something let's
[02:28:15]  find a story that has a lot of comments i just want to kind of understand what this looks like 328 comics comments is probably enough 329 now yeah that's probably enough
[02:28:26]  let's let's let's look at what's happening here so 81.5 kilobytes for this document serialization size right javascript should be still small 89
[02:28:38]  that's not bad for for the next 12 version of the same story we're going to do this i'm going to look at this 81.2 so it's it's
[02:28:53]  it's basically the same document size it's like slight difference we're talking about a couple of kilobytes so it's basically the same document size amount of ht
[02:29:02] ml and serialized kind of works out to be the same um this one obviously on the js size is again the it's basically looks like react server components cost about seven or
[02:29:14]  eight kilobytes and then they're saving about three or four kilobytes by having them so like it's like it's like plus eight minus four so the delta is
[02:29:24]  about four kilobytes between these versions in the non-server component thing because there's just not that much javascript required for this page but just to kind
[02:29:31]  of get understand it looks like it's about eight kilobytes overhead for react server components and then having them on this page saves you four kilobytes so that helps
[02:29:43]  me out so but but the document serialization is interesting because this is not what i was expecting exactly 54 kilobytes for the astro version 54 and for the solid islands
[02:30:04]  version seven where is it where is it sorry not that the dock 55 and the original solid version which has everything in it um 113 yeah okay yeah solid serialization formats
[02:30:28]  with the dhk's are a little bit big um but interesting okay i was i was mostly interested in seeing this the so the the basically is no serialization savings
[02:30:41]  here like it doesn't it doesn't solve the double data problem which is one of the benefits um uh let me grab another one here we'll do a quick city people like
[02:30:53]  those right um just to kind of get an idea because yeah what was our base thing here right 4.5 which is nice and then when we go into this expensive story
[02:31:05]  this one 62.7 yeah so again quick 55 like it's very comparable on html scaling size and then obviously page like this we need some javascript there
[02:31:19]  it is okay um quicks version uh this is why i have service workers turned off all the time so i can actually see what the performance is um application bypass source stack bl
[02:31:35] itz this is why we we have not the best relationship now let's look again and see what's going on so we get proper sizes there we go bang 17 kilob
[02:31:49] ytes of javascript okay yeah so 17 5 or 6 yeah just to kind of like get my my head around it so 13.8 for the solid full version and
[02:32:02]  then for the islands version of solid 5.8 astro javascript 4.8 with solid and then but again it doesn't have mpa routing well technically the quick
[02:32:15]  one doesn't have it's an mpa as well and yeah anyways but this just kind of gets gets gets me the kind of scale here so it we don't solve
[02:32:24]  the double data problem with this which is interesting um interesting okay yeah okay i i i i start to i start to see why people have a hard time here it's not it
[02:32:40] 's not that this the technology isn't good like i think that if you make a dumb stupid demo like i'm making right here you're not going to see the benefits
[02:32:50]  um because uh next buy-in cost is so high that like you're actually like you have to do something more substantial to actually see any kind of difference here and um yeah
[02:33:03]  that serialization cost is going to ping it on the like on the death test um i don't even know if i want to run it it's it's not gonna it
[02:33:15] 's not gonna pres it's not gonna perform like the other partial hydration solutions yeah the the context thing is understandable um we we probably should talk about that i i said i
[02:33:36] 'd talk about this later to kind of explain about some of the optimizations that can be done here but this is this is this is tricky um it's definitely tricky you
[02:34:00]  i mean it's it's not identical because it you're trading an html api for json api so it's like a little bit tricky yeah i
[02:34:24]  cut the sound for a second i need to think um okay because yeah i mean yeah yeah but the the thing there's there's trade-offs here right like technically the
[02:34:42]  astro solid demo is the smallest mpa thing but like the this is an mpa like you are page reloading you know like that's that's good for lots
[02:34:53]  of things maybe not good for everything so like it's not a fair match comparison the quick one is a little bit larger um and it's also mpa they've got streaming
[02:35:02]  here though you see how the bar doesn't come in this is something you'll find too with like marco when you're using when you uh not this one this is mar
[02:35:10] co six sorry marco six is crazy if i've showed you the javascript for this one you guys will just like 1.6 kilobytes like that's
[02:35:17]  it it still works trust me we we don't have to get into marco six but let me see if i can find the marco five version of it marco uh
[02:35:28]  what's it marco hacker new maybe i don't have the link offhand any right now this the the problem with this one is i made it with the marco
[02:35:41]  team so i don't actually have it at my fingertips i think it's uh marco hacker news it doesn't matter it works the same way as quick and it's about
[02:35:51]  the same size because marco 5 is about 15 kilobytes so like you see when you have a good mpa with streaming the bar doesn't flicker because it
[02:36:01]  can get there so fast but it is still reloading pretty much everything right so there is there is like a trade-off here it's not it's not it's probably
[02:36:09]  if you're going for mpa it's probably pretty good and like who cares right um then you have stuff like server components which like solids version here which is like 5.
[02:36:22] 8 kilobytes like a little bit bigger and that and it it's a it's a spa style thing but it's actually an mpa that's why we have
[02:36:30]  so little javascript here so it's like it's like the hybrid thing this is ideally where you want to get to technically this is that as well um what happened
[02:36:40]  technically this is oh weird something something the the slash route isn't working the catch-all in the slash route isn't working on deploy i think i might have found a
[02:36:59]  bug i think the slash route is like just messing with things top level but uh essentially because that worked locally essentially the thing is we're still paying the whole cost of react and
[02:37:13]  next which is a little bit expensive and then you get the client-side stuff which is innately just slower uh in these kind of scenarios just because they are like solids version
[02:37:22]  i mean solid svelte's version are gonna be small so it's like 13 svelte's like 18 but you know huh anyway so like there's a whole
[02:37:30]  scale of solutions here kind of like going back to my scale draw yeah i mean i'd love to see the movies app built in this my my gut feeling though i mean you
[02:37:44]  already know what the answer is going to be it's going to be smaller the the not the next version of this of the movies ever now after you navigate a couple pages about
[02:37:51]  190 kilobytes this version should stay fixed maybe at about 95 kilobytes so like i think it would be better but you know we'd have to build it uh
[02:38:06]  yeah this is interesting hmm i i need a second you know what i'm gonna be i'm gonna be right back um i know i usually don't take a break on
[02:38:26]  stream but i actually need i need a moment here so i will be right back and uh just give me like two minutes Thank you. Thank you. Thank you
[02:40:11] . Thank you. Thank you. Thank you. Thank you. All right, yeah, yeah, sorry about that. Hey, we lost like 30
[02:42:08] , 40 viewers, but you know, it is what it is. Yeah. Okay, no, okay, how should I put this, they can definitely create a smaller
[02:42:29]  bundle than Next12 if you have lots of static pages that are very large. This one's very easy because it's literally a comment or story component rendered like 10 billion times
[02:42:42]  on the page, but like if you had like a lot more different static stuff, then it's only the client component they do. So what I'm saying is it
[02:42:53]  can't make your bundle, your base bundle size any smaller, like the smallest size you can make in NextApp can't get any smaller, but it can make it grow
[02:43:03]  less fast, it scales better, it like changes the slant of your curve. And I don't even like that analogy because it does depend on interactivity anyways,
[02:43:19]  like, but ultimately once your page gets to a certain complexity with a certain amount of server stuff, report like stuff, you will easily offset the 8 kilobytes,
[02:43:35]  it costs to bring in like the next 13 runtime stuff. So like, it's like, I wouldn't worry, like, this will make things smaller. It's
[02:43:48]  just like, it's just like, it won't make it any smaller than, than like, Hello World and Next Today. You build an app and Next Today, it
[02:43:58]  might be like 200 kilobytes, and then you do it this way, and it's like 120 kilobytes. Do you see like, and it scales better
[02:44:08] , because that, as that 200 kilobyte app becomes 250 kilobytes, maybe that 120 kilobyte app only becomes, you know, 130. Like,
[02:44:20]  it just, that's sort of where the benefit is, but the, the starting point post looks like it's about 84 kilobytes or so. Like that, like
[02:44:27]  if original Next, this, the baseline was 80, now it's 80, maybe, yeah, I guess it's like 76. Like there's a bit of, I
[02:44:35]  got to negate these small components here, but it's like, it's, it's like the, the base number has, has gone up a little bit to allow
[02:44:41]  better scaling. Yes, I do need, uh, a link for all my hacker news demos. We are going to run this through the death test. I mean,
[02:44:54]  that's what we do here, but. Yeah, I mean, and it actually needs the VDOM to, to do the page to page diffing thing, right
[02:45:08] ? That's like the, that's, I mean, that's an interesting argument that I, I mean, I could see someone making a router like we do a
[02:45:15]  solid router without any actually reactivity. So you wouldn't like need solid runtime to do the router. Um, yeah. Yeah, this, this is, this is
[02:45:28] , this is a good explanation, sorry, I put that down too much. I'm going to make a question on the base size is similar, but on the bigger apps
[02:45:33] , it's going to be smaller. Exactly. There are two solid apps. One with Astro and one of the solid start outlines. Yeah, exactly. The solid start
[02:45:41]  outlines has client side routing. That's kind of the difference. Um, where the Astro one's like the MPA. Okay. Yeah, I get what it
[02:46:01]  is. It's just like one of the benefits of, of, of partial hydration is the ability to solve the double data, like sending the information twice in the HTML and
[02:46:16]  is serialized. And the reason for that is it actually saves time rendering on the server and it's saves time, um, like processing and crunching it and sending
[02:46:25]  over the network. It's, it saves every thing of it. And, um, this is like one of the places. Yeah. You know, like if you want
[02:46:36]  to understand what I'm talking about, let's, let's, let's do this. It's time page speed, web dev insights. And we can't trust this
[02:46:43]  completely, but I just want to like. Um, you see this one page that I keep on doing over and over again. That's very brutal. I, let
[02:46:52] 's, let's pick something like, um, which, which, which asked, did I, did I close this down yet? What's, what's the Astro
[02:47:01]  one we're using here? Astro Netlify app, whatever. Let's, let's pick this one. Right. And let's put it in, in
[02:47:08]  here. Right. And do the, the, the terrible page. I think this is it. Let's, let's analyze this. This page is designed to be brutal
[02:47:19] . Okay. And the reason it's, okay. Did I, did I get that wrong? I can't, let's, let's, let's double check.
[02:47:30]  I got that to get that wrong. Yeah, this page has 1,315 comments. Let's, let's try again. It's, it's possible that
[02:47:39]  PageSpeed Insights just doesn't want to give me this page anymore. Um, because of how brutal it is. Yeah, they're not like, okay, let
[02:47:49] 's, let me pick another example. Um, to show like an MPA with partial hydration. Uh, let's try, um, Marko 6. Okay.
[02:48:00]  It doesn't really matter the exact numbers. It seems much, might plus or minus five or even 10, but like on different runs. But I want to, I,
[02:48:11]  the reason I want to point this out here is that you, they, they do kind of, even PageSpeed has problems. It doesn't see streaming. Like there
[02:48:18] 's, there's, there's issues with it, but like you can kind of ballpark here where you're sitting at. So let me take something else. Let
[02:48:26]  me take, uh, let's take, um, let's take, let's take, let's take the next 12 example. Okay. Cause that's the theme of
[02:48:37]  today. Yeah. Interesting. Oh, I didn't notice any API issue with these, I've done this a dozen of times on, on stream, but it's
[02:48:48]  like, uh, PageSpeed doesn't want to, isn't playing ball with me right now on these, on this one. It's funny cause it does seem to
[02:48:57]  load, um, in the browser. I wanted to, we could, we could also use web dev dot measure for this if we want to. Well, yeah,
[02:49:12]  the, the thing is, but it only the props, I want this, the whole thing. So if in our case of our toggle, there's no props that get
[02:49:20]  passed in really. Okay. Okay. So next is 46. That's about standard here. Come on. Give me, I just need to get like one of the partial
[02:49:31]  hydration demos actually. Um, it doesn't matter which one we get, like they're, they're all about the same. Okay. So let's, let's
[02:49:41]  hopefully get the Astro one, uh, error document request. Let's try. It's another one. I didn't tried Marco. I tried Astro. Um,
[02:49:51]  I really wanted an MPA one. I mean, solid's version isn't too bad. Solid HN islands. It's pretty good too. Let's see if we
[02:50:03]  can get this. Like this is like, it doesn't matter if it's next remix scores the same. Solid starts score. Actually, I made it better. Um
[02:50:19] , I think let's see if I can get the solid start. When I actually did, I, I grabbed Marco's data serializer and it actually made a difference,
[02:50:27]  which was actually really quite cool. Um, let me see if I can get that one. Solid Hacker news, Nutlify edge. This one, it's
[02:50:37]  not much though. To be fair, I'm, I'm, I'm, I'm, I'm, I'm, it's going to be still in the ball
[02:50:42] park of this. That, come on, come on. This is, this, this used to, this used to work quite well. I feel like someone's caught
[02:50:58]  on to my, my shenanigans. Unknown error. Uh, yeah, someone's caught on to my shenanigans. Uh, let's, let's,
[02:51:14]  let's, let's, let's, uh, let's drop in our, while we're waiting, we can also drop in our new next hacker news one. I
[02:51:25] , what I'm really interested is if this actually ends up making much of any difference compared to, uh, okay. Yeah, there's the, see the solid one's
[02:51:39]  54 and over 46. Um, we used to be 46, the new data serializer improved things like just the tiniest bit, but it's not, it
[02:51:47] 's not, it's, it's, it's, it's not like a significant kind of thing. Like, but it's funny, none of the islands demo ones
[02:51:55]  seem to want to be working, uh, like MPA ones seem to want to be working right now. Let's try, let's try Astro Edge. Let's
[02:52:03] , different one. Let's try that one. Um, let's do this one. Yeah, Dave did make one, but it actually was just as much trouble.
[02:52:16]  Um, I had, like, I had some issues with it. I, I haven't worked with Dave to actually, to solve those. But, uh, I
[02:52:25]  mean, what we're doing, I mean, I got lots. Anyone, anyone, people in the crowd want to see, you know, we can do remix.
[02:52:37]  Um, okay, okay, cool. Here you go. The RSC one got a 54. It actually improved over the thing. So the actual partial hydration did improve the
[02:52:59]  startup speed. Okay. Um, but it could be the streaming that making a difference, because what I'm actually noticing here is that the first contentful paint for this
[02:53:12]  run is actually pretty far back. And, oh, actually, you know what? The page aired out. And that's where it responded. So we can't trust this
[02:53:23]  result. This one's fine. Okay, yeah, I, I, we're just not going to get it today. That's unfortunate. Oh, well. This
[02:53:39] , this, uh... This is, uh, yeah, I don't know. Usually, usually this works much, much better. Remix got a 39. That
[02:53:59] 's, that's not a good run. It should be more like a 46. Um, that's... But I'm not making a big enough emphasis, because what I
[02:54:12]  was trying to show is that Remix, um, next, typical SSR, you're going to get scores around 46. Um, even solid start, although I
[02:54:21] 've managed to, like, edge it up the tiniest bit. Svelte kit also around 46. Let's see if we can get Svelte kit in
[02:54:27]  here. Um... Svelte. Let's do it. Like, you know, like, in this, in this range on this, on this test. But
[02:54:39]  then when you get to the, the, the Astros and the... Uh, we can try Quick. Quick, Quick is also another one of these partial hydration. You
[02:54:48] , you see, like, a whole different category of, uh, Quick Hacker News, Quick City. Where is it? Quick City, there it is. You
[02:54:58] , you see, like, a whole different category of performance. Like, for some reason, all the fast ones don't want to load for me today, which is funny
[02:55:07] . Let's try this one again. Nope. Nope. Remixed. Yeah. I don't know. It's, there we go. Svelte 43,
[02:55:23]  like, you can kind of see, um, you can kind of see the pattern, um, of the range of where single page apps. Kind of, kind of
[02:55:35] , well, we got one other server component demo. Let's, let's, we got Hydrogen, right? Let's do Hydrogen. Let me get Hydrogen
[02:55:42]  in here. I, let's, let's get Hydrogen going. Oh, Fresh is another one we could try if Quick doesn't work. Okay. There we go
[02:55:51] . Quick City 80. This is, this is, this is, this is what I, I wanted to kind of get to. When you, when you get a
[02:55:59]  Quick City, uh, Solid Islands, um, uh, including the client-side routed version. When you get, like, uh, Marco, or Marco 6,
[02:56:11]  or Astro, you, you get scores in the 80s, not in the, not in the 40s. And, it's interesting, because React server components
[02:56:21] , Hydrogen, 59, yeah, is kind of, oh, there's something wrong. The Quick page loaded, right? Yeah, the Quick page loaded. Yeah,
[02:56:30]  I'm just not getting, I'm just not getting it today, unfortunately. What, what, the thing is you'll find, what I'm finding here is the React
[02:56:37]  server components are, are an improvement over, um, definitely an improvement over the spot, single page apps, but they're not seeing the same kind of wins that we
[02:56:54] 've seen from the islands on this sort of demo situation, where we're talking about largely static data serialization type stuff, um, you know, like, you know,
[02:57:05]  like, like these kind of hacker news things, where you have large portions of data, um, although Solid's server components actually do that. I mean, they do
[02:57:16] , um, score similar, but we're not, we're not actually getting in here, um, unfortunately, for some reason. Let's try one more time, I
[02:57:23]  just, it's not, that one, islands, okay. Anyway. Yeah, I'll, I'll, we'll share the RSC version, um, definitely
[02:57:37] , to it. I mean, yeah, unknown error. Yeah, it's so funny, because if I open this up in a tab, the page will load, you
[02:57:51]  know. Let's see, so I tried the Astro one, I meant to try the, this one, but it, it's the same. Yeah, I
[02:58:05]  mean, I mean, maybe we can visually see it. You know, let's, let's, let's, let's, let's just, like, let
[02:58:15] 's just do this. Let's, like, slow 3G it, and look at a performance profile, and just kind of understand what the, what the, the loading
[02:58:24]  response looks like. Sorry, I, I tapped the wrong thing, I meant to tap this. Looking at the profiler here for a minute. The, the error
[02:58:40] , um, the RSC one didn't actually have an error, except for when it was deployed. It actually worked fine locally. I think the error is actually the,
[02:58:50]  the top level, uh, catch-all. Yeah, you can actually see, you can, you can actually see, what's this? Oh, I'm not in
[02:59:01]  an incognito window. That's, that's my bad. We need to go here, and we need to drop in. The right URL. Yeah, let
[02:59:13] 's, let's, I, I want to, I want to see if we can actually see a difference in the timeline in, oh, interesting. Yeah, so this
[02:59:24] , I think this page actually is just too large, and it's timing out, um, it's timing out the edge function. Yeah, yeah, yeah, it
[02:59:35]  definitely, it's, it is definitely the best way to do it. And, but you, you, you also need to simulate the network slowdown. So,
[02:59:50]  it's tricky, because, like, I mean, I mean, look, we could still learn some stuff here by looking at the performance profile of something with, you know
[03:00:00] , 300 comments too, right? Where is this? Let's, let's, let's load, let's load this one. Sorry. Let's load the,
[03:00:10]  the one with, uh, 329 comments. Oh, sorry. Stories. We can, we can, we can still see the difference between the server component execution and
[03:00:32]  not. Um, maybe I should do a little, I don't like the CPU throttling if I can avoid it, but it might be necessarily that can emphasize the
[03:00:44]  difference. Um, let's run this one more time. I felt a little bit slow. Interesting. What is going on? I think that's just their service worker
[03:01:05]  fetching stuff in the background. First paint is about here. Okay. Let's look at, um, let's look at this under the same scenario, circumstance. Let
[03:01:19] 's run it. Okay. One more time. Yeah, that's interesting. Because this page is loading faster on the next 12 version. There. Done. We
[03:01:45] 're like hitting some kind of cache and then here it's actually noticeably slower. And this is not, there's no CPU throttling here. I'm just
[03:01:58]  literally deployed to Purcell and I'm getting like, getting very different. Like it's taking the next app like over a second to respond here, which is weird.
[03:02:11]  And the first paint comes in here, which isn't, which is good, but it's 1100. And then we're getting, and then we're getting L
[03:02:25] CP at the same time. That makes sense. Largest complex chain. And then it, and then how does the hydration timeline look like? We see like a whole bunch
[03:02:33]  of little JavaScript things, but document loads here. So like, this is the core of the JavaScript work right here. That happens kind of from around the end of the
[03:02:43]  document here, this kind of zone. Let's compare that timeline here. As I said, they're done at like half a second, but the first paint doesn't happen
[03:02:52]  to here, but it's like much, it's 500 milliseconds. LCP is 500 milliseconds at all as well. Yes, it is. And then we're doing a
[03:03:01]  whole bunch of hydration work here. And it's more longer processes and more blocking. But we're talking like 11, 24, so 35, 15, and another like
[03:03:16]  10 and change, like 40, 50 milliseconds here. And this timeline, 7, 4, yeah, I mean, that's about 12, another gap. And then these
[03:03:31]  are all about 6 to 5. So what, 1, 2, 3, plus 20, 60, like port messaging. But I think this stuff is non-block
[03:03:40] ing, which is the difference here. But it doesn't look like it's actually doing less work. I want to take a look at something kind of, let's look
[03:03:49]  at the Astro version and like see if the timeline's like any different. It's just interesting to me. Maybe less to people. But I wanted to kind of
[03:04:02]  understand what this looked like. Okay, let's refresh in here. Okay, so now we're responding in 300 milliseconds. And we got a big layout thing happening.
[03:04:29]  I don't know what's going on there. And then a whole bunch of hydration here. These processes are very small. I think each island is doing like a,
[03:04:36]  I can't, oh, but you can see it here. 36, 40. This whole timeline's like 10 milliseconds. And then over here, oh, actually, huh
[03:04:47] . There's more stuff coming over here. What is this? Because this is the main entry. Interesting. But it's, it's already clocked off here.
[03:05:02]  This is the idle stuff. The Astro version has idle hydration. And this is happening in the background here for about, I don't know, another 30 milliseconds.
[03:05:12]  Plus whatever this is. Okay. I just, it's interesting to see the difference between these sort of timelines. Okay, I'm going to try loading this one. Let
[03:05:24] 's see. Stories. Let's try the Solid Islands version. Let's flick it. This one's not using streaming, I believe. So it might be a little
[03:05:39]  bit slower. Where are we? First paint around 300 again. Yeah, 326. And then, where's the hydration work? Oh, wow. That's, that
[03:05:53] 's small. Five milliseconds? Did I get that right? Huh, okay. Yeah, okay. Yeah, that's interesting. It feels like there's a lot more
[03:06:06]  overhead and scheduling on a lot of these, like, partial things. You'll see that there's, like, the, like, when we did the original Create Next,
[03:06:13]  like, the original Next app, it was, like, a few big blocks, but it, you know, is a chunk. And most of the partial solutions are much
[03:06:20] , much, much more sliced. That's interesting. I mean, I'm going to do the solid one as one last comparison here. Just the normal solids aren't
[03:06:30]  not with the islands or anything fancy. Oh, you can see the streaming there for a second. Let's, okay. There we go. Oh, wow. The
[03:06:48]  streaming made a difference there. The first paint was only in 120 milliseconds. But, again, it's just because it showed the bar sooner. But, finishes up again in
[03:06:57]  the 300s. But, yeah, the hydration cost is more significant here. This is, it's a paint, and then there's this big chunk of hydration.
[03:07:08]  Oh, it's only about six milliseconds. Oh, that's interesting. I don't know what to make of this, honestly. Yeah, well, for streaming, the
[03:07:18]  first paint gets unlocked from the API response timing. But, yeah. It's, it's, yeah, I don't know. I think we need to do,
[03:07:34]  figure out new ways to test this stuff. Obviously, my page speed in sight was not very useful. So, yeah, it's, it's interesting. Okay. I
[03:07:43] 'm going to, I'm actually going to drop quick in here just for a second. Because I know they, they don't load any JavaScript. So, their hydration should
[03:07:53]  be fairly minimal. Just so that we can understand, like, six milliseconds of hydration, no one's going to suffer you. Oh, the streaming there, again.
[03:08:03]  No placeholder, but there's a streaming. Where's the first paint? Yeah, streaming means first paint happens before 300 milliseconds, right? Yeah. Not that much
[03:08:16]  before, but let's look here. Yeah, there's, there's basically no hydration work here. It's like, it's like a millisecond or something of
[03:08:29] , like, scripts running. Yeah. Page like this is too simple to see anything. That's, that's basically the problem. In the past, I've been able
[03:08:37]  to use large versions of this page to actually see hydration costs. Because once you're in partial here, we're, we're, we're, we're generally only
[03:08:45]  talking about, like, for a page like this, like, five milliseconds. But if you're not partial, it's, like, ten times as much. But,
[03:08:52]  um, we're not seeing the same with the React version exactly. It's harder to see because it's broken up into so many little pieces. Yeah. I don
[03:09:04] 't know. I was hoping the page speed would give us better, but, yeah, I can understand a little bit at least why there's, like, confusion here.
[03:09:13]  You know, like, it doesn't seem like a clear win where, like, my experience with this stuff, it has been. Because, like, obviously when you do
[03:09:22]  islands and, like, the Astro and Quick examples and Marco examples, you clearly see the benefit. Even the solid version, which has client-side routing, too
[03:09:29] , you actually see the same sort of benefit. This is what you, you kind of, like, are thinking, maybe, like, with the server components. I think
[03:09:38] , I think, I think what's interesting is, at the beginning of the stream, I was sitting here and I was, like, how do I explain the importance of
[03:09:46]  server components, right? Yeah, this, I was already trying a page that had 1500 comments and it was dying on us. So, like, the number of comments
[03:09:59]  isn't, like, we can't, the reason I was doing the 300 comment page is because the, the, my standard page was, like, timing out certain solutions
[03:10:08] . Right, but the thing is, like, yeah, okay, so let's, let's go to the next stage here. Let's bring back Excalib
[03:10:21] ur and, and, and talk some stuff again. I think we're done playing with, with Next right now and we're done. I don't, I mean,
[03:10:28]  I don't think we're going to see another, one, yeah, PageSpeed Insight is just not working for us today. So, let's, let
[03:10:38] 's, let's, let's, let's get back to our, our Excalibur fun and talk a bit about this statement because people are still kind of thinking
[03:10:50] , okay, yes, static sites. So, you could make that argument, but let's, let's talk a bit about optimization and nested routing. Right now
[03:11:11] , some, there's a comment earlier about context and people are, like, blah, blah, blah, context. The reason context is an issue here is that, um
[03:11:20] , pretend, is everyone here familiar with nested routing, right? That's, like, when you have, like, um, I'm going to change some stuff here
[03:11:31] . I don't want a background, I want it transparent. And I don't want rounded corners, I want edges, okay. It's, like, when you
[03:11:39]  have a layout that's kind of, like, you know, uh, let's see the best way to do that. I'm going to do it like this, I
[03:11:47] 'm going to do this, I'm going to give it a different color. This one's going to be this, and then we're going to do this. Okay
[03:11:59] , here's my typical silly nested router, um, look. And what I'm getting at is, like, you have three levels, essentially. This is, like
[03:12:10] , your nav sidebar, this is your page, and then this is, like, some, maybe, tabable content that swaps. And the thing is,
[03:12:21]  in the solid version right now, we're literally, like, the whole thing with the nested routing is, like, if you, if you have some tabs here,
[03:12:34]  you know, I can add a tab bar right here. And this tab bar can help us switch from tab A and tab B, okay. I'm just, like
[03:12:51] , excuse my terrible drawing, but we got tab A. Oh, it's just, like, the fonts, just, whatever. Oh, now it won't resize back
[03:12:59]  up. It doesn't matter. Okay, tab A and tab B, okay. We swap between these two, right. And then it just swaps the screen section
[03:13:06] . In solid start right now, we're literally redrawing the whole page and then just sending this in. So we're refetching all the data and everything works
[03:13:18] . Context works. That's right now. But if you wanted to only render this, there's a little problem. I mean, you'd be, like, okay
[03:13:31] , that's fine. But then what if there's some kind of data? Like, what if this outer page here has a context, right? And then you render
[03:13:38]  it all on the server and you don't serialize the data across because you don't need it. You only need to serialize, like, the islands data, like
[03:13:48] , the stuff that you actually pass into the interactive components. That data is gone now. It didn't even make it, like, maybe it made it to the client because
[03:13:59]  you needed the, you know, it's in the code or whatever. The proceed this, the store. But now you update, you click around, you play around
[03:14:06]  and you update data in the store. Now the data in the store is in a different state. When you go into this tab and, and go to re-render this
[03:14:14]  on the server, it does not have the data in the context up here. Like, that's updated on the client. You'd have to send the context back with
[03:14:23]  the request for this to actually know, like, be able to read from it. This is, this is kind of the root of the context problem. Because like,
[03:14:34]  if you want to just only render this, and even if you want to render the whole page, there's still this awkwardness of the fact that the context could have changed
[03:14:41]  in the client. So like, the thing is, if you embrace this thinking, completely, and assume that this is going to be independent, each one of these is
[03:14:54]  going to be independent. It has an interesting side effect, because now, sure, you can just render this independently, but more so, when the original request comes in
[03:15:04] , in theory, you can render all of these independently. So you could actually parallelize, not just the data fetching, but actually, the rendering of the whole
[03:15:13]  tree, because there's no concern about context. Now, in solid, this router, we actually pass the data through to the next nested layer. So like, while
[03:15:31]  it's not blocking, and we can let you just do it all, we also give you, we do call the data functions from top to bottom. So you could
[03:15:38]  make a dependency between the different layers, like you could be like, oh, wait on the fetching of the first set of data, like, get me the user on
[03:15:44]  this part, to actually fetch the user details, you can make that link, even though it's non blocking, like, if you don't make the link, it just
[03:15:52]  fetches them all in parallel, you can actually, like, chain the promises. But if you are saying, like, I'm going to parallelize all these fetches
[03:15:59] , you can't actually chain the promises like that, you actually have to be like, no, no, actually, we're not going to do that. We're
[03:16:08]  going to say that if this needs user, and this needs user, they both need to fetch it, of course, you don't want to fetch, you don't want
[03:16:15]  to fetch the, you don't want to fetch the user twice, right? You don't want to like, if this needs user, and this needs user, you don
[03:16:20] 't want to fetch it twice. So you need to have a shared cache, so that even if they're parallelized fetching, this will start running first, get to
[03:16:28]  something async. And then like, let's another process take over like this one and continue rendering, when this one hits it and goes fetch user, it should be
[03:16:34]  like, oh, no, this one's already fetching user. So how do you do that? Well, one way you can do that is patch global fetch. Right
[03:16:41] ? I'm hoping this makes sense to why they did the API approach that they did. It's because they can't share it. So it's, I mean,
[03:16:52]  to be fair, we've been doing this kind of caching in like React query for ages on the client side. But this is essentially the reason for this, they
[03:17:02]  need like, while it's in flight. So like, if it's fetches by itself, there's nothing in the cache there, it'll grab the user and do
[03:17:10]  it. But if it's fetching them both in parallel, it'll be able to reuse the same fetch for both of them. That's why they did it. But
[03:17:17] , so that's a good optimization. So, and this is an important optimization. The second level of optimization that I want to talk about that I don't believe they
[03:17:28] 're doing right now, and we haven't talked, but I want to kind of bring into people's, yeah, it's, this is probably not a great idea.
[03:17:38]  When I talked to them, they said it was the best of many not great ideas. Like, they had like five options, and they've debated them for a while,
[03:17:47]  and that's just, they were just like, that seems like the least bad. I've talked to people who work on browser type infrastructure and standards, people like Luca
[03:17:57]  from Dino and stuff, and they have much different opinion of what the least worst option should be. But, you know, it's, and I'm sure anyone who
[03:18:06] 's working on Bun would have the similar opinion, you know what I mean? Like, this is, yeah, you know, it's, there's other ways.
[03:18:17]  But in terms of ease and delivering the package, I get where you end up there. But now let's, let's, let's put our server, our client islands
[03:18:23]  in here somewhere. Like, let's, let's put some client islands in here. I'm just arbitrary, I'm throwing some client islands in here. Okay. Now
[03:18:34] , what I wanted to kind of point out is, on initial render, you do need to render all of these, because you need, you want to show the whole page
[03:18:43] . And when you go to a new navigation, like a new one of these, you're going to want to render these as well, because you, again, want
[03:18:50]  the page to show up and not, like, do some weird thing where you need the JavaScript to render it and stuff. Like, you want to, like, server render
[03:18:56]  it all. However, there's, there's a difference in semantics between what I'd consider, like, navigation and reload semantics. And I think this is
[03:19:05]  an important mechanical piece, because, like, if you're on a page and doing that search bar or whatever, and you're actually reloading, perhaps, like, in
[03:19:12]  that case, it's not great, because we replace everything. But there's other things with, like, data mutation, like you're updating some data field on, like
[03:19:19] , a user, like, this is a user panel. And you're, you know, you're updating a name, and it's a client component, and you
[03:19:27]  show the name out here. So you, like, you want to, like, let's, I don't know the exact reason, but let's say you want to
[03:19:32] , like, refresh the data rather than replace it. This is the one thing that, like, an inner HTML doesn't solve. You actually need to diff it if
[03:19:39]  you actually want to, like, do the swap, because if you, if you just did a inner HTML, you'd lose all this. Even if you had a smart
[03:19:45]  way of doing an inner HTML where you just diff, like, diff the islands and look for them, you actually want, like, there's so much state. There is
[03:19:53]  potential still for browser state out here that you want to preserve, okay? So this is why you have a diff. But what's interesting in that world is when you
[03:20:00]  diff it like that, when you hit a client component that you've already seen before, you don't replace it, right? Because you want to preserve the state in this
[03:20:10]  component. So if you think about it, in this scenario of refreshing this green panel and getting the same client components back, you don't need to render those client components on
[03:20:24]  the server again. Right, because you're going to throw it away anyways, you're going to use the client component that's there. What you do need is the
[03:20:32]  new props coming in, because the server might change the props, so the client component might change, but you don't need to, you want to keep the state of it
[03:20:39] . So you're not going to, you're not going to, you might not need to actually render it on, on the server. So what's interesting about this
[03:20:46] , and the reason I'm bringing this out, is in theory, on a refresh type operation, you actually render the HTML on the outside, and then only the JSON for
[03:20:56]  this. And I think that's kind of an interesting, like, thought. Sorry, quick question came in here. How do you promise to wait on each other with
[03:21:08]  the nested routes? They don't in the next version, because they've decoupled it. You have to literally just fetch them all independently, and then use a
[03:21:17]  cache so that they share the same request. So if it's already in the cache on the nested route, then you're fine, and you can just chain it
[03:21:26]  the way you want to, but you have to make the fetch again yourself. Okay, so what, but here's an interesting thought experiment for people who are worried about the
[03:21:35]  scalability of this, because obviously this benefits mostly static pages, and you have less JavaScript and all that. But what happens if you do this? I just want to throw
[03:21:44]  this out there for people. What happens if we do this? What happens if the client component basically is this whole section of the route? This is just an extreme example
[03:22:02] , but I wanted to show this, because I want people starting to think about this kind of scenario. Now, in theory, if you did a mutation here, and
[03:22:14]  totally go back to the server, kind of the same way you would, you know, like on the remixy kind of style or whatever, or whatever, like, when
[03:22:24]  you do a mutation in this zone, what is this green server component section returning? Well, there's no markup, because it's literally on the client component,
[03:22:32]  if we had that optimization, then on refresh, we don't need to rerender the client component. In fact, all we need to do is serialize the JSON props
[03:22:38]  for to come in. And the reason I want to show this and emphasize this is because in theory, in this scenario, all you're shipping is a JSON API.
[03:22:51]  We've actually scaled our RSCs back up to a single page app. Does that make sense? Because you don't need to render this on the server or
[03:23:06]  send it. And if you're just swapping this out, and this already exists, literally the operation is like, here's the new props. No, I was hoping
[03:23:18]  this would make sense. I've just been thinking about this a lot because there is the ability with this approach to use as much interactivity or as little as you want
[03:23:38] . And what I wanted to show here is if this section just becomes the most interactive, crazy, spa-like thing, you can still basically scale it to a JSON API
[03:23:54] . Yeah, it is a bit, but the key, key, key difference here, and we brought up the Astro example at the beginning, where someone's like
[03:24:07] , oh, it's like putting an Astro app in your thing. It is a bit, except when you consider that the whole thing works like a client-side
[03:24:16] , like preserve state like a client and does all this sort of stuff. Like, I already mentioned when we use solid movies here, you're going to have a hard time
[03:24:28]  telling that this isn't a single page app. Like, I chose a loading indicator that looks like the browser, but that's not what's going on here. It
[03:24:38]  feels like it. You could have animation, you could do all the single page app type stuff. So what I'm saying is, like, if you could optimize the
[03:24:49]  parallelization so that they're not overworking, like they're not getting blocked, and scale up the JavaScript to where you need it, so that maybe you're only,
[03:25:02]  like, it doesn't have to take the whole thing. Maybe you have indicated, you know, cached static HTML parts in here or something, but essentially, if
[03:25:10]  you can scale it up to that point, where for certain things you actually only need to render the JS as part of this thing, your experience scales from no JavaScript to all
[03:25:19]  the JavaScript seamlessly. It doesn't feel like going from an MPA to an SPA. It actually feels like the whole thing is an SPA, except it's not
[03:25:29] . You don't suffer the performance. It is a bit like a React SPA, but what I say define a SPA is a routing, and that routing aspect
[03:25:46]  is the whole app. This is why, when I drew that diagram here, I felt like it really does have the potential to cover most of this range if implemented efficiently
[03:26:04] . We just need new patterns around caching that aren't based on JSON caching, but are based on view caching, like this. I mean, it takes
[03:26:16]  a different kind of mindset to understand here, but this is how you get your MPA performance and your SPA performance. like, in a way that, again,
[03:26:31]  there's a big ifs into pulling off the developer experience, figuring out the right primitives, doing all that. But in a way that, like, doesn't sacrifice
[03:26:41]  it in necessarily in that really awkward sense of like, we need all the JavaScript on the client. like, you can in parts, but you don't, like,
[03:26:53]  you don't need it. Well, I don't think, I mean, it could, I did the mental exercise whether it could cover the whole spectrum. The,
[03:27:08]  the, for me, there's a DX concern when we get into here, that I haven't quite solved, but it might be solvable. Well, it's
[03:27:22]  funny you mention Vue because Vue has stuff like, uh, was it, uh, keep alive and stuff, that kind of mentality, you're fine, it's
[03:27:29] , you're starting to see show up in React RFCs. They're, they're now, they're now thinking about this. Um, it's funny because everyone
[03:27:38] 's like, oh, what about off screen? You know, I was talking to someone the other day about it and, and then, and I'm like, yeah,
[03:27:43]  yeah, off screen. I'm like, Vue has been doing this kind of stuff for a while now. Um, so yeah, it, it is interesting to
[03:27:54]  me. I just wanted to kind of point out that I think that there's problems to solve. Like I, context in this model is kind of a nightmare, but you
[03:28:03] , you see, if you can figure out a way to solve context, I mean, it might involve a little bit more back and forth data communication. Maybe that's why
[03:28:17]  React serializing more stuff than they should. Maybe there's a right balance to find, but essentially if you can figure out those elements, this model has, has legs
[03:28:31]  is really what I wanted to say. Because I feel like, um, even like when we were looking at our diagram here and we were talking about going from this to
[03:28:41]  this isn't like what you want going from small pieces to big pieces. what you want is just to have the appropriately sized pieces where you need them and have it feel
[03:28:56]  seamless. And to be fair, going from this to this can do that as well. But does it let you author in a way that, um, empowers you
[03:29:11]  to do so? So that, that, that, that, that's, that's what I'm exploring. And for me, this has largely been, you know,
[03:29:17]  an element of the DX and UX consideration. And I wanted to just kind of point this out because I don't, I don't know if this is as well understood
[03:29:23] . I don't know if people are talking about this aspect of the server component model and potential optimizations and like what this looks like. Cause today everyone's like,
[03:29:34]  Oh, it's like most people are like, what is this? I don't know what this is. The people who do go, it's like, Oh, so
[03:29:38]  it's kind of like islands. I think I'm pretty sure the long game here is, is like, is the, that shot at having something that covers the whole spectrum
[03:29:50] . All right. I think, I think I'm good on this, this topic. Just a second. All right. All right. All right. Um, we
[03:30:17]  should probably start talking this week in JavaScript. I'm sorry that part went long, but yeah, is Twitch still alive? Yeah. Twitch is still alive. Got a couple
[03:30:28]  of subs in there. Thank you very much. Jeffrey Hicks. Subscribe to tier one. And taternator also with the prime sub. Um, sorry for
[03:30:36]  not keeping up on that. Um, but, uh, yeah, it's heavy topic. I, I, I keep chatting gauge. I can only kind of get
[03:30:46]  one thing going. I don't know. Anyone have any questions about this? I feel like I've been spieling a whole bunch. Um, I was just props
[03:30:54] . Like, get service. I props. I lost context that. Yeah. Yeah. Yeah. Yeah. Yeah. Next 13 is, is interesting, but I think
[03:31:00] , I think the, I think the ideas behind it are even bigger than the implementation itself. Any words in running two apps versus running an app twice? Huh?
[03:31:14]  Yeah. Yeah. I mean, that, that's, that's an interesting, because you, you, you're kind of going back here, right? Because what you
[03:31:20]  notice is two apps running an app twice. Um, what's interesting about this model is you run less of the app twice. Um, you could argue that with res
[03:31:34] umability, that, that last little bit of running twice, you can minimize, uh, from, from a startup, right? That's kind of like the, the
[03:31:48]  progression from my perspective. I, I do think it's interesting though, is that when the boundaries here are very clear, like I wrote it, showed here with the
[03:31:59]  brown versus blue, that, um, when you have that kind of clarity, it's interesting because, like, look at this, this is still writing two apps. Is
[03:32:10]  this writing two apps? Like, is there a reason? I think about React server components. Like, sure, we did use client and it kind of felt similar.
[03:32:20]  But like all the patterns, like you don't use hooks and all this stuff. Like, it's like a different framework wrapping React. So like, maybe like Astro
[03:32:28] , even if you look at that with the islands, like there's Astro wrapping your, your React components. Like we're, we might be kind of back because like
[03:32:37]  here we wanted it all to be the same. And then we're like, eh, that's not a good mentality. So then we come here and we're like,
[03:32:44]  okay, let's keep most of the stuff maybe only on the server and do this. We're back to writing two apps again, someone might argue. Right? But
[03:32:51]  I think the key, key difference here and where this fell apart is that these two apps don't do the ERB NG4 issue. like instead of having a
[03:33:10] , like instead, I can't draw it here, unfortunately, but like with this one, the JavaScript app is probably smaller than the Rails app. So you'd have like
[03:33:20]  this or even maybe something that looked like this sitting on your Rails. The difference here is that the whole, like the, the, the, the brown app has holes
[03:33:30]  where the blue pieces fit in. Like they don't, they don't actually, uh, like overlap. Um, which means that they fit, like they fit across
[03:33:43]  the boundary. You don't have, like, we used to avoid overlap in the Rails days by like just going, okay, client handle it. But this actually now is
[03:33:52]  like, I some, it's not, it's not server and client. It's server and isomorphic. Like, don't get me wrong. When I
[03:34:02]  see this, I start thinking here. I'm like, okay, if Rails is really, or sorry, if Rust is really fast on the backend, can I take this
[03:34:08]  mentality and have this Rust and have this be isomorphic JavaScript or whatever? Like, cause the reason I'm thinking this way is because for this model to work, the
[03:34:21]  blue parts have to run on both sides. That was the flaw here. The reason we have two apps is because like they actually handle the same responsibilities. They can't
[03:34:33]  delegate. If we can actually have no overlap here, a lot of that pain goes away enough that I could even argue that server components could be written in a different language.
[03:34:47]  As long as the, you could do the JavaScript components, like the client components or it's not client, they're isomorphic components as a full piece. I
[03:34:57]  don't know how to pull that off. If anyone has ideas, I'm more than open. Yeah. Yeah. Yeah. Yeah. I mean, this is sort of
[03:35:09]  what I was getting at. Yeah. Cause, but I'm saying there's a, there's actually a difference between this and the J query, even web components fall
[03:35:16]  more in this side than this side. The key is the backend here needs to have holes in it that the JavaScript fits in that runs on the server and the client. You
[03:35:27]  need both sides. It's gotta be, it's not, it can't be, as I said, it's not about server and client. It's about server
[03:35:36]  and isomorphic, right? There, there's an interesting question there, right? Cause you could also say like, wouldn't it be great if you could just pretend
[03:35:47]  it was like this blue thing and then end up like this, but that might have limitations to what you can optimize at least without a super smart compiler. Right. But
[03:36:08]  like, this is, this is what I was trying to say, cause I don't know if this is actually a good thing. Cause this is where I've been like
[03:36:18] , this is where the question of the, for the future kind of sits in here because like, um, like don't, don't get me wrong. Solid start
[03:36:28]  does this as well. Like we have like server functions and make that feel more seamless. Um, like that, that's the, in a sense, that's the single
[03:36:37]  page app mentality, but even quick recognizes that they actually want to server render the pages. And at that point you, I mean, I think there's a tension between going
[03:36:49]  like, Hey, do is that isomorphic experience actually the right experience? If, especially if most of this is Brown, like you can optimize for it. Like
[03:37:00]  it's, it's, it's tricky to say the least, if you're going to end up like all blue here in the end, then yeah, definitely. But
[03:37:08]  if you're, if you're not going to end up all blue, which is kind of like what we talked about all day today, you start asking if it wouldn
[03:37:18] 't be better if you could actually separate it and optimize the Brown part to be even better than what you could automate. Uh, I mean, there's so many options
[03:37:33]  here, micro frontends. Like I think micro frontends, I mean, you could handle the, this problem at multiple layers, um, from all the way from
[03:37:49] , from the bundler to the package manager, to the, to micro frontends. When you get to the need for micro frontends, I don't think there's
[03:38:02]  a great or better option. I think that's kind of where you are at. I mean, the hope is that you can find other ways to mitigate it beforehand.
[03:38:09]  So we need a reactive system shared on the front and backend. And if we isolate the interactive components, then we can write server components in any language. Yeah. I
[03:38:28]  mean, the thing is the server doesn't even need a reactive system. Not really. I mean, that, that part, like, so the isomorphic side,
[03:38:39]  it doesn't, but the second part, I agree. Like if, I mean, this is, this is, there is potential here is if, if we can isolate
[03:38:49]  the interactive components, we can, could write the server components in any language that I believe that. So, yeah, I mean, it's, it's, it
[03:39:01] 's, it's unclear to say the least. You know, I, I, I do think that there's an argument between these two mentalities. Like, even though
[03:39:14]  I, I clearly like show this as kind of like an evolution, the, the, these two mentalities are still very strong, um, right now. And I
[03:39:27]  think, I think it's interesting to me how much people are betting more on the SC Island side now. Like, it feels like they, like, they felt like they
[03:39:39]  exhausted this approach. So, as I said, this is what my interest of quick is because I, to a certain degree, quick is like, it could do either,
[03:39:48]  but it's like, kind of like it, the fact they can do this is the, it's unique part. Like the fact that you do this to this,
[03:39:59]  but it's unclear if that's what you want. So it's like, it's, it's, it's, it's one of those, I think this is
[03:40:06]  going to be very interesting in the next, uh, especially like couple years, but like, um, in terms of like how this develops, um, because there,
[03:40:16]  there, there's a fork in the road here again. Um, and I didn't see it until very recently because I, like, I think part of the friction with
[03:40:28]  React server components is actually on a DX level. I think that it fools you into thinking that you are doing it like this when you're not. And I think that
[03:40:39] 's, that's, that's kind of where the challenge is anyway. Right. It's like, I, I, I, I think the technology approach has tons of
[03:40:53]  room to be, um, optimized, but it's like I was talking about a minute ago, but I think, I think the tricky part is like figuring out what
[03:41:06]  the right, like authoring experience is. Cause we spent a lot of time criticizing like the old version of this, you know, and even React might've, some people
[03:41:21]  from React might've even criticized this version of this. Um, and yet, you know, there, there, there's some power here, especially on the server side
[03:41:33] , but we're, we're not going to see until we unlock it. So, all right. All right. Let's, let's kind of wind this into this
[03:41:39]  week in JavaScript. Let's, uh, let's, let's see if I can get that all, um, prepped up. So we're, we're good
[03:41:46]  to go. Um, I think, I think we're getting ready for that part of the show. Yeah, this is going to be an interesting one because I don
[03:42:04] 't know, interesting one for technology side, but there is a lot of, uh, hard topics to deal with this week. Um, I should have made notes beforehand
[03:42:20] . So I don't like accidentally jump into ones pre preemptively, but like, there's just, there was definitely, um, some challenges. Um, just my
[03:42:32]  position here a little bit. Um, some challenges, uh, a lot of, for me, at least interesting or difficult conversations. Um, so I want to figure
[03:42:50]  out. All right, second. Second. Second. Second. Second. Second. Second. Second. Second. Second. Second. Second. Second.
[03:44:32]  Second. Second. Second. Second. Second. Second. no this is this is awesome it's uh we've had you know slowly over time just better engagement and stuff
[03:45:11]  and it's great because it means more people in the chat more questions more more more stuff you know so let's let's uh let's let's just keep this rolling um
[03:45:21]  and get right into it okay let's go so i'd like to talk about this week in javascript um this week in javascript has actually been a tricky
[03:45:34]  one with a lot of challenging topics and i will try and get into them the best i can um in this time we have it's less about the tech but i do want
[03:45:44]  to showcase a little bit of stuff you know before we get too into it um which starts with um this reminder again about the new york meetup unfortunately actually i realize
[03:45:54]  now that i'm broadcasting it it is full we actually have a waiting list we had more interest in this event than we've had on any of our previous meetups and we
[03:46:02]  we only got a space with 60 people um and now there's a waiting list um hopefully everyone who signed up is is actually coming so um yeah i i'm i'm very
[03:46:13]  stoked for this event it'll be my first time going to new york so that's that's very cool um but yeah let's let's let's get it let's
[03:46:22]  get into things um i do want to also prop promote the space um which has uh got a bunch of great speakers um daniel from nuxt myself fred from ast
[03:46:38] ro michiko from quick and uh dylan from marco uh i want less javascript for christmas um so focusing on probably partial hydration all the great stuff it
[03:46:48] 's going to be twitter space come ready with your questions um for a great discussion between a bunch of framework authors and it's kind of interesting because a lot of people like seem
[03:46:58]  to like this kind of concept i've been asked repeatedly to get on these panels i did one for jamstack conf i did one for vconf i you know dot media
[03:47:07]  does them kind of periodically too where we get you know a lot of thought leaders um together and do it and because online formats have now become more popular it's actually really
[03:47:18]  easy to do this compared to before where you can get these you know conversations between you know experts people researching this stuff in real time and seeing you know how things are progressing you
[03:47:29]  know like conversations that might have never happened before like thoughts that only happened this last week you know or and see how that progresses and i mean the excitement around this event couldn
[03:47:39] 't couldn't be any bigger um i mean it's funny first thing i get is js equals coal but you know like people just talking about like you know getting the people together
[03:47:52]  like you know just like a lot of real positivity and people just being like great panel let's go let's go you know you know like like just excitement for being able
[03:48:03]  to see this kind of conversation possible but i i mean i want to point it out here and i wasn't the only one to point it out here do you see something in
[03:48:12]  common about this uh panel if only rich was there yeah um yeah i i don't know if uh if uh if kevin kevin yeah re uh kelvin reached out
[03:48:29]  um but uh yeah i mean we are where we are no react yeah i mean that's this is part of the where the perception is even like because server components i think fit
[03:48:39]  into this this thing but if you noticed all of these people have been very buddy-buddy getting on panels talking with each other's cross promoting all this stuff and uh
[03:48:50]  yeah you know it is it is uh it is definitely consideration there could be some more people who make this kind of event interesting but i'm i'm trying to get it like
[03:49:05]  look at the people you just suggested that who weren't there vicharis as well who who should we get from react to talk any any ideas who we should get from
[03:49:18]  react to talk at this event or who remix kind of yeah maybe get ryan florence or whatever or um michael or chance or you know josh larson
[03:49:37]  okay uh what what the this is a good event and i want to go to it but and i'm speaking at it but i want to i want to point something out here
[03:49:46]  that i i've had to deal with and i want i want i think it's an important topic um have you noticed that every single person we've we've looked at or
[03:49:54]  talked about is a white male and this this has been a challenge because people want to see this kind of content put it together and there there there there is a real concern
[03:50:14]  about this often as a speaker it's actually one of those things that's kind of hard to navigate and i i want to talk about this because like there's a decent
[03:50:29]  amount of concern here that's real like i'm talking about you know big names and it's real like fred was talking about this too because like you you you sign up
[03:50:44]  for an event and you're like and most of the time with events you don't know the lineup and stuff and you're just kind of like okay i'm going to
[03:50:51]  go with it you don't know what's going to happen and then you find out that you know representation is not that great sometimes you sign up for an event and i don
[03:51:01] 't feel like you can plead ignorance and this is one of the challenges like because you know if someone picks a topic like exactly who's going to be invited and this is
[03:51:12]  something i've been kind of struggling with and trying to figure out how to approach it i started thinking about all the panels that i've been on the last year and like this
[03:51:21]  is not an uncommon event i think what was really cool actually was that the jamstack conf one um actually um tried to diversify a bit um you know we had
[03:51:36]  you know and i hate to do this to jessica but like we had a female speaker for angular team our the host um sarah you know like tried to like
[03:51:48]  tried to kind of keep the conference uh you know have that you know panel not just be another one of these these sort of things but like it's funny when i got when
[03:52:04]  we posted up the jamstack panel um zach did from eleventy you know someone pointed out that everyone was was white um in that one that you know we didn
[03:52:16] 't do too good on the pigmentation angle and they're they're absolutely right um there is um there i mean you can look at numbers i mean if you're if you
[03:52:36] 're watching this stream i think only 1.6 percent of you are female according to youtube um just under two percent this is this is uh you know a pretty difficult topic
[03:52:53]  to to navigate right because you know i mean as ali pointed out i'm sure there's there's an overlap of speakers right it's kind of pointing out like this this
[03:53:05]  was actually after a different conference uh a release event here serverless is ready um launched and they had an all-male lineup it's a little different than a expert panel
[03:53:22]  because for for a number of reasons because well there is like there's maybe more variety on the type of conversation you want to have there's plenty of people who would be suitable
[03:53:42]  for the topics for serverless you know great great uh champions in this area so like that was definitely kind of an oversight blunder my understanding thing on this event because i
[03:53:53]  was also invited to this event was that they reached out to some people they knew reached out to companies that were part of it to celebrate the release event and then this is just
[03:54:02]  the line that they ended up with and they didn't really give it too much thought and then it kind of it kind of blew up on social which is awkward because you
[03:54:15]  know as a speaker you look at and you're like yep this could have been different and and this is this is a reasonable response but the thing is this response doesn't
[03:54:33]  lead to things the situation improving it it just we end up propagating the the same the same and don't get me wrong it's it's it's it's tricky
[03:54:49]  because there is a balance here you know you can look at the history of like if a panel is going to be all the framework authors and that's the angle then like what
[03:55:03]  are you going to do about it you i mean you what you can do is look at the promoter's history and look at the different types of panels we've done
[03:55:11]  over time you know you can put a panel as part of a larger event that has you know more balance on diversity more representation right so i'm just speaking from a speaker's
[03:55:33]  perspective i i'm i'm not i'm not a host i'm not putting this stuff on um it's just i get these invites all the time and you start like
[03:55:42]  reflecting on it and um i think fred had one he's like i'm adding a requirement for speaker opportunities i accept going forward online and in person inspired by a 65 speaker
[03:55:53]  writer for conference organizers you should already be seeing diversity of your lineup when you select your speakers to fair phrase even if you don't care it's okay consider an active self
[03:56:02] -preservation but i like this i don't know if this advice applies to every online event simply suggest a real thumb if you call your event a conference it's probably big
[03:56:11]  enough to diversity in your speaker liner and he's saying the way i'm talking about this is the last two events i've invited to ended up with all male lineups and
[03:56:19]  actually all white male to be specific i'm glad no one made like the this is going to be a white christmas joke or whatever um but um but yeah it definitely
[03:56:28]  both received blowback and were caught off guard and one event was canceled about it yeah and i didn't talk about serverless comp was actually canceled um there there was um
[03:56:44]  there there was way more than i'm going to show on stream right now in terms of blowback on this um this one kind of got big and i had even people reach
[03:56:55]  out to me personally about it being sketchy and the thing is like having known the promoters they literally just picked like half a dozen people and organizations that made sense for their
[03:57:04]  product launch and were like let's have it speak on that they there were people like oh how you didn't do a call for papers all this it wasn't a conference
[03:57:10]  in a real sense they called it a conference but it was a launch event um it like it did not have like the typical process it was not a typical conference it was it
[03:57:20]  was literally to launch their product um but it was enough that people felt uncomfortable speaking you know it was awkward and it was and i think reasonably so so like um they canceled it
[03:57:33]  but they did something interesting they didn't actually tell anyone they canceled it i think they they didn't want it's kind of an interesting stance i don't know what to
[03:57:45]  think about this at all on that side but they they didn't they they canceled it because they agreed that they should have had more diversity in their lineup and they wanted they changed
[03:57:56]  into a video series where they're going to have the talks going to spread out over time and then they're going to that's the idea and then they're going to like
[03:58:03]  bring in more diverse speakers but they also didn't publicly announce it because they didn't want to give the people who called them out any sort of satisfaction it was kind of
[03:58:12]  interesting and in that like i don't have examples here but once i once i actually at first i thought that was kind of like you know that's is that cool like you
[03:58:21]  should actually you know maybe you should just like say like hey you know are bad it wasn't intentional let's kind of you know move on from this but then i watched
[03:58:33]  the the people who complained about it get more and more angry and bitter about it even though they weren't involved whenever we're going to be like weren't participating with all that
[03:58:43]  and it opened a really like like it did definitely open my eyes to like kind of a both sides of the story thing because it was kind of like like they said their
[03:58:56]  piece but they were like very angry about this this event and maybe i'm which they did manage to cancel so like it is so like it is it is a tricky topic
[03:59:23]  i i i just wanted to bring this up because like it's something that i think we're starting to give more thought to um it's unfortunate because in one sense because
[03:59:34]  i do think this will impact certain things from happenings um but i think that's okay i think it's probably more important that we find how to have different conversations as well
[03:59:48]  that make like we're never you're never gonna have you're never gonna have the the diversity we want if we don't inspire people to to do that do you know
[04:00:03]  what i mean like something something has to change this things are way too off balance so even even at the cost of of of you know what's established i i think we
[04:00:23]  have to think more on this um it it's definitely it's definitely a tricky topic i i i don't know that i was any satisfaction came out of serverless conference being
[04:00:41]  cancelled honestly i i think there's a conversation where if i like get into the the weeds on this one sorry where is it here like if i if if i if i
[04:00:56]  get into the the weeds on this conversation here about about that is like as a very frequent speaker i turn down an event a month due to lack of diversity it's a
[04:01:13]  problem but one thing i think is important to make visible enough i need to make a spotlight be sure sure um but yeah i mean it's gonna be tricky to find a
[04:01:28]  balance because as i mentioned certain types of conversations can only happen right now because of the the way like of a reflection of what the way things are today so i don't know
[04:01:47]  i don't know what else i put on this but it's definitely something that both has come up from a community building standpoint and definitely something that has weighed on me as
[04:02:07]  a speaker changing problems if detected you need the reference to increase representation which means that it's up to those who control the representation comps to start that yeah completely did they
[04:02:21]  cancel a call because of twitter yeah yeah no the the the mostly the the people who made the outcry got their way they just didn't give them the satisfaction of telling them
[04:02:32]  that so yeah i don't know this is an interesting yeah yeah exactly this is this this is what i'm getting at this has been something that i've been trying to
[04:02:47]  to to to look at and we've been we've been we've been we've been trying this but it's like especially been harvard solid being kind of like an expert
[04:02:56] 's community so i think it's like i don't know what i'm getting at it but i'm getting at it but i don't know what i'm getting at
[04:03:02]  it but i'm getting at it but i don't know what i'm getting at it but i don't know what i'm getting at it but i don't know what
[04:03:04]  i'm getting at it but i don't know what i'm getting at it i don't know what i'm getting at it but i don't know what i'm getting
[04:03:07]  at it i don't know what i'm getting at it i don't know what i'm getting at it but i don't know what i'm getting at it i don
[04:03:10] 't know what i'm getting at it but i'm getting at it and i don't know what i'm getting at it yeah this is one of the things that i
[04:03:12]  think the problem though is like conversations like the one that they like like the expert panel they want to have here in there's a reason these people are on the guest list like
[04:03:26]  it goes you know what i mean like it's it's there's a tricky balance yeah i mean this i mean in a sense ideally this should be the case but we can
[04:03:44] 't actually we we can't we we can't actually get there unless we do something about it leaving alone doesn't get us there what's the bottleneck on diversity tech expert
[04:03:41]  every level like but yeah i mean that it does like you you the people you look up to the heroes they have to if if they think like you look like you you
[04:04:20]  know if you have it will help pull in new beginners there's a self-propagating thing and general like biases that are present um so it's very difficult
[04:04:39]  it is very difficult yeah i mean the the these kind of stories is all like it's important not to discredit the person either you know like they're people incredible ability
[04:05:08]  it's the problem is you actually have to like get the ball rolling if you want to promote uh an environment where this can uh what's like grow organically which is weirdest
[04:05:24]  that's like not organic but we have to like you got to kind of like push it along anyway i i wanted to bring this up because i i actually i i do
[04:05:41]  hope people turn out this event i think it's great i think it's good i i think this is a great conversation to be had i just i i i'm very
[04:05:48]  i think we need to be cognizant of this topic and that's why i brought it up today um what else we got here big one jason full-time learn
[04:05:59]  with jason he's left netlify to actually do make the show real you know like like i mean he was already real he's already incredibly successful with it but
[04:06:14]  now it is like it's his thing so i mean it's always been his thing but you know what i mean like he's taking this all the way and i think that
[04:06:23]  like this is super exciting um i don't know if i want to say too much about this right now we've been we've i think we've successfully um tanner
[04:06:36] 's waving the white flag here um i'll have more updates on this in the future yeah i mean there there was some good news people the the work that uh milo
[04:06:56]  did on reactivity we talked about last week actually improved maverick js they they actually used that benchmark to make significant improvements i'm really excited the reactivity space has been
[04:07:07]  heating up um like the signal space um a lot recently um i i don't know if if if if you all saw this but i've been talking about how angular team
[04:07:19]  has been looking at adopting signals and like essentially um this this is a great article for people who are into rx js and they're like they just don't get how the
[04:07:35]  reactivity is different like mostly angular folk but like this really sells the power of our unique brand of reactivity so as i said this we're going to uh like you can
[04:07:48]  feel it i think powell from the angular team said a while ago he was like you know it's like signals are the new vdon like this is a it's a
[04:07:57]  very energetic area of research and improvement right now um you know across the board from you know angular from the state libraries that are kind of working on stuff you know like you know
[04:08:09]  even tanner lindsley this is this is if you read between the lines here you know this and follow this great that i actually enjoyed this conversation as with seb
[04:08:20] astian or we're talking about what you can do without a virtual dom and if you ever want to understand that like because we started talking about concurrent rendering off screen um a
[04:08:30]  whole bunch of stuff and just explaining that like like he didn't know about view keep alive like just explaining how you know these models can work without a virtual dom and that there
[04:08:45] 's more options out there i think this was a great kind of thing to kind of like have a conversation with a you know very react centric developer and can help them
[04:08:51]  understand the you know what lives beyond react so like yeah i i you know i'm seeing these things now you know like this is this has been a very um very cool
[04:09:08]  um development uh in terms of excitement on singles uh signals so i almost said sniggles uh thorn um anyway uh yeah it i i we're we're seeing this it's
[04:09:26]  funny for me because i've spent so long in this zone that i'm it's let like i'm seeing not as many new ideas as it is for other people but right
[04:09:36]  now it's like that mind-blowing moment like when people are just like realizing that um a revolution is happening and um that that you know that that can be kind of
[04:09:49]  a tricky thing to even identify at first um uh it was funny because um i'm i'm glad devon changed his name back he he changed his his picture to a
[04:10:05]  picture of toast saying the guy ryan roasted um and and essentially he was saying oh i think quick is more important to solid remix so it's a better react and remix is
[04:10:21]  perfected ssr or maximally useful initial html i i i obviously don't agree with this take completely and was especially triggered by solid as a better react
[04:10:34]  um i i i have to admit i i went a little bit too hard on him because this is related to the signals thing i was like trying to explain that that signals are
[04:10:51]  the thing that like and not just like signals to state management but like changing the way we render change the way we view components change the way we update um you know like
[04:11:02]  i i kind of go off on a bit of a of a of a rant you know any similarities to react as a testimony how effective the approach is that particular goal and
[04:11:12]  not indicative of the potential of it everything has to be done and thought out completely differently i i i i guess i sort of got off my chest a lot of stuff talking about
[04:11:22]  talking about how signals of fine-grained reactivity inspired the fun like the partial hydration efforts they're happening with marco like the sub-component of the reserv
[04:11:36] ability talking about how you know pre-act and quick have been adopting elements of this to go beyond even the virtual dom as we know it today that this is part of a
[04:11:48]  bigger change you know at some point later on i actually explained that like i also think better react is a diss to react team a bit because like they're they're not
[04:12:05]  interested in this they don't see solid as a better react um so it's like it's very like it someone did kind of laugh at me and pointed out that only r
[04:12:15] yan would be offended by someone calling his library a better react and that's probably true but um yeah someone's asking okay yeah because i like playing with this whole i didn
[04:12:27] 't invent signals you notice that um it's here and it's also came up sorry on on here i didn't invent signals it's literally my my name here uh like my
[04:12:37]  description um there was actually an interesting discussion in here where someone was trying to find the etymology of signals um if i'm right uh maybe yeah i've been using
[04:12:52]  signals since rob penner popular in a flash ac3 but they started with qt i thought you invented reactive programming i love yeah no um the truth of matter is my inspiration
[04:13:05]  came from elm and sjs um the signals that are in ac in as3 were different i think if you follow this thread down everyone agrees that they weren't actually
[04:13:17]  the same give credit qt like it signals in this sense are are a little bit different than the sense we use them i end up using the same word but it's not
[04:13:25]  actually quite the same mechanism um it is based on subscription models but it isn't the way we talk about signals and fine-grained it has to do with more of
[04:13:39]  a graph data propagation model so right like like we're talking about like like solving the diamond problem and like that side i i ended up i don't know signals the right name
[04:14:00]  for them but like i don't i don't actually have the it going back to that side of things but it's interesting that like there's something similar that lives in
[04:14:11]  that zone so um i was not the first person to call these signals i think there's like academic works like this is actually actually um uh the way react graphs work is
[04:14:24]  a lot like digital logic um circuits like it's it it is like um um what's the term yeah like essentially like synchronous um it's it's it's like uh when
[04:14:37]  people program those um fmpgas and like vd vhdl like hardware descriptive languages where you have like a system where everything like runs at the same time like it
[04:14:48] 's no it's not like imperative like you wire everything and everything is like in the same state it's not like this then this and this it's like this is the state
[04:14:56]  of it then it changes to this state um it's that sort of mentality programming theoretical stuff that where signals came from um this kind of idea of um like kind of like
[04:15:07]  a synchronous reactive programming some people will talk about behaviors in the original uh frp description which is probably pretty accurate um but yeah so yeah i i did not come up with signals
[04:15:24]  i like reminding people that it's kind of like a funny joke now because people just who probably invented signals you know like whatever it's it's it's uh it's
[04:15:35]  fun okay so where was i yes yes okay and actually this leads me into the next little topic here because um the other thing that's been going on like crazy is the the
[04:15:50]  freaking uh was a gpt chat bot thing everybody's been playing with it this week right made signals grid again sorry i need to just give this a um and this is
[04:16:06]  actually kind of related to that um our old buddy parasocial uh here has took that that thread where i was a little bit aggressive and kind of uh you know you
[04:16:24]  know got my mind off um in terms of you know reacts all not being better react they actually gpd actually wrote it into a very convincing little you know summarized more
[04:16:37]  clear than i wrote it our article here right like like it's funny because if you actually scroll up it has more engagement than like the original tweet or any of the the stuff
[04:16:48]  there you know i actually i mean i i don't know i should just get gpt to write my marketing material from now on salt is not just like this this just
[04:17:00]  reads better than what what i wrote like it has everything from what i wrote but it it actually explains everything concisely that fits in three so um yeah i mean essentially
[04:17:22]  this is this this kind of stuff is is is is nuts from my perspective like look so like yeah five times engagement and and actually um he uh he actually took the subtitles
[04:17:46]  from one of my streams and fed it through in and then actually wrote a whole here here we go here here is the the the this is this is suspense as 45 minutes
[04:18:02]  of subtitles from one of my streams into an article about suspense suspense the concept of software design allows the inversion and control over loading states it's traditionally design patterns the loading state and
[04:18:10]  other related information will be held and controlled by the parent or container component with suspense this control is inverted allowing the parent component to hold the cards and determine how to show the
[04:18:17]  loading state this concept the main benefits first like this is great you know someone actually again got gpt to write a whole article on solid i i saw these a couple years ago
[04:18:30]  and then the like the newer versions of these ai based articles are like miles above like what was there before um i don't know like how good this article actually is but it
[04:18:44]  was just kind of interesting to see this kind of progression of of this because i was commenting i just needed this as like my editor for my marketing so like this is really
[04:18:54]  quite cool in a sense yeah or any of those like low kind of effort like summarizations like maybe the this is going to use ai to do them from now on i don
[04:19:12] 't know um yeah it's it's it's it's kind of crazy um can we tell if they're right the best frame frame well here's the thing people also
[04:19:26]  shared with me i didn't share this like people trying to convert solid to or react code to solid it didn't really work for them i've actually been talking to a company
[04:19:34]  that's been working on ai to do um code mods and seeing if like we could do that so like maybe there's a direction we can look here in the future but right
[04:19:42]  now it just doesn't have the knowledge but you know i know that's not what you're asking but um that seems at least more feasible yeah yeah but that's that
[04:19:52] 's not the problem right that's what people kind of saying to me and i'm like no no but i just want a better editor i write a bunch of stuff i i
[04:19:59]  spend hours and hours on stream you could just like summarize all my streams into multiple articles like i don't i don't mind providing the content i just need an editor you
[04:20:07]  know the problem the challenge is like it's not always right you know the problem i think there's only one more topic i want to talk about today um um i
[04:20:31]  think there's only one more topic i want to talk about today um unfortunately i'd rather leave on like a happy note um like this which is pretty good but um it's
[04:20:45]  funny those serverless sst guys have been just having such a hard time recently and uh between their conference and like like this weird social drama and stuff you know but i
[04:20:58]  don't know if you i need to talk about this topic um because i have to um next isn't really oss it only runs on infrastructure with internal code to host it
[04:21:14]  otherwise this wouldn't exist that's fine remix start start close source just something considered do you want to own your infrared do you want your framework too yeah um yeah this is one
[04:21:28]  of those kind of unfortunate scenarios because again this is a product that they've been launched um you know like this is not what i think my understanding of this project is it
[04:21:43] 's trying to take like the build api from versell and make it just work on aws without using versell and like yeah i mean there's people incentivized
[04:22:02]  to to make comments like this i suppose but but like every comment has like maybe a hint of truth in it like i don't i see the angle that this is coming
[04:22:23]  from i'm ignoring that i i i like matt kane um uh clarification because if for you who don't know matt kane is the guy uh one of the main people
[04:22:38]  responsible for um framework integrations uh at netlify so like whenever next 13 comes out and for you know there's a bunch of new you know features he's the
[04:22:49]  guy who's like reverse engineering and figuring out how to get on the netlify platform yeah maybe but not necessarily we'll we'll talk about that in a second there's
[04:23:04]  there's a little bit of a difference here right people are confused by the fact they can self-host next as a node app but it's not the same thing k
[04:23:13] udos to the next core team for mostly making features that work self-hosted but it's a completely different architecture from next app deployed to versell or netlify he
[04:23:20]  snuck it in because literally we um netlify does spend the time to to get the versell you know equivalents and features and make sure that like they can support
[04:23:30]  all the middleware and all that kind of stuff you know the edge stuff yeah well because we're moving into a zone now um where this infrastructure stuff starts mattering more like
[04:23:39]  and you know edge and caching and cdns i mean it started really with isg if you think about it or isr or whatever or dsg or
[04:23:46]  whatever the hell you want to call it like everyone like gatsby's hosting has it nelfi has it versell has it like what that's where it kind of
[04:23:53]  started but it's not like something you can just like pick up as you're like hey i'm going to host my thing on aws right so like so like
[04:24:14]  this is this is kind of like one of those things where like it's it's it's challenging right mo okay not exactly most next apps are on their on their own infrastructure
[04:24:27]  including companies like amazon com in 12.1 we help make docker smaller yeah but sure but like for the we transfer the next output into build versus open source yes exactly
[04:24:41]  i think there's like a confusion here like i am a big fan of the build output api huge huge fan of the output api i think it i think this is
[04:24:50]  like the right kind of thing to make versell accessible i think sometimes versell has a hard time separating next from versell um which makes sense but yeah like this this
[04:25:05]  this but if if you follow this here this is one of the sst guys the build output is helpful but it's not enough to get things working as well when result de
[04:25:15] ploys to aws internally we didn't want to create open next but there were just too many attempts our community to do something like this on their own had a chat with someone
[04:25:23]  who works at competing hosts the other day most of the jobs to make these os frameworks special sauce when hosting the you know you know anthony rap right here about to start a
[04:25:34]  job hosting platform well a decent amount of this kind of work solid start 11.8 netlify next for sale i'll be particularly curious to see how hosting stories you up
[04:25:44]  for these ones one thing i want to point out um i don't know if there's anything special on 11.8 side but i doubt it like solid start has no special
[04:25:21]  netlify thing at least currently you know we're looking at how to make things better on each platform i'd say we've i've saved just because history and stuff
[04:26:01]  we actually have more with cloudflare than probably um any of the others right now just where we were at but like it's interesting because almost most of the frameworks actually have
[04:26:13]  an agnostic core that runs on all of them right right does 11d service run on everything like i don't know about that but like like i know that remix solid
[04:26:27]  start astro run the same umbercell uh dino you netlify cloudflare right like there actually isn't a difference for those and quick city and marco
[04:26:42]  like the whole list i i said i didn't know about eleventy even i suspect svelte kit is like that as well i think i think next is actually
[04:26:55]  the exception right there's not i mean this is interesting i love to hear you're feeling me next on net flight right now it could be blah blah like we get down the
[04:27:07]  thing is you know so it's like there's definitely something here whether it deserved this treatment or actually this this isn't even the most it the most brutal one it was
[04:27:22]  this one the vm versell is for vendor lock-in luckily nexias becomes less relevant with ssr and other t's coming in the north you know
[04:27:32]  this is the build api output oh here's matt cane again that's a little misleading versell does indeed have an excellent well-defined and well-supposed build
[04:27:39]  api but unless i'm mistaking there's no way to make next you use it ah there we go so yes very awesome so next can use the build output api
[04:27:54]  yeah so there there there is definitely a bit of a bit of this going on right like well so sorry this is the wrong how did i end up on the wrong story
[04:28:16]  all of a sudden okay yeah so definitely definitely you know a conversation i i think the challenge here is this ryan is a little bit i mean this wouldn't have existed
[04:28:38]  if it didn't need to exist i i'm glad that the like versell team has been pretty reasonable you know coming in and like like there is some misinformation floating around clearly
[04:28:52]  about next here but there is there is clearly there is clearly like a gap um which this solves so um you know this this does have a place in the world um well
[04:29:11]  versell's great is not a confident all your researchers on aws hosting aws comes into the integrate yeah so yeah so i i think i think this is like i
[04:29:24]  think this kind of thing is inevitable and the reason i think this kind of inevitable is ultimately it doesn't matter who you are when you're working with multiple products even things that
[04:29:36]  are so interweaving that work so nicely together you got to prioritize some one thing takes more priority than the other thing and there's nothing wrong with that like you can be
[04:29:47]  unapologetic about it if you want honestly like it is perfectly fair i don't i like the i'm i have a bigger issue with the vendor lock-in
[04:29:58]  argument because like everything's vendor lock-in like like it it only becomes vendor lock-in i think when like like when mostly it doesn't necessarily need malicious intent but
[04:30:16]  when like when when things are skewed in a certain way that that may that that removes choice the truth of matter is if you want to get the best out of aws
[04:30:31]  you're going to try and use the most of their services and they integrate well with each other and this is just a natural thing and it's going to be the same
[04:30:38]  one for sell or whatever platform you choose you're going to thing it's kind of funny picture if people went out and talked about framework lock-in the funny thing is they
[04:30:46]  actually did recently the conversation about framework lock-in and people like well the solution is clean architecture you just pull all your state out into the like a global um thing use like
[04:30:55]  reactivity and then you can swap from react to view to whatever render you want in the work you get framework agnostic and then you have this good strong pattern um you
[04:31:05]  know to manage data and the thing is like you look at a new for a second you're like no no no no no no that is the framework you just like shifted
[04:31:13]  some stuff around but now it's almost impossible for you to get off that reactive library that you're invested in like you don't you don't get things both ways not really
[04:31:23]  and i think i think that's like i i i think that's sort of the the thing like it's okay that next works you know best on versell or any
[04:31:39]  platform willing to like emulate the same sort of features but it's also reality that it does like you you don't get to ignore it like yeah how do i put it
[04:31:52]  like if there was a conference for an open funded framework someone said this is what funded open source looks like i actually disagree a bit like if if if astro did astro
[04:32:05]  comp or let's say before the shopify emerge or whatever remix did remix comp do you think that they would cater to a single deployment partner and like that would be the
[04:32:19]  game no they would literally make sure that on launch that any cool new feature they had was available across the board i did like solid start launch we i worked with every single provider
[04:32:31]  to make sure that we had templates ready on launch day that you could go into versell or netlify or whatever and make sure that you get the full solid start
[04:32:40]  experience cloudflare i worked with the cloudflare guys uh um peter you know uh you know make sure the pages integration was good you know and you launch with that
[04:32:50]  and you're like look now everyone can use the framework because the framework is the priority that's the reality right like that's what you do is that what next does no
[04:33:01]  but that's that's okay like that that is just what it is like you have to understand like where the money is coming from and what the priorities like they do a good
[04:33:16]  job with it being open source they do a good job of putting out there people can just host it anywhere like next like next like next is is is is not i i
[04:33:29]  don't agree with this next isn't really open source like like next does a great job you know considering but you you have to like at least acknowledge the fact that it
[04:33:42]  is it is definitely not this like it's not the way i'd like another framework would act in that in that situation like it is definitely like we're gonna build it on
[04:33:56]  versell put it out there do it because you know versell is our platform like it's about it's about priorities so like i i i don't i don't
[04:34:12]  see a problem with that you just kind of like go that's how it is right ultimately next and versell are tight you know and it has nothing to do with intention
[04:34:30]  i said the next team does amazing job and this was kind of similar to the the conversation about react next versell you know like the that whole um you know are they all
[04:34:42]  colluding together it's like no like not not really but if that's the end result it doesn't matter if they are or aren't that's the end result like i
[04:34:52]  i i don't i sometimes wonder people have to be as apologetic about it as they they try to be when it's just like it doesn't matter what you think
[04:35:03]  it is it's the result is what it is so like this is kind of as i said like it's too easy to take pot shots here open next exists for a reason
[04:35:16]  as i said i i i'm constantly impressed with the way that the next team engages and stuff it's like it's not like they're gonna like come in and like
[04:35:24]  try and close down this project or like make them change their name or do anything like that like the the they are very reasonable but like like as i said there's like a
[04:35:38]  hint of truth in everything right if you can like look at it and like there's nothing wrong with that just like catching up here on chat for a minute see if i missed
[04:35:49]  anything important yeah people talking about remix and shopify you know i mean yeah i know no i think we're good you know like the this this uh the stream has been
[04:36:13]  about next so we kind of i guess coming back to next year at the end makes sense but like next is the the big fish it ain't going anywhere just just like
[04:36:22]  react you know um i think it's interesting that maybe we have more competition because the money getting funded into like the meta framework that's that's almost where it feels like the
[04:36:33]  battle is being you know fought sort of like the competition people aren't really focusing on the core library rendering stuff that much anymore you know it's it's it's it
[04:36:44] 's in the next js's and the svelte kits and the remixes and all that um which is really interesting to me because those are much more opinionated and
[04:36:53]  much further from the core which means that like there's a lot of room there to like take things different directions and like change the math you know change you know what's relevant
[04:37:19]  the real question yeah this is the real question if the money keeps flowing in now the market for these companies is tanking i mean i don't know if i'm i
[04:37:30]  feel comfortable even reflecting on that but i mean we've had a nice run you know with all the money coming in this we've it's fueled a lot of really cool
[04:37:42]  innovation um you know i i i think i think like there's good stuff here the fact that next went and we're like hey can we do this can we use next infrastructure
[04:37:53]  can we pull it off or versell's infrastructure can we pull off let's do this that's great you know and even launching it that way that this is versell only
[04:38:01]  that's great for versell you know like good i i i just as i said i think it's important to point out that like um i think almost anybody if that
[04:38:15]  was the agreement or the arrangement would be in the same state right but but i want to point out that like for those that aren't it is actually a different state the
[04:38:26]  these these things are different right like you know what do you got here yep definitely well here yeah i i mean here's the thing though what's the difference between lock-
[04:39:00] in and like features that don't if only cloudflare has durable objects or only this has this you know feature like vsg it's on netlify or isr
[04:39:11]  like you're probably going to want to support those features at a certain point and and figure out how to work with each platform it's it's interesting though because like will
[04:39:21]  prioritization kind of come in at a certain point or you know efforts to kind of generalize approaches because like it is definitely interesting i haven't found a place where i needed
[04:39:35]  to rely on that offering but i you know it is it is an interesting question yeah yeah i mean that comes down to people i think someone in in our discord was like
[04:40:01]  this man likes to wake up in the morning and choose violence but i mean um yeah it's i i i i feel the worst about this is just as i said s
[04:40:18] sts had had a as had a rough couple weeks here um but i guess they got a lot of eyeballs so you might not have heard of sst before but now server
[04:40:27] less is serverless ready and this thing definitely got attention on it it thank you i appreciate that i just couldn't access service i was trying to find next up for ourselves
[04:40:49]  server yeah i mean i i i i would i would love to take a look i've never seen next outperform solid started anything and i i know that sounds like a
[04:40:59]  cocky statement but i i mean actually true um except for first paint in some cases which is a weird one because it should all come in at the same time and yet next
[04:41:09]  has a way of getting the first paid ahead of everyone else which i haven't figured out yet but generally speaking i've never seen this to be the case in anything so um
[04:41:16]  i would definitely be interested in seeing that example like especially in like a two times range like that's that seems that seems strange we'll we can we can probably try and
[04:41:30]  figure out what's going wrong yeah oh i like this open next is only for deploying next.js so that it can be deployed as to function as a serverless platform it
[04:41:46] 's a solution specific to a specific problem not a crystal next or hold yeah that's that's the biggest thing like the oh yeah you i mean it's pretty obvious i think
[04:41:53]  anyone looking at this can see that open next is not trying to attack next and i think that's why the next team has been pretty reasonable you know in that terms um
[04:42:02]  but like you know it's hard with twitter and like weird dramas you know you guys are funny actually you know it's just because when i went to the solid start
[04:42:39]  website and i went solid start i just and i went to solid starts instead and unfortunately i got a worse performance score uh sorry um yeah so yeah anyway that's fine we
[04:43:03]  will we'll take a look offline see what's up so solid start still embedded and has lots of bugs i'm not gonna lie there or even try and hide that so i
[04:43:11]  i look forward to kind of looking into that that kind of stuff um but uh yeah no i mean i i think this has been i think this i think this is a
[04:43:22]  been been interesting topic and i i've i've i've been uh i i've definitely been you know looking into uh sorry that's not the right wording it's definitely been
[04:43:39]  something that's kind of coming across my plate uh recently just because i see how much effort netlify puts into you know the next integration not only matching bursell but
[04:43:50]  actually offering even some unique features um so like people who are in the game to play the game are are are in it so it's it's just one of those things you
[04:44:01]  just gotta like acknowledge out there and you know that's where we're at so you know that's you know that's that that's really that's really it yeah i
[04:44:12]  don't know uh how we're doing today i i started doing the streaming early so that i don't like push it all the way to dinner which gives me like a little
[04:44:21]  bit of space here to kind of wrap up you know um is there anything else we want to talk about before before we uh before we we we we call it um i just
[04:44:31]  checked twitch chat to see if anything new came came down the line no not no some new first time chatters that's always awesome to see um do remember to give me
[04:44:44]  a follow and like on the video i'm almost at a thousand followers on twitch which is nice and um man the uh that rust stream from last week that's probably like my
[04:44:56]  most watched stream in a short period of time it's already like top three streams um people really enjoyed it so um if you haven't checked that one out that's like i
[04:45:06]  think and you have any interest in the rust topic like it's it's pretty sweet uh what do i think about react supporting quick uh well actually let's what what do
[04:45:22]  you think about react support and astro it's it's it's kind of like a similar question i i feel like like there's some cool stuff that quick does for
[04:45:41]  waking up reacts components uh using reactivity which is really cool but like i i think i think i think it's i think it's an interesting question because like this is
[04:45:51]  something people always kind of debate with right because like there's two different ways to look at this if if you think about um bringing in react's ecosystem into quick because you're
[04:46:08]  like using the components this is kind of like a compelling thing right or maybe even small widgets or partials and apps so like from an ecosystem standpoint i think this is where
[04:46:20]  this gets the biggest win but it's kind of interesting because like quick doesn't really want react components like not really like all the like good work gets done and kind of gets
[04:46:30]  cancelled the second you like you bring react on the page sort of like yeah you can load in the background and stuff but like a lot of the benefits kind of get cancelled
[04:46:41]  out but to be able to suddenly have mui is kind of compelling right so like maybe you live with it but it's kind of like it's kind of like like pre
[04:46:54] act compat and that and people ran it that way but it ultimately like at a certain point you're like oh maybe i should have been using react like that was my experience
[04:47:04]  with preact compat this a little bit more compelling perhaps but then it like it kind of plays at odds with things reality is most people have react apps and they're like how
[04:47:17]  do i get quick into it so it's like the opposite and then you're kind of like huh i think this is an interesting approach or migration strategy perhaps but i don't
[04:47:29]  think it's one that people can generally commit to this is more like an ecosystem patch which makes it a little bit less interesting but like it's you see the different like
[04:47:38]  you could i mean in theory like astro you could bring your whole react app into it and maybe people could do that with quick but like i feel like people don't view
[04:47:52]  these the same sort of way and like the motivations are a little bit different it's also interesting because yeah it's one of those interesting places because like when you move a
[04:48:08]  react app into astro you're basically trying like you're mpa-fying it a little bit and it's actually the same thing that's happening with quick unless like
[04:48:18]  you don't do it that way but then then things aren't like you're basically not getting any of the benefits of quick so it's like it's there's this
[04:48:26]  like the friction becomes the question of how much better i i think i think there's a zone for this solution and it's probably in very large enterprises that are ready to commit
[04:48:42]  on quick and have their own internal component libraries and things that like where they like they already have their systems and react and they just want to be like okay we're going
[04:48:51]  to start building in quick and like kind of do it that way i think this is that it doesn't let you migrate existing apps unless you make new apps that reuse your current
[04:48:59]  stuff because i don't think you want to do this for mui or something so it's like i think on the largest scale this is compelling i don't think this
[04:49:07]  is interesting for most people um check the issue tracker and see how that's going i think that's the thing is there's there's there's been a lot of uh priorities
[04:49:22]  and stuff going on mostly it comes down to bug fixes we still have lots of bugs so i i don't know yet um it depends on like tricky thing with open source
[04:49:30]  is it's it's it's about the amount of time and contributors and we're we're still we're still mostly based on volunteers so it's it's gonna take a
[04:49:40]  bit no not yet but it's pretty cool um yeah i mean they've had the feature for like two or three months now um uh i i see the reason i haven
[04:50:03] 't like thought about it much is because um i've i've watched so many quick talks me and mishko have been hanging out going to conferences and stuff so like i
[04:50:11] 've seen i've seen uh i've seen a lot of you know like i've seen this feature advertised and showcased now for months so hey what it didn't come
[04:50:20]  off to me as something particularly new but yeah i i see so that's why the attention talk is there yeah i mean it's it's definitely very very cool um let me
[04:50:33]  see here um just put this up instead of the other one i've had enough of looking at that tweet uh we're sneak heel uh yeah i mean this is kind of
[04:50:47]  thing with this his cycle of stuff he he's working a lot of r d he put a lot of hours in um on solid start from like all the way from like j
[04:50:57] uly through um november he just you just he just been taking some time he actually i took a trip recently i don't think i should share on stream where he went to
[04:51:06]  but like he just you know maybe maybe doesn't matter he's probably already back but you know like just he he's he's been doing he's been doing him kind
[04:51:15]  of gearing up if you've seen him on twitter he's been doing a lot of 3d demos and stuff you just need to kind of clear his mind where it is
[04:51:20]  i've been trying i've been getting in there trying to move solid start stuff a lot of times it's downstream stuff so you've been seeing a lot of releases recently in
[04:51:27]  the router uh releases on the beat plugin um releases on solid itself so um solid start usually for bugs ends up at the end of the chain because usually a lot of those
[04:51:39]  things actually depend on stuff that's like lower level like farther back because salt start basically offers very little new on top of what you already get in the ecosystem it just puts it
[04:51:48]  together yeah we we talked about this already on stream um considerable amount um jared to teach us about zig yeah that's it's a tricky one i think the difference with
[04:52:09]  rust right now is it's at a level where like people can actually build uis in it it's not like quite the same yeah that's cool too yeah uh prime's
[04:52:18]  been doing great stuff he's been building that app on leptos right so yeah no i i no it just happens to have a very similar name yeah i'm like
[04:52:41]  10 minutes behind chat sorry well i mean it's of course green resumable right like they actually have the ability to wake up like if a prop changes from quick it
[04:52:53]  can wake up the react component so like but like yeah you can't like when you when you get react you get react you know like the whole thing you know yeah just
[04:53:24]  catching up people talking about reacting astro yeah yeah average number folder i feel like part of the time i it's funny nikhil wanted to do this and i was like
[04:53:41]  no like why are we doing this don't don't don't like i know what astro went through to get like all the different builds from working like do you want
[04:53:57]  us to be seriously spending our time working on like framework integrations and making sure those all work with all the different frameworks no i i'm actually really happy about our thing
[04:54:10]  and i i'm like kind of happy that you have to rewrite your components to for them to work in solid or you know at least use headless or an agnostic
[04:54:16]  solutions we it's a i mean sure this isn't helping us getting an adoption and enterprise you know but like let's let's face it like it's like a calling
[04:54:27]  like it's like a lot of the times we get the performance benefits and the size and all that stuff is because everything's being rewritten without in mind you see the same
[04:54:39]  thing in the preact ecosystem to kind of a smaller scale but probably going to be more now that they're kind of diverting a lot of the problem on the the
[04:54:45]  compat sizes you just use compat so people don't bother but if you look at the libraries that have been made specifically for preact love them right and i i that's the
[04:54:52]  same kind of thing that we're happening with the new libraries on the solid side so like yeah like i almost don't want react components like like you just don't you just
[04:55:02]  don't just like the they're actually authored and they work differently and like like just we could we could just cut out that part like just why would we even want
[04:55:13]  it i understand that it's work and people aren't going to be able to adopt it and like it is what it is but you know and and there's realities and we
[04:55:21] 're going to come up with migration strategies and all that good stuff but in the end you'll have better solid apps i'm like i'm not worried about the ecosystem from a
[04:55:31]  library perspective not even in the least hiring and all that stuff and community and teaching and all that stuff those are the big blockers converting some libraries it's it's fine
[04:55:43]  like we we we have you know libraries in certain you know enough different areas you can go find forms you can go find query you can go find a whole bunch of stuff like
[04:55:55]  it's yeah yeah i would love that anyone who wants to help um yeah yeah react 3 editor yeah no he did some great work recently there that that's the thing nik
[04:56:13] il needs projects to keep him rolling he really enjoyed the island stuff i got some new hot stuff that that we're going to get into that that that tweak his interest in
[04:56:23]  the same way but um he's he's an r d guy he's he's not so much you know like a maintainer he's he's uh we the world
[04:56:35]  needs more like mark erickson like that guy's a hero yeah just reading through people on what dino sig how far behind the time i'm only four minutes i'm
[04:57:02]  almost caught up he wanted to put it of course he did yeah there might be we have an example with prisma but it's like super super simplistic i one of the
[04:57:29]  challenges on this kind of side of things is because we like strode so hard to be agnostic prisma is like a node thing right like we're trying to figure
[04:57:38]  out how to handle this on a templating side i think i think there's like i think there's some challenges here in the way that we handle feature ads and templ
[04:57:48] ating that could be improved so those are the kind of places why i want to look at some like create t3 app and stuff so i can i understand those pieces that i
[04:57:56]  like again i never use these kind of things like next js never interested me or any of them i just build the stuff myself like just like config it up i know that's
[04:58:05]  not everyone but like when i work at startups you know we just set up our configs we just do that i never use creative react app next any kind of meta framework
[04:58:13]  stuff so it's so weird for me to be in this space but it seems like i can see the value it brings and especially with the power v plugins it's like super
[04:58:31]  powerful uh yeah bundle size alone is not causing performance problems i'm taking this completely out of context but um i i i i i i'm talking about the way things are
[04:58:51]  authored the way like way things work like just lots of lots of lots of elements what's the main advantage of solving for this reactor say um i mean this came up
[04:59:08]  a bit with a better react thing comment it's just like it's a different model which kind of i think the way that it's built on primitives gives a different
[04:59:20]  kind of scaling don't be wrong react is built on permits too like the components primitives but our primitives are smaller than components and it's the size isn't what matters
[04:59:29]  it's that the it's the relation of like what the ui and the state um separation that lets things kind of be bundled or sliced up a different way and lets
[04:59:38]  the behavior work a different way that like performance scaling works in a different different way and the that composability applies well to a react model but it also applies to other models
[04:59:50]  and i think one of the the most interesting things about that from solid is understanding that with you know these kind of change systems and this kind of it allows us to kind of
[05:00:00]  get away from certain types of higher level abstractions which lets us retain the control and these are things that i i came to appreciate working on long term projects for years and
[05:00:12]  years and years and i never wanted to give up that control i've always liked that about this approach even before i authored solid and that's what got into solid being the
[05:00:19]  way it is it's hard to sell that to your boss exactly like i haven't figured out how to put that in words but like you know in a way that's like
[05:00:28]  concise and selly people are just like it's better react you know but like it's it's not it's it's really we're it's rethinking the way
[05:00:37]  we like compose state and compose ui interaction like there's a reason that this sort of reactivity is fueling resumability and you know is the inspired things you know
[05:00:54]  like um marco six's river rewrite and stuff like um even quick to a certain degree but like in certain ways like you could make things even more optimal if they took
[05:01:04]  things even further that direction although there's complexity there but like what i'm getting at is like i think there's a huge amount of potential in getting away from the model that
[05:01:14]  we've been using for years and years even though if that's can be proven to be stable we're like a whole like there there's a whole new world to explore
[05:01:27]  here and as i said that's not gonna sell you at your job today but we're just starting to unlock that potential i i i do think islands and rc solves
[05:01:50]  the the size and execution problem significantly maybe not react rfcs but in general i think the approach has significant wins i mean at a certain point if your whole app is
[05:02:10]  in javascript and it is a large like we're on the figma side of things like i i don't think that's where any where people are generally complaining
[05:02:25]  uh there's a lot of discussion here i think fuzzy wants you to acknowledge x element probably um oh i mean what do i want to say what x element other than the
[05:02:44]  keels here uh it's okay we we love what you do so don't worry about it um yeah no what do i want to say what x element x element when i
[05:02:54]  first tried it was the first thing that i felt that felt like native astro i don't know how else to put it but it felt not astro native so it felt
[05:03:02]  like it really fit in with what astro was doing like better than any kind of client island approach so if you're staying really close to the like bare metal and being
[05:03:11]  like mostly server thing it has a really natural feel and how it fits into your astro templates where you're just like no i don't need a declarative like react or
[05:03:21]  solid or whatever svelte or whatever uh x element really fits in that maybe some variation i mean at least it's trendy right now i don't right now the i
[05:03:36]  don't know if there's like a another option to really solve this i mean you could say quick is but like it's not quick is a variation but it's harder to
[05:03:48]  reach and i think when you go to the next step that's where things get interesting when you get to like the more rsc side so i don't know if islands will
[05:03:55]  make it all there but it's the rsc like the sort of the server component side that makes things interesting that might make people go there but i don't know all
[05:04:02]  framers follow like i don't like we're talking kind of like a new architecture here like there's a reason the pages in the app folder is different i i don't
[05:04:10]  feel like i i feel like reacts can have been kind of underplaying that part like not really emphasizing how much of a change is happening kind of like because they're like yeah
[05:04:19]  we want you all to kind of stay here and not acknowledge that this is kind of like an eco ecosystem reset you know like like like i don't know that islands will
[05:04:32]  necessarily but i i think we're gonna see a lot more server components or things like that which is basically extension of islands i think that's when the flick happens where people like
[05:04:39]  oh we can keep those benefits to single page apps no one really wants to give that up all right prisma works in dino that's good so then is it just
[05:04:47]  cloudflare we have to worry about that is true this is a prisma template rt3 equivalent create jd all right uh what are we doing here yeah is
[05:05:07]  that on us or is that it or is that on uh or is that on on on like just in general just curious i probably have to scroll to the bottom to actually
[05:05:33]  get the answer to that question that's i i i should just like put that put that out there uh someone asked me what i think about svelte i don't know
[05:05:46]  if i want to get into it just yet let's see if if if so page forms is very general blah blah blah people talking performance fuzzy signals will make its way into
[05:06:06]  everything yes that's just how prisma works yeah unfortunate uh okay should i say something about svelte i can say a couple words on svelte because one of the
[05:06:20]  things i like talking about svelte and maybe this might be towards the end of what we talk about today is that svelte and solid have sometimes so little in common
[05:06:32]  that i i don't even i'm not too concerned about um like having opinions about that or you know what i mean like it's something like me rich sit there and we
[05:06:44] 're just like he i remember he's like if you like jsx you use solid if you like templates use so like he sometimes like just says that as like the differenti
[05:06:52] ator and and it's just kind of like yeah you know because like it goes deeper than that but that's like the easiest way of summarizing it for someone who who like
[05:07:02]  might not quite like follow the the whole conversation so to speak because like felt kind of they they want to make the web easy like you mind this is my interpretation interpretation
[05:07:20]  of it but they're like on this journey where they're like they're kind of almost unapologetic in how restrictive they want their abstraction to be that might sound like
[05:07:34]  bad but it's incredibly good because it means that there's less leaks it means that it makes sense it means it makes consistent it means that it can be beautiful there's no
[05:07:44]  exceptions like there there there's there are limitations in that and there's trade-offs but there's something kind of pure in that design essence where you can kind of go
[05:08:02]  in and you write javascript sort of something that looks like javascript and then you can just like just build stuff and anyone feels like they can just pick it up
[05:08:11]  and it's their thing it's like their javascript and i think that's like super super powerful um and i and that's why like when people are like you
[05:08:20]  know talk about selling stuff i'm just like you know they're really good at that it's funny because view has elements of that and and um but like view kind of wasn
[05:08:31] 't willing to go all in that way in a sense they were like no no but there's these trade-offs and we need to consider for that so like they they're
[05:08:40]  like no no we can't go all the way sell was just like screw it we're going all the way and like that kind of purity from a design standpoint and i
[05:08:48]  don't just mean like visual design i mean design standpoint is something that's so like i have so much respect for same reason why i have respect for stuff like react to to
[05:08:57]  large sugar because like they know where they're going and they understand it and they built with that without compromise that that is like how you can find like kind of this like
[05:09:09]  if you can define that philosophy for yourself and you know where you're where you're going like things tend to fall in in place for you naturally because you're making this decisions
[05:09:21]  for things that align with each other and then the next decision just aligns with it and everything just kind of snowballs and you and you can find almost like a natural
[05:09:28]  home for it and i i know i'm gonna get you know kind of in the weeds there maybe perhaps for most people but that's that's what i like a lot about
[05:09:38]  svelte is because like they might tie your hands a little bit and certain things but but you you you you never really sense that because like you're just so happy
[05:09:53]  to be there you know like that i mean that's it's it's it's different for me with like solid because solid i i i try to be that pure at times
[05:10:11]  but like i know that i've caved to a couple of the of the compromises over times and every time i i've learned that i pay for that decision you
[05:10:23]  know um you know but the thing with solid was it was a different goal and it it wasn't about like having everyone who use it feel like it was just theirs that is
[05:10:34]  so easy to use i wanted solid to be simple i wanted everyone to use to feel like they could have written it themselves which is it's a different kind of thing it
[05:10:44] 's not easy but it means like like hey i see it i i fully understand how this works this is this is my framework and this speaks more to people who are a little
[05:10:53]  bit more advanced or further in the career but like it's like if you get the point where you can get the learning curve and you understand solid i want you to feel like
[05:11:01]  like essentially like yeah like this almost doesn't need to exist because like i could have written it and like as i said that's a very that's why i'm like
[05:11:14]  like svelte and solid don't really like have this overlap because like like you just see the values like so opposite on that side and the funny thing is some the perfect
[05:11:25]  example of simplicity is something like redux in a sense where like you have all this boilerplate but the cause is really easy it's like a reducer or a scan
[05:11:33]  like a scan function it's like very simple and you just kind of build on it the thing is what's in sometimes that gets hard because you've got to like go through
[05:11:42]  all the ceremony what's interesting to me is like with the right primitives or something like you can find the right small low level pieces and the right language to describe it like
[05:11:52]  there there there does come a bit of that like how should i put it like when you kind of go off the deep end on the opposite side of the graph it kind
[05:12:00]  of wraps around a bit um like when does uh i mean i i hate making this capitalism but when does like socialism become fascism like like sometimes if you if if if you
[05:12:17]  go further not far enough on the simple and you can redefine the boundaries it actually does make it you know easy as well but that isn't really the goal the goal
[05:12:26]  was that i wanted something that like always felt in control of that like i could understand how it worked obviously there's been compromises to kind of make go back the other way
[05:12:40]  kind of like the view scenario where we make things kind of easier and like you're like oh this would be helpful because it saves boilerplate or mixing shorter and i as
[05:12:49]  i said i regret it every single time but um because over time you just realize like that that little bit is just like the thing that you wedged in the way yourself but
[05:13:00]  essentially um you can see how like the different design philosophies mean we don't butt heads very much i mean this is probably more accurate in reality yeah yeah so i
[05:13:32]  know that wasn't i i just kind of interesting because like there was there was a did i i think i oh did i not sorry give me two seconds i'm gonna see
[05:13:47]  if i can find it it might still be in my my notifications um because people kept on pinging me uh ben uh homes wrote a tweet where he was like hey uh
[05:13:57]  i think i think uh svelte has the best form handling out of any framework you know change my mind right and oh let me see if i can find it i
[05:14:12]  i want to share this last one uh ben because then we can actually what what come on sorry i i am searching off screen but it's it's just like you think that
[05:14:34]  when you have people who follow each other like you it would shortcut that for me maybe i'm just like not looking just like need someone to actually like the stream again i
[05:14:43]  can find my notifications this is my fault for not bookmarking this one i should have definitely bookmarked this one let me see here be homes where we're going there
[05:14:54]  it is found it all right i think i think i think this uh this conversation is like right on point you know i i i kind of cheekily asked okay how does
[05:15:09]  it handle eight forms on the on the same page because this has kind of been like a concern with remix and i saw the spell kit solution originally i was like oh it's
[05:15:18]  gonna have that like we had to do some thought with solid start to make things work um and then ben's like no no no we can do multi exports so it's
[05:15:27]  like not that different than how we do uh server actions where you can like have multiple ones in the same file it's like okay okay i'm listening like this is good so
[05:15:37]  i said that's nice sold if one were so inclined to tie it to routing that seems like the way so i wouldn't be begrudging anyone for thinking that's the
[05:15:44]  best form solution is equally as good as other options um apparently that response is actually humorous um i'm laughing at it right now because because i i i was trying this
[05:15:56]  is like legitimately me actually giving i think i think i think adam rakis uh who replied actually this is the highest praise i've ever seen on this website he i think he
[05:16:08]  got that like i this was actually giving svelte um like this is actually high praise for me he he it might not be obvious some people might think there's sarcasm
[05:16:19]  here i'm actually what i was trying to say is this makes a lot of sense if this was the approach i was looking at taking i'd want to take this approach
[05:16:28]  so i can understand why someone would think this is a really good solution um and like because it like you don't really lose anything on the trade-offs and it's based
[05:16:37]  so like it's very similar say so what we're doing in solid start like you get the same kind of benefits from you know that that's all i was trying to
[05:16:45]  say but it it's like the most non-committal compliment ever um so yeah and you know still not so folk glowing reviews from highly respected critics are already rolling in
[05:16:58]  um yeah so funny funny moment for me at least i this didn't come out right um but yes i think this is i think their form handling approach is really really quite
[05:17:11]  nice so um uh man i sometimes sometimes words um yeah yeah no it's good yeah so yeah yeah um yeah yeah yeah yeah no i mean more than that actually i mean
[05:17:50]  that's yeah i i i it it it it it actually makes makes sense on on that side of things there's like other considerations that come into design like svelte
[05:18:04]  would never do what we're doing in solid start exactly it doesn't make sense so like this i actually think this is like very good solution for svelte and it actually
[05:18:12]  like all kind of you know ties in so it's even more than that piece um because you like when you when you work on this from design aspect again you gotta like
[05:18:21]  i feel like you need to like approach it like a designer where you actually go hey how do i think of this from the perspective of like the project or the framework that i
[05:18:31] 'm working on i remember i worked on marco and in some ways marco and solid while like there's some uh technological um inspiration on both sides especially around marco server
[05:18:42]  rendering technology approaches and solids like fine-grainedness getting into marco like there is some philosophical differences on these approaches where i like i had to very consider like when
[05:18:51]  we make decisions we'd be like is that the right decision for marco does that fit the like what the users expect is it consistent with the design philosophy um i think this
[05:19:02]  is a very very important thing because like if you don't follow the design philosophy you might end up with like yeah my friend especially with reactivity you can literally do every anything
[05:19:11]  with reactivity i say this over and over again this is very dangerous you doing anything with reactivity means it's like you could literally make a framework that tries to do
[05:19:19]  everything at the same time and that doesn't always turn out you might have like five different syntaxes for the slightly different things and like it's actually good to streamline stuff and
[05:19:29]  limit options you want to keep things adaptable but not flexible flexible is bad flexible means like there's too much config or too many ways to config you'd rather just like
[05:19:37]  have a thing do its thing really well and just work in multiple scenarios you know with like slight positioning like twist the tetris piece like don't you don't want to like
[05:19:48]  it to like you have too many dials like i'm not a big fan i know there's like a lot of sayings about you know like just have all the
[05:19:54]  the right dials i hate dials get get rid of them right like i just i want pieces that just makes make sense and can be used in like a better versatile not
[05:20:06]  like just yeah i know i dials are dials are terrible um yeah i know people disagree with me this is part of you know solid design philosophy you know like yeah
[05:20:25]  but like it's not every framework's design philosophy you know i i just i think it's important to kind of understand like those kind of pieces you know it's like any
[05:20:40]  product right um and it's perfectly okay to like enter a space and not completely bring your own bias on it like i actually everyone knows how i am not a fan of
[05:20:53]  two-way binding like i think two-way binding is terrible like just one of the worst things ever like just so bad like i can't emphasize how bad it is but
[05:21:05]  i was part of the team that added it to marco six and like i'm okay with that because it like it sometimes makes more sense in certain frameworks especially on the
[05:21:28]  language side where you can keep the constraints like axiom svelte two-way binding is almost good i think i think that i could i could i could picture
[05:21:37]  if i was them maybe how i'd tweak it to be even like slightly better but i'm okay with two-way binding and svelte because the way svelte
[05:21:44]  works if that makes sense but like i i you can you can have that perspective even if like personally where your leanings are like it is like the worst thing that has
[05:21:57]  ever existed yeah so i don't know maybe that's enough from using on framework philosophy it's complicated that's why my responses are complicated and vague it's just the way
[05:22:12]  that sits in my head so yeah this is why we have frameworks yeah because like frameworks are a framework of thinking um i realize this is pointing up to someone else's comment
[05:22:29]  but i i i i'm gonna take it from my own context like right so all right i'm good i hope you are all good we've probably drained the like the
[05:22:47]  viewers off you know like kind of just like they've they're slowly leaving we're check twitch one more time to make sure that i didn't miss anything um oh it
[05:22:57] 's funny i didn't i didn't i didn't share the screen when i was talking about the svelte kit comment today uh whatever i read it out loud that
[05:23:16] 's good enough for you all all right anyways yeah let's call it a stream thank you everyone for joining me um i haven't decided if i'm gonna do a stream next
[05:23:28]  week i probably am and then i'm then i'm gonna be off for like the holidays but um i i think uh i think we're good for today so have a
[05:23:41]  great weekend and until next time