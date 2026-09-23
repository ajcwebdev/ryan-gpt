---
title: "Fp9duJd6Txc"
slug: "Fp9duJd6Txc"
duration: "5:11:56"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/Fp9duJd6Txc.m4a"
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
[00:00:01] Hello everyone, welcome to my stream today. Just give me a second here, still just
[00:00:07] Get myself all set up, I...
[00:00:09] Had a long week.
[00:00:10] um...
[00:00:12] with very little sleep it feels like.
[00:00:15] I missed my connection coming back from Poland yesterday, so I came in a bit later.
[00:00:20] But...
[00:00:21] I am looking forward to stream today because
[00:00:24] Thank you.
[00:00:25] After the stream, my schedule has me doing a whole bunch of stuff for the next three weeks.  So I actually won't have a Friday stream again for...
[00:00:33] I'd like to say about...
[00:00:36] I think three weeks, four weeks.
[00:00:39] Yeah, so...
[00:00:42] Yeah, we're going to see. I felt it was important to stream today for that reason. So get a chance to talk about this.
[00:00:49] uh,
[00:00:50] stuff that's happened this past week with next comp.  Um,  and,  um,
[00:00:54] Since I didn't have much time to do pretty much any preparation,
[00:00:58] um...
[00:01:00] I figured to just continue that conversation we were having a couple weeks ago when I was testing preact. I was like, can we do this? And it looked like
[00:01:06] 85% chance we can do this. So I haven't taken that any further. I have to admit.
[00:01:13] So we're just gonna try live and
[00:01:17] you know, stumble through this and see if we can get this going. I'm just gonna
[00:01:22] Tell everyone we're live.
[00:01:24] uh...
[00:01:26] Um, where are we?
[00:01:28] And I have to remember to open up Twitch chat because that's how I miss all the lovely
[00:01:35] subscribers that come along because StreamYard does not forward that information through. So give me one second while I get Twitch chat open too.
[00:01:43] Besides, we're just killing everyone's pre-rolls now that I'm an affiliate.  I'm sure anyone watching is...
[00:01:49] It's dealing with those pre-rolls.
[00:01:51] Alright.
[00:01:54] Alright.
[00:01:56] But yeah, how's everyone doing today?  How about you say hi in chat if you haven't yet?
[00:02:01] few of you in there already
[00:02:03] We're just getting started.
[00:02:07] Ooh, sorry. Sometimes it feels like you gotta like build it up. I have to admit I am pretty tired today.
[00:02:14] Thank you.
[00:02:15] All right.
[00:02:17] I'm actually very excited to talk about this week in JavaScript when we actually get to that.
[00:02:23] I think this is going to be kind of fun because...
[00:02:25] um
[00:02:27] I've done this a few times now where I've created libraries using solids underlying renderer and
[00:02:34] uh...
[00:02:35] think that
[00:02:37] Um,
[00:02:38] It helps people understand the requirements or what's involved in it.
[00:02:43] Yeah.
[00:02:45] Yes, I'm completely green screened into my room and I didn't spend the time today to make sure that it was like all nice looking. You can actually see the flicker on my mic.
[00:02:52] Um,
[00:02:53] I just got to upgrade the background a little bit better.  So do you know how this all happened?  Actually, I'll tell you the truth.
[00:03:00] I live in a place where my office area is right next to my kids' rooms. And it's really awkward because certain times a day I can't stream. So what was happening was I was streaming at night and I couldn't do that so I'd have to go to a different room.
[00:03:13] And then I was like, okay, well, how do I like...
[00:03:15] have some semblance of consistency when I stream all over different locations. So I literally took a picture of my own office and used the backdrop and then I was like watching
[00:03:25] Theo's dream. I'm like, I love the way that looks. I
[00:03:29] And I was like, what is he doing?  Well, it turns out he has some special expensive camera  or something.  So what I actually did is I took the backdrop  and then applied a slight blur to it.
[00:03:37] with hopes that I would be able to produce something that looked...
[00:03:41] Um...
[00:03:42] Thank you.
[00:03:43] Semi-decent but when I don't spend the time and to get the lighting just right as you can see there's probably like some some flickering going on  But I'm not being this big screen for that much longer. I
[00:03:54] Yeah, yeah. I'm a little tired today, but I am...
[00:03:58] We're going to do this one because I said it's my last chance for several...
[00:04:04] weeks. Although...
[00:04:06] I will be on other people's streams and I'll be on other conferences and stuff in the coming weeks.  It just turns out that Friday is just not going to be a good day that works.
[00:04:15] All right, yeah, people joining in now, that's awesome.
[00:04:18] - The first time we have been in the
[00:04:20] Yeah.
[00:04:22] Let's see here. Let's get this set up. Because honestly, all I've done so far was I took down my view rxjrx. I have a version of view that doesn't use view, just uses the reactivity to do render. And I was like,
[00:04:36] Preact looks kind of like Vue. Maybe we just copy it down and start converting that project and see where we get to. And hopefully some insights that come along the way.
[00:04:43] um
[00:04:44] so
[00:04:45] This may or may not work.
[00:04:48] We'll just kind of go from there.
[00:04:51] Hello from Poland. Yes, just saw you just the other day.
[00:04:56] Hello from Washington.
[00:05:01] Yeah, how's everyone going? Okay, okay, let's see here.
[00:05:05] Maybe I should pull up a VS Code window or something.  Um...
[00:05:09] I don't even know what the name of this package. Does anyone have good ideas of what the name of this package?  Let me share my screen here.
[00:05:17] Basically,
[00:05:19] So
[00:05:21] I've been...
[00:05:22] I've been calling these libraries like -jsx, but I'm sure there's already like a preact.jsx.
[00:05:28] Oh, hello from the UK.
[00:05:32] Mm-hmm.
[00:05:32] Oh, OK, we got people from all over.
[00:05:35] This is awesome.
[00:05:37] Um...
[00:05:39] Thank you.
[00:05:40] But yeah, I mean, I guess that's the first thing, right?  Naming is always the fun part.  I just went, like, following a convention,  I went PreactRx-JSX,  which is probably the longest and most nondescripted name,  but then I realized, like, if I went Signals or something,  it would be too long, too, so...
[00:05:54] If anyone has a better name,
[00:05:56] Preact JSX is available for now. Yeah.
[00:06:00] I almost feel like I want to namespace it because this isn't actually preact.jsx.  It's like preact.reactivity plus jsx.  Maybe preact.rx-jsx is fine.
[00:06:11] Brazil. Nice.
[00:06:14] All right.
[00:06:15] Portugal
[00:06:17] Yes, the fully descriptive name.
[00:06:21] -
[00:06:22] That is an option.
[00:06:24] Yeah, it sounds like my naming is a not terrible.
[00:06:30] Preactivity, yeah.
[00:06:32] uh,
[00:06:34] Uruguay. Oh man, this is fun.
[00:06:37] Alright.
[00:06:40] I feel like I almost need the juice or the energy.
[00:06:43] maybe i should put a little something in it i don't know
[00:06:48] algeria
[00:06:50] Dominican Republic
[00:06:51] Germany Wow
[00:06:53] Hmph.
[00:06:54] Romania
[00:06:55] Okay.
[00:06:58] That's I love how global of an audience and like community we have these days now because of just, you know, obviously Internet, but like.
[00:07:06] streaming videos, YouTube, we're able to engage with people in such a wider range and
[00:07:14] all places.
[00:07:16] So...
[00:07:17] Another Poland. Yeah, no, this is absolutely awesome.
[00:07:21] But, yeah, I mean...
[00:07:25] Maybe I should give a little overview first of what we're going to be doing today.  Hungry?
[00:07:29] People from every time zone. Yeah, I know. So you start thinking, you're like, what time is it where you are at? Because like, okay, it's 12 here, which means I guess like in Poland, it's like 8pm or something.
[00:07:38] Um...
[00:07:40] Okay.
[00:07:44] Yeah, I am in California, it's the Pacific coast, so yeah.
[00:07:53] Uh...
[00:07:54] Yeah, let's...
[00:07:56] I guess the only, honestly, the only people who really suffer from this current time slot is further east.  I don't know if we're going to have anyone from Australia today.
[00:08:03] or Southeast Asia.
[00:08:07] So
[00:08:08] Thank you.
[00:08:08] You know.
[00:08:09] We'll catch up on all of them later.  Okay, so...
[00:08:13] high level
[00:08:14] I'm just gonna pull this up again. I pulled it up in the past. I did my very first stream was actually about this topic. I
[00:08:21] Um...
[00:08:22] uh,
[00:08:24] I guess it was over a year ago.  I was trying to give people an overview of my library DOM expressions.
[00:08:30] for people who don't know, solid,
[00:08:33] when I built it, I tried to make the core of it framework agnostic.  I know that seems kind of crazy, but I was like, I was very non-committal.  I was kind of like, I don't really want to decide what the best reactive system is.  I don't want to decide what.
[00:08:49] you know, the best component system is or whatever.  Like, I was just kind of like...
[00:08:55] I want to leave my options as open as possible until I figure out the best way to do something.
[00:09:00] Um...
[00:09:02] So I...
[00:09:04] Oh, awesome, the tests are failing.
[00:09:08] That's weird.
[00:09:08] because the tests pass locally. Anyway.
[00:09:12] have to look on that. But
[00:09:14] Essentially,
[00:09:17] I created a generic...
[00:09:19] as best I could generically,
[00:09:21] render that worked off reactive systems that are similar to knockout or mob x or solid or view when they publish theirs and i even like i've got a bunch of them here solid mob x jsx view rx jsx knockout jsx
[00:09:37] Um,
[00:09:38] S, which was from...
[00:09:40] SJS, SJSX.  I even have...
[00:09:45] Believe it or not
[00:09:47] I have an RxJS.
[00:09:49] version.
[00:09:50] Just for like...
[00:09:51] Look, new behavior subject. For your Rx people out there, here you go.
[00:09:57] It was using a library called...
[00:09:59] RX Autorun
[00:10:01] I probably can find it here.
[00:10:04] Auto run.
[00:10:06] rx auto one
[00:10:08] uh where is it
[00:10:11] -
[00:10:13] It's like
[00:10:14] Maybe I don't have it right.
[00:10:15] rx.js auto run
[00:10:19] So when you don't look at the-- yeah, yeah.
[00:10:22] it was this idea that you could take
[00:10:25] Thank you.
[00:10:25] Excuse me.
[00:10:27] RxJS primitives
[00:10:29] and get dependency tracking on them.  So it kind of inverts the pattern.  So this is still...
[00:10:35] you know, like an observable from RxJS standpoint,  but you can use this dollar sign to read from it.
[00:10:40] Um,
[00:10:41] I'm just showing stuff, but my idea here was that you could take basically any reactive system,
[00:10:47] and
[00:10:48] build a renderer that didn't involve a VDOM, didn't involve, you know, a lot of the specific ceremony we see and just build a purely off reactivity.
[00:11:01] Thank you.
[00:11:03] So that was the goal.  Okay.  And I think...
[00:11:08] It's interesting because it allowed me very early on to figure out what qualities I liked about reactive systems and how to approach designing it.
[00:11:16] But it's one of those things where like over time you're kind of like, whoa, whoa.
[00:11:20] Do I just roll this into solid and get more specific things?  Like in theory, I can make solid...
[00:11:25] slightly smaller and maybe even more optimal if I brought these pieces together instead of making them generic.
[00:11:31] Um,
[00:11:31] It hasn't been in a meaningful way, but...
[00:11:34] or that meaningful, but it's like one of those things that you always have in the back of your head when you're doing performance stuff.
[00:11:39] There's also the maintenance costs because I
[00:11:42] If you look, this is still under my name.  I keep this separate to safeguard...
[00:11:48] the, the like,
[00:11:50] framework agnosticness of it or library agnosticness of this because
[00:11:55] I've done it intentionally so that we don't actually just make this solid.
[00:12:01] So there's potential here to take...
[00:12:04] I'd say almost any reactive library and,
[00:12:07] create
[00:12:09] the baselines of a solid-like experience.  You have to implement some of the features yourself,  so I'm not talking modern solid.  Solid's kind of gone away from this.  Solid has transitions and suspense and stuff.  This only took stuff as far as lazy components  and mostly client-side render stuff.  There's no specialized server-side rendering,  in the least of the ways I built it.  Although, technically, DOM Expressions has all the SSR stuff,  so someone...
[00:12:33] could.
[00:12:34] build all the features of solid from the same base.
[00:12:38] But in any case, for the most part, I do this...
[00:12:42] for
[00:12:45] for client-side rendering mainly.  And the cool thing that is any library  that is built off DOM expressions actually gets...
[00:12:53] A few...
[00:12:54] outputs. They get the ability to use JSX, the way Solid uses JSX. They get the ability to use a hyper script function and they get the ability to use tag template literals. So all the different templating forms also come part of this because basically you build a custom runtime
[00:13:10] for your framework that works with
[00:13:13] all the tooling that I built for Solid. And the
[00:13:17] And the thing...
[00:13:20] .
[00:13:21] that is important and why this has kind of an awkward build setup,  is I wanted the framework to be tree shakable.  I wanted it so that the output
[00:13:30] could easily be tree shakable.  And this was a problem I had with just like importing stuff  and calling a wrapper function.
[00:13:37] Because you need all the methods to wrap them.
[00:13:39] And then at that point, it's harder.
[00:13:42] unless we wrapped each thing individually, it'd be kind of tedious to actually ship this in a way  that the end user only imports what they import or the compiler only imports what it imports.  So I made this sort of into a build step. So you bring DOM expressions into your project,  and then DOM expressions doesn't get shipped out as a dependency. It's kind of like bundling. We  actually bundle a framework from this library. And then because we bundle it that way, any
[00:14:12] will only take those in because there's no like
[00:14:15] over
[00:14:16] arcing wrapper.
[00:14:17] What you get ultimately is just your framework.
[00:14:20] Thank you.
[00:14:21] Okay, so that's like the technical thing.
[00:14:23] How's it going?
[00:14:25] I am a little bit tired, but we're going to go full charge today.
[00:14:32] Whenever you have time, I'd love you to take a look at my small library called sprinkle.js.
[00:14:36] Is it a URL?
[00:14:37] That's...
[00:14:39] obviously I'm not going to go full thing here but
[00:14:41] uh...
[00:14:45] Is this like a reactive library?
[00:14:48] Thank you.
[00:14:54] Paulo, maybe not.
[00:14:57] Give me a link and we can talk.
[00:15:01] All right. Anyway.
[00:15:04] Thank you.
[00:15:06] Where are we going?  Right.  I just wanted to show, like...
[00:15:09] that this is an agnostic solution. And essentially,
[00:15:14] what we're going to be doing today is going to try and make Preact work.  The big thing is DOM expression.
[00:15:21] works because it does the wrapper itself. It expects you to export a few core functions
[00:15:26] to kind of build that runtime.  It needs to know...
[00:15:30] what an effect looks like in your library.
[00:15:32] etc. So
[00:15:34] Essentially, it looks something like this, where you make a few...
[00:15:38] functions that we need like
[00:15:40] how to create a route.
[00:15:41] how to create an effect,
[00:15:43] how to create a computation and drive value, how to create
[00:15:47] component and some a few other things this might not be fully updated and then it generates
[00:15:54] the framework for you. That's, that's the gist of it. So, um,
[00:15:59] This is actually just, I literally
[00:16:02] grabbed my view version of this and copied it across.
[00:16:06] So this is probably not going to be...
[00:16:09] Yes, I'm...
[00:16:09] Let me see here.
[00:16:11] is probably like this isn't going to run right off the bat here, but this can give you kind of an anatomy of
[00:16:17] or is that the right word? Anatomy, Autonomy, whatever, of a project that kind of looks like this.  And we're going to just port this over because the way I wrote it, a lot of the stuff is kind of generic.  So I think we will only need to implement one file here to actually get it working.  But when I build it, what I essentially do is I use Rollup. As I mentioned, it's bundled.  And what Rollup does is actually...
[00:16:39] goes through and builds
[00:16:43] kind of builds up our
[00:16:45] our main export for our runtime, our HTML, which is our tag template literal, and our
[00:16:51] exports and
[00:16:53] in our dist folder or whatever, we're going to essentially have
[00:16:58] these builds that
[00:17:01] with your package JSON should be exported properly here.  So what am I doing here?  Am I even using export maps?  This is probably just
[00:17:11] Yeah, this...
[00:17:12] I have not improved the DX on this one very much. Right now it just says the main is
[00:17:18] in here, live and dist. But essentially, it's a framework generator.
[00:17:26] Right now, this is using old style, so it's not using exports. It's literally just using nested package JSONs. There's nothing else in these folders except for a mapping back to the dist and lib folders that the build setup creates. It generates two folders, one for cgas and one for esm.
[00:17:43] So these won't get touched.
[00:17:46] And
[00:17:47] Actually, no, let's...
[00:17:50] Let's uh...
[00:17:51] Sorry.
[00:17:52] Someone mentioned, I need to blow up my text a little bit here so people can see it more like this.
[00:18:04] *laughs*
[00:18:06] I hope that's not a Rickroll.
[00:18:11] Oh, the live stream is not going good on YouTube?
[00:18:17] All right.
[00:18:20] Yeah, I'm just going to check how we doing in
[00:18:23] in
[00:18:24] Twitch land.
[00:18:26] Ooh, new subscriber. Thank you.
[00:18:29] AgUI.
[00:18:30] Describe to tier 2. You might be my first tier 2 sub.
[00:18:34] So...
[00:18:35] Big, big, big thanks.
[00:18:37] Okay.
[00:18:38] Um...
[00:18:41] Okay, yeah. I mean, everyone's going to have mixed things. If you're having trouble with YouTube, go to Twitch, go back and forth.
[00:18:46] whatever makes sense.  Um,
[00:18:48] I got started on YouTube because it was like dirt simple for me. Twitch actually makes me have to acknowledge that I'm actually a streamer who streams stuff. YouTube is just like, press button, you know.
[00:18:57] um...
[00:18:58] But yeah, whatever works for people, go for it.  Okay, so...
[00:19:04] One thing I'm going to do right now before I forget...
[00:19:08] is
[00:19:10] rename these so that they're consistent. But I think most of the build stuff is actually the same. We're going to kind of trial and error this. I don't have good tests in here because literally I
[00:19:19] This is something that I was like hacking together like three or four years ago before I even did
[00:19:24] when I used to just do everything blind.
[00:19:28] What we're gonna do is we're gonna
[00:19:31] kind of
[00:19:32] mostly translate it, publish like a 0.01 version, see if we one shot it. Otherwise, we'll just update in the node modules while we try it in real time, while we're building an actual app with it. I think that's generally what I'm going to do it. So, um,
[00:19:45] If you see me make mistakes in chat, do tell me because it'll probably slow us down later.
[00:19:50] Otherwise, we're doing this fully blind, pretty much. The best way to code.
[00:19:57] *sniff*
[00:19:57] All right.
[00:19:59] But yeah, I wanted to show everyone the anatomy of the project.  The other thing is...
[00:20:04] There are
[00:20:06] pieces that get copied in from the build step or don't always get copied in from the build step.
[00:20:12] that I have to remember to actually bring in.  Like this is not a good set, like a perfect set up.  Like if someone comes in here and tries to build  their own framework with it, they're probably gonna hit  a bunch of bugs. This is not the happy path.  This is like what I use for experimentation.
[00:20:24] But
[00:20:25] We're going to go here anyways. Okay, so what do we got here? Babel core is fine. Babel preset. We do not need view reactivity.
[00:20:31] We need to replace that with something.  I think that's the only thing we need.  We need the preact module and then DOM expressions, hyper DOM expressions,  which is the tag template literals are sorry, which is hyperscript and then lit  DOM expressions. So we're going to use this version.  There is a point three five out, but I have changed stuff again in point three five.
[00:20:50] to handle spreads and there's probably still some issues there and I changed it's more complicated so I'm not going to bother with that we're going to build this to last month spec.
[00:20:59] uh,
[00:21:02] So what I'm going to do, someone sharing a tool in chat,  which probably would be useful.  I'm just terrible at learning new tools.  So that's my fear here.  I feel I would probably like,
[00:21:12] try and do something and then like gets I get more stuck on tools and then I get doing stuff really hacky ways.
[00:21:18] Um...
[00:21:21] Anyway, yeah, so first things first.
[00:21:25] Let's see if we can find a
[00:21:28] Thank you.
[00:21:29] Let's go back to Preact. We were playing with Preact signals the other day, right? And that's how we kind of vetted that this was going to work.
[00:21:36] I made something in code sandbox and it passed the test.
[00:21:40] Um,
[00:21:41] I just can't even remember the input.  Maybe we can find it on CodeSandbox again.
[00:21:45] Did I delete my...
[00:21:48] My thing...
[00:21:52] Testing pre-act signals. Huh. Here we go.
[00:21:54] Alright.
[00:21:56] So this is what we want.  At PreactSignalsCore...
[00:22:00] Do they have new versions? Maybe.
[00:22:02] I gotta watch though, after my stream, I was talking to uh...
[00:22:06] I forget if it was Marvin or Jason.  And they were like, yeah, I'm not.
[00:22:10] Technically, you just did the thing in here and it worked, but we're thinking of removing that feature. And I'm like, oh, okay, well, I better make this before you do.
[00:22:19] in my head.  So maybe we'll just like lock it at the version that,  that worked just in case they start removing stuff.  I imagine they wouldn't remove it on a patch version,  but it's also kind of like undocumented behavior,  probably like it's kind of like hidden.  So,  um,
[00:22:33] you know.
[00:22:34] Let's just go one to one.
[00:22:38] Hey Alexander.
[00:22:40] All right, let's see what we can do here.
[00:22:43] All right, so we want...
[00:22:47] at
[00:22:48] Preact
[00:22:51] And yeah, I apologize a little bit for
[00:22:54] not
[00:22:54] being more prepared
[00:22:56] But...
[00:22:57] I mean, it just...
[00:22:58] I was...
[00:23:00] Pretty much...
[00:23:01] dead yesterday after like 17 hours on airplanes and stuff. What was it? 1.2.1?
[00:23:07] Alright, let's get this, uh...
[00:23:09] Let's get this going.
[00:23:13] Yeah, don't worry about being late.
[00:23:16] It always takes me a while to get
[00:23:18] To get stuff rolling
[00:23:21] I'm going to put it in the middle of the egg.
[00:23:24] But
[00:23:26] But yeah, actually, and talking about New Zealand, I was saying...
[00:23:31] I wasn't sure if we're going to actually have people from
[00:23:34] farther farther east so yeah i mean that's out the window i was just like yeah i doubt we'll see anyone from australia today well
[00:23:42] New Zealand is not too far from there, so...
[00:23:45] Okay, people from all over the world.
[00:23:47] -
[00:23:50] All right.
[00:23:52] Alright, okay cool.
[00:23:55] So we're installed.
[00:23:57] And
[00:24:01] It looks like it actually was smart enough to build the package in TypeScript.
[00:24:06] So we might actually be able to code blind reasonably well.
[00:24:11] Historically, I would just code blind in JavaScript and just cross my fingers.
[00:24:17] Right. Yeah, I saw potential here for us to learn something along the way, right?
[00:24:24] Um, that's, that's why I do this.  Um, live coding is always kind of fun.  You never know what you're going to end up with.
[00:24:31] Some people curse it. They're like, oh, every time I do it, it's just, you know, but
[00:24:38] Yeah, this is not what you say before you start on a live coding thing where you're like, I've had pretty good luck with this so far, you know, famous last words. But no, I think...
[00:24:48] I think even when stuff doesn't work, you learn stuff. So as long as everyone's enjoying this and
[00:24:53] you know,
[00:24:54] engaging the chat, having fun. I think we'll have a good time today.
[00:24:58] All right.
[00:25:00] um,  uh,
[00:25:02] Ooh.
[00:25:02] Thank you, HackPiro, for prime sub.  Yeah, I'm getting the hang of switching back and forth  because those subs come in kind of ninja on the side.
[00:25:15] Thank you.
[00:25:16] Okay, so yeah, we're building frameworks.  I don't, funnily enough, I actually had a lot of fun.  If you want to see me build a framework,  like this is going to be like a couple little things  to kind of massage it into like,
[00:25:29] where I
[00:25:30] a zone that I know like
[00:25:32] works.
[00:25:33] But if you haven't seen it yet, I had a stream a while ago on what I call Petite Solid.
[00:25:39] which is building Alpine.js or PetitVue on stream,
[00:25:44] And we actually successfully made the framework
[00:25:48] All the pieces we had, I was able to just drop that into JS Framework benchmark after the stream and benchmark it, and it was actually decently good.
[00:25:56] And we did this by like...
[00:25:58] hand, if you really want to understand, like, hey, I'm just going to build a framework today from nothing with reactivity.
[00:26:04] I think it's a good stream because we basically build the templating, we build every piece  we need in order to actually get it to work. What kind of logic goes into making a for-loop?  And all this stuff. Today, for that kind of stuff, I'm going to be mostly copying, pasting,  and just swapping view for pre-act kind of stuff. Whereas in that stream, we actually
[00:26:24] built
[00:26:25] it from like pure fundamentals.
[00:26:28] Also one of my least watched streams. So I mean, maybe that says something as well, right?
[00:26:33] But I mean, who knows? My least watched streams seem to be about React server components. So
[00:26:41] you know,
[00:26:42] I guess it varies, right?  Um...
[00:26:45] I do a stream about Next where I spent the whole stream replacing
[00:26:50] links with links with anchors in it
[00:26:52] And the stream actually did really well.  I did a bunch of streams about React Server components,  and no one cared six months, a year ago.  I wonder if that'll change now after the next announcement,  but it's funny.
[00:27:04] Anyway...
[00:27:05] get back to it.
[00:27:08] Yes, I do have Italian origins. My grandfather,
[00:27:14] I guess he was still born in Italy.
[00:27:18] Uh,
[00:27:18] from like a
[00:27:20] from
[00:27:21] northern, north, I guess northeast side, I guess, like outside of Venice.
[00:27:29] A little ways.
[00:27:33] So yeah, last name is Italian, but it's been watered down for a couple generations.
[00:27:41] Thank you.
[00:27:41] Yeah, we have a few Italians in here it looks like.
[00:27:46] All right.
[00:27:48] Yeah
[00:27:50] where to start yeah so let's look at the anatomy of the source folder okay whoa
[00:27:55] Viewers just jumped up. Did something happen on Twitch?
[00:27:57] This is like the...  Nope, nothing happened on Twitch.  Okay.  Okay.
[00:28:00] - Thank you.
[00:28:01] Just people joining...
[00:28:02] organically.
[00:28:03] It's the best kind of joining. Okay. So where, where, where, where, where are we going here? Um,
[00:28:08] Okay, so here's a light over a project, okay?
[00:28:11] First of all, there's an index TS, which serves very little else than exporting a bunch of stuff that we need.  If you look...
[00:28:19] Most of the
[00:28:21] exports are from something called client
[00:28:23] and something called lib.
[00:28:25] Okay.
[00:28:26] And then we also have the JSX export. And the JSX export is...
[00:28:30] basically the copy of whatever is latest from
[00:28:35] from DOM Expressions Library.
[00:28:41] and,  uh,
[00:28:42] essentially,
[00:28:45] We have an H and an HTML.  I'm gonna start with these ones because they're very simple.  These are also entry points, kinda like indexes.
[00:28:52] Because all they do is, for...
[00:28:54] The H version and the HTML version, I don't do the code splitting.  You're not like, I built these not for people who are actually using build tools, because  in my opinion, the developer experience is just...
[00:29:05] so much dramatically worse.  But for people who do node code  and just want to run...
[00:29:10] this reactive library and like a code pen off a CDN. So like,
[00:29:14] code splitting is not happening for you anyway.  But you can see the underlying library, HyperDOM expressions,  and you'll see the same kind of entries in solid itself.
[00:29:24] basically do like create hyperscript
[00:29:26] passing a bunch of helper functions that are exported from index.
[00:29:32] and then re-export it.
[00:29:34] HTML is the same thing, it just requires a lot more helpers.
[00:29:38] The hyperscript one is almost simplistic, is the best way I can put it. It's not very--
[00:29:45] you do most of the stuff in the open. You're the one responsible for making sure everything's reactive.  This is not as much helpers. The HTML one is basically like a crippled version of Solid's JSX compiler.
[00:29:57] crippled in that it can't analyze the whole
[00:30:00] It can only analyze the static parts.
[00:30:02] But it does.
[00:30:04] do a lot more like,  you know,
[00:30:06] automate
[00:30:08] some of these other things that need to happen.
[00:30:12] Bye.
[00:30:13] This isn't too important, but I just want to show essentially how we create the other specialized runtimes.  What you'll notice here though is that essentially the core runtime is smaller. If you want to use Hyperscript,
[00:30:25] or
[00:30:26] HTML templating, you're actually making your bundle size larger. Not only because you're giving up tree shaking, but because we need
[00:30:36] more runtime to support those where the compiler can just shortcut that and doesn't need any runtime for that aspect.  The compiler needs very little runtime.
[00:30:45] So, you know, this is one of the things I always struggle with, the H and HTML ones.  It's like, yeah, sure, you can put in a code pen, but, like,
[00:30:51] It's not going to be like, I don't know if it's going to be your main approach here because it's just like harder to use, bigger, slower. It's just like worse than every possible way. So I'm one of the most. It's funny. Sometimes I ship stuff with solid and I or with my libraries and I like speak very negatively about it and people like, why do you ship it? It's like,
[00:31:11] There's going to be a use case and
[00:31:15] If someone tries to go do this themselves, they're probably going to have a much harder time.
[00:31:19] than me doing it. And I still see value in these things. I just,
[00:31:24] It's
[00:31:24] If you have the option
[00:31:26] use the build step.
[00:31:28] unquestionably
[00:31:30] Anyway, so that's these ones in the index.  So these are kind of the entry of points.
[00:31:36] Um,
[00:31:39] And then this is the GSX.  So that leaves us with
[00:31:46] client, lib, and core.  And you might be going, okay, well, what's...
[00:31:50] We saw from our index that there was this
[00:31:53] lib and client. So the reason I broke it up this way is that client is actually just a re-export of DOM expressions, which might be like, this is kind of weird the way that you're including the project like this. But the reason we had to do it is because
[00:32:09] We're doing some fancy stuff where we're recompiling symbols, like doing aliasing of symbols inside DOM expressions.
[00:32:18] to replace your stuff
[00:32:19] like the reactive framework you're using,  and then we're just re-exporting it.  This is how we get the tree shaking.  Instead of doing a wrapper function,  we're actually compiling...
[00:32:28] the library by replacing stuff from the source code and DOM expressions.  But I still needed to kind of like,
[00:32:34] have it in a place where I can reference it.
[00:32:38] And same with the types.  So these generally get copied in from...
[00:32:43] the build process, but I copied from view, so they were like already sitting there.
[00:32:47] And that just leaves us with...
[00:32:49] Two files left.
[00:32:51] Do you ask me if there's any...
[00:32:53] questions so far, though I really haven't shown much. It's still just technical stuff, you know, kind of as a preamble.
[00:33:02] Yeah, that's a good question.
[00:33:06] Good primer from the basics standpoint.  Uh...
[00:33:11] Because I talk about them in a lot of my articles, and sometimes in my intro to SSR articles I talk about these, but I don't think they're talked about in...
[00:33:21] I still kind of...
[00:33:23] Don't give them the most basic treatment.
[00:33:25] give them the treatment in the context that I'm talking about.  I wouldn't be surprised if something like patterns.dev
[00:33:33] Talk about this a lot.
[00:33:35] For people here in the stream who just want to get an idea, if you're not as familiar with these terms that I'm throwing around...
[00:33:42] Code splitting is the process of taking a single bundle and splitting into multiple bundles.  And you're like, okay, well, it's a little bit more complicated than that.  But like, what's the point?  Well, sometimes you don't need to load all the JavaScript at once.  So the most common use of code splitting is splitting between pages.  What makes things complicated is...
[00:34:00] What if both
[00:34:02] pieces or if you have like 10 pages, all use the same code.  You don't want to duplicate that code in all 10 pages.
[00:34:10] Some things do matter that they're singletons and whatnot. So essentially what you end up with is shared chunks or vendor chunks, right? I mean, this might be worth...
[00:34:22] visualizing for two seconds here, but, you know, this is the chart I didn't publish.  Someone was suggesting that we merge Svelte and Solid.
[00:34:32] and
[00:34:33] Um...
[00:34:33] Yeah, maybe we'll talk about that later.  And I was going to like, I don't know.  I don't...
[00:34:39] I don't think Solid and Svelte have a ton in common, actually.  Uh...
[00:34:44] So, anyway.
[00:34:46] That's why frameworks aren't all the same framework. But yeah, so you start with
[00:34:52] bundle...
[00:34:53] This is your app at the beginning, and you're like, okay,
[00:34:57] And inside your app, conceptually, you have
[00:35:00] pieces, right? Like,
[00:35:02] Um...
[00:35:06] How do I want to draw this, right?
[00:35:09] You have a bunch of these...
[00:35:11] ones. I'm just...
[00:35:14] do...
[00:35:15] I'm just gonna copy a few of these. Let's pretend we have
[00:35:19] Page one through four.
[00:35:21] These could be components, it could be whatever the hell we want. So let's just do this. Let's go one
[00:35:29] to
[00:35:32] three
[00:35:33] And I'm sorry for anyone who's new to my stream, we get sidetracked all the freaking time.
[00:35:38] because learning is important.
[00:35:42] So
[00:35:44] And the fun part is...
[00:35:48] Um,
[00:35:50] There might also be some...
[00:35:53] Should I use different shapes? Let's see, maybe
[00:35:58] Some circles. Yeah, let's do some circles.  Some pieces like this.  CV...
[00:36:04] Right?
[00:36:06] and
[00:36:08] What ends up happening in our pool of our app that's full of a bunch of stuff, you're going to...
[00:36:14] Let's label these.
[00:36:15] Okay.
[00:36:16] a
[00:36:18] Mm-hmm.
[00:36:19] The...
[00:36:21] C
[00:36:23] And D. Okay, sweet.  And then, like, I mean, things get a little fun because sometimes, like, you'll have situations where...
[00:36:31] One depends on A and B.
[00:36:34] B.
[00:36:35] And then...
[00:36:36] Two just depends on
[00:36:38] B
[00:36:40] and
[00:36:40] 3 depends on C.
[00:36:44] and 4 depends on D. But as it turns out,
[00:36:49] um,
[00:36:50] D also depends on C.
[00:36:52] and
[00:36:54] Um,
[00:36:56] Actually, let's make this one D also depend.
[00:36:59] on
[00:37:00] be. These are real
[00:37:04] dependency graph kind of problems.  So the problem is if I conceptually pull one out  and two and three, four,  so like we're in a new world  where we're essentially...
[00:37:15] uh,
[00:37:16] I...
[00:37:19] This is always the fun part with this.
[00:37:21] Kind of like--
[00:37:26] Can I select these without the other ones? Yeah, can I do this? Yeah, sweet. So if now these are the top level things,
[00:37:34] And they're out here?
[00:37:37] With code splitting, the whole thing is like you'd go, okay...
[00:37:40] A...
[00:37:42] is like a bundle A over here and there's different ways you can do this
[00:37:46] But, okay, A...
[00:37:49] Like you kind of look at the shared dependencies, it might be like,
[00:37:52] depending on how many things they're used on, you might put a few things together and be like, okay,
[00:37:57] Like since
[00:37:58] Um...
[00:38:03] like,
[00:38:04] B is used by almost everyone.
[00:38:07] I'm going to
[00:38:09] I'm going to like...
[00:38:11] Yeah, you might do like you don't want too many chunks, but you might like let's make a few of these one two three  Let's see what's going here like since
[00:38:20] D relies on C. You could see how there's different combinations of things you might want to do. You might be like,
[00:38:27] Like you can't actually, in this case, compress any of these into one, two, three, four.
[00:38:32] very easily because of the fact that they're needed in other things.  Because D depends on C, you can't just pull C into 3  because otherwise you'd load all of 3.
[00:38:41] And you end up with this kind of terrible mess.
[00:38:44] Um,
[00:38:46] So like
[00:38:48] One strategy that you might do, sorry, I'm going to change my thing,  is just literally look at everything that's shared and just go like,
[00:38:54] like
[00:38:56] This sucker here is the--
[00:38:59] the vendor chunk.
[00:39:01] This is very common back in the day, which is the good old A
[00:39:05] B, C, D.
[00:39:07] Like...
[00:39:08] You might just do this, right? But alternatively,
[00:39:12] you might just go, okay, I'm going to package C and D together, and then I'm going to package B, and then we package A.
[00:39:19] So you might
[00:39:21] And
[00:39:23] Because
[00:39:25] yeah so what did I say
[00:39:27] I went...
[00:39:30] There I go.
[00:39:31] A
[00:39:33] And under this actually A,
[00:39:36] isn't used by anyone else so actually we don't need a sorry we're gonna stick a
[00:39:40] in here.
[00:39:41] Actually
[00:39:42] Yeah, I did draw it this way for a reason.  We're actually going to do this.
[00:39:48] I'm going to go...
[00:39:50] A.
[00:39:53] A is actually going to go inside one.
[00:39:55] because we can keep these together.
[00:39:57] Thank you.
[00:39:58] We're going to make a B.
[00:40:00] out here
[00:40:04] Alright.
[00:40:06] V
[00:40:07] And then...
[00:40:10] Like...
[00:40:12] There are different strategies.  I'm not going to pretend like I know exactly what gets done for you.
[00:40:17] in all cases, but something like this is not unreasonable, where you would go, "Okay, so you
[00:40:23] depend on this
[00:40:25] You depend on this.
[00:40:28] You depend on this.
[00:40:30] And you two
[00:40:32] Git.
[00:40:34] these two.
[00:40:36] Right? Like something like this. And
[00:40:39] Essentially, even though you made four logical splits...
[00:40:43] you actually end up with six chunks.
[00:40:46] Okay?
[00:40:47] the there there is
[00:40:51] You might go, "Oh no, I actually want them all together."  So you'll only make five chunks, but then you'll be loading code that's not needed if you only go to page
[00:40:58] for or something, right? But essentially, your bundler is doing this kind of stuff for you. That is
[00:41:04] code splitting in a nutshell.
[00:41:07] Does that make sense so far?
[00:41:09] Okay?
[00:41:10] We good on code splitting?
[00:41:15] you
[00:41:16] Alright, I'm just catching up with chat here.
[00:41:19] um,
[00:41:20] Okay.  Okay.
[00:41:21] uh yeah anything else going on any new subs coming in
[00:41:27] Thank you, Fisher0055 for the tier one sub. And, uh,
[00:41:32] Yeah, how are we doing?
[00:41:34] Author I also am reminded at this point to tell people to press like on the YouTube video and
[00:41:39] Apparently this is something that one has to do to get views.  I'm taking this straight out of other streamers' playbooks, but...
[00:41:46] If you haven't yet, press the like button.  Thank you.  It helps me a lot.  All right.  So let's keep on going.  Okay.
[00:41:53] What do we call this one? This one's called
[00:41:57] code splitting, all right?
[00:42:00] code splitting.
[00:42:05] You're a machine.
[00:42:08] Awesome.  Okay.  And the other question was tree shaking.  Tree shaking...
[00:42:14] is
[00:42:15] Thank you.
[00:42:17] Not too bad.
[00:42:18] But I mean, I wonder if I need a Scaladraw for this one,  because tree shaking is actually something that's
[00:42:23] relatively visible to see when you look at a package.
[00:42:27] because all tree shaking does...
[00:42:31] at its core is... See, you export a whole bunch of stuff here, you know, like all of these...
[00:42:36] these things, it's like our index file, we export a whole bunch of symbols,
[00:42:42] and you can export star, but you export a whole bunch of things. All
[00:42:47] The core of tree shaking is, is if your app only imports certain symbols and you set your modules being side effect free,
[00:42:54] then it knows that
[00:42:56] The code.
[00:42:57] not related to those
[00:42:58] symbols just goes away. So like
[00:43:01] For example,
[00:43:02] if
[00:43:03] I don't know why this would happen, but let's say I export Cray component in Solid, but you don't use a component in your app. You literally just...
[00:43:10] Um,
[00:43:12] top level pass in a function that renders a div.
[00:43:14] like a counter app and you never actually create a JSX component.  Well, then that because the compiler won't actually import that statement,
[00:43:23] that
[00:43:24] function never needs to be bundled with your code.
[00:43:27] I don't think I need to visualize this one. It literally, symbol not imported drops off. The part that gets really cool with tree shaking, which I showed way back in a long stream long ago, I'd have a hard time finding it myself, is that bundlers can do more than tree shaking. They can do something called dead code elimination.
[00:43:44] So if they can see stuff that can be statically analyzed, that can actually run like...
[00:43:49] Bye.
[00:43:50] Pretend you have, like, it doesn't matter, but like pretend you have like, for some reason you have a constant like,
[00:43:56] is server equals false somewhere, right?
[00:44:00] And then somewhere in your code, you have some functions like
[00:44:04] do
[00:44:04] Do stuff right? Okay. We're doing some stuff and then in here you're like oh
[00:44:09] If is server...
[00:44:12] -
[00:44:15] you know,
[00:44:16] return
[00:44:17] else
[00:44:18] I'll make it if else to make it really clear, but usually I write code differently than that.
[00:44:23] which actually funnily enough, Primogen noticed in his weird code analyzer thing. But it's like,
[00:44:30] server stuff
[00:44:33] Client stuff. This is actually a really cool demo to show on rollups repl, but I'm not going to do that right now because I'll get too distracted. But what I want to say is like if you have a constant, you can kind of tell this as
[00:44:46] The bundler is smart enough to be like, okay, is server false?
[00:44:51] Okay.
[00:44:52] Shoo!
[00:44:54] Like, it'll just, like...
[00:44:56] even in the middle of one of your components,
[00:44:59] It will...
[00:45:00] Do that.
[00:45:01] But what gets interesting is...
[00:45:05] If you have tree shaking,
[00:45:07] Obviously, this can never change, right?  But...
[00:45:11] But...
[00:45:12] And...
[00:45:13] like there's no code here when you analyze the bundle  to know this could ever change.  But pretend you had something like,
[00:45:18] something like this, like enable server or something, right?
[00:45:24] And then it's like is server equals true.  Okay.  Okay.
[00:45:29] *sigh*
[00:45:30] Because of how smart tree shaking is, if you never import enabled server, it's impossible for is server to ever become true.  So the bundler still just goes, zhuk.
[00:45:41] Right?
[00:45:43] but
[00:45:45] If you do import EnableServer,
[00:45:48] then it ships both sets of code because both values are doing it.  So based on tree shaking, it can actually be smart enough to rewrite your code
[00:45:57] based on these feature checks. I use this inside Solid all the time. This is why if you make Hello World, you don't get transitions and suspense shipped, even though that stuff weaves through the core of Solid's stuff.
[00:46:11] That's why the bundle size is way smaller than bundle phobia will tell you because the combination of using tree shaking with  dead code elimination is super powerful and
[00:46:22] Obviously for isServer this is kind of a bad example because what we do with Solve is we have two different run times and
[00:46:27] like separate JS files that we send, and we just set it to false and true in those. So then in your code, you get this thing because basically, is server is never going to change. Like when you're running in the browser, is server is false. If you're running the client, or sorry, if you're running on the server, is server is true, that never changes. And the code splitting just works. But I wanted to show this like dynamic aspect of it to that leverages tree shaking.
[00:46:49] Super powerful.  Anyways.
[00:46:51] Anyway...
[00:46:53] um yes functional over imperative yes oop is traditionally very hard to treat shaken dead  code eliminate in the same way stuff like inheritance pretty much makes it like uh  like not a thing it's much much harder that's why frameworks like angular have actually done like a  lot of really interesting optimizations and stuff on top of the normal bundlers to try and get
[00:47:12] it there because they know based on the way, say, Angular works with classes, that it's  safe to do certain things and you can eliminate that code. But for the most part, when we're
[00:47:24] bundler stuff like roll up or Tursor and all these things. It's those kind of rules, which lend much more to functional programming patterns.
[00:47:34] Okay.
[00:47:35] whirlwind there.  We got sidetracked.
[00:47:41] All right, I'm just catching up here.
[00:47:44] Oh, so much chatting going on in the chat.  See, luckily it's not too fast.  I can actually scroll back and see what people haven't seen yet.
[00:47:56] Yeah, okay, I want to understand this whole
[00:47:58] import chunking caching.  There's incremental builds.  There's lots of different ways  you can break up this work and get  better dev...
[00:48:07] stuff in certain situations and
[00:48:11] I don't know.
[00:48:12] Caching is such a funny thing because caching is like the last layer. It's like, okay, we've made things as fast as possible.
[00:48:19] And
[00:48:21] It's probably pretty good, but in a couple of cases, it's not good enough.  We're going to cash.  That's the way I look at caching.  Caching is not like a...
[00:48:26] performance like
[00:48:28] Winner thing.  If you show...  Like, showing performance wins off caching benefits is kind of like...
[00:48:35] I don't know.  Like, it's...
[00:48:37] I mean, it's a thing, but it's also like caching is tricky, but it's tricky in a complex manual sense.  So I guess if you make that easier for the developer, it's worth pointing out, but it's also kind of like...
[00:48:51] It's less interesting to me than the algorithmic sense of it.  Like, how do you make something actually faster?
[00:48:56] Um,
[00:48:58] Caching is like a whole other layer of problem.
[00:49:01] uh...
[00:49:02] Thank you.
[00:49:05] All right, here we go.
[00:49:07] Gotta have a command for your channel. Yeah, I don't know anything.
[00:49:11] people sharing links.
[00:49:13] that I'm not going to click on, "Astro's favorite JSX framework author."
[00:49:18] Are you guys talking about me?
[00:49:20] Thank you.
[00:49:21] Um,
[00:49:23] - Okay.
[00:49:24] Just catching up.  All right.
[00:49:27] I tried to remove two bundles in solid in my last stream and I failed.
[00:49:31] Um...
[00:49:32] I'm not sure what that is. "Any link between TSC type checking of JSX return type and bundler dead code elimination?" Not in anything that I know of. I mean, TypeScript
[00:49:44] Dead code eliminates their types.
[00:49:46] which gets us into trouble sometimes, like with JSX, where if we're using variables in a certain way that they don't recognize, that's why like solid's directives are problematic. But I don't think they do much else beyond that.
[00:50:02] Oh, Astros on YouTube?
[00:50:04] That's awesome.
[00:50:06] You guys should check that out.
[00:50:11] I'm not gonna lie, I don't even know what the title means.
[00:50:14] Okay. Okay. I did cover this a little bit earlier on, but high level is
[00:50:20] reactive systems
[00:50:23] are a powerful enough change system in themselves, like Preact has released something called Signals, that it's possible to make
[00:50:29] a framework,
[00:50:30] that doesn't use a virtual DOM,
[00:50:32] purely off this reactivity. That's what Solid does, SolidJS, the framework I wrote. And I was  like, okay, well, can we take Preact signals and make a SolidJS out of it? That's the question  here. But the tricky part is this takes a lot of prior knowledge to get there. So people ask  questions along the way and we all learn together. So that's what's going on here.
[00:50:55] Okay.
[00:50:57] Yeah.
[00:50:58] *sniff*
[00:50:59] Pick a Rick demo.  Yeah.  Are we baiting Rick rolls now?  You guys just want me to click on links and get some...
[00:51:07] what is it?  Sean Astin.  Anyways.  All right,  here we go.  Uh,
[00:51:14] Yeah, where's everyone going here?  Also, thank you for tier one sub Eureka.dev.
[00:51:21] hopefully I don't miss anyone this is why like actual real streamers have like
[00:51:26] dashboards and stuff. They've set stuff up. I'm just like,
[00:51:30] Trying to backtrack through my own chat. Okay, cool. So,
[00:51:34] - Okay.
[00:51:34] We were getting somewhere, weren't we? We were getting to a point. Sorry, just going to slide this off, make sure I didn't mess with anything. Although I can tell by the beautiful green bar on the side, but this is how much I distrust tooling. Okay, so
[00:51:47] We're showing the exports talking about tree shaking, code splitting.
[00:51:50] and
[00:51:52] we narrowed it down that this client I told you is basically what the DOM expression codes exports, and that's why we export star, which leaves us only with
[00:52:03] Lib and core
[00:52:04] And
[00:52:05] Lib.
[00:52:06] is probably where we're going to do most of our work today lib  is where we actually implement all the code and it's about
[00:52:13] I don't know, 300 some odd lines of code  to get the specific implementation.  And the key part is,
[00:52:19] core
[00:52:20] exports from lib the specific stuff that Dom expression needs needs in order to
[00:52:29] the specific like
[00:52:30] web package, like in solid.js-web, the specific package for the compiler
[00:52:36] Um
[00:52:37] which I end up just wrapping all into the same thing for these simple builds.
[00:52:42] essentially is this extra export for core.  So yes, this is a very strange and convoluted setup,  but this is what's going to allow us to really just focus on implementing these functions from lib  in order to create our custom function.
[00:52:57] renderer that works like solid with Preact.
[00:53:04] Am I allowed to Theo post in here?
[00:53:07] Not sure what that means, but probably yes.
[00:53:12] Use solid astronauts. It's good for your health. Yes. Sorry. I didn't, I didn't highlight the right tweet. Probably. Yes. But you know, we'll see. Um,
[00:53:22] Yeah, a lot of a lot of Astro people around here. We got fuzzy and Astro and I
[00:53:27] I thought I saw someone else a little earlier.  Anyways.
[00:53:31] All right. Let's get started.
[00:53:38] This might actually be
[00:53:39] shorter than we think, but probably not.  Probably we're gonna break stuff,  and then we're gonna be like, oh damn.  Okay, so first thing is,
[00:53:46] We need to
[00:53:48] get our
[00:53:50] reactive stuff in from Preact that we're going to need. Luckily for us Preact has so few exports that this is going to be actually probably a lot easier than what we're doing here.
[00:54:00] So we...
[00:54:01] I'm usually that for reference for a second, but we need to import
[00:54:05] from
[00:54:08] that PreactSignalsCore is we need a few things.  We're gonna need, looks like we're gonna need effect
[00:54:14] And we're going to do it as...
[00:54:16] P effect, just not to confuse because we're going to need to make our own effect.
[00:54:20] We need computed.
[00:54:23] Stop is...
[00:54:25] When is it computed?
[00:54:27] Yeah, that's fine. Don't worry about that. Stop is a views way of doing untrack.
[00:54:32] and pause tracking reset, no, stop is release.  Let me look at, let's look back at a reference, um,
[00:54:39] testing pre-axing those.
[00:54:41] they don't have anything specific to wrap, so they just call
[00:54:44] disposed so that's going to be a difference that we're gonna have to
[00:54:48] We're going to have to account for. Okay.
[00:54:52] let's get back here okay so
[00:54:54] Don't have stop.
[00:54:56] shallow ref. So we need...
[00:54:58] signal.
[00:55:00] is essentially that. We're just going to call it, I think it's
[00:55:03] That's
[00:55:04] Pre-ax equivalent, they call their signals shallow ref.
[00:55:08] And then there's some type stuff here. Is there capital signal as a type?
[00:55:13] Oh, there is. Look, this is just...
[00:55:15] Straight for straight. Okay, so...
[00:55:18] Now,
[00:55:19] We need to do some stuff. Okay, so
[00:55:23] First thing, I've got some types here for the context API.  We want our reactive system still to have a context API.  I think we can keep this shape.  This will teach you a bit about solid while we go too,  because the trick to these reactive renderers is they actually use the reactive system as the context system.  They actually look up something I call the ownership graph.
[00:55:43] free activity.
[00:55:50] Solid is discussed a lot in love in the rest community. It is awesome. Yeah, I talked about this a bit last week. I'm very stoked about what the rest community has been doing because do you know what happened?
[00:56:03] So Rust community comes out and they're like, yeah, we're going to make some Wasm libraries and we're going to like, you know, make UI things and, you know, Rust is fast. And we know it won't be as fast as like the JS stuff to begin with, but, you know, because of like the DOM bridge and stuff.
[00:56:19] But people started making libraries. But what did they do? They went and they looked at React and they're like, "Yeah, React's a good UI library." They all made React clones in Rust.
[00:56:27] And then the performance was like,
[00:56:28] Yeah, and everyone's like, okay, well...
[00:56:31] I guess Wasm is just not good enough for rendering the DOM.
[00:56:35] But you guys found solid, starting with Sycamore, and then a few others the last year or two.
[00:56:41] And we're now talking about a very different story where...
[00:56:45] Yeah, sure, load time, maybe I don't want my e-commerce site to use Rust framework for rendering to get my fastest page load times.
[00:56:58] for rendering and updates, like, you know,
[00:57:01] Yeah.
[00:57:02] The performance is really up there, and I think a lot of that came from
[00:57:06] There's a lot of...
[00:57:08] Communication overhead is what kills Wasm more than anything. And when we keep things nice and tight, so to speak,
[00:57:16] We can get better performance today.  So, I don't know, maybe a Wasm...
[00:57:22] uh,
[00:57:24] VDOM library that's fast  will be a thing in the...
[00:57:28] in the future, but right now it looks like if you want to get speed out of your Wasm UI frameworks, you're going to build it basically like solid.  And what's interesting to me about that is Wasm often gets compared to web workers.  So I'm wondering if this means that some of the things that people have found prohibitive in the past about web workers to do UI and those kind of things,
[00:57:49] are actually just because they all tried to use VDOMs.
[00:57:53] I don't know. That's not something that I'm going to personally look into. I'm pushing envelope in other places, but just food for thought. Maybe the problem is starting with the wrong base assumption.
[00:58:10] a resumable Rust framework.  I mean, that's an interesting...
[00:58:15] prospect, Michael.  Because...
[00:58:18] One of the reasons that...
[00:58:20] We are using JavaScript everywhere.
[00:58:24] is because
[00:58:26] you need in the browser.  So in a sense,  and we need,  it's a purely compile time
[00:58:31] approach can't get us 100% of the way there if we want to optimize for these cases like hydration stuff. It's way easier
[00:58:40] to run both sides if you're using JavaScript, which is why I've been saying for a while that like, I'm sorry, people who like other back end languages, if you want the best performing site,
[00:58:49] you want to use JavaScript. It just seems kind of weird because you're like, well, we know it's slower on the server, but the impact of the network costs and the client costs, which are like not in your control.
[00:59:00] Oh.
[00:59:01] orders of magnitude more impactful
[00:59:05] than your server costs generally.  And your server costs...
[00:59:09] often can be solved by,
[00:59:11] with
[00:59:12] Scaling.
[00:59:13] uh,
[00:59:14] Sorry, the horizontal scaling.
[00:59:17] Like...
[00:59:19] Basically, there's solutions to those problems, but a much harder solution to people having slow devices and networks.
[00:59:26] But,
[00:59:27] If WASM is possible and the pieces get small enough, it's interesting.  I don't know.  I guess the load-up time is still going to be the hit, but it is interesting, right?  Because this is a thinking or a place where you might want to...
[00:59:42] think if the traditional thought trade-offs become less relevant.
[00:59:47] Anyway.
[00:59:53] That's awesome.  Yeah, I'm...
[00:59:55] people keep on trying to convince me to learn Rust. I'm just like an old
[01:00:00] JavaScript old man so like I do it might not be able to teach dogs new tricks so to speak
[01:00:17] Yeah.
[01:00:19] Yeah.
[01:00:20] Yeah, yeah.  Like, there's a huge...
[01:00:24] bundling
[01:00:25] and
[01:00:26] Yeah, like...
[01:00:29] That being said, I think there's different ways to do resumability, and I think there's
[01:00:34] I think...
[01:00:35] Things aren't.
[01:00:37] I hung out with Michiko Hevery creator quick,  like pretty much all week.  Maybe we'll talk about that later,  but,  um,
[01:00:45] a lot of idea bouncing back and forth.
[01:00:48] And as usual with me, when when
[01:00:51] that happens.
[01:00:52] I usually see more opportunities rather than less. It's not about doors closing about doors opening new ways things are possible and
[01:01:00] Yeah, we'll talk about that later.
[01:01:03] Okay, so where was I?  Okay, so there's a couple types here.  It's important to know that context basically gets...
[01:01:10] jumped onto it. But the biggest thing
[01:01:13] that you're going to see
[01:01:15] in...
[01:01:17] Thank you.
[01:01:18] Thank you.
[01:01:19] a reactive render like this that isn't in almost any reactive libraries except for like Solid or SJS,
[01:01:26] or like newer ones.
[01:01:27] that have been
[01:01:28] learning from solid things like bobe or what whatnot is that in
[01:01:32] there's no concept of ownership in,
[01:01:35] in the reactivity system.  And some people who've come in more recently  have, like, this has been, like,  a surprise to them, because, like,
[01:01:44] Like,
[01:01:45] This is such a core part of how solid works and like how this kind of renders works, but most reactive systems don't actually have ownership. View actually added something.
[01:01:52] for kind of ownership, like effect, I can't remember,  it's called effect blocks or something,  like some kind of like root block type thing.  But,
[01:02:03] Even at the time that I made this review, they didn't have it. So it's not very common pattern.
[01:02:09] so
[01:02:12] I'm...
[01:02:16] I'm basically
[01:02:19] gonna have to make this system on top of the current reactive system for this all the work  that's that's the crux of it you should join
[01:02:27] in on prime teaching theo rust yeah i mean if they'll have me i'm sure i'd consider it um
[01:02:36] But okay, so...
[01:02:41] That's the main thing we're going to accomplish here.  We're going to fake the ownership system that Solid has.
[01:02:47] with
[01:02:48] on the other reactive library.
[01:02:50] One thing that we learned in our investigation at Preact, though, was that Preact doesn't have an untrack function, doesn't have a way to do this untrack, other than like...
[01:02:59] like a sample per observable.  That is not going to work for us conceptually.  Like, like,
[01:03:05] We're going to have to
[01:03:07] pray like this is the one piece that's missing um
[01:03:10] And again, I understand why
[01:03:13] It's missing people...
[01:03:16] On track?
[01:03:17] in a reactive library.
[01:03:19] is like not putting...
[01:03:21] choosing not to include something in the dependency array in React.  ESLint is going to shout at you.
[01:03:27] But sometimes it's exactly what you want to do.
[01:03:31] And it's very important when you have nesting and stuff like functional programming patterns.  Like you have to think about something like if you make a map function,
[01:03:39] Do you want any downstream subscriptions to actually trigger the whole map to calculate, or do you want to handle independently?
[01:03:46] Untrack is very important when you start trying to apply Lodash or RxJS patterns to signals. It's essential.
[01:03:54] but
[01:03:55] even very well-versed
[01:03:59] Thank you.
[01:04:00] Framework authors
[01:04:01] probably haven't gone down that path. Someone was trying to convince them to add on track to view reactivity and Evan was just like, no.
[01:04:08] Like straight up no.  And like...
[01:04:13] They gave low-lying primitives, which are error-prone perhaps, to allow me to do it at least.  But there's a certain thinking like it opens up a door for things that can not track and not be explainable to people.  The problem is sometimes...
[01:04:28] At the call point, you can't possibly know what needs to track or not on track.  You know, like on is not sufficient.  You know, like watch is not sufficient.  So...
[01:04:39] Yeah, me as a purist, that's kind of not acceptable, but...
[01:04:45] You know what?
[01:04:46] We're going to see how far we can go without untracked today, because I think the only place that's going to bite us is on array loops.
[01:04:54] So we're just going to
[01:04:55] do this. Untrack is just going to be a no-op. Essentially, we're just going to go untrack,  call the function you pass to it.
[01:05:01] If you aren't familiar with on track,
[01:05:03] or anyone, essentially it gets used like this.  You go on track and then you go,
[01:05:06] Like...
[01:05:08] you have a signal in here. I'm going to use pre-access stuff. Let's say on track,
[01:05:13] Um...
[01:05:15] What am I going to do? Count.
[01:05:18] don't count dot value,
[01:05:21] Um...
[01:05:22] Plus plus.
[01:05:24] right and now when you access count dot value
[01:05:27] it's not going to track it.
[01:05:30] You can also do
[01:05:32] this obviously right you can also go
[01:05:34] value or count.peak or something in pre-act syntax.  But the problem is untrack lets you like untrack the whole block.  It acts as both a peak and,
[01:05:44] And it acts like a...
[01:05:47] like a
[01:05:49] like a whole block type thing. So peak is not sufficient replacement for untrack.
[01:05:56] All right.
[01:06:04] Right. The reason the deparray causes problems in React is because it's like the default. Like you have to be like, I'm coming in and I need to think deparray. Whereas reactivity kind of reverses it where it's like, okay, you come in, don't worry about it, it'll work.
[01:06:17] Until you want to go, okay, I want to do something a little fancier.
[01:06:21] So like the need for considering dependencies and updates doesn't,
[01:06:26] It's like inversed. It's analogous to the way, say, mechanical and electrical
[01:06:32] engineering or systems are.  They have the same kind of
[01:06:36] concepts, but in a slightly different way.  There's a direct correspondence between how something is React or how it is in a reactive  library, but it's just a little bit different.
[01:06:48] I think like this is probably the challenge with hooks, right?  Because now suddenly people, everyone has to be aware of the dependencies and like think  like that.  Where in reactivity, it's more like lazy or like, okay, don't worry, just like,
[01:06:58] as you write, know that it'll track and be dependent. But if you don't want it to, you need a little bit of extra consideration. So I mean, that can trap you in a different way. There is considerations there. I actually think React's design is right for React. I think it's very weird.
[01:07:11] to remove the dependency arrays from React.  Because React runs top down.  So, when you get somewhere,  you should be asking the question,  hey, did something change?
[01:07:21] What is it? It's a question you ask like this. It's different with a reactive library where the hooks change, the function, they're self-contained. There isn't this top-down flow to it.
[01:07:34] And this is the actual challenge with a React compiler.  Like, if you...
[01:07:38] Suddenly go, okay, yeah, we'll compile away the dependency rates.  Just don't worry about it.  Like, well...
[01:07:43] You can't think about it
[01:07:45] top down in the same way or not as easily as
[01:07:48] Like you're looking at the expressions and you're like, does this run or does it not run?
[01:07:52] I don't...
[01:07:54] No, especially if you don't have...
[01:07:56] primitives for state that make it clear that you're tracking. I think it becomes a messy zone like
[01:08:03] I don't know. We'll have to see about it. I mean, it works for Svelte, but Svelte teaches you conceptually a different model. You're not going dun, dun, dun, dun, dun, running through this code top-down imperative style like you do in React.
[01:08:14] Maybe React will teach people a different model, but in actuality, it's not that model.  So I think that that's a bit of a mind warp.
[01:08:23] - Yeah.
[01:08:27] - Oh.
[01:08:28] Well, I will say that reactive systems tend to over-memorize.
[01:08:32] People over memoize with the depo array because yeah, like they're like, okay, I'm just gonna lazy. I'm just gonna make sure I put everything in it. Like, make me a, make me an ESLint rule that automatically adds all the dependencies like that kind of thing or like a compile thing. Like if you're gone, if you got into the that point.
[01:08:50] then you got to start questioning things.  But yeah,
[01:08:53] I think actually reactive systems are more guilty of over-memorization because they just do it automatically.  I think this is one of the biggest things I've been trying to kill with solid is get people away from over-memorization.  I'm just like, yeah, just call it a function.  Just do like, you don't have to get so ceremonious.  This is one of the problems I have with dot value because some of the people are looking for dot values.  Like they're looking for computeds.  Not everything, or like say like pre-act signal style where you're like, if you want to make that expression still only fine-grained update, you have to pass the signal all the way through.
[01:09:22] Like not the value, but the signal.  And then if there's an expression there,  you actually have to wrap it in a computer,  otherwise you don't get the advantage.  And quicks like this too, actually, now that I think about it,  but they don't have derivations yet.
[01:09:33] So they just--
[01:09:34] Plain
[01:09:35] de-opt if you don't
[01:09:36] pass a straight signal through.
[01:09:39] Essentially, like...
[01:09:42] This is...
[01:09:44] This is...
[01:09:44] Awkward.
[01:09:46] I'm...
[01:09:47] In my opinion...
[01:09:49] people will realize this. See, the reason Vue gets around this a little bit is because they're not trying to do these kind of like little micro optimizations like Preact or Quaker doing here. They literally just like optimize their VDOM to kind of be like, I'm a VDOM that continues, considers signals and like they do different sorts of optimizations. But like this, like,
[01:10:07] very specific, like if I'm precisely signal optimization, combined with the mutable dot value thing creates this
[01:10:15] Over-memorization...
[01:10:17] Problem anyway
[01:10:27] Yeah, I thought about this. I could export my own signal. And if I need to do this, we will do this. But the problem is then you'll have to use this library signal, right? Essentially, what we do here is we put a global on track and then a global track. And then every time we call...
[01:10:42] our dot value getter from our signal, then we call peak instead. If we need to go there,  we'll go there. This is a very good suggestion though, Brendan.
[01:10:54] Oh yeah, someone wants the link to the one where I actually kind of built... I built it from  solids reactivity, but let's see if we can find this on YouTube right now. It should be
[01:11:06] What is it called? Petite solid?
[01:11:09] Something like this.
[01:11:10] Here it is. Petite salt. Let's build a micro view library. This stream
[01:11:14] is  let's get rid of that time stamp
[01:11:19] is just like
[01:11:20] purely like just thinking through the
[01:11:23] Oh, sorry, let's just share, actually. I was like taking away the short URL. Let's post this in both places.
[01:11:31] Thank you.
[01:11:33] Alright, there we go.
[01:11:38] Okay, cool cool. All right, hopefully that came in both places you guys can all see this and
[01:11:43] And I hopefully haven't missed any fiber. Oh, okay. Yeah. We Fisher over there. We already caught that sub.
[01:11:49] I hopefully haven't missed anything else in chat.
[01:11:53] All right.
[01:11:54] Cool. All right.
[01:11:56] let's keep on going.  Okay, so...
[01:11:59] So
[01:12:00] Why am I not seeing anything? Because I distracted myself. Okay.
[01:12:06] Let's uh...
[01:12:07] Let's do this. Okay. So yeah. Anyways, as I was saying with, uh,
[01:12:14] with with Brendan that I think that's a good approach and we might need to go  there if we need to for now let's focus on we'll just leave untrack is like a  no op essentially or what's it called idipotent function which like literally  you pass the function it calls the function and move forward okay global  context global context is
[01:12:34] Um...
[01:12:36] uh what we got here this is this is going to be our fake for our root and the reason we have roots  is in solid and render is like solid you don't have to worry about nesting effect disposal we  register them so when you create an effect it goes hey is there a parent if there's a parent  register me with your parent so that when the parent reruns we unregister them this gets rid  of all the nastiness because in most reactive libraries if you need to dispose an effect or
[01:13:06] I did that for a very long time, and SJS is what opened up my mind to it.  So we're going to create something called a root function.  And what the root function does is it sets the global context,  which is a list of disposables, and then whatever the owner is, is basically...
[01:13:22] the existing global context.
[01:13:24] That's the idea. And then
[01:13:28] You see we're using on track all over the place. So that's why I'm like trying to like I'm hoping that we don't have to do too much here and
[01:13:35] This is making sure that, see, here's an example, right? It's possible
[01:13:40] that um...
[01:13:41] If someone calls a dispose in a tracking context and actually subscribes to the things, like if someone's like...
[01:13:48] reading reactive values inside, um, a dispose function that could cause like re-renders and  stuff. So, um,
[01:13:56] Let's just be optimistic that this will work and keep on going.  So what this return here is basically...
[01:14:04] a function which
[01:14:05] Um,
[01:14:06] disposes, uh,
[01:14:09] Basically, it takes the root function you pass in.  This is the same syntax that solid has.  It calls a function with a dispose function.
[01:14:17] So it's actually the roots
[01:14:18] first argument is a function you call with dispose. So when you use root, it looks kind of like this. It's like root
[01:14:25] um...
[01:14:27] people don't use this API on Solve very often,  but it's the core, like our render functions call it.  You get this.
[01:14:32] So this,
[01:14:33] I know this seems weird.
[01:14:34] but a little bit, but there's a reason for this.  It's because root actually returns
[01:14:39] back the value like div or whatever, it returns that back out. So use dispose to actually dispose the root. So that's what function you're actually seeing here. It's actually this function here goes to the list of disposals that are on the global context and iterates and goes like, let's call them all, right, and then free up the list. Okay.
[01:15:00] Cleanup, similarly,
[01:15:03] is like on cleanup in solid, which is it registers a function, looks for the global context currently and pushes
[01:15:10] that function onto the cleanup. So this is how you register cleanups.
[01:15:16] question in chat do we have a
[01:15:20] uh...
[01:15:24] Yeah, I can't get into this right now. How hard is the modifier to pass components across the worker boundary? Probably
[01:15:30] Probably hard.
[01:15:32] I haven't looked into it.
[01:15:39] Thoughts on new devs, learning patterns in Vanilla.js? I mean, I use Vanilla sometimes as a teaching tool. I think it's not a new dev thing. I think it's like a when I'm ready kind of thing. I think it's like learn basic JavaScript, learn the framework abstraction, then...
[01:15:57] then learn what goes underneath the framework abstraction.  That's when you come back to me, essentially.  That's what I do.  I lift the...
[01:16:05] the hood or so.
[01:16:09] - Thank you.
[01:16:10] Okay, so...
[01:16:13] Cleanup looks good, it looks like it should just work.  What is effect?  Well, effect, if you look at it,  it is actually creating another one of these contexts,
[01:16:20] And then it's also setting up a cleanup function
[01:16:24] And then stop C.  So we don't have stop in this.  I think our C is just going to...
[01:16:29] from Preact is just a function.
[01:16:31] so
[01:16:32] I know, why did I call it C? I'm not sure why I called it C. I called it because it's the computation. But in our new thing, I'm just going to call this dispose.
[01:16:41] and we're gonna go, if it's the final,  we're gonna call dispose, okay?
[01:16:45] And what is dispose?
[01:16:46] Well...
[01:16:48] It's what we get back from
[01:16:49] our effect.
[01:16:52] or
[01:16:52] P effect, I'm going to call it.
[01:16:55] dispose.
[01:16:57] Which means I need to...
[01:16:59] Where the hell did...
[01:17:02] C come from anyways. Like I was defining C somewhere, wasn't I? Oh yeah. Sorry.  Huh. Other thing you gotta get used to. This is why Primogen, um,
[01:17:11] Sid, my code is really compact. I wrote this years ago. I'm a CoffeeScript dev.
[01:17:17] So you're probably going what's on this is comma operator separated.  So what you're actually seeing is these are all declarations const,
[01:17:25] this const cleanup function const dispose.
[01:17:29] I apologize for people about clarity here.  I just really hate declaring variables.
[01:17:35] I don't mind anymore, but it used to bug me.
[01:17:38] So, um,
[01:17:40] this kind of thing. But what's interesting is it leads to code that is more declarative.
[01:17:47] you kind of like see the declarations.  And then this is the only code that actually runs
[01:17:51] when
[01:17:53] when you create the effect essentially, which is funny.  I mean, technically this runs too, right?  So you create the pre-act effect,
[01:18:02] Thank you.
[01:18:03] which I'm going to explain in a second here,  which calls our cleanup function,
[01:18:07] Right.  Which cleans up our, like...
[01:18:10] Basically, we need to mirror the normal process.  If you've seen a reactive library,  every time it runs, it cleans out its dependencies,  then it executes the code periodically
[01:18:18] tracking the new dependencies.
[01:18:20] Right. And
[01:18:22] it kind of pushes itself on the stack and pops itself off at the end, so to speak. So what we have to
[01:18:27] because we're creating our own owner tree, we're creating a separate tree beside it.  We actually have to do a similar thing where we clean up
[01:18:34] the previous
[01:18:35] Um,
[01:18:36] nested
[01:18:37] FX?
[01:18:40] push ourselves onto the stack essentially become the global context run our function and
[01:18:44] and then go back to the previous owner, right?
[01:18:47] - Thank you.
[01:18:48] So,
[01:18:49] Hopefully that makes sense if you've seen it in my intro to reactive stuff.  But essentially, we're mirroring the reactive execution flow,  this time for not handling dependencies, but for handling...
[01:19:00] nested computations that we're tracking.
[01:19:08] I'm not sure what makes sense, but I'm hoping something makes sense.
[01:19:13] So then all we do also is because we created this thing,
[01:19:18] and this dispose handling, we actually have to register with our parents. So this cleanup is actually calling
[01:19:23] the parent cleanup and going,  Hey,  we're,
[01:19:25] When you clean up, you have to clean me up as well.  So we've kind of wired up the whole
[01:19:31] the whole, like...
[01:19:34] disposal things automatically.  So, like...
[01:19:37] Although Preact, you have to manage your disposal yourself, we're building it into this global system.  Making progress. What's next?
[01:19:47] All right.
[01:19:48] - Thank you.
[01:19:49] And how's Twitch doing? I guess that's the real question.
[01:19:52] Twitch is doing good.
[01:19:55] Thank you.
[01:19:56] Thank you.
[01:19:56] How's YouTube doing? Looks like most of you are still there in YouTube. It's like a
[01:20:03] it's like twice as many people watch on youtube compared to what watch on twitch but if you're in  youtube you know
[01:20:09] Always give the thumbs up.
[01:20:11] But yeah, no, this is better.  My restrooms have had more people on Twitch, which is cool.  Okay.
[01:20:17] -
[01:20:18] Alright, so here we go.
[01:20:20] What else do we need?  We need our, I call it a memo, but it's a computed memo.
[01:20:25] And luckily for us,
[01:20:27] Um,
[01:20:28] Thank you.
[01:20:29] This old signature doesn't really matter that much in the future, but I'm going to keep it for now.
[01:20:33] Pre-act's
[01:20:35] Um...
[01:20:36] computers actually work exactly the way we want them to
[01:20:40] Interestingly enough, like,
[01:20:43] Some systems don't, so I actually had to
[01:20:46] But the problem is we need to use our effect, that's why.
[01:20:49] Because we need to use our effect, this gets a little bit fun. So actually what we're going to do is this is going to become
[01:20:55] signal.
[01:20:56] Thank you.
[01:20:57] that untracks this function, unfortunately.
[01:21:00] Um,
[01:21:01] Thank you.
[01:21:03] *laughs*
[01:21:04] to get their initial value.
[01:21:06] And then...
[01:21:09] Creates
[01:21:11] The...
[01:21:14] yeah see this this is an interesting choice here because
[01:21:17] The effect will run immediately. Sometimes we need to do this because some systems defer their effects, which is why there's a song and dance. Like I would love
[01:21:25] to, like, we can test this later.  Like...
[01:21:28] can we remove and just run the effect immediately and then
[01:21:33] not have to call the function twice.
[01:21:36] Because...
[01:21:38] Sometimes this is a problem because some systems effects are scheduled and if they're scheduled, then you can read an undefined before you get to it.
[01:21:48] So this is something we're going to have to--
[01:21:50] Actually, you know what? We're gonna...
[01:21:53] We're going to assume that Preact
[01:21:55] is synchronous because it's not like view.
[01:21:59] I'm gonna
[01:22:01] I'm gonna put a little note here. Do we need
[01:22:03] Blank.
[01:22:04] Because if we don't,
[01:22:07] Thank you.
[01:22:12] I'm gonna like
[01:22:13] just force it like it's because essentially what's gonna happen is we're gonna create a signal
[01:22:18] And then immediately...
[01:22:20] run the effect to get the first value.
[01:22:26] And it's unfortunate that we have to do it this way.
[01:22:31] we need to get our cleanup to work properly with our memos as well.
[01:22:39] Yeah.
[01:22:40] Thank you.
[01:22:40] But pre-act, exactly.  Well, this one won't be lazy.
[01:22:45] -
[01:22:46] Right?
[01:22:47] Because we need it for the rendering.
[01:22:51] Yeah, well...
[01:22:53] We need it for the memory.  If the end user never uses this, and this is just the compiler, you have to remember,  we're making these functions for the compiler.  Yeah.
[01:22:59] That's perfectly fine.
[01:23:02] You can still use your lazy computeds with...
[01:23:05] um,  preact for your end user code.  We just need this for the compiler.  Um,
[01:23:09] Okay.
[01:23:12] It looks like we can create a selector too.  This will be important for getting high scores  on the JS framework benchmark.
[01:23:19] But...
[01:23:21] All right, so we have a...
[01:23:23] Let's see if we can just...  If Preact and...
[01:23:28] And, uh...
[01:23:30] Um...
[01:23:32] View are very similar as much as I think they are.
[01:23:36] Um...
[01:23:37] I think it wants Undefined.
[01:23:40] As you
[01:23:41] Um, then...
[01:23:44] Then we're actually in like an
[01:23:47] pretty decent
[01:23:49] place here because you might be going, okay, what's create selector, right?  There's a lot of code here. This is probably one of the most
[01:23:59] complicated, not complicated, but like most like
[01:24:02] abstract pieces here. It's essentially, it really bugged me.
[01:24:06] that in reactive libraries,
[01:24:10] Especially like...
[01:24:12] if you've ever had this problem where you can't put
[01:24:15] You don't want to put the UI state on the model. What I mean by that is pretend you have a list of, I don't know, users and there's like is selected. You don't want to put is selected on the user model because you might use that user model in like 10 places in your app.
[01:24:28] So you need a way of taking a list of selected users and
[01:24:33] sorry, a list of users and a list of selected user IDs and combine them.  And the problem is, traditionally, this effort always involves...
[01:24:40] full...
[01:24:41] iteration because like if the selection changes you don't know which rows change and like it gets very uh
[01:24:47] it's not granular, like essentially you have to rerun the list. I hate rerunning the list. So I came up with a mechanism for kind of reverse mapping it to almost like create signals essentially
[01:24:59] on the model without the model actually getting dirty,  dirty by it.  It's like a temporary mapping of signals.  And that's what this thing is.  It's kind of complicated because it can be subscribed to multiple places,  but ultimately what you end up with is something kind of cool where you can  go like,
[01:25:13] is selected.
[01:25:16] Create selector...
[01:25:18] from
[01:25:19] you know,
[01:25:20] your selection and this is single select you can also do multi-select with an argument  but essentially then you can go like
[01:25:26] or create selector, sorry.
[01:25:28] And then you can do stuff like is selected...
[01:25:31] And then like pass in like, I don't know,
[01:25:33] some ID.
[01:25:34] and
[01:25:36] what this does is it kind of like,
[01:25:39] has a behind the scenes mapping to other signals
[01:25:42] So that it can pinpoint like whatever, wherever you call this expression, it can pinpoint update that expression instead of rerunning the list.
[01:25:48] This is one of the tricks to how Solid is so fast for the JS Framework benchmark and all my libraries are and whatnot.
[01:25:55] It's just a very useful
[01:25:58] primitive, and it has a lot in common with the problem with, like, Redux selectors. Like, essentially, like, the reason why...
[01:26:06] not just Redux, but the reason why
[01:26:09] like even recoil and stuff a lot of these libraries have been trying to
[01:26:12] find ways to get optimal notification of things when they're updating a list.  Because the selectors generally need to run against the whole list.  This is a way of doing optimized...
[01:26:23] Um,
[01:26:24] fine grain selection.
[01:26:27] Thank you.
[01:26:31] It is not. I've wanted this since my knockout days. I hit this problem all the time. It's cool with reactivity, you can actually solve it better.
[01:26:39] I mean, if you think about it, it makes sense.  Like, if you had...
[01:26:42] Like...
[01:26:42] I mean, I'm just speaking here, but like, if you had like a data object, right?  Like, and you're like, you're like, okay, let's...
[01:26:49] you know, like ID
[01:26:51] Name...
[01:26:53] I'm just putting some fields on a list of users or whatever address.  I don't really care.  If you think about it,
[01:27:03] If you have...
[01:27:04] this kind of data object and you're like,
[01:27:06] I'm not going to be able to do that.
[01:27:09] Let's pretend now there's an is selected on it.  I'm just going to put the inverse in here.
[01:27:15] If you've got
[01:27:20] a VDOM library or something. Let's just pretend. And you got your big immutable data structure and then you go
[01:27:26] Okay, see even with it on the item, what ends up happening is you go and you're like, okay, I need to select, this one was selected to begin with, so let's make this true.
[01:27:35] And this one was...
[01:27:36] false and now I want to swap these. What you're going to do
[01:27:40] is you're actually going to clone this object
[01:27:43] Clone this object.
[01:27:45] and just change the value on them when you clone them. When it comes back, it'll be like a cloned version with selected true and a cloned version selected false. And because these objects
[01:27:53] are not
[01:27:55] you know, different.  You have this ID, thank God,  because now you can key your map,  you know, use the key property in React.  But you still have to run the reconciler  to like go each row, go...
[01:28:06] you know, is this the same item?
[01:28:09] you know, like with the ID key.
[01:28:11] And that way we don't recreate all the DOM nodes, but then you still have to dig deeper in and go, okay, is this selected true or false?
[01:28:19] What's really cool with a reactive system is if this is a signal essentially,
[01:28:25] You can just update the one place and not run the list reconciler.
[01:28:28] So, like...
[01:28:29] There's two stages of why this is kind of optimal for reactive libraries.  Both you can save on the reconciliation cost.
[01:28:36] and
[01:28:37] Um, with this trick, you don't even have to put on the model.  So I think this is a real use case.  Um, I use this trick when I like, um,
[01:28:45] more manually back when I used to build apps, I built like a deal on data grids, not data grids, but I did a lot of image grids. Sorry, rather, because I worked on like private social media, kind of like an Instagram or Twitter.
[01:28:57] yeah, Instagram, Facebook for, for schools. And, um,
[01:29:02] That's where I hit this the most.
[01:29:05] Amen.
[01:29:06] The big reason I was happy to add it to solid was this is generalizable because you can do single select, multi-select.  You can provide your own comparator function to do this stuff.  Once I hit that point, I was like, yeah, okay, this is not a benchmark hack anymore.  You can literally use this pattern to...
[01:29:25] do whatever with it, right? It's completely generalizable.
[01:29:32] - Thank you.
[01:29:38] like view or used to have a special set in my forever the big thing is even if you has the granular updates
[01:29:44] they like they still it's gonna be challenging for them not to rerun their v-dom
[01:29:50] like they've done actually a really good job optimizing.  So I can't say like in all cases,  this is true,  but generally speaking,  view is still going to like,
[01:29:57] back away from that and go, oh, components
[01:30:00] And updated it's still very component model V Dom thinking. And that's what we're not building today. We're building a fine grained renderer that only updates what needs to be updated.
[01:30:09] Oh.
[01:30:18] Cool. It's a lot of re-render and re-trigger.  Yeah, like there are other use cases here.  Um,
[01:30:25] Thank you.
[01:30:27] Thank you.
[01:30:28] Alright, so how are we doing Twitch?
[01:30:31] How are we doing YouTube?
[01:30:32] All right.
[01:30:34] We're still going, okay, cool.  So check this out.  So let's keep on going.  Okay, so this is Create Selector.  I'm not gonna go too deep into what it's doing,  but it's basically just like,
[01:30:42] Inverses the pattern because it adds the signals on and then like
[01:30:45] triggers them essentially with this for loop.
[01:30:49] subs.get is there's like a map in here and
[01:30:54] think
[01:30:55] I think this is all good.  It's funny, you don't see very much value,  but here it is dot value, dot value.  So there it's doing the read.  Okay, let's keep on going.  Create component.
[01:31:04] another place we use on track.
[01:31:07] This protects us. See,
[01:31:09] What I'm getting at is
[01:31:10] Ultimately, I might need to solve this, but I don't think I need to solve this to make a benchmark.
[01:31:16] But you can see...
[01:31:18] If you've ever wondered, this function is the same in solid.
[01:31:21] Create component in solid, like when you make a component and compile it, it literally just calls on track. Like that's all there is to it because
[01:31:29] If you get a JSX expression like this,
[01:31:35] Right? Like...
[01:31:36] Let's pretend it's like, I don't even care what it is.  Let's do this.  And someone's got some logic like
[01:31:44] I'm going to use pre-accents attack since we're here, but like count.value
[01:31:50] Um...
[01:31:50] bigger than five...
[01:31:53] and whatever, like, draw my component.
[01:31:56] Right.
[01:31:58] The problem is
[01:32:00] If you don't untrack,
[01:32:02] and someone just top level in your component
[01:32:05] Um...
[01:32:06] access to some reactive variable, like maybe they accidentally destructure or something.
[01:32:12] I had a choice to solve it. People talk about, oh man, I can't destructure.  I can make it so your component re-renders on destructure.
[01:32:19] You know, like...
[01:32:21] It's just like not what you actually ever want ever pretty much.  So that's why we put the untrack in because look,  this,  my comp,
[01:32:30] You see this is a create component call.  It's essentially just my comp.  There's no...
[01:32:36] It's just like calling a function here.  So if you think about it,
[01:32:39] this is still an accessor. This is essentially a signal from our perspective. So it would track every access inside if we didn't untrack.
[01:32:48] Untracked gives us a stable starting ground again, which means including if you defined my comp,
[01:32:57] as like
[01:32:59] something that's like this,  like,  uh,
[01:33:02] you know,
[01:33:03] Let's destructure something. I don't know.
[01:33:06] children or something.
[01:33:09] Like...
[01:33:10] So
[01:33:10] And then this here...
[01:33:12] Solids compiler makes it like get children.
[01:33:16] This is how we work for reactivity. We wrap it in a getter so it's lazy.
[01:33:21] This destructure,
[01:33:24] happening here would actually get tracked with the parent expression.
[01:33:29] So it actually rerun this whole thing, re-render all the components internals, recreate everything, recreate the DOM nodes and do everything just because of this destructure.
[01:33:38] So,
[01:33:39] Running without on track is a little bit dangerous.
[01:33:43] but
[01:33:44] We'll be smart enough in the examples we make today not to get ourselves in that trouble. But untrack is very, very, very, very important.
[01:33:58] Okay
[01:33:59] Okay, so question is, is this Pre-XSignals core code you're modifying or solid core?  It's neither.  Solid is based on a framework agnostic library called DOM expressions that I showed a little  bit earlier in the stream.
[01:34:12] What it does is it compile. It's this library here and it lets you basically make your own reactive render like solid and
[01:34:21] I'm taking Preact core and trying working it into a project.  I just ported the view version.  I've done this before with view.
[01:34:28] I guess it's worth showing people
[01:34:31] People might be interested, but like...
[01:34:34] So
[01:34:35] uh,
[01:34:36] Let me see here.
[01:34:39] uh...
[01:34:42] to pinch
[01:34:43] Come on, where are we? Here we are.
[01:34:45] Open.
[01:34:46] Many of my libraries are actually in the JS framework benchmark.  You might have seen some of them.
[01:34:52] MobX JSX
[01:34:54] view RxJSX
[01:34:57] Let's put vanilla in.
[01:35:00] And
[01:35:01] So, like, this is...
[01:35:02] This is what we're doing today because...
[01:35:05] Just kind of give you a little idea.  What else is there? Knockout JSX.
[01:35:10] Knock on, knock on, knock on.
[01:35:11] Where are you, knockout?
[01:35:13] knockout GSX
[01:35:15] Let's put solid in here too, why not?
[01:35:17] Where is it? Solid... solid...
[01:35:20] Yes, okay.
[01:35:22] What I want to kind of show is that
[01:35:25] Um...
[01:35:28] Like...
[01:35:29] These versions of the renderers
[01:35:33] that aren't using their actual framework
[01:35:36] are much faster than the framework. If I just pull out the reactive system and build
[01:35:42] build something like Solids approach with it, we way outperform the original framework that are using like VDOMs and stuff.
[01:35:51] Right.
[01:35:51] This is very different than, say, taking Preact signals and putting it in Preact.
[01:35:56] doesn't have nearly as meaningful of an improvement.  It's like very small where this,  my hunch is,  and this is why we're doing preact is that,
[01:36:05] If we do this with Preact, it's actually going to get, will be way up here, essentially, like somewhere around where viewRx is.
[01:36:12] So that's kind of why we're building this out, because basically you eliminate the VDOM, and you eliminate a whole kind of order of
[01:36:20] and it'd be interesting to see what the memory usage is like.  I'm just very curious about Preact signals in general.
[01:36:31] Yeah, yeah. Untrack does a lot of things. Untrack is super, super important.
[01:36:41] Uh, yeah. Okay. You want to understand why this is lazy? Uh, let's, let's.
[01:36:45] Good question. This is solid fundamentals, so I think I want to show it just so that people understand here.
[01:36:51] Okay.
[01:36:51] If I make an object,
[01:36:54] There is something called you can have a property here like I don't know what we can call it.
[01:37:01] prop whatever equals five, right?
[01:37:04] And
[01:37:06] If I do object.prop
[01:37:09] you know,
[01:37:10] whatever we'll just
[01:37:12] console.log
[01:37:15] whatever, okay, we get our four down here or whatever.  Let's see, my screen big enough, good.  Okay, but the thing is, on objects,  you can also define getters,
[01:37:24] And you can go like get
[01:37:26] count or something. What's cool now is it's a function. If we get count,
[01:37:32] and we go console.log
[01:37:35] Hello.
[01:37:37] -
[01:37:38] return
[01:37:40] Five. I don't really care what it is. Essentially...
[01:37:43] like you're not going to see this hello right now.  It doesn't happen until we actually access it.  Basically, even though it looks like you're accessing...
[01:37:50] an object
[01:37:51] you're actually calling a function.  See, look, now it's four, hello five.
[01:37:56] It actually calls this as a function.  And this is a secret for reactivity, because reactivity, everything has to be a function.  So we can use getters to make it lazy on axis.  This is how we make sure that we can define an object here that's just an object, whatever.
[01:38:10] pass it around and it, and then you don't, you don't actually track reactivity, but
[01:38:14] until you're in effect.  Down here, you're like...
[01:38:17] Pretend like in here, instead of five, it's like
[01:38:20] Some like
[01:38:21] signal or something that you're
[01:38:23] that you're accessing.
[01:38:25] Now.
[01:38:27] we can pass the prop object around,
[01:38:30] And then here, you know, like pretend that's your component props.
[01:38:33] we can
[01:38:34] Now call the function under the effects so it auto tracks.
[01:38:38] So this is...
[01:38:41] This is what I mean when I say lazy.
[01:38:45] right? It's essentially, you can turn any
[01:38:50] thing that looks like a property into a function, essentially. It's
[01:38:56] You might be like, oh, why do this?  Why don't you just leave it a function?  And there's reasons for that, mostly, because
[01:39:02] that
[01:39:03] it can fit,  seem like this is very fixed structure,  right?  Like if I access something that doesn't exist on this,
[01:39:09] well, then it's just undefined.  But proxies, you can actually mutate,  like change what properties are available on the object  kind of dynamically, because you'll just access it  and the proxy will access any property on it.  Like...
[01:39:24] Instead, if we had like const...
[01:39:26] We're gonna...
[01:39:28] - -
[01:39:28] cover this for a second.
[01:39:30] But instead if we had new proxy...
[01:39:34] for our object.
[01:39:36] and we'll put a get method on it.
[01:39:40] Who gets the... was it...
[01:39:43] the object and the
[01:39:45] the property that you access.
[01:39:48] I could do something like this.
[01:39:50] Let's go...
[01:39:51] um
[01:39:52] return
[01:39:54] - Okay.
[01:39:55] Let's just return the property as a string.  Let's just return the name of it.
[01:40:00] What I'm getting at here is if I do that,  now we're console logging prop and count.
[01:40:06] I didn't actually define anything, but this get method intercepts any possible...
[01:40:10] thing on here. So now it's now we're just like returning the name of the property back. And why this is powerful is
[01:40:17] Between these two...
[01:40:19] essentially, you don't always need a proxy, but...
[01:40:25] Um,
[01:40:26] proxies
[01:40:27] allow props to be dynamic, changing over time, even though you don't rerun the function.  So when we do need them, you need to use a proxy. So this allows us
[01:40:35] Like...
[01:40:37] This allows us to basically...
[01:40:40] from the end user point of view, not care whether it's a getter or a proxy, and still have that ability. Because if we made it
[01:40:48] a signal or something like you always had the call as a function you start getting this weird zone  with the proxy because you like you go like
[01:40:54] Does it exist? And then should I call it?
[01:40:57] it doesn't really work.
[01:40:59] So yeah, just another reason why we don't pass signals generally.  I mean, there's already a number of reasons, but it just kind of, this is just another  one to add to the list.
[01:41:09] Hopefully that explanation makes sense.
[01:41:14] Yeah, I mean, most of the time, that's exactly what we do. We don't just return property. We'll like...
[01:41:20] You know, in our example here, you know, the
[01:41:23] if it was prop and it had
[01:41:25] Four, but I...  Like, most of the time, what we'd actually do is, like, reflect it and be, like, object...
[01:41:34] um property or something right and now it's going to return foreign undefined like this is just a  straight pass through but we can do stuff like this in here almost like our original example hello
[01:41:45] Right. And then it's like,
[01:41:47] Hello for hello undefined. So this gives us a lot of
[01:41:50] leeway and
[01:41:52] using
[01:41:53] this syntax lets us unify this world.
[01:41:58] Okay, cool. Yeah.
[01:42:00] Yeah.
[01:42:02] That's awesome. There's a lot of cool stuff you can do with the language.  You know what to do and can leverage it.
[01:42:08] But like for us...
[01:42:10] If you've seen my reactive stuff, this is how you...
[01:42:14] can track stuff. You can be like, "Oh, intercept get, intercept set perhaps." Usually I have reasons I don't like intercepting set and I don't use the normal proxy kind of things.
[01:42:25] a unidirectional flow.
[01:42:27] But...
[01:42:28] You can see the power here. Okay.
[01:42:31] All right, so let's continue on.  Okay, so
[01:42:35] Yeah, just showing you, the reason that we're doing this is, I want to make a Preact signal renderer that's getting close to where solid render is at.  I say getting close because you've seen that I have to do all this specific overheads and stuff. So even if Preact's reactivity for this use case was a performative solid, and I don't believe it is,
[01:42:56] Um,
[01:42:57] It's not getting a fair shot here because I have to add a bunch of features that Preact doesn't have.  So Preact signals don't have.  So this is not like a fair shot.  So it's not about comparing Preact signals to solid.  I don't expect them to be able to compete.  Solid will just be better here.  But just looking at what overhead Preact's VDOM is.
[01:43:19] brings to the game versus just using signals straight. That's more interesting.
[01:43:23] Thank you.
[01:43:25] All right.
[01:43:26] - Yeah.
[01:43:26] All right, so where are we going?
[01:43:31] Okay, so yeah, this is just our component for now. We'll keep on track how it is lazy. Yes, so we want dynamic imports and
[01:43:38] Um,
[01:43:39] I love reactivity for this reason, versus VDOM.
[01:43:44] I feel like I should probably explain this
[01:43:47] Again.
[01:43:48] um
[01:43:51] to you.
[01:43:52] undefined.
[01:43:54] ST
[01:43:55] Whatever. I'm just hijacking TypeScript. It's not going to--
[01:43:59] Uh, fine.
[01:44:03] Yeah, this is probably because my types are actually wrong.
[01:44:06] Because it's
[01:44:08] Whatever. I don't care. I make TypeScript shut up. But, but the thing that people don't always
[01:44:14] realize about reactivity, and maybe this is another good
[01:44:17] thing, sorry, I know it takes me forever to get anywhere, but
[01:44:21] Like...
[01:44:22] The beautiful thing about reactivities being able to start/stop
[01:44:26] Is that like...
[01:44:29] I probably don't make this demo enough for people to get it.
[01:44:33] When I first saw suspense and stuff, I was like, yeah, who cares?  Like, I mean, I got it eventually, right?  But what I wanted to show is like, let's add...
[01:44:43] show. Okay. So we got it.
[01:44:45] I'm going to keep the counter. It doesn't really matter. Um,
[01:44:48] We'll keep that for a second.  But...
[01:44:50] We're not going to use a button for this simple example, but what I'm going to do is I'm going to make a show component and it doesn't really matter what it is. It could be...
[01:44:57] We could use a ternary or something, but the reason I'm going to use show is I'm going to...
[01:45:01] put something like
[01:45:06] Success, right? Whatever. It doesn't really matter what it is.
[01:45:10] Show when
[01:45:12] count, okay?
[01:45:15] Doesn't show it because it counts zero. Okay? And then
[01:45:17] Instead of doing increment, let's do something like
[01:45:20] Set timeout.
[01:45:24] Call this count, count plus one.
[01:45:28] after like two seconds or something.
[01:45:33] Yeah, something like this.
[01:45:35] Okay.
[01:45:36] Thank you.
[01:45:38] Ta-da! I mean, it's not surprising, but the...
[01:45:41] What I wanna stress here is that
[01:45:44] We're going to console log like...
[01:45:46] Run
[01:45:50] You know, and--
[01:45:52] Thank you.
[01:45:53] Like, what do I want to do here?
[01:45:56] Should I do an expression or something? Can I do a self-calling function or something?
[01:46:02] Sometimes funny with JSX specifically, because we don't get to do stuff.
[01:46:11] Let's see if this works, console.log loaded.
[01:46:14] Yeah, okay, there, perfect.
[01:46:17] See, run, loaded.
[01:46:20] What I want to...
[01:46:22] get emphasized here is with the reactive system, you can literally pause and resume anywhere in the in the program. You don't because there's no like VDOM render that's like taking you through the whole thing goes, Oh, after we render this component, it's parents component and does does this like whole thing, like writing a lazy import is like,
[01:46:41] three lines of code. Like I,
[01:46:44] I made this...
[01:46:46] Um,
[01:46:47] I made this, you know,
[01:46:50] because people like having APIs for this stuff, but like literally like
[01:46:54] A lazy component is basically this. You just make this an import and go, "When it's done,  set a signal and then render the thing." And I just wanted to kind of...
[01:47:04] emphasize here, like even this silly expression in here that I'm console logging
[01:47:08] which is like, if you look at it, this is iffy.  I've made a function call...
[01:47:13] that I'm
[01:47:14] calling myself
[01:47:17] It's mostly because, I mean...
[01:47:20] Will this work?
[01:47:23] Like, I don't know if...
[01:47:27] I can't tell fuck it's not a function.
[01:47:31] Oh, yeah, so that works too.  Okay.
[01:47:33] So
[01:47:35] It doesn't really matter.
[01:47:38] But you see it's run, and then
[01:47:40] loaded i never really play with this because this is not an expression technically but i guess it just works you can
[01:47:46] apparently just console login solid wherever,  but you see that delay here.
[01:47:51] It's because it literally stops here and then continues here and
[01:47:55] Mm-hmm.
[01:47:56] like
[01:47:57] there's this is just so directed that like
[01:48:01] The simplicity here is, you know...
[01:48:03] considerable because if we want our framework to have lazy we literally make a signal
[01:48:10] and then on the promise return, set the signal,
[01:48:14] And like,
[01:48:16] There we go. Like...
[01:48:18] We just have it computed here, essentially.  And then I map it.
[01:48:22] to
[01:48:23] a function because just the way a solid or DOM expression works under the hood. But ta-da,  we made a lazy component. Literally, it's like what you'd expect. It's just like a function,  then setSingle.
[01:48:35] you know,
[01:48:37] And obviously, like, that kind of seems obvious that it would be like that, but...
[01:48:41] Try implementing lazy in a VDOM library.
[01:48:44] Because the component reruns and you have to know not to trigger lazy again,
[01:48:47] So there has to be a caching mechanism or something. It's much more complicated.
[01:48:52] But I guess you're going to have to take my word for it.  And then we've got split props and merge props.  I think these will all be easy because they just use objects.  We're not going to touch those.
[01:49:02] Context, context.
[01:49:04] I could explain a bit how context works in one of these systems.
[01:49:10] Mmm.
[01:49:11] Thank you.
[01:49:12] Okay.
[01:49:14] So...
[01:49:15] How's everyone doing? You guys are still with me. Sorry. I know this is heavy. Um,
[01:49:20] But let's go here.  Okay, so we're gonna create a symbol.  Someone asked earlier what a symbol is.
[01:49:27] It's like an identifier. You could think of it kind of like a string, except the idea is that it's like,
[01:49:34] unique
[01:49:35] Like...
[01:49:37] like symbol context not equal symbol context like
[01:49:40] Like each
[01:49:41] it's,
[01:49:42] Yeah.
[01:49:45] But so that's why it has some importance,  because if we can generate the symbol,  like it doesn't matter what we call it, in this case,  it's context.
[01:49:53] Each...
[01:49:54] Every single one of these context symbols that gets created every time we can use context is still just context.
[01:50:00] Um,
[01:50:01] But it's unique from other ones with the same symbol.
[01:50:06] which is just useful for
[01:50:08] patterns like appending like like people use it like the it's used for like iterators like if your thing is iterable have a symbol for iteration it gives a way of doing a lookup against a generic term
[01:50:18] but still lets it be like unique.  There's like symbol.4 and a few other things.
[01:50:24] Not going to get into it too much, but I just...
[01:50:27] We create a symbol and we create a provider.
[01:50:29] And then the whole context trick actually, and this one looks like it doesn't have all the fixes I have in solid.
[01:50:35] unfortunately but not gonna worry about that right now
[01:50:38] Remember this global context we defined earlier that has like owner and stuff and we as we create
[01:50:45] roots, we set the owner as the previous owner. As we create effects, we set the owner as the previous owner. We get this tree, essentially. And whenever we get to a node in the tree, where we need to look up the context, we simply just walk up the tree, we just go, Oh, is there owner owner context owner context has this key.
[01:51:04] Otherwise, you know,
[01:51:07] go up to its owner and look up against its owner in key and just bubbles up.  That's all there is to it. It just looks up this up that global context tree that we created earlier in the stream.
[01:51:20] take my word for it could have been the description of the stream I'm trying my best to explain it
[01:51:27] this stuff. Um,
[01:51:29] I understand there's some magic here. Maybe this is like one of those streams that someone might not get on first pass, but then they come back to it a bit later and they're like, oh, this actually makes sense for me now where I'm at. But hopefully there's some value here.
[01:51:50] All right.
[01:51:53] Just patch globals to add caching.
[01:51:56] I see what you did there.
[01:51:59] - Thank you.
[01:52:01] But I don't think we're going to have any need for the fetch primitive today.
[01:52:04] uh...
[01:52:06] okay resolve children this is for the children helper
[01:52:11] You find it often in React and in different
[01:52:15] frameworks. This looks like actually bigger than the one that I use these days in solid
[01:52:21] But
[01:52:21] Again,
[01:52:25] Undefined...
[01:52:29] Alright.
[01:52:32] Someone fuzzy said that I'm your TypeScript shaman.
[01:52:36] I-I-I can't...
[01:52:38] I think I just can't be bothered with it for certain stuff.  As long as the interface is fine...
[01:52:43] then like
[01:52:44] We'll be okay for now, at least at this stage.
[01:52:48] If I had to worry about TypeScript all the time, I'd never get any code done, like ever.
[01:52:52] Okay, create provider.
[01:52:55] Again, this is
[01:52:56] injecting a custom context and then on the context object. So here we go.
[01:53:01] What this does, the effect actually creates a new context.
[01:53:04] because that's what effects do.
[01:53:06] Oh, crap. This is actually an example of a place where we actually need untracked.
[01:53:14] Do-do-do-do-do.
[01:53:15] Do you all see the problem?
[01:53:19] Because I create an effect.
[01:53:21] for the pure purpose
[01:53:23] of
[01:53:24] injecting a new
[01:53:26] context. And why do I want to inject a new context, create a new owner, separate independent one, is because
[01:53:32] You want to have...
[01:53:35] sibling
[01:53:37] contacts of the same type.
[01:53:39] If you don't create a new nested level, your siblings will write over each other because it's just a key in an object.
[01:53:46] However,
[01:53:50] Hmm.
[01:53:51] Mm-mm-mm-mm-mm...
[01:53:58] Thank you.
[01:54:02] Okay.
[01:54:03] We're going to have to ditch the effect here.
[01:54:06] and create our own thing.  Because the problem is if you put an effect  and you literally render all the children under the effect...
[01:54:15] Bad stuff is going on.
[01:54:17] to happen.
[01:54:20] Um...
[01:54:22] Because...
[01:54:24] Yeah, I'm almost guaranteed this is going to be terribly, terribly bad.
[01:54:28] So we're actually gonna have to change the code here. What we're gonna do is we're gonna manually create the context ourselves and
[01:54:36] *sigh*
[01:54:38] Assume that the provider will be disposed by its parents anyways, which I think is a safe bet. So let's let's look at how we create.
[01:54:44] Let's just look at the effect context creating code.
[01:54:47] This...
[01:54:49] I
[01:54:50] There might be a negative side effect here.
[01:54:53] but I don't think we can get away with untrack here.  I think this is going to be...
[01:54:59] problematic.
[01:55:02] So we want to contacts this disposal context context and in our new contact
[01:55:07] or it's funny to call it context, but it's actually the global thing. Um,
[01:55:14] we actually want
[01:55:15] So let's see what else.
[01:55:17] effect code.
[01:55:21] We want to do here.
[01:55:23] Um...
[01:55:29] We're going to need code that looks essentially like this.
[01:55:34] *Doo doo doo doo doo doo doo*
[01:55:49] I don't know why everything got red all of a sudden, but...
[01:55:54] Yeah, whatever.
[01:55:55] worry about that in a minute okay so instead of on track
[01:56:00] we're gonna
[01:56:02] Oh.
[01:56:04] We can't win, can we?
[01:56:07] Because if someone imports this component reactively...
[01:56:10] It wouldn't be on track either.
[01:56:15] Huh.
[01:56:17] Okay, screw it. We don't use context. We don't use providers in our example. So we're going to leave this as is. But this,
[01:56:25] This is not...
[01:56:27] Good.
[01:56:28] Um...
[01:56:30] Probably less clear for everyone on stream, but...
[01:56:35] This is the danger
[01:56:37] And I'm glad you see it from my perspective and see maybe some of the thought that goes  in here.  This is a danger with fine grainy activity.  Like it's too powerful.
[01:56:45] Like way too powerful.
[01:56:47] And this means like,
[01:56:50] passing values around, tracking stuff anywhere, two-way binding, all that stuff is just like,  you're just like asking to like blow up your app. And that's what happened from 2010 to 2013.  That's why when React came within the flux pattern, people were like so compelled by it. They're just like,  "Oh my god, thank you for getting rid of two-way binding. That's the worst thing ever."
[01:57:10] You fast forward like
[01:57:12] to now, and people are just like, "When?"
[01:57:14] I think I saw Adam Rackets post something about how unidirectional flows is a shitty religion.
[01:57:21] Yeah, yeah. The problem is, it's fine. You can find your constraints in other places. Like in Svelte, for example, I think two-way binding works pretty well in Svelte because, you know, it's not fine-grained. It's not composable.
[01:57:35] But like, or at least with the primitives, like the core primitives, you can use like stores to do some.
[01:57:40] form of composition, but like if you set like VDOM also is another way of setting these constraints. But once you get rid of those like guardrails, which are actually what are slowing you down,
[01:57:52] then there's potential for chaos.
[01:57:55] So,
[01:57:56] Um,
[01:57:57] A lot of work in solids and this kind of rendering was to figure out how to put the guardrails back without the performance overhead.
[01:58:06] so
[01:58:07] Yeah, we're just going to leave this and...
[01:58:10] worry about it later, but let's write a note.
[01:58:13] This might be terrible without...
[01:58:18] Untrack.
[01:58:28] Yeah, yeah, yeah, yeah. Like, I don't expect you. This is why I don't like the Hyperscript or HTML versions of this all because it puts too much on the end user. You need the compiler or the tooling to kind of alleviate some of the...
[01:58:44] like boilerplate, because it's easy to mess up boilerplate, right? Luckily we have tooling for it. See, in a sense,
[01:58:51] And reactivity is too simple.  That's why it's so powerful.  It's literally like, here is an event that triggers when this changes.  But...
[01:58:59] The thing is, if you're wiring this all up yourself, like...
[01:59:02] There's a lot...
[01:59:03] a lot of places that could potentially go wrong. Luckily, the framework
[01:59:08] And the compiler kind of eliminates a good chunk of it.  And I think it's kind of interesting, because think of something that's really, really simple, yet people find really, really hard.
[01:59:19] because of the boilerplate. Redux is a perfect example. People familiar with Redux?
[01:59:24] Um...
[01:59:28] And...
[01:59:29] With Redux...
[01:59:31] Redux is really dirt simple in a sense. You're just like, how hard is it to write state equals function of
[01:59:38] previous state
[01:59:39] And some...
[01:59:41] action payload. It doesn't matter. It's just like any object like to implement Redux.
[01:59:47] Like...
[01:59:49] as a mechanism.
[01:59:50] and then have reducers call reducers.  It takes no code.  There's a joke that in RxJS,  you can implement Redux in one line of code.
[02:00:01] But for people trying to work in Redux classically, the problem was like there's a lot of boilerplate.  So there's reducers and actions and like all these kind of...
[02:00:09] awkward patterns because it's so simple that people are trying to like work around it with async and doing all this kind of stuff and
[02:00:15] you know, it didn't provide a prescribed way, they're just like,
[02:00:17] You know, it's functional composition, just add middleware or whatever.
[02:00:21] sometimes being too simple...
[02:00:24] isn't
[02:00:25] the
[02:00:26] best thing
[02:00:27] even though it's really powerful.  Like I appreciate simpleness rather over like complexity that,  um,
[02:00:34] you know,
[02:00:35] is hard to explain. I'd rather have
[02:00:37] Like...
[02:00:38] I don't mind if something is...
[02:00:40] involved or complicated. Like there's a lot of boilerplate, like there's a lot of reducer code to do, or there's a lot of reactive primitives that you have to define, you know, fine grained.
[02:00:51] It's when...
[02:00:52] there's that like,
[02:00:55] abstraction level that hides
[02:00:58] how it works from you.
[02:00:59] That's where I have more of an issue. So it's very important to me to look at abstractions in a sense of how they can maintain that transparency. So you never feel like you're too far from your skate patches because inevitably you will need to fall into your skate patches. But sometimes, you know, a little tooling.
[02:01:16] can solve the redux problem so to speak and i
[02:01:20] I haven't used Redux Toolkit, but I wouldn't be surprised if that's really what their findings are.
[02:01:27] I am excited about the X-State Redux conversation as well.
[02:01:40] Oh, that's cool. Teach Redux by recreating it. Yeah, yeah, because it is like, very, very simple. But when I tell people that Redux is simple, they like sometimes give me a weird look. It's because like maybe Redux isn't easy, and simple and easy are not the same thing.
[02:01:54] Okay, well, let's keep on going.  Okay, so we got create provider.  Okay.
[02:01:58] Okay, this is probably the last thing and probably the most important thing.
[02:02:03] This is Solid's hyper-optimized reactive map operator. You might have seen this before. It's called
[02:02:10] the for component in solid or map array in solid.
[02:02:13] But not everyone likes that form.  And because...
[02:02:17] I'm making this...
[02:02:18] For Preact, maybe we will keep this as just a map function where you have to pass in
[02:02:23] a
[02:02:24] function over it. See, there's some nice ergonomic gains you get by using components because we can recognize the expression and then you don't have to wrap it. But some people insist on map and I think it'll feel more like preact if
[02:02:34] we use a map function in the JSX because then people, it won't feel like they're like doing solids for loop components and stuff. So,
[02:02:43] Is there any problem here?
[02:02:45] Well...
[02:02:47] Untrack.
[02:02:49] So how do we get around on track?
[02:02:53] This one might actually be okay.
[02:02:55] because we need to track the list whenever the list changes.
[02:02:58] But...
[02:02:59] Top level...
[02:03:01] Like basically all this does of not having untrack here
[02:03:05] because we don't actually hit any of the other signals until we actually run the mapped function.  So as long as someone's not like accessing stuff top level, we're not going to run into trouble.  Basically, as long as you code in the perfect
[02:03:16] prescribed fine grained way you're not going to get hit without the untracked so I think we're going to leave it
[02:03:21] Which means
[02:03:23] I don't know if this...
[02:03:24] explanations worked for everyone.
[02:03:26] But we may have made our first pre-act fine-grained render.  I think we can start trying this.
[02:03:35] One of my transitions solid was not being in first show or four components yet.
[02:03:41] .
[02:03:41] It's funny that they do and they don't. It's funny. The React community is big on this because they needed to differentiate. They're like, we're not a template DSL. We just use JavaScript, blah, blah, blah. But the second you need complicated logic, it's like, we're also very composable and do this.
[02:03:58] Yes, you can use Map.
[02:04:01] But the second you want to share pagination, you're going to make a paginated component. Error boundaries and suspense are kind of like if statements. Don't get me wrong. In React, they're probably much more complicated than that. If you saw the lazy component that we built here.
[02:04:17] You know, you can definitely see that, like when I say something's just an if statement, I literally mean it's just an if statement, but maybe that's a perspective that only comes...
[02:04:26] from
[02:04:27] From doing...
[02:04:30] reactive programming where like you can literally start and stop anywhere in the middle of your tree because you're just like oh
[02:04:35] Is it undefined?
[02:04:36] Or not, you know, like...
[02:04:38] Just rerun with it undefined or not.  Just the one expression.
[02:04:43] But...
[02:04:44] Yeah, it's interesting. The community tend to tell you not, but then they break their own rules, sort of. Like...
[02:04:49] E
[02:04:50] It's like the value of that dot map is a...
[02:04:54] is kind of like a philosophy value. It's like we are just JavaScript.
[02:04:59] But there is an easiness practicality aspect of it where it's like, yeah, but...
[02:05:06] We have components for a reason.
[02:05:11] No, no. Well, that's the thing. We don't need suspense to do lazy components, right? As I showed you, let's just like...
[02:05:16] like
[02:05:16] Suspense
[02:05:18] Like...
[02:05:19] In React, you don't really re-render, so you don't really need suspense for
[02:05:25] in a pure sense. This is where it's called confusion because I like suspense because it  gives us orchestration knowledge and I push people to use suspense. But you can do like
[02:05:34] all the async stuff in a reactive library efficiently without stuff like suspense.  But then again, you can do it with
[02:05:41] react to to a certain degree, right? You can use effect and re-render that component or whatever. It's more efficient in a reactive library, but that's not why people do it. It's for orchestration and other reasons. But yes, this does not have suspense because I have not implemented suspense for these simple side libraries, but one could, but your reactive system would have to
[02:05:59] Probably know about it
[02:06:08] Yeah. But the funny thing about like ternaries over show, and I'm just going to stop on this moment for a minute, is that like...
[02:06:14] - Yeah.
[02:06:15] I feel like you still build layout components.
[02:06:19] And I know there's layouts in the new Next Rudder,  but I don't mean like that.  I mean people build components that kind of like...
[02:06:27] in a way where conditional rendering of children
[02:06:30] is...
[02:06:31] There's a ternary inside the component, but outside you can lay out your layout and then
[02:06:36] parts of that layout to show or display
[02:06:38] based on different criteria inside.  Like, to me, it's like...
[02:06:42] It's like all the same thing, but like...
[02:06:47] It's not the hill to die on, as I said.  I think it's important to say we just use JavaScript.
[02:06:52] But it's like...
[02:06:53] the fact that you call a map function...
[02:06:56] doesn't like...
[02:06:58] doesn't really make it
[02:07:00] like a huge difference.  Like...
[02:07:02] when the map function stops being convenient because you want to make it more optimal,  you stop using map function.  I think it was Adobe that was talking about how they had array functions
[02:07:10] components because
[02:07:12] the map was just inefficient. It's like, why am I remapping all these DOM elements?  They made their own kind of memoized loop.
[02:07:18] Like,
[02:07:19] Map is just like the baseline, but it's never going to be the best line.
[02:07:24] Does that even have sentence? Whatever.
[02:07:29] Yeah, TSX doesn't know how to handle conditional rendering
[02:07:34] children. I'll concede to that, but doing anything for TypeScript's sake is a hard pill to swallow when it stops you from doing incredibly powerful things.
[02:07:46] Okay, so where are we at? We're at a point now where
[02:07:50] We think this probably works, so let's make a few test apps and confirm that.  I guess this is our last chance to change the name. Are we going with PreactRx-JSX?
[02:08:02] Like, is this what we're doing?
[02:08:05] Thank you.
[02:08:06] I don't know. Any comments from the chat here?
[02:08:13] Thank you.
[02:08:14] Give you guys a moment to think about this.
[02:08:18] you
[02:08:20] Ship it.
[02:08:21] Yeah, I mean...
[02:08:25] Watch this already be taken on thing.  Like someone beats us to it because I'm on stream and they're like, ha ha ha.
[02:08:32] Um,
[02:08:33] Uh, yeah.
[02:08:35] And actually, I probably should push up a repo at some point, too.
[02:08:40] For now, we're just going to get on NPM.  Let's...
[02:08:43] I can't remember. Let's npm run build and see if this all builds.
[02:08:46] There's an error.
[02:08:49] No such folder as Preact RSS types
[02:08:55] Why not? That's what we're building.
[02:08:59] Okay.
[02:09:01] so my script okay let's let's where is it where's this types folder it wants it in let's make
[02:09:09] a new folder.
[02:09:11] and call it types. Let's see if it just, like I told you this is going to be a little bit rough.
[02:09:17] Haha!
[02:09:18] It's because my build process is not smart enough to handle the types folder being missing.
[02:09:26] But this looks legit here.
[02:09:31] Thank you.
[02:09:32] Thank you.
[02:09:33] Yeah. I'm just going to keep with the consistent same. I know I asked for name titles and I'm just like dismissing them all, but
[02:09:40] Yeah. Reactics.  Preactics.
[02:09:44] That's fun.
[02:09:46] p react x that's up there's always like this x element to like reactive libraries like
[02:09:53] I feel...  I...  Mobs...
[02:09:56] MobX might have done it first, but there's also RX.  But yeah...
[02:10:02] I don't know if anyone remembers, MobX used to be called Mob-servable.
[02:10:06] Like,
[02:10:07] M.
[02:10:07] I think it was credited at Mendix or something, so it was literally like M observable, mob observable.
[02:10:16] I'm pretty sure this is already a library.
[02:10:20] Thank God.
[02:10:21] *laughs*
[02:10:23] Preact signals meet on track.
[02:10:29] Thank you.
[02:10:31] Thank you.
[02:10:34] Yeah, the JavaScript is just to get around a weird import type thing.
[02:10:39] I'm not the best TypeScript developer. I think anyone who watches this stream understands that.
[02:10:45] Apparently I'm some people's TypeScript hero, but probably because of how, like if TypeScript gets in my way at all, I just like, I'm just like, go away TypeScript.
[02:10:56] Anyway, um...
[02:10:58] So,
[02:10:59] Yeah, let's just ship this.  It looks like the build is good.
[02:11:03] I don't have any tests.
[02:11:07] Oh.
[02:11:08] peer dependencies.
[02:11:10] Let's skip.
[02:11:11] Let's get PREAC signals in there.
[02:11:15] and make it
[02:11:17] I don't know.
[02:11:18] Because they might break stuff on us.  We're going to squiggly it to...
[02:11:22] to this range, like in the 1.2s.  I'm assuming that they're not going to--
[02:11:28] they're not going to break it in the 1.2 range. Okay. So let's just make sure everything is happy.
[02:11:36] What do we get here? Client. This looks believable.
[02:11:40] HD, yeah, looks good. Just looking at the types just to make sure. This is kind of like a sanity check for me. Let's look at the disk folder.
[02:11:56] I don't even know what this is. I don't remember adding this
[02:11:59] hyperscript symbols. I think someone did this in a PR, probably
[02:12:03] Joe
[02:12:03] Joe Pierre
[02:12:04] True Skater.
[02:12:07] All right, template literals looks good.  See, look, this is all the extra code  that template literals needs on top of
[02:12:12] stuff
[02:12:13] to get it working. You save all this by using JSX.
[02:12:17] Hyperscript is an
[02:12:19] as bad
[02:12:27] indexed, and this is our core runtime.
[02:12:31] Thank you.
[02:12:33] Yeah, 800 lines of code.
[02:12:35] Nice. Okay, actually, no, what? We have a problem, actually.
[02:12:39] Do you know what the problem is?
[02:12:40] First of all, this is a problem, cycle detected.  I think what we're missing is we have to tell our rollup config
[02:12:46] to exclude
[02:12:48] Um...
[02:12:50] *sad*
[02:12:52] eternalize stuff from Preact, right? Preact
[02:12:56] signal core we don't actually want it to get pulled in
[02:13:00] I'm glad we inspected this because that would have been nasty.
[02:13:04] Preact Signal Core
[02:13:07] Hopefully I got that right. We'll double check that in a second. But we need to actually
[02:13:12] exclude this
[02:13:14] from the build, 'cause even those sizes seemed a little bit too big.
[02:13:19] Let's try running this again.
[02:13:22] All right.
[02:13:23] Is that better?
[02:13:26] What is this?
[02:13:29] Is this just something Pre-Act does for fun?
[02:13:36] I've never...
[02:13:38] I've never seen this.
[02:13:44] This is...
[02:13:45] What is I...
[02:13:47] Who calls I?
[02:13:51] Like...
[02:13:53] Let's see if I is called from a function anywhere.
[02:13:57] It's like inside this code.
[02:14:01] This is very interesting.
[02:14:06] Yeah, so these all import from index, so I'm not expecting them to be any different some code size. They're like basically just
[02:14:13] straight ports of our TypeScript.  But this one...
[02:14:16] has some code getting added here
[02:14:19] that I am not sure where it is coming from.
[02:14:23] Because what I was expecting...
[02:14:25] is the import statements from Preact,  but they're not getting externalized  the way that I was hoping they were.  Because there should be an import statement
[02:14:34] import
[02:14:38] Let's look.
[02:14:39] There should be an import statement in here because we said in our roll-up, we're like,
[02:14:43] Preact signal core, did I spell it wrong? Should be external and not part of our build
[02:14:49] Preact Signal Core
[02:14:54] Oh, it's Signals Core. Thank you. Thank you, chat.
[02:14:58] Thank you, Chad. I'm just going to double check that. Yes, signals core.
[02:15:01] Thank you.
[02:15:04] Thank you.
[02:15:07] This is Rollup 2. I'm not updating my build tools and take a chance of stuff going wrong.
[02:15:13] There we go, that is better. It's not signal core, it's signals core.
[02:15:21] And just to sanity check, let's make sure I don't have
[02:15:24] Signal core anywhere else, okay.
[02:15:27] Okay, cool.
[02:15:28] Okay, let's build this again.
[02:15:32] Alright, now let's look at our
[02:15:34] dissed.
[02:15:36] Beautiful.
[02:15:39] import from Preact.
[02:15:42] and then our 800 or so lines of code to make this all work.
[02:15:46] All right.
[02:15:50] Alright, so...
[02:15:52] Thank you.
[02:15:54] I think we are now finally good to publish.
[02:15:59] Secretly hoping that I'd debug Rollup3 on stream. Yeah, no, I haven't got the chance to play with it. I'm a huge fan of Rollup in general. It's really smart and really fast. All that cool dead code elimination tree shaking stuff. To my knowledge, from my experience trying different libraries, Rollup does it better than anyone else, better than ESVIL, better than... It's the reason Vite still has Rollup in the thing. It just produces the best bundles.
[02:16:26] It has a really good library.
[02:16:28] um
[02:16:29] It's so funny because when these new build tools come out and everyone's like, it's 10 times faster and all this stuff. And I'm like, yeah, but can it make it a smallest roll up? I'd take a thousand times slower if it can make, if it, you know,
[02:16:40] you know, if it gets Roloff's output versus something else. Like I don't,
[02:16:45] Ultimately,
[02:16:46] yeah build time matters to you as your devs or whatever but
[02:16:50] End user?
[02:16:52] Roll up makes a difference.
[02:16:54] Anyway.
[02:16:56] But as you can tell, I'm kind of allergic to tools.
[02:16:59] So...
[02:17:00] Which is kind of funny.  All right, let's...
[02:17:04] Let's just give this the good old MPM publish.
[02:17:09] - Yeah.
[02:17:11] We'll get there, just not yet. Let's give this the old NPM publish.
[02:17:19] All right.
[02:17:20] Preact-Rx-JSX version 0.01 has been released.
[02:17:27] Let's try one of my, it takes a slightly different config than solid.  So we're going to, what we're going to do is we're going to fork one of my code sandbox demos as our first test.
[02:17:36] to see if, like...
[02:17:38] that this works in like a hello world scenario.
[02:17:43] all repositories, no, where am I? I want my drafts? No, I want my sandboxes.
[02:17:49] MobX demos, let's use view.
[02:17:52] View is probably the
[02:17:55] the most similar.
[02:17:57] And you...
[02:17:58] This is an auto interval counter that counts up.
[02:18:02] Just like...
[02:18:03] the classic one. And this is a good example because as you know, components don't re-render,
[02:18:07] So this is like the classic--
[02:18:10] the classic difference here.
[02:18:12] So let's fork this.
[02:18:16] Thank you.
[02:18:17] Where is it? Fork Sandbox?
[02:18:20] and make a
[02:18:23] Thank you.
[02:18:24] Preact, GSX, counter...
[02:18:29] give the fort because it's no longer for something  and then we're going to get rid of
[02:18:35] these two suckers, and we're going to bring in
[02:18:39] @Preact
[02:18:42] Slash
[02:18:44] um... signals core?
[02:18:48] and
[02:18:50] We're going to bring in...
[02:18:53] pre-act
[02:18:54] Rx
[02:18:56] JSX.
[02:18:58] There is a pre-ex.js, something else, but let's bring in this one.
[02:19:02] No, that is not right.
[02:19:05] You probably just don't have it because it's too new. Let's add it.
[02:19:09] pre-act
[02:19:10] Rx.
[02:19:11] JSX
[02:19:13] version 0.01
[02:19:18] Hopefully it can resolve this.
[02:19:20] Let's see if...
[02:19:23] Thank you.
[02:19:24] Let's see if it's on NPM.
[02:19:25] -
[02:19:27] Preact
[02:19:28] RxJSX.
[02:19:32] I forgot to change the read me.
[02:19:39] We'll get back to the readme. That's funny. I should at least change the title, right?
[02:19:43] But then I have to publish it again. Yeah, we'll worry about this later.
[02:19:50] Okay, so yeah, okay, so it's published. So is Code Sandbox going to find it?
[02:19:56] um
[02:20:00] Let's...
[02:20:03] Okay.
[02:20:04] Let's remake our counter.
[02:20:06] so now we need from preact we need a signal here right so it's like
[02:20:11] Preact
[02:20:13] signals core, we need a signal
[02:20:20] And then we need...
[02:20:21] render and clean up from
[02:20:25] Preact
[02:20:26] rxjsx.
[02:20:29] And then if we save all this,
[02:20:31] and everything works
[02:20:37] Okay, there's no ref, there's signal.
[02:20:42] Code sandbox is dumb sometimes
[02:20:45] "Could not find VueRx.jsx." Oh!
[02:20:48] Babble
[02:20:49] Mm-mm.
[02:20:50] Babel plugin GSX DOM expressions.  You guys don't have to do this with solid, but here,
[02:20:56] we actually have to say where our module name is coming from.
[02:21:00] And
[02:21:02] If everything worked well,
[02:21:06] We have a working counter.
[02:21:09] And just to prove...
[02:21:10] that this is
[02:21:12] solid style awesomeness and not
[02:21:15] VDOM.
[02:21:20] We're going to refresh this sucker.
[02:21:23] Counter logs once.
[02:21:25] Thing keeps updating.
[02:21:29] All right.
[02:21:31] So...
[02:21:33] That's cool.
[02:21:36] Alright, so it just worked for a try. Okay, well, thank you TypeScript.
[02:21:41] I
[02:21:43] I can see how TypeScript helps refactoring.
[02:21:45] Especially when you're allowed to ignore it.
[02:21:47] Um
[02:21:49] It showed me all the places where I had to put as unknown as any.
[02:21:55] So that helped a lot.
[02:21:58] Um...
[02:22:01] Okay.
[02:22:03] Thank you.
[02:22:04] Okay, cool. So what we're going to do next...
[02:22:07] is
[02:22:09] Whoa.
[02:22:09] I don't know about Break It, but we're going to benchmark it, aren't we?
[02:22:12] Why would we do this if we're not going to make the JS framework benchmark with it?
[02:22:25] Don't get me wrong, I don't actually hate types and I've used types and languages for large portions of my career. I dislike TypeScript.
[02:22:33] Um, largely and it's, it's, don't get me wrong. It's, it's a good thing to exist. I am glad
[02:22:40] that we can have types in JavaScript and have a contract and have like, um,
[02:22:48] Like, I'm glad that, like, what allows people to do and it makes your life way easier and all that stuff.  The challenge...
[02:22:55] From where I sit.
[02:22:57] His TypeScript is not JavaScript. It's not like a superset as much as people like to do it.  It's more like a subset, which is fine.
[02:23:04] But sometimes being a subset is awkward.  Just because there's certain things that are hard to express.  You want to do differently.  And then it's like, oh, but TypeScript.
[02:23:15] So as long as you can kind of like...
[02:23:16] The fact that you can bail out makes it actually a superset and not a subset.
[02:23:21] But like strictly typed...
[02:23:23] TypeScript
[02:23:24] is a subset of JavaScript, not a superset of JavaScript.
[02:23:27] um,
[02:23:28] That's the best way to put it. So it's like, it's just, it's,
[02:23:32] I've used other type languages and been perfectly fine with them. I just don't like like you're taking something really dynamic and then like you're trying to force it and it just like doesn't always line up. That's where life gets hard. So.
[02:23:44] I guess that's-- if you want to do everything in TypeScript that's possible in JavaScript,  then there's going to be places where you just have to bail out.
[02:23:54] So it's just...
[02:23:55] It's just...
[02:23:58] It's knowing when to do that and when to invest the time that I think is a skill there.  I think the net positive TypeScript is...
[02:24:06] super positive. So it's not like I hate hate it. I just like
[02:24:10] I just like...
[02:24:12] poking fun at it because there's a lot of people who are like really zealous about it and i'm just  like
[02:24:17] You guys are so easy to poke fun at.
[02:24:18] - Yeah.
[02:24:19] Um...
[02:24:20] But the truth of the matter is, it is a very good thing.
[02:24:24] build your projects in TypeScript, do your projects in TypeScript. Me as a library author,  it's like I feel the pain more often, but then I do the work and then you get good types and  then everyone's happy. So the only person who has to feel my pain is me and you guys can go do great  things with TypeScript.
[02:24:45] Yeah, Hacker News is mainly just like a...
[02:24:49] uh...
[02:24:51] like a data loading kind of exercise metaphor thing.
[02:24:58] Right.
[02:24:59] All right.
[02:25:01] So like, yeah, I'm sure you all appreciate the types that we put into solid and how you can use them and stuff like I don't don't get me wrong.  It's just like.
[02:25:10] Sometimes I'm just like, oh man. Especially like, also like when I'm coding or live streaming, like when stuff gets in my way,
[02:25:17] It
[02:25:18] You know what I mean?  Like, it's like, that's not what I want to deal with.
[02:25:21] you know
[02:25:21] It's like right place, right time sort of thing.
[02:25:25] So anyway...
[02:25:27] Preact JSX counter works.  Let's do something more substantial.  Let's pull up, let's see if we can get  the JS framework benchmark going.  And this is kind of cool, 'cause I just so happen to be  on a branch that I also have Preact, Preact signals,
[02:25:38] and whatever this will be. So we'll be able to compare all three versions of Preact
[02:25:43] in the same...
[02:25:45] benchmark, so to speak. And I think that is kind of cool.
[02:25:49] So let's see if I can--
[02:25:51] So,
[02:25:52] get a new window open and get some...
[02:25:56] stuff going. Sometimes I do have to watch because like Chrome updates and then the benchmark doesn't work and then I have to do like some stuff. I'm probably a little out of date too because I'm on a branch. I made the Preact Signal implementation.
[02:26:10] But then it got pulled because it wasn't ready.  There was a memory leak.  And then I...
[02:26:14] And then I fixed it.
[02:26:16] And then I was like, okay, so we're good to go.  And then Jason and Preact team were like, no, we're going to do our own submission pretty soon.  That was five weeks ago, which is fine.  So I just got this branch that I'm playing with.  I'm sure it'll get submitted at some point.  So we'll just kind of play in here.
[02:26:39] Because as I said, I'm not in a place where I care to--
[02:26:42] get into
[02:26:44] that with anyone. I'm just going to
[02:26:46] We'll just build our experiments here. I've been playing with Quicken here as well. I'm sure they will have a version of this framework benchmark eventually as well.
[02:26:58] Um...
[02:27:00] Let's just, I'm trying to think of what I want to start with. I feel like the theme today is actually copy view, the view version, and then like port it across. The only downside is this view version probably hasn't been updated in a while.
[02:27:14] Let's see what version is on. Is it on version three? No, it's on version two. So, eh, that's fine. Let's just copy this across.
[02:27:26] No, no, I made the official thing, but it got pulled because of the memory. Like it wasn't supposed to be merged. I made a draft version and I was like, hey, this is I think how we would do it. Let's get that bug fixed. I think I found a bug and then we'll submit it. But Stefan, the thing like maintainer was so eager, he just saw the preact thing. He's like, let's bring it in. And it wasn't ready yet. So then we had to pull it.
[02:27:50] And then,
[02:27:51] I asked the team, I was like, so can we go with this now that the bug's fixed?  And they were like, no, we'll do our own version.
[02:27:59] So that's why...
[02:28:02] I have it still, and it hasn't been added officially.
[02:28:12] Yeah, I will definitely upload the code as well. I have to update the readme along with this. So let's just copy this.
[02:28:19] Let's see if we can get a working JS framework benchmark.  JS framework benchmark, I love it.  I mean, I've done so many implementations.  I did the Svelte 3 one, I did one of the vanilla ones.  Like you can just kind of go in here and it's not very hard
[02:28:33] Oh, the old...
[02:28:33] to do this. Let's see here, let's paste this in here. And we're just going to call this one
[02:28:41] What do we call this one?
[02:28:43] Nope.
[02:28:43] Peneme.
[02:28:47] preact the one thing i'm at the watch out for is
[02:28:51] untrack type stuff might catch us on the way.  Because I'm like, if you've ever seen my code, I write...
[02:28:57] I write knowing to the optimizations.
[02:29:01] like untracked stuff might actually get us here.  So let's see what we need here.  Blah, blah, blah.
[02:29:07] Thank you.
[02:29:08] um actually looks like there's a bunch of weird
[02:29:11] There might be some weird specific stuff that we did with
[02:29:15] I don't really care. It'll probably still be fine.
[02:29:18] Let's switch this around.
[02:29:20] We need
[02:29:22] um... thirty four
[02:29:26] 12 is a
[02:29:28] Let's just do...
[02:29:30] 34
[02:29:32] hat
[02:29:33] and
[02:29:35] Let's do... I don't care...
[02:29:38] Roll-up version.
[02:29:40] Um...
[02:29:42] This is probably fine.
[02:29:44] But these are the ones that I want to update.  I want to get...
[02:29:47] preacts
[02:29:49] signals core
[02:29:52] version 1.
[02:29:55] 1.21 I think it is
[02:29:58] Actually, let's try it. If 2-2 were
[02:30:00] We should run with Tutu.
[02:30:01] And then...
[02:30:04] preact
[02:30:06] rx 0.01
[02:30:12] You guys are talking about something about Astro in the chat.  I'm not quite following.  CLI kit.  Yeah.
[02:30:19] Call it you
[02:30:20] creating astro
[02:30:22] This is, of course, Astro with a solid integration, right?
[02:30:25] Alright.
[02:30:29] Where are we? Okay, and we're going to get the version of our package from Preact.
[02:30:35] RxJSX. So this is just some... I'm just getting stuff out of the way, so let's...
[02:30:40] Let's go CD.
[02:30:42] frameworks keyed
[02:30:44] Preact
[02:30:47] PreactRx JSX, let's npm install it
[02:30:52] well while this is going let's look at the source code, it's not much of this is going
[02:30:57] And let's take a look at what we're doing here
[02:31:01] with this benchmark. If you've never looked at the JS Framework benchmark,
[02:31:05] It is relatively simple. It's literally just one big table.
[02:31:10] What are we doing here though?
[02:31:19] Hmm.
[02:31:25] That's interesting.
[02:31:28] Oh!
[02:31:29] Interesting.
[02:31:32] I actually don't think this version is the best one to go off of.
[02:31:36] Huh.
[02:31:37] There's something interesting.  Vue
[02:31:41] has
[02:31:42] But the refs turn into proxies if you go deep. So they actually have shallow refs specifically to tell you this is not a nested proxy. But Vue tried to auto-merge them together. So if you start with a ref, it actually turns into a store in solid syntax as you nest data.
[02:32:00] which lets them write it fine-grained.
[02:32:04] in a certain way because like,
[02:32:06] we can actually, like let's look at the update.  I'm actually adding it and it actually works.  This will not work with
[02:32:14] Preact signals the same way. We actually need to do it a little bit more like the Preact signals implementation that I did where we're going to actually
[02:32:23] Nest
[02:32:24] signals
[02:32:25] to get those fine grained updates, which is important. So I'm going to
[02:32:31] play around with this a little bit. So we're going to pull this from here.
[02:32:35] into this one, change the build data function,
[02:32:40] Okay.
[02:32:41] And then...
[02:32:43] We're gonna...
[02:32:44] update our imports, so this is
[02:32:48] preact
[02:32:51] Signals core
[02:32:52] We're going to get a signal from it.
[02:32:54] and
[02:32:57] from Preact
[02:33:00] rxgsx we're gonna get render map and create selector that looks good okay cool
[02:33:07] Um...
[02:33:10] Alright, so...
[02:33:12] Now we're going to nest our signals. So the reason is each label can be updated independently to the list and we want to get those fine grain updates.
[02:33:19] Um...
[02:33:20] I'm going to do this. Okay, so here the data is a ref.
[02:33:24] or a signal, let's see here, sorry.  This is all in JS, not TypeScript.
[02:33:29] um, it's pretty par for the course for this stuff.
[02:33:32] So these are gonna be signals and the data is gonna be signaled with signal in it.  And then is selected.
[02:33:38] We're actually seeing the selector in action here.
[02:33:42] See, this is the stuff I got to watch out for.
[02:33:45] Because...
[02:33:46] If I do this, this untrack...
[02:33:50] Like if this was reactive, this would track and that would mess with stuff.  But ID is not reactive because we did not explicitly make it a signal.  So that is fine.
[02:34:05] All right.
[02:34:07] It's an interesting aesthetic I chose for this version. We're actually create the map out here and then inserted it here.
[02:34:15] It's really just a matter of choice, though. And I actually put the helper functions on the end.
[02:34:22] It doesn't actually make any difference. It's just very interesting why I chose this form.
[02:34:28] Okay, let's...
[02:34:29] Let's...
[02:34:30] Let's look at...
[02:34:32] how we update
[02:34:35] 'cause
[02:34:37] Okay.
[02:34:38] This is good, this is good.
[02:34:40] The problem is some of the more fine grain updates are going to be more challenging. For run, run lots and add, they are essentially going to be the same. Run, run lots.
[02:34:49] Oh yeah, this is an older time when I used to set selected to
[02:34:52] false. We don't actually need to do this.
[02:34:55] I'm kind of tempted to just like wrap this back around into my current best patterns.
[02:35:01] It's not even current best patterns.  It's just...
[02:35:03] Typical Ryan code, right?
[02:35:04] Just kind of like do do do do do. I think we can actually take the Preact signals implementation.
[02:35:10] and actually just
[02:35:12] copy it across for the mutation. Because the state management between the Preact version and the solid
[02:35:19] or the DOM expressions like the one we made today should actually be the same.  It's just that the view rendering should be way more efficient with what we did today than using a using pre-exp.vdom.  So technically speaking,
[02:35:31] I think
[02:35:33] It's just a matter of just adding
[02:35:35] these in here. Okay, there's a couple other differences that I'm seeing right now. We'll look at that.
[02:35:42] Just a second. So...
[02:35:45] Run, run lots.  Okay, so run...
[02:35:47] is just build data, run lots is build more data.
[02:35:50] Add is
[02:35:53] append,
[02:35:55] Update.
[02:35:57] goes through and updates the nested signal
[02:36:00] See how it goes label dot value.
[02:36:03] Like there's a...
[02:36:04] It's like nested.
[02:36:06] Swap rows looks good.
[02:36:09] clear looks good. So our question is,
[02:36:12] What's the difference
[02:36:14] between selecting and removing a row. If you guys haven't seen the benchmark yet, this might not make a ton of sense, but it will in a minute.
[02:36:25] -No.
[02:36:26] Yeah, yeah. I guess you wrote this before I did copy.
[02:36:29] copy and paste it. But yeah, I,
[02:36:33] Yeah, exactly. The state management part should actually be the same.
[02:36:38] It's the per row stuff that I'm mostly concerned with.
[02:36:43] So everything below here
[02:36:45] can just
[02:36:46] go away, essentially.
[02:36:49] But...
[02:36:50] Um...
[02:36:53] missing a closing.  Okay.  But
[02:36:56] Okay, so remove...
[02:36:58] gets an ID and that should be the same idea here.  Remove gets an ID, same idea here, slice, slice, slice. Okay. Select
[02:37:05] is handling different here.
[02:37:09] because there is no select being called. There is an is selected, essentially.
[02:37:13] Set selected.
[02:37:17] but I think I can just call it select.  And I think the only reason it wasn't select before
[02:37:22] was because they selected. So this is like a verb kind of thing. So select remove,
[02:37:29] select sets the ID to the selected ID, remove removes it,
[02:37:34] And then...
[02:37:37] Yeah, that's all that's doing. And then we don't need any of this. And then our code looks way cleaner. This almost looks like
[02:37:42] solids implementation. It's like pretty tight, right?
[02:37:45] let's
[02:37:47] Let's...
[02:37:48] get correct indentation for
[02:37:51] the rest of this
[02:37:52] and double check that the Preact Signals  version uses select the way that
[02:37:58] Like that I got it right.
[02:38:00] Because in the GSX, it's just select.  In the Preact Signals version, I'm using function closures.  In the...
[02:38:08] In this version, I can use Solid's very smart
[02:38:12] or it's not solid, it's DOM expressions, very smart way of using array syntax on clicks as a binding method that doesn't create closures, which is a nice performance update improvement.
[02:38:22] Okay, so...
[02:38:25] Let's
[02:38:26] I think that's all we need. Let's see if this actually builds.
[02:38:34] All right.
[02:38:35] Yeah, so our arrays-- sorry, I said array syntax.
[02:38:39] Because it's like a binding syntax, a call select with this row ID, but it saves us from making a closure on every single list element.
[02:38:49] Okay, so...
[02:38:51] Let's try this, npm,
[02:38:54] uh,
[02:38:55] run build prod.
[02:38:59] Okay.
[02:39:00] What's this missing global variable name? What is that?
[02:39:04] Missing global variable name.
[02:39:06] VRX, oh!
[02:39:08] I keep on forgetting the important part.
[02:39:11] We could update the Babel plugin,
[02:39:12] to use.
[02:39:14] are
[02:39:17] are
[02:39:18] our library. There we go. No more globals.
[02:39:21] Okay, dist looks
[02:39:24] Relatively good? Okay.  Alright, let's...
[02:39:28] Let's just try running this.
[02:39:30] um...
[02:39:33] you know get three windows open that's usually the way around these things  this one will just run in
[02:39:40] Okay, actually...
[02:39:41] I did it a little backwards. Let's get back out of here.
[02:39:45] In the root, we run npm start
[02:39:49] And this will...
[02:39:51] sort of her...
[02:39:53] our server...
[02:39:55] Thank you.
[02:39:56] This is where I was building stuff.
[02:39:59] And then this is where we run the benchmark if we get to that point. I don't know if I want to run it on stream while streaming. I'm sure it'll
[02:40:05] It'll cripple things a certain way.
[02:40:07] But...
[02:40:08] Let's see here.
[02:40:11] Um...
[02:40:17] Let's go to localhost8080 and see if our framework is there now.  So it's frameworks keyed.
[02:40:25] not pre-act signals
[02:40:27] But pre-act...
[02:40:28] Rx...
[02:40:29] JSX.
[02:40:32] Thank you.
[02:40:32] Okay, gotta remember to change the title.
[02:40:35] Can we create a thousand rows? Yes, we can. Can we select a row? Yes, we can. Can we remove a row? Yes, we can. Can we swap rows? Yes, we can.
[02:40:42] Update every 10th row isn't working, okay.
[02:40:45] Let's try that.
[02:40:46] Again, update every 10th row.  Okay, that one's broken.
[02:40:50] Can we append?
[02:40:53] Let's see.
[02:40:55] Yes, we can.
[02:40:56] Can we create 10,000 rows?
[02:40:58] I think we can. That looks like 10,000 rows.
[02:41:03] Actually, how many rows is that? 12,000 rows.
[02:41:06] Oh yeah, it's not. It's just because we started from 2000.
[02:41:10] Okay, so...
[02:41:12] Update to every 10th isn't working, but everything else is working.
[02:41:15] Okay, so...
[02:41:16] That's good.
[02:41:18] It's mostly working library, okay.  Let's go back to our code.
[02:41:22] and see what we got going on.
[02:41:26] Um...
[02:41:27] Okay, so...
[02:41:29] A couple things here. First of all,
[02:41:32] Let's go to index and change this to
[02:41:35] Preact
[02:41:36] rxgsx
[02:41:38] Let's go inside our main.  And I think it shows up one more time.  Once in the title and once in the...
[02:41:44] rendered HTML, I think.
[02:41:48] Yeah, pre-act.
[02:41:51] RxJSx, okay.
[02:41:53] Next thing we need to figure out is why our update function does not work.  And our update function is simply going through for each label
[02:42:01] appending the plus equal value to it which
[02:42:08] Looks like it should work.
[02:42:10] Hmm, okay.
[02:42:12] Let's see if we can figure that out.
[02:42:15] That's interesting. Because we did actually copy this code straight from the previous PreactSignals version.
[02:42:23] Mmm...hmm...
[02:42:26] Okay.
[02:42:30] Let's...
[02:42:31] sanity check the
[02:42:33] Actually, you know what we can do?
[02:42:35] Let's go to the previous Preact Signals version
[02:42:39] and go to
[02:42:41] Let's update that.
[02:42:43] to
[02:42:45] Why is it?
[02:42:46] Oh, okay. It's interesting. It's only 1.1.2, but...
[02:42:49] Let's update that to 1.1.2.
[02:42:52] and
[02:42:53] C.
[02:42:55] if we blow out the package JSON, like, I just want to make sure that it still works with the latest for there. Okay, actually, sorry, CD.
[02:43:03] JS, that means a backup of the...
[02:43:05] Backed out of the wrong window.
[02:43:07] Let's go dot dot to preact signals.
[02:43:11] and let's
[02:43:12] MPM and...
[02:43:14] in the NPM.  Right.
[02:43:15] Build prod.
[02:43:18] All right.
[02:43:20] start our server up again.
[02:43:24] Just sanity check that the...  Like, nothing weird has changed with it itself.  Let's go to...
[02:43:32] Preact
[02:43:34] signals into XHTML.
[02:43:39] Okay, that one is updating. Okay, so there's nothing...
[02:43:42] Okay, okay, so this is something specific to our implementation.
[02:43:47] Okay.
[02:43:47] sweet, react
[02:43:49] rx, gsx, index h, you know.
[02:43:52] Still spinning out view, but that's because I haven't rebuilt it.
[02:43:56] Thank you.
[02:43:57] Um, okay.
[02:44:02] Thank you.
[02:44:09] And actually, so that we can debug it, I'm going to
[02:44:11] I'm going to run build in dev mode. Run build.
[02:44:15] Dev, I think?
[02:44:17] Okay. This way we will actually be able to
[02:44:20] debug the code while it runs.  You'll get preactor-xgsx.
[02:44:24] sanity check
[02:44:26] Okay, cool. So what's going on? Where are we losing stuff here?
[02:44:30] Alright.
[02:44:32] Okay, so first thing we've got to look for is the update function.
[02:44:36] Does the update function get called?
[02:44:42] All right.
[02:44:47] it does
[02:44:51] So what happens
[02:44:53] when I'm in here
[02:44:55] and I set
[02:44:57] Oh yeah, this is actually one fun thing.  Preact likes to
[02:45:01] ship minified source all the time
[02:45:06] uh...
[02:45:07] is probably a way that I can alias it out of it, but their default is minified. I always rely on the bundler to do it, but
[02:45:13] Um,
[02:45:16] So
[02:45:24] Yeah. There's a comment about the, this, I mean,
[02:45:29] Yeah, I mean, you could view it that way. But I mean, again, it's very, a lot of people just use it for convenience. It's just, it's a nice binding syntax for being able to pass arguments through.
[02:45:42] .
[02:45:43] VS Code, have it a read-only bit.
[02:45:44] Yeah, I'm actually not sure.  That's a good question.  Something I might consider for the future.  My biggest problem is I don't trust...
[02:45:51] being able to figure out stuff with tooling.
[02:45:52] at all. So what is happening here? The fact
[02:45:58] The fact that we're getting into here...
[02:46:00] Um...
[02:46:01] is interesting because they're actually leaving very quickly here
[02:46:05] Um...
[02:46:06] Which is interesting.
[02:46:08] Because I went...
[02:46:10] It looks like
[02:46:11] Oh no, they're not leaving. Okay, never mind.
[02:46:17] This might actually be harder to debug than I thought.
[02:46:22] 'cause anyways we're getting the value that's not the one I want I want to know what happens when you click into this one
[02:46:33] I mean, I guess one thing we could do
[02:46:35] is we could...
[02:46:37] Yeah, yeah, check this out.
[02:46:44] It's returning the previous...  It's not...  Okay, it's returning the previous value.  Okay, let's see what happens.  Now we go into set...
[02:46:51] It does append it.
[02:46:55] Okay, good.
[02:46:56] Good.
[02:46:57] Good.
[02:47:01] Okay, let's keep on going.
[02:47:03] I know I'm trying to debug minified code here.
[02:47:09] So it's setting some flags on it. I'm gathering this is telling it now that it's like dirty or something.
[02:47:15] And then...
[02:47:17] Finally called T. Well, what's T?
[02:47:20] T
[02:47:22] It's like...
[02:47:23] All right.
[02:47:28] Yeah, I mean, I'm not making a ton of sense of what I'm seeing anymore, because we're in super minified zone.
[02:47:41] .
[02:47:43] Yeah, they definitely do because we actually intercepted the getter and the setter.
[02:47:46] Right? So the problem is
[02:47:49] If we're not seeing an update here,
[02:47:51] um for like it's not on the setting side because we actually see it intercept the  getter and setter like this is definitely happening the problem is
[02:48:01] that
[02:48:02] So,
[02:48:03] the tracking
[02:48:05] for it
[02:48:07] um,
[02:48:08] is not like this Rodot label
[02:48:12] I mean, I guess we could attack him from that side and see what's going on, but...
[02:48:15] this wrote out labels not doing what what I expected to be doing
[02:48:21] Because it should be just...
[02:48:25] you know, we should have a subscription at this point that should update.
[02:48:31] But it's going to be hard to see that running through the minified code.
[02:48:35] I...
[02:48:36] Thank you.
[02:48:38] I am not...
[02:48:39] Like trying to map back to this is going to be tricky because what I'm expecting here during the set is that it actually notifies some kind of subscribers.
[02:48:46] Um...
[02:48:47] But...
[02:48:50] Like...
[02:48:53] Without knowing Pre-AX internals, it's going to be hard to actually figure out if it
[02:48:57] like
[02:48:59] about that notification of subscribers, right?
[02:49:03] because right now it's just sending flags
[02:49:06] Yeah, I mean, this is not going to do it.  So...
[02:49:10] Interestingly though,
[02:49:14] It's...
[02:49:14] It does look like it's running RFX.  In fact, it looks like it's calling a cleanup function right now.
[02:49:20] So...
[02:49:23] Let's... let's... let's, uh...
[02:49:26] Let's go up a level.
[02:49:28] Where is this... yeah, okay, okay, okay. Something's rerunning, right?
[02:49:33] We're into our code.
[02:49:38] Why is it running selected?
[02:49:41] Oh right, it's grouped.
[02:49:43] This is classic.
[02:49:44] Okay, this is actually good.
[02:49:48] Grabs it.  Okay.
[02:49:56] me too.
[02:49:57] Thank you.
[02:49:59] Okay, okay. Okay.
[02:50:05] Thank you.
[02:50:07] Okay.
[02:50:08] Okay, I see what's happening.  Dom Expressions referential check is failing  because it's the same...
[02:50:15] reference that has changed.
[02:50:17] um,
[02:50:18] The question is, how does the old value...
[02:50:22] still
[02:50:24] Okay, this is interesting. Okay, I get what's wrong now. I just need to figure out why this is happening.
[02:50:30] *click*
[02:50:31] for.
[02:50:32] Thank you.
[02:50:35] Essentially,
[02:50:36] Thank you.
[02:50:37] It's already updated the previous value by the time it gets here.
[02:50:42] but the previous value
[02:50:44] should be
[02:50:47] Yeah, this is the problem. Yeah, someone actually wrote in chat, didn't they?
[02:50:51] They found the problem.
[02:50:52] *chip chip chip* that's exactly the problem
[02:50:56] I don't know why I didn't hit this on the...
[02:51:00] view one because this would be the same problem in the view one as well.
[02:51:05] um...
[02:51:08] If you think about it.
[02:51:09] This is exactly what the problem is. This road art label,
[02:51:12] Like...
[02:51:14] It should be row.label.value.
[02:51:16] In the view one...
[02:51:22] *Sigh*
[02:51:25] Like we didn't copy this over from
[02:51:29] In the maximum.
[02:51:30] Unless we did.  Yeah, I don't know.
[02:51:33] That is the problem though. I'm almost positive that's the problem.
[02:51:39] The reference to the signal is the same, but we don't want the signal, we want the value.
[02:51:44] Right?
[02:51:45] So
[02:51:46] Alright, let's do this. Create a thousand, update every 10th row.
[02:51:54] works
[02:51:56] All right, we've got a working benchmark.
[02:51:59] Thank you for whoever in chat figured that out. Um,
[02:52:02] Yeah.
[02:52:05] I'm like really curious now about the V1 because it's like,
[02:52:08] Sorry, I didn't mean to...
[02:52:09] Open Discord.
[02:52:12] quit discord
[02:52:14] Okay.
[02:52:16] Like...
[02:52:17] Thank you.
[02:52:18] Thank you.
[02:52:19] Uh, view rx
[02:52:23] TSX
[02:52:25] source main
[02:52:28] Oh, do you know why it's not in the view one?
[02:52:30] It's because we're only using a deep ref.
[02:52:32] So you don't need to reference the dot value deeply when you're in view.  Like if you start with a ref, you go something dot value and then everything below that's a proxy.
[02:52:43] That's why.
[02:52:46] That's why. And in the Preact version, we don't see it because Preact actually wants you to pass the signal, which has a whole other load of concerns around that.
[02:52:54] But...
[02:52:55] There we go. Okay, cool. So then I think we're good then.
[02:52:58] I think what we should do is
[02:53:01] is
[02:53:02] Let's
[02:53:03] Let's just play this fair, right?  What we're going to do.
[02:53:08] We're going to build...
[02:53:10] prod with this
[02:53:11] Um...
[02:53:15] And
[02:53:16] Then what we're going to do, and okay, let's double check that's still
[02:53:20] works, right?
[02:53:23] sanity check our work is always a
[02:53:25] Good idea.
[02:53:27] Um...
[02:53:28] And then what we're going to do, update every 10th row.
[02:53:39] I think...
[02:53:41] what we're going to do here then is
[02:53:45] *sigh*
[02:53:47] OK, we're going to run vanilla.
[02:53:49] Preact and Preact signals
[02:53:52] all in a
[02:53:53] uh,
[02:53:54] And this, all four versions in here.  This is going to take a couple minutes,  so we're going to chat through some other stuff.  But let's just...  I think the benchmark's in a good place,  so I think what we can do...
[02:54:07] is preact, preact singles, preact rx, and I'll do a vanilla as a thing. So we got our
[02:54:12] Builds good. We're running on the port.  And then we're going to do...
[02:54:17] Oh, come on. NPM. I'm like so lazy.
[02:54:21] Bench.
[02:54:22] Um, not all of these.
[02:54:25] because that would take us forever
[02:54:27] we're gonna do preact, preact signals
[02:54:31] I'm gonna leave solid out.
[02:54:33] We all know where Soled sits.
[02:54:35] these days, it's about 109, 108
[02:54:39] There was a bad run on the recent one, but let's see here.
[02:54:44] Preact signals and then keyed
[02:54:47] Preact
[02:54:49] uh...
[02:54:50] Rx
[02:54:51] GSX
[02:54:54] Let's see if this will run.
[02:54:58] Beautiful. Okay. So we're going to let it do its thing for a moment. Um,
[02:55:03] How's everyone doing?
[02:55:08] It's fun.
[02:55:10] Okay.
[02:55:11] Thank you.
[02:55:14] *click*
[02:55:15] -
[02:55:19] All right.  Let's see how Twitch chat is doing.
[02:55:25] No, nothing new on Twitch chat.  You guys are all still there.
[02:55:30] Surprisingly good numbers staying up with Twitch. It's actually the YouTube people that are dropping off.
[02:55:36] Oh, that's crazy.
[02:55:38] It actually switched the benchmark to my other window.
[02:55:41] Well, because I had focus on it.
[02:55:44] That's...
[02:55:46] That's probably going to
[02:55:47] Screw stuff up
[02:55:50] Oh, man.
[02:55:51] Oh, good I know that.
[02:55:52] Ha ha.
[02:55:59] Yeah, we can take a moment's breath here.
[02:56:05] Thank you.
[02:56:06] Thank you.
[02:56:07] um...
[02:56:08] Yeah, so...
[02:56:11] Is this a new Pre-AX feature?  Signals are a new Pre-AX feature.  In September, they added support for a reactive system,  kind of similar to what we have in Solid.  Yeah.
[02:56:20] And, um...
[02:56:22] They use it
[02:56:23] in a VDOM in a very interesting way. They figured out a way to kind of like hyper optimize
[02:56:28] certain types of operations by passing a signal all the way through to the VDOM. And then the VDOM treats the signal almost like a micro component and like updates that.
[02:56:37] So,
[02:56:38] I thought it would be interesting to see if we could just take preact signal representation and just rip out the VDOM and then just make it like...
[02:56:46] like just like pure solid style.
[02:56:49] When's Next.js discussion coming is a good question. Soon.
[02:56:53] This is the end of this piece, and then we're going to switch into this week in JavaScript and talk about...
[02:56:59] other stuff that's been going on but I
[02:57:02] This is the highlight of us doing it. We were successful.  I'm going to push the code up, it'll be a repo and whatnot. But for now,
[02:57:13] Um,
[02:57:14] I got to update the README and whatnot, but for now it looks like we have
[02:57:18] a working
[02:57:19] I love when you run stuff like this, like just check out how
[02:57:24] like fast it runs, like even with like,
[02:57:29] like 10,000 rows. No, this is a thousand row one. But like even with this number of rows, yeah.
[02:57:36] Yeah, this week in JavaScript is going to be fun.  I'm actually...
[02:57:38] I was tempted to just drop this whole pre-act signal thing  and just spend the whole time talking about...
[02:57:44] various stuff around this week in JavaScript.  But
[02:57:48] I...
[02:57:49] I decided I wanted to do something. I was pretty tired and I was like, maybe I'll do a shorter stream. But no, I figured that it'd be fun to actually build this out. And admittedly, this takes a few minutes to run through everything. So it is what it is. But...
[02:58:03] I think it's worth it. We're just going to see the results. Okay. Yeah. Great question. Sorry. The only reason I'm not highlighting the questions on the channels, because when I switch focus, the benchmark gets messed up. But someone's asking, what's the difference between keyed and non-keyed?
[02:58:20] And the difference there is that
[02:58:25] It's the same reason why you include, if you've ever used React and you've included the key property, it's for this reason.
[02:58:31] There's two different ways to look at the DOM when you're rendering in a framework and you're like managing lists.
[02:58:37] One way of thinking about it
[02:58:40] is...
[02:58:43] is that, uh,
[02:58:47] Each
[02:58:48] like the DOM elements are tied to the data model.  Like they own it.  And what's nice about that approach is that  if the DOM actually persists any state,  like animations or anything, like,
[02:59:00] "The Domino's Live and Die."
[02:59:03] With
[02:59:04] that data model.
[02:59:06] And that's why you key, you go like for this ID, these are the DOM elements it owns. If this, you know,
[02:59:12] model with this ID goes away, then get rid of those DOM elements. The other view is like, if you have a bunch of DOM elements on the page and you're just changing like you have a list and you're changing which items are at which location, well, instead of
[02:59:24] um,
[02:59:26] like moving the items physically around.  Like I actually do a better explanation of keyed versus non-keyed,  um,  in a previous stream that I probably have to go dig out.  But like,  like,
[02:59:36] The other view is...
[02:59:38] You have to understand, sorry, I skipped ahead a bit,  but if you tie the model to the DOM elements,  that means if you move the elements around in the list...
[02:59:46] they actually need to move the DOM elements around. But the other view is like, look, I already have a bunch of lists, like items, list items in front of me. If I change the DOM elements, I can just replace the data and update like the data fields and not
[03:00:00] move the DOM elements on the page.  And that's what non-keyed is.  You basically kind of like,
[03:00:05] When new data comes in, you just hijack the DOM elements that are already present.
[03:00:09] Um...
[03:00:09] This can be more performant because you're not doing as much sometimes layout calculation or CSS calculation type stuff.
[03:00:18] but it means that like if one element was transitioning and now it's on new  data,  like it's,
[03:00:23] still transitioning. You don't have that guarantee. There's also other interesting things that are kind of semi-thing, like focus. And things that are related to
[03:00:34] The DOM that keeps state that this app state doesn't represent.  Web components are another fun one.  There's like a lot of edge cases here where essentially...
[03:00:43] We generally...
[03:00:44] recommend that things should be always keyed because you don't want to like
[03:00:49] get into this weird zone. And for benchmarks,
[03:00:52] Keet is definitely the one that is harder to optimize for.
[03:00:57] Because that's why there's like
[03:00:58] large list reconciliation functions. If everything was non-keyed, you could literally just like iterate over and like update the values.
[03:01:06] You know, and then if the list longer add a few at the end if the list is shorter, you know
[03:01:10] drop off the ones on the end.
[03:01:12] And but
[03:01:15] The hard part is actually...
[03:01:17] you know, doing keyed. Like if you actually swap items in keyed, you actually have to like figure out
[03:01:23] the least amount of moves. You don't want to bubble sort your DOM when you sort it. You don't want every element to move one at a time.
[03:01:31] down the page. You want to do the minimal amount of DOM operations. So, um,
[03:01:35] That's what we benchmark here.  So in a sense, I pretty much ignore non-keyed even exists.  When someone releases something and it's only non-keyed,  I don't even register it.  Because it's a cool optimization, but it's not...
[03:01:49] terribly practical, but I mean, different frameworks have different opinions here. Obviously, React always, you know, annoyingly goes, you need that key.
[03:01:58] Um...
[03:01:59] But...
[03:02:00] - Yeah.
[03:02:02] The...
[03:02:04] On the other hand, frameworks like Vue or Svelte
[03:02:10] need the key just as much
[03:02:12] But they don't actually...
[03:02:15] like push you to it.  They're just like,
[03:02:18] their default is actually non-keyed.  And then you have to actually opt into a key,  which to me seems like an insane default.  But like...
[03:02:28] That's just.
[03:02:29] like how they roll. So,
[03:02:32] It's interesting to me, definitely, that kind of split.  But I think a lot of that actually has more to do with the easy versus simple mentality and the progressive mentality, less than any technology thing.  I remember someone, I forget, a little while ago was like...
[03:02:48] My favorite thing about Svelte is you don't need keys. Sorry to break it to you, that is not true.
[03:02:57] You know what I mean?
[03:03:00] It leads to misinformation, which makes it harder to teach.
[03:03:05] "Keed" is the default for React,
[03:03:07] And every VDOM author that I've ever talked to
[03:03:11] defaults to keyed
[03:03:14] For some weird reasons, Svelte and Vue don't default to keyed.
[03:03:17] For Vue? Oh, does Vue scream about it too?  Okay, well then I take that back.  Sorry, to my knowledge, Vue didn't scream about keyed,  at least not originally.  At the time of the benchmarks like this were originally made,  Vue was all like,
[03:03:28] basically was like
[03:03:31] Everyone made the benchmark with Vue non-keyed because that was just the way they did it.  And then people saw the performance difference.  And then we had the standardized.  It was actually largely...  Vue was one of the first frameworks that actually...
[03:03:42] was the one on the non-keyed side, and we had to learn to differentiate.  But that could have been just implementation. If view screams, then I'm fine. I guess it's just felt.
[03:03:51] um
[03:03:53] But if you read the docs for Svelte, they actually warn you a little bit. They're like, "Hey, you probably should provide a key."
[03:04:00] You know...
[03:04:02] A lot of misinformation kind of goes around.
[03:04:05] Someone said it wanted to talk about resumability. You're right, this is a good time to talk a little bit about resumability.
[03:04:11] um...
[03:04:15] But to be fair, I don't know if it's going to be in a context that everyone fully...
[03:04:20] gets most of my revelations around resumability are have been
[03:04:25] have been more about just looking at like,
[03:04:29] how much or how little of it you can do.
[03:04:32] Um...
[03:04:33] And for those who aren't familiar with resumability, that's probably a hard
[03:04:37] topic to broach if I just kind of like
[03:04:40] jam right into it.
[03:04:44] But...
[03:04:44] Yeah.
[03:04:46] For those who don't know, resumability is this idea that you can render on the server,
[03:04:52] basically serialize the whole app state, including the framework internals,
[03:04:58] And then...
[03:05:00] When it starts up again, you don't actually have to run pretty much any code.  There's no hydration.
[03:05:09] And
[03:05:10] I think that's
[03:05:12] And I think the tricky part is like that could be a huge serialization cost.  So usually it's like combined with some ability to,
[03:05:19] um,
[03:05:20] sorry, did I say hydration?  I mean, serialization cost, yeah.  It's usually combined with some ability  to identify which parts the code  would never need to run on the browser,  and that way you can just remove  the serialization for that code.
[03:05:33] So I've been trying to...
[03:05:35] I've been trying to focus on this problem specifically because Quick is very, he has kind of  popularized resumability talking a lot about lazy loading and I think that a lot of the constraints change
[03:05:46] Um...
[03:05:47] when you get rid of lazy loading.  But one of the challenges and things I've been,  you know, kind of thinking on  because of some of my conversations is,  if you're gonna serialize the internal app state,
[03:05:58] Like, what...
[03:06:00] like reactivity, it becomes kind of challenging if people in their primitives
[03:06:06] put
[03:06:07] Um...
[03:06:09] non-serializable values like in their signals or in their computants
[03:06:15] Like,
[03:06:16] Um...
[03:06:18] That's probably like...
[03:06:22] The problem is if you depend on a system...
[03:06:27] where it's kind of like all or nothing,  like you need to serialize everything,  then you can't have exceptions.  And the way something like quick,
[03:06:34] gets around it is that,  um,
[03:06:39] they aren't actually fine-grained.
[03:06:42] is the best way I can put it.  Essentially, they are finer grained than components,  but they aren't purely fine grained.  So essentially, when you have something  that's wrapped in a dollar sign in Quik,
[03:06:51] So that's the boundary at which serialization happens. It makes it an interesting challenge because composing primitives in Quik requires you to basically make your own dollar sign things, like making your own hooks is actually a bit involved. But it means that there's this clear...
[03:07:04] And I was thinking there for a bit. I was like, oh man.
[03:07:08] That is kind of challenging because what if
[03:07:13] you know, what if one thing can't be serialized? You throw away the whole system.
[03:07:19] Right. And so as mentioned, Michelle's pretty proud of my things quick and serialized. Yeah.
[03:07:24] There's definitely like I work on the Marco team, which also does resumability. And yeah, there's a large list and there's there's hard there's hard ones and there's other ones require a little cleverness.  The biggest thing is most of the tricky ones involve the notion that you can't completely serialize everything like that there are things that aren't serializable and even the hard ones aren't.
[03:07:47] serializable in the
[03:07:48] pure sense of serialization. What you end up doing is you figure out the minimal amount of stuff you can serialize and
[03:07:54] Sorry.
[03:07:55] And
[03:07:57] Have it reference.
[03:07:58] to some piece of the code.
[03:08:01] When Mishko says he serializes a function or closure or whatever, he means that they
[03:08:06] you look at a function, look at all the variables  that are used in the scope that aren't defined  inside that scope.
[03:08:11] give them a location in the serialization tree,  and then also...
[03:08:16] in that serialization tree
[03:08:18] record the location of that function so that when you
[03:08:22] you can basically pull that data and, you know,
[03:08:26] basically continue from where you left off when you're in the client. But it's important to  understand that the function itself isn't serialized. It's part of the code. We actually  have serialized data and code.
[03:08:39] as part of the serialization. They reference each other.
[03:08:42] And, um,
[03:08:45] Anyway, I was kind of stumbling on this a bit.  We also hit this a bit with Marco.  Marco was like, well, if we analyze the reactor graph,  most of the stuff doesn't have to be serialized.  I started thinking a bit more on that.  I think they're right a bit.  Because here's the thing.  A lot of...
[03:09:00] Qwik's necessity for serializing comes down to boundaries.  And because all these boundaries have dollar signs,  everything at the dollar sign boundary has to serialize  because they lazy load the code.  But if all the code is available to you from the top,  and I don't mean all the code,  because if you've seen Solid's recent demos  with partial hydration, server components,
[03:09:21] And
[03:09:22] and
[03:09:24] and all of that, you start realizing that, like...
[03:09:30] Maybe if something isn't serialized...
[03:09:34] it's actually okay. It just means it needs to run
[03:09:37] it needs to run.
[03:09:39] So essentially, if something isn't serializable on the client or on the server, it could just be a de-opt.
[03:09:46] rather than like a blocker.
[03:09:48] And I think this is especially true for something like
[03:09:51] derived values and memos.
[03:09:55] And I know I'm speaking like super vaguely abstract technical here.  Well, while this is going on, you're probably not visualizing it.  But the thing is, memos can generally be lazy.
[03:10:06] And while we do them eagerly, as we saw for
[03:10:10] for the rendering here. If everything's already rendered
[03:10:13] I don't think...
[03:10:15] I think it's okay to push off the memos until later when you have to run that effect for the first time.
[03:10:21] So as long as you serialize stuff in such a way that the signal
[03:10:26] can trigger the effects
[03:10:28] I think you can pull all the memos out.  Like we have a push-pull system.  Pull.  And from that point, if it's cached...
[03:10:36] Good.  If it's not cached,
[03:10:39] well then you have to recalculate it.
[03:10:41] And I think
[03:10:44] I think because it's lazy like that,
[03:10:48] It should be possible...
[03:10:50] with a combination of stuff like partial hydration not to ship all
[03:10:54] the code that needs to be there because like
[03:10:58] if something could never
[03:11:00] If it's never read in an effect, then it never needs to be there kind of deal.
[03:11:06] Okay. Sorry, I know I'm talking.
[03:11:10] I'm talking a little bit out there, but yeah, it gave me a lot of time to kind of think through this kind of zona problem.
[03:11:18] What's the impact of having high serialization costs?
[03:11:21] It's a good question.
[03:11:23] It slows down server rendering.
[03:11:25] If you've seen my crazy death demo, it can slow down on the hacker news when you have all those comments. It can slow down server rendering significantly.
[03:11:37] so
[03:11:38] It's not just a matter of shipping less JavaScript. You also want to save on serialization costs.
[03:11:47] So yeah, I've been thinking about this a lot because we've attacked this a little differently.  We started with server components and actually as soon as I get my mouse back so to speak  here, and we kind of sum up on this, I wouldn't mind showing you some of the latest stuff  that Nikhil has been doing.
[03:12:05] He literally
[03:12:08] Um...
[03:12:10] literally have
[03:12:13] Server components pretty much implemented now
[03:12:15] like incompletion
[03:12:18] I mean, there's still some...
[03:12:21] like small gaps and like we need to get streaming and like that but like we  From like up here like you make a demo. I make a demo perspective. We can do the same thing like I
[03:12:31] We even have the nested routing and all-- basically everything in Next 13.
[03:12:37] We didn't do the cache thing they did, where they patched Global Fetch.
[03:12:41] I
[03:12:42] That's a whole other topic.  Maybe we'll talk about it a little bit later.
[03:12:47] like the mechanics around doing partial
[03:12:51] this
[03:12:53] replacement of server components around components and data refresh and single post, like a lot of really cool stuff. And
[03:13:00] Yeah, I mean, it's still experimental and we're working the APIs and stuff.  So I'm not going to say like, go out today.  We have...
[03:13:07] the React server components, but
[03:13:09] if
[03:13:11] Once we merge in the stuff on some of these experimental branches and can consolidate on the APIs,
[03:13:16] I'd say we'd have an experimental version where any of you could build
[03:13:20] the exact same sort of apps that you could with React server components with SolidStart.
[03:13:26] Um...
[03:13:29] Michael is writing some stuff here. Let's see. Marco has a similar dopt in the current version, vdom_islands. If a data is received through tag parameters from a stateful child, that parent becomes the island root rather than the child.
[03:13:40] Because today Marco doesn't serialize the body content.
[03:13:43] Soon though.
[03:13:47] Yeah, it doesn't serialize a function to render body content. Yeah, that's that's an interesting problem, too. I was talking to Mishko a bit earlier
[03:13:56] Um...
[03:13:57] And when you're like Marco or Quick,  where you can automatically make the islands,  like automatically know the boundaries,  it's very important that when people do stuff  like pass render props, like functions that render,
[03:14:10] that you have a way of like
[03:14:14] scaling it back, like de-opting back up the tree.  Because you need to handle that case.
[03:14:20] Because when I was trying to miss you about him
[03:14:23] serializing functions. And he's like, yeah, because you can pass render props to something that's otherwise basically not going to be needed
[03:14:31] you know, like
[03:14:33] And I was like, but if you pass a render prop, like a function that renders to a component,
[03:14:37] that render prop is gonna run in the client,  you're shipping that JavaScript.
[03:14:41] And he's like, yeah.
[03:14:42] But that's the expectation.
[03:14:47] Like you could be in some code that's like server only  and have like a component that basically needs  to go to the client.
[03:14:53] And then
[03:14:54] If you don't pass a render prop, then that child will be server only.  But if you do, then it automatically becomes ghost the client.
[03:15:01] And like that's kind of automation stuff like Marco has, like Michael was just saying.  And you need to do that because people aren't explicitly putting the islands in.
[03:15:11] um okay it looks like our benchmark finished but
[03:15:14] um
[03:15:17] I
[03:15:18] like,  um,
[03:15:20] Hopefully it makes sense...
[03:15:24] at least what I was suggesting here is that, um,
[03:15:29] if you have explicit islands, like...
[03:15:33] Astro or like React server components, then...
[03:15:38] you can kind of just say like, no, sorry, at this boundary, you can't do that.
[03:15:42] Right. And it like it's not an auto, like it doesn't need to be an automatic do you off.
[03:15:47] It's interesting though, because I was talking to Steve from Builder, and he was kind of concerned that with those kind of patterns,
[03:15:54] uh,
[03:15:56] Okay.
[03:15:57] Okay, I need to rerun one of the benchmarks just for preact.  Looks like when we switched screens we lost it, so just give me two seconds for you to go.
[03:16:04] benchmark
[03:16:06] 03
[03:16:11] I only need it for pre-act.
[03:16:19] Okay, sorry.
[03:16:21] Just do...
[03:16:22] Um...
[03:16:24] Yeah, sorry, where I was getting to is that like,
[03:16:28] His concern was that you start with server components, and then because of these...
[03:16:33] boundary rules, people will just start pulling more and more stuff into client components  just so they don't have to deal with
[03:16:39] these boundaries.
[03:16:41] Um...
[03:16:45] Interesting, it's not just running benchmark 3
[03:16:47] But it's fine, we'll stop this after benchmark 3.
[03:16:50] This is the second one.  Which is an interesting thought and an interesting reflection.  And I think that...
[03:16:58] We'll have to see. I feel like that's just education. I feel like
[03:17:02] if you actually
[03:17:06] I should put like if you actually, um,
[03:17:08] learn the principles here and the rules
[03:17:12] And don't get me wrong, when you have a resumable framework, there's definitely rules.
[03:17:16] too, then this is just less of a concern. So I guess we'll just have to see how this plays out. But
[03:17:22] Um...
[03:17:24] Interestingly enough, Solid has started from the
[03:17:27] Well, not that uninteresting. We started from the partial hydration side like islands like like most of these frameworks did. But then we went straight to server components rather than going through resumability. So I guess we'll have to
[03:17:39] Kind of see how that all ends up.
[03:17:42] ultimately for us
[03:17:44] All right, so where are we?
[03:17:49] All right. Let's...
[03:17:52] Let's run our results, npm run results
[03:17:57] Now, there's going to be a few...
[03:17:59] other things from previous runs that are going to skew it, so I'm going to remove them from
[03:18:04] the results here because
[03:18:06] Um...
[03:18:08] Like...
[03:18:09] I'm running, I expect the results for this run to be worse than my average set of results.
[03:18:15] Because of...
[03:18:17] Yeah, you can see like the ones I didn't run are all up here.
[03:18:21] Um,
[03:18:22] except for React hooks.  So we're going to focus in on stuff we ran this time.  Because I can't...
[03:18:29] I gotta take this with a grain of salt, but um...
[03:18:33] who
[03:18:34] Like I don't know if me trying to stream while doing this just completely I
[03:18:38] removes any value of this and i'll have to do this later but i just i'm just curious  if we can at least see something
[03:18:45] from
[03:18:46] all of this stuff.
[03:18:49] Okay, yeah. Yep. I think this is actually relative to the running conditions. I think this is actually exactly what we'd expect to see. Okay.
[03:19:00] So let's look at this.
[03:19:01] We obviously have the new library wrote, we have Preact with signals, and then we have Preact.
[03:19:06] And then we have vanilla.js as our baseline.
[03:19:08] So createRows is almost identical between
[03:19:12] the two non-VDOM libraries, Vanilla and the Preact.jsx,  the one with signals is actually more expensive to create than the VDOM one.
[03:19:21] Do you see it? It's like
[03:19:22] These ones are 42, this one's 51, and then Signals actually updates it to 58.
[03:19:27] And then when we replace Rose,  it looks like we are taking a bit of hit with our version.  It's 47 versus the 41.8 from Vanilla.  But then compared to...
[03:19:39] Again, Preact Signals is the slowest for replace rows.  Again, this is the extra memory of using reactivity.
[03:19:45] um
[03:19:46] but it is still relatively close.
[03:19:48] But this is where the table starts turning around a little bit.
[03:19:53] Preact VDOM for that partial update.
[03:19:56] 210.
[03:19:57] were...
[03:19:58] The PreactRx and the signals are almost identical.  Basically, this is like, there's almost no rendering overhead here.  This is like pure reactivity, update the individual cells.  You see, vanilla is a little bit faster, but this is a big win over the VDOM normally.  So this is where PreactSignals actually is a real benefit over just using
[03:20:18] Preact plane, right?
[03:20:20] is that you get those fine-grained updates
[03:20:22] at basically the same speed.
[03:20:24] that you get in something that would be more similar to solid.
[03:20:30] Um...
[03:20:31] select row
[03:20:33] Again, vanilla and our version are almost identical.  Signals...
[03:20:37] Improve things but not by much, normal Preact takes the full brunt of the VDOM here.
[03:20:42] Swap rows.
[03:20:44] you
[03:20:45] Looks like they're all comparable, honestly.
[03:20:48] I don't know why-- the Signals version's a little bit heavier.  But I don't know if that's a statistical thing.
[03:20:54] relatively speaking they all swap rows because they're list diffing it's pretty similar and
[03:20:59] Vanilla is obviously faster.
[03:21:02] Remove Row
[03:21:03] This is where memory overhead comes to hit you.  It looks like there isn't that much difference between preact and preact signals, but obviously vanilla and our library are much faster.
[03:21:14] Um...
[03:21:16] Similarly creating many rows.
[03:21:19] Again, Preact signals takes a hit here over Preact, but again, our approach approaches vanilla and speed.
[03:21:27] Pending.
[03:21:28] Same story.
[03:21:30] And ultimately cleaning up the same story again.
[03:21:33] So all in all,
[03:21:35] This is a pretty good run here.
[03:21:38] We'd have to go in and check it out.  But my suspicion...
[03:21:42] looking at these numbers is this is very this is the closest one of my clones to solid I
[03:21:47] We didn't run it with solid.  We have to check it again.  But I actually imagine that this is probably...
[03:21:55] 0.01 or 0.02 slower than solid.
[03:22:00] Because when I run solid on my computer, it's different than the official results.  I usually get a 105.
[03:22:05] five or maybe 106, but it would be close enough  that I'd need to actually
[03:22:11] run it to actually know
[03:22:13] the the difference they might actually even be pretty close to tied so i will say pre-act signal  implementation is a
[03:22:20] Looks to be other than missing on track.
[03:22:22] a fairly good
[03:22:24] core for building a reactive renderer.  Whereas
[03:22:30] Um,
[03:22:30] Yeah.
[03:22:31] But...
[03:22:32] in terms of performance.
[03:22:34] Um...
[03:22:36] Yeah, startup time, hard to tell.  I mean, pre-exit, apparently this...
[03:22:41] Code size.
[03:22:42] Um...
[03:22:45] Preact, our renderer made with signals is smaller than the Preact and the Preact Signals one.  The Preact Signals one makes it a little larger, two kilobytes more than Preact.  And...
[03:22:55] And our version is five kilobytes smaller than Preact, so it's actually smaller than using Preact.
[03:23:01] Um...
[03:23:04] And...
[03:23:05] It looks like
[03:23:07] While the numbers aren't as low as solids here from memory, it's actually pretty close.  It looks like a lot of the cost is brunted by the combination
[03:23:16] Like,
[03:23:17] Preact's reactivity actually is pretty
[03:23:20] is...
[03:23:21] decently I think we get 3.1 or 3.0 on some of these for solid
[03:23:25] Actually, I can put solid back just for this one.  It's not going to be fair for the performance ones,  but we can actually--
[03:23:31] C
[03:23:33] what the memory usage looks like.
[03:23:35] Okay, no, I...
[03:23:37] Yeah, yeah, okay, see, so 3.1, yeah. So the memory usage is almost as good as solid, actually, see.
[03:23:43] Solid over here.
[03:23:45] Um,
[03:23:46] Thank you.
[03:23:46] so
[03:23:47] pretty good. And it's actually the V Dom.
[03:23:50] ones that are critical.  And actually, VDOM plus signals...
[03:23:54] Looks like it's...
[03:23:56] Yeah, I think it's the combination that definitely makes things a bit more expensive.
[03:24:00] You have to think about this.
[03:24:02] Because there's a trade-off here.  I think it's because I have nested computeds  because I wanted to get those fine-grained updates.
[03:24:08] If I got rid of the nested computers,
[03:24:11] then we wouldn't get the fine grained updates.
[03:24:14] because you have to pass a signal all the way to the VDOM,
[03:24:17] Um...
[03:24:20] when actually doing this stuff.
[03:24:27] Right?  Like, and because of that,  if you want to get the fun green updates,  you actually have to put an additional...
[03:24:33] Wrappers, essentially, which ups our memory usage.
[03:24:37] But on the positive,
[03:24:39] we get...
[03:24:40] If we look at the signals implementation here, we get significantly,  I got to remove solid off here. Cause again, this is,
[03:24:48] misleading because solid was from a different run, but you get significantly better update
[03:24:53] and select row performance with signals.
[03:24:56] If...
[03:24:57] So it's like, it's this trade-off.  You either like add more memory,  affect your rendering speed,  and basically...
[03:25:04] get almost no benefit over...
[03:25:08] over using normal
[03:25:09] Preact other than ergonomics, or you optimize for the updates, but then you take a hit on  memory and hit here.  So it's like, it's an interesting trade off.  I think this gets us the best results because the other one actually makes Preact signals  slower than Preact.
[03:25:24] overall, where this one net positives just because of how good those fine grain updates are versus create. But it's kind of like you don't get you get you got to choose.
[03:25:33] If that makes sense.
[03:25:35] All right.
[03:25:37] So I think that's...
[03:25:39] That's...
[03:25:39] Pretty much the thing.  Most interesting thing for me out of this, though, is Preact's actual signal implementation is good.
[03:25:47] It's...
[03:25:48] like the actual memory usage and everything,  it doesn't carry those properties.  Used with our renderer and with our performance  is actually quite good.  It's...
[03:25:57] the combination of using the patterns with the signals with a VDOM that's actually
[03:26:03] causing us the most pain to get
[03:26:06] these small gains in performance in these two markers.
[03:26:11] So yeah, it's interesting.
[03:26:16] Does pre-acne get on track?
[03:26:18] No.
[03:26:19] But it needs on track if it wants to build
[03:26:21] a renderer like solid, but it doesn't need it for itself. For its own purposes, it probably doesn't need it on track, which is why they didn't add it.
[03:26:27] so
[03:26:28] I
[03:26:29] Yeah, I think that's...
[03:26:33] I think that kind of
[03:26:35] summarizes this part of things pretty well.
[03:26:41] For this bench? No, we didn't actually need it for this bench because
[03:26:47] there's nothing like it's called it's simple enough that I didn't do anything bad with it  there's no context there's
[03:26:52] Yeah, for the Spendtruck we did not need Untrack.
[03:26:54] so
[03:26:56] you're going to be fine using PreactRxJSX until you get into like...
[03:27:02] weird states and then you're like, why is my half of my app re-rendering? It's like, because some weird
[03:27:09] Thing is getting subscribed to you didn't expect.  Because you didn't like...
[03:27:13] You weren't as...
[03:27:14] vigilant.
[03:27:15] I think...
[03:27:18] I think context might be one place where it's actually problematic, but I think everything else this is actually...
[03:27:24] This will actually work perfectly.
[03:27:27] fine for simple stuff.
[03:27:30] Yeah.
[03:27:31] Yeah, this is illuminating.  I wasn't sure if the memory usage...
[03:27:36] from preact was actually going to be the like,
[03:27:39] like the signals was going to be the stopper. No, the signals implementation is
[03:27:43] pretty good if I can say so myself.
[03:27:46] It's actually--
[03:27:49] the
[03:27:50] like it's like preacts are already pretty high on memory compared to some of the other virtual DOM libraries, not like not react, but I mean, I'm talking like some of the more performance oriented ones, right? Like,
[03:28:00] If I grab like an inferno or something in here,
[03:28:03] Maybe I don't have it locally if I haven't run it recently to have Inferno.
[03:28:08] I have React Hooks. Where's React Hooks?
[03:28:12] ignore the results where they show up because they're from a different run, one in different condition.
[03:28:18] Let's do this.
[03:28:21] If I look at
[03:28:22] memory usage.
[03:28:25] Um...
[03:28:26] Okay, yeah, I don't...
[03:28:26] Inferno.
[03:28:28] is down here in
[03:28:30] in Preact range, in our range with our new library.
[03:28:35] Um,
[03:28:36] Even...
[03:28:37] Yeah, whereas Preact proper is kind of more like React range on memory usage.
[03:28:44] But it's interesting to me because it feels almost like you took this implementation and added it to this implementation to get those numbers.  It's a...
[03:28:55] memory implications
[03:28:57] for a benchmark like this, which cares a lot about memory, in real world, you probably aren't going to be creating 10,000 items like you get it. It actually has like a
[03:29:05] It has an interesting scaling cost consideration.
[03:29:09] Anyway, sorry, I'm just going to
[03:29:16] - Yeah.
[03:29:17] I think for context to break would require
[03:29:22] .
[03:29:24] It would require a certain situation where you have deeply nested control flow that
[03:29:29] Talking to each other because what context does is it tries to resolve the children it does so recursively and if those somehow all managed to get into the same thing you could do a lot of a
[03:29:37] inefficient re-renders. I'm not going to create the situation for it. I think like a very basic  context thing where the children, immediate children were DOM nodes would not have a problem.
[03:29:49] Um...
[03:29:50] It's just it's one of those edge cases I don't want to
[03:29:53] trying to account for,  um,
[03:29:55] you know, on that. I think if we really wanted to be safe, we'd have to add an untrack
[03:30:00] mechanism.
[03:30:01] which basically snuck peek in, but then you'd have to import stuff from our library rather than from Preact Signals core, which is usually not my pattern. But maybe if we just
[03:30:13] Treat it like a new framework, that would be fine.  Anyways, this is just like playing.
[03:30:17] I'll put up the code so people can inspect it, but you know,
[03:30:21] I think it's cool, at least, that...
[03:30:27] you know,
[03:30:28] we were able to take a different reactive implementation and produce something
[03:30:33] Pretty fast.
[03:30:35] All right. Let's, I think, unless it...
[03:30:40] *clap*
[03:30:42] Someone implemented Untrack? Let me see here if I can grab that.
[03:30:51] Yeah, I'm gonna pull this right over. Ultimately this is the way to go, I think.
[03:30:58] Yeah, so...
[03:31:03] What are we doing here?
[03:31:07] on tracking
[03:31:08] Thank you.
[03:31:11] Oh, interesting. An account for nesting. Very, stay liquid. Very, very smart.
[03:31:19] Because nesting actually matters.
[03:31:21] In some cases, someone called it intracting, untracted. You could actually
[03:31:26] start tracking it unintentionally so you're right you have to keep a counter
[03:31:31] And then...
[03:31:33] replace...
[03:31:34] essentially
[03:31:36] their signal prototype implementation of value with, with,
[03:31:40] with a peak.
[03:31:41] versus a non-peak.
[03:31:43] Yeah, no, this looks good.
[03:31:44] We can incorporate something like this. Thank you for sharing this.
[03:31:48] I'm done with this topic probably for today, but I think that's cool.
[03:32:13] Have I seen which tweet?
[03:32:18] Something's not, I'm missing contacts.
[03:32:25] Oh yeah.
[03:32:40] Yeah.
[03:32:51] The thing is, as I went over earlier, this was actually a super common case when I was doing like media grids like
[03:32:57] Everyone has a need for selection or multi-selection.  And the fact that you can optimize it with a generic API,  I think is a benefit.  It's kind of like,  you wouldn't,
[03:33:04] if you're using Redux and there's like a create selector API, you want to do it. I think the
[03:33:12] But it feels like justified cheating. In short, there's only one selected to be smart.
[03:33:33] Yeah, and then Dylan's mentioned on here.  Yeah, I mean, as I said, I spent years trying to figure this out.  And if you look at Solid, there's like...
[03:33:41] source code from 2018. I actually went through five different iterations on this. I was happy  with this one because it actually gets shipped as a primitive that you can use in any situation.  Solids2do MVC. I don't know if it's still
[03:33:54] check it we use it for editing and stuff like we actually use this mechanism in a in in normal like
[03:34:00] idiomatic demos, not just in benchmarks.
[03:34:04] I get his concern
[03:34:07] But I feel like this is an important part of the reactive solution.
[03:34:12] He probably was like, "Oh, I don't want to implement it."  But when you think about it, this sort of map utility makes a lot of sense. Anyway.
[03:34:20] Thank you.
[03:34:22] Yeah, yeah, no, Andre Diomashi has done amazing work, especially on stuff like he invented the
[03:34:30] as far as I know, like the lit approach, like the tag template literal lit approach.  And he recently put out a blog post that I thought was
[03:34:37] that I thought was funny, um, which was, um...
[03:34:41] What did he do?
[03:34:44] Let me see if I can find it. I follow him on medium, so I'm for sure he's going to be in my...
[03:34:51] like notifications or...
[03:34:53] people I follow, I kind of remember how this works again on medium
[03:34:57] uh...
[03:35:01] Web reflection, there he is.
[03:35:04] Thank you.
[03:35:08] He wrote a whole article they published just yesterday about
[03:35:12] about making JSX more efficient.  And it's funny because I read this whole thing
[03:35:18] And he's like...
[03:35:19] kind of recreating dom expressions but I was like I was reading this whole thing I was like man this  reminds me of an article I wrote four years ago like he's he's just discovering all the signal  stuff and the reactive stuff it's funny because I was trying to tell him about this a couple years  ago and he like he's like
[03:35:32] And I don't think he quite followed what I was saying.  Because he's like, yeah, we can add reactivity to lit.  I'm like, yeah, but you're never going  to get the same performance because you're not doing the fine  grain rendering.  He's now discovered fine grain rendering, I guess,  after the recent--
[03:35:45] - -
[03:35:46] you know,  um,
[03:35:49] like the recent thing, because honestly, his library was actually an influence for Solid because we were doing
[03:35:56] individual create element calls.
[03:35:59] when we originally did it with the compiler. And I didn't know. And then I
[03:36:03] I found out.
[03:36:06] through
[03:36:08] I figured it was stage zero or maybe it was like one of those libraries that was like kind of
[03:36:15] fast when the benchmark came out and I found out like
[03:36:18] from the tag template cloning stuff was actually like faster than I kind of reverse engineered  what they were doing in HyperDOM and Lit and then that's how Solid's stuff worked but it's
[03:36:30] It's interesting to me because this article is exactly like the type of thing I would  have been writing back in my old medium days.
[03:36:38] So it was kind of like a throwback
[03:36:43] What if you ever said how I wrote the fastest JavaScript framework?
[03:36:48] how we wrote, how I wrote, how we wrote a framework again.
[03:36:52] Yeah, same kind of...
[03:36:55] Yeah.
[03:36:57] February 9, 2019.
[03:37:00] That's my birthday.
[03:37:02] I
[03:37:03] Anyway. Uh...
[03:37:06] I call it the signal revolution, yeah.
[03:37:08] okay so we're kind of done on this stuff uh for now let's get set up for uh
[03:37:19] Let's get set up for...
[03:37:23] This Week in JavaScript and other topics.  Like, I was tempted to pull it out of This Week in JavaScript...
[03:37:30] But I literally have been
[03:37:34] I've literally been in...
[03:37:35] Poland, like this
[03:37:37] this whole week, so I have to admit I haven't been keeping track of stuff.
[03:37:41] as much as I usually do.
[03:37:44] so
[03:37:45] Let's see if we can get set up. Just give me a moment here. Let's close some extra windows.
[03:37:50] We've...
[03:37:51] We've taken in the speed of fine-grained rendering with Preact signals.
[03:37:55] and we can acknowledge that Preact signals are
[03:37:58] seem to be a pretty fast, pretty memory efficient
[03:38:02] signal representation. Okay, let's do this.
[03:38:07] Let's just close some stuff down.
[03:38:10] you
[03:38:12] All right.
[03:38:16] Close this down...
[03:38:20] and get this set up in just a second.
[03:38:24] Probably close this down too.
[03:38:27] Alright.
[03:38:29] Thank you.
[03:38:31] Thank you.
[03:38:32] All right, sorry, just give me a second to get all set up.
[03:38:39] Because...
[03:38:40] Yeah, like this is a week ago.
[03:38:44] Yeah, and I'm like pretty much straight Poland, right?
[03:38:47] Um, let me...
[03:38:51] Actually,
[03:38:52] Grab discord
[03:38:55] No, not there.
[03:38:56] Shk.
[03:38:57] I want to actually
[03:39:02] I want to do one more thing before this week in JavaScript.
[03:39:06] I want to show off one quick thing.
[03:39:09] Which is...
[03:39:12] Witches, witches, witches.
[03:39:18] Um...
[03:39:20] Sorry, there's so many messages on Discord, I want to actually get to the one that I wanted to get to.
[03:39:25] I've got one more demo that I want to show that I thought was really quite cool.
[03:39:31] I've been having a hard time keeping up with stuff because I've been, as you can imagine,
[03:39:36] um
[03:39:37] working in different areas
[03:39:40] Polish hours and stuff, but
[03:39:44] Nikhil shared this with me and
[03:39:47] Does anyone recognize...  Someone's asking a Hacker News demo?  No.
[03:39:51] Does anyone recognize, has anyone seen this demo before?
[03:39:55] I've seen this demo before.
[03:39:56] Um,
[03:39:58] This is a...
[03:40:01] This is a pretty cool demo.
[03:40:03] And I remember the first time I tried it and I tried it on stream and some of you might remember this demo, but
[03:40:09] Essentially...
[03:40:11] In this demo, you can kind of
[03:40:14] navigate around you can I don't know what's wrong with this this one's empty I'm maybe
[03:40:19] edit some notes, delete some notes.  I'm just gonna clean this up again.  Although some of these look like they're around well,  but like essentially you can see a note on the side,  you can expand the text in it.
[03:40:29] you know you can go in here you can view it you can edit it you can do stuff like
[03:40:34] add funny characters on the end, and you click done, and then it shows up on the sidebar, and you can do it, and
[03:40:44] This is a pretty typical kind of notes app.
[03:40:49] But what's interesting for me is, I don't know, I haven't actually looked at this demo thing. This probably has more JavaScript in it than I would expect, but let's see what...
[03:41:00] Let's see what our network tab gives us here on a page refresh.
[03:41:04] Yeah, okay, so this still has 20 kilobytes of JavaScript on this demo. So I'm interested in
[03:41:10] where this fits in, but the cool part about this demo, and I think it loads more here,  yeah, loaded a big chunk there, 15 kilobytes, is...
[03:41:20] what this demo is actually
[03:41:23] Doing.
[03:41:24] because
[03:41:25] In a sense...
[03:41:28] you know
[03:41:30] So what? You know, it's just a dumb notes demo and it's 20 kilobytes, doesn't seem that much out of range.
[03:41:36] But when you consider the cost of stuff  like the editor and whatnot,  this demo actually...
[03:41:42] is fully server component demo, which is
[03:41:46] actually
[03:41:47] kind of cool because it means that
[03:41:49] stuff like the data serialization of
[03:41:54] these comments and stuff, like the double data problem,  just doesn't exist.  Like you're not gonna find this outside of the HTML here.  There's no like,
[03:42:02] solid dot JSON or whatever with all the data for this and I
[03:42:07] What I always liked about this demo is that the editor...
[03:42:11] is actually like basically the preview,  like you have the ability to have something  that's like both client and server component in this demo.  But let's actually look at what happens here.  Let's see if I get in here into this,
[03:42:25] link and then go into this display. Am I in the wrong one? I want to get into this one.
[03:42:30] Why is this not showing me the right stuff? Header...
[03:42:34] because this is server rendered. Title is super long, server rendered.
[03:42:39] Oh, it's because I'm like...
[03:42:41] I like the one you're on, okay
[03:42:43] Let's go here.
[03:42:44] Open for preview.
[03:42:47] This is something very cool, right? Let's see. Can we make it cooler?
[03:42:53] Can we...
[03:42:54] make it cooler still.
[03:42:57] And when I press done here,
[03:43:00] What I expect to happen
[03:43:02] is you notice the whole page didn't actually end up unloading, it actually just ended up replacing the text here.
[03:43:07] um
[03:43:09] This is actually showing off DOM level
[03:43:13] data diffing. I believe it's using a library from
[03:43:17] from a
[03:43:19] from Nate from Astro actually using Micromorph here as the mechanism of doing not only partially switched routing, which we talked about, but partially switched, uh, um,
[03:43:31] partially switched updates.  So this code updated from a network request
[03:43:37] On this...
[03:43:38] to the server, we actually didn't ship this component
[03:43:42] like this text component isn't actually shipped to the browser
[03:43:46] What we have here actually is if we look at the Fetch XHR request,
[03:43:52] what you're going to actually see is we're going to post...
[03:43:54] the node ID
[03:43:56] in the body.
[03:43:58] Here.
[03:43:59] And it's going to respond
[03:44:01] With the updated...
[03:44:03] partial page
[03:44:04] um
[03:44:05] They get stiffed.
[03:44:07] So you see some HTML here and stuff.  So what's cool is this actually happens in a single post.  So you actually go,
[03:44:14] post
[03:44:16] and responds to the next page.
[03:44:19] But as I said, we still have all the partial routing stuff we showed before.  So this actually finishes the story.
[03:44:26] Technically, this...
[03:44:28] basically...
[03:44:29] does what Server Components does.  I can't speak too much about size, to be fair.
[03:44:35] If I remember the original React demo for this,
[03:44:39] And you can see
[03:44:40] here, like there is a cost that we are
[03:44:45] I think you'll... there is a cost that comes with this stuff. Because we've got a few different islands here. We have something for dark mode.
[03:44:54] and we have context and like there's there is some like bundle things but what I want to draw your attention to is that
[03:45:02] These are the components that we need to be interactive on this page.
[03:45:05] Right.
[03:45:07] And they're kind of all shipped here.
[03:45:10] Then there's basically entry client,
[03:45:13] and web.
[03:45:15] which are basically the framework entry client.
[03:45:19] And so basically like there's some,  all the,  all of solid,
[03:45:24] and all of this server component stuff
[03:45:27] is...
[03:45:28] is here. So basically,
[03:45:32] I think there's simpler demos, you wouldn't actually bring all this code, but basically like 10 kilobytes of JavaScript
[03:45:38] And is all you need to get started with our server component solution, essentially, it looks like.
[03:45:44] 10.9 in this case.  So basically for 10 kilobytes of JavaScript,  we have a full server component solution with routing.
[03:45:53] and with mutation.
[03:45:55] I actually kind of almost want to look at the source code, because I haven't yet. Because Nikhil told me he was actually using Solid Start's
[03:46:06] Um...
[03:46:08] What is he? He was using Solid Start's
[03:46:12] Um...
[03:46:13] Let's see, I actually don't know what branch we're on.
[03:46:16] This is my problem probably, is it notes?
[03:46:20] using Solid Start's actions to actually be able to do posts.
[03:46:24] If we actually look at the source code here,
[03:46:28] Um...
[03:46:29] He's got a few...
[03:46:31] components.
[03:46:33] Yeah, we need to fix this up. I agree.
[03:46:36] But
[03:46:37] Thank you.
[03:46:39] *sniff*
[03:46:42] I don't know what this is.
[03:46:43] That's interesting.
[03:46:45] Peace.
[03:46:46] Oh, I'm in there, I'm like in there.
[03:46:48] Thank you.
[03:46:50] I'm like in I'm like in I need to actually go into the example and like I'm looking at
[03:46:55] I was looking at the wrong example. I'm so sorry. Okay. Let's look at what the end user actually  writes. Okay. Here we go. Components. Here we go. This looks, I was looking at the docs.
[03:47:04] Um...
[03:47:05] That's how to table contents and all that stuff.  I was looking at Solstarts docs.  Okay, so we have a sidebar, edit component.  What's our edit button?
[03:47:14] Yeah
[03:47:17] Right, because we copied this example from...
[03:47:19] Facebook.
[03:47:21] so
[03:47:21] proper copyrights good work Nikhil
[03:47:25] Um,
[03:47:26] So
[03:47:27] Anchor tag. Okay.
[03:47:29] What I want to know is
[03:47:30] I want to see the--
[03:47:33] Edit button, notelist, search field, sidebar, cybernode.
[03:47:36] Text with Markdown, this is probably
[03:47:39] This is interesting. What do we got here?
[03:47:43] Oh, interesting.
[03:47:44] I guess you're just kind of playing around with context, whose client.
[03:47:55] Alright.
[03:47:58] But I was interested in seeing
[03:48:01] is
[03:48:04] this figures out from the location if it's active
[03:48:08] We're using transitions here.
[03:48:15] Sidebar note.
[03:48:17] Amen.
[03:48:18] Right, right. So it...
[03:48:20] The server component has the sidebar note component,
[03:48:23] whose children,
[03:48:26] are here and expanded children here,  which is kind of smart because these get server rendered  and then they get injected
[03:48:32] through
[03:48:34] They get injected through as stale server
[03:48:38] And that's why we don't need to serialize any of this data, right?  We get to skip.
[03:48:44] the hydration of these pieces, even though they get passed into the client component here.
[03:48:49] This is cool, although this is not, and all this code runs on the server, but what I actually wanted to see
[03:48:56] was...
[03:48:57] how the...
[03:49:00] It was actually how all the...
[03:49:03] Thank you.
[03:49:03] Not this one, sorry.
[03:49:06] was actually how all the, like we haven't finalized APIs.  We're just playing with stuff right now.
[03:49:11] But
[03:49:11] I was kind of curious, like if I got this page
[03:49:16] Am I looking at the... I'm looking at the... I shouldn't be looking at the sidebar, I actually want to know...
[03:49:20] Not the note list.
[03:49:21] search fields
[03:49:24] Go to routes, you know, you're right.  I need to look at the pages here.
[03:49:29] Notes note, this is what I want. Yes. And I'm in edit, notes note slash edit.
[03:49:34] And I go into the note editor,
[03:49:36] which is a client component.
[03:49:38] Which...
[03:49:41] create a server action, same pattern that we've been using, is saving, save note,
[03:49:49] Then it's got some logic.
[03:49:51] about this? I guess this is for creation so when you create you gotta do a
[03:49:58] You've got to hit...
[03:49:59] basically
[03:50:00] Oh yeah, are you using Cloudflare here?
[03:50:03] Mm-hmm.
[03:50:04] so it's a creation you do this and redirect to the note  otherwise you edit
[03:50:10] the existing note. So this is just using posts and server actions like you're familiar with. Delete note, server action, and then
[03:50:21] And then
[03:50:23] In here,
[03:50:25] Yeah.
[03:50:26] where preview
[03:50:28] if not as draft, delete.
[03:50:35] Do do do do do do do do do do.
[03:50:39] Body, set body, current target.  Okay.  Yeah, I mean, I'm going to have to probably look in more detail here.  But, like, essentially, we use our same...
[03:50:47] mutation mechanism to handle posts
[03:50:50] And...
[03:50:50] it just updates using the server component mechanism.  So it's kind of funny.  It's like an old school MPA, right?  Like you go to a page, you press post,  but then the page doesn't refresh  and you get the...
[03:51:02] You get the part of the route that updates and then it
[03:51:05] It preserves the islands and diffs the outside of the serving phone stuff.
[03:51:16] We wanted to, with this, I mean, it's funny in this context, but we went with the dollar  sign APIs because we want to make it very clear that this gets statically hoisted, i.e.
[03:51:28] don't behave like you expect. You can reference global stuff, but this is at a global scope.  We did take this convention to a certain degree from QUIC.
[03:51:36] as an indicator
[03:51:37] But
[03:51:39] Mm.
[03:51:41] Yeah, so we're still working on APIs for the server component stuff specifically, but it's mostly because if you add a convention like this, it's possible to make your own dollar sign functions. That's what we were thinking.
[03:52:01] I see. Yeah. So this is not using the actual form version, like a progressive enhanced form, but essentially like it's still using the action mechanism and.
[03:52:11] Yeah, this is very cool. As I said, this is hot off the presses. I just wanted to kind of show kind of the work we've been doing. We've been making incredible progress and getting, um,
[03:52:19] server components into SolidStart and
[03:52:24] As I said, they're mostly functional.
[03:52:26] we need to figure out what patterns we want to do for APIs.  And I think one of the hardest challenges,  and probably what's going to delay things  because I dragged my feet is,  I don't want to get into the data fetching API zone,  like talking about async components  and all the stuff that they've been talking about next  until I figure out,
[03:52:40] resumability, because I think with resumability,
[03:52:44] that changes
[03:52:47] the rules for how client fetching works. And I think so.
[03:52:51] I have to in order to bridge the gap. I need to put more thought into that because I
[03:52:56] Ultimately, what you want is this.
[03:52:59] And then you don't want to hydrate
[03:53:01] Um,
[03:53:02] when you get to the next partial.  Like...
[03:53:06] It's, I mean, at this point, you're already getting like 90% of the benefits, right?  Because like when you, if you preserve these islands, then you don't need to hydrate them.  They're already live.  And then like.
[03:53:16] a new navigation, you're only going to hydrate those little pieces, but you can see that wouldn't it be cool if you could also just not hydrate?
[03:53:23] So like
[03:53:24] like it's the last stage optimization, although it's probably one of the harder ones to do, whereas
[03:53:30] This already lets you shave a lot of code.  I'd be interested, I guess, at some point to understand what the...
[03:53:36] what the single page app version of it.  Because in solid, it's not uncommon to create single page apps that are like,
[03:53:42] less than 20 kilobytes like the Hacker News example, but my suspicion is that this is
[03:53:47] This demo in single page app mode would be...
[03:53:51] um
[03:53:53] significantly larger, maybe in the 30s probably, maybe 35 kilobytes.
[03:54:00] So this example may be
[03:54:03] isn't as
[03:54:06] code reducing as some of the hacker news and stuff, because it's a little less static. But this example probably
[03:54:12] It has a lot of interaction points.
[03:54:14] Yeah.
[03:54:15] It's interesting. We'll see how this scales.
[03:54:17] That's why we're doing this.
[03:54:25] Anyway, yeah.
[03:54:28] I thought this was cool. I wanted to take a look at it.
[03:54:33] Hmm, looks like we have a bug somewhere.
[03:54:39] Okay, so...
[03:54:43] Now that we've shown off server components in Solid,
[03:54:47] Basically,
[03:54:49] solid server components all in about 10 kilobytes. So you're not going to take any kind of hit
[03:54:55] Um
[03:54:56] from like,
[03:54:56] page load or whatever for this
[03:55:01] Let's move on to this week in JavaScript.
[03:55:06] Okay.
[03:55:09] Let's get everything all...
[03:55:11] Prepped out, okay.
[03:55:15] um...
[03:55:18] Side note before we get into this, got to thank Jay Larkey or Parasocial or whatever you want to go by today.
[03:55:27] found this great
[03:55:28] found the link to what I was talking about in the last video, the interview between Sean and Sunil.  And I love this whole interview, but he found the part where he's talking about server components, about SEO or SSR or whatever.  Facebook just really liked the user experience.
[03:55:46] or the React team rather, really like the user experience,  and the idea that we could simplify the dev experience.  I know people are still wrapping their head around server components,  but I think ultimately what you should be thinking is,  if you liked what Remix has been doing,
[03:56:03] It's more in that vein of things, except
[03:56:07] They're trying to do it in a way that doesn't make it feel like you're losing anything from a single page app.
[03:56:12] Whether that's achieved is a whole other thing, but I just wanted to kind of, um,
[03:56:17] point out this article before we actually got started. Okay.
[03:56:20] Cool.
[03:56:21] Let me just open up a couple more...
[03:56:24] tabs
[03:56:25] I honestly,
[03:56:29] Amen.
[03:56:31] I don't know if I...
[03:56:34] uh...
[03:56:35] have actually much solid news. I've been so
[03:56:38] out of it
[03:56:39] um this did get announced
[03:56:41] But yeah, let's.
[03:56:42] I'm just going to
[03:56:44] Yeah.
[03:56:48] Okay, I've got a couple things. We'll just keep that there. And then we've got one more thing here.
[03:56:59] Mm-mm-mm-mm-mm-mm-mm.
[03:57:05] Actually, no, we don't have anything here.
[03:57:08] I thought I bookmarked something. Okay, cool. So then we're pretty much ready to go.
[03:57:15] Thank you.
[03:57:19] All right, so yeah, let's see if we can get this going. Let me just zoom in one more.
[03:57:28] One more? Okay, yeah.
[03:57:30] Get there.
[03:57:34] Thank you.
[03:57:34] Alright.
[03:57:35] Okay.
[03:57:36] I know how I'm going to handle this.
[03:57:39] And let's get ourselves ready here.  Okay, StreamYard.
[03:57:44] Checking Twitch. Everyone doing still good in Twitch?
[03:57:50] "Sent me in."
[03:57:53] Sent you an intro for a sequence, it's like 12 seconds long.
[03:57:59] Okay, sorry, fuzzy. I'm just catching up on...
[03:58:03] and stuff here
[03:58:05] Um...
[03:58:12] Thank you.
[03:58:13] Oh, that's cool. I don't have audio playing through
[03:58:16] through the mic, but let me see if I can
[03:58:19] Oh.
[03:58:20] Like how to show this without...
[03:58:23] without showing this
[03:58:36] Thank you.
[03:58:41] - Yeah.
[03:58:41] I'm sorry.
[03:58:43] Oh wow, that's cool.
[03:58:46] um
[03:58:47] Thank you.
[03:58:48] I'm too clumsy to be able to pull that off probably right now, but...
[03:58:51] That is definitely cool.
[03:58:58] Thank you, Fuzzy. I've actually been cutting out the video, so maybe when I actually
[03:59:03] Like...
[03:59:03] um,
[03:59:05] edit them in or something, we could do something like that.
[03:59:08] I'm just so bad at this stuff, but that's very cool.
[03:59:13] Yeah, there's like music and everything.  You're not hearing it, but it's cool.  Yeah.
[03:59:18] All right.
[03:59:19] All right.
[03:59:21] Um, alright.
[03:59:26] Right.
[03:59:26] Good.
[03:59:27] All right, here we go.
[03:59:28] I'll take a swig of water.
[03:59:32] Hmm, no.
[03:59:43] All right.
[03:59:44] All right.
[03:59:47] Yeah, I could upload it right into StreamYard and make it part of my show. Yeah, that's
[03:59:51] That's a cool idea. All right.
[04:00:02] set myself up here
[04:00:14] Let's talk about this week in JavaScript.
[04:00:20] There's been a few things going on for this week in JavaScript, but I have to admit I wasn't really near any of them.
[04:00:26] Um
[04:00:28] For me,
[04:00:29] I actually was traveling
[04:00:31] to a conference in Poland. So the only thing for me where this week started was right before I left, I saw the announcement from NordVPN that they launched a site powered by Astro and Solid.
[04:00:44] which is pretty cool as we know.
[04:00:46] those two are blazingly fast friends.  And that combination is...
[04:00:50] is pretty powerful way to build a variety of sites. So I was pretty stoked to see that.
[04:00:55] Um,
[04:00:56] Definitely very cool, but as I said,
[04:00:59] I spent most of my time
[04:01:02] essentially
[04:01:04] uh,
[04:01:05] In Poland.
[04:01:08] Which means I missed a lot of the really cool stuff that was going on
[04:01:12] Yeah.
[04:01:13] In the case of Solid, we've just been seeing a lot of great work in libraries, stuff like ESLint.
[04:01:19] Plugin which sorry I didn't stop on it here, but this is pretty big  It's been in the works and it's worked for a while, but really want to highlight that it's really progressed over the last couple months  um
[04:01:31] So it's now part of our official solid community.
[04:01:35] ensuring that it will be maintained into the future.
[04:01:40] It's very helpful because as I said, it helps detecting when you might be breaking reactivity and whatnot.
[04:01:45] Um...
[04:01:48] other thing was
[04:01:50] Some larger apps are getting ported over to Solid yet.  I honestly don't know what this app is, but it...
[04:01:57] Someone who reported a 155 page
[04:02:00] app into solid.
[04:02:02] seems like a considerable effort of lifting and
[04:02:06] They still like us at the end, so I'm pretty happy about that.
[04:02:12] React Finland also finally posted
[04:02:15] up the individual shots for my talk that I gave last month.
[04:02:19] But honestly...
[04:02:23] I'm just... The big news this week isn't my trip to Poland or...
[04:02:29] I see lots of shots from Poland.
[04:02:32] Um
[04:02:33] It's really the next thing.  Actually, you know what?
[04:02:35] I can show this off.  I think this is kind of cool.  Uh,
[04:02:39] I did--
[04:02:40] get an award in Poland.
[04:02:43] Cheers.
[04:02:44] Kind of cool.  They actually had this maid...
[04:02:50] I made it in class.
[04:02:52] Honestly
[04:02:53] It's awesome to be recognized for work in the community. So...
[04:02:57] Pretty cool.
[04:03:00] Thank you.
[04:03:00] And, but yeah, I mean, who am I kidding?
[04:03:06] a lot of next conference this week happening at the same time and
[04:03:10] Although I...
[04:03:11] I'd already agreed to go to React Poland before this all came up.
[04:03:16] So I
[04:03:18] ended up not going to NextConf like I would have probably otherwise have. But
[04:03:23] It was definitely been kind of interesting...
[04:03:28] conversation and I think
[04:03:31] That's probably...
[04:03:33] what the focus of this week in JavaScript is going to be.
[04:03:35] Um,
[04:03:37] Thank you.
[04:03:40] Thank you.
[04:03:41] -
[04:03:44] The...
[04:03:46] Most of the big features in Nexcomp were
[04:03:49] announced during the keynote session, which I recommend everyone check out.
[04:03:53] essentially uh they they framed it that they focused on three areas right of improvement  they focused on like the build tooling they focused on the framework and then they've
[04:04:03] focused on like the
[04:04:05] component.
[04:04:07] I don't know what else to call it, but like stuff like handling images and fonts and stuff properly.
[04:04:16] And in all three areas, they announced some pretty incredible stuff, admittedly, which
[04:04:23] both on the build side, Turbo Pack,
[04:04:27] which is kind of seen as a potential
[04:04:30] successor to Webpack, they basically got Tobias
[04:04:34] from Webpack working for sale a few months back and you're probably going,  "Oh, what's going on with that?" Well, now we know.
[04:04:41] And it's posted some pretty impressive performance numbers, uh,
[04:04:46] There is a decent amount of chatter about that, actually.
[04:04:51] which
[04:04:52] Honestly, it looks like I didn't actually clip for this.
[04:04:56] But...
[04:04:58] Let me see here if I can find it right off the bat. I think Evan Yu.
[04:05:03] Um,
[04:05:04] has been talking about a bit.  Because one of the comparisons in this was to Veet.  And...
[04:05:10] The comments was like, it's seven times faster than...
[04:05:15] than beat.
[04:05:16] and that
[04:05:18] or sorry, 700 times faster than the webpack  and 10 times faster than beat.  And...
[04:05:23] The original response was just like, okay, well, if it's really fast, we should look into it.
[04:05:28] And...
[04:05:30] Evan did look into it.  So I don't know...
[04:05:33] How...
[04:05:35] Let's...
[04:05:36] I think this is probably worth bringing up because people see the headlines.  They don't always see like the aftermath.  So...
[04:05:41] Um,
[04:05:46] Yeah, interesting.
[04:05:50] Essentially, when you're comparing compiling, the comparison they did at NextConf compared
[04:05:59] Mm-hmm.
[04:05:59] and
[04:06:00] next 13, next 12, VEAT and next 11.  One of the first observations on the comparison is that next 13 actually uses server components,
[04:06:12] So essentially...
[04:06:16] It's not quite comparing the same things.
[04:06:22] Someone's saying they got a new version.
[04:06:24] of the tweet here. Let's see if I can pull this one over.
[04:06:31] I updated VeeT versus Next Turbo by using SSCC to transform refresh for VeeT to avoid confusion.  I have deleted the previous two tweets with updated numbers.  Okay, here we go.
[04:06:44] I see.
[04:06:48] Basically, there's a
[04:06:51] there's an optimized transform for React, which isn't present in
[04:06:55] the others and in.
[04:06:57] So, yeah, the numbers are much more comparable in the scale. And this is probably a fair thing. Basically, individual nodes
[04:07:08] that are isolated
[04:07:10] kind of test
[04:07:12] you do see some more benefits from next approach.
[04:07:15] It's almost double.
[04:07:17] but for like a whole root kind of scenario, it's, they're almost identical.
[04:07:25] Helps a lot in the root component because the file is big. Previous cost is 300 milliseconds  in Babel Transform alone. This makes Vite almost exactly the same speed for the Turbo Pack.  Interestingly in the leaf scenario, Turbo Pack is still 69% faster. This entails VHMR actually  caught up with Turbo Pack as the file gets bigger and she's scaling better in larger apps. Hard to say for sure
[04:07:43] But...
[04:07:44] There we go.
[04:07:45] Okay, so...
[04:07:46] Maybe not.
[04:07:47] 10x.
[04:07:54] but I mean,  that's kind of beside the point.  I think,  I think it's good to have,  you know,  different competition in this area.  Um,
[04:08:02] Thank you.
[04:08:03] obviously Vercel's
[04:08:05] needs to up like
[04:08:08] Next uses Webpack and they need to move from Webpack.  And I think this might be like...
[04:08:14] a reasonable,
[04:08:15] path that they keep
[04:08:16] you know, TurboPack similar to Webpack, then it's like a more natural flow than going to something like Vite, which is a whole other
[04:08:23] ecosystem of bundling. I'm a big fan of VEAT, but I can see why they invested in this.
[04:08:28] So anyways, I'm glad for this clarity.  This helps a little bit and kind of making sense of some of the stuff.
[04:08:39] Right.
[04:08:40] To be fair, with any of these benchmarks, you're supposed to picture things scaling up an incredibly large amount.  And this is for the developers. This doesn't affect end users at all.
[04:08:49] Right?
[04:08:50] Um,
[04:08:53] Turbo Pack is also new. I think it's very low inversions. There's still questions around plugin system. There's how that's going to work. Vite's strength is the plugin system. I did a whole talk about how awesome that is. I'm sure this will all come in time.
[04:09:07] This is just kind of get your mouth wet.  And I think they I think they succeeded at this.
[04:09:12] Um...
[04:09:14] So,
[04:09:15] But this isn't really what I...  It's not where I live, right?  You can tell I'm not a build tools kind of person.  So...
[04:09:24] I was much more interested
[04:09:26] in the React
[04:09:27] side of things because we talked about this a bit last week.
[04:09:32] It's hard to gauge
[04:09:34] because so few people have used it. How much people are getting into server components?
[04:09:39] and how much like that fits in their patterns and in their thinking
[04:09:46] um...
[04:09:47] And
[04:09:48] That definitely...
[04:09:50] is something that I'm very interested in.
[04:09:52] Quick question to answer.  Solid uses Vite.  Yes, almost all our stuff is Vite.  I mean, we have a web pack, you know, set up and a few other ones,  but pretty much our starter templates are in Vite.  Solid starter is in Vite.  We're pretty much full Vite.
[04:10:07] And yes, if they want to use Turbo Pack under the hood, they could.
[04:10:14] So yeah, I mean, Vite is like a meta bundler. I don't know what else to call it. It might be interesting to see how these technologies align in terms of boundaries.
[04:10:23] This is a good question because obviously the question is like, how does TurboPack play into TurboRepo?  And this actually came up during the Q&A session.  And like today, like the story is...
[04:10:33] It's still not fully fleshed out, but you can tell there's thinking going into that because it kind of...
[04:10:38] changes the flow.  And I'm wondering,  with these build tools,  there's a theory a few years ago,  I forget who said it,  that they're all kind of like,  I think it's probably Sean,  SWIX,  that they're all kind of
[04:10:51] bundling together, you know, to try and like Voltron up to the ultimate platform.  And that was like the goal of like Rome. I don't know if anyone remembers Rome.
[04:10:58] but like
[04:11:01] I think it's interesting that...
[04:11:04] I've always had issue with these kind of approaches because they always like too specific. They're like,
[04:11:09] I build stuff the way React works and this is a huge blocker because then someone else has to  build something else when it doesn't work for them and I've had a terrible time with tools.
[04:11:19] But VEET!
[04:11:21] started from a framework agnostic mentality right from the beginning.  They weren't like, okay, we're going to build for React and figure out what else is.
[04:11:26] Like that pattern has never worked well for solid.  Someone built something for React, usually it never gets solid compatibility.
[04:11:33] um or you know certain other frameworks but evan
[04:11:36] did not start, like he might've started viewish,  but like very quickly went framework agnostic and Vite
[04:11:42] shows for that. So for me, I think that's
[04:11:45] If you want to look at the success of the
[04:11:47] meta bundler, that's where I would think about on that side. Because meta bundler can always  consume any other bundler, if it makes sense.
[04:12:03] I mean, do they compete?
[04:12:06] Maybe. I mean,
[04:12:08] It depends. Like,
[04:12:09] They only compete if Turbo Pack
[04:12:12] actually offers a plug-in system, easy integrated SSR for any framework.
[04:12:20] Yeah.
[04:12:21] We'll see.  I'm interested...
[04:12:24] you know,
[04:12:26] if Turbo Pack
[04:12:27] becomes that
[04:12:30] Meta bundler as I'm calling it.
[04:12:41] Is there a DOM emulator I'd recommend for SSR?  Sorry, just a random question came in and it caught my attention.  Um...
[04:12:46] - Yeah.
[04:12:48] Ugh.
[04:12:53] Depends on what you're looking for.  If you're looking for compatibility,  you still probably want to use one of the bigger, slower ones.  There's stuff like LinkDOM, which has better performance.
[04:13:01] But generally speaking, if you're doing SSR,
[04:13:04] Dom emulation is not where you want to be at all.
[04:13:12] Yeah, so that's the thing.  If Turbo Pack brings in too many other things,  then it affects stuff.  There's so many different aspects of...
[04:13:22] performance here. There's like
[04:13:24] Install performance.
[04:13:26] build performance, dev performance.
[04:13:29] And...
[04:13:30] than end user performance, which is the only one of the four  that I actually care that much about, which is why this subject I'm kind of like,
[04:13:39] I know, it's so funny. If the end user is going to suffer a couple hundred milliseconds, I'd go to war for them. But if the developer has to, I'm just like, I could care less. Go away.
[04:13:53] .
[04:13:57] Yeah. So, there's a...
[04:13:59] There's also, let's see here.
[04:14:07] YouTube likes to pull stuff out. I think Twitch doesn't, but...
[04:14:16] Interesting. Someone's trying incremental stuff with Vite. Yeah, I mean, this is the best part about innovation, right? You start kind of like on one path and then someone else is like, hey, we can take a bit of that, you know?
[04:14:27] Let's see how we can play that in. As I said, Vita already has such a great, like,
[04:14:33] DX story that like looking into the stuff's kind of interesting and as I said any product takes time to stabilize and
[04:14:40] you know
[04:14:42] So.
[04:14:44] Yeah, I mean, as I said, I don't really, I'm sorry.
[04:14:48] I- I...
[04:14:50] This kind of stuff doesn't impact me as much, so I don't care as much. But I think this is good news for those who care.
[04:15:07] all right so let's see here
[04:15:11] - Thank you.
[04:15:12] Continue the conversation though.
[04:15:16] Um...
[04:15:18] Thank you.
[04:15:19] Because as I said, it wasn't this stuff that I actually
[04:15:23] was interested in. I think it's cool that we're seeing innovation on the Buildtools side.  I think it's actually also really cool that we're seeing innovation on...
[04:15:34] uh...
[04:15:35] the like fonts and images side, like Vercel's been working a lot with the Chrome team on that.
[04:15:42] But I want to talk about something else, because essentially...
[04:15:48] there's been conversations and it all kind of comes down to this
[04:15:53] Let me see if I can find it. I've been just chaining conversations here. I want to get back to what I talked about last week. I told everyone that
[04:16:00] that I was trying to gauge React Server Components
[04:16:02] Because...
[04:16:03] As you saw a few minutes ago, we've
[04:16:05] We basically implemented
[04:16:07] fully implemented React server components in solid, so solid server components, you know,
[04:16:12] Um,
[04:16:13] And...
[04:16:14] I'm not sure about the APIs.  I saw some of the RCs.  And I was saying last week, I was like, OK.
[04:16:21] This RFC just dropped.
[04:16:23] So I was like,
[04:16:25] Some people probably knew about the content of it, but from a general public standpoint, this is just starting to come together.  And I'm like, I know NextConf is next week.
[04:16:36] So, like...
[04:16:38] And I know they probably want to release something  around server components, so like
[04:16:43] Like, it can't be this, right?  Like, that's too quick.  Like, you drop an RSC and then you release the thing a week later.  Like, that can't...
[04:16:49] Like...
[04:16:50] I was like...
[04:16:53] I was kind of curious, like,
[04:16:55] Is that going to be the announcement?
[04:16:58] And then I was like,
[04:17:00] I...
[04:17:00] I didn't know the question answer.  I'm like, how closely are the other frameworks working with React now?
[04:17:06] You know, like if like...
[04:17:10] If
[04:17:11] Basically, you can...
[04:17:12] Like, obviously, Nex has been implementing this before the RFC ever got posted.  So, like, was everybody...
[04:17:19] implementing this
[04:17:20] before the RFC got posted. I wasn't sure. So I was like, I really want to watch NextConf to get a gauge. And then I was like, but we also should look at other server component frameworks, things like Hydrogen, maybe Gatsby, let's get a gauge on them. Because
[04:17:33] We haven't seen them talking about these kind of APIs.  I've had Hydrogen on stream.  And then finally, I'm like, okay, like, I haven't heard anything from Remix for a while.  I said,
[04:17:44] But except for, strangely enough, whenever I talk about Preact, the Remix guys are promoting it.
[04:17:50] is there something going on there?
[04:17:54] and
[04:17:55] I took all of those thinkings from last week and took them into this week.
[04:18:00] Thank you.
[04:18:01] And...
[04:18:02] kind of wanted to like,
[04:18:05] I wasn't sure what this meant.
[04:18:08] And...
[04:18:10] And
[04:18:11] This is generally of concern to me because
[04:18:15] Both as a framework author that cares about
[04:18:18] these features and this technology, but also kind of like trying to get a gauge of the overall health of the ecosystem, the temperature, I like to call it. I'm always I have a thermometer out pretty consistently because I want to understand.
[04:18:31] It's very vitally important for me to understand where things are at.
[04:18:35] um
[04:18:38] so
[04:18:40] When I found out what the announcement was...
[04:18:43] For next conf, I'm like, okay.
[04:18:46] So they did go with it.
[04:18:47] That's thing one.
[04:18:52] And...
[04:18:54] So funny enough, Theo was watching live, I guess, and he was posting stuff up on this very great thread here.  You can...
[04:19:01] he just
[04:19:03] Anyone who wasn't there in real time, I had just come back for the evening from Poland.
[04:19:08] Like, this was...
[04:19:09] from the day at the conference.
[04:19:12] This was a super informative thread.
[04:19:15] seriously just covers the whole
[04:19:19] keynote essentially piece by piece before you know with commentary and for me
[04:19:25] This was like the perfect kind of scenario.  But Andrew Clark got asked this question, and it was...
[04:19:33] you know, essentially like there's a lot of cool stuff coming here.  What does this mean for the
[04:19:39] ecosystem and he responded that like next 13 is the real react 18 release
[04:19:43] And to be fair,
[04:19:45] I actually said that in my last stream.
[04:19:48] That React, like if you watch it, I was basically saying like React 18 was like basically released with no ceremony.  There was no excitement.  This RFC was like the first thing that got people excited.  They've been waiting for this data fetching.
[04:19:59] And then literally basically a week later,
[04:20:02] you know, this comes out. So it's hard not to say that this is the case. Of course,
[04:20:08] Some people...
[04:20:10] took a little bit
[04:20:13] I don't know how to call it a fence, but it started drumming up this concern.  And it was a similar concern I was airing last week.  But I mean, any one factor isn't enough.  I think the problem is, if you want to look at this thing...
[04:20:25] and understand the situation, you have to look at it systematically.
[04:20:28] I think the challenge here is that
[04:20:32] Everyone's looking at individual parties and not painting out a whole spectrum. So let's paint out a whole spectrum. Let's Excalibur draw this crap. Okay?
[04:20:41] from my perspective. Okay, let's...
[04:20:44] For me,
[04:20:45] There's like
[04:20:47] a few zones here, okay? And let's just zone these out, alright?
[04:20:52] Alright.
[04:20:55] Okay.
[04:20:58] So I'm going to... Let's start here. What's over here? We have...
[04:21:02] Like,
[04:21:03] The library.
[04:21:06] React.
[04:21:08] We have...
[04:21:11] the framework.
[04:21:15] Next.
[04:21:21] Thank you.
[04:21:23] Come on drag. Okay, but else what like there's a few different parties here. Let's let's let's keep on let's keep on going. What else do we have?
[04:21:31] We have
[04:21:34] deployment.
[04:21:37] say Vercel
[04:21:39] As an example.
[04:21:41] And then I'm going to add, I'm going to even add one more
[04:21:45] thing here.
[04:21:46] We have the browser.
[04:21:48] Okay?
[04:21:51] Okay.
[04:21:55] Let's say...
[04:21:56] Chrome maybe. I don't know, but like let's, these brackets probably aren't that important. I just,
[04:22:04] Um, let's see, people asking for dark theme.
[04:22:08] I suppose I can make a dark theme.
[04:22:10] I'm just so not used to
[04:22:12] I guess this is why other people do this.  I'm just not used to thinking in dark theme.  OK, that's fine.  I can adjust.
[04:22:20] Yeah, that's how Theo improved on my Excalibur thing. He took my terrible white theme and made them black.
[04:22:27] Um,
[04:22:28] and
[04:22:30] The problem is,
[04:22:31] It's not even a problem. I don't even know if it's a problem.  This is, like, what I'm thinking about is...
[04:22:36] Every one of these
[04:22:37] has
[04:22:38] their own...
[04:22:40] Goal.
[04:22:42] Right?
[04:22:43] Like, let's follow this here. Like, what's my goal if I'm here?
[04:22:52] demonstrate
[04:22:54] capability
[04:22:58] of my
[04:22:59] framework or I'm gonna say library.
[04:23:01] I'm--
[04:23:02] It's easier to describe it in this way, even though I...  Okay.
[04:23:06] And
[04:23:07] Ah, I'm just...
[04:23:12] Right.
[04:23:13] and
[04:23:15] What's...
[04:23:18] What's my goal here?
[04:23:23] I mean, it's a lot of things, but like, obviously...
[04:23:27] Um,
[04:23:29] give like
[04:23:31] Best...
[04:23:32] experience
[04:23:37] for my user.
[04:23:41] We can probably go into what that means later.
[04:23:48] Is there more? What else is there? Deployment.
[04:23:55] Thank you.
[04:23:55] you know,
[04:23:57] Get...
[04:23:58] people to...
[04:24:00] deploy
[04:24:01] on my platform.
[04:24:06] - Yeah.
[04:24:09] Um...
[04:24:17] And in this case, what's the value for the browser?
[04:24:21] is I'm going to argue the value for the browser here
[04:24:24] is
[04:24:28] improve
[04:24:31] Make a dent in
[04:24:34] in
[04:24:36] web vitals or something. Essentially, it's a statistic thing. The goal here of the browser is they want
[04:24:42] to
[04:24:43] generally...
[04:24:45] improve the quality of the web,
[04:24:47] In the...
[04:24:49] improve...
[04:24:51] the quality
[04:24:53] like
[04:24:54] the quality of
[04:24:55] of the web
[04:24:57] measured...
[04:24:58] by
[04:25:00] some kind of stats, okay?
[04:25:02] Like...
[04:25:06] Maybe I should break it a little bit.
[04:25:08] different points, but like,
[04:25:13] of these pieces
[04:25:18] go into...
[04:25:21] like the next 13 release.
[04:25:23] Because they talked about the three pieces themselves.  Right.
[04:25:28] The part they didn't talk about was Vercel, the deployment, but I mean,
[04:25:33] It doesn't take much to...
[04:25:35] know what their interests are. Right.
[04:25:39] So I'm just paraphrasing...
[04:25:42] Essentially...
[04:25:43] the the
[04:25:46] this kind of
[04:25:48] breakup of these different parts that are kind of going into making next 13.
[04:25:53] Thank you.
[04:25:56] Right, so I like...
[04:25:59] There are multiple points.  This is being mentioned, the controversy about value neutral rendering.  There are multiple points of...
[04:26:07] of contention or concern by people here. And that's why I wanted to like, just dig into this a bit, because obviously this statement was spicy as hell and people got into it. But like,
[04:26:18] If you look at
[04:26:20] The discussion around this is
[04:26:23] It won't be long before...
[04:26:26] you find like
[04:26:27] different parties in each zone, right? Because obviously there's a react zone. This is Matt Cain from Netlify.
[04:26:35] Um,
[04:26:36] So now we're talking about the deployment zone.  React is getting intrinsically linked to Next.  You have to wonder why any other framework  would feel safe tying themselves to it.
[04:26:44] A Vercel employee put out a React beta release yesterday to enable features in time for NextConf.
[04:26:50] Could any other framework do this?
[04:26:53] If I dig down the comments, you'll see the answer is no.  You'll see people from Gatsby and from Remix actually respond to this.  Um...
[04:27:04] This is Remix. Vercel, trying to lay claim as a singular reactor and getting the react team themselves to put their weight behind their claim just imb...
[04:27:10] irreversely
[04:27:12] Fucked React in my opinion. I expect to see dedicate time to projects like Preact.
[04:27:16] Okay, pre-act again.
[04:27:19] *clicks*
[04:27:20] I don't know. He doesn't speak for... He's just an engineer on the team. He doesn't speak for Ryan or Michael.
[04:27:27] you know,
[04:27:31] I think this is...
[04:27:33] This is...
[04:27:34] an interesting perspective to see.
[04:27:36] Again, pre-act is what I was talking about.
[04:27:39] - Yeah.
[04:27:39] And
[04:27:41] The reason, like this chain kind of goes on a bit, Matthew Phillips from Astro.
[04:27:48] Right.
[04:27:49] And talking about, it's like, oh, if they are tied together, you know, or getting closer, then this gives opportunities for other libraries, you know.
[04:27:57] not to be so tied together, right?
[04:28:02] Right. And people talking about the fact that the beta docs literally point you towards next and don't point you towards other...
[04:28:09] things.
[04:28:11] I want to, there's a reason I'm building up this case, because I want to, I actually don't think
[04:28:19] Yeah.
[04:28:20] I actually don't...
[04:28:21] Like...
[04:28:22] I'm not like fully behind it.
[04:28:24] that React team is doing anything terribly
[04:28:28] intentionally wrong here. This did lead to discussions. I guess I've got to follow Matthew Phillips' discussion down a bit because
[04:28:39] Jeff from First L kind of came in and, you know, reaction not tied to next and blah, blah, blah.  And then.
[04:28:45] you know, this kind of just continues down this chain where we even
[04:28:51] It's a poorly phrased soundbite and all this, but...
[04:28:54] Is it?  Like...
[04:28:56] It's not that it's tight.
[04:28:57] Here's the thing.
[04:28:59] Put yourself...
[04:29:00] in
[04:29:01] these guys shoes.
[04:29:04] They have been, like, what are the facts here?
[04:29:08] This is five years coming.
[04:29:10] From that first demo or whatever in 2017 or whatever when this first came up, to the data fetching now,
[04:29:17] This is like completing the story. React 18 completed the story
[04:29:20] like the basis but we haven't seen it delivered this is this is literally five years coming i don't think
[04:29:27] The React team, you're talking about favoritism.  They would literally, anyone who wants to work with them on this,
[04:29:33] you know, they would love it if they would like help them realize their vision.
[04:29:40] Right?
[04:29:42] So
[04:29:44] Like...
[04:29:45] I think Dan actually has some tweets in here saying,
[04:29:50] He's like, I'm excited about this release because it's most comprehensive, generalized, attempted, planned, reactor architecture, blah, blah, blah, streaming.  It has all the pieces that they want.
[04:29:58] you know,
[04:30:00] They're giving me feedback.  This is all just data fetching.
[04:30:04] Thank you.
[04:30:04] It doesn't have all the answers.
[04:30:07] Thank you.
[04:30:07] People Facebook self react now so it like I
[04:30:13] You know,
[04:30:15] He talked about how they worked through different versions with Hydrogen.
[04:30:19] With Gatsby,
[04:30:21] Interestingly enough...
[04:30:23] Um...
[04:30:25] those took a different road than where React saw it going.  So Next is, in a sense, because Next wanted to get as close to React's vision,
[04:30:38] Compared to others, like Remix pretty much straight up said, like, we're not into server components.
[04:30:42] that explains a lot
[04:30:45] why
[04:30:47] things are there.
[04:30:48] I talked to Dan Abramoff a bunch actually while I was in Poland. It's funny, we'd switch time zones. Usually he's in the UK and I'm here, but he was actually here at NextConf and I was in Poland.
[04:30:59] It was kind of like a reverse time zone thing where it was me being super tired late at night instead of him.
[04:31:06] Yeah, I mean, I...
[04:31:09] I don't...
[04:31:11] this is not
[04:31:12] Next directing or Vercel directing reacts direction.  This is what they've wanted to showcase now.
[04:31:19] for years.
[04:31:23] Right, so...
[04:31:25] I think
[04:31:27] I think that, like...
[04:31:28] is
[04:31:29] this side of the equation here.
[04:31:32] It...
[04:31:33] Seb now working at Next, definitely
[04:31:38] incentivizes it a bit, you know, like it's like, okay, well, let's make this happen.
[04:31:43] But
[04:31:44] My understanding is...
[04:31:46] Next for the most part, this is a breaking change. They put themselves at risk a bit because they're like, "Look, here's a new API. We're changing everything." You don't have to be breaking to scare people off on a migration story.
[04:31:59] So they're taking a bet on the vision that React is doing,  and they've chosen to take that bet.  So from that perspective,
[04:32:07] Um, that's
[04:32:09] Super great.
[04:32:11] and
[04:32:14] you can kind of see...
[04:32:16] that the way these two
[04:32:18] kind of linked together. But it is
[04:32:22] As someone...
[04:32:24] If you're not in the loop,
[04:32:26] Next implemented...
[04:32:29] things that were like before our RFCs were available, like they were definitely
[04:32:33] ahead of the game.  And it's always hard to kind of
[04:32:36] put out there because obviously we're not all working on frameworks that run on React. So if you're Remix,
[04:32:43] or hydrogen or...
[04:32:47] Thank you.
[04:32:47] Or next...
[04:32:51] you're probably going to have some kind of better tie-in than like...
[04:32:56] v plugin SSR or whatever. You know what I mean? Like,
[04:33:00] Like, I don't even know, like, has...
[04:33:02] Okay.
[04:33:03] I mean, maybe
[04:33:04] AJ, tell me, how's Redwood working?
[04:33:08] Um,
[04:33:09] you know, getting in here.
[04:33:15] Right.
[04:33:16] But that's the thing.
[04:33:18] Like...
[04:33:20] The thing is, from the public standpoint perspective, they did not have access, even though this wasn't like working group discussions. So for them, like, think about it, you release an RFC and then you release the full implementation, not even the full implementation, but like a partial implementation, like
[04:33:37] a week later, like, it...
[04:33:40] No one else.
[04:33:41] you know, had any chance to process or recover.  And the biggest thing is that RFC was missing...
[04:33:48] the cache API and stuff.
[04:33:49] Which kind of gets us to the next thing, because I've talked about this relationship.  Well, now here's the next problem. In order to give this user experience...
[04:33:56] to my end users and I don't have the full story here, I need to work with my infrastructure deployment, you know, for cell here in this case, in order to
[04:34:05] I'm going to try to make it a little bit more.
[04:34:06] reach that goal.
[04:34:08] Right?
[04:34:09] So...
[04:34:12] Like,
[04:34:15] Yeah, I mean, if I don't have the React cache API,  which hasn't even been RFC,  I'm going to have to come up with something.  And if I'm going to, you know...
[04:34:24] have async functions which might lend to more waterfalls.  I'm going to maybe rely more on caching and global fetch patching and stuff.  Essentially, there are pieces here that we need to complete the story.
[04:34:36] So now,
[04:34:37] You have React library with its goal.
[04:34:40] the next that's invested in this goal,  and then the deployment infrastructure that has to support this goal.
[04:34:46] Thank you.
[04:34:46] Right?
[04:34:50] So,
[04:34:52] That's fine, right? You have a bunch of engineers working on this and you're going to
[04:34:57] Build up
[04:35:01] like build up this infrastructure to,  to,  to,
[04:35:05] to do this.
[04:35:07] like if you look at it actually i love this aj thanks for putting this i think there's two  levels next did have preferential treatment that's true another framers could have been  more involved but weren't both these things can be true at the same time so it's nuanced yeah
[04:35:20] Right?
[04:35:21] It takes two to tango, exactly.
[04:35:24] And that's this boundary we're talking about.  And this boundary, well, it's obvious.  Next is developed at Vercels.  So, um...
[04:35:32] If...
[04:35:33] If next is working
[04:35:36] closely with React Team because they know the features that are coming
[04:35:39] And then they need the infrastructure to support it.  Well, then obviously...
[04:35:42] They will work.
[04:35:43] with
[04:35:44] their parent company or like their parent thing to actually build the specific features into the infrastructure they need to support this.
[04:35:51] Right?
[04:35:52] So, I mean, this is just a logical one.  We've seen this for years.  This is the big thing, right?  Vercel, Next is a vehicle for adoption for Vercel, right?  Get people to deploy on my platform.  Like...
[04:36:05] this kind of goes both ways.  In a sense, largely...
[04:36:10] this arrows this way, like it's actually react that needs next.
[04:36:15] But...
[04:36:15] Um,
[04:36:16] This arrow kind of goes this way as well.
[04:36:20] Right?
[04:36:31] so like
[04:36:33] But I mean, there's also a little arrow this way too, you know, but this is a very tight kind of scenario.
[04:36:39] And the only reason I wanted to bring the browser thing is, it's not even with Vercel, I just want to talk about the browser thing is,
[04:36:47] These guys...
[04:36:49] have basically huge metrics and
[04:36:52] And they're seeing
[04:36:54] seeing stuff
[04:36:56] I want to talk about the browser for a minute because they're seeing numbers increase year over year over year and year.  And like, how can I make...
[04:37:03] the biggest impact.
[04:37:07] How can I actually change things?
[04:37:10] And the sad answer to it is, it's not about...
[04:37:16] the quantity of impact,  like any given technology,  it's a,
[04:37:20] I'm not phrasing this right. It's not about the quality of impact, right?  Like how well you do it on any particular technology. It's
[04:37:28] about the quantity. Like if there's a thousand sites, if I can improve 10% across a thousand sites, that's better than improving 80% on...
[04:37:37] Uh...
[04:37:38] 50 sites.
[04:37:44] So...
[04:37:47] it.
[04:37:48] I want to talk a bit about this because this is all part of the story here from my perspective.
[04:37:57] Thank you.
[04:37:57] Like, for example, has anyone ever seen...
[04:38:00] Patterns.dev
[04:38:04] Um...
[04:38:07] It's a book and it's about general web patterns and all this stuff. And it kind of positions itself about like learn about the web and learn about programming, learn what kind of patterns you have, right? So let's get started, right?
[04:38:18] Oh, great, design patterns, rendering patterns, performance patterns. This is really great. Design patterns, singleton proxy, blah blah blah, provider, prototype, container presentation, observer. These are great patterns, right?
[04:38:30] All right, flyweight.  I mean, this is like Gang of Four all over again.  Hooks pattern, okay, I mean, that's a React thing, but okay.  Rendering patterns, overview of React, overview of Next.js,
[04:38:41] server-side static rendering, incremental static rendering,
[04:38:44] It...
[04:38:44] The rendering pattern is part of this.
[04:38:47] is basically just Next.js docs.
[04:38:51] Thank you.
[04:38:52] And that's fine because that has the biggest impact.  But I just want to...  Like...
[04:38:58] Island's architecture is here, but essentially...
[04:39:02] Almost everything else in here is explained through using React.  And I know this is a challenge because I was working on...
[04:39:10] some of my articles about patterns and I actually talked to Addy a bit about this and kind of
[04:39:17] doing this, but this is how you get the biggest impact.  You pick the tool that everyone's using,
[04:39:22] And then you...
[04:39:23] like focus that in terms of like fundamental web training because then you can hit the most pieces.  And another thing, I don't know if anyone's ever heard of this, is Google has...
[04:39:32] a funding...
[04:39:33] project called the Aurora project. Google Aurora operations. No, this is not it.
[04:39:38] not operational or...
[04:39:43] it's a collaboration between Chrome and the open source web frameworks and  tools,  right?  Um,
[04:39:49] I was actually really, really excited about this.
[04:39:51] But at a certain point, um...
[04:40:02] Thank you.
[04:40:03] Thank you.
[04:40:04] If you look at this, essentially...
[04:40:11] At first, I saw this and I was like, okay, sweet.
[04:40:14] I know lots...
[04:40:15] projects that are improving the quality of the web by using
[04:40:18] Great technology.
[04:40:21] Marco.
[04:40:23] Their partial hydration island things were years ahead of others.
[04:40:28] Um,
[04:40:29] Astro.
[04:40:31] Same kind of thing.
[04:40:32] Habuk!
[04:40:33] All the builder stuff.
[04:40:35] Quick.
[04:40:36] Party town.
[04:40:37] PartyTown, god, everyone could use PartyTown.
[04:40:40] - Thank you.
[04:40:42] But note the challenge is, I actually
[04:40:45] know these people  and their projects and I was like, do you hear about Aurora?  Like, we should all go in  and make submissions and see what we can do  and do that because we're doing great work.
[04:40:55] A lot of the feedback, and I think it's changed a bit this year, but last year was that
[04:41:00] they were focusing on
[04:41:01] projects that had more impact, like as in more people
[04:41:05] using them rather than the quality improvement
[04:41:09] And I know because...
[04:41:12] these projects that I kind of nodded towards basically...
[04:41:17] Mm-hmm.
[04:41:17] I ended up maybe getting a little bit or not really getting the same kind of support as
[04:41:22] next or nuxt or
[04:41:24] Angular, just because of how big those impact are, even if the technology improvements that are coming out of these other projects are way more incentivizing or interesting.
[04:41:36] so
[04:41:38] It's kind of hard because basically I get it.
[04:41:40] If you want to make a dent on those numbers and those statistics,
[04:41:45] Focus on the big players.
[04:41:49] But it's...
[04:41:51] I just want to paint the scene here.
[04:41:57] Right?
[04:41:59] People are saying burn, but like
[04:42:01] Easy.
[04:42:04] it
[04:42:07] It's...
[04:42:09] I don't think this is subjective.
[04:42:12] is the best way I can put this.
[04:42:18] Right? Like, there's a chicken and egg situation, right?  Like, by this, I mean...
[04:42:23] There might be developer experience considerations.
[04:42:26] There might be like
[04:42:28] you know,
[04:42:29] uh popularity teaching training all these other implications things that are very important and  in the reality are more impactful
[04:42:37] But no one's going to tell me
[04:42:39] that building an XJS site is the most optimal process
[04:42:42] way to build a site.
[04:42:44] This is factual. It's not...
[04:42:47] It's not like...
[04:42:49] hypothetical. This is
[04:42:52] This is like just the technologies involved.
[04:42:55] so
[04:42:57] It's fine.
[04:42:59] And we need more general tools.  And I can't put this completely...  I get the motivation,  but I just want to point to you that...
[04:43:09] Like...
[04:43:10] Um, maybe this arrow goes a little bit like this.  So maybe I put them in the wrong order, but I, I just...
[04:43:16] *coughs*
[04:43:17] There's a lot of different...
[04:43:20] people with different motivations and goals and projects all working around this with different  investment and different considerations so when i look at this problem
[04:43:29] I don't
[04:43:31] And again, I can't say problems, not quite the right word.  When I look at the situation,  I'm trying to determine if there is a problem.
[04:43:38] is the better way to put it. This is...
[04:43:41] the mindset I'm coming at because I'm looking
[04:43:45] at
[04:43:46] Obviously, very heartfelt tweets from Dan about achieving a goal that's been in mind for years and working and just finally getting there.
[04:43:56] I'm seeing
[04:43:58] you know, people like Matthew Phillips, kind of like, let's face it, he's not a big fan of single page apps. He doesn't really care
[04:44:06] what React or Next are doing. He's just like, "Look, if they're gonna like all this kind of get in together then...
[04:44:12] Maybe this is good for everyone because, you know...
[04:44:15] Maybe the Remix of the World are just like, well, you know...
[04:44:19] Maybe we're gonna take things a different direction.
[04:44:22] Right?
[04:44:23] And, you know, when you...
[04:44:25] And I don't say this
[04:44:29] For like...
[04:44:31] I mean, there's probably a good point that I should point out.
[04:44:35] I work at Netlify, I work on SolidJS.
[04:44:39] If you look...
[04:44:40] at
[04:44:42] this drawing here
[04:44:45] I'm competing...
[04:44:46] here
[04:44:47] I'm competing here.
[04:44:49] Maybe I'm competing here.
[04:44:51] I mean, I don't know. I
[04:44:53] This part is actually...
[04:44:55] I wouldn't say I am competing here.
[04:44:59] Right.
[04:45:00] Because...
[04:45:01] like
[04:45:03] Like most Netlify employees, I imagine...
[04:45:07] Don't
[04:45:09] rave about how good
[04:45:11] features are on the for cell platform.
[04:45:14] or
[04:45:15] Maybe...
[04:45:17] have potentially reposted job plans
[04:45:20] postings, you know, for
[04:45:22] for positions when I think that they're offering some really cool roles and stuff.
[04:45:27] So, I mean...
[04:45:30] *sniff*
[04:45:31] I am NOT
[04:45:33] I'm not saying any of this out of...
[04:45:36] any kind of like competitive...
[04:45:38] bias, at least not to the best of my knowledge.
[04:45:43] But...
[04:45:45] I am...
[04:45:46] Concerned?
[04:45:49] I talked a bit about Matt Cain here.
[04:45:52] And I talked about this.
[04:45:55] Let's look at this thread from Devin.
[04:45:58] someone needs to
[04:46:00] Build a legit non-VC-backed alternative to Next.js.  It should be community-driven and funded by companies that use it and contribute to it.  It should be also more flexible and also...
[04:46:09] You aren't locked into the underlying tools of Powerus, i.e. the hosting providers.
[04:46:12] -
[04:46:14] This is...
[04:46:15] pretty close to on the head of where my thinking concerns come in because
[04:46:22] Look at this.
[04:46:24] If I want to use
[04:46:27] I am a user now. I'm not any of these parties. I'm just a person.
[04:46:31] If I want to use
[04:46:32] Any...
[04:46:34] of the latest React stuff because I am a React dev and I care about React and I care about their vision. I got excited when Hooks came out.
[04:46:42] And this is what I want to use.
[04:46:44] Well,
[04:46:44] Apparently the way I do that is use Next.
[04:46:48] Okay.
[04:46:49] That's...
[04:46:50] That's...
[04:46:50] That in itself right now might change, and the frameworks themselves might have done it.  I'm sure React would have wanted more frameworks to adopt what they've been working on.
[04:46:57] But in order to use next,
[04:47:00] I need to use the infrastructure
[04:47:02] on Vercel to actually leverage it.  Because like this server component stuff doesn't really work properly without the caching level.  It's like the missing part of the API.
[04:47:10] And it's fine.
[04:47:12] Purcell invested a lot into it.
[04:47:13] So I need to deploy Umber Cell.
[04:47:16] in order to use the latest React.
[04:47:20] And similarly...
[04:47:22] if I want to leverage the best pieces of the web platform,
[04:47:27] you know,
[04:47:28] and have that backing from Google in that sense.  I probably also want to use Next.
[04:47:35] Thank you.
[04:47:36] So, I probably should deploy to Vercel.
[04:47:50] I don't...
[04:47:52] I don't know if that's...
[04:47:54] I mean, every party has their reason
[04:47:57] And this is just win-win-win for all of them.
[04:48:02] But...
[04:48:03] There's this
[04:48:04] alignment here.
[04:48:06] that
[04:48:08] is almost...
[04:48:10] you're surmountable by someone else.
[04:48:15] It's not cahoots.  They're like...
[04:48:18] It's not
[04:48:20] Every piece of this puzzle...
[04:48:23] is independent
[04:48:24] But the net result...
[04:48:27] doesn't feel much different to me.
[04:48:29] then
[04:48:30] the concerns people had with Internet Explorer being shipped with,  with Windows.  Yeah.
[04:48:36] Like,
[04:48:37] All these teams are working together towards a common goal,
[04:48:40] it's all helping them reach that goal
[04:48:46] But...
[04:48:49] Does it help?
[04:48:51] the common open web.
[04:48:54] ultimately.
[04:48:57] Is Cloudflare...
[04:48:58] and Netlify and whoever else  are going to go build their own React framework  to showcase...
[04:49:06] the newest React features.
[04:49:07] No, they're going to try and port next.  And they can't port next until they play catch-up.
[04:49:13] on some stuff that obviously Vercel
[04:49:17] implemented because Rissell knew what was coming because they were talking to the React team.
[04:49:22] through next,
[04:49:24] And
[04:49:25] they needed it to accomplish the goals. Nothing insidious here, just
[04:49:31] the overall result
[04:49:35] And...
[04:49:36] Mm-hmm.
[04:49:38] I mean...
[04:49:39] Let me see here.  Uh,
[04:49:41] uh
[04:49:45] Someone, Zach wrote something a while ago.  He was looking and he's like,  how much money is actually going into frameworks?
[04:49:54] in order to
[04:49:56] you know,
[04:49:59] get them going. And obviously, for something like Lit or Marco, you're not going to know this.  But when you get into the VC range, you start seeing...
[04:50:07] you know,
[04:50:08] how much money is potentially behind this stuff.  Obviously, like Solids, I'm working under Netlify,  so there's some potential, so it's felt.  But I would say...
[04:50:17] There's a difference between Next.js's relationship to Vercel.
[04:50:21] than say...
[04:50:23] reacts relationship to Meta.
[04:50:25] is the best way I can put it.
[04:50:27] Like
[04:50:30] Meta uses React.  It's nice that it helped train devs, but like...
[04:50:34] essentially
[04:50:36] That's why they open sourced it, but they're using it anyways.  Like this is something they use for their purposes.
[04:50:42] Whereas...
[04:50:44] Next is part of Vercel's funnel, essentially, how they get sales.
[04:50:49] So...
[04:50:52] Even...
[04:50:55] And the only reason I wanted to show this chart with the money is because it made me think about...
[04:51:00] Like...
[04:51:01] the Google side of it too.  Like,
[04:51:04] the bigger investment begets bigger investment. It's like banking, right? Like,
[04:51:12] it's like all the pieces are aligning and it's,  it should be a perfect and wonderful thing.  But is this,
[04:51:18] I have to ask, is this the open...
[04:51:21] Like, is this...
[04:51:23] is the open thing that we hope for.
[04:51:26] It's hard because we can't look at this objectively anymore.  Every, I don't know if remix is in here, every,
[04:51:33] All the meta frameworks are businesses.  They're incentivized for you to...
[04:51:39] adopt them financially.  It's not like...
[04:51:42] You know what I mean?  I feel like in cases felt insolid, it's not so much the case,  even though they are funded that way to a certain degree.  But it's not like...
[04:51:52] You know what I mean?
[04:51:53] It's not like the direct...
[04:51:55] pipeline and
[04:51:57] You start putting these pieces together and you go, no one did anything wrong.
[04:52:05] But...
[04:52:06] What...
[04:52:06] is the net output result of this.
[04:52:17] Just catching up a bit on chat here because I've been talking.
[04:52:25] And this is how Ryan got fired.
[04:52:27] Yeah, I know, this is a little risqué, but I want to...
[04:52:32] I...
[04:52:33] *sniff*
[04:52:34] Thank you.
[04:52:38] What people value for me is that I generally speak my mind in a relatively...
[04:52:44] fairway
[04:52:46] I'm not too business oriented, I'm technology oriented, and I'm a bit of bleeding heart for the open source and the open web, and that all solutions have a chance.
[04:52:59] You can determine for yourself how problematic this is, whether this is...
[04:53:04] actually anything.
[04:53:07] Maybe it'll shift your perceptive of what choices you make
[04:53:11] for
[04:53:11] certain...
[04:53:13] options here. And you know what, I think
[04:53:17] So
[04:53:19] I think that's fine.
[04:53:21] I think...
[04:53:22] Uh-uh.
[04:53:23] So you're going to figure out what you're going to do.
[04:53:35] So, like...
[04:53:36] So
[04:53:39] I just think that what you're going to see here is...
[04:53:42] It's funny.
[04:53:43] Because
[04:53:44] of different parties having...
[04:53:47] you know,
[04:53:48] kind of aligning and different kind of financial
[04:53:51] Um...
[04:53:52] incentives, especially for Vercel in this whole picture, that...
[04:53:59] this sort of
[04:54:00] reaction
[04:54:02] is not
[04:54:03] surprising and shouldn't be. And I, I,
[04:54:06] As I said, maybe this isn't really a problem.  This is just like different parties reshuffling and figuring out where they go.
[04:54:13] But...
[04:54:15] I'm coming from a frame, like mostly from a library author's perspective.
[04:54:19] I think
[04:54:21] I think this is the last thing.
[04:54:23] that anyone working on the core of React wanted.
[04:54:28] So I'm not putting this...
[04:54:31] on
[04:54:32] on that side. People keep on talking about reacts and cahoots and all this. No, it's not about that.
[04:54:37] But
[04:54:38] I think these guys are probably the most sensitive to it because
[04:54:44] They're the furthest removed.
[04:54:46] And they're just like, we're just trying to build the best thing.  That's something I can...
[04:54:51] I feel...
[04:54:53] you know
[04:54:57] I think we just have an interesting scenario where...
[04:55:01] Like...
[04:55:03] *sigh*
[04:55:05] Thank you.
[04:55:06] I mean, we're going to have to see what this kind of alignment means for the web.  But maybe other competitors are going to try and come out other than Next just to...
[04:55:15] you know, like the React team would love that. I mean,
[04:55:18] Dan told me as much as like, oh, yeah, another meta framework other than the next that wanted to do our vision.  I give them, you know, any support I could, you know.
[04:55:26] Like there's only so much they can they can do.
[04:55:29] You know, like,
[04:55:30] Ultimately, React just wants to see React...
[04:55:35] you know,
[04:55:36] demonstrate the capability of my library. They just want to see React go out there and do good things.
[04:55:45] -
[04:55:47] But...
[04:55:50] I feel like if you break...
[04:55:53] apart any one of these, like...
[04:55:56] places here
[04:55:59] you're in a very different place. It's really just the combination of things.
[04:56:06] Yeah, they worked with...
[04:56:08] with hydrogen RSCs and I said I'm paying close attention to hydrogen because
[04:56:14] I haven't heard much recently and they definitely aren't launching this new use API stuff right now. If you want to use
[04:56:22] the latest React, you aren't using it
[04:56:25] on Shopify and you're not using hydrogen.
[04:56:32] And there's money supporting existing code bases for years, for sure.
[04:56:35] But it's always about mindshare in the future.
[04:56:40] Like, I don't know.
[04:56:42] Some people tell me Gatsby's dead.  I don't know if that's true or not.
[04:56:45] But if Gatsby were dead...
[04:56:47] What's the likelihood that...
[04:56:49] Um...
[04:56:50] Five years, three, five years down the line, every Gatsby customer is the next customer.
[04:56:56] I don't know
[04:56:58] I'm just throwing it out here.
[04:57:02] that
[04:57:04] intention
[04:57:06] isn't always enough to assess the situation,
[04:57:11] And...
[04:57:12] I think we need to be
[04:57:14] conscious
[04:57:16] of
[04:57:17] the impact of these sort of things on the future of the web.
[04:57:29] I don't know.
[04:57:31] It's...
[04:57:32] It's possible that it's as simple as the fact that
[04:57:35] Hydrogen and Gatsby just tried to build off the server component demo, the stuff, and they worked with the React team. And then the thing keeps on evolving and changing, and they don't have the same kind of investment and money to be able to pull it off. Maybe it really does take a Next in order to deliver this at this point and that kind of financial thing.
[04:57:51] But none of this changes the fact
[04:57:54] that
[04:57:58] Bye.
[04:57:58] Next is funded to do so.
[04:58:02] Like
[04:58:05] I'm just like...
[04:58:08] I'm not.
[04:58:13] you know.
[04:58:14] funded from for selling i mean even indirectly stuff or like aurora so it's
[04:58:21] it's
[04:58:24] To me, this is a tricky situation because I can identify and empathize with every individual
[04:58:30] Party here.
[04:58:35] But that doesn't leave me any less concerned.
[04:58:44] I honestly don't know what to do with this.
[04:58:53] People are just joking in the chat and that's fine. Talking about the takeover and stuff.
[04:59:00] Thank you.
[04:59:04] um
[04:59:06] I don't know. You ever hear stuff like too big to fail and all that kind of stuff? I
[04:59:10] There's something...
[04:59:12] about this.
[04:59:14] that
[04:59:17] doesn't quite sit right
[04:59:31] The fact that React is changing, sorry, there's more comments in chat.  People talking about how React is changing from a library to a framework.
[04:59:37] That change has been on the wall, like,
[04:59:41] for five years and I guess it might not be obvious but from the second that they started on this path
[04:59:45] This was the inevitable conclusion.
[04:59:48] It's...
[04:59:49] I think this is part of the tricky situation, because--
[04:59:54] If...
[04:59:56] Who's going to build the framework?
[05:00:00] Meta built the framework.
[05:00:04] You know, like, look at it, Svelte, Svelte kit.  Um...
[05:00:07] you know,
[05:00:09] view nuxt or what it like it
[05:00:12] Maybe VueNux isn't the best example, but SvelteSvelteKit and SolidSolidStart is a good example where the meta framework is basically the framework authors doing it and an extension of that. And like in that sense, if you view React Next like that, like there isn't any, I actually don't.
[05:00:27] think that's necessarily a bad thing. Some people do, but that alone
[05:00:32] isn't a thing and if that was being built a meta,
[05:00:34] They wouldn't because meta probably wouldn't use Next. They have their own infrastructure. That's kind of like
[05:00:39] the problem, like they have their own setup, their own needs. But like if that was happening,
[05:00:45] you wouldn't have...
[05:00:48] this
[05:00:49] weird
[05:00:50] feel too much. It's like...
[05:00:56] it's because it's like startups that are funding it.
[05:01:00] And then they use it for adoption, essentially.
[05:01:05] Yeah, I mean, this...
[05:01:07] And they're the ones who need the funding and then Aurora Project.  It's just a combination of things.
[05:01:15] Yeah, Quick City. Yeah, that's another one. Thank you, AJ. Yeah, exactly. Sorry. Slipped my mind.
[05:01:23] .
[05:01:35] No, it's next to standing on React shoulders.  The first one, definitely...
[05:01:39] This is what React team wanted. I said this already. This is what they wanted.
[05:01:45] Um...
[05:01:46] Seb working there probably was the last push to get this kind of...
[05:01:49] expedited like look people have been waiting for this for so long to a certain point that i think  react core
[05:01:57] Like the core incentives are actually concerned that they're losing ground without being able to actually demonstrate this.  Other frameworks are coming up and going, look, it's so easy.  Look, our data fetching, just, you know, whatever, create a resource, whatever, just works.  And then they're like, okay, we need to actually get back, get some skin back in the game.
[05:02:14] Um...
[05:02:15] Thank you.
[05:02:17] Like...
[05:02:20] Yeah, this is not
[05:02:24] I honestly don't think people should necessarily...
[05:02:27] worry about that. It's actually the problem is this part which is
[05:02:32] on its own fine, but ultimately the problem. That's why Devins
[05:02:36] Comment is the most on the nail. It's my strong belief that VC backed OSS creates perverse incentives that are fundamentally at odds with open source ethos. It promotes competitive competition over collaboration, locked in over flexibility, marketing over innovation, eventually monetization.
[05:02:49] Look at the landscape right now.  Almost all major React frameworks are VC backed.  At the same time, React itself is being designed  to require a framework for more features.  I think it's really important for the future  that these are not owned by a startup.  If I were to build a new React app today  for anything important, I would not do it on Next  or any other VC backed frameworks.  It is too risky to make a bet.  Five years, which ones will still exist?  Which will start gating features based on their hosting?
[05:03:20] Thank you.
[05:03:26] Thank you.
[05:03:28] I mean, there's a counter-arguing.  Rackis here.  Who would invest absolutely insane amount of money  to make a product as polished as Next?  Say nothing of the fact that Nextit is already open source.  Has a ton of outside contributions.  Probably more than React.  But, you know...
[05:03:39] Is VC funding really that scary?
[05:03:43] Thank you.
[05:03:49] It is...
[05:03:50] when the alignments here
[05:03:53] produce
[05:03:55] like competitive edges essentially because,
[05:03:59] Like,
[05:04:00] access to the latest React features,
[05:04:03] leads to access to infrastructure,  leads to, like, the way the whole thing ties together.  It's not about any individual piece.  It's the fact that all of the information,  all of the pieces tie together in a way that...
[05:04:16] basically point to a single direction.
[05:04:21] No one's asking Nex to roll out away from Vercel.
[05:04:26] But like that
[05:04:28] Is that because it's their thing, it's their funnel.
[05:04:33] That's kind of the...
[05:04:35] That's where the actual problem sits more than anything.
[05:04:47] I'm not.
[05:04:48] I mean...
[05:04:53] That's asking a redwood like seriously any other react framework that is
[05:05:00] But you can see, this is already the conversation.  We're looking for frameworks that would...
[05:05:06] Adopt Reacts philosophy
[05:05:08] and not tie you to a single deployment
[05:05:11] partner or something, right?
[05:05:14] Like there are real business impacts
[05:05:17] these kind of decisions when you tie the whole thing together.
[05:05:25] I don't know.
[05:05:26] -
[05:05:28] This is why
[05:05:29] I've been retweeting this stuff and I'm going to continue as the stuff progresses, go to the same thread and chain it all together.  Because to me, there's a narrative being stitched together like a tapestry across the whole industry when considering how all these things are working.  And you might just be like, oh, the stars have aligned for Vercel, they're the golden child.
[05:05:51] But...
[05:05:53] I don't know.
[05:05:58] I'll leave the rest of this up to you.
[05:06:03] Yeah.
[05:06:04] Remix has VC money, yep.
[05:06:12] Yeah, I mean, people are going to have specific issues with stuff, but everybody does stuff that...
[05:06:18] fits it. Like, so patching fetch, people have done way worse. I know that's a contention part and people will talk about that and but like,
[05:06:29] Yeah.
[05:06:30] Ooh.
[05:06:31] This isn't new.  I mean, maybe--
[05:06:33] Maybe like...
[05:06:39] But it is part of the solution, so I guess it's fair.  If you're coming up with a different solution,  at least React didn't tell anyone to patch fetch.  That would be more awkward.  But then if React did, then like--
[05:06:50] Yeah, I mean at a certain point
[05:06:53] It's just...  You take the biggest players...
[05:06:57] and you tie them all together...
[05:07:01] Yeah, I mean, I don't know what...
[05:07:03] What... what...
[05:07:05] anyone expects any other kind of outcome.
[05:07:16] But the thing is, like, if you read through the rest of Devin's stuff, like...
[05:07:21] Like, it's... Oh, Rackus, here's another one.
[05:07:26] VEAT, React, you know.
[05:07:29] I'm not sure.
[05:07:36] Yeah, I mean...
[05:07:39] It's--
[05:07:40] I don't think it's a simple OSS has a funding problem fundamentally.  And I don't think it's a simple just saying, yeah, we'll just have a bunch of companies work towards it.  Something has to drive the initiative.
[05:07:51] And here's the problem.
[05:07:52] A project might start
[05:07:54] Like Svelte.
[05:07:55] or solid.
[05:07:56] and with SolidStar and SolidKit, if it ever became successful enough,
[05:08:01] I wonder which companies...
[05:08:03] Wund.
[05:08:06] try and do it like a funnel. People have been approaching me about doing that for ages. They're like, yeah, I have a CMS. Let's, let's build the funnel. Like that's, that's how business works.
[05:08:16] It's just not very OSS ethos, as Devon put it.
[05:08:23] It's funny, but large companies that actually use it for what they need to use it for...
[05:08:27] actually don't
[05:08:28] Like I said, if Meta made the Meta framework, they wouldn't, but if they did, then we wouldn't have this problem.
[05:08:35] So...
[05:08:36] Yeah, I don't know. This is tricky. And obviously, we're just circling around it now because it's five o'clock and we're getting late in our day. But I just wanted to...
[05:08:46] you know
[05:08:48] Put that out there.
[05:08:51] I don't know if anyone has any more comments.  We're probably going to wrap up here soon.
[05:09:09] Thank you.
[05:09:11] Yeah, no. I moved to Rackus instead. There you go.
[05:09:17] - Um.
[05:09:19] Yeah, I mean...
[05:09:20] It's interesting because...
[05:09:24] We're at a point now because of that, that almost any decision or conversation here is going to have some kind of blowback.
[05:09:30] blowback
[05:09:32] Um...
[05:09:33] So...
[05:09:35] Yeah, I mean...
[05:09:37] A week ago I said that there was...
[05:09:40] a few different trends I'd look at.  This is only really stage one.
[05:09:46] If if
[05:09:48] if other React metaframworks do
[05:09:54] kind of pull away more dramatically and stuff like
[05:09:59] I think it has interesting implications on React as well.
[05:10:03] Yeah, I don't know. People who continue to build React the way they have for years, but I think it's...
[05:10:10] It's interesting.
[05:10:23] - Right.
[05:10:24] Alright, well...
[05:10:29] I think...
[05:10:30] I'm about ready to call it a day, I said I was tired to begin with and sure enough I streamed plenty long enough.
[05:10:38] This really was...
[05:10:39] This Week in JavaScript, the whole next thing and the
[05:10:43] than that. And it would be a lot nicer, obviously, the focus on the technology.
[05:10:47] Um...
[05:10:48] But we actually focused on a lot of that from the RFC.  The only piece that we didn't focus on is the new fetch caching stuff.
[05:10:55] that's a bit controversial and you know
[05:10:58] - Thank you.
[05:10:59] We can talk about that at a later stream when I've had more time to process it, but...
[05:11:03] Maybe he'll be a month from now.
[05:11:05] But
[05:11:07] Um,
[05:11:08] I think
[05:11:09] I think it was important today to talk about
[05:11:14] the kind of feeling in the parties and the
[05:11:16] you know,  in the ecosystem,  uh,
[05:11:18] And...
[05:11:20] where they kind of find themselves right now.
[05:11:27] All right.
[05:11:28] Dinner is ready.
[05:11:29] So with that, I will go.
[05:11:33] Have a good one, everyone.
[05:11:36] Honestly, it's going to be...  One, two, three.
[05:11:41] I don't know.
[05:11:42] It's going to be...
[05:11:43] It's probably going to be four weeks until I get to do another Friday stream.
[05:11:49] Yeah, hopefully at least got some time to catch up on my backlog, right?
[05:11:54] All right.