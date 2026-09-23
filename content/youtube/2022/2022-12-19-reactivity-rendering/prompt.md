---
title: "R5AcOtxIdMk"
slug: "R5AcOtxIdMk"
duration: "2:46:18"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/R5AcOtxIdMk.m4a"
---

This is a transcript with timestamps. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one-sentence description of the transcript.
  - The one-sentence description shouldn't exceed 180 characters (roughly 30 words).

- Write a one-paragraph summary.
  - The one-paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should each cover approximately 3-6 minutes of content.
  - Write a two-paragraph description (75+ words) for each chapter.
  - Ensure chapters cover the entire content, clearly noting the last timestamp (HH:MM:SS), indicating total duration.
  - Descriptions should flow naturally from the content, avoiding formulaic language.

Example JSON output:

{
  "shortSummary": {
    "episodeDescription": "A concise one-sentence description of the transcript in 180 characters or fewer."
  },
  "longSummary": {
    "episodeSummary": "A single-paragraph summary of the transcript that explains the central topic, the main arguments or developments, the evidence or examples used to support them, and the broader takeaway for the audience. It should read as one cohesive paragraph rather than a list, staying informative without becoming exhaustive. The summary should mention the most important themes, clarify what changed or was learned over the course of the discussion, and note any conclusions, recommendations, or implications that would help someone understand the full conversation without reading the entire transcript. It should also preserve the flow of the discussion so the reader can follow how the ideas developed from beginning to end."
  },
  "longChapters": {
    "chapters": [
      {
        "timestamp": "00:00:00",
        "title": "Introduction and Overview",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      },
      {
        "timestamp": "00:04:30",
        "title": "Core Ideas and Implications",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      }
    ]
  }
}

