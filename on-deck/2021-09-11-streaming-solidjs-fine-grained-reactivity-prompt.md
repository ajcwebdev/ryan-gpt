---
showLink: "https://www.youtube.com/watch?v=b9e7VXs_A4s"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS: Fine-Grained Reactivity"
description: ""
publishDate: "2021-09-11"
coverImage: "https://i.ytimg.com/vi/b9e7VXs_A4s/hqdefault.jpg?v=613bfece"
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

    ### 00:00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  All right. Hello. Looks like I'm live now. So today I thought it would be fun to talk a little bit about fine-grained reactivity and react
[00:00:18] ivity in general. Give it a second here. See if fine-grained reactivity. I've got the echo coming through here. Give it a second here.
[00:00:32]  Hi from New Zealand. Yeah. I'm pretty new to doing the streaming setup. But yeah, okay. I see the comments from YouTube coming right into my streaming setup.
[00:00:41]  Hi from New Zealand. Yeah. Okay. But I have an infant loop going, so I got to close this window. Okay. Perfect. Don't mind me in the
[00:00:49]  hiccups. Just trying to get this figured out here. Okay. Cool. All right. All right. Perfect. Looks like we're set up. So today I
[00:01:03]  thought it'd be kind of fun to talk about reactivity in general. I'm going to probably just go over a lot of the content that is in my article series around
[00:01:15]  reactivity. Kind of attack this from a really wide scope. And then, you know, as it applies to, you know, common JavaScript frameworks and as we go
[00:01:24] . So I'm going to share my screen because it's easier to talk to that. Give me a second. Yeah. But basically, let me kind of look this
[00:01:37]  up. First question you might be asking yourself is, you know, I'm going to start right at the beginning. What is reactivity? And I've addressed that
[00:01:44]  a few times in a few of my articles. At a high level, you know, you might be thinking something like spreadsheets or like maybe streams. These are the things
[00:01:58]  that we often hear people talk about when talk about reactivity. And I think they're pretty good, rough measurement. But to me, it's always been about declar
[00:02:08] ative programming. There's a reason we want to use it in our UI is because basically we get to describe the behavior once and then it just executes itself. You find
[00:02:19]  with a lot of complicated systems, it's hard to kind of keep track of, you know, imperative logic in your head. So for like, if you step back
[00:02:27]  and look at the whole thing systematically, kind of what you want to do is just kind of set up a bunch of rules and then just have it play out. And that
[00:02:34] 's, that's what reactivity is. It's kind of, it's a, it's declarative programming, essentially, that's just kind of at the fringe of
[00:02:42] , of where I should put it at the fringe of where kind of declarative meets imperative coding. What I find it kind of interesting or kind of funny about that,
[00:02:55]  though, is that, generally speaking, when react, for example, was first introduced, I remember, it was actually the thumbnail from the one of the earlier talk videos that
[00:03:08]  they were like, ideally, everything re renders again. And that's very much in contrast of what I'm saying, reactivity is, and why you'd want
[00:03:18]  to react, something that something to be reactive. And it's interesting, I think, because it's a matter of scale or scope. When you first look, look at
[00:03:29]  reactivity, you are sorry, when you first look at something, you might be taking very wide eyed view. And that's where, you know, reactivity is
[00:03:40]  beneficial when you can look at things from a systems point of view. But when you look at things from a from more narrow point of view, sometimes you just want that
[00:03:47]  imperative code, you want to see it re render. And I think we have this kind of ebb and flow where it kind of goes back and forth between these paradig
[00:03:53] ms. And it's kind of interesting to see where they meet in the middle, which happens a lot in, you know, UI development, right, this, this
[00:04:02]  goes beyond just JavaScript, right? These ideas of reactivity have been going on for a long time. Programming, as I said, spreadsheets, near in the late
[00:04:12]  60s, all the way through digital circuit design, and like BHDL, like hardware descriptive design, these are systems that you have a lot of synchronization is really
[00:04:23]  basically the point. So being able to describe it in a way where you don't have to worry about how to synchronize is paramount. Now, I'm talking
[00:04:32]  really out there kind of more in the theoretical academic side of things. So probably better to kind of get into something a little bit more concrete. So yeah, I'm just
[00:04:42]  going to kind of start with some of these examples and stuff from this article that I wrote several months back. And this is kind of, for me, I feel like
[00:04:52]  it's a good intro to it. If people have any questions on the on the way, I'll check periodically, and we can kind of talk to that. But I
[00:05:00] 'm just going to kind of start at the beginning. And really, this whole thing is based on, I'd say, the idea of primitives, and these primitive
[00:05:14]  pieces are really are almost like a language. And you find this almost in every JavaScript framework. Actually, I might pull up one of my older articles here. I think
[00:05:30]  fine green reactivity. It's a problem. I've written on the subject so many times now, that I probably want to actually that I probably have the examples better in
[00:05:44]  different places. But basically, there's three concepts you have to learn when you learn reactivity. And I often say, it's signals, derivations and reactions.
[00:06:00]  And more or less, you see them throughout all the JavaScript frameworks in a certain degree, even the non react, like the non like classic reactive ones like react itself. This
[00:06:16]  is one of my favorite little code snippet examples. Hopefully, you can see it. I'll just blow that up a little bit. So you can see it is this
[00:06:25]  is how to create a signal in five different libraries or frameworks. Right? I've knockout JS, I view, I've solid, I have mob x, and
[00:06:39]  I have react. So this is basically our baseline primitive. And even though they all take different forms, they are more or less the same thing. All these frameworks basically use
[00:06:54]  the same language that is to define the UIs. And that's no coincidence. A signal, which is our base primitive, is more or less just a value that
[00:07:08]  can be intercepted both on accessing its value, and when setting its value, it's a getter and setter. In this example here, I'm showing observable
[00:07:20] , but this is one of the oldest one, knockout. Basically, what they used to do is return a function, and if you execute the function with no arguments
[00:07:27] , you would get the value. If you passed a single argument to it, you would set the value. This is a little bit outdated. This is from the view
[00:07:36] RFC. Now they call this a ref, not a value, but originally they called it value. But the same idea for view3, ref. Basically, you pass
[00:07:45]  an initial value to the ref, you get this variable back. And then that dot value uses a getter. So it's basically a function call to read the value
[00:07:54]  and then uses a setter on value to set the value. Solid uses the tuples like react. Same idea again, right? We set our value, get the function
[00:08:05]  that gets and the set that sets the value. I was very -- I was actually going to go with knockout style or something slightly different, where maybe we had the
[00:08:18]  function be the get and then we called a dot set on it. But thankfully, before Solid got too far along, React hooks came out and that's where I got the
[00:08:29]  idea of using the tuples. Before that, I was -- our signals basically looked like knockout signals. But essentially, it's all the same thing. MobX has
[00:08:40]  another slightly different version. They're using a proxy here. They also have something called a boxed observable, which is the same as a signal. And they use
[00:08:49]  a dot get and a dot set. It's just more often that you see people use the proxy in MobX. So I used it in this example. And finally,
[00:08:57]  React use state. It doesn't intercept the get. But it's still this kind of base language primitive where we have this idea of an atomic value. And, you know
[00:09:09] , I can kind of can carry this on even to other frameworks, right? I'm like, if we look at signals, here's the same kind of similar example
[00:09:20]  here, there's view. Svelte. Svelte, in a sense, has the same concept. It's not implemented the same. But you still have this
[00:09:32]  idea of this atomic value. They just override all their let variables to be this. And their compiler hides the call of the setter. But if you ever look at
[00:09:42]  compiled Svelte code, it is definitely there, right? It calls invalidate, basically calls a set state function and passes the five assignment along. So what I'm
[00:09:56]  getting at is this concept of a simple, stateful primitive is common language across all the frameworks. Oh, hey, from Seattle, I'm going to only be checking
[00:10:10]  the comments periodically. So, you know, when I find natural breaks, but thanks for joining the stream. All right. So I'm going to bounce a bit between
[00:10:22]  a few different articles because, you know, I want to give focus a little bit more in depth than what we're used to when talking about this. So let's
[00:10:35]  just focus on these signals, as I'm calling them for a moment here. They're the most basic thing and they're the most fundamental thing. And I like this example
[00:10:45]  from the build your own here. Like for most people, for the mental model to get behind it, like this is all this little code snippet here is all you really
[00:10:55]  need to think about to understand what a signal is at a real core level. Right. There is more details on how the tracking works and we'll get into that in
[00:11:03]  a moment. But essentially, you know, I'm actually just using closures. I like how elegant this looks like. Like a signal is not that different than like a
[00:11:16]  promise, you know, a very simple primitive that has, you know, while the signature isn't necessarily set as I've showed, like every firm has their own version
[00:11:26]  of it. It still has the same characteristics of being able to intercept the get in the set. Before getting too far into how the subscriptions work, though, let's just
[00:11:41]  look at an example of signals here a little bit more concrete. I imagine some of you guys have probably read this article before, but I'm just going to rehash this
[00:11:50]  for anyone who hasn't seen this before. Essentially. Signals on their own don't really tell us very much, mostly that. Sure, you can set a value
[00:12:04]  and read that value, but you can do that with a normal variable who cares. Right. The real key here is that the fact that there are both the observable thing
[00:12:15]  and the observer. And essentially, I'm going to call them reactions here. They've gone by different terms and different frameworks. MobX calls it auto run. V
[00:12:27] ue calls it watches. NACO calls it computed. Essentially, they all have a different form of it. It's funny. I actually changed how I explained this
[00:12:41]  concept over time. I've kind of got it a little tighter. But if you look at it, they're all the same. Other than React requiring the dependency array
[00:12:52]  because it doesn't do tracking in all the frameworks, except even Svelte to a degree. They don't have the function wrapper. It's literally pass a function to
[00:13:06]  whatever this primitive is that we use to create our reactions. The function is key. It's important because we need to control the scope of that execution. What I mean
[00:13:20]  by that is like when the function executes, we need to actually have set some global context to keep track of what actually gets run under that function. And yeah,
[00:13:35]  so I didn't actually even use a Svelte example, but in Svelte, it's the dollar sign colon console log to basically have the exact same concept here
[00:13:45] . But I mean, we've kind of seen this before, hopefully, especially if you used any of these libraries, this might look kind of familiar to you. It isn
[00:13:58] 't that magical. If we set some piece of state data, then we console log that value. Essentially, whenever we change that state, this effect knows to rerun
[00:14:10]  or this reaction, whatever you want to call it. So it doesn't matter the framework you have, right? Essentially, you can see here, step one, create signals
[00:14:19] . Two, create the reaction like we expect. The reaction runs right away, console logging the count. Then when we set the update, it runs away. Set the update
[00:14:26] , it runs again. Nothing too unexpected if you've seen these kind of libraries before. But I'm going to go a little bit further here than that. I'm
[00:14:39]  going to take a moment here. This is probably going to be one of the heavier parts of the stream here and actually break down what is happening between that reaction and signal interaction
[00:14:54] , right? Essentially, I've given more simple versions of this. In my React Finland talk, I super simplified this. The difference is this version that I'm going
[00:15:06]  to show you right now actually works. This is about as minimal of a reproduction of a React system you can come up with. It's about 54 lines of code.
[00:15:17]  Essentially, if we, our signals hold a list of subscriptions, okay? I'm going to represent them here as a set. Internally, different systems use different things for
[00:15:29]  better memory allocation considerations. But essentially, the easiest thing you can do is pretend that each signal has a set of subscriptions. The signal is actually the event emitter.
[00:15:39]  If you're using something like Node, you might be familiar with it. It's actually the thing that gets subscribed to. The way this works is that direction. Essentially,
[00:15:49]  it's event emitter, the signal that gets subscribed to. It kind of feels opposite sometimes because the reactions tend to wrap the signal execution, sort of inverts it
[00:16:00] , but it is actually the signals that trigger all the executions, so to speak. That inversion is important in terms of like the spreadsheet mentality because essentially, it's the
[00:16:14]  set once and forget mentality, but it's actually the signals that are driving all changes. Essentially, we have this global context. I call it context here, but really
[00:16:28]  it's a stack of running effects or computations. We'll talk about derivations later, which are also a different type of computation, but essentially the observers. This is
[00:16:41]  a stack here of what the current observers are. So when you read any signal, it's going to ask like what's at the top of the stack? Is there
[00:16:52]  something listening right now? This stack is global. It's like a single singleton. This is why when you have multiple versions of solid, nothing works properly. Usually it
[00:17:00] 's because your signals you write on your components and then the effects being created by the compiler aren't matching, so they're not talking to each other. Generally speaking,
[00:17:13]  there can be only one, like the Highlander. Essentially, we look at this context, look at the end of the list and go, "Hey, what's
[00:17:23]  listening?" It's only the end of the list. In solid, I don't actually use a stack to represent this, but it's important to note that it's only
[00:17:32]  the closest listener. This is true of MobX or any of these reactive systems. It's only the closest wrapped instance that it actually is being subscribed to. And then
[00:17:44]  if something is listening, so you ran that create effect and pretend it's in this context stack, then you'll set up the subscriptions. And the way this works is this
[00:17:57]  is kind of over simplification, but we actually add it on both sides. And the reason this is because we have to clean up after ourselves. It's a little
[00:18:09]  bit unfortunate because this is where a lot of the bookkeeping happens, but because whenever an effect reruns, it needs to start again with its subscriptions. We build them dynamically
[00:18:20] . We actually have to not only keep track of which subscriptions are on the signal, like what things subscribe to it, but the effect also has to know which signals it
[00:18:30] 's subscribe to so it can unsubscribe itself. So there is a little bit of a dance here. So that's why I kind of abstracted up the subscribe function
[00:18:38]  that I'm showing here because essentially this running thing, which is the current, say, running reaction or effect, basically gets added to the subscriptions of the signal. And then
[00:18:50]  it adds the signal. In this case, I had the subscriptions. It was just a shortcut to unsubscribe itself, but it basically adds a signal to itself. And
[00:19:03]  then the rest of the same, it just returns the value. But essentially, if nothing is listening, nothing gets subscribed. So if you're just accessing signals in a non
[00:19:12] -tracking context, like there's nothing pushed onto the stack, they just access a value. And this is one of the big differences between signals and streams. If you
[00:19:22] 've ever used something like RxJS before, because you can't pull for the value in with like, you can use something called behavior or behavior subject. But
[00:19:32]  generally speaking, a standard observable in Rx is only push. Like it calls you, you don't get the pull for it. And the difference between these fine-
[00:19:39] grained systems and why they work really nice for synchronization and UI is you can always read the value. It feels, even though you're describing a bunch of behaviors
[00:19:50] , like that's a whole true, like if you say A equals B plus C, essentially, you are actually saying that A will equal B plus C no matter when B
[00:20:00]  or C changes, kind of that mentality. Even though it's working like that, essentially the, where was I going with this, essentially the subscriptions are handling it.
[00:20:19]  Sorry, I kind of lost my train of thought there for a second. Yeah, essentially because it's pull-based, you know, like the expression there, like the
[00:20:37]  B plus C is very kind of imperative. It's just like normal logic. You don't have to worry about piping things like streams. So this inversion is really,
[00:20:45]  really key is, is mostly what I was trying to get at. Essentially it's, it's, it's, it's almost backwards from streams, this ability to pull
[00:20:57]  it. But as I said, it means you can just write code the way you would normally write code, which is quite convenient. On the right side, we are
[00:21:07]  essentially, it's a lot simpler because we just know that, hey, value is updated. Get the subscriptions, which are these reactions. I just run them, essentially.
[00:21:23]  I'm cloning the list here. There's a reason for this. If you don't clone that list, you get, you end up with an infinite loop sometimes
[00:21:30]  because if the subscription would cause, um, an update that would, it could keep on pushing itself onto the loop and the for loop actually would never end. Um, so
[00:21:42] , I mean, in a sense, this is a form of arbitrary batching, but just kind of wanted to, it's not an important detail here. Essentially it
[00:21:51] 's just, it's just an implementation piece, but just to understand this is the fundamental pieces, this on its own doesn't make much sense. So what I'm actually
[00:21:59]  going to do here, I actually show the other side on the reaction side, but what I want to do actually is I'm going to, I'm going to open this
[00:22:07]  in code sandbox so we can actually see what we're dealing with. Cause we, we have this example that I showed before with the log, but what I did was I
[00:22:14]  made, um, that simple reactive system all in kind of one file and I think it might be just easier to see the context all together. As I said, if
[00:22:25]  anyone has any questions so far, feel free to shoot them in the chat. I am switching back periodically to take a look. Uh, okay. So this is all the
[00:22:33]  stuff that we went over a second ago. Um, now for the effect, um, sometimes I feel like I probably should have named, renamed some of this stuff for
[00:22:46]  clarity, but it's, it's actually not much more code. So you look 52 lines of code is this whole thing here, the crate effect, the actual like effect
[00:22:56]  or whatever you're creating is what would I, what I'm calling this execute function. And this, I made it an object because I needed to show the backtracking
[00:23:06]  here essentially. So the thing that I'm pushing onto the stack is an object that contains the, the execution of the effect and its dependencies. This is what we were
[00:23:16]  looking at above here where we were adding the dependencies, um, adding the actual signals to the list. And it all comes down to how the effect executes essentially,
[00:23:28]  because basically whenever it executes, it pushes itself. This is that running thing here. And I know the order of X of the way I wrote this a little bit won
[00:23:38] ky, but it's because it's, I need to execute to be defined in order to add it to this object. Um, so it's kind of backwards, but
[00:23:47]  essentially this is the global context. Whenever this runs, it pushes itself on this running thing on. And when it's done, it pops itself off and then we call
[00:23:59]  it immediately. So essentially it kind of self starts essentially. So the, our, our reaction here, essentially when we hit it the first time goes here, executes
[00:24:14]  itself runs cleanup, which at this point is a no op, it has no dependencies. If you look at our cleanup thing, it just looks at its dependencies and it removes
[00:24:21]  the dependencies from, um, it moves itself from the signals that, that it, that it listens to basically unsubscribes. This is like a unsubscribe and then
[00:24:30]  it, you know, I'm just clearing the list. But so the first time it runs, no, nothing happens. I just clear the list. Then it pushes itself
[00:24:37]  on. It calls the function, which is the function you pass to it. So like an example like this, it's this, you know, console logging the count
[00:24:45]  here. Um, if you're wondering why I use log here, I just, this is just so that I could make the, uh, example instead of using the console
[00:24:56] , just use the, it just writes paragraph elements to a page just to make it more visible. But essentially you can think of this as a console log in this example
[00:25:04] , uh, but more or less, so first time it runs, calls execute, pushes itself on, runs the console log statement, console log statement hits the count. Okay
[00:25:18] . And then the count does the read, sees that effect on the running stack, adds it to its subscriptions and adds it to the effect, adds it to, to
[00:25:31]  it as well, returns the value, prints the proper message on the screen. And then we come out, it removes itself from the context and we're done for now.
[00:25:42]  Right. If we're, if we're looking at our simple example, right, we've gone here and we've logged it. When we set the count down here
[00:25:50]  to kind of follow this flow again, we write the new value. So now suddenly value is five and we go to our subscriptions. Our subscription will have one subscription, which
[00:26:03]  is that effect, um, that already ran that we subscribe to when, when during the read. So it, it goes, okay, it goes through its dependencies,
[00:26:17]  which is that one signal removes itself from that signal. So now the signal for this moment has nothing listening to it. And the dependencies for the effect are empty. It
[00:26:36]  pushes itself on the stack, runs the function again, the function reads the signal again, or sorry, which then finds the effect again on the stack, subscribes again,
[00:26:49]  this time adding, you know, again, adding itself to the, to the signal and the signal adding to itself, both sides. And then console logs out the value
[00:27:01] , pops it off, and then we're done again. So basically it just keeps on waiting for the, the signal to drive it again. Cause every time the single drives
[00:27:12]  it, it goes through that whole loop where it cleans itself up and reruns. It might seem a little bit crazy to constantly be breaking and removing, um, all the
[00:27:22]  dependencies at runtime. Um, there are reasons we do this and, um, which I'll show in a minute or a few minutes actually it'll take me a minute
[00:27:30]  to get there, but more or less, um, there is this overhead of keeping track of the dependencies that you have in a runtime reactive system that you don't have,
[00:27:38]  say in Svelte or, or Marco or, um, where they have the compile time reactive. Um, because in those systems, the compiler actually looks at your code
[00:27:48]  and then goes, Oh, like it basically creates almost like the react style, um, dependency array and goes, whenever any of these change call it. Um, whereas
[00:27:57]  with the runtime, we don't know the dependencies and we can do them dynamically. And it's, it's a good thing actually, because we can better control execution that
[00:28:08]  way. Yeah. What do you got here? Uh, took me a second to realize running was available inside execute. All makes sense so far. Okay, good, good
[00:28:17] . Yeah. Um, yeah, that, that's why I mentioned about it's feeling out of order. It's, it's because this is a function. See
[00:28:25] , it doesn't get evaluated until here. So yeah, essentially we define both things before we actually run any of them. I probably could have written this in a way that
[00:28:38]  was less like this, although I actually looked at the view docs and they use almost an identical example to this. I don't know if they always did, but,
[00:28:46]  uh, um, I found this explanation, one of the best that I've come across now for fine-grained. It took me like four attempts at this. I
[00:28:54]  have like four different articles of this, like one every six months for the last two years, until I finally got to this point that I'm fairly happy with the explanation.
[00:29:02]  the, um, but yeah, what's cool is this version here actually completely works, right? This is all there is to a basic reactive system in terms of the
[00:29:13] , the, the two core pieces. But I said earlier that there was three pieces and the reason why isn't really obvious because the truth of the matter is if, if
[00:29:25]  you've seen, um, derivations like solids create memo or, uh, what's another example, uh, computed in view or, um, what's another one
[00:29:38] , um, computed in mob X or maybe dollar sign variable in Svelte or computed in, uh, or pure computed and sort of rather in knockout. Most people
[00:29:50]  call these computers. So sometimes people go like, why did you call it a memo? And I get it. I mean, part of it was, you know,
[00:29:57]  oh, you're copying reacts and, uh, what they call it. Um, because there's a certain parallel here. And I like that parallel because I'm not a
[00:30:05]  big fan of computers. Um, I mean, they're powerful, but like, what do they actually functionally do? Um, because we'll, we'll get
[00:30:20]  there in a second, right? Cause a very, if you, if you, if I gave you the reactive system that I, that I just showed you and I asked
[00:30:29]  you to create a computed, you might just do this, which is create a signal, create an effect. And every time the function calls set the value in the signal and
[00:30:38]  be like, you know, done, done, done, done. Right. Like, there you go. Now with those extra four lines, we have a full reactive
[00:30:45]  system. And to be fair, um, I did do exactly that, right? I'm going to open the next, uh, example from this demo, but this is
[00:30:57] , this is, here we go. Create memo, create effect. Just doing that works well enough for the simple case, let's say, um, so well that
[00:31:09]  I would, with our simple reactive system that, you know, now with our new create memo, um, we can actually do dynamic dependencies. I, I said a few
[00:31:19]  minutes ago that I was going to show you why dynamic dependencies matter and why in certain cases, um, this kind of reactivity, uh, runtime can do things that
[00:31:30]  compile time can't there. There's a reason that we get a slight performance edge, even with all the overhead of memory subscriptions, um, runtime is just capable of being
[00:31:40]  more granular. Uh, it's, it's, it's basically the, the key here is that if there's any kind of conditional logic in, in your system
[00:31:56] , a compile time can only look at what you put in front of it and go, oh, you read these variables, right? That those are the dependencies. It doesn
[00:32:05] 't, it can't know which branch you took. And this is kind of one of the fun things I have a lot when talking to people about Svelte and whatnot
[00:32:14] , because they go, oh yeah, it does all the work ahead of time. No, you can't do all the work ahead of time. Like that's not
[00:32:21]  an option. Like there are things that happen at runtime. You have to check values. You have to diff. Yes, diff. I said diff. Um, but like
[00:32:33]  the, this kind of granularity is, it's kind of cool. I like this example. Hopefully you guys can see this fine. And even with our crappy, crappy
[00:32:41]  50 line reactive system, runtime reactive system, this works. Essentially I have two variables, two, three variables here. And this is one thing start getting fun, right
[00:32:50] ? Cause you got a lot of a few more moving parts, right? I'm not going to do the full effect loop through like I did a minute ago, but I
[00:32:57]  I'm going to, I'm going to explain this just from the code in front of us here. So three signals, right. Our memo and our effect. Now
[00:33:08]  what happens in this scenario is we basically have, um, I'm not gonna call it control flow, but we basically, yeah, I guess kind of like a control
[00:33:20]  element. This, this show full name, it's basically deciding whether we only show the first name or show both the full name, the first name and the last name together
[00:33:29] . Right. And inside this memo or computed, depending on what your preference is, if we're not showing full name, just return the first name, otherwise we return
[00:33:39]  the whole thing. And you know, you can kind of see this example starts very similar to what we've seen so far, right? Where we're like, just log
[00:33:49]  the, whatever the display name is. So if we have John Smith and true, it's my name is John Smith, right? So everything so far makes sense.
[00:33:58]  Create my name is John Smith. So we created everything we've, we've created our reaction. We do it now. When we set the full name to false. As
[00:34:07]  you can expect. This, you know, using that mental model of it being an effect that runs, you know, in our memo, essentially, this is the, this
[00:34:20]  was the thing that is, was running basically. So essentially we set the full name, what listens to the full name, show full name, this listens. So this
[00:34:30]  goes, hey, you know, it basically the signal calls its subscribers, which is only this one thing. So it calls this function again, realizes that it's false and
[00:34:43]  returns first name now. But it's, but because this has updated, because it's no longer full name, because it sets a signal, sorry, I'm just
[00:34:59]  going to do this, you understand this executes, sees, you know, that it, you know, it just calls it and gets a new value. That set triggers
[00:35:08]  the signal inside here, if we're, if we're viewing it that way, which then triggers this effect, which then reruns. And when it reads, it sees
[00:35:17]  just the first name. But you see the order of the execution here a little bit. And this is what I was mentioning, why I call it a memo to a
[00:35:28]  certain degree is because we actually, when we set the name, we actually got a new, we kind of cached a new value for display name, that when we actually
[00:35:39]  rerun it here, it doesn't actually run this display name again. When this effect runs, it's already calculated it. So it's almost like a memo function
[00:35:47]  goes, Oh, I already know what display name is. And when you view computers from the outside, that's what it's like, essentially, when I was building the
[00:35:57]  reactive graph in solid and actually building a whole render out of it. The only reason I wanted to use these memos or computed was basically for memoization. It was
[00:36:08]  so that I could cache a reactive, I could cache the value using the reactive system, so that when I hit it a number of places, it would just return the value
[00:36:16]  instead of executing the calculation, so to speak. So I understand it's computed because it automatically updates, but if a computed has no side effects, like the world doesn
[00:36:27] 't know that it updated. It's only the thing that reads it. So in a sense, yeah, I mean, it's a perspective thing. When the reaction rer
[00:36:37] uns, it just grabs the cache value. It's like a memo. Anyways, that's probably a distinction more important to me than anyone else. But I just kind of
[00:36:48]  wanted to put that out there. To finish this example, though, now that we're returned to the first name, it's exactly what you expect, right? It
[00:36:57]  just displays my name is John. But the whole key to the dynamic runtime is now when we set last name, I'm sorry if this explanation is taking too long. But
[00:37:09]  now when we set last name, we trigger that single signal for the last name, you know, we can go through and it goes, okay, run your subscriptions. Well
[00:37:18] , who's subscribed to last name at this point? If you've been following along, we've returned that first name last time, and we clean up every run.
[00:37:31]  So no one is subscribed to last name. So we set last name, it gets set in the signal, but you notice that there's no console log. And this is
[00:37:41]  sort of part of the power of what I was talking about of dynamic dependencies. We know to only update or run the extra code when something is actually listening to it when
[00:37:56]  it actually will change or update your UI when there's actually a side effect. Whereas in the compile time system, you don't get that thing, it looks and it
[00:38:05]  goes, okay, full name, first name, last name, it would rerun this again, and then go, Oh, okay, well, we're just returning the
[00:38:14]  first name. But it basically has no, and basically, you know, this hasn't changed, and then it doesn't propagate, I mean, that's not a
[00:38:25]  big extra expense. But I just wanted to point out that it's only with fine grain that you can just skip the work of potential dynamic dependencies at runtime. So,
[00:38:38]  and then finally, this part is kind of silly, but we just turn it back on to show that, in fact, the name legend has changed. And when we set
[00:38:45]  it to true, obviously, now it triggers the memo again, gets the full name, which then triggers the effect, and then we have our console log. So that
[00:38:58] 's, that's basically the execution kind of mentality behind it. And it's really where I left off on this article. But it's important to know that in reality,
[00:39:12]  I said I didn't like derivations or computants or memos. That's not, that's not like, completely true. I think they get overused,
[00:39:25]  because really, their best purpose is to serve it for like memoization, like where you don't want to do calculations. Because, I mean, if I don't care
[00:39:32]  about this, right, I can just go, okay, screw it. Let's just remove that. And let's just make, yeah, well, that, yeah,
[00:39:43]  let's just make display name a function, right? And, you know, do you know something? It's still isn't doing the change in last name, even
[00:40:01]  though this isn't, this isn't a memo anymore. This is just a function call. We're just calling it here. It's still only, it has, it
[00:40:08]  has basically the same behavior. And the reason is, in this particular example, display name is only getting listened, but to this, by this effect. And we're
[00:40:19]  only setting one of these values at a time kind of in sequence. So, truthfully, this didn't need to be a create memo. Like, the effect runs,
[00:40:31]  it goes, oh, okay, I have this dependency, or I have these dependencies. And when you update them, it just, the effect runs a console. We
[00:40:39]  just cut out the middleman. And I would say, unless you're doing really expensive stuff, like the DOM operations that I do during rendering, or like, you know
[00:40:50] , you're calculating some crazy math, I don't know why you're doing that. But you kind of don't need create memo. For this reason. Like,
[00:41:04]  like, what's the worst thing happens? It calculates twice? Like, like, we're concatenating a string, first name plus last name. You know,
[00:41:13]  you know what I mean? Like, and one of the things that kills me is a lot of frameworks, they kind of push you to use computed. They're like
[00:41:21] , oh, this is an expression, it's computed. In fact, in a most reactive frameworks, older ones, not the VDOM ones, and this is maybe
[00:41:29]  why Vue went to VDOM and whatnot, is when they used to do those data binds and stuff, and like, they would be making, like, computed all
[00:41:39]  over the place, like, everywhere. You just be like, you just, you know, like, you're like, oh, I got an expression, let's wrap
[00:41:46]  it in and compute it. Oh, computed this, computed this. And the thing is, those, even sometimes when you read the docs, they sound like, oh
[00:41:52] , you know, like, this is the powerhouse, use all this to, like, save work. That work is only saved on update. The cost of creating comput
[00:41:59] ations, like, on initial execution, it's pretty significant. The cost of doing a simple diff, like comparing a couple values or adding a string together is like nothing.
[00:42:11]  Like, this is, just to understand, at least, it's kind of on a tangent, but I understand a lot of motivation here with Solid is I saw right
[00:42:22]  away that we were kind of shooting ourselves in the foot. And this actually informs Solid's API a bit, why I focus so much on functions and why I very much dislike
[00:42:33]  stuff like Vue's dot value. Because it's like, it's like kind of pushing you to make everything a dot value, so to speak. Like, it's
[00:42:40]  like saying, like, let's make everything these primitives. And what's really cool about a function is, you still get that universal API, you know, like
[00:42:50] , consistently go, oh, the accessor is a function, without like, actually making it a thing, right? Like, in order to get a dot value on something
[00:42:58] , you have to wrap it in a getter, right? But in order to make some derived value, you just wrap it in a funk, it's just,
[00:43:06]  it's just a function. So that mentality shift right off the bat, in like, real world applications, or you know, in the benchmarks, you're making savings,
[00:43:17]  and you're not even realizing it. Right? Like, functions, actually, the expensive part of functions are closures. But if you don't, if you have
[00:43:30]  these pure functions, you're not like doing much in the closure, and, or then they're like throwaway or something like temporary, they're not costing you almost anything
[00:43:36] . Like, I remember people were worried about react hooks, and they're like, Oh, react hooks are going to have way worse performance than, than, you know
[00:43:44] , the class API, because every time it creates these closures, and people just going on and on and on about that. And then you go benchmarking, and you
[00:43:52] 're like, Oh, shit, no, react hooks is actually faster. You're like, what? No, it's, it's, it's because they actually schedule
[00:44:00]  smarter, to be fair, they could have done smarter stuff in the class API. But they like, you know, reacting to learn some things over the years, and the
[00:44:07] , the overhead of those closures and stuff, versus like, like, executing stuff at the right time, and having the right patterns. You know, and like,
[00:44:19]  it cancels itself out. And, you know, let's, let's pull up the good old JS framework benchmark, you know, it's not the true,
[00:44:28]  the complete truth of the universe here. But it's actually funny. I don't know 100% why, maybe there's been some ops and deops over time. If
[00:44:39]  you look, Oh, where's react? It's somewhere back here. I'm still not far enough. Am I? Yeah. So react hooks here and angular,
[00:44:52]  these guys always are just like, right next to each other. Look where actual react is with classes. It's actually back here. Over time, they've kind of
[00:45:00]  widened. At one point, they were like, right next to each other. But over time, we've seen this gap widen between react and react hooks. And if
[00:45:11]  you, if you, if you look at it, they have a lot of the same characteristics. I mean, this is a little hard to see over the gap.
[00:45:19]  Oh, interesting. Yeah, select row is actually way worse. Actually, now that I'm looking at this, I think some people have messed with stuff. Anyways, my
[00:45:28]  point is that react hooks are actually fairly, fairly performant, more so than you'd expect. And similarly, just adding a couple extra functions isn't going to kill
[00:45:42]  you. Like cost of cost of functions is I, there's like a little scale that I go by, but I don't know the overhead of say a function generally,
[00:45:52]  but like going for a function to getter is times three and going for a function to a proxy is times 10. But even that is such a small scale that I
[00:46:00]  do a lot of semi unoptimal stuff with solid because it doesn't matter to make sure that like we don't have really, how should I call it like a fragile
[00:46:15]  or like not rugged implementations on stuff, you know, sometimes it's okay to error on the side of, of being, you know, de-optimized
[00:46:25]  because it won't really matter at all. Sorry, that's a tangent though. Let's get back to some actual, some actual code here because I was talking to signals
[00:46:35]  and I was talking reactions and we, you know, we kind of got a mental model hopefully now of how this works. You know, I just showed the full name
[00:46:42] , last name derivation example. Right. And, you know, showing how memo or derivations work, but let's, let's take this a little bit further here
[00:46:56]  because we should talk a bit more. Okay. I've talked about the dynamic dependencies. I think what I want to talk about now is, is basically around glitch free
[00:47:17] , um, uh, synchronous execution. Yeah. We're gonna, let's, let's, let's look at this here. Um, oh, I wonder, I
[00:47:32]  wonder if this is gonna be any different. I, I actually made some changes to solid since I wrote this, but let's not worry about that at the moment here
[00:47:41] , but yeah, let's, let's look at. There's actually one more example that I didn't have in this article that I want to touch on first. Um
[00:47:50] , and maybe we will use this because someone had a question earlier today in the discord and I, I think it would be probably beneficial to kind of answer that. Someone
[00:48:00]  was like, how does untrack work? Right. Um, and I'm hoping if you're following along, you might have an idea, but what I'm going
[00:48:12]  to do actually is let's fork this sandbox and just implement untracked right in our simple, uh, in our simple, uh, in our simple 50 line reactive
[00:48:26]  system right now. Um, what are we going to do here for sandbox? Okay. And call this one untracked might not be the best example to use for
[00:48:40]  untracked, but it's actually, it's actually not, this is, it's going to take me two seconds to show it. It's, it's,
[00:48:48]  it's, you might even be able to guess how untracked works. Let's go. So export function untracked. Um, most reactive systems have a
[00:49:02]  way of, um, basically saying, don't listen to this. They might hide it in a way. Like I know you has like watch effect versus effect or something where
[00:49:16]  you have to like state what the dependencies are. And I can generally, I think that's a good pattern. Knockout didn't have that. And I actually,
[00:49:23]  um, implemented myself in user land, uh, because it, we, we had a big mess of bouncing dependencies and crazy stuff. And this, my startup and new dev
[00:49:35] s are just like causing infinite loops accidentally. Like after a while, the reactive system had gone so complicated and the pieces were bouncing around so much and there wasn't really good
[00:49:46]  synchronous glitch free execution, which I'll show in a minute in something called the reactive libraries, like, uh, knockout to the point that the system got complicated enough
[00:49:53] . And then there's enough two way binding and like all the, like, you know, data flowing which way and all keeping in sync that you, you, you might
[00:50:03]  like end up using a function somewhere in a computation. That's also using an event handler somewhere. And then someone changes the requirements and adds a signal there that, which
[00:50:12]  incidentally creates an, uh, uh, a different dependency in that computation that reads higher up. And then, you know, we're talking about time before promises. So
[00:50:22]  we had callbacks and sometimes callbacks execute synchronously versus not synchronously, which would sometimes cause different dependency linking. And then as I said, add two way binding.
[00:50:31]  And it's just like, like, we, we have things that would literally execute. I remember one time I was working on a, like a storefront and there
[00:50:41] , and there was like, uh, like, uh, this thing where you could like add quantities of like photos and like add different types of photos and stuff. We were
[00:50:50]  working digital management and we got to a point someone made some change and you, you clicked like a quantity button and the whole thing like recalculated itself like two
[00:51:00]  and a half times. It just kind of bounced around. And it was like, it was cause it was calculating and that was causing this update, which causing this update,
[00:51:08]  which causing this and then restarting and then I see the same value, but like, it sounds like chaos. And this, this, this is a big influence for me
[00:51:16]  for when I started, started working on solid, but like so much of it had to do with like, um, like really, um, two way binding pretty much
[00:51:26] . Um, but essentially like everything was just kind of the, just waiting to become a circular loop. And, uh, I think enough has changed since that standpoint, but
[00:51:43]  I wanted to point out at least that being explicit about your dependencies sometimes is a really nice thing, especially when you're like iterating like over deep nested lists and stuff
[00:51:51] . And sometimes you don't actually need to listen to every property or some incidental downstream thing. I actually had instituted at the company at one point that all of
[00:52:01]  our, um, uh, effectful things needed to have explicit dependencies. The pure stuff was fine because they generally, they were pretty simple as a transformation. They call the
[00:52:12] , um, derivations or memos, but all the effects needed explicit dependencies, um, except for very rare cases. And yeah, once I did that, the
[00:52:20]  junior dev stopped shooting themselves in the foot. Mostly that, and they kind of stopped them from using two way binding, but yeah. Anyway, uh, so how do we
[00:52:29]  do on track? Well, you might be able to guess, but it's actually fairly simple. All we do is go const, um, temp context equals context,
[00:52:44]  context equals this, um, value equals function, context equals temp context, return value. That is all on track is all we do is temporarily remove what is listening.
[00:53:15]  That's like we just clear the global cache. And now if we, if we, if we add this on track here, uh, let's import it into our,
[00:53:26]  our example. Uh, we more or less can choose not to listen something. What's a good, what's a good variable to untrack? Um, how
[00:53:41]  about what do we change here? We changed last name, but we're already not. Yeah, this is kind of actually a terrible example for this, but yeah, I
[00:53:49]  mean, I can show you if we untrack, um, show full name as you can imagine nothing is ever going to run again. Oh, context is read
[00:54:00]  only. Haha. Good call. Yeah. Um, our example now does even less than it did before. Um, because now we can't even switch it to,
[00:54:16]  it basically runs the first time sees it. It didn't track full name. So now when we set to false, nothing changes, and then we change the last name.
[00:54:26]  Um, it's still on last name. So it did flips because it's still on last name because it never ran again. Um, it, it shows John and
[00:54:35]  this, this, this is why people don't like untrack see, or why like, you know, there's concerns around untrack. It's very powerful
[00:54:43]  and useful when used properly. But did you notice something here? My name is John, not my name is John legend. We changed the last name, which triggered because
[00:54:55]  we're on tracking this, we stayed on this path. So when we changed it, it never triggered, but we did update the value. Right? So when, when
[00:55:06]  we changed the last name, it goes here and goes, Oh, it, we're not actually showing full name. We're only show the first name. So even though
[00:55:15]  change last name, um, did update, we don't actually see it because it caused that update, which means, which then shortcuts it to the first name. And then
[00:55:26]  obviously we're not listening to this and it's broken. So my point is if you're going to not track dependencies, you better know what you're doing. Um,
[00:55:36]  it's often better just to be naive and let everything track, because if you listen to it, you probably like need it. Like some people are talking about, well,
[00:55:46]  I just want to only listen to the tip of state. I don't want to listen to like the whole progression. I'm almost, you know, like if you
[00:55:53]  had like nested value, like state dot users dot first name, they're like, I just want to listen to first time. I don't want to listen to user
[00:55:58] . I'm like, you can do that, but you're something's probably going to break. Cause if user ever changed, you're good. It's going to be
[00:56:06]  still listening to the old version of first name on an old user that isn't even linked into state anymore. So I just, I just wanted to kind of show this
[00:56:16]  for a second and this is a good demo, but essentially untrack, uh, definitely has, uh, considerations behind it. Uh, you know, when you use
[00:56:27]  it, but on the positive, it is dirt simple to implement, um, doesn't really matter. Yeah. Um, see here, right. really nothing to
[00:56:43]  it. Okay. So let's, let's go back to basically there's two kind of core utilities that I like to use the reactive system. Untrack is one
[00:56:58]  and batch is the other batch is the idea of putting multiple changes together. So solid executes synchronously. So when you like top level, when you have nothing listening
[00:57:11]  and you set a value by the next line, everything will have applied. And this isn't unique to just solid. Um, this is true of most of these reactive systems
[00:57:19]  like view and mob X too. The difference is when it ties into the render system, um, a lot of frameworks wait till the next micro tasks to actually do the
[00:57:30]  DOM updates. Like, so like in reacting call set state, like it wasn't always like this, it was kind of ambiguous in the old, like react 14 days,
[00:57:38]  but if you call set state, like five times, it'll kind of like just gather up all those changes. And then on the next micro task, it'll go and
[00:57:44]  go, okay, now I'm going to apply all your changes and views similar on the DOM as well, even though the reactive system updates right away, like I'm talking
[00:57:52]  about it, it comes later, but for systems that don't have that batching, like same mob X where they, they, they, sorry, they do have
[00:58:00]  batching, but they don't, they're not right. Depending on like a render loop kind of mentality, they have a specific batch and in mob X, that's
[00:58:09]  the thing they call actions. And in solid, we have batch and this lets us apply multiple changes that are seen at the same time. Now, the tricky part is even
[00:58:18]  if multiple things happen at the same time, there's no way everything can actually execute the same time. We might have updated the core signals, but now when we have
[00:58:27]  to propagate through our, our graph, we don't have the means to, how should I put it? We, we don't have the means to obviously apply, like
[00:58:40]  we're not all seeing, we don't have the means to apply everything in the exactly the right order. And so in a sense, we need the topological sort
[00:58:50] , but the challenge is we don't know easily, like from the dependency graph, we can kind of figure it out. And this is why derivations are important, right
[00:59:02] ? The problem with our implementation of in here of create memo is that we only know, we don't know what the dependencies are of this create memo. Like, so
[00:59:14]  we know the dependencies, but we don't know who's dependent on it. Like essentially, there's, there's this kind of break between the way the effect executes
[00:59:24]  and the way the signal executes. The signal has subscribers and the effect has dependencies, but we, we haven't linked them together. You can't like walk along that
[00:59:35]  barrier. And with an actual derivation implementation in the, our frameworks, what we want to be able to do is go to both at the same time, go,
[00:59:44]  okay, I'm updating. I need to actually, I'm updating. So you have the effect part, you know, your dependency has changed, but I actually want to
[00:59:50]  see who listens to me and then kind of trace through. And the, the actual best explanation of this is in, and actually, I don't even have to go here
[00:59:59] . It's, it's linked at the bottom of this article. This article from Michael West rates. Ah, was it this one? Wasn't this one? Why
[01:00:11]  did I link this one? Um, it's not this one. My bad. Sorry. Um, I'll just go look for it. Um, Um, creator
[01:00:25]  MobX is probably one of the best explanations of, of the, the loop. And I basically used it to, you know, every time I rewrite the reactive system,
[01:00:34]  I just like double check it here. Um, that's right. Um, MobX, sorry. Hacker noon. He's, he's only got two articles in
[01:00:48]  there becoming fully reactive. This, this article is, is absolutely great. And I strongly recommend reading it. If you really want to do it, you know, kind
[01:01:00]  of keep replay what we're going to talk about here, but this set of four steps is the secret to the reactive system. Sorry. I just jumped back to the question
[01:01:12] . I see I missed one. What does solid wrap in untracked by default? Um, okay. You mean in our actual implementation? Um, sorry, I
[01:01:23] 'm jumping back here, but so I think what solid wraps and on track, um, is just mostly the components. If in our component tree, uh, we have
[01:01:33] , is basically a bunch of nested crate effects. So you have an effect that calls an effect that calls it back. And if we didn't untrack the components
[01:01:42] , if someone, you know, the, the, the, anything that accidentally broke solid today, you know, when people go, Oh, you lost reactivity.
[01:01:50]  And, you know, everyone's like, Oh, why is this, you know, you do structured your props. If, if solid didn't untrack.
[01:01:56]  Um, if solid didn't untrack, Oh, hello. Hi from Australia. Um, if solid didn't untrack, essentially all those cases would have the
[01:02:06]  potential of triggering the parent and causing the whole component to re rerun. So we'd get really, um, unperformant essentially, because any kind of access to
[01:02:19]  a value outside of a computation would just go up to the parent and then you, who knows what happens. Like you, you could just start re-rendering full sub
[01:02:28]  trees accidentally. Like if you're, if you had like a condition in the JSX, like, uh, I still have this open. I can show you,
[01:02:37]  uh, kind of a silly example here, but like, if you, if you can pretend if you had, like pretend you had this situation where you're like, um
[01:02:46] , um, show, whatever show person that works for me and my comp component now. Um, we didn't untrack the component functions. It would actually end
[01:03:06]  up getting into this effect. Cause like, if, you know, if you were just like, Oh, uh, let's say I had something like, um, value
[01:03:15]  equals value and, and then you're like, my, my comp here was like, you're like, Oh, I'm just going to destructure this by accident
[01:03:30] . Right. Um, but you would have actually done is access the value or less right here, which would have caused this whole expression to reevaluate. So essentially the
[01:03:45]  things today, which accidentally lose reactivity would actually cause your component to re-render. So if you were like, you know, if you did some logic and then
[01:03:54]  you're like return, you know, a whole bunch of dom nodes, you know, whatever your view is, you'd be recreating all those dom nodes again, just
[01:04:06]  because you accidentally access to value. So really old solid. I didn't use untrack there. I was like, I actually literally compiled stuff just to functions and
[01:04:16] , uh, SJS, um, it's surplus worked that way. But I was like, wow, this is about the biggest foot gun that I could possibly give end
[01:04:25]  users. Because the crazy part is, is it would actually work. Like it would re-render again and everything would work fine, but you'd be, you could
[01:04:33]  be replacing, like you, you could have made a small mistake and not really noticed it and be just re-rendering your whole page. And it's not like react
[01:04:42]  where you're doing a diff and just applying the changes and then nothing changed. You would have been like just recreating the whole dom and, and doing it again.
[01:04:48]  Like, so yes, that's where solid internally uses untrack and why untracks components, because, um, you don't want a simple mistake leading to that
[01:05:00] . Okay. Uh, anyways, back to my explanation of derivations. Um, this is probably the most complicated thing. So I'll probably paraphrase, but essentially
[01:05:14]  this graph, which I used on the, on the outside of our, uh, the thumbnail for this video, and I use it all over the place. The article
[01:05:21]  is really kind of a great way of looking at this and because it kind of numbers through the thing, what you can do view is blue are the signals green are the,
[01:05:30]  um, the, um, derivations or the memos or computers when you call it and reds are the side effects here. Right? So essentially the way when you
[01:05:40] , when you have this kind of complicated graph of steps, what happens is when observable changes. It basically indicates to all its downstream dependencies that it, it has become
[01:05:53]  staled. Um, and you, if, if we had the, if we created our compute, it's the way that I showed you where it's like effect running
[01:06:03]  a signal, it'd be almost impossible to, like you couldn't trace through this and actually do that. So that this is why the implementation for actual derivations is
[01:06:12]  different so that they actually can see both their dependencies and their dependence at the same time and actually propagate the message across. Right? So any affected, um, derivation or
[01:06:22]  computed values will recursively pass on the notification to all their observers and so on. Um, so as, so this whole subsection of the tree is marked as st
[01:06:32] ale, right? Um, after sending the stale notification and storing the new value, um, Mabrex sends a ready notification. And which indicates whether
[01:06:45]  it's actually changed. Um, I do this slightly different in solid, but it's the same principle. I actually set things to stale and to like potentially stale
[01:06:53] , but it's the same idea because you're going to, as you move through, you're going to have to kind of, it's possible that something here hasn't
[01:07:02]  changed. And then we actually, even though we notified everything ahead of time, we actually stopped propagation at that point because like, oh, it actually didn't change.
[01:07:10]  We don't have to go execute the rest of the tree. And it's important. The reason that we have to kind of notify everything up front is because with certain types
[01:07:19]  of graphs, um, you have this problem of, uh, and when you're studying multiple values, you have this problem of more or less you, you have to
[01:07:33]  actually like go down one branch before you go down the other branch. Um, I'm going to show a real example of that in a minute. So let's just,
[01:07:40]  let's just listen to the steps first so that we can kind of get a mental picture of it. Okay. As soon as the derivation has received a ready notification for
[01:07:51]  every state, for every stale notification, it receives step one. It knows that all the observed values are stable and it will start to recompute. Counting the
[01:08:00]  number of ready stale messages will ensure that, for example, the computer value of four will only reevaluate after three has become stale. So basically they kind of
[01:08:11] , it kind of works its way outwards based on a counting system. I actually don't use this counting system. This isn't exactly how solid works, but to understand
[01:08:19]  this is, this is fundamentally, um, an example of an implementation, um, of how to create a glitch free system. If none of the messages indicate that the
[01:08:29]  value has changed, the derivation will simply tell its own observers that it's ready again without changing its value. Otherwise the computation will recompute and send a ready single to
[01:08:38]  its own observers. This results in the order of execution is displayed in figure five. Note that for example, the last reaction marked with dash will never execute. If the computed
[01:08:47]  four did not reevaluate or did reevaluate, but didn't produce a new value. So they're just saying like from this change, it would kind of
[01:08:55]  execute this way to go two and then three, because four can't run yet because it returns on three. Then it would go four and then five. And then this one
[01:09:06]  I presumably didn't change and it never actually ran. So let's get an actual concrete example of this, um, which is, which I have in here. And
[01:09:22]  here's our example. Um, this is probably the simplest way to show, um, show this situation. Essentially we have two source signals. We have a derivation
[01:09:35]  that reads from one of them, in this case B. And then we have an effect that reads from both one of the source signals and the, um, derivation.
[01:09:47]  Once you have this kind of, and then we set both source signals. Once you have this kind of branching that you're saying two values, it, we have
[01:09:58]  to choose to trace the, um, the, uh, the dependence sort of like the subscribers of one of them first, like regardless of the fact that we've us setting
[01:10:09]  the value at the same time. So they all see the updated value for both A and B. We have to start either executing A's dependencies or B's dependencies.
[01:10:17]  And because it's arbitrary and solid, we generally, we just go top down. And that's why for this example, I put the memo on B because it's,
[01:10:27]  it's, if it, as you can see, kind of mentally work through this, it's like that graph in the other one. If we go through A's dependency
[01:10:36] , the only thing listening to A is this effect. So the order will actually be A, then it'll go to this effect, but it hasn't recalculated
[01:10:44]  C at the time that it goes through to run the effect. So we actually have to know that we have to actually go in and update C in order to, to
[01:10:59]  get the right result here and keep the order properly. So, um, this is, um, why I call these systems push pull because they actually kind of go back and
[01:11:10]  forth between just pushing out the value changes, but then if they hit something that they know is, stale, this is why we notified at the beginning. Then it
[01:11:19]  goes, okay, well, actually I'm, I'm here. I'm going to reevaluate it. Cause I know it's stale. If we didn't
[01:11:24]  notify all the derivations, like send that first signal to tell them all that they're stale, it would get there and just read it and go, oh, I
[01:11:30] 'm memoized. I I'm just going to send the old value. And then when it got to the dependencies, it would go, you know, like, uh
[01:11:37] , in our naive example that I showed before with the creep effect writing signal, what essentially would happen is it would go through a first. So it'd go, okay
[01:11:47] , update the signal, run the effect. See that a is to see that C is the old value, which would have been four and say the sum, the sum
[01:12:02]  is, is two plus four. So it would say, it would say the sum is six. And then it would run B's dependencies update it. So it's
[01:12:13]  six, two times three, six, and then rerun the effect again. And then go the, the, the sum is, um, is 10. Right. But
[01:12:23]  it would have taken two steps to get to the desired result. So by notifying ahead of time, we know that when we get to see, to run it immediately.
[01:12:32]  And I, I, I've got, I've got an example of this, um, to show you what, to show you this example, um, essentially.
[01:12:41]  Let's, let's run through the first time we run this. Okay. Yeah, nothing changes. Good. The first time we run this, we create stuff. So
[01:12:57]  immediately our memo runs, we read C and we, then we run a reaction. And then it says the sum is five, which is, which is basically two times one
[01:13:06]  is two plus three. The sum is five. Then when we apply the changes, it actually runs the reaction first. Like we just said, but the difference is
[01:13:17]  it gets the value for a here. So it actually sees the two, but then when it goes to C instead of, because we've already notified it, that it's
[01:13:26]  stale, it actually goes in and immediately in line runs what's in C. So you see read C and then it produces the right value here at the end.
[01:13:35]  So, um, which is two plus, uh, whatever is six. So it's like, so essentially everything ran once. And, and in the, and even
[01:13:49]  though it had no way of knowing the proper order ahead of time, um, it still ends up running in order because it knows when it hits one of those stale values
[01:14:01]  to kind of switch modes instead of just reading what's present, it actually starts executing down the subtree. If, if, if it got into here and then it
[01:14:09]  found a different stale value, it would execute that as it ran. So it basically kind of goes up and down the, the dependencies as needed. And it knows
[01:14:20]  to do that because we, we sent a message basically when we updated the original value. All right. That is probably the most complicated thing. Um, does anyone have any
[01:14:34]  questions so far? I feel like someone must have a question at this point about that. That's, that's about as, that's about as complicated. And I
[01:14:43]  actually haven't even shown you how that code works in solid, but this is why, um, reactive systems, um, uh, like why derivations are special and why
[01:14:57]  I call them out. Like kind of like a naive view, you know, might be like, oh, we have observables and we have observers, you know, we
[01:15:06]  have signals and we have reactions. Why make a big deal about derivations. It's actually the, the key to actually making, um, everything consistent is using,
[01:15:19]  um, you know, create memo or computed or whatever these derivations, because they ensure the execution happens in the right order. That's why, um, it's almost
[01:15:31] , it's what can be derived, should be derived. That's actually like mob X's, uh, um, uh, motto essentially. It's actually, it
[01:15:42] 's always better to use like a create memo, but then it is to use like an effect to write to a signal. These examples aren't exactly depictive of solid.
[01:15:53]  I use solid syntax for them, you know, to make them familiar to people, you know, somewhat. Um, but the truth of the matter is solid actually adds
[01:16:03] , um, an extra layer in here, um, in that our effects don't execute immediately. They're scheduled. And if it's actually solids, create computed.
[01:16:15]  Yeah. I know to make things more, um, confusing. I didn't have a good name for it and I wanted a term for computation, um, that actually
[01:16:22]  runs like, um, the auto run and the, uh, the, uh, the watch effect and stuff in view and whatnot. So, uh, more or less,
[01:16:37]  um, there's a little bit more detail in solids create effect that makes it, um, special, but essentially all of these systems have the, these three pieces,
[01:16:51]  whether they're compile time likes felt or runtime like solid. Um, yeah. So, I mean, this, this is, this is the core of it. Um,
[01:17:01]  where are we, how are we doing so far on time? Just so I know where we're at. Okay. We've been going for about an hour. Um,
[01:17:07]  I got a couple more things I can show if anyone's interested. Um, because this series of articles, um, that I have on dev2, um, is
[01:17:20]  even though there's only these two articles on dev2, to me, there's, there's actually a hidden third article in this series, um, that, no,
[01:17:31]  that people aren't aware of because I wrote it before. It's disposal, a big topic. Um, not really, if you, the funny thing is you've
[01:17:41]  already seen it actually, can I try something? Because I'm testing out the streaming. There you go. Is disposal a big topic? Okay. So that's how that
[01:17:51]  works. Cool. Um, essentially you, you actually already saw it. And one of these examples in here actually shows it off. So let's use that example. It
[01:18:00] 's the one that didn't load ironically, but remember when I showed you how the reactive system worked and let's, let's look at our full reactive system. Remember
[01:18:14]  how it called cleanup here and it went through and it cleaned up the, uh, the dependencies because every time the effect runs, it cleans up the dependencies. Now,
[01:18:26]  um, um, I, what I'm actually going to talk about in the third article is actually related to this. So maybe that's, that's a good tie in
[01:18:34] , but I'm, I've got one more example here, um, that I can show you just because I have it right in front of me. But in this
[01:18:42]  example, I use solids, um, on cleanup, um, in here to show the, to show the, to show the timing here and all on cleanup does is it
[01:18:55]  just registers a handler that, that, that runs in this cleanup function that I mentioned already that all the scopes and solid are kind of like these effects and that we
[01:19:07]  untrack them, um, so that the components aren't, um, aren't, aren't being tracked so to speak, like, so that we're not like
[01:19:15]  accidentally accessing reactive values, but on cleanup in solid is just the cleanup of the parent effect. Components don't really own state. So if you think about it, if
[01:19:27]  there's nothing conditional about your render tree, like you have a bunch of components and components and components, but there's no decision. It's like fixed. Then it
[01:19:37] 's with solid when you, when you register a non cleanup method, it's actually like the cleanup method of like the, the, where that decision point is where that can
[01:19:46]  the, where the dynamic part is. So if, if you have something static and there's no, it's not conditionally rendered that cleanup point might be the root of
[01:19:55]  the whole app. Like it's not the component cleaning up. It's, it's actually the, the, the, the, the, um, the effect cleaning
[01:20:04]  up. So when you put a cleanup, like an on cleanup inside effect or put it in the component, it has slightly different meaning inside. The effect is the same as
[01:20:13]  where react returns a function in their use effect and putting it outside into the component, um, is runs, uh, you know, at a slightly different time. It
[01:20:24]  runs obviously when that whole branch gets cleaned up, but that's why we have a function. We don't just return of effect because you like, you could, you could
[01:20:31]  have like six components in between you and where the last dynamic pieces, uh, and you can't put that in a return statement, so to speak. Right. So
[01:20:41]  that's why I separated it as the on cleanup function, but literally you can just pretend that it's like another for loop in here that is running. So in,
[01:20:49]  in our example, um, like here with the first name and last name, again, you can just kind of see how this works, right? Executing this, this
[01:21:01]  is again, where we, we, we start with the, with the showing the full name, and then I put the cleanup inside the memo. All computations have a
[01:21:09]  cleanup, even though memos should be pure and when those side effects, technically speaking, there's still computations, so you can put cleanup in them. So essentially
[01:21:18]  you can see the difference of timing between executing and releasing here because we execute display name the first time, because there's no cleanup, right? It hasn't run before.
[01:21:28]  We haven't registered it. And while it's actually, we register the cleanup and then, you know, we, we show our first name and last name, then we
[01:21:38]  change it to not sure the first name and last name. That releases the display name dependencies. So, which is calling this cleanup function and then it executes, and
[01:21:49]  then it executes this function again, registering a new cleanup function. And also in this time case, only returning the first name. Then when we set the last name,
[01:21:58]  as we know that is not a dependency because we only return the first name, it's not listening to the last name at that point. So nothing runs. And then finally
[01:22:05] , when we set the full name true again, we release the dependencies, execute our, our memo again and print out the results. So cleanup actually isn't, in
[01:22:14]  the basic sense, isn't actually that complicated. It, it's the same thing with context and solid. We're just leveraging the reactive system. Reactive system naturally has
[01:22:23]  a time when it cleans up, when each effect reruns. And that's, that's all on cleanup is. Hopefully that answers your question. But the hidden third
[01:22:38]  article in the series is on, for a short period of time, I was publishing on in-depth, which is, uh, angular-based, um, um
[01:22:52] , um, blog mostly, mostly. But, um, activity to rendering. And, uh, they really liked my long pieces. Like, yes, this is 17
[01:23:07]  minute long read. If you want to read, I wrote like three 17 minute long articles for them, really kind of detailed stuff. This is, this, if you wanted
[01:23:16]  to make solid yourself from scratch, this is the article you read. I actually gave away all my secrets. It's kind of funny because I've been on Twitter and
[01:23:22]  stuff. And, you know, people have been like recreating it. I'm not using my library DOM expression, but literally trying to recreate stuff from scratch. And I
[01:23:27] 'm like, like, just, just read the article. Just take a look. You'll do understand a little bit more because, uh, a while ago, I remember
[01:23:35]  when view three made a big deal about like their reactivity, not belonging to the framework and anyone can use it, which obviously is, you know, was a little bit
[01:23:45]  amusing to me because like every reactive system worked like that before react came out. Like every framework, the reactive activity could be used without the framework. Um, but,
[01:23:56]  you know, after react, it was tied into the component system and Svelte's compiler tied into the, you know, their components more or less. Um, I
[01:24:04]  guess it was worth making, you know, a big deal about it, but, um, a bunch of people like, oh, I'll just put it in lit and
[01:24:11]  I'll just add reactivity to some random render. And they didn't appreciate that, you know, reactivity is kind of dumb. Like it's such a simple
[01:24:17]  model. It's like a promise. Like it just reruns. There's no diffing built in or nothing. So if you just take a reactive system and take a
[01:24:24]  render, like some tight template literal, like lit, um, it'll work, but it'll also be like kind of completely garbage. So, um, like there's
[01:24:33]  a lot more consideration into it. And that's really, um, what this article goes into because sure. We, we, we just built our reactive systems scratch.
[01:24:42]  We understand the fundamentals, building a framework from that takes a lot more consideration. Um, but you know, if we have time to do it, I'm, I'm
[01:24:55]  going to kind of go through rebuilding this very simple, you know, greeting, um, example, which I do in this article a little bit just so you can kind
[01:25:04]  of maybe get an appreciation for how, how this works. And all right, and I have lost all my viewers. Maybe this is where I should have ended the stream
[01:25:16] . Well, who cares? I'm going to keep on going. I talked a bit about this at react Finland, but essentially, um, the trick to this is
[01:25:33]  recognizing that everything's in effect, right? All rendering, all creation is an effect. So I kind of showed this before, but you can, you know, we've
[01:25:44]  all seen this example where you take a signal and you console log it. We, we've looked at this, so let's move on. And then, you know,
[01:25:51]  what's the difference between that and say, setting some text on a dom element, right? As long as we, you know, generate our code a certain way,
[01:26:00]  we can, we can, we can definitely just create an effect. Like the reactive system handles itself. Right. And, you know, that was for what was, we
[01:26:12] 're doing some text content. We can also, you know, set some attributes that way. Basically, as long as we can analyze our template and know what's being set
[01:26:19] , it's pretty easy, conceptually the picture, like, oh, we're setting a class. I'm going to compile into this effect. But, you know
[01:26:31] , this is what solid compiles to, and you could do this by hand, but you probably wouldn't, right? It's too much work. So, hey,
[01:26:40]  Brandon, still here. More or less, this is, you know, why we use JSX or templating languages, so that we don't have to go through
[01:26:55]  this effort of, of, like, handwriting this. But that is all it is. Like, this is a purely runtime approach, right? So, like, the
[01:27:07]  first problem, what I say, is that it doesn't scale if we cannot modularize it, right? So, like, how, you know, do we actually,
[01:27:17]  yeah, what am I doing here? Yeah, so we're trying to, we're trying to actually create and update stuff here. So, I, in this example
[01:27:30] , let me look at the original example that we're starting from. But I believe we are, yeah, the idea is we're going to show this greeting component based on
[01:27:39]  a visibility signal, and we're going to set the name. So, basically, there's a name, prop, and there's a visibility. So, what we're
[01:27:48]  going to do here is look at how we can, you know, set this up. So, now we're, like, okay, we're going to create our
[01:27:58]  div. And if it's visible, let's create a bunch of DOM nodes. Otherwise, let's clear it. Setting text content to nothing on a DOM node is,
[01:28:07]  like, the quickest way to just blow out all its children. So, you know, setting visible to true shows us our DOM nodes. Setting it to false gives us our
[01:28:18]  empty div again. So, this actually works quite well, like, as a renderer, you know. But, you know, now we want it to be greeting
[01:28:27] , right? So, you know, I kind of made a fictional situation here. But more or less, I had it return the array of elements, which I commented here
[01:28:40]  as a fragment. And essentially, greeting is just a function, right? I just abstracted it by calling a function and passing the props through. And this actually works
[01:28:53]  basically the same as above. Because all I did was take this code and basically set it in its own function that is responsible for creating its DOM elements and setting its content.
[01:29:05]  And then this effect is still driving it. And this is sort of what I was meant. Like, even greeting has nothing special about it. It's just a function
[01:29:15]  wrapper. And essentially, it's actually this wrapping effect that actually controls the flow and is actually responsible for owning the reactive context, the cleanups, all that. So
[01:29:38] , the component is just a function. You know, too much code in one place, pull it out into a function. But, yeah, the first question I ask
[01:29:49]  here is, how do we make the name change dynamically here? Because I've hard-coded it, which is fine. And we passed it through on props, and
[01:29:57]  this works. But how do we make it change dynamically? We also need to make the name into a signal now, right? We have the visible mechanism working, but we
[01:30:09]  need to make the name into a signal. Because, but we have a problem here, right? Because if we just make name into a signal, and you can kind
[01:30:20]  of picture this, and then we kind of execute it here, it's going to cause this whole effect to rerun again. So, we're going to recreate all the
[01:30:28]  DOM nodes every time the name changes, right? This is what I was talking about, the naive approach not really working well, right? Because, essentially, we need to
[01:30:39]  do a bit better than this, right? Because, as we know, it'll track at the nearest effect. So, every time the name changes, it's just
[01:30:49]  going to, it's just going to rerun, which is no good. Right? And in virtual DOM library, you don't care for reruns. This is kind
[01:30:56]  of how Vue works, or MobX with React. You just access the value, and it goes, oh, time to update the whole component. But, you
[01:31:05]  know, we have to do a bit more work here. So, what we can do, essentially, and it's not surprising, is wrap, inside our greeting component,
[01:31:16]  wrap the text content update in its own effect. And I'm going to go back up here so you can see. So, basically, wrap this in its own nest
[01:31:29] ed effect, and pass our signal through in the props. So, as you can see here, it's calling a props.name, right? So, you can just
[01:31:39]  pretend that you just set the name, and it's passed in the signal, and then run it. But we do have a problem. If you've ever used another
[01:31:52]  reactive library, like MobX or Knockout, you might be aware of this. And I didn't talk about it too much, and this is related to the disposal topic
[01:32:01] . Generally speaking, if you create an effect in an effect, every time you rerun it, and you create a new effect, you're creating a subscription. And
[01:32:12]  if the signal exists outside of those effects, it doesn't go away. So, the signal keeps that subscription. There's, like, it doesn't know to clean up
[01:32:25] , right? Because, essentially, you create an effect, and then you create the inner effect. The inner effect gets subscribed to that signal that's top level. So
[01:32:37] , in this case, pretend it's, like, name or visible or something. Something outside of both effects. And then, essentially, when the inner effect reruns,
[01:32:49]  there's no problem. It cleans up and, you know, reruns. But when the outer effect reruns, the inner effect doesn't know what to do. It
[01:32:57]  just gets thrown away, and you create another new effect. And the signal is still listening to it. So, when you update the signal, you'll actually just keep
[01:33:05]  on getting more and more effects that listen to it. And you'll be updating these shadow effects. And this is, generally speaking, in those old systems, you often didn
[01:33:18] 't want to nest reactions or computants or effects, whatever you want to call them. Because you'd have to figure out a way to dispose of them properly. Because
[01:33:28]  you'd have to hoist the disposal out so that you knew, like, oh, we're rerunning. Remember to dispose it. Because, like, think about it
[01:33:36] . Even if this has a dispose method, how do you know when to call it? Like, if this was your component, and it was inside, like, this
[01:33:47]  thing, and it's inside here, it's when this one reruns that you have to dispose the one inside the greeting. So, how do you get it back out
[01:33:57]  here so that it knows when it reruns to call the dispose? Like, you'd have to, you know, I mean, it's fine. I mean,
[01:34:07]  we added a cleanup method. A lot of the old reactive libraries didn't have this cleanup method, essentially. But that was kind of why Solid added a cleanup method, so
[01:34:18]  that when you create an effect, it could register itself as a cleanup. And actually, internally with Solid, we don't actually even use the cleanup method for this. We
[01:34:26]  just say that any computation that is created inside another computation, we register on a list. So, every time the computation or the effect or whatever updates, it not only
[01:34:38]  clears out its dependencies, like I've already previously shown, it actually frees up all the children of it so that we end up with no stale dependencies. Because as
[01:34:49]  I said, if any child listens to a signal that outlives it, that signal will keep on trying to update it forever. So, like, memory leaks are a
[01:34:57]  real thing. And so, you can start seeing how this nesting of effects could work. Because essentially, the parent, whenever it reruns, can always free up
[01:35:11]  its children. And this is really a core principle behind Solid. And it's why we have the create root. This is -- even though Solid works standalone as a reactive system
[01:35:22] , sometimes people are kind of confused why you, like, can't just, like, put a bunch of stuff outside of the render function. The render function is just
[01:35:28]  hiding this idea of create root. It's because -- So, you don't have to register, like, get a dispose message method and then register it on the cleanup and
[01:35:39]  do all that. Solid handles that all automatically behind the scenes for you because it just tracks its parent. But that means, at the very top, there still has to
[01:35:49]  be a parent. And that's create root. Create root is literally just a non-tracking reactive context or effect or whatever you want to call it. It's basically
[01:36:03]  one that has untracked on it, essentially. Nothing is subscribed for it to update. But it just exists there so that, you know, if ever needed,
[01:36:14]  it can be released. So, yeah. This is kind of showing it, right? You can kind of hide this whole mechanism from the end user if this way.
[01:36:29]  So, essentially, we call create root. This is the entry of our program. We create our signals. Create our DOM element. We create an effect, which, if
[01:36:39]  visible, calls the child, which has this effect inside of it. And then, you know, essentially, it just registers on all up. This effect registers with this
[01:36:49]  effect. So, if this one, outer one ever reruns, this one is freed up. And if the app ever is disposed, this one frees up,
[01:36:56]  which frees up this one. Basically, we just create a backwards link list of reactive contexts. So, we can just clean up everything at the level that it re-
[01:37:05] executes at. Hopefully, that still makes sense. But that's -- create root is, like, fundamental to the reactive system in that sense. You don't
[01:37:15]  see it because we wrap this in a function called render, essentially. But that's why -- I mean, some people were like, well, why even have a render function
[01:37:26]  installed if you're just returning DOM nodes? Well, it's because of this, essentially. If you notice here, I'm returning an array of DOM nodes. And
[01:37:36]  if I was returning a single DOM node, it would have to be different. And I'm just -- I'm using append here. But, essentially, any JSX in
[01:37:45]  solid can either return a DOM node, an array of DOM nodes, or a function that returns a DOM node or an array of DOM nodes. We need to support functions because
[01:37:53]  that's how you can write dynamic things. Like, you can wrap portions of the tree in more effects, more or less. And in order so that the top-
[01:38:05] level thing can be dynamic or an array or a single value, and because we need to wrap it in a root anyways, I decided that it was just easier to make a
[01:38:16]  render function because we can then encapsulate all that functionality, both the dynamic insert logic, and the root in a way that you don't have to think of it.
[01:38:25]  But it's also why the render function as a solid takes a function and not the render JSX. We actually have to render it inside the root. So, if you
[01:38:35]  just passed it a straight JSX expression, it would evaluate it outside the root. So, yeah, that's why that was the trade-off. Yeah, and
[01:38:49]  I just have an example here of using roots because this isn't as important, but if you ever wondered how mapping works in solid, like the for loop, I actually
[01:39:05]  explain it here in this example. The key part is in the for loop, we actually have nested roots because, as you can imagine, if the whole thing's wrapped
[01:39:16] , let's say, in effect, and you add something to the list, you don't want to, let's say you're, like, you don't want to
[01:39:25]  re-release the whole list of all the children every time you add a new item. That would be terrible, right? And if we have this hierarchical system
[01:39:33] , like I just explained, that every time the outer effect runs, it frees all the children up, you know, to protect ourselves, like I was mentioning before,
[01:39:42]  this is pretty bad. So, how do we have an array, how do we map to an array and keep some of the stuff reactive and still be able to, like
[01:39:51] , add new things and remove things and whatnot? Well, the answer is nested roots. Roots handle their own disposal. So, essentially, this is more or
[01:40:04]  less the map function in solid, a really simple, simple version of it. But if, yeah, what are we doing here? Whatever, it doesn't matter. My
[01:40:15]  point is, like, we either move the thing in the list, or we create a root to add the new item. And anything created in a root won't get
[01:40:25]  freed up, but it has a disposer, and we actually hoist up the disposal logic so we manage it ourselves. And every time this effect reruns, it actually
[01:40:35]  doesn't dispose its children because they're not owned by this effect. Instead, they're owned by an isolated root. And then whenever we realize that it needs to be
[01:40:45]  disposed of, you know, we can call the dispose function directly. Or when the whole thing gets disposed, we can register a cleanup method that frees up the
[01:40:59]  whole list. I don't want to get too much into the details of how the mapping works because this isn't actually very accurate. It's like an overly simplified version
[01:41:09]  of it. But my point is, even though we have this hierarchical disposal, create root lets us more or less handle the disposal ourselves when we want to opt into it
[01:41:22] . All right, running out of drink. Any questions so far? Sorry, sometimes I feel like I've been talking for such a long time. But hopefully this is
[01:41:41]  making sense so far. It's a little bit different than just attacking it from the perspective of solids tutorials, right? This is looking at how we built a reactive system from
[01:41:51]  scratch, and now how we're taking that reactive system and actually building a renderer out of it. Okay. So we talked about on cleanup, we talked on create
[01:42:08]  root. That is really the disposal logic and the reason that we can build rich DOM trees without worrying about memory leaks and whatnot. We basically have this automatic disposal that makes
[01:42:24]  the 99% case easy. What happens under the root? You basically have this complete system that automatically takes care of itself in terms of disposal. So reactive memoization. I
[01:42:40]  talked about this a bit before about me calling them memos instead of computers. This is just explaining that again. But essentially, yeah, I don't think I actually
[01:42:53]  have to go very far into this. Actually, I think I actually completely covered this when we talked a bit earlier in the stream. But essentially, you use it because you
[01:43:05]  don't want to reevaluate that value. This is a better example. This is the problem. Let's see if you guys can spot the problem here. We
[01:43:18]  still have our example that we showed before where we're creating our DOM element and then we're showing the greeting or not showing it. But now I've changed it. Instead
[01:43:28]  of being invisible, it's when the count is bigger than five. Now, when the count is smaller than five, we don't have a problem because it just I
[01:43:40]  mean, I mean, we have a minor problem, but you're probably not going to really notice that problem because you're not we're not going to be doing anything
[01:43:48]  really expensive. Every time the count goes, it goes, oh, rerun this effect, count is smaller than five. Empty the children. There's nothing there.
[01:43:57]  Empty the children. DOM is actually pretty smart. If you actually give it the same operation over and over again, it realizes like if you if it knows something's already
[01:44:06]  empty and you try and empty it, it'll be like, I'm already empty, you know, that kind of thing. But so, you know, that isn
[01:44:11] 't a big cost. But what if it's what happens when we get to six? In my very naive example, where I'm only appending things because I expect it
[01:44:28]  to run once. We're going to just keep on adding the greeting to the page over and over and over again. Get to six. Oh, append. Seven,
[01:44:37]  append. Eight, append. It's because every time count updates, we're going to rerun this effect. That's, you know, even if we were smarter and
[01:44:48]  didn't append and knew like the replace, like we had reconciliation logic, which the actual renderer does have, you're recreating those DOM nodes over and over and over
[01:44:56]  again. This is not acceptable. So what what we need to do is create a computed here. So like it actually has a functional purpose to save work here. It
[01:45:09] 's it's and this is older solid syntax, but we still have this. We have this like yeah, actually in solid now we do the equality check by default. So
[01:45:20]  you can actually ignore this part. But essentially by wrapping it computed now, this expression is Boolean. So even though this expression will run over and over again, when
[01:45:31]  it's smaller than six, you know, it'll go, it'll be like false, false, false, false, because false never changes. It's only going to
[01:45:39]  like, when it initializes, it's going to be like, this is false. Set the text content to nothing. All the numbers up to five where it's
[01:45:47]  still false. This never runs again because this never notifies it because it's its value hasn't changed. It's still false. Then when you get to six, it
[01:45:56] 's true. It runs this branch, but when you get to seven, this is still true. So it doesn't notify it basically by using an intermediate computation or memo
[01:46:07]  or whatever you call it, you prevent extra execution because we're doing a value check here, but you can't do that in line. You have to actually wrap it in
[01:46:21] , you have to actually wrap it in its own computation. So it runs separately. And this is kind of why we have a show operator and actually solids compiler is pretty
[01:46:33]  smart. I actually -- let's just show this off just for fun because we can. I'm going to turn off night mode. It's not what I want to do
[01:46:40] . But, you know, this is why it's also safe to do it here. One, two, three, four, five, six, oh, see?
[01:47:01]  I'm not redoing everything because -- actually, this one I am redoing everything. This is a perfect example of what I was talking about before about being smart. Repl
[01:47:09] acing some text or setting the text content actually isn't a big enough deal for me to actually care about. But let's do something actually meaningful. here we go.
[01:47:26]  See this memo? I snuck this in here. This is a little tricky because it's actually using an IV to hoist it out without doing it. So don't
[01:47:36]  worry about that. But my point is, Solid automatically knows when you have expensive stuff like DOM creation to automatically, in the compiler, hoist the memo out on your
[01:47:49]  condition to save work. Show does this, you know, explicitly always, but the turner operator basically uses some basic heuristics to ensure that stuff works. But essentially
[01:48:02] , this is -- we're doing this. We're pulling it out into its own memo so we can do a value comparison check on it. And we're back down
[01:48:16]  to one again. All right. So now we basically have the means of basically guarding and doing maps, basically. What I showed you here, the reason that I went through
[01:48:37]  here is we don't only have the means to use the DOM to render. I've now shown you how to create control flow, basically. You have everything you need
[01:48:44]  to create for loops and everything you need to create conditionals. And components are just functions. And cleanup gives us our ability to have life cycles. Yeah. I mean,
[01:49:03]  that -- I think this is mostly it. I'm just mentioning that I actually call untrack on components so that you don't accidentally access them like this and cause
[01:49:12]  like that loop we were talking about before. Yeah. Universal props. I think this is an important piece here. Essentially, and I've shown this off a few times,
[01:49:24]  but the way solid, you know, or you could use it like arbitrary reactive library, I guess, could do props in a way -- like, you know what,
[01:49:35]  I'm going to use this example. I'm going to do this one live just because it's easier. To make a child component. And essentially, I'm going
[01:49:55]  to do that. And I'm going to call it props dot -- what am I going to call it? Props dot value? It seems reasonable. Yeah. Let's
[01:50:08]  do that. Okay. And then I'm going to change this into a fragment. So I can return multiple children. And then I'm going to put our child in
[01:50:23]  here. And I'm going to make this whole thing just into like, click. Okay. And And then I'm going to go value equals count. Okay. Now
[01:50:51] , not surprising that this works. And the reason this works, though, is that we wrap -- like, we just inline the propolis object that we created ourselves
[01:51:07] , we wrap the value in a getter function. So this count doesn't evaluate until you get it right here on value. And I've shown this off before. And
[01:51:19]  I guess in a couple other videos or streams. But the reason that I recommend that people call count, because they could also just not call count, and it actually --
[01:51:29]  as you can see, the getter goes away. You know, and now we just pass the function through. And then, you know, it calls the function. And
[01:51:37] , you know, it's the same -- it's the same result. But the reason that I actually strongly, strongly recommend people call count like this is if count's dynamic
[01:51:48] , great. If count is not dynamic, I mean, it's fine, it's not going to update, but great. You didn't have to change any of
[01:52:08]  your code. This is the main reason. I wanted -- if you're going to have universal, you don't want to sit there and be like, oh, is this
[01:52:17]  a function? Do this. Otherwise, do this. You know, you don't want to write that all throughout your code. As you can see here, when it
[01:52:24] 's static, we're just assigning it value equals three. But when it's dynamic, then, you know, we wrapped in the getter. And how do I know
[01:52:38]  if it's dynamic or static? I don't really know. All I do is, like, I have a very simple check. Is it like a member expression or
[01:52:48]  a function call? Because I know that if it's just a value, no function could be called. It's not reactive. Even if it's got, like, some
[01:52:57]  expressions in it. There's no way this can be reactive. But this can be reactive. This can be reactive. Right? So, more or less, this is
[01:53:21]  sort of the -- let's see, where are we -- this is basically the motivation behind the universal props. And, yeah, I talk a bit about wrapping and stuff.
[01:53:40]  I actually do this all with the compiler now. But we actually, from what I've described before, have all the pieces to use fine-grained to do our
[01:53:51]  rendering. I've explained cleanup. I've explained control flow. I've explained all the reactive timing and the routes and the disposal. So, basically, all we're missing
[01:54:02]  now is templating. And the most naive way to do templating, which is basically -- I actually even showed that with attributes, or higher up, that we can
[01:54:15]  easily just look and say, oh, if you're updating a class, set the class name. Right? I can -- I can use the playground and showcase this off right
[01:54:25]  now. But I think it's pretty clear just from the compiled results here. But, like, if I wanted to add a class to this button -- and we've
[01:54:34]  -- let's pretend it's dynamic. It's like some class name that I don't have. Let's do that. We just wrap it in an effect. Right
[01:54:42] ? There's nothing tricky to it. The thing that's the most tricky is this insert function. This is actually the only thing that we don't have purely in the reactive
[01:54:55]  system. And it's -- in our case, we -- there's only a few possible values it should be. Is this -- is it something that's serializable to a
[01:55:03]  string? Is it a reactive function? Which means we just have to wrap it in an effect and call itself. I kind of skipped on this arrays. Or if it
[01:55:12] 's like a DOM node, just, you know, add it or replace it. That's kind of -- there's a lot of logic to the array part. But my
[01:55:19]  whole point is that the insert function is basically just one simple, shallow kind of reconciler. And yeah, I can explain how we can have function nesting.
[01:55:39]  But I don't think that's really important to understand here. And talk about spreads, which is how to apply objects at runtime. Basically, for -- the insert is the
[01:55:54]  one half of the dynamic part because we don't know what children are given. And spreads are like the attribute part where we actually have to check all the different types of
[01:56:05]  props and assign them and call helper functions, like, you know, setting attributes. But what I'm working towards here, I'm trying to show you here, is basically
[01:56:15]  this -- with the insert and with the spread, we have more or less, plus all the, you know, runtime reactivity, we pretty much have all the pieces
[01:56:30]  we need. And in JSX, we can optimize. We can look and go, we don't need the spread here. And, you know, we only need
[01:56:38]  to do dynamic inserts here. With hyperscript, or very simple library, you could actually just take the insert and spread and just -- in the situations where you need to
[01:56:51]  insert, for example, if you have a DOM element or an array of something, or you spread because you know you're passing in the object, you more or less --
[01:57:01]  like, this whole function here that I wrote here, plus the insert and spread, is all you would need to make a hyperscript version of the runtime. I
[01:57:13] 'm probably not doing the best job of explaining too many details here. But my point is that as long as you have a way to, at runtime, handle the edge cases
[01:57:26]  of, like, when you don't know what those attributes are, or when you don't know what's going to be inserted, you basically have your bases covered. And
[01:57:34]  it's not more than, you know, maybe a couple hundred lines of code, which I've actually shared in here. It's basically just -- this is the same code
[01:57:43]  you'd actually find in most VDOMs, essentially. The difference with solid is you don't need to run this code, you know, most of the time.
[01:57:53]  It's only in those kind of de-optimized cases. And even the insert is not very de-optimized because, essentially, like, if it
[01:58:04] 's a string, you know, create a text node, not a big deal. If it's a node, you just replace it. The only -- and if it
[01:58:12] 's a function, you wrap it in an effect and have it kind of call itself recursively, the only place that it's complicated is how do you handle an array.
[01:58:23]  And for arrays, we do have to do a basic diff. But that's true of every framework. Every framework has an array. That's why the JS framework benchmark
[01:58:30]  has some value because it's basically a whole test to test how the array diffing works in different frameworks. That's the thing common between VDOM, non-
[01:58:39] VDOM. That piece is all the same. But as I said, with the aggressive wrapping memoization and just those couple functions, you can basically have a Hypers
[01:58:52] cript library. And even though at the beginning of this article I was trying to show you how to build the JSX, if you wrote it with Hyperscript, with
[01:59:02]  the code I included, essentially now we have a fully working Hyperscript version of the library. Obviously, this is different than JSX because you have to actually,
[01:59:11]  sorry, wrap things and functions yourself. But anyways, I think this article served its purpose. I think if anyone really wants to dig deeper, they can see it. But
[01:59:22]  all the core elements are there in terms of the execution runtime of solid, minus the scheduling. Let's grab a little water. I don't know. Is there any more
[01:59:32]  questions? I've been going now for about two hours. And I don't think I'm going to get into the scheduling today. I think that pretty much covers the
[01:59:45]  three, as I call it, the three fine-grained articles, so to speak. The introduction, the building, the library, and then how to create a render
[01:59:56] er. Covered a lot more than I actually originally intended to. So that's cool. But if there's nothing else, I think I'm going to call it
[02:00:06]  quits for today. All right. Cool. Yeah. I know there's only a handful of you, but hopefully this video serves as helpful for other people to reference in
[02:00:20]  the future. A lot of content in it. Most of the stuff's in the articles if you need a reviewer, but hopefully there's some extra value from this
[02:00:30]  commentary. And depending on, we'll look at doing this again. Yep. All right. So I'm going to, I'm going to sign off. Thanks again,
[02:00:43]  everyone. See ya.