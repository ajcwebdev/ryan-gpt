---
showLink: "https://www.youtube.com/watch?v=J0O69dGljx8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Mutable Signals Pt 2 - Solving Derivations"
description: ""
publishDate: "2025-07-18"
coverImage: "https://i.ytimg.com/vi/J0O69dGljx8/sddefault.jpg?v=68797f29"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

I will give you the first 2 and a half hours for you to process, then the rest.

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

[00:00:00]  check hello everyone and welcome to my stream today how are you all doing today say hi in the chat let me know you're alive i realized i watched back a couple of the
[00:00:14]  last videos and i've been i've been missing my trademark drinks so i'm i'm i'm bringing it back hello this is a little different it's not lemonade it
[00:00:25] 's uh suja which has lemon and cayenne and a bunch of stuff in it but all right sorry my audio doesn't sound quite right oh my mic's a little quiet
[00:00:41]  is that better yeah that's what's going on still getting used to the new setup here but i i think that sounds a lot better yeah okay cool check okay okay we
[00:00:57] 're gonna get started up right up here in a minute i'm just gonna open twitch and uh make sure we're going good over there as well all right nice backdrop but
[00:01:21]  you can't trust me after that green screen yeah i mean this is my actual backdrop to be fair that green screen was my actual office in a different room as you can see
[00:01:33]  i have the same lego on the shelf uh i haven't rebuilt my zelda collection yet but i've got the ghost busters car we've got the ghost
[00:01:41]  busters car we've got optimus prime grogu porsche 911 nissan gtr v spec and a bunch of other small ones we got group back there mini
[00:01:54]  root and rocket and yeah you might even see kelvin and hobbs at the top uh the first actually uh the base is actually a knockoff uh i just keep it
[00:02:13]  out not for display it's just like this could have a base out um it's like a cheap uh um it's just a cheap fender knockoff that i got at a
[00:02:23]  pawn shop one time i don't play bass very much maybe just when i'm recording some stuff on my own tracks yeah mr saul's right up there too yeah
[00:02:39]  um anyway how's everyone doing i'm back again after a week like kind of old school style well it's because i accumulated so much stuff i i ran out of time last
[00:02:53]  week i've been doing lots of research a lot of work i don't know if anybody got the chance to check out the example that i posted about 40 minutes ago but um
[00:03:01]  it's it's kind of a hint of what we're going to talk about today obviously i think this is as usual a very underdeveloped topic uh it's you
[00:03:12]  tend to get there when you're working on stuff that you know people haven't tried or seen before it's a it's a tricky balance i find as uh as uh someone
[00:03:23]  working on this stuff because like solid 2.0 isn't out yet so it kind of sucks to be showcasing this stuff and you're being like can't i use
[00:03:31]  it can't i use it it's like not really ready i i was fixing bugs like up to an hour ago or so like i you know and there's still probably more
[00:03:38]  bugs this is just a kind of proof of concept um but on the other hand it's important so that the knowledge starts like so people can start understanding where these things fit i
[00:03:51]  don't i don't know for me i i generally have a fairly good measure when i start like talking about stuff or type hyping up ideas it's basically when i
[00:03:59]  have a prototype when i have something that i can show that's the line i draw i find nothing more frustrating when people talk about some amazing thing that sounds impossible and some stuff
[00:04:11]  i show you today might sound impossible but then have nothing to show about it and just like oh yeah we solved everything but i'm not going to show you yet just get hyped
[00:04:19]  i i think that's i don't know it doesn't sit right with me i like i i know people come by it naturally because they're really excited about what they
[00:04:27] 're working on but it's like i i you had to either deal with this with benchmarks already in the past like basically until you prove it it doesn't exist as far as
[00:04:37]  i'm concerned which is hard because it sometimes you know creates a lot of noise right like uh god like just trying to navigate through um this past week has been a little
[00:04:49]  bit fun right um the remix guys are back at it again still saying a bunch of stuff have nothing to show and at the same time use it to try and position things such
[00:05:00]  a way that um you know they're calling out negatives on other solutions and stuff when they have no like they have you know i mean they have nothing to actually back up
[00:05:14]  what they're saying so it's kind of it's kind of like you you kind of like freeze by because you're like conceptually you know until they show something there's
[00:05:22]  nothing worth talking about but then on the other hand it's kind of like they're spouting a lot of stuff and you're like maybe someone should kind of fact check
[00:05:31]  them on that you know what i mean um it's interesting looks like those limited edition prescriptions with the jazz neck yeah does it does have the the neck contour more of jazz
[00:05:53]  bass but yeah uh i think the the pickup setup more p-based yeah all right all right have i killed enough time yet maybe i should tell the people on which that
[00:06:06]  i'm live or no no i i stream sorry on x now so it's really only the people on blue sky that don't know i'm live um maybe the people
[00:06:34]  that don't know if there's that many people coming over from blue sky but yeah i'm i'm i'm pretty excited about the topic today in general though because i
[00:07:00]  think it's one of two really major um developments that i want to see um kind of like i should put it like i want to see this exploration in these two areas go
[00:07:19]  a lot further than they have historically i was talking to someone earlier in the week about solid and they were like uh it was it was off one of the like remix threads
[00:07:28]  again and they were like i think you know react has shown one way of doing things solid has shown another way both those ways have hit their limit but if we want to do
[00:07:37]  something else we need to do something different and i'm like kind of but i don't feel signals and fine-grained reactivity have actually gotten to the where react is
[00:07:46]  along the path like i feel like solid 2 is a little bit like react 16 like like we're we're still on a point of uh refining right you know you
[00:07:59]  know i'm not saying that apis are going to change or something going to introduce a whole new way of doing things it's more just like there's little details like i
[00:08:08]  don't know if you remember back in the day even i guess before react 15 but like sometimes that state would update the state right away sometimes it won't there'd be
[00:08:14]  like little inconsistencies and we've ironed a lot of those out but react 16 was a big deal because it basically allowed reacting to rewrite the core from scratch the way
[00:08:24]  that made sense with everything they had learned the last five years and that's kind of where i'm at right now um of course reacts much bigger bigger team more people using it
[00:08:32]  even by that point so they they progress a lot quicker i think signals and framework uh and this kind of fine-grained architecture still have another three to five years before
[00:08:41]  they kind of top off where we are on the current technology right um i'm not saying it won't it's funny because react's kind of gone as far as it can
[00:08:49]  go in a certain way and that's why like we're getting to rscs and all that stuff i think you'll know when signals get there when everyone starts talking about
[00:08:57]  resumability i think that's towards the edge of where these models are but until we get to that point and that's what like is the defining feature i think there
[00:09:08] 's a lot of areas that we haven't explored in in these two specific areas async which i talked about a ton on my signals 2.0 stream and then derived or
[00:09:19]  so not drive them mutable state or mutable reactivity um anyways let's let's get started here now i i'm gonna kind of flip over because basically i've
[00:09:32]  been i've been working on hack mds i'm not going to hopefully drive the whole thing off hack mds but i i wrote a lot of stuff about stores and projections
[00:09:45]  the last few few weeks um because i kind of realized that while we had certain characteristics that were right and we're on the right path the implementations weren't good and there
[00:09:57]  was holes and it made me rethink the whole thing and i think finally in the last couple days i've kind of solidified on what i think the characteristics of these prim
[00:10:07] itives are it's it sounds crazy to spend so much time but it's really important right because the idea is that you can do a lot with only a few simple building
[00:10:24]  blocks so the more pressure you put it on that way the more powerful it needs to be right um so you know you have to kind of start going up do we break these
[00:10:35]  apart into different primitives what is what is their core philosophy what is the most sensible way should that they should behave okay so um yeah i've got some write-ups
[00:10:47]  they'll help guide our discussion today i've got a bunch of examples because i've been playing around including the one that i posted up on uh blue sky and x not too
[00:10:56]  long ago but i think this whole discussion starts with like why mutable reactivity why stores in the first place and um there's basically there's basically only a couple options
[00:11:15]  here when you start looking at the problem space and i'm actually going to pull up an article that i i saw um that i saw earlier uh what is it here um
[00:11:26]  uh sorry i'm gonna grab my bookmarks um yeah yeah jovi if you don't know instrumental in uh on preact in terms of the signals um implementation and pre
[00:11:47] act and kind of is looking at this and i i think this is a great article it's going to also serve a bit as the base of our discussion here and um i
[00:11:59] 'm just supposed to look here software is ugly you have to embrace it i i'm going to want to talk about i'm going to put that in a minute here but
[00:12:08]  i think i'll leave it a bit later in the stream it's just um i think what you're going to find over the course of of of my discussion today is there
[00:12:20]  are a lot of challenges with trying to beautify at the cost of semantics and part of the reason i've been able to do all the work i have so far
[00:12:37]  is because i didn't try to warp javascript to my own semantics i understood what i wanted and then understood what i could do with javascript and then everything
[00:12:51]  sort of flows from there if we if we had made signals and stores into a single primitive the way svelten view has i probably wouldn't be here on projections if
[00:13:02]  if if i'd gotten rid of the wrapping functions on computed or memoized values we probably wouldn't have landed on projections either like basically there's some kind of truth in the
[00:13:14]  physics or mechanics of things that if you get too far away from it like you just keep on hitting back into it it's like there's like rivers or like technology is
[00:13:26]  um discovered not invented in a sense like there's a certain science behind it like and if you keep on trying to like patch the holes to make it beautiful sometimes you you actually
[00:13:39]  end up making it harder down the road because you like really tried to steer the boat off course and the boat was gonna go that way anyways like the river was already there um
[00:13:51]  this is obviously some of my tension that i have with something like svelte and i think by the end of the stream you cannot understand like why sometimes it's just
[00:14:00]  not worth it and you have to be very careful understanding the difference between say using compilation for semantic uh to to optimize and using compilation to warp the semantics for say making
[00:14:15]  things easier because the first doesn't change how it like appears to work right like i'll give the react compiler some credit there they're trying really hard to make it so that
[00:14:31]  when you look at the code it works the same react mentality with or without the compiler but don't get me wrong if you look at the code that you'd get from
[00:14:40]  the react compiler without all the memorization and you just ran it i mean it would be the worst thing imaginable if react didn't have that compiler and had the vdom
[00:14:50]  it's literally the worst mental model um you could probably think of it would be like like when you understand the dom right i mean you're literally like let's just recreate everything
[00:15:02]  all the time just write some state follow the control flow you know play the pink plinko machine do do do do do do and you know essentially you know state update
[00:15:15]  do do do do do do um like essentially get to your end result but that's how react works so the fact that there is memoization all that stuff added under the hood
[00:15:30]  is just a benefit so by removing the syntax and actually just doing it it keeps the react mental model it doesn't warp what it's actually doing in a sense you could
[00:15:38]  say oh yeah it's hiding that it's memorizing and guarding all these values but the code you read is effectively doing what you expect to do to a certain degree like you
[00:15:48] 're calculating values and writing this function that runs this function that runs this function follows this branch follows this branch it's a it's a very different thing when you know like
[00:16:00]  people might have this complaint about solid jsx right like if you think that if you don't realize that our templating wraps the holes in functions you would have a pretty hard
[00:16:11]  time because it's it's kind of warped your perceived um semantics of what the templating is doing that being saying jsx officially has no semantics and we
[00:16:21]  could not use jsx so you know we're acknowledging that this is a different language you know and i think templating is a bit longer than that area but if you write
[00:16:31]  something that looks like javascript and it has different semantics like you remove function wrappers and do that you're in a different territory now and you're basically saying look
[00:16:42]  i've created my own language that's not javascript and if you're trying to like stay in line with javascript you're you're again kind of pad
[00:16:53] dling against the river you know what i mean so it's there is a certain about a bit of it that like recognize that say javascript is ugly at times and you
[00:17:09]  will see the the truth um yeah we'll talk about it i mean when we're working on r3 we were looking at um using non-store primitives but there
[00:17:27] 's something about the shape of the problem that gets you back to stores right i mean jovi's article is actually going to be really helpful um at looking at this um i
[00:17:38]  think um but yeah like what i'm trying to get at is we have to be careful right like my classic example is i used to make that uh meme joke you know
[00:17:55]  where um i mean it's i could probably find it it's on one of my talks what is it uh it's like in a number of my talks um where uh talk
[00:18:06]  certainly two seconds um um what's it world beyond components um where um it's like towards the end of it um i i i sometimes you know do this thing where
[00:18:44]  like look cement like a component's a function right we can do magic right like uh sorry i think i think i have an earlier version of the meme right right right i have
[00:18:58]  it here everybody's seen this everybody's seen this meme right where like there's like all this react stuff and then like felt like this right but the the the challenge is
[00:19:12]  that just because you write this doesn't mean it's not actually this so like this is an example of what svelte does with svelte or or three did with
[00:19:26]  count is not how javascript works this might be clunky as hell but it is actually how the react model works right so like to a degree i mean you could
[00:19:37]  say that the hook's a little magical the way like the re-render model and the way it hides in the background but my point is like if we are if we are
[00:19:50]  like one of the cool things both signals you do this right but if we're if if we're this we've we basically removed the language to make like express the idea
[00:20:06]  because we were focusing so much on kind of this short-term gain in ergonomics that we basically were like okay we don't want to flow downstream let's damn the river
[00:20:18]  and it's like well you're never going to get downstream then you know what are you going to do walk along the side instead of just taking the boat you know so
[00:20:25]  there there is we have to be very careful with what we use compilers for right and the the end result of this was react uh svelte went through a breaking
[00:20:37]  i mean you can still use svelte for components but svelte went through completely breaking um api change right like it happened because the went too far away from
[00:20:55]  the physics of it all and this is something you have to always be kind of conscious of when designing these systems anyway it's it's just i i don't know that
[00:21:14]  i know this is a bit of a tandem before i get into things but i've i've just been realizing through all my like you know i've been talking a lot about
[00:21:22]  education and and mental models and semantics and it's it's kind of crazy right because like the baseline react semantics when you remove all the hooks and all the mem
[00:21:37] os is conceptually as i said like the worst thing you could be doing right they have all these tools to make it actually work that's what reacts so amazing because it works
[00:21:49]  um um reasonably performant right that that's what makes react amazing it's the model shouldn't work right like conceptually right the compiler the bdom all these are tools
[00:22:02]  to let you just kind of write this system but if we live in a world right now where people look at react code and they're like oh yeah that's the norm that
[00:22:13]  makes sense like no wonder no one understands how anything works because if if you look at the model that shouldn't work and say oh yeah that makes a lot of sense to
[00:22:23]  me like and you know you don't have the background and experience to like understand how these things things work you know like you're already starting from such a weird deficit like if
[00:22:36]  you get trained on like this is the model how like how could anyone make sense of how things actually work um i think i think it's an interesting thing and we might
[00:22:50]  we'll probably talk more about the state of of like frameworks and perception of web dev when we get to this week in javascript later it's just it's just kind
[00:22:59]  of walking along this pathway of semantics and um syntactical like meaning to what we write and the impact our frameworks and tooling have on this it's kind of crazy
[00:23:15]  to expect people to actually understand the fundamentals of the web if literally the opposite um abstraction is the baseline that is is how people learn these days in europeans reactions exists only
[00:23:44]  because syntax because this syntax you mean like this like the keyword like class syntax and the way bindings work it's kind of funny like in knockout you just fat arrow everything
[00:23:58]  and then like everything would be automatically bound um the the ironic part about that is it actually led um like it actually led my old knockout um code to put everything in
[00:24:12]  the constructor anyways which moved us to functional components and off classes anyways it was just like this ironic thing because you basically have to call bind or use the fat arrow and coffee script
[00:24:21]  or whatever to actually get the binding to work the way it does another like oop languages so it's like almost to the point that you end up like not using the
[00:24:30]  classes it's kind of crazy but yes um composition patterns were awkward um because again react made sense to have the life cycles and then this was tricky both for you know this dot
[00:24:46]  set state but also for like binding event handlers it was just like the source of confusion and the funny thing is historically people working in javascript kind of understood this
[00:24:55]  to a degree there is a thing but if you can just remove that conception you know that thing it makes things simpler and easier to approach so in a sense hooks were designed to
[00:25:07]  sort of warp the semantics a little bit um so i mean like i'm not saying like anybody's not guilty of messing around with things a bit it's just like
[00:25:18]  is it a wrapper is it a compiler like the further you go down that path the the harder it is like the the stronger the volume meant you put it that could possibly imp
[00:25:36] ede you from going down that path in the future it's like i'm not going to go down that path but i'm not going to go down that path and i
[00:25:49] 'm not going to go down that path but i'm not going to go down that path and i'm not going to go down that path but i'm not going to go
[00:25:53]  down that path and i'm not going to go down that path and i'm not going to go down that path and i'm not going to go down that path and i
[00:25:58] 'm not going to go down that path and i'm not going to go down that path and i'm not going to go down that path and i'm not going to go
[00:26:03]  down that path and i'm not going to go down that path and i'm not going to go down that path and i'm not going to go down that path and i
[00:26:09] 'm not going to go down that path and i'm not going to go down that path the svelte 5 design which i've talked about before it's like it
[00:26:16] 's all fine that you're pretending like you don't have to worry about portability and reactivity but like the the problem is i'm not going to i'm just use
[00:26:23]  a solid playground because it's in front of me but it doesn't really matter i can just clear this out to write the code if you go something like uh let's
[00:26:34]  let's let's state equals um sorry dollar sign state something so this is your signal so you're making some kind of like hook let's say function my state right so you
[00:26:48] 're looking at composition patterns so you did this right makes sense because the way that this works in svelte you don't call it as a function the compiler manages that
[00:27:04]  for you technically these are functions under the hood but the compiler manages to you so you've removed that semantical part from the language but then if you want it to like
[00:27:12]  leave you can't just return it because any access to this thing is actually the value not it's like the compiler makes that this you can't pass the reactivity through
[00:27:23]  so you know view ref sugar was like okay let's like do something like this or actually on the way out it's like this this this double thing and they start coming with
[00:27:33]  weird semantics at a certain point you're just like freaking wrap it in a function right like god right it's a function make it a freaking function sorry um but when
[00:27:43]  you did this people are like what what what what the hell why would you wrap a value in a function like it's because secretly you have to know it's this like but
[00:27:55]  this makes no sense so stout just needed to find a syntax that was obscure enough and it's funny classes have become obscure enough that they could like basically let you write
[00:28:09]  the stuff and kind of like a declarative object like basically define the getters and they they could go in and wrap all the functions for you it's kind of like what
[00:28:16]  we do at jsx right they just need to find a syntax that was explicit like this is what i want or because wrapping with a function is not explicit enough to say this
[00:28:24]  is what i want like it's anything could be a function they needed something like that was like statically in that analyzable enough that they could like look at it and
[00:28:32]  that's basically why they ended up with classes it was just to hide the fact like the whole thing is because the problem with my state is now when you're in your
[00:28:40]  small component you know you would have to do something like this const my state equals i'm sorry state equals my state and then people were like well that's kind of awkward because
[00:28:54]  now you have to call it like a function you know what i mean like this is what is a solid js you know or like even better again because you can't mut
[00:29:04] ate a variable you just pass back if you want to set it you know maybe you did something like this so like like now don't get me wrong all these apis are
[00:29:24]  similar enough that they're interchangeable you can use views but the problem was that their corp primitive the baseline primitive that you're expected to use doesn't compose it's
[00:29:34]  a language feature and this is very common that baseline language features don't compose and can be intentional like and you can't make your own if statement or for loop you can
[00:29:44]  make a map function but you can't like make your own like syntactically it belongs to the language with runes react uh felt was like what if we had a reactive
[00:29:53]  language where it's intact actually belongs to the language this is what it looks like but it means composition becomes its own thing right you can't make your own for loop you
[00:30:02]  make for each or map it has to take a different form and it's a repercussion of going this direction i'm not saying necessarily there's lots of repercussions of going
[00:30:14]  this direction actually if we if we continue down the path we're going to go today but i i just kind of want to point out that we end up with classes here for
[00:30:23]  like the most indirect reason and it was basically because we were fighting javascript i see this a lot in the proposals too you know even people who use like uh you
[00:30:33]  know staked off value you know like uh view or preact and it's like at a certain point like this is all fancy it's a getter that's all nice
[00:30:42]  you know sometimes getters are nice especially when you nest data and we'll talk about that today because we're doing mutable nested reactivity but the problem is even
[00:30:53]  if you support this you have to be able to support the function call because if you want to move this around you're going to do this you always added the baseline regardless of
[00:31:08]  all these other mechanisms a signal is a function you can wrap it up you can come up with the different syntax for it but anything you do ultimately has to support this and
[00:31:19]  this wrapper isn't going to necessarily pass your is signal test because it is like reactivity is transitive so any function is going to potentially be reactive so there's a whole
[00:31:37]  this whole idea of trying to define the state class whatever link is basically all nice all convenient you know all these different ways you can do it to make reduce the syntax but
[00:31:49]  ultimately i'm sorry guys it's a function get over it there's no avoiding it hooks are invented to tell react where state and specific logics are otherwise react wouldn't know
[00:32:08]  what component is doing it's a black box correct well react still doesn't know what the component's doing just just to put it put it out there internally and you see
[00:32:16]  this when you see state libraries like like jota or whatever people are just making a state like a used state and they're just going flick you know there's like rerun
[00:32:23]  it react doesn't have this is why i use the plinko board example when talking about react react has no clue what happens you're just like invalidate this component and
[00:32:32]  then it's like okay i will figure it out as i go like i realized this i was trying to explain the difference between like signals architecture which is more like marble run
[00:32:42]  where like everything's kind of wired through and like goes and like you might only go down this side like there might be a drop that just drops straight down something else might like
[00:32:50]  go across the whole path like don't get me wrong looking at it might be a little bit harder at first because you're just like oh how do i traverse the thing but
[00:32:57]  on the other hand the framework or the technology knows where it goes there's only so many places it can go and it's all isolated um reacts plinko board um
[00:33:07]  is kind of like okay guys i know that here's the top of the machine so i'm just going to drop the chip and um you know at every decision point figure out
[00:33:19]  which way it goes Hooks fake of the state with destructuring classes are just more than a created for. Yeah, I mean, I get it because, yes
[00:33:48] , classes, see, this is the funny thing, classes make sense for React because each component owns its own state and that's the thing that we validate and render it
[00:33:59] . Classes make sense for reactivity models, but not fine-grained components, right? So, I mean, this is why it makes sense, like, to
[00:34:07]  a certain degree, why you might want to use classes. The only problem with classes is I wonder if it's the best way to model complicated logic, like complicated data structures
[00:34:22] . You can do classes of classes and classes, and honestly, it's practical. There might be, like, practical reasons for that, which I'll get into,
[00:34:28]  but it's interesting. Oh, nice. Vapor alpha is out. Good to know. Thanks. Oh, you just want to, I mean, people are trying
[00:34:47]  to, the problem, sorry, just really quick kind of the time. The problem is, um, signals are the observer pattern. They link both ways. The observer
[00:35:00]  is aware of its dependencies, the dependencies of, uh, uh, aware of its observer. And the reason for this is when, uh, dependency updates, it has to
[00:35:10]  tell the observer. So that one's like a given, right? Um, people subscribe to the dependency, but the other direction is important because when the observer reruns
[00:35:20] , it shouldn't keep its history forever. It should like dynamically create the dependencies. So like usually there's a cleanup function that it, basically it's a way that for
[00:35:30]  the observer to go like, okay, I don't need you anymore, but like, and there's been clever ways of trying to use weak maps or weak refs as
[00:35:38]  a way of keeping those links back and forth. So that like, if one of them drops off, the other one can go because the problem is that if you have
[00:35:44]  a long lasting signal, that derived value will never go away. Even if it was created as part of some specific tree, unless you manually, um, get rid of it
[00:35:52] , or you just a trick, like no one's listening to it, but effects, especially no one listens to effects. They just exist and they will never go away unless
[00:35:59]  you manually dispose them. We solve that a lot of modern frameworks with fine grain rendering by using the ownership model, which, um, pioneered by like, uh, surplus
[00:36:07]  and it's using solid. And we're now seeing in all the fine, uh, you know, granular, uh, fine grained renders. But that being
[00:36:16]  said, the proposal isn't that far. It's just the basic mechanism. So they're trying to like keep those links in, in structures. First of all, maps
[00:36:26]  are too slow to begin with. If you look at it, uh, like alien signals use the link lists, um, solid uses plain, uh, 1.0 uses
[00:36:33] , uh, plain arrays. Um, but, you know, and, but uses like a smart way of like not reallocating and like shifting stuff around.
[00:36:42]  Like this, this is a performance critical part of it because of the, the double linking and weak refs and weak maps are just slower to access. Um, I've
[00:36:51]  actually had some trouble with store designs around this. Like there's places where I'm like accepting of the performance, but other places where it's tricky, generally speaking, weak
[00:36:59]  max and ref refs are lower. And when they're in a hotspot, this is actually a noticeable thing. So that's why there's concerns there. Yeah
[00:37:08] . I mean, classes are, are great. Um, but I, I'm going to talk about stores because I think stores remove 90% of the use case for classes
[00:37:25] . Um, yeah, arguably, but I think it's also the shape of the problem. Yeah. Yeah. Okay. Yeah. See, they're doing it all
[00:37:52]  in one. I mean, we've seen what this looks like already from benchmarks. They've been leaking this for like four or five months. So we've, we
[00:37:59] 've kind of already looked at this, but, um, yeah, this is when they like, this is, this is modern view happening, which is very, very cool
[00:38:10] . Okay. So I guess I should just get into Jovi's article. Cause I, like, I was going to talk about increment like part is when I said
[00:38:22]  that earlier, there's, there's basically two ways to go with, with it. I wanted to kind of get one of the ways out of the way, um,
[00:38:29]  that isn't Jovi's article, which is incremental computation. The problem is like, pretend you have a big list like to do's and, uh, like, you
[00:38:38]  know, and that's not even a big list, but pretend you have a list of objects that have certain properties on them, you know? So it's, it
[00:38:45] 's a nested list. Right. And you put that in a signal and we actually have, you know, like, if you go to the solid JS website and say
[00:38:53]  like the store example, we actually have, you know, where's the tutorial and, you know, we have the, like, why do you store thing? Right.
[00:39:03]  Um, where's the stores nested reactivity that we actually show Joe, basically Jovi's article in here. But the problem is like, if you don't
[00:39:11]  use nested reactivity, this is what you have. When you add a to do, you clone the list and add the new to do. Um, when you toggle
[00:39:18]  them, you map over it. And again, you have to clone the list and then put the new item in. And this is because most of the items, the list
[00:39:26]  stay the same, but you, you basically need to basically like, sorry, I said basically most multiple times, um, you need to create a new object here because
[00:39:36]  otherwise, like, if you just mutated, no one knows anything changed. The signal is immutable. This is one source. So you have to make the change at
[00:39:45]  the source. If you want it to do it. And if you just mutate one item here, we can't use referential diffing. You have to use a
[00:39:54]  key or be keyed by index, essentially. Like if this is an interesting choice for solid that we, we have our four component, but the idea is if you
[00:40:02] 're going to go down this way, we expect you to preserve immutability. By cloning this object, we go, okay, in this four, it is a
[00:40:12]  new object. That's the one row we have to re-render. So it's smart. It goes through and it, if I, if I go through here and
[00:40:19]  I look at the console logs, if I remember correctly, and I click, you know, something like add to do, we're going to see creating this. And then
[00:40:26]  if I add another one, it's only create the new one, it didn't recreate all of them. Right. But every time I change the state, it's
[00:40:38]  also recreating that row, which is kind of wasteful, right? It's because it has no choice. That's the only way it can communicate the change and
[00:40:52]  it needs to do it immutably. Okay. So the reason this works at least reasonably decent is that four is doing a diff. It's doing a very basic diff
[00:41:07] , a shallow referential diff. Um, it goes, have the reference changed recreate or not, right? In react, it actually recreates all the rows,
[00:41:16]  but they're BDOM, not real DOM. And then it goes through and goes, oh, um, do these keys match? If they do skip, well,
[00:41:26]  it's not skip. It's actually dig deeper, but it's not like a replace operation. Right. Um, see, what's interesting about a referential loop
[00:41:36]  like this is we can skip, we can go, oh, it's the same exact object, which means you're not mutating because this is immutable. We know
[00:41:41]  nothing below it could have possibly changed. Whereas in react, because it's key based and it's a new thing every time, like you just map over it. They don
[00:41:52] 't know if anything further down has changed. They, they, they can go, okay, we've matched up the things. We know that this item is no longer in
[00:41:58]  the list. We can get rid of it. We know this item is new. We can create it. But when they match the keys, they have to be like,
[00:42:04]  okay, well, it's the same object, but it could have changed. So let's keep on diffing. And eventually it'll go down and see that the,
[00:42:12]  the to do's change and then update that one place in the DOM, which is cool because comparatively here, this naive approach was with solid or fine grained render actually
[00:42:23]  recreates the whole div. A lot of people get by on this with cheap stuff because creating one DOM element is more expensive than updating one attribute on, on something.
[00:42:35]  but people get away with this. It's not great, but it's like the baseline with signals. But this, this works, you know, in react because reacts the
[00:42:47]  V don't, right? Because when it goes in, it actually does more diffing than our four does. It's a deep diffing system. Now, what if
[00:42:56]  you're not going straight into react? What if you have other things that you have a filter? What if you're doing other operations? And you're like, this
[00:43:07]  is very wasteful that basically at every step of the chain, I have to clone the tree, then diff the tree, then clone the tree. And then like,
[00:43:17]  you end up with this like diff of diff of diff of diff of diff, uh, kind of to know what changed just to eventually get it to react. We're reacting
[00:43:25]  to re-render everything in the V DOM and yet diff again. Like this is the whole cycle. So the solution was, uh, the best one that I've
[00:43:33]  seen that I can point to is Signia, uh, that was created by TL draw. Right. Um, and docks incrementally computed signals. Okay. But
[00:43:52]  you have to understand two things about incrementally computed signals. It lets the, they still calculate the diff and pass it through, you know, and it's one signal,
[00:44:03]  you know, chain of signals, but it, what it also does is yeah, diffs don't come for free. They, they also pass down the diffing information
[00:44:10] . Um, which means that generally when you write your code, you have, you actually start writing stuff instead of just like adding something to an array or like the beautiful
[00:44:21]  thing about, uh, uh, an operation in a immutable dipping scenario is you just have the function or next state equals function of current state plus, you know, input
[00:44:36]  or action or whatever. So you just have to describe what the next state is, which in this case is sorry, add to do clone the list with another item on
[00:44:45]  the end. Like this is very declarative, very simple to write. The problem is if you, if you need to describe a diff and compare diffs, you're
[00:44:54]  actually going to be like, add this at location. This don't get me wrong. You can make object form. Immer has a diff like pattern. That's like close
[00:45:01]  to the standard, but essentially you're describing, um, this change and it has to pass through. Now there's one other problem. diffs. These discrete changes
[00:45:13]  are events, right? See, when you do this, every time you add it, you actually change the state. So the first event comes in, oh, I'm
[00:45:22]  adding a to do now to do is from this step forward, have this extra information comes in again, another to do, and that's your projected state. It actually enc
[00:45:31] odes that information. That's why it's doing all that work. But if you're doing, if you're communicating in diffs, you have to make sure that
[00:45:41]  anything that could possibly need that in the future has it. So you, you can't just communicate in one diff. You have to keep a history of this because signals might
[00:45:49]  be lossy. You might be reading the state now and then not reading it later and then coming back to it. Like there's gaps. And even in terms of communication
[00:45:59] , like it's only cares about what the current state is. So in a sense you, because you can't lose the diffing information, otherwise you don't get
[00:46:07]  the correct state. You actually have to keep a history and you can't just only communicate in diffs because do you keep an infinite history? Like eventually something has to reconcile
[00:46:16]  down to the value. So like if you look in here, they have this whole thing where they're like history length equals 10, right? That's reasonable. And
[00:46:25]  basically saying if it gets past 10, we just bail out and do it again. That's a reasonable approach. Don't get me wrong. But like you're writing much
[00:46:34] . This, this, this is, um, map array function, by the way, this is a way like mapping something without running all the items in the list in a
[00:46:41]  generic way, like kind of like what you get in our core component. So, but it's custom because you can write your own logic here. Right. But what
[00:46:47]  my point is like, it's difficult at times to write stuff as diffs, you need to create history. You lose events and you're still dealing with one signal,
[00:47:00]  which means that like everything still gets notified. The big advantage of this is with communicating diffs to diffs to diffs is in theory, you can use that diff
[00:47:10]  information to create smarter diffs down the chain, which means that ultimately instead of like actually making the projected value and then diffing it again, like going through the process of
[00:47:24]  comparing the values and making the value and diffing it again, something like this could allow you to make the next diff, like the description, like the patch notes, like
[00:47:34]  add this, remove this from the patch notes coming in as an input. And in, so instead of actually doing a diff operation, you just basically create the next diff
[00:47:45]  and patch it. So it's more efficient because you actually save on doing diffing along the whole tree. You just take, you just communicate in these patches. So you
[00:47:54]  get the next patch information, create the path for you from the parent, and then apply that to your own data and communicate your patch down to anyone who listens to you.
[00:48:03]  And they can create their own patches from your patches and then so on. So this is an efficient way of managing the fact that the state's immutable. And if
[00:48:14]  you see here, like this method, they're using like immer to do the diffing, which is a great immutable library for doing this because it makes it easy because
[00:48:23]  the what's cool about immer, even though you're not seeing it here, because it's like literally you're talking in this, you're like, if it types a
[00:48:29]  number, or if the operation is add, you know, like, because you're if the operation is replaced, like, but what immer generally does, is it lets
[00:48:38]  you write things in a mutable way, and then it just automatically produces the right immutable option objects for you. So like under the hood, immer might do this cl
[00:48:49] oning and map function, sort of map function and cloning and all this stuff for you. But you just write like, to do stop push, or to do is
[00:49:00]  one dot completed equals true. Like, it, like, it basically saves you from running this. So it's even more terse than the immutable operations. But ultimately
[00:49:14] , once you're in diff territory, that's not the API you're dealing with. Like this, this is that it's using immer producer patches. But does this
[00:49:22]  look like immer code to you? No, you're, you're like, you're, you, you have a big switch statement to handle the history of events and then
[00:49:29]  apply them and stuff. And don't get me wrong, this is kind of like how operate, uh, optimistic updates work. Um, a lot of times, but if
[00:49:37]  you, and this is an improvement because you're, you're not, you're not, you're not realizing the data just to diff it again, to create the diff
[00:49:47] , to realize it, to diff it, to realize it, to diff it, to realize, to diff it, you're actually, for the most part, going
[00:49:54]  down just on these patches. And then it goes all the way to the end. So it's, there's benefits here. There's still places where I think when you
[00:50:05] 're coming in for an event system, converting them into, uh, patch descriptions and getting them in, it actually makes a ton of sense. Um, it's just
[00:50:15] , I think we can do better than try and force, keep everything in a single immutable signal. The reason that it makes sense here is because ultimately Persignia,
[00:50:26]  at the end of the line, after they do all this work, they know that they're feeding back into React, which means it's all just one big tunnel and React
[00:50:32] 's going to diff it again anyway. So it's like, they don't get any benefit of making this more than one signal. No. Length signal is like
[00:50:48]  a writable signal. It's, uh, it's hard. Uh, it's funny because as I said, we haven't released in Solve 1.0,
[00:50:56]  but I've been talking about this concept for like four years now. And it was like, it was just something that like, I didn't bother releasing 1.0
[00:51:02]  because someone could just go literally write it in two lines of code in solid. But like, I didn't have a reason to because I hadn't consolidated the API. So
[00:51:10]  I hadn't got to a point where I was thinking of it as like just, uh, putting a signal in a memo where if we viewed around and say that some signals
[00:51:19]  are tracked and we'll get to it, some stores are tracked. So they're actually projections of stores. Um, then it gives an API, but stores themselves are
[00:51:29]  different because, uh, a link signal is still just one signal. It still has these characteristics that if you, um, sure you can derive it from something, but it
[00:51:42]  still returns the next value, the whole blob of it, right? Like signals, same thing. Someone has to diff, right? So yeah, it's not quite
[00:51:52]  the same thing. Yeah. I don't know. Every benchmark that I've ever done with weak things has been slower every time. I was trying to just like six months
[00:52:09]  ago when I was first working on stores and I was like, yeah, definitely slower. I don't know. Yeah. Yeah. Yeah. Yeah. Yeah. Like
[00:52:32]  don't, it's like, it's like when you do stuff with like CQRS or whatnot, like dev loves this stuff. Um, just, you know
[00:52:39] , like there, it is incredibly powerful way to model things. I'm just saying that like at your baseline in, in the signals library, I had to see if there
[00:52:50]  was an alternative, right? Well, there is an alternative instead of having one signal have many signals, but there are, there are consequences of, of this, right
[00:53:02] ? So I've covered a lot of this in stream before, but we'll, I, again, we need this kind of baseline thing, uh, to, to be
[00:53:09]  able to talk about this. Right. So, okay. So Jovi, uh, react, uh, core team, big, um, part of the, the
[00:53:21]  optimizing the signals implementation and react. Right. Um, let's, let's, let's look at what the alternative looks like. Cause the funny thing about the alternative is
[00:53:35]  this is what I used to do in knockout. Right. So I didn't have this hook center state match. Let's typical react. Come on. So he
[00:53:41] 's, he's using to do's to do's is a great example. In fact, the react compiler used to do's too, cause which is, was always a
[00:53:47]  really fun thing because I mean, this was the point of my whole conference talk. I forget if I, if I show it, but at the, at the beginning of
[00:53:55]  the, of the conference talk, react showed this, uh, showed this to do list. Right. But they, what they were trying to show is that like there's
[00:54:06]  to do's, you know, um, but they also, um, they also added like a bunch of other stuff. Right. And like they added like completed and
[00:54:20]  like a color picker and all, all these things. Right. And the problem is as their component got more complicated, um, with all this, with all the stuff
[00:54:31]  they had to add, you know, memos and use memo and like use callback and all these things to memorize it because changing the color had nothing to do with
[00:54:42]  the to list, but everything is, you know, tied together. Right. It's kind of obvious that when you have like, you, you don't even need
[00:54:48]  to go this crazy. You hit this problem react anyways, because as I said, it literally has to go through all the components. Right. Um, like it's smart
[00:54:57]  enough to not like go into the components when it matches the, um, well, actually even when it matches the key, it still has to like, it's still possible
[00:55:06]  that a prop change would cause could cause the something to update. Right. So like it's, as I said, it's not, it's not that simple.
[00:55:15]  And then like the, this was like their memoized compiler initial run where they showed like it, but no one actually wrote this code, but it like showed like what was
[00:55:25]  going on. And funny thing is, it's actually a lot like spelled three and four just on the side note. But what I'm getting at is, um,
[00:55:37]  this is the problem of making in a sense, when you have a component that reruns, you're making the whole thing like one signal, or, you know, like
[00:55:49] , like it's, it's not just the to do's the whole cup. Now all the state in this component is tied together. And, um, what Joey's
[00:55:59]  doing here. Yeah. See, he's doing the immutable change, all this stuff, right? Well, functional this purchase of drawbacks, your components become dumping
[00:56:06]  ground for both presentation logic. Yeah. Let's full screen this. Um, state is scattered across multiple use state declarations. Um, I'm okay with that, but
[00:56:18]  okay. Let's, let's say no clear domain model exists. Physicons like to do to this don't exist in your first class entity to code. So they
[00:56:25] 're playing. Okay. Arguably it's, it's less clean, you know, especially if it's something that you're going to reuse performance is real. Every state
[00:56:31]  change triggers component to re-render and we're only supposed to part of the UI needs update. Yes. Right. Like the best case is what I showed where it
[00:56:39]  just knows to re render, um, because props don't change. It knows to only re-render the, the one item that changed, but even like no amount of
[00:56:49]  fancy memoization even changes the fact that if you are the thing that changed, you still have to run through that tree. You have to re-run the map.
[00:56:56]  You have to re-run like the loop. Um, even if you're just changing a property on an item and not moving anything around, this is unavoidable in
[00:57:04]  the react model here when the state is hoisted. Um, unless you try and pull the state outside because react has no clue what's going on. They don't
[00:57:13]  know until they actually render it. And to predict signals is a different approach. Um, yeah. Yeah. I've never seen this approach before. So now look what he
[00:57:29]  did. He made each to do into its own object with signals on it. And this, this takes me back to knockout cause this is what we did. We
[00:57:39]  had domain models made in backbone at the time, and we would make view models that essentially were like this. If like, where you just like, basically every time you got
[00:57:51]  frustrated from the server, you would map through it and go, okay, do I already have this to do? If not, I have to map it into like signal equipment
[00:58:02] . So I have to take the, the internal thing. Like for a crate from the client, it's not a big deal, but picture synchronizing state from the
[00:58:08]  server. Um, here, each to use self-contained model, its own state behavior, but there's benefits to this, right? Because now when completed changes,
[00:58:17]  um, technically speaking, we don't have to notify the, the owning component of the to-dos that it updated. We just have to really notify the thing that
[00:58:31]  uses completed, right? Here are the two self-contained models, state behavior, the text related signals can be observed and updated. And apparently this means we only re
[00:58:38] -enter the parts that are subscribed to these properties rather than everything in the two lists that we do with hooks. So then he's like, okay, well let's add
[00:58:46]  a to-do list. So see how he's doing. Like when we add, we, we immutably clone and then create the to-do, um,
[00:58:54]  and then filter this. And what you're going to notice here, I mean, this is perfectly fine. It's just, you have a signal of to-dos
[00:59:00]  and inside, um, the, the, this list of to-dos, you also have signals and signals, right? This is how the signals work in the JS framework
[00:59:09]  benchmark. Side note, like, uh, the, the non-store implementation, we basically nest signals and signals. Um, he's using getters here, which
[00:59:18]  are nice because they kind of, um, um, now it's just like to-do dot completed instead of like completed dot value. Um, and it's also nice
[00:59:31]  because now it's not to-dos dot value, it's to-dos, um, or I guess it is actually dot items. Um, but yeah, I
[00:59:43]  mean, yeah, I mean, this is, he could have just kept this value. It doesn't really matter, but, um, he has to wrap it again because
[00:59:53]  of this object, um, having the, the other items on it, you can't like merge it into it, right? Like just because he wanted to add these
[01:00:00]  to the to-do list, he had to, um, basically do another wrapper. This is pretty common. Um, and then he added the actions. One comment that
[01:00:09]  I made when I saw this right away is I recommend this pattern a lot in solid. Um, uh, it doesn't need to be a class. You can just,
[01:00:18]  this could be a class, but you could return an object. The thing is, I usually suggest returning a tuple because that way, see, the problem is that you
[01:00:25]  can't, you can destructure these and you can't destructure these. Some people will be very tempted to just like destructure items, add and remove, and
[01:00:33]  you're break free activity. Whereas if you say the first thing is the model or the to-dos and the second thing is the actions, people are free to destructure
[01:00:40]  it. What I mean by that is people can do stuff like, like, uh, const to-dos add remove equals create to-do list. Now, um
[01:00:57] , this is fine when it's, uh, shallow, but, um, it gets a little bit more awkward. Sorry. It gets a little bit more awkward, um
[01:01:10] , in this situation specifically, because if you look at it, each to-do each to-do also has like, uh, a toggle action, um, and
[01:01:18]  the ability to have a setter, in fact, to set the text. So it has get and set text. So they're kind of like, it's nice this
[01:01:26]  way because now when he gets the to-dos, he doesn't have an array. He like the, like, it's not like to-do zero is an
[01:01:33]  array of the model and the actions. This composes nicer. I agree. Um, but it has other implications to get to in a minute. But anyways, let's
[01:01:42]  continue to-do list return state model. And that's the computer signal that automatically went blah, blah, blah. Um, yeah. Yeah. What's kind of
[01:01:56]  interesting about this. I mean, this is fine. This could have also just not been a computer signal. Like you could just put list of value.length in one of
[01:02:02]  these. It's slightly more expensive, but it just, but you, you actually see here that you, there's actually calculations being made and then being wrapped. And
[01:02:14]  I mean, once you're done this work of mapping, you're in much better state. It is a little bit awkward. As I said, is you get raw data
[01:02:22]  from the server. And then like in a to-dos that's client only, that's fine. But when you get raw data from the server and you're like,
[01:02:28]  suddenly you, you, you're literally mapping models and diffing, shallow diffing models to get them into their view model form. But yeah, the benefits and action use
[01:02:39]  context to-do list, right? So he's just bringing this in. Um, to be fair, he probably could have created it too. It doesn't really
[01:02:48]  matter because it's signals. Um, and he's showing he can test it separately. He's showing that only we rendered this to-do signals change. So basically the
[01:02:56]  to-do item component, and actually I think Preact is smart enough that it actually knows to just do the class name. Stronger than that, when we use Pre
[01:03:07] act, we could even use the box variant of our signal, it would directly update the DOM attribute or text note. We can also further optimize granularity by using new
[01:03:15]  tutorials like show and pour. So it turns out Preact has a mode where it works like solid, basically. It does fine-grained updates and it has fine-
[01:03:25] grained control flow. Um, if you use all this stuff. And so your, your Preact code will look just like solid, except it'll have a useless virtual
[01:03:33]  DOM tacked on. But technically speaking, other than the unnecessary overhead of supporting, um, also reacts model, uh, it looks like Preact actually has pretty much
[01:03:45]  all the characteristics of fine-grained rendering. Um, so yes, this is, this is the win, right? Like basically when you switch completed, it literally only
[01:03:57]  like updates the class name on the list element. It doesn't rerun any components. Um, so conclusion, better testability, improved usability and has again. So
[01:04:06]  yeah, this is all great. Next time you find if I'm branding that consider whether bonds and dedicated model, right? Well, people hit this all the time in React
[01:04:13]  because realistically in a simple case, you might do this, but in real use case, you're going to just reach for a third party library. What's cool is
[01:04:24]  this is why solid doesn't have zoo stand and Jota and all these different state libraries because people just do the, do something like this. But if you've ever used
[01:04:33]  something like this for a long period of time, as I said, especially with managing data from the server, whatever you realize that this mapping gets kind of crazy over time because
[01:04:43]  you're always taking something that's not reactive and mapping it to something reactive. It's just like this constant effort. And back in the day, Ryan Florence came up
[01:04:54]  with a great demo to show the overhead of that, um, the DB Mon demo. Um, and honestly, no one bothered doing this. Like, it's funny.
[01:05:05]  Uh, I don't know if you've ever seen DB Mon, but, uh, uh, do you be Mon paint refresh? I probably showed it on the stream
[01:05:13] , but let's, let's, let's, uh, JS. God, I can never remember the name of the repo. Maybe I got to do this one word
[01:05:23] . Can I point this is solids implementation, but can I point it? Did I point it back to, why didn't I point it back to the original? Yeah
[01:05:36] . I think it was called the JS refresh JS paint refresh Benchmark. God, I'm Uh, I, I almost want to go to medium and see if I
[01:05:56]  can grab one of my old articles about, uh, um, Benchmarking and JavaScript frameworks. Cause I feel like, I feel like I've definitely backlink
[01:06:09] ed it there. I thought I wrote one. I thought I wrote one. That's like, like literally like goes through all the different types of benchmarking.
[01:06:46]  It has like an image of Mickey mouse in it. No. Talk about the three types of rendering. No. Oh yeah. Understanding JavaScript UI benchmarking. How did
[01:07:11]  I miss this? Yeah. Sorry. I was, I, I turned away from the, from the mic for a second while I was looking over here. Thank you.
[01:07:26]  Yes. This one. It's funny. I was literally saying the name of JS repaint perfs, but. Uh, all right. The reason to look at
[01:07:36]  this for two seconds is that, um, uh, sorry. I have to have to go to Twitch to open the link. Uh, I actually want to go to
[01:07:52]  the GitHub though. This is, this is the benchmark. I think people have seen this thing before the stock ticker thing, but, um, what I wanted to do
[01:08:03]  is actually find the actual repo. Yeah. Sorry. I clicked on the wrong link. Yes. This one. All right. Sweet. The reason I wanted to look
[01:08:19]  at the actual repo is that, um, I said Ryan Florence made the original version of this demo, but what's cool about this is you can see how the reason is
[01:08:31]  people look at react and in rap, this is like react, uh, great class. Like this this is ancient. Okay. Lifecycle render function. And you just
[01:08:41]  describe your UI is mapping over and stuff. And this react version basically just works. Um, sort of what's the app component. Yeah. I think these are the wra
[01:08:52] ppers. Okay. Like, okay. It's the, the test runner anyways, but like the majority of the wrap of the app is just like this table that gets rendered
[01:09:01]  and you just literally go map, map. It's like a list in a list, map, map. Okay. Now the, the reason I mentioned this is this
[01:09:11]  works really perform fairly performantly. See knockout was getting killed here because the, the knockout version also did that. It literally just made one observable array, which
[01:09:22]  is basically, um, a signal that, that is that updates for each array and index one observable array. It's not even an observable array inside an observable
[01:09:34]  array. It's just literally like, I'm super lazy. And then inside the thing, they like data bind. Where is it? Data bind, uh, attribute
[01:09:43] . Where's this? Where's the loop? Um, data bind. TR table. Yeah. For each databases. And then for, and yeah, sorry, they
[01:09:58] , they have virtual bindings here for each last thing. So it just puts two loops in, but it doesn't even bother wrapping the other one in the observable array
[01:10:07] . So basically it's just like having one signal re blast the hold on every time. So obviously this is way slower than react. But my point is the reason is
[01:10:15]  to write the performant version of this where you have an array of arrays. And I've, I've done, I've been in this situation before and you are getting
[01:10:26]  naked data back. Like I've never been in a situation where I needed to blast it at like 60 frames per second, but you're getting big naked data back.
[01:10:35]  You need to do better in the observable array. So you have to actually literally go through each object. Find if you have a reference, maybe stored in like a set
[01:10:44]  or it's already in this array or something. And then if you don't create a view model where you create observables for each property, if you do find that view
[01:10:53]  model and then diff the differences in values and then, um, um, uh, like compare the, the, you know, update the signals that need to update.
[01:11:06]  But essentially you're, you're the code for this is way harder than the react version. Cause you're not just like doing the declarative part here, which is mapping
[01:11:15]  in the view like this. You're also over here mapping over the data, like a map of a map and matching it up and diffing it to make sure it works
[01:11:24] . No one in knockout basically spent the time to do this. And this is kind of part of why these old approaches died, but it's also the reason that
[01:11:34]  I created solid JS. Cause I realized with proxies, I didn't need to map anymore. I could literally create the stuff as I read it in the view and
[01:11:44]  get the mapping automatically. Um, so we didn't need to do this. Cause like if, uh, if, where is it solid DB, the solid DB, DB
[01:11:53] , DB mon implementation. And again, this is ancient. Um, I don't know if I've updated this in like five years, four years ago. Okay.
[01:12:00]  Um, I probably just cause I updated the solid 1.0. This is way older. It's actually just a bunch of for loops. There's nothing fancy here.
[01:12:12]  The, the, the key is we created a store and then we call this magic function called reconcile. And this says, diff the data that comes in fresh from the
[01:12:25]  server every time, and then only notify those signals. And ta-da, we're back to declarative and we're not manually mapping. See, the, the,
[01:12:33]  the problem is generally speaking, I've been here. This starts good ends very badly. Um, this is where we got to like, I add giant knockout apps
[01:12:46]  that add dozens of these stores. And then you'd create these data structures and they get more nested. Now there are some qualities of these reactive solutions that I actually quite
[01:12:59]  like. Um, but the, the part that you definitely don't like is the need to map it. Like we kind of hint at it, the solid tutorial.
[01:13:09]  Like it's not that hard, but if, if I solve the solid tutorial and create, you know, add to do creates a signal and then it creates, um,
[01:13:16]  like I'm basically doing what Jovi's doing in this example. I'm, I'm basically every time I add it to do, I actually create a new signal for
[01:13:23]  it being completed. Um, and then, you know, completed set completed. So I have my action and my my read, so to speak. Um, and then
[01:13:32]  when I toggle, I just find the item and go through, this is cleaner. Now, when I do this, when I check it, it's not going to console
[01:13:41]  log that we've recreated F GD, right? So we've won the re-render battle, but realistically, like this just gets worse and worse as you
[01:13:52]  scale, right? Um, this and this, this and this, and if that data coming in is more than just text, it's objects, you're going to need
[01:14:01]  to compare in very similar way to react. Like, am I dealing with the same model, compare IDs, do the lookup, do I already have an existing, because
[01:14:07]  the reason is the way the, these systems don't re-render is that the references don't change. It it's the same to do model, right? With
[01:14:16]  the, you have, you can't just replace the model that will re-render the row. You need to go, even if you match on it with the same key
[01:14:24] , you have to go in and update the signals inside to get the fine grained updates. And to be fair, react does that same deeper move, but they, they
[01:14:33]  do it while they're rendering. Um, and here we're kind of, we'd have to manually do it while we're mapping. So it means we map over
[01:14:42]  twice and that is just wasted work. So that is, this is why I created stores to prove Ryan Florence wrong. Um, essentially. Um, and I think you naturally
[01:14:57]  get to this point. I think view and Svelte have gotten there. I think preact is going to get there soon, but this, this is a natural
[01:15:08]  evolution of, of, of getting into the react. Now, not all stores are created equal. I'll say that much. So let's talk about that. Yeah
[01:15:32] . Thanks Jack. Yeah. Sorry. I, I, it's hard. I haven't quite got used to my setup. Like I have my camera here and my mic
[01:15:41]  here. So when I'm talking to you guys and talking to chat, I'm good. But then I go and look over to my computer and it's like echo
[01:15:49]  back to you. I mean, there's always the echo, but it sounds more directed anyways, but essentially it's because for a period of time, all the benchmarks are
[01:16:04]  basically spamming and dipping. React is really good at dipping signals libraries. We're not good at dipping. They had the potential to be really granular in their updates,
[01:16:13]  but when you make double nested objects and you start doing this mapping and stuff, you could probably get still fairly performant, but the logic just explodes in complexity, which
[01:16:24]  is why, as I said, while Jovi's article is a very good starting point and what people should do more people in react are kind of already doing that by
[01:16:34]  going to a third party state library. Um, we needed better tools than just doing that. Don't get me wrong for simple stuff, go for it. You know,
[01:16:42]  uh, there's a reason this is the fastest approach on the JS framework benchmark because it's all client side. There's no mapping. When you get to the real world
[01:16:49] , you need to recognize that there are cases where dipping happens. As soon as you leave the environment that you started, when you're in the same environment, I think
[01:17:00]  can get away very far without any kind of dipping, right? If you're only on the client using signals and stuff like this is a no brainer. It will just
[01:17:08]  always be better than what react is doing. When you're talking cross environment, they have a real reason. And the funny thing is react started as a cross environment. He
[01:17:17]  like before he created react, he created fax.js. He was thinking about the server right from the beginning. Jordan walk was, and I think it's, yeah
[01:17:26] , it's not about like being like, multi-platform, like supporting react native and all this. It's about in the same application. And guess what? The
[01:17:35]  web is fundamentally server and client. So right off the bat, this is a good justification for considering that there are different problems. Now, the question is, do those different
[01:17:46]  problems need to make it into our synchronization and into our UI layer? Like, do they need to be your problem the way react makes it? So, and I
[01:17:55]  mean, I mean, someone could argue the opposite by pulling it out. I'm making it your problem. React handles it naturally for you. But the truth of the matter
[01:18:03]  is we already realized with signia and incremental computers is once you're on that zone, you're just carrying it through. It's still your problem. You diff to
[01:18:14]  diff to diff to diff to diff to diff to diff to diff, right? But like, don't get me wrong, doing what we're talking about here is still a
[01:18:24]  huge step up. The thing is things like Redux, you know, that lend really into React's patterns. For example, like they turn everything into a giant store
[01:18:36]  and then forced React to diff. That's why Redux was so big. It basically was like, look, we trust you React and we go all in on you.
[01:18:42]  This is like saying like, look, we recognize that external state is actually valuable. This is step one. How do we take this further? Yeah, I mean.
[01:18:58]  Okay, sorry. Signals can be great cross M as well. If you communicate in smaller chunks and isolated chunks, a lot of times, the default is here's a
[01:19:11]  big dump, you know, and I, you know. Yeah, there's lots of ways to use signals in React. You can use the Preact signals library.
[01:19:28]  You could technically take solid signals, legend states and like, but there's solutions built for it. Legend state and Preact signals are probably the best. That being said,
[01:19:35]  why? Like it's a different render model. Like you can use signals kind of like the way Preact is doing it here, kind of pulling the state out, but
[01:19:48]  you could also use Jotai or ZooStand or any other state library you want. React is still going to react, right? Now, if you had Pre
[01:19:55] act's compiler in React, you could kind of get away, you know, with, you know, doing something that's kind of like solid in React, you know,
[01:20:02]  just with all the extra overhead of being React. But then it's like, why are you doing this? Do you know what I mean? Like, yeah, and you
[01:20:08]  get in the way, potentially React is very unhappy with the Preact signals like JSX transform because they were like, this isn't how we work. You're messing with
[01:20:17]  things, things we want to have control with. there's always this like impedance mismatch, which is kind of difficult to deal with because how should I put it?
[01:20:29]  Like React has a very different model and it wants and likes that model. When you're trying to like make components, not re-render and isolate update, like when you
[01:20:40] 're just like basically pulling the strings, like you're saying like React, we don't trust you. We're going to pull the strings. React doesn't get to
[01:20:46]  make the features they want. So like, yeah, you can use signals. You've been able to use MobX in React since the, you know, pretty much the
[01:20:55]  dawn of time, but like it wasn't the MobX team that became the React core team. It was the Redux team that became the React core team. Like it
[01:21:03] 's, it's pretty clear that while this is something you could be doing, it's just like if you really want it that much, you want to do these things
[01:21:11] , just don't use React. I'm at a point of that, of basically saying that we're going to get here. There's an important reason why not unify
[01:21:20]  stores and signals. I mean, we could just put like all stores start with a function at the front, which isn't bad, but I think there's semantic reasons
[01:21:36]  why this is important because one is immutable and one is mutable because the thing that is, it might not be obvious to people looking at this tree. Oh, sorry
[01:21:46] . I'm going to do that in a minute. Sorry. I want to actually answer fuzzy. Sorry. I go back here. I get trapped when I try to use
[01:21:52]  extra to the pattern of finite state machines, which against something telling us signals or state. Well, the thing is X date is like Redux. It's, I mean
[01:21:58] , at its core, it is a message system of events, but ultimately when you get to handling state X date, it's like, okay, what's the next
[01:22:05]  date? Like it doesn't really care how you handle state. So it built itself going, okay, well, we'll just use immutable change. It's an easy
[01:22:10]  way. We don't need a third party system. The problem is then you lose granularity. So a lot of the work here I've been doing is making that reconcile
[01:22:17]  work better with things like Redux or X date, because eventually you will get state. And if it is not granular in this case, it's the same problem again.
[01:22:25]  X date is great at like orchestrating your whole app. But ultimately when it gets down to it, it kind of assumes react. And it's like, okay,
[01:22:32]  like don't get me wrong. This is not David's side of things. It's just, he can't cater for each framework. Like signals or coloration. Imm
[01:22:40] utable data is something that you can kind of just go like, it's immutable and it's good. Immutable data, unfortunately loses a ton of information because you change
[01:22:49]  a bunch of stuff and then you have to go check it. It's not like, oh, this one thing changed. You actually clone the array, clone the item
[01:22:56]  and then, and with the new updated property. So right there alone, you did a bunch of cloning and then when the something gets at it, it goes, okay
[01:23:05] , well, something changed. Let's find out. Okay. Let's go through. I have an array. Yes. This item changed. Okay. I have this.
[01:23:12]  Yes. This item changed. Okay. And all the properties is property. Like you're basically forcing it down that path. Eventually at the end of the chain, no
[01:23:20]  matter if using xstate or whatever, you're going to want, um, you hit the same problem. So there's an xstate solid adapter, which handles the same
[01:23:30] , um, fine grained. It basically, they had to make a special version of stores. I helped them with this. When solid 2.0, they won't
[01:23:35]  have to make a special version of stores. That's really what's really what I, another thing I was thinking about here. Sometimes systems, sometimes you need the diff
[01:23:43]  because these systems aren't going to be aware. You know, they're on the outside. Ultimately, xstate just orchestrates state change. It doesn't actually responsible for
[01:23:53]  the actual synchronization in the end, which means that it's still the framework's problem. Oh, legend state does the hacking too. Okay. So I mean,
[01:24:11]  this is a great improvement, but it's like, it's like really, if you're at that point where you're like writing stuff with for and show in react and
[01:24:21]  using these compilers to hack and find great updates, it's like, sweet. I get to still use react. So there's this incremental adoption story, which I
[01:24:26]  think is really cool. But like at a certain point, if you're, if you get to a point where you're like building your apps and that's what they look
[01:24:31]  like, you should just not like, you should just use something else. Like you're, you're never going to help that technology get, you know, like,
[01:24:38]  unfortunately you'll do it for your little part. And then you'll use our react component library, which won't do it. And you're just basically like, do this
[01:24:49]  stuff and you like the pattern cause it's good ergonomically, but then like all the other good stuff that comes with, it gets thrown away. Cause then you're
[01:24:55]  running, you're importing larger react libraries or like basically all the benefits kind of like, except for the fact that you write, you have a nicer development experience, kind
[01:25:05]  of go out the window. And it's just like, at a certain point, it's just like, stop fighting the react core team. They have a vision, let
[01:25:13]  them do it. If you want something that does something different, don't use react. It's something different. Signals. Yeah. It's all signals are based off
[01:25:24]  scheduler. It's, it's push pull. So we push out the notifications, but then we schedule and we pull on things. So yeah, that, that
[01:25:32]  generally is not a problem. Yes. Syntax, sugar or reducer. I like that explanation. If you, sorry, I don't understand. If you're
[01:25:52]  not mutating stage, you still need model validation. Um, I don't understand. I, I, I, sorry. I don't, I don't quite
[01:26:00]  understand if you're not mutating state. All right. So, sorry, I'm just trying to get back to where I was thinking. Cause I, I,
[01:26:27]  did I answer the unified stores and signals? Not yet. Um, there was, there's something else. Sorry. I'm just like streaming, rolling myself back up.
[01:26:37]  So I remember rolling myself back up. So I can remember. Um, yeah, no. Okay. It's all good. Yeah. I was getting the immut
[01:26:53] ability and immutability. Yeah. Okay. Thanks. Thank you. Um, yeah, sorry. And that might not be related to your comment, but you actually
[01:27:09]  reminded me what I'm talking about. Okay. Yeah. Rain dish. Unless you know what has changed, you have to treat mutable data as immutable. Mutable
[01:27:21]  data has reference with any bail, so it's faster, right? So essentially we build systems in like in the client, you always know what's changed pretty much,
[01:27:31]  but they're at the edge of your system. There might be places where you don't, which is where dipping comes in. Um, so basically our base primitive is a
[01:27:41]  signal, which is immutable. So our, our, our thinking is we expect stuff coming into our system generally to be immutable that, that that's the rules.
[01:27:51]  But once we're in our system, we can do what we want. That's sort of the basis here. Yeah. I see. Well, here, here,
[01:28:06]  here. Yeah. That that's kind of the problem. I, I couldn't do time tracking, uh, time travel. I actually had the store snapshots instead of
[01:28:12]  diffs, but I, I've solved that. I actually showed this a while ago that I actually have a working version with stores with, with time travel because I
[01:28:18] 've done crazy stuff. We have to get, get there though. Sorry. I, I know this a little, a lot to kind of get through what I want to
[01:28:26]  talk about is signals are immutable granted, but a tree of signals are not immutable. See like, which kind of gets to my point. This is why you have
[01:28:37]  these nested signals inside. You need the reference of the crate to do to be the same reference. Cause otherwise, like, I, I mentioned this a bit earlier
[01:28:44] , but otherwise like you can't trust that it'll update the right thing underneath it. The reason you don't have to run the map again with a solid four component is
[01:28:52]  cause you know, the reference didn't change. It's the same exact object, which means that everything's linked. So when you put signals and signals, suddenly you're
[01:28:58] , you've gone from something that is immutable to something that is mutable. It is a different type of thing. It has different semantics. Like, um
[01:29:07] , it, it, it just, it's, it's kind of unavoidable. Like when you write to a signal, you can call a function that's like
[01:29:18]  set this value. And don't get me wrong. When you write to a store, you can also some, some APIs, you know, have individual rights where you can
[01:29:27]  just like have an object in the right here, right here, right here, right here, right here. But the problem is conceptually and it can be nested
[01:29:35] . This, this always kind of drives me a little bit, but crazy. But like, if you go like const my store, okay. Like I'm gonna pretend it
[01:29:44] 's like view. There's just a single object or something or, or spelt or whatever. And you go create store or whatever. And then your store actually has
[01:29:54]  like a, and then maybe like B and C or something in here. I, I, I, I, I'm just making some kind of nested object. And
[01:30:10]  then we go down and we have a component here and comp a takes an a, which is store a. Okay. And somewhere, sorry. Um, am I doing
[01:30:26]  wrong? I'm just, it doesn't matter. Type script. Cause I have no components defined somewhere inside, inside comp a comp a inside comp a, sorry. We
[01:30:41]  have comp B, which looks like pass gets B, which is like props dot a dot B. Now what I'm getting at is now inside, inside comp B.
[01:30:59]  And again, I don't know why anyone would do this necessarily. Maybe it gets obscured somewhere else or something, but if, if, if someone goes props B dot
[01:31:10]  C equals five, six, five. Okay. Why, why am I so unhappy with it? Oh, it's cause GS, GSX can't. I wonder
[01:31:22]  if I can. It's funny. The syntax highlighting is just like really not happy with, with me having a bunch of top levels things. Um, but if it,
[01:31:33]  my point is like, if so it's fine, this should be read out. If someone does this, it's going to mutate. Sorry. it's going
[01:31:43]  to mutate the, the object. If, if it's writable, like it's essentially. Yeah. You could say, oh, we froze the B prop,
[01:31:53]  but because this is like a nested reactive store, um, it, it, it can be deeply mutable when you, when you take this form, right? There
[01:32:03] 's a consequence with, with, um, now, obviously you would never do this. Um, you shouldn't do this. Um, with a signal, with a
[01:32:16]  signal, what would happen is this would update and when notifying when it updated, this is bad practice anyways, but like this technically could, like if someone's doing something
[01:32:27]  dumb, like locally, you know, did something like, uh, const B equals crops B and then they were like, oh yeah, B dot C equals five. And
[01:32:38]  then they use it somewhere else. You know, they're like, okay. Yeah. Function of B dot C or, you know, like with a signal, ironically
[01:32:43] , you're actually mutating the mutable state, but like it would up, it would just kind of like update and nothing get notified with the store you somewhere else
[01:32:59]  that's listening to BC, like comp Z over here, like in no way is mutation good, but what I'm getting at is comp Z over here might be also listening
[01:33:14]  to store a dot B dot C. Like we kind of get in this like classic immutable, mutable, mutable problem where the it's not clear that some
[01:33:27]  assignment way down here kind of trigger something way over here. It's like, it's, it's basically the reason why we all hate two-way binding these days.
[01:33:37]  Um, thank you chat. Oh, well, I mean, you can easily make props shallow read only make them deep read only is a little bit more tricky. Why
[01:33:54]  would you put a signal inside a signal and just use the effect, right? No, it's, it's, it's, you put the signal inside the signal so
[01:34:07]  that they're, they're independent. This is what I was showing earlier in the stream. Like it's the same reason why Joby wrote this article. If,
[01:34:14]  if, if, if you, if just clarify, in case somebody didn't get, get it to this point, like the problem is if you make the whole thing,
[01:34:24]  one signal, you're going to rerun the whole component, the map function, everything, because you changed to do's. If you put, if you make,
[01:34:34]  um, a to do model where each part of the two is a signal and you put that inside a signal of signals, like a signal, a to do array signal.
[01:34:44]  Now, if you update the array, yes, it'll update that signal and cause that part to rerun. But if you update just the completed, it can,
[01:34:55]  you know, in reacts case, maybe it doesn't work the same way, but where is he showing it fine grained render, but in solid or in pre act in
[01:35:04]  this case, it can actually update just this div element. It doesn't need to rerun any components. So basically the reason is, in a more mechanical way that you
[01:35:15]  can see is that because you can nest effects. Okay. it's because it's because you can do this because you can go const b equals a. So I'm
[01:35:34]  sorry. I guess it's a equals whatever as single single a equals a, and then you can go create effect. So I'm just, okay. And what it
[01:36:00]  means is when b updates, only the inner effect reruns when a updates, um, it basically throws away this effect and creates a new one. So you get this tree
[01:36:11]  like hierarchy, but it's not in the components it's in the data essentially. Like if you, if you have ever seen what solid compiles to, it's
[01:36:19]  basically like something like this. So the fact that you have nested signals you have nested effects. So these can update independently. Okay. Okay. Which means
[01:36:43]  you can do much less work. It's not where the state originates, which is like up here that matters, or actually it's probably up here where someone was like
[01:36:57]  const, you know, say equals create my thing in react. It has no choice, but every time you update my thing to run everything below it, you know,
[01:37:12]  it can memoize, but if the thing itself has changed, it has to like, if it's b that's changed, it has to run through the whole, the
[01:37:19]  whole tree where in a single library, it's not about where it's declared. It's about where it's used. So you can just jump straight to here.
[01:37:26]  It wouldn't be updates. Okay. Yeah. I mean, it's, it's, it's very symmetrical. Um, no, I don't think so. This
[01:37:47]  is actually something we looked into in Marco. This is the kind of kind of the problem. It was this like, how hard is it to, to figure out,
[01:37:55]  um, like this mutation or whatever in, when you're five files away from what did it like, what it, where it started, where it is. Um, and
[01:38:06]  is it a mutation? Uh, I guess pushes, pushes a mutation. Yeah. Uh, how about some function? Is that a mutation? Like, or you,
[01:38:19]  I think, I think you get, you get what I'm, what I'm saying? Um, it, this has actually been one of the hardest problems. This is
[01:38:30]  one of the strengths why I'm, I don't think the React compiler is at all equivalent to what we're doing. Yeah. I mean, I talked about this
[01:38:47]  at the beginning of the stream when I was talking about incremental computers. If you're doing kind of batching, the problem is different parts of UI, different parts of states
[01:38:53]  might actually have different batch windows. Um, so like keeping the history of, uh, diffs is kind of like a pain in the ass. Um, so,
[01:39:05]  so, so where I'm getting to here is, um, in solid, we, we kind of avoided all this cause we were like, okay, guess what? We
[01:39:20]  already solved this problem. Now passing this through is not an indicator that it can be updated. These can't be updated. If you want to set the store, you
[01:39:33]  need to be like, oh, uh, on update, whatever, set store. And to be fact, to be fair, um, sorry, I'm missing a function
[01:39:44]  wrapper. Svelte does enforce this because their state is just a variable. So if someone passes to a certain degree, like if someone passes like a value to you
[01:40:05] , um, you can't mutate on the other side, you can only replace it. So like, I mean, obviously that doesn't help with deep mutability,
[01:40:16]  but to two degrees Svelte API is at least shallowly a guard here. I found out though, that, uh, Svelte stores actually can be written
[01:40:24]  anywhere, which is highly disappointing. Um, because you have that classic immutable problem or what this does is go like, I, I argued for a long time. You
[01:40:33]  don't actually need immutability. If you want predictability, you just need to be able to do command, uh, like command, uh, what is it called
[01:40:41] ? Query command separation. Cause what this means is all, if, if you do it like this, all the locations in which the store is set is going to
[01:40:49]  be in the scope. Yes. You're calling it down here because you pass it through props, but all the actual set store calls are happening right here. In a sense
[01:41:01] , you're making named actions. You know how I can reduction, make actions. Well, you, as long as you're not passing the set store call directly, you
[01:41:10]  are defining what actions are available in your, uh, UI, uh, UI right in front of yourself. Obviously if you create a separate model for your store, you
[01:41:18]  should do, you know, like what Jovi did where he, he kind of was like, okay, look, uh, where is it? Um, you defined an
[01:41:26]  add and remove and he came up with a separate actions like I was showing earlier in the stream, but what, what I'm trying to point out here is that this
[01:41:37]  has nice characteristics, but the problem is how do you set a store, right? Like, yes, we've, we've, we've established that, that this is
[01:41:47]  a way of gaining control back. So we don't have all that indirectionality. Everything is flowing top down, just like we like it, you know,
[01:41:55]  like in react or whatever, we have that control. Um, how do we, how do we actually update the store? Yeah. View does proxies. And,
[01:42:06]  and in fact, the store primitive, I guess I haven't gone out and said it, a store, the store is a proxy. Um, that, that, that
[01:42:13] 's how I'm talking about doing the signals or just shallow values and view. You can get like a pure signal by calling it, making a shallow ref. They do
[01:42:22]  have options to not do the store thing. Uh, but their default is to make everything into a signal and a store combo. Um, and they use mutable APIs.
[01:42:31]  So the dot value do equals. So dot property do equals, um, which I think is kind of dangerous given, you know, what I'm showing here, just part
[01:42:41]  of this, don't get me wrong. Like people have different opinions on this and view obviously as bad practices to write your props and all this kind of stuff. But like
[01:42:48] , generally speaking, I, I, I actually, I've spent some, it's so funny. I spent so much time. I actually agree a lot with what
[01:42:54]  react philosophy is. So it's always funny when I talk to people really pro react devs and they're always like, Oh, what about this? What does this?
[01:43:01]  It's like, trust me. I have, I have done this in a way that react devs should res at least be able to respect. Cause I actually respect your
[01:43:10]  same principles. It's just, you, you can toggle the granularity of these things. Every signal is graph carries the rules of a react hierarchy, except it's
[01:43:23]  more granular. It's not like we lost the unidirectional control flow. You know, it's, it's just that our unit is smaller than a component
[01:43:33]  and extends beyond components. So yes, I am talking about proxies here. If you write to a Svelte store, it warns you. You mean out
[01:43:43]  of the localized scope? Cause like, I actually asked Rich a while back. I was like, I was like, Oh, I'm so stoked about this. If this
[01:43:53]  means that I can't write to the store anywhere, except in the local, like localized scope, I'm so stoked for this. And then Rich is like, ah,
[01:43:59]  people found that confusing when they put the stores in separate files, they expect to be able to like just import and write to them. So we didn't really like that
[01:44:04] . So maybe things have progressed since then. So yes, you can interest all the proxy reference or make it read only. Yes. And this is views tactic to view has
[01:44:17]  a read only helper or something that like basically spits the store out as read only. I think everyone kind of needs a version of that. Yes. Um, yes
[01:44:34] . Snapshot's a great way of doing this. Depends. It's good for exiting the system. You shouldn't rely on it. Oh yeah. I
[01:44:54]  mentioned this earlier in the stream. Uh, it's, I never implanted in core solid. It's funny. I proposed this primitive, like three or four years ago
[01:45:02] . Um, but any coverage on stream back then, uh, I, but it's a two liner. So I didn't actually ship it. Like you literally just make
[01:45:11]  it create memo and put a signal in it and then have the read, read the both sides. Um, solid 2.0, because I'm making the actual create
[01:45:18]  signal API except functions to do this right off the bat. It'll be in it. But today, if you want to use this, um, I think there's a
[01:45:26]  helper in solid primitives, um, or you can write the two lines yourself. Anyway, what you, so the next question is how do you update a store? Well
[01:45:43] , originally I was such a huge fan of fall core and immutable JS. And I thought it was like, really, it's really tight. Like if you've
[01:45:51]  ever seen, uh, solid to do MVC or even JS framework benchmark, every demo I made when I use stores, this is a proxy with all the automatic fine grain
[01:46:05]  thing. Um, it was just so it was, it was always so tight to just be like, okay, set state to dues filter this. Like I have a bunch
[01:46:14]  of like special helpers. I'm not equal this, you know, what else is it going? Cause this actually removes to do's. It actually takes the list
[01:46:21]  and then it runs a filter function on it. What's this one do? Edit to do set to dues filters again, basically when the ID and then sets it with the
[01:46:29]  new to do. There's a lot of magic. There's a whole doc section on explaining these magic rules to dues. Like it's so terse and so powerful.
[01:46:38]  You can do iteration. You do update every 10th key. You could do a whole bunch of rules. There's ranges, all these things. I was like,
[01:46:45]  man, this is what I would want to use. The truth of the matter is it's not intuitive and it's just masking a reality. That's real. See,
[01:46:57]  I was really afraid of mutation, like almost too far afraid of mutation. And I didn't understand the value that I had already solved initially by, um, by doing
[01:47:09]  the separation. 90%, like 99% of the value is just in the separation. It's so funny. Cause people always are like, oh, I like the dot get
[01:47:17]  and dot set. But the problem is then you give people a way to just be like store, like past store. I mean, don't get me wrong. They
[01:47:24]  can pass store as an array, but no one's going to do this. This encourages you to separate it and do this. If people just pass store or just pass signal
[01:47:30]  around, they're going to end up with this weird problem where they're like, they can just like, they lose where they are. You have, you, instead of
[01:47:38]  having like the rules in front of you, you've now passing signal. And then this guy over here is updating. And this one, it's the thing that react dev
[01:47:44] s all like, think about it in their nightmares. The tuple literally, it just nudges people in the right direction. And, and, and basically the solution
[01:47:57]  actually is really simple. You just, you can't make it like, you can't make it return the next value because then you're, you're dipping. Like if
[01:48:10]  I, if I'm like, okay, return, if, if, if it's like return, you know, a server, let's just copy this again,
[01:48:21]  copy this again. Yeah. If I just return, you know, this, well, I'm losing all that information here because now we have to like diff through here.
[01:48:32]  And if we actually want to keep references, I'd have to do some cloning and all, yeah, this is like a full clone, but like, you know,
[01:48:39]  like I generally what you would do is you'd go like, like if there was other properties that didn't change on these objects, you'd be like store, um
[01:48:53] , a equals like, here's the immutable version of this store dot a, b, c equals seven. There we go. There's the immutable version.
[01:49:21]  Like, but the problem is you do all this work and you lost track of what actually changed. So, I mean, clearly there's only really one answer here.
[01:49:38]  And what's, because we know exactly these changed. We can communicate that. These are stable references inside and out. Like we don't, we can skip through all of
[01:49:50]  this stuff and get right down to the effect that we care about. And I came up with like fancy ways to obscure this. As I said, like in, in
[01:50:02]  the current solid syntax, it would have been like, uh, a, b, c, seven or something, you know, but this is just infinitely more powerful.
[01:50:23]  Um, we have a produce operator that does this. This is in solid 2.0. It's going to be the general API. But what I want to point out
[01:50:30]  to you is now that you have explicit centers and you've actually separated the thing, this is different semantically than, than the signal equivalent. Cause signals return the next value
[01:50:43]  stores mutate the, the, the, the, the value the way you want them to. Right. So like, this is all answering that universal API problem.
[01:50:53]  So, and I, as I said, I've covered this before on stream, but let's like, if, if this was a signal, um, and I
[01:51:14] , I don't want to go through all that cloning again, I hope you guys, that's the signal. Um, but I, I hope you understand that,
[01:51:25]  like there's a version actually of signals where there's a, the previous value. Um, like react, but we don't need that here. So actually, you
[01:51:38]  know, let's do it just for, for, for fun. My point is you would go clone previous a, I, I just did the expansion here, right
[01:51:53] . A few minutes ago, uh, the, the whole private be so on. Right. So you, these are already different worlds. This returns the next value immut
[01:52:10] ably. This mutates it in any sort of wild ways. Now the, the, I think we're getting close to. Well, I mean, you shy away
[01:52:30]  from mutation for the same reason that I was trying to show here. It's easy to lose track and control of your application. When you can mutate things everywhere.
[01:52:40]  This is like basically the whole premise of react. And if you talk to people, it's why I had to meet the singles video. Cause when you talk to react about
[01:52:48] , it was like, oh yeah, singles and two-way binding. Everything's just a big mess. It jumbles around. And it hasn't been that way since
[01:52:56]  we like enforced glitch-free execution and unit directionality. And I don't want to risk it ever getting that way. So simply doing this is a very strong indicator.
[01:53:07]  Mutation is fine. As long as it's not everywhere. Now, MobX has a different way that you can call it specific actions. And then you can suddenly
[01:53:16]  turn on mutation mode. The only reason I don't like that is because it's kind of global. I think it's even better to key your, your setter to
[01:53:22]  your store. Yes. I called it this API and solid produce after immer originally, but the ironic part is immer takes a mutable thing and returns something immutable solid
[01:53:40] . It's actually take something mutable and return something mutable. It's like not nearly as fancy. At least initially wait until you see what I've done. And
[01:53:49]  then you're going to be like, wow, this, this is, this is a little bit crazy. Now fundamentally different primitives also gets you in an interesting state
[01:53:59]  because there's fundamentally different ways to derive them because create memo returns the next value, right? create memo turns out and don't get me wrong. You can put stores
[01:54:33] . In memos, memos are great for any kind of immutable kind of change. Filtering. Filtering is a great example of where you would drive this.
[01:54:40]  Cause you can have a store of signals and then you can use a memo to be like, I only want to return the three that match this criteria. So generally speaking,
[01:54:52]  things that are like immutable, like filter, like you, you basically like you have a list, you get a new list. This is great. But, and
[01:55:01]  this is my stream cover. There has almost never, people are only just recognizing that this is a thing. No one, people haven't really got to the point where
[01:55:16]  they're like double store. Create. I don't know what this is store. Right? Like the problem is, and I wrote an article about this. So this is
[01:55:37]  probably the fifth time I've gone over this. I'm going to get to the good stuff soon for the guys who, uh, who, who are patient and know
[01:55:43] , know my stuff. But I, I, every time I explain this, I get better. And the reason I'm explaining this is because I showed my new stuff to
[01:55:52]  Tanner Lindsley and Tanner is kind of up on solid up to, to here, to everything I'm showing you. He knows the stuff. He was able to jump
[01:55:59]  in and actually commit changes to the new signals core code base. Like a couple of years ago when he was looking at using it for tan stack, like he is, he
[01:56:07] , he, and I didn't even have to like teach him on his stuff. He just saw it and got it. I showed him my new projection stuff yesterday and
[01:56:13]  he was like, Ryan, I, I just don't get what, what you're talking about or what you're doing. So, um, I still need to work
[01:56:20]  on the explanation. So we're, we're getting there. What about just a class then define message. You can call that update the signals old class methods. It
[01:56:49] 's an object class. So it works in all color. Well, I mean, it's fine when it's simple and it's shallow, but the class has this problem
[01:56:56]  again. Um, you, you, you, you're literally like to do class list class. Like it's, it's fine. And you can set up your own
[01:57:05]  getters, which a little clunky, but you can do that. But you, you end up when you get fresh data from the server, mapping it again,
[01:57:10]  because your fresh data is just objects. And then you're like, okay, well now I need to change into my reactive classes and so on. What this does that I
[01:57:19] 'm showing you is stores like something reconcile, just spit out, just diff the changes, map the models, do all of that for you automatically as like a one liner.
[01:57:31]  So, um, classes are fine. Classes are fine. This. Yeah. You can use decorators, but you're just talking about syntax changes over this.
[01:57:46]  Like you're still like, and don't get me wrong. There's places, I think from an optimized. It's not just rebuilding the class. You have to
[01:58:02]  actually make sure the references are the same. So if something has the same model, you actually have to do a lookup and be like, okay, do I already have
[01:58:09]  this model? And now do diff the properties on it? It's not just remaking it. You have to, you actually have to do a diff. It's
[01:58:14]  fine. Like this is like, there's a good reason people want to react. I honestly, when I realized that proxies could solve the problem, like I built
[01:58:29]  some of the ugliest, nastiest stuff in knockout to solve this problem just because I wanted those like fine-grained updates. And I feel like when I
[01:58:33] , when people are like, just use a class, it's like that same vibe or feeling like it's like, I I'm sure you can hand tailor it crazily
[01:58:41] , but then you look at the react code and just maps and you're just like, fuck my life. I, I, I, I, so you could argue
[01:58:52]  this as a bit of a DX thing, but like, like I was not going to suffer being even the notion that this could be worse than react in any sort of way
[01:59:01] . Yeah. Yeah. Yeah. Yeah. And, and NBC, because you, you, you don't have a control, like your controller is a singleton.
[01:59:17]  MBBM even has some issues there. Um, because you, even though you create instances, um, they get shared. The only way you solve it is combine the
[01:59:28]  MBBM, like the view model with the view and package that and say, stop wrapping the model. Start wrapping the view. Now this let me cheat that stores are wrapping
[01:59:41]  the model components automatically without you intercepting, like worrying about it. Components wrap the view. Um, yes, I, I definitely can see that being the case
[02:00:03] , but what if, what if, um, it could just be faster period. Okay. So, and, and to be fair, if you recognize that this is
[02:00:29]  a category, we haven't even got into what this is. Well, the answer to this took me a long time. And this is what finally won this over to
[02:00:38]  me is a derived primitive. Um, that is store light would also have to use. Mutation. Right. I've called this create projection, but. There's
[02:01:03]  like a full access here. Now we'll get into projections. And that's what I showed on the stream. But before we even get to that, we actually have to
[02:01:10]  talk about, I said earlier that stores aren't the same in every framework. And, uh, we, we should talk a bit about behavior. Cause I want to
[02:01:18]  change the way stores work in solid. And part of it is making this the default, but it's also, um, it's also, um, looking at some of
[02:01:34]  the other characteristics. And so I think we have to kind of identify before we even get into projections, what a good store, um, like how it should, um
[02:01:49] , behave. Um, and I, I don't know. Where, where should we do this? Excalibraw. Well, let's go here. Well
[02:02:01] , let's go here. Store qualities. So let's, let's make this extra large. Okay. And then here, let's make this medium. Okay. So
[02:02:18]  like, what are some qualities of stores? And I think Jovi already hit it here when talking about models and we were talking about stable reference. Stores have to
[02:02:26]  have, should have stable references. Um, sorry. Where's my scholar. So let's, let's, let's, sorry. Let's go here. Let's
[02:02:34]  start here. Stable. Stable references. Okay. Solid today. Actually, let's go here. Let's start here. Stable. Stable references. Okay
[02:02:44] . Solid today. Stable references. Stable references. Okay. Solid today. Actually stores have sales, uh, stable references, but I want to kind of use
[02:02:58]  this as, as, as a kind of baseline point. And I'm, I'm going to use my latest version of, of my, my stuff here. Sorry
[02:03:15] . Uh, where is my? Did I close the whole other window? Okay. There it is. Okay. Sorry. It's stuff opened up on the window. I
[02:03:31]  wasn't. But. I'm going to duplicate this. We'll get back to this eventually. I just need to use the, the latest version of the code here so
[02:03:39]  that we can, we can talk about this for a bit. Actually, I made a example the other day. Let me see if I can find it. I'm
[02:03:51]  going to move this quarter over here. So I'm not, do, do, do, do, do, do, do. Give me two seconds. I'm just
[02:04:10]  pulling up. The problem is I make so many solid playgrounds as examples when I'm working on stuff. Not that one. Sorry. Two seconds. Okay, here
[02:04:29]  we go. Let's look at this. Actually, I don't want to do that. What I want to do is actually drag this into this. Give me two
[02:04:46]  seconds. I have too many windows open. Because what I want to do is I want to grab the reactivity in this repo, which is the latest and update.
[02:05:03]  Okay, these are the same ones. Okay, these are the same one. Imagining things. Okay. Update this one. Okay. Okay. All right.
[02:05:18]  Oh, put in the wrong. Okay. Cool. So let's talk a bit about the behavior on stores. Because I've actually did a little research and someone actually
[02:05:42]  showed me that like Svelte does some things the same and some things different and Vue does some things the same and some things different. It might be worth even
[02:05:50]  looking at those for a minute. They can, they can, you can put a getter in, in, in a store. So you can. I, I
[02:06:02]  stores today, the getter has to be static. Like you have to define the getters like when you initialize, but, and because of the, the path
[02:06:10]  API, it doesn't make a lot of sense, but there's nothing to stop us in 2.0. I haven't just implemented it yet. Uh, where's
[02:06:17]  my example here? So I'm going to close down the incremental stuff. You've been on stuff. I'm not going to need to be more. Um, there's
[02:06:26] , there's nothing to stop us from like inside here. Be like object dot define property. You know, and like add getters. Um, I mean, also you
[02:06:39]  can just put a function in there, but if you want it to be like seamless, like, so you can just go this dot blank, um, and have it derived
[02:06:48] . You're going to have to get a getter in there either through the, like, I didn't show it here, but stores have like a initialized object that
[02:06:58]  like, or array that is their base. So you can like, you can design the static version of your store here and put the getters like right in here and
[02:07:07]  then they'll read from other store properties. But otherwise you're kind of like in this boat. Um, cause you're basically doing again, what Jovi was doing
[02:07:17]  here, where these are getters, essentially. But the thing that this is an immutable kind of setup, like, even though. Um, it's fine cause
[02:07:34]  he's only updating the thing once, but like, you can still see that you're doing immutable operations here. Um, because these are every node itself is immutable
[02:07:48] . Um, cause every single is immutable if, if you, I mean, to be fair, we, we use this pattern a lot in solid, but with
[02:07:59]  proxies, you can actually just like do dot push instead if you wanted to and get basically the same effect. Anyway, uh, where was I? Uh,
[02:08:09]  yes, um, I wanted to talk about, uh, some characteristics of stores that I think are important and solid stores today don't work this way completely, but I've
[02:08:24] , I've learned, uh, that. Certain things are important and the first one I want to show off actually. There's actually two properties that I've come to
[02:08:35]  think are important. I, I, I wrote down stable references, but another property that I think is actually important is, um, probably, and we haven't done this
[02:08:48]  before. I think we should talk about this, which is, I call source gardening. Um, this is tricky to do. Without cloning. But the, the
[02:09:00] , the thing is if you open up solid today and you create a store and you mutate, well, I mean, let's do it. It's a crate mut
[02:09:06] able right here, right here, but let's, let's do this. Go, um, import. Create store. From. J S store. J S store
[02:09:26] . It's funny. I secluded them like they're second class citizens at a certain point, but, um, let's go here. Create store. If I go
[02:09:38] , sorry. Const wrap equals. A one. Const. Store. Great store from this reference. And then I do something like, sorry. I'm. It's
[02:10:02]  an array. By going here and I go set store. See, we also support objects merging like react top level. So if I go, a is five now.
[02:10:21]  Can you guess what happens if I console log store dot a. It's it's five unsurprisingly. Sorry. What if I console log. Ref dot a.
[02:10:46]  It's also five. So. It's kind of goes with the territory. You're mutating something. So the, the object you pass in gets mutated, not
[02:10:58]  surprising. We wrap in a proxy for reactivity, but it mutates it. But the problem is when you have data structures and you don't set five, you
[02:11:08]  set another object. And then someone else comes and updates that object. You're going to find that. A bunch of stuff that you better might be nothing here. Get mut
[02:11:24] ated. And when I created solid originally, I was just like, I mean, it's mutating. What, what do you, what do you expect?
[02:11:42]  But the, the problem is, and there's a reason because I wanted to be able to diff it. If I clone everything here, I can't use that reconcile.
[02:11:53]  I need, I need to beat Ryan Florence in that benchmark. So if, if we're just going to take the naive clone, everything approach, we lose, we lose
[02:12:05]  one problems, we lose references. so we can't diff, so we can't beat, we can't beat Ryan Florence, which is not acceptable. So, um
[02:12:16] , I was like, I'm okay with mutating. It, it can't just be the initial value because you could set, it's like you, you clone it
[02:12:30]  as it enters essentially, right? It's, it's, it's, it's cloning here helps, but you actually have to, the problem is, and
[02:12:45]  if you're setting something, you have to kind of like deeply walk through the whole tree and find the things that are new. I mean, it's, it's fine
[02:12:50] , I guess, at the point of replacement, but like, this is only a problem when someone goes in and sets A.B. But like, if you're
[02:13:01]  going to clone preemptively, you actually have to kind of walk, do a deep clone every time you hit a new, new property or a new object you hit.
[02:13:09]  Yeah, exactly. Basically, this is worse than doing things immutable, because immutable only needs to clone things that change. I know I, I joke, but
[02:13:24]  that, that DB Mon example annoyed me because I was like, no one really actually does this. But if people are going to take signals seriously, I have to show that
[02:13:37]  there's no downside compared to react. And this was one of the earliest ones that I was like, I got it. Like the mapping was annoying as hell. And I
[02:13:45]  realized the proxy solve it. I think, Evan, you realized to a certain degree that procties were good, too. But I don't think he was so
[02:13:50]  performance oriented. Yeah, I mean, copy on write is fine, except for it makes a pain in the ass when diffing because your copy is never the same as the
[02:14:07]  source copy. So you can't do immutable diffing. You have to do like really bad, like angular style diffing. You have to do it. You
[02:14:17]  have to do it. So like, this isn't good. So, I mean, I'm okay with it. Cause it's like, look, you're in our
[02:14:32]  zone now. If a lot of people, what they do is they just clone it themselves. They deep clone before they start. And then they don't worry about the after
[02:14:38]  the fact. Cause like they're kind of already in our zone by then. But a lot of people just go deep clone here, call it a day. So,
[02:14:50]  I mean, it's interesting, like. This is what I want to propose to you guys. So let's, let's, let's go back to new, new
[02:15:09]  solid. So these are two, these are two properties that I wanted to kind of bring to your attention. I, I wanted to talk about stable references and about source
[02:15:22]  guarding. Okay. There's a few other ones that we'll probably get to here. So I made a simple example. I made a store. And then this is the
[02:15:30]  new API, right? So, and I made the ref and then I decided that I was just going to put the ref in two locations. And then set C also
[02:15:38]  to it self-referencing and then update. The B copy with a different version for eight. Okay. And then I was like, okay, what should the behavior
[02:15:53]  be? So maybe I should hide the answers and maybe it's too late. Like, should I hide the answers? Let's walk through this. Okay. So we
[02:16:02] 'll ignore this stuff for a second. Should S dot a. Well, I mean, I totally the answer here, but S dot a should equal S dot a. Okay
[02:16:10] . I agree. S dot a should equal S dot or S dot a should equal S dot B. Now, technically this is not true in Svelte or immer.
[02:16:20]  I don't know if this is true in view, but every time you assign an object into their stores, it's, it gets cloned because they source guard.
[02:16:28]  But the problem with that is now you need to synchronize. Like when you use immer and you're like, oh, like react uses IDs for different, right? You
[02:16:38]  have keys essentially, but immer doesn't immer is like, you should normalize your data. You shouldn't have more than one copy of this object anywhere in your data structure
[02:16:48] . And Redux is like this too. It's like this whole idea of like normalization and selectors means that like when you store a bunch of models, they
[02:16:59]  should be normalized by key. And then if you have them in a list, you should put those keys in an array. And then that way you don't have to do
[02:17:07]  crazy array operations just to update the one thing. You know, you don't have the pass through problem and it exists in one place. But it means that like,
[02:17:16]  if it ever was a case where you have to put something to locations, you have a synchronization problem. If you update the store in one, if you update the model
[02:17:26]  in one place, you got to go update it in all the other places it exists. And it doesn't really make sense when you look at something like Jovi's article
[02:17:33] , where you're like, like, I'm making a to do list here. With these models, why the hell, like, they have an identity? Why the
[02:17:43]  hell should updating in one location, not updating somewhere else? And I actually posted my example, this example that I'm showing right now on X a little while ago.
[02:17:58]  Sorry, where is it? Let's go to my profile. And I was talking about how, like, proxies are the best, because I love proxies
[02:18:08] . What's the date today? I went too far. Yeah, I showed off this demo, right? Which is basically what I'm showing you again here, right?
[02:18:20]  I was playing with what I call path-based versus reference-based things. But this demo is not that important. What's important is someone shared the Svelte
[02:18:35]  version of this test. And s does not equal sb. It doesn't equal the ref, which is right. But basically, you can't have the same object
[02:18:59]  in multiple places. It's kind of like, and they tell you that you can't do the equality map, basically. If you look at the final objects here in S
[02:19:12] , B is updated, A is not. Even though, like we've said, look, this is ref, this is ref, assign this to thing. Like,
[02:19:23]  this is not how mutable JavaScript works. Look, A is not updated. Even though you just assign the same thing. This is odd, right? But it's reasonable
[02:19:38]  if your system is based off path. Now, I suspect view actually might be the same as this. I don't know if anyone, if anyone knows, should we
[02:19:47]  try it? Do we have a, was it view playground? SFC playground. We want reactive. No. And we want const ref equals A1B2,
[02:20:09]  I think. Doesn't really matter. We'll see this thing. And then we go const, I don't know what to call it. S equals reactive ref,
[02:20:23]  not sort of reactive. I guess I can, I can assign it later to this more showcase what I'm talking about. And then we want to go S dot A equals
[02:20:35]  ref. S dot B equals. Did I do that wrong? Is it, is it, does reactive still use value? Whatever. Let's try equals ref. And
[02:20:51]  then S dot B dot A equals three. And that's console log S. Did I just break this whole thing? Okay. View actually does update both. And let
[02:21:24] 's, let's console log ref is for fun too. Um, I'm like looking for the refresh button. Maybe if I go this way, this way. There
[02:21:42]  we go. View. Okay. So view and solid work the same way. They actually mutate, right? So they, they, they, like old solid, solid
[02:21:54]  1.0 view mutates. Yeah. I mean, these all use proxies. What we're using here. What Svelte using the, these are
[02:22:07]  all the same systems basically, except for semantics. Yeah. Like that, this is why I'm, I'm comparing it. Cause the Svelte version ref is
[02:22:18]  a proxy. Yes. But the difference is yes, this will never be true because when you wrap something in a proxy, it's not the same identity as the original
[02:22:32]  object, but this is where the stuff is weird because their version of their different proxies are not the same. And in the end, it actually gives you different
[02:22:42]  values because the mutating B forks it from a, even though these were the same reference initially in view. Let's see if I can do this. The console dot
[02:22:54]  log S dot a equals S dot B. Do they keep referential? You don't have to do this. I had to do some special work to make this work
[02:23:02] . Yes. So view, view works a lot like solid where inside they keep proxy referential equality as well. See the tree here. So yeah, views. Okay.
[02:23:16]  View's implementation is a lot like solid 1.0. So you, when you give it the proxy, these are the same objects. They're not the same as a
[02:23:24]  rep, but the, but the, but once they're proxified, they're the same. And they, they, they basically, they mutate all the
[02:23:39]  way through. Okay. So all this tracking state and create a mutable reference new option. Yeah. Which is problematic for diffing, which I've already established because my
[02:23:58] , again, my whole goal here is with stores is also was a vehicle to show that when diffing happens, like what we're solving here. Isn't a convenient
[02:24:09]  way of grouping signals. We're actually solving the problem of, of incremental changes or like, like the things that like you like, more granular data changes. So,
[02:24:24]  okay. Um, so yeah, views like solid belt is a little bit different, but it's felt source guards, which is cool. So I was like, okay.
[02:24:37]  Can, can we do both? Can we leave the rep the way it was at one and two have a and B be updated? Um, and yeah, I don
[02:24:58] 't know why I included C have all of these be equal to each other. Um, yeah. And have all of them be equal to each other. So guard our
[02:25:12]  sources. Make them have the same identity model. And make it difficult. Sorry. So we're, we're hitting one. I'm missing one more requirement. What
[02:25:30]  can silable. And it turns out the answer is yes. Um, it's an interesting solution. The tricky, the trick is not to proxy the object, but proxy
[02:25:44]  a reference to the object, which creates an extra object, ironically, but I actually benchmarked this about six months ago. And it was still very, very, very fast
[02:25:52] . Um, diffing. I, my, my, my threshold for this diffing thing is stick it against inferno. Like the fastest Vtom library in
[02:26:00]  a, in a basically something like the Ryan Florence test, but tests like all the different shapes. It's called UI bench. If you ever want to find it, it
[02:26:07] 's UI bench by local void. Honestly, probably, uh, local void UI bench, probably one of the, he is like, other than Dominic Gannaway,
[02:26:20]  he's, and honestly, you could say he's probably the most prominent performance virtual dom guy in re like out there. He, he's, he, he had
[02:26:31]  the fastest virtual dom library, even faster than Inferno. Like basically for the last decade. Um, and he, he cares about performance in a way similar to the
[02:26:42]  way I care about performance, except he's on the virtual dom side. I have incredible respect for him. him. This is, don't get me wrong. I
[02:26:47]  can't beat his framework in a pure diffing test. Um, with solid. I can obviously beat react and preact, but. Um, this is, this is
[02:27:01]  the threshold, right? I mean, let's face it diff virtual dom is made for diffing. It's going to be hard to beat it, but if you
[02:27:08]  don't think this is your primary use case, I think we have options here. Right? So yeah, I just drop this in. You want to see. Yes
[02:27:24] . I store the references. You got it. Exactly. I, this is why I can still diff because I can, I store the references. And also manage over
[02:27:45] rides. At dipping. Yes. It's specifically at dipping. The, the, the, this is the problem with dipping is you're assuming. And like the
[02:28:01] , his benchmark's really cool because he has like a bunch of like a few fine grained ones. That's all just blows the rest away in the, in those areas
[02:28:07] . But the problem is if you turn your problem into a different problem, then the solution optimized for dipping is going to win. 99% of the problems don't need to
[02:28:17]  be diffing. Think, think about it. If you go, here's all the data for the whole tree, go. Signals still have to diff. They still
[02:28:32]  have to go, okay. Where did this change? Did this change? Did this change? Did this change? Did this change? Did this change? Did this change?
[02:28:39]  Did this change? Whereas, so it's, you're doing the exact same as a virtual bombing, except you have this extra mechanism for communicating it. At that point,
[02:28:50]  you might as well run through everything. Every other scenario, whether it's creating new stuff, whether it's updating existing stuff, granularly, because you know, it
[02:29:01] 's coming or, you know, it changed signals are going to be faster, right? Like, because you don't create the artifacts you need for diffing. When you
[02:29:09]  go to a new page, you just create the DOM. When you, um, when you go, I updated this one little button text, you just update that. Right
[02:29:17] . But this is what I was trying to show earlier with Knockout and why it was, it got killed in Ryan Florence's demo. This is like, I opt
[02:29:26] , I tried to optimize reasonably for the worst case. And if you look at soliddbmon, it's, it's like right up there with Inferno or
[02:29:36]  whatever. Like it's, it's actually faster. It's probably one of the fastest implementations that's not using Canvas. That's just cheating though. Um, So
[02:29:49] . It uses some linked list stuff internally that is, I mean, I I've looked at like, there's a potential. Solid 1.0 was built on a more

