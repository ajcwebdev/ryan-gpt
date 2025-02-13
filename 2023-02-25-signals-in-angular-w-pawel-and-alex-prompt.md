---
showLink: "https://www.youtube.com/watch?v=HstDoVQeP9g"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Signals in Angular w/ Pawel and Alex"
description: ""
publishDate: "2023-02-25"
coverImage: "https://i.ytimg.com/vi/HstDoVQeP9g/maxresdefault.jpg"
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

[00:00:00]  all right hello everyone welcome to my stream today how's everybody doing sort of a bit of late start i was like still making my lunch um sometimes do these things go late
[00:00:14]  we're gonna kill a little time here waiting for people to join on um wow actually people are already here what's going on i guess people are excited for this one i
[00:00:33]  i'm pretty excited for this one we should probably also tell the the twitterverse that we're live now um shouldn't we uh let me share my screen for a second
[00:00:51]  uh entire screen this one okay cool uh which one is this one the angular signals right you guys are here to to to learn about angular signals there's been a lot of news
[00:01:06]  this week it took me a minute to actually find this one all right and if you prefer like i always link youtube but if you prefer um we're also live on twitch
[00:01:23]  uh twitch tv slash ryan solid i hope i got that right yeah yeah let's let's get some people in here if you especially if you come through twitch you're gonna
[00:01:41]  get these pre-roll ads that are gonna run for you know like 30 to 45 seconds i gotta make sure that everyone gets past that so they don't miss any of
[00:01:47]  the killer content that we have going on today so yeah no signal signal signals right that's that's been all week i i love all the the stop lights in the chat thank
[00:01:58]  you thank you all for that um it's it's been it's been a fun little bit of time i have to admit um i think i i think a lot of
[00:02:08]  people don't even realize how long this whole thing's been going on for like this is not a new thing this has been a very old thing and it's a story that
[00:02:19]  starts long before me but it's but uh even my own part of this journey has been quite a while now i feel it feels yeah i mean yeah it's it's
[00:02:32]  kind of incredible to see this kind of swing around i i've been seeing like funny memes all over over twitter um like where's it primogen like which you know i
[00:02:48]  i i i i gotta say and we'll talk about this later on this week in javascript um this isn't and shouldn't be seen as like a signals versus react
[00:03:01]  thing although i know how the narrative has gotten here um when you start seeing an idea get very pervasive everywhere um but yeah but the funny thing the biggest thing i'm
[00:03:12]  noticing when when when you follow this and people are like what the hell are signals like this this is sort of uh where we're sitting at here and i've been covering it
[00:03:22]  on stream i've been the last couple streams have actually been doing deep dives into different implementations which is why it's very suitable to have the folks from angular joining me
[00:03:30]  today to talk about uh what they've been working on but i think in general um there is still a lot a lot of confusion a lot of hype and we need to
[00:03:40]  cut through that right we we need to you know see what's real understand what the implications are um so yeah uh yeah i mean it it it's it's interesting too because
[00:03:55]  angular itself has a very long history you know it's it's been it's one of the oldest frameworks that is still around i mean you could argue that the angular.js
[00:04:03]  and angular are different things but like if you follow its lineage it's it's it's been it has a long history um that goes back to around the same time that
[00:04:14]  javascript uh like signals entered javascript so these are two i think it's gonna be interesting talking to guys today to kind of look at the fact that we've
[00:04:22]  we've had like two separate paths through almost the same period of time and then kind of end up here and what that means and what that looks like um yeah sorry how
[00:04:32] 's chat doing people alive yeah yeah we got a few people watching us now um what do we got yeah i like playing signals in solid looking forward to them in angular and how
[00:04:43]  they fit in yeah no definitely all right yeah no hello yeah everyone's saying hi from the chat i hope i hope it's an okay hour for you i know that there
[00:04:57] 's no good time to stream right like um you i try and pick a time i'm sure it's like like 10 p.m in europe or something and i have no
[00:05:08]  clue what time it is for people in the south pacific but in the u the u.s um where i am on the west coast it's 12 and it's
[00:05:17]  3 p.m um obviously on the east coast so yeah oh yeah this this is this is interesting oh there we go this this this there's there's dedication yeah all
[00:05:36]  right all right how we're doing okay have i have i wound time long enough let's see how's my orange juice doing i already like drank half of it this isn't
[00:05:45]  a good sign usually usually i have some like time to kind of like let it wind down we okay what we're okay we're doing pretty good see every time i just say
[00:05:54]  garbage and sit here and look at chat we go up like 10 viewers every 30 seconds so like we're almost getting to an acceptable amount of viewership now so you know
[00:06:03]  the the guys from angular you know are you know duly impressed right we got to make sure that we we do a good job here and all right let me see i'm
[00:06:13]  just opening twitch up on another window right now so i can actually see twitch chat because i i stream on stream yard and twitch has this terrible tendency to not show me any or
[00:06:25]  streamer doesn't show me any of the twitch specific stuff so i always miss subs i always miss first time speakers all the really cool stuff like first time chatter 9 p
[00:06:34] .m in germany you know there you go so um yeah i'm glad to have everyone here all right all right yeah here we go 160 viewers now we're starting we
[00:06:44] 're starting to get to a good point i think i think we're probably ready to start what do you think should we should we should we start talking about signals and angular
[00:06:53]  is it a good time yeah yeah i think it's a good time okay in that case i'm going to switch over to my my own view here and i'm i'm
[00:07:03]  gonna in in i'm gonna invite two guests onto the show today um which if you've read the stream description you actually know exactly what i'm talking about um uh both
[00:07:15]  paul kozlowski if i got his name right and alex freaking ba maybe i got that right we'll see but let's let's welcome them both to the
[00:07:28]  stream hey hey ryan hey how are you guys doing it's fantastic thanks for having us here yeah the funny thing is for those who don't know i've had several
[00:07:39]  conversations with both of these guys and we always like start with like yeah we should talk about something and then like a couple hours later we're like yeah we were going to talk
[00:07:47]  about something weren't we um hopefully we can stay somewhat on course today but i you know like every time we talk like we start one thread of photos and then we kind of
[00:07:58]  branch off to many of them so we'll see right right so but where i would like to start for a moment is just kind of tie in a bit with my story
[00:08:09]  um a bit just so that because i met alex actually a little bit later and i actually want to just talk a moment and uh talk about uh uh talk about powell
[00:08:18]  and i want i'll give we'll give alex a minute to introduce himself after but just can you can you tell us a bit about yourself tell us about how you involved
[00:08:28]  with the angular um and angular core team and just kind of we'll bring that up until you know we started talking right so so that's kind of many funny histories and coinc
[00:08:37] idences uh so basically i i was like with the angular gs project from i don't want to say from the very beginning but roughly from the beginning so somewhere in around 2009
[00:08:48]  or something like that i just needed a framework for some like side project that i didn't care much about and like at the time well like i bumped into this thing called angular
[00:08:59]  gs and it was working i wasn't ui developer at the time so just like you know it was doing the job um but for some reasons it clicked like i
[00:09:08]  mean it was just working for me so i started to spend more and more time like digging into it and um it also kind of resonated with my java developer soul at the
[00:09:18]  time it has dependency injection right like this is just the the whole thing that the spring framework had and and whatnot so so things clicked for me and started to spend more time
[00:09:28]  on the forums and um and one day like someone from the court team contacted me like hey do you want to write a book about this frame it was like whoa okay uh i
[00:09:36]  did um and that kind of brought me closer to the angular team interesting i didn't realize that were you already like uh a contributor like making no i was so like at
[00:09:47]  the at the beginning i was like my own contributions were just like you know commenting on the forums and just uh and so on but like after writing a book i started to contribute
[00:09:56]  as the open source contributor and then there was another coincidence where my employer started to be be big on angular and i'm glad yes at the time and they said like oh hey
[00:10:07]  you know you you know the team and uh we like open source so like go and contribute to the framework uh on the company time uh which was great so because that so
[00:10:16]  it allowed me to work more with the team and the story kind of progressed like this uh i was spending more and more time and roughly one year ago i joined google as the
[00:10:26]  full-time employer so the covet happened remote work happened and that's kind of it was possible that's awesome so you you following what you said you you've been around
[00:10:37]  angular for like a decade a decade yeah like i've seen it all and big big big fan big champion of angular and then you actually ended up now the past year working on
[00:10:49]  the core team at google that's that's um that's amazing and it's funny that we are saying like it's a decade like for me it feels like it's you
[00:10:55]  know no time like that it's like always so fascinating things happening that it's hard to see the time passing yeah no for sure um yeah we'll come back around i actually
[00:11:03]  want to introduce alex here and he can tell us a little bit about himself and how he got involved in the angular project sure um i just want to point out though
[00:11:11]  i think literally the day remote work became possible for us we're like we're hiring pavel let's do it um yeah so hi everyone my name is alex rookaba
[00:11:21] ugh i'm the technical lead at google for the angular framework um that's the core framework so the core libraries and router and forms and everything we also have kind of cl
[00:11:31] i and uh components um so angular split into this triangle but uh so i've been at google since 2010 um and i've been working on angular since 2015. so it's
[00:11:43]  been eight years now for me um and i kind of ended up on the team on accident i would say um so i was working on google's crm system which used
[00:11:52]  to be a big java quit application so like pavel i also have a java developer soul um and we were looking at rewriting it because the future of quit was
[00:12:04]  pretty uncertain um it wasn't exactly a great web offering experience and angular js was kind of the the new thing at the time so we investigated doing that um and we started
[00:12:15]  talking more with the angular team and at that point they were just starting to think about the 2.0 let's rewrite this thing um do something different and we started talking with
[00:12:28]  them and ended up building the first angular dart application uh dart no people know this but back in the day in the very early days of 2.0 um we actually took
[00:12:39]  the code base and transpiled it from typescript to javascript and we transpiled it also from typescript to dart um so we had one framework that you could kind
[00:12:48]  of author in two languages it didn't work very well um but that was that was kind of the heritage so i was working on this crm application building angular dart code working
[00:12:59]  on the rpc layer um and kind of coincidentally we were under the same organizational umbrella as the angular team both of us were projects and ads at the time the
[00:13:10]  director of angular who was also kind of in my organizational hierarchy came to me one day and asked like hey do you want to solve the same problems but on a much bigger scale
[00:13:20]  um and invited me basically to work on angular on some similar things that i was already doing and i accepted not really knowing what i was getting myself into um but it's
[00:13:31]  been an awesome adventure yeah no no that's the yeah it's interesting too making that shift sometimes is interesting like i i guess you were already working on fairly like infrastructurally
[00:13:42]  kind of parts of it but like sometimes people move try and move from like a product team to uh like a platform team and be like very surprised uh like how different it
[00:13:52]  feels yeah it was i was actually part of i think we were officially called the infrastructure team so we were doing doing all the rpc layer stuff and yeah yeah yeah yeah
[00:14:04]  no that makes sense okay so that kind of gives me the kind of gist of where you guys are where you guys coming into this angular as i mentioned before has a kind
[00:14:12]  of a you know a very long history or kind of touched on a bit there's angular js um which came out back in 2009 uh roughly uh around the time like it
[00:14:22] 's funny if you look back you'll see that like within the same like three to six month period i don't know the exact window angular backbone and knockout js all came
[00:14:32]  out like it was like there's this time where everyone's like okay we can do declarative views we can like we can make real frameworks for the front end and um
[00:14:43]  as i said that puts angular right at the very forefront of um one of those i guess pillars of how people viewed change detection change management in in frameworks in fact in a sense
[00:14:56]  um those three pillars still kind of exist today because like in a sense angular was like the whole i mean it's kind of exemplified through zone js i don't know what
[00:15:07]  they call it but like like anything could change dirty check it um and knockout is obviously like reactivity which is like views and solids uh kind of lineage and in a
[00:15:21]  sense backbone was reacts lineage if you actually watch the backbone documentary or the react documentary recently they mentioned backbone a whole bunch in what their comparison were and in a sense backbone had this
[00:15:33]  sort of re-render everything thing as well it just was with inner html um which was not you know particularly the best but you can kind of see that um
[00:15:43]  there there is like that right from that first period we started seeing a lot of those ideas obviously over time um each of these approaches evolved considerably like obviously react came out angular 2
[00:15:56]  came out um and obviously you know after knockout we had stuff like view all the way to where we are now with solid and not to mention svelte and stuff
[00:16:05]  as well kind of in the mix and um it's it's it's it's kind of interesting right now because there's all this talk about signals and we're probably gonna
[00:16:17]  people are probably gonna go like what is signals and we should explain that in a minute but i'm gonna do this little reverse order how did signals even get on the radar like
[00:16:26]  because my understanding is this this could represent and we'll talk about that more later a bigger change in the way people approach stuff in angular and how like where like like this
[00:16:37]  is a this is this is a change right like this is a little bit right and this is so ironic in a way right like because i remember those times when angular gs
[00:16:46]  was born and knockout i remember those times and there was this very stark uh difference right like the the thing that was advertised by angular always and that that partly what attracted
[00:16:56]  me to the framework is that this idea that your model can leave everywhere right so so like first maybe just to rewind like we really this is this big movement at the time where
[00:17:07]  we are seeing like it's the model driven declarative ui's that other thing right like this is just mother is the source of truth we will have some mapping in the
[00:17:15]  declarative way and the framework will figure out like that that was amazing shifting perspective but where where those kind of things branched off is then where it was saying like you
[00:17:23]  can have any data as model right like you can you can create whatever objects you want you can create uh whatever collections you want you can put it anywhere right like if i in
[00:17:34]  component outside of component you just don't have to carry it right like and this kind of ergonomics like seen from the ergonomic point of view and compared to knockout where
[00:17:44]  you had like computed and like wrapper in these functions things that like you know that was like a big syntactical difference and also philosophical difference so it's kind of super
[00:17:55]  ironic to to sit here today right i can kind of see those pubs kind of reconnected about 10 years later yeah yeah i mean and we all can it's funny there
[00:18:06]  there is a tweet that i shared on stream a couple weeks ago and i i i mentioned this to you guys on the last meeting i i don't think i'm going
[00:18:14]  to be able to find it at the moment here on twitter but like these ideas all end up influencing each other in some way i think the i think the tweet was something like
[00:18:22]  where sebastian marcbaje from versell and former meta you know the basically one of the big thought leaders behind the react core team um he was like you know something along
[00:18:32]  the lines like maybe angular js had it right with zone all along um which was um amusing to me at least because i i was privy to some of our conversations and
[00:18:44]  where the thinking was and i've watched you know i've i've heard everyone from you guys to mishko talking about zone and i believe he was the original creator of
[00:18:52]  zone um that like it's interesting to see how when you look at the same problems and keep on trying to circle around like sometimes there's just not like the perfect set
[00:19:03]  of trade-offs like there's not just the perfect thing and each time we like maybe if we tweak this a little bit we can end up in the right place and and
[00:19:10]  i think inevitably if you circle around enough you like end up pretty much trying everything anyway um and then it's so so hilarious right like because i think looks also like just uh
[00:19:22]  i think like your original question is like how did we even like put signals on the radar right like yeah and there are several things happening uh and we'll probably talk about
[00:19:31]  them more like you mentioned zone zone right like it's like absolutely fantastic developer experience for the small applications it's like you cannot i don't think you can kind of argue with
[00:19:41]  this this is just like this magic like where you don't have to care about like where your data where your state lives how you change it and this all updates magically it has
[00:19:50]  this very yeah it's kind of incredible people don't realize this recently because angular and that has been a bit backseat on some of the social commentary but there was like
[00:20:00]  a tweet a while ago which was like um it showed like a react component with you state in it and then like it showed like the svelte side which was like
[00:20:10]  let count and and you know it was like you know that meme and the funny thing about it is for svelte to get to that point required a whole bunch of compilation
[00:20:22]  work like where like you write like count you do not get like like count i mean you get like count actually technically but like everything else around it is actually very very different the
[00:20:31]  interesting thing about angular that people don't always realize is that um that let count approach works without a compiler like it's actually a runtime version of of that like it's
[00:20:43]  different than svelte obviously and there's details but like that same meme could have been applied um you know at at any point i guess since react added react hooks like people
[00:20:54]  have to understand like when react had class components um it was a it was a lot more let to count as well like there there has been a shift of other players in
[00:21:04]  the ecosystem throughout this time period when you know you know as i mentioned everyone just kind of shifts around it's it's kind of funny the react guys are looking at zone um
[00:21:13]  maybe but a couple years ago when you look at hooks like maybe they were looking at reactivity and then like you know or reactive language and then like you know we we're
[00:21:23]  just kind of like spinning around it you know so it's it's it's definitely interesting to me um but yeah sorry we keep on getting off the off the you were
[00:21:32]  setting it up no like and i think like so like for me there are like three angles from which the setup happened at least for me and i'm sure alex will have
[00:21:41]  like slightly different story but like just to finish on zones like zones are like having this absolutely amazing um experience the thing is that we all also saw like big applications written with zones
[00:21:53]  right like and and the the experience starts to be less amazing mostly because of the performance because you just keep uh figuring out what to refresh in the ui and it takes
[00:22:04]  time and it doesn't respond and so on and so on so um there are performance considerations like there is there is no way about it because like you don't know what happened
[00:22:14]  in the like you know that something happened in the browser and maybe you need to update something uh so that's the only information you've got i don't think i don't
[00:22:21]  think we get to talk about zone at this level without actually explaining what zone is a little bit it what i did try and get um minko to explain zone to
[00:22:30]  me as well and we got kind of like maybe in a more technical place but um what zone does and it it's similar to what i think a lot of have i guess
[00:22:41]  people don't even know about async local storage even as well but the idea is instead of your data being special and instead of calling set state you you just look at
[00:22:53]  any point at which the user could like interact or data could interact with the app and trace that through even async boundaries to the point that like okay i know i am done
[00:23:05]  doing whatever action like if someone clicked a button data loaded from a server and then the data came back at that point you're like oh something could have changed we should go see
[00:23:16]  what changed it's a very different model but it means no set state without a compiler it the data is literally plain javascript objects and it just works yeah the the
[00:23:30]  way i usually describe zones to people right is like what if the browser gave you a callback that you could register right say like hey i will tell you whenever anything else
[00:23:42]  happens on the page where the application got to run some code so maybe you know a click event handler fired or maybe an http fetch request came back and i executed a few promises
[00:23:54]  and i'm done like running that whole stack whenever the browser does something in the application it then tells the the callback about it and says like hey okay something happened now it
[00:24:07] 's your turn to react to it right that is what zone js gives angular right and we do this by essentially monkey patching all of the various apis in the browser
[00:24:17]  where you could react to something yeah so add event listener for for dom elements you know the fetch handler or xhr for http requests set time out yeah yeah i was gonna say
[00:24:28]  the add event listener is like the easy one because the framework is usually responsible for actually appending it but yeah we we must get into fun zone sorry pun again um when
[00:24:37]  you start talking about stuff like async await or like you know like stuff that that's actually like built into the language too that must that must been very challenging yeah so we
[00:24:48]  monkey patch promise dot then right because that is one of those async boundaries where we need to maintain this context of you know waiting for everything that you're waiting for it
[00:24:58]  to finish right and the browser does not have a hook in it to monkey patch in the native async await the trade-off though listening to this whole thing and it is
[00:25:07]  kind of should probably opposite people is like you don't actually know what has changed necessarily exactly and that's kind of weird combination with having this model driven framework right like we want
[00:25:20]  to have the model as the source of truth but like we just don't know which part of this model of this model changed so the only thing we can do is like
[00:25:28]  well let's dirty check and and i specifically don't want to use the water render but like let's just compare snapshot of the previous model with whatever is currently in the j
[00:25:39] avascript it's it's i mean there's it's a data diffing model right like exactly the funny thing is like people don't don't i often talk that there
[00:25:47] 's three types of rendering and i mean this is super simplistic but like a virtual dom goes through the whole pure process of like pure rendering creates a structure each time and then
[00:25:59]  compares that structure with the previous version of the structure and then patches the diffs so it lets you kind of write stuff in a way that like like you feel like you're
[00:26:09]  like building something and then react goes and handles that in the background um but but it's a two pass approach um then the dirty checking approach is like the one pass approach
[00:26:19]  it's like look while we like we we have the previous data from last time while we're you know doing the update instead of you creating you know a bunch of temporary like
[00:26:29]  virtual dom nodes we're just going to see what the new data is and compare it as we go so like there's actually similarities to a certain degree uh to to the
[00:26:39]  kind of virtual dom libraries it's just like a single pass instead of uh two passes and this is true for there's a number of frameworks to do this kind of approach things
[00:26:47]  that use tag temp later literals tend to use this kind of approach to a certain degree there's also full details around components and what part reruns and all that kind of
[00:26:55]  stuff but but the general mechanism is it's a data diff i don't know i don't know if i should escalate all this like for two seconds do people here
[00:27:03]  understand the the three different models i i i i'm sort of like going to jump off but i i think it's actually might be important just to really quickly kind of do
[00:27:12]  this for two seconds because i want you can view your app as like um like there's like in in the kind of dirty checking world you know you might have some data
[00:27:24]  and it's like a hierarchy you might have a array of users and those users have other other things and then every time so yeah okay here's some kind of tree right so
[00:27:41]  this is this this this could be a data tree right data data data model let's call it whatever and what we're talking about is like you get the data model and
[00:27:54]  then you at each point of interest i maybe i'll use um square over here like do you guys keep them all actually i don't know about this about maybe you guys can
[00:28:06]  clarify for this for me do you guys keep the model with the bindings or do you like so like so maybe each binding so like every usage in the template is this for
[00:28:19]  us this is this place of dipping right like so we this is where we remember the previous value of the model right that's that's exactly what i was getting at so
[00:28:26]  um we have you know the actual view let's say and the actual view uh sorry let's hope this visualization actually makes sense um inside of it has just the previous the
[00:28:53]  previous versions of the data so every time um let me do this it's probably the worst explanation ever um it's actually fantastic we we are hiring for like a redoing
[00:29:10]  documentation drawing yeah there we go so like what happens is you come in with like the data model and when you change it you might go okay i'm going to update this
[00:29:22]  mode mode here and then like what ends up happening is then you go okay something's changed the zone tells us and then we go back into the real view and we're like
[00:29:32]  okay um this is still the same this is the same oh this has changed update the dom right like and then you know this hasn't changed and move on like essentially you just
[00:29:44]  every time you go through you update the model and then run it against the the real view and this kind of differs a little bit from like in a virtual dom library what
[00:29:55]  you end up doing is a little bit more like i want to get rid of these little things here i mean it's kind of implicitly in here but essentially instead of having
[00:30:08]  it based on like the data model and diffing it's like okay let's move this a little bit here it's like render v-dom and then it's like
[00:30:31]  oh i missed one and it's like previous v-dom and then it's funny because i'm using squares for this but and then it's like real dom so
[00:31:02]  there's basically like here you you update the data and then do a pass here you create a new virtual dom and then you do a similar kind of walk where you like compare
[00:31:16]  this to this so like if if you know a node changes here then our value color yeah it doesn't really matter no i use the other color maybe i should use a
[00:31:27]  brighter color let's use a brighter color if yeah sorry here i didn't actually propagate the change all the way through right but then it'll compare it with the previous one so
[00:31:42]  it'll go through and walk through so first you create it then you go through and walk it through and then it will go okay i actually need to mutate this um
[00:31:55]  so like it you generate a whole virtual dom compared to the previous dom and then react goes okay so that thing changed update this one okay people still with me hopefully hopefully that makes
[00:32:09]  sense yeah so so like you kind of also also walk different things right like because with the video we will walk most like just trees that like represent more like a rendering output
[00:32:19]  while with the uh angular approach you like walk with a a set of bindings right like this is kind of not directly connected uh to the to the structure of the uh right
[00:32:31]  it's it's a like maybe like if you like it's good illustration if we uh look at the two extreme examples right like let's say there is a component with
[00:32:40]  uh 100 bindings or or like component with one binding right like in angular world uh just like component with one binding you just have like one place to check with hundred binds you
[00:32:51] 've got hundred places to check uh with vdom it's like you know like it's not the number of bindings but how big your vdom is right like so
[00:32:58]  so they they scale differently right like the right the number of binding versus like how big your ui is and and this was the story at the beginning and then we started to
[00:33:09]  have like blog dom things where people started to capture some insights right like that the parts of the video are also static and so on so things started to converge as well here yeah
[00:33:19]  yeah definitely and i was trying to draw the third model which uh which was the reactive model and the the funny thing is the diagram for the reactive model looks um a little
[00:33:29]  bit similar to where we started to on the dirty checking the difference is um this is it's almost like it's almost like this like this circle is this circle in the reactive
[00:33:46]  diagram so it's almost like it's it is a data model but it's like it's like it's almost like you you you update or it's almost like you
[00:33:57]  kind of draw arrows in a different direction right like on the top drawing you've got like arrows from the bindings to the model and here's this kind of yeah two arrows
[00:34:07]  in the like full versus full right like kind of thing yeah i mean or they're like maybe not even arrows they're just lines you know like it's kind of like you
[00:34:16]  don't walk down them so much you just like yeah i don't know this is it this is like you go in and you update this which updates this it's um
[00:34:26]  yeah you kind of deliver notification to the place which is interested in right so if people follow it all it's one pass two pass no pass right like it's but don't
[00:34:40]  like that's not a free trade-off it's like you do a bunch of work up front to actually make sure that it's like that but this is like a
[00:34:48]  very simplistic view of when i said there's three different renderers in the world and the truth of the matter is we're seeing mixing and matching as you mentioned like we're
[00:34:56]  like um and even like you might have a virtual dom that has signals in it or you might take a dirty checking model and put signals in it and stuff like so like
[00:35:05]  these aren't the the rendering question is actually a little bit separate from the change detection mechanism but i just wanted to kind of point out here for a moment that like really high
[00:35:15]  level there's like three different rendering methods perhaps that that check with everyone and and and i tend to think that the two first ones are kind of more similar than different right like
[00:35:29]  yes the the the places where the different happens are different but the the philosophy is kind of the same right and then this one's just like the the the the crazy one
[00:35:39]  that you like you keep out away you know at weddings you know um and here we are now so uh yeah uh how are we doing chat people people people still following i went
[00:35:52]  a little bit on the technical side a little bit but let's let's let's let's keep on going so now when we're talking about stuff um i what i
[00:35:59]  wanted to kind of bring up and i guess maybe this is a little bit early in the conversation here though is this is we're talking about zone and it's dirty checking but
[00:36:08]  people have been using other forms of reactivity in angular and like a lot of times when people talk about they're like oh yeah well what about you know rxjs or
[00:36:17]  something um how does rxjs fit into all of this yeah like alex because like for me this is a second angle from which we are coming right like zone like
[00:36:27]  we want to go to the world where maybe there is optional zones rxgs like as you said like people are using but yeah not even talking future future just like in general
[00:36:39]  like angular 2 came out i think was it with angular 2 and suddenly it was like angular 2 used with rxjs like what like at least that's what it looked
[00:36:49]  like from the outside it was it's kind of like the react redux um like arrangement it that's what it felt like so maybe you can speak to like just like what
[00:36:56]  is it what's going on go for it bubble this is yeah no i mean so so i'm i'm laughing because there are there's so much history and like every i
[00:37:06]  think like everyone on the team would tell like slightly different version of it so i don't want to like that's why i would say like hey uh let's do let's
[00:37:13]  say like let's have two versions right like because we remember things differently but uh um but i remember like the one of the first rxgs um presentations from uh j
[00:37:24] afar hussein uh that i think at the time was at at uh netflix and he he had this very uh convincing and like amazing presentation right like just talking about the
[00:37:38]  uh push model and and like kind of as the being uh mirror of the iterators and like you know like that this was like extremely well um uh done presentation and that was
[00:37:52]  roughly at the time when the angular 2 was being born and we absolutely saw a lot uh of um power in those apis and like a lot of good properties and i
[00:38:03]  think alex will talk about like http story and whatnot but but there was this like honeymoon period um where we we like this is amazing like let's have it in the framework
[00:38:14]  and then how observable started to um kind of be introduced in the parts of the api right like in different apis on the framework it got added as the diary dependency
[00:38:27]  on the framework so every angular developer was getting rxgs right like so this was strong signal to the community like we are betting on rxgs and so so that
[00:38:38]  that's kind of part of the story but but essentially the framework still was built on this top-down dirty checking right so we had this uh what yeah would those things be
[00:38:50]  when those yeah exactly exactly right because people talk about rxjs also in react and that's something more familiar with and react had to go out as far and say like look
[00:38:57]  we aren't reactive in that sense of the word reactive and people were having a really hard time fitting rxjs into react in a way that and i i wouldn't
[00:39:05]  imagine angular being much different as we just mentioned how similar stuff is actually sorry i just want to address this two quick quest thing there's someone mentioned incremental dom and in my mind
[00:39:15]  incremental dom still fits in between those first two things like a vdom that does it in a single pass is not very doesn't like where you check might be different but it
[00:39:26] 's not that different than like uh the dirty checker just like from my perspective it's a one it's a one pass um virtual dom essentially um but anyway sorry i
[00:39:35]  hijacked that for a second but i just wanted to kind of no no but but like i think like it's it's a kind of like what where we left off is
[00:39:43]  like you know like you've got this uh powerful reactivity system that like uh creates this reactive graph of dependencies and pushes notification down to the binding level right like we the other
[00:39:55]  thing that we introduced in the framework was so called async pipe which basically allowed us to consume observables on a binding level oh nice right like so so we had integration
[00:40:05]  of like cons like con the consuming part of observables in the templates we we always had the story yeah the basic pipe is basically the await keyword in a template right it's
[00:40:17]  like wait for this thing to be present and okay right but but but again you still do have this fundamental mismatch of uh this reactive graph comes and like delivers this notification
[00:40:28]  down to binding level so you know like oh this attribute got updated and then what we do with this like hey zonji has kicks in and by the way i'm going
[00:40:37]  to go through entire application and dirty check it right like and and there there are some optimizations like we we we've got like you know should component update like the the
[00:40:47]  angular version is called on push so so like in practice you are never checking the entire tree you are pruning this tree very aggressively but philosophically you've you've got this
[00:40:59]  mismatch but yeah i'm just i'm just curious on push it was mentioned to me a few times and you kind of uh attribute to kind of similar to like should
[00:41:10]  component update is it similar like that like at a component level you kind of just go yeah ignore this one it'll handle its own changes yeah yeah so it is component but instead
[00:41:19]  of having a function that like you know tells the framework should this component update with the we've got a flag and the set of characteristics that goes with this flag okay so that
[00:41:28]  makes sense but like it goes up to these the same thing right but once once it takes over it must take over the whole subtree like just conceptually from where yes
[00:41:38]  yes yes yeah yeah so so so a mental model perspective right on push to me is kind of you know if you think of a normal angular component with no extra change detection options
[00:41:50]  set um it by virtue of zone js right it can depend on whatever part of the model of your application at once right um it doesn't have to only depend on its
[00:41:59]  props it doesn't have to only depend on its local state it can reach into some you know global variable somewhere if it wants and read that value and zone js will ensure that
[00:42:07]  that gets propagated right when you make a component on push you're kind of opting into a different set of rules there you're making a promise to the framework that i
[00:42:16] 'm not going to depend on the global model in that way unless i give this notification of like hey framework you need to update me like something i changed on something i depend
[00:42:26]  on changed right yeah that is on push and it does affect the entire tree which is arguably broken but right so i mean what i'm hearing though is if someone really like made
[00:42:40]  this switch at the beginning of their app they're like look i care about you know i don't want all this dirty checking i like reactivity i might just build my
[00:42:48]  whole app under on push it's almost like like here like my app is an on push angular app and my app is a zone angular app this is something i imagine has happened
[00:42:58]  yeah and that's exactly what is happening and like large part of the community if not the majority of the community is doing exactly this right so ironically we were a reactive framework for
[00:43:10]  for the very long time the the other aspect of it which is you know like components in angular classes right like so we never had this uh idea of like components rendering yeah
[00:43:25]  so to speak right right yeah i mean that's the funniest thing to me because in a sense like react class components that the re-render thing was not something people talk about
[00:43:35]  like technically they re-rendered because you have to generate a new virtual dom but you could just pretend that that render function was a template or whatever rendering mechanism and that
[00:43:44]  all the state management happened independent of the view handling of things um same is true with view actually right view they have a setup function that runs once and it's just the template
[00:43:56]  after that point so right so so like the exactly that so the angular components were always like in the spirit of setup function right like which is you you've got a place you
[00:44:05] 've got natural place where you create this reactive graph so so this is like super ironic right like we've got this framework that at heart is like top down there's the
[00:44:16]  checking but at the same time it's very reactive framework because we've got a system that can create the reactive graph deliver notification and you've got component model that allows you to
[00:44:27]  set up this graph when components get created and they are never rendered yeah this this is interesting because this this this is almost i i i can see where one side maybe be
[00:44:38]  more dominant than the other side because this is actually like a fracturing point almost like third-party libraries everyone has to decide like i built my component for on push i built
[00:44:45]  my component for zone um and people who build kind of like component libraries ui component libraries for angular it's almost a requirement that they have to if not beyond push themselves
[00:44:57]  then support running in an on push context yeah because of this property that they could get pulled into an application that happens to be using this style and be subjected to that set of
[00:45:08]  rules yeah yeah i guess so because zone is like the lowest so this is actually unfortunate because like i mean i'm just processing this in real time but you'd end up being
[00:45:18]  like okay fine i need the support on push so you build the thing to support on push and then you're like do i want to build a second one you're like
[00:45:23]  if the people are using zone it's their own fault like like you kind of get to this point where you're just like zone will work anyways so it's just like the
[00:45:31]  lowest common denominator where all the the the you know stuff goes so so like i mean and you are touching up on like the really important part like that we've got one framework
[00:45:43]  but that could be used differently and you can think about it very differently i mean this is this is actually not uncommon i mean i i'm actually been concerned about this a
[00:45:55]  lot recently because there's been that's kind of potential that's kind of forking in other places like um yeah i mean those render models that we showed a minute ago are
[00:46:04]  considerably different right when you have something that's like on push like very similar reactivity to almost like my third version of rendering and then you have like the zone dirty checking or
[00:46:12]  the virtual dom um if if it is really a switch or something like you you do end up with like these two worlds and having to make a choice on how you author
[00:46:22]  your components and like how to put it all together right the um and like i think there's some solutions which kind of marry them in a way that maybe you don't have
[00:46:31]  to worry about too much um like view does that generally but then if you look at something like view vapor um like their new compiler thing which is those two worlds are like
[00:46:40]  separate modes again so like it it's interesting to see how that plays out but for you guys you guys are like okay like i i'm getting to the sense that there's
[00:46:50]  like a problem to solve here right and i think like so like we've got zones we've got this you know like we want to be reactive framework but like we are not
[00:47:01]  and like what should we do with this is that that's one building block um i've got my also other story uh for uh like and i think this is kind of
[00:47:12]  kind of how we met with ryan like how actually i learned about signals is that uh before joining google i was working for the company that was doing a lot of shared components
[00:47:23]  so like you had uh pieces of logic that you wanted to deliver as the reusable piece and share between multiple applications and it sounded like it's a job for state management right
[00:47:36]  like you you've got the state and you've got the logic uh there you combine it and you can share between the applications and so i came to the reactivity uh
[00:47:47]  space also from this angle like what is the primitive that i could use to actually encapsulate logic that um is reusable between application is reactive forward like right for some sense of not
[00:48:02]  actually tied to like the specific component tree or whatever yeah right and uh and i think like when we first met i uh we were talking about spell stores and and and whatnot
[00:48:12]  right like so like that was also the point in time when i was like probably looking at every possible reactivity system on this planet yeah yeah like a little context here because like
[00:48:23]  obviously the the announcement uh you know about angular and signals and stuff went out like last week i've been talking about how long has it been like 2020 like yeah exactly it
[00:48:32] 's before i started working at ebay i think actually i think it was like it was like march 2020 ish or something like that yeah yeah so this conversation has been going
[00:48:42]  on for quite some time and you reached out and you're like oh you know let's i'm really interested in this i want like i'm looking to all different types of
[00:48:50]  reactivity systems and this is before you joined the angular core team but you yeah i was open source contributor but i was not working as they're full-time on it
[00:48:59]  yeah right right right so yeah i mean continue no so like i mean and and i think that that's also i mean like so there's a risk of branching into like
[00:49:09]  state management like i do i don't know are you ready for this or like i should stop myself because uh there's the whole um well i mean angle that will come when
[00:49:19]  we start talking about signals and why yeah i mean yeah i mean maybe maybe we're almost there because i think we've kind of caught up to the present here you were
[00:49:29]  looking to state management solutions um you you got your hands dirty with a few things um you you're obviously very connected to the angular team and they're they were also sitting here
[00:49:42]  going how do we solve this problem um and i'm yeah i mean yeah you're right let's hop over the the state management stuff and just go a little bit closer
[00:49:53]  to the to the present right so so i think like you know if you if you get those um like if you look at zone gs that's like oh maybe we want
[00:50:04]  to be less special in this regard like maybe that's not the model we want to enforce for all applications like you know like you just like want to have a different model
[00:50:14]  then the question becomes like what drives uh what actually tells the framework that um yeah yeah something changed i was wrong yeah no this is when we have to jump into it i was
[00:50:30]  i was i was trying to like justify the stuff but we've been just like egging on i think i think we just need to start here with basically we've gone
[00:50:38]  to the point in the stream where it's like um what is a signal like i i think i think we've been kind of talking around this for a long time and like
[00:50:45]  i'm already seeing it in chat where people are like what what's the difference between a signal and an observable you know um and then observable and promise plus plus and
[00:50:54]  you know like a whole bunch like there's there's a bunch of com comments here defensive graphs observable is basically all potential event sources for the final value listening for it
[00:51:02]  like i think we almost we got i think a bit of an angular audience here compared to my normal audience as well so i think we should just kind of get into like what
[00:51:11]  is this alex i'm talking too much i mean i can talk more but like go ahead yeah um so that the just touching back to the rxjs question right
[00:51:25]  um back in 2014 when angular was kind of conceived as a successor to angular js um we were we were as pavel mentioned like listening to a lot of talks by um j
[00:51:40] afar usain and ben lesh from from netflix talking about this rxjs library and all the interesting things that it could do um at the time i was like
[00:51:49]  building the angular http client uh which does use observables and one of the really cool things that that kind of came out of that is observables have back pressure so you can
[00:51:59]  you know when when something is no longer interested in a value that propagates back to the source and then the source can do an effect like unsubscribe um or cancel http requests
[00:52:09]  or things like that um so there were you know this thing was attractive to us in a lot of ways um it solved some problems that we had we had seen in the
[00:52:18]  kind of first versions of you know angular js dollar http things like that at the same time though um the core kind of dirty checking algorithm of angular was not really modified too heavily
[00:52:33]  when migrating from angular js to angular there were some changes in in kind of the like driving approach to it angular js used to do kind of multiple rounds of dirty checking
[00:52:44]  to see if the model stabilized uh because you would run through the dirty checking and then like maybe you fired an event in there that updated the model again you had this kind of
[00:52:55]  model to model synchronization and you had to go back and check again angular did away with that okay but in particular we didn't set out to kind of change fundamentally how
[00:53:06]  the core dirty checking algorithm worked there was no appetite to say like let's replace the you know execution of bindings all with observables or all with promises or any other kind
[00:53:18]  of primitive we were still very much spiritually in this mode of we want to build a top-down global dirty checking framework right so fast forward a few years and you do have
[00:53:29]  this kind of fracture where a large part of the ecosystem is still using that top-down zone js approach and another large part of the ecosystem wants to build applications that are
[00:53:41]  more reactive that use things like rx.js to deliver this notification down to the component or to the binding level that like hey you need to update this particular piece needs to
[00:53:51]  re-render yeah yeah yeah yeah definitely yeah so like and then you guys are like okay how do i right so so so probably like somewhere around like uh summer last year
[00:54:07]  i started to have like tweets where like that it was visible probably that i'm like looking pretty much and like it's obviously i'm it was visible that i'm looking
[00:54:17]  because i'm tweeting a lot but like i was meeting with alex and uh we essentially had a long and hard look at the not only at this mismatch but essentially like
[00:54:30]  all the things with the core like change detection algorithm in in the framework and seeing this model of xds where the the the push notification that something changes delivered to the component
[00:54:41]  or to the binding level like that was something that we liked a lot right like this this model where you've got a reactive graph and it tells your component that like hey you
[00:54:52]  change you need to render um the that was like something that was fitting naturally in in the way we thought about those things uh so at this point the question became like okay
[00:55:06]  if we want to make the framework more reactive uh you know the elephant in the room is like what does it mean right like which reactive system you should uh which you should use
[00:55:17]  and there's there's a second kind of part of that story too um which is you know angular is in a position where we've been around on the web for a
[00:55:27]  while um you know that the framework is you know over 10 years old at this point and you learn a lot when you watch people use your technology for 10 years and we've
[00:55:38]  seen some of the the issues with zone js when applications scale up from this initial experience of like this is great i don't have to think about my you know where i put
[00:55:48]  my state at all to suddenly i have you know a thousand components and these huge state trees and things are slow and i don't know why um and so we've we
[00:55:59] 've kind of looked into some of the challenges with stone js and some of them are solvable with you know focused optimization some of them are just fundamental to how this thing works
[00:56:10]  um there's really a limit to how much you can optimize when you have no information about what's changing or where right right and i think this this is not an angular
[00:56:20]  specific realization i'm going to tie this back into react and react hooks too like there is an aspect that react has its own you know render model and it's not like reactive
[00:56:30]  in the same way but they they got everyone to start writing stuff in terms of state derived state and side effects like there is a language here um that that's very clear
[00:56:42]  um and it's int like it interests me to no end to see like even svelte and like let the dollar sign variable and dollar sign expression like you see these same
[00:56:52]  three language uh primitives show up over and over and over again yeah i remember this article of yours where you just basically put all those different syntaxes that sometimes like looked widely
[00:57:04]  different but like just pointing out like hey this is this is the same set of primitives that we are talking i know what you're talking about because i had to look
[00:57:11]  it up a week ago because i was trying to find out the first place i used the term fine-grained reactivity um and it's funny because in this article which
[00:57:19]  i talk all about fine green reactivity actually include knock uh react in the category even though react is not like in the pure state yeah actually you know what i'm going to
[00:57:27]  pop this up on my screen my screen up on here for two seconds to show what what i was talking about here let me blow this up i was kind of commenting that
[00:57:35]  if you took knock out from 2010 and go observable and like get the value set the value view you know there's like dot value solid there's this tuple mob x
[00:57:46]  there's this dot data on their block this is i think it was oh i just put it in an object here for the sake i could have used their box observable you
[00:57:54]  state but i actually went through and i was like okay they have the concept of observable or state they have the concept of derived state or computed which again is knockout
[00:58:05]  pure computed this is 2010 like this if you want the map you can go to react and go use memo like it's it's very you know there's no getter but
[00:58:14]  they have a dependency rate like you can still kind of see the similarities computed in view create memo and solid computed in mob x it's like same thing and then finally the
[00:58:25]  side effects um again in knockout they just had computed they didn't really differentiate i guess there was pure computed in knockout yeah pure computed so their effects were computed view head
[00:58:36]  watch solid create effect mob x auto run and this and if you look at all of these i didn't include svelte unfortunately but i could have put svelte in
[00:58:44]  here as well for all three it'd been let then it would have been um dollar sign colon uh whatever variable equals something and then dollar sign colon console log you can see
[00:58:57]  that like these are all remarkably similar like just like like it's a matter of like changing some some function names and use like calling a function or dot value or whatever like
[00:59:11]  this language is ubiquitous across a lot of ui frameworks um yeah and the sets and the set of concepts is so small right like that that's i think that the beauty
[00:59:21]  of it that it's conceptual surface here is so reduced right like if you if you see like if you look past the syntax differences uh then like you end up with the three
[00:59:32]  pieces to play with and that's uh right right and this is a stark contrast to something like rxjs which tells you like okay there are a couple of those concepts
[00:59:41]  there are things like observables which are the atomic state but there's also things like but not even atomic state they're actually observables are actually streams and then there's uh
[00:59:49]  subjects and behavior subjects and i wouldn't be able to tell you the difference between those two um at the moment they i always confuse those two together and then you so you have
[00:59:57]  these very you have a few of these base primitives or concepts and then you tag on 60 operators or so um or i don't know what the current count is i
[01:00:05]  remember one time it was about 120 and then it got shrunk down and streamlined and now i think there's like a healthy as i said like i don't know it's
[01:00:13]  like 50 or 60 ish operators that kind of yeah define this what's interesting about this i have my opinions actually maybe you can tell me what's interesting but i think i
[01:00:23] 'd rather hear from you guys than me repeating what i always say so so i think like i mean the one thing that i want to say up front is that like you
[01:00:33]  know it's easy to say like oh you know like with signals we've got three concepts and everything is beautiful and we derive state and uh respond to site like with side effects
[01:00:43]  and and that's great and you go to the rxgs world and you've got those dozens of operators and you need to learn them all and master them and it's
[01:00:52]  hard uh so people kind of tend to draw like conclusions or like one is called called better or like easier or like better suited or something great is but i think it's
[01:01:03]  super important question like question to us like why there is a difference right like why um are those the same systems and we're comparing like you know number of operators just to have
[01:01:14]  fun or there is something fundamentally different and and my understanding is that those are fundamentally different systems uh and for me the eye opening um talk uh was and i will try to
[01:01:28]  drop it on the chat in um in in youtube in a moment but uh there is this uh talk from connell elliot uh i think it's kind of essence of
[01:01:39]  functional programming something i will i will pause the link but essentially it draws the distinction between a stream of events um and something that the talks called behaviors right you've got behavior subject
[01:01:55]  right and that's the thing is behavior subjects are actually very similar to signals like there is a concept in rx that that exists that you could say is is equivalent it's
[01:02:06]  not the observables it's actually this is why i actually went with the term signal in case anyone knew it's just like i it was getting really confusing because knockout
[01:02:13]  called them observables mobx called them observables but then also rx called something different observable and i was like okay i i i was introduced to the knockout mob
[01:02:24] x way first but at the time period at which um i was working on solid rx was like the more known solution even though it wasn't always that way they they
[01:02:34]  flipped and i was like okay i'm not gonna fight with like over the term observable and on the other hand i'm not gonna like be calling my primitives behavior subjects
[01:02:43]  like like like like picture if you're like use behavior subject like that that's your framework like count equals use behavior subject um right and and and it's kind of like
[01:02:57]  so if we if we kind of like like agree that those are those two concepts of like stream of events right like and behaviors so like xgs is just wonderful at modeling the
[01:03:07]  stream of events and dealing with the notion of time right like the events are just like naturally happening like oh like you know like something happened something like you clicked here you click there
[01:03:20]  uh and so on so like maybe there's some time between those two clicks and and those like eric is just like fantastic at modeling it right uh but there's this
[01:03:30]  other side of the activity where we're talking about behaviors which is just like values right like this there is a value it it can change and it can tell you that it changed
[01:03:39]  but it completely removes the notion of time right so the fact that we've got uh just one operator in signals it's not because we invented something smarter or maybe we just
[01:03:52]  like had uh some you know like unique insights we just like look at the other side of the problem so to speak well it's if you remove time from the equation almost any
[01:04:05]  relationship can be expressed as like a bunch of expressions like exactly you can be like it's this plus this or this time this or yes iterated into and pushed into this or
[01:04:16]  like like you can almost always express any kind of relationship as a combination of some kind of just basically some kind of kind of imperative like code it's in a bubble it
[01:04:25] 's wrapped in a function or call or something but you can basically describe any relationship that way and this this is very different where when you have time involved like you have callbacks
[01:04:36]  you have promises you have like like you almost pushed into a place where you actually have to define what the operation is if you want to make it more declarative otherwise like
[01:04:46]  like there's no there's no system to be spoken of it's just like you know yeah this and then yeah for me i i think like the biggest difference that i see
[01:04:58]  there between this like stream of events right and then this concept of a behavior of a value changing the value does change over time um is like can you ask the question what
[01:05:10]  is the current value and behaviors like this this kind of start living in a synchronous world where it always has a value yeah you can always inquire like what is the value of
[01:05:23]  this thing you can use it in a computation when you derive another value and you can kind of like transitively ask this question of like what is the current value of
[01:05:31]  this expression right it doesn't make sense to ask like what's the current click event you could ask what's the most recent one but like this concept of a stream of click
[01:05:41]  events has no current state yeah yeah it's not it's not it's not like a it's not like a variable itself like it's not like a value like it's
[01:05:49]  like it's not like here's my count or here's my like thing that you hold it's like this is like my container that things flow through i don't know
[01:05:58]  it's i i wonder about uh this part of it is because the stream part or the observable part of rx is very well developed out but i never understood the behavior
[01:06:09]  subject part it was more is like it was like is this just like a fancy version of subscribing or something like i never could figure out what it was there but like did it
[01:06:17]  do anything like it is very much like accurately representing this concept of a behavior right it has a current value behavior the difference between that and normal subject is that it has a
[01:06:29]  value always and you can ask it directly dot get value it will tell you its current value um it's not very well integrated into rxjs because the moment you do something
[01:06:42]  with this behavior subject like map it right which is just i want to almost create a computed derived expression you completely lose this connection to the fact that it was a behavior that
[01:06:53]  it had a current value this is what i the world of like subscribe and maybe it'll tell you something at some point so naturally gravitate toward like you know stream of events
[01:07:02]  even if you start with behaviors and you want to like stay in this world like you just like no dies like i mean you apply operator and you're actually describing one of my
[01:07:11]  early experiments i was working on solid and i saw that the the the tc39 had dropped object dot observe and that they had taken there was a new observable spec
[01:07:21]  and i was like okay i'm not going to invent a new signal type thing i'm going to use observables and then i'm like okay i will use behavior i there
[01:07:28] 's a version of solid i i joked about how i wasn't going to have used behavior or whatever there if you go far back enough in the commits you'll see like
[01:07:36]  new subject i actually use the term subject uh uh uh as as as as like the primitive and i went this way and my problem was exactly what you said i just started
[01:07:48]  because i got into the templating system and i started just turning every observable i started like just every operator i started like patching it so that it could be like have
[01:07:57]  its last value it just i was i was fighting the system so hard and then i was like what if i don't because the thing async pipe my guess and i
[01:08:05]  don't know it's it's a bit like how preact handles signals in the v-dom like the pipes got to get to the final view representation you can't be
[01:08:14]  in your template and be like oh it's uh i have this value x and actually right here i need i need to format it or i need to multiply it by two you
[01:08:23]  you have to put the times two in the rx stream to actually get it to pipe in there like you can't just be like you know i've got actually you
[01:08:32]  can okay because we in the async pipe we have a placeholder value so before the rx stream produces anything async pipe will return you null um and your times two
[01:08:46]  better work with that down downstream right okay so you guys have to live for people to deal with this but yes we convert from the asynchronous world to the synchronous world okay so
[01:08:57]  that's cool i was doing that and i was just like why am i so this seems like craziness like like okay so but i've always entertained when i hear people have
[01:09:07]  gone down that other path and actually had it work for them because sometimes you get i think this happens a lot in software you kind of go down a certain way and you're
[01:09:13]  like this is like a lot of effort um but then it's like if you have the right incentive you might be able to find something and it might actually be kind of
[01:09:23]  cool um but okay so that's good that was solved but just from my own experience this one well like you know it was half half solved right like because before the observable
[01:09:31]  emits we we cannot give you the value we cannot magically go and find it right like so the best we can do is to give you now and if you're like when
[01:09:37]  you're writing an expression like as i'll accept like you better be prepared to handle it right like yeah i mean i i'm okay with that i mean it's more don
[01:09:45] 't denoted in solid but like we have async signal primitives like resources those are going to be null um just because like they're they're known mind you that
[01:09:56]  is not every single signal in the whole system like you so yeah so yeah but okay i i'm i'm i'm i'm following along so far so so the other i
[01:10:08]  think like the current value is a big big deal right like the the other thing that we we uh i think is that you know the notion of the code versus code of
[01:10:18]  cold observables right like the if you when we are talking about signals they are i don't know i'm hesitating like i say always hot right like because they always
[01:10:29]  do have the value like so so the act of subscribing or reading doesn't have like side effects at the distance right you can read the value without causing like network requests or or
[01:10:42]  something like right yeah maybe we should stop there because i actually haven't done a deep rx stream so people might not know the hot versus cold thing and it and i guess
[01:10:51]  another one is unicast versus multicast these are those two often go go hand in hand and i don't know if i want to draw the pseudocode
[01:11:01]  for this for someone but the the example that i usually give for this is it's like at least for the multicast unicast thing is it's like it's like
[01:11:11]  the difference between if and this is more me talking signal land so maybe the angular audiences doesn't hit as well but like picture if every time like let's pretend you have
[01:11:23]  a counter where you click a button and you and that that event kind of like pipes into uh some kind of like scan or reduce thing where it just adds the value on so
[01:11:36]  every time you click it's plus one plus one plus one plus one plus one the the the the idea of unicaster's multicast it kind of is the idea that
[01:11:48]  like every time a new person like cut or like subscribes or the first person like basically if no one subscribes to this um stream or whatever there's no event listener
[01:12:02]  like there's no producer it doesn't exist and that's what it means by being cold at the act of actually subscribing to you know the count downstream or whatever is actually
[01:12:14]  what causes the event listener to get added to the dom so like it's the producer and then as and then the difference between single cast and multicast would be every time there
[01:12:24] 's a new subscriber you add another event listener like it's if it's unicast because essentially it creates its own producer and so if you have five things listen to count
[01:12:34]  there's five event listeners now obviously no one would actually write their code this way but this is this is like the the most base level of like the default of the way
[01:12:42]  observables work is that every time someone goes hey i care about count it'll add their own event listener and then add do their scanning and then come out the other end whereas
[01:12:54]  in a hot system um well the second that you say i'm going to like subscribe to you know like i'm going to do something based on event then the event listeners added
[01:13:05]  and then with a multicast any additional subscribers just get added to a list and then you so one event triggers multiple things i don't know is that explanation okay fantastic yeah
[01:13:20]  and and you know adding extra event listeners right is just like that's probably you know you don't want to do that from a performance standpoint but it's not going to hurt
[01:13:29]  you too bad um in rxjs you know you can have an observable that represents an http request and that request isn't made until you subscribe right because the observ
[01:13:38] able is cold it's not doing anything unless you ask it to but every subscriber is a new http request that goes to your back end and this is a common mistake that people
[01:13:49]  make in angular is if they they have their http request observable and they want to use the result in two places in the template they do they get two subscriptions and they
[01:13:59]  fire two rpcs and you have to know as a developer that this is going to happen and be able to like okay i need to convert this thing from you know un
[01:14:08] icast to multicast and and make it hot and then you can kind of safely use the use it in multiple places it's it's it always was interesting about that default
[01:14:17]  and i think it comes a lot with rx's root and where it came from because uh what uh andre stoltz's creator cycle js made uh extreme extreme
[01:14:27]  and this was the moment that i really started understanding because this is right when i was working on this stuff it was like 2016 and i was like playing around with like the observ
[01:14:33] able stuff and he was like i like observables he's like but for his version of the library for his ui he was like i'm actually going to change it i
[01:14:41] 'm going to actually make them hot and multicast them by default like he actually changed the default um and he's like look i get why rx is this way i
[01:14:50] 'm not going to like try and go in and change rx but he's like for building user uis i actually think this is the wrong default um so yeah it's
[01:14:57]  it's interesting because i think i think one of the challenges here um especially with the kind of angular conversation the deep uh rooting in rx is that like these do solve different
[01:15:10]  problems um and they are actually each particularly suited for their for their problem like if things are asynchronous and you know you're doing these transformations over time rx is still the
[01:15:23]  best tool for doing that but but what's interesting i guess with the signals approach is it's basically synchronous i mean you can do stuff that's asynchronously it's not like
[01:15:33]  it's preventative but like basically the guarantees and everything are built around it are that it's synchronously propagates that like you change something you know that everything within that
[01:15:43]  tick or whatever will have updated to reflect the new value all the derived values and um that that's like a it's a very different sort of set of guarantees or thinking that
[01:15:55]  kind of goes along with that because i mean it's great for stuff like templating like we're talking about where you you use something a dozen places and it's it can
[01:16:02]  be dynamic because when you look at expressions you know you're like you can put a conditional in a computer and go like if this condition do this else do this and suddenly
[01:16:11]  what depends gets dependent on can change you don't need to like pipe it or fork it or do any kind of like operation there you literally just go look if if we care
[01:16:20]  about showing the full name show first name plus last name i'll show just the first name and if you wire it like that if the last name updates when it's off
[01:16:31]  screen or like not being computed well nothing needs to update like conceptually because it's just not part of that flow and i i think i mean i haven't talked about guarantees
[01:16:42]  yet or kind of probed you guys into like your algorithm or whether you approach it but signals are really quite good for synchronizing state like they're not good for async
[01:16:52]  transformations but they're really really good for keeping things in sync with each other and and i think that's kind of important to to highlight that when you look at rx
[01:17:01]  gs it's not like one versus another it's like we need a quote quote reactive primitive for the framework for the core of like something that we could like build the whole
[01:17:11]  framework on top of for templating yeah and the when you look at those properties of xds the we said like now we want something probably that is more hot that is
[01:17:22]  uh synchronous in nature that is really good at data synchronization that can kind of you know like keep stating sync um so side effect free right so so this is more a statement
[01:17:34]  of like what we what we need in the framework where's like it's not a statement about the xds i think like they're all like like people could come with
[01:17:43]  just beautiful usages right like if you see those autocomplete demos like you just like just try to do it with signals like just like you know or promises even like with
[01:17:53]  promises it's even exactly or and it's got like retries and stuff like i've seen some stuff like right yeah where there's been like like i remember something yeah i
[01:18:03] 've watched a ton of ben luscious streams and you like are like talks and you see where he's like you know at netflix we had this problem and then
[01:18:11]  he's like here was the original code and he scrolls through like three pages and then he was like here's it in five lines in rxjs and there's a
[01:18:18]  certain amount of like okay you need to know what those operators are doing but once you follow it you're just like oh okay yeah it's i'm like just drawing um like
[01:18:26]  a flow chart i'm like take this data split it here do this if it fails retry do like there's like this logic kind of stuff on the flip side i
[01:18:36]  remember about a two years ago i think it was someone was like really happy about something they put together in an angular view and they're like look check out this code sample of
[01:18:44]  like how we're handling this like very simple case and i i scratched my head for myself i'm like this is like a three-line component in react or solid or like
[01:18:53]  anyone and it's like it's with literally like uh 70 lines of angular to do it because it was using a bunch of operators and it was like doing all that and
[01:19:01]  it was like it was almost like a one liner and it was like it was because the problem space i was trying to solve was very different and i think there's that little
[01:19:10]  friction or like it's not friction these things actually can work together really well in fact i i think would you guys say that signals working with rx almost works better like works
[01:19:20]  considerably better than like zone working with rx absolutely yeah no no question yeah right because i guess they're just behavior subjects so if rx knows how to feed a behavior
[01:19:31]  subject into a stream or get a behavior subject from a stream it knows how to get a signal essentially from a stream or into a stream in our case we just added a from
[01:19:41]  operator i'm sure it would be very similar kind of mechanism yeah we actually just put up a pr with that um that exact code so we have the two the bi-
[01:19:51] directional transformation right of like signal from observable and observable from signal yeah yeah yeah i mean this this just kind of fits hand in hand and i think i think it
[01:20:02] 's it's always you kind of go like rx is good for my streams signals are good for my reactivity or not reactivity so what's all right synchronization
[01:20:12]  you know my values and this is really easy actually to see where they hand off with each other yeah and and the the kind of conversion from rx is to a to a
[01:20:22]  signal it's trivial right like because like every time like something falls off the stream like you just kind of almost cache it on the signal level right like you've got this like
[01:20:30]  this is the latest value that got emitted and so so this transformation so and you actually connect the reactivity of these two worlds so it's not like you're you're
[01:20:40]  like transforming it into a signal that is then like not notifying when the stream emits or something like that like you're able to carry this um you know notion of the
[01:20:50]  value notification yeah yeah across that boundary yeah so i mean that's that's incredibly powerful stuff but okay i'm trying to think okay give me give me a second here um
[01:21:02]  because where do we want to take this next because we've talked this this this starts making a lot of sense like we're like thinking you're like okay so this is like
[01:21:12]  additive and it on one hand but actually kind of hopefully maybe i mean i guess i gotta ask you guys i mean this a little bit like further down on the list of topics
[01:21:20]  but like is is the hope here that like that zone js just kind of rides out into the sunset you know i think it will be a very long journey for zone js
[01:21:30]  um towards that sunset um so so you know angular is a fairly well used framework um particularly within google we have you know thousands of applications um some of them you know in the
[01:21:42]  double digit million lines of code territory and they are not removing zone js anytime soon right um so zone is is with us for a while but i think that the hope is
[01:21:55]  that signals will be a better experience and will be a more desirable experience at that kind of scale and gradually we can start to kind of shift our ecosystem away from this top-
[01:22:08] down check world model yeah yeah okay yeah i i had to ask because this kind of helps you position stuff you can see like okay zone maybe overworks signals solves the same
[01:22:22]  part of the of the problem space rx actually kind of stays where it is i think the only interesting part for me about it on the interaction is rx because of how
[01:22:32]  maybe limiting certain parts of zone were like like was was working a little bit too hard like this this lets rx just like focus on what rx is good at yeah
[01:22:44]  yeah and avoids a lot of the i think the like foot guns that you end up with if you try to take like rx js asynchronous orchestration and force it to
[01:22:54]  work synchronously in a template okay these problems of like over subscribing and triggering back-end effects multiple times um but this is a really interesting thing to talk about too is
[01:23:05]  that you know we have this zone-based world of angular yeah we have this new signal system that we're planning um but they will need to coexist in the same framework for
[01:23:16]  some time um so making these things work well together is a really interesting problem yeah i can imagine um yeah because i mean on one hand you have the really naive approach of
[01:23:30]  like oh like if the signal trigger is playing to zone but then it's like you also are like well maybe we can do a little bit better there you know so i okay
[01:23:40]  i'm to think do you know where i want to go next because okay we've established why signals we established what signals to a degree if anyone still doesn't quite get
[01:23:49]  it do ask on the chat you know like uh but i i've been just watching the chat and a lot of people you know just kind of talking about you know their experiences
[01:23:59]  with rx and angular um and kind of getting around the whole idea of async versus synchronous you know in this so i i think i think there's there's been a
[01:24:08]  lot of stuff there but what i actually want to talk about is like okay now you know you're like okay i think this is the approach how do you guys attack it like
[01:24:16]  what what what kind of thinking went into your designing it um what what kind of properties like i i let's let's like let's kind of like just talk about like
[01:24:28]  how you figured out because like there's different solutions out there right like you've obviously looked at stuff solid did been recently we've seen preact add signals and quick added signals
[01:24:39]  and um obviously view has had their version kind of under the hood for years and you know we there's mobx we can't not mention mobx so basically we're
[01:24:48]  the first ones to really show how you could like um make certain guarantees i didn't talk much about those guarantees earlier but the synchronization isn't just because of nice syntax it
[01:25:00] 's it's that because of the way that the dependencies are tracked and it all happens synchronously we actually know the complete graph at the time of execution which means that it
[01:25:11] 's possible like we can solve the diamond problem it's not just double fetching thing you can have a state change fork into multiple different changes and then converge again and you
[01:25:23]  will know that any node in that whole graph will only render once off any give or run once off any given change you don't have to worry about like you hitting a node
[01:25:33]  and reading an old value somewhere else and a current value here and like oh then that value updates and now you need to run that thing again like everything runs once um yeah let
[01:25:45] 's just talk a a little bit about that yeah so so like i think that they will dive into the like the whole like glitch free execution and and the algorithm but but
[01:25:55]  i i think it's also uh important like how we got like to the particular design of the of the library and i think it just almost happened naturally because uh if you look
[01:26:08]  at the properties that we like so like you say like okay hey we don't want zone we want reactive framework at xgs is too async uh for our taste like
[01:26:16]  what is the other reactivity system it's not like like oh signals is the obvious choice right like that wasn't the case at all like for months and we were like going
[01:26:25]  back and forth through very different like places and whatnot but but i think there are like some key properties that uh that signals are giving us and like and i know only of only
[01:26:37]  one other solution uh and we can talk about it but like just talking of those properties of the quote quote reactive system i think what was very important for me personally is that
[01:26:48]  we do this reactive job that is not tied to the component tree yeah it's like that that my state can leave like data can flow differently like the data flow is not like
[01:26:59]  tied to the how the visual things are flowing on a page right so the data flow is kind of independent from what i'm displaying this is sometimes hard to describe i actually
[01:27:11]  did i've done like multiple streams on this topic like whole streams on this topic and one i did recently was called rendering and reactivity uh i did it back in december
[01:27:20]  the reason it's not obvious and it i actually one of your observations was actually really smart way of explaining it to people it's not quite how i usually explain or visualize
[01:27:30]  it but you you were saying that the one like it's kind of similar to when people asked me like what's the difference between recoil and um solid signals or whatever it was
[01:27:40]  that you said like one cared about read and one cared about right can you talk about that for a bit right right so so like when i um so like i think that the
[01:27:49]  basic statement is that like i want to stay to live everywhere right like we always had anywhere this dependency injection and people were used to pulling state out of the components to to
[01:28:01]  so-called services and and like kind of shaping uh the state independently of the of the component tree so it was important for us to preserve this uh this property uh and
[01:28:14]  uh the other kind of thing that we wanted and i will go to read right distinction but the other thing that we wanted is that like okay if i have a state in a
[01:28:23]  component uh and that kind of my component grows bigger and i want to pull this state out of a component i shouldn't change the paradigm like i shouldn't be forced to rewrite
[01:28:35]  this like oh now i need to go from uh you know in component compiler reactivity to some other form of activity right like because it means like changing code learning things and
[01:28:47]  and whatnot so if you if you take those things together you almost kind of a force to think like i need to create a dependency graph yeah right like i need to really create
[01:29:00]  like just like oh like i know who i know like where my state leaves and who depends on this uh on this state and now if you've got the graph now the
[01:29:11]  question is uh who should render when something happens to this graph right like is this the component that writes to the graph uh that should render or the component that is actually reading the
[01:29:28]  value from a graph that should render and i think if you if you kind of set the stage like this i think that the answer is obvious right like you you are interested in
[01:29:36]  who reads the value out of the reactive graph like you don't care who sets it that it could be actually set outside of the component right like you you shouldn't so
[01:29:45]  in this sense for me rendering a component that is calling set state um is is this is what i call like trapping connectivity in a component right like it just kind of i
[01:30:00]  don't care who sets the value i care who needs this value it's yeah the funny thing is it's it's often a lot easier to to tie it to the
[01:30:09]  component that does the right i think that's why you like you see this all over the place right so so it is easier technique technically but i don't think this is what
[01:30:19]  you want right right and i i sometimes have to point this out because a lot of the framework internal mechanisms are built that way because they're very simple they're like look
[01:30:29]  update component basically they have an update component function like that like set state is update component function um even svelte uh dollars on validate or whatever that they compile in there when
[01:30:40]  you when you assign a value it's calling update component um like this is this is kind of like uh yeah i think i did a graph where i was trying to like
[01:30:50]  explain this but i don't think it actually i covered it on on stream but that most of the solutions you find in the react space um other than say maybe like mob x
[01:30:58]  or whatever and a couple there's a couple other ones are this first type yeah and and like i think also david from xstate like talks about it quite a bit right
[01:31:09]  like because he obviously has a state machine that which is like has nothing to do with the component so for him it's very natural to say like oh you know my state like
[01:31:18]  has absolutely nothing to do with the with the component right and and for people the right distinction is like the is like the obvious one but like i will also point out that
[01:31:28]  you will hit this and stuff like that right bit kind of happens to you under the hood sometimes if you have mo like if you have a if you have kind of like a
[01:31:38]  reactive system that you're using in like react and you're not wrapping components yourself manually like wrapping them in an observer or something like that and you you're using with a hook
[01:31:47]  like a use somewhere like that is the right pattern like basically when you go bring that hook into the scope and go use it you're just telling it that like this is
[01:31:59]  the component that is updating you're not saying where it's actually like the value is getting exact or anything you're like this component is is is the thing like so yeah
[01:32:09]  i mean there's there's some varying degrees you could argue that's like a very coarse-grained read in a sense yes yes but it is still it's just feeding
[01:32:18]  back into reacts right system because under the hood you update the signal and then like or whatever it is and then react goes oh set state yeah but but like if you look at
[01:32:28]  it from the mombeck's perspective or whatever other like reactive system like it really what triggers the whole thing is the right but it's the component that actually like you
[01:32:37]  know waits for this value is like oh it's falling into my lab this is the component that is going uh to kind of update right like so so i guess we've got
[01:32:45]  like different rights like we've got like on one hand like a right to the reactive graph and then like the right to the uh react component but this is almost like a
[01:32:56]  technicality rather than the essence of the operation yeah i was i was i pulled this up while we're talking i don't know if it actually helps the conversation at first but
[01:33:05]  i was trying to show that there's like a full set of degrees of how like how much the what subscribes whether it's on the right or like the point of entry
[01:33:15]  as i call it or if it's if it's based on where it's red and yeah maybe this is a little bit getting beyond this but i i imagine when you
[01:33:25]  were looking at solutions for angular you're probably like okay like do i do something like this or like like there's certain degrees in which you integrate with this thing i over general
[01:33:36] ize and say like vdom or you know whatever but this is the same regardless of the renderer there's this question of like is it that right thing is it a read
[01:33:44]  based at a component level is is it like direct pipe or whatever which is like the third option essentially or is it like all in yolo right so i think there's
[01:33:55]  there's a there's there's several options when you kind of look at this problem and figure out what's you want to solve for what's comfortable for you know this framework
[01:34:04]  that has a long history yeah no and and again like i mean like we were kind of almost starting from scratch in this sense like you know so we we had this benefit of
[01:34:14]  like oh let's survey what is available let's survey like what we want from the system and and like you know look at this those pieces um so just kind of you
[01:34:24]  know like again like you know states should not be trapped in a component it should be easy to refactor from component state to somewhere else and i want to be notified uh when
[01:34:32]  the state i'm reading changes right like those are kind of the basic properties uh and then you you were hinting at like i want to have some guarantees like how my
[01:34:43]  updates uh are traveling to this component that is interested right like if i uh let's say if i've got i'm reading value in a component and i'm going to update
[01:34:54]  it like 10 times in a row should i like synchronously right like should i like render this component or refresh this component 10 times or just like once right like there's
[01:35:04]  like different considerations um yeah i i mean i i keep kind of pushing forward on the tech stuff because i love the techie stuff do would you mind walking through with me like
[01:35:15]  a simple diamond problem just to see how the like what the approach is for like a react like the way you guys like i know i'm jumping ahead a little bit but i
[01:35:23] 'm just i'm just i'm just biting at the like i'm very interested to see what you guys have been putting together so true there's like the api question
[01:35:30]  so i mean maybe that's the part people more identify with because like okay let's yeah we'll we'll get to the algorithm in a minute let's start let's start
[01:35:38]  api uh thing can we i'm just gonna shift my screen around here a little bit and do you like or do you have a code example i can open up or something
[01:35:48]  like what like i've sent the repo or something just yeah throw something up on the screen like what does this all look like for a second sure sure like readme i
[01:35:57]  guess alex from or maybe stuck but it's even no yeah either is fine with me um maybe the uh the gde stack puts that we did would be a good exactly
[01:36:09]  let me find it do just this again yeah it's all good you don't have to feel any pressure on this i'm gonna just drink some water right here how's
[01:36:25]  everyone doing in chat actually you know what i'm just looking at the twitch chat i i'm sorry i i've been really slow i've missed some subs that happened i need
[01:36:33]  to go all the way back because we've we've got we've got some people who've been subbing on the channel and i've been way too busy talking to
[01:36:40]  these guys to to even give that the acknowledgement it deserves um let me let me see what i've got here i'm just going up um zero zero hamster zs zero
[01:36:49]  zero subscribe at tier one for the second one thank you very much for the sub um and actually i think uh even even very cool comment here as well um julian ng
[01:36:59]  gift giving five gift subs out um thank you so much for that um it's awesome to see support of the channel yeah sorry i this is my problem i i i always i
[01:37:13]  always forget to go back to twitch and make sure that i thank people for for contributing to the channel um it's it's great okay uh so we've got stuck leads
[01:37:27]  i've shared it on on chat uh perfect if you want to play it up then you can play actually with this and just like see what what okay we are doing like live
[01:37:38]  api review here all right okay sweet so we have my understanding here and let me see do you want to share a screen or it's like do i have an open window
[01:37:47]  stacklets already debugging it's funny kids okay okay yeah sorry the reason i was taking a moment here is that um there's this loading that never went away oh yeah it
[01:38:00] 's actually probably in the index html yeah yeah exactly like the console like things yeah console does all the real work here okay let's see if i can i think there
[01:38:10] 's a way that i can change the config here that i've done before but i'm i'm gonna just be lazy and just plus plus it up um i need to make
[01:38:17]  it a little bigger so people can see it but if if i'm falling here you guys have signal effect and computed you know our three amigos that we've we've talked
[01:38:29]  about before and essentially we've got a signal which you set initial value to and it gives us the signal and the signal can be can be called as a function to get its
[01:38:40]  value or it has a dot set on it um which lets you set the next value it's funny this was one of the this was probably my favorite api just a
[01:38:50]  side note my favorite api choice before i saw react hooks this was like my this was this was gonna be my go-to before i saw it because i i'm a
[01:39:00]  big fan here of of using functions for reads and a big fan of um you know making it clear that it's separate that there's a read and a write um yeah
[01:39:12]  and we even if we wanted we couldn't use the like react style right like because we we are class-based like our components are classified so like we cannot destructure on
[01:39:22]  the class um but that wasn't an option right like even if you wanted to copy or like just like take inspiration from solid that that wasn't the option for us yeah
[01:39:32]  but i mean this is this this still i i'm actually honestly i'm just i'm i'm kind of half i want to hear about your reasoning but i'm kind of
[01:39:38]  happy you guys went with this i i know this is like like bike shedding a little bit but like everyone knows i'm not a big fan of the dot value side could you
[01:39:46]  just speak into like how you came up like you mentioned already classes are a big part of how you design stuff i i have to imagine though like there's lots of different opinions
[01:39:55]  some people might have been like oh no but like dot value is so easy or whatever like how did you guys arrive at this and what was your justification alex i'm
[01:40:04]  afraid yeah i will be public enemy actually we're inspired quite a bit by solid's choice here um i think just playing with these different systems playing with preact signals and playing
[01:40:17]  with solid we like the feel of the getter function call um in particular like we wanted the the the points where the template is reactive the points where expressions are reactive to
[01:40:30]  be obvious in code for it to be clear that this is not just a plain read of a variable somewhere but it's actually going to be doing something behind the scenes um in
[01:40:41]  addition to just earning the value uh and so function call was kind of a natural choice there and it's also a lot less to type um yeah yeah and this is my
[01:40:53]  favorite one because like personally this is my favorite one it's just like what's the difference between this and and and this you know what i mean like there there's obviously a
[01:41:04]  difference in why you might want to use a computed here but in general i mean this is obviously just me playing my biases in here it's anything that's derived from a signal
[01:41:14]  is also kind of a signal um like to a certain degree i think that's really really really really powerful because when you're designing apis are you looking to check whether
[01:41:23]  someone passed like something with a dot value on the end or not or are you going to say look if this takes a computed so now every place you have to pass in the
[01:41:34]  api you have to like put it like make it a computed whereas this is just like it's a it's a function i don't know did that play into you
[01:41:42]  guys's thinking at all or yeah so like i think like you know the the and you said it's bike shedding it's actually one of the most important questions right like just
[01:41:53]  like what is the primitive that like you know like the the smallest possible thing in the system right like uh and if we if we go into something that value then it looks like
[01:42:05]  well that's my primitive and like value i can obviously read but i can write to it right like just like seems obvious that i can assign to a field in there um
[01:42:13]  uh which which kind of doesn't work for computers right like like signals but like i shouldn't have like any saying writing to them um so there's this whole idea of just
[01:42:27]  making sure that the the primitive is that the read operation and the signal that allows you to change is actually very specialized animal right like it is the it is the owner of
[01:42:41]  the state so to speak yeah it's kind of interesting and again this is me tying the connections between all the different language pieces signals are the special thing they're they are the
[01:42:50]  things that can mutate if if if you wanted to take this down to plain language it's kind of more like let count equals zero const and and const might seem weird to
[01:43:00]  you because you might be like why is this a const because it's it's it's it's not a const um but what or yeah whatever like in terms of a
[01:43:12]  system the the mental model for signals is one of like declarative state like that these are relationships that hold through time like double count is always the the you know two times
[01:43:28]  count here it's if count changes double count is updated like there's these never separate from each other if you update count you don't have to go assign double account again so
[01:43:38]  in a sense like the everything else in this in the system is derived even like effects are like the cause of some derivation of of these things so in a sense in
[01:43:49]  a sense these are like the cons they're they're everywhere they're in your bindings they're in everything the only part of the system that's actually really special is where
[01:43:56]  you actually mutate and this means that mutation is very important right it's it's con it's like this place where you're like everything is controlled so yeah i mean sorry
[01:44:07]  i'm just i'm very happy with your api choice so that you can tell that i'm i'm like yeah but but but it is funny right like because we
[01:44:15]  had like you know like that was like several months of like soul searching and like playing with different things and i remember vividly uh one uh like day in january when a
[01:44:26] lex was uh here in uh like visiting me and uh we were playing with the system and there was more like oh now you kind of have clear ownership of data right like
[01:44:41]  you you have to go to the source if you want to change and this was like such a huge departure of what we know from angular right like because you can go anywhere and
[01:44:51]  look and grab a piece of state like anywhere in the component tree and just imitate it and it's like literally stopped us in the tracks and like okay well is it good or
[01:45:00]  is it bad well i mean this is personally what i learned from react i could i could throw away everything else uh v dom re-renders all that stuff this is what
[01:45:10]  but this is this is what reactive systems back in the day had a problem with they didn't actually have the guarantees they didn't have the control and things got wild i
[01:45:20]  mean people in the future might change their mind about this and there might be better mechanisms and stuff to maintain control but personally where i was thinking i think this is a very powerful
[01:45:31]  thing and like this is why i drew the illusion because i think when like a react forget type compiler comes in and they auto memoize my gut is that const keyword is
[01:45:40]  going to be very important because that's that's that's that's the derived state right it lets them optimize stuff in in a way that's automatic because if it was mut
[01:45:52] able all bets are off and sorry this is me speaking to like people in the future and then they'll be like react forget to come out and then maybe someone will watch the
[01:46:01]  video and be like oh this is what was ryan was talking about like a year ago sorry just nesting that easter egg in there but continue no no like i
[01:46:09]  mean that that's kind of i think like when we when you kind of realize that you you go like you really do it like the other massive mental like change right like you
[01:46:20]  have to think like who is the owner of the state and like you need to go back to this owner and say like oh no now i want to change we wanted this
[01:46:28]  to stand out in the in the api right like that that's why you've got the set like that there are some other methods on it but like uh it's not
[01:46:35]  just dot value right right right and and and just to be clear also i think we will have like uh we just you know experimenting with those things we'll have a public r
[01:46:45] fc and that's the thing you will have like a deeper discussion on it because i can see a lot of preferences like people say like oh you know you should do
[01:46:53]  dot value or you should do this or you should do like something else one of the big problems that we're seeing is the the getter function calls don't play nicely with
[01:47:02]  type script yes try to type narrow the thing that comes back from it then type script is like that's a function it could return a different value so i'm not gonna yeah
[01:47:11]  it's it's it's it's really that that one is one of the ones that has been uh a little bit pesky i was trying to a while ago i
[01:47:18]  was like hey what's the chance we can do it because in a sense type scripts handling a pro properties works well but it's also a potential lie as well like basically one
[01:47:28]  lies one way and one lies the other way and it'd be great if you could make that characteristic something that you could like type and be like like this is this is an
[01:47:37]  idipotent function this is a possibly dynamic property like i i would love if if there's a way to actually tell typescript this because it that clearly it can
[01:47:48]  has both behaviors in the system somewhere um but yes typescript is a little bit um awkward um so yeah i i i'm so what you're saying is this is kind of
[01:47:58]  the start of the proposal and then it you get there's gonna be a review in rfc and for all we know we might actually end up with that value it's
[01:48:06]  a possibility yeah yeah like this is what we like the most at the moment or like like like in the sense that uh i think that has the the most properties that we
[01:48:17]  want but like it has consequences for the syntax and you know like sometimes someone was asking what exactly is effect why do i need it when i get the value from count i
[01:48:27]  i like this question do you do you guys want to handle it or can i try go ahead like i i want diane's explanation yeah okay the the reason there's an
[01:48:40]  effect and i think this isn't maybe obvious especially if you've been like doing some of the other stuff maybe you've been doing with maybe if you're an angular or
[01:48:49]  something is sure the count updates but how but like how do you like know the the count updates like sure count updated in a forest who's who's gonna call the console log
[01:49:01]  like like in zone my understanding something updates and then the whole world ends up re-rendering and then you like in that world console log gets called but in this kind of
[01:49:12]  reactive system here you you need to know that like to call to ask for the value right there's got to be that that switch between push and pull right because you push
[01:49:24]  to the end like basically for people it's kind of like the dot subscribe but instead of just subscribing to count specifically i can create a second count you know um uh count
[01:49:39]  two you know and you know and now i can subscribe to both of them you know i can be like count two and this like it keeps the same semantics of our computers
[01:49:55]  here where you basically define a zone that will rerun um or be scheduled to rerun when any of these values or derived values change so it's basically because you need to
[01:50:10]  a way of telling it like when to pull i mean in theory you could just have like a timer you know set time out and like pull it whenever and it won't do
[01:50:19]  any work extra work if it hasn't changed because it like in a sense a computed is also a memo like it depends on your perspective like it it caches the calculation so
[01:50:29]  every time you call it if nothing's stale it won't recalculate so it's it's like a memoized value but you need to know to call
[01:50:36]  it and effect kind of finishes the story where um in like unless you want to handle the polling yourself so to speak or polling yourself yeah i think with with one console log
[01:50:50]  you know output here it's a little bit unclear but yeah this this console log will rerun if the count signal is changing over time um yeah whenever it it has a different
[01:51:02]  value to display it will re-execute the console log yeah is geese reactive an inspiration for signals oh signals and solid oh sorry i i read that wrong i
[01:51:12]  so i thought it was good i thought they were asking if if view signals are an inspiration for what you guys are looking at for solid um uh i mean i was aware of
[01:51:20]  view and views reactive system um the thing you have to understand is at the time i was writing solid view was the options api so they didn't have like ref for
[01:51:29]  signals or like anything that looked like this their their stuff looked like you just defined a bunch of objects with stuff so it was a very different user experience um like it wasn't
[01:51:40]  like this this is this is like like what we're looking here with angular or with the solid or even knockout was like this style views kind of hit its reactivity system
[01:51:49]  from the world and it only actually exposed them um basically with that rfc and stuff that it came out in 2020 basically views been reactive since the beginning like with the
[01:52:00]  same reactive system but in terms of like um the api choices it's it's maybe ahead of the current wave but it was it was much later than uh you know some
[01:52:10]  of the other solutions uh sorry i i thought they were asking if you yeah and honestly for us like it really was um we did a lot of prototyping before we started
[01:52:21]  you know kind of building our own library from scratch and much of it was based on um the view reactivity package yeah and people again what's the difference in the mobe
[01:52:31] x it is the same as mobex like the stuff is like the algorithms might be slightly different or tweaked and stuff but mobex did it the reactivity itself
[01:52:40]  um is been around forever like we've getting better more performance you know better algorithms and stuff the thing is and i i'm this is what i'm hoping excites people
[01:52:51]  about this stuff is a lot of the systems that we were feeding the reactivity into were weren't really positioned to leverage it it was like it was almost like the rx
[01:53:01] 's own problem like where they they had these like their own pole based systems and then you're introducing this other push based system and they're just like doing wasted effort like mo
[01:53:10] bex wasn't too bad with react but it involved you know boilerplate and then suddenly it was like okay wherever you like you have the wrap components and observers which is
[01:53:17]  fine it's just decorator or whatever and then when state changes the component reruns the the reason this has kind of been hyped up recently is because and i i don't
[01:53:26]  know what the angular um implementation looks like yet but because libraries like solid which are completely this way and and then libraries like pre-act and quick which are kind of partially
[01:53:36]  this way this ability to to take that reactivity all the way down to the binding level so it's not components rerunning it's not component subtrees rerunning it
[01:53:46] 's just what changes rerunning like i one of my earliest experiments was to make a solid like renderer using mobx right so like you it's the way you use the
[01:53:56]  reactivity that's more important um than the reactivity itself um in terms of why this has come around again truthfully someone could have built this this whole time you know
[01:54:06]  i i i always wondered about like this kind of alternative history where like one of the large teams like like if it wasn't backbone but the the facebook team was all into knock
[01:54:17] out like how different would of a world would have we been in or if angular didn't go to google but like it's funny because knockout was at microsoft and
[01:54:26]  they just i guess didn't you know have the same aspirations whatever i always wondered if like if a framework had actually developed in in you know that way off these reactive primitives
[01:54:36]  if we'd be in a very different state than we would be today the truth of the matter is this stuff's been here the whole time um that's what i meant my
[01:54:44]  story might have only you know like i've been playing with the stuff since the early days but you know maybe solid's only been part of this equation for like i don
[01:54:51] 't know six six years or whatever but like this this is not a new thing sorry little side rant now and and it's like i think it's important right like that to
[01:55:04]  highlight that it's the same family of so like the the basic ideas are the same like they they often wrapped in a different api uh the algorithm behind the scene implementation will
[01:55:14]  be different but like just like the core family is the same yeah yeah so yeah i mean it's it's i put that chart up earlier people maybe can find on my
[01:55:24]  twitter if they're really like trying to distinguish it a bit and kind of put in their head but like the way we leveraged reactivity um for a while was just a
[01:55:33]  tool to feed into these other render systems like knockout was actually fine-grained like solid is but most and a few others back then but most things until more recently
[01:55:42]  you know haven't actually leveraged reactivity in the same way um so but i i think you the reactive part the part we're talking about today it's kind of like
[01:55:52]  there's this universalness to it and i think that's really really cool um sorry we got so sidetracked here so signal signal double count effect we're talking about ap
[01:56:03] is um yeah you know i'm gonna really quickly make um make the diamond problem just cool right here because we're gonna make double count and triple count and so this is
[01:56:20]  times two times three no not times e times three and then we're going to console log uh double count plus triple count all right oh do you do you guys have a
[01:56:46]  uh asynchronous flushing the effects are scheduled uh yeah so in this particular yeah is there is there any way i can cheat it like just so i can show what i want
[01:56:59]  i can set time out it you know it's fine i won't like yeah you'll have to import it i think from um not the the index entry point but there is
[01:57:08]  a yeah it's it's it's in effect it's called effects done yeah i'm gonna yeah i think that that will work as well i'm just gonna i'm
[01:57:18]  just gonna do this the thing is the system you know schedules everything does the work once it's great but what i wanted to show um was an action yeah let's yeah i
[01:57:30]  wanted to show this where we we're gonna actually i'm gonna do it twice just for effect here to do to do um so we see it because it runs once console
[01:57:42]  logs runs again and this is actually dangerous because like who but yeah and then runs a third time so runs once set it once set it to and you see goes one two three
[01:57:55]  but the reason i mentioned this is the diamond problem is that essentially you update a signal and then um one derived value another dried value and then they're both used and the
[01:58:09]  thing is if you did something really naive here you might like update the signal it updates this and then it tells its subscribers like this effect hey what's going on and then it
[01:58:19]  runs with the old value a triple count and then triple count is queued on next it runs and then it runs the effect again like you can do some pretty nasty stuff this
[01:58:29]  is a very i call this the simple diamond problem because this one there's a lot of really trivial ways to solve it gets trickier when you have multiple signals getting rid
[01:58:37]  into and multiple uh like like more than a single depth and we talked about this at length with milo last stream um we actually talked a lot about the reactive algorithm but i
[01:58:51]  i but like just high level can we like let's just scale draw it here yeah so we can like yeah draw this graph right like because it's we uh uh what
[01:59:02]  do i use do i want circles no i'm gonna use squares and we're gonna go like this and i'm gonna put a nice label in here because we have count um
[01:59:15]  double count and triple count and then at the end i'm gonna use a diamond because i can um we're we're gonna have our our log right and yeah let's
[01:59:37]  do arrows yeah let's do arrows i'm gonna do it in the in the in the yeah like the change propagates that's the good good direction i guess we'll add
[01:59:48]  another one later right but but yeah like this is sort of the relationship we're talking about here right you like if you could see a world where if you updated count and
[02:00:01]  then this is a list and then you know you update then you go okay double count has to rerun and then it goes okay then log needs to rerun you could see
[02:00:11]  that maybe then when you go to the next iteration get the triple count you might run log twice that's basically what systems like this are built to avoid um yeah i think
[02:00:22]  that like the version of the diamond problem i like is that with the name right like you've got like first name last name you split it and you rejoin it and you
[02:00:31]  start to see glitches where you kind of glue the the one first name with the like you know weird first name like with the unmatching last name and it's kind
[02:00:41]  of but but that's essentially the same problem right like you right you're kind of seeing intermediate state in a graph or yeah yeah and you know what maybe for i use double
[02:00:52]  count here um but maybe to actually visualize it it might be easier to add one more node um because i think that one more node makes all the difference i just kind of
[02:01:06]  trying to remember which side no the the one more node doesn't go on this side the one more node goes on this side because this is this is usually where where the confusion
[02:01:15]  is and i'm not i'm this other node i don't know what it's going to be whatever node x um there's some other computer right like yeah it's some
[02:01:27]  it's some other computed in between and and we're going to do this because this is where things start to get a little bit more complicated because even if you were smart
[02:01:41]  and you're like oh when i re run this log if i go and look at triple count you know i i might know that it's out of date and just run it
[02:01:54]  then this x makes this a lot more complicated so can for for for everyone and hopefully you're all interested in this how do we make sure that only when count changes that
[02:02:07]  only um essentially each of these only run once love those algorithms uh there are funny stories afterwards as well but uh i think like alex is the mastermind like after some optimization
[02:02:25]  so but i guess we can like talk about the night like a naive version of it um so and then we can talk about optimizations but the the simple version of it
[02:02:38]  is that when you set the count so i've set count yeah yeah you basically go to the graph and you we call it push the dirt down okay push the dirt down okay
[02:02:49]  yeah so so we in a depth first way we just propagate this like hey you're dirty yeah okay so no recomputation just like setting a flags on all those okay
[02:03:02]  so you're dirty everyone is dirty at this point okay everyone's dirty okay yeah and the the it doesn't matter in what order this happens right because we're not going to
[02:03:13]  rerun any calculations we're not going to do any and and do you guys also do okay yeah sure so you mark it all as dirty do you do you do anything
[02:03:25]  with this log when you get to it when you get to the effect when you mark an effect dirty yeah we essentially hand the effect over to a scheduler and say run this
[02:03:35]  at some point in the future cue it up okay cool yes asynchronously right so it's not executed immediately it's added to a queue somewhere um and that is that the
[02:03:44]  actual timing of when that runs is entirely up to the user of the library okay yeah so now you know time passes eventually the scheduler goes up now it's time to run
[02:03:57]  this thing right um and actually starts executing the log operation which then reads the value of double count immediately which says oh i'm dirty i need to write your computer yeah need
[02:04:09]  my value of count um and then the log will read x which will read triple count which will read count again yeah runs it runs it and the grass will become clean yeah and
[02:04:20]  this one should have gone back to white right at the beginning because once once count notifies it no longer is important anymore so then and so it runs everything you're right the
[02:04:30]  tricky part about this is what if x is doesn't the value doesn't change for x like that is super interesting yeah so let's let's try this again now but
[02:04:39]  this time x let's say x had a condition where like it was like if triple count is bigger than yeah is even or something like that exactly then then it's true versus
[02:04:53]  false um and in that case you know i mean this doesn't matter because double counts gonna happen anyways but you could pretend you could pretend that there's like something else off
[02:05:05]  over here and that other node doesn't want to rerun if if if if if if you know if right you know if what if whatever this is like if this doesn't
[02:05:19]  change there's no point re-running this other effect over here so how yeah how do we do this a little smarter so so we still mark dirty yeah okay so the
[02:05:31]  the the first part right when you set count is still the same like we push dirtiness down through the whole graph everything that that transitively depends on the count um kind
[02:05:42]  of like ignorant of the fact that when we mark x dirty here we're not recalculating it so we don't know that it's actually when when it does
[02:05:51]  get recalculated it's going to have the same value right right do do you guys do you guys differentiate between is dirty and could be dirty no like no not in
[02:06:01]  the same way as reactively does yeah okay okay cool so there is a similar concept but we'll we'll we'll we'll get to that okay um maybe it is
[02:06:12]  like let's do one level first and then we can talk a little bit yeah okay so these effects get dirty the effects get put into a queue yeah um scheduler happens it
[02:06:22]  runs the it tells the effect like hey go and run yourself right um and effects kind of effects and but i think it's going to be the same thing so i think
[02:06:35]  it's going to be a good thing that's going to be a good thing so it's going to be a good thing but it's going to be a good thing that
[02:06:42] 's going to be a good thing so it's going to be a good thing but it's going to be a good thing so it's going to be a good thing so
[02:06:48]  it's going to be a good thing so it's going to be a good thing so it's going to be a good thing so it's going to be a good thing
[02:06:54]  so it's going to be a good thing so it's going to be a good thing for the thing that's going to be a good thing so it's going to be
[02:06:57]  a good thing so it's going to be a good thing you i'm dirty i depend on you right like tell me now about your true state right like are you really
[02:07:06]  dirty okay so i'm going to make this a blue yet because it hasn't run yet so it's yeah it's like it's it's got the focus and then it
[02:07:13]  goes here have you actually changed so you get here and this guy goes um okay i did i right like you you recalculate this so this guy knows for sure he
[02:07:25]  did because he knows it's like so we would recalculate right like it's it's dirty like i mean we would go to the count it's going to
[02:07:34]  do the the same thing right like the computer is going to say oh hey i don't know if i'm dirty i need to first ask my dependencies right change and counts like
[02:07:44]  counts a source right yeah this is yeah so yeah so yeah so count's still red here so it goes up to count and goes you know did you change and then counts
[02:07:54]  like yes and then so count is is one of these like special settable signals right so it's like it has no dirty concept of dirtiness if it notified you it meant
[02:08:04]  that it changed right that's what i meant if you knew the difference between like definitely changed and could be because the first question you hit here is like this first row or like
[02:08:13]  from count is it's definitely changed yeah yeah and so now now double count says okay one of my sources told me like yep i'm definitely different so i need to rec
[02:08:24] alculate yeah and then i can tell the person who asked me yeah you need to recalculate because yeah so i definitely change you do i run at this point
[02:08:33]  yes yes okay so then i run i go to white and go hey yeah you yeah same way you're definitely dirty you need to go like do something right right do i
[02:08:46]  run at this point or do i check my no you still have to go to the other dependencies right right yeah i mean you can't like either i think we do we might
[02:08:54]  break early there i have to check but okay anyway okay um yeah so then we know we know we've kind of like said hey yes like at this point you like you
[02:09:04]  know you know this has gone from this you know to maybe to to like yes we are doing this i'm gonna i'm gonna i'm gonna switch my colors around again just
[02:09:14]  okay right so this is definitely yes but we're still gonna that is going to pull from x right right at some point right the same question did you change to my dependency and
[02:09:26]  then he goes yes i was directly notified so i'm gonna run yeah yep and then x is going to rerun its calculation but x is going to notice hey i didn
[02:09:36] 't actually update right whatever value i computed was the same as the previous value that i was holding right and so it's able to tell downstream hey you don't actually need to
[02:09:48]  rerun i didn't actually update the notification that i sent you was a lie so to speak right and the way we do this is should we should we actually get into
[02:10:00]  the the little bit of detail there sure i mean it makes sense yeah mr versions i mean yeah so we version values in the system gotcha every signal whether it's a
[02:10:13]  source or a computed has a concept of a numeric monotonically increasing version and on the edge when we do a read we store the last version from the that source that
[02:10:28]  we saw gotcha so before this graph starts right let's say that like i kind of want to go back and put numbers beside everything and do it do it because like
[02:10:38]  yeah i'm kind of curious because let's protect can i just use version one for everything just to begin that's perfect yeah and then one one because we'll do the we
[02:10:50] 'll do the walk we didn't go much faster but uh we started the effects don't actually need their their version right okay effects don't need versions okay but we also need
[02:11:00]  to put a version on the edges because i'm assuming like this this graph got set up when we ran the effect for the first time so on each edge as well as
[02:11:08]  each signal okay got you okay so yeah i got i got some more to do one one one one one one one and one okay okay and then we changed count yeah so which
[02:11:30]  which increases its version definitely now count is two then okay so i want to get rid of my color coding now because actually i want to oh we should yeah we should have
[02:11:40]  started here from the beginning let's let's try this again definitely okay okay so the uh uh let's get my color coding we set this it's now two um it goes
[02:11:51]  and notice when it goes and notifies does it do anything to the versions nope okay so double yeah double count becomes dirty right logs becomes dirty everything becomes dirty we can red
[02:12:03]  yeah red red okay okay yeah then so eventually like log will run it will do this kind of pre-step of asking its producers hey did you change right um what it
[02:12:26]  really asks its producers is hey check that your version is up to date so because i'm about to compare the version i have on the edge which is the last one i saw
[02:12:37]  from you with whatever your current version is right so this this edge number updates when it realizes it's changed this goes to two so log will ask double count check your version yeah
[02:12:49]  double count will ask its count hey you know make sure your version is up to date and then it'll compare the one that it has on its edge to count with counts
[02:12:58]  current version which is two yeah and it's like okay count changed i need to recompute so yeah that updates to two double count gets a new value and so it increments
[02:13:09]  its own version counter yeah it gets clean again yeah yeah it's a two runs two clean yeah yeah and then log says oh okay i asked double count to update its version
[02:13:22]  now i compare i last saw one now its version is two i now know that i need to rerun right all right and we do the same thing over here count the same
[02:13:33]  thing happens right we eventually ask it hey make sure your version is up to date it checks its dependency realizes i need to recalculate it goes to version two x
[02:13:45]  realizes it needs to recalculate that goes to two but crucially x right realizes hey i got a value didn't actually change right so i stay on one one uh
[02:14:01]  all right and so when your mystery effect on the right there right yet so yeah at this point log runs right because it's like i've checked on my dependencies this one
[02:14:13]  no both because it is white and is it and it's one we know that like nothing needs to happen this is this one now runs at this point yep once then it goes
[02:14:26]  okay i'm good gets out of the queue yeah yeah out of the queue this one comes in it goes to ask up and immediately sees that this one's white so it
[02:14:35] 's good and goes well it's the same version in our system right it's the version there's no color on our graph in our system what it does is actually it asks
[02:14:45]  x like hey make sure your version is up to date yeah so okay x internally goes i got nothing to do i know that i'm not fail it's comparing this to this
[02:14:54]  it's comparing the x node to the edge node so it's comparing like what is the version i saw you last time and what's your current version right and if those
[02:15:04]  differ like like you know the current version is up then like hey you know i've changed and then bang it doesn't actually run and we're good okay yeah good yeah so
[02:15:16]  under the signal so there's a ryan who changes all the color of the boxes yes exactly that's that's the i was trying to do that like it's funny
[02:15:26]  because i was doing all the extra color changes so that the visual like if someone actually sped it up like a gif or something they could actually see the color propagation but
[02:15:35]  um yeah so maybe this is is yeah and someone's yeah i don't remember if mobbix has value change but yeah there's different versions of the uh of the algorithm
[02:15:45]  there's the versioning version here which i believe preact does something a little bit similar to there is the the uh the dirty re uh notified double counter that mobbix
[02:15:56]  used early days where they'd like have two counters and you'd count up all the references and then like count up all the execution and then minus if something hasn't changed um
[02:16:08]  there's the the actual the the what reactively uses um and i i guess to a degree solid uses which is the two color dirty checking um or the two color uh coloring
[02:16:20]  system there's there's basically multiple versions of the algorithm but they they roughly there's a few choices like when you run the effect do you only like do you run it
[02:16:29]  immediately when you get back down in the pole or do you go up both sides like there's there's a few different variations but generally they all all the signal libraries result in
[02:16:38]  this very similar final behavior in terms of the fact that they all run once and and kind of pull out that's kind of topological there can be some differences um but
[02:16:47]  ultimately like you know you need to run this before this and that like the the sibling branches could different differ you know perhaps and when they execute but generally speaking you you have this
[02:17:01]  guarantee that you always knew know that the the parent like or the higher up here in the the tree will run before before the lower and that everything runs once yes but but
[02:17:11]  i think so now like i don't know maybe maybe interesting like twist on this conversation is like what are the properties that we are getting out of this like you know particular approach
[02:17:21]  or like how how the signal like really behaves right like because there are kind of side effects almost of this those implementation choices yeah i mean if there's something that you want to
[02:17:31]  bring up on that i'm all ears um because this is something that has very much been kind of an interesting uh exploration by a lot of libraries recently like there there has
[02:17:40]  been like these multiple different approaches and everyone's like benchmarking their different versions and seeing where things fall and whatnot yeah yeah by the way thanks for benchmark it makes our lives so
[02:17:51]  much easier yeah yeah my this is this is always the first step um like it was the js framework benchmark was so vital for figuring out dom operation kind of like common procedure
[02:18:02]  benchmarks and been used for over years for library optimization for you know simple list operations things like sorting and and you know adding rows and all this stuff um one of the challenges we
[02:18:13] 've had with a lot of reactive benchmarks is they've been either really really simplistic like jamming a single value or they they test one scenario really well and over the years i
[02:18:22]  think there's been about four or five different benchmarks that we've used milo um from solid core team we had on last week actually just released um put them all in
[02:18:31]  single repo so all five different benchmarks you can just like write your implementation then test against all all of them and and i mean it's pretty it's pretty uh like there's
[02:18:41]  there's a lot of stuff here he did a whole bunch of graphs here but like like different shapes of reactive graphs different types of stuff so far in this benchmark he has
[02:18:51]  reactively he has x-ray activity coordinate which is solid 2.0 or maverick kind of hidden um preact signals solid today you signal and then he he dropped
[02:19:02]  the the current working version of the angular uh signals in here as well um and you can see like there's a lot of variation like some solutions for example are really good at
[02:19:12]  deep like uh like preact like really good when stuff's super deep but then like you might go really wide and then have like the exact opposite effect where you know pre
[02:19:23] acts actually like over here um and there's like different types of like graphs like how would if it's wide and kind of dynamic you know like this can actually change even between
[02:19:35]  like you know different types of libraries and stuff so it's like it's really interesting to see the shape of the graph actually impact the performance and like there's this is
[02:19:45]  actually milo's benchmark but he put in uh cairo's benchmark i remember this one this was a good one um which tastes specifically different shapes like diamond and triangle and and
[02:19:58]  and like like other shapes and then he did he put in i think uh celex here here's celex this is the one one that that everyone's been like posting
[02:20:09]  online for for ages um where um yeah it's it's it's it's interesting just kind of see how varied the different types of results are like this was mentioning where like
[02:20:23]  preact is very very very good at celex um so anyway um yeah sorry little tangent but yeah but it is important right like because we i mean we like so far
[02:20:36]  when we raised the library we didn't do any like benchmarking on it yeah uh so for any optimization for that matter so so i was like actually my task one of my
[02:20:46]  tasks was like go into all the like existing benchmarks just like put them in one place and like you know just i'm going to see how it compares and i'm seeing you
[02:20:55]  like your tweet today in the morning it was like well that's great now i can just put on them so that that was excellent finding yeah i think this will really actually
[02:21:04]  shine the light on on this stuff it's interesting because like i i focus more on the dom side a lot because i'm like doing like the ui rendering library and the
[02:21:11]  reactivity doesn't actually always translate like it doesn't actually make as big of an impact on like benchmarks that are set up to do like dom diffing or like as the
[02:21:19]  test so like almost all these systems in here literally like like might not even dent that like even the slowest to the fastest but um i think there are types of systems
[02:21:32]  where like different like reactivity is more complicated like a lot of times like when you're building an application um the reactivity isn't actually that deep that often it depends like
[02:21:41]  it depends on what your setup is but like usually like you have some state and then you have like a few drive levels and then you get into the templating and there
[02:21:47] 's like like you you you might like at least this has been what i've found like you don't you're not deriving this from this from this and this and this
[02:21:54]  down the chain unless you're making like a yeah a gantt chart maker then then maybe your dates feed into your dates that feed into your dates that feed into your dates
[02:22:03]  but a lot of times like there's different patterns but the point is when you actually hit those different patterns they can have drastically different performance consider considerations so it's really nice
[02:22:15]  to as a reactor library be like look am i like at least decent here yeah uh and what's interesting to me too is a lot of these we need to get more benchmarks
[02:22:25]  in here almost all of the new breed of reactive libraries have come out recently have um a lot higher performance than the the previous generation like at like i was i was showing
[02:22:36]  that stuff on on you know with these charts that stream but there was a time period i remember this because solid was based roughly on sjs and sjs was always like the
[02:22:44]  fastest in like every benchmark for several things like on the other side there was like other frame libraries that we don't have in here over time what i've noticed is almost all
[02:22:54]  the new libraries um on very like are much faster now than like what we were dealing with uh you know three or four years ago um solid's now actually on a lot
[02:23:05]  of these benchmarks towards the the back end of this pack so um it's interesting this like having benchmarks like this will give us the ability to like like learn or figure out how
[02:23:16]  to like better handle all these kind of cases and kind of you know push these things forward yeah and i remember i was like tweeting about it like some time ago that it will
[02:23:26]  be like the same as for bdom right like we started to compare things and just kind of go into discussion and like between outdoors is like the tuning and fine tuning and
[02:23:35]  finding tricks and like that that's definitely what's going to happen here yeah yeah yeah exactly ui bench this is the this is probably the best vdom benchmark that i've
[02:23:46]  seen um uh just side note if anyone wants to sit there and test their beat on there there are some non vdom um implementations here oh right sorry it's it
[02:23:56] 's because it pops it up in a different window and my pop pop-up blocker is blocking it okay whatever it runs tree shaped uh it runs like lists it runs partial
[02:24:10]  updates it like runs all the different like tons of different vdom specific diffing like they even have tests that are like hard for snap dom hard for this like basically looking
[02:24:21]  at algorithms that are like tricky for like different algorithms and setting tests up to test those kind of scenarios um yeah so i know i don't know if we'll ever go like
[02:24:31]  to that degree but just having all the reactive benchmarks kind of gives us that kind of information anyway sorry tangent right so like if we like yeah yeah go back to this graph
[02:24:42]  i think like there are there are like at least three interesting properties that i think uh worth mentioning so one is um i mean maybe let's start with lazy evaluation because it's
[02:24:54]  just like easy to visualize right like so when we when we push this dirt down like there are no computations so if nothing creates the value there will be nothing computing right
[02:25:08]  like so if you you can go to this branch like you know with the x like run this effect uh and the double count will be never um recalculated so like
[02:25:20]  if nothing creates the value then like it's not good to compute it which i think there is this like the whole class of libraries that like kind of lazy lazy computation yeah yeah
[02:25:30]  and and that's another example where like things have kind of progressed a bit on time because i think we started with reactivity on a more eager side of things it's
[02:25:37]  solid today actually it's it's computed it's our eager um uh but like over time is like you know we we sort of go oh can we make it more pull based
[02:25:46]  i think in general you know because you on one hand you have stuff like rx and like knockout it's like really push based even with this kind of patterns like that
[02:25:54] 's what people thought and then over time like mobx was lazier view and we're getting to a point where the stuff that's getting built now is almost it's it
[02:26:01] 's funny it's gone from that push thing that we described earlier to almost being completely pull based which is really interesting properties because now you can as you mentioned if these effects
[02:26:11]  don't happen at the end you can just compute these like whenever you want so it's really powerful for types of apis um and like functionality that you know it's funny
[02:26:21]  things that i've had challenges with that i've still managed to solve them with eager but it took like a lot more thinking but like things like off screen or things like
[02:26:29]  suspense or whatever like where you can basically go no i know i can kind of like leave those effects to later like i can like not do the extra work until i need to
[02:26:39]  do the extra work which is really interesting from my perspective just from a theoretical kind of zone because it means that the mentality of stuff like react or the stuff is actually converging
[02:26:48]  more than people realize like that the the types of features that you know might people have been like oh no you need you know you can't do it easily with push base
[02:26:56]  because you know just you know reactivity or push base because it just does too much work and you you can't do it effectively or cheaply i don't think that's
[02:27:04]  true anymore i actually think that the a lot of the like cases where this reactivity was seen maybe as not as beneficial in the past a lot of the performance um pieces are
[02:27:16]  actually come together in a way where that is actually not the same kind of deterrent it was back like back in the day when like say when react was created so right
[02:27:26]  that's maybe a little hot take but no i mean i mean like there's there are like um i think there are interesting properties right like if you don't eagerly like
[02:27:37]  just kind of you know how we traverse this graph without like we'll see how it like you know plays out in the future but like i think it is interesting yeah yeah
[02:27:46]  there's some comments about like people are like uh yeah i enjoyed reactivity padding how we worked with mob x but i found the used day-to-day work very limited
[02:27:59]  it was quite rare you need the fine-grained updates that would have uh would affect performance the interesting thing is we're talking about performance a lot but i don't think
[02:28:05]  that's really the motivation here at all i i just want to kind of like point that out there because like it is in the sense that it fixes an awkward problem but
[02:28:13]  what's actually i don't know for you like there's a whole other side to this right yeah and i i think like performance is like i mean like if we look at
[02:28:23]  it from the zone gs point of view there is obviously a performance aspect of it right like because we zone gs like on one hand over notifies uh right like if
[02:28:32]  we fire whenever something happens in the browser and it goes after the whole tree so like the if we can do updates of a single component that is concerned and only you know
[02:28:44]  when something really happened that's obviously a win but i think we had these conversations with alex i remember like sitting in the offices now francisco it's like you know like
[02:28:54]  oh yeah we can like look at it from the uh from the performance point of view but for me it's more even about the mental model like how can i reason about
[02:29:04]  those things like i can have this idea in my head that like i'm setting up those connections and i know that they will always stay in sync right like so like it doesn
[02:29:15] 't matter if it's the first time i'm creating a given value or like something updates as the application leaves but it is it's i'm i've created the rules
[02:29:25]  of the game for the model and the system kind of keeps it in sync for me i i express it once and that's it right like and and i've got those guarantees
[02:29:35]  that it will only update those rules will only come to play where something precise happened and i know those rules will be executed in this glitch free way and that's like huge peace
[02:29:45]  of mind right like i know i've expressed the rule this value depends on this value that's it it's forever yeah i remember the first time that really clicked with me
[02:29:55]  i was i mean it was a long time it was like 2010 ish you know i was playing with knockout and i i i i i was kind of into game programming
[02:30:03]  like uh like early on and game programming is largely like a lot of like re-rendering like kind of imperative mode kind of our immediate mode kind of um modeling but
[02:30:14]  i i went into building like something very simple like a tic-tac-toe or something like whereas like visual but it was like kind of state based and trying
[02:30:23]  to describe the rules of how one wins the game and like how to calculate stuff and for me like that was like just such an obvious thing for reactivity because i started playing
[02:30:36]  with it and then i was like oh yeah if this condition is true then you have one and this and i started modeling all my state like that it wasn't about components it
[02:30:42]  wasn't about like how i rented the tree i just described the state of the game using these relationships and then funny enough like what i i found a few bugs along the
[02:30:52]  way but once i described it and i thought about it like okay yeah these are the rules i could just look at the rules and then understand how the whole game played out and
[02:30:59]  this was like like super powerful for me for me personally though it actually called back something much older um in in school actually i don't know if anyone does this and anymore
[02:31:10]  but f f um was it like m was it called fpm the stupid circuit board programming stuff or like vhdl yeah yeah like when you design the boards if you do
[02:31:20]  the more electrical side of the engineering um it was like the same kind of paradigm uh where you like you you like because everything is like it's not this then this then
[02:31:33]  this everything describes a system that's always in place so you're kind of like it's like wiring up circuits or whatever that's where the signal term comes from actually and i
[02:31:43] 've like for me personally that that kind of it gave me the sense of control like i say what the rules are and the system does it like there's no question of how
[02:31:57]  it runs it's like literally like and i think people who use rxjs get this feeling too it's just through time they go like i know that i've i
[02:32:05] 've accounted for everything because the way it pipes through here it's a synchronization thing it's like i know that when a drop of water falls over here everything will be an
[02:32:17]  exact like the it's you know like the butterfly effect everything will be exactly how i intended it yeah and again like you describe it once only right like there is no like
[02:32:26]  special paths it's just like that's the state of the system sorry alice that that declarative like almost dsl like way of thinking about the problem this is really um
[02:32:37]  really powerful it hits you hard i think for for me that came um i'm a compiler person right i like one of the big things i worked on for angular is the compiler
[02:32:46]  but when you study compilers in a formal way you go through this exercise of writing a parser in prolog where basically you are not imperatively parsing strings
[02:32:58]  you're just describing the rules of your grammar to the system in a way and then you just put in the input and it like spits out the parsed version of it
[02:33:08]  um and it feels really powerful for for a very similar reason that like you're not having to think about how to solve this problem or like which things need to update where
[02:33:17]  you're just telling the system about the problem and the properties of the problem and the properties of your solution that you want and then it figures it out for you yeah yeah i
[02:33:27]  mean i think people need to play with it a bit because like this has been kind of a yeah i mean just play around with the primitives it's it's it
[02:33:37] 's it's really surprisingly freeing and i i know the unfortunate part is it kind of ruined other things for me because once i had that sense of like i'm you know
[02:33:47]  control and i think that's something that might like appeal to certain types of developers or certain developers on a certain part of time in their career path or like where they are like
[02:33:57]  where where their patience is you know in terms of you know like it's hard to kind of sometimes hard to kind of give that up again yeah i don't know how
[02:34:05]  else to put it like i i i i just started kind of like it was i mean again this is all kind of going back to my personal story but i i was like
[02:34:14]  playing with these patterns then i saw a react come out and i was like okay and then i actually got really excited about react again when hooks came out it was actually the the
[02:34:24]  the when i started seeing the the ability to just kind of go like this declarative data like i i it's it's it's it is like it is a really
[02:34:34]  powerful thing even in all the different versions it comes in you know oh okay yeah okay sorry this is the wax poetically about signals part of the show sorry sorry everyone for for
[02:34:49]  having to to live through that um yeah i i'm just looking at some of the stuff through chat too i was like trying to see because people were talking about like two
[02:34:57] -way binding and stuff like that and i mean we talked a bit about about it some sometimes the apis like this can kind of inform you like when you the separate like
[02:35:07]  the set and i don't know like sometimes when you have to get in a set sometimes that can like make it enough of like i think the thing with two-way binding
[02:35:15]  isn't necessarily like you don't need to or shouldn't have it necessarily but it's like you should know what you're doing if you're going to do it you should
[02:35:21]  know what you're doing so sometimes just subtle things like very explicit apis can help like understand what world you live in i i'm i my understanding if i remember correctly
[02:35:31]  is angular has two-way bindings but the big difference between angular one and angular two was it angular one was like everything was like implicitly two-way-minded and
[02:35:39]  then angular two it kind of became like look if you're going to two-way bind you have to actually specify that you need to that you could do that am i right
[02:35:47]  yeah and i think also like toy data binding is kind of over like you know blowing it because in the sense it's a synthetic sugar for two operation it's really just
[02:35:57]  like responding to an event and assigning to a variable right like so it is it is there is an event involved right like this is what you would do in other any other framework
[02:36:08]  you really subscribe to the change event or input event and then you write to the source we just like have synthetic sugar for this and we call it to a data binding but it
[02:36:18]  is like oh no it's i'm going to write to the random place right oh someone did have a good question they're asking if you guys have thought about nested
[02:36:28]  reactivity things like you know equivalent solid stores or whatever like the or views reactivity have you guys given much thought to deep deep reactivity at all yeah not enough thought but
[02:36:39]  okay definitely some um so we were you know we have quite a few um libraries in the angular ecosystem that attempt to tackle the problem of state management um usually using some flavor
[02:36:52]  of rxjs like observable patterns and we've been kind of collaborating with them and seeing like what ideas they have what designs they come up with for dealing with state management
[02:37:07]  in the ways that they've you know like been working with over the years um so i think we're kind of trying to find this balance of not like not having a
[02:37:17]  complete solution for state management in angular not owning that whole piece of the problem but providing enough primitives and enough of a kind of lower level layer that people can build these bigger
[02:37:30]  you know more opinionated solutions on top of it okay yeah i mean that's the thing the those can the the nested stuff can also mostly be built in userland
[02:37:40]  um i brought it in because at a certain point it was like this is going to be a pretty common pattern but i think it depends on the rendering pattern it's it's
[02:37:47]  very common in solid because you almost need it if you want to be as fine as fine grain can be but on the other hand if that's not the focus that's
[02:37:57]  it's it's it's not nearly as important um so it's and and so a good example for us is like um i think we're going to need it when we
[02:38:06]  do the repeater the for loop uh because you want to be able to say hey i have you know a thousand rows in this table that i'm displaying and if i only
[02:38:14]  change something inside one of those rows i don't want to have to re-render or you know refresh at least all other 999 of them no not so much yeah
[02:38:25]  so there are points at which the the framework almost builds computers for you so iteration is an example of that where like each row is effectively like a computer of reading that element of
[02:38:37]  the array um and we need to make sure that we properly handle like nested reactivity at those points yeah yeah no that that makes a lot of sense yeah i mean that
[02:38:46]  was one of the that that is when you start seeing kind of almost the magic effect like there i've used this in demos before react did a react forget compiler demo and
[02:38:56]  they showed like how they did the compiler and all this stuff and the thing is when you have stores and the like the the repeater as you call it or like the later
[02:39:03]  the iteration loop l um mechanism you you can get that feeling of nested auto memoization without any compiler or any any any any additional trick tricks to it and that that
[02:39:17]  is a super powerful it's also one of the hardest problems from a compiler perspective i haven't seen a compiler handle re a nested reactivity yet i i think it's
[02:39:25]  actually a hard much harder problem um but yeah i mean uh oh that's interesting i didn't know about what was going on having the issue of adding svelte stores to
[02:39:37]  angular and was that news about a years ago was that something like related to your tweets foul like maybe that's right like right right right so that that kind of was part
[02:39:46]  of the story right like that that that angle of where i was trying to find uh this uh that i could use to share code between and um and at the time like most
[02:40:01]  of the company was using like redoxy or like redox global store and that's obviously it's not like you know easy to pull a piece of state like this
[02:40:13]  and uh just trade between applications so that's i was like that that was part of like oh i'm looking at the reactive primitives and i was like looking at spelt
[02:40:23]  stores because it looked like um you know i can create smaller stores like uh so there were some lessons from this but uh and that's i think we at some point we
[02:40:36]  talked about it right like i i was looking at it like can this be a primitive um to to create uh this shared state between application i didn't consider it as the as
[02:40:49]  the building block for the framework but like more like a stable state um but but yeah but like oh like you know with time i think like if we kind of tie this
[02:41:02]  discussion back to signals they they give us properties that i was mentioning so i i've got i can have one reactive system in components outside components i don't have to subscribe explicitly
[02:41:15]  uh syntactically they are kind of nicer and and so on so my uh kind of you know uh love story with the spell stores i think it's over at this
[02:41:28]  point yeah what another we we've been talking about like more complicated use cases here right because we were talking about this felt like or sorry we're talking about like stores like the
[02:41:39]  nested stores reactivity and stuff um one thing i forgot to actually ask you guys because i didn't actually see it here is um do you have a like you got you
[02:41:48]  do you guys support nested reactivity just out of curiosity like can i put an effect inside an effect i know this is like such a silly thing the reason it matters
[02:41:56]  is if i want to make angular um rx dom expressions like i have this game where i take everybody's reactive library and then make solid with it i did it with pre
[02:42:05] act um i could do it with with uh with angular signals if there's a couple things and those couple things are is there an untrack yeah untrack super peak
[02:42:16]  is not sufficient untrack is super important and the other one is can i yeah can i nest effects is this is this a thing um it is not a thing in
[02:42:26]  our design that's explicitly supported there's nothing the the the main piece i think that's missing right now is some notion of like tear down for effects yeah right do effects like
[02:42:41]  is there a dispose function on like do you guys do this there is a dispose function on it um so d there you can call dot destroy and it will destroy right so
[02:42:51]  i i can go like d dot destroy and then i yeah i if if this works properly i should never see any thing because it's all in the because it's scheduled yeah
[02:43:02]  yeah exactly but if i put in but if i put in like the first um yeah then one of them should hopefully we should probably get the zero hopefully come on stacklets
[02:43:14]  or did i freeze everything they might be and we created an infinite loop i don't know okay so yeah so you magically handle the disposal that's fine that's fine for me
[02:43:28]  if as long as you can nest it and it works and yeah what's missing here i think is like returning um a cleanup function from the the effect function so you can
[02:43:37]  like create a nested effect and destroy it when you rerun it's not the thing right now but yeah very likely it will be okay cool yeah yeah okay so okay so
[02:43:50]  yeah um yeah that that's ultimately good but i can live without that i i actually only need the dispose function and then i can manually wire this stuff one of the interesting
[02:44:00]  things in the approach obviously with solids approach which comes from surplus and sjs um that kind of innovated this was this idea that um of ownership and having nested reactivity
[02:44:11]  and reactivity but funny things i can take you can basically take any reactive system as long as you figure a way of registering some kind of parent um context using almost the same
[02:44:20]  global context you do you can just handle disposal that way i don't think it's terribly important probably not for your use case it was just one of those things that i was
[02:44:27]  like i'm always like tweaking it like am i going to come back next so you can be like like the preact case actually made a preact version and ran
[02:44:34]  it through the js framework benchmark on stream and everything and it was yeah it was fast you know so um everybody can enjoy solid like renders with their reactive system of their choice
[02:44:44]  um yeah yeah they have on track yes preact didn't have on track it was a little bit hairy um it was fine for our example but without on track things can blow
[02:44:52]  up um it's more important with nested reactivity because you you want to define you want to isolate zones almost i've got to use the word zone again i'm
[02:45:02]  sorry to everyone but you like you want to isolate areas of reactivity so not everything just ties into each other because then some errant read in the wrong spot will cause the
[02:45:11]  parent to update and then yeah i've spent too much time in this area um but okay yeah so yeah i was just curious okay so i probably have enough here for what
[02:45:22]  i need but so far clean up and uh is is is uh it's is it the cleanup from the uh end user perspective is isn't an implemented thing um is there any
[02:45:33]  is there anything um so so i was waiting till you ask about batch right right yeah i mean we could talk about this my guess was that you have a you use micro
[02:45:45]  task flushing this is like this has been something that yeah for for more and more libraries i uh solid's explicit batch is actually going away in 2.0 as well
[02:45:58]  um going to the queue mic drop i was i was dragging my feet on that one i have to admit because i was like i was like i don't know is there performance
[02:46:05]  impact apparently not really i if if if there is it's in like you're not going to notice it in like a ts framework benchmark which is good enough for me um but
[02:46:14]  yes i i dragged my my feet on that for a very long time because i was like the milliseconds um and and like for us it's kind of you know like the
[02:46:23]  scheduling is obvious uh like kind of area to play with because like we will have to tie it to the current framework so like i mean in this like the standalone library it is
[02:46:34]  micro task but like effects as alex mentioned the kind of internet designed like to plug your you know like the the timing of running um but but i think like the the
[02:46:47]  batting is interesting like for me in the sense that like with this lazy reevaluate on pool semantics you just kind of don't need specific you know like batting
[02:46:57]  boundaries and right right and yeah it was tricky right because like if you schedule synchronously you have to have the explosive batch because there's no there's no way to to
[02:47:10]  to to kind of prevent it um once once you're okay with an async poll and the thing is it's still synchronous even with an async poll it just means that
[02:47:19]  like at the the the guarantee you have to have isn't that everything like isn't that the signal like executes on the same tick or whatever it's it's that like
[02:47:30]  once you go and propagate the change and like everything has to be consistent so whenever that point in the future is that you ask the question that has to run all in the
[02:47:41]  same tick or thing so that you get a consistent state and this is um this is like the mentality work between i keep on drawing comparisons to react and stuff but when they do
[02:47:52]  concurrent rendering it's like the same kind of concept it's like it's a there's a re like sometimes when you see signals you're like oh you know maybe something like
[02:47:59]  current rendering doesn't matter because you can like literally fine grain every little change you know like there's there's no like expensive things become a lot cheaper you know you don
[02:48:09] 't you don't have to worry about a lot of stuff but on the other hand it's a whole other there's a difference between like propagating a specific change like slicing
[02:48:19]  it that way and slicing it the other way so to speak where you're just like look i want all these changes to apply at the time of my choosing and then commit
[02:48:29]  them together yeah so like the way i think about like you want the entire graph to be like in sync in one atomic operation right exactly i just don't want to kind of
[02:48:38]  leave like all part of the graph is just like funky and and yeah nothing stops you from pulling from the graph in this case at any point right you don't have to
[02:48:48]  wait for the the async boundary in order to like safely feed yeah that's the that's the coolest thing about um derives values um you know like the computed type model
[02:48:58]  because like um if if you read it ahead of time anyways you're always going to get the latest value anyways so the only reason that it's awkward is if your effects would
[02:49:10]  somehow feed back in to the reactive system and you kind of want to avoid that for the most part like there are cases where you need to do that because you're like
[02:49:17]  reading from the dom or reading from like like you there's some downstream thing where you like have to schedule it and you're like okay do the work and then because of that
[02:49:24]  work do this other work like there are those chains but generally speaking derive where you can like don't like don't just start like people sometimes asking why do you even have comput
[02:49:35] eds well it solves the diamond problem like we were showing earlier if you didn't have computers and you just were like effect right signal even if it was synchronous you would be
[02:49:43]  like ping-ponging everywhere there'd be no guarantees and in a sense that's what the earliest reactive systems of this nature were like um actually get making derived like this
[02:49:53]  is i said that signals were earlier were the special part because they are the only thing that can mutate in the system and they're from a language level they're the most
[02:50:02]  special but from this like what makes signals signals isn't actually the signals as much as um the derived state like that's actually why signals are interesting a billion libraries have um
[02:50:14]  atomic reactive state you can subscribe to the it's the the way that drive state propagates that makes the solution so interesting all right um one interesting thing to talk about here is
[02:50:30]  the um like also in in this example you notice there is no garbage collection route around this whole yeah whole setup yes yeah actually that is interesting right because usually this was this
[02:50:47]  was this was always the classic problem here is that effects like a leaky observer pattern like the the fact that like you signals themselves um will go away when they go away but
[02:51:00]  like because of the way the stuff links back generally speaking like as long as the long as the signal exists the effect can never be garbage collected um like because of the the
[02:51:10]  way the computers aren't bad because they're lazy so you could argue that if no one's listening to them they could go away but effects are are trickier um yeah talk
[02:51:22]  to that the effects are in in a sense kind of like they're active parts of the system right you you set this thing up and your intention is to have it exist
[02:51:33]  and continue to run for as long as it is useful to you um so in that sense like the effect is almost the the root of the garbage collection tree in a way yeah
[02:51:42]  as long as it's it's there and the user hasn't destroyed it or it's you know the component that it created it didn't get destroyed yeah um then you probably
[02:51:51]  still want it to to exist and continue running um and still want it to retain references to the signals that it's reading yeah um for me an interesting question is like when
[02:52:01]  you have these dependency tracking systems especially like implicit dependencies um it might be that the triple count here right or or let's say we have some x computed yeah reads happens to read
[02:52:16]  the the double count computed once right and then never reads it again and do you want to retain this dependency edge from you know x signal to double count and make and prevent
[02:52:31]  double count from being garbage collected in that case um same goes for um like you know my effect stops reading this part of the graph right so like okay eventually stops reading triple
[02:52:48]  count right right so you're talking about the dynamic dependency situation not when you say it only reads it once you mean like you mean you're talking about uh yeah favorite example
[02:52:58]  one of my favorite examples uh um what was it gonna be const uh let's call it i'm gonna do the full name example here for a second but it's it's
[02:53:09]  the if it's like the situation where you can be like if show full name return i don't know something right first last otherwise return um first it's it's it
[02:53:37] 's it's this situation right we're depending on like if if if show full name is false you don't need last anymore yeah so so that's you know you you
[02:53:49] 're here the closure will still have a reference to last right even if uh right but what if if last is not actually last it's like you know current context dot last right
[02:54:01]  where that itself is it's like a nested signal okay okay okay um or you can just make a let last as a variable right still not yeah so so last here
[02:54:18]  is a signal read but yeah i'm not quite not a const right it's it's some like dynamic signal that we can assign last is not a constant dynamic okay yeah oh
[02:54:31]  you're talking about like one level out so i'm trying to think of an example of this but okay yeah so like it's a good way of thinking about this right
[02:54:43]  um so somehow like the here the this computer would have like that would be the only place to the like that has like reference right to us but that's what you are talking
[02:55:01]  about right so so the identity of last not the value inside of it but the actual signal that i'm reading can change over time right right so like okay i might read
[02:55:14]  this thing and then something else changes in my application state and i'm never interested in the value of that signal again okay you can think of it as like a signal in a
[02:55:23]  signal as well yeah yeah that's that's what i was trying to do here so because if there's a one condition then read from this otherwise i don't i don
[02:55:34] 't think you need the condition at this point right it's just like if if we're all we're doing is like calculating something based on the signal inside of the b signal
[02:55:44]  gotcha okay and we change the outer signal so we would completely replace the inner signal right yeah i i yeah i'm trying to think of it i can i can i
[02:55:55]  mean i can probably set this up if i want to i can be like equals um signal uh what am i getting here see sig not sin signal um and then what we're
[02:56:10]  suggesting is yes signal of signal of zero so like like like this type of scenario derived i guess it could even be the effect itself but this is actually more interesting i think
[02:56:33]  so all right yeah and i think you need a return in the computed yes and i'm gonna get rid of our timer here and make this our main single from rx
[02:56:50] jx thank you yeah and yeah i mean i'm gonna put non-zero but but you can you can see what's going on here it's we put a signal in
[02:57:00]  a signal and then we read from it and then i guess at some point here we can also yeah we're gonna we're gonna change the value of s right to be
[02:57:11]  a different signal which will be like 10 or yeah whatever let's do this okay so we're doing s dot set um to uh b yeah and then you do that in the
[02:57:26]  set timeout time again exactly yeah all right yeah this is this is a good way of thinking about it so if we think about what happened here right like the effect ran
[02:57:38]  it ran derived that red s which returned a and we read a yeah and so we recorded the dependency of derived on the a signal yeah and then we went and changed s did
[02:57:52]  s dot set b um which removes the reference from of a yeah um but the derived signal was still conceptually depending on a until the effect ran and we realized hey we
[02:58:06]  you know when we rerun derived it no longer reads a here right so the question is if you didn't actually do that read if we didn't have the effect here right
[02:58:17]  you just changed s to b how does your system know to clean up the fact that you have this dangling reference from derived to a this is this is a cool problem
[02:58:28]  i haven't i haven't hit this one yet because everything's eager you only hit this because when things are lazy so yes so so so what is the answer to this question
[02:58:39]  then yeah so um in in our system um all of our dependency edges between signals are actually tracked with weak references um using weak ref in the browser um interesting and so we
[02:58:54]  do not like signals never hold strong references to their their dependencies nor do their dependencies hold strong references to them um even the effects do not have strong references to their um you know
[02:59:06]  their dependencies that they're tracking interesting okay so through the computation function they might right but the internal state that we maintain for dependency edges in both directions is weakly held um
[02:59:21]  and that means that it's possible that at some point in the future we pull derived um and we go to ask about hey i need to check if a changed so i can
[02:59:34]  decide if i need to recompute and a doesn't exist anymore the garbage collection system just tells us hey this weak reference is like empty now um you know a went away
[02:59:44]  and at that point we go oh okay like we're in stale dependency mode um so this this thing that we thought was a dependency is no longer there we might we have
[02:59:57]  to recalculate okay okay that's interesting yeah yeah that that that is new i have not come across this yet that's that is an interesting optimization i haven't
[03:00:08]  haven't i don't think i've seen this one before yeah and what we saw in a lot of other libraries is they have some notion of like a a garbage collection route
[03:00:17]  that all signals are like a cleanup context right yeah conceptually like a part of yeah i mean that isn't always yeah i mean yeah i don't know if that's the
[03:00:27]  motivation for that to be fair um the the the basically at least like in the case of solid where we have the great root is because all effects are roots as well so
[03:00:38]  it was just a way of propagating the same mechanism of like and because it's synchronous actually because of synchronous execution of effects that was basically required because you basically needed a batch
[03:00:52]  anyways so if you're in a batch and you're you know you want to like clean up the render function when you're done yeah that was essentially the the idea this
[03:01:02]  is interesting i have not like i've seen the decoupling of uh computed values from that kind of ownership graph like say like no they can clean up themselves if no one
[03:01:14] 's listening to them but this is interesting because what we're saying is um yeah interesting i got to think about this one for a minute because yeah yeah you're right because
[03:01:24]  technically speaking derived is being listened to here it just this like this might not have been yeah scheduled to run yet or it may clean up you know at some point in the future
[03:01:34]  as well yeah i guess i guess yeah yeah i guess the other question there is like if it isn't listened to then then this cleanup would happen anyway in what like well you
[03:01:47]  don't want to stand in the way of the browser like yeah reclaiming the object a here right right yeah it just yeah it's interesting yeah i have to think about
[03:02:00]  this one a little more because because it's like it's one of those scenarios where you're like i'm trying i'm trying to think in my head if if there's
[03:02:08]  ever a scenario where you have long lived effects that don't that like you're not executing so you're not checking them because yeah okay yeah this is something i have to
[03:02:24]  process through a bit because what i was getting at is i've seen a number of systems that if nothing listens to a computed it also releases so then like that kind of cas
[03:02:32] cades down which means nothing's listening to a computed if there's no effects queued this this though works specifically in the case in addition to that this works in a
[03:02:44]  case where you have effects they're just not running them so like it's referenced somewhere but like it's not uh it's not going to run anytime soon that's yeah that
[03:02:54] 's interesting that's cool thank you for bringing this up because i have not i have not seen this before yeah and specifically i think for us this stops us from like needing to
[03:03:06]  do any kind of bookkeeping when effects do kind of subscribe or unsubscribe to compute it so we don't have to track the um you know we don't have to
[03:03:15]  propagate that cleanup down right last consumer unsubscribes yes yeah and that that's that's tricky because like there's a certain awkwardness like if there's like a delay
[03:03:26]  or something like you're like do you overwork if you like unsubscribe temporarily before you scrub in this is like the area that i wanted to play with that i haven't
[03:03:33]  got to play with yet um because lazy is newer for me so this is definitely very interesting that's that is that is that is cool i'm glad you brought that up
[03:03:44]  is there any other cool things like this um or cool things you guys are looking into or um so yeah there's there's a couple of of things we're looking into
[03:03:58]  um we you had your um escala draw of the like versioning right of the propagation of values down yeah we actually do kind of this exact same thing for the dynamic sets
[03:04:11]  of dependencies um so when the effect runs for the first time right it doesn't know what signals it's going to read it doesn't have these edges going to x or going
[03:04:20]  to double count here right those kind of get dynamically added as we realize that okay the effect is running and it's reading the value of another signal or value of a computed
[03:04:31]  um and we we track the version of that set of dependencies yeah in the same way that we track the version of the value with a kind of a version number on the
[03:04:44]  effect and a version number on the edge yeah um and then so so when you rerun the log effect we don't actually like clear out the set of dependencies again um which
[03:04:57]  i've seen some libraries take approach of like you mark all of the effect all of the dependency edges as stale some of them just clear the array yeah we what we
[03:05:06]  do is kind of increment logs dependency version um and then as you read the as you read a dependency signal we on the edge we say like okay we saw you at this dependency
[03:05:20]  version um and that allows us during the kind of like pushing dirtiness operation yeah you go to notify your consumer hey you're dirty because i'm dirty we actually can compare
[03:05:32]  those values and realize oh i'm trying to mark you dirty but like it's been a long time since you read me you've actually moved on in your dependency version and you
[03:05:41]  haven't read me at that new version so i know i'm not actually your dependency anymore yeah so in other words like instead of like you know like i mean with the i
[03:05:53]  think when you were doing this educational implementation right like you just basically before you run the computation or like effective wipe out the like your set of dependencies and then you recreate it
[03:06:04]  as the effect runs to kind of fill it in again and i think uh alex inside was like a hey maybe in the systems we are dealing with this set of dependencies doesn
[03:06:15] 't change that much so we kind of can expect that from run to run we will have like roughly the same set of dependencies so in terms of like kind of wiping out
[03:06:23]  those collections and recreating them how about we assume will be the same and kind of deal with the differences by versioning yeah i'm trying i'm trying to picture the version
[03:06:34] ing part that's the part of thing because the not wipe everything has kind of been uh something i've seen in several libraries or something like yeah we used to all wipe them
[03:06:44]  like uh solid wipes yeah mobx wipes it like if you wiped it originally i don't think they've changed that but what i've noticed is recent libraries don't um
[03:06:53]  they they they either like do like uh they look milo came on stream yesterday and explaining how he looked at index and essentially was like going through and until he hit a change
[03:07:03]  otherwise he kept keeps the same the same the same array um i was trying to i was trying to figure what how versioning kind of plays into that um or is it
[03:07:11]  kind of like a similar thing where it's like a comparison on the index essentially uh it's a comparison on the the version number same as the the value here just kind of
[03:07:22]  in the other direction yeah like because like we've got the arrows in both directions right like it's just like yeah it's something okay okay i see okay so the arrow in
[03:07:31]  the other direction also has a version number on it yeah so imagine imagine that the log effect here right like only conditionally reads x right um then it would start out with
[03:07:44]  version one for its dependencies when it reads double count we would mark that edge as version one when it reads x we'd mark that as version one yeah yeah i can see that
[03:07:52]  it's like a faster way of doing that check like well it it pushes the cost of cleaning up the stale dependencies right the one the edges that changed yeah onto the
[03:08:03]  writer instead of the reader yeah so when you when log is reading signals it's not bookkeeping like oh i i need to like remember that certain dependencies didn't like happen again
[03:08:14]  and so i need to clean those up in the moment it's pushing that onto the writer when it goes to notify the consumer to notice oh hey i'm actually out of
[03:08:25]  date i had information that interesting yeah you and clearly that's no longer the case okay yeah no i i see the difference now because the the even the thing that milo described
[03:08:36]  is still happening at read time it's just it's just probably not going to change where this is like doing that at notification time yeah the theory being right that like the dependency
[03:08:47]  set in most cases is static or mostly static yeah it definitely definitely is that that that that was one of the long-term like long-time weaknesses like like places where
[03:08:57]  you'd say maybe a compiled reactive system is more performant is the the dependency like cleanup that happens every time um yeah i i'm i'm looking forward to kind of seeing
[03:09:09]  the the impact of the the reach right because like the not creating the stuff when it's static i think we're seeing that everywhere but the timing difference is an interesting one
[03:09:18]  um so and so i and i think that the interesting twist like that that alex was just like hinting at today when which i think is that like you can even like
[03:09:27]  you know like delay the the timing of cleanup right like you don't have to do it when you run but like you could say like oh maybe i will like clean up only
[03:09:38]  you know every some rounds or maybe dependencies right so that like oh if i if i accumulate more than five stale dependencies then i like invest in kind of wiping this clean
[03:09:49]  um trading off like the cost of cleanup with the cost of like needing to check this on notification um we were even thinking about like and this gets into the question you asked earlier
[03:10:00]  of like what other kind of cool things are you're thinking about um angular has a compiler um we're pretty good at understanding your code with our compiler and there are cases
[03:10:10]  where we could use the knowledge that we see just looking at you know your like expression inside of a computed and realize that like hey this thing can only be a set of dependencies
[03:10:21]  exactly yeah or this thing is extremely dynamic in a set of dependencies we can hint to the signal runtime like you know to handle it in a certain way yeah i think i think
[03:10:30]  we're going to see a more of that as well i i saw a really cool demo the other day from dominic annaway creator of inferno um and that
[03:10:38]  that was one of his things where he'd he looked at the the expressions and was able to compile in static dependencies for for some stuff and then like in other cases even he
[03:10:50]  looked at the branching inside the computers and then like compiled multiple sets of static dependencies so that like based basically based on different conditions he could pull like he basically never at
[03:11:03]  runtime needs to create the dependency a list for certain types of things let's say it benchmarks really well um yeah so yeah and i think that's something we're absolutely interested
[03:11:17]  in exploring um another kind of interesting idea that came up with surround render effect yeah um and in render effect you do kind of one of two things you're either like interested in
[03:11:29]  this moment in time because you want to read something out of the dom once you've like fully rendered it or because you like want to do some dom mutation on top of what
[03:11:38]  the framework already did right and these things if they're ordered wrong like they still work correctly they just result in the browser needing to do like excessive extra layout operations because you
[03:11:51] 're reading from the dom and then mutating it and then the browser has to like go and write the render tree again yeah yeah i was gonna say in solid that scheduling is
[03:12:01]  actually one of the important pieces that we actually separate the render and the other end user effects in a way that is yeah predictable ish um that makes a lot of sense
[03:12:11]  so so we were planning on having like okay you have like render effects that run with read timing and render effects that run with right timing and we can do all the rights before
[03:12:19]  all the reads um but we realized we could have this third category of like automatic um and have our compiler try to figure out i see looking at your effect code like are you
[03:12:30]  you know calling get computed style if so you should be in the reader set um and sort of heuristically determine these things without users necessarily having to like puzzle over which
[03:12:41]  option to set i like that yeah yeah yeah no i i think that's really uh yeah seeing the compiler augmentation coming in is really an interesting angle and i think we're
[03:12:53]  gonna see more and more and more of that um i don't know what it all means because one of the interesting things to me is like template compilation is a well-
[03:13:03] defined area it gets a lot more easier or not easier i'm sorry i meant the opposite it gets a lot more complicated when you start looking at um outside of the templates but
[03:13:12]  the thing is if you have a declarative language you can do this um so this is now a new kind of thing this i think this is one of the attractive things about
[03:13:22]  the reactivity more than anything uh i mean it's other things like getting away from component boundaries that's that's a great solve for hydration like uh and you know partial
[03:13:31]  hydration and resumability and all that stuff is basically based on being able to break out of that model um on the other hand on the language size um it provides you know
[03:13:41]  a compiler with a lot of information that it can do further optimizations because like it's not just your templates that's declarative it's actually your data that is so
[03:13:50]  um yeah this is this is a very uh interesting place of exploration i i think there's there is some danger there right if you try to rely too heavily on these kind of
[03:14:03]  automated tooling to process your code um i think like optimization is really a great target for a compiler because it's fine to get it wrong right you're not going to break
[03:14:16]  the program you're not going to prevent the user from doing what they're trying to do you're just not being as efficient as you possibly could be um so you're only
[03:14:25]  making the situation better by applying your tool in the in this way yeah whereas otherwise you get into like okay now you are redefining the language a little bit you are changing what
[03:14:37]  javascript means and you have to fit into this narrower bucket in order to work correctly with the tool yeah yeah and we're gonna see a lot of both to be
[03:14:47]  fair so i i i think this is this is interesting because i i don't know this is why i've been dragging my feet on it a little bit this is it's
[03:14:54]  everyone's got like their places where they drag feeds on when it comes when it comes to like mechanical stuff i never drag my feet like i'm always like straight there i'm
[03:15:01]  like how do we make this like resumability or islands or whatever you know signal whatever thing work and then i'm like okay we'll figure out what the what the the
[03:15:09]  dx is it's funny that i've watched people some people drag their feet the other way like they've very done a really big job of defining their language like this something
[03:15:18] 's felt you'll see rich will be like i'm i'm gonna wait off and see if this mechanical stuff is worth worrying about you know they he spent so much time making
[03:15:26]  sure that he has like a consistent sound language versus you know the other side it's kind of interesting how these worlds are going to collide um it's been really interesting for
[03:15:41]  me too to see a trend in the javascript community the larger community kind of pushing back against having tooling in the build path for web applications yeah yeah that is an interesting
[03:15:57]  one i don't yeah i don't know it's it's it's a tricky one i i think this is a reflection of of trying to reduce complexity but the the
[03:16:07]  challenge is they they don't actually want what they're asking for in my opinion i mean this is it's not take time right um it's more of that like they don
[03:16:18] 't want to deal with the unnecessary complexity of like setting all this stuff up so like like a perfect example in my mind is something like uh dino or whatever like where
[03:16:27]  like it's not like and we saw this with fresh it's like not that dino doesn't do builds but from the developer standpoint it doesn't like you you go in
[03:16:35]  and everything just like works and you just import it and do all this if you don't have the npm install and all this stuff like it just it just kind of works
[03:16:42]  you you go oh references from the cbn write my code it just builds it just works and you do that behind under the scene there's like the cdn's doing
[03:16:49]  crazy building to make the specific version there's dino caching there's client-side build transforms of the jsx there's all this stuff happening but the people who
[03:16:57]  use that system like yeah i use no build i use dino yes it's hands-off right yeah the build process yeah i feel like the ecosystem has kind of been stuck
[03:17:07]  in this other world for a while of like writing the webpack configuration by hand right which once you do that a few times i can absolutely see why you'd be like i
[03:17:15]  don't want to ever think about builds again right so it is interesting because there is a third contingent that is very much like no build and they're they're hoping
[03:17:23]  like es6 important maps and like all that stuff um but i mean that's that's good for them i i i i i feel like that ship sailed like a decade ago
[03:17:33]  but you know and for us with them going yeah i think like for us like typescript is kind of like yeah we've been always yeah and maybe that category isn't even
[03:17:45]  pure anymore because they're like they'll be like yeah we still want typescript right obviously so like like yeah i yeah i don't yeah my gut feeling is no build
[03:17:57]  like actual no build isn't a real thing it's just like we're you said hands off we're like we're just kind of like hiding it away um you know yeah
[03:18:04]  it's the friction right like for the like setting it up and like kind of debugging what happened if it just doesn't like work as you expect and whatnot right yeah i mean
[03:18:14]  in general though um uh like the the tooling is just getting better anyway so like the baseline is getting higher anyways so like today it isn't a webpack config maybe you
[03:18:26] 're just dealing with veat or something like and that's already like a billion times better you know like so like i i think i think we are getting to a place
[03:18:35]  you know where yeah yeah this is just the ever evolving shift of like uh being able to do more things and complexity catching up and you know it there's always going to be
[03:18:46]  people on the the trailing end of that spectrum or people on the leading end or like what by that i mean like you know the opinion that like hey um we should
[03:18:57]  just uh dump uh all our uh uh uh sorry i got i got sidetracked here just got a huge raid from coding garden um so thank you that's awesome uh we
[03:19:12] 're just talking here um signals and angular um with angular core team um and we were kind of getting a little existential on uh talking about the role of build versus no build
[03:19:25]  um yeah how are you all doing yeah signals and angular this is that's been the hot news and i admire ryan like how you were like dropping hints uh without like saying
[03:19:43]  much right like because obviously uh we were having conversations we're talking about uh but uh so like you knew you knew for months like that we are looking into different reactivity
[03:19:54]  models uh so it was interesting to see you on the stream too like hey yeah that's that's interesting that's that direction so so it's uh funny to like sit here
[03:20:05]  now and just like when it's all i i i am so happy to have seen like like i i this propagation of stuff is excites me obviously get i mean there
[03:20:17]  there was a time where this paradigm and this approach was seen as like very not good and now that it's kind of coming back around again it like that's so that's
[03:20:28]  like that's i couldn't have even hoped for that you know like like years ago and um it goes so much now beyond like i get like sorry angular is a big deal
[03:20:39]  like you know what i mean like there's a lot of apps out there you know there's a lot of people using angular um and this is a big change too you
[03:20:50]  know like it'll take time and you'll find your place and stride and like where this kind of fits in but this is this is big like like the number of people
[03:21:00]  out there potentially that now will know about signals trying signals doing that is a huge number of people um like yeah this is huge it's interesting because it like reminds me of
[03:21:11]  of typescript right like when we were uh like early adopters of typescript then that's kind of uh uh help definitely to to kind of get the message to the wider
[03:21:22]  audience and like that that might be the case yeah as well yeah but the internet tells me angler is dead angu if you've noticed angler's been back in the
[03:21:31]  conversation a bunch more recently um i there there there there's there's there's a you know change you know kind of coming and brewing uh right now across the whole ecosystem
[03:21:41]  and angular is not left out on this as at all you know everybody is actually doing a lot of innovation right now so i'm i'm super stoked on that how we
[03:21:49]  doing on time okay okay i gotta get into this week in javascript in a few minutes but we got we got about um let's say like 10 minutes any more topics
[03:21:56]  or questions we want to throw at these guys before we we wrap up and i move on to the to doing this week in javascript um i'm just putting it out
[03:22:05]  there it's gonna there's gonna be a bit of a time delay so i get to ask the first question because i'm waiting is we haven't talked about as much
[03:22:13]  as do you have any ideas of how you're gonna like roll this out into angular at this point like this tiny question that like right and it's interesting right because we very
[03:22:26]  specifically chose not to ask ourselves this question through most of the development of this project um because if you start and if you start working on kind of big topics like this and
[03:22:41]  attempt to take on all of your constraints at once it's paralyzing and very often you rule out approaches that might be otherwise viable because you think that they're not going to
[03:22:52]  work whereas if you actually did your investigation and got to a real result there you might realize that they do in fact meet your constraints um so a lot of this was developed
[03:23:03]  kind of in a vacuum um and then we had a separate effort of sitting down and saying okay like we think we have an option that's a viable solution for a green field
[03:23:15]  kind of angular with no zone js um driving change detection with signals how does this fit into the existing framework um and i think there's we have a a like design doc
[03:23:27]  on this that's up to was it like 20 pages of just outline okay yeah i mean it's gonna be it's gonna be an effort but so this is how you guys
[03:23:39]  are like so you built the the pure kind of best solution in isolation so you could kind of like understand the problem and be like okay we want to approach this in a way
[03:23:48]  that like isn't influenced by our past too much just to build something that we think is really good and then now it's like okay now we got to reconcile everything um
[03:23:56]  so yeah i mean so what you're telling me is this is going to take a little while um so so i think like just to kind of make a twist on it like
[03:24:05]  as we were like tying back to the beginning like we we kind of are in the mental model like people using characters they they exactly were kind of like writing applications in this mental
[03:24:15]  model where you've got reactive graph you like push notifications you your component like we want to like refresh them individually so so it is a big change but it is not at
[03:24:25]  the same time right like so we see more like we take this like what people like and what we like and we just kind of make it really baked into the framework because uh
[03:24:36]  so far the integration was very light right like the header xjs as dependency so we could we could we were getting it from npm but like we never had like inputs
[03:24:45]  or props as as observable things like people were asking for years um so we had this passing pipe but like you know spelled his dollar so like even mechanically that the way
[03:24:57]  of reading values and and so on so so i so i think we also we also see it as that it's not like turning everything that's up time well like just
[03:25:05]  taking this mental model and just like baking it into the framework and and pavel has a really fantastic way of looking at this which i've adopted because i love it um which
[03:25:16]  is that i i think about this as unfolding in kind of three stages um the first is that like the framework will listen to you when you speak to it in signals um
[03:25:26]  so the prototype that we're working on building right now is kind of ang talking to angular in signals the same as you would talk to angular and observables before um with the
[03:25:38]  async pipe and observable now when you read signals and components the components will understand it if they're on push they'll change the text or mark themselves to be checked as
[03:25:47]  part of the whole global operation so the framework starts to pay attention when you talk to it reactively um the next step in this journey is to look at places where angular
[03:25:59]  can talk back to you in signals reactively um that's things like inputs for you know that that um are set on a component and that's really where you get into like
[03:26:10]  you need to define some kind of translation for what happens when a component that speaks zone js is talking you know sending prop bindings to a component that speaks signals that's
[03:26:23]  expecting to receive its props as signals and what does it mean to pass values through this boundary and then the last step is kind of okay like what happens when you you get to
[03:26:34]  a point where everything is in signals how do you actually remove zone js entirely from this equation how do you schedule change detection when you don't have this global thing running in the
[03:26:44]  background yeah yeah okay so three basically three high level phases i think that's a very practical and pragmatic approach and it'll take some time okay i got questions now so let
[03:26:55] 's let's run with a few of these um anything else that's coming that you know people should be excited about like signals are a big thing and this is what your guys
[03:27:04]  is focused but like is there any other like headline features that are coming around the bend about angler that we should be aware of so we have like three more hours so
[03:27:15]  we're feeling very hydrated lately nice right right so we're talking about non non-destructive hydration coming to angular so like actual like actual like actual hydration yeah non-dest
[03:27:27] ructive hydration is a bit of a euphemism for you know vibration yeah yeah i i i got that term from when i was at the angular conference and i was like oh
[03:27:36]  i've never heard that one before but yes destructive hydration yeah um nice yeah so hydration ssr story you're gonna get a lot better soon um that that's that
[03:27:45] 's that's that's that's the big one yeah i i saw some chatter about that um cool uh what do we got here how will you handle circular dependencies oh so
[03:27:58]  i think that they come in different flavors uh like that just very quickly like for the you can get into cycles obviously uh as with any programming construct and like if you like to
[03:28:11]  play like two flavors worth mentioning maybe is the cycles in computed so we detect them like we throw we just like stack trace and like so you know what's going on i think
[03:28:23]  the effects writing to signals is the funny one yeah and that's just i think but there will be like i don't know we'll try to detect maybe those things somehow
[03:28:33]  but there should be mantra of like hey effect is the end of the reactivity like you're not supposed like i'm saying like you know like this is the point where you
[03:28:42]  hop off the reactivity train so don't try to go back get back when we're hoping go right like because that's very dangerous i yeah i saw your tweet about that
[03:28:51]  i don't have that saved right now but i thought it was really amusing because i saw that like a lot of talk and chatter on uh on signals on twitter and that
[03:28:59]  was definitely one of those ones that i was like we'd meant use this train metaphor and i was like i was like i think people might be worried about this a little premature
[03:29:07] ly at least on the effects side the memo stuff's detectable the effects side like when you start writing this pattern this it happens way less than you think it sure it happens
[03:29:16]  when i'm sitting in code sandbox doing dumb stuff but it does like when you're actually building your app this should not happen very often that you're doing this thing and
[03:29:25]  even if you do it like your browser just locks up right like so you know straight away you did it so it's pretty much like so it's not like a hidden thing
[03:29:33]  it's like literally like you killed your browser so like don't do that it's like the you type the character and then it's it's dead hmr triggers
[03:29:40]  and then it's you're dead so yeah i think it's fairly angular today has an has kind of a opposite problem in a way we have this error that's pretty famous
[03:29:52]  right expression changed after it's been checked which is basically the framework telling you that you change something in your model at a point when zone js wasn't able to detect that you
[03:30:04]  were um you know you were might have affected the model usually that's because you did it in response to a callback the framework gave you while it's in this und
[03:30:11] irtying process right most of the time that indicates you just did something weird and funky and you probably shouldn't be some of the time it indicates that like oh you were trying
[03:30:22]  to pass data kind of against this natural like data flowing from parent to child relationship that the framework tries to enforce right the example of that is like form validation you know when
[03:30:34]  the valid state of the form depends on the valid state of its children you kind of like the parent depends on the child not the other way around and like there are often cases
[03:30:45]  when you do want to kind of create bounded cycles right you want to go back and run change detection again or go back and update your parent state again because you needed to change
[03:30:55]  something about it yeah yeah so yeah basically you're going to hit there's always going to be scenarios in any kind of change detection system where you can produce these loops if
[03:31:05]  you try to and you try and put guards in and hopefully the main model is straightforward enough that you're like not like accidentally finding yourself in this yeah i need another word other
[03:31:16]  than zone i'm just and honestly like you can have patterns like i i know the github issues like we keep them open like we've got issues where you can
[03:31:25]  get like the into infinity loops with the current change detection you just like you know read promise in the binding and like then it schedules another change detection you kind of you know read
[03:31:33]  it again and whatnot so i mean we'll see like honestly i think it will be super interesting to develop those patterns yeah i gotta i gotta i got theo's got a
[03:31:45]  question for you guys jsx and angular what can i say um i think it's fair to say that we want to look at the altering format like the altering experience
[03:32:03]  of the whole that's yeah okay yeah i i think that was kind of a baiting question a little bit yeah to expand on that answer a little bit right like js
[03:32:14] x is absolutely on the table when we look at do we want to improve the authoring format i think we approach it not as like jsx being the goal but we want
[03:32:24]  to set out what kind of authoring format do we want what experience do we want developers to have and see if jsx is a good fit there um it's a challenging
[03:32:34]  question because jsx has a very limited syntax and angular has a lot of concepts like directives that yeah like react doesn't so jsx doesn't um and so it
[03:32:46] 's a bit of a square peg round hole kind of situation trying to fit these things together and and i i admire ryan like how you've bitten like jsx to submission
[03:32:57]  like to make it work but uh yeah the the fact that like kind of it is uh it's the expression language for hating trees and like we are trying to use it
[03:33:08]  as the compilation target and like you know trying to have the um like kind of statement the control flow like it just doesn't sit nice together so i don't know i don
[03:33:22] 't know yeah yeah no it's it's it's it's another it's it's another stream right yeah well we have support for js syntax and component metadata i don
[03:33:33] 't even know what this means i'm just asking i'm just forwarding this question yeah so so it means that um today for example in angular like the the at component block
[03:33:43]  that you write on top of the component class yeah that's not decorators yeah yeah but it's a context that our compiler has to understand statically so you can't
[03:33:53]  just you know use whatever random string concatenation like gotcha you know make an http request to get your component template right our compiler needs to be able to figure out what
[03:34:04]  your template text is just looking at that decorator that is unlikely to change so the parts of angular that the compiler needs to understand to compile your components are still need to
[03:34:17]  be statically analyzable yeah yeah that that makes sense uh whatever we got here nested effects we talked about um people just the the jsx thing sent the chat a
[03:34:30]  little bit crazy there are there are interesting questions right of like when people say like jsx templates they may not literally mean the jsx language they may mean something like oh
[03:34:44]  i want to be able to reference a component by importing it and using its class name um instead of when i get space right like which is not tsx ask the view people
[03:34:56]  how popular view jsx is uh yeah i actually don't know is it popular or no no i don't i don't think it's particularly popular um but again there's
[03:35:07]  this i think there's certain elements of the framework design like the way things are written that it's like when when it's not like the first class citizen like you're
[03:35:15]  always gonna like like shift things a certain way or like like i'm pretty sure views jsx doesn't leverage the reactivity the same way the templating language does right like
[03:35:25]  but it gives you control in a different way like so yeah i i think yeah honestly like i mean that's kind of you know we have joking here but like uh like starting
[03:35:36]  with the syntax and saying like oh i'm going to grab framework into like kind of put framework into it it's kind of backwards right like we just want to start with
[03:35:44]  the framework and then like put like close on top on it and just think that uh yeah so people people are just still a bunch of people are also interested in ssr
[03:35:53]  you guys mentioned hydration is coming um i think that's really the first step before anything do signals fit into the ssr story uh so nothing really concrete but you can
[03:36:06]  absolutely see how there would be interesting things you could do there um where when you know when a component needs to update you can think about potentially suspending that you know hydration until
[03:36:20]  something actually changes which is going to affect that component um yeah you know but yeah yeah yeah because i mean the biggest difference on the client is you know or in the servers
[03:36:31]  you're like generally you're not like in like the sync it's interesting the synchronous state problem is way less interesting on the server i said it's interesting that it's not
[03:36:39]  interesting it's like you can picture a world where you have like something like rx where you're like feeding pipes and transferring your data from your database or doing something like that
[03:36:45]  and feeding into your templates and doing all that but the thing is like from a synchronization standpoint uh you can view server rendering almost as like a few like a single flash
[03:36:52]  in time or maybe a couple flashes in time as data comes in it's not like this problem of like how do i propagate my changes the server side is like mostly static um
[03:37:02]  to the point of like in the ideal world actually you just render the parts you needed as you rendered them once and then be done with it so um yeah it's a different
[03:37:11]  kind of problem uh okay i think yeah i think we're good on time i think we're gonna we're gonna okay any advice for react i can't hear jl
[03:37:24] ark i don't know if you guys i'm not answering that we're we're gonna let uh powell and alex go in peace without without without spicy spicy react takes
[03:37:36]  um and uh thank them very much for on the show any last things you guys want to plug before you uh let you guys go um i i think for me it's
[03:37:46]  just like uh i would like to see less controversy and it's like uh you know like it's a big change and like people see it from the different angles but like what
[03:37:56]  is especially interesting for me is like you know like we are building on those patterns we are going to see how applications are being built and so on like i i just want to
[03:38:04]  engage on this level right like i want to see what you built with it that that's kind of my my biggest curiosity right now yeah i think i think that's great
[03:38:14]  you continue sir that's right um yeah keep an eye out for our upcoming rfc um you know the the code we're landing right now is still very much like prototype
[03:38:26]  we're just seeing how this thing fits into angular whether all the wires connect right whether the signals get through um but we will our rfc will kind of detail not
[03:38:38]  just the little prototype experience but the full experience that we want to try to create um kind of the the direction where we see signals going in angular so um stay tuned all
[03:38:50]  right and with that and we're going to let alex and pal go and thank you for joining me today um i hope to have you guys on in the future maybe when
[03:38:59]  you roll it all out we can come back and talk about how it all went so um thanks for joining me today awesome thanks for having us yeah thank you so much this is
[03:39:07]  awesome always a pleasure to talk to you yeah you guys too i will talk soon i'm sure thank you for all your help um over the last year or so with us
[03:39:16]  i'm glad to i when when stuff like this happens i'm like so happy to see the results of that work so and it's still going like this is going to be
[03:39:24]  really exciting that will be more watch the space you know anyways see you guys all right that was awesome man yeah so we we got to switch gears quickly into this week in j
[03:39:36] avascript otherwise i'm not going to have enough time for for hot and spicy takes actually i i'm not going to lie i'm gonna i want to dial this this
[03:39:43]  down a little bit this week um a little this has been this has been a this has been a tricky week on um uh you know controversial talking and i feel like stuff's
[03:40:00]  been heating up right so i i guess i can leave that for this week in javascript we can talk about dino what was there dino news i i have
[03:40:10]  been so in a black hole this last week because of the conversations um and i don't even have the tweets here because some got deleted but i'm going to talk about it
[03:40:21]  anyways let's let's just get this going right am i am i good to go is um doom leave leave leave and let's let's let's talk about this weekend
[03:40:32]  javascript okay all right just getting all my windows set up taking a swig of water that's almost gone you guys all alive and still with there i should check twitch
[03:40:44]  to make sure that i didn't miss like another gift sub blowout or anything yeah i i apologize i i don't always check twitch um so yeah i'm actually very
[03:40:58]  thankful theo um on on the drama side that you did your video and uh and put it out there because um it seems like something obvious that i would kind of dig into
[03:41:12]  a bit um but i don't actually yeah i i'm gonna handle it in in a slightly different way if you want the you know i'll just play it in when we
[03:41:21]  get there okay let's let's just do this it's so funny i treat this like it's a separate segment but i never actually pull this out so um let's let
[03:41:27] 's talk about this week in javascript um this this week has been a lot of twitter drama um i'm just gonna get off off the off the line and i
[03:41:42]  feel like we're gonna we're gonna get into it to a certain degree there's no way to avoid it but um i i want to look at kind of the overarching themes
[03:41:53]  of what have been going on to kind of understand better where this is all coming from and i think a lot of this topic is like a little bit heavy at least from
[03:42:05]  my perspective maybe i'm taking things too seriously on that but um it's something that's got a lot of my thinking so before that i i'd rather just talk about the
[03:42:16]  the you know the little quick news pieces and then we'll we'll kind of get back around to the drama um so let's let's get started with the sukin
[03:42:30]  javascript let's see if i blow up this one more size yeah okay um just some quick solid news to shoot it off the the up front first of all um i
[03:42:42]  recorded with syntax fm podcast west boss and scott tolinski the episode is up that was fun um it's been a long time coming it's been and uh
[03:42:52]  i think this is a decent if people just want to get a like a gist of what solid is and like how it came to be this is this is a good modern
[03:43:00]  version of that um uh obviously if you didn't see my last stream uh big things been happening on the solid side with this kind of three-way partnership between solid team
[03:43:16]  and community um the tan stack community and astro um resulting in um some some interesting output i tried to be clear on the stream there's a lot of confusion that i had
[03:43:28]  to deal with this week because apparently i wasn't clear solid start is not dead versus contrary contrary to some popular belief all that's happening is we're taking pieces of solid start
[03:43:41]  and generalizing it and moving the deployment adapter core piece on top of astro so we can use astro as a platform with solid start and then we're taking some
[03:43:51]  of the reusable pieces and sharing them with tanner so he can build uh tan stack start which is which is not an agnostic framework but actually a react framework so we
[03:44:01] 're talking about a react framework and a solid framework using the same common libraries built on top of astro so that's the that's the story um it's still solid
[03:44:12]  start the same experience same apps everything works same way um and if anything there's going to be a react framework out there that is going to be very very similar to solid start
[03:44:23]  and we're going to get a little we gave we're working with tanner to take the like server functions out of solid start so he can use them and some of
[03:44:32]  the shared you know pieces and then tanner's going to help us get the type safety into the router so in the end you're going to have that same you know start
[03:44:41]  experience both for react and solid that's that's that's the headline yes this this is very much what's going on here um any of that solid if you look in
[03:45:01]  the keel's github you'll find it it was really like honestly he just like he had to change the entry slightly and everything worked um i just want everyone to
[03:45:09]  know like this just gives us the power of a company actually building a meta framework to help build the tricky parts of the meta framework like the the core pieces that are it
[03:45:20]  lets us focus on the features and building that experience and that's that's what i wanted to do um all along you know it's like veet is already such a level
[03:45:29]  up over like the tools before it adding astro is like another level on top of that it doesn't it's easier and easier now to build a meta framework one day
[03:45:42]  the benefits of this will cross tie in but for the most part we're literally just like circumventing almost everything astro is doing above the request handler it's almost like
[03:45:51]  we hijack an api route and it's like completely just separate in the future we're going to work a lot closer together to build even better you know functionality i think
[03:46:01]  it is interesting that stuff like our server functions you know as a start like blowing as we've been codenaming it could you know fit into any island or any ast
[03:46:11] ro framework you know if we if we you know continue on this path but to start with this is this is just like switching the bundler to the same bundler almost it
[03:46:19] 's it's it's actually a fairly um low level detail that's not going to impact things much um okay so there's that let's see if there's anything else
[03:46:35]  oh yeah i thought this was kind of cool there was a few announcements on the solid side but um seeing people build cool things with like tori and rust and solid together um
[03:46:44]  this was um yet another launcher um it's an alternative raycast or alfred etc plug and support fully themable just cool to see people build different types of projects with solid
[03:46:55]  on different sorts of platforms um i always highlight that other great thing is i mentioned before uh dan is back and he's been producing tons of really awesome video content on solids
[03:47:08]  uh channel if you he did one on um explaining how you don't need a compiler to use solid and he did one um on how to use create resource our data fetching
[03:47:19]  mechanism really recommended for people interested in solid really good like starter content stuff that i'm not good at the stream is not where you learn about solid dan's videos are okay
[03:47:32]  um and i mean the other big news is why we had um our our guests on stream today uh it was angular you know last week it was when the announcement actually happened when
[03:47:49]  they shared the rfc but sarah did this amazing explainer on what signals are um she is an artist like this interactive guide is so well done i i don
[03:48:04] 't know what else to say about it other than the like i i'm kind of envious of being able to get content this good to explain stuff what what you know what
[03:48:15]  what is a signal settable signals what is computed effect the this focuses on those key parts of languages of the language that we talked about with the with with them on stream
[03:48:26]  and it just kind of lays it out in a really approachable way so um yeah this simple little explainer hooks up to the rfc it's it's really awesome
[03:48:38]  to see this kind of this kind of stuff out there yeah let's let's drop this in yeah it's it's just angular signals app yeah yeah all right um okay
[03:48:57]  okay i was like what else are we gonna talk about it's like nope nope uh are we are we there yet oh yeah did a great podcast on javascript jabber
[03:49:09]  um i always enjoy that one talked a lot about different trends and frameworks and converging um oh yeah uh yeah okay we got a couple other news pieces before we hit the
[03:49:23]  drama um we talked about this on stream um dominic ganaway has been working on a new reactive framework i got the chance to see a little sneak preview but um this
[03:49:33]  is a really interesting approach because it's it takes something like solids reactivity and then sort of uses a compiler to the to kind of the extreme to basically bridge the gap
[03:49:47]  with something like say react forget it's not react today but like it's almost like if you made the target of compat future react and i think that's really interesting because
[03:50:00]  it suggests that there might be a future um where something like solid and react could have compat because react like the the hardest thing to do for react compat with us it's the
[03:50:12]  fact that the react has this re-render model that you have to be aware of like you know there's there's a reason there's use ref and use callback and
[03:50:20]  stuff like stuff on the outside reruns and stuff on the inside um you know does when dependency arrays you know tell it to and you always have to be aware that there
[03:50:30] 's like an outside state and inside state if you get rid of the memos get rid of the use callbacks and stuff and leave just the state and the effects effectively it
[03:50:40]  no longer kind of feels like a re-render model and i don't even know what the result is um this reminds when i saw it it reminded me like of like
[03:50:51]  the destructure plugins that i've seen in the solid community and like uh like react of ours the thing where we like make it so you don't have to call signals as
[03:50:59]  a function they just work as variables it's like he's wrapped those kind of things all into um a library driven off signals to basically show what a future composed um framework could
[03:51:12]  look like that heavily relies on compilation um right the limitation only constraints for now limiting let's let you lose yeah he he makes rules essentially so that you can't write code
[03:51:32]  in a way that um like could show how do i put it like show that the component re-renders or not his whole trick here is it actually doesn't re-
[03:51:44] render it actually executes the way solid executes but it looks like react so he basically restricts it so you can't write certain code in it you know the react
[03:51:54]  way because it doesn't make sense to to fit this i don't know how people are gonna feel about this in general but i think as a direction it's really interesting um
[03:52:04]  and i intend to see how more experimentation goes because in a sense it is more restrictive than react is today but maybe not more restrictive than react forget will be their memory compiler
[03:52:16]  but it's actually almost completely additive on top of what solid does today like the stuff that he adds the stuff that you don't do in solid already so it's really i
[03:52:24] 'm i'm very curious to see where these worlds collide check my twitch okay something happened oh wow oh 10 gift subs thank you so much io samuel um i i
[03:52:47]  i'm still not used to getting many subs uh thank you this this is a lot um i really appreciate you supporting the channel all right and parasocial thank you for
[03:53:04]  the heads up thank you i i i'm i'm glad you appreciate it very very appreciated um okay speaking of server functions uh manu from quick did a great explainer
[03:53:27]  on it and and he basically highlighted in this article that i think is actually really interesting that this pattern of server functions is just kind of showing up everywhere and in quick's case
[03:53:37]  it's not just server functions it's literally being able to just break out any of your code isomorphically and this is this is going to be a hot topic on
[03:53:48]  the compilation side um i think you're seeing a trend here there's a lot of hot topics on the compilation side because now we're saying your server code and your client code
[03:53:56]  can literally exist in line um and it's interesting because like even as some like we have the same feature in solid start um where you can like pretty much just like stick a
[03:54:08]  server function anywhere you know um and have that code only run up in this on the server i when i used it at first i like i like kind of started just pulling
[03:54:18]  it out of the functions anyways because it just didn't feel natural to me but i don't know people might actually use it and and like it um it is very it is
[03:54:28]  very interesting right we've had some time to play with this now i think server functions have been in solid start since i want to say like the spring sometime maybe march um
[03:54:41]  so well i guess it's almost been a year um but like it's even playing with them i'm still i'm not even sure if i'm 100 comfortable with it but
[03:54:51]  i think what they open up is really powerful and i think we're going to learn best patterns as we go but in any case he really lays out um and the shout out
[03:55:00]  obviously print was not frameworks um how this can you know enable a different kind of perspective on developing uh uis um the the video is probably all you need in turn the
[03:55:14]  explainer but it's definitely one of those moments when you watch it and that's why i highlighted it um you see it and you're just like whoa what's happening it
[03:55:20] 's one of those wow moments so i give them a lot of credit on selling it i have not sold this very well in the past year um this this is how you
[03:55:28]  sell the feature um it's it's it's definitely pretty cool stuff right um but yeah i mean on the on the positive side too if you can go use this in quick
[03:55:40]  it just just came out and if you want it's also been installed start so you can go do this in solid as well uh all right we're we already talked about
[03:55:55]  this on stream milo has gathered all the reactivity benchmarks into one place if you are a reactivity fan and you want to like play around with your library and try stuff
[03:56:03]  i highly recommend uh checking this out the celex benchmark is not representative of the whole world of things this is much more interesting and if you're interested about how solid's
[03:56:16]  been working this x reactivity here is actually solid 2.0 um shorter bars are better so you're seeing um we're we're we're making good improvements on the react
[03:56:26] ivity system i don't know if this is going to make a huge difference from like 99 of apps these kind of improvements don't even measure on stuff like the js framework benchmark
[03:56:36]  but i think for certain types of you know complicated reactive graphs just like random things it's just a nice boost if we can get like a bit of a performance gain you
[03:56:46]  know in a lot of areas so very excited about the work there all right all right have i pushed things off enough yeah i should talk to theo about youtube paid subs and whether
[03:57:01]  they're worth it yeah all right um let's let's uh let's let's let's get into this the stuff there's been two the last few weeks have been
[03:57:25]  um a lot of i don't know what to call it like in i don't want to call it like there's been a lot of it's almost like bickering
[03:57:36]  is the best way to put it between like framework authors on twitter again and it's it's it's it's been a while is the best way to put it this
[03:57:45]  this was actually common back in like when react came on the scene around 2015 you know like react was around earlier but if you watch the documentary and this is legit a lot of
[03:57:57]  people didn't like react at the beginning and it was just like literally like divided lines but at a certain point when react started actually getting like more wider adoption people started kind
[03:58:05]  of like um like getting into arguments about stuff like what just javascript means and like is jsx compilation oh when did that happen damn it sorry like interrupt the middle
[03:58:31]  of my of of where i was gonna do talk about very serious stuff yeah no i i knew this was coming that was what that blurred image was okay here we go all
[03:58:50]  right give that the retweet this is the it's it's this is this was a monumental challenge um but marco js now has typescript support um which should give
[03:59:07]  any like one hope because marco is one of the most sophisticated dsl languages for a javascript framework and they've managed to land ts inside the templates um yeah i
[03:59:21]  yeah this this is an amazing piece of typescript engineering um yeah i i i this is people we we they kind of got hijacked in the middle of doing marco
[03:59:36]  six by how important typescript is especially for ebay um and this this this this this is big news um i'm i'm very happy stoked for the team it's funny
[03:59:46]  i mean i can tell a little joke about this when when this effort started um started um uh we we were doing sprint planning um and it was about a year ago in
[03:59:57]  february and and we were like kind of hooked up on like some specific technical detail and dylan's like we were talking like okay michael how long is it going
[04:00:05]  to take to kind of work this out it's like about a week okay and we'll kind of like talk you know and i'm like okay cool michael let's like
[04:00:12]  work through this thing and dylan's like okay uh he's like okay how do i just do typescript now and i'm like how long do you think it takes
[04:00:20]  like oh about three weeks and i'm like yeah i i you know i don't think a bottleneck excess gets in the way of uh marco six if if it's
[04:00:28]  about three weeks that's fine are you sure it's gonna be three weeks and he's like yeah yeah i i mean we might find some more stuff but i think i think
[04:00:35]  that we can get you know the good basis for it suffice to say it there's been breaks and pauses throughout but the typescript effort has been months and months
[04:00:45]  basically good for dylan specifically um most of last year and we brought him in on stream and he talked about all the challenges on building the language and getting that kind of support
[04:00:56]  and even after that we've you know found even more challenges um in terms of just getting you know consistency it is tricky when you have a language with completely different semantics
[04:01:08]  and then try and like make it work um you know hopefully flawlessly it takes an incredible amount of detail and uh expertise in typescript to pull this off and they've done
[04:01:22]  it so um huge congratulations to marko um and thank you samuel for pointing this out i i've been i've been waiting for this announcement um they did it just
[04:01:32]  in time but they sort of gave me a heads up before the stream anyway framework's running without typescript is left yeah and it's it's even harder when you actually
[04:01:59]  have to make the templating language work with it um yeah i mean marco is like the typescript migration of the actual code base and the runtime has been happening piece
[04:02:09]  by piece over the past couple years but like the actual the actual final lift is actually just like getting like this templating to actually handle typescript like you can you can see
[04:02:22]  it this this is not this this is definitely um yeah anyway that's awesome i'm excited about that okay i almost should have lift that to the end so we could have
[04:02:43]  ended the stream on a really happy note okay but back back to serious stuff all right so as i was saying last week a bunch of people bickering about their compil
[04:02:56] ers you know right and you know there's this whole thing like where people like i i put it on stream i think we talked about it where it's like you know
[04:03:09]  for some people the network division between files is sacred other people you know is magic exports too magical is changing the semantics of let and labels too magical like everyone seemed to
[04:03:23]  like take a stance and then decide like that was the right thing if you do more than that that's too much compilation it's too magical and it's interesting because there is
[04:03:34]  definitely a comfort level thing here and you know so we had this interesting discussion between like manu from quick which is very you know they got dollar signs everywhere to svel
[04:03:46] te with rich you had ryan florence coming in there and like like it was really interesting to hear like on one hand to hear um the difference where like for rich
[04:03:59]  for example morphing javascript syntax within a script tag is perfectly fine but having you know a magic export where client a server coded in the same file not okay
[04:04:11]  like like and like vice versa so with that kind of heat kind of flying around again um i guess it really started and i actually don't have this pinned anywhere but um
[04:04:31]  let me see if i can find it really quick for us svelte um serialize promise really promises rich harris just should we let's see if we can find
[04:05:09]  it uh was it not him was it a svelte official thing because this is the compiler conversation and it feel like it leaked right over i'm not going to find
[04:05:28]  find it right now am i maybe someone on youtube can find find the or twitch can find the the actual thing uh i'm not gonna find it here that's too bad i
[04:05:44]  figured it would be here okay okay here is this it we've been busy okay yeah so basically svelte has added support for streaming um snapshots which is another cool
[04:06:10]  feature i was thinking about talking about it's um but and a bunch of stuff to sell kit right and but streaming is a big one and as you know um i've been
[04:06:22]  pushing talking about streaming a lot uh for the last couple years and basically rich harris was like it was inspired by this tweet michael hevery quick angular you know he
[04:06:34]  he was like did you know that quick dev can serialize a result serialized resolve promises but soon quick devil will be able to serialize non-resolve promises then our
[04:06:41]  demos will go to 11. and what a lot of people don't understand or know about this is what a lot of people don't know is this latter thing is basically
[04:06:51]  essential to how streaming works or out-of-order streaming like if your framework does out-of-order streaming you basically serialize non-resolved promises so you can
[04:07:00]  start a promise start streaming and then resolve on the client and complete the stream and um their api was actually very simple he didn't even add it to svelte
[04:07:12]  kit he just added promise serialization to devalue which is um the serializer that um is used by svelte um or svelte kit and actually we used
[04:07:22]  it in solid for quite some time too and a lot of other projects use it so he he just set it up so that you could basically just pass it in like any other
[04:07:34]  kind of thing like maps sets dates now promises are added to the list and what this means is that svelte can now do that kind of streaming where you can basically
[04:07:43]  have data requests starting on one side and then get to the other like get to the other side via promise and it's kind of an obvious necessity i actually have an article about
[04:07:58]  this um marco async fragments from uh that describe this process from the marco dev team um back in uh 2014 when marco added out of order streaming um basically
[04:08:13]  they had a mechanism very similar to suspense and then they had this way of serializing promises and then that would basically the suspense and the promises would insert the code as the stream
[04:08:24]  uh finished in the data anyways this this article goes into detail and actually if you follow this article back um it goes further back into you know lost art of html
[04:08:35]  rendering and funny enough what i always liked about this article is that he also references um big pipe by facebook and so in a sense even though um react suspense and marco's
[04:08:48]  async thing that came out you know five or four years or whatever before suspense are very similar they were both inspired by some i don't have an article here but they
[04:08:59] 're both inspired by work that was done in facebook during the 2000s but then they kind of independently came up with their solution in javascript this in yourself you wouldn
[04:09:10] 't think you wouldn't think would be um you know much of a you know a hot topic like sweet they they added a feature that's essential for it to work but
[04:09:30]  what ended up happening was um this tweet's deleted now but um one of the members of remix core core team works on remix uh basically accused rich harris of stealing from remix
[04:09:43]  and not crediting them for this you know after all the talks he did and publishing and popularizing you know defer in remix um you know rich gave quick props but not
[04:09:58]  remix props and yeah i mean obviously there's a little bit of uh it got more heated than that there's a whole talk about attribution and um about like you know this
[04:10:17]  is what happens when you get a bunch of you know college dropouts or whatever like there was some really brutal stuff said around this and i think those tweets have been deleted
[04:10:32]  hopefully they got cleaned up but i mean it kind of started this kind of terrible uh drama around this whole thing because like as i mentioned obviously marco as an example um
[04:10:48]  quick as an example here i i i guess i don't know if remixes defer might have been around before this but like uh solid had this three years ago like this is
[04:10:57]  just like how the technology works it's it's it's it's getting very hard to kind of i i it's getting kind of hard to be able to give people credit
[04:11:09]  or like track influences is something because everyone's in the space working really and a lot of them are heads down and the thing is i don't know how much i want
[04:11:21]  to get to the specifics of the drama theo actually did a great video the other day if you want to like see the actual tweets and he talks a bit about the motivations behind
[04:11:29]  it because you know vc funded you know closed source project becomes open source you know is there conflict here and there i think there might be but for me it's it
[04:11:44] 's it's it's it's it gets it gets some it's potentially a lot simpler than all of that um not communities personal it's look it's gonna happen anyways right
[04:11:57]  um people are going to come up with similar ideas they might look at each other's ideas they might not look at each other's ideas and the there's there's there
[04:12:11] 's there's basically asking for credit doesn't really get you anywhere the choice the choice ultimately comes to the person who's releasing the thing it's their choice of where they they
[04:12:30]  accredit and in my opinion like people should be crediting things that they're inspired by they should be even crediting things they're not inspired by the you know if
[04:12:44]  you look out in the space and you see people are working on similar problems then give them a nod you know os is more like everything derived inspired it's hard to determine if
[04:13:00]  anything is truly original yeah you know know um except for marco everything originated from marco um sorry i always like making that joke because like in some ways marco was
[04:13:10]  so far ahead of everything else to where they have occasional times you have scenarios but even they had their own influences which i showed i'm just saying like occasionally like there are things
[04:13:21]  that are like years ahead but for the most part everyone kind of arriving stuff at around the same time um and i was saying here having been given credit for things i didn
[04:13:30] 't invite and seeing some people being upset about not getting due credit i think um in times of change a lot of new things are discovered rather than invented and independently time this i
[04:13:39]  i i i have this idea that like there's a certain inevitability to the technology like that's why it's always obvious in hindsight obviously when you're working on the problems
[04:13:51]  it's not obvious you have to like you work at it you you find it you you agonize over these decisions and how they fit but at a certain point when
[04:14:00]  things click and you know that they click like you're there and i i wanted to really highlight this and this is where the maybe the vc funding angle and stuff comes there
[04:14:08] 's like a difference between the technology and the product a lot of times you have successful products built on already existing technology maybe one that wasn't appreciated or marketed and like really
[04:14:19]  the only choice in scenario is if you were influenced by something give it a nod and maybe not give it a nod too you know talk about like maybe a certain solution didn't
[04:14:29]  inspire you but you know it's in the space working on similar things you might as well just like there's there's no harm in just going like hey you know like i
[04:14:39]  know that they're working on similar things i know not everyone's looking at what everyone else is doing but this is something that just becomes a very clear when you start like
[04:14:49]  looking around and seeing like patterns in whatever in all the different work that different people are doing like react server components and islands these are not unrelated things um the work going on with
[04:15:03]  compilers like server functions there are so many rpcs going on but like if you think about it for a second it was obvious that it was going to go
[04:15:11]  to rpcs when people are bringing back monoliths like why deal with the ceremony around apis if you don't need them like this is this is like a fore
[04:15:22] gone conclusion um you know i often talk about you know like server functions recently because like that was our big thing this past year but before server functions we actually had a proxy version
[04:15:32]  we've we've had a version of automated rpcs and solid start pretty much from the beginning um a couple years ago and i didn't get that idea out of
[04:15:41]  thin air i mean i had a conversation with brill out critter v plugin ssr and he was telling me about telefunc and it was like a bit of a
[04:15:48]  heavier system but i was like okay and then i started kind of working and designed it out and then a few months later someone's like oh have you seen blitz i'm
[04:15:54]  like no i've never seen blitz and i looked at blitz and i'm like yeah this is kind of what i'm doing so i started being like yeah okay
[04:16:00]  i mean i can say it's inspired by blitz i had no clue about blitz when i built it but like this this is just naturally going to happen as this evolution
[04:16:09]  goes yeah and no one credits used denno from lf yeah because no one actually looked at it like to be fair like sometimes these omissions are just because you weren't
[04:16:20]  aware of things but like there's a certain like you got to recognize that like everyone's working the space you're going to write from stuff in this at the same time
[04:16:27]  uh people are arguing react and angular okay anyway and yeah i mean that that's that's that's that's the thing like there's there's no harm if you are aware
[04:16:45]  of something just you just give it an odd you just go like you just go oh yeah everyone's working on partial hydration you know everyone's working on server function just kind
[04:16:55]  of take a look around before you decide that you've you you own the the ip on this because it's not it's it's not about actual crediting when someone gets
[04:17:08]  to that point where they're like well your i did you mit license attribute it like don't get me wrong that's an important thing to do from a legal standpoint it
[04:17:17]  shows respect and all that but if someone's angry enough to tell someone else that like the the mit license bit isn't what they're angry about that just gives them a a
[04:17:28]  place to vent they're they're already angry like that that doesn't make the difference because like there's more exposure on idea in a blog post than on an mit license no
[04:17:38]  one's looking at the mit license what they're looking at is when the big release comes out and and then it's like yes we invented the blank blank blank and it
[04:17:47]  we pulled this idea out of thin air and you're like wait ours is called server and has a dollar sign at the end it does like basically the same thing like hey you
[04:17:58]  know like like i i just pulled that out but like uh what's it like nested routing like like you just pick pick something or we serialize promises or like like
[04:18:11]  i i can see where that feeling comes from but like i i think i think we just got to recognize like right now this is this is happening a lot and sometimes it's
[04:18:23]  the ones who successfully market the idea sometimes you'll overlook something and like not think that there's a big deal big deal out of it right you'll like um you'll just
[04:18:32]  kind of like it's just like a matter of fact like you like sterilizing promises is actually the perfect example for this right because it's mechanically necessarily necessary for streaming
[04:18:45]  so when i saw what uh marco was doing and then i like went and implemented something solid i was like oh okay serializing promises makes this happen i'm like sweet out
[04:18:57]  of order streaming is pretty sweet and i tried to demo like how cool out of our streaming is but i didn't promote serializing promises because i was like who cares but
[04:19:06]  like quick for example made a big deal about what they could serialize they found an angle where that was like a unique aspect even if it wasn't actually unique that they could
[04:19:15]  serialize promises it it was like it was something they were like look this is a power we have and they marketed it and they made it part of their product it's like
[04:19:23]  so from my perspective like that's really good because like they you know they saw something in value that i had disregarded right and i think i think that that there's
[04:19:36]  this difference between popularizing technology and creating it and it's it might not even be creating if it's a discovering to a certain degree like there's just so much these pieces
[04:19:47]  moving and we need to we should try and credit people and be generous in accreditation if possible but like if we're if we're going to start like trying calling dib
[04:20:01] s on stuff that's basically the physics of the platform we're going to get into a lot of fights the difference right now is everyone's trying to sell a react framework
[04:20:14]  so the landscape has changed to compare it to before yeah so yeah there's like money or competition involved right i i get that you know like that's that's the crux
[04:20:26]  of it and maybe that's why remix has been at the forefront of this discussion but the problem is like it gets out of hand and this one it's funny this was
[04:20:41]  jacob and jacob's a little bit of we've shown a few of his tweets before where he said some you know a little bit obnoxious stuff arguably
[04:20:49]  um like something he said something about like partial hydration would never be proved beneficial or like just really just you know it's funny like that's my example of being obnoxious
[04:21:00]  um so he's he's not ryan he's not michael but like this one was like the final straw for a lot of people they they were like nope nope
[04:21:12]  and people started being really mean on twitter like saying stuff like oh did you know remix invented the html form or you know like and there's just no good that
[04:21:29]  comes out of this in the end and um what i actually found out is this primogen ryan florence just deactivated his account you all need to learn how to
[04:21:41]  have more fun on twitter and stop fighting constantly just post already it's way more fun like this is real um i mean i i i checked yesterday um but you know i
[04:21:53]  wasn't sure what was going on i thought maybe he blocked me or something but apparently others have confirmed he he he is he is he is gone um right now um just just
[04:22:11]  left like and maybe that's a good thing get away from all this drama but like i as far as i know ryan wasn't actually directly involved with it i think
[04:22:28]  he just had enough of just all like you open up your twitter feed and there's a bunch of people making clown faces around remix and stuff like it it's hard when it
[04:22:35] 's your creation the stuff you're doing you're just like why why do i need to put up with this crap but like yeah let's let's see here um see
[04:22:47]  if i can oh oops that wasn't secret operation bling stuff it's not actually that secret all right theo uh open image in a new window all right there we go
[04:23:07]  i'm here twitter isn't what it used to be the valuable crap ratio dropped below one recently so i'm out too excited about what we've got planned for remix and between
[04:23:16]  this discord and shopify internal teams i've got all the feedback i need to find our blind spots yeah that's that there you go um yeah yeah i i i i
[04:23:30]  think after a while you you wonder if you're just feeding into this noise you're wait you're spending you're spending all this time yeah i i mean a lot of people
[04:23:42]  are going to say that like you know you you wait was it you beat you what you you reap what you sow you know so to speak um but i don't know
[04:23:53]  i i i i don't think the the the negative presence on twitter was helping anyone so maybe this is an improvement but as i said ryan's generally been like gone along
[04:24:07]  a lot better been more civil recently so i mean i i don't know this it's it's a it's a little bit unfortunate that things come to this but um
[04:24:16]  yeah i mean this is the end of the drama as i said if you if you want the specific details do check out theo's stream um it's this has been going on
[04:24:31]  it's basically been a year honestly shortly after they open source there's just there's been this drama of week after week after week after week i don't know maybe this
[04:24:41]  is the end of it yeah uh kent c dodds just i'm gonna mention did a great job of standing in and being like hey you know this isn't cool
[04:24:55]  you know and making sure he's he's been you know making sure he's not even on the remix team anymore but he's been making sure that like people you know don
[04:25:06] 't you know feel pushed out too much by like singularly bad actions or actors but this is i don't know i don't want to i don't this one i don
[04:25:16] 't actually want to talk about much more it's just it just the whole thing feels like it was unnecessary and i just i i wish i wish like this is one of
[04:25:25]  those ones that just didn't need to happen um so maybe we talk about it so we can learn from it i don't know yeah yeah i mean it's just it
[04:25:51] 's hard and this is this is the tricky part you have is at being a community like especially if anyone who's like associated as a core maintainer does anything it directly that
[04:26:01]  gets associated with you but it even gets associated with you when you have like people really enthusiastic going through and they're like you know there's there is a flavor feel around
[04:26:13]  communities and every community has like a certain aura they project um there's definitely like a color to it and it's tricky because it's somewhat reflects on the the founders and what
[04:26:34]  their actions and what they do and people follow but it also goes beyond what you can do like there's only so much you can do so yeah i mean yeah i mean
[04:26:46]  and there's gonna point uh i wanna let's talk about this i think with remix though i remember next.js announced nester routes and they didn't even mention remix or
[04:26:55]  react router yeah the interesting thing from my perspective is this is this is a perfect opportunity where next could have just been like hey nod to remix or react router like it was
[04:27:06]  react router 6 specifically is one that i want to go to because older version of react routers had nested router but react router 6 did and that they could give a nod
[04:27:15]  to that without even giving a nod to remix um and just been like you know it's cool you know we've seen this in the space and just nod the truth of the
[04:27:24]  matter is like honestly i don't think react router and that's routing had anything to do with what they were doing with next they were focusing on server components and this was
[04:27:34]  a mechanism they're doing and i don't i actually don't think there was almost any influence there honestly from my personal opinion just just from how i understand approaching the problem space
[04:27:45]  but would it hurt to just be like hey you know these guys are doing good stuff too i don't know that that's that's that's that's that's what
[04:27:54]  i'm saying here because i actually don't i i don't actually think that it was inspired and we see a lot of that too like if you look i put this up
[04:28:04]  before react hooks make no mention of reactivity as inspirations for hooks and you're kind of like like like how could you not because it wasn't their inspiration not at
[04:28:16]  all but you could kind of like what one could do is look at and go oh yeah these guys are kind of trying to solve a similar problem and you don't have to
[04:28:27]  do this but i feel like there's some space to to kind of just recognize that there's a bigger thing going on than your your particular organization company whatever and tie it
[04:28:44]  into the the narrative that's that's what i like i'm a storyteller maybe that maybe that's the problem and there's an element of this um i i think we
[04:29:01]  say we talked about remakes in the past but remixes got more future they have shopify behind them this is going to continue going they'll do good this is just
[04:29:10]  like a small subset of the kind of mind share on twitter kind of thing but it's like this there is a truth to this when when remix came out they kind of were
[04:29:21]  positioned as reacts white knights bringing back web standards making performance important doing all the good stuff and then the the first thing they did was basically like turn around look at the people working
[04:29:34]  on performance stuff outside of react community and basically like yeah the technology and stuff you do is pointless you don't need that you just need remixes like like like why there
[04:29:49]  was no need you just you just go yeah that's really cool stuff we're we're into react here and you know maybe in the future we'll take some of those ideas
[04:29:57]  and see if we can bring to react to make react even more performant but no that wasn't what happened like that that wasn't what happened it was just like it
[04:30:11]  was just like no streaming is bad partial hydration is a lie like low javascript doesn't matter when you can use progressive enhancement it sounds like i can't pull the
[04:30:25]  treats because they're deleted it sounds like i'm like making this stuff up but like literally yeah maybe this is good this is the end of that drama like just it's
[04:30:34]  done done sorry this this is why this issue it just this is this whole thing was unnecessary every aspect of it and like the end result is like i i i i
[04:31:23]  i remix has a world outside of this whole thing so we don't have to worry about it but like i liked the mindshare competition next needs competition we need we
[04:31:32]  we need balance in the force you know if everything's aligning a certain way we need to see that there's other options out there we need to explore and like widen
[04:31:41]  the scope i i'm i'm very excited by remix this is just yeah so this is this is drama one um right drama two isn't really drama it's just what
[04:32:19]  i've been kind of sucked into for the last uh few days um andrew kind of shook things up a little bit last week when he said hey we might add a signals
[04:32:32]  like primitive to react but i don't think it's a great way to write our ui code it's great for performance but i prefer our model where you pretend the
[04:32:38]  whole things were created every time our plan is to use a compiler to prepare for performance this is fine i read the tweet i think i responded in the chain a couple places and
[04:32:50]  i was like yeah i think somewhere someone said something like the reactive programming is a dead end and i was like okay come on we yeah we we should talk about that i
[04:33:01]  mean we maybe we shouldn't ignore the fact that andrew clark andrew clark said this take was very wise um but but i think he was talking about the hardest
[04:33:15]  part of reacts fake reactivity is lining up the data sources so screens only initialize once or whatever i think he was talking about that not about the the initial statement but
[04:33:24]  like you know jordan walk comes in and he's like yeah i know this they start going off on this chain about performance and updates and and stuff being performance like you know
[04:33:34]  react being like faster on create versus updates and most things are creates and i'm like it's theoretically true this is true you would think that subscription setting up is expensive but when
[04:33:49]  you move to a lazier system you defer a lot of that cost to updates and if the update system is already cheaper and you can use the fact that you have updates
[04:33:58]  independent of of like a virtual dom or dom thing you can actually optimize the creation code and you know let's let's let's do a little look here how long has
[04:34:14]  let's take the js framework benchmark how long have reactive libraries been the fastest approach to render the dom let's just look actually let's let's look at the the most
[04:34:32]  most recent results let's remove stuff that is noise okay yeah here we go you might wonder about the zania there it's not quite comparing apples to apples to be fair but
[04:34:52]  that's fine let's give them credit being up there as number one here but solid and then we have some fast vdom libraries like block dom and inferno right so
[04:35:02]  like it's not like the virtual dom is slow i just wanted to just kind of put that out there um and these you know there there's some more reactive libraries and all
[04:35:15]  this but this the thing i actually want to show you is that creation performance is actually faster in solid than even block dom or inferno okay like this is this is also
[04:35:28]  creation right here like it's actually hasn't and if i go back in time i think what we are chrome 58 how long ago was chrome 58 does anyone even know is that
[04:35:39]  like early 2017 or something like it's been like six years let's let's look here who was the fastest six years ago there's this library called surplus yeah we we
[04:35:52]  talked about being able to do this i know all the frameworks by heart so i can tell you what they all do but six years ago here's surplus at the front of the
[04:36:05]  list there's still ev and inferno and the common thing but this is solid's predecessor um created by adam hale it's very very similar approach basically for the whole
[04:36:21]  i said seven years i don't know six seven years ago basically this has i've always suspected of the case but this has basically been proven to not be an issue for
[04:36:33]  like stupid large creations for years and years and years and years and years and years and like it's it's been the same uh uh where are we the same kind of rhetoric
[04:36:45]  right like in theory yes but like where's react i mean react react is always kind of middle of the pack right reacts here or sorry react that's redux reacts here
[04:36:57]  preacts here back then swelt was a lot slower this is before spelt 3 but if we move back into the modern day and we have way more frameworks now and we
[04:37:06]  just kind of get rid of the stuff it gets like you'll you'll find where is react there we are react hooks somewhere back here 173 it's kind of like the
[04:37:18]  react kind of is like around the middle of the list like there's nothing wrong with any of these things it's just they like even i i just at a certain point
[04:37:30]  i was wondering when they would give up this narrative that's that's that's thing and actually dominic ganaway we highlighted his thing he said i don't think this
[04:37:39]  is an issue with lazy pull-based signals at least i have something working that provides exactly that i should demo it publicly at some point so people awareness what's actually possible funny
[04:37:48]  thing is like dom doesn't even have to demo it like even without his compiler optimization you know to take it to the next level this has been the case for like seven
[04:37:57]  years and okay so we can all say that performance is good so let's you know move off and it's fine like andrew's like look hey i i didn't
[04:38:08]  mean to you know you know overly critical harsh i'm happy with all those other exploring other avenues i just wanted the coffee concerts how we've been thinking about it i'm like
[04:38:18]  sure sure sure so let's leave it at that then right sure who cares right like they react doing what they're doing and i think that's where i respond to andrew
[04:38:26]  i was just like yeah you know um yeah i don't have it here but i was like yeah no i i'm i'm i'm i'm i'm good with
[04:38:35]  that uh sorry i jumped out too quick um yeah what did i say yeah he's excited to see um dom stuff come public and i said i've mostly witnessed dismissal
[04:38:54]  and i was expecting more of the same perfectly content with react living out its vision but also cool to know that they've talked about it right that that's that's that's
[04:39:01]  the reasonable place to be right 22 questions what with frameworks right so yeah yeah exactly like it's fine they have their own measure and their own thing but i don't know
[04:39:30]  if they're even were exploring flooring reactivity until again they're thinking about it now right but they hide it but i'm like i get it that that fits with reactor
[04:39:41]  sure um next week i don't really mean to be too dismissive of the enthusiasm around signals but i just from imagine world where the main thing you think about when building components
[04:39:59]  is something other than optimizing update performance to me that was central to the original picture react very true you don't have to think about how updates flow through your ui anymore just
[04:40:10]  re-render the whole thing and you'll make it fast enough i think that bet has paid off so far even if there's more to do to make it better and
[04:40:21]  this is very true i'm actually if you go back to original react and react class components i i i think that i think there's a very clear discussion point on that like
[04:40:34]  where you can go like look render functions re-render you set up your components your state is just plain javascript objects you don't have to think about how it updates
[04:40:44]  too much you have a few life cycles you know it it really worked you don't have to there was no there was like should component update maybe but there was no really
[04:40:54]  you didn't have to worry about like stable references and stuff like dependency arrays or whatever like it just it just did what what they said but what's interesting to me is
[04:41:03]  it's been such it's been a while like it's been five years since uh this year since hooks and hooks forced people to do exactly what the original react did not do
[04:41:17]  it forced you to think about how things update yeah the right like and i think reacts kind of better for it gives you more control you can get better performance on react people
[04:41:31]  did kind of dumb stuff with react in the class component days you people write better react with hooks in my opinion but it's because they you have to understand how they work now
[04:41:42]  you have to think about updates this is not the react rhetoric like the rhetoric from 10 years ago like he he goes on more here talking about like i think the what was
[04:41:55]  the next tweet in his thread so that's why i don't buy the argument that signals find better dx model they they do when the problem you're thinking about is optimizing performance
[04:42:04]  but building uis is more than that notice how nobody is clamoring for signals and server component loaders what sorry i i didn't even see some of this stuff like
[04:42:16]  why of course you wouldn't have signals and server component loaders because it doesn't it signals is a synchronization mechanism you don't need synchronization on the server like okay
[04:42:28]  so i'm more excited about the ideas to keep re-rendering everything program model okay okay cool like but it was it was this this comment about the dx and optimizing performance
[04:42:40]  um kind of in relation to to to this whole thing because like that's i mean we talked on the street how many people actually use this stuff for performance and like his
[04:42:56]  previous comment drew evan you out and view rich harris out and you look at them and then people are just like what are you what are you talking about like and for
[04:43:10]  me i'm not even it's not that this isn't why this kind of got me into this zone again today it's it's it's related to something that like
[04:43:23]  i had a great discussion with dan about islands versus server components where i was basically trying to discuss how and we got to the end of it where i was like no every benefit
[04:43:33]  of server components could be done with islands plus plus essentially like server components is an addition to islands mentality it's not like like basically people are working on the same stuff like
[04:43:43]  you do it's not like like reacts over here and everyone else is like not getting it over here it's like no everyone's actually working on the same things and actually maybe
[04:43:52]  like there's some like minor details but those are like just details like the thing is okay check it out the cool thing about reactivity is it reduces a language down to three
[04:44:04]  primitives state derived state and effects and i was saying like sounds familiar it's like if you took all the hooks away from react that are concerned with performance you got rid
[04:44:11]  of use memo use callback use ref you get rid of those and that's what you end up with the reactive language see and they are getting rid of those with the compiler
[04:44:23]  right but like that is what reactivity does the whole you know render re-render model is actually kind of independent of it if you think about things like pre-act
[04:44:32]  or view or um quick which actually re-render with signals i i i think there's depending on how you do it there's like interesting trade-offs with that as well
[04:44:46]  but the point is like in itself the reactivity and the rendering can be kind of split but let's let's just focus on the language for a second right it's
[04:44:58]  that i do almost every conversation about react for the last couple years recently because you know the stuff's been coming out has been about performance so it's it's very strange to
[04:45:13]  me to kind of point out like oh you know you only use signals when you care about performance when like literally the whole conversation has been about performance it's and like you
[04:45:24] 're you're fighting it so like it's it's it's and why this gets to me is because it like look react forget or whatever might end up in a really good
[04:45:39]  place but when the final product comes out regardless of like this long-standing division bias you know i'm biased too i i i i remember you know i was very much
[04:45:52]  in reactivity camp when react first came out i was just like you know and there's clearly still in this you know it was the thing is i realized that react was right
[04:46:05]  to a certain degree and i changed the approach and that's why solid exists today i was like react they were right we needed to evolve to understand you know that certain things
[04:46:14]  the way reactivity were weren't serving us and the interesting thing for me and maybe this comes right back down to the whole attribution conversation in a weird indirect way when i
[04:46:27]  was talking about like noticing the rest of the ecosystem going on is when they write this compiler and maybe underpinnings are signals and you find yourself explaining how things update in
[04:46:38]  terms of dependencies that change like maybe we should have this conversation again right because honestly i don't know what react forgets going to look like but i've seen dominic's
[04:46:48]  compiler for signals and like if if you how do i how do i show this like it's if we have a component okay let's let's just let's just let
[04:47:05] 's just sketch this out if we have a component here that's like app okay and in our app we are going to have state let's um let's say whatever show
[04:47:20]  set show equals use state okay there we go okay we have some state um true right um let's let's add some other state maybe name set name okay so we've
[04:47:45]  got we've got quantity and then we have something like if show okay okay i'm just this i'm just i'm just kind of playing around here um let's
[04:48:22]  do that and let's put it doesn't it doesn't even matter i did maybe i didn't need the second state for this but like if you console log here okay right
[04:48:42]  and you have an early return like this okay yeah p1 sorry h1 and you're using something like react you expect this console log to log twice if it switches from
[04:49:07]  show to not show you you your mental model is the component reruns top down and it and it and it um and alive runs twice but what if what if in this
[04:49:20]  model alive didn't run twice like it only ran once and when you switch show stuff just updated like like like because under the hood this under the hood this code turned into
[04:49:51]  like i'm going to use create signal actually to to to make emphasis here like i'm going to use the code to do it because under the hood it changed to
[04:50:28]  this because under the hood it changed to this right you write this but you end up with this okay now the only reason you know or don't know this runs top
[04:50:58]  down is because i console logged alive here right if if you otherwise you could argue that oh this just this just switched right like the first time you ran it went this way the
[04:51:16]  other time it went the other way but what i'm getting at but what i'm getting at here is that like let's put the console log in here now right and
[04:51:33]  update john or something or like or maybe maybe i should put the console log on the other branch like over here and update john like if if you change some state and this
[04:51:57]  condition doesn't change the next time around because like it's memoized like trying to explain to people in the system what runs there's no dependency arrays anymore just what reruns
[04:52:13]  when the component reruns the only way you can really talk about is go like oh show change so we ran this code instead or something or name changed so like we because you
[04:52:24]  don't you don't like run the other branch or you don't like my example is not great here but like essentially you've gone to a world where where if you
[04:52:39]  get heavy enough optimization and you actually stop rerun rerunning stuff because it's memoizing the difference between the actual execution model between this and this converges and without the like
[04:52:58]  affordances to see it it it becomes very hard to explain this this as running something that runs top down because it actually doesn't run top down unless you like go no
[04:53:09]  you're not allowed the console log here or you can't put let variables in the body or you find ways to restrict stuff so people can't observe that it's not re
[04:53:18] -rendering i don't know if i'm making much sense here but okay i'm making sense yeah you're supposed to right you you create effect the console logs then
[04:53:47]  react knows about basically as long as your function is pure you can't observe what's actually happening and that's the saving grace but what i was getting at is if you
[04:53:54]  saw a system like this and and i told you that under the hood it was react but magically console logs don't run or i told you under the hood it compiled the solid
[04:54:14]  is this hiding signals or not if you have to explain it that it's because the name or the show changed that it's updating like it's just signals with a different
[04:54:26]  syntax the truth of the matter is we might all be converging and and this this this is where like this is where the the challenge has been for me right i really
[04:54:47]  appreciate if you extend the same currency i've tried to extend but not assuming i'm too stupid now even to look at the same as to come to different conclusions blah blah blah
[04:54:53]  okay sure whatever um okay okay okay okay to address the earlier point i think there's a big difference between signals and implementation deal versus singles in a programming model i i don't
[04:55:07]  think any of that's gonna matter i mean this comes to compiler and comfort but like what if i told you that in the next version of solid you could just write this
[04:55:20]  and you know you know and let's just rename this view signal whatever like it's like it's not running top down it is these components don't re-render and the
[04:55:37]  model fits that you just have to think that now instead of the show component if statements are also reactive boundaries kind of the way like ternary operators are installed i'm
[04:55:47]  not saying i'm comfortable with this i'm just saying like this distinction is kind of irrelevant and as compilers continue it's because both sides were just completely messing with the
[04:55:59]  language right this is this is far this is not javascript anymore right like this is not just javascript hooks already kind of got away from the old like oh
[04:56:11]  it just re-rendered forget about it and the compiler is is like the anti-thesis of just javascript i'm not i'm not saying this is a
[04:56:19]  bad thing for react or a good thing but it's like the react of tomorrow is not the react right i mean that's that's so that's the that's the
[04:56:28]  question here right i mean it's kind of like the way they were treating islands when they were working on server components until like we talked it through and i i hope we
[04:56:53]  can talk it through and just realize that this is just that old discussion like i mean at a certain point like was it like walks like a horse eats like a horse is
[04:57:05]  a horse like if if you do this this doesn't re-render and it has signals under the hood like what are we doing right like it's it's fine but
[04:57:17]  it's like like this is why this is why like this irked me because like it comes down right back to the original comment you know like not this one the one about
[04:57:33]  like you know or the response about like oh it's not about dx and blah blah blah and like performance and people only use signals when you're going to change your mental
[04:57:46]  model like you're also entering this dx world of conversation these things aren't transparent um okay well sorry i'm following different branches here it's just it's it's the
[04:58:05]  the key part is that we all landed on the same language right the state drive state and effects i maybe i get where brian florence wanted to get off twitter i
[04:58:16]  i didn't have to respond to this i didn't i didn't need to print paragraphs of this it's just i like this one yeah it feels like everyone's come to
[04:58:26]  a point of violent agreement about how reactor code should be written and execute i'm excited for this area program to stabilize and then dom says i still think the language could benefit
[04:58:34]  from a signal primitive that might help adoption and reduce code size yeah thanks dom but like this is this is like like it's getting very close to the point that the the old
[04:58:52]  arguments just don't work anymore and that's that's really that's that's that's that's that's that's what this this one is just check keeping up
[04:59:18]  with chat the thing is what's beautiful about this is react uh react can keep with their vision and realize this reality you know approach the hill from their side and create something
[04:59:36]  amazing without without without at all going here that's what you know it's fine he doesn't believe that the dx or the mental model is good but like i guess this is
[04:59:55]  where my snideness came from i'm like you've been adopting it piece by piece like you're you're like you're like practically there you know like i i
[05:00:07]  mean that but that to be fair that's only my perspective on it it's just it's it's it's like these things are converging to a certain degree right and
[05:00:21]  um these discussions are pointless and i i i think i think that's maybe that's the problem you kind of hope that if you talk about it and then everyone can kind
[05:00:35]  of get on the same page but like it doesn't really matter as long as the end result is that react continues to work towards what they're working towards and deliver on this
[05:00:43]  amazing thing and i am sure there will be other solutions doing the same thing and you know it's like this weird perspective thing you know you i i actually asked andrew
[05:00:54]  this i'm like when you saw dominic's demo when you like when you see this like and like are are we looking at react or are we looking at solid you like
[05:01:05]  like maybe it's react because you're using this but then when like when you understand that this doesn't run then it's like not react like i don't know but
[05:01:17]  maybe it doesn't even matter they they might and the funny thing is this this is the this is the this is the thing that i think might ultimately be the biggest proving point
[05:01:41]  of the hypothesis here when react drops forget will someone from the solid community recreate it within three days i know i know that that seems like stupid right like how could you take
[05:01:53]  years of work and just drop it three days later but i'm because the primitives for reactivity already exist we already do stuff like destructure on destructure we are you
[05:02:08]  you know there's a plugin that lets you destructure stuff reactivars a way of like getting rid of calling the functions if someone goes and works on this control flow
[05:02:17]  analysis stuff like like like i don't know what react forget looks like but like it's from our perspective who are very focused on the mechanics it's a it's superficial
[05:02:32]  syntax thing for the most part but from their perspective going the opposite direction looking at a language and then figuring out how the best implement it they have to do the work to figure
[05:02:44]  out how to implement it and in a sense like we already have a way to implement it we just like you know what i mean like i this is this yeah i don
[05:02:52] 't know i guess we'll see i think alexis did make his own react forget i'm i'm and when i said someone making three days i meant alexis
[05:03:03]  like nine out of ten in any case like this is not a dis of react at all or their their model in fact like if if you look at this like there's
[05:03:24]  nothing negative that's said about what like reacts working towards i actually think this is probably interesting i i'm still not sure if people will will like go for this model but
[05:03:38]  this is this is something we could model if we wanted to right that that's an interesting question i just i just want the the the back talk about reactivity to just go
[05:03:49]  away like from the from the react side of things i don't diss the v dom that's fine it's fine i mean i i think this just is a suggestion
[05:04:32]  of like how widespread i think angular picking up signals has created this kind of um like you know narrative which it's just unnecessary i i like i don't even know how
[05:04:47]  to put it i actually like when to a certain degree when we don't converge because then it's like i know that really smart people are working on on really hard problems
[05:04:59]  and maybe like finding really good you know solutions in new spaces um it's just like over time you know as i said you start with the old react and go to hooks you
[05:05:12]  go to this compiler which like svelte is a perfect example of this right because like i sometimes say that's felt and react are very similar and people still call s
[05:05:19] velte reactivity because it's easier to describe the the language that way um it's just hard to keep the the age-old biases perspectives when like things are conver
[05:05:36] ging at such a rate and yeah i don't know i i guess this i guess this is this is what's happening like this is this is the future we're we're
[05:05:48]  building towards potentially a signal-based reality with a compiler to get better ergonomics that's that's i guess even the react team might be potentially agreeing with that so i
[05:06:02]  i think maybe there's silver lining like these discussions don't matter anymore if you kind of just step back and go to that light it's like 10 years later reactivity came
[05:06:14]  back i don't know that's pretty cool yeah and i think i think that's fair i think we should talk about trade-offs a lot more than we do
[05:06:43]  it's just it man it's so interesting because you watch this thing happen in tech over and over and over again like i remember when react came on the scene like not initially
[05:07:01]  initially but once it started picking up once like the it started rolling and it was the same thing i i remember there because like i think that was part of what like triggered me
[05:07:10]  a bit on the conversation at a certain point where i was like okay i should respond but i shouldn't was that like that is there was reactive systems that existed before react
[05:07:21]  that were doing fine and this is the exact narrative that pushing there that came that came out and the result of it was like basically like the vdom had no downsides like
[05:07:34]  it was it was like the exact i love this thing you guys because this this is one of my was a dom versus vdom like what what were the memes of the
[05:07:43]  time you know uh you know that's that's probably that's probably what we should be looking for that that gives you the the true the true the true the true take of
[05:07:53]  things here we go oh man it's it's just the same propagation again things want backlash so hard against reactivity in the early 2010s i'm i'm not surprised
[05:08:07]  that like we're having that kind of backlash now the other way what are this on the trail signals yeah okay i mean the obvious one is that javascript is not
[05:08:22]  a reactive language you know so the biggest biggest trade-off here is that we can't we can lose reactivity really really really easily um if we're if we
[05:08:43] 're if we're not careful i mean the the most dangerous trade-off is that we can over subscribe and converge stuff that that's the biggest danger but like a framework like
[05:09:00]  solid is designed to make it very almost impossible to over subscribe in a dangerous way that was the problem with knockout that's why we have so many untracks but
[05:09:07]  the trade-off was because you could entangle everything solid was designed defensively read-write segregation all the stuff i learned from react right and and basically and untracked
[05:09:21]  components and all that stuff and in turn the flip side now is that it's easy to lose reactivity um because uh you know you might access like it reactivity is
[05:09:34]  all about where where it reads so you need to make sure that you use the data where you like where you use it like you have to read it where you you use it
[05:09:44]  you can't like access it early otherwise it doesn't track so um this can lead to traps that's why we don't destructure props or why um you know we
[05:09:57]  have to like wrap um why most reactive libraries have compiled templates because they like want to wrap expressions and they don't want end user having to like write functions everywhere basically anything
[05:10:10]  reactive needs to be preserved in a re in an ex in an expression essentially um so that that's probably the biggest um dx concern um for a performance angle uh it's interesting
[05:10:26]  i think historically stuff that was like kind of push base might over execute but it only over executed the stuff that in new changed i think with pull based systems that performance aspect
[05:10:38]  is not as big of a deal anymore because it both knows exactly what it has changed and you control when to do the work so i don't think that classic problem synchronization
[05:10:49]  all the stuff that made knockout awkward doesn't exist anymore because we have you know smarter algorithms around topological sorts um i know people to chat help me help me come up
[05:11:02]  with some more downsides like there's a difference between issues with signals and like say issues with solids specifically right answers like yeah i mean that's that's a cool way
[05:11:19]  of playing it right signals are cool if you can do any diff you want or do basically no diffing right at the granular level right just if it changes replace it i think
[05:11:30]  the other place that gets a little tricky is nested reactivity and i think proxies help a lot with this but generally speaking um because it's the read where
[05:11:41]  you use it scenario um and view took this approach all their unless you use a shallow ref all their signals turn into stores the the because again this is a language limitation there's
[05:11:55]  like you could just use plain objects if you have objects but if you have a primitive like a number of value you have to box it yourself so essentially because there's no
[05:12:04]  like proxy for a single variable um that's like why we have signals there's actually two modes of reactivity there's there's like the signal and then there's like the
[05:12:16]  store or ref and the reactive or the box observable and the observable and we've had this throughout time if there was one perfect reactive primitive then i think that would
[05:12:31]  make things a lot easier as well um and and i mean you could play with that idea you could like basically make um a signal interface that returned to store so if it's
[05:12:47]  a primitive it was just be the signal and then if if it's an object inside um that that is kind of like an overhead you know to like just opt everyone into
[05:12:58]  but if you do stuff smart enough and optimize enough i think you could probably make that the unifying model and then you know like i think that's the other kind of weakness
[05:13:10]  there um that we we probably need to consider um i don't know what are what are other downsides you have to think about this kind of stuff yeah the funny thing
[05:13:32]  is like as i was mentioning before is like we kind of almost want to think about this kind of stuff from a language standpoint like hooks make you think about this kind of
[05:13:49]  stuff um yeah i'm just checking up in here uh yeah my stuff will be on youtube yeah i don't know i i think that's the main stuff i mean
[05:14:23]  it might be interesting when you get into bigger systems like one of the problems that react has been having why they came up with the concurrent rendering part is that if they have lots
[05:14:32]  of distributed computations like the graph gets really big on the component tree um not being able to split up the work was really problematic because like they just have so much computational
[05:14:44]  stuff um from end user code all throughout the tree and then if people over rendered or weren't careful you like it would it could get very excessive and they they were like okay
[05:14:56]  if we can split up the work we can just mitigate that cost for people they just won't they won't like notice if their app gets slower because we won't be
[05:15:04]  blocking it um i'm it there could be a world with a exceptionally large reactive graph maybe like that but one of the things the reactivity kind of isolates it self isol
[05:15:15] ates it's like you have sub instead of being like the components which are like forced hierarchy key you can basically like have sub isolated pieces of the graph all over the place
[05:15:27]  to update independently like the the scale on size is fine um generally speaking classically uh like reactive libraries have been more expensive on creation especially like component creation because like they wrap stuff
[05:15:42]  in observers and that to get like a re-render model but like because solid doesn't really have components that isn't really yeah i don't know it's it's it
[05:15:49] 's tricky i think i feel like most of the trade-offs are like ergonomic things and it's tricky because if you fix the ergonomics you like you might break
[05:15:59]  the mental model for some people because it's like um if there's any if there's any exceptions to the rules it's hard to like explain what's going on but i
[05:16:10]  think we're moving into a world where it's going to be hard to explain what's going on which is just like you're like if you know that why why do
[05:16:20]  that i don't i don't know uh sorry just i don't know this this has been i think i i'm guilty of the same thing that i was talking about where
[05:16:40]  people getting you know too heated on twitter recently about innovation and stuff and we're getting into these silly debates i i was talking about the compiler one and the problem is the
[05:16:51]  compiler one i i took the stance of like like look i don't really care right i think you guys are everyone's just drawing their lines and it doesn't really matter i
[05:16:58]  am taking almost the same stance here but this one was enough for me to get pulled into you know deeper discussion and stuff so like yeah clearly clearly i am not immune to
[05:17:09]  this conversation and it's something i'm going to reflect on and think about um you know congrats to marco and the typescript yeah let's congrats marco one
[05:17:23]  more time on the on their on their typescript there we go yeah this is why this one was supposed to be at the end because i knew that we'd meander
[05:17:34]  off to this point because like let's face it like yeah i i think so i guess my only question is is like is this just going to be the state of twitter for
[05:17:49]  the next uh few weeks are we done i i get it the the signal stuff was just stupidly like hyped um i i mean i if and and it is getting positioned
[05:18:07]  as a us versus them like i i pulled a prime tweet earlier right about uh but like yeah if this is what i'm seeing and i'm on react i'm like
[05:18:23]  no this isn't true and i don't yeah the the this is this machine isn't you know isn't really helping it it's way more nuanced than that so like stream
[05:18:40]  for next week signals for haters yeah maybe that or talk about the 1.7 release solid 1.7 is nearing and this release is all about typescript like literally
[05:18:56]  there's some errors handling stuff but like the biggest part of that release is all about typescript i don't know if i have enough content to do a full stream off it
[05:19:04]  because i'm like but we've been making some big improvements to typescript for 1.7 um resources for signals yeah i mean they're they're scattered stuff i'm
[05:19:19]  um the crater mobx michael west straight is really good um for most people i send them to my my like learn signals two-part article which is uh where is
[05:19:34]  it it's funny um this one oh i miss gift subs i'm so terrible i'm so sorry oh thanks lynn phoenix um with for the five gift subs
[05:20:05]  um i i appreciate surprise um to channel and also that one bra thank you for the subscription it's five months wow you're probably like one of the long timers because
[05:20:20]  i think i only got affiliated about five months ago so oh wow all right anyway i dropped that in chat oh wait did it not go through did you guys see my link in
[05:20:38]  chat try this one more time twitch told me it didn't go through okay all right all right well whatever it's on the channel twice we'll live through it all right
[05:21:01]  um yeah yeah especially when we get to the router and stuff this stuff is a is a a little bit well more straightforward i i can't actually appreciate it completely enough to
[05:21:21]  probably talk about it too much but a lot of this had to do with being more restrictive with our types that give people better developer experience i haven't yeah i haven't reached
[05:21:30]  out to anyone about this but um yeah this is a good point we should we should talk about this again or in more detail because there's been a lot of work on
[05:21:41]  stuff like uh um imp um interaction to next paint and like we're like we're really trying i know that like they're really trying to find ways to like properly evaluate single
[05:21:54]  page apps versus multi-page apps and like the impact stuff and right now the metrics aren't always like the best to know what how things work after initial page load uh
[05:22:12]  yeah i mean svelte generally is compiled but its stores are like a very basic version of reactivity and that like they don't have the whole diamond graph stuff we talked
[05:22:29]  to the angular guys before they don't have the propagation they're just kind of like they are a simple signal like primitive but they're not like signals you know tm
[05:22:39]  so to speak yeah i i think i think the the whole effort and work here is amazing and i think it's actually really important for the future of stuff so we have better
[05:22:54]  things than silly benchmarks that we put together um benchmarks the first step but then we can actually like talk about the biggest problem is like after the fact page performance is is something
[05:23:04]  that's much harder to nail down um but yeah anyway uh where are we at all right um i think we're gonna be uh done for the day all right i'm gonna
[05:23:20]  eat some dinner you guys have a you guys have a great weekend hopefully next week we will talk um solid 1.7 it'll be ready to go out um but uh
[05:23:30]  yeah have a great weekend everyone catch you later