Transcript:
[00:00:00] Thank you.
[00:00:02] All right. Hello, everyone. Looks like we're live today. This was a sort of impromptu stream just because of all the conversations that have been happening the last few days on Twitter and whatnot. I'm actually going to tell everyone Twitter that we're live now because this is a very quick turnaround on a stream.
[00:00:22] I'm probably not going to sit here and waste as much time preambling. I'm not going to lie.  There's other cool stuff going on later today that I want to check out.
[00:00:31] Thank you.
[00:00:31] So this was just the time window I was able to squeeze this in.
[00:00:37] Weird love.
[00:00:40] So, just posting that we're live. Alright.
[00:00:43] So yeah, hopefully everyone's getting past the Twitch initial pre-roll.
[00:00:48] So...
[00:00:49] Come say hi in the chat. If you're around, you know the drill.
[00:00:53] *chewing*
[00:00:54] Yeah, Monday stream.  It felt like it.  Like, this conversation just keeps on going on,  and I felt like...  I spent...  It'd be quicker for me to do this stream  than, like, respond to everyone on Twitter.  There is so much confusion out there  on the topic of reactivity right now.  Like...
[00:01:09] So much.
[00:01:12] I can't stress how much. Yeah. And for those who aren't familiar with my channel, I'm also available, it's RyanSolid on Twitch. So I know I post YouTube on Twitter and the likes, but you can also watch on Twitch. You might get a slightly better chat experience, although I have to go manually check it.
[00:01:33] from time to time.
[00:01:35] But just wanted to...
[00:01:38] to let everyone know that this is available to chat and watch on both platforms. Okay, cool, cool. Alright, so we got a lot to cover today. So we probably should get started pretty quick here.
[00:01:51] um
[00:01:55] didn't react.
[00:01:56] I don't know.
[00:01:57] Did I miss something? I didn't see Ryan's, Flores' thread on React Hooks.
[00:02:03] I mean, I don't know if it did indirectly, but this actually wasn't it.  Now you make me want to find this tweet.
[00:02:10] Um...
[00:02:11] Let me present my screen first and we can get started here. But no, this, there, there, there were a few conversations that, that did, um, trigger this, um, that wasn't one of them directly.
[00:02:24] Um, but...
[00:02:25] I...
[00:02:26] - Thank you.
[00:02:27] I do want to...
[00:02:29] talk about a few of these just to kind of get us context of what we're going to be discussing today.
[00:02:35] .
[00:02:37] I'm not sure if you go into Benchmarks, but why is jQuery listed?  Because jQuery code is imperative.  The benchmark only tests declarative code.  It's kind of pointless.  Like, you can always make vanilla JS.  Here's the thing.  Every framework, there's an escape hatch, and you can escape back into vanilla JS.  So it becomes kind of like...
[00:02:55] Thank you.
[00:02:56] less meaningful is the best way I can put it. If you just go, okay, I'm just going to write the  vanilla JS anyways, right? jQuery isn't really a framework. And by today's library standards,  you can just write vanilla at about the same level of effort. So that's why you generally  don't see jQuery in benchmarks.
[00:03:14] Alright, cool cool. Alright, yeah, let's see what's here.
[00:03:18] Oh.
[00:03:19] Hey.
[00:03:20] Hey, David.
[00:03:22] Um, so where is my...
[00:03:25] sorry, profile, yeah, just gonna scroll down here a minute,  'cause there was a couple conversations that started this.  This one was probably the one that,
[00:03:36] was kind of
[00:03:38] Um...
[00:03:39] triggered this, which was, "I'm convinced that Signal is the programming pattern of the future of front-end dev. I tried Solid GIS yesterday for the first time and it literally solved every problem I felt with React. Now I'm going to try Preact Signals and so on." And as I said, this kind of reaction is pretty common from where I've been sitting, but I think
[00:03:56] this is where a lot of the confusion comes in. Because we obviously, a bunch of people kind of came out of the woodwork, you know, framers going, "Well, reactivities and signals have existed forever." Or like,
[00:04:07] you know, people going like,
[00:04:10] His
[00:04:11] talking about other frameworks like Quick that have signals and
[00:04:15] you know,
[00:04:16] I...
[00:04:17] Evan's quote is probably my favorite because, I mean, he's dead on here and it actually...
[00:04:21] ratios, the original one, but he's saying, it's interesting react devs call signals the future since they've been around front end framers for quite a while. In fact, over a decade, they were called observables and knockout. And then he mentions refs and view composition API. And Evan's absolutely right. And this is part of what I want to kind of clarify here, because we've had
[00:04:40] these kind of fine-grained reactive primitives going back to maybe before knockout, but that was my first introduction. And we had them
[00:04:48] continue to evolve as state library solutions for React. And then we continued on now to see them kind of evolve into their own...
[00:04:58] frameworks again
[00:05:00] outside of React, which is what with Solid did. And now we're seeing them come in and influence the React sphere with kind of stuff that Preact's doing. So like this is going to go around in a few circles here, which is why probably it's very hard to get a grasp on it. There's a bunch of comics where people are like, oh, you know,
[00:05:16] What's the difference between pre-act signals and solid signals?  What's the difference in RxJS?  Is this not just the observer pattern?  People bring up ActionScript 3, and they had something called signals.  And I think that's almost where I want to start today, because...
[00:05:30] Um,
[00:05:31] We gotta like...
[00:05:33] kind of map out what we want to talk about because there is a lot of topics  here and a lot of places where,  um,  clarification could be quite valuable.  Um,
[00:05:44] What is the future? Well, it's funny this one got that attention. If I go back a couple months ago, one of the
[00:05:51] core team members of Angular basically said the same thing. He said,
[00:05:56] What did he say? He said something along with that. "Signals are the new VDOM."
[00:06:01] That there's this rush right now of people trying to explore it and see its potential in the same way we saw back when the virtual DOM first showed up in 2013.  React obviously brought it forward in 2013.  But then in a short period of time, we had stuff like Preact and Inferno, which kind of more on the React Compact context.
[00:06:22] some call clone side of things.  But then even if you consider  Vue 2 has a virtual DOM underneath the hood,  um...
[00:06:30] There's frameworks like Mithril, which are very minimal.
[00:06:34] Lots of exploration in this.  Tons of frameworks.  It was an explosion of frameworks.  And the whole JavaScript fatigue came out of...
[00:06:42] Largely, I think, that explosion.  And at that time, one door closed.  Most of the reactive libraries kind of started closing shop.  Stuff like Knockout got less popular.  CanJS, things like even Reactive kind of took a backseat of it.  And we had our new virtual DOM, everything.  And now we're seeing like...
[00:07:05] people exploring with this reactivity in a similar sort of way.  And that's where these comments are coming from. But, you know,
[00:07:12] It does take
[00:07:14] it does,  it does take a bit of acknowledge that this has been with us this whole,  whole time,  so to speak.  Uh,
[00:07:21] I called out a few of these libraries myself. I was talking about Knockout and MobX, big ones. Also, SJS. No one knows about SJS. SJS is like the reason Solid exists.
[00:07:32] Um,
[00:07:33] And we might talk about that a bit.  But then, you know,
[00:07:36] We can't not talk about Vue's composition API, and Preact signals, and Quick signals, and Angular's upcoming signals.
[00:07:45] um...
[00:07:46] I think...
[00:07:47] I think there's a long history here, which I've actually talked about previously on stream.
[00:07:52] But I thought today we'd actually kind of get a little bit more mechanical and actually
[00:07:59] look at examples a bit more to kind of understand what the impact of
[00:08:04] these decisions and the differences in these systems are.  And so I apologize.  This,  this is pretty impromptu.  I,  I actually didn't prepare anything,  but I feel comfortable enough in this topic that we can just,  you know,  just wing it,  so to speak.  So,
[00:08:19] So I think it is important, as I said, to identify all these things.  And to keep that in our head, it might be worth just getting to Scaladraw  and doing a bit of mental map here because...
[00:08:31] Yeah.
[00:08:33] Yeah, we can't talk about this without also talking about Svelte as well, right?  Because Svelte...
[00:08:40] Svelte is...
[00:08:42] Actually, but it's felt as a compiled
[00:08:45] uh approach to reactivity which is a little bit different than what i want to focus on today but  yeah
[00:08:50] Like,
[00:08:51] .
[00:08:53] There's so many ways of classifications we can look at this.
[00:08:56] But let's throw down a few concerns right now so that we can frame what we want to talk about. A couple things we want to talk about. First of all, is types of reactivity.
[00:09:08] I would leave that
[00:09:11] Another thing we want to talk about probably is
[00:09:14] is
[00:09:16] Like...
[00:09:19] reactivity...
[00:09:21] plus rendering
[00:09:23] This is important when we talk about how they fit in frameworks.
[00:09:26] Uh...
[00:09:29] - Thank you.
[00:09:30] And
[00:09:32] I think we also should talk about
[00:09:37] Actually, I mean, these are the major ones.  I'm trying to think, is there something else here?  Because what we can do is we can subclass here  because we can talk about...
[00:09:45] reactive, we could talk about
[00:09:47] VDOM.
[00:09:48] plus reactivity so we can talk about like reactive state management
[00:09:57] And we could talk about
[00:10:01] reactive
[00:10:03] renderers, stuff like solid.
[00:10:07] And on types of reactivity,
[00:10:09] we can talk about
[00:10:11] kind of fine-grained is what I've dubbed this reactivity, but fine-grained reactivity.
[00:10:16] which is our buddies' signals,
[00:10:19] um i i have my i have my own terms for these but you
[00:10:24] there
[00:10:26] They're interchangeable. We can talk about that. We also might want to
[00:10:30] pause a bit and talk about RXJS.
[00:10:34] Um, and...
[00:10:39] Heh.
[00:10:40] Signals in angular. Yeah, the angular community hasn't seen this yet. Sorry. I might have leaked the beans. I don't know if
[00:10:45] And it's not for certain that they go this way, but they are very, very interested in this potential, right?
[00:10:52] Oh yeah, there's one other type of reactivity we should talk about here.
[00:10:58] because it's felt we should talk about compiled
[00:11:01] reactivity
[00:11:04] Right?
[00:11:12] So I call these reactive renderers, but we should talk about...
[00:11:17] um,
[00:11:18] componentless?
[00:11:22] And we should talk about
[00:11:24] what Svelte does a bit, which is...
[00:11:27] compiled
[00:11:30] Okay.
[00:11:32] Um...
[00:11:36] This is a lot of stuff, if you've noticed.
[00:11:40] But...
[00:11:41] So like, yeah, we will hit the API differences  as we go through this.
[00:11:48] But just kind of laying out my thinking here,
[00:11:52] Because I think
[00:11:56] I think that it's...
[00:11:58] Not
[00:11:59] I think the problem is you can attack this in multiple ways because
[00:12:03] your entry point into this conversation reactivity is generally going to be different it's gonna be
[00:12:08] for pretty much
[00:12:10] everyone
[00:12:12] And
[00:12:13] It obviously has to start with what is reactivity, right? And
[00:12:20] That's why the types of reactivity here are probably
[00:12:23] important and we should start there.
[00:12:26] Right?
[00:12:26] So let's talk a bit about that because...
[00:12:31] these reactive approaches
[00:12:33] Um...
[00:12:34] And yeah, see if I can use a ScalaDraw to select a number of these and move them out of my way a little bit.  Of course it misses one.
[00:12:42] Thank you, Skeladra.  Okay.  These types of reactivity here, um...
[00:12:47] Actually...
[00:12:49] kind of go back a little bit.
[00:12:52] So
[00:12:55] It's funny, I'm going to start with fine grained and rx.js and we'll get to compile it
[00:13:00] afterwards, because Compile actually
[00:13:03] isn't.
[00:13:04] it's not necessarily a type of reactivity as much of a way of interact with rendering.  It's almost like you're compiling away the reactivity.  The reactive system doesn't exist.  So that makes it a little bit different.  But I want to talk about these two because both of these types of reactivity date back  to the mid to late 2000s at Microsoft, at least from a front end perspective, right?
[00:13:27] Um,
[00:13:29] For those who don't know,
[00:13:32] that
[00:13:33] RxJS or Rx extensions was something that was popularized  or built out at Microsoft around, I think, 2007, 2008.  And similarly, Knockout,
[00:13:44] JS, Steve Sanderson created it.  I don't know if he was at Microsoft when he created it, but he was working for them very  soon afterwards, if not.  Both basically came out of the Microsoft camp, and that's where I got my introduction.  But these are two very different systems, but you often hear people kind of talk about  them interchangeably.  And the reason for that, more than anything, is that these early systems both called their
[00:14:10] reactive atom.
[00:14:12] Observables.
[00:14:14] Right?
[00:14:17] So,
[00:14:18] Yeah, yeah. I didn't know what I was going to do, like, moving it around.
[00:14:23] Thank you, Theo, but not Theo. Yeah.
[00:14:26] Oh.
[00:14:32] - Yeah.
[00:14:33] Yeah.
[00:14:35] Yeah, okay. Recoil and Jyotai. That falls into VDOM plus reactivity. And I think I'm going to use Preact to demo this part because it's much more illustrative. But let's get there. So I know the first part of the topic is probably something that some people are familiar with, others aren't. But I very, very brief high level, just because I love...
[00:14:57] I think MobX had some of the
[00:15:00] the best initial look at the reactivity thing.  They have this beautiful little image here.  Let's see, can I open image in a new tab and it'll be larger?  Yeah, okay, check this out.  When I talk about fine grain reactivity,
[00:15:15] we generally talk about this cycle here. And this is something that existed
[00:15:24] I sit back in knockout days, but generally speaking,
[00:15:30] MobX, I feel like, really standardized on what the communication was about these different pieces.
[00:15:35] And
[00:15:37] Thank you.
[00:15:37] essentially
[00:15:39] MobX defined four areas, but I'm gonna say that the fourth area here, the action, while
[00:15:46] something that happens always  and is part of the equation,  it's not something that needs to be owned  by the reactive system necessarily.  I mean, there's discussion about that,  but what I'm getting at is you have three pieces.  You have observable state,
[00:16:01] you have these computed or derived values
[00:16:03] and then you have side effects, things like rendering.  And this one, two, three pattern
[00:16:09] isn't limited
[00:16:11] to these fine grain reactivity.  In fact, if you think about it,
[00:16:17] every framework has a version of this, right?  Like, um...
[00:16:20] That's why you can say this has been around for years.
[00:16:23] In a sense, observable state, I mean, like obviously in solid, this is create signal, create memo, create effect. But similar in react, which is not reactive in the same sense that I'm talking about, is use state.
[00:16:36] Use memo.
[00:16:37] Use effect.
[00:16:38] Like they have these three core concepts.  Svelte.
[00:16:42] let variables...
[00:16:43] And then this is dollar sign where you declare a variable, and this is a dollar sign where you don't declare a variable.
[00:16:49] um...
[00:16:50] view. This is refer reactive, right? And then this is computed, and this is watch or watch effect or effect. I can't remember always with view. And
[00:17:03] What I'm getting at is
[00:17:04] there is this clear language here actually the thing that makes react actually a little  bit special and react hook special in this conversation is that
[00:17:12] Most libraries, this is all they need. They just need those three primitives. React actually adds a whole second layer of hooks to describe the memoization process.
[00:17:21] because of the way they re-render.
[00:17:23] Most libraries that use Reactivity
[00:17:27] Don't need...
[00:17:29] um
[00:17:30] anything else. Like I've got this example here where I'm
[00:17:34] you know, typical solid counter.  But let's just like...
[00:17:38] exit out for a second
[00:17:40] and forget about that. Let's just grab a signal, let's grab an effect
[00:17:45] And we can go, let's, I mean, I can steal this count signal because I can.  But my point is you could just get rid of the component, you just create a signal,
[00:17:53] You create an effect
[00:17:56] that
[00:17:58] I don't know, console logs...
[00:18:02] Signal, which he calls a function in this case, but there's different syntaxes and we can talk about that in a minute. My point is you can just sit there and go like, let's set interval.
[00:18:10] and set the count
[00:18:13] to count plus one
[00:18:15] Or whatever.
[00:18:17] Actually, I'm not going to use the function syntax because it's, uh, how should I put it? It's, uh,
[00:18:24] I think
[00:18:25] Let's say count to count.
[00:18:28] Of course it's exploding right now because I
[00:18:30] didn't put a
[00:18:31] thing on it. Let's just
[00:18:33] Okay, there we go. My point is you see that it's counting here every second, right? And
[00:18:39] This doesn't take...
[00:18:40] The thing with reactivity is this is independent of any component system, any kind of
[00:18:45] anything like this is the whole system.
[00:18:49] Okay.
[00:18:52] Yeah, I don't have mods.
[00:18:57] Someone's pointing out
[00:19:00] Did I just... Okay, let's move on. But what I'm getting at it here is like,
[00:19:07] Reactivity is a change system onto itself.  It doesn't matter what you want to do.  My point is...
[00:19:15] You can just...
[00:19:16] essentially define this language and it updates.  So because it's the thing that updates, like...
[00:19:23] As you can imagine with any real code, if I go here and go, "Hello,"
[00:19:28] at the top here
[00:19:29] Let's refresh.
[00:19:30] It's going to console.log Hello once.
[00:19:33] But it's never going to...
[00:19:37] console log again because why would the outside top level code ever rerun again and I just kind of point out that in a system with reactivity you don't need to like rerun components there it's not it's not a thing because it's only the effects that rerun or the reactive computations that rerun.
[00:19:56] And
[00:19:58] This is important because React Hooks
[00:20:01] introduce a whole-- they have the reactive language, so to speak.
[00:20:06] like I talk about here, but they introduce a second tier level of
[00:20:10] of, um, language, um,
[00:20:13] around memoization, like react.memo.
[00:20:17] use ref, use callback,
[00:20:20] Use event effect I think
[00:20:24] I don't know what it's called, the new one, but essentially...
[00:20:28] they add essentially additional language to describe the fact that the components are updating.  Okay.
[00:20:38] Do I have good resources? Yes.
[00:20:43] I have lots of articles on Dev2.
[00:20:47] Right
[00:20:48] and I should link them...
[00:20:52] Do I have dev...
[00:20:55] uh...
[00:20:58] There's specific ones.  I'm going to pull these out later, but I think for those who are getting started,
[00:21:05] What do I wanna do?  I'll just duplicate this tab.  For those getting started,
[00:21:10] And I know this might seem like I'm just self promoting a bit, but seriously, this is probably the best introduction I can give you.  There's a two part introduction article called hands on introduction to fine green reactivity and building a reactive library from scratch.
[00:21:23] I was tempted to build a reactive library from scratch here, but essentially,
[00:21:29] The thing to know is this is not a compiler trick.
[00:21:32] The whole system is based off the fact that you have basically a global context.
[00:21:40] And
[00:21:40] Whenever you...
[00:21:42] read a signal value, you just check the top of the stack of the global context, and if  something is listening, have it subscribe to that signal.
[00:21:51] And then when you write it, notify all the subscribers.  And...
[00:21:55] Because computations, effects will run once, you can always get the initial subscribers.  So this system just uses the runtime stack.  There's nothing too magical about it.
[00:22:06] which it used to be considered magic, but...
[00:22:09] Um...
[00:22:11] These days, seeing the magic that we've seen in other frameworks or different tools around, you might be able to call hooks magic at this point.  This doesn't seem very magical.  You can do it in about 50 lines of code.
[00:22:25] Thank you.
[00:22:25] But what I'm getting at here is that
[00:22:28] - Thank you.
[00:22:30] People talk about PubSub.  And the thing is, my example that I wrote in that article  is essentially PubSub.  But I want to point out that there is a very, very different aspect of this  that makes it different than PubSub.  And that is the fact that...
[00:22:45] yeah,  this is still just counting away.  Um,
[00:22:48] Let me show you kind of quickly.
[00:22:50] to the best of my knowledge, or how quickly I can do this.  I'm gonna use Create Memo here.
[00:22:55] But essentially,
[00:22:57] If
[00:23:00] If you...
[00:23:01] derive
[00:23:04] from
[00:23:05] multiple sources.
[00:23:07] So let me pick something. Let's make an A.
[00:23:12] which is create memo which is this kind of a drive value and it's going to be count
[00:23:18] Times two.
[00:23:20] Okay.
[00:23:22] and const
[00:23:23] We're gonna make B.
[00:23:24] Which is...
[00:23:25] Also,
[00:23:26] derived here
[00:23:28] Okay.
[00:23:29] And it's going to be count...
[00:23:32] plus one or something.  Okay.  So just two things.
[00:23:37] What's important to understand and...
[00:23:41] is that
[00:23:45] If we console.log A and B here,
[00:23:50] and get our driver going.
[00:23:55] Thank you.
[00:23:56] -
[00:23:57] there's no diamond problem it's called like the effect doesn't run
[00:24:01] twice because essentially
[00:24:05] Like,
[00:24:05] and B
[00:24:07] um,
[00:24:09] you know,
[00:24:10] Like...
[00:24:11] A changes and B both change.
[00:24:14] The effect knows only to run once.
[00:24:16] I can make more complicated examples here, but there's a topological sorting that goes on.  And this is something that MobX popularized.  The older frameworks like Knockout didn't have this.  But there's this guarantees here of updates being glitchless and that...
[00:24:33] any derived value is only going to execute once. We actually sort the dependencies in such a way  to ensure that the graph resolves properly and you don't end up with things over executing.
[00:24:48] So
[00:24:50] While it is Pub/Sub,
[00:24:52] It's PubSub with...
[00:24:55] certain synchronous
[00:24:57] guarantees.
[00:24:58] And...
[00:24:59] Yes, the subscriptions are kind of handled automatically for you under the hood.
[00:25:07] So you're basically saying that React does magical shit and React is actually straight for it. Well, React is really really simple in its model. And when I say simple,
[00:25:17] I mean that in this term simple.  People get confused by this, and I want to point this out.  Redux is one of the simplest libraries that has ever existed.  It is literally just like a reducer.  If you think about it, it's like...
[00:25:30] - Thank you.
[00:25:31] It's like, what is it? Const
[00:25:34] next equals function of...
[00:25:38] current state plus action. It's not hard to picture how you can compose these and build them. It's very simple. You don't need very much code. In fact, the RxJS people will be like, "Huh, that's a scan operator. We can do Redux in a one-liner."
[00:25:51] like the whole repo you don't need a repo you just use one operator in rx  and they're right  um...
[00:25:57] The thing is,
[00:25:58] As you know, classically, before stuff like Redux Toolkit,  this led to an incredible amount of boilerplate  or complications, not complex, but complication.  I feel hooks are kind of like that.  Hooks are generally just,
[00:26:11] You have to know that there's a component that reruns and that there's an array of state that is hoisted outside of that component that gets referenced.  So every time it sees a hook, it keeps a counter and goes, okay, I'm going to look at index one and index two and index three.  That's why there's hook rules and all that stuff.  That's why you can't nest them.
[00:26:27] None of these are problems the reactive system has. You can always go like, "Oh, let's just wrap an effect in effect." Who cares?
[00:26:34] create effect.
[00:26:36] You know, let's...
[00:26:38] Let's just...
[00:26:39] do this. I mean, this isn't gonna have
[00:26:43] This very basic example is not going to do anything, but I just want to point out that essentially...
[00:26:49] So
[00:26:50] There's no...
[00:26:53] There's no impact here.
[00:26:55] like...
[00:26:56] to these kind of rules because it's a different model, like a completely different model.
[00:27:04] So did React fuck up this model?  No, React is just different,  and they value different things.  So each can take theirs to their own extension.  And just like the virtual DOM is not innately bad,
[00:27:18] as people have you believe, and we'll talk about that today. There's just implications of making these sort of decisions.
[00:27:30] There's a question about solid needs to take. Not today, not right now at least. We're going to focus on reactivity. This isn't about, it is about solid, but it's not about solid.
[00:27:40] I don't know.
[00:27:42] Yeah, yeah, yeah. And you're right, there's some level of scheduling. It's synchronous scheduling, but there's some level of scheduling here. Um...
[00:27:53] Yeah, people writing their version of the Redux equation.  If you look at XState, they have an even cooler version of it,
[00:28:02] action becomes
[00:28:04] message and then it gets state and action out which is probably more
[00:28:09] realistic thing of what actually happens and why Redux is
[00:28:12] Maybe too simple, so to speak.
[00:28:14] But this is just kind of like high level...
[00:28:19] Talking about it.
[00:28:20] So,
[00:28:22] Okay.
[00:28:23] Don't mix your asses with your bases. You guys are great. Okay. Okay. So we're starting to get an idea on this fine-grained reactive stuff. It's the key part of it is it's synchronous.
[00:28:34] Like, I'm going to...
[00:28:37] I mean...
[00:28:38] I'm just gonna try and like reduce some of this so you can't do this, but what do I mean by synchronous?
[00:28:44] I'm...
[00:28:46] I'm going to show you right now what I mean by synchronous. Synchronous means that
[00:28:49] If I go set timeout in here for some reason,
[00:28:53] Like, I decide...
[00:28:54] that I'm going to wait...
[00:28:56] two seconds
[00:28:58] or two seconds to show...
[00:29:01] my console log.
[00:29:04] and do this.
[00:29:06] Well...
[00:29:09] Let's refresh.
[00:29:13] Unfortunately, it logs once,
[00:29:15] and it's never going to log again.
[00:29:17] Because...
[00:29:18] That tracking using the runtime stack can't work over an asynchronous frame. It doesn't know how to resume
[00:29:25] it when the timeout comes back
[00:29:28] There's a solution to this, right?  You can go const a...
[00:29:32] equals...
[00:29:34] A, so to speak, you know.
[00:29:36] All I'm doing is actually not going to use A. I need like
[00:29:39] the
[00:29:40] and B2.
[00:29:43] And in a sense,
[00:29:45] If I put V and V...
[00:29:48] two in here or I...
[00:29:51] Um,
[00:29:52] Let's refresh the playground.
[00:29:57] What you're going to see is
[00:30:00] it's working again.  And in a sense, this is like the dependency array, right?  I just added the dependency array back by putting here.  And Solid has a helper called on,  and Vue uses something called watch,  where you can say, listen to these specific things.  And then we handled the tracking at the root of the effect.  But it just means like,
[00:30:17] While an effect could be an async function, for example, I can put like an await in here  and stuff.  Only stuff...
[00:30:22] above the first await is going to track. So generally, I don't tell people that they can just make async functions effects. They can.
[00:30:28] You can make a cool demo where you can use cleanups to handle race condition cancelling and stuff like that.  I think that demo is actually on the solid site.  But my point is that...
[00:30:40] This is a synchronous system.  Um...
[00:30:43] that has guarantees.  That's why you use it.
[00:30:47] So, yeah. What's the difference between reactivity and finding? Reactivity is just a blanket term to define anything that changes. Like, in my opinion, when you say something like reactivity, you could be talking about React 2 or Svelte because let's face it, React and Svelte are very similar.
[00:31:01] which we might get into today, but maybe not.  My, what I'm more fine grained, I'm talking about the specific type of runtime reactivity  that uses automatic tracking, uses the call time stack, and it's basically designed
[00:31:14] in such a way
[00:31:15] that it tracks these dependencies live.  And you might be going, well, why would you bother that  and not have the fixed arrays?  Well, the powerful thing is, is...
[00:31:24] You...
[00:31:25] can
[00:31:27] change the dependencies on the fly. Every time it runs, it's your last set of dependencies.
[00:31:32] And I've shown this kind of example before.  Maybe I can just pull up a code sandbox with it.
[00:31:39] But yeah, I can probably do that.  Let's just pull up a...
[00:31:43] one of my code sandboxes here in my drafts. No, actually all sandboxes. I actually have a reactivity playground that I use to teach people reactivity and
[00:31:53] there's this example here with conditional dependencies and i want to show this because i think
[00:31:58] maybe it'll help a bit. Because with the fine-grained system, if you have
[00:32:03] a first name and a last name, and a toggle to switch between first name and last name, like here. See? It's not show full name, only show the first name.
[00:32:13] otherwise show first name and last name. What you can do is you can create an effect
[00:32:18] that logs the name, right? So what I've got here is my name is John Smith, okay?
[00:32:24] Can I collapse that? Yeah, okay.
[00:32:26] Beautiful.
[00:32:27] And then...
[00:32:30] If I set the full name to false, now it just says my name is John, but what's key here is if you change the last name
[00:32:36] While it's not listening to it, while it's like short cutting on the first one, it doesn't run again. See, there's no log, there's no nothing. So then when you set the full name, it has changed, it's there. But it's important to understand that the dependencies can change at runtime on every run. So they're not fixed. This is not something you can do with a dependency array.
[00:32:59] And I think this is an important distinction here  and why the runtime systems work this way,  because you can do very powerful things based on what is...
[00:33:09] like the work you need to do. You can actually reduce the work that you need to do compared to having fixed dependencies.
[00:33:17] We always use text to show this stuff, but if anyone's, again, probably should check out, if you haven't seen it already, probably check out some of my other talks about Solid.js. I don't think I'm going to build it right now, but this doesn't have to be a console log that we're doing here. You know what I mean?
[00:33:34] just, just...
[00:33:36] This is more about rendering, but what I'm getting at is this could be...
[00:33:42] Like...
[00:33:43] You could create a DOM element and have the effect right to that DOM element.  But we'll get to that more in a minute.
[00:33:49] I think it's important to understand that...
[00:33:54] these reactive systems
[00:33:57] uh
[00:33:59] have specific trade-offs or considerations
[00:34:02] so that they excel at a certain problem. In this case, fine-grained reactivity is all about  synchronization and about dynamic dependencies. It's basically perfect for templating.
[00:34:11] that's why all these frameworks have it.  It's just such a powerful templating tool  because you can have like
[00:34:17] 10 different points of data
[00:34:19] in your template and they can all
[00:34:21] have their own expressions and update independently. Now,
[00:34:24] Most frameworks don't actually do that.
[00:34:26] which is what we're going to talk about today.  Um...
[00:34:30] but
[00:34:31] That's why this type of reactivity is so popular in the core of most JavaScript frameworks.
[00:34:37] Okay, how's everyone doing so far?  Are we somewhat clear on what fine-grained reactivity is?  This kind of idea is the signals  and computer memos or effects?
[00:34:46] We doing okay?
[00:34:49] I know this stuff's heavy and I'm going pretty fast.  I'll give you whatever sources I can to back this up.  But I realize sometimes I do like a stream  and I cover this in like,
[00:34:58] I don't know, or talk, and I cover this in like two minutes.
[00:35:01] And this topic could be like an hour or two on its own.
[00:35:06] *sad*
[00:35:08] I'm going to go ahead and put it in the middle.
[00:35:09] - Okay.
[00:35:11] Question. Difference in async?
[00:35:15] and eager? Well, it depends.
[00:35:18] Um,
[00:35:19] There are systems that have lazy derived values, which makes it a little bit easier to schedule your effects. But generally speaking, like in solid and
[00:35:28] view and a lot of the frameworks, we schedule our effects. So I say it synchronously by default,  but a lot of time when you get into render frameworks, you'd want to batch stuff. So you might
[00:35:36] schedule your effects later,  and then pull the values at that point.
[00:35:40] Um...
[00:35:42] So, uh...
[00:35:44] I think that...
[00:35:47] Async, in general, though, is a slightly different...
[00:35:51] problem. And I'm actually going to talk about async here in a second with RxJS, because that's really what its power is.
[00:36:00] uh term coined uh i think it was first showed up in a in a uh paper uh in 1989 uh actually  one second i gotta go intercept fedex two seconds i'll be right back
[00:36:12] I'm going to go to the kitchen.
[00:36:15] *thud*  *thud*
[00:36:19] Yes.
[00:36:22] Thank you.
[00:36:23] Thank you.
[00:36:25] Thank you.
[00:36:47] Thank you.
[00:36:49] Thank you.
[00:36:53] Okay.
[00:36:55] -
[00:36:57] Okay.
[00:36:59] -
[00:37:03] *Tonk*
[00:37:05] Thank you.
[00:37:06] - Thank you.
[00:37:09] Sorry about that. Yesterday I didn't answer the door and then they like, they like left a like, oh, we'll come and deliver it tomorrow thing at any time.
[00:37:19] End.
[00:37:19] you know, obviously a little bit awkward, um, because, uh,
[00:37:26] Yeah, I wanted to make sure I got that package.
[00:37:29] Anyways, yeah, sorry, and actually again,
[00:37:34] I do have an article about this. It's called
[00:37:38] What the hell is reactivity anyways, I think.
[00:37:41] What?
[00:37:43] the hell is reactive programming anyways.
[00:37:47] If you wanna know a little bit more about the history of it,  I'm gonna just drop this in the chat and
[00:37:54] I went through a lot of struggle here because a lot of the original reactive literature was about something called FRP, Functional Reactive Programming.
[00:38:06] And
[00:38:07] Neither versions. Well, it's like
[00:38:11] It described the whole paradigm in lots of different approaches.  And Rx kind of latched onto one part.
[00:38:18] And like...
[00:38:19] this synchronous stuff is like a different part of it.  And they all kind of candle the whole bubble,  but...
[00:38:25] FRP purists are gonna be like, you know,  this isn't reactive programming.
[00:38:29] I went through a bunch of stuff, but essentially, yeah.
[00:38:32] 1989 paper which first used the term reactive program.  Real-time programs are usually reactive.  Like, this has been a vague term for a very long time.
[00:38:43] So...
[00:38:44] I hope that article helps, but honestly, probably will just give you more questions.
[00:38:51] All right.
[00:38:52] I did not.
[00:38:54] - Yeah.
[00:38:55] I think... Thanks, David.  All right.
[00:39:01] - Yeah.
[00:39:02] oh man okay here we go okay so let's continue okay so let's talk to rxjs for a minute um
[00:39:08] *sad*
[00:39:11] So RxJS, actually, you know what?  Maybe I can just...
[00:39:15] I'm hoping that if I just pull up their website, they'll give me a nice look. Because RxJS,
[00:39:21] is...
[00:39:23] a little bit different.
[00:39:24] And it's a lot more complicated.  Yeah, I do not want the references.
[00:39:30] Because, as I mentioned, historically...
[00:39:33] Signals are called observables. Rx also has something called observables. Unfortunately, these are not the same thing.
[00:39:41] um
[00:39:43] I showed you a bit like what solid looks like,  which is not unlike view or mob X or something.  Right.  Um,
[00:39:51] Rx basically...
[00:39:53] Is this matter okay? That's the description.
[00:39:56] Observable is an event stream. So essentially, if you were to make a new observable, you can basically say,
[00:40:01] set up a sequence of things to notify a subscriber from.  Usually you aren't creating these observables yourself.  They'll come from like a DOM event or some kind of existing thing.  But essentially it's a series or sequence of
[00:40:13] data emissions that can happen.  You can set a timeout, you can do them async,  and something can subscribe to those changes.  And usually what happens is the subscriber...
[00:40:24] knows how to handle either the next data, an error, or if the sequence is complete.
[00:40:34] But,
[00:40:36] And this is often called push-based because...
[00:40:41] Essentially, you can kind of see it. It's just pushing the next value on to the stream, so to speak. There's also pull-based streams. I don't want to get into it too much. Stuff like fine-grained is actually push-pull, because if you look at it...
[00:40:55] If we look at the playground where I was playing with solid stuff, you pull the value out and you use that to create the subscriptions, which then...
[00:41:04] you know, like, or pull the value out here of this effect, and then
[00:41:07] Later when you set the signal, it pushes it out and updates the things that matter. Whereas in Rx, generally it's either pure pull or pure push at least. I could be wrong, someone could correct me on this, but essentially...
[00:41:20] This is kind of like the setup for it.  And they're not giving me what I want to see yet.  Okay, so this is fine.  So this is all push-based.  You can see I can make something that just...
[00:41:29] emits a number 42. But
[00:41:32] There's a couple key things about Rx. First of all,
[00:41:34] Rx observables are cold. And what I mean by that is the producer
[00:41:39] is created like...
[00:41:41] by default on each subscription. So if your stream was an event,
[00:41:47] It'd be like every time you subscribe to your event stream,  it would add the DOM event to listener underneath the hood.
[00:41:54] like there's a separate dom event listener for each
[00:41:57] place you listen to the stream that listens for clicks.
[00:42:00] So every subscribe...
[00:42:02] Now you get a new DOM event.
[00:42:07] - Thank you.
[00:42:08] The other thing is, and I'm, come on, show me operators, operators, operators.  No one really writes Rx.  Like they're just trying to explain the basic concepts of, of observables and
[00:42:19] Because...
[00:42:20] you know, you can basically set them up to be the sequence. But
[00:42:24] The thing is, in practice, what ends up happening
[00:42:27] Come on, come on.
[00:42:28] Maybe I'm just like not going to find it in this section on observables.  What's,
[00:42:33] Let me see here.  Observer...
[00:42:35] Let's do operators. Sweet.  In order to deal with a stream, you get a library that's kind of like Ramda or Lodash.  So essentially, it's very common that you can go like, give me a...
[00:42:46] stream of one, two, three,
[00:42:48] pipe it
[00:42:48] map onto this and then subscribe and give me the final value or and pipe is kind of like a generic  way of kind of
[00:42:57] pushing the values of the stream all the way through and transforming them
[00:43:01] and
[00:43:02] You know, you can pipe a bunch of operators
[00:43:05] but it's literally doing like a reduce left, I think,  or reduce right, where if you're familiar  with functional programming, where it's like calls one function  and passes the other function as its child,  and it passes through.  And the key thing with this is,  once you have this ability to pipe,
[00:43:20] these kind of operations, like a map operator,  you start being able to create all sorts of operators on top,  like concat all, merge all, switch all, exhaust all.  And I think, time is speaking, something...  Rx used to have more, like close to 200 operators, I think.  But these days, I think there's about 70 or 80 operators
[00:43:38] operators. So you can basically do whatever, flat map, merge map, switch map,
[00:43:45] And they like to use stuff like marble diagrams to show the passing of time. You can see that the focus here is actually quite different.
[00:43:52] um
[00:43:53] - Bye.
[00:43:54] Yeah, here's some operators for creating stuff. So you can go from maybe an array or from a promise or something from an event. You can
[00:44:05] Join them. Combined Latest is a good one because this is this like basically because
[00:44:09] you have this series that you're piping along like a stream,
[00:44:13] If you want to...
[00:44:14] merge or split.
[00:44:16] Thank you.
[00:44:17] your dependencies, it's all fixed.
[00:44:19] So essentially you're like,
[00:44:21] Like, let's look at combined latest for a moment.
[00:44:23] Combine latest.
[00:44:25] whenever any input observable emits a value, it computes a formula using the latest values from all inputs and emits the outputs of that formula. So if you had two
[00:44:34] you know,
[00:44:35] observable streams coming through here, one doing ABCD and one doing 1, 2, 3, 4, what you'll see is each time
[00:44:43] these like emit you have a1
[00:44:46] Then you have B1.
[00:44:48] then
[00:44:49] B2 emits both the latest value whenever this changes B3. It's gonna be B4 then it's gonna be C4 and
[00:44:57] D4, E4.
[00:45:00] This
[00:45:02] is kind of how you...
[00:45:04] put these things together.  And there's different...
[00:45:07] Like, if you don't like Combined Latest, there's other algorithms.  The reason I wanted to bring up Combined Latest is if you...
[00:45:14] You can start seeing how this is really powerful, you know, doing things like async
[00:45:18] stuff like building in a system that handles retries.  Like essentially you could have something that's like fetch some data,  uh,
[00:45:26] uh,
[00:45:27] retry three times and like wire it all up explicitly.
[00:45:31] But
[00:45:32] If you want to do something like templating, you know, where you're like combining these expressions, you know, kind of like what we saw here.
[00:45:39] Like, I don't want to rewrite this in RX right now. First of all, you don't get the guarantees on the glitch-less-ness, but also, like,
[00:45:46] This one only has a single signal.  This one has two signals.  You'd be like combined latest A, B...
[00:45:53] And then do the side effect.  And the problem is, if you have...
[00:45:56] 15 of these
[00:45:58] in your JSX templates,
[00:46:00] it's a mess. You'd have to hoist it out of your template and then make these into their own observables and then read those observables or make them into something called behavior subjects and read them in all the different locations. Usually what people do with RxJS is they just
[00:46:16] put the whole thing together for a view and go,  re-render this view when any of its dependencies change.  So you've seen RX actually pair very well with things  like the virtual DOM to a certain degree.
[00:46:28] However,
[00:46:30] Because it's push.
[00:46:32] It's like almost...
[00:46:33] immediately at odds with something like React, which is very much pull.  And this has kind of historically caused a friction where the React core team said,  like, we're not fully reactive or something.  I think they're changing their message because I think reactivity...
[00:46:45] is a broader term, and I think everyone's starting to realize that now.  But classically, when RxJS was sort of the only game in town,
[00:46:51] Um...
[00:46:53] It meant like a very different update model from how React works and mostly
[00:46:59] Partially why I end up going with the term fine-grained for what this kind of other reactivity is
[00:47:06] and why I lean to using the word signal instead of observable,  was to get away from RxJS,  because people have a lot of assumptions there,  and they're both really good at their own type of problems,  but they're completely different.
[00:47:18] You can compose behaviors in both.  As you can see, you can like build up
[00:47:22] things using signals like you can with Rx.  Signals don't have operators, but you could write operators, I suppose.  But you can see that they're tailored each for their own use case.
[00:47:37] How's it? How you guys all still alive? Yeah.
[00:47:41] Yes, yes, thank you. What was that called? Is that called Reduce Write?
[00:47:46] I can't remember, reduce left. But essentially, that's what I was trying to explain here.
[00:47:54] And this is a challenge because teach people RxJS sometimes feels like you're teaching them academic work.  I mean, don't get me wrong.  Rx is really powerful.  You can, as I said, you can go like...
[00:48:05] you can do something like from events, so whenever someone clicks on the document,
[00:48:09] pipe in that click event, scan it. So take the previous value
[00:48:16] starting with zero, so this is kind of like a reducer.  So start from zero, and every time this click event happens,
[00:48:22] Add one.
[00:48:23] and then subscribe to that number
[00:48:26] and console log it.
[00:48:28] So when I go here and I click it,
[00:48:31] you're going to see the clicked number of times going down the screen.  But this is...
[00:48:36] This is how you would write...
[00:48:40] this kind of counter whereas you know
[00:48:42] um,
[00:48:44] we just wrote this,  um,
[00:48:47] essentially like I mean, we didn't quite write it, but you could write this in
[00:48:52] in here, and instead of its interval, go document
[00:48:55] you know,  I mean,  at event listener,
[00:48:58] I mean, let's rewrite it. Document.addEventListener
[00:49:03] Click.
[00:49:07] *Doo doo doo doo doo doo*
[00:49:09] Do this here.
[00:49:11] Okay.
[00:49:14] if everything is still working
[00:49:18] Yeah.
[00:49:19] Here we go. I mean, I'm doing the other stuff, but you can see that that's the logic.  And I mean, this has got a bunch of extra stuff.  If we actually skim this down to the most basic version...
[00:49:31] Again.
[00:49:34] In a...
[00:49:36] There is...
[00:49:38] Less...
[00:49:39] to
[00:49:40] potentially grok with the idea of like here's a signal
[00:49:44] create an effect that listens to that signal compared to like,
[00:49:49] what's going on here.  So there's a different learning curve.  And I think they're both good,  but I think it caters to different cases.  It's very easy to do the granular stuff  and combining and uncombining,  like I showed with the A and the B,  like the way that it splits and splits.
[00:50:03] and whatnot dynamically just because the way it works at runtime, whereas RX, everything is explicit and you have to pipe and stream it all the way through.
[00:50:11] So there are things in Rx, and an Rx fan will point it out to you.  They'll be like, oh, what about behavior subjects?  Because behavior subjects let you read the value...
[00:50:19] - Okay.
[00:50:19] I tried to build SolidJS on behavior subjects. Other people have tried to. There's probably some frameworks out there. What is it called?
[00:50:28] Um...
[00:50:29] I'm not gonna remember off the top of my head, because it got... was it...
[00:50:33] RxJS DOM
[00:50:37] Eh? Eh?
[00:50:39] Thank you.
[00:50:40] Um...
[00:50:46] I will say...
[00:50:47] yeah pluck filter debounced  I will say writing UI is this way
[00:50:52] Um...
[00:50:53] can be challenging. I think CycleJS is probably
[00:50:57] one of the best examples of taking this Rx approach.  But again, they did it by keeping it very clear,  keeping their side effects completely out of the system  and wiring in reactivity in loops.  Let's see if there's an example cycle.  So you'd write a component like this,  and he's not using a JSX, but he could.  But you see VDOM here.  Essentially, it's very common with this pattern  because of wanting to...
[00:51:20] combine this information
[00:51:22] you know, map, combine latest, kind of stream it in,  that you're going to use a VDOM or something to do diffing.  And...
[00:51:30] for doing fine-grained updates of templates, this was not really an option, but
[00:51:38] This is why, like...
[00:51:39] you don't find Rx usually in the core frameworks between this kind of granularity consideration.  And also because
[00:51:49] How should I put this?
[00:51:51] Thank you.
[00:51:52] - Okay.
[00:51:53] there's a steep learning curve on the operators.
[00:51:56] And...
[00:51:59] *shrie*
[00:52:02] Pfff.
[00:52:03] Yeah, I think those are probably the two main ones. I think
[00:52:06] If you're interested in this topic further, I strongly, strongly recommend an article that came out about a week ago.
[00:52:16] Which...
[00:52:17] was from
[00:52:19] a big-time Angular fan, works on Angular for years.  He was talking a bit about how he finally came around to why signals
[00:52:28] Um...
[00:52:30] might be the right choice for
[00:52:33] angular which is a big step because angular out of all the frameworks have probably been the closest to
[00:52:41] And I'm just going to...
[00:52:42] drop this one in here, closest to RX this whole time.
[00:52:46] So
[00:52:47] If you have questions and you're really into Rx and my explanation doesn't make sense to you, read this article.  This is an Rx person convincing you you should use fine-grained reactivity.
[00:52:57] Alright.
[00:53:00] All right.
[00:53:05] Where are we here? Just catching up with chat really quick.
[00:53:08] Thank you.
[00:53:15] um
[00:53:16] Share operator will make...  Yeah, yeah, yeah.  I assume there's a way to do it.  But it was interesting to me  because this is one of the first things  that really made me...
[00:53:25] think about this is I don't know if you're familiar with cycle.js
[00:53:29] Anders Daltz is very prolific in his writing about RxJS and these kind of topics, and he made something called XStream.
[00:53:37] And what Xtreme is,
[00:53:39] is extreme. Let's try cycle. Maybe I can get it.
[00:53:44] Yeah.  X-ray.
[00:53:45] he made his own fork of RX even after he'd used RX for years because  he wanted to trim it down to 26 core operators and factories
[00:53:53] only hot streams.  Like,  basically,  he looked at why RX  wasn't a suitable,  um,
[00:53:59] And this is a guy who loves this pattern and approach.  It wasn't suitable for UI.
[00:54:05] and came
[00:54:06] up with his own library to try and fit with that and keep those kind of benefits.  I tried to go this path and I just ended up,
[00:54:15] giving up essentially which might not be fair i think this is always interesting when someone gives up and then
[00:54:20] Years later, we realized there's something
[00:54:23] nugget in there that's really valuable but i just want to point out that like
[00:54:28] The reasons you might choose the different solutions...
[00:54:31] aren't only academic. This comes from experience of people using them, even big fans of the approach, acknowledge that
[00:54:40] Rx isn't always the right fit for, say, templating your UIs.
[00:54:50] Yeah, and people have preference there, right?
[00:54:53] The interesting thing is like when you go all fine grained,  you don't even have Redux necessarily,  but I think RX fits really nicely still as a layer of interop,  interop ability.  Um,  because like you can always just plug in your observables into another  system.  Uh,  Svelte just lets you put a dollar sign on the front of it and you're done.  Solid has a from operator and a,
[00:55:14] So reactive libraries, talking to other reactive libraries, has a bit of an interop, but you can keep a lot of the benefits of both sides. And I think that's the best way to use these as needed. But...
[00:55:24] in my opinion,
[00:55:25] Uh...
[00:55:27] RxJS is kind of like the GraphQL versus TRPC thing.  You only need it when you need it.  And until you need it, you don't need it.
[00:55:41] Alright.
[00:55:45] interesting actually it was one so there was a
[00:55:48] Yeah, yeah.
[00:55:50] um
[00:55:54] Yeah, it's tricky because like once you go in the behavior path and you're trying to pull that way,  you like almost want everything to be a behavior and then it's like,
[00:56:01] even clunkier to deal with.  I...
[00:56:03] It's interesting because you're kind of coming from the opposite side, David, but it's, it's, it's, it's, it's cool to kind of hear like some similarities on that path.  Um,
[00:56:12] I think I think
[00:56:14] Also, if you're working a lot with React,
[00:56:18] Like...
[00:56:19] that piece of switching from push to pull
[00:56:22] can be tricky with a very...
[00:56:24] push-based system. It takes extra consideration. One thing that I've been noticing in our patterns  on solid side is over time, even though we're push-pull, we're starting to lean heavier on the  pull side than the push side. The push side's good. It's what gives us the power of the updates, but
[00:56:40] using that to schedule on the pull side kind of gives us a best of both worlds thing and um
[00:56:45] We've been...
[00:56:46] we've been having great success with that on some,  uh,  projects,  uh,
[00:56:50] trying to use that approach to kind of replace the core of some projects that are classically using immutable structures.  I'll have more to share about,  about that,  um,  in the future,  but been doing really awesome work with Tanner Lindsley on,  with,  with some of his libraries.  Um,  um,
[00:57:02] not talking about solid integration, but actually talking about the core, the agnostic core, and using
[00:57:08] push-pull reactivity to power it is really quite interesting.  I think might finally be the bridge that you all are looking for.
[00:57:16] But it takes a little bit of work. We had this all through. I know the X-State Solid Adapter has actually been kind of a lot of work.
[00:57:22] We've been trying to figure out patterns
[00:57:25] to make that approach more standardizable, so that it can be the default instead of the other way around. Because it's a lot easier to start
[00:57:32] from a reactive system and kind of
[00:57:35] how should I put it
[00:57:36] - Thank you.
[00:57:38] lose granularity.
[00:57:39] to get into one of these immutable renderers than it is to go the other way and always have to do this extra diffing.
[00:57:55] Yeah.
[00:57:57] Yeah, I think the problem is you kind of need both.
[00:58:01] like he couldn't replace everything with being hot.
[00:58:04] But on the other hand, like...
[00:58:07] being cold was also not good. So like you, you kind of, you kind of need, need both. Um,
[00:58:13] Yeah.
[00:58:16] Thank you.
[00:58:24] Yeah, we're doing some really cool work here. I can't wait till this gets a little bit further and show the impact of that.
[00:58:34] I can't really see why one would use Rx and Redux, I feel like mixing these don't remember to showtime with you
[00:58:40] Well, I mean, it's...  Or what was the other one? There's...
[00:58:44] uh,
[00:58:45] The generator one, Sega.
[00:58:48] Redux Saga or whatever. It's because Redux is missing this piece.
[00:58:54] And if you want to understand what that piece is, watch any talk by David Corsod or David Piano who's in the chat.  He will explain to you pretty quickly that missing piece from Redux.  And because that piece is missing, you need...
[00:59:06] that
[00:59:07] other part why people grab stuff like saga or rxds when the solution might be actually simpler
[00:59:16] They do that indeed.
[00:59:19] - Yeah.
[00:59:22] Okay.
[00:59:26] All right, so okay, we I know our X is not everyone's topic and
[00:59:32] Um,
[00:59:33] But...
[00:59:35] Hopefully you have at least a little bit.
[00:59:38] of an idea of,
[00:59:41] how RX reactivity and this reactivity differ and they're not just replaceable,  um,  with each other and why like people tried to unify it.  Um,  RX,  some people view as a unification,  but it's missing stuff.  I've seen,  um,
[00:59:54] better attempts at unifying it than that.  But ultimately...
[00:59:59] even when
[01:00:00] You unify it, you recognize that observables and signals are not the same thing. One's a stream,
[01:00:04] one's behavior.
[01:00:06] two sides of the same coin, whatever.  They are different things.  And...
[01:00:11] This is...
[01:00:13] while they look similar,
[01:00:14] the characteristics of them let them be more optimal for different use cases.
[01:00:25] Uh.
[01:00:28] Yeah, that's the thing. RTK has changed the equation significantly here, and I don't...
[01:00:35] I don't want to under...
[01:00:38] position that. It's more just like talking about like
[01:00:41] Like when we just talk about reducer like all the saga and I
[01:00:46] Rx, Redux and all that stuff was from a time period before RTK primarily.
[01:00:53] Okay, so yeah, okay, we talked a bit about this, we talked about Rx, we talked about signals, so let's...
[01:01:02] Let's continue on.  Let's look at Excalibur here.  So we should talk about compiled reactivity.
[01:01:07] I don't actually want to talk about compiled reactivity, um,
[01:01:11] too much because compiled reactivity
[01:01:15] generally...
[01:01:16] doesn't exist
[01:01:18] outside of reactivity with the renderer. The closest we've seen to compiled reactivity that's componentless hasn't been released yet, and that's Marko 6.
[01:01:27] Um,
[01:01:28] For the most part, compiled reactivity is just a specific type of rendering where you kind of compile away the reactive system.  So we're going to talk about it in part two here.  So let's get there.  Everyone good so far?  Let's grab some water.
[01:01:44] -
[01:01:45] - Thank you.
[01:01:46] All right.
[01:01:50] Okay, so
[01:01:52] - Okay.
[01:01:53] There's a lot of questions when we talk about reactivity with Solid.js and people go, "Oh, there's signals now. Everything's got signals. What are signals?"
[01:02:03] I'm going to probably use
[01:02:06] Preact to show this because I think preact is probably our best middle ground to kind of start from our mindset of like I
[01:02:13] hey, we are VDOM React, React like library,  and kind of walk the distance.  Because...
[01:02:23] I've shown previously how solid...
[01:02:26] renders, and we might get to that in a minute, but
[01:02:29] your basic
[01:02:30] example here and let me blow this up a bit this is pre-act uh repl playground here is
[01:02:36] We've got our counter, increment, decrement. We've seen this example a billion times.
[01:02:42] If...
[01:02:43] Thank you.
[01:02:43] I go in here and I go console.log...
[01:02:48] count
[01:02:51] And I go put the value in here.
[01:02:55] And I don't think they have a console. We're gonna have to do this ourselves  um
[01:03:00] Thank you.
[01:03:01] Let's see, is refreshing work in this one?
[01:03:03] Beautiful.
[01:03:04] We're going to see our count zero.
[01:03:06] And every time we increment, we just count one,
[01:03:09] Kalku
[01:03:10] Basically, it's gonna log because this component reruns
[01:03:13] Every time.
[01:03:14] That's how a BDOM works.
[01:03:16] Right?
[01:03:17] Yeah.
[01:03:19] You bet.
[01:03:20] Marco Six is cutting edge.
[01:03:23] Um...
[01:03:34] Sorry, someone's talking about it. I don't think there... I just want to stop here. I don't think there's anything you can implicitly count with Rx and bytes-first times. That's the...
[01:03:40] can be equivalent. That is true.  It's just like
[01:03:45] They're tailored a certain way to optimize. The difference is, of course, easy. Yeah, exactly. Like, it's a lot easier to solve the diamond problem with a synchronous system.
[01:03:59] like because it's just like it can walk the dependency graph. It's a lot easier to do
[01:04:06] the async like to model it if you have a concept of things being done.
[01:04:11] Right? So...
[01:04:12] I actually built an RxSolid library, which is actually solid signals that had operators like Rx, you know, and did time stuff like throttling.  I just deprecated at a certain point because I was just like, why am I doing this?  I could write it slightly differently and it would just be shorter and make more sense.
[01:04:26] But yeah, this is a good point to pull out.  Okay, so anyways, back to our counter.
[01:04:31] um
[01:04:35] The classic problem with these kind of situations, though,  and, I mean, there's nothing wrong with this,  is I'm going to...
[01:04:42] I'm gonna keep the button counter here,  but what I'm gonna do,
[01:04:45] is we're going to
[01:04:48] I'm gonna keep the increment button, I'm not gonna worry about decrementing, we don't care that much.  What I'm gonna do is, we're gonna add
[01:04:53] some more state here and we're going to add
[01:04:57] a
[01:04:58] what do I want to call this? Let's call it
[01:05:00] A list.
[01:05:02] Okay?
[01:05:03] I'm going to add a set list.
[01:05:05] And our list is going to have
[01:05:07] an array of a few things like
[01:05:10] Apple...
[01:05:13] Banana...
[01:05:17] Orange or something. Orange. Okay, whatever. Okay.
[01:05:23] and
[01:05:24] I
[01:05:26] We're also going to...  Sorry...
[01:05:30] Good, it remembers.
[01:05:31] We're also gonna like in here maybe,
[01:05:34] add like,
[01:05:35] Let's iterate over our list.  Let's do like list.map.
[01:05:44] Um...
[01:05:45] We need...
[01:05:46] fruit,
[01:05:48] Okay.
[01:05:49] and...
[01:05:51] We're going to make...
[01:05:52] I don't really care.  For now, we're just going to make a div.
[01:05:56] of our fruit, okay?
[01:06:01] Okay, yeah, we got fruit.
[01:06:04] The reason I want to show this is because
[01:06:10] If we go in here and...
[01:06:14] There's probably formatting in this tool and I'm just not aware of it. It doesn't
[01:06:17] really matter...
[01:06:19] Let me see here.
[01:06:20] Um, what do I want to do actually?
[01:06:23] Here.
[01:06:24] Okay.
[01:06:25] Okay.
[01:06:26] Nope, that saves it.  Okay, I was just trying to see if I could play with this a little bit.  I am not as familiar...
[01:06:33] with this playground, but it seems to be pretty decent. What I want to show you is if I go in here,
[01:06:38] and go,
[01:06:39] console log
[01:06:42] List.
[01:06:48] Alright, and maybe I can, like, remove some of these warnings or something. Um...
[01:06:55] But...
[01:06:56] Let's just...
[01:06:57] Let's just, is there a refresh on here?  No, I'll just page refresh.  Okay, it's fine.
[01:07:01] Thank you.
[01:07:02] You're going to see count.
[01:07:04] Zero.  And the list...
[01:07:07] three times, right?  And if I update the count,
[01:07:12] You're going to see count one and list three times.
[01:07:15] And.
[01:07:16] This shouldn't be unsurprising
[01:07:18] because of the way a virtual DOM works.
[01:07:21] But I wanted to point out that
[01:07:25] Essentially...
[01:07:26] If you change something that has nothing to do with the list,
[01:07:30] The list
[01:07:31] still re-renders. And again, this is a virtual DOM, so we don't care that much.
[01:07:36] But essentially
[01:07:39] We remap over the items
[01:07:43] And...
[01:07:44] we redo them all. Now,
[01:07:48] There's different things you can do here.
[01:07:52] Right?
[01:07:53] One thing is we could hoist the state or pull the state into its own component and do all that.  But the reason I wanted to use this example is because...
[01:08:04] is because this is the classic example. In fact, I think there was an article that was very popular a couple years ago. It was by this guy named Rich Harris. And this article, he said virtual DOM is pure overhead.
[01:08:19] And the example he used...
[01:08:21] in this article.
[01:08:24] He was trying to be...
[01:08:26] Explain that the virtual element isn't exactly slow and it's usually fast enough, but
[01:08:30] What he was trying to show is...
[01:08:32] that...
[01:08:33] it wasn't just about the expense of diffing stuff every time, it was that like
[01:08:37] if you change this state that had basically nothing to do with this
[01:08:42] items, you'd be like re-rendering these items every time. This is the same example we just built. And I,
[01:08:50] Admit.
[01:08:53] Thank you.
[01:08:55] I admit, when I saw this example, I was like, come on, you're stretching it a little bit, right?  Like, let's face it.  You use React, you're smart enough to know, like, you have to break components here and then use React.memo and key the prop and then you do that and then you get the performance you want, right?
[01:09:11] But that wasn't Rich's point.  Rich's point wasn't that you could solve the problem.  He meant that you literally had to be introduced to three new topics to solve this problem.
[01:09:19] problem. So for today's sake, I am not going to show you how to solve this by changing component boundaries.
[01:09:26] I
[01:09:26] Well, unless it's convenient for me.
[01:09:29] There's a trade-off
[01:09:32] Um,
[01:09:34] that we'll talk about in the way Svelte renders too, but we'll get to that in a minute.
[01:09:40] Because...
[01:09:42] this is kind of like your baseline so
[01:09:45] One thing you could do, as I mentioned,
[01:09:48] is
[01:09:50] you could
[01:09:52] We could just kind of like pull this counter down, right?  Like...
[01:09:56] If...
[01:09:58] If I just had another component here, let's make it
[01:10:04] Let's make it app.  I'm gonna swap where these things are.  And if we made this,
[01:10:08] our app component, okay?
[01:10:11] So I'm gonna move this up here.
[01:10:13] All right.
[01:10:14] Fine.
[01:10:15] And then
[01:10:16] If our counter went kind of back to what it originally was,
[01:10:19] Thank you.
[01:10:22] All right, which is
[01:10:25] Actually, I've already got it mostly here.  We can just get rid of this.
[01:10:30] we can get rid of
[01:10:34] this
[01:10:38] And then we can get...
[01:10:39] Rid of.
[01:10:42] We're going to call this one app.
[01:10:44] and we're not going to use value here, and we get rid of this.
[01:10:49] So
[01:10:49] and we get rid of
[01:10:58] this.
[01:11:00] And then...
[01:11:02] So
[01:11:04] We put back in, what is it?
[01:11:06] Counter...
[01:11:09] We change this down here to app.
[01:11:14] *sigh*
[01:11:15] Now, let's do some refreshing here.
[01:11:20] we'll see app, list three times, count zero.  Okay, that's expected.  Now when we click our counter,
[01:11:27] count updates, and list doesn't
[01:11:30] Doesn't
[01:11:31] Update anymore.
[01:11:34] Right? So...
[01:11:35] Ta-da, we solved their problem.
[01:11:38] Um...
[01:11:38] But it's a little bit more complicated if the state is semi-related, like Rich's selected value thing, where it actually does relate to the list, but not to the list redrawing, like the reconciling.
[01:11:52] And...
[01:11:53] But this is a good trick.
[01:11:56] It's such a good trick that...
[01:12:02] the Preact team realized
[01:12:04] that they could use...
[01:12:05] signals
[01:12:07] Here.
[01:12:07] to actually, to basically do something very similar.  So if you're following so far,  I'm actually gonna go back a few, oh no, I can't,  'cause I did it, okay, that's fine.  What we're gonna do,
[01:12:18] is we're going to now introduce
[01:12:23] Preact signals and let me let me show you what's going on here from
[01:12:28] @preact.
[01:12:29] signals and I'm using preact as my guinea pig here, but this is very similar to quick
[01:12:37] and in some ways similar to Vue, but we'll talk about Vue
[01:12:39] in a minute. So I'm just going to make a use signal here. Okay.
[01:12:46] And
[01:12:48] I want to put them back together again just because
[01:12:52] Um...
[01:12:55] Splitting out a component is
[01:12:57] the way you solve it generally speaking, or using memo or doing something like that. But what's cool about
[01:13:04] you know,
[01:13:06] Preact signals.
[01:13:08] is that
[01:13:09] Okay.
[01:13:12] I'm not.
[01:13:12] I know I'm just like erring it left, right, and center here while I'm getting this back to where it needs to be.
[01:13:17] Thank you.
[01:13:18] is...
[01:13:18] is this.
[01:13:20] If we...
[01:13:22] Update.
[01:13:24] This from you state:
[01:13:26] to use signal.
[01:13:30] All right, and now their API changes from value set value.
[01:13:34] the...
[01:13:37] And then...
[01:13:39] We'll make this one...
[01:13:41] use signal as well we don't we don't really have to but we'll do it for the  sake of this and we'll just call this one list
[01:13:53] And then...
[01:13:54] list.map
[01:13:57] right list.value.map
[01:14:02] Let me show you something kind of cool.
[01:14:09] When I increment, set values, not set, sorry, I actually have to update the APIs here.  Sorry.  Set value now becomes.
[01:14:16] value
[01:14:18] dot value, I probably should use a different name plus plus. Okay, cool.
[01:14:22] All right.
[01:14:24] Try this again. Clear this out.
[01:14:28] "app" lists three times.
[01:14:31] I press increment
[01:14:34] And
[01:14:35] What's going on? It's updating.
[01:14:37] Thank you.
[01:14:37] but it's not console logging the app,
[01:14:40] or the list anymore.
[01:14:42] And you're like, wow, wow, this is crazy.  Like...
[01:14:45] For most people
[01:14:46] Um...
[01:14:48] Actually...
[01:14:50] or for a lot of people, let me say,
[01:14:53] And it's gonna do it.  The only time they've ever seen that happen before
[01:14:57] like in such a
[01:14:58] visceral way in terms of like scene code that looks like react isn't solid right
[01:15:04] Because if I go here and I go console.log.com,
[01:15:08] app.
[01:15:12] And then I go this. Sorry, what am I missing here?
[01:15:15] Do, do, do, do, increment, increment.
[01:15:20] Just refresh.
[01:15:23] You can see it's updating and it only logged app once.  So everyone's like, oh, wow, these signals things are,
[01:15:29] are pretty cool.
[01:15:31] Right?
[01:15:33] But to understand what's going on here,
[01:15:36] is
[01:15:38] preact
[01:15:39] is actually using
[01:15:42] um
[01:15:44] that trick of making the child component, essentially.
[01:15:48] Because...
[01:15:50] you pass the signal straight to the binding and it goes, "Oh, this is a signal. I'm going to wrap this expression separately."
[01:15:56] But if you went value dot value,
[01:15:59] and do this.
[01:16:03] Bye.
[01:16:03] and pressing Command.
[01:16:06] now it's
[01:16:07] re-rendering the whole component using app and list
[01:16:09] console log over and over again.
[01:16:12] And
[01:16:13] Why would you go value by value? Well, maybe because for some reason you want to show count times two.
[01:16:18] Thank you.
[01:16:19] Right?
[01:16:22] you have to get the value to multiply it by two, right?
[01:16:25] So,
[01:16:28] Now...
[01:16:30] We're back to...
[01:16:32] re-rendering our virtual DOM, right?  And this is different
[01:16:36] Right.
[01:16:37] than solid because if I go count times two
[01:16:42] It's still...
[01:16:43] Gonna not.
[01:16:45] Do it.
[01:16:47] Right? Like, because essentially,
[01:16:52] using my console log example up here,
[01:16:55] What Sol is just doing is just running a create effect around that.  In fact, if you look at the code, it basically looks like that.  This is an insert function, but it's essentially like create effect...
[01:17:06] Run this
[01:17:07] count plus two whenever.
[01:17:10] and
[01:17:13] But I want to clarify this because it's important to understand
[01:17:19] understand this because there is a solution to this do you know what the solution is to this
[01:17:24] Well...
[01:17:25] We have another primitive called
[01:17:27] Use computed.
[01:17:29] Now if we use computed,
[01:17:31] Here.
[01:17:34] And we go...
[01:17:35] Const
[01:17:37] Double
[01:17:39] Count.
[01:17:40] equals use computed.
[01:17:44] Bam.
[01:17:47] Now we can go back
[01:17:49] to...
[01:17:52] Passing it straight through.
[01:17:56] And...
[01:17:57] If you look at it, let's refresh again.
[01:18:00] If you look at it, it's not gonna do the logs again.  So you can hoist it into
[01:18:07] into another reactor primitive, basically make it a signal again. So as long as you keep on wrapping it as signals, you can...
[01:18:15] keep the optimization going. I just I want to point this out though because
[01:18:20] Um...
[01:18:24] There's slight...
[01:18:25] differences here because...
[01:18:27] I mean, this was fine...
[01:18:30] for this scenario, but like...
[01:18:33] Let's pretend we add another button.
[01:18:36] to our page.
[01:18:39] And our new button.
[01:18:43] does something a little bit more interesting.  Our new button...
[01:18:46] Um...
[01:18:48] .
[01:18:51] List
[01:18:52] dot push or list dot value dot push
[01:18:57] Grapefruit.
[01:18:59] All lowercase, grapefruit.
[01:19:05] And I called it increment. Let's call...
[01:19:06] Push. Okay.
[01:19:10] Okay.
[01:19:12] And
[01:19:13] Let's let's actually add
[01:19:16] Thank you.
[01:19:20] List two.
[01:19:21] Let's have two lists.
[01:19:23] In our component.
[01:19:28] Another list that has
[01:19:30] Nothing to do with the first list.
[01:19:33] Let's call that list...
[01:19:35] Thank you.
[01:19:36] Two. And let's, instead of, what should we use instead of fruit?
[01:19:43] Let's use
[01:19:44] Um...
[01:19:46] I don't know what's a good thing. Actually no, signal?
[01:19:51] Memo.
[01:19:52] Effect. Okay.
[01:19:57] So,
[01:19:58] App, list three times, list two, three times.
[01:20:03] We increment?
[01:20:04] Nothing updates.
[01:20:06] *clap*
[01:20:07] When we push,
[01:20:09] Oh, well, our push is not actually updating.  What's going on here?
[01:20:13] Did I screw up our push?
[01:20:15] Oh right, of course.
[01:20:16] *smack*
[01:20:17] It's like Svelte and actually like solid.
[01:20:21] It's actually better not to push because it doesn't know.  What you actually want to do here is actually do...
[01:20:29] list value equals
[01:20:32] list value
[01:20:36] um, do, do, do, spread, concat. And then it's listening to the right thing. Sorry, that was my bad.
[01:20:43] Yeah.
[01:20:47] Sorry, we learn stuff as we go. When we push,
[01:20:50] you see app, list, and list2 all re-render again.
[01:20:56] Unfortunately for the list...
[01:20:59] um...
[01:21:00] There's no...
[01:21:01] way we can really
[01:21:04] optimize this very easily.
[01:21:08] And
[01:21:09] I mean, this in itself is fine.  You can just always go back to the VDOM.
[01:21:16] But like...
[01:21:17] essentially...
[01:21:19] what you can do is you can break things into components and use components to organize it.
[01:21:25] The question you might start wondering is...
[01:21:30] let's continue on with these examples a little bit.  It's like, okay, this is fine.  I'm...
[01:21:36] I'm not actually picking on Preact here.
[01:21:38] Because this is also true of like Quick.
[01:21:43] Like, all the optimizations kind of...  And pretty much...
[01:21:48] most VDOM libraries. The thing is most VDOM libraries before Preact that you state didn't  actually do this. This is actually, I jumped right into one of the coolest optimizations I've ever  seen in this. The fact that you could even just do that is incredible for that like one specific  little case. Whereas like most VDOM
[01:22:05] reactive hybrids don't
[01:22:07] aren't able to do this.
[01:22:10] So the fact that Quick and Preact both do this is actually kind of cool, but
[01:22:14] What I want to get at here is what
[01:22:18] happens if we wanted... I'm trying to think of how much I want to clean up on this code, but like...
[01:22:27] Okay, so it's not explain why the candle plants well, it's because you need to read from the value of
[01:22:32] in order to map over it.
[01:22:34] So like
[01:22:35] That doesn't reach the VDOM.  I mean, I guess, let's see here.  Can we solve this actually?  You know what?  Maybe there is a way to solve this.
[01:22:44] You know what? Let's think about this.
[01:22:46] You're right. Can we do this? Can we go...
[01:22:48] Maybe there is a way to solve this.
[01:22:50] Maybe I'm not thinking straight here. What we could do is we can do like
[01:22:55] The const
[01:22:57] list
[01:22:58] computed
[01:23:01] equals
[01:23:03] Use computed.
[01:23:05] Okay.
[01:23:05] Okay, okay.
[01:23:07] And as long as we do this right,
[01:23:11] We could probably...
[01:23:15] Pull this
[01:23:17] into this. I mean, I'm not 100% sure this will work. I'm just thinking here, what if the list computed
[01:23:25] is a computed...
[01:23:26] that maps this thing.
[01:23:28] Can we...
[01:23:30] Can we isolate this? List computed.
[01:23:35] Right?
[01:23:38] What am I doing wrong here?
[01:23:43] Am I doing something wrong?
[01:23:45] Let's refresh.
[01:23:52] Objects not valid as children.
[01:23:53] Interesting.
[01:23:56] Can I do this?
[01:23:59] Thank you.
[01:24:00] Okay, well, I mean, this isn't going to help us.  This is going to be de-opt.
[01:24:03] But this...
[01:24:05] Okay.
[01:24:06] Okay, so you can't do that. Okay, but I mean it's worth a shot, right?
[01:24:10] Thank you.
[01:24:17] *sigh*
[01:24:19] You're getting to where I'm getting to. Yes. This is the challenge here, right? Because, okay, so we weren't able to do this. I think...
[01:24:30] if we were smart about it we could do this. This starts hinting at you why
[01:24:35] View
[01:24:36] has
[01:24:38] V4
[01:24:40] or why solid has the for component.
[01:24:44] One of the reasons. There's multiple reasons.  But this should start...
[01:24:48] warning bells in your head, you start thinking about this. But...
[01:24:51] Even so,
[01:24:53] Um...
[01:24:54] It's interesting because
[01:24:56] Uh...
[01:24:58] Yeah, I guess these work like hooks, so they probably don't get recreated on every re-render, but it'd be interesting to see
[01:25:05] If they do...
[01:25:07] Um...
[01:25:08] There's like a certain overhead that comes with reactivity, and if you're forced to wrap everything, you're actually paying more of a cost
[01:25:16] than if you didn't use the reactivity, right?  Like this is one of the reasons why solid's just a function API design and not the dot value,  is because there's a cost of like just wrapping everything and use computed to make it work.
[01:25:27] Um...
[01:25:28] But let's...
[01:25:30] Okay, let's...
[01:25:32] Let's go back out of this a second and get back to where we were.
[01:25:37] um,
[01:25:39] Because I want to...
[01:25:41] I want to talk about this a bit more because one of the interesting things is...
[01:25:47] I'm gonna use the count again because the count's easier, but...
[01:25:51] If- if- if- if this is still just- I'm gonna make this our counter.
[01:25:56] Component and then I'm going to come up with a new app component and
[01:26:00] Okay.
[01:26:01] And our new app component is just going to return
[01:26:06] our counter...
[01:26:07] component.
[01:26:08] essentially
[01:26:10] Sweet, okay.  And then what I'm gonna do is I'm gonna hoist out
[01:26:13] Um...
[01:26:16] the state.
[01:26:17] Right
[01:26:18] hoist it up here, okay. And the reason I want to show this is because
[01:26:24] Okay.
[01:26:25] Well, we need props.
[01:26:29] And...
[01:26:31] Well...
[01:26:33] We have a choice here how we pass these props.
[01:26:36] Because...
[01:26:41] And actually, it's more than that. I need to hoist the button out too for my purposes. It'll just make things easier so I don't have to wire it in. But it would probably work kind of the same way. Let's just do this.
[01:26:53] Okay.
[01:26:56] I'm going to go.
[01:26:57] Let's put the button here.
[01:26:59] Beautiful. Okay.
[01:27:01] And then,
[01:27:03] I'm just going to go value...
[01:27:05] equals...
[01:27:06] Well, let's do value dot value first, okay?
[01:27:11] Amen.
[01:27:12] and... do do do do do counter double count
[01:27:18] Double count reads props value.  Okay, sweet.  So does our...
[01:27:22] Counter still work.
[01:27:27] Okay.
[01:27:27] Maybe not.
[01:27:30] Let's make sure...
[01:27:36] Counterprops.value. Let's see what I'm not doing right here. I feel like I got like too much noise in here now.
[01:27:42] Um...
[01:27:43] So,
[01:27:45] Um...
[01:27:49] This is kind of on me a little bit.
[01:27:51] and maybe...
[01:27:54] that to
[01:28:01] Interesting, okay.
[01:28:03] It's like more...
[01:28:05] Thank you.
[01:28:08] Fine, I'll just delete it.
[01:28:10] I'll probably regret that in a minute.
[01:28:12] But I think I already made the point I wanted to make there.
[01:28:15] Um...
[01:28:18] Okay, so we have value that we passed down.
[01:28:22] we increment the value
[01:28:24] And then...
[01:28:25] Oh right, this isn't a signal. So...
[01:28:28] Let's go back to the beginning and just go
[01:28:32] Let's make this props dot value, right? Okay.
[01:28:37] and...
[01:28:40] In fact, we'll make it value times two.  Okay, sweet.  So...
[01:28:46] I'm gonna clear this off.
[01:28:48] Every time I click this,
[01:28:50] App's going to rerun because clearly
[01:28:53] Actually, you know what?
[01:28:55] This is important. So let's
[01:28:57] Let's put something in here.
[01:28:59] App.
[01:29:01] counter, okay?
[01:29:03] Okay.
[01:29:04] Okay.
[01:29:05] So let's clear this again. So we click
[01:29:07] App encounter run. App encounter run. Makes sense because
[01:29:12] What re-renders when we update the signal?
[01:29:15] app re-renders, not counter, which uses it, but app re-renders.
[01:29:20] And the reason it re-renders
[01:29:22] Um...
[01:29:24] is because you set the state. I mean, let's see what happens. If I make this
[01:29:29] Five.
[01:29:30] Okay.
[01:29:32] like some fixed value
[01:29:35] And...
[01:29:36] I'm gonna refresh.
[01:29:41] And then we...
[01:29:42] Press it, it's number... okay, so sweet.
[01:29:45] It's actually smart. It looks like it's actually smart enough to know.
[01:29:49] that it's red here okay sweet
[01:29:53] Okay.
[01:29:53] Sweet.
[01:29:54] So if I
[01:30:00] Because if I press a constant value,  setting this doesn't actually cause it to do it.  So it actually can tell...
[01:30:06] if you read it under the scope...
[01:30:09] it looks like that it actually updates because not reading it
[01:30:13] does not cause it
[01:30:15] I just want to double check that again
[01:30:18] does not cause it to update or re-render suite. Okay, so
[01:30:22] let's pass value instead which is we're going to pass the signal now that we're passing the signal
[01:30:28] Um...
[01:30:31] Well, look what's happening. Now only the counter is updating and apps not updating because
[01:30:37] We're doing it...
[01:30:39] This way, right?  And then if we want it so that...
[01:30:44] Um...
[01:30:47] This also doesn't rerun again.
[01:30:51] we're gonna want to change this to
[01:30:53] Double count.
[01:30:55] and we're going to change this to prop.value.value
[01:31:00] And now it should update without logging anything, which is correct.  Okay, sweet, sweet, sweet, sweet.
[01:31:06] Interesting part, though, about this is...
[01:31:10] is...
[01:31:12] If...
[01:31:13] I make this value dot value now.
[01:31:16] It's basically...
[01:31:18] Broken.
[01:31:20] or if I make this five,
[01:31:22] it's,
[01:31:23] basically broken because we need to handle the potential of this being
[01:31:29] A signal.
[01:31:32] Thank you.
[01:31:33] So, um...
[01:31:36] I think...
[01:31:38] I'm not sure, is there an is
[01:31:41] signal
[01:31:43] exported from this
[01:31:44] we should look at the API, but I imagine there's a way so that we could be like,
[01:31:50] You know, something along the lines like...
[01:31:53] Actually, it's interesting because this computed...
[01:31:56] probably needs to be fixed because it's like a hook.
[01:32:03] Right? Because I can't use conditional logic here, can I?
[01:32:09] I'm not sure.
[01:32:11] I mean, we can try. We can do something like...
[01:32:15] Let.
[01:32:15] double count. I haven't done this before, so we're going to try and figure out how to do this. Um,
[01:32:23] We don't need our list anymore.
[01:32:25] Um...
[01:32:27] Let double count and then we'll be like...
[01:32:34] if
[01:32:44] Yeah, I mean, we could put it inside the used computer.  We could always make the used computer.  Yeah, you're right.  That's probably a cleaner way of doing it.
[01:32:53] We can be like,
[01:32:55] Oh, sorry. I thought I was undoing and it was impact. We can always... yeah, let's do that.
[01:33:02] He'd be like...
[01:33:06] Something like...
[01:33:08] props.value
[01:33:11] I don't know, what do you want?  Value...
[01:33:15] I mean, I'm coming up with a-- there's probably like a better way of doing this.
[01:33:19] *laughs*
[01:33:22] if value in props dot value
[01:33:25] then...
[01:33:27] value...
[01:33:29] dot value,
[01:33:32] or whatever, props.value.value
[01:33:36] Let's get this multiple lines so we can see what we're dealing with.
[01:33:45] otherwise
[01:33:48] props dot value
[01:33:52] We could do something like this, maybe.
[01:33:56] Oh, I can't use inoperator on a primitive value.  Okay, so we need better detection than this.
[01:34:01] Um...
[01:34:06] Yeah, I mean, do they have his signal? Someone... let's just sanity check here. Console.log...
[01:34:13] is signal.
[01:34:17] It doesn't look like it.
[01:34:19] Maybe I named it wrong.
[01:34:23] No, okay.
[01:34:24] Um...
[01:34:26] A lot of these libraries have...
[01:34:28] some version of this.
[01:34:30] We'll figure it out.
[01:34:35] - Thank you.
[01:34:36] Yeah, you're correct. But I mean, it's a similar...
[01:34:39] But then maybe it'll re-render.  Like...
[01:34:47] Um...
[01:34:49] The API here is very
[01:34:52] simple I mean
[01:34:55] Yeah, I don't see it.  You know what?  We can figure out what a signal is.  We don't need this.  We can go, like, type of...
[01:35:02] -
[01:35:03] uh
[01:35:04] type of
[01:35:07] Props, value...
[01:35:09] equals
[01:35:10] Object.
[01:35:12] And...
[01:35:16] value
[01:35:18] in props.value
[01:35:28] sweet it's it works again
[01:35:30] Um, and...
[01:35:32] Value dot value should work.
[01:35:34] Two?
[01:35:35] Oh right, but it doesn't...
[01:35:36] up
[01:35:36] date.
[01:35:37] You're right.
[01:35:39] Because...
[01:35:41] The computer doesn't notice, the computer is handling it, so we actually can't put in, we want to pull it out if it's not.
[01:35:55] Right? Like...
[01:35:56] This doesn't work because there's nothing to track, as Maple was saying.
[01:36:02] Um...
[01:36:03] I actually kind of want this logic
[01:36:06] to be...
[01:36:08] outside essentially. Let's see if this will work.
[01:36:11] Let double count.
[01:36:16] And then be like...
[01:36:18] if
[01:36:20] type of pro...
[01:36:22] - Yeah.
[01:36:24] It doesn't...
[01:36:25] Mm.
[01:36:26] What I'm getting at
[01:36:27] doesn't
[01:36:29] actually...
[01:36:30] matter, um,
[01:36:32] what the syntax is for this piece.
[01:36:36] and
[01:36:37] if it is double count equals this
[01:36:43] And then we can remove all this logic and it's simply just...
[01:36:47] props to
[01:36:48] times 2
[01:36:51] And then...
[01:36:54] else
[01:36:56] double count
[01:36:58] equals
[01:36:59] props.value times 2
[01:37:04] Bang.
[01:37:05] Update's full.
[01:37:07] Pass the signal.
[01:37:09] updates without
[01:37:11] Sorry, let's prove that it updates without
[01:37:13] Rendering?
[01:37:14] And then
[01:37:15] and pass the five
[01:37:16] It works.
[01:37:17] Okay, so there we go. We just made our universal...
[01:37:21] Um...
[01:37:23] component here.
[01:37:26] Depending on what the end user pass is, it works with full VDOM refresh, works with optimized signal thing and whatnot. As I said, this is just for that one little trick to replace the one thing. Once you get structural changes like for loops, this doesn't really help you at all.
[01:37:43] Essentially, this is just so that you can skip re-rendering when you're updating a single  property on something.
[01:37:52] Cool for animations.
[01:37:54] well it is fun and i think this is this is this is one of those  challenges right because like people have been combining this forever like
[01:38:03] Someone asked me about Jyotai.
[01:38:06] right? And
[01:38:08] - Thank you.
[01:38:09] and recoil. And the thing you have to understand about Jyotai and recoil is while there's this atomic state,
[01:38:16] How does the framework know what to re-render?
[01:38:21] If you have tracking, like Preact's doing, like, kind of smart,  where they can tell, like, where you read it in component context,  then, yes, you can do smarter stuff.  But in the case of...
[01:38:31] of Jotai and recoil to my knowledge is that
[01:38:36] use_signal is telling you which component to rerun. Even if you're using it down here in counter,
[01:38:42] Like when you go use Adam...
[01:38:44] It's that component that reruns, even if
[01:38:47] it's actually being used here.  Obviously, you should probably use it down here,  use it closest to where you are,  and the way atoms are globally exposed, you can do that.  My point is, like...
[01:38:57] it's very much tied to the component system
[01:39:00] Whereas...
[01:39:01] these signals are actually not
[01:39:03] Even in this Preact case where it de-optimizes in many cases, the signals are still independent of the component change detection system.
[01:39:12] um
[01:39:13] Whereas with something like Jotua recoil, by using the hook, you're telling it what is.
[01:39:20] component is going to update.
[01:39:24] So this, like, in this sort of situation where you're passing props...
[01:39:29] You don't want to pass the Jyotai
[01:39:31] add them like that way. You want to use it closest to where it's being used.
[01:39:36] And you do need to use smaller components like Preact.  What's cool is Preact actually automates it, but if you want to scale on optimization,
[01:39:45] Right? And the reason I did this example is, I mean, everyone who knows Solid knows that in Solid you don't have to do any of this. You literally...
[01:39:53] just...
[01:39:54] Like...
[01:39:55] If your app component has the counter,
[01:39:58] Right. Let's move this out of the way.  You know,
[01:40:01] And then...
[01:40:03] you pass it down to
[01:40:06] Um...
[01:40:08] So what was this one called? App.
[01:40:12] app.
[01:40:13] and we make our-- I called it counter, but whatever.  If we make our counter component,
[01:40:18] that has our... let's see, can I copy this from Preact mostly?
[01:40:22] Um...
[01:40:24] If I make this,
[01:40:30] And then...
[01:40:32] This is count props
[01:40:34] .count
[01:40:36] Thank you.
[01:40:38] times
[01:40:39] two or something and then
[01:40:42] Um...
[01:40:44] What am I doing here?
[01:40:47] Count...
[01:40:48] Let's make our tests... make our...
[01:40:51] this, and then if I put
[01:40:54] Okay.
[01:40:55] Put this in here and go counter.
[01:40:59] and go...
[01:41:00] what we call this value,
[01:41:04] props up value share value equals
[01:41:08] Five...
[01:41:10] Um...
[01:41:12] Yeah, I guess the button was just increment.
[01:41:16] In this example, it doesn't really matter, let's format this for a second.
[01:41:19] Okay. Like...
[01:41:21] This obviously isn't doing anything because it's fixed at five.
[01:41:24] But then if we change it to count,
[01:41:28] then it works. And what you're going to see here, obviously, if I put the console login,
[01:41:36] *sigh*
[01:41:38] is...
[01:41:40] essentially
[01:41:41] It updates, this never logs again,
[01:41:44] It doesn't matter. I can pass count plus one through here if I want to.
[01:41:48] None of this changes, it always is optimized.
[01:41:51] um...
[01:41:53] And this is because the rendering is fundamentally...
[01:41:56] Different.
[01:41:58] Like...
[01:41:59] you don't check if the thing's a signal or whatever.
[01:42:03] You just don't need to because whether this is this or like the value or whatnot, like you just always access it at a value.  And then on this side for authoring, you just use it where you need to use it.
[01:42:15] The end.
[01:42:17] And I think, I think,
[01:42:21] Yes.
[01:42:23] Yeah, props, values, getter.
[01:42:30] And I want to...  This is why...
[01:42:35] signals are not just another state management library.
[01:42:38] um and why when people keep on making the comparisons to to solid it's like not quite  the same comparison i want to talk about view though because view view is this kind of anomaly  like i i don't want to like stress on benchmarks people are wondering if i'd like pull out the js  framework benchmark this is this is the point in stream where i'm going to pull it out for a second  because you're right synthetic benchmarks who cares they're not all performance blah blah blah  blah but what i want to point out here is
[01:43:02] Which implementations? Let's
[01:43:05] Let's just do none, that's what I usually do, okay.
[01:43:08] Haha.
[01:43:09] That's awesome.
[01:43:10] I love this. Inferno actually...
[01:43:13] Like we're tied but they pulled out in like in front on the average on this one. My point is
[01:43:20] They're...
[01:43:21] our fast virtual DOM libraries,
[01:43:26] There are fast reactive libraries.
[01:43:29] View's reactivity and MobX's reactivity is actually fast. This is if I on a previous stream I wrote preact and
[01:43:37] Um,
[01:43:37] as a solid renderer. I basically used Preax Reactivity to build a solid renderer. And it was up here too.
[01:43:46] and Vue and Mobbets, reactive systems are super performant.  That's not the bottleneck when you're creating a bunch of DOM nodes.  So fast VDOM, fast reactive libraries.
[01:43:55] Can you guess where the first hybrid reactive VDOM library shows up on this chart?
[01:44:03] Oh.
[01:44:04] Is that new warning eliminating them? Just a second.
[01:44:08] Sorry, there's like a new warning. What is it?
[01:44:13] Not errors, runtime code generation. Yeah, let's get this back.
[01:44:19] Um...
[01:44:22] Yeah, here we are.
[01:44:24] Okay.
[01:44:25] The first one that shows up here is view.
[01:44:28] I'm pretty sure.  Because...
[01:44:31] View!
[01:44:33] has been playing this hybrid VDOM state game longer than pretty much
[01:44:37] Anyone.
[01:44:41] The truth of the matter is
[01:44:43] I'll let Preact and Quick and others put up their benchmarks when they do.  I've tested them.  They haven't submitted for some reason.
[01:44:53] But I will tell you that roughly speaking,
[01:44:57] Preact signals from a performance standpoint in this kind of benchmark
[01:45:00] update some numbers and make some numbers slower.  So it's basically a wash.  It kind of comes in close to you.
[01:45:06] Quick is somewhere a little bit, last I checked, a little bit after Preact, maybe close to Angular.
[01:45:12] No zone.
[01:45:14] I don't know, maybe mithril, I'm not sure. We'll have to see when they post the numbers. But the hybrid approaches
[01:45:21] Here's Svelte over here.
[01:45:23] Alright, here's you up here.
[01:45:26] are actually
[01:45:28] one of the most expensive approaches.  Vue actually had, if we go historically,  Vue struggled with this for a very, very long time.
[01:45:37] And it's because of, there's this tension, right?
[01:45:40] We haven't talked too much about this tension. And because React libraries like Jyotai and Recoil, you don't really feel it because you just trigger
[01:45:47] the component to rerun. You just say, "Hey,
[01:45:49] This is the component that reruns.  It's wherever you use the state.
[01:45:54] The tension
[01:45:55] is that
[01:45:58] All frameworks have a form of
[01:46:00] memoization, essentially, a way to reduce work, whether it's using cached computed signal type stuff, or whether it's using like explicit memos.
[01:46:11] Like the things you don't see and do see, they're always there.  And I talked a bit about it in this Component Pure article,  because what I was trying to say is that like...
[01:46:19] reactive libraries,
[01:46:23] actually have this overhead because what you end up doing typically like with a  mob X or whatever is you wrap each component in a crate effect essentially
[01:46:33] or a reactive effect so that when anything is read under it,  it re-renders that whole thing.  Before we had this level of auto breaking out components  like I showed here with Preact, generally speaking,  what you do is you just wrap
[01:46:47] like a component. What's cool about recoil
[01:46:50] in them is they're actually like,
[01:46:51] subscribing to use state under the hood
[01:46:54] So it just flickers the component without having to do this kind of tracking.  Whereas things like MobX and React tried to give you that
[01:47:02] run once feel.
[01:47:04] Um...
[01:47:05] And essentially handle that by kind of separating the setup from the execution, like separating the view rerunning and making the top never rerun.  And if you've ever seen views JSX, it actually does that.  If you use view JSX, you make like your reactive stuff up top and then you return a function for the view.  They've actually separated the template.
[01:47:26] from the stuff.  So it's like, this runs once, this runs multiple times.
[01:47:31] That's actually...
[01:47:32] kind of, I believe, closer to actually how something like
[01:47:35] quick generally runs too. But the problem is
[01:47:39] Those
[01:47:40] component wrappers, those reactive tracking component wrappers, are more expensive
[01:47:46] than just using the VDOM straight.
[01:47:49] Like there's memory overhead.
[01:47:51] And...
[01:47:53] creation time costs and
[01:47:56] This kind of makes you want to make less of them and especially if you're using a single file  component format you're going to just generally make larger components.
[01:48:05] Unfortunately, as we saw with the VDOM, the smaller you make the components, the better performance you get. Like these things are
[01:48:10] at odds with each other.
[01:48:16] I've been critical because of this piece on Vue in the past.
[01:48:20] But when you actually look what Vue has accomplished under these constraints,
[01:48:25] It's kind of amazing.
[01:48:28] Like,
[01:48:30] Okay.
[01:48:31] Yeah.
[01:48:33] Thank you.
[01:48:35] View is no slouch in this kind of benchmark.  And one of the things that they did was they added in view...
[01:48:41] 3.2
[01:48:45] what's called quintessential quintuplets. They like their anime naming references. Performance improvements. They're just like, eh, eh, eh. We didn't talk about this. The reactivity performance does almost nothing huge in these kind of things, but...
[01:49:00] The biggest thing they did was they added this V-Memo directive, which lets them
[01:49:05] make big components and then tell the virtual DOM how to break it up into smaller things. And this is a very manual
[01:49:10] thing, but it's that kind of consideration and the consideration of things like
[01:49:15] directives like V4, like control flows that are memoized by default. These kind of pieces, and I said solids for components like this too, means that you just don't
[01:49:29] have
[01:49:30] these sort of, you know,
[01:49:34] you can optimize around these sort of problems.  Don't get me wrong.  Vue still...
[01:49:39] re-renders, but what it re-renders is less
[01:49:42] Um, then...
[01:49:43] pretty much anyone else doing this sort of VDOM approach.  They cache static nodes.  They do a whole slew of optimizations.  And most of them are relatively automatic for you.
[01:49:56] Um...
[01:49:57] This one isn't, to be fair.
[01:50:00] And it probably makes the biggest difference on this benchmark.
[01:50:02] But...
[01:50:03] I mean, we can actually confirm that.  You know, let's confirm that.
[01:50:07] Let's go back to before view 3.2.
[01:50:09] Doo doo doo doo doo.
[01:50:12] official results page.  When did View 3.2 come up?
[01:50:19] August 5th, 2021.  Okay, so...
[01:50:23] And then we just got a cross-reference with...
[01:50:27] Chrome released...
[01:50:29] August 2021.
[01:50:33] 93. Okay, beautiful.
[01:50:36] So let's go back to
[01:50:38] 92.
[01:50:41] And... okay...
[01:50:43] Let's do our
[01:50:45] None.
[01:50:48] and let's scroll down to where view is.
[01:50:53] Yeah, see?
[01:50:54] You?
[01:50:55] Preact.
[01:50:57] Thank you.
[01:50:58] In one version, we're going to see, and Svelte over here, right?
[01:51:03] What we're gonna see
[01:51:06] 93
[01:51:08] This one have it yet? Maybe not.
[01:51:11] Svelte.
[01:51:12] View 3.21.
[01:51:14] Okay.
[01:51:15] Well...
[01:51:16] It jumped.
[01:51:17] 'cause Preact's over here.
[01:51:19] Yeah, sorry I'm showing too many results.
[01:51:24] Okay.
[01:51:25] Yeah, in that one release, Vue jumped from being like over here by Crank
[01:51:31] past preact over here by doing this kind of memoization technique. As I said, this was, this is one of the struggles because you have to be aware of components in VDOM libraries. It's just,
[01:51:42] it doesn't matter the memoization is real doesn't matter if you're using
[01:51:47] something really smart, like quick,  or something very basic like jamming MobX on top of React.
[01:51:56] like this overhead thing
[01:51:59] is
[01:52:01] is a thing.  You actually pay the cost in...
[01:52:04] creation, you pay the cost in other places to maybe get some updates faster.  Pre-Ax version and what Quick does too with a single optimization is probably the first we've seen
[01:52:14] an actual real improvement on like one of the categories of benchmarks
[01:52:19] But it's tricky because the net...
[01:52:21] cost is more expensive.  What you get, though, is...
[01:52:24] As I mentioned,
[01:52:26] you know,
[01:52:27] We can have reactive libraries and, I mean...
[01:52:31] and BDOM libraries, using this one,  but they're closer,  being really performant in a synthetic benchmark.  What's interesting, though,  and the reason you're going to want to use these reactive approaches  is because...
[01:52:44] they let you author in a more isolated way, where you can avoid rerunning components, and it feels natural. The DX is good.
[01:52:52] So,
[01:52:53] I think it's important to understand that even if a benchmark like this doesn't show the benefit clearly,
[01:52:59] there are still benefits to using something like Preact signals or, you know, signals with Preact or whatnot.  And even performance benefits simply from the fact that the way you're authoring your code getting less jumbled up.
[01:53:15] But yeah, I wanted to give Vue a nod because
[01:53:18] they're not doing Preact-level type optimizations to like,
[01:53:23] kind of get really good in that one...
[01:53:26] like optimization, the D ops.
[01:53:28] They just...
[01:53:29] generally apply optimizations across the board. And then they do have their own
[01:53:35] Very smart
[01:53:36] optimization around BDOM template caching.  That is a bit technical.  It's as far as I wanted to touch on the benchmarks today.  But I just wanted to point out like,
[01:53:46] while you can kind of
[01:53:48] ignore  like the results of these for the most part there is an  architectural thing that they reveal when they talk about it and these things actually do impact the way that
[01:54:01] things scale, right? I talk about this a lot because like I wanted to
[01:54:06] compare...
[01:54:08] like the cost of components and
[01:54:10] Funny enough, like...
[01:54:13] places where
[01:54:16] there's reactive systems, the cost of components is significantly more than whereas they're not, for the most part, as I said.
[01:54:22] This is why componentless in reactive systems is key.
[01:54:26] Because the hybrid is actually the most expensive way to go.
[01:54:32] So...
[01:54:34] Yeah, I'm hoping this is starting to paint that picture a little bit.
[01:54:39] Let's go back.  We've got one more topic here, I believe.  And that topic...
[01:54:44] Unless people have questions about this. Do you understand the difference now between
[01:54:48] signals in Preact
[01:54:50] Jotai
[01:54:51] and recoil
[01:54:53] and say Solid's rendering. I didn't remake the list example in Solid where I had the multiple lists, but you can trust me when I say that you can put as many lists as you want into them and push into them, and those components aren't rerunning. I think I've demonstrated at this point that it just doesn't matter. Solid is actually incapable of rerunning those components because of the way it's built. It literally can't rerun them.
[01:55:18] So, um,
[01:55:20] And this has an impact. I don't highlight this to people very often.
[01:55:25] But this has an impact, like,
[01:55:27] We don't show this off, but...
[01:55:30] One of the cool tricks that's kind of like the Preact trick was that the guys from Quick were like, oh, guess what?
[01:55:36] If we
[01:55:40] don't need to re-render because we've optimized. So like we got rid of the plus one here and we just like pass the signal straight through and
[01:55:46] Well, we don't need to rerun this component ever in the client.
[01:55:50] So we don't need to ship this template.
[01:55:53] So...
[01:55:55] The funny thing is,
[01:55:57] Neither do we.
[01:55:59] Um...
[01:56:01] So
[01:56:06] Um...  Do-do-do-do-do...
[01:56:13] If you look at this version of here...
[01:56:16] we actually just erased...
[01:56:19] this template. Like, okay, there it is. Button. Here's the template.
[01:56:23] I mean, this is a small template.
[01:56:24] But...
[01:56:25] Jun...
[01:56:26] Oh, template erased.
[01:56:27] because, you know, if you know that it's,  this is a manual augmentation,  I don't suggest going this way.  It was just, if you know the thing never re-renders,  you can just not send it.  So there are considerations here  and we haven't figured out how to automate it here,  but I just wanted to point out that like,
[01:56:44] I'm going to go to the next one.
[01:56:45] That part's the easy part, right? The automation is the hard part and that's where you've got to give quick
[01:56:51] big benefits on the smartness of their compiler and being able to automate this.  But I just wanted to kind of point out that it's this reactive render model that
[01:56:59] that allows this kind of optimization?  Like, wouldn't it be cool...
[01:57:04] if you could know this ahead of time, kind of like quick, but not get de-optimized with the plus one or whatever, or structurally with like the for loop in that.  And honestly, there's only one framework that does that, and it's not released today. That's Marco 6.  I always sound like an ad for Marco 6, but literally it is...
[01:57:21] has managed
[01:57:22] to merge both mechanisms together, which is really, really quite cool, but also very, very quite complicated to make.  So anyways, just I want...
[01:57:31] I wanted to kind of like...
[01:57:34] point out that this reactivity
[01:57:36] granularity.
[01:57:39] piece and rendering applies to more than just client-side rendering. It actually applies  to hydration and solving hydration and shipping less JavaScript.
[01:57:46] This is why this is such fundamental...
[01:57:49] like building blocks to change the way we actually look at it this is much more
[01:57:54] I hate using the word.
[01:57:57] revolutionary per se than what I've kind of let people believe to this point.
[01:58:03] Um...
[01:58:04] Because it's the key that changes how we look at
[01:58:08] our execution model, client and server.
[01:58:14] But I haven't talked about Svelte.
[01:58:18] Thank you.
[01:58:20] Thank you.
[01:58:23] Quick doesn't really.  Quick does a runtime reactivity very similar to solid.  That's why I was very excited by Quick when I first saw it.
[01:58:30] Marco compiles it out like Svelte does, which is where I talk about. Quick actually does  runtime reactivity, but it feeds into a VDOM. It's kind of like if you took
[01:58:39] some mix between Vue and Preact.
[01:58:42] and then used a compiler to make it resumable.
[01:58:46] Because Quick is the same thing.  That's why I'm pointing this out here.  There are historical frameworks like Knockout that work the way Solid does.
[01:58:54] where you could have those same console logs  in the same situation, never de-optimate.
[01:58:58] But modern framework today, solid is not like React View
[01:59:02] Svelte.
[01:59:04] Quick.
[01:59:05] Angular, it's not like any of them.
[01:59:07] It is like a completely different approach, and I don't think people realize that, which is why after seeing all the talks about RX and always in this like this and this solution has signals and this solution, I'm like, yes, they have signals, but this is like...
[01:59:20] the implications of what it means to have signals can be very different.
[01:59:28] So,
[01:59:30] Okay, let's talk about it because I showed how this is very dynamic and whatnot. So you might be thinking, okay,
[01:59:37] Well, how does
[01:59:39] How does...
[01:59:42] *clap*
[01:59:43] Svelte Voluntis and the answer is Svelte is like Jyothai.
[01:59:49] where you declare the state, where the let variable lives,
[01:59:54] That's...
[01:59:55] what needs to update, what needs to render. You can do two
[02:00:00] Two-way binding.
[02:00:00] But generally speaking,
[02:00:02] Svelte re-renders components.
[02:00:05] It's...
[02:00:06] it doesn't use runtime reactivity. It's fixed. So you don't have like that dynamic thing, but the dynamic kind of optimization probably only matters when you're modeling control flow with reactivity that like solid cares about the dynamicism of like the A versus B, the last name versus full name, because it literally uses a
[02:00:23] a memo like that to decide which reactive branch to render, like in a show component or a ternary operator you find in your JSX. It uses the dynamic dependencies. You don't want to be like, reading stuff that you don't need on an off branch. Like you just, you don't,
[02:00:37] You essentially need it to clean up after itself and you need it to only listen to what gets listened to.
[02:00:44] but
[02:00:45] For something like Svelte.
[02:00:46] literally,
[02:00:48] Let is like saying, hey...
[02:00:50] this component is what reruns.  If you pass the value down and you update it down here,  or whatever, it's like this is the component  that needs to rerun.
[02:00:58] So it's like instead of having...
[02:01:02] the tracking happen automatically, like an example I showed before, you know, like we put the count in, it's like hoisting out to a dependency rate. It's like picture react. Svelte just finds
[02:01:12] the dependency array for you,
[02:01:14] and compiles it in.
[02:01:16] And then...
[02:01:17] the reactivity is like useState, it triggers that same component to re-render.  It doesn't use a virtual DOM, which is really smart.
[02:01:25] Um,
[02:01:26] But like,
[02:01:26] Okay.
[02:01:27] I've kind of talked about this before with Solid that
[02:01:30] even though the JSX transforms here a little bit.
[02:01:33] The code you write stays the same, and then we change some JSX. Code you write stays the same.
[02:01:39] write some JSX. Svelte actually rearranges your code between update and
[02:01:44] And...
[02:01:45] uh,
[02:01:46] create paths. And if we just pull up this felt
[02:01:49] This felt...
[02:01:50] REPL, you'll see what I'm talking about really quickly here. So
[02:01:54] Right now this name doesn't update, so we need to do something to let it update like add an on click here, okay?
[02:02:01] And if I'm right...
[02:02:03] Just like JSX. Svelte's syntax and language is lovely. I don't let anyone convince you that templating languages can't do stuff. The only place where it gets awkward is composition of control flow.
[02:02:16] You could still do everything. It's just like, it's a little bit clunkier to handle like named slots and scope slots and
[02:02:23] those kind of scenarios, but the same as view too. So like, I love this templating. There's no like string literal, like string things hiding in here.
[02:02:31] What am I doing here?
[02:02:34] Any... oh, so yeah, they've been telling me that my accessibility is awful. You know what?
[02:02:40] I don't need this to
[02:02:42] I'm gonna make this a button, okay?
[02:02:44] Okay, and yeah, I did name plus one. Let's do plus
[02:02:48] exclamation mark, okay?
[02:02:50] We don't want to show this.
[02:02:52] Um...
[02:02:54] right sort of name plus equals x which work the reason I want to show this  is that like
[02:03:01] And let's put this in dev mode so it's humanly readable.
[02:03:05] Um,
[02:03:09] Here's your create function.
[02:03:12] Here's your like, I guess it's for hydration.
[02:03:15] Here's your amount function.
[02:03:17] Here's your update function.
[02:03:19] But the thing I want you to notice is
[02:03:22] Where we set
[02:03:25] the name on this click handler,
[02:03:26] Which should be down...
[02:03:28] Here.
[02:03:31] Where are we? Where's our click handler?
[02:03:35] Do do do do.
[02:03:38] Click Handler
[02:03:40] It just calls setState.
[02:03:41] I mean, it's called $invalidate, but it just says, it calls setState with the new value, name plus equals this.
[02:03:48] That invalidate function
[02:03:51] essentially just tells that, say, hey,
[02:03:54] It's updated, run the update function.
[02:03:57] so
[02:03:58] the reactivity isn't exactly permissive. Svelte's actually really clever is that they support also stores
[02:04:04] which allow you to have...
[02:04:06] runtime reactivity, kind of similar to signals, but it's more like similar to Rx. It's like a very base version of Rx. It's not about solving the diamond problem and synchronization. It's just about like deriving stuff.
[02:04:18] you know, creating some state and deriving some state, which is perfectly fine. But it's like,  because Svelte doesn't use it, like if you look at Svelte's output, like there's a runtime here, like
[02:04:27] like,
[02:04:27] that, you know, some internal stuff.  But for the most part,  this runtime is really, really small.  And it's literally stuff like  create element, insert DOM.  It's all like DOM operations.  It's pretty straightforward.  But...
[02:04:38] like
[02:04:40] Ooh.
[02:04:40] The thing is like...
[02:04:42] It's still...
[02:04:44] There's no, like, actual reactive system when you're done.  Like...
[02:04:48] All it does is just
[02:04:50] calls, um...
[02:04:52] set state or invalidate essentially.
[02:04:56] *sniff*
[02:05:00] Well, if the state is... Here's the thing, you can do two-way binding, but think about it. The state is owned up here.
[02:05:07] then...
[02:05:08] you can only write to it here, because if you pass the value, you know how long, if you don't two-way bind, you have no way to update that value, right? Because it's just a variable, it's not a getter, setter pair. Like,
[02:05:20] you assign a new variable, you're not the same variable anymore.  And I like this because this gives Svelte a lot of protection  against terrible, terrible...
[02:05:28] like accidental two-way binding things and deep-nested two-way binding and stuff.  It's actually...
[02:05:33] difficult to
[02:05:34] cause Svelte to get into some of the messes that like
[02:05:38] reactivity can get into.  But it's also because it's restrictive  to sense, right?  You can't make a hook out of a let variable.  There's no... You'd have to go,  okay, now change this code to use stores.  You can't make a...
[02:05:51] use local state and have that as your local storage.  You make a store for that and then you use that.  So like basically once you try and do powerful composition  with Svelte, you actually leave the Svelte language  and start using runtime stuff very similar to what you would find  in other libraries. So it's an interesting thing.
[02:06:06] But just to kind of understand, like...
[02:06:11] Svelte's
[02:06:12] smart part about this is when it does that update function where's that update function
[02:06:17] Like we should actually do, let's make our example again where we had our list of fruit.
[02:06:24] Because I think this is worth looking at just so that we can talk about, let's go Apple.
[02:06:30] Banana
[02:06:32] Banana...
[02:06:34] Orange, okay?
[02:06:38] Okay.
[02:06:39] And
[02:06:41] We're going to... what is it?
[02:06:44] Hashtag each
[02:06:46] Okay.
[02:06:47] list
[02:06:50] Was it like slash each?
[02:06:53] I think I got this right.
[02:06:55] And then we're going to make a div.
[02:06:59] And...
[02:07:00] I'm going to put...
[02:07:02] Oh, right.  Sorry.
[02:07:08] I love Svelte's tutorials.
[02:07:11] What do we want? Loops. If else each keyed
[02:07:15] Each blocks.
[02:07:18] Show me.
[02:07:20] Perfect. Okay. Each as blank. Okay, cool.
[02:07:26] as fruit,
[02:07:30] fruit
[02:07:35] Sweet. Okay.
[02:07:37] and now
[02:07:39] Oh right, can I do this?
[02:07:42] In JSX it's really easy to intercept. Can I do this? Okay, I think I can do this. Can we do this? Console.log
[02:07:50] Like this.
[02:07:58] Yeah, sweet.  Okay.  So then...
[02:08:01] Yeah.
[02:08:02] This felt a little bit smart here.
[02:08:04] We're not actually rerunning this stuff because Svelte has the for component or the memoized loops.
[02:08:13] I just wanted to...
[02:08:14] this is I want this I wanted to show this
[02:08:18] Because it's important to understand that there is some power here that comes with its diffing behind the scenes. And when React is talking about a compiler, they're talking about compiling this kind of stuff in behind the scenes as well.
[02:08:36] Oh, sorry, the code too small.  Let's try that.
[02:08:39] Thank you.
[02:08:42] You... you...
[02:08:43] you can two-way bind them. Um...
[02:08:46] I don't want to do like a full Svelte tutorial right here, but you basically two-way bind them. You can't like pass a signal, so to speak.
[02:08:54] Like, you could pass a store, perhaps?
[02:08:57] Like,  cause it's just a reference,  but like there's stuff's just values.  So like you,  you,
[02:09:02] This very restrictive way of handling things, though, makes it easier to not abuse it.  So I think there's benefits there.
[02:09:12] Oh, sorry, yeah, yeah, yeah, yeah, yeah. I should do this, right?
[02:09:16] My bad. Yeah, yeah. Okay.
[02:09:18] Um...
[02:09:20] My point is that they have a specialized control flow like Vue does, like Sol does to handle this kind of case. So...
[02:09:27] this isn't going to re-render again. What's interesting though is
[02:09:31] I don't think I got syntax in here to get in here.
[02:09:36] But like...
[02:09:37] Like, I can't do this, right?  I can't, like, sneak JavaScript in here.
[02:09:42] Yeah, they'll never let me do that.  Okay, never mind.
[02:09:46] Okay, I can't do that.
[02:09:47] it's fine.  What I wanted to show is actually  Svelte will...
[02:09:54] potentially, no, actually Svelte will be smart enough not to even know that,  not even mess with the list that has changed.
[02:10:00] Because it'll be referentially the same.  Yeah, okay.  So...
[02:10:04] Yeah, just...
[02:10:06] just kind of show it, but I wanted to point out that this is actually different than solids fine-grained reactivity because
[02:10:12] Um...
[02:10:14] I won't be able to intercept it from a JavaScript standpoint here.
[02:10:18] But...
[02:10:19] this whole update function
[02:10:23] reruns. But it's fine because this update function
[02:10:26] Where is it mount?
[02:10:28] is essentially just a list of dirty checks.  It's like, has name changed? Do this.  Has list changed? Do this.
[02:10:35] then do this. Do you see what I'm saying? The only place that this will catch up with you
[02:10:40] is nested reactivity in deep stuff.
[02:10:43] we haven't showed this off because I didn't need to get there.  And because a lot of these solutions don't have it.  If these were objects that each had a property on them,  like,
[02:10:51] Like, if this was...
[02:10:53] If this list was like this, and you're like, what's the name of the fruit...
[02:10:59] And like...
[02:11:01] what's its price, you know.
[02:11:06] Like, if you had objects like this,
[02:11:09] So
[02:11:14] It's difficult for Svelte if you update the price
[02:11:18] It's difficult for Svelte to not
[02:11:20] rerun the whole each statement.
[02:11:22] um,
[02:11:24] Whereas...
[02:11:25] Um...
[02:11:26] both view and solid...
[02:11:28] have the ability to basically...
[02:11:31] use like proxies and nested reactivity to only update
[02:11:36] Like...
[02:11:37] the child context. And in Solid's case, it can even be in the same component  because the components don't re-render. Like you can literally
[02:11:45] Um...
[02:11:46] Yeah, exactly. Like, uh,
[02:11:50] Let's see if I can find an example of your...
[02:11:54] SolidJS.com will have it.
[02:11:57] If I go into the tutorials and pick something like...
[02:12:02] Oh, not the tutorials. I want the examples.  Are they...
[02:12:06] Yeah, let's examples.
[02:12:09] These examples usually aren't very good, but if you look at the simple to-do's example,
[02:12:16] - Thank you.
[02:12:17] what you'll see is that
[02:12:22] You can...
[02:12:23] Let's add a couple stories.
[02:12:25] Chunk.
[02:12:28] And let me pull this up again.
[02:12:32] We can toggle...
[02:12:34] this checkmark
[02:12:36] without...
[02:12:38] rerunning
[02:12:39] Like the list like I can actually put a console log and
[02:12:44] in here, like in front of the to-dos and be like,
[02:12:48] To-do's.
[02:12:51] And...
[02:12:53] So checking this checkbox, like there's no visual on here, so you can't tell like that  it's doing anything.  But checking this checkbox doesn't cause the list to even evaluate.
[02:13:02] Whereas in
[02:13:04] This is something that is true of only view...
[02:13:07] and
[02:13:08] and solids with their proxies, because essentially we can
[02:13:12] change a property on the to do without re-running the list.
[02:13:18] I don't know if that makes sense.
[02:13:20] makes sense to people. Like, um,
[02:13:25] Svelte doesn't do this. React doesn't do it.
[02:13:28] Oh, wait, sorry. Quick does this. Sorry. I should have that. Quick view and solid have this ability.
[02:13:37] But yeah...
[02:13:38] Preact doesn't have a solution for this, and...
[02:13:41] React you do it with MobX, but generally speaking
[02:13:45] this sort of reactivity
[02:13:48] Um,
[02:13:49] is why we can create
[02:13:51] really without
[02:13:52] like you just write the code kind of like the way you would expect it to.  And it just kind of works without actually having to write any memos or that.  And even in nested cases, you can eliminate the work of actually doing the list diffing.
[02:14:07] Anyway, I just wanted to...
[02:14:09] kind of show this. I might not be showing this quite effectively at the moment, but
[02:14:17] Like...
[02:14:18] This fine grained thing.
[02:14:21] can also apply to your data.  So if you have a big blob of data...
[02:14:25] This is why we use stores. Every little piece can update independently and only the component, or not even component, only the binding.  Like you could stick the whole thing in the same component like I've done here.
[02:14:35] and
[02:14:36] The only thing that actually needs to rerun
[02:14:39] is
[02:14:40] Like...
[02:14:41] know would be like this check binding in this case we're checking the actual box itself so  it's like not very obvious because the dom will also check the box directly um
[02:14:51] But like, uh...
[02:14:55] Um, let me think. Do I have a better example?
[02:14:59] Um...
[02:15:00] um...
[02:15:03] All sandboxes.
[02:15:06] Do do do do.
[02:15:10] simple
[02:15:11] To do's.
[02:15:13] Is this one...
[02:15:14] Is this like the same example? Probably probably doesn't cross anything off.
[02:15:21] Oh, I know which one I want.
[02:15:23] Yeah, this is the same example.
[02:15:25] Give me two seconds.
[02:15:27] I know exactly which one I want.
[02:15:30] I'm going to pull this off screen.
[02:15:32] for a second.
[02:15:37] Mm-hmm.
[02:15:40] Give me one moment here.
[02:15:42] React did a conference where they showed their new compiler off.
[02:15:47] And...
[02:15:50] I've probably shown this on stream, but this is probably...  For those who haven't seen this before, it's probably...
[02:15:57] Worth looking at.  Because...
[02:16:03] Thank you.
[02:16:08] Thank you.
[02:16:11] All right.
[02:16:13] Sorry, hit my mic.
[02:16:18] I want to show this example maybe in a bit more depth because I never get a chance to show this example in depth in my when I give this talk.
[02:16:25] Um...
[02:16:27] What I want to show here...
[02:16:29] is that
[02:16:30] .
[02:16:31] This to-dos list...
[02:16:34] passes
[02:16:35] a prop from above for visibility,
[02:16:39] Also passes a prop from above for theme color.
[02:16:42] .
[02:16:43] It actually filters on this prop.
[02:16:45] Right?
[02:16:49] So when I say filter, I mean like show only the active completed one.  So that prop comes from above.
[02:16:56] And then you can, you know, obviously add...
[02:16:59] new to-dos in this app here.
[02:17:03] It's not letting me scroll on this.
[02:17:06] *sniff*
[02:17:07] This is an older version of the Playground that I was playing with.
[02:17:14] That's actually a little bit annoying. It's fine. What I want to show though is like...
[02:17:20] If we look at the console here,
[02:17:21] I basically had a really hard time trying to figure out how to show
[02:17:27] things update.
[02:17:28] So what I did was I was like, okay,
[02:17:30] The filter function, let's put a console log
[02:17:33] count the number times this filter function's called.  And then inside each to do,
[02:17:38] Let's
[02:17:39] call it every time.
[02:17:41] the checklist changes, right?
[02:17:44] like the input in the checklist changes. So like right in the JSX binding
[02:17:48] I basically did it. So what happens is every time when it renders the original three,  it renders the original three here because it has to go and create those inputs.
[02:17:56] and the filter gets called the first time.
[02:17:59] If you check one,
[02:18:01] Obviously...
[02:18:02] It updates.
[02:18:03] Because...
[02:18:04] it has to rerun that expression, right?
[02:18:07] If...
[02:18:07] I switch.
[02:18:09] Let's check it again.
[02:18:11] and I go to active and I hide one of the ones that was checked.
[02:18:14] The filter gets called,
[02:18:18] And that's it.
[02:18:20] because it didn't need to re-render these ones and the other one just got removed so it didn't run it.  If I switch back now to all and show that one again,
[02:18:28] you're going to see the filters called again.
[02:18:30] And now this time we called the crate because we actually had to render this new item again.
[02:18:36] But that's all that changed.  And what I want to get at is...
[02:18:39] Changing the theme color here.
[02:18:41] doesn't cause any of the logs to happen.
[02:18:43] right? This component didn't need to do anything special. And the thing that might be kind of
[02:18:50] is that if you...
[02:18:52] Take...
[02:18:53] This
[02:18:54] List item here.
[02:18:56] Out.
[02:18:56] and replace this to do, like literally just stick it all in the same component, like just screw it, like who cares.
[02:19:03] Um...
[02:19:05] All right.
[02:19:09] Can I read properties of reading text?  Okay, yeah, because it's reading from props, right?  And we don't have props anymore.  We have...
[02:19:15] We just have the to-do.
[02:19:17] We just remove that and change it to that.
[02:19:20] Move that.
[02:19:22] Change it to that.
[02:19:23] Move that.
[02:19:24] Change it to that, hopefully. What did I...
[02:19:26] What did I pass to on change? I almost have to go back one. Handle change.
[02:19:35] Thank you.
[02:19:39] I'm missing one more. Oh!
[02:19:44] What's cool about this?
[02:19:47] Is this
[02:19:48] doesn't matter that I pulled the whole thing into the same component. Because like, the components have nothing
[02:19:54] to do with this, right?
[02:19:57] It's still just the same thing.
[02:20:01] And that's the power here, because it's not like even with recoil,
[02:20:05] Or...
[02:20:07] even like you're still going to like tell a component to re-render.  This never tells a component to re-render, right?  Like I didn't even bother
[02:20:14] putting the console log in here because like, who cares? But like, let's, let's, let's do it. Why not?  To do's. There we go. Like this, this is just never, ever going to get called again. Like there's just a
[02:20:26] it doesn't really matter what we do here. It's just never going to happen.  I mean, we know that by now, but like this extends to literally everything.
[02:20:34] It doesn't matter.
[02:20:36] how big you make the component.
[02:20:40] Anyways, people have been pretty quiet in chat. I'm sorry, I didn't mean this to get too much on solid shilling.
[02:20:46] It's just, I think it's...
[02:20:49] I think it should be clear at this point, hopefully,
[02:20:52] Um,
[02:20:53] that when people talk about signals and reactive rendering, there are
[02:20:59] differences
[02:21:00] in the implementation that matter not only for performance, but for developer experience.
[02:21:07] Um...
[02:21:08] Thank you.
[02:21:10] Come on, someone chat, say something.  Show me you're still alive.
[02:21:14] *laughs*
[02:21:21] - Bye.
[02:21:23] Yeah.
[02:21:24] I need to drink some water here.
[02:21:30] Okay.
[02:21:34] Good boy. Good boy.
[02:21:35] Thank you.
[02:21:36] I'm going to make it a little bit.
[02:21:38] All right.
[02:21:40] Alright, good, good, good, good.
[02:21:43] Thank you. Thank you. Sorry. It just, I, I, sometimes you like, you give these explanations. Does anyone have any questions? Does it, does this, does this make sense?
[02:21:51] Um...
[02:21:53] I'm hoping at this point
[02:21:57] When we go back to our Excalibur draw, we can really, you know, basically go like, "Okay,
[02:22:02] These are the types of reactivity.
[02:22:06] This is the trade-offs between them.
[02:22:10] right? Signals are cool. Signals are super cool.
[02:22:15] And
[02:22:16] Like...
[02:22:18] We could do like way more than what we're doing with them today. That's my point, right?
[02:22:22] We're just touching the surface of it right now.  We need...
[02:22:26] more people working on this.  So I'm not saying this...
[02:22:30] to discourage the attention that this has been getting. It's funny, this stuff's like a decade old. How are we still learning stuff?
[02:22:36] Um...
[02:22:38] It's more than a decade old.
[02:22:40] it's just I wanted to actually just clarify because as I said when I was sitting there
[02:22:49] You know,
[02:22:50] roaming on
[02:22:51] these discussions on Twitter
[02:22:55] Like...
[02:22:56] You start...  I mean, maybe I should just stop doing that.  But, like...
[02:23:01] You could just read through this stuff. You can see the kind of stuff. Winning combo, let's
[02:23:09] I think having effects is a mistake.
[02:23:12] That's an interesting take.
[02:23:13] It might be awkward if your system has its own rendering system and then effects are the side thing, but effects are how you render. It's hard to say effects are a mistake.
[02:23:23] You know?
[02:23:30] you know,
[02:23:33] People, you know...  I am super excited about...
[02:23:36] some of the excitement,  you know,  we try legend state.  Here's an example of adding reactivity,  uh,  within react.  It's really cool.  Um,
[02:23:45] Yep.
[02:23:46] Quick.
[02:23:48] What problems were you able to solve?  Have you tried Jyotai?
[02:23:52] Let's bring reactivity to react.
[02:23:55] At this point, we should kind of understand what bringing reactivity to react
[02:23:59] does and doesn't do.
[02:24:01] Maybe this...
[02:24:02] Do people understand why React...
[02:24:04] And Dan Abramoff and the communication there, like why they will not add this stuff to React.
[02:24:10] Is that clear? I don't know if I made that part clear yet.
[02:24:14] Um...
[02:24:21] Oh, this is why I like Angular. It always had signals.
[02:24:25] sort of
[02:24:26] Amen.
[02:24:28] Yeah.
[02:24:30] It's because the model that React does,
[02:24:34] Thank you.
[02:24:36] Like, the whole...
[02:24:38] Let's see, some of the quote tweets are usually...
[02:24:42] What do we got here?
[02:24:43] Throw my prison on her.
[02:24:47] But what I want to say is...
[02:24:48] The stuff that signals avoid here...
[02:24:51] for you from a React perspective?
[02:24:54] - Yeah.
[02:24:56] the React team doesn't want to avoid.  Like...
[02:25:00] The problem with this approach, and this is why the hybrids have such a hard time, is you actually start having to shift your mind around a little bit.  And let me explain why.
[02:25:11] React?
[02:25:12] all rendering, which isn't actual rendering, but actually like creating the virtual DOM is a pure  operation. It is a derivation. You start with some data, you convert it into a virtual DOM. It's pure.
[02:25:22] There's no side effects unless you have to force them into the system using useEffect.  Essentially, it's like this escape hatch out of this pure system.  So it's really mismatched.  And it gets more complicated the more you co-locate it.  It's like sometimes when I have concern that if we co-locate our server code and our client code too closely, we might get confused by it.  UseEffect is like that every day.  You just walk in, you're just like...
[02:25:46] I'm jumping out of the paradigm, and it's like blatant that I've just jumped off a cliff.
[02:25:52] But it's there as an escape hatch, not for everyone to use. The idea is that you have this pure rendering. And the problem is reactivity. And the thing about pure rendering, sorry, before I go there, is you have immutable state, and you have immutable data. And every time you can just produce a new immutable thing, you can diff it, and the whole thing is this nice immutable tree that runs top-down.
[02:26:12] That's your system.
[02:26:14] The truth is obviously the reality is a little bit messier than that, but that's the pure version of it. The difference with reactivity is
[02:26:22] when you start nesting things, like every reactive atom is a switch that is essentially immutable because you need the change to be detected. It needs to
[02:26:30] it needs to switch. But if you start nesting it and creating stuff, you actually end up with a mutable structure instead of immutable because you can pick up
[02:26:37] where you left off.  So without...
[02:26:40] cloning the whole tree, you know, you kind of like pick up
[02:26:44] where like
[02:26:45] mid-tree, so you're actually keeping references. The reason the closures aren't a problem  is because the references never change. So essentially you not
[02:26:54] You're not in the kind of same
[02:26:57] problem space around closures, but it's because
[02:27:00] like the outside never re-renders again. The reason closures matter is because you actually change what
[02:27:05] could possibly be closed over. But the trade off of that obviously is now that everything is kind of treated in the scope of mutation you create and then you mutate.
[02:27:15] And...
[02:27:18] There's a way to control that mutation.  That's what I did with Solid.  People asked why I'm so big on read-write segregation.  It's so that you can keep control of this.  I think React has a lot of good ideas.  The philosophy is sound.
[02:27:30] Um,
[02:27:31] I, you know
[02:27:33] There's this Medium article, I've brought it up on stream, but I can't bring it up again.  It's like one of the first things I ever read by Dan Abramoff.
[02:27:41] see if I can find it because sometimes I'll show who I'm following here. Yeah, perfect. Okay, we're gonna go down and
[02:27:46] to Dan Avermuth, you're missing the point of React. 2015, here you go, missing the point of React.
[02:27:52] I think
[02:27:53] And he basically says, "We actually misunderstood by very smart people."
[02:27:57] But he's like, after using React and observing people learning,  I can say that the best part of React are not the ones that made it famous.  It's not the virtual DOM, custom event systems, server rendering, or JSX.  None of that.
[02:28:06] Thank you.
[02:28:07] Rather, they were boring, old, and powerful ideas.  He called...
[02:28:11] them old. I love...
[02:28:14] *sniff*
[02:28:15] Thank you, Dan.
[02:28:18] He's talking about
[02:28:21] control.
[02:28:22] and abstraction leaks.
[02:28:25] And he's basically talking about stuff like...
[02:28:29] unidirectional flow.
[02:28:32] We've had enough black boxes in our career.  We want to understand, if not the full picture, at least up to a level where we can make snarky comments that's also correct to some degree.
[02:28:40] Right.
[02:28:43] React's true strengths are composition, unidirectional data flow, freedom from DSLs, explicit mutation, and static mental model.
[02:28:50] Guess what?
[02:28:51] You can do all of this without a virtual DOM or without...
[02:28:57] *smack*
[02:28:59] immutable data. You just have to be explicit about your mutation.
[02:29:02] Check.
[02:29:04] you know, have the ability to just
[02:29:06] - Escape into JS, check.
[02:29:09] Have a consistent mental model, check.
[02:29:11] Unidirectional flow, check.
[02:29:13] Composition check.
[02:29:17] This is what makes React good.
[02:29:22] But,
[02:29:24] to have that static mental model,
[02:29:26] Or that...  They...
[02:29:27] I mean, static mental model and consistent are different. But to have that mental model, this is the key part. I said check, but this is not completely true from like,
[02:29:36] our side. What he means is the fact that you just view each component as something that  could just re-render and replace itself.
[02:29:42] again. And I
[02:29:44] I think...
[02:29:46] This piece here is very important to the whole react.  It's what makes React react.
[02:29:52] Which means that this is why they're not interested in doing this.
[02:29:55] They don't mind using a compiler like Svelte even, you know, as long as they
[02:30:00] and keep composition, I'm sure.
[02:30:01] Svelte today doesn't really have composition in the same way. You've got to escape a level.
[02:30:05] but maybe they're okay with that.
[02:30:08] But...
[02:30:09] They're not gonna give up
[02:30:11] They're throw it away...
[02:30:12] model.
[02:30:15] But I do think the future
[02:30:18] Does.
[02:30:19] put some pressure on it.  So we'll see how,  where that goes.  But I think,  I think it's very important to understand that like when people say,  Oh,  it was a mistake for react not to do this.  It's like,  no,  they are following react to reacts natural,
[02:30:31] place.
[02:30:33] Thank you.
[02:30:38] Right.  Right.
[02:30:39] so
[02:30:39] you know this this this is kind of the difference right
[02:30:42] Like, my...
[02:30:44] I keep trying to find the right ways to explain this to people, but essentially like I've told you react renders pure and
[02:30:51] Reactivity renders effects, like everything's an effect.
[02:30:54] Like the rendering is an effect, not everything.  You can do derived data,  but essentially the rendering is effect.  And that change in model is,
[02:31:03] is...
[02:31:03] is a profound one.
[02:31:06] What's interesting is all rendering, arguably, if you think about it, is a combination of a pure stage and an effect stage.  So if you can separate them and keep that interaction clean,
[02:31:17] you can play with the pieces a bit and that's the place where I often see stuff like solid
[02:31:22] or React not being that different because
[02:31:25] instead of being the components being the pure part, it's the
[02:31:28] derived state. It's the memos and the...
[02:31:32] It's the signals.
[02:31:36] thing that runs through your component tree. That reactive data is the pure part.
[02:31:41] And then...
[02:31:43] The things that actually update the DOM
[02:31:47] are the effects.
[02:31:48] We can keep that separation even with a model that's split up this way.  React keeps it internal with Fiber,
[02:31:54] we put on the outside but it there's huge analogies there
[02:31:58] um...
[02:32:00] Except for that one
[02:32:03] principle around the component being the thing that re-renders.
[02:32:18] why would you need context yeah I mean dependency injection still powerful tool  instead of having like a singleton you can actually like
[02:32:26] choose where you get your source from.
[02:32:28] like change providers.  I also think that for SSR it's important  because multiple requests can be handled on the same server,  multi-user scenario.  So tying it to the tree is actually really
[02:32:38] Great.
[02:32:44] Alright, just catching up with chat here.
[02:32:54] Yeah, sorry. You could say static. I think the static mental model is like create the component, throw it away.
[02:33:00] the mental model
[02:33:02] isn't about mutation. I think that's what he means. So in that sense, our mental model is not the same as theirs.
[02:33:08] we have a consistent mental model that makes sense,  but it's not,
[02:33:11] Like the React one.
[02:33:14] Thank you.
[02:33:22] Alright, I think people are...
[02:33:24] in a pretty good place here.
[02:33:35] There's always an intention. I just... we need more people. I stream... it's funny, you'd think like maybe instead of streaming and educating, I should uh...
[02:33:44] just be writing some more docs, but at a certain point, um,
[02:33:47] I'm hoping that people take this knowledge and come back and contribute and  use stuff and build the community up because it's a lot of work,  more work than I can do myself.  So,
[02:33:58] This is time well spent, if people can understand.
[02:34:02] the stuff and even if that doesn't mean come to solid today
[02:34:06] Take this knowledge with you to Preact.  Take this knowledge with you to Quick.  And I hope to see you in the future because...
[02:34:13] If I...
[02:34:15] If I can help raise the base knowledge and then people contribute docs and articles and stuff, we can build this up.  I want to see reactivity succeed more than anything.
[02:34:27] Um...
[02:34:28] It's as a...
[02:34:29] As I said...
[02:34:36] *sniff*
[02:34:37] Yeah, I would...
[02:34:38] *cough*
[02:34:51] I
[02:34:53] The funny thing is I don't even know the answer to that question right now.  I'm just telling people to look around in the ecosystem, build what they need,  and hopefully they'll have something good out of that.  The biggest thing is...
[02:35:03] like
[02:35:04] There's more libraries out there than you know, but I honestly can't answer this question at this point.  There's just a lot of stuff going on.
[02:35:15] All right.
[02:35:16] So does anyone have any more specific
[02:35:19] questions about this stuff.  Like, have we covered this?  Okay, here's a question.  How do independent observers scale  compared to a single one  that would do all the work showing off?  That component doesn't re-render  doesn't mean that cost isn't on the leaves.  Great point, thank you.  And the truth of the matter is...
[02:35:33] Solid actually groups a lot of computations together for this reason and  why larger templates are beneficial. There is a slight cost difference even though the DX is
[02:35:43] doesn't change
[02:35:45] and the mental model doesn't change as you change components,  there is a performance consideration.  Larger components will generally perform better in solid,  just because you break stuff up less and you can share it more.
[02:35:57] So there
[02:35:59] it isn't just about being fine-grained, it's not just about like doing the finest upgrades.
[02:36:04] Solid actually does group updates together.  I wanted to change it so it wasn't about...
[02:36:09] components. So if you have largely static stuff, that doesn't impact it. If you put, layer it into lots of components because that's how you organize stuff, that doesn't impact. What impacts it, or not significantly, what impacts it is
[02:36:22] degree of interactivity. The apps scale with how interactive they are, not with the size of them.
[02:36:29] Um...
[02:36:30] So, like, what I'm getting at is, like, it's the little things like the control flow not rerunning.
[02:36:37] And that being a logical place, like control flow is a logical place to have the decision points to do like the render from rather than at each component. You don't need to like listen from each component. You need to listen from the control flow.
[02:36:50] That is sort of...
[02:36:52] the,
[02:36:53] the mentality we what we produce isn't exactly what you write structurally from a component standpoint
[02:37:00] even though we leave your code mostly alone, it just kind of feeds into less of these
[02:37:06] decision points where a lot of
[02:37:08] solutions, especially reactive ones or the hybrid ones that are reactive for the VDOM, will just say like every component
[02:37:14] is an effect, and we don't do that.
[02:37:17] So there's trade-offs, but it means that you're not, I think we talked about this, we're not overwrapping with computeds or memos, and you're not overwrapping components with effects. We just reduce that, and that's why Solid generally has creation metrics similar to a virtual DOM, yet has the update performance of Solution.
[02:37:33] of the fastest reactive libraries. And that's having both of those pieces together is why it's  performance is so incredible.
[02:37:40] It's not just a matter of being reactive.  It actually...
[02:37:44] um
[02:37:45] Thank you.
[02:37:46] kind of blends the benefits of both sides.
[02:37:50] Thank you.
[02:38:05] Do you think people would actually enjoy me writing documentation on stream?
[02:38:09] I don't...
[02:38:11] I read lots of articles and stuff.  It just, oh, man.
[02:38:16] Yes, it is a lot harder.
[02:38:24] How does Solid compare to Vue and Plan Vita on the last couple of years?
[02:38:28] I honestly have no clue. It's good that you mentioned this. How could we know until we see what Vue generates?
[02:38:34] I would suspect that it's actually very, very similar.
[02:38:38] From what I saw, when Evan showed ViewVapor on screen, I thought I was looking at SolidJS Kylecode.  It was literally like you just lifted it.
[02:38:46] um...
[02:38:47] And
[02:38:48] That's cool. Do you know what the challenge is?
[02:38:51] It's ecosystem killer.  You've got to start over again.  The same way that we couldn't continue from...
[02:38:58] from React. They've got this thing where you can put the vapor components in the view tree,
[02:39:06] So technically you can use that the leaves,  but as you starting to see here,  the benefit is actually architecturally,  the way the data flows through the whole app.
[02:39:13] The other option is to start from the top, but if you start from the top you don't get to use any of your existing view libraries.
[02:39:18] Maybe they'll convert to have a vapor mode or whatnot.  But like,  this is a,  this is like an ecosystem resetter.  Um,
[02:39:25] And at which point,
[02:39:27] View has to weigh how important that is.
[02:39:30] and put
[02:39:31] towards prioritizing that
[02:39:34] We'll see if they think it's the future versus the fact that we've been building up an ecosystem on this since we started.
[02:39:43] It's possible.  I've talked about this in the past.  Vue, for the longest time, was my great hope  that I wouldn't have to write a JavaScript framework.
[02:39:52] But like
[02:39:53] I felt like, and I bugged
[02:39:56] Evan about this for a couple years. I was like, hey, just get rid of that VDOM. You can just get rid of it. And it never really went anywhere. But then Solid finally started to take off and then they took notice. So...
[02:40:06] That's fine. Lots of people taking notice from the signals and all this stuff.  I think we're going to see more of this stuff.  This is just the start, as I was saying.
[02:40:16] But I don't know how it's going to compare.  I assume it's going to be pretty sweet.
[02:40:32] Yeah, yeah, and
[02:40:34] I've been looking at making this easier for people because people get kind of pushed off.  They see like a seven kilobytes solid thing and they're like, oh, that's kind of big.  But the truth of the matter is you pull out the reactivity, it's much smaller.  We could be smaller still.  In Solid 2.0, I imagine the reactive part will be easier to just use directly.  But like literally you can just import SolidJS right now and just use reactivity straight.  You don't need any of the other stuff.
[02:40:56] Yeah, and we have React Solid State, which lets you just use it the way you use MobX in React. So you can use Solid to react once. I never show this library off, because I'm kind of like...
[02:41:08] I...
[02:41:09] I'm a performance purist, so when I think about it, I go, well...
[02:41:13] you're going to be better using React directly and React State than at a reactive level.
[02:41:19] talking about how the hybrids are kind of worse.
[02:41:21] But yeah, I mean...
[02:41:23] This is like old MobX style where you can be like with solid and then create signal and then you return a function.  So essentially the top of the component never runs again and it's only the VDON that updates on reactive updates.
[02:41:33] So there you go.  Something that feels like solid,
[02:41:36] inside React.  You get to run once components.  It's basically view...
[02:41:41] style, essentially, without any of you's incredible optimizations.
[02:41:46] So you're basically just stuck with React plus some, but the DX might be nice.
[02:41:56] Thank you.
[02:41:58] Not from what I've seen.
[02:42:01] But who knows? Maybe...
[02:42:03] It can help with converting react to solid code at some point.
[02:42:12] It's called View Vapor.  You're going to have to...  I don't know.  Evan did...
[02:42:17] mentioned vapor, uh,
[02:42:19] when we were looking through
[02:42:22] This thing, what did he say?  Today's conference, the term signal seems to also imply fine-grained view updates bound to signals.  This is something View is moving towards as well.
[02:42:30] FU is already fine-grained at a component tree level, but per component level it still currently uses compiler VDOM hybrid model to achieve some level of fine-grainedness and with some overhead that can be further shaved off.
[02:42:40] So
[02:42:41] Where are you, Evan?
[02:42:44] Does he say any more? No. Okay. Yeah. Anyways. Yeah. It's called View Vapor.
[02:42:55] Yeah, what we've seen with ChatGPT is you get React code with some variables renamed, but it's not very reliable.
[02:43:09] Um...
[02:43:13] - Yeah.
[02:43:14] Yeah, and Vue 3 was like a two-stage or two.  I mean, it wasn't as...
[02:43:19] there was the view three composition API and then there's the ref sugar. So there's like a, the ref sugar wasn't as painful, but it was like a,
[02:43:26] there's like a little bit of a sub-step, but it is interesting. But the thing is like, we're in a time of change.
[02:43:32] You're kidding yourself if you don't think server components are also this kind of thing happening right now.
[02:43:37] Throwing that out there.
[02:43:53] *sniff*
[02:43:56] Well, I mean, what he said in the presentation is that you could...
[02:44:00] basically opt in at a leaf level. Because you could basically, it's like, it's like today you can take React and put, grab a ref and then render solid,
[02:44:11] in that ref under a React app.  You can basically do that because  you could just kind of escape out and switch,  but you can't interleave them very easily.  Like, it's possible that they could do child projections,  but the problem is, like, would the...
[02:44:23] The child would be rendering VDOM nodes...
[02:44:28] like the projection would be rendering VDOM nodes, and the child would be like, "I don't understand VDOM nodes."  Like maybe you could do something special there, but what they've talked about so far has been basically like,
[02:44:39] Do regular view to a point and then opt in at a component level and everything below that in the subtree to Vapor.
[02:44:49] No, no more Angular today.
[02:44:52] We're going to wait to talk to them more about signals.
[02:44:59] I think server components could very well be the future.  You should watch some of my other streams if you haven't seen them.  I did a whole stream on server components with X13, and also Solid 1.6, I show...
[02:45:10] I show an amazing demo in terms of what you can do with server components in Solid.  It's an experimental thing, but it shows the potential here when you could deliver full  web pages at 13 kilobytes that just scale at that.  So I think that's really powerful and you should check that out.  All right.  You know what?  I'm not going to stream all day.  I actually kind of wanted to see if the end of Twitter is actually real.  Is that space still happening?
[02:45:40] It is happening. 462 people in the space.  Does anyone else want to know about the end of Twitter?
[02:45:46] Replacing Twitter as social media deep dive.  Yeah.  I think we're good on reactivity.  Unless anyone has any more questions, I think I'm going to call this a stream immediately.
[02:45:54] And thank you all for joining me.
[02:45:59] All right.
[02:46:00] Why solid memos are not lazy?
[02:46:02] It was a decision at the time. They're most very likely going to be lazy in the next version.
[02:46:09] Alright, cool.
[02:46:10] See you all.
[02:46:11] Um...
[02:46:14] Thanks for joining me today.
[02:46:18] Thank you.