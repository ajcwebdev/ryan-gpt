---
title: "N-QwFFqI8aQ"
slug: "N-QwFFqI8aQ"
duration: "5:29:31"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/N-QwFFqI8aQ.m4a"
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
[00:00:01] All right. Hello, everyone, and welcome to my stream today.
[00:00:06] I
[00:00:08] Gonna take a moment here to get started, but gist of it is
[00:00:12] Last time I had a stream,
[00:00:14] um
[00:00:16] -
[00:00:18] I was intending originally to do this topic...
[00:00:20] But then...
[00:00:23] I realized I probably should do my yearly review of JavaScript frameworks and then...
[00:00:27] the topic kind of bled into it, maybe a little bit too hard.  And then I was trying to rush to get through all the frameworks.  I didn't really spend as much time as I would have liked.
[00:00:36] on this topic of HTML and HTML partials.
[00:00:43] Hey Dave, thanks for the sub. Yeah, 11 months.
[00:00:47] Almost a year. That's awesome. I'm happy to see that.
[00:00:52] I appreciate your support.
[00:00:55] .
[00:00:56] Um...
[00:00:57] Yeah, I usually don't push really hard on the follows and the subs and the likes and all that kind of stuff. But it actually does really help the visibility of the video, especially when you come in and like it.
[00:01:08] So--
[00:01:09] I people remind me like every video like in the comments, remind people to like it like likes are free.
[00:01:17] Um,
[00:01:18] Yeah.
[00:01:19] you know,
[00:01:19] do it it helps me out helps more people see the content if you think this is good content um like  it
[00:01:27] All right, how's everyone doing?
[00:01:29] Thank you.
[00:01:32] Hey. Yeah, let's get this starting to roll out here. We've got some people coming in from
[00:01:41] YouTube and...
[00:01:43] Twitch.
[00:01:47] Yeah, I mean, to be fair,
[00:01:51] Thank you.
[00:01:52] I'm not, I will spend some more time talking about what I was working on with my updated kind of islands routing stuff that I've been playing around with.  But I mean, this is all part of it, right?  You guys will find that the stream reflects whatever I'm currently working on, you know, maybe slightly removed from it, but usually barely.  So even though there's like stuff happening in the JS world and I kind of try and cover that and new releases of frameworks and stuff, there's this overlying tone, you know.
[00:02:22] the thing that lasts the whole season.  And...
[00:02:24] For me, it's been
[00:02:27] The last couple of years has really been about
[00:02:30] wrapping my head around what people see in meta frameworks and looking at these kind of newer patterns here, because it's something that I didn't understand. I
[00:02:40] basically never wanted to touch
[00:02:43] Even like CRA, I was like, why wouldn't I just make my own webpack config? Seems terrible. And then like everyone's like, you know, we got to use stuff like Next.js. And I'm like, well, we don't have Next.js in solid.
[00:02:53] Is there anything here that's valuable?
[00:02:55] And my initial take was like, no.
[00:02:57] You know, in fact, CSR
[00:03:01] solid is just running circles around their SSR stuff.
[00:03:04] but
[00:03:05] You know...
[00:03:06] You look a little deeper.
[00:03:08] You see some of the developer experience involvement, and you can also see
[00:03:13] actual things that impact the end user and customer when SSR is involved. And my time with the Marco team really helped illuminate that for me a lot in working at eBay.
[00:03:24] But yeah, I mean, it's,
[00:03:25] It's...
[00:03:27] there's like a difference between having, say, server capability
[00:03:31] and like the whole meta framework or like how much this needs to be bundled
[00:03:36] for you question. But in general,
[00:03:40] I've used the stream as a chance to learn and as a chance to kind of
[00:03:44] figure out, you know, explore these ideas, you know, with an audience and
[00:03:49] So other people learn along with me, but also so I can get really early feedback. Sometimes I have really dumb ideas and I throw them out here and people are just like, Ryan, that doesn't work, you know, like.
[00:04:00] I was like...
[00:04:01] trying to serialize functions or something at one point and hash them up to get a unique id you  know it's like not going to work ryan
[00:04:09] But I think that...
[00:04:13] ultimately the benefit for me, even though it's a big time
[00:04:18] user is there, right? Because it helps build a community and it helps
[00:04:24] It helps getting us on a common language, right?
[00:04:27] I think
[00:04:28] when you kind of confine the right phrasing in the right way to learn about these things, you know, and this feeds back into articles and vice versa.
[00:04:36] You start
[00:04:38] being able to interpret new things under a similar lens or focus and understand the value of them, because you have the categorization, you have the framework, so to speak, the mental framework, not the
[00:04:50] JavaScript framework to kind of work through these problems.
[00:04:57] All right. So yeah, that's me just killing some time and giving a speech. Nice. 70 people already on YouTube get in this role and
[00:05:03] Only 15 on Twitch, right? We've got to get there again.
[00:05:06] Last week we actually had really good numbers. I guess a lot of people interested in JS frameworks.
[00:05:10] We had we had something like 70 people on Twitch and like 130.
[00:05:15] on YouTube, so...
[00:05:17] Yeah.
[00:05:19] I don't expect every stream to be like that.
[00:05:23] Things have been a little bit slower recently, but I'm ready to kick it back up again.
[00:05:27] Okay, how are we doing chat?
[00:05:31] .
[00:05:33] yeah yeah i mean it just takes so much time and yeah i mean
[00:05:38] Is I wonder if I like we talked about using open collective funds to pay for some of this, but it's like or do I put that into R&D?
[00:05:45] I mean, it's hard to say. I feel like there's value here.
[00:05:48] But I also feel like
[00:05:51] the like money
[00:05:53] You know, I'm already so thankful for work people like Jesse do to actually go through and timestamp everything so people can find it.  But they like taking it to that next level, splitting out the videos would be...
[00:06:03] a whole other thing and actually kind of tricky because
[00:06:05] I'm not.
[00:06:08] It's funny because I attempt it sometimes with this week in JavaScript, but I'm not like really
[00:06:12] segment oriented, you know, like if you ever watched a Theostream for the most part,
[00:06:16] He's in there chatting with chat, just going through the topics here and there.  And then he's like, okay, guys, it's go time.  And then he whips out something, 20 minutes.  Maybe the final video will only be eight.  But it's, you know, there's a...
[00:06:29] There's like a topic and it goes,
[00:06:31] we tend to kind of just roll through it all.  Like to actually find beginnings and ends is a heroic effort in itself.  You know, again, thank you, Jesse.  But like,
[00:06:40] Thank you.
[00:06:40] Generally, this just keeps on flowing wherever it's going to go. It's very organic.
[00:06:45] But we keep with the content, you know, we roll off the chat and we keep on digging and trying to find the answer to our questions.
[00:06:52] I don't know how much that will lend to shorter streams.  It's these good little clips.  You know, I can definitely see there being like good like
[00:06:58] minute, minute and a half, but it's all raw. You know, I don't re say my sentence when I realized that I rephrased it.
[00:07:05] It's actually kind of funny sometimes we get clips on Twitter like I think Rich Harris did a clip the other day where he where I was calling Svelte 5 a game changer and he was like,
[00:07:16] The main sentence was good and like the way I said it and the stuff was good.  But then when you listen to my explanation, it's like Ryan speak.  It's Yoda. You know, I'm like my my sentences are formed backwards.  And it's like, man, it's just like not quite what it's supposed to be. The
[00:07:31] the intent
[00:07:32] And the...
[00:07:34] the passion are there, but it's like it's not smooth.  It doesn't make a good clip.  I probably make the worst clips.
[00:07:41] Anyways, sorry. Hello.
[00:07:44] AJ or Anthony sorry. AJC also throws me off it's like it's fine.
[00:07:50] Uh...
[00:07:53] Yeah, Cobalt is sweet.
[00:07:54] I'm really happy to see like that ecosystem pieces, you know, like can layer on. I never understood before how much CSS and component libraries are this like layering thing, you know, like where people, okay, you got a headless solution and then you like have a
[00:08:10] you know, snippet libraries that aren't actually component libraries, but just put things together and all kind of just comes together like
[00:08:15] Somebody was trying to explain what, uh, was it Shad CDN was or whatever to me a while ago. And I'm just like, I,
[00:08:21] So
[00:08:22] like bootstrap UI. Like I don't even
[00:08:25] I couldn't even...
[00:08:26] wrap my head around these layers, but I'm glad to see that people are building that and finding the best patterns.  I have to admit, back when I was doing a lot of like product work,
[00:08:36] I would just make the mechanics of like, okay, we need infinite scroll. Okay, let's figure out how to do this. We need drag and drop with a justified grid, you know, like I'd figure out the math and I'd figure out how to optimally do the updates. Someone else would style it or work the CSS into it. Um, and we had our own design system. So I never had to build, like we, we kind of built our own components. Um,
[00:08:58] But it was very low level like button designs and stuff like it.
[00:09:04] This wasn't something that I was really concerned with.
[00:09:10] Marco mentioned new record.
[00:09:16] Well, I'm talking in past tense, like what I was going for.
[00:09:22] Thank you.
[00:09:24] Yeah, yeah, yeah. Server functions work because the compiler, a compiler can produce a
[00:09:31] Uh...
[00:09:32] a stable hash because it can use like the code location.
[00:09:38] It's like aware of that.
[00:09:40] But bundlers will...
[00:09:42] Mm.
[00:09:43] morph the code so the difference between client and server won't be stable. Anyways, I know that's referring to something like 10 minutes ago. Anyways, my mind is a JavaScript framework. See, I'm catching up way too late here.
[00:09:56] All right.
[00:09:58] Yeah, and I sound like it's late here, but it's actually only lunchtime.
[00:10:06] *laughs* Alright. Yoda Ryan, yeah. Alright.
[00:10:12] Oh. Oh no.
[00:10:15] Um...
[00:10:19] Yeah, I guess that's the difference. Did you ever use Bower?
[00:10:24] Sorry, I'm just messing with you guys.
[00:10:26] Thank you.
[00:10:29] Thank you.
[00:10:32] Signals in Wasm already exist in a few different forms. We'll talk a little bit more this week in JavaScript when we get there. Which is going to be more than this week in JavaScript because I didn't really do this week last week, so we need to do some catch up.
[00:10:54] Thank you.
[00:10:55] Is there new Imba stuff?  Like, you're kind of making me want to check.  Because, like, I...
[00:11:00] I'm...
[00:11:01] Thank you.
[00:11:02] Imba 2 was the last thing I remember. Imba 2.
[00:11:07] Release.
[00:11:09] Inba is really interesting from like a language perspective.
[00:11:13] Um...
[00:11:16] People don't know Imba.  They, they...
[00:11:21] use a different diffing that is pushes things right to the end and their big claim to fame that they were much faster than
[00:11:29] virtual DOM libraries.
[00:11:30] as it turned out on the JS Framer benchmark.
[00:11:33] They weren't, but they they they showed this thing where they're like way faster.  And then it was going to point out that the benchmark was kind of
[00:11:41] contrived um
[00:11:43] Not enough to stop Rich Harris from using that benchmark to show svelte performance.
[00:11:48] even though anyway not in but
[00:11:51] The cool thing about Imba is it's like a copy script
[00:11:56] It's kind of got Marco in that it has some really interesting syntax, so to speak, right?
[00:12:01] It's like a white space matters type, like indent based language with
[00:12:10] It's pretty short in a Marco would probably have fun going back and forth to see who can like express ideas in the least amount of text.
[00:12:17] One thing that I never got from Mimba necessarily was...
[00:12:20] Um...
[00:12:22] Like it was more ambitious, I think.  Like it wanted the, because it's a language,  it's like, we're going to control that language all over here.  Here's like an express server in IMBA.  Like their idea was not just to do your UI in it.  Like you can literally just replace all your JS with it.  So just live IMBA.
[00:12:37] And in a sense, where we've been heading recently, with server components and stuff, where you're just like, oh yeah, here's a JSX thing in the random response, it kind of got that feel. Except we're talking InBug came out in 2015 originally. So anyways.
[00:12:51] Yes, I'm not doing an Imba episode, but this is probably the most I've talked about Imba in like
[00:12:56] five years.
[00:12:58] *sad*
[00:13:01] Thank you.
[00:13:03] Thank you.
[00:13:04] Yeah, I mean, someone should do it. I have no clue about the solid ecosystem. I hear about good libraries and I'm impressed, but I'm not the person to probably do it. I spend a lot of time working on mechanics. There's people like Dave. If Dave streamed, then he could kind of bring this stuff together. We have community packages. We have a whole bunch of stuff on that. It's just the truth of the matter is.
[00:13:24] I only hear about the ecosystem libraries when they don't work, right?  Like when there's a bug and then it's like, oh, that's a solid bug, you know, and I work through it backwards in there.
[00:13:34] Oh, man.
[00:13:36] Those are some old words.
[00:13:39] Uh...
[00:13:45] Thank you.
[00:13:49] remember when i don't even know the context of this but i remember that
[00:13:53] Honestly,
[00:13:55] memories anyways
[00:14:01] Wait, was this a trick thing? Does Remix even do SSG? You guys are messing with me, aren't you?
[00:14:08] okay
[00:14:12] Scrimba, yeah, Scrimba, that's like the learning platform that's built all completely on EMBA.
[00:14:18] Yeah.
[00:14:20] Sorry, I didn't cover Imba in the...
[00:14:23] in my article
[00:14:25] best of JS.
[00:14:28] 'cause
[00:14:29] I think it's a UI framework by categorization.  We did hype ordering right of the last 12 months, right, which kind of
[00:14:37] Yeah.
[00:14:41] Yeah, okay.  Imba gets less than one star a day,  so it didn't hit my thing.  Another interesting framework, you know,  if we're gonna talk about frameworks for a minute,  so that I can, like, honestly,  today I'm here just to talk.
[00:14:50] the crap, you know, I will talk the topic, but I'm I've got, you know, I've got some time.
[00:14:55] Neo MJS.
[00:14:58] I saw a bunch of tweets on Twitter going back and forth.  I think it was Matthew Phillips and Benton and a few other people talking about web workers and all this stuff.  And I was like, it's not like people haven't tried that.  If you have an idea for a JavaScript framework, someone's already made it.
[00:15:12] Like 100%.
[00:15:14] They might be missing a key piece and then you can like take it all away if you really want to be a framework author. But generally speaking, someone has already tried this idea.
[00:15:22] I'm not sure.
[00:15:23] And sometimes
[00:15:25] Multiple people timed it. The worker thing was actually very heavily worked on when React was looking at its concurrent model back in 2016 time period. Dominic from Svelte, Inferno, was kind of relating some of those performance things to me. Generally, you don't use web workers if you care about performance. So like...
[00:15:43] It's interesting because different architectural models offline first, like there's, there's,  there's things that can be benefit from them, but because it doesn't get the raw wins,  it's never going to win a benchmark.  People don't.
[00:15:55] notice it, it's kind of tricky.  Like there's people, when they talk about performance,  like the things they can observe,
[00:16:02] As I said, that works very well for solid because like nothing is faster than updating a text node.  You know what I mean?  Like, but it's like doesn't tell the full story.
[00:16:10] You can also go backwards on people as, you know, concurrent mode.
[00:16:13] not really a performance improvement.  So people don't really, like not in the basic sense,  people can't really observe it.  If you put React and make the root concurrent,  well guess what, you just slow down your app.
[00:16:23] So,
[00:16:24] Yeah, I mean, NEO is really interesting in that they like to show how they can distribute work and they do really cool demos like
[00:16:32] like
[00:16:32] crazy 3D demos.
[00:16:36] I don't, no one else has bothered to make these demos.  Part of me wonders if it would be possible  to remake these demos fine grained  and actually have pretty good performance in them.
[00:16:45] Because...
[00:16:46] their idea is still kind of VDOM-ish, right?  The idea is if you can diff off thread and then only send the relevant updates  to the main thread, you know, you can basically offload the work.
[00:16:56] But there is a serialization cost.  Anyway, sorry.
[00:17:00] We weren't here to talk about different JavaScript frameworks. That was last week.
[00:17:03] I just keep on getting reminded of frameworks I missed on this.  Another one that someone mentioned that I missed was Rackus, React Meta Framework.  And
[00:17:15] Rack is actually I just drop a message with fatigue today. So like, uh, like,
[00:17:22] They did a bunch of stuff that I paid attention to back in 2022 because it's funny, us and them were actually developing a lot of similar patterns, like basically stuff like server functions before React or had them or others had them.  React has had their own kind of version of server functions.  And...
[00:17:40] you know, kind of on that same wavelength. But I hadn't actually seen very much
[00:17:45] from Rackus in almost a year, except until today when they look like they're bringing  a async local storage, which will make their APIs a lot slimmer and nicer.
[00:17:55] anyway
[00:18:01] Is there a remix headline? Is there news? I'll bookmark it and we can talk about it later. Send me a link somewhere.
[00:18:07] I just can't copy out of YouTube.  And I think it's a good thing.  I think it's a good thing.
[00:18:15] But I...
[00:18:18] Thank you.
[00:18:20] Thank you.
[00:18:22] Thank you.
[00:18:24] Remix headline, no loaders, but now with different model, eventually with RSC, we'll get them back.
[00:18:29] Yeah, I don't.
[00:18:30] I need to know more about that.
[00:18:33] Angular, yeah, I mean,
[00:18:35] Angular is kind of interesting that way in that from a support standpoint of a lot of ideas, they're sometimes like really ahead of the curve.
[00:18:42] But then it's like the stuff that no one cares about, like traditionally speaking.  So it's like.
[00:18:47] they moved into that space before people were ready for it,  which is good because it means that they can support people
[00:18:54] people who have, you know, these different use cases.  It's tricky though, because it's like,
[00:18:58] Everyone seems to be rather than like trying to solve some problems and like looking at the different ways they can solve it.  People tend to be like, what's my silver bullet? They want to find the thing that solves everything.  Everyone's looking for that hammer, right?
[00:19:10] Um,
[00:19:12] It's...
[00:19:14] from an architectural standpoint.
[00:19:16] Which is interesting, right? Because you like that doesn't necessarily mean the thing that supports the most things.  It means the thing that takes as many possible ideas and just wraps them into one.
[00:19:27] Anyway.
[00:19:30] I miss good old spas.
[00:19:33] It was kind of easier back then. The truth of matter is, like, at a certain point, you realize, like, in horror that...
[00:19:39] You're responsible.
[00:19:41] We're like...
[00:19:42] stuff that just isn't good.
[00:19:44] Like...
[00:19:44] Single page apps are such a leap forward,
[00:19:47] But it's also like
[00:19:49] We kind of did some bad stuff.
[00:19:55] Funnily enough, we had one.
[00:19:58] Yeah, but I mean, it works both ways, right?
[00:20:04] If you can't make a benchmark for it,
[00:20:09] Yeah, I mean...
[00:20:11] It's kind of interesting.  It might, it will be easy, it'd be interesting to see if, like, it's visibly noticeable in some kind of scenario, right, that isn't, again, contrived because, you know,
[00:20:25] Whenever someone rewrites something, they tend to rewrite it better.
[00:20:29] Thank you.
[00:20:29] It's always tricky. If you can't, on one hand I say don't trust the benchmarks,  but if you can't make a benchmark that shows its benefit,
[00:20:37] then
[00:20:38] it's also difficult to trust that it's actually improving performance. You need to find a metric somewhere.
[00:20:48] Meteor.js, yeah.
[00:20:52] I mean, should I get in on this?  I missed Knockout.js.
[00:20:56] In some ways, it was just so easy.  You just kind of go like, oh, connect the dots.  I remember it was like every app I made felt like making my own Sudoku or Sudoku or whatever game I...
[00:21:07] Essentially, I just went in and I was just like,
[00:21:10] Here is the rules. Click, click, click. Put it all together. Everything updates automatically. The end.
[00:21:17] That wasn't the end, unfortunately.
[00:21:19] If we have time, we might even talk about that.  I wrote an article today that I released all about drive state.  Knockout JS is...
[00:21:25] is a good reason why
[00:21:28] we had to solve solutions like DriveState.
[00:21:33] Spawn mode doesn't have loaders?
[00:21:36] Don't they use client loaders?
[00:21:40] Oh.
[00:21:42] You know what? We will look at spa mode.
[00:21:45] later if that's the case. You know, let me just grab this link before I lose it.
[00:21:55] Thank you.
[00:21:56] Because I'm interested in what they do here. Obviously Solid and SvelteKit both have SPA modes as far as I'm aware.
[00:22:03] So we'll get back to here.
[00:22:07] Puck that away for later.
[00:22:13] Thank you.
[00:22:14] Thank you.
[00:22:15] Thank you.
[00:22:18] Thank you.
[00:22:20] Yeah, I saw Dan tweet.
[00:22:26] Thank you.
[00:22:28] Thank you.
[00:22:32] Thank you.
[00:22:33] Yeah, yeah, exactly. This makes a lot of sense. And it's the exact same reason why SolidStart is designed to handle SPA mode as well. There's just a lot of users out there. And the start case was really important because we're also vetting it for TanStack, right? Assuming that we can get a TanStack framework built on top of the same basis as SolidStart, having a good story for this is...
[00:22:56] important because then yeah there's a difference between
[00:23:00] taking your CRA type app or VEAT
[00:23:03] client app and just moving it into one of these meta frameworks
[00:23:06] and just having it work initially and then kind of
[00:23:09] you know, working your way towards it, you know, getting SSR or doing what you want to do with it versus like,
[00:23:15] trying to migrate it in SSR, but then reflecting everything back to client.  Like to be fair, when you hit the switch, it's always like that, but
[00:23:22] they're like getting them
[00:23:25] like off CRA is the first step.
[00:23:28] So reduce that friction.
[00:23:30] Next doesn't have that mode, so this is a very interesting avenue for them. But we talked about that before.
[00:23:36] Yeah, this article, we will talk about it probably later.
[00:23:41] Yeah.
[00:23:42] Yeah, I thought it would have client loader. I don't know. This is where things start scratching your head because...
[00:23:49] the model starts getting really hard.  And I think this is this is almost the right topic or place to actually start a conversation today.  Not because I want to talk about Remix in terms of like
[00:24:00] spa mode, but because...
[00:24:02] We have loader and client loader.  There's this friction between...
[00:24:07] data loading paradigms often like
[00:24:10] Like,
[00:24:12] Why do we load stuff in the client? Why do we load stuff on the server? Why can't we load stuff in a single place? Like we know,
[00:24:23] that on initial SSR,
[00:24:25] Generally, loading everything on the server is a benefit.
[00:24:29] It has to be. You're closer to the machine.
[00:24:32] Ah, sorry.
[00:24:35] uh,
[00:24:37] I've got the stupid
[00:24:39] Let me get my windows back.
[00:24:41] Um,
[00:24:42] I haven't updated this Mac for a little while,  so it's like bugging me.  But what I was getting at is like,
[00:24:51] God, I lost my train of thought. I hate that.
[00:24:54] Thank you.
[00:24:55] When...
[00:24:58] Geez, where was I going with that?
[00:25:03] I was trying to say something along the lines, though,  that when you have the client and these separate...
[00:25:08] server pieces
[00:25:09] the difference doesn't seem to make a huge sense when you're going to SSR it in the first place.  Jared, I was going to streaming, right? And I was gonna say like streaming lets you start the request  and finish it later. Obviously, there's downsides of streaming as well. But if you know what things  are streamed and maybe don't stream everything, then like you're okay.
[00:25:25] You know, like that's like,
[00:25:29] That all works fine.
[00:25:32] You know, I'm kind of
[00:25:33] This is kind of the source of a lot of my tension here because
[00:25:38] When we break things apart, we're almost forced to have two different fetching models.
[00:25:43] And if we try and get the same model together, somebody's paying the price.  And I want to talk about that.
[00:25:48] Really.
[00:25:53] Did someone say React is a library or something?
[00:25:58] Oh, yeah, we're talking about that. Yeah, the incremental stuff.
[00:26:01] Thank you.
[00:26:02] I don't know if this should be the goal, actually, to be fairer.
[00:26:06] Doing that incrementally is actually not that hard.
[00:26:09] because
[00:26:11] You put the whole...
[00:26:13] I mean, first you get the spa over, then you put the whole spa in an island and then you start
[00:26:18] breaking it out. It's a little bit because then you have two routers kind of
[00:26:22] I don't know. Anyway, sorry. I'm...
[00:26:24] It's way too easy to get shot all over here.
[00:26:29] Yeah, and yeah, that's the other thing too, right?
[00:26:33] Um,
[00:26:36] there are applications that just don't need a server kind of model like app models you know  where they're don't get me wrong server components don't need a server we can talk  about that today as well um but sometimes like uh
[00:26:49] SSR mode is kind of nice there, right?
[00:26:52] things like Tori.
[00:26:59] Yeah, you're right, I saw this tweet. I should...
[00:27:05] Let me just grab it too, we can talk about this later.
[00:27:10] I mean, they're trying to do that with React.  That's why they're creating these APIs.  The problem is React Next itself isn't the place that wants to disappear.  Next Next is a product.
[00:27:20] Anyways, let's keep on going.
[00:27:24] Oh, I didn't tell everyone I'm streaming yet, did I?  Jeez, I'm so slow here.
[00:27:28] Let's quote, we did.
[00:27:29] Maybe more people will join.
[00:27:32] Live now.
[00:27:34] Thank you.
[00:27:35] All right.
[00:27:37] TV slash Ryan solid. This is why no one's on Twitch.
[00:27:46] Thank you.
[00:27:48] oh are we going to talk about these equations well we should talk about  these equations too at some point too because i think
[00:27:54] I think this is this is one of those funny things.  I actually was playing on it in my article cover for my latest article.
[00:28:01] because
[00:28:03] Move this over here.
[00:28:07] Because let's see here, let's go. Not so HTML, where's my profile?
[00:28:13] Um...
[00:28:14] No, is it?
[00:28:16] Because people have been showing a lot of this stuff and
[00:28:19] Sure.
[00:28:22] This cover is actually a little bit of play on the fact that like...
[00:28:28] I
[00:28:29] I'm talking about derived state, but in React,
[00:28:31] deriving like most things in react like most of the stuff you touch and react is derived state in a sense anyway.
[00:28:41] So anyway, why do I want to talk about that in the context of this conversation?
[00:28:46] Thank you.
[00:28:47] Thank you.
[00:28:48] *sniff*
[00:28:49] *crying*
[00:28:53] Thank you.
[00:28:55] Why do I want to talk about it? Because I think, let me see if, can we find it overreacted? I love Dan Abramoff articles.
[00:29:05] Thank you.
[00:29:06] He showed this little equation here, UI equals a function of data.
[00:29:10] date and
[00:29:11] This is...
[00:29:13] This is nice, right?
[00:29:15] Let's just draw it here so we can like...
[00:29:18] token
[00:29:19] soak in this beautiful equation.
[00:29:24] Because my understanding of this equation...
[00:29:27] is that
[00:29:30] I'm going to put a function so you can see that.
[00:29:33] is that, like, what he's saying is, like,
[00:29:36] Yeah.
[00:29:36] You take your data, you feed it into something,
[00:29:39] And then the return thing of that you feed state into, and that's ultimately your UI.
[00:29:46] And this is a good story.
[00:29:48] when you're talking about
[00:29:50] getting to UI, like going the one direction, right?
[00:29:56] which is a big thing about
[00:29:58] a lot of modern tools, frameworks,
[00:30:00] It's about this idea of like, can you take
[00:30:03] data.
[00:30:06] And can't then or state or whatever.  And then.
[00:30:10] get a UI. We make this separation
[00:30:13] so that
[00:30:15] We...
[00:30:18] have a simpler mental model to work with,  that it's declarative in the sense that
[00:30:22] We know that
[00:30:25] UI from a rendering perspective is a transformation, right?  You have some sort of data that you need to display.
[00:30:32] some kind of state that gets updated by the end user. But ultimately, instead of having stuff
[00:30:37] come in from all sides, right?  Like essentially just be like,
[00:30:41] Instead of, you know,
[00:30:42] the drawing looking something like
[00:30:45] UI and then being like,
[00:30:50] a whole bunch of arrows. Let's change the back head of this.
[00:30:55] a whole bunch of arrows, you know, being like,
[00:30:59] all being like spearing it, you know, instead of this being your model,
[00:31:04] You know, because...
[00:31:07] I think there's like an old Jing Chen
[00:31:10] talk that
[00:31:11] that
[00:31:12] does this thing but like instead of having basically a bunch of arrows in
[00:31:18] And then like,
[00:31:20] bunch of arrows out to you know, because obviously,
[00:31:24] Mm-hmm.
[00:31:25] This is from data sources, and let's switch our arrows now to red arrows for going out.  And then we're like...
[00:31:33] Someone.
[00:31:34] presses a button. Someone
[00:31:37] you know,
[00:31:39] Thank you.
[00:31:40] Yeah.
[00:31:43] This is kind of chaotic.
[00:31:45] timer goes off, you know, instead of a model like this,
[00:31:50] You know, and I'm just talking, this is what data,  this is just talking about state at this point,  but I mean, you can kind of apply it.  Instead of having a model like this, where it's just like,
[00:31:58] "What's going on here?"
[00:32:01] you know, the kind of React,
[00:32:03] mentality that you should be thinking about.
[00:32:05] Starting in from UI.
[00:32:07] is that
[00:32:12] If we...
[00:32:16] Thank you.
[00:32:17] Thank you.
[00:32:19] align these arrows
[00:32:28] I can put them all together.
[00:32:32] Making them cut into like one big bat arrow like this.
[00:32:38] Let go.
[00:32:40] You let go.
[00:32:42] Um,
[00:32:44] then like
[00:32:45] it's a lot easier to reason about like what's going on if we can go
[00:32:52] You know?
[00:32:59] You get my point. Right? So you can, you know, handle all this stuff coming in. Something out here
[00:33:07] is making sure that this flows into this and now
[00:33:11] this chaos turns into something organized. That's kind of like the whole premise between
[00:33:16] this. So like,
[00:33:17] Having...
[00:33:18] declarative
[00:33:20] unified stuff
[00:33:22] is
[00:33:23] Good. It's why all UI frameworks are designed this way.
[00:33:31] Yeah, but the funny thing is, I will accept that as a starting point of our conversation, but I won't accept that as the ending point of our conversation.
[00:33:46] - Thank you.
[00:33:46] Because
[00:33:49] I'm not sure.
[00:33:52] The state can live in more than one place, right?
[00:33:57] We didn't have...
[00:33:59] We don't have this problem in single page apps, and this is why people talk about complexity considerations, in that
[00:34:07] The client is stateful, right?
[00:34:10] So what I mean by that is like,
[00:34:14] We
[00:34:15] As you change stuff in the UI in a single page app,
[00:34:19] you know,
[00:34:21] Thank you.
[00:34:21] you have all the state, you're holding all the pieces,
[00:34:25] If you're not, you go defer, grab some data from the server, process it into state, but then you're holding all the pieces. You modify...
[00:34:33] that state, someone does an event, you have it all, you update that state, it shows.
[00:34:38] someone click something,
[00:34:40] You figure out what you need to do.
[00:34:42] update that state and it goes and it's this like tight loop um
[00:34:48] But there's also...
[00:34:50] Um
[00:34:52] you know, stateful backends.
[00:34:54] Right.
[00:34:55] So,
[00:34:56] You could use... The tricky part is this is like a kind of slippery slope, right? Because like...
[00:35:02] It's not slippery slope, that's not the right term, but it's a range.  Because a classic example of data would be data from your database.  It's fairly persistent, doesn't update as often.
[00:35:13] you know,
[00:35:15] Yeah.
[00:35:16] But a difference in state that we often talk about, especially on UI state, is let's say you use that data.  So you go fetch.
[00:35:24] 100 rows with
[00:35:27] 12 items.
[00:35:29] of data in each.
[00:35:30] And then in the client, you're like,
[00:35:33] I want to swap the order of a couple of those columns.
[00:35:37] Right?
[00:35:40] Do I need to go back to the server  to swap the order of a couple of those columns, right?
[00:35:44] It's similar things in forms like drop-down states.
[00:35:47] Do you need to go back to the server and have the server?  Like if you already have the data,
[00:35:52] Do you need to go back to the server to kind of update it, right?  There is a whole level of
[00:35:57] you know, ephemeral
[00:36:00] date. It can last actually a long time. It doesn't have to be like instantly gone.
[00:36:05] But there's a whole...
[00:36:06] level of like maybe state that has varying degrees of persistence.
[00:36:11] Thank you.
[00:36:11] you know,
[00:36:13] Do you lose that information when you refresh the page? You might.
[00:36:17] Maybe you reflected it back into the URL.
[00:36:20] And you don't.
[00:36:23] But what we're getting at is like,
[00:36:26] Okay.
[00:36:27] Where the state lives...
[00:36:28] is probably the oldest
[00:36:31] um
[00:36:33] Bye.
[00:36:34] struggle since the beginning of web dev, right?  Any kind of server client relationship has this, right?  Because there's benefits to putting the state
[00:36:42] as close to your end user as possible.
[00:36:47] I mean, you can think about it right off the bat.
[00:36:51] The biggest benefit of putting the state closest to your end user is that
[00:36:55] they can have the most immediate feedback, right? We want things to be interactive.
[00:36:59] They don't have to wait.
[00:37:00] You know, you don't have to be like, okay,
[00:37:03] You...
[00:37:04] dragged this column, "go server",
[00:37:08] Okay, give me the new thing.
[00:37:10] The challenge is,
[00:37:11] I drew this nice aligned little picture here.
[00:37:15] Right?
[00:37:16] And this works, as I said, pretty well.
[00:37:19] When...
[00:37:20] We go,
[00:37:21] you know,
[00:37:24] Client.
[00:37:29] server. Right? Like,
[00:37:34] If you're thinking about a single page app,
[00:37:38] This might trigger some like...
[00:37:41] Additional arrows, let's make them
[00:37:44] blue, you know, for fun. Like this over here might trigger some like cross the board
[00:37:49] kind of stuff and we can make one in reverse as well you know
[00:37:53] You know, we can do a little bit of this, kind of feeding it back in.
[00:37:57] But for the most part, this is a pretty tight cycle.
[00:38:01] that occasionally has to do this.  Don't get me wrong, this is a source of a ton of pain.  Like, this fact, like, if everything was synchronous  and everything just worked immediately,  developing web applications would be dirt simple.  This delay, this latency going across this boundary is, like...
[00:38:20] why we've had so many different approaches to state management
[00:38:24] since the beginning of React, for example, like Redux.  Redux is like, we're all synchronous, we're perfect.  You know, we just do this loop and it's like, oh, crap,  there's async stuff, what the hell?
[00:38:34] Thank you.
[00:38:35] Thunks were pretty good, but some people were like, well, from a purity standpoint, I think we should be using generators or we should be using...
[00:38:42] observables because
[00:38:44] These pieces are something that synchronize.  They don't happen at a single point in time.  You know,
[00:38:49] A lot of discussions there, but essentially the complexity all came in once we added this async
[00:38:57] Peace.
[00:39:01] Bye.
[00:39:02] But things get a little bit more interesting when this line...
[00:39:08] Thank you.
[00:39:09] Thank you.
[00:39:12] moves.  Right?  Like, forget about these blue things for a second.
[00:39:19] Let's move them again. What happens if I move this line like right here?
[00:39:24] Mac in the middle.
[00:39:26] Like,
[00:39:28] What if the boundaries here...
[00:39:32] are
[00:39:33] asynchronous.
[00:39:37] That makes the cycle a lot less tight.
[00:39:42] I mean, don't get me wrong. This is probably way better than trying to do
[00:39:49] Actually, I should just copy it.
[00:39:51] Thank you.
[00:39:53] Like trying to do this, like.
[00:39:59] Thank you.
[00:40:00] Thank you.
[00:40:01] Like, I don't want to even think about, come on, just select it. Okay.
[00:40:06] I don't even want to think about like,
[00:40:08] what this means.
[00:40:11] But...
[00:40:13] but like
[00:40:15] My whole point is that
[00:40:20] where the state is in proximity to both the user
[00:40:24] And...
[00:40:26] the output, the UI, actually makes a fundamental difference
[00:40:29] in
[00:40:30] in like
[00:40:33] the perceived complexity of and optimization optimize
[00:40:38] how optimizable like these solutions can be.
[00:40:42] See, because the one thing that we don't talk about much
[00:40:46] Um,
[00:40:48] with the React model. I mean, when I say, of course, we've been talking about a lot recently because of signals, but one thing they don't talk much about this
[00:40:55] aligning of stuff is that like,
[00:40:59] How
[00:41:02] If this is a single code path that you have to go through, this whole thing,
[00:41:08] which runs through this code path, so to speak.
[00:41:12] you're doing a lot more work than if you just were following one of these.
[00:41:17] You know what I mean?
[00:41:18] Now you're like,
[00:41:19] going through all of this, going through all of this every time and like deciding at each point, like,
[00:41:25] "Hey, what's changed?" diff.
[00:41:27] What's changed diff? Because you have, because you group stuff together, you actually have no idea what's changed.  And as I said, in my article about derivation, we might talk about this a bit more, but...
[00:41:38] It's
[00:41:39] But it doesn't have to be that way, right? As we've seen with stuff like fine grained reactivity and signals.
[00:41:44] When you...
[00:41:47] have
[00:41:48] All the state
[00:41:49] in your hand,
[00:41:51] all the data, all the ability to render something
[00:41:56] Then...
[00:42:00] and you have that thing which you're rendering, like the current version of it, it is very easy to mutate or change parts of what's there
[00:42:09] in a fine grained way.  You don't need to diff because you have all the pieces.
[00:42:18] And this is true both when the image looks like this, like when it's on the client,
[00:42:24] So I'm going to get these blue ones out of the way.
[00:42:26] or
[00:42:31] When it's almost like reversed.  I'm trying to think of how to draw a server one.  Because a server one is like.
[00:42:37] It's actually upside down.  I don't know how to make stuff upside down in Excalibur.
[00:42:42] Their way to like...
[00:42:43] Copy it.
[00:42:45] and then rotate it.
[00:42:48] Yeah, well...
[00:42:49] Rotate that one back up.
[00:42:53] Thank you.
[00:42:56] *sniff*
[00:42:57] Thank you.
[00:43:00] Thank you.
[00:43:03] Because like...
[00:43:06] Thank you.
[00:43:07] there are frameworks that work kind of like this.
[00:43:11] Sorry.
[00:43:12] It should stop like...
[00:43:14] I need the copy rather than
[00:43:18] I told you, my Excalibur skills are really what...
[00:43:21] are going to get us in trouble most of the time here.
[00:43:26] there are frameworks that work kind of like this.  And you might be like,
[00:43:30] How are the...
[00:43:32] the end user, because the UI kind of goes over the wire, right?
[00:43:36] But the end user can like do some action, and that action gets sent immediately to the server, and then the server kind of
[00:43:44] And in this world where the server owns the state, which is the state is this like box that I haven't.
[00:43:51] drawn in here, right? It's
[00:43:54] No, what color should state be?
[00:43:56] It could be green on the inside.
[00:43:58] Should be...
[00:43:59] Bull? I don't know.
[00:44:02] Should we call it state? Should we just go...
[00:44:04] State.
[00:44:08] Thank you.
[00:44:18] Both these models might be kind of reversed from each other, but
[00:44:23] When you live in this world, this cycle can be tight.
[00:44:27] You know...
[00:44:28] what the state of things are,
[00:44:31] you know, like, oh, this swapped.
[00:44:37] you hold it, these updates can be fine-grained. At least on this side, they can be fine-grained.
[00:44:42] because
[00:44:44] Like,
[00:44:46] you know what's changed.  And this is actually true of data too, right?
[00:44:53] I mean, no one really does this.
[00:44:55] per se, but if you
[00:44:57] had
[00:45:00] A database.
[00:45:04] you know, that fed into this whole puzzle down here.
[00:45:07] let's say,
[00:45:08] Let's...
[00:45:09] Should we add a database?
[00:45:11] Or data.
[00:45:13] We'll make it.
[00:45:14] Hello?
[00:45:17] Lou?
[00:45:18] Let's make that white, make this blue, whatever.
[00:45:22] - Yeah.
[00:45:23] Call that this one data.
[00:45:26] In theory, again, people don't usually do this, but in theory,
[00:45:30] You could...
[00:45:32] No.
[00:45:34] what the data was like when you grabbed your what the the state like when you grabbed what you drew
[00:45:41] And then...
[00:45:43] Only...
[00:45:45] Every time the database updates,
[00:45:47] incrementally invalidate
[00:45:49] this stuff essentially be like,
[00:45:52] No, you don't need to fetch all the users again.
[00:45:54] I know this one user change that you're displaying, or this one poster change.  The database could know that information.
[00:46:02] Right?
[00:46:05] And then this could update just the one user
[00:46:09] throw it across the wire, and so on. Basically,
[00:46:14] When you have
[00:46:17] The pieces.
[00:46:19] all on one side,
[00:46:22] you can do the most optimal things with it.
[00:46:26] Thank you.
[00:46:27] Because as I said, it's not like we talk about state.
[00:46:30] you know, because of like UI state and stuff that's like very ephemeral or like very, you know, like close to the user interaction.  But data does change, right?  Like data can...
[00:46:41] data can be
[00:46:42] statefold, just like state is statefold. So like this distinction helped a lot back in the day when like
[00:46:49] Data was...
[00:46:51] always over here.
[00:46:53] So like,
[00:46:54] these arrows
[00:46:56] were a big deal.
[00:46:57] the ones that I had drawn before, like
[00:47:00] This is a big deal.
[00:47:03] you know, going between these. But
[00:47:07] In this world,
[00:47:10] Thank you.
[00:47:11] It's just a matter of persistence.
[00:47:14] they could be basically the same thing.
[00:47:17] Okay.
[00:47:18] Where am I going with this? I'm already losing people here. I can tell.
[00:47:22] Thank you.
[00:47:22] Thank you.
[00:47:23] All right.
[00:47:24] Thank you.
[00:47:26] Thank you.
[00:47:27] Thank you.
[00:47:28] Yeah, everyone's like thinking that I'm proposing a solution or signals.  No, no, no. I'm actually trying to do all of this.
[00:47:33] to get
[00:47:36] to appoint
[00:47:38] where we can actually understand what the problem is with HTML partials.
[00:47:47] Thank you.
[00:47:52] - All right, just checking that people are still alive here.
[00:48:00] I actually my visitor was questioning someone's opinion on why using DS and database stored procedures with BABIT RC was good.
[00:48:07] No, I'm not going to touch that.
[00:48:13] The fact that state comes from the server is just a side effect of client apps.  It's not part of the model.
[00:48:18] I mean, I'm just saying, like, it depends on, like...
[00:48:21] LiveView, stateful servers, like this could be part of
[00:48:25] of the model, right?
[00:48:30] Okay.
[00:48:31] But this is actually the most fundamental question, as I was getting at on the last stream, right?  This is the most fundamental question about your architecture, right?
[00:48:38] Because as I said, using LiveView,
[00:48:41] JS was pretty smooth.
[00:48:43] Like this model is really simple.  It reminded me of a single page app.  Once we get into SSR stuff,  it gets a lot easier.
[00:48:48] Um,
[00:48:50] nastier, so to speak. And it seems like there's always like
[00:48:54] to
[00:48:55] conflicts, like two schools of thought when it comes to figuring out how to continue along this divide.
[00:49:04] Thank you.
[00:49:05] Thank you.
[00:49:08] I guess I'm supposed to title these diagrams in a way that's meaningful. I like to just keep on drawing and confusing people.
[00:49:15] But--
[00:49:15] Like...
[00:49:17] What's this one?
[00:49:18] This is
[00:49:23] Spa.
[00:49:25] or
[00:49:26] Dateless.
[00:49:28] server stateless server.
[00:49:33] Stateful, whatever. Okay.
[00:49:40] But like now...
[00:49:48] Like, we can recognize that there's...
[00:49:51] some problems here because every app starts its life on the server
[00:49:57] So,
[00:49:59] Thank you.
[00:50:00] These arrows here...
[00:50:03] This first back and forth
[00:50:08] that happens on the blue here.
[00:50:12] Unfortunately,
[00:50:14] dolls out this white section, so to speak.  So like when you first load an app from the server  in a stateless single page app,
[00:50:25] You...
[00:50:26] And if you try, if the data is not coming with you, you're doing a whole round trip before you do anything, right?  The data did come with you, like SSR, then at least you're in an okay state.  The...
[00:50:42] But the challenger problem is that
[00:50:47] Thank you.
[00:50:51] These apps weren't originally designed to run
[00:50:55] here.
[00:50:57] the model, while it can be isomorphic,
[00:51:00] isn't optimized for that platform.
[00:51:03] And
[00:51:04] And
[00:51:06] The actual nature of declarative data is a large reason for...
[00:51:11] The pain.
[00:51:13] What I mean by that is that like,
[00:51:19] Hydration. Let's talk about hydration for a minute. Are most people on the stream familiar with hydration? You can like tell me in chat if you're familiar with them.
[00:51:28] with hydration.
[00:51:43] Are you talking about drinking water? Yes. I have a lovely cucumber water with lemon today.
[00:51:49] Thank you.
[00:51:50] Thank you.
[00:51:51] Hmm.
[00:51:53] All right.
[00:51:59] Thank you.
[00:52:01] Yeah, well, right. So let's talk about it for a second, because
[00:52:06] Again, the tricky part about these topics is they require so much foundation to get to where we actually need to get to.
[00:52:14] Because...
[00:52:15] You have to both appreciate how we got there.
[00:52:18] to appreciate what the problems are so that when
[00:52:21] you are looking at
[00:52:22] new spaces or solutions, you have to understand both what they solve and what
[00:52:28] they don't solve.
[00:52:32] Thank you.
[00:52:32] Yeah, I just...
[00:52:34] Okay, so yeah, so talking about hydration,
[00:52:40] The rough definition is like...
[00:52:45] the code that's required
[00:52:46] to take a server-rendered
[00:52:50] Page.
[00:52:51] and have it
[00:52:52] interact
[00:52:53] interact in the client the same way it would have if it as if it would had been originally rendered in the client.
[00:52:58] That's my favorite definition because it's very general.  It doesn't say very much, but this idea that
[00:53:05] It's whatever code needs to run to make the app behave as if it had been client rendered.
[00:53:11] when it had been server rendered. And I like using this kind of, uh,
[00:53:17] this kind of definition because it gets around like,
[00:53:21] People trying to
[00:53:22] duck loopholes like they quicken resumability or whatever.
[00:53:26] I'm going to call resumability hydration in this stream, and I'll explain why for two reasons as I continue my explanation here.
[00:53:33] The thing is,
[00:53:36] Thank you.
[00:53:37] hydration of some form
[00:53:39] is
[00:53:42] inevitable in any kind of declarative framework. And you can actually see it
[00:53:48] right in these drawings that I've already done here. And the reason for that is
[00:53:53] Okay.
[00:53:56] We read from state to know what to render.
[00:54:02] And then we update state.
[00:54:05] to then render it again.
[00:54:08] Like it's a cycle.
[00:54:09] At no point,
[00:54:11] do we look at the DOM?
[00:54:14] These frameworks
[00:54:15] don't use the DOM directly generally.  They're not aware of the DOM properly.
[00:54:21] I mean, that's like one of the fun jokes, right?  Because like solid...
[00:54:26] abstraction is thin enough that people can  literally go doc me and create element and just  append it and it works inside  a solid component. Sorry.
[00:54:34] This is, every half an hour I get reminded I need to,
[00:54:38] restart my Mac, like update it.  But what I'm getting at is,
[00:54:46] Thank you.
[00:54:50] So, yeah, hydration = rendering elements. No, hydration is like
[00:54:55] taking something that had previously been rendered with the framework,
[00:54:59] in a different environment, say the server, and then making it interactive again
[00:55:03] without re-rendering it.
[00:55:05] I saw a clip of Dev suffering hydration errors because LastPass was injecting widgets in UI.
[00:55:11] It's because
[00:55:14] We never look at the DOM.
[00:55:16] Not really. We don't want to look at the DOM.  Because when we're rendering, when you're doing the cycle, and you look at the DOM,
[00:55:22] that can cause repaints and reflows. It's expensive. Every time you look at the DOM,
[00:55:28] it's actually kind of it's expensive, like even in solid, which, you know, has that low abstraction layer where you can go document create element and like insert into the JSX.
[00:55:37] Okay, you make the element, but we only get around to actually diffing the elements right  at the end of the freaking cycle.
[00:55:44] It's over. Everything else is updated. Everything else has kind of shifted the state.  We actually have already like you have a list and it updated.  You add an item we've we've updated the reactive representation of the list.
[00:55:56] and then we've mapped it to a DOM element,  and then we only actually look at the DOM elements
[00:56:02] afterwards when we're actually doing our side effects.
[00:56:08] Yeah, because looking at the DOM, touching the DOM is slow.
[00:56:12] You don't want to do it.
[00:56:14] pretty much, you want to touch the DOM the least amount as possible.  Most, a lot of UI frameworks like React basically have no idea what the DOM is.
[00:56:22] And
[00:56:23] This is very fundamental to the declared design because state, you want a single source of truth. You can't have like
[00:56:29] You don't want this being the source of truth over here, you know, and this being the source of truth and arguing with each other.  Like the thing that I didn't show in this diagram was all the state all over the place.  But it's even more confusing when the DOM is like thinks it knows what's up and the library thinks it knows what's up and those things don't agree.
[00:56:48] In the case of like our modern declarative frameworks, we just go, the library is right.  The DOM doesn't know what it's talking about.
[00:56:54] Just overwrite it. Diff it. Do whatever needs. Just
[00:56:57] Force your way. We are right.
[00:57:04] losing the hydration is my thing  but  and this is the thing
[00:57:12] Resumability.
[00:57:15] doesn't need to execute
[00:57:18] the hydration code.
[00:57:20] It doesn't. Like, it doesn't need to go through. Like, most frameworks, most libraries are declarative. Well, how do you restore the state?
[00:57:27] to
[00:57:28] to the application. Well,
[00:57:32] If your program is
[00:57:34] UI equals function of state,
[00:57:37] You know, we have this extra data in here, but if your program's UI equals function state, well, I hate to break it to you.
[00:57:43] There's no intercepting it. You have state.
[00:57:48] You have UI, like,
[00:57:51] You call the function again.
[00:57:55] Right. Like,
[00:57:56] This is kind of...
[00:57:58] the like the fundamental thing. Resumability goes okay no we don't have to call the function, we can use reactivity.
[00:58:06] We can split it down to such a point that
[00:58:09] the first time we do anything is when we change something and then because we're not
[00:58:13] running the whole function, we're only applying the change using our knowledge of the reactivity. But the thing is, even with resumability,
[00:58:20] You ran it, the only reason why the zoom ability works is because you ran it on the server
[00:58:25] the first time and got all the initial state and then serialized across.  Basically, you did your trial run, which means that
[00:58:33] You still have the state.
[00:58:35] This hasn't actually changed that you actually have the state.
[00:58:41] and you don't look at the DOM.
[00:58:43] You might like pull the state initially from the DOM as like a transfer mechanism that like you encoded it as DOM instead of JSON or whatever, like that's an implementation detail. Fundamentally.
[00:58:56] The whole basis of this is
[00:58:58] The DOM has to manage the state or stuff goes really badly.
[00:59:03] Right. All those hydration errors you've seen in React or maybe solid. Quick still has
[00:59:09] The equivalent of hydration errors if someone goes and messes with the DOM elements,
[00:59:13] It can't like it still has to attach the listeners in a way.  It still has to know.
[00:59:18] you know, where these things are.
[00:59:22] which puts it in this camp, you know, generalized hydration camp, and it has to match because we  never look at the DOM and a declarative library will not look at the DOM. So essentially jQuery
[00:59:36] is a little different, right?
[00:59:37] Because in jQuery,
[00:59:39] You weren't concerned with being declarative or looking at state.  You'd be like, okay...
[00:59:44] Like pretend you had a method that when you clicked a button, it updated some part of the DOM. You can picture that, right? Like button over here updates some part of the DOM over there.
[00:59:52] like,
[00:59:53] Sorry, my hands went on there. So button here.
[00:59:56] thing over there, okay, separate.
[00:59:58] Now, if...
[01:00:01] If...
[01:00:03] that other thing hasn't been displayed, like some other logic prevented from being displayed. In a jQuery routine, when you click the button, or you know, did that, it would go, "Oh, is that element there? Oh, it's not there. I can't do this operation." And it would act appropriately. Like, you'd look.
[01:00:19] because you need to grab the element to go insert it in the DOM.
[01:00:23] In a stateful declarative framework,
[01:00:26] If you thought it was there and it wasn't there,
[01:00:29] The framework's just going to choke on you because it's like, state is wrong.  I can't trust anything.
[01:00:37] So while
[01:00:40] Execution-wise, we could say that, theoretically, the best resumable system
[01:00:45] has the same
[01:00:47] performance characteristics as jQuery when it comes to hydration.
[01:00:53] It doesn't actually...  jQuery doesn't actually require...
[01:00:59] Um...
[01:01:01] the state to match because it's,
[01:01:04] not like it's not stateful, it's imperative. It's so
[01:01:09] That's kind of the difference from my book. Hydration is our fault because we came up with declarative frameworks, but it's inherent to declarative frameworks. We can come up with ways to solve the expense of it. We can come up with ways to defer it and do a whole bunch of fun stuff with it, but it's our problem.
[01:01:27] even the smartest solutions here
[01:01:31] if they're going to be optimal,
[01:01:33] and declarative and give you this control and predictability that you want.
[01:01:40] They rely...
[01:01:43] on knowing the state.
[01:01:46] and have that like the DOM match it.
[01:01:49] Okay.
[01:01:52] Thank you.
[01:01:54] Sounds like VDOM with extra steps.  I mean...
[01:01:59] This is the fun part about this, is that like,
[01:02:05] serializing stuff across the wire
[01:02:08] Like once you leave...
[01:02:09] the source place of where these things live
[01:02:14] you do have a virtual representation, right?
[01:02:19] If you do a good enough job and you encode enough information, you still don't have to diff, right?  That's a beautiful thing about quick, right?  They are able to resume the reactive graph.  They can keep the granularity, but that's because they're not kind of passing back and forth.  That's just because like they just do the initial thing, pick it up and move it.
[01:02:35] Right?
[01:02:36] Things get a lot messier if this relationship is one that's constantly going back and forth, right?
[01:02:42] A lot of times people try and compare React server components to Qwik and back and forth, and they're not comparable because they do not solve the same problems.
[01:02:51] Thank you.
[01:02:54] Thank you.
[01:02:55] No, don't make eye contact with the Dom. Pretend it's not there.  Thank you. I'm like six minutes behind on the chat again.
[01:03:03] Trying to keep up with the Huron, but I'm missing the funnel on some hydration. I always thought it was when the markup was generated by the JS package. Where can I find the basics I need to understand this?
[01:03:12] Were you an Angular dev?  I just want to kind of...
[01:03:17] put that out there because Angular did a very long
[01:03:21] I'm basically
[01:03:24] misinforming the community what hydration was.
[01:03:27] And they finally added hydration in 2022.
[01:03:31] three, I think, like last year.
[01:03:34] But they did not have hydration until last year. But they had something else that they called hydration.
[01:03:41] Yeah.
[01:03:42] In modern terms, a JS package
[01:03:50] generating markup is called rendering.
[01:03:53] That's the term we use.
[01:03:56] Hydration is the term for when something was previously server rendered and we basically try and
[01:04:02] Upgrade it.
[01:04:04] That's the key piece here.
[01:04:10] Thank you.
[01:04:11] Thank you.
[01:04:20] OK, yeah, unless you talk about HTML.  I'm not against HTML.
[01:04:24] We can talk about HTML partials all day and not even mention HTML. It's just not relevant. The specifics of HTML just don't matter for the point of this conversation. It doesn't really matter what the tool is. I'm talking very much on fundamentals here.
[01:04:40] Right.
[01:04:40] It's funny though, I mentioned jQuery, right?
[01:04:45] I could have said vanilla JavaScript.  So I guess there's like still value to a library.  Like,
[01:04:50] Is this a good comparison?  Like, HTMX is kind of like if you invented jQuery in 2023.  Like, if jQuery hadn't existed,
[01:04:57] And then you're like, look, new library, jQuery.
[01:05:02] There's definitely value there.
[01:05:05] Right, because it makes it easier to use the DOM APIs. But it's also kind of like,
[01:05:11] Hmm?
[01:05:12] Yeah.
[01:05:13] Maybe that's a bad comparison.
[01:05:20] Yeah, this is the simplest thing, but it's... Hydration involves so much more...
[01:05:29] than that.
[01:05:32] like because of this what I'm talking about because
[01:05:36] adding an event listener can't be the end of the story. And if you look at like the  resumability thing at all, like we see these examples all the time, just because
[01:05:47] Thank you.
[01:05:48] I can draw it really quick here in a simple playground.
[01:05:53] Let's just trash what I had last time.
[01:05:56] You can already see it here. Look.
[01:05:58] I have a button.
[01:06:02] that when I click it, it updates. We've all seen this code before.
[01:06:07] If I was like, okay, I'll just server render this markup, and then I'll add this event handler, I'm going to have a pretty hard time because this event handler set state.
[01:06:17] So if I literally just was like, OK, button run this, it's like
[01:06:20] it won't be able to find the state, right? Like if I just
[01:06:24] Take this.
[01:06:25] and put it out here and go, okay, now,
[01:06:29] We have a button.
[01:06:30] You know
[01:06:31] Dom...
[01:06:33] find by ID, whatever.  You get my point, document,
[01:06:38] I'm just--
[01:06:41] query selector, I don't care what it is.  My point is if I find the element,  and then went like, okay,
[01:06:49] l equals this, and then I went like l dot
[01:06:53] Thank you.
[01:06:54] on click
[01:06:57] increment
[01:07:00] This doesn't work fundamentally besides the fact of me like...
[01:07:06] Thank you.
[01:07:06] Thank you.
[01:07:07] I really don't want to finish typing the rest of this out. It just doesn't matter.
[01:07:12] Git element.
[01:07:16] I just, I'm sorry, I...
[01:07:20] It's GitElement.
[01:07:23] Why is it, why am I just like blind right now, get element?
[01:07:27] by ID
[01:07:29] It's like at the bottom of my, like, it's on document, not body.
[01:07:33] It's whatever.
[01:07:35] My point is this doesn't work because
[01:07:41] Count
[01:07:43] doesn't have any meaning outside of the scope of the component.
[01:07:47] So in order to get to a point where you can attach event handlers, you actually have to rerun the components.  That's basically the crux of what I've been trying to say.
[01:07:59] Thank you.
[01:08:00] Thank you.
[01:08:02] The DOM isn't that slow, but sometimes reading stuff
[01:08:11] is
[01:08:13] is actually way more expensive than you'd expect. Like, stupidly slow.
[01:08:19] Like if you know how to use the DOM effectively, it isn't slow.
[01:08:22] But like...
[01:08:24] There's a danger there. It's the same reason we have frameworks and stuff so that people can do stuff in optimal ways because people don't realize the stuff they can do.
[01:08:32] Thank you.
[01:08:34] Thank you.
[01:08:36] Thank you.
[01:08:38] The real question is, will you do a stream on jQuery when it comes out?
[01:08:48] Oh. Okay. So Greg liked my comparison.
[01:08:55] Thank you.
[01:08:56] That's awesome. That makes me happy.
[01:08:58] Seems like I'm not crazy.
[01:09:00] So
[01:09:02] You guys are making fun of me. Yeah, fine. The funniest thing is like literally the code was on the same page.
[01:09:10] Like,
[01:09:11] Thank you.
[01:09:14] Thank you.
[01:09:16] Thank you.
[01:09:17] When your signals come to jQuery, yes.
[01:09:21] Thank you.
[01:09:23] Yeah, yeah. So like we have ways to improve hydration. My point is even in frameworks that were designed that way, generally speaking,
[01:09:31] You need...
[01:09:32] to
[01:09:34] Okay.
[01:09:35] Thank you.
[01:09:36] you basically need the state on the server  to match the state on the client  to boot these things up.  Someone can't go in like,
[01:09:45] Google translate your page and add a bunch of like extra elements in there because you're not going to find anything.
[01:09:55] Thank you.
[01:09:56] Anyway...
[01:10:01] Good.  People are still with me.
[01:10:04] Everyone's still alive.
[01:10:07] Thank you.
[01:10:08] Thank you.
[01:10:09] Yeah, I mean, I'm talking real fundamentals here today because
[01:10:14] Like, this has kind of been the...
[01:10:17] the struggle with this stuff because
[01:10:20] On one hand...
[01:10:22] We really want
[01:10:25] the state to be as close to the client as possible
[01:10:28] because like in this definition of state and data, because
[01:10:32] then we can be as interactive and responsive as possible.
[01:10:39] Like, but then on the other hand,
[01:10:43] a lot of problems with UI frameworks is that this problem here starts happening on the data side.
[01:10:49] Because, I mean, I'm showing these nice little funnels here, but...
[01:10:52] Like,
[01:10:54] we end up with we can end up with like many different calls.  You can have component like this could be per component.  And suddenly like each component is doing waterfall data fetching, you know, like
[01:11:04] component fetches, like the classic example is
[01:11:08] you have a big app with the router and code split. So every page has its own bundle.
[01:11:14] Good idea, right? You don't want to float everything up front.
[01:11:18] So...
[01:11:20] You go to the next route.
[01:11:22] Unfortunately,
[01:11:24] You don't have the JS yet. That's fine. So you go to the server and get the JS.
[01:11:28] And then when you load the code, the first line is fetch some data.  So you go to the server again to fetch some data.
[01:11:36] It's a little bit awkward because you're like, well,
[01:11:39] If I'm going to go to the server at the beginning there, why didn't I just go fetch the data at the same time?  Like, I know I'm going there, right?  And this is what a lot of, like, Remix solves or SvelteKit or SolidStart.  Like, we all have these data loader, route level data loader things.  So because we're building single page apps, we code split our app.  We need the ability to basically parallelize that data fetching.
[01:12:04] I'm sorry.
[01:12:06] But, you know, there can still be cascades, and it pushes us generally to hoist the data fetching up.
[01:12:12] I
[01:12:14] If you could do all of, if instead of loading the code, doing the data fetching, you know, in parallel, like what if you actually rendered the page?
[01:12:25] also on the server and return part of it back. Not the whole page, maybe, maybe just like a swap section. Then suddenly,
[01:12:34] Like,
[01:12:35] you're removing all of these cascades and if the waterfalls exist,
[01:12:41] still, which they can, they can still very much exist in the client even when he hoists the data fetching.
[01:12:46] you know,
[01:12:47] uh,
[01:12:48] because there are natural waterfalls, you have to fetch this and that.
[01:12:51] You can just do it all in a single flight.
[01:12:54] And
[01:12:56] It's so powerful to the point that the React team has gone as far as saying,  yeah, don't worry about waterfalls on the server.
[01:13:03] I mean, I don't completely trust them on that because before I was building JavaScript frameworks, I was building ORMs.
[01:13:09] And trust me, I did all the work possible to avoid server waterfalls that I could like imagine.  That was like literally the types of optimization work I did.  So I'm not.
[01:13:19] I'm not buying that for a moment, but
[01:13:22] comparatively, it's an order of magnitude, right?  This is the same argument I make about like why you should put JavaScript on your back end, because the difference you can make
[01:13:31] in terms of
[01:13:32] Once your app is
[01:13:34] you know, has a bunch of JavaScript in the front end.  The difference you can make in terms of hydration cost is an order of magnitude different than you accomplish by doing stuff on the server, right?  Like network cost.
[01:13:46] 10x CPU cost like
[01:13:49] on a per user
[01:13:50] on an individual user basis.
[01:13:52] Um...
[01:13:53] you know, like an individual request basis. Obviously,
[01:13:57] There's a trade-off here because you have millions of users.
[01:14:02] And the end user takes the brunt of the network cost, where you take the brunt of the CPU cost. So I understand there. But from a single user's perspective, JS on both sides will give you the best results, right?
[01:14:15] That argument in reverse is basically what they're using for RSCs in terms of waterfalls on the server not mattering as much.
[01:14:23] Thank you.
[01:14:27] Sending HPL on the route change is the way.
[01:14:30] Let's start looking at...  This is all building up to where I'm trying to get to.
[01:14:39] Yeah, JSON serialization is definitely expensive compared to just rendering HTML.  So there's that.  But we've already talked about here is that you're not rendering just...
[01:14:53] HTML.
[01:14:54] Like, yes, if you can get away from
[01:14:57] with just rendering HTML.
[01:14:59] and you have some jQuery or some simple JavaScript manipulation logic that's not stateful, then you're fine.  But truth of the matter is...
[01:15:07] If you are dealing with a declarative client side framework,
[01:15:11] you're going to be serializing JSON anyways. And if you haven't kind of
[01:15:15] Thank you.
[01:15:16] They kind of...
[01:15:18] If your stuff's resumable, guess what? You're going to be serializing more.
[01:15:21] Um...
[01:15:23] of that internal state as well.
[01:15:25] instead of recreating it.
[01:15:26] So like,
[01:15:30] Not a clear way. Now, obviously, I'm talking about HTML partials and getting there from the perspective of declared JavaScript frameworks. So maybe like that is the starting point because...
[01:15:45] My assumption here is that regardless of
[01:15:50] of how we do our navigation.  Because as I said, I've worked on MPA frameworks,  things that basically deal in HTML.  Marco,
[01:16:00] Um,
[01:16:01] Marco turns 10 this year, I think.
[01:16:06] Thank you.
[01:16:07] Yeah, Marco's 10 this year.
[01:16:10] So we've had like we basically had islands in JS land MPA style for a decade.
[01:16:16] And
[01:16:18] Okay.
[01:16:20] What I'm trying to get at is that...
[01:16:24] at a certain scale,
[01:16:26] and complexity
[01:16:29] I'm arguing that
[01:16:31] Not scale of users, scale complexity of your app,  marking that a declarative solution in JavaScript  in the client's side is probably unavoidable, probably.
[01:16:40] That's the base premise that I'm taking into this thing.
[01:16:45] Like,
[01:16:46] Thank you.
[01:16:47] The problem is
[01:16:49] There's all...
[01:16:51] The one case where it might be avoidable is if you have a stateful backend. If you have a stateful backend,
[01:16:58] There's some startup cost, you know, getting that WebSocket on.  We kind of were testing it a bit when we were playing with LiveVue.js.  It definitely took a hit.
[01:17:08] But...
[01:17:08] Generally speaking,
[01:17:11] What I'm getting at is...
[01:17:16] If you have a stateful client, you will
[01:17:23] inevitably get to a JavaScript framework,  whether it's an existing one or one you built yourself  because you were trying not to use one.
[01:17:34] Thank you.
[01:17:37] Thank you.
[01:17:38] Double digits.  Hey, Marco.
[01:17:43] Thank you.
[01:17:48] Okay, at the end of time of parsing xqjss and srnc with hydration is the same without counting the render time?
[01:17:56] End of parsing, yes, in SSR and CSR.
[01:18:00] Hydration is the same.  OK, this is a fair question.
[01:18:09] I imagine it's slightly faster to hydrate.
[01:18:14] than it is to actually client render, even not counting the painting time.
[01:18:20] slightly.
[01:18:25] just because you're not like
[01:18:28] like when you say render time, you're talking paint time because you're actually like creating DOM elements that does have some amount of cost to it.
[01:18:35] The tricky part, obviously, is the render time when it shows up actually is actually a considerable difference.  And...
[01:18:47] Oh, actually, sorry, you said CSR versus SSR.  Data fetching is going to be huge, huge, huge difference.  See, the problem is if you...  Don't get me wrong.  The reason in some cases...
[01:19:02] what will happen. Okay. I don't know if I want to show this graph right now.  It is kind of relevant. I've talked about this before, but classically with SSR,
[01:19:10] Um,
[01:19:12] What time is it? Yeah, I can show it. Um,
[01:19:16] Maybe I actually have an article that shows it and then I don't have to...
[01:19:18] draw this stuff myself.
[01:19:20] Um,
[01:19:22] Thank you.
[01:19:23] Uh, do-do-do-do-do.
[01:19:28] server render
[01:19:33] YSSR
[01:19:36] oh god i can't remember my old article names maybe because they're on page two they're that old
[01:19:41] So we're running in JavaScript. Yeah, okay.
[01:19:44] Optimizing performance.  Yeah, that was the last one, YSSR.  These were a while ago.
[01:19:50] Um...
[01:19:52] Mm-hmm.
[01:19:53] Just really show what I want to show.
[01:19:57] The big problem with classically with server rendering was that you'd had to wait for all the data to show up.  So if the data latency is is more impactful than your network latency because you have a fast internet and you're in Silicon Valley, close to where they do it or wherever the edge network or whatever, like if that is.
[01:20:19] is smaller.
[01:20:20] then the fact that you wait for the data before sending any of the HTML means that the JavaScript can't load to hydrate, which means that CSR can actually
[01:20:30] Sneak out.
[01:20:31] even with client-side data fetching, better metrics than SSR because
[01:20:37] it shoots the page back immediately,  goes to fetch it,  um...
[01:20:42] But it's also loading the JavaScript at that point, whereas SSR has to wait to load the JavaScript.
[01:20:49] So then CSR can like can like start like executing some of the code, you know, sooner.
[01:20:57] So like there's like a bit of a trade-off.
[01:21:00] Streaming basically levels the playing field close enough that...
[01:21:05] even if CSR
[01:21:07] Yeah, streaming basically levels the playing field to the point that this, like...
[01:21:11] that they're basically the same.
[01:21:15] Um,
[01:21:16] But without streaming, it's actually, it actually, the answer is it depends.
[01:21:24] Thank you.
[01:21:26] You misheard. I said rendering is more expensive than hydration.
[01:21:38] Thank you.
[01:21:39] Thank you.
[01:21:40] You have to count the data fetching.  Like.
[01:21:44] Otherwise.
[01:21:46] - Yeah.
[01:21:47] If you don't count the data fetching, then like,
[01:21:52] the server is not data fetching either so then they're both sending it so then yes the server  ssr is definitely faster
[01:21:59] because like they both respond with the page immediately.
[01:22:02] And then
[01:22:04] They both request their JavaScript.
[01:22:06] In fact, SSR can be better this because again, do you have routes on your app?
[01:22:12] CSR, you don't know what page you're going to be at.  So if you have page specific code splitting, you actually have to go fetch that code.  With SSR, you know what page you're on.  So you can actually pre-fetch all the like the the bundle pieces that you need if you code split.
[01:22:28] So like,
[01:22:29] Yeah, I mean...
[01:22:31] With no data fetching,
[01:22:34] involved. See, that kind of like prefetching  thing gets kind of over...
[01:22:38] kind of gets
[01:22:39] evened out because like,
[01:22:43] you get the JS starting earlier with CS when there's data fetching,  but with no data fetching at all involved,  SSR is like clear win,  like not even it's,  it's,
[01:22:53] Pretty much.
[01:22:57] Thank you.
[01:23:01] No, I'm saying CSR is the other way around. I don't know why you guys keep on thinking I'm saying the opposite.
[01:23:14] Thank you.
[01:23:20] Well, the hydration doesn't have to create any DOM elements.
[01:23:24] Thank you.
[01:23:26] The JavaScript code
[01:23:29] Bye.
[01:23:31] Thank you.
[01:23:31] Um,
[01:23:32] Like, for example, the way solids hydration works is we look at the DOM, we grab a reference, like we just go get me all the elements with a specific
[01:23:41] ID key. And then we run the code and then when we get to that piece of code,
[01:23:45] that
[01:23:46] that goes...
[01:23:47] you know, we would render this, we go, oh,
[01:23:49] There is that key.
[01:23:51] From the set, do a set lookup.
[01:23:53] you know, O of 1 or whatever,
[01:23:57] Here, use this element, don't create DOM elements, don't attach them to the page.
[01:24:03] You know?
[01:24:07] Is prerendering really SSR? If it hydrates, sure.
[01:24:14] Like...
[01:24:20] I've always considered that first load is not my maker's art it reloads. Where if I miss...
[01:24:27] Yeah, yeah. Well, the biggest thing with SSR is you're inherently in a world of double data.
[01:24:31] Right.
[01:24:35] Sorry, and it did it again. It's like on less than half an hour intervals.
[01:24:42] DOM is, CSR is a DOM-minition, gotcha.  And that's expensive.  Okay, well, hydration, creating,  allocating the memory of the framework starting up  is also expensive.
[01:24:54] But
[01:24:55] Yes, the rule of thumb here always is DOM expensive. Just
[01:24:59] Take that mentality with you.  Like, don't get me wrong.
[01:25:02] Some people really were like, the DOM isn't that expensive.
[01:25:04] It is not that expensive, but
[01:25:07] It is more expensive.
[01:25:08] Like these things add up.  That's the thing.  These are the accumulated costs.  It actually makes a difference.
[01:25:19] Thank you.
[01:25:19] Thank you.
[01:25:23] Thank you.
[01:25:25] Benton is the new someone. Sorry, Jay Larkey.
[01:25:30] or parasocial, whatever you want to go by. Anyways.
[01:25:36] Thank you.
[01:25:37] Thank you.
[01:25:38] Thank you.
[01:25:39] Thank you.
[01:25:40] Thank you.
[01:25:41] Thank you.
[01:25:45] Ah.
[01:25:48] Thank you for the compliment.
[01:25:53] I think it's a compliment.
[01:25:55] Yeah.
[01:25:56] Alright, so...
[01:25:58] I'm not.
[01:25:59] Oh, I...
[01:26:01] I hope.
[01:26:02] I hope we're getting somewhere here in that
[01:26:09] Okay, we've clarified that client rendering is more expensive than hydration, generally speaking.
[01:26:15] Like SSR definitely has a benefit.  Like,
[01:26:20] Like when you consider...
[01:26:22] Like,
[01:26:23] It's interesting, right?
[01:26:26] I've seen some people
[01:26:27] looking at some hybrids recently, like data fetching
[01:26:31] Which I presume means they know what route they're going to be on.
[01:26:36] Right.
[01:26:37] like the points of the data fetching, like they at least run the route data kind of level stuff and they know what JavaScript is sticking to the preload. So they can like render a shell and then they client render.
[01:26:48] And
[01:26:50] Maybe they stream that data too.  I can picture a world--
[01:26:54] where you could do as much optimally on the server except render the application
[01:27:00] like the actual stuff in the server where the performance would be
[01:27:05] Close...
[01:27:07] But like,
[01:27:09] you'd probably see the difference, you know, like whether it's just like a quick flicker for a second or whatever, but like all the classic SSR better than CSR stuff would be.
[01:27:20] gone mostly other than just the pure cost of rendering.
[01:27:24] But yeah, generally speaking, SSR is going to have an advantage on
[01:27:29] page load,
[01:27:30] assuming that the server isn't blocking
[01:27:34] the client's ability to load resources, which, as I said, is significant because I used to use that to just fry every SSR demo.  Like I remember back in the day, there was like a real world demo, real world.
[01:27:48] Comparison
[01:27:51] Thank you.
[01:27:51] Real Curious Front of Frameworks 2020, you know, like there used to be this one.
[01:27:55] that came out every year with a real-world demo.
[01:27:58] And
[01:27:59] I remember I did a solid version of it.  And the funny thing about the solid version is,  you realize after the fact is,  solid is actually using client rendering,  and most of the other top frameworks here  are actually using server rendering.
[01:28:13] Um...
[01:28:13] And solid was, this is a lighthouse, you know, the thing that, you know,
[01:28:18] is very picky about initial load.  Basically the whole thing is initial load.  It all basically outperformed  all the server rendering framers.  This is Svelte, but it was actually Sapper.
[01:28:28] uh,
[01:28:29] Like...
[01:28:32] Where is it?  Yeah, where's our...
[01:28:37] And you could tell even when you looked at the page,  how much nicer it was using the CSR.  So don't get me wrong, you can definitely screw up
[01:28:46] SSR and to be fair I feel like  like the best practices of  like Next.js like
[01:28:51] until a couple years ago, basically ensured that you were probably going to be worse than someone who knew what they were doing with CSR.
[01:28:59] But like.
[01:29:01] Times have changed. I think people are better with SSR. I think frameworks are better with SSR. This isn't like using Next.js in 2019, so to speak.
[01:29:10] Like, this isn't like shooting fish in a barrel.
[01:29:15] Anyway.
[01:29:20] Thank you.
[01:29:21] Yeah, I care about the fact that these solutions scale, right?
[01:29:25] Thank you.
[01:29:29] That's interesting.
[01:29:33] Walmart is just like the page you go to if you want to see what it like. Go turn down your network stuff. If you want an example of what of React performing poorly, go to Walmart.
[01:29:45] Thank you.
[01:29:46] Thank you.
[01:29:52] Thank you.
[01:30:03] You'll be hard. That's so bad because if it wasn't, I would be roasting SR to death now.  Yeah, I was I was like, I see I see where you guys are like coming from here, you know, trying to like change the flow, avoid the complexity.
[01:30:14] I was the guy. I was you. I was that guy.
[01:30:18] I was very smug about
[01:30:21] about CSR toasting SSR frameworks.
[01:30:26] you
[01:30:27] I wasn't completely correct, though.
[01:30:33] Thank you.
[01:30:36] Yeah, I mean, and yeah, Solid attracts a lot of a lot of those people right now.
[01:30:42] Because the problem is...
[01:30:45] Cookie cutter solutions rarely give you the best performance.
[01:30:50] And
[01:30:51] Like,
[01:30:52] There's just so many opportunities because people that we design stuff so people can actually release products. So like,
[01:30:58] When I complain about
[01:30:59] waterfalls in
[01:31:01] in RSCs or whatever
[01:31:03] Yeah, it's a performance concern, but like the React team, you know, quite rightly, probably is like saying like, look,
[01:31:13] Think about how much easier this is logically.
[01:31:15] This will help you just build the app and not worry about that stuff.
[01:31:19] There is...
[01:31:21] Enough studies, you know, Alex Russell types after the show that if you build something without taking performance in mind in the first place, it'll probably never be optimized like that generally how these things work.
[01:31:30] But, you know, push comes to shove.
[01:31:32] It's about getting features out the door, not how...
[01:31:35] performing it is usually. So,
[01:31:37] I get it.
[01:31:39] I'd like to hope that sometimes the patterns that we push forward can actually lead to more  performant apps. Like a perfect example of that is React moving to hooks, I think made the average React app
[01:31:49] more performant. I have no numbers to prove that, but
[01:31:53] And I know that some people use effect terribly with the re-render, but the actual main life cycle is...
[01:32:00] of React.
[01:32:02] the way they pushed effects after render and all this kind of stuff actually is more performant, right? Like from a baseline of how you should organize your code.
[01:32:11] They kind of guided you to doing stuff in a better way.
[01:32:14] That being said...
[01:32:16] people really prefer synchronization over derivation.
[01:32:19] So it's like, it's really hard to kind of break them of that.
[01:32:30] Yeah, Alex Russell is awesome. I've met him a few times. Yeah, we'll see. Because it's interesting because I do technology and he does, he actually says that like he stopped trying to fight React to technology. He actually thinks it's a management problem.
[01:32:45] and like an organizational problem where like he's trying to attack it at the hiring level.
[01:32:55] Thank you.
[01:33:02] If you've already been de-expiring, yeah, so funny, sometimes
[01:33:06] I am terrible in that, like, even though I'm aware of DX and I care...
[01:33:11] about DX in terms of leading people to the most performing patterns, make sure that it's easy to.
[01:33:16] I, like, beyond that, I could care so little about it.  Like, I'm much UX over DX, like, completely...
[01:33:24] like on my prioritization side of things. So like it makes it really hard. I have to like everyone has their own like
[01:33:31] biases and stuff. And this is one of those ones I have to keep in check. Like when I write articles and I'm like talking about stuff and get excited about stuff, I have to like remember to be like,
[01:33:39] talk about solutions that don't push in that direction, that maybe push on the DX side. You know, like that was like very intentional part of my stream last weekend. Like the frameworks that I had to do research before the stream on versus the ones that I just knew everything off the top of my head. It was very clear pattern there.
[01:33:58] That being said,
[01:34:00] React changes to RSCs
[01:34:02] do have positive performance
[01:34:04] benefits, even if I'm struggling with them. The problem is
[01:34:08] And where I'm getting to here is the silver bullet.
[01:34:11] This is the thing we we're trying to find that one pattern fits all and it's not quite
[01:34:19] working. I was hopeful, but then I keep on getting slightly let down, you know, and I keep on shifting my perspective as I go, which is why I want to talk more about this today. Okay, sorry. We're like an hour and a half in and I'm like, we're just getting to HTML.
[01:34:34] But it's important. We need to understand state. We need to understand hydration.
[01:34:39] And we need to understand the base idea that if you have a stateful client,
[01:34:45] then
[01:34:47] like,
[01:34:48] as a baseline...
[01:34:50] you're probably going to need a declarative JavaScript framework, probably.  If you have a stateful client,
[01:34:56] and you feel you do not need a declarative JavaScript framework, that's a different conversation.  And again, that's why we're probably not going to focus too much
[01:35:03] on
[01:35:04] like say something like HTMX specifically,  because like,  I think,  uh,
[01:35:09] they called me out this week a little bit after my last stream,  because I mean,  I'll call out it was just like a shout out,  but like they're,  um,
[01:35:18] Where did he say it?
[01:35:20] HTS generalized hypermedia controls, that's it. And since I agree with Ryan, where I disagree is how powerful the simple extension is, I think people underestimate hypermedia controls generally.
[01:35:29] Online debates are generally pointless. People will build and we will see. Right.
[01:35:34] Right. So that's the right sentiment to hear, because my whole argument
[01:35:42] Is that...
[01:35:44] I think hypermedia, I think these controls are
[01:35:46] are powerful, but if you have stateful client,
[01:35:51] Um,
[01:35:53] You have these things kind of...
[01:35:55] butting up against each other, right? So like, you can use them together, right?
[01:36:03] Perhaps, but if we're in that zone where we're using them together, I could also be talking about astro view page transitions  I can be talking about react server components. These are
[01:36:12] other
[01:36:13] solutions
[01:36:15] that
[01:36:18] involve
[01:36:19] combining HTML partials with stateful declarative clients.
[01:36:24] libraries. Okay.
[01:36:26] Thank you.
[01:36:29] Thank you.
[01:36:33] Yeah, yeah, definitely, right? Well, but see that... this... and this is a lot of times what Quick's argument is here a bit, is...
[01:36:43] came from the XA and make it so that the creating good UX is easy. Exactly.  But someone figured out what the, what the good user experience is in the first place.
[01:36:51] to get there.  So for me, that's still UX leading DX.
[01:36:56] Thank you.
[01:36:57] Bye.
[01:36:58] And in a sense, when server components, I believe they were trying to find a replacement for GraphQL.
[01:37:06] And I don't think it was just on a DX standpoint, because obviously there's a lot of complexity in Relay. But I think it was actually GraphQL requires you to base, not requires, but to fully benefit it. You basically have this giant client side library, right? To be fair, the React team didn't care as much about that. But it is one of those lists of concerns where like,
[01:37:27] GraphQL client is as big as React DOM itself. Like,
[01:37:32] 10 Preacts easily, right? So you had GraphQL client, you grab react, DOM and react, and you're at something like 25 Preacts.
[01:37:41] And for those who don't know,  Preact is a unit of measurement in JS frameworks.  It's four kilobytes.
[01:37:49] essentially. So when talking about JS framework sizes, I generally use Preax.
[01:37:58] Anyway.
[01:38:02] there so there is like and that's without adding like
[01:38:11] GraphQL client libraries are useless post with fetch.
[01:38:16] I don't know if I can agree with that.
[01:38:21] Like...
[01:38:23] Thank you.
[01:38:25] Okay.
[01:38:26] I would say that maybe you don't need it.
[01:38:30] until you're like,
[01:38:32] super enterprise or something.
[01:38:34] Sorry, my screen just flickered for a second.
[01:38:38] Thank you.
[01:38:41] but like,
[01:38:46] Thank you.
[01:38:48] - Like it's part of the thing where everyone got sold  in GraphQL when they didn't need GraphQL.
[01:38:52] Like from that perspective, you can say that they're useless,  but there is no solution that is so effective at applying granular information
[01:39:02] change across the network from a stateful client's time.  It's like it's like the live view
[01:39:09] Cool.
[01:39:09] stateless server edition kind of thing. It's like the, and I'm not talking about subscriptions and web songs, I just mean the fact that like with a normalized cache,
[01:39:17] it is possible to know down to fields what has, you know, what data has updated.
[01:39:26] Thank you.
[01:39:30] Thank you.
[01:39:32] Thank you.
[01:39:35] Thank you.
[01:39:36] Thank you.
[01:39:38] *giggle*
[01:39:39] Anyway, so yeah, I'm making some assumptions here.  I'm assuming that you have stateless servers
[01:39:49] I'm assuming that you have...
[01:39:51] dateful clients, and I'm assuming that
[01:39:54] Um...
[01:39:55] Yeah.
[01:39:56] that you want to try and improve the situation somewhat.
[01:40:00] So with with with those kind of
[01:40:04] assumptions in place.
[01:40:06] then we can have a conversation about HTML partials.
[01:40:11] *sad music*
[01:40:19] Okay.
[01:40:20] Bye.
[01:40:21] Is it, though?
[01:40:24] I'm just very curious if anyone with Staples servers has any customers.
[01:40:32] Thank you.
[01:40:34] Thank you.
[01:40:37] The reason I ask this is just like
[01:40:42] The move from stateful servers was so unanimous, you know, a decade,
[01:40:49] 15 years ago that like
[01:40:51] It just,
[01:40:52] Maybe it's like the spa movement, but this one is kind of obvious where now we're saying like,
[01:40:58] single page apps are a zero interest rate phenomenon.  I feel like any move to stateful servers is kind of,
[01:41:06] Like...
[01:41:06] Especially with the move of serverless functions and a lot of the push out of these kind of new distributed architectures and stuff.  Staple servers...
[01:41:17] don't seem...
[01:41:20] on the future from a directory part. I don't know enough about backend preferences, you know, to actually make this call, but just like where I'm sitting.
[01:41:28] I feel like me making that call is kind of similar to someone telling someone on the back end side, informing you that, like...
[01:41:35] Offline first, PWAs were a thing, but everyone decided that wasn't a good idea.  See ya.
[01:41:40] Okay.
[01:41:40] The more nuanced take, as I know, as a client dev, is that they are completely out of fashion right now and not really a thing.  But I would not be surprised if...
[01:41:51] give it like two or three years, that they bounce back.
[01:41:54] Thank you.
[01:41:56] I, you know, there'll be a situation for them, but stateful servers, I don't have enough insight to know why anyone would ever choose them unless they have a very specific need.
[01:42:15] Thank you.
[01:42:16] Thank you.
[01:42:17] You don't have to, but would you... I don't know. Would you want to? I mean...
[01:42:23] Thank you.
[01:42:24] Walmart is a stateful service for cart sessions.
[01:42:29] I guess there's different degrees of staples service.  There's a difference between keeping your session...
[01:42:36] Yeah.
[01:42:36] and keeping an active connection with every single user on your website.
[01:42:49] Thank you.
[01:42:53] To be fair, I was hot on serverless years before I used Netlify or even was a
[01:43:00] really aware of Netlify.
[01:43:03] I was right on AWS through the mid-2000s.  I've realized Netlify existed at that time,  but honestly, I was not...
[01:43:11] as connected to the dev
[01:43:13] that part of the dev world. I was writing Knockout and doing serverless AWS.
[01:43:23] Thank you.
[01:43:26] Thank you.
[01:43:29] Thank you.
[01:43:34] .
[01:43:36] Yeah, exactly. I know Netlify existed, I just was not paying attention.
[01:43:45] Thank you.
[01:43:48] Okay. Sorry, I get pulled into chat too easily.
[01:43:59] Anyway, so getting kind of more on the HTML partial side, let's try and move this forward a bit because...
[01:44:06] I
[01:44:07] Now let's define what I mean by HTML partial.
[01:44:12] HTML partial, I am talking about the act of swapping HTML
[01:44:18] in basically, I would say client-routed app, but isn't he happy client-routed?  Like literally, you have a web page and instead of like doing a full page
[01:44:27] navigation where you basically replace everything, unload, you know, all the JavaScript, you know,  we are in a place where we can swap
[01:44:38] part of the HTML.
[01:44:40] Right.
[01:44:40] *sigh*
[01:44:43] I think everyone can agree on...
[01:44:47] on that. What's interesting though,
[01:44:50] is that
[01:44:52] .
[01:44:57] This can happen in many different forms.  Obviously, we're aware of HTMX.
[01:45:04] Right. We talked about this.
[01:45:07] But also a couple other scenarios where you might want to consider HTML partials off the bat.  Obviously, RCs aren't HTML, but it's close enough that it fits our discussion.  But actually, the first one that I actually...
[01:45:19] think about from a declarative side is actually
[01:45:22] Islands.
[01:45:23] It is possible.
[01:45:26] to render
[01:45:28] something. Not all Islands frameworks support this actually.
[01:45:31] But they should.
[01:45:33] I think Astro actually might be one of the few ones that actually does.  I know Marco doesn't.
[01:45:37] But
[01:45:38] It should be possible...
[01:45:40] to render
[01:45:44] your island
[01:45:45] and pass it a prop
[01:45:48] that is not initially rendered.
[01:45:52] So picture...
[01:45:55] your island switches between two...
[01:45:59] panels.
[01:46:00] based on
[01:46:02] Some kind of state change.
[01:46:04] So you have a button.
[01:46:05] in your island and then it switches between panel A and panel B.
[01:46:09] Toggle.
[01:46:10] When you render on the server, you always show panel A, but when you press the button,
[01:46:15] it switches to panel B.
[01:46:19] you should be able to switch to panel B without going back to the server.
[01:46:26] Thank you.
[01:46:28] Mm-hmm.
[01:46:29] And this is something that Astro supports, which is awesome.
[01:46:33] As I said, I think all, like, from a completeness sense, all islands framework should support this.  That, to me, is also, can fall into this zone of HTML partials to a certain degree.  It's...
[01:46:48] It's less of a...
[01:46:52] you know, like,
[01:46:53] trip, so to speak, like you're not going back to the server and swapping a piece.  But if you think about it, you're taking a piece of HTML that has never...
[01:47:01] that wasn't there initially, wasn't part of the DOM necessarily.
[01:47:04] And you're inserting it.
[01:47:07] And...
[01:47:08] This has all the same considerations or characteristics that you would probably have
[01:47:15] if you navigated
[01:47:18] you know, like maybe did a few transition API or used HTMX or whatnot, because
[01:47:25] I'm like...
[01:47:26] If you insert, if you throw HTML on a page and then you call Hydrate in your favorite framework,
[01:47:36] It's only going to touch what's there.  It's not going to touch some piece that's not connected.  That's like,
[01:47:41] it's not even aware of, right?
[01:47:43] So from that perspective,
[01:47:45] This is also an HTML partial because it's not there at the
[01:47:48] at the immediate hydration time or beginning of your app.  So that's kind of like how I'm defining this.  When I'm talking about HTML partials,  I'm talking about insertion of HTML partials
[01:47:59] outside of
[01:48:01] Well, it doesn't have to be outside of the JavaScript framework, but basically that is outside of the hydration scope of initial page load.
[01:48:07] So these are all examples of HTML partials.
[01:48:11] Thank you.
[01:48:14] Chat's getting away from me. I'm sorry. I'm just like talking about stuff and they're like, oh, let's talk about Phoenix Live View.
[01:48:22] But yes, Turbolinks or Turbo is HTML partials.
[01:48:26] - Thank you.
[01:48:27] Um...
[01:48:28] Flamethrower is HTML Partial's
[01:48:31] Thank you.
[01:48:32] basically anything which seeks to render part of the page on the server
[01:48:39] and insert that part of the page at any point after initial page loader hydration.
[01:48:51] Thank you.
[01:48:52] Thank you.
[01:48:56] Thank you.
[01:48:57] Nancy Dan ever said that the client is also a server so...
[01:49:02] I mean, one of.
[01:49:03] *sigh*
[01:49:06] You guys are like getting into live view.
[01:49:08] Thank you.
[01:49:13] Thank you.
[01:49:16] Yeah, so what I'm talking about, yeah, I'm talking about like when you send a prop, a server prop into
[01:49:24] Yes, this counts too.  If you have a client component  and it's that same switch I was just telling you about  and you have
[01:49:32] You know, you pass props and then they're more JSX, so they're actually server children.
[01:49:36] When you insert or remove
[01:49:39] that prop.
[01:49:40] you know, like on that toggle button,
[01:49:43] It hasn't been processed before. React hydrated the visible tree. It's not going to hydrate the islands
[01:49:49] or client components that are in the non-visible tree, right?
[01:49:54] This all in my book is what I'm talking about when I'm talking about HTML partials.
[01:50:00] as opposed to the client just creating the HTML.  'Cause the difference is that the client
[01:50:05] Creates it. It runs...
[01:50:07] the function. It sets up and it basically renders it based on
[01:50:13] all the information it has because it has that information in the client. It's a very different
[01:50:18] when you have the server client divide, and if you have decided
[01:50:27] Sorry, I'm just... If you've decided that...
[01:50:33] State is here.
[01:50:36] and data is here.
[01:50:38] Okay, this is all I'm assuming at this point.  You've made this decision.
[01:50:43] Thank you.
[01:50:44] Thank you.
[01:50:46] Thank you.
[01:50:47] you
[01:50:49] Thank you.
[01:50:51] Okay, yeah, I know, I'm spending like a lot of time on definitions. I like lost 20 people talking about definitions.
[01:51:00] Thank you.
[01:51:02] Thank you.
[01:51:03] Yes, exactly. But the thing is like,
[01:51:11] There's a big difference between the props that you...
[01:51:14] like that are SSR across, like when you're just doing normal SSR without all the server component stuff, because there's no serialization boundary there.  So it's literally the code. You just send the code to render the thing.
[01:51:24] Whereas
[01:51:25] Server components
[01:51:26] that are...
[01:51:28] props to client components.
[01:51:30] get rendered
[01:51:31] at server render time, not on the client.
[01:51:34] So we're no longer talking about shipping code.  We're talking about shipping...
[01:51:39] partials.
[01:51:42] Okay, so...
[01:51:45] Thank you.
[01:51:47] Yeah, this is where, you know, there's two different considerations here because we're, I think we can break this down and talking about like the get side, like the rendering side, and we can talk about the mutation side.
[01:51:59] Because they both have like...
[01:52:01] implications.
[01:52:07] I just don't know what you're getting at.  I think we're agreeing.  I'm just categorizing this as
[01:52:14] as
[01:52:15] as a partial.
[01:52:18] I
[01:52:19] So,
[01:52:21] Thank you.
[01:52:22] Thank you.
[01:52:23] Thank you.
[01:52:25] The first consideration is
[01:52:28] that at any time
[01:52:30] after initial hydration.
[01:52:35] Because we already talked about the definition of hydration.  Hydration involves...
[01:52:41] the state matching. Even if you don't run the hydration code, you expect the state of the DOM to be in
[01:52:47] the state that the server handed it to you.
[01:52:51] So you expect that you don't have to look at the DOM, you can look at the state and know what's going on. So,
[01:52:58] The second...
[01:53:00] that state has updated.
[01:53:03] in the client.
[01:53:10] any HTML or any partial...
[01:53:15] cannot be server rendered. That's my first thing I'm going to put here as a constraint.
[01:53:21] Once.
[01:53:22] date
[01:53:23] is updated.
[01:53:26] Thank you.
[01:53:28] Partials can't hydrate.
[01:53:37] And
[01:53:42] Or rather...
[01:53:44] Client, what do I call them, islands?
[01:53:47] Can't hydrate.
[01:53:49] And
[01:53:50] Can...
[01:53:51] No longer...
[01:53:53] B
[01:53:56] That's what I meant to say. Once state is updated, islands can't hydrate and can no longer be server rendered.
[01:54:06] I... I...
[01:54:09] following so far?
[01:54:14] I guess a similar thing is
[01:54:19] Thank you.
[01:54:21] previous server rendered
[01:54:25] Thank you.
[01:54:26] islands
[01:54:28] and not
[01:54:30] B.
[01:54:31] Inserted.
[01:54:32] Okay.
[01:54:38] Thank you.
[01:54:39] Thank you.
[01:54:42] Thank you.
[01:54:44] And by islands, I'm just referring to client components.
[01:54:54] Thank you.
[01:54:55] Thank you.
[01:54:56] So these are actually two points. It's actually more like this.
[01:55:04] Islands can't hydrate. So,
[01:55:06] Thank you.
[01:55:08] Thank you.
[01:55:09] Thank you.
[01:55:11] They can't be server, cannot be.
[01:55:13] Can not be server rendered.
[01:55:19] Thank you.
[01:55:20] and previously rendered can't be
[01:55:23] cannot be inserted.
[01:55:27] Okay.
[01:55:34] Thank you.
[01:55:39] Could you describe the benefits? Is it not just running less JavaScript on the client?
[01:55:45] You're right. Okay, we need...
[01:55:46] Maybe a little bit more background here.
[01:55:49] Um...
[01:55:50] The benefit...
[01:55:52] of doing HTML partials is the same benefit you get from, um, a lot of the same benefits you get from using multi, uh, MPAs type frameworks. If you know,
[01:56:02] Yes, that you never need to render this JavaScript in the client.  You can not ship the JavaScript.  You cannot you can avoid running the JavaScript.  And even in a lot of cases, you can avoid serializing the data that would be needed to hydrate said JavaScript.  So it's actually a triple win.  So if you have pages that are fairly uninteractive, you can basically
[01:56:22] disappear the JSON,
[01:56:24] disappear the JS and disappear the CPU time.
[01:56:27] It's
[01:56:28] Basically win, win, win, win, win.
[01:56:30] Uh-huh.
[01:56:31] Except for...
[01:56:32] some of the fun complexity here. To be fair, you could argue that those pieces
[01:56:37] only matter on first load.
[01:56:40] But it's... there are DX considerations. If you can force things into a single model, then you can make certain assumptions that, you know...
[01:56:54] You know, you can make certain assumptions, essentially, that can make it easier to reason about the
[01:56:59] work of your app you're not just like i think one of the hardest parts about  quick for some people even though i don't think it's a wrong assumption is
[01:57:07] If you look at any quick code,
[01:57:09] Other than where there's a server function, which is like an RPC call,
[01:57:12] You.
[01:57:14] probably aren't going to be able to say what runs on the client or what runs on the server.
[01:57:18] You will be like,
[01:57:21] For some people that makes it harder to reason about, right?  This is part of that split where between
[01:57:27] always keeping a client-like mentality.
[01:57:30] versus not, but there's trade-offs. If you do, you have to be aware of serialization boundaries. One of the very nice things about the server component design is that
[01:57:42] and Island's design is that
[01:57:44] use client or this is an island
[01:57:46] is the serialization boundary.
[01:57:49] you know 100% like that's where things are going to be serialized.
[01:57:55] and it's a defined point that is pretty easy to control. It's not
[01:58:00] all over the place.
[01:58:02] Thank you.
[01:58:03] And it's like, this is the spot.
[01:58:07] Thank you.
[01:58:09] Right. The thing is,
[01:58:14] It's ranges. If we
[01:58:17] We could.
[01:58:19] The thing is, SSR is still fine.
[01:58:21] Because basically all SSR apps turn into client rendered apps.  It's only when we get into these new partials type things
[01:58:28] I don't know what to call them infrastructures that we actually get to a point where there's an argument because
[01:58:37] An SSR single page app has all the capability of a single page app.
[01:58:41] Except for...
[01:58:44] it might be more complicated to deal with libraries that were designed only to work on the client, to put them on the server.
[01:58:49] But other than that, it's fully capable.
[01:58:52] The challenge we've been having is can we make...
[01:58:57] fully featured applications
[01:59:00] in other
[01:59:01] architectures.
[01:59:02] Now,
[01:59:04] Thank you.
[01:59:05] Thank you.
[01:59:07] If you have a stateless back end, the answer to that question is,
[01:59:12] Um,
[01:59:14] becomes kind of hard because like
[01:59:15] If you have an MPA...
[01:59:17] multi-page app, you are throwing away  the state every  single time you navigate. So like,
[01:59:23] it doesn't lend particularly well.
[01:59:25] But the whole premise of the RFCs
[01:59:28] and I think some people are exploring this also with islands and stuff.  I mean, we were with Solid Start and Solid Islands routing, is that if we can keep the client state,
[01:59:38] Can we bridge the gap?
[01:59:40] with these kind of models so that we can get the benefits
[01:59:43] that MPAs already enjoy.
[01:59:45] in terms of initial load, less JavaScript execution, the win-win-win I just talked about.
[01:59:50] yet make
[01:59:52] applications.
[01:59:55] Because like...
[01:59:57] Thank you.
[01:59:57] Thank you.
[01:59:58] I think when you start...
[02:00:00] looking at this premise, looking at these definitions, you can start understanding why I'm like,
[02:00:05] Why usually, you know, I'm not like, oh yeah, this HTMX is like B.
[02:00:11] I don't really care how the HTML partials come.  I don't care if you put partial in a fresh component or whatever.  They have partials in fresh or use HTMX or...
[02:00:19] You know, I care about the complete packages that can tell a consistent story.
[02:00:27] Thank you.
[02:00:28] Yes.
[02:00:30] But we're...
[02:00:32] But we...
[02:00:34] Well, this is...
[02:00:36] I mean,
[02:00:37] I'm putting these rules out here.
[02:00:40] But
[02:00:42] Thank you.
[02:00:47] This would apply to Astro here.
[02:00:56] You're saying that like the case of trying of coming up with a solution that serves everyone is very niche.
[02:01:06] Sorry, I'm not quite pulling.
[02:01:09] Thank you.
[02:01:14] Oh, UI where we say multi-static UI and interaction.
[02:01:19] Um, yeah, yeah, good examples of this.
[02:01:23] Um.
[02:01:26] Probably content sites.
[02:01:29] But those don't even interact that much.
[02:01:31] E-commerce is right on the side where I say like...
[02:01:35] Because they care about performance, this is like the sweet spot.
[02:01:39] because a lot of times there's just the cart.
[02:01:45] Thank you.
[02:01:51] Thank you.
[02:01:52] Always one of the worst friends like Next couldn't do without data and needed to hydrate it. Always had juice.
[02:02:01] I mean, that's what they do do.
[02:02:05] I always wondered why framers like Next  couldn't do without the data it needs to hydrate  and always had to JSON-streetify this data and print it in the document.  Oh, yeah, okay, yeah.  Well, because...
[02:02:13] If you rerun this function...
[02:02:16] You need state, essentially, or data.  Like you basically need the starting point. Okay.
[02:02:23] What's RSC not to derail? React server components. Sorry. That's not derailing. That's core information. React server components are very important. If I say RSC is a bunch and you don't know what we're talking about, then this conversation probably will not make very much sense.
[02:02:36] Yes.
[02:02:38] All right.
[02:02:41] Thank you.
[02:02:42] Thank you.
[02:02:44] Thank you.
[02:02:48] Well, it comes down to where I'm getting to these pieces because I,
[02:02:56] Okay.
[02:02:57] An MPA.
[02:03:00] isn't,
[02:03:01] a state for
[02:03:03] Like it's not a persistent stateful client app is the best way I can put it.
[02:03:09] Like...
[02:03:09] It just swaps this out. Every page is a new application. So
[02:03:13] Astro gets a lot of love because it's simple.
[02:03:16] because
[02:03:18] You just go?
[02:03:19] You put your stuff on it, you have no expectations.
[02:03:22] There's no partials, no weird rules, and just
[02:03:25] Pluck, pluck, pluck, pluck.
[02:03:27] Each island is already kind of set up not to communicate with each other.  Like to be fair, you could have shared state.  I think if people were commonly sharing state,
[02:03:36] they would have perhaps more complaints.  But then like the other fun part about this is like,
[02:03:46] Because of MPAs, you sort of have the, like...
[02:03:49] It resets every five minutes.
[02:03:51] scenario. Like, basically, you never get into, like,
[02:03:54] weirdness.
[02:03:55] because like
[02:03:57] Like what's the worst thing to have to navigate the next page and all is forgiven?
[02:04:03] Right?
[02:04:04] Next is trying to do the same thing.
[02:04:07] thing but
[02:04:09] persist client state, is trying to build applications with an Astro-like architecture.
[02:04:14] And that's where all the complexity comes in and why we're talking about it today.
[02:04:23] Thank you.
[02:04:24] Let's hit down, do it again.
[02:04:31] No, but it's like...
[02:04:34] Okay, now we're talking the other side. Before we had the defend from the CSR people, now we're talking
[02:04:39] MPA side. It's like...
[02:04:43] do you serialize all that state every time? Like someone collapses a navigation bar or someone changes like
[02:04:49] You could probably put it in the URL and then have it server render properly.  But what I'm getting at is like,
[02:04:56] Go build TanStackTable.
[02:04:59] And then every time you...
[02:05:02] try and do an operation on that table it's a form post like or like that's like it does a  full page reload like i'm using extreme here but i'm just trying to like show that like
[02:05:12] reloading in all that data,
[02:05:15] resetting the state back to the right way,  re-
[02:05:19] You know, I guess you can server render in that case, but like
[02:05:24] I mean, at that point, you wouldn't hydrate either.  But like every interaction now is like a full trip, right?
[02:05:30] Like basically if you think that you can get away
[02:05:34] without client state, then this whole discussion is mute.  I'm saying that because people want responsive UIs, you can't.
[02:05:49] Oh, niche in the case of a deterrent something that only happens on server that doesn't have state or JSI. It's actually a large portion of certain types of pages, right?
[02:05:58] - Thank you.
[02:05:59] Maybe you don't need that spa.
[02:06:07] Here's here's some light reading for everyone from
[02:06:13] from
[02:06:19] Thank you.
[02:06:21] From uh... oh no what happened? These tweets are gone?
[02:06:27] Has Twitter changed their tweet format or something? I gotta look into that. That's sad. Anyways, this is Michael Rawlings.
[02:06:34] But like,
[02:06:36] These are kind of...  Maybe not the obvious things,  but you can take this in scale.  Like, if you go...
[02:06:44] to like
[02:06:45] Let's go to eBay.com.  How much interaction do we actually have here?  We have search.  We have the header bar on the top.  Most of these are links.  I guess the cart...
[02:06:56] is something because when I hover it, it actually shows my card notifications.
[02:07:02] Link.
[02:07:04] None of this is really interactive. I can like this, put a heart on it.
[02:07:09] Um...
[02:07:11] Link, Link, Link.
[02:07:15] Mmm.
[02:07:17] Link, link, link, link.
[02:07:19] Language.
[02:07:21] Probably a link actually, although this popover is interactive.
[02:07:27] Like, at eBay, we reduced the size of this. The difference between partial hydration and not partial hydration on this page was an 80% code reduction.
[02:07:39] It moved the core code from being close to 500 kilobytes of JavaScript down to...
[02:07:46] About.
[02:07:46] 80 kilobytes of JavaScript.
[02:07:49] That was back in 2017 or 18, but...
[02:07:55] Yeah.
[02:07:56] Yeah, those were Dan tweets.
[02:08:01] Already pro...
[02:08:02] Oh yeah, that's no fun.
[02:08:12] Thank you.
[02:08:15] We should stay from my article about drive state when we talk about this, but trust me,
[02:08:20] Synchronization is always worse than derivation.
[02:08:23] Um,
[02:08:26] But getting back to this,
[02:08:29] Hopefully,
[02:08:30] you can understand that
[02:08:35] I mean, people who watch my streams know this.  I can take the same mostly static site,  like the Hacker News demo.  If I load this in Marco,
[02:08:44] And I loaded in--
[02:08:45] any SPA framework SSR solution,
[02:08:50] and load a nice hefty page  or several hundred comments or whatever,  the Markle solution is going to be like,
[02:08:57] double the speed.
[02:09:00] Like it actually makes a significant difference  when there's heavy data serialization.
[02:09:04] you know, when there's lots of
[02:09:06] uh,
[02:09:07] when there's lots of CPU execution,
[02:09:11] In that case, there's not a lot of code, but it can also make a difference when there's a lot of code as well.
[02:09:16] In fact,
[02:09:17] Start.solidjs.com
[02:09:19] I made this an MPA, um,
[02:09:22] just to test our stuff out.
[02:09:25] And our life-growth score improved by seven points, which isn't a big deal.
[02:09:31] You might be going like, okay, well, why even bother with this?  Like, who needs an MPA, right?
[02:09:36] It was fun. This page, because of all the markdown processing and all this stuff, even with SSR, was about 100 kilobytes.
[02:09:45] um that includes this 30 kilobytes search now it's 40 kilobytes including this
[02:09:51] or sorry, 35 kilobytes search.  Now it's 40 kilobytes, including this 35 kilobytes search.
[02:09:57] So, like, there are sites, you know, where you just need a search bar or a tooltip or, you know, stuff.
[02:10:08] Anyways.
[02:10:11] I know, I know, I know, I know. I should have been more clear. I'm not going to talk about Marco 6. Marco's history is still very important because Marco...
[02:10:20] Yeah, I'm just not talking about Marko 6.
[02:10:25] Yeah.
[02:10:26] I meant Marco 6.
[02:10:29] Anyway.
[02:10:31] Sorry, I haven't kept on Twitch. Have I missed some...
[02:10:36] Oh, I did. Wow.
[02:10:38] Seven gift subs. This like never happens. People don't sub on my channel. I very, very much appreciate it.
[02:10:44] Um,
[02:10:45] Thank you.
[02:10:46] Um,
[02:10:50] Thank you.
[02:10:50] Thank you very much, the leg.
[02:10:53] The leg arm.
[02:10:55] That's...
[02:10:57] I'm
[02:10:57] Oh...
[02:10:59] That's very cool.
[02:11:01] All right. And also,
[02:11:04] I can't pronounce names.  Blalan05.  Subscribe with Prime.
[02:11:15] Oh, and there's more six gift subs before that. I think there's like 14 gift subs altogether. I'm just like catching up here. I'm...
[02:11:22] This is... Thank you very much.  No, I know, Dave, you subbed at the beginning of the channel.  It just...
[02:11:28] I don't have very many subs.  I'm not keeping a sub count.
[02:11:37] Oh, there's a hype train. Level two. I don't even think, I think the last time we saw a hype train on this channel for Twitch subs was almost eight months ago.
[02:11:48] Thank you.
[02:11:51] Thank you.
[02:11:51] Thank you.
[02:11:54] Thank you.
[02:11:54] Okay.
[02:12:00] Thank you.
[02:12:01] Thank you.
[02:12:04] What are we doing on eBay? We're talking about where MPAs make sense.
[02:12:08] But we're going to get back here.
[02:12:11] Because we're talking about...
[02:12:14] HTML partials and
[02:12:17] Basically what I'm calling the rules of HTML part shows.
[02:12:22] Thank you.
[02:12:24] Something else happen?
[02:12:30] Angular is the best. Gifting 10 gift subs. Thank you very much. Seriously.
[02:12:39] And that username.
[02:12:42] Thank you.
[02:12:42] You guys aren't being very nice.
[02:12:46] Thank you. Also, I mean, this seems like a good moment as ever to remind people to like the video.
[02:12:56] Likes are free.
[02:12:58] I was told Theo says that, so I should say that.
[02:13:03] *laughs*  Have fun with it. The funny thing... yeah, anyway.
[02:13:13] So...
[02:13:15] All right.
[02:13:20] Thank you.
[02:13:21] uh
[02:13:22] Thank you.
[02:13:26] Thank you.
[02:13:28] So yeah, no, this is very cool. Oh, wow, what? They're still coming. How many gift subs are there? Sorry guys, I'm not used to stopping the stream, but I
[02:13:38] Thank you.
[02:13:39] 10...
[02:13:40] Is this another...
[02:13:42] They've gifted a total of 51 gift subs to the channel.
[02:13:45] Yes, no, thank you very much. Angular is the best.
[02:13:50] What? They're still coming in. Another 10. 61. Okay.
[02:13:54] I don't know.
[02:13:57] Yeah.
[02:14:00] Yeah, that's crazy.
[02:14:01] Um...
[02:14:04] Sorry, I'm just like trying to catch up with the chat here and I'm just like, it just keeps on rolling. This is not usual.
[02:14:12] Um...
[02:14:15] Thank you. And I'm sure all these people appreciate the subs.
[02:14:21] See, that's the problem. I don't have a special place in the solid Discord for you. No T3 secret club or whatever.
[02:14:33] *laughs*  *laughs*  I got signals first.  *laughs*
[02:14:40] Thank you. Angular is the best.
[02:14:42] - -
[02:14:43] That's funny.
[02:14:45] Oh...
[02:14:47] Thank you.
[02:14:48] Thank you.
[02:14:48] Anyway, um...
[02:14:56] So, where are we?
[02:14:59] I don't know if people follow why these rules exist.
[02:15:05] But this is real.
[02:15:07] I'm not making this up.
[02:15:09] Thank you.
[02:15:10] And it doesn't take much to think about it.
[02:15:13] You have a client component.
[02:15:15] Thank you.
[02:15:17] that has a condition.
[02:15:18] That says...
[02:15:21] State.
[02:15:22] If it is true,
[02:15:24] Brand yourself.
[02:15:26] Else, if it's false, render something else.
[02:15:29] Okay.
[02:15:31] If you render your page, and the state matches,
[02:15:40] And when I say "state", I don't mean like in the component. I mean like...
[02:15:44] in a context provider or a global state or something that lives outside of whatever scope  we're talking about, somewhere that's reachable.  So it's persistent client state that lives outside of the component.
[02:15:53] Thank you.
[02:15:56] Once you update it and you switch your view in your client's state, it doesn't matter if those children are more server children or more client children, you'll see the new stuff and everything works because you have the code for the client to render that and you have any server children that have already been rendered so you can insert those. You're good.
[02:16:13] Right? Except
[02:16:16] What if one of those server children,
[02:16:21] was rendered on the client... sorry, was rendered on the server and was hidden initially.
[02:16:27] And
[02:16:28] It also had a switch like that.
[02:16:31] Well,
[02:16:32] It would have been rendered with, you know,
[02:16:35] the initial value of false, the same as the original one.
[02:16:39] So,
[02:16:40] when you switched it to true,
[02:16:42] and go to hydrate that island
[02:16:44] When it reads the state of true and tries to hydrate, it will see the wrong DOM nodes and the hydration will fail.
[02:16:52] Thank you.
[02:16:55] Right? And this is just from toggling a navigation. This isn't from going back to the server at all.
[02:17:01] It's simply the fact that the state has changed,
[02:17:03] And when it was originally rendered,
[02:17:07] the state was different.
[02:17:09] That's the second one here, which really
[02:17:13] Should, I guess,
[02:17:14] for our sake be the first one.
[02:17:17] Right?
[02:17:20] The next stage of this is
[02:17:25] Mm-hmm.
[02:17:27] If I'm navigating and doing an HTML partial, you know, swapping something,
[02:17:33] And I go to
[02:17:34] render my island,
[02:17:36] on the server again
[02:17:39] it's going to read some initial copy of that client state that shows it false.  It doesn't know that I clicked the thing in the client and updated it. So when
[02:17:49] the HTML comes in,  the island will...
[02:17:52] again, have the wrong state and fail the hydrate.
[02:18:01] Thank you.
[02:18:03] It cannot longer, can no longer be served.
[02:18:09] So,
[02:18:10] Are you guys following?
[02:18:12] Everyone's like arguing who had signals first.
[02:18:15] I'm sorry.
[02:18:20] Right. I mean, you could just fail and bail out. But the thing is, like, it is an interesting...
[02:18:27] thing, right?
[02:18:30] Thank you.
[02:18:33] So...
[02:18:35] This is the first complexity that comes with any HTML partial solution.
[02:18:40] Basically...
[02:18:46] The version, essentially, that is serialized into props,
[02:18:52] or comes from the server itself.
[02:18:57] Thank you.
[02:18:58] Later.
[02:19:00] like from an HTMX or wherever you're getting your partial from,  from your fresh,  whatever,  um,
[02:19:05] where it has to not client render.
[02:19:09] essentially.
[02:19:10] You want it...  Or not server render the client components of the islands.  It's okay if they do...
[02:19:17] initially.
[02:19:19] because we're making hydration guarantees. To be fair, you could always just client render these little pieces.
[02:19:25] But that's not going to help us with our solution.  I don't know.  Have you ever been...
[02:19:30] to a login page that's built with a...
[02:19:34] Single page app framework.
[02:19:36] It's really, it still makes me laugh sometimes.  Because you load the page, you see the card in the background, and then the login page.
[02:19:44] controls snap into the page.  And you're just like, seriously,  all this phase does is do a single post.  Like, you're probably going to do  a full page post anyways  because you need to like...
[02:19:56] *sniff*
[02:19:57] I guess it depends on the architecture, but often  to do the proper OAuth handshakes and stuff, it involves actual redirects.  I know there's client versions, but then you have a different key you need in the client.  I mean, it's fine, but my point is basically to post a form  you just went and...
[02:20:16] like loaded in.  So obviously if you're using a framework like Astro or HTMX or whatever thing,  you're going to just like be like,  screw this.  I'm just going to treat this like it's server anyways.  And just do the post.  I'm not going to bother with any client islands,  but my,  because that is not a very stateful app,  so to speak.  But my point is,
[02:20:34] We wouldn't be here in the first place if we weren't trying to actually server render these client components like that makes the difference when you load the page when you want to see we already talked about why CSR is.
[02:20:44] is not the best, like especially when most of your content has to be loaded dynamically.
[02:20:49] Because, you know,
[02:20:51] Well, I mean, we'll get to that with a mutation story.
[02:20:57] Thank you.
[02:20:58] Thank you.
[02:21:00] It doesn't. That's what I'm...  Okay, okay, you're talking to cyber.  Who's...
[02:21:06] Ah...
[02:21:07] But
[02:21:09] Yeah.
[02:21:10] Thank you.
[02:21:11] Yeah, VHDL is the winner.
[02:21:13] Actually, let's go back to Lanpar in 1969, like inventing the spreadsheet or whatever.
[02:21:24] Thank you.
[02:21:25] Thank you.
[02:21:27] but like you get the biggest premise like it doesn't matter if you can
[02:21:34] persist the island so to speak or whatever like the the core piece of htl partials on the get  side that are tricky is it's not even that hard like you can just be like oh
[02:21:44] This is one of those two conditions.  Just make sure that we, you know, the islands from now are client load.
[02:21:53] Right?
[02:21:54] you know,
[02:21:57] I mean, it's not hard.
[02:21:59] to solve that piece of the puzzle.  I just wanted to kind of like throw that out there.  I mean, it is a little bit hard  depending on the architecture that...
[02:22:07] It makes it harder if you have to serialize. Okay, here's a little food for thought. If the
[02:22:15] If the form of the...
[02:22:17] HTML you insert is different than the form of the prop you have to serialize.
[02:22:22] Okay.
[02:22:24] it does become a little bit more interesting,  um,
[02:22:28] When it comes to life cycles.
[02:22:31] Picture this scenario.  You have an island.
[02:22:35] That...
[02:22:36] has
[02:22:37] Thank you.
[02:22:38] Um,
[02:22:39] our switch again, right?
[02:22:41] And
[02:22:43] When you...
[02:22:45] Render the initial HTML.
[02:22:49] You render the page and it has some islands in it and some, you know, staple little interactions.  And OK, that's fine.
[02:22:58] And.
[02:23:00] You did the right thing when you serialized...
[02:23:03] The prop.
[02:23:05] you know, like the one that's not shown.
[02:23:07] you didn't render the client island. You did that right. So now when it shows it, it's actually going to client only it.
[02:23:13] So that works when you switch.
[02:23:15] And then you switch back.
[02:23:19] When you switch back,
[02:23:22] should you get the thing you originally inserted?
[02:23:26] That will work because you never disconnected it.
[02:23:29] so to speak, or should you actually render it again?
[02:23:35] And I mean, this is a debate.  I think...
[02:23:37] I think in Astro for us right now, it actually never, like things that get uninserted never get released.
[02:23:42] so to speak. I think. I could be wrong.  But my point is...
[02:23:46] -
[02:23:48] The format of the...
[02:23:50] thing that you insert in the HTML.
[02:23:52] is not the same format as the prop.  And if you needed to...
[02:23:56] go from the rendered thing back to the serialized format for the prop, the one that doesn't render the islands,
[02:24:02] Like that would also be an extra step if you wanted it so that like,
[02:24:06] Every time you inserted it, it was new again.
[02:24:09] Which...
[02:24:10] might actually be the correct behavior because people might want to like
[02:24:14] release or free up the resource of the thing that was already inserted.
[02:24:18] So if you're not just taking the exact same Dom node already hydrated node, just detaching it and attaching it again, if you're actually like,
[02:24:24] tearing it down and rendering it again, it means that like,
[02:24:28] One of the reasons that
[02:24:30] Islands frameworks can avoid
[02:24:32] the double data problem,
[02:24:35] of serializing is because
[02:24:38] they've already rendered it into the HTML and they don't need to hydrate it.
[02:24:42] If you're rendering the HTML and you're
[02:24:45] rendering a different prop version of the same HTML, so you can reinsert it a second time.
[02:24:50] you just reset the double data problem.  Like, it's not...  You didn't solve the double data problem.  In fact, React server components  don't solve the double data problem  because...
[02:25:00] Even if something's inserted in the DOM, they still send it serialized as props, which means they send it twice.
[02:25:07] So like this is this is kind of the challenge going from islands right now where you can always trust to hydrate.
[02:25:14] or you always have the DOM,
[02:25:17] And to a place where you...
[02:25:21] Like...
[02:25:22] are trying to persist the state
[02:25:24] that lives outside.
[02:25:27] Unless you have solutions that...
[02:25:31] Basically, what did I say the three things you have to do are to solve this?
[02:25:36] Yeah, because I was giving a list here, but this is more of like
[02:25:39] This is more of just like a rule.  And then like the things that you do to solve it is,
[02:25:44] Client.
[02:25:45] Client.
[02:25:47] Load...
[02:25:48] after
[02:25:49] and
[02:25:50] Client load in...
[02:25:54] props, slots,
[02:25:55] .
[02:25:56] that aren't shown
[02:25:58] Shown.
[02:26:02] and then two
[02:26:06] Thank you.
[02:26:09] reverse
[02:26:11] inserted
[02:26:12] templates,
[02:26:13] into
[02:26:16] Client load.
[02:26:18] Essentially.
[02:26:20] If you can do those two things...
[02:26:23] then an island solution basically can can
[02:26:27] can handle state that's persisted outside of it.
[02:26:32] This is basically how React Server Components work, for people trying to jump from islands to server components.  But it also means for stuff like HTML as well, you would also have to do this yourself.  Because otherwise, if you don't do number two, you actually don't solve the double data problem.  At which point, I mean, it's fine.
[02:26:50] But this is actually why
[02:26:52] when we do stuff like the Hacker News benchmark.
[02:26:56] you'll see client-side spas,
[02:26:58] 48 Lighthouse scores.
[02:27:01] you'll see
[02:27:02] Marco Islands, Astro Islands.
[02:27:05] quick
[02:27:08] 85. These are all MPAs.
[02:27:10] And then you'll see React server components like 62.
[02:27:15] like in the middle. It's because they don't solve the double data.
[02:27:19] And you don't solve it unless you solve this.
[02:27:21] Okay.
[02:27:23] So,
[02:27:24] Just, uh...
[02:27:25] just kind of like talking about,
[02:27:29] from the what do I want to call this?
[02:27:31] from the render.
[02:27:33] perspective.
[02:27:36] The get, so to speak.
[02:27:38] kind of
[02:27:39] thinking about partials here.
[02:27:44] Solve by...
[02:27:46] Okay.
[02:27:47] Right.
[02:27:48] Thank you.
[02:27:53] is basically the only way of solving the double data problem  reading the domination health yeah except that's impossible as well i mean you're
[02:28:01] I talked about this a while ago in a hydration article, but like you, you,
[02:28:05] The final... I mean, this is relevant here, because it's probably the second point is...
[02:28:12] Yeah, let me explain this.
[02:28:20] Thank you.
[02:28:22] - 'Cause like one of the coolest things about  this stateless approach that we're talking about right now,  that makes it different than ASP.NET and like Update Panels
[02:28:30] And
[02:28:31] One of the reasons I like HTMX versus like...
[02:28:34] ASP.NET. It doesn't presume that you need a stateful server and it doesn't presume that you have transfer stuff back. In fact, this architecture doesn't, it's assuming that you're not sending all the client state back to the server each time. Because if you could, then these rules wouldn't apply. But then you'd be back in view state hell where you're like literally trying to serialize the app back and forth on all the requests. You don't want to do that. This model assumes that the client is the only thing that is stateful.
[02:29:00] Um,
[02:29:01] and that you don't want to pay that serialization cost both directions.
[02:29:06] it's yeah but now you're doubling it right
[02:29:12] Thank you.
[02:29:13] Like, my next point...
[02:29:15] Because this was my first point.  Once state is updated, you can hydrate.  The next point that I want to put on get here,
[02:29:22] It's like, so maybe I should be like, I don't even know I can partially color code stuff.
[02:29:28] No.
[02:29:28] I put this all part of the same text blocks, unfortunately. It's fine. Whatever. Let's continue going. Um, the next thing that I want to talk about here is HTML is lossy. Okay?
[02:29:40] Which is right on point.
[02:29:45] It.
[02:29:46] It is the final...
[02:29:48] output.
[02:29:52] Thank you.
[02:29:53] Thank you.
[02:29:58] Thank you.
[02:30:00] Yeah, I mean, the problem here is that
[02:30:04] If WebSockets...
[02:30:06] Like, well, WebSox is stateful backend, right?  So then, yeah.  Yeah.
[02:30:10] Yeah, so then that's already been kind of discounted from the discussion here.  I'm assuming you can't get a staple back end.
[02:30:17] Okay.
[02:30:18] Thank you.
[02:30:19] Thank you.
[02:30:20] What I mean by this is in two forms.
[02:30:25] What is it?
[02:30:26] Sorry, I'm going to pull one of my other articles.
[02:30:29] hydration
[02:30:32] Why is efficient hydration geological framework so challenging? Okay.
[02:30:36] Drop this one in.
[02:30:40] Okay, so there's a really cool library from the guy who's working on Esno where
[02:30:47] I love the compiler work he does.  And he...
[02:30:53] Bye.
[02:30:53] thought, well, let's where is it? Yeah, yeah.
[02:30:57] What if we could extract data from HTML before he came up with the new TypeScript compiler he's been working on? He came up with a compiler whose point was to try and pull the data back from the HTML to solve the double data problem.
[02:31:11] Thank you.
[02:31:11] But
[02:31:15] if you have derived data, trying to get it back to the original source to re-derive in many cases is impossible.  Basically, the thing is, like, what if you show date in the UI that's formatted for a specific...
[02:31:27] user preferences, certain locale or something,  and you need to change the date.
[02:31:34] And
[02:31:37] Thank you.
[02:31:38] Essentially, you only have the final date object, you don't have the original date. You might not have the seconds or milliseconds.
[02:31:45] What...
[02:31:46] The way he approached this was that he also, like in places where data was derived,
[02:31:50] put the data in
[02:31:52] as special attributes on the element,  so then he could kind of, like, get the base data again.  But my point is...
[02:31:59] If your compiler handles every detail enough that you can do that smartly, maybe that works. But generally speaking,
[02:32:06] All those locations, you still need double data.
[02:32:09] you're now weaving them into the HTML,
[02:32:12] And I mean, that has its own complexity because like who owns the initial source state versus the drive state?  It's clear that the drive state shows up here, but what if it's like you have the date in five different places?
[02:32:21] Like,
[02:32:23] .
[02:32:23] This is...
[02:32:25] Thank you.
[02:32:26] This is one of those problems that you can maybe solve it
[02:32:31] in like 70% of the cases,  but then like you spend eternity getting like the next 10 or 15% and you can  never get to the end.
[02:32:43] right?  Like,  this is,  this might be,
[02:32:49] I don't know, maybe someone will solve it. Right now it feels like a fool's errand. Um...
[02:32:53] Like,
[02:32:55] It's interesting.
[02:32:57] Because obviously with stuff like resumability, we get a very granular level of looking at
[02:33:02] Um, this kind of stuff.
[02:33:04] you know, like going into the markup and figuring out what belongs to what and making those data connections. But like,
[02:33:12] I think this is even beyond anything...
[02:33:15] that, you know, say Quix attempting.  So I just wanted to throw this out here.  It is a little bit difficult to reverse derivations when you...  HTML's lossy.
[02:33:28] HTML actually is...
[02:33:29] trickier than that because it's also structurally lossy too. I talked about this on my stream last week,
[02:33:36] But like...
[02:33:37] If you have a for loop,
[02:33:39] Or like you return...
[02:33:42] 10 divs from one HT with each with an island in it.
[02:33:46] Right. And you sort the order, like change the order, you know, of the models, so to speak, on the server.  So like you send it back with a different order again.
[02:33:56] The client,
[02:33:58] doesn't know...
[02:34:01] which is which. It could match it, but then you're basically replaced by index. It's like if you forget your key in React. That's essentially what the behavior would be because it wouldn't...
[02:34:12] Even, like, most of the time we're not worried about this.  Because the DOM...
[02:34:16] in
[02:34:17] The DOM can be stateful, like with animations, which makes it hard, but most people running  DOM morphing, like HTML morphing stuff, isn't worried about the  state of the DOM elements as much, because they're
[02:34:29] treating it like a VDOM, they're trying to like dip it. And it turns out the HTML
[02:34:33] Outside of say the islands. It's not stateful like you're not interacting with it. So in that case I
[02:34:40] a very dumb diff works, right?  Like you can just like, if it's a div and it stays a div, like who cares?  You swap an app to read or whatever, probably not a big deal.  But it's more interesting when you have like an input or when, um,
[02:34:55] Like, you know, basically you have these...
[02:34:58] Client components that have state in them and now they're you know
[02:35:03] the first time you did the list the order is 1234 now the next time it's 4321 and you're instead of
[02:35:09] swapping the elements, you're actually morphing the first into the fourth, the second
[02:35:14] into the third, the third into the second,
[02:35:17] And so on.
[02:35:19] So
[02:35:20] You know, there's a reason that the React team went with intermediate format, because like now they have their VDOM, which tells them like how to diff.  It's like, OK, this has this key, right?  You know, you have those keys in React.  We understand that this is a hole in the structure, right?  HTML doesn't have holes.  You could put comments in there.  But like.
[02:35:42] Thank you.
[02:35:43] I'm hoping I'm kind of impressing
[02:35:47] that
[02:35:48] Generally speaking, HTML diffing is non-keyed.  It doesn't keep model data in sync with the elements it's associated with.
[02:35:55] It...
[02:35:57] So between data and
[02:35:59] being lossy and non-keyed. This is a consideration when designing these solutions when you're using HTML partials.
[02:36:09] All right.
[02:36:11] Thank you.
[02:36:14] Well, I mean...
[02:36:20] Thank you.
[02:36:21] I'm explaining to you how I'm actually solving this, right?
[02:36:25] There are solutions to...
[02:36:30] Not...
[02:36:31] aware
[02:36:33] of
[02:36:36] code structure.
[02:36:38] I mean,
[02:36:39] Astro solves this.
[02:36:45] Right? One way Asker solves it is that you can explicit keys.
[02:36:51] you can do, right? And put them in the DOM.  They have, like, what?  Astro, Persist, whatever.  You can give it a name, and then  it will sing. So it's the keys.
[02:37:03] But I do wanna import
[02:37:06] Oh yeah.
[02:37:07] I do want to import
[02:37:10] And
[02:37:11] And the other thing you can do is, because islands are the only thing you care about,
[02:37:17] it's possible to do like
[02:37:22] You can do.
[02:37:24] For most cases,
[02:37:28] You can...
[02:37:30] use use like heuristics because you know the type of island like it's only when you literally have
[02:37:37] Siblings.
[02:37:38] that you kind of have this kind of problem, like when you have like the same type of thing next to each other, but like
[02:37:43] If someone has an island and you insert a few elements in front of it,
[02:37:48] and they're still just the one island, you kind of know it's the same island.
[02:37:51] Right.
[02:37:52] Thank you.
[02:37:54] It's not impossible, it's also not the most important detail, but I just wanted to talk a bit about this because
[02:38:02] you know,
[02:38:03] If you think you're going to build this yourself...
[02:38:05] with Astro or HTMX.
[02:38:09] Maybe you have to think about this.
[02:38:18] Okay.
[02:38:21] I think I made this one a little bit too big.
[02:38:24] Okay, so...
[02:38:27] These are just some things to think about here. This is on the get side.
[02:38:32] Right?
[02:38:33] So you start kind of understanding a bit why React design server components the way they have.
[02:38:39] They might start with something that's kind of simple, like an HTML swap.
[02:38:44] But then
[02:38:45] they needed to solve
[02:38:47] These
[02:38:48] problems.
[02:38:50] Although the second one is probably less of a big deal,  but they did need to solve these problems to get to RSCs.  Right?  This is what it takes to go from...
[02:38:59] Astro...
[02:39:00] to RLCs with a view transition API.
[02:39:03] or to try and make your HTMX work in a way that's predictable with client side
[02:39:09] stuff or take your fresh partials and make them work. Um, again, similar kind of,
[02:39:16] kind of consideration.
[02:39:18] Thank you.
[02:39:21] Okay. But so the React actually did a really good job on the get side, but let's talk about mutations now because
[02:39:31] Like,
[02:39:31] On this side, you can kind of picture that if you do everything right,
[02:39:36] you kind of get this best of both worlds. You get
[02:39:38] quick loads, you get client-side routing, you get, you know, you get persisted state,
[02:39:44] You get...
[02:39:46] So you get good performance, you get...
[02:39:49] you know you have your data everything works and you're pretty happy
[02:39:54] But...
[02:39:55] This is not the end of the story. Let's talk about mutation. You guys want to talk about mutation? I want to talk about mutation.
[02:40:02] or post or whatever. Because
[02:40:05] This is kind of
[02:40:07] Where I was struggling a bit this past week.
[02:40:12] So if you do have any water left.
[02:40:14] Thank you.
[02:40:14] Thank you.
[02:40:15] Thank you.
[02:40:16] Thank you.
[02:40:17] I went on Twitter like I often am off to do.
[02:40:23] and
[02:40:25] I posted something.
[02:40:27] "Mutation is a source of complexity in server component S models. Without mutation, diffing isn't required. You could just swap HTML navigation nested router style. There's nothing to persist or diff. But to update the data on the same page, now you need to re-render everything." Okay, let's talk about this.
[02:40:41] What I mean here is,
[02:40:44] Funnily enough,
[02:40:46] with everything that we've talked about so far,
[02:40:49] on the stream.
[02:40:50] You don't need... I did talk about lossy and diffing here.
[02:40:54] you know,
[02:40:55] But the truth of matter is you don't need to, like, why am I even worried about keys and diffing?  Why am I persisting islands?
[02:41:03] Is there actually...
[02:41:04] On the get side,
[02:41:08] If something wasn't inserted initially and then you insert it, well, in a client side library, you already know what's going to happen.  It gets rendered and gets put in.  There's no, you don't need to diff, right?  The operation is replace.
[02:41:21] and
[02:41:23] If you have a router,
[02:41:24] A nested router, like the one...
[02:41:26] that they have so nicely graceful on the on the remix docs page.  This one that does everything by section.
[02:41:34] If I switch between subscriptions and invoices here,
[02:41:38] Do I need to diff what's here? No, I just replace it with something new.
[02:41:43] If I
[02:41:44] If I switch between these invoices in the list, I just swap this.
[02:41:49] In fact,
[02:41:50] Even though I was talking about the diffing being a little bit problematic,
[02:41:55] The diffing actually isn't needed
[02:41:58] for just navigating around.
[02:42:01] while
[02:42:03] These rules up here about the state updated islands can't hydrate, client load after all, all this stuff has to be preserved.
[02:42:11] we can just ignore dipping and just swap. And in fact,
[02:42:14] Um...
[02:42:15] you know,
[02:42:16] Yeah.
[02:42:18] If you're doing these partial swaps,
[02:42:20] Do you have any...  Like, do these islands need to persist?
[02:42:24] Not when you're navigating to a new location. Now, if you're in this location already,
[02:42:30] and there's an option to do something here like refresh
[02:42:35] The...
[02:42:36] this list here or something. Maybe not the, you know, or like, update one of these or something. Well, that's a different case because
[02:42:45] You might.
[02:42:46] have
[02:42:48] you might have client state that lives in that component and you don't want to like reset it.
[02:42:53] Like,
[02:42:54] If the client state was out here,
[02:42:57] Sure, but what if it actually lives in this component because it doesn't need anything above here?
[02:43:02] In that case, you do want to persist the island.  What if...  The silly example...  The example people often give...
[02:43:10] might be like picture you're playing a video and writing a comment, right?
[02:43:15] Like...
[02:43:17] Often those will be in different sections, but pretend they were in the same section from a router perspective.
[02:43:23] adding a comment shouldn't make the video restart.
[02:43:27] Right?
[02:43:28] But when you first navigate to the page, you're safe to just swap that in.  You don't have to worry about the video persisting.
[02:43:36] And I think
[02:43:37] I think that's why I'm talking about mutation, because if
[02:43:42] You...
[02:43:43] you wouldn't actually need to like all the like fancy stuff if you were just navigating around you know
[02:43:50] Okay.
[02:43:54] Thank you.
[02:43:55] Thank you.
[02:43:57] And yeah, I have to admit, diffing VDOMs are very much set up for
[02:44:04] You know, it makes a lot of sense why React kind of arrived at this model.
[02:44:11] Of course, you can do really simple persistence, right? You can like
[02:44:14] Find all the islands.
[02:44:16] Replace the HTML and insert them in.  Restore input focus after the fact.  Basically grab the focus.  And you can do a pretty good, decent job.  That's what Astro does.  That's how we started our stuff.  Before we were doing diffs in the island router.
[02:44:30] Doing diffs is a bit better, obviously.  Um...
[02:44:34] Obviously a full key diff would be best, but short of that,
[02:44:39] Even a non-key diff is actually still pretty good.
[02:44:42] you know, elements kind of basically stay where they are.
[02:44:46] but I just wanted to point out that the only reason we're in Diff territory is that,  see, picture, if this was any other system,
[02:44:54] Um...
[02:44:58] And it was like dealing with client state, you might not have to diff. It's because everything's kind of tied together on the server. Once you do a change, like that whole panel is getting replaced.
[02:45:14] We're talking only loaders for a while and it's very minimal, but also the hub where you
[02:45:18] not very useful actions either. I disagree.
[02:45:21] I mean, maybe with Remix's loader design it wasn't very useful.
[02:45:25] Because they didn't... Remix has no... Yeah, okay. It's because Remix had no way to invalidate.
[02:45:33] Essentially.
[02:45:33] they just have to like call the granular,  like the coarse grain loader function.  The thing was like,
[02:45:40] We had load our data functions in the router for several years now.
[02:45:48] like it's a kisser
[02:45:50] four years-ish, little less.  But I've seen these patterns elsewhere,  so it's hard for me to put a date on it.  But the thing is, if you put like resources in it,  or tan stack queries in it,  where you actually have invalid date,
[02:46:03] invaluable data, then yeah, you don't need actions. But yes, without the invalidation story,  it's tricky. This is sort of where the challenge comes with RSCs and whatnot, because...
[02:46:15] Yeah.
[02:46:17] It makes sense to load all the data on the server. We decided that like half an hour ago, right? Let's load all the data on the server.
[02:46:26] Thank you.
[02:46:28] and arguably let's load in a server component, I guess, right?  Because then like, we're always loading on the server.  But the problem is,
[02:46:34] If you want the mutation story, you gotta...
[02:46:38] complete the loop. So data you load on the server, in the server components,
[02:46:45] has to be invalidated through a server component flow where it redraws the server component. If you don't want your data to trigger the whole server component to go, then you need to put it in the client component and load the data in the client component, which leads you to two different data fetching models, essentially.
[02:47:01] even though they both go back to the server, the reason is like...
[02:47:04] It's impractical from a very stateful, interactive, whatever situation.
[02:47:10] big table swap the column scenario.
[02:47:12] to
[02:47:14] you know,
[02:47:16] do one small change that's not even related to redo everything, right? There's a reason why
[02:47:22] You know, we use key based and validation these days and stuff like Tanstack and why like the guy who, you know, Tanner, you know, promoted that pattern to work really good in his applications.
[02:47:32] Um...
[02:47:35] I'm trying to see if I can find...  I wrote a HackMD, like I often do.
[02:47:40] Um...
[02:47:42] Let's sign in with GitHub.
[02:47:44] Um,
[02:47:47] Thank you.
[02:47:49] And I talk again about something that I've talked about
[02:47:54] a lot on the stream. And we talked about it a bit earlier today when we talked about GraphQL.
[02:48:02] Thank you.
[02:48:05] Thank you.
[02:48:08] When you start
[02:48:10] If you look at the history of mutation,
[02:48:15] in client-side specific apps.
[02:48:18] not talking about the history in server
[02:48:21] we've kind of backed out from the most optimal approach.
[02:48:26] and kind of tried to figure out like where we land.  Um,
[02:48:30] I
[02:48:31] As I said, you can tell
[02:48:33] that server components work really well from the get side.  But mutations, we, you know, let's see if they fit our patterns as well there.  It's kind of what I'm getting at, because I think this is the friction,  not just for server components, I think this is the friction for Remix too.  Because the Remix guys are all like,
[02:48:50] Look, our patterns, you can basically do everything you can do with a single page app.
[02:48:54] Why are people not feeling like they can build an app with Remix?
[02:48:58] Thank you.
[02:48:59] and
[02:49:01] Now they have even load level, route section level, like should...
[02:49:06] Should it reload, like should route reload?  But I think the problem is,
[02:49:11] The types of apps we're talking about here, which putting that pressure is,
[02:49:15] they would never want to run the whole route section again.  They would never want to reload all the data, not just for the whole page,  but not even for a particular route section.
[02:49:25] And in fact, they might want to reload data that's used in multiple route sections.
[02:49:31] Thank you.
[02:49:31] So let's talk about the mutation slippery slope.
[02:49:36] Direct mutation is where this starts.
[02:49:43] When you update a to-do in a list,  simply return the updated to-do,  and you're responsible for applying the update yourself.  So this is like when you go like,
[02:49:51] Amen.
[02:49:52] You basically do a fetch to like
[02:49:54] Put...
[02:49:55] a new title on it to do
[02:49:56] In a list.
[02:49:58] You know, you could be displaying the list, but then you, you like update it, the text,
[02:50:03] You know,
[02:50:04] And then you click out and it triggers the save.
[02:50:08] So you'd probably just do a simple fetch and then set the state.  Essentially, you might patch it yourself.  You might take the list of to do's.
[02:50:15] and then go, okay, find the to do with this ID, update the data,
[02:50:19] you know, like we're talking maybe in Redux, and just set the new state,
[02:50:24] and then your component will update.
[02:50:26] And the pros of this approach is complete control of how
[02:50:29] the change happens. It's a single flight mutation. You basically do a post, get the data back in the same request,
[02:50:35] You don't need caching for this.
[02:50:37] And mutations are arbitrary. They don't need to be a thing. They don't need to be like an action. You just like literally call it, you know.
[02:50:44] I think we've all done this before.
[02:50:55] Thank you.
[02:50:57] Thank you.
[02:51:00] .
[02:51:03] Yeah, I sometimes wonder though...
[02:51:10] If anyone tried to build
[02:51:12] the expectation, the type of apps we did today with jQuery. See, I was building
[02:51:17] social media apps.
[02:51:19] type things just coming straight out of jQuery. And I, I definitely did not feel like jQuery was simple at that point.
[02:51:29] but I mean, everyone's done this before.  And the pros, obviously, I just talked about,
[02:51:35] The cons are you always require manual mutation to apply changes. At least
[02:51:39] some cases, even with defined schemas like GraphQL, what I was talking about is like, in a sense, even the normalized cache for GraphQL has a sort of
[02:51:49] thing to it. I realize that that's more automated.
[02:51:53] But like...
[02:51:55] Generally, when you are doing this level of granularity on your updates...
[02:52:00] you almost always need to directly know like,
[02:52:04] where I'm updating it. And sometimes that's not in a single location, right?  Difficult to apply chains that pack more than one resource. Like if you have a REST API,
[02:52:12] Like, sometimes that's not, like, a good fit.  Graphic World's better, obviously, because, like, your mutations are, like, a defined series.  But, like, picture...  Like, they're, like, an RPC, basically.  But, like, picture, like...
[02:52:25] you have to do something that actually affects multiple resources, multiple places on a page.  It gets a little complicated.
[02:52:31] And obviously all data is required in the browser as you need to manually update it, right? Like
[02:52:36] That's kind of a given.
[02:52:39] Thank you.
[02:52:41] Thank you.
[02:52:42] I'm not saying we could stick on GraphQL, but let's continue going. Key-based revalidation or query cache-based thing. I kind of skipped over GraphQL because it's like an optimized version of the first one where we automate it. This is where you just kind of go, you loosen up a little bit. You're just like,
[02:52:59] Thank you.
[02:53:00] If a to-do changes, I'm just gonna update to-dos.  I'm not gonna worry, maybe I'll update to-do ID one,  but I'm not gonna like get to the level where I'm like,
[02:53:10] automatically diffing this based on a schema or whatever. I'm just going to be like, okay, this thing
[02:53:14] updates, revalidates.
[02:53:16] example, tan stack query.
[02:53:23] Well, the thing is, GraphQL is like the most optimal in client perspective, but
[02:53:28] I have a very hard time
[02:53:30] justifying...
[02:53:32] like the initial bundle cost that like if I'm if like picture, I mean, obviously I'm using react to really hyper hyperbolic this situation and next if I had react plus next yes plus GraphQL is my baseline.
[02:53:47] I'm at 120 kilobytes before I even started.
[02:53:50] Like, I...
[02:53:51] It's.
[02:53:52] It's just... it's nuts.
[02:53:59] Thank you.
[02:54:00] Thank you.
[02:54:01] Right, but like if you're not going to do that
[02:54:08] then yeah, use Urkel. And if you're using Urkel, Urkel is basically this. But then you also lose
[02:54:15] you're basically as good as TanStack Query. You actually lose
[02:54:19] you're not in category one anymore.
[02:54:22] Thank you.
[02:54:25] Yeah. So what I'm saying, pros, no need.
[02:54:33] Stupid thing.
[02:54:34] Give me a second. No need to manually update logic anymore.
[02:54:38] data automatically goes in the right place, propagates, right? Because you just go trigger this key, everything propagates, right? You can invalidate or revalidate as many resources off a single mutation as needed.
[02:54:48] Right? You can just go like to do's.
[02:54:50] all the places, right? Caching is optional, at least with reactivity.
[02:54:54] And that's or is very easy to add. What I mean is, to be fair, almost all these solutions that work like this have a cache, but technically like I did this when I built original create route data for solid start.
[02:55:05] You don't need a cash...
[02:55:07] to do
[02:55:08] key based revalidation. Like if you build a UI, renders once and you
[02:55:12] put everything there and then you're like,
[02:55:15] update to-do's
[02:55:17] reactively it's just going to
[02:55:20] re-trigger the fetch of the, you know, to-do resource, and then automatically propagate the data out. There's no actual cache mechanism here. Like, they use caches to dedupe requests and all that kind of stuff, like, but you don't need a cache.
[02:55:33] For this respect.
[02:55:34] Good thing, same with us.
[02:55:37] Cons, it's generally multiflite.  First, you request as a mutation,
[02:55:41] And then it...
[02:55:42] indicates revalidation and then a second request does their invalidation. So like you might go,
[02:55:49] I'm going to update this to do.  Now, don't get me wrong.  People do cache manipulation directly in React query.  I'm just saying, like...
[02:55:56] The pattern I'm talking about here is where a lot of people fell into after a while, which is simply like, I don't want to deal with the cash.  So I literally.
[02:56:04] update to do and then say invalidate to do's and then it does a second request to go
[02:56:08] fetch all the to-dos and make sure it's up to date.  This does help keep things in sync everywhere,  but this is the magic of it.  Now you're not manually writing the cache.
[02:56:17] And again, all data is required in the browser, right?  So you can see how this dealt, what this really solved was,  it made it a lot easier to impact more than one resource.  So like, this direct manipulation without like a crazy, you know,
[02:56:32] with a very involved client, generally ended up leading to
[02:56:37] it easy to tear stuff.
[02:56:39] because you have the manually patched up, you missed things, multiple resources, complexity grew as a number of different types of queries and different places those places touched. This made wiring that super easy.
[02:56:50] solves that.
[02:56:51] But in trades off gives it multi flight, essentially.
[02:56:56] So then we got route-based revalidation.
[02:57:01] or remix right it's on each route loader action as a way the mere traditional mpa  website will still maintain you know single page app architecture
[02:57:09] Again, no need to manually, you can invalidate many less resources off single mutation.  And actually I don't have it here, but
[02:57:16] There's no client side cash, so that's kind of a pro.
[02:57:21] And it can actually, because they built in the whole...
[02:57:25] server part of it, there's less data fetching logic required in the browser. To be fair,  if you're using React router with client actions right now, like we're just using  actions without it, this isn't true. This is
[02:57:37] So I'm talking about specifically the remix implementation using server stuff because it's more along the slope where I want to get to.  There's obviously, you could kind of think of React routers stuff kind of in the middle.
[02:57:54] But yeah, cons again, still generally multi-flight, right?  Use remix, when you do mutation,
[02:58:00] you do the change, then you redirect to the next page, which then goes back to the client.  And then the client router goes and requests the next page and does the next set of actions.
[02:58:08] So it does two requests again, right?
[02:58:12] there's a bit of a loss of granularity. At best, it's a route section level.
[02:58:17] but it could also be full page level, right?
[02:58:20] Right, because mutation generally in Remix...
[02:58:23] Um.
[02:58:24] you the if you just don't do anything you just do like you know you have all your loaders and then you're like
[02:58:30] do an action. It actually refreshes all the data on the current page.
[02:58:35] That's like the default. And to get around it, you need to go like, should,
[02:58:39] Blank happen, like, should this update and, and that's not too hard to do, but like,
[02:58:44] Basically, this doesn't really care about the routing level. The granularity slices through your app a different way. This way is like route section.
[02:58:57] And then obviously still all data required in the browser hydrated, which is
[02:59:01] for all of these, right? Essentially.
[02:59:06] Thank you.
[02:59:10] Thank you.
[02:59:11] Is this another one of those where you're kind of like being half serious?
[02:59:16] *laughs*
[02:59:22] even with  yeah yeah sorry  I was talking about Apollo  I don't know what relay looks like
[02:59:32] Urkel is not that bad. Urkel is like 9 kilobytes. So your next page with Urkel is only going to be like...
[02:59:39] 81 when you get started.
[02:59:43] 82.
[02:59:45] Thank you.
[02:59:48] Yeah, I mean, it is, but mechanically it makes a difference for the sake of my comparison.
[02:59:54] Um...
[02:59:56] Okay, so...
[02:59:58] Let's go to server components.
[03:00:02] And in a sense,
[03:00:04] I think this is true of
[03:00:07] generally all the partial HTML partial solutions that we were thinking about here.
[03:00:13] Thank you.
[03:00:14] But this doesn't have to just be related to React server components.
[03:00:21] So
[03:00:22] So again, no need to manually update. Check. Can invalidate as many resources. Good.
[03:00:27] Single flight mutations. So this is the biggest difference. While these are multi-flight, we finally get the single flight mutations back.
[03:00:36] Right? You get...
[03:00:38] single flight mutation out next page in, so to speak, or the replacement page.
[03:00:44] And then again, still like Remix, less data, logic, rendering, even more so in the browser.  This actually makes code. It's not just removing the fetch logic.  You can actually reduce code size here because you don't need the code for rendering the components.
[03:00:58] And I put the cons, loss of granularity,  generally full page, cache recurrent server,  if you wish to save work.  What I mean by that is,
[03:01:07] .
[03:01:09] There, there's basically no way, and this is kind of what I was trying to get to with this tweet thing I was doing.
[03:01:26] Trying to think of how to explain this.
[03:01:29] If...
[03:01:32] If you load your page,
[03:01:34] And your page has...
[03:01:38] I don't know, three route section levels, the topmost level,
[03:01:43] doesn't really have any data in it, except for maybe the current logged in user information. The second level
[03:01:49] has
[03:01:51] has, I don't know, let's  maybe some, let's say we're on an admin  panel or something, so it has some
[03:01:57] organizational data about the
[03:02:01] about the current organization...
[03:02:04] that you're on, maybe to have some specific departments, categories, um,
[03:02:10] maybe five or six different data sources.  And then the next...
[03:02:15] level down is when you're getting into like actually showing stuff where you're actually showing specific data, whether maybe it's
[03:02:21] some statistics, some charts, some user information. You've got some like
[03:02:28] statistical data about some kind of product usage.  You have some data about
[03:02:35] I don't know, sales dates, order, inventory.  So let's say another...
[03:02:40] eight or so different data sources, right?
[03:02:47] Thank you.
[03:02:49] You talk about the nested. Yeah, I mean, you're right.
[03:02:52] Visually, I'm basically talking about something like this, right?
[03:02:57] Thanks.
[03:02:59] but you can get the idea.  Like there's,  there's,  I'm talking about something even more complicated though.  And here instead of going to a fourth level,  maybe there's like this page scrolls and there's like,
[03:03:08] a few different charts and panels on it.
[03:03:11] you know,
[03:03:12] What I'm trying to get at is...
[03:03:16] If you update...
[03:03:20] one piece of data
[03:03:22] anywhere on that page.
[03:03:28] you end up refetching all the data for the whole page.
[03:03:35] It's helpful. Nested routing is so funny. It's been around for like, again, like 12 years, to my knowledge in client side frameworks since 2012, I think, or 2011. But like, this is still like my favorite example to try and teach people. I even use this on a slide in a presentation once.
[03:03:51] I took a video of this, me scrolling it, and then I like...
[03:03:54] put a gif in my slides anyways.
[03:03:57] I'm
[03:04:00] But what I'm trying to get at is...
[03:04:05] And
[03:04:07] Not spa mode.  Sorry, I'm trying to remember where was I back on this.  Is that like...
[03:04:12] - Yeah.
[03:04:14] you... you...
[03:04:16] If you're in a spa, like a single page app,
[03:04:19] and you decided to update a single data field,
[03:04:24] you would send
[03:04:27] Like in a direct mode, you would just like go, okay, update this data.  And you get that piece of data back.  And then you go update the model.  And it might in React cause a bunch of re-renders.  But you're not actually sending much over the wire.  And you're actually updating one little thing.  If you're using TAN stack.
[03:04:40] you know, do it. Like...
[03:04:42] Thank you.
[03:04:43] Yeah, you replace that user and then it might do a bit more of a work.  But essentially when you go to the server, you're only getting that user's information.
[03:04:53] But once you hit Remix...
[03:04:54] or Next.js.
[03:04:57] like with RSCs or whatever.
[03:05:02] Thank you.
[03:05:03] You are...  Like, both the loader pounder and the RC pounder,  you're basically just saying,  yeah, I'm blowing out the whole thing.  I'm going to refetch everything.  Now, to be fair...
[03:05:12] The RSCs might be, you might be on route-based revalidation.  You might be like per route section.  And don't get me wrong, I think with an RSC,  you could probably do it.  Not if you fetch inside the components, mind you.  It wouldn't be easy to do it there.  But if you hoisted the loader style with server components,  you could probably at least narrow it a bit.  But you have to understand some of the challenges  with this stuff is like that organizational data  that I was talking about in my example,  where I'd like the three levels.
[03:05:42] You also might be using it in the third
[03:05:45] section. You might be showing the organization's name
[03:05:48] So like, even though what I was talking about where there was like one data source,
[03:05:53] five data sources, six data sources,
[03:05:56] That last six is usually actually more like 10 because it's overlaps with the number of the ones from the previous section above.  Right?  So, like...
[03:06:06] All it takes is...
[03:06:10] One of those to invalidate
[03:06:13] And at any given level, like if it if the
[03:06:17] And you have to refetch everything. So like if you update
[03:06:21] The organization information is
[03:06:25] in that second level, like some piece there, that's also in the third level.  You're fetching all of the second level and all of the third level again.
[03:06:33] Um,
[03:06:36] Basically, the only solution...
[03:06:40] is to cash...
[03:06:42] it aggressively.  Like Next.js is looking at doing almost like a key-based  cache process.
[03:06:47] on the server so that like you can basically
[03:06:52] not have to worry about this.
[03:06:54] The challenge with this, it's not a challenge, the thing is I'm sure someone's going to tell me, "Brian, we always use memcaptures on the server. Why are you complaining?"
[03:07:04] it's standard practice to use Reddit or sort of Redis or some kind of memcache,  you know,  and yeah,  I've,  I've used tons of memcaches over the years.  Um,
[03:07:14] you know, to optimize
[03:07:16] queries. I've used it to, you know, basically like we used to keep in memory the initial feed page for the most logged in users. So that like when they visited the site, they always had their feeds like immediately. We used it to...
[03:07:33] optimize stuff around logged in users.  Like we had different cache lives, LRUs,  done tons of optimization around the memcache.
[03:07:46] Thank you.
[03:07:48] Right, Ryan, yeah, thank you for putting that out there.
[03:07:56] Thank you.
[03:08:00] What I'm getting at is
[03:08:04] Yes, you did that.
[03:08:06] We all do that, right?  If you do some performance things, the key heavy traffic area,
[03:08:11] But
[03:08:12] This isn't like that.  This is like...
[03:08:15] I don't know, it depends on the permission model of your application, how much is this tailored to what each user can see. I dealt with stuff that was very organizational, very private, very secure.
[03:08:30] You...
[03:08:31] It's a whole different thing from optimizing common queries in a few places, especially stuff related to like common users and basically caching every single thing that comes into your system.
[03:08:43] Because...
[03:08:45] This architecture is just
[03:08:47] Let's always, like, whenever anything changes, let's do it all.  And don't get me wrong.  In a sense, you say MPAs like that, but MPAs...
[03:08:54] Never had the expectation...
[03:08:56] of apps.
[03:08:59] That's like when the split happened, right?  Like if we had to do...
[03:09:03] everything, every time,
[03:09:06] You know, I mean, you remember MVC on Rails and stuff and splitting off model view controller and
[03:09:14] I...
[03:09:16] Yeah.
[03:09:21] I know you guys are just being trolls at this point.
[03:09:32] If all your data was reactive sources, you could respond to mutation, node invalues, pushes, local sources.  Yeah, yeah. But I think that requires a stable server if you want that to happen on the server side.
[03:09:44] I think.
[03:09:49] Thank you.
[03:09:51] Thank you.
[03:09:54] Yeah, right. So...
[03:09:58] *sniff*
[03:10:01] Thank you.
[03:10:02] Yeah. So like
[03:10:03] Like this is what I was going here.  Moreover, I talk about a stateless, the driving part of JS framework design.  It's acknowledging infrastructure constraints, but unless my understanding is wrong,  server-side cache is a must for performance RSC mutations as your app scales with complexity, irrespective to usage.  I mean, it's you're not going to the mem cache because you're hitting performance.  You're going to the mem cache because it's the architecture. Yes, any mutation goes to server.  But when you get there, save having a cache, you will need to refetch all the data.
[03:10:29] to render the page regardless of what's updated,  but a cache that persisted across Quest needs to live  in a centralized place to serve multiple deployed functions.  Sounds like infrastructure constraint, right?  I'm less worried about that.  This was just kind of a realization  that I said out loud on Twitter.
[03:10:45] It's just like architecturally, it's a consideration.
[03:10:47] And I started trying to think if there's other ways to solve it.  And it's tricky.  In the spa world,
[03:10:52] The biggest thing...
[03:10:53] that RSCs bring is single flight mutations.
[03:10:56] And it occurred to me that if you had a route-aware key-based revalidation...
[03:11:01] Well, guess what?
[03:11:06] That could actually be single flight because your actions
[03:11:13] could basically tell the server which data
[03:11:17] needs to be reloaded.
[03:11:19] and it knows what route it's going to. So from that perspective, it could just send the data  back instead of the view code back, and then the client can apply the data changes.
[03:11:28] and then do the updates
[03:11:31] Um...
[03:11:33] Thank you.
[03:11:35] Thank you.
[03:11:36] Do it single flight.
[03:11:38] Thank you.
[03:11:39] Essentially.
[03:11:41] So,
[03:11:43] I'm not suggesting this is the way to go because unfortunately this does not solve what we came here to do HTML partials for because you need all the data and code in the browser still.  You didn't actually solve...
[03:11:51] partial serialization. You did not solve, um,
[03:11:55] partial hydro execution.  You didn't solve
[03:12:00] partial codes being sent.
[03:12:02] Thank you.
[03:12:03] Thank you.
[03:12:04] What else can we do?
[03:12:07] talk a bunch about resumability, it doesn't really matter because resumability  also doesn't solve this completely because I was sitting here and I was like
[03:12:13] Just it's...
[03:12:14] you know, things aren't, I'm not completely happy with it. And then
[03:12:18] Some people responded to me, um...
[03:12:21] Trying to find Dev's response in specific.
[03:12:25] Because we started another thread that I think is actually really...
[03:12:29] Relevant
[03:12:31] Yeah.
[03:12:32] Okay.
[03:12:33] Thank you.
[03:12:35] If you look at my list here, I tried to come up with an impossible list.
[03:12:42] Thank you.
[03:12:44] Thank you.
[03:12:46] Thank you.
[03:12:47] Okay, you guys are still talking.
[03:12:59] I wonder if you build state graph with nodes that are on the server and some are on the client.
[03:13:04] So for consumers, it feels like it's all local.
[03:13:07] Yeah, I mean, I know some people working on similar problems.  That's actually, yeah...
[03:13:16] Put it back on the table.  Yeah.  So you guys are saying like we need staple servers.  I don't.  The whole move in infrastructure is not suggesting we're going that way.
[03:13:27] But the reason I want to pull this list out is because I think it's relevant.  I want routing with persistent client state.  I want an initial serialization savings that I find in islands.  I want granular invalidation I come to expect in client apps.  I want hydration savings of resumability or basically any of the partial solutions.  I don't need, like, they're all kind of good enough.
[03:13:43] at this point compared to what we have today.  I want all three.  And the funny thing is if you actually look at this list,
[03:13:49] Okay.
[03:13:50] Every solution that attacks us doesn't solve all four.
[03:13:54] For example,
[03:13:55] If I say RSCs, which is probably the closest, I get persisted client state.
[03:14:02] I get initial serialization savings of violence and I get hydration savings of resumability.
[03:14:08] Oh no, I don't get that. Actually, never mind. I don't get the instance. Yeah. So right now RSCs get
[03:14:13] get persistent client state,
[03:14:15] and the hydration savings of resumability or other partial solutions.  It does not give me initial serialization savings of islands or granular invalidation.  If I
[03:14:24] Look at Astro.
[03:14:27] I'm going to argue...
[03:14:31] So
[03:14:33] that I don't get the right routing I want right now.
[03:14:37] Um...
[03:14:38] But I guess we could.
[03:14:40] But yeah, granular invalidation becomes tricky,
[03:14:44] if we get to like
[03:14:46] I can't speak on it because Astra isn't an actual solution, so I shouldn't use that on there.  Like...
[03:14:50] I'm trying to pick a solution I can build with Astro that would do all these things.
[03:14:55] So I shouldn't really include this in the list.
[03:14:57] But because whatever I could build with Astral,  presumably I'd be building with Solid Start,  so that's like the same...
[03:15:02] thing. So,
[03:15:05] But yeah, basically right now, the current solution that we're thinking with these partials, HTML, does not give us granular invalidation.  I think that what I described for RSCs applies to this whole category.
[03:15:15] So
[03:15:17] the one benefit is you get the over RSCs that potentially get that initial serialization savings.
[03:15:21] But...
[03:15:23] If I look at quick,
[03:15:27] I don't get client-side routing if I get all these three.
[03:15:31] And then if I get client side routing from quick, I don't get this one.
[03:15:36] So...
[03:15:37] Basically, it can do both modes, but it can't do all four at the same time.
[03:15:45] Huh?
[03:15:45] So like, this is kind of...  Right now...
[03:15:51] There's basically, you don't get, I don't think you get this and this.  Maybe this is innate and it should be obvious, but you don't get both of these.
[03:15:59] You don't get the initial serialization savings of islands and the granular invalidation
[03:16:03] that you've come to expect in the client.
[03:16:07] in a single, yeah, I guess it's actually this, in a client app page, because you can get these two things.
[03:16:14] Oh, actually...
[03:16:18] It's arguable. My point is that nothing does all four.
[03:16:21] Okay.
[03:16:30] Thank you.
[03:16:33] Can you see John's tweet where he said our Cesar building? I'll talk about that in This Week in JavaScript. It's actually...
[03:16:39] all he's saying is that RSCs are essentially...
[03:16:44] just a way of breaking two trees apart, essentially. I mean, that's my interpretation. He'd probably have a slightly different one, but it's about weaving two trees together. It's not about where those trees are run.
[03:16:54] Thank you.
[03:16:55] Yeah, fresh with partials. I mean, it's all the same thing, right? Like, fresh is... does not... like, it's just... I think it's inherent that...
[03:17:07] from
[03:17:08] I mean,
[03:17:10] Okay, the argument is if you have partials,
[03:17:13] I mean, this is the room where there's the most space here is if you have partials,
[03:17:19] is it possible to organize them in such a way  that you can get relatively granular invalidation  in a way that isn't prohibited from an API sense?  Because we continue talking...
[03:17:31] talking here because Dev was like, oh, so you're saying with like cash, you can't, not really. And
[03:17:37] But then eventually...
[03:17:41] We get to a point where he shows me parallelized routes.  Um...
[03:17:45] from next and Vue has these as well.
[03:17:47] And in a sense,
[03:17:51] react
[03:17:52] Still, with Cirquants insisting you can
[03:17:54] fetch anywhere in the component kind of gets in the way of this idea. But if you had parallel  those routes with hoisted data fetching at each of those separate slots, now suddenly
[03:18:04] potentially you can reduce some of that
[03:18:07] weaving I was talking about where, you know,
[03:18:11] you hit a point and there's six things or ten things at that level,  now you can actually perhaps...
[03:18:18] Okay.
[03:18:20] only
[03:18:22] you know,
[03:18:26] Like we've like...
[03:18:29] Like less of them can be separated.  I still think these things get entangled a lot,  but there is a question that if you could somehow tie the portions of the page  specifically to the data in a way that wasn't prohibitive,
[03:18:43] Maybe there's something on this model.  The other, that's one thought.  The other approach would be don't loosen one of the constraints, right?
[03:18:53] that you have when designing these things.
[03:18:55] Like say you don't care about how much JavaScript you send to the page.
[03:18:59] then it's possible to do...
[03:19:03] HTML partials on new navigation and do client updates on
[03:19:07] after the fact or something. You know what I mean? Like there's
[03:19:11] a few different options. Both of them are very complicated when you consider what it would mean for API or bundling. So people would have expectations. Because like if you did what I just said there where you navigated with HTML partials, but then did all updates on the client for mutation,
[03:19:24] Then.
[03:19:26] Then, uh...
[03:19:29] Like people would have that problem like, is this server? Is this like picture you still need the separation that I talked about with the islands, but then you'd have like things that they thought were outside the islands running on the client. That doesn't make sense, right?
[03:19:43] Like, use client is more of a suggestion than a rule.  It's just telling you where the serialization boundaries are.  I mean, it's kind of quick-like, right?  Obviously, if you had reasonability, you might not care about the size of code as much  because you wouldn't need to run it.  But, like...
[03:19:55] This is kind of a zone where like...
[03:20:00] Something needs to give and the pieces aren't quite aligning right now.
[03:20:04] Thank you.
[03:20:08] Thank you.
[03:20:10] If it's app versus site again, you start wondering why you're doing all this.
[03:20:17] The hope is that it's not.
[03:20:26] Thank you.
[03:20:30] Thank you.
[03:20:37] Thank you.
[03:20:40] I thought Alex Lowe wrote this SolidStrike GitHub Pages tutorial with routing.  I think Alex Lowe wrote this. I...
[03:20:46] Sorry, this is just a complete aside.
[03:20:50] I shouldn't put this on the screen.
[03:20:53] thickened.
[03:20:58] .
[03:21:02] Let me see, um...  I'm just looking for articles section. I feel like this article actually literally exists, that it was published last week.
[03:21:15] Yeah, I'm not imagining things. Deploy a SolidStart app to GitHub pages.
[03:21:21] I don't know, does this example not have routing in it or something?
[03:21:25] Let's...
[03:21:26] Thank you.
[03:21:29] Thank you.
[03:21:32] Nope, looks good.  Configuring the router, yep.
[03:21:36] Okay.
[03:21:38] Here we go.
[03:21:40] Problem solved.
[03:21:44] Thank you.
[03:21:45] Thank you.
[03:21:51] - Yeah, and eBay's an MPA as well, yeah.
[03:21:55] Thank you.
[03:21:58] Yeah, I...  So...
[03:22:09] This was written January 11th, it's already out of date, probably slightly.
[03:22:19] Thank you.
[03:22:20] Anyways, that's a starting point at least.
[03:22:24] Yeah, I don't know.  What I'm trying to get at here is that
[03:22:31] *giggle*
[03:22:33] there is a definite trade-off here.  Like I think we can take client routing,
[03:22:39] or sorry, spa mentality, if you forget the code stuff,
[03:22:43] Like, even today, we can take it to a point.  This is, like, in a zone where I think...
[03:22:48] Tanner and I have been living recently where we can get like
[03:22:51] A lot of the benefits of RSCs without RSCs
[03:22:54] But...
[03:22:56] not get...  But, again, you don't get...
[03:23:00] the actual core three savings or partials that are that is why we're doing all of this. It's just like
[03:23:06] spa development has never been better there's a path here that's actually quite
[03:23:11] Basically, if you don't care about...
[03:23:14] that
[03:23:15] page load performance, I think single page app SSR actually has more room to grow to be even  better than it is today.
[03:23:24] It doesn't have to go to RSCs.
[03:23:28] That being said, I think I want, I've been trying to solve the problem that RSCs solve for the last couple of years because I think it's worth it.  I'm just pointing out that there is a whole zone of SSR SPA that is even better than it is today.
[03:23:53] yeah we sneeze and it's key change what ui needs to re-render right so we're talking like data  dependency kind of graph thing if we did that that it becomes a little bit more interesting but it's  harder because these things get kind of entangled and then trying to mix the partials back together  but i mean it's not impossible like if you made rules i was going to sketch something out but i  didn't have a chance to this morning i was working on some bugs but like if you think about it
[03:24:19] the one state that persists across both sides is the router state.  So if you basically had a rule that within the server tree,  you could have fragments that could only take the router status props,  like you can't pass props to them, it's possible that you could,
[03:24:32] tie those to data keys
[03:24:35] Okay, sorry.
[03:24:37] and then essentially...
[03:24:41] Send back response, which sends all those little pieces.
[03:24:44] that update based on the invalidation key, and then
[03:24:48] replace them into the client.  And you'd have to collect all the existing ones  because some of them that are even children  might not have gotten re-rendered.  But that's fine because you can't pass props  so you can't trigger the re-rendering.  And then essentially you could just piece it back together.
[03:25:03] I haven't worked through it, but it might be possible to do that.  I just can't picture what the API would be that would be pleasing to look at.
[03:25:11] But, you know, I started being like, huh, it'd be funny if there's like use partial, right? Like,
[03:25:16] like use client or,
[03:25:18] Yeah.
[03:25:20] It seems like we might be still missing one of the...
[03:25:23] core primitives.
[03:25:25] To this...
[03:25:26] And you want to stitch it together. This is why I'm like, it's funny.  Fresh offers both the single render partial scenario and the like HTML style.
[03:25:33] Having it distributed is a new version
[03:25:37] like having a different endpoint for each part of the UI,  you know, like the way the HTMX endpoints work,  you know, obviously you can set them up the right way or whatever,  but it's a new version of this, right?  We need to get...
[03:25:51] Do what I'm saying and get back to something like this.
[03:25:55] But separate, kind of the same thing signals did for React.
[03:25:59] You know, where we kept the lines, but we made the pipe smaller.
[03:26:06] Is it doable? I don't know. But, you know, this is why I'm talking through to you all, because HTML partials,
[03:26:13] do have
[03:26:16] some real trade-offs here.
[03:26:21] You could stick an old-school client app, like a HandStack
[03:26:25] app, you know, on inside your server component or whatever inside your island.  But the thing that's really challenging here with not unifying the data model is like,
[03:26:34] you almost don't get the benefits in the same sort of way.  It'd be really nice...
[03:26:39] If...
[03:26:41] it could be the same data model.
[03:26:50] Not anti-server, but I actually love server. For me, spa solved a lot of related performance  issues for apps that have massive user base, like a light API serving the data on the request  to render a client and save a couple dollars in server resources. I feel like the move
[03:27:07] to use more resource theory, which is business, right? Yeah, I mean,
[03:27:11] eat
[03:27:13] it also gives the end user a better experience at the cost of that.
[03:27:19] So it's like, it's, it's tricky. I don't think this is just like a, like a, the provider is trying to like,
[03:27:28] get you to buy stuff. Although, as I said, it's a little bit awkward that, like, suddenly this architecture, you're not just deploying a function, you need, like, a bunch of memcache. I mean, that's a little bit awkward. But, like...
[03:27:41] And
[03:27:44] The Ultimate UX should be better.
[03:27:47] Thank you.
[03:27:48] *sniff*
[03:27:49] Thank you.
[03:27:50] Right. This is what I was talking about before. It's a lot of similar arguments to JS on both sides, giving us the ability
[03:27:56] to, per user, give them a better experience.
[03:27:59] at the cost
[03:28:02] of obviously server resources. But on the other hand, like,
[03:28:07] Stateful servers is the extreme of it, and I see a lot of back-end people being very pro-stateful servers. So like, you know what I mean? Like,
[03:28:16] if you think you can just sit there and keep WebSockets with all your customers, then I think anything React is
[03:28:22] Or anyone's kind of suggesting here is probably fine.
[03:28:26] If you want to talk about scaling stuff.
[03:28:31] Thank you.
[03:28:34] Thank you.
[03:28:38] I'm hiding behind the message.
[03:28:42] Oh yeah.
[03:28:47] Hydration, I'm not actually worried, like I feel like we...
[03:28:54] We know how we can, like, we have multiple ways to solve hydration at this point.
[03:28:59] Like the initial page load
[03:29:02] It's solvable.
[03:29:04] But the mutation problem is less.
[03:29:07] I hate that we keep on uncovering new problems, but I mean, I guess it's the nature. Otherwise, we'd already be here.
[03:29:19] Thank you.
[03:29:23] Oh yeah yeah, sorry. Yeah this is... if you ever go on the solid discord in the next channel I post stuff like this occasionally. It's really rough thinking of mine. I just wanted to kind of talk about it because there's a big inspiration here. Okay.
[03:29:36] It's 3.30. I don't know if I want to say anything more about HTML partials here.  I just want to show people that this is why...
[03:29:45] I'm rarely satisfied when people are like, oh, yeah, just, you know, put HTMX in there.  It's like...
[03:29:51] And...
[03:29:52] You know what I mean? Like...
[03:29:54] Like you basically have to come off different assumptions.  And now you could argue that my assumptions are wrong.
[03:29:59] And I think that might be an
[03:30:00] Interesting conversation.
[03:30:01] But like.
[03:30:03] Thank you.
[03:30:04] when we're talking apps,
[03:30:07] I
[03:30:08] Don't think they are.
[03:30:12] All right, how are we doing peoples?
[03:30:19] Okay, I wanna, let's, let's uh,
[03:30:23] Yeah, wow, level 7 hype train emote. This is
[03:30:27] Thank you guys for earlier.
[03:30:31] Very much appreciate it.
[03:30:40] Thank you.
[03:30:43] Anyway, okay. Hopefully this was worth something. I didn't show off my demo again, but it doesn't really matter. It's just my early HTML diffing work.
[03:30:56] I don't know if it's actually...
[03:30:58] that interesting
[03:31:00] in its current state
[03:31:03] Yeah.
[03:31:05] because I don't think it actually
[03:31:08] It's where...  I feel like...
[03:31:11] Thank you.
[03:31:12] I already described how to build this when I was going over the Excalibur when I was talking here, like basically how to make these rules work.
[03:31:20] So yeah, let's skip that. Let's just continue onwards.
[03:31:24] Let's talk about...
[03:31:26] I think we should probably get into this week in JavaScript pretty soon. I could talk about my article as part of it.
[03:31:32] No, actually, you know what? Let's do the article...
[03:31:34] first, because it deserves its own...
[03:31:38] It's an own section topic here.
[03:31:40] Um,
[03:31:42] Again,
[03:31:43] Like the stream where everything requires a little bit of prior knowledge, this article is actually just the prequel to the article that I was actually intending to write.
[03:31:52] This happens all the time. I want to...
[03:31:53] I want to write an article.
[03:31:55] about a topic that I think is important or relevant.
[03:31:59] And then I end up in a zone where...
[03:32:05] Essentially, I realized that I haven't set enough basis, so I accept the right article before the article.
[03:32:12] So what is this article?
[03:32:14] Derivations in reactivity.
[03:32:16] And before I start and kind of get into a bit about this topic, I want people to understand that this affects
[03:32:23] Every one of you.
[03:32:24] every single one of you who use a JavaScript framework. This article is as relevant about React as it is about
[03:32:31] about, you know, view or angular or whatever. There's actually a comment here where someone was like, still need to crank through this, but dang it, this is why I like react plain values to ride value to just assignment const derived equals a plus b.
[03:32:49] Yeah.
[03:32:51] Yeah, I mean, and this is no slight innate, because this is generally what the React team's message is, right?
[03:32:59] about why this is
[03:33:01] why this is like
[03:33:04] you know, what
[03:33:05] I saw a whole conversation about this the last week. I think they were talking about how they keep plain values and why they're looking at forget and all this stuff. And I'm just like, the problem is if you understand how these things work,
[03:33:18] you know it's not necessarily the case,  especially when talking about stuff like Forget...
[03:33:23] Because...
[03:33:24] When we talk about drive values, and the reason I'm saying it applies to React, this is actually kind of a play a bit on Dan's thing we were looking at earlier. Sure, it's not the same context, but
[03:33:36] I could probably write in a solid playground to show you what React is, but...
[03:33:43] In a sense, yeah, let's just do this.  Let's...
[03:33:45] In a sense, React is this:
[03:33:47] Can't.
[03:33:49] date.
[03:33:50] equals create signal
[03:33:53] And then what do we want? Const vDOM.
[03:33:59] equals...
[03:34:00] create memo,
[03:34:04] Um...
[03:34:07] Thank you.
[03:34:09] render
[03:34:11] State.
[03:34:15] Create effect.
[03:34:19] and yeah we're missing it let
[03:34:22] I mean, it's funny, solid syntax lets me do this.
[03:34:31] Thank you.
[03:34:33] but like not everyone probably aware of this, but it's along the lines of this,
[03:34:38] Def...
[03:34:40] VDOM.
[03:34:42] Actually, let's go.
[03:34:44] Next.
[03:34:45] V-DOM
[03:34:46] previous vdom
[03:34:50] Return.
[03:34:51] Next.
[03:34:52] V-DOM.
[03:34:54] And const
[03:34:57] Next, VDOM equals VDOM.
[03:35:01] Thank you.
[03:35:11] Does this make sense?
[03:35:15] Thank you.
[03:35:16] No, this doesn't make sense.
[03:35:20] I always talk about reactivity being a control of how granular something is.
[03:35:25] Solid doesn't return cleanup functions from effects.  Solid returns previous values.  It makes it easier to do diffing.
[03:35:33] Because you can call on clean up everywhere.
[03:35:37] So yeah, our solids, I'm using solids syntax here.
[03:35:42] Okay, so this doesn't make sense.  Okay, good.  Then I'm glad I did this.
[03:35:50] Yeah, what I'm trying to say here is that, like...
[03:35:56] Thank you.
[03:35:58] essentially there's state,  which could be whatever you want it to be.
[03:36:04] Whatever.
[03:36:06] And then when that state changes...
[03:36:09] You run the derived...
[03:36:11] And in React...
[03:36:13] vDOM is derived state. There might be other state in it
[03:36:17] But technically here, there's
[03:36:20] No side effects.
[03:36:24] Right? So essentially,
[03:36:27] You're creating something.  I know creation is not supposed to be like...
[03:36:32] like effectless but like what i mean is like in theory what you're doing here is  you're doing the pure part doing the calculation
[03:36:40] And then the effect grabs that, diffs it against the previous, and then stores it so that the next time around.  And every time the state changes, you then do the pure render.  So what I'm basically trying to say is VDOM is derived state.
[03:36:53] It's this is like a fundamental difference between like a VDOM library like React and like a signals library.  And when trying to come across is that the actual VDOM, the thing that the output of your components,
[03:37:05] is actually derived.
[03:37:07] it's like a transformation, and then the actual side effects happen when you diff
[03:37:12] between the two different VDOMs, that's when you actually do the actual rendering, even though React likes to call this render.
[03:37:20] Thank you.
[03:37:21] Thank you.
[03:37:24] So I was just trying to say like, this is kind of like a really,  it's not like showing components aspect of it,  but this is React.
[03:37:31] Kind of.
[03:37:32] Essentially so when we talked about derived state
[03:37:35] we're also talking about
[03:37:38] Um,
[03:37:39] the whole rendering process of React.
[03:37:42] So technically,
[03:37:44] memoization, use memo,
[03:37:47] Um,
[03:37:50] React.memo, use callback, are all forms of like sub derivations within the the main derivation here of the VDOM. So technically speaking,
[03:38:01] React is just like this big...
[03:38:04] like transform, like derivation machine that runs into an effectful diff.
[03:38:09] Thank you.
[03:38:10] That's, that's kind of, I mean, I guess if I'm using solid syntax,
[03:38:14] Let's make this a render effect, but like...
[03:38:17] I hope that's somewhat clear.
[03:38:21] Thank you.
[03:38:22] Anyways.
[03:38:24] Thank you.
[03:38:25] Hence, what I'm trying to say here is:
[03:38:28] Derivations are relevant to everyone and actually saw a little wobble that Kent
[03:38:34] See Dodds.
[03:38:36] actually did something about like run an article, don't sync state, derive it.
[03:38:41] And this is all about how to use, like, don't use useEffect and all this kind of stuff.
[03:38:47] He kind of wrote the like...
[03:38:49] not framework authors version of this article.  I found this after I published.
[03:38:54] Because he was trying to explain how all the patterns you should use to derive instead.
[03:38:59] of sync. The thing is,
[03:39:02] It doesn't matter what framework you use,
[03:39:05] derive don't sync. No one wants to sync yet every user first inkling is to sync.
[03:39:12] Okay.
[03:39:14] All right.
[03:39:16] Thank you.
[03:39:19] you
[03:39:26] Thank you.
[03:39:28] Okay, I did look at it.
[03:39:32] So getting back to the topic at hand here.
[03:39:39] What I'm trying to say is...
[03:39:41] that
[03:39:44] I wrote...
[03:39:46] what is it, Introduction to Fine-Grained... I wrote
[03:39:50] One of my favorite articles probably ever was this article series where I wrote the two parts about what is signals fine-grained reactivity and how to build a reactive library from scratch.  And the thing I do that we always do is...
[03:40:02] It's so funny, I basically took the example from this article and used that as my starting point.
[03:40:07] When I asked when asked how to
[03:40:11] Yeah, sorry, this explains the behavior.  But if I go into like building a reactive library from scratch,  we get to a point where we're like explaining  how all the updates happen.  I do this in every conference talk, you know,  explaining how, you know, in 40 lines of code,  you can write your own reactive library.
[03:40:24] But then when I get to derivations,
[03:40:28] and go, "Okay, well, how do I create a memo?"  I go, "SingleCritEffectSetS," and I'm like, "In reality, it's harder than this."  But I just kind of leave it like this and call it a day.
[03:40:41] Thank you.
[03:40:45] Thank you.
[03:40:48] Thank you.
[03:40:49] Thank you.
[03:40:51] Right, so...
[03:40:55] you
[03:40:57] So what I, the thing is, because this is kind of where I started here, because every time  someone teaches you reactivity, it's usually like, here I have a state, here I have a state,
[03:41:05] Hello world. You know what I mean? Like state effect.  No one talks about derivations, even though they are by far,
[03:41:12] far the most important part because they are incredibly complicated. So this is really my intro article
[03:41:19] essentially to this topic.
[03:41:22] so
[03:41:24] I want to talk about this a bit.
[03:41:26] Just to see if anyone has any questions or points, because as I said, like,
[03:41:30] I'm gathering...
[03:41:31] No one expected me to do this, so...
[03:41:34] I could have used my pseudocode that I used in the article, I suppose, to make it, but
[03:41:39] Essentially, I chose for this article to just
[03:41:42] use
[03:41:43] no frameworks, actual syntax, not use dependency arrays, just like come up with like a simple language of state effect and
[03:41:50] Um,
[03:41:51] I think I use Memo.
[03:41:53] or computed state.
[03:41:56] or derivations.  And the whole point of this article...
[03:42:01] is that...
[03:42:02] um
[03:42:03] All right.
[03:42:04] Essentially...
[03:42:06] This, which is what I just showed there,
[03:42:09] is not...
[03:42:10] how memos could ever work.
[03:42:13] And
[03:42:14] That's because we care about consistency.
[03:42:16] And you can see it
[03:42:20] actually again in that playground because what I'm saying is in terms of reactivity
[03:42:24] The cycle goes, you update the state,
[03:42:26] Then the framework runs some pure calculations,  and then it runs the side effects like updating the DOM.  This cycle is actually
[03:42:34] the three primitives in Solid.  But in a sense...
[03:42:38] Um,
[03:42:39] it looks a lot like the hooks API as well.  But this is,  this is like uno,  dos,  tres,  like here we go.  And,
[03:42:45] This cycle is what every JavaScript framework does.
[03:42:50] Essentially.
[03:42:51] Because we need the UI to be consistent.  We have to make sure that we have all the information from the state update to be able to run the side effects.  This is that drawing I did again.  This is this...
[03:43:03] cycle.
[03:43:04] essentially
[03:43:09] Yeah.
[03:43:10] Yeah, and do you know why they can remove memos in React Forget?
[03:43:16] I guess.
[03:43:17] it's because...
[03:43:20] Again, because of this.
[03:43:21] because the whole thing's wrapped in one big pure calculation, so to speak.  What they're doing is...
[03:43:28] They're not actually removing memos. I know you're being facetious there. They're just auto-generating memos for you.
[03:43:35] Essentially.
[03:43:42] Thank you.
[03:43:43] Thank you.
[03:43:43] Thank you.
[03:43:45] Thank you.
[03:43:46] Yes, this there are exceptions.  And this is actually important because
[03:43:52] different
[03:43:53] types of
[03:43:54] tools can't actually
[03:43:57] aren't capable, basically different types of tools, different
[03:44:00] ways you approach derived state can accomplish this better or not,  essentially,  which is part of what I wanted to talk about in the article because,  because essentially the guarantees we want is that for the parts that we care  about,  the effects of,
[03:44:14] apply all at the same time, so you don't like see something different than what's behind the scenes, so everything is consistent. It'd be terrible like if
[03:44:22] the user thinks they're performing one action, but they're actually performing a different action because what they see is not what they get. You know what I mean? Because you always trust the user to be right. But what if,
[03:44:31] like your framework's inconsistent and the user thinks they're doing something that they're not  doing, like something toggled but didn't update in the UI and then they press the button and it's  the wrong state. You get the idea.
[03:44:42] Um,
[03:44:43] So, I mean, it came down to the difference between...
[03:44:47] Deriving upper name here.
[03:44:50] and using the effect to synchronize it. So here we have two pieces of state,
[03:44:54] Here we have one.
[03:44:56] This is actually even slightly more code in this case,  but a lot of times people,  like their first inkling is to do this, right?  Just like, okay, when name change sets upper name, right?  It's very imperative.  It's very like,
[03:45:07] this, then this, and this.
[03:45:09] Whereas this is like saying,
[03:45:10] Name is this, memo is the uppercase of said name, and so on, etc.
[03:45:14] Right? And these two things, well, very simple, can have fairly different behavior because
[03:45:22] Thank you.
[03:45:23] The first example here is what I call derivation, the second is synchronization.
[03:45:27] In the second example, depending on your reactivity model, basically...
[03:45:32] depending when this effect runs, does it run before or after rendering, could actually
[03:45:36] drastically change the impact of what happens here.  You can kind of see it too, even in the code, right?  'Cause this has to,
[03:45:46] Like,
[03:45:46] This is being is a dependency of this being passed in. This is
[03:45:52] like completely separate, this function could be called at any time.
[03:45:56] Right. Where like you're actually passing upper name in.
[03:46:00] You can kind of already see
[03:46:01] the impact here, but the key is, in React this will cause your component to render twice.
[03:46:06] Because the first time it might act, it'll see...
[03:46:10] name as John
[03:46:12] and upper name as blank.  And then...
[03:46:16] Then when it
[03:46:18] it will then see, oh, capital jaunt.  So it actually does two renders.  But even if it didn't do two renders,
[03:46:27] there's a chance that
[03:46:29] Like...
[03:46:32] this rendering essentially, or whatever listens to these things, has to render twice because of the, you know, it applying the change.
[03:46:39] Even if it was fine grained, you'd be running the effect inside this update thing twice.
[03:46:44] .
[03:46:46] Even if you were able to synchronize all the values before...
[03:46:51] you went in to do the the the like rendering or the like framework effects even if you were able to do this all first it's still not great.
[03:46:59] I actually came up with a cool example in this article. This one is one of my favorite examples. We always use this as a straw man when designing reactive systems.
[03:47:10] It's basically...
[03:47:12] It's not quite the diamond problem, it's the diamond problem with one node in the middle.
[03:47:20] Yeah.
[03:47:21] Yes, to answer your question, yes. No, it can't be.
[03:47:24] Because you break the chain, right?  Like, if you were...  Like, I didn't do it
[03:47:31] I didn't do it here in this example, but the effect version of this
[03:47:36] has no clue what the dependency graph is  because it'll be like state A, B, C, D, E,  and then like effect write...
[03:47:43] a factor of a, b and c, the right dependencies are known, but if you're looking at e,
[03:47:51] You have no clue
[03:47:53] what writes to it, right? Like you can see it right here, like upper name.
[03:47:57] Here you're like, okay,
[03:47:59] It's possible for me to know that it depends on name. But here, upper name.
[03:48:03] What does it depend on?  This effect is registered here,  maybe another effect is registered somewhere far away,  and it writes to upper name as well.  Like you basically don't know all the potential things  that impact
[03:48:22] to make it upper name.
[03:48:24] Obviously with uppercase is kind of like a trivial example, but in general, you don't know this. Where here you know that, hey, C by definition depends on A.
[03:48:33] D by definition depends on C, which depends on A.
[03:48:37] like whether it's explicit dependency arrays or not,  you can tell by the actual formal definition of this, what these,
[03:48:44] Like how they relate to each other.  S so yes.
[03:48:48] Thank you.
[03:48:49] and the thing is
[03:48:52] We
[03:48:52] If our goal, which it generally is with glitchless consistent APIs, is we only want to run each one of these nodes once,
[03:48:58] And we want to make sure that the values are up to date.  You don't want to run...
[03:49:04] E down here.
[03:49:06] the first time and be like, oh, B's updated.
[03:49:10] but D isn't, and then have to run it again.
[03:49:14] because that wastes work.
[03:49:16] Especially if like it's a higher node,  like,  you know,
[03:49:19] You don't want to basically have these like weird things bouncing around.  Like even...
[03:49:25] without...
[03:49:26] doing effects.
[03:49:27] Yeah.
[03:49:30] A bad algorithm here can cause a lot of bouncing.  See, back in the day when Knockout was around, they did not solve this problem.
[03:49:37] Knockout was basically a pure
[03:49:39] push-based system, and I'll explain that in a minute here. But
[03:49:42] So, this is a good topic. I don't think I've ever
[03:49:46] covered this on stream.
[03:49:48] I was tempted to do a whole stream on this, but I can tell already by the viewership you guys will probably get kind of bored.
[03:49:55] But this is a very important distinction.
[03:49:58] And it's the thing that ties all the frameworks together.
[03:50:03] As I mentioned, React is just a big derivation, essentially, for its rendering with a diff as an effect.
[03:50:10] Well, there's a reason for that.
[03:50:12] Right?
[03:50:13] If you had a graph like this and you were trying to decide
[03:50:18] How to make sure that like on a given change to A...
[03:50:22] that it had those properties
[03:50:25] How would you approach it?
[03:50:26] Yeah.
[03:50:28] Thank you.
[03:50:30] A lot of people probably would go with push, but I started with pull because it's the simplest.
[03:50:35] Right.
[03:50:37] Basically, you'd either say,
[03:50:40] hey, I'm going to schedule some time in the future to kind of
[03:50:44] look and see that everything has changed, has changed.
[03:50:48] Right? That's what pushes. It's like basically saying like, okay,
[03:50:51] I know something's changed.
[03:50:53] In some cases, push, or sorry, pull doesn't, sorry, I meant that's what pull is.  Sometimes pull doesn't even know if anything's changed.  It could be a set interval, like every second, like every second,
[03:51:02] Check.
[03:51:02] Has anything changed?
[03:51:04] But usually in modern libraries, and I think even Angular falls into this category,
[03:51:10] That's why they have zone.js. Essentially something changes.
[03:51:13] And then you're like, okay.
[03:51:14] I don't know what changes, like, has changed yet, but I'm just going to let it propagate, like, do its thing.
[03:51:21] And then I'm going to look and figure out what changed.
[03:51:23] That's what pull is.
[03:51:24] You just schedule it later.
[03:51:26] Give it enough time so the change kind of, like...
[03:51:29] is set, like all the changes need to be made, and then you make sure things are consistent. Because one of the challenges here obviously is
[03:51:37] is that
[03:51:38] to run things consistently, um,
[03:51:41] um
[03:51:42] you have to make sure that all the changes have been applied.
[03:51:52] Thank you.
[03:51:52] To be fair, you're right. I did cover this on those streams, didn't I? Did we talk about push-pull?
[03:51:58] Yeah, you're right.
[03:51:59] That's like over a year ago.
[03:52:03] Okay.
[03:52:04] Thank you.
[03:52:05] I...
[03:52:06] Request animation frame everything. There you go. Yeah.
[03:52:10] Yeah, that's fair. We did do it on Milo's stream, but I'm trying to get better at explaining this. So bear with me.
[03:52:20] Because I think I didn't talk about pull nearly enough.
[03:52:24] I talked a lot about push-pull, and I'm not going to get into the details.  You're right. Watch Milo stream if you want the details on push-pull.
[03:52:31] But the idea here on the, like, it's funny, this is, I feel like Marlowe's stream was too advanced for a lot of people. There was like too, like we went too deep. I'm trying to get to the very like base part of it.
[03:52:43] Which is essentially...
[03:52:46] Pull, you start from the goal, the side effect, the update of the DOM, and then you ask for values as they come across them, right?
[03:52:52] So React is a pull-based system.
[03:52:55] Right.
[03:52:56] If you update state, it schedules some changes in the, it schedules some work to be done or to check if work needs to be done.  But the challenge with a pull-based system is,
[03:53:04] is like it doesn't know what work needs to be done.  Like, how could it?  Because you just set something
[03:53:09] And it goes, okay, so this updated, but what does that mean?
[03:53:14] Like he doesn't know what depends on that, what depends on it downstream.
[03:53:17] React does something pretty simple and a little bit clever.  They go, "Okay, well, you have components, right?  So if your state is owned by a component,  we'll re-render that component."  That's basically the model.  It's like, we have no clue what changed,
[03:53:33] We know something changed.
[03:53:35] We're just going to rerun your component.
[03:53:37] Because the state is owned by the component.
[03:53:40] That state could change nothing in the component itself.
[03:53:43] It could change nothing in its child component and maybe change something down three components from there.  But because...
[03:53:51] that changes in this component.
[03:53:53] and you know, it's owned and you can only pass them downwards.
[03:53:57] we can be fairly assured that our system will at least be consistent with
[03:54:02] if we rerun the component of potentially every single descendant.
[03:54:07] So...
[03:54:08] State tied to component.
[03:54:17] Right? And for this reason, pull-based systems are generally coarse-grained. They rely on replaying everything top-down because they have no idea what has changed, right?
[03:54:25] Because I started trying to think, I was like, can we make a granular pull-based system?  Like one kind of like that works backwards where...
[03:54:34] you know,
[03:54:36] Thank you.
[03:54:38] Thank you.
[03:54:45] Yeah, but it's an interesting result of the React pattern, isn't it?
[03:54:54] Thank you.
[03:54:55] What's kind of interesting is from a poll-based system is like,
[03:54:59] if you wanted it to be more granular, because the problem with this is you can have like 10 pieces of state in that component.
[03:55:06] and a bunch of dry stain and all that stuff.  And the second you go one of them updated,
[03:55:09] you know, like you change the color and something,  you're off the races re-rendering the whole to-do list.  You know what I mean?  Like, it has no clue other than this component needs to rerun.  It has no clue...
[03:55:20] Like...
[03:55:21] how these things are related. So if you're trying to do a granular system, you could, right? You could go, okay,
[03:55:29] Let's collect all the side effects, all the things.  Let's go back to our example here  where we have the effect at the bottom here.  Let's collect all of these.  So the first time we run it, it runs once.
[03:55:44] Because the first time these things run, they almost run the same no matter what the reactive system is.
[03:55:49] Like there might be some differences, but ultimately you're going to sum a five, right?  One and then one plus one is two.  This is two.  This is three.  So two plus three is five.  Okay.  So they all have to like execute to get their value the first time, but...
[03:56:04] You know, when it happens might differ slightly, but generally it happens. So we already know
[03:56:10] all the graph.
[03:56:12] So in theory, if we were trying to do a more granular pull-based system, we could do a change.
[03:56:20] And then go, okay...
[03:56:22] Let's run all the effects.
[03:56:24] in this scope, component, whatever.
[03:56:27] Now, if the change is to f, which isn't in this graph, you're not going to know.
[03:56:33] You just queue up E, you queue up G,
[03:56:36] And
[03:56:37] then you're like, okay,
[03:56:39] The first thing
[03:56:41] If you look at here, you cue the effect and then you go, okay...
[03:56:44] Let's look at E.
[03:56:46] Has E changed?
[03:56:47] You're like, I have no clue.
[03:56:49] So you actually have to run
[03:56:50] E, perhaps.
[03:56:52] And then you go, oh, wait, but has B changed?  You see, you have to go back up the graph.
[03:56:57] And
[03:56:58] That...
[03:57:00] would be really expensive because you could never,  you basically have to get all the way up to,  to,  to find out that basically a,  a,
[03:57:08] has a, a, a hasn't changed perhaps.
[03:57:14] A way to transfer the graph without doing the work might be to have dependency arrays, right?  You could basically know what it depends on, so when you get to the effect, you go, "Oh, effect depends on E. Let's go to E."
[03:57:25] "E depends on B and D, let's go to B."  And you could walk up and essentially you get all the way  to the end of the graph and then go, okay, has it changed?  But once you realize it changed,  you would then execute downwards.
[03:57:38] or not. But the problem with this approach
[03:57:41] is why would you waste your time doing all this?  If you had two of these graphs next to each other  and only one of them updated,  why walk all the way up here to realize nothing has changed?
[03:57:50] And then walk all the way up here to realize, okay, this one did change.
[03:57:53] when you could have just...
[03:57:55] ran them top down again in the first place.  Because you're not saving any work.  Everything in this component is going to run again.  So you might as well go, OK, A, did you change?
[03:58:05] Okay, well then short circuit, memo, you know, you're done.
[03:58:09] F, did you change?
[03:58:11] Yes, okay, then I'm going to keep on going.
[03:58:13] Basically, there's no point to trying to be more granular with a pull-based system.
[03:58:18] because
[03:58:20] ultimately
[03:58:22] you're gonna you're gonna rerun it all anyways so that extra traversal up is not saving you anything.
[03:58:28] it's cool that you could kind of like
[03:58:30] figure it out perhaps
[03:58:33] to like go back up to the top and then run it back down, but it's all wasted work.
[03:58:38] And you're going to use, you're going to shortcut anyways with your like memoization.  Basically derived state would let you shortcut.  You'd go, okay, this is you look at the dependency array and go,
[03:58:48] Hey, has B or D changed? No, then don't run this.
[03:58:52] So it's kind of interesting that generally with poll-based systems,
[03:58:57] There's no benefit of actually, it's just like extra work to try and like break things up smaller. You just depend on memoization. You just run top down and go, okay, I remembered the value.
[03:59:08] Um...
[03:59:09] I know that I can stop here, essentially.
[03:59:12] So,
[03:59:13] What's cool is this is consistent.
[03:59:15] Like if you run something top down,
[03:59:17] you have to run all the stuff so you know
[03:59:20] that
[03:59:21] what you get out the other side is going to be the full picture.
[03:59:24] The only problem is it's fundamentally inefficient, right?  Right.
[03:59:32] Thank you.
[03:59:33] Thank you.
[03:59:36] Thank you.
[03:59:37] Thank you.
[03:59:40] So, well...
[03:59:43] If you want to make, we all know, learn that since Redux time. Well, yes, exactly. Because you,
[03:59:49] You're...
[03:59:52] - The funny thing is Redux itself has the same inefficiencies  as React, but if you poise the state out at least
[04:00:00] You can kind of
[04:00:03] almost subscribe it's almost like a mini push on the end i realize it's selectors but it's
[04:00:08] They're just isolating.  They're basically hoisting the...
[04:00:11] Like, they're not even pushing, really.  They're just hoisting the state above...
[04:00:17] to do the memoization for you
[04:00:20] at various nodes in the tree. Because one of the tricky parts about memoization is, once you stop, you stop. You can't like
[04:00:26] get to keep on going. You have to like start from a new location.
[04:00:30] Right. Like
[04:00:31] you have to set a new change because
[04:00:34] This is the problem.  If you update...
[04:00:38] state in that parent component and it affects a component three levels down, you can't stop it with a memo
[04:00:44] Like you have to run your that component, you have to run the children, you have to run the next child and to get there to run it because it's not going to just.
[04:00:51] jump there because the second you memoize and go, yeah, I'm not, I don't change or my direct child doesn't change. Like if you could know that,
[04:00:59] it would never get to the lower source. Memoization
[04:01:03] would prevent it
[04:01:06] like if like if you could never memorize to optimize that way you have to pull the data out.  This is one of the challenges for Git because
[04:01:13] even if you remove the writing of the memo, technically speaking, memoization can't give the same, like as long as it's inside the component, it can't give the same characteristics.
[04:01:24] that like signals do or pulling your external state library out like Jotai can.  You have to have a way of almost...
[04:01:31] pushing back in or restarting it from further down, like below where the memoization cuts it off.
[04:01:38] You know, this is kind of like what Relay does or, you know, Jyotai or whatnot.
[04:01:42] So I'm very interested to see how the React compiler handles it, because just like the naive approach doesn't work.
[04:01:50] Right. Misko wrote an article about this a while ago, but basically why he didn't he didn't have much help in the React compiler. I assume that they're going to solve this because if they weren't, then like the compiler is pretty much a waste of time.
[04:02:02] So I
[04:02:03] I think this is why they started calling it auto-reactivity compiler instead of an auto-memoizing compiler, because it gave people the wrong impression. Because if you're just putting the memos in and cutting off short,
[04:02:13] won't actually solve the problem.
[04:02:16] Thank you.
[04:02:20] No, it's not even that. They know the dependence. They can know that you give them the arrays. And everything renders once anyways in all cases. So it's not that. It's just that their render model is such that
[04:02:34] Um...
[04:02:37] There is no subscriptions. There's no it's just pull.  It's literally like we schedule.
[04:02:42] And...
[04:02:43] Like...
[04:02:45] Yeah.
[04:02:46] essentially like
[04:02:49] As I said, walking back up to the change is a waste of time.  So, like, they just have to run at the coarseness of what their updates are.  Like, there's just...
[04:03:00] they would have to propagate, which they don't, they'd have to propagate the change to know, like, if the end result changed, right?  They, this is just a choice in terms of being poll based.
[04:03:17] Thank you.
[04:03:19] Well, that's good. That's pretty cool for them. We just removed like all the reactivity from the server.
[04:03:26] Thank you.
[04:03:27] Thank you.
[04:03:29] Thank you.
[04:03:32] Thank you.
[04:03:35] - Yeah, I mean, a lot of the tricks I imagine that they're gonna
[04:03:38] Like it has to be more than memoization though, otherwise you're not going to get the same characteristics with depth is what I'm trying to say.  Let's get there. The other side is push, right?
[04:03:47] The other simple idea is like RxJS and this we talked about more I think on the angular stream because I feel like on the pull side and
[04:03:55] We all say pull, but we don't really think about why it has to be the way it is. And it's largely because
[04:04:01] there's no point in being any more granular than the scope
[04:04:05] of
[04:04:06] the ownership of the state or the thing that triggers the check because it has no choice but to run it anyways. Where a push based system is like everything subscribes and travels down. This is RxJS, but in a sense this is what KnockoutJS was. It was Signal's API, but it was essentially
[04:04:21] purely push base.
[04:04:23] So,
[04:04:24] In this kind of system, you would just go, okay,
[04:04:29] You start here.
[04:04:31] fan out the change. Like, consider a depth first propagation, right? So how would you do depth first? You go A, and then you go to B,
[04:04:40] And then go, okay.
[04:04:42] Let's update, see if we change. Oh, yeah, we change. OK, let's go to E.
[04:04:45] Okay, E changed.
[04:04:47] Yeah.
[04:04:47] But the problem is...
[04:04:50] We didn't get C or D beforehand.  So then E would go run the console log.
[04:04:55] And then we go to C.
[04:04:58] And then to D,
[04:05:01] and then run e again and then run content to log. You'd log twice if you did
[04:05:06] depth first because you basically
[04:05:09] would get the like the wrong value. Okay. So how about breadth first?
[04:05:14] Breath first is kind of weird, because think about this.  When you actually created the graph, you kind of went,
[04:05:20] Um, you didn't quite go, I guess in here we went,
[04:05:25] We went sort of
[04:05:27] Breath first...  But it was kind of like a breath...  It was more depth first.  Like...  Yes.  In a sense...
[04:05:33] Um...
[04:05:35] I
[04:05:36] Like, it's in the middle because you knew that E had to come after D, so I guess this is not a good comparison, fine.
[04:05:43] I was gonna say you went depth first.  You usually go more depth first,  but technically speaking, as long as the dependencies  are there before the final thing.  But if we went breadth first for this particular
[04:05:54] Um,
[04:05:55] this particular example, you'd go A, then you go B, then you go C, then you go E, then you go D. Wait.
[04:06:02] It's still a problem.  Because then you go E again.  You go A, B, C, E.
[04:06:07] E D
[04:06:09] effect. I guess you'd only console log
[04:06:14] It's hard to say if you'd console log twice,
[04:06:17] You might.
[04:06:19] might actually still console.log twice, but my point is, you'd end up running the enode twice again. Because again, the depth
[04:06:26] isn't correct because
[04:06:28] E and D are at the same depth.  And because of the shape of this graph,  it just so happens that E runs before D.
[04:06:35] Okay. My whole point here is that push-based systems actually have a pretty hard time ensuring the guarantees we're looking for efficiently. You can kind of do like sorted inserts or like use IDs on creation and then like sort, like you can basically sort on the fly, but sorting super expensive.
[04:07:05] computed. So like you're just constantly
[04:07:09] Um,
[04:07:10] sorting every time you realize something's happening it's it's very slow i i we played with this
[04:07:17] So,
[04:07:19] Luckily, this is a third option.  This is why our solution is to build...
[04:07:23] different versions of the push graph. Yeah.
[04:07:25] But it's because they're trying to be declarative, right?  The thing about signals or, you know, this kind of reactivity, like the actual, like,
[04:07:32] I don't know what to call this kind of reactivity, is that inside these expressions, it's actually kind of not declarative.  It's imperative. So they have to...
[04:07:42] Rx has an operator for every single thing you could do inside this memo, essentially, right? Like add, multiply, like whatever kind of combination of thing you can do there or in every way of wiring each thing together, they need a separate operator for. That's what's great about this kind of...
[04:07:57] like simplified reactivity, like the spreadsheet style, the signal style,  even the react book styles, like it's just.
[04:08:04] It's just literally...
[04:08:06] The Lynx...
[04:08:07] can be just put together dynamically simply by reference, right?  In React's case, they don't care because they run the whole thing again.  In the case of...
[04:08:15] that signals
[04:08:17] it's a little bit different, right? Because
[04:08:20] their push-pull, which is like, okay, if one of the options isn't good enough, what if you do both?
[04:08:26] And if you do both, it changes the math a bit because, yeah...
[04:08:29] The trick is you push out the notification that something could change, but you don't run the node yet. You just tell the whole rest of the graph that, "Hey,
[04:08:37] I could have changed.
[04:08:39] There's still like...
[04:08:40] possibility that things exit out early, but you give it the possibility to know it's changed. And then on the other side,
[04:08:47] When you pull, you can actually now do that pulling the way we were talking about before, because with...
[04:08:53] you know, the React pull system, there's no point being granular because
[04:08:58] Like, you're gonna run it all anyways. But with the push-pull system, you only queued the effects that actually could change. So like,
[04:09:05] All the stuff that's unrelated doesn't end up in the queue.
[04:09:08] So then when you walk up, you can actually, you know,
[04:09:13] find where the change is and exit out. And it's consistent because you actually follow that
[04:09:19] dependency graph, you know what can change and you know because you're pulling it, you know what did change. So in a sense,
[04:09:28] you know,
[04:09:30] Where
[04:09:31] You know, the problem with the Pulse system is that
[04:09:35] you know,
[04:09:36] it's consistent but kind of inefficient because it has no clue what changes.  And a push system, which...
[04:09:43] knows exactly what changes but has no idea of the impact of its change
[04:09:48] So it has a hard time, like...
[04:09:50] handling the system in a whole, Push-Pull actually knows both what changes and the impact of the changes. So it's able to actually be much more optimal.
[04:09:59] That's what the whole signals thing is, right?  Like that's why people care about signals.  It's not just an event system.  Most event systems are kind of push based and
[04:10:08] And as I said, simple, naive, kind of like just pull the value, schedule it on a timer is this.  This is both, essentially.  And I described a very simple algorithm here, right, which is, you know, push all the way down.
[04:10:22] and then pull back so then you get up to here,  then run and then run and it works.
[04:10:29] I think
[04:10:30] If you want more detail, watch the milestone, read this article.  I'm not getting into push-pull today.  I just wanted to say that, like,
[04:10:37] This whole thing is only possible because of this concept of deriving versus synchronization.  Otherwise, we wouldn't be doing any of this walking, and every change would just be like...
[04:10:48] Bam, bam, bam, bam.  And the sad thing is like,
[04:10:51] This is the trap, right? A lot of React developers do that. That's why React component renders 17 times. People would probably do the same in Solid as well if it was as permanently used.
[04:11:02] it wouldn't have had as big of an impact
[04:11:05] because it wouldn't cause the components to re-render on a whole.  It's not like the pull problem, right?
[04:11:12] it's a more granular but um
[04:11:15] You know, it's still...
[04:11:17] It's still this problem of essentially
[04:11:21] like starting the cycle over and over and over again. You need to know those dependency rays.
[04:11:26] Ultimately, it's the way to stay consistent. I love this is from the old MobX blog.
[04:11:31] where he was showing like a name update, not synchronizing another part of Facebook.
[04:11:34] I think it was his Facebook.  I can't even remember back then.
[04:11:37] Um,
[04:11:39] So,
[04:11:40] But...
[04:11:41] Um...
[04:11:42] As I said, this article is kind of just like a precursor to what I want to talk about, because I want to I'm going to take this next to talk about the difference between eager and lazy evaluation of derived state and talk about async, because this is all based off the idea that like,
[04:11:55] stuff can be resolved synchronously and
[04:11:59] that
[04:12:00] you know,
[04:12:01] I think in this case,
[04:12:03] pushes...
[04:12:04] Eager.
[04:12:05] And pull...
[04:12:06] is lazy.
[04:12:08] And push-pull that I'm describing is kind of...
[04:12:11] Um.
[04:12:12] Thank you.
[04:12:13] I call this a lazy push-pull system. This is the one that is getting implemented in most frameworks. Ironically, Solid is an eager push-pull system, which is
[04:12:21] interesting because we are looking at going to being a lazy push-pull system
[04:12:26] But there are trade-offs there.
[04:12:29] It's all in this weird middle ground where we're like angular.
[04:12:32] Preact.
[04:12:34] Even view.
[04:12:37] Um...
[04:12:39] Okay.
[04:12:40] I'm not sure about Quick,
[04:12:42] Um, I wouldn't be surprised. Most of them use lazy push-full. Um,
[04:12:47] I don't even know if quick...
[04:12:50] Svelte Ruins, lazy. I don't know if Quick actually follows through the guarantees. I haven't seen their implementation yet.
[04:12:56] Um,
[04:12:57] but essentially solid is a odd man out,  uh,  because,  uh,
[04:13:03] We do eager push-pull, which is interesting dynamics because, in my opinion...
[04:13:10] I think lazy is better, but some things have to always be eager, especially when you consider async.  So I think that'll be a good topic in itself.  We'll cover it in a future stream.  But...
[04:13:19] This is only the baseline, I think, of kind of understanding.  But it's important because I think when you have this in your head, it's very easy to understand why Rx and push systems don't work in React.  Why there's such a hard time with external state.  And why, like...
[04:13:34] like signals are interesting perhaps. This kind of puts it all in perspective.
[04:13:41] Thank you.
[04:13:43] Thank you.
[04:13:44] Yeah, yeah.  But enforcing the dependency graph to be static  is kind of miserable. And to be fair,  compilers...
[04:13:52] are one way people are doing it like so that you don't have to write dependency graphs because if but like
[04:13:58] Eh.
[04:13:59] It's... none of the runtime ones are static because, like, essentially, anytime you run in, the dependencies could change, and then the expectation would be weird if you forced it to be static, like the only first one.  I think the fact that dependencies are dynamic is the reason that this is so powerful. It's funny, RxJS...
[04:14:19] actually
[04:14:21] Kind of has like the way you wire it makes it more static than what we do like I'm trying to
[04:14:26] Let's pull back to the code example here.
[04:14:30] But like you can have conditional dependencies in these things and those conditions can even exist in code you can't see. Like you can call a function which has conditions that are downstream in a runtime system.
[04:14:40] So like,
[04:14:42] Yes. If the dependencies were static, you could, but I...
[04:14:46] I think this is why this is so powerful for templating. Like in general, like the power of like signals and stuff is the fact that these are dynamic. Like you can, like we use the stuff in solid to render every part of the DOM, all updates. When you have a conditional in your template, it's just a conditional in a memo, essentially, like in a derived value, like you're just branching, you're doing.
[04:15:09] allocation and cleanup all along the reactive graph.
[04:15:18] Thank you.
[04:15:21] Thank you.
[04:15:23] Thank you.
[04:15:26] Yeah, if you're going to be...
[04:15:32] doing something, uh, like more considerable, uh, I would definitely consider more advanced. This is like this, this, this article was designed to be like the followup to like,
[04:15:44] What is signals? You know, it's a little bit more general, so I'm putting in its own category. But like this is very much like
[04:15:53] beginner, intermediate, not...
[04:15:56] enough for someone to actually write the stuff.
[04:16:00] Yeah, my stream with Milo is great.
[04:16:02] And honestly...
[04:16:04] His article...
[04:16:06] that's in this article is also great.
[04:16:08] That's what we talked about in the stream mostly, but we answered the tough questions.
[04:16:14] It might even be worth watching the Angular stream, not the one I did with Minco, but the one that I did with...  um...  Pavel and uh...
[04:16:22] and Alex, because we talked a lot about Angular's system.
[04:16:26] Um, to be fair, they, they backed off some of the features that they were talking about.  They didn't end up implementing in the end.  Like they had this really crazy smart, uh, garbage collection thing that they were doing  that they, I think they got rid of.  Um, where is it?  Uh...
[04:16:41] Yeah, signals in Angular.
[04:16:43] It's a good one. And then future fine grained reactivity with Milo.  Both of these streams were almost back to back and they were very,
[04:16:51] They were very good.
[04:16:53] source of like in depth.
[04:16:56] Yeah, Milo's article is very good because he actually shows the difference between like MobX, Preact, Reactively, like actually talks to the algorithms of each of them.
[04:17:09] Thank you.
[04:17:11] Yeah, it's funny because I did two Angular streams within a couple months, right?  Because I did this one with Pavel and Alex, and then I did learning Angular with Minko, like the basics.
[04:17:24] yeah, this is, this, this was a very, yeah, I, I'm just gonna post it again.  I keep on mentioning it, but let's actually just post, uh,
[04:17:33] Milo's article.
[04:17:35] You guys will be all happy. Milo is probably the main representative solid in the...
[04:17:42] in the TC39 signals proposal.  I try and join in when I can,  but Milo's on it.
[04:17:49] Thank you.
[04:17:51] Yeah, this is just a good article.
[04:17:56] reactively is the basis of what solid 2.0 reactivity is based on, but I'm,
[04:18:01] I'm still, I'm kind of learning, we're learning some really interesting stuff as we're going on.
[04:18:08] which will come up in future streams.
[04:18:14] Thank you.
[04:18:15] Thank you.
[04:18:17] I mean  oh you mean for like the proposal?  no I mean  in the github there's like a
[04:18:25] Mark.
[04:18:27] prototype of the implementation, but it hasn't been released public.
[04:18:33] If you're talking about framework independent signal libraries in general, there's lots of them. I didn't make it separate and solid, but like almost every signal's library can be just used on its own.
[04:18:44] It's pretty commonplace.
[04:18:47] View, Preact.
[04:18:50] I mean, most of them can be.
[04:18:53] Okay
[04:18:55] Yeah, so let's get to this week in JavaScript.  I think that's all I wanted to talk about.  I think it's a good topic, but let's get this thing rolling, which actually reminds me.
[04:19:06] How are we doing here?
[04:19:08] What are we doing here?  Okay, so there's 70 people watching right now,  and there's 63 thumbs up, which means...  Oh, now there's 68.  Which means that...
[04:19:18] Okay.
[04:19:19] Not everyone who's watching has liked the video yet.
[04:19:22] So we can do something about that.
[04:19:25] That also means that I have
[04:19:27] Wow, this is like more people on Twitch than YouTube. That like never happens.
[04:19:32] I don't know what's up. I guess everyone was trying to get in on those free subs.
[04:19:36] you
[04:19:37] Usually it's like double YouTube over...
[04:19:40] over Twitch.
[04:19:43] Thank you.
[04:19:47] Anyway, um...
[04:19:51] *sniff*
[04:19:52] Which reminds me of CodeSandbox is probably like going to shut down all my sandboxes, which can be really awkward for these articles.
[04:20:02] It's all good. I mean that bell smashed that like, yeah exactly.
[04:20:10] Yeah, honestly, it really helps.
[04:20:17] Yeah, I'm not going to tell you guys all how to use prime subs.
[04:20:21] But they are a thing.
[04:20:23] All right. I never noticed this. This image from this article actually has copyright across it.  Do you see this?
[04:20:32] I wonder if they added it later.
[04:20:35] I swear it wasn't there originally.
[04:20:38] No, they couldn't. It had to be there. Otherwise, because this uploads to a different source, I literally just like didn't notice the copyright.
[04:20:48] Thank you.
[04:20:51] Thank you.
[04:20:52] This one's fine.
[04:20:59] Well, I mean, I guess I should see what the pricing plan is, but it's like...
[04:21:03] It's I I I have like so many of it
[04:21:08] And we'll see.
[04:21:14] Okay, well that's good.
[04:21:18] Yes.
[04:21:22] Because, you know the answer, it's because React used an Atom and that was what I did for Reactivity. Anyway, let's get ready here for this week in JavaScript. I'm going to zoom out of here and look at my wonderful room for a moment while I get this all set up.
[04:21:39] Thank you.
[04:21:41] Everyone having a good week.
[04:21:47] Thank you.
[04:21:49] Thank you.
[04:21:50] Let's see.
[04:21:56] Thank you.
[04:21:57] Thank you.
[04:21:59] Alright.
[04:22:04] It's here.
[04:22:05] It's
[04:22:07] It's been a while, but we've covered a lot of the stuff on here, so I'm hopeful that we can do this in a reasonable amount of time.  I wasn't sure how far, how long the stream would go.
[04:22:16] So I guess we'll find out. Let's scroll this back. Oh yeah, there is some spicy ones.
[04:22:22] Okay, I've got to make sure not to skip over stuff we've already talked about.
[04:22:32] Thank you.
[04:22:35] Okay, yeah, cool. That's good.
[04:22:39] I gotta go back to, like, December...
[04:22:44] 21st, I think.
[04:22:49] Thank you.
[04:22:53] Actually, looking at the solids feed. Yeah, it's fine.
[04:22:57] And then good.
[04:23:02] Thank you.
[04:23:03] And then good. Okay, I think I'm good.
[04:23:06] I got about 40 minutes, so let's get this rolling.
[04:23:12] Okay.
[04:23:15] Thank you.
[04:23:18] Thank you.
[04:23:18] Because I think we... I did bait it to...
[04:23:22] Yeah, I did the stream...
[04:23:24] on the 20th.
[04:23:26] So basically,
[04:23:28] Everything.
[04:23:31] And then I talked about my article
[04:23:35] Okay, cool.  Done.
[04:23:39] Oh, you guys are asking what the solid community...
[04:23:42] What is it? What was the question here?
[04:23:48] Oh, he's having a fun week, I see.
[04:23:54] *sniff*
[04:24:00] That would be interesting to hear what the perspective is, though I have a feeling I already know what all the arguments are.
[04:24:08] Thank you.
[04:24:14] Thank you.
[04:24:15] Yeah, okay. Yeah.
[04:24:24] Okay, cool. Let's get this around.
[04:24:28] You can use one of these.
[04:24:30] This Week in JavaScript.
[04:24:32] Oh, God.
[04:24:34] Sorry.
[04:24:36] And let's get started on this week in JavaScript. Okay.
[04:24:42] So it's been more than a week.
[04:24:46] To be fair.
[04:24:48] although I did do a stream last week,  I didn't talk about
[04:24:53] you know,  everything.  So I'm going to be picking up pieces from all over the place.  Um,  I would start with solid news.  I think we already talked about the big news,  30,000 stars.  We talked about solid start release.  Um,  yeah,
[04:25:09] talked, you know, about, there's just a lot of these integrations keep on popping up.  Solid's on a little bit of a hype wave right now. Um,
[04:25:16] which is really exciting. I already mentioned that.
[04:25:21] I think we've talked.
[04:25:23] Thank you.
[04:25:24] a ton about
[04:25:26] you know, solid. I mean, this is cool. Alexis is showing off the
[04:25:31] streaming, you know, stuff one line at a time.
[04:25:35] demo, the capability of server functions. But generally speaking, I don't think there's anything that I'm going to show you here, a lot of mobile stuff that you haven't seen before.
[04:25:46] um, cobalt,
[04:25:50] Yeah, so
[04:25:53] Those guys wanting staple backends in JS, this is kind of cool.  Jamie?
[04:25:59] I believe he's CEO of Convex.
[04:26:03] they do reactive databases.  So if you are the kind of person who wants to have that like,
[04:26:09] You know, you're picturing that someone goes
[04:26:13] and they update a field in your database,
[04:26:16] And then
[04:26:17] somehow it updates a single field in your UI without re-rendering anything, this is a solution for you. Because essentially,
[04:26:25] We can take fine-grained patched
[04:26:28] if updates from your database,  'cause they know exactly what changed reactively,  pass it through to solid,
[04:26:33] where it knows exactly what's changed, and then solid, again, doesn't re-render and just diffs. It's end-to-end.
[04:26:39] reactivity with fine grain reactivity.
[04:26:43] It takes less than 50 lines of code.  I haven't looked at this too closely.  I've seen him play it.  He did a YouTube video about a year ago.
[04:26:49] Very cool stuff on that other side when we were talking about how you could do
[04:26:54] Um...
[04:26:56] Thank you.
[04:26:56] you know, stateful servers with solid.
[04:27:04] Thank you.
[04:27:05] Yeah.
[04:27:13] Okay, so...
[04:27:16] Yeah.
[04:27:17] A lot of solid start hype.
[04:27:19] But it looks like there's other MetaFramic options in the Solid Ecosystem.
[04:27:22] They added some nice data fetching APIs for Vike, which is another Vite-based system.  But let's move on.
[04:27:32] All right.  Where do I want to go next?
[04:27:39] I think this is forever going to be something that haunts us. I don't want to get too much on Rasmus because he's legit. He uses sinuous. Him and Fabio are probably best buddies. I don't know if they know that. But purest reactive people signals.
[04:27:59] I have a lot of respect for people who are...
[04:28:01] that principled in terms of their approach.  One thing that they all hate about Solid  is the JSX transform.  They want to use...
[04:28:08] less of it, even though
[04:28:11] It's kind of one of the
[04:28:13] in my opinion, one of the clinchers here.  I did wanna talk about this briefly because,  I think the compiler for the JSX transform,
[04:28:21] is actually...
[04:28:23] really good and really important.
[04:28:25] Um...
[04:28:27] His complaints were basically along the lines of like, look...
[04:28:32] Um...
[04:28:33] Thank you.
[04:28:34] He...
[04:28:35] Three perfectly normal JS panels, three linter complaints.  This feels like rules of hook, but it's not SparkJoy.
[04:28:39] Static analysis of a language like JS is a bad idea. The language is not suitable for Hocus Pocus.
[04:28:45] So I'm trying to remember what the issue was here  He's talking, okay he's saying that the linter  Basically the linter complains about a bunch of stuff
[04:28:53] Um,
[04:28:54] Okay.
[04:28:57] Yeah, it's basically, we have a linter that basically makes it easier to succeed with solid and not lose reactivity. And it's basically complaining at a bunch of places where...
[04:29:09] where you could argue that this is like the linter could get smarter.  Um,  but,  um,
[04:29:15] I think this is just kind of the reality of where we're at right now, where
[04:29:19] We can only do our best
[04:29:20] estimation, but basically a lot of this comes down to
[04:29:24] dislike of the compiler.
[04:29:27] Um...
[04:29:30] And a lot of this concern of like,
[04:29:33] why you can just call a function like this, and not have to wrap it in an expression like you do when you use, like, tag template literals or something that doesn't use a compiler. Because, like, it's like, why, why, why are, why can you just call it? Aren't you passing the value, you're not passing the signal. And I have a whole article about this, obviously, we talked about a while ago, which was about the react principle of locality of thinking.
[04:29:58] Which is good...
[04:30:00] Checking out
[04:30:02] Why do they hate the JSX transform?
[04:30:07] Let me see if I can...
[04:30:09] The gist of it is like,
[04:30:12] they don't feel like it's JavaScript in the sense that JSX has no defined semantics if you check it. They just, essentially, all the tooling was built for Reacts JSX, so it's really odd to them that like,
[04:30:23] you know, you wrap things in functions when using solo, but then when you go to the JSX, you can just like pass values in.
[04:30:28] Anyone, I think, I feel like people who used a lot of like Knockout or View or...
[04:30:33] Any of, like, the reactive libraries that, like,
[04:30:37] you know,
[04:30:38] existed in the, in the past.
[04:30:41] like, and especially if they use them before using React, this is kind of like a no-brainer.
[04:30:46] But for people who kind of came in after...
[04:30:49] After react and then they're kind of going backwards we like from that side I
[04:30:54] It's not...
[04:30:55] like, there's like, why would it act this way?  I'm like, well, JSX can do whatever we feel like it. Right.  But like the concept of what JSX is is kind of different.
[04:31:07] So
[04:31:08] Thank you.
[04:31:09] Yeah, I mean, the thing is,
[04:31:12] he asked, he's like,
[04:31:14] He used sinuous, which was just a, and I think Volby's like this as well.
[04:31:19] He wanted to know very specifically...
[04:31:22] Why?
[04:31:24] is the compiler beneficial? And I think this is the best answer I've given. It takes 10 tweets,  but I think it's by far the best answer because he says that he sees no upside. And I'm like,
[04:31:32] No, no, no. Okay, let's talk about this. First of all, spreads with dynamic object shapes is a big one, where the existence of properties and props can change and need to be introspective, potentially reactive, independent of change. Think about it.
[04:31:43] If.
[04:31:45] You don't have the compiler, how do you do spreads?
[04:31:50] Right. You can do spreads of...
[04:31:55] You can do spreads of
[04:31:57] signals, potentially, right? You could go like spread,
[04:32:01] like,
[04:32:02] How do you do granular spreads is a better question.  Because you could go like, okay, let's spread count.  I mean, I don't know why you spread count.
[04:32:07] Sure. But what if you only want to update certain things based on specific values? What if you're spreading props and
[04:32:15] Each of those props are like different keys.
[04:32:18] I mean...
[04:32:19] You can call counter
[04:32:22] with
[04:32:23] any number of arguments you can basically change it if
[04:32:28] If you have
[04:32:30] A store.
[04:32:31] And you went...
[04:32:32] Store.
[04:32:33] Right?
[04:32:35] what properties are available on store can literally change at any given time.
[04:32:44] like what exists or not. If you want to be able to go granular where you can spread like this and you can update one property
[04:32:52] on the store
[04:32:54] and have it reflect on one property here and not like
[04:32:58] every single prop re-render,
[04:33:01] you need to be able
[04:33:04] to basically handle a couple situations.  And one of them,
[04:33:08] that's tricky, is obviously...
[04:33:11] Sp...
[04:33:12] working between spreads of signals,  so each property is separate signals,  and spreads of objects.  But the other challenge is like,
[04:33:22] Even if we did some different kind of transform...
[04:33:25] where we created function on the other side. How do you do like
[04:33:30] Thank you.
[04:33:31] Something...
[04:33:33] in props. It would always be true.
[04:33:37] Like,
[04:33:37] or false like
[04:33:39] If the shape can change,
[04:33:43] Like...  Like...
[04:33:47] I mean, it's kind of interesting, right?  Because you could have like props something
[04:33:51] Right. And would it always be defined? Like if they would need to be able to ask questions.
[04:33:57] for the existence of any property and they'd have to,
[04:34:00] run it. Because it's not just...
[04:34:05] it's not enough that it's there potentially, you'd have to like pseudo make it a function. Like if someone, pretend it's like made up property,
[04:34:14] Because it doesn't exist yet.
[04:34:16] you wouldn't just make a property,  you'd actually have to return a function accessor to make it work.
[04:34:24] Like dynamic spreads are actually very problematic.
[04:34:29] None of the frameworks that actually...
[04:34:33] don't do the transform, actually handle them properly.
[04:34:37] We don't handle them 100% properly, but they don't really handle them.  Most of this comes down to the existing proxies for nested reactivity.  Once you start using this potential opens up, it makes everything else clunkier.  Like now you're manually wrapping the functions everywhere.  If you've ever seen any of my code sandbox, hyper script examples,  you can, I can show you what I'm talking about.
[04:34:55] Because let's go to...
[04:34:58] my dashboard.
[04:34:59] And I think I have... I forget where it is.  Is it in my...
[04:35:03] I have this one example that's like,
[04:35:06] Um,
[04:35:14] that I basically just like did everything in it. I made like a whole app with solid router
[04:35:21] the like gets home, it's got counter profile, it even has a tic-tac-toe game in it if I remember correctly. Yeah, with suspense, that's using transitions and suspense. So this
[04:35:31] app.
[04:35:32] is made using tagged template literals. It has
[04:35:36] It has all the...
[04:35:39] the nice fixins.  But I mean, it's kind of interesting  'cause the router I'm using element,  I'm doing this on purpose  because I need to wrap it in a function that call HTML.
[04:35:48] Like if we're doing something with stores, let's see, what's tic-tac-toe look like?
[04:35:53] Yeah, tic-tac-toe looks lovely, right?  Because now, I mean, to be fair, if this was a function, then we could pass it through.  But you start getting into...
[04:36:03] I guess.
[04:36:05] If you were writing this way, these would all be...
[04:36:08] functions
[04:36:10] a function speed.  Like, it doesn't...
[04:36:13] I'm like, yeah.
[04:36:15] trying to remember the example I had a few examples where like you're just like why the hell do I have to do all this crap
[04:36:21] Like props is obvious, but if you change props, the argument goes away.  But if you're actually using...
[04:36:26] Or state? Is there a--
[04:36:27] state
[04:36:29] What is state? Is there any stores in this example? Yeah, create store.
[04:36:33] Like even this basic scenario state...
[04:36:38] Let's get back to the bottom of this component.
[04:36:44] Okay, so that's interesting state history move.  Like, I don't know.
[04:36:50] Thank you.
[04:36:52] Forget to wrap one of these, you know?
[04:36:58] Guess what? It won't work properly, but you will never know, right? Like this, not to mention the  problem of like, okay, let's continue.
[04:37:15] Thank you.
[04:37:18] Let's continue. Okay, non-compiler ultimately misses some nice Ds, like div isn't just a div, right? You have to wrap it in a function, since elements need to be wrapped in your context execution order, and you need to detect is function unless you force props to always be functions, which...
[04:37:36] to determine like is it a function or not you could you can provide your own unwrap function to be fair
[04:37:44] You know, like you could basically say, like, instead of calling signals as functions, always go unwrap.
[04:37:49] And then if it's a value or a function, it could do it.
[04:37:53] But like, generally speaking, if you give it either or, the types also get a little bit more interesting.  Maybe they're more...
[04:37:59] informative, but like
[04:38:01] essentially like
[04:38:03] Now your types are number or function of number, right?
[04:38:09] Um,
[04:38:10] And as I said, this is about the locality thing where now you're like thinking of like, am I getting a signal or not?
[04:38:15] Okay, many solutions don't untrack components. To be fair, Bobi does. Classically, people didn't. So, which is nuts when you consider like any execution could trigger the upper context. This is a weaker argument, but this is something that like when people always go, oh, I remember the good old days of blank, and I'm like, no.
[04:38:33] No.
[04:38:34] Thank you.
[04:38:35] Um...
[04:38:37] I think I don't think sinuous did
[04:38:39] I think that SJS or surplus definitely did not untrack.
[04:38:46] Um,
[04:38:48] So, you know, this whole trigger impression of parents.  I will say this, TypeScript has made this approach  more manageable in recent years.  In the past, without TypeScript,
[04:38:55] this was like, in my opinion, a non-starter.  Because like, as I told you, like,  oh, forgot to wrap something, like...
[04:39:02] Thank you.
[04:39:03] Do do do do do.
[04:39:07] Right, pass by value from the transform actually eliminates this whole category of thinking and gives us both superpowers of React mentality and locality. For me, the asset comes together, proves a superior developer experience of tooling, destructuring. I thought I had more about spreads.
[04:39:19] I thought I found something, there's another problem with spreads later on.
[04:39:27] Yeah, I can see why people would. Granite spreads are a problem in general. Even static shapes, a naive spread with a function won't fall through properly.
[04:39:35] It will obey JS, but it won't be helpful.
[04:39:38] Damn it, I wish I had the example of that.
[04:39:41] In my head.  I knew what I was writing at the time.  I was like playing there with the spread.  And I was like, man...
[04:39:49] Thank you.
[04:39:53] What was I trying to say there?
[04:39:56] Damn it, that was another good one.
[04:39:59] I think spreads are probably the thing, although we have to address our spreads in the next version so they're kind of awkward.
[04:40:06] Thank you.
[04:40:10] Thank you.
[04:40:16] you
[04:40:18] This is fair, right?  But, like, for me, the important part is trying to keep the impact of the compiler localized, right?  So, like, Svelte doesn't have, Svelte's compiler, this is, like, the difference between Svelte Ruins.  They extend this outwards to, like, every file.
[04:40:34] that I guess has a Svelte extension.  This is one of those things where the scope of this is where it gets challenging.
[04:40:41] JSX, the arguably best thing about it was it allowed us to
[04:40:46] lean into this without...
[04:40:48] Um,
[04:40:49] Thank you.
[04:40:50] without touching the GS side of things.
[04:40:53] Anyway.
[04:40:54] Um,
[04:40:56] Thank you.
[04:40:58] Yeah, I guess looking back at this, I had two points about spreads.  I had some points about ergonomics and mostly...
[04:41:07] Mostly about locality of thinking, which had an article about, I think those three probably cover, cover it.
[04:41:16] Yeah, this is an argument for why don't you do it like spelled.
[04:41:20] Which I think is a whole other scenario.
[04:41:25] Thank you.
[04:41:28] Yeah.
[04:41:29] Thank you.
[04:41:30] All right, guys.
[04:41:33] All right, let's go back.
[04:41:37] Thank you.
[04:41:39] It was interesting, though, because...
[04:41:42] Thank you.
[04:41:43] Forever open source actually
[04:41:47] did all the changes that they...
[04:41:50] proposed
[04:41:52] Auto-called signals, destructured props, tracking and components, no build.
[04:41:57] Um,
[04:41:59] ironically, they purposely took solid, forked it to change it
[04:42:04] to be the way like basically address all the stuff and then they decided that they were completely wrong
[04:42:11] Um, it's fine. This is, this is one of those, um, ones that are, that it's tricky. You know,  how like companies have money back guarantees.
[04:42:20] I...
[04:42:22] Bye.
[04:42:23] I feel like there's going to be people who are very skilled who do not like this decision.
[04:42:29] but for most people,  it's one of those ones where I'd be comfortable enough to be like money back  guarantee.  Like,
[04:42:35] I'm confident enough, not that
[04:42:38] this is the right position to take. I'm confident enough that you will think it's the right position to take if you actually
[04:42:43] tried to do it the other way.
[04:42:46] So that probably puts us in a fairly...
[04:42:53] a decent place. There's just, the anecdotal thing has just been way too heavy. Like the, I, we had, we had a bunch of Mithril developers who came over and they're trying to use solid with the hyperscript and they're just like, I give up. Like it's fine.
[04:43:10] But...
[04:43:12] And I hope I say don't mind writing it.  Have you built anything significant with it?  Like my concern is like it gets
[04:43:18] It just takes one little thing and then stuff gets kind of nasty. Um,
[04:43:24] I have to think about what to do in the future, because there is a lot of people who are really interested in this no build path, even if it's kind of like...
[04:43:31] what's the term paddling up a river or something, or what's the term when you, when you do something that's really like,
[04:43:37] A lot of work and it's pointless.
[04:43:40] What's...
[04:43:42] I forgot, there's a term for that anyways, so...
[04:43:45] But.
[04:43:47] Um...
[04:43:49] Yeah, I don't know.
[04:43:51] Thank you.
[04:43:52] I...
[04:43:53] Amen.
[04:43:53] Yeah. So let's just move on from that one. I do think it's
[04:43:59] interesting though I think that for people in community  know this will continue to come up I'm  positive of it
[04:44:05] Right. I think it's good.  Because there are places where we've made sacrifices around these kind of decisions.  Where like...
[04:44:15] From the purest sense, I probably wouldn't be that happy about it.
[04:44:20] So like, I get it.
[04:44:21] But on the other hand, like
[04:44:24] Yeah, it's a tricky place.  The most important part when you have these kind of slippery places where...
[04:44:30] your position kind of makes you almost like a hypocrite is to find a line,  like a boundary that you decide not to cross.  Cause honestly,  that's been a lot of the,
[04:44:41] complaints with React recently,  like there's some React grammar,  which we're going to get to in a minute,  is the fact that
[04:44:48] React has changed, and the question is, have they crossed that line?
[04:44:51] You know, I don't know.
[04:44:53] Okay.
[04:44:57] Oh yeah, this is a cool one. I don't know if everyone saw this or understood what it meant, but I want to talk about this for a minute.
[04:45:03] I misunderstood it, so you can ignore the rest of my post, because I read something that Andrew said.
[04:45:09] where he said,
[04:45:10] like he described it kind of in a really sloppy way, but essentially this does exactly what you'd  hope it would do. They're figuring a way to use use to push back into the graph. Remember when I was  talking about derived state and saying that memoization stops the flow? Well they're going  to use use as a way of triggering downstream, basically like Jotai built in to React,  which is freaking cool, especially when you consider that this use memo will probably go away
[04:45:36] and with forget. So at that point
[04:45:41] Thank you.
[04:45:42] I imagine you'll have a lot of like
[04:45:44] You state,
[04:45:47] Use effect.
[04:45:48] and use.
[04:45:52] essentially, for a global state.
[04:45:54] Which, um...
[04:45:56] Feels kind of good.  That being said...
[04:45:59] Even if forget lets you write like crazy spaghetti code, like just let's not.  Local mutation is like the dumbest thing.
[04:46:08] Thing, I'm sorry. It just, I just...
[04:46:13] Yeah, I don't know. I mean, obviously I'm not suggesting, don't get me wrong, pushing to an array is fine or something. I mean, like reassigning variables and stuff like,
[04:46:21] Almost all the complex scenarios that they try and like talk about with Forget involve someone doing something that you wouldn't actually write anyways.
[04:46:30] Um...
[04:46:33] Thank you.
[04:46:34] I'm talking like reassigning variables and stuff.
[04:46:37] Thank you.
[04:46:39] Thank you.
[04:46:40] I'm interested in what the implementation is, because selectors are usually a little bit less efficient. But yes, I...
[04:46:47] Because they, yes, because what you do is you trigger this and then use the return value and then see if it changes.  So, yes, they're using the dependency array.  Okay.
[04:46:56] or so they're using the return value of
[04:46:59] of the memo to decide if it's changed, whether to run the component.
[04:47:05] So this is pretty cool.
[04:47:10] Yeah.  I, and I think with Forget, like, I see the picture.  It looks really cool.
[04:47:16] I think we talked about this.  We showed Dan's latest articles.  He's written two recently, which is cool.  I think I showed this.  I forget if I showed this last stream, but he hadn't written an article in like two years.  So like...
[04:47:26] Very excited about this.
[04:47:29] Um...
[04:47:33] Yeah, I started with the 30k star. It was big for me because I've been waiting. I was going to star solid at 10,000 stars, but I missed it. I was going to do it at 20,000 stars, but I missed it. 30,000 stars, I almost missed it. You can watch the video on my profile.
[04:47:46] Um...
[04:47:47] for a laugh when I hit two-factor authentication and I think all hope is gone.
[04:47:52] Anyway, it's at the top of my feed, so we won't go there yet.
[04:48:00] What do we got here? Remix? I love this example. I don't know if you guys saw this.
[04:48:05] They make like a Kanban-- he makes a Kanban board.
[04:48:09] And and like
[04:48:11] He's got optimistic UI updates going while he's dragging  with optimistic UI.  It's such a cool demo.  I love Ryan's demos on this stuff.  You should be able to do the exact same stuff in Solid Start  because we have similar optimistic updates,  but this is the power of Remix.  Before Remix, I remember there was a lot of FUD around like,  oh, who did nested routing in the React ecosystem,  you know, blah, blah, blah, you know, the copies and this,  and next copies and all this.
[04:48:37] And a lot of times you could look outside of React and be like, yeah, people were doing this before.  But this sort of optimistic update that Remix introduced...
[04:48:46] i feel like is a remix original i never saw this in any other framework and
[04:48:51] regardless of what happens with Remix over the years, I feel like this is the thing that should be attributed to them.  It's absolutely genius to avoid cash writing
[04:49:00] and then have the ability to have fluent optimistic APIs
[04:49:05] in a very intuitive way. This is Remix's gift to the world.
[04:49:10] you know,
[04:49:12] Other frameworks might have even the progressive enhancement thing with the form.  I think Svelte kit might have even got I don't know who implemented first,  but they demoed it before Remix did.
[04:49:22] Um,
[04:49:24] This...
[04:49:25] is
[04:49:26] Just...
[04:49:28] - Yeah. - Amazing.
[04:49:31] I love this demo.
[04:49:36] Thank you.
[04:49:38] Thank you.
[04:49:40] That's funny, right?
[04:49:45] Yeah, exactly. Yeah. I don't know why they're like focusing so much on like picking like the worst possible code ever and be like, look how we optimize it. And so it's like, just why are people writing that?
[04:49:56] Like really, why?
[04:49:59] *sigh*
[04:50:01] Thank you.
[04:50:05] Yeah, React server quotes do not require server and never has.  I get that this is confusing, but I'm lost what to do.  People keep repeating it doesn't. Speak about it for a true fact.  Can someone spread the word, please?
[04:50:13] Yeah.
[04:50:14] Do you guys remember the very first React Server Components demo?
[04:50:20] It was that Notes app and there was no SSR, so...
[04:50:24] Just putting it out there.
[04:50:25] The whole thing with server components is the two trees.
[04:50:28] As I said, I think we talked about this already, so I don't need to dwell on it, but...
[04:50:34] Thank you.
[04:50:34] Okay.
[04:50:36] It's a way of weaving them in a way that like is consistent, which is quite impressive.
[04:50:42] Oh, I talked about that.
[04:50:46] Talk about this
[04:50:49] I think I already mentioned I'm excited to see what Tanner does with Vinci.
[04:50:53] Um...
[04:50:56] I'll take a moment here.
[04:50:58] And I'd like to thank Aiden for this shout out.
[04:51:03] Thank you.
[04:51:04] Thank you.
[04:51:05] He...
[04:51:07] He told the story of when he first made that benchmark that stirred up a bunch of controversy. But
[04:51:16] I didn't realize how much it actually impacted him.  I didn't realize how much people are on his case.  I kind of kept out of it at first because I was just like,
[04:51:24] I didn't want to draw attention to it, but
[04:51:27] quietly reached out. Um, and I think so did, uh,
[04:51:32] Marvin from Preact, but it's, it's,
[04:51:35] Yeah, he's very close. Millions community is fairly close to the solid community. So I want to thank you for the recognition, Aiden. You give me too much credit.
[04:51:45] Your conversations have helped me just as much, especially getting perspective on how to
[04:51:52] you know, sharing ideas, like how to like improve integrating with react and whatnot. Um,
[04:51:59] So I did not realize that's how we found BlockDom.  So I mean, that's that's very cool.  I'm I'm glad
[04:52:08] Like...
[04:52:09] that we have million and that we have you aid.  And so thank you very much for, for this, uh, for this, uh,
[04:52:15] Shout out message.
[04:52:16] Why not?
[04:52:17] Thank you.
[04:52:19] Thank you.
[04:52:21] Thank you.
[04:52:21] Thank you.
[04:52:23] Yeah, Dioxys adding...
[04:52:27] um
[04:52:28] signals, which is exciting. Although it's still react, but also signals hooks and context, re-rendering and diffing early returns and regular control flows, but stays now entirely signal based effect. So basically it's like,
[04:52:40] building something like you preact.  And I think they clarified removing new state.  Yeah, no control flow.
[04:52:46] It's like stripped down preact and only use signals and then built a million inches by default.
[04:52:52] That's interesting.
[04:52:54] This approach would be good for benchmarks.
[04:52:57] I'm
[04:52:58] I'm actually thinking that, I say this a lot, that the structural value of
[04:53:02] of signals is actually more important
[04:53:06] Like,
[04:53:06] Technically, the million diffing is kind of like what we do for templates anyways.
[04:53:11] My gut, I guess we'll have to see.  This guy is crazy with the Rust performance thing,  but my gut is architecturally,
[04:53:18] Um...
[04:53:21] the...
[04:53:24] because signals that overhead yeah i don't know my gut is architecturally this is less efficient  than what like the approach we do with solid or i think leptose is similar
[04:53:32] But
[04:53:33] seeing more people using signals is still good.
[04:53:39] Thank you.
[04:53:45] Yes, although it's block DOM.  But I mean, the funny thing is like at that point,  a block DOM is essentially,
[04:53:52] See, because a block bomb is essentially the same as...
[04:53:55] like the template diffing stuff that like the template cloning stuff we do. So I guess the question is,
[04:54:01] They it means they bear the difference with the block dom is supposed to be done on control flow is more  aggressively
[04:54:08] Um,
[04:54:11] grouping, you know how we group effects?
[04:54:13] Blocked on would be like grouping more, which is good.
[04:54:17] until you hit insert points like control flow.
[04:54:21] So,
[04:54:22] Yeah, it's interesting. I wonder if through compiler optimizations, they can work stuff in a certain case, like something just framework will never see it because the state just updates and the triggers. But it's more interesting when you actually get to something a little bit more involved. As I said, my gut is that the VDOM at that point is not giving doing you any favors.
[04:54:41] Um, but you know, I, it's,
[04:54:44] it's probably not that different.
[04:54:48] Thank you.
[04:54:50] Yeah, I've seen some people combine VDOM with signals in this sort of way.  Just I don't I don't.
[04:54:56] Yeah.
[04:54:57] We'll have to see.
[04:54:59] It'd be interesting if someone actually showed...
[04:55:01] in a way that this actually scaled better, it would be something to consider. But so far,
[04:55:06] Every attempt I've seen hasn't.
[04:55:11] I don't know. Greg could probably fill in the details on that.
[04:55:17] *sniff*
[04:55:18] Okay. Done. Done.
[04:55:22] Let's talk bookmarks.
[04:55:25] I actually like this Ben Lesh tweet quite a bit because he was saying...
[04:55:32] I've always loved UI function state but it's incomplete. UI is just another side effect.
[04:55:36] F is determined by a development process, skill and time is constrained.  Side effect equals F of state E.
[04:55:43] Yeah, I don't know. He's getting kind of crazy on this stuff, but I...
[04:55:48] I do, the only thing that, the reason I picked this on this one is because React's UI function state is
[04:55:54] very much
[04:55:55] over, I understand that the idea is be simple, but it like, it is very incomplete compared to the model. But we talked about that a ton today.
[04:56:02] Um...
[04:56:03] Obviously,
[04:56:04] our man Aiden, and Y Combinator, um,
[04:56:09] 24 group that is awesome for him.
[04:56:15] Oh, I forgot I actually like this.
[04:56:19] Well, Trash, I just answered your question on stream.
[04:56:22] for like
[04:56:24] an hour when I was talking about my article.
[04:56:28] I love this. Wes boss made a typo.
[04:56:30] Ryan Carniou, inventor of ReactJS, discovered the mode propped early 90 levels deep.
[04:56:36] I don't...
[04:56:38] Thank you.
[04:56:39] That should be just my story. This is how I invented signals.
[04:56:43] *laughs*
[04:56:45] Thank you.
[04:56:49] Thank you.
[04:56:49] It's interesting, a signal update that is in JS and JS still re-renders the component, but the component we re-render is blocked off. Not my thing, but they're doing good work. Yeah.
[04:56:57] No vdom needed to just call out to JS.
[04:57:00] There you go.
[04:57:03] Okay, let's keep on going.
[04:57:12] We talked about the leaking server functions, I think.
[04:57:15] Last stream.
[04:57:17] Spa mode. Yeah, I want to look at that.
[04:57:22] And then that, yeah, I got, so those are the last two things.
[04:57:27] Before that, this sub tweet is very much true. Your experience may vary, but almost every time I've looked into Perf issue with a customer throughout my career has always been mainly due to a timing sequence of resource loading. Either data, font, CSS, or JS is loaded too late or due to a client waterfall. Yes.
[04:57:44] for page load performance.  I've dealt with a ton of other update
[04:57:49] performance issues. So I don't know if he's trying to suggest that no one cares about update load  performance, but page load is almost all about waterfalls and all about scheduling and race  conditions.
[04:58:01] So anyways, okay, let's move fast here. Let's look at spa mode.
[04:58:06] I think
[04:58:08] here.
[04:58:09] Built on the web fetch API, blah, blah, blah, blah, blah, migrate react router.
[04:58:16] was fun mode. It's basically you get a few react writer plus feet,
[04:58:21] Create browser router, router provider, file-based routing, config routes.
[04:58:25] Automatic file-based splitting road, route lazy. Link prefetch, okay, this sounds all standard. Usage, blah, blah, blah. Unstable SSR, false.
[04:58:37] Production.
[04:58:40] Yeah, I guess the beautiful thing about this is all the docs and features are just going to be the ones that are in React Router, right?
[04:58:48] This is...
[04:58:49] Rename all loader and action functions to client loader client action. Yeah, okay.
[04:58:55] Nice. Done. Okay.
[04:58:57] The interesting thing about the split is
[04:58:59] Is because like the in solid.
[04:59:03] we only have client load and client action and to make it server, you use server.  So I guess
[04:59:10] This is one of the interesting results of this kind of thing, right?
[04:59:15] But generally speaking, it's pretty good.  Actually, I think someone...
[04:59:20] Say someone...
[04:59:21] Don't know if I should go into my private messages here.
[04:59:24] But...
[04:59:26] I saw this really cool comparison.  I don't know if this should be shared on stream, but he basically made a simple optimistic
[04:59:35] API
[04:59:36] example in both next remix and solid start to show what like this equivalent server function code looks like and I thought it was really cool because like you can go I went to this example and I looked at like
[04:59:49] you know, here, simple index, solid start.  So he's got a couple cache functions with the userver,  and then he just calls create ASIC.  He's not using our route loader.
[04:59:57] Fine, I guess it's top level.  You submission.
[05:00:00] Does a simple
[05:00:01] optimistic update puts in nice and clean types flow beautifully because the way the functions  throw through no string matching pretty cool you go into the remix example
[05:00:13] And you're like, okay, cool, cool.  Let's check it out.  App, routes, almost the same thing.  Go into index.
[05:00:21] This time you've got async functions there,  but now they're in the loader.  So it's a little bit more verbose, the action,  couple more things, but basically the same kind of thing.
[05:00:32] So it's kind of cool to see like the parallels there.  Little TypeScript fun, you know, type of whatever.
[05:00:40] um,
[05:00:44] Thank you.
[05:00:49] And then you go into the next server component example for this.
[05:00:57] And
[05:00:59] Okay, just a second, sir. How come...
[05:01:01] What why is there a
[05:01:03] Fave icon in here.
[05:01:05] Okay, sorry, it could take me a second to figure out what files I need to go to.  Okay, there's page, which I just like indexing the CSS.  So ignore the CSS.  So page layout pending component form.  Okay, I got it.
[05:01:18] Thank you.
[05:01:20] this reminds me like the first time i went into angular right bug it
[05:01:24] Because like, it's funny, I remember doing to do MVC examples, and then you go into a couple of frameworks and be like that to do. And then you go into like Angular and be like, here's a folder of 26 files.
[05:01:35] Uh...
[05:01:36] But...
[05:01:37] Anyways, okay, so then we use server, we await.
[05:01:41] And then we use form component.  Why are we using form component?  Oh, I know.  This isn't fair.  It's because form component to client component, isn't it?
[05:01:47] And then
[05:01:49] use form state, form state, and then pending. Why is pending component a different component?
[05:01:55] What the hell is that?
[05:01:59] That's weird. Can't you put the pending component inside the--
[05:02:03] Do- Do- What?
[05:02:06] It's inside the...  Okay, next to yes, people.
[05:02:11] Can you only show optimistic updates inside the form?
[05:02:21] Like this is this very odd API choice.
[05:02:30] Oh, what? But it's not even a... component? Okay. That's...
[05:02:40] Oh, right, because, yeah, yeah, yeah, because the lookup.  Yeah, yeah, yeah, okay.  So this, yeah, like this, this, I'm following here because...
[05:02:46] use is
[05:02:48] I thought this maybe was global, but it's for the form itself.  Okay, that's really an interesting API.
[05:02:53] Because what we did was kind of like Remix where we detached it, except then I ended up using
[05:02:57] the reference to the action everywhere. So you can actually put optimistic updates anywhere in your app.
[05:03:02] As long as you can...
[05:03:03] Reference the action.
[05:03:06] and the types flow throughs.
[05:03:08] Sweet.
[05:03:10] I think I get what he was looking at. This is good validation that we have like one of the sweetest data fetching APIs.
[05:03:18] Okay, that is cool.
[05:03:21] though I get it. The weirdest thing for me actually on this API, like I don't hate the  approach. It's just like at that point, why don't you just make this capital F form? Because like
[05:03:32] What?
[05:03:33] How is this magically a context provider?
[05:03:37] I copied this because I thought it was really cool.
[05:03:40] But like this is this is doing a lot of
[05:03:44] stuff.
[05:03:47] Thank you.
[05:03:50] Okay, well, I think we'll all get used to the patterns and kind of figure out what works and what doesn't.
[05:04:01] But yeah, uh,
[05:04:02] I was just... I hope he doesn't mind me putting that on stream. I was just...
[05:04:07] I was just kind of...
[05:04:09] curious, uh,
[05:04:10] Thank you.
[05:04:12] I'm thinking about remix patterns and stuff.  What it would look like.  Okay, fine.  Last...
[05:04:17] Last thing of today.
[05:04:19] What's going on with this React backlash? Let's start with Cassidy here.
[05:04:26] I read:
[05:04:27] Both...
[05:04:29] this blob and I read
[05:04:32] Tanner.
[05:04:35] And I think we've had Tanner on stream enough to know how he feels.  He feels like, I did talk to him and he felt like he got something off his chest with this.
[05:04:45] um but i feel like he's been echoing bits of this all along right because i think they have  different complaints slightly kenner saying since hook in the early conception of suspensive years i  personally felt the react is obsessed with just a handful of concepts both technically impressive  and doubly pushing the limits
[05:05:00] These new concepts have very little impact on what I do day to day.
[05:05:03] Alright, okay. I want value between client side focus, client performance, obsessed, utility average, and loved.
[05:05:09] Was it ever performance obsessed?
[05:05:12] I don't know if React-- I felt like React was, like, good enough
[05:05:15] TM, but
[05:05:19] I think it was consistency that we liked React. It's painful to see other frameworks continue to deliver on the same motivation. Let me do ReactMendure 1. That's fair. I forget it's ground up some old excitement, but it's easy to get caught up in a new feature that reality is a reactionary answer to a deeper issue. The most brief I can be on this topic is that I really wish we could drop this obsession with immutability and address too reactively, whether that's through signals, design, and most of the world, I'm sorry.
[05:05:41] Most like Cassidy, I'm using Red Fairy Heavenly.  I'm reaching for it regular, but increasing resentment.  That's challenging.  Okay, let's see what Cassidy has to say.
[05:05:52] I think it's interesting because I feel like the performance argument actually came early days with stuff like the work Ryan Florence did. You know, like the DB Mon comparison and all that. I feel like the original team...
[05:06:04] Like, you watched Jordan Walk talk about React with some of the stuff with Tom Oh, you can tell he was like an engineer's engineer, because he was like...  He basically was just trying to justify that the trade-off wasn't that bad, especially when you compare it to Angular, it's actually kind of better.
[05:06:18] you know, that's what he was trying to, like, say.  He never claimed that the VDOM or anything  was, like, all out on the performance side.  He was very level-headed,  but I feel like the next wave of, like, developers  were like, look how React does this case really good,  and I think that's great,  because that's what, like, influencers do,  and that's why, like, there are cases where...
[05:06:37] especially the way we used to develop apps like
[05:06:40] you know, react, lose stuff out of the water.  But it's just interesting because I remember the core team being much more  like level headed on.
[05:06:48] on the performance side.
[05:06:51] Less so on the, like...
[05:06:53] We're functional programming, you know,
[05:06:56] DSL, all the like ergonomic
[05:06:59] philosophical stuff they were, you know, like,
[05:07:02] Thank you.
[05:07:02] KVOs bad, no signals, all that kind of stuff. They were hardline on, but on the performance side they were like,
[05:07:08] Yeah.
[05:07:09] You know.
[05:07:11] Pretty good.
[05:07:12] Okay, I'm kind of annoyed with React lately. I still use it regularly, and it's somewhat friendly with folks who still work on it. It's the first library I reach for, but it's kind of confusing and frustrating, not the boast, but I like really no React. I've used it for almost a decade, blah, blah, blah, blah, blah, or 18. I was in the React 18 working group.
[05:07:30] I've taught React full time. Okay. I think these are good credentials.
[05:07:35] "Reacts got a really hard time to share that, I feel."  "Not from the community, probably the community, blah, blah, blah.  It's also surprising that there hasn't been a release in June."  Does this matter?
[05:07:45] I mean, I guess they had somewhat regular releases up to June 2022, but I feel like they released Hooks in 16.8.
[05:07:54] And then they released 17 that no one cared about.  I feel like four years before that,  they didn't release anything that anyone really cared about.  Between, say, January...  Between, what, February, March 2019 to basically 2022...
[05:08:09] I don't know if any of those releases on three years actually made a difference.
[05:08:13] Um...
[05:08:14] to like the most people
[05:08:17] So like the fact that they've been doing these Canary releases,  probably just a better process around what they've,
[05:08:23] been we're doing over that period
[05:08:28] But yeah, what I'm trying to get at is like, they did that for like three years before that too. So it's been five years altogether, if that's the frustration. But, you know...
[05:08:41] But actually, 2022, actually, it hasn't been five years because 2022 brought a bunch of stuff.
[05:08:45] Like,
[05:08:46] Suspense. React-A-King was...
[05:08:48] Huge release.
[05:08:50] I have to imagine even without
[05:08:54] Next.js. I don't know this 100%.
[05:08:57] But like,
[05:08:58] The spends on the server suggests streaming is possible with the RFCs, and I'm pretty sure Remix implemented it.
[05:09:03] And then, so I feel like at least React 18 was a pretty big release even without Next.
[05:09:11] Thank you.
[05:09:12] Yeah, I mean...
[05:09:17] But, like, does it matter?  Like, it isn't stable.  I just want to, like, just put it out there, like...
[05:09:25] Is there a big difference between the last year and the three years before that? Like they just,  that's how long the release took.
[05:09:34] Yeah, I like there's lots of things that aren't where they need to be, but I'm saying like
[05:09:39] It wasn't the last three years like before that as well.
[05:09:47] This is going back to the Tanner comment, but...
[05:09:51] Thank you.
[05:09:53] Suspense is actually really valuable. Yeah. And transitions are actually good API, but I can understand why
[05:10:00] Like,
[05:10:00] Even myself, I'm having a hard time keeping track of the hooks, and I'm fully...
[05:10:05] I'm fully...
[05:10:06] I thought I was fully up to React. I was fully up to React in 2019.
[05:10:10] around the time that they said these are new experimental APIs, and they did that like first look at resources, they never released that API, but when they did the first experimental
[05:10:19] suspense release, I was fully up to date.
[05:10:23] And then since then, I haven't been.
[05:10:25] But I'm pretty good with RSCs.
[05:10:27] It's frustrating there's two reacts now.  Did she link Dan's article as...
[05:10:34] Not that there shouldn't be, but that is clearly an astoundment law for most people.
[05:10:39] Yeah, I mean, that's because stuff's changing.
[05:10:41] It's frustrating that diversity efforts physically took a back seat
[05:10:46] Maybe when there's no...
[05:10:50] What's this?
[05:10:57] That's an interesting thing.
[05:11:00] I don't, it's interesting. I don't get, I guess I don't know enough about this. I never got this impression, especially with some of the great women working on the React team at Meta that I met at the conferences this year.
[05:11:12] Um,
[05:11:13] But I think, I think maybe this is just in general, women, the children were the friend of the house, whatever.
[05:11:22] I see. I don't know if it's 3x fault per se.
[05:11:28] Thank you.
[05:11:29] Interesting.
[05:11:34] Visible
[05:11:37] I guess it's visible.
[05:11:41] Hmm.
[05:11:42] Thank you.
[05:11:49] I don't know. She didn't actually say very much.  She just...
[05:11:52] I mean...
[05:11:54] Thank you.
[05:11:56] I agree the canary thing is a little bit hard, but it's like
[05:12:01] They're figuring it out.  I guess I have more patience on this because I'm not building with it.
[05:12:10] It took so long there I knew documentation.
[05:12:15] Because there was a...
[05:12:16] Huge effort.
[05:12:19] Yeah, I don't know. It's tricky. Like...
[05:12:22] When you consider the effort that went into the documentation effort,
[05:12:25] It's harder with frameworks.  Like they set the bar now.
[05:12:30] It's like,
[05:12:32] The amount of work that goes into
[05:12:35] This stuff.
[05:12:36] continues to spread. I guess with the resources of meta you'd think that maybe things could be different, but
[05:12:41] I don't know.
[05:12:45] Thank you.
[05:12:48] I
[05:12:51] Thank you.
[05:12:53] Thank you.
[05:12:56] She thinks the communication's gotten better.
[05:13:05] I'm optimistic for the future, kind of.
[05:13:10] Thank you.
[05:13:13] Interesting.
[05:13:17] The thing is...
[05:13:20] Does any of this...
[05:13:22] impact
[05:13:24] I'm trying to connect how any of this impacts wanting to use React in a project.
[05:13:30] This is the difference between Tanner's thing where he's talking about technical reasons
[05:13:34] I guess this is just the impression of the whole ecosystem and,  and stuff.  I guess,  I guess,
[05:13:39] Two reacts.
[05:13:40] And there should not that there shouldn't be.
[05:13:43] It's like this...
[05:13:45] struggling with the RSC mental model.
[05:13:48] kind of thing.
[05:13:52] Yeah, I don't know. It's tricky. I shouldn't read too much into it. I guess because it came from Cassidy, this was kind of a blow from people's perspectives. I think there's a lot of fair complaints. It's interesting trying to connect the dots back to actual usage of React.
[05:14:10] I guess there's the framework in what it makes you feel about it because of all the surrounding stuff.
[05:14:21] I mean, there is this user framework and then everyone going for a cell, but...
[05:14:27] Hmm.
[05:14:31] Yeah.
[05:14:34] I mean, this is just collecting a lot of the issues kind of together and thrown in there. I'm really interested personally how this impacts people's day to day thing. Like, did the user framework thing change the way you have to develop your apps or how you get started with a React project? And that feels bad in a negative way. Did the Canary releases,
[05:14:54] impact a project that you're working on because you tried to adopt some stuff and then other stuff broke.
[05:15:00] is
[05:15:02] Did the documentation...
[05:15:05] No, I mean, I guess the documentation is already there, so I can't come up with them there.
[05:15:09] Does the fact that RFC's
[05:15:11] exist, impact,
[05:15:12] how you approach creating new projects and making it more difficult.
[05:15:17] I'm trying to think of like,
[05:15:20] from a practical standpoint,
[05:15:22] what all the stuff
[05:15:25] like how the impact is. Cause like for the most part, like the reason I have an interest in this office is a framework author and
[05:15:32] I think in some ways React has done well.  I think in other ways it hasn't,  but it's rarely the surface level implications  that have caused this thing.  The reason we have a Tanner here  is because of what was focused on  and versus what his use case.  It was kind of downstream of it.  The actual issues themselves...
[05:15:51] I'm kind of interested if like the controversies actually
[05:15:55] had a direct impact on people's daily development life. That's what I'm curious about.
[05:16:02] Thank you.
[05:16:04] Or is it just that they feel like they failed?
[05:16:08] Thumb.
[05:16:09] Okay, so I'm just going to catch up with chat because I think I've said everything I want here, but let's see here.
[05:16:16] Um...
[05:16:22] Imagine if someone had this complaint about Marco.
[05:16:28] Hmph.
[05:16:32] Mm-hmm.
[05:16:33] Uh...
[05:16:35] Thank you.
[05:16:38] Yeah, I mean, to be fair, there was a communication gap, but I feel like that was a couple years ago. I felt like the problem was they announced suspense too eagerly. Between 19 and 2022, there was a problem. They've improved since then. The problem is they promised so much in 18, 19, everyone's expecting it the next day or maybe the next month or two, and it took three years.
[05:17:00] You know...
[05:17:02] Four years maybe. But like,
[05:17:04] Like,
[05:17:05] I feel like they've done better.
[05:17:11] But like, does the complexity impact you  is what I'm getting at.  Like, who cares?
[05:17:18] If, okay, if we have to make a life easier for devs, they won't be complaining.
[05:17:21] It's because everything else has moved on.  I'm taking it.
[05:17:30] Hmm. Common product developer doesn't get our season what they're scared of. Hmm.
[05:17:35] Maybe they should be scared. I don't know.
[05:17:40] Is it possible that the average React developer is out of touch?
[05:17:43] Probably, but like, I mean, that's what happens when you have a framerate this popular.
[05:17:48] But like, I always assumed that if you were out of touch with what's going on, it didn't matter because you're just, you know how there's the curve, early adopters and the therapies, you fit where you fit in.  Nothing they're doing is forcing you along that path.
[05:18:05] Thank you.
[05:18:10] Thank you.
[05:18:12] Thank you.
[05:18:14] Yeah, I would kill for React stocks.  I mean, we're getting actually really cool.  Solid stocks are actually getting there.  I'm pretty stoked about this on a side note.  And we have to thank the React docs for...
[05:18:29] for the inspiration, honestly.
[05:18:32] Thank you.
[05:18:37] Thank you.
[05:18:39] Thank you.
[05:18:41] Thank you.
[05:18:50] feel less comfortable in a long running business fund practice than two years ago, because you're worried about the direction. So that's where it comes in. You're like, are these guys doing the right stuff?
[05:19:01] I think sometimes people think they spend as much on X that I don't need.
[05:19:04] when they could have been improving Y instead, but sometimes Y is just done, it's complete. CSR React is its thing, yeah.
[05:19:13] you
[05:19:16] Yes.
[05:19:18] Metaframeworks.
[05:19:24] Do you need a meta framework for CSR?  I mean, that's part of the thing.
[05:19:33] Thank you.
[05:19:37] Thank you.
[05:19:39] I mean, to be fair, I'm pushing people towards start even with CSR.  I mean, when we get to the good release point,  I think start's going to be quite nice, you know,  so I guess that's fair, you know, file system routing.  Some things to wire up do, you know,
[05:19:56] Do
[05:19:58] help when you have templates.
[05:20:01] Thank you.
[05:20:02] for status quo reasons rather than technical reasons.  Are things the same when they're not?  Yeah, I think that's an interesting point.  I think you're right.  When you're basically being told  that you have to buy into Next,  essentially, if you want to stay  at the head of the curve,  it sits with people wrong  because they're like,  okay, I want to be ahead of the curve.  I want to do the latest thing.  It's like, no, you have to use Next.  I think that is...
[05:20:21] I think that is like where the really awkward piece is.
[05:20:25] Yes.
[05:20:26] I don't trust or like Vercel and the fact that it blessed Framer makes me uneasy.
[05:20:31] Yeah, so this is like politics.
[05:20:33] Right? Like kind of a bit in the scenes.
[05:20:35] Even if there's, like, nothing...
[05:20:38] malicious there necessarily like people keep on looking for stuff and it's it's essentially like  like there's this kind of like
[05:20:46] I said a while ago that I was worried that they were aligning too many...
[05:20:51] things all together that it feels like you know like almost like a monopoly like the old ie or  something where they just too many pieces are just in perfect alignment it makes people uncomfortable
[05:21:01] because it only takes one
[05:21:02] you know,
[05:21:04] bad player. But to be fair, I don't think there is one, but it's still
[05:21:09] There's a comfort thing.
[05:21:11] Thank you.
[05:21:14] Yeah, I did see...
[05:21:18] thanks to, I don't know, is this like a Vercel specific feature? I hope not.
[05:21:22] I don't, this is probably just out of context.
[05:21:32] Yeah, I think maybe it is the meta framework thing.
[05:21:36] V plus your rudder seems fine.  That's what...
[05:21:42] Thank you.
[05:21:43] Thank you.
[05:21:47] I think we aren't moving fast enough just down the wrong direction.
[05:21:52] Well, it's interesting. I'd love to hear where people think the right direction is. I've been watching some of the conversations you have. A lot of these directions were explored at some point and kind of given up on, maybe prematurely.
[05:22:03] Um...
[05:22:06] That's why I think React's not...
[05:22:09] Like there's parts of the solution I don't like, but I know where they've exhausted other approaches.
[05:22:18] This one? Okay. Quickly.
[05:22:22] Okay.
[05:22:23] Yeah, React Postgres server components, sure.
[05:22:28] *sigh*
[05:22:30] Thank you.
[05:22:35] And
[05:22:37] Okay.
[05:22:39] Thank you.
[05:22:40] Thank you.
[05:22:45] Fun.
[05:22:51] from inside Postgres.
[05:22:54] Yeah.
[05:22:55] Thank you.
[05:22:56] I'm glad they're having fun with what they can do here.
[05:23:01] Like, why not?
[05:23:05] Thank you.
[05:23:06] Right now it's like for cell Postgres, obviously.  This is the challenge here.  I mean, this is an inevitability when you come up with stuff.
[05:23:13] like this, like,
[05:23:15] you're gonna maybe fall down into like specific implementations because like it's too tempting to take this power
[05:23:25] Right. And
[05:23:26] And
[05:23:27] basically use it, you know, like you have the infrastructure, you have the framework that can do these things. Like, let's just
[05:23:35] In a sense, they should be able to innovate much quicker here, which is good for everyone, even if you think they're working the wrong stuff, because then maybe they can get to the right stuff.
[05:23:45] *sniff*
[05:23:48] Thank you.
[05:23:49] Thank you.
[05:23:50] It is interesting though because people are sitting there watching feeling like they're on the outside.
[05:23:54] Yeah, it's good for a remix.
[05:23:56] Good for tenor.
[05:23:59] I guess closing thought is this post from Dan.
[05:24:05] In my opinion, learning framework first is better when you want to add a route, you should be able to just add a file and not learn another library.  When you want to, there are first things that learners actually want to do.
[05:24:17] Interesting. So it's task oriented. But for this work, the framework should disappear. It shouldn't feel like you're learning a hard part of different libraries that happen to be moving to a single curated box needs to feel needed to react. The funny thing about this is someone said that solid start is like this, but he's actually kind of saying the opposite thing.
[05:24:33] He's actually saying, like, he's just explaining why React should become a meta framework, essentially.
[05:24:42] Like,
[05:24:44] Thank you.
[05:24:47] I'm actually...  In some ways it's interesting because I'm suggesting that...  I can see this kind of going both ways.  Because on one side, on the start side, we could say...
[05:24:59] Like...
[05:25:00] the conventions of making the framework work, the pieces, are static in start, like the file system running. Whereas,
[05:25:07] Like which rudder you choose is up to you.
[05:25:09] So in a sense, like start
[05:25:11] is the framework that has these features, and then you can, like, choose the library you want to actually implement them. Um...
[05:25:20] In that sense, it kind of disappears.  So maybe we succeeded.  It was just, it's, he's talking,  he's talking about like not feeling like a hodgepodge of different libraries,  but like, I kind of like reacts hodgepodge of different libraries.  I guess not everyone does, but all I'm hearing is like, he,
[05:25:37] Like,
[05:25:38] the framework should disappear.
[05:25:42] Does he just wish that React was Angular?
[05:25:45] Like, it's all just part of the...  Like, it's just like...
[05:25:48] The features.
[05:25:51] I don't know.
[05:25:52] Thank you.
[05:25:55] Yeah, RSCs have a lot of React and a lot of APIs.
[05:26:01] Yeah, that's true.
[05:26:05] Yeah, we go from
[05:26:10] Yeah, so that's what Dave was saying. Yeah. In a sense. Yeah. Although, as I said, I don't I agree in the sentiment. I don't think we actually capture exactly what Dan's going for.
[05:26:24] React is a library.  That's hilarious.
[05:26:28] It's funny now. At one point it was like an argument, but now it's almost funny to consider it that.
[05:26:39] Thank you.
[05:26:39] Thank you.
[05:26:40] Thank you.
[05:26:44] Thank you.
[05:26:50] .
[05:26:51] Thank you.
[05:26:52] Thank you.
[05:26:53] .
[05:26:54] Yeah, so this is like a lot of the fear here because I get it.  Next has never really shown that it's that open because it feels like it favors herself.  Like, how could it not?
[05:27:06] Thank you.
[05:27:06] Yeah, I guess we'll just, time will tell when we just keep on watching this. Um,
[05:27:11] But yeah, and more people get slightly disillusioned.
[05:27:15] Okay, fine.
[05:27:18] Last tweet. Hopefully this is a quick one.
[05:27:23] Oh, yeah, yeah. We literally announced server component a year before Sav left to go to Vercel.
[05:27:31] Yes.
[05:27:37] Do people- I don't think anyone believes this anymore, right?
[05:27:41] I'll just part it anyways, but like, no one thinks that Vercel informed the design decision of Next.  Like, that's not really the problem here, right?
[05:27:52] It's that like...
[05:27:54] Like,
[05:27:57] It's more of that...
[05:28:02] like where all the time is being spent.  Like React wanted to go this way.  It's just like,
[05:28:07] They need Remix and others to...
[05:28:11] pick up and like for this to kind of get rolling and if it doesn't or it drags it hurts react more than anything
[05:28:23] More servers even more money for Zelle.
[05:28:28] Bye.
[05:28:31] Okay.
[05:28:33] Yeah, I...
[05:28:36] I wish people understood that the UX...
[05:28:40] actually improves in this scenario.
[05:28:43] At least in theory, the implementation details might be still in question, but I hope people understand that this is like a UX improvement, right?
[05:28:52] We're not...
[05:28:54] I don't think that's the malicious intent here. Anyway.
[05:29:00] I think we are done.
[05:29:03] I'm happy that 120 of you are still with me.
[05:29:07] This is your last chance to like the stream until you watch the replay.
[05:29:14] So
[05:29:16] I've actually ignored the funny comments in chat.
[05:29:20] But, uh...
[05:29:22] Yeah, I hope you all have a great weekend and I'll see you next week.
[05:29:30] Thank you.