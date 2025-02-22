---
showLink: "https://www.youtube.com/watch?v=R5AcOtxIdMk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Reactivity & Rendering"
description: ""
publishDate: "2022-12-19"
coverImage: "https://i.ytimg.com/vi/R5AcOtxIdMk/maxresdefault.jpg"
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

[00:00:00]  all right hello everyone looks like we're live today um this was a sort of impromptu stream um just because of all the conversations that have been happening the last
[00:00:13]  few days on twitter and whatnot um i'm actually going to tell everyone twitter that we're live now because this is a very quick turnaround on a stream um i'm probably not
[00:00:22]  going to sit here and waste as much time preambling i'm not going to lie um there's other cool stuff going on later today that i want to check out um
[00:00:30]  so this was just the time window i was able to squeeze this in um so just posting that we're live all right so yeah hopefully everyone's getting past the twitch initial pre
[00:00:47] -roll so come say hi in the chat if you're around you know the drill yeah monday stream it felt like it like this conversation just keeps on going on and i
[00:00:59]  felt like i i spent it'd be quicker for me to do this stream than like respond to everyone on twitter there is so much confusion out there on the topic of react
[00:01:08] ivity right now like so much i i can't stress how much yeah um and for those who aren't familiar with my channel um i'm also available um it's ryan
[00:01:21]  solid on twitch so um i i know i post youtube on twitter and the likes but you can also watch on twitch you might get a slightly better chat experience although i have
[00:01:31]  to go manually check it from time to time um but just wanted to to let everyone know that this is available to chat and stream and watch on both platforms okay cool cool all
[00:01:46]  right so we got a lot to cover today so we probably should get started pretty quick here um did react did i did i miss something i didn't see ryan's
[00:02:00]  florence's thread on react hooks um i mean i don't know if it did indirectly but this actually wasn't it now you now you make me want to find this
[00:02:09]  tweet um let me present my screen first and we can get started here but no this there there were a few conversations that that did um trigger this um that wasn't one
[00:02:22]  of them directly um but i i do want to talk about um a few of these just to kind of get us context of what we're going to be discussing today not
[00:02:35]  sure if you're going to venture but why is jquery listed because jquery code is imperative the benchmark only tests uh declarative code it's kind of pointless like
[00:02:46]  you can always make vanilla js if you here's the thing every framework there's an escape hatch and you can escape back into vanilla js so it becomes kind of like uh
[00:02:55]  less meaningful is the best way i can put it if if you just go okay i'm just going to write the vanilla js anyways right um jquery isn't really a
[00:03:05]  framework it's not and by today's library standards you can just write vanilla at about the same level of effort so that's why you generally don't see jquery and
[00:03:12]  benchmarks all right cool cool all right yeah um let's let's see what's here oh hey hey david um so where is my sorry profile yeah just going to scroll
[00:03:28]  down here a minute because there was a couple conversations that um started this this one was probably the the one that was kind of um triggered this uh which was i'm convinced
[00:03:41]  that signals the programming pattern of the future front-end dev i tried solid gis yesterday for the first time and it literally solved every problem i felt with react now i'm
[00:03:48]  gonna try preact signals and so on and as i said this this kind of reaction is pretty common uh from where i've been sitting but i think this is where a lot
[00:03:56]  of the confusion comes in because we obviously a bunch of people kind of came out of the wood the uh woodwork you know frameworks going well reactivities and signals have existed
[00:04:05]  forever um or like you know people going like you know talking about other frameworks like quick that have signals and you know evan's quote is probably my favorite because i mean he
[00:04:19] 's he's dead on here and it actually ratios the original one but he's saying it's interesting react devs call signals the future since they've been around front-end
[00:04:27]  frameworks for quite a while in fact over a decade they were called observables and knockout and and then he mentions refs and view composition api and evan's
[00:04:34]  absolutely right and this is part of what i want to kind of clarify here because we've had these kind of fine-grained reactive primitives going back to maybe before knock
[00:04:44] out but that was my first introduction and we had them um continue to evolve as state library solutions for react and then we continued on now to see them kind of evolve into their
[00:04:58]  own frameworks again outside of react which is what was solid and now we're seeing them come in and influence the react sphere with kind of stuff that preacts doing so like
[00:05:07]  this is going to gone around in a few circles here which is why probably it's very hard to get a grasp on it there's a there's a bunch of comics where
[00:05:14]  people like oh you know what's the difference between preact signals and solid signals what's what's the difference in rxjs is this not just the observer pattern people bring
[00:05:22]  up action script three and you know they had something called signals and i think i think that's almost where i want to start today because um we we got to like kind
[00:05:33]  of map out what we want to talk about because there is a lot of topics here and a lot of places where um clarification could be quite valuable um what is the future
[00:05:44]  well it's it's funny this one got got that attention if i go back a couple months ago one of the uh core team members of angular basically said the same thing he
[00:05:55]  he said uh what did he say he said something along with that uh signals are the new v dom that like there's like this rush right now of people trying to you
[00:06:05]  know explore it and see its potential in the same way we saw back when the virtual dom first showed up in 2013 right react obviously brought it forward in 2013 but then in short
[00:06:16]  period of time we we had stuff like preact and inferno which kind of more on the react uh compat some call clone side of things but then like even if you consider
[00:06:26]  view 2 has a virtual dom underneath the hood um there's frameworks like mithril which are very minimal um lots of exploration in this uh tons of frameworks uh it was
[00:06:37]  an explosion of frameworks and the whole javascript fatigue came out of largely i think that explosion and at that time one door closed most of the reactive libraries kind of started like
[00:06:49]  closing shop stuff like knockout got less popular um can js uh things like even reactive kind of kind of took a back seat a bit and we had our new virtual dom
[00:07:02]  everything and now we're seeing like people exploring with this reactivity in a similar sort of way and that's where these comments are coming from but you know it does take it
[00:07:14]  does it it does take a bit of acknowledge that this has been with us this whole whole time so to speak uh i i called out a few of these libraries myself um
[00:07:23]  i was talking about um knockout and mob x big ones also sjs no one knows about sjs sjs is like the reason solid exists um and we might talk about
[00:07:34]  that a bit but then you know you can't not talk about views composition api um and preact signals and quick signals and angular's upcoming signals and um i think
[00:07:46]  i think there's a long history here which i've actually talked about previously on stream but i thought today we we'd actually kind of get a little bit more mechanical and actually
[00:07:59]  look at examples a bit more um to kind of understand what the impact of these decisions and the differences in these systems are um and so i apologize this this is pretty imp
[00:08:10] romptu i i actually didn't prepare anything but i feel comfortable enough in this topic that we can just you know just wing it so to speak so so i i i
[00:08:19]  think it is important um as i said to identify all these things and to keep that in our head it might be worth just getting to scaladra and like doing a
[00:08:27]  bit of mental map here because um yeah yeah and yeah we we can't talk about this without also talking about svelte as well right um because svelte is uh
[00:08:41]  how should i put it svelte is a compiled uh approach to reactivity which a little bit different than what i want to focus on today but yeah like there's
[00:08:51]  so many ways of classifications we can look at this but let's throw down a few concerns right now so that we can frame what we want to talk about a couple things
[00:09:02]  we want to talk about first of all is types of reactivity um i would leave that another thing we want to talk about probably is um uh like reactivity plus rendering
[00:09:21]  this is important when we talk about how they fit in frameworks uh and uh i think we also should talk about actually i i mean these are the these are the major ones
[00:09:39]  i'm trying to think is is there something else here because what we can do is we can subclass here because we can talk about um reactive we could talk about vdom
[00:09:48]  plus reactivity so we can talk about like uh like reactive state management and we could talk about reactive renderers right stuff like solid um and on types of reactivity we
[00:10:09]  can talk about kind of fine-grained is what i've dubbed this reactivity but fine-grained reactivity which is our our buddies um signals um i i have
[00:10:20]  my i have my own terms for these but you they're they're they're interchangeable we can talk about that we also might want to pause a bit and talk about
[00:10:32]  rxjs um and signals in angular yeah the angular community hasn't seen this yet sorry i might have leaked the beans i don't know and it's not for certain that
[00:10:46]  they go this way but they are very very interested in this potential right oh yeah uh there's one other type of reactivity we should talk about here um because it's
[00:10:58]  felt we should talk about compiled reactivity right so i call these reactive renderers but we should talk about um componentless and we should talk about what svelte does
[00:11:24]  a bit which is um compiled okay um this this this is a lot of stuff if if you've noticed but so like yeah we will hit the api differences as we
[00:11:46]  go through this um but just kind of laying out my thinking here um because i think i think that it's not i think the problem is you can you can attack this in
[00:12:01]  multiple ways because your entry point into this conversation reactivity is generally going to be different it's gonna be different for pretty much everyone and i it obviously has to start with
[00:12:15]  what is reactivity right and i that's why the types of reactivity here are probably important and we should start there right so let's let's talk a bit about
[00:12:29]  that because these reactive approaches um and yeah see if i can use a scaladraw to select a number of these and move them out of my way a little bit of course
[00:12:41]  it misses one yeah thank you scaladraw okay these types of reactivity here um actually kind of go back a little bit um it's funny i'm gonna start with
[00:12:56]  fine-grained and rxjs and we'll get to compile it afterwards because compiled actually isn't it's not necessarily a type of reactivity as much of a way
[00:13:09]  of interact with rendering it's it's almost like you're compiling away the reactivity the reactive system doesn't exist so that makes it a little bit different but i want
[00:13:16]  to talk about these two because both of these types of reactivity uh date back to the mid to late uh 2000s at microsoft at least from a front-end
[00:13:26]  uh perspective um for those who don't know um that rxjs um or rx extensions was something that was like popularized or built out at microsoft around i think
[00:13:40]  2007 2008 and similarly knockout js um steve sanderson created it i don't know if he was at microsoft when he created it but he was working for them
[00:13:51]  very soon afterwards if not both basically came out of the microsoft camp and that's where i got my introduction um but these are two very different systems but you often hear people
[00:14:02]  kind of talk about them interchangeably and the reason for that more than anything is that these early systems both call called their reactive atom observables right yeah yeah i didn't
[00:14:16]  know what i was going to do like moving it around thank you theo but not theo yeah yeah um yeah okay recoil and jotai yeah um they this that falls into v
[00:14:38] don plus reactivity and i think i think i'm going to use preact uh to demo this part um because it's it's much more illustrative but let's get
[00:14:46]  there so i know the first top part of the topic is probably something that some people are familiar with others aren't but i i very very brief high level um just because i
[00:14:56]  love i think mobx had some of the the best um initial um look at the reactivity thing they have this they have this like beautiful little image here um let's
[00:15:08]  see can i open image a new tab and it'll be larger yeah okay check this out when i talk about fine grain reactivity um we generally talk about this this cycle here
[00:15:20]  and this is something that um existed i said back in knockout days but generally speaking um mobx i feel like really standardized on what the communication was about these different pieces
[00:15:35]  and essentially mobx defined four areas but i'm going to say that the fourth area here the action well something that quintessential like something that happens always and it's part
[00:15:49]  of the equation it's not something that needs to be owned by the reactive system necessarily i mean there's discussion about that but what i'm getting at is you have three pieces
[00:15:58]  you have observable state you have these computed or derived values and then you have side effects things like rendering and this one two three pattern isn't limited to these fine-
[00:16:11] grained reactivity um in fact if you think about it um every framework has a version of this right like um that's why you can say this has been around in a
[00:16:23]  sense observable state uh i mean i mean like obviously in solid this is create signal create memo create effect but similar in react which is not reactive in the same sense that i
[00:16:33] 'm talking about is use state use memo use effect like they have these three core concepts um svelte let variables and then this is dollar sign where you declare a variable
[00:16:46]  and this is a dollar sign where you don't declare a variable um uh view this is refer reactive right and then this is computed and this is watch or watch effect or effect
[00:16:59]  i can't remember always with view um and what i'm getting at is there is this clear language here actually the thing that makes react actually a little bit special and react
[00:17:09]  hooks special in this conversation is that most libraries this is all they need they just need those three primitives react actually adds a whole second layer of hooks to describe the memoization
[00:17:20]  process because the way they re-render because most libraries that use reactivity don't need um anything else like i've got this example here where i'm you know this
[00:17:35]  typical solid counter but let's let's just like exit out for a second and forget about that let's just grab a signal let's grab an effect and we can go let
[00:17:45] 's i mean i can steal this count signal because i can but my point is you just get rid of the component you just create a signal you create an effect that i
[00:17:57]  don't know console logs signal which she calls a function in this case but there's different syntaxes and we can talk about that in a minute my point is you can just
[00:18:07]  sit there and go like let's set interval and set the count to count plus one or whatever actually i'm not going to use the function syntax because it's uh how
[00:18:20]  should i put it it's uh i think it's a count to count of course it's exploding right now because i didn't put a thing on it let's just okay
[00:18:33]  there we go my point is you see that it's counting here every second right and this doesn't take the thing with reactivity is this is independent of any component system
[00:18:44]  any kind of anything like this is the whole system yeah i don't have mods someone's pointing out did i just okay let's let's move on uh but what i'm
[00:19:05]  getting at it here is like reactivity is assist is a change system onto itself so like it doesn't matter what you want to do like the my point is like you
[00:19:14]  can just essentially define this language and it updates so because it's the thing that updates like as you can imagine with any real code if i go here and go hello at the
[00:19:28]  top here let's refresh it's going to console log hello once but it's never going to um console log again because why would the outside top level code ever rerun
[00:19:42]  again and i i just kind of point out that in a system with reactivity you don't need to like rerun components there it's not it's not a thing because
[00:19:51]  it's only the effects that we run or the reactive computations that we run and this is important because react hooks introduce a whole they have the the reactive language so to speak
[00:20:06]  like i talk about here but they introduce a second tier level of of um language around memoization like react.memo uh use ref use callback use event effect i
[00:20:22]  think i i don't know what it's called the new one but essentially they they add um essentially additional language to describe the fact that the the components are updating do i
[00:20:36]  have good resources yes um i have lots of articles on dev too right um and i should link them uh do i have dev there's specific ones right we need to pull
[00:21:00]  pull these out later but i think for those who are getting started uh what do i want to do i'll just duplicate this tab for those getting started um and i know this
[00:21:11]  might seem like i'm just self-promoting a bit but seriously this is probably the best introduction i can give you there's a two-part introduction article called hands-
[00:21:19] on introduction to fine-grained reactivity and building a reactive library from scratch i was tempted to build a reactive library from scratch here but essentially the thing to know is
[00:21:29]  this is not a compiler trick what the whole the whole system is based off the fact that you have like basically a global context and whenever you read a signal value you just check
[00:21:44]  at the top of the stack of the global context and if something is listening have it subscribe to that signal and then when you write it notify all the subscribers and because it
[00:21:55] 's because uh computations all you know like effects will run once you can always get the initial subscribers so this system just uses the runtime stack there's nothing too magical about
[00:22:05]  it um which it used to be considered magic but um these days you know seeing the magic that we've seen in other frameworks or like different tools you know around like even you
[00:22:18]  might be able to call hooks magic at this point this doesn't seem very magical you can do it in about 50 lines of code but what i'm what i'm getting
[00:22:26]  at here is that yeah people people talk about pub sub and the thing is my example that i wrote in that article is essentially pub sub but i want to point out that there
[00:22:39]  is a very very different aspect of this that makes it different than pub sub and that is the fact that like yeah this is still just counting away um let me show you
[00:22:49]  kind of quickly to the best of my knowledge uh or how quickly i can do this i'm going to use create memo here but essentially if if you derive from multiple sources so
[00:23:06]  let me pick something let's make uh let's make an a which is create memo which is this is kind of a derived value and it's going to be count times
[00:23:18]  two okay and const we're going to make b which is also derived here and it's going to be count plus one plus one or something okay so just two things what
[00:23:35] 's important to understand and is that if we console log a and b here and get our driver going there's no diamond problem it's called like the effect doesn't run
[00:24:00]  twice like because essentially like a and b um you know like a changes and b both change the effect knows only to run once there there is i can make more complicated examples here
[00:24:19]  but there's a topological sorting that goes on and this is something that mob x popularized the older frameworks like uh knockout didn't have this but there's this
[00:24:28]  like guarantees here of uh updates being glitchless and that any derived value is only going to execute once we actually sort the dependencies in such a way to ensure that the graph resol
[00:24:39] ves properly and you don't end up with things over executing so while it is pub sub it's pub sub with certain synchronous guarantees and yes the subscriptions are kind of handled
[00:25:02]  automatically for you under the hood so you're basically saying that react does magical shit and react is actually straightforward well react is really really simple um in its model and when i
[00:25:15]  say simple i mean that in this term simple people people get confused by this and i want to point this out redux is one of the simplest libraries that has ever existed you
[00:25:25]  it is literally just like a reducer like if you think about it it's like uh it's like what is it uh const next equals function of current state plus action like
[00:25:39]  it's not hard to picture how you can compose these and build them like it's a very simple you don't need very much code in fact the rx.js people
[00:25:47]  would be like huh that's a scan operator we can do redux in a one-liner like the whole repo you don't need a repo you just use one operator in
[00:25:54]  rx and they're right um the thing is as you know classically before stuff like redux toolkit this this led to an incredible amount of boilerplate or complication
[00:26:05]  it's not complex but complication i feel hooks are kind of like that hooks are generally just complicated you have to like know that there's a component that reruns and that
[00:26:14]  there's like an array of state that is hoisted outside of that component that gets referenced so like every time it sees a hook it like keeps a counter and goes okay i
[00:26:22] 'm going to look at index one and index two and index three that's why there's hook rules and all that stuff that's why you can't nest them um none of
[00:26:27]  these are problems the reactive system has right you can always let's go like oh let's just wrap an effect in effect right like who who cares um create effect you know
[00:26:37]  let's let's just do this i mean this isn't going to have this very basic example is not going to do anything but i just want to point out that essentially
[00:26:50]  there's no um there's no um there's no impact here uh like to to these kind of rules because it's a different model like a completely different model so did react
[00:27:04]  up this model no i react is just different and they value different things um so each can take theirs to their own extension and just like the virtual dom is not innately bad
[00:27:18]  as people have you believe and we'll talk about that today um there's just implications of making these sort of decisions there's a question what solid needs to take not today
[00:27:32]  not right now at least um we're going to focus on reactivity this isn't about it is about solid but it's not about solid yeah yeah yeah yeah and you
[00:27:43] 're right there's some level of scheduling it's synchronous scheduling but there's some level of scheduling here um yeah people writing their version of the redux equation uh if you look
[00:27:58]  at xstate they have an even cooler version of it where um action becomes message and then it gets state and action out which is probably more realistic thing of what actually happens
[00:28:11]  and why redux is maybe too simple so to speak but um this is just kind of like high level talking about it so don't mix your asses with your bases
[00:28:26]  you guys are great okay okay so we're starting to get an idea on this fine grain reactive stuff it's the key part of it is it's synchronous like i i'm
[00:28:36]  gonna i i'm gonna i i mean i'm just gonna try to like reduce some of this so you can't do this but what do i mean by synchronous i'm i
[00:28:44] 'm gonna show you right now what i mean by synchronous synchronous means that if i go set timeout in here for some reason like i decide that i'm going to wait
[00:28:55]  two seconds or two seconds to show my console log and do this well let's refresh unfortunately it logs once and it's never going to log again because that tracking using the
[00:29:19]  runtime stack can't work over an asynchronous frame it doesn't know how to resume it when the timeout comes back there's there's a there's a solution to this right
[00:29:30]  you can go const a equals a so to speak you know all i'm doing is actually not going to use a right i need i need like v and b2 and
[00:29:43]  in a sense if i put v and b2 in here or like um let's refresh the playground what you're going to see is it's working again and in a sense
[00:30:01]  this is like the dependency array right i just added the dependency array back by putting here and solid has a helper called on and view uses something called watch where you can say
[00:30:09]  listen to these specific things and then when we put we handle the tracking at the root of the effect but it just means like while an effect could be an async function for
[00:30:18]  example i can put like an await in here and stuff only stuff above the first await is going to track so generally what like i don't tell people that they can just make
[00:30:26]  async functions effects they can it's you can make a cool demo where you can use cleanups to to do handle race condition canceling and stuff like that i think
[00:30:36]  that demo is actually on the solid site but my point is that this is a synchronous system um that has guarantees that's why you use it so yeah what's the difference between
[00:30:49]  reactivity finding reactivity is just a blanket term to define anything that changes like in my opinion when you say something like reactivity you could be talking about react 2 or s
[00:30:58] velte because let's face it react and svelte are very similar um which we might get into today but maybe not my my my when i'm more fine-
[00:31:06] grained i'm talking about the specific type of runtime reactivity that uses automatic tracking uses the call time stack and it's basically designed in such a way that um it tracks
[00:31:16]  these dependencies live and you might be going well why would you bother that and not have the fixed erase well the powerful thing is is you can change the dependencies on the fly
[00:31:29]  every time it runs it's your last set of dependencies um and i i've i've shown this kind of example before maybe i can just pull up a code sandbox with it
[00:31:38]  um but yeah i can probably do that let's just pull up a one of my code sandboxes here in my drafts no actually all sandboxes i actually have a
[00:31:49]  reactivity playground that i use to teach people reactivity and there's this example here with conditional dependencies and i i want to show this because i think maybe it'll help a
[00:31:59]  bit because if if with the fine grain system if you have you know a first name and a last name and a toggle to switch between first name and last name like here
[00:32:08]  see show for if it's not show full name only show the first name and otherwise show first name and last name what you can do is you can create an effect that logs
[00:32:18]  the name right so what i've got here is my name is john smith okay and let's can i collapse that yeah okay beautiful and then if i set the full
[00:32:31]  full name to false now it just says my name is john but what's key here is if you change the last name while it's not listening to it well it's like
[00:32:38]  short cutting on the first one nothing it doesn't run again see there's there's no log there's no nothing so then when you set the full name it hasn't it
[00:32:46]  has changed it's there but it's important to understand that the the dependencies can change at runtime on every run so they're not fixed this is not something you can do with
[00:32:57]  the dependency array and i i think this is an important distinction here and why the runtime systems work this way because you can do very powerful things uh based based on what is
[00:33:09]  like the work you need to do you can actually reduce the work that you need to do compared to having fixed dependencies right we always use text to show this stuff but like if
[00:33:19]  anyone's again probably should check out if you haven't seen it already probably check out some of my other talks about solid js i don't think i'm going to build
[00:33:28]  it right now but like this doesn't have to be a console log that that we're doing here you know what i mean like just just this this is more about rendering but
[00:33:37]  what i'm getting at is this could be like you could create a dom element and have the effect right to that dom element but we'll get to that more in a
[00:33:48]  minute i just i think it's important to understand that um these reactive systems uh have specific trade-offs or considerations so that they excel at a certain problem in this case fine
[00:34:04] -grained reactivity is all about synchronization and about the dynamic dependencies it's basically perfect for templating that's why all these frameworks have it it's just such
[00:34:14]  a powerful templating tool because you can have like 10 different points of data in your template and they can all have their own expressions and update independently now most frameworks don't actually
[00:34:26]  do that which is what we're going to talk about today um but that's why this type of reactivity is so popular in the core of most javascript frameworks
[00:34:37]  okay how's everyone doing so far are we are we somewhat clear on what fine-grained reactivity is this kind of ideas of signals and computer memos or effects we
[00:34:46] 're doing okay i know this stuff's heavy and i'm going pretty fast i'll give you whatever sources i can to back this up um but i realize sometimes i do
[00:34:55]  like a stream and i cover this in like i don't know or talk and i cover this in like two minutes and the this topic could be like an hour or two on
[00:35:06]  its own a question difference in async and eager well it depends like um there are systems that have lazy derived values um which makes it a little bit easier to schedule your
[00:35:25]  effects but generally speaking like in solid and view and a lot of the frameworks we schedule our effects so i say it synchronously by default but a lot of time when you get
[00:35:33]  into render frameworks you'd want to batch stuff so you might schedule your effects later and then pull the values at that point um so uh i i think that um async
[00:35:45]  is in general though is a slightly different problem and i'm i'm actually going to talk about async here in a second with rx js because that's really what its
[00:35:57]  power is uh term coined uh i think it was first showed up in a in a paper uh 1989 uh actually one second i gotta go intercept fedex two seconds i'll
[00:36:19]  be right back uh uh uh uh sorry about that yesterday i didn't answer the door and then they like they like left uh like oh we'll come and deliver it
[00:37:16]  tomorrow thing at any time and you know obviously a little bit awkward um because uh uh uh yeah i want to make sure i got that package anyways um yeah sorry and actually
[00:37:32]  again i do have an article about this um it's called what the hell is reactivity anyways i think what the hell is reactive programming anyways um if you want to know
[00:37:47]  a little bit more about the history of it i'm gonna just drop this in the chat and i i went through a lot of struggle here because most of the a lot of
[00:37:58]  the original reactive literature was about um something called frp functional reactive programming and neither versions well it's like it described the whole paradigm in lots of different things like different approaches
[00:38:15]  and rx kind of latched onto one part and like this synchronous stuff is like a different part of it and they all kind of handle the whole bubble but frp pur
[00:38:25] ists are going to be like you know this isn't reactive programming i went through a bunch of stuff but essentially yeah the 1989 paper which first used the term reactive program real
[00:38:36] -time programs are usually reactive like this has been a vague term for a very long time um so i hope that article helps but honestly probably will just give you more questions
[00:38:51]  all right all right i did not uh i think thanks david all right oh man okay here we go okay so let's continue okay so let's talk to rxjs
[00:39:05]  for a minute um rxjs um actually you know what maybe i can just i'm hoping that if i just pull up their website they'll like give me a like
[00:39:19]  a nice look because rxjs is a little bit different and it's a lot more complicated um yeah i do not want the references um because as i mentioned historically signals are
[00:39:33]  called observables rx also has something called observables unfortunately these are not the same thing um i showed you a bit like what solid looks like which is not unlike view
[00:39:48]  or mob x or something right rx basically is this matter okay that's the description observable is an event stream so essentially if you were to make a new observable you
[00:39:59]  can basically say you know tell set up a sequence of things to notify a subscriber from usually you aren't creating these observables yourself they'll come from like a dom event
[00:40:08]  or some kind of existing thing but essentially it's a series or sequence of data emissions that can happen you can like set a timeout you can you can do them async
[00:40:18]  and something can subscribe to those changes and usually what happens is the subscriber um you know knows how to handle either the next data an error or if the if the sequence is
[00:40:31]  complete but and this this is often called push based because um essentially you get the you you know you can kind of see it's just pushing the next value on to the stream
[00:40:48]  so to speak there's also pull based streams i don't want to get into it too much stuff like fine grain is actually push pull because if you look at it um
[00:40:55]  if we look at the playground was playing with solid stuff you pull the value out and you use that to create the subscriptions which then you know like or pull the value out here
[00:41:06]  this effect and then later when you set the signal it pushes it out and updates the things that that matter whereas in rx um generally it's either pure pull or pure push
[00:41:15]  at least i could be wrong someone could correct me on this but essentially this is this is kind of like the setup for it and they're not giving me what i want to
[00:41:24]  see yet okay so this is fine so this is all push based you can see like i can make something that just emits a number 42 but there's a couple key things
[00:41:33]  about rx first of all rx observables are cold and what i mean by that is the producer is created like by default on each subscription so if your stream was an
[00:41:45]  event it'd be like every time you subscribe to your event stream it would add the dom event to listener underneath the hood like there's a separate dom event listener for each
[00:41:57]  place you listen to the stream that listens for clicks so every subscribe now you get a new um new new dom event the other thing is and i'm come on show me operators
[00:42:11]  operators operators operators no one really writes rx like they're just trying to explain the basic concepts of of observables because you know you can basically set them up to be
[00:42:22]  the sequence but the thing is in practice what ends up happening come on come on maybe maybe i'm just like not going to find it in this section on observables what's
[00:42:33]  let me see here observer let's do operators sweet in order to deal with the stream you get a library that's kind of like ramda or lodash so essentially it
[00:42:43] 's very common that you can go like give me a stream of one two three pipe it map onto this and then subscribe and give me the final value or and pipe is kind
[00:42:54]  of like a generic way a kind of pushing the values of the stream all the way through and transforming them and you know you can pipe a bunch of operators but it's
[00:43:05]  it's literally doing like a reduce left i think or reduce right where if you're familiar with functional programming where it's like calls one function and passes the other function as its
[00:43:14]  child and it passes through and the key thing with this is once you have this ability to pipe these kind of operations like a map operator you can you start being able to
[00:43:25]  create all sorts of operators on top like can cat all merge all switch all exhaust all and i think at the time of speaking something i rx used to have more like close
[00:43:34]  to 200 operators i think but these days i think there's about 70 or 80 operators so you you can basically do whatever flat map merge map switch map um and they like to
[00:43:45]  use stuff like marble diagrams to show the passing of time you can see that the focus here is actually quite different um yeah here's some operators um for creating stuff um so
[00:43:57]  you can go from maybe an array or from uh a promise or something from an event you can join them combine latest is a good one because this is this like basically because you
[00:44:09]  have this series that you're piping along like a stream if you want to merge or split your dependencies it's all fixed so essentially you're like like let's look at
[00:44:21]  combine latest for a moment combine latest whenever any input observable emits a value it computes a formula using the latest values from all inputs then emits the outputs of that
[00:44:32]  formula so if you had two you know observable streams coming through here one doing a b c d and one do one two three four what you'll see is each time
[00:44:41]  these like emit you have a1 then you have b1 then b2 it emits both the latest value whenever this changes b3 it's gonna be b4 then it
[00:44:55] 's gonna be c4 d4 e4 this is kind of how you put these things together and there's different like if you don't like combine latest there's there's
[00:45:09]  other algorithms the reason i want to bring up combined latest is if you you can start seeing how this is really powerful you know doing things like async stuff like building in a
[00:45:20]  system that handles retries like essentially you could have something that's like fetch some data uh retry three times and like wire it all up explicitly but if you want to
[00:45:31]  do something like templating you know where you're like combining these expressions you know kind of like what we saw here like i i don't want to rewrite this in rx
[00:45:40]  right now first of all you don't get the guarantees on the glitchlessness but also like this one only has a like single signal this one has two signals you'd
[00:45:51]  be like combine latest a b and then do the side effect and the problem is if you have 15 of these in your jsx templates it's a mess like you you you
[00:46:01] 'd have to hoist it out of your template and then make these into their own observables and then read those observables or make them into something called behavior subjects and
[00:46:11]  read them in all the different locations usually what people do with rx js is they just put the whole thing together for a view and go re-render this view when any
[00:46:19]  its dependencies change so it's you've seen rx actually pair very well with things like the virtual dom to a certain degree however because it's push it's like almost immediately
[00:46:33]  at odds with something like react which is very much pull and this has kind of historically caused a friction where the react core team said like we're not fully reactive or something
[00:46:42]  i think they're changing their message because i think reactivity is a broader term and i think everyone's starting to realize that now but classically when rx js was sort
[00:46:50]  of the only game in town um it meant like a very different update model from how react works and mostly partially why i ended up going with the term fine-grained
[00:47:02]  um for what this kind of other reactivity and why um i i i lean to using the word signal instead of observable was to get away from rx js because people
[00:47:12]  have a lot of assumptions there and they're both really good at their own type of problems but they're completely different you can compose behaviors in both as you can see you can
[00:47:21]  like build up things um using signals like you can with rx signals don't have operators but you could write operators i suppose but like you can see that they're tailored
[00:47:30]  each for their own use case uh how's it how you guys all still alive yeah yes yes thank you this this is yeah what was that called is that called reduce right
[00:47:46]  i can't remember reduce left but essentially that's that's uh what i was trying to explain here and this is a challenge because teach people rx js sometimes feels like you
[00:47:58] 're teaching them academic work i mean don't get me wrong rx is really powerful you can as i said you can go like you can do something like from event so
[00:48:07]  whenever someone clicks on the document pipe in that uh click event uh scan it so take the previous value starting with zero so this is kind of like a reducer so start from
[00:48:19]  zero and every time this click event happens add one and then subscribe to that number and console log it so when i go here and i click it you're going to see the
[00:48:31]  clicked number of times going down the screen but like this is this is how you would write this kind of counter whereas you know um we just wrote this um essentially like i
[00:48:46]  mean we didn't quite write it but you could write this in in here and instead of it's interval go document you know i mean add event listener what what i mean
[00:48:59]  let's rewrite it document dot add event listener click do this here if everything is still working yeah here we go i mean i'm doing the other stuff but you can see that
[00:49:22]  that that that that's the logic and i mean this has got a bunch of extra stuff if we actually skim this down to the most basic version again in there
[00:49:36]  is less to potentially grok with the idea of like here's a signal create an effect that listens that signal compared to like what what's going on here so there's a
[00:49:50]  different learning curve and i think they're both good but i think it caters to different cases it's very easy to do the granular stuff and combining and uncombining
[00:50:00]  like i showed with the a and the b like the way that it splits and whatnot dynamically just because the way it works at runtime whereas rx everything is explicit and you have
[00:50:08]  to pipe and stream it all the way through so there are things in rx and an rx fan will point it out to you they'll be like oh what about behavior
[00:50:16]  subjects because behavior subjects let you read the value i tried to build solid js on behavior subjects other people have tried to there's there's probably some frameworks out there uh what
[00:50:27]  is it called um i'm not gonna remember off the top of my head head because it got room was it rx js dom yeah yeah um i will say yeah pluck filter
[00:50:48]  debounced i will say writing ui's this way um can be challenging i think cycle js is probably um one of the best examples of of taking this rx approach
[00:51:02]  but again they did it by keeping it very clear keeping their side effects completely out of the system and wiring in reactivity in in loops um see if there's an example of
[00:51:10]  cycle so you'd write a component like this and he's not using a jsx but he could but you see vdom here like essentially it's very common with this pattern
[00:51:18]  because of wanting to like combine this information you know map combine latest kind of stream it in that you're going to use a vdom or something to do um diffing
[00:51:29]  and uh for doing fine-grained updates of templates this wasn't not really an option but this is why like you don't find rx usually in the core frameworks
[00:51:42]  between this kind of granularity consideration and also because how should i put this um there's a there's a steep learning curve on the operators and yeah i i i think
[00:52:04]  those are probably the two main ones i think if you are interested in this topic further i strongly strongly recommend an article that came out about a week ago um which was from a
[00:52:18]  big time angular fan uh works on angular for years he was talking a bit about how he finally came around to why signals um might be the right choice for uh angular which
[00:52:33]  is a big step because angular out of all the frameworks have probably been the closest to and i'm just gonna drop this one in here closest to rx this whole time so
[00:52:46]  if you have questions and you're really into rx and this my explanation doesn't make sense to you read this article this is an rx person convincing you you should use
[00:52:55]  fine-grained reactivity all right all right where are we here just catching up with chat really quick the share operator will make yeah yeah yeah i i assume there's
[00:53:19]  a way to do it and but it was interesting to me because this is the one of the first things that really made me uh think about this is i don't know
[00:53:26]  if you're familiar with cycle js um under stoltz uh is very prolific in his writing about rx js and these kind of topics and he made something called extreme
[00:53:37]  and what extreme is is um extreme let's try cycle maybe i can get it yeah extreme he made his own fork of rx even after you've used rx for years
[00:53:49]  because he wanted to trim it down to 26 core operators and factories only hot streams like he basically he looked at why rx wasn't suitable um and this is a guy
[00:53:59]  who loves this pattern and approach it wasn't suitable for ui and came up with his own library to try and um fit with that and keep those kind of benefits i i
[00:54:12]  tried to go this path and i just ended up giving up essentially which might not be fair i think this is always interesting when someone gives up and then years later we realize
[00:54:21]  like there's something nugget in there that's really valuable but i just want to point out that like the reasons you might choose the different solutions aren't only academic um like
[00:54:33]  this comes from experience of people using them even big fans of the approach acknowledge that rx isn't always the right fit for say templating your uis yeah um and
[00:54:49]  people have preference there right the interesting thing is like when you go all fine-grained you don't even have redux necessarily but i think rx fits really nicely still
[00:54:59]  as a layer of interrupt interrupt ability um because like you can always just plug in your observables into another system uh svelte just lets you put a dollar sign on
[00:55:10]  the front of it and you're done solid has a from operator and like so reactive libraries talk to other reactive libraries has a bit of an interrupt but it you can keep a
[00:55:18]  lot of the benefits of both sides and i think that's the best way to use these as needed but in my opinion uh rxjs is kind of like the graphq
[00:55:29] l versus trpc thing like you you only need it when you like need it and until you need it you don't need it all right interesting actually it was once
[00:55:46]  it was removed yeah yeah um yeah it's tricky because like once you go in the behavior path and you're trying to pull that way you like almost want everything to be
[00:55:59]  a behavior and then it's like even clunkier to deal with i it's interesting because you're kind of coming from the opposite side david but it's it's
[00:56:06]  it's it's it's cool to kind of hear like some similarities on that path um i think i think also if you're working a lot with react like that piece of
[00:56:19]  like switching from push to pull can be tricky with a very push based system it like takes extra consideration one thing that i've been noticing in our patterns on solid side is
[00:56:31]  over time even though we're push pull we're starting to lean heavier on the pull side than the push side the push side's good it's what gives us the power of
[00:56:38]  the updates but using that to schedule on the pull side kind of gives us a best of both worlds thing and um we've been we've been having great success with that on
[00:56:47]  some uh projects uh trying to use that approach to kind of replace the core of some projects that are classically using immutable structures i'll have more to share about about
[00:56:56]  that um in the future but been doing really awesome work with tanner lindsley on with with some of his libraries um uh not talking about like solid integration but actually
[00:57:05]  talking about the core the agnostic core and using um push-pull reactivity to power it um is really quite interesting i think might finally be the bridge that
[00:57:14]  you all are looking for but it takes a little bit of work we we had this all through i know the x-state solid adapter has actually been kind of a lot of
[00:57:21]  work um we've been trying to figure out patterns to make that approach more standardizable so that it can be the default instead the other way around because it's a lot easier
[00:57:31]  to start from a reactive system and kind of how should i put it lose granularity to get into like one of these immutable renderers than it is to go the
[00:57:41]  other way and always have to do this extra diffing yeah yeah i think the problem is you kind of need both and the like he couldn't replace everything with being hot
[00:58:04]  but on the other hand like being cold was also not good so like you you kind of you kind of need need both um yeah thank you yeah yeah we're doing some
[00:58:25]  really cool work here um i i can't wait till this gets a little bit further and show what the impact of that i can't really see why one would use rx
[00:58:36]  and redux i feel like mixing these don't remember well i mean it's cut or what was the other one there's uh uh the generator one sega redux saga
[00:58:48]  or whatever um it's because redux is missing this piece and if you want to understand what that piece is watch any talk by david corset or david piano who
[00:58:59] 's in the chat he will explain to you pretty quickly that missing piece from redux and because that piece is missing you need that other part why people grab stuff like saga or
[00:59:11]  rxds when the solution might be actually simpler they they do that indeed okay all right so okay we we i know rx is not everyone's topic um but hopefully
[00:59:35]  you have at least a little bit of an idea of how rx reactivity and this reactivity differ and they're not just replaceable um with each other and why
[00:59:47]  like people tried to unify it um rx some people use the unification but it's missing stuff i've seen better attempts at unifying it than that but ultimately even
[00:59:58]  when you unify it you recognize that observables and signals are not the same thing one's a stream one's a behavior they're two sides of you know the same
[01:00:08]  coin whatever like they are different things and this is while they look similar they're the the characteristics of them let them be more optimal for different use cases yeah that's the
[01:00:29]  thing rtk has changed the equation significantly here and i i i don't i don't want to under uh position that it's more just like talking about like like when
[01:00:41]  we just talk about reducer like all the saga and um rx redux and all that stuff was from a time period before rtk primarily okay so yeah okay
[01:00:54]  we talked a bit about this we talked about rx we talked about signal uh signals so let's let's uh let's let's continue on let's look at escalator
[01:01:03]  here okay so we should talk about compiled reactivity i don't actually want to talk about compiled reactivity um too much because compiled reactivity generally doesn't exist outside of
[01:01:17]  reactivity with a renderer the closest we've seen to compiled reactivity that's componentless hasn't been released yet and that's marco six um for the most part
[01:01:29]  compiled reactivity is just a specific type of rendering where you kind of compile away the reactive system so we're going to talk about it in part two here so let's let
[01:01:39] 's get there um everyone good so far grab some water all right okay so there's a lot of questions when we talk about reactivity with solidjs and like people go
[01:01:58]  oh you know the signals now everything's got signals what are signals um i'm going to probably use preact to show this because i think preact is probably our best
[01:02:10]  middle ground to kind of start from our mindset of like hey we are uh vdom react to react like library and kind of walk the distance because i've shown previously like how
[01:02:25]  solid renders and we might get to that in a minute but your basic example here and let me blow this up a bit this is preacts uh repl playground here is
[01:02:35]  we we've got our counter right increment decrement we've seen this example a billion times right and if i go in here and i go console dot log count and i go
[01:02:49]  put the value in here and i don't think they have a console we're gonna have to do this ourselves um let's see is refreshing work in this one beautiful we
[01:03:04] 're gonna see our count zero and every time we increment we see count one count two basically it's gonna log because this component reruns every time that's how a v
[01:03:15] dom works right you bet marco six is cutting edge um sorry someone's talking about i don't think there i just want to stop here i don't think there's anything
[01:03:37]  you can implicit you can't with rex and vice versa that's they can be equal that that is true it's just like they're tailored a certain ways to optimize
[01:03:48]  their differences of course easy yeah exactly like it's a lot easier to solve the diamond problem with a synchronous system um like because it's just like it can walk the dependency graph
[01:04:04]  it's a lot easier to do the async like to model it if you have a concept of things being done right so i actually built an rx solid library which
[01:04:14]  is actually solid signals that did had operators like like rx you know and did time stuff like throttling i just i deprecated a certain point because i was just
[01:04:22]  like why am i doing this like i could write it slightly differently and it would just be shorter and make more sense but yeah this is a good point to the pull out okay
[01:04:29]  so anyways back to our counter um the the classic problem with these kind of situations though and i mean there's nothing wrong with this is i'm going to i'm going
[01:04:41]  to keep the the button counter here but what i'm going to do is we're going to i'm going to keep the increment button i'm not going to worry about decre
[01:04:50] menting we don't care that much what i'm going to do is we're going to add some more state here and we're going to add a what do i
[01:04:57]  want to call this let's call it a list okay i'm going to add a set list and our list is going to have an array of a few things like apple banana
[01:05:17]  orange or something orange okay whatever okay and we're also going to sorry good it remembers we we're also gonna like in here maybe add like let's like iterate over our
[01:05:37]  list let's do like um list dot map um we need fruit okay and we're gonna make i don't really care we're just gonna for now we're just gonna
[01:05:55]  make a div of of of our fruit okay okay yeah we got fruit and what the reason i want to show this is because if we go in here and there's probably
[01:06:14]  formatting in this tool i'm just not aware of it it doesn't really matter let me see here um what do i want to do actually here okay no okay nope that saves
[01:06:27]  it okay i was just trying to see if i could play with this a little bit i am not as familiar with this playground but it seems to be pretty decent what i
[01:06:36]  want to show you is if i go in here and go console log list all right and maybe i can like remove some of these warnings or something um but let's just
[01:06:56]  let's just is there a refresh on here no i'll just page refresh okay it's fine you're gonna see count zero and the list three times right and if i update
[01:07:09]  the count you're gonna see count one and list three times and this shouldn't be unsurprising because of the way a virtual dom works um but i i i wanted
[01:07:22]  to point out that essentially if you change something that has nothing to do with the list the list still re-renders and again this is a virtual dom so we don't
[01:07:35]  care that much but essentially we remap over the items and we we we redo them all now there's different things you can do here right one thing is we could ho
[01:07:53] ist the state or pull the state into the into its own component and do all that but the reason i want to use this example is because is because like this is the
[01:08:05]  classic example in fact like uh i think there was an article that that was very popular a couple years ago it was called it was by this guy named rich harris and this
[01:08:15]  article he said virtual dom is pure overhead and the example he used in this article he's trying to be explained that the virtual element isn't exactly slow and it's usually
[01:08:28]  fast enough but what he was trying to show is that it wasn't just about the expense of diffing stuff every time it was that like if you change this state that had
[01:08:39]  you know basically nothing to do with this items you'd be like re-rendering these items every time that he's just this is the same example we just built and
[01:08:48]  i admit i admit when i saw this example i was like oh come on you're you're stretching it a little bit right like let's face it you use react you're
[01:09:02]  smart enough to know like you have to break components here and then use react.memo and key the prop and then you do that and then you get the performance you want
[01:09:10]  right but that like that wasn't rich's point rich's point wasn't that you could solve the problem he meant that like you literally had to be introduced to three new topics
[01:09:17]  to solve this problem uh problem so for today's sake i am not going to show you how to solve this by changing component boundaries well unless it's convenient for me um
[01:09:28]  there's a trade-off um that we'll talk about in the way svelte renders too but we'll get to that in a minute because this is kind
[01:09:42]  of like your baseline so one thing you could do as i mentioned is you could we could just kind of like pull this counter down right like if if if if if if i
[01:09:58]  just had another component here um let's make it let's make it let's make it app i'm gonna i'm gonna swap the where these things are and if we
[01:10:07]  made this our app component okay so i'm gonna move this up here all right fine and then if our counter went kind of back to what it originally was all right which
[01:10:23]  is actually i've already got it mostly here i we can just get rid of this we can get rid of this and then we can get rid of we're going to call
[01:10:42]  this one app and we're not going to use value here and we get rid of this and we get rid of this and then we put back in was it counter we
[01:11:07]  change this down here to app now let's do some refreshing here we'll see app list three times count zero okay that's expected now when we click our counter count updates
[01:11:27]  and list doesn't doesn't um update anymore right so ta-da we we solved our problem um but it's a little bit more complicated if the state is like semi-
[01:11:42] related like like which is selected value thing where it actually does relate to the list but not to the list like redrawing like the reconciling and but this is
[01:11:53]  a good trick and it's such a good trick that the pre-act team realized that they could use signals here um to actually to basically do something very similar so if you
[01:12:11] 're following so far i'm actually going to go back a few steps oh no i can't because i did it okay that's fine what we're going to do is
[01:12:19]  we're going to now introduce pre-act signals and let me let me show you what's going on here from that pre-act signals and i'm using pre-act
[01:12:31]  as my guinea pig here but this is very similar to quick and in some ways similar to view but we'll talk about view in in a minute um so i'm
[01:12:42]  just going to make a use signal here okay and i i want to put them back together again um just because um splitting out a component is the way you solve it generally speaking
[01:12:59]  or using memo or doing something like that but i what's cool about you know pre-act signals is that okay i know i'm just like airing it left right
[01:13:13]  and center here while i'm getting this back to where it needs to be to is is this if we update this from you state to use signal all right and now their
[01:13:29]  api changes from value set value and then we'll make this one use signal as well we don't we don't really have to but we'll do it for the
[01:13:44]  sake of this and we'll just call this one list and then list dot map right list dot value dot map let me show you something kind of cool when i increment uh
[01:14:10]  set values not set sorry i actually have to update the apis here sorry set value now becomes value dot value i probably should use a different name plus plus okay cool all right
[01:14:23]  let's try this again clear this out app list three times i press increment and what's going on it's updating but it's not console logging the app or the list
[01:14:41]  anymore and you're like wow wow this is crazy like for most people um actually or for a lot of people let me say and it's gonna do it the only time
[01:14:54]  they've ever seen that happen before like in such a visceral way in terms of like seeing code that looks like react isn't solid right because if i go here and i
[01:15:05]  go console dot log app and then i go this uh sorry what am i missing here to do increment increment just refresh you can see it's updating and it only logged app
[01:15:25]  once so everyone's like oh wow these signals things are are are pretty cool right but to understand what's going on here is pre-act is actually using that trick of
[01:15:44]  making the child component essentially because you pass the signal straight to the binding and it goes oh this is a signal i'm going to wrap this expression separately but if you went value
[01:15:57]  dot value and do this and press increment now it's re-rendering the whole component you're seeing app and list console log over and over again and why would you
[01:16:13]  go about value value well maybe because for some reason you want to show count times two right right you have to get the value to multiply it by two right so now now
[01:16:29]  we're back to re-rendering our virtual dom right and this is this is this is different right than solid because if i go count times two it's still going to
[01:16:43]  not do it right like because essentially using my console log example up here what solid's just doing is just writing a create effect around that in fact if you look at the
[01:16:58]  code it basically looks like it basically looks like that it's this is an insert function but it's essentially like create effect run this count plus two whenever and but i i
[01:17:14]  i want to i want to clarify this because it's important to understand understand this because there's a solution to this do you know what the solution is to this well we have
[01:17:25]  another primitive called use computed now if we use computed here and we go const double count equals use computed bam now we can go back to passing it straight through and if
[01:17:57]  you look at it let's refresh again if you look at it it's not it's only gonna up it's not gonna it's not gonna do the logs again so you
[01:18:05]  can hoist it into into another reactor primitive basically make it a signal again so as long as you keep on wrapping it as signals you can keep the optimization going i just
[01:18:17]  i want to point this out though because um there there's like slight differences here because i mean this was fine for for for this scenario but like let's pretend we add another
[01:18:35]  button to our page and our new button does something a little bit more interesting our new button um list dot push or list dot value dot push grapefruit all lowercase grape
[01:19:00] fruit and i called it increment let's call push okay and let's let's actually add list two let's have two lists in our component another list that has nothing to
[01:19:30]  do with the first list let's call that list two and let's instead of what should we use instead of fruit let's use um i don't know what's a
[01:19:47]  what's a good thing uh actually no signal memo effect okay so app list three times list two three times we increment nothing updates when we push oh well our push is not
[01:20:10]  actually updating what's what's going on here did i did i screw up our push oh right of course it's like it's it's like svelte and actually like
[01:20:19]  solid um it's actually better not to push um it's like it's it's like it's like it's going on here it's going on here we're going
[01:20:25]  to go to the uh what you actually want to do here is actually do um list value equals um list value um list value um to do spread can cat and then it's
[01:20:39]  listening to the right thing sorry that was my bad um yeah sorry we learn stuff as we go when we push you see app list list to all re-render again unfortunately
[01:20:57]  for the list um there's no way we can really optimize this very easily and i mean this in itself is fine you can just always go back to the v dom but
[01:21:16]  like essentially what you can do is you can break things into components and and use components to organize it the the question you might start wondering is like let's let's continue on
[01:21:31]  with this with these examples a little bit is like okay this is fine i i'm i'm i'm not actually picking on preact here because this is also true of
[01:21:41]  like quick um like all the optimizations kind of and pretty much most vdom libraries the thing is most vdom libraries before preact that you state didn't actually do this
[01:21:53]  this is actually i jumped right into one of the coolest optimizations i've ever seen in this the fact that you could even just do that is incredible for that like one specific
[01:22:01]  little case whereas like most uh vdom uh reactive hybrids don't aren't able to do this um so the fact that quick and preact both do this is
[01:22:13]  actually kind of cool but what i want to get at here and is what happens if we wanted i'm trying to think like how much i want to clean up on this code
[01:22:22]  but like okay so it's not explain why the candle plan well it's because you need to read from the value in order to map over it so like that doesn't
[01:22:36]  reach the the vdom i mean i guess let's see here can we can we solve this actually you know what maybe there is a way to solve this you know what let
[01:22:44] 's think about this you're right can we do this can we go maybe there is a way to solve this maybe i'm not i'm not thinking straight here what we
[01:22:53]  could do is we can do like const list computed equals use computed okay okay okay and as long as we do this right we could probably pull this into this I mean I
[01:23:20]  I'm not a hundred percent sure this will work I'm just I'm just thinking here what if the list computed is a computed that maps this thing can we can we isolate
[01:23:31]  this list computed alright doing something wrong let's refresh objects not valid as children interesting can I do this okay well I mean this isn't gonna help us it's gonna
[01:24:03]  be the opt but this okay okay so you can't do that okay but I mean it's worth a shot right you're getting to where I'm getting to yes this is
[01:24:21]  this this this is this is this is the this is the this is the challenge here right because okay so we weren't able to do this I think if we were smart
[01:24:30]  about it we could do this this this starts hinting at to you why view has v4 or why solid has the for component one of the reasons there's multiple reasons but
[01:24:46]  this this should start like warning bells in your head you start thinking about this but even so um it's interesting because uh yeah I guess these work like hooks so they probably
[01:25:00]  don't get recreated on every re-render but it'd be interesting to see if they do um there's like a certain overhead that comes with reactivity and if
[01:25:11]  you're forced to wrap everything you're actually paying more of a cost than if you didn't use the reactivity right like this is one of the reasons why solids just a
[01:25:20]  function API design and not the dot value is because there's a cost of like just wrapping everything and use computed to make it work um but let's let's okay let
[01:25:30] 's let's let's let's go back out of this a second and get back to where we were um because I I want to I want to talk about this a bit
[01:25:42]  more because one of the interesting things and is I'm going to use the count again because the count's easier but if if if if if this is still just I'm
[01:25:54]  going to make this our counter component and then I'm going to come up with a new app component okay and our new app component is just going to return our counter component essentially
[01:26:09]  sweet okay and then what I'm going to do is I'm going to hoist out um the state right hoist it up here okay and the reason I want to
[01:26:21]  show this is because well we need props and well we have a choice here how we pass these props because and actually it's more than that I need to hoist the
[01:26:44]  button out too for my purposes it'll just make things easier so I don't have to like wire it in but it would it probably work kind of the same way let's
[01:26:52]  just do this okay let's put the button here beautiful okay and then I'm just gonna go value equals well let's do let's do value dot value first okay and
[01:27:13]  do do do do do do do counter double count double count reads props value okay sweet so does our counter still work okay maybe not um let's make sure counter counter counter
[01:27:36]  props dot value let's see what I'm not doing right here I feel like I got like too much noise in here now um so this is kind of on me a little
[01:27:50]  bit and maybe interesting okay it's like more fine I'll just delete it probably regret that in a minute but I think I think I already made the point I wanted to
[01:28:14]  make there okay so we have value that we pass down we increment the value and then oh right this isn't a signal so let's let's go back to the beginning
[01:28:30]  and just go let's make this props dot value right okay okay and in fact we'll make it value times two okay sweet so I'm gonna clear this off every time
[01:28:48]  I click this app's gonna rerun because clearly um actually you know what this is important so let's let's let's put something in here app counter okay okay so
[01:29:05]  let's clear this again so we click app encounter run app encounter run makes sense because what re-renders when we update the signal app re-renders not counter which
[01:29:17]  uses it but app re-renders and the reason it re-renders um is because you set the state I I mean let's see what happens if I make this
[01:29:28]  five okay like some fixed value and I'm gonna refresh and then we press it it's number okay so sweet it's actually smart it looks like it's actually smart enough
[01:29:48]  to know that it's red here okay sweet okay sweet so if I because if I don't act if I press the constant value setting this doesn't actually cause it to
[01:30:04]  to do it so it actually can tell if you read it under the scope it looks like that it actually updates because not reading it does not cause it I just want to double
[01:30:16]  check that again does not cause it to update or re-render so let's pass value instead which is we're gonna pass the signal now that we're passing the signal
[01:30:27]  um well look what's happening now only the counter is updating and app's not updating because we're doing it this way right and then if we want it so that um
[01:30:44]  this um also doesn't rerun again we're gonna want to change this to double count and we're gonna change this to prop dot value dot value and now it should
[01:31:01]  update without logging anything which is correct okay sweet sweet sweet sweet interesting part though about this is if I make this value dot value now it's it's basically broken or if I
[01:31:20]  make this five it's basically broken because we need to handle the potential of this being a signal so um I think I'm not sure is there an is signal exported from
[01:31:43]  this we should look at the API but I imagine there's a way so that we could be like you know something along the lines like actually it's interesting because this computed
[01:31:55]  probably needs to be fixed because it's like a hook right because I can't like use conditional logic here can I I'm not sure I mean we can try we can do
[01:32:12]  something like let double count I haven't done this before so we're we're gonna try and figure out how to do this um we don't need our list anymore um
[01:32:26]  let double count and then we'll be like if yeah I mean we could put it inside the used computer we could always make the used computer yeah yeah let's yeah let's
[01:32:49]  you're right that's probably a cleaner way of doing it right we could be like oh sorry like I thought I was undoing and it was impact we could always yeah
[01:32:59]  let's do that maybe like something like props dot value I don't know what do you want value I mean I'm coming up with it there's probably like a better way
[01:33:17]  of doing this if value in props dot value then value dot value or whatever props dot value dot value let's get this multiple lines so we can see what we're dealing
[01:33:40]  with otherwise props dot value we could do something like this maybe oh I can't use in operator on a primitive value okay so we need better detection than this yeah I
[01:34:06]  mean do they have a signal someone let's just sanity check here console dot log is signal that doesn't look like it maybe I named it wrong no okay a lot of
[01:34:24]  these libraries have some version of this we'll figure it out yeah you're correct but I mean it's a similar but then maybe it'll re-render like is there
[01:34:50]  the API here is very simple I mean yeah I don't see it you know what we can figure out what a signal is we don't need this we can go like
[01:35:00]  type of type of props value equals object and value in props dot value sweet it works again and value dot value should work too oh right but it doesn't update you're
[01:35:37]  right because the computer doesn't notice the computer is handling it so we actually can't put in we want to pull it out if it's not right like this doesn't work
[01:35:58]  because there's nothing track as as maple was saying so um I actually kind of want this logic to be outside essentially um let's see if this will work let double count
[01:36:12]  and then be like if type of prop it doesn't it doesn't what I'm getting at doesn't actually matter um what the syntax is for this piece um if it
[01:36:37]  is double count equals this and then we can remove all this logic and it's simply just props times two and then else double count equals props dot value times two bang updates
[01:37:05]  full pass the signal updates without sorry let's prove that it updates without rendering and then and pass the five it works okay so there we go we just made our universal um
[01:37:22]  component here um and depending on what the end user pass is it works it works with full vdom refresh works with optimized signal thing and and whatnot as I said this is
[01:37:35]  just for that one little trick to replace the one thing once you get structural changes like for loops this doesn't really help you at all um uh essentially like this is just so
[01:37:46]  that that one you can skip re-rendering when you're updating like a single property on a something like it's cool for animations well it it is fun and I think
[01:37:57]  this is this is this is one of those challenges right because like people have been combining this forever like someone asked me about Jotai right and and recoil and the thing
[01:38:10]  you have to understand about Jotai and recoil is while there's this atomic state how does the framework know what to re-render if you have tracking like Preact's
[01:38:22]  doing like kind of smart where they can tell like where you read it in component context then yes you can do smarter stuff but in the case of of Jotai and
[01:38:33]  recoil to my knowledge is that use signal is telling you which component to re-run even if you're using it down here in counter like when you go use atom it's
[01:38:44]  that component that re-runs even if it's actually being used here obviously you should probably use it down here use it closest to where you are and the way atoms are
[01:38:52]  globally exposed you can do that my point is like it's very much tied to the component system whereas these signals are actually not even in this Preact case where it de
[01:39:06] -optimizes in many cases the signals are still independent of the component change detection system whereas with something Jotai recoil you have to by using the hook you're
[01:39:18]  telling it what component is going to update so this like in this sort of situation where you're passing props you don't want to pass the Jotai atom like that you
[01:39:32]  want to use it closest to where it's being used and you need to use smaller components like Preact what's cool is Preact actually automates it but like if
[01:39:42]  you if you want to scale on optimization right and the reason I did this example is I mean everyone who knows Solid knows that in Solid you don't have to do any of
[01:39:51]  this you literally just like if your app component has the counter right let's move this out of the way you know and then you pass it down to you know so what was
[01:40:09]  this one called app app and you you know we make our I called it counter but whatever if if we make our counter component that has our let's see can I copy
[01:40:21]  this from Preact mostly if I make this and then and then what's this just count props dot count times two or something and then what am I doing here I'm
[01:40:44]  just doing count let's make our just make our this and then if I put put this in here and go counter and go what what we call this value props up value
[01:41:04]  sure value equals five um yeah I guess the button was just increment in this example it doesn't really matter let's format this for a second okay like this obviously isn't
[01:41:22]  doing anything because it's fixed at five but then if we change it to count then it works and what you're going to see here obviously if I put the console log in
[01:41:32]  is essentially it updates this never logs again doesn't matter I can pass count plus one through here if I want to none of this changes it always is optimized um and this
[01:41:53]  is because the rendering is fundamentally different like you don't check if the thing's a signal or whatever um like you you just don't need to because whether this is this or
[01:42:07]  like the value or whatnot like you just always access it at a value and then on this side for authoring you just use it where you need to use it the end
[01:42:16]  and and I think I think I think yes yeah props sub values to getter and I want to I want to this is this is why signals are not just another state management
[01:42:37]  library um and why when people keep on making the comparisons to solid it's like not quite the same comparison I want to talk about view though because view view is this kind
[01:42:49]  of anomaly like I don't want to like stress on benchmarks people are wondering if I'd like pull out the JS framework benchmark this is this is the point in stream where I
[01:42:56] 'm going to pull it out for a second because you're right synthetic benchmarks who cares they're not all performance blah blah blah blah but what I want to point out here is
[01:43:01]  uh which uh which implementations let's let's just do none that's what I usually do okay haha that's awesome I love this Inferno actually like we're
[01:43:14]  tied but they they pulled out in like in front on the average on this run my point is there are fast virtual DOM libraries there are fast reactive libraries views reactivity and mob
[01:43:32] x reactivity is actually fast this is if I on a previous stream I wrote preact um as uh like a solid renderer like I basically like used preacts react
[01:43:41] ivity um to build a uh solid like renderer and it was it was up here too and view and mobbets reactive systems are super performant that's not the bottlene
[01:43:50] ck when you create a bunch of DOM nodes so fast VDOM fast reactive libraries can you guess where the first hybrid reactive VDOM library shows up on this chart oh
[01:44:03]  are they and is that new warning eliminating them just a second sorry there's like there's like a new warning uh what is it not errors runtime code generation yeah let's
[01:44:16]  get this back um yeah here we are the first one that shows up here is view I'm pretty sure because view has been playing this hybrid VDOM state game longer
[01:44:36]  longer than pretty much anyone the truth of the matter is I'll let Preact and Quick and others put up their benchmarks when they do I've tested them they haven't submitted
[01:44:52]  for some reason but I will tell you that roughly speaking Preact signals from a performance standpoint in this kind of benchmark update some numbers and make some numbers slower so it's
[01:45:02]  basically a wash it kind of comes in close to Quick is somewhere a little bit last I checked a little bit after Preact maybe close to Angular no zone I don't know
[01:45:14]  maybe Mithril I'm not sure we'll have to see when they've posted numbers but the hybrid approaches here's Svelte over here are here's view up here
[01:45:25]  are actually one of the most expensive approaches view actually had if we go historically view struggled with this for a very very long time and it's because of there's this tension
[01:45:39]  okay we haven't talked too much about this tension and because React libraries like Jotai and Recoil you don't really feel it because you just trigger the component to
[01:45:47]  rerun you know like you just say like hey this is the component that reruns it's wherever you use the state the tension is that all frameworks have a form of
[01:46:00]  memoization essentially a way to reduce work whether it's using cached computed signal type stuff or whether it's using like explicit memos like the things you don't see and
[01:46:13]  do see they're always there and I talked a bit about in this component pure article because what I was trying to say is that like reactive libraries actually have this overhead because what
[01:46:25]  you end up doing typically like with a MobX or whatever is you wrap each component in a crate effect essentially or in a reactive effect so that when anything is read under
[01:46:37]  it it re-renders that whole thing before we had this level of auto breaking out components like I showed here with Preact generally speaking what you do is you just wrap
[01:46:46]  like a component what's cool about recoil and them is they're actually like subscribing to use state under the hood so it just flickers the component without having to do this
[01:46:56]  kind of tracking whereas things like MobX and React tried to give you that run once feel and essentially handle that by kind of separating the setup from the execution like separating the view
[01:47:11]  rerunning and making the top never rerun and if you've ever seen views JSX it actually does that if you use view JSX you make like your reactive stuff
[01:47:22]  of top and then you return a function for the view they've actually separated the template from the stuff so it's like this runs once this runs multiple times that's that's
[01:47:31]  actually kind of I believe closer to actually how something like quick generally runs too but the problem is those component wrappers those reactive tracking component wrappers are more expensive than just using
[01:47:47]  the VDOM straight like there's memory overhead and creation time costs and this kind of makes you want to make less of them and especially if you're using a single
[01:48:00]  file component format you're going to just generally make larger components unfortunately as we saw with a VDOM the smaller you make the components the better performance you get like these things
[01:48:10]  are at odds with each other I've been critical because of this piece on Vue in the past but when you actually look what Vue has accomplished under these constraints it
[01:48:25] 's kind of amazing like Vue is no slouch in this kind of benchmark and one of the things that they did was they added in Vue 3.2
[01:48:42]  what's called quintessential quintuplets they like their anime naming references performance improvements they're just like we didn't talk about this the reactivity performance does almost nothing huge in
[01:48:58]  these kind of things but the biggest thing they did was they added this V memo directive which lets them make big components and then tell the virtual DOM how to break it up into
[01:49:08]  smaller things and this is a very manual thing but it's that kind of consideration and the consideration of things like directives like V4 like control flows that are memoized
[01:49:21]  by default these kind of pieces and it's solids for components like this too means that you just don't have these sort of you know you can optimize around these sort of problems
[01:49:36]  like don't get me wrong Vue still re-renders but what it re-renders is less than pretty much anyone else doing this sort of VDOM
[01:49:46]  approach they can cache static nodes they do a whole slew of optimizations and most of them are relatively automatic for you this one isn't to be fair and it probably makes
[01:50:00]  the biggest difference on this benchmark but I mean we can actually confirm that you know let's confirm that let's go back to before view 3.2 official results page when
[01:50:15]  did when did when did view 3.2 come up August 5th 2021 okay so then we just got a cross reference with Chrome release August 2021 93 okay beautiful so let
[01:50:36] 's go back to 92 and okay let's do our none and let's scroll down to where view is yeah see view preact in one version we're gonna see and s
[01:51:00] velte over here right well we're gonna see 93 did this one have it yet maybe not svelte view 3.21 okay well it jumped because preact's
[01:51:18]  over here yeah sorry I'm showing too many results yeah in that one release view jumped from being like over here by crank past preact over here by doing this kind of
[01:51:34]  memorization technique as I said this was this is one of the struggles because you have to be aware of components in VDOM libraries it's just it doesn't matter the
[01:51:43]  memorization is real it doesn't matter if you're using like something really smart like quick or you know something very basic like jamming mobx on top of react like
[01:51:57]  this overhead is is a thing you actually pay the cost in creation you pay the cost in other places to maybe get some updates faster preact's version and what quick does too
[01:52:10]  with a single optimization is probably the first we've seen an actual real improvement on like one of the categories of benchmarks but it's tricky because the net cost is more expensive
[01:52:22]  what you get though is as I mentioned you know we can have reactive libraries and I mean and VDOM libraries using this one but they're closer being really performant in
[01:52:37]  a synthetic benchmark what's interesting though and the reason you're going to want to use these reactive approaches is because they let you author in a more isolated way where you can avoid
[01:52:48]  rerunning components and it feels natural the DX is good so I think it's important to understand that even if a benchmark like this doesn't show the benefit clearly there are
[01:53:00]  still benefits to using something like Preact signals or you know signals with Preact or whatnot and even performance benefits simply from the fact that the way you're authoring your code
[01:53:08]  getting less jumbled up but yeah I wanted to give Vue a nod because they're not doing Preact level like type optimizations to like kind of get really good
[01:53:25]  in that one like optimization the D-Ops they just generally apply optimizations across the board and then they do have their own very smart optimization around VDOM template caching
[01:53:39]  that is a bit technical it's as far as I wanted to touch on the benchmarks today but I just wanted to point out like while you can kind of ignore like the
[01:53:51]  results of these for the most part there is an architectural thing that they reveal when they talk about it and these things actually do impact the way things scale right I talk about this
[01:54:04]  a lot because like I wanted to compare like the cost of components and funny enough like places where there's reactive systems the cost of components is significantly more than whereas they're
[01:54:20]  not for the most part as I said this is why componentless in reactive systems is key because the hybrid is actually the most expensive way to go so yeah I'm hoping this
[01:54:35]  is starting to kind of like paint that picture a little bit like let's let's go back we got one more topic here I believe and that topic unless people have questions
[01:54:45]  about this like do you understand the difference now between signals and preact Jotai and recoil and say solids rendering like I didn't remake the list example in solid where I
[01:55:00]  had the multiple lists but you can trust me when I say that you can put as many lists as you want into them that it just doesn't matter solid is actually incapable
[01:55:13]  of rerunning those components because the way it's built like it literally can't rerun them so you know and this has an impact I don't highlight this to people very
[01:55:24]  often but this has an impact like we don't show this off but one of the cool tricks that's kind of like the preact trick was that the guys from quick
[01:55:35]  were like oh guess what if we don't need to rerender because we've optimized so like we got rid of the plus one here and we just like pass the signal straight
[01:55:45]  through well we don't need to rerun this component ever in the client so we don't need to ship this template so the funny thing is neither do we if you
[01:56:13]  look if you look at this version of here we actually just erased this template like okay there it is button here's the template I mean this is a small template but template
[01:56:27]  erased because you know if you know that it's this is a manual augmentation I don't suggest going this way it was just if you know the thing never re-rend
[01:56:36] ers you can just not send it so there are considerations here and we haven't figured out how to automate it here but I just want to point out that it's this
[01:56:57]  reactive render model that allows this kind of optimization like wouldn't it be cool if you could know this ahead of time kind of like quick but not get de-optimized
[01:57:08]  with the plus one or whatever or structurally and with the for loop and that and honestly there's only one framework that does that and it's not released today that's Marco
[01:57:16]  6 I always sound like an ad for Marco 6 but literally it has managed to merge both mechanisms together which is really really quite cool but also very complicated to make so anyways
[01:57:30]  I wanted to point out that this reactivity granularity piece and rendering applies to more than just client side rendering it actually applies to hydration and solving hydration and shipping less j
[01:57:46] avascript this is why this is such fundamental like building block to change the way we actually look at it this is much more revolutionary per se than what I've let people believe
[01:58:01]  to this point because it actually it's the key that changes how we look at our execution model client and server but I haven't talked about Svelte quick doesn't
[01:58:25]  really quick does runtime reactivity very similar to solid that's why I was very excited by quick when I first saw it Marco compiles it out like Svelte does which
[01:58:33]  is where I talk about quick actually does runtime reactivity but it feeds into a V it's kind of like if you took some mix between view and preact and then
[01:58:42]  used a compiler to make it resumable because like quick is the same thing that's why I'm pointing this out here there are historical frameworks like knockout that work the
[01:58:53]  way solid does where you could have those same console logs and the same situation never de-optimate but modern frameworks today solid is not like react view svelte quick
[01:59:04]  angular it's not like any of them it is like completely different approach and I don't think people realize that which is why after seeing all the talks about rx and
[01:59:14]  always in this like this solution has signals and this solution I'm like yes they have signals but this is like the implications of when it means to have signals can be very different
[01:59:22]  so okay let's talk let's talk about it because I showed how this is very dynamic and whatnot so you might be thinking okay well how does how does Svelte
[01:59:43]  Voluntis and the answer is Svelte is like Jotai where you declare the state where the let variable lives that's what needs to update what needs to
[01:59:58]  render like you can do two way binding but generally speaking Svelte re-renders components it's it doesn't use runtime reactivity it's fixed so you don't
[02:00:09]  have like that dynamic thing but the dynamic kind of optimization probably only matters when you're modeling control flow with reactivity that like solid cares about that dynamicism of like the A
[02:00:18]  versus B last name versus a memo like that to decide which reactive branch to render like in a show component or a ternary operator you find in your JSX it
[02:00:30]  uses the dynamic dependencies and you don't want to be like reading stuff that you don't need on an off branch like you just you don't you essentially need it to clean
[02:00:39]  up after itself and you need it to only listen to what gets listened to but for something like Svelte literally let is like saying hey this component is what reruns
[02:00:52]  if you pass the value down and you update it down here or whatever it's like this is the component it needs to rerun so it's like instead of having the
[02:01:02]  tracking happen automatically like an example I showed before you know like we put the count in it's like hoisting out to a dependency array it's like picture react Svel
[02:01:10] te just finds the dependency array for you and compiles it in and then the reactivity is like use state it triggers that same component to rerender it doesn't use a
[02:01:23]  virtual DOM which is really smart but like I've kind of talked about this before with solid that even though the JSX transforms here a little bit the code you write stays
[02:01:35]  the same and then we change some JSX code you write stays the same Svelte actually rearranges your code between update and create paths and if we just pull up the
[02:01:48]  Svelte REPL you'll see what I'm talking about really quickly here so right now this name so we need to do something to let it update like add and
[02:01:59]  on click here okay and if I'm right just like JSX Svelte's syntax and language is lovely I don't let anyone convince you that templating languages can't
[02:02:09]  do stuff the only place where it gets awkward is composition of control flow because and like you could still do everything it's just like it's a little bit clunkier
[02:02:26]  I love this templating there's no like string literal like string things hiding in here what am I doing here any oh so yeah you've been telling me that my accessibility is
[02:02:38]  awful you know what I don't need this to I can make this a button okay okay and yeah I did name plus one let's do plus exclamation mark okay reason
[02:02:51]  I want to show this right sorry name plus equals exclamation mark the reason I want to show this is that like and let's put this in dev mode so it's human
[02:03:04] ly readable um here's your create function here's your like I guess it's for hydration here's your amount function here's your update function but the thing I want to
[02:03:20]  notice is where we set the name on this click handler which should be down here where are we where's our click handler click handler it just calls set state I mean it
[02:03:42] 's called dollar sign invalidate but it just says it calls set state with the new value name plus equals this and that invalidate function essentially just tells that say hey it's
[02:03:54]  updated run the update function so the reactivity isn't exactly permissive Svelte's actually really clever is that they support also stores which allow you to have runtime
[02:04:07]  reactivity kind of similar to signals but it's more like similar to Rx it's like a very base version of Rx it's not about solving the diamond problem and
[02:04:15]  synchronization it's just about deriving creating some state and deriving some state which is perfectly fine but it's like because Svelte doesn't use it like if you
[02:04:24]  look at Svelte's output there's a runtime here element insert it's all like dom operations it's pretty straightforward but like the thing is like it's still there
[02:04:44] 's no like actual reactive system when you're done like all it does is just call set state or invalidate essentially well if the state is here's the thing you can
[02:05:03]  do two-way binding but think about the state is owned up here then you can only write to it here because if you pass the value you know how long if you don
[02:05:12] 't two-way bind you have no way to update that value right because it's just a variable it's not a get or set or pair like you assign a new
[02:05:21]  variable you're not the same variable anymore and I like this because this gives Svelte a lot of protection against terrible accidental two-way binding things and deep nested two
[02:05:31] -way binding and stuff it's actually difficult to cause Svelte to get into some of the messes that reactivity can get into but it's also because it's
[02:05:42]  restrictive you can't make a hook out of a let variable you'd have to go now change code to use storage you can't make a use local state and have that
[02:05:53]  as your local storage you make a store for that and then use that so like basically once you try and do powerful composition with Svelte you actually leave the Svel
[02:05:59] te language and start using runtime stuff very similar to what you'd find in other libraries so it's an interesting thing but just to understand Svelte's smart part about this
[02:06:13]  is when it does that update function where's that update function like we should actually do let's make our example again where we had our list of fruit because I think this
[02:06:25]  is worth worth looking at just so that we can talk about let's go apple banana banana orange okay and we're going to what is it hashtag each list was it like slash
[02:06:51]  each I think I got this right and then we're going to make a div and going to put all right what sorry I love Svelte's tutorials what do we
[02:07:11]  want let loops if else each keyed each blocks show me perfect okay each as blank okay cool as fruit fruit sweet okay and now oh right can I do this see in
[02:07:43]  JSX it's really easy to intercept can I do okay I think I can do this let's can we do this console.log like this yeah sweet okay so then
[02:08:00]  yeah Svelte's a little bit smart here we're not actually rerunning this stuff because Svelte's has the for component or the memoized loops um I
[02:08:13]  I just wanted to this is I wanted to I wanted to show this um because it's it's important to understand that there is some power here that comes with it it's
[02:08:22]  diffing behind the behind the scenes and when react is talking about a compiler they're talking about compiling this kind of stuff in in behind the scenes as well oh sorry
[02:08:37]  the code too small let's try that you you you can two-way bind them um I I don't want to do like a full Svelte tutorial right here but
[02:08:49]  you you basically two-way bind them you can't like pass a signal so to speak like like you could pass a store perhaps like is it just a reference but like
[02:08:59]  their stuff's just values so like you this very restrictive way of handling things though makes it easier to not abuse it so I think there's benefits there oh sorry yeah yeah
[02:09:14]  yeah yeah I should do this right my bad yeah yeah okay um my my point is that they have a specialized control flow like view does like solid does to handle this kind of
[02:09:26]  this kind of case so this isn't going to re-render again what's interesting though is I think let's see if I can show this I don't think I got
[02:09:34]  syntax in here to get in here but like like I can't do this right I can't like sneak javascript in here yeah they'll never let me do that
[02:09:43]  okay never mind okay I can't do that it's it's fine I what I wanted to show is actually Svelte will potentially no actually Svelte will be smart
[02:09:56]  enough not to even know that not even mess with the list that has changed because it'll be referentially the same yeah okay so yeah just just kind of show it but
[02:10:07]  I wanted to point out that this is actually different than solids fine-grained reactivity because um it I won't be able to intercept it from a javascript standpoint
[02:10:17]  here but this whole update function reruns but it's fine because this update function where is it mount is essentially just a list of dirty checks it's like has name changed
[02:10:32]  do this has list changed do this then do this do you see do you see what I'm saying the only the only place that this will catch up with you is nested
[02:10:41]  reactivity and deep stuff like if we haven't showed this off because I didn't need to get there and because a lot of these solutions don't have it if these were
[02:10:48]  objects that each had a property on them like like if this was if this list was like this and you're like what's what's the name of the fruit and like
[02:11:00]  what's its price you know like if you had objects like this it's it's difficult for svelte if you update the price it's difficult for svelte
[02:11:19]  to not rerun the whole each statement um whereas um both view and solid have the ability to to basically use like proxies and nested reactivity to only update
[02:11:36]  like the child context and in solid's case it can even be in the same component because the components don't re-render like you can literally um yeah exactly like uh let
[02:11:49] 's let's see if I can find an example of here uh solidjs.com will have it um if I go into the tutorials and pick something like uh oh not the
[02:12:02]  tutorials I want the examples I think yeah let's uh examples these examples usually aren't very good but if you look at the simple to do's example what you'll see
[02:12:17]  is that you can uh let's add a couple stories chunk and let me pull this up again we can toggle this check mark without rerunning like the list like I can
[02:12:41]  actually put a console log in here like in front of the to-do's and be like to-do's and checking this checkbox like there's no visual on
[02:12:56]  here so you can't tell like that it's doing anything but checking this checkbox doesn't cause the list to even evaluate whereas in this is something that is true of only
[02:13:06]  view and and solids with their proxies because essentially we can change a property on the to-do without rerunning the list i don't know if that makes makes
[02:13:21]  makes sense to people like um svelte doesn't do this react doesn't do it um um mo uh oh wait sorry quick does this sorry i should have that quick view
[02:13:34]  and solid have this ability um but yeah preact doesn't have a solution for this or and um react you do it with mobx but generally speaking this sort of react
[02:13:47] ivity um is why we can create really without like you just write the code kind of like the way you would expect it to and it just kind of works without actually having to
[02:13:59]  write any memos or that and even in nested cases you can eliminate the work of actually doing the list diffing um anyway i i just wanted to kind of show this
[02:14:10]  i might not be showing this quite effectively at the moment but like this fine-grained thing can also apply to your data so you like if you have a big blob
[02:14:24]  of data this is why we use stores every little piece can update independently and only the component or not even component only the binding like you could stick the whole thing in the same
[02:14:33]  component like i've done here and only the only thing that actually needs to rerun is like you know would be like this check binding in this case we're checking the
[02:14:45]  actual box itself so it's like not very obvious because the dom will also check the box directly but like let me think do i have a better example all sandboxes simple
[02:15:11]  to do's is this one is this like the same example probably probably doesn't cross anything off oh i know which one i want yeah this is the same example give me
[02:15:25]  two two two two seconds um i know exactly which one i want i'm gonna pull this off screen for a second um give me one moment here react did a conference um
[02:15:44]  where they showed their new compiler off and i've probably shown this on stream but this is probably for those who haven't seen this before it's probably worth looking at because
[02:15:59]  all right sorry hit my mic all right i want to i want to show this example maybe in a bit more depth because i never get a chance to show this example in depth
[02:16:22]  in my when i give this talk um what i want to show here is that this to-do's list passes a prop from above for visibility also passes a prop from
[02:16:41]  above for theme color it actually filters on this prop right so when i say filter i mean like show only the active completed one so that prop comes from above and then you can
[02:16:57]  you know obviously add new to-do's in this in this app here um it's not letting me scroll on this it's it's an older version of the playground
[02:17:08]  that i was playing with anyway um that's actually a little bit of annoying but it's fine what i want to show though is that like if we look at the console here
[02:17:21]  it's i basically had a really hard time trying to figure out how to show things update so what i did was i was like okay the filter function let's put a
[02:17:32]  console log count the number times this filter function is called and then inside each to-do let's call it every time the checklist changes right like the input in the checklist changes
[02:17:46]  so like right in the JSX binding i basically did it so what happens is every time when it renders the original three it renders the original three here because it
[02:17:54]  has to go and create those inputs and the filter gets called the first time if you check one obviously it updates because it has to rerun that expression right if i switch let
[02:18:09] 's check it again and i go to active and i hide one of the ones that was checked the filter gets called and that's it because it didn't need to rer
[02:18:21] ender these ones and the other one just got removed so it didn't run it if i switch back now to all and show that one again you're going to see the filters
[02:18:29]  called again and now this time we called the crate because we actually had to render this new item again but that's all that changed and what i want to get at is changing
[02:18:39]  the theme color here doesn't cause any of the logs to happen right this component didn't need to do anything special and the thing that might be kind of surprising to people
[02:18:49]  is that if you take this list item here out and replace this to-do like literally just stick it all in the same component like just screw it like who cares um all
[02:19:06]  right cannot read properties reading text okay yeah because it's it's reading from props right and we don't have props anymore we have we just have the to-do so
[02:19:17]  we just remove that and change it to that move that change it to that move that change it to that hopefully what did I what did I call what did I pass change
[02:19:28]  I almost have to go back handle change and I'm missing one more oh what's cool about this is this doesn't matter that I pulled the whole thing into the same component
[02:19:51]  because like the components have nothing to do to do with this right it's it's it's still just the same thing and that's the power here because it's not
[02:20:03]  like even with recoil or even like you're still going to tell a component to re-render this never tells a component to re-render right I didn't even bother
[02:20:14]  putting the console log in here because like who cares but like let's do it why not to do's there we go like this is just never ever going to get called again
[02:20:25]  like there's just it doesn't really matter what we do here it's just never going to happen I mean we know that by now but like this extends to literally everything it
[02:20:35]  doesn't matter how big you make the component anyways people have been pretty quiet in chat I'm sorry I didn't mean this to get too much on solid chilling it's
[02:20:47]  just I think it's I think it should be clear at this point hopefully that when people talk about signals and reactive rendering there are differences in the implementation that matter not only for
[02:21:02]  performance but for developer experience go on someone chat say something show me you're still alive yeah I need to drink some water here all right all right all right good good
[02:21:41]  good good thank you thank you sorry it just I sometimes you like you give these explanations does anyone have any questions does this make sense I'm hoping at this point when we
[02:21:58]  go back to our Excalibur draw we can really you know basically go like okay these are the types of reactivity this is the trade-offs between them right
[02:22:11]  signals are cool signals are super cool and like we could do like way more than what we're doing with them today that's that's my point right like we're just like
[02:22:23]  touching the surface of it right now we need more people working on this so I I'm not saying this to discourage the attention that this has been getting it's funny
[02:22:33]  this stuff's like a decade old how are we still learning stuff it's more than a decade old it it's just I wanted to actually just clarify because as I said when
[02:22:46]  I was sitting there you know roaming on these discussions on Twitter like you start I mean maybe I should just stop doing that but like just you could just read through this stuff
[02:23:04]  you can see the kind of stuff winning combo let's I think having effects is a mistake that's an interesting take it it is a it might be awkward if your system has
[02:23:17]  its own rendering system and then effects are the side thing but effects are how you render it's hard to say effects are a mistake you know I am super excited about some
[02:23:36]  of the excitement you know we try legend state here's an example of you adding reactivity within react it's really cool you know quick what problems were you able to solve
[02:23:50]  have you tried Jotai let's bring reactivity to react at this point we should kind of understand what bringing reactivity to react does and doesn't do maybe this do
[02:24:02]  people understand why react and Dan Abramoff and the communication there's like why they will not add this stuff to react is that clear I don't know if I made
[02:24:11]  that part clear yet oh this is why I like angular it always had signals sort of it's because the model that react does like the whole approach let's see some of
[02:24:39]  the quote tweets are usually what do we got here but what I want to say is the stuff that signals avoid here for you from a react perspective the react team doesn't want
[02:24:58]  to avoid like they the problem with this approach and this is why the hybrids have such a hard time is you actually start having to shift your mind around a little
[02:25:08]  bit and let me explain why react all rendering which isn't actual rendering but actually creating the virtual dom is a pure operation it is a derivation you start with some data you
[02:25:19]  convert it into a virtual dom it's pure there's no side effects unless you know you have to force them into the system using use effect like essentially it's like this escape
[02:25:28]  hatch out of this pure system so like it's like really mismatched and it gets more complicated the more you co-locate it right it's like sometimes when I
[02:25:36]  have concern that you know if we co-locate our server code in our client code too closely we might get confused by it use effect is like that every day you just
[02:25:44]  like walk in you're just like I'm jumping out of the paradigm and it's like blatant that I've just jumped off a cliff and but it's there as an
[02:25:53]  escape hatch not for everyone to use the idea is that it's you have this pure rendering and the problem is reactivity and the thing about pure rendering sorry before I go there
[02:26:01]  is you you have immutable state and you have immutable data and every time you can just like produce a new immutable thing you can diff it and the whole thing
[02:26:08]  is this nice immutable tree that runs top down and that's your system the truth is obviously the reality is a little bit messier than that but that's like the pure
[02:26:18]  version of it the difference with reactivity is when you start nesting things like every reactive atom is a switch that is essentially immutable because you need the change to be detected
[02:26:29]  it needs to switch but if you start nesting it and creating stuff you actually end up with a mutable structure instead of immutable because you can pick up where you
[02:26:38]  left off so without like cloning the whole tree you know you kind of like pick up where like mid tree so you're actually keeping references the reason the closures aren't
[02:26:48]  a problem is because the references never change so like essentially you you're not you're not in the kind of same problem space around closures but it's because like the
[02:27:01]  outside never re-renders again the reason closures matter is because you actually change what could possibly be closed over but the trade-off of that obviously is now that everything
[02:27:11]  is kind of treated in the scope of mutation you create and then you mutate and there's a way to control that mutation that's what I did with solid what people asked
[02:27:21]  why I'm so big on read write segregation it's so that you can keep control of this I think react has a lot of good ideas a lot like the philosophy is
[02:27:29]  sound I you know there's this medium article I brought it up on stream but I can't bring it up again it's like one of the first things I ever read by
[02:27:39]  Dan Abramoff see if I can find it because sometimes I'll show who I'm following here yeah perfect okay we're gonna go down to Dan Abramoff you're
[02:27:47]  missing the point of react 2015 here you go missing the point of react I've seen any basis is reaction misunderstood by smart very smart people but he's like after using react
[02:27:59]  observing people learning I can say that the best part of react are not the ones that made it famous it's not the virtual dom custom event systems server rendering or JSX none
[02:28:05]  of that rather they're boring old and powerful ideas he called them old I love thank you Dan he's talking about control and abstraction leaks and he's talking he's basically
[02:28:26]  talking about stuff like the unidirectional flow we've had enough black boxes in our career we want to understand if not the full picture at least up to a level where
[02:28:36]  we can make snarky comments that's also correct to some degree right react's true strains are composition unidirectional data flow freedom from DSLs explicit mutation
[02:28:48]  and static mental model guess what you can do all of this without a virtual dom or without immutable data you just have to be explicit about your mutation check you know have the
[02:29:05]  ability to just escape into JS check have a consistent mental model check unidirectional flow check composition check this is what makes react good but to have that static mental model
[02:29:25]  or that they I mean static mental model and consistent are different but to have that mental model just like this is this is the key part that I said check but this is
[02:29:34]  not a completely true from like our side that what he means is the fact that like you just view each component something that could just re-render and replace itself again and I
[02:29:43]  think I think this this piece here is very important to the whole react it's what makes react react which means that this is why they're not interested in doing this they don
[02:29:55] 't mind using a compiler like Svelte even you know gets as long as they can keep composition I'm sure like Svelte today doesn't really have composition in the
[02:30:03]  same way you gotta like escape a level but maybe they're okay with that but they're not gonna give up their throw it away model the I but I do think the
[02:30:18]  future does put some pressure on it so we'll see how where that goes but I think I think it's very important to understand that like when people say oh was a mistake
[02:30:26]  for react not to do this it's like no they are following react to react's natural place right so you know this this this is kind of the difference right like my
[02:30:43]  I keep trying to find right ways to explain this to people but essentially like I've told you react renders pure reactivity renders effects like everything's effect like the
[02:30:55]  rendering is a is an effect not everything you can do derived data but essentially the rendering is effect and that that change in model is is is a profound one what's interesting is
[02:31:08]  all rendering arguably if you think about it is a combination of a pure stage and an effect stage so if you can separate them and keep that interaction clean you can play with the
[02:31:18]  pieces a bit and that's the place where I often see stuff like react solid or react not being that different because instead of being the components being the pure part it's
[02:31:27]  the derived state it's the it's the it's the memos and the like it's the it's the it's it's the signals it's the thing that runs
[02:31:36]  through your component tree that's that reactive data is the pure part and then the things that actually update the dom are the effects and we can keep that separation even with a
[02:31:50]  model that's split up this way react keeps it internal with fiber we put on the outside but there's huge analogies there except for that one principle around the component being the
[02:32:04]  thing that we render why would you need context yeah I mean dependency injection still powerful tool instead of having like a singleton you can actually like choose where you get your source
[02:32:28]  from like change providers I also think that for SSR is important because multiple requests can be handled on the same server multi-user scenario so tying it to the tree is
[02:32:37]  actually really great all right just catching up with chat here yeah sorry when I you could say static I think the static mental model is like create the component throw it away the
[02:33:00]  mental model isn't about mutation I think that's what he means so in that sense our mental model is not the same as theirs we have a consistent mental model that makes sense
[02:33:10]  but it's not like the react one all right I think people are in a pretty good place here there's always an intention I just we need more people I street it
[02:33:40] 's funny you think like maybe instead of streaming and educating I should just be writing some more docs but a certain point I'm hoping that people take this knowledge and come back and
[02:33:50]  contribute and use stuff and build the community up because it's a lot of work more work than I can do myself so this this is time well spent if people can understand
[02:34:01]  the stuff and even if that doesn't mean come to solid today take this knowledge with you to preact take this knowledge with you to quick and I hope to see you in
[02:34:11]  the future because if I if if I can help raise the base knowledge and then people contribute docs and articles and stuff we can build this up I I want to see react
[02:34:24] ivity succeed more than anything it's as I said the funny thing is I don't even know the answer to that question right now I I'm just telling people to look
[02:34:57]  around in the ecosystem build what they need and hopefully they'll have something good out of that the biggest thing is like there's more libraries out there than you know but like
[02:35:07]  I honestly can't answer this question at this point there's just a lot of stuff going on all right so does anyone have any more specific questions about this stuff like have we
[02:35:21]  covered this okay here's a question how do independent observers scale create a single one that would do all the work showing off that component doesn't rerender doesn't mean that
[02:35:28]  cost isn't on the leaves great point thank you and the truth of matter is solid actually groups a lot of computations together for this reason and why larger templates are beneficial there
[02:35:40]  is a slight cost difference even though the dx doesn't change and the mental model doesn't change as you change components there is like a performance consideration larger components will generally perform better
[02:35:51]  in solid just because like you break stuff up less and you can share it more so there it isn't just about being fine-grained it's not just about like
[02:36:02]  doing the finest upgrades solid actually does group updates together it's just I wanted to change it so it wasn't about components so if you have like largely static stuff that doesn't
[02:36:11]  impact it if you put layer it into lots of components and because it's that's how you organize stuff that doesn't impact what impacts it like or not significantly what impacts
[02:36:21]  it is degree of interactivity the app scale with the how interactive they are not with like the size of them and so like what I'm getting at is like it's the
[02:36:34]  little things like the control flow not rerunning and that being a logical place like control flow is a logical place to have the decision points to do like the render from rather
[02:36:45]  than at each component you don't need to like listen from each component you need to listen from the control flow that that is sort of the the mentality we what we produce isn
[02:36:56] 't exactly what you write structurally from a component standpoint even though we leave your code mostly alone alone it just like kind of feeds into less of these decision points where a lot
[02:37:08]  of solutions especially reactive ones or the hybrid ones that are reactive with the vdom we'll just say like every component is an effect and we don't do that so there
[02:37:17] 's trade-offs but it means that you're not I think we talked about this we don't we're not over wrapping with computeds or memos and you're not
[02:37:23]  over wrapping components with effects we just reduce that so and that's why solid generally has creation metrics similar to a virtual dom yet has the update performance of of the fastest reactive libraries
[02:37:35]  and that's having both of those pieces together is why it's the performance is so incredible it's not just a matter of like being reactive it actually um kind of
[02:37:46]  blends the benefits of both sides do you think people would actually enjoy me writing documentation on stream i don't i i write lots of articles and stuff it just oh man yes
[02:38:17]  it is a lot harder how does solid compare to view than plan vita unless quite i i honestly have no clue it's good that you mentioned this um how could we know until
[02:38:32]  we see what view generates i would suspect that it's actually very very similar um from what i saw i wouldn't when evan showed view vapor on screen i thought i
[02:38:42]  was looking at solid js compile code it was like literally like you just lifted it um and that's cool do you know you know what the challenge is it's ecosystem killer you
[02:38:53]  got to start over again the same way that we couldn't like continue from from react you right you they've got this thing where you can like put the vapor components in
[02:39:04]  the view tree um so technically you can use at the leaves but as you starting to see here the benefit is actually architecturally the way the data flows through the whole app the
[02:39:13]  other option is to start from the top but if you start from the top you don't get to use any of your existing view libraries maybe they'll convert to have a vapor
[02:39:20]  mode or whatnot but like this is a this is like an ecosystem resetter um and at which point view has to weigh how important that is and put towards prioritizing that
[02:39:32]  you know we'll see if they think it's the future versus like the fact that you know we've been building up an ecosystem on this since we started you know so like
[02:39:42]  it's possible like i i've talked about this in the past that view for the longest time was my great hope that like i wouldn't have to write a javas
[02:39:51] cript framework um but like i felt like i and i bugged evan about this for a couple years i was like hey just get rid of that vdom you just get
[02:39:59]  rid of it and it never really went anywhere but then solid finally started taking off and then they took notice so that's fine every you know lots of people taking notice from the
[02:40:09]  signals and all this stuff i i think we're going to see more and of this stuff like this is just the start as i i was saying um but i i don't
[02:40:17]  know how it's going to compare i assume it's going to be pretty sweet yeah yeah and i i've been looking at making this easier for people because people get kind
[02:40:37]  of pushed off they see like a seven kilobytes solid thing and they're like oh that's kind of big but the truth of matters you pull the reactivity it
[02:40:43] 's much smaller we could be smaller still i in solid 2.0 i imagine the reactive part will be easier to just use directly but like literally you can just import solidjs
[02:40:51]  right now and just use reactivity straight you don't need any of the other stuff yeah um and we have react solid state which lets you just like use it the way you
[02:41:00]  use mobx and react so you can use solid to you react once i never show this library off because like i'm kind of like i'm i'm a performance pur
[02:41:09] ist so when i think about it i go well you're going to be better using react directly and react state than at a reactive level i've i've been talking about how
[02:41:19]  the hybrids are kind of worse but yeah i mean you this is like old mobx style where you can be like with solid and then create signal and then you return
[02:41:28]  a function so essentially the top of the component never runs again and it's only the vdon that updates and reactive updates so there you go something that feels like solid inside
[02:41:37]  react you get to run once components it's basically view style essentially without any of views incredible optimizations so you're basically just stuck with react plus some but the the dx might
[02:41:50]  be nice not from what i've seen but i'm who knows maybe it can help with converting react to solid code at some point uh it's called view vapor you're
[02:42:12]  gonna have to i don't know uh evan did mention vapor uh when we were looking through this thing what did he say today's cause the term signal seems to also apply
[02:42:25]  fine-grained view updates bound to signals this is something views moving towards as well view is already fine-grained at a component tree level but per component level it
[02:42:33]  still currently uses compiler vdom hybrid model to achieve some level of fine grainedness and with some overhead that can be further shaved off where are you evan okay does he
[02:42:44]  say anymore no okay yeah anyways yeah it's called view vapor yeah what we've seen with chat gpt is like you get react code with some variables renamed it's not
[02:43:01]  very very reliable yeah and and view three was like a two stage or two i mean it wasn't as this there was view three composition api and then there's the
[02:43:22]  ref sugar so there's like a the ref sugar wasn't as painful but it was like a there's like a little bit of a sub step but it is interesting but
[02:43:29]  the thing is like we're in a time of change you're kidding yourself if you don't think server components are also this kind of thing happening right now just throwing that out
[02:43:47]  there well i mean what he said in the presentation is that you could basically opt in at a leaf level because you could basically it's like it's like today you can
[02:44:06]  take react and put grab a ref and then render solid in that ref under a react app you can basically do that because you could just kind of escape out and switch but you
[02:44:17]  can't interleave them very easily like it's possible that they could do child projections but the problem is like would the the child would be rendering vdom nodes like
[02:44:27]  the projection would be rendering vdom nodes and and the and the child would be like i don't understand vdom nodes like maybe you could do something special there but what they
[02:44:36] 've talked about so far has been basically like do regular view to a point and then opt in at a component level and everything below that in the subtree um to vapor
[02:44:46]  no no more angular today we're going to wait to talk to them more about signals i think i think server components are could very well be the future you should watch some of
[02:45:04]  my other streams if you haven't seen them i i did a whole stream on server components with x13 and also solid 1.6 i show i show i i show
[02:45:11]  an amazing demo in terms of what you can do with server components and solid um it's an experimental thing but it shows that it shows the potential here when you could deliver full
[02:45:21]  web pages at 13 kilobytes that just scale at that so i i think i i think i think that's really powerful and you should check that out all right you know
[02:45:30]  what i'm not going to stream all day i actually kind of wanted to see uh if the if the end of twitter is actually real is is that is that space still
[02:45:39]  happening it is happening 462 people in the space does anyone else want to know about the end of twitter replacing twitter or social media deep dive yeah i think i think we're
[02:45:49]  good on reactivity unless unless anyone has any more questions i think i'm going to call this a stream and thank you all for joining me all right why solid memos are
[02:46:01]  not lazy it was a decision at the time that i'm the pro they're most very likely going to be lazy in the next version all right cool see you all um
[02:46:12]  thanks for joining me today