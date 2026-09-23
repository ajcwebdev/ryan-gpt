---
title: "hiYQC4XaUu4"
slug: "hiYQC4XaUu4"
duration: "4:49:16"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/hiYQC4XaUu4.m4a"
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
[00:01:38] All right.
[00:01:40] Hello everyone and welcome to my stream today.
[00:01:43] Thank you.
[00:01:44] Oh, right. Twitch is not muted. All right.
[00:01:50] How are you all doing? I am pretty excited to get started today because I'm
[00:01:57] I don't know. This is a topic that deserves being talked about. I mean, in some cases you might be like, okay, this is
[00:02:04] fairly--
[00:02:06] but
[00:02:07] you know, rudimentary.  But on the other hand, I feel like...
[00:02:10] keeps on coming back at us over and over and over and over again.
[00:02:14] And
[00:02:16] Yeah, I mean, there's always a new context to apply when talking about waterfalls.
[00:02:23] Right. Yeah, no, this is going to be this can be a good one.  I'm going to need your help.
[00:02:27] because, uh,
[00:02:28] I want to do this kind of lecture style. We've done this a couple times in the past, but I need audience participation today because I'm going to be...
[00:02:37] whiteboarding a bunch, you know, and we're going to be just talking, you know, and thinking out loud about the consequences of different sorts of, you know, setups and different sorts of scenarios.  So, yeah, I'm chatting a bit here now to kind of give people some time to join in, but I'm pretty excited about...
[00:02:58] this topic in general because it's a very important topic.
[00:03:02] Let's catch up, say hey to everyone in chat.
[00:03:06] Thank you.
[00:03:07] And all you people trying to get in on first on the chat...
[00:03:11] Third, second. I think the first was posted like this morning, like hours ago. So.
[00:03:20] Yeah, I wasn't sure if I was going to stream today, honestly there's a lot of work I have to do.
[00:03:27] Um...
[00:03:29] "Never took waterfalls to be such a bait and confusing concept for people."  Yeah, I mean, it's tricky though. I think people just...
[00:03:36] like in some sense whenever you find something like in hindsight you're like yeah that's kind of
[00:03:40] obvious, but I think it's one of those things where like,
[00:03:44] People just following prescriptive patterns and then expanding on them miss it if the patterns don't account for waterfalls. That's essentially where my thinking comes from.
[00:03:56] I feel like
[00:03:59] You have to have suffered from seeing enough of those cases to really appreciate it.  I mean, there's a reason Remix was created by the React router people.  They kind of pushed everyone to waterfalls, even though they probably never did them themselves.  But just because of like...
[00:04:15] how to get started with React Router.  Basically, following from React Router 4 onwards,  everyone was kind of like,
[00:04:21] pushed in patterns that basically led to waterfalls all the time.  And the Remix guys are like, "Look, you don't have to do waterfalls.  It's really easy." And then they're like, "Okay, okay, I think we need to
[00:04:30] cement this so that people are, you know, not doing this
[00:04:36] But like for us in a solid ecosystem, we we'd always followed those kind of patterns, you know, since the beginning for
[00:04:47] different reasons, actually, funnily enough.  There's a certain...
[00:04:50] There's a certain...
[00:04:51] slope that we might talk about a bit later where
[00:04:55] which is kind of like,
[00:04:57] the nth level right of this conversation where we start at the level zero
[00:05:03] which has to do a lot with local data fetching versus, you know, like in components versus
[00:05:09] hoisted up but by the end there's a more fundamental consideration here which i think comes down to like
[00:05:16] Is it better to produce
[00:05:18] Um...
[00:05:20] APIs that cause people to fail hard early,
[00:05:25] to force them into the right patterns or ones that are more accepting early
[00:05:30] Um, and then grow to a point where, um,
[00:05:34] They built the whole thing this way.
[00:05:36] when it starts becoming a problem.
[00:05:40] It's an interesting question philosophically.
[00:05:43] Thank you.
[00:05:44] Yeah, definitely. Yeah, definitely. But there's different types of waterfalls, and we're going to talk about that.
[00:05:53] Gravity plus water waterfall. Yeah, exactly. So yeah, let's just get started. We don't need  the wait for everyone. Not the biggest audience yet. I'm going to, I'm going to,
[00:06:00] I'm going to mention on Twitter that we're live.  I don't care.  This is going to be a really good stream for the people who are here.
[00:06:07] I don't always say that, you know, go back and watch them, but I think this one might be most beneficial for the people who are live with me today.
[00:06:15] Live.
[00:06:19] Always.
[00:06:19] What is it? Twitch TV...
[00:06:22] Just so people get on Twitch as well.  Twitch.tv slash...
[00:06:25] RyanSolid. Let me just look at my username for a second. Sorry. I know I'm not sharing my screen yet, but yeah, twitch.tv slash RyanSolid.
[00:06:35] Yeah.
[00:06:36] All right, cool.
[00:06:37] I posted on the Twitter, so more people should be joining us.
[00:06:43] That's it's all good. They can catch up.
[00:06:46] Right.
[00:06:48] Thank you.
[00:06:50] they can catch up.
[00:06:52] Thank you.
[00:06:53] Hmm.
[00:06:55] Thank you.
[00:06:56] Thank you.
[00:06:57] I love this coconut water.  Anyways.
[00:07:02] Where should we get started? Because this is a big topic. We're going to mention waterfalls
[00:07:09] a lot today i mean an absurd amount um more than misco hevery mentions hydration  more than david corset mentioned state machines
[00:07:21] even more than people claim that our compiler will fix React's architecture.  Like, we're going to be talking about waterfalls a lot.
[00:07:30] and
[00:07:32] how we ended up here today well it does kind of start with twitter like a lot of things um
[00:07:39] So let me share my screen and show you what I'm talking about. Okay?
[00:07:45] - Thank you.
[00:07:48] Thank you.
[00:07:49] Share screen, entire screen.
[00:07:54] This one. Okay, cool. Now,
[00:07:59] Thank you.
[00:07:59] syntax debates on Twitter
[00:08:03] are
[00:08:06] pointless, mostly.  They're just like...
[00:08:09] a game, you know, like usually I'll add some Marco code.  I think someone actually responded to my tweet with Marco code and it,  and it was like literally like,
[00:08:18] 15 lines of code.  Of course, it's not doing the same thing,  but it's never about what it's actually doing.  It's about
[00:08:25] about it. So this whole conversation started because Guillermo
[00:08:32] CEO of Brissell, posts this thing where he's like,  "Next in React never been easier,  "and they've also never been harder.  "Here's a universal minimum viable app of a to-do list  "impleted in 45 lines of code."
[00:08:45] And, I mean, it's fairly straightforward.  He has a server component.
[00:08:52] Um,
[00:08:53] grabbing some data.
[00:08:55] And see you can access the database directly here because it is in the home component here, which is a server component.  We're not showing error boundaries. We're not showing suspense. We're not showing anything. This is a minimal example. Just to show you like the part that's probably missing is this is a page. I imagine maybe it's a component, but in, um,
[00:09:13] in an app directory thing. And then they're using a server action as a way of
[00:09:19] submitting a form to update the to-dos.  And then it's a very cool little trick  where through redirecting back to the page,
[00:09:26] which I think even in Next, if it's on the same page,
[00:09:31] This can be implicit.
[00:09:32] So this redirect line might not be there.  We might 44 lines of code.  The number doesn't really matter.  That you submit it, which tells that current page here to reload,
[00:09:43] grab the newest versions of the to-dos and update. So what's really cool about this  model, kind of like the old form post MPA styles, you just
[00:09:51] Submit a form, add the data, re-render the page to the new data.
[00:09:55] very simple model. And
[00:10:00] He's kind of showing that...
[00:10:03] You know
[00:10:05] This is easy to reason about, right?  Because as I said, in reality, you would do more with React than what's in this thing.  Like you might actually use a cache function around this DB wrapper to make sure that you're not fetching stuff unnecessarily.  Like there's more things going on than what you see in this example if you were going to make this app for real.
[00:10:26] I'm going to go.
[00:10:27] But...
[00:10:29] Fairly straightforward. I took the same example and I was like,  "Okay, well, let's just do this in Solid Start."
[00:10:35] you know, again, this could be in a separate file or not.  The only difference is,  instead of fetching directly in the component,
[00:10:41] we wrap that in a used server as well. And it's essentially the same thing.  It does the same action semantics where we submit our form,
[00:10:51] posts it
[00:10:52] and then it re-triggers this. It works mechanically different.
[00:10:57] But it grabs our new data and updates our UI.
[00:11:00] right this is missing the fact you know that
[00:11:05] This is just an example page. It's not showing the consequences of nesting data or anything. In the same way, there's no suspense boundaries, errors, nothing particularly missing. It's, I mean, sorry, nothing, like not everything's present. It's just showing a very simple thing. I can go make this example in Solid Start Repo, and it will do exactly what you expect.
[00:11:26] Thank you.
[00:11:28] So at some point,
[00:11:32] Uh,
[00:11:32] One of the responses in here came from Danny Ramoff, who was like,
[00:11:39] And more or less, the conclusion of his thing was...
[00:11:42] I think this is an important distinction that gets lost in the screenshot.
[00:11:45] What you're quote tuning wouldn't suffer from a client server waterfall if the component did inside another DB query and that version.  Okay, so...
[00:11:53] He's right.
[00:11:56] mostly like it depends is the is the true solution or question here but you have to understand this  started from literally a minimal
[00:12:03] demo that had
[00:12:05] didn't really show anything on the next side or on...
[00:12:10] on the solid start side. In fact,
[00:12:13] This demo probably looks almost identical in Remix as well. You just, this is loader, this is action. Like,
[00:12:20] You get where I'm going. Almost the DX element of this
[00:12:25] Um,
[00:12:26] doesn't feel terribly different. But this kind of spawned off a whole conversation about waterfalls. And I think it's important to understand that we kind of got into the narrative kind of shifted because the conversation started getting about like what RSCs do specifically. And this was never about what RSCs do specifically. This was about the DX of doing a
[00:12:52] Git and a post.
[00:12:54] and having everything update nicely without like use effect from my perspective.
[00:12:59] Um...
[00:13:00] I saw this summary. Here's a little challenge for frameworks to integrate client and server. Make a component that renders a tree view with read directory file must be in the component must resolve in a single request per nav plus bonus points, blah, blah, blah.
[00:13:14] There's different ways to solve this problem, but
[00:13:18] The narrative eventually got turned to like...
[00:13:21] do it the server component way,
[00:13:24] or
[00:13:26] you're not doing the same thing, which is true.  You aren't doing the same thing, but that doesn't matter.  And that's why I wanted to talk about this today.  We'll get back here, but this is the preamble to kind of get us to where  where we can start, because
[00:13:40] This is an important topic.
[00:13:44] Right.
[00:13:46] We talk about...
[00:13:48] you know, how we can optimize hydration, you know, like, let's say, resumability or islands and partial hydration and reducing JavaScript bundles and all these things.
[00:13:57] you know, different performance tricks on page load. And I'll tell you right now,
[00:14:02] waterfalls,
[00:14:03] are
[00:14:04] things will be more important than all of those probably put together.
[00:14:09] Bundle size...
[00:14:12] looks like nothing compared to the impact of having unnecessary waterfalls. So like,
[00:14:19] For all the work I do on performance,
[00:14:22] and make sure that things are in a good place.  If we just...
[00:14:25] end up doing a bunch of waterfalls,
[00:14:28] It's like I didn't do anything at all.
[00:14:31] I want to stress how important...
[00:14:34] this topic is. I think, uh, Malte had a tweet, uh,
[00:14:39] that we showed on the stream a couple of times from a few weeks back.
[00:14:43] where he said something along the lines of, let's see, I could probably find it right now myself.
[00:14:50] Not multi, sorry, it was Sebastian.
[00:14:53] Marka Bage, hopefully it said his last name properly, but React Core Team Memory.
[00:15:00] "Your experience may vary, but almost every time I've looked into performance issue with a customer throughout my career, it's almost always been mainly due to a timing sequence of resource loading, either data, fonts, CSS, blah, blah, blah, or due to a client-side waterfall."  I've got a few other on my list that aren't related to that.
[00:15:14] update performance kind of scenarios, like things really bogging down on re-renders. But
[00:15:22] Like, it is definitely...
[00:15:24] the category that gets attention immediately. It's the one that shows up on your SEO scores. It's the one that
[00:15:30] you know
[00:15:31] people get that first feeling of this site is slow.  You can, you know, if you, if your first impression is bad,  like that's where you start.  So I just really want to stress that,
[00:15:44] that this is a important topic.
[00:15:52] Thank you.
[00:15:54] Okay. All right.
[00:16:00] Yes, there is a continuation factor here. I've been talking about
[00:16:05] this stuff for the last month, if you're interested.  Essentially, I've been one of the most
[00:16:10] supportive pushing server components for the last couple years. And something, I came to some realizations over the last couple months that have been part of this arc of my last few streams where I'm...
[00:16:23] I'm not negative on server components.  I'm just much more critical now.  And it's funny because other people were really critical before,  and now I'm the one who's being more critical.  And...
[00:16:33] I think...
[00:16:34] that whatever comes out of this conversation about reactive opponents, I don't want it to come out as trying to be
[00:16:42] negative about it. I just want to be clear.
[00:16:47] you
[00:16:48] We haven't been very...
[00:16:51] We haven't really got to the part of like understanding them enough to even understand what the tradeoffs are.  And I think that's going to come up a bit today, but I think we need to get there first.
[00:17:03] I think people just want to troll me now. Anyways, we'll keep on going. Um...
[00:17:11] Actually to be fair, I saw a really cool post about HTMX this week about someone making a Notion clone.
[00:17:17] Um,
[00:17:19] I do want to check it out at some point.
[00:17:25] Thank you.
[00:17:27] Okay, so let's get this started then.
[00:17:38] I think we need to start with a really simple question.
[00:17:42] What is a waterfall?
[00:17:44] Right?
[00:17:45] What is a waterfall?
[00:17:49] in this context.
[00:17:52] Thank you.
[00:17:54] Thank you.
[00:17:55] This is the part where I want chat to participate.
[00:18:00] Thank you.
[00:18:01] Thank you.
[00:18:02] Thank you.
[00:18:02] *punch*
[00:18:05] Thank you.
[00:18:08] Thank you.
[00:18:15] Thank you.
[00:18:19] A sequential fetching of data. Yep, that is an example of a waterfall.
[00:18:26] Loading resources sequentially as the component appears,
[00:18:31] Yeah.
[00:18:35] Yeah, yeah, I almost went with a TLC cover.
[00:18:39] Yeah. Okay. Yeah. I mean, so I think...
[00:18:43] We've seen this before.  I'm just going to make like a
[00:18:46] I'll make like a typical kind of timeline here.  We'll use this as our baseline here.
[00:18:55] to get started on this conversation, right?
[00:18:59] If we view...
[00:19:01] Thank you.
[00:19:02] ourselves as having some requests here, right? You know, like these blocks.
[00:19:06] Thank you.
[00:19:08] If you have one big request, well, there's no waterfall, right?
[00:19:12] If you have let's give ourselves three requests.
[00:19:16] This
[00:19:17] is typically
[00:19:19] what we refer to as a waterfall, right? Essentially,
[00:19:27] over some axes of time, right?
[00:19:32] It's white.
[00:19:35] We end up, you know,  and these are like various resources, async or whatever.  Waterfall, generally speaking,
[00:19:44] is when
[00:19:45] One
[00:19:46] needs to proceed
[00:19:48] the retrieval of the next.
[00:19:54] Right.
[00:19:56] Thank you.
[00:20:01] So, yeah, there's a few more coming in here.
[00:20:08] Thank you.
[00:20:12] Yeah, that's basically what I was saying.  Now,  this is important though.
[00:20:20] Because...
[00:20:22] Simply the fact that...
[00:20:25] there are multiple requests might not mean it's a waterfall like
[00:20:31] Thank you.
[00:20:32] If I took the same diagram here,
[00:20:40] and went over here and made another one.
[00:20:45] and went like this.
[00:20:49] Is this a waterfall?
[00:21:00] Right? I think we would, most of us would say that this is not a waterfall.
[00:21:07] Right.
[00:21:12] Right. And.
[00:21:23] Let's do one more.
[00:21:24] Thank you.
[00:21:25] What about...
[00:21:30] What about this?
[00:21:32] Is this a waterfall?
[00:21:36] Okay.
[00:21:38] Thank you.
[00:21:38] Thank you.
[00:21:40] Thank you.
[00:21:41] Thank you.
[00:21:42] Thank you.
[00:21:43] Okay.
[00:21:51] Well, at least it's not a network waterfall in the case of our example. We don't know what's
[00:21:58] necessarily haven't told you what's delaying the start of these requests.
[00:22:02] like conceptually here,
[00:22:05] This could involve like assuming these are the network requests, pretend that you had to do a bit of processing.
[00:22:13] on the client before you made the request, right? So you have like this block here,
[00:22:18] And in a sense,
[00:22:22] It's heavy, so...
[00:22:24] It can't...
[00:22:26] start doing this request until it does this one, until it does this one.
[00:22:30] So, like...
[00:22:32] If this was heavy, single-threaded work...
[00:22:36] In a sense...
[00:22:38] We won't have a network waterfall, but I just want to point out that
[00:22:43] you know,
[00:22:46] It is possible...
[00:22:48] with, you know, multiple requests, you know, and like work to be done in between to, you
[00:22:54] you know, have this kind of offset happen.
[00:22:58] Yeah, so it might be a client waterfall. It's unclear. I just want to kind of put it out here.
[00:23:07] that
[00:23:09] that like I would say no from our definitions, but I just wanted to kind of distinguish this one a little bit just to kind of show it.
[00:23:23] But
[00:23:25] Thank you.
[00:23:26] What I'm assuming here is beginning of B depends on the end of A. Yeah, exactly. When we talk about the network, right?
[00:23:34] -
[00:23:36] But I think it's important to distinguish all three of these a little bit initially when talking about what a waterfall even is.
[00:23:47] Thank you.
[00:23:48] Right.
[00:23:50] Because like...
[00:23:54] There was a time period
[00:23:56] where
[00:24:00] having lots of requests was actually waterfall inducing, right?  People are already jumping to the next point in the chat. I'm loving this, right?
[00:24:10] But HTTP 1, I think we could only have six concurrent requests in the browser at a given time.
[00:24:19] I'll be...
[00:24:20] If you go now, I think the number is supposed to be infinite or something. It's high.
[00:24:25] I've noticed personally a bit of this happening in batches.  Like you'll see the first eight go.
[00:24:31] And then you'll see the next eight.  And then you'll see the next eight.  Even a modern browser.  It won't be...
[00:24:36] waterfall like this, but it will be slightly tiny bit offset. So there is a theoretical
[00:24:44] Um...
[00:24:45] Not theoretical, but there is an absolute constraint to the way the browsers fire off the requests.
[00:24:51] It's not going to matter until you're in the
[00:24:54] the dozens of requests.
[00:24:57] But it does kind of answer this or it does kind of ask this interesting question, like, should we be grouping requests rather than like, is there any benefit here to grouping versus not grouping requests?
[00:25:14] Thank you.
[00:25:15] Thank you.
[00:25:18] Right? Everyone's falling so far, do you understand? I mean, like, it's possible, like,
[00:25:22] there's a little overhead for each request or each batches of requests.  So like there is this sort of question of whether we should be sending it all as a single request or if we should be keeping all the requests,  even if we're not,
[00:25:35] water like
[00:25:37] traditionally water falling. I just want to make this kind of understood because these are all
[00:25:42] Thank you.
[00:25:42] scenarios of, of like around this, right?
[00:25:48] One of the...
[00:25:50] benefit.
[00:25:51] of
[00:25:52] of putting it all in the same request. And let's see, I'm going to zoom out for two seconds so I can give myself some more room because I snuck this table
[00:25:59] in the middle of some other stuff.  Let's move this over here so I can scroll down instead of up.
[00:26:04] Okay.
[00:26:06] Uh...
[00:26:08] Let's go here.
[00:26:12] Thank you.
[00:26:12] So
[00:26:15] Thank you.
[00:26:18] - Well, I mean, there's several considerations  into the benefit of grouping, right?  Obviously, if you group requests that look like this,
[00:26:27] There's probably...
[00:26:29] little to no benefit of grouping them.
[00:26:33] Right? Because whether this is one that does all three in parallel,
[00:26:37] or this is three that does all three in parallel,
[00:26:40] The the benefit isn't actually
[00:26:44] terribly clear.
[00:26:46] This one?
[00:26:48] Might.
[00:26:51] be more interesting if there's overhead.
[00:26:53] associated
[00:26:54] Because once you get to a point where you're looking at things being offset, there's an argument. You start kind of going, okay, well, if I offload processing to a place that is more powerful, like a server, then maybe we can...
[00:27:10] Um...
[00:27:11] deal better with the waterfalls there because the length the latency is less right
[00:27:17] I think it's kind of important to kind of think of this in that way.
[00:27:20] I don't know how many of you are, you know...
[00:27:22] really into
[00:27:24] - It's...
[00:27:25] you know cpu you know hardware considerations but like the fastest data you can access  latency wise is going to be in a red in a register right it's like right in the cpu
[00:27:35] and if it's not in the register,
[00:27:38] Well, hopefully it's in your level one cache.  It's a small cache, but it's a fast cache.
[00:27:43] Then there's level two, level three.  You're still in the microprocessor at that point.
[00:27:47] um
[00:27:48] Then you kind of get out.
[00:27:51] and its memory.
[00:27:53] Right.
[00:27:54] And then if you miss that hard drive,
[00:27:58] And then finally network and each step along that that, you know, degradation is almost like an order of magnitude slower than the previous one.
[00:28:10] So if you can...
[00:28:13] you know,
[00:28:14] reduce the latency here.
[00:28:17] by pushing these things around and moving the waterfall
[00:28:20] closer to where there's shorter latency. You can make significant improvements. Um,
[00:28:26] Thank you.
[00:28:26] Even in the web, we have that a bit because of even though we're dealing pretty much completely on networks,
[00:28:33] there's a difference between the network to the end user and the network within your data center.
[00:28:42] But
[00:28:44] Thank you.
[00:28:47] I just kind of wanted to put this out there, right?  Because...
[00:28:51] You might be able to
[00:28:54] absorb the cost. I guess the best way to show this with this
[00:28:59] example here.
[00:29:00] I need to show this.
[00:29:03] is
[00:29:05] We...
[00:29:06] If now, like, Blue is still our network, right?  But pretend that the...
[00:29:12] the length that we need to go.
[00:29:15] is like this.
[00:29:18] And this is the way there and this is the way back.  I'm kind of halving these, right?
[00:29:22] And then the waterfall on the server...
[00:29:25] is in a different color.  Let's make it
[00:29:28] Um...
[00:29:30] I don't know, green.
[00:29:34] and the latency on the green stuff is smaller.
[00:29:41] So it's kind of like this.
[00:29:45] Thank you.
[00:29:47] Hmm, that's kind of overdoing it.
[00:29:52] It's probably closer to
[00:29:54] this. But...
[00:29:57] If it's like this...
[00:29:59] on the server.
[00:30:00] And then your response back to the client is like this.  You can see already...
[00:30:07] that
[00:30:08] This...
[00:30:09] is shorter in time than this, right?  Like there's a significant improvement by...
[00:30:17] Mm-hmm.
[00:30:18] by maybe pushing
[00:30:21] this to a place where there's less latency on that on that waterfall.
[00:30:27] Now our total time is only this.
[00:30:30] to this point instead of taking this whole space.
[00:30:35] What's interesting though,
[00:30:37] This is not necessarily faster than this.
[00:30:41] Right? Like...
[00:30:45] Or even this, not necessarily.
[00:30:48] Thank you.
[00:30:51] So I want to understand the dimensions here.
[00:30:56] The other thing we have to consider is
[00:30:59] We're talking about grouping, right?  Obviously, if you group this, if I did the same thing for this,
[00:31:05] then
[00:31:08] What? If I drew everything right, like properly to scale,
[00:31:18] Thank you.
[00:31:19] I don't think I quite did, but you know what I mean? If I drew everything properly to scale,
[00:31:24] Thank you.
[00:31:25] Yeah, I'm close.  These are almost the same side.  They're basically almost the same lane.
[00:31:31] is what I was trying to get at.
[00:31:32] Right.
[00:31:35] Because they kind of should be, right?  So...
[00:31:40] The worst case scenario is basically the same as...
[00:31:45] the best case scenario here,  but the best case scenario here is going to be
[00:31:52] the best case scenario here or the worst case scenario here and here is going to be better
[00:31:59] on this one.
[00:32:00] Right.
[00:32:03] And that's the simple map.  That's where we start, right?  Like that's what we're thinking.  But is there any trade-offs that you see to grouping groups
[00:32:14] Stuff like this.
[00:32:16] Does anyone in the chat?
[00:32:18] I'm opening up the floor.
[00:32:20] What's the trade-off of doing this all in a single go?
[00:32:27] Thank you.
[00:32:29] I'm going to go ahead and put it in the middle of the middle.
[00:32:35] you
[00:32:37] Make redundant requests.
[00:32:43] Yeah, I mean, what if you don't need all three of these data sources?
[00:32:49] What if the next time you go to this page, you don't need all three data sources?
[00:32:55] Thank you.
[00:32:57] like you're kind of locked in in this one. This one you can just be like no I'm just gonna do this one
[00:33:01] This only matters
[00:33:04] Though for another reason.
[00:33:07] Thank you.
[00:33:10] Thank you.
[00:33:12] Yeah, I'm not necessarily...
[00:33:18] gonna say you can't stream but just if you if you look at when you got three of these pretend these  things aren't tied together pretend there's work you do at the end of them right or at the end of  these or at the end of these there's work that you do
[00:33:30] Here,
[00:33:32] Even with the waterfalls,
[00:33:34] You could do work here.
[00:33:37] You can start your work there instead of waiting till all of...
[00:33:42] though the work is done.
[00:33:45] Right. Like what if you these were three independent
[00:33:49] sections of your UI,
[00:33:51] This can start rendering,
[00:33:53] Here.
[00:33:53] here and here,
[00:33:56] And this one would wait all the way...
[00:33:58] Till the end.
[00:34:00] Right?
[00:34:02] it's probably more pronounced on a graph that's like smaller like this,  where it's tighter or, you know, if we had the same constraint like this,  like this bottlenecking,
[00:34:10] It's possible.
[00:34:12] that
[00:34:14] I mean, we can move these to the other side. What if...
[00:34:20] you do something like this.
[00:34:24] It takes about that long, okay?
[00:34:25] And
[00:34:28] Bye.
[00:34:29] Thank you.
[00:34:31] It's kind of like this, right? The difference between the single one that waits till the end here,
[00:34:38] So let's do this. Okay.
[00:34:41] The difference between this one
[00:34:43] And
[00:34:48] Assuming that the workload at the end is parallelizable.  And like...
[00:34:53] the one that
[00:34:54] Uh...
[00:34:56] Kind of looks like this.
[00:34:57] Sorry.
[00:34:59] See if I can.
[00:35:02] Give me a bit more of it. Nope. It's like you gotta grab the whole thing but I don't want to grab the line.
[00:35:12] Okay.
[00:35:12] Okay. That's how I do it. Okay.
[00:35:15] Go here.
[00:35:18] Delete, delete.  I'm not gonna worry about the red.  Can see we've absorbed the red on the server.  So, but let's pretend our thing is more like
[00:35:27] like this and i i told you my this one wasn't perfectly drawn but like assuming that there's like
[00:35:33] a little bit of an offset here.
[00:35:37] You know, I don't have enough spaces, I don't have enough height to show the whole thing here.  But my point is...
[00:35:47] Yeah, I mean, it was close. It was about...
[00:35:49] So it's.
[00:35:50] up there, and then let's go like this.
[00:35:54] presumably smaller, whatever.  What I'm trying to get at is this...
[00:36:00] now moves here.
[00:36:03] Right? Like it now moves to match the end of here. It's actually
[00:36:08] further out.
[00:36:09] Um...
[00:36:12] Thank you.
[00:36:15] Thank you.
[00:36:18] Thank you.
[00:36:19] you
[00:36:21] Thank you.
[00:36:22] Thank you.
[00:36:23] So, grouping, you know, doesn't allow us to do less work as easily.  And it doesn't...  It definitely...
[00:36:35] can cause like
[00:36:38] Other cascades. Now, there are solutions to this, like you could stream back the responses as they come back, and that will basically negate a lot of the downside of grouping.
[00:36:53] Thank you.
[00:36:54] So there is that consideration.
[00:36:58] But basically, just making everything...
[00:37:01] Single Flight.
[00:37:03] without streaming, without is, would lose data independence.
[00:37:10] What I mean by grouping is instead of these being separate requests, this is all one request and I've kind of opened up the server waterfall. Like pretend these are client.
[00:37:22] requests and this is one blue client request. I guess it's like it's not clear about in my diagram is I'm suggesting that this spans a
[00:37:30] the whole thing. Maybe this would be a clearer way of visualizing it.
[00:37:34] Right?  Because it's all part of this same...
[00:37:38] Yeah, I'm liking this.
[00:37:40] Like this. Yeah, let's do that. It's all part of the same client request. Yeah, this is way better way of visualizing this.
[00:37:48] Ch-ch-ch.
[00:37:49] Exactly.
[00:37:53] Yeah.
[00:37:57] Right. But I mean, it doesn't matter, like if it's client server, I'm just talking about like one layer versus the other layer, because like there's so many different considerations like this, like consider.
[00:38:09] what it would actually take to group this one, right? If you needed to do pre-processing.
[00:38:15] Right?
[00:38:16] Like another small thing is we like, let's pretend we wanted one request, but we need to do this client side preprocessing.
[00:38:25] Well, then we would pick some kind of threshold, like maybe a little bit of time, maybe...
[00:38:31] Maybe, I don't know, arbitrary amount. 100 milliseconds. But then...
[00:38:36] we basically turn this
[00:38:38] into this, but delayed.
[00:38:42] Right?
[00:38:42] Like,
[00:38:43] We basically just push this whole thing sideways.
[00:38:48] Like,
[00:38:49] Like, let's say we only...
[00:38:51] if we wanted to like we had like five locations, we were three locations were fetching here. And we're like, let's wait till we render the whole tree to make sure we collect all of them and then send them in one request. Well, now we're waiting to render the whole tree. So in a sense,
[00:39:06] We're kind of worse off because we're just, again, taking this delay.
[00:39:12] and using it to push this whole thing back.
[00:39:16] Chuk.
[00:39:17] Thank you.
[00:39:19] This is...
[00:39:20] Still better.
[00:39:22] This
[00:39:24] might be better if you can do this part sooner.
[00:39:29] Yeah, sorry, this should be here.
[00:39:31] Right?
[00:39:34] Streaming is a balancing act, but what I'm trying to get at is
[00:39:40] There's stuff that happens before and stuff that happens later,  and there's independence here.  So purely just grouping it,
[00:39:47] may not
[00:39:49] accomplish
[00:39:51] what you want.
[00:39:53] Okay? We'll put this in more practical terms in a minute.  I just wanted, or in a few minutes, I just wanted to kind of like...
[00:39:59] get to the basics.
[00:40:01] are people following so long?
[00:40:03] So far.
[00:40:06] Thank you.
[00:40:07] Are we doing okay?
[00:40:11] *sad music*
[00:40:14] Thank you.
[00:40:17] No, this is a stream yard limitation. I'm 720 right now because I didn't feel like
[00:40:22] paying like
[00:40:24] way more money. It's like the different, it's, it's, it's astronomically more for me to get StreamYard at 1080p. I used to do it, but you know,
[00:40:41] Yeah, exactly. But I'm saying the fire together is interesting because let's say you're rendering a client.
[00:40:49] And you don't know until you actually like render the whole page,  what you should send off together.  Like,  uh,
[00:40:56] At some point in the conversation, Dan asked me if I'd ever considered...
[00:41:02] you know, sending them all in a single request. And I was like,
[00:41:05] Yeah, no, no. There's actually more problems with that, but we'll get to that in a minute.
[00:41:11] But yeah, I'm hoping this is making sense.
[00:41:17] Okay.
[00:41:26] Why would you need to group all three together if preprocessing required by only two of them?  We're rendering then I feel it's more dependent on use case we want to place all the data.  Yeah, yeah, yeah. The preprocessing is like pretend you...
[00:41:37] An example of this exact scenario is
[00:41:40] You...
[00:41:41] Go and you have kind of three levels in your maybe nested routes in your in your on your page and
[00:41:50] The first component you go to render, the very first thing it does is fetch data at the top of it.
[00:41:54] But.
[00:41:55] Um,
[00:41:58] Then you render a bit more.
[00:42:00] And then the next level...
[00:42:03] Fetch as data and then you render a bit more and the next level fetch the data. It's all in the single navigation, but it's like
[00:42:11] Kind of I'm picturing a world where the water falling of the date of the of the.
[00:42:17] of the sections doesn't impact the data fetching.  Like all the data you need to fetch is in the router.  You can use the ID, but you're doing three separate fetches  and you have to render to get to it.
[00:42:30] essentially.
[00:42:32] That's kind of the scenario that I'm seeing here. This red thing is like rendering part of the page.
[00:42:38] You might,
[00:42:39] think, well, wouldn't it be great if I could just
[00:42:42] batch all the data for the page in one go.
[00:42:45] I'm saying maybe not.
[00:42:48] Maybe not.
[00:42:52] .
[00:42:57] Yeah, deduping is a problem  and React query solves that nicely.  We have similar tools in our router.
[00:43:06] But again, it's because you're leveraging the granularity.  If it was a single request,
[00:43:11] Like, how do you know which data you need to fetch?  You go to the server with a single request and you're just like, give me it all.
[00:43:18] give me the things you tell me. I mean, we have, it's definitely possible both ways. I just want to kind of
[00:43:24] establish that
[00:43:26] These are the kind of things you'll be thinking about.
[00:43:34] Imagine if the HTML all came from the server streamed and we didn't have to wait for the client to decide if it needed to fetch more data.  Yeah, but...
[00:43:42] I mean, that's how we do our initial page loads.  And the next page loads-- but it's the same kind of problem,  though, right?
[00:43:49] Because
[00:43:51] Thank you.
[00:43:51] Essentially...
[00:43:55] You're...
[00:43:56] You're removing this red part at the beginning, but it doesn't change the nature of this that I showed before.
[00:44:05] streaming HTML or whatever, you know, sending back
[00:44:09] page doesn't actually necessarily change anything fundamental about waterfalls.
[00:44:14] And actually, let's talk about that again, because there are inherent waterfalls during page load that there's like basically we're not avoiding.
[00:44:31] Thank you.
[00:44:31] Now I understand why people like LiveView. Yeah, stapled servers are interesting.
[00:44:38] Because future navigation doesn't have the same crux on it.  The problem with staple servers generally is that the boot up time is atrocious.
[00:44:48] Yeah, I figured as much.  I love when people think HTML solves something.
[00:44:53] Um, so...
[00:45:01] This is a joke, right? People are still trolling me. Okay. Anyway.
[00:45:08] So...
[00:45:15] Thank you.
[00:45:17] Thank you.
[00:45:22] Thank you.
[00:45:23] So, yeah, you're kind of getting, we're getting ahead of ourselves.  I'm trying to explain this in a general sense first, because like,
[00:45:32] It's important to understand that any interaction with the server can fall into these kind of patterns, whether it's an initial page load, whether it's a mutation, whether it's, you know, whatever, we're going to find ourselves in the same kind of boat.
[00:45:44] So let's talk about initial page load for a moment because...
[00:45:48] There's something that...
[00:45:50] is innately waterfalling about initial page load.  And that's because the very first thing, and I might have even drawn this last stream before.  Let me see if I can zoom out, if I can find it.
[00:46:01] Did I show this? No, I did not.
[00:46:05] I just did...
[00:46:07] Yeah, I did a mutation timeline. Never mind. Let's let's zoom back in. Okay.
[00:46:12] One of the things that happens on initial page load,
[00:46:16] and this happens every time we're i'm going to change the diagram a bit now this time we're going
[00:46:22] the back and forth network arrow diagram is it always starts with
[00:46:27] client
[00:46:33] Server, okay.  Drawing this thing a billion times.  You've seen other people draw this a billion times.  It's probably not all that interesting,  but the very first thing is client goes bang,
[00:46:46] I hit your URL, right?
[00:46:50] And the server goes, okay, this takes varying amounts of time, but this part is always a true.
[00:46:59] HTML, right? Like I'm talking about like a new page load, right? And then the client's like, oh, okay, sweet.
[00:47:08] Thank you.
[00:47:08] Thank you.
[00:47:09] Thank you.
[00:47:12] Get...
[00:47:13] JS and CSS and everything else, right?
[00:47:18] And then...
[00:47:23] And then this one's like,
[00:47:27] No problem, here you go, right?  But what I'm getting at is this waterfall
[00:47:34] is always going to happen.
[00:47:39] Like even if the thing's smart enough to be like, okay, let's send three headers and all this stuff on the response back and all this.  There is a this then this to decide this then this.
[00:47:53] Like we can make this as short as possible, you know, like try and crunch it all in.  But our initial page load always has this double waterfall.
[00:48:03] Thank you.
[00:48:06] Thank you.
[00:48:07] Thank you.
[00:48:11] right
[00:48:21] Thank you.
[00:48:23] And the funny thing about this is...
[00:48:29] This is...
[00:48:31] Kinda true.
[00:48:34] Depending on your solution after the fact, like if the client, you said server routing to the rescue. Server routing doesn't change this waterfall, does it? Think about it. Like if the client is not aware of the JavaScript code it needs for the next route.
[00:48:48] it's going to do this too.
[00:48:50] Because one of the benefits of grouping the data requests, like in here we weren't talking about it a ton, but is that like picture that now when you go to the next page,
[00:49:01] you
[00:49:02] the router doesn't need to do all the route matching. It can just go, "Oh, I think like a server component of time auto." It goes, "I can just ask the server for the next page and it will render that next page for me."
[00:49:15] and handle the data so I don't actually need to know the specifics in the client. I can actually reduce bundle size. But if you think about it for a second,
[00:49:22] Like,
[00:49:23] How does it know what JavaScript it needs for those client components?
[00:49:29] Right? Like, I'm on this page, I'm going to this page.  How do I know what JavaScript the next page needs to
[00:49:36] for the client components on that page.
[00:49:42] The most obvious way is that when you go to the next page or, you know, go to the thing, you simply...
[00:49:49] Get this HTML, get this RSC JSX back, and it tells you what JS you need for the next page.
[00:49:56] Right.
[00:49:57] And if it comes SSR, you have to go and get it.
[00:50:04] Thank you.
[00:50:05] We have this same thing with our islands router, right?
[00:50:10] You're just repeating this
[00:50:12] waterfall,
[00:50:14] over and over again now on every page instead of just the initial page.
[00:50:19] Bye.
[00:50:21] Thank you.
[00:50:22] Okay.
[00:50:24] Thank you.
[00:50:26] It's not a bad waterfall, per se.
[00:50:32] I don't know, actually, it's kind of expected, right?  Like picture the difference when you do a client side navigation, right?  This is like your standard.
[00:50:41] initial page load and everything else.
[00:50:52] Right. So like if you're doing client side navigation,
[00:50:57] You know, with Remix or Solid Start, any
[00:51:01] parallelized route mechanism, what we would do, like this is always initially
[00:51:09] Like this is always the case, right? This is like your server routing, right?
[00:51:14] Like always the initial case, always after the fact in other solutions, unless you bring that client, you there's nothing to stop someone bringing that knowledge to the client.
[00:51:24] Um...
[00:51:25] I don't know if React does, but think about the difference between what Remix and They Salt Start do when you go, "I want to go to the next page."
[00:51:35] Well,
[00:51:36] it goes okay what's the url so the router handles the url and then it goes
[00:51:40] It goes right here immediately. It goes
[00:51:45] It goes like this.
[00:51:48] It goes,
[00:51:49] Get me JS.
[00:51:52] Thank you.
[00:51:53] for the next page.
[00:51:56] And it goes at the exact same time, it goes...
[00:52:00] Get...
[00:52:02] Data.
[00:52:03] Because the client router is aware of this.  So it does both of those requests at the same time.
[00:52:10] And then
[00:52:12] It gets those back.
[00:52:13] at the same time.
[00:52:16] If you moved all the knowledge of like, don't get me wrong.
[00:52:19] The trade-off of this is that you have kind of a route manifest in the client.  So you always know how to do all the code matching.  You always know how to, like our data loaders,  like the fact that they exist, exist in the client.  Like the bundle size gets slightly larger.  And if you had a giant app with thousands of pages,
[00:52:41] than its potential
[00:52:44] that the bundle gets, you know,
[00:52:46] Death by a thousand slices.
[00:52:49] Right.
[00:52:50] But I'm just pointing out there that, generally speaking,  with a parallelized approach, this,  instead of like a single flight approach,
[00:53:00] Will...
[00:53:01] reduce.
[00:53:02] this generally. Like if you include that data on the client initially, then you don't have to do  this every time.
[00:53:12] Right.
[00:53:14] In the case of, like, I don't know if Next or, you know, App Directory gives routing information to the client.  We'd have to confirm that.  But generally speaking...
[00:53:24] I know that Remix, Solid Start, SvelteKit, we all do this.
[00:53:27] nested, parallelized, we'd send them all off at once, send them all back. We're talking about  this case, maybe this case. We're not talking about this case for stuff that's happening in
[00:53:41] at the route level, important at the route level.
[00:53:44] Okay.
[00:53:45] Yeah.
[00:53:46] But I just want to kind of like
[00:53:50] point at this a little bit, just so that people understand...
[00:53:53] that there are these waterfalls that are happening
[00:53:57] anywhere way. Another classic waterfall that's always happening in a lot of solutions, doesn't have to happen, but let's see if I can find it here, is this one, the mutation waterfall, right?
[00:54:07] You know...
[00:54:09] This is even in an MPA. Classically, if you use an MPA,
[00:54:13] You post a page, it returns a redirect, the browser gets the redirect like pretty quick, and then it gets the next page.
[00:54:20] and then it renders the next page.
[00:54:23] This is also very common in TanStack Query.
[00:54:32] Right. TanStack query, you do a post, you say what, get it back, tell it which tags to revalidate, it goes and fetches, right? This is a very common thing, right? To be fair,
[00:54:45] One of my favorite things about RSCs is that they actually return the next page on the next go.
[00:54:50] You post and then you just get the next page in that single request.
[00:54:55] As it turns out, solid start single flight mutations do exactly the same thing. I covered that last stream.
[00:55:00] But I just want to point out that there are...
[00:55:02] there are waterfalls kind of built into the platform
[00:55:07] things that we do...
[00:55:10] all the time
[00:55:12] Anyway.
[00:55:13] Okay.
[00:55:16] *shriek*
[00:55:19] Yeah, sure. Yes.  HTMX does climb routing.  You
[00:55:26] Just get HTML in response to JSON in your data, right?  The question is,
[00:55:34] If you're using. Client routing
[00:55:38] Like, how does it handle,  HTMX handle code splitting, right,  on the next route?  Like, when does it know to get the JS?  Does it get the JS here?  Does it get the JS here?  It's an interesting question.  It probably depends on how you set up.  HTMX is simple enough  that you could probably configure it either way.
[00:55:59] Yeah, thank you for this great troll.
[00:56:01] Thank you.
[00:56:03] Bye.
[00:56:04] I'm sorry.
[00:56:08] Doesn't this boil down to any performance solution will need route level knowledge of data and loading patterns? So Dan's argument, yeah, but you can't do commode's data loading is mostly irrelevant.
[00:56:16] I need you to get there and not you, Greg Johnson, who's creator of Leptos, who knows what he's talking about. I need most people to get there before I can make statements like this.
[00:56:28] But we'll play devil's advocate in a bit too.
[00:56:35] Thank you.
[00:56:36] Thank you.
[00:56:39] Thank you.
[00:56:41] Right, right, yeah. The part that I'm saying here is I'm assuming that you actually need JavaScript to get the right experience. If you're building simple sites with HTMLX, then you don't have to worry about the JS. And in that case,
[00:56:53] Yeah, I mean, URL get the HTML. There's no, there's no, there's, I mean, initial page is the second flight to get the like HTMLX runtime. But yeah, every other navigation, you don't need to worry about it, which puts it about the same time, the same scenario as this.
[00:57:07] So yeah, no, that is good. I was just, what I was getting at is I'm not
[00:57:14] There's a lot of interactions that deserve to be JS only and not go to the server.
[00:57:18] But that's a whole other topic.
[00:57:23] Right. But back to Greg's point,
[00:57:28] This is sort of the level zero for me, why we have this conversation, right? Because
[00:57:33] If you fetch...
[00:57:35] inside components locally and we haven't gotten here quite yet.
[00:57:40] Um...
[00:57:43] you're probably going to lead to waterfalls. Um, like it's just, it's kind of innate that  there were these tendencies. It doesn't have to, but it, but there's a few factors there. So let's,  let's go into that next. Cause that's really where I, that was actually the next thing. I have a  bunch of point form. We're, we're cracking through this at a pretty good rate today. I feel like this  is fairly dense and makes a lot of sense to people. So let's keep on going.
[00:58:11] I wonder if the diacostas were worth it.  Well, it's an interesting question,  'cause if you ask the React,
[00:58:16] folks and I actually kind of tend to agree with them. I think the DX of server components makes a lot of sense. Like there's a reason
[00:58:22] why we're here. The problem
[00:58:24] or concern with server components I have isn't that this is bad,
[00:58:29] This is actually quite good.
[00:58:30] It's that it might not alleviate the need for the existing DX you already had.  And now when you put both of the things together,
[00:58:38] "What have you won?"
[00:58:41] Off.
[00:58:41] This isn't like, you know, like one of those like, it's more than the sum of its parts.
[00:58:47] It's just like a lot.
[00:58:51] But this, what I'm looking at here is very nice.  It's just...
[00:58:56] We haven't got to the benefits of server components enough, and I feel like it's not painting it fair enough.  We need to get through to that as well. We will.
[00:59:10] Probably. Are waterfalls the biggest performance problem? Probably. That was my experience. For years, I was just destroying benchmarks and examples and everything with CSR against people's SSR against all this stuff because they were architected with waterfalls and I always made sure that I could avoid that everything I did with solid would avoid waterfalls as best I could. Like all my examples, everything I did was all very conscious of waterfalls right from the beginning.
[00:59:40] Thank you.
[00:59:43] Thank you.
[00:59:45] Yeah, eventually the clients are like, yeah. And that's the tricky part, isn't it?
[00:59:49] because
[00:59:51] Like, HTMX is there almost to remind us of that.  I love when a lot of the HTMX stuff there,  because it's really obvious where the shortcomings are.  It's a little bit less obvious
[01:00:00] the line split is when it's so permissive between the models when you talk about server components.
[01:00:06] Okay, but...
[01:00:10] So...
[01:00:11] Our water, let's, we need to talk a bit more about waterfalls, unsurprisingly. So yeah, my next two points here are about what informs data fetching, hoisting versus not and avoidable versus unavoidable waterfalls. I think that those both really tie into what we're talking about today. So let's continue.
[01:00:29] Um,  um,
[01:00:31] Thank you.
[01:00:32] Now I want to kind of get into a data fetching
[01:00:37] thinking like i think we're on phase two here where we're we're like okay  we understand what waterfalls are what they look like
[01:00:43] What?
[01:00:44] goes into us designing solutions around handling waterfalls.
[01:00:51] *sigh*
[01:00:52] Thank you.
[01:00:54] Uh, trying to decide where I want to go on my, on my page here, because I
[01:00:59] I guess let's just make a list.
[01:01:04] When data fetching
[01:01:09] *sigh*
[01:01:11] Thank you.
[01:01:12] What are the inputs to data fetching?
[01:01:16] Okay?
[01:01:17] Let's just start jotting stuff down here, okay?  Right?
[01:01:23] Like...
[01:01:25] If we're going to fetch data when we're loading our page, navigating, doing anything really on our page, when we're fetching data, what...
[01:01:32] what is the source of the inputs that we're going to be passing into that data fetching?
[01:01:39] Thank you.
[01:01:42] Thank you.
[01:01:45] So yeah, I'm getting you guys involved again and again.
[01:01:49] So,
[01:01:50] I'm hoping this question is clear. It might not.
[01:01:53] Be clear enough.
[01:01:55] I fear
[01:01:58] Thank you.
[01:01:59] I
[01:01:59] Like...
[01:02:01] Bye.
[01:02:03] inputs, not
[01:02:04] Like,
[01:02:05] Databases and caches and servers are all examples of caches, like, or like places of sources to get the.
[01:02:13] the like data from I'm talking like like input to the fetching function.
[01:02:21] Okay, yeah, okay. Let's start here. URL. URL is a great example and input, right? You know what parameters are based on the page or whatnot.
[01:02:32] This is sort of where I'm getting to.
[01:02:38] Cookies, yeah.
[01:02:40] Cookies, can we generalize even further, like headers?
[01:02:44] But yeah, sure, cookies.
[01:02:45] *sigh*
[01:02:48] Okay, you got here local state and middleware.
[01:02:56] Right. Let's let's let's talk about this kind of kind of stuff.  Right. Because, yeah, there's probably.
[01:03:05] server state of some type, right?
[01:03:07] some kind of server state.
[01:03:10] Like...
[01:03:11] From the middleware, you might like
[01:03:13] have something stateful. Some servers don't, but
[01:03:16] maybe the server state.
[01:03:20] I'll even grant you guys the cash.
[01:03:25] here, you know, along this lines, because it might shortcut stuff.
[01:03:30] But what's interesting about the cache is
[01:03:33] Is the cash...
[01:03:35] .
[01:03:37] is fed from previous requests.  So it's actually like a...
[01:03:42] it's not a source so much.  Like it's a,
[01:03:44] It's an Ouroboros, like it feeds into itself.
[01:03:48] Um...
[01:03:50] Like it's not a unique source, but let's keep on going.
[01:03:59] Right, forms. Forms are basically, yeah, like I said the URL, but
[01:04:03] We could generalize almost all of this.
[01:04:07] to like
[01:04:09] the request, right?  Like like whether it's like the, you know, we also got like,  I didn't put that like post body.
[01:04:19] This whole category here that we're doing here, this is basically...
[01:04:29] The request.
[01:04:32] request, right?
[01:04:40] Props, well, what props?  Like, let's keep on going.  Where are the props coming from?
[01:04:49] Thank you.
[01:04:52] Thank you.
[01:04:57] Right, like props is a good thing.  So, I mean, let's just add something here.  Let's add maybe client state.
[01:05:06] Maybe?
[01:05:08] Right?
[01:05:09] Yeah, in such user input, maybe it's client state representation.
[01:05:16] I'm trying to think if there's...  If there's anything else.  Um...
[01:05:21] Because I think it's important to understand...
[01:05:27] you know,
[01:05:28] Generally, a lot of our frameworks are built to be stateless.
[01:05:33] really
[01:05:35] there's the state on the server, like the server state in the cache, and
[01:05:40] Yeah.
[01:05:41] What's great about those is they're always on the server.
[01:05:44] Then there's the request, which is the serialized piece that goes back and forth, right?
[01:05:50] I
[01:05:51] And then there's client state.
[01:05:56] And by client state, I mean you're rendering and you pass some props through.
[01:06:01] And what's interesting about client state is client state,
[01:06:06] might determine whether to show or hide something, right?
[01:06:10] but
[01:06:11] if
[01:06:14] If it's not part of the...
[01:06:18] Client state's a funny one, right? And I don't know where I want to start on this, but like
[01:06:24] In a client app,
[01:06:27] depending on client state,
[01:06:29] you might decide
[01:06:33] not to fetch one of these.
[01:06:35] Right? You might be go,
[01:06:37] Yes, yes.
[01:06:38] No.
[01:06:39] Especially after the fact. Initially the client state is usually the same on the server and the client, but afterwards the client state can diverge. You have context, you have stores, you can actually change what you request.
[01:06:52] Client state actually...
[01:06:54] is
[01:06:56] is
[01:06:57] I'm going to I'm going to draw a line through client state right now.
[01:07:04] Because we're not going to consider it for our cases.  Know why?  Because...
[01:07:12] Anything that's driven by client state will innately have to fall in the client model.  If you think about it, in React server components, can you fetch something...
[01:07:22] based on client state.
[01:07:28] It's okay if the cache is ambiguous, it literally doesn't matter here. I'm just saying some kind of persisted knowledge on the server that feeds into itself.
[01:07:39] No, no, you can't, right?
[01:07:41] And the reason you can't
[01:07:48] Like, technically, yeah, you can probably feed it in through the request yourself.  But generally speaking, the reason you can't is because
[01:07:56] the server components are running off this and the server components don't have
[01:08:00] after the fact, for good reason.  You can't server render...
[01:08:04] client components on the server after the initial render because they won't have the updated client state. If you go on the server, update something
[01:08:12] to, or so go on the client, render the page,  and you have like a conditional show based on some counter  that you increment.  If you increment it to 10 past the bigger than five,  and you go back to the server,
[01:08:24] It doesn't know which path to take because it doesn't have that 10.
[01:08:28] It only knows what's represented in the URL.
[01:08:31] So I've used this example a lot of why, like, the approach, say, Astro takes with view transition, like, it's not sufficient.
[01:08:38] efficient. You need more than that if you actually want to do something like server components,  because you need to make sure that you can persist client state and that it doesn't completely
[01:08:47] bonker up your hydration or your navigation.
[01:08:50] Thank you.
[01:08:52] So
[01:08:54] Right.
[01:08:56] *shrie*
[01:08:59] But it's more than that.  It's like...
[01:09:03] We don't talk about this very much, but Axie is a serious repercussion.  If you have...
[01:09:09] server-rendered data,
[01:09:12] that is passed into a client component that may conditionally render it.
[01:09:18] you're always going to render on the server.  I talk about how you can't be selective on...
[01:09:24] each piece of data you fetch,
[01:09:27] when you're doing server components, but it's more than that.
[01:09:29] The stuff...
[01:09:31] If you, pretend you have a page,
[01:09:33] Right?
[01:09:35] and you have a bunch of data sources
[01:09:38] Some of those data sources
[01:09:40] visibility is even under a client component deciding when to show or hide it.
[01:09:46] Well,
[01:09:48] even if the client component
[01:09:50] is off even if it's this large chunk of your page that by default when you first  show it you show it closed so you don't show all the data and then people can expand it
[01:09:58] Well, in that scenario with server components,  the server is still gonna fetch all the data underneath there.  Because when it hits a client component island,  like when it hits that,
[01:10:07] It's just going to try and serialize all the props, even the stuff the client will never show.  It doesn't know this information. It doesn't know what the client's going to show or not.  It doesn't have privy into it. This is why the tree works that way.
[01:10:18] It has a good benefit. When you're on the client and you toggle visibility, you don't have to go back to the server.
[01:10:23] It's going to be there instantly.  But it also means that every single thing that you pass to a client component, regardless  of what the client component is going to do with it, needs to be serialized.  And that includes all the data that you may or may not show.
[01:10:35] So if you, you know, are fetching a whole bunch of stuff and your client component toggles what's visible, you know,
[01:10:43] You're still going to fetch everything for every page.
[01:10:47] even if most of the stuff isn't visible.
[01:10:51] It saves the round trip later if it ever becomes visible.
[01:10:54] but you always take that hit up up front with server components.
[01:11:00] Thank you.
[01:11:02] I'm not saying it's a bad thing, I'm saying it's a very intentional trade-off. The way you solve this is you represent
[01:11:08] that visibility in the URL. You say like, hey, the like show details should be part of the request.  And then that decision no longer is a client decision. It's something you toggle,  which triggers a refire to the server and then the server
[01:11:22] chooses what to render.
[01:11:25] Right? It's the one controlling it. You can definitely work around this. I just want to say at like a core level, you have to understand that
[01:11:34] Client state.
[01:11:36] Um,
[01:11:39] doesn't
[01:11:40] like especially in the case of RSCs, can't be the determining factor of what you fetch.
[01:11:48] Right. Are we following so far?
[01:11:53] Thank you.
[01:11:54] Yes, exactly. Astro does this. RSCs do this as well. The biggest difference between Astro and RSCs is Astro only sends the data once, whether it's shown or not shown.
[01:12:05] which means that it solves the double data problem. You don't have the HTML,
[01:12:10] and then some serialized prop format. You don't send both, you only get one or the other.
[01:12:15] In React Server Components, you get both.
[01:12:17] So you traded your JSON blob, your next data,  for a JSX JSON blob, essentially.
[01:12:25] So,
[01:12:26] But it is innate to this model that the server stuff
[01:12:30] can't think about what's in the client so it needs to serialize all of it this is not a
[01:12:35] good or bad thing, it's just how it works. It's just something you kind of got to be aware of,  right? This is part of tying all the data requests into a single thing. It's that same mentality.
[01:12:47] Thank you.
[01:12:49] Right. See, on the client, yes, client data fetching. But this is important because...
[01:12:55] what I wanted to show here, the reason that this is an important distinction is I think people get
[01:13:00] hung up.
[01:13:01] on this client state part of it because
[01:13:06] And
[01:13:07] because essentially...
[01:13:10] the client state
[01:13:12] piece is what causes
[01:13:14] the client-server waterfalls in our client-centric models.
[01:13:20] If you think about it.
[01:13:21] Because if you didn't care about the condition of the client state,
[01:13:25] you could just fetch all the data
[01:13:28] At the route.
[01:13:29] You have all of this information
[01:13:32] at the route level.
[01:13:37] You know all of this stuff. The only thing that would, you know, this is back to that, you know, hoist or not hoisting question, right?
[01:13:46] Basically, I
[01:13:48] The client state is what enables you to
[01:13:51] opt in to waterfalls, so to speak, opt into places where you want to fetch the data later.  You don't want it part of the initial request.
[01:14:02] But...
[01:14:03] Mm.
[01:14:04] Thank you.
[01:14:05] You know, you want the client state to choose whether to fetch something.  But if you hold it to the same constraints that you hold server components,
[01:14:14] then it's also...
[01:14:16] not a like a constraint. It's not a constraint.
[01:14:20] Does that make sense?
[01:14:24] Yeah, yeah, of course, right? Except sometimes you do want
[01:14:28] to not load the thing initially.
[01:14:31] Like the problem with this, it's not a problem, but it's the challenge here is
[01:14:38] Like,
[01:14:40] You can say, yeah, put on the URL, but like you still have the choice of whether you do a single flight.
[01:14:44] with the URL and fetch all the data, or you fetch exactly what you need after the fact, right?
[01:14:50] Like,
[01:14:51] with a server component-esque model,  you're basically saying, put it in the URL  because you don't want the client's
[01:14:59] if you want to control what gets data fetched. But then when you go there, you still are going to be fetching, you know, a good chunk of data.
[01:15:06] But yes, it's generally pushing us this way.
[01:15:16] If you distribute your data to the edge, could you make the same argument that React team makes about waterfalls?
[01:15:24] No, see...  The thing is...
[01:15:29] The edge is actually almost a primary example of why
[01:15:33] think server waterfalls are okay is like a not a great way of thinking right
[01:15:38] because
[01:15:39] if you run your RSCs on the edge,
[01:15:42] Now the latency to your end user might be shorter, but the latency to your database might be longer, which means that server waterfalls actually are probably more impactful or as impactful as client waterfalls. So they're not winning anything. Is it a surprise thing?
[01:15:57] that, you know, Next put out partial pre-rendering, which lets them move the RSCs
[01:16:03] to the data centers and away from the edge.
[01:16:06] Right? Like it kind of all lines up if you think about that way.
[01:16:14] -
[01:16:16] I think lazy loading is good user experience.
[01:16:18] Well...
[01:16:19] The thing is,
[01:16:21] It is, but what's good about it is not waiting for everything to show it.  But you don't have to lazy load it. Ideally, you would fetch all that data
[01:16:30] as soon as you could and just not block on as, as stuff came in.
[01:16:35] Right? Right. Like,
[01:16:37] As long as you...  You don't want to be lazy about...
[01:16:41] very many things like there's cases where you want to but largely if you know you're going to need something you want to do it as eagerly as possible and
[01:16:49] Um,
[01:16:50] The problem is...
[01:16:52] with, you know, a lot of lazy experiences is that they, they kind of innately put waterfalls in your,  in your way when you don't actually need them. See, this is one of the, lazy loading is actually  one of the biggest challenges from, from a client side routing perspective, right? Because every  route is lazy loaded, right? So,
[01:17:11] *cough*
[01:17:12] Which kind of gets us back to this diagram.  But it's also why...
[01:17:18] If you think about it,
[01:17:20] It's why there's hoisting.  If, if, if,
[01:17:24] The routes weren't lazy loaded.
[01:17:26] and you had all the component code already,
[01:17:29] you would just go to the new page and get the data.  You wouldn't need to actually hoist up to loaders,  generally speaking.  There's a few exceptions to this,  like nested routing, because you don't,
[01:17:39] You might conditionally show the outlet of the nested route, so then you might create a waterfall.  But generally speaking, even before you get to that question,
[01:17:50] the code splitting on the client
[01:17:51] is what makes you want to hoist, right?
[01:17:54] On the server, you don't have that problem because...
[01:18:00] you don't care about your code splitting so you might just start  you know right along this initial url start data fetching right here
[01:18:08] you don't really care about the rest of this.  But...
[01:18:10] As I said, you shouldn't ignore that this second JS trip exists.
[01:18:15] So yes, loading stuff later, it's not about the loading it later, it's just not letting it
[01:18:21] force you to wait for it is where the benefit is.
[01:18:28] Thank you.
[01:18:43] The funny thing is...
[01:18:47] A lot of these problems have been solved.
[01:18:51] Like suspense. You don't need a billion spinners. Spinners and loading indicators are good.
[01:18:57] not having a billion of them flickering in, but being like,
[01:19:02] a grouping where you're like,
[01:19:04] This is coming in now, this is coming in now, this is coming in now.  Waiting for the whole page would be really slow.
[01:19:10] Spineers are giving you...
[01:19:14] some kind of a UI affordance to tell you something isn't there yet.
[01:19:19] Streaming has spinners. We're not doing this to get rid of spinners.
[01:19:24] That was one of the weirdest
[01:19:26] parts about the...
[01:19:28] the dialogue with Remix that always confused me because they were like talking about getting rid of spinners and I'm like,
[01:19:34] Yeah, but then when you stream, you bring the spinners back, right?
[01:19:39] It's good. That means you can get everything sooner. And it's the way we break. I had it in this diagram. It's the difference between this and this.
[01:19:48] You know?
[01:19:50] I...
[01:19:51] I mean, not even this and this, but yeah.
[01:19:55] Spinners it's it's a difference between like this and like this
[01:20:01] It's the difference between this and then and like and
[01:20:05] having a longer single thing come after here.
[01:20:09] If each of these red things is when something becomes visible,
[01:20:12] This...
[01:20:13] can be better than waiting for the whole thing to come at the end.
[01:20:20] Spinners are bigger than blank pages, yes, thank you.
[01:20:25] Yeah.
[01:20:27] So when you have a combination of...
[01:20:30] suspense for
[01:20:33] for
[01:20:36] initial data loading, stuff like optimistic UIs, all these pieces, you can make the experience quite smooth.
[01:20:43] Um...
[01:20:46] And the reason Spence is important in all these is because the developer now can just write the code
[01:20:53] and trust the system
[01:20:55] will show the right loading states and you don't have to micromanage them.
[01:20:59] Right? Suspense doesn't solve waterfalls. This was like the old thing.
[01:21:03] React puts this fence up. People are like, oh, they solved waterfalls. No, they just made it
[01:21:08] so that you don't have to worry about it. It's so lovely. Because the thing we didn't talk about here is, the other benefit of these things being separated is that sometimes,
[01:21:19] This takes longer. It just happens that way, right? It's not trying to give you the sideways middle finger. It's just, but it does.
[01:21:27] And if you put all your stuff together,
[01:21:31] and they're tied together
[01:21:33] then...
[01:21:34] The whole, like the longest thread takes longer and that's what's, what's blocking you, right?  Streaming gets us out of this.  That's the benefit of streaming.  I was trying, it's, it's the long tail problem.  It's that like streaming isn't about like necessarily, you know,
[01:21:49] loading in that one piece of the page sooner. It's that like if you have a bunch of services that have different latencies, now your app isn't as slow as your slowest dependency.
[01:22:00] You could, and this is easy to get to.  You can do some math, right?  You know, the inverse proportion.
[01:22:06] reliability check, right?
[01:22:09] Actually, I don't think you have to inverse it, right?  If each service of yours was 90% reliable or 99% reliable,
[01:22:16] Um,
[01:22:17] If you have 10 services,
[01:22:20] then that whole service is only about 90% reliable.
[01:22:24] Like you lose a whole order of magnitude if you tie them all together.
[01:22:28] That's
[01:22:29] Why streaming matters.
[01:22:30] And it's why we still, you know, talk about these things in independent.
[01:22:36] RC is stream, to be fair.  And it's based on suspense, which means it's based on UI.  It has the right groupings.
[01:22:43] But...
[01:22:45] you know,
[01:22:46] That element of suspense tying it can also happen client only.  Like there's, it's not the RCs aren't the only way to do that.  I just wanted to kind of point out that there's,
[01:22:56] where grouping and streaming actually are very important together.
[01:23:00] Thank you.
[01:23:04] Thank you.
[01:23:05] Thank you.
[01:23:06] *laughs*
[01:23:12] Right. But yeah, it depends on the speed, the importance of data, right? So you control that. It's an important, what's the, Brian Florence always used that term, like lever. Like, I think it's important that we can control and understand this.
[01:23:35] I find the slowest apps are already ones over market managing fetching, like doing 5 10k fetches over 50k would do as well.  Yeah, yeah.
[01:23:42] Because there's overhead in figuring this out and you're like the complexity of the system increases as you try and figure out what you're supposed to do.  But the reason I wanted to talk about these inputs is that...
[01:23:52] Generally speaking,
[01:23:56] If your stuff's going to...  This is the relay problem, because...
[01:24:00] It's not that hard to picture with our compilers today that we could easily...
[01:24:06] hoist all the data fetching
[01:24:08] up to the route level so you wouldn't have to author it yourself.
[01:24:12] And people are like, what if it's conditionally rendered? Well, that conditionally rendered
[01:24:17] Um...
[01:24:19] should depend on
[01:24:22] the route based information, not client state based information. Like all the information you need
[01:24:28] is available at the point of the route.
[01:24:33] Thank you.
[01:24:36] Thank you.
[01:24:37] Yeah, like remix defer or in the case of I think in the case of solid start, yeah, we have to first stream on the it works the opposite way we stream by default and then.
[01:24:47] It doesn't matter. It's the same idea.
[01:24:55] Thank you.
[01:24:59] Okay.
[01:25:01] Reason, so this is why I wanted to kind of talk about this piece, because I think...
[01:25:06] The fundamental question, and I was going to write this in a tweet the other day, was like,
[01:25:13] fetching in components.
[01:25:16] always has the chance
[01:25:18] for...
[01:25:19] waterfalls and more so the chance for
[01:25:22] avoidable waterfalls to actually happen.
[01:25:26] Thank you.
[01:25:27] So, like, the RSC side has generally been like, well, server waterfalls are better than client-side waterfalls.  Um...
[01:25:37] Thank you.
[01:25:39] *clap*
[01:25:40] You know, like...
[01:25:42] You can always still hoist...
[01:25:44] stuff up if you want to, right?
[01:25:47] And then the other side,
[01:25:50] that I've been arguing is, you need to be aware of these waterfalls.
[01:25:55] from the beginning and just design your solutions that way.
[01:25:58] We know this is why Remix is taking so long on RSCs.  They don't want to get away from their loaders,  because the thought of introducing server waterfalls terrifies them.  And...
[01:26:07] With good reason, because...
[01:26:11] Like...
[01:26:13] Server waterfalls aren't necessarily...
[01:26:17] Um,
[01:26:19] Meaning that the latency is low.
[01:26:21] Um...
[01:26:23] I think I actually have a tweet conversation that I want to look at from this whole thing.
[01:26:29] it was part of this conversation,  right?
[01:26:33] The...
[01:26:35] This whole thing that Dan Abramoff ended up doing about the read file thing caused Zach Wright's code here to...
[01:26:46] make a bunch of examples where he put loading in a file system directly in a component.
[01:26:52] And...
[01:26:55] Thank you.
[01:26:56] In a lot of frameworks, it actually works.  You can read the file system and have it stream in or load into the component.
[01:27:03] And
[01:27:04] The problem is like the Cody rope, especially for solid, I was just like, wow, that's just weird.
[01:27:11] You can do it, but it's not recommended because we don't have server components.  Quick does not have server components. Solid does not have server components.  We don't like on a page navigation, we don't go to the server necessarily.
[01:27:22] So Dan pointed out that these weren't the same models.
[01:27:27] Um,
[01:27:28] Which should be unsurprising to anyone who's following this stream.
[01:27:32] We don't have server components, so we do not do the same thing as React.  The question is...
[01:27:39] Does this mean that we are doomed to have waterfalls?
[01:27:47] So, uh...
[01:27:52] Brenly here went ahead and was like, well, why don't I just use, instead of saying like, is server, why don't I just use a server function? Like, you know, I showed an example earlier.
[01:28:01] and put them in the component.  And he made this...
[01:28:04] example, and it was just like, look,
[01:28:08] Read file.
[01:28:09] read file in the component. Now instead of is server, it's
[01:28:13] you know, a server function.
[01:28:15] What's the big deal?
[01:28:16] All right.
[01:28:18] Thank you.
[01:28:19] Okay.
[01:28:20] What if I render Trio components?
[01:28:22] He did it.
[01:28:24] He rendered a tree of components.
[01:28:27] Guess what?
[01:28:28] Now we have a tree of components.
[01:28:32] Thank you.
[01:28:34] Thank you.
[01:28:36] Does anyone want to guess if this has waterfalls?
[01:28:44] We create a function that reads a file in the component,
[01:28:48] We read the file text and we show it.
[01:28:52] And then we have children and then we just
[01:28:55] We grab all these files.
[01:28:57] and we nest them.
[01:29:00] Does this have waterfalls?
[01:29:03] Yes.
[01:29:05] Yes, it does.
[01:29:06] Actually, the answer is no.
[01:29:10] Thank you.
[01:29:11] these are all oh these are the okay okay okay you you you okay you got it there
[01:29:20] These are the same file, so the cache function dedupes it.
[01:29:23] Yes, but okay, let's pretend...
[01:29:26] that it's not the same, that these are all different files.
[01:29:34] Let's pretend these are different files.  Is this a waterfall?
[01:29:40] Thank you.
[01:29:40] Thank you.
[01:29:42] Thank you.
[01:29:46] See, we've got React developers in the audience,  so immediately in their head,  they're thinking of the React model,  and they're like, yes, this is Waterfalls.
[01:29:54] No, this is solid.  This isn't React. Of course it's not a thing.  And again, he probably doesn't want me to
[01:30:00] There is private chat, but
[01:30:01] You guys are here for the show, right?  So let me see if I can...
[01:30:06] I'll grab it off screen and show the important parts.  Because he reached out to me privately.  And he was like...
[01:30:12] I tried to change it like
[01:30:14] like Dan said, and I wanted to understand what was happening here.  So let me see if I can find it. Messages.
[01:30:22] Okay.
[01:30:26] Perfect. Yeah, I don't have to.
[01:30:28] Do I have to reveal anything private here? Let me see.
[01:30:37] Yeah, there we go. This is what our example showed.
[01:30:44] two seconds for his read file in
[01:30:47] This is exactly what we were showing.
[01:30:57] It's because, yeah, it's the third graph, exactly.  Like there's a slight bit of rendering consideration,
[01:31:03] Because create async doesn't block.
[01:31:07] Right?
[01:31:10] Thank you.
[01:31:14] Thank you.
[01:31:16] Do you know what the server component version does?
[01:31:23] Now, I can think of how to make the server component version not do this.
[01:31:30] It involved hoisting components like through the parents and stuff.
[01:31:33] Thank you.
[01:31:35] But I wanted to point out
[01:31:39] that it's not that simple.
[01:31:44] In his case...
[01:31:45] He's running locally, so the network is making no thing. The server is just spending two seconds on each file read.
[01:31:51] Right?
[01:31:52] So essentially...
[01:31:54] The solid version is actually parallelized where the naive React server components version is actually
[01:31:59] the one that's waterfalled. And while the network is not showing you a waterfall,  you know it's going two, then two, then two, and you're getting it at the end.
[01:32:09] Thank you.
[01:32:10] I'm not...
[01:32:14] I'm not saying this is the only way to do it.  It's just, I wanted to kind of point this out to people because...
[01:32:24] Mm-hmm.
[01:32:25] You...
[01:32:30] So does it create async stream response? Well on initial load, yes.
[01:32:34] And it's automatically handled. But even on a navigation, it's still going...
[01:32:39] to, these are just, it doesn't need to stream the response when they're three separate requests.
[01:32:46] Like, you go to the next page and you go, uno, dos, tres.  Like, you just go, fetch, fetch, fetch.
[01:32:52] Thank you.
[01:32:55] Turns out you can avoid wallhounds you don't block. Who would have thunk it? Well, people like async await.
[01:33:00] Async components are what
[01:33:02] Force blocking.
[01:33:04] Async.
[01:33:06] Like if you guys, if we go back,
[01:33:09] A little bit.
[01:33:10] You'll remember there was a
[01:33:13] there was like a tweet that I made on a little while ago on Twitter,  um,  where I was like,  does it bug you as much as me?
[01:33:23] Let's see if I can find it.
[01:33:26] Let's go to my profile.  The bug use, like, it was a while ago,  but I showed the difference between something written with async await  and something written, it doesn't matter.  I wrote something that was showing the difference between async await  and promise then, and...
[01:33:44] The gist of it...
[01:33:46] Yeah, let's get back here. Is that
[01:33:49] Async/await is innately blocking. It's like the last thing I want to bring near my UI.
[01:33:56] Right?
[01:33:59] Just a second, I can, I can, uh, just, I have a HackMD here. I've got some good links in here. Um,
[01:34:06] Let me sign in.
[01:34:08] Why am I-- it's funny.  I guess I haven't been on here in a while.
[01:34:12] Okay.
[01:34:12] Are circumcions actually that composable?  Well...
[01:34:15] We'll get to this in a minute.
[01:34:18] Server waterfalls are real.
[01:34:23] Okay, let's go here.  I want to show you something.
[01:34:29] I got some great links for Next.js docs to kind of talk about this. Because I think this is important part we understand.
[01:34:37] a...
[01:34:38] client-based solution is,
[01:34:41] could definitely cause waterfalls, right? Like definitely like
[01:34:45] You know, we could do it so easily by simply...
[01:34:50] doing it via layout.
[01:34:52] Right? If you
[01:34:55] But just offhand, async await is interesting because they're talking about parallel and
[01:35:06] and sequential data fetching here, right?  And they're showing like, look, if you await,
[01:35:13] That's sequential.
[01:35:14] where you can parallelize
[01:35:17] is instead of awaiting each one, do a promise all. But
[01:35:22] Promise all...
[01:35:24] doesn't actually
[01:35:26] change the fact that if this
[01:35:28] if there was more data getting fetched below, that it's not blocked by this.
[01:35:33] The presence of a weight
[01:35:35] means stop.
[01:35:38] Right?
[01:35:41] It's interesting. People love the DX of async components. I'm still very hard against async components. It doesn't match with my mental model of what a component is.
[01:35:54] It's, you know,
[01:35:56] Ironically,
[01:35:57] Especially when you think about a React that re-renders components, which doesn't happen with server components. It is very difficult to picture something just sitting there and blocking right in there.
[01:36:12] Thank you.
[01:36:14] Thank you.
[01:36:16] It's it's... returning a promise means yes the calling context outside so if you have two siblings
[01:36:25] You can go, okay, this one's got a promise. Let's go to the next sibling.  But hierarchically, it's blocking. I do not get to this next line of code
[01:36:34] Because this await has stopped me.
[01:36:37] the next component sibling can run.
[01:36:41] But this is like, this is the end. I am blocked here. Now, why does this matter? This doesn't matter if
[01:36:48] You're component centric because like how could you do this any way else?
[01:36:54] Because like...
[01:36:56] Components are all that you can render.
[01:36:59] But if you're data centric, it does matter because like in this, uh,
[01:37:05] nested file components example,
[01:37:07] This data
[01:37:10] is required here, but this part of the tree has nothing to do with this.
[01:37:15] So I can fetch this data and render this.
[01:37:18] We can keep on going here.
[01:37:20] they don't need to block each other
[01:37:23] Right?
[01:37:24] Like,
[01:37:25] Because...
[01:37:27] in Solid's model,
[01:37:29] async
[01:37:31] is down to the granular level.
[01:37:34] I didn't want to do this stream until solid 2.0, because when solid 2.0 comes out, we'll have proper derivation with blocking along the reactive graph.
[01:37:43] I think it's important
[01:37:44] Right now we have lots of null checks.
[01:37:46] But
[01:37:47] If the data graph
[01:37:49] could block like React.
[01:37:50] You could keep the rendering going while blocking along the data. You wouldn't even have to do the null checks.
[01:37:56] It'd be like the best of both worlds. That's what solid 2.0 is. I haven't talked about it here and there, but...
[01:38:03] It's important to understand...
[01:38:05] that
[01:38:08] You know,
[01:38:09] You don't need...
[01:38:11] a blocking model to do this.
[01:38:20] Thank you.
[01:38:28] Yeah, I mean, they are doubling down on view caches because, again, you're combining all your stuff together.
[01:38:35] Right?
[01:38:38] *sniff*
[01:38:38] Thank you.
[01:38:42] The caches is how they're like solving all these waterfalls. Like there's so many solutions here to solve the fact that this innately
[01:38:49] isn't granular.
[01:38:53] Thank you.
[01:38:57] Okay, okay. What you're saying is it's not blocking of like a process or anything. I mean, it blocks rendering at a core screen level.
[01:39:05] That's what I mean. I'm not saying it's like blocking, like your server's sitting there chugging away and can't do anything.
[01:39:11] I'm not even saying the next component can't run,  but it literally hierarchically pushes, causes waterfalls.  Like just simply by writing a wait,  you're like saying this will waterfall.  You're just like,
[01:39:22] "Stamp, I will definitely waterfall."
[01:39:25] If there's something under it.
[01:39:30] What devs should understand is not all promises are interdependent.
[01:39:35] Definitely not.
[01:39:37] But,
[01:39:39] if you hierarchically block
[01:39:41] You just sign them up for it.
[01:39:44] Like...
[01:39:45] Like, let's talk about this a bit, right?  Like...
[01:39:51] Mm-hmm.
[01:39:52] I do think, layout-wise, we block more than we need to. For example, if you have a user section, even if you're going to use their details, you might go like "if user" above the whole section and the details fetching could happen below.
[01:40:07] So you might unintentionally block
[01:40:10] Thank you.
[01:40:12] Right. Like it will happen. Right. Like.
[01:40:16] So there is this kind of consideration that happens even with a non-blocking system.
[01:40:23] But
[01:40:24] as a baseline...
[01:40:28] Await is just like...
[01:40:30] like,
[01:40:31] Let's pretend I've loaded some data I needed.
[01:40:34] and I weighted it in my component, and that component grabbed a server component from npm.
[01:40:40] That
[01:40:40] happens to fetch its own data. I don't really know about this data, but it just happens to use it.
[01:40:45] Well, if I put that component as a child,
[01:40:49] of any of these components I'm showing in this examples here.
[01:40:53] then
[01:40:57] Guess what? I've caused a waterfall.
[01:40:59] These are completely independent things. They don't have anything to do with them. I did not need the data from the artists to
[01:41:05] do whatever other thing that I put over here.
[01:41:09] But I did.
[01:41:10] because I chose to await.
[01:41:14] Thank you.
[01:41:21] See, on the server it doesn't really matter, right? Because like, you don't need concurrency in the sense that you can just like show a placeholder and then don't show a placeholder.
[01:41:31] But it's interesting in the models where things are updating a lot and interactive.  This is why async await doesn't work particularly well for the client side.  You have to compile it away to something else.  Like I've thought about ways of compiling async await, but I think the semantics become wrong for people.  It's confusing.
[01:41:45] Thank you.
[01:41:57] Right. Where is it here? It's like the Reebok stage. You can wait or not let it stream, right? But the thing is, at a certain point...
[01:42:06] Remix makes you make all those decisions in the loader in one spot, right? Whereas this is just hierarchical based on the needs of the view. Like in a sense, if you view your server components as data, then you're probably going to author them in the right way. But if you're thinking of them in terms of layouts and templates, then our hierarchy has almost nothing to do, like it's related to our data, but it is not the same thing.
[01:42:30] Right?
[01:42:33] Okay. So this is what I was talking about, avoidable and unavoidable thing. If you know
[01:42:41] Sometimes there's promises that are related.  Like if you get a user and you need to get their friends,  you don't know what friends until maybe you get some information about that user first.  It's possible you can do that in one request.
[01:42:52] because you just need the user's initial ID.  I'm trying to think of another example.  Sometimes there's like...
[01:42:57] Waterfalls you can't avoid because you need to get the logged in user before you've fetched something else.  You can't avoid those waterfalls.  But a lot of times you just need an ID.
[01:43:08] you know, like get from username. See, in this case, you just need an ID.
[01:43:14] Right. So the way you solve this is...
[01:43:17] Again, very easy in React. If you had something down lower, you can just hoist it up to the level that you need it at.  So, like, don't get me wrong, there's nothing wrong with the RSC model here. I'm just pointing that you need to be aware of this.
[01:43:31] Right? You need to know you have to fetch it. And this is why there's these sections of the docks. They're actually great. This is, I wish I had docks this good that actually explain how to fix waterfalls. Like there's a whole
[01:43:42] freaking section, you know, on Twitter, we can all say like, oh, server waterfalls don't matter,  blah, blah, blah, blah, blah. But the next JS...
[01:43:49] Docs have a best practice section that is literally just how do I solve waterfalls? That's like basically the this whole page and
[01:43:58] And like, here's another example here.
[01:44:02] Um...
[01:44:03] preloading data. They have a really great pattern where they tell you if you poised out your preload function,
[01:44:10] You can then export it off your component, and then somewhere else, higher up, can then call preload.
[01:44:17] In a sense, it's very similar
[01:44:19] Like they just did it here.  But if you think about it, you could also just ignore this preload.
[01:44:26] and just call get item, just import get item from
[01:44:29] different places and if it's a cache function
[01:44:32] Um,
[01:44:33] It will...
[01:44:35] it will be the same thing, right?  I like that they kind of were explicit, like, this way you can set your own.  It's kind of like building your own JSX or build your own fragment.
[01:44:44] for data. So this whole pattern can still exist where you can go like, okay, I'm going to, I know  that this section needs this data. And then you can build a whole pattern around importing preloads  for the components that appear on the page and then hoist them up and do the data fetching.
[01:44:59] Thank you.
[01:45:04] right
[01:45:22] Just catching up on chat now.
[01:45:28] Thank you.
[01:45:37] Do you like the way Remix handles at the reload?  Yeah, mostly.  My only gripe, and it's minor with Remix,  is I don't think, I think data fetching is a graph
[01:45:47] And I think data mutation is RPC. GraphQL ruined me forever. And that's the only reason why my APIs are a little bit different.
[01:45:58] Right. I realize once you go granular like that, everything just becomes basically tan stack over the network. And that's what we built with Solid Start. But generally speaking, I like Remix. I think they designed for waterfalls in a really smart way.
[01:46:17] Do you think RSC default potential waterfalls due to nested components solved by optionally hoisting is preferred if not? The thing is,
[01:46:23] The...
[01:46:24] Yeah, so this is the thing.
[01:46:26] On our toy demos,
[01:46:28] We're not going to get in trouble.
[01:46:31] doing this stuff in next. And guess what?
[01:46:33] You're not going to get in trouble.
[01:46:35] doing this stuff in solid star 2 like in our toy demos these 45 line whatever they they it's funny  that the the you know
[01:46:43] Like there was a great tweet in here.
[01:46:46] I think.
[01:46:48] Guillermo gave me, you know,
[01:46:52] a flex in here somewhere. I remember seeing the response and being like,
[01:46:56] you know,
[01:46:58] Good job. Yeah, looks good, you know.
[01:47:01] you know, definitely, you know, pushing the stuff with solid.  And he goes, "I miss the original. I think this API might set folks for problems."
[01:47:07] they're so fast on the react side to just be like,
[01:47:12] You know...
[01:47:13] We've solved this, but then it's like, not really. Don't get me wrong.
[01:47:20] Server waterfalls are better than client waterfalls.
[01:47:23] as a generic term, but like essentially
[01:47:30] Like...
[01:47:31] It's not like this stuff is free like we've been talking about.
[01:47:35] So, like...
[01:47:36] Cool.
[01:47:38] I do think the async component model, like this is independent.  I can picture a server component model that's not using async components.
[01:47:45] Ta-da, we've already solved part of the problem.
[01:47:47] Do you know what I mean? Like some of this stuff is specific to the implementations that we're seeing today. I don't think conceptually, I don't have a problem with the space that RSCs work on. I'm critical of specific details, but on our toy demos, it's not going to get us in trouble.
[01:48:04] You could say that the client stuff will get you in trouble sooner.
[01:48:08] I agree with that. It's also the way that people have been doing stuff for over a decade, so...
[01:48:12] There's also that but
[01:48:15] I'm going to go.
[01:48:17] The other option is just
[01:48:19] concede that
[01:48:21] Local data fetching is kind of a bad idea.
[01:48:25] I know people want it because we continue to thread me and Dan where he's like,  well,  what about co-location and all this?  And it's like,
[01:48:32] you're always going to have trouble because once you co-locate,  you can't see the whole picture on the data side,  which means you're always going to introduce the potential for waterfalls.
[01:48:43] You know, you can do it
[01:48:46] you know, kind of half-assed, sort of like this.  I'm not saying that this is a bad pattern.  This is what I'm suggesting in solid.  If you really want to, like, zone it,  you can start with route sections,  and then you can import from, like, sections of your page,  and you make these...  You can always chain load functions into each other or whatnot.  It's just, like...
[01:49:03] like at a certain point,
[01:49:06] It's like micro front ends. It's like the thing you have to do, not the thing you ever want to do from a performance standpoint.
[01:49:16] Yeah, it is the loader pattern.  They just...  It's not a real thing.  They just...
[01:49:21] Let me read the
[01:49:23] Docs here.
[01:49:26] You can combine the cache-rinded preload pattern and server-only package to create a data fetching utility that can be used throughout the app. With this approach, you eagerly fetch data, cache responses, and guarantee that the data's fetching only happens on the server. The utility's get items can be used by layouts, blah, blah, blah, blah, blah, blah.
[01:49:40] But my understanding here,
[01:49:44] is that it's manual. I could be wrong. Maybe it's not. That'd be cool if it's not. But,
[01:49:54] Thank you.
[01:49:57] Thank you.
[01:49:58] Thank you.
[01:50:00] Thank you.
[01:50:02] So like, this is... I had two motivations here because like...
[01:50:07] I think...
[01:50:11] Dan is correct.
[01:50:13] to be annoyed at people,
[01:50:15] keep on conflating these things.  Like, we're not trying...  But on the other hand...
[01:50:22] the invitation of like people trying to meet the criteria is also what's forcing everyone to try and like
[01:50:28] hammer something. It's, you know, with this, you know, what's the thing?  If everything looks like a nail and you need a hammer or whatever,  like it's, it's why we kind of end, uh,
[01:50:36] end up in this kind of zone, right? Because
[01:50:41] You can...
[01:50:43] very easily...
[01:50:44] create waterfalls.
[01:50:46] If simply from the fact that
[01:50:49] you have a conditional on some client logic that says like,  if,
[01:50:54] this data above is loaded, then render this, and then something below has it. And now suddenly,
[01:50:58] you have a waterfall.
[01:51:02] It doesn't even have to
[01:51:04] be a waterfall is what I was showing with the nested file thing.
[01:51:08] But I care so much about the
[01:51:11] us not doing that, that
[01:51:14] I pushed Remix style loading, you know, basically. If you've ever seen, you know, Solid Router, right from the beginning,
[01:51:22] You know, this predates Remix actually.
[01:51:25] We've been doing...
[01:51:27] these kind of data
[01:51:29] This is the latest data APIs, but the whole idea is that there's this kind of isomorphic
[01:51:38] Um...
[01:51:42] Whereas
[01:51:43] Thank you.
[01:51:44] Like the load function.
[01:51:47] load load load
[01:51:52] Yeah, I mean, it's funny because when you do it manually, you have to kind of actually...
[01:51:57] pass in these these load functions but this is actually for the migration. I gotta see,
[01:52:01] This is my problem is docs.
[01:52:03] I need to do better here. Where is the load shows up on the page 55 times. So try and find that one.
[01:52:10] - Thank you.
[01:52:14] Here we go, load function, right?
[01:52:17] Get your cache function, call it in your load function, put it into your router.  We do this with file system routing as a solid start, but just kind of
[01:52:24] The Remix-esque popularized approach is very much still a reasonable solution in this day and age when you can't actually solve the stuff, right?
[01:52:37] Thank you.
[01:52:40] I have problems with Waterfall in general.  And I think people...  Let me continue reading from that document I was talking about.  Server Waterfall is real.
[01:52:51] Thank you.
[01:52:52] I don't know who needs to hear this. Maybe repeat it out loud until it sinks in.
[01:52:57] Look at all the work that went into solving n+1 problems in GraphQL.
[01:53:01] You know, like you're patching a list of users that have friends and so on.  Before I was working on Solid.js,
[01:53:08] I did a lot of work on an ORM. It was GraphQL-esque in a time before GraphQL. I did a lot of my work in automating and optimizing cross-model queries from the knowledge of database schema and query analysis. I became accused, I can be accused of maybe micro-optimizing, but this is a real thing.
[01:53:22] I wouldn't expect, say, server commotes to solve the M+1 problem on their own. Dduping caches can help  repeat requests, but that doesn't really help you making multiple requests with, like, different keys  where you could group them.
[01:53:34] But like, these are the kind of thing, this is the kind of thing, you know, that we have to be aware of at design time.
[01:53:39] We already talked about edge functions and talking about the distance where server waterfalls matter.
[01:53:47] We talked about async await.
[01:53:51] - Yeah.
[01:53:51] Some waterfalls are unavoidable. You need to check if someone is logged in before you fetch something. You need to get some other data before some other data. However, component organization is based on view hierarchy rather than data hierarchy. It's a layout consideration. We could have all the components we need to fetch children before the parent has returned, but we don't show them yet because we don't show certain elements without others.
[01:54:11] Right?
[01:54:13] So, like...
[01:54:16] Yeah, any waterfall is not great.  Some are...
[01:54:19] acceptable where others aren't. But as
[01:54:23] As a baseline,
[01:54:26] Thank you.
[01:54:26] Thank you.
[01:54:27] Yeah, I'm not going to say that waterfalls are good.  You're never going to see me going like, those are the good type of waterfalls.
[01:54:34] God, that was the funniest time period when RSCs first came out.  There's like a bunch of tweets talking about good and bad waterfalls.  And I'm like...
[01:54:42] Wow, let's see if that works on people.
[01:54:46] - Yeah.
[01:54:48] Um...
[01:54:50] But, yeah, I mean, look, like, do you...  I mentioned the edge because...
[01:54:57] Like, would partial pre-rendering even be a thing for an X14 if it weren't for the waterfalls from the edge?
[01:55:04] I have to legitimately ask this,  because if you can stream the content  and synchronous rendering is in the...
[01:55:12] sub milliseconds, it's fast.  Even in React, it's relatively fast, synchronous rendering.  Just jamming some strings together is relatively fast.  If you're at the edge,
[01:55:24] Like, basically, the difference between, like,
[01:55:31] doing the sync render and like kicking up an edge function to then
[01:55:36] grab the stuff from the CDN and serve it out and then proxy back to a server to, you know, get this, you know, the rest of the RSC's rendering.
[01:55:43] I'd be surprised if the latency difference was significant from just streaming from the edge in the first place.
[01:55:48] But the huge difference is the length of the server waterfalls on the edge are a lot longer.  And I feel like if server waterfalls didn't matter, we wouldn't see this feature.
[01:55:59] We just push people to deploy to the edge.
[01:56:11] Thank you.
[01:56:14] Yeah. Anyway.
[01:56:21] Good waterfalls only occur in nature.
[01:56:30] I'm not sure where else would work. I'm here, I would expect the app dev. Yeah. Well, the thing is, we're always pushing with frameworks to make things easier for the app dev. So it is very desirable to find things that are good enough and then be able to push them under a rug.
[01:56:43] Um...
[01:56:44] You know, like,
[01:56:46] React didn't want you to think about how your UI is updated, you know, like in terms of like data flow. So they came up with the virtual DOM and just threw everything or like basically immediate mode for the DOM.
[01:56:57] That's a perfect example of that kind of simplification.
[01:57:00] What's interesting that is over time we optimize, right? So that's why we're where we are at now and where people are like, I don't know about the React model. React model is actually really good. It makes a lot of sense in terms of like server components. It's it's.
[01:57:12] having these diffs and stuff, it was like React was made for server components. It's so funny because sometimes React gets like flack for the things that are like so obviously what it's good at and people are like, you change the game. It's like, no, React was always like this.
[01:57:25] I...
[01:57:26] You know, like...
[01:57:29] Oh man, it's funny. There's other things where React has changed, but like
[01:57:33] Silver Komodo's model fits React quite well. I mean...
[01:57:36] Thank you.
[01:57:37] I've shown this on stream. It's been a while.  Has anybody ever seen FaxJS?
[01:57:42] Jordan Walk created React before React. He made a JavaScript framework
[01:57:47] that was seamless client server rendering. Write once, render anywhere, blah blah blah, reactive, user automatically updated, no bindings, performance structural, blah blah blah. But essentially,
[01:57:56] It was kind of like server components.  My understanding is like he called it fax because the idea was like you could
[01:58:03] Like, send...
[01:58:04] a page from the server, like,
[01:58:06] and have it on the client and then it would like diff the difference.  Like essentially it was like a fax machine between the client and the server.  And that was where the idea came from. Um,
[01:58:17] Yeah, this is 13 years ago.
[01:58:20] So like
[01:58:23] *laughs*
[01:58:24] I think it's important to understand that this has never been that far from their minds.  It's not like they're just trying to screw everyone over by changing it.
[01:58:33] But I think the tricky part with React and the
[01:58:36] It's so funny because they've always been the different one a little bit is that when people see react they see different things when people saw hooks they saw fine-grained reactivity and
[01:58:44] They might have not known that, but in their head they were thinking fine-grained reactivity, and that's not how hooks work.
[01:58:49] I think that's been...
[01:58:51] one of their struggles over time is because they are so different.  It's crazy that they're the most popular solution from that sense.  And it's like, you have to applaud that. It's just,
[01:59:00] you have to understand that like,
[01:59:05] Yeah, React is very unique and
[01:59:08] I don't, I think it takes a lot of time for people to...
[01:59:11] recognize what it truly is.
[01:59:14] Thank you.
[01:59:17] Thank you.
[01:59:19] Can you use the Edge with Love for Sale? Yes. Cloudflare, Netlify, DenoDeploy,
[01:59:27] Yeah, lots of places use the Edge will oversell.
[01:59:35] Yeah, yeah. So you guys are just doubling up what I said earlier.
[01:59:44] .
[01:59:53] Thank you.
[01:59:58] Thank you.
[02:00:01] Yeah, I actually want to at one point have Matt Cain on as a guest.  He's the guy...
[02:00:09] He's the principal engineer on the frameworks team.  He had an Elevary and he would have lots of stories to explain, uh,
[02:00:17] about how...
[02:00:19] You know...
[02:00:21] what it's like to be building edge solutions and interacting with different frameworks, get the deployments going. I'm very stoked. I've reached out to him. We'll see if he's ever available. We live in different time zones. And like myself, he's a family guy. So like, it's hard to get him on his off hours.
[02:00:39] So
[02:00:40] Yeah, I could. That's that's another interesting one. Yeah. AWS has Edge as well. Yeah.
[02:00:48] Um...
[02:00:49] But yeah.
[02:00:52] Yeah. So I don't know how far I want to go into this, this article, because it,
[02:00:57] I was thinking about, I wanted it for the server waterfall part, but I basically started writing an article this week because I kept on hearing about how composable server components are.  And I kind of want to call into the question at some point.  Maybe we'll get there in a minute.  Let's finish up on waterfalls first.  Okay.
[02:01:16] Thank you.
[02:01:16] I
[02:01:18] So...
[02:01:21] Not that I actually have a ton more to show, to be fair.  I just wanted to kind of...
[02:01:27] point out that...
[02:01:28] *sniff*
[02:01:32] It is...
[02:01:33] Very easy to create waterfalls regardless.
[02:01:37] Um...
[02:01:40] Right. All it takes is
[02:01:42] if this had like a, you know,
[02:01:45] ternary around the children that was like if file text props children we've created a waterfall.
[02:01:52] And, you know,
[02:01:54] I think it's interesting because...
[02:01:57] Thank you.
[02:01:58] When you tie it to the component tree,
[02:02:01] like RSCs do. You have this innate ability to make it really easy to create waterfalls, obviously. But you can also kind of just like think about it in terms of inputs and outputs. It gets a little bit harder to compose stuff.
[02:02:14] Um...
[02:02:15] When, you know,
[02:02:18] each piece has to export both a data tree and a view tree. Right.  So like if you have a data loader, right. That, you know, like remix or solid style,  and you're kind of expected to export it, right. Actually, sorry.  We just saw this a moment ago on the next RCDocs.  If you're expected to do this everywhere,
[02:02:36] Like it can impact composability and this isn't even great because these are still, you know, potentially separate requests in each one. You know, GraphQL had fragments. How do you deal with stuff like fragments, right?
[02:02:47] So,
[02:02:49] The funny thing is,
[02:02:50] Thanks to you guys kind of poking me at this, I actually realized something the other day.
[02:02:55] I
[02:02:57] Server functions
[02:02:58] In solid.
[02:03:00] I just want to, the reason I'm talking about this is we know that React solves a certain problem with RSCs.  I want to just throw out one other possible way of approaching this, just for the sake of doing it.
[02:03:10] This here is a server function.
[02:03:13] that gets a user
[02:03:15] by some search or a set of users by search queries.  And then it uses a data loader from GraphQL
[02:03:21] which basically means that every time you call user...
[02:03:24] loader.load ID, it collects the IDs on the micro task, I believe, and then
[02:03:30] it will resolve them into like a series of promises.  So essentially we can load a set of users  and then we can map over those users  and do like hundreds of requests against this,  but it'll only become one request to the database.  So we only go to the database twice here.
[02:03:46] and then it'll map it back as promises into the data.
[02:03:50] Now this
[02:03:51] data loader could also be another server function.  Because in solid server functions,
[02:03:57] in the client or RPC, but on the server they're just normal function calls.  Which means that you can nest server functions inside server functions inside server functions,  and they can be called independently as RPCs, but they can also be joined together without having the overhead of like the,
[02:04:13] Thank you.
[02:04:14] the what do you call it the
[02:04:18] the request-response cycle.
[02:04:20] So you could, in theory, at least, and these can be defined anywhere, obviously...
[02:04:26] basically construct data loader type patterns in your server functions, so they could automatically do something like this. And because we have SaraVal,
[02:04:33] which
[02:04:34] handles serializing promises.  So if this users.map returns a friends promise  for each one of these friends,  well, Servo will resolve it
[02:04:44] on the client and in fact what will happen is when we do this it will
[02:04:48] Go get the list of users.
[02:04:49] This is the only await here. So it waits to get the list of users and then it will immediately start streaming back the results. And as these friends load in, these friends requests loads in, it'll continue streaming that data to the client in the response. So it's basically GraphQL, right? Where we get the main part of our query and then each nested section in the same request comes back streamed in as it resolves.
[02:05:13] So like there is a composition story here, right?  Cause you could, you know,  make a few queries for sections of your page that you,  where the data you want.  And then you could have those queries, uh,
[02:05:23] you know, get called by other queries and join the data together and have it all stream in over a single request.  Just kind of the show.  I don't know if people need to get this crazy, but the biggest difference is that each one of these trees...
[02:05:37] is granular. You can choose to make one big tree, you can choose to make no trees and just have single requests, you can choose to make 10 of them,
[02:05:44] In parallel, you have the complete control over how many trees happen when you go to the next page. It's not one tree. You don't have to fetch all the data. You can invalidate
[02:05:54] the thing that you want and group things as you want. I just want to show
[02:05:59] you know, this side. The challenge obviously is on the other side, you'll get back objects
[02:06:05] that you'll wrap and create async and inside
[02:06:08] those, there'll be properties that are promises that you'll also wrap in create async. And it'll just chain down where you get them. What's kind of cool though, is because we use cache functions, you won't have to use context to get them down, you'll just fetch the same thing further in the tree, and it will match on the client side cache function. And basically means that instead of context, you will use that as a way of pulling out the queries and the nested queries that you want.
[02:06:34] Maybe I have to show this for you to understand, but like...
[02:06:39] this whole function, if this was in the cache function,  get user friends ID search,
[02:06:45] You could call it
[02:06:48] At the root of your tree, you could call it in your components, you can call it way down,  and then use the part of the data you want, and you don't have to worry about it
[02:06:56] refetching because the cash will dedupe it on the client side.
[02:07:00] So like essentially you can just call the same cache function multiple places and then just grab the data off the portion of it that you want.  And so without context, you have the complete way, like you don't have to pass it through your tree.  So it's kind of like.
[02:07:15] As I said, it's a lot like GraphQL with fragments, except you're not...
[02:07:19] like prop drilling at all.
[02:07:23] And you have complete control over the invalidation on a per key level based on your cache functions.
[02:07:27] Anyway, I feel like I need examples to actually show this because I sound like I'm all fancy. I just wanted to point out like
[02:07:33] completely doable without server functions. Not to say that people can't cause
[02:07:38] waterfalls with a model where you're locally data fetching. I'm just saying like
[02:07:43] -
[02:07:44] you can also create something with the most optimal performance profile with this approach.
[02:07:50] Um...
[02:07:51] you know, client waterfalls,
[02:07:53] aren't a problem if you're aware of them.
[02:07:59] Thank you.
[02:08:04] Yes, it's basically React query across the network, except we have a lot more powerful serialization in the way that we can stream our responses back.
[02:08:13] Like if you saw my last stream, there's an example that I have on here.  I'll show it very briefly here just for context, because I think it's important for people to kind of understand.  Was it the notes demo?
[02:08:27] Yeah, I've updated some stuff. I'm hoping this is all still in the right place. Let's look here.
[02:08:33] Thank you.
[02:08:33] Okay.
[02:08:34] Yeah, this one, right?
[02:08:38] In this demo...
[02:08:42] Just load the pages, no data loading here, right?
[02:08:44] If I go in here,
[02:08:46] Now I need to fetch the data for this section of the page.  If I go and edit this hello,
[02:08:51] add some stuff to it, I press on what you can see is going to see a single post request and that post request returns a response where it includes the data that it needs for the next page. So even though we did the redirect in the client, it actually posted and fetch the data for the next page all in a single flight, very similar to RSCs, we're just rendering the data instead. But the thing is, is all key based the notes, null, which means no search query notes, preview zero. So we have the power to control exactly what keys we we fetch on the client for the next page we go to.
[02:09:21] And there's some smart heuristics which actually determine what's already shown on the page.  It diffs the URL of the current route versus the next route to know which data also doesn't need to be fetched in these cases where we're being granular.  Our default is refetch everything, like most systems, but you have complete control as a key-based system.
[02:09:39] with this. So there's no even mutation waterfall in this scenario and it's completely granular.  This is the kind of thinking that I'm talking about.
[02:09:52] Thank you.
[02:09:56] Yeah, I mean cache, yeah, you should be able to nest cache inside a function because
[02:10:01] I mean,
[02:10:03] We serialize at the outermost, but there's a basically because it's just a cache on the server.  So like when you're doing a request on the server, it just means that it won't if it hits that same cache function more than once during this lifetime of the cache or the request, it will only it won't calculate it again.  It will actually just return the previously cached results.  So...
[02:10:23] Yeah, you can nest CAFT functions too, yeah.
[02:10:28] Right.
[02:10:29] Yes, I think with RFCs, there's a sweet spot for websites. Blogs that you can go full RFC with caching using route invalid apps. A lot of client posts need to use React query to RFC to control the re-rendering granularity. Exactly.
[02:10:40] I came to the same conclusion, which is why I was just like...
[02:10:44] I'm no offense to anyone. I actually mostly care about the second category.
[02:10:49] You know, people can build websites lots of different ways.  You don't need this.  But I wanted to see if we can make
[02:10:56] the ultimate React query TRPC combination, essentially.
[02:11:00] Right? That's what...
[02:11:02] like,
[02:11:03] what we did here. I think there's still room for server components in general, but I just realized that going to server components wouldn't actually solve this problem.
[02:11:11] Right?
[02:11:17] Is Solid Start or just Solid with Solid Router?  This is Solid Start.  Solid Router...
[02:11:24] can't do single flight because it needs server functions to do single flight. So it needs solid start, but all the APIs are the same. If you took a solid app that used solid router and then stuck in to start and then add a server functions, you'd have this functionality. It doesn't even have to be tied to server functions. It's just I've implemented the protocol there.
[02:11:43] Yeah.
[02:11:44] Exactly. I agree.
[02:11:47] That's kind of the whole point of what I'm saying here.  That's why I did this post in the first place, because...
[02:11:54] that's,  it's,  it's,
[02:11:56] Thank you.
[02:11:57] Unless you're not talking about server functions, you're just talking about putting it inside the component. In our community, server functions and server actions,
[02:12:06] are slightly different things, but they're on the same category.  So I call server functions what React people call server actions, generally speaking.  So...
[02:12:15] Yeah.
[02:12:17] Right.  So like...
[02:12:19] And being able to just like, if I open this notes example, for example, here with notes, what you're going to just see here in the...
[02:12:30] Wow.
[02:12:31] notes example, is that
[02:12:34] on a given page, like the edit page or whatever, we're just
[02:12:38] calling Git note and Git note, if I go here, and this API is just, these are just a bunch of server functions.
[02:12:46] Right. You just write your logic right in there.  But yeah, I think what you're talking about is just being able to do a database at the top level in your component seems nice.
[02:12:54] Right. You can reduce having extra wrapper.
[02:12:58] However, async await comes with consequences, right? Like, which, you know, it's basically waterfall inducing.
[02:13:09] It does. Yeah, there was a great article from Matt Cain actually this week about doing it with Remix.  And I was just like so stoked that like the exact same patterns would work with Remixes and start, you know, like just perfect granular kind of thing.  The difference with what we do in the router here is it's reactive granular here.  Like this is it's I'm kind of leveraging the fact that there's client state so we can choose to not even fetch things, like not even go to the server for certain things where, you know, a cache based system will try and then return the cache values.
[02:13:39] Subtle difference. Usually cache based system means you don't need as much JavaScript code, but I'm not too worried about the JavaScript code we have here. It's not a ton anyway.
[02:13:48] Anyway.
[02:13:50] Thank you.
[02:13:50] Diverting a bit, I just wanted to kind of help
[02:13:53] .
[02:13:54] people picture like in a sense,
[02:13:57] GraphQL with Relay solved a lot of these problems, and that's why I did a previous stream about that.
[02:14:03] Now with the DX we have with U server and these kind of things, it's kind of incredible...
[02:14:09] We can actually
[02:14:11] do things like that  and it feels way lighter and way easier.  TRPZ already showed us, this is like just  the next step of that, right?  It's essentially,  you know,
[02:14:22] compile or bundler based TRPC. I know
[02:14:25] I've been saying that for a little while now, and it just came out in a recent React blog where they said basically the same thing.
[02:14:33] I was actually kind of happy to see that formalization because it's very similar to what I've been saying on the streams.  When cervical phones first came out, I was like, you guys, it's Astro, right?
[02:14:43] It wasn't, but it was enough to get the idea across.  I'm glad they formalized it.  I wasn't sure they were going to because they seem to not want to mention other projects.  One of the hardest things is when you create a solution that's so unique and powerful,  you don't want to necessarily compare it to ones that don't quite do the same thing.
[02:14:57] or achieve the same thing. I'm glad that they've changed because it makes it
[02:15:01] way easier for people to understand what's going on.
[02:15:04] But it did take them acknowledging stuff like PRPC and Astro existed. So that's big of them.
[02:15:13] Does this work with islands? Well, the single flight works with islands
[02:15:19] in the sense that it would work as it would for client-side mutations, if that's what you're asking.
[02:15:23] Right. Like this example,
[02:15:26] works with SSR auth.
[02:15:29] I can turn SSR off on this, and it'll still be single-flight mutations.  We don't have to server render the page to get server data flows like this.  We just go SSR false, and it should still work.  I have to actually...
[02:15:43] Will we get single flight mutations with SSR off?
[02:15:47] Probably not, because it won't render the app on the server.
[02:15:52] But it will still, yeah, that's actually a good question.  Should we double check that right now?  Just for fun.
[02:15:57] Why not?
[02:16:00] Thank you.
[02:16:01] My gut is that you won't.  The app will work with SSR off,  but it won't get the single flight  because it can't render the...
[02:16:11] the next page is what I'm thinking. Um,
[02:16:16] Not start demo, what's the other one? Sorry.  I know this is a slight tangent, I'm way too curious about this right now.
[02:16:23] Let's go...
[02:16:29] bconfig
[02:16:31] Dart.
[02:16:35] SSR falls. So this is like spa mode in remix or whatever, you know, people like the
[02:16:40] doing this. Let's go, let's do dev.
[02:16:45] My gut is that the app works,  but the single flight mutations don't  because it can't send them back into it  because it's not server rendered, right?  So app loads the data on the client this time.  We,
[02:16:57] Edit.
[02:16:58] Oh.
[02:16:59] That's a weird hot reload thing. I wonder if it's gonna... yeah, it's not gonna do that again.  I have some problems sometimes when the dev server starts up. That's weird.  Anyways, if I remove a bunch of these and I press done,
[02:17:10] Oh.
[02:17:11] Nevermind, yeah, single flight rotation in CSR mode. Huh.
[02:17:15] Why does it? Oh, it's because I don't use the handler. I render the app directly. Yeah. So yeah, single flight mutations work in SSR mode. Yeah.
[02:17:26] Can you do something with subscriptions? They're not web sockets. You could keep a long lasting request open and keep on streaming the data in.
[02:17:35] But, I mean, we've done server-side events using the URL of them.  Yeah, I guess so. Interesting.
[02:17:42] Yeah, you're right. I forgot to turn SSR off on the whole demo and it was working. So yeah, I guess we're fine.
[02:17:51] We're discussing whether or not you can do server codes in QUIC. Do you think you'll implement server codes as a solid
[02:17:58] Probably still. I'm just, there's so many things that you could prioritize above it. And I initially prioritize server components above resumability because honestly, the
[02:18:09] architectural considerations like the waterfall prevention on navigation, all that matters more than hydration cost.
[02:18:16] You know, I mean, I understand that if you have an e-commerce site and you need to get the fastest load speed, you care about hydration costs more.  But like.
[02:18:24] And
[02:18:25] Also, you could probably use simpler tools.
[02:18:28] You know what I mean?
[02:18:29] But like...
[02:18:31] I think there's still, there's definitely room for RSCs.  The problem is you have to solve the data serialization problem.
[02:18:38] Quick might actually have a leg up there because they don't do out-of-order streaming yet.  Out-of-order streaming is actually what complicates everything, honestly.  They also might go for a more...
[02:18:46] container based or like more boxed off version but I think it's really I if you want that smooth DX you got to make it really integrated.
[02:18:57] Yeah. So, yeah, anyway.
[02:19:02] Yeah.
[02:19:02] So,
[02:19:05] Yeah.
[02:19:06] I care. Yeah, every solution that I built with SolidWorks on pure client side render spa mode.
[02:19:11] And then use server augments it.  It's a very nice...
[02:19:15] thing, but we're kind of diverting a bit from the point, which was that,
[02:19:19] Um,
[02:19:21] I wanted to show that
[02:19:22] You know,
[02:19:24] Yeah.
[02:19:25] There's ways to address waterfalls...
[02:19:29] when you architect things, you know, a certain way.  And it doesn't have to be a painful architecture.
[02:19:35] Obviously some problems are trickier than others, but other, you know, adding a load function to your route is like
[02:19:42] you know, ta-da, you know, this wasn't, wasn't terribly hard. Um, you know,
[02:19:48] This is a solid loader, solid router.  If we have solid hand stack router, you could just have a different route config.  It's completely pluggable, but
[02:19:59] Like,
[02:20:00] essentially...
[02:20:02] this sort of
[02:20:03] like these patterns, the DX of server functions, all the stuff that's nice that made Guillermo want to
[02:20:09] post that tweet equally apply.  Cause I'm pretty sure if I look at this tweet here,
[02:20:16] Ryan Florence will have...
[02:20:19] Also,
[02:20:21] Oh, there we go. Ryan Florence,
[02:20:23] also has a version with...
[02:20:28] with this right so he's got an action
[02:20:32] Where's the loaders?
[02:20:33] What did he say? "Remix homepage initial code sample from three years ago. Never seems a bit inaccurate. Glad these guys caught up. The RPC bit from Solid Start is pretty cool."
[02:20:42] Well, thanks, Brian, for giving the nod our way.
[02:20:46] We definitely had server functions before Next.
[02:20:51] That's that's very kind of him.  But yeah, I mean, I'm not surprised.  These patterns have been around
[02:20:57] for a while in a sense
[02:21:00] Yes.
[02:21:01] Yeah, I mean especially the actions since remix added them this is this is
[02:21:07] This is very much...
[02:21:09] you know, the DX of almost every JavaScript framework, modern meta framework these days. So,
[02:21:17] You know.
[02:21:18] If you go and ask Ryan Florence if they solve waterfalls, he'll probably say, yeah, I mean, this is why we do what we do.  So...
[02:21:24] It's fine that you can do stuff the RSC way. It's fine you can do stuff
[02:21:29] the other way. They aren't the same thing.
[02:21:33] So,
[02:21:34] While
[02:21:36] solutions that are smaller than React, solutions that are faster than React, solutions that
[02:21:42] you know,
[02:21:43] do less work than React exist,
[02:21:47] and combined with some of these other non-RSC solutions.
[02:21:52] you know, like I've talked about, doesn't, you know, mean that ReactRCs aren't a good option.  It just means that there's other ways to accomplish a lot of the same goals, but not all the goals have to be the same.
[02:22:04] And that's okay. You don't need to read a file in the middle of a component.
[02:22:09] Honestly, that seems really odd to me.
[02:22:12] Thank you.
[02:22:16] you
[02:22:19] Yeah, I mean, it just went down to my priority scale. Once I realized that I wasn't doing any favors for people making apps, I was like, okay, let's just call a solid start. We're like ready to go, right? We're very close. Let's just...
[02:22:33] Let's just push this out the door and not worry about server components being there today and let's just like...
[02:22:39] Let's get onto the next thing.  Let's get 2.0 going.
[02:22:47] Yeah, I mean, exactly.  Ember router, like...
[02:22:51] That was always my huge influence, and these guys as well.
[02:22:57] Yeah.
[02:23:05] So yeah, I mean, it's tricky.
[02:23:10] There's so many places. I honestly, getting the right async model is the most critical thing that I can think of. And I feel I need a solid start out. Otherwise, I would have all been over solid 2.0.
[02:23:22] Bye now.
[02:23:26] Yeah, there's something really weird where React routers started in the right place  and then they got lost a few years, but Ryan has done the full circle  and as I said, Remix is a great
[02:23:38] Great framework.
[02:23:39] Um...
[02:23:44] Yeah. It's just so funny because it was only in React that it got lost. If you go to Sapper, you go to Vue, you go to Solid the whole time. Like, we were all using loader-esque patterns.
[02:23:56] But on the other hand, people don't give Remix enough credit for...
[02:23:59] the action
[02:24:01] and especially the optimistic update thing.
[02:24:05] These are things that did not exist. We were all copying Ember for like a decade other than like, you know, most a large chunk of the React ecosystem.
[02:24:15] you know, between router after version 3.
[02:24:19] but
[02:24:21] when Remix came back, the changes they made are just as impactful as when the Ember team originally did.
[02:24:27] Yeah.
[02:24:31] Anyway.
[02:24:33] Thank you.
[02:24:34] Thank you.
[02:24:35] Thank you.
[02:24:37] I think that's all I wanted to say about
[02:24:40] waterfalls.
[02:24:44] Surf functions in tan stack are pretty dope. See, show me the image. No, come back.
[02:24:53] No, it's going to be gone.
[02:24:54] Mm-hmm.
[02:24:55] uh
[02:24:56] Give me something else to talk about.
[02:24:59] Come on Twitter, don't die on me.
[02:25:02] *sigh*
[02:25:03] Uh...
[02:25:04] Anyway.
[02:25:06] Thank you.
[02:25:07] To be fair, I still got more to talk about. I think the next topic we're going to talk about is, yeah, let's just do it. Are server components actually composable?
[02:25:17] Thank you.
[02:25:19] Yeah, we're trailing on docks terribly, but I'm happy with all the patterns. I think we have the right balance of stuff.
[02:25:31] Yeah, I just gotta go to Tanner's Twitter. You're right.
[02:25:33] Benton, let me see here.
[02:25:36] It looks like...
[02:25:37] Tanner Lensley.
[02:25:45] Thank you.
[02:25:51] Thank you.
[02:25:52] Oh, he added a not found.
[02:25:55] That's cool.  Otherwise, they're very similar to what we're doing.
[02:25:58] Yeah.
[02:26:00] Yeah, adding the meta tags is something I want to add to our router. This is
[02:26:04] Another topic, though, I guess this is the thing, but you know what's cool about solid start is I don't care if I add a feature to the router and it lets you use
[02:26:10] the router into the solid meta.
[02:26:12] Like that doesn't actually affect SolidStart. You choose the router, you choose the meta library. We might update some templates, but it actually, it's not like a breaking change to SolidStart.
[02:26:24] Thank you.
[02:26:25] Yeah, let me see which tweet this one is.
[02:26:33] Thank you.
[02:26:34] Okay, yeah, this is the one from start with HMX and you want to ability at Cosa Triastro then templates. Yeah, exactly. I think this is a good. It's kind of like the thinking, like the progression of things is pretty fair.
[02:26:49] Um,
[02:26:54] Yeah, no, that's fair. I was thinking you're thinking of a different Dan tweet, but that is a good one.
[02:27:01] Thank you.
[02:27:06] Yeah, I know I'm still catching up on chat, but I really, like...
[02:27:16] I don't need it. I can understand why it's like easier. You're just like, my data is right there. I read it, but it's like
[02:27:21] It's...
[02:27:22] like seeing that async await in the component,
[02:27:24] and this is a DX thing, everyone has their own thing  the await is just like
[02:27:28] It's just not the way that I view the world.
[02:27:31] Like when I think of components and stuff,
[02:27:34] I'm going to wait smack in the middle of it is like just...
[02:27:37] the most
[02:27:38] foreign thing that I could imagine.
[02:27:42] Anyway, it's like saying, like, don't be declarative.  Don't be reactive.  Don't update.  Don't, you know, it's like, stop.
[02:27:52] Hammer time, no. I mean, it's just...
[02:27:56] Ugh.
[02:27:58] I don't know. That's just me, though.
[02:28:01] Okay, let's move on.
[02:28:06] Thank you.
[02:28:09] So, yeah, let me continue my discussion here.  We talked about how server waterfalls are real.  I think we should...
[02:28:17] I couldn't go there. A UI tree is a merge tree.
[02:28:20] And what I put here is like, after all, that's a big win in React.  No separation of concerns, but it means that when part of it loads an update, you end up re-rendering the whole thing.  If you have five data sources to render a page, you'll load all five of those data sources to realize that few.
[02:28:32] In the browser, we don't think about this as much as components.
[02:28:37] also give us node level granularity, like per component. You can start this process from any component of the tree, and you might not need to refresh the data as it's in a store or context or something above.
[02:28:46] But server components are a single tree, with the exception maybe around nested routing, which can have a couple trees.
[02:28:53] But for any of those page sections, you're in one tree. So any mutation, navigation, you need to do the whole thing.
[02:28:58] It's one of its strengths.  It's single flight, but it ensures everything is there.  But it's also...
[02:29:02] has consequences through your data, right?
[02:29:05] You're going to rely a lot on server caches.
[02:29:07] D-duping is something that React can provide, you know, we talked about n+1. But what does it have to do with composability?
[02:29:14] Right.
[02:29:18] Right? So like, I actually didn't finish why the waterfall thing is important for composability. Reusable server components would need to participate in a cache system. It would need to know that you're using Vercel's blob storage or Netlify's
[02:29:32] blob storage or KV from Cloudflare. Otherwise it would be reusable. You could also
[02:29:37] you know,
[02:29:38] So you need a way of getting the cash...
[02:29:41] into the RSCs, right? Because if someone made a third party RSC, are they going to be aware of your caching mechanism? Now you can use something like context from React. So,
[02:29:53] you know, in theory, there should be a way to inject that cache, right?  You could also not participate in the cache mechanism.
[02:30:00] but you couldn't wrap your calls inside server components with it.
[02:30:05] Right.
[02:30:07] And what I was going to point out here, it's interesting.  If you were just exporting functions that did the data fetching without server component considerations,  the end user could always wrap the stuff in the cache choice box.
[02:30:17] like the caching of their choice.
[02:30:19] But since server components abstract the call site, you need other ways to inject it. So I don't know. Does anyone know if React provides a cache API for injecting caches into third party server components?
[02:30:33] But I think that affects composability. What I wanted to say about server waterfalls is, so it's clear that server waterfalls are real, but does that impact composition? Well, not necessarily. You can export preload functions from all your components and people can choose to use them or not. You could do this without RSCs as well. The one thing you wouldn't do without RSCs is not export those preload functions, but you could do that here, but should you?
[02:30:55] Right.
[02:30:56] What I'm basically suggesting is
[02:30:59] You kind of pushed, if you're making a third-party library, server component thing that does data fetching,  kind of pushed into making these preload functions so that the consumer can...
[02:31:10] can consume them. And you're kind of also pushed into figuring out you need a way of injecting the cash, otherwise you can't participate. Like you can't just
[02:31:20] Even if you export the function...
[02:31:24] if the person wrapped it in a cache, you couldn't call that from inside your server function.
[02:31:32] Right. So yeah, there might be. I imagine that there's got to be a way to interject your own custom cache into RSCs if it doesn't exist. Like right now we use next, but you know what I mean? Like
[02:31:45] There's going to be more than just next. You can't just like write your library and be like first cell cache in your code.
[02:31:51] Can you? Or maybe you can.  I'm just I'm just I think I think it's important to consider that because the trees merged, because you need the caches, you actually your source of data needs to be aware of the caching mechanism.  I don't know if that helps.
[02:32:07] um making them composable okay
[02:32:11] How about
[02:32:14] Well, as I said, making preloads as best practice is good, but what I was getting at is that's one of the arguments against server components being composable.
[02:32:24] I think.
[02:32:25] right? I'm saying you're probably going to do that. I think that's a good best practice, but
[02:32:29] You know, they use that to say that's why, you know, it's less composable.
[02:32:34] I don't think it is.
[02:32:36] And if they start pushing along that line, then
[02:32:39] then like, I guess we're good.  We can say that, you know, using a route level loading  doesn't actually help hurt with composition.
[02:32:47] Perhaps.
[02:32:49] Okay, let's keep on going.
[02:32:51] Platform details always leak. As much as you're trying to standardize things like Winter CG, every platform is different.
[02:32:57] It comes right down to the difference between how we handle core request and response.
[02:33:01] How do you set headers, status codes?
[02:33:03] You know?
[02:33:05] To be fair, we can choose a standard like Web Request Response Objects to model our APIs, and if that was built into React, one could leverage it.  Imagine we'll see more work in this direction as it benefits every React user.
[02:33:16] But there's always differences in these platforms, and even differences between frameworks.
[02:33:20] And I feel like this and what I just mentioned is why services like Clerk...
[02:33:25] will create components per meta-framework instead of a single React one.
[02:33:29] Right. I could picture the challenges that would come from a framework platform combination, like essentially clerks like, OK, I have a next
[02:33:37] App.
[02:33:38] Router, I'm next page router, page router version of our plugin. We need a remix one and remix RSC one. And then maybe Gatsby has one like they're no like think of how many combinations of different ones. I mean,
[02:33:54] I don't know if I have anyone who works or worked at clerk in the chat right now, but
[02:34:01] I'm not describing a fictional situation, am I?
[02:34:07] Like...
[02:34:11] Thank you.
[02:34:12] Like...
[02:34:13] It, it, it.
[02:34:14] Thank you.
[02:34:15] This is something that you have to be aware of, right?
[02:34:19] I'm
[02:34:26] Yeah.  I...
[02:34:30] I'm just kind of pointing out there. I know because I actually talked to the CEO or CTO way back and we were almost a year ago because he was wondering if we would support server components when solid and how that could approach it. And he's trying to think if it could perhaps save the different types of adapters. And I'm like...
[02:34:52] even if we all had server components we're all going to have different things right so
[02:34:57] Composability here is...
[02:35:00] challenging
[02:35:01] From like an NPM standpoint, at least.  Okay, let's keep on going.  Dataflow is a two-way street.
[02:35:06] Mutations are a natural part of
[02:35:09] Actually, did I finish this one? Yeah. "Picture towns that have come with firm employment. This is a new problem. RCs introduce, but it isn't one we are quite solving yet, if ever." Okay. I'm saying like, it's already that way today, honestly, before RCs. Like, but so it's not like they're introducing a new problem. I'm just saying like, they also don't solve this from a composition standpoint. Okay. "Data flow is a two-way street. Mutation is a natural part of any system. So how do we do this to serve components?" Well, there's two pieces.
[02:35:32] right? We need to navigate to the next page or reload the current one and we need a way to invalidate any caches. This means that mutations are generally
[02:35:40] and
[02:35:41] router aware and possibly cache aware.  You might import a redirect from next navigation  or revalidate tag from next cache.
[02:35:50] Again, this could be generalized through some React mechanism, but like these are very specific
[02:35:56] APIs coming in from from next.
[02:36:00] So if you tried to make your reusable server action, I think there'd be
[02:36:05] some challenges. I mean, I don't think it's a problem too much because I think mutations in general aren't very composable. You can't tell the app where to navigate without knowing
[02:36:14] where your reusable component's gonna be used.  You might not know all the data that's needed  to be invalidated as,
[02:36:20] the reusable component author. There might be, you know, when you perform some action, you might need to
[02:36:24] you know, do something else. So it's actually quite reasonable that the mutation APIs aren't wrapped themselves, you know, and that people, again,
[02:36:32] Exposive function.
[02:36:34] that does the mutation and allows the end user to decide the caching random behavior.  Do you see the common trend between all of these points, what I'm getting at?
[02:36:44] *sniff*
[02:36:45] like in almost every single case
[02:36:48] you're better off exporting a function without the specific
[02:36:54] Nesses of these because everyone has different solutions if you if you wanted to make a truly reusable solution here  so my conclusion here is if
[02:37:07] Thank you.
[02:37:08] Isn't that say that server components aren't a good solution, even if I question the overall composability?
[02:37:14] I went on Twitter a while ago.
[02:37:17] asking for good examples of server component libraries, because I was trying to picture this like what they look like on NPM.
[02:37:26] In every case, I went through dozens of them.  The person could have just exposed a function for data loading.  It would have actually been like way simpler on them to maintain.  They made server
[02:37:36] component versions of them. But the real gain I thought was like the way they organized the API with the expectation that they'd have server actions. But even then,
[02:37:46] Thank you.
[02:37:48] As I said, being aware of the specific router and cache implementations kind of got in the way of that.
[02:37:54] So I think the real win in terms of composability
[02:37:58] is probably in the shared components.
[02:38:00] We don't talk about them much, right?
[02:38:02] The fact that you can author a component which can be used in the server or client side, that they inherit the characteristics of the parents.
[02:38:07] Unless people are shipping pre-made template layouts,
[02:38:11] Um,
[02:38:12] This is probably something that will stay within teams rather than an MPMM.
[02:38:16] But that's okay, right?  Like, we don't need a bunch of server component libraries on NPM, right?
[02:38:21] Um,
[02:38:22] The composability value is like when a team goes, okay, this is our design system. This is our templates. These are our layouts and they can just like
[02:38:31] build them out in a way that can fit on client or server without having to think too much about it.
[02:38:36] Right?  You just put it in.  I think that's where the win kind of comes in.  Because...
[02:38:41] you know, server fonts aren't supposed to solve everything, but give us a different way to express the solution.
[02:38:47] And I think with careful consideration, like any approach, you can build great solutions.  That's kind of where I'm sitting at.  I think...
[02:38:56] that even if
[02:38:58] aspects of it are
[02:38:59] kind of like decently composably local.
[02:39:02] You actually, it doesn't make good for packaging up libraries. There's too many specifics. You're basically building a framework, not a library here. You know, like there's two, you need all the pieces working together.
[02:39:16] Anyway.
[02:39:18] Thank you.
[02:39:18] I'm not sure if this makes sense to everyone,  but this is,  this is my argument to kind of,  I keep on hearing like,  are they certain ones are so composable.  And I,  I,
[02:39:30] Yeah, I don't know. I guess I maybe I have a different meaning of composable like I I do agree that they can make it really easy to like I
[02:39:37] to construct.
[02:39:39] chains of data fetching and
[02:39:41] you know, server side waterfalls from that.
[02:39:44] But like...
[02:39:47] - -
[02:39:48] It's hard for me to picture them being shipped as an NPM package, I guess.
[02:39:58] Someone's probably in the chat and you'd be like, look, I got this perfect example of where server components are.
[02:40:05] I feel like the benefit is like, as I said, layouts, templates.
[02:40:10] Anyway.
[02:40:12] *sniff*
[02:40:14] Thank you.
[02:40:17] The argument that I often make is more, make things more unclear the actual boundary between server and climate come and that historically leads to complexity in my experience, right? And makes it harder to like,
[02:40:26] like actually bundle them out.
[02:40:29] Oh, perhaps.
[02:40:30] Yeah, maybe these things are at odds. I think the more composable you design it, the harder it is to actually ship it.
[02:40:37] That's interesting.
[02:40:39] Anyway...
[02:40:42] I think we should just probably switch gears to this week in JavaScript at this point.
[02:40:48] Um...
[02:40:49] I covered all I wanted to do with waterfalls. I covered all I wanted to do with this question of React Server Clones being
[02:40:58] being composable.
[02:41:01] Can you link this article?  Yeah, I was thinking of actually publishing it.
[02:41:04] at some point
[02:41:05] Um...
[02:41:07] But you know what? I probably not.
[02:41:10] I probably, I probably not.  Let's just post it in here.  I don't care.  I'm probably not going to.  I don't, I know I'm on stream saying this stuff, but I don't,
[02:41:21] I wrote it and I wanted to clarify my points, but I also didn't want to push it
[02:41:26] I...
[02:41:27] I wanted it for kind of a niche audience to kind of think through these problems. I have no reason or desire to
[02:41:34] talk badly about it, about React, generally speaking.
[02:41:38] And like,
[02:41:40] It's kind of like...
[02:41:42] Thank you.
[02:41:44] I only ended up writing this because I was like, we're getting all this flack, you know, about the waterfalls and the client and, you know, like, React server cones and composable.  And I'm just like, no, you know, let me think through this.  But then once I wrote it, I was like, this sounds like, like, if I wrote this as a bunch of Twitter threads, it'd sound like I was out to get React something, you know, like a...
[02:42:05] I just didn't, it just didn't, it didn't feel right to me, you know, like I could come at  it from a purely academic standpoint and talk about it and like do like a 12,000.
[02:42:17] tweet post-thread about it.  You know, I think Dan actually did something similar to that  when he was explaining
[02:42:25] Okay.
[02:42:27] Okay.
[02:42:28] Um,
[02:42:29] Explo explaining.
[02:42:32] you know, how these things kind of go, but
[02:42:35] My biggest concern is like, even if I try because of my own biases, I don't,
[02:42:40] I might not come off completely as fair like I just saw that comment about the async await thing. Yeah, I mean this is a true fact  but also
[02:42:49] Like...
[02:42:51] there's ways to solve that.  You can just hoist the data fetching up, you know,  pass it through a child projection, like the same tricks you use to avoid use memo.
[02:43:00] or React memo in React would also apply to this data fetching hierarchy thing.
[02:43:05] It's not as powerful as being fine grained, but it works perfectly fine and
[02:43:10] You know, people have been optimizing React without using React.memo for ages. So like,
[02:43:17] React developers know how to do that.
[02:43:22] Thank you.
[02:43:23] Amen.
[02:43:28] Thank you.
[02:43:41] Yeah.
[02:43:45] Do I have any thoughts on these?
[02:43:49] I...
[02:43:50] I...
[02:43:51] People like them for various reasons when I see most of these patterns. I mean render props are
[02:43:58] important
[02:43:59] like the ability to inject state.  But like, as child slots,  I would love if those are avoidable.  I understand why.  Like, same reason I don't like style components.  I'd rather have less components,  more pure markup if possible.  I think components...
[02:44:15] Like, I understand we need it for design systems and stuff, but like, it's...
[02:44:20] components are always kind of like a bit of an overhead and like all the weird like
[02:44:24] Typing and dynamicism would be better if we could somehow avoid it. This is I think a lot of problems. I talked about last week  Start with the stuff like routers like corp things like anchors and links and
[02:44:36] are
[02:44:36] library specific and suddenly now you need to like do something special about it right i know  other places are like button versus link considerations and stuff but i mean it's the  same it's i wonder how much of this goes away if we could just use normal anchors um as our router  mechanism
[02:44:53] I'm... Render props are important.  They are a different case because they're important for...
[02:44:59] like our for component uses render props in a sense, right? They're important for being able to inject
[02:45:05] um...
[02:45:07] you know, particular state, but yeah, I'm not a big fan of slots or most of,  most of these patterns, generally speaking. I like that props are,
[02:45:17] props and you can just stick them through, you know, props, children, props, whatever,  and they just insert. It's really nice. Yeah.
[02:45:29] Thank you.
[02:45:30] Thank you.
[02:45:32] Thank you.
[02:45:34] Yeah. See, I, I figure someone probably has, has more expertise on this. Um,
[02:45:42] I just I would love if it wasn't necessary.
[02:45:47] Right.
[02:45:48] I
[02:45:49] Yeah, that's...
[02:45:52] Slots are to me are just like another mechanism on top of something that we already have with props. With cool book props you just have an object and then you're done, right? You don't, you don't need to do anything special. There are some properties of slots that are nice.
[02:46:05] But yeah.
[02:46:09] Mm-hmm.
[02:46:14] I also like render props 'cause they're kinda explicit.  Like, can you picture, like I used to use Knockout,  and there was these like hidden variables,  like when you did a loop,
[02:46:23] You'd have like dollar sign...
[02:46:25] parent and like dollar sign item and all these like hidden variables that would just exist in that scope. Um,
[02:46:34] where render props are like, look, I am injecting this, these variables in that scope.
[02:46:45] *sniff*
[02:46:46] Right.
[02:46:48] Anyway, let's see if I can get this week in JavaScript good setup.
[02:46:56] Poor English me.
[02:47:00] All right.
[02:47:03] Yeah, I'm not showing the screen on purpose.
[02:47:06] Just give me a second, I will get this all going.
[02:47:18] Thank you.
[02:47:24] The thing is about slots is like you're, you're also adding something that would
[02:47:31] Not.
[02:47:32] be there anyway. Like, while I prefer going towards like the native thing, like,
[02:47:38] Yeah.
[02:47:39] it's because of the way props work and stuff.  It's like you are adding something that isn't necessary.  It,
[02:47:46] Yeah, I guess I'm sold on JSX.
[02:47:52] Mm-mm-mm.
[02:47:54] And then one more.
[02:47:56] Uh-uh.
[02:47:58] Okay.
[02:48:00] Bye.
[02:48:03] Okay, when was the last time I streamed? Oh yeah, okay. Yeah, this is the perfect way to open. I love it.
[02:48:12] I streamed on my birthday, right? Yeah, that was the last time I streamed.
[02:48:18] Okay.
[02:48:23] Sorry, just getting everything queued up.
[02:48:29] I maybe should have started with this. I feel like we're so deep in our specific topic conversations that I might have...
[02:48:43] Alright, alright, alright. I think I'm ready to go.
[02:48:48] Thank you.
[02:48:52] A lot of the slot stuff showed up in APIs like Vue and Svelte because they were actually
[02:48:59] trying to align with web components, especially like Svelte.
[02:49:03] For a long time.
[02:49:05] This is what people don't get about the web component thing is, for a long time, framework authors, other than React, were kind of on board.  They were like, "We want less, minimal. We don't need all these abstractions. Let's build with the platform." You know? Especially on the reactive side.  Like, we thought, I know with Vue too, like, we thought that object.observe would mean we wouldn't need to have our own, like, signal system, right? We could just use reactivity built into the browser.
[02:49:32] When they cut it and when they went into like proxies, you know, we did work there too. But like, this was like the thinking that we had coming in. We just grew more disillusioned over time. It was not because we're out to get web components in the first place.
[02:49:49] Thank you.
[02:49:51] Thank you.
[02:49:56] Thank you.
[02:49:57] "The only benefit slots are name slots, so you have a standard versus randomly naming things in prop slots." Yeah, it's hard for us to know what's a prop ahead of time. The one place that I saw slots are nicer is when I was working on serialization for islands.
[02:50:10] It was a little bit simpler for server components, whatever you choose.
[02:50:17] Thank you.
[02:50:20] So
[02:50:23] But yeah, I mean, it's, that's the thing. It takes someone to have used an Entrana line to write articles like Rich Harris's, like, why I won't use web components and stuff. Like,
[02:50:39] I don't know if you end up with slot APIs otherwise in those DSLs.  Like it's slot APIs are clunky.  I don't know why people don't see it more often.  People always talk about like Vue and Svelte and how nice it is.  But if you try and make like render prop style components in those, it's some of the ugliest DSL that I've.
[02:50:58] ever seen. I guess people don't like make their own control flow in those frameworks that much. But like, I did a whole stream on it, because they're just like, it's funny, like, usually, I don't fixate on on syntax. But it was like one of those things where like, I kept on hearing about how nice the syntax is. And I was like,
[02:51:14] Really? Okay. Like, it's not hard to pull it apart when you get to a certain composition, right? Composition is very important, right?
[02:51:24] Anyway.
[02:51:29] Anyway, let's get started here, alright? Let's go to This Week in JavaScript, for everyone who's still here. And let's get this conversation rolling. Okay.
[02:51:40] Thank you.
[02:51:41] Alright, I'm going to start this week
[02:51:44] to talk about my man Ryan Carnato.
[02:51:47] Um...
[02:51:49] Just public service announcement...
[02:51:53] This guy's been more bought or whatever has been pushing crypto on people. I I
[02:51:58] I'm hoping
[02:52:00] I'm hoping that the account has been blocked now.
[02:52:04] I also put a request in.  A lot of people reported it.
[02:52:08] It's clearly a fake account, but all you have to do is drop an "I" and essentially you're there. So, I mean, let's see here.
[02:52:18] see if he's still around.
[02:52:22] Carnato.
[02:52:29] Okay, good. It's been taken care of.
[02:52:34] I'm sorry.
[02:52:36] Parasocial or JLarky, whatever you prefer.
[02:52:39] Okay.
[02:52:41] Well, there you go. That was my week.
[02:52:46] Thank you.
[02:52:48] It was odd.
[02:52:52] It was definitely odd.
[02:52:58] Bye.
[02:53:02] Yeah.
[02:53:03] Yeah, yeah, exactly. Awesome birthday gift. Um,
[02:53:08] Yeah.
[02:53:09] But yeah, so...
[02:53:12] There you go.
[02:53:14] This Week in JavaScript.
[02:53:16] It was so subtle too, right? It just missed like  Anyway, let's keep on going. Um,
[02:53:25] A couple pieces of solid news to get out of the way.
[02:53:30] Fireproof solid adapter came out.  Great work from the community.  Um...
[02:53:34] Okay.
[02:53:37] Another amazing thing happened.  Apparently Solid Start now appears above Solid Starts, the baby food company.  So, you know, this was a big achievement for all of us.
[02:53:49] -
[02:53:50] Uh...
[02:53:51] Only if you do it as a single word, though.
[02:53:54] If it's a separate word, the baby food still wins.
[02:53:57] So...
[02:53:58] Yeah, we've been waiting a long time for this, right?
[02:54:03] Thank you.
[02:54:03] Oh, what else? This is actually really cool. It's a website builder.
[02:54:09] from Katcha, a member of our community.  He's been working on it for, let me do the translation, for like over a year.  On February 3rd, 2003, I saved the first trip.
[02:54:18] I saved the first step for NitroPage today, 833 steps and 374 days later.  So I'm gathering this as commits.
[02:54:25] And over a year later, the moment has finally come to introduce you to my new free website builder based on Solid.js.
[02:54:31] Very cool.
[02:54:32] I love seeing like different types of applications.
[02:54:36] being built with solid. So...
[02:54:40] Very cool.
[02:54:45] Crying, Garnetta will be the stream's T3.
[02:54:51] Thank you.
[02:54:51] That was actually an actual
[02:54:54] Funny account, though, that was actually...
[02:54:57] to being a parody. This guy was
[02:54:59] It's clearly made by the fans.  I wouldn't have a problem with that.  This guy was clearly trying to spam people.
[02:55:07] Green cryptocurrency.
[02:55:10] Amen.
[02:55:10] Oh.
[02:55:15] Anyways, let's keep on going.  Talked about this.
[02:55:20] I haven't talked about this yet. This is huge.
[02:55:24] Beta docs, new solid docs have dropped. You can see them here.
[02:55:28] New site's built on solid start.
[02:55:30] Um,
[02:55:32] It's nice.
[02:55:33] It's fast.
[02:55:36] Our current Solids app is actually a single page app, like a spa. And our solid start docs are an islands one. And this one is a traditional SSR app. But yeah, this is built with the latest.
[02:55:48] even has updates for the for the router.
[02:55:52] So, yeah, this is coming along quite nicely.  I think...
[02:55:55] They're looking for feedback.
[02:55:57] This is very, very nice.
[02:56:01] Thank you.
[02:56:07] No, I didn't actually know who ran it.
[02:56:11] I must have missed that at some point.
[02:56:13] *sniff*
[02:56:19] Thank you.
[02:56:23] Thank you.
[02:56:25] What's your opinion on Ruby on Rails? Because I see new momentum with this framework because of Hotwire and not write.js you need. And I think jss you need. Yeah, I mean, if you can successfully build your apps or your websites, I should say, rather, with Ruby on Rails, then there's probably no problem to go that direction. It's similar appeal to, you know, people who want to build stuff with HTMLX.
[02:56:47] Um,
[02:56:48] So, yeah, I mean, I don't have much to say about that.  The types of apps that I'm interested in
[02:56:52] I probably wouldn't be building on Rails.
[02:56:55] I did that migration like 15 years ago. It wasn't not fun.
[02:57:01] Actually, I guess it was 14 years ago.  I wouldn't want to do that again.
[02:57:05] But I think people could, if that's not the expectation of the app, I think Ruby on Rails is perfectly fine.
[02:57:10] Thank you.
[02:57:11] Yeah.
[02:57:12] Um...
[02:57:14] Thank you.
[02:57:21] Let's continue.
[02:57:25] Let's continue here. Yeah, anyways, the router is pretty cool.
[02:57:28] Yeah.
[02:57:29] Oh, there was a comment about JS fatigue.
[02:57:32] Yeah.
[02:57:33] I mean...
[02:57:34] Hey.
[02:57:35] You can't have it both ways, either stuff
[02:57:39] advances or it stays stuck  you know
[02:57:43] JS fatigue is just a sign of a healthy ecosystem.
[02:57:47] Oh, mention the poll. Yeah, yeah. I actually don't know anything about the poll.
[02:57:51] Um, I heard about a poll, um,
[02:57:55] But...
[02:57:57] I don't know much about it.  It's probably...
[02:58:07] Huh?
[02:58:12] Thank you.
[02:58:16] The poll is over. Okay. Thank you everyone who participated in this poll. Your feedback will definitely help the future of SolidDocs. Thank you very much.
[02:58:27] Yeah, okay. It's probably just an old link.
[02:58:30] Thank you.
[02:58:33] I
[02:58:35] Typeform has a limit.
[02:58:37] You gotta pay. There you go.
[02:58:42] And then this goes to the next question.  Is there an OSS bundle?
[02:58:45] - Thank you.
[02:58:48] Uh.
[02:58:56] Anyway, yeah, let's...
[02:59:01] I'm not sure.
[02:59:02] That was honestly, I'm amazed at the work here.  Great show, the community.
[02:59:07] Um, the docs have taken on a whole life of their own and they're so vital.
[02:59:11] You know...
[02:59:12] You know that old meme, what it was, a node modules black hole?
[02:59:17] I got to make an updated version of this because like,  I feel like I could take this meme and be like,
[02:59:24] Effort.
[02:59:25] to
[02:59:27] Uh...
[02:59:29] create a JavaScript framework or library.
[02:59:32] Thank you.
[02:59:33] Effort.
[02:59:34] To...
[02:59:37] No, it's not even like that.  It's like effort to win benchmarks with a job.  Write a JavaScript framework that wins benchmarks.  Effort to maintain said framework.
[02:59:50] Um, uh, man, sorry.  This was better in my head.  Anyways, the docs effort is like on a whole other level, um, is what I'm getting at.
[03:00:00] And I'm not saying in a bad way, it just means that like,
[03:00:03] I am incredibly grateful because it feels like the work that I've done is like in this area compared to the effort that it takes to make good docs.
[03:00:12] So maybe I'll come up with a better meme for this later, but yeah.
[03:00:17] Thank you.
[03:00:23] Thank you.
[03:00:24] All right.
[03:00:26] OK, so let's move off solid.  That was good.
[03:00:31] OK.
[03:00:32] So after my stream last week,  I wanted to reiterate some of the points,  and I think they're relevant to this stream, but
[03:00:41] As well.
[03:00:43] So I'll just quickly kind of go over it. The point of the stream last week was that RCs aren't the successor to GraphQL because they aren't capable of the same things. Opting to RCs is opting to something quite different, right down to the infrastructure requirements. It's as stark as MPA versus SPA. Not everyone wants an MPA.
[03:00:59] Forcing it is aggressive when you consider that for those people, they now have a whole other system to contend with.  RSCs don't alleviate the things that you had building client-centric in the first place.  Now it's more convenient just to have...
[03:01:11] both paradigms side by side.
[03:01:14] But that only matters if you wanna do that.  The unfortunate part is while there are clear wins  to a server-centric approach,  there are trade-offs and many of these things
[03:01:22] can also be solved with a client-centric approach.
[03:01:25] But that's not how it's been presented. The result is a misaligned expectation butting up against permissiveness of a seemingly arbitrary boundaries. And this is what we were talking about earlier, right? Like...
[03:01:35] when we're talking about composition, it's not a poor model, just not the best understood.  And it requires a new realm of knowledge.
[03:01:42] that it isn't a replacement.  And by that, I mean, you actually have to be more aware of, like,  how server rendering works in terms of, like, classic server rendering,  caches, et cetera.  Yeah.
[03:01:54] And I'm so like treating it otherwise as a recipe for failure.  I'm not suggesting that any of that's a bad thing.  I just wanted to make it very clear that like,
[03:02:04] Now, because I've switched to RSCs doesn't mean that I...
[03:02:07] don't necessarily need the same kind of client data fetching.  I think people actually understand that relatively well. It just,
[03:02:15] I...
[03:02:16] I'm always looking at threading the needle. I'm always trying to figure out, like I was hoping that I, like it would take off so much pressure off the client side that I wouldn't need these things and
[03:02:26] I'm not convinced currently, but that might change.
[03:02:29] I might just not have enough foresight to see it, but that was the only point of the whole discussion last week.  Kind of similarly related, Ryan Florence Post, I will never get over how little developers care about the user experience they create and how much they care about what their code looks like.
[03:02:45] Uh...
[03:02:46] Wonder where that comment's coming from.
[03:02:51] - To be fair, I was convinced before.  I've done the whole cycle.  Like a lot of people are slowly getting on board  and getting convinced.
[03:03:00] I feel like I've been...
[03:03:03] I'm the other way. I was completely convinced and now I've gone over, I've crossed the other side.
[03:03:09] Which isn't, it's like the, what's the, there's a meme for this one too, right? Like,
[03:03:15] Levels of...
[03:03:20] Like, you know, it's like the curve when you, like, find a new technology and you, like, go in the peaks and then down and then...
[03:03:29] You know what I'm talking about.
[03:03:32] I need to find that meme.  I need it for slides.  It's like the levels of...  When you learn something, you're at a peak and you go down...
[03:03:42] The Gartner hype cycle.
[03:03:44] Yeah, it's not a bell curve. You guys know what I'm talking about, right? Because it goes down in the back up again.
[03:03:50] Is that what it is?
[03:03:51] Good.
[03:03:52] Type cycle.
[03:03:55] Yes, this.
[03:04:02] I'm probably here somewhere right now.
[03:04:13] Thank you.
[03:04:17] If Next.js came with a good client-side data fetching solution, it would have been much  nicer, but it would have led to a lower RRC adoption.
[03:04:27] The thing is,
[03:04:29] I'm looking at how you can possibly...
[03:04:32] unify that essentially. I don't, it's very hard for me to see two different data fetching models.  It makes things, it's like you either want to be permissive or not permissive. Being kind of half  and half is really hard.
[03:04:45] The trial of disillusionment, yeah.
[03:04:51] Thank you.
[03:04:55] Thank you.
[03:04:56] Thank you.
[03:05:00] uh
[03:05:05] Thank you.
[03:05:07] Which comes after the plateau of productivity. Yeah, yeah. There's like something further on the other side. Yeah.
[03:05:14] Well, I went through the effort of recreating server components and then
[03:05:18] trying out the patterns and then yeah that's kind of where I got anyway.
[03:05:24] Thanks. Now I know what this is called. Gartner Hype Cycle.
[03:05:29] Okay.
[03:05:30] Mm-hmm.
[03:05:33] In any case, this shouldn't surprise us.  I think I used to be a little bit critical of Svelte for this reason.
[03:05:43] But Svelte actually delivers a relatively good user experience. I think
[03:05:47] It'd be interesting to know what
[03:05:50] What...
[03:05:51] Mm-hmm.
[03:05:53] what triggered this particular instance, but you think about this often as any kind of library or framework author.
[03:06:06] Anyway.
[03:06:10] Um...
[03:06:15] Yeah, my only point that I didn't actually talk about in terms of
[03:06:19] this thing earlier was, I said...
[03:06:23] Not that I disagree with the simplicity of the RSC model, but understanding RPC is a key to all this. Otherwise, how does someone click? Yeah, yeah. Okay.
[03:06:30] We didn't go all the way down on Guillermo's thread, and I think we should.
[03:06:35] He got to a point here where he goes,  if I had to teach how to recreate this basic app  with the old React, I'd have to teach  how to add APIs, servers or RPC routes,  use effect and use state, external packages  and more concepts, perf would suffer,
[03:06:49] And therein lies the problem.
[03:06:53] Mm-hmm.
[03:06:54] Right.  And he said,
[03:06:55] Um...
[03:06:57] These new patterns don't have to be adopted all at once. You can use client. What do you say here?
[03:07:01] I think a lot of this pushback rightfully is that a lot of us learned and became very proficient in the old way of doing things.  This thread was inspired by Patrick S. Insight that makes a lot more sense from this point of view.
[03:07:09] I just realized the 5D chess move that is RCs.  React is competing with web development, not front-end development.  It's not a framework for me.  It's a framework for all future developers getting into web development.  Yeah.  Yeah.
[03:07:21] - No.
[03:07:22] This is an interesting observation, and it's--
[03:07:24] It's one that we've made on the stream before, actually, which was
[03:07:29] And it's one that I think Dave tried to make a talk about and some React people didn't like it.
[03:07:34] I accuse React of kind of trying to reinvent the browser.
[03:07:39] Um, like, they want to provide an abstraction that basically...
[03:07:45] separates you from
[03:07:47] like how typical HTTP,  HTML works.  They want to control the whole,
[03:07:54] thing. They want to control the routing  mechanism and
[03:07:57] in a sense.
[03:08:00] If you look at it from that perspective,
[03:08:03] Yeah.
[03:08:04] Yeah.
[03:08:05] If you look at it from that perspective, what he's saying kind of makes sense because you could look at the code here and be like, huh, okay.
[03:08:14] get my data, put it in, this use server thing means I can, well, this is where I kind of stumbled on this a bit. I was like,
[03:08:22] Userver is an RPC route so you kind of had to teach people RPCs.
[03:08:27] Okay, you didn't have to teach them to use State of Use Effect, that's true.
[03:08:30] External packages and more concepts
[03:08:33] Well,
[03:08:36] What's this redirect coming from? It's coming from next navigation.
[03:08:42] maybe if that came from react that could be
[03:08:47] Bye.
[03:08:48] Like, don't get me wrong, like the database is something you're obviously going to grab from, but I like,
[03:08:54] *sad*
[03:08:55] More concepts. Well, I think you need to know about RPCs here, right? Because like, if you post a, like, you have to understand, like, from a certain perspective, if you post a form in this model, you have no idea, like what's client or server, right? Like, you're just like, oh, I do the form and it does this thing on the server.
[03:09:11] instead of doing it on the client.
[03:09:13] Kind of can follow that.
[03:09:18] But...
[03:09:19] So like you're thinking kind of like, okay, I use this to generate my HTML.
[03:09:23] And then why do I put use server on this?  Well, because you got to know that this is actually something that's interactive with in the browser conceptually.
[03:09:30] Um...
[03:09:32] But I will say it's probably less concepts.
[03:09:35] Performance with software, well,
[03:09:37] Depends, right?
[03:09:39] We already talked about how this would reload the whole...
[03:09:41] page on
[03:09:43] But then React will diff it.  So, I mean...
[03:09:47] And
[03:09:48] I don't know if performance would necessarily suffer doing it the old React way.
[03:09:53] I mean, it's interesting.
[03:09:55] But this is kind of where I think the thinking is here, because...
[03:10:00] If you pretended like...
[03:10:02] there was no other model API routes or nothing.
[03:10:06] And this wasn't RPC. This was just a way of saying, like, you only render stuff on the server.
[03:10:12] And then...
[03:10:15] things that you stick into the markup
[03:10:20] Yeah, I don't even know.  I think you have to explain RPCs to do use server.  But you could sort of say, teach these basic concepts,  like use server this, and maybe simplify things significantly.  I mean, don't get me wrong.  I think it does simplify.  But the reason I wanted to point out this point
[03:10:38] list was that
[03:10:39] directly
[03:10:41] I think the point here is selling the abstraction, like pretend you didn't understand how things worked. This would be an alternative model of the client server interaction. If React is your browser, so speak, these details might never surface.
[03:10:51] Pretty ambitious, but like that's kind of.
[03:10:54] Yeah, you still have to teach about routing, but like you might not care about server versus client routing.
[03:11:01] Right? Like, you might just think, okay...
[03:11:05] I just go to the next page and then the next page gets rendered on the server.  Right. Like generally speaking, you just like render pages on the server.
[03:11:12] then
[03:11:15] Yeah, the used server is the most out of place thing there.
[03:11:23] CodeTimes are not actually fully honest  because you run into cache gotcha unless you add search params.
[03:11:32] Yeah, yeah, yeah.
[03:11:35] Yeah, I said it was not complete earlier as well. Like, yeah, I mean, that's the whole thing. That's, that's why I didn't take the criticism to our example as well, because like, both examples are incomplete, right?  Yeah.
[03:11:50] "RPC has two apps talking to each other. If you never use client, you can get away with not mentioning the RPC since it's all server."  Well, not really though. Like,
[03:11:58] And I asked this question, I think I asked it in this thread.
[03:12:04] No, maybe not. Maybe I never actually wrote it. How
[03:12:07] Like,
[03:12:08] Do you have do you I get?
[03:12:13] I guess not.
[03:12:15] What you're saying is...
[03:12:17] A form post is a special type of action
[03:12:23] Yeah, okay, fine. What you're saying is a form post is a special type of action
[03:12:28] that goes back to the server and runs this code.
[03:12:33] It's not necessarily RPC, it's just like a...
[03:12:41] Yeah, yeah, I...  Do you annotate it with a used server in...
[03:12:49] PHP though?
[03:12:54] Thank you.
[03:12:56] Thank you.
[03:12:57] I mean, I'm thinking back to my own .NET days.
[03:13:06] .
[03:13:10] The problem here is that we learn to code before learning HTTP, yeah.
[03:13:16] Yeah, so I guess mentally they want you to think MPA. That's essentially what the gist is here.
[03:13:24] The only reason you have to know isn't because I use client.  It's because like there's client side routing, but.
[03:13:29] That's abstracted from you.
[03:13:36] Thank you.
[03:13:38] Maybe I missed the topic, but I'm curious what you'd pick up now for development. I'm the author of SolidJS, so I can't really give you
[03:13:46] an unbiased opinion here.
[03:13:52] Thank you.
[03:13:55] Yeah.
[03:13:59] Uh...
[03:13:59] Yeah, I...
[03:14:01] You're I'll bite then. Basically, all the complexity comes in when when you add use client, because then you suddenly have client state and the persistence of state and then the whole world.
[03:14:10] explodes.
[03:14:11] Okay.
[03:14:12] Fair.
[03:14:15] Thank you.
[03:14:18] Okay. But yeah, I mean, it doesn't change what I'm saying.
[03:14:22] like they're basically they're abstracting the fact that the react like the whole client routing  all that stuff doesn't matter
[03:14:29] because React is like your browser, essentially.
[03:14:32] It's controlling that whole interaction with the URL.
[03:14:36] on the server and the client.
[03:14:39] Thank you.
[03:14:42] Mm-hmm.
[03:14:43] Like picture if someone took this model and then they're like, okay, I'll just put a script tag on the page somewhere that like PHP style.
[03:14:50] I don't know if it would do what they expected.
[03:15:02] Anyway.
[03:15:04] Thank you.
[03:15:05] You can, yeah. I imagine you can.
[03:15:15] But yeah, yeah, I see what you're saying, because it's like...  Like, I've developed a bunch with Marco or Astro-style stuff, and in a sense...
[03:15:24] It's like this.
[03:15:30] Thank you.
[03:15:32] Thank you.
[03:15:33] Not that, but there's no use server, right?
[03:15:37] But.
[03:15:39] Anyway.
[03:15:41] -
[03:15:45] Thank you.
[03:15:52] Yeah, I'm guessing because then you just stick it in the JSX and then
[03:15:58] When it renders on the page, it'll execute
[03:16:02] Hmm, that's interesting.
[03:16:06] Thank you.
[03:16:11] Thank you.
[03:16:14] - We're focusing on the marketing blind spot  for data heavy enterprise style apps.  The RC use case or first load only really.
[03:16:20] But yeah, or content kind of stuff. Yeah. I mean, if I'm an enterprise, I want to be using probably GraphQL. I want a crazy amount of data stuff.
[03:16:32] Honestly, if I'm an enterprise, I want to be...
[03:16:37] Yeah, it's a tricky one.
[03:16:40] I, I, I do.
[03:16:43] I might not like the choices that are available to me these days that are popular.
[03:16:51] Thank you.
[03:16:54] Thank you.
[03:16:59] Yeah, that's an interesting question, something I'm actually curious about.
[03:17:05] Because...
[03:17:07] You know, when...
[03:17:10] They all moved off on-prem about a decade ago.  They started that migration where they had all these,  like their own servers and they moved into...
[03:17:18] like a lot into AWS into like their own kind of like server representations in the cloud.
[03:17:24] Um...
[03:17:25] But
[03:17:26] Thank you.
[03:17:27] They're starting, they started moving to serverless, obviously, lighting the load.  I, I, I'm interested to see how edge plays into that.
[03:17:35] Data requirements and strict...
[03:17:38] policies around data security make it hard to
[03:17:42] To a certain degree, but...
[03:17:44] I don't know.
[03:17:47] I know there's a lot of work, at least on Netlify's side on the enterprise side.
[03:17:54] Thank you.
[03:17:55] A lot of focus.  Anyway, let's keep on going.
[03:18:00] Thank you.
[03:18:03] This was a cool blog post.
[03:18:08] it's kind of like a philosophical thing.  I want to throw this out to people.  He basically talks about like,
[03:18:15] the React mindset, the Solid mindset, and the HTMX mindset.
[03:18:21] I think this is...
[03:18:23] Like, he's basically talking about how we're taking, like, three distinct...
[03:18:28] approaches and
[03:18:34] And essentially...
[03:18:36] are trying to push the...
[03:18:39] further along those lines.
[03:18:41] Right?
[03:18:45] Thank you.
[03:18:47] Yeah, I think I, yeah, this is, this is, I really, I,
[03:18:51] It was...
[03:18:52] Obviously, it's very pro solid in here, but it's also pro HTMX, pro react.  Like it definitely...
[03:18:59] kind of covered the whole
[03:19:02] Um,
[03:19:03] you know, spectrum, right? It's talking about how React, how far components, what can they do with components?
[03:19:08] Arguing RSC is the best understood in the context of the new React architecture, not isolation.
[03:19:12] Right.
[03:19:14] What we have here is not some new kind of
[03:19:16] magic kind of components, but a server client architecture that speaks React on both ends and grants components placed on the server side. Yeah. Um,
[03:19:25] Thank you.
[03:19:28] Thank you.
[03:19:29] Thank you.
[03:19:31] 2024 will be the year when everything finally clicks for the mainstream audience. As I noted earlier blog post, React vs. the World, React has a proud history of challenging contemporary norms and conventions of UI development.
[03:19:42] including the ones that helped popularize winning over the world. Despite all the noise and confusion going on
[03:19:47] Ongoing RSC discourse, React appears confident that it can repeat history again.
[03:19:52] Relax, it's React. Yeah.
[03:19:56] Then what's this? If anyone asked me, I'd say Solid won the JS frontend in 2023, not because it overtook React in usage, not even close, but because the idea won. Pretty much every framework but React implemented signals in some form, and even React adopted the language of React to describe its optimizing compiler.
[03:20:12] But this begs the question. What's an extra solid?  Will success of fine-grained reactivity lead to the fall of solid,  which can no longer stand out from the crowd?  The answer is no. In 2024, solid will reach 2.0.  So he's actually talking about a lot of the stuff we talked about on stream,  which is cool. Talking about the use of primitives...
[03:20:31] Thank you.
[03:20:32] you know, and our kind of client centric mentality.
[03:20:37] And then HTMLX,
[03:20:42] What's particularly intriguing to me is that HPX shows us a different route to one app architecture by killing client-side code. It's important to note that HPX is not a 100% solution. It shouldn't be a controversial state. The infractive ceiling is much lower than React or Solid. However, you get 80% with radically less complexity. No extra dependencies, no build step, no...
[03:21:00] advanced tooling, no complicated state management, no double data problem, no hydration mismatch,
[03:21:05] So what?
[03:21:06] Yeah.
[03:21:09] Anyways, great post.
[03:21:15] This post inspired me to think if server functions as a second core permit that everyone else is being built around just like signals. Yeah.
[03:21:22] I mean...
[03:21:23] That's why U's server was so...
[03:21:25] Powerful. It was it allowed me to
[03:21:29] us to basically take our client side
[03:21:33] you know, computer, even CSR mentality, and just apply the server to it.
[03:21:39] All these same APIs that work for CSR can work for server rendering.
[03:21:44] It was the missing link.
[03:21:46] It's very powerful.
[03:22:01] Anyway, great post. Worth covering. Okay.
[03:22:07] Thank you.
[03:22:08] So
[03:22:09] Yeah, I already explained how this works, right?
[03:22:11] I noticed the loader is not being awaited.
[03:22:14] that we can respond before friends have loaded.  We send the users back immediately as they resolve in the friend stream as they complete.
[03:22:21] Right.
[03:22:21] This is the whole GraphQL thing.  We already talked about this.  But yeah, I think there's a lot of...
[03:22:27] We already could do a lot with RPC on the front end. It's just never been easier to do RPC when you can just write a function and get perfectly typed without any code gen or whatever. It's just, it's really nice feeling.
[03:22:38] I felt that from the instance that we first did server functions and the patterns have just gotten better. Async local storage is what we were missing back in server dollar sign days.
[03:22:48] That was what bridged the gap.
[03:22:50] It was very nice that the next team pushed every other team
[03:22:54] platform to support it, even if a little prematurely.
[03:23:01] Thank you.
[03:23:02] Thank you.
[03:23:09] Thank you.
[03:23:10] Anyway, talked about the docs. Oh yeah, another really cool article.
[03:23:17] Thank you.
[03:23:18] Ever wanted to build your own JavaScript meta framework?
[03:23:24] Check this one out.
[03:23:29] Thank you.
[03:23:30] Thank you.
[03:23:32] Oh, I put the Twitter link.  I should have put the article link.  My bad.  Let me put the article link in here.
[03:23:40] There we go.
[03:23:41] This is biased again because this is... Vinci was created by Nikhil which we've had on the stream multiple times, told us all about it. But he basically went through the... we used it to build a solid start, but he went through "okay, well let's make a React framework". And the thing is because of all the features built in, even stuff like server components and server actions, you just have to write your own little wrapper and build your React meta framework. This is...
[03:24:07] the easiest way to get started with modern React.  It's why Tanner has been looking at it with TanStack and stuff.  He could just bring in his router,
[03:24:18] his conventions, do it how he wants to, and
[03:24:23] You know, you basically get everything.
[03:24:26] So, yeah.
[03:24:28] This is very cool because in one article he literally takes React Router
[03:24:33] You can basically remake a very basic version of Remix here.
[03:24:38] in the course of a single tutorial.
[03:24:41] That's where things have gone to.  I know from experience that it's trickier than that  and we're still bug fixing and whatnot.  But we're getting to the right abstractions.  And I always feel good when we can find it.  And it's awesome to see an article like this,  just basically just like, bam, I made a framework.
[03:24:58] with this tool. This is...  I said this in a previous stream.  Vinci...
[03:25:04] feels very similar to me like like v did like it's funny because when v  added ssr support all the javascript framework authors kind of jumped
[03:25:12] in on it and we're like, this is our tool.  Like V was great for everyone just building simple apps,  but it was like, this is the basis we need to build a good meta framework.  SvelteKit did it.  Astro had Snowpack that they came across.  We did it almost immediately to like,
[03:25:26] We all switched to beat within the same week, or at least us and SvelteKit did.  Remix is on the way over.
[03:25:33] Vinci is
[03:25:37] I got that same kind of chill, that same kind of vibes, but for the meta framework thing. Like, if... God, if this was what was out when, like, VEAT came out, like...
[03:25:47] So let's start with a lot quicker. I mean, it took this experience, right? We had to write it multiple times to figure it out. But this is what I want the Metaframer building layer to look like. And I know I'm biased again, right? Because there's stuff like Vyke out there and there's stuff like...
[03:26:03] you know
[03:26:04] even Nitro to a certain degree, which is powering this, which aimed to do that.  This is how I wanted it to be.  This level of control.  As I said, it has that same vibe that Vite originally gave me.
[03:26:16] So
[03:26:18] Anyway.
[03:26:22] right quick start there we go i love it great naming too
[03:26:30] - Okay.
[03:26:34] No, Astro switched to VEAT.  They switched off Snowpack, I mean.
[03:26:44] .
[03:26:51] Thank you.
[03:26:53] Thank you.
[03:26:56] Yeah, I mean, it's hard to find them. So it's good when you people share the good articles they find.
[03:27:05] Anyway.
[03:27:06] Yeah, very, very cool.
[03:27:10] He even like in this tutorial, he even gets to creating actions and stuff or server functions.
[03:27:15] file based routing. Where did it go?
[03:27:18] React Router.
[03:27:20] I thought there was an example where he did a use
[03:27:24] server.
[03:27:26] Yeah, server functions, here we are.
[03:27:28] Thank you.
[03:27:29] It helped that Nikhil was also responsible for writing the server component, server function plugin for VEAT, like doing the thing.  He's very adapted.
[03:27:41] Yeah.
[03:27:42] where React is in the ecosystem. So yeah, anyways.
[03:27:47] We're still, you know, work through bugs and stuff, but like
[03:27:50] This is very promising, and I hope more people get on board.
[03:27:54] Very cool.
[03:27:55] Okay. Um...
[03:27:59] Let's talk bookmarks.
[03:28:03] Yeah, I need to check this out. This might be a topic for a future stream, but they made a...
[03:28:09] Notion style...
[03:28:11] This is made with HTMX.
[03:28:14] And which is really cool.
[03:28:17] What, as I said, I mostly ignored HTMX because
[03:28:21] I care about apps. This is starting to get into a range where, you know, I want to see,
[03:28:26] if this suffers from not having optimistic updates or if the network's slow.
[03:28:30] Like I want to I want I want to understand
[03:28:33] you know,
[03:28:34] what the performance characteristics are. I want to understand the complexity of writing an app,
[03:28:39] you know,
[03:28:40] like this with  HTMLX because I'm not saying you can't  solve stuff with HTMLX but  at a certain point
[03:28:49] Like...
[03:28:50] I...
[03:28:51] Is there...
[03:28:53] Yeah, is there an article here? There's a repo. Okay, there's a repo. Let's take a look here very quickly.
[03:28:59] You know, I'm I'm I'm super interested in seeing this because like my gut feeling is
[03:29:06] something like that data table is something that you could whip out in a front-end framework in like one file and like, you know, maybe a couple components, maybe like, it'd be fairly straightforward. My gut is an HTMLX would be very interesting setup. Um,
[03:29:24] Yeah, okay, this is going to take more time than...
[03:29:26] have to look into how all these partials weave together
[03:29:30] OK, there's the base HTML.  Makes sense.
[03:29:33] But yeah.
[03:29:35] Interesting.
[03:29:38] Thank you.
[03:29:41] Thank you.
[03:29:42] The...
[03:29:53] Thank you.
[03:29:56] Yeah, yeah, yeah.  Let me, let me put,
[03:30:00] the
[03:30:00] the link to just even the tweet I'll put in chat here.
[03:30:05] Thank you.
[03:30:19] But yeah, I mean, it's interesting.  I built tons of two...
[03:30:26] two model apps where like you need to have something with HTML, partials even, and then something with JavaScript player on top. It was nasty.
[03:30:35] If you can push the threshold without JavaScript far enough, it starts becoming kind of interesting.  But you have to understand, like, I'm pretty critical on this side because, like,
[03:30:45] So
[03:30:46] You know, like I was a CSR person.
[03:30:49] And I got into SSR and I got into this stuff after I, you know,
[03:30:52] killed the network connection.  It was like, let's see what you're doing.
[03:30:56] I'm interested how this feels.  Think about a remix...
[03:31:02] drag and drop
[03:31:03] Kanban board example like Ryan Florence did a few weeks ago.
[03:31:08] Would...
[03:31:08] I get the same experience from HTMX or how complicated would it be to get the same experience with HTMX?
[03:31:14] My gut is
[03:31:16] That will have crossed the threshold, but I don't know.
[03:31:21] you know,
[03:31:23] I think the first step is to show
[03:31:25] Can you do it?
[03:31:27] Maybe.
[03:31:28] It's pretty interesting.
[03:31:30] As I said, I wasn't expected to say something interesting about HTMX, but this is actually interesting.
[03:31:35] Right.
[03:31:37] Thank you.
[03:31:41] Thank you.
[03:31:42] Thank you.
[03:31:44] Yeah, I mean, I figured it would be kind of a flashback to that, but I've said that publicly on stream. For me, that like,
[03:31:52] I basically liked nothing about that era.  I call it the Dark Ages a lot of times.
[03:32:04] Thank you.
[03:32:07] Thank you.
[03:32:09] Thank you.
[03:32:11] Anyway.
[03:32:15] Okay.
[03:32:21] I
[03:32:22] Yeah, I think I already talked about this.  This shows how no components are to the React model  by requiring the solution to be a component  that renders the challenges essentially emulate React.  Yeah, we talked about this earlier.  Okay, last piece of news for today then.
[03:32:32] Let's talk about the
[03:32:35] react,  react,
[03:32:37] pre-release announcement.
[03:32:39] Yeah.
[03:32:42] Thank you.
[03:32:44] Yeah, I wasn't sure because I feel like there was also a quick to blog somewhere here that I didn't
[03:32:50] talk about yet.
[03:32:54] Yeah, it came out on my birthday. So sorry guys, I wasn't... thing.
[03:32:58] Maybe it's worth talking about both of these.
[03:33:01] That's...
[03:33:03] Let's do a quick first.
[03:33:05] It's interesting. I guess it's coming soon.
[03:33:08] I...
[03:33:09] I'm not used to doing...
[03:33:11] Um,
[03:33:13] teasers like this, generally speaking.  On my stream I'll talk about something, but teaser articles,  I know it's good for writing hype,  but I usually don't like releasing stuff until it's in hand.
[03:33:23] And then like,
[03:33:25] You've got to switch to a marketing brain to think about this.
[03:33:30] Let's see what's up with Quik 2.0.
[03:33:33] Resumably comes out with a cost.  Two point, we'll focus on lowering these costs, yeah.
[03:33:38] Yeah, serialization can be expensive.
[03:33:41] listener location, component boundaries, application state. So basically my understanding is that there
[03:33:47] changing their HTML encoding for hydration to be more efficient.
[03:33:51] Right.
[03:33:55] Yeah, I've seen this before.
[03:33:57] It was always interesting to me because in Solid, we don't care about components.  So we don't have so many wrappers.  Instead, we care about templates that we clone.  So we would just put it on the element, right?  You see those data HKs?
[03:34:09] But the data HKs
[03:34:11] have size consideration, but they're actually less expensive than having
[03:34:15] a bunch of
[03:34:17] Notes.
[03:34:18] Interestingly.
[03:34:19] So this is one of the things they probably wanted to fix.
[03:34:23] Yeah, let's see here. Blah, blah, blah, blah, blah. They're explaining what it does.
[03:34:27] And then pruning ID, so in QUIC 2.0,
[03:34:30] The plan is, okay, right, right, right.
[03:34:34] Yeah, yeah, yeah, okay. So they're encoding the walks. This is what we did in Mark... Oh, shit.
[03:34:47] This is what we did at eBay in another framework  for an unreleased version of that framework.
[03:34:53] We spent a lot of
[03:34:55] Time...
[03:34:56] uh,
[03:34:58] Good.
[03:35:00] Thank you.
[03:35:01] Yeah.
[03:35:04] Basically...
[03:35:06] It's good because what you can do is you can describe the steps to walk through something.  So here they're putting this stuff on the on the template or on the element.  And then you can basically go like move one down first child.  One downside of the walks is you can't reuse parts of the walk you've already done before.  So it's slightly less optimal, generally speaking, than the explicit walks.  And you have to decode it.  So there's like a small performance cost, but it compresses lovely if you care about size.
[03:35:35] So, yeah, because I benchmarked this stuff when I was thinking from a client perspective, right?
[03:35:41] Um,
[03:35:42] I always prioritize client updates over other things, generally speaking.  So I actually, we tested this with Marco because, sorry, I said it again.
[03:35:51] Because of the JS framework benchmark.
[03:35:54] Um...
[03:35:55] But yeah, very, very similar technique was being used there.
[03:36:02] But yes, this reduction of nodes actually makes a huge difference, right?  There's a bunch of...
[03:36:08] attributes, but that doesn't matter as much.
[03:36:12] Um...
[03:36:14] Thank you.
[03:36:16] Yeah.
[03:36:17] Yeah, encoding the walk. See...
[03:36:18] Our walks...
[03:36:20] are in our code output
[03:36:22] like in our JavaScript code, but they're encoding the walks
[03:36:27] into the HTML, which in theory,
[03:36:31] could
[03:36:33] Be smarter to like they could know what walks they need to include this if you've ever looked at solid component and
[03:36:40] The reason this is important, let me explain.
[03:36:43] Will this one do what I need it to? No.
[03:36:46] Let's... let's...
[03:36:47] Let's just put some stuff in here.  I'll show you.
[03:36:51] Because...
[03:36:52] Thank you.
[03:36:53] Solid components are kind of small.
[03:36:58] when you don't need the template.
[03:36:59] Right?  Let's just...
[03:37:01] I mean, I know I shouldn't be putting a
[03:37:03] button in a span, whatever. Doesn't matter actually, who cares. Let's just
[03:37:08] What I wanted to show here is the
[03:37:11] The majority of the outputted code
[03:37:15] for a solid component.
[03:37:17] is generally this walk stuff. This is what I call the walks.
[03:37:21] where it goes through and then it,
[03:37:24] And then it like,
[03:37:25] does something to point of interest, like adds a click handler or inserts children
[03:37:30] There's the template, which is
[03:37:31] you know,
[03:37:32] ...
[03:37:33] whatever, but...
[03:37:36] The reason that like,
[03:37:38] And there's even, you know,
[03:37:40] ways that we can
[03:37:42] you know, remove the template, like if it's client side hydration.
[03:37:46] Oh, look, template's gone.
[03:37:47] Because I said it was server only.  This is a little...
[03:37:50] trick, but what I'm getting at here is
[03:37:55] The walks end up being actually...
[03:37:59] a decent size of the components because picture like this this one has some state but if this component had no state
[03:38:06] um
[03:38:07] And did nothing else...
[03:38:09] but inject another component
[03:38:15] Sorry.
[03:38:16] Another...
[03:38:17] component.
[03:38:22] Yeah, let's get rid of the click handler too. Like that's just nothing, right?
[03:38:26] This component could basically literally just
[03:38:30] be
[03:38:31] create other component. Like, the code basically disappears.
[03:38:35] Right? Like, there's no code to this component, except for the fact that it needs to walk, right? Like, it needs to know where to inject that other component. But if you encoded the walk small enough, you could basically pretend like this doesn't exist.
[03:38:52] Essentially, it could just be part of the encoding and literally
[03:38:56] your component could just be like,
[03:38:59] Counter, walk, crate child.
[03:39:03] So like...
[03:39:05] You know we talk about server components and like code reduction on partial hydration like server like you don't need to send the server code.
[03:39:12] You could also, like, there's not much to a component
[03:39:17] that doesn't do anything anyways.  It's literally just a,  it's just the code to find where they insert the other component.  So,
[03:39:26] Thank you.
[03:39:27] If you did things smart, this kind of pruning would be...
[03:39:33] fairly efficient.
[03:39:35] If when you care about size.
[03:39:39] Thank you.
[03:39:41] *crying*
[03:39:47] Yeah, but the problem is I'm actually talking about stuff that's all...
[03:39:53] unreleased sick stuff.
[03:39:55] Anyway.
[03:40:00] Thank you.
[03:40:03] Yeah, I mean, this...
[03:40:04] It's not necessary. It's Babel does it because they're like, we know that
[03:40:10] Like.
[03:40:11] *sniff*
[03:40:12] I was hoping we did a change recently.  Maybe this hasn't been updated yet.
[03:40:17] We did a change to make these vars
[03:40:20] so that it wouldn't have to worry about scope or something,  so that it could get rid of some of these.  But I don't know if it's been updated.  But Babel just goes like JSX is an expression,
[03:40:32] I need to input a bunch of stuff so it does this.  This is not necessary.  We could probably reduce some signs if we could figure out how to convince Babel not to do it.
[03:40:44] Anyway.
[03:40:46] But yeah, you get my point. The majority of the size is either going to be the string template, which can be selectively chosen to be passed, and the walks.
[03:40:56] The actual
[03:40:57] component code for a non-interactive, i.e. a server component essentially, is basically nothing. Um,
[03:41:05] So, like, you could do...
[03:41:07] You could reduce code size without even partial hydration in theory, like significantly.
[03:41:12] Um...
[03:41:14] And I think that's what Quick's kind of getting at here.  They don't do those walks except to do the fine-grained stuff.  They were VDOM.  They started doing those walks after the fact  because they started adding, you know,
[03:41:26] a few solid-esque optimizations. So now they're like doing them all the time more. Maybe they're moving towards doing them more.
[03:41:33] And they were like, okay, we should...
[03:41:36] Come up with a better encoding for it. So he's explaining how the walks mean. D letter is a third zero base letter for the next ten notes, text notes. Like, it basically describes a path to where it needs to go. So it just, you can basically see these as next sibling, first child,
[03:41:52] Kind of.
[03:41:53] Right.
[03:41:55] OK, lazy virtual loads.
[03:41:59] which only gives user is store data rather than objects.
[03:42:03] Matter of fact, the rays are always monomorphic.
[03:42:07] Yeah, because Quick Use is virtual DOM, so
[03:42:13] Yeah, I don't know how this applies as much. Next coming data series, we're going to discuss data station
[03:42:21] Yeah, okay.
[03:42:22] and then come join us blah blah blah.
[03:42:26] Amen.
[03:42:27] They're talking about their UI component library.
[03:42:33] Nice. Okay. So yeah, I think the big one here is that they're optimizing...
[03:42:40] further optimizing for
[03:42:42] um size uh the javascript and the html which is smart move um
[03:42:48] So
[03:42:51] Yeah.
[03:42:52] I...
[03:42:53] I'm kind of still torn on the walks.
[03:42:56] But...
[03:42:58] it definitely reduces...
[03:43:01] the JavaScript bundle size if you do it that way.
[03:43:05] He'll be slower.
[03:43:07] But
[03:43:09] Uh, yeah.
[03:43:15] Thank you.
[03:43:19] Oh, why do you need a fragment in JSX?  It's because...
[03:43:24] It's just it's a syntax for expression, right? It's how like by using open close, you know that you're done, right?  Like otherwise it'd be multiple expressions.
[03:43:34] JSX is kind of JavaScript-y in terms of it.  So if you didn't have a fragment wrapping it, it'd be like
[03:43:40] returning an array without...
[03:43:42] array brackets around it. Like what would that mean? Should it return the first element?
[03:43:49] Thank you.
[03:43:50] I guess you could...  It's just the way the parsers and stuff work.  I guess you could say like...
[03:43:57] Like...
[03:43:57] arbitrarily making an array
[03:44:00] But...
[03:44:03] Yeah.
[03:44:06] The pole's fixed on the docks? Okay.
[03:44:08] Let's...
[03:44:09] Let's send people there again, docs.solidjs.com.
[03:44:13] Share your feedback with us.
[03:44:16] There you go.
[03:44:18] Perfect.
[03:44:20] Thank you.
[03:44:22] Alright.
[03:44:24] Okay. I think that's a good improvement. It's incremental.
[03:44:29] But it will it will.
[03:44:32] it will improve performance in a place that they're probably like basically
[03:44:37] If I'm quick,
[03:44:39] And I'm thinking, you know, people like there's trade-offs to resumability, right?
[03:44:42] Spiralization or whatever, this is how you address one of those trade-offs.
[03:44:50] It's still going to take some for, I guess, people getting on board, because this is an internal optimization.  It doesn't affect the developer experience as much.
[03:45:01] Um...
[03:45:02] But...
[03:45:03] I mean, I love stuff like this.
[03:45:07] We need better benchmarks. That's all I got to say.
[03:45:11] Okay.
[03:45:12] Whereas if you look at the React announcement,
[03:45:15] This is, I mean, don't get me wrong, we're going to look at the article in a second here.  Everything on this list...
[03:45:20] is
[03:45:22] is
[03:45:23] DX related mostly. I mean there's we'll talk about the React compiler obviously in a minute
[03:45:27] But yeah, the funniest thing I looked at those lists is I had to instantly do it. I'm like,
[03:45:32] Is any of this relevant to Solid?
[03:45:35] I had to do that in my head. So when I was looking at it, I was like,
[03:45:39] You'll never need these APIs again.  Use memo, use callback, memo.
[03:45:43] Okay.
[03:45:44] Yeah, I think that was already the win, so...
[03:45:49] Forward ref is, yeah, we don't have forward ref.
[03:45:52] We'll come back to this one.
[03:45:55] Use context, use context. This one, this doesn't even matter. This isn't even
[03:46:00] I'm not drooling over this.
[03:46:03] I guess this is fine grained. It's a secret thing here.  Like it's like more granular the way it works.
[03:46:10] Don't they already have this?
[03:46:15] Thank you.
[03:46:18] Mm-hmm.
[03:46:19] This one's interesting. I actually debated this when I created solid.
[03:46:23] We could like...
[03:46:25] We could implement this in like two seconds if we wanted to.  We could like release this tomorrow.
[03:46:30] I kind of like it.
[03:46:31] Like why, like this, like this whole thing was like, why do you have to like know about it?  Contact objects itself could just be a component.
[03:46:42] promise as a child.  See, the reason I skipped this one is because it's kind of like saying RSC.
[03:46:49] I think
[03:46:53] Lazy is a good thing, but you know,
[03:47:00] Yeah, I don't know. It's back to that whole blocking conversation again.
[03:47:10] It is interesting though, 'cause like,  when we implement lazy internally in the framework,  it's basically using create resource,  like it's kind of using the same mechanisms.  So I could argue, I could see the argument that like,
[03:47:20] it's the same primitive.  In their case, all their stuff is
[03:47:24] promises so just being able to insert a promise like what's the difference between a component
[03:47:29] That's async.
[03:47:30] and a lazy component.
[03:47:36] Probably very little, right?  Because...  So...
[03:47:47] Thank you.
[03:47:49] I guess what you would you but you'd still need to do the dynamic import yourself right you go import
[03:47:53] component without the lazy wrapper,
[03:47:56] And then
[03:48:01] Yeah, exactly. Yeah. You import it without the lazy wrapper.
[03:48:05] Yeah, that's actually kinda cool. I was thinking, at first I thought this was because of RSCs only.
[03:48:12] Like, is this only on the server? Is that like it?
[03:48:15] If this is...
[03:48:17] not the case on the client.
[03:48:19] then
[03:48:21] I'm kind of like whatever, but if this is a
[03:48:24] If...
[03:48:25] Yeah, if this is on both, that's kind of interesting.
[03:48:32] Thank you.
[03:48:33] Thank you.
[03:48:34] Thank you.
[03:48:35] Thank you.
[03:48:43] Thank you.
[03:48:48] Yeah.  I mean, it's...  In this case, the blocking part actually doesn't really matter so much because, like...
[03:48:57] It...
[03:48:58] A lazy component would too, right?  Like, you can't run the component until the code loads.  So, like, you can get to the next sibling.  It's fine.  This thing just can't run until later.  So, I think it's...  Oh, unless they throw...
[03:49:11] And then they force you to rerun the whole parent.
[03:49:15] I doubt they would do that.
[03:49:18] I think you'd render the JSX into VDON nodes.  Notice you have an async one and then continue on from there.
[03:49:25] There's no reason to run the parent again.
[03:49:30] because you'd have the full realization of the JSX, like the V DOM nodes and all the props and stuff. Unless those props change, there's no reason they're on the parent. Yeah. No, I think this makes reasonable sense.
[03:49:47] It's funny, like one of the really old versions of Solid, I supported injecting promises directly and observables like Rx style observables directly into the DOM expressions.
[03:49:58] Um...
[03:50:00] Because I thought it would be like...
[03:50:02] cool for interop and stuff.
[03:50:06] I mean, it's funny.  The thing is like,
[03:50:11] It's trickier than that when you have to, when you, depending on how the rendering works and it ties into async stuff like suspense.
[03:50:19] Because of the way that we...
[03:50:23] realize stuff and our components are just functions, I doubt we would ever go this way.  Right.  You we do the wrapper and then the wrapper informs the behavior.  But yeah, definitely interesting.
[03:50:41] Thank you.
[03:50:45] Yeah, yeah, yeah, yeah. Like this? Yeah, yeah. Yeah, exactly. It's a simple change. Trivial, in fact.
[03:50:54] But like suddenly you don't have to explain to people that you have dot notation on JSX.  It's just ugly.
[03:51:04] you
[03:51:08] Oh, right, right, because they don't even need to use context. It's literally just context.  That's why they did it.
[03:51:15] That's why they did it.
[03:51:17] Thank you.
[03:51:21] I mean, it doesn't matter though, like, you could just, the context could be the provider, and then you could go use context, context, like, the fact that they removed the word here doesn't matter.
[03:51:38] Yes, but you'd be loading JavaScript code.  You'd have to...
[03:51:47] do something with it.
[03:51:53] Thank you.
[03:51:54] But I mean, it's an interesting question.  I get where you're getting at.
[03:52:01] yeah yeah yeah you asked me  yeah a lot of design systems but it's like  leave it to them
[03:52:07] you know,
[03:52:09] Thank you.
[03:52:11] This is like the only core place where we do this.
[03:52:14] Like if you think about it, like,
[03:52:17] What?
[03:52:19] Oh God, solidjs.com. Let's just look. I mean, it's the same in React. I don't really have to go very far for this one. But if we just go
[03:52:26] context.
[03:52:28] Great context.
[03:52:31] you
[03:52:32] What CrayContext does is it returns an ID, a provider, and default value T. But the funniest thing is,
[03:52:38] end users never use these two things. So literally, this could just return the function with these two things on it. And then it would literally just be create context, counter context,
[03:52:49] use context or the new counter context without the dot provider
[03:52:53] And then down here, it's just use context
[03:52:56] Counter context.
[03:52:59] Like this part doesn't change.
[03:53:01] Right?
[03:53:02] All it is is just dropping off the provider simply by putting...
[03:53:06] these properties on the function.
[03:53:09] It's so simple, I don't know why I didn't do it in the first place.
[03:53:11] I think when I did this, I was still a little bit too React-brained.  I started diverting from React APIs later, but at this point I was like...
[03:53:19] I was like accepting of their stuff.  This is such an obvious thing.
[03:53:27] Yeah, instead of a different lady, it assumes too much.
[03:53:33] Like, there has to be special...
[03:53:35] Like,
[03:53:36] Aha.
[03:53:37] Am I supposed to assume that any JS loaded into it is a component?
[03:53:46] I guess I'll actually...  Yeah, yeah, actually, you know what?
[03:53:52] I mean, this is kind of what we do, right? I guess it would work.
[03:54:00] I mean, you'd have to... you'd have to call...
[03:54:04] Thank you.
[03:54:05] Yeah, I guess it would work.
[03:54:07] There's some more trickiness.  I'll get back to you on that.
[03:54:16] Someone needs to make a meme drop the the but drop the provider just use use.
[03:54:23] There you go. Yeah.
[03:54:26] Thank you.
[03:54:26] This one's so obvious, it's kind of like Angular...
[03:54:30] letting you have self-closing tags, but you know,
[03:54:33] I'll take it and I'm sure developers will take it.
[03:54:45] It's like a singleton, it lasts forever.
[03:54:53] He uses the worst name.
[03:54:55] Well, you saw our April Fool's joke with Create Unsolid, I hope.
[03:54:59] Then someone actually went and made that.
[03:55:06] Anyways, I think there's probably going to be more interesting stuff in the article than this piece.
[03:55:12] I think that
[03:55:13] People using modern frameworks haven't had the worry about this first one, the second one,
[03:55:20] The third one... The third one's nothings, whatever.
[03:55:25] Fourth like.
[03:55:27] Even some other than us, most people have slightly tighter contacts.  Almost this is all reactisms, but...
[03:55:37] It's nice to see them pushing it forward.
[03:55:40] Thank you.
[03:55:42] Thank you.
[03:55:43] Yeah. Okay. What we've been working on February, 2024.
[03:55:51] React compiler is no longer a research project. Compiler powers Instagram.com in production. Nice.
[03:55:56] People have been talking about the Vercel versus Meta thing.
[03:56:00] Meta's been maybe not all in on server components, but they've been all in on this compiler.
[03:56:09] As discussed in our previous post, React can sometimes re-render too much when state changes. I love this sometimes.
[03:56:15] I mean, I get what they're saying.  They're trying not to over-emphasize.  I like it.  Since the early days of reactor solution has been manual memoization...
[03:56:28] reasonable but we weren't satisfied, react with a compromise,
[03:56:34] Sorry.
[03:56:35] simple function of state and with standard JavaScript values and idioms, keep harder reactive approach from many developers. I mean, I don't know if I want to get into this.
[03:56:42] But like...
[03:56:44] I'm very happy for Solid.js to take the GIST JavaScript crown.
[03:56:50] so to speak, because...
[03:56:52] What this is.
[03:56:55] We'll be...
[03:56:57] easy to use
[03:56:59] But it's not just JavaScript, right?
[03:57:03] they're changing the semantic, like they'll be changing the way your code runs
[03:57:10] from what's actually written there.
[03:57:13] Thank you.
[03:57:15] I this is a this felt trick, so to speak.  And I think people are open to it.  So I don't think it's a bad thing.
[03:57:22] But there is a trade-off to it.
[03:57:24] Um,
[03:57:26] I think it will only matter to the biggest diehards on the GIST JavaScript side.
[03:57:30] So I'm happy to have you guys all over here.
[03:57:32] But, um...
[03:57:34] Yeah.
[03:57:37] It's interesting because it's their reasoning for this is,
[03:57:42] is
[03:57:42] at odds with
[03:57:44] what it actually accomplishes. Okay.
[03:57:50] Jasmine has a Norse challenge of the language to optimize thanks to the loose roots on dynamic extinction. Those are the pretty small rules of React.
[03:58:00] Must be antipodent between the same value given the same inputs. Can't mutate state of props.
[03:58:04] Interesting.
[03:58:08] Did you see...
[03:58:15] TK Dodo, TK Dodo
[03:58:19] Thank you.
[03:58:20] Okay.
[03:58:26] Yeah.
[03:58:26] Where is it?  He told everyone to read the UseEffect docs really hard this last week.
[03:58:34] He's like, read the page.
[03:58:36] Right, right, right.
[03:58:39] *laughs*
[03:58:41] And
[03:58:42] I learned some stuff.
[03:58:44] Okay.
[03:58:49] Thank you.
[03:59:00] Did you see Theo say, react to the most just Javascript from today?
[03:59:04] I'm not surprised by that take.
[03:59:08] I...
[03:59:08] think it's
[03:59:10] pretty
[03:59:11] far, but it's kind of showing what I'm talking about, where  I think people are accepting of this change, even if it's like
[03:59:20] inaccurate is the best way I would frame this.
[03:59:24] Right. Like
[03:59:26] There's two different meanings to just JavaScript.  There's the idea of you just write JavaScript.
[03:59:32] which is a svelte meaning.
[03:59:34] As in, you don't use libraries, you just write JavaScript-looking code, even though it does other stuff. And then there's the
[03:59:40] Just JavaScript meaning like you don't use
[03:59:46] like you don't change the semantics.  It's just like if you took that code and pulled into another function that was somewhere else,
[03:59:54] you know, outside of some kind of compiler scope, it would behave exactly the same way.
[04:00:00] Um,
[04:00:01] Those are two different meanings of just JavaScript.
[04:00:05] So
[04:00:06] I think React went from
[04:00:08] The second meaning that I said?
[04:00:10] which is I think what Solid excels at.
[04:00:12] to now kind of taking this felt meaning of just JavaScript.
[04:00:18] People are okay with that.
[04:00:19] That's fine, but...
[04:00:21] from my perspective,
[04:00:23] I,
[04:00:24] I have a very hard time calling React's JavaScript, just JavaScript  after what they intend to do with this compiler.
[04:00:37] But yes, this blog post is amazing, right? I mean, we all know lots of these things,  updating state based on props. Like this is the solids use computed
[04:00:47] thing. You shouldn't synchronize state with effects. It's the worst. That's why I created  create computed, not just create effect. But I've been trying to get rid of create computed as well  because it's bad for stability.
[04:00:56] Um...
[04:00:57] they talk about driving data. A lot of this is like how to drive data. It's very important lessons. We teach the same kind of lessons in Solid.
[04:01:06] What if you do that? But then I saw this.
[04:01:09] Start by deleting the effect. Instead, just adjust the state during rendering.
[04:01:13] declaring state
[04:01:14] and then setting state
[04:01:17] in the rendering.
[04:01:20] This one shocked me, but what they explained is...
[04:01:24] As long...
[04:01:26] as
[04:01:30] Like,
[04:01:30] It's...
[04:01:31] Though this pattern is more efficient than effects, most components shouldn't need it either.
[04:01:35] But they're basically saying it's better because effects run after the fact and restart the whole rendering. It's better to just render it as you go.
[04:01:42] This is basically equivalent to create computed in solid.
[04:01:46] If you're interested, like this is essentially the equivalent.
[04:01:50] But it's just...
[04:01:52] Because this will apply
[04:01:54] before the diffing. They might re-render this part of the component, but they'll...  If they see you update the state, what React does is it runs it once, then it sees you update the state.
[04:02:05] and it returns to JSX, but it doesn't do any like DOM dipping.  And then it goes, okay, the state of this component updated.  It runs it again.
[04:02:12] And this time the early
[04:02:14] exit gets you out of it.
[04:02:16] So then it essentially renders the same JSX again.  So it goes through the thing twice,  but it didn't go in DOM diff.
[04:02:24] It just ran the component twice.
[04:02:27] So this is better than using useEffect, but like...
[04:02:32] It's still not particularly good.
[04:02:36] But the fact that this was shown in the docs completely blew my mind.  I mean, it's pretty interesting to actually suggest that.
[04:02:44] Like...
[04:02:45] I kind of went the opposite way.  I was like, I basically was like,  I want to get rid of Crate Computed.
[04:02:50] If people shouldn't use use effect, but if they have to, they can.
[04:02:53] This is like, here you go.
[04:02:55] But what triggered this for me is that
[04:02:59] The kid...
[04:03:01] Thank you.
[04:03:02] React components must be idipotent returning the same state value given the same inputs and can't mutate props or state.
[04:03:07] Values.
[04:03:09] The rules limit what developers can do and help carve out a safe space to compiler optimize.
[04:03:14] It occurred to me that this example here actually breaks the rules of the compiler.  Just a side note.  It just breaks.
[04:03:21] Kind of...
[04:03:22] tricked on me.
[04:03:26] *laughs*
[04:03:27] Yeah, I mean, yeah.
[04:03:29] most cases hopefully you're deriving stuff  but yeah I mean
[04:03:38] Yeah, so...
[04:03:45] Okay.
[04:03:46] Of course, we understand the developers sometimes bend the rules and our goal is to make React compiler work out of the box. Copilot the compiler attempts to detect when code doesn't strictly follow the rules and we're testing against meta's large varied code base, blah, blah, blah, blah. Enabling strict mode, ESLint plugins. Compiler action, check out our talk from last fall. At the time, we had a fair amount of data to compiler run to Instagram. Then we shipped to compiler production across Instagram.com. We're expanding our team accelerator role up, blah, blah, blah. Okay, great. So I think this is probably going to be pretty cool. Um,
[04:04:16] I think...
[04:04:18] it's going to impact people
[04:04:20] huge React code bases. I think it's going to make it easier for people to write code in React and not understand what it's doing.
[04:04:29] for better or worse.  But I think there's a lot of
[04:04:33] generally...
[04:04:34] positive benefits of having this auto optimization.
[04:04:37] So, um, yeah, I guess we'll see how it falls. Um,
[04:04:42] So good to see what this won't do is.
[04:04:45] Like for all those performance nuts out there, and I know you guys are in the audience, this is not going to like make React suddenly win the JS framework benchmark.
[04:04:53] I'd be very surprised if it moved more than 20% off this change.
[04:04:58] But
[04:05:01] You know...
[04:05:03] It's still...
[04:05:05] you know, quite an important step forward, I think, to making React more livable. I think people have wanted something to improve it for years. And it's, it's really actually inspiring to see the lengths they would go to try and fix this model, right? Like,
[04:05:21] This is like...
[04:05:23] Like, this is a monumental effort to, you know, basically fix the React model.
[04:05:30] Um,
[04:05:32] I don't know how many developers I know that there's a team of maybe like five or six core people working that were working on it when I talked to them about a year ago.
[04:05:42] and
[04:05:43] Now, like, there's probably like the rest of the clearly at this point, way more people have been pulled in. There's, there's quite a few people working on this project to make this happen.
[04:05:53] Um...
[04:05:54] So, yeah.
[04:05:56] In fact, with Instagram and Facebook being able to test this at scale,
[04:06:01] I imagine this will be quite an incredible accomplishment.
[04:06:09] you
[04:06:11] Why is Ratt resisting fine-grained over- so it's already almost like a plan with sales anyway?
[04:06:16] Because it's not their model.
[04:06:19] Like, there's trade-offs here.
[04:06:21] React models, for example, easier to work with server components.
[04:06:25] Right. Like for them, they they they found their nice balanced place.
[04:06:30] Will their solution ever be as performant as what
[04:06:32] You know, find greater activity? Probably not.
[04:06:34] Does it matter?
[04:06:35] Maybe not.
[04:06:37] Right?
[04:06:38] So, like, why should React change what it is? See, here's the thing. If I thought React was actually going to do what I wanted it to do, I would have never created solid.
[04:06:50] There's a time window there.
[04:06:52] where
[04:06:53] You know, I'm, you know, if I might have said like, if I thought React was going to do what I wanted them to do within five years, I might have never created Solid.
[04:07:02] At this point, it's probably ever, but...
[04:07:05] But like, you have to consider that like,
[04:07:09] at a certain point you just choose the tools, like even like the people waiting on Forget, right? Like,
[04:07:14] I'm not suggesting it would have been prudent to do so,
[04:07:17] But like...
[04:07:18] Between the time that Solid had its current APIs...
[04:07:23] and React for Git coming out,
[04:07:26] It's been five years, you know?
[04:07:27] You could say something slow as felt, or seven years, or whatever.
[04:07:32] You could have
[04:07:33] at any point...
[04:07:35] I felt that way a bit with the JS framework benchmark too.  It's like you could have
[04:07:40] You know, you wouldn't have chosen the other option because it wasn't as popular or known as whatever, but at any point someone can choose to do something different.
[04:07:47] and benefit it for years, a decade, before others will get to the same zone.
[04:07:53] But we're not all bleeding edge, right? You know, not everyone wants to bleed on the edge. So like,
[04:07:58] You have to choose where it is. And even as a framework creator, this was like my consideration. It's like
[04:08:03] I knew that no one was going to do what we were doing.
[04:08:06] at that time within that time period.
[04:08:10] Ironically,
[04:08:11] many came around
[04:08:13] But like, I didn't know that at the beginning.  There's no way of knowing that.  And looking at the key players, I wouldn't have expected them to get there on their own.
[04:08:19] So,
[04:08:21] Like,
[04:08:23] Or at least in that time window.
[04:08:26] Thank you.
[04:08:27] So like
[04:08:29] Yeah, I think it's good that React's not the same.
[04:08:32] You know, that they've chosen a different path.  This lets us do our thing.
[04:08:37] No, that's the thing. I don't expect it to be.
[04:08:40] Million.js is optimizing the leafs.  It's like...
[04:08:46] It's.
[04:08:47] Yeah.
[04:08:48] And
[04:08:49] In theory...
[04:08:51] million plus this compiler
[04:08:55] could, like something with it, could get to a pretty sweet spot, I think.
[04:08:59] But they're like both focusing on other...
[04:09:01] parts.
[04:09:03] React for Git is trying to auto-improve the component re-render stuff. Million doesn't stop React from rendering your components a billion times. It just makes the rendering of the specific component faster by applying a grouping-based optimization, very similar actually to what we do in Solid.js in terms of using template cloning.
[04:09:23] Okay.
[04:09:25] But like...
[04:09:27] If you add million to your app and your app revenders a billion times,
[04:09:32] Well, then million might make things faster for you in some cases, but it probably doesn't matter. Right. Like.
[04:09:40] Like it probably doesn't do very much.
[04:09:43] For Gits on the other side, it's like
[04:09:45] they're hoping that they can reduce the amount of re-rendering being done and that having a bigger impact, which it should from an application scale, but it won't win at benchmarks, right? Like, million wins at benchmarks.
[04:09:58] React for Git won't win at benchmarks.
[04:10:02] So it's possible that the combination of both, but the thing is, a lot of the assumptions React makes on a model probably prevent it from going the direction.  Block DOM types approaches like Million.js existed before Million.js, and existed even experiments and stuff.  Go talk to Dom Ganaway from Svelte and Inferno and stuff, and his work on compilers and pre-compilation in React.
[04:10:32] They didn't really want to
[04:10:34] Thank you.
[04:10:35] you know, go that direction.
[04:10:38] It's just tricky with this whole compiler thing on React when
[04:10:44] I'm not sure either compiler is going to be capable of
[04:10:49] addressing the architecture that is React. I think that's actually the concern. It's
[04:10:55] I would never tell them not to work down that path and switch the signals because they're forwarding that architecture as far as it possibly can go.  And that's an interesting innovation, even if I don't believe in it and even if I think that there are much better ways to approach it.
[04:11:10] they are pushing that direction in a way that
[04:11:13] is interesting, a way that I would never spend the time doing myself. So, like,
[04:11:18] Thank you.
[04:11:18] I think, you know, that's why this is important stuff, but it's also like...
[04:11:26] you know, have to recognize like
[04:11:28] the fundamentals there.
[04:11:37] Thank you.
[04:11:39] We don't want developers to build graphs, essentially. Yeah, they don't want you to think about data flows.
[04:11:46] They don't want you to think about waterfalls.
[04:11:51] That's it. It's ambitious.
[04:11:54] I don't think it's realistic.
[04:11:56] But...
[04:11:58] Good on them.
[04:11:59] Right.
[04:12:05] Thank you.
[04:12:08] Thank you.
[04:12:23] Oh man Mikado, I haven't thought about Mikado for a long time.
[04:12:28] I mean, it was fine. Mikado is an example of like...
[04:12:33] using every trick in the book  to try and push the performance out,  even if it didn't scale  to relapse practically.  I think it was a very good experiment.  I think it showed us
[04:12:42] like how fast you say direct proxy state is what you can do with recycling and
[04:12:48] dangerous techniques like node recycling.
[04:12:51] I don't think about it much these days though.
[04:12:54] to be fair, but like,
[04:12:56] it was useful at its time to kind of show us the limits of what we could accomplish.
[04:13:05] Thank you.
[04:13:06] Thank you.
[04:13:11] Thank you.
[04:13:12] Thank you.
[04:13:14] Signals aren't what's blocking server components, to be fair.
[04:13:22] Although...
[04:13:22] Thank you.
[04:13:25] it's more like fine-grained rendering doesn't,
[04:13:31] need to diff. So shipping and diffing solution for server components seems ex
[04:13:36] extra, right? It's like if you optimize
[04:13:40] on the reactive side, there's no reason to have all the code that you need to make server components work. So there's like, it takes a bit of a step back to kind of
[04:13:49] decide to
[04:13:51] Add back.
[04:13:52] A diffing engine.
[04:13:54] And APIs to handle it.
[04:13:59] Yeah, exactly. Yeah. Like the key prop, right? Like the biggest thing actually blocking on that side, like I actually don't even know if it matters that much, but like the key prop is a perfect example. Like react, they expect you to key stuff. It's made for diffing. If you have a map, you key it.
[04:14:16] um...
[04:14:17] If you don't
[04:14:18] have a key prop, then it's like something like, hmm.
[04:14:22] how do you do diffing right like
[04:14:25] Do you add a key prof just for this case?
[04:14:30] I would love to find, I think what's interesting, and it's a whole other side is,
[04:14:36] ServerComponentsClearBoundaries gives us a solution to the serialization problem, but if there was any other solution to the serialization problem,
[04:14:43] I think it would be very, very interesting because other than the serialization problem, every other aspect can be optimized incredibly well with some kind of version of signals or fine reactivity.  I mean, we're seeing...
[04:14:57] parts of it in quick, resumable solution, right? Waking up stuff
[04:15:02] and not even hydrating at that point, based on granular and validation based on data. If you know your data flow,
[04:15:08] then...
[04:15:09] like, the sky's the limits, right? You don't have to do dumb render and diffs.
[04:15:15] that's always going to be slower or worse, right?
[04:15:20] It's just...
[04:15:22] Yeah, it...
[04:15:24] Thank you.
[04:15:25] The trickiest part right now is figuring out how to...
[04:15:33] find the right abstraction for solving the data serialization problem, I think.  And I'm not talking about like the quick blog, like that serialization.  That's fine. That's improvement for them.  I'm the problem still is
[04:15:45] if
[04:15:46] If you know that you have a stateful change somewhere behind your app, like a router, client side router,
[04:15:52] Any kind of auto compilation is still going to assume that you need all the code under it because it's like that's the decision point.  Now we need that code.  Now we need the data like this.
[04:16:01] And
[04:16:02] You end up with a model... Yeah, it's tricky. I have talked about this before, but you have to be very...
[04:16:10] considerate of the boundaries here. The reason server components work so well is because the same reason web component Shadow DOM works is because the tree on the outside
[04:16:19] can weave through all the client islands trees in a single way.  And it's impossible for the client to pass props back into the server.  That's the whole key to that split, which is why you know you can be safe.  Any other kind of like approach where the client injects back into the server,  you know, like lakes or, you know, I think the Nux server component solution  will not solve this problem.
[04:16:43] And that's why...
[04:16:47] I still think about these things anyway.
[04:16:54] Thank you.
[04:16:55] All right, let's keep on going.
[04:17:01] Yeah. Actions? Oh, well, I mean, we've seen this before.
[04:17:05] I think...
[04:17:08] Is there anything new here?
[04:17:13] We use submission.
[04:17:15] Use submission. Yeah. I think I actually demoed this earlier with Solid's version.
[04:17:20] But...
[04:17:26] okay okay so they're just saying they're officially bringing actions into react
[04:17:33] With the next version. Okay, that's cool.
[04:17:35] We've been seeing this.
[04:17:41] Use client use server. This is where they're describing after islands or TRPC smart document, metadata title. This is cool. This is something I've been looking at again. Once you add streaming to your framework, having first party support of title and meta tags and stuff becomes really important. Reacts approach here. It's funny. Next.js does router.
[04:18:05] level
[04:18:06] stuff here. Compiling the tags is interesting. I've been looking at primitives here and not  going to compilation. In fact, I think Alexis has already made some PRs. I haven't actually  looked at them yet. Let me see.
[04:18:20] What has he got here? Pull requests. Use title, use meta. Yeah, yeah, yeah. So, um,
[04:18:28] But yeah, this is actually going to be increasingly important when you think about handling streaming solutions, building it in asset loading.  Yeah, we have used assets that make sense that they landed here too, but there.
[04:18:41] I wonder what it looks like.
[04:18:44] Thank you.
[04:18:46] Thank you.
[04:18:47] Resource loading APIs. Okay, interesting. Yeah, this is cool.
[04:18:54] We should look at this at some point.
[04:18:56] Thank you.
[04:19:02] Yeah, I like it.
[04:19:08] Mostly because I've been working on similar solutions.  So I think that's really cool.
[04:19:12] And actions, yeah.
[04:19:14] Next phasor version couple iterations react canary, latest RAC19, there's still more to be done.
[04:19:21] Off screen. Okay, this is interesting, because this has been one of my topics I want to look at for 2.0.
[04:19:26] automatically offering to activity
[04:19:28] implied that it would be only not visible yet that makes sense
[04:19:32] While researching, we realized the possible parts of the app to be visible and inactive, such as content behind a modal,
[04:19:38] I don't know if I like that, but yeah, I get what they're saying. Yeah, definitely.
[04:19:42] This is all about...
[04:19:44] Scheduling of effects.
[04:19:45] Um,
[04:19:47] Yeah.
[04:19:49] Cool.
[04:19:52] Thank you.
[04:19:59] It's good. It's a good update. I'm glad to hear this stuff is moving.
[04:20:06] Thank you.
[04:20:09] Thank you.
[04:20:16] It looks like the compiler won't be that much longer.  And I think these APIs are actually all very,
[04:20:22] critical here. It's kind of interesting though because obviously the compiler is both sides,  but none of the changes here are the ones that
[04:20:29] that
[04:20:29] That uh...
[04:20:32] Um...
[04:20:33] Andrew Clark talked about, but that's still interesting.
[04:20:38] Sometimes we add APIs just so we can collect kudos for removing them a few later.  Just kidding.
[04:20:46] Oh, I love that.
[04:20:48] That's awesome.
[04:20:49] Anyway.
[04:20:51] Thank you.
[04:20:52] Thank you.
[04:20:58] You want actions to be the new convention for React components instead of on?
[04:21:02] Where did you see that?
[04:21:07] Thank you.
[04:21:13] Just curious.
[04:21:15] Thank you.
[04:21:18] I mean...
[04:21:19] It makes sense in the fact that then they don't need any client handling if it goes straight through.  But what's interesting is...
[04:21:28] Mmm.
[04:21:31] I guess it's fine. It's very imperative.
[04:21:34] But like event handlers are always the imperative part that like lead into feeding back into the state. So I guess yeah, I guess it's all part of it.
[04:21:41] In that post? Did I... did I... I missed that?
[04:21:46] I guess I skimmed over it.
[04:21:50] Because I was like, yeah, we've had actions forever.
[04:21:55] Transition, yeah, makes sense.
[04:22:01] He's optimistic.
[04:22:06] - Library authors can use custom action function props  in their own components with use to transition.  On intent is to the libraries to adopt the action pattern  when designing the component APIs  to provide a consistent experiential reactivation.  If your library has a calendar on selective event,
[04:22:19] Good to hear from you.
[04:22:23] Thank you.
[04:22:26] We initially focused on server actions for client server data transfer. Our philosophy is to try the same of a program request for a platform when possible. If we introduce a new client feature, blah, blah, blah, blah, blah, blah.
[04:22:38] .
[04:22:42] Thank you.
[04:22:45] Thank you.
[04:22:47] I don't know if this makes it any clearer for me.
[04:22:54] I guess because my perspective actions have a clear tie into routing functionality.
[04:23:01] cache invalidation,
[04:23:03] the, like the connect, like what causes.
[04:23:09] data invalidate on your route.
[04:23:14] A client action isn't
[04:23:16] I guess you're calling a setState call?
[04:23:21] Yeah, I don't know if this...
[04:23:23] I guess I'll have to see it. I don't know if this does anything for me.
[04:23:25] Thank you.
[04:23:29] I mean, transitions make a lot of sense.
[04:23:34] Not everything's async, but if it's not, there's no harm, no file.
[04:23:39] Except for the speed, like performance.
[04:23:41] I don't know if you guys ever saw this.  Someone made...
[04:23:44] JS framework benchmark and they did it with the concurrent react, like all with transitions and stuff. Um,
[04:23:54] Thank you.
[04:23:56] Thank you.
[04:23:57] Yeah, use transition, here we go.
[04:24:06] Thank you.
[04:24:06] Thank you.
[04:24:09] Oh, Quick got in here. I missed that.
[04:24:15] Quick, quick on the JS framework benchmark.
[04:24:19] 1.53 right beside Preact just like I said they would be.
[04:24:22] All right.
[04:24:24] React Books transition.
[04:24:27] Where's normal React?
[04:24:29] Is normal React in front of React now? That makes sense.
[04:24:33] But it's all in the same range.  It looks like the table's compressed.
[04:24:39] 149
[04:24:41] So quick is 153, slower than React.
[04:24:45] then
[04:24:47] React transitions is back here next to Marco.
[04:24:55] You...  Interesting. I didn't see...
[04:24:59] I didn't see that they got added. Oh, there's a view vapor in here. What's going on?
[04:25:04] That's way too slow for vapor.
[04:25:05] Really?
[04:25:07] 133
[04:25:08] I would expect...
[04:25:10] There's probably... that's not the final...
[04:25:13] Because that's slower than view normal.
[04:25:16] View normal is 125.
[04:25:19] Wow, people have been getting ahead of stuff here a little bit.
[04:25:27] That's interesting. SolidStore, Svelte Classic.
[04:25:31] This is probably the most impressive thing on here.
[04:25:35] Their classic Svelte 5
[04:25:38] not using signals, but like optimizing to signals, like letting you write the old syntax, but optimizing the signals actually
[04:25:45] Um,
[04:25:46] is pretty performant. Like how much better that is than Svelte 4 is actually really impressive that you can write it the Svelte 4 way and still get
[04:25:55] basically...
[04:25:57] upper echelon performance, right?
[04:26:01] Yeah, solid and Svelte 5 and raw WASM are all about the same thing at 106.
[04:26:09] *sigh*
[04:26:11] *sigh*
[04:26:13] Yeah, that's funny.
[04:26:15] Yeah.
[04:26:16] God, that disposal time hurts us a bit. What hurts them?
[04:26:21] They're not as quick on
[04:26:28] creation. Anyways, this is actually really impressive to me that Svelte 5, written the Svelte 4 way, is up here.
[04:26:35] Dom did some good optimization.  I was expecting Svelte 5 and Solid basically be next to each other.  That's fine.
[04:26:42] I was expecting vapor to be up there too. There must be something up with this vapor for it to be way back here.
[04:26:48] for this view vapor
[04:26:50] Release.
[04:26:52] Anyway, sorry.
[04:26:54] I was thrown off. I don't even remember why I was here. I was just trying to show that
[04:26:58] React with transitions is about the slowest way to write React.
[04:27:07] And then I found that Quick snuck its way in here. What's killing Quick here? Why is Quick slower than React?
[04:27:15] even with good row optimization.
[04:27:18] That's that's actually insane. Actually, can we look at this for a minute? Sorry.
[04:27:23] Kind of.
[04:27:27] Yeah.
[04:27:33] Yeah, I know you've been active on it. Do you know the state of things? Vapor is, yeah.
[04:27:41] Thank you.
[04:27:42] When can we beat VanillaJS?  If we beat VanillaJS, we're not doing something right.  Last time...
[04:27:48] We beat vanilla JS.  I had to go and fix the vanilla JS and make it faster.
[04:27:52] It's a good learning process. I actually have a blog post from SolidBeat Vanilla.js. It was on my birthday.
[04:27:58] three or like four,
[04:28:00] God, it was five years ago.  Yeah.
[04:28:03] *sniff*
[04:28:05] -
[04:28:06] But,
[04:28:07] "Yeah, what's going on here? Let's understand."
[04:28:11] React's getting punished for having really poor list reconciliation.
[04:28:16] Right?
[04:28:17] But...
[04:28:18] Quicks got good list reconciliation.
[04:28:21] It's got good partial updates like most signals libraries.
[04:28:26] Its creation is slow.
[04:28:30] And it's replaced for Oza's slow.
[04:28:34] Although its big replace is better than quick, and its memory usage is like React's.
[04:28:40] The releasing is really bad.
[04:28:45] So it's a pending interesting...
[04:28:48] Select Row is worse than it could be, but...
[04:28:53] that can probably be optimized.
[04:28:56] Maybe it's the classic view trade-off.  Like, it's hard to be a VDOM and signals.  Like, they fight against each other.
[04:29:03] Okay.
[04:29:05] Like you got to optimize one way or the other way.
[04:29:09] Like,
[04:29:11] My pre-act signals...
[04:29:13] Interestingly though, Preact signals, where's Preact normal, Preact classes?
[04:29:19] Yeah, yeah, exactly. Preact classes are here. Preact signals are back here.
[04:29:25] Right? This is why I was talking about that trade-off. You have to either optimize partial  update or you have to optimize select row. You don't get to choose them both when you have the  VDOM and the signals thing. It's like very common problem. I used to always complain about
[04:29:38] view about this until they actually  implemented a feature that actually solved it.  See, look, pre-act classes, it's reversed.
[04:29:44] Select row is fast.
[04:29:46] Swap Rose is slow
[04:29:50] Interesting, what's going on here?
[04:29:54] react signals.  Oh,  sorry.
[04:30:00] This is just not what I expected.
[04:30:01] and then Preact Hooks is similar to Signals,
[04:30:04] But...
[04:30:05] Why is it slower?
[04:30:08] I would--
[04:30:09] Oh, Preact Hook's partial updates are terrible.
[04:30:12] Whereas Preact
[04:30:14] classes or not.
[04:30:16] So it's like,
[04:30:17] Yeah, it's like every version has a direct trade-off.
[04:30:22] Hmm.
[04:30:23] Anyway.
[04:30:25] This is interesting to me.
[04:30:36] I don't imagine anything they're changing here actually impacts much.
[04:30:42] It's all about hydration load time.  It's not about how fast your app is after it's loaded.
[04:30:47] like the serialization stuff.
[04:30:49] If anything,
[04:30:50] It might make stuff slower.
[04:30:54] Um...
[04:30:55] -
[04:30:56] This is not where they're focused.
[04:31:00] Thank you.
[04:31:05] Thank you.
[04:31:06] Thank you.
[04:31:07] Well, I mean, I just switched whatever, it was originally EV, I just switched to whatever domdiff. The diffing matters for basically just this one swap rows.
[04:31:17] Amen.
[04:31:19] Yeah.
[04:31:20] Right. Eevee was the one that originally had the fastest swap row algorithm, then everyone else basically copied them.
[04:31:28] Biggest challenge with signals now is the memory overhead.
[04:31:32] You can see it.
[04:31:34] that like even with Svelte 5 and Solid, we don't compare quite to Million here because of the overhead of removal speed.
[04:31:43] Although, yeah, 14.5 and 15.  Signals have an expense for cleaning things up,  which is where they get hit because the memory allocation,  they can affect creation, but our creation is actually pretty good.
[04:31:56] But replace rolls, again, has cleanup. We get penalized for it a bit.
[04:32:01] So it's where it's where like
[04:32:04] The most optimal way to render a single chunk of DOM would be the way that
[04:32:10] Um...
[04:32:11] Essentially, Million is doing it here, or Eevee with the block.
[04:32:16] But it doesn't help you structurally when you're forced into having React's update patterns.  So like...
[04:32:25] I think...
[04:32:26] Yeah, it's interesting.
[04:32:28] Okay.
[04:32:29] There's like overhead because we have the ability to do things independently, which instead of doing component re-renders.
[04:32:38] What am I looking at?
[04:32:42] Thank you.
[04:32:44] Thank you.
[04:32:46] Thank you.
[04:32:49] Thank you.
[04:32:55] *cough*
[04:33:01] I don't know if I meant to say this. I think I saw this a year ago when it was posted.
[04:33:05] Um...
[04:33:06] Thank you.
[04:33:09] I
[04:33:10] I...
[04:33:11] I don't know.
[04:33:13] I have to admit that Vue's reactivity wasn't really a big influence.
[04:33:18] For me, I got I was influenced by it after the fact.
[04:33:22] which let me write this historical article that I think,
[04:33:26] Yeah.  I saw someone like a notification this earlier,  which let me put it in the sign.  Cause view was the first one to really,
[04:33:35] Like MobX?
[04:33:37] was a big influence. Vue was the first one, and SJS was a big influence. Vue was the first one to really
[04:33:44] Tip me in onto the pull part of push-pull, but if you look at solid today, solid doesn't actually work this way. It's actually... it does push-pull, but it doesn't do it in a lazy way, so it's actually not like view at all.
[04:33:56] Um,
[04:33:57] *sniff*
[04:33:59] Yeah, it's kind of interesting.  Vue added the Compensation API, but that was years after...
[04:34:03] we had our API. So like, yeah, I don't know.
[04:34:08] I don't have too much to say on this.  Um,
[04:34:12] I think this is probably a Vue community thing.
[04:34:17] Don't give me a round, like Vue had this reactivity all along or a version of it.  It's just, uh,
[04:34:25] Yeah, Knockout gets a lot of cred. That's why the same reason. But to be fair, Knockout didn't have the reactivity we have Modern. So for me, MobX gets the nod. They can complain at us.
[04:34:36] Because when you talk about frameworks, you also have to talk about rendering.
[04:34:40] And
[04:34:41] Vue is still a virtual DOM.
[04:34:43] Um,
[04:34:46] So like, yeah, I don't know.
[04:34:51] I thought this was going to be an interesting tweet.  It's kind of...
[04:34:58] Who should be Charlie? I mean, it depends on what you're asking.
[04:35:03] Knockout, probably.
[04:35:05] Like, Knockout wasn't the modern version of the solution, but Knockout had granular rendering too.
[04:35:11] Like, you know,
[04:35:12] And that's the more interesting thing. People don't adopt signals now because, like, I mean, we just saw in the JS framework benchmark, frameworks that are VDOMs that adopt signals, signals makes them slower.
[04:35:24] Thank you.
[04:35:25] Like, the reason you want to adopt signals is so that you get...
[04:35:31] what Svelte 5 saw happen.  So you change your rendering.  And from that perspective, it's not about having signals,  it's about having fine grained rendering.
[04:35:40] Um...
[04:35:41] Thank you.
[04:35:42] But it's hard to give Knockout credit on...
[04:35:44] fine grained rendering in a modern sense
[04:35:47] because
[04:35:49] They're right here, right?
[04:35:51] right behind Ember.
[04:35:53] So
[04:35:55] Like a lot has changed there. I don't know. I don't know who belongs on the Charlie side. For the signals side of things,
[04:36:02] Maybe MobX.
[04:36:03] but for why signals matter...
[04:36:08] Thank you.
[04:36:09] Yeah, I don't know.
[04:36:10] No.
[04:36:12] Thank you.
[04:36:13] Meteor and shambles. Yeah, I mean...
[04:36:15] Thank you.
[04:36:16] Meteor was cool.
[04:36:18] Maybe they had that same thing like MobX. Maybe that's actually where we should give credit. I don't know. Did they have the same guarantees in glitchless?
[04:36:33] I mean, Ember had reactivity too, you know, um,
[04:36:37] I used Ember back in the day right after I used Knockout.  It just, the whole diamond graph solving problem,
[04:36:45] didn't really enter my consciousness until MobX time period, because Knockout did not solve that. And I don't even remember Ember solving that.
[04:36:54] Back in the day.
[04:36:55] They might now, but they didn't back then.
[04:36:58] 2010.
[04:37:01] Yeah, it came out actually...
[04:37:04] really early on. I want to say it came out before
[04:37:08] Angular and Backbone? Yeah. Knockout predates both Backbone and Angular.
[04:37:19] Remember Rich? Yeah, yeah. It's... The Vue guys are a little bit hurt because, like, they've been... They react... You have to understand, React made reactive libraries being reactive so hostile for years. I wrote that follow-up blog post about, like, React and, like, um...
[04:37:38] I mean, I can probably still find the meme on here if I look for it.  Look for...
[04:37:44] Um,
[04:37:46] ML.
[04:37:48] ML Rawlings.
[04:37:50] We've had him on the stream. He works on the framework that shall not be named. No, that's not what I want.
[04:37:55] Not my private messages. Oops. ML Rawlings.
[04:38:01] Um...
[04:38:05] I mean,
[04:38:07] This is another way of looking at that meme, I suppose.
[04:38:11] - Yeah.
[04:38:13] But like...
[04:38:15] Thank you.
[04:38:15] I'm going to go.
[04:38:17] Thank you.
[04:38:19] Thank you.
[04:38:20] Yeah.
[04:38:21] I give VIEW a huge amount of credit because they...
[04:38:24] even if they kind of hid their signals,  they were doing reactivity at a time  where React made...
[04:38:30] reactivity the worst thing ever.  Pretty much. Conceptually,  that's why there was such a  pushback. I thought this meme was  hilarious because...
[04:38:41] Like...
[04:38:42] This is the cover from the React documentary, but like
[04:38:45] That was what was going on here, right?
[04:38:48] Um...
[04:38:50] Mm-hmm.
[04:38:55] Meteor was way too far ahead of its time, yeah.
[04:39:01] Thank you.
[04:39:07] But yeah, yeah, I don't know. I'm...
[04:39:14] I don't think signals themselves are hard to trace back.
[04:39:20] Because they've evolved over the years like anything.  And no solution took them all the way to the finish line, so to speak.  We all came in on the shoulders of giants, right?
[04:39:31] Thank you.
[04:39:32] Thank you.
[04:39:36] Yeah, this is yeah, if you watch the View documentary, Evan talks a bit about his time. Yeah, and he also worked on something at Google before that, too, if I remember correctly.
[04:39:49] Thank you.
[04:39:50] Anyway.
[04:39:51] Um,
[04:39:53] Yeah, I...
[04:39:55] The whole who came up with signals thing...
[04:39:58] It's so funny because I have seen that a lot in the Vue community where they feel like it was them.
[04:40:03] Whereas if you go in the other communities, everyone's like knockout.
[04:40:07] Right.  But view...
[04:40:09] Knockout died.
[04:40:11] pretty quickly around 2010,  2000,
[04:40:14] sorry, 2013, 14, around the time, React,  Knockout just dropped right off the face of the earth,  stopped getting updated,  and Vue carried the torch...
[04:40:24] for
[04:40:26] About three years in a time period.  I mean, even longer, I'd say longer if you weren't aware of the work that we were doing with Solid.
[04:40:35] Um...
[04:40:36] in a time period that was incredibly hostile to reactivity. Incredibly hostile.
[04:40:43] Um, so...
[04:40:45] Yeah, I mean, they deserve recognition from that point, but...
[04:40:50] Yeah.
[04:40:53] I think the motivations that Push felt and ourselves there were a little bit
[04:40:58] different and that's why even the reactivity is a little bit different.
[04:41:05] yeah meteor is the first time yeah knockout had auto tracking reactivity um
[04:41:11] back in July 2010.
[04:41:13] so to speak.
[04:41:15] So yeah.
[04:41:17] Yeah, I mean...
[04:41:19] TKO is great.  It's awesome.  That was his name.
[04:41:28] Maintainer TKO knockout. It's supposed to be knockout 4.0. He's been working on this for years.
[04:41:36] Get up.
[04:41:37] Let's just try and get there.  Okay, knockout TKO.
[04:41:40] Uh...
[04:41:43] It's this is the most epic rewrite of a framework ever that will probably never come out.  This is the guy.  Brian Hunt.  Yeah.
[04:41:55] Okay.
[04:41:56] This is kind of where I started when I was starting with Solid. This project existed around the time I started Solid.
[04:42:02] I remember looking at it and being like, oh yeah, this is the kind of thing I want to do.
[04:42:08] And I was like, I'm probably in the issues talking about stuff at some point.
[04:42:14] It's just like...
[04:42:17] Yeah.
[04:42:19] One day, maybe.
[04:42:24] When was the last release?
[04:42:29] September 27th, 2022. I think it's finally slowed down, but if you look here, he actually
[04:42:35] was pretty steady releasing stuff
[04:42:39] for
[04:42:40] for several years.
[04:42:42] Like this is an example of a monumental effort that might, you know,
[04:42:46] Never go anywhere. Let's see a knockout by comparison. When's the last knockout release?
[04:42:53] "2019, empty template with if option throws an error."
[04:42:58] IE error from inserting a node before itself, problem with initial value on select, rate change, template binding removes script template contents.
[04:43:07] There you go.
[04:43:08] Thank you.
[04:43:12] Thank you.
[04:43:31] Anyway, sorry, I was reading chat for a moment.  You guys got me distracted, but I think we're, I think we're wrapping up pretty quick here.
[04:43:38] for a day that I wasn't going to do a stream,
[04:43:42] Thank you.
[04:43:45] TKO will kill Alpine.
[04:43:49] Oh, man.  I don't know.  I think almost anything can kill Alpine.
[04:43:54] *sniff*
[04:43:55] Ah.
[04:43:56] No, I mean, I know you're not talking about performance, so it's just...
[04:44:01] Oh, man.
[04:44:05] I like look blazers in front of Alpine.
[04:44:10] Oh no, that's...
[04:44:11] ahead of time, Blazer.
[04:44:14] No, no, we shouldn't assume that anything's slower than Blazer.
[04:44:19] That would be a grave mistake.  No, I mean...
[04:44:22] *shriek*
[04:44:24] Eh eh...
[04:44:28] Thank you.
[04:44:29] I don't need to tell that story again, but Petite View was pretty amusing because Alpine uses View's reactivity.
[04:44:36] And like,
[04:44:37] Someone was like making dissing view or something or comparing to view and Evan was like, no, hold on a second. Like,
[04:44:43] You can use view like this, you know, like this is, you know,
[04:44:47] And he's like, he looked and he's like, okay, actually, you know what?  And literally over like a day, he just like went home one day and wrote his own version  of Alpine, which is smaller, faster.  Like he just like dropped it.  Like he could tell he just like went in there and it was fun for him because he was like,  this reminds me when I first wrote view one, like it was just like what it felt like.  Cause Alpine is almost like a modern version of like view one or knockout where like you
[04:45:14] the that that same sort of experience.
[04:45:18] where like the way the templates process and all that so
[04:45:23] Anyway, sorry. I know you guys probably weren't hating on it.
[04:45:31] Thanks, thanks. Yeah, I hope the waterfall thing works. I wasn't trying to be too harsh on React.
[04:45:37] server components, to be fair.
[04:45:40] I think it's a good model.  I just...  The whole dialogue around waterfalls...  I think you have to understand...
[04:45:46] That like...
[04:45:48] The part that might have not come across properly is that like,
[04:45:53] It is so easy...
[04:45:55] to create waterfalls.
[04:45:57] Like really, really easy.  That's why...
[04:46:00] I focus so much on like route loading APIs like you could definitely never do a route loader.
[04:46:07] and avoid client side waterfalls if you're smart.
[04:46:11] But like...
[04:46:13] That doesn't scale.
[04:46:14] Being smart doesn't scale.
[04:46:16] So like.
[04:46:20] Yeah, I'm...
[04:46:22] I get what the message is.  It was just like the actual conversation on Twitter really started because we're talking about DX and how streamlined these things are these days.  And let's face it.
[04:46:35] Since we moved to this model, you know, first with Remix, then the addition of RPC actions with Start, and then I guess even the server components and Next, like that whole trans, like one, two, three, we have a really nice DX story here.
[04:46:51] across the board, you know, similar to SvelteKit.
[04:46:55] Noxed, you know, like...
[04:46:57] I haven't looked too closely into Nox recently, but I'm assuming...  You know what I mean? Like, it's...
[04:47:03] Thank you.
[04:47:04] Yeah.
[04:47:15] Thank you.
[04:47:26] Yeah. Anyway, thank you all for joining me. I...
[04:47:31] We'll tell you a bit about my streaming schedule coming up.
[04:47:33] I definitely will not have a stream on March 1st.
[04:47:37] because I will be at view world or the JS part of it.  Like I'm going to a big view conference.  I'm going to see my view folk.  Um,  sorry if I've seen partially guests just now,  but,  um,  in Amsterdam,  uh,
[04:47:51] it's a view VEAT JS conference.  And then the following week,  um,
[04:47:57] I'm not available either.
[04:48:00] So there may be a stream next week, there might not be a stream next week,
[04:48:04] Otherwise, I'll be back on March 15th with a secret...
[04:48:08] Announcement.
[04:48:10] stream with one of our favorite guests of all time, Fred K. Scott.
[04:48:15] Um,
[04:48:16] So some
[04:48:17] Big Astro news coming up.
[04:48:20] So,
[04:48:21] We'll see you.
[04:48:24] - Thank you.
[04:48:27] All right. Is there anyone to raid right now?
[04:48:33] I need to check my Twitch. I'm always behind.
[04:48:36] What's Coding Garden doing?
[04:48:40] We see.
[04:48:47] Yeah, whatever. Let's give them a raid.
[04:48:51] Thank you.
[04:48:53] Thank you.
[04:48:56] Thank you.
[04:49:00] All right. Thank you all for joining me today.
[04:49:06] *sniff*
[04:49:08] And, uh...
[04:49:10] Hopefully I'll see you all soon.
[04:49:12] All right.
[04:49:15] Thank you.