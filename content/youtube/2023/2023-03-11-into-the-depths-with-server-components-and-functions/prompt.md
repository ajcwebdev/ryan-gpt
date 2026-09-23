---
title: "QS9yAsv1czg"
slug: "QS9yAsv1czg"
duration: "5:17:02"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/QS9yAsv1czg.m4a"
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
[00:00:01] Alright, here we are live. Welcome to my stream today.
[00:00:08] I'm trying to count. I think this is probably the
[00:00:13] Fourth?
[00:00:14] or fifth time I've tried to do server components on stream. It's probably
[00:00:18] the fourth official time in terms of
[00:00:21] part of the title.
[00:00:22] Um...
[00:00:23] Technically, I talked a lot about server components when I was talking about solid 1.6 release, but it's funny.
[00:00:29] Maybe not that funny, but...
[00:00:31] Um...
[00:00:33] Those streams have been my lowest watched streams of...
[00:00:37] pretty much all time.
[00:00:39] and
[00:00:40] The last one with Nex 13 was like a little bit more, sorry let me adjust my mic here, a little bit more traction so to speak.
[00:00:52] There was...
[00:00:53] There's been for quite some time a surprisingly low amount of interest in
[00:00:58] in server components.
[00:01:00] - Yeah.
[00:01:03] Yeah.
[00:01:03] have
[00:01:05] people like signals.  Yeah,  but these things are not mutually exclusive.  It's funny.  There was actually a react tweet,  a couple of them I've seen recently where they're like,  they're treating these things as exclusive.  And it's just so funny to me because like,  I forget which one it was,  but there was one there.  They're like,  you know,  you got server components.  No one's reaching for signals,  but,
[00:01:22] Also, when you have server components, no one's reaching for use state. It's just such a bad
[00:01:27] Um...
[00:01:28] Comparison, you know what I mean? If you have server components, no one's reaching for use effect, like...
[00:01:35] These are like not
[00:01:38] at all the same kind of realm of things.
[00:01:43] Yeah, it was a scheduling thing. I already had the thing. His thing was on Wednesday.
[00:01:49] I had the module extraction thing yesterday.
[00:01:52] and I had
[00:01:55] this stream today.
[00:01:56] And to be fair...
[00:01:58] I was gonna talk about this anyways. If you remember about a month back for my birthday, I cancelled the stream. I was actually gonna talk about
[00:02:05] what I wanted to talk about today on that stream about a month back.
[00:02:10] So it just the timing sometimes works out like this where everyone's talking about server components this week and everyone wants to talk about it. I watched that live stream of  you know Kent
[00:02:20] and Dan and Joe...
[00:02:23] And...
[00:02:24] Watching that was like the final push. I like I just like made the stream pedal and pushed it out the door when I saw that stream because like as  much
[00:02:32] as they
[00:02:33] did a decent job of talking about it and getting things  i think this is a topic that it's best to talk about like outside of react
[00:02:44] because
[00:02:46] People get really into the minutiae of detail, and we will get there, but it becomes this really awkward...
[00:02:59] scenario, like in a part of that stream where they're like remix versus react or whatever,  you know, or next and all this stuff.  And it was like that...
[00:03:07] Like, the framing starts off in the wrong position before you even get started.
[00:03:12] You know, like what can RSCs do for me? And I think it comes completely
[00:03:18] problem in the naming.
[00:03:19] Um,
[00:03:22] So we'll talk about all that today. I'm still killing time right now, right?
[00:03:28] getting people past those Twitch ads. I should actually tweet out here.
[00:03:34] Um...
[00:03:36] that were live just in case a couple people actually do want to talk about this stuff.
[00:03:41] Because as I mentioned,
[00:03:44] Quote Tweet.
[00:03:46] Bye.
[00:03:47] Um, what is it?
[00:03:51] Twitch
[00:03:53] TV slasher.
[00:03:54] Solid.
[00:03:55] I'm not.
[00:03:56] Um...
[00:03:59] - Yes.
[00:04:00] Sorry, I just got caught up in that.  It's just...
[00:04:06] - Thank you.
[00:04:08] I watched this stream actually, there's been a ton of really good server component content this week.  I watched a stream yesterday with Ben Holmes and he was looking at some library that
[00:04:19] Daishi, you know
[00:04:21] Zustand and Jotai and...
[00:04:25] Vaultio or however you pronounce all the state libraries. He's like, Oh, look here a minimal server components framework. And this was really
[00:04:33] cool to kind of see it broken down to its mechanics, but like...
[00:04:38] Thank you.
[00:04:40] I remember when he was experimenting with it.
[00:04:42] the React team was like, hey, you're holding it wrong.
[00:04:45] I think everyone needs to have that moment to get past that we're holding it wrong, which is why I wanted to...
[00:04:53] to do this stream because like funny enough,  like most technology, you know,  that's around right now that we're working on server components,  like as we know the server components are new.
[00:05:09] But...
[00:05:10] structurally, architecturally,
[00:05:13] they share an incredible amount with technology that's been around for almost a decade.
[00:05:18] So I think if you instead...
[00:05:21] look at it
[00:05:22] from
[00:05:23] that perspective, get out of your react zone of life and look at the fact that this is a
[00:05:30] Almost
[00:05:31] a logical place where things could go, then we can have a real conversation about what the merits of server components are.
[00:05:42] Yeah, I mean, this is the thing right now. There's a lot of experimentation going on right now. He tried to use the server components implementation, like reference implementation outside of the React repo, and then he needed Java to build that, and it was crazy. Honestly, if you want to use server components today, use Next.js.
[00:05:58] React team told you that.
[00:06:01] Go use Next.js.
[00:06:03] People are going to play with it, make their own stamp on it.
[00:06:07] but
[00:06:10] Like, honestly,
[00:06:12] These things take refinement.  This is a new...
[00:06:16] and old thing.  But for us in modern declarative front-end world,  it is a new thing.  And...
[00:06:24] there are rules and patterns that should be followed.
[00:06:27] that makes sense.
[00:06:28] But wiring it all together lets you
[00:06:31] currently can get into a mess of things.  So I want to cover all that.  I want to cover the difference between what I like to dub as lakes versus islands versus donuts.
[00:06:41] I know we got all these shape metaphors and a lot of things that include water like streaming and you know like
[00:06:50] I've talked about these at length on my stream previously, but
[00:06:55] It's always better when you have a specific goal or task in mind and purpose.
[00:07:04] - All right, so how are we doing?  People starting to join in?  As I said, I suspect this will be smaller  than some of my recent streams.  There is a surprising little interest in server components.
[00:07:14] Which is...
[00:07:16] bonkers to me because you see it even on Twitter that there has been like building up this week.  But in general, I've noticed that like...
[00:07:23] most people are like
[00:07:24] Why do I need to care about this?  And they're just like, if they see something with server components on there,  like, I'm not going to click on that.
[00:07:30] and
[00:07:33] It's an interesting place to be in.
[00:07:35] to be sure.
[00:07:38] Mm-mm-mm.
[00:07:44] Thank you.
[00:07:45] Thank you.
[00:07:46] *thud*
[00:07:50] *laughs*
[00:07:54] Oh man, you all are great.
[00:07:59] - Yeah.
[00:08:00] Yeah, I mean, it is back to the monolith.  So does this start with a history lesson?  Like, my idea, kind of overarching thing about what we're going to do today...
[00:08:08] It's going to involve a lot of a Scala Draw.
[00:08:10] And it's going to involve looking a little bit at the history, then understanding REACC's design decisions perhaps...
[00:08:19] And then I've been working since last October,
[00:08:22] on documents to describe or spec out how I'd make...
[00:08:26] an agnostic, like not even agnostic, I don't like the term agnostic,
[00:08:30] but make server components for every framework.  But agnostic is a possibility there. Basically,
[00:08:36] If I took Astro today, could I just make Astro my server components and have every framework just have server components?  Yeah.
[00:08:44] I think the answer to that is actually yes.
[00:08:46] But obviously Astro would have to change it.  I'm not telling them to do that.  I'm just putting it out there that...
[00:08:53] We are talking...
[00:08:55] about
[00:08:56] an architectural change.  This is not like...
[00:09:01] people going oh this is react's latest feature like hooks no no this is more like what
[00:09:06] happened between
[00:09:08] going from multi-page apps of the past,  like Ruby on Rails,
[00:09:12] To...
[00:09:13] single page apps like Angular or whatever in the first place.
[00:09:16] Um...
[00:09:17] And I think...
[00:09:20] Whenever there's that kind of level of architectural shift,
[00:09:24] There is like...
[00:09:26] people have to ask the why is it worth it and
[00:09:30] That's a fair question and I
[00:09:33] The answer is often complicated and involve many, many trade-offs.  So let's try and narrow that down a bit today.
[00:09:45] - Yeah, and I wanna, the title of the stream is server components and server functions, and the reason for that, because there's a nod to this, is
[00:09:53] This is...
[00:09:56] All...
[00:09:57] Part of the same thing. I'm not surprised that
[00:10:02] that
[00:10:03] all the solutions seem to be aligning in the exact same zone, having very similar
[00:10:09] even if they've changed their syntax slightly differently.  And...
[00:10:14] I wanna talk about
[00:10:15] So when I talk about this holistically, we're going to be talking about data fetching, we're going to be talking about mutation, we're going to be talking about the whole architecture of the data.
[00:10:23] of what this looks like
[00:10:25] completely from end to end. Not about like what's not in React or Next yet or whatever. No, no. I'm gonna hypothesize here. I don't know what the next guys are working on. I don't...
[00:10:36] I'm sure it'll be cool when we see it, but...
[00:10:38] Like...
[00:10:40] I'm going to talk about this as if
[00:10:43] I've already designed the future framework that we haven't seen yet.
[00:10:48] Because like...
[00:10:49] To me,
[00:10:50] I think it's already there. There's details to work out.
[00:10:55] Um...
[00:10:56] There's a lot of
[00:10:58] Small things, but higher level,
[00:11:01] This is an architecture that covers...
[00:11:04] The range.
[00:11:05] It passed the base set of tests that are required, from my perspective, to be legitimately a thing.
[00:11:16] Okay.
[00:11:19] Is that a good intro?
[00:11:21] that worked for people
[00:11:23] We're also going to have a great This Week in JavaScript, too, as always.  Lots of fun.
[00:11:27] But we'll see how we get there when we get there.
[00:11:34] Have I seen it? "SSR is not server rendering." Don't read into it too literally.
[00:11:40] Um...
[00:11:43] We can talk about that.
[00:11:48] I feel like the average developer doesn't care about the experimental stuff. You're right. They don't and they shouldn't. So, you know, if you come on my stream, you probably care a bit more about the experimental stuff, but maybe it would be helpful.
[00:12:01] if
[00:12:02] we could understand why the experimenting is happening in the first place.
[00:12:06] And the answer to that
[00:12:08] as I said before, is not a single avenue. It's not just because we're bored.
[00:12:14] and it might not even be because you need it.
[00:12:18] Okay? But...
[00:12:21] It doesn't change the fact that this is
[00:12:25] potentially quite a good thing.
[00:12:27] All right.
[00:12:29] Yeah, I'm curious about the downsides of the circuit points. We'll get into that too.
[00:12:37] Yeah, I mean, we have to go back there.  So should we get back there?
[00:12:41] Okay.
[00:12:42] Yeah.
[00:12:44] So my first
[00:12:47] statement here.
[00:12:50] and this is gonna remove all the nuance out of this,  because there's tons of nuance that I'm not gonna say here.  Server components,
[00:12:59] are the island's architecture.
[00:13:02] Okay? Straight up.
[00:13:03] They are the island's architecture.
[00:13:07] There is obviously considerations about
[00:13:10] routing.
[00:13:12] and about
[00:13:13] you know,
[00:13:14] data loading, state preservation, all that stuff. But
[00:13:18] For you coming in today,
[00:13:23] I'm just going to put it out there
[00:13:25] that
[00:13:26] high level you step back
[00:13:30] we are talking about
[00:13:32] you know, an extension, a variation on the island's architecture.
[00:13:37] To understand this,
[00:13:39] I want to talk about it in two modes.  I want to talk about this in terms of
[00:13:43] developer experience,
[00:13:45] And in terms of
[00:13:48] performance we need and or ux we need to talk about both of these to understand why this is
[00:13:55] important or valuable because we spend a lot of time talking about performance and we don't spend time
[00:14:00] talking about, you know,
[00:14:03] what the actual experience of creating this is.
[00:14:08] For all the really nice benefits we have of current modern single page apps,
[00:14:14] There are inherent
[00:14:16] trade-offs and complexities that come with it.
[00:14:19] And
[00:14:20] If you go back to the beginning of the web,
[00:14:23] things were kind of simpler in a certain way.  You couldn't do as much, but things were simpler in a certain way.
[00:14:35] Let me see, Chad, how are you doing?
[00:14:41] Yeah, that's a cool idea. I might consider doing that in the future. Right now, just use chat. I'll do my best. The thing is with chat, I can keep on rolling, be more selective. The thing with the Discord thing, I think the Discord approach might be better with like a audio channel kind of situation, you know, like where like, sorry, like where you're actually like doing the actual dedicated Q&A, because then you can like focus on that. I'm, I'm,
[00:15:06] I'm going to try and keep a narrative stretching through this whole thing.
[00:15:14] Okay.  Okay.
[00:15:16] And actually I'm gonna open
[00:15:18] Twitch in my other window just so I don't miss any Twitch subs and people coming in.
[00:15:23] I always
[00:15:25] miss you when I'm in my stream yard
[00:15:29] So this is just to make sure that I don't miss any of that.  Okay, perfect.  I think we're all set up now.
[00:15:36] Um...
[00:15:38] - Yeah.
[00:15:39] There we go. Okay, cool.
[00:15:41] Alright, so...
[00:15:48] We also can't fetch Astro components from the client yet. Yeah, how should I put it though? That's the wrong way to think about it, in my opinion, and we'll get there.
[00:15:57] Um,
[00:15:57] -
[00:15:59] Okay, so...
[00:16:02] I don't know if I'm gonna need to even escalate, draw some stuff here at the beginning, because I hope that this is kind of...
[00:16:08] common kind of knowledge, but
[00:16:12] If you go to a website...
[00:16:15] Okay, I'm starting right at the beginning here.
[00:16:20] Uh...
[00:16:22] And you go to the, you know, a different website.  Let me find an MPA app.  Yeah, Google search an MPA.  You know, you...
[00:16:30] You do something, you navigate, you post some information, you come to a new page, you
[00:16:34] You know, go to the next page.
[00:16:37] - Yeah.
[00:16:40] basically with no JavaScript,
[00:16:44] I'm sorry, this is like the most basic thing. The experience of actually navigating
[00:16:49] And
[00:16:50] doing updates is actually rather simplistic.  You can do it all in HTML.  You have anchor tags,
[00:16:56] Which...
[00:16:57] lead you to the new place to get request you can
[00:17:00] You have forums, which you can post some information,
[00:17:04] and refresh that page or navigate to a new page.
[00:17:09] Right.
[00:17:10] I'm just putting this out here because you have to start, you don't get to server components from starting from a single page
[00:17:18] app mindset, you get to them from like starting from web fundamentals.
[00:17:24] Right?
[00:17:27] - Yeah.
[00:17:28] Thank you.
[00:17:31] And the reason I'm just bringing this up here is that...
[00:17:35] this model
[00:17:37] is
[00:17:39] Very, very, very, very simple.
[00:17:41] Okay? And this is...
[00:17:43] This is...
[00:17:46] What?
[00:17:46] for all the benefits that come from single page apps,
[00:17:49] you lose a bit of that simplicity. Rich Harris, I'm going to just grab a talk here just in case  people haven't seen it. I'll link it. I'll talk about the details, but you can see it later.
[00:18:01] transitional apps. This is from Jamstack Conf
[00:18:06] a couple years ago. What was it? Jamstack TV. "Have single page apps ruined the web?"
[00:18:13] Right.
[00:18:14] I'm just going to grab this talk
[00:18:17] and put it in here.
[00:18:18] Because this is a great talk talking about the trade-offs of single page apps versus multi-page apps when you...
[00:18:29] you know, consider stuff like routing. You suddenly have a whole new bunch of considerations
[00:18:34] around how you handle the browser state, scroll state, how you handle
[00:18:41] You get new powers because you can handle transitions.
[00:18:45] Um...
[00:18:46] But at its core...
[00:18:51] Um...
[00:18:53] You can basically...
[00:18:56] See
[00:18:57] that these things do have trade-offs. Okay? And I can focus too much on specific trade-offs right now, but I wanted to kind of highlight the fact that
[00:19:09] uh,
[00:19:10] sorry, that
[00:19:12] when you...
[00:19:13] Start along this path.
[00:19:16] there was clear gains of going to single page apps.
[00:19:20] But over time...
[00:19:23] It's caused the model
[00:19:24] to be one that makes sense, a client centric model that requires
[00:19:29] Basically, all the JavaScript in the browser.
[00:19:32] Okay.
[00:19:35] This part is...
[00:19:37] is fairly straightforward.  I think everyone kind of understands that.  Like...
[00:19:41] When you have an SSR app,
[00:19:45] I'm trying to decide if I should bring up a couple of my old articles here because they really cover the
[00:19:50] the key points, but what I wanna get at is,
[00:19:56] SSR as we know it today.
[00:19:57] in single page apps.
[00:19:59] are still single page apps.
[00:20:01] Okay?
[00:20:03] By that I mean you
[00:20:05] might have rendered
[00:20:06] it on the server
[00:20:09] But when you navigate to the next page,
[00:20:12] you need to render the whole thing in the client.  So this has a few prerequisites right off the top.  It means that
[00:20:20] You have a client-side router. Okay.
[00:20:22] It means you need all the code upon route change to fetch that data
[00:20:27] and
[00:20:28] load in
[00:20:31] the code to render that page.
[00:20:36] It means that
[00:20:37] Um...
[00:20:39] What's another one?  It means that if you move between pages multiple times  and you don't want to refetch the data again,
[00:20:48] the browser
[00:20:50] is the one that's aware, like in the browser you're going to have a cache that says, "Hey, I already fetched this data, don't fetch it again."
[00:20:59] In our old multi-page app scenario,
[00:21:06] You could cache the page result.
[00:21:09] But, generally speaking,
[00:21:12] all of those decisions had to be made on the server
[00:21:15] on each page.
[00:21:18] In a single page app, even a server rendered single page app, you are making all those decisions
[00:21:24] in the client. And what this means
[00:21:26] is
[00:21:27] you need JavaScript to do it, which is,
[00:21:29] Fine.
[00:21:30] The router might not be that big, the client rendering, the loading can be deferred,
[00:21:36] you know, for...
[00:21:38] You know the next page you go to
[00:21:41] But the cache is a little bit something large.  Have you ever seen, like if you want a really powerful cache, ever bundle
[00:21:51] Bundlephobia, the...
[00:21:54] Apollo
[00:21:57] The reason I bring out Apollo is...
[00:22:04] Bye.
[00:22:08] The reason I call it Apollo is that
[00:22:12] Apollo has one of the best client-side caching systems. Relay is going to be another one. GraphQL
[00:22:17] found a way for us to...
[00:22:20] have the most control over that client-side cache  because we understood exactly what data needed to be fetched,  grabbed exactly what we needed.  It's like the perfect...
[00:22:29] design for an API for mobile, like for a very client
[00:22:35] heavy
[00:22:36] application.
[00:22:37] but it comes with a cost.  And the biggest challenge we have on the web,  is the web is still like a server client model,  and that cost is not free.
[00:22:46] 43 kilobytes
[00:22:47] plus
[00:22:48] Um...
[00:22:50] 42 kilobytes for React
[00:22:54] would have been over
[00:22:56] pretty much absorbed your complete
[00:22:59] performance budget from an Alex Russell article from about maybe...
[00:23:06] I want to say like five years ago. Five years ago was a long time ago, but I just want to point out that these libraries were basically just as big back then and
[00:23:15] for people using devices, not with, you know, not the top end devices, you know, around the world.  And I'm giving you the performance argument right now, just because I think I need it for setting.  But if you've ever seen Alex Russell's,
[00:23:27] You know, like...
[00:23:28] What is it? What's his letter? Inequality gap. Every year or two he writes
[00:23:33] and he takes real performance numbers, and again, you might not have customers around the world in that, but what he shows is stuff like this.
[00:23:41] where he shows
[00:23:43] how the processing power and
[00:23:46] like the actual devices have changed over the years the scary part about this is
[00:23:51] Yeah, iPhones going up, flagship Androids going up,
[00:23:55] cheap Android
[00:23:57] isn't actually going up, it's actually been flatlining.  So while the budget, the low end has been able to
[00:24:03] almost double, you know,
[00:24:05] since the time that he said this 80 kilobytes. It's not like what everyone else is experiencing, right? It's actually on the low end side.
[00:24:14] these devices here
[00:24:16] are like,
[00:24:19] over a decade on CPU. And when you add slow networks into the consideration, you do all the math,
[00:24:25] Look...
[00:24:26] this might not be your customer, you might not have to worry about it, but
[00:24:31] There is something to be aware of, and this...
[00:24:35] is not
[00:24:36] If we take this graph and line it up with a graph about...
[00:24:41] Um...
[00:24:42] the average size of JavaScript on websites
[00:24:46] You're gonna see
[00:24:47] That
[00:24:49] that the javascript on websites follows like maybe like the galaxy curve like it's keeping in check with the
[00:24:56] with the average, you know...
[00:24:59] flagship Android phone, but it's actually not keeping in check with the low-end devices, okay?
[00:25:05] I-I-
[00:25:11] But I don't think of it...  Yeah, I mean...  Yeah, I mean...
[00:25:21] Okay, so I just want to, for a minute, I'm not saying, like, I'm saying this is something everyone should be aware of, right?  So I wanted...
[00:25:29] to kind of like at the very big basis of our discussion today,  talk about the fact that at one point webpages were literally just link and post a form that,
[00:25:38] Like you didn't have to worry about running to your query cache.  You didn't have to worry about, you know, complexity, about cache invalidation.  Like basically client-side...
[00:25:49] declarative
[00:25:51] single page app development,
[00:25:52] is just...
[00:25:53] Cash manipulation. That's like 90% of your job.  You know, I mean...
[00:25:59] on the mechanical side of the app. Yes, you have to do UI, there's CSS, there's
[00:26:06] styling, there's design, there's interaction, UX, whatever. But I'm saying from like  the performance mechanical side of the job, it's like mostly
[00:26:14] you could view it as like a transformation of a data cache.
[00:26:19] But yeah, who cares about this? eBay cares about it. Meta might sometimes care about it, though it's very funny. There's that great interview from Sunil who was like, Meta doesn't care about SEO.  Yeah.
[00:26:32] but what I'm getting at is
[00:26:35] This is...
[00:26:37] something that storefronts might care about. This is something that sites, the government sites might care about. This is a thing.
[00:26:45] It might not be an important thing to everyone, but it is a thing. So let's just get that out there. So there is incentive
[00:26:51] to address
[00:26:53] the performance aspect of this.
[00:26:55] um
[00:26:57] So
[00:26:58] And
[00:27:00] There is this truth
[00:27:01] that
[00:27:02] you know,
[00:27:03] We...
[00:27:05] to get the performance we want out of
[00:27:07] declarative apps and whatever,  is basically...
[00:27:10] a lot of cash management. I don't actually have a problem with that, right?
[00:27:14] you know,
[00:27:14] Reactivity could be an extension of cash management, perhaps.  Or state is...  Like, you can...
[00:27:20] I feel like you could draw something, some equation.
[00:27:25] the React folks like to do to try and simplify stuff.
[00:27:28] to talk about everything as a function of cash management.
[00:27:34] Thank you.
[00:27:37] -
[00:27:40] Right. So...
[00:27:43] Yeah, I'm catching up with chat, sorry.
[00:27:46] - Thank you.
[00:27:46] Um...
[00:27:52] DX is not, it depends on your company.
[00:27:57] If you're Amazon,
[00:27:59] Probably not Amazon is still using jQuery.
[00:28:02] Um,
[00:28:03] Because they literally couldn't use...
[00:28:07] like the modern declarative frameworks.
[00:28:12] We saw stuff like, I remember when Netflix removed the React of their client apps to improve performance.  They still server rendered with React, but they removed it out of the client to improve performance.  Performance hits us where we least expect it.
[00:28:29] or maybe where we most expect it, but just...
[00:28:32] practically don't have time to deal with it.
[00:28:36] So...
[00:28:40] I just...  I'm just...
[00:28:42] I just wanted to kind of like, I don't,
[00:28:45] I'm not going to come here...
[00:28:46] and be like force you down this but there's a reason why frameworks are thinking about this  because at a certain point like this is just the framework we're not even talking about the fact
[00:28:56] when you add interactivity, it's more expensive.  Of course it is.  You have JavaScript, you want it to do something nice,  it's gonna be more expensive.  We can accept that.  The problem is if you absorb your whole budget  at the beginning,
[00:29:06] What are you going to do?
[00:29:08] To be fair,
[00:29:11] In his...
[00:29:12] In his
[00:29:14] 75th P75 percentile, he basically recommended that
[00:29:20] we can target a much higher rate now.  We can actually...
[00:29:24] I think he suggested that the size of JavaScript
[00:29:28] on a page can be something like
[00:29:30] I want to see...  It's like 300 kilob...  Okay...
[00:29:34] We can now afford 150 kilobytes of HTML, CSS, and fonts, and 300 to 350 kilobytes of JavaScript gzipped.
[00:29:43] Okay? Now.
[00:29:44] not a couple years ago, now.
[00:29:48] If you go back, as I said, five years ago, his recommendation was like 130 kilobytes.
[00:29:53] And this recommendation is good for
[00:29:58] sites that don't care about page load performance.
[00:30:00] - My recommendation personally is
[00:30:02] Take any Alex Russell number and half it.
[00:30:05] if you care about e-commerce.
[00:30:08] Um...
[00:30:10] But for the average developer, he's even suggesting that this is basically the reasonable range.
[00:30:17] Okay.
[00:30:18] Which is an interesting thing, because I don't know if people saw
[00:30:21] Let's see if I can actually find it.
[00:30:24] Let's search. Was it Fred?
[00:30:27] FKS, yeah, there he was.
[00:30:30] I was going to talk about this week in JavaScript, but I think it fits into this discussion right now a little bit.
[00:30:36] Um...
[00:30:40] Fred from Astro.
[00:30:43] did a performance report, he called it, where he took real data from the HTTP archives
[00:30:48] and looked at core web vitals and actually looked at the performance of frameworks.  And keep in mind there's a lot of historical
[00:30:54] stuff here, but he used WordPress as basically...
[00:30:59] the norm here. And obviously newer frameworks are going to score better here and different  architecture frameworks are going to score better here. But
[00:31:06] It wasn't just this thing, it was...
[00:31:10] sites passing imp,
[00:31:11] I...
[00:31:12] Lighthouse
[00:31:14] There was...
[00:31:15] He did a correlation between JavaScript size...
[00:31:19] Um...
[00:31:20] and
[00:31:21] and page performance. And basically the average Astros site
[00:31:27] here was
[00:31:29] around 277 kilobytes within that ridge that Alex was talking about. Svelte kit 323 so still within the range and then as you move out
[00:31:39] We get it. They were getting
[00:31:41] Um...
[00:31:42] to
[00:31:42] Next and Nuxt sites being close to about 900 kilobytes.
[00:31:47] This all checks out to me. This is why people care about the stuff on the performance side. It's just not every site is going to do it.
[00:31:55] But, like, if you could just...
[00:31:58] not have this as a worry
[00:32:01] you know, there'd be benefit.
[00:32:10] There's been studies...
[00:32:12] multiple studies to prove otherwise.
[00:32:14] I have...
[00:32:18] I'm actually
[00:32:20] Almost I haven't obviously
[00:32:23] done the studies myself, but I'm almost as certain
[00:32:27] about this...
[00:32:29] being true as about anything.
[00:32:33] Um...
[00:32:37] So, yeah.
[00:32:39] Like...
[00:32:45] Yeah, I mean, I can pull some of them out. I think someone had a thread where they actually gathered dozens of these studies together. Or if you go to the quick,
[00:32:53] website you might be able to find them.
[00:33:00] Um...
[00:33:02] I'm trying to remember the eBay one they did a few years ago. What was it? eBay?
[00:33:06] per 100 milliseconds
[00:33:09] I mean, some of these things are a little bit
[00:33:13] like
[00:33:15] pushed and they don't actually show all the
[00:33:18] internal numbers. I've seen internal reports that
[00:33:22] we don't publish about the correlation.
[00:33:25] Um...
[00:33:28] Honestly, I'm ashamed I don't have this stuff off the top of my fingertips right now.  I'm sure Alex's blog has dozens of examples somewhere in it.
[00:33:45] So like, generally speaking,
[00:33:48] Amazon, eBay, large e-commerce has made a huge case around this.
[00:33:56] that like they're,  they're,  um,  uh,
[00:33:59] Like the direct correlation. Do you know how crazy it was? Kroger.
[00:34:04] Let me see if I can find his articles. Let me...
[00:34:10] Um...
[00:34:12] Tight.
[00:34:18] I...
[00:34:18] He's see if I...
[00:34:20] or was it we had him as a guest world
[00:34:24] Oh...
[00:34:26] What was it?
[00:34:27] worlds
[00:34:28] fastest
[00:34:29] website
[00:34:31] and other mistakes
[00:34:37] Making the world's fastest website and other mistakes.
[00:34:39] He basically... okay, thank you, thank you, someone posted it. Yeah, Jazzy Pants already posted. He basically...
[00:34:50] He had 20 kilobytes to work with.
[00:34:52] for his budget. I think that's insane, to be fair.
[00:34:56] But it was so important to them.  They basically said, yeah, you have 20 kilobytes.
[00:35:01] to make our site work.
[00:35:05] Like, this isn't, like, not even remotely debatable from my perspective.  Like...
[00:35:12] Like...
[00:35:12] *sigh*
[00:35:14] the
[00:35:15] It's...
[00:35:16] Anyway. Um...
[00:35:19] This is a great article series.
[00:35:23] He goes in depth of every trick in the book he could try to do to get performance.
[00:35:30] Okay.
[00:35:34] Yeah, I mean...
[00:35:35] Thanks. A lot of these
[00:35:37] these articles, I'm going to post this in so YouTube gets it as well.  But a lot of these articles,
[00:35:46] If you look around, you will find them.
[00:35:51] Okay.
[00:35:54] *thud*
[00:35:56] Thank you.
[00:35:57] Thank you.
[00:35:58] Okay, anyway.
[00:36:00] Thank you.
[00:36:01] There is some acknowledgement that there's a performance consideration here.
[00:36:11] Um
[00:36:13] And yeah, I mean, I wanted to start here.  I didn't really completely want to start here because of the problem is like people get hung up on it.  Like, well, I don't have this problem.
[00:36:24] That's not where the conversation should
[00:36:27] really proceed from.
[00:36:29] You have to understand that
[00:36:33] there is complexity that comes with managing stuff on the client side as well, because innately now you're saying I'm responsible for the state of everything, which is fine. It just means that you kind of have to like,
[00:36:45] Emulate the browser inside the browser.
[00:36:50] Okay. So, like...
[00:36:54] We've seen over the last several years...
[00:36:57] A simplification.
[00:36:58] Um...
[00:37:00] in how people want to manage this.  Because...
[00:37:05] Now I'm going to be in single page app mode, right?  Like I'm going to get in that mindset and I'm going to talk about what we do.  Because GraphQL in 2015, Relay, amazing.
[00:37:16] literally solves the problem and you're just like it's hard to picture
[00:37:19] Like...
[00:37:20] a better technical solution, more granular, more powerful than what we do there.
[00:37:26] Except, like...
[00:37:28] You just used up your budget.
[00:37:38] See, I'm going to disagree here.  And that's like, I don't.
[00:37:44] These are the takes that I'm trying to like...
[00:37:46] get past today because it's server components aren't an optimization trick. They're an architecture.
[00:37:53] Um...
[00:37:56] We'll get there.
[00:38:00] Um, but I want to, I want to
[00:38:04] I want to explain this from the DX point and think from the DX point
[00:38:08] we can get there by looking actually at the evolution of stuff. One of the
[00:38:12] things that made me feel
[00:38:14] the most, like, why I had to do the stream after seeing Kent and Dan talking,  was that Dan didn't understand how remixes worked.
[00:38:22] Like it's very clear. Part of it was he didn't want to put words in people's mouths because he didn't want to assume.
[00:38:28] But
[00:38:28] because of him not understanding where Remix
[00:38:32] worked, he couldn't talk to it well enough to tie the bow around it, put the chains together.  Because Remix is part of the game.
[00:38:44] of a scale
[00:38:45] of solutions, a spectrum that have been...
[00:38:48] working towards getting us to where we're going.
[00:38:52] Yeah, they both didn't understand. And that's the unique value that we can do on the stream because
[00:38:59] I think I understand both of them.
[00:39:04] you
[00:39:07] Right.
[00:39:08] Because, okay, so,
[00:39:10] - Okay.
[00:39:11] I'm just gonna part putting down notes to give a timeline and then we can like embellish on this but like let's start here.
[00:39:18] We had the simplistic...
[00:39:21] Thank you.
[00:39:21] You know, I mean, let's start with like jQuery or something. I don't know.
[00:39:26] Can you guys see? I know this is really small. Why can't my default be bigger? Is there like a zoom setting that I can just... I don't want to zoom the percentage. I'd rather... I guess I can zoom.
[00:39:36] I can zoom the percentage.
[00:39:37] Like, it's almost like I'd rather just make the font larger.
[00:39:41] Whatever.
[00:39:42] - Okay.
[00:39:43] Um...
[00:39:45] So we're gonna start with jQuery.
[00:39:48] Actually, no, I'm not going to start with jQuery because it's too far back.  I want to start with single page declarative apps, okay?
[00:39:56] right so
[00:39:58] earliest versions of this
[00:40:01] were like
[00:40:02] really coarse-grained, you like declarative,
[00:40:07] App.
[00:40:12] fetch on mount
[00:40:14] or action
[00:40:17] Fetch and set state.
[00:40:19] I'm just gonna kind of start there.
[00:40:22] declare a relative.
[00:40:24] - Yeah.
[00:40:25] Right.
[00:40:30] Then it was like...
[00:40:32] - Thank you.
[00:40:33] I'm gonna jump ahead, but
[00:40:34] we started realizing we had to do better on caching and
[00:40:39] We got GraphQL, okay?
[00:40:42] I remember I was talking to Dan and he said that server components came out of conversation about like
[00:40:47] They were internally in meta going like in 2015, going, okay, what comes after GraphQL? That's where this came from. There's a direct lineage here from their work on relay to the work on server components.
[00:41:02] Right.
[00:41:03] But this declarative app fetch and set state kind of mentality, you know,
[00:41:08] was basically the whole first few years.  GraphQL changed it because it was like...
[00:41:14] You know, you might put like a simple cash somewhere.  Like, I guess I missed a step, didn't I?
[00:41:19] I missed a step.
[00:41:20] You're right.
[00:41:22] Cash in a global store, right?
[00:41:26] We, you know what I'm saying?
[00:41:29] Use Redux, right? You're right. I did miss a step, right?
[00:41:36] And it doesn't matter which
[00:41:42] It doesn't really matter
[00:41:48] Yeah, I mean, this is technically true, but I don't like this framing because it gives people the wrong impression that it's like there is data fetching, but it's better to view this as a.
[00:41:58] a architecture like a single page app for an MPA,  than I think is to view it as like a data fetching mechanism.  This is what causes the confusion.
[00:42:06] Okay.
[00:42:09] It confused me. I actually wrote, it's so funny. I wrote an article
[00:42:13] that was like understanding server components or something.
[00:42:18] It's funny, where was it?
[00:42:19] - Ah.
[00:42:21] Let's see, server.
[00:42:23] components learning to appreciate react server components in march
[00:42:27] 2021. So this is three months after they dropped that initial server components demo.
[00:42:33] And I look back at this
[00:42:36] In the beginning there was Marco. This is true.
[00:42:38] But I look back at this article
[00:42:41] And...
[00:42:43] I was completely wrong in my understanding of server components.
[00:42:46] And even though I had this realization
[00:42:50] in this article about how they worked and stuff,  and I managed to get a better perspective,  and I shared this with everyone.  I feel like most people coming to Server Components this week...
[00:42:59] are getting to this stage right now, and I need them to jump another-- it took me another year to get past this.
[00:43:06] Like, this was my first, like, it took me three months to get to this point, and then it took me another year to actually realize what was going on completely.
[00:43:13] I feel like
[00:43:14] We can compress that into a week for most people if we do this well.
[00:43:18] Um...
[00:43:19] - Okay.
[00:43:20] I've had a lot of time to think about this, but...
[00:43:22] What? What? I...
[00:43:24] Thank you.
[00:43:29] Yeah, and that's why I did the stream, because honestly, I didn't feel like I got the clarity. I already knew the answer, but I didn't feel like it gave the right clarity for everyone. After that stream, I was in discords discussing...
[00:43:43] with people, like...
[00:43:45] about the whole thing and they're talking about, "Oh, but I would use this and doing this."  A lot of the arguments that I'm seeing coming up in chat now
[00:43:51] And I'm like, no, no, no, you guys still don't get it.
[00:43:53] Um...
[00:43:55] So hopefully we'll get to a better place.
[00:44:00] -
[00:44:03] so
[00:44:04] cash in global stores, then we get GraphQL, okay?  But you know what came after GraphQL?
[00:44:12] React query.
[00:44:13] And I want to...
[00:44:16] I want to point that this
[00:44:18] is the turning point.
[00:44:25] This was the turning point.  Because...
[00:44:28] This
[00:44:29] is the most...
[00:44:31] optimal
[00:44:32] client side
[00:44:34] solution.
[00:44:38] React query is less efficient.
[00:44:40] it doesn't have normalized caching or whatever it's just it's just a document
[00:44:45] Query cache.
[00:44:50] And
[00:44:52] At some point...
[00:44:53] People using GraphQL, using Apollo, doing all the fragments, doing all that, were just like...
[00:44:58] DX-wise, they're like, screw this.  I don't want to worry about that.  It's OK.
[00:45:04] Maybe I'll refetch on a new page anyways.  Like if I'm going to the list view to the details view,  and I don't get the share for the data fields,  like not the end of the world.
[00:45:13] It's okay.
[00:45:15] You know.
[00:45:17] you know, normalize cache, you know, remove some duplication. I'm not going to sweat about it.  If I do, I'll do something special and write to the cache myself, maybe.
[00:45:25] But honestly, I probably never will.  And what was interesting to me about React query  wasn't just that it made the cache mechanism, you know,
[00:45:34] Much simple.
[00:45:36] Simpler at the cost.
[00:45:38] of, you know,
[00:45:39] performance.
[00:45:41] was that
[00:45:43] - Okay.
[00:45:44] people got even lazier
[00:45:46] than that. They're like, "Oh, screw it. I don't want to deal with the stupid cash." They're
[00:45:51] invalidate
[00:45:53] on mutation.
[00:45:55] Done. Like, just...
[00:45:57] Just go back to the server and fetch based on the key.  And if you want to understand what that means,  that means two trips.
[00:46:05] Right?  Like, because...
[00:46:08] Essentially
[00:46:10] you're, you know,
[00:46:12] I'm terrible at these side by side diagrams here.  But what I'm getting at is with React query view of the world here,
[00:46:22] Like...
[00:46:23] let's just put the this is this is for mutation i'm talking about right  you you do the mutation
[00:46:29] So what am I gonna put here?
[00:46:31] Client.
[00:46:35] server, okay?
[00:46:37] Okay.
[00:46:40] So you do mutation.
[00:46:43] Take some time.
[00:46:45] Server does the update.
[00:46:47] and sends back the response.
[00:46:49] Thank you.
[00:46:50] Send mutation.
[00:46:59] Right.
[00:47:05] Response. Okay.
[00:47:08] We're okay. We send the mutation, we get the response sometime later.
[00:47:13] Classically, what you would do
[00:47:15] is you'd use the response to update...
[00:47:18] update the cache. Okay? So,
[00:47:20] Over here we'd be like, "Okay,
[00:47:22] update.
[00:47:27] update cash okay where's my arrow here
[00:47:32] update
[00:47:34] update cache, okay?
[00:47:40] And then we'll do another one, and it'll be like render--
[00:47:44] You render...
[00:47:47] and these basically happen at the same time.  So this is what was happening
[00:47:51] you do very granular cache updates and this is what would be happening if you did stuff smart way and
[00:47:57] We can give maybe a little bit of color here and make like a little...
[00:48:03] No, not color for that, sorry.
[00:48:07] I love sometimes
[00:48:09] playing with the Skelliger, okay. Get my box
[00:48:12] make it a little color.
[00:48:14] So, you know...
[00:48:16] We're spending a little time here.
[00:48:19] Let's fill it in.
[00:48:22] Chuk chuk.
[00:48:23] kind of doing this, right?
[00:48:28] And whether you're doing a super granular GraphQL,  or you're updating the cache on mutation with React Query,  it's kind of the same process.  But people kind of like,
[00:48:37] Even with the keys, they still kind of started doing something different.  They're just like...
[00:48:41] No, instead of doing this,
[00:48:44] Thank you.
[00:48:45] Let's just...
[00:48:47] Let's just
[00:48:49] like get lazier almost. Let's just
[00:48:52] Instead of doing this,
[00:48:54] So this is like...
[00:48:56] What are we going to call this one?
[00:49:00] - Yeah.
[00:49:02] plane.
[00:49:04] Right cash.
[00:49:07] Instead, over here, we're gonna do invalidate.
[00:49:10] This is why I view this as a different step. Even though they...
[00:49:15] They did both.
[00:49:17] what ended up happening is
[00:49:21] - Yeah.
[00:49:27] We started doing this.
[00:49:42] Okay.
[00:49:45] This box can be a little bit shorter.
[00:49:51] Okay?
[00:49:52] -
[00:49:55] The length of the boxes don't really matter.
[00:49:58] I'm just trying to
[00:49:59] show visually what's going on here.
[00:50:02] - Thank you.
[00:50:04] And
[00:50:05] You know what? No one really cared.
[00:50:08] Like, you can go...  Like, this is clearly worse.  You don't get to actually...
[00:50:12] update the UI
[00:50:14] until
[00:50:16] here
[00:50:17] Like maybe you combine this and do like an optimistic update and then use the invalidate to like ensure that you have the right data.  But like this pattern...
[00:50:31] I'm going to go ahead and get a little bit.
[00:50:32] this pattern like is...
[00:50:36] is very common here.  And,
[00:50:39] If you take this
[00:50:41] Because what they did was they reduced, they had really complicated cache and they reduced it down to a document cache.  And if you want to get an idea of difference in size, if you've ever seen Urkel,
[00:50:51] Urkel, Urkel.
[00:50:53] bundle phobia
[00:50:57] Sorry, I should just...
[00:50:57] keep Bundlephobia open. I don't like using Bundlephobia because it doesn't have tree shaking, but like
[00:51:03] Um...
[00:51:03] - Yeah.
[00:51:06] Ah.
[00:51:07] Like, what I'm getting at is like,
[00:51:10] Significant reduction. I think Tanstack query could also be around the size of
[00:51:17] Tan stack
[00:51:21] I don't know what query core looks like these days.  They have way more features.  So it's like unfair.  Yeah.
[00:51:26] You know, SWR.
[00:51:31] Um...
[00:51:33] I forget if they have key based invalidation. They must have key based invalidation. But what I'm trying to get at is
[00:51:39] This drastically...
[00:51:41] She said...
[00:51:43] saves the amount of JavaScript and logic here.  It's like way easier.  Instead of being like, okay, now I'm getting this new data  and then I need to like add it to this key.  Maybe there's already a list there.  I need to append that data.  Have you ever seen what it looks like?
[00:51:54] pagination...
[00:51:56] with...
[00:51:58] Apollo like
[00:52:00] I don't...
[00:52:03] Mm.
[00:52:04] Okay.
[00:52:05] Mm.
[00:52:07] No, I don't want the actual query pagination. I want to know
[00:52:12] I don't know how much I should be looking at this, but...
[00:52:15] The logic for writing the cache
[00:52:19] is one of those
[00:52:21] People in the chat.  Yeah.  I don't have to show you.  You believe me.  Um...
[00:52:28] Or...
[00:52:30] Okay, sure.
[00:52:36] - -
[00:52:37] But...
[00:52:38] -
[00:52:39] I just want to kind of put out there is like you start running like a bunch of logic and people screw it up all the time with cash management and then eventually
[00:52:48] A lot of people are just like, screw it, I'm going to invalidate anyway.
[00:52:52] and this is naturally what happened which is why tan stack query caught on because people were just like
[00:52:57] I'm sick of wrestling with it.  You know, like...
[00:53:00] They're not really noticing this. This is a big delay.
[00:53:04] Like, this is...
[00:53:06] Definitely increasing your network thing, but sometimes people are more forgiving of those kind of interaction delays because at that point they perform the action and they know some work has to be done.  If doubling the time of that work, as long as it's not too offensive, might not actually make that much of a difference for people.
[00:53:22] might not. Depends on affordances.  But I'm just saying, this was a move...
[00:53:27] But you can see this is what we call kind of a waterfall, okay?
[00:53:32] This is a type of waterfall.  It's not the typical waterfall of dependent data,  but this is a waterfall.  Go to the server, come back,  you go to the server to come back, okay?
[00:53:46] Yeah, it's a premature optimization, let's say, right?  Now...
[00:53:49] Follow me
[00:53:51] a little bit further here because
[00:53:53] Do you know what I'm going to put next on this list?
[00:53:58] Remix.
[00:53:59] Okay.
[00:54:02] For me, Remix is an evolution of this and each once we got past that
[00:54:08] that fulcrum point of GraphQL
[00:54:12] we've been going downhill.  And I don't mean that in a bad sense.  I just mean we've been going downhill.
[00:54:16] Okay?
[00:54:17] Because at that point,
[00:54:19] Remix was like,
[00:54:21] Look, we know what data is...
[00:54:23] relevant for your page because the writer. So instead of invalidating
[00:54:27] on a key and only grabbing specific stuff,
[00:54:30] And not as granular as like...
[00:54:32] fields, this is like invalidate on fields or right to fields, this is like invalidate on keys,  they're like, we're just going to invalidate the whole route, like screw it.
[00:54:41] And you might be going like,
[00:54:42] Whoa, that's extreme, but
[00:54:44] Like, think about it.
[00:54:49] Thank you.
[00:54:49] Thank you.
[00:54:51] invalidate
[00:54:54] whole road.
[00:54:56] Right?
[00:54:59] Thank you.
[00:55:00] Right? Like, this is the fundamental thing here.  What Remix actually did that was absolutely genius
[00:55:07] is we haven't talked about optimistic updates here, but like here,
[00:55:13] If you want to do optimistic updates on this system,  we can add another line here.  You can basically do something along the lines of...
[00:55:21] write
[00:55:23] optimistic
[00:55:26] to cash, right?
[00:55:28] And...
[00:55:32] Maybe I can...
[00:55:33] Yeah, that's even long.
[00:55:36] Right.
[00:55:36] we can kind of
[00:55:40] Put this in here.
[00:55:41] while this is going,
[00:55:43] This makes me want to
[00:55:45] move our whole diagrams
[00:55:48] It won't let me scroll while I'm selecting.
[00:55:51] sorry  just
[00:55:52] Chuk, chuk, chuk.
[00:55:53] wants me to remove our whole...
[00:55:56] universe over here a little bit further this way render UI is not going to come with us, either is invalidate, that's fine.
[00:56:02] to do
[00:56:04] Do-do-do.
[00:56:06] But if we...
[00:56:07] *sniff*
[00:56:08] I love how random things just get attached.
[00:56:11] Okay.
[00:56:13] We can add ourselves another box here.
[00:56:19] And...
[00:56:20] Fill it in.
[00:56:22] like
[00:56:23] We can see the optimistic updates while this is happening.
[00:56:30] But it involves writing to a cache.
[00:56:32] And for CanStack,
[00:56:34] it was actually the same pattern, except you saw the optimistic updates
[00:56:39] Um,
[00:56:46] *scoffs*
[00:56:47] This whole time.
[00:56:48] Right?
[00:56:53] Okay?
[00:56:55] Everyone still with me?
[00:56:57] Right? And
[00:56:59] Thank you.
[00:57:01] What Remix did, which is the actual genius part of this thing that they never get credit for, they always get credit for like, nested routing and other stuff that maybe they didn't even do originally.
[00:57:12] - Yeah.
[00:57:12] is that...
[00:57:16] The problem with this is you still need to cash, right?
[00:57:19] So if you invalidate the whole route,
[00:57:23] And then...
[00:57:24] funnel your optimistic updates
[00:57:26] into state instead of a cache, ephemeral,
[00:57:34] femoral
[00:57:37] optimistic
[00:57:41] Updates.
[00:57:48] If you do this,
[00:57:49] You don't need a client-side cash.
[00:57:55] That is...
[00:57:57] It's very smart because...
[00:58:00] You're basically doing this anyways. This is how Remix works too. It's a waterfall.
[00:58:04] you
[00:58:06] Post an action.
[00:58:08] Get a response.  The response is like redirect to another page.  The client router goes, okay, I'm going to redirect or invalidate.
[00:58:15] It goes to the other page, starts rendering, you know, goes to the data loader, goes, "Oh, I need to fetch on the server again."
[00:58:22] And then it gets there and then it finishes the UI.  So essentially...
[00:58:26] Remix
[00:58:28] is this model, but they got rid of the cache.
[00:58:36] Yeah. I mean, this
[00:58:38] I feel like this is burying the lead.
[00:58:40] The whole route.
[00:58:42] No cash.
[00:58:43] Okay.
[00:58:45] Thank you.
[00:58:50] Thank you.
[00:58:50] Are we following this evolution?  Developers getting lazier and lazier and lazier and lazier,  to the point that essentially,
[00:59:00] With Remix, you just post a mutation
[00:59:03] Get some state.
[00:59:04] to show your optimistic updates, UI updates.  There's a reason people like Remix. It is so much simpler.  There is zero cache management.
[00:59:15] Right?
[00:59:20] So some people don't like the forms, but do you see a similarity?  Now, if you ignore all these waterfalls going on,
[00:59:30] And you think about Remix in the term of
[00:59:32] a form post,
[00:59:34] that
[00:59:36] Um...
[00:59:37] goes, you know, redirects to a different page, like ignore the fact that this is kind of inefficient.
[00:59:44] You're back at
[00:59:45] a sort of MPA DX experience, okay?
[00:59:50] Right?
[00:59:51] Because by removing the client side cash,
[00:59:54] You can look at stuff as just like...
[00:59:57] like a form post and anchor links.
[01:00:00] ん
[01:00:01] ありがとうございました。
[01:00:05] ありがとうございました。
[01:00:06] ん
[01:00:08] はい。
[01:00:10] はい
[01:00:12] はい
[01:00:16] 私は、私は、私は、私は、私は、私は、このディックスのディックスを探していることを考えています。
[01:00:20] because
[01:00:22] フェチングのディエクスタンポイントはないです
[01:00:26] I don't think soWe'll get into that in a thing
[01:00:32] はい
[01:00:37] ありがとうございました。
[01:00:38] この問題は、このチャンジでリミックスを持っていたのですが、このように「また新しい APIを書いてもらった」
[01:00:46] 人が本当に怒られるのに
[01:00:49] このようにして、この一つの一つの一つの一つのアップを作った
[01:00:53] おやすみなさい。
[01:01:05] うん
[01:01:09] 回答を回答することがある。
[01:01:12] ああ
[01:01:12] アブラムは、その人が言われているのです。
[01:01:18] はい
[01:01:18] うん
[01:01:19] 最近 でも 今のところを見ることができるのは
[01:01:26] この動きの動きを動かすことができる
[01:01:30] それは
[01:01:31] オーブンのディヴェロパーエンス
[01:01:34] マンジングキャッシュs
[01:01:39] ありがとうございました。
[01:01:40] カシェインは必要なのです
[01:01:44] うん
[01:01:46] フォーマンス。でも、彼らが
[01:01:51] このように、このように、このように、
[01:02:03] また次回のミュータインです。
[01:02:05] うん
[01:02:06] ちょっと後ろに
[01:02:15] ディヴェローパーエヴィネスティーパインスタンポイン
[01:02:20] 私たちが、このようなことを考えています。
[01:02:32] コンビニングのアプリスティングをしていると、本当に難しいアプリスティングをしていると、
[01:02:39] いないといないといない
[01:02:41] インクレッドリー キャラフル ティー
[01:02:44] でも、それが、それを上げることができる。
[01:02:56] アップス
[01:02:58] どの
[01:03:00] 私たちは
[01:03:02] もおかしいかもしれません。
[01:03:10] 計画を通して、この道路を通して、一歩に行ったら、一歩に行ったら、一歩に行ったら、一歩に行ったら、一歩に行ったら、一歩に行ったら、
[01:03:26] でも
[01:03:26] とても
[01:03:28] リアクト
[01:03:29] 自分の意味を持っていると考えているのが、 必要なのならないと考えているのです。
[01:03:36] そう
[01:03:39] このことがあるのです
[01:03:41] このようなことを解説していると、ここからは30キロバイトを下にしているときに、
[01:03:47] リアクリリーとリミックス
[01:03:50] まあ、私たちのキロバイトを取り出すことはできるだけです。私たちのドキュメントを取り出すことができるだけです。
[01:03:57] でも、このことが面白いです
[01:04:01] このようなものを
[01:04:03] 実際に、基本的に、変化の価格を変えることができます
[01:04:07] このデータルを話すことができるようになりました。実際に、実際に、実際のパフォーマンスを作ったことができるようになりました。
[01:04:15] うん
[01:04:17] the size of our javascript is not
[01:04:20] 小さくらく
[01:04:23] 今度はこのようなことをしています
[01:04:32] いっ
[01:04:33] はい
[01:04:35] 私は非常に良い理解を知っているのですが、私は何かを見ることができるのですが、私はそれを見ることができるのですが、
[01:04:40] このように、私たちのことを解説しています。このようなことを解説しています。
[01:04:47] アラウンド
[01:04:48] 分...
[01:04:49] いっいっいっいっいっいっいっ
[01:04:51] if I'm gonna be like...
[01:04:53] それは、少し辛い。
[01:04:57] このように、私はこれを作ることができる。
[01:05:00] はい?
[01:05:01] セーブのコポンエンスは
[01:05:07] セーフ
[01:05:08] ファンクチンズ
[01:05:10] プラスファーコンポンエンジン
[01:05:22] おやすみなさい
[01:05:31] はい
[01:05:32] 私たちの変化があると
[01:05:36] このようなものを一緒にすると、
[01:05:44] はい
[01:05:45] 私は本当に言っていたら、
[01:05:48] 今までこのようなイベントを作ったら、
[01:05:51] server rendering does not make the JavaScript payload smaller
[01:05:53] はい
[01:05:56] コードを保存することができるようになります。
[01:06:00] です
[01:06:02] この動画を見てみましょう。 私はこの動画を見てみましょう。
[01:06:08] このページを作ったら
[01:06:09] はい
[01:06:10] アスティックの中で
[01:06:12] Twitter is a single page app because of the flickering but um
[01:06:18] ぽ-
[01:06:19] 私は全てのデータを移動することができるようになります
[01:06:24] server rendered, we need all this data to make this interactive and
[01:06:30] 次のページを選択して、次のページを選択して、
[01:06:34] この上の部分は、リランドの部分を少しずつ作りにすると、
[01:07:00] センターを移動すると
[01:07:06] はい
[01:07:07] TRPCは、TRPCは、Fetching Protocolの拠点です。TRPCは、TRPCは、
[01:07:16] 4
[01:07:19] うん
[01:07:20] はい
[01:07:21] なんか
[01:07:22] rpcは、とても、テープのために、テープのために、テープのために、
[01:07:28] rpcは、プレイクリスタイルを使って、プレイクリスタイルを使って、
[01:07:34] I...
[01:07:36] TRPCは、私はグラフQLのクライアントを使って、 クライアントを使って、
[01:07:44] うん。
[01:07:45] but it's like the protocol underneath for the communication.TRPC for me is like that. It's underneath it.
[01:08:00] OK
[01:08:02] はい、私の意味があります
[01:08:06] いっ
[01:08:07] 私は、少しのメントをすることができるようになりました
[01:08:11] Twitter page
[01:08:13] そして考えてみてどうしても全ての JavaScriptを選ぶとしているのですが
[01:08:19] 何をするとしてもらえないの?
[01:08:24] まずは
[01:08:26] 私はこのようにしてみてください。 私はこのようにしてみてください。
[01:08:31] うん
[01:08:32] はい
[01:08:32] ありがとうございました
[01:08:34] 春...
[01:08:37] さて、さらに、さらに、さらに、さらに、さらに、さらに、さらに、
[01:08:42] なんか
[01:08:43] Twitterを作ったら、
[01:08:46] 2...
[01:08:48] サイドバー
[01:08:50] 中…
[01:08:53] 私のフロフィール
[01:08:56] ちん
[01:08:58] フィーズ
[01:09:00] 中指
[01:09:04] じゃあ…
[01:09:05] アナヴバーを入れます
[01:09:09] または
[01:09:11] Navbarを使用して
[01:09:15] OK
[01:09:17] はい
[01:09:22] The thing is
[01:09:24] この例の例を紹介しているのは、この例のリミックスネスティックルRouterのページを紹介します。この例を見てみて、
[01:09:32] 内部のボックスを
[01:09:34] 次は、私が取り組みを取り除くのがあります
[01:09:36] I might not be able to
[01:09:39] はい、このアドモスのボックスは白いです。
[01:09:42] 次の box inside...
[01:09:44] which is...
[01:09:48] うん
[01:09:49] これは全てのことを意味することができるのです。
[01:09:57] これを見たことができたのか?
[01:10:02] はい、OK、OK、OK
[01:10:05] 私は実際に彼らは
[01:10:08] このように、このように、私のページを作成しています。
[01:10:13] ブルー
[01:10:16] そして、
[01:10:21] このページを
[01:10:24] フィードセクション
[01:10:26] このブルーは、こういうのが
[01:10:27] 私のために
[01:10:28] でも、私は、
[01:10:31] この…
[01:10:36] Light modeIt's so much better for getting like
[01:10:39] 強い力がある
[01:10:42] これは私はこのボックスを取り付けます
[01:10:48] うん
[01:10:50] フィードスは、色々な色を選択している
[01:10:54] スライド
[01:10:59] このように
[01:11:01] これはこれからの部分です
[01:11:03] これが、はい、はい
[01:11:05] Twitter
[01:11:07] what I'm trying to get at is that like
[01:11:13] ブラウン、グリーンの部分は
[01:11:16] コードスワップイン
[01:11:19] I'm gonna bundle along those lines
[01:11:21] 基本的に
[01:11:24] この白い部分は
[01:11:27] マイトネーバー変化
[01:11:28] 少しの部分を変えたら、 少しの部分を変えたら、
[01:11:31] 私は、私のページを入れます。 色々のページを入れます。
[01:11:37] また次のタブを入れます
[01:11:42] 次のグリーンのブundle
[01:11:44] そして、私は、
[01:11:47] 私のプロファイルをすると、このブラウンドのブラウンドを持っているのが、このブラウンドのブラウンドのことを説明します。このブラウンドのコードは、このブラウンドのコードを切り替えたり、このブラウンドのコードを切り替えたりします。
[01:11:58] You need all of that JavaScript when you initially load the page.There's no easy way to not send all that JavaScript.Because if you pretended that we just sent the JavaScript
[01:12:09] フォー
[01:12:11] この部分は
[01:12:13] はい
[01:12:14] インタラクティブ
[01:12:16] このページを回復してから、このページを作成することができるようになります。このページを作成することができるようになります。そして、そのようなページを作成することができるようになります。
[01:12:29] 非常に素晴らしい部分を乗り入れます
[01:12:33] まず、どのように、どのように、
[01:12:36] 後で
[01:12:38] そして
[01:12:41] フレームワークを作ることができるのです
[01:12:45] うん
[01:12:48] この部分は、この部分は、この部分は、その部分は、その部分は、その部分は、その部分は、その部分は、その部分は、その部分は、その部分は、その部分は、その部分は、その部分は、
[01:12:57] ありがとうございました。
[01:12:59] はい、私は言って、私はこのようなものを使って、このようなものを使って、このようなものを使って、このようなものを使って、
[01:13:07] イエスティックのプレイスは、パーシャルハードレーションを使用することができる。
[01:13:22] 私は
[01:13:25] この部分を下にして
[01:13:27] このスタティックは、
[01:13:28] So I'm going to, instead of sending, you know, the JavaScript, I'm going to
[01:13:33] I'm going to
[01:13:34] これを作成したいのか、 リアクトのために、 リアクトのために、 リアクトのために、 リアクトのために、 リアクトのために、 リアクトのために、
[01:13:46] 私は、私たちの人々が、この人々が、この人々のコンポンスを見ているのですが、
[01:13:51] どこにかく、私のページを入れて、私のページを入れて、私のページを入れて、
[01:13:56] うん
[01:13:58] I call this the lakes architecture where you have this mental model that oh this is static I can just call out to the server for it
[01:14:06] はい
[01:14:07] 今後は、私たちの問題を解決しています。
[01:14:12] 私は、私は、私は、それを記録しています。
[01:14:18] クライアンサイドルーティング
[01:14:19] アップスは全ておりと同じで一つの違いをしています
[01:14:25] これがクイックを解説することができるようになりました。
[01:14:35] ダンはレミックスを楽しみにしているのですが、
[01:14:46] 全てのメタフレームワークを使用することができる。
[01:14:49] その理由を構成することができるようになります
[01:14:53] お客様のお客様について
[01:14:56] はい?
[01:14:59] はい
[01:15:01] その分野に対して、 自分の考え方があると、
[01:15:05] ダンンシュンッティクシスティッシュ
[01:15:08] はい
[01:15:11] いや、I know、right?but React is not the same React as beforeif React's customeris not the end developerbut Next.js's and Remix's of the worldthat's where you should be spendingyour customer...
[01:15:24] タイム
[01:15:30] お始めのRenderは、 エンジンのRenderを呼んでいたら、 エンジンのRenderを呼んでいたら、
[01:15:33] その点で、普通のことを考えます。普通のことを考えます。それにより、それを書き換えます。それにより、それを書き換えます。
[01:15:43] また、お会いしましょう。
[01:15:46] このようなクイックを使用することができる。このようなクイックデモを使用するのは、私たちのクイックデモを使用することができる。
[01:16:18] だから
[01:16:19] なんか
[01:16:21] イエンジン
[01:16:22] この機能を早くして
[01:16:24] これは本当に重要なポイントです。 本当に重要なポイントです。クイックの機能を解決することができると 簡単に 上がり、
[01:16:32] 私たちの人が
[01:16:35] 次回のような道路を持っているのが、 全部のJavaScriptを持っているのが、
[01:16:43] OK
[01:16:44] この意味で、インフィニティコードスプリティングが完全に解決することができるのは、それはないです。このような問題を試験して、このような問題を考えています。
[01:16:57] このような問題を考えているのは、このようなアップのアップを考えている。
[01:17:07] そして、私はそれを解決しているのです
[01:17:21] でも
[01:17:24] 今のところで
[01:17:27] デベローパーエネルギーのサイトによって
[01:17:32] 今度は今日のところで、今度はここで、
[01:17:35] 80-90%の利用の利用の利用を得るのがないです
[01:17:39] はい
[01:17:42] そして、ディアクスの賃金を賃金することができる。
[01:17:54] 私はレミックスがあったので、私はレミックスを見ることができました。
[01:18:09] プリミティブスのようなものを 私たちに 私たちのことを 言うことができるようになる
[01:18:14] リアクセスのプログラムを作ることができる。リアクセスのプログラムを作ることができる。
[01:18:29] ファイン、クリプイッド
[01:18:37] 今のことを考えています。
[01:18:41] はい
[01:18:46] みんなが見ることができるような考え方があるので、 私たちは、このコンバティブの問題を見ることができるようになります。 私たちは、このコンバティブの問題を見ることができるようになります。
[01:18:58] そのような
[01:18:59] リアクコーティングのようなものを考えています。 アブソルトに関すると、 アブソルトに関することができるようになります。 アブソルトに関することができるようになります。
[01:19:13] はい、そうです。
[01:19:22] ここで、私はここで、
[01:19:26] この問題は、脂肪の問題を解決しています。
[01:19:30] この問題は
[01:19:32] 私たちの人生を見つけた
[01:19:35] 10年後
[01:19:38] 他のフレームワークス、他の場所に
[01:19:40] イエスクリアルの発表は、このような問題を発表しています。
[01:19:45] このようなコンポンターが
[01:19:48] アーメン
[01:19:49] おかげで
[01:19:51] 一つのアプローチは「アンラップ」と「アンラップ」のコロジューを使って、また「アンラップ」のコロジューを使って、
[01:19:59] いや、ちょっと待ってくれてるのか?
[01:20:03] I feel like
[01:20:04] うーん
[01:20:05] はい、それが私のために私のこの streamを
[01:20:08] はい
[01:20:11] ありがとうございました
[01:20:17] はい、そう
[01:20:19] この問題は大きな大きな商品の構成を解決しています
[01:20:28] 過去の時代にも
[01:20:30] You'll see references of stuff like Wiz. You'll see references to custom frameworks that Amazon uses.You'll see references. The only one that actually was open sourced
[01:20:41] はい。
[01:20:43] I know of was actually one from eBay that I happened to work on called Marco
[01:20:48] マーコースを解決するのができると
[01:20:52] そして、
[01:20:55] アスインク、フラグミント
[01:20:59] 私は
[01:21:02] 見てみましょう
[01:21:05] I can'tWhat is it
[01:21:06] リジ...
[01:21:08] アスインク・フラグメント・リ・ディスコーヒー・HTMLI love this article. It's like no one knew what was going on.PatrickSteeleitem, creator of MorphDOM, creator of Marco,書いてある article where he explains to everyone how suspense works about a decade ago.
[01:21:23] アウトオーバーダーストリーミング、コーヒーでパーツのページを作ることができる。そして、パーツのページを作ることができる。
[01:21:31] この…
[01:21:32] うっ
[01:21:36] はい
[01:21:37] まあ、お金が付いてると、お金が付いてるのが、
[01:21:47] next and React server components would have landed here
[01:21:51] デスパイトリミックス
[01:21:53] I don't
[01:21:58] いつもは、あなたの影響を感じることができるようになります。
[01:22:02] I think that
[01:22:05] アイディアは、
[01:22:22] 当然
[01:22:22] 当然、アストロは話しています
[01:22:28] はい
[01:22:32] マークが全ての問題を解決しているのが、この問題を解決しているのが、
[01:22:38] インターネットのアイディアを見ることができるようになった。 アイディアを見ることができるようになった。
[01:22:51] 2005年に人がいたのですが、2005年に人がいたのですが、
[01:22:57] I always decide when I'm going to show this bookmark, but Dan Abramoff gave me one of the best
[01:23:08] アップセルの
[01:23:11] 私は
[01:23:13] マーコー
[01:23:16] ここで、ここで、
[01:23:19] このように、エフェクトはレアクティブです。
[01:23:25] もし、遠くまで遠くまで
[01:23:28] I should be able to find
[01:23:32] そして
[01:23:33] I should have looked this up front. It's funny how I can't just not just using my bookmarks now is like
[01:23:40] インスタイルのアイスタイルを使って、私は、私は、私は、私は、私は、私は、私は、
[01:23:49] それが重要なことを
[01:23:51] うん
[01:23:53] はい
[01:23:55] だだだだだだ
[01:23:58] はい
[01:23:58] ここで、マーコを見ることができる。この 2014年のアートクルで、このアートクルで、アートクルで、アートクルで、アートクルで、リアクトを作ることができる。
[01:24:07] We've been working to add this to React since about 2018, but it's peculiar how this is almost a lost art.
[01:24:16] OK
[01:24:27] これは私たちのマーコーのチームを持っています。私たちのマーコーのチームを持っていたことができます。
[01:24:37] このように
[01:24:39] これは本当に重要なことが重要です
[01:24:42] うん
[01:24:43] そう、私はまだ非常に感謝していると、 Danの時間をお祝いします。
[01:24:49] Anyway
[01:24:53] ありがとうございました。
[01:24:54] ご視聴ありがとうございました。
[01:24:55] 今のところで
[01:25:01] このイデアの「パートル・ハイドラシン」として、マーコーの言葉があります。
[01:25:08] または
[01:25:11] マイクル・ローリングス
[01:25:14] Meme Master
[01:25:15] 自分の
[01:25:17] 誰も知らないの
[01:25:19] うん
[01:25:21] はい
[01:25:21] 基本的に
[01:25:24] はい
[01:25:25] この動画を見てくれてありがとう
[01:25:26] パートルハイドラシン
[01:25:28] アイデアが
[01:25:30] コンポンテンツのコンポンテンツの
[01:25:33] では、スタッチのパーツを使用することができる。では、リンクを言ってもらったら、 何かを言ってもらったら、 何かを言ってもらったら、
[01:25:40] いや、実は、マークはマークのMPAのフレームワークです。
[01:25:50] マークを使ってもらうことができるようになります
[01:25:56] または、
[01:25:59] マークは本当に変わったんですよ。マークは本当に簡単にあります。それは全ての一つの一つの言葉です。一つの言葉を見つけたんです。
[01:26:08] クラスコポーツがあると、 アイランドのクラスはアイランドです。
[01:26:13] もし
[01:26:15] うん
[01:26:16] 全ての「全ての内容」は、私は全ての「全ての内容」を感じています。私は、私は全ての「アストロ・マーコ」を感じています。
[01:26:25] うん
[01:26:27] リアクセブレコポイントがあります。 リアクセブレコポイントは、リアクセブレコポイントがあります。 リアクセブレコポイントは、アイルンツアクテクトです。 理由が、リアクセブレコポイントがあります。
[01:26:39] Astro and Fresh use. There's a very good reason for these rules.
[01:26:46] はい?そういう長い
[01:26:48] このようなことを考えているのです。
[01:26:52] React is not the first...
[01:26:54] その方法のエクエasionの方法を考えます。このディックスのディックスは、私たちのディックスを理解しています。ディックスのディックスは
[01:27:06] おやすみなさい
[01:27:09] マンジングパートルヒドリーション
[01:27:12] OK?
[01:27:15] これは、私たちの人がいると、私たちの人がいると、
[01:27:21] うん
[01:27:23] また次のペンを使用してみてください
[01:27:25] 私は必要なのを必要なのかもしれませんが、私は必要なのかもしれませんが、私は思い出しています。
[01:27:31] ここで…
[01:27:33] はい
[01:27:34] 実は、一番大きな理由をすることができます。
[01:27:40] クライアント
[01:27:41] コンポンエンス
[01:27:42] キャンプ
[01:27:47] import
[01:27:48] セーブーコンポンエンジン
[01:27:56] このように
[01:27:58] このように
[01:28:01] 全体のアイランドのアーケテクトレイ。
[01:28:06] はい
[01:28:07] それは明らかによく分かることができるように考えています。私は必要と伝えたら、
[01:28:20] うん
[01:28:21] はい
[01:28:22] そう
[01:28:42] もし、
[01:28:43] と、ページ
[01:28:45] MPAはMPAのMPAについては、マークがあるんですけど、
[01:28:55] I mean I can use
[01:28:57] I can use his example
[01:28:59] はい?
[01:29:00] MPA
[01:29:02] そして、
[01:29:03] JavaScriptを抜いているときに、
[01:29:06] はい
[01:29:08] I don't have to worry about ever coming back to this page or navigating because when I click to the next page, I'm going to re-render the whole page again and only send the JavaScript for the pieces I need again and when I come back, I'm going to re-render the whole page on the server again and only send the JavaScript for what I mean. I mean, I can static gen, I can do that. I'm not talking about dynamic versus static generation or anything. I just mean conceptually,
[01:29:26] 次のページを追加して、 センターのページを追加して、 センターのページを追加して、
[01:29:33] 一般のアップが全てのディナミックを使って
[01:29:37] I'm throwing it away anyways on Navigation
[01:29:41] それが大丈夫です。それは、私たちの立ちを持っている。
[01:29:56] 一瞬
[01:29:58] but essentially the
[01:30:00] The key to the architecture is that
[01:30:02] is this, because...
[01:30:04] I guess there's a second, this is actually the second rule.  This is the second rule of server components.  The first rule of server components is,
[01:30:12] the root
[01:30:13] is on the server.
[01:30:15] Okay.
[01:30:18] The...
[01:30:25] However, React can import server components in client quotes. No.
[01:30:30] No.
[01:30:30] It does not.
[01:30:31] This is very important. Does not.
[01:30:37] There's like a sort of exception where
[01:30:41] In the sense that you can set a new route...
[01:30:44] Essentially, but from an authoring perspective, you cannot...
[01:30:50] And this is for a very good reason.
[01:30:57] - Okay.
[01:30:58] *snap*
[01:30:59] - Bye.
[01:30:59] Treating this as a whole app before we get into nested routing is probably our best bet, but the idea is
[01:31:07] you can kind of see this with some color-coded code, and I think Dan has
[01:31:12] did it like he actually drew that here but I'm gonna I'm gonna I'm gonna do it myself for a moment here um
[01:31:20] *sigh*
[01:31:23] *sad*
[01:31:24] instead of color coding it, I'm just gonna use words, but I guess. But my point is,
[01:31:31] At the top here,
[01:31:32] You have...
[01:31:35] Do we want syntax highlighting? Will that make this feel better?
[01:31:39] Let's get syntax highlighting.
[01:31:42] Screw it, okay.
[01:31:45] Um...
[01:31:47] So,
[01:31:48] At the top here,
[01:31:52] I'm gonna just make app, okay?
[01:31:54] and
[01:31:56] This conceptually is like on the server, okay?
[01:32:04] And then
[01:32:05] I'm gonna return
[01:32:07] a client component.
[01:32:09] Okay, and this client component is something interactive that we want.
[01:32:14] But what I want to show you about the way server components work is
[01:32:18] Technically speaking, the client component cannot import
[01:32:21] server
[01:32:23] stuff. Like you can't import a server component.
[01:32:26] However,
[01:32:29] I can pass server content
[01:32:32] as children.
[01:32:39] Shut up, TypeScript. Okay.
[01:32:48] And
[01:32:50] Thank you.
[01:32:51] As I said, one thing I did say at the beginning of the stream, and I want to highlight this here, is I'm talking about this from a generic sense.
[01:32:57] The React specific implementation is less important to me because I believe that we can do this for every framework.
[01:33:03] both as a specific spec and as an agnostic spec. And I've actually written a document
[01:33:08] outlining this.
[01:33:10] -
[01:33:12] What I'm getting at is...
[01:33:15] Mm-hmm.
[01:33:16] you can interlace these trees, but
[01:33:20] And you can put more client components in here.
[01:33:25] But there is an important...
[01:33:27] Um...
[01:33:30] There's an important detail here.
[01:33:32] that I want you to notice
[01:33:33] about this tree.
[01:33:44] also on the server. And to be fair, this is doable in every single Islands framework. This is not React. This could be Fresh, this could be Marco, this could be Astro. This is just
[01:33:55] the way this works.
[01:33:58] Even quick, actually, to a certain degree.  You can write your code this way to optimize.
[01:34:05] And what I'm getting at is...
[01:34:08] - Yeah.
[01:34:09] So...
[01:34:10] This is a continuous tree because when you look at it, when you're here and you're like, I'm on the server, you can basically ignore these things and render this all on the server.  And the server can do something like...
[01:34:24] const data fetch me some data, right? Okay.
[01:34:28] Thank you.
[01:34:29] And it can say, hey, client,
[01:34:31] Here's some data again.
[01:34:32] I don't care how you fetch it, async components, top level await in Astro, using whatever mechanisms in Fresh or Solids resources or whatever,
[01:34:43] you can pass data as props
[01:34:47] to your islands
[01:34:53] Yes, there's a router and we'll get there, but I want...  Like, that is not the important part.
[01:35:05] Yes, yes. Either they'll err on you, or you've just made a server component to a client component.
[01:35:12] Peace.
[01:35:14] and like
[01:35:16] If you're using a compiler that automatically figures this stuff out and doesn't make those boundaries clear like Marco does, this is exactly what would happen.
[01:35:24] Other ones will be like, "No, no, this is a server component, you don't want to do that."  But yes, so technically a server component becomes a client component if you import it.  And there's a reason to have maybe some errors or some warnings about that because
[01:35:37] your server component might be talking to the database, and then that isn't good. I'm pretty sure that's why React would be like, "No, you can't do that," because that would
[01:35:47] that would be bad, right?  If it's something downgraded, you know,  server component that has secrets to something that's on the client.
[01:36:00] Yeah.
[01:36:00] But so that isn't a concern.  Don't worry.  Like the reaction, I'm going to spill your secrets on the, you know, so to speak.
[01:36:07] Thank you.
[01:36:08] I'm just saying that
[01:36:12] The server tree is this continuous tree that can pass props
[01:36:17] into the client components.
[01:36:21] Thank you.
[01:36:26] Thank you.
[01:36:28] And...
[01:36:30] There's actually... We'll get to this more later.  There's actually one more rule...
[01:36:35] essentially that has to do with client components
[01:36:39] Which is that...
[01:36:40] Um...
[01:36:43] Only...
[01:36:44] Client components.
[01:36:46] can access
[01:36:49] client context
[01:36:51] Okay.
[01:36:52] But for me, it comes down to these three.  So, I'll explain the last one why in a minute.  But back to our...
[01:37:03] playground here
[01:37:05] I want to show that this is a continuous tree with props.  What's interesting about this design is,  if I'm somewhere here and I'm on a client,
[01:37:13] Man
[01:37:13] And I have, you know, I'm going to...
[01:37:15] Make my function client here, okay.
[01:37:17] This is my...
[01:37:19] client or interactive component.  There's some confusion here,  and we'll talk about the SSR impact in a minute.  But for now, just pretend this is like a...
[01:37:28] Actually, this is the right time to bring this up because client components aren't actually  client components.
[01:37:36] they're isomorphic components because they have to run on both sides.  Like...
[01:37:41] This would not be very interesting, um...
[01:37:45] where is it this would not be very interesting if these red areas weren't server rendered
[01:37:50] And then you got to the client and they're white and then they...
[01:37:54] they rendered in.  I mean, you can do that with web components, essentially.  We've had that architecture for years and years and years and years and years.  What made Marco or Astro interesting was that they would...
[01:38:07] server render the whole tree and then hydrate the individual parts.
[01:38:29] We can get into that, but that's like, again, another dimension here. Like once you have the model in your head, you don't like this is just a natural extension about like the build time thing. I don't think that part's actually that important again. Um,
[01:38:42] It's the same way that you can cache a page or
[01:38:47] do anything in terms of
[01:38:50] in terms of like that. What I'm trying to get at is the isomorphic component, which, you know,
[01:38:55] const
[01:38:56] state equals use some state, whatever.
[01:38:59] Like...
[01:39:00] this component
[01:39:03] Has props that come in.
[01:39:07] Like...
[01:39:10] What do we see? We have data and we have children, okay?
[01:39:14] I'm going to go.
[01:39:15] And...
[01:39:18] It's really important to understand this because...
[01:39:22] So
[01:39:23] It's going to do its thing.
[01:39:25] Which I have no clue what its thing is.
[01:39:28] But it doesn't matter.
[01:39:30] And then it's going to put the children in.  There is no...
[01:39:34] Way
[01:39:37] in this model...
[01:39:38] Toot.
[01:39:39] to very well not like easily and at least with serialization boundaries you can enforce this to
[01:39:44] actually send props from the client
[01:39:47] Back to the server.
[01:39:51] The server tree is connected.
[01:39:54] Right?
[01:39:56] We saw the whole thing and it has these client islands in them.
[01:40:01] These...
[01:40:01] you know,
[01:40:03] This client component is isomorphic island.
[01:40:08] And
[01:40:08] And...
[01:40:09] It has its state and whatever stuff in the data.  Data and state together can have some fun  and render some interactive stuff.  But ultimately...
[01:40:20] See, the problem is if you could import the server component in here and expect to be a server component, the client component could actually drive the rendering
[01:40:28] of
[01:40:29] the server component and we don't want that.  Some people have been making demos like that.  I saw a bunch this week, like earlier the week,  Daishi's early example.  View.
[01:40:39] actually, believe it or not, has a server component demo. And it's based, like, they were talking about like how you can't have interactive components in it yet. And it's basically the same thing. And I call this the lakes architecture.
[01:40:50] Because when you come from a...
[01:40:52] a client side mentality
[01:40:55] where you follow a different set of rules,
[01:40:58] where you say the root is on the client, and then you have server components in it,
[01:41:02] You...
[01:41:04] you invert this chain, so to speak.  Right?  So let's talk about lakes for two seconds here  because I want to talk about...
[01:41:13] about this
[01:41:18] Because the whole idea with lakes...
[01:41:22] is this idea.  It's like client root...
[01:41:27] Pass
[01:41:29] props to server
[01:41:31] component.
[01:41:34] And the problem with this model is
[01:41:37] the trees are intertwined,  especially if you're trying to do it both ways.  Because the truth of the matter is,
[01:41:43] Even though the client root,
[01:41:46] false, sort of, because
[01:41:48] All...
[01:41:50] Interact all websites start on the server.
[01:41:53] website.
[01:41:54] All right.
[01:41:57] Okay.
[01:41:58] so
[01:41:59] there
[01:42:01] like from a holistic stance, it's not
[01:42:04] completely true and the problem with lakes is that
[01:42:10] If you just weave your components naively so you can go
[01:42:15] Let's pretend the client's the root. We go client
[01:42:18] and then the client has a server component.
[01:42:21] Okay.
[01:42:22] So.
[01:42:25] You know what?
[01:42:26] Let's use code. Let's use code.
[01:42:32] Let's do something similar to this.
[01:42:36] But
[01:42:38] Let's look at our lake, right?
[01:42:43] So now we're going to pretend...
[01:42:45] Um...
[01:42:47] that were in a Clank app, okay?  Like it doesn't really matter
[01:42:50] I'm not gonna worry about this fetch data for a moment.
[01:42:53] But let's pretend now that our
[01:42:56] we have...
[01:42:57] we don't need this top level client component.  Let's pretend in here we've got some stuff, which is now,
[01:43:04] you know, lakes,
[01:43:05] on the client. And inside our lakes we have
[01:43:10] Server component.
[01:43:15] And...
[01:43:17] - Thank you.
[01:43:18] It takes, you know,
[01:43:20] Get our data in here.
[01:43:23] and
[01:43:24] - Yeah.
[01:43:26] Let's pretend...
[01:43:31] Actually, maybe...
[01:43:33] I'm going to show the dueling banjos, so to speak. So we have a client component that has a server component in it, and our server component
[01:43:41] Again, I'm not talking infinite loop. I understand what I'm about to write as an infinite loop, but just follow me for a second here.
[01:43:47] Server component.
[01:43:49] returns our client component, okay?
[01:43:55] Maybe...
[01:43:56] It passes. Whatever.
[01:43:57] Some chillin', hello, okay, whatever.  It doesn't matter.  What I'm getting at is...
[01:44:03] props
[01:44:07] I'm not trying to create an infinite loop.  I understand what I just wrote as an infinite loop.  What I'm getting at is if you have this sort of isomorphism where...
[01:44:15] where like...
[01:44:17] You can just import any on either side.  You can get into this chain where...
[01:44:24] These can be different, Server 2, Server Client 2, whatever, but you can get in this chain where essentially
[01:44:29] You update a prop in the client,
[01:44:32] It...
[01:44:32] says, hey, server, you need to update your data.
[01:44:36] Goes.
[01:44:37] across
[01:44:38] to the server.
[01:44:39] And the server goes, okay, cool, I got my new data.  I'm going to use that data
[01:44:44] to render a client component.
[01:44:46] and send it back.  And then the client component...
[01:44:50] gets in and starts rendering and he goes,  "Oh, I've got another server component.  "I'm gonna go back to the server and I'm going to pass in my data."  And then the server component goes and it does its work and he goes,  "Oh, I have a client component. I'm gonna send back its data."
[01:45:04] You basically...
[01:45:06] end up with these crazy waterfalls because...
[01:45:10] Because the server tree isn't connected to itself, they... I'm not talking about an infinite loop here. I mean, literally, you can just pick a page layout and just kind of...
[01:45:20] follow the props top down.  You just kind of go update the props on the server component,  render some server stuff, get back client component,  client component renders or updates its props,  then it has another server component in it,  and then it does it.
[01:45:34] -
[01:45:39] Thank you.
[01:45:42] serverless generation I'm got you mad
[01:45:54] So I hope to understand, like the point out there that lakes...
[01:45:59] are not
[01:46:00] Good.
[01:46:01] because innately the model allows really bad waterfalls.  Like you might be like, oh no, I only want,  like if you're gonna avoid waterfalls,  all you can do is put your server components at the leaves.
[01:46:13] And if you go back...
[01:46:15] this diagram
[01:46:17] You'd...
[01:46:18] I don't think server components at the leaves are actually where the win is.  And do you want to know why server components at the leaves are not where the win is?
[01:46:25] It's because
[01:46:26] of data serialization.
[01:46:29] and again, this is a technical reason, but we'll get back into DX in a little bit. It's because
[01:46:36] the problem is
[01:46:39] If we do get our structure, and I want to show this because this is how it actually weaves, right, if you import it.  But what you actually are ending up with is this structure of like...
[01:46:51] just get some text  of like, you know, maybe client  to server...
[01:46:58] to client.
[01:47:00] to server
[01:47:05] Because...
[01:47:06] you don't know what possible data that the client could send back to the server
[01:47:12] and then the server uses that to get the client,  and then the client, again, doesn't know what possible data.  You basically need all the data
[01:47:20] all the way down that could be used in any of these components when you weave like this.
[01:47:26] Like,
[01:47:27] if like if you had like a a user model and the client can decide which fields
[01:47:36] it needs to show.
[01:47:38] Right?
[01:47:40] Yes.
[01:47:41] If you start from a client-centric model and then go through like this...
[01:47:46] You need to...
[01:47:47] Like, basically no...
[01:47:49] every possible field on the user that the client would need up front in the whole tree downwards.  And there's no easy way to know that when you can just kind of
[01:48:00] weave through like this. What's interesting is when you go back to this model,
[01:48:07] The only data you have to serialize
[01:48:09] are the props.
[01:48:12] The server being a continuous tree,
[01:48:15] Like, and...
[01:48:18] There's no need to worry about anything you don't pass through as props to these components.
[01:48:27] This is the other part of the win, I've talked about this before. Because look, your server component
[01:48:32] could render
[01:48:33] Like, picture...
[01:48:34] A Hacker News Demo.
[01:48:36] What do we got? Solid.
[01:48:39] HN islands here
[01:48:40] Sure.
[01:48:41] This is actually a solid server component demo, just side note.  But what I wanted to point out is you can render all of these stories on the server and pass them.  Actually, let's use this.
[01:48:56] you can render all these comments
[01:48:58] on the server
[01:49:00] and then use these...
[01:49:02] client islands to collapse them. And because the comments are all rendered on the server, you never need to hydrate them, you never send the data. If you, the only, in fact, these toggles don't need any state passed to them. So much to the point that if we look for like our next JS JSON equivalent for this app, it's empty.
[01:49:23] Where is it? Here it is.
[01:49:25] Island map.  Like the data serialization is actually empty for this page  because you don't need the data to hydrate any of this.
[01:49:33] and the client component didn't have any props.  It just has its internal state,  and it wraps other server components.  Because there's no communication between them,  you actually don't need to send
[01:49:45] the data is actually solves the data duplication thing because the server
[01:49:48] Components know that they've encoded the data as HTML.
[01:49:52] and the client components,
[01:49:55] don't need to...  They're not privy to it.  It's impossible to pass...
[01:50:01] that data
[01:50:03] to the client component
[01:50:05] from the server except through the props that you know about.
[01:50:10] Okay.
[01:50:17] Yes, it's actually one small solid component to be fair.
[01:50:22] But yes, that would be the mentality.
[01:50:28] Yes, yes. My hydrogen clone, uh, HN clone used server components too, yeah.
[01:50:34] We've been using server components on this stream for over...
[01:50:38] for...
[01:50:38] for about a year now.
[01:50:40] Yeah.
[01:50:52] Sure, sure.
[01:50:55] Yes, there's no JS needed on the page. But I mean, you can see how that solution doesn't scale and the solution we're talking about does.
[01:51:03] um...
[01:51:06] Once you have this rule, you basically eliminate waterfalls...
[01:51:13] And you solve the double data serialization problem.
[01:51:17] Okay?
[01:51:20] just by design. So lakes
[01:51:23] are not...
[01:51:24] what you want, they are not server components.  In order to actually get the benefits,  you need an islands architecture.
[01:51:32] Okay? So...
[01:51:34] there we talked a bit about performance
[01:51:36] Um.
[01:51:38] I'm hoping this this part so far makes makes sense. Um,
[01:51:43] Server components,
[01:51:44] are an island's architecture.
[01:51:47] But there's implications of being an island's architecture.
[01:51:55] Right. You could maybe have fun on a leaf node or something. But like...
[01:52:04] That's where the app starts, so to speak.
[01:52:13] So, I'm hoping...
[01:52:16] What I'm trying to convince you with both this example
[01:52:21] And...
[01:52:22] with
[01:52:23] this earlier
[01:52:25] conversation about mutation here.
[01:52:27] Which is...
[01:52:28] mutation
[01:52:30] in JS.
[01:52:38] We actually kind of just want MPAs.
[01:52:44] Like...
[01:52:45] But...
[01:52:47] I know that's kind of an absurd thing  because there's benefits of single-page apps,  but we've been trying to rebuild the MPA system
[01:52:57] mutation model, and we've been trying to rebuild Marco's partial hydration.
[01:53:11] I'm not saying this is where the story ends. I'm just explaining why lakes are like the extreme of us thinking about trying to optimize
[01:53:20] from a client's side perspective. I have some real live examples of lakes that we actually see in some frameworks.
[01:53:26] here's one. SvelteKit has lakes, technically speaking. Not in the client...
[01:53:34] like re-render sense, but they have no hydrate routes in SvelteKit, which I thought was really, really clever.  What they let you do is have the client-side router and then certain pages that are static
[01:53:46] essentially don't hydrate them, and because they capture the anchor and form
[01:53:51] stuff like they delegate the events they you can use these pages
[01:53:56] as if
[01:53:57] They were single page app style.
[01:54:00] without hydrating them
[01:54:03] Um...
[01:54:04] So if you keep the experience down to just anchor tags...
[01:54:08] and like forms.
[01:54:10] You can basically...
[01:54:14] Do really simple...
[01:54:16] static type stuff with a client side router because it will just like,
[01:54:22] re-- like, it will just re-render that route section, um,
[01:54:28] after the fact, like as a client component, but at initial hydration time, it doesn't need any of the JavaScript code
[01:54:35] to work for the specific section.  I hope that makes sense.  It's because they didn't have to bundle the component  two different ways.  They just have the bundle or the bundle-less version.
[01:54:45] and the bundle-less version happens to play into the global router.
[01:54:50] To me, this is a version of the lakes thing.  The downside is you can't add any interactivity.  The second you add something interactive to that page below
[01:54:58] the no hydrate point,  you have to bring the whole page in it's on or off,  but it's like an extension because like,  you know,
[01:55:05] Remix has been very big on popularizing that concept of progressive enhancement.  And that's the idea of like, if the JavaScript isn't present,
[01:55:12] you know, we turn off the JavaScript, page still works, right?  You might click on this and then the whole page refreshes to collapse the comment. But
[01:55:21] at least you didn't have to wait on the JavaScript.  If it failed, something goes bad.  And in terms of like...
[01:55:27] being like a
[01:55:28] fail case, I think that's really good. But the problem is, like from a hydration standpoint, you have a completely different experience if you click something too fast.
[01:55:35] versus waiting for it to hydrate and having the JavaScript.
[01:55:39] But and it's very on or off.
[01:55:42] It's like you have the JavaScript, you don't have the JavaScript.  And on early page load, that's not up to you.
[01:55:48] But like if you just turn off the JavaScript on some pages...
[01:55:52] You know, you can...
[01:55:53] kind of progressively fall back into like an MPA, um,
[01:55:58] a static MPA site. But once you have to leave that, let's say you're on that static MPA site, if you want to get back into a spa page, you're going to do a full page refresh. And if you're in the spa page and you go to that page, you have to get to that page from a full page refresh.
[01:56:11] SvelteKit has kind of solved this by sharing a client side router.
[01:56:16] with those static pages, which is really kind of cool.  But what I'm getting at is, in both cases,  the second you want any interactive JavaScript...
[01:56:23] the whole app's coming in, like the whole page.
[01:56:41] Yes.
[01:56:43] Yes. Non-global state between two logically distant components and server components. What's the solution to that? Yeah, yeah. Okay.
[01:56:56] Yeah, so how do you say, "Regarding Island's architecture, one thing I've always found difficult, the current solution is a shared non-global state between two logically distant client components in a server component,
[01:57:05] What's the solution for that? I'm trying to think about it too much.
[01:57:09] Yeah, you have to use client context essentially as the solution for that.
[01:57:14] because the communication is rightfully
[01:57:17] blocked off, the client can't communicate directly
[01:57:21] Like, the server...
[01:57:23] structure is continuous, but the client structure is separate. You want it for partial hydration because you want each
[01:57:29] island to be its own thing. The solution is that all the islands can be connected together using the context API.
[01:57:37] And this is
[01:57:38] Yeah, this is something that we haven't implemented into any examples in Astro, but I did do that in Solid Start.
[01:57:47] if the it's more up to a problem for the client framework to solve than the  server framework to solve,  um,  so to speak,  as long as the client islands can communicate with each other,  this should be good.  I,
[01:57:58] We'll get into that a bit later about the challenges of approaching this in an agnostic way.
[01:58:09] - Okay.
[01:58:09] I honestly don't know on this detail. They might be. The problem, I think most of the time, Quick dodges this because they go to being an MPA framework. So the page is going to go away anyways when you navigate.
[01:58:22] Like,
[01:58:24] otherwise
[01:58:27] It's interesting. I imagine though, I would just use the exact same rules I'd use with server components and work here. Like the thing I want to point out here is
[01:58:35] This isn't something...
[01:58:36] you cleverly solve around.  There is a real boundary between the server and the client.  So either you're serializing it or you're doing something else
[01:58:45] What's cool about this island's architecture
[01:58:47] is two things.
[01:58:50] You know...
[01:58:51] where the boundaries are.
[01:58:54] Client component props are the boundaries. This has to be serializable.
[01:58:59] Okay.
[01:59:00] This. This has to be serializable.
[01:59:04] Um...
[01:59:05] And then the second thing is what I explained already. With the way the trees work, essentially you don't have to worry about like
[01:59:13] You can optimize a bunch of things, like the data serialization and...
[01:59:19] waterfalls and whatnot.
[01:59:22] So, sorry, we're trying to get back to where I was trying to get to this.
[01:59:27] I was just finishing telling everyone that everyone actually kind of secretly wants an MPA.
[01:59:32] - Oh.
[01:59:34] But it's a bit more...
[01:59:39] It's a bit more nuanced than that.
[01:59:43] - Thank you.
[01:59:43] Because obviously,
[01:59:46] We like
[01:59:47] client side,  um,
[01:59:49] Navigation.
[01:59:52] I mean, there's no way to actually get around that.
[01:59:56] Um...
[01:59:58] Let me...
[02:00:00] something here. Let me see if I can find some of my HackMD stuff.
[02:00:04] Sign in.
[02:00:06] GitHub?
[02:00:13] All right.
[02:00:18] doo doo doo doo doo
[02:00:20] I've been writing documents, um...
[02:00:24] describing...
[02:00:25] the behavior of how you could apply these
[02:00:28] architectures to different
[02:00:32] sorts of approaches.
[02:00:35] uh
[02:00:37] And I don't know how much I'm going to reference this particular doc.
[02:00:41] There's a lot of considerations here as we kind of
[02:00:44] - Mm.
[02:00:45] move forward, but I want to kind of start talking about how
[02:00:51] Now that...
[02:00:52] I'm hoping now that we're all on the same page that secretly we just won an MPA...
[02:00:56] that we can...
[02:00:58] Talk about how we actually solve the problem here.
[02:01:09] Yeah, it's interesting because Danny Bramoff
[02:01:12] Drew this...
[02:01:13] drew this diagram here trying to show that
[02:01:17] the same thing of...
[02:01:19] of how...
[02:01:21] the components all kind of like weave together.  So like in this case, the green ones are the client components,  and the blue ones are the server components.
[02:01:28] And he's showing the black is when they become HTML.
[02:01:31] And in React, there's very much a step process here, but I don't think there has to be. It depends on what your approach is. But essentially, what he was showing is the first step.
[02:01:42] is turn the server components
[02:01:44] into HTML and keep the client components in place,
[02:01:48] And then the second step,
[02:01:50] which either happens during SSR or happens
[02:01:54] Um,
[02:01:55] later on the client is to turn the client components into the remaining HTML.
[02:02:09] And...
[02:02:11] I like this one, I wanted to pull it out because I was hoping that in addition to my explanation that I just gave, that this kind of helps fill in the gaps.  This is what I was talking about with the tree being contiguous because you can actually...
[02:02:27] render all the black parts without touching the green parts.
[02:02:30] and then isolate the green stuff. I've often made that comment that React server components is like  taking a framework and wrapping
[02:02:38] existing React
[02:02:39] with it.  Like the,  like it's like Astro almost.  Um,
[02:02:45] There are some rules...
[02:02:47] to be sure, which makes server component, client components not the same. But generally, you know, and that's why the authoring is different. Like and also just like other things like there's no need for state.
[02:02:57] But it was like a kind of interesting observation because any client component can be SSR'd
[02:03:03] Technically speaking, any client component that doesn't read context
[02:03:08] could be a server component.
[02:03:10] This is an interesting consideration, to be fair.
[02:03:15] But
[02:03:17] This is why the boundaries...
[02:03:19] are I think one of the most frictionless points in terms of APIs.
[02:03:31] Heh.
[02:03:33] so
[02:03:35] Yeah, he didn't draw the router. Yeah, so this is why I like this diagram  because it shows the mentality. The very first React server component demo
[02:03:46] confused a lot of people um uh what was it uh
[02:03:50] Bundle
[02:03:52] bundle, zero bundle, was it zero bundle,
[02:03:56] server components
[02:03:59] Introducing zero bundle of React server components.  If you watch this, it's great stream, great that.  And they had a demo.  They're like, hey, clone the demo.  We cloned the demo and we looked into this on stream  a little over a year ago.
[02:04:10] when it started clicking
[02:04:12] for me. And what always  confused people about this demo is there's  no server-side rendering in this demo.  There's no SSR in this demo.
[02:04:20] Um,
[02:04:21] It's a notes app.
[02:04:24] and
[02:04:25] Actually, do I have my own version of it? Solid Notes?
[02:04:29] It's fine. I don't remember the link off the top of my head.
[02:04:35] because we remade this demo with Solid's version, obviously.
[02:04:39] is that...
[02:04:42] - Shh.
[02:04:44] It's very much about the way React approached this, right?
[02:04:48] for them,
[02:04:50] You know.
[02:04:51] They started...
[02:04:53] kind of like
[02:04:54] Can we do...
[02:04:55] Can we do this initially so that we get to here? And then can the client do this? So essentially,
[02:05:01] In their version, all the client components
[02:05:05] Only...
[02:05:06] rendered in the client, essentially, for their initial thing. And then as they changed it, they could swap out the server components. But there was no SSR.
[02:05:17] I approach this problem from the complete opposite side.
[02:05:20] We built islands like Astro first.
[02:05:24] I love...
[02:05:25] Yes, yes, that is the demo, isn't it?
[02:05:31] Let's see if I can see it.
[02:05:35] Right.
[02:05:37] This demo is always like a little bit of fun because...
[02:05:40] - Okay.
[02:05:41] What's cool about it is these things are server rendered, so you don't ever need to send the JSON for them.
[02:05:47] But then when you go new, then you load the code to actually make the editor, right?  If you've got to go in here, then now you can edit it and be like,
[02:05:57] Here's the title.
[02:06:02] And somebody's deleting notes on me in the background and stuff.
[02:06:07] um what i'm getting at is like this demo the the original demo didn't have ssr and was very  simplistic i think our demo does have ssr so maybe this isn't the best comparison okay anyways what  what i kind of got a little bit sidetracked there for a moment um but the demo was a very simple  list management tool um that didn't actually do the ssr and because they were really focused on just
[02:06:32] weaving the trees together and making sure the pattern worked.
[02:06:37] Coming from it from our islands approach,
[02:06:40] If you already have islands
[02:06:42] you have the ability...
[02:06:44] to
[02:06:46] get to this
[02:06:48] on the server for that first render. You can just go from straight to here on the first render. And then the question, then
[02:06:55] The question starts being, how do you
[02:06:58] find the anchor points
[02:07:01] to
[02:07:02] do the replacement.
[02:07:03] And the simplest version for that
[02:07:05] is...
[02:07:07] something that Astro was playing with for a while too, which is...
[02:07:10] a Rails technology called TurboLynx.
[02:07:13] Thank you.
[02:07:14] Or Turbo now.
[02:07:16] Um...
[02:07:20] See if we can find their official website.
[02:07:23] See, this has been archived now.
[02:07:25] because they don't call it TurboLinks, they're now Turbo. TurboLinks was a very simple approach. What they did was take
[02:07:32] your standard MPA website. If you click on any link,
[02:07:36] hijack that link
[02:07:38] Instead of reloading the whole page,
[02:07:40] basically diff the head
[02:07:42] and replace all the HTML
[02:07:45] underneath.
[02:07:46] So you get pseudo-
[02:07:48] client side routing because the whole page doesn't reload, but all the HTML is basically replaced beneath the body.
[02:07:55] And then because that page, you merge the head, essentially, you can pull out the...
[02:08:02] You load the new JavaScript for the new island you need on that page,  and you get an experience that's kind of like...
[02:08:10] of
[02:08:12] Kind of like a really basic version of client-side routing for...
[02:08:18] for MPAs. And to be fair,
[02:08:21] Turbo...
[02:08:22] still runs that way with rails, people seem to be fine with that. I think flamethrower
[02:08:29] Um...
[02:08:31] JS from Fireship is
[02:08:35] the same sort of idea
[02:08:41] Okay, I'll choose Turbo...
[02:08:45] This is
[02:08:48] This seems fine, right? I wrote an article about all the different patterns you could use for front-end, and this kind of routing I called...
[02:08:57] I hate my labels. I was having such a hard time coming up with the labels for it. Like, what was it? Dev2, Dashboard, what was it?
[02:09:06] patterns for building
[02:09:10] UI frameworks. This one? Yeah, okay.
[02:09:14] or
[02:09:14] Thank you.
[02:09:15] I was talking about routing, and I did a whole stream dissecting this article.  But essentially, Turbolinks and this stuff is what I call this sort of routing.
[02:09:26] Right.
[02:09:27] there's implications of being able to make these decisions, right?  If you have a classic MPA...
[02:09:32] Yeah, full page reloads.
[02:09:34] You don't.
[02:09:35] preserves client state below change no you lose the whole thing client side transitions no renders on
[02:09:40] I mean, maybe one day with the new browser APIs.  Renders on the server after first render, yes.  JavaScript in the browser, none.  You don't need any.
[02:09:49] using Express, right? This is an MPA. Hybrid, like I'm talking about with Turbo, is
[02:09:53] There's no full page reload, but all the state is lost.
[02:09:57] You could try client-side transition on a full page level,
[02:10:02] Um...
[02:10:03] But, you know, it still does render the page on the server.  And you don't need that much JavaScript to pull off this trick.  Maybe like two kilobytes or something.
[02:10:11] On the opposite end of the side, but notice how these both have multiple entries. Usually the authoring experience is that the app is
[02:10:18] essentially...
[02:10:20] Like each page is a page. Something that's happened on client side and the reason we have nested routing is we view the app as a single entry point and that it's just a matter of nested layouts.
[02:10:30] But the thing with client-side routing is
[02:10:33] Yeah, there's no full page reload, and it preserves all the state, and you have the transitions, but it doesn't render on the server after the fact, which means you have this
[02:10:41] you need all the JavaScript.
[02:10:43] which...
[02:10:43] is a lot, and I use React Router as an example.  I called it transitional, I regret that now, because Rich Harris retconned the term.
[02:10:55] I realized that nested,  I've used rails.  I realized that it,  it,  it,
[02:11:00] - Yeah.
[02:11:03] I don't know.
[02:11:08] but look
[02:11:14] Anyways, what I was getting to is that there is a solution to routing.
[02:11:20] that combines both of these.  And this is something that
[02:11:25] I've been exploring pretty much all of last year.  That was my 2022.  I wrote in January that the future of routing was on the server.  And then basically we delivered on what that could look like, um,
[02:11:39] in October when I released the, what was it, client-side writing without the JavaScript.  I'm just going to drop this article in here.
[02:11:47] um,
[02:11:48] But it's important because this shares all...
[02:11:54] the characteristics of...
[02:11:57] of what
[02:11:59] react server components or what a server component router um
[02:12:03] would you know
[02:12:04] would have and I talk a bit about this but
[02:12:08] Let's just...
[02:12:09] Let's just step back and I'm going to high level just kind of go over
[02:12:14] what the flow is for this, from this thing.
[02:12:20] Basically, if we were to generalize this,  and I know React has different mechanisms  we just talked about.
[02:12:26] The way the server component world works is the initial page render is very similar to what you find in an islands framework. All the components are server rendered and sent to the browser client components or
[02:12:36] islands
[02:12:37] Props are serialized and any
[02:12:42] And basically any data fetching that you did inside a client island also has to be serialized.
[02:12:48] Kind of like your classic next JSON, right?  And then...
[02:12:53] When it gets in the browser, the client can stream in and come in anyway.  As the client...
[02:12:58] components are kind of collected up, these islands, and hydrated
[02:13:02] as they're available.
[02:13:04] So, so far, the first experience is
[02:13:08] between
[02:13:10] a server component framework
[02:13:13] And...
[02:13:14] an MPA islands framework is almost identical,  minus the fact that the server component framework  will have loaded this router that I haven't described yet.
[02:13:25] But generally speaking, you send down these islands and
[02:13:31] mechanically is very similar.
[02:13:33] -
[02:13:34] Then, on any subsequent navigation,
[02:13:41] The server...
[02:13:44] You basically almost treat this like client-side routing, where you change the URL. It's actually like
[02:13:51] URL driven. You go to the next page, change the query parameter, do anything you want with that, and that is how you actually tell the server
[02:14:01] to re-render the page.
[02:14:03] There's no passing client props to server props.  You actually use the router to pass props to the server, essentially.  You use the URL the way that we've always done with an MPA.
[02:14:15] The key part about this experience on the second
[02:14:19] point when you navigate is because we wish to persist the state
[02:14:26] and we don't know how that state has updated on the client, no client components can be rendered on the server the next time around.
[02:14:32] Essentially...
[02:14:34] we get the new...
[02:14:36] HTML,
[02:14:37] that has holes
[02:14:39] for the client components. And if they match up,
[02:14:42] Like we diff it, we diff the old HTML and the new HTML,  and if the islands match up,
[02:14:48] Then we persist the islands and use those props
[02:14:51] to update the props on the existing island
[02:14:53] And if
[02:14:55] They don't match up.
[02:14:56] we just client render
[02:14:58] the island at that point.
[02:15:03] So...
[02:15:06] the basis of this whole mechanism
[02:15:08] is
[02:15:09] of a simple HTML diff.  I mentioned MorphDOM before,  the guys from Astro built one, it's about one kilobyte.
[02:15:16] Right.
[02:15:17] The navigation story...
[02:15:20] is kind of like an MPA.  But I want to go back to
[02:15:25] are...
[02:15:27] are...
[02:15:28] this example because
[02:15:30] -
[02:15:32] And this is the problem with Hydrogen actually had,  and all the early server component demos,  and the way they had the problem was,
[02:15:39] They...
[02:15:40] If you navigated the whole page every time, like an MPA, you were diffing the whole page every time. Sure, you saved on that initial JavaScript, right? You...
[02:15:51] you
[02:15:52] you had some, let's make our client components blue color  and let's fill them in, right?
[02:15:59] you were able to kind of, and let's give them rounded corners,  you were able to kind of go like, oh...
[02:16:06] you know, this needs to be interactive or...
[02:16:09] And
[02:16:10] you know,
[02:16:11] Maybe...
[02:16:14] this needs to be interactive. You're able to save on the JavaScript and only send
[02:16:18] the interactive parts to the browser.
[02:16:21] that you needed. But
[02:16:23] Every time you did a navigation,
[02:16:28] - Okay.
[02:16:29] you basically were sending a new HTML page.  It's slightly better than Turbo because you're diffing it and trying to match up the islands.
[02:16:37] But this kind of...
[02:16:39] is expensive.
[02:16:42] If you've heard some of Ryan Florence's early criticisms of React Server Components,
[02:16:47] Um,
[02:16:48] it was because of like this. He's like, what? So instead of sending the template once in your  JavaScript, you're sending it online on every single action. Like that was kind of mentality  people are kind of criticizing this on.
[02:16:59] And I mean, on a certain stance, you can go like, it's no worse than an MPA and MPAs seem to be...
[02:17:04] you know, doing good for
[02:17:06] you know, certain types of use cases and stuff, but it's something you want to improve upon.
[02:17:11] and
[02:17:12] The solution to this
[02:17:15] It should be kind of obvious if you're looking at this picture.
[02:17:23] nested routing, right?
[02:17:25] Like...
[02:17:26] If...
[02:17:27] If I'm only swapping out this content,
[02:17:30] so to speak, then I can leave the rest of the page alone.
[02:17:36] And
[02:17:38] this  this is
[02:17:40] It's funny how frameworks always come down to the routing paradigm.
[02:17:44] more or less. That is the clincher here.
[02:17:49] If...
[02:17:49] You made the route...
[02:17:51] the nested barrier, like the nested routing, the barrier, then you have
[02:17:55] you know, incredible ability to
[02:17:58] kind of
[02:17:59] Like you know
[02:18:00] when you're initial page load,
[02:18:02] And you control when future navigations happen.  So you can always send headers or whatever to say, like, hey, this is a...
[02:18:08] you know,
[02:18:09] future server component draw.  So you can always like the next time you go here,  render everything outside, like the black here,  and skip the blue part.
[02:18:19] So to speak.
[02:18:21] But nested routing, because we have a client-side router, lets us
[02:18:25] only render the parts of the page.
[02:18:28] that matter.
[02:18:30] for the particular navigation. We'll get to mutation in a minute, but this is the mechanics  of, again, why Remix
[02:18:37] is so...
[02:18:38] close but like almost just like
[02:18:42] a bit back. It's kind of funny.
[02:18:46] Hydrogen had the earliest version of server components,  and they needed Remix to finish the story.
[02:18:53] And it's like...
[02:18:55] It would have been really interesting if they'd both worked together right from the beginning to end up at the right place.  Because it's like the parts that Remix didn't have, Hydrogen had.  And the parts that Hydrogen didn't have, Remix had.  There's a huge symbiotic-ness of this.
[02:19:10] Next week,
[02:19:11] privy to all the information of the future, knew exactly what to build.
[02:19:22] I'm not sure.
[02:19:25] So...
[02:19:26] What I'm getting at is, okay, nested routing is the key to the initial data fetching, um,
[02:19:32] kind of
[02:19:33] navigation story. So
[02:19:36] If we can just swap out those sections,
[02:19:40] then it's pretty cool. The only problem is,
[02:19:43] you don't want to render the whole page again on the server either. If you're just swapping out this place, you don't want to render this up here. And this
[02:19:52] is a problem because what if
[02:19:55] You have a context provider at the top of the tree, and you're only rendering this component.
[02:20:00] It's kind of awkward, right?  This is why you can't
[02:20:04] Like...
[02:20:04] It's not just awkward from the fact of like you only want to render this, it's awkward from the fact that if you went on the page, clicked the counter five times, updated the state up here, now counter equals 10,
[02:20:16] you know, this counter is up 10, and you show the count here, when you go to the server, the server doesn't realize that this count is 10.  You're not going to serialize all the data back. That's what .NET did. We are not doing this.
[02:20:28] That is a nightmare.  Serializing all the client state back and forth.
[02:20:32] That's...
[02:20:33] This is why we're not going back full circle.  That's what we did like...
[02:20:36] 15 years ago.  We're not doing that.  But it means that the client components after the fact...
[02:20:42] This is why you can't render client components after the fact, because if they use context, if they read from this context up here,
[02:20:50] or up here, I guess, higher up on the page,  then there's no way that you could get the...
[02:20:57] updated values when you server render.
[02:21:02] -
[02:21:11] so
[02:21:13] Thank you.
[02:21:14] Where I'm getting to is...
[02:21:16] we have some new concerns or things we have to think about with our solution here um
[02:21:24] We already talked about
[02:21:25] importing component rules and preventing waterfalls. We talked about
[02:21:31] So
[02:21:32] nested routing and layouts.
[02:21:34] But I'm going to skip templating concerns.
[02:21:37] suspense.
[02:21:40] Yeah, load versus refresh semantics.
[02:21:44] The initial load versus...
[02:21:46] Um...
[02:21:47] other
[02:21:48] like server component navigations are different.
[02:21:51] Initially, we have to actually render everything, and after the fact, we only render server components.
[02:22:02] Right, which I highlight here, don't render islands
[02:22:07] uh,
[02:22:08] Right. Don't render islands that serve an initial load.  Render only required sections we just talked about.
[02:22:13] consequences all data needs to be independent yes okay so one of the awkward bits about about going  here is what if
[02:22:21] This is my users page, right?
[02:22:24] So I load my user here.
[02:22:26] And I'd still need my user information there, right?  We're on Twitter.  Let's go back to my profile,  as much as I love looking at the tweet.  Like, perceptually, we could just load  the user information once up here,  and still use it on all of these tabs.
[02:22:42] It's funny, you can tell by the scroll thing,  I'm pretty sure that they actually don't use nested routing,  even though I use this as my example all the time.  They might still, but...
[02:22:51] I'm suspect.  Um...
[02:22:53] Maybe they do.
[02:22:55] Um...
[02:22:57] Where was I gonna go with this? Uh...
[02:23:01] Sorry, what I was trying to get at is that you can see on that drawing that this whole section is my user.
[02:23:08] Right?
[02:23:09] So if we're only gonna draw, render this,  and we fetch the user in this section,  you're not ever gonna run that code again.  So in a sense, you have to fetch the user in both locations  if you want to use the user.
[02:23:23] You can specialize it, but if you actually want to...
[02:23:28] If you actually want to not on initial load, load it twice, you need a caching mechanism.
[02:23:35] You need a way of saying like, hey, I fetched it here and fetched it there.
[02:23:39] in a sense...
[02:23:41] Not unlike what GraphQL does or React Query.
[02:23:46] Yes, now we're back to cache invalidation, but the cache invalidation is on the server.
[02:23:51] Okay.
[02:23:52] Yeah, it's so important with these things to understand that you never actually solve any problem.  Like, you never actually solve the problems.  You just push them around.
[02:24:00] But there is different...
[02:24:03] There's different...
[02:24:06] consequences to pushing them around.
[02:24:11] But yes, now you need to do that, because it's fine.  If you just come in and render this and fetch the user, you're good.  If you come in here and
[02:24:18] and have to render both sections and you fetch the user here and fetch it again here, you're not so good.
[02:24:26] Right now, I'm only concerned with cash for the lifetime of the request.
[02:24:29] Um, you can get into whole other things on there and you can come with your own cash strategy, but I am, I am mostly talking when I say cash right now, I mean, actually just, I'm not even talking about actual long-term caching necessarily. I'm talking about like simply having some kind of way of knowing that when you do the same request in both places that you can use the same data.
[02:24:52] Right. We can get into deeper cache things, but you still have the wind of not having the cache in the browser.  But we do have to have that kind of consideration around designing this.
[02:25:02] Okay.
[02:25:02] Um
[02:25:04] And yeah, as I mentioned...
[02:25:07] We could take this further now, because if we've done this effort,
[02:25:11] of these needing to be independent,  we might as well parallelize it.  Like, on that...
[02:25:16] But we can't parallelize it on the initial page load,  because if you have a context wrapping the whole thing,  and you need to server render these components,
[02:25:26] - Thank you.
[02:25:27] you do have to do the provider before you do the children. So technically speaking, you can't parallelize the
[02:25:37] at least the client tree.  You could parallelize the server tree,  but you can't parallelize the client tree on initial render,  just kind of pointing it out there.  But if you think about it, otherwise,  this is completely independent.  So you can literally, request comes in,  and it needs to replace both orange and green here.  You could just run the orange and run the green in parallel,
[02:25:58] and then stitch them together at the end.  So if orange is waiting on some data,  and green's waiting on different data,  you can actually have them like,
[02:26:08] and suspense orchestrating all this, you can actually have them all doing their own rendering interchangeably without waiting for orange to finish before you start green.
[02:26:19] Okay.
[02:26:21] This is a lot of the benefits if you're listening to me. It's similar to what you find with loaders and parallelization of nested data structures.
[02:26:28] Yeah, is deduping the term I want to do?  It's not caching, it's deduping.  That's what we need to do.  We need to dedupe.
[02:26:35] Okay.
[02:26:37] So...
[02:26:40] There's...
[02:26:41] there's still challenges from an agnostic solution.  Because while this...
[02:26:46] I think it's fairly
[02:26:49] straightforward from a general standpoint, that you could write such a system that, you know, take Astro and then, for example, and then
[02:26:57] tell it on subsequent requests, oh, I only--
[02:27:01] Picture Astro with nested template.
[02:27:03] like some of the file system routing stuff that we have,
[02:27:06] You could picture basically...
[02:27:08] these sections being
[02:27:11] like .astro files or whatever, and then these just being your framework components.  And then when you get to a certain page navigation, be like, okay, swap out
[02:27:21] this piece, don't render the islands. They already know how to render islands and how to hydrate islands. You have client-only, you already have all the mechanisms to be able to do this if you wanted to do it. The only challenge is
[02:27:32] um
[02:27:33] if you wanted to do async stuff and streaming.  And the thing is, that's very much on the outer framework, right?
[02:27:40] versus the inner framework.  One of the realizations that I came to,  even though they're going to solve this, is...
[02:27:47] Most of the patterns we use for reactivity,  or sorry, for data fetching and async on the server,
[02:27:56] sorry, not on the server, in general, like suspense, are built based on where we use it, on read, rather than on fetch.
[02:28:02] And I think it's important to understand.
[02:28:04] It means like where you use the resource or where you await the promise is where like  the suspense happens above it.
[02:28:14] And...
[02:28:15] the
[02:28:16] It's actually kind of interesting to me because Marco had an await tag to show where that read was.  Remix actually added an await tag to show where that was.  And some people were like, "Why didn't you just use a hook?"  And I think you almost have to visualize it to understand the problem here.  I showed a really simple component here.
[02:28:33] But now pretend this is your page.
[02:28:36] in your app.
[02:28:37] And...
[02:28:38] you need to fetch this data, right?
[02:28:40] So you're like, oh, no problem.
[02:28:41] Okay.
[02:28:42] Async.
[02:28:43] or sorry, it's on this side. You're like async
[02:28:47] App await fetch data. You know, I solved it.
[02:28:51] Well...
[02:28:52] What if
[02:28:56] You...
[02:28:57] Like, where's the suspense boundary?
[02:29:02] The suspense boundary has to be above this route section.  And in our app here, there's nothing above it.  So either you just assume that the route section is the suspense boundary, or you have to push...
[02:29:13] The Await.
[02:29:14] further down the stack.  So you have this kind of tension where  you wanna fetch the data as high up
[02:29:20] in the tree as possible and await it as far down as possible. Otherwise you'll produce server-side waterfalls.
[02:29:25] And that's the thing.
[02:29:27] Waterfalls are bad anywhere.
[02:29:30] Don't let anyone try and convince you otherwise.  Waterfalls sometimes are necessary, as in they are unavoidable, but avoidable waterfalls  are never a good thing.
[02:29:40] ever, ever, ever, ever, ever.  It doesn't matter the distance.  We can talk about, we put the data right next to the database,  so, or the code right next to the database,  so it's not as bad, but like,
[02:29:50] Like
[02:29:52] If people start pushing a narrative out there that like, oh yeah, waterfalls here are okay, like...
[02:29:58] It's good.
[02:30:00] I'm packing.
[02:30:01] Um...
[02:30:02] - Yeah.
[02:30:03] This is like, this will always be a contention from a performance standpoint. The only difference now is instead of like the front end engineers being like,
[02:30:11] "Oh, you know, I'm really noticing this in my app.  You have backend engineers really mad at you going,  like, what the fuck are you guys doing here?"
[02:30:19] like...
[02:30:24] Like...
[02:30:25] Especially if you work on a large team,  backend engineers, this is why they don't want to give you access to the APIs.  They're just like...
[02:30:33] You guys will do some really stupid shit like yeah, like
[02:30:38] -
[02:30:40] I'm
[02:30:41] Yeah, if you want to piss off your back-end team, if you still have a back-end team, maybe you don't have to worry about that.  You scale your infrastructure infinitely.
[02:30:49] But like, and you just pay in dollars.  Sure, don't worry about it.  But like, you know, do more waterfalls.  The funny thing is the client side waterfalls
[02:30:59] they're almost like not even aware of because like the performance is so bad on client side waterfalls.  Like there's such a separation of requests and stuff that the backend team might not even realize the terrible stuff you're doing.  But as soon as you like bring it closer to them, they're going to be like,
[02:31:15] Like, why are you doing this to me?
[02:31:18] Um...
[02:31:19] Thank you.
[02:31:27] Yeah, exactly. And then pay for planet scale. Don't get me wrong.
[02:31:32] Sorry, I didn't put the tweet off, or the message up, but yeah, don't get me wrong.
[02:31:39] I'm just saying like maybe this won't matter.
[02:31:42] But don't sell it as a good thing.  Sell it as like...
[02:31:45] That's cool that we've mitigated the expense of this.
[02:31:49] in this specific case. Just don't move this to the edge.
[02:31:52] You know.
[02:31:54] - Yeah.
[02:31:55] Like there's benefits from a DX standpoint, but it's so funny.  Like I've watched this so many times over the years, like building everything in an ORM and the ORM wasn't that optimal.  And then, you know, you go, geez, why is the performance so bad as stuff scales?  And then you go, oh, crap.  It was because we traded DX of having a nice ORM for actually writing efficient queries.  And the answer is like, of course.  Well, let's just in a few places we need to optimize, optimize and not throw away the whole ORM.  That's generally the right approach.  So I'm not saying don't do this.
[02:32:25] your patterns
[02:32:27] Like if you've seen the data loading patterns,
[02:32:30] Maybe it's a good time to talk about the state of the art in client-side routing.
[02:32:36] It's like, because if you get to nested routing, you almost immediately hit
[02:32:43] what we've been doing like the last decade.  Um,
[02:32:47] I was...
[02:32:48] Yeah, I actually don't think crossing the boundary is that interesting. Like the fact of
[02:32:52] I was going to talk a bit about how if you pass a promise,
[02:32:57] Yeah, I mean, I'll do this before I get into the routing.  If you pass a promise from a server component  to a client component,
[02:33:03] The client component never knows if the server
[02:33:07] or sorry, the server component never knows if the client component's going to read that under a suspense boundary. Like it never knows like if it's
[02:33:13] server suspense boundary,
[02:33:15] or a client suspense boundary is what
[02:33:19] like is going to handle the situation.
[02:33:21] Right, because if you pass a promise through
[02:33:26] and you await it
[02:33:28] or use it down, and there's no suspense boundary on the client,
[02:33:32] below, like above that point, the suspense renders conceptually on the server, then the server should have waited.
[02:33:40] before sending that data.
[02:33:43] Whereas if
[02:33:45] If the suspense boundary is...
[02:33:49] in the client component and you use it under that suspense boundary, then the server should have responded right away and not waited.
[02:33:55] And that is not an easy solution to solve. So much to the point that I'd argue you could just take a stance.
[02:34:03] If you need to await something on the server,
[02:34:05] Assume that if you're going to pass a promise through, you're awaiting it on the server. I think that's the only probably reasonable approach you could take here. Or you could take the opposite and say assume it's always going to be awaited on the client and that it's not going to wait. Either or, you can make that decision. And I think if you just make that decision, then you can actually treat the data...
[02:34:26] suspense mechanism between client and server components is a completely different system. And
[02:34:32] That's interesting to me because...
[02:34:35] It means that
[02:34:36] You could have like Astro Suspense
[02:34:39] And react suspense.
[02:34:40] in the same app and them not at all, it doesn't matter.  Because one only handles the promises on the server  and one only handles the promises on the client.  And you don't need the same framework.
[02:34:53] And...
[02:34:54] as long as you have a mechanism to, to, you know,
[02:34:58] handle async.
[02:34:59] Rendering and scheduling
[02:35:01] Basically, to be able to do async SSR, you can do this.
[02:35:05] Thank you.
[02:35:07] Thank you.
[02:35:08] But yeah, let's talk about routing for a second.
[02:35:14] on its universal JSX routing.
[02:35:19] Right.
[02:35:21] Cool, okay.
[02:35:23] So I'm actually going to pull up the Remix page because Remix has good docs and they have good example to show you like
[02:35:31] how, like, we've all seen this...
[02:35:33] nested routing demo. It's just an extension of what I was showing. Can I see what the code looks like?
[02:35:41] Mmm...
[02:35:44] Yeah, I can see it a little bit here.
[02:35:47] Right.
[02:35:48] they define a loader,
[02:35:50] They define an action, and then you can use the loader
[02:35:53] data in your component,
[02:35:55] display some stuff,
[02:35:57] Form a post against that action, it updates. Okay.  The reason I wanted to show this is there's been this pattern for a while, and
[02:36:08] And it's in most client-side routers at this point.  And...
[02:36:12] uh,
[02:36:14] It's funny because like...
[02:36:15] Remix gets a lot of credit for it. We had it installed
[02:36:20] independently of Remix.
[02:36:21] completely. And ours are different because they don't only run on the server.  They're isomorphic. And I think Sapper had a pattern as well.
[02:36:27] Basically, any framework that does nested routing and data fetching
[02:36:33] in parallel, which I think the first one was  Sapper or Nux.  I'm not sure which one. In around 2017 or 2018,
[02:36:41] time period, has had this mechanism essentially hoisting the data loading out of the component
[02:36:48] so that if you have a nested route like this
[02:36:52] you can basically, when you're up here and you click from sales to accounts, it can go, okay, I need to load the data for,
[02:37:01] This section,
[02:37:02] this section
[02:37:03] and this section all in parallel while I'm loading the code for
[02:37:08] each of these sections all in parallel.  Otherwise, you'd have a waterfall.  Like if you put the data loading for sales  inside the sales component,  and you put the data loading for the main tab inside here,  and you put the data loading inside here,  and it's all code split,  you'd have this fun example of basically
[02:37:25] wait for the bundle, fetch,
[02:37:27] Thank you.
[02:37:29] Okay, get the data.
[02:37:30] render it
[02:37:32] Realize you have to render that you have this boundary.  Fetch.
[02:37:37] You know, wait for it, render.
[02:37:41] Fetch. Like, crazy amount of waterfalls.
[02:37:44] And you might think, this is absurd, who the hell would do this? Well, basically almost every app that I came across during the 2018-19 period, there's a reason that Solid was just slamming through demos with CSR only versus SSR apps. They were terrible.
[02:38:01] for doing waterfall type data fetching patterns.  Code splitting was like the new norm.  So everyone cared about
[02:38:08] a lot of the initial reducing the JavaScript side, and then
[02:38:13] you did anything in these apps and you got this really awkward gap between like loading the data and the code and all these waterfalls just
[02:38:22] horrendous.  So we hoisted it into  loaders.
[02:38:29] But what I'm trying to get at here is that
[02:38:34] Who would do that? Everyone. Yeah. Well, I mean, it's kind of like the other thing that I showed about mutation, right?
[02:38:42] People generally, if left on their own, won't care.  So this is as much of an argument for server components as anything else.  By just changing to more sane defaults, then we aren't doing...
[02:38:55] doing crazy stuff.
[02:38:58] Thank you.
[02:38:59] There's some challenges obviously with these loader patterns like TypeScript.
[02:39:03] because of the detach, how do you get the props in? Do you pass it in as props? Do you pass it in as context?  If you do context, it's easier to get the whole tree. There's challenges there.  One of the challenges I had personally was the fact that I didn't like how singular these were.  I wanted stuff more granular. Solid, basically, this is how Solid ended up with server functions.
[02:39:24] because we wanted the ability to granularly fetch each resource separately
[02:39:30] even after the fact.
[02:39:32] Okay?
[02:39:33] So, uh...
[02:39:36] I was like, "Oh, why can't we just use RPC calls for our actions?"  But I'm not getting to the actions yet. I want to focus on the loaders.
[02:39:48] Right.  Sorry.  Yeah.
[02:39:54] Oh, yeah. Oh, yeah, yeah. Yeah. Remix is actually showing...
[02:39:58] Yeah, this is perfect. Yeah, this is what I just described about the waterfall thing. And the truth of the matter is,
[02:40:05] People built apps like this a ton.
[02:40:08] and
[02:40:09] Remix was not the first one to solve this by far, but in React Space,
[02:40:14] Like...
[02:40:16] Like...
[02:40:17] Maybe they were. Next kept stuff at a page level, but ideally you'd want to have this amount of granularity.
[02:40:24] I...
[02:40:25] That's a great one. That's why they're saying no more loading spinners. The funniest thing is
[02:40:29] So,
[02:40:30] This experience
[02:40:34] of loading spinners like this
[02:40:38] is better
[02:40:39] picture the same diagram now, except...
[02:40:43] the remix side is white until we're done.
[02:40:49] If you ever want to argument about streaming,
[02:40:53] That's what you do. I think... Let's just go to the Marco homepage because, again, Marco...
[02:41:00] you know.
[02:41:01] Of course, I'm going to put JS on the end because otherwise we end up with some other stuff.
[02:41:07] I thought that was interesting about the no loading spinners because
[02:41:12] This is...
[02:41:13] It's like with streaming, without streaming.
[02:41:17] You can picture that there's loading indicators, he didn't bother doing that. The loading indicators are
[02:41:23] Fine.
[02:41:24] If
[02:41:26] they actually help you
[02:41:28] like get there sooner. The problem is in the classic example here, it's actually you're  waiting for JavaScript bundles to come in to fetch to get more JavaScript. It's this chaining  waterfall. If you could set all the data fetching to happen on the server immediately,
[02:41:45] and then show stuff as soon as possible and show some loading indicators, that's streaming and that's the winner.
[02:41:51] Right, yeah, this is like CRA or something, right? Okay.
[02:41:59] Before it got it back into React Router,
[02:42:04] technically, but Remix was before Location.
[02:42:07] And then...
[02:42:09] I don't know who came out for Solid Router or Remix, probably about the same time.
[02:42:14] I was using this pattern in demos.  It's funny, I wasn't using this pattern.  I was using something more like server components in demos.
[02:42:22] And then...
[02:42:23] um
[02:42:25] Thank you.
[02:42:25] Ultimately, I think
[02:42:27] I think Sapper...
[02:42:29] or Nuxt should get the credit if we want to go back historically on this approach.
[02:42:35] But...
[02:42:36] What I'm getting at here is that, sorry, that aside on loading spinners, I was just kind of commenting that the,
[02:42:42] it's
[02:42:43] It's funny how like
[02:42:45] different extremes work. I actually think the loading spinners are kind of a good thing, but like if something takes a long time you should just
[02:42:50] show it but i i get i get where this is coming from and i wanted to show this because
[02:42:56] We need...
[02:42:58] From a performance standpoint, loaders get rid of the waterfalls.
[02:43:02] Okay?
[02:43:04] so
[02:43:05] I started asking myself, what would no-loaders look like?
[02:43:09] Right?
[02:43:10] And the funny thing is, it's funny that solid real world...
[02:43:16] Demo?
[02:43:17] Funny.
[02:43:19] I wonder if I can actually do this.  'Cause I use this pattern all the time back in the day.  Actually,
[02:43:24] No, screw this. Let's go to Solid's Repo.
[02:43:29] I'm going to go to the next slide.
[02:43:30] Because I used to make a lot of demos without having a thing.  In an SSR, I have this silly example where in the shared folder,
[02:43:37] I have...
[02:43:38] this router that's really simplistic.  It's not even an actual router.  It's like, I just like made a link tag
[02:43:46] I basically just made a router from scratch for fun in this demo for some reason.
[02:43:50] just using like let me see switch match
[02:43:53] Where is it?
[02:43:55] components.
[02:43:56] I just put a switch match
[02:43:59] in here, like switch match, here's my routes, it matches this, then show the route.  I just did something really, really stupidly simple.  But the reason I wanted to show this is because this is the really simple approach.  Because you go, okay, when I show profile, I should show profile.
[02:44:12] So...
[02:44:13] If you notice here,
[02:44:14] I didn't lazily import.  For the other pages, I lazily imported them.  But for profile, I didn't lazily import it.  And instead...
[02:44:23] in the index for that profile.
[02:44:25] I create my data loading stuff.
[02:44:28] And then I rendered the actual profile component.  And that profile component is lazy.
[02:44:34] Right?
[02:44:36] So essentially the routers
[02:44:39] resolves the route to a component that really,  I just do all my data fetching in,  and then I pass it as props,
[02:44:46] into a lazy component.
[02:44:50] That's basically how you would do it without a loader.  This wouldn't help you with nesting unless the router itself parallelized all the nested rendering,  so that it basically could render each section separately.
[02:45:03] which breaks context, but if you're okay with that,
[02:45:06] render each section separately and breaking context, and then you just
[02:45:11] Thank you.
[02:45:11] Put it into the outlet.
[02:45:13] of the parent when everything kind of sets down.  But if basically you have a hawk essentially  that passes data into your lazy component.  And this pattern is what I was trying to show,  because I use this a ton.
[02:45:28] Like...
[02:45:29] everywhere in 2018-19 before I wrote the router because waterfalls were really bad. And I was like, let's just like separate the data from the code splitting so we can do stuff in parallel. And that turned out to be a benchmark winner. But yeah, same pattern here, right?
[02:45:45] It means that when you get to
[02:45:49] If you didn't have a loader what you'd actually have to do is say that the route page is
[02:45:54] you know, get some route information, fetch some data, and then essentially make a lazy version of it.  But I started realizing that there's a certain parallel here
[02:46:05] with server components.  I called it island here,  but you can pretend this is use client  like in a separate file that you import.  It doesn't really matter.  This is just using my syntax.  But what I'm getting at here is
[02:46:15] This could be a server--
[02:46:17] This could be a server component.
[02:46:18] And then this lazy component, it might as well be a client component, for all purposes. So you fetch your data,
[02:46:27] and then you pass on the server, and then you pass it to the client.
[02:46:34] Um...
[02:46:35] So anyways, this is my, I don't need to talk about this right now.  I basically came up with how I would design a router that worked with server components
[02:46:46] and client only, like I'd work in a spa with no server components and in a server component scenario,  and work on both sides.
[02:46:55] This might be something to implement at some point, especially when I add tenors
[02:46:59] TypeScript type stuff in here.  So next big change for the router, but in theory,
[02:47:06] All a loader is...
[02:47:07] is a component that wraps the top level of the route and automates this lazy or client kind of  boundary for you essentially. So it works well with file system routings because then you don't  have to worry about writing lazy and porting all the stuff yourself. Lazy is kind of a pain  because you have to have a separate file. So this was always really awkward from an ergonomic  standpoint because it means that every route needed two files. It needed a file for the data
[02:47:37] like why don't you just build this into the router and not worry about it?
[02:47:41] And that's what everyone did. What we're seeing right now with server components is kind of like a reversal of this going like because you don't always want the whole thing to be a client component, right? We have to put that control back in your hands. But it's a similar mental switch.
[02:47:56] because what you should be doing is fetching all your data  at the top of the route.  If you put the, if you, if you fetch later  and it's below conditional, guess what waterfall.  If you await at the top,
[02:48:08] well, then you block the rest of this stuff.  And if you have fetching underneath, that's even worse again.  So essentially,
[02:48:14] even with server components,
[02:48:17] you are basically going to replicate the loader pattern.
[02:48:20] But it's fine.  As long as you know that...
[02:48:23] then you can approach this in the,  in the proper way.  Like,  I,
[02:48:27] If not, you will create server waterfalls, and for the first year, everyone will be like, "Yay, we don't have to worry about this stuff," and then it'll catch up with you. That's just how these things always work.
[02:48:37] Um...
[02:48:39] But that being said,
[02:48:41] I think it'd be cool to unify the models.  So I just kind of throwing that out there.  I think it's very possible that a client...
[02:48:47] complete client's single page app and the server could have the same universal router.
[02:48:52] mechanism for data loading.
[02:48:55] at least the harness piece. Because what's cool about this is there's no special exports, right?
[02:49:00] You just kind of grab the location data from the router,
[02:49:06] This part is interesting.
[02:49:08] Different frameworks might handle it differently.  Maybe this is a promise.  Maybe this is a resource.  Maybe you use use.  I don't really care.  The details don't actually matter that much.  And it can actually be different between client and server is what I've been trying to suggest here.  But I'm suggesting that...
[02:49:27] This pattern could be repeatable to work in client side optimally as well as long as people are willing to go through the extra thing. I wasn't. I figured like this was too much boilerplate. So I built my router and most people did it around loaders because this is like obviously what you want to be doing.
[02:49:42] But it is interesting that people want more control.  Should we not give it to them?  It's interesting.
[02:49:51] - Thank you.
[02:49:53] so yeah there's a direct correlation between writing the code you should be running  and writing a loader that's
[02:50:00] That's all I wanted to kind of highlight at this point of the phase.  Because each of these sections, when you load them in, you want to fetch the data as high up as possible.
[02:50:11] and then use it as low down as you can.
[02:50:15] Thank you.
[02:50:16] Okay.
[02:50:18] Alright, so...
[02:50:20] Where am I in my overall arc here?
[02:50:24] *sniff*
[02:50:27] We talked about
[02:50:29] Right. It's a time to talk about mutation.
[02:50:34] *sad*
[02:50:37] *thud*
[02:50:43] Dan said that we need Chrome network tab for servers to see waterfalls. Yeah, I'm sure I mean it would help better tooling is always good. It's just but it's like, you can also kind of just like see waterfalls by the fact of like, there's an await somewhere, you're probably creating a waterfall.
[02:51:04] All right, so, okay, so...
[02:51:07] Let's see if I can summarize this the best way I can.
[02:51:10] I've already kind of...
[02:51:12] talked about
[02:51:14] why you might want an MPA-like mentality in terms of,
[02:51:20] both mutation
[02:51:22] And...
[02:51:23] page load for performance in DX. I talked about specifically
[02:51:28] I was talking specifically how we solved the routing and explained why.  If you sacrifice client-side context, essentially, if you make
[02:51:36] it's special, like only client components.
[02:51:38] You can access client context.
[02:51:41] Then...
[02:51:42] you are in a zone where you can basically just author your app
[02:51:49] with this interweaving,
[02:51:50] and
[02:51:52] Okay, yeah, there's one more-- before we get to mutation, there's one more piece I wanted to talk about, and I think it's pretty important.
[02:51:58] You kind of saw a hint of it with the router case, but
[02:52:03] People worry about how this scales, right?
[02:52:06] Because this is getting back to the Ryan Florence initial thing where he was talking about like, oh, then you're sending all these templates. We didn't actually address this completely. Because yeah, we shrunk it down. But this is still a large template. The truth of matter is...
[02:52:20] Most interactive stuff is going to happen inside these interactive platforms.
[02:52:24] spots.
[02:52:25] And the thing is, it's only...
[02:52:29] route level navigation like basically if you want things to update all over the place and
[02:52:33] you're probably gonna do this.
[02:52:36] Right?
[02:52:37] it's only route level navigation that you go back, at which point you're already kind of like a leg up on
[02:52:42] you know, MPAs. But the other consideration is, let's say I don't believe in this stuff at all. I just want my old single page app back, right?
[02:52:53] Why are we doing...
[02:52:54] All of this stuff.
[02:52:56] Why are we doing all this stuff?
[02:52:58] right well
[02:53:00] If I'm really lazy...
[02:53:02] I can just do this.
[02:53:04] And if we go back to...
[02:53:09] one of these HackMDs and you look at this example,
[02:53:14] If my page
[02:53:16] is just some data loading.
[02:53:18] And then I go straight to my client component here.
[02:53:22] What am I rendering on the server?
[02:53:26] I am not rendering any HTML. There's no HTML to render on the server.
[02:53:30] I'm literally serializing the props to my lazy component here.
[02:53:34] I'm sending the props over the wire so that when
[02:53:38] Get to the client
[02:53:40] - Yeah.
[02:53:41] I get to the client, I can then have the client either hydrate it or render it.
[02:53:48] on the client.
[02:53:50] All I am sending are the props.
[02:53:54] I would argue with you that we've just created a JSON API.
[02:53:58] Like the server is just responding with serialized JSON data.
[02:54:08] *sad breath*
[02:54:10] Right? Like...
[02:54:12] - Thank you.
[02:54:13] Yeah, we've gotten back to nested loaders.
[02:54:17] - Okay.
[02:54:21] Yeah, I mean, the thing is, there are solutions to these problems because you have the same model in Remix.
[02:54:29] Remix is like, what if you did the same thing but with...
[02:54:33] multiple flights.  The thing that we're...  I have to talk about mutation to actually  finish this story.  But...
[02:54:43] What I'm getting at is the most pessimistic view of the world, like I hate this,
[02:54:49] would literally
[02:54:50] be just make the every use client everything or you know client people are asking you
[02:54:56] a bit about how long Solid is going to take on this.  It's not the mechanics that is delaying us.  I don't know if you guys have seen the demos,  like the movies app.  It's actually an API problem that has been bugging me.
[02:55:08] We have to make decisions around data fetching.  Like right now, if you use Solid's version,  you just use resources on the server.  Like everything just...
[02:55:16] the exact same code works on both sides. The only thing that would cause a client's written component not to work on the server is accessing contacts. So assuming that the router is always present,
[02:55:27] you can basically just take everything that we have today and make it work like this. The problem is I'm not sure that's the best authoring experience. I don't like to use client. I'm playing a lot with bling in terms of figuring out what
[02:55:39] it means to wrap components and what that looks like. So this,  the delay for us is not about the mechanisms. Uh,
[02:55:47] Because, like, trust me, I'd be shouting from the roofs, like...
[02:55:51] about this stuff. I'm just patient because I don't want to ever ship on something that I don't have yet. Like, I've shown this demo off, the Movies app demo, multiple times. This is all like server component style. Incredible demo.
[02:56:05] And what I love about this demo,
[02:56:08] is obviously the fact that when you go look at the network...
[02:56:13] This is just insanely small. Yeah, inject. I always got to remember the open and incognito. This is like...
[02:56:21] third-party scripts, not from the site, but from like my Chrome extensions getting in here.
[02:56:25] Sorry.
[02:56:26] Incognito, actual sight.
[02:56:28] Sorry, wrong button. Actual site. And we'll see our 13 kilobytes of JavaScript as we walk around. And it's because
[02:56:36] We already have the mechanisms of doing the nested routing, see, swapping the nested router.  We already have the...
[02:56:44] ability that if we look at the XHR, you're going to see
[02:56:49] rendered markup for the page swapping out.
[02:56:53] It's just...
[02:56:54] I wasn't happy with the API, so I didn't release it.  Yeah, that's what this comes down to.
[02:57:00] Um...
[02:57:02] We have context working. One thing, we don't have the parallelization optimizations working yet.
[02:57:09] That wouldn't stop you from using it, but
[02:57:12] I think it's just worth us taking a second shot at it, so to speak.
[02:57:20] Okay, cool. So I'm going to see Dan recreating GSCP.
[02:57:30] Just seriously.
[02:57:31] Tweet, let's see, I think this is where I'm going to start, we need the write ups because
[02:57:41] Yeah.
[02:57:43] Yeah.
[02:57:44] My point is,
[02:57:46] On the theoretical side, like on the mechanical side of talking about this stuff, is that...
[02:57:53] *Sigh*
[02:57:54] This...
[02:57:56] scales from that static page thing with a couple interactive points
[02:58:01] Two...
[02:58:04] Um...
[02:58:05] Basically the same single page after you have today. That's what makes it exciting because put all these pieces together and
[02:58:12] Essentially...
[02:58:14] We're saying that there probably is a DX win here.
[02:58:18] There is definitely a performance win on terms of the baseline.
[02:58:22] And...
[02:58:23] it actually lets you still cover the complete range of what you'd want to do.  You can adjust the size of this.
[02:58:34] I
[02:58:36] Anyway, um...
[02:58:39] Yes, I wanted to get into this before mutation because...
[02:58:46] I think it's important to kind of
[02:58:47] understand
[02:58:49] That
[02:58:50] the
[02:58:52] *sniff*
[02:58:53] the way this scales.
[02:58:56] Thank you.
[02:58:58] Now
[02:59:00] I guess the big open question everyone has is like how...
[02:59:04] Do I do mutation?
[02:59:06] in this model.
[02:59:08] Right.  We haven't talked that much about server functions.  Right.
[02:59:14] And...
[02:59:15] - Thank you.
[02:59:17] they have a key role to play in this, um, as well.
[02:59:21] And I'll explain why in a couple ways.
[02:59:26] So
[02:59:28] First,
[02:59:29] We got to go back here.
[02:59:31] This is where our mutation story starts. Ideally, we want to be doing the left side.
[02:59:38] Not the right side.
[02:59:43] We don't want to have a double waterfall here.  And if you put two and two together,
[02:59:49] Our mental model now
[02:59:51] is very much like an MPA.
[02:59:54] We are...
[02:59:56] we have pages, sure we have nested sections, but essentially
[03:00:00] We do client interaction, but then when we want to, like everything is
[03:00:06] router based. Like if you want to update servers components
[03:00:10] you have to change the URL.
[03:00:14] so
[03:00:15] How can you build an API?  Like, what's the best pattern for it?  Well, as it turns out,
[03:00:21] The best pattern for this
[03:00:23] is also the MPA pattern.
[03:00:25] because we wanted that simplification.
[03:00:28] We just need to change.
[03:00:31] where this line is, right? Right now,
[03:00:36] Like we go to the server, come back, go to the server, come back.  And in a sense you can view that this is all like up to this point,
[03:00:43] is like...
[03:00:44] client
[03:00:45] And then, you know, like, how should I put it?  Like, we need to change, like,
[03:00:50] This is a very bad illusion, but we basically need to change where this line is.
[03:00:55] Like,
[03:00:58] The only difference between this and this and this might be where this is happening, so to speak, right?  Because if I cut it off here, it's like the same as the first one.
[03:01:07] Okay, never mind. That use of the diagram didn't work right. Let me try this again.
[03:01:14] um
[03:01:15] - Thank you.
[03:01:16] I want to take Remix's model, or what we've been doing in Starred and Quick and all of those, I want to send a mutation...
[03:01:27] But instead of responding and invalidating, I want to respond...
[03:01:33] with the next page. So the way I would personally approach this if I was designing mutation
[03:01:39] is understand that we have three goals to accomplish for designing mutation. We have
[03:01:46] First, we need to...  We have the...
[03:01:50] doing the mutation itself.
[03:01:53] Okay.
[03:01:56] We have
[03:01:58] optimistic
[03:01:59] Updates.
[03:02:05] And then we have
[03:02:08] invalidation.
[03:02:10] Okay.
[03:02:12] These three parts
[03:02:13] are part of this equation, essentially, for how we design mutations for
[03:02:20] for I think any of these solutions.  The thing is,
[03:02:24] This is the part that always, why I couldn't,
[03:02:27] like, practically watch Kent and Dan talk on the stream was because they're, like, the Remix and React are so aligned, except for the fact that the React, like, next version is so much more optimal than what Remix does, but, like, philosophically, they are, like, so aligned that the argument was, like, getting really, like,
[03:02:47] painful for me because it's like you guys would like agree if you spent the time to look at each other's projects and
[03:02:53] Um...
[03:02:54] - Yeah.
[03:02:58] Right. So let's like, I don't know what Next is doing, but I don't need to know. We can design this right now the same way that I was doing in the document. And we can basically...
[03:03:09] I'm willing to bet we can get 80 or 90% of the way to whatever next lands on.  Like these things are kind of discovered, not invented.  Like we can figure out what...
[03:03:18] what we should be doing here. So first thing, and we do have some hints
[03:03:23] And this one's very obvious to me.  Let's talk about doing the mutation.
[03:03:28] You got two options, rest,
[03:03:31] or RPC.
[03:03:33] Okay, well we know which one wins there.
[03:03:35] Um...
[03:03:37] What?
[03:03:37] This seems...
[03:03:39] maybe obvious to me, but it's because the way I designed it. When I worked on Solid Start,
[03:03:47] I looked at Remix and I was like, oh man, this is a really good pattern. But I was like, I really dislike that the actions are tied to the URL. You can only have one action per URL or whatever. And SvelteKit kind of took this later on, much later, to a different level where you could split the action to multiple parts. But that wasn't fundamentally the problem for me. I want fine-grained updates and I didn't want to associate the file system. It's not enough to split up the action. I actually want no...
[03:04:09] correlation between the action
[03:04:12] And like,
[03:04:13] the URL, like none.  Like get rid of the, get the rest out of there.
[03:04:19] And what gave me this idea is the same influence that React team would have: GraphQL,
[03:04:26] made this solution really obvious.  The funny thing is, if you look at GraphQL,  and you look at the queries, like,  do I have, like,
[03:04:33] It's a Star Wars...
[03:04:36] Um...
[03:04:37] GraphQL still up.
[03:04:41] Like, is the graphical...
[03:04:44] Like...
[03:04:45] Explorer thing around can I can I get in here? I
[03:04:50] uh...
[03:04:53] Like, can I...
[03:04:58] Was it swappy?  Like...
[03:05:00] Does this stuff still exist? I don't know.
[03:05:03] Okay, okay. Can I explore the...
[03:05:08] No, I want to explore the... the schema.
[03:05:11] Maybe this one's not the one I'm thinking of.
[03:05:16] It's just so much easier.  Yes.  Okay.  Thank you.  Okay.
[03:05:19] But this one doesn't have mutations, so I can't really show it.
[03:05:23] Damnit. Okay.
[03:05:24] It's really obvious if you've worked with Graphio  what I'm about to say,  but what I'm getting at is...
[03:05:30] you design out this crazy tree on the query side, on the getter side.  It's a graph.  Like, you have nodes that have nodes.  You have, you know, friends that have friends.  You know, you design out this tree, and all the data points are connected,  and you have nesting, and you can kind of...
[03:05:47] reach your fingers down through the tree  and pull out exactly what data you want, right?  But on the mutation side,
[03:05:54] It's just a bunch of flat,
[03:05:56] Mutations. It's just like...
[03:05:58] get this, post this, do this, do this.  And sure, your response can include part of that tree.  But generally speaking...
[03:06:04] The get is a graph and the post is an RPC.
[03:06:09] Like, I realized that
[03:06:12] Like the this is the way and the funny thing is I built a
[03:06:17] I was involved in a product called Back1RM where we built a crazy pre-graph curl trying to solve similar problems.
[03:06:24] But we built it on REST, essentially.  But smart cross-model REST where we could pulse up across.  And it was really good.  But...
[03:06:33] The challenge that I noticed while working on this was that on the fetch side, I never felt wanting.  I was perfectly happy with like a walkthrough graph, you know, through this like crazy...
[03:06:44] Um...
[03:06:45] you know
[03:06:46] We could query fields on related fields.  We merged Mongo and SQL into the same query format.  It was really...
[03:06:54] It's one of the coolest things that, like, I love that.  I always try to come and bring it back because I basically, it was like a universal query language built on JSON using Mongo syntax to work across all databases and connections between databases.  And really cool, fun thing with AST, you know, compilation and optimization.  Like, I love that project.
[03:07:15] It's too bad because the open source version didn't have, it has like the 10% solution, but internally I ended up building it up for like the next two or three years and it's like,
[03:07:22] It was way more, anyway, the funny thing is,
[03:07:26] On the get side, and I saw this with GraphQL, I never felt wanting. It did everything that I needed.
[03:07:33] But,
[03:07:36] - Okay.
[03:07:36] On the...
[03:07:39] I'm going to go.
[03:07:39] mutation side,
[03:07:41] You get something like move, and you'd be like,  how do you represent a move with rest?
[03:07:46] Because you have to like put to one location and remove from another location.
[03:07:50] It's like by like the whole you know
[03:07:54] rest philosophy of things like there there's verbs that just don't exist and i
[03:07:59] Eventually, you just end up making specialized REST endpoints, basically RPCs.
[03:08:06] The separation between the data fetching graph  and the RPCs is a very obvious thing.  And when GraphQL put it out there, it's just like,
[03:08:13] You know, of course.
[03:08:15] And since that point,
[03:08:17] no interest in going back to REST, so to speak.  Like that was a lesson from GraphQL for me.  So when I looked at this problem and I was like,  okay, file system routing,
[03:08:26] Tree.
[03:08:27] get. Mutations
[03:08:29] No. You know, get it out of there. Those should be just RPC calls. So this is how I came to the design for Solid Starts version. And I talked about it at vConf. I think this is probably one of the earliest versions of this type of thing. But to be fair, I was inspired by many other projects.
[03:08:49] Inspired in the sense that I knew they were doing similar things and I didn't... I found out about them after I'd already done a lot of it, but...
[03:08:57] They definitely did it before I did, so this is not a unique idea to what I was doing.
[03:09:05] But...
[03:09:06] What was really...
[03:09:09] Clear to me is that I wanted that separation and I
[03:09:13] If you've seen anything that the React people have been talking about,
[03:09:18] They've added
[03:09:21] stop doing that
[03:09:22] They've added...
[03:09:24] use
[03:09:25] server
[03:09:27] So my guess...
[03:09:29] is...
[03:09:33] uServer only makes sense
[03:09:36] Yeah, I mean, they could go a few different APIs, but my gut here is, React's on RPC as well.
[03:09:42] Okay, so this is
[03:09:43] This is how server component mutations are going to be based off of. This is why server functions are important. Use server is a function RPC. So key part here, separation from fetching from mutation.
[03:09:54] Okay.
[03:09:59] The next
[03:10:01] The next piece here
[03:10:03] we need as optimistic updates.  And I think from that perspective,
[03:10:08] Remix nailed it.  So...
[03:10:11] I think whatever mechanism we need to do, and I nailed it.  You don't need forms to do this.  If you've seen Solid Starts,
[03:10:18] actions, you can use a form or you cannot use a form. That part doesn't really matter. Forms are going to make sense for the MPA mentality and simplicity and I suspect we're going to see more forms. You don't actually need forms. What you need is
[03:10:29] the whole trick to remix approach is you're going to need to push
[03:10:33] Any
[03:10:36] like mutation
[03:10:38] Into...
[03:10:39] Like, while in flight...
[03:10:45] into ephemeral state.
[03:10:48] Okay.
[03:10:49] Thank you.
[03:10:50] So essentially we're going to have RPC calls
[03:10:54] At the point that we click send on the RPC call, we're going to have to push the ephemeral state.  This has an interesting side effect because you might be going like, well, how do you
[03:11:07] um
[03:11:08] Um...
[03:11:09] like update stuff, if the update, like how do you optimistic update the server portion of the page?
[03:11:15] Right? You might be going...
[03:11:17] How would you do that?
[03:11:19] And, um...
[03:11:21] You can't.
[03:11:23] So you have to make a decision there.  It's a client component that does the optimistic updates.  It's funny, but to me, I have an answer for this because Marco, thank you, Marco, Marco Workshop.  Let's see if I can find this.
[03:11:34] Marco Workshop.
[03:11:35] Is this even still around?  Building a blog.
[03:11:39] Um...
[03:11:42] I wonder if I go to the actual video
[03:11:44] And if I linked the actual
[03:11:51] Did I actually link the GitHub repo?  I can't...
[03:11:54] I should just go to the Marco org on GitHub.
[03:11:56] We can also just reproduce this case if we want to.
[03:12:03] But essentially what I wanted to show is...
[03:12:09] picture
[03:12:10] Um...
[03:12:12] let me go to medium maybe do have the medium article still open
[03:12:17] Picture this experience where you have an article
[03:12:20] and
[03:12:21] the SoulServer rendered, and then
[03:12:23] Can I...
[03:12:25] How do I add a comment?
[03:12:27] Okay. Beautiful. Okay.
[03:12:29] Let's look at this.
[03:12:32] This is a client component, clearly,  'cause we need to interact with them and add their comments.  But we can server render all the comments  the same way that we did
[03:12:40] with
[03:12:42] with the Hacker News demo.
[03:12:44] But what we can do, and what I did in this Marco demo was, I made it so that
[03:12:49] I had the server rendered version,
[03:12:52] which I didn't have to serialize the data for,  but I still loaded the component to render one of these.  And then when I add it,
[03:12:59] I have two lists.
[03:13:01] So the optimistic update
[03:13:03] actually could show the in-flight data as a client component and then
[03:13:09] the server can refresh with the
[03:13:13] actual data
[03:13:14] and the optimistic update goes away.
[03:13:18] So you have to make a choice if you want to add that extra JavaScript overhead for that experience, but you definitely can.
[03:13:25] essentially.
[03:13:26] So,
[03:13:27] I don't see a problem from an optimistic update standpoint in our design so far.  I think we just...
[03:13:33] Push it into flight into femoral state, client will handle the optimistic updates as needed.
[03:13:44] Is there a world where knowing what the action is doing on the server enables to do some cool fun?
[03:13:51] Well...
[03:13:52] So
[03:13:53] I think that would be challenging. You'd have to have the intent. You as a developer can know so you can wire it up. You can go like this is adding something to a list, but I don't
[03:14:00] know how anything else would know that, right? Like...
[03:14:05] Does it require stateful servers? No, of course not. No stateful servers here.
[03:14:09] Right?
[03:14:11] This whole premise of server components is not about stateful servers.
[03:14:17] Push any mutation well in flight into ephemeral state. Use client components to display it. Invalidation,
[03:14:26] kind of the same way we've been doing this forever with React Query.  Let's make it simple.  If you've seen Solid's version of this...
[03:14:35] or create route data, we just have a key.
[03:14:38] And then when the action invalidates, we have a key.
[03:14:42] If you're...
[03:14:44] If I was to do this,
[03:14:46] I would just
[03:14:48] Basically...
[03:14:50] Because, okay, you can look at a remix, you can't see it in this action. Maybe solid to-do MVC is the best way to do it. Let's look at solid start, right?
[03:15:00] Let's take us all start.
[03:15:02] Um...
[03:15:03] Not the baby food. Okay, here we go.
[03:15:07] No, sorry, examples.
[03:15:09] Um...
[03:15:10] Sorry, I went to the wrong place.
[03:15:15] - Thank you.
[03:15:16] Examples?
[03:15:17] to do MVC.
[03:15:19] Let's look at what an
[03:15:21] an action looks like here.  I'm not saying like the same syntax or anything,  but essentially you could define a bunch of our like server  function actions right here.  And I just put them all here.
[03:15:31] They're all async, they do some database action, and then they do a redirect, or they invalidate
[03:15:38] a specific key.
[03:15:39] You can basically see...
[03:15:41] an API where you could just
[03:15:44] What I'm getting at is you do an RPC call,
[03:15:47] style call so you can just like have a function maybe you can feed into a form in this example  our actions actually
[03:15:54] I just hung a form off them. So you can like create an action and go like take the add to do action and then do that form or you can just call as a function and it's a thing. But this, this,
[03:16:03] Detail doesn't matter that much.  So you perform an action.  You...  You...
[03:16:09] Do the validation, do the work, and then...
[03:16:11] You write.
[03:16:14] it like you're doing an MPA, like you're doing a redirect, or you're saying invalidate this data.  And instead of responding to the client at this point,
[03:16:23] You stay on the server
[03:16:25] and have the server re-render
[03:16:28] that portion of the page.
[03:16:32] Mutations, you have to conceptually re-render the whole page like Remix does.
[03:16:36] because you don't know.  But you could use key invalidation.  Let me see. I don't have an example of key invalidation here.  I talked about it in our...
[03:16:46] are the feet talk but you can
[03:16:49] You can pass...
[03:16:51] Maybe I can look at Solid Starts docs.
[03:16:54] dot solidjs to dot to com and talk about
[03:16:58] Create server action.
[03:17:04] So we do some stuff and then
[03:17:07] Is there an example with no, maybe create route actions, a better example.
[03:17:13] show impending handle error sign success message
[03:17:17] refetching, invalidating specific data. See, we were just like, invalidate
[03:17:22] classes like this is an enrollment page invalidate classes so on one side in your action you just go
[03:17:27] Invalidate classes.
[03:17:29] And then on your data fetcher,
[03:17:32] You can be like, "Hey,
[03:17:34] My key is classes.
[03:17:37] Or whatever. Do we have an example here?
[03:17:39] Not reconcile key. Yeah, keys. Yeah.
[03:17:43] It's like React query over again.  But you just put this on the server.  So instead of responding to the client,
[03:17:51] You just keep it
[03:17:54] "Do you have to do the redirect?"
[03:17:56] if you're doing a redirect. I think technically what you have to do, you have to invalidate
[03:18:01] So you have to like, you basically have to, you view it like an MPA.  So your options are reload the page,
[03:18:08] redirect. Those are your two options.
[03:18:12] Um...
[03:18:12] So if I was designing this
[03:18:15] you know, so to speak.
[03:18:18] - Yeah.
[03:18:19] Like
[03:18:21] you basically have two options, right?  It's like...
[03:18:24] invalidate, it's like reload,
[03:18:27] Plus...
[03:18:29] It's reload or redirect.
[03:18:31] And then...
[03:18:32] I would add plus invalidation if you want to have a cache.
[03:18:40] What JSX is it going to return?
[03:18:43] Are you gonna like remake your view?
[03:18:45] The router is the key to this whole thing.  It's why, like, you're, like...
[03:18:50] I mentioned already that when you go to a new page, like you do an anchor, you click to the new page and the router renders part of the page.
[03:18:59] So it makes perfect sense
[03:19:01] that
[03:19:02] what you would do is
[03:19:04] Perform your action and then tell the app what page the render so instead of doing this kind of thing I
[03:19:11] Let's--
[03:19:12] Let's look at...
[03:19:14] Let's rework this example for RSCs now.
[03:19:24] Okay.
[03:19:25] Thank you.
[03:19:28] - Yeah.
[03:19:29] for SCs, server components. This isn't even React specific, right?
[03:19:33] I'm
[03:19:33] This is the part I'm enjoying, because I'm seeing all the pieces align  that I've been working on for the last couple of years.  They're all going to come together really quite nicely.  So yeah, instead of write optimistic updates to the cache,  we're going to do what Remix does,
[03:19:47] Optimistic.
[03:19:50] Thank you.
[03:19:51] ephemeral state
[03:19:54] Okay? Send the mutation.
[03:19:58] No update cache.
[03:20:00] No render UI.
[03:20:02] what we're gonna do here
[03:20:04] We're gonna separate these a little bit.
[03:20:06] and there's gonna be like a little bit of work here where
[03:20:10] We don't render the UI here, actually.
[03:20:14] Um...
[03:20:17] We...
[03:20:19] Do-do-do-do-do.
[03:20:23] Thank you.
[03:20:24] handle mutation,
[03:20:33] plus redirect
[03:20:36] Invalidate.
[03:20:43] And...
[03:20:44] Then, after we're done that,
[03:20:47] Thank you.
[03:20:49] server
[03:20:50] server render
[03:20:52] Thank you.
[03:20:54] and then send that response back.
[03:20:57] I don't see why you would bother sending JSX straight back through the...  You are sending it back through the same call,  but you're not...  What JSX are you going to return?  Think about the imperative nature.  Picture writing that action.  Are you...
[03:21:14] It makes so much more sense.
[03:21:17] I would imagine to say render this page rather than
[03:21:22] Rather than like...
[03:21:24] Yeah.
[03:21:30] The same JSX that you get from the route changes.  Yeah, exactly. That's all you're doing.  The only reason I'm suggesting
[03:21:37] How do you tell the app to render that page?
[03:21:42] What's the API for it?
[03:21:45] Yeah, and you get the new props to the client and everything updates and stuff. Yeah. I'm just saying like, if we're just kind of like sketching out a solution here.
[03:21:53] Okay.
[03:21:54] Like...
[03:21:56] I think this is a simplification you view the page and
[03:22:00] As...
[03:22:02] Like an MPA. So...
[03:22:04] RPC
[03:22:05] Simple actions all over the place, distributed, forms,  however the hell you want to do them.  Optimistic updates, handle the UI.
[03:22:11] Then...
[03:22:13] You just...
[03:22:14] Send your mutation along the wire, have it performance action, choose what to do. Reload, show error, whatever, it doesn't matter. You basically
[03:22:22] Set
[03:22:24] the rules to then tell the page to re-render again.
[03:22:29] Because you're going to re-render the page.
[03:22:32] The key to the invalidation is if you have a long live cache, you can save work on re-rendering that page. You can be like, "Oh, none of this data changed. Only this data changed. I am going to only do the work to re-render or refetch that part of the page." You can save yourself future work. This invalidation is extra. You just moved it to the server.
[03:22:51] But as a model,
[03:22:53] Like,
[03:22:55] We're just doing the remix thing.
[03:23:00] Yeah, no, this LiveView is so different because it's stateful. This is literally like this. This is stateless.
[03:23:07] This is just...
[03:23:09] essentially
[03:23:12] an MPA-like experience, except you get client-side nested routing.
[03:23:17] and
[03:23:18] you remove all the waterfalls
[03:23:20] and it scales from...
[03:23:22] MPAs
[03:23:23] Static all the way to single page app.
[03:23:26] Like...
[03:23:27] This is like a home run. I don't know what's the debate here on that side.
[03:23:34] It's stateful if you have a cache.
[03:23:37] Yeah, okay, sure.
[03:23:39] And every app that has a database is stateful as well.
[03:23:44] Yeah, I understand. There's a session here.  It's specific to the end user. It's stateful.  I'm just saying we're not keeping...
[03:23:52] We're not keeping...
[03:23:54] Um...
[03:23:55] The stateful caching level is probably going to be at...  It could be fragments of HTML, but it's at the...
[03:24:05] It's not like you're going to sit there, like the LiveView example, where you sit there and you jam a counter and it's updating the counter on the server and sending back the diffs, right? This, like, I realize you can do hybrid, they're adding client actions to LiveView, we saw that.
[03:24:19] This model is like
[03:24:23] Mostly
[03:24:25] do the stuff on the page
[03:24:26] Only do the server components when you navigate.  Like, server components are a routing...  Like, the server component part is a routing concern.  That's why you can pretend, like...  Essentially, like, treat it like it's islands.  It's astro, more or less.  Until you talk about routing.  And then you're like, okay, well...
[03:24:45] Now we just kind of like get to keep everything we like and
[03:24:49] you know, from that perspective that we can preserve our state. But generally speaking,
[03:24:54] Yeah, if this was me designing this API, which I've already mostly designed here, you can see Solid already has almost all of these pieces.  You know, so I've used server, we have server dollar sign.
[03:25:06] optimistic updates.
[03:25:08] You know, you've seen all this stuff in these frameworks, Remix, Felkit, they all have it.
[03:25:14] Like...
[03:25:15] - It's,
[03:25:17] Yeah, we'll see.  I have no clue what RFCs land.
[03:25:22] you know but like
[03:25:25] This is the logical way one would approach this problem.
[03:25:33] Okay.
[03:25:34] I do think there's a couple...
[03:25:36] points here because  this
[03:25:39] Hopefully, we've done the whole mechanical drive here.  We talked about performance, we talked about developer experience.  Because as I said, you just write actions
[03:25:45] that, you know,
[03:25:47] reload part of the page or
[03:25:50] navigate, very MPA-like.  I don't know if everyone's going to like writing forms,  so maybe that's contentious.  You just create an action, call the function,  have data validation. This is kind of the model,  though to speak. I think if they add...
[03:26:04] you know, key base validation or something,  kind of like TanStack.  That was like the moment that I was like,  okay, all the pieces fit together.  RPCs let you do that because of the separation.  Like, I think...
[03:26:16] Yeah, I think they're probably in a pretty good place  for the mutation story.  As I said, I don't know what they're going to do,  but this seems like...
[03:26:23] I've got to stop saying the obvious choice.  Watch them do something completely different and then I look like an idiot.
[03:26:35] Right, exactly. They built their own transitions. They built their own placeholders. They basically built transitions, built suspense, built all this stuff, and we actually, like, you don't need to do all this stuff. We have a more optimal version built in.
[03:26:49] Right.
[03:26:50] The...
[03:26:51] The real challenge here, in my opinion, isn't...  It's that...
[03:26:57] and I've said this a couple times on stream, it's that when React looks at Next, they're like, "Wow."
[03:27:01] I don't even see Next anymore.  I just see React.  They're so proud of themselves  of having accomplished this,  their vision.  But when Remix or Gatsby looks at Next,  they see Next.  They don't see React.  They see Next.
[03:27:14] So, like...
[03:27:15] their product is different. Somehow, the problem is if... it doesn't matter the intents, if
[03:27:25] Every product that uses React,
[03:27:27] looks like Next.js.
[03:27:30] What's the differentiating edge? By consolidating, it's basically grounding out the uniqueness factor to a certain degree. And I think
[03:27:41] that there's a certain aspect of like,  yeah,  well these problems are solved.  Don't worry about them work on making better developer experiences.  But
[03:27:50] So much has been invested to solving the issues around React over the years that people are invested in those solutions.
[03:28:03] So, yeah, I mean...
[03:28:06] - Yeah.
[03:28:07] It's a lot.
[03:28:18] I'm saying that it can scale across the whole thing.
[03:28:21] I'm saying that there are problems in the implementations today. I'm saying that there is missing pieces.
[03:28:30] But what I'm saying is conceptually, like talking about this level model, if you accept the model...
[03:28:37] it should be able to cover...
[03:28:40] all the use cases. What it's done actually is taken the classic  single page app use cases and made them broader.
[03:28:47] Now this might actually be good enough for e-commerce.
[03:28:51] That's basically what I'm saying.  I'm also saying that because this is an architectural thing, it's not React specific, that there's a lot of interesting implications that can come with this.
[03:29:04] I suspect
[03:29:06] that within the next, you know,  eight to 12 months,  there's going to be other competitors,  even sooner,  that might, like...
[03:29:16] Might make this even...
[03:29:18] There's a high possibility, kind of like with hooks, that React isn't the best server component framework. There's better server component frameworks.
[03:29:27] Kind of...
[03:29:30] It's kind of interesting to me to think about.  I think one of the challenges here is size, right?  Because...
[03:29:38] people do toy demos, right?  So you're in this interesting zone where like,
[03:29:43] Let's do a little math together, right? Let's do a little math.
[03:29:47] Okay.
[03:29:50] So what do we got? We got the library
[03:29:54] So the library is
[03:29:56] Size what else do we need to be concerned with with library size?
[03:30:00] We have
[03:30:01] cost of server components.  We have
[03:30:04] Application size.
[03:30:07] Okay?
[03:30:09] Whole
[03:30:15] So we have like, what do we call it? Island size?
[03:30:21] - What are you doing?
[03:30:23] Um.
[03:30:24] Spa size. Okay. Let's just play with this framing for a second, okay?
[03:30:30] So let's take, let's take react. Let's take next. Okay. 80 KB.
[03:30:41] I'm actually being, that's a little bit mean. 70 KB?
[03:30:46] cost of server components,
[03:30:48] an additional...
[03:30:50] *thud*
[03:30:51] 10 KB.
[03:30:54] And your app
[03:30:55] Thank you.
[03:30:56] Thank you.
[03:30:57] Thank you.
[03:30:58] This is completely fictional. I'm just putting numbers in here. Let's say your island size
[03:31:03] is 15 KB.
[03:31:05] It's a pretty simple app.
[03:31:07] And that used to be a spa that was 170 kilobytes, okay?
[03:31:11] Thank you.
[03:31:19] Yes.
[03:31:20] Now consider solution-
[03:31:22] solution...
[03:31:24] B for the same site.
[03:31:26] where the library size is four kilobytes,
[03:31:29] The cost of SCs
[03:31:36] is
[03:31:38] 5 kilobytes.
[03:31:41] Island size stays the same.
[03:31:45] Thank you.
[03:31:48] And we don't care about the spot size. What I'm trying to get at is
[03:31:54] The reason I wanted to bring up the spa size is you went from 170 kilobytes site
[03:31:59] down to 105 kilobyte site or sorry sorry a 95 kilobyte site
[03:32:04] But some competitor on the small size scale is going to have a 24 kilobyte site.
[03:32:10] Yeah, a table would have made more sense, because I want to change the numbers again. What if, so like for toy demos,
[03:32:17] We're gonna see this a lot. We're gonna see like
[03:32:22] Um...
[03:32:23] this kind of math happening.  Like, toy demos might even be simpler,  because the island size might be more like...
[03:32:29] Like this.
[03:32:30] So...
[03:32:31] a 90 kilobyte site versus a 19 kilobyte site.
[03:32:37] but if we let's build something a little bit more drastic
[03:32:42] Let's pretend...
[03:32:44] My site is 500 kilobytes.
[03:32:47] or something.
[03:32:48] And my island size is
[03:32:51] 70 kilobytes.
[03:32:53] Okay?
[03:32:55] Thank you.
[03:33:00] No, let's make it bigger.
[03:33:01] 120 kilobytes.
[03:33:12] What I'm trying to get at is that
[03:33:16] you
[03:33:19] People are going to be pressed with this choice.
[03:33:21] where they're like,
[03:33:24] It's...
[03:33:25] E-
[03:33:26] They're gonna be like wow, I went from a 500 kilobyte site down to a 200 kilobyte site. This is amazing.
[03:33:33] with this technology.  But then they'll be like, should I stop there  or should I go to 120?
[03:33:37] It will be very realistic over this time period that sites will be half the size of RSC sites because effectively the size of component scaling is a constant here.  But because...
[03:33:50] RSCs shrink the size of the component size,
[03:33:54] the comparison
[03:33:56] of here actually gets more emphasized
[03:34:00] than...
[03:34:01] it would have in the past.  Because if you have...
[03:34:05] If...
[03:34:06] If this, this as a SPA framework,
[03:34:10] Let's like do them.
[03:34:12] like this is a spa framework.  Sorry, let's put the spa size in here.  The difference between these two as a spa framework  would have been something like, let's see here.
[03:34:21] 9, all right, let's get rid of the cost of SCs.
[03:34:24] So
[03:34:25] Um...
[03:34:27] basically four, seven, six...
[03:34:30] Yeah, like 430 or something.  Let's...
[03:34:33] Let's say 420, right?
[03:34:37] You would have been like, "Wow, if I built this app in React, it's 500 kilobytes, but if I built it in Preact, it's 420 kilobytes."
[03:34:45] Right?
[03:34:47] - Thank you.
[03:34:49] You know, like that's the kind of comparison you're going to do.  But when people go to server components...
[03:34:54] it's,
[03:34:55] It's gonna be like...
[03:34:56] more emphasized. It'll be like, "Oh, I can make my site half the size if I don't use React."
[03:35:05] And maybe it won't matter.  Performance is good enough.  But I'm saying this is going to be very compelling  when you can basically make sites the size of an astro site
[03:35:15] and get the same experience.
[03:35:22] Yeah, so...
[03:35:24] Yeah, it's interesting. And I want to point out, I just said something that's not completely true.
[03:35:29] There's a difference between server components and client components and MPA islands in terms of what components.  See, if you...  Do you know what's...
[03:35:39] Let's look at...
[03:35:41] a website. Medium, is that good? Maybe you look at Twitter.
[03:35:45] Whatever, it doesn't really matter. Let's pretend now that we've built this with our RSCs and MPA versions of this site.
[03:35:55] Um...
[03:35:56] So
[03:35:57] In our RSC version, this stuff's all static.
[03:36:01] We don't need to do anything with these links. This is an island over here, there's some edit profile stuff. These numbers might be islands because they update with WebSockets in the background.
[03:36:12] The thing is,
[03:36:13] These are going to be islands.
[03:36:15] in a server component world because
[03:36:17] When you click, you're gonna swap out this content
[03:36:22] on the server
[03:36:24] presumably, but the nav is actually in the parent section.  So you're going to actually update the styles
[03:36:29] By...
[03:36:30] with a client component that updates.  So technically speaking, you're gonna have,  your navigation stuff is gonna have some JavaScript around it.  Maybe your forms are gonna have some JavaScript around it.
[03:36:41] Um,
[03:36:42] maybe some error boundaries type handling stuff.  You're gonna have more client components  than you would have in the islands.  'Cause in the islands, you don't care.
[03:36:50] This line will come from the server under...
[03:36:53] like MPA, not islands, I shouldn't say it.  With an MPA, you don't care,  because this line will come back from the server, essentially.  When you click on the next link,  this will not be an interactive component.  So, like, I forget what it was.  It was...
[03:37:05] a quick made the movies demo right and i you remember this i was like sitting here you know  talking about like salivating over how awesome this app is because it's like interactive and  it's got the javascript and it's doing all this and it's 13 kilobytes well if you built this
[03:37:21] App.
[03:37:22] as...
[03:37:24] Um...
[03:37:25] Sorry, as an MPA, not as a server component demo.
[03:37:28] it would be zero kilobytes of JavaScript.
[03:37:31] right? Like maybe one of these effects loads a little JavaScript, but like building in this as an MPA,
[03:37:37] doesn't require JavaScript to navigate around. Because when I click this, it'll refresh the whole page.
[03:37:42] Whereas server components like this, I actually need to keep
[03:37:46] the active state of my links.  I need to handle a few other things.  So it's not like...
[03:37:54] Um...
[03:37:55] from a size perspective, an MPA with islands will still be smaller than the server component,  not just because the router, but because of like...
[03:38:03] certain interactive points that you just don't care about in an MPA because you know it'll come back from the server.
[03:38:12] Right.
[03:38:14] Right. So,
[03:38:16] The navigation and nested layouts, you could do it with links. Yeah, but that's not the natural way you're going to siphon off your app. You're probably not going to draw the links. I mean, you could.
[03:38:26] but you're probably not going to draw the links with your
[03:38:30] on the server, probably not.
[03:38:34] There's still interactive parts. I always love showing this demo because this shows off the diffing because your input doesn't lose focus even though we're swapping the page out under you here.
[03:38:43] This is the power of keeping the state with server components.
[03:38:47] Like, that you can basically...
[03:38:50] you know, not lose input focus, do all this kind of stuff.
[03:38:54] But I do want to point out like this, you know, this is a client component here doing a bunch of stuff. And it's quite possible that with an MPA, you wouldn't even bother. Like, I'm sure you would because you'd have autocompletes and all that kind of stuff in like a real site. But I'm just saying like, it's these kind of considerations because
[03:39:12] In MPA, you could,
[03:39:14] you could like type something and because you know,  it's an MPA or something,  the experience might be different.  You click submit and then you do it.  And then this was actually just an input with no JavaScript.  I just want to call out that generally speaking,  because maybe you don't have page to page transitions,  you know,  in the same way,  like,
[03:39:32] There will definitely be more JavaScript in a server component than in these MPA scenarios.  But the difference is so much smaller.  This is still a significant jump.  The same demo in Solid Start without islands is over twice the size.  And SvelteKit's about 35k.  Solid's about 30k kilobytes.  To do this, I don't mean the initial load.
[03:40:02] main page.
[03:40:03] navigated around a bit, and then just counted the total amount of JavaScript sent.  And obviously, initial load is better than that.
[03:40:10] But when I did that comparison,
[03:40:13] You...
[03:40:15] It's significantly less JavaScript over the course of the lifetime.  And you might be like, who cares?  You know, initial load is only what matters.  Sure.  But it's...
[03:40:25] So this approach just lends to it automatically.  You don't like you write your code this way.  You don't think about it.
[03:40:32] I'm going to go.
[03:40:33] so
[03:40:35] Yeah, islands and server components ultimately do have different implications on code size.
[03:40:44] it does impact the math a little bit.  I mean, beyond just this five or 10 kilobytes  that I'm calling out here,
[03:40:51] Um
[03:40:53] - Yeah.
[03:40:55] But like...
[03:40:57] - Yeah.
[03:40:57] So I do want to kind of like put that out there that,
[03:41:00] there are differences, but I think for most people,
[03:41:06] You just need to just...
[03:41:08] I know it's so terrible to reverse the thinking and go like,  we're back to building things.
[03:41:15] like building for the web. I don't know how. It's so funny because all the stuff sounds so like
[03:41:20] like euphemisms almost or like hyperbolic because you're just like building towards the web platform. Like this is not actually the web platform. It's just this kind of MPA.
[03:41:30] mentality of just like pages and posts can still scale up to interactive apps.
[03:41:36] with great...
[03:41:37] developer experience if we do it right. So, um,
[03:41:42] Yeah, I think there's there's a lot of really interesting stuff here as long as you can kind of see and
[03:41:50] And I think part of that comes from just understanding that...
[03:41:54] This is not out of thin air.  This is actually...
[03:41:58] kind of a progression that almost everything we've been working on the last decade has been
[03:42:04] gotten us to. This isn't just like, hey, let's, you know,
[03:42:09] - Okay.
[03:42:10] mess around with stuff because we suddenly care about performance. It's like,
[03:42:14] all the aspects and learnings about client-side caching, mutation, optimistic rendering, waterfall  reduction, all that stuff is just getting wrapped into the architecture itself to produce something  that is a little bit different. It is not a single page app.
[03:42:29] It's not a multi-page app either.
[03:42:31] It's something else.
[03:42:33] It's something kind of new.  And regardless of all the optimization techniques that we're seeing out there, stuff like maybe like...
[03:42:39] or different approaches to the hydration, it still comes down to the routing being the foundational piece in understanding what our architecture is.
[03:42:53] the
[03:42:54] All signs point to it being hybrid.
[03:43:01] This is JS turning 30-ish. Yeah, I can...
[03:43:05] Get on that.
[03:43:07] All right. So do we have any questions?  Does what I'm saying make sense?
[03:43:13] I noticed chat got quiet the last like,
[03:43:17] the last like,  uh,
[03:43:19] 20, 30 minutes as I'm giving my long tirade...
[03:43:23] Like at the beginning of the stream, there's a lot of people who had concerns.
[03:43:26] This is when I'm going to address them.  If you want to poke a hole in any of this,  worried about scaling, worried about...
[03:43:33] Um...
[03:43:34] you know,
[03:43:36] like,
[03:43:36] what this can do. Let's talk about it for a few minutes before we get into this week in JavaScript.
[03:43:42] Right.
[03:43:48] Dan did another tweet during the stream.
[03:43:59] Yeah, yeah.
[03:44:00] I think it would be even cooler.
[03:44:02] because...
[03:44:05] Well, we already know what that looks like, right? If you've used Solid Start, can I get an idea of what that looks like? And the reason is
[03:44:12] Like...
[03:44:13] so many of these things just get automatically handled for you, right? And it feeds into like,
[03:44:20] He...
[03:44:21] It's funny.
[03:44:22] Server components
[03:44:23] are coming in right now with this DX thing, where everyone's like, oh, you can just use an async thing, and then you don't have to worry about a local component fetching.
[03:44:30] The thing that enables that, if you've been following along here, is not the server components completely.
[03:44:36] Because I described how you do this with a universal router.  It's just suspense.
[03:44:43] Suspense can't prevent waterfalls.
[03:44:45] nor can all this async component stuff everyone's talking about.  But once you have suspense,
[03:44:51] It's so nice.
[03:44:53] Because you can just do async stuff on the server...
[03:44:56] And then it just works and it streams and it comes out.  Like you don't have to, all that coordination,  just, you know, it's handled for you.  Race conditions, all that kind of stuff.
[03:45:04] And again, because I'm always worried about bugs and implication stuff, I haven't been pushing a lot of the solid start stuff.  But that part of it has been a pleasure for the last couple years.  It's so much obviously nicer to deal with than having to do with the blocking stuff.  I understand that the blocking stuff made things easier.  But once you can just go, oh, yeah, I'm going to fetch this data, wait for this data, and have it all just stream out and load.
[03:45:34] You go, wow, this is like, I'm getting the optimal performance and I didn't have to do  anything special.  Automatic data serialization.  When you put all the pieces together, you're just like, this is really quite nice.
[03:45:45] And we've been living in that world even without server components for the last, what, like,
[03:45:49] couple years now.
[03:45:51] Um,
[03:45:52] It's kind of interesting that React kind of probably intentionally held back on a lot of this stuff so that it would all come together in this final solution.  And it's trickier because not everyone was willing to wait.
[03:46:04] But I think
[03:46:09] I think that we are getting to a point where like...
[03:46:13] That reality is going to be soon.  I'm looking so forward to when I get a little bit of time to come back in here and finish up that part of the story, at least on Solid's side.  As I said, I've very much taken my time with the APIs, and we're learning a lot about server functions.  And Bling is a really good way to experiment on these patterns to understand what we like on the API DX side.
[03:46:40] but like on the mechanical side,
[03:46:42] You can already see it. It's just, it's so good.
[03:46:45] Super fast, super small.  The second I saw that Movies app demo especially, I was just like...
[03:46:51] I don't know if I ever want to build apps in a different way again.
[03:46:55] Like...
[03:46:57] Eat it.
[03:46:58] It's basically the years fighting against this stuff, you know, like the JavaScript size, the creep and all that.
[03:47:05] It's just like, it's gone.  It just works.  Like the model dictates the benefit.  Like you, you,
[03:47:11] Mm-hmm.
[03:47:12] You're still gonna be able to get yourself in trouble  if you do stuff that doesn't scale well,  but the default random guy builds a blog site,
[03:47:21] gets
[03:47:23] basically...
[03:47:24] Astro like
[03:47:26] performance
[03:47:27] but can just write it like
[03:47:30] with something like React or Solid or whatever.  Like, it's just...
[03:47:34] I don't know, it's going to be interesting if React can actually deliver on the promise.
[03:47:39] That remains to be seen.
[03:47:41] But I am...
[03:47:43] not concerned with the paradigm from a
[03:47:45] us finding the right DX, so to speak.  And I'm not concerned on the paradigm,  finding the right performance,  maybe outside of React, if that's a concern.  Both of those are not concerns for me.
[03:48:03] Right. Yeah, so it's...
[03:48:07] So don't get me wrong, I think performance is very important for that reason among others.  But I guess the question is, like...
[03:48:14] If you view client-side cash writing and stuff and all that as
[03:48:18] Um...
[03:48:20] like optimizing for performance, you're already there.
[03:48:24] Like, this just is like delete, delete, delete.  Do you know what I mean?  Like...
[03:48:28] That's where the DX part of the story kind of comes in, because the base case...
[03:48:33] is more performant.
[03:48:35] And it's simpler.
[03:48:44] Well, I don't know. I think architecture changes are harder.  It's going to be harder for React themselves because React spent the last few years going like,  look, we know, stay the course. You don't need to pay attention to this new stuff. It's not...
[03:48:55] big enough or different enough.  They didn't do it, but the community,  the whole ecosystem's kind of been working on that.  No more JavaScript fatigue.  And now it's like, no, you guys,  we should change what we're doing.  At that point, it's kind of like...
[03:49:08] Everything's new again. It's kind of scary. Hooks was easy to adopt. This is harder.
[03:49:15] And at this point, you have to start thinking about...
[03:49:20] what this means.
[03:49:24] It'll come much faster.
[03:49:27] I'm going to guarantee this. Okay, here's the thing.
[03:49:32] This is a general architectural thing, so much to the point that even if the Angular core team doesn't get to it,
[03:49:38] Someone's going to build this on Angular for Vite.
[03:49:40] in less than two years.
[03:49:41] Guaranteed. This is not going to stay in React land.
[03:49:45] It...
[03:49:46] And if anyone wants to do that and wants to know how, talk to me, I'll help you.
[03:49:52] What could compete with cirrhacons in 5-10 years?
[03:49:56] *sigh*
[03:49:58] A lot of things.
[03:50:00] Okay.
[03:50:01] Um...
[03:50:03] might finally...
[03:50:05] get to where we need to,
[03:50:07] It would be interesting what that looks like, but I think there is still potential
[03:50:13] For that, the thing that I'm not really emphasizing here that I should be, that like the missing gap that makes me really excited for the future about this is what you're seeing here is a layering.
[03:50:22] Like...
[03:50:23] Dan's tweet is actually really good at showing the layering because he's showing, okay, I'm
[03:50:29] Initial code.
[03:50:30] on the server,
[03:50:32] you know, then in the client, and he shows us layering.  This layering could also extend to build time.  It could extend to edge versus serverless.  And I'm not suggesting just the server component thing.  It's true about the dollar sign bling operators too.  We're talking about...
[03:50:47] distributing a monolith across
[03:50:49] Architecture.
[03:50:51] and across time, like when you do the building, when you do it.
[03:50:55] So...
[03:50:55] Essentially, this is the area of exploration, which means that
[03:51:00] When I talk about Wasm, I might be talking about...
[03:51:05] you know,
[03:51:06] how it can apply to optimizations in a certain place.
[03:51:10] The biggest question is going to be around granularity.
[03:51:13] Server components are saying components are the right granularity. Here's the props. That's what we serialize. It makes it really dirt simple. You don't have to worry about the details.
[03:51:22] An alternative approach might be something more fine-grained, like what Quick does.
[03:51:29] the reality might be somewhere in the middle where certain decisions are always coarse-grained for simplicity  and other ones are fine-grained for, you know...
[03:51:37] efficiency. Server components are coarse or grained, server functions are finer grained. That kind of split. There's a lot of variations on it, but when I step back and look generally, it's all solving the same problem. It's like making sure that work gets done closest to where work needs to get done, so we can basically distribute
[03:51:59] our app in a way that is efficient for everyone across the whole spectrum.  That's the big takeaway.  This isn't about server and client.  It's not even mobile or whatever.  It's about...
[03:52:09] taking monolithic architecture
[03:52:12] and being able to
[03:52:14] using an efficient distributed way without it's like it's like microservices for everyone without writing a microservice
[03:52:26] No, it's like this is the challenge here. Instead you write a server component app and drop your app into it. It's like Astro. How do you move a next app to Astro? That's the same thing with server components.
[03:52:47] Am I right to say it's improving DX in cases where you're already optimizing for performance, dealing with capture and whatnot?
[03:52:52] Yeah, and then the other case, it doesn't matter.  So it's like no worse.  So it's basically just like...
[03:53:00] for the most part, like a net positive.  I think the place where I start seeing the friction here comes in is the fact that they're the server and client.  Like it's about DX where the friction comes in as well.  It's about understanding that the server and client models
[03:53:15] Like there might be different data fetching models.
[03:53:18] because...
[03:53:20] But it...
[03:53:21] Yeah.
[03:53:22] Trying to unify that is probably the biggest challenge here, and we might be being too prescriptive now. We're hoping that by
[03:53:30] putting everything together into the same patterns, we can eliminate that as a concern. I find that's never completely effective.
[03:53:37] But I think that's where the challenge is,  where it's like use versus async component.  That's split.  Why is there a server component, client component?  And what we're saying right now is like,
[03:53:46] it's good to acknowledge that there's these different zones and,
[03:53:50] because you can optimize for them.
[03:53:52] So that's a performance consideration.  It's good for your sanity too if you think that way.  There's an argument, and this is like the five to ten year question, that...
[03:54:01] And the quick question is, should a compiler optimize that for me and not worry about it?
[03:54:07] It depends on how much you want to give up that control.
[03:54:17] - Thank you.
[03:54:18] So I wonder if the... I see this kind of...
[03:54:21] a separate side of it. Stuff like Forget is interesting because it helps improve React code,  but again, you have the same transparency thing. There's always trade-offs when we add on this  stuff. I don't want to sound like this isn't going to hit its new...
[03:54:38] thing. I think one of the, like, there's so many dangers you can see in this right now,  when we start encouraging people like, oh yeah, waterfalls don't matter. Like,
[03:54:46] If we say that officially, it will come to bite us.  100%.  We'll be like, oh yeah, we wrote all our code with waterfalls, and...
[03:54:55] Now we want to move it all to the edge so we actually don't like those waterfalls like like it's better like
[03:55:02] Stuff will change but I
[03:55:05] I think...
[03:55:07] I can't speculate on the impact on stuff like forgetting that because it's all about balance.
[03:55:21] Right, and this is kind of split here, but there's nothing stopping you using the current way, right? Server components are a routing thing. That's why I said the name is really bad. It's like an architecture, like a routing consideration. So if you're on a page,
[03:55:33] and it's interactive, and you're like, oh, I want to change the profile photo,  then you have a couple choices.  You can just...
[03:55:40] change the profile photo or you can just
[03:55:43] like go, "Hey, doing the action, change profile photo."  And then in the background it diffs, like, I don't know if that's, like,
[03:55:51] In both cases,
[03:55:52] you just hit an end point and it's the difference between the end point being  like,  Hey,  um,
[03:55:58] I'm going to like...
[03:56:00] It saves duplication in a way, and I haven't talked about this much, and I hit this a lot with...
[03:56:04] So I'll start because
[03:56:06] When you're creating an action, conceptually, pretend we didn't have an action print if you're just hitting an RPC, you know at the point that you do the processing,
[03:56:14] on the server what you should be doing like you're like oh
[03:56:18] This I've added the item to the list.  Let's go to the details page.  You know that information at the server.  But what you have to do then in a classic single page app,  it's the API has to go.
[03:56:27] Okay, indicate a success.
[03:56:30] It depends on where your logic is a bit.  Maybe that's a bad example because a success case is easy.  But there's a certain point where you end up like...
[03:56:39] duplicating logic between client and server in order to do the same action because you know that the server will do it, check the thing, and then the client has to know how to handle the exact same thing again. So you have to communicate that as well along with the data. And to be fair, that decoupling can be very good because it means that you're not tying your back into your front end. But what this is actually suggesting is we just want to move the
[03:57:01] line of what is front end further back.  So the coupling is actually good here.  If you want that abstraction...
[03:57:08] Have that abstraction be between your data service layer and the action, not between the action and the front end.  It's a matter of figuring out where these things belong.
[03:57:18] Um,
[03:57:21] And I think
[03:57:23] This is why it comes down to learning and patterns.  Because you...
[03:57:27] can still do it the old way if you want to. I just suspect you won't.
[03:57:52] yeah exactly so like that's the thing like i think i think this is an exciting time you know
[03:57:58] seeing these things.
[03:58:09] So anyway, it was done in the 90s. Yeah, I don't know. These things kind of keep on coming around, so to speak. And the reason they keep coming around is because the desire is still there.
[03:58:20] There's the hope of unifying the document web with the application web.
[03:58:27] This...
[03:58:28] Seems like the best way to do that so far.  I know there's a lot of friction because here's the thing.
[03:58:33] This model puts stuff like tan stack query into question.
[03:58:37] because it's kind of built in. We moved the line back.
[03:58:40] Where that stuff's happening is in a different point.
[03:58:43] it puts, so a lot of the data fetching libraries, state libraries, their impact drops, but it has  other implications, right? I think the only reason the React team's even talking about reactivity  is because they're like, look, if we think we're in a server component world, we're like 80% of the  world's server components, maybe we can make that concession to reactivity in the client,  because it makes sense, because there's like,
[03:59:03] It's just the really interactive parts.
[03:59:07] I don't agree with their argument or logic there, but I'm just saying like,
[03:59:11] it starts changing the way you think fundamentally,  which means it's not just changing the way we look at the server,  it's changing the way we look at the client, which...
[03:59:19] is scary.
[03:59:20] Um...
[03:59:23] That's the part we have to acknowledge here. This is not just a feature. It's not just lakes. It's not just like, "Oh, I optimize this one thing." This is not about optimization.
[03:59:34] This is about actually changing the way we build web applications.
[03:59:44] Yeah, I talked about this a little bit. I don't know for sure, but we designed it on stream about 30 minutes ago. What I'm saying is whether it's a forum or whatever, it's that mentality.
[03:59:54] We need to...
[03:59:56] just to kind of go over this a little bit, we need to use
[04:00:00] RPC.
[04:00:01] Um, did I...
[04:00:02] Did I draw it any better anywhere else? No, I just talked through it.  Unfortunately, you might have to watch the video to get a better answer. But we're gonna do an RPC.
[04:00:10] that's going to push whatever that mutation into flight into ephemeral state. And then when we hit the server, we're going to do our action on this RPC and then direct somehow the page to reload.
[04:00:24] or redirect, essentially. And that reload or redirect is basically just
[04:00:29] re-rendering the page with, uh,
[04:00:32] RSCs and then the client will get
[04:00:35] the rendered HTML, JSX, whatever, the generic...
[04:00:39] term and diff that but basically it's gonna it's gonna be like a forum post it's just gonna be  with the ergonomics that we choose
[04:00:48] But conceptually, I think we're thinking in pages.
[04:00:56] Um...
[04:00:59] Good.
[04:01:00] Ultimately, I think it gets simpler at its introduction level.  The problem is when you come in, this is why they're playing the whole framework thing.
[04:01:08] When you learn, when you come in and you go, I want to build a React or I want to build a site and I want to use React for it or solid or whatever.  What you're going to do is they're going to be like, okay, here's next. Yes. Let's say you got to use next. So you're not thinking React or solid. You're thinking it's start or next or kit or whatever. And your first experience is going to be like, here's how you define a route.
[04:01:28] Okay. And...
[04:01:30] In this route, you can render some markup.  You're not even going to talk about client interactivity.  I'm familiar with this because...
[04:01:35] It's like MPAs, you teach this the same way you teach MPAs, which is actually really simple.  You tell people to focus on the markup,
[04:01:42] This is part of the reason why I've been debating whether actually server components should actually be .astro files, like if that actually is a way better DX for this use case.
[04:01:50] because when you come in,  you want to just rent,  you're teaching people the web  by learning,
[04:01:58] making markup and fetching data.
[04:02:01] The component wrappers are kind of excessive there.
[04:02:06] You literally could just view this as like,  here's my HTML, it could be JSX,  but here's some HTML, here's some data fetching,
[04:02:13] And don't worry about nesting, you just made your page.
[04:02:16] And then, you know, maybe later you worry about adding a layout.
[04:02:20] But, and then at some point you were like, oh, I want to do something interactive.  And then you're like, okay, now that you have my page, let's add a component with state.
[04:02:29] This is an interactive component.
[04:02:31] So you go and you go, okay, since it's an interactive, we have to say it's a used client or whatever term.  So their naming is particularly bad.
[04:02:41] in this area.
[04:02:42] So you go in.
[04:02:44] and you add the used client and you go, here's how you add state to your app. And you build your client component and you put it on your page.
[04:02:52] This is the path forward to this and like oh
[04:02:57] How do I navigate to another page? Will I just put an anchor?
[04:02:59] a lot of the spa concepts...
[04:03:02] Become advanced concepts that you might never even need to learn from
[04:03:06] Essentially, that is like even...
[04:03:09] some of the state stuff might get pushed off to like chapter two.
[04:03:14] That's how you teach this stuff.  Web fundamentals.
[04:03:20] Yeah.
[04:03:20] I keep on saying this
[04:03:22] I don't know if Astro should go this way, but like...
[04:03:26] *sniff*
[04:03:27] you know,
[04:03:35] So, like...
[04:03:37] The problem is if you start from React today, you're going to be thinking all the wrong stuff.  This is really just like...
[04:03:46] Forget everything you know. No one likes that.
[04:03:53] It's exciting though, as you can imagine, because if it's Forget Everything You Know,
[04:03:57] This is a wild open playing field. The thing is I think the adoption will be slow enough on this stuff initially.
[04:04:02] Um...
[04:04:03] Thank you.
[04:04:04] Like, it's gonna take some wins.
[04:04:06] before people actually recognize the power here, which means that React will have its time to come up with a good solution.
[04:04:19] I mean, that's mostly it.
[04:04:21] I don't
[04:04:23] I'm actually really happy the work we're doing right now. We're like deleting a lot of stuff.
[04:04:29] My goal
[04:04:30] In creating a solid start, it was creating a starter.
[04:04:33] I don't care about meta frameworks. I don't like frameworks. You build your own framework on top of it. I just, I wanted to make sure that the baseline experience
[04:04:41] for building didn't require a framework. When people go, you need Next.js for this, that is not
[04:04:47] what I want to be telling people getting started in web dev.  That is just, I really, really didn't want that.
[04:04:54] and
[04:04:55] So what's going to happen with start is the work's going to go into the router. We're going to have that universal router that works your client only server components the whole spectrum but the work can go in the router.
[04:05:05] We have bling to do the server functions.
[04:05:11] you know, and potentially the islands.
[04:05:13] And
[04:05:14] from there
[04:05:16] you know, a plugin for file system routing, if it makes sense or whatever.
[04:05:20] It like that's it. The framework is is just an astro for the deployment and the baseline.  The at that point, the framework is just not even a framework, which is beautiful.
[04:05:29] If someone wants to build...
[04:05:33] Nuxt or whatever on this, that would be awesome. But that's not my goal here. I think
[04:05:39] that
[04:05:40] What we need is just a solid foundation.
[04:05:44] We need... I've already seen...
[04:05:47] I wanted to create the Create T3 app.
[04:05:50] of frameworks, not of
[04:05:52] or a meta framework, not a meta meta framework. In a sense, Create T3 app is like the meta meta  framework thing where all the pieces are all independent and it's the way you put them  together that makes them the thing.
[04:06:02] For us, our meta framework is that. The thing itself is nothing. It's just putting the pieces together.
[04:06:08] Those pieces might even be optional.
[04:06:10] To be fair.
[04:06:12] That that is where my mind is at if I've
[04:06:16] I want to make sure people can build the best things. If we get too prescriptive here, we, you know,
[04:06:22] we risk...
[04:06:23] You know
[04:06:24] -
[04:06:26] I'm trying to think of how to best put this.
[04:06:30] As long as someone can get up and start with an SSR app in an optimal way and they have all the pieces they need,
[04:06:35] then like,
[04:06:36] base pieces, then I've done, like, we've done our job here.
[04:06:39] It's...
[04:06:41] Some people, I forget who was, Theo was comparing that RSCs are like that React going to its roots and being the...
[04:06:50] minimalist and you both thing again.
[04:06:52] No, React is...
[04:06:53] It's become the framework. This time around it's angular.
[04:06:57] so to speak.
[04:06:59] And my goal is to be the React this time around.
[04:07:02] If that makes sense.
[04:07:16] Bling is, we took the server functions, the dollar sign stuff, out of SolidStart and generalized them.  And we've been working with Tanner recently.
[04:07:23] Lindsley from Tanstack, as a way to basically bring server functions to everyone.
[04:07:29] So,
[04:07:31] This is...
[04:07:32] a foundation for not just RPCs, for code splitting, lazy loading, all this stuff that works across frameworks. Tanner is building Tent Stack Start, inspired by Solid Start, essentially, as a React framework, and Solid's a solid framework. We realized that being agnostic was not going to serve our goals. We need to be specific in order to actually accomplish what we need to accomplish, but that didn't mean we couldn't share stuff and work together.
[04:07:55] So Bling is an example of that kind of collaboration.
[04:08:09] Okay.
[04:08:21] Who's English? No, React is what I meant.
[04:08:24] Like, they've decided that they need to be the framework that has all the pieces kind of coming in.  I realize that they're, like, a spec, so they're not really.  But I think the effective...
[04:08:33] result of this approach is that that's what's going to happen we'll have to see
[04:08:47] All right, I think if we're good on questions,  I'm gonna gear up right now for this week in JavaScript.  Give me a second.
[04:08:54] as I kind of shift my view around.
[04:08:58] Do-do-do-do-do-do.
[04:09:00] Keep on firing questions, I'll answer them as I'm kind of
[04:09:03] getting myself set up here, but
[04:09:05] um...
[04:09:20] Alright.
[04:09:34] Sorry.
[04:09:35] Just getting this all set up.
[04:09:49] Mm-mm-mm.
[04:09:55] It's so weird. Twitter's been so messed up recently.
[04:09:58] That like...
[04:09:59] I'm trying to...
[04:10:07] It's like...
[04:10:08] Yeah, it's fine.
[04:10:12] Thank you.
[04:10:14] Half the stuff I was looking for I can't find at the moment, but it's fine. Let's get there.
[04:10:22] This might be a short This Week in JavaScript.
[04:10:33] Yeah, like I see a tweet that I did on March 4th in my bookmarks from someone else quote tweeting it, and it's like literally missing from my timeline.
[04:10:40] I'm seeing like
[04:10:41] I'm seeing like
[04:10:42] tweets from like
[04:10:44] different
[04:10:48] stuff getting pushed up.
[04:10:51] Oh, do you know what it is? Haha.
[04:10:53] I'm in my mentions or my replies. I'm sorry.
[04:10:58] It's because of the... I was using Twitter to do all the examples here. Okay, I feel better now. I'm not insane.
[04:11:06] alright
[04:11:09] Alright.
[04:11:15] Let's...
[04:11:16] Okay.
[04:11:18] Good...
[04:11:19] Good
[04:11:23] And one more, sorry. Bear with me while I just get this all set up.
[04:11:30] Um...
[04:11:33] Let me see here.
[04:11:46] you
[04:11:48] Okay, yeah, there wasn't too much solid news this week.  I'm not going to worry about solid stuff.  We're just going to...
[04:11:56] Yeah, that's the only one. Okay, perfect. Okay. How's everyone doing? All still alive?
[04:12:01] Actually not much Andrew Clark this week.
[04:12:06] Thank you.
[04:12:07] *sad*
[04:12:09] Okay.
[04:12:10] - Thank you.
[04:12:11] *bun*
[04:12:17] All right.
[04:12:22] I don't know what to think about Angular these days.  Honestly, Angular is... I'm enjoying Angular immensely.
[04:12:29] They're big enough that they can just throw grenades in.
[04:12:34] Oh, man.
[04:12:38] I know that's so funny, but it's just like...
[04:12:45] Yeah, you get to a certain point
[04:12:51] Like, they're revitalizing in such an incredible way.
[04:12:54] that it's like so obvious because they're like catching up in really short order
[04:12:59] But they're also so widely used.  So it's just like...
[04:13:03] they have incredible amount of swinging power, so to speak,  that they've just been sitting on.  And now they're just like, now they're starting to like, you know...
[04:13:11] throw a couple blows in.  I'm very excited about
[04:13:15] that
[04:13:18] Thank you.
[04:13:35] Thank you.
[04:13:39] alright so let me check twitch for a
[04:13:44] Um...
[04:13:46] a moment here. Thank you, Charlie Devs, for Prime subscription. I know I haven't
[04:13:54] been up on Twitch for the last hour or two,  but you know,  every little bit is,  is,  is awesome.  It helps.  Thank you.
[04:14:02] um...
[04:14:03] Thank you.
[04:14:04] So
[04:14:05] Uh...
[04:14:08] and
[04:14:09] I see a clip about Create T3 app. To be fair, obviously I started Solid Start beforehand, and obviously I was doing my thing, but I want to just put out there that, like...
[04:14:19] That was the kind of thing I was trying to
[04:14:22] capture it's a lot easier to see it when you have all the pieces already but that's that was what i  wanted to do here i just wanted to like put some pieces together even less than what t3 app does  like t3 app gets you to like a more opinionated level i wanted to have like the baseline of that  anyways
[04:14:39] Yeah, we could talk about millions. I know what my problem is and challenge here is I don't talk about stuff on performance until the benchmarks are submitted. I don't count my chickens.
[04:14:51] This is...  Picture if I had talked about millions 1.0...
[04:14:56] um like how
[04:14:57] how and you know hype that up and then
[04:14:59] like how much a performance at this point of the minute.  This time, as far as you can tell, he's delivered.  So I'm pretty stoked about that.  But like...
[04:15:08] I just don't count.
[04:15:10] I don't like when the press release goes out before the benchmarks are submitted.  Or not submitted, but before they're merged. I know it sucks from a
[04:15:18] from a
[04:15:19] from a marketing standpoint, but like
[04:15:22] Generally speaking, like...
[04:15:25] Um...
[04:15:26] I need to see it solidified because quite often things don't actually end up, like, surprisingly, like, almost 8 out of 10 times they don't end up.  This case I actually know a little bit more because I actually worked with him helping with a memory leak and actually, like, so helped tweak getting the performance in.  And I'm very impressed with the work he's done. I'm pretty confident this time, but, you know, this is just how I do it.
[04:15:50] Okay.
[04:15:54] Cool.
[04:15:55] Cool.
[04:16:01] Okay.
[04:16:02] Good.
[04:16:03] Good, good.  Okay, I think I'm ready to go.
[04:16:09] *shriek*
[04:16:10] Thank you.
[04:16:13] Yeah, no, I...
[04:16:16] I'm, I'm, I can, he's asked a few questions over the months.  And then finally one day we were kind of like debugging, he was sending me screenshots.
[04:16:24] of Stephanie's like, and I'm like, no, check this, open this. We were basically back and forth doing
[04:16:28] not on a call, but doing basically a debugging session on memory.
[04:16:33] Um...
[04:16:34] - Okay.
[04:16:35] And it led to him actually finding the memory leak, so.
[04:16:40] - Thank you.
[04:16:41] Anyway, sorry.
[04:16:48] Yeah, I'm more than willing to help anyone.
[04:16:52] uh,  on this kind of stuff.  And again,  I love the solid discord to score.  I get the shout out about it.  We have all the framework authors in there.  Um,
[04:17:00] So not all of them from all the frameworks, but on the smaller side, we do.
[04:17:09] So...
[04:17:10] - Thank you.
[04:17:11] Yeah.
[04:17:12] Is it in all the discords?  No, I mean, I have a few discords like that, but yeah.
[04:17:17] Um,
[04:17:18] Generally, though, yeah, I think it's all Discord's kind of special in that way.  It makes it kind of hard for beginners sometimes.  You will have, like, get off track.  We have, like, Dominic, Octane, Aiden, you know, or...
[04:17:39] dozens of framework authors all sitting there occasionally getting drawn into the debate when ideas come in.  And I think it's so interesting to see that kind of interaction,
[04:17:48] happen, but sometimes I'm worried, people are like, I was just trying to learn how to use solid.
[04:17:54] But maybe being a fly on the wall is helpful too.
[04:17:58] Yeah, any of the amalgamation places like Veet is a good one, Astro is another one.
[04:18:06] We tend to get a lot of the really performance-oriented...
[04:18:10] discussion though around like reactivity, especially people care about reactivity.
[04:18:14] I, I, you know.
[04:18:21] Don't they get...
[04:18:23] I mean, why do you need any optimization?  I mean...
[04:18:28] It's a fast feed on library.
[04:18:29] Um...
[04:18:31] BlockDom kind of showed this new way of doing VDOM.  And Million basically kind of branched that together.  Basically, VDOM creation had recently become the bottleneck.  Inferno had nailed...
[04:18:48] stuff pretty optimally, except for, I guess, you could do a little bit more in creation.  And that's what a lot of the reactive libraries like Solid and them were doing.  So they've now added that creation function.
[04:19:00] bump up. So now...
[04:19:01] For something like the JS framework benchmark, it's pretty much impossible to separate, like, a VDOM library from, like, a reactive library in terms of performance.  The benchmark is hilarious right now.  I mean, I could pull it up, but it's literally everyone's, like, 1.08 or 1.09.  And that varies between runs.  So, like...
[04:19:18] there's like 12 or 15 frameworks that are all the same speed  that like on any given run,  they can like jump 10 or 12 spaces either way,  just like based on what the machine did.  Like we basically have...
[04:19:31] Like
[04:19:33] all these frameworks that are just like maxed out.
[04:19:35] and then like everyone else.  That's what that benchmark has turned into.  And it looks like Million is gonna join that fray  up there with Solid, Inferno, Vobi,
[04:19:45] and a number of others
[04:19:56] Thank you.
[04:20:02] So like, yeah, I don't know. I mean,
[04:20:04] If you're interested in it, I don't know how their size pans out.  There's always features.  It's tricky.  Performance is never the single guiding thing.
[04:20:12] Um,
[04:20:17] Yeah.
[04:20:17] "The only thing that bugs me is type narrowing on signals."  I know!  And it's like, is that enough?
[04:20:24] to like come up with a worse API for composition.
[04:20:28] *laughs*
[04:20:31] It's so brutal.
[04:20:34] If TypeScript could solve this for me,
[04:20:36] Like we would just be buddies, you know?  It's just like every time
[04:20:42] I've always had a hard time with TypeScript. I have a vision of how things should work and TypeScript is like
[04:20:48] doesn't always agree.
[04:20:56] So
[04:20:56] Anyway, we got to get started on this week in JavaScript. Yeah, I mean, try sending me a message. I'll see. If you do reach out, just ask the question in the message and I'll see when I can respond to it.
[04:21:08] - Yeah.
[04:21:14] Could Esno solve it? Yeah, I mean...
[04:21:17] Asno could solve a lot of things.
[04:21:19] potentially that's why I was excited about it
[04:21:29] Thank you.
[04:21:30] Yeah, I mean, I don't know. You're happy with React, you're happy with React. I think
[04:21:34] I think
[04:21:34] What's interesting to me is that at a certain point...
[04:21:40] Like there's a create JD app, right?  Which is all the same stuff that's in T3, right?
[04:21:45] At a certain point, you spend more time doing that and less time doing the React versus Solid part.  So, like, there's a temptation that I could say that, like, you might just, like, be able to at a certain point just, like,
[04:21:57] build the thing in solid, not even really care if the difference between solid and react and just get something that's smaller and faster and just be like, eh, you know, but if you don't care about that, like who cares, but like, there might be just a point in the future where you're just like, oh, the experience is like basically the same, except, you know, it's just,
[04:22:12] kind of like
[04:22:13] better in some sort of empirical way.  And then you can just be like,  okay,  that's worth doing.  Otherwise,  just,
[04:22:18] not so
[04:22:20] Like...
[04:22:21] That I mean
[04:22:23] These things kind of all do the same thing, so, you know.
[04:22:27] you know
[04:22:29] If performance is a concern,
[04:22:31] This might be a direction, you know.  But...
[04:22:35] Like...
[04:22:36] This is why I'm not...  I don't like when people say,  oh, it's only for performance,  but I can make that argument...
[04:22:43] Um,
[04:22:44] from the perspective, if I'm like a React developer,  I could be like, yeah, this is only for performance  because nothing else actually is that different.  There's some DX changes and stuff  that I actually quite like, but I mean like,
[04:22:55] Yeah.
[04:22:56] I...
[04:22:56] you know
[04:22:58] composition like
[04:23:01] Yeah, I don't know. I know this is a poor sales pitch, but like...
[04:23:06] I...
[04:23:06] I don't know.  Like...
[04:23:21] Hmm.
[04:23:25] Well, you're in the right place. The streams, the articles and stuff will give you better... Not everyone talks about the underpinnings, so to speak. So I think this is a good place to learn if that's what you're interested in. Most of my knowledge is picking up pieces...
[04:23:43] little bits from various
[04:23:44] sources and
[04:23:46] tying with my experience. I don't have a singularly good place for this stuff.  When you're talking about platform level stuff, it's a different learning than building a product.  If you're building a product, go listen to Theo, so to speak.  If you're making a productive startup. If you want to  understand these tools and where they're heading and how these things work, you're in the right place.
[04:24:07] Right. Yeah, I'm sorry I was so bad at selling solid there. I think there's lots of actual benefits to using solid and when we get
[04:24:15] solid start stable,  it will just make that Crate T3 app  experience just that much nicer, so to speak,  and better. But I mean, like...
[04:24:23] - Yeah.
[04:24:25] This stuff is all so relative to me that I feel almost tired, you know, kind of like
[04:24:30] defending it or whatever, because you'll be perfectly fine using what you know.
[04:24:36] Eh, you know.
[04:24:40] I just hope when people do greenfield development they give it a shot because like
[04:24:44] I think it's pretty cool.
[04:24:46] - Okay.
[04:24:47] I'm going to go ahead and put it in the middle.
[04:24:48] Alright. Enough. I wasted like 20 minutes doing this.
[04:24:53] Okay.
[04:24:59] Yeah, I mean...
[04:25:00] That's...
[04:25:01] not the messaging that I would use anymore. I think...
[04:25:06] that historically this is true. I actually think we're building something that's pretty
[04:25:10] Sorry the pun, solid, so to speak.
[04:25:13] But when you consider the competition and how similar different solutions are, those differences might not...
[04:25:19] be enough to move from the incumbent in every single scenario.  I just think that, like...
[04:25:26] When you get to a point where you're just like, it's a little better in like every little point.  You're just like...
[04:25:31] Maybe that's enough.
[04:25:33] People are looking for some drastic change, and the thing is, the drastic change in architecture, the drastic change in the singles, that stuff's already there.
[04:25:42] If...
[04:25:43] But like...
[04:25:44] Ultimately, at the end of the day, I'm building an app, so what?
[04:25:48] um
[04:25:48] Are we going to get superficial about syntax? Like, do I have to go to svelte and then that's different?
[04:25:55] You know, like, there's so many little...
[04:25:57] choices and things that feed into that.
[04:26:07] Yeah.
[04:26:08] Thank you.
[04:26:10] okay let's let's let's uh let's do this we can javascript okay so let me
[04:26:17] Alright, there we go. Stretch it out a little bit, sort of. Okay.
[04:26:22] -
[04:26:24] - Okay.
[04:26:26] So let's... okay.
[04:26:28] It's funny, I do everything as if I'm going to clip this, but then I never end up clipping it.  So let's get going.
[04:26:34] Let's talk about this week in JavaScript.
[04:26:37] Last week was a lot for me, as I've mentioned. If you watched that stream, you saw that I was basically...
[04:26:43] I was exhausted.
[04:26:44] I hadn't shaven, I was like half asleep, I had my hair half sticking up and I was just like, I tried writing three articles in
[04:26:53] one week,
[04:26:54] And I was just like done.  I'd stayed up the whole night basically to write the Friday article.
[04:27:01] And I didn't think I'd go for five hours and I still did.  This week was a lot calmer.
[04:27:08] Basically...
[04:27:09] Only two things people are talking about.
[04:27:13] Server components.
[04:27:15] And, uh...
[04:27:18] Yeah, what was the other thing?  Geez, I can't even remember.  We'll get there in a minute.  But, like...
[04:27:24] we'd
[04:27:25] For the most part, the signal dialogue had moved on.
[04:27:29] I do have a couple more single things to wrap off, but...
[04:27:35] - Yeah.
[04:27:35] We'll get there in a minute.  Before that, just a little bit of solid news.  I thought this was really cool.  I've been celebrating stuff with solopreneurs.  For those of you who don't know...
[04:27:46] Solid has a primitives library.
[04:27:51] Solid Primitives, which is basically like our React to use.
[04:27:54] It has a ton of packages of hooks you can basically use with your solid application.  And they hit a couple milestones this week, which is really cool, is that there's now 100,000 downloads per month, which, again...
[04:28:11] isn't the hugest number, but that's still pretty nice.
[04:28:16] you know, Solid itself
[04:28:18] is about i think about 75 000 downloads a week
[04:28:22] So like this is about a quarter
[04:28:25] of our downloads.
[04:28:28] People who download solid also, I guess, download this.  So that's a significant...
[04:28:33] thing for solid primitives.  They also released...
[04:28:37] a website, I believe. Solid Primitives Netlify Apps. So this gives you an overview of all the different kind of primitives you can use using your Solid app, which is amazing because this
[04:28:48] Um...
[04:28:49] It's just a lot of utility.
[04:28:51] things you might think were missing in order to develop apps in solid. Look at all these
[04:28:57] The pages of hooks, there you go.
[04:28:59] Um...
[04:29:02] And they use a stage system for proposals.
[04:29:07] and stability of these, which is really cool.  It's a community-driven project.  It is orchestrated by people on the core team loop,  key part of it, but there's a whole process of submission  to get them in, and this makes it really nice  for contribution and kind of building towards  future standards with Solid.  I love this.  I might be very defensive of the core core,  but this is like a really beautiful way of handling,  you know, like a standard lib.
[04:29:39] Oh, wow. Did we get a raid?
[04:29:42] All right.
[04:29:46] Oh, Acorn1010, thank you very much for the raid. We're just getting to this week in JavaScript, which I do at the end of every stream, kind of going over Twitter, what's gone on. And I was just giving a little quick plug to
[04:30:00] solid as I got started.
[04:30:01] because obviously,  um,
[04:30:03] author of Solid.js, but our React use or Vue use equivalent library just released its website and hit 100,000 downloads per month.  So that's...
[04:30:15] It's pretty cool.
[04:30:15] and just kind of showcasing that.
[04:30:18] All right.
[04:30:20] With that aside, kind of wrapping up on the signals conversation from...
[04:30:27] I
[04:30:29] from last week
[04:30:30] I came across this really cool tweet. Joe Sivana, if you guys aren't familiar with, is basically the lead of React Forget, worked on Relay.
[04:30:41] Worked also on the skip language, which is a reactive language.
[04:30:46] inside Meta. And he had a really interesting observation here.
[04:30:53] Again, this is probably more interesting for the solid folks in the audience.
[04:30:57] Um...
[04:30:58] - Thank you.
[04:31:00] is that...
[04:31:03] Thank you.
[04:31:06] Mm-hmm.
[04:31:07] When he's developing this reactive language and meta,
[04:31:10] So
[04:31:11] it had explicit reactive types. This is a reactive variable, but over time,
[04:31:16] The language actually, he realized he didn't want to define what was reactive, that everything should be reactive.
[04:31:22] Um...
[04:31:25] And this is an interesting observation because I think in a lot of ways it guides why Svelte is the way it is.
[04:31:32] And it's also interesting because solid actually doesn't have a reactive type either.  We have like accessor.
[04:31:37] which means maybe reactive, it could be any function.  And it's because we also treat everything like reactive.  We actually don't have an is signal.
[04:31:45] Um...
[04:31:47] So...
[04:31:48] Yeah, it's a very interesting...
[04:31:51] understanding of from me once I realized that because in a sense we all want to move to a reactive world but
[04:31:59] Um...
[04:32:00] in a sense, solid
[04:32:02] not having a signal is kind of acknowledging that maybe
[04:32:07] that reactivity should just be implicit, kind of like what reacts is.
[04:32:11] and in a sense, React component model
[04:32:13] is more of a concession that this is a really hard goal and they only want to attack this  in a narrow scope.  Which is such an interesting way of looking at the problem from my perspective because
[04:32:24] What I'm basically saying is like,
[04:32:27] In a sense, I'm willing to make certain...
[04:32:30] trade-offs so that reactivity is global,
[04:32:33] that React isn't willing to make
[04:32:36] because they...  To get the ergonomics they want to reach,  they're willing to, like...
[04:32:42] limit the scope of the reactivity. And I think if you think about it in that terms, that is basically the difference in positioning of us on that whole signals argument.
[04:32:53] or discussion depending on what you call it.
[04:32:56] It was interesting though because there was some people who didn't particularly like
[04:33:02] It...
[04:33:03] When I saw this, I knew Fabio from Vobi would be like, he hates this detail.  Because in my eyes, Primism Components are the same coin.
[04:33:12] And
[04:33:13] He goes on about you know how he doesn't like the fact that we don't know what's reactive and that and the truth of the matter is I
[04:33:21] - Yeah.
[04:33:22] I thought of him with this tweet because I realized that when you're designing a framework, you still bring your ideals.
[04:33:28] into the thinking a little bit.
[04:33:30] You know what I mean? Like, you're still kind of like, even as you're trying to be like practical about it. Because there was a time that I would have agreed with everything he's saying here. I would have been like, yeah, explicit, blah, blah, blah, reactivity. But I...
[04:33:42] Two, with Saul's design, I'm trying to get to a reality where reactivity is our language, even though JavaScript isn't necessarily great for that.
[04:33:50] So it's like
[04:33:51] It's funny though how sometimes these decisions look like opposite extremes. He said that we pretend react to it.
[04:33:57] activity doesn't exist, but it's more that you pretend that everything is reactive.
[04:34:01] Um...
[04:34:03] So I think it's interesting because...
[04:34:07] eat
[04:34:07] It kind of puts Solid actually in the middle ground. There's always going to be people who are more purist or hardcore on that aspect and react on the opposite side. I often see both sides of the argument and it's a very difficult balancing act. To be fair, I criticize View often for being in the middle like that.
[04:34:26] But,
[04:34:27] On the flip side,
[04:34:30] As long as you can justify it and stay consistent, I think you're okay.
[04:34:37] So, yeah, just to kind of point,
[04:34:40] Here's a similar comment. I saw this one. Adam Hale, creator of SJS and Surplus, he was like, "Solid started a fork in my library." That's a little bit strong, but yes, I'll take that. And this is one of my biggest disappointments with the changes.
[04:34:53] Ryan introduced, in surplus bodies of function components are still reactive. When you break that, you break declarative rendering. This is going back to this example. And I wanted to bring this up. We talked about this at length last week, about the differences between these two examples.
[04:35:07] Adam was saying is like in surplus,
[04:35:10] This...
[04:35:12] doing this would be reactive still.  So whenever count changed, then the whole...
[04:35:17] component would rerun.
[04:35:19] And I got rid of that in solid for a very good reason.  Actually,  I got to think Fabio and Adam go on discussing this for like 30 more weeks.
[04:35:27] replies like we don't need to get into it, but I
[04:35:31] He said it, re-executing a component is potentially the most expensive thing a user can do.  In my opinion, it's very important that it doesn't just happen accidentally, but very  explicitly.  I agree.  That was the design.
[04:35:42] why I like this conversation because it,  you can immediately see that this is not a simple matter.  Like it,
[04:35:51] A moment ago, Fabio was talking about how he didn't like...
[04:35:56] you know, some implicitness and solid versus explicitness, and then
[04:36:01] you know
[04:36:02] Adam, who's basically the creator of this whole paradigm in terms of the ownership of
[04:36:08] model for reactivity was basically saying, yeah, I think we should basically default  to the most inefficient way of doing things, which aligns with React.  So there's no clear single sides on this.
[04:36:23] The truth of the matter is
[04:36:25] You can maybe fix this with a compiler.
[04:36:27] But is a fix even a fix if you get away from what's actually happening?  This is a very deep thing.  I'm glad these two found each other.  They got to...
[04:36:37] Have a great discussion.
[04:36:39] I didn't have to argue the points.  And I'm...  You know, this is...
[04:36:45] This is kind of like where the signals debate.  It kind of,  it started,  it started strong and then kind of dropped off.  I got to,
[04:36:54] quickly
[04:36:55] point out how quickly it dropped off,  because I'm going to give...
[04:37:00] M.L. Rawlings  look here. Michael  Marco makes great memes.
[04:37:09] You can see at the beginning
[04:37:11] He made this meme.
[04:37:16] had good engagement.
[04:37:19] make it easier to miss.
[04:37:20] you know,
[04:37:21] This is a pretty funny one, perhaps.
[04:37:27] This meme?
[04:37:37] Even better engagement?
[04:37:51] This meme?
[04:37:52] Zero engagement.  So this is my way of saying that...
[04:37:58] It's funny.
[04:37:59] I actually find the third meme probably the funniest of all of them.  But, um...
[04:38:05] -
[04:38:07] uh,
[04:38:08] - Yeah.
[04:38:09] I think we're all kind of done with the signals conversation.  At least for a while.
[04:38:14] Anyway.
[04:38:17] Thank you, Michael, for that one.
[04:38:21] - Yeah.
[04:38:24] Alright.
[04:38:27] Where am I? Okay, back in bookmarks.
[04:38:36] Yeah, that's a react. I mean if you watch the react documentary certain way like after it's funny  He got the idea for that meme because he looked at my article and
[04:38:45] the one that was...
[04:38:47] pretty popular last week with the React versus Signals 10 years later.  And I explain the whole thing, you know, and talk about
[04:38:54] all the way down to, I think a pretty important message here to understand is like,
[04:38:59] where some of this confusion comes around. And like I showed this whole thing about how reactive libraries had the same pattern as hooks before hooks came out. And this might for some people be kind of
[04:39:10] challenging to see these differently.  In actually the same way when people see Solid and they're like, "Oh, you're just like React."
[04:39:18] and you improved upon it.  If there wasn't that five years in the middle  where Reapt is using classes,  if you went from 2010 straight to Hooks,  you could easily see...
[04:39:26] Um...
[04:39:28] You could easily see that you might think that React was trying to improve upon signals,  but if you... There was a lot of really, like...
[04:39:36] harsh sentiment towards it. And at the end I was just like, "Look, this is no secret how they feel. Watch the documentary." Because if you actually watch the documentary,
[04:39:46] - Yeah.
[04:39:47] It's the story, like if you have a very specific context, very similar to the context I have, it's the story of how they killed signals.
[04:39:55] Like...
[04:39:56] um,
[04:39:58] It's an interesting...
[04:40:00] It's an interesting thing.  As I said, it's a bit hyperbolic to say it that way.  But they feel very strong, as I've talked about in the previous stream, that they...
[04:40:08] Fixed.
[04:40:09] a problem.
[04:40:11] and
[04:40:12] we don't have to get into it again.  Um,
[04:40:14] I think...
[04:40:16] I think, Evan, you kind of said it best.
[04:40:20] Uh-oh.
[04:40:22] Here
[04:40:23] Um...
[04:40:24] Thank you.
[04:40:27] The React thought leadership had long cultivated the narrative our model was more correct, almost becoming dogma.  In reality, many engineers simply are more productive with a different one, arguing on philosophical levels pointless.  There we go. The end of that discussion.
[04:40:41] This is...
[04:40:42] This is essentially
[04:40:45] essentially what happened here.
[04:40:49] Alright.
[04:40:50] Okay, so...
[04:40:52] Thank you.
[04:40:54] Moving past that, um...
[04:40:58] Astro
[04:41:00] and Netlify both did rebrands this week.
[04:41:05] which were really quite cool.
[04:41:08] Enjoyed this. I don't know if anyone checked it out. It was sad to see I
[04:41:13] you know,
[04:41:15] Theo's tweet moved down on the list, but
[04:41:20] Astro really focused up their message. This is a really cool website update. Um, and
[04:41:26] love what they're doing the branding um
[04:41:29] As I mentioned, Netlify also has a whole new brand
[04:41:32] that got dropped this week.
[04:41:36] And this actually leads into this little thing where Fred did that comparison
[04:41:41] Um...
[04:41:43] with
[04:41:45] Um...
[04:41:47] I mean, we had it earlier up. Did I not quote tweet it?
[04:41:51] Uh...
[04:41:52] It's fine.
[04:41:53] Fred.
[04:41:54] No, I definitely did.  What am I talking about?  There's no way I didn't.
[04:41:58] Yeah, here it is.
[04:42:00] where he looked at actual real-world data,  looking at the performance between different JavaScript frameworks.  And you've got to understand, there's some legacy here that you have to...
[04:42:10] consider like Nux2 and whatnot. But I love how we use WordPress as kind of the bar because
[04:42:18] It's kind of interesting, like obviously Astros Islands give them a leg up, but it does in a lot of these benchmarks.
[04:42:25] Stuff like first input delay is actually pretty good  in most frameworks.
[04:42:30] But the overall score,
[04:42:32] actually doesn't give most of the framework sites building these frameworks um a passing grade the  thing you have to keep in mind with this is the sample size is a lot smaller i think there's only
[04:42:43] I forget, like a thousand astro sites in this compared to like...
[04:42:47] you know, tens of thousands of sites or a hundred thousand sites and like other things.  So there is that to consider. But like,
[04:42:54] It's still enough data to be able to kind of
[04:42:58] you know, talk about the performance metrics here and kind of see
[04:43:03] uh...
[04:43:04] you know,
[04:43:05] this kind of common trend
[04:43:08] between...
[04:43:09] Obviously newer frameworks, but even where Gatsby and Remix fit into the thing and then we're next in Nuxtar in this.
[04:43:17] Um,
[04:43:18] Yeah.
[04:43:20] I have so many thoughts about this, especially with Imp, because I think Imp is going to be a challenge for a lot of frameworks because it basically...
[04:43:29] It's hard to...
[04:43:31] Interaction to the Next Paint is a metric that's designed to hopefully...
[04:43:37] Um...
[04:43:38] give us an idea of the cost of interactions. So it's supposed to give us a better idea of like,
[04:43:43] how fast our sites are after page load.  But the challenge is that most single page apps  use client side navigation.
[04:43:50] And that means that...
[04:43:52] where a multi-page app...
[04:43:54] would only have like small interactions perhaps single page apps are going to get
[04:43:57] dinged for doing navigation on the client and that arguably is better than you know like imp scores are going to be better than LCP scores  so it's like it's it's a hard this is kind of a
[04:44:09] Perhaps a little bit biased against single page apps. We're gonna have to see how this all lands, but I
[04:44:15] At least it helps give us an idea.
[04:44:18] In any case, I'm very stoked that, you know,  we can actually see these correlations with real data  and it gives us something to target towards.  He's got like P95s.  He's got lots of stuff.  Size of JavaScript impact, you know,
[04:44:31] um
[04:44:32] It's the average Astro site is much smaller and even Smeltkits site is much smaller  This could simply be because of the type of apps being built, but it is interesting to kind of see and
[04:44:43] Um, he's very forthcoming about this.  I just recommend reading this altogether.  I'm going to drop this in the chat in case...
[04:44:51] It's a good performance vlog.
[04:44:55] Um
[04:44:56] All right, let's keep on going.
[04:45:00] Doo doo doo doo.
[04:45:02] Marco
[04:45:03] Marco's been coming back from Radar.  This is...
[04:45:07] If you guys are familiar with Ryan Turnquist, SolidCore, wrote SolidRouter. This is what he's been doing since he joined eBay. He's been working on a meta framework.
[04:45:19] for Marco and
[04:45:21] Marco is already a server-side routing framework, but what they released was Marco Run, which  is Vite-based, directory, file-based routing, live reloading.  It puts the whole Marco experience together in one place.
[04:45:33] I love this graphic art. I know there's some call out to Astro almost it feels like for the rocket, but I
[04:45:38] Um,
[04:45:38] Really cool.  Um,
[04:45:40] So this is their beta release.
[04:45:42] So make it easier than ever to get started with modern tooling to build on Marco.
[04:45:56] How's it going Jacob?
[04:45:59] Yeah.
[04:46:00] -
[04:46:02] - Yeah.
[04:46:04] Um...
[04:46:06] Okay, oh, sorry, there is an Andrew Clark tweet.  Okay, we'll get to that.
[04:46:12] Um...
[04:46:14] We actually touched on this a little bit earlier.
[04:46:17] When I was talking about what we were doing with Tanner and how we chose...  I get...
[04:46:22] sometimes some criticism people go
[04:46:24] Ryan, why-- like, I really wish that Remix and Solid
[04:46:29] Um,
[04:46:30] you know, just were together. Like, we could use solid and remix, and then there wouldn't be solid start and all that. And the problem is sometimes making things
[04:46:38] agnostic
[04:46:39] like working from all the tools isn't like the best served for anyone and Andrew was trying to make this point.
[04:46:45] and
[04:46:46] Obviously...
[04:46:48] you know,
[04:46:49] People were not...
[04:46:50] Um...
[04:46:52] stoked about that. Um...
[04:46:57] And people still wonder if it's 5% market share,
[04:47:01] I've never used Astro or TanStack query either, you know.
[04:47:06] It's hard to make blanket statements, and that's exactly what we do when we're on Twitter.  But to kind of add to it, I do actually...
[04:47:16] agree with
[04:47:17] on this to a certain point. What I was trying to say here is that like
[04:47:22] React is trying to position itself as an agnostic tool now that it's kind of becoming more of a spec and
[04:47:27] with stuff like server components.  So...
[04:47:30] I think this is an interesting balance for React itself to play in terms of being agnostic. We talked earlier on the stream about React,
[04:47:38] and remix, like Dan, you know, going,  hey, wouldn't it be cool if you guys used our suspense and transitions and remix, you know,  and, you know, making the issue.  Yeah.
[04:47:46] And all I got to say is it's always easier for lower in the stack to attempt to generalize solutions for higher in the stack and for that to cause friction, be it web platform, render library.  The lower you have the most power to optimize, but higher you may have the most specific needs.  And I just want to kind of like double highlight on that because like it's the same thing with like web components in the web platform.  You always have like the framework authors being like, no, no, like let us do things our way.
[04:48:08] If you provide a good enough primitive, we'll use it.
[04:48:11] I feel like
[04:48:12] Yeah.
[04:48:12] you know,  reacts entry,  going to enter that phase of,  of the progress.  So it's interesting because it's,
[04:48:18] Actually, Andrew responded to me.
[04:48:21] to this tweet and he was like, he was like,
[04:48:26] I feel some people have interrupted it as if you should only build for React, but you know,  there's other options that are integrated well with their frameworks. And yeah, React itself,  if you consider the React Native part of React, which I do, is an agnostic tool. So
[04:48:38] taking up face value, I'm a hypocrite.
[04:48:40] Um...
[04:48:42] Yeah, I mean, the point here is that, like...
[04:48:48] There is...
[04:48:49] some nuance to this positioning. I don't think we talk about the trade-offs nearly as much,  and from that perspective, I agree quite a bit with what Andrew's saying.
[04:49:05] Yeah, this is interesting. I think there have been studies for this. This is where stuff like the Rails model came in and where the React team decided that it's better to hold and...
[04:49:17] show pending state rather than fall back to skeleton.  There's been a bunch of studies on this in terms of perception of speed,  perception of good user interfaces.
[04:49:26] um but
[04:49:28] I guess
[04:49:29] a lot of times our metrics are more
[04:49:31] a company is based on goals like how many people press this button or you know buy through rates  and stuff so um
[04:49:38] It's...
[04:49:39] Yeah, it's interesting to see...
[04:49:42] the difference between
[04:49:43] what people say and what they do and how the different metrics play. And I know from like big e-commerce we and actually I was on a stream or sort of space once with Dan Abramoff and he was talking about like some of the metrics they used at Facebook and how they weren't performance metrics, but there were like results metrics and how that actually impacted.
[04:50:00] them finding bugs or understanding the behavior of their site.
[04:50:04] you know, even better than performance metrics.
[04:50:13] - Thank you.
[04:50:21] I don't mean blanket sense  I mean giant sweeping generalizations  Yeah, yeah
[04:50:27] it's the absoluteness of the talk that always makes it difficult.  When you say stuff in a way that makes it sound absolute,  that's where you run into trouble, right?  And the funny thing is I'm making a general statement about that.  I posted this once on Twitter so everyone could like,
[04:50:41] Like...
[04:50:43] poke at the fact that me making an absolute statement about absolutes was, you know, funny, but yeah.
[04:50:52] Yeah, routing is one of the hardest things to get agnostic.
[04:50:56] Which is why...
[04:50:57] Yeah.
[04:51:03] All right, let's keep on going.
[04:51:06] Yeah, we already talked about this. There's a really cool stream with
[04:51:10] with Dan and Joe, who we were talking about, and Ken.
[04:51:15] And...
[04:51:17] Thank you.
[04:51:18] I have to admit,
[04:51:20] - Okay.
[04:51:21] Because of the remix versus react bit of it, I didn't get as much from it as I'd hoped
[04:51:27] Then again, I knew what the punchline was, so I think it's fine.
[04:51:32] It's probably worth checking out.  I think the more interesting thing that happened around this  was actually a side thing where Primogen was basically giving suggestions to Kent  on how he could improve...
[04:51:44] I'm not going to see it here, I guess, his thumbnail image, because this one doesn't work particularly well.  They gave him a bunch of pointers and they had a bit of a back and forth about the
[04:51:55] like content and whatnot.  And,  and the,
[04:51:58] It was interesting to see because there's people coming out and commenting on that, kind of talking about like...
[04:52:04] I'm going to go to the next one.
[04:52:05] Yeah, he didn't quote tweet it because that lowers engagement.
[04:52:11] People like Theo and Prime are so like understanding the algorithms in the game that they know exactly how to uh,
[04:52:19] actually, you know,
[04:52:21] ensure that so he's trying to spill on some some some uh some knowledge and it was interesting  because i think there's a lot of misconceptions around clickbait and and like playing into the
[04:52:33] But that's probably a debate for another time.
[04:52:40] All right.
[04:52:45] *sigh*
[04:52:46] Yeah, what do we got here? Yeah, I'm trying to... It was kind of funny because I was on a space...
[04:52:52] Yeah, it's fine. This joke is fine. We don't have to worry about it.
[04:52:56] Um...
[04:52:57] Thank you.
[04:52:59] let me okay
[04:53:01] Yeah, we almost...
[04:53:05] Okay.
[04:53:07] Okay.  I got a couple more things.  Before we get into serving funnets...
[04:53:13] I want to highlight this talk from Pete Hunt.
[04:53:17] I guess I said the signal thing's...
[04:53:20] Maybe not dead, but one of my favorite things now is watching back old react talks and
[04:53:26] and putting them kind of like in perspective of...
[04:53:30] you know, where we are today versus where we are before.  Because I think...
[04:53:36] The most interesting thing to me about this talk was he goes on and gives...
[04:53:41] code examples about Ember and Knockout and kind of showing how React is better.
[04:53:47] this pattern is something reacted very commonly.  And I started thinking about it and I'm like, it's interesting to me
[04:53:54] how those kind of examples...
[04:53:58] Usually,
[04:54:02] I don't know how useful they are.  I guess people find them and they're the most illustrative, but...
[04:54:06] I...
[04:54:08] Picking apart another framework's examples usually doesn't
[04:54:11] work very well. You can give your own example and let people fill in the blanks about how  simple that is, but when you pick apart another example, the problem is you always can find  a way to rewrite it better.
[04:54:22] Um, it was similar with my, you know, comments debate with, uh,
[04:54:26] Dan in here, like you go, why is the original code so convoluted?
[04:54:32] You could just write it better and then just not even have this problem. And I think
[04:54:38] What was really interesting for me about this talk was...
[04:54:41] he was pointing out a lot of the syntax issues,  like superficial issues, as well as the mechanical issues  with the KVO frameworks of the day.  And when I looked at it, I realized,
[04:54:55] Almost all the criticisms he made against those libraries back then, he could make against React today. And that's like...
[04:55:02] That's interesting to me because it's that kind of shift. This talk really highlighted it for me because he was talking about this Ember example and it had this implicit mutation that wasn't getting tracked.
[04:55:15] And the problem there is you should be explicit about setters. You definitely shouldn't just like
[04:55:20] He had a sort or reverse or something.  And the problem is those APIs are mutable.
[04:55:26] instead of immutable. So it wasn't like obvious why the thing wasn't updating.
[04:55:31] And if you provide a mutable API and then use mutation methods that aren't tracked, things break.
[04:55:38] And the solution for Ember was to add the items to a dependency list.
[04:55:43] which he kind of makes fun of, right?  He's like, well, I guess you can just do this, you know.  And then, like, it was interesting to me, because I was like...
[04:55:51] Is that the solution to doing it in React today?
[04:55:57] Um.
[04:55:58] And
[04:56:00] Like, kind of.  Like, to be fair, Ember had its own syntax around it, but like...
[04:56:06] In a sense,
[04:56:08] The problem Ember had was both sides. Stuff was not explicitly set and you had to do these dependency rays. Where in React you don't have this problem.
[04:56:17] But it was just interesting to me  because I actually don't see any problem  with the dependency rates.  I think it's a very explicit way of handling stuff.  It's just...
[04:56:24] Um...
[04:56:26] That kind of
[04:56:28] Yeah, it's funny. It's probably worth just looking at the talk because React of the Old very much embraced the ideal and then over time had to work at...
[04:56:39] optimizing patterns intent all this kind of stuff that
[04:56:43] We're in a very different place than those arguments back then.  Another example was he was talking about an example where he had multiple...
[04:56:51] derived states kind of talking to each other through different inputs.
[04:56:57] And he was showing this knockout example where it would like,  you'd update one and then it would update the other.  But then when you update that one, it would like be like,
[04:57:04] something else would get out of sync and it would cause weird things. Sometimes it would even re-render the whole thing.
[04:57:11] Like,
[04:57:11] I experienced that, it was a really real thing. But then I realized that this was kind of like what people complain about when they use UseEffect.
[04:57:18] Right. It's about, you know, source of truth.
[04:57:20] And the lessons there and the solution, ironically, for Knockout is the same solution that we've used for React today.  So making those kind of analogies.
[04:57:31] Um,
[04:57:33] was really interesting to me because it feels like as much as we've gone away from stuff,
[04:57:37] Like we're still...
[04:57:38] you know, hitting those things.  And I think that's,
[04:57:41] been where a lot of my focus of this friction recently has been about the signals argument
[04:57:46] Because Dev was like, hey,
[04:57:48] Should you give React a hard time for following in Ember's footsteps?
[04:57:51] I guess you already do that. I'm like, no, no, no, not really. It's, I don't have a problem with any of these APIs. It's more that they really strongly push this message, like we eliminate this category of problem.
[04:58:02] And maybe they could make that argument at the beginning, but it's like,
[04:58:06] like the reality always catches up with the ideal and i think that that's like the interesting part
[04:58:29] So, I mean, yeah, I think this was kind of the...
[04:58:35] This is a great talk, honestly.  He's so...
[04:58:39] Like people said that like the React core team themselves weren't actually
[04:58:44] that
[04:58:46] unrealistic on expectations, like in terms of like performance and stuff like
[04:58:52] I like...
[04:58:53] He was like, look,
[04:58:54] I understand...
[04:58:56] that
[04:58:57] If I took the KBO...
[04:58:59] and Virtual DOM, the KBO version was like a slightly more
[04:59:03] performant on the small scale and then he goes okay but let's make it larger and
[04:59:08] Um,
[04:59:09] And...
[04:59:10] What does he do here?
[04:59:14] I guess this is a naive interpretation, because he...
[04:59:17] Let me see where did he...  There's a version here.  Let me see.
[04:59:23] This is not what I wanted to...
[04:59:24] Yeah, here.
[04:59:26] No.
[04:59:27] Sorry.
[04:59:29] Here we go, yeah.  And it's like, okay...
[04:59:33] Basically, he was saying, look, KBO pays...
[04:59:36] which is basically what signals were back in the day,  pacer initialization versus virtual DOM,  but they're much faster to update
[04:59:42] than the virtual DOM is. So basically, if you actually do fine-grained updates,
[04:59:46] you have this scenario where the
[04:59:49] where the you know the creation time's a bit slower but the update time's way bigger but
[04:59:54] you know, he's like, if you go and then optimize React a little bit, you know, add a bunch of like
[05:00:00] component updates.
[05:00:01] you know, you can close the gap significantly enough
[05:00:05] that
[05:00:07] You don't have to worry about it. Like sure, it's not 40 milliseconds, you know, scale it up might be much, but we get to seven, like who cares?
[05:00:14] And this is still true. And this is like, this is a very realistic and good way of looking at,
[05:00:21] at performance and it wasn't them overselling on it.  The interesting thing is over time,  this sort of example changed so that the reactive libraries  were actually faster than the virtual DOM
[05:00:31] libraries.
[05:00:32] at creation as well.
[05:00:34] And that was like one of the big things that came out around surplus, as I mentioned.  And once that happens, um,
[05:00:40] You can basically ignore this
[05:00:43] Well, you can't because you have the new shared component update, essentially, to get to here.
[05:00:47] or use memoization to get to here.
[05:00:50] And you're just left with...
[05:00:51] something that's just faster across the board.
[05:00:53] Um,
[05:00:54] But I'm glad that the trade-offs were called out in a really realistic manner, right?
[05:01:00] Um,
[05:01:01] at this time. So I will say this is a great talk. He answers some questions at the end too, like it's a whiteboard session in a university, I think.
[05:01:09] This is just really...
[05:01:11] quite good and worth your time watching.
[05:01:14] Um, actually, let me...
[05:01:17] Drop this in chat
[05:01:21] Alright.
[05:01:24] Alright, and...  Okay, let's...
[05:01:28] I think...
[05:01:28] Let's talk a little bit more server components to kind of wrap up today. I don't think there's a ton, honestly,
[05:01:37] But there was some stuff. First of all, Dan's tweet here, which I think is a remix quote, I could be wrong.
[05:01:44] this isn't the important part.  He went on a really good...
[05:01:50] um,
[05:01:52] you know,  Tyre...
[05:01:53] not rant, like he just got everything off his head.  And I feel like this is finally  when people started to get server components.  Sometimes it takes a Dan Abramoff thread to...
[05:02:05] to get there. But I'm glad that people are talking about it because like,
[05:02:09] this is a really exciting thing.  And,  um,
[05:02:12] I hope...
[05:02:13] that more people look into it.
[05:02:19] - Okay.
[05:02:22] No, I did not. You have to assume when I'm doing this that I'm not seeing anything live. Only stuff that I pre...
[05:02:27] - Yeah.
[05:02:28] pre-dead
[05:02:31] Um...
[05:02:34] I
[05:02:34] But yeah, Nuxt server components.  This version is kind of like lakes that we talked about earlier.  But between Nuxt, Jacob...
[05:02:44] uh,
[05:02:45] eBay, I think Parasocial had
[05:02:49] Had a great...
[05:02:51] Um...
[05:02:54] Yeah.
[05:02:54] People are talking about it right now, right?  Daishi's version...
[05:03:00] Jacob Ebay was like doing it. And it's funny, they all started with lakes.
[05:03:05] the first version here  where they basically...
[05:03:10] have the server components being driven by props from the client.
[05:03:16] Which is...
[05:03:16] Unfortunately, as we talked on the stream,  kind of the backwards way of doing it,  but it is cool to see people actually
[05:03:22] have show interest in this and and
[05:03:25] Nuxt is another one doing that.  There's limitations on what they've done today,  which don't quite classify as like...
[05:03:32] the architecture, but it's
[05:03:34] but it is very cool to see all this come out.  Um...
[05:03:39] What else are we going to talk here?
[05:03:41] Okay.
[05:03:42] This is an interesting one.
[05:03:43] The topic of waterfalls.
[05:03:53] Um...
[05:03:54] Request waterfall from client to backend, always bad, yes.  Request waterfall from edge frontend to non-edge backend, nuanced leaning bad.
[05:04:02] It's pretty much always bad. I mean you can mitigate it with streaming, but it's pretty much always bad. Request waterhole from front-end server to...
[05:04:11] Co-located backend, nuance leaning towards win.
[05:04:15] Eh.
[05:04:18] Not win, just maybe not as bad. I don't know. It's an interesting take. I'm wondering if this is going to be a new thing where we see people talk about good waterfalls versus bad waterfalls. I hope...
[05:04:31] That's not what's going to happen.  There's necessary waterfalls and non necessary waterfalls, but there's no good waterfalls.
[05:04:39] Um...
[05:04:40] Yeah, we talked about this diagram. It was great.
[05:04:43] And yeah, this could have helped us with our explanation. I was always a big fan of container components versus presentation components. One way to think of React Server components is that they move your container components to the server so you can pass server data props
[05:04:55] I think it's a helpful explanation.  I should have included this earlier, but I think this is...
[05:05:00] This is like the most basic...
[05:05:02] way of thinking about it from a single page app standpoint. I think the benefits go much beyond that.
[05:05:11] Um...
[05:05:13] Yeah, let me go here.
[05:05:17] Yeah, I saw some discussion here.
[05:05:20] Which I flagged because...
[05:05:24] I think...
[05:05:26] Evan was saying that someone had actually used bling with view already, which sounds...yeah, with bling.  We had to clear up some confusion here, because
[05:05:36] and I think we've already done this on stream, so I don't know if there's much to say. Basically, server functions
[05:05:41] can return server-generated component code,  but that's not really what the power is.
[05:05:48] it's more of a way of doing RPC calls to handle mutation. So it's not about the get, it's about the post.
[05:05:56] Anyways, sorry.
[05:05:57] I realize some of these would have been much more useful during my main part of the stream, not what I'm talking about this week in JavaScript.
[05:06:05] Which leaves me with...
[05:06:08] I think the last thing
[05:06:11] SPA view transitions have landed stable in Chrome.
[05:06:15] This is the...
[05:06:17] new transition feature.
[05:06:22] Which is...
[05:06:23] I think really, really exciting.
[05:06:27] They've been working on...
[05:06:29] basically...
[05:06:30] Bring it.
[05:06:32] like codifying spawn navigations into the browser.
[05:06:35] So you can basically freeze the old page, transition to the new page. Basically make it a lot easier to do a lot of things.
[05:06:43] that we do a lot of work in client-side routers to accomplish.  I think what's really exciting about this
[05:06:49] Especially because some people are like, "Oh, we need that for MPAs so we can move between pages."
[05:06:54] But I think what's actually really exciting about this from a single page app perspective  is that this aligns so nicely with all the server component stuff we're doing.  We want a minimal router in the client.
[05:07:05] this
[05:07:06] lets us use less JavaScript to be able to handle those kind of transitions
[05:07:12] with a client side router.
[05:07:13] Um
[05:07:15] I think, again, I always say routing is like when the architecture changes, you know.
[05:07:19] in a sense.
[05:07:21] We only got the modern set of SSR single page apps when we got push state in the browser.
[05:07:26] I think that these new navigation APIs from Chrome are going to be the piece that unlocks server components
[05:07:33] and server component performance
[05:07:35] Ultimately.
[05:07:37] That's why I'm very excited about this.
[05:07:41] This one might this might just be like
[05:07:45] part of the puzzle. I didn't actually read too deep on this.
[05:07:50] Um...
[05:07:54] There's a whole set of features around these transitions.
[05:07:59] This looks like it has to do a lot with the CSS classes.
[05:08:03] Um...
[05:08:05] But,
[05:08:06] Yeah. Interestingly, mind you, this is only in Chrome, so it might be years...
[05:08:11] Like, we'll see, I'm hoping other browsers pick up
[05:08:13] Um...
[05:08:14] But I think this is a very interesting... I think this direction is really valuable and important. We need more support from the browser that handle client-side routing.
[05:08:24] future architecture still relies on client-side routing.
[05:08:27] you know,
[05:08:28] So this is not going away.
[05:08:33] Alright, fine. I will open...
[05:08:36] The one more Dan Abramoff tweet.
[05:08:41] Yeah, yeah, right.
[05:08:44] Yeah, this is relevant to what I was talking about a bit earlier.
[05:08:52] I think we've already covered...
[05:08:54] covered this
[05:08:55] But
[05:08:56] I like to see this. I know that the timing is a bit awkward. I wonder how much the discussion kind of got into it.
[05:09:07] Yeah, he's talking about agnostic solutions here. See, if you want to support Preact, then you can't do this or something, you know.
[05:09:15] really trying to sell it
[05:09:21] Yes, but I think that's the right approach to take from Michael.  I'm hoping that they can figure out how to work together...
[05:09:29] This is something that Tanner and I spent a lot of time looking at on the agnostic router, because I kind of pushed him to say that he should let the framework handle the async stuff.
[05:09:38] Essentially, if you're going to make an agnostic router, leave Suspense up to React or up to  View or up to Svelte or Solid or whatever.
[05:09:46] basically build the
[05:09:48] build it that way. And I think if Remix does want to eventually accomplish that goal, to be fair, I'd see a path forward for agnostic client side routing for single page apps, potentially. I've always said it's really hard, but I know what it would look like now, at least, working with Tanner. We decided it wasn't worth the effort.
[05:10:03] It's the only reason why we pulled out. I think it does start
[05:10:07] funnily enough, by Remix actually adopting React's patterns,  and leaving that to React so that their abstraction
[05:10:16] can leave that to other frameworks too,  because the problem right now is they're actually a bit too opinionated to  work with solid or to work with,  you know,  some of the other ones.  Like it's fine.  It can kind of work,  but I think we need to leave async to the JavaScript framework.  Now that's,  that's,
[05:10:30] domain has shifted  in the last few years.
[05:10:41] So...
[05:10:43] Oh, it's no? Is it in the issue? Can I see?
[05:10:52] I think the one interesting thing that I like about Remix did it - see this problem?
[05:10:57] It's so obvious
[05:11:00] for React developers and it wasn't obvious to me.
[05:11:05] Because in Solid, you just go like, do the data...
[05:11:08] put the suspense boundary, read it underneath, and it works.  But in React, if you use the data here,  like the async thing, it's above the suspense boundary.  So you actually need two components,  which is really, really awkward  for a file system routing point,  to the point that the only solution  is to split into separate files.
[05:11:24] Wait.
[05:11:25] That's what Next does. Because they actually have to separate, they have to hide the suspense, because otherwise you're going to be making multiple entry level components. And
[05:11:35] I think Remix is really smart by putting this await in here.
[05:11:38] And they also came up with their own defer mechanism, which again, for Solid we have resources that have that same ability to hold the stream or not, but these are mechanisms that like,
[05:11:48] I guess React doesn't have yet, but
[05:11:52] Interesting. So yeah, I didn't... Oh, this is worth digging into. He's got a bunch of videos and examples.
[05:12:01] and he's saying how it basically breaks transition okay interesting
[05:12:07] Yeah. I mean, his argument's good. This is why Solid Start works the way that he's explaining.
[05:12:13] But...
[05:12:23] You need...
[05:12:24] start transition because you want to hold the routing state.
[05:12:30] Like if you switch a tab
[05:12:32] You don't want the state to apply immediately.
[05:12:38] Yeah, you can't make it with external stores.  We have that same limitation solid.
[05:12:41] If you'd like Remix users to be able to use suspense fully and void, then yes. I think it's also reasonable that Remix choose not to support these powers and maintain its parallel implementation, I ain't not blah blah blah blah.
[05:12:51] Yeah, this is...
[05:12:52] This is a tricky one.
[05:12:55] - Thank you.
[05:12:57] React's going to keep on building on these primitives because they're going to assume everyone uses them.
[05:13:02] And they're really nice primitives to build on top of.
[05:13:10] I mean, we have a version of them already, but when they're, it's, it comes down to API. Um,
[05:13:19] Like our Solid Movies app is built with server components basically.
[05:13:24] We may sit down specially to avoid this kind of UX.
[05:13:27] Where...
[05:13:31] Oh, wow.
[05:13:33] This just goes on
[05:13:35] It's funny because I would make Dan's argument here, not Ryan's argument here.
[05:13:52] Yeah, I see. Yeah.
[05:13:54] So he concedes to Dan's point and then says...
[05:13:58] We probably should spend our effort elsewhere. Okay.
[05:14:01] Yeah.
[05:14:02] This just means this is gonna be...
[05:14:04] This is going to be a discussion that goes for a number of months, I imagine.
[05:14:12] Thanks for sharing that, Greg.
[05:14:15] I'm not.
[05:14:21] Anyway.
[05:14:25] I think
[05:14:26] I think that's mostly
[05:14:28] What this week has been in JavaScript.
[05:14:30] We looked a lot at
[05:14:33] Thank you.
[05:14:34] It was like the aftermath of signals and...
[05:14:39] server component craze.  Um,
[05:14:42] I hope that kind of enthusiasm carries into next week, but it probably...
[05:14:46] It probably won't for...
[05:14:49] for a moment.
[05:14:51] It renewed my excitement to look into a lot of these topics. It seems like there's a few big things happening in every JavaScript framework right now. We're looking to compilation, we're looking into these server component type patterns, and a lot of them looking into reactivity like signals as a way to...
[05:15:09] marry these worlds together in a way that's efficient.
[05:15:16] I hope that at the end of this,
[05:15:19] you know,
[05:15:20] people better understanding why server components are like a good thing and why we should be looking at these patterns.  Like even if ultimately we end up breaking things down further or using resumability and stuff like that,  there's still a fundamental routing approach.
[05:15:35] problem that needs to be solved.
[05:15:36] And that's where the work has been. And the funny thing is the router part is actually probably the easier part.
[05:15:44] It's just a matter of
[05:15:46] working through all the like  optimizations like the
[05:15:50] parallelization, and all the DX details.
[05:15:55] around deciding what's on the server and what's on the client.  If we can figure that out in a reasonable way, we're seeing the start of
[05:16:03] you know, something  not like Hooks. See, Hooks
[05:16:06] you know,
[05:16:08] were a pattern, as I said, that people used for years before in reactivity.
[05:16:15] I'm thinking more of like a change akin to when we moved to single page apps in the first place.
[05:16:22] I don't usually say that, I don't usually talk about like next-gen, use those kind of terms.
[05:16:26] But this is it, and React is not going to be the only player in town.
[05:16:32] It's very clear to me.
[05:16:34] and there's going to be some really cool solutions coming out in this space.
[05:16:42] All right.
[05:16:43] I think it is...
[05:16:45] What do we got? It's a pizza time? Yeah, it's pizza time.
[05:16:49] Um...
[05:16:50] Thank you everybody for joining me today. Maybe check out Jacob Space, he's doing a Code in Life right now.
[05:16:57] And have a good week.
[05:17:00] Till next time.