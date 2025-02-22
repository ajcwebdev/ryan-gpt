---
showLink: "https://www.youtube.com/watch?v=p9pwHyM5Z98"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS in React? Reconciling Disparate Worlds"
description: ""
publishDate: "2023-01-21"
coverImage: "https://i.ytimg.com/vi/p9pwHyM5Z98/maxresdefault.jpg"
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

[00:00:00]  all right hello everyone welcome to my stream today how are you all doing come say hi in the chat while we get started up here and let those twitch pre-rolls roll
[00:00:13]  oh nothing like some orange juice yes how's everyone doing um stream today uh is a topic that i've been like playing around with for a few years now honestly but i
[00:00:32]  never really gave it much too much thought like it was more of just like oh that's an idea let's play with it never something i took really seriously um in terms of
[00:00:43]  this idea of like how solid and react work together i i already instinctively knew i've experienced that there is quite a big divide here but um it's something i've
[00:00:53]  been looking at again and i realized that for a lot of people they might not be aware like just how different the approaches are and i think this manifests in several different ways and
[00:01:09]  it's something that i want to kind of like touch on and look at um truth of the matter is i could be much more prepared for the stream than i am i
[00:01:18]  feel like i could like give a workshop on this topic um if it made sense but you know here we are i can i kind of like these friday streams it's kind
[00:01:30]  of like doing improv um you don't know what you're gonna end up with until you do it so that's that's the fun part um i'm just killing some
[00:01:41]  preamble here while people join on the stream i'm going to uh i'm going to uh what do you call uh give this shout out on twitter here too so
[00:01:51]  if people are aware that we're live um let's see here let me see that my screen presenting works uh where are we oh wow stream yards updated the ui can
[00:02:09]  i say entire screen yeah let's go screen yeah yeah watch from twitch um yeah yeah that was bad wasn't it um oh just a second let's let's get uh let
[00:02:26] 's let's get this thing going here and we are live i'm gonna put the twitch link in again because i feel like twitch it might be the better viewing experience what
[00:02:42]  is it twitch tv slash ryan's solid i like actually don't even know uh yeah that's right all right all right okay let's let's see how everyone's doing
[00:02:57]  chat let's let's thing yeah everyone i talk to about solid don't understand how different it is yeah i'm yeah i mean people people are interested i mean it's
[00:03:18]  understandable and we'll get into that in a moment here yeah i mean that's one metric to look at it i do think that that's an interesting perspective it's like the
[00:03:31]  fact that it can look similar is kind of impressive in itself all right yeah yeah yeah yeah scale draw is going to come out hard in in in this episode in this stream
[00:03:51]  because i don't think i can i i think i think we just need to draw a whole bunch to actually make the sense we'll look at some code too but we
[00:03:58] 're gonna have to draw a lot i think oh what do you got for me dev oh yeah yeah if you are in a twitter circle you gotta be careful pulling twitter up
[00:04:21]  on your screen while you're live putting this out there because it causes real problems uh yeah i've been pretty good about it i usually have my profile open beforehand i that
[00:04:36]  was just so random all right all right all right all right all right all right brandon how's how you doing oh wow okay cool cool cool yeah so i i i
[00:04:51] 'm just you know doing my little time kill right here but i do think i do think i do think this is an interesting topic in general and the reason is like let
[00:05:06] 's face it i mean it's not even let's face it everyone knows this like react is basically everywhere and everything and its influence is so strong it doesn't only impact
[00:05:17]  like the fact that like there's all these ecosystem libraries for it compared to other solutions like just in general the way people look at things like state management or like different like what
[00:05:29]  a library should do is based completely on react's model and it makes sense that it is and a lot of frameworks have varying degrees of compatibility with that mindset and thinking and
[00:05:42]  the funny thing that's might not be obvious to to people is solid might be the most incompatible with the way that react does things like at every level from rendering to
[00:05:53]  state management to like pretty much everything and that that's that's that surprises people a little bit given how uh similar it seems to be but i can't impress enough how different
[00:06:09]  that is um how are we doing here oh uh thank you lynn for the prime sub um yeah just gonna catch here yeah good i didn't miss anything else um yeah
[00:06:24]  we're gonna dig into what i mean by incompatible like you can make things work together but i mean when we're ready to go here i think i think it's
[00:06:39]  almost easiest to start with one part of the topic we're gonna start and talk about the rendering a little bit and then we're gonna kind of go out from there into
[00:06:50]  the implications of state management because it's people talk about stuff like uh fp versus uh sorry like uh fp versus oop and i think we're talking about that level
[00:07:03]  of difference here where like you use certain patterns together because they're congruent where you don't in other places and it's not easy to say one is better than the
[00:07:14]  other it's just different and i think the really interesting thing to me is uh as mentioned someone was like uh mentioned in chat a moment ago that oh you know it seems kind
[00:07:24]  of impressive that solid could look so much like react and be so different um it's because react kind of meet met us halfway um from my perspective things like hooks aren't
[00:07:36]  um maybe as natural for a react like model as they are for other models and i think that we do have to put this in perspective because we're going to look at
[00:07:46]  stuff like history historical stuff here we're going to look at like um you know progressions on these things and we have the benefit now of hindsight of like knowing that react will
[00:07:59]  go to hooks right but when you when you look at something like class components um these elements aren't as obvious right and i think that actually starts right from like the very
[00:08:13]  first example that i'd want to pull up in you know when talking about this stuff um and that's like i i'm gonna i'm gonna start today you got you all
[00:08:24]  probably have seen this before let's see if i can find it i i'm gonna start today with the with the with the counter demo right i mean this this was this
[00:08:40]  was all the no it wasn't this counter demo it's the self-incrementing sorry give me two seconds while i pull this up but this was like the thing
[00:08:47]  that everyone's talking about with solid about a year ago and i i i i want to go back here i can believe it and i haven't even got started okay so
[00:09:05]  let me see if i can find what i'm looking for i'm looking for uh let's see here we're react see i've give me two seconds while i pull
[00:09:21]  this up react all right yeah here we go i found it all right i'm going to share my screen again let's do this okay all right is everyone here now yeah okay
[00:09:37]  let's get rolling i i want to see i'm saying right now that i'm starting from the beginning but i'm not starting from the beginning because react didn't have
[00:09:52]  hooks until 2018. so this is not the right kind of comparison but i want to start here by just understanding the implications of this because i feel like a lot of people when
[00:10:03]  they saw solid they're like oh it's like react could we just like use a compiler to migrate code or would there be just straight up compat could i just like take my
[00:10:12]  react components and use them in solid and the answer to that question is no um but i don't know if that's obvious to people so let's let's get started
[00:10:19]  there right because like the very first thing i want to get started with is this silly counter which this is the most basic thing imaginable you have i have a use state that
[00:10:31] 's setting the h1 in a diff and i've commented out this section of code here for as you can imagine very good reason um as soon as i uncomment this
[00:10:42]  things are going to get crazy i might crash my browser i was prepared for that but i'm going to uncomment this okay and we're already seeing exponential counting up this is
[00:10:54]  not me dropping frames this is just the fact that oh oh okay i've commented i've is it too late have i okay no we're fine you you don't do
[00:11:06]  this in react right what's happening is i'm setting state in the same component and that's basically causing an infinite loop and it's it's not because every time it
[00:11:21]  re-renders it creates a new interval we're actually exponentially creating more and more of these loops and event and it just like skyrockets into infinity right and the only
[00:11:37]  reason i bring this out is if if i was writing a program for the first time for me at least and not everyone intuitively this is where i would have gone um and
[00:11:49]  i'm going to go in solids playground and clear out some debugging stuff i was doing was it uh local storage the new playground never forgets now which actually kind of annoys
[00:12:04]  me a bit okay there we go um let's make this a little bigger and i'm just going to grab this example because we can basically copy the same react code in
[00:12:19]  solid and it basically it's going to be kind of like the same thing and except we're going to call this counter because and we're not we don't need to export
[00:12:31]  it and instead of use state we're going to go create signal and i'm going to call this as a function and now when i uncomment this it it works exactly
[00:12:46]  how you would expect it to work now i'm not trying to this is not a like a boasting kind of thing i just want to start here to understand how different
[00:12:57]  these models are okay like let's just let's let's let's keep this in your mind as we continue because react the difference is solids function here is essentially a setup
[00:13:19]  function not a render function it is an effect it's like it's it's actually a thing doing creation um versus something that is pure like react which um which is basically you
[00:13:33]  put state in and you get like this vdom out and you can go well isn't that creation aren't you actually creating things well you kind of are but from react's
[00:13:43]  perspective everything that happens in here is throw away like they can just do it again it's not permanent and whereas in in solids example this runs once you call this function you
[00:13:55]  set up some stuff and you set the rules of how it updates so how do we get react in a happy place here well if if it's pure you have to have a
[00:14:09]  way to denote side effects right so i'm going i'm going to put this in here now and and hopefully you like you might be like okay well does this solve our
[00:14:24]  problem well not exactly um and yeah sorry i actually like this this version is like already a jump ahead i wanted to do this this is this is still this is still our
[00:14:44]  problematic because we're still creating the intervals so what we want to do is we want to do this and we want to basically go like was it clear not clear interval t and
[00:14:59]  if all goes well this counter basically works um but there's a problem with this okay the problem with this is and this one's harder for me to show but if i
[00:15:22]  had different right now there's no dependency array it was i just made a way of cleaning this every time but if there was more state or props or something else that changed
[00:15:35]  this we we hit this really awkward problem that the interval gets reset not when the count changes but when the component reruns so if there was some other state that caused the component
[00:15:46]  to rerun that would also reset the interval so like like if i if i if i created a second interval um for example maybe that's the easiest way to show this
[00:16:04]  and when count to set count to and then put this in a fragment again don't don't get me wrong i am not doing this at all i'm trying to just
[00:16:18]  illustrate the difference here in the model to help appreciate what the problem is because if we do this and then we change this to count two um and we set a different interval let
[00:16:36] 's go set count two to count two and okay right now these will be in tandem but let's let's do something a little bit more chaotic do you see what's
[00:16:54]  happening why is the first counter let's try this again refresh why is the first counter never updating one second ago when they're in tandem they updated but now this one doesn
[00:17:14] 't update well the the reason is every time this hits 750 and re-renders it resets the the timer on this 1000 it never gets to one second and this one
[00:17:28]  stars right yeah people in the chat are throwing this down i just i just want to like you start seeing there's implications of the fact that there is a world outside that
[00:17:43]  re-renders every time but but this is only getting started the the the more obvious way to approach this than than what i was showing here is is simply put a dependency
[00:17:56]  array on it and put some kind of dependency in and see instantly complains at you and then they're like okay you've got to put count in um uh but okay
[00:18:05]  what's going on where are we now this still has the problem of what i showed you a moment ago so what you actually want to do in this case is have no dependency
[00:18:20]  array because then this only runs once once on mount okay everyone's still following so far yeah yeah the intervals was made made it really illustrative i just wanted to show like
[00:18:40]  you hit this like this isn't something you have to be aware of as a as a react developer in this model don't get me wrong in when the state wasn't
[00:18:49]  inside like before hooks this wasn't a consideration so this isn't like a this isn't like a fair like historical look i just wanted to kind of like kind of put this
[00:19:02]  put this in in in in in your mind right so what i'm getting at is oh wait but what happened it's it stopped counting at one i the thing is the
[00:19:20]  reason it stopped counting at one is because the outside world reruns again and this count value is closed over at the beginning it can never like this this only has the count from
[00:19:30]  the first render so we we now have this issue of stale closures and the easiest way to solve it is to use the functional form of this but there's there
[00:19:44] 's still a challenge here because sure now you get the recent values but what if you're reading from another signal or um with a different timing like we showed a minute ago or
[00:19:54]  from props coming in this solution won't work for you okay okay i i just and there but like there there is a solution for this and um i one of my favorite
[00:20:16]  blogs um here where is it making set interval declarative with react hooks right i think this was the final version of of what dan abramoff put together this is a
[00:20:37]  great article by the way i'm just going to show this in chat everyone should read this article this is this is this is this is just i mean maybe not everyone but
[00:20:47]  anyone who's here and wants to learn at this call this is this is this his whole blog is great honestly i i've read every article in in his blog multiple times
[00:20:56]  um yeah that that is that is the solution right how many use refs do we need well in this case we just need the save callback and then we have to
[00:21:11]  think about the callback itself as um something that we have to keep track of as i said there are simpler solutions to this um for specific cases but he he was he did
[00:21:27]  this on purpose as a hook to generalize the problem and and this is you know where you get here's a here's the thing though he does have one cool thing
[00:21:39]  you can change the the delay here so that is that is pretty cool uh sorry maybe be clear have what issue um yeah side note ask lots of questions on the stream this is
[00:22:04]  this is this is this is this is the point i want to make sure that i'm covering the right information the thing the thing with the solid example was when we did
[00:22:12]  it right here at the beginning it was it was basically the first thing we wrote before we added anything else um this version does not have those things you know we can we can
[00:22:22]  we can put two intervals on here and there's no there's no there's there's no question here right um the reason i mean the and what was this i set
[00:22:44]  this one to what 750. okay let's see if i can get this oh right set count two that's not going to get us anywhere there we go um it's
[00:22:56]  because the updates are completely independent from one another right like there there is no correlation it's not like obviously the no re-render is the obvious part but like there's also
[00:23:11]  no correlation and what i'm trying to get to is maybe you know we could look at building this you know hook in solid but maybe that it's not necessary for me to
[00:23:21]  make my point is that what i did with this code does the compiler or whatever know how to get back to this code i'm gonna go back again like see i would
[00:23:46]  argue that it's easier to start with something like this because you can see you can see the intent they're like i got some state um and i'm on a timer
[00:23:59]  setting an interval and figure out how to drive react this way then looking at some react code and going okay how do i undo this back to there it's because react has
[00:24:14]  more language than and it's it's not incidental language like there might be meaning in why the save callback needs to be tracked in a separate effect to remember the latest
[00:24:28]  like it's hard to determine your intention in in this code it's it's not only more complex but there's a there's a whole semantic around the fact like that
[00:24:38]  the code on the outside runs like the fact that the closures are stale might not be a bug it might be intended like that that that is sort of the that
[00:25:10]  that is sort of like the tricky bit here right because you start going okay well use ref i maybe it's a no-op but like what what is this doing like it
[00:25:22]  would be hard to make this optimal solid code but it would be hard even to try and figure out what's going on to a certain degree because react has not only state
[00:25:35] ful primitives and by stateful let's let me just list explain a little bit what i mean when i talk about that i'd say i say stateful primitives i
[00:25:44] 'm talking about like use state um it's funny i'm gonna put use memo here although people think of it as a memo one and uh use effect okay because to me
[00:26:02]  these map very very directly to create signal i mean create memo and create create effect and you might be like in in solid and you might be going like well yeah i mean
[00:26:28]  they're named the same practically too but it it there is there's a difference here because and it's it's a it's a slight one because well this is a
[00:26:41]  it's kind of it's why i called memo create memo and solid in other reactive libraries you'll see something called um computed here this is how we derive values but the the
[00:26:57]  key point here is you can look at it computed in two possible ways you can look at it as something that's kind of like an effect like basically whenever some state changes
[00:27:08]  it updates its value it's computed and only then does it update its value but on the on the other side and this is more important when you look at rendering or like pulling
[00:27:21]  the values out a computed is a memo it's a situation where every time you call this function you'll get the same value unless its dependencies have changed that's like it
[00:27:31] 's i'm saying the same thing but i just reversed it slightly all right let's see how we're doing chat can we use multiple state i mean you you can't
[00:28:00]  it depends on the scope of of what you need to render when like once you get into multiple use effects and you're using refs in the middle to kind of keep track
[00:28:09]  for you you got to play like a game of like okay on this render cycle these things update on this one these one update like you get to a world where you're you
[00:28:18] 're thinking of things in like like passes or like change sets is the best way i can think of it okay yeah i mean the thing is we use create memo internally
[00:28:50]  in solids renderer a bunch like control flow points like when you hit an if statement like like ternaries that's where solid uses create memo and in a sense it
[00:29:03] 's computed but in another sense it's actually like if this doesn't change like if the boolean stays truthy don't re-evaluate what's below it
[00:29:13]  because we don't want to recreate those dom nodes like it is actually a sort of memorization you still have to it lives in memory um it affects when those values are pulled
[00:29:25]  um like as in red in other computations or effects and i think that i i this is why i see it while these are very different systems there is certain analogous
[00:29:35]  properties the same way that if you learn electrical engineering and you learn like uh mechanical engineering you'll see like similar looking equations from the math but they're describing different relationships within that
[00:29:49]  system again this is probably more techie engineering kind of thing but i just i i there there are analogs here in solid it's eager right now but it doesn't
[00:30:05]  have to be eager uh in view it is not eager in preact it's not eager um mobx i don't believe it's eager either but the it this is where
[00:30:21]  that question kind of comes in so why in solid if you want to memorize what you use memo you could but there's almost it's very rare the need to do this
[00:30:42]  kind of function memoization when stuff doesn't re-render over and over again you don't have to worry about references to things you create within the component body you do you
[00:30:53]  want you only really worry you only use create memo if you want and don't if you want computations and don't don't get me wrong here if you look at
[00:31:02]  this that's how you use in a react too it's actually use ref that you use to kind of combat the re-render um mechanism memo is in my opinion a state
[00:31:15] ful primitive that's why i don't include it but what i was trying to get at is that react also has memoization primitives um things like use callback use
[00:31:31]  ref and while this next one isn't a hook i i think it deserves being in the category react.memo right because these are part of the language um i mean
[00:31:50]  use event if it comes out might be in this second category too actually but what i'm getting at is if you look at view if you look at svelte you look
[00:31:58]  at solid our language only consists of these generally um but if you look at react they have a whole additional set of language primitives and it's because of the semantics
[00:32:09]  to be fair view is like on the borderline um i think i showed this before but view 3.2 uh i think it was quintessential tuplets they they uh
[00:32:22]  they added a v memo directive and that is not derived data that's verging that's so you can cache virtual doms that this this is basically verging on react.
[00:32:37] memo it's it's it's basically in that zone but for the most part this is the difference between a reactive system the top down is because the the memoization
[00:32:49]  is sort of automatic here from the state graph we're here because the state itself is not very special um the everything has to be handled by the component system so the memoization
[00:33:03]  is in your end user code now there's good and this is a good thing in the sense that you have some amount of control right but it it does make it interesting
[00:33:14]  um because like i've been i've been very critical actually reactive systems over memorizing like everyone writing everything into computed when it could just be a function call this is why i
[00:33:24] 'm a big fan of or not a big fan of the dot value style reactivity it starts pushing people to like just computed cuz and i i think you know i think
[00:33:33]  that's not good because your apis drive you to over memorization which is fine for updates but not good for creation and we do spend a decent amount of time doing creation
[00:33:47]  when in in modern single page apps because we navigate and we client render and client rendering navigation is all creation and that's why creation metrics and update metrics are both really important solid
[00:33:58] 's performance wouldn't be where it was if it didn't pay attention to both it's both faster to update than a lot of solutions and faster to create where classically
[00:34:08]  um you can imagine that these reactive things are actually faster to update that's obvious but often slower to create because the overhead of the extra like memoization and to be fair react
[00:34:21]  wasn't always like this i i saw i saw this tweet um that really caught my eye tanner was kind of uh um tanner was um was kind of poking at
[00:34:33]  react uh i mentioned this in my last room he was like pardon the the spicy take here um let me blow up a little bit he's like while immutability in js
[00:34:43]  and its collective buy-in was one of the biggest reasons beyond react's success to the platform i firmly believe it'll be one of the biggest contributors of its demise i mean
[00:34:54]  that's pretty strong but pete hunt as many you remember um early on the react team he he was the speaker at that first talk i did on my recent react stream
[00:35:03]  well it's not that recent about a month back where i talked about react um the like the history of react and how it became the most uh i forgot what prolific j
[00:35:15] avascript framework is that the term i used um he said immutability didn't have much to do with react success in my opinion object identity has only mattered in the
[00:35:23]  post hooks era this is like ding ding ding um you know kind of observation here early react was just like set state it'll re-render who cares forget about it but now
[00:35:39]  because the states inside and we have these dependency rays we actually have to kind of be aware of like hey this part doesn't update like that's when a lot of this
[00:35:51]  memorization came in to be fair it was possible probably to write old react in really terrible ways that no one really noticed but still closures and memorization like weren't part
[00:36:01]  of that consideration i think react hooks today lead people to writing more performant react code than they ever did but it comes with this awareness and that's sort of what i
[00:36:16]  meant about meeting in the middle doesn't make sense why because state ref until it doesn't have it all no ref is signal right it's the same it's the same
[00:36:39]  concept it's almost identical um i think ref is cute in that it also works well with dom refs but what does top down mean yeah yeah i think maybe this is a
[00:36:51]  good point to kind of look at that yeah and yes the talk by pete hunt was rethinking best practices um i think was it or was that the flux one i
[00:37:02]  can never remember all right yeah there's this yeah don't get me wrong this part of the equation where there is like should component update um which is basically replaced by react.
[00:37:23] memo that part was always present and you could kind of make that choice and it was an interesting choice because once you made that choice you kind of had to make that
[00:37:31]  choice everywhere because the problem you often hit with memoization chains is you like miss one and then the whole thing gets thrown away anyways um so like yeah i this was present but
[00:37:45]  stuff like use callback use ref use event or whatever wasn't present in this model and again i'm not i think with hooks you write more performant react code so i
[00:37:55] 'm not saying this is the bad thing i'm just saying like i'm trying to emphasize that the run model is different and when i say top down i mean that like
[00:38:04]  the naive approach to this um to whatever you know is going on in in react or in our examples here is that um if this was a tree of components and you set
[00:38:23]  state in the top component it will just re-render down the whole tree it doesn't matter if like like that like this this you you're just updating a count in here
[00:38:38]  like if i put like child in here that's the that's the naive approach right um the state changes are isolated to the the level at which the the components we render
[00:38:52]  but like the then the thing is and when the other thing and we always have to pay attention to this is the term re-render in react doesn't mean update dom just
[00:39:03]  means produce v dom right and that language difference has also been tricky because like re-rendering and react is not like terribly expensive unless you get into really weird stuff where
[00:39:18]  things aren't doing what you want um or like things get really big like unintended recomputation of things over memorization like there's ways to make it slow but in
[00:39:32]  itself isn't particularly expensive if you ignore end-user code if you just like talking about the framework with no code in it it's not necessarily that expensive but if you if
[00:39:46]  you if the code is set up so that like it always reruns and the end users aren't accounting for that in the right way with the right knowledge then you're gonna
[00:39:54]  like i think much easier get in a place where things get you know heavy but again that's that's not why we're here today okay let's keep let's keep
[00:40:02]  on going i just i'm hoping that you start seeing why mapping these concepts back and forth is actually really challenging um because like there's there's one more level of challenge that
[00:40:20]  we're not actually seeing here and that's we've only been focusing on why it's hard from the react side but it's also a little bit hard from the reactive
[00:40:33]  side of things too because react isn't aware of what changed necessarily there's this dependency ray here but like if i if i went in here in my counter or whatever and created
[00:40:49]  some random hook that was like something equals create random and you know it could it could take a signal it could take count or something okay the react model doesn't really care
[00:41:13]  what this is it'll just rerun it anyways it'll assume that there's a memo in it or something else it'll just rerun it anyways anyway but when you
[00:41:21]  have a reactive model that runs once how do i know that this something is reactive or not or should like be something listened to or not and you can tell this at runtime because
[00:41:40]  you'll just access it a certain way right like if you want it to be reactive you can just like put it in here you can go like call it as a function
[00:41:48]  and if it's reactive it's reactive and if not it's not but unless you walk into create random and see what it's doing you don't know what you're getting
[00:42:04]  and this is challenging because you don't get to optimize in this case everything could be reactive if you care about stuff that's outside of your scope outside of your files and
[00:42:19]  the reason i want to point this out is because this is like essentially the svelte dilemma svelte solves it by by being like oh yeah put a dollar sign
[00:42:28]  on that you know like some kind of symbol but like and they use stores but their language can't leave the template the reason svelte knows that a let should be like
[00:42:39]  a signal versus not being a signal is that it can look in the template and see that you you mutate it and you listen to it if you if you both put
[00:42:47]  it somewhere that it needs to be listened and it's reactive and you mutate it somewhere svelte can go i'm looking at this one file i know it's reactive
[00:42:56]  but if you're but svelte doesn't really have composition like not like reactor solid does and that composition largely happens at runtime so in addition to the challenges of trying
[00:43:17]  to map a memoization run multiple kind of mentality to things you have to account for the fact that there's only a couple ways to know if this is reactive one way
[00:43:32]  is to parse through all the files and this is what marco 6 compiler is doing and actually dominic ganaway uh creative inferno has been working on a new framework
[00:43:40]  that does that too he walks through all the files to find the reactivity which is kind of expensive and it's i mean it's it's an interesting idea but it's
[00:43:49]  also one that i'm like it might be intrusive the more the other place that might be interesting is types if we could rely on something like typescript and the
[00:44:04]  compiler could be like oh this returns a signal or an accessor and then you could inform like okay treat this as reactive and i think that is probably a more interesting future if
[00:44:26]  we can get there but the problem is typescript isn't up to the task i keep on asking people if i can rely on typescript and like no typescript sometimes
[00:44:32]  forget stuff like it's just like like there's there's gaps here like and the problem with the compiler is if there are gaps well it doesn't work like the abstraction leaks
[00:44:45]  the one of the beautiful things about svelte is it is so they've done an incredible job of not being leaky they do that by by setting the expectations really low
[00:44:54]  like in terms of like the keep like being really limited in what you can do but that's why it's so clean and why it's so beautiful you look at s
[00:45:01] velte code and you're just like like it there's none of this complexity piece because they just don't have it and with a compiler often all or nothing decisions are really
[00:45:15]  easy ones like if you know you can do it a hundred percent if you don't know augmentation puts you in a zone where you have to be aware of the compiler
[00:45:22]  where you have to be like oh you know do because this is compiled like let's put a dollar sign on it right and i use felt as an example with your stores but
[00:45:34]  um i can use quick as an example i can use the server functions and solid start as an example where there it's the it's not perfect you have to be aware
[00:45:44]  of it as a developer it's a tool for you to use but now you've basically extended the language and again lots of trade-offs here okay could you more generally s
[00:45:57] velte's react model with a babel plugin if you analyzed every single file that's the problem it's not easy you need cross mod module analysis to generalize s
[00:46:12] velte's process you have to be able you have to read like all the code and across like all the files and import them all and like look through them all to be
[00:46:20]  able to generalize svelte's approach you you don't get to do it on a profile basis all right how's twitch chat going sorry i just want to catch up
[00:46:30]  in case i missed anything yeah what we got we got valhalar um scribe with prime thank you very much um also adriui gifted um a tier one sub
[00:46:41]  thank you very much again uh apparently there's a hype train so i guess that's what happens when a couple people sub in short notice so again thank you so much for sub
[00:46:51] bing um i probably should take this moment to like if anyone's on youtube uh click the like button it helps um but a lot of you on twitch today so good stuff
[00:47:01]  it's actually about 50 50 youtube still winning which is more is my typical thing okay okay so i'm going to try and keep um i'm going to try and keep uh
[00:47:14]  on topic for this i know there's some great questions coming through chat people asking about like deep dive on the jsx compilation works it isn't there's a few interesting parts
[00:47:24]  but actually isn't that complicated much more complicated than that like 10 minute talk that we have on our website or that like it it is going to like look here stuff if
[00:47:33]  you want to talk about ssr it's a little bit more interesting but that's why in svelte you have to shift gears and write stores in javascript
[00:47:41]  so yes exactly and it's interesting if you want anything reusable in svelte you basically have to write in javascript not svelte script so it's like it
[00:47:48] 's it's a good they they create a good escape hatch like it's very clean boundaries i like that um i think the quality of your escape hatches speaks a lot
[00:47:58]  to the perceived complexity if you do good with your escape hats people and it makes sense in their mental model people are like will be okay with it it's trickier when the
[00:48:06]  escape hatches get further from what the model is i think this is why people have such a hard time with use effect it like shows what's under the hood and it
[00:48:14]  doesn't always align with the way people think react works okay okay so you you can see that the the problems aren't just on react side it's on both sides but this
[00:48:32]  makes like there's code mod projects um we're looking at using ai we have a solid code mods repo we i've been talking to like yeah like you know there's
[00:48:42]  people trying to feed uh react code into chat gpt and see if it can output salt uh solid code like this is probably my most interested area in using ai and pattern matching
[00:48:54]  and seeing if we can can make something decent here um because like i don't know this is if the thing is you as a human can migrate solid code pretty easily because
[00:49:09]  the 80 case the jsx in react and migrating to solid is like dirt simple you just click copy paste out a couple function calls remove class name down to class in a
[00:49:19]  few places and you're generally good to go yeah all the complexity comes when you get to the logic and for simple components it's still pretty easy you know get rid of
[00:49:27]  the destructuring just kind of move the stuff down and then change some uh state to signals and your app will probably run it might not run optimally but it'll run
[00:49:36]  but the thing is like there's little details here around behaviors like you might delete a bunch of refs and stuff but like like once you get past a very basic level the
[00:49:48]  human you might be able to look and go yeah okay i don't need this simple simple cut it down and reduce the code and then get to solid code from react but
[00:49:55]  for a compiler i think like that would be much harder task because they can't tell the like they can't see what the business logic is by looking at the code they can
[00:50:06]  only look at structural rules okay so let's let's keep this this rolling honestly there's a lot of people in the stream today i don't know i don't know
[00:50:27]  what happened i didn't get raided or anything right this is just people coming in hanging out yeah not that i know i suck at twitch fyi sorry everyone okay let
[00:50:38] 's keep going so you can start seeing why compilation is hard and even just like runtime compat we're not going to just like you know how preact has like compat and they
[00:50:49] 've been adding signals but that's because they start from that preacting and i'm not going to go over that again i had a stream uh a week or two a couple
[00:50:57]  weeks ago or maybe a month ago called reactivity and rendering it was right before christmas i think and i go over the difference between trying to jam uh a reactive system
[00:51:07]  on top of a v-dome that's not what we're talking about today that's i mean that is an optional we'll talk about it tertiary but i'm
[00:51:16]  not going to like get as in depth as much today to show the difference between preact signals and solid signals yeah this is interesting yeah because again this is about the functional
[00:51:31]  thing right the the the the tricky part is that that control like it's funny i feel the opposite i feel like i have no control in react because they're doing they're
[00:51:43]  just going to re-render anything but there's a certain control you feel when you just let go right when you're just like screw it i don't care about re
[00:51:50] -rendering i don't care about performance i don't i just just let go it doesn't matter just write the stuff and i in in my mental model this will create
[00:52:02]  the next thing and i'll just you know every time it reruns it'll just output that pure function you know it kind of fits into this thing the problem is reality doesn
[00:52:11] 't let us do it otherwise hooks wouldn't exist um and that's that's why this is of interest i think i have a very like from a purist standpoint i
[00:52:22]  think there's a i think that both approaches have clear benefits and uh like have clear reasoning to it and like you when people talk about what the future should be i was asked
[00:52:35]  you know do you think these things are converging diverging stuff it's like you could see in your head sort of like in the ideal future like maybe from a dx
[00:52:44]  standpoint if we could get that kind of what do you call it uh immediate mode kind of like mentality or whatever like this maybe it's not even immediate mode but like pure re
[00:52:55] -render mentality that kind of simplification could be the simplest dx mental model for someone but the the but on the other hand you always know in your head that if there
[00:53:07] 's a uh a mode like that the the other side the retain mode the thing where you update or have that control like solid will always be more performant always but like we
[00:53:16]  don't all need the right assembly like so like there there is a tension there but the problem is the reality has us much more somewhere in the middle it's not that clean
[00:53:27]  uh is is the best way to put it and i think i think that's what makes this kind of interesting um i mean i don't attend it here too much but
[00:53:47]  fresh skipping the build step is kind of a lie um um technically you could just use react that way in dino right now and do what fresh does but like it's
[00:54:00]  not really skipping a build step it's just hiding it from you um because the browser doesn't understand jsx um anyway okay so let's okay let's keep on going
[00:54:22]  here okay so not to get too out there okay so we're we've talked about the primitives we talked about the top-down rendering we talked about the different model we
[00:54:31]  talked about the compilers being hard um so what can we do right like what what are our options here it looks like compat is not an option um i knew this
[00:54:41]  pretty early on i mean i like the type of compat options that i did think about were like what if we just had a micro vdom that we injected inside a solid for
[00:54:50]  these components and then like wrap them with like with vdom or something like basically what if we ship solid and preact and like figured out how to put them together and then
[00:54:59]  let the react components be preact but then i'm like i mean preact isn't react like we already know compat story there it's good but it's not perfect so
[00:55:12]  like what am i doing right so this this this kind of led me to like a different idea or model and i i i i i was like okay well let's let
[00:55:36] 's look at state management maybe this is the the gateway right i don't don't don't get me wrong i did i did try a really basic example of putting solid
[00:55:46]  components in react um and vice versa and we'll get to that solution later on in the stream uh like back three years ago i created like a solidify and a react
[00:55:56] ify thing but i was just like whatever so what my my my next really big stab at this was something called react solid state okay um and react solid state was this idea
[00:56:15]  that we could keep using react and we could just write our code like solid um i got a couple code examples here i don't know if it's it's that interesting but
[00:56:30]  you what you see here is we're returning a function around the div here which is important so our our components have a hawk that wrap them and then we return a
[00:56:41]  function for the jsx and this is actually a lot like how jsx looks like in view if you've ever used jsx in view it's it returns a function and
[00:56:49]  the reason is the top half never reruns again it's like a setup function and only the jsx part runs again so in a sense you've split your react component
[00:57:01]  in half um and i think that's kind of like an interesting approach um i did not come up with this approach this is actually mob x um and early days with mob x
[00:57:16]  we you know they did class components with this kind of mechanism and this was kind of like the mob x hooks port since then i think they've taken different approaches or state
[00:57:24]  managements with signals have taken a different tact more like jyotai and whatnot and i'll talk about that in a minute as well but there is the benefit of this
[00:57:35]  idea of adding these extra wrappers is that from a development experience perspective it feels like solid and again when you pass signals through to your child components it's not re-
[00:57:50] rendering the it's not re-rendering any components that don't depend on that state so you can have local state like you can create some signals pass it through to
[00:58:01]  a child and then if you set that state you know maybe it's in the parent i call you know set recipient if the child component gets that state and is reading there it
[00:58:09] 's only the child component that re-renders not the parent component it's not like this signal is tied to the welcome component but that's why it has all these
[00:58:21]  hawks because with solid is actually use a react.memo every component has to be wrapped in a react.memo where it auto diffs to see if the inputs
[00:58:32]  change so if you pass signals signals are a static reference they don't change so the component you know it doesn't re-render and you can just internalize it um
[00:58:41]  but the trick to this is you need to know what updates how do you know what updates in this model because you're not there's no use state involved here directly and i
[00:58:53]  want to i want to i want to show you a little bit i'm going to look at the source code in react solid state to kind of explain what's going on here
[00:58:59]  right because before i go there just like so you can understand this example this works like solid if i mean do i do i have a code sandbox for this one ah did
[00:59:11]  i not i like let's see if let's see if i actually have an example here i want to i want to i want to show that like at least demonstrate this for
[00:59:20]  a second what is it react solid no okay looks like i didn't okay i mean we could just make this example if we really wanted to but my my point is if
[00:59:34]  you put a console log in inside the the upper half of this function it will only run once and you can nest effects in here this these these reactive primitives in here do
[00:59:50]  not follow the hook rules they literally like you can do you put create effect inside create effect or put them in an if statement or whatever the hell you want there's no
[01:00:01]  hook rules for for using um them like this actually behaves on the surface like solid what you might not get though is that under the hood this vdom is still has to do
[01:00:18]  its re-render react still has to control that re-rendering and that's where the challenge is um so let's look at the source code here for a minute
[01:00:27]  i'm gonna dig into this people who knew my stream we get pretty low level here pretty technical here so just like a heads up ahead of time just in case i'm gonna
[01:00:35]  blow up the text a little bit so we can see it a little bit better but there's a lot of code here this is just showing like some types and whatever whatever
[01:00:44]  but this one's this one's a this is this is this is our little secret use force update what is use force update this is this is use state i just put an
[01:00:54]  r because i didn't want to confuse it with solid state but this is use state and then inside um a use callback call just update a counter this is basically wherever this
[01:01:05]  use force call first update is it forces the react component to rerun i just needed like if you remember um back in class component days you could just be like force update
[01:01:14]  you could just like tell the component to rerun that doesn't exist anymore um so you just create a use state that you flicker but the reason i wanted to show this
[01:01:25]  whole thing is this little sucker here which is called um use observer and um this is this is the thing that basically does what we want um i with solid that i showed
[01:01:44]  you before that hawk all it does is do a react memo around your component see calls the component and then takes the return result which is that function wrapping the jsx and
[01:01:55]  wraps it in use observer but the the real magic here is that for every one of those jsx blocks that we turn components we make a use force update so we have a
[01:02:07]  way of flickering the component function we create a use ref here so we can track our local state for our like setup function because we only really want to run it once
[01:02:21]  so if it's not there we create a solid root and in that solid root we just get our dispose method which we'll need to eventually like unmount solid uh and
[01:02:33]  then we get a reaction that whenever anything changes we call force update now you you know most people don't know what this reaction api is um i get like criticism people uh
[01:02:45]  you know who want to reduce api service assault and they're like why do you have this create reaction thing well it's for this exact reason and i might have to
[01:02:56]  draw this to to show show what the problem is but essentially if you've used a reactive system um and let's see here um how do i want to show this maybe
[01:03:10]  it's easier to show this with code actually okay um if you use a reactive system you know and you you have a you know like a create effect or something right let's
[01:03:22]  let's let's do this with code all right and i'm gonna move this down here just doesn't really matter if i make a crate effect all right and it listens
[01:03:41]  to some stuff okay let's say it listens to our count right and let's pretend it renders something like we want to render our div okay like so like i mean
[01:03:57]  this is not particularly interesting all this is doing is essentially creating a div every time count changes with the text count in it that's that's all this effect is doing um but
[01:04:09]  what i'm getting at here is if you pretend this is like your react component like we're essentially wrapping a wrap the the jsx return from react in a crate effect so
[01:04:23]  that we we can track it we hit a little bit of a problem because then solid is the one calling the crate effect essentially like count changes we recall the function count changes
[01:04:45]  you know we recall the function the problem is we need react to call the function in its render loop but we still need to know that this view that this view tracks this
[01:04:56]  so create effect doesn't really work for us because we don't want to re-render we want react to re-render so create reaction is this funny api where essentially
[01:05:08]  this this use effect stories is to clean up i didn't get to there when we when react renders this it calls this it calls this track function and what track does
[01:05:21]  is it it's the uh thing that actually keeps track of the dependencies so this rendering function here that you see here is actually rendering that jsx from react okay it's getting
[01:05:36]  the result returning it to react so react can render it but when the what this is why we use a reaction because when anything inside this rendering function updates the reaction calls the
[01:05:53]  reaction form and calls force update which causes react to re-render it does not rerun an effect function it's basically saying when anything changes here call this function and then
[01:06:07]  it's it's not tracking anymore unlike create effect which keeps track of dependencies every run this has decoupled the ability to track some state and run the function what ends up
[01:06:21]  happening is when react re-renders again it just enters this loop again and then tracks it while it's rendering but we've decoupled the reaction from the tracking and
[01:06:31]  this is important for reactive libraries so i created this primitive without this primitive and i i don't think you can do this in user space i can show you i like we
[01:06:43]  can we can go back in time here because i did not have this primitive a couple years ago when i first made this repo and i want just to appreciate you know for a
[01:06:51]  second how weird the like that separation is for reactive system um where's the easiest way can i get to the fully commit history it's like sorry it's github
[01:07:04]  it's been a while since i've like looked um how do i find commits on github the like the whole history is it to do to do to do oh
[01:07:20]  i might not even i might not even be able to find this because i i'm i moved the repo haha okay i will tell you this audience it involved using lots of ref
[01:07:35] s because and even in solid side because we'd have to basically keep track of if it was on a solid render pass or on a react render pass and depending on which
[01:07:50]  pass it was on it would fork the logic and one way call force update and on the other way um track it it was it was the most ugly tricky code that i probably
[01:08:01]  ever wrote to get this thing to get this thing to work and create reaction just conceptually just simplify it but again i'm just trying to show how different the model is
[01:08:12]  the problem with this approach is support react 18 um basically reacts 18 has changed to make doing stuff like this much harder because they want to control the render more and i'm
[01:08:31]  not the only one who's seen this we've been we've used sync external store um there's a whole thread on this in mobx um if you are interested to see
[01:08:42]  how mobx has been fighting through react 18 and figuring out how to make it work you can read this very long thread about about it but essentially this is as you should be
[01:08:54]  able to see watching this so far it's kind of incongruent with how react wants to do it i think they just december 18th the effort is here
[01:09:02]  should be more or less complete yes so they got there december 18 2022 which is which is good um that you know they've been working through this for the last three years
[01:09:12]  um this this is just the more react concurrency works and stuff and the stuff can re-render arbitrarily depending on the way that we set up those memo eyes and
[01:09:27]  set up those functions is hard to uh basically depend on one of the things that i learned is that use memo isn't guaranteed not to run definitely there's cases where it might
[01:09:39]  rerun so you can't like you can't just depend on it like there's certain places you can't depend on it for for like beyond optimization you have to treat
[01:09:48]  as an optimization feature not as like a like a guarantee in any case this approach you people can use this today it's fine but it's kind of clunky like i don
[01:10:06] 't know i mean maybe chat can tell me i don't know if this is something you'd really want to do do you want to take your react app and then be
[01:10:14]  able to author it in a solid way by putting a bunch of these wrappers on the solution is all right as i said but it's like i realized that this might be
[01:10:27]  a bigger ask because you actually have to move your mentality into solid's mental model maybe you could attack this in pieces but like use the the the big jump has already happened
[01:10:41]  by this point yes this is the mob x way essentially okay so and the problem is mixing and matching sometimes becomes a challenge here too right the reason the reason this way is attractive
[01:11:00]  though um is this let's pretend we have some kind of tree right okay um and this tree i'll make a few of these it you know has data in it and
[01:11:15]  it's nested so we can i'm gonna draw some arrows around here we can we can do here like this could be a list of users and then you know here's
[01:11:29]  each user and then each user has some kind of an address or something we essentially have a tree of data and then over here beside it we have a similar but maybe different
[01:11:42]  tree of components right and sometimes these line up sometimes they don't okay like sometimes like the data is specifically for the component other times it's not like this is a loose
[01:12:01]  this is a loose connectivity and the way we put these two pieces together actually has a pretty profound impact um on like the mental model and how things update so like there's
[01:12:26]  only a couple options you have here uh right like if if your local state and the way react works as we mentioned before is you have components so if we put let's
[01:12:40]  say the state is all owned by this component here okay so the state is in here the whole tree and then we pass pieces of it down to its children regardless of where of
[01:12:54]  what piece of this puzzle sets that state or reads that state this component is the thing that will re-render and it will re-render its children and so on you
[01:13:05]  can react memo it if you want to guard and it'll check the specific props but the the default behavior here is that this whole thing re-rends now a smarter thing
[01:13:20]  you can do and it's come up more often hooks is something like what you know maybe like a jotai or um even even redux does this to a degree with
[01:13:30]  its selectors and stuff um is that you have some means to know which part of the data the component um depends on so maybe this one cares about this part of the data
[01:13:45]  and this one cares about this part and now if you just update this it's only needs to rerun this component instead of rerunning the whole tree but the way this
[01:13:58]  is done is by keeping the state on the outside and basically linking each component to the pieces that it needs to render right um like you've seen this like the way context like
[01:14:17]  the what is it is it selectors like in redux like you used to use a hawk for this where you tie it but if you look at most of people
[01:14:24]  uh commanders or whatever is libraries uh like uh i don't know jotai or voltio or any any of these kind of ones the key is like they make these atoms that
[01:14:35]  are outside of the of the experience and then you say use atom or you know use what's there's another one you're basically saying these components rely on this part of
[01:14:45]  the data the thing is yeah zastan does it or zeustan sorry like they all kind of do this the the the challenges with this is that data is not flat
[01:15:07]  like if these this is related data it it's not necessarily flat like sure you can know that this component because it's under this user id you know you need the address for
[01:15:18]  user id one and you can connect to that and only if that updates do you rerun that component but like unless you extract it all and do it piecewise you don
[01:15:30] 't get this experience and this is what like modern like why people are pretty stoked about uh kind of like these modern state libraries is you get used to extracting stuff out here and
[01:15:40]  doing this kind of link up the thing is like react itself um you know is passing props and can maintain its own state but then you like get the re-render thing because
[01:15:53]  like if this changes up here then you have to re-render the whole thing what the what the view and mob x do that differ from this is without making this direct
[01:16:02]  linkage they create like i'm going to use a different color here they create like um boundaries around the different components and these boundaries only track like what it needs and you don
[01:16:30] 't have to pull it from the outside you can literally pass it down as props and they they will they will know how to only track what's within the zone this is what
[01:16:40]  react solid state does in a sense pre-act signals does this too but only if you pass the signal all the way directly to the dom it'll make us like its
[01:16:52]  own little separate um thing if you don't pass it straight to the dom pre-act doesn't track it but that's why it has such a minimal api it doesn
[01:17:02] 't have those wrappers so you're kind of stuck behind behind having wrappers which kind of give you the same effect as using jotai or zoo stand or valtio or
[01:17:11]  whatever or um you you have to like use these wrappers sorry to like pass it through the props essentially and get the same effect so like on both sides you you get
[01:17:27]  the like the specific component re-running as you need but you know that's where the difference is react has been moving more and more towards like not wanting you to put
[01:17:39]  these wrappers in so that's kind of why i feel like stuff like jotai is more aligned because then yeah you make the links directly um but this is still kind of
[01:17:50]  onerous on the developer i mean some stuff like i think valtio does proxy tracking for it to make that decision but like that only really works at the component like
[01:18:02]  you're still use like you basically have to tie that state update to the component it's it's that's the entry point so in a sense it's a good compromise but
[01:18:16]  it's still like not quite even where that permissiveness of view or mob x is right like if you have nested data that you you're passing through a list you
[01:18:26]  have to kind of like always do the lookup and there's apis for that don't get me wrong i forget what they're called in this i've i've
[01:18:32]  used recoil where you had like selector families and stuff where you're able to like map um more nested data things but i i the reason i'm i want to show
[01:18:44]  this is because you're kind of responsible for this mapping and in a sense felt stores are also kind of in this category of conversation right like as like you tell by putting
[01:19:03]  a dollar sign on it you're like if this store changes this component needs to re-render they don't quite have the selector thing as much but like there's this
[01:19:13]  direct link between the components that update and and the state which is something that the react solid state mob x view approach actually doesn't do and is a bit more permissive
[01:19:24]  on but like these differ from solid as you guys all know because in solid you can just put this in like this and then that just happens automatically we don't have to
[01:19:36]  link it directly we can keep it on the outside we can the inside we don't need any wrappers it it it just everything is fine-grained so like this
[01:19:49]  is this is sort of like the difference of zones on state management when you kind of try and compare the the the three solutions like and this is where there's like some tension
[01:19:58]  right because you could use solid signals the way you use jotai right and i think that's the way things are moving these days like if you have a reactive library in react
[01:20:11]  instead of trying to hijack the experience instead of trying to like make it feel like view or solid or whatever instead you know let make a well get back to our drawing
[01:20:25]  make like a i don't know what do you call it i use use store or like use solid store and then read inside that store the properties you want to get and uh
[01:20:36]  sorry i'm like it's like let go okay um the the properties you want to get inside each component you know but there's a slight problem with this and i want
[01:20:52]  to i want to talk about this for a moment because with the the the the like react solid state approach you you you it's where you listen so if you if you
[01:21:07]  need to care about the street name of an address on a user on user one like you access that street name in the dom or in the jsx rather and then it goes
[01:21:16]  okay i need to track that for this component that accesses the street name but if you use like this use store type hook where you're creating a selector they want to
[01:21:27]  know you might say you store on this user for that component like down here you might say or this address you say use store address you go like store dot user one dot
[01:21:39]  address but the problem with that is in a reactive system if the street name changes it doesn't notify the address okay and to understand this i got to talk a bit about the
[01:21:55]  difference between mutable and immutable changes okay let's let's let's pull let's let's make our data structure more concrete now okay right let's let's let
[01:22:08] 's let's assume that we have um users and inside users we have multiple users sorry so this is an array this is this is user zero okay i'll make a
[01:22:43]  couple other just for demonstration purposes we'll have user one and user two okay i'm gonna go how many levels deep do i want to go i want to go i'll do
[01:22:56]  a few levels deep just to really drive this home but let's also give each of these users an address okay all right copied one too many and let's put a street
[01:23:23]  name or something or street number for all of them okay i'll just copy one more of these no let's try that again actually i should already my luck right like screwed
[01:23:42]  myself up okay okay let's go make that um street number number okay all right everyone's still with me here someone's asking with react i mean if you wrote your whole
[01:24:11]  app that way yes okay okay and now i get to draw a bunch of arrows here just maybe the arrows aren't necessary but i feel like they they make this look more
[01:24:30]  sense but what i'm trying to show is a nested data structure okay something you might have in a user store okay and i'm skipping a bunch of fields but i just
[01:24:39]  want to show you to show you to show this now the crux of the problem is in immutability and immutable systems the way you watch is reversed okay right
[01:24:54]  like how should i put it like i i'm going to start with the thing a deep thing okay so in an immutable system if you change the street name or street
[01:25:11]  number on user zero you changed it okay tada we changed it okay and the reason that anything knows to update is that you track a path essentially so you might you're
[01:25:36]  you know before we do this i'm going to copy this so that i can do the exact same exercise on immutable and put them next to each other okay this is being
[01:25:47]  smart thinking ahead okay cool all right actually you know what let's move these all away from where i was before so we got some more room to work with okay okay maybe
[01:26:01]  even further okay so where was i we're changing street name that's where i was all right but what realistically what's going to happen on a tracking perspective is you're going
[01:26:13]  to walk along the path and you're going to be like okay i'm my users so i'm going to have like a four component or something in solid's case and
[01:26:22]  i'm going to track each iteration at one level and then inside the user component that's in each for loop i'm going to go user dot address and then i'm
[01:26:37]  going to go address dot street name in the final component so the tracking has broken up into blocks of of like effects nested effects context right so like these are these accesses
[01:26:55]  are happening kind of in their own zone and you only need to notify the nearest one so if you update street number it goes oh yeah on this address street number updated okay
[01:27:05]  address dot street number no problem then this one place in the dom that was listening to street number you know updates the number if you update address well it'll still know to re
[01:27:16] -render not re-render but it'll still go okay address updated um in this case it will look maybe because you have address dot street number address dot um um uh
[01:27:29]  street name uh add address dot state whatever it will it will look at all three of those realize only street number change and update that but it will do the extra work of looking
[01:27:44]  at all three of those because it's kind of like in that zone if you change the address in a for loop in solid because they're keyed we'll actually re-
[01:27:50] render the whole thing and it won't re-render it won't like re it won't look at the other users but it will just go okay this is this is
[01:27:57]  a new user um let's replace this section and finally if you like replace the whole list like or maybe sort the list is a better example it'll do that key check and
[01:28:09]  if there's new things it'll create them otherwise it'll just move these things around but you know in the don't but my my point is that like updating street number
[01:28:18]  does not cause the these things above it to rerun but it tracks all the way down so that if anything along that path changes it does update you you know for sure that
[01:28:30]  if anything along this path up it has changes because of the chain of reactivity it will update you the challenge as i said is that um and for this reason sorry is
[01:28:42]  you want to update as close as possible to the the to the leafs because if you update that street number suddenly like you don't have to rerun the for loop you
[01:28:53]  don't have to diff the list you don't have to look at the the other fields on the address field you literally know that exactly that changed so somewhere in your ui
[01:29:01]  you're like street someone changed an input field and they're like street number equals four instead of five the we can do a pinpoint update because of that this is this is
[01:29:13]  what stores are in solid if you're wondering this is a like i'm sure you can you don't need to use a store or proxy but this is what it is right
[01:29:19]  now what happens when you update street number in an immutable system well you update that and then well actually what you have to do is you clone this clone this and clone this
[01:29:44]  okay so in this system these references don't change only the thing that sets change so this whole time this is static nothing changes because nothing changes the thing that only listens to
[01:30:01]  this portion doesn't update when the deep nested thing upstate this is why this is optimal but in uh in an immutable system you clone the whole thing and then what
[01:30:12]  happens is you don't actually know what updated okay so the process is and react does this or the selectors you use in various libraries do this is it starts back at
[01:30:30]  users and goes okay now i'm rendering users okay um i got to user one oh this is different reference i need to continue here but if it gets to user one or so
[01:30:41]  user zero if it gets to user one or user two it goes oh i can see that those haven't changed so i'm going to skip them and then gets to user one
[01:30:48]  and then it's like okay um gets to address and goes okay this i need to go deeper it will see some other fields on address perhaps or other fields on user and it
[01:30:57] 'll know not to go to them but it will check against them they go have you changed have you changed have you changed have you changed have you changed have you changed have you
[01:31:03]  changed and then it'll finally get to street number and goes okay yeah yeah you've you've changed as well but it doesn't know that street number is special like from its
[01:31:00]  perspective users user zero address street number i colored this differently but from its perspective this whole tree has like this whole branch has changed so it goes through and it diffs it
[01:31:21]  so you do a change you know that you need to change in a specific part you write a bunch of clones like spread operators to basically um structured clone it you lose kind of
[01:31:33]  you don't lose that information but it's encoded in the tree structure that then gets diffed so when the street number changes you actually re reconcile the whole list basically
[01:31:44]  check you know if it's been sorted check if any of the properties on here change check if anything else is on here changed so this this is this is what happens when you
[01:31:54]  nest data and stuff like react memo isn't going to save you here if you nest because address has changed user zero has changed like this this will trigger the memo to like
[01:32:11]  rerun the components because it has to right like that this is this is what it depends on this is what pete hunt was getting at was they didn't care about this
[01:32:20]  much but now that you might be reading street number in a dependency array in your hook or something like this matters because here's the problem if we're like a reactive system
[01:32:33]  tracks in these ranges it doesn't know if someone goes hey i'm listening to user zero it has no clue if street name changes whereas if in a mutual system you go i
[01:32:48] 'm listening to user zero um it knows that street name has changed it just it just it just actually doesn't it doesn't it goes i'm changed i have no clue
[01:32:58]  what changed go diff me but like it it it knows that it has changed where this doesn't know it has changed and this is a huge difference because if you're going to
[01:33:07]  have that system over here where you're drilling in in parts and this part is based on user zero it's never gonna know to re-render this child if street number
[01:33:23]  changes in a reactive system where in an immutable system it will because it itself has been marked as changed does that does that make sense immutable is better right no that's
[01:33:37]  that's not that's not the point that i'm getting at here it's it's it's actually kind of it's tricky in a sense immutable is worse because
[01:33:47]  in this case for reacts thing for doing this very specific structure that they've set up it is better because they know that the stuff has changed right like but the problem is it
[01:33:59] 's really inefficient because you probably knew that you were changing the street number to user zero and instead of just going oh yeah you changed street number to user zero update that one
[01:34:09]  place in the dom done you went you do that whole diffing thing that i just mentioned go through all the users check the the list position do the reconciliation algorithm see which ones
[01:34:18]  are new check all the different fields on them check all the different address fields on them check uh you know and you do this whole process because you kind of lost the information of
[01:34:30]  what changed right the benefit of immutability is the contract it's like saying hey if i give you this data you can't change it unless i describe to you you
[01:34:46]  like give you a means to change it essentially and i'll pass you the new data to you like you don't get to change it i get to tell you how you can
[01:34:54]  tell me to change it and this means that accidental like hey i just changed this thing down here guys i didn't mean to i because the problem with nested data is
[01:35:03]  it doesn't look like users zero address street number you'll get down some level and you'll you'll end up with like like props dot street number or something like it will
[01:35:12]  be detached from the data like when you feed it through this tree at some point you're not going to see the whole tree you'll just use props dot street number or something
[01:35:21]  and if if you had like fully mutable data like like uh proxies that are read right like you you could just be like oh yeah you know like props dot
[01:35:29]  street number might not be the best example because props usually are unidirectional but like let's say it was props dot address and you might just go yeah yeah it's
[01:35:37]  no problem props to address that street name number equals this suddenly you are doing who knows what kind of other side effects depending on who depends on that data and immutability
[01:35:50]  you let you be confident that like when you go like hey function some state on the like like like if you go sorry let state function state you know that this state is
[01:36:07]  the same state that was above like like they they couldn't mess with you if like you control this thing and in a sense svelte's component local approach you know like
[01:36:21]  the fact that they can't pass reactivity around other than like the very explicit two-way binding syntax gives them this almost kind of immutability promise but they also don
[01:36:30] 't have nested reactivity at all so like like the all they can do is essentially this that's what i was kind of getting at like view mob x solid really
[01:36:39]  benefit from the fact that you can like change one data field and only do that work react svelte um most you know other virtual dom libraries like this is like what you
[01:36:52] 're kind of in for so immutable is better for guarantees but definitely not better for performance and this is why i mean solids stores don't just pass around mutable references like
[01:37:08]  i separated stores from set stores because like the guarantees of immutability are really really good but the performance is not okay everyone's still alive with me so far i the
[01:37:35]  reason i was bringing this up is because i tenor popped in the chat there you saw there yeah me really will always be faster it's because we we've been hitting
[01:37:43]  this kind of thing because we we could we picture you you're working on some like kind of like data store situation with some proxies and you're like having a good
[01:37:51]  time and you and you're like holy crap this is so cool you can like literally have a giant table and only update like the one point in it when you update some data
[01:37:59]  did you know that and you'd grab solid or view and you're like that's pretty sweet and what and the reason view still benefits from this it doesn't get solids
[01:38:09]  granularity of only updating the one dom element but because it works the same way as react solid state like this essentially you get that you do get the benefit of uh i should
[01:38:24]  worry reading it where you read it when you pass through the props like it has those wrappers underneath the hood so while it's a component view that re-renders
[01:38:33]  in view um when you have the nested data it it doesn't have to go necessarily through all the separate reconciliation i just talked about if it's in a separate component if
[01:38:46]  you put it like it all in the same component unless you use the vmemo thing that i was talking about here um which is exactly what was hitting view on this js
[01:38:55]  framework benchmark this is just a giant table um before they added this they were like in pre pre-act performance range even slightly worse i think and they and they leapf
[01:39:08] rog svelte because of this thing that's how big of a difference on like this kind of benchmark this this that memoization made um but like the the i'm
[01:39:20]  tangenting a tiny bit but the reason view could have always just separated into a separate component and get the benefit in that certain category without the vmemo directive but the problem
[01:39:31]  is because if you remember when i drew that there's that little purple box around each component um when you try and wrap the way that reacts all state or view does it
[01:39:42]  you're trading update for uh for creation costs so like if you broke into separate component you'd be you'd be creating more of those purple wrappers around each element which is
[01:39:52]  way more expensive um so in the case of averaging it on the benchmark it was actually better to not make those wrappers and suffer the update performance and finally with view 3.
[01:40:03] 2 they were able to get both types of performance if you annotated it but my obviously my point here is with solid it just works and you don't even have to
[01:40:11]  annotate it but like i i i want to show though that the there is like this challenge because if you if if your component when you link it directly like this listens to
[01:40:25]  user or listens to address it's not going to know about street number and the the naive way of approaching this was something me and tenor playing with was simply okay well
[01:40:34]  if if the user decides that they're listening to address we're just going to in effect walk through all the properties of address and create all the subscriptions um when we have react
[01:40:44]  like when you have viewer solid you get optimal updates at least to their level of granularity but when you have react we're like yeah whatever but the problem is the performance of
[01:40:54]  that is actually kind of crappy because now you're creating a bunch of subscriptions like especially if you like listen really low like you're like oh i want to listen to this
[01:41:04]  user and this you end up walking through like all the user properties all the address like properties you know all of this stuff to create subscriptions that you might not even use and the
[01:41:16]  difference is instead of doing it once on the propagation time you do it unfortunately at every single point of subscription so this is one of the challenges like we hit and i want to
[01:41:27]  point this out here because even if you can take that optimal reactive approach applying it to react is actually really hard because it's actually probably less optimal for react on the surface
[01:41:40]  than using their immutable approach which you know by definition is inefficient right like like here you think you're like there must be a way that we can get that performance because
[01:41:58]  we know that the ceiling is so high here you're like you're opting into diffing and there's nothing you can do about it so if you've been trying to
[01:42:07]  read the spice behind some of Tanner's recent tweets it's like really realizing how pain in the ass the fact that everything expects immutability is um in the ecosystem because
[01:42:19]  it's like these are kind of incompatible models okay so the one is like clearly more optimal and you can get a lot of the same guarantees of immutability with
[01:42:33]  the right interface like the way we split the reads and writes and keep read write segregation in solid but what do you do about this and this is not limited to what Tanner
[01:42:43] 's doing xstate um redux all the solid integrations for those what they do is they take this data they keep it immutable and then we we have something called reconcile
[01:42:55]  in our stores which diff so we can take this and output this so we add a diffing layer so you can opt into diffing and this reconcile tool is incredibly helpful
[01:43:04]  because no matter where the data is coming from immutable or whatever we can give you like a decent approximation of fine-grained updates but you're opting into diffing
[01:43:15]  so that that's what we do for redox that's what we do for xstate um but you know in your head you're like like if you if you've
[01:43:22]  got xstate and you're changing from state a to state b and you know that it means changing this bit of data in your like context you're like you know what data
[01:43:31]  you're changing why would you clone everything forget that and then force a diff to get that information back like it seems nonsensical from the perspective of performance to just lose
[01:43:43]  all that information just to have to diff to find it again and the kind of react ecosystem kind of is pushing us to basically be inefficient by default okay so yes yes mostly
[01:44:02]  and it depends i think this i think i think that like in general yes and i have shown like i created reconcile not just for redux i wanted to win at those
[01:44:16]  really annoying benchmarks you know the ones i'm talking about the snapshots or react like really naively just like grabs like giant data from the server and just spams the whole
[01:44:25]  page over and over again dbmon is an example of that um i've shown this on stream before but like ryan florence did a talk where he showed react
[01:44:33]  like killing a lot of the competition at the time which is like ember and angular which a lot of like some reactive systems at the time and you know angular wasn't
[01:44:40]  angular was kind of just like a big thing but ember's reactivity was pretty bad and if you if you find dbmon today you know js paint refresh benchmark uh
[01:44:52]  what was it called um tried dbmon is it i can never remember the name of the reboot js repaints perfs if you find this today you'll you'll you
[01:45:02]  can it's not hard to see why reactivity got a bad name because people did naive stuff because like how much harder is it to come up with nested reactivity
[01:45:12]  in the age before proxies it was a pain in the ass so what they did with with something like knockout is they just use a single signal and updated the whole
[01:45:21]  thing and because there's no vdom it literally was replacing the dom nodes off the single signal so it was so bad that it i'm going to tell you because you can
[01:45:29] 't see it that i'm getting a 120 here in the bottom corner of my screen on this on this it was so bad that that like using knockout was worse than
[01:45:40]  using vanilla js this is this one's at 50 it's half the speed here like if you just did inner html you'd be faster because of how naive the approaches
[01:45:52]  were to approaching this um i wanted to show that i could outperform the fastest vdom library in this test so that's why i wrote reconcile um just for like uh
[01:46:03]  you know a bit of context and there's different shapes and trees and like and i different libraries have different dipping algorithms we actually use similar diffing algorithms to solid that we use
[01:46:15]  in vdom libraries when you opt into diffing so it's not like these are completely different things but i just wanted to show that to kind of like emphasize like how
[01:46:26]  like what do we got inferno here is coming in about 160 170 like it just kind of emphasize how like data diffing can be you know in certain scenarios where force can
[01:46:44]  be performant where you need it but like i think this is just a terrible benchmark because it's like i don't know you in any case where you could diff you
[01:46:52]  could probably not diff if you were smart about it and obviously stuff like updating data models from a database like we're not going to get crazy and like do incremental patches over the
[01:47:01]  wires but if you're like using web sockets or you're expecting to like spam a stock ticker like this you're not sending all the data like it's inefficient from
[01:47:08]  the network it's inefficient like there's so many places why this is why this is not what you'd want to do um but i want to make sure that like the
[01:47:15]  worst case was still as good as the top vdom libraries so that's why i wrote reconcile but but but but um my that isn't really my point here my point is
[01:47:25]  that like there are solutions they're okay but they're not the best we could do there's there's there's a second issue actually here that we haven't talked about
[01:47:40]  either that i'm going to get to and that second issue has to do sorry i was just catching chat for a minute that second issue has to do with um paths on
[01:48:05]  immutable data now it might be easier to show this in code because yes this this is kind of like the obvious pain but the other pain is that if we had a different
[01:48:15]  data structure let's say where i mean we i mean i don't even have to get that different pretend over here we have a selected user okay like let's just pretend
[01:48:32]  that as part of the same route we have one of these users over here okay um let's go selected okay let's pretend this is part of like in immutable store you
[01:48:52]  generally put like it all together but like it doesn't really matter let's pretend the same route and we go let's call this root okay or store or whatever and let
[01:49:01] 's pretend for our purposes that that selected user is one of the users in this tree so user zero or user one let's say user zero in our case is this user so
[01:49:18]  let's let's let's just do this user zero zero okay now in both types of systems they're going to be sharing a reference right like if you're doing this
[01:49:35]  as an immutable clone you know to put it in you're going to you're going to have like and i should make this up here let's go mutable imm
[01:49:46] utable immutable okay okay the i don't i could copy it over here it's it's not terribly important but my what i'm getting at is in both cases you're
[01:50:00]  going to keep a reference right so what happens in the mutable tree when you update this is this reference is this reference so when someone goes and goes down this path or
[01:50:14]  down this path doesn't matter which path they go and they say update street name because this is the same object instantly street number is updated in both locations okay so because this
[01:50:26]  is this is actually i'm gonna maybe use a dotted line or something this this is actually like a pointer to this if you update this any place that was also listening over here
[01:50:43]  to street number would automatically get updated um because it is the same reference it's the same address object and anywhere you update it it updates thing is on an immutable system
[01:50:58]  path matters not reference right you can see this and if we take this thing again sorry let's see if i can grab part of this see i'm going to take it
[01:51:14]  over here after all and if i do that i actually have to make this um is it purple yeah all right excuse my scala drawing this one's a solid line and then
[01:51:34]  this one is the dotted line so if you have an immutable system and you hit this situation you can't just update this here this will now no longer be referencing the
[01:51:48]  same thing because if you look when you change this this clones this does not okay and this is this is an interesting challenge right so if you actually want to update like a
[01:52:03]  selected user here you would also have to um grab this reference while you're updating to set set it in here so like you both clone this basically what you do is you get
[01:52:17]  the reference to the street number and i mean i don't like do i need do i need to show the code i mean i can show the code if you want to kind
[01:52:25]  of picture how you'd write this right you'd go you'd go like okay let's get the user so you go okay um users zero dot um address right and then
[01:52:38]  you'd be like okay um what i'm going to do is say const next equals equals equals um new object clearly and then we're going to go um slash slash slash
[01:52:54]  users and then we're gonna go uh oh right i can't just do that uh because i have an array i'm not thinking uh what is it um users equals um uh
[01:53:12]  users dot um users dot map item so um i need like more information here like i need the probably like the let's pretend there's a user id or something um maybe
[01:53:33]  being passed in as a prop you know it's it's not that important but it's like essentially like if user item dot id not equal user dot id i mean this
[01:53:59]  isn't even right this is this is the address whatever let's say let's pretend there's a user id that we're getting to because we're updating the address for this
[01:54:11]  user id okay then return item otherwise return a clone of that item uh which is like that and then it has an address on it which is also a clone of item
[01:54:32]  dot address with a new um yeah sorry i didn't do this right this one i this one i actually want to be the user sorry this one i want to be a user
[01:54:49]  okay it doesn't really matter with the new street number on it okay street number let's get this out of our way equals i don't know four and then here we
[01:55:03]  want to add selected which is also that user um right but i can't take i can't take the this this would be the old user i actually need to grab the
[01:55:18]  user here more or less like right if i grab the user here if i find the one that's not the user i can assign it temporarily and then i can add on
[01:55:32]  to select it right this this this this looks like it roughly is what i'm what i'm looking for and i'm going to assume there's a store and the next equals
[01:55:43]  equals this okay this this is this is essentially what you do all day long when you're working in immutable i mean redux makes it easier with reducers people talking about
[01:55:53]  lenses and all these functional program techniques but like essentially um let's see can i format this format no um essentially this is this this is this is what you're doing okay
[01:56:06]  um but that's that's how you write your code to update right um whereas like to write the to update this code in immutable system you would go what store dot users
[01:56:22]  zero dot i mean it depends in a you just need to find one instance of it but you'll store dot users zero dot address dot street num street number equals four okay
[01:56:39]  right so immutable mutable okay okay and this what's awkward about this though is like this is fine like i i don't get me wrong i have no problem with
[01:57:00]  doing immutable changes when it makes sense i don't mind writing this i don't care about it's like little boilerplate things like this that doesn't i know bugs some
[01:57:07]  people doesn't bug me at all but the the problem is that there's like it's difficult to kind of coincide these kind of things from an api standpoint if
[01:57:21]  you want to be able to like do both like have a react version a solid version of the same library and you pose an api like path matters like how how do
[01:57:31]  like if someone wrote the mutable version we could very easily with a proxy be able to tell that hey you updated user zero address street number we can tell that because we can
[01:57:47]  track the access through the through these properties and see that you said it but how do we tell the immutable system that they also have to update selected like that they and
[01:58:00]  not even just the street number selected specifically replace the user at this slot because that's been cloned i don't know if i've lost you all chad you got
[01:58:18]  you guys all still there yeah immer is is great at this because immer immer immer does does this for you but i think the thing with immer is and i gotta see here immer
[01:58:30]  is still assuming an immutable output and because it assumes an immutable output um it only cares about the path of the change i could be wrong but i i was trying this
[01:58:41]  stuff with like overmind and like um like a few of the other ones that like patch out the differences and it wasn't actually very easy um i actually kind of came
[01:58:53]  into code sandbox and was playing around the other day and i was like what if how could we possibly do this and um uh where was it i can't even it's
[01:59:10]  my problem right i recent uh pick off where you left off it's like what was i doing like two days ago let alone a week ago old leaf yeah here we go i
[01:59:24]  i started like trying to figure out how i could possibly do this like picture if i had a b c and c was also b how could i possibly solve this problem um
[01:59:39]  because the problem is you don't know at the time of proxy get you only know the path you travel you don't know all the path that existed so i i don't
[01:59:49]  know if this hopefully i'm still making sense to you all but if if if i go back to this playground here where is it playground and i like with a proxy you
[02:00:01]  kind of know the challenge is it's really easy to know the path you took to get here to to write or update a value but it's hard to know um the other
[02:00:14]  path you can only really do it at set time but the problem with doing it at set time is that when there's any new set when you like add it like set
[02:00:25]  somewhere else well you need to go deep because you don't know if like it's not enough to just replace at the one point you have to walk all the way down to
[02:00:36]  see if any of those place those items that you're adding potentially exist somewhere else in in the system uh because how else are you going to link up those references you know
[02:00:50]  like users in multiple places here it actually has multiple parents it's not as simple as like storing a path on each object um i'm not gonna get too deep in the solution
[02:01:03]  here but i actually figured out how to make it so that if i set c here um that it could actually tr even though i'm setting b like this is bad naming
[02:01:18]  because there's a property on b called c as well and i'm listening to c it actually console logs high as you can see here so i did manage to make it so
[02:01:28]  that this worked um using weak maps and stuff it was complicated so there's hope here in in order in in making this work um because in solid for example we actually go
[02:01:42]  through to make sure you don't nest proxies we unwrap all of them as we go and because we already do that walk i was able to create the pass at
[02:01:51]  the time and then because i'm doing it on a per node level i was able to prevent having to do full traversals now that's too technical i'm not going
[02:02:00]  to cover this here i wanted to point out that at least that there's hope that this is solvable um from from the work that that i've been doing here the challenge
[02:02:10]  though is and maybe this isn't that bad but even after doing that let's say we solve the path problem if something's listening to user in react land and it doesn
[02:02:25] 't directly link to address or street like in our scenario here where they just care about user you still need to structurally clone it like you still need to clone the the stuff
[02:02:40]  that needs to be cloned because if you don't react won't be able to tell what changed when you tell this middle component to re-render here like when you get
[02:02:48]  here and you go re-render react still needs to be able to know should i render this child or should i update these hooks so even if you manage to take this
[02:02:56]  api and manage to figure out how to communicate these fine-grained changes across the different paths you still have to then go structurally clone the rest of the data from
[02:03:08]  that point on the positive if you're using this on its own you would have had to structurally clone the whole system anyways so i'm gonna guess that the trade-
[02:03:17] off is going to be pretty similar from a performance standpoint but it's just it's incredible the amount of complexity that goes into trying to make either model work with each other whether
[02:03:28]  it's like force a diff on everyone or whether it's like come up with really clever ways to track, um, both directions. All right. Yes. Yeah.
[02:03:53]  Yeah. Right. In, in reality, you wouldn't put, put the model. This is why you don't do this. You, you just copy the IDs.
[02:04:00]  The problem is you, it depends on what your baseline is. If you, if you come in with an immutable data structure approach, like in your mindset, like
[02:04:07]  you're like, I'm going to use immutable data and you use the ID and you don't have to write all that crazy code. You're forcing the mutable
[02:04:15]  system to have to diff. Like there's no way around it. If you come from an immutable mindset on internals, like I'm talking about where you can actually
[02:04:26]  optimize for that pinpoint update and you want to get back to immutability. Um, that's why that's where we're there. You actually want to keep the
[02:04:34]  reference. It's better to share the reference than point via IDs. Um, because, um, the synchronization happens automatically. You're not responsible for the synchronization.
[02:04:45]  What I obviously didn't show is like, if you are responsible for the synchronization, it's kind of like the same problem you have when you have multiple immutable
[02:04:57]  stores, right? There's a reason why Redux uses one store. Like if, if you're responsible for the synchronization, now you're suddenly using reactive primitives
[02:05:08] , like create effect or whatever to write to other stores and the complexity goes up as well. It's like both ways don't really want to be the other way.
[02:05:19]  Uh, reactivity, immutable stores would prefer to share the reference, whereas immutable would prefer the ID. Um, and you have, if you're trying to make
[02:05:30]  a universal API, you have to be aware of both, essentially. Um, like you, like you have to be aware of that characteristic in both. It's just tricky
[02:05:38]  because in, if you approach it from an immutable sense, you can never get the performance on the, on the mutable side. Like you just, you,
[02:05:46]  it's impossible. If you approach it from the mutable perspective, it should be possible to at least retain the performance that the immutable system has. So that's why
[02:05:57]  this is interesting, right? It's easy to cop out on immutable because literally the whole it's easy to cop out on immutable systems that way, but we
[02:06:06]  can do better. All right. Just catching up on chat. Sorry. Sorry. Yeah. I mean, the, the, we have time travel debuggers and
[02:06:36]  stuff on the mutable side. You just, the thing is you have to record different data, right? Um, you, you, it's, it's, it
[02:06:45] 's, it's a matter of recording snapshots. It's easy to keep the references in immutable stores. So it is easier to do time travel, but it
[02:06:53]  is possible to record snapshots, um, on the, on the mutable side. Yeah, we definitely did. Yeah. Yeah. This is a really good point Tanner
[02:07:13] . And this is why this is part of this. I'm not even done here. Like what, how are we doing? We're at two o'clock.
[02:07:19]  Um, we, we still got more, more things here. I, I just, we've looked at rendering. We've looked at like the concept of like compilation.
[02:07:29]  We've looked at state management and like how that plays in, in terms of like the render cycle. We were looking at immutability versus mutability. Um, these
[02:07:39]  are all pieces and options. Um, that's the thing. This is not, I think the solution to this involves multiple pieces. That's why I'm bringing them
[02:07:50]  all up and we can kind of figure out how this all kind of plays together. Right. Um, yeah, this is, this is what me and Tanner have been talking
[02:07:58]  about the last few months. Would you be able to preserve the performance for the, you would be able to preserve the performance of the, of, I think it's
[02:08:13]  possible with the mutable system to be as, at least as performant with the, for the immutable system. If that makes sense. Like I think while it's
[02:08:22]  impossible for the immutable system to ever get to the mutable systems performance, it's possible to use the mutable system and map back to the mutable system. Sorry
[02:08:31] . I know mutable and immutable runs together without taking, um, really much more of a hit. Um, and I think Imer is actually a good example
[02:08:42]  of why you should believe that. Okay. I'm going to drink some orange juice. Cause you guys are all chatting away with chat. Actually, how's Twitch
[02:09:12]  chat doing? Hmm. Thank you, Dexter 36 for the sub. Um, definitely appreciate it. Um, that was a while ago. Oh, I missed this earlier
[02:09:25] . Sorry. Insanity later, gifting five tier one subs. Thank you so much. Very much, very much appreciated. Um, yeah, it's a
[02:09:34]  bunch of new people in chat too today. That's awesome. I'm, I'm glad to see, see you all here. All right. It's funny. I
[02:09:40]  say you all, I never said you all when I was in Canada. I'm Canadian by the way. It just like, it wasn't a phrase that we,
[02:09:46]  we said, um, we said, all right, it's just catching up. Sorry. It's stream yard, which I use the stream most of the time. It
[02:09:56]  doesn't actually, um, push any of this Twitch specific stuff through. Um, God, there's so much chat I missed while I was talking people talking about j
[02:10:07] Query. Well, maybe I'm glad I missed that mutable JS. I remember a mutable JS solid, um, store API is influenced by immutable JS and Fal
[02:10:15] cor. I, I don't know if that's the best for everyone. I was really strict on it. Sometimes you, it's, it's a hard balance
[02:10:24]  to find with how, um, committed you want to be to your opinions. But I do think if you can save people the pain by certain design decisions and give them those
[02:10:34]  kind of like that direction, I do think there's benefit there. It is definitely a consideration. Uh, yeah, I imagine sort of further South. Oh yeah.
[02:10:52]  No, I'm in California now. So this, this is just Americans in general have a higher y'all, um, like rating, like even, even I know
[02:11:02]  the South is even more so, but there's like, at least like it's, I'd say that you're already a hundred percent more y'alls in California than
[02:11:10]  you are in Canada. Like we just don't, we don't, that's like not a thing. Uh, hi from France. Nice. What time is it
[02:11:20]  in France? Are you guys, are we getting on midnight? Yeah. Yeah. This biggest change from moving from Canada to the U S is, is now that I say
[02:11:35]  y'all. All right. Oh yeah. So sometimes you need to like a moment to catch your breath after, you know, going straight for like two, two
[02:11:46] , two and a half hours, almost. Nah, that's the thing. I'm not even done yet. We got, we got, we got, this week in
[02:11:56]  JavaScript is going to be interesting in that we've been doing a lot of fluff stuff recently, like surface stuff, you know, award shows and stuff. I think, I
[02:12:02]  think this week in JavaScript, we hit a little harder on tech and a little harder on reality. Um, but yeah. All right. Yeah. I hope everyone's doing
[02:12:11]  good today. Hi from Nigeria, man. Yeah. Hey, Kelvin. Yeah. 11, 11 o'clock. Yeah. Yeah. My, I'm guiding my
[02:12:23]  European audience here. I got to keep on moving. So you guys can go to bed at a reasonable hour, right? Oh, don't get me started on tailwind
[02:12:30] . Okay. Okay. So I'm, you're appreciating some of the challenges and problems here on the data level. So we talked about, as I said, I
[02:12:37]  already kind of did a recap. So what can we do? And this is what I started playing with a couple weeks ago. Right. Uh, again, if I
[02:12:49]  go back really far back, um, I can probably find a code sandbox that I did a while ago and it was called solid. No, come on code sandbox.
[02:13:02]  I crashed code sandbox. Do I have it open another, maybe I'm like, did I crash it or did this react example I have in the background crash it? Sometimes
[02:13:14]  that happens. I'm actually just going to reset this one. Cause I use this for some examples, but sometimes I'll, uh, I'll, uh, like
[02:13:21]  kill code sandbox somehow. Um, and they'll just like affect every instance. Oh man. Don't look for solid and code sandbox. React. Okay. Better see.
[02:13:37]  Okay. So you see these, these two, these two things here. um and the very first one I did I think was not this one actually it was it was
[02:13:58]  this one it's funny it says 10 months ago but that's probably when I last updated it not when I originally created it um the first one I did was I was like
[02:14:07]  at some point I was like wouldn't it be cool if I could write I could use a react component in solid then we could like have the react ecosystem like we could
[02:14:22]  use um react libraries in solid and like it'd be really really nifty so and I was like and I was like playing around with it I was like how would I do
[02:14:30]  this it doesn't seem like it'd be too hard and I created this thing called solidify um which essentially is you take a react component put it through solidify and
[02:14:42]  then ta-da we have it working so in this case this counter it's updating is in react there's an interval that we're setting as a signal state and we can
[02:14:54]  use solid to update the speed of this and if it's faster the interval is shorter and if we slow it down the interval is longer and I went probably too slow um speed
[02:15:04]  up a little bit bring it back that already crash it okay there we go um we can basically use props solid thing to actually have react working in solid and I thought this
[02:15:18]  was a kind of like a cool idea um but I hit a couple issues right off the bat and that was that there's a limit to what I could do here but the
[02:15:29]  implementation was really really simple all I did literally was inside solid create effect that took the values of the props I I this untrack probably isn't even necessary but I
[02:15:45]  did just in case like reactive stuff like snuck its way in you know but essentially uh yeah I guess that's possible because you might be yeah you might be getting like
[02:15:57]  reactive stores and stuff so untrack the render function from react calling react create element pass the component the props l as a mount point and then just put in a solid div
[02:16:09]  done right um and yeah don't get me wrong this is not server rendering this like this like took me two seconds to do and I was like I was like yeah I
[02:16:21]  mean so what like like like who really cares I mean the problem is now you have react bringing react libraries in and and honestly this wasn't the hard part the hard part was
[02:16:36]  how the hell do I get the jsx to work the reason this works is because I literally just um wrote it like I just returned the count there's no dom elements
[02:16:46]  here I didn't I didn't actually compile the jsx but I was like I could picture someone could probably compile the jsx in their own way um and get the work
[02:16:55]  um the gap of course what if solid wanted to pass children to this counter right like what if we wanted to um what if we wanted to like uh you know I don
[02:17:14] 't know solid render something and passes in what if those buttons we want to pass into a layout inside this counter component someone asked why did I do object dot values um probably
[02:17:25]  just to be uh I'm trying to remember probably just to be like uh yeah actually this this doesn't do anything does it I have no clue why that's there I thought
[02:17:38]  I was doing it to unwrap something but you're right why is that there like it literally doesn't do anything even simpler thank you oh right you're right I'm
[02:18:00]  I'm dumb we didn't up if I remove this thank you thank you uh yes because if I remove this none of this is gonna work it's not gonna speed up
[02:18:12]  thank you I I completely blanked on it we needed to read the props this is like what I was talking about a minute ago on the the Excalibur when I
[02:18:21]  was talking about like being aware of the props being read if if we don't read street number street address like we don't read the specific props solid doesn't know to run
[02:18:34]  this effect again and because we untracked this um like I could have not untracked it and just rendered it but this the problem is because then you're depending
[02:18:45]  on reacts render cycle which might happen to async essentially I want to make sure that I read all the props so if any of the props changed then we call render again on
[02:18:52]  react and react's fine with that because react is pretty good at diffing like that's this fits in it we need this object of values simply as a way of telling
[02:19:01]  this effect in solid that it needs to rerun it's so good I didn't notice this myself right so yeah the this is this is kind of like you'll find often
[02:19:21]  whenever there's an untracked involved there's probably some kind of tracking action otherwise this could just be an on mount um but yeah okay so everyone's still with me
[02:19:31]  here if I mean this is like the snarky like rich harris take but like it it doesn't matter how good you are at diffing if you just don't
[02:19:47]  have to do it at all right like the thing you have to understand is within its model um within its model it makes sense like it's this isn't that thing alone
[02:20:09]  isn't going to kill you because on a micro level like who cares it's just like how does it fit into the mental model and how does it fit into like how does
[02:20:19]  it impact the way you author apps i i could be wrong here but like this is not a in in react i don't think there's like that difference here you create
[02:20:36]  v dom it discs the v dom so me using a render call here or whatnot doesn't like i can do it like 10 billion times it's it's basically the same as
[02:20:43]  what react's doing internally like it's still rerun that all this is doing is a re-render and a diff um so this this this was fine but like i
[02:20:55]  didn't really know like the child thing is is tricky because the problem is if if i passed well can anyone guess what will happen if i pass a child here let's let
[02:21:07] 's pass the child to counter though what what do you think i mean i'm pretty sure react's not going to know what to do with this thing but what do you
[02:21:16]  think what do you think props dot children is then does anyone know what props dot children is here let's go inside our thing here and console log it console dot log props dot
[02:21:36]  children what is props dot what happens if i try and jason this is probably like gonna crash something um what happens if i try and jason this is probably like
[02:21:59]  gonna crash something um yeah it's not even playing games so they they just don't want it this is chrome doing this it's a dom node props dot children because it's
[02:22:16]  coming from solid is this is actually like an actual like uh i don't know like uh i don't know like uh like this is an actual dom node i i can
[02:22:29] 't really show it here because um yeah see like look node list here we go like solid when you write div in solid you get a dom node out the other end and
[02:22:48]  and that react has no clue what to do with a dom node like if you go here's a dom node react like what what the hell's a dom node i don't
[02:22:57]  know what a dom node is and that makes sense because their core or the non react dom part of it actually literally has no idea what to do with the dom node and
[02:23:08]  similarly solid doesn't know what to do with the vdom node which is the kind of problem that i was having going the other way someone mentioned the chat quite aptly and
[02:23:22]  by someone i mean parasocial um that we need portals portals and that is correct we do need portals um but i didn't really take this example much
[02:23:34]  further i have to admit i kind of got to this point and i was just like yeah you know this is novel if someone wants to do this they can and honestly i'm
[02:23:46]  less excited about this now now that solid's been growing its ecosystem there's almost like this tension that you don't want the react libraries because like they they work differently as
[02:23:59]  we've been saying and they and there's like this kind of extra overhead cost you know like good in a pinch but not really what what you want to be doing and at
[02:24:11]  least in the context of solid so that that that this solidify is perhaps a little bit less interesting than um than the other direction right which i made basically i made actually
[02:24:27]  significantly later although it didn't uh which one was it is it i always get them backwards yeah this one um but i think this one's the more interesting one and this
[02:24:47]  one this this one is can i put my react solid components inside a react app because the problem the other one is like if you're on a migration path it's basically saying
[02:25:00]  like put put make the root solid and then bring your react components over and that might be okay for some things but the challenge is often that's not the direction you want
[02:25:09]  to go um and i think this is actually interesting because with solid the direction doesn't really matter as much because like that's not why you use solid but it's interesting because
[02:25:20]  like for example quick came up with quickify which is like that solidify essentially where you could put react components in quick um and you want to do that for them because
[02:25:29]  quick orchestration like it owning the app is where you get the benefit you you know if you put react owning the app and put quick at the leaves you're not really gaining
[02:25:39]  quick's like major benefit that way but i think putting the like react the reality is most apps are written in react getting the framework in there so you can use it is better
[02:25:53]  if you actually have it at the leaves so it's like this there's this awkward tension there to kind of figure out um right so like i think i think it's
[02:26:11]  interesting because in this example you can see that i didn't have the jsx working so i literally use react create element calls for the react code and then i just use a
[02:26:22]  solid component that updates the timer right so we can do the same example again but the difference is it's a little bit more complicated to get solid and react not that much
[02:26:34]  but we we got a ref for use ref and then we used use memo um as as a mechanism for storing um for for getting the props and you'd be like to
[02:26:50]  be fair i wonder if i could also use ref here i'm trying to remember why i did use memo but essentially we set the props whenever new props come in from react and
[02:27:06]  this isn't terribly efficient to be fair but it uses a store so if the props are shallow emerges like if this actually i guess the efficiency is fine here because stores only
[02:27:21]  notify on change and at and when you pass an object in it will do a shallow diff um when it kind of merges them so yeah this is actually perfectly efficient so
[02:27:29]  basically when it renders it sets props and then i set up a mount effect essentially here that it initially only renders solid once and then every time react renders what it
[02:27:42]  really is doing is setting the props um so that like every react render updates the props does it the props basically do a shallow diff on equality and if anything inside the solid
[02:27:56]  app detects that fine-grained change that one point updates um but as i said i did this a long time ago and since then uh i've had better ideas um
[02:28:11]  sorry get back to my profile again that was not the right way where's my profile okay um so i wanted i wanted to i a couple weeks ago some of you might
[02:28:26]  have seen seen me do this and this is more interesting because i was like screw it let's see what it takes to get the jsx to work so i actually ported
[02:28:35]  this silly example over into a veet build and essentially wanted to solve the children problem so i'm actually passing the buttons in solid which are dom elements into the counter um
[02:28:55]  or sorry i'm passing the vdom elements from react these buttons into solid which doesn't understand the vdom and i came up with an approach to do this and it
[02:29:09] 's it i have to admit is a lot more complicated than what i was doing before and there's a few tricks and i want to i think this also helps emphasize a little
[02:29:21]  bit the difference here because when i started with this approach it was actually a little bit simpler to then where i ultimately ended up but essentially the guts of it were this were kind
[02:29:33]  of the same in that there is this reference to the dom element and this memo for the store that we saw um in the last example um where things got more interesting was
[02:29:47]  figuring out how to handle the react children these vdom children being inserted into solid and the way that i ended up doing that is i would i tried to come up with a
[02:29:59]  heuristic to tell if it was a vdom node so in this case i was just looking for like a special property that they had on it and if it is
[02:30:07]  um sorry that's solid actually where it's a vdom node sorry i was just looking for like their v like a property they had on it and if it was a v
[02:30:14] dom node what i ended up doing was creating a portal um and registering that portal with a ref and then essentially um passing uh these portals that i'm like in this
[02:30:36]  ref into the jsx because if you don't put the portal in the jsx it won't run and you have to do that synchronously um this this is a
[02:30:44]  little bit more tricky of code because i started learning a lot about react that i didn't even know myself while working through this problem because the one of the interesting things that was
[02:30:58]  wrong with my previous example is that while it was really easy it was relatively easy to actually um create that effect and render it i had this i had this i had this
[02:31:12]  little problem and and that is effects in react run inside out child before parent and if you're using and what i while getting the children in was pretty easy with portals
[02:31:32]  i wasn't content with this example because i don't sure this is pretty useful if you literally put solid like in the leaf you can now pass jsx to it and you
[02:31:45]  can do all that stuff i i wanted to do islands like for real which is could i create a solid context provider higher up in the tree and have a solid component lower
[02:31:59]  in the tree read from that context seamlessly through and the reason this is important is sure now you've mounted react but how do you share state between a react app and a solid
[02:32:11]  app you could go to react solid state and use signals or whatever but the other option is use context the tricky part is that solid and react cannot share context right like they
[02:32:30]  they have their own trees they have their own ways of propagating it but you can always create a react app put create your context provider for react put a solid context provider
[02:32:44]  inside of it and then have reacts pass the context or this the same context that you pass into your react app pass it into the solid provider and then pass and have that provider
[02:32:55]  provide to the solid components a little bit complicated but you actually don't need like too many extra wrappers to pull this off um so this is a silly example where i
[02:33:07]  actually have a solid counter provider in a react app that communicates to a solid component whose interval is being driven by that react app which then receives react children which um update
[02:33:23]  the state of that of that component and this is probably like just like a silly kind of example but i think with all these pieces essentially you get you you get what you what
[02:33:40]  you need here the trick that i did for the jsx was i put solid in its own folder so that like it would only process these solid these files with a solid
[02:33:50]  compilation and the rest would be with react that was the trick for the compilation side i had the hack beat a little bit i think in the future um like i had to do
[02:33:59]  a little bit of this i think in the future we could probably find a way to standardize on this but the approach seems to work um but the problem with context is
[02:34:13]  and this is kind of where i want to get into it you need the child to be able to look up to the parent to find the context and in solid that's in
[02:34:24]  the reactive state now it's not too difficult that's what this dollar sign owner is in solid but it's not too difficult since we have fixed dom nodes that we're
[02:34:42]  using as refs here for the when we go back and forth to write to that dom node that context information so that when the child renders it can look up the dom
[02:34:54]  tree find the ref and read it off that the problem is and where i was getting to is and i don't people know this effects run inside out in react so i
[02:35:05]  i built this this application and counter was rendering before counter provider because i need to use effects to do the solid rendering because i need to manage the cleanup and this was true
[02:35:22]  even with layout effects so i i thought i was pretty pretty pretty stuck and as it turns out there is a trick that i'm going to share with all of you that
[02:35:38]  if you've never hit it before if you put an effect in a component pass the effect like function and use effect in in a component and pass it to your children it
[02:35:54]  will execute before yourself so i basically took my my create effect call from that original version fed it through an effect component and now when it renders it actually renders the ref
[02:36:10]  first then renders this effect um to handle the portals and then um ends up uh you know it does all of that before it actually does the parent and this actually
[02:36:23]  reversed the rendering so now it actually renders provider before um before uh child it's it's it's i i found this in a gist on on github
[02:36:38]  but this is this is a essential piece and it's one of those kind of funny um technical things um i i did have to do some like as i said to get context
[02:36:49]  to work this is why solid like having these lower level primitives that people don't always know run with owner is really powerful because what the way i ended up making this all
[02:36:58]  work was when react comes through and renders the provider or the first component or whatever it goes through it sets the props you know figures out you know what needs to be
[02:37:11]  a what needs to be a a vdom node when it finds that vdom node and creates the portal this is this is this is the this is the this is the real
[02:37:21]  secret here i augment the props for the for that property could be the children in this case to be a getter and the reason i do it to be a getter
[02:37:30]  is because everyone who writes solid code writes doesn't destructure they write props dot children so if i make it a getter the location at which you access um the children ends
[02:37:49]  up um being the right reactive context so like you put under effect or put under the jsx i can actually figure out like even if you have like nested contexts and
[02:38:00]  for loops and everything inside solid this getter will execute at the right time so that you can grab the current reactive context and it writes it on the dom node which is basically
[02:38:12]  this output that we get from the portal uh and that's also what we inject in solid we take the the portal doesn't render into a fixed location in react it rend
[02:38:26] ers into a floating div essentially we just we we basically grab because of the way the create portal where is it api works um it wants it wants it wants a mount
[02:38:41]  element right um and i'm i'm sorry i'm terrible at using abbreviated letters but it basically wants um this f which is either going to be something that we we're
[02:38:52]  caching and i i might talk about that later not too important i suppose or it's going to be some random span element that i came up with so it takes that
[02:39:01]  document this element that's just floating it's not attached to the dom anywhere and then it it defines it in the props in the getter so that that's what gets inserted
[02:39:14]  into solid that that dom node that's detached at the location that you call the get and at that point you have the reactivity so you're able to set the owner
[02:39:23]  on that same dom node where that portal gets injected that way when the child runs the effects in the proper order it can look up based on um uh it's it's dom
[02:39:39]  node where it's getting injected it can walk up the tree um looking for that owner property that we wrote we wrote onto that dom node and because the order has been reversed
[02:39:50]  now so it's parent before child it'll find it and then it'll run with owner to render the solid component so yeah i mean this is this took a lot of figuring
[02:40:04]  stuff out because like stuff was out of order stuff was you know not dom nodes vdom nodes portals portaling to things not connected to the dom yet but will be
[02:40:15]  connected but in the end um it seems to work so um we could do the same thing if we wanted to the other way probably and figure out how to get um react and
[02:40:29]  solid um with this level of context sharing and whatnot and to be fair this only works client side right now i i think ssr would be an interesting challenge to try and
[02:40:39]  figure out but there's a lot of create react apps out there or even people using uh react and you know client side only functionality even within their next apps or within portions
[02:40:49]  so it's a start um and it's a pretty promising one uh i think so yeah it's i don't know maybe you've learned something about react here i'm
[02:41:03]  afraid uh yeah i the funny thing some you mentioned really interesting thing to get the owner this approach to getting the owner i'd already done uh a few months back dan abram
[02:41:23] off was like talking about islands and he's saying well reacts over components are different because you can share context i'm like oh you can share context between islands no problem um
[02:41:31]  and and i'm like we just haven't done it yet and then i i implemented in solid start solid starts like experimental islands actually share context and it was basically the same mechanism
[02:41:42]  very similar um solid does render top down ironically um it's not that it's not that react doesn't render top down exactly it does do parent renders parents before uh
[02:41:57]  children it's just within the same template or within the same component itself jsx evaluates inside out um i don't know if if so when it hits a component boundary like
[02:42:10]  there's this kind of interesting thing in react in that like it can just like go okay this is a component i'm gonna like basically recognize that as a component vdom
[02:42:20]  node and then when i process that i can actually move on and do that child so it does do parent before before child and in fact that actually makes um that's why it
[02:42:29]  can get around the fact that the jsx is backwards because it's it's not actually executing the children right away um like let's let's just go here just in
[02:42:41]  case you know as most reacts mostly these create element calls where you can be like header and then you can be like here's some props and then i'm gonna use array to
[02:42:52]  be a thing but then you can like go i've got some children i can like create some more elements and stuff right but uh which one and then what was this gonna be
[02:43:02]  p okay okay and then i can be like i'm gonna put some text in here hello now what what i'm getting at is this call happens before this call right but
[02:43:19]  um it doesn't really matter because if you make this comp or something like some kind of component it's not like react executes the component at this point when it hits
[02:43:33]  it it just goes okay my vdom node consists of an h1 that has a child of this component and then it goes okay now i'm gonna go do the component like
[02:43:43]  it's essentially like while so it it gets to even though it executes inside out it also gets to kind of keep that top downness because it finishes the current context and
[02:43:56]  then it moves down to the next one and then down to the next one challenge with solid is we don't have create calls in solid this compiles more to like document
[02:44:06] .create element h1 some properties and then it comp comp um uh what is it children hello let's say and then it's like where is it uh l equals
[02:44:34]  that and then it compiles to like l dot append this right more or less which means that if we relied on the the like if we had this if rjsx
[02:44:51]  executed backwards like it just it wouldn't work because when we hit comp we run it immediately it's not like finish this and then go to the child this is all part
[02:45:03]  like the parent component's not done running at the time that the child component gets called if that makes any sense because there is no component it's literally just like append on more
[02:45:14]  dom elements just build it as it goes so that's why like that this is why effects get queued in reverse order in react and why my little hack to like put
[02:45:28]  effect here worked because it gets called before before this one and it's um it's also just like why like solid doesn't work that way luckily for us the kind of ep
[02:45:45] iphany moment for me when working with components because originally solid didn't have components i thought everyone would use web components was that i realized that lazy access to reactive properties like
[02:45:58]  the the fact that we need to use a getter if we want to just like pass a value down so like if you if like um if you have a component you want
[02:46:06]  to pass like uh like a reactive name value or count to it if you're going to wrap it in a getter echoes the laziness that we want of children essentially
[02:46:18]  so we didn't have the special case simply all props had the potential of being lazy so it didn't matter if you use dot children or you use whatever to pass jsx
[02:46:30]  it's all lazy and because of that um we we basically reverse the jsx essentially if that if hopefully if that makes sense because if this was actually reactive you know like
[02:46:45]  if we would just make this get children and if we make this get children now instead of running right now first before comp runs comp calls it when it wants to when it access
[02:46:58]  it on the inside so there's like once i realized that reactivity and our desire for lazy children was essentially the same problem it completely collapsed all the complexity here for us
[02:47:09]  um which is pretty convenient because it's funny um the dom slots are actually eager not lazy and um view and i believe svelte originally were eager in that regard and then
[02:47:24]  they both switched to lazy um because lazy ends up being very powerful and it's one of those early benefits that people thought like thought was great about the vdom because because essentially
[02:47:36]  the way that react will go over this and then run the comp after is almost like lazy like if it realizes that it doesn't because of some kind of reason like logic
[02:47:47]  like doesn't need to run that component it won't run it because it's it's it's children are lazy and uh we kind of got there from a different angle
[02:48:06]  oh this is this is great svelte is like react when solid is like view but svelte is like view when solid is like react uh yeah this this is part
[02:48:19]  of the reason why they all carve out their own unique space this isn't like just a clear-cut like strictly better kind of thing you know um yeah i mean i you
[02:48:31]  know me i love this you forgot quick oh man no not that this one this this is something that i can relate with we'll see what the conversation is a year from
[02:48:47]  now i think last year a lot of people forgot solid um we're conveniently left off comparisons and conversation uh uh as quick proves itself it's time will come all right so
[02:49:08]  how are we feeling about solid and react i know there's some complexity here i actually had an idea of how to get ssr to work but the problem was that i
[02:49:17]  was having some problems with the veet and figuring out how i wanted to get the jsx to compile or the the compile differently because the trick is going to have to
[02:49:27]  be figuring out how to kind of there's no portals on the server so how do you do this injection and i think it's going to be a game of uh
[02:49:41]  going back and forth with inner html's anyways i i i we'll have to see i think one problem is i think react actually checks if your inner html
[02:49:50]  matches like what it expects from the server which is interesting um but yeah that is a whole challenge for for another day okay how do i mean i didn't make typescript
[02:50:04]  work yet i just use javascript i want to stop one problem at a time i if i believe there's a feature in typescript called typescript projects if you can
[02:50:13]  isolate the solid code within like a folder or something you can give it its own config i've seen people put solid and react in the same uh mono repo and pull it off
[02:50:21]  i have to admit me and tanner we're trying to do this with a tansdack query and react just kept on coming out of nowhere it was frustrating we
[02:50:30]  never solved it one of the challenges is react um hijacks global jsx like literally the global jsx react just says yeah that's mine whereas most other frameworks play nice and
[02:50:41]  you have a jsx export but like for historical reasons which means that like at any point if you like aren't careful and you aren't doing things right react will just like
[02:50:51]  show up in your typescript it'll be like you know you'll be working on some solid thing and it'll be like something jsx doesn't ex you know doesn
[02:50:59] 't ex something react node and you're just like what i didn't import any react here or something like you know when he yeah yeah astro see that that's an interesting
[02:51:12]  point astro has all the jsx working together on the server um you know etc so if if we wanted to figure out how to do this astro would be where
[02:51:25]  we would look they they are they they have figured out they at least i talked to fred about and he's like always kind of lamenting like oh it's not as
[02:51:32]  good as i would hope we use these kind of funky heuristics but the fact that like literally it builds and it works is a miracle in itself um i think that's
[02:51:39]  the challenge like if if if we if we can come up with a v plugin that does this the runtime stuff is all workable and it's not actually like sure it
[02:51:48]  took me like to figure out all that those cool tricks i showed you took me you know uh well i took i mean you can i did in real time so i took i
[02:51:55]  guess it took me an evening but like because i posted those two tweets uh one day after another but like i'm sure ssr would be like another few days work
[02:52:05]  if we could figure it out it's just like getting the wrangling v plugins is not where i want to be spending my time i think i'd rather have react
[02:52:24]  in solid than solid and react because i don't think i'd want the ick for the benefit of being able to write new things in solid the ick what does that
[02:52:37]  mean oh oh i see just like being able to yeah i the funny thing is let's talk about this for a moment and i've talked about in the past i'm
[02:52:57]  kind of glad we don't have react compat on one level i'm not glad from the fact that like it's hard for people to move their code bases over but solid as
[02:53:06]  a project it's been really good for us because moving changing code to from react to solid like the 80 is like dead simple but but like the last 20 is actually tricky
[02:53:21]  perhaps on some things but the the difference is i just i only have to look at preact as kind of a goal post preact's ecosystem didn't grow practically at all
[02:53:32]  except for like some few libraries related to the core that were really small simply based on the fact that people like oh i could use react compat like you never it didn't encourage
[02:53:41]  growth it was good for adoption but then at what point does that like curve end it's it's like it's like a good shot in the arm at the beginning but
[02:53:51]  then it's like later on you're kind of like yeah whereas because we don't have this compat and it's been such a challenge with the model as you can see we
[02:53:59] 've had to kind of claw our way up um and get the the libraries ecosystem down to the point that like like when i talk about the stuff with tanner's doing
[02:54:08]  or like uh uh stuff fabian's doing uh you know hope ui um and the new one was it cobalt um maybe i got that wrong like and the different
[02:54:18]  libraries have come up because of that i'm kind of like react can keep their libraries um and i know that's like a kind of cocky thing to say but like
[02:54:27]  looking at the work that people are doing and like making these more efficient smaller solutions and like in a modern ways like here's the thing like if you were to go rewrite all
[02:54:39]  the react stuff today you'd write it better than you did before like it's just not worth the sunken cost but for a new ecosystem a new framework you know being in
[02:54:49]  this zone it's like when the time's right the time's right and don't get me wrong people will be like oh we should just use web components you know standard
[02:54:56]  and whatever but like these rewrites are good from a like bird's eye view they're not good from you're the guy who needs to go do the rewrite what i
[02:55:08]  i'm sure we'll have react and solid stuff you know as part of this but like generally speaking the opportunity to take your react app and then in a leaf of it or
[02:55:22]  section start new with solid and be like experience solid for what it is rather than kind of more compromised because you're still kind of like in a semi react zone like you
[02:55:32]  know they're just kind of like pull the band-aid off and just like like i feel like that's gonna for though like again i understand this might not be practical but
[02:55:44]  for those who can are able to do this you'll get just that much more out of this so it's like it's tricky but i i you know i'm patient
[02:55:56]  you know we we stay the course and we keep on building good stuff and we we see how things go yeah i i think this is i think this is interesting because this
[02:56:23]  might happen this might not happen though one thing i know for sure is if this does happen you got like enough this is this i am pretty confident this is this is like
[02:56:37]  just because you can you can kind of chart these curves in the sense that before this becomes a real thing it has to be like kind of a thing or and we're
[02:56:50]  at like right now where we're on that process we're like at the it's possible not even kind of a thing thing so on those kind of trajectories and the speed
[02:57:00]  of the web moves this is at least five years out um because like the stuff like we're doing now with solid and this kind of thing the the hints that this was
[02:57:11]  possible date back as far as like 2016 17 whether it would go there maybe wasn't till 2018 kind of came thinking you understand like there's a progression on this kind of stuff
[02:57:22]  usually you can't you don't just swap especially with how entrenched the front end web is that's why people are waiting for that 10x evolution thing and wasm
[02:57:30]  probably isn't it either the biggest attraction like this trade-off still like like let's face it you can take a wasm library today and from like it could update faster
[02:57:43]  in the browser or as fast as your favorite framework like that performance on like just using it experience isn't there but like there's still this heavy like heaviness of the
[02:57:56]  fact that you're running wasm like there's certain industries that end up being kind of leading indicators that like won't adopt it like you're not using wasm for your
[02:58:05]  e-commerce page i'm not sure you're ever using wasm for your e-commerce page and like the amount of people who know javascript yeah i don't
[02:58:14]  know it's it's interesting uh in the actual solid you think something missing like like no it's it's a it's just a variety of maturity like native is the
[02:58:41]  thing we have no we don't have we don't have react native react native is just so much better than any of the other competition generally speaking i'm interested to see where
[02:58:50]  stuff like tori go and all that stuff but like generally react native is just completely cornered the mobile side of things on the js side so much so that like um
[02:58:58]  it's the it's the only obvious thing you can point at everything else we can be like oh yeah one of those one of those one of those but then someone will be
[02:59:05]  like well i don't like that flavor of that and then you're like okay well sure we don't have we we have chakra we don't have mantine like i understand
[02:59:11]  these are very different things but like you know what i mean like we have at this point versions of a lot of things that's not really good anyway anyway and yeah i
[02:59:22] 'm not worried like to the comment about like uh someone said something along then and then they keep like we'll say then yeah of course that's good i i don't
[02:59:35]  have any illusions here about that right like all the libraries got rewritten in react seven eight years ago or whatever so like i guess eight years ago ish like that's just
[02:59:49]  that's just the cost of progress all right how are we doing i think it's almost time for this week in javascript what's cool what's cool right now
[03:00:02]  is because of this innovation going on i'm going to get trolled by people working like it's not even trolled because i love this stuff i love the new stuff that
[03:00:14] 's why i cover it and because of the topics that i cover i'm going to have people in the audience kind of push and be like oh what about wasm what
[03:00:21]  about resumability what about these different things and the everything's in a different state of its life cycle um and this is something that i was very aware of on solid i
[03:00:30]  knew that it was like where it was and the you know these things just take time so yeah i welcome it come come in the chat poke at how great rasm or rust
[03:00:41]  is going to be in a few years that that that that's that's awesome you know what i mean like it doesn't really change too much you know where i'm
[03:00:51]  at right now i think generally uh we should just identify that these changes are just keeping you know coming down the the pipeline and that um we all kind of jump on and off
[03:01:06]  at different points the only concern is if it stalls or there's a perception that it's stalled and that's kind of where we got for a while with react and
[03:01:16]  maybe that was a peaceful time where everyone's kind of happy but i'm sorry those days are over and it's not that even react going anywhere it's just the fact that
[03:01:23]  react is changing like so like we're you know we're in for a fun time right now yeah yeah yeah i mean sure right yeah i mean and that's fair but
[03:01:51]  i mean there's there's certain practicalities here right time in the market always right and invest now in the future yeah if i keep on investing in the future i'll
[03:02:00]  never live in the like no one will ever live in the present uh i regret bringing this up okay um yeah it's finally the year that linux desktop yeah i mean i
[03:02:21]  made that joke theo made that joke again i think i think we're in there anyway uh we're we're just shooting let's let's get prepared for this week in
[03:02:33]  javascript i'm going to quickly look over the chat twitch is still going pretty strong youtube took a bit of a hit but you know it's pretty late um let's
[03:02:42]  let i'm just going to pop my screen up for a minute so that i don't reveal any more secrets so to speak and let's get ourselves all ready hopefully there
[03:02:52] 's some value in the stream i feel like i forgot some stuff i wanted to cover but you know you know how how it is um all right when did this week start
[03:03:07]  it's like 13th or something yeah yeah okay 13th okay duplicate that's good that's good it's funny some of the stuff on this week in javascript
[03:03:38]  directly references the the which the some of the stuff and the questions that came up um during chat today um which i which i find a little bit amusing um uh but yeah there
[03:03:53] 's some there's there's some spice um okay yeah okay that's where that one starts okay cool i think i think i'm i think i'm set up to where
[03:04:08]  i want to be okay cool what is this week in javascript well this week in javascript is something i do every week on my stream um it's where i
[03:04:17]  kind of digest all the news and stuff from twitter and talk about like new releases talk about transit uh technology and talk about like particular conversations or narratives going on around the tech
[03:04:30]  industry on twitter mostly um it's just kind of like reflection and sometimes in the past it's gone short like 30 minutes but usually it ends up going for a little bit longer
[03:04:40]  than that because um you know it's it's a discussion it's kind of like just a week in review and it's it's fun because we get to celebrate wins we
[03:04:48]  get to talk about awkward moments and we get to uh have uh i don't know what to call it uh i guess hope for the future so to speak all right this
[03:05:01]  week on tech twitter yeah a little bit but it's it's it's my way of indexing stuff all right so let's see wait is that a green screen oh yes
[03:05:15]  it is a green screen it's a green screen of my my own office do you do you want i got a funny story for you guys about that i mean it's
[03:05:23]  it's not even that funny it's just like it's so i don't know how to put it but this is a photograph of my office and this i did this for
[03:05:31]  consistency because in my house i move around actually between a couple of rooms and i wanted to always look like it was the same room um but more so i really liked watching
[03:05:42]  on theo streams that he always showed up really sharp and the background was blurred and i know there's like lenses and stuff for that but what i all i did was i took
[03:05:51]  a picture in my office put it through a slight blur and then put it on the green screen to kind of like cheap that effect um which i mean it's dumb but
[03:06:03]  like yeah i mean yeah and it's it looks i did a good job i think with the photo that the aspect ratio and like the distance and everything actually looks relatively realistic um
[03:06:20]  so you know especially when it's small um you you can't really tell as obvious until like i do something which causes a ripple you know or you can tell that the
[03:06:30]  mic is kind of like sometimes not there sorry press the invisible mute button but yeah i mean it's also good for other things too right like as many you know i play dungeons
[03:06:43]  and dragons um so you know this this can be fun too um so yeah anyways uh let's let's go back to my office before anyone makes inappropriate comments all right all
[03:07:06]  right cool uh god i can't remember someone asked me this and i actually asked answered in one of my youtube channels um what was it again cca yeah the brand c
[03:07:22] ca i got them off amazon for this bax8ddx2 all right uh damn it i always forget twitch does has an auto refresh it's like it's got
[03:07:47]  react query in the background so it likes to jump on me sometimes okay let's uh let's uh let me get here and get going okay so is everyone ready for this week
[03:07:57]  in javascript yeah all right now let's talk about this week in javascript before i get started i want to kind of make a little note the last couple
[03:08:12]  of weeks have been a little fluff uh award shows and stuff uh it's been fun a lot of focus on and you know celebrating uh successes and stuff a lot of really good
[03:08:23]  stuff for solids kind of come around um this week uh was much harder week for a lot of people uh real kind of eye opener um about the reality of the economic situation
[03:08:35]  the massive layoffs from microsoft and google um affected a lot of people and uh it's difficult because like oh you know kind of knew a lot of this was coming but
[03:08:51]  when you have companies that large that laying off four or six percent of their labor forces like tens of thousands of people out of work i mean it's just it's it
[03:09:02] 's huge what appears to be like maybe margins is like the livelihood of so many individuals and i know people talk about you know the fall of fang and you know there's
[03:09:12]  whole narratives about you know because we've seen the stock options tanking the death of the dream and whatnot um you know it was probably bound to happen the correction long overd
[03:09:27] ue but that doesn't make it any easier for anyone in this situation and uh um you know my thoughts and best wishes go out to anyone who is affected by it um
[03:09:41]  as i said it it's it's been a it's probably been a pretty hard week i know a lot of people who know people who were affected and yeah you know
[03:09:53]  it's where we are this week so a little kind of dedication before we can move into the rest of the topics all right so let me share my screen and let's get
[03:10:08]  going um yeah i'm gonna i'm gonna start here um yeah i don't know it's it's funny i i wanted to talk about this one for a moment because
[03:10:32]  uh this tweet i know a lot of people found hilarious um this is a this is this is one of those like theo won the internet tweets angular devs why why don
[03:10:45] 't you talk about angular more there's so much innovation going on innovation going on angular 15.1 self-closing component tags previously now i want the only reason i wanted
[03:10:56]  to bring up this one is for two reasons um i feel a little bit bad and responsible for this a little bit um as you can imagine theo's not usually watching angular news
[03:11:09]  i tipped him off to this um it was about it was it was it was in a conversation i was i was trying to um i was trying to explain the state
[03:11:20]  of angular in a way that um made sense and uh see when i see this i i as funny as this is this is actually a really good thing um i i understand
[03:11:38]  everyone's looking at this and like seriously like how could this not exist to now like literally every framework has has has done this for like it feels like years and years and years
[03:11:48]  well one that hasn't actually is web components um because this is actually an extension of html itself and it's on spec the fact that the angular team um did
[03:12:04]  this shows that they're actually rethinking things like this is such a simple change in a certain sense they probably could have done this whenever but what but the fact that they're
[03:12:16]  doing it now speaks volumes about the shift that's going on in angular and i think i think it's like important important to understand that like this is the change of thinking
[03:12:26]  like i i i have to admit i can see why this is like some people like this is like april fools right like this is this but like i think this is actually
[03:12:41]  really good sign maybe not the thing people you know are bragging about or like you know putting out there but like do you know how many people this probably affects like how
[03:12:52]  many angular code bases you know could drastically like just this easy small uh you know quality of life thing like it it's kind of inconsequential but on the other
[03:13:05]  hand the impact of this sort of thing might be bigger than a lot of stuff um that people might um do you know in in in their career in javascript which is
[03:13:18]  kind of sad because of the number of people it impacts so i don't know i i i i i do get it but i also want to say that i i think
[03:13:29]  this is a good sign of where that angular is moving forward i think angular is still worth something keeping keeping your eye on for that reason they're they're evolving and
[03:14:19]  they have the power behind it that being said i don't know how badly the angler team was affected by the layoffs today um minko just wrote like a broken
[03:14:28]  heart symbol and that was all he said so i guess we're gonna see how that um pans out but um yeah i i think this is more positive for angular than it looks
[03:14:41]  like um but yeah i mean honestly i'm not going to talk about this i just have to bring it up this tweet spawned so much chaos because people saw this and
[03:15:00]  they're just like oh my god and just reacted really negatively and this twisted a whole tailwind debate and every streamer worth his salt did a stream on tailwind this week
[03:15:09]  guess what i don't have an opinion so i'm not going to cover it but if you're wondering what the hell um is going on and why everyone spent all week
[03:15:18]  talking about tailwind it's the answer is no really good reason um so yeah i mean this just is a constant thing i think there's another one of those kind of things
[03:15:32]  i don't have here i think i think there's a similar one uh maybe i should open twitter to get to it steve um from uh from builder let's see
[03:15:39]  if i can find steve steve steve steve steve builder yeah um he posted something about um uh how many a quick way to get to show stars or something
[03:15:55]  um where is it i'm not you can't even find it here am i i thought it was steve maybe it was builder did yeah like now now that i'm
[03:16:06]  looking for it i'm not going to find it there's like a tweet about like yeah now i'm not going to find it oh awesome there there's a tweet about like
[03:16:15]  uh like showing how to show the various numbers of stars and stuff and stuff and i yeah today was this was a good week for pointless twitter debates um so if that was
[03:16:30]  your thing i'm sure you had a lot of fun this week yeah so yeah i i i'm i'm i'm kind of you know i i'm done with that
[03:16:47]  conversation i have to admit um okay we'll get to that one in a second all right um i'm gonna quick shout on the solid side of things not a ton here this
[03:17:02]  this tweet is is um related to the work that tanner was doing i just after our stream today it should be fairly obvious why like what we were talking about and how
[03:17:14]  how this works um it is something that we're excited about so i'm glad tanner's been sharing it because this approach to having a universal api that's optimal for
[03:17:24]  both solutions is really compelling um someone asked about time travel in solid well apparently solid rewind a time travel debugger for solidjs um was released this week you can find out more
[03:17:36]  info here so and there's a release article and everything so now you can time travel your your solid app which is cool so yeah all right thank you chat shares the star
[03:17:54]  tweet all right let's let me get this one over yeah yeah it's it this is another one where like someone kind of like this code is always kind of funny because
[03:18:10]  people like talk about the fact like why is it guarding on both ranges and there's all this stuff but um uh yeah this is the original one right and then steve went
[03:18:19]  and he he made a version in in a javascript and then everyone was debating that like it's it's funny though because i the reason i was looking for steve
[03:18:31] 's is because uh greg from leptos actually had like a great sub-thread about it because he was talking about the fact that like half the solutions more
[03:18:39]  than half the solutions to reduce this like bloat um essentially weren't better in a sense they were actually like less optimal and like in like way less optimal in different ways and
[03:18:51]  obviously like we don't need to be performance nuts about showing a string but it was just kind of interesting like uh seeing that kind of reflection on like everyone competing on the
[03:19:01]  best way to like sometimes this is actually perfectly fine i mean other than maybe it's like a little bit crazy double checking the percentage like it like it's readable like obviously this
[03:19:14]  is like clearly a pattern so you could like clearly make a like a loop out of it or something but like i don't know these these are the kind of things we
[03:19:23]  like to talk about on twitter um but yeah the funny thing is some some of the examples were so like like if it wasn't the string it was something else like they were
[03:19:37]  like they would have been like terrible from a performance standpoint if you're doing anything serious with them um okay so let's stop jumping all right it's fine it'll jump
[03:19:47]  again um honestly that was the main thing um first on solid side this this this week um was that time travel debugger um this is a slower week i'm glad we spent
[03:19:59]  the last couple weeks talking a lot about that um ben put out a fun video that i enjoyed you should all check out ben's stuff but ben's videos are like really
[03:20:11]  condensed but still carry a lot of good content and detail in a way that's much easier to absorb than anything that i do so i strongly recommend um you know following ben um
[03:20:24]  he usually streams in the morning like actually can i maybe i can give him a shout out in here uh be homes dev yeah i think is it just like slash shout out
[03:20:35]  be homes dev yeah there we go everyone should follow ben um his content's great on twitter as well um okay anyway so yeah we're done we're done with the solid part
[03:20:55]  let's let's continue on on with this week um before i get a chance to forget um next week i'm speaking at a virtual conference with um uh jam.dev
[03:21:08]  25 on i believe i'm speaking on the 25th um you check out the schedule but um gonna do a talk on solid start i'm kind of focus on meta frameworks um
[03:21:21]  yeah more stated js stuff this is a lot of fun if you didn't see it but i mentioned it before was on stream with fred um on theo's stream talking
[03:21:31]  about the results but i think we're kind of past the state of javascript honestly um and i have there's way more interesting topics that kind of actually happened this week
[03:21:42]  than than than than that um yeah let's let's tackle this one next because we're here i'm actually kind of a little bit excited about this it looks like they
[03:21:53] 're gonna add streaming to the declarative shadow dom and for those who aren't aware of what the declarative shadow dom is it's a way of well first of all if
[03:22:06]  you're not familiar with the shadow dom is um it's a mechanism for isolating styles and transcluding which is a um which is a technical word but inserting children into other
[03:22:21]  elements in such a way that those elements could have their own internal templates this is usually used with web components um is the way of saying it but it doesn't have to be
[03:22:30]  used with web components and what the declarative version does is it gives us a way to render it into html on the server and actually basically be able to render web
[03:22:39]  components on the server and potentially hydrate them the tricky part obviously is you still need like there's no dom on the server so you still need a way of generating that
[03:22:47]  declarative shadow dom on the server and then you still need a library to know how to hydrate it so like it's not the dom spec is insufficient for this but what
[03:22:55] 's interesting about streaming is for a lot of us the reason that we even care about the shadow dom is that we really just wanted a way of scoping styles for a
[03:23:04]  long time and i think a really cool or interesting use case for this is micro frontends um and again i'm not a big fan of micro frontends generally speaking i only
[03:23:17]  use them if you need to but the i don't i'm not a big fan of uh also of like javascript driven micro frontends that much because i i
[03:23:27]  don't think the i don't want the client to have to manage all this stuff and load all that code it's it's expensive it'd be cool it'd be in
[03:23:35]  some cases the client does need to but it'd be better than stitch everything together on the server first and the easiest way to communicate that stuff on the server it happens to be
[03:23:44]  through um html and it also happens to you know now that we have edge and edge workers to do this um it's actually much more viable than it's ever
[03:23:56]  been and the thing is sometimes with micro frontends sometimes quite often um even if you can stream html or send html into html other html
[03:24:08]  um you want these apps to kind of be isolated you want to be able to scope those styles you you don't want like app a ruining the styles of app b or
[03:24:18]  even or its parent or its host or whatever so in a sense this seems like an actual really cool use for uh the shadow dom um as a way of like if you could
[03:24:27]  like render from the server and into the shadow dom obviously i'm big on streaming so that's why the streaming part is interesting because i think if the same group of people like
[03:24:36]  large companies that would want micro frontends should all be streaming too probably because the biggest the reason you do streaming is because you have to uh bring together multiple data services and
[03:24:47]  you want to do it in a performant way where you're not like waiting for the slowest service you want to bring it all in separately so if you're in micro
[03:24:54]  frontend territory you're also probably in streaming territory which means these two things together are big deal and again the reason i know this is because like this is something ebay
[03:25:07]  would be excited about um we were working on solutions like this um and like we basically hit that and we're like oh yeah shout out would be perfect and then we're like
[03:25:15]  you know and then we can even ship the micro frontend container as a web component like it's it makes sense but then it was like no you can't do that so
[03:25:22]  um that i'm pretty excited about this um this obviously brought up some conversation to be fair people you know like uh andrea like who's like he's he's right
[03:25:36]  like he's like wouldn't it be cool if we just like kept with the old spec and didn't bother with all the shadow dom garbage and i get him you know um
[03:25:43]  because it's like if you don't have a need for this stuff you like style scoped probably did it for you um and yeah i mean i i like this conversation
[03:25:55]  could help me reflect a little bit on standards you know the truth of the matter is i would have gone for anything at this point i'm not i i feel like it's
[03:26:02]  tricky because like if i'm not gonna be bothered like being in the standardization meetings like doing like being involved you know making sure standards push through i i can't be too
[03:26:13]  critical of what lands you know i will take whatever the browser vendors and those parties you know decide is useful and i'll use it the best way i can you know when
[03:26:24]  working with solid um and you know other uh open source libraries i do and you know if i decide the way i want to use them is different in the prescribed way then i
[03:26:36] 'm fine with that you know like i can like the declare to shadow dom and still think web components aren't particularly great for most things like so i guess there's an argument
[03:26:45]  we should get more involved and push the web in the right direction um i that's not a hill i'm gonna probably die on i'm just gonna do my best with
[03:26:55]  what what i got but it is interesting because there's definitely people who've worked really hard um you know and try to you know make the web a better place and they hit
[03:27:09]  a lot of friction at times i've seen so many uh proposals by like andrea like things like persistent document fragments um which is something like pretty much every javascript
[03:27:18]  framework would want it's basically a way that you could like move and insert ranges of elements um even after they've been inserted into the dom because the problem with the document fragment
[03:27:29]  is once once you insert a fragment in the dom like they can only live in a single place so you lose all those references so every framework has that handles fragments like like
[03:27:39]  jsx fragments for example have to have their own like bookkeeping thing for to manage that and it'd be like amazing if you could just like do it like have a built
[03:27:48] -in mechanism for it but you know these things are complicated and they take years so yeah i mean i'm just happy to see progress here is i guess what what what
[03:27:59]  my takeaway is um oh is there another i think there's one other thing um yeah i mean i think that i think that was most of what i wanted to say on that
[03:28:14]  standards are tough could you expand on how you would do microprint ends today yeah i ideally what i i like the idea of having multiple like they got to support probably server
[03:28:35]  rendering in these situations and it's still i want would be great as if each service basically exposed html essentially so if if if they needed scripts or they needed you
[03:28:49]  know all that like like this scales from being able to just load javascript into a client-side app or to server rendering and essentially if the back end that does the
[03:29:01]  server rendering can stitch the html then it's it's as easy as just having a communication protocol between them um and and wiring them all together like any other service um
[03:29:11]  i know this doesn't account for stuff like versioning and all the stuff that module federation cares about but realistically if we can ensure that we can stitch on the server
[03:29:20]  and with something like declarative shadow dom even um you know stream into the client with a similar kind of mechanism that's that's what i want to see like it doesn't
[03:29:30]  necessarily need to require a ton of client code to do this i ideally we just have a mechanism to be able to stream html into containers on the server or in
[03:29:43]  the client as the need fit and then these services could be managed thing like i'm not concerned about versioning and javascript and all that stuff i mean those are tricky
[03:29:53]  problems in their own case because there's like a trade-off like and you got to kind of weigh this out and it depends on the type of libraries you use but like
[03:30:05]  when you do things independently you can tree shake much more aggressively because you can basically only code include the code you use once you're sharing stuff you actually have to pull the
[03:30:15]  whole library in and then versioning becomes an interesting problem because like if certain things aren't allowed to be on the same version or are allowed to not be on the same version
[03:30:26]  then you could be calling multiple copies of the full library like i don't have enough personal experience just uh anecdotal stories from attempts and stuff on ebay but this is
[03:30:39]  never a simple problem there's never just like oh yeah this solves it like you usually give up performance somewhere um and one thing that i think is interesting is if you're
[03:30:52]  on the like low js side of things and kind of like ultra tree shaking i think it's possible to get to a point where we can really get down to just shipping the
[03:31:01]  javascript we need for the particular parts and we don't have to worry about stuff like module federation and stuff anymore that's my ideal world and what i consider working
[03:31:10]  towards um but yeah not everyone agrees with that okay hydration i mean each each can each like the hydration is built into the into the html you ship right so like
[03:31:34]  each can hydrate as appropriate i mean micro front ends always have the consideration of how you do communication but it's kind of like the same problem you have with like astro
[03:31:46]  islands or whatnot like that's that's that's what you're talking about yeah i'm talking like front-end so i am mostly thinking of primarily isolated services um yeah
[03:31:55]  i mean this is the whole topic of stuff i'm not going to bring yourself i'm not going to diverge too much off it hosting you okay um okay where are
[03:32:11]  we going here uh yeah so uh yeah so let me now look at some of the bookmarks and this is this is kind of related so let's go to here first
[03:32:24]  um and it's about standardization is hard um last time i talked to luca was actually um at um the conference that shall not be named in london and
[03:32:40]  in london and he he we were just kind of coming off the next 13 announcement when they patched global fetch and you could tell some people on the more standard
[03:32:54]  side were not particularly happy with that um because of the implications and this is i mean this is kind of calling out um the add async local storage basically a node specific
[03:33:11]  api on that next is using not following the standards so to speak to be fair there is a standard in place that is kind of equivalent like not in place but like a
[03:33:23]  proposal for a standard that's kind of equivalent to to this api called like asynx context that's like kind of being pushed forward um but it is interesting the
[03:33:32]  the challenges that i can imagine uh standard probably like winter cg is facing because you have a group you have individuals who care about standards and the progressing um the kind of edge
[03:33:45]  for those who aren't familiar winter cg is like a conglomerate of a bunch of um companies that um provide edge services um and basically players in that and
[03:33:56]  representatives of those companies kind of discussing how they can standardize because the browser has the standards you know like um like uh what keg and you know w3c and all
[03:34:07]  those kind of things and um but these edge run times you know they've been diverging fast so far most of the stuff that's kind of trickled through that i
[03:34:21] 've seen has been kind of like drama about you know company x doesn't want to play ball and whatnot and i don't i don't know enough about the politics of that
[03:34:29]  um to be fair but um it i i think this kind of highlights where that struggle is because there's places where people are trying to get things done and they're like they
[03:34:39] 're like okay we're just going to add it to us and i mean this is something chrome was kind of marked guilty of in the past where they like pushed proposals before
[03:34:47]  they were ready and like implement them in the browser like before they were like agreed upon um and you know we're kind of in that stage i feel like right now on this
[03:34:58]  um so like this is tricky because well next.js now requires that these standard edge runtimes implement no specific features that has no specification right so it's kind of like
[03:35:10]  yeah i mean i haven't looked at this discussion here to be fair but yeah i can i can this this is this is an interesting one when there's you know companies involved
[03:35:28]  that have their own objectives uh i think it'll be interesting to see where this settles i i mean on one hand you can definitely you can definitely feel like hey why
[03:35:39]  like you're if you think you're working towards a common goal and then it's like kind of getting side sweat like a little bit i could see how this could be really
[03:35:48]  challenging anyway um just want to bring this up because i think i think i think this is something to keep up your eye on kind of as things move forward okay what else
[03:35:59]  do i want to talk about um yeah should we talk about compilers yet yeah no let's let's go here remix um dropped version 1.11 which is a pretty
[03:36:12]  big release um if you look at this um they added support for defer a weight which if you're reading behind the like between the lines that's out of order streaming um
[03:36:24]  css modules which you might be like what didn't they support that before and vanilla extract and more thing you gotta remember is remixed isn't using vete there they built
[03:36:34]  their own custom thing on top of es builds so a lot of the kind of stuff you take for granted um of just working they've had the rebuild again especially on the you
[03:36:43]  know like hmr which i guess they haven't got to yet but um or the like kind of like other file side of things stuff like better handling css and
[03:36:53]  whatnot so this is this is big um on the kind of developer experience side but that you can imagine for me this isn't actually what i'm what i'm focusing in on
[03:37:03]  here i am very much interested about uh the this defer a weight thing because i wonder if they if they if they talk about it in here at all we should we should
[03:37:19]  take a look because this is a way of doing streaming with their with their loader pattern which is this idea that um instead of just putting a blocking a weight in their
[03:37:40]  loader they can basically uh we defer we can initiate a streaming response that allows this user to access to resolve data you basically they can await the things that are important to
[03:37:54]  wait for and then the stuff that isn't a and isn't important they can basically start streaming and then fulfill that as it finishes but then they're kind of like in this
[03:38:09]  zone where it's like well what do i do until my stream finishes so they create this await tag which um handles errors and you know you put in like the the thing
[03:38:25]  um sorry is there something wrong with chat no but the reason i want to i want to bring this up is i think this is interesting first of all as many of you
[03:39:04]  know react 18 released in march and it is the one where streaming kind of came out um next was playing with streaming in their release a year ago even before then and this
[03:39:20]  await tag reminds me a little bit out of of await in um in like svelte or marco um but what's really interesting here is there's a suspense boundary and
[03:39:39]  there's an await you can switch back and forth right what else is there you can switch back and forth really easy the i i'm trying to but i've been trying
[03:39:55]  to figure out with this and this maybe this is a bit of you know where you know the concern came out about remix forking react a little bit um um like it
[03:40:04] 's how you land at this solution because technically speaking suspense could handle all of this already without having an awake component but i guess the key here is you have a choice do
[03:40:21]  you you need a way to interact with a promise right so one way is to make it a component so now you have a suspense component which handles loading state and then you
[03:40:32]  have an awake component that handles error boundaries and success cases but yeah it's it's it's an interesting choice because like as i've said i imagine react solution won't
[03:40:50]  look like this or so not react nexus solution won't look look like this so um this is a this is definitely cool take i do got to say i i kind of
[03:41:02]  like this like wait for it don't wait for it thing as an api um would i prefer create resources of course i'd prefer create resource instead but i'm i
[03:41:13]  i mean i'm i'm obviously in a different zone right like once you've decided that you want granular updates then this kind of changes right like because then the data is what
[03:41:25] 's special but that's not how react works so i don't know if that makes sense for react but you understand like um this is kind of the like it's like
[03:41:35]  the flip thing around right in solid the way you write this code would you create two resources and one of them would have defer stream on it and then you just wouldn't have
[03:41:47]  the await here and you just use the resource wherever you used it and suspense would trigger the loading state for you um yeah it's interesting the kit i honestly i i think
[03:42:00]  they spent a lot of time they spent some time on this because they talked about this first back in april i think like the defer and it took uh it took home i
[03:42:11]  took about nine months to get here so um i think i think this is great that remix has this um and because as i said i the first time that i was able
[03:42:23]  to make um streaming work with solid um and solid start uh back in march 2021 um like you could tell right away that it was a game changer um in terms of like you
[03:42:36]  get the you don't you get that kind of feel uh more of like a client-side app like it's quicker to to load the initial page and the data loading in
[03:42:45]  but the data loading in is quicker too because it starts on the server so it's like this this is the entry into kind of like the best of all worlds situation um
[03:42:54]  and the truth of matter is remix the solution is much more complete than next today because they have their mutation story um so i'm i'm i'm interested to see like how
[03:43:04]  this plays out over the next time wow because like my gut feeling here is that this part will be too clunky from nexus perspective and they're going to go with
[03:43:15]  something that feels a lot simpler um when they get here so i think it's going to be it's going to be interesting to kind of compare and contrast when when when we
[03:43:24]  get here but um as i said very awesome to see this um kind of come along as everyone knows i've been championing this for a few years now and to see this
[03:43:34]  like this is probably the most accessible way to do this in the react ecosystem i feel like a lot of the next stuff feels experimental um on the newer stuff where this feels
[03:43:43]  like it's this looks like it's probably ready to go it's not my favorite preferred pattern here but i think like just having this is such a leg up um the
[03:44:04]  thing is i don't they they they didn't i don't know if they had to do that did they have to transfer it like i feel like react should be able to
[03:44:12]  just handle this but maybe maybe they maybe they just serialized it um it serializing promise isn't actually very hard we as i said we do this all the time in
[03:44:23]  solid um like our resource primitive that's just what it does i think like the the the way you do it is you have a promise on the server and you basically serial
[03:44:35] ize some kind of data structure where um you write in a promise that hasn't been resolved and then you put a location of like where the resolve function calls and then when that
[03:44:50]  data streams through on the client it will simply rent because it like the server is doing the rendering it's aware it'll just call that function like it basically will stream out
[03:45:03]  code that will say call the function with the data like like you kind of inline script tags is the way you do this like as the data streams in um into the h
[03:45:15] tml maybe it's a big script tag with like all the json you just like at the end go call the resolve function with this data or the reject if it
[03:45:25] 's an error so like you basically stream script tags over the wire that refer to basically global-esque state on the other side i don't know how hard this is on the
[03:45:35]  the be fair i don't know how hard this is on the react side like i don't know if they built the tools in for that like um in the same way because
[03:45:41]  solid's resources and everyone just uses the resources no one has to think about this it just like you just it just works but i i do actually wonder maybe that's the
[03:45:49]  thing maybe remix had to actually do a lot of specific work to kind of wire that in i'm not sure that's a good question all right let's see if i can
[03:45:59]  if i can grab that yeah let's take a look here all right yeah okay yeah yeah so this is your standard one right yeah yeah set up the object which gives you
[03:46:25]  the place create a placeholder on that global object this is what i just described right with the both resolve and reject functions but with awareness of the key that way you're
[03:46:37]  not going to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to
[03:46:41]  have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have
[03:46:45]  to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to
[03:46:48]  have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to have to like serialize
[03:46:51]  in the js and call that function to resolve the promise yeah this is this is basically what i just described um but i think seeing it in code really helps um it's it
[03:47:01] 's interesting though because like in the as i said in the react ecosystem um like remix basically came up and constructed this mechanism where um because we have a primitive for this i
[03:47:16]  mean you can decide if that's too limiting or not like you basically no one has to ever do this themselves with solid anyways uh to be fair this is similar to with
[03:47:29]  stuff like quick or like this is just the way it works you you kind of like because you're streaming you just keep on appending script tags and html for out
[03:47:37]  of order streaming to swap it into place um as it runs um essentially you just keep on appending these to the document and they kind of like build up the app and
[03:47:46]  what's cool is you say these scripts are all here and present even before react loads so essentially even if like the javascript hasn't loaded for the main application because these
[03:47:59]  all come in through these script tags at inline um like all the out of order streaming and all the data and stuff all kind of get settled um in the background independent
[03:48:08]  of the main bundle loading yeah so anyways yeah it it it's cool to see um this sort of solution built into the framework um and i i i'm i'm hoping
[03:48:31]  as more people adopt these kind of patterns it'll bring more attention or focus to it that's been one of the challenges i've had with solid solid start like you like we
[03:48:43]  we've been working with a lot of these really cool new ideas modern ideas but people it's it's difficult from our community alone to kind of sell the value of it right
[03:48:53]  like like i i barely like i've seen a good hype about this remix deferred thing right people like oh that's really cool bubble and they're talking about it and
[03:49:01]  they're getting excited on twitter um uh solids have had this now for about two years but like no one really cared two years ago so it's like it's it's it
[03:49:13] 's it's it's good to to see the momentum that react based project can bring to the space all right let's move on yes uh this is true um uh there
[03:49:34]  there is like a there's an overhead there's a whole thing about the difference between um writing the code directly in um like javascript or calling json parse on
[03:49:50]  it and like it's like it's it's surprising like the difference there but i think the thing is with sufficiently complex data where you're trying to do deduping it
[03:50:02] 's harder to do one method than the other method so while this is true it's true it there's trade-offs relay yeah not to my knowledge relay is a react
[03:50:23]  specific library okay uh about async uh there is there is an awkward thing that the browser wants your events to be synchronous uh quick does do something like this to be
[03:50:57]  fair um but yeah i i another day okay so let's talk about this uh framework should lean heavily into doing weird stuff with compilers to optimize dx at the cost of
[03:51:12]  devs understanding the layer beneath um it's okay this this i like that ryan asked this question this is an important question i wrote strongly agree but not because i actually
[03:51:23]  completely strongly agree um mostly because i wanted to make sure strongly agree was represented it turns out i had no need or or concerned there um um it it the thing is i
[03:51:43]  think javascript stop doing that i think javascript has long stopped being the thing like what you write is what you get like babble ruined that for us a
[03:52:01]  decade ago or a little less but whatever like 2015 like it's kind of accepted that build tools and all this like even when people talk earlier about like fresh oh can you do
[03:52:12]  no build like fresh isn't really no build like we it's so integrated with our tooling this kind of whole like shift left idea that like we don't even uh we
[03:52:25]  don't like we don't even realize it anymore it's just like ingrained the and for me this can be obvious because you can go build web apps the same way you
[03:52:36]  did in 1995 or whatever today if you want to but no one was going to do that but you can still do it the web works like that but instead we still have
[03:52:45]  the rose colored glasses of the past the truth of the matter though is compilers come with a huge amount of trade-offs and constraints that aren't really well understood but
[03:52:53]  people see maybe this is the hope for the wasm people maybe not but this is a sign more of how people maybe aren't content with the language too to a certain degree
[03:53:06]  i often talk about that the language of javascript is one of the limiting factors from a ui framework standpoint the fact that we don't have reactivity um and
[03:53:14]  like you know all the stuff i was talking about earlier about like if you use random hook like is this a reactive return limitations on typescript like there is a whole number of
[03:53:26]  things that the tooling kind of covers the gaps for that are really important and i think it's it's it's it's interesting because there's so many tensions uh if
[03:53:42]  you look at this conversation one one of the tensions that are very obvious to me right off the bat is like the more opinionated we get the more restrictive we get on other
[03:53:50]  types of innovation um but then also the more helpful it can be for people so we have to be careful to go too far along a path because of the convenience factor or
[03:54:00]  we pigeonhole ourselves and that makes when things do change that much rougher and the thing with compilers is you can have varying degrees of success depending on what your objectives
[03:54:16]  are like i sometimes talk about like people someone mentioned earlier are you dissing svelte or something i i talk about svelte's limitations but those limitations are a
[03:54:27]  good thing from the perspective of svelte because that's why svelte is so clean and so nice to work with because it's not trying to solve stuff that's
[03:54:34]  with outside of its range to solve with a compiler like the problem is like we kind of want it all and that's where things get messy the thing is compilations
[03:54:57]  everywhere already right like i was talking about babel but like i know some people like in their you know in your head you go okay well jsx is just a bunch of
[03:55:07]  function calls but like if you watch the rest of the stream you kind of understand like how absurdly crazy or complex that gets and like this is definitely something that is on
[03:55:25]  a range but what i want to one of the kind of get there is that i feel it's our ambition that is actually like the wall like like where we need to
[03:55:37]  decide in terms of how far we take it because uh ryan does go on to i think this came up because he saw solid server um actions and he saw that tan stack
[03:55:49]  uh router was toying with it too and admittedly this approach came about um because i was really into the rpc thing um even before getting into the remix kind
[03:56:04]  of loader pattern and then when i saw the remix thing it was kind of like can we merge these together and that's how we ended up with that and the fact that
[03:56:14]  it was composable and it just worked made it really attractive um and because different frameworks have different needs you know around data loading like i've always said you know it's it
[03:56:22]  you could make solid work and remix but it wouldn't be optimal for solid kind of like the topic of the stream today um when you leave those tools to the end user
[03:56:34]  you need a way of packaging them up and primitives are a good way of doing that so hence a magic uh rpc function definitely it is a step here right because
[03:56:50]  he's talking about a range here he said in remix we treat shake the code some server code out svelte you know you know you suddenly get a you know values
[03:56:58]  become some observable object that trigger rendering side effects breaks js um semantics and then server action solid parse asts and remove component code into black box server um endpoints yeah
[03:57:11]  i and he he's like mostly right here but like it depends on what that means to you on the details like in in the case of solids uh server actions we we
[03:57:24]  just you we just hoist the font the function out of the component we just kind of like move it from the in the component to outside the component and call on the server
[03:57:37]  compilation we we we give it an id and go register id this function and that register creates an endpoint at runtime and on the client we just go um create fetcher that
[03:57:51]  id which it's basically a url that id so like essentially it it does do that but like from like code manipulation standpoint it's a matter of moving a block of code
[03:58:06]  out of out of the function and then basically calling a register function on it to be fair like to do tree shaking like remix does um you end up the typical pattern because
[03:58:19]  you can't have a like remix case is actually not too bad because they have clear server and client device but like for isomorphic stuff like solids route data the the trick
[03:58:27]  is you actually create a virtual module and then import and if remix has any client side stuff that runs off the exports they do this as well you create a virtual model that
[03:58:38]  imports certain fields in for that module and kind of creates a new module out of it because you can't split a module like a single file across multiple chunks the way most bund
[03:58:48] lers work so there's this trick where you can kind of like put a facade in front of it to kind of fool it and break it out and these are these are all
[03:58:57]  those kind of tricks you you you learn when you use the bundlers um so like in a sense like solids equivalent to remix's uh loader type tree shaking approach also
[03:59:08]  requires a little knowledge or finesse it doesn't really impact the end user though so i think i think that that's a that's a good point but you still have to
[03:59:16]  be like okay this is server code mentally uh where solids you know server actions you have to be like oh this is server code code which means it's it doesn't actually
[03:59:25]  live in this component scope and then in svelte's case you have to be like even though i'm assigning this javascript variable it's not it's doing some
[03:59:35]  stuff in the background it's gonna call set state for you and that stuff like when you look at any of these solutions for the most part you can explain them in a simpler
[03:59:48]  way than what i just had to explain to show how to get around reacts rendering so like it's hard when you're sitting in my position to talk about that kind of
[03:59:58]  complexity but i think it definitely does have a mental burden when you consider things like server components you know and why they have different rules and client components and and you look at like
[04:00:07]  how their compilation must be different and like or at least how their bundling must be different like this stuff is kind of everywhere um right so like this is a slippery scale
[04:00:23]  often one of the things that you know i talked about with solid and one of the like really refreshing things is when people understand solids jsx compilation they go wow this is so
[04:00:34]  much simpler than react i can just picture it i'm just cloning a template like making some dom elements and then writing create effect around stuff that's a compiler doing that
[04:00:43]  and in a sense that compilation is a little bit more complicated than just calling a bunch of function calls like just calling like the hyperscript function but the overall model because of
[04:00:55]  the what the compiler's done makes it just so much simpler to understand you just go oh yeah like this is why people feel you know confidence a lot of times when they work
[04:01:05]  with the solid stuff because they're just like i picture i could have written this myself like this is like even if the compilation for the jsx in react is slightly simpler
[04:01:16]  it's actually a bigger hurdle to actually like understand how that works right don't call yourself stupid but i i think i think this is this is the thing to kind of
[04:01:36]  understand about this that it is very much a tool ah man i yeah the the the just javascript thing is garbage well or it is or it's the most accurate thing
[04:01:51]  we could just say because just because this is what javascript is javascript is not just some interpreted language it is a whole set of tools and a whole set of
[04:02:02]  all of this stuff javascript stop being what javascript originally was years ago and i guess the only difference is some people have figured that out and other people haven
[04:02:13] 't i love this yeah dom came in you see what i'm cooking up it's a game changer you know makes a react solid and spell yeah i've seen what he's
[04:02:28]  working on every time he shows it to me i'm just like man uh like it it it looks i so strongly agree it looks a lot it it looks a lot like
[04:02:41]  solid if you decided to try and partially compile the reactivity um which i think is a really interesting direction it's it's it's it's it's he's doing it
[04:02:49]  by doing cross file compilation like marco like looking cross file it's it's it's yeah it's kind of like he mentions it like this but in my head it
[04:03:00] 's more like if you took kind of more similar to like if you took solid and applied marco type thinking to it um but yeah i i think there's a lot
[04:03:13]  of cool projects on on this side on the compilation um there's tremendous value knowing one two layers beneath what you're using and i agree with this this is why like i
[04:03:27]  don't feel that threatened by solids compilation but why i start getting more worried when i get into a zone like when i'm trying to think about resumability right like even
[04:03:37]  though i think it's easy to get tripped up on stuff like server actions it's somewhat easy to picture that you can your loaders even like they're only a
[04:03:46]  step away from each other you can sometimes easy to go like okay i'm kind of registering this function that gets called on the server or something like you you can kind of picture
[04:03:57]  that when you start like more significantly rewriting and breaking apart people's code in a way that the execution isn't clear to them like by just looking at it um you
[04:04:08]  do get into the zone this is where you kind of it's this is why things change over time like maybe it's better if our authoring can reflect closer to what our
[04:04:20]  compilation is right like if we really want resumability instead of having a compiler undo the closures maybe we have to author in a way that there aren't closures like
[04:04:30]  maybe that's the step to get to that next the next place because um i do agree that that distance and you often see it when you hit escape hatches you can get
[04:04:42]  really good with the prime experience where you it's a good abstraction you never like have to get out of it but once you hit the escape hatches that depth is very obvious
[04:04:51]  and i think any experienced dev someone like brian florence has been doing this for years they value that as a more senior developer they they go like look if my abstraction
[04:05:01]  is getting too far from my underlying mental model i have a problem here and i think i think i think here it's felt crew where are you at at this point we
[04:05:22] 're arguably the least weird compiler uh and and and i when i saw this i was like it depends on what you define as weird from some people's perspective svelte
[04:05:38]  is the most offensive compiler because it actually changes like what things mean that already have meaning but you know it's different than like being like hey i'm denoting a special syntax
[04:05:51]  for this to a certain degree you like the fact that a let variable is a reactive variable is like like breaking the rules right off like the fact that someone could call that
[04:06:05]  just javascript is an is an indicator of in one hand it being offensive on the other hand svelte's approach is is very not leaky like they have one
[04:06:19]  of the like tightest abstractions so it's like yeah i mean if you hit a problem i imagine it's harder to work around in a certain way but like on
[04:06:31]  the other hand it's like from people on the outside it probably doesn't feel weird at all because they've done such a good job of patching the holes right so
[04:06:45]  yeah yeah this is a good thing in kind of defense of server functions yeah i i i think i'm actually very tired of frameworks not finding ways to make the custom shit
[04:07:04]  as generic primitive when doing so would be so trivial just write a spec for yourself think about what it'd take to make that generic polish and stick to it i like this i
[04:07:12]  think this might be it's funny because i think this might be something that solid could be really good at we really focus on creating those primitives um i don't like
[04:07:24]  getting into standardization to be fair but i this is this is a design space that we think about a lot um but it's interesting because you know react forget compiler comes
[04:07:41]  in i jared compiler is good oh man this this this is this this was this is a very relevant topic and maybe doesn't have as many views as it should have um
[04:07:58]  because i like i'm gonna get back to that one the quick guys are asking this too they're like what would you think if we use this kind of format like what
[04:08:09]  about sfc and we get this kind of feedback all the time in solid where people like oh i you know because some people like a single file components other people don't
[04:08:17]  and and like it's not so cut and dry right like i might i'm actually interested in sscs again but only but for slightly different reason i actually think that
[04:08:33]  no you bastard interesting interesting 65 percent huh i see the i think it's dangerous to offer too many syntaxes for the same thing i think that i think that is one
[04:09:00]  of the worst things you can do because you you produce a lot of confusion on the other hand i can see why it's flexible but like you are taking on so much if
[04:09:08]  you go that way but i think f sfc is um it's something that you can if there's a reason to do it right um and i go off about
[04:09:24]  this whole thing that i've been talking about about i think s i think the key to sfc is a server first mentality this whole like what starts as html
[04:09:35]  stays at html so i don't actually think it's a good pride you know huge win for client side stuff where there's heavy componentization but like i definitely see
[04:09:46]  a value if you can just like open up a page and it feels like a page so i think this is interesting these results were not what i expected probably not what ste
[04:09:54] ve expected but i think because of how server oriented quick is maybe trying to look like react isn't the best move for them and i'm really glad that that quick is
[04:10:08]  asking these sort of questions because my impression was you know that they're kind of like okay i'm going to meet the standard i'm going to be as good as a static
[04:10:17]  quote and do something better but i'm not sure that's been as winning for them as they've they've hoped so they're actually if you're getting back to here and
[04:10:26]  you're rethinking the fundamentals i think that's good because you go look if i have resumability and i i'm building an app and i i'm server focused
[04:10:35]  what do i want that experience to be forget everything else just start from that baseline and i i wonder if it takes you to a different place it's interesting though because there's
[04:10:46]  a there's a fad fashion element of this that like is really hard because you look you could say that about marco and you know there's been challenges there uh
[04:10:58]  on marco syntax even though technically speaking it could be just the right answer for the server so yeah i'm glad this conversation's happening and as i said yeah steve
[04:11:27] 's been asking a bit of yeah and honestly i've been asking these questions myself i i've been i it's kind of come up on stream when i talk about battling the
[04:11:36]  perception of complexity in server components and partial hydrated solutions and there's a temptation here especially when you start seeing how successful astro has been at doing that to be fair again it
[04:11:50] 's about ambition quick is more ambitious than astro is currently um so it might not fit as well but i i i think this is the right kind of thing to be
[04:12:00]  asking and thinking about which takes me to this one thank you antonio for this one he's he's majorly like he's he's a he's a what
[04:12:21]  we consider very much felt supporter but he made this meme and it's funny because i was talking to someone who jess like i said yes from view um about like she
[04:12:35]  asked if i'd seen this mechanism and how it had um runtime uh this actually has runtime type checking built into it it's not just the typescript it's like they they
[04:12:47]  do macro stuff with their compiler um but this is view here and then there's like why can't you just export let size number equals one right that's the the thing
[04:13:00]  and someone's like well it's one so you don't even actually have to put the number in it's inferred via typescript um i i first of all these are
[04:13:15]  not the same thing but i i i found this this is really in line with our compiler conversation that we've been happening today because i talked about svelte doesn't
[04:13:33]  care like some people look at this and they're like export let like this is wrong from a javascript perspective like you shouldn't do this but it lets felt do this
[04:13:46]  do you know what i mean views like the other side where they um create the composition api if you use it with script or if you use it with like the setup
[04:14:01]  function approach it's kind of feels like solid you there there's this boundary between setup and the jsx or the template so like they're two separate parts so like you don
[04:14:11] 't get that like you have to we can like you know how in solid you can't destructure and in view you have similar concerns but the problem is you have to actually
[04:14:19]  it's kind of like our data functions you have to actually package the stuff coming out the other side um so it's not as simple as just like referencing them directly which
[04:14:26]  means you actually have a second location to lose reactivity um but like generally feeling you get that so they they introduced it and then they they noticed that like people like the options
[04:14:37]  api were like wow this is kind of complex there's too much going on and it's felt is just killing it with their like let like you know what i mean
[04:14:44]  like look how simple svelte is so they they come up with script setup and ref sugar and like all these new syntaxes to you know simplify things in a sense let
[04:14:56]  you type less use variables directly instead of appending with dot value and but then now you don't have a props object that you'd like have if you had a setup function
[04:15:07]  so now you have like these are kind of like solid in a sense uh a bit because like you know we have split props and merge props um but like from the type
[04:15:17]  script side we don't have to worry about it because we literally have a component so we can just like put the types on the component function so like this is why they included
[04:15:31]  the one so they could do emerge props essentially that's what with defaults is but then this is needed to do typescript and do runtime type checking and so as i
[04:15:40]  said it's not a fair comparison but like the reason this sits with me is because it it kind of in my mind shows where kind of view is at where they are also
[04:15:52]  creating their own language because of the shortfalls of what they can do with javascript but they're not willing to make the the the you know trade-offs that
[04:16:01]  svelte has made to just like streamline it and you end up here and it's tricky this is like the place that i'm most afraid of um because it's
[04:16:19]  like explicit and good in one way but it's also like if your goal was this you've failed and if your goal's not this then like why are you introducing the new
[04:16:38]  like this new these new language pieces like why don't you just stick stick with with javascript type stuff this is javascript this exact example but i'm just
[04:16:48]  putting in the bigger picture of the solution and but like a lot of this comes because of getting trying to get typescript support right whereas like if you just use javascript
[04:16:58]  to get it for free where with these sfc's you got to do a little bit more work and i think it's hard because sometimes compromising to get the best
[04:17:10]  of both worlds ends up missing certain marks like you make certain trade-offs and this is this is always interesting for me because you you you start seeing the what the different
[04:17:28]  frameworks or different approaches value from from these kind of choices and it's yeah it's it it's it's going to be interesting to see where this goes with view because their
[04:17:42]  trajectory is very much on like seems to be like adopt everything anyone else does and can it make it the view way um and try and find ways to make things easier by
[04:17:57]  cutting down do shorthands on syntax or you know little compiler tricks here and there and i don't know i i mean maybe maybe view is picking up the angular legacy in
[04:18:13]  that side like maybe that's their position in the world like it it adds a complexity of concept which is where like like like there's more things you have to remember i
[04:18:23]  i think some uh who was it maple made a chart and i should i should have included it here maple um and yeah this one it the idea was that when you're
[04:18:47]  less experienced you spend more time googling and then like as you get more experience you spend less time googling but it never goes away and i don't i don't
[04:19:06]  i don't necessarily agree with this take but it it actually brings up a good conversation topic right i i said something along the lines i feel i've forgotten more than i remember
[04:19:16]  at this point i rely on looking things up a lot the key is to know what you're looking for right it's all about indexing the information rather than having those specific
[04:19:23]  details at the top of your mind um but i said it very much to biases my preferences because i care less if a concept takes more to grasp if it reduces that like
[04:19:33]  surface of like number of ideas like like i'd rather have one way to do things than have four different shortcuts and i think this is this is one of those kind of like
[04:19:45]  uh tricks right like the kind of like trickiness and finding balance on things because there's the convenience factor of certain decisions versus like the amount of weight you have to carry
[04:20:06]  to like maintain that as you move into the future like the more baggage so like i i just said i generally like to google less i like to know the concepts if i
[04:20:21]  can't remember the name of an api or something then i'll look it up having i don't want to be looking that up too often i don't want to have
[04:20:30]  too many apis to look up um it's funny like usually if there's one way to do something you're more likely to remember that one thing i feel like so yeah
[04:20:41]  this this is only somewhat relates i think a few other people were saying like it's reversed knowledge is fractal the more you know the the more you know you don't
[04:20:49]  know the more things you're able to formulate a question about for google that's true um but yeah it's like keep it one dimensional multi-dimensional i don't google how
[04:21:02]  to do stuff and react as much more but i've been googling how to yeah sure anyway um it's just food for thought and i think it relates to the compiler
[04:21:13]  topic reasonably because you can you can get it's it's like that meme with the with the bell curve like like you can say like on one side you have svelte
[04:21:30]  and it's like like i i don't know if i should do this but you you know you know what i'm saying like you could you could be like the bell
[04:21:40]  curve one right with the with the where is it the can i get do i get dotted lines here no i ain't got any lines to get dotted lines yeah where i'm
[04:21:51]  like this is like really bad version of it where you do you know where there's like the the guy with the hoodie and the and the guy that looks like too smart
[04:22:03]  and then like everyone else sweating here like you could kind of from a certain perspective say like um just javascript right and then like on this side be like um uh
[04:22:35]  how did i put it like minimal leaking abstraction and then like everyone else in the like like struggling somewhere in the middle like i'm sorry i'm this isn't great but
[04:23:01]  like i'm just trying to get at like the fact that like sometimes the simplicity is also really good from this perspective as well and it's actually us all trying to like
[04:23:15]  overdo it in the middle you know i guess i guess if if someone was to try and meme this they would go they'd go like this right like like that that
[04:23:32]  that's that that's that's sort of what i'm i'm getting at if you wanted to compare this to the to the to the to this to the meme there right
[04:23:43]  um sorry where is it the bookmarks come on don't give me advertisements oh is that twitter blue i'm like it's a b it must be bookmarks now you
[04:23:58]  know they they you know going back to this stupid kind of thing like i think the problem is reality often actually ends up more in this zone you can be too clever when
[04:24:12]  you're over here but anyway just this this is this is a tricky balance um view does like to tend to sit in the middle on these conditions um so yeah it like that
[04:24:31] 's like that's kind of where you end up sometimes when you're in the middle anyway um i think that's it for this week in javascript i don't
[04:24:47]  know if there's anything else that happened this week that people found interesting but um that's mostly what i wanted to to cover give myself a little drink of water and i
[04:25:08]  hope everyone realizes when i say this kind of stuff or even draw that silly diagram i'm not saying like um view is bad in any sort of way it's like it's
[04:25:17]  like a spectrum and like like and along a specific axes that's what i'm getting at because the thing that no one ever talks about in this in this curve is that
[04:25:32]  like 80 of the the curve is under this thing or 60 what is that 66 percent or whatever it's it's like a stupid amount of the is underneath the middle of the
[04:25:42]  curve um compared to the rest of it so like this is actually maybe where you want to aim for if you're if you're actually trying to gain adoption or get people
[04:25:56]  so yeah anyway all right as no thank you yeah i'm looking forward to as no um just keep in mind that the creator is a university student or who's in school
[04:26:16]  so we'll have to see when and where that goes but a lot of potential there anyway yeah let's i think we can call it a stream had a lot of a lot
[04:26:28]  of people come in today and i quite enjoyed talking about the work with react and solid um i think we're gonna see more of it um when i get a chance to
[04:26:40]  standardize maybe we can make a nice beat plugin talk to those astro guys to find out what their secret is and uh we can uh we can uh you know see where
[04:26:52]  we can take it okay the beta dropped today when when the actual typescript 5.0 comes out i we can talk about it i need the beta to drop and people to
[04:27:03]  try it and write about it so that i can like repackage those and put it out because honestly when typescript releases a new feature i have no clue what they
[04:27:11] 're talking about like i just don't understand typescript someone else has to like use it for you know a couple months and like distill it before i understand what anyone's talking
[04:27:19]  about in typescript all right anyways have a good evening you all um and good weekend and uh see you all next week all right