[02:30:03]  push side of push pull. Like it's push pull, but it's like, everything's a year, which is fine in 99% of the cases. And it was
[02:30:11]  faster than like MobX and all the stuff that was available at the time. Then in doing research for solid point two, 2.0 Milo realized that he could
[02:30:20]  make. Stuff faster with a more polar oriented system. And he actually published his work, which inspired Preact signals. Um, and. And everybody since has basically copied
[02:30:34]  that work. Solid 2.0 is based on Milo's original reactively work, which triggered this whole signals thing. I gotta give him some credit there. Um,
[02:30:42]  cause the angular signals roughly based off the same thing kind of, I mean, they, they went through a few different phases and. Um, the, there's specific
[02:30:49]  implementation, but the, the, the general push pull. Kind of. Uh, approach then the solid and then alien signals is like optimizing that through the ceiling. Um,
[02:31:03]  which, so I've, I've been actually looking recently at, uh, go at updating like the solid implementation to work the same way as alien signals, but it's
[02:31:11] , it's really just an internal detail in terms of link list. What we're talking about today is at a much higher abstraction level, right? Building things out of
[02:31:18]  signals instead of just like. Just the signal graph itself. Meanwhile, Milo was like, okay, I found a way to make something faster than alien signals. And that
[02:31:27] 's what he's working on. And I tried to implement that in solid. And that's actually what triggered this research because I realized that our projections, which I'll get
[02:31:37]  to in a minute, um, and a few minutes we'll, we'll actually actually had a huge conceptual bug in them. And that made me re-examine
[02:31:44]  what the foundations of stores should be in the first place. Um, but yeah, he, he basically, Milo basically figured out that he could make a purely eager push
[02:31:54]  base system. And unless you have like dangling stuff, which you rarely have in UI because it's all ownership, hierarchical, like basically the thing that we'd prove
[02:32:04]  with solid, it doesn't matter if it's eager. It's so fast. Um, Milo basically figured out a way to get rid of the, the,
[02:32:11]  the double phase, like the push and the pull. He just makes it push and keeps all the guarantees. So it's, it's very interesting, but it was a
[02:32:19]  little bit too immature and I had to work out other problems and work my way down. But generally speaking, it is internal optimizations that don't matter to you.
[02:32:34]  Yes. They, well, it's pushable. Yeah. Yeah. The, the, that's what I'm saying. So, um, the difference between like
[02:32:42]  solids, as I said, version was more push based because it's eager traditionally, but what I'm using now and alien signals is just a matter of like, did
[02:32:49]  we use link lists, like the algorithms different. It's not something that, that is particularly important other than getting the last bit of performance that you'll never see in a
[02:32:59]  benchmark that does anything like, like once you basically, once you hook the reactive system up to anything that actually has a cost, this, uh, overhead basically disappears.
[02:33:10]  Yes. To a degree. Although to be fair, we still do good enough compared to the alternative, which is dipping. And it's funny because I'm mob X tried
[02:33:25]  to do granular, uh, arrays and stuff. And I found that my immutable approach is actually faster. Um, so I actually changed it because I actually made a like
[02:33:34] , you know, view vapor, you know, and solids render and all that fine grain rendering. I made it solid based built on DOM expressions, which is, um
[02:33:41] , a generic library that could take any signals library and make a renderer out of it. And in fact, a couple of streams ago, I did that with alien signals
[02:33:47] . Um, and I did it with views, original RX system about four years ago. Basically I made a version of view vapor, uh, back in 2021 ish.
[02:33:55]  And, um, the, the, the thing is I did the same thing with mob X even earlier, like back in 2019 ish time period. And, um
[02:34:05] , um, what I realized was that they're fancy or observable array primitives are actually slower than me doing the immutable stuff in those benchmarks. Yeah. Yeah.
[02:34:19]  I mean, I don't think we've peaked here yet. Anyway, um, let's, let's continue this forward a bit. What if we have an
[02:34:34]  array? So we have model one, model two, model two, model one, and we want to say that to dues are forward. Then we update the title.
[02:34:45]  And then we say that to dues are backwards and we swap it again. Right? So I'm just swapping. I'm, I'm, I'm basically swapping
[02:34:55]  it, but keep in mind that these reference models inside are actually the same models. Do like when we switch back to backwards, like it's kind of interesting what the,
[02:35:07]  what, what ends up happening here forward, not surprising backwards, not surprising. It's the same. These objects are just the same things and different things. Um,
[02:35:24]  when I console long model here and model two, Again, these are the static references, but let's look at actually the to dues object, um, at the end
[02:35:37]  here. Oh, interesting. I wonder if, I wonder if I introduced a bug. Because -- oh, do you know what the problem is? I'm not using
[02:35:58]  the -- oh, I'm not using his fancy log function -- sorry, Tito helped me with this. His fancy log function, if you send a proxy to the Chrome
[02:36:11]  DevTools, they will keep on updating on you. So we actually had to clone it to actually show the difference. So yeah, I'm glad I noticed this
[02:36:23] , there we go, there we go, that makes more sense. We have -- after our set of mutations, we have one exclamation mark, and because I do more
[02:36:35]  changes theory right down here, and we've swapped the order, right? So we actually kept our model update, even when we switched it backwards here. It's interesting
[02:36:59]  whether that's expected behavior or not, but it's kind of a side effect of this, just want to talk about. And I want to show that the array prototype
[02:37:10]  is preserved, because if you just make something to an object, like clone an array, it's not like -- it won't have the array prototype, or like it won
[02:37:20] 't be an array. It'll have the array prototype, but it won't be is array. There's something weird about what they call them, exotics. And
[02:37:31]  to do with length is two, right? And now, what we do here, let's push the model on again, and then add an exclamation mark to the
[02:37:41]  last copy of the model. And then here, as you expect, the original model, because it's the same as the first model, actually has both exclamation marks.
[02:37:51]  And we have two copies of it. And sure enough, the length is three. Okay, so we did all this stuff. It's funny, because I actually don
[02:38:05] 't want to freeze it here. I almost wish that these ones were actually console.log, if you think about it, because I want to prove that these never actually changed
[02:38:17] . So if I actually change these two back into console.logs, what you -- I mean, you're going to see that we did all this operations, updated
[02:38:25]  the title and stuff, but we never actually changed the original references. Yeah, right? Okay. Finally, Svelte does something interesting with date, which is really cool
[02:38:39]  here, where if -- like, what happened to the Svelte version? What happened to the Svelte version? Weirder, why am I not seeing
[02:39:03]  the title update? Interesting, yeah. Yeah, look at the end result from the Svelte version, world, hello, one exclamation mark. I don't
[02:39:19]  think this is expected, right? Like, it's arguable, though, but this is -- yeah. Like, do you want the models to diverge like this?
[02:39:34]  I don't know. I don't think so. But what was cool about the Svelte version is, when I get to this date version, where I make
[02:39:41]  a date, assign a date, and then I set the date time, they actually end up with different date objects. Oh, no, but they do have the same --
[02:39:58]  oh, never mind, they do have the same time. So this actually is not actually that interesting. I thought that they actually forked -- like, yeah, so no
[02:40:05]  one can do anything about it. So this is just the -- yeah, so this actually is not interesting. I was thinking that they forked the -- yeah, no
[02:40:11]  one's going to clone the date. See, yeah, so they clone it so it doesn't have equality. But, yeah, what I was getting at was this example
[02:40:18] , this last example here where I showed date object. Date is a weird internal primitive. There's nothing we can do about it. Like, this set time is not
[02:40:26]  reactive. We can't control it. If someone mutates this object on us, even though it's inside the store, it's not a clone, so we can't
[02:40:36]  see it. It's not like we can intercept the getter or setter. So if you -- if you use a method that updates some internal method on this, you
[02:40:44]  do end up both with the same time, which is also true in Svelte. The only difference here is that -- yeah, because -- in Svelte,
[02:41:04]  I guess the date doesn't equal -- equals the date. It's true. Yeah, so they don't wrap. This is something I've been arguably going back and
[02:41:11]  forth with, whether we should bother wrapping classes. Originally in Solid 1.0, we don't. It had some weird edge cases for people. I'm still on the
[02:41:21]  table here which way they go. But my point on this last example is, like, with built-in natives, built-ins with their own mutable API, there
[02:41:27] 's nothing really we can do here. You have to manage this yourself. And I think this is true in all solutions. Anyways, this is kind of the base here.
[02:41:39]  We want the stable references, I think we want source guarding, and we want to be reconcilable, which means we can't just clone everything, okay? So
[02:41:54]  I -- I implemented this, as you can see. But then I hit some kind of -- a little bit of fun, right? Because in Solid stores, we have an
[02:42:05]  unwrap method, which would just get the object underneath. And the object underneath was mutated, so you're good to go. You just literally just found the object
[02:42:13]  and just spit it out. And that way you can get, like, the non-serialized version. But you can imagine, in a system that has stable references
[02:42:20]  and source guarding and is reconcilable, as in diffable, keeps those references around and does all these things. You can't actually mutate anything. So how
[02:42:30]  the hell are you supposed to actually unwrap? Well, I realized that semantically we couldn't have unwrap anymore. So let me see if I can open up an
[02:42:50]  example here. And we're going to do the same thing again. We're going to take the latest version of the reactivity and drop that into the sample.
[02:43:07]  And talk about Snapshot. So the idea here is that at any point in time, while you can't unwrap a store, you should be able to get a
[02:43:27]  version of it that's not reactive. And so we kind of debated calling it Snapshot. And the way this works is, obviously, if we create a store
[02:43:42]  and then we take a Snapshot, it's not going to be equal, right? Immutable and state is not equal, but immutable and ref are equal.
[02:43:58]  So in this case, because we haven't changed anything, they actually match. Because it's the same underlying object. When we take a snapshot, we actually pass it
[02:44:06]  out. Now, if we set update a, this property here on this object, then take a new snapshot. Again, new immutable and state can't be the same
[02:44:21] . Old immutable and new mutable can't be the same. And new mutable no longer equals ref because you've now mutated something on it. And now
[02:44:32]  it needs to be cloned if you're going to get like you have to actually apply the mutations. However, B is still equal between these two. So this,
[02:44:45]  this basically keeps the references as much as it can. But when it hits a mutation, it has to clone up the tree. This, this is basically immer as a utility
[02:44:58] . So you can go from, as I said, internally, they can be diffed. You can give it reconcile with immutable sources and diff. This is how
[02:45:07]  you can get a basically immutable snapshot out of the system. Now, if you don't do any mutation and you literally just do diffing and snapshotting like this
[02:45:18] , you're not actually going to end up cloning anything. It's, it's, it's basically like if you're facing with an immutable system, like redu
[02:45:25] ct or X state, it's basically just going to, it's, it's basically only just going to update every little fine grained signal that changes and notify that.
[02:45:37]  Um, but you're actually not going to, but your references will stay completely stable. Um, whereas like, if you're mutating stuff yourself by hand, then
[02:45:49]  because of our override system, that's not like swapping out references, then technically speaking, you might end up with, you know, different references than you expect, but
[02:46:00]  it'll still, because the values are different, we'll still work in a diff. Does that make, does that make any sense? That makes any sense? Um
[02:46:06] , sorry. Class loses his prototype. We need immediately. Yeah. That's the thing. Cloning is a pain and it's a pain. Um, I'm,
[02:46:25]  I'm hoping that like, cause if there's a way to clone a class, uh, I actually like researched it, you know, because you can go object doc create
[02:46:34] . Get prototype of class instance with, with, with, and then assign the local instant properties on top of, but even that doesn't work with private properties. So
[02:46:44]  like, I don't know if you've ever like tried to manually clone a dom node. Like it's not the same as just, um, using the clone helper that
[02:46:53]  they provide because like it loses stuff anyway. So yeah, I mean, this, this is, this is the sort of change of mindset that you end up going this
[02:47:18]  way. But the reason I did all of this, let's, let's step back. Cause I want to get to projections. Now the reason I did all this
[02:47:24]  is I'm working with Milo on this push based system. And ironically, at the exact same time I'm working on SSR, which is a completely pull based
[02:47:33]  system. It's not even push pull. It is sort of push pull cause the promises kind of push so that they don't waterfall. But generally speaking, I've been
[02:47:42]  working on an SSR mechanism that is pull based, uh, essentially. It just collects the promises and then when all the pro promise, all them, and then tries
[02:47:51]  to pull it again, collects all the promises, promise all of them tries to pull it again. Like, so it just kind of fills in the holes. Um, it
[02:47:57] 's not because the only inter action in a, in a SSR system is not human interaction. It's data interaction, which means that we can basically, um, model
[02:48:06]  it completely pull based without, um, like I want to get solid run once render method on SSR as well, essentially. Um, even with like, cause right
[02:48:17]  now we work like react, you hit suspense, then we re render, you know, um, which was weird. So this, this could solve that. But what I
[02:48:25]  realized is, let me, let me, uh, let me make a new playground here and kind of highlight what the problem is. What I realized was, okay. What
[02:48:41]  I realized was. Um, sorry, we're having like back, I have so many of these like scrap note playgrounds that aren't real, but I'm going
[02:48:51]  to do another one here. Okay. It's another one of those scrap note playgrounds that aren't real. I can close a few windows here. I don't
[02:48:58]  need this anymore. I need this anymore, or even the JS repaint benchmark. No. Um, we, we have the situation where you have a store. And
[02:49:14]  you create a store and it's got some stuff in it. I don't care what's in it. And somewhere new UI, you have a div or something,
[02:49:24]  and I don't care what it is. You have some UI and it reads store.a. Okay. And then there's also, you know, this is a fragment
[02:49:40] . Let's say it doesn't really matter after it, there is some comp comp component, a component that takes the store. Okay. I, I, I would
[02:49:54]  never pass a store like store like this. Like you need to have names and semantics and all this, but I'm just, for my case, I'm just trying
[02:50:02]  to show what this looks like. And then inside comp, you do something like, oh, actually I need a projection here. So I go prod equals create projection.
[02:50:17]  My projection is going to do a bunch of stuff, but it uses the store as the base. So it projects over the store. That's the, the object comes in
[02:50:30] . And. So what I realized was if we didn't source guard, I'm going to go P. Okay. And we did something like P dot a equals five
[02:50:46] . This is just the create computed or use effect problem all over again, because it would render this and then get here and then update this. This is actually updating this
[02:51:05]  because, you know, if it writes through, right, and then this has to update now on server with SSR. It's too late. You've already resolved this
[02:51:14]  and in Milo system with a push, it's too late. You've already resolved this probably so like, this is just bad, like, I love the API
[02:51:26]  and what I was doing here, but it, it can't be a derivation if you're mutating the source. Like all the examples that we've been using
[02:51:39]  to date in solid, uh, with projections involved look like this, um, create async. Fetch stuff. Right. And then I'm going to get rid
[02:52:00]  of the components down for fun. And then essentially some bare variation of reconcile, uh, data. And pass in the store, like essentially this has been most things.
[02:52:29]  Cause what this means is you can fetch as much data as you want, like whatever, get your user list. And whenever something triggers this user list to update, it's
[02:52:38]  just going to diff the data versus the previous data. And this is new immutable data and like, it's not even immutable. It's not even reference shared
[02:52:46] . It's completely different. It would match. So reconcile has a key, let's say the keys ID. It'll, it'll match on the ID and, and
[02:52:54]  then do the diffing and then spit out a store basically that does fine grained updates. But what was happening is the reference guarding meant that the data underneath here would get
[02:53:07]  mutated. Now because create async is immutable, like a signal, uh, no one really cares because you're like replacing it every time you update.
[02:53:17]  So the old value gets mutated to hell, no one's ever going to notice and, um, you know, no, one's over here. Like, so,
[02:53:27]  so like our base case, when we made this, the incredibly performant and optimized strello demo, uh, basically never would run into a problem. But even here
[02:53:35] , it's kind of awkward if the source is a signal or something like it's, it's pretty awkward. If you're mutating something and just relying on the fact
[02:53:46]  that this doesn't actually trigger updates. Um, this is, this really bad, you know, conceptually, I mean, it's not bad in that it, in
[02:53:57]  the common case, nothing goes wrong here, but it was something that I was like bugging me. So that's why I started looking into source guarding and, and
[02:54:04]  started looking into this because I realized that if we could source guard our projections as well, we would actually finally have truly derived granular data. Like my previous approach looked like derived
[02:54:17]  granular data, but it wasn't completely. And this is why when people ask me, oh, why do you use stores here? Why don't you just use signals
[02:54:25] ? Well, when I was working with Milo, we were, we created a firewall, which is this way to do like safe, computed things, but the power of
[02:54:33]  stores. And don't get me wrong. We, a part of like that probably should exist like projections in themselves. I've covered this prison stream are actually a crazy thing
[02:54:42] . They they're designed so that they're actually both lazy and safe from a writing standpoint, they, they ensure that things downstream actually run after them. So they actually
[02:54:54]  are glitch free writing. Unlike it does not like use effect, which, um, uh, basically reruns the whole cycle again. And they're not like create computed
[02:55:09]  today, which is like, uh, you know, depending when it runs, you might get the updated value. You might not cares. It all stabilizes. These actually
[02:55:16]  create what I call a firewall, which basically contain the execution to that point and then continue after they, they calculate. Um, basically a very, like, this is what
[02:55:30]  inspired Milo to create the push only base system. Cause he realized that he could basically get firewalls for free, um, with a push base system. So like
[02:55:40]  he basically designed a world in which create projection was super performant. Whereas this is one of the hardest problems, um, generally in these systems, because you have to notify
[02:55:53]  through, like, if you don't have a projection and you're listening to. And, and a thousand things listen to like our separate signals come out of here and
[02:56:04]  you, one signals triggering it. Well, even if only one piece of the data changes, the naive approach to doing this would notify all a thousand places and rerun all
[02:56:18]  those computations. It's actually slow. Um, I, we needed a S a specific solution to actually solve this. Like it's, I call it the crate
[02:56:26]  selector problem. Like when you go like selected ID is five, do you want to check all a thousand rows? Or do you want to just update the, the row
[02:56:35]  that was previously selected in the new row that selected projections solve this problem? Um, by creating this firewall mechanism, which prevents the expense of work from being scheduled. Now
[02:56:48] , um, this is, as I said, this is a whole other thing that I've covered previously on stream, but my problem was I, we weren't source guarding
[02:57:01] . That's the big change today. Yeah, structure clone does not handle classes nicely. I mean, you can have a simple push bull and the client, I watched
[02:57:34]  my previous stream. I, I don't often say this so directly, but the async model that I'm working on for, or that we've been working on
[02:57:48]  a devs act has been a huge help on as added a few others for solid 2.0, which I'd covered in that stream is mind blowing. It is so
[02:57:57]  much like ahead of what every other framework's doing, including the stuff that just came out in Svelte. It is like, it's, it's crazy.
[02:58:07]  And I, I'm not saying that I was trying to, the problem with SSR is it's a different zone. Like you, there's no point if you,
[02:58:14]  if you pull it, it's overhead to deal with the push part. Like if you have to make all these like signals and do all this stuff, it's you're
[02:58:20]  basically paying the cost. SSR wishes you could just jam all the strings together and shut up basically. Like every little overhead is so much more detrimental, even creating the signals
[02:58:29]  is expensive during SSR. Yeah. I mean, I haven't done a stream on how push base works, but he, he, Milo has already shown that
[02:58:42]  it's basically, he can beat alien signals in, in those benchmarks that everyone likes to talk about that. I don't, again, I don't think they're that
[02:58:50]  important of benchmarks. There's different types of benchmarks. Um, those benchmarks are not that important, but, um, he basically just has a very smart graph, height
[02:59:01]  based graph traversal. I actually talked about this a bit on a couple of streams ago, but it's, we'll have a dedicated stream at some point. My,
[02:59:08]  my, my point is once. If assuming that you have a firewall based projection model so that the, the, this is not just create a use effect all over again
[02:59:20] , then, um, like mutating is still a problem is what I'm getting at. Um, you can't drive stores from stores. Like the one thing that insign
[02:59:31] ia has going for it is you, you can keep the diffs going all the way through. So I had to stop and kind of walk back and I'm not
[02:59:37]  sharing all my hack MDs on here, but like, I, like it's, it's been, it's been a long journey. I'm just going to throw
[02:59:47]  a couple of these in, but like talking about signia, which we already talked about back to stores and projections reconcile. So I, I, I went through this.
[02:59:58]  I was like, well, maybe we can immutably clone, you know? Um, but the problem with immutable clone and why stores are important here. There
[03:00:05] 's immutable clone doesn't pass through. What do I mean by pass through? I mean, if you use a store as your source, you should be able to have
[03:00:17]  the outgoing projection also update when the store updates. See, one of the benefits of this right method was that if, if, if we go back to when this thing was
[03:00:29]  just a store, you know, they forget all about this. And we go back to when this thing was a store. If our store also has B and C on
[03:00:43]  it. Okay. If you listen to prod B, you know, like an effect or some rendering or something, even though. Like, like let's pretend this is
[03:01:03]  tied to some kind of signal. It has nothing to do with this projection it's doing right. A is overwriting this value or something, right. Or setting this
[03:01:13]  value. But so if it's a store updates, be like someone here called set store update B. It should still update through the projection. Right? Like, like
[03:01:25] , like you over, and it shouldn't even need to run the projection if you think about it, because it didn't read from, it didn't read from B.
[03:01:33]  So how could it possibly run the projection? I, I have conceptually, I, I, I, I'm still on the fence. Whether push pull is actually
[03:01:49]  just better for, for, um, for the, for the client. But where it sits, it looks like that. Yeah. It's not entering the scope,
[03:02:02]  right? Like there's nothing here that's listening to store B, right? So this should still work. And the problem with immutable cloning is the store can't
[03:02:13]  be the source anymore. Cause you've cloned it. Like it's not, if you, if you cloned it and I guess you cloned in here, then
[03:02:19]  you could re-trigger this whole thing and then recreate it and go, but you get, this should just work. You should be able to, you know,
[03:02:26]  let's, let's continue on here for a minute. Yeah. I talk about the, the whole reconcile problem. This is, this is, I was saying that it
[03:02:35]  was create async and reconcile, but we actually. With optimistic updates, we actually have a pattern where we reconcile when the list comes back from the server and then we fine
[03:02:43] -grained add the, on the mutation. And this pattern is the most optimal way that exists. You can't even do this in react. Um, because you have
[03:02:49]  to clone everything and re-render lists and diff everything. This is like, it turns. Optimix updates to the same performance level as normal signal updates on the client.
[03:03:00]  Like just like one for one. And then the diff should in concept match, which should cause no further updates. It does do a diff in the background, but it means
[03:03:09]  that the actual, from the UI standpoint, it's a, you, the whole server interaction is basically as optimal as if it was client only. Like we, we
[03:03:19]  changed the physics of it because client update. So you go, oh, I'm going to add a new to do. So you tell the server, you're going
[03:03:28]  to add a new to do. And then the client just adds the to do into the list, into the projection over the server data. So you have the server data plus
[03:03:35]  the to do. And then the server comes back with the updated full list of to do is like I'm picturing something like TAN stack, like it doesn't
[03:03:43]  have to, and you call it a day, but if you want to have a model that actually stayed up the date, you know, maybe someone else pushed something where you
[03:03:49] 're gone. Well, conceptually, if no one has the list that you, that comes back from the server has that new to do in it. And the IDs
[03:03:59]  match and the keys match. And because of the stable references that come from the projection, it means that you actually don't recreate the to do, it just goes, okay
[03:04:08] , everything matches, I'm done. So like the only actual mutation that made its way to the Dom was the initial fine grained update. So where you updated the complete
[03:04:21] , so like, or added the to do or whatever. So like this, this model is incredibly powerful because it doesn't clone, doesn't remake. It doesn't
[03:04:29]  do anything. It literally just, you know, it lets you use something like a TAN stack in validation model, yet be completely fine grained. Now, as I
[03:04:39]  said, the problem was that we were writing to create the async data and the we're mutating it directly, right? So yeah, signal source. And then,
[03:04:48]  so I was like, what about this idea of pass through, right? What if we could, this is where I got source guarding from. Because I was like,
[03:04:57]  what if we could essentially have the original data and anything that the projection didn't override pass through. So we, we'd keep a source and an override. Right. And
[03:05:11]  then I talk about resetting and reconciling and better mapping. And I go on a crazy tangent where I actually decided, I was like, what, what if we
[03:05:18]  just diffed every time you assigned, but then you change the semantics and stuff. Let's see if I got any conclusions here. But yeah, I talk about
[03:05:26]  mapping because a lot of times people want to map. Yeah. Yeah. See, I guess one of the problems here is if you're not projections, lend to diffing
[03:05:39] . Like, don't get me wrong. You could are applying this because. You could describe the, the next state. Like the way that I'm like doing here
[03:05:49] , like describing the next day. You know, but it's quite often what you actually happen is you added it to, or you did a specific event and you only want
[03:06:00]  to. Do the specific action. You end up with that switch statement. A bit like that switch statement. We saw insignia, if you think about it. And
[03:06:09]  I was like, well, can we get back to that niceness that we have with. I call it niceness, but it's a lot of cloning that we
[03:06:19]  have with like immutable data where you just need to describe the next data source. Right. And the answer to that, um, is tricky. I went through this
[03:06:29]  whole thing where I was talking about preserving state and an auto resetting and all of this. Basically I'm going to go to the next article. Cause I think I'm
[03:06:35]  done on this. And the answer kind of is no, um, we think protecting the password protection. Let's, let's go to this article. Sorry. This is
[03:06:44]  where I go through all the academic stuff really quick before I get to the actual demo. Right. So I was like, okay, I, I, this whole article
[03:07:01]  here was like, what if there was no reconcile and it's everything automatically reconciled? Um, so I was like, I, I started playing it like an example
[03:07:09] , right? Where you, you have a signal with an object in it. And what's cool about this is you don't call reconcile. Literally anytime you assign a signal
[03:07:19]  or value to a store, you just get fine grained updates out the other side. It sounds pretty sweet. Right. If you set a new object here, both
[03:07:27]  of these will update. One will. Right. Cause P one and P two to rerun and also triggers, you know, everything cause it diffs, but it doesn
[03:07:38] 't trigger a because a didn't change. Right. Only be changed two to three. Right. Cause that's what you project to make the memo around the read only value
[03:07:46] . So, but basically what I, what I started realizing is don't view in the way that we view a store as a tree of signals. We should view a
[03:07:57]  projection as a tree of link signals using the angular term. Um, or I call them writable memos. Right. Like this is what people think they want, but
[03:08:10]  I realize this is what they don't want. We'll get there. Like it's close, but there's problems here, which we'll get to. And
[03:08:21]  then I was like, okay, well, can we do the same thing with, uh, what did I say? Store object source. What did, what did I do
[03:08:29]  that? What's this one? Simple object stores. Yeah. I'm like, now what's the difference if it's a store? Well, if it's a store
[03:08:36] . When we set. B to three, we're doing a fine grained update. Now we're not like replacing the whole object technically. This one doesn't need
[03:08:47]  to rerun. Cause you're the, this store is still assigned here, but this one does object.assign. So it actually accesses like, uh, S
[03:08:58]  dot a S dot B. So this will trigger it to rerun. Um, and it triggers and doesn't trigger same behavior, right? The only difference is now
[03:09:06]  cause you're using store. It's actually smart enough. Not be, and you're only updating the thing not to rerun the projection in this case. Only in this
[03:09:12]  case. Okay. And then I go on the whole thing about. So she's using writable memos. Anyways, it doesn't actually work that way. It's
[03:09:21]  actually more complicated than that. Signal array source. Um, same idea. Honestly, this isn't rocket science. The, in terms of what the expectation is in terms of
[03:09:34]  like diffing. But the, the problem that I started having was I started playing around. Yeah. Okay. I started around moving items around. And I, I,
[03:09:48]  I, I, I, I pointed out that the operations are actually kind of expensive here. Um, because you actually have to look in the array. The, the challenge
[03:09:59]  here is with arrays of objects is that like, it's the same problem I mentioned before with react. If it matches on the model, it still has to diff deeper
[03:10:08] , which means that like every time. You move something around, even if nothing changed, it has to diff. And this is sorting the, the, to get around.
[03:10:18]  I started kind of playing around with trying to design the solution array overrides. As I said, if you want to go into it, you can, but like,
[03:10:26]  you have to understand that there's a lot of operations that don't care to diff the list. Yeah, if you send an array, you have to dip the list
[03:10:32] , but if you push, then you're adding an item on the end. And it's kind of interesting. The problem that you have is like a shift operation.
[03:10:41]  Put something at the front, which means that the proxy gets. Like some people ask why we still use array assignment and solid, instead of using like push or, or like
[03:10:50] , like why we don't recommend push and stuff. And the reason is push is fine. Cause it's at the end and you can just assign at the end.
[03:10:57]  But when you use something like shift or unshift that moves the front, the proxy actually triggers on every single index in the array with the new, with the new value
[03:11:06] . Now, honestly, it's probably not that bad. I just was like focusing because our API was immutable. Just keep it that way. There's no real cost
[03:11:16]  works fine. The JS framework benchmark, et cetera. But if, if you were shifting and then getting a new index and then you have to diff every time against to
[03:11:25]  make sure, oh, is it still in the list or like, like it doesn't know what it's getting. So every index would have to diff arguably independently against the
[03:11:34]  whole rest of the list to figure out like, okay, am I a known model? Should I diff further? Do I have my replacement? Do I need to wrap?
[03:11:40]  You know, really bad for performance, you know, when, and I, I, like, I was like, I was really trying to push this, get rid of
[03:11:51]  branching, you know, like what if you could just make it this out of state and, uh, where did I summarize it? Like I go through a bunch
[03:11:57]  of problems here. I don't know if it's worth getting too deep in this, but essentially it doesn't really work. I started like talking about how the, the
[03:12:06] , the problem is like you, you naturally start asking conditionals and splitting the logic because like, if it's not, I was thinking like, look, if, if
[03:12:19] , if you could, every time the projection updated, just reassigned the to do's and do the diff, um, you know, that would be great. Cause
[03:12:25]  then now you don't have to worry about it. You could just go like, this is an example of adding like a selected index to, to do the list. You
[03:12:31]  could basically just go like every time the projection updates, diff the list. And then, oh, if it's the same reference, you don't have to do a
[03:12:39]  diff here and then project the thing on. And like basically this way, if this updated, this would be a no op. And if this updated, then it actually the
[03:12:47]  diff that was like my thinking. Um, so then you can get rid of the conditionals. But what I realized is first stores, stores can update without triggering the
[03:12:57]  top level. It's never going to show different. It's never going to show up different in a diff, same store reference. And if the underlying story updated super granular
[03:13:07] ly, we will lose change. What if the mutation isn't selection, but instead something that overrides the base to do list, like a temporary item, like an
[03:13:13]  optimistic update. In that case, you wouldn't want a different change, like selection to cause a reset, which it would. So like, there's a lot of
[03:13:21] , I'm hoping I'm making some sense, but there's a lot of edge cases that come with trying to just assume diffing and it boils down. I got to
[03:13:31]  a conclusion here. Yeah. I was talking about, okay, well, if one extreme, we fall back to a diff and project the world, what's the other extreme
[03:13:41]  look like? Well, ton of branching, right? Which is like what Signia is doing. But does this design lend to function forms of stores, projections?
[03:13:52]  Okay. Conclusion. I just need to make things so I can play with it. So take aways. Projections shouldn't mutate their sources. Good. There
[03:13:59]  may be a few solutions to this, but that's the core principles. Ideally, we want to restrict the range in which we diff, which can, which can diff based
[03:14:06]  on the type of operation we do. At the extremes, we either dip everything or communicate diffs. It's questionable whether the middle needs exist. Mutation pushes you into
[03:14:15]  thinking in terms of discrete events instead of stabilized state. This isn't, this is an important thing, right? This is where I realized that diffs or instructions are
[03:14:23]  events and not state. Okay. Sorry. I'm getting to the last article now. I know this has been kind of a whirlwind. But we're, we
[03:14:34] 're, we're getting there. Just going to post it in here in case people want to follow along, but. This is after I did the proxy thing. Right.
[03:14:49]  Um, and I, I started this mental thing. We already. We've already established that these are the three qualities we want, but I got to the, this
[03:15:00]  place by identifying. That for a stores. Like let's look at this conceptually. What stores are. Stores are readable versions, immutable, reactive and equivalent
[03:15:11]  signals. They require stable reference. And if expectations, they are portable and the source of truth. So I was like, I, I Moscow'd it. I'm like
[03:15:18] , okay. Reference identity is a must. But that's the only must of stores. We should probably make it reconcilable. Unless we were going to say
[03:15:27]  that all reconcile. Diffing happened in projections. Um, we could do path identity, like give an option. So it works like Svelte, like where you
[03:15:37]  needed like explicit models or IDs. If you wanted to have that shared behavior, but. We could source guard stores. Don't need to be source guarded. Cause you know
[03:15:46] , you can just mutate. Like we've been in a way with it in solid and view for years. So it's fine. Um, but you probably wouldn
[03:15:53] 't want to reconcile on right. Like different on right. Projections should have reference identity, but must be reconcilable and must be source guarded. So, uh,
[03:16:04]  I basically just looked at these and we're like, okay, must here, must here, must here. Those are the only things that we a hundred percent need to do
[03:16:12] . And I started designing, uh, that and that it's no, it's no surprise that that is this list right here. Um, right. That, but
[03:16:23]  then when I looked at the coulds, it was a lot harder. Um, and honestly, this, I go into like talking about the trade-offs here and like
[03:16:36]  whether, like, I think one of the biggest key things is like, should stores and, and, and projections be the same? Like core primitive and I, I
[03:16:44]  arrived at yes. For a while I was thinking, okay, they could have different rules, but it's confusing. If projections diff when you write in stores, don't
[03:16:52]  like it creates weird expectations. And ultimately I would love, I love in the same way that like, I don't know if you've, you've seen this,
[03:16:59]  but in solid, uh, 2.0, the idea is if you go state set state. Okay. And you go create signal. Okay. So if you
[03:17:12]  pass a basic value or an object or whatever, it's, it's just a normal signal. But if you pass a function that props dot data, now it's
[03:17:26]  a link signal essentially. Um, cause I realized that the form of the center is the form of the drive state. It actually takes previous as an argument. And what I
[03:17:38]  want is that when you do create store, when you pass the function, like also you pass the object, but when you pass the function, it's a writable
[03:17:52]  projection. Thanks. Yeah. Yeah. No, for me, it was, it was a big realization. Yeah. Does it track. Right. Like there's a parallel
[03:18:15]  here. Right. Why like, and for that to happen, you kind of need them to be the same primitive. Does it track destruction? No, I mean,
[03:18:27]  destructuring destructuring doesn't work in general because there's still functions. These are proxies. Yeah. I just give up on destructuring. It
[03:18:42] 's not worth your effort. It's actually makes code less clear. I think, um, anyway. So because of this sort of parallelism, I don't.
[03:19:00]  I, I, I, I'm kind of dive. Like, I don't think we should diverge. And basically the only cost is unwrap goes away.
[03:19:13]  That's the biggest cost here. I, at least for the must. So the real, it comes down to the cuts. Do we want to dip all the time?
[03:19:23]  And is it really realistic or clunky to try and force models or collections? Because in order to dip all the time, it's the reason that reconcile has IDs.
[03:19:29]  You need to be able to, like, recognize what models are the same. I think. So, like. You could. It's not enough that, like, you
[03:19:39]  can't rely only on referencing when you do diffing. So I go through a bunch of examples. It doesn't really matter that much. I'm trying to remember where
[03:19:48]  I actually hit the thing. I, yeah. I used the JS framework benchmark. Yeah, this is fun. Because I was showing, like, okay, what if
[03:19:55]  we took a benchmark that's big on performance and tried to see if we diffed on all the operations, would there be an overhead that would be expensive? This is a
[03:20:03]  pretty hard line to go against. Because I'm basically saying, I don't think any, if we diffed always with stores, I don't think anyone should suffer the
[03:20:11]  performance. Right? That's basically the argument. So I'm like, okay, what would this look like? So I actually went in and, like, took the code
[03:20:16]  from the JS framework benchmark and go, okay, we're going to add a thousand or ten thousand rows. This is unchanged because if the list is empty, we basically
[03:20:23]  bypass the diff because it's all new. Good. Okay. So it doesn't affect creation time. Replace a thousand rows. The same code getting called is above,
[03:20:30]  but the items are already in the list. In the benchmark, we know there are no repeats. So one could cheat by clearing before setting. But I think it goes against
[03:20:37]  the spirit of the test. This unfortunately lead to a shallow diff on the dataset. It would realize nothing is matched, but not before checking every item in case the nest item
[03:20:43]  needs further diffing. And then it would diff again at the insert point. Basically, you'd both diff at the point of setting the data and then realize nothing had changed
[03:20:50] . Or that it was all new and then you'd have to actually diff the DOM to do the replacement. So it's, it's, this is probably one of
[03:20:57]  the biggest wastes of time by defaulting to diffs that you don't get with just a replace. Update every 10th row. Sets a primitive value. So
[03:21:04]  no diffing. Yeah. It just updates a string. So like there's no diffing. Select row. This uses the projection demand index independently. So no diffing
[03:21:12] . That's fine. Replace row. This works off an index switch that would shallow diff the items being switched. Since these are models, it would diff all the
[03:21:20]  keys in the new location. This might have a tiny overhead, but this operation triggers list reconciliation anyways. And there are only two listen to properties. So this might be un
[03:21:26] noticeable. Remove row. This one is actually pretty problematic. The proxy traps would see this as an index change for every item after the change. So it would
[03:21:36]  independently diff each of those. If the keys lookup was global, this might be somewhat okay. So what I'm saying is if you don't look in the array
[03:21:43]  for the object and instead you have like some model map that's universal, like your IDs are universally like UU IDs. Like, so no, like you don't have
[03:21:53]  a user with model one and a post with model one. You have a user with, with ID U one and a post with P one or something like completely unique. This
[03:22:03]  would be fine. But otherwise you're actually having to dip through like lookup in an array, which is like not an O to the one, but an O to
[03:22:10]  the end operation for each index impacted, which means it's an N squared operation, which is pretty much unacceptable here. Add a thousand rows. Classically we do this.
[03:22:21]  It's more expensive than dip with diffing probably. So you probably just push. If we assume global keys, all new data, the lookup would be cheap and no
[03:22:28]  diffing, but without global keys, this would also be expensive. Clear rows, cheap from a diffing standpoint. So that's fine. So it's worth pointing out
[03:22:37]  that none of these scenarios want data diffing. So the penalty on two, five, and especially six would not be wanted. I could make an argument for maybe two
[03:22:44] . We viewed it as a filtered query case. But five and six are fine grade operations and their intent doesn't carry diffing with them. The main reason is a proxy
[03:22:52]  can't tell the difference between a move and a set. In fact, none of our semantics really can. A move doesn't require diffing unless it's also a
[03:22:59]  data update. And we can't encode that information into a single mutation. So this was the other huge mind blowing thing for me to realize. Um, I don
[03:23:09] 't know if this is obvious to people, but I'm like, wait, no, I realized two seconds later that I wasn't a hundred percent right. And I'll
[03:23:19]  clarify that in a minute, but just think about it. Like it's the reason why you lose information to mutability because you put a bunch of changes in and you enc
[03:23:27] ode into the next state. Now you don't know what changed the same thing can happen to mutable change. If you, if, if basically. Like it's
[03:23:35]  fine if it's all updates, but if you have moves involved as well, you can't really tell what the intent is. You have to assume that anything moved could also
[03:23:45]  be updated. Um. Okay. No, wait, I'm wrong. There is a way to tell between set of move. A set has a previously non proxy value
[03:23:57]  and a move would have an existing proxy value. So yes, case five, six would see a proxy and no, not to diff splice still hits the proxy trap every
[03:24:03]  index, but after the change, but that's his problem with mutable updates in general. With this knowledge, how bad is setting a new array? If the items are
[03:24:10]  proxy. Well, O to the N it isn't free, but it isn't necessarily super expensive. It might be enough that it's less preferential in like splice
[03:24:17]  case to just hitting every index, which is, which it is today. Yeah. Also case two is more expensive than I'd like since it also needs to go through
[03:24:25]  and realize. None of the keys are actually matched. Well, it's good to know that there's shortcuts at least your performance. The only real cost is a minimum of
[03:24:33]  always distancing system is it'll be shallow checking every index and array on set of a full array, which would otherwise wouldn't need to happen. There's a world where this
[03:24:40]  cost probably isn't too bad on performance and magic allows it to be pretty compelling. Right. And when I showed this original demo, you guys like, I saw the thing
[03:24:47]  in the chat being like, wow, this is sweet. So we could just easily just not diff in all these scenarios. At least I think so. We haven't
[03:25:00]  really looked that deeply on maintaining source guards like this. This, there is a sort of diff like quality to that solution. And there may be some nice qualities for even localized
[03:25:08]  explicit diffing. We make global models a concept. So I talk a bit about data structures here. You know, basically our store node, like the thing we proxy
[03:25:19]  over actually having a reference to the value of the override, and then the different types of signals, like the get an in, because we have to actually handle the get case
[03:25:26]  differently than the in case. And they have to be independently reactive. Um, I'm not going to lie. This was really tricky to figure out. And none of
[03:25:37]  the solutions I put here actually ended up working because the problem is if a store override creates a signal, like we create signals on read generally with store. So, um,
[03:25:46]  that's good because that means that anyone in the future who listens to it will get that update if it changes. So even if a property doesn't exist on a store
[03:25:56] , we'd listen just in case. If you listen to it, we create a signal. Now, if that signal is over top of a store and that underlying store updates
[03:26:05] , there's no, there's no linkage. It's not going to know to update the signal that you're reading from on top. Um, so like in the case
[03:26:12]  where you haven't actually overwritten the value, but you've listened to it and then you change it, you kind of blocked it. Um, so I was coming,
[03:26:22]  trying to like turn them into writable stores. Like I was like, like, okay, what if we have a signal with a priest value? And then like,
[03:26:28]  okay, can we do this? But the problem is writable stores override. The whole point of them is a reset. Like whenever the source updates, you wipe out the
[03:26:34]  ephemeral state and you start over again. This is the opposite. You want overrides to actually hold. Um, like, I think like if you override something
[03:26:41]  to projection, now you can ignore the baseline store. You don't want that to come in and wipe out what you have there. Right. It's the reset happens
[03:26:49]  when you diff or when you replace the value. It's not, it's, it shouldn't be happening. Like it, I mean, this is arguable, but
[03:26:57]  I'm pretty like you override something for a reason. So I, I was like, okay, maybe you need two singles and memos and all this stuff. The
[03:27:06]  solution here ended up actually being checking if the source is a proxy. And if so, relying on it for the value rather than the signal, but still subscribing to both.
[03:27:16]  And then when it's an override use the projections signal value. And when it's, um, not an override use the underlying stores value, but still subscribe to both
[03:27:28] . And you might be going, why use signals and you can just like read out the value here, you know, just trigger the signal and then read the value. Well
[03:27:34] , concurrency, I want these projections to be safe for a concurrent rendering. And you, which means any value that you read has to be in a signal because only
[03:27:45]  like random values are not like going to be concurrent aware where like a signal would know whether it's value or drive signal or whatever is part of that transaction and is able to
[03:27:57]  give the previous value or the current value or the future projected value based on, um, that automatically it's built into the model. So we actually want to read, we
[03:28:07]  can't just store, we can't just like use signals at an event emitter, essentially like just like trigger the event, read from some value. We actually need
[03:28:14]  the signals to own the data that they put out there. Otherwise, um, we can have tearing in our concurrency model, right? Um, some people wonder, but
[03:28:24]  yes, solid and salt 2.0 will have it as well. We already have a 1.0 has concurrent rendering those like react does not just suspense, but actually multiple
[03:28:34]  realities existing at the same time by forking the reactive graph. So this is a hard requirement here is which makes our, you know, you start seeing why this is
[03:28:44]  challenging source guarding, reconcilable. So yeah, there's a, there's a hidden other one here concurrent safe. All right. Everyone's still alive. I
[03:28:59] 'm sorry. It's been a lot of talking. So this was a theoretical part of this, of the stream. What about vectorization for diffing? Are you
[03:29:08]  doing that under the wood? I'm not actually quite sure what you're referring to. The way the diff algorithm works here is we keep references. So we do like
[03:29:17]  the typical, like if nothing's changed, um, like basically we swap, um, what we, what we do is we swap the, the, the value object underneath
[03:29:30]  the proxy. Proxy stays stable. We switch the value object and then we diff the, the, the signal properties, which are only things that are being listened to.
[03:29:38]  And then we continue to walk down that, um, because if, if there's no signal value being listened to by swapping the source object, then you've already
[03:29:49]  replaced everything under it. And you can, it's safe to replace it with the new references all the way down tree. But if something's listening to it, it might
[03:29:56]  have signals and signals and signals down. So you walk down the, the, the things, listen to path, and then you swap the, then you go, okay,
[03:30:04]  well now we have a new value here. You swap that in that signal and diff and continue on there. But basically we only diff with the 2.0 algorithm. We
[03:30:10]  only diff the things being listened to. Otherwise it's just about value swap that goes kind of unnoticed. Um, yeah, but yeah. The, so these
[03:30:21]  are the qualities, stable references, source guarding, reconcilable, concern safe, but automatic diffing. No. And which means we don't have to worry about path
[03:30:29]  based or stuff. We can just assume things are generally by reference models. Like I showed earlier where they're the same objects. So, um, back to stores.
[03:30:39]  We're trying to use the same mechanism protection wrap over stores since the condition is detectable. And if that may be the only situation, we need more complicated reactivity logic
[03:30:47] . That's true. We have to pasture. So this means the store mechanisms did not need to worry about that and use signals and initialize on read. We suggest that
[03:30:53]  solutions similar to what we have today, except the overrides. When not list, except we have overrides and not listen to probably good place. Start blah,
[03:31:00]  blah, blah. Okay. So that this brings me all the way back to the example that I posted on Twitter. I mean, we're only what, three and
[03:31:11]  a half hours in to get here. Maybe I should have started here. Cause this is the exciting part, but this is to reward you, everyone who stayed to, to
[03:31:22]  listen here. So let's, let's look at the setup. Okay. I created two signals. I created a ref so we can check it later. And I
[03:31:32]  create a store from that ref. I also created a projection that derives from that store. And I created some overwritten properties that aren't on the store, a,
[03:31:44]  b, c, and d. And there's, there's a few different qualities here that I'm testing. I have a, I have b, I have a plus
[03:31:49]  b, and then I have, I have this one that actually self references. The reason I wanted to show this off just to point this out here is like inside signals
[03:32:02]  setters in solid. If you've ever used like our, our, um, like, uh, sorry. Like sets like our set, let's say it's
[03:32:15]  that count there. There's a version where you can get the current count and then go like return count plus one. Um, there's like a function setter version
[03:32:24] . And while this is just, you know, convenient for iterative stuff, it has another impact. It means that self-referencing doesn't track. Like
[03:32:34]  if I don't do this, but if I did create effect. See, the problem is, I mean, who's done something maybe dumb like this in react where they
[03:32:49]  go set count. And, um, let's, let's put like count plus one and they go, okay, no problem. It's not updating. Let's
[03:33:03] , uh, let's add count as a dependency suite. And then they, they hit an infinite loop, right? Um, the funny thing is in a reactive system.
[03:33:21]  This would also hit an infinite loop, right? Cause you're setting the count of the thing. Like, again, don't do this, but it's kind of
[03:33:27]  obvious. You're listening to count and you're setting count. This is an infinite loop. Now. You could solve this by using like untracked, right?
[03:33:39]  Yay. But this is probably the most convenient place. Cause most of the time when you, when you want the previous value and it's not just silly counters like this
[03:33:53] , it's like, if you're adding logs or doing some, something like this, you, this is automatically going to be on track. Um, essentially. So this
[03:34:01]  is the same code and there's no fear of it triggering something. Again, you shouldn't be in this situation anyways. Cause you shouldn't be writing state in effects
[03:34:10] . Like 99% of the time. There is a couple of cases where you're like getting stuff from the UI. You're like, you're reading the UI and you
[03:34:17]  want to write to signal. And then you definitely shouldn't be doing this during the pure part, like in memos or anything else. So like this almost never actually happens
[03:34:25] , but. The funny thing is. With projections. I mean, doesn't it look like it's happening here, right? Like you're tracking. And then I
[03:34:42] 'm listening to a, and I'm writing a, oh, so as you can see, there is no infinite loop. So we don't self track, but I mean
[03:34:57] , we, we have some interesting scenarios to look at here and try and understand what's going on. So let's run through them and see what. If, if
[03:35:05]  this makes sense to you. So first of all, I created an effect for every single. And this is using the split effect API that I'm sure you guys all love
[03:35:14] , but for every single property on the projection, including the ones coming from the base store. So I have a, b, c, d, x, y,
[03:35:22]  and even something that doesn't exist to see. Okay. So unsurprisingly, we see our, we see our projection running once, which is that console log projecting.
[03:35:32]  I keep count of how many times the projection runs. and then you see our effects log all the values of those things okay people still with me still awake no everyone's
[03:35:47]  sleeping all right i'm going to share this in chat too thank you joseph it helps to have someone alive in the chat yeah i know this is this is the
[03:36:08]  cool part though this is the part if if the last half an hour to 40 minutes i've been yakking theoretical stuff this is the part you want to see yeah okay good
[03:36:19]  i well jack you're still here that's amazing okay cool okay okay so let's talk about how this thing should work first if we update signal a which is this thing
[03:36:39]  here what do we expect to run now if this is a memo it would trigger all the effects again right but if we update signal a it runs the projection and then what
[03:36:54]  we see is it runs effect for a c and d let's check ourselves a c and d now don't get me wrong it does actually try in this example run all
[03:37:05]  the code and assign it but because b doesn't change because it doesn't need to run the effect for b and obviously it doesn't care these haven't been touched either
[03:37:16]  so essentially it does rerun all the code here but because it ends up with only these three properties changing and we subscribe to those three properties then only those three effects run
[03:37:29]  cool okay let's keep on going i mean i think it's pretty easy to guess what happens next we update b it it runs the projection again and then it only runs the
[03:37:42]  two effects right and what are those two effects again the one for b and the one for d or sorry the one for c which runs which which is both so now let
[03:37:50] 's start getting into some fun what if we update store x let's look here store x is not used anywhere here what what do we expect to happen well so i'm just
[03:38:03]  i'm updating store x i'm incrementing it by one well what ends up happening when we update store x is let me scroll a little slower um it just updates projection
[03:38:20]  x it doesn't or sorry it doesn't update it just runs the effect it doesn't run the projection it doesn't need to it just runs the one effect yeah exactly the
[03:38:28]  projection won't run it technically it's a pass-through because we didn't override it right but how would update store y this is an interesting one it's self-reading
[03:38:43]  y so what should happen here this this one took me the longest to figure out i'm not gonna lie um what should happen when we update y well you kind of everything
[03:38:58]  to explode if you think about it you kind of want it to update and it actually does update it runs the projection and it updates both the effect for y which is the
[03:39:17]  pass-through and it updates d and you're like wait why well we haven't overridden y which means that listening to this potentially listens to both the projection which
[03:39:32]  we're nulling out and the underlying store so technically speaking because this isn't overridden this actually is actually tracking the underlying store i'm pretty sure this is the correct
[03:39:47]  behavior but it's something to consider like if something's overridden we're not going to listen to this story yeah i know this i understand why this is like a
[03:39:57]  lot because you're like what what what am i even doing i haven't showed you real world examples not in the stream in previous streams i showed using this to do optimistic updates
[03:40:05]  in strello i've shown this to do create selector like on his selected projection i showed this to do basically mimic map array like anything that would require forking because
[03:40:18]  the problem is most reactivity it's emerges you might start with 10 signals but then you compute something that takes three and now you're converging and that is used with another
[03:40:31]  single converging and eventually you get to one big blob and then react diffs it for you what if you didn't have to go that way what if you could keep
[03:40:38]  the granularity throughout the graph while writing stuff in a very um like granular kind of updating kind of way now don't get me wrong a lot of stuff should be memos
[03:40:53]  i said filters things where you're like shrinking down a list or like doing that but so projections are the least used i expect this to be the the the two to three
[03:41:04]  percent case like like but it needs to exist because what it enables is very powerful things to be done performantly which were not performantly before i mean this this this is the
[03:41:26]  updated version the primitive that i'd use in the trello demo because the key here is that we don't want to write the the cr to the create async but
[03:41:34]  we want to keep it diffable we want to keep all those other properties but if you're not overriding it within the projection it does make sense to not track it
[03:41:50]  if it's used exactly yeah so yeah that's good so we ran the projection again on that let's keep on going um update store z i mean this one should be
[03:42:00]  pretty easy store z doesn't exist but we listened to it through the projection when we created this effect so the projection um is listening so obviously it should just it should obviously um
[03:42:18]  sorry where is it see see it should obviously just um not rerun the projection but just update the value straight through okay so it doesn't run projection projecting but it just
[03:42:29]  the values i think this example doesn't really sit in until you actually view what the final store ends up way like you actually have a original reference that is the original object you
[03:42:39]  have a store that looks like this and you have a projection that looks like something actually different do you know i mean like in the end you end up with three separate things
[03:42:48]  like this is derived but it updates if you look at all these effects completely granularly like there's there's nothing like this or even really possible i think in the react
[03:43:08]  ecosystem oh yeah oh i mean how do you know when the memo i mean uh yeah i don't know i i think most that i i think most of the time you can
[03:43:20]  just use a function i mean this this the thing is react still doesn't know when the memo the compiler is making assumptions based on types but it can't make assumptions based
[03:43:34]  off like that's the best it can do it it can't it looks at like the type of objects and going okay that's a primitive value you don't need to memorize
[03:43:41]  it or whatever but like you still might need the memo even with the react compiler so like they haven't solved this problem for you the final restore and projection are roughly distinct
[03:43:57]  yes yes these are not the same objects yes and i i mean i've been doing like like let's play with this a bit more like what did we what if we delete
[03:44:11]  p dot x what do you think happens like we we've been we've been adding an override like we haven't done an override here actually like let's before we delete p
[03:44:23]  dot x let's make p dot x equal some constant five okay now when everything's the same but when we update store x we no longer do any work right because it's
[03:44:36]  overridden so updating the store doesn't cause the projection to run doesn't cause the effect to run because updating the underlying store doesn't matter because you've already overr
[03:44:47] idden the value i have a different example where i override and then set it back again and the store starts updating again i'll show that in a minute but but like generally
[03:44:56]  speaking if it's overridden then um we don't care anymore right you you've made the decision to override it okay and if you look here it's one two
[03:45:07]  five like different values but uh it's the same thing with delete delete p dot x you can you can you can protect properties you can go like look ref has x and y
[03:45:18]  final store has x and y projection does not have x so and again when we we update the store for x it doesn't propagate and run any effects because the projection doesn
[03:45:34] 't have x doesn't care right like it's just undefined like this is completely granular you can literally change the shapes of your objects um and and have it not on
[03:45:51]  impact the underlying store yet be able to trigger exactly what effects matter like our side effects or track or whatever right type just for this one i mean the funniest thing is yeah
[03:46:14]  i mean this is kind of interesting most people's stores and projections actually follow a fixed state so you're not you're not actually like our fixed shape so you like your
[03:46:26]  type is going to be your schema and then when you get back in store uh the types aren't in here it's it's weird i mean i don't even know why
[03:46:43]  the typescript isn't working because i have the ts in here don't i oh maybe maybe not maybe yeah this is a js that's why there's no typescript
[03:46:53]  in here what i'm getting is projections and stores generally can return basically read-only values so you know not to write them like generally people have more fixed schemas this is
[03:47:03]  like a little bit we're going crazy here our protection can become the new props in solid quotes i know you talk about using streams eventually no no because props aren't anything
[03:47:14]  props are just function wrappers we don't need something this complicated for props right like in the same way that if for something shallow uh joe didn't need anything complicated he
[03:47:26]  just made a few getters for his to-dos this we don't need to be deep here we don't need the diff here props they're shallow getters essentially
[03:47:37]  so where you want this is is in cases where you are specifically talking about deep derived data stores i said i was talking to dev about this a bunch and the funniest thing is
[03:47:55]  we we think projections are actually going to get used a ton with async data we already know what they're going to because you're going to uh sorry go back to
[03:48:04]  one of these other examples but we know that you're going to like do actually was it actually in this example maybe not i already closed it we know you're going to go
[03:48:12]  like now whatever you create async and then you're going to like diff stuff or like do a projection not minutes like that's going to be a place where you might use
[03:48:21]  it like if you want to create async store it's basically a projection over um create async like that's a place where you just reconcile you're just dipping that
[03:48:32] 's a place where you're going to use projections but um this whole store over projection case is actually fairly rare like most of the time you're going to have data coming events
[03:48:46]  coming from outside the system that are going to talk in diffs um or they're going to diff on entry like the reconcile that i just talked about right like if you
[03:48:56]  have sync engine these are events they're discrete events and you're going to combine it then once you're in the system most of the time you are filtering down a bit you
[03:49:06]  have a list of to do's you're only showing the three that are active you know what i mean so like there is still mostly create memo once you get in um
[03:49:14]  i my my gut feeling here is that projections over stores while capable here which is super powerful i i don't know how many actual use cases this is only the case where you
[03:49:26]  actually have to project diffs throughout the whole system and my opinion is diffs are better as events than as state which means that this kind of belongs before it ever enters solid
[03:49:37]  so maybe i've created something very niche but the i think the more important part here is understanding how the first principles apply that this is what a store is this is what
[03:49:47]  a projection is these characteristics are how these things should behave i don't know what anyone's going to do with them yet um to be fair except for the you know five or
[03:49:58]  six use cases which are all very important use cases um but actually the store like we started the store here but technically the store could be injected inside the projection itself it doesn
[03:50:08] 't need to be the starting point you could like put a store on a certain thing you could like use a projection to wrap a store put multiple stores together or you you know
[03:50:15]  what i mean um yeah it's beautiful to project and fork and keep granularity it is yeah writable projections as well right by keeping the api the same i mean
[03:50:39]  i haven't i haven't played with this uh i mean i've implemented it in this example but i haven't actually like done examples with it but yes you can create writ
[03:50:45] able projections right if you go create store and pass it a function then you can both project it automatically or write it now that's an interesting thing should the semantics change
[03:50:59]  at all because basically its last update wins which is the same as linked signals if you think about it right if the source updates it overrides if you write to it it
[03:51:10]  overrides and then back and forth mechanically we know it's a swap but the key part is that projections have that protection that firewall built in now i'd like to
[03:51:21]  give that firewall to other primitives but you understand that where the real power here is when you instead of viewing this by its discrete parts you view stores and projections as a
[03:51:35]  new type of thing they are mutable reactivity and drive mutable reactivity they are different than than their predecessors the the combination of their parts actually makes them into a
[03:51:47]  very very special kind of primitive now i don't know if create projection is the right name it's freaking pain in the ass of type it's like too long but i
[03:51:56]  i don't know like i i think i think this is something special and something powerful and it's it it fits into a class of problems which there are real examples of and
[03:52:11]  are large also ones that are largely theoretical so i i'm like very excited to see how this actually pans out this is not something where i can point at the specific use
[03:52:20]  case outside of the uh strello demo you know like the optimistic updates um where it works so well um but you you know i mean creates like i mean i have a bunch
[03:52:32]  of those use cases but i feel like um it takes a bit but does it take any more than going to that signia example and writing your stuff on all this i think
[03:52:41]  it's infinitely easier to write stuff in terms of immutable api than it is to um basically work in in a in a world of um taking previous patches and generating
[03:52:57]  new patches from those patches yes this this is the equivalent of the fine grained create memo yes that's that's the idea yeah the main use case will be client state
[03:53:13]  diverting for service data and then periodically syncing back to server yes yes exactly and what's cool is because it's reconcilable if if you're on the happy path
[03:53:26]  that syncing might actually mostly be very little work so you can do these nests like merge or is it combining or store yeah okay yeah so stores are the same object
[03:53:41]  so when you put some take something from store one and put in store b you end up with the same object model reference the uh model is kept the same projections are key to
[03:53:54]  the projection that created them because they also need a special the way the firewall works is there's a hidden signal that does some funny business so every if you take a projection
[03:54:05]  and you put something in another projection you are going to be wrapping it again it's per projection that it wraps so yes you could if you're projecting into projecting and projecting you
[03:54:17]  could be wrapping proxy on proxy and proxy proxy but each of those proxies would have the behavior that i just displayed today so it might eventually slow things down but it
[03:54:28]  would be correct and granular yeah yeah yeah yeah yeah store store as i said stores are like signals or identity um you know when you move past the signal around it's the same
[03:54:47]  signal right whereas projections are like memos when you wrap you know a projection yeah you wrap it and wrap it or like props right every every prop you send down the the
[03:55:01]  tree gets wrapped in another getter usually props don't drill that thing but there's like a very small overhead when you have a i i often say oh you know overhead on
[03:55:10]  components but like if you pass a prop from the top down through 10 components technically speaking there is going to be 10 function wrappers around each of those like getters there
[03:55:23] 's going to so when it executes it's going to call a function call function call function call function call function call function return the value does a function wrapper cost very much
[03:55:32]  as it turns out not really not really at all but you know i think my expectation is most props generally only go about three to five components deep max like people don't
[03:55:47]  people don't want to deal with properly beyond about three to five components so then they switch to context and it's fine so like it's not it's not a big it
[03:55:55] 's not a big deal it depends if you create a projection within a projection and then use that nested projection within it um yeah okay let me think about that um yeah
[03:56:17]  okay i i think you actually yeah it's possible that you could create an infinite loop the same way you could if you reverted memos one of the nice things about mem
[03:56:29] os is it's hard to reference them like before they're created like it's hard it's hard to it's a pain in the ass to do a memo in a
[03:56:38]  memo like like reverse it like make memo rely on a memo that relies on a memo because you you basically have to declare all your variables up top and then uh put them in
[03:56:50]  the scopes and then read one and then pull through and then have it loop now to be fair it's all 1.0 it's impossible to do it because they
[03:56:58]  run immediately so they'll just hit the reference hit null and just crash out solid 2.0 and all push pull based systems actually it's possible to create memo infinite loops um
[03:57:07]  so this is a new type of problem that i've never i haven't hit in the last several years of solid um the way you write stuff will get away from it this
[03:57:16]  is an argument for why i say writeable projections maybe you're a bad idea like because it the way stuff lays is more likely to like when you when it's like
[03:57:28]  inside a memo or whatever like what i mean by that is like if you have like const like how do you make a depend on b and b depend on a right like
[03:57:52]  making b depend on a is pretty simple but like the the i mean it's made by this is going to fail in solid 1.0 but what my point is you
[03:58:14]  cannot access b before initialization right so the the answer is let b or sorry b equals this and then let b but then you're going to get b is not a
[03:58:33]  function because it runs eagerly but like what i'm getting at is because of the like it's actually unlikely that people are going to create these kind of loops but if
[03:58:48]  a projection is writable and then it can take a store from above and write it into it it's more or a store from below and write that into it then it's
[03:58:56]  more likely to happen so yeah this is an interesting consideration i mean i don't know it's it's hard right because if you merge them then the independent things should no
[03:59:23]  longer exist anymore because otherwise you're just creating a new thing right like i it's not like props or destructuring where you know it's a scenario where people are
[03:59:37]  just doing it down the tree and you're basically forcing people into like building these proxies it's like i think people will create projections intently like not be like okay
[03:59:47]  i'm gonna get projection and i'm gonna just throw this into projection throw this into projection i don't i don't see that happening in the same sort of way like you
[03:59:55]  could only successfully merge something like this if you knew for sure that no one was gonna read the intermediate but in that case then like why are you doing it you know what
[04:00:05]  i mean i'm not sure it's any sort of merge would like as it is a funny thing because like even the merge operator and solid for like proxies and stores
[04:00:20]  and props and stuff doesn't actually merge the object it just actually makes another wrapper you know around both of them and put them together so it's like i don't know if
[04:00:27]  merging is a real thing yeah i did cover the firewall logic on stream a while ago like to be fair uh milo has a better solution in his new r3 what
[04:00:46]  i the trick that i did which is kind of silly if you think about it is i made it that the projection still has a signal that everyone who listens to the projection uh
[04:00:56]  listens to right so like if i go in here and i go i mean let's look at the proxy for this is my favorite thing about the trade projection thing right now
[04:01:06]  is uh sorry in the wrong playground i'm missing you yeah if you look at the implementation here it's kind of funny because like there's a projection computed which is a special
[04:01:17]  kind of lazy computed that wraps this the store setter function essentially but what i'm getting at is the the trap for a projection is almost identical to the traps for a
[04:01:28]  normal store except what it does is it gets the observer and this is how we do the ignore part of it um basically if it's there's no observer or the observer isn
[04:01:38] 't yourself then read from that observer but the trick what it does is every single node still ends up that listens to projection if you you know the thousand different voices does end
[04:01:51]  up subscribing to this projection node but um the special projection computation projection computation it does some kind of weird notification thing where it doesn't queue effects and because this is a push-
[04:02:12] pull system you need to queue effects for any work to actually get done so what it does is it notifies the whole graph basically like hey look you you may have
[04:02:24]  updated but it doesn't actually cause any of the work to happen and then one of two things happen something reads from the projection somewhere some one of its things it goes oh i
[04:02:37]  could be dirty and when it goes i could be dirty it actually pulls through and that makes the projection run at that point and the funny thing is the thing that pulls through
[04:02:48]  sees the updated value but but the projection computation itself returns undefined which means always which means its value never changes so even though it tells everyone i may have changed it's
[04:02:58]  a false warning and it never changes but it also never so it never uh it never schedules the expensive work so it means that you you kind of you you let the system
[04:03:11]  act lazily still where it doesn't do the work until it's asked but um you you're also uh telling everyone that hey you could be dirty and then when the projection
[04:03:25]  actually runs it it has all the discrete signals inside which at that point those signals will notify the things that have actually changed with the new value and update them so so basically at
[04:03:39]  that point the the it kind of re-notifies there's like basically two types of notification and overrides the other notification and then only has those ones cue their effects
[04:03:53]  to run which then pulls the right values down and skips the rest of the graph that isn't impacted i don't know if that makes sense it's kind of complicated but
[04:04:05]  um it means that it does this interesting thing where it kind of see if not this force notify return it basically halts like it basically halts the note like the the propagation
[04:04:18]  of the effect notification and then weights this is the thing is this can't exist outside of a route because it is actually scheduled if you don't pull from it when the
[04:04:30]  flush happens at the next micro task it will do it and we run all the projections first so before you run uh other memos or whatever the projections get scheduled first now if
[04:04:42]  they depend on another projection you're still fine because you you've notified them that they're uh actually i don't even know if they need to run first first because because
[04:04:51]  you've notified everyone actually so yeah i think the projections just run in the pure queue um because you've notified everyone if anyone reads it first during that queue run or if a
[04:05:00]  projection reads another projection well that other projection will then run first before that projection and then cause it to like basically there's no way to get an out of date value and
[04:05:11]  it's and it's still on demand um so it's a very i don't want to call it hacky but a very mechanical solution um that again i wasn't i
[04:05:22]  was skeptical of but i actually benchmarked it and it is slower than like our specialized selector primitive correct for example we haven't told today but it's actually faster than doing
[04:05:31]  the naive thing um you know and even you know so it's actually even faster than putting the signals on every single i guess it's about the same as putting signals on
[04:05:40]  everything in either case like it basically gives us the behavior we want um in a way that is consistently safe but it does so by potentially over notifying the ironic thing is when
[04:05:59]  i was working with milo on on r3 his new push base system this behavior is exactly the same as what the fallback behavior he does when he can't depend
[04:06:09]  on height based so like basically his worst case scenario is still this scenario which isn't even that bad so it's like it's kind of cool i don't know i don
[04:06:19] 't know if that makes sense yes exactly that's the thing i said a bit earlier stores with projections might not be a common case to be fair i think a lot of
[04:06:32]  that this kind of stuff happens outside of the system yeah yeah yeah you you can make a circular dependency but i'm just saying that people generally because they write code top to bottom
[04:06:50]  they don't end up wiring it that way because you have to declare the variables above and then use them before like it just it's not the way you naturally write the
[04:06:58]  code oh okay good to know that i think people yeah okay dev's back you missed the whole stream yeah we're on firewalls already no no i i just showed off
[04:07:26]  the the projection primitive uh which is pretty cool and yeah i was talking about firewalls yeah no these projections are legal are lazy as a yeah i don't know i guess
[04:07:38]  you got yeah you were probably here for that explanation i wonder if you could have a cheap deep clone memory pointer that would solve some of the issues because you just compare memory point
[04:07:50]  i feel having this in the browser is really an issue sometimes the deep cloning is just not it yeah but yeah so my solution to like most things use a proxy yeah
[04:08:04]  i mean to be fair you can kind of understand i showed tanner this demo and he was like he was like what are you showing me i i get it um it this
[04:08:17]  isn't the the thing is this is just such a powerful thing that it's almost unprecedented um but but actually tanner sent me a message when i was when so he watched
[04:08:31]  part of the stream so yeah or no no he i think he's actually ex i think actually didn't watch the stream i think he read my explanation and then sent me
[04:08:43]  a message while i was streaming that's funny um let me see here this is gonna this is like a completely different idea so maybe this is not something that's easy to show
[04:08:58]  let me see if i can find my original demo no not this one sorry give me a second i got one more projection demo i want to show if i can find it
[04:09:13]  um damn it give me two seconds just checking it off screen sorry not that one not that one not the deep i i i got deep performance working well too so that's
[04:09:31]  not a problem okay okay this one all right um let's grab this sorry i have all these these demos that are in different forms of this okay so let's let's
[04:09:58]  do a quick look at this one um this one's a kind of funny one uh i start with a store that has foo and bar and then bar becomes foo
[04:10:14]  and then bar become new bar so kind of it's like a shifting to the past thing and then it's based on the store store and then i have an effect that runs
[04:10:24]  okay so that checks whenever food changes so most of the time it runs okay so uh let's turn off warnings okay there we go um if you've been seeing these warnings
[04:10:38]  it's because projections do have to run under roots because of the way they're scheduled unfortunately i haven't figured out a way to get around that it would be nice if they
[04:10:46]  if they didn't but it's tricky it's it maybe i guess the same rules that would let you release a memo could let you release the projection i think they'll be
[04:10:55]  interesting when we get to that point i still got that working i know a lot of systems have that capability i just haven't figured that out in a performing way anyway running
[04:11:04]  projection one time practicing foo equals bar so initially we've swapped it so foo equals bar and bar equals foo because what we do here is we bar yeah bar
[04:11:18]  starts as foo okay i know lovely confusing okay and then what do we do um do do do do do nothing fancy then we update the signal uh to trigger the projection
[04:11:41]  so what do we do here we set bar to baz and unsurprisingly it runs our effect it says foo is now back to foo because it got it from bar
[04:11:50]  which was previously foo and projection foo equals foo and bar equals bass lovely and now we have our second snapshot of the store in the projection right so initially we
[04:12:03]  swap them now the foos are the same and the baz overrides the bar so now um let's update the store with a new property let's add up store baz
[04:12:13]  which is good you notice the projection doesn't rerun and baz is true okay so this is not right not a big deal because the projection doesn't run and then no change
[04:12:27]  on over in base store then what i do is i actually update foo to foo 2 even though we previously updated it foo went back to being the original value here
[04:12:37]  so at the point that we update um so we like reset it basically at the point that we now update it to foo 2 we see the new value and it updates um
[04:12:48]  it updates and runs the effect still because it changes it and it and it goes in both places so like the override actually goes away essentially um and it goes back to working
[04:13:02]  i that's the only point i want to show this demo that like you can reset the override by setting things back to what the underlying store is um it's not the most
[04:13:15]  intuitive way but it it's hard it makes sense when you think about diffing and reconciling because the problem is deleting has different semantics we already talked about it
[04:13:25]  like if you want to be able to delete um something in the projection that's on the store you actually have to say that hey this is deleted you can't you can't
[04:13:33]  just say you can't use delete to say now i want to pass through and get rid of the override because you need a way to say like the way that i came up
[04:13:40]  with is actually just reset the value back to the base store value again i don't know if it makes a ton of sense and if you did a diff that is what
[04:13:47]  would happen so i i think this follows anyways yeah i think it'll take a while too you can think internal component state with receipt props much more easily kind of like an optimistic
[04:14:03]  update assuming the prop value is something you think i'd have to play around this fully remember well that's the other crazy thing right i'm making these models that are like
[04:14:14]  these primitives here that are concurrent safe and then this also feeds into the whole async thing that we've been working on right like um the all these pieces have to work
[04:14:26]  together in a you know in a way that makes sense so yeah i mean a projection is basically a spreadsheet yeah one case we want to purchase with dynamic columns so that's
[04:14:41]  where they're talking drive values i mean i can think of ways to do this but yeah i mean the biggest benefit of projections i think is like the optimistic updates it's the
[04:14:54]  ephemeral state um it's like being able to take something and then enhance it with granular mutations and granular things and like build out something on top and then yeah i
[04:15:07]  mean you might keep it like that you know if it's client only but you might save that to the server and then when it comes back around again be like okay now i
[04:15:15]  just want to reset it to what this is and the key part is if you use reconcile in that reset case you keep stable references you don't have to re-render
[04:15:25]  anything you don't have to re-run any components right like the reset hopefully will just be the thing yeah i the way i built projections should work with transitions that that was
[04:15:42]  one of my my requirements here concurrent safe concurrent safe is an interesting one because people don't really think about it's hard to understand the rules and perhaps in react but the
[04:15:53]  the only thing the way things become unsafe for concurrency is when you have something out here like let x equals five and then you have like great i'm trying to think of
[04:16:12]  an example of this but if if something like people should be doing side effects and create memo but if something reads from this x kind of incidentally um and this x can
[04:16:26]  change you know for some reason again why is this not reactive i don't know but it's well like let's say you use this to cache the previous value right this is
[04:16:38]  this is a logistic thing so that you can dip so then you're like diff value previous value this is a very this is probably the the most common case you you
[04:16:50] 're you're doing something like a shallow diff i'm just calling it diff function but doesn't matter what it is okay so we're doing something like this now this isn't
[04:16:58]  concurrent safe i'm going to give it an object people think this isn't concurrent safe because the the problem is depending on this runs this previous value is getting set from somewhere
[04:17:11]  right because you might do something like like this right so like depending on your path you might end up with different previouses which give you different diffs which gets you in
[04:17:27]  a world of trouble right because you it's not the state you're working off of however in solid our memos have previous built in and now we control what previous value
[04:17:47]  we can tell if you're in a transition or not we can give you the appropriate pre previous value um so like the diff problem kind of goes away because we control the inputs
[04:18:02]  we fork the graph or the previous value as it was versus what it will be and what it could be in like different realities they can not only the value but the previous
[04:18:12]  value can also live in different timelines um and these are all connected and the graphs all connected so basically as long as we don't have these dangling references it's going to
[04:18:27]  be concurrent safe um so i just have to design my primitives that way and i it's why it's part of the reason why we have stuff like previous value here
[04:18:39]  i know a lot of frameworks or signals libraries don't do this again this is about the it's kind of ironic right like you can compile away this like what if our mem
[04:18:48] os were just this you know guess what you don't have to type a function good for you uh like there's something that's congruent that lends to the shape
[04:19:01]  of the system right the same way that stores our projections and uh or like linked signals and memos like that kind of like that kind of um symmetry that comes in the shape
[04:19:12]  of the solution and i think that like um because of little things like this being built into api it discourages people like it gives people the right path to follow to begin
[04:19:25]  with like this is why it takes so long to build these primitives i you have to kind of look out into the space of all potential solutions and then try and think
[04:19:35]  about how people would potentially use them and what the benefits or whatnot and previous would just happen to be like something i maybe picked up from sjs and i thought it was kind
[04:19:44]  of like a good idea and it makes sense and it like let you do reducing operations which is powerful and let you like in a non-track way and like it makes a
[04:19:50]  lot of sense but it then like you have this happy coincidence or you know thing when you realize that it's actually the thing that's going to save concurrent rendering on a
[04:20:02]  granular scale because every node has its own both internal state and previous state anyway does that make any sense i i'm sorry i i get deep it's not svelte
[04:20:21]  oh yeah i mean i i don't even want to think about the no the be fair svelte new svelte doesn't have the problem you'd have to say
[04:20:30]  like dollar sign whatever old svelte i i yeah i don't even know i mean this is one of the challenges i i mean had uh working on marco too because
[04:20:41]  you have like this there's reason i mean you could be explicit in like force on tracks and stuff which is arguably a good thing but there's a difference between initializing
[04:20:49]  a signal with a value and a link signal and again this is one that's very easy to remove the syntax for now don't get me wrong you can always have you know
[04:21:02]  you can always make like a subclass and be like look i have signal dot linked or i have you know computed dot uh i don't know or was it is it
[04:21:19]  derived dot by this and add this thing so like it's not like you're you're losing anything you can always add more and more apis to do all the different use
[04:21:30]  cases it's just really kind of cool when you can look at the the whole spectrum and go look i got one two three four five primitives and they like just like
[04:21:39]  just five primitives not like that those primitives and dot by and dot linked and whatever and those five primitives literally handle everything you know i mean don't get me wrong
[04:21:51]  there's a few helper functions and like you know like map array and on track and you know those kind of things snapshot we saw today deep but like generally from like what
[04:22:02]  are your signals it's just like here they are you can fit you can fit it on one page i think that's always been what's attractive to me about these solutions you
[04:22:15] 're like signal memo effect that's all right um this is the main content let's do a little quick this week in javascript and uh go go on i hope
[04:22:33]  i hope somebody got some value from this i i am i'm trying to get value to figure out how to explain this stuff and the truth of the matter is today probably wasn
[04:22:42] 't the explanation stream so much but look at the cool things i can do stream and um we i'm gonna have to work on the messaging here quite a bit i think
[04:22:58]  um it's as i said unprecedented um it's another one of those big things but this is this is one of those ones that people might just like not get might not
[04:23:10]  like might be like ah who cares you know we'll add it you know i remember evan you you know a little while back when he talked about the js framework and he
[04:23:20]  he to be fair he said kind of but he's like solid's kind of cheating here and i'm like that's one person's perspective you know in the benchmark the other
[04:23:27]  perspective is we're just opening the door to a whole other world of how we can model solutions for problems and um i think i think that's incredible yeah the previous side
[04:23:45]  the function keeps the pure function there's a really good api design yeah yeah and and we have that we have the strello demo the strello demo is amazing um but
[04:23:54]  yeah i mean it's always been the dev rel and the solid 1.0 was hard like if we were actually good at dev rel or like i could somehow pete
[04:24:06]  hunt the world you know so to speak like in some ways pete hunts my hero he he had no problem going out and just like straight up just like being opinionated
[04:24:17]  um then i think you know we might be in a different place i mean rich harris even a bit of that right he was so definitive i'm always like i'm
[04:24:24]  like the when you put the guy who says it depends on stage you know it's like you know if someone asks a question i'm like it depends you know the reality is
[04:24:33]  a lot of it depends but that just because i say it depends and i tend to apologize for whenever i give forceful opinions it doesn't mean that i mean that i
[04:24:44]  don't think i'm correct or that these things are better or even significantly better that's just like maybe being canadian i mean oh yeah yeah yeah yeah yeah yeah yeah
[04:25:06]  i you actually we actually yes um query params i had to make a special type of object to do it in the router it was called uh a memo object and in hindsight
[04:25:20]  a memo object is actually a projection yes this is another use case because it it it derives from a store or sorry a source like the url which is basically a
[04:25:33]  signal and but you want to then split it out um and you want it to be dynamic yes yes uh if you want to get super deep see i don't know if it
[04:25:42] 's worth it um i had to make a version of uh the router that doesn't work with proxies um there's people a lot of people big use of it
[04:25:50] 's a solid is in non-proxy environments we're still very very popular in television apps and big companies like universal mbc you know that kind of thing and so
[04:25:57]  i have to make common libraries not depend on proxies um but i i've gone to a point where we just have a switch like we work with proxies then
[04:26:07]  we give them away the inject a non-proxy version um but yeah it's something projections are like and stores are just all in proxy i think i'm hoping that those
[04:26:16]  systems get project uh proxies eventually or like it slowly phase out like they have almost all the systems have proxies today but like we didn't get prox
[04:26:26] ies in chrome to like i don't know like 47 and they're basically impossible to polyfill but yeah no good example yeah i mean use them in your vanilla thing like solid
[04:26:42]  is just a in a sense this stuff plus like a jsx compiler over vanilla right you can just skip the jsx compiler like maybe the last bastion of just j
[04:26:53] avascript because we can actually do that like react kind of claim that but like they never were quite that like 90 of what makes solid great has nothing to do with components or
[04:27:07]  jsx yeah it's definitely convenient thing forms as well yeah okay yeah i just got to be careful of not being too forceful on i mean it's interesting sometimes like
[04:27:31]  classically when i built solid i would avoid stores or projections everywhere possible to keep the bundle size smaller um signals without stores or projections like you can make like a basic example
[04:27:42]  it's like two or three kilobytes so you know like it's basically nothing you know um like even with the jsx and solid and all that like you like i
[04:27:52]  guess like what's what's hello world in solid in beat it's something like i'm well i did two to do mvc a little while back and it was like
[04:28:00]  around four just over four kilobytes or something but um like use roll up it's slightly smaller you know but but my point is like i would avoid it because i
[04:28:11]  didn't want the base of the library to be like oh it's it's actually like six kilobytes it's people sensitive to that i'm i've i've changed
[04:28:19]  a bit here the store like you can still choose not to use it but like salt signals ships with the store and projection things i think it's the base primitive you know and
[04:28:27]  there's a bunch of other stuff luckily we're really good at tree shaking so you know i'm i'm okay with it but and i think stuff might get a little
[04:28:35]  bit bigger reactively a little like less size optimized but i mean i think i mean svelte's actually bigger than solidjs now so like we have some room you know
[04:28:45]  before that was the thing we were like up against felt and in their small components like obviously we scaled way better than them but they could still like we need to be in sp
[04:28:52] itting distance pre-act's another one um so i i do kind of keep track of size but i think i'm okay being like maybe like you know a kiloby
[04:29:05] te or half a kilobyte bigger than those solutions given like what we do is just so much more in a certain way like i mean svelte's different now s
[04:29:17] velte is more now so they actually are larger so like they're a better guideline for where i want to sit but like like i think pre-act is going to stay
[04:29:28]  minimal so yeah i mean yeah sustain management yeah that's cool and and the signals library this library that i'm showing here this reactivity.ts is a separate library you can
[04:29:44]  use separate of all the other stuff i think it will be very convenient for you in the future it's probably two versions of most libraries the small one and the fast one
[04:29:53]  yeah no there's a three versions and then there's the popular one that's neither small nor fast well because the popular one actually has to deal with all the freaking edge
[04:30:07]  cases to be both small and fast you generally have to concede to a certain thing and over time libraries get bigger not because they're trying to get slower or larger it's
[04:30:18]  just because they want to appeal to a wider group of people where like certain behavior no longer is acceptable it was okay with the niche users now they're not so you know
[04:30:28]  for react classically it was pre-act small inferno fast react neither right solid has that kind of thing happening in its future we are smaller and we're faster but
[04:30:49]  reality is at some point we're there's probably going to be a small i mean there's already smaller ones um and there's probably going to be like i'm going to
[04:31:00]  have we're probably going to make a decision at some point that that takes the last like 0.1 of performance or whatever and sacrifices it for usability i mean we might
[04:31:10]  have already made that decision and now we're stuck with it but like as we get more popular like i think we're we're always going to like there's always going to
[04:31:18]  be that risk to be on the react uh trajectory um and i mean not obviously it's the next generation so it's gonna be better than react is you know but comparatively
[04:31:28]  you know things keep on moving it's reality uh just surrounded the whole the home through create projection there we go oh man anyway sorry uh let's let's let's get
[04:31:41]  this set up give me two seconds i mean i should have been doing that while i was talking i wasn't thinking um i'm just closing some stuff down all right um
[04:32:09]  all right sorry just switching gears always takes a minute let's get the bookmarks in a new tab profile and then solid jails okay all right i think i'm finally
[04:32:35]  getting used to my new setup here and being in it's funny when you move big place it takes a while to get oriented i think i'm finally feeling oriented here um
[04:32:48]  took like a month so yeah okay so what are we doing what was the last time we streamed only a week ago so we are we don't actually have much here which
[04:33:02]  is good because i don't want to get stuck on this forever today is the 18th so we're going back to the 11th beautiful all right let's do this
[04:33:31]  let's talk about this week in javascript it's funny i still like the only banner i use but let's do it all right so i mentioned a little bit
[04:33:42]  earlier that i i kind of got into silly twitter stuff this week a lot um which is all silly honestly but i know this is just being sensational and my response is just being
[04:33:58]  sensational but i want to start here uh suppose i could sit here react smoothly rejoin 20 000 dom nodes but yeah i'm sure it's too slow for your crud
[04:34:06]  ui react is fast enough the thing that in from this perspective the problem is how should i put it the dom is the overhead here almost all frameworks actually generate the same dom
[04:34:20]  updates it's how they get to those dom updates so if your path from state to dom is like a direct line then react should be as fast as almost anything right um
[04:34:35]  obviously like maybe there's a bit of v dom overhead but like it's the distance you get from the dom then the number of components the layers the abstractions the dipping the
[04:34:45]  the state like that actually gets you farther away so like you're not going to be able to do it but then you're not going to be able to do it but
[04:34:53]  you're not going to be able to be able to do it so you're not going to be able to do it so you're not going to be able to be able
[04:35:00]  to do it but you're not going to be able to do it so you're not going to be able to be able to the vanilla js implementation and then we just
[04:35:05]  zero in on that little overhead as an idea of getting it but the problem is like you actually get a better idea of the overhead the more complicated scenario you make but the more
[04:35:14]  complex complicated scenario you make the less likely people will be able to implement in all the different tools and that you'll actually have a comparable benchmark so i seeing something like this would
[04:35:25]  never bug me honestly i was like whatever guys just talking stuff right this is too many downloads to the chrome dev tools i do there's no memos in here i use
[04:35:36]  react query well i mean that is a sort of memo uh where influence came in a bit later but i started reading the links so it's too bad mda actually wasn't
[04:35:45]  the first one i read originally but it's like i started seeing stuff like this is why i'm skeptical of rendering libraries with micro benchmarks showing what they're like so much faster
[04:35:51]  than react graph is already fast enough um this is probably more more of a testament you see that's good answer but there is a few others problems you read the dom but
[04:36:02]  so i coded to to do list it's funny these these got pushed down a bunch of the original responses were like basically like michael jackson's or like yeah rallying
[04:36:21]  behind you know it's yeah this is my problem for retweeting it yeah yeah yeah like this one but signals are faster you know um like is this what anyways i
[04:36:40]  saw this and i was like sorry actually maybe i want to go into the see what people responded through the conversation michael jackson for a second like what i keep on
[04:36:58]  hearing this fast enough but it's like what does that even mean do you know what i mean like i at a certain point i just hear like i think part of the problem
[04:37:08]  is we've it's it's it's almost convenient for the narrative around like signals frameworks to be like let's let's make it about performance and then let's say
[04:37:18]  that the performance is good good enough and then we we can just disregard the whole thing like that that's the kind of line of thinking and it like but it's gone so
[04:37:27]  much to a point that people can't ignore it anymore to the point that like i was seeing articles and stuff and it like in defense of react is basically like it's
[04:37:35]  fast enough and after after a point he was just like i was like it's it sounds so common that that it's like fast enough pm you know what i mean and i
[04:37:45]  started when i read ryan florence and obviously because remix with three was is coming out and stuff and i think in my head i'm like like let's think i
[04:37:51] 'm positioning my framework like is it wrong to say that hey you know something's good for performance like like it feels like it's almost like signals get insulted almost at this
[04:38:01]  point for being performant because it's like oh yeah it's because you you know care about this it's like derivative and i'm like why how can you rally around you
[04:38:10]  know being fast enough like like michael jackson's not going to go and be like guys check it out remix three the fast enough framework like no no one is going
[04:38:25]  to do that like like being more performant is a good thing now you can try and detract from other aspects the trade-offs involved or whatever but no one is like
[04:38:38]  yeah i it's just it's just kind of something that i've just been i was just thinking about like nobody would market themselves as fast enough yet that is one of
[04:38:48]  the most common things that i hear see the statement implies a compromise and there's always compromises right it depends that's me speaking but i don't think it's the
[04:39:02]  compromise that some people think yeah exactly like i don't think people do choose it but it's way too easy to to use performance to discard the problems it's so ironic i
[04:39:20]  i needed to focus on performance because react actually used performance as part of the way that it won it won they actually said the v dom is fast sort of like actually that
[04:39:31] 's not true jordan walks said the v dom is not that slow but somehow like over time that message changed largely after ryan florence's talk in that benchmark they
[04:39:41]  actually use same guy remix whatever like they actually used that argument to get react in the door and now they're like fast enough that be fair that's why i'm not
[04:39:52]  michael i shouldn't say they're the same person but like it's it's funny a little bit you know what i mean like i obviously that wasn't the only thing
[04:40:01]  they're arguing there but like um no one ever really chose the thing on performance fast enough people kind of know it's it's it's what i was trying to get at
[04:40:12]  parts of rarely about raw performance until you hit a problem it's about the model that gives you confidence to build without worrying about how much confidence are you and fast enough here
[04:40:19]  so if someone's just like yeah don't worry it's fast enough well someone like we know in the universe of things at least a certain number of people don't agree that
[04:40:29]  it's fast enough there's certain number of cases otherwise you're right no one would care right so you you're just betting on that you're you know it won't be
[04:40:43]  you i know this happens to other people but not to me right um i thought aaron from zero you know um actually made a pretty good point because we actually use this
[04:40:55]  exact same kind of thinking or language when we were promoting um marco internally in ebay one way i put it with zero is why should zero queries update in in zero milliseconds
[04:41:05]  because users have 16 milliseconds to render frame and we should not be consuming any of that it should be go to the app you could try framing solid that way your apps flex
[04:41:12]  you i should be fast so your app as much more cpu as possible exactly i think that's clean and solid the architecture can lead to even lesser user code running right because
[04:41:20]  of the reactivity but it's better to draw people to the why the why is that your performance budget is something you spend why spend it here when you can spend it where
[04:41:28]  it counts right that that's the argument like yeah i will add that the initial render on this is absolutely brutal main thread glitches for several seconds while parsing the data
[04:41:41]  even the loading spinner stopped spinning i'm sure it would for every framework i don't think this is react specific so this is like a yeah i had a much longer tweet
[04:41:53]  written up talking about the challenges and characterizing performance how it goes both ways like meaningless how fast we update text say in solid js but i realized after seeing the responses that we
[04:42:01]  might be seeing fast enough tm yeah because the truth matters i actually wrote a way longer tweet and then i'm just like no one's gonna read this where i was like
[04:42:07]  talking about like the there's observable speed versus non-observable speed like people pick up solid and then they go update a text node as fast as possible and they
[04:42:15] 're like yeah so it's fast like we are the fastest they're updating a text node out of major libraries classically and but it's like that's meaningless performance but
[04:42:24]  it's the easiest thing to confirm so like this this can work both ways like this sort of situation i think people need to understand the architectural pieces to actually understand the real benefit
[04:42:37]  right also what condition is a fast enough xbox only switch to edge from internet explorer tvs run on cpus of grammar oh yeah god yeah this is what i was
[04:42:46]  talking about before tvs are brutal so yeah fast enough some moving target what you think is fast enough for you today may not be fast enough for you tomorrow even blazer is
[04:42:56]  fast enough uh yeah this is probably my fault that the blazers become the butt of jokes in the in the solid community uh uh anyways confident enough extremely confident yeah this is
[04:43:17]  the same guy see i could tell that it's sarcasm only the sith deal in absolutes uh no and uh and influencers on twitter that's something i gotta get better
[04:43:36]  at anyway that that that was why i was calling this one out see a lot of i thought this was a cool tweet when i first read this right i've been saying this
[04:43:50]  forever right i was like don't add signals to react it makes them slower even even like their solo performance yeah to be fair it wasn't the original post that i was
[04:44:18]  getting at so much as like the way people were responding to it and the fact that i hear this a lot um when you need to optimize something you should be able to
[04:44:28]  go down a layer of distraction yeah right like the adding signals adding compiler adding all this stuff um doesn't make things simpler it might make things easier see so when you add a
[04:44:41]  state library to react it makes it easier for you to write more more performing code it doesn't make react faster um the compiler is an interesting one because um it does sort
[04:44:53]  of the same thing but you know very effectively it almost makes any code into the most optimal react code but doesn't again it doesn't make react faster right so in theory if
[04:45:06]  you are an expert this is true you should not be asked to go up by introducing a new layer on top but not everyone is an expert but i just want but i
[04:45:18] 'm like you know me you know my audience you know things i like expert takes this is great then i read the next tweet the pilot can just signals will then the hooks will
[04:45:26]  automatically the bundle will magically and and i'm like i was like okay well let's talk about this for a second you can technically optimize by adding a compiler you can technically
[04:45:51]  optimize by adding signals and you can definitely optimize by adding a bundler all these things can actually make your code like resumability is a compiler bundler trick that to
[04:46:06]  be fair you could do it by hand but good luck with that signals let you get rid of the vdom that's instantly a huge optimization win without doing other like other
[04:46:22]  stuff of course just adding a layer is pointless but it's possible to to shift the um where's my response it's it's possible that what you're stuck with is
[04:46:41]  an architecture based on an api right so like picture if if you're using react and then you want to change the architecture to something like solid you could in theory migrate
[04:46:54]  to legend state and then eventually just pull the rug under react that could be a migration uh strategy right and in a sense like react could be pulling some crazy migration strategy where they
[04:47:08]  eventually drop the react model essentially and go straight fine-grained like solid because you move to these helpers and then eventually get rid of the virtual dog so like generally speaking
[04:47:16]  adding signals to react react won't do anything but adding signals to remove the vdom that's huge right sometimes you i did this at one of my early companies where
[04:47:24]  we created a facade layer of the api and then gutted everything underneath and kept the same interface and drastically improved the performance of what we were doing but it wasn't we
[04:47:33]  couldn't do it in one step right so i think i think this is like there's accepted fair i won't say that moving up a layer anymore of a billion different foundation
[04:47:46]  but were it a migration strategy that would be a reason to introduce something higher up short term it's hard to move boundaries right yeah it's not practical right to avoid the
[04:47:58]  vdom sorry two secs all right anyway i i think part of this is that people don't understand what going down a layer like react to set the baseline so high
[04:48:30]  that people aren't as close to the vanilla anymore but i it was just interesting to me because i made a visual of this because i was trying to like think of how to
[04:48:37]  explain this because sometimes building the facade is the bridge to get the getting out of a local minimum like getting stuck right and actually ryan looks like he agrees with me he
[04:48:50]  said something here rotate it on the third dimension and you see you're on the wrong mountain yes basically you can always express this by going from one dimensioning adding a dimension
[04:49:00]  then like because this is basically two-dimensional like it's on a line a straight line and then or so this is basically one dimension you know like on a straight line and
[04:49:11]  then this is basically two-dimensional right like if you turn here the map there might be a different mountain or a different way or whatever like so yeah um i i think
[04:49:24]  i think this is something that we we have to be careful of so just kind of put that out there like generally speaking understand that adding things doesn't make things faster although
[04:49:36]  it might make you faster but sometimes also that change of abstraction actually has mechanical benefits so okay yeah i remember this week was just kind of brutal um just like reading some of the
[04:49:54]  stuff like vanilla js is by the far the most sensible thing to build your web app in the mild disclaimer manual dominant decision absolutely pales in comparison to the endless grind of trans
[04:50:03] itive dependency tooling and updates i will die on the sale front and emperor has no clothes i mean sorry dev i didn't i didn't end up highlighting your thing for the
[04:50:14]  last one but i think you you you're the one like if you go down this thread at some point and maybe it's your quote tweet dev i remember the guy basically said
[04:50:22]  he doesn't build anything that's like not like a blog site like nothing that's an actual app so like it's fine but these things kind of blow up because it's
[04:50:32]  really sensational right now i yeah i get the regression people are sick of having to deal with stuff but it's not like they're offering a solution that actually solves a problem um
[04:50:43]  so it's kind of like let's say people have been saying this for all the mainstream frameworks out more than a decade ago any student looks like they're likely wrong it's
[04:50:50]  very wide spectrum what people consider web apps frameworks can help build most of them but overkill for simple cases vanilla js can have both simple cases but maintenance nightmare for complex ones people
[04:50:57]  talk past each other because they only refer parts of spectrum they build them when you're aware about and this talking past each other really became yeah yeah yes yes dev this is
[04:51:05]  what i was looking for thank you um this talking past each other is is really kind of need high performance experience build one level fully agreed building a complete custom low-level
[04:51:26]  solution will also be more important framework to this for the other 90 yeah this wasn't the one i was one i was looking for but it's fine i like um
[04:51:42]  yeah it's just like we've gone in a really weird state um and i i actually picked a topic that people often talk past each other with i was kind of curious like
[04:51:57]  people always talk about framework churn right and i'm like how most people experienced it at different points of the time this poll this went up to 80 percent other times it
[04:52:07]  was you know it's kind of hovered around 70. the funny thing is reading all the comments and stories here there's there's a bunch of the angular js crowd i
[04:52:16]  get it that was a hard migration but a lot of the a lot of this actually is related to churn within the framework itself like people outside of react or who use react
[04:52:26]  casually think react has changed like a ton over the years and it kind of has even though it's still react and it's backwards compatible whereas like like i mean angular angular
[04:52:37]  js sorry angular js to angular 2 was a bigger change but still like generally speaking most of the complaints were actually about existing frameworks updating and and like the other 70 i'm gathering
[04:52:52]  are react developers in denial i i i mean the truth is that it's not actually that bad that that it's not yeah angular js to angular is considerably different but people
[04:53:08]  are like is react with hooks the same as react before react with hooks like every component library in the ecosystem basically rewrote itself and it's like yeah you know what
[04:53:25]  i mean like i i actually think it's because a lot of cases the pain isn't that bad people are going to complain but the funniest thing is both the people who are
[04:53:35]  kind of anti-react and the react group agree with this statement because they're like oh well yeah too many different frameworks we should just keep on using react and the other
[04:53:45]  group is like god everything just keeps on changing your front end we shouldn't use javascript so somehow the two biggest groups have actually talked past each other and completely come
[04:53:53]  to agreement on something and um that's kind of crazy because it means that the only thing you could be doing that's not correct or that's wrong is actually giving smaller frameworks
[04:54:06]  a try which is kind of an unfortunate reality of things but it's funny it wasn't until i saw all the comments that it clicked on me that like both of these
[04:54:17]  things like people even in this thing are talking past each other right it's there's like the we still have that division between the web app and the website part of the world
[04:54:29]  so to speak um sweet okay let's let's see before that let me see here why did i hmm no we talked about this talked about that actually good we don
[04:55:02] 't have it okay yeah one more brian florence tweet but before we do that let's just do some quick solid news um what do we got here i don't
[04:55:19]  know the this is cool uh he's been doing a lot of form work i don't i don't know enough about the ux but i'm i'm loving seeing
[04:55:32]  vivian's work it's very small it's very tight it's you know it's kind of got that preact mentality behind it um valibot is super small and
[04:55:41]  efficient i'm hoping i i always love seeing another form library installed so that's pretty sweet um what do we got here ai pdf summarizer nice another project okay so
[04:55:51]  just only a couple things to highlight this we consulted um okay last two topics um matt holcock honestly i don't understand stuff until i can see the grid like this is why
[04:56:04]  i love drawing grids like this this finally makes sense to me it explains why i don't like vibe coding it's like the exact opposite of where i think a developer
[04:56:15]  coming into ai probably naturally wants to sit i think it's interesting is that i i saw another tweet of this which basically drew this as a circle where like someone comes in but
[04:56:27]  they're like yay ai i'm now a developer comes down here and realizes they actually have to learn how to code and then like comes down here and learns that they have to
[04:56:39]  actually like learn the language to actually be able to describe how the code like it's a specific language it's not just plain english and then eventually gets proficient enough to
[04:56:49]  get up here like like as a loop it's obviously people enter i think most developers and people who fall on twitter probably are going to be down here and idealize want to
[04:56:59]  get up here somewhere um from a developer standpoint i in any case i love this graph at that's cool um i just want to give it a shout out all right uh
[04:57:24]  what's this ryan florence treat sorry components are awesome but not enough hooks are composable but awkward okay signals are novel but awkward for the same reason they're
[04:57:37]  novel see again just slight dismissive but okay requiring an execution context what if we didn't track dependencies what if better state permits aren't what we actually need okay i mean
[04:57:50]  these are questions that obviously anyone has designed a framework or working framework has asked themselves yeah i mean yeah i think he's just like looking at the general solution space and finding a
[04:58:11]  way to dis every existing solution or say that there's a problem with every existing solution to open space for saying that we need to find a better solution yeah he doesn't
[04:58:21]  or hasn't presented at all what a better solution would look like but let's let's take this at face value and assume that he isn't just trying to put other everything
[04:58:32]  else down and that he's let's do the mental exercise of where this thinking gets us right htmx maybe yeah i i'm i'm saying let's assume
[04:58:51]  that he isn't just doing fluff marketing for remix i want whatever he's smoking yeah i mean it seems like pretty powerful stuff well and i mean maybe that's the maybe
[04:59:06]  that's the answer right like don't assume like like basically htmx is like bad react right it's like what if we just re-rendered everything and then
[04:59:20]  just like didn't care about how terrible the performance was right that would be simple components are awesome but not enough but that doesn't talk to composition or like building things signals are
[04:59:36]  novel yeah but i mean if you basically like are you with me if you throw away execution context like locality at in in general because i mean components are execution context right
[04:59:58]  right like components don't track they say all our dependent things are dependencies but if you're like what would it look like to throw that all away basically is there a way that
[05:00:10]  we could legitimately do this yeah just wrapping up kisses i i see it um what if people in elms i don't know what he's talking about okay signals oh here
[05:00:34] 's an instrument this it's our guy again i think signals hooks and components all solve symptoms tell me more data flow and unclear ownership okay so how do we solve it oh
[05:00:45]  state machines okay but the problem is state machines as we already talked about on the thing that's great for navigating stuff but then how do you actually synchronize the state at the
[05:01:00]  end the state is granular or not granular you're either htmxing it vdomming it dirty checking it signals it like it doesn't it it higher
[05:01:12]  level architecture saves you but doesn't actually solve the problem in a real way imagine a state machine that included all the dom knows maybe you're onto something yeah relying on the
[05:01:36]  server 100 but okay but you like these problems are inherent to state right like let's say we rely on the server 100 like we have like a web sockets thing you're
[05:01:46]  just pushing the state issues onto the server right like it's it's perfectly fine i think liveview is a great model for example but like you're still going to need to
[05:01:56]  structurally organize stuff and handle composition you know the complexity comes with state in the lifetime of the thing not the where it happens yeah i mean i i think the you guys
[05:02:13]  on the stream are just to to understand this stuff right too well um okay so let's let's keep on going like are we getting any ants help here new framework incoming
[05:02:33]  lol yeah definitely wall um skip over me what if there's signals all three that didn't rely on execution content for tracking ownership disposal but i mean explicit versus implicit makes a difference
[05:02:45]  but i don't think that's what he's saying signals aren't novel they're just a way to yeah cloud doesn't care maybe the real problems we're trying to
[05:02:54]  make state feel magical when it should be explicit and boring sometimes the best stretch of the middle no abstraction okay sure but did you have an answer here oh atomic reference okay here's
[05:03:08]  one surprised me the first closure script in this red single atomic reference to immutable value for each screen on ui that's the architecture but they're laughing it's like redu
[05:03:16] x okay by cook rx js same problem wrong way to think about signals well that's correct i mean this is great engagement bait people are saying a ton of stuff stay parallel
[05:03:39]  to ui why don't call out the htmx ceo directly i'm just like reading this immediate mode oh here we go i use my own purchase as
[05:04:01]  immediate mode api it's supposed to request render re-render function it's foolproof i bet you it's super slow too but let's keep on going welcome to
[05:04:13]  angular what makes signals awkward he's going the hypermedia way i think you guys are right honestly i i the guys who pointed out htmax i i think that's
[05:04:27]  the gist of it he's basically giving up on most performance type things for simplicity which is a reasonable place to be people if you look at the response people have had
[05:04:36]  enough of the complexity that comes with making stuff that's actually good they're like screw it i don't care it's fast enough that's what i'm saying remix stream might
[05:04:45]  be the fast enough um framework they might carry that as a banner i'm you guys think i'm joking but like i'm sort of not anyways what i said this is inspiration
[05:04:54]  for zone gs and angular most angular classic science that being said execution context is extremely valuable to avoid executing everything whether that be a component primitive dom binding whatever a complete immediate mode
[05:05:02]  render would be cool way to approach this but given the dom is retained mode even the biggest proponents have generally made concessions due to performance the vdom is an
[05:05:09]  incredible development in this direction considering the physics of things it's true as i said earlier reacts the thing that should have never worked yet it works this is an amazing accomplishment you
[05:05:21]  know kind of like you know like whenever i see stuff like that like even just it existing is something to celebrate but that is probably not it since you're talking about removing layers
[05:05:35]  right he said he wants to remove layers so i don't he's actually going to go completely in immediate mode that means we're dealing with retain mode probably which leads to
[05:05:45]  all the state synchronization concerns with scaling that leads to other solutions basically dom has execution context right i'm basically saying like the problem is the dom itself basically forces you into execution
[05:05:54]  context like even if you had like an event system or x state like eventually you're going to have to scope that unless you're talking about rendering to canvas that's pretty interesting
[05:06:03]  so i made a joke obviously at the end um i don't think they're going to canvas but literally that is one way that they could definitely change the physics here because
[05:06:17]  i don't think this is actually solvable like completely i think the reality is they're going to pretend it's not a problem and then wonder why people aren't jumping
[05:06:32]  on right i mean to be fair it's kind of like the loader's action thing they could get really far and remix with that but a lot of people never picked up
[05:06:42]  a remix simply because they were like this isn't sufficient for the types of apps i build i think they're going even further on the extreme there which is good i think there
[05:06:50] 's a whole market of people who aren't react i wonder if remix is just going to go head to head with astro right but it's weird because you got all
[05:06:58]  the people who were like remix react devs i'm kind of reading this and going what the hell are you talking about i think we might be in for like a grown moment
[05:07:07]  you know what i mean where we're just like oh that's what he means oh okay um let's see did anyone respond to me canvas the next frontier i mean if
[05:07:19]  you want to rebuild a bunch of stuff and some people didn't like that comment isn't that flutter yes angular never yeah what was this yeah yeah you keynote yeah that's
[05:07:34]  because the dominative like there are abstractions on of the dom and other things so you can do like native um rendering and like native script it's just enough dommer so
[05:07:46]  yes there is like i i i don't mean the entire web but i mean there's a the huge amount of work into standardized and stabilizing the dom apis that
[05:07:57]  you kind of give away by going to canvas maybe like who knows maybe things do go there but it feels like that having that shared standard is what um like makes the web attractive
[05:08:09]  and you're kind of giving up on that i don't know i was only joking about the canvas thing but you know here we are uh let me switch around here um
[05:08:23]  let me greg wrote something a little while ago i want to finish up on this note i think it's been sincere i'm on vacation the same place i spent two weeks
[05:08:36]  binge watching your old videos three years ago when starting on leptos thanks for your years of teaching you're such a gifted world to date that stream i did with g
[05:08:46] reg is my most watched video um it is an amazing stream greg is a creator of leptos is an amazing teacher um that's that's why i think that stream
[05:08:58] 's so popular he he knows he knew how to teach myself and javascript developers how to appreciate rust which um i know maybe a lot of people interested but he made it
[05:09:09]  very accessible which is incredible which is why to this date every week i look at my numbers this stream is just this the stream that keeps on giving so it was honestly thank
[05:09:19]  you um for that um my stuff's a little bit you know r d ish i wish i was a better teacher um honestly but i do appreciate the compliment and uh
[05:09:34]  yeah that's crazy yeah like i'm glad that knowledge is out there this is how you inspire the next generation of framework authors and you're a big part of this i think
[05:09:46]  i think pushing the boundaries like this is really important and i'm i'm glad to to know you and to have uh you know what's this push it pushed it along
[05:09:59]  sort of what's the term play forward yeah now i'm just catching up with the rest of chat i was forced to pick up remix because of shopify i don't really
[05:10:15]  enjoy from it that much especially flat file writing flat writing is cool i thought it was novel i had some concerns but like inconsistency of it but i think it's actually
[05:10:23]  one of the better solutions for fs running canvas is terrible for accessibility yep thanks greg yeah a lot of thank you gregs there's lots of fast wasm
[05:10:42]  frameworks now you're baiting uh but yeah that stream is amazing because you actually understand why the constraints are vast and like how the like it impacts the different framework stuff and
[05:10:58]  it pushed the envelope i think wasm frameworks had kind of got stuck for a while because they were like yeah after like i guess of sycamore and then lepto
[05:11:08]  showed you go any faster then we got dioxys doing blocked on like it started pushing like once really understood that overhead anyway thank you all for joining my stream today i think
[05:11:19]  we're going to call it a stream um you guys have a great one