---
title: "kHsTiFWz3sY"
slug: "kHsTiFWz3sY"
duration: "4:01:52"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/kHsTiFWz3sY.m4a"
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
[00:00:00] -
[00:00:01] Alright, hello everybody. I'm going to try and
[00:00:05] Pull off a stream.  Today.  To be fair.
[00:00:10] About an hour ago I had no internet, it came back
[00:00:14] for the last like 20, 30 minutes. So I'm hoping it stays that way, but we could probably lose internet at any point.
[00:00:22] So let's hope that we are
[00:00:27] lucky today and we fall in their hole.  Basically, they started doing work at my place on Monday, like out in the street.  And then they were like, oh, we'll come back on Thursday.  And I was like, oh, damn, I was going to stream on Thursday instead of Friday.  So I'm like, OK, I'll I'll try and do something on Wednesday.
[00:00:43] And then I get the notification this morning that they're actually doing stuff.  So, you know.
[00:00:46] Can't win, right?
[00:00:48] How's everybody doing?
[00:00:52] Thank you.
[00:00:54] I...
[00:00:55] Yeah, I'm going to fix up Twitch right now. It's it's bugs me every time I do a stream on Twitch, it puts it in the wrong category.
[00:01:05] which is kind of annoying because we should be in software
[00:01:09] And it's all StreamYard's fault.
[00:01:12] So I think this has really been hurting our discovery. Not that as many people watch on Twitch as YouTube.
[00:01:18] All right.
[00:01:19] How's it going, everyone?
[00:01:21] Hey.
[00:01:23] Eh...
[00:01:24] Yeah.
[00:01:27] you
[00:01:28] So, yeah, what we're going to do today is basically like an extended This Week in JavaScript.  Just, you know, there's a couple topics that came up from, you know, Twitters and whatever.  And I was like, OK, let's just talk about it.  I felt like it might not be as relevant after Christmas.
[00:01:46] I mean, don't get me wrong.  People love to discuss the same topic over and over and over and over again.  So I'm sure none of this.
[00:01:55] Um,
[00:01:56] goes but it's funny it's like at this time of year everybody just wants to kind of like  chip in their opinions and double down um
[00:02:03] you know, it's like year ending and everyone's kind of reflecting on what they did this year.  I'm a
[00:02:09] I've been actually...
[00:02:12] um,
[00:02:13] working on an end of year article, kind of follow up to what I did last year. And
[00:02:20] That definitely, you know,
[00:02:23] It's crossing my mind as well as I was working on it, so I can't hear myself as well as I'd like. Just a second.
[00:02:32] All right.
[00:02:32] All right.
[00:02:34] Yeah.
[00:02:36] Thank you.
[00:02:37] I know, it's Wednesday.
[00:02:40] How's everyone doing? I know it's an odd streaming time. I thought what I would do was sneak in between Prime and Theo, but I don't think Theo's streaming today.
[00:02:50] So...
[00:02:52] Instead, I just get the end of prime's overlap, which I'm sure...
[00:02:57] you know,
[00:02:58] How many people are watching Prime right now?  Any of you guys watching Prime right now? Prime's at 1.8.
[00:03:03] K viewers right now
[00:03:05] All right.
[00:03:08] Thank you.
[00:03:10] - Let's get, I'm just gonna tell people that we're live.
[00:03:13] Mostly because...
[00:03:15] um
[00:03:16] As you all know,
[00:03:19] you
[00:03:20] If you saw my tweet,
[00:03:22] There was a reasonable chance that I wouldn't be live today.
[00:03:26] All right.
[00:03:27] Let's do this.
[00:03:29] Quote,
[00:03:33] Thank you.
[00:03:38] Thank you.
[00:03:45] um
[00:03:48] Twitch.
[00:03:50] TV slash Ryan Stolwood.
[00:03:54] That's right, Ryan. Yeah, that's right.
[00:03:57] Thank you.
[00:03:57] Thank you.
[00:03:59] No, I live. No, I am live. I'm glad I caught that before I press post.
[00:04:06] I'm probably not even spelling Xfinity properly, whatever.
[00:04:11] Bye.
[00:04:14] Yes, congrats on beta 2 release. Thank you. That and the router releases,
[00:04:21] were like...
[00:04:23] quite an endeavor. I actually glad I merged the start release properly. I made a mistake with the  reddit release. I know this is kind of off topic, but I'm just going to throw this out here.  People aren't aware of stuff. If you've ever looked at
[00:04:37] your GitHub profile, you have this lovely
[00:04:41] color graph, right?
[00:04:42] Right.
[00:04:44] And I always talked about how there's this terrible gap
[00:04:48] where I was traveling and doing conferences, right?  Like stuff wasn't going on, this was my vacation.  And then you're like, well, what's going on in here?  There's a lot of gaps.  And then here,
[00:04:58] Well,
[00:05:00] The thing is, this only shows gap midst to main branches.
[00:05:06] And
[00:05:09] until you merge the work you've been doing, it doesn't show up. This was actually even more like sparse like the other day.
[00:05:16] Um,
[00:05:18] And...
[00:05:20] What's fun is when you go and you make hundreds of commits,
[00:05:24] on a feature branch and then you squash merge it and it counts as one commit.
[00:05:29] I did that with the router.
[00:05:31] So like,
[00:05:31] This section is much spacier than it should be, so to speak. Even this isn't quite...
[00:05:37] I wonder if this is up to date.
[00:05:39] It doesn't feel like it's up to date because I remember when I checked yesterday.
[00:05:42] I was like,
[00:05:44] There's way more. Anyways.
[00:05:46] Let's not worry about it too much. But
[00:05:48] Essentially
[00:05:50] This doesn't always tell the full story, so to speak.
[00:05:56] Although it does tell you that I stopped working on weekends,
[00:05:58] after the summer.
[00:06:00] Ch-ch-ch-ch-ch.
[00:06:02] So...
[00:06:05] But anyway, let's continue on.
[00:06:10] Thank you.
[00:06:13] Thank you.
[00:06:15] Thank you.
[00:06:16] Yeah, moving from 0.3 to 0.4 is a lift.
[00:06:23] I think the easiest way for someone to do that would be to keep the old version of the router
[00:06:30] with
[00:06:32] or 0.9, I guess you'd probably be on 0.8, with 0.4.  So you can keep the route data loading patterns initially.
[00:06:40] Um,
[00:06:41] New Salt Start works
[00:06:42] kind of rather agnostic. I need to do one more release on 0.9
[00:06:46] But generally speaking, you can continue to use the older versions of the router with the different APIs with a new solid start.
[00:06:54] Like that...
[00:06:56] It was really awkward writing docs when I was like going through and it was like, how do you do this? And I'm like, this isn't solid starts responsibility. How do you do this data loading? I'm like, ugh.
[00:07:05] Do I write a guide for something that has nothing to do with Solid Start?
[00:07:10] It's an interesting question, right? I think the T3 people had this problem because you could,  you know, opt into a whole bunch of different libraries. Do you provide docs for those libraries?
[00:07:20] It's a balance. It's something that I don't have particularly a lot of time for.
[00:07:25] Anyways.
[00:07:28] Okay, yeah, we should talk about that a little bit today. Yeah, I have a lot of topics that I want to talk about. It's kind of a mixed bag.
[00:07:35] Um,
[00:07:40] Thank you.
[00:07:40] Right?
[00:07:42] So like, um,
[00:07:46] Yeah.
[00:07:47] This is...
[00:07:49] Just in terms of solid start and stuff, yeah, this is one of the biggest challenges I'm facing with this stuff right now, because when you move really fast,
[00:07:57] even though it didn't feel like it was fast, it's hard to leave stuff that's kind of like on the table, so to speak. And I knew this was
[00:08:07] Like there was always this risk when with with the solid start beta, that's why we put all those warnings out. Right. So it's like,
[00:08:14] It's...
[00:08:15] it's tricky because we were at this flux,  like this time period, this period in time  where everything is changing.
[00:08:24] It was very obvious.
[00:08:26] by even the end of 2022,
[00:08:28] that
[00:08:29] everything was going to change.
[00:08:32] in I mean we knew early in 2022 that like the whole paradigm around how we approach  server rendering was going to change so it's very hard to try and like you end up
[00:08:42] torn between building the best solution of last gen and then
[00:08:46] Focusing in and building the best solution of the next generation. And this
[00:08:52] is a lot of tension because if you invest a whole bunch of time on the previous generation
[00:08:57] then you are like way behind and
[00:09:00] It's okay if you have users, but when you don't have users,
[00:09:03] and you're new and stuff, you can't come in the gates at the back.  You got to come in the gates at the front.
[00:09:09] So this was a very challenging time to figure out where things fit in.
[00:09:16] we now have something that I'm very confident in because we,
[00:09:21] we separated things along the rate of change. Things that are changed and opinionated,  those aren't part of start anymore. The core start
[00:09:28] now can be much more stable.
[00:09:30] So this is kind of like
[00:09:33] an extension of what we've done with Solid Ecosystem in general.
[00:09:36] People assume that this meta framework should be the most opinionated piece, the piece that sits on top.
[00:09:42] of everything else and puts it together. And in a sense, that's why meta-frameworks were formed.
[00:09:48] But...
[00:09:51] I think we actually have to build from the base more than anything.  We have to understand that, like...
[00:09:56] It's actually things like the router.
[00:09:59] that are most prone to change. Solid itself hasn't changed that much in the last X number of years.
[00:10:05] I want Solid Start to take on those kind of characteristics, right?
[00:10:09] It's a different mentality, but
[00:10:13] It's something that was essential as a small open source team trying to maintain this stuff.  Because honestly, knowing the type of change that's coming in the next year or two,
[00:10:22] it would be stupid for us to just like whip out a remix or Next.js clone,  like just absolutely the dumbest thing we could do in our position.
[00:10:30] Um,
[00:10:31] Bye.
[00:10:32] like...
[00:10:34] I know this doesn't sit with people trying to build up with solid today, but it's like it just it really makes no sense.
[00:10:43] Thank you.
[00:10:46] Thank you.
[00:10:46] Thank you.
[00:10:47] Thank you.
[00:10:49] Yeah. The other thing is like Solid Start Beta 2
[00:10:53] Um,
[00:10:54] The APIs are good.
[00:10:55] But some stuff still needs to shift around here.  Since we're talking about Salt Star, we might as well just start there because that's the release piece.
[00:11:05] But...
[00:11:06] And I can show you by actually going to the repo here.  I'm actually going to go...
[00:11:11] Stay there. We'll get into the main dirt of stuff in a few minutes, but the reason I want to start here is
[00:11:18] These examples now
[00:11:20] in this repo, which are also a start examples. If you went into this bare example,
[00:11:26] And I did turn off, to be fair, I did, it asks you whether you want to use SSR or not.  But this example does not have a router, does not have...
[00:11:35] doesn't need SSR, actually most examples don't need SSR because we support server functions even with client-side rendering.
[00:11:40] But if you come in and see this like Hello World application, where it's just an app, TESX, app CSS, basically an index HTML, I call entry server, and then like your...
[00:11:52] your render command, the difference between this template
[00:11:55] And
[00:11:57] I don't know.
[00:11:58] GitHub.
[00:12:00] Solid JS, whatever, it doesn't matter. Just want to get here.
[00:12:05] The difference between that template and like
[00:12:08] these templates
[00:12:10] Let's just look at the base TS template.
[00:12:14] Source.
[00:12:15] App TSX, App CSS,
[00:12:18] index, which is, I believe, our render call.
[00:12:22] And then
[00:12:23] index.html is out here. It's basically the same thing. So I think ultimately what we're  going to see here in this All-Star project is these templates actually just become
[00:12:36] our templates.
[00:12:37] and don't belong here, probably.
[00:12:40] Um...
[00:12:41] And
[00:12:42] that we're going to replace the CLI for SolidStart, which I can't even build anymore, which is this other package here, createSolid.
[00:12:50] with the new Rust CLI that Tommy, Pop, and a bunch of them have been making.
[00:12:57] Solid start and this MDX library honestly just doesn't belong anywhere. I don't really know what to do with it. It's just like a couple plugins. Someone can make this themselves. I think it's like one file, like.
[00:13:08] Bye.
[00:13:08] I don't even know where this belongs, it doesn't even belong here. It's mostly commented out.
[00:13:13] So what I'm trying to get at is like,
[00:13:15] Start is just this.
[00:13:18] And
[00:13:20] It's interesting because it makes it less a meta framework and more of just like a
[00:13:26] I don't even know what to call it. It's like a
[00:13:29] Is it like a framework?
[00:13:32] Like...
[00:13:33] Solid's a library, Solid Start is a framework. It's just the platform you build things on. It's not like
[00:13:40] I've figured out every piece of the puzzle for you.
[00:13:50] Interesting. Yeah, I mean, we take big influence from Astro Team and the Astrodots.
[00:13:55] Thank you.
[00:13:56] Thank you.
[00:14:00] So yeah.
[00:14:02] And that's the other thing, like how many docs efforts do we need? Can we merge it? I mean, to be fair,
[00:14:07] There was a bit of a
[00:14:08] thing when I released the new version of the router and all the docs had just been released with the old version of the router.
[00:14:14] I mean, I told everyone the new version was coming, but like, what are they going to do? Right?
[00:14:18] So like there is some interesting tension in putting it together.  But if it's consolidated, that gives us one place to look and one place to update.  So I think it's just a win.
[00:14:29] Thank you.
[00:14:30] Well, this is what I'm talking about.
[00:14:36] has incredible...
[00:14:39] opinions and ways to make your life easier and all the pieces built in.  The more you go that direction, the harder it is to move with change.  It's just, it's like, it's just, you're not set up to do so.  You can try to reposition, but like, I think, I, I,  I think I even started witnessing this a little bit with the crate T3 app.
[00:14:57] Obviously the TRPC update happened at the right time, so they were able to kind of like
[00:15:04] shield it and like make it work. But like if Prisma doesn't become the thing and it's a different database, like
[00:15:10] You start becoming responsible for the modules you include even if you don't mean to.
[00:15:15] Hey, nice to have you live.
[00:15:19] Thank you.
[00:15:21] Thank you.
[00:15:26] Thank you.
[00:15:26] Yeah, I mean, it's interesting because we've been doing a lot of R&D.
[00:15:31] We're doing R&D on islands and hybrid routing type stuff on one side.  We're doing R&D on Solid 2.0, but these aren't places where people can actually help.  Like, for the most part, like you got to get pretty deep to understand.  If you want to help with Solid and get started, you kind of want to...
[00:15:48] probably come in
[00:15:50] In the edge, we have stuff like community libraries, solid primitives.  There's a whole RFC process there for introducing new primitives.
[00:15:57] Start is actually, now that we're getting here, is actually a good place to start on because...
[00:16:03] It's actually, it is a little bit higher up.  Now that like the critical decisions are made,
[00:16:08] you know, bugs. I mean, I always point people to docs, but I feel bad because how does someone who doesn't know a project
[00:16:14] come in and document it. I mean, it's a good way to learn, but it's like,
[00:16:17] like our biggest gaps are,
[00:16:20] are
[00:16:21] going to be
[00:16:24] Things that...
[00:16:26] that are missing that you'd have if a large company was working on the framework where they have people doing it. Right.  We have the R&D people working on experimental stuff.  We have, you know,
[00:16:38] you know, people really passionate about these various ideas. It's the regular, normal, you know, quote-unquote boring stuff that we have as a GAAP. But it's not boring stuff because it's stuff that makes impact on people. So...
[00:16:50] I mean, this is just kind of the tricky part of open source.  I always say, like, go try something, build something, and then see what...
[00:17:00] Frictions you hit and that's the perfect place to start
[00:17:03] But that's a very generic answer.
[00:17:08] Yep, Surprise Wednesday stream.
[00:17:15] Yes, yes, yes. I try and keep solid very minimal. Sometimes people kind of complain about some of the stuff that is core, like suspense and transitions, but there are certain considerations. I think we're getting a lot better at figuring out where those lines are. But generally speaking, yes, the router...
[00:17:32] is we didn't take the view approach.  And we didn't even really try and take the Svelte kit type  approach where we--
[00:17:42] Thank you.
[00:17:42] spelt kind of all in. We're more of a React philosophy type library where stuff is out in the ecosystem. But when you're a small player like we are, someone has to build in the first place. So a lot of libraries did start as things that I built over an evening or two. And then, you know,
[00:17:59] got picked up more and some of them are in the solid uh official um
[00:18:04] organization somewhere in the solid community organization where we've had other people pick up them like dev tools and ESLint. So yeah.
[00:18:16] Thank you.
[00:18:16] SolidStock Beta 2 actually is an Astro, it's Nitro, it's built on Nuxt. So this is...
[00:18:24] The new feature stuff you can hear about on the release, but the headline here... Where am I?
[00:18:36] The headline here is Nitro-backed. We've got these crazy new super-powered server functions. Um...
[00:18:44] router metadata library agnostic, which is really powerful.
[00:18:48] Not a big deal maybe in solid because we only have solid router for the most part, but
[00:18:53] The potential here is huge.
[00:18:54] And then we really made sure that client-side rendering works properly in this release. We had a lot of bugs in the previous beta where CSR didn't work, and even hybrid CSR. By that I mean server-render pages where you just have client-rendered only components. We really wanted to make sure that it worked in this release.
[00:19:11] I'm going to talk a bit about Astro in a bit, because there's some...
[00:19:16] Matthew Phillips had a really good tweet that I want to dig into that's kind of on topic today.
[00:19:24] Thank you.
[00:19:26] I mean, PRs have changed. I mean, I'm interested. Don't like go and rewrite SolidStart's file system routing API because you prefer a different one and put up a PR without having a discussion about it first.
[00:19:42] you know there's discussions on the repo but
[00:19:44] I mean...
[00:19:46] One of the coolest things about
[00:19:47] Dart always was is
[00:19:49] Oh, I mean, I think we can see it if we look at it.  Let's look at it.
[00:19:53] This gives you an indicator here.
[00:19:56] Salt Start has had
[00:19:58] 168 contributors.
[00:20:01] OK, and she's 5.6.  That's amazing.
[00:20:05] Let's look at Solid.js itself.
[00:20:11] 156. So in a short time this
[00:20:18] beta project
[00:20:20] has had more contributors than solid itself and i think that that's the whole thing here it is  easier to come in and help us here so we like as i said don't just like
[00:20:29] change something that's clearly an API decision in a PR without discussing it, but
[00:20:33] You know, yeah, I'm definitely open to PRs here.
[00:20:41] Thank you.
[00:20:43] What's the difference between solid and react? That probably needs a longer stream.
[00:20:51] Thank you.
[00:20:53] I don't know, it's been a slow go. I haven't seen the output of it yet. I keep on hearing about these internal projects.
[00:21:02] You know, people are like, "Oh yeah, some people are using Solid at Google."
[00:21:06] I know for sure that Netflix has some solid stuff going on.  I don't know how that project went, right?
[00:21:11] Um...
[00:21:13] Primogen was using solid for a while during his day job.
[00:21:18] I know that like
[00:21:22] they were testing, you know, some mobile or TV UI stuff.  But I don't know, like I know other companies have told us about,  you know, stuff they like.  There's a lot of Astro Solid stuff like NordVPN or Capital One, but
[00:21:38] Yeah, I...
[00:21:41] I've been waiting to see like the push. I keep on hearing about these projects from really excited developers that are having a great time with it, but I haven't actually seen the, like I'm just waiting for the shoe to drop.
[00:21:53] Thank you.
[00:21:55] Are you concerned about the crazy panda chain? A little bit. The trickiest part is Benchy in the middle.
[00:22:03] Um,
[00:22:04] in the sense that
[00:22:06] VEAT is VEAT and we can pass the plugins and everything straight through VEAT is cool.
[00:22:11] Does...
[00:22:12] do some stuff.
[00:22:15] It's the interesting part is, and the reason I'm not being critical of Vinci here, but the reason Vinci is interesting is because Vinci is actually the piece that does all the work, like all the heavy lifting and putting together after that point, Saul's start is like.
[00:22:27] Trivial amount of code
[00:22:29] Vinci's actually doing all the heavy lifting.  So that,  to be fair,  that is probably like the,  the point that there's the most concern,  so to speak.  Um,
[00:22:38] with this stack.
[00:22:39] but
[00:22:41] and
[00:22:43] Like,
[00:22:44] it kind of needed to happen, this abstraction level. And I mean, I love it. Like I was doing something earlier today, I was fixing a bug and someone's like the file system routing for delete API routes doesn't work. And I was able to just go in and just like change like two lines and like fix it. The fact that like,
[00:23:01] Vinci set up to just like
[00:23:03] go in. I think our key thing here is each piece has such minimal responsibility that
[00:23:10] It's not too bad.
[00:23:12] The challenge is when the pieces shift under it and it's harder to kind of have them all reconciled. I'm not, as I said, I was worried about Nitro.
[00:23:21] and Viet. But I think Vinci...
[00:23:25] does wire a lot of the pieces together. And I think that's probably where we should, you know, keep our eye.
[00:23:33] Thank you.
[00:23:34] Um, no, but resumability really...
[00:23:39] It depends on what you think about resumability.  Like...
[00:23:42] Quick partial code splitting optimizer, like,
[00:23:48] I guess you could say we did build it with resume building in mind, in the sense that with a special bundler layer, like we use for server functions and islands and stuff, we leave the door open for some of this more advanced JavaScript code splitting. That being said,
[00:24:03] When I think about resumability, I don't think about it in the same way Quick thinks about it.  I think about it closer to the way Marco thinks about resumability.  And it's about not running code. It's not about code splitting.
[00:24:14] Anyway.
[00:24:20] Thank you.
[00:24:25] Yeah, it should be. Any framework that has streaming should be able to do it. The tricky part is it's very infrastructure specific. So it's like...
[00:24:33] At least today to get it to work, I'd have to go work with Netlify closely to do it and work with Rissell closely to do it.  It's possible that we figure out how to generalize this at like a Nitro level, but like...
[00:24:47] I...
[00:24:48] Right now it's a Next.js for cell feature.
[00:24:52] I think we need to get it like a Next.js Netlify feature and then a Next.js.  Like we need to kind of like span this out a bit and see what it looks like.
[00:25:01] So I'm very stoked now that Solid Start Beta 2 is to work with the Netlify team closer on this kind of stuff.  They're making great platform primitives.  So yeah, between them, Vercel, a couple others.  I think those are the only two that could actually do partial pre-rendering because they have both sides of the infrastructure.  The thing you want to understand about partial pre-rendering is...
[00:25:18] is that
[00:25:20] It is...
[00:25:23] Basically, if you could deploy your whole app to the edge, partial prerendering basically does nothing.
[00:25:28] It just doesn't matter.  So it's basically for services that want to keep the serverless,  like the node server functions close to the database over here  and keep the responses fast like the edge and get kind of best of both worlds.  But it requires this infrastructure link that's very specific to Vercel right now.
[00:25:49] All right, sorry, catching up on chat here.  You guys are just firing them off...
[00:25:53] Quickly
[00:25:58] I mean,
[00:25:59] Not the whole thing, but...
[00:26:02] I mean...
[00:26:04] there's some difficulty here in that
[00:26:08] I'm trying to think of the best way to explain this.
[00:26:12] isomorphic
[00:26:13] JavaScript is a bit of a pain in the ass. I'm not gonna lie. I don't think anyone actually wants it. But it's having JavaScript on both sides is kind of the thing that informs us to make the most optimal client experience.
[00:26:25] and have good DX. The challenge is like it's very hard
[00:26:29] to
[00:26:30] get all three or the whole triangle.  And
[00:26:35] Um...
[00:26:36] This is why
[00:26:38] Like eBay had a Java backend.
[00:26:42] They still have a Java backend, their API services and all that, but their web servers are all node.
[00:26:47] so that they could do
[00:26:48] uh, server side rendering in node,
[00:26:52] And...
[00:26:53] using the same framework, Marko, on both sides, so that they could optimize the delivery of the page, both with the streamed results, partial hydration, using the knowledge of the JavaScript framework on both sides to optimize the thing, the page.
[00:27:07] It was very early. I mean, these days we're not like all starting to explore this, but this is like a decade ago more that eBay did this kind of technology move. And yeah, they moved all of eBay.com.
[00:27:18] off of
[00:27:19] Java for the web servers, but there's still a significant Java presence with all the
[00:27:24] APIs. There's a whole rest of the backend that doesn't involve rendering pages.
[00:27:31] Thank you.
[00:27:32] Yeah.
[00:27:42] I probably just didn't update it. When did, yeah, I guess it's like six months old or something.
[00:27:51] That's interesting.
[00:27:52] Yeah, I must have updated my IDE because I have one to satisfy calls. They seem to be working.
[00:28:00] Yeah, I didn't even look. What's this one?
[00:28:04] TypeScript, yeah, 4.74.
[00:28:06] Weird, it's like locked to a version for some reason. Doesn't matter.
[00:28:12] Yeah, translation is an interesting thing. We had really good translation for our original docs site. I don't know if we're there for the new docs site. That's a good question and one we should put towards the docs team.
[00:28:22] um show if you sign up for our discord and just like pop in the docs channel i'm sure there's  someone who would more love to talk to you about this stuff
[00:28:36] Heh.
[00:28:37] A funny thing is Dominic Ganaway from Svelte really wanted this perfect world to happen to a certain degree. He was trying to shop around. Well, actually, he wanted to build the next framework. He's just like, forget about all your existing frameworks. Let's build a new framework. Unfortunately, we couldn't find the backing and everyone was too tied to their own project and he ended up joining the Svelte team.
[00:28:55] Well, not unfortunately to their benefit, but
[00:28:59] No, probably not.
[00:29:06] Thank you.
[00:29:10] Thank you.
[00:29:11] Thank you.
[00:29:13] Oh, today's stream I'm just going to do this week in JavaScript.  I'm talking about Salt Start a little bit right now, but that's not even really my...
[00:29:18] my goal here. I actually want to talk about what's been going on with discussions on Twitter.
[00:29:27] I mean, the funny thing is all these questions that you all are asking are very like the article I'm working on for year end is very related to it.  Like moving to edge actually happening to me. I feel like this whole thing died off after pre realized the DB communication costs.  Well, it's exactly right.
[00:29:42] That's why partial pre-render is an important feature.  And it's especially exemplified by the fact that
[00:29:49] you know, React server component architecture,  the way that it is today and next encourages waterfalls.  So it's kind of like,
[00:29:56] There's no way that that was a good idea of plan.
[00:30:00] And to be fair,
[00:30:01] Thank you.
[00:30:02] Yeah, like...
[00:30:05] A lot of databases just can't move to the edge ever.  Data security is going to be a concern.  From that perspective,
[00:30:13] I think, as I said a year or so ago, that monolithic authoring with distributed deploy is where things are at.
[00:30:20] I, the only reason I was mentioning that, that whole thing was because like some services  like Dino or Cloudflare, like only have their edge offering. So like,
[00:30:29] It just, that is the offering.  It doesn't make sense for them to offer partial pre-rendering.  Like you either, you use it that way or you don't.
[00:30:37] Right. Like,
[00:30:40] But yeah, we should look at that because you're right, the DB communication cost can even be worse than the direct server cost from the client.
[00:30:48] But that's an argument for client-side rendering over SSR 2, which we can get to in a minute.
[00:30:55] Thank you.
[00:30:57] Yeah.  I...
[00:31:00] You don't need rest yet? I'm sorry. I mean, I'm a big fan of Greg and Leptos and stuff.
[00:31:07] you
[00:31:08] And I think it's really cool that you can do these things.  But JavaScript being the language of the web has pretty much...
[00:31:14] shoehorn these things in a really...
[00:31:16] hard pushed way that even these large companies,  they're looking for performance.  Wasm is not giving,  Wasm will give them like performance  for certain types of widgets,  but it's not going to be like the overall architecture.  It's not the fastest way to get content on the page  to deliver that like,
[00:31:31] you know, initial user experience. So like,
[00:31:33] We're still not
[00:31:36] JavaScript has kind of tied everyone's hands.
[00:31:42] Thank you.
[00:31:52] So at the end of the issue of waterfalls the server, all data calls are hoist the edge to the DB community. Yeah, but I mean, there's still this sort of reality truth that you're like,
[00:32:05] I mean you can think about it even when you render client apps, right? When you are
[00:32:12] I'm sorry.
[00:32:13] As much as we'd love to send everything off in a single flight every time, we don't.
[00:32:18] Right? We like it just doesn't work out that way. So there are some inherent waterfalls. So
[00:32:25] In a sense,
[00:32:27] If...
[00:32:27] I think...
[00:32:28] especially for the work on the server function thing,  they kind of figured out how to reduce the waterfalls  from client to server, right?  Like it's a nice model.  And,
[00:32:37] To have
[00:32:38] you just push that back one more layer,  and now dealing with waterfalls from edge
[00:32:45] to database server
[00:32:47] even if
[00:32:49] you did it more optimally, like you brought loaders in on the server, which is, you know, kind of like what I'm, you know, pushing towards.
[00:32:57] It feels a bit unfortunate because you're like,
[00:33:01] I just cleaned this up and now we're just doing the same thing again.
[00:33:05] Right. Um,
[00:33:07] Couldn't we get rid of this altogether?
[00:33:10] The...
[00:33:11] The challenge, obviously, is that in reality,
[00:33:16] even if your server and database are close to each other,
[00:33:20] waterfalls can still be a thing. There's a reason there's GraphQL data loaders, you know,  N plus one problem. There's, there's a reason, like when I was building ORM, I took, you know,  it was very critical that I figured out ways to reduce the number of database requests. Like you,  you, you,
[00:33:36] You don't...
[00:33:37] want
[00:33:40] these waterfalls.
[00:33:43] even if the latency is relatively low.
[00:33:46] Waterfalls are never a win.
[00:33:48] But,
[00:33:49] if you're trying to sell a developer experience like React is with React Server Components and Next, you know, like where they are right now, I can definitely see why it's like kind of self-defeating if like you just push it down the thing and it's very obvious. Whereas if you could kind of get away with it up to a certain scale and it's nice enough, you could just kind of like,
[00:34:06] push the problem under a rug,
[00:34:09] and be like,
[00:34:11] Yeah, this is pretty sweet.
[00:34:13] Like it becomes that much longer until you have to worry about this problem.
[00:34:17] So it's almost easier to change the infrastructure, like,
[00:34:20] change the
[00:34:22] architecture of the, you know, like change the actual like building blocks, then, then actually  change the like software architecture in this case, because their target is an API, rather than  what something they're trying to do mechanically. And I think I'm not criticizing this, because I  think from developer experience, this is an important thing, thinking, right? Like, you can  see what happens when you build APIs that were designed for performance, um,
[00:34:47] first, not for ergonomics first.
[00:34:51] Um,
[00:34:52] And some people have accused solid of this, perhaps, like the React team, that's your feeling signals.  I actually think the signals thing is actually ergonomic from understanding data flow.  Like it actually makes sense to me.
[00:35:01] Especially because I'm taking the position that I think data flow can't be ignored, where React team is like, oh, no, people don't have to worry about it.  But then they introduce hooks where they do have to worry about it.
[00:35:13] As vindicating as that is, I'm just trying to say, if you think that you don't have to worry about it, then you can kind of push that off to the side.
[00:35:21] But like this scales out to a different level. One could argue say Quix dollar signs.
[00:35:26] are, you know, they're
[00:35:29] way more for a mechanical reason. You would never want them there if it weren't for the case that  you needed them there.
[00:35:36] That's what I mean.
[00:35:46] Thank you.
[00:35:47] It's kind of interesting because they can actually now sell two functions instead of one.  I don't know if that has a dollar function.
[00:35:55] price to it, but it's just interesting.
[00:35:59] Thank you.
[00:36:00] Thank you.
[00:36:03] Thank you.
[00:36:03] Thank you.
[00:36:05] I mean, I don't think so.  The same way out-of-order streaming doesn't work with progressive enhancement, not really.
[00:36:16] Thank you.
[00:36:17] I mean, the edge function could note that the client can't handle it, and then it could buffer the whole stream and then send the whole result at the end.
[00:36:25] You're not really winning anywhere, but it still works.  Kind of the same way we do with streaming.  Like sometimes we look for bots and we're like, you know, like you can set up middleware and be like, hey, there's a bot here.  We don't actually want to flush.
[00:36:38] We want to hold the stream and send everything at once.
[00:36:42] In-order streaming,
[00:36:45] and wait for everything to finish.
[00:36:47] work without JavaScript.
[00:36:49] Out-of-order streaming does not.
[00:36:51] Interestingly enough,
[00:36:53] In-order streaming is really hard to do with JSX.
[00:36:58] Although like,
[00:37:00] I know some frameworks support it. It's funny. Inorder Streaming is really good for like,
[00:37:05] Can I see it live here?  In order streaming looks like eBay.com.
[00:37:10] I mean, it's too fast, but like...
[00:37:13] Essentially, it's really good when your content comes down in these sections and you just kind of
[00:37:18] feed them in and there's no layout shift.
[00:37:20] Out-of-order streaming is very app-like, right?  It feels like your old single-page apps where you have this, like, it feels like
[00:37:26] Where's Twitter? Can I reload Twitter somewhere?
[00:37:31] See the loaders come in and stuff.
[00:37:33] I mean...
[00:37:35] Ideally, this would be already perma-rendered, maybe not the circle, but...
[00:37:40] Yeah.
[00:37:41] *sniff*
[00:37:41] I don't know.
[00:37:42] Thank you.
[00:37:43] Generally, no.
[00:37:49] Yeah, I mean, but this is a matter of skill.  Some people used to complain that Old Svelte was easier up front.  Those people also hate ruins for some reason,  but they're kind of living in La La Land.  I saw a post.  I think Primogen put some post out.
[00:38:03] Um,
[00:38:04] Let's see if I can find it.
[00:38:06] The prime gin.
[00:38:09] Right.
[00:38:11] uh,
[00:38:18] I'm probably not going to find it.
[00:38:22] It was some very pro...
[00:38:25] felt.
[00:38:25] for beginners posts that he wrote that, and there is a linked article
[00:38:32] Um...
[00:38:36] Yeah.
[00:38:36] I'm never going to find it, am I?
[00:38:41] We should talk about DHH and this no build thing.
[00:38:45] That's hilarious. You can actually literally see the JavaScript waterfalls happening here.
[00:38:51] Thank you.
[00:38:51] He's like literally like broadcasting why this is not the best idea.
[00:38:56] Um...
[00:39:00] Thank you.
[00:39:03] Yeah, I'm just not finding it. Never mind. Doesn't matter.
[00:39:07] My point is like,
[00:39:09] I think...
[00:39:10] and maybe this is because I'm an advanced developer, whatever term you want to use for it.  I think we put way too much emphasis
[00:39:18] on
[00:39:19] on
[00:39:21] the
[00:39:23] like easiness upfront bit. Don't get me wrong, you don't want to be uninviting to beginners, you have to make sure that you find a way to hold their hand, make sure they understand the concepts to move forward. But
[00:39:34] If you build your whole
[00:39:37] framework around that concept.
[00:39:39] the end result of when you become
[00:39:42] further along the path is never going to be as nice or clean.
[00:39:45] you know,
[00:39:55] I'm going to go.
[00:40:02] Okay.
[00:40:06] Yeah, I mean, it depends on your business.  If you're eBay, no.  Literally...
[00:40:12] I don't
[00:40:12] Squeezing every possible thing out of performance is 100% worth it. You're in e-commerce,
[00:40:17] at anything large scale.
[00:40:19] you should be trying to squeeze every inch out of performance.
[00:40:24] Everybody else, like,
[00:40:26] I don't know.
[00:40:28] Hi.
[00:40:29] I mean, it enters a more relative thing.  You see correlation.  But there's also what kind of performance.
[00:40:36] Right. I think I think it's interesting.  We keep on seeing Dax show these demos.
[00:40:42] right where he's like look look look at how fast i can look up 60 000 users and do this whole you  know super you know performant thing this kind of performance is not the same as your lighthouse  scores this is your update
[00:40:56] performance and granular rendering performance thing, right?
[00:41:00] RSCs won't help you do this. No, they won't because that's not what they're for, you know?
[00:41:06] RSEs are kind of like a routing paradigm.
[00:41:09] Don't get me wrong, this amuses me to no end because all of
[00:41:13] this whole dialogue that we've been talking about,  about client-side rendering versus server-side rendering,
[00:41:19] that DAX and like Nex are going back and forth with, involve basically React server component projects versus client side SolidJS projects. I don't know if people...
[00:41:29] realize that everyone keeps on asking his stack, which isn't the point, because you could probably build this relatively good in a lot of front end client stacks. He's saying architecturally server components aren't the fit for everything.
[00:41:41] But because everyone's like, oh, what stack?  It must be the stack that makes it faster.  We've got a lot of a bunch of people who are now like, yeah, man, solid.js equals fast.  I mean, we already knew that, but like
[00:41:52] Yeah.
[00:41:53] It's definitely amusing to see these 1.2k
[00:41:57] tweets here kind of get us to that dialogue.
[00:42:04] Thank you.
[00:42:05] Thank you.
[00:42:06] I think React's gonna start with hard meeting because it's not as opinionated. React's pretty opinionated. Maybe not like, like here, use this exact library, but React, like from where I'm sitting, has a lot of strong opinions. I think the difference is, there's a difference between libraries that go like, use this tool, and libraries that actually say like, these are our philosophies and best practices. We won't force you to use these tools because we, you know, but this is how the best put the pieces together.
[00:42:34] Um...
[00:42:35] I think if you don't have either/or,
[00:42:38] then it's a bit like, why are you doing this? Like, either you're like, use these libraries,  because I have the solution, or you're like, I have a belief how things are done. And that in  that sense, as I said, it's all aligns much more with React than some of the other frameworks. But
[00:42:52] I think if you're worried about heart to maintain,
[00:42:55] I think it's...
[00:42:56] because...
[00:42:59] Currently, there's like, I remember people who had old class component React sites didn't complain about the maintenance. Maybe it was too early in the React lifecycle.
[00:43:07] they complained about not being able to like
[00:43:11] extend behaviors and having good patterns for mix-ins.
[00:43:14] I think this maintenance thing really came out post-Hooks because
[00:43:20] you have two things at odds.
[00:43:22] being aware of how data flows through your app and not being aware. React told you don't care,
[00:43:27] yet you needed to care. That contradiction
[00:43:30] at almost a fundamental level,  is why React codebases have become harder to maintain, in my opinion.
[00:43:38] Thank you.
[00:43:39] Thank you.
[00:43:40] Okay. And yes, when you take a best practices approach, you can always add that layer on top.
[00:43:52] I that's why I like.  I'm very.
[00:43:58] what's the term bullish on  react style philosophy in these cases because like if
[00:44:05] you can always find a way to walk into some specific opinions.
[00:44:10] there's enough people  you go on Twitter  you'll find someone  who tells you the best way  to do something  it's not hard to find that
[00:44:18] but not having the flexibility to change
[00:44:22] Well, depends what that opinion is, but sometimes that's the death sentence.
[00:44:32] I don't know where DH is in some regards.  Like, I just don't.  Like, I don't.
[00:44:40] I don't. I don't.
[00:44:41] Actually,
[00:44:44] I talked about this on stream, why I think the no build thing is silly,
[00:44:48] But
[00:44:48] There was actually an article this week, or no, actually in October after he did his first thing, and I think everyone should read this article because it's...
[00:44:57] completely on point.
[00:45:00] Um,
[00:45:07] Here, let's talk about this article for a minute. Also, I want to switch over to Twitch and thank people
[00:45:14] who have subbed, including
[00:45:17] Um,
[00:45:19] ILKOU99, who...
[00:45:22] Oh, no, that's just a watch streak.
[00:45:24] That's still cool. Three streams in a row is nice. I appreciate the support. Sorry, I thought I was having some subs coming in.  Oh, there. Alien Codes. Subscribe to Tier 1.
[00:45:33] Thank you.
[00:45:35] Awesome. See you again.
[00:45:37] Okay, so let's talk about this.
[00:45:44] Thank you.
[00:45:45] Thank you.
[00:45:47] Thank you.
[00:45:47] Okay.
[00:45:49] you
[00:45:49] Thank you.
[00:45:52] Hm.
[00:45:53] Okay, sorry. We'll get to this in a minute. I just read this comment and I have to respond to it. I mean, I use Angular as a pain, but it forces you to write code the right way. So when I work on React for a review project, it's much easier. You can write however you want. Yeah, yeah.
[00:46:06] Yeah, that's the opinionating part. The funny thing is
[00:46:09] Like, this is where people have the different comfort levels, because, like...
[00:46:12] When I look at React, I'm like, wow, like,
[00:46:15] like,
[00:46:16] Like when I see React and I see the way they talk about it and I see the way they document and I see the way they suggest patterns, like in my head, I'm like, this is not signals friendly.  They are very opinionated.  They do not want signals.
[00:46:27] Right. I don't think most people like see that necessarily right off the bat.  Like, like I've watched MobX and React do this dance for years.  You know what I mean?
[00:46:37] But on the other hand, like,
[00:46:39] If you're just like
[00:46:40] This is the Angular way. What happens when Angular is like, "Yeah, we changed our mind. We're going to use signals now," or something like that.
[00:46:47] They just...
[00:46:48] Like, that's a pretty strong...
[00:46:52] signal, sorry to say, like,
[00:46:55] So like, I think everyone has their own comfort in terms of where that balance sits.
[00:47:02] I think you're going to find that
[00:47:04] there's different benefits. I think a lot of enterprises, a  lot of places where you want to like make the development machine are going to
[00:47:10] Go towards places where those opinions are there and they're just like, this is how you do it. Don't question me why I do it. It's just the way you do it. But
[00:47:18] I think
[00:47:19] when you're trying to solve novel new solutions and you want that flexibility, you're going to definitely
[00:47:26] Favour the other way.
[00:47:29] Thank you.
[00:47:30] Thank you.
[00:47:33] Anyways, this article. The three C's concatenate compressed cash.
[00:47:39] Um,
[00:47:40] Began running early July 23, began underwhelmed and left unfinished.  Of course, DHA's to do it.  What this guy did was he's like, okay, is bundling worth it?
[00:47:49] Because what does bundling do? It puts everything into the same files. So it's instead of separate files, it compresses them. So generally you use like minification, Terser. I mean, I don't know if that's the... Obviously there's going to be compressing it over the network. And then on the other hand, you have this question of cache invalidation, right?
[00:48:11] Thank you.
[00:48:11] Thank you.
[00:48:16] Concatenate is probably the trickiest bit to get right, because even though three C's happen to order decisions, it happened later, okay, blah, blah, blah. In HTTP1 world, we are left with six resources at a time.
[00:48:26] Right.
[00:48:28] If we need to go down 18 files, that super chunks will work.  We could bring it-- yeah, OK.  See, this is the thing.  I'm not used to all these chunks.
[00:48:35] Um...
[00:48:37] So,
[00:48:39] But what he showed is that
[00:48:42] h uh h3b2
[00:48:44] should have changed things, but it actually doesn't necessarily.
[00:48:47] Like he's showing the impact of fetching 12.
[00:48:50] And this was very interesting.
[00:48:53] hd2 was 1.4 times slower and about 3.3 times heavier. And I think the reason is when you split into separate files, you end up actually adding extra weight.
[00:49:05] to it. Is this the compressed size as well?
[00:49:09] Because the other problem is you can compress less efficiently when it's not like bigger chunks compress better.
[00:49:17] Yeah, compression favors larger files.  The oversize of 10 smiles would be greater than the original one.  Add to the browser scheduling mechanisms were unlikely to dispatch all 10 requests.
[00:49:25] Right?
[00:49:27] Thank you.
[00:49:28] He was showing that
[00:49:29] With no compression...
[00:49:31] many files was slow was was smaller from a css standpoint it was a c all css
[00:49:36] If this is CSS, this is actually kind of cool,  because CSS can't even minify.
[00:49:40] When you consider minification as part of this as well, these numbers even get more exaggerated.  Okay.  But yeah, many files...
[00:49:48] Okay.
[00:49:48] 3663...
[00:49:50] versus one large file. So it's definitely better for many files. But as soon as you gzip it,
[00:49:55] it flips or broadly it, it flips more extreme.  Like this graph kind of shows it.  It's like once you add compression,  the equation just flips right around.
[00:50:04] And then finally, yeah, he's talking about cash and validation.
[00:50:08] Obviously cash busting and stuff is tricky and there's like a balance here.
[00:50:12] But like,
[00:50:13] This is another example of one of those things where like if you take
[00:50:18] you can always do less concatenating or,  you know,  change the scheme when you have a build system in place.  But if you take,
[00:50:25] that out of the picture you just tie your hands
[00:50:27] from being able to be as optimal as you can be. It's just like, it's, it's just kind of like, there might be a reason to do go no build, but like you are definitely
[00:50:36] taking away your power to, you know,
[00:50:39] deliver an optimal site.
[00:50:40] Anyways.
[00:50:41] Thank you.
[00:50:46] Thank you.
[00:50:49] We need more resources that dive into the problem.  These solve exactly.  Sometimes it feels like React is picked to the stake,  React is then the specific source.  React is definitely, because React is a general purpose,  front-end framework.  Most of these are general purpose.  The thing is, these frameworks generally don't solve  a specific problem.
[00:51:03] Like they solve it like in a wider sense, they solve a specific problem, but all view solids felt all kind of solve the exact same problem.
[00:51:13] So like,
[00:51:15] you know, some are faster, some are like the differences are nuanced enough and situational enough.
[00:51:22] in a lot of cases that it's hard to actually
[00:51:24] just be like,
[00:51:26] choose this when you want to do this and choose this when you want to do that
[00:51:29] On the meta framework side, you know, architectural, you know, like comparing Astro to Next, that's a little bit clearer of a division.  But...
[00:51:37] Um,
[00:51:38] you know,
[00:51:39] something like React, it's popular and you can generally do everything.
[00:51:44] Sold. Oh, sorry, I missed it. And lots of people use it. Sold.
[00:51:53] Are meta frameworks that hydrate on the client like next to do for heavy content sites or static generate sites generate the scenario?
[00:52:00] Depends on how dynamic the stuff is.
[00:52:03] I don't think
[00:52:05] Obviously, one of the scenarios here is like, how bad is that JavaScript and that hydration, and how much does it actually matter for your site?
[00:52:13] That's another question, right?
[00:52:16] Generally speaking,
[00:52:17] If you don't need it, you know, then like don't bother. But I think
[00:52:22] I don't know if for everyone it's that simple because what if you do need it?
[00:52:26] There's a spectrum, which is kind of why people like Astro.  But I think...
[00:52:30] the message kind of gets lost a bit.
[00:52:35] Right. So like
[00:52:37] So
[00:52:38] Thank you.
[00:52:39] Well,
[00:52:40] a lot of the, you know, of this like choose the right
[00:52:44] tool for the job kind of conversation comes up, which is like,
[00:52:48] Because the right tool for the job is usually not...
[00:52:51] based on technical merit, in my experience.  Like, it's a little bit, but it's not like that.
[00:52:57] There's definitely a right tool for the job given your team and your organization and all that stuff, but it's not always as
[00:53:04] Like...
[00:53:05] technical there's too much overlap and nuance
[00:53:08] Sometimes there's...
[00:53:10] So I don't know if there's always a right tool for the job from a technical sense, but there's often a wrong tool for the job.  And that's probably where you want to avoid things like...
[00:53:20] You know, there's certain cases where I would not want to use React, probably.  In those cases, I probably wouldn't want to use Solid either, but
[00:53:28] it would be maybe passable, right?
[00:53:30] Um...
[00:53:31] You know, I'm just as an example.
[00:53:35] Anyways, this article...
[00:53:37] is
[00:53:41] is just great. It gives hope for different bundling stuff. But it just...
[00:53:48] The DHH conversation is just...
[00:53:52] *sigh*
[00:53:54] Thank you.
[00:53:55] I'm tired of it. I don't know what he's selling. It seems like a lot of garbage.
[00:54:02] Thank you.
[00:54:07] Thank you.
[00:54:09] How concerned do you guys think that the development team should be looking at migration path?
[00:54:16] Thank you.
[00:54:19] Thank you.
[00:54:20] Okay, I should rephrase this a bit.  'Cause when I was working in a startup,
[00:54:27] I was very concerned about how easily I could remove this piece of this software. I was like, "Okay, if I don't want to use this chunk, can I remove it and replace it?" So I will agree with it. What I was more getting at is
[00:54:42] there's a limit to that, right? You can define boundaries and look at like,
[00:54:48] certain types of technology, you're like, okay, I have a database system.  How easily is this swappable or this, you know, but I think one of the challenges
[00:54:55] Jesus within the same zone. It's very hard to predict and
[00:55:01] the like
[00:55:02] I used
[00:55:03] Angular in 2012, I'm going to use React 2016.
[00:55:08] For the thing that will replace the thing itself and not the boundaries, I think it's hard to be prepared for, right?
[00:55:16] Like you can think you can set the right boundaries, but you'll probably...
[00:55:20] fail. Like I went through a migration process
[00:55:23] where I kind of watched this kind of pattern where we had the completely, like we were just changing our view patterns.  We were moving to like a web component with knockout solution from like a very MV,
[00:55:36] MV, sorry, MVVM pattern.  And sure, it started with just replacing the view layer,  but then we had to change the hookup to the data layer.  Like basically,
[00:55:45] all our cleanly built boundaries no longer were clean because the boundaries themselves shifted architecturally.
[00:55:54] So like...
[00:55:57] I think we do have to somewhat anticipate removing pieces, but then we also have to realize that boundaries change over time.
[00:56:05] So we shouldn't necessarily put too much work into enforcing the contract of those boundaries necessarily, unless it's a people boundary, because when people are involved, everything gets more complicated.
[00:56:17] But if you're kind of within the same team or whatever, maybe not.
[00:56:20] Because those walls, the more you build them up, the harder they are to tear down.  And that is the biggest pain of migration, in my opinion.
[00:56:27] the boundary shifting, not the replacing libraries thing.
[00:56:33] Thank you.
[00:56:35] Thank you.
[00:56:36] What color is your laborkini though, right?
[00:56:42] Oh, thank you.
[00:56:45] Oh man.
[00:56:48] Uh-huh.
[00:56:51] Thank you.
[00:56:52] Thank you.
[00:56:52] "Frameworks use signals should be easier." Yeah, I mean...
[00:56:56] There's hope, maybe a browser standard signal.
[00:57:00] I'm glad that there are these forces at play that try to standardize and these other forces that try to innovate.  They're, like, constantly, like...
[00:57:07] They're forces. They're not people. They're not groups. Things shift where they fit on the spectrum over time.  But there are forces at play that cause us to constantly pick apart things and innovate.
[00:57:17] and other things to try and find standards.
[00:57:20] And without both working really hard at the same time,
[00:57:24] we don't progress.  Right.  Like,  so,  so,
[00:57:28] Heh.
[00:57:29] I don't know. I want to be optimistic about the other side. I obviously spend my time on the pushing boundary side, less on the standardization side.
[00:57:37] Um,
[00:57:39] Oh, I guess I've spent my time in the middle.
[00:57:41] really, because I focus on the primitives, but like,
[00:57:44] Thank you.
[00:57:47] It's just never that easy.
[00:57:49] Okay.
[00:57:53] So...
[00:57:55] Yeah, okay. We talked a bit about no build. I don't actually have much more to say about no build, to be fair. But let's talk a bit about this whole SSR-CSR thing.
[00:58:04] because
[00:58:11] It's kind of funny because this data loading pattern here that he's showing here, yeah, you probably wouldn't want to use a server component for it, but you could put this component on...
[00:58:20] an RSC rendered page and can I get the same
[00:58:24] thing i guess i what he's talking about though is i think this is like an offline setup
[00:58:29] So like local first, is it?
[00:58:34] Local first.  So funny, local first, we go through these trends on web dev because local first was  like so hot late 2000s.
[00:58:42] and tens, like from 2017 through 2020, and then it just disappeared.
[00:58:46] Everyone like went to SSR during COVID.  Maybe it was the push for e-commerce and, you know, all the VCs buying up all the open source frameworks.  And they're like, how do we maximize our profit?  Because in e-commerce page loads are everything.
[00:59:01] We need good SSR.  I don't know.
[00:59:03] but
[00:59:05] Um,
[00:59:06] People have been talking about local...
[00:59:08] first much. The funniest thing though is, and I've showed this on stream before, I wonder if I can show it again.
[00:59:13] People might remember that I did, I used to do this like Hacker News, was it Hacker...
[00:59:19] Do I even have it anymore?
[00:59:21] Hacker and
[00:59:23] Hacker
[00:59:24] News CSR. Yeah. I usually use this demo. This is a client rendered hacker news demo.
[00:59:29] Right.
[00:59:30] And
[00:59:32] You know, it's pretty fast.
[00:59:34] It's, we're fetching directly from the client, you know,
[00:59:38] and it's all client rendered, it doesn't even render the page.
[00:59:42] You'd think that if I went to a page that says has a bunch of comments in it,
[00:59:46] and I reloaded the page.
[00:59:48] and then I took an SSR page,
[00:59:50] that, you know, version that has preloaded the page and then hydrates it, that
[00:59:55] The SSR page shows the content first, so it should win on like a Lighthouse score.
[01:00:00] Ironically,
[01:00:03] Not necessarily.
[01:00:06] Because they look at stuff like blocking time...
[01:00:09] and JavaScript.
[01:00:10] when especially pre streaming before we had streaming,
[01:00:14] the server render page would be slower to respond because it needed to fetch all that data before it showed anything in the browser.
[01:00:21] And if you're net, the funny thing is, yes, if I took this to browser simulation, did mobile, you'd see that you might see the difference. But locally,
[01:00:29] you know, on my machine, so to speak.  You never see it because I'm in Silicon Valley  and I have a fast internet connection.  If the internet connection was fast enough,
[01:00:38] Um,
[01:00:39] it would outscore it.
[01:00:40] And in fact...
[01:00:41] This is how solid before we had SSR was winning all the real world demo  comparisons and stuff against all like the, you know,
[01:00:49] Next.js's and what was the Svelte sapper equivalents? Because literally the server function, or sorry, their server rendering actually made the page load slower, which is crazy. Now, it's
[01:01:01] partially because they weren't handling data waterfalls properly and like a whole bunch of other stuff. And people building these demos weren't necessarily the framework authors and you know, so on, so on. But my point was that with a fast network connection, you're never going to really suffer this and even early solid streaming.
[01:01:19] We never used to stream HTML. We actually used to stream only data.
[01:01:23] It was... it is slightly faster
[01:01:26] in these fast network situations
[01:01:28] then
[01:01:30] streaming the HTML and you might be like, how is that possible? They both end up fetching on the  server on that initial request.
[01:01:37] Thank you.
[01:01:38] They both serve the page right away, both start, you know, rendering the JavaScript right away. Well, the difference,
[01:01:45] So subtle. Was that...
[01:01:49] When the server-rendered page
[01:01:51] hit the suspense.
[01:01:53] Like, it basically, like...
[01:01:56] the server-rendered page hit the suspense boundaries, it would stop.
[01:02:01] because it needed to wait for the content to come from the server to continue hydration.  Where the stream data version
[01:02:09] While it still needed the data to actually finish the page, it actually kept on rendering into the suspense boundary the way it does when you use client-side suspense, right? It's doing it off screen.
[01:02:19] So that when the data came, it just filled in the blanks and showed what was there.
[01:02:23] which ended up being faster than moving the content
[01:02:27] that you stream to the bottom of the page, the HTML,  and inserting it into place and then hydrating it.
[01:02:33] Crazy, right?
[01:02:36] So,
[01:02:38] I just want to point out that it isn't necessarily completely clean cut. Another example is like all these server loaders that we're using these days in server functions.
[01:02:47] Sometimes when you do the hop, like do I have to Excalibur draw this?
[01:02:54] Think about...
[01:02:57] what happens here? We have
[01:02:59] you know, API service over here. Here's our API, right?
[01:03:03] And then...
[01:03:05] Here's you in your browser.  Actually, let's use a different shape for API.  Never mind.  Let's do this.
[01:03:13] Let's use a different shape for API.
[01:03:15] I'll make it a circle.
[01:03:18] Okay, our API server is over here, right?
[01:03:21] Again, part of this is we're talking about
[01:03:24] Classic
[01:03:26] architecture. Sometimes when you try and put an existing architecture into a new architecture, you're not going to have the best results.
[01:03:33] Um...
[01:03:35] What do we want the background or browser to be?  I don't even care.
[01:03:39] Whatever.
[01:03:43] What a br...
[01:03:45] Browser here and let's make this a
[01:03:48] our serverless function and we'll give it a different color.  Let's do that, okay.
[01:03:54] Now...
[01:03:55] I'm
[01:03:58] When you do
[01:03:59] Client-side Rendered app,
[01:04:02] They're white.
[01:04:04] You're going to do this.
[01:04:05] When you do...
[01:04:08] uh
[01:04:10] uh like
[01:04:12] move your data fetching to the server app
[01:04:16] you're going to do
[01:04:19] this, if it's just proxying it, like maybe this is the edge, maybe this is this, like assuming that you're always still going to get your API, like you have a separate API service, which a lot of everyone coming out of the 2010s did, which is an interesting thing, because you can already see the length of this is longer than the length of this.
[01:04:35] Um...
[01:04:36] Obviously,
[01:04:38] This is because of how I drew it, but sometimes
[01:04:41] you know, edge functions, it can be like this.
[01:04:43] Sometimes it can be a bit like this.
[01:04:47] You know what I mean? Like,
[01:04:49] Sometimes it's like this:
[01:04:52] And in these cases, it's actually kind of, which side do you do more of?  More of this or more of this?  I don't know.
[01:04:59] Right?
[01:05:00] But,
[01:05:01] in almost
[01:05:03] all cases where you can do this, this might be the most direct pipe.
[01:05:09] Like you only need to do this on initial render, but this kind of split.
[01:05:14] you know, like there's a lot of reasons to do this, you know, security considerations or like
[01:05:20] caching or there's a whole bunch of other reasons why you might want to do this. But I just want to point out here that like server functions to just fetch another API,
[01:05:28] Um,
[01:05:30] are
[01:05:32] adding an extra hop potentially.
[01:05:36] Tsss.
[01:05:37] Thank you.
[01:05:40] Thank you.
[01:05:41] That's the best.
[01:05:43] DAX apps are so fast that Friday shifted to today.
[01:05:49] Yeah.
[01:05:51] Thank you.
[01:05:53] So I just, like...
[01:05:56] It's okay sometimes shaving these milliseconds for like, if you only have to go here and you don't have to go here, well, guess what? You just want considerably, right?
[01:06:04] So like...
[01:06:06] It's not as clear cut. I just wanted to show that
[01:06:09] Like technically speaking,
[01:06:12] It's kind of like...
[01:06:14] If I took
[01:06:15] Go.
[01:06:16] rendered my page on the server,
[01:06:18] or Rust or something, and then wrote pinpoint JavaScript updates
[01:06:24] using vanilla JS.
[01:06:26] Kind of jQuery-esque.
[01:06:28] my hydration costs would be basically zero.
[01:06:31] and I'd have a very often little page
[01:06:34] And
[01:06:36] I, you know, basically have a server first architecture, maybe, you know, I could even add like
[01:06:42] swaps, I could do something like HTMX does.
[01:06:45] and swap pieces and kind of get...
[01:06:48] this and like
[01:06:49] If I did exactly the right thing, handled the right JavaScript in the right way, like
[01:06:54] that could be more optimal
[01:06:58] if I made the right decision points at every point, you know, in terms of when to swap with  HTMX, when to do JS, when to do this,
[01:07:03] than using some modern framework abstraction.
[01:07:08] Thank you.
[01:07:10] But then there's always this question like,
[01:07:13] will that scale with people?  And if that's the case, like...
[01:07:19] how much am I losing here versus like,
[01:07:23] Like I can apply those optimizations elsewhere, right?  Caches or whatever, like just trying to understand where a reasonable balance of how concerned you could be because.
[01:07:32] At a certain point,
[01:07:34] The one thing we do know 100% is that if you just were jQuerying and HTMXing it,
[01:07:38] there is a level of complexity that that will be absolutely insane.  And it will get to that complexity before, say, React does.
[01:07:46] *sigh*
[01:07:47] But,
[01:07:49] Maybe you don't get there.
[01:07:52] So who cares, right?
[01:07:54] This is a bit like when people have been asking me on stream about Astro. I keep on getting them. I'm not ignoring you.
[01:08:00] I'm gonna get to Astro in a minute.
[01:08:01] I just wanted to kind of
[01:08:05] frame this a bit properly because
[01:08:09] I want to talk about this SSR, CSR thing first, essentially.
[01:08:15] Thank you.
[01:08:16] Yeah.
[01:08:19] I'm having a good time using HTFs and lit components and lit SSR.
[01:08:22] Yeah, there you go.
[01:08:26] That gives you a few slightly higher level tools
[01:08:30] Um,
[01:08:32] And I think...
[01:08:33] I think an experience like this is almost like a makeshift astro at that point, right?  Because you're using HTMX to load partials, then you can server render these lit, hydrated components.
[01:08:45] And...
[01:08:46] You kind of just made Astro, so to speak.
[01:08:50] So I'm sure and the cool thing is like you didn't pick up in a sense you didn't pick up astro  You just used a couple things you chose and put them together. So that's very powerful
[01:09:00] But I am getting somewhere here eventually.
[01:09:04] ignoring astro fans is dangerous i'm not not ignoring astro fans we're
[01:09:08] We'll get to Astro.
[01:09:10] Um...
[01:09:13] Mm.
[01:09:14] Uh...
[01:09:15] I want to I want to know where are we where are we? Yeah, we already talked about Dax here. But
[01:09:20] Um, it's, he's been going back and forth, um, with this guy.
[01:09:27] Right?
[01:09:31] And honestly, I read this tweet,
[01:09:35] And there was so much I wanted to unload out of this one.
[01:09:39] Like, I was like, man, I could just do a whole stream on this one tweet.
[01:09:43] And that's largely why we're streaming today.  But I think there's other references, points,  so we don't have to spend as much staring at Guillermo's face right here.
[01:09:54] Okay.
[01:09:55] -
[01:09:57] But there's a lot of nuance here now. I kind of want to look at this a bit because
[01:10:04] I'm glad he clarified the CSR SPA world, because as we saw from Malte last week, there's a lot of people when they say single page app, they mean CSR.
[01:10:13] Um,
[01:10:15] I think single page app
[01:10:17] and CSR should not be equivalent.
[01:10:20] equivocated. Like I think like
[01:10:22] single page app,
[01:10:24] can be CSR'd, it can be SSR'd.  The thing that makes a single page app is because...
[01:10:30] it operates
[01:10:31] off
[01:10:32] that
[01:10:33] client
[01:10:34] style routing. Basically the app has this
[01:10:38] Like it's a single connected client side app.  The part that makes the architecture, it is
[01:10:46] client rendered, client hydrated in a sense.
[01:10:49] But the fact that the whole
[01:10:51] It doesn't prevent it from being pre-rendered is all I mean. Like it,
[01:10:56] It is fundamentally...
[01:10:58] a single
[01:11:00] entry
[01:11:01] It's not like islands.  And I'll explain the difference of server components in a minute.  Um...
[01:11:07] But
[01:11:08] These characteristics define its architecture, right?  You must be willing to ship all the code for all the possible data before rendering can begin.  This is why you see so many spinners, blah, blah, blah.
[01:11:17] Um...
[01:11:18] He talks about Google a bit.
[01:11:20] But yeah, let's pick this apart a little bit.
[01:11:26] Yeah, see, I don't consider server components a single page app architecture, and I'll explain that in a bit, but...
[01:11:32] Next has always been, you know, historically a single-pager thing. That was why it was so hilarious when Guillermo posted
[01:11:39] single page apps were a zero interest rate phenomenon.
[01:11:43] If he was talking about CSR
[01:11:46] I get it, but in my head he was talking about Next.js.  Like that's how I read it.
[01:11:51] Which...
[01:11:51] you know,
[01:11:52] But,
[01:11:54] I know that's not what he meant.  It was just that was where my amusement was.
[01:12:00] Yeah, no, this is... The problem with CSR was not a term, right? We just had single page apps that were originally client rendered, then they had a pre-rendering. And just in the same way that when...
[01:12:11] Originally, multi-page apps was not a term. MPAs, no one called it. It was like we had websites, you know, like my rail site, and then we had single page apps. We had to backtrack.
[01:12:21] Once, this often happens, once you get a category, once you define it, you have to define what the other
[01:12:27] alternative is. So now that SSR has become so prominent, we now have to say CSR.
[01:12:34] But they are both single page apps.
[01:12:36] And in a sense, now that single page apps have become so prominent, we have to say multi-page apps instead of just saying website, because website could be either. It doesn't mean anything anymore.
[01:12:46] I
[01:12:47] So, okay, one of the reasons Reactor components are inevitable, much like Thanos, is UI is a function of data.
[01:12:54] This is true. Data drives
[01:12:59] pretty much all of user interface. Like sure there's layout, but it all is driven off data.
[01:13:04] This is why I think data flow is really important in UI components, why I'm a big fan of signals.
[01:13:10] Because
[01:13:11] There's a difference between
[01:13:13] saying this
[01:13:17] in the
[01:13:18] general sense?
[01:13:20] and drawing
[01:13:23] Mm-hmm.
[01:13:23] this
[01:13:26] or state or whatever the hell you want to call it, right?  We've all seen this UI as a function of state thing before.
[01:13:35] you
[01:13:38] In general, I can agree with this. The problem is when I see this,
[01:13:43] This implies
[01:13:46] Like, um,
[01:13:47] big composition, right? Like this implies that
[01:13:50] that
[01:13:52] you know, we should define that function is
[01:13:56] Could be.
[01:13:58] function
[01:14:00] Sorry, I'm trying to think of like, I'm trying to, I'm like making up notation while I go, I shouldn't even use that, but
[01:14:05] I'm kind of just capital F function.
[01:14:08] defining function is
[01:14:13] I'm just... whatever.
[01:14:17] Could be...
[01:14:18] function 1 state,
[01:14:21] plus function to state
[01:14:23] and so on.
[01:14:25] Right. The problem I have when I look at this is
[01:14:29] It almost looks...
[01:14:31] like it's a single tree.
[01:14:34] It's just like you...
[01:14:36] And it actually could be state part here.
[01:14:42] Like, and...
[01:14:46] This
[01:14:48] isn't necessarily true.
[01:14:50] This is like, I think the biggest flaw with the like react from a fundamentals thing.  It's not a flaw.  It's like a choice to oversimplify it.
[01:14:58] to basically say that this is true, because then it removes a lot of the things you have to consider.
[01:15:05] But
[01:15:06] in general, state
[01:15:09] and UI overlap, but they aren't the same thing.  They aren't the exact same tree.
[01:15:14] The state can affect multiple functions, which this can handle as well.  But the problem is you can tell the problem right off the bat.
[01:15:21] your state only has one entry point and then it,
[01:15:23] works out.
[01:15:25] That's not how these things work. Those connections are not necessarily along the composition boundaries.
[01:15:34] And they don't, the ownership doesn't fall
[01:15:38] out here somewhere where you pass the state in, like let state and then passing it.
[01:15:43] that
[01:15:44] That is the flaw.
[01:15:46] or limitation of thinking purely in like React zone.
[01:15:52] These things are tightly coupled and related,
[01:15:54] but they aren't the same boundaries.  They aren't actually the same thing.
[01:15:59] Um,
[01:16:00] This doesn't have very much to do with his tweet.  It just...  It immediately...
[01:16:05] caught my head here because
[01:16:08] React server components...
[01:16:11] you know, and data fetching inside the component and stuff, like the whole, like,
[01:16:16] pattern
[01:16:19] and not hoisting and like all that thing kind of, it makes perfect sense for React because it plays into the same oversimplification, which is probably the source of most tension in React architecturally, although it's also the source of the most simplification.
[01:16:33] Like it's a double-edged sword.  I just wanted to point out that UI is a function of data.
[01:16:41] in a general sense,
[01:16:43] Yes, in a functional programming sense,
[01:16:45] I think that is like
[01:16:47] the React
[01:16:49] brain sort of thing. And I think it's not quite
[01:16:53] necessarily the best way to model stuff.
[01:17:02] That's cute.  Like it's fine.  This is a good model.  You need a mental model when you go into using a framework.  Stuff that the mental model is more important  than the tool itself.
[01:17:13] Thank you.
[01:17:15] Thank you.
[01:17:20] Okay, sorry, a question came in before I should have moved on. Let me just a second. But that I just want to kind of lay that out. Do you think you will get to a point where all we can do all the rendering the client no SR even for SEO heavy pages, assuming that the kind can start data fetching stream it down?
[01:17:36] No.
[01:17:37] No, I mean, unless something fundamentally changes with the web in terms of preloading, you know, because the e-commerce guys,
[01:17:47] who are seen to be driving the direction of the web
[01:17:50] are all about that first hit.
[01:17:52] The reason we do all of this is because
[01:17:56] Shoes
[01:17:59] Thank you.
[01:18:02] If this link click is slow, I've already bounced. Shit, this must be a single page app. See how slow that was?
[01:18:13] I'm on fast internet.
[01:18:16] Sorry, Karuma USA.
[01:18:21] Does anyone here do better?
[01:18:25] How about Rothy's?
[01:18:28] Not bad, Rothy's.
[01:18:33] This alone
[01:18:38] is
[01:18:39] is probably going to have to be impacted. I mean, it depends where the money's coming from.
[01:18:43] But it's like, if you can solve this problem, why don't you?
[01:18:48] Thank you.
[01:18:50] That wasn't a Dax out.
[01:18:58] Thank you.
[01:18:58] Yeah, well, but the data fetching isn't that...
[01:19:04] Okay.
[01:19:06] Okay, okay, well, I mean, sorry, maybe I misunderstood your question.
[01:19:11] When I say client rendering, I'm assuming the data fetching is happening on a waterfall from the client. Let me read your question again. Do you get to the point where we can do all the rendering on the client, no SSR, even for SEO? The server can kickstart data fetching and stream it down. Okay.
[01:19:24] Well, I mean...
[01:19:30] Eh. I mean, that...
[01:19:32] I mean, that is SSR, kind of. I mean, I used to do this in my own old spa pages. We'd server render the data into the top of the page and then we'd render it with the client side. That's how we used to run it in Bitagami.
[01:19:46] Yeah, I mean...
[01:19:48] Okay.
[01:19:50] May...
[01:19:52] It's interesting. I didn't talk about this yet, but see Google bought
[01:19:56] I'm not sure.
[01:19:56] They can handle the SEO of these JavaScript-heavy pages that do the rendering, but they downgrade it.  If they can read the HTML synchronously, they give it a different...
[01:20:08] The scoring and stuff works different than if they can't get the page all over.
[01:20:12] all at once.
[01:20:15] So, I don't know. I feel like we're still a ways...
[01:20:19] from
[01:20:20] from this really being...
[01:20:24] a thing
[01:20:25] It's interesting, though, because I can see the desire here, especially when you talk about offline experiences, because you're like, you're only paying that upfront cost once, you know, like, in a sense, mobile apps are like that you like download the app, and then you're kind of done, right?
[01:20:40] It's interesting.
[01:20:42] like what we're optimizing for. It's quite possible that we're over
[01:20:46] compensating for
[01:20:49] this scenario?
[01:20:51] Whoa, what's this website?
[01:20:55] Middle ground.
[01:20:58] Thank you.
[01:20:59] But...
[01:21:00] Like...
[01:21:03] I don't know.
[01:21:10] Thank you.
[01:21:11] Yeah, yeah, yeah, yeah. I know this is about other backends, and this is the problem. I mean,
[01:21:17] It could change in the future and stuff, right?  The way stuff's heading right now,
[01:21:23] For the best client-side experience, you have to use JavaScript on the server.  It's just like non-negotiable.
[01:21:28] Like it's, that's why I made that comment when Prime rated my stream a little while ago about like the best thing you could do to improve the performance of the app for your front end users is use JavaScript on the server.  And like, I'm not like...
[01:21:42] I don't mean for everything all that, but I am actually relatively serious about that.
[01:21:47] Right now.
[01:21:48] I know people are doing Go server component stuff.  It's really interesting with a server component model  that you could be like,  well, I can make the server components use Go.
[01:21:57] Like,
[01:21:58] if they could process the JavaScript. The problem is like,
[01:22:01] How dumb is your templating versus your logic?
[01:22:04] I I.
[01:22:07] Thank you.
[01:22:07] Thank you.
[01:22:08] Eh.
[01:22:09] Thank you.
[01:22:10] It almost always leaves you into two systems.
[01:22:13] Which is fine, you're kind of opting into it for performance reasons. But I don't think, I think the, like the DX people are going to be chasing after something else for quite some time. Because there's this hope dream that we can just write stuff a single sort of way and for all the work and almost all the things that involve splitting the languages don't give you that, that experience.
[01:22:37] Thank you.
[01:22:41] The thing about this drawing here...
[01:22:45] that I showed in Excalibur earlier,  where I struggled with APIs.
[01:22:49] Consider an alternate...
[01:22:52] architecture.
[01:22:55] that look more like
[01:22:59] Let me put something here.
[01:23:03] Thank you.
[01:23:05] Thank you.
[01:23:07] What color do I want to make this blue? I don't really care. An alternate architecture that looked more like this.
[01:23:16] Thank you.
[01:23:18] Thank you.
[01:23:21] Thank you.
[01:23:21] Now, I've made this edge. This could literally be any server. We don't really care.
[01:23:26] server
[01:23:28] Thank you, Skeledraw.
[01:23:30] Let's widen it a little bit.
[01:23:35] This is why diamonds are not good shapes.
[01:23:39] uh
[01:23:40] But,
[01:23:40] What I'm trying to get at is,
[01:23:43] Yeah.
[01:23:44] If you remove the API hop,
[01:23:46] this could essentially be the same difference.
[01:23:52] Like, this is your API.
[01:24:01] Thank you.
[01:24:08] I heard a Node.js trivia say they have built more Performer.js apps than Rust apps.
[01:24:17] I'm not sure what to think about that  because it's like, I think  the beginning, her to Node.js contributor  basically says a lot.  But yes, I mean,
[01:24:27] JavaScript doesn't have to be slow.  I remember we were testing at our startup,
[01:24:32] the difference between running our service in Node and running it in Python.
[01:24:38] And because of the, like, I think we're using tornado or something because of the, uh,
[01:24:42] the
[01:24:44] parallelization of the way node was handling like async,  it was actually more performant for our use case than using Python.  For example,  I don't know.  I,  there might be scenarios where this makes sense,  you know,
[01:25:01] Thank you.
[01:25:05] The true diamond problem.
[01:25:10] Thank you.
[01:25:12] Thank you.
[01:25:15] Yeah, yeah.
[01:25:16] Thank you.
[01:25:17] Thank you.
[01:25:18] So,
[01:25:20] Yeah, the reason I wanted to draw this for a moment was just to kind of like highlight that...
[01:25:25] Let me see. There is a question that someone in written a comment here about data fetching. It's fine. I'm not going to
[01:25:33] worry about this.
[01:25:35] All right. I was recently thinking about SR and even that is not good enough because we are proxying your request to an API. Maybe we need to figure out a good way to templating with progress of enhancement. Yeah, sorry. I took it out of context. I was just thinking about the fact that like...
[01:25:49] a lot of the monolithic frameworks are actually telling you to do this and not do this.  Like if you have an API, make it a separate endpoint.
[01:25:57] Have them both talk to the same...
[01:26:00] like the same backend.
[01:26:03] That was the only thing I was kind of playing with.
[01:26:06] Anyway, um...
[01:26:09] Because they're making use of edge servers. Yeah, right. Exactly. That's probably where the.
[01:26:14] it comes in, then you effectively need a certain API.
[01:26:18] I don't know. Does Prisma work on Edge yet?
[01:26:21] Prisma even fast? Okay.
[01:26:24] Let's get back to our buddy Guillermo here.
[01:26:28] Okay, in a CSRS bar, you must be willing to ship all the code for all the possible data before rendering can begin. This is why you see so many spinners.
[01:26:36] Thank you.
[01:26:37] Thank you.
[01:26:40] Thank you.
[01:26:42] Is that true?
[01:26:46] No, that's not true.
[01:26:49] For rendering to begin, we had to think about this again.
[01:26:55] Now obviously, if you do break it up a bunch, that's why you see a bunch of spinners, especially if you don't module preload and parallelize them. You know what I mean? Like you should make sure, but see in a CSR world, you don't know what page you're going to be on, so you can't very easily module preload them. Like if you go into Hacker News example here,
[01:27:14] When we go to the network on our CSR version,
[01:27:17] There's probably not that many
[01:27:19] Uh...
[01:27:20] Ah, this is, is this the new version?
[01:27:22] Oh yeah, damn it. I gotta always go on incognito because of freaking Chrome extensions. Okay.
[01:27:29] Let's go here.
[01:27:31] Let's look at the JS.  What...
[01:27:35] Okay.
[01:27:36] So, yeah, see, because it gets the main bundle, it gets the stories page, but then it's like, oh, I didn't realize I needed...
[01:27:44] Actually, this stories page is something I injected myself.
[01:27:47] Usually it would get the name bundle,
[01:27:50] Because I knew that most people would land on the stories page, so I always load it.  But most people get the main bundle, and then they cascade into the specific page they need.
[01:27:58] Right. Because
[01:28:00] So this was a performance hack I did myself.
[01:28:05] Whereas like when you SSR the page, you know exactly what JavaScript you need for the page. So if I went to like this version,
[01:28:13] what you're going to see is these load at the exact same time.
[01:28:17] See, entry and ID, because you have that information.  So I will...  I will...  I will...
[01:28:23] bite on this a bit because on CSR, you don't,
[01:28:28] need all the code because you don't need to load the code not on your route, but
[01:28:33] You don't know what page you're on before you know what page you're on.  So there's this inherent waterfall if you use code splitting.
[01:28:41] So there's always going to be that spinner. I don't think spinners are a bad thing. Streaming, for example, also has lots of spinners because you send the response back before the data.
[01:28:52] I think...
[01:28:53] I mean, there's a question here.  There's a balance.  But when you can send back
[01:28:58] Feedback.
[01:29:00] like from an affordance standpoint,  you can go,  you can either go,
[01:29:03] Thank you.
[01:29:04] Wait for the whole thing and it shows up in one go, which is smoother.
[01:29:08] If if
[01:29:09] It happens relatively fast.
[01:29:11] or you can show feedback while it's loading and load the thing sooner and show that it's loading.
[01:29:16] Usually,
[01:29:19] up to a range that is better. If it's fast, you might not want to be as heavy handed. If you  already have content on the page, you probably don't want to drop back to a loading spinner. But
[01:29:32] We're talking about initial load here.
[01:29:34] like tell me I'm going to the next page.
[01:29:38] Like...
[01:29:38] Like to the new site or whatever.
[01:29:41] So
[01:29:44] Yeah, I'm not necessarily complaining about the spinners.
[01:29:51] But...
[01:29:52] Um,
[01:29:54] there is this waterfall and you do need the javascript to hydrate.
[01:30:10] how who's telling you what like something on the server needs to know what
[01:30:15] Like this, you need the first bundle to load in the client parse execute to figure out
[01:30:21] oh, window location, I'm on this page,  what's the next JavaScript chunk?  The server would otherwise have to be able to have the routing information  to make that decision for you to pre-render it.
[01:30:32] So like in a pure CSR example, you don't get the module preload
[01:30:36] the
[01:30:37] the next page. The soonest you can do it is when that first chunk of JavaScript executes.
[01:30:49] Yeah, yeah, I mean I'm I
[01:30:53] The way he worded this is why I felt like a little bit, you know what I mean? Like,
[01:30:59] That's why my first thing was like, no, this isn't true. But I mean,
[01:31:06] Let's continue.
[01:31:07] Imagine if Google was a single page app. The calculator, weather, shopping, flight, snippets, all AI movies playing rest, and every custom experience the client would know how to render.
[01:31:18] For a server to load up all these code paths is no big deal. Servers are bigger than clients. Okay, sure.
[01:31:22] deal with lots of stuff and they can keep it in memory, yeah, blah, blah, blah, blah, blah.
[01:31:26] Okay.
[01:31:29] But I'm not Google. I think more like Google than you give yourself credit for, or you should be.  Think about feature flags, underdevelopment, experiments, geotarget experience, promotions, AI capabilities, adding, blah, blah, blah.
[01:31:40] Okay, servers have data, AI's...
[01:31:44] Servers know what to render. Clients get it in one fell swoop as a stream without extra hops. It's actually the simplest architecture you can see, even one of that has made Google, Amazon, Facebook succeed billions of users. Before you ask, yeah, okay, CO2. Okay, let's ignore the CO2 for a minute.
[01:31:59] Okay.
[01:32:00] So let's dig into this because...
[01:32:04] Like the conclusion is correct.
[01:32:10] There's a reason eBay uses Marco for years. Amazon has never picked up React.
[01:32:17] for Amazon.com, why Google has Wiz,
[01:32:21] right that's why i made this quote about this the best argument use quick dev that i've ever heard  because if you're going to use
[01:32:29] a framework to talk about Google search
[01:32:32] The internal framework at Google that does search photos on that is called Wiz.  Quick was basically based off that framework.  So...
[01:32:43] You know...
[01:32:44] Yeah.
[01:32:45] Thank you.
[01:32:46] that was the point of a bunch of people means like shouldn't I use solid start I'm like well
[01:32:51] Hold your horses. We'll get here.
[01:32:55] it
[01:32:59] I want to pick at this a little bit.
[01:33:10] Okay, maybe I should answer some questions. What I said so far made sense.
[01:33:19] Thank you.
[01:33:20] Thank you.
[01:33:21] Thank you.
[01:33:22] Thank you.
[01:33:27] Amen.
[01:33:30] Okay, one thing Ryan, does the SSR rendered only happen on initial page load? After initial page load, the app is in the client side rendered all the time.
[01:33:39] Well, it depends on what the service is. For Google,
[01:33:43] Search.
[01:33:45] And eBay.com, those are MPAs. So no, it is not just initial thing. They literally don't use traditional single page app architecture.
[01:33:53] they use multi-page app architecture.
[01:33:57] Thank you.
[01:34:00] I'm
[01:34:02] you
[01:34:03] But...
[01:34:04] There is tension to do more client side stuff as well.
[01:34:09] Um,
[01:34:10] You can see how this could extend into client
[01:34:14] like architectures where I'm going in a minute.
[01:34:20] Thank you.
[01:34:23] I think I get it. Loading spinoe is bad, pulsing skeleton's good. Yeah. Yeah.
[01:34:30] Of course.
[01:34:32] Okay. Okay. So you guys were with me. Okay.
[01:34:36] Now...
[01:34:38] Thank you.
[01:34:39] Okay.
[01:34:41] Let's first contend with this. If Google was a spa, calculate whether shopping flights
[01:34:47] Features, snippets, all AI experience, blah, blah, blah, blah.  Every customer experience and client would have to know how to render it.
[01:34:53] Yes.
[01:34:53] So
[01:34:56] doesn't need to know how to render it when the page loads.
[01:35:02] Is the question.
[01:35:07] Now, if you're not going to be a good one,
[01:35:11] That's a more interesting question.
[01:35:13] Because...
[01:35:16] He's right.
[01:35:17] that
[01:35:20] Whatever you render on the page,
[01:35:24] If you want to hydrate it,
[01:35:26] the code has to be present to hydrate it.
[01:35:32] Have you ever loaded a website where they put a placeholder?
[01:35:35] Like pretend you have a code ID on your documents page and you don't want to absolutely kill your page score because you don't want everyone to have to load it until they scroll into it or whatever.
[01:35:47] It's not uncommon to render
[01:35:50] one component on the server
[01:35:52] And...
[01:35:54] hydrate basically nothing there, and then on some kind of interactive point, at that point, actually load it in. You might even eagerly load the JavaScript, it just won't be blocking for a hydration standpoint.
[01:36:07] Right.
[01:36:07] You all know what I'm talking about, right?  If I go to solidjs.com and literally like,
[01:36:13] idiots, we put a code editor like right
[01:36:16] on our homepage, which would obviously kill our performance, but
[01:36:22] The trick is it's below the fold.
[01:36:25] We're not feeling it yet.
[01:36:27] When I scroll down,
[01:36:29] Ah, there it is, right?
[01:36:32] Thank you.
[01:36:33] See that?
[01:36:36] This is...
[01:36:37] This is usually a quick demo.
[01:36:39] But like literally it's not hard to wire up yourself at, uh,
[01:36:44] more
[01:36:45] coarse grain level.
[01:36:49] Thank you.
[01:36:51] Thank you.
[01:36:53] More pictures.
[01:36:56] Yeah.  Yeah, maybe we'll need the Excalibur out,  but I just wanted to show...
[01:37:03] the simple lazy put this behind a lazy component
[01:37:05] You trigger something that will cause it like the signal that switches.  And because we never server rendered it,
[01:37:13] Now the question is, if it's above the fold,
[01:37:17] then...
[01:37:20] Thank you.
[01:37:20] You know...
[01:37:21] It's a very different experience if I went to Google search.
[01:37:26] Try cars this time.
[01:37:30] And like...
[01:37:32] We saw loading spinners for these like side panels and you know, you know, like,
[01:37:39] So,
[01:37:40] 10...
[01:37:41] we server render it,
[01:37:45] And then wake it up.
[01:37:47] Lazily.
[01:37:56] Yeah, yeah, exactly. What I'm getting at is the biggest hack to get around this is client render only. I added a client only component to SolidStart like a lazy loader. I was thinking of putting a placeholder option in it as well, which I think people probably all love, because then we could actually show the...
[01:38:20] the alternate
[01:38:22] UI and then the problem is if I had the placeholder UI you'd probably need
[01:38:29] Well, no, it's probably fine. You just control... No, you need all the... I need to expose the triggers like...
[01:38:36] So yeah, you got to wire it yourself, but it wouldn't be hard to make like a lazy
[01:38:40] rapper.
[01:38:41] you know, that was built on like what triggers it and just be like, here you go.  Here's a component that does this behavior.
[01:38:47] Thank you.
[01:38:49] But that's a very CSR focused approach.  What if you actually wanted to server render it?
[01:38:59] Too late.
[01:39:06] Thank you.
[01:39:09] It's also a UX issue. If you're a client rendering something that takes a while to be interactive, that's not a good experience. Better to show a user-friendly placeholder. Yeah, sure.
[01:39:17] Um,
[01:39:18] but
[01:39:20] Yeah, yeah, yeah. I think that's fair.
[01:39:24] But, like, I'm now talking at the scale of, like, Google search.  Like, they're not doing it because this is particularly slow.  They just don't know what they know until they actually do the search.  Cars has a different panel than...
[01:39:38] I don't know, restaurants...
[01:39:42] Right? Let's do restaurants.
[01:39:44] You know,
[01:39:45] I got a map now.
[01:39:47] Thank you.
[01:39:48] Like,
[01:39:50] Thank you.
[01:39:50] Thank you.
[01:39:54] Thank you.
[01:39:56] Thank you.
[01:40:00] If Google Amazon on SWAB with skeletons and loading...
[01:40:06] They don't, though, right? Like, Guillermo is right. Their performance critical stuff is not using single page app type technology. They're not like using React, you know, like, that's not how this works. Now, don't get me wrong. Guillermo is making the argument for why you should use server components, because he's saying that they're a little bit different.
[01:40:31] They're also not using JS in the background.
[01:40:35] That is true. Wiz is being used in combination with Java, and they actually have a JavaScript compiler at Google to kind of interop between them. I forget what it's called, but anyway.
[01:40:49] I've had lots of technical discussions with both the Angular and Wiz teams at Google.
[01:40:55] Thank you.
[01:40:56] The. Where, but coming back to this.
[01:41:03] is if you want to server render it,
[01:41:05] there is kind of a little white lie that's around right now and I think
[01:41:10] This is when I piss off all the astro people.
[01:41:15] I suppose. Maybe I don't.
[01:41:18] Lazy hydration is a myth.
[01:41:23] Thank you.
[01:41:23] Like you can do it if something is truly isolated.  Like if you have an island that is basically a micro front end,
[01:41:32] Yes, you can lazy hydrate.
[01:41:35] But
[01:41:37] Thank you.
[01:41:40] Thank you.
[01:41:41] *sad*
[01:41:44] If any communication, if there's global state at all,
[01:41:51] then
[01:41:52] It's possible and that can be read inside that island.
[01:41:55] then it's possible
[01:41:56] that if anyone interacts with the page,
[01:41:59] you can no longer hydrate.
[01:42:02] This doesn't take...
[01:42:04] view transition API.  That just like,
[01:42:06] really exemplifies it if you're trying to make something very app-like experience.  And it doesn't matter if you view all your islands as micro frontends.
[01:42:13] You know, you have lots of different isolated services.  But once you're sharing state, hydration will break.
[01:42:20] or may break.
[01:42:22] if someone interacts with one part of your page and you haven't hydrated the other part.
[01:42:28] This is just the reality of it.  This is something that I think everyone's going to come to realize in the next year or so.  People making simple content sites
[01:42:37] will
[01:42:39] you know, still go this way and do that. But I think people are going to start understanding that there is a real limitation
[01:42:45] to
[01:42:45] you know,
[01:42:46] islands in this sense.
[01:42:49] .
[01:42:51] people don't know this,  Marco...
[01:42:56] and big companies that use
[01:42:57] islands like eBay, they eagerly hydrate their islands. There's a reason why React server components eagerly hydrate.
[01:43:06] you can't lazily hydrate.
[01:43:11] Thank you.
[01:43:12] Thank you.
[01:43:13] Thank you.
[01:43:18] Right? Like...  Pyzgy Arjun also comes with lazy loading JS, which is the worst version of the model from the CSSR.  Yeah, I mean, you don't necessarily have to lazy load the JS either.  I would tell people not to. This is why I always, like, made a big stink.  Quick, obviously, eventually got to preloading the JS.  But, like, I was always like, you guys are, like...
[01:43:37] This is just not the battle to be fighting.  There's a certain amount of...
[01:43:40] Like
[01:43:41] You've already cut like 80% of the JavaScript, you know, like why are we, like maybe...
[01:43:47] Like there's places where you want to lazy load the JS.
[01:43:51] Like,
[01:43:51] If this map wasn't above the fold,
[01:43:54] Yeah, let's lazy load it.
[01:43:56] My, uh...
[01:43:57] My code editor.
[01:43:59] You know?
[01:44:01] Thank you.
[01:44:02] Maybe there's an argument for it.  But I feel like those zones are very...
[01:44:08] Specific.
[01:44:09] Like, you know, like, damn, that map is expensive.
[01:44:14] That code editor is expensive.
[01:44:18] Thank you.
[01:44:21] Well, they write some of their JS and Java. That is something I've served.
[01:44:28] I don't know enough about Angular.  I know they like classes there.
[01:44:32] Um,
[01:44:33] But anyway.
[01:44:35] But...
[01:44:37] Where I'm going to here is.
[01:44:39] You can't...
[01:44:41] lazily hydrate, really. So in a sense,
[01:44:44] Guillermo's right.
[01:44:46] if you're going to server render this stuff.
[01:44:48] What you have to do is
[01:44:53] Like, you just don't know.  The problem with this is he's making a strongman against CSR in a single-page app world, and to be fair...
[01:45:01] like we talked about, you can just...
[01:45:03] put the placeholder up.  But if we're talking RSCs against...
[01:45:08] like server rendered single page apps. I, you know, and like,
[01:45:13] I think this is a fair argument to make because
[01:45:16] To my knowledge, there is only one way
[01:45:21] that you can lazily hydrate.
[01:45:24] I wonder if anyone sees it.
[01:45:27] Thank you.
[01:45:28] Because
[01:45:31] The problem with lazy hydration
[01:45:33] is that
[01:45:35] the state on the server has to represent the current state of the DOM.
[01:45:38] Thank you.
[01:45:40] You could lazily hydrate if, at the point of interaction,
[01:45:47] you knew for sure you could hydrate it
[01:45:51] just in time.
[01:45:52] Like essentially the piece as you needed it before the action would cause a change.  Now there's two problems with that. First of all, if the JavaScript isn't there,
[01:46:01] That's kind of expensive.  Like now I'm waiting for it.
[01:46:05] So like,
[01:46:07] We're not doing this for preloading considerations.
[01:46:11] The second is suddenly you're like, okay, let's run the app.
[01:46:14] or this part of the app once,
[01:46:17] in hydrate mode and now let's apply the change.
[01:46:19] I mean, this is how React Selective Hydration works,  but that's only on initial page load, you know?  And most of the time, people aren't going crazy clicking at the beginning.  Like...
[01:46:30] They know it's an expense, but they do it as soon as they can.
[01:46:34] So that you don't generally, you're not, not everyone's going to feel it.
[01:46:38] And
[01:46:39] So really the only way to do something like lazy hydration is resumability.
[01:46:44] Because...
[01:46:45] Then,
[01:46:47] At that interaction, you just
[01:46:49] Wake up that code and run it.
[01:46:51] for the first time.
[01:46:53] There's no delay there.
[01:46:55] And
[01:46:56] But you see the prerequisite, you need a fine grained reactive system where you need to know the data dependencies of isolated parts of your app. Otherwise,
[01:47:04] you can't...
[01:47:07] You can't hydrate like that.
[01:47:08] So,
[01:47:09] Wiz at Google.
[01:47:12] is eager,
[01:47:13] in the way it loads. It doesn't do quicks, like lazy loading, JavaScript thing that as far as I know.
[01:47:19] But it is resumable.
[01:47:20] Right.
[01:47:22] Because...
[01:47:24] It doesn't have to execute the hydration code until
[01:47:28] It doesn't really hydrate. It executes the code when it needs to run the code.
[01:47:32] That is the only way
[01:47:35] Like.
[01:47:36] You do it like client
[01:47:38] This is why when I use Astro, I use client-loaded, client-idle.
[01:47:43] I would never consider using any other, the client things,  unless it like client visible and all that, unless I knew that this was like,  truly like a micro front end or a different thing, or like I was, you know,
[01:47:55] putting in one of these suckers, right?
[01:47:59] Like...
[01:48:02] You can't lazy hydrate. It is broken.  And the challenge here...
[01:48:07] obviously is
[01:48:08] that
[01:48:09] even resumability can't save you from what's not currently on the page, right? Because
[01:48:17] It can wake up what it knows about from reactive dependencies,
[01:48:21] But if
[01:48:22] that reactive dependency
[01:48:24] is on the next page you're going to navigate to.
[01:48:28] then it can't wake you up.
[01:48:32] From that perspective, I'm a very long way about saying is resumability doesn't solve
[01:48:36] Uh...
[01:48:39] routing
[01:48:40] Essentially, I always call React Server Components a routing solution. Resumability is not a routing solution. It's just purely a hydration solution.
[01:48:52] So this is why when I was reading about this, I was like,
[01:48:57] He's talking about resumability.  He's not talking about React server components.  He's not talking about routing.  He's talking about resumability.
[01:49:04] Now, don't get me wrong, React Server Components do partial hydration
[01:49:09] you have this ability to basically
[01:49:13] tell the client which components are needed,
[01:49:17] which client components are needed because the server rendering, you know, goes down that path.  And then because it's partial, you only need the JavaScript for that one part and, you know, that whole thing.  But I mean...
[01:49:30] You could argue that to a certain degree about any SSR, couldn't you?
[01:49:36] The trick...
[01:49:37] is...
[01:49:40] not needing the JavaScript to run immediately
[01:49:44] for all of these widgets on the page.
[01:49:46] only as they're needed.
[01:49:49] So
[01:49:50] That's where my split is here.
[01:49:54] Does that make sense?
[01:49:57] Yeah.
[01:49:59] Yeah.
[01:50:00] Yeah, yeah, you need reactivity.
[01:50:03] Sorry, I didn't let you answer, Dave.  You need reactivity in order to do lazy hydration.  To be fair, granular lazy hydration...
[01:50:11] and resumability are a spectrum.  So I was saying like you need to go run everything.  But like in theory, if you only need to run the portion  of the reactor graph that needed to update,
[01:50:20] like create it while you're updating it.
[01:50:23] It's not resumable by, say, MISCO standards, but I would consider that sufficient.
[01:50:28] Um,
[01:50:29] And...
[01:50:30] as long as there was no delay, because you weren't loading JS, it was there, so you could process it synchronously.
[01:50:35] that overhead would probably be perfectly fine, so to speak.  So yes, reactivity,
[01:50:41] is probably the true answer here.  But I'm just trying to
[01:50:45] frame this so you understand that like,
[01:50:48] It's the realm over...
[01:50:50] by resumability where this would be a consideration.
[01:50:55] *sad*
[01:50:56] So yeah, this is a great pitch for Quick.
[01:50:59] Um...
[01:51:01] Thank you.
[01:51:03] Because, as I said,
[01:51:06] you can kind of see all the things people talk about Spock,  and I code split, and all this stuff.  And the answer is...
[01:51:12] I think we just went over it.
[01:51:14] Sort of, but not really.
[01:51:20] That all being said, there's other ways to solve this problem and
[01:51:27] Until your Google...
[01:51:29] Maybe.
[01:51:30] This doesn't matter.
[01:51:33] As I said, I'm not picking RSCs for this.
[01:51:41] Thank you.
[01:51:47] Perhaps out of the top, did you see the experiment with Astro Plus Click? If so, do you think the combination makes any sense or common reasonable cases?
[01:51:53] I don't know.
[01:51:55] I think it's good that Quick is in Astro in the sense that like Astro is like the place you get to try everything.  Everyone, everybody's friends.
[01:52:02] So that's a good place to be.
[01:52:05] You can like
[01:52:06] put your stuff together.  They're like the micro front ends for everyone,  you know,  like,
[01:52:11] but without the overhead of micro frontends. They're micro frontends on the server, i.e. micro frontends done the right way.
[01:52:20] So,
[01:52:22] Yes, if you have a mostly, the thing is you could do everything that Astro does in Quick on with Quick by itself.
[01:52:29] But this is like...
[01:52:30] a good gateway for quick. Astro has been great for solid for that sense.
[01:52:35] But does Quick need Astro?  Not really.
[01:52:38] It can do everything that Astra does without it.
[01:52:42] Um...
[01:52:43] Oh, except for maybe the view transition API right now.  I'm not sure.  I said Quix's routing solutions are either MPA  or bring all the JavaScript back.
[01:52:51] So
[01:52:52] Yeah, I don't know.
[01:52:53] Maybe there's a middle ground, but I'd say at that point,
[01:52:58] the the gains for quicker you know assuming you have a bunch of big astro pages and small uh
[01:53:03] Components aren't going to be any different than using Svelte or Solid with Astronaut, really.
[01:53:07] I mean, sure, they don't.
[01:53:08] hydrate, but like
[01:53:11] I guess like with the Google consideration, yeah, maybe.
[01:53:15] But then again, at that point where you're getting that micro, I'd probably use Quick on its own.
[01:53:25] Right. Well, and I think this is sort of where we're getting to. Our source of innovation now is coming from large companies. I know this, right? I've seen these patterns.
[01:53:33] both from working at eBay and also from, you know, on the frameworks and also from like,
[01:53:38] you know, working closely with the people at Google.
[01:53:41] I don't know about meta's setup as well, but...
[01:53:45] Like...
[01:53:47] *sniff*
[01:53:48] That's where things are at.  There's this question, it's like,
[01:53:52] Well, that's the thing, it's a very real thing for, you know,
[01:53:55] Netlify or Vercel or whatever, we have customers who are like, we want to
[01:53:59] sell products and have the performance of the big guys. How do we do that today?
[01:54:04] And
[01:54:05] I would have said a couple of years ago, if someone said next to us, I would have kind of chuckled. I would have been like, yeah, no.
[01:54:11] But they made incredible
[01:54:13] progress in the last couple of years, things like server components that really, you know,
[01:54:18] close that gap, right?
[01:54:20] Um,
[01:54:21] So like,
[01:54:23] I think that's why we're getting here.  But there's a lot of people who aren't building that.
[01:54:31] Yeah, Kroger is all React and...
[01:54:36] I'm sorry if you've ever read Taylor's...
[01:54:40] article.
[01:54:42] It's...
[01:54:43] It's the most
[01:54:44] It's like...
[01:54:45] There's nothing more real world than to see someone demo a future for Kroger, which would absolutely demolish...
[01:54:54] the React site in every metric.  He actually even brought them phones.
[01:55:00] Like that stream is amazing.  You should go back.  It's like a year or so back.  I should post it.  The stream I did with Taylor.  He brought them the phones they sold on their own websites and was like, how do you guys like using Kroger.com?
[01:55:11] And it was like, he did like a simple checkout process and it took him 22 seconds to,
[01:55:18] on the phone with the new, you know, Marco based whatever site.
[01:55:22] And it took...
[01:55:24] He ran out on video on Twitter to show it all. It took over two and a half minutes to do the same checkout process on their React site.
[01:55:34] like like i told you earlier that there was probably wrong solutions for the
[01:55:39] You know, there might not be a single best good option.
[01:55:43] But like...
[01:55:45] Yeah.
[01:55:47] Walmart.com is another great example of a...
[01:55:51] of a React single page app.
[01:55:53] They don't all have to be terrible like that.  Next is working really hard to change the math there,  but I'm just...
[01:56:00] You know, there's some of it is innate, some of it like
[01:56:04] improvements are coming.
[01:56:10] Yeah, I said earlier in the stream, that's kind of what I'm thinking.  Like at a certain point, it's like you could use V directly.
[01:56:18] But like...
[01:56:19] And you still can, but like, why not just give people the tools where they can literally just jump
[01:56:25] and then leap all within one go.
[01:56:27] They aren't losing anything there.
[01:56:33] Why is Quick on his own? Well, really only Quick and Marco were concerned with this. I mean, Marco obviously
[01:56:40] has always been that it was built for ebay for this purpose quick was uh was basically
[01:56:46] Mitsko seeing what
[01:56:48] you know, they were doing internally at Google.  And after he left the Angular team being like,  we need to open source this, find a way to, you know,  do this to like help e-commerce.  He's working for Builder, which makes a CMS.  To be fair, you guys are going to all love this.  Do you know who one of the main core...
[01:57:03] creators of whizzes.
[01:57:05] I don't think everyone knows this.
[01:57:07] Even though
[01:57:08] I'm, you know, talking a lot about quick and stuff.
[01:57:11] The...
[01:57:12] I don't think he necessarily was the original only guy.  I think there's a couple of them internally who created it.  But Malte, CTO of Vercel...
[01:57:21] was one of the like,
[01:57:22] core main maintainers at least if he wasn't the creator he's the guy who showed the world he did  the first like
[01:57:29] conference talk on whiz.
[01:57:31] Um,
[01:57:32] He's you know what I mean? So it is interesting to see the Misko and
[01:57:38] And
[01:57:39] and multi go back and forth in in this thread because I think
[01:57:45] Ehh.
[01:57:46] Oh my...
[01:57:48] I wonder if I can find it.  It was just kind of funny because I quote tweeted it,  which got a lot more eyes on it than Miss Ghost tweets.  It got buried here.  He just replied, Google search works on top of Wiz.  Wiz is resumable and is really good at not loading all code at once.  That's why it's such a good time to interactivity.  RSC is a step in the right direction, but it does not go far enough.  It still has large islands, which require eager code execution through hydration.  Google search would never work as an RSC.  The ultimate is resumability as in quick.  Inspired by Wiz, but it takes it to a whole new level, blah, blah, blah.
[01:58:14] And then multi. I've watched these guys go back and forth. I was at a conference and it was actually really amusing. It was like multi on one side of the table and Misco on the other side of me being like, you guys both have really good ideas.
[01:58:25] I
[01:58:26] You continue to be wrong about this, although by now it might just be in price language since I did give you a fairly quick step.
[01:58:31] Wiz loads code as early as possible.  See, this is what I was talking about.
[01:58:34] It eagerly loads code, but lazily executes it.
[01:58:38] Exactly like RCs, but a little slower due to lack of preload support.
[01:58:42] it hydrates lazily, right?
[01:58:45] Reactive's current preemptive hydration is superior to lazy hydration as it gives a great
[01:58:49] early interactivity and allows you to ignore the laziness respect to the program model.
[01:58:54] I do think this might be the big shift that we see over time here, because my experience is that
[01:58:59] the laziness is overrated. It's the reduction of actual hydration costs that is the bigger win and the reduction of code. So
[01:59:08] Yeah, anyways.
[01:59:09] Ew.
[01:59:11] If it is superior, then RSCs could run Google search. Pretty sure the answer is no. Every test I've ever done resumably beats hydration. It makes sense. There's just less code to run. Download and execute.
[01:59:22] "Oh yeah, RC would be great for Google search."
[01:59:24] See, this is fun.  They're going back and forth.
[01:59:28] Fun fact, my internal chest...
[01:59:30] Yeah. So you're saying like,
[01:59:31] This is him going back to about like how because of a
[01:59:35] migration story from something earlier than Wiz.  He had to actually do eager hydration and yeah, anyway, blah, blah, blah.  They, they, they,
[01:59:42] Thank you.
[01:59:44] You won't nerd snipe me into taking my old job to prove you wrong.
[01:59:49] Uh...
[01:59:51] I love that the Wiz team is staying very quiet on here.
[01:59:58] Like I don't see Jat
[02:00:00] In here anywhere.
[02:00:01] No.
[02:00:01] They're just like, let them argue.  I love that Wiz and Marco have taken sort of like a legendary status of just being like the ultimate system that like...
[02:00:13] Thank you.
[02:00:14] goes beyond what any like people in open source are doing anyways.
[02:00:20] Probably.
[02:00:22] But I mean, part of it, like the thing is  they all have custom solutions for the other piece.  Then again, like React has been
[02:00:28] Fairly.
[02:00:29] successful and meta. Like, don't get me wrong, the infrastructure around it is different. They have relay, they have a whole bunch of stuff.
[02:00:34] But like the friend and framework
[02:00:37] is only going to be the blocker if it affects the infrastructure. Like React before server components would definitely not be suitable for certain things. Server components
[02:00:46] take it to a different level, whether it
[02:00:47] actually closes the gap completely.
[02:00:50] Here's another question.
[02:00:52] Um,
[02:00:54] But yeah.
[02:00:58] Thank you.
[02:01:01] Thank you.
[02:01:06] I believe XHP does.  I don't know for sure, but...
[02:01:10] Their PHP server
[02:01:13] that they, like, BigPipe set up, that they set up in the late 2000s, like 2008, 2009.
[02:01:20] period, was a big influence for Marco. And I guess they had...
[02:01:26] I think they had...
[02:01:27] Out of order streaming there. I mean, I,
[02:01:30] I'm pretty sure. So I imagine... I imagine...
[02:01:39] No, no, I mean, literally...
[02:01:43] Maybe now, but...
[02:01:45] Like,
[02:01:46] You don't know. There's incredible pressure inside eBay to not...
[02:01:50] I don't know how much to speak about it. A lot of teams and people coming in for development to use
[02:01:55] react and the same thing in amazon everyone's like this and every time like a new team  comes in or contractors and then then they and then they do a bake-off
[02:02:03] And React just falls flat.  Like, it just isn't good enough.  Like, just not.
[02:02:09] So like...
[02:02:10] Like for the use case, it's not just because they're stuck on legacy systems.  It is literally just not good enough.  There was a great set series of posts from Amazon about this a couple of years ago.
[02:02:23] Like it just, it just really, it's not even it's on both sides.  It's the server rendering speed.  Marco is one of the fastest server rendering JavaScript frameworks, like not even close.  You put them in bench, it's like, why is this always like so much faster bandwidth, everything?  It's kind of crazy.
[02:02:39] Um...
[02:02:40] And like even before getting to the client rendering part, which is a slowdown, even like Netflix is,
[02:02:47] who was very strong React for a while, like, and they were on the early adopters, they show them in the React film.  They're like less than two years later, they told everyone about their crazy discovery of how to get better performance by server rendering React and not using it on the client.
[02:03:04] Like,
[02:03:06] React's evolved a lot from there, but it's not just...
[02:03:11] because they're on legacy systems. Those legacy systems are often more
[02:03:15] better suited. Like it's one of those challenges where like the solutions more suited for the specific use case that it's hard to get someone else out because trust me, if they could
[02:03:23] people would jump off.
[02:03:25] all over it. It just actually isn't good enough.
[02:03:28] Like, they...
[02:03:30] Like, trust me, like the amount of belly aching that I heard about my
[02:03:37] Marco when I was there from developers was a lot. And it was mostly
[02:03:45] It wasn't even for technical reasons or for like even that much on dev experience. It was literally because they were worried about their React not working on React affecting their career.
[02:04:00] Thank you.
[02:04:07] Interesting. So a way to alleviate pressure on the servers. That's interesting.
[02:04:16] Thank you.
[02:04:17] Thank you.
[02:04:19] Thank you.
[02:04:25] Thank you.
[02:04:29] Yeah, yeah, sorry, I just answered that.  Yeah.  React in general is about...
[02:04:34] I mean, in simple string-based benchmarks, React itself is about 10 times slower than, say, even Solid.  But Solid is faster than Marco on pure...
[02:04:45] server rendering, but not on like bandwidth thing. Marco, um,
[02:04:49] is...
[02:04:50] is considerably
[02:04:52] faster when you consider bandwidth type considerations.
[02:04:56] React creates a virtual DOM on the server and then stringifies it, where other server renders literally are like basically template languages. It's definitely, I mean, how much does that matter?
[02:05:08] PenX?
[02:05:09] Did the page take...
[02:05:10] 3 milliseconds of render, or 30?
[02:05:15] It's actually probably more like, did it take 1.5 milliseconds or 15 milliseconds, maybe, like at an extreme.
[02:05:22] I'm sure that 10 doesn't scale up. I'm sure it's more like one takes 2 milliseconds and one takes 8 milliseconds or 10 milliseconds. You know what I mean? Depends on the page, depends on the payload or stuff.
[02:05:34] I don't know if that matters much.
[02:05:44] Svelte was on the table.
[02:05:48] Svelte, but no.  Basically, classically, no...
[02:05:52] client side. Selt was actually
[02:05:55] Faster than React, about twice as fast, but it was still a much slower than Marco or solid for the longest time. Svelte's now in the similar range on server rendering, but the partial hydration part of the solution was too important. And streaming. Streaming is very important for eBay's use case.
[02:06:15] Thank you.
[02:06:16] Thank you.
[02:06:17] Thank you.
[02:06:19] Thank you.
[02:06:19] Yeah, it's funny, like he works at Netlify, or sorry, Netflix. I can't say Netlify, I meant Netflix. Did I say Netlify earlier? I meant Netflix. He, they went from full React to React just on the server to...
[02:06:33] What are we going to do with React?
[02:06:35] Now, don't get me wrong,
[02:06:39] I think any JavaScript framework might suffer under Netflix's scrutiny, so to speak.
[02:06:45] But like,
[02:06:47] It's an interesting tension.
[02:06:57] Yeah, yeah. Even Preact created VDOM. I think they now have a string method, but for the longest time,
[02:07:06] Uh, let me, where was it? Uh,
[02:07:08] can uh
[02:07:10] Yeah.
[02:07:11] SSR bench, maybe I should just go to my GitHub, I can probably find it.
[02:07:18] I forked it and I probably had the last update on it.
[02:07:22] Um.
[02:07:24] Thank you.
[02:07:26] Benchmark.
[02:07:29] framework benchmark, isomorphic UI
[02:07:33] benchmarks. This is the classic one.
[02:07:35] Let's go to my
[02:07:38] Updated.
[02:07:40] thing but like if you look at the history it's the same too don't look at those results look at these results
[02:07:45] One is a search result page from eBay with all the header and like tons of markup, not much interactivity. The other one is just like a freaking color picker, like a to do MVC little app. And what you're going to see here is that like,
[02:07:57] So
[02:08:00] Preact and React are actually the slowest because of this VDOM transfer view.
[02:08:06] is here...
[02:08:08] It's felt
[02:08:10] is
[02:08:11] and Inferno Svelte is pretty decent.
[02:08:13] And then obviously solid now and Marco.
[02:08:16] Right.
[02:08:18] And then Color Picker,
[02:08:20] Marco, again, preact and react, kind of like here.
[02:08:24] View.
[02:08:25] Inferno is...
[02:08:26] pretty good although they're kind of cheating in one of the examples they don't escape something
[02:08:31] solid and then svelte.
[02:08:33] Solid.
[02:08:35] Svelte should be faster now.  I don't think I have the latest update here.  Svelte is now...
[02:08:41] about double of what it was before.  So now it's in the 67 ish.  And I think here they're going to be about
[02:08:48] 18 or 20-ish. Yeah, you know what I mean. But like...
[02:08:56] .
[02:09:00] Thank you.
[02:09:02] Oh, sorry, my cam is hiding the text.
[02:09:06] Hopefully I scrolled it enough that people can...
[02:09:09] See, see it.
[02:09:11] Anyways, this is just pure...  Pure, uh...
[02:09:16] But yeah, if you look at like the older runs, like back in the day,
[02:09:20] Like,
[02:09:21] What's this one? Oh, this is client side. Yeah, never mind.
[02:09:25] Let me go to the actual official results.
[02:09:28] I mean, you can actually see it in the graphs, like the last time this was updated back in 2019 by them.  Like...
[02:09:35] The client stuff was...
[02:09:38] kind of like mediocre for Marco.  But the server stuff, it was just like not even...
[02:09:44] close and I feel like
[02:09:46] Okay.
[02:09:46] Yeah, I don't know. Anyway.
[02:09:51] Thank you.
[02:09:53] Thank you.
[02:09:56] Other ones you didn't see were solids. It was much faster.
[02:10:00] Bye.
[02:10:05] Thank you.
[02:10:06] Thank you.
[02:10:09] Classically, after Svelte 5, it won't be because they're switching to basically compiling to solid.
[02:10:18] Thank you.
[02:10:19] But classically, that was a thing.  I have a study showing that's felt skilled
[02:10:23] by the time you got to any kind of mediocre, medium-sized applications,  like once you got past the small apps,
[02:10:30] Svelte was larger than most frameworks. And then like once you got to like a
[02:10:35] chunky app, maybe 80 unique components felt was larger than React on the client.
[02:10:46] Thank you.
[02:10:47] Yeah, I mean, it's possible because Marco uses its compiler. Like a lot of the tricks that Svelte have been looking at are like, that's what Marco and Marco 6 does. It uses compiler to know better about reactivity.
[02:11:01] chaining, which means that it could do
[02:11:05] even more. Once I wrote an article that said that solid was not the best for server-side rendering, potentially, because
[02:11:12] our template analysis
[02:11:15] wasn't as effective as it could be if we had it.  Like it doesn't matter for client,  but for server it might matter.  So in theory,
[02:11:25] Like the stuff that Dominic was talking about reminds me of conversations I had with the eBay team three or five.
[02:11:30] three and a half years ago.  If you look at Michael Rawlings' articles,  you can go to Medium on this,  but
[02:11:38] - Thank you.
[02:11:39] Let's see, can I find Michael...
[02:11:43] Rawlings?
[02:11:46] Yeah, if you go and find
[02:11:49] is maybe you don't need a single page app.  Yeah, back in 2020, people didn't realize this generic hooks.
[02:11:55] I think this one's probably the best example of it.
[02:11:57] He actually talks about
[02:11:59] what he calls subcomponent hydration.
[02:12:02] um in here this is before we kind of got into the resumability thing but he was talking purely  and this is very similar to the stuff that dominic's been talking about
[02:12:15] Thank you.
[02:12:16] Right?
[02:12:18] So, probably worth a read.
[02:12:20] um
[02:12:22] So...
[02:12:23] Thank you.
[02:12:25] Thank you.
[02:12:26] We've had him on the show.  We had him on the show only a few weeks ago.  Um...
[02:12:30] Brilliant, brilliant engineer.
[02:12:35] All right.
[02:12:39] Thoughts on this? Okay, let me see what this is, Dave.
[02:12:47] Help me understand Next.js real quick. If I want progressive enhancement, people might have a JavaScript disabled on the VueMite site, but I also want the performance benchmark streaming by using suspense. How do I achieve that?
[02:12:57] The moment you disable Japsack, all your suspense fall back to the room and remain stuck forever. Yes.
[02:13:03] No.
[02:13:05] Thank you.
[02:13:06] That's...
[02:13:07] It just means you can't stream it. It doesn't mean you can't use suspense.
[02:13:12] Um,
[02:13:13] Suspense is just a loading mechanism to tell the server when it's done.
[02:13:17] So technically speaking, if you don't flush till the end, you can still stream it.
[02:13:23] In solid start...
[02:13:25] we used to have you choose which render method.  But now, for example, if you go into Solid Start,
[02:13:29] And you go in here.
[02:13:31] And you go start...
[02:13:34] SSR. True.
[02:13:36] general streaming
[02:13:38] But if you go async,
[02:13:40] Maybe you need a better name.  This is coming from solid's render async method.  Now this will work with JavaScript turned off.  It just...
[02:13:47] even though you wrote the same suspense code,  it just doesn't flush it till everything's ready.
[02:13:51] This is the old like wait for the page to finish thing.  I changed that from being the default like it was before.  But like, and with React, there's a hook like on shell complete or something.  I'm sure there's a way you can tell next not to flush the stream.
[02:14:06] until the end.
[02:14:08] Thank you.
[02:14:09] Okay.
[02:14:10] Is there a response here?
[02:14:13] Yeah, but in order, streaming doesn't solve...
[02:14:16] a bunch of things.
[02:14:18] Yeah.
[02:14:23] - Frank Florence talking about hydration.
[02:14:27] or lack of it. Okay, I don't know.
[02:14:37] Thank you.
[02:14:39] The current Svelte hydration mechanism that has directions to stop crawling and hydration on the components that have no change. So it's similar to the sub component thing Marco was doing.
[02:14:46] Um...
[02:14:49] Is it? Because it's
[02:14:52] You can't just stop, you have to restart as well.
[02:14:56] Like,
[02:14:57] The way that this
[02:15:01] the subcomponent with Marco was doing was using the reactivity to auto
[02:15:05] So maybe it's similar. I don't know. The auto detect the reactive dependencies. And then like they were going to use a bundler to do it. Once we discovered we could do resumability, it's drastically simplified the approach because then we could just use tree shaking.
[02:15:20] But originally they're going to use bundler analysis to track the reactivity and know which things could have props.
[02:15:26] You know?
[02:15:31] Thank you.
[02:15:34] Yeah, in order streaming is good. It just it's it's like a different thing like I was talking about earlier.
[02:15:46] Yeah, I mean, I don't know.
[02:15:51] Thank you.
[02:15:52] Eww.
[02:15:53] We want to be good web citizens. Progressive enhancement is like an accessibility consideration.
[02:16:00] I keep on telling people this, and no one likes my framing, but I'm going to keep on saying it.
[02:16:06] It's not a replacement for hydration.
[02:16:10] it's not even that good as what happens before JS loads off because like
[02:16:16] that could mean interacting with the page early gives you different behavior. It's actually kind of
[02:16:20] bad. That's why most frameworks now actually load inline scripts. Quick isn't the only one who's like a bootloader. Solid has this hydration script, React has it, otherwise, selective hydration wouldn't work. You know what I mean? Like, we all are loading scripts, small scripts, at initial page render time. So that's how streaming works, right? Like, so
[02:16:38] Thank you.
[02:16:39] Thank you.
[02:16:40] Yeah, I don't know.
[02:16:42] Thank you.
[02:16:42] It's...
[02:16:44] Thank you.
[02:16:46] Thank you.
[02:16:47] It's a hard one.  It is interesting because...
[02:16:52] Working with the form APIs is kind of miserable.
[02:16:56] So I'm glad like we've got some answers there, but like I kind of
[02:17:00] I don't know if I'd use the form APIs myself.  I just like use action, be done with it, you know, server function away.  I don't know.
[02:17:10] it's hard.  I can see use cases.  I think it's good we support it.  It's just like,
[02:17:16] e
[02:17:17] it's just never going to be as good at a certain point.  Like, it's so funny when you're using CSR, CSR,
[02:17:23] This isn't even, uh...
[02:17:27] Am I reading out of practice?
[02:17:30] I like trying to talk seriously and this is what gets on my screen.
[02:17:37] Thank you.
[02:17:37] Um...
[02:17:39] God, can I get back to somewhere reasonable?
[02:17:43] Just close this tab.
[02:17:45] Um...
[02:17:48] I'm not going to call it a waste of time.  It's just something you definitely...
[02:17:53] you know, we try and reduce the trade-off,  but you're definitely opting into it.
[02:17:57] Thank you.
[02:17:58] Thank you.
[02:18:01] It might be overrated. I feel like the Remix guys are using it as a...
[02:18:04] It is like a solve for everything.
[02:18:07] Thank you.
[02:18:09] I kind of don't want if someone clicks a link on my page before the client writer,
[02:18:13] to reload the page. I kind of like wish that doesn't happen. I mean, it does happen in solid, you know,
[02:18:19] But part of me wishes that it didn't.
[02:18:24] It's hard to like, you know, it's better than nothing, but it's also kind of like,
[02:18:28] I'm sorry.
[02:18:30] Oh.
[02:18:31] Okay.
[02:18:33] Uh...
[02:18:35] Ooh, what profile have you been on? Okay, back here.
[02:18:38] Yeah, I think we're good with Guillermo, right?
[02:18:41] Thank you.
[02:18:42] Um,
[02:18:45] That's all he's a Kent C. Dodds.
[02:18:48] Attila is doing a good job trying his best.  I don't know if you...
[02:18:53] you have people saw this but um his series he did the new uh intro video and he's been doing a series of videos on stuff like
[02:19:03] nested reactivity and stuff with solid.
[02:19:07] Oh, come on, Alexa, what are you doing?
[02:19:09] I don't know if you guys heard that.
[02:19:11] Siri thought I said her name and is talking to me from my other laptop, which is sitting over there.
[02:19:18] Anyway.
[02:19:20] Okay.
[02:19:21] Thank you.
[02:19:22] Uh...
[02:19:25] Thank you.
[02:19:25] How are we doing? Okay, yeah, so
[02:19:27] Let's go back here.
[02:19:30] Do I even want to talk about this?
[02:19:39] Maybe later.  Actually, I know what I want to talk about.
[02:19:43] Okay, let's just get this out of the way before we move on.
[02:19:47] Gatsby is not dead.
[02:19:51] Now,
[02:19:55] It's, it's, this is a pretty funny thing because I have to admit I, I,
[02:19:59] I don't work on the Frameworks team and I'm pretty much in isolation, so me talking about this is probably kind of terrible because I kind of thought Gatsby was dead.
[02:20:06] when Ward and, you know, prominent Gatsby people are like, it's dead.
[02:20:11] Um.
[02:20:13] then you know, I'm kind of like, "Oh, I guess Gatsby's dead."
[02:20:17] I am not on the Frameworks team, but
[02:20:19] Uh, just.
[02:20:22] There's an interesting positioning here, but they did a whole blog about
[02:20:27] the new work that's going into Gatsby. So
[02:20:30] Future Gatsby: "While Gatsby framework is no longer the new kid on the block, it's not going away anytime soon. It's been battle-tested by companies for many years and used to large, real-world, high-performing websites, including many enterprise customers.
[02:20:40] Here in Edelify we committed to continue supporting Gatsby.
[02:20:43] In addition, framework stable, predictable, high-performer, we're now working to give it extra superpowers. We're strong integration with Composable Web. Connect and create. Okay.
[02:20:53] Closely tied to prior instruction through adapters feature.
[02:20:57] So yeah, they're basically making generic adapters for Gatsby.
[02:21:01] you know,
[02:21:04] Okay.
[02:21:09] Matt Billman says, "While we don't plan for Gatsby to be a place for the main innovation in the framework ecosystem take place, it will be a safe, robust, reliable choice
[02:21:16] To...
[02:21:17] to build production quality websites and e-commerce stores and will gain new powers by way of great complementary tools.  Okay, so there you go.
[02:21:23] Just in case you guys didn't know.
[02:21:25] Gatsby is not dead. There you go.
[02:21:27] Officially not dead.
[02:21:30] Thank you.
[02:21:31] Yeah, maybe.
[02:21:34] Thank you.
[02:21:34] Yeah.
[02:21:35] Thank you.
[02:21:38] Yeah, I mean, honestly, I work at Netflix and I thought I was dead, so yeah.
[02:21:44] Apparently.
[02:21:45] To be fair, I haven't been paying attention to recently. I've been very focused on the solid releases. But no, I know that there is a frameworks team that work relentlessly on working with all the different frameworks, Gatsby, Remix, Next.
[02:22:01] um,
[02:22:02] Etc. So
[02:22:04] Bye.
[02:22:05] I like.
[02:22:06] There is a team here still, you know,
[02:22:10] getting moving these things forward.
[02:22:13] The only available adapter is the Netlify one.
[02:22:17] Okay, fair enough. Maybe I should convince them to move to Nitro.
[02:22:21] Okay.
[02:22:25] Okay, yeah, I know where I wanted to go next, because this one gets a little spicy.
[02:22:31] Also, whoever this...
[02:22:33] person is. They clearly watch my stream maybe after the fact.
[02:22:38] Big props and thanks.  I appreciate this statement.  And this is props to all you guys, apparently, too.  Watching Ryan's stream and like 50% of the viewers are framework authors,  DevRel workers, and open source leaders.  Dudes like every rapper's favorite rapper.
[02:22:51] I think Theo probably said this first, but...
[02:22:54] It's always entertaining or nice to see this kind of thing.  I like being appreciated for the work and I'm glad people enjoy the streams.
[02:23:03] Just throwing that out there.
[02:23:05] Okay.
[02:23:07] This is the one I want to talk about.
[02:23:09] Because it's right on topic for today.
[02:23:11] Which is...
[02:23:13] If your use case is right heavy, use client side rendering. If you're read heavy, use server side rendering. If it's in the middle, use islands. Server side rendering to boot up single page app almost never.
[02:23:24] Thank you.
[02:23:26] Thank you.
[02:23:27] I'm the nerd's nerd. There we go. Thank you.
[02:23:32] Thank you.
[02:23:35] This is an interesting stance.
[02:23:41] It keeps boundaries very clear.
[02:23:47] But like...
[02:23:50] Do you know what the challenge is with this? And maybe this is, again, us trying to oversimplify things. The challenge with this is, in order for me to understand what he's even saying, which is fine, I do understand it.
[02:24:03] is I have to understand...
[02:24:06] What write heavy is, client-side rendering is,
[02:24:10] Read Heavy is...
[02:24:11] what suicide rendering is, what islands are,
[02:24:17] Like what I mean is. There's like a rubrics I'm going through to make this decision, right?
[02:24:25] And while this is an argument for right tool for the job,
[02:24:30] Thank you.
[02:24:32] Which...
[02:24:33] Which could be fair.
[02:24:36] From a evolution...
[02:24:41] Thank you.
[02:24:43] you know, direction of the future perspective, we're always going to try and do better with  than what any given tool gives us today.
[02:24:51] So,
[02:24:53] It's kind of interesting because here's a practical argument here.
[02:24:56] The practical argument here is
[02:24:58] for this is like what I showed you before when I looked up shoes, right?
[02:25:03] Yeah.
[02:25:04] Google search probably should never be a spa.
[02:25:08] Neither should...
[02:25:09] These websites, probably.
[02:25:12] If like that's their purpose.
[02:25:15] Right. And what
[02:25:16] I think...
[02:25:17] Um...
[02:25:19] What he's saying is like, if I go to my cart...
[02:25:22] And then I have to do this.  Sure, this could be a spa.
[02:25:25] you know,
[02:25:26] Um...
[02:25:28] Sorry, I should probably add
[02:25:30] add some shoes to my
[02:25:31] Cart. Okay.
[02:25:33] If I want to go through checkout, I'm not going to go completely through it, but like this can be a spa experience.
[02:25:39] In fact,
[02:25:40] If you looked at that navigation, we actually...
[02:25:42] It was actually an MPA navigation. This site is an MPA, side note.
[02:25:46] Right?
[02:25:47] You can see.
[02:25:48] Thank you.
[02:25:49] But I bet you the checkout is a single page app.  So like, basically, he's asking the question is,  do we ever need sites to load fast like an MPA,
[02:25:59] Be interactive like a spa.
[02:26:02] And
[02:26:05] actually, you know,
[02:26:07] handle the client side navigation and whatever.
[02:26:12] This Google search should be PWA.
[02:26:20] It also suggests that Google isn't the best tool about everything yet.
[02:26:27] Is he just saying don't use Remix?
[02:26:30] I mean, the funny thing about that comment is, when Remix came out,
[02:26:35] Bye.
[02:26:36] Liked a lot of technology stuff, but in my head
[02:26:38] This was the zone I was mapping. I'm like,
[02:26:40] if I just map everything into the distinct categories, I think, I think, uh,
[02:26:44] Fred K. Scott did this where he went from like, I did this also in one of my articles, but Fred put the tweet, I think, originally up and everyone got mad at him. When he put the ranges that Astro covered and like what Next covered.
[02:26:57] Stuff like Remix didn't actually fit.
[02:26:59] anywhere like
[02:27:01] You know what I mean? It's like, if you can go, if you're on this side, you should just use Astro. If you're on this side, you should use something more app-like, you know, whatever. And then like, so that comment is interesting to me because it actually brings me, brings back memories.
[02:27:14] Um,
[02:27:15] Do we need server rendered single page apps?
[02:27:20] And it's interesting because when I rewrote
[02:27:23] When we rewrote Vidigami, that was the Twitter type app.
[02:27:28] back in 2019, 2020 time period, 2019, I said no, I don't need server rendering.
[02:27:37] Straight up, I was just like, no, we don't need server rendering.  Maybe I'll render some JSON into the head of the page.  So like it saves me from doing a couple of off round trip type things.  But like, I don't need actual server rendering.
[02:27:48] And
[02:27:50] I guess that's fair, but on the other hand,
[02:27:53] If server-side rendering
[02:27:56] had worked.
[02:27:58] as easily as it does today.
[02:28:03] I might have been like, "Why not?"
[02:28:05] even for logged in pages, like sure,
[02:28:08] like
[02:28:10] And
[02:28:13] It can feel like a better experience. And it's like, why would I not do that?
[02:28:21] But I get like, I think this is like,
[02:28:24] A lot of the assumption here or like, uh,
[02:28:28] tension here.
[02:28:29] is
[02:28:31] is that, right?  It's like,
[02:28:36] I know this is where Astro has been kind of positioning things, but it's like...
[02:28:39] .
[02:28:44] It works because the islands are basically micro frontends.
[02:28:48] Once
[02:28:48] You're in the middle.
[02:28:51] and your islands are not
[02:28:53] micro frontends.
[02:28:56] Thank you.
[02:28:57] then you're kind of in a different zone where you are
[02:29:00] very torn between these two. Astro fits a very nice place in the middle, which means that like,
[02:29:07] Before this, it wasn't easy to make the you to like like the gap between
[02:29:13] The first two here...
[02:29:15] was way too large. Now,
[02:29:17] This is just a reasonable middle ground.  Just use it.
[02:29:19] But I think...
[02:29:21] that middle ground has a lot more space.
[02:29:24] Ciao.
[02:29:25] And while this is one take of the middle ground,
[02:29:31] I don't think it's an unreasonable take. It just wasn't enough. It wasn't a middle. It was basically...
[02:29:38] this one,
[02:29:39] with like
[02:29:40] A little bit.
[02:29:43] Thank you.
[02:29:43] What's the practical difference between a single page app and a big island?
[02:29:48] Thank you.
[02:29:50] Inside every SSR spot is an island application struggling to get out.
[02:29:55] Uh...
[02:29:58] He does use a symbol.
[02:30:05] Yes, I feel like it still mostly holds up other than frameworks make SSR less painful now, so it's less of a trade-off than it was. I think
[02:30:12] This is the thing, it's the amount of friction
[02:30:22] But I mean, I would say that.  I realize the friction's real, otherwise,
[02:30:27] you know,
[02:30:28] Would we have client side render mode in solid start?  Would we have client only like
[02:30:33] There is some friction here, but
[02:30:35] The more that friction reduces,
[02:30:37] the less these divisions matter.  I once drew a quadrant.  It's probably not going to show up on my recent images  because it was so long ago.
[02:30:46] Yeah, and I'm zoomed in. I once drew a quadrant in one of my docs and it was basically showing frameworks where they sat in terms of MPA to SPA and where they sent from SSG and dynamic rendering and like where they mostly sat. And what I watched was I watched the top and the bottom collapse.
[02:31:05] on themselves.
[02:31:06] Like, essentially...
[02:31:08] every framework SSG is now  like there's some amount of static generation  I mean it's just the type of cache it makes sense
[02:31:16] And I think
[02:31:17] that the collapse on the other axis is kind of imminent.  And I know...
[02:31:21] Right now, we have really strong sides. This is why people are looking at stuff like HTMLX, right?
[02:31:27] Like,
[02:31:28] It...
[02:31:29] Like and we all see something a little different. I see when I see HTT like HTMX made a friction that was previously  kind of a pain in the ass a little bit less than
[02:31:41] you know, so now you can just kind of like do these partials without like some crazy setup on your back end.  You can just kind of like write some HTML, it hits an endpoint and then you're good to go.
[02:31:56] But like...
[02:31:58] Does it fundamentally solve the problem? Well, if you are building a site that has isolated chunks, maybe the same site that uses islands, sure, but
[02:32:07] If you're...
[02:32:08] Still...
[02:32:09] at all have the potential of being on that other side,
[02:32:12] then no.
[02:32:13] Right.
[02:32:14] I think the thing is a lot of JavaScript frameworks like React came about because of the heavy write side of it.
[02:32:21] And
[02:32:22] We've watched them trying to stretch into the more content side.
[02:32:26] to varying levels of success,
[02:32:30] and actually mostly failing, let's face it, mostly not being as good as the solutions that are there.
[02:32:36] But
[02:32:37] Thank you.
[02:32:38] with every iteration,
[02:32:40] It gets significantly better.
[02:32:42] to the point that like I personally, I knew it's unsurprising given who I am.
[02:32:46] find it hard to picture
[02:32:48] that
[02:32:50] if I'm thinking about the future,
[02:32:52] the future
[02:32:53] doesn't involve
[02:32:56] improvement along that
[02:32:58] Avenue, like along that direction. This is
[02:33:02] This is...
[02:33:03] fine for now, but it's...
[02:33:06] It's like--
[02:33:07] Like you just know that this isn't where the things end.  And this was the argument that when I was talking about Marco and MPAs,
[02:33:15] You know,
[02:33:16] Rich Harris was giving me about client-side navigation. That's why he got a little smug when Astro added the view transition API.
[02:33:24] The thing you've got to understand is
[02:33:26] on that argument, the reason I found that interesting is because
[02:33:30] The single page app frameworks
[02:33:32] made the mistake of thinking that they had the right solution.
[02:33:36] and then everyone just needed to get on board. The truth of the matter is they needed to learn a crap ton from the MPAs. You don't get RFCs if you don't understand how islands and multi-page app frameworks work.
[02:33:50] Like there needed to be a learning there.
[02:33:54] Even stuff like HTMX.  Like, HTMX is like
[02:33:58] almost like a primitive to accomplish the routing that you get with something like RSCs.
[02:34:03] But
[02:34:04] RCs are like a layer that handles that orchestration above it.  So...
[02:34:09] I think it's good that the whole ecosystem is realizing that there's a shift and there's a problem and they're all playing around in the space, you know, with different tools kind of circling around the same solution until these things kind of level out.
[02:34:23] Thank you.
[02:34:23] Thank you.
[02:34:24] I'm not ready to like put my foot down that this is where things are at.
[02:34:31] Thank you.
[02:34:32] HVMX is my favorite islands framework.
[02:34:35] uh...
[02:34:38] Yeah, yeah, yeah. I mean, about the really big island, yeah, yeah. I've always had this conversation with people because, like...
[02:34:45] The definition of a single page app was always hard.  And I'm like, you could put a single page app  on every single multi-page in your multi-page app.
[02:34:54] is that a single page app or a multi-page app?  You know what I mean?  Like,
[02:34:58] the way that it scales
[02:35:01] is very powerful for islands.  The problem, the only challenge with islands is
[02:35:07] How do you deal with the fact of what lives outside the islands? And don't say nano stores because
[02:35:13] that doesn't fix the hydration problem. Because lazy hydration now is not only something that you have to worry about
[02:35:20] when the page loads, it's on future navigations.  This is a routing problem.  It's fundamentally a different architecture.
[02:35:30] Like...
[02:35:31] it's funny, it's why the guys at Purcell were saying that  I always considered, like, Maltese is something along the lines that
[02:35:39] that like
[02:35:40] He considered RSC as a single page app.
[02:35:42] you know, SPA kind of thing.  And I can get
[02:35:46] that from the perspective that like he's like my definition is that the truth lies in the client  like the state persists
[02:35:53] you know, cross, you know, then.
[02:35:55] then it's a single page app. But
[02:35:58] I, this is not...
[02:36:01] like this is not like a classic single page app in the sense that like the server is
[02:36:07] a necessary part of the solution.  It's not just like, oh, I pre-rendered the page.  Now the server is involved at every step.
[02:36:15] Um...
[02:36:16] Maybe my framing initially of like single entry point multi-entry point isn't right because
[02:36:23] In the case of like server components, even though there's multiple entry points from each island, technically, they all communicate together in a consistent manner. Does that make it a single entry point?
[02:36:31] I mean, it's arguable.
[02:36:37] Thank you.
[02:36:38] Yeah, but I mean, on the other hand, like it's bundled in such a way that it's deduped.  You're only going to load it once ultimately, even if each one's like, give it to me.
[02:36:55] Well, I mean, here's the question. If it could SSR
[02:36:59] Like, I guess there's a question of like, would it be cost effective to put that extra work on the server?  But like, I think the experience would be better if it could SSR.
[02:37:10] Talk.
[02:37:13] No. Like, don't be wrong.  Zoomability is a nice way to hydrate.  It doesn't...
[02:37:18] It's like routing...
[02:37:20] is kind of where the hicks are. Resumability doesn't solve routing. Resumability is a
[02:37:25] is a optimization that is useful when the, um,
[02:37:33] amount of code you need to hydrate on the page.
[02:37:36] gets extremely high.
[02:37:39] And you don't want to get into the zone...
[02:37:43] And it's server rendered and you don't want to get into the zone where you have to manually manage it.
[02:37:49] Because if it's not server rendered, it doesn't matter.
[02:37:51] And, you know,
[02:37:52] If the quantity is not completely that high, there's other partial solutions that will probably get you, like islands, for example, or...
[02:38:01] RSCs, those conclusions will get you like 90% of the way there. I think it's a very good optimization. It's just like...
[02:38:08] It's not an architecture.  I don't view resumability as an architecture.
[02:38:15] I think it is a very good performance optimization.
[02:38:20] Thank you.
[02:38:22] The funny thing is we've always been able to do this.
[02:38:25] This isn't
[02:38:26] So I don't think this is the future.  That's the thing.  I think...
[02:38:33] Like,
[02:38:34] You...
[02:38:36] I remember I used to build...
[02:38:38] sites with Jade and they'd render single page apps on them.
[02:38:42] you know,
[02:38:44] Like what makes Astro special is not that it's an MPA that does client-side rendering islands, it's that it can server render those islands.
[02:38:51] Otherwise, this is stuff that we've done forever.  Obviously, like the dev tool experience and stuff is good.  But from like a technological standpoint...
[02:38:59] Go build your templates in ERB and then put some JavaScript islands, maybe wrap it in a web component, you know, like maybe DHH is right.
[02:39:08] No, no, like...
[02:39:10] - Thank you.
[02:39:11] That's fine.
[02:39:13] But that's not what we can do.
[02:39:15] Right. Like we can do more than that.
[02:39:20] They could be. If they are true micro frontends, then you could handle it outside.
[02:39:26] Right? And that's the one thing that persists. But,
[02:39:29] If we're building applications
[02:39:31] And we want...
[02:39:32] to handle
[02:39:34] Not, you know, the fact that we have static stuff and things that aren't interactive, we want to be optimal about delivery of these things.
[02:39:40] then the URL is not going to be sufficient.
[02:39:44] Same reason why, like picture scenarios where you have stores, like, you know, like, I mean, in the react sense, not like the solid sense, but like,
[02:39:51] Global stores and...  Like, any...
[02:39:55] If your pieces talk, then like,
[02:39:58] the router is not going to be enough either.
[02:40:02] Is build list a solution? No. Build list is, we talked about this earlier, build list is useful for teaching people maybe, but it's also kind of like, we can always optimize build list.
[02:40:13] better with a build.  Buildless to me just means like hiding the build  at an earlier step in the process,  like Dino pretending that it doesn't,
[02:40:21] compile things.
[02:40:26] Thank you.
[02:40:29] Maybe. Like, it's interesting, like,
[02:40:34] I've talked about this before. Dev has been talking about this recently, about the idea that React is just trying to recreate the browser with server components, you know.
[02:40:42] that's it's an interesting positioning.  He's done more looking into it after the original comments here. It's
[02:40:49] Like maybe that's the, like what they're, we're virtualizing these days.  And I told you this all a router thing.  So like, what is a broader.
[02:40:57] Like what is a browser but a big router?
[02:41:04] I can't comment on the next API specifically here for cookies and headers. I probably, I mean, even Nitro went through this problem where they had like previous APIs. I like.
[02:41:14] getting closer to web standards in the sense that it's easier to like,
[02:41:18] support these non-node platforms. I feel like when Guillermo comes on and says, "Oh, we realize that non-node isn't a real thing,"
[02:41:25] Yeah, again, today he's being pragmatic.
[02:41:28] That's a reasonable take, but it's like...
[02:41:32] If we're looking a little bit further out,
[02:41:35] This it's it's if we can
[02:41:38] you know, first lies on something here.
[02:41:41] I think there's a lot of potential because the people making the worker stuff don't really just want to put note on the worker.  There's they want a chance to change things, you know, whether buns that new change or whatever, you know,
[02:41:50] I've watched the struggle, you know,
[02:41:58] Yeah, I mean, it may be, but I can make that Hacker News app incredibly slow by just changing the network speed. Like if I simulate slow network, it goes from being...
[02:42:12] maybe faster by 10 milliseconds to being definitely slower by multiple seconds.
[02:42:17] Like it's just not even close.
[02:42:20] Like if network or device speed is into consideration, CSR is like a clear, clear loser.  Not even that was what pushed me.  I was doing there used to be a site that was called like.
[02:42:33] HNPWA.
[02:42:36] And these examples used to actually work. Now, none of them work.
[02:42:40] But they gave like these scores, right?  Lighthouse, Interact, all this.  And I was like doing my normal like tests  and I was getting really good scores.  But like one of the...
[02:42:49] These, I was just like really slow. Like
[02:42:52] Okay.
[02:42:53] Yeah, this is a...
[02:42:55] This is a good example, right? The Lighthouse score is good, but suddenly we have 6.2 seconds
[02:43:02] here.
[02:43:03] And you're like...
[02:43:04] Like, I think at an example where my lighthouse was like 97,
[02:43:08] But
[02:43:09] It wasn't like preact here. I was getting like six seconds.
[02:43:12] Yeah.
[02:43:12] I realized...
[02:43:15] That...
[02:43:16] CSR,
[02:43:18] Like...
[02:43:19] But
[02:43:21] So it's a tricky balance because if you talk to the people who live in the regions who have the slow devices, who use stuff like mini apps...
[02:43:28] They just know that all the crap is slow, so they actually often prefer...
[02:43:33] Almost like CSR, like offline first.
[02:43:36] And loading in the background.
[02:43:37] because they just know it's hopeless.  But it's kind of interesting that
[02:43:42] On the Western side, we see these scores and we're just like, man, we have to do something about it.
[02:43:48] I know from like an e-commerce standpoint where the first load is what matters, like,
[02:43:53] This is not acceptable and they do have to fix it. Everyone else, it's interesting, like maybe offline first...
[02:43:59] could be another way to make significant gains.
[02:44:02] But like...
[02:44:04] So
[02:44:05] Yeah.
[02:44:06] What's this one? Application shell with SW pre-cache, H22 with server push, Brotley, Zoglify assets, server rendered, yes.
[02:44:14] This one's even server rendered. Isn't that crazy? Yeah. Anyway.
[02:44:19] Most of these demos don't work anymore.
[02:44:22] This is the one that I got solid's current demo from.
[02:44:26] It would...
[02:44:27] But...
[02:44:29] The one that I build in every framework.
[02:44:31] Thank you.
[02:44:32] It was the view to example, but anyway, like
[02:44:37] and
[02:44:38] If I was on average just going to like...
[02:44:41] across the spectrum make a decision you know
[02:44:43] Because these lighthouse scores are
[02:44:45] maybe desktop, I don't even know if they're mobile. I would say that
[02:44:49] SSR is definitely faster than CSR, like generally wider speaking. I would, I would
[02:44:55] even though it's possible for it to be the other way,  if I was gonna take the like,
[02:45:00] whole group of stuff, I'd say betting on SSR is smarter.
[02:45:06] Thank you.
[02:45:10] Thank you.
[02:45:12] Thank you.
[02:45:24] That's fun. Ship the bundler to your product server and there's no build server. Yeah.
[02:45:29] Thank you.
[02:45:32] Thank you.
[02:45:35] Thank you.
[02:45:41] Yeah, you're talking about camping. This is the same thing where they prefer almost an offline first experience.
[02:45:48] I think...
[02:45:49] That's where the gap is.  And it's possible that when devices get...
[02:45:55] Like, there'll be a hard swing back from this position when the, like, when, like, the VICE catch up. It hasn't been, if you look at the graphs, like, Alex Russell has some amazing graphs. I don't know if I want to show them right now, but he showed that basically...
[02:46:08] The bottom end of the spectrum has barely moved in 10 years, while the top end has gone faster and faster and faster.
[02:46:21] Yeah, there you go.  Pressure is literally shipping  and spinning and editing functions.  Yeah, there you go.
[02:46:26] Anyway, yeah, I think that...
[02:46:32] Where was I?
[02:46:33] They hate it.
[02:46:35] It's
[02:46:38] I don't think this is where the ball stops, if that makes any sense.  I think...
[02:46:42] that
[02:46:43] Everything we're doing right now is exploring the middle.
[02:46:46] In the same way that islands scale...
[02:46:51] Thank you.
[02:46:51] these other solutions can scale as well.
[02:46:55] And the question is like,
[02:46:56] Bye.
[02:46:57] If you get in a world where you start building islands with view transition API from Astra,  which does like a semi-client, like a, what do you call it?  Flamethrower JS style or...
[02:47:07] what's the stupid, the rails library, turbo style navigation.
[02:47:12] Like,
[02:47:13] And you compare it to like
[02:47:15] I've
[02:47:16] fictional, imaginary, optimal version of RSCs.  So not like RSCs as they are today in React,  maybe not even using React.
[02:47:23] and you compare them and you go like, what's the difference?
[02:47:27] It's really going to come down to the fact that one can handle state consistently and can be used to build real apps and the other one
[02:47:34] has to become a single page app at that point.
[02:47:38] to do that. Like it has to make a larger island.
[02:47:42] It's funny because when I use Astro,
[02:47:44] I make very, very small islands. Same thing with Marco, even though I'm trying to do app-like stuff.
[02:47:51] That's where you want to get to.
[02:47:58] You don't want large islands.
[02:48:06] Yeah, I mean, I don't know if you ever want large islands.
[02:48:14] Yeah, yeah, this doubled up. Yeah, exactly.
[02:48:17] So, yeah, this...
[02:48:20] I think the current push right now is largely because of,
[02:48:26] money driving e-commerce.
[02:48:28] People who are in this state are bouncing right now that they don't even realize that they're losing...
[02:48:33] the customers.
[02:48:39] Thank you.
[02:48:44] It just like, have you ever used a really slow spa on a good connection and...
[02:48:50] Like the...
[02:48:51] And sometimes you have to refresh the page. Do you know what's a good example?
[02:48:56] AWS.
[02:48:58] You've used AWS console like
[02:49:02] It's complicated. It's hard.  And it's like...
[02:49:05] I kind of wouldn't mind if it was SSR'd.  I'm not going to lie.  Like,
[02:49:11] Yeah.
[02:49:15] even the JS loading cascade and stuff from SSR,
[02:49:21] because it knows what page it's on.
[02:49:24] I don't know.
[02:49:29] It's funny, it seems like I got a lot of CSR fans here, which is fine, as I said,
[02:49:33] Solid was built in a CSR-first environment.  It's very good at CSR.  Even though we're not maybe the fastest hydrating solution,  or we don't have server components right now,  we are arguably the fastest client-side,  one of the best choices for CSR applications,  which is why there's a big push on it at Start.  It's just...
[02:49:52] I was...
[02:49:54] I'm
[02:49:55] I like I've changed my mind over time because I was very CSR and I thought SSR was a waste of time. I like I changed my mind.
[02:50:02] So I, that's why like, it's, I don't see myself changing my mind back.  I can see a world where offline first makes a comeback.
[02:50:10] It just
[02:50:11] It's.
[02:50:12] It might not. I'm wondering when that is. I don't think it's anytime soon.
[02:50:22] Thank you.
[02:50:28] That's a more interesting question. Do I consider it irresponsible to start a new big project without islands nor RSCs?
[02:50:35] No.
[02:50:37] you
[02:50:38] Mostly that these technologies feel kind of intermediate right now.
[02:50:41] Like they're not quite there.
[02:50:47] I don't know how I think that it's exciting. I think if I was in e-commerce,
[02:50:52] I would be like, finally I get to use...
[02:50:54] React or whatever framework I want and actually build something performant, finally.
[02:51:00] But outside of that, like if I was in those boats, yeah, I'd be like, I couldn't jump off it fast enough, you know, like I feel like maybe Shopify felt like that, you know.
[02:51:10] But like...
[02:51:12] Everyone else?
[02:51:15] I don't know. It's, it's, it's,
[02:51:16] It's probably a good solution.  I'd consider it.  But I'd also be like you guys, kind of skeptical.  I'd be probably doing a single page app with maybe CSR.  Maybe.  Or I'd add server rendering.  I feel like what I'd do is I'd turn server rendering on, build the app, have stuff break, and then be like, okay, I'm turning off server rendering.  You know what I mean?  That's probably, let's be realistic.  We start a little more ambitious and then we have to ship.
[02:51:43] You know, that's probably where my natural tendency would be.
[02:51:48] Um,
[02:51:50] And then you tell yourself that you're going to turn on server rendering again in the future.
[02:51:54] But you won't.
[02:51:56] Maybe...
[02:51:58] It is possible that the big thing is with RSCs or certain component type architecture, it's shrunk the size.
[02:52:06] and this is true with islands to a certain degree as well,  but it's shrunk the size of the isomorphic components,  and isomorphism is kind of
[02:52:13] the ugly parts. It's like the places where we try and make it work on both sides, but it wasn't designed to work on both sides.
[02:52:19] This is kind of like where I'm agreeing with Matthew Phillips in that sense like he doesn't actually want to
[02:52:26] I think he just wants the client render the islands, not even use them as server render them in a sense, because like,
[02:52:33] Like...
[02:52:34] Thank you.
[02:52:35] Thank you.
[02:52:36] Isomorphism has never been perfect. It's been kind of like a flawed solution that we've kind of had to make do with. Like we don't have a dom on the server, let's pretend.
[02:52:44] So,
[02:52:45] Server components remove that.  So in a sense,
[02:52:49] they're less brittle, I imagine.
[02:52:52] The most brittle setup is the S
[02:52:54] the server side rendering plus spot. This is why you guys have real reasons to complain.
[02:52:58] Server components.
[02:53:02] It should be less brittle, which in theory, at least, means that you might have a lot nicer experience.
[02:53:13] Thank you.
[02:53:23] Thank you.
[02:53:33] I said it was irresponsible use it with the app router though. We did and we had to rush revert the page. Yeah, yeah, you see...
[02:53:39] This, yeah, I guess you're basically echoing what I was saying, like...
[02:53:45] Yeah, it's not.
[02:53:47] You have to adopt the paradigm, you know?
[02:53:51] Thank you.
[02:53:54] *sad music*
[02:54:02] Yeah, I'm hoping to do something about that.
[02:54:05] Benton, you weren't using it right, the classic react thing.
[02:54:08] I know it's so funny because you have like the classic like react core team says people aren't using it right. And my version of it is like you're not thinking far enough into the future.
[02:54:17] You know, like...
[02:54:18] I get it.
[02:54:19] It's fine.
[02:54:22] Okay, I'm not having a super long stream today, even though I got a good audience right now.
[02:54:27] I got only a couple more things for you all today.
[02:54:31] Sorry, someone asking why, why quick root roots large runs with React?
[02:54:35] Probably they reduce the interaction points.  I think that's...
[02:54:40] odd in general.
[02:54:44] Generally, I'd want more of my coding quick as possible.
[02:54:47] In fact,
[02:54:49] I'd be really sad putting React inside my Quick app.
[02:54:53] Like if I got that far where I could pull the trigger and get my team on quick,
[02:55:02] That's like the hard part.  Like it'd be sweet if, you know, you had a Next.js app and then suddenly you could go like, oh, look.
[02:55:07] this new page is all in Quicken, people are like, sweet.  But if I'd gone to the point where we're like, yeah,  let's just rewrite the sucker, you know, like change the route,  it's now a Quick project.
[02:55:17] Yeah, make a large react island.  You know, it's a good starting point, but it's going to be harder to break it down.  You know, like you do want if you're going to get rid of it, you're going to break it down.
[02:55:28] I don't know why. I have no idea.
[02:55:33] Thank you.
[02:55:37] All right, so let's see,  do we have anything fun to end out on here?  We talked about solid start beta two.
[02:55:44] talked about
[02:55:47] Yeah.
[02:55:48] We talked about
[02:55:49] We didn't talk about this.
[02:55:51] I don't even know if I want to talk about this.
[02:55:56] When I started web APIs, HTML, the next one, JSON. Yeah, we saw the stream.  If you want to know what I'm talking about, watch me.
[02:56:03] use a server function to send a response that serializes a response,
[02:56:08] And then like,
[02:56:10] pulls data asynchronously off that response.
[02:56:13] that was sent back in the serialized version of the response.
[02:56:17] Um...
[02:56:19] It's funny.
[02:56:21] Because I feel like these guys are kind of joking.
[02:56:25] JavaScript library that returns JavaScript from the server and runs it on the client.
[02:56:28] you know, find the innovation.
[02:56:30] But it's funny that it's like, it's not that far off of what the whole server function, server action things are.
[02:56:37] People I think thought when I wrote this, I was talking about React, but in general, this whole server function thing,
[02:56:43] happens because we control the JS on both sides.
[02:56:46] Um...
[02:56:47] Okay.
[02:56:48] Yeah.
[02:56:50] For people who are wondering what this was about...
[02:56:53] just out of curiosity.
[02:56:55] SOLID's resources support
[02:56:58] both of these
[02:57:00] And the second one will actually be more performant because it doesn't have to trigger suspense.
[02:57:05] That's all I was getting at.
[02:57:08] Because if you return
[02:57:10] something synchronous, like if something if it's an async function, it will always resolve async. And
[02:57:15] Even if our cache user is a promise, everyone keeps telling me use promise for cache users.
[02:57:19] we still generally have a way to access it synchronously. React does too. Like their use has to  insert something on the promise to resolve it synchronously or use like a weekmap or something,
[02:57:31] Otherwise, it'll just keep on suspending indefinitely, because every time you get to the promise, even if it's the same instance of the promise, when you go to read the promise,
[02:57:37] you can only get the value asynchronously.
[02:57:40] So how do you do that during a synchronous render process?
[02:57:43] you force getting the synchronous value.
[02:57:46] And the reason I wrote this is because everybody and their dog is going to write that first version of this function. Everybody.
[02:57:52] Nobody is going to write the second version.
[02:57:56] But the second version,
[02:57:59] actually
[02:58:00] can be optimized in the first cannot.
[02:58:02] If you watch me, sometimes you write the second version accidentally.
[02:58:06] you'll write like a create resource or create async call and you just call fetch my thing and just return it.
[02:58:12] and you don't make that function async.  But a lot of people,
[02:58:15] actually like
[02:58:17] go in and go, okay, create resource takes an async function, and then they await the one thing they're listening for, and then they return that. And you're kind of like, you just added an extra micro task hop for really no reason.
[02:58:31] Um,
[02:58:31] Internally, there might be another promise. So yes, you know, who cares if it's two micro tasks, like two micro task queues or one or whatever, but it's just...
[02:58:42] It's the language.
[02:58:44] I got a lot of people telling me that TypeScript would have fixed this for me, but the thing is actually I didn't want the fix.
[02:58:50] Ironically, I actually wanted the optimization
[02:58:53] And I don't
[02:58:55] People talking about Zalgo not knowing what they get.
[02:58:59] the funniest
[02:59:00] thing is like,
[02:59:02] or mention that you can await it anyways and in both cases it won't end up being that different
[02:59:08] But...
[02:59:11] There's something...
[02:59:13] Like...
[02:59:14] This has got to do with the coloration of async await, essentially, right?  Because...
[02:59:19] Thank you.
[02:59:21] Thank you.
[02:59:22] You could also just wrap this itself in an async function.
[02:59:27] I think someone put that in there and return the thing synchronously.
[02:59:30] And there's like no...
[02:59:32] qualms here, it's just realizing that the scope of where you put that async function actually has an impact.
[02:59:38] and can actually have different performance characteristics.
[02:59:41] Anyway.
[02:59:47] I don't know. You guys got pretty quiet here. I honestly, I think a lot of people thought this  was clickbait. I had someone go, oh, they started like ranting off at me and then they're like,  oh wait, you created solid. Oh my God. Like,
[03:00:00] You weren't just clickbaiting.
[03:00:01] People.
[03:00:03] *sigh*
[03:00:04] Uh...
[03:00:06] Let's conclude RSC's endgame.
[03:00:08] I don't know.
[03:00:09] 100%, but they are definitely...
[03:00:12] a version
[03:00:14] of something that I would consider has considered a lot of the trade-offs.  They are like a path.
[03:00:20] that actually is fully considered, where I don't know if everything else is. RC's problem right now is that the
[03:00:25] They're not like as optimal.  There's a lot of
[03:00:27] There's still, you know, like there's
[03:00:29] things and the models incongruent and,
[03:00:33] But...
[03:00:34] Thank you.
[03:00:36] fundamentally there's there's there's sound whether that works for everything you know is a  whole other question
[03:00:45] Thank you.
[03:00:50] Thank you.
[03:00:51] Thank you.
[03:00:54] C sharp has this better as you can return synchronously. Yeah.
[03:00:58] The promise way is cleaner if you're handling errors.  Yeah, it depends on like where people come and tell me,  well, the try catch is better here.  And this one has dot catch.  And there's different syntaxes for it.  Some people told me that I actually did the stuff wrong.  Um...
[03:01:13] Yeah, so the fetching part is more or less...
[03:01:18] The same...
[03:01:19] for both of these, it's the return cached user that it's where the difference is.
[03:01:28] Yeah, I don't even I honestly like how many likes are on this?  I don't even know.  I'm zoomed in.
[03:01:34] This might be my most liked post ever.
[03:01:37] I think, I think, uh,
[03:01:39] Joining Netlify was also around this amount.
[03:01:42] I don't.
[03:01:44] I, I, I literally posted this while, um,
[03:01:48] waiting to pick up my daughter from her ballet performance. It's so funny that I just wasn't expecting this reaction.
[03:01:56] What's the overhead of triggering suspense? Well, it depends on what the suspense is, right? Because it's all about if you have to render the fallback.
[03:02:03] Like,
[03:02:05] you suddenly went into a whole different world that you could have probably just avoided.
[03:02:13] Yeah. I don't know.
[03:02:16] Some people were mentioning React and that, but I was thinking about it more and it's like, no, React has to still asynchronously resolve, but maybe by the time, because this is an immediate async, maybe by the time...
[03:02:28] It...
[03:02:29] Like if if react
[03:02:34] If this was wrapped in a use, I think React synchronously wouldn't be able to get the value, so it would suspend.
[03:02:41] And then...
[03:02:42] Um,
[03:02:44] Wrap it, when it resolved instantly, it would add a way to synchronously access the value that then it would tell it to re-render again. So like,
[03:02:51] Yeah, like you're causing at minimum
[03:02:54] another re-render in React even as well.
[03:02:57] Yeah.
[03:03:00] Thank you.
[03:03:09] - Where were you working?  Before I was working at Netlify, I was working at eBay.
[03:03:15] on Marco.
[03:03:16] And then before that I was working at Vitagami,
[03:03:20] which was a startup making like a social, like an Instagram for schools.
[03:03:25] And then before that, I was working at a .NET shop.
[03:03:29] Active Network building like they build a lot of, I was in their government section, I was building call center software.
[03:03:37] like .NET like
[03:03:40] Yeah.
[03:03:40] C# and like,
[03:03:42] Full stack.
[03:03:46] It could be, but I was just like...
[03:03:50] For the sake of my argument, it didn't really matter.  I just was trying to show a synchronous versus asynchronous resolution.
[03:04:01] Anyway, um...
[03:04:05] Yeah, I think.
[03:04:07] Let's end this on a light note.
[03:04:10] Syntax.
[03:04:12] I always like bringing syntax discussions in because these are the kind of things that people argue about, you know, over the
[03:04:20] holiday breaks and stuff, right?
[03:04:22] Thank you.
[03:04:23] And...
[03:04:27] this is a Svelte or a Vue user coming in and going like,
[03:04:32] Man, I really don't like the show component. It's weird that the false happens here and the truth is here.
[03:04:41] And it takes all the space.
[03:04:43] I lose track of the condition boundaries are.
[03:04:47] And I thought this was interesting because it started with a discussion of like why view
[03:04:54] and Svelte.
[03:04:55] Um...
[03:04:57] you know, and they're,
[03:04:58] to-purpose APIs.
[03:05:00] we're
[03:05:01] were better than JSX,  but I think I ended up
[03:05:05] swapping the argument around. I just want to throw this in. This is just a testimony to how sweet JSX is.
[03:05:11] I know I can use switch and match.
[03:05:13] But you know, if Owl Smith shines, it'd be nice to have name slots and all this.  And I was like, oh no, no, no, not name slots.
[03:05:20] What I said to them was, if
[03:05:21] If bugs you, self-close the tag, use children as a prop name, then you can put them in order and keep the equivalent indentation.
[03:05:28] What's cool about JS check is children is just a prop and any prop can take JSX. No need for a slot concept. Personally, I find it much cleaner. Try making a custom four component in Svelte review, something you do for pagination or virtualized lists.
[03:05:39] Sure, the specific native control flow is more to purpose, like each, but you can't remake that in user land. Okay.
[03:05:49] So they went and saved me the problem of actually...
[03:05:53] making the screenshots to my point. See, if you did your show component like this, then you can actually see the arguments.
[03:06:00] But then he was like, yeah, but then, you know, he changed, he went and he was like, yeah, I don't like show. I'm actually going to rename it to my if component.
[03:06:08] And then he went and actually implemented it in two seconds.  And then he was like...
[03:06:13] Wow. And this, you know,
[03:06:15] I think this should be the moment for people  when JSX clicks for them,  because then it's just like,
[03:06:21] They went from something that maybe they didn't find ergonomic to the exact thing they wanted
[03:06:28] and it basically took them no effort.
[03:06:34] Thank you.
[03:06:36] Thank you.
[03:06:39] Thank you.
[03:06:39] Yeah, I mean...  This is hard.  Because...
[03:06:45] the if and else have no relation to each other the problem with this it's
[03:06:53] Now you're designing like a specific DSL. I think the key part here that I was trying to point out to him was that Solid doesn't treat for or show as special. In some ways it's a weakness. We're talking about server side optimization.
[03:07:07] And in solid, you can literally write your own for loops.  So like, like we can't optimize as well.  But on the other hand,
[03:07:14] Thank you.
[03:07:16] It's not a compiler trick. Your components, my components, his components, her components,
[03:07:23] are all treated identically. There's no like, if
[03:07:27] an else or special kind of situation.
[03:07:29] You're right, this isn't reactive. I told him that he should just
[03:07:34] write the ternary and put in a fragment, otherwise it won't update. But
[03:07:38] But like
[03:07:43] The power here is that
[03:07:46] The...
[03:07:46] baseline primitives of the framework
[03:07:50] Like,
[03:07:51] I might have talked about this before, but I feel like it's worth mentioning again is
[03:07:55] I think it's really powerful
[03:07:57] whenever you can
[03:08:00] Take something.
[03:08:04] let's say import
[03:08:06] X from somewhere, right?
[03:08:10] And then you can go const,
[03:08:14] Why?
[03:08:15] equals
[03:08:17] X. Now,
[03:08:19] I'm oversimplifying, but like what I'm getting at is
[03:08:22] If you can
[03:08:24] If you in user space can provide something that has the same abilities as something else,
[03:08:29] That's how it feels first party.
[03:08:32] For example, I can go...
[03:08:36] Thank you.
[03:08:38] I can go.
[03:08:40] What's...
[03:08:41] Let's create signal.
[03:08:44] And I can go, well, function,
[03:08:47] I could obviously assign it, but I can go,
[03:08:50] create my signal
[03:08:56] Thank you.
[03:08:56] Thank you.
[03:08:57] I don't, this, what's the property this is? And I can return create signal
[03:09:06] ARGs.
[03:09:07] this
[03:09:08] is
[03:09:11] This is a superpower.
[03:09:18] Dark mode, please. Yeah.  How did this end up in light mode? I don't even know.
[03:09:24] I'm not.
[03:09:27] This is very powerful property because, sure, you wouldn't do this, but it means that everything else that follows the shape gets treated the same way.
[03:09:47] Similarly, for
[03:09:56] My four.
[03:10:01] Once...
[03:10:02] Like, there's a natural tension here because as a language creator...
[03:10:06] Like,
[03:10:08] Everyone can create their own map function in JavaScript,  but not everyone can create their own for loop.  So sometimes having...
[03:10:14] Similarly, everyone can...
[03:10:17] So there is value, I guess, to recognizing that there are certain control flows that are built into the language.
[03:10:24] Thank you.
[03:10:24] and those are not extensible.
[03:10:27] But like,
[03:10:29] This
[03:10:31] Thank you.
[03:10:31] as a concept is so core to the,
[03:10:35] what we do is solid. I feel like this is like the place where solid and it's felt
[03:10:40] Uh...
[03:10:41] kind of
[03:10:43] kind of split because I,
[03:10:46] Thank you.
[03:10:46] Can I create my ruin?
[03:10:49] I don't think you can.  You can't...  There's no way to make...
[03:10:54] My...
[03:10:55] Like, I could be wrong, right?  But you can't create my state in the...
[03:11:02] in the same way in Svelte, right?  Like you can wrap it and create your own wrapper,  but you can't create dollar sign my state.
[03:11:12] Thank you.
[03:11:19] Thank you.
[03:11:20] Thank you.
[03:11:21] Thank you.
[03:11:25] I just...  I...
[03:11:30] Overriding global is a different thing.
[03:11:36] That thing is already global. I just mean that like in general,
[03:11:41] If you take an approach of, I don't know what to call this composability like this,
[03:11:45] then essentially...
[03:11:48] like the sky's the limit because you don't have to worry.  Like,  like,
[03:11:53] From an ergonomic standpoint, yeah, there's obviously limits to JSX, you know, that are innate to it. So if you created a purpose template language, you can do better or whatever. But like, if you've already acknowledged that, like I'm using JSX, or I'm using JavaScript in this case, like if you're already in this zone,
[03:12:06] and you're not trying to create a compiler to create a new language or something like.
[03:12:10] What this does is it means that the end user,  if they don't like something about the API,  all the trivial, silly things
[03:12:18] things that drive people nuts.
[03:12:21] they can make it their own.
[03:12:25] Right? Infinitely.
[03:12:27] they can wrap the my four in the four in the my four and the thing like all the way up and they can keep
[03:12:33] the same patterns because everything else in solid knows how to handle
[03:12:38] these or these or whatever and I feel like
[03:12:41] this principle is undervalued. I've ranted about this on stream before. I just wanted to kind of point out that I feel like
[03:12:48] When people do the syntax comparison,  especially when they show me show and for components for,  and I've done the conversion myself,  I have a stream where I think it's called like,  it's my least watched stream where I talk about repl diving,  and I compare data binding in different frameworks  and syntax, it's a complete stream about syntax comparison.
[03:13:07] Yes.
[03:13:09] I just go, yeah, create me your own version of this control flow and show me what it looks like.
[03:13:16] like create a show component or a for loop. And the thing is, once you start getting to react, you realize that this
[03:13:23] is something that they are also...  Suspense is just a show component.  Do you know what I mean?  You start realizing that...  Error boundaries.  You start realizing that these things...
[03:13:33] And these compositions, layouts, conditional layouts, like, are just part of the way we build. So giving people building blocks in the right form, and giving them this basically principle that is as long as you follow this,
[03:13:48] We will treat you the same.
[03:13:50] you know, not special case you is really powerful.  It's like the complete offset end of the spectrum  from having a specific DSL to do everything,  like adding new syntaxes.
[03:14:03] Sometimes you need new syntax. Like Marco says HTML is insufficient to describe all these ideas,  so they added new syntaxes to the
[03:14:11] to the tags.
[03:14:13] But it's all categorical because once you...
[03:14:15] use those syntaxes you can use them
[03:14:18] consistently for everything it's not like it's not like uh
[03:14:21] I have a V4 and a VIF.  Like, sure, syntactically, to be fair, those have similar, they're just using attributes.  But the actual semantics of what those things do actually differ based on what the tag is.
[03:14:34] Says they are.
[03:14:35] which is like, especially true of control flows versus attributes,  because like some of them apply to the children, um,
[03:14:42] Some apply to the element itself.
[03:14:44] you
[03:14:45] Some involve the element replicating itself.
[03:14:51] Thank you.
[03:14:52] Thank you.
[03:14:54] Anyway.
[03:14:56] It's hard. I mean, everyone has their own choices, but I would never...
[03:15:02] Like these are the characteristics that I consider valuable to.
[03:15:07] rather than like
[03:15:10] like the pure aesthetic look of it.
[03:15:13] It's interesting.
[03:15:18] You have to write your, you're talking about for the ruins. Yeah. You have to write your own. Yeah.
[03:15:26] Can I make my own suspense?
[03:15:29] I mean...
[03:15:30] According to this, you can, right? Suspense is not a compiler trick. It has its code. So if you wrap my suspense in suspense, yes, you could. And you, I mean, I don't know what you would do. Maybe you'd wrap the fallback or the children. There isn't that much exposed. But yes, you can make my suspense.
[03:15:51] Salt stores are a little bit weird, aren't they?
[03:15:54] Yeah, the async and stores are the two places I'm looking at change. The main thing is
[03:15:59] I really liked immutable JS.  I liked file core from Netlify or sorry, Netflix.  Stop saying that.
[03:16:06] So like that impacted my design there.  I was really big on these immutable APIs.  For the most part, I'm pretty sure stores are just going to be produced.  Essentially, we are going to keep the read, right?
[03:16:17] Split.
[03:16:18] But I think we will just make it default to produce and people will mutate because it is mutating.  I think there's actually a semantic thing that confuses people there.  Stores are internally mutable.  So we shouldn't really hide that fact because people get really confused.
[03:16:37] Wait.
[03:16:39] That song's always been...
[03:16:41] Yeah.
[03:16:41] Yeah.
[03:16:44] In fact, SolidSignals repo library already does that.  I just need to... I'm happy with SolidStart where it is.  I get to actually...
[03:16:52] I had three big projects.
[03:16:54] And solid start took me all year.  We still got more work to do.
[03:16:57] Don't get me wrong.
[03:16:59] But.
[03:17:01] Now we're getting to a place where...
[03:17:07] *laughs*
[03:17:09] Who's rating?
[03:17:14] Welcome, welcome.
[03:17:17] Oh, wow, we actually have people in our channel.  This so rarely happens.
[03:17:23] But yeah, Solid Start is at a really good place now with the new beta release that...
[03:17:29] I can focus on solid 2.0 and finishing the hybrid routing stuff finally.
[03:17:34] Um, but...
[03:17:36] Yeah, I think...
[03:17:39] I think, uh,
[03:17:43] Thank you for the raid.
[03:17:47] Or actually, here you are. Did I get that right? No. Yeah.
[03:17:52] Thank you.
[03:17:53] Thank you.
[03:17:54] Um, yeah, so I'm, I'm, I'm, uh, I'm super excited. Funny thing is we're actually just about to wrap up here on the stream. Actually, I've been talking all about, um,
[03:18:06] CSR versus...
[03:18:07] um SSR and about all this drama on Twitter the last uh
[03:18:12] The last...
[03:18:13] couple days, really.
[03:18:16] as well as the new Solid Start release.
[03:18:19] What is Solid Start?  Solid Start is...
[03:18:22] the meta framework, say the SvelteKit,
[03:18:25] or Next.js.
[03:18:27] for SolidJS, another client-side JavaScript framework.  And this release is getting us very close to its 1.0 release.
[03:18:41] What's next on the roadmap? Honestly, this release is the big one. We're headed to 1.0.
[03:18:47] Um, that's, that's my hope. We'll, we'll get RC candidates after we fix some bugs. The big thing  with this one is we were now built, we changed our adapter layer for multi-deployment to be built on  Nitro, which is what Nuxt uses. So they handle all the, you know, I want to deploy to Purcell or  Netlify or Cloudflare or, you know, Dino or whatever that, that layer is now being handled
[03:19:17] router agnostic, which is kind of crazy to a lot of people,  but you can use any solid JS router with it now,  which opens up, you know, people to use different patterns,  different data loading things.  Then the trick to doing that was,
[03:19:29] the file system routing, which you don't have to use, but if you want to use it, is just an injectable as a basic config. You can use a component, you can put it into your router however you want.
[03:19:40] And then it's just a route definition that you can use to generate routes with your router.  And then in your pages, along with your default page component, which gets automatically lazy loaded code split,
[03:19:50] you have the ability to actually set more of your route definition and this just gets merged on. So in that case, we essentially can have loaders for different router. If you're using something that's kind of like React router style, then you can just
[03:20:05] use those loaders and actions if you want. If you're using TanStack or SolidRouter or whatever. Basically,
[03:20:12] And, you know, the key to this is...
[03:20:15] We've designed in a way that's very isomorphic.  So we have server functions.
[03:20:20] But these server functions can be called from the client.  You can in fact use CSR,  the client only rendering with server functions,  because we've kind of abstracted  the difference between actions and
[03:20:30] and server functions.  Server functions are something that we've had for over a year now.  We were the first meta framework, I think, to add server functions.  But...
[03:20:40] and we actually had server actions built in, but now we've pulled the actions to the router. So if you want to use
[03:20:44] those actions use solid router. If you want to use, I don't know, tan stack mutations or create query, you know, use it, use it with solid router, use it with tan stack router or whatever, you know, like essentially.
[03:20:56] it's a matter of layering the expectation.  We're just giving the primitives,  the pieces you need to build.  Obviously we're gonna have pre-built templates  all set up with what you want.  You can just install them, build the CLI.  But the idea here is that it's core,
[03:21:10] You can go from client rendered
[03:21:13] and then just hit a switch and now it's SSR server rendered.  We have a few tools to help with this.  Like you can specify, like do dynamic imports like lazy,  where this is like only runs on the client  and skips out of hydration.  But generally speaking,
[03:21:26] this goes the full spectrum. We even have an experimental islands mode to do stuff like Astro style. It's not ready yet.
[03:21:32] But this is all--
[03:21:34] The idea here is that
[03:21:36] we can get solid start to 1.0.
[03:21:39] and leave the more
[03:21:41] volatile changing stuff to...
[03:21:44] essentially
[03:21:46] Um,
[03:21:48] like later because it's all swappable.  It's not the meta framework itself.  If you just go install SolidStart with the CLI,  npm init or pmpm create solid,
[03:21:59] and choose the bear template,
[03:22:02] you'll get basically an app that reminds you of Create React app.  It will server render or create VDAP,  but it's like five kilobytes of JavaScript.  It's just like literally like a hello world app.
[03:22:13] That's the baseline. You get a 5 kilobyte app.
[03:22:17] And from there,
[03:22:19] all the other pieces later on.
[03:22:21] My goal here isn't to be like, this is the one way you do this.  It's to encourage people to create stuff like create T3 app.  You know, people will make meta frameworks.  They will bundle around this.
[03:22:32] is expandable
[03:22:34] And we'll use this for our starter templates, you know, for, you know, when people just like, I'm learning solid.
[03:22:40] Here you go.
[03:22:41] all the way to the other meta frameworks.  It's a layer over solid.
[03:22:46] But it's kind of taking the role of the bundler.  It's not...
[03:22:49] actually like it just makes all the hard SSR parts easy.
[03:22:54] It's not telling you how to live your life.
[03:22:57] Right.
[03:23:01] Are these loaders universal? Yes. It depends on how you set up, right?
[03:23:06] The pattern we use in solid is universal isomorphic loaders, because we use server functions.
[03:23:15] So you might...
[03:23:16] If this get user is a server function, then it will only run on the server.
[03:23:23] My last stream I did last Friday was all about this and how this all worked.  But essentially...
[03:23:30] Um,
[03:23:32] We can also tell, like, you can import is server from solid and decide if you're going to run this on the server, the client, etc.  But this is an example for this router.  Um...
[03:23:41] We have, you know,
[03:23:42] a cache API.
[03:23:44] And that way you can basically...
[03:23:47] fetch it here and fetch it in the component,
[03:23:50] And this will allow code splitting and nested routings to parallelize the fetching hoisted out.
[03:23:56] and then you also support link preloads like on hover.
[03:24:00] Um,
[03:24:02] But yeah, we switched around for the new version of the router.  We had different patterns for the old version of router.
[03:24:08] with SolidStart. The new version went this way because it'll support hybrid routing and server function in the future because it doesn't use context as a mechanism it uses a cache. But this is all part of like the thinking right, it went into finding the right division.
[03:24:20] The router is the most opinionated or volatile part  of a meta framework.
[03:24:24] by not making it the meta framework,
[03:24:28] you can actually make the core a lot more stable.
[03:24:31] We're going to continue working on routing. Routing is the future of JS frameworks for the next year. I often say React Server components are a routing concern.
[03:24:40] So like,
[03:24:42] This is how we approach it, right?  I don't want people...
[03:24:46] There might be, I'm trying my best to make, you know, for solids, first party stuff like universal APIs, so that like, we won't have an app directory page directory, you know, scenario happening here.
[03:24:59] But if there were...
[03:25:01] then it's, you know, we have our approach to, you know, to like just
[03:25:06] to adopt it. So this is, this is basically the gist of it.  Now that we've got the right separation, right responsibilities,  it's going to be a lot quicker and easier for solid start to get to 1.0.
[03:25:18] Um,
[03:25:19] So, yeah, I mean, there's a ton of other features here that I'm not talking about because they aren't in SolidStart anymore directly because we added, you know, the router has like new, better async primitives, etc. You know, we also did, you know, these server functions are incredible. They can serialize.
[03:25:37] crazy data. Like you can have the server function basically return an iterable
[03:25:42] async iterator and then like have the client iterate and ask the server for data over the  wire like we have javascript executing on both sides here so it's like
[03:25:50] I did a funny demo the other day where I had the server return response,  which serialized a response, which had a stream on it.  And we like literally like,
[03:25:59] from the client, read the response from the response and got the JSON, like got the stream off it like and
[03:26:05] That's the kind of power here.
[03:26:08] promises that serialize objects that also serialize promises this
[03:26:13] You might be going, why do you want to do this?  But like there is impact to these kind of things when you consider, you know,
[03:26:20] what you can stream, like picture, picture a scenario here where,
[03:26:25] you know, you have this knowledge of what data, like you have a cache API set up with your router for something, and you have this idea of actions and data invalidation.
[03:26:35] You could be on a page, you could update that data and post it to the server and say, hey, on this server action, I want to redirect...
[03:26:45] to
[03:26:46] this other page,
[03:26:47] and I want to load this data.  And I'm not talking about RFCs here.  Hell, it could even be a client rendered application.  You're just, because of the cache API,  you basically...
[03:26:58] have this knowledge and so the actions, you don't
[03:27:02] what you're going to invalidate. You just
[03:27:04] post and go, I'm going to add this list and I'm going to
[03:27:07] Let's say you're adding a-- I'm just trying to pick something.  You're adding a user to a list of users,  and you're on the details page,  and you want to redirect back into the list page.
[03:27:16] and you want it to update. Well, there's nothing to stop this kind of paradigm to be able to
[03:27:23] Post to the page.
[03:27:25] you know, essentially. And...
[03:27:28] While it's on the server...
[03:27:30] recognize
[03:27:32] that he
[03:27:33] these cache keys are gonna get fetched.  Like call this load function on the server  for the next page you're going to.  And because like, let's say you only want  to invalidate certain things,  pass that invalidation logic along
[03:27:45] And then,
[03:27:46] when it returns the
[03:27:48] virtual redirect the client to tell it to
[03:27:52] client
[03:27:54] navigate to the next page.
[03:27:56] It could also send
[03:27:58] the body back
[03:28:01] as
[03:28:02] promises that are serialized.  And as the server finishes
[03:28:07] fetching the data for the next page,
[03:28:10] it loads in. So essentially the client gets a response right away, starts doing the navigation, realizes the data is not there, so it starts suspending. But the server is already data fetching in the background. And as the promises resolve,
[03:28:22] Promises on the client resolve and everything finishes.  Single flight mutation,
[03:28:27] in client-side render mode, no server components.
[03:28:30] One of the biggest differences with Solid and React is like our suspense, we've had
[03:28:36] Suspenser data fetching for three, four years now.
[03:28:39] we never had server components. So like almost all these things that you, you know, react
[03:28:45] uses with server components that are like advanced use cases. They just work with solid
[03:28:49] the way you always build apps. Don't get me wrong, I think server components are great.  I think there's a lot of potential here.
[03:28:55] I just don't think we need to limit ourselves to saying like, this is the only way you can build an app.
[03:29:03] Thank you.
[03:29:07] Thank you.
[03:29:09] Anyway, if you missed, well, I'm really at the end of my stream here. I know you, you, my plan today was actually the stream before your stream. Like I figured I was gonna be done like an hour ago, and just kind of, you know, catch the end of Prime stream kind of sneak in and then your stream but then I found out you weren't streaming today.
[03:29:27] So, um...
[03:29:29] You know, it is what it is. I hope your appointment went well. But...
[03:29:35] Yes.
[03:29:37] Yeah, essentially...
[03:29:41] Okay.
[03:29:42] Yeah.  The problem is I'm actually almost at the end of it.  I did end up going a little later because what ended up happening was...
[03:29:53] Xfinity, they gave me that notice.  So like, we're going to be in your area doing repairs like on Thursday.
[03:29:58] And then they like, I like,
[03:30:00] advertise the stream this morning and then they're like
[03:30:02] we started doing repairs in your area. You may notice issues with your internet. I'm like,
[03:30:06] I'm not.
[03:30:06] Come on, guys.
[03:30:09] Um, yeah.
[03:30:11] Yeah.
[03:30:12] Yeah, yeah, yeah. It's so funny because now that I got the raid, I kept on going. People were interested in what Solid Start is.
[03:30:21] As I said, I imagine stuff like server components
[03:30:24] are in our future. We already showed a demo of hybrid routing, but
[03:30:28] The biggest thing here, and I've been feeling it all stream when I've been talking to people in the chat, is that a lot of people feel like they've been left behind.
[03:30:37] And
[03:30:38] I think there's a lot of good ideas.
[03:30:39] that we're seeing out of next and stuff.  And I don't know if everyone's ready for it.  And I don't think you have to be left behind.
[03:30:47] Right.
[03:30:48] I think that's just been the struggle like between developers working on  applications. Yeah. Like they should change to the new architecture. It's,
[03:30:55] Great.
[03:30:56] But it's like,
[03:30:57] You know, I always use Tanner as my poster boy. It's just like,
[03:31:02] He creates the greatest router of all time.
[03:31:07] client, you know, JavaScript writer all the time and, you know, with the type system and stuff. And like,
[03:31:12] What's he gonna do with it?
[03:31:14] Well...
[03:31:17] If you don't use React well in a meta framework,
[03:31:20] you're kind of hooped.
[03:31:22] So, you know, that's the message.
[03:31:25] So I think
[03:31:27] I think that's where I'm sitting these days.
[03:31:30] I'm pretty happy...
[03:31:33] where things are at. I was able to reduce solid starts code base from about 10,800 lines to about 1400 lines, maybe.
[03:31:41] roughly. So almost 10 shrunk it by 10 factor. And I, and the, I, you know,  reorganized the files and, you know, it's,  it went from 150 lines of code to our 150 files to about 30 files.  So like this is significant reduction for us. Um,
[03:31:58] Right.
[03:32:00] So this is the difference between making the router not part of it.  All these pieces will actually make Solid Start able to be
[03:32:11] much stabler than it would otherwise. Honestly, stuff is changing too fast and you have to understand where the change is happening and
[03:32:18] account for that.
[03:32:21] It's funny, you do this in your own projects, you know, when you're building your applications. I mean, it only makes sense that we do the same thing when we're building open source projects.
[03:32:31] Thank you.
[03:32:33] Yeah, deleted code is the best, right?
[03:32:38] Yeah, no, no, definitely.
[03:32:42] *laughs*
[03:32:42] But you guys got me. I honestly, I raved about everything already. I raved about
[03:32:49] Everything from this to the Guillermo tweet to Dax's...
[03:32:57] continued
[03:32:59] Um,
[03:33:00] You know, performance demos.
[03:33:02] So.
[03:33:03] I don't know. I don't have to tell you guys.
[03:33:06] Yeah, no, I'm just, I mean, you talk about this.
[03:33:13] Um...
[03:33:15] The funny...  The biggest...
[03:33:17] move, I have to admit, was let's see how many open issues are on Solid Start right now.  There's zero pull requests and 21 open issues.  Yeah, error running on Cloudflare workers.  I probably need better documentation on how to get Cloudflare workers working.
[03:33:30] Yeah, I'm going to have to show them.
[03:33:33] Okay, that's fine.
[03:33:36] I kind of went in and I warned everyone, but I closed every issue basically in the repo.
[03:33:43] um
[03:33:44] People are calling this issue bankruptcy these days.
[03:33:48] But I actually went through and I knew like we changed so much of the base and I know like
[03:33:53] if this was a real product, you could never get away with, you know, this, so to speak. But like,
[03:34:00] we literally warn people every step.  And the truth of the matter is,
[03:34:03] We've changed so much I can't even go through every issue and test it.  It doesn't even, a bunch of them don't even make sense.  I tried to move them.  I did spend time on every issue.  I closed 230.
[03:34:13] issues, I think, and 22 pull requests.
[03:34:17] Um...
[03:34:18] Things have gotten a little bit out of hand.
[03:34:22] You know, there is a trade off here.  I don't like
[03:34:25] doing that.
[03:34:27] Per se,
[03:34:28] even if doing it felt actually really good.
[03:34:31] because it's like a new start.
[03:34:33] But the realism is those issues would have sat there forever.  So, um...
[03:34:39] You know, it is what it is.
[03:34:45] Thank you.
[03:34:53] You want to know about server functions? Yeah, yeah, yeah. I mean, it's...
[03:34:57] Like server function serializer, I know that's a no-go. Yeah, one thing, we didn't do closure extraction.
[03:35:02] Um,
[03:35:04] I don't know if we error hard enough about this, but we don't do closure extraction.
[03:35:08] There's a way to bind variables, but it's very explicit. There's no hidden closure thing going on.
[03:35:14] Um,
[03:35:15] Server functions should work basically anywhere, but one thing that I've been doing is I don't like them in the middle of the components, so I actually have been designing APIs that discourage you from putting them in the middle of the components.
[03:35:27] Because
[03:35:28] What we did with Solid Router was we made these cache and...
[03:35:33] action APIs. And what's beautiful about them is you declare them outside of the component and then  import them anywhere. So you can get optimistic updates for the specific action anywhere because  you just import it.
[03:35:44] And then you have the action and then you just go like use submission or whatever on the action.  And then you get all the live submissions.  And similarly with the cache API, you want to put it both in the loader.
[03:35:56] And
[03:35:57] using the loader and in the component, or in the load function and in the component. You don't have to. With the route preloading, like, to be fair, you could probably fetch inside the components just like you do in Next and be like, I'm fine.
[03:36:10] I'm just never going to be convinced that that's fine.
[03:36:13] Yeah.
[03:36:14] But you could do that pattern if you really wanted to.  But again, with a cache API and calling it preload,  we're encouraging you to pull it
[03:36:23] the server functions out of the components, which puts them top level, which resolves a lot of the  weird closer extraction problems. And I explained this on stream previously, but essentially, if I
[03:36:38] Like...
[03:36:39] I wonder if I can
[03:36:39] back up to it far enough.
[03:36:41] Probably not. I probably refreshed the page. Let me see if I can jump back to last stream.
[03:36:47] No, I can't. Okay.  What I was trying to say is the problem is never...
[03:36:50] isn't like import database from...
[03:36:53] database and putting this in a
[03:36:56] whatever my server
[03:37:00] function.
[03:37:03] This isn't the problem, right?
[03:37:04] use server, right?
[03:37:07] DB something, right?
[03:37:09] This isn't the problem.
[03:37:11] Because top level module scope always exists. You don't need to close your extract or write anything for this. You can just make this part of the module because you end up just basically exporting this in the background. It becomes basically its own module.
[03:37:26] when you break it out from the rest of the code.  But the problem is that if you have function
[03:37:33] say, my component,
[03:37:39] 'Cause even here, even this, look, let me go const,
[03:37:43] Secret.
[03:37:44] Here.
[03:37:48] This
[03:37:52] top level,
[03:37:53] Again, you don't have to do any close extraction. It's there.  It will just be split into the module.  It will never, ever, ever make it into the client.
[03:38:01] because like especially this one because you can see it's pure like the every bundler worth its  salt which is every bundler would never ever send this to the client however
[03:38:13] Thank you.
[03:38:14] If I do this...
[03:38:16] and I put it inside.
[03:38:18] Again, we're still fine.
[03:38:20] But if we put
[03:38:21] This
[03:38:23] in here,
[03:38:24] Again, we're not in server component land yet.
[03:38:27] So like,
[03:38:29] No one would do this anyways because they'd be like, wait, this component's going to go to the client.  But let's pretend we were in server component land.
[03:38:36] Like,
[03:38:37] this
[03:38:39] This code
[03:38:40] has to get hoisted out
[03:38:42] You can't generate it while the component's running. It's an endpoint. It has to exist. So technically, this becomes
[03:38:51] becomes...
[03:38:53] this...
[03:38:55] we pull it out again, right?
[03:38:57] And the problem is now where's the secret coming from?  It's like not defined.  Where's the secret coming from?
[03:39:03] And,
[03:39:05] Which means we have to actually go here and go like my...
[03:39:09] server function
[03:39:11] Two.
[03:39:12] equals my server function
[03:39:15] bind, whatever, null,
[03:39:19] Secret.
[03:39:21] Like,
[03:39:21] That's the only way
[03:39:24] Now, in here or something, like...  I'm just going to pretend like it's this or something.  Like, now...
[03:39:31] we know that like,
[03:39:33] This secret or...  You...  Whatever.  You get my point.  You...
[03:39:39] Now we can get access to it.
[03:39:42] essentially, and we have a specific component interest.  But in order for you to call this from the client,
[03:39:48] This is being sent as basically an argument to this function implicitly.
[03:39:55] which means it needs to be in the client if you're going to call it on the server. So
[03:40:00] I don't like this, honestly.  Um...
[03:40:04] Thank you.
[03:40:05] So we don't do closure extraction.  If you want to do this, we have like a special bind like method and you can call it yourself.  But then I hope you can see that you're literally...
[03:40:14] telling like explicitly saying call this function with this argument and it should click on you  that it's in the client hopefully.
[03:40:22] Oh, yeah, sorry. Let me...
[03:40:25] Thank you.
[03:40:25] Yeah, I should have switched to this view.
[03:40:32] Thank you.
[03:40:35] Thank you.
[03:40:37] you
[03:40:40] you
[03:40:48] how's chat doing
[03:40:58] All right, so let's start. Thanks, Theo.
[03:41:04] .
[03:41:05] Yeah, I mean, Quick does it, and React does a special, like...
[03:41:09] What do you call it? Encoding. I just I just I didn't want to play this game. I mean, some people are saying like, hey, this is still not very obvious.
[03:41:16] I mean, I think the Taint API or something like that  is definitely required regardless.  I'm glad that's where we're getting to with these things.  Like, because now we're like understanding...
[03:41:25] what primitives and pieces we need.
[03:41:32] Thank you.
[03:41:36] Yeah, I'm pretty much done.
[03:41:40] Thank you.
[03:41:44] I argued about this
[03:41:46] a lot and he convinced me.  Not sure if I've shared that argument with you or not.  I mean, I saw some tweet on...
[03:41:51] uh on uh on twitter about putting the function inside like i had it before i just
[03:41:58] The biggest reason you want this bind thing is because then you don't have to deal with stupid form data.  God, form data is the worst.
[03:42:06] Right. Like
[03:42:07] And this can still work.
[03:42:10] with JavaScript turned off.
[03:42:12] Right.
[03:42:13] Um,
[03:42:14] But yeah, but the truth of the matter is manually doing the bind yourself
[03:42:19] also still works with JavaScript turned off and
[03:42:25] Um,
[03:42:26] you also can avoid ugly form data, right? Like,
[03:42:30] One of the examples in the solid start repo basically has all nicely typed server action arguments. The thing is, I'd avoid this whole thing and just use the action directly, you know what I mean? Like, not use the forms, you know? Maybe I'm not the most progressive enhanced person out there. But
[03:42:48] But I mean,
[03:42:49] For the people who do want to go this way, you know, I'm hoping it does enough.
[03:42:56] Thank you.
[03:42:59] Right.  Okay, Theo, let's bite because let's...  My question is, like, couldn't you just call the bind yourself?  Like...
[03:43:07] Check us out.
[03:43:08] Do do do do do do do. Source.
[03:43:10] Routes index.
[03:43:12] So here I got a bunch of my actions and whatever defined for my server functions, which I think I just put them over here.  I was just like lazy.  I just put a use server at the top, you know.
[03:43:24] These are all
[03:43:25] using Unstorage, they're just database functions. I pulled them in,
[03:43:29] I might put this in an API layer somewhere else, but this is a single component.  But what I did here was, where's my delete button?
[03:43:38] Well, first of all, let's look at the API for the delete button.
[03:43:44] Edit to do.
[03:43:46] Remove to do ID number. See, this is way nicer than form data garbage, right? You just go, I want to remove to ID number. The problem is obviously is how do you get this form action into this button here? Where is it? Is this?
[03:43:58] removed to do, right?
[03:44:01] And.
[03:44:03] If I try and stick this into my form action here, it's going to be like, no, no, no, no. This is not...
[03:44:08] form data. This is not
[03:44:10] Like this does not match. I can't just stick my action into this here because it has an argument on it. Because remove to do is an action with argument of ID number.
[03:44:20] But,
[03:44:21] I didn't do bind, I did width.  And now,
[03:44:25] It's basically a bind call.
[03:44:26] And now,
[03:44:27] I just.
[03:44:28] one-liner button form action root to do with to do ID class the story. And now I get to keep my TypeScript because it works like it works like partial application in TypeScript. So now, like if I was to take this out,
[03:44:42] And...
[03:44:44] Let's just...
[03:44:45] do it out here somewhere.
[03:44:47] I went,
[03:44:47] const,
[03:44:48] R equals this.  What you're going to see is...
[03:44:51] Um,
[03:44:52] This is an action that doesn't take any argument.
[03:44:55] Essentially, so like I'm just I'm just basically
[03:44:58] using partial application. I didn't use bind because it was interfering with some weird type stuff.
[03:45:04] like the native bind thing, I couldn't figure it out.  I probably could.  And also, I don't want people to think  that they can pass null to it,  'cause like this is not like, or this to it,  'cause we're not actually ever gonna bind this,  we control this.  But the idea was that you could just basically,  as long as you partial applied all the arguments  up to empty or form data,
[03:45:24] then you could just like basically in line.  And what's beautiful about this, I like too, is because
[03:45:29] Eh.
[03:45:29] Bye.
[03:45:30] This even works client side because technically this is a
[03:45:34] is a reactive wrapper and to do.id is a reactive access.  So every time that the ID changes,
[03:45:41] like if it could update in this case, it doesn't, it will actually like
[03:45:45] fine-grained
[03:45:46] update the action here. Anyway, I don't know if that makes sense.
[03:45:52] Thank you.
[03:45:55] Thank you.
[03:46:01] Thank you.
[03:46:09] Yeah, yeah, it feels similar to SolidRecords your state of control. Detail gets you more correct. Yeah. I'm, everybody knows I nitpick on this kind of stuff, right? Like, it's kind of the reason where, like, our server functions are just functions. I make you wrap it in action if you want to have action semantics. But the reason I do that is because this action doesn't come from SolidStart. It comes from the router. So, like,
[03:46:32] because action is a routing consideration.  So the actions work completely client side without server functions,  or they can work with server functions.
[03:46:40] Kind of like the remix trick, I suppose. But there are action semantics. They're not tied to the router. They're not like,
[03:46:45] Like, Remix is very...
[03:46:47] what, hate OS, like very restful, this setup essentially is like,
[03:46:53] still RPC-ish, except you can do it without actually making any RPCs. I know, weird, but essentially
[03:46:59] that and then I had some fun I got
[03:47:01] I figured out how to get forms working without transformation.  This is all runtime.
[03:47:07] Anyways, I have a whole stream on that.
[03:47:13] Thank you.
[03:47:18] Thank you.
[03:47:19] Thank you.
[03:47:22] - Okay.  I tested new versus start and I have a question about  variable in memory server side.  Reset is each load.  I know a nine percent of these kids are resistant like data.  Why does this happen? Okay.
[03:47:30] This is one downside and me and Nikhil are working on this right now.  The problem with the memory is that
[03:47:36] Okay.
[03:47:38] Unlike React,
[03:47:40] Our server functions aren't always
[03:47:42] RPC calls. If you call a server function on the server because they're not server actions, it's perfectly valid to just call them while you're getting stuff.
[03:47:49] Um,
[03:47:50] And they actually created a second copy of this
[03:47:54] branch. So the server...
[03:47:56] RPC endpoint is one copy,
[03:47:59] in memory, and then the one that gets included as your main rendering is the second copy. And I would like to do something about this. I talked to Nikhil about this, see if we could like merge the streams, so to speak. But generally speaking, you actually get two copies and you'll see it actually console log twice.
[03:48:15] for anything derived downstream from a used server.
[03:48:20] That means that, yeah, if you use unstorage or some kind of persistent storage, you're not going to have a problem. But it means that local variables thing. And I do consider this behavior a little bit buggy. I mean, on the other hand, you could argue that once you deploy this to a real environment, you can't expect, like, pretend they were deployed to different places. You can't expect...
[03:48:37] your API, like you could like any
[03:48:40] I...
[03:48:41] anything that you would consider, you know, like memory, like it would never work if you deployed to two workers or, you know, two edge functions or whatever. But on the other hand,
[03:48:51] It's kind of a pain in the ass for local dev. I like just putting an array in when I'm testing an idea.
[03:48:58] You know, so like I get it.
[03:49:01] So while this probably is not a big deal for production and you'd have real persistence, it is kind of like a stumbler.  I have talked to Nikhil to see if we can do something better here, though.
[03:49:16] Thank you.
[03:49:20] The thing with server functions here is we're not trying to do...  Actions are semantic by the router.  Server functions are literally anything you do in API.  I think I was building an app on stream last week, and I was just like...
[03:49:33] I went from like the simple, like here, I have a to-do list in on my page.
[03:49:39] Right. And, you know, like I just hard coded to do is equals array at the top of my page. And then I moved them to a separate file. And then I, you know, pretended it was on a server and I made an API route. But then at a certain point, I just was like, okay, let's get rid of that. And I deleted the API route. And then
[03:49:53] where I imported those variables onto the page,
[03:49:57] I just had put the used server at the top of the file, and suddenly they just
[03:50:00] worked like API routes without wiring it.  You have to obviously be aware that you are creating API routes, but the idea here is
[03:50:08] These are basically just...
[03:50:11] like API routes. If you want to fetch something on the server or run something on the server, you use server functions.
[03:50:16] Right.
[03:50:17] This is not...
[03:50:19] Like,
[03:50:20] It's been the hardest part about teaching this stuff.  It's because actions and caches and all that other advanced stuff are another layer.  Like, they're like, oh, I want to handle these...
[03:50:30] very specific behaviors to do with routing.
[03:50:33] Server function is like literally just remote type safe remote call.  And by type safe, I mean as type safe could be, but like, you know, across a network boundary, it's not actually doing type validation.  But as I said, what I like about this is I finally solved the problem that Theo was complaining to us about.  I don't know if I went on Theo's stream and about a year ago.
[03:50:54] And I took...
[03:50:55] what he said.
[03:50:56] To heart.
[03:50:57] Because he told me, he was like,
[03:51:00] I'm really confused by like this create server dollar sign versus when I don't use it, which one's the server function.  It's not clear that these arguments are on the client and these arguments aren't on the client.
[03:51:11] And like there was a bunch of confusion there.  And I realized that I didn't like all these overridden specialized printouts.  I just wanted like server dollars on like one server thing.
[03:51:20] So,
[03:51:21] That was one change. The other thing is he gave us half points on TypeScript.
[03:51:25] which sucked. He's like, okay, your actions are great. You know, those are type safe. But when I go into your component and I try and fetch something, you have to use like use route data return type of type of route data garbage, right?
[03:51:38] Thank you.
[03:51:40] And I was like, okay, well,
[03:51:44] Um,
[03:51:45] Well, what if we use a cache function kind of set up and this cache is a fine grained cache. It works on the server, you know, like a request cache, like the default next behavior. But it also is a store in the client that when the data invalidates, like it's not a long lived cache.
[03:52:00] It's actually just a preload cache.
[03:52:02] But it essentially, if you do a refresh on a page and you don't want to reload all the stuff, you can like put validation things on it.  But it's mostly for like a back cache and like it's a five second like navigation cache.  It does not last very long.  But on the positive side.
[03:52:18] is when you get the same to-do list back,  it automatically diffs it and goes,  oh, that one switched to done.  And it just changes the one thing fine grained with a store.
[03:52:27] But on the other hand, the way you use it is you might
[03:52:30] Throw...
[03:52:31] it into your load function, which I don't have in this one here, like for preloading, but you just use this new create async primitive and you literally just go get to dues.
[03:52:41] And because you just use the same function,
[03:52:43] See, what does get to do? Well, it has no arguments, but it's just typed.
[03:52:47] which means this one returns.
[03:52:49] What does it get to do's return?  A promise of to do array.  So what's this?  You guessed it, an accessor, like a signal of to do's array.  So like...
[03:52:57] The TypeScript issue is done, right?
[03:53:00] Again, actions, you can put them in forms, you can use action, you can do optimistic updates, you just pass the action to it. And now we know that we have a submission of this.
[03:53:10] data type, which is lovely because now
[03:53:13] You can type your errors that come back from your APIs
[03:53:16] everything is just like TypeScript happy,  which makes me happy funnily enough.  Because like, I remember like,
[03:53:25] I think I was showing this the other day.  When I went, we have a really simple auth example with a login.
[03:53:31] go in here and
[03:53:34] I mean, I'm doing throw. I know next doesn't, but this is actually the semantics. I didn't want to hide it.
[03:53:38] If you think about it,
[03:53:40] If you get the user,
[03:53:42] You can-- where's the good one?  Where's the login?  I'm trying to show is essentially--
[03:53:49] It's really weird because you throw the redirect, but you return the errors.
[03:53:53] And,
[03:53:54] The reason you do that is because now this log, this function is, it takes the form data. I didn't feel like making this one a with because all the fields are literally, it's a login form. It's using form data anyways. It's, these are like username, password and like a toggle for whether it's login or register.
[03:54:09] But the return type is promise of error.
[03:54:12] Because it's not a response because like redirects are things you throw.
[03:54:18] It's promise of error. So if I go into my page here,
[03:54:23] I know that
[03:54:25] If I use, this is for optimistic updates, but it can also show errors.  It's like using the submission.  I know that this can, the result can only ever be an error, which means that the type
[03:54:34] of the result here.
[03:54:35] is an error, so I get the message off of it.
[03:54:39] TypeScript works beautifully.
[03:54:43] with with this solution. Right.
[03:54:46] And even the trick I did to get this to work  so that it can tell that the action doesn't work.  Like, I can't just put any function here.  It's not going to, like...
[03:54:56] He's not going to accept this.
[03:54:58] you know, it's going to be like, hey, that's not right.  I can't even put any action there.  The action has to be
[03:55:03] compatible with form data or BMD.
[03:55:08] Yeah, this is a huge leap forward for TypeScript.
[03:55:13] Yeah.
[03:55:15] Thank you.
[03:55:18] Thank you.
[03:55:19] Thank you.
[03:55:20] Thank you.
[03:55:23] Thank you.
[03:55:26] Yeah, see, the thing for me that I wanted to do, which I don't show in these examples,
[03:55:32] You see the problem with the wrappers, right? Because you go into the
[03:55:36] You go into the...
[03:55:38] the where's my to do?
[03:55:40] my to-do app example, you end up importing stuff from the server function and then wrapping it  again, which is really a pain
[03:55:49] Right? Like, because...  Where's... Sorry, where is my...
[03:55:53] Is it not this one? I don't want to do the login. I wanted to do the to do MVC.
[03:55:57] um,
[03:55:58] you go in and you're kind of like, why am I doing these wrappers again? What I wanted to actually do is
[03:56:04] It's not in this example, but maybe my Hacker News does it, is move all of these into the API layer and then inline the use server calls instead of globally doing them.  So essentially, when you make your API...
[03:56:17] Where's the lube?
[03:56:20] It's more like this.
[03:56:22] Okay, ignore, pretend this fetch API is database.
[03:56:26] What I'm actually exploring is export get stories cache async logo inside use server inside use server inside use server and then
[03:56:36] Essentially, we don't
[03:56:38] we don't have to-- we don't actually have to name the intermediate function. I know that's kind  of silly, but like essentially I was picturing people just to make a data layer
[03:56:48] you know, in a shared location so they could actually reference it in multiple places.
[03:56:52] and essentially
[03:56:54] put the server function use server inside
[03:56:57] the
[03:56:59] the calls that that's what I was thinking.
[03:57:02] Yeah.
[03:57:03] Thank you.
[03:57:05] Thank you.
[03:57:10] Thank you.
[03:57:11] Anyway.
[03:57:14] I'm glad...
[03:57:17] I'm glad to hear that.
[03:57:20] You were right.  I didn't see it right away.  It takes someone else to think something.  I spent so much time with it.  Um...
[03:57:26] There's a lot of reasons for the current APIs.
[03:57:29] through a lot of thought, especially
[03:57:31] preparing for a potential server
[03:57:33] component feature, people could just not
[03:57:36] do the load and even a hybrid feature.  I've been thinking about a world where certain
[03:57:41] Route sections.
[03:57:43] are classic SSR.
[03:57:45] SPA and certain ones are like server function and like how the data loading
[03:57:49] story can tie in. Maybe I'm like overthinking it, mostly migration story, but I think all, I think,  I think the pieces line up. Anyway.
[03:58:01] But yeah, so...
[03:58:04] Nitro, this, cool stuff.  Solid start, beta 2.  I'm hoping we're on a fast track to 1.0  because, yes, routing...
[03:58:12] server component type stuff, that's going to keep on coming.
[03:58:15] But
[03:58:16] This is like when we add...
[03:58:20] that stuff, it's going to be like, oh, what do we do? We have to update solid.  Do we update the router? It's not solid start.
[03:58:25] doesn't care.
[03:58:26] that much. I think, to be fair, for server components are probably big enough that I am going to have to actually look at the server functions. They might have to handle a few
[03:58:33] specific forward a few specific headers.
[03:58:36] But that's essentially it.  And that's why I've been able to reduce the code.  I remember...
[03:58:41] It was really...
[03:58:42] you know, like it's, it's, Vinci takes care of a lot of heavy lifting.  That's why I just like, it's a few pieces of the config and then,
[03:58:50] You know, it leaves me free to build stuff like the router stuff.  I actually have fun building, like working through these kind of structural patterns.  You know, that's what I like doing.
[03:59:02] Thank you.
[03:59:05] use server inside cache would mean that you cannot reuse the pure fetcher anymore on the server  anymore but like
[03:59:11] why wouldn't you just cash it anyway?
[03:59:15] Like the cache only exists the length of the request.  So I'm assuming that if you call the same function  with the same arguments during the lifetime of the single request,  you'd probably want the same answer.
[03:59:26] Maybe that's not true, but I think it's actually like a fairly reasonable assumption.
[03:59:32] Um...
[03:59:34] Yeah.
[03:59:36] Oh, and obviously it goes without mentioning all this stuff automatically works with hydration. You don't have to do anything special, right? It's, it's because it's using solids primitives underneath. So serialization, streaming, suspense, everything just automatically works. Um,
[03:59:49] which is very nice for, you know,  using server functions with TanStack, you know, and all that.  I have a Hacker News example I showed the other day  with using TanStack query instead of these primitives.  It's whatever you want.
[04:00:00] .
[04:00:02] uh okay
[04:00:04] That was my...
[04:00:06] My short I'm getting shorter at explaining my solid start.
[04:00:09] Beta 2 is pretty sweet.
[04:00:10] There is no beta 3. No beta 3. No, no, no. Okay, you're just trolling me.
[04:00:16] Thank you.
[04:00:18] All right.
[04:00:20] But yeah, I'm excited for this. I think this is like,
[04:00:24] I-I-
[04:00:26] I put it out there, I could see the change coming.
[04:00:29] We showed off cool things, but I didn't feel as confident moving forward.  You know, like it was always a little irksome, you know, I was like, ugh.
[04:00:38] Things are going to change. What's going to happen? Where do we sit?
[04:00:42] This is a much more stable, much more...
[04:00:45] Obviously, there's bugs because we just released it,  but this is a much more...
[04:00:50] sane approach to breaking up the responsibility.
[04:00:54] Okay.  Okay.  I did not plan to stream all day.  I've been going for four hours already.  I think I'm going to call it.  I'm glad I got to sneak into Theo's spot here and get a few extra viewers, but...
[04:01:09] Thank you everyone for joining today again.
[04:01:12] uh you guys are what makes the stream awesome where's that bookmark again um
[04:01:19] Was it right here? I wanted to
[04:01:22] I'm never going to find anything, am I?
[04:01:26] This one.
[04:01:28] You guys are awesome.
[04:01:30] So, um...
[04:01:33] Thank you.
[04:01:34] Thank you.
[04:01:35] And you guys have a good Christmas.  It's my last dream for real.  I know last time I said that was my last dream, you know, on Friday.  But no, I snuck one more in on you all.  So...
[04:01:45] I'll see you guys all in the new year.
[04:01:50] Catch you later.