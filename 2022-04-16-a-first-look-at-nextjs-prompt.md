---
showLink: "https://www.youtube.com/watch?v=m-Gl_Cc8xOg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at Next.js"
description: ""
publishDate: "2022-04-16"
coverImage: "https://i.ytimg.com/vi/m-Gl_Cc8xOg/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, HH:MM:SS, which means the transcript is HH hours and MM minutes).
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

[00:00:00]  well it's that time again welcome to my stream i'm not sure oh man alexa stop it well tonight we're going to be uh talking a bit or looking at
[00:00:21]  next js um which is kind of exciting also a little bit um how should i put it a little bit nervous for me because um next is a framework a javascript
[00:00:32]  framework obviously meta framework on top of react that i've never really spent much time with and i mean there's reason for that i'm gonna get into it a bit later but
[00:00:43]  um it's always hard when you kind of approach something that you know people have been using for a very long time and it's kind of like the industry standard and you
[00:00:53]  know so little about it even though i probably have touched like most other frameworks around it so um yeah i guess we'll have to see how that goes yeah if you're here
[00:01:06]  come say hi in the chat i yeah happy friday i think it's actually good friday too that might affect some people's schedules but you know we're still here so
[00:01:15]  you know you know pour yourself a drink i got a ginger mojito tonight and um you know let's have some fun with it um but yeah i'm gonna give
[00:01:26]  people a couple more minutes to join in the chat i this week in javascript was a few more different things happened compared to the last couple so i'm actually kind of
[00:01:37]  excited about that portion that might have been actually um why i more than anything i wanted to do the stream this week just because there there were some uh good conversations to be
[00:01:46]  had um and different things going around that i think are important to mention um obviously uh the uh solid hackathon came to an end so there's like so many submissions more than
[00:02:00]  i have time to even go over there's like i think there's 51 52 53 i don't know somewhere around there but i'm super stoked about that but um a
[00:02:09]  lot of other stuff happened in the ecosystem this little this little while so yeah if you're here i see stream yard is telling me that you're here come say hi in the
[00:02:19]  chat all right give those uh people a couple just a minute more it's like seeing ego has said hi but it's like it's like eight eight uh ten hours ago
[00:02:42]  oh there we go hi thanks good it feels nice not to be up here alone even though i kind of inevitably am but thank you yeah there we go yeah let's let's
[00:02:56]  get this rolling a bit okay all right all right so um i guess without much further ado um let's get started with uh this week in javascript i'm gonna
[00:03:12]  flip over and uh as i mentioned a number of things happened this week um and for me this week actually started with um talking about web components i'm talking about web components
[00:03:29]  i mean why web components well there's been this ongoing sort of dialogue and i saw this tweet like every everyone has triggers on on social media i think and um you know like
[00:03:45]  some people when they see a react framework claim that they uh have partial hydration or something that that kind of drives some people nuts for me i was just like my man a
[00:03:59] lex what are you talking about like why it's pretty wild how many framework authors out there are basically admitting that they don't crack how html and the dom work
[00:04:13]  i mean obviously this is probably meant to be sensational or something but it's it's like of course they know how html and the dom work otherwise they could have written
[00:04:24]  the framework and what the the the the kind of subtone might be is they're not using html in the dom perhaps the way you would like and i i
[00:04:36]  just like framework authors is being used here almost like a dirty word and i was like what what what like are like is this a revamp of like everything should be vanilla js
[00:04:50]  you know and i it isn't i mean i looked further in the thread and i got the angle it's it's all about web components again and i don't know
[00:05:02]  i i had to ask a question i'm like why is the comparison between like web components versus frameworks or people use web components versus framework authors like you use a framework to author
[00:05:15]  a web component aren't they kind of ultimately the same thing you know they're just libraries some output web components some don't some do both like why position it that framework
[00:05:27]  and framework authors are different and i think i told you some things trigger different people well i another framework author i know happens to be pretty triggered by this and he he jumped he
[00:05:43]  jumped right in um my man rich harris here he's like it's it's they're not a different thing it's web component centric frameworks versus non-web
[00:05:54]  component center frameworks few people eventually few people advocate writing web phones without a framework right but it seems otherwise because web component thought leaders like to be writing on web component frameworks yeah
[00:06:08]  i mean that's what i'm seeing i just maybe i'm just like echo chambering here you know me and rich is perhaps could have been private conversation is now out in
[00:06:16]  the open but why what's the point of of of that separation why are we why are some framework authors not web component framework authors the funniest thing about this whole conversation is
[00:06:32]  svelte view solid we're all pretty good at making web components yeah i got some things from the chat here yeah hey devin hey david yeah i mean is
[00:06:49]  that is that what's going on i just i mean rich goes on and rich is you know this is largely uh like uh one of those trigger points because well forever authors have
[00:07:01]  by and large rejected the web component paradigm and we did a stream about this a few weeks ago even though rich says they've rejected it and he means from like a that
[00:07:11] 's the way you build stuff it's felt still outputs web components right like it's not like you can't author them it's just like we decided at some point that our
[00:07:22]  frameworks weren't going to become like our components weren't all going to become web components and as i said we've talked about that in length in the past um you know
[00:07:30]  and especially on the web component stream but it just it's just this ongoing thing and for me this is the beginning of my week is if you do kind of go into it
[00:07:43]  it just keeps on going you know there's a lot of you know a lot of conversation here you know about what's a library what's a framework and it goes pretty deep
[00:07:52]  about using the platform more controversial than anything i covered on the stream so if this is your cup of tea you know you know there's all different shades of like of like
[00:08:06]  uh you know where people fall on this hey theo react is pretty much web components but without the v3 it's pretty much reusable yeah i mean there is there is like
[00:08:24]  a i know because i try and interrupt the thing i web components do have this one benefit that they force the interface to be a dom element so like everyone can interact with them
[00:08:34]  whereas like it is a bit of a pain to kind of like weave react and view components together or whatever you know what i mean so yeah i mean it's not it's
[00:08:43]  it's not like i can't say that they cover the same ground my whole point is actually they don't cover the same ground like i think this this discussion kind of
[00:08:52]  was really good uh ken wheeler came in and he was like i never felt that without you know adjacent library support you you know you could actually author these anyways and um core
[00:09:03] y this guy who's a very big web component proponent was like yeah you know like different levels of things you know and i i think this is probably the most sound conversation
[00:09:15]  of course if you go the other route um and follow rich's conversation down it starts getting pretty deep and uh we get into accessibility conversations and stuff which is actually really quite
[00:09:29]  cool you hear from people from um salesforce like this just pulled in people from all over the place um uh talking about this again and yeah i mean i feel kind of
[00:09:44]  like yeah kind of elm like yeah i mean i'd have to search down the threads to see all this stuff but essentially this was the starting of my week um i
[00:09:58]  don't know hopefully i i the most interesting thing for me that came out of this was actually at one point in the thread and i'll probably have to sketch way down is
[00:10:06]  somebody on the on the on the web components side was basically like uh where is it no i went too far someone on the web component side was like within the next five years
[00:10:19]  all frames to be transpiled to native web components um and rich says and i the reason i said i just framed this one is because i don't see any evidence for
[00:10:33]  that personally if anything i see we'll see frameworks begin to explore the notion that component is purely an author time concept and uh i mean for me personally anyone who knows me this
[00:10:42]  was incredibly vindicating because that's basically the body of my work is that components are an author time concept um uh components pure overhead that whole thing so i i was super
[00:10:53]  stoked to see rich on the same page here and uh yeah it goes a little bit he's talking about how quick breaks components down marco does the same yeah okay we're
[00:11:04]  gonna take a pilers devon got in talking about area like yeah this this is a wide topic i think what what is clear to me is there are a lot of ideas
[00:11:15]  of how standards should go and a lot of different perspectives in in the mix here and at some point certain parties that decide not to be part of the process and or they
[00:11:27] 're going off on their own and there's like a real split like because like there isn't like cohesion and maybe there always has been that kind of friction but i remember
[00:11:38]  when web components first came out we kind of all believed and i'm including people like rich and you know and framework authors because we thought okay well this will simplify our jobs
[00:11:47]  in the future and we built our apis around it you know if you've seen like slots in svelte review you know web components if there's similarity there you you
[00:11:54]  better bet there is you know so yeah i i think i think i think i think things have kind of moved moved on a bit and it it's interesting to to kind
[00:12:05]  of see you know what what what like what that means um so anyways i've dwelled on this enough we can probably move on a bit um how's the performance of
[00:12:17]  web components these days can the hundreds on the page yeah i mean they're they're okay i've done a study um you can check out my articles um on this specifically
[00:12:26]  uh cost of ui components um revisited and yeah web components scale decently well pretty much as well as any non-vdom framework um but vdom framework scale with
[00:12:38]  more components better than web components um and like at a certain tipping point like a stupid amount um you'll see that uh like a vdom library like inferno will actually
[00:12:51]  be more performant at like creation or updates than web components even like the most oftenly written hand vanilla thing without a framework and yeah and solid as well obviously so yeah i
[00:13:07]  mean it's an interesting thing web components where they don't need to be where you don't need like the thing is when we build our uis these days components are
[00:13:14]  a convenience thing they're like a way of breaking up our code and modularizing what makes sense for us web components are a mechanical dom element when you make them the same thing
[00:13:23]  you're just bringing overhead that doesn't need to be there like web components are good as dom elements but if you're going to break up a bunch of stuff and introduce extra
[00:13:33]  dom elements it's overhead so like it's not hard to figure out how using the underlying vanilla js you know mechanisms versus using web components vanilla is going to be faster than
[00:13:44]  using web components because it's less than using web components and if a framework is sufficiently efficient at doing a vanilla things it's going to be more efficient than web components at a
[00:13:53]  certain scale like it's it just it's just math yeah yeah yeah no exactly enrich you like every everybody was really i think i think we've been at it a long
[00:14:07]  enough alex is probably going to keep on shoving it but i mean it's it's it's a tricky one alex is right about single page apps and the blow
[00:14:16]  to javascript and the whole thing it's just like there are other solutions and we'll probably talk a bit about them as we continue here it's it's yeah there
[00:14:25]  is a problem with the way we do stuff in single page apps and like you know react especially post a child for that but that isn't the whole story so let's
[00:14:35]  let's keep let's keep on going okay so they're they're also you know getting past web components yeah i mean to be fair um yeah they're good for isolation but
[00:14:50]  i mean there are places you want to use your same design system across different applications and they use different frameworks decent thing as long as the framework that authors the weapon was small
[00:15:02]  small enough good job you know it does good widgets like zendesk you ever get those little things like where they create an iframe and they kind of like do an
[00:15:10]  overlay on your on your page i think web components a great interface for that from a consumer standpoint you just like put an html on import a script put an ht
[00:15:16] ml element on your page instead of doing like these jquery style apis i think i think for those cases that i just mentioned they're great it's just not
[00:15:25]  a replacement for like a like a typical modern framework kind of uh thing anyway let's keep going so yeah uh now that we're past web components i want to talk about a
[00:15:40]  few releases this week that were exciting for me um one of them was um well quick docs um you guys know i've been covering quick on this on the stream a lot
[00:15:55]  quick is a new um newer uh javascript framework that's all based off you know really efficient hydration and i've been playing with it blind it's been challenging i've
[00:16:06]  hit you know i fall in all the little pits and stuff but the docs are up now and that makes life um a lot easier i was actually looking over them today i was
[00:16:14]  updating my hacker news example and stuff so yeah um this is great um it's been a little time coming and i think maybe you know give it another week or so to
[00:16:25]  settle but it might be a good time to start looking at quick pretty quick here see what i did um the other one that i want to talk about um is lex
[00:16:35] ical and i've been here about lexical for like a year now um for you for those of you who aren't aware um dominic ganaway truadium
[00:16:46]  was the creator of inferno and as anyone who watches my stream knows i'm a huge huge fan of inferno inferno was one of the big influences for solid early
[00:16:56]  on and don to my pleasure you know uh yeah i guess first time about a year ago dominic started kind of showing up in our discord and just being like you know hey
[00:17:06]  i like solid why don't you take a look at this he just kept on like sliding me little hints he'd be like you know you could optimize this you just just kind
[00:17:14]  of like just kind of you know you know just kind of just kind of come by and be like have you ever thought about doing this and i'd be like no i
[00:17:22]  actually haven't he's like yeah it might be worth looking at and just just these gentle nudges and at a certain point you're just like okay you you want to get
[00:17:31]  back in the framework game right like why don't you let's let's let's build something together and he's like no you know he's like the performance on that side
[00:17:41]  is kind of capped off it hasn't really changed in six or seven years and some people like what i don't know he's absolutely right the changes since inferno
[00:17:49]  that have happened on the gs you know kind of like performance vent for me have been so small solid might have got like another five or five to eight percent over inferno
[00:17:59]  or something but like that was five years ago i think solid's been where it is performance wise almost for five or that approach for almost five years like things haven't moved and
[00:18:10]  dom's like no no i'm not i'm not getting back in the framework game because i found something better he's like this a place that really needs performance and a
[00:18:18]  focus on accessibility and he's like text editing so he he's been he's been he's been telling us about this amazing text editor that he's been building inside of facebook
[00:18:30]  or meta now is it called and how it was like he took all he knew about performance and built custom reconciler that was special purpose for for text and built something
[00:18:41]  that was completely based on accessibility accessibility was like his primary concern and that this was going to be amazing like two to three times faster than what you've seen in a text editor
[00:18:51]  before and this week it went open source so no other people get to try it out i mean i'm i'm so stoked for him because as i said he's he
[00:19:00] 's every time he comes in comes in he's he's there to kind of help on the solid side and everyone's just like come on come come do some stuff and he
[00:19:07] 's like no this this is this is this is this is why i'm doing it this this is this is the reason so the seed you know what do you say last 18
[00:19:15]  months yeah but a year and a half he's been putting all his effort into you know you know sometime after he left the react core team to building this amazing text editor
[00:19:24]  um so yeah i have to say like this is not an area that i'm terribly familiar with but i know people are excited about this right um they released it right away it
[00:19:36]  says 26 stars but i think they're at 5 000 stars like it's been like i don't know what when did he post this april 13th two days they
[00:19:45]  there are 5 000 stars on github so people care about that i mean let's see what's the running number where are we at right now five point yeah 5100
[00:19:55]  like see if i can actually go this way and see lexical because you only get the true count if you go this way 5077 so yeah he posted about an hour
[00:20:08]  ago they hit 5000 so they're probably up 70 in the last hour um yeah i mean this is this is this is hot hot stuff and as i said i don't
[00:20:17]  know too much all i know is they launched with react support obviously but guys on the solid uh team got early access to it and we have this i think we have the second
[00:20:30]  integration so actually i've got lexical solid right here um it's it's it's still not complete but like it's yeah i mean dom will talk about it
[00:20:45]  he he was very intentional of using um dom accessibility was like his whole reason of being so yeah i mean i don't know a ton personally about this as i said because um
[00:21:01]  this is just not an area that i'm an expert in but one thing was clear is that a lot of care and attention to approach was taken with this and he wanted
[00:21:10]  to basically in the same way inferno kind of completely changed how performance looked like in web frameworks he wanted to do that for text editors yeah so yeah i mean let's let
[00:21:21] 's see what we got here i mean it's as far as i can like okay plain text example and then there's an editor and this editor looks like something we built a
[00:21:31]  code sandbox is not finding our input so plain text editor so yeah i mean let's see what this code kind of looks like for a second just do a quick diversion here
[00:21:39]  but we've got like so the lexical exports a few things get selection root editor stayed and then we've got some plugins it looks like from lexical solid like
[00:21:49]  a history plugin tree view and then some placeholder and then i guess it's very react like you're just going to go lexical composer this is probably like our initial
[00:21:58]  config this is probably like our like context provider okay so we're just going to see if we're going to be able to do that and then we create a container put
[00:22:05]  in a plain text plugin put a change plugin history plugin and it just it just just composes like jsx and now when i'm let's see if we can blow this
[00:22:11]  up a little bit um when i'm typing in here we should see the preview like here is some text new line right and then oh look time travel can i see how
[00:22:30]  this works oh yeah okay so i can i can go forward and backwards in time on the editing i guess that's what the history plugin does anyways i don't know probably
[00:22:42]  lots of cool stuff actually did i go did i go far enough for it yeah probably a ton of cool stuff here that i'm not aware of but i just wanted to highlight
[00:22:49]  that lexical is out now and that there's already a solid integration alongside the react one so pretty cool stuff all right let's keep on going yeah what did
[00:23:12]  we get groundlink browser yeah i think this maybe we'll leave that for another stream i'm i don't want to put any pressure on the solid flexible i know that i
[00:23:33]  know there's a couple bugs still in there so i think you have to do all the as stuff yeah i think as i said i think the the he they there's
[00:23:44]  two design decisions here and accessibility was the biggest one and then the second design decision that they went with was he wanted to treat it almost like with a like not beat on but
[00:24:01]  like a modern declarative kind of mentality where the dom is a protectionist state he didn't just want to like store the state in the dom like a content editable
[00:24:08]  he wanted it to be a projection so basically the same kind of concepts he had with improving the vdom is kind of what he applied here like it is a reconciler
[00:24:16]  and but if you ever talk to dom about vdom and stuff he'll blow your mind because he doesn't view a vdom as a bunch of virtual like static nodes or
[00:24:25]  whatever like the typical thing for him a vdom is the holes it's not the static part it's the it's the gaps in the template so to speak and sorry i
[00:24:34] 'm kind of like reveal getting ahead of ourselves here and um sorry i'm on the wrong tab and essentially that is like makes a ton of sense for me coming from a
[00:24:46]  reactive perspective because in like reactivity we hoist all the static stuff and then we just update the holes but for him his view of vdom is the same so that's
[00:24:55]  why like when he saw solid he's like it's the different approach but like you know potatoes potatoes potatoes kind of thing which is not how most people view reactivity versus
[00:25:04]  the vdom for him it was kind of like yeah you memo here you create a reactive computation here you know same difference right so i i i yeah if you ever get a
[00:25:15]  chance i don't know if you will um if you want to really understand what it means for performance in the vdom he's like the one of the best people to
[00:25:24]  talk to um anyway so yeah those are the announcements quick docs and and that um i want i want to take a moment to talk a little bit about last stream here too um
[00:25:39]  before because uh some people saw it and someone made an elm version of our hacker news demo look in a nice elm green so now we have another uh framework to
[00:25:56]  add to the pack so to speak um it's got my compressing comments and everything so i'm pretty stoked about that i looked at the code elm is wild like you
[00:26:07]  i heard like you can't write an error in it so it's like a completely different authoring experience but yeah pretty cool stuff um there's also a few other comments
[00:26:18]  from from from people in response to the stream last week talking about the hacker news comparisons with astro um the quick guys are like we improved our server side rendering please do it
[00:26:28]  again i started working on it today i didn't have a chance otherwise i would have i would have brought it um you know we might look at performance a bit at the end
[00:26:35]  um the marco guys are like well you know ryan we have a feature called split components and i was like split components i've heard of those and it's funny
[00:26:45]  because we've been designing marco six so we don't need split components anymore but marco actually has a way that you can even split apart the components that are hydrat
[00:26:53] able like the few little ones and do even less work and i actually ran it through page speed earlier and marco got an 86 um which is pretty good for my books i
[00:27:05]  mean it's not you know 96 like we saw with astro but asked like in the astro example they were not doing hydration until after like like the timer stopped like
[00:27:15]  basically did everything took the measurement then did hydration this is 86 with blocking hydration so for you who saw the last stream you'll understand that um this is a very good number um
[00:27:30]  the highest blocking this is you know i think using split components might be like a little bit tricksy flow speak but this might give us start giving us an indicator of what
[00:27:42]  um the range that marco six will be even before we add stuff like lazy hydration um we might like the blocking normal hydration might actually already be able to get close you know
[00:27:53]  into maybe even to up to 90 or something so really kind of quite stoked with this for those of you don't know this is the meanest demo ever it's it
[00:28:00]  loads 1400 comments um we might come back to it with next later to see how it does but this this 86 is like very impressive i know most people are like oh where's
[00:28:10]  the hundreds this test single page apps usually can't get above 50 on this test so i'm very stoked about very stoked about that okay um yeah i'm not going to
[00:28:21]  run elm right now we can decide if you want to run it later this isn't about performance i'm just really stoked to see an album version of the demo yeah we
[00:28:35]  we we we'll save benching more till later when we're done with next i'll we'll bring elm in you know we'll actually know what no let's
[00:28:43]  do elm right now yeah let's do um right now why not just to kind of get a feel for it i mean what is it it's let's yeah it falls
[00:28:52]  in my pattern and then we just need to grab our hideous hideous 1400 comments from facebook example sometimes they throttle me and they actually don't send all 1400 comments someone earlier
[00:29:08]  was like i don't see a huge difference between remix and mark when i'm like what and i checked it and like oh it's only sending 100 comments so let's
[00:29:14]  let's just run this for a moment yeah i mean right now it's just measuring the full hydration time yeah here we go 28 okay yeah i think this makes sense largest
[00:29:37]  contentful paint interesting but first condemned made was fast it's oh interesting either they're streaming or they're doing client-side rendering so they're like running the client-side
[00:29:48]  shell because this is a fast contentful paint for this like if you look compared to the marco example pretty fast but marco's done at this point but on slow network
[00:29:58]  it's usually not they must be doing client-side fetching that actually explains everything because like let me see if i can do another one let's see if we do
[00:30:05]  let's do client-side rendered solid hacker https colon hacker news this one but i want to do csr i bet you it'll have similar characteristics to elm this
[00:30:29]  one's completely csr it's not even server rendered at all it's like what happens if you send a blank page and then try and do this so um oh that
[00:30:39] 's hilarious oh that's so hilarious you guys are gonna get a kick out of this according to lighthouse my client rendered version is faster than any of the server rendered um things on
[00:30:57]  mobile um probably because yeah that's that's hilarious like that's a way larger blocking time and all this stuff but because that first contentful paint is so fast it like
[00:31:11]  boosts the lighthouse score even though everything else is slower right there's no hydration here it's it's like it's it's it's a client rendered app this is just
[00:31:22]  the completely pure client side so i mean this just goes to show right don't don't server render don't use solid start um remix or svelte kit just client
[00:31:31]  render and you can get higher lighthouse cores honestly this is a lie but but this is actually very relevant to our stream tonight and why i never actually looked at next js in the
[00:31:47]  past because i was convinced that client-side solid was just so much much faster than next js um in the early days but we'll talk more about that later but yeah
[00:31:58]  there there you go like clients client-side it's funny so yeah actually i mean solid might be one of the fastest client-side rendering frameworks but yeah i mean this is
[00:32:10]  amusing isn't it uh anyways yeah so i'm just getting distracted by this i just think it's actually a little bit funny to be honest that that um this score from
[00:32:27]  client-side solid is higher than most of the frameworks we tested last week um with the pure like send a blank page thing so i guess here you go jamstack
[00:32:37]  still lives sorry sorry remix uh okay this i i'm being a little fishy it's just like that's not actually the case it's just funny if you there there is a
[00:32:48]  range in which client-side rendering is can be better uh performance we already actually saw this actually that we're uh solid client-side apps are generally faster than remix ss
[00:32:58]  are not faster generally have higher lighthouse scores and than react ssr frameworks um but this this this this even on this stupidly expensive demo this is the case kind of
[00:33:10]  cracks me up a little bit okay let's keep on going um all right good times then i kind of wax poetic about marco i know no one probably cares on the stream
[00:33:27]  or you already seen the marco stream every time i try and like think of the perfect solve for the perfect reactive language i just keep on coming back and going man why
[00:33:35]  is marco so perfect and everyone hates it so probably not for everyone i actually think that the dislikeness and tax people are actually gonna get over in in the in the
[00:33:45]  near future you know to a certain degree but uh yeah this is just me just going on and on about how beautiful marco is probably not very interesting but i've got
[00:33:55]  yeah yeah i mean this is a good point right i i think that actually makes a difference so like when you have like kind of poorly architected back ends and big data like
[00:34:08]  there you go i mean that's the funniest thing about benchmarks right like there's always like circumstantial stuff going on and the answer always isn't like isn't always
[00:34:23]  clear one it's just it's just it's just it's it's it's kind of funny that if your stuff is bad enough in a certain way like client-side
[00:34:31]  rendering could be better like there's a crossing point like maybe this is a bit of the philosophy we'll again we'll talk about next a bit and see where it goes
[00:34:42]  yeah yeah yeah honestly the yeah i will you know it is but the last thing i want to talk about was um yeah yeah always ben that's the whole thing virtualized lists
[00:35:03]  like this is such a stupid example the only reason i like it is because and but you can still like we'd be good enough with a virtualized list it is a
[00:35:14]  tiny bit hard to virtualize a recursively nested structure like i played with that a lot i used to people don't know i used to work for a private social media
[00:35:23]  and we did a lot of image grids so it's not quite the same but we did a lot of different layouts and did like calculations and did different types of um
[00:35:29]  grids and different kind of layouts that were virtualized and that was one of my favorite things to do i'd always like come up with like different ways to do like highlight
[00:35:40]  images and like do all this kind of these kind of layouts um in javascript and have them all calculated and be smooth and be unloading and be super performant i
[00:35:48]  used to like sit there sometimes and just like especially on the mobile apps just like sit there and just scroll as fast as i could just to be like proud of my work
[00:35:58]  and um yeah i mean to be fair like if you have a bunch of collapsible nested recursive comments it's a little bit harder but like yeah you would never load
[00:36:08]  all 1400 comments it's just it's just dumb yeah i mean exactly like the fact that it's a recursive thing i i absolutely loved uh then like taking astro
[00:36:23]  one of the things that i wanted to do is to do is to do with vanilla js not too hard but it's like with a declarative framework it's like do you
[00:36:32]  have partial hydration yes no like there's there's not much there's not other ways to get out of that yeah and what will this is kind of the thing and why
[00:36:44]  i i i we're going to talk about this for a second because i made this chart because i've been i've been building charts recently i've been trying to like fix
[00:36:54]  the adi ezmone like chart and i i'm having a hard time i'll show you guys at some point but like there's so many dimensions to this and at
[00:37:02]  a certain point i'm just like let's just lay it out there on the partial hydration side or the progressive and just i'm going to categorize this in three ways
[00:37:11]  and i'm going to give you an idea of where all the frameworks thing and and the important part is the note that i say here is actually very important there is some nuance
[00:37:19]  here like progressive plus resumable i.e quick does a pretty decent impression of partial and partial plus resumable kind of means you don't need that much to be
[00:37:29]  progressive talking about marco six and then further and coarse grain maybe 90 of all the benefit so i don't know 90 times 90 is what like you know what i mean
[00:37:39]  like maybe it's 80 when you put it you know both things being coarse grain together but like my my point is like if this is 80 and this is missing some holes and
[00:37:51]  stuff like these are especially if you focus on the latter three here these are very interesting slightly different takes and i actually love it because what this chart shows is actually astro
[00:38:01]  is the first person like the first framework sorry to put progressive and partial together and like quick and marco are obviously working very optimally on resumable and that's why
[00:38:10]  they're all fine-grained but it's really interesting like as someone who works on marco i actually look a lot at astro because then it gives me like insight
[00:38:18]  i go okay how does that like how does the game change when you have both right so astro is almost like the first for us to kind of see that and i
[00:38:27]  mean if you go further back marco 2 was the first um back in 2015 yeah marco had uh partial hydration back in 2015 like declarative like modern partial hydration back in
[00:38:39]  2015. um we actually did a little research to do this because we looked back to marco one and marco one back in 2014 had out of order streaming um that
[00:38:48] 's that new feature that just came out of react 18. um but um marco 2 and i think it was widgets version 4 introduced uh declarative partial hydration apis um
[00:39:03]  and yeah so this yeah almost from the beginning marco has had streaming and partial hydration which is pretty crazy stuff but i just want to kind of show that it's funny because
[00:39:12]  the reason i made the split and the reason that i didn't put partial under quick is that there is a mechanical difference here um and that is that these frameworks all of
[00:39:28]  them except quick actually follow a set of rules and that rules at the top of the page is server only and and while you can put as many server components inside server components
[00:39:43]  and be get server components and go all the way down once you hit something client side that staple you can't put any more server things in it unless they're passed in as
[00:39:56]  children i and then the client doesn't try the client doesn't pass any like props like render props to it in that case like transclusion through children kind of like the
[00:40:05]  shadow dom rules sorry it's a little untechnical technically you can have server embedded in children which is a recursive trick that i did on last stream but generally speaking you
[00:40:15]  have to keep the chain of command from all the server components and this this is true for marco react server components astro even marco 6 even though marco 6 breaks
[00:40:24]  things down to sub component level um which allows us to like mix and match stuff together in the same template it's just because components don't exist there once you hit something
[00:40:34]  stateful like a branch it has to be stateful so just just to kind of put in perspective and what because it has that knowledge it can know exactly what data is used
[00:40:43]  which means that it doesn't need to double serialize in a lot of cases it knows that the stuff's only used on the server um quick has another solution for that where
[00:40:50]  you can just like literally mark it as don't serialize but to be clear quick doesn't know what only runs on the server client it's just like the perfect lazy
[00:40:59]  loading system so to speak like it it loads just as much javascript as you need but it doesn't know ahead of time where the rest of these actually know at build
[00:41:08]  time what can be on the server or client and to be fair this sounds like maybe uh something that's like less advantage like less of an advantage for quick and some situations
[00:41:19]  it can be but generally speaking this is highly beneficial the more static your pages the more dynamic your pages you might have to pull in all that javascript anyways and at that
[00:41:29]  point you do want to be able to do something progressive because no amount even though partial hydration is the absolute um optimization like you know 100 this is server it's never coming
[00:41:43]  the rest of it you know and we often call that the last 20 you know on the marco side um if that 20 suddenly gets to be you know 500 kilobytes
[00:41:53]  a megabyte then you know you're going to need to progressively load it still um i haven't witnessed an app that large even at ebay because our stuff's mostly static
[00:42:05]  we do see the like 80 20 rule there even with marco 2 and marco 6 will probably even be better but i'm pretty sure quick coming from someone from google
[00:42:14]  like he's seen those nightmare apps somewhere they probably haunt his dreams mr goes probably like just pictures them and he's like oh my god even getting rid of 80 the j
[00:42:24] avascript isn't enough these apps are like they'd be hundreds of megabytes if they had their way um so yeah i trust at a certain scale there is a need and
[00:42:36]  but that's also why i didn't mark it as partial for people to understand what's what's going on chat what am i giving you for what are we giving theo
[00:42:55]  credit for uh getting me and fred together probably maybe um what's waking up with stream i'm i'm not falling for this oren i know where you're going
[00:43:12]  react has something called selective hydration i don't feel like arguing definitions to be fair um oh getting me into charts yeah yeah yeah yeah no i i especially this kind of chart
[00:43:27]  i've always been a fan of the the the two dimensional like the the axes axes chart um even from my magic gathering days i used to like think of stuff like that way
[00:43:39]  and that but but yeah i i tables and stuff has not been my thing and diagrams exactly yeah yeah hey dylan yeah i i i i'm not quite sure what
[00:44:11]  the scenario is here i think that the thing is any declarative framework is gonna like either there's kind of a tension here for this question because any declarative framework wants to
[00:44:22]  own the knowledge of the state and they don't want to read the dom for it because if you read the dom it's slow right and generally speaking frameworks that are close
[00:44:34]  to the dom they get rid of a v dom they can operate without actually messing with other dom nodes so like you can bring in outside stuff and have it like not mess up
[00:44:42]  because you're not trying to diff it all but generally speaking still if it's within its frame of things that thinks it controls things can go wrong generally you want the framework to
[00:44:51]  know like if you've ever implemented drag and drop in a declarative framework you'll know this it's really quite awkward like because in the jquery days you just like
[00:44:59]  pick up the element or whatever and you just drop it and then you'd be like okay that's the new location i'm good but if you've done drag and drop
[00:45:05]  in a declarative framework you actually have to take it drop it put it back in the place and then tell the framework to move it which seems kind of crazy to people but
[00:45:14]  the framework needs to know because otherwise the framework would have to actually be reading from the dom and that is like a big performance no-no right like the secret to solid's
[00:45:25]  performance largely is that it's not even really uh aware that it's side effects of the dom like it's just like oh yeah crit effect you know and and just degree
[00:45:35]  i mean reacts kind of like that too if you actually like ignore react on like react doesn't even know how to handle dom elements if you try to like pass a dom element
[00:45:42]  to do it and like can you insert this reacts like i have no clue what this is um sold's a little different because at least it like it deals in dom elements but
[00:45:51]  all that stuff is kind of side effects so excuse me um there is potential there for it to not kind of muddle with each other if you do it in a certain
[00:46:03]  way but generally speaking reconciling against dom is like a really bad idea for performance so like yeah i mean i don't know many frameworks that actually support that yeah yeah
[00:46:23]  i mean that's that's a way of doing it i'm just like most people when they pick up dnd they kind of end up being like oh can i uh can
[00:46:29]  i like use like that common like library there's like there's like a vanilla js library that has like all the functionality like can i just wrap this and the answer is uh
[00:46:38]  i forget what it's called the answer is like yes but not really it sucks like all they wouldn't need to do is add one little hook to it and every declarative
[00:46:47]  framework would just have a billion easier to time but if i i've looked at it every implementation they have to do some like crazy thing to work around it yeah i know
[00:46:54]  this is one of the challenges with quick i'm gonna try and work with it quick some of the decisions quick has made um are really bad for performance not for hydration but like
[00:47:06]  after the it's it's it's gonna be it's gonna be challenging i think there's ways to get around it but it's like like like like yeah this is
[00:47:16]  one of the things like it's like especially like having dom on the server for example that's also really challenging for a performance standpoint i'm like one of those like almost like
[00:47:26]  maybe too much of a zealot on the performance side but like this is this is going to be one of those challenges because as quick wants better performance it's going to
[00:47:35]  come kind of head to head with these kind of decisions um anyway all right so um this chart makes sense to people hopefully it makes sense to some people i mean i actually
[00:47:57]  had some fun this week because there is definitely a group of frameworks coming up together and um i got a chance to kind of sit down with the makers of all of them
[00:48:07]  at the same time this week for the first time and it was like awesome to like be like hey you're working on this i'm working on this and uh you can kind
[00:48:15]  of see um that and this chart kind of facilitated the conversation because i talked to everybody and i was like you know and people like uh i don't know if it's
[00:48:24]  fair you put it there i'm like okay we'll have a discussion about this after i just want to kind of like help people in the simplest way this is oversim
[00:48:31] plifying it as i kind of talk on the nuanced side um right and yeah i i think i i i had i just you know we we kind of started the conversation there
[00:48:45]  and now we've all kind of gone together and we started talking stuff and steve um from builder was like kind of you know we've been all trying to talk about how
[00:48:52]  we can deal with the hydration because our whole idea is we want to do less of it or even none of it in the case of you know marco six and quick
[00:49:00]  and you know this this is what i'm talking about i've been really you know pushing all three it's awesome to see the guys on quick on the same page like we
[00:49:08] 're talking about kind of a new breed a framework and a new breed and um it's awesome to kind of see this kind of camaraderie i don't know if
[00:49:18]  it'll last forever let's say but we're working on the same problems this is a hard problem and we're at the end of the day the framework authors are just engineers
[00:49:27]  trying to solve really hard problems over the course of years so having you know connecting with these guys has been really great and steve put this out today and i thought this
[00:49:37]  is you know this is this is this is a fun one this is i mean this is actually quick and the react app here is actually next js um i honestly this even seems
[00:49:51]  extreme from my perspective because the first contentful page but yeah i i'm just i more wanted to just put this out here because i wanted to just talk about you know
[00:50:02]  there is something going on here there is a new kind of movement and i think the players are kind of you know starting to come together starting to understand what's going on better
[00:50:17]  and i'm i've been super stoked to kind of see this happen in front of me um so yeah uh yeah it's completely awesome um yeah yeah yeah no and um
[00:50:35]  log rocket has been good too both both fs jam and log rocket have been like my tooth i mean i shouldn't pick favorites but i didn't say it so anyway
[00:50:52]  this is this week in javascript i think let's let's kind of move on let's i mean it's been going for 50 minutes um let's kind of change
[00:50:59]  the topic around and i'm going to make myself a really quick banner here and start talking about next um and i realize this is like a terrible segue here because i'm
[00:51:17]  just showing quick just demolishing next to the benchmark but that's not why we're here see the thing is um let's get that off the screen actually um next js
[00:51:31]  is largely the first time ssr became truly accessible for to developers from a javascript framework standpoint i i know there was other things and i can pull up some demos
[00:51:47]  from 2014-15 you know some stuff uh you know i showed already on stream or influence this thing but like next made it a household name and with that kind of legacy
[00:51:58]  and that kind of cloud like obviously you know things just keep on moving forward from that time and it's not like next is going to be left in the dust next truthfully
[00:52:08]  is working on some of the most innovative stuff in the space when you consider the work into react server components streaming edge functions um next is on incredible tangent but me personally my own
[00:52:19]  journey i haven't actually had a chance to look at next very much and that's because as i mentioned before um i didn't believe in server rendering at the beginning and
[00:52:34]  it's not surprising i showed you guys all that michael jackson quote where he in 2016 he was like oh no one needs server rendering anymore and all that like there
[00:52:41]  there was there like i i was getting really good performance out of salt in the client i was winning every benchmark that i went in and people you know would come up with their
[00:52:53]  server rendered frameworks and like put them in and solid was just like smaller and faster than them all and just like what is the point um and yeah it went on and the
[00:53:05]  thing that i learned from that was like with good architecture for data fetching like nested routing and parallelized fetching you know i've been doing that you know most of
[00:53:16]  five years here with solid like maybe you didn't need it even even for first paint even for you know you know initial page load like it was just it was actually you
[00:53:28]  know putting up pretty good numbers obviously as you can see from here those numbers are not amazing like 3.4 for large contentful paint on a slower device i mean don
[00:53:40] 't so don't look at i'm sorry is much is half a second worse than than this this marco score for example or yeah and this this is even the best score
[00:53:51]  we can see here this is a stupidly large page but like what i'm getting at is not everyone has a fast network and that does make a huge difference on on
[00:54:03]  um on performance and i kind of came to realize that much later and that ssr was actually quite beneficial but by that point it was maybe 2018 and i have to admit
[00:54:21]  i was already like using suspense on the server or not not suspense but i was already into suspense and stuff like that so i started like when i started working on on stuff
[00:54:30]  with solid i was like okay we want suspense on the server you know and within a year or so you know i saw marco and i was like we want streaming and i
[00:54:38]  kind of went fully down nested routing suspense on the server and streaming and we got the first version out i think in 2020 early 2020 ish um and i've been
[00:54:53]  kind of been there and what i was looking at i i looked at things like svelte kit i looked at things like remix you know as they came out like there were
[00:55:02]  things that were doing a lot of the same stuff i was doing and that's where my interest was if people think that i've been like ragging on stuff you know you
[00:55:09]  know there's only a 50 on this benchmark whatever i have an incredible respect for those projects i think the technology in them is great i want to show people the difference between
[00:55:17]  you know different hydration techniques and stuff but i think like you know you know picking up remix to build a react app is a very good choice and svelte kit is amazing
[00:55:28]  and and you know these are projects that are like pushing the envelope of single page apps and whatnot so i never i never got back around to next because it just wasn't
[00:55:39]  i like it just wasn't where i was at you know i i'd spent those first couple years going i don't get it like why would anyone bother using next when you
[00:55:48]  know client sides way faster and then by the time i got there next wasn't like and it's not fault they weren't using like the nested routing or suspense on the
[00:55:57]  server or streaming or any of that stuff and i just never had the chance so today is that chance let's you know look at next um for real um and part of
[00:56:11]  that is going to be looking at classic next because new next i was reading the docs i was trying to figure it out and i don't think it's quite there yet
[00:56:20]  which is fine and maybe you know if i had someone brilliant at next who's super familiar you know in in the chat who could help me i mean cough theo cough but like
[00:56:34]  no i i mean i'm not gonna go there today i just i i think for me in the future when next gets there we'll we'll we'll we'll we'll
[00:56:36]  do another stream and we'll see what that's like but right now i just want to i want to feel and learn what next is about why it grows to become the
[00:56:38]  meta framework and um you know even if some of those things might be a little different than what i'm accustomed to i think i think it's really interesting to kind of
[00:57:02]  understand how these things came to come to be because every time i look and do stuff in a framework everyone's like oh you do this feature in excess i'm like i didn
[00:57:10] 't even know that was a thing and that's because because like uh you know next has sort of pioneered this space more from like a meta framework standpoint like what they
[00:57:22]  should like the the features you'd find if you want to expand the scope like i'm a core framework author so i'm very mechanical on like oh streaming and and all this
[00:57:31]  stuff suspense right that's not the thing the end developer walks away with right i might be like oh you you know blah blah cutting edge technique but that's the end developer
[00:57:42]  at the end of the day just wants to make their app and that's why i think it's important to just give myself a little bit of perspective here and look at next
[00:57:55]  and so today will be it's not the first time i'm going to install next i i installed next once um back in november 2021 next 12 came out and they made
[00:58:08]  a streaming rsc demo and i was like oh my god they have edge workers and streaming for versell so i i took down a demo immediately and they're like okay you
[00:58:19]  need to use next so i so i literally went like install next or whatever like and then i just put a solid app in it and then had solid streaming from their middle
[00:58:29] ware function and did it immediately i never touched next never touched for cell before because similarly i i just it wasn't in my scope i i i've been kind of hot on
[00:58:40]  cloudflare from when like 2019 we wanted to use it for image processing and my old work and i've been you know it's been like three years now i've always
[00:58:48]  been about cloudflare and the worker's side of things and then like over time i kind of got a bit more acquainted with netlify but versatile was something i
[00:58:56]  never touched so i got to give them credit there i'd never touched it and within like four hours i'd basically managed to sneak in a full streaming solid demo at on verse
[00:59:08] ll edge so they make stuff that's easy to use so i am reasonably confident we can do something good here because it's clear that versell and next really think about
[00:59:19]  their user and capabilities there enough that i could kind of hack around it like and get a solid demo working so i guess the first question we got to ask ourselves is what's
[00:59:38]  the best way to get started with next i started reading through the docs and i got some ideas for the hacker news demo but i'm like i was like do i use
[00:59:44]  the cli or do i just go into versell and just make a new next project and that might be actually the easiest one right yeah i mean i think i mean they
[00:59:55]  didn't call meta frameworks originally i guess but next and then when blitz built on top of next and and whatnot like that's when the term meta framework sort of came into
[01:00:08]  thing like next is basically the start of that but yeah i i've got here i've been navigating between pages okay about next creating your credit create your first app that sounds
[01:00:21]  like a good thing okay yeah i don't even know anything about this do i cli or do i just go into versell because i know versell has templates
[01:00:45]  i i mean i'm i might benchmark um yeah because i'm just trying to think here the other thing i can like this seems like something probably really easy for me to do
[01:01:00]  right because i can just kind of go not import i want to clone a template right like is this is this a reasonable way to start with next js oh create next app
[01:01:12]  too is everyone saying cli in the chat is that is that is that is that the thing only reason i wanted to come in here might have been because like what's this
[01:01:25]  what's this thing over here um um but yeah see yeah okay if you guys are all going to just say cli i guess we'll do cli okay what what
[01:01:40]  what is create next step by the way just out of curiosity is it like create react app i'm just going to open a new window here wait no theo has something what
[01:02:12]  is this oh you can't like paste it um um i could open discord very briefly if you and i can open it off screen and i could very briefly you could you
[01:02:36]  could send it to me if not on this screen all right if you'd like theo you can send me something i'm gathering that's what you're talking about all right
[01:02:57]  okay what do i do with this link okay i'm going to copy it oh we recommend here we go we recommend using create next app okay so i can copy it
[01:03:32]  so i can copy it one nice all right oh there's a y yeah okay okay well i'm just going to assume that it's good advice all right all right so
[01:03:50]  it contains malware uh thanks you guys are awesome uh let's proceed i'm gonna i'm gonna quit discord for now so back to chat all right what do i want to call
[01:04:05]  it next hacker news well i build it to deploys different cell very easily i'm gathering it well all right and to help us for our port i have the remix app
[01:04:26]  so i know most people a lot of people you know remix is newer so they port their uh next app to remix we'll be porting a remix app to next see
[01:04:36]  how that goes all right yeah i forgot what it was like to install packages for a react based thing it's also good that i have yarn installed i think i installed it
[01:05:02]  today to debug some stuff for uh when it's working on quick okay so while this is going through its many cli pieces okay perfect it's done okay so starts development runs
[01:05:19]  building building typing cd next hacking okay perfect okay what i am actually going to do is i'm going to open a new window and we're going to open it and
[01:05:27]  we're going to open it up there so development examples next acronyms and we can get put solid away okay cool is there more here or is this just the the thing
[01:05:46]  very filled by theomark very simple very helpful thank you all right all right and we can get out of here and we can get going all right oh the other
[01:06:10]  section is important oh okay i mean it was info dot tips right like okay let's get there when we get there okay so yarn dev So what, yeah, I mean
[01:06:38] , it's funny for most of you, you're probably be like, oh, yeah, this is just whatever. It's just next. I'm just like, I
[01:06:43] 've never seen this before. My only next project literally was not even a next project. All right. Start by our pages index deploy examples. Okay. And this will link
[01:06:58]  me to actual next stuff. Okay. It makes sense. Okay, cool. Okay. So what do we got? Let's blow this up a bit. So we
[01:07:09]  have a pages directory with API in it. Nice. We probably won't need that for our example today, because we're just making hacker news. We have an underscore app
[01:07:21] , which I'm gathering is something that doesn't get reflected because it's an underscore. It seems like others have copied their conventions. And then what's more than that?
[01:07:32]  This is like the entry point. And next, for some reason, knows it's the entry point. Once I don't notice, thank you. Okay, so
[01:07:49]  I guess underscore app TSX is special. And we have favicon, SVG, styles, global CSS. Okay. Home module CSS, yeah, which I won't
[01:08:01]  care about. Okay. So should I, I can probably just start gutting stuff then, and we should be able to get going pretty quick here. So I think
[01:08:17]  I'm, I think I'll just kind of copy paste the remix CSS styles in here and get rid of this. What's home dot module? Is this something special?
[01:08:26]  It's probably imported somewhere. Yes, it is. Okay. Makes sense. Yeah, thank you. I knew the chat would be helpful here. Because I mean,
[01:08:40]  this is probably less useful content for you all because you've seen this before. But hopefully this part of the of the of this will be the quickest. So essentially, we
[01:08:51]  have a remix app. It has a global CSS. It has a global CSS. I copy the global CSS across. I'm just going to, I'm just going
[01:09:03]  to, we're just going to go at it right away. I'm going to format this. And I think for this one. Next, next is going to be
[01:09:16]  black, I think. I think, I think next color should be black. What do you guys think? No, that's not the right one. This is the right
[01:09:24]  one. I'm going to make, I'm going to make next black. Oh, yeah, watching me figure it out will be fun. I mean, I think
[01:09:46]  it's pretty intuitive. And I think what might be lucky for me is that probably everyone has copied this. Now, there is some interesting stuff. Okay, so this is
[01:09:56]  a top of, I don't need a source folder. So I'm, I'm going to make like a utilities folder. I'm going to actually, I'm
[01:10:02]  going to just copy it over here. I'm going to make my API folder, but it's not like, it's not next API route. It's actually just,
[01:10:08]  how should I put it? It's, it's just a, it's just a, the file that has all this stuff. So I'm hoping that I can just
[01:10:18]  bring it over here, paste it. And then we'll, we'll kind of use this. Oh, interesting. I forgot that I use this version of it.
[01:10:31]  Oh, right. This is one thing where I actually won't, I, I shouldn't actually copy remix for this one, unfortunately, because they do some weird thing where
[01:10:41]  they pass fetch in. I think, is that what I had to do? Whatever. I, I, I, this is probably fine. I, let's,
[01:10:54]  let's, let's copy remix and go as far as we can. Okay. Okay. So the other thing, the one thing I couldn't do nicely with remix
[01:11:05]  was actually the, the route page. So this is, let's, let's do this piecewise so we don't make terrible mistakes. mistakes, but what
[01:11:20]  I'm going to do is I'm going to copy this, I'm gathering next is going to have a link thing similar to, to stuff. So what I want
[01:11:35]  to do actually is I want to make a, I'm going to delete this API route. I mean, I'm not going to need this and I'm going to
[01:11:43]  make a new file that is 23stories.tsx. It's going to export the function that is going to be, I'm just going to call stories.
[01:12:00]  And this is all going to be different. So we're just going to initialize like const page equals one, const type equals top, and I'm missing one.
[01:12:27]  const stories equals empty. Okay. Yeah. I'm actually, I think I will need the document. Won't I? Okay. Let's see what else we need.
[01:12:40]  Like, how do I make a base layout? Is it in that's used by all of them? Is that what I do an app? Yeah. Let me see
[01:12:58]  here and index. Do we have links? We don't have links in here. Okay. Well, we'll, we'll, we'll get there. Let's,
[01:13:05]  let's not worry too much about this. Hopefully it doesn't, yeah, it doesn't die yet. So how the first thing I want to do is actually make the
[01:13:14]  nav bar before I get ahead of myself. I'm going to make a components folder and I'm going to copy this because these should be the same, presumably. So
[01:13:25]  this part, not in pages, this part should be the same. But I want to, what I want to do is I want to recreate remix has a entry client
[01:13:39]  or entry server. No, that's not what I want. It has a root and in the root, I can do this kind of garbage. So I don't even
[01:13:50]  care about all this garbage, to be fair. What I actually just want is this. I just want to stick my nav component. So does app, is app used
[01:14:03]  by everyone? Like, could I just make this a fragment? And then essentially. I don't know enough about how this routing works. Like, could I just put nav
[01:14:24]  here? Yeah, I just, I just want to put a nav bar on every, on every page. Import. And what am I importing? Nav from dot,
[01:14:43]  dot slash. Components slash nav. Resolve remix. Good job. Yeah, okay. So we need our link component. We need our link component. How do
[01:15:02]  we use routing in this framework? Navigate between pages. You use a link. That makes sense. Next link. All right. Oh, it's more like
[01:15:21]  solid. Is it? What's the link? Does it take an href? Yeah. All right. That's a logical attribute. Because guess what? Links have h
[01:15:33] refs. Okay. Okay. We have some styling woes happening here, but at least built with remix. Where are we? Built with next. And we need
[01:15:57]  a link for next. What is, what's next? Is this next? Maybe this was on me. Next.js.org. Next.js.org. Next
[01:16:05] .js. Interesting. I wonder why the spacing is different. This is the first time I've built this where the spacing is actually different. But I wonder if it
[01:16:26] 's, hmm, that is interesting. Brian's in for a nasty surprise. What? What? What? Why would, okay. Okay. Let me, let me
[01:16:45]  look at the doc so I understand why you would ever do that. Okay. Link. What? Okay. Okay. No. Any explanation? Okay. Sure. I
[01:17:09] 'll play along. I'll play along. Okay. These all look the same. This is going to make things a little bit more fun. end of the line,
[01:17:29]  like, like a Mac, like a Windows user learning Mac keyboard shortcuts. Just like trying to save myself from like doing this a billion times. You know what? Screw it
[01:17:40] . We'll just do this. All right. All right. Well, that probably explains my spacing problem. Okay. Sweet. Hacker news. Okay. Cool.
[01:18:02]  Okay. Let's keep going. Talk to the next, baby. Yeah. It's like you guys all know and you're just like, what will he find?
[01:18:14]  Okay. Well, I'm okay with that. I'm okay with that. Let's, let's really rip the bandaid off and remove, delete index. Okay.
[01:18:30]  So what do we need? Next link. Oh, okay. Well, I mean, I guess that's a good argument for not having, I put the class on
[01:18:58]  the anchor, don't I? Right. Is, is, is that the secret here? Like I have to go through and find all the link tags and then put the
[01:19:09]  anchor here and then put the class on, on the anchor instead of on the link. Right. So like class page link go here, I think. And then this
[01:19:27]  becomes href. So there is some refactoring to be done. That's fine. This isn't, this isn't, this isn't the worst. I
[01:19:37] 've, I've, I've refactored this thing like a billion different ways. So let's just do that. Yeah. Yeah. I'm getting the hang
[01:19:48]  of this. It's okay. All right. And it wants story and story. We have to import. It's getting a point about remix again. This is all
[01:20:19] , this is all good though. This nothing, I mean, there's nothing, there's some weird stuff going on, but, oh, we should bring our types over
[01:20:27]  too. We should just copy our remix project, um, our types are here. Let's just copy that. And then paste, paste. There we go.
[01:20:54]  All right. Then that makes stuff happier. Should make stuff happier. Dot, dot, dot. Type. Did I put it inside the folder by accident? Oh,
[01:21:17]  it's here. All right. All good. Okay. So just a couple more links to fix. Okay. these all become each drafts. And yeah, I
[01:21:48]  don't think I get a cheap way of doing this. What's the chance? This is actually, no. Okay. Okay. I'm just doing stupid stuff.
[01:22:13]  Sorry. I'll just do it. I was like trying to get too smart. I'll just, I'll just, I'll just, I'll just do this the
[01:22:19] , the, the painfully slow way. I can pop that. Sorry. Not the most enthralling part of, of, of this. If I'd known
[01:22:35] , I probably would have done this ahead of time. I had no clue that they would make me put anchors inside the link tags. Oh, man. That's,
[01:22:45]  that's good times. Okay. So I guess the first question is why my route, did I do this right? Shouldn't dot, dot, dot match on slash
[01:22:59] . Oh, interesting. Dot, dot, dot doesn't match on slash. So this is just like remix. That's weird though. Svelte kit and solid
[01:23:15]  both have the dot, dot, dot pattern and they match on slash. Can someone confirm this for me? Do you guys know if this is actually true? It,
[01:23:25]  I mean, it looks that way. So maybe, maybe, maybe, maybe, maybe this is the thing. Is there, is there any way to like, just match
[01:23:33]  overall? Otherwise, this is mostly doing what I want it to do. The, the next thing we actually have to do is load some data. So, um,
[01:23:47]  maybe I'll just start on new so we can see it and then. Yeah. The thing is I need to match on anything, including nothing, um, is the thing
[01:24:09] . It's because like without the dot, dot, dot, it'll match on like, I, this is the behavior that I'd expect for without the triple dots
[01:24:17] . Oh, do they not have the dot, dot, dot matching pattern? I thought everyone got that from next. Do they see this? Okay. Um, let's
[01:24:26] , let's, let's look at file-based routing. Dynamic routes. Catch all. Yeah, yeah, yeah, this one. Interesting. But it won't
[01:24:46]  match on post. I'm, I'm, I'm, I'm, I'm, I'm basically trying to match on pages slash, like, like, like
[01:25:00] , basically everything, like a catch all for, okay. Okay. Double. Interesting. I, I wonder. Gathering more specific routes will win. But, but
[01:25:22]  okay, double. Okay. Good. Beautiful. Thanks, Theo. Sorry. The wrong one. This one. Yes. Thanks. Theo. Also. Thanks. Theo.
[01:25:40]  All right. All right. Um, okay, cool. All right. So then we're like mostly set up here and then we just need to load the data.
[01:25:49]  So how hard can that be compared to remix? This is actually a weird thing. I was looking at the next docs and I was reading them. They kept on like
[01:26:00]  suggesting, oh, you should use get static props. And I'm like, okay, that's not going to fail me. Or you should client fetch. And there's
[01:26:05]  a get server props, but it's almost like they don't recommend it. But like the get server props mechanism is basically the loader mechanism. I mean, it's
[01:26:15]  less granular. It's not nested, but like for, for our simple purposes, it seems like the right thing to do. Um, cause essentially, yeah,
[01:26:24]  I mean, let's, let's see what's up with that. Okay. So let's try. Yeah. How do we, how do we, let's learn
[01:26:33]  about get server props. I am like a little bit familiar because people keep on telling me, you know, when I'm like, like, why don't you suspense or
[01:26:39]  stuff? But like, like pre-rendering and data fetching, um, pre-rendering, server side rendering. I don't want static props. I want
[01:26:48] , I want. I'm in learn basics. Let's go docs. Okay. Um, get server side props, server side props. Okay. Okay. And it
[01:27:14]  will handle it too. So this is like a loader and remix. I mean, I could fetch client side, but I, I don't, we don't
[01:27:34]  want that for initial load. And since this handles the isomorphic thing, I think it sounds right. So essentially I just want to go like this. You guys
[01:27:46]  can tell me if I'm like terribly wrong, but this looks like what I want. Right. I don't know. I don't know what context is, but
[01:27:56]  I guess we'll find out. Types. No help. No types. I guess the docs won't have type script in them. Okay. That's fine. We
[01:28:11]  will, we'll figure it out the way I usually figure things out. Okay. Beautiful. Now, if I refresh the page, do I get, okay, here
[01:28:41]  we go. A lot of stuff. Okay. Oh, it's because we had the, we had the request and response objects. Interesting. But there must be an
[01:28:52]  easier approach to this. Docs must tell me, right? Yeah, here we go. Do I need node fetch or do they have their own thing? No,
[01:29:15]  but they, they don't actually tell me what the, how to get the route params here. Okay. It's linked, but I got to read more.
[01:29:34]  here we go. Here we go. Oh, beautiful. It's, I think I just need params. Okay, cool. So, what I want to do in
[01:29:41]  here, essentially, is params and possibly query. Yeah, params and query. I think, I think, let's see. Let's console log it first
[01:29:59]  to make sure. Let's go to, oh, it's because I, well, I guess let's just start with params. Let's go to params
[01:30:18] . Beautiful. Okay. It's object stories. Oh, interesting. Query also has it in there. Huh. Okay. Well, let's not worry about that too
[01:30:35]  much. Now let's go, let's look to fetch something. Let's do using our remix example. We want to fetch this. So, we, let's
[01:30:52]  just, we don't need URL. Let's get, we need page and type and stories. So, let's just grab that. All right. So, this
[01:31:05]  is context.prams and then we're going to import fetch API from, yeah. And then need our stories map, which I'll just put in here and get some
[01:31:28]  TypeScript in here. I'll just import everything. Story types. And page is, yeah, I need to see what the query looks like. We're just going
[01:31:52]  to make it page one for now and not worry about that. And then map stories, type is key of map stories, really. Whatever. Not going to worry about
[01:32:08]  that. And then we're going to return page type stories. And, yeah, what's stories data. And, yeah, what's stories data? God, I
[01:32:40]  never use React. I mean, this is probably the worst thing I could do, but whatever. Okay. Now, in theory, yeah, we got stuff loading.
[01:32:57]  Okay, cool. Yeah, yeah, okay. Yeah, fetch if you have node 18. The question is, is this going to blow up the second I try and
[01:33:12]  deploy it to the cell? Okay, so data is loading. Go to the next page. It doesn't load. But now we should be able to inspect and see
[01:33:25]  what we get. Oh, interesting. Yeah, so this is really convenient. It's literally query dot page. So, actually, I guess there is some logic there
[01:33:39] . Query dot page or one, essentially. We should cast it on text dot query dot page. And if I did that all right, we should have loading stories
[01:34:16] . Okay, so far, so good. Okay, so this is next. This, I mean, okay, sorry. I heard some people, like, talking about
[01:34:27]  how, like, Remix, like, completely changed the game or something on little data loaders, but, like, kind of the same thing. I mean, the
[01:34:37]  nested stuff is really nice, but that wasn't too bad. Maybe there's another secret thing. Maybe I have to wrap this in an anchor tag or something.
[01:34:46]  But so far, so good. Okay, so that's our first page. That's the most important page, actually. Okay, so let's continue. It actually only
[01:34:57]  gets easier from here. So I'm pretty happy with this. What time are we at? Okay, so it's been, like, an hour and a half. Yeah
[01:35:05] , I imagine the next 15 minutes we can finish up the rest of this demo. Then it's all going to be fun trying to deploy to Vercel, but
[01:35:11]  this is good. Okay, so let's fill out the rest of this. Navworks, Storyworks, comment needs to use next-link. And we're going
[01:35:29]  to do some more of our fun. Is there any more of these? No. All right. No, that's not right. Link in the wrong place. This
[01:36:00]  whole anchor thing is just so bizarre. It's not, like, it's not, like, a bad thing. It's just, like, it's just a
[01:36:16]  thing. All right. Yeah, so this logic is otherwise unchanged, and then we just need to add a couple more pages. We need to add stories, and we need
[01:36:27]  to add users. And then now that I know what the pattern is, now that I know what the pattern is, I feel like it is closer to Remix than
[01:36:42]  I was thinking. Like, we could probably just kind of, like, drop in some of the Remix stuff and just, like, move this up to there. Yeah
[01:36:51] , yeah, okay. I see a pattern. Let's do users first. All right. So, essentially, yeah, okay. So, I guess I got
[01:37:13]  to do dot dot. Dot dot. Perfect. Don't need any of this stuff from Remix. Don't need any of this stuff from Remix. Export. Actually
[01:37:29] , what is it called? Export. Get server side props. Yeah, and if you notice, I'm just ignoring TypeScript. I leave that for someone better than
[01:37:44]  me to wrestle with. But I think this is actually just really simple. I think we just, like, go, like, no. Just go, like, return context
[01:37:55]  dot Remix that return props user. I guess there's other stuff in here. So, it's, like, kind of, like, a middleware thing.
[01:38:07]  It's, like, props a little bit extra. But who cares? And then user until I am not a React programmer. Beautiful. Or any. Yeah, you
[01:38:32]  know. TypeScript isn't there to get in your way, right? Except for when it is. I was on a project earlier where, like, TypeScript was required
[01:38:45] . It wasn't just, like, a suggestion. And it was definitely taxing me a little bit. There we go. New file ID. Yeah. So,
[01:38:56]  yeah, I mean, going back and forth between these meta frameworks seems, like, trivial, really. Like, let's do this one. It's, like, two
[01:39:08] , two. Convention here. Convention there. Remove a few imports. Add a few imports. Export. Export. Like, not proper React coding, but they're
[01:39:53]  not going to hold it against me, right? There's a link in here. This is easy peasy. Yeah. This is good. What have we got?
[01:40:23]  Import link from next link. All right. We spent a stream. I think it was a Remix stream. We're sitting here, like, why does this not
[01:40:42]  work? And we spent, like, 20 minutes trying to fix this type. I'm so past it. Okay. Okay. So, then we go here. We click
[01:40:50]  on a user. We see the user page. Not much to it. We click on a story. We get the stories. Oh, yeah. I saw this, actually
[01:40:59] . This is something that I only have in the React demos. Let's fix this right now. I don't know why there's this extra zero. I think it
[01:41:08] 's always on the last comment. Let's see where that is. It's such a weird thing. Where is that zero coming from? It's at the end of
[01:41:35]  it. Div text by text zero. Oh. It's... Yeah, yeah, yeah, yeah, yeah. It's because of this. Undefined. Beautiful
[01:42:01] . Okay. Lovely. Okay. Next hacker news. I'm kind of, like, scared about what else is going on here. But I think we're good.
[01:42:13]  What do I need to do to deploy this to Vercel? I guess is the next question, eh? I can't tell if you're being serious or not
[01:42:26] . No, I know you're not. Okay. Well, I mean, we have a working next hacker news. So, now, that was pretty easy. I'll
[01:42:39]  commit the repo later. But let's see what Vercel says about. Unless this is why I wasn't supposed to shut down info.tips. No,
[01:42:50]  that wasn't right. I'm going to have to open up Discord again just to get the link again. Init. Man. Okay. Init.tips. Okay
[01:43:22] . There we go. Was there something more that I missed? Okay. Okay. So, no deploy tips. Okay. It's all good. It's all good
[01:43:52] . Init.tips. Okay. That's all good. Info.tips. Fun times. Okay. What do I want to do? I want to look
[01:44:02]  at... I'm going to kill Discord. That's what I want to do. Yeah. Okay. Yeah, yeah. Of course. Right. I'm just being
[01:44:18]  dumb. It's just like deploying to Vercel with anything. Okay. There you go. Like, I'm, like, overthinking. I'm, like,
[01:44:25]  thinking, oh, this is the next project. But they're going to handle everything in the pipeline. Right? Yes. Sounds good. No existing project. Next hacker
[01:44:44]  news. Yeah. Code is located in root, I guess. Next build sounds good. Yeah. These sound good. No, do I want to override the settings?
[01:45:04]  No. Okay. Yeah. Yeah. Yeah. It's funny. I've used this, like, a bunch of times with Solid, and I'm just, like,
[01:45:14]  not. Like, I'm just, like, in, like, a... Yeah. It's fine. I built the Vercel Solid Start integration. Right? I
[01:45:25] 've used these commands a bunch of times. Okay. Okay. It says to check my logs. But, like, I can also just run this locally and see why
[01:45:49]  it's angry. Is a TypeScript actually going to come and haunt me here? This is what I'm talking about. Yeah. I imagine I could. Unless
[01:46:07] , like, it's so funny. This works, like, in some things, but it doesn't seem to work on this one. Type as key of map story
[01:46:17] . In NextConfig. Okay. Let's just tell it to be quiet. It's easier. Ooh, React strict mode. Does it only do that in dev
[01:46:37] , right? Like, so it doesn't, like, run everything twice in production? Ignore build errors true. Okay. That sounds good. Oh, it's Type
[01:46:47] Script. Okay. Only TypeScript build errors. Okay. See, there you go. This, no one else complained about this. This is, here's Next protecting
[01:47:17]  us. That's, that's, that's, that's, that's awesome. So, in our nav, we have something considered legacy here. Using target blank
[01:47:31]  without, no rel security brids. Okay. So, where is that? I thought it was here. Where else do we have target blank in our project? Target.
[01:47:53]  There we go. There we go. Making a better website. Thank you, Next. Oh, 76.7 kilobytes. It's only 15 kilobytes
[01:48:21]  larger than Remax. That's not as big as I thought. I assumed we'd be in, like, something bigger. So, yeah, that's great.
[01:48:26]  Okay. Let's, let's, let's do it. Thank you, everyone who's here. You're very helpful, obviously. Sorry, what did you do
[01:48:58]  three times this week? All right. All right. Preview. Is it for sell dash dash prod or something? If I wanted to actually, like, do it
[01:49:28]  for real? Or preview fine? Oh, yeah, it is dash dash prod. Okay. Well, let's just move it around. It works, works, works
[01:49:41] , works, works, works, works, works. New, new show. Yeah. I mean, looks, looks nice. This is a hacker news page. Okay.
[01:49:50]  Yeah. Let's, let's, let's do a prod. Not that I think it actually makes any difference here. Let's, but, you know, let
[01:49:55] 's just, let's just put a prod and take a look at our newest hacker news demo to join the family. That was painless. I mean, weird, but
[01:50:11] , but painless. So, yeah, I honestly, though, if, if I didn't have you all in chat and I was trying to figure out what was
[01:50:22]  going on with the anchors versus the links, I would have never figured that out. I would have like, I guess I would have looked at the docs and been like
[01:50:28] , okay, there's anchors here, but I would like, that would have never crossed my mind as a pattern. Yeah. And, and to be fair,
[01:50:41]  like, yeah, I mean, they're all kind of the same, like, here's another one, right? Like, in a sense, yeah, I mean,
[01:50:52]  this is solid. It's similar to Remix as well. Yeah. I mean, yeah, they're, they're, they're all kind of. Okay, cool
[01:51:05] . Hacker news. Next hacker news. It's all of, I got my own awesome URL here. Okay. So, what we're going to do is we
[01:51:16] 're going to open it in an incognito window and just kind of take a look around. I did not stack the house this time. Oh, damn it. Sorry
[01:51:33] . But I guess that means Remix has it too. There's a, there's, there's, there's one transition animation that seems to still be here.
[01:51:41]  Yes, this is on Cloudflare. You see that animation? Yeah, it's fine. So we got next, we got Remix. Okay. We have
[01:51:58]  others, but I'm not going to worry about those too much. I just want to kind of understand the difference between next and Remix. Cause I mean, these are
[01:52:03]  both react frameworks. Um, and I feel like we can kind of look at it and get a, get a feel for what the difference is between these react frameworks.
[01:52:17]  Okay. So, okay. So yeah. Initial page load, 75.5, 101. Yeah. Yeah. Yeah. Okay. So next is doing a bunch of
[01:52:27]  other interesting scripts, like middleware manifests. And I mean, most of these are inconsequential little things, but it looks like the main chunk is 46.
[01:52:41] 9. Like they split like a vendor bundle and then you're a chunk. So it's like 46.9 and 29.9. Remix kind of tries to keep
[01:52:50]  it most. Well, yeah. Mostly in one chunk. I guess this is the top level and this is the code split route to the 16.5. Um,
[01:52:58]  and in this one, it's probably the same sort of split, right? Where we have the page and the framework. So the framework or the entry is 46.9
[01:53:13] . Interesting. That makes sense. 41.9. So interesting, but why is the chunk so much different? The splits gotta be different, but it's, it
[01:53:29] 's interesting. Like how much different between, I guess more of the, there, there must be more stuff coming in specifically on the page. I mean, we can confirm
[01:53:40]  that by navigating to the next page actually and see what extra loads in because this didn't add very much. a 9.3 and then when I go here, we
[01:53:53]  see the data coming in, right? What's the fetch, but, huh? Interesting. JSON format. Oh, I guess I had 14 comments and 263 isn't
[01:54:08]  exactly fair comparison, but okay. Yeah. So JSON format, 2.8 kilobytes. 2.6. Yeah. Okay. I mean, interesting. Does
[01:54:19]  next not do code splitting? Neither did these. I guess they, oh, maybe these guys all, maybe these guys all aggressively preload stuff. Okay. Now the ID
[01:54:34]  chunk is right here. Maybe it's the route prefetching. I'm not saying that the second page is only 1.2 kilobytes in Remix,
[01:54:40]  right? Like the ID page. And then next, I don't see, I just don't see where the ID page gets loaded in. Huh. Yeah. Any
[01:55:05]  link gets prefetched. So I wonder if we got prefetched much earlier and I didn't, I didn't realize it. Yeah. It's right here.
[01:55:10]  Yeah. Yeah. Yeah. Yeah. That makes sense. It's, it's 945 bytes right here. Okay. So, yeah, I guess there's just
[01:55:19]  a lot more, like the components aren't that much different in size. I guess it's just like the, the way they shift the vendor bundles and stuff. Okay
[01:55:26] . Let's, let's give it a quick, let's give it a quick, a couple loads here. Let's, let's start main page. Okay. Yeah
[01:55:41] . I mean, I imagine this will be super fast. Yeah. 25 first contemplable first paint. It's pretty good. 228 LCP is going to be
[01:55:51]  the same and it hydrates. Okay. So this is pretty good. Just get an idea here. Let's just go back to the main page. Give it a quick
[01:56:00]  one over here. Should be the same kind of thing. Oh, do you know what it is? Yeah. I wish I had this on the same infrastructure. I'm
[01:56:12]  con I'm convinced. Cloudflare workers. This demo is, is what's killing, killing us a little bit. I think the API is in Vercel
[01:56:21]  and I think that the edge functions have this delay here, which doesn't, which does. Yeah. This is very interesting. I think this, I think, I
[01:56:32]  think this is a demo that is hurt by not being on Netlify. I need to, I need to re-examine this or Vercel for that
[01:56:40]  matter, because they both use AWS under the hood because we're getting, yeah, this, this, I think this is actually interesting that the workers have us, because we
[01:56:50] 're waiting for the data fetching and the data is farther away. So, and without streaming, so, and without streaming, there's no, there's no rec
[01:56:58] ourse, okay, well, let's, let's do something that will blow that out of the water because we don't actually care about it. So, let's
[01:57:05]  look at our timeline for our actual, like, mean, um, benchmark. Um, let's, let's, let's, let's just take a little look
[01:57:19]  at profile at the, this, when we do something like this mean, I, it's going to be less felt, I imagine, um. Okay. Let's do
[01:57:38]  this. Just kind of get an idea of the characteristics. I imagine it's going to be pretty similar. Um, yeah, first paint, 13, hydration costs here
[01:57:54]  aren't that bad. Actually, I'm, I'm kind of actually impressed. Hydration tasks with 52 milliseconds, but all in all, really good timeframe here. Let
[01:58:05] 's, let's add that to the end here. Yeah, 63. Yeah, I mean, it's nominal. Yeah, this is pretty comparable stuff, really.
[01:58:30]  Um, 1200, 13, 13, 13, 1330. Like, I don't know why the first paint took longer here, but it's, it's basically
[01:58:49]  in the same range. Yeah, well, okay, you guys want to see the lighthouse scores, okay, we can see lighthouse scores. I was, I was just
[01:58:56] , I was just warming it up, kind of understanding the timeline that none of them, if we look at the, what I want to do is I want to briefly look
[01:59:05]  here. Neither of them seem to be, for an example like this, too bottlenecked on, uh, resource loading, obviously, like they don't stream, so
[01:59:16]  they wait for the page, but like 9:38, like, I mean, it's, it's, it's, it's, it's like a second for
[01:59:21]  this example. So yeah, good, okay, so let's just, uh, dump these in into our, into our lighthouse. Um, we'll do, we
[01:59:28] 'll do remix first and then do next last is the big reveal, like, why not? Let's give me next first. I wonder if it's any better than last
[01:59:44]  time, it was about 50, right, for this terrible, terrible mean test, we should also probably test without the mean test. I wonder if, uh, 55
[01:59:53] , see, every day is a little different. Nice. And it's loading all the coms? Yeah, okay, so. And let's do. Next. Yeah
[02:00:09] . About 50. I mean, this is a dead, like, this, other than. Like, this, this, this is, this is just, this app is
[02:00:25]  very dead simple other than the fact that this page is just brutal. Yeah, it's, it's, it's in the same range. If we're looking here,
[02:00:41]  we're just, it's, it's, it's in the same range. I don't know why there's a gap here between first contentful and largest content
[02:00:58] ful, given that they're completely server rendered. And we noticed a little bit of that gap when we did the timelines. But, you know, it's, it
[02:01:05] 's, it is actually like, we run this enough times. We're going to get around the same score. See about just over a second blocking 15. 5.45
[02:01:15] . Yeah. I mean, the remix numbers look a little bit better, but let's, let's just run everything twice, you know, just to give it a go
[02:01:21] . But this is not that different. Right. I mean, obviously, this is a. Overloading a simplistic demo is the best way to put it. Right
[02:01:37] . Next time I do remix, I get our next, I get 47. So again, the same range. And when I do remix, I got 46. Let
[02:01:48] 's do it a third time. Like. There's obviously a range here, but it's a, it's, it's around 50. Kind of like, you know
[02:02:00] , what we saw last time, maybe the 55 was the good run. And we'd have to run it a bunch of times, but it essentially. They're,
[02:02:08]  they're pretty, pretty neck and neck here on a, on a, I think the thing is this example is really just testing. Yeah. Okay. That was a bad
[02:02:19]  run. Yeah. Remix might be like a hair more performing in this, like in this, in this case. But it's, it's, it's,
[02:02:30]  it's probably not something people would notice. I think this is just mean. So let's just, let's just do a mobile test on the top level page without all
[02:02:44]  the meanness. Just these should be scoring close to a hundred. They, they should be 98 and 98. Yeah. I mean, let's look. Remix
[02:03:00]  is taking longer here. I think, honestly, this is this, this demo, the API and the cloud flare is actually just not, they're not, they don't
[02:03:11]  play nicely together. Um, interactive 1.7, 1.6. So yeah, I don't know how the number is reporting. Cause it's interesting. It's
[02:03:22]  like, I don't, I doubt remixes hydration is like significantly faster. Um, on this, but it's just. Or actually. Yeah. What, what
[02:03:35] , there is something weird. I don't get it. We've noticed. Looking at this, there is something weird. Next is reporting a much later largest contentful paint
[02:03:45] . Cause I was like looking at this for a second, but like, why is there a difference when it literally is fully rendered thing? And we've noticed this the
[02:03:55]  whole time. Next largest contentful paint is after its first contentful paint. And I, I don't know why. Cause conceptually these numbers should be identical.
[02:04:09]  Like they are for remix. Like they are for Svelte kit. Um, when I turn off streaming on solid, they're, they're, they're identical.
[02:04:15]  But for some reason for next, there is a gap here. And this is a significant gap. Um, here, like, and I, maybe this is related to
[02:04:26]  Steve's demo. Steve was, Steve was sitting here and he was like, he was like, uh, you know, I showed the thing on Twitter and, and someone
[02:04:33] , someone, someone asked. They're like, I'll just pull it up one more time. Um, Steve from builder and you look at a hydration demo and you
[02:04:45] 're like, okay, well, um, where is it? Should be pretty recent. Six hours. Yeah. You look at a hydration demo and you, and you,
[02:04:57]  and you think to yourself, you're like, well, it's not rendering time. These are, these are static rendered pages. Like sure the going gray, but
[02:05:07]  look how much sooner quick appears compared to the react thing. These are static pages. There should be no delay on the visual, but this is next. I wonder if there
[02:05:20] 's something weird on the way that it, it doesn't make sense to me. Um, this is something for us to figure out at some point, but why there's
[02:05:29]  a lot, like, why is there a gap? Like in this case, like more than half a second gap between first contentful and largest. Contentful. I
[02:05:36]  mean, let's, let's look at those timelines again, just for a second. Like first largest. These are the same, right? They are the same. So
[02:05:48]  what's going on? I think it was more noticeable on. Yeah, no, that's, it doesn't make any sense. Oh, so you've witnessed this
[02:06:03]  before, huh? It must be the something in the way that Chrome calculates its stuff. I mean, okay, let's, let's, let's, let
[02:06:16] 's, let's, let's just, let's do the. Let's do the thing. Right. Uh, how did, sorry, I closed it down again.
[02:06:24]  How did you link the thing? How did, how did Steve do it? Let's do the visual measurement, um, tool thing. Uh, let's, let's
[02:06:34] , let's, let's put them side by side and see if there is actually something going on here. Cause he said, I'm not convinced, blah, blah
[02:06:44] , blah. Made by real. Web page test. I actually never use this. So I don't, I mean, I've used a site, but I've
[02:07:15]  never used the visual thing. Corel use. Okay. Well, let's, let's, let's, I don't completely trust these. So let's take
[02:07:34]  the next example and put it under webpage test and do. Something slow. And see what this does. Okay. See if, if this is just lighthouse. I usually
[02:08:07]  don't do this one because, uh, it takes a little longer, but, um, page speed isn't always the most. Accurate. Yeah. I mean
[02:08:34] , it's just curious to me. You know what I mean? Like why, why would this be any different? Give that a second while it's going. All
[02:08:51]  in all though. Yeah. I don't know. It's funny. I guess I was expecting something different, but next was very straightforward to use. And, um,
[02:08:59]  it doesn't seem, I mean, yes. I can imagine if the apps continue to scale up the way the, the, the app like initially does. Like I could
[02:09:13]  see this because like, but yeah, I mean, next loads for the same page was a hundred kilobytes and remix was like 70 kilobytes. Um,
[02:09:25]  and when you put that in scope of things, you know, spell kit, it's like 19 kilobytes. And the Astro we did last week was like five
[02:09:36]  kilobytes. It's, um, it, you know, there's a full range there, but I mean, what would matter more is scaling up more components
[02:09:44]  and more logic and whatnot. Okay. Okay. Yeah. Okay. So, okay. First contemptful paint long. It's the same. Yeah. Okay. So
[02:10:03] . Yeah. I, I, I think I, it was like. Yeah. I don't, I don't know. I, this, there must be something
[02:10:18]  weird on how. Lighthouse calculates stuff because this doesn't make any sense to me. Okay. Yeah. That's cool. Nothing too controversial here today. Other
[02:10:43]  than why is page speed, uh, doing this? Well, I guess that's a problem for another day. Easy stream. Two hours and 10 minutes. What do you
[02:10:58]  know? Um, yeah, yeah, yeah. Yeah. I mean, that's the, that's the thing, right? Like this is, this is what you
[02:11:24] 're highlighting here. It's, it's all simulated here. And if you were, if, if, if you all saw Michael Rawlings article from a few weeks
[02:11:34]  ago, um, the, the simulations have. They're not, they're, they're not perfect. Um, interesting thing is I think, um, Google does use
[02:11:47]  this for SEO. So there's like value to scoring high here, even if it isn't actually, um, accurate. Um, well, you know, I,
[02:12:01]  I did what I set out to do. So yeah, I don't, I don't, I don't know if there's anything spicy or anything else we really want
[02:12:08]  to take on with this one. This is, uh, kind of is, was really straightforward. I got to hand it to them. Um, and yeah, I mean
[02:12:21] , I, I, I haven't been there this whole time, you know, so I don't know if next was always like this, but it's, it
[02:12:28]  seems incredibly easy to create an app and deploy it. Not much else to say. Okay. Anyways. Yeah. I think I'm just going to call a stream tonight.
[02:12:40]  Um, and this went a little early, you know? So, uh, yeah, have a good night, everyone. Um, there's no other questions or anything
[02:12:52] . Just give me less people last couple of chance. But other than that, uh, yeah, have a great weekend and, uh, see everyone next week. Okay
[02:13:05] .