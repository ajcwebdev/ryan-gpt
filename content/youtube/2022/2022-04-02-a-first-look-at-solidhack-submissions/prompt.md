---
title: "Ywv8cGOVNMg"
slug: "Ywv8cGOVNMg"
duration: "3:19:24"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/Ywv8cGOVNMg.m4a"
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
[00:00:02] Hello, everyone, and welcome to my stream tonight.
[00:00:06] Today we're going to do kind of a solid focus stream. We're going to look at the solid hackathon. It's been going on since January 7th, but it ends next week. So this is kind of
[00:00:21] uh last chance to showcase some of the cool projects um before it completes personally i'm  not actually involved in the organization or judging of this at all um i kind of opted not  to kind of weigh my influence into it although i guess by streaming to show some of the stuff off  i i might be considered to be doing that but uh
[00:00:43] Yeah, I honestly haven't looked at this stuff much. And I thought it'd be cool to kind of take a look and get an idea of what people have been working on because...
[00:00:56] Yeah, I've seen a few things posted, kind of done some retweets, and it looks like really cool stuff.  So I'm looking forward to it.  Yeah, if you're joining on, come say hi in the chat.
[00:01:06] Wow.
[00:01:07] Hi, Ricardo. Just kind of getting started up here.
[00:01:12] Sorry, I don't have any cool music or nice graphic.
[00:01:18] while we sort of get this going. But I've got my drink and that's all I need.
[00:01:27] Thank you.
[00:01:29] All right.
[00:01:31] Thank you all for joining on.
[00:01:34] I said we'll kick it back a little easy this week because, honestly, I'm
[00:01:39] Yeah.
[00:01:40] It's just kind of an in-between week, I guess.
[00:01:45] There's been some interesting progress this week in JavaScript and we'll talk about that in a minute.
[00:01:54] But I kind of, instead of having a week that I need to do a lot of prep work or kind of looking into stuff, I'm just...
[00:02:03] Kind of we'll just kind of go and see how things go.  As I said, I haven't really looked at the projects, what's there.  I'm hoping that, you know, we can go through things pretty quickly.  It might not get to everything.  I'll just probably just go down the list and just kind of check it out as we go.
[00:02:19] Hi, yeah. The streaming time doesn't really work for everyone, but I try my best. It's  always tricky after work and just kind of how it goes. But yeah, no, I'm looking forward  to this. I think it'll be a lot of fun. I think next week actually is going to be even  more fun and kind of the complete opposite stream.
[00:02:42] uh,
[00:02:44] I--
[00:02:45] I've been talking with a
[00:02:49] Fred K. Scott, and I think we're going to do a stream on the new Astro 1.0 release.  So we're going to dig right in and see what that's all about.  Next week, I believe, at the, I think Monday, they're going to release the...
[00:03:04] the Astro 1.0 beta, which introduces server rendering. We'll talk about that in a minute. Let's talk about this week in JavaScript, shall we? Everyone ready to get started?
[00:03:14] Yeah, let's do it.
[00:03:21] Thank you.
[00:03:23] Well, for me, let's see here.  I'm just gonna share my screen.  But for me this week in JavaScript,
[00:03:29] started. We'll talk about that more in a minute. I had a few presentations. I did this really  cool demo from Marco. Kind of a two hour -- it was an hour and a half really. But it was a workshop.
[00:03:45] where showed off like Marco's progressive enhancement and streaming and partial hydration  for people trying to get started with Marco this might be one of the best options for you because  I do have like the other stream where I'm trying to introduce a concept that's very technical  this is the opposite this is like literally let's just build a blog site so we're just  sitting there in the html just building stuff writing code getting a feel for what it's really  like which I think really lends to Marco we always try and
[00:04:13] advertise and speak to like all its amazing technical benefits.  But the truth of the matter is what makes Marco really special is it feels like you're just running HTML.  And I know every framework claims that, you know, they're like, oh, just JavaScript and HTML.
[00:04:30] Um,
[00:04:31] because of the lack of like the mentality around it, the multiplayer JAP mentality, it feels like you don't need JavaScript to do anything.  So, you know, it's a very different experience and it kind of combines all the benefits you see in things like Remix, where you have like the progressive enhanced forms and, you know, that whole kind of thing.  And, you know, with just this very nice kind of.
[00:04:54] easy to use things. So yeah, if you're interested, check out Marco, check out this out. But yeah,  let's get right to it. Big news this week. React 18 is now available on NPM. And man,  this one has been a long time coming.
[00:05:09] Um,
[00:05:11] Thank you.
[00:05:12] Sorry, I'm just catching up on a couple of these comments here. The stream is turning, yeah.
[00:05:21] But, um...
[00:05:24] But, sorry, I guess I should address this.
[00:05:30] It's super cool, but the tag are definitely on the thing.  Yeah, but the thing is, what I want to get at is...
[00:05:34] I don't know how much authoring you've done in Marco. Um,
[00:05:40] And the demo that I did was actually Marco 5.  It wasn't using the new tags API at all.  The tags API are incredible, and they do feel like their own thing,  and they don't feel just like HTML.  But the thing is, when you actually author a basic experience in Marco,
[00:05:56] 90% of it, like for base experience, 90% of it is just HTML.  Like you don't need the tags or the state or the JavaScript.  And that's kind of what the demo
[00:06:06] Um,
[00:06:08] That's what the demo is showcasing. I basically build a site that doesn't require any JavaScript, and I add a little bit of JavaScript, and it just feels like you're just building a site, but it's very powerful and it's super, super performance.
[00:06:25] Yes, the tags API is different. It is special. It definitely has its own thing. The syntax definitely you go, oh, this is this is a thing when you go to add it. But because
[00:06:36] of the base conceptions because you're not like thinking like a spa framework you're not like in  that mindset like
[00:06:42] You just kind of just throw some forms up on a page and it just kind of goes from there.  You're like, oh, there's an event handler.  Maybe I'll add a class here.  Or maybe with the tags API, you know, like a couple of designer tags, just it doesn't
[00:06:55] It feels like you're just adding sprinkles of JavaScript on the HTML in a sense. Yeah, that's the best way I can describe it.
[00:07:04] But let me get back to React 18. This is huge.
[00:07:12] And the reason I say this is huge is because...
[00:07:14] Well, this might not be the final story.  And when I read through the release, I kind of realized that there's going to be several minor releases along the line of 18th for it to get to where it is.
[00:07:27] Um,
[00:07:28] Thank you.
[00:07:31] essentially they've
[00:07:35] they've gotten to a point where like, this is the baseline.  This is the starting point where, you know,  libraries can start adopting it and using its patterns.  And the reason this is huge is because everything in react 18 has been  literally coming for five years.
[00:07:50] Um,
[00:07:52] which is amazing because this is kind of the culmination of so much work and so much thinking.  Dan posted something.  I remember the night after this was released, he was just like, I can't go to bed or I can't sleep.  He was so much time and effort has gone into this and like...
[00:08:12] years, you know, and it's like, how is the community going to respond? What are they going to do? What are they going to think? You know, there's definitely the sense that like,
[00:08:22] Like this has been, this has been, this started from a dream or consideration and design something, but, you know, probably dates back to 2015, 2016 time period.  And
[00:08:33] finally
[00:08:34] It's out there.
[00:08:36] And it's not done.
[00:08:37] But...
[00:08:38] people can finally use it and start really understanding where this vision is, why suspense has taken so many years.
[00:08:44] This is the release where...
[00:08:47] Suspense goes mainstream.
[00:08:49] concurrent rendering goes mainstream.
[00:08:54] And this is a huge, huge, huge deal.
[00:08:57] I like there's gonna be more things built on this and like, but like all the pieces here are game changers.
[00:09:06] And
[00:09:08] And having witnessed this through the beta period,
[00:09:12] having gone in there and stolen all their features with Solid and using them the last year or so.
[00:09:18] I can tell you this is a huge deal. Sorry, I had to throw that in. But
[00:09:24] No, I'm serious. This is this. This.
[00:09:29] once you get the chance to use the transitions, use the streaming, use all the pieces, everything just makes sense.  It's like part of this amazing picture that, um,
[00:09:39] react team has been painting and they've been giving us hints along the line if we're paying  attention and kind of putting it together and that's why the libraries are ready that's why  react query supports it and
[00:09:49] a bunch of the different fetch libraries.  And you start seeing that the ecosystem is kind of ready.  But the interesting part for me-- and I actually pointed this out--
[00:10:00] was that the most interesting choice in React 18 is forgoing a data fetching primitive.  We're going to talk about this for a minute because this one is...
[00:10:11] Okay.
[00:10:13] This one surprised me a little bit. It makes sense and I can appreciate why. I'm sure people in the chat might have opinions on this whole thing.
[00:10:24] Almost all the headline features like streaming transitions, even fully leveraging suspense, you know, on the client and server are based off.
[00:10:34] Data affecting, lazy components is one use case.  Maybe concurrent rendering, you know, you have something really, really expensive computationally, but not...
[00:10:43] rendering. Concurrent rendering doesn't improve performance of like raw rendering. It improves performance of-- and by raw rendering, I mean updating the DOM or
[00:10:53] you know, doing that. So it improves the performance overhead of like things are computationally expensive. But
[00:11:01] Essentially, it benefits you most when you're hitting the wall or hitting the limits.  It basically makes sure that the worst case isn't the worst, but it doesn't really improve performance on the best case.  But for...
[00:11:15] like the main reasons you want it right is around data fetching right navigation you click on the new tab load that data in the background show the fallback or do the transition show the stale state all all that kind of stuff is dependent on data fetching and um
[00:11:32] Reacts decided to not give the data fetching primitive and direct you to third party libraries, which have been working with these APIs for like almost a year now with a working group. So like they're ready. But it is it is a it is an interesting one because I've been I've been focusing on teaching. Right. I wrote an article about why the suspense.
[00:11:52] a few months ago where I tried to explain suspense, not in terms of lazy loading, but in terms of a consistency. Like the reason suspense is important is about consistency.
[00:12:03] of your UI. It's not just about showing placeholders. If you consider transitions and the whole thing, it boils down to
[00:12:11] making sure your UIs feel bulletproof.
[00:12:15] I think...
[00:12:16] It's an interesting challenge to try and teach these concepts
[00:12:20] when
[00:12:21] you provide the higher level features like streaming and transitions.  I didn't know high level, the low level, I guess, in a sense, but they're they're like things that depend on
[00:12:31] these primitives or data fetching, and then basically outsource the data fetching somewhere  else. So like there's kind of...
[00:12:38] interesting challenge of going like, you can't tell the whole story without pulling in a third party library. So how do you explain to people what that story is?
[00:12:47] I guess you just pull in the third party libraries when you go to teach it. I think it's an interesting challenge. And I think there's some reasons about it that we probably should dig into.
[00:12:59] Do you think...
[00:13:03] Do you think an element of that is not the alien multiple library items? Maybe, right?  If you provide primitives and you're basically telling people to rewrite their libraries off,  solid I got in early, there's going to be resource primitive, anyone who will make solid  query is going to build it on top of that. We know that's the approach. I think, I think,
[00:13:24] I think if they kind of provided their own thing,
[00:13:28] people might be like, oh,
[00:13:30] You know, but here's the here's the thing, though.
[00:13:33] React is providing their own thing. Let me explain in a second. I think this is the second piece, right?
[00:13:39] React Server Components,
[00:13:42] as I mentioned, anyone who's following the stream is paradigm shifting, right?  Like it's actually changing the mental model.  It's almost like multi-page app.  It's like taking Marco and jamming Marco and React together.  Like that's sort of...
[00:13:59] That's sort of what it is. And, sure, at -- sorry, internally at Meta, they use Relay, right?
[00:14:08] And
[00:14:09] the
[00:14:10] Yeah, so what we got here are some details. I think they have their own internal fetching live.  Some realization. And yes, right. So and it's much harder to come up with a generic primitive  that supports things because there's so many considerations. Caching is one. Preloading,  you know, like all these things where people are opinionated and have special use cases  and it's hard to generalize and just say this is a solution.
[00:14:36] Dan said recently they try not to add anything to React  that's significantly better than what's possible in UserLand.  Yeah, and this is probably a good approach to take,  but my whole point here isn't...
[00:14:49] that it's like how much harder does it become to actually teach these
[00:14:54] concepts. In a sense, async is a core concept now. Like it's something we like transitions or suspense. It's something that we have to teach as a pattern, kind of like hooks. And then it's
[00:15:06] It's kind of like...
[00:15:09] I mean, this isn't even as strong of an example from my perspective, but it's kind of like it's kind of like if React was like, OK,
[00:15:15] You guys?
[00:15:17] We've come up with this thing that hooks.  It's super, super powerful.
[00:15:22] We'll give you this book called Use Reducer.
[00:15:26] Don't worry.
[00:15:28] Other libraries will figure out how to build stuff on top of it, and they'll give you state primitives and other things.  But really, with use reducer, you can build anything.
[00:15:38] So we'll provide you with user reducer, and this will-- but like,
[00:15:43] This will enable it and use those other libraries and
[00:15:48] then, you know, you'll find, you know, what you need to do. Like, I think it's, it's,
[00:15:55] It's much harder to teach concepts when you don't control the primitives.
[00:16:00] Um,
[00:16:02] Like picture if you had to download use state from somewhere else.
[00:16:07] But I mean, I'm very primitive oriented, so that's probably where my bias comes from.
[00:16:12] And I think they'll probably get there.  And I said React server components are a big part of this because...
[00:16:17] server components don't use hooks.  They don't, they aren't stateful,  yet they still play with suspense.  So you need a completely different sort of,
[00:16:26] primitive to run in React server component land.
[00:16:30] You can't just make like a use resource or whatever.
[00:16:34] And if you're betting that the future data fetching is on the server and the future routing is on the server, which anyone who's been following the stream knows that's probably the bet to make, then
[00:16:46] There's no point introducing a user resource.
[00:16:50] Like,
[00:16:51] Let React query do that, you know, or whatnot. And, um,
[00:16:56] work on the primitives for this new...
[00:17:00] world order or approach you're working on and figure out what's needed there, you know.
[00:17:05] And, well, you know, you guys might think, well, that's kind of crazy, but look at the  server components demo. There was what, React Pro Scres in there, React, uh,
[00:17:15] What else was there? They're giving examples of these React Fetch, I think, like of these React specific libraries. And yeah, I mean, obviously those have to play with suspense on the server or whatnot. So like clearly they are working on primitives to kind of finish off this part of the story.
[00:17:34] And those primitives probably will be available.
[00:17:37] So,
[00:17:40] I mean, where do you kind of place it?  I mean, I think this could even partially just be like a slow roll on this because like these things are complicated and you don't you almost need maybe a meta framework to properly leverage some of the pieces on, you know,
[00:17:58] Streaming, for example. It's hard for someone to pick up and go, okay, I'm going to make streaming work. Like CSS and JS libraries and query fetching libraries don't just work with streaming.
[00:18:08] like,
[00:18:09] I can use-- what's that one?
[00:18:14] Urkel as an example, but I'm sure Paul is the same. Essentially, the expectation there is
[00:18:21] When you render on the server,
[00:18:23] You collect all your data caches, serialize them out on the end,  and then because those data caches are there, when you start hydrating,
[00:18:32] You have all the data available and then you hydrate the page. Now, if
[00:18:41] you're streaming, you have the ability to start hydrating the page before the page is done on the server.
[00:18:47] So now you have to incrementally create that cache.
[00:18:51] And, you know,
[00:18:52] You can't depend on...
[00:18:54] the cache completing on the server before you start any hydration in the client.  And if libraries just assumed that things work that way,
[00:19:02] like you're going to have some trouble. Same with CSS and JS. Like basically anything that kind of wants to write to the head
[00:19:09] in streaming.
[00:19:11] doesn't get to do it in the same way.
[00:19:13] So it's a lot easier to facilitate this through something like a meta framework, like Next.js or whatever.
[00:19:20] By giving this a little bit of time,
[00:19:23] Thank you.
[00:19:23] like it's almost better,  but it makes this almost feel like a soft release, right?  Like I was kind of like before this React 18 announced,  I didn't realize it was gonna be this close,  but I looked at the RC and I'm like,
[00:19:34] Okay.
[00:19:35] Like, is this are people just going to like start writing promise fetching our promise throwing libraries, right? Like to build their own their own resources like it's a little bit more complicated that you actually want to throw on read, not on fetch.  But.
[00:19:53] Like, if you're just a guy, I guess go pick up React query. That's the answer. You know, if you want to try these features. And there's nothing wrong with that. It's just, and as I said, I see a lot of reasoning in it. It takes a lot of work to find those right primitives.
[00:20:09] But...
[00:20:10] like...
[00:20:12] This is an example of one of those things where like,
[00:20:16] You can't just go to--
[00:20:20] the REPL, so to speak, and just go,
[00:20:22] OK, I'm going to do some async data fetching example.  You need to pull in another library.
[00:20:31] I mean, you don't need to, as I said.  You can...
[00:20:34] Write your own mechanism to throw promises, but like...
[00:20:38] That's pretty low level.
[00:20:41] Thank you.
[00:20:43] So we'll see how this goes, whether they introduce a primitive as this kind of goes.
[00:20:52] I think the key part about this release is, and you can see it in the release announcement,  most of this was focused at like, hey guys, don't worry about this. This is targeted at library authors.
[00:21:00] Because there's a lot of changes and a lot of things that they have to consider.  I think...
[00:21:04] All in all, they've done a really good job of making this not breaking, considering like how big of a like conceptually like the wiring and stuff like.
[00:21:13] This is one of those examples where like, I don't know if you've ever been in this,  in this state, you're like, you've been working on a project for five years and you're like,
[00:21:21] it just can't go where we want it to go.
[00:21:26] And, you know,
[00:21:28] And you're like, we need to change slightly, but we have users and they like our current features.  Like, this takes me back from my own startup.  And you're like, well...
[00:21:38] let's do a rewrite. And you're like, no, no, no, no, no one wants to do a rewrite. Like it's,  it's brutal when you do a rewrite, you know, you always end up introducing new bugs and change the  use cases. And like,
[00:21:49] No one wants to invest the money on it.  It takes time and it's always late.  But at a certain point, you keep on kind of going.  You're like, no, we need to do a rewrite.  Time is time.
[00:21:59] And to pull that off,
[00:22:02] you usually have a couple approaches.  You have the like rip the bandaid off approach,  which in my opinion often is better,  but that's not something you can do  when you have a real user base.
[00:22:12] Right. And we've seen what happens with that. Angular 2 happens with that.
[00:22:19] Um,
[00:22:19] The other option
[00:22:21] is spend several years incrementally adding it in pieces, shift the mindset, make small changes, actually move the people to where you're going and ease them in along this path where eventually they don't even realize that you've convinced them on a complete rewrite and a complete change, even though it takes multiple years to pull this off.
[00:22:42] The danger of that one is by the time you get there, because you have to move at that speed, maybe where you're trying to get to wasn't actually the goal.  Like if you'd just done the fast way, you could have been way far ahead.  But because you've had to kind of go this roundabout way, maybe you're not where you need to be.  I mean, you'll be second guessing yourself forever when you take that path, but you'll keep your customers.
[00:23:02] for the most part, and you'll get there.  And I feel like that's what's been happening  in the React team.  This is...
[00:23:08] I said 2015, so this is like seven years in the making.
[00:23:12] Just like maybe seven years ago was just the thinking, but like the pieces started showing up as early as 2017.
[00:23:21] which was what, five years ago.
[00:23:23] This has been a strategic, careful thing, and there's been missteps and stuff, but generally speaking,
[00:23:30] They're still here. So they've done a pretty good damn job, right?
[00:23:35] Um,
[00:23:38] So,
[00:23:40] I mean, for any criticism that I might have here, I mean, you got to put that in perspective.
[00:23:48] I'm inspired by the incredible engineering effort here to basically...
[00:23:54] like,
[00:23:55] This is like a...
[00:23:57] If you try and pull a tablecloth off a table and you do it really fast, maybe the dishes don't go flying.
[00:24:04] It's almost impossible to do that in a slow way and reacts doing it.  So,
[00:24:10] Kudos. So, yeah, just to put in perspective, question here. Does Sol have built-in state management like Redux or XState? I mean,
[00:24:20] I mean, those aren't built into React, to be fair, if that's the question.  But technically speaking, Solid is a reactivity language or library, kind of similar to MobX, as Orrin's saying.  So, like, essentially, it is kind of built in because...
[00:24:39] Um,
[00:24:40] It is the framework that you could view the framework as a state management framework. To be fair, the primitives are really simple. So it lends well with other organizational patterns. We don't have to be opinionated. Like you can use Redux or you can use XState. But essentially, if you did nothing,
[00:24:56] there is some kind of state management. And in React, for example, it's kind of the same. Their components are the state management.
[00:25:03] In solid, that state management is innately separate from the components. So as a baseline,
[00:25:09] we already have state management by the definition of modern front-end frameworks kind of
[00:25:14] built in.
[00:25:17] Yeah, exactly. Like just literally take something you put in the component, stick in another file, and you have state management.
[00:25:25] Thank you.
[00:25:26] Thank you.
[00:25:27] Is everybody on the hooks train? All Rackfoot I've dealt with in the last five years has been class-based. Yeah, no, I mean, they don't teach people. And I say they, I mean the ecosystem. Talk to someone who started development even as late as 2018, like new devs, no one bothers teaching classes anymore. It's
[00:25:45] Like that tells you how amazing it is.
[00:25:48] Like, how do you do that?
[00:25:50] you have a change that's that fundamentally different.  You completely change the API and somehow transition everyone to it without
[00:26:00] almost very much of a fuss.  Like,
[00:26:03] I mean, yes, some people have issues with hooks and there's trade-offs and stuff, but generally speaking, the ecosystem.
[00:26:08] there willingly.  They didn't have to force them.  They didn't have to go like, do this upgrade.  People just came there
[00:26:17] on their own. So yes, I'd say class APIs in React are pretty much dead, and probably have been for a couple of years.
[00:26:28] Thank you.
[00:26:31] Yeah, exactly.  Right?  Like, it's always tricky.  I don't know if hooks...
[00:26:38] as an abstract, like there's, I understand the reason for being, but it's an interesting question of whether
[00:26:44] like,
[00:26:45] React's model makes the most sense for hook or primitive type things because it's essentially...
[00:26:55] like a top-down functional programming mentality, memoization, you know,
[00:27:01] composition and
[00:27:03] Now you're kind of introducing these
[00:27:06] kind of higher or like kind of higher order concepts like uh which functional programming  has been introducing like you know some people tell me the algebraic effects or something but  i don't really understand algebraic effects but like essentially these these sort of
[00:27:20] different concerns into the functional model and
[00:27:24] it works and there's a whole science behind this you know like an academic side to it but
[00:27:31] for most people,
[00:27:34] it might be a bit on the complicated side, but for the simple use cases, you'll never hit the complication.
[00:27:43] A lot of closures, you betcha.
[00:27:47] So, I mean, we're talking a lot about React here.  I wonder if I actually bookmarked
[00:27:52] when I'm -- something kind of similar to that. Let's see if I have it here.
[00:27:57] I found this one interesting because...
[00:28:01] This is a pretty...
[00:28:04] Yeah.
[00:28:06] know it all can take and
[00:28:09] I found it kind of interesting because according to this guy, and this probably might help you, Gray Restful, is...
[00:28:16] is like--
[00:28:18] Yeah.
[00:28:20] So according to this guy, solid is an obvious evolution.  And it's funny because when I talk about React, I always said it was an obvious evolution.  So I found this thread a little interesting.  SolidJest is for sure better than React.  The consensus view will come around to this within 10 years.  I mean, hopefully sooner than that, but it's only 25% better.  So React is still most of the way there, but it's fundamentally enough to...
[00:28:43] a step forward that I don't see how Reacts Inferior model can survive longer. That's tough.
[00:28:49] The way I can predict SolidJS from a mainstream solution is the same way I predicted something like React would be ideal before React existed. And the same way I predicted something like SolidJS would be ideal before SolidJS.
[00:28:59] This guy has pretty good insight.  I mean, to be fair...
[00:29:03] I would probably have said the same thing.  So I'll take that in.  But essentially, he wrote his own reactive library that was similar to Solid and with
[00:29:14] GraphQL back in 2015  and
[00:29:18] And, you know, whatnot.
[00:29:21] And...
[00:29:22] Thank you.
[00:29:23] Okay.
[00:29:24] And listen to this reply. This is not obvious to people. Because someone's like, well, what about Svelte, right? And he goes, Svelte is a decently good React-like framework that makes good use of pre-compilation to give some better use of Svelte. And others don't cleanly nail the important primitive building blocks away Sala does. So this is an interesting one. Because I think someone else said something along those lines, too. What did he say? Because...
[00:29:49] Check out Svelte, yeah. It's all right, but it's no solid. It doesn't have the need of  foundational building blocks to treat reactive state and reactive components as the same kind of thing.
[00:29:57] Yeah.
[00:29:58] so it
[00:30:00] It's just an interesting question, right? Because
[00:30:03] If you're going to buy into what Sala does,
[00:30:06] you're buying into the idea that the model is fundamentally different.  And I don't think that's obvious. People see something like, Oh, it's react. Um,
[00:30:16] I thought this was an interesting take. That's why I bookmarked it. Because I didn't make the argument, but he's making the argument for me quite well. It's because obviously he came to this conclusion himself a few years ago.
[00:30:32] But
[00:30:34] Thank you.
[00:30:35] Only salt.js can express the set of all desired program behaviors by elegantly composing a small set of fundamental building blocks, so it's going to find its way into your stack eventually, even if it just influences felt the same as how React influences Angular's direction.
[00:30:47] Whew.
[00:30:49] I guess we'll see.
[00:30:52] Thank you.
[00:30:52] - Yes, JS is in detail from the standpoint of analyzing expressive power composing fundamental and building blocks. So I would be fine using hyper script instead of JSX if I had to. Yeah, no, this guy gets it. But I just thought this was an interesting thing in this whole heat talking about, you know,
[00:31:07] primitives and react and whatnot.
[00:31:12] Bye.
[00:31:14] Yeah.
[00:31:15] -
[00:31:17] Yeah, I mean, you guys are talking about algebraic effects in the chat.
[00:31:21] I do actually get them.  I just...
[00:31:26] Not enough that I mean, I could probably draw something and explain it, but
[00:31:31] Yeah.
[00:31:32] It's a thing, right, which is always more complicated than it not being a thing. And this is something I'm very conscious of on the reactivity side, because often we introduce things and you kind of have to decide what the tradeoffs and balance of those are. But in any case, I'm
[00:31:46] Uh,
[00:31:47] This was an interesting discussion. So, yeah, this is what we're talking about on React, right?
[00:31:56] Anyone else have any more thoughts on React before we move on to some other stuff for React 18? Because I'm willing to chat a little bit right here while we're here.
[00:32:08] Thank you.
[00:32:09] Thank you.
[00:32:10] Thank you.
[00:32:11] Thank you.
[00:32:17] Yeah, I mean, it's more than performance. Performance is nice and it's really cool how I've managed to prove that in certain benchmarks, but it's actually...
[00:32:29] Stealth and Solid are like not really actually that similar, which is kind of crazy because everyone's like, oh, it's compiled things. Solid is like it's like React, actually. It's
[00:32:44] big love affair with React there in that
[00:32:47] Every piece is composable and portable and transferable. Like it's not like your entered compiler world. And it's funny because Marco
[00:32:56] is more, but Marco is actually trying to solve composition. So when I wrote a tweet this week, too, I'm not going to chase on that thread. I said something along the lines of that I've seen Svelte's future.  And I don't mean to say that I know exactly what Svelte's going to look like, but I know the potential of where those compilers can go because of the work I've done on Marco. Marco has managed to control the world.
[00:33:21] you know, it is kind of less portable in that sense.  It's not just JavaScript in the way, you know, React or Solid is, but, you know,
[00:33:28] It has...
[00:33:29] actually escape the local file boundaries that you find with Svelte or most of these compilers. So, in a way,
[00:33:41] If Marco can do it, one day Svelte can do it.
[00:33:45] essentially. Svelte has all the capability and potential here. So the beautiful thing about the compiled approach is
[00:33:52] You can't bet against it.
[00:33:56] Bye.
[00:33:57] As long as they're smart about syntax and patterns, like maybe they've kind of pigeon-told themselves into a hole the way that they've set up their syntax that they can't get out of it and they're like, like it and no one wants to move on.  But the compiler has incredible capability within the zone that it has domain.  And Marco has shown that that domain can expand beyond what Svelte does today.  So when I see Svelte add things like const tags and all that, I'm like...
[00:34:19] Yeah, you guys are getting it. Like it'll get there. Right. It's not saying that they won't go a different direction.  I'm saying the potential is there. Svelte is capable of incredible things.
[00:34:29] But in Solider, very much on the other side of, you know, of the spectrum.  I'm kind of looking forward to this.  And it'd be really cool in a couple of years that the solid rivalry and philosophy, you know, kind of plays out the same way.  Maybe Angular and Reacted back in the day, because I feel like.
[00:34:52] it
[00:34:53] there's a lot of similarities there.  And I feel like
[00:34:56] I feel like there's so much more each side can do, right?
[00:35:02] I'd love if Marco was the one on the other side, but Svelte is popular. We'll see what happens in Marco 6 if people really pick it up, because Marco is really, really incredible.  But there is this kind of philosophical place and difference in terms of what role the compiler should play in all of this.
[00:35:23] Svelte could pick up that torch.
[00:35:25] you know,
[00:35:27] Like it's definitely possible. Marco has proven that. So yeah, it's going to be interesting to see where these things go.
[00:35:37] Thank you.
[00:35:38] What do we got here?
[00:35:39] Thank you.
[00:35:41] Thank you.
[00:35:43] Amen.
[00:35:46] Thank you.
[00:35:48] Thank you.
[00:35:49] Yeah, I had an old tweet about this.
[00:35:55] Yeah, it's fun.  I mean, the thing is...
[00:35:58] Effects are everywhere.
[00:36:00] You need these kind of escape hatches.
[00:36:04] When you build your world as an ivory tower where everything is pure,
[00:36:09] The thing that doesn't fit is hard. Do you know what also has these kind of issues? If you're trying to build something in pure reactivity, like pure RxJS, it's breaking out of the system that's always kind of a little bit tricky.  CycleJS is kind of genius in that they built the effect loop essentially into the framework, and they do it quite well.
[00:36:30] when you build with such purity,
[00:36:33] real life happens.  And the funniest thing is,
[00:36:38] Nope. UseEffect is kind of like an escape hatch that you shouldn't need and use as much as you want. Do you know why UseEffect is used so much?
[00:36:47] Because,
[00:36:48] reactive systems, including React, which people say not React, generally are synchronous because they need to ensure consistency. That's super, super, super, super important. You need your UI to be consistent. And even if React does batching and stuff, essentially,
[00:37:05] When you apply the side effects, the rendering and stuff, it's got to be consistent. So why use effect? Well,
[00:37:12] The number one thing is what is not synchronous that you need in every freaking app?
[00:37:19] Data fetching.
[00:37:21] Which brings me back to this data fetching primitive.
[00:37:23] I added that to solid and then suddenly you don't need to use create effect  anymore. Like,
[00:37:29] And this isn't like rocket science, because React query does the same for React.
[00:37:36] Remix does the same for React.
[00:37:39] It isn't magic.  You just abstract away the data fetching.  You get rid of most of the issue around using useEffect.  You need it.
[00:37:50] because there's no native way to handle async.  Suspense, all these tools being built into React 18 handle async.
[00:37:58] It's just that there's no, we just don't have the primitive to make, to let you use it.
[00:38:11] Yeah, sorry, I'm a little heated on it, I guess, but.
[00:38:14] It's kind of...
[00:38:17] it's kind of like, it's kind of very straightforward.
[00:38:25] Um...
[00:38:26] Let's see what we got here. This felt reactive. Am I going to do it? Yeah, I'm going to do it.
[00:38:34] Health is truly reactive.
[00:38:37] Okay.
[00:38:41] Thank you.
[00:38:42] What's the next question?
[00:38:45] Bye.
[00:38:49] Yeah, yeah, exactly. And Marco doesn't have directives yet and stuff too. But I think this is a natural place when you start controlling the world. To be fair, I don't know if Marco has decided completely philosophically where they are. Maybe they're in the middle. Because once you unlock the composition, you're kind of like, well, maybe we should give a little back to the user.
[00:39:09] I think there's a range here. Maybe Svelte is further on the batteries included side, but with a compiler, that line gets very, very gray.
[00:39:17] Um,
[00:39:18] And
[00:39:20] And
[00:39:21] yeah, I mean, what that means in the future is probably going to be different. So, yeah,  when I talk about Marco, I'm talking about pure mechanics of rendering, server, like all the  potential from performance patterns, you know, like architecture. The animations felt are amazing  and unmatched. But actually,
[00:39:42] I saw something really cool. Everyone just assumes that, you know, because this is actually related. There was a tweet about animations by Adam Rackis this week. And
[00:39:54] I didn't bookmark it.  I could try and find it.  But essentially, this started this whole batteries included  conversation.  So it probably should have been on my list of things I bookmarked.  But essentially, I found out this.  Inferno.js, people know, is one of my favorites.  They kind of inspired me to seek performance.  This was a VDOM library based kind of on the same cost as a React,  but just was so much faster.  And most of the techniques that we--
[00:40:21] like owe performance to today, we owe to Inferno. Sure, Solid's core rendering is completely  different and I got my influence in different places, but once I got past that and I was like,  oh, how do I handle styles or, you know, special properties and attributes versus this and all the  places where you can enter de-optimizations really quick,
[00:40:42] Inferno is where I go.
[00:40:44] I go, OK, how did they solve it?  Because they were there first.
[00:40:48] Like,
[00:40:50] Since Inferno 2016,
[00:40:53] framework performance has maybe improved
[00:40:56] maybe not even 10%.
[00:40:59] Inferno made the 80, 90% traversal.  But check out what Inferno has new in Inferno 8.0.
[00:41:09] Built-in animations.
[00:41:13] This gives me hope because this suggests,  and we should probably look and see what the API is on this,  if we can find it.  But essentially this suggests that you don't need Svelte  to have this kind of stuff built in.
[00:41:23] Thank you.
[00:41:24] You just need a little consideration in your model.  So I think this is cool to see a super performant V DOM library.  And when I say super performant, I mean
[00:41:34] regularly outbench is Svelte. Inferno is usually faster than Svelte in most benchmarks.
[00:41:40] And it has the built-in animation.
[00:41:43] You know, there is hope here. There is potential. So it isn't unique. Obviously, compiler makes the composability and feature inclusion easier. But for the most part, if you design your API in a smart way, it can be tree shakable.
[00:41:57] So, anyways, just thought I'd point it in because isn't it really cool that -- that
[00:42:04] Okay.
[00:42:05] that we have a super performant beat on library.
[00:42:09] with animations. It's just like the other side of things, you know? And
[00:42:13] There you go.
[00:42:16] I didn't really finish my thought here on Svelte being truly reactive.
[00:42:21] This is a marketing page, and I sometimes have fun with that.
[00:42:27] Yeah, I mean, this is the best way to market in the world, right?  Even Vue says it's reactive.  Well, I mean, Vue is reactive.
[00:42:35] Vue and Solid have basically the same core reactivity.  You know, obviously I wrote my own version and things are a little bit different, but essentially they both work on fine grained.  It's just once you get into rendering, everything's different.  Vue goes into a VDOM.
[00:42:50] until they don't, right? You saw the announcement. They're working on a Svelte-like, or sorry, a solid-like compilation, which was really cool. I mentioned that last week. Evan, you announced that, which...
[00:43:02] It's interesting. They're thinking is it still kind of localized? But I mean, who knows, maybe they'll try and like it too much. We'll see. Because as I said, Evan once told me that, and I probably have this tweets, I think I bumped it up again, because I was, I added something.
[00:43:19] somewhere now
[00:43:22] Where was it?
[00:43:24] Yeah, I'm not going to find it again. It's fine.
[00:43:28] I'd go back the other way. Back, back, back, back, back.
[00:43:32] I'm just not going to find it now.  It should be obvious because it's like a giant...
[00:43:37] Thank you.
[00:43:37] Okay, I give up.
[00:43:40] Doesn't matter. I'm sure someone will point out that I scrolled right past it. But essentially,
[00:43:47] Yeah.
[00:43:50] The reason that you didn't do this before is because they didn't think that without a virtual DOM they couldn't handle complicated logic. And I think Solid has managed to prove that that's not the case and that you can do complicated logic.
[00:44:04] Yeah, I mean, the whole argument on what's reactive and what's not reactive is kind of so funny.  I wrote an article on this, too.  You know, I love that I now have articles on it and stuff.  You know, I like to point out, and if you notice that the guy in those tweets I was talking about a minute ago, that felt was a React-like framework.  And people were probably like, what?  But it's true.  It has a lot of actually the same concepts of component rerunning.
[00:44:34] from Create. And its reactivity is basically that when you
[00:44:38] assign something, it tells a component to rerun. It's actually very, very much like React in the sense that your invalidate function or like your equal sign is basically turns into a set state that makes a component rerun. View, um,
[00:44:51] is actually has the same print as a solid, except
[00:44:56] it wraps the whole render function
[00:44:59] in a crate effect, essentially.  So it just reruns the VDOM on the change.  But it actually separates the setup
[00:45:09] that way. So it is almost like solid in that the setup function runs once. So there's a lot of similarities on the on the view side, I was going to pull up the article that I wrote a while ago, but what was it react react.
[00:45:24] It was something about React--
[00:45:28] I
[00:45:29] How React isn't reactive and why you shouldn't care.
[00:45:34] Thank you.
[00:45:35] maybe worth looking at at some point. But essentially, my whole argument here is that  everything is reactive and this whole reactive marketing thing is kind of silly because, you
[00:45:44] Like,
[00:45:45] If you're going to call Svelte reactive, you have to call React reactive.  If you don't call those reactive, then maybe...
[00:45:52] Maybe there's a category where view and solid or reactive, and those two aren't, but
[00:45:59] Potatoes, potatoes, you know.
[00:46:03] Yeah.
[00:46:04] Bye.
[00:46:06] Thank you.
[00:46:07] Thank you.
[00:46:09] Thank you.
[00:46:11] Yeah, I mean, it's because the components aren't the thing that update, right? It's a granularity.
[00:46:19] consideration.
[00:46:22] It's so weird because everyone's used to the component model now that it's just kind of expected to work that way. But before React,
[00:46:30] Things were more like solid.  So React changed things in an interesting way, which was good.  It's funny.  We're sitting here and we're making jokes about...
[00:46:43] about how-- like, actually, I can just look at my notifications and pull something out here. We're making jokes about how React--
[00:46:54] re-renders, essentially.
[00:46:58] Thank you.
[00:46:58] And this is all April Fool's, so don't take this too seriously.  But essentially...
[00:47:05] The whole thing is like –
[00:47:09] go find an old Jordan walk video. Um,
[00:47:14] And the re-rendering is seen as a blessing.  Like they solve the problem by just re-rendering everything.  It was considered a revelation.
[00:47:24] And
[00:47:26] You know, 10 years later, we're sitting here kind of going, ha, ha, ha.  We don't care about re-renders.  The VDOM is just virtual rendering.  It's not real rendering.  You know, like...
[00:47:37] I mean, this is all just people being sarcastic, and I hope it doesn't get too out of control. Obviously, this is just April Fool's kind of gone out, but I just wanted to kind of put out there...
[00:47:52] that
[00:47:53] Like,
[00:47:57] There's good things about re-rendering too, right? There's trade-offs here. It's just funny because we've kind of come around full circle because when React came out, everyone's like, wow.
[00:48:07] You've somehow made re-rendering not completely suck for performance.
[00:48:11] That's what they solved.
[00:48:13] And now we're like...
[00:48:16] What do you mean you're re-rendering? That's like so unperformant.  It's because the whole everything else got way more performant.  Now when we look at the re-rendering, we're just like, ugh, you know?  But it's a mentality shift.
[00:48:28] you know
[00:48:30] And
[00:48:32] I don't.
[00:48:33] Who knows, you know, maybe it'll come back around again, you know, there'll be a reason for it, you know, these things always like, it's always some other factor that plays in that changes things.
[00:48:42] what is actually practical. It's so hard to predict. I've told people this story before.
[00:48:47] I didn't expect Sol to be where it is today.
[00:48:50] Because I honestly thought
[00:48:54] you know, even though I didn't feel that way, that...
[00:48:58] people didn't like, you know, the like they like this re-render mentality.  And I'm like, it doesn't work for me because it's like it didn't feel
[00:49:08] Right.  Like re-rendering always felt really imperative to me.  Like we're just like creating the scene.  I used to do 3D.  You know, I did graphics programming.  And it was mostly 2D, actually.  But like I tried to make video games.  And it felt like the render loop.  And I was just like, I guess that's a model, but like--
[00:49:25] I love the declarativeness of HTML and DOM and reactivity.  So like when I like I never got into React early days, I got to react later  because I came to respect it incredibly.
[00:49:33] incredible amount, but like,
[00:49:36] It
[00:49:38] It's funny, like it's kind of like fashion, you know, and it kind of goes back and forth and in season. So we shouldn't be too hard on any of our opinions because any moment they might actually like some something fundamental might change.
[00:49:53] Amen.
[00:49:59] Thank you.
[00:50:01] Yeah, Solid Reading State does more than just Reading State.  Yeah, it creates a subscription.  And actually, Vue works the same way, right?
[00:50:14] Thanks.
[00:50:17] Thank you.
[00:50:19] I thought about it at the time. Views direction now is actually one where I could probably jump on. Let's face it here.
[00:50:27] They...
[00:50:29] They're adding the features. They have all this stuff. I just wasn't convinced that Vue would actually move at this pace. And like, you got to maybe this is like a little bit harsh on them, but they
[00:50:37] They had everything there and then they hid it behind stuff like the option API.  I found it frustrating as hell.  And I mean, there's decisions for them.  There's trade offs.  And Evan is kind of a genius.
[00:50:48] Um,
[00:50:49] you know, Vue is the most popular or most starred framework. It might not be the most used or whatever, although it's still way like mountains above Svelte or whatever. Like, it's like, it's funny when you actually look at usage.
[00:51:03] um,
[00:51:04] React is like...
[00:51:06] like jQuery, like up in the sky, and then kind of halfway mark is Angular and Vue. And then Svelte's like just getting off the ground and Solid is literally like a flat line, like you can't even see it's on the grid. And most frameworks are actually down there by comparison. So like Vue is doing some some some good stuff, clearly doing the right things.
[00:51:25] And I think everything they've done directionally with version three is like what I wish they did years ago.  And they could have.  It was...
[00:51:34] And that's where my whole thing is.  I think Vue's actually getting out of the shadow finally.  Like, yeah, we're taking ownership of ourselves.  It took hooks to kind of be that nudge.  But I think Vue's now going like, okay, we're not just that.  Like, some people might have a cute view of kind of copying React.  But I think it's just careful.  Because the thing is, when you have a reactive system, fine-grained reactions, and I said this before, you can kind of model whatever the hell you feel like.  So, in a sense, Vue...
[00:51:58] has that same kind of superpower that solid has.  I chose to just go hard and just go like,  what's the best possible thing I can do with this?
[00:52:07] Vue is taking more of a perspective of like,
[00:52:11] Well, people like this, so we can add that.  People like this, we can add that.
[00:52:15] People like this, we can have that.
[00:52:17] Yeah, I mean, Vue can be everything to everyone.
[00:52:20] So, I mean, solid could be too, but philosophically, that's not,  it's not where I'm sitting and I don't have the means,  like what kind of resources does it take to make it?  I think it's really cool in solid ecosystem that people are doing that on  their own.  And I think that kind of attitude and embracing of experimentation,  it's like what makes it so exciting to be involved in the solid community.  And hopefully when we go look at the kind of hackathon submissions,  we'll see some of that ingenuity, but yeah,
[00:52:49] Vue just brings it into the core.  They're just like, oh, yeah, that framework has something cool.
[00:52:54] Oh.
[00:52:55] They're showing a new way to do performance.
[00:52:58] And that's the power of primitives and reactivity.  I think Vue has a little bit of bulk that they have to get around because they have the VDOM and all that.  But...
[00:53:05] Give them a couple of years, we might be looking mighty similar.
[00:53:10] I mean,
[00:53:11] Is that enough for me to drop using solid right now or doing solid?  I don't know.  I'm keeping things moving.  I hope my gut feeling is...
[00:53:21] By the time that happens,
[00:53:24] Solid will have new features.
[00:53:26] will have proven how streamlined and effective it is.
[00:53:31] View might be just everything to everyone, but that might make it nothing to someone.  Do you know what I mean?  Like it just might be too much.
[00:53:41] Um,
[00:53:43] So would I join up a view? Like not where I am right now, because I think there's philosophical differences, but I think it's a great framework and I think they have everything they need to be successful.
[00:54:00] And you're just having fun with it. I think Orrin's been making the devil's advocate arguments all day long in replying to his parody tweet, and he's on it tonight.
[00:54:15] Um,
[00:54:16] Oh, man. We shouldn't be having too much fun with it. I mean, as I said,
[00:54:23] What React has done and has achieved is incredible.
[00:54:30] Yeah, I mean,
[00:54:32] I think there's potential there, of course, is like I never have time to do this stuff myself. People contact me. They're like, oh, do you want to write a book or write a course? And I'm like, yeah, that sounds great. And they're like, oh, and we'll pay you. And I'm like, I don't care about the money. I don't need the money. I just need the time.
[00:54:47] If there are people interested in, some people have started on those projects.  If you feel like you're good at writing and you want to get into solid and do that and write a book, there's people that you can make.  I mean, probably not a ton of money, but there are people that will help you develop, pay you to develop a course or make money off this stuff.  I just don't personally have time to do this myself.  And I just keep on getting DMs from people about how they'll pay me.  Oh, here's $1,200 to do this.  And I'm like...
[00:55:13] I just don't have time.
[00:55:20] Thank you.
[00:55:21] Yeah, I mean, this comes with time and stuff.  I think the hackathon helped.  There's people doing series of videos.  I want to give shout-outs to Andres Roth,  who did a five-part series on making a grid component,  and Travis, if you don't have your last name off,  who's been making videos about Bedrock,  which is kind of like a layout system.  People have been kind of getting into doing more deep stuff,  but the truth of the matter is,
[00:55:50] Thank you.
[00:55:51] YouTube videos are like a grifter kind of mentality.  Like I don't fit into the typical model.  What you do is you make a 20 minute video.
[00:56:00] You focus on a topic, you do high production values, and you do something shocking. That's the formula. You don't get deep content usually.
[00:56:11] um
[00:56:13] So, you know, it is what it is. Why is looping done differently in Solids.jsx?
[00:56:19] because it runs once.
[00:56:20] Essentially, let me-- and it returns real dominant notes.  The easiest way to think about this is,
[00:56:27] you can't interrupt a map function, right?
[00:56:31] like it's like a 4-H. Like the difference between using a 4 and a 4-H, like when you go  array.4-H, you can't interrupt it. And in the case of, we're mapping to real DOM nodes.  So if you just go array.maps, you got data and outcomes DOM nodes,
[00:56:47] You change something.
[00:56:49] you need to map it and you need to recreate every single DOM note again.  That's not efficient.
[00:56:56] We need to be smarter than that. So our control flow needs to use specialized helpers that basically memoize based on the data changes. So because we use reactivity, the complexity is pushed into the data instead of into the view. The view is really dumb. The view is just
[00:57:12] HTML. And the benefit of that is
[00:57:15] though, is that because the view is dumb and just HTML and just DOM and whatever, like,  it's very composable because, like, the DOM is just composable. We don't have to worry  about that. All the complexity is pulled into the data. And our data model happens to be  composable, too. It's just kind of interesting how that win happens when you kind of try  and push it into the rendering, like, the complexity into the DOM, like, um, you know,
[00:57:41] React as you're innately not portable. So it's just a different kind of thing. But essentially,
[00:57:49] It's just a special map function.  We don't use a compiler, which I think is really important for people to understand.  Our control flow are not compiled hooks.  They're not like Svelte has a special syntax and whatnot.  Like, we aren't using the compiler to do anything special.  You could go-- you can use a map function like React, or you can go--
[00:58:09] use ours or you could write your own thing that memoizes or doesn't memoize or you can do anything  or else solid is like just javascript in that sense i know people will point at the control  flow and be like that's not just javascript but
[00:58:21] It's just a convenient container.  Like you write a helper function, you put in the JSX,  you're like, well, maybe this should be a component.  And when we do this in React all the time, like--  like how should I put it?  Like React's doing it in React.
[00:58:33] error boundary, and suspense,
[00:58:36] are if components.
[00:58:39] They're just ones with extra logic, so it's easier to wrap it up.
[00:58:43] Right? Like, go build a virtual list or pagination or even just doing efficient rendering in React in general where you don't want to bother mapping everything.
[00:58:54] into new VDOM nodes,
[00:58:55] You can actually get performance by not creating new VDON nodes.
[00:58:59] you're going to want a special helper function
[00:59:01] And once you go that way,
[00:59:04] Why not make a component?  And once you do that,
[00:59:07] Why not that just be the pattern?  Because everything composes from that point.  It's just another primitive.  It's another tool in your toolbox.
[00:59:14] And it kind of scales up really nicely, because your for component might become your paginated component literally by just changing the name of the component. It could have the same signature, essentially.
[00:59:25] It's just all apples all the way down or whatever the saying is.  All...
[00:59:30] ducks all the way down. I think this is incredibly powerful. When anyone looks at solid and goes,  oh, that's not just JS, they're completely missing the point. Which is why I wanted to stop a moment  and explain this.
[00:59:44] What do you say?
[00:59:45] Thank you.
[00:59:47] Probably not, but who knows.
[00:59:55] um,
[01:00:04] Yeah, see, that's the problem.  Do you spread yourself too thin by trying to do everything for everyone?  I think Vue should just...
[01:00:12] Keep their philosophy. They are the progressive framework. They build in layers. They keep things easy. Low floor.
[01:00:19] high capability. Their best approach right now is convince people, in a sense, by just doing what they do really well, that maybe Svelte isn't the future. I think the thing is, people who get into Svelte now have kind of decided that Svelte is the future. Like, things are just going to head that way. And maybe they're right to a certain degree, at least on that side. But what I love about Solid is
[01:00:42] is I think we kind of showed that there's a future that's not like Svelte.  Like we can get performance, we can get power, and not go all in on compilers.
[01:00:50] in the same way.
[01:00:52] I think that's kind of why we're going to be the opposite sides of things.
[01:01:02] For a while there, you talk to someone, they're like, oh, the feature is clearly spelled. And it's a pretty compelling argument, right? It's just HTML and JS and CSS, and it's all just there. And it feels kind of like you're just doing the normal thing. And I don't have to get into like how that's an illusion. But...
[01:01:19] But here's the thing.
[01:01:22] Even if that's
[01:01:24] an incredible development experience.  And I think it is.
[01:01:28] It's not like JavaScript is ever going to change that way.  It's not like if you take Svelte.js,
[01:01:35] that one day when JavaScript gets reactivity natively,  that it would work anything like Svelte.
[01:01:40] You couldn't because
[01:01:42] I mean, this is more technical, but it's the lets that are special and you wouldn't change the behavior
[01:01:48] of all variables in JavaScript to get there.
[01:01:52] So like Svelte offers a really nice platform
[01:01:57] abstraction that feels good
[01:01:59] But it's a different language. It's not just JS, because JS will never be like that.
[01:02:05] Mm-hmm.
[01:02:06] Thank you.
[01:02:08] Thank you.
[01:02:10] Thank you.
[01:02:11] Thank you.
[01:02:11] Yeah, God, I could love, just give me more time in the day.
[01:02:20] Thank you.
[01:02:21] I mean, that's what I said. Jack is great, right? That's the secret. His 30 minute introduction to solid is one of the most practical down to earth ways of getting solid. He built a real site. He made it real. He had the right balance of flair.
[01:02:38] and real technical like
[01:02:40] I think Jack's video is great. And another great one was one Theo did with the TRPC, like building actual things. I think a lot of the conversation I said on YouTube is a lot more shallow than that. So yeah, I think it's, yeah, people, yeah, Jack is amazing, right?
[01:03:01] Turtles, yes, it was turtles all the way down.
[01:03:04] I'm
[01:03:05] Sorry.
[01:03:12] Thank you.
[01:03:13] Thank you.
[01:03:13] In the--
[01:03:15] Thank you.
[01:03:16] Okay.
[01:03:18] Is it though?
[01:03:22] And you might think this is funny coming from me.
[01:03:25] This is a comment about the VDOM.
[01:03:27] And
[01:03:29] Thank you.
[01:03:32] Thank you.
[01:03:35] I'm going to provide you
[01:03:40] a different perspective that you probably...
[01:03:43] people aren't going to really get maybe...
[01:03:51] The VDOM is a construct, okay?
[01:03:57] What is a VDOM? You might be wondering.  But VDOM is a construct.  And...
[01:04:02] What that means, though, is just that it is virtual.
[01:04:07] OK, and most feed on implementations right now basically virtualize the DOM.  That's called a virtual DOM. But if you go ask like
[01:04:16] Dominic Ganaway, creator of Inferno, what the VDOM is,  he'll tell you it's not the static structures,  'cause those can get hoisted out,  kind of the way we hoist out our templates.  It's the holes.
[01:04:27] The Vdom to him is the whole.
[01:04:31] And if you hear people talking about reactivity,
[01:04:34] And what it is, it's also the holes.
[01:04:37] Yeah.
[01:04:38] So what actually is the VDOM or the future of the VDOM? If you can optimize in the same way and pull  out the static pieces and it's just the holes, the difference between a reactive approach and a VDOM approach
[01:04:52] is the difference of being top-down memoized
[01:04:55] And being a subscription...
[01:04:58] kind of event
[01:04:59] That is the difference.
[01:05:04] Both of those approaches can get incredibly optimized.  Now, to be fair, if you leave...
[01:05:12] Because the events are very granular and piecewise, it's easier to write those in user land and it's easier to have that control completely in your hands, which is Solids' mentality, right? Like that is the thing, the no VDOM, is that we can give the power to the users.
[01:05:29] And,
[01:05:31] And they can control it.  And that's the framework.
[01:05:36] However,
[01:05:37] Thank you.
[01:05:39] If you're talking the top-down memoization and dirty checks kind of deal and it's just kind of driven top-down,
[01:05:47] By that definition, you could call Svelte a VDOM.  I know that's crazy, but just bear with me.
[01:05:54] The further you go into compiler land,
[01:05:58] you're going to go more that direction.  You could call Marco 6 a VDOM by Dominic's.
[01:06:04] thing. These use the language of reactivity, is what I call it, which is understanding that there are basic primitives.
[01:06:13] that there are signals or stator observables, that there are derived values, that there are side effects.
[01:06:19] There's a reason why
[01:06:22] React converged with reactivity in terms of things like React didn't invent that language.
[01:06:28] that hooks that use.
[01:06:30] We've been using that language since forever in Reactivity with Vue or with Knockout or MobX.
[01:06:37] But there's a reason they landed on the same way.  It's a very good way of expressing intent and expressing, you know,  what's pure and what's effect.  And the thing is, if you don't use a runtime reactive approach,
[01:06:51] like Svelte and you can pile it away.  All you can do is memoize  because you're not automatically dependency tracking.
[01:06:59] You're not...
[01:07:00] I mean, you could compile in an event system, but at a certain point of optimization, you're just like, well, why even have the events if I already know what's going to happen?
[01:07:09] So what I'm getting at--
[01:07:11] is it might not be a VDOM,
[01:07:14] But that mentality that React represents-- and if you've seen React, forget. It's basically svelte.
[01:07:21] Yeah.
[01:07:22] Like,
[01:07:24] It's
[01:07:25] one mentality rendering and solid is a different one.  And it just so happens that every framework pretty much
[01:07:33] after React came out decided that they were just going to go that direction.
[01:07:36] Yeah.
[01:07:38] Solid like frameworks existed before React, but everyone kind of just jumped on this VDOM thing.  But my point is there is still two fundamental approaches to doing this.
[01:07:50] And they both can be optimized to
[01:07:54] incredible amounts.
[01:07:56] And I think
[01:07:58] Mm-hmm.
[01:07:59] you know,
[01:08:00] And compilation can be used for both. And that's why there's a difference in the approach and the difference in the compilation and the perspective here. And I think...
[01:08:09] In a sense, the VDOM versus no VDOM battle continues for many years to come, just in a different form.
[01:08:15] Hopefully that makes sense to some people here. I'm sorry, I might be kind of going off on a tangent here. We've been talking already for an hour, but...
[01:08:21] I think...
[01:08:25] I think this is important to understand.
[01:08:30] Thank you.
[01:08:31] Well, this is what I'm getting at.  Like, we have a universal renderer.  Is it a VDON?
[01:08:37] No, it uses reactivity, but is reactivity sort of a virtual representation of a hierarchy? Maybe.  Like, we could do React Native with Solid.
[01:08:47] We don't necessarily need a VDOM, right?  Because you can, VDOM suggests that you need to do a bunch of work and then you need to  diff it, but you can also break the work up into small pieces and then
[01:08:56] and I'll only apply them.  Like, VDOM, you still apply...
[01:08:59] patch a bunch of things.  In the end, once you do all the diffing,  you have a small set of discrete updates.
[01:09:06] a fine green reactivity system gives you a small set of discrete updates. So it's kind of the same in the end.
[01:09:12] when you have a third-party system, even without the DOM,  you still have this ability to do granular updates.  So I don't think you need a VDOM.  I think that's kind of the illusion  and one of the things I've been trying to disprove a lot with Solid.  But it's just like...
[01:09:26] different sides of the same coin.
[01:09:31] Right.
[01:09:37] Thank you.
[01:09:38] Yes, I'm not going to get into that right now, though, but yes.
[01:09:49] Yeah, there's a lot of reason.  Yeah, that's why I'm talking about Jordan Walk, right?
[01:09:54] Right. We solved this different ways over time. MobX showed how you can have predictable reactive updates.
[01:10:00] That was a huge thing and make it glitch free.  And we've been pulling into that in solid.  And I just think that both sides have
[01:10:08] kind of evolved since that time period.
[01:10:14] I'm sorry. I clearly offended someone.
[01:10:25] Thank you.
[01:10:29] Yes. Yeah. This is a good clarification.
[01:10:35] Marco six is completely granular.
[01:10:37] Thank you.
[01:10:39] like it doesn't use a component model.  So in that sense, it's closer to solid  in terms of execution.  My point was,
[01:10:47] in a sense, it's not
[01:10:49] events it's yeah i mean it gets into a gray area i guess the maybe the optimal place is somewhere in the middle um
[01:10:57] Maybe.
[01:10:59] But what I'm getting at is I think this top-down versus event thing is going to carry on for a while.
[01:11:07] Yeah, I don't know enough about this. I know people have been integrating it with solid, but that's all I know.
[01:11:13] Okay, we're going to continue here because this week in JavaScript has been going on for a while. And I know this is everyone's favorite segment in the show, but we do have other stuff to go on to. And I have more points. We're not even done this week in JavaScript. This is just the React segment. I already talked about Marco, check out the workshop.
[01:11:28] Solid community meeting went great. We talked for like two hours. Check out the video for that.
[01:11:34] OK.
[01:11:35] Right.
[01:11:36] Okay, let's, I got a new topic here.
[01:11:41] Um,
[01:11:43] I made this chart in August.
[01:11:46] Oh, come on. What happened there? I mean, I made this chart in August last year,  and I was trying to show people the difference between like Marco and quick and like,
[01:11:57] everybody else. And some people got it, other people didn't.
[01:12:03] Yeah, this was an eventful week, right?
[01:12:08] Yeah, exactly. I love this thing. Because if you're not familiar with this, this is ElderJS, this is Astro, this is Quick, this is Marco, this is VuePress, Gatsby, and then these ones actually have their name.  But I wanted to show that if you kind of have the spectrum, and this has helped me for years to model things, there's things on the multi-page app side, things on the single-page app side, things that lie primarily on static generation, and things that are server rendered.  Yeah.
[01:12:31] To be fair, next was like used to be kind of more over here and whatever.
[01:12:36] I arbitrarily kind of play stuff where it kind of mostly gets its usage and the positioning inside the quadrant is like a little bit off, but you know, the logos are kind of big, you'll forgive me but essentially this is pretty good start because people are like, oh,
[01:12:51] These are not like the others because Astro came out and people are like,  Oh,  so what,  how's it different than next?  And you like,
[01:12:59] some technical explanation and people are like, yeah, so it's like next.  And you're like, no, I'm like,  it felt really deflating to be on this side and people not get that.  Like, it's like, like,
[01:13:10] I think it's polar opposite or it's like somewhere else.  So I made this to kind of differentiate the grid.  But this one's been an old one.  Astro has been kind of...
[01:13:20] Yeah, sorry, a single page app and multi-page app.  This has to do with routing to answer this question.
[01:13:26] And essentially single page apps are like the ones we know where that you react like client side routing you load up and it can be server rendered to but essentially once you're like in the browser and you're looking at your app when you click on the link some JavaScript runs.
[01:13:43] re-renders some or render some stuff in the client maybe does some data fetching or whatnot  and essentially every time you move around you you're still on your page
[01:13:52] And it's going like...
[01:13:54] Twitter here, I'm pretty sure, is a single-page app.
[01:13:57] Right? See? No page reloads. If I open up the elements on here on the page and I do this, what you're going to see is this
[01:14:06] some part of the body in the head maybe flickered
[01:14:09] But essentially, this HTML did not flicker at all, right?
[01:14:14] See you.
[01:14:14] Some-- like, if I go to--
[01:14:19] Google search and I type something,
[01:14:21] Thank you.
[01:14:23] -
[01:14:25] I'm--
[01:14:26] It's a fast page, but you see the whole thing like...
[01:14:32] actually flickered like that's multi-page single page okay now
[01:14:38] Different frameworks are actually, it's an architectural choice of how you do routing.  And it's built in.  Even when you can output multiple pages, like some source generated stuff like Gatsby, you
[01:14:51] 50 pages, once you load it in the browser,
[01:14:55] the client takes over and that's what a single page app is, right? So,
[01:14:59] Essentially, this really helped me kind of say, like, you might be like, OK, well, isn't this bad or whatever? There's benefits. You saw how fast that Google search page loaded?
[01:15:12] They use a framework called Wiz, I believe, on Google Search.  It's an internal Google framework.  But essentially, like...
[01:15:20] Um,
[01:15:22] This has the ability to have incredible loading. It's very good for e-commerce. It's very good for things where load performance, SEO and stuff matters. And the experience doesn't necessarily have to be bad. You just have to be smart about it. And it can be optimized crazily. And anyone who's been on my stream for a while knows this. And go watch the Marco video. The first Marco video, if you want a better idea about MPAs and that. But
[01:15:46] Essentially, this has significant impact on how your site performs and what characteristics it has.
[01:15:57] Anything that can do SSR technically can do SSG because all server static generation is, is basically taking that server app and then rendering the HTML ahead of time.
[01:16:09] Essentially, so on this side, it means just like if you got like a bunch of pages,
[01:16:14] Like getting to static is actually really easy at that point because it just means that like you just.
[01:16:20] you just render the page.  You already have a bunch of pages conceptually.  You just render them ahead of time,  so that any dynamic content is already loaded into it.  On this side, it's a little bit more interesting,
[01:16:30] there's a single entry point in a single page app.  Like all the code goes through  and then like it runs through a client side router  on the server.  So, but in the end you end up with,
[01:16:41] 50 pages that all load the same main JavaScript bundle and then code split the stuff that's specific to their page.  So,  but it still works out to be the kind of same thing.  So,  generally speaking,  every SSR framework can SSG.  And
[01:16:57] So in a sense, SSG maybe isn't a real category forever.  And yeah, the Astro guys are very excited that next release,  next week they're actually releasing server rendering for Astro.  And they showed this rocket.  They took the Astro rocket and shot it into the hemisphere,  which inspired me to actually update this graphic a little bit.  And to be fair, I'd already forgot this conversation here  because the other guys told me that they added server-side rendering stuff.
[01:17:23] you know, as response to my first graphic. And I,
[01:17:28] I'd even forgotten that, but essentially, where am I going back here?
[01:17:34] Why am I just going...
[01:17:36] OK.
[01:17:38] Let's go back to my profile. I think I went too far back.
[01:17:42] Thank you.
[01:17:43] I updated the graphic here and I added a whole bunch of new stuff.
[01:17:48] Thank you.
[01:17:50] Thank you.
[01:17:53] And sure enough, as soon as I did this, everybody was like, we support SSR.
[01:18:00] 11T was like, why are we down here?  We support SSR.
[01:18:03] Elder already mentioned supports SSR.
[01:18:07] Gatsby added SSR...
[01:18:10] Like, and don't get me wrong.  When I made the original chart, most of them didn't.  But in the last like six months...
[01:18:15] eight months, they all added SSR. Like, we support SSR, we support SSR. I was like, oh, okay, well,
[01:18:22] Okay, sorry. Basically, this whole graph has actually collapsed.
[01:18:27] Um,
[01:18:29] So,
[01:18:32] Thank you.
[01:18:33] Yeah, this is a good distinction. No, it's not an MPA. Because it still has a single -- it's a single app. Okay, sure.
[01:18:42] Oh,
[01:18:43] OK, sure.
[01:18:44] If the JavaScript is turned off,
[01:18:50] then yes, I suppose, because my definition for a single page app is single code entry point, technically,
[01:18:58] Remix does have a single code entry point.
[01:19:02] But if you never load that JavaScript,
[01:19:05] then technically you can classify it as an MPA.
[01:19:09] I would never classify Remix as an MPA,  because architecturally it is not an MPA.  But if you remove all the JavaScript,
[01:19:17] There is no code entry, so then technically it's -- there's no difference between it being an MPA. But as I said in the past, removing the JavaScript from a page is kind of uninteresting, right? Like, no one actually wants to do that.
[01:19:35] It's cool that it works, but it's also kind of like
[01:19:39] you want the JavaScript. And
[01:19:41] There's a huge difference between a framework
[01:19:44] that is all or nothing. Like, turn off the JavaScript. It's gone. Or framework that's like, we can add just the JavaScript that's needed
[01:19:55] as we need it. Because the ones that just do this turnoff trick, usually, when they turn it back on,  you have to load everything, right? And those frameworks are all the ones over here, right?  Everyone over here has the ability to turn JavaScript on and off again. This is not a  remix unique trick. I mean, I don't know if Next.js has exploited this, but trust me,
[01:20:14] All you do is there's a tag that goes on the page called script.  You remove that.
[01:20:20] And you can do this trick.  And these frameworks on this side
[01:20:26] all have the ability to add only just the JavaScripts that needed to be interactive.  So instead of being like binary on off, these ones are like,
[01:20:35] A little bit here.
[01:20:37] Which is incredible because it means that you don't actually have to sacrifice anything
[01:20:41] to get incredible page load performance.
[01:20:45] Thank you.
[01:20:47] Thank you.
[01:20:47] I mean,
[01:20:49] Yeah, exactly. I mean, it's cool.
[01:20:52] And there's some big companies that actually use this approach. Not PHP, but actually use React for this. Netflix, to my knowledge, actually server renders with React and then kind of does their own hydration thing. They found the client side React to...
[01:21:08] like hydration stuff just not good enough.  So they actually like server render react, I believe,  I don't know if that's still true.  And then do their own JavaScript interactivity on top.  And,
[01:21:19] There's actually a great, great little thread on the Remix board. Some of you have seen my previous stream that had showed how like that Marco example, like using partial hydration, just completely dominated a Remix example. Because again, all the JavaScript, just what we need, you know, like mentality. And Jacob was like, well, I wish you'd just benchmark this one.
[01:21:49] Technically on the desktop, Mark was still ahead because of the streaming, but
[01:21:53] Essentially, what he did was he turned off the JavaScript and added his own script tag  and by hand hydrated the points.  This one is very easy.  It's compressing comments.  You've all seen this example a billion times now by this point.
[01:22:12] Sorry, not that one. I didn't mean to click that one. If you go here, you have this ability to press, compress comments, right? So he just looked for the class for these comments, add a little custom JS, probably took him like 10 minutes, you know, like no time to just add some custom JS, gets its functionality. And it was just as optimal for this case. Obviously more complicated cases, it's hard, it's harder to scale.
[01:22:35] But essentially,
[01:22:38] I think this is really cool because it kind of showed, like, yes, you can turn off JavaScript and then just add what you need.
[01:22:44] What's really cool though,
[01:22:46] You know, that's what's cool about the web. What's really cool about these frameworks is they can just do that for you automatically. Like you don't have to go write some hand vanilla JS and stuff. You just like write the declarative stuff. It's like, I'm writing my app. Here's declarative code. And then just bang, you get that benefit. So, you know, what I really liked about that example was it showed that like
[01:23:05] Yes, you can always do this and these frameworks have incredible power, but
[01:23:11] There is real value.
[01:23:13] to doing partial hydration, right?  Otherwise, you wouldn't even bother
[01:23:16] like kind of making that kind of example, right?  So I think it's really interesting  as we move towards this,  because it's the same argument made  with like the Rails side,  but they're like, well, we can just sprinkle JS on,  but now you're kind of,
[01:23:30] managing two apps.
[01:23:32] You have your server rendered app and your JavaScript app. That works for some people. Maybe that's the direction Remix will go on this. But I think it's really cool that the frameworks on this side, especially the SSR ones, basically give you that benefit while letting you maintain a single app. Right?
[01:23:50] Thank you.
[01:23:55] - Well, the thing is,  why would you wanna be a good SSR solution?  'Cause it's easy.  Like if you're doing static,
[01:24:00] Doing it on demand is not that big of a stretch.  And now that you're good SSR solution, well...
[01:24:06] you just open up a whole new category. And you know what the real kind of underlying benefit here is  things like serverless functions and the edge are kind of becoming the new CDN. Everybody wants to  be the dynamic, like the new static is dynamic. Like that's the mentality here. So everyone on  the bottom is coming up. It's just how these things are going to go. The vertical thing here is
[01:24:33] The horizontal thing is starting to collapse. That's what I'm interested in. Our whole focus this last year, you can tell since January, I've been on a mission. It's looking at how we collapse the graph from left to right, not just up to down.  We're looking for a universal solution. I don't know if that solution is going to be good for everything, which is ironic, but we are definitely breaking down these walls and why I don't think this graph is going to be useful. I don't think there'll be a third version of this graph. I think it's served its purpose.
[01:25:05] Thank you.
[01:25:10] Thank you.
[01:25:16] Yeah, I mean, hydration is tough, and we've covered that. And yeah, yeah, I mean, there are some costs.
[01:25:28] on the server rendering side, but until you get something that's really expensive, like I can show you a benchmark where Marco or solid is like 10 times faster at server rendering than React. Like it's not very hard to create that scenario. But like,
[01:25:46] you're never going to see that on a hacker news page or something.  And when frameworks block, that's another place where it's a bigger impact blocking and not streaming than that stuff.  It's because, let's face it, small page.
[01:25:59] One millisecond, 10 milliseconds.  Tell me the difference.  Like you spent, I don't know, 90, 110 milliseconds over the wire transferring it, but like,
[01:26:08] you're not going to notice that probably, but when you go bigger, you know, eBay scale,
[01:26:17] 10 milliseconds, 100 milliseconds.
[01:26:22] 20 milliseconds, 200 milliseconds. That makes a difference. That adds up. Static rendering is another place where it adds up when you're just generating a bunch of stuff. For the most part, the end user's not going to feel this cost of React slower rendering, but
[01:26:42] You know, if you're being billed by the millisecond, maybe it'll matter. So I guess we'll see how things go. Okay. So, yeah, essentially, this graph was fun, caused a bunch of conversation again, as I mentioned, everyone in the SSG crowd told me that it's already collapsed vertically. So let's focus on it collapsing horizontally. Okay, cool. What else was fun this week? Oh, yeah.
[01:27:06] misco we had him on stream creator quick creative angular wrote a new article
[01:27:13] He kind of continues, if you all remember, I wrote an article about how we found the solution to hydration.  Misko is now given the more technical explanation, so this is a good follow-up to my Conquering Hydration article.  And he gives an equation, and I think this one always speaks to me.  Time to interactive equals hydration cost time page complexity plus size.  He basically wrote a linear equation here.  Yeah.
[01:27:37] Yes.
[01:27:38] I think, I mean, it's kind of obvious.  If you have an equation like this,
[01:27:45] Like you could try all you might, but the only way to flatten the line is to remove the, I forget what this is in algebra, but remove the multiplier, so to speak, right?  I forget what the term is.  It's been so long since I did high school math.  But essentially, he's saying if you can remove the hydration cost, that's the only way you compensate for the fact that page complexity is inevitably getting larger.  Right?
[01:28:12] Size gets larger too, but size complexity ultimately isn't going to cost you as much as page complexity because of the multiplier. So this is a good way to think about that. So
[01:28:25] Misko's basically put his whole focus on zeroing this.  And I think that's a pretty reasonable approach.  And we're going to see more frameworks,  not just Quik and Marco solve this in the future.
[01:28:39] Nope. I'm pretty sure... I could be wrong about this. I haven't used Gatsby as much, but almost...
[01:28:49] To my knowledge, almost everything that uses React is on the single page app side.
[01:28:54] Like even if it generates HTML, it's not actually, like the app has a single entry point. I could be wrong about Gatsby though. So maybe I am incorrect.
[01:29:04] Yeah, exactly. Yes. So, yes. That's the thing. This is why I made this chart. And it's because most people assume that MPAs are just like...
[01:29:18] Like most things are not doing MPAs or MPA like optimizations.  There is a very it's a much smaller group over here.
[01:29:30] Right?
[01:29:33] So and there's trade offs people like. But the thing is, once MPAs figure out a hybrid model of routing, I think they're going to look a lot more attractive.  You see the closest thing to the line on this side is this framework called Hydrogen from Shopify.  This is React server components coming in. And this, as I mentioned, React server components are kind of like React components.
[01:29:52] designing an MPA.
[01:29:55] And what you're going to see here is hydrogen's kind of coming in from this side.
[01:30:00] And Marco and Quick and Astro2, I know they're doing some research on this.  I've been kind of helping and suggesting the direction there.  They're coming this side.  There is a convergence here on this line.
[01:30:14] I ran out of space here, so it makes hydrogen look like –  and maybe hydrogen's the closest today, to be fair.  But this is converging, this side.  SvelteKit has some hints that they have the potential to get there.  I'm looking into this with solid –
[01:30:28] Remix probably has potential. I'm not sure if they've realized the value there yet, but they  definitely have the potential. Next is getting to server components. This is the new... everyone  here is going up. Everyone here is trying to merge in the middle. So this is the new race.  The tricky secret to this for the end user is the actual way to get to the middle
[01:30:55] Yeah.
[01:30:55] involves actually almost crossing over and coming back at this side.  Like MPAs are the secret. All the optimizations, all the things we know are present in multi-page apps.
[01:31:05] um
[01:31:07] So,
[01:31:08] That's why stuff like React Server Components are almost like a different framework around React. They aren't actually React. You almost have to reinvent the framework.
[01:31:16] to get there.  And that's why all the React frameworks are kind of
[01:31:20] coming over and learning this stuff because, you know, React Server Components gives them that ability, but it really takes a different type of architecture. You have to almost build it from the ground up. Like,
[01:31:31] Marco and QuickCap. Astro is kind of an exception in that they wrap other frameworks and get a lot of that benefit. But like,
[01:31:42] building something for the agnostic target, kind of like web components is always more  challenge. So we'll see over time how that looks like and what patterns emerge, especially around  the routing.
[01:31:57] Thank you.
[01:32:01] Yeah, but this is still all single page app.  That's not what makes something a multi-page app.  I think this is a really important distinction to make.
[01:32:11] like,  you,
[01:32:13] Just because you load what's needed and code split doesn't like doesn't still means you have an app with a conceptually single entry point and you still have all the code that needs to come into the browser.
[01:32:26] Like the difference with these is when you navigate, they know that most of the page doesn't get rendered on the client.  So they just don't send the JavaScript for the stuff that doesn't get updated on the client.
[01:32:38] Anything on the spa side, like basically partial hydration and single page apps are incompatible.  Like it's just not...
[01:32:44] It's not a real thing. I mean, there will be single page app frameworks that have features that are like partial hydration, like certain components, but it's because they actually change their mentality to be like an MPA, not that they're still
[01:32:56] architecturally like a single page app.
[01:32:58] Thank you.
[01:33:02] Not today, but I'm saying...
[01:33:04] This will happen. Trust me. This is the new frontier. We talk about a ton on the Marco stream where I have Michael and Dylan on. If you really want to understand what the future routing is, I wrote an article about the future routing as well. This is the next frontier.
[01:33:23] All right.
[01:33:25] Yeah, a lot of really good discussions. We're at an hour and a half and we're still in this week in JavaScript, which is good.
[01:33:33] It does take some of the showcase time on this because
[01:33:37] As I said, only seven days left.  It's going to be really exciting to see what people have built, right?
[01:33:45] Oh, here's the Avenue thing.
[01:33:48] Sorry, can we spend a second here on the view?  I already showed this last week, but I don't know if I actually took this quote.  I asked him why he's still using the virtual DOM after he made Vue 3, which doesn't need a virtual DOM.  And this was their answer, because Vue allows you to write manual render functions and mix them with template-based components.  Giving up the virtual DOM is...
[01:34:05] is an important capability for advanced use cases where logic expression is more important than better performance.
[01:34:11] And yeah, you know me, I obviously disagree with the statement.  I think you do everything without a virtual bomb.  And I think at this point, maybe I hadn't really proved it.  You know, this is like two years ago.  So I'm glad that Solid has at least shown people that...
[01:34:27] With a system like Vue, you don't need a virtual DOM  to do the most advanced cases.
[01:34:37] Thank you.
[01:34:38] Huh.
[01:34:42] Yeah, yeah, yeah. And yes, yeah. I think service workers are going to be the thing, but it's still an MPA model, right? I never understood this because I, sorry, tangent here, but
[01:34:54] Thank you.
[01:34:55] Client side rendering, when it's already cached in the browser and when you're just doing the data fetching, like the JS can be faster than trying to grab the HTML2, right? Like the server rendering stuff I'm talking about isn't necessarily...
[01:35:11] Yeah.
[01:35:11] better, you know, like there are situations where a single page app, you know,
[01:35:16] is faster
[01:35:18] actually just purely faster, the render and the client.
[01:35:22] Like a perfect example of this is like,
[01:35:24] I was working on streaming, and the current version of streaming with Solid actually streams HTML, but the original version streamed JavaScript.
[01:35:32] data at the end and then had the client render it.  And on a slow network, this was actually really bad because what would happen is, you know,
[01:35:40] Um,
[01:35:42] you have to wait to hydration time to actually do the rendering. So you always showed the loading state
[01:35:47] and everything was pushed back.  Sure, you fetched on the server, so it was better than Jamstack,  but it was still like...
[01:35:54] Like,
[01:35:56] clunky like you were so like
[01:35:58] when you stream HTML,
[01:36:00] if it takes a long time, everything just is there and it feels like it paid and you get it sooner. I didn't really didn't like that. But
[01:36:07] The funny thing is when I replaced with HTML streaming  and I looked on the fast network, I was like, why is this like a little bit slower?  I could see like it was minor, like 10 milliseconds.  But I'm like, why is it slower? And finally, and I looked at the timeline and I'm like,
[01:36:20] How is this doing it? Well, if the JavaScript had already loaded in the server,
[01:36:25] had already loaded in the client.
[01:36:28] And I was just waiting on the data fetching versus the HTML
[01:36:32] The client could get ahead on the work because-- think pictures.
[01:36:35] Streaming in, have the shell.
[01:36:38] waiting for the content of the suspense boundary.
[01:36:40] Okay.
[01:36:42] JavaScript gets there.  Okay, it's waiting to go.  It's all good.  We're all warmed up.  HTML comes in.
[01:36:47] put into place,
[01:36:49] hydrate everything like it was rendered the first time.
[01:36:52] Now picture a second scenario where you're streaming the JSON instead.
[01:36:56] Thank you.
[01:36:57] load the page, draw the shell, JavaScript loads first,
[01:37:02] It renders it.  It gets to the suspense boundary, and it's like, well,  I'm just going to run it like normal.  So it actually starts rendering the stuff  inside the suspense boundary.
[01:37:11] until it hits the point where it can't draw the data.
[01:37:14] But essentially, Sol's rendering is non-blocking, right?  And it keeps it.  Like, when suspense resumes, we just continue where we left off.  We don't, like, throw away stuff.  So, like...
[01:37:27] the stuff inside the suspense could partially render.  And then when the data came, we just continued where it left off.  So technically, we did more work ahead of time,  because the client could already render in the suspense boundary,  whereas the server rendered version could not, because it was waiting for the HTML to come with the data.
[01:37:45] Thank you.
[01:37:46] minor, minor thing. And it only met on the fastest networks. It was definitely worth going the other way because ultimately
[01:37:53] the HTML streams, like streaming is consistent across all network speeds.
[01:37:58] But it was definitely interest and it can be optimized in the future to do partial hydration and stuff.  But it was interesting to me that.
[01:38:05] Like there are situations where the client can be faster.  And that, for that reason, I was like, why do we need an MPA model?  But once you actually understand you need an MPA model to do the type of  optimizations you need for MPAs,
[01:38:15] You can always move it to a service worker and basically get the single page app performance there, too. So, yeah, now that I understand that, I can kind of justify why you'd want an MPA mentality everywhere. And the thing is, yeah.
[01:38:33] Service worker, Cloudflare worker,
[01:38:36] Dino worker, I don't know if that exists.  I'm just saying like they all have the same API.  So your code could be completely portable.  I think this is gonna be really interesting as, you know  this kind of heats up when we get more options here.
[01:38:52] Amen.
[01:38:53] Bye.
[01:38:58] Thank you.
[01:39:00] Some good comments.
[01:39:04] Thank you.
[01:39:05] Thank you.
[01:39:06] Thank you.
[01:39:07] Yeah. Same guys to me quick. Builder.
[01:39:13] Yeah, Party Town is genius and Party Town is like, it's funny because quick and us on the framework side, we're like, we're solving these incredible problems. We solve hydration on this stuff.
[01:39:26] Go where the biggest wins are.
[01:39:28] Party Town is probably going to make a bigger difference for any real heavy site compared to all this amazing stuff we're doing with Quick and Marco and whatnot.
[01:39:36] Third party scripts are the killers. I mean, don't get me wrong. There is another conversation here.
[01:39:43] And this perfect time, because I think this might be our last...
[01:39:46] conversation for this week in JavaScript.
[01:39:49] you know, but
[01:39:50] Alex Russell.
[01:39:53] essentially was like, look guys,
[01:39:57] Single page apps, we haven't corrected the curve here.  Year over year, this is the size of our apps.
[01:40:09] This is JavaScript.
[01:40:11] Like, frameworks are not making things better, even with things like Svelte and Solid that are super, super small. Like,
[01:40:22] I mean, maybe no one's using us, that's why, but like, or preact even like this, this is like, this is a thing.
[01:40:32] Yeah, I mean, he was back here in 2011 complaining about it at that point.  He was like, look, your JavaScript here is 20 kilobytes.
[01:40:39] But I mean, yeah.
[01:40:47] Thank you.
[01:40:51] So like, yeah, I mean, he has a point.
[01:40:55] Hmm.
[01:40:56] you know,
[01:40:57] Maybe this curve flattens pretty soon.  This is why there's all this MPA talk though, right?  And it's an interesting conversation because...
[01:41:08] I don't know. I can see Evan's point, but this is this is I feel like this quote won't age well.  Frameworks won't solve this. There I said it. Even with something like quick, people will find ways to mess it up.  Blaming frameworks for JSBloat is just barking on their own tree.
[01:41:23] Okay.
[01:41:24] Like, yes, there's a lot of reasons why sites are slow.
[01:41:29] Thank you.
[01:41:29] Thank you.
[01:41:30] But like...
[01:41:32] Yeah.
[01:41:33] It's funny, like if there was a framework to solve this, it probably would be quick, interestingly enough, because
[01:41:39] Quick doesn't use knowledge like most most heuristics around doing smart partial hydration
[01:41:45] And don't get me wrong, partial hydration has a huge benefit over some of the things that Quick is doing in that it's absolute. Like, you know, you don't have the JavaScript you save on data serialization. It's the only way. It's not the only way, but it's like the way...
[01:41:58] That kind of knowledge is the only way.  You don't need to use the same techniques  to actually get the sort of optimization that Marco has.  The reason that that like Hacker News demo was so performant
[01:42:09] That being, Quick on the other hand, basically protects people from themselves, right?  In the sense that you could write the most terrible spaghetti code app and Quick is able to actually load it progressively.
[01:42:21] To its merit, that's actually its strength.
[01:42:27] But
[01:42:29] But, like, yeah, Dylan, you've seen him in the chat already.  He's basically saying, like,
[01:42:34] if you could shave huge amounts of bundle size,  like it's going to make a difference, you know, and if other things...
[01:42:40] Yeah, I mean, it depends.  The third-party scripts are basically the thing.  The reason I'm on the brain stop is basically a lot of this –
[01:42:47] There's discussions about whether this will actually change things, but the hope is that if every framework and library being used is kind of changing to these mentalities, it will eventually impact those third-party scripts as well.
[01:43:05] So, yeah, it's interesting. I think partial hydration for things that are mostly static, like e-commerce, are no-brainers.
[01:43:14] search results, things like that. I think though QUIC does actually have the ability to scale up  in a way that would help in even the most
[01:43:27] speak like terribly, like,
[01:43:30] wired site that removes all the optimization.
[01:43:35] But yeah, it is an interesting conversation.  And this one just goes on and on.
[01:43:43] You know, Alex is like,
[01:43:45] -
[01:43:47] like,
[01:43:48] It's good enough. He's just tired of everyone telling him it's good enough.
[01:43:54] I'm glad there's been a mind shift, you know, felt.  And as much as I've been, you know...
[01:44:03] attacking, not attacking, but kind of been like skeptical on the whole transitional app thing that Rich Harris put out because like it,
[01:44:10] I wasn't sure that Svelte was really part of that group, so to speak.  I do think that at least having that mindset
[01:44:19] is a positive power for change, finally.  And I think it just starts with us kind of admitting  that there's a problem.
[01:44:26] Yeah, I don't know. We'll see how this plays out. This discussion just goes on and on.
[01:44:33] you know, if we change the way bundle size scales, the lines of interactivity instead of application size, it will inevitably impact third party code since the hypothetical tool will just be as useful to third party vendors. Yeah. So, yeah, I mean, I think that's a good take.
[01:44:50] I think we just need to change our perceptive and hopefully, you know, it's kind of like, what is it called, climate change, right?  Like, yes, maybe the small actions of an individual aren't going to tip the scale, but as long as we're aware of it and we, you know, try and do better, hopefully it will have a real impact.
[01:45:12] Thank you.
[01:45:18] Thank you.
[01:45:20] Anyways, are we done this week in JavaScript?  Does anyone else have anything else?  I think, I feel like this, sorry, that tweet today.
[01:45:29] is this
[01:45:30] Keeps them given.
[01:45:34] Let's maybe change our gears here.  Let's...
[01:45:38] I think we've all kind of
[01:45:45] Thank you.
[01:45:47] Gotten a sense of what this week is so let's let's look at some submissions here and see what we're doing. I honestly
[01:45:56] I think what was really cool, I mean, if you haven't seen it yet, we got five days left. So time is ticking. 12,000 in prizes.
[01:46:08] After submissions close, we're going to have a period for voting. And finally, the winners will be announced. There is three prizes. Generally, our biggest hope is that people just use it. So let's go to GitHub and see how stuff has been going here.
[01:46:29] Let's go, I think it's in the solid.js org somewhere.  Solid hack submissions.  So here we are.
[01:46:38] 17 poll requests. So only 17 submissions so far. So, um,
[01:46:44] One closed. I wonder if that's the test one.
[01:46:49] Mm-hmm.
[01:46:50] I don't know why it's closed. Actually, I guess we can look.
[01:46:56] Thank you.
[01:46:57] All right.
[01:47:01] - I don't know why it's closed.  Okay, well, let's just go here.  So number of libraries things people have tried.  So let's see.
[01:47:11] There is a testing one. That's funny. Okay. Let's take a look. We might not have time to dig too deep into all of these, but...
[01:47:20] Let's see what we can do in England.
[01:47:23] Thanks, Don.
[01:47:27] Yeah.
[01:47:28] No, then I'll have nothing to talk about next week.
[01:47:33] Let's see here.
[01:47:36] Yeah, keep it going. I just wanted to do this to kind of remind people so they can see some of the cool stuff going on. We probably will go through these pretty quickly now, given the time, but, you know, let's see what we're dealing with. I think it'll be fun. Submission for solid command palette. This is one of the first ones that I saw, and it was...
[01:47:57] It kind of came up on Twitter.  I think...
[01:48:03] you
[01:48:04] Yeah, I mean, February 19th, this was almost like right at the submission date open. Essentially, it's a command palette. So it's like a full type ahead kind of search with auto completions and keyboard shortcuts and...
[01:48:19] looks really cool.  And what I love about the format we did here is that--
[01:48:26] Bye.
[01:48:26] - Awesome, yeah.  Is that we requested a repo and we requested a demo.  So we can kind of look, hopefully, you know, everyone's,  and this GIF is great.  Cause you get the whole story here.  Hopefully we can look, play around a bit.  Maybe look at the code, get a feel for it.  I said, I'm probably not gonna be pulling everything down here  but we can kind of just see what's been going on.  So this is cool.
[01:48:49] Bring it up by pressing command K. Nice.
[01:48:53] Can I escape?  Oh, yes.  OK.
[01:48:57] Out of it. Okay, no.
[01:49:01] increment a counter by one.  Where is their counter?  Oh, it's down there.
[01:49:06] So we can click on it, cool. Or we can command E. That works.
[01:49:14] Okay.
[01:49:16] I am not.
[01:49:19] When I'm out of the menu. Yeah, okay. Command E. Gotcha. Okay.
[01:49:25] Playing with all the keyboard binding and stuff. Set a personal profile. That's PP.
[01:49:32] All right.
[01:49:33] Let's see, sorry, I'm just pulling a China shop here.
[01:49:38] Maybe not all the stuff is wired up.
[01:49:43] conditional labeled actions.
[01:49:46] Oh, or maybe it did something without me actually seeing  off screen.
[01:49:51] That makes, this makes a lot of sense.
[01:49:55] Yeah, there you go. I know this is this is cool. Try pressing M.
[01:50:02] Bye.
[01:50:06] - Two, three, four, five, six.
[01:50:11] Hello there.
[01:50:12] Bye.
[01:50:14] Cool.
[01:50:16] This is cool. There's a lot of stuff built into this, but might not be obvious to people. Oh, and is this a documentation site?
[01:50:27] Oh, this makes my life even easier.  GitHub links, it's just nice.
[01:50:33] Thank you.
[01:50:34] Ooh, solid transition group.
[01:50:37] That's cool. At least it's working for you. Everyone tells me the solid transition group doesn't work. And since I've never used it, even though I wrote it, I tend to believe them, but it seems to be working here.
[01:50:52] You can define actions, autocomplete suggestions.  Okay, cool.
[01:50:55] Keywords, subtitles, typical kind of stuff.
[01:50:59] root.
[01:51:00] Thank you.
[01:51:01] The root component is like a provider.  Pass in your actions, action contacts.
[01:51:08] Custom codes are rendering the palette.
[01:51:10] And then the palette.
[01:51:15] Cool, that looks like the API surface is incredibly minimal.
[01:51:19] you essentially configure it, I guess,
[01:51:22] It's kind of like a provider.  Then use the palette where you want it, and--
[01:51:27] Ta-da.
[01:51:32] See if I was.
[01:51:34] Okay.
[01:51:35] Thank you.
[01:51:36] Sure.
[01:51:36] I guess back to the kitchen sink demo.
[01:51:39] Try changing the active tab.  Oh.
[01:51:44] Thank you.
[01:51:47] Thank you.
[01:51:48] Thank you.
[01:51:49] Thank you.
[01:51:50] Okay.
[01:51:52] Yeah.
[01:51:53] Bye.
[01:51:54] Thank you.
[01:51:57] Amen.
[01:51:59] Thank you.
[01:52:02] Thank you.
[01:52:03] Thank you.
[01:52:03] Yeah, I'm probably just missing something, but it's all good.  I think, as I said, I think this brings incredible a lot of power for something that seems a very small...
[01:52:18] surface area. I wonder, do I have-- not the source. I want to look at the--
[01:52:25] Snippet here.
[01:52:27] Okay, these are the ones being used in the thing.  Actually, what I want to actually look at is I want to look at...
[01:52:36] Let's go back to the GitHub.
[01:52:39] submissions and I want to see
[01:52:41] Okay. Yeah. I just went to the same place. Okay. Cool. Cool.
[01:52:47] Intent tests. Tests are always cool.
[01:52:50] Yeah.
[01:52:52] Thank you.
[01:52:55] Cool, yeah, okay.
[01:52:58] Thank you.
[01:53:00] Mm-hmm.
[01:53:01] Thank you.
[01:53:03] Yeah.
[01:53:04] Thank you.
[01:53:05] Thank you.
[01:53:08] Thank you.
[01:53:10] Thank you.
[01:53:12] Cool. Are these actually...
[01:53:14] Okay, yeah, yeah. So simulating keyboard crits and all that stuff. Yeah, you're right. Testing in the playtime, like, probably not the...
[01:53:24] the strongest in terms of all the patterns there.  But that's cool, like the full-sided UI test in terms  of simulating all the clicks and all the functionality.
[01:53:33] Awesome logo, by the way.  Okay, cool.  As I said, probably not spend...
[01:53:38] Yes, here we are, root and command example in the increment.  Yeah, nice just to kind of see a little code thing to see what the usage looks like.
[01:53:46] Cool. This is probably going to be about that much depth on each of these. So we have time
[01:53:53] Let me read anything in the comments.
[01:54:02] I saw it from the...
[01:54:06] SolidStart has MDX support and static generation. I don't know if it all works properly. In fact, I know it doesn't work properly right now. But yeah, we have some potential here. Okay, let's move on to the next.
[01:54:20] thing in the list here.
[01:54:22] Solid Services.
[01:54:24] I'm familiar with Xlert.  He's been making suggestions on DOM expressions forever.
[01:54:30] Let's take a look at this.
[01:54:33] Yeah.
[01:54:34] As I said, I might not...
[01:54:37] Oh, sweet. Yeah. CodeSidebox. Here we go. Yeah. So,
[01:54:40] Service registry, what is this? Services are global objects to use for each of your car, share stream, persistent connection. Okay, so maybe this is something kind of like what Angular or Ember has. So it's like a way of abstracting out kind of like a data layer and it looks like it's fully capable, like middleware.
[01:54:58] And it basically wires the whole thing up.  OK, that's that's cool.
[01:55:02] So yeah, we have, again, a provider to find the service, auth service.
[01:55:09] OK.
[01:55:10] Thank you.
[01:55:12] Thank you.
[01:55:12] Thank you.
[01:55:13] Thank you.
[01:55:13] Yeah, so it's like a different...
[01:55:16] Looks kind of like a different...
[01:55:18] It's totally the service locator pattern.  It's like a different dependency injection pattern here.  Let's see what this looks like.
[01:55:25] in action.
[01:55:28] Thank you.
[01:55:30] All right.
[01:55:36] Thank you.
[01:55:37] - Yeah, no problem.  So I'm here.  Okay, please log in your name.
[01:55:46] You can tell what I like entering in.
[01:55:48] to these things interrupting cow, yes.
[01:55:52] Cool.
[01:55:54] Let's look at the code here for this.
[01:55:57] create a service, use service, auth service,  which will be in the service directory.  We'll look at that in a second.
[01:56:05] Login.
[01:56:07] Thank you.
[01:56:09] Nice gets the stuff off the form.
[01:56:13] Okay.
[01:56:14] OK, I'll service login, form data.
[01:56:18] Miflogged in.
[01:56:21] Yeah.
[01:56:22] So service abstraction kind of just handles the whole thing.  So yeah, this code is fairly clean.
[01:56:29] completely kind of pulled out and then you use it.  So this looks a lot like context.  Let's see.
[01:56:35] I mean, I'm sure like--  we'll see what the difference is here.
[01:56:40] Auth service.
[01:56:42] Can you see her?
[01:56:44] log in, so it's fine.
[01:56:48] Okay, so what am I missing here is use service.  Yeah, so in a sense, my gut is this is just like a nicer, like it's a nicer context wrapper.  Instead of you worrying about like create context and writing your own thing, this kind of just...
[01:57:10] Yeah.
[01:57:11] Mm-hmm.
[01:57:13] See you.
[01:57:14] Get auth service.
[01:57:17] It's logged in.
[01:57:19] Thank you.
[01:57:20] Okay.
[01:57:24] Yeah, my understanding is this was kind of a, to get a pattern familiar in other frameworks into solid. So yeah, that's cool.
[01:57:34] Thank you.
[01:57:36] Thank you.
[01:57:38] Thank you.
[01:57:40] All right, what is next on the list?
[01:57:45] Yeah.
[01:57:46] Yeah.
[01:57:50] Submit solid proxies.
[01:57:53] also from xlord.
[01:57:55] Yeah, I think I see a pattern here.  I think these are patterns that you find in other frameworks  that are kind of coming in here.  Solid proxies.
[01:58:03] I like this kind of layer. It's very much in our style. This package provides a signaled version of JavaScript's built-in objects.
[01:58:10] Oh, okay, cool. This is cool. Check it out. Because as you know, state is like very, our stores are  installed are very simplistic. I wrote a very minimalist approach that basically said we can handle
[01:58:22] everything in a basic way and a consistent way. This actually fills in what MobX does. Like we don't have observable maps or weak sets or weak maps. I mean, a bunch of these are coming soon, but even we don't even have a true reservable array.
[01:58:38] Sorry, I already showed this. It's just a contest where anyone can enter and win a bunch of money. There's a submission process here where people can basically share their GitHub repo, and then it'll go to a vote. It's just a hackathon, essentially.
[01:59:01] Thank you.
[01:59:05] Yeah, so this is cool.  I like the promise of this, 'cause this is something like,  I didn't wanna include in core,  especially when stores used to be part of core.  I kind of moved them out more.
[01:59:14] And there is some questions here because technically like array,  most array methods are mutated.
[01:59:21] So they don't really fit with the read-only thing. It was kind of better to use read-only patterns all the way down the tree.
[01:59:29] um you know like if you if you have something like our state object and you get to a nested  path and you hit a map like what are you supposed to do call set on it it's inconsistent but i'm  glad to have these other primitives because sometimes like a reactive map is all that you  need and i played around a few versions of it one of the challenges i found with this is like you  can make a reactive map probably like three or four different ways depending on what kind of  behavior you wanted so it's always hard for me to standardize on it but i think it's really cool that
[01:59:59] shout.
[02:00:00] proxy.
[02:00:01] "We'll track all properties, changes automatically,  "setting new values, deleting or check keys, make okay."
[02:00:06] Oh, actually, no, no, no, no.
[02:00:11] I think this is like the opposite of story.  Changing any key will cause user to trigger maybe.
[02:00:20] Oh, no, that's the same.  So this is just create mutable, I think.
[02:00:27] Yeah, so this looks like it's createMutable.
[02:00:30] But it's not deep. It's a shallow one.
[02:00:35] Yeah, so it's a shallow create mutable, okay.  Signal array will track any change of the array automatically.
[02:00:41] Okay.
[02:00:46] OK.
[02:00:50] What's the difference between these examples?
[02:00:54] Am I not seeing it?
[02:01:02] Oh, it's just different APIs to fit more solid typical pattern, but it's the same thing. Okay. So, yeah, this -- this -- this --
[02:01:11] I think the potential, it looks like they only have the two so far. Let's play with the demo here. But essentially, I think the potential of this approach is something like I'm great to see. It's really great to see people kind of do these experiments and kind of come up with patterns like this. I'd be much more excited even to see like the map or the week map because those are the tricky ones. And ones that you can't do today really with stores. But there's a lot of value in this anyways. My name is Ryan.
[02:01:37] And implementation for this probably
[02:01:42] Yeah, it's just it's an object. Okay.
[02:01:46] Cool. Yeah. So just both of XLR's submission seems to have this kind of like nice
[02:01:54] Nice layer on this.
[02:01:58] Yeah, no problem. Sorry. I talked about it a bunch at the beginning of the stream too. And it's basically the was intended to be the theme the stream until we spent an hour and a half talking about this week in JavaScript. But yeah, the
[02:02:11] This is all about solid hackathon.  And as I said, submission is still open.  You come up with something cool in the next week,  you can get in here.  Only 17 entries so far.  So, yeah.
[02:02:23] That's cool. I'm glad to see people making these permatives because like, I know there's gaps here. I know solid permatives have some stuff too. But yeah, okay. Submission for study or, oh, is this an app?
[02:02:36] Nice. Jack?
[02:02:38] Jack has made us an app. Hackathon Switcher for Study, an application that allows customers to create curated lists of YouTube and Medium articles they want to read and then present them with nightly reading viewing lists. The application is not deployed. Okay, fair enough.
[02:02:51] But a video demo will work.  Welcome to a special video.  It's a SolidJS Hackathon release video.  So a couple weeks back, I put out a video saying that I was going to participate in the SolidJS Hackathon.  And here it is.  It's an app called Studier.  And the idea is that if you've got an hour a day to do some studying, it's a landing page.  I've gone and set up two topics for myself.  One is this cool how to shoot manual in 10 minutes video.  Or I want to learn a little bit about X-State.  It's up to me.
[02:03:21] I can go and create a new topic by just clicking on the ad on YouTube.  And I like this video.
[02:03:27] I can change the description on if I want.  And ideally, at some point, it'd be nice if we could actually go and trade these with other folks.  So you could go and create your own learning list and trade with other folks.  But that's.
[02:03:39] Actually, part of the reasons why I'm not going to make this into a commercially viable product is because one of my viewers actually talked to me during my building of this on a totally unrelated topic about this really cool system called Alter Class that allows you to go and set up essentially a learning class where you point at articles and YouTube videos and you can go and set up a course and then people can go and learn off that course.
[02:04:09] my stuff on YouTube.
[02:04:11] It's really fun.  But I...
[02:04:14] I think it competes, so I'm not actually going to kind of
[02:04:17] go ahead with this really cool Studier.  But I have released a bunch of code along the way,  including this Chrome extension boilerplate for Solid.  That's what drives the extension.  And I will be releasing the source code for Studier once I clean it up a little bit.  I was going to release a Firebase kind of hook library for Solid that I used internally.  It's actually a Turbo Repo Mono Repo, and I've got a bunch of packages in there.  But somebody else beat me to the punch on that one
[02:04:47] better libraries, I'm not gonna go into that one.  - Oh man, Jack is so humble, but, yeah,
[02:04:55] Yeah, no.
[02:04:57] Yeah, my videos do not get 192 upvotes or the kind of views he gets.  So, yeah, I mean...
[02:05:05] Jack is awesome.  And it's cool that he did submit this after all.
[02:05:12] The app looks slick.  It's too bad that it didn't end up being something viable for him.  But I still think that's...
[02:05:20] um it was february 18th like he the submissions opened like on that day um i think i think this  might be the challenge of the hackathon like trying to signal like like that you're working  on something you know um i in the other case the other app is actually i think a react app  um so you know it is what it is but yeah i i think it's uh
[02:05:45] Thank you.
[02:05:45] Yeah, no, it looks really slick, looks really good.  I'm glad that he went through and submitted it.
[02:05:52] Thank you.
[02:05:53] So far, we've been looking at a lot of libraries and libraries are obviously a gap, but it's cool to see some of the apps.  I think I think I think apps are actually probably going to be kind of a hot topic here because I don't know how many apps we have versus libraries, although the libraries have like incredible value for everyone.  I think it's cool to see what people actually build. People always asking for examples of apps and stuff. And obviously, like.
[02:06:15] Any app I built for demos, even the real world demo, you're like,
[02:06:20] There's like no way he wasn't thinking about performance here.  Like he probably, like, would you have written it that way?  Like I tried to be honest, but let's face it here.  I,
[02:06:29] Every time I write something with solid, I want people to be amazed at how incredibly performative it is. So it's nice to see.
[02:06:37] Apps, OK, so what do we got here?  Files changed.
[02:06:43] Okay, cool. Just need to find it. So...
[02:06:47] Thank you.
[02:06:48] Let's
[02:06:50] Let's open this one up.
[02:06:53] Example, at project.
[02:06:55] Thank you.
[02:06:56] Thank you.
[02:06:57] Let me see.
[02:07:00] Thank you.
[02:07:01] What's this?
[02:07:04] Thank you.
[02:07:05] Thank you.
[02:07:08] Yeah, you're right.
[02:07:11] Okay, this is just us.  Okay, so what is this?  Sudoku Solver.
[02:07:17] Solves using backtracking algorithm. Okay, cool. Cool, cool.
[02:07:22] Let's see this in action.
[02:07:25] Oh, man.
[02:07:29] Okay, reset.  Do I get any numbers?  Oh, I see.  I see.
[02:07:35] If you have a Sudoku, then you can enter it in here.
[02:07:39] Because I was like, where's my...
[02:07:43] Yeah.
[02:07:46] Thank you.
[02:07:47] Thank you.
[02:07:47] Okay. Can we find one? Let's see. If it's a hard one though, there will be less squares filled in.
[02:08:01] Thank you.
[02:08:02] Right? I don't know. Maybe people pay for this stuff and I won't be able to find like an example. I just I don't even know where to find a Sudoku problem. I was thinking I'd have to fill in a bunch of spaces, but I don't know.
[02:08:15] But
[02:08:16] Thank you.
[02:08:17] Thank you.
[02:08:18] Thank you.
[02:08:19] Bye.
[02:08:20] See?
[02:08:22] All right.
[02:08:23] Can we make it harder?
[02:08:25] Thank you.
[02:08:27] Well, that one is hard.
[02:08:28] Bye.
[02:08:29] Thank you.
[02:08:30] Pfff.
[02:08:31] I'm just curious.
[02:08:33] to-- let's just do this for a second.
[02:08:37] 2, 8, 10.
[02:08:42] 953.
[02:08:43] That's cool. It moves automatically even when you press backspace. 953.
[02:08:54] Yeah.
[02:08:55] 476.
[02:08:57] 4, 7, 8.
[02:09:01] It doesn't stick there.
[02:09:03] Yeah.
[02:09:04] seven
[02:09:09] Thank you.
[02:09:10] 7, 8, 3, 9, 10.
[02:09:12] 7, 8, 10.
[02:09:16] 3
[02:09:18] I mean...
[02:09:21] Six.
[02:09:26] 361.
[02:09:28] 3, 2,
[02:09:31] 6, 1,
[02:09:33] I'm doing something terribly wrong here. I think this is what this thing does. Five, four,
[02:09:41] 9184.
[02:09:43] 9184. Okay, cool.
[02:09:51] Thank you.
[02:09:53] yeah that would be a smart thing to do yes all right
[02:10:01] Solve.
[02:10:03] Pfff.
[02:10:06] All right. I'm impressed.
[02:10:11] New York Times hard Sudoku.  Sold very quickly.
[02:10:18] Cool.
[02:10:21] Clear, what do I do with clear?
[02:10:24] Oh, okay. There you go.
[02:10:27] Thank you.
[02:10:29] Thank you.
[02:10:31] Thank you.
[02:10:32] Thank you.
[02:10:32] What if I like screwed up?
[02:10:37] OK.
[02:10:39] I don't know.
[02:10:42] Thank you.
[02:10:45] Yeah, that's what I was wondering.
[02:10:48] Can I remove stuff from here?  Just take away some of the information?
[02:10:57] OK.
[02:10:59] How much can we take away?
[02:11:02] Thank you.
[02:11:06] Thank you.
[02:11:07] Oh, it's like it already...
[02:11:10] Thank you.
[02:11:12] Thank you.
[02:11:14] Oh, I guess if we take-- yeah, that's not enough, because it might just give it more possibilities of what-- yeah, OK.
[02:11:22] Yeah, yeah. Just removing the numbers doesn't necessarily guarantee that it's actually...
[02:11:31] limits.
[02:11:34] I'm sure as long as it finds a solution, if there's multiple solutions, it's not going to...
[02:11:41] Yeah.
[02:11:42] I don't know enough about the theoretical...
[02:11:44] nature of Sudoku.
[02:11:47] So, Sudoku, sorry, I'm just like saying it backwards.  Okay, cool, all right.  I think that's pretty cool.
[02:11:58] Thank you.
[02:12:04] Thank you.
[02:12:05] Thank you.
[02:12:06] Thank you.
[02:12:10] Sorry.  I got it in a state.  It clearly uses some amount of local storage there.
[02:12:16] Okay, and use the salt, the Jess tailwind, comlink and beat.
[02:12:21] Hmm.
[02:12:23] I wonder what the web workers do.
[02:12:26] Mm-hmm.
[02:12:28] Thank you.
[02:12:30] All right. What else do we have here?
[02:12:35] Yeah.
[02:12:37] All right.
[02:12:43] Thank you.
[02:12:43] Solid map GL.
[02:12:45] Okay.
[02:12:46] I think I like the sounds of this.
[02:12:51] I like that everyone's been getting into the new assets we have.
[02:12:55] Makes all the libraries look really cool.
[02:12:59] WebGL.js, WebGL.js.
[02:13:02] examples and playground. Ooh, there's a playground. Okay. No, it's
[02:13:07] Ha ha ha.
[02:13:11] That's cool. It's based on-- looks like Solid's Playground.
[02:13:16] Yeah.
[02:13:17] Thank you.
[02:13:18] OK.
[02:13:19] Yeah, I don't know enough about the Mapbox UIs.  I guess you can change and center the viewport.
[02:13:24] Um,
[02:13:26] Output.
[02:13:27] Yeah.
[02:13:31] Yeah, I mean, it's just it's all its playground here, essentially.  But let's move the map a little bit.  What happens if I go minus 24?
[02:13:40] Okay, yeah.
[02:13:44] Thank you.
[02:13:46] Thank you.
[02:13:46] Okay. What if I go 38?
[02:13:54] Thank you.
[02:13:56] Oh, man, it's...
[02:14:01] Thank you.
[02:14:02] I'm probably going to blame the playground for this.
[02:14:05] More than anything, I'm just...
[02:14:10] Thank you.
[02:14:11] Thank you.
[02:14:13] I'm going up or down the coast here.
[02:14:16] Thank you.
[02:14:17] Thank you.
[02:14:20] I'm going down and then --
[02:14:24] And then can I go six?
[02:14:31] OK.
[02:14:34] - Two.
[02:14:36] Bye.
[02:14:38] Thank you.
[02:14:40] Thank you.
[02:14:42] Thank you.
[02:14:43] Thank you.
[02:14:44] Thank you.
[02:14:46] Anyways, okay.  Just plain...
[02:14:49] Thank you.
[02:14:50] Thank you.
[02:14:51] Probably drive this off state. I don't know. I guess if you had map controls and stuff, you can do some pretty cool stuff here.
[02:14:58] Looks good.
[02:14:59] Thank you.
[02:15:01] uses the Mapbox API.
[02:15:04] Thank you.
[02:15:05] Thank you.
[02:15:06] obviously me manually doing this
[02:15:10] isn't getting me too far, but OK.
[02:15:14] Very, very cool.
[02:15:18] All right.
[02:15:19] Thank you.
[02:15:21] Thank you.
[02:15:22] Static map, interactive map, roadmap.  Okay, cool, cool.  So there's different types of...
[02:15:29] of map representations and stuff. Okay. Yeah. So this, this gets pretty deep.
[02:15:36] Yeah.
[02:15:37] Amen.
[02:15:38] Yeah.
[02:15:38] Thank you.
[02:15:40] Yeah, different terrains.  OK, OK.  Yeah, yeah, layers, geosource.  Yeah, OK.  Yeah, the example is very basic, but--
[02:15:49] Oh, Deck GL.
[02:15:52] Okay, there's a link to another repo. Okay. Yeah, I don't have time to get too deep in it, but it sounds like there's a lot of capability here.
[02:15:59] That's cool to see.  There's always a need for these kind of--
[02:16:02] libraries.
[02:16:04] All right.
[02:16:06] Thank you.
[02:16:08] Thank you.
[02:16:11] Where I am right now, it's...
[02:16:14] 10 p.m.
[02:16:17] Oh, there is.
[02:16:19] Dammit, why don't I see anything?
[02:16:22] Drop down.
[02:16:24] Was it in the playground?
[02:16:28] What did I not?
[02:16:32] All right, interactive map.
[02:16:37] There we go.
[02:16:39] I'm sitting there trying to move the static map around, but here we go.
[02:16:44] Nicholas Matsakis: Cupertino
[02:16:45] San Jose.
[02:16:47] Campbell.
[02:16:49] There's eBay over here.
[02:16:52] Yeah, right there. There's eBay. Okay. What else do we got here? Um,
[02:16:56] Yeah.
[02:17:00] Thank you.
[02:17:02] Thank you.
[02:17:03] Thank you.
[02:17:05] Thank you.
[02:17:06] OK, so there's just tons of features in this thing.
[02:17:09] Yeah.
[02:17:10] Um...
[02:17:14] Thank you.
[02:17:15] What do I want to see? Yeah. Add terrain.
[02:17:20] Ha ha ha.
[02:17:21] Thank you.
[02:17:23] This is fun.
[02:17:26] Thank you.
[02:17:29] Thank you.
[02:17:29] Thank you.
[02:17:31] Thank you.
[02:17:32] Yep.
[02:17:32] Add fog.
[02:17:35] Yeah.
[02:17:36] At Sky?
[02:17:42] My navigation isn't the best, but...
[02:17:45] Interesting.
[02:17:47] Thank you.
[02:17:49] Quick mouse and move around.  There, better.  Now we at least got a chance to look at it a bit better.  Okay, let's, what else we got here?  Rehash one.
[02:18:00] A little credential manager based on
[02:18:02] password hash idea he's generating each site they sign into.
[02:18:08] Bye.
[02:18:11] Thank you.
[02:18:12] Thank you.
[02:18:13] Thank you.
[02:18:15] Thank you.
[02:18:17] Thank you.
[02:18:22] Thank you.
[02:18:22] Bye.
[02:18:24] Okay, okay, yeah.  I guess to really play with this, I'd probably have to...
[02:18:33] Thank you.
[02:18:34] Is the idea that this is an app?  OK, gotcha.  Yeah, so this is an app.
[02:18:46] Thank you.
[02:18:47] Thank you.
[02:18:48] Let's see what they do.
[02:18:50] Thank you.
[02:18:52] Because I want to kind of look at the...
[02:18:55] The GitHub.
[02:18:58] Thank you.
[02:18:59] Actually, no, because it's just going to be the app.
[02:19:07] Wonder...
[02:19:10] What's going on here?
[02:19:12] Thank you.
[02:19:13] Bye.
[02:19:15] Thank you.
[02:19:17] OK, that was weird.
[02:19:18] Thank you.
[02:19:20] Yeah.
[02:19:20] One, one, one, one.
[02:19:24] Okay, no, no repeated characters. Hey, okay. One, two, three.
[02:19:31] The second I go one, two, how about four, five? Oh, man. Solid is the best. Okay, works for me.
[02:19:44] um
[02:19:45] Let's create a new one.
[02:19:50] Yeah.
[02:19:51] Bye.
[02:19:52] Thank you.
[02:19:53] Okay, so make URL display name. Okay. Yeah. So it's like a password manager last password settings switch theme
[02:20:01] English, Dutch.
[02:20:04] Sports store.  OK, let's make at least one here.
[02:20:13] Oh, I don't know.
[02:20:16] Thank you.
[02:20:17] Thank you.
[02:20:18] Thank you.
[02:20:20] Thank you.
[02:20:24] And it generates the password.  And--
[02:20:28] Thank you.
[02:20:30] We can...
[02:20:31] Copy to clipboard.
[02:20:34] Okay, cool. Using password, copy clipboard. Yeah. Seems cool. What about...
[02:20:41] Cool.
[02:20:44] Yeah, I'm sorry.
[02:20:47] Okay.
[02:20:50] Yeah.
[02:20:53] Vercel, yeah. At least it's deployed to Vercel. I've been having some trouble with Vercel this week. The Solid Start examples don't deploy right now. I don't know what happened. Something broke. All right.
[02:21:07] Thank you.
[02:21:08] Bye.
[02:21:08] Cool.
[02:21:10] I said something earlier about there being mostly libraries, but I've been proven wrong almost immediately. There is a lot.
[02:21:17] There's a decent amount of apps in here.  Okay, hope UI.  We did showcase this off in the community meeting.
[02:21:23] But it looks...
[02:21:26] you've hoped for it.  That's such clever.  Looks like
[02:21:31] This is a full-fledged headless component library, something kind of like Chakra, I believe.  And it uses transition groups.  So if someone else uses transition group, apparently this library works.  Okay.
[02:21:43] Good. I feel validated.
[02:21:47] Thank you.
[02:21:47] Thank you.
[02:21:48] Thank you.
[02:21:52] Oh, wow. Buttons. Buttons. Lots of buttons. Primary accent neutral. I'm not the best person to judge a design system. But given the amount of solid component libraries, this makes me incredibly excited. This looks like it's like
[02:22:10] We've got lots of features here.
[02:22:15] different layouts, different sizings, icon buttons.
[02:22:21] Searches.
[02:22:23] Thank you.
[02:22:24] accessibility,
[02:22:28] Yeah.
[02:22:28] Layout components, aspect ratio, embed image.
[02:22:36] Thank you.
[02:22:38] Better map. Box.
[02:22:42] Yeah.
[02:22:46] Center.
[02:22:49] Thank you.
[02:22:49] Thank you.
[02:22:51] Flex.
[02:22:54] as components, CSS grid, simple grid stack.
[02:23:03] Well,
[02:23:05] This is deep.  Badges.
[02:23:09] Thank you.
[02:23:09] I mean, people can probably look at this themselves.  I'm just...
[02:23:14] Thank you.
[02:23:15] There is a lot of stuff here.
[02:23:17] drawers
[02:23:20] Yeah.
[02:23:21] Thank you.
[02:23:22] Yeah.
[02:23:23] Thank you.
[02:23:24] Thank you.
[02:23:25] Thank you.
[02:23:27] Thank you.
[02:23:28] Thank you.
[02:23:28] Thank you.
[02:23:29] Thank you.
[02:23:30] Thank you.
[02:23:31] I love how everything's copy-paste here.
[02:23:34] Thank you.
[02:23:35] Thank you.
[02:23:36] Thank you.
[02:23:38] Yeah.
[02:23:39] Morals.
[02:23:41] Choo-choo-choo-choo.
[02:23:42] Thank you.
[02:23:44] Bye.
[02:23:46] Cool. Tool tips? Why not? How are we?
[02:23:52] Bye.
[02:23:54] yeah i wonder i wonder how this the styling works to my understanding this is this is headless so you can kind of
[02:24:00] do this however you want.
[02:24:03] Um,
[02:24:05] But I saw some easy mechanisms for getting theming in place.
[02:24:09] Yep.
[02:24:10] This was actually demoed on the solo community meeting probably. So I probably don't need to spend a bunch more time here. But
[02:24:16] Thank you.
[02:24:18] you know,
[02:24:20] Thank you.
[02:24:21] Thank you.
[02:24:22] It's still so cool to see.
[02:24:24] Then the documentation looks like it's great.
[02:24:28] Thank you.
[02:24:29] Yeah. Anyway, let's head on back.
[02:24:34] That's cool. I mean, this probably took an incredible amount of effort to build a full component library.
[02:24:42] Thank you.
[02:24:44] Yeah, yeah.
[02:24:46] Yeah, exactly. Between the MDX stuff that...
[02:24:51] Akil's been doing for SolidStart and like the full thing in these component libraries,  like the pieces are coming together really quickly here in terms of having a compelling  story for the ecosystem because like you only need a couple of component libraries for options  and like, you know, handle some markdown, some static rendering, server rendering,  be able to deploy to Vercel, Netlify, Cloudflare, you know, like...
[02:25:18] The...
[02:25:19] solid becoming like like a real thing for people to use to build real apps you know more than i  mean you can do it today but you know it it's funny i'm kind of like old school i'm used to  building this stuff myself you know you know like my startup we had our own design system we had to  do everything you know like to fit ourselves custom but just thinking about how easy it's  going to be to just like cli generate a project pull in a couple depths and just like get going
[02:25:49] in a couple of months, this is, this seems to be  completely different ball game.  And it's really awesome to see these kinds of libraries  come in to the solid ecosystem because yeah, RevKit UI,  is this another one?
[02:26:03] Thank you.
[02:26:03] Thank you.
[02:26:05] It's funny, I did mostly media, so date pickers weren't actually that big of a deal. I only ever got into that once. But did a lot of like grids and like, like,
[02:26:21] both Twitter style and masonry grids and what I called Google photo style justified grids.  And dynamic drag and drop, infinite scroll performance, selection state, multi-page selection state.  I did a lot of mechanical stuff.
[02:26:45] Thank you.
[02:26:46] Yeah, these days. What is this?
[02:26:50] design system
[02:26:53] Okay, okay.
[02:26:56] Okay, so you're like...
[02:27:00] Bye.
[02:27:02] Thank you.
[02:27:03] Okay. Yes, it's a
[02:27:07] Yeah.
[02:27:08] buttons, tooltips, okay.
[02:27:10] Bye.
[02:27:12] Cards, okay.
[02:27:18] Okay, cool.
[02:27:21] action.
[02:27:22] Thank you.
[02:27:23] Nice, this is a good showcase of all the features. I want to see,
[02:27:29] is--
[02:27:31] Thank you.
[02:27:32] Yeah.
[02:27:37] I'd love to see is what it's like to author it.  That was one cool thing about the docs in the last example,  so you can kind of see,
[02:27:44] what it's like to author it. Although I'm gathering I'm just going to find the component source code. But good tests, linting, everything kind of built in. Avatar.
[02:27:53] Thank you.
[02:27:54] making use of solid style.  It's always cool to actually see these libraries being used.
[02:28:02] So especially some of these kind of tertiary ones  and see how it fits and actually works  because...
[02:28:07] I'm not going to lie. I built a lot of the core libraries for solid because like if I didn't, no one would originally.  And stuff like solid style components and solid transition groups, I'm not even convinced sometimes that they actually work everywhere.  But it's really cool to see those building blocks that, you know, I kind of whipped together in a single evening actually work.
[02:28:29] be able to power things this powerful.  I knew if I didn't build these things originally  that it would take a while and people might not see the vision.  But it seems like now that we've got the base primitives in a good place,  people can achieve incredible things.  This makes me so excited to see libraries like this.  Just being able to pick them up off the shelf and be able to do this.
[02:28:56] So yeah, a couple more component libraries.
[02:29:01] What do we got here?
[02:29:03] Solid cached resources. Nice. It's great. I recognize a lot of these people from the discord. It seems like a lot of people in the community came in and gave this a shot. Okay, so what do we got here? Solid cached resources.
[02:29:21] Thank you.
[02:29:24] Thank you.
[02:29:25] Thank you.
[02:29:29] We have solid bootstrap too. It came in right before the hackathon. That was the first one.
[02:29:38] Yeah, like by the end of this hackathon, how many component libraries is Sully going to have? Sully cache resource experimental, okay.
[02:29:48] Okay, cool.
[02:29:50] So it adds a cache capability using the cache key.
[02:29:57] Yeah, I love how straightforward
[02:30:00] Some of this stuff can be to build as long as you have the right primitives.  And these are built on resource.  So they'll work with suspense and transitions and stuff, right?
[02:30:11] Um,
[02:30:15] Nice. Yeah. I mean, you can kind of see how it works just simply from this.  I think one of the cool things, though, I can't...
[02:30:22] Yeah, I don't know if this was this was this published NPM at all. I wonder we should PM PM add
[02:30:30] Thank you.
[02:30:30] I mean, this is so not fair.
[02:30:38] Oh.
[02:30:39] This is probably not their fault. This is probably the...
[02:30:45] the way that the standard roll-up template we build works.
[02:30:49] **** Do we have an X-works map? Yes. Import.
[02:30:56] Types, type module, this is, okay.
[02:31:00] Yeah.
[02:31:04] Yeah, okay, so it's probably all straight.  Is it type module?  I wonder if they have problems building those.  Okay, yeah.
[02:31:13] This-- yeah, so--
[02:31:16] this library probably doesn't work with SSR yet
[02:31:23] But, well, actually, if it doesn't use GSX,  it probably does work with SSR actually,  'cause it's just built on the components.  Yeah, that's one of the cool things about the library side.  Yeah, there's no GSX here.  So yeah, this is probably fully isomorphic, probably.
[02:31:39] Probably work with SSR too. Okay, cool.
[02:31:43] Yeah, I'm glad to see this. I may create resource missing a cache, which is kind of, you know, you kind of...
[02:31:49] it's missing, but on the positive, um,
[02:31:53] it makes it really easy for people to add their own opinion to cache layers and stuff like make  their solid queries and still leverage all the stuff
[02:32:01] All right, let's see what else we got here.  That's cool.
[02:32:08] Yeah.
[02:32:08] I think we're going to have a couple of those.
[02:32:11] Student project.
[02:32:15] Hydrogen, yeah, social app.  I saw this earlier.  I wonder if I'm already going to be signed in because I think I did look at this one because I was just like curious.
[02:32:26] Okay.
[02:32:27] Thank you.
[02:32:29] User denied geolocation, I'm sorry.
[02:32:31] Thank you.
[02:32:32] Looks like I already have state password.
[02:32:35] Huh.
[02:32:36] Someone responded to my message, three hearts.  Yeah, no, this is really cool.  It's like a little Facebook kind of thing.  I think it's like a full single page app style.  I have no friends apparently, but that would be OK.
[02:32:53] - Yeah, what's this?
[02:32:54] Thank you.
[02:32:54] Thank you.
[02:32:56] Post likes.  Nice.
[02:32:59] Thank you.
[02:32:59] I don't know what that is.  It suggests I have comments.
[02:33:04] Thank you.
[02:33:06] - Trending posts.
[02:33:10] Six days ago.
[02:33:12] Okay.
[02:33:15] Thank you.
[02:33:17] Thank you.
[02:33:18] Okay, gotcha. So when you click, it tells you the comments. Then when you click on the comments, you can actually see the comments.
[02:33:24] Yeah.
[02:33:25] Thank you.
[02:33:26] Well, only a couple people in here so far, but...
[02:33:33] Oh, there's a messenger too?
[02:33:35] laughter
[02:33:38] We've got dark mode, light mode switching.
[02:33:41] Thank you.
[02:33:41] Create posts, groups, group posts.
[02:33:44] This is a student project.  That's very cool.  Like, I remember my student project, I made something called Friend Time.
[02:33:52] um which use facebook's graph to show when your friends are available on a calendar  and then you'd like be able to schedule stuff i feel like this this this is even slicker than  that that's that's pretty cool um yeah
[02:34:13] Nice.
[02:34:18] Do you have any friend requests? No.
[02:34:22] Sad.
[02:34:24] Suggestions.
[02:34:26] Some people have already signed up.  Ryan T. I wonder if this is Ryan Turnquest.  Creative Solid Router.
[02:34:35] No, maybe not.  He's friends with...
[02:34:40] Oh, man.
[02:34:45] Oh, Alex.
[02:34:47] is in here.  Let's add Alex.
[02:34:51] People got profile photos.
[02:34:54] Honestly, this is student projects. It's pretty cool. Do I have friends now or was it just a friend's request?
[02:35:03] Thank you.
[02:35:07] There we go.
[02:35:09] We will see later if Alex accepts my friend request.
[02:35:15] Okay.
[02:35:17] Very cool.
[02:35:21] Okay.
[02:35:25] Thank you.
[02:35:26] Bye.
[02:35:27] Thank you.
[02:35:28] Okay.
[02:35:30] Code image.
[02:35:33] Thank you.
[02:35:35] That sounds like fun.
[02:35:37] - Okay, Elegant's code screenshots your source code.  I need this all the time.  I'm always writing articles.  Let's, this would be dog fooding, right?  He's our own stuff.
[02:35:47] Oh, isn't this fun?  I think I did see this one before.  I like Night Owl.
[02:35:53] Thank you.
[02:35:54] Yeah.
[02:35:55] Thank you.
[02:35:57] Grab a code snippet, code image.
[02:36:00] Style.
[02:36:02] Nice.
[02:36:03] I mean, I don't know why you do everyone use that one, but--
[02:36:07] All right.  Header, no?
[02:36:10] Right, okay.
[02:36:12] Language, ooh, TypeScript.
[02:36:16] Thank you.
[02:36:17] Is it just for show?
[02:36:21] I
[02:36:22] Bye.
[02:36:25] Thank you.
[02:36:25] Thank you.
[02:36:28] Bye.
[02:36:29] Yeah.
[02:36:31] Thank you.
[02:36:32] Thank you.
[02:36:34] Thank you.
[02:36:34] Thank you.
[02:36:35] Thank you.
[02:36:38] Mm-hmm.
[02:36:39] Yeah.
[02:36:40] Thank you.
[02:36:45] Thank you.
[02:36:50] Thank you.
[02:36:54] Thank you.
[02:36:56] Can I pick a different language? PHP?
[02:36:59] OK, yeah, OK, cool, cool.  Yeah, so different syntax highlighting.
[02:37:06] Font weights.
[02:37:07] Nice.
[02:37:09] Thank you.
[02:37:09] Thank you.
[02:37:11] Different fonts.
[02:37:14] Thank you.
[02:37:15] I think they're all mono. Makes sense. Opacity.
[02:37:22] Thank you.
[02:37:23] Thank you.
[02:37:24] Thank you.
[02:37:25] Yeah.
[02:37:27] Yeah.
[02:37:27] Bye.
[02:37:30] OK, yeah, I've played here enough.  That's cool.  And then you can presumably export it.
[02:37:36] File name, PNG, SVG, KPEG.
[02:37:39] Thank you.
[02:37:41] Yeah.
[02:37:42] Are there other themes?
[02:37:44] There's a lot of themes.
[02:37:46] Thank you.
[02:37:50] Thank you.
[02:37:51] Thank you.
[02:37:52] Thank you.
[02:37:55] Yeah, it looks like that is the case. But yeah, I mean, that's still pretty cool. All right.
[02:38:06] - Language selection.
[02:38:08] Okay.
[02:38:09] English, German, and Italian.
[02:38:12] Wish I knew Italian.
[02:38:14] Let's say.
[02:38:17] Very cool.
[02:38:20] Thank you.
[02:38:21] Thank you.
[02:38:23] My family is Italian, but my father was born here.  My grandfather came over when he was a kid.  So, yeah, I never really learned any real Italian language.
[02:38:38] Cool.
[02:38:40] I don't even know how to pronounce this.
[02:38:42] lassoceto.org.
[02:38:44] Make music here, Duncan. It's happened. I don't know if you're still here, buddy, but a while back, drummer of my band kind of popped in here for a moment, I think. Where is he?
[02:38:56] If you can't find it, yeah.
[02:39:01] Thank you.
[02:39:02] Bye.
[02:39:03] We've made it.
[02:39:08] This sounds like fun.
[02:39:14] Nice. Okay. We got synth, we got MIDI, music editor, anything. Let's just get the synthesizer going.
[02:39:20] Thank you.
[02:39:23] I don't want to be too loud.
[02:39:49] Right, so everything's here.
[02:39:52] decay
[02:40:07] Bye.
[02:40:17] Nice.
[02:40:21] Cool. Okay. Piano may sound loud. Warning. Featured plan. Interactive music tour that teach the editor more controls.
[02:40:33] Hmm.
[02:40:36] .
[02:40:40] It's so hard to actually play anything with the keyboard.
[02:40:44] Yeah.
[02:40:45] *phone rings*
[02:40:46] with the mouse.  But this is still, this is lots of...
[02:40:51] This is cool.
[02:40:52] The comments are coming in now.
[02:41:01] Thank you.
[02:41:05] Thank you.
[02:41:06] Thank you.
[02:41:08] I'm sorry. I turned my volume down.
[02:41:15] Thank you.
[02:41:16] Oh, man. And that was the end of the stream. I'm so sorry.
[02:41:24] Yeah.
[02:41:25] Thank you.
[02:41:27] Yeah, exactly. Well, that's the thing. If they have MIDI support,
[02:41:33] Thank you.
[02:41:34] then like we can plug in our external keyboard and get the party started, you know.
[02:41:43] It's a music editor.
[02:41:45] Okay.
[02:41:47] Bye.
[02:41:49] four rests, OK.
[02:41:52] Can we record?  Or do we just...  What if I go...  No, let's go.
[02:42:01] . . .
[02:42:03] . . .
[02:42:04] . . .
[02:42:07] Please stop. So do I, can I go?
[02:42:10] Mm-mm-mm-mm.
[02:42:15] Okay.
[02:42:16] Thank you.
[02:42:18] uh
[02:42:19] So let's go forward, no.
[02:42:22] Tempo 60 beats per second.
[02:42:27] Okay.
[02:42:28] Thank you.
[02:42:29] Faxi 1A. Okay, I recorded it.
[02:42:41] . . .
[02:42:51] Can I stop it? Cancel press? Okay.
[02:42:58] Go to start.
[02:43:00] you
[02:43:01] Yeah.
[02:43:02] Thank you.
[02:43:05] Thank you.
[02:43:12] - Hmm, I don't hear anything when I play it back.
[02:43:18] Anyway.
[02:43:30] Okay, yeah. Obviously, I need to actually figure out how this stuff all works, but...
[02:43:36] I mean,
[02:43:40] Yeah, okay. So there's some placeholder stuff in here, but you can do the music editor and a sound synthesizer. So audio visualizer. Okay, that'll be cool.
[02:43:53] Yeah, I probably have to actually learn how to do some of this stuff
[02:43:58] If a key sticks, try pressing the piano key again or press it.
[02:44:09] Yeah.
[02:44:10] Cool.  Definitely get the idea.  And sorry to everyone that the audio blasted.
[02:44:17] Isn't this cool, though, that people are building stuff like this?
[02:44:23] Thank you.
[02:44:24] Oh man, that's awesome.
[02:44:28] Solid G-State M.
[02:44:31] All right, what is this? Docs page? Let's go there first.
[02:44:38] storybook. All right.
[02:44:42] Interesting font.
[02:44:44] choice
[02:44:47] Okay, okay. So this is like a...
[02:44:49] A state library pattern. People, because it's all reactivity, don't often go here. We saw the proxy pattern earlier. But this one looks like it's an atomic state library. This is basically like recoil or what's the other one that people like?
[02:45:11] Is it Jotai?  Maybe.  Maybe it's like Zestand.  It's one of those ones.  But essentially, you cost use count.
[02:45:23] And then
[02:45:25] You make an instance of it here inside the component, and then
[02:45:34] You select
[02:45:36] It looks like it's that sort of pattern, though.
[02:45:43] Bye.
[02:45:44] Sorry, I've kept the oh my god headphones on the whole time.
[02:45:49] -
[02:45:53] Right.
[02:45:54] Thank you.
[02:45:57] Ooh, with DevTools, did I miss something?  Where are the DevTools?  Did I...
[02:46:03] Oh, the state library has dev tools. Yeah, I'm not even seeing here. It's small.
[02:46:10] Create a store.
[02:46:12] New DevTools, okay.
[02:46:14] OK.
[02:46:17] Oh, this looks like Redux DevTools.
[02:46:22] This looks very much like Redux DevTools.
[02:46:25] That's fun, yeah, because it's probably using immutable state patterns and then applying them through.  I did some early experiments.  Like, this is early on with solid before I landed on stores.  I was like, oh, what's a good pattern?  And even when I had the stores, I'm like, you have to understand, when I was working, first working on solid, I didn't think anyone would adapt signals.  I didn't think people would, like, want to acknowledge the fine-grainedness of it.
[02:46:55] the reducers returning next state,  they basically...
[02:47:00] returned path partials for...
[02:47:04] for create stores essentially.  And then we basically merge all the partials
[02:47:11] and then apply them at the end, essentially, as a way of doing
[02:47:15] granular reactivity with a redux-like structure.
[02:47:22] In the end, I decided that it wasn't the best pattern for us. I might as well do a reconciled diff kind of thing like we're doing with Redux now if you want to use it. But it looks like this is all built in. We have Redux dev tools, multiple stores.
[02:47:37] Create.
[02:47:39] you select and dispatch two primitives, define your hooks,
[02:47:45] And you're good to go.
[02:47:48] Interesting. The biggest thing that I've always, I tried to make the JS framework benchmark once with recoil and the performance on use, like their selector APIs weren't good enough because they like, they all drove each other essentially because they weren't fine grained on updating and be interested to play with one of these and kind of understand if it has that same kind of
[02:48:08] characteristic.
[02:48:10] Thank you.
[02:48:12] Yeah, exactly. People who have patterns that they're familiar with, this seems like a really good way to kind of introduce people to this kind of stuff.
[02:48:24] multi-store.
[02:48:29] Thank you.
[02:48:32] Thank you.
[02:48:34] Thank you.
[02:48:35] Thanks.
[02:48:36] Silent mode? What's silent mode?
[02:48:42] Yeah.
[02:48:45] Thank you.
[02:48:47] Silent mode. I don't even know what silent mode is.
[02:48:51] Thank you.
[02:49:02] Oh, it's there on track.
[02:49:07] Thank you.
[02:49:08] Thank you.
[02:49:09] Thank you.
[02:49:13] It's funny because it says won't trigger component re-render.
[02:49:17] But
[02:49:18] Mike
[02:49:20] guess is that this is
[02:49:25] Oh, okay. Foot solid counter...
[02:49:31] Thank you.
[02:49:32] Okay, he's passing the signal straight through. Okay, yeah, that's fine. Yeah, I'm sure it's fine-grained. I'm pretty sure they wouldn't be re-rendering components.
[02:49:41] This example threw me off because...
[02:49:44] Usually our convention is actually called the stuff on the outside.
[02:49:48] So--
[02:49:49] Interesting, and it supports...
[02:49:52] React.
[02:49:54] Solid end view.
[02:49:59] Thank you.
[02:50:00] Cool.
[02:50:02] Thank you.
[02:50:10] What are...
[02:50:11] I wonder how similar the API ends up looking.  Yeah, it looks like there's like--  like this stuff's all different, but it looks like, generally  speaking, the same store, like verbatim.
[02:50:24] just comes across.  So that's props on them on that,  because it looks like you could write your view,  solid or react app using the exact same store implementation  and just literally just swap it in.
[02:50:35] This is a great equalizer.
[02:50:40] Basic usage for vanilla.
[02:50:42] Yeah, cool.
[02:50:43] fully featured.
[02:50:48] pattern for state management.
[02:50:55] Love to play with it to see how fine grain updates work and stuff, but definitely very cool.
[02:51:00] Yeah.
[02:51:02] Oh, man.
[02:51:04] Thank you.
[02:51:05] Oh, this is--
[02:51:07] This is what I think it is.
[02:51:12] Personally, this was always one of my list. Our design system at my old startup, we definitely borrowed a lot from Material UI. And then when we went to do the redesign, we just took Material UI. So,
[02:51:24] To know that
[02:51:25] Oh, there's a playground too?
[02:51:29] OK, so it's embedding stack.
[02:51:32] Stack blitz here.
[02:51:34] Looks like.
[02:51:36] Thank you.
[02:51:37] Yeah.
[02:51:39] Yeah, definitely. We've got more options. Hello world.
[02:51:46] Thank you.
[02:51:46] Oh.
[02:51:47] Yeah.
[02:51:48] What do we got here?
[02:51:50] system, button, button group.
[02:51:54] Oh, interesting.
[02:51:56] Yeah.
[02:51:57] Okay, yeah, yeah. So the playground...
[02:52:00] doesn't remove the sidebar so this is where you get the play it's all set up for you it looks like  it's in the background so you can just like literally go in here probably and be like i want to try
[02:52:10] the button group example. And then
[02:52:13] probably be able to grab with some source code floating action buttons who
[02:52:19] Badges.
[02:52:21] Icon.
[02:52:22] What do we got here? Alerts.
[02:52:26] Where's our cards and standard stuff?  Yeah, yeah.  It's actually always more familiar looking in light mode.  Hello, Google.
[02:52:35] Yeah, material--
[02:52:37] I wonder if you hear, has it changed?  It looks like it's slightly different now than when I first remembered.  I guess it's changed probably very slight bits over time.
[02:52:48] I don't keep up on design stuff too much,  but I remember earlier on,  the paper feel of it,  how the elevation on the shadows and stuff  was much more...
[02:52:58] Um...
[02:53:00] I mean, there's obviously all settings for this, but just like the way it was presented, I guess it's gotten flatter over time.
[02:53:06] Grid stack.
[02:53:08] Thank you.
[02:53:09] Thank you.
[02:53:10] It's so funny.  I understand this is the show of the popper,  but the fact that this button isn't actually  the standard...
[02:53:18] But in here, it kind of took me for a second, because everything else is like, is all material style.
[02:53:26] Thank you.
[02:53:27] Fade.
[02:53:28] Thank you.
[02:53:29] Thank you.
[02:53:29] Thank you.
[02:53:30] Thank you.
[02:53:31] Thank you.
[02:53:32] Thank you.
[02:53:33] - Slide.
[02:53:35] Thank you.
[02:53:35] Intro now.  So...
[02:53:39] Yeah.
[02:53:39] Thank you.
[02:53:42] - Yeah, cool, grid.  Yeah, use media query.
[02:53:47] this
[02:53:49] So we got headless, we got whatever the opposite of headless is here, like fully themed component libraries.
[02:53:59] I mean, there's so many material UI components.  I don't know if they're all here, but,
[02:54:05] Um,
[02:54:07] This is definitely a good start if they aren't putting groups.
[02:54:13] Breadcrumbs, yeah, here we go.
[02:54:15] drawer,
[02:54:17] Thank you.
[02:54:18] Yeah.
[02:54:20] Thank you.
[02:54:21] Yeah.
[02:54:23] Thank you.
[02:54:25] All right.
[02:54:26] Mm-hmm.
[02:54:28] Thank you.
[02:54:29] OK, sorry, I'm just playing around here.  There's just-- it's so cool to see.  Yeah, where's our standard headers like this one?  This is classic.
[02:54:42] Thank you.
[02:54:42] Bye.
[02:54:43] No.
[02:54:47] I don't know what the name is for that.
[02:54:50] Does anyone show the backdrop?
[02:54:54] Thank you.
[02:54:55] Thank you.
[02:54:58] Bye.
[02:55:00] Mm-hmm.
[02:55:00] Yes.
[02:55:04] Thank you.
[02:55:06] Thank you.
[02:55:07] It wasn't headless. For some reason, I thought someone told me it was headless. Maybe I just don't know anything.
[02:55:12] At bar.
[02:55:14] Thank you.
[02:55:15] Yes. There we go with the hamburger.
[02:55:21] Yeah.
[02:55:22] More examples. And then it takes you to the official docs.
[02:55:26] Okay, that works for me.
[02:55:29] Thank you.
[02:55:31] Actually,
[02:55:38] Bye.
[02:55:39] Yeah, so there's probably a couple extra ones,  maybe some React-specific ones.
[02:55:45] Thank you.
[02:55:46] Pagination and stuff.  Oh, yeah, pagination.  But it looks like there's a good set here.
[02:55:53] Yeah, no pagination controls yet.
[02:55:58] Yeah, no, I mean...
[02:56:01] Bye.
[02:56:02] Mm-hmm.
[02:56:04] Thank you.
[02:56:06] Bye.
[02:56:10] Thank you.
[02:56:11] switches, disabled switches.
[02:56:17] oh man it's not just the fact people make the libraries the fact that they  made the documentation sites so usable and stuff it's really cool to see
[02:56:28] Yeah, I got the feeling it could be used either way.
[02:56:33] Thank you.
[02:56:35] Yeah. So I-- yeah.
[02:56:39] I told you I'm not the most familiar with...
[02:56:44] all the UI libraries.  I've used Material before.  I've used Bootstrap before.  But that just shows you how old I am.
[02:56:51] Oh, shit.
[02:56:53] I've even used reach components before for accessibility.
[02:56:57] Okay.
[02:56:58] Thank you.
[02:57:00] Changes may not be saved.
[02:57:03] I'll risk it.
[02:57:06] Yeah.
[02:57:11] Thank you.
[02:57:12] Thank you.
[02:57:13] laughter
[02:57:18] Let's see what Melon is.  I think I saw this one earlier in the Discord.  I think this is a 2D...
[02:57:32] Game Engine.
[02:57:40] Yeah, for you know, it's once we're making websites, we combine that together, we can bootcake. So each file syntax is super easy development. Yeah, stuff like this is always really cool.
[02:57:49] Because OK, so it has a preset API.
[02:57:56] You write your games like this.  And then this-- yeah, so it's a declarative error.  And since our components are just functions,  we can just build it this way.
[02:58:08] Yeah.
[02:58:09] uh
[02:58:11] Okay, well...
[02:58:13] We've got a couple of minutes.  Since you're the last one,
[02:58:22] I'm willing to maybe clone something down.
[02:58:26] no and honestly he's been so busy  I don't know like  he built all that stuff in December before  the hackathon like the 3D stuff  and since then he's been like
[02:58:37] He's been doing an incredible amount of work in Solid Start and the Docs.  So I don't think he has an entry.
[02:58:45] Yeah, a lot of the ecosystem core people haven't actually, I mean, core people weren't really involved in doing this and a lot of them organizing it. But like, you know, even people like Alexis opted not in to join in as well.
[02:59:01] I decided to give everyone else a chance, right?  Yeah, OK.  So yeah, let's look at this.  I always love the game demos.
[02:59:10] Um,
[02:59:11] Joe gave a great Loom demo at the last community meeting.
[02:59:18] - Unload me video init. Yeah, okay.
[02:59:22] I'm just trying to map it here.
[02:59:24] - Yeah, see what I was gonna say is that,  with custom renderers, these can be lowercase,  but it's like a different sort of pattern.  It's very easy to just take solid,
[02:59:34] as it is today. And if you use components and you don't use any lowercase DOM APIs, we don't pull in any DOM APIs. So like the components are super powerful as just being functions. We literally can tree shake the DOM out of our app. Like if you don't use a render, if you use like create root and like components like this, the DOM doesn't even
[02:59:56] play in. Obviously, I think something that's probably renders to canvas, so there is a dom,
[03:00:00] I just wanted to kind of point out  that this is a perfectly valid way  of kind of creating sort of custom renders  without using the custom render API.  Okay, so what's my best bet here  of getting examples?  Platformer.
[03:00:15] Um...
[03:00:18] probably,
[03:00:21] I guess I could just clone the whole repo down. Why not? See what we can do here.
[03:00:28] Yeah.
[03:00:30] Let's get a new window open.
[03:00:33] Thank you.
[03:00:33] Okay.
[03:00:39] See you.
[03:00:41] Open a new window near. I'm already in my directory. Examples.
[03:00:49] Thank you.
[03:00:51] Um...
[03:00:54] And then...
[03:01:07] Copy.
[03:01:09] Thank you.
[03:01:10] for like
[03:01:13] There we go.
[03:01:18] *sniff*
[03:01:19] -
[03:01:25] Thank you.
[03:01:28] samples,
[03:01:31] Thank you.
[03:01:33] Pfft, pfft, pfft.
[03:01:34] Thank you.
[03:01:35] Way to press the wrong button, Ren. All right.
[03:01:42] Thank you.
[03:01:42] Okay, it looks like we're using npm here.
[03:01:48] Thank you.
[03:01:52] Also, Sissy, here's any mono repo stuff.
[03:02:00] Thank you.
[03:02:02] Oh, examples, are these backlinked?  No, they probably...
[03:02:13] He's probably run independently.
[03:02:18] Dev dependencies.
[03:02:19] Thank you.
[03:02:22] Mm-hmm.
[03:02:23] Thank you.
[03:02:24] Okay. Let's see if this actually will do what I think.
[03:02:33] examples platformer install
[03:02:40] From the building route. Okay. Yeah.
[03:02:46] Thank you.
[03:02:47] Thank you.
[03:02:52] Thank you.
[03:02:53] Thank you.
[03:02:56] To actually run the examples, do I go into the folder? I mean, what happens when I run dev in -- actually, do I have dev in root?
[03:03:09] I do.
[03:03:14] Okay.
[03:03:18] Thank you.
[03:03:22] Bye.
[03:03:23] This demo chases me around everywhere.
[03:03:29] It's probably like I have a service worker or something.
[03:03:34] Thank you.
[03:03:35] Yeah.
[03:03:38] Mm-hmm.
[03:03:41] Okay. Yeah. Okay. Just reading the chat. I wasn't 100% sure. So let's go into here. Again,  samples, platformer. I already installed this one. So, mpm run dev, I guess, in here.
[03:03:57] There we go.
[03:04:00] Then...
[03:04:05] Thank you.
[03:04:09] Thank you, Hacker News example,  which has hijacked every service worker on my computer.  Let's try this again.
[03:04:16] Sorry, music again, guys.
[03:04:24] Thank you.
[03:04:26] Actually, I kind of want to hear the music.  Is there volume control?
[03:04:29] Turn down your volume, everyone.
[03:04:46] I actually didn't see if there was any other controls.
[03:04:51] Can I all screen this? Oh, do you know what? It's probably because I'm streaming the video.
[03:05:00] I'm not too much of that.
[03:05:03] Thank you.
[03:05:15] Thank you.
[03:05:17] Thank you.
[03:05:18] Thank you.
[03:05:18] that's it oh died
[03:05:27] All right.
[03:05:30] Let's go.
[03:05:36] okay cool you press down
[03:05:54] Thank you.
[03:05:58] Okay.
[03:06:08] oh does this work on mobile
[03:06:12] I'm just like the ring.
[03:06:23] It's up itself if you hold it, it doesn't do much.
[03:06:27] Thank you.
[03:06:28] - Thank you.
[03:06:29] Right?
[03:06:30] So, the double knob is to T here.
[03:06:37] I took a hit.
[03:06:42] I think this is...  The gathering is just for people to see me.  Cool.
[03:06:51] Love it.
[03:06:58] Very, very cool.
[03:06:59] I kind of want to see the other game now.
[03:07:02] Let's do it.
[03:07:03] Thank you.
[03:07:05] Thank you.
[03:07:07] Thank you.
[03:07:08] Thank you.
[03:07:09] Amen.
[03:07:10] Thank you.
[03:07:10] Thank you.
[03:07:12] Thank you.
[03:07:14] Thank you.
[03:07:15] All right.
[03:07:20] Bye.
[03:07:21] Thank you.
[03:07:24] yeah i'm never gonna win this not really track pad  is there a time limit or just just keeps him going
[03:08:13] yeah i mean
[03:08:24] oh man i don't even know what the points are doing here oh i see every time every time i miss  oh it's supposed to just it just goes down immediately it's actually gonna you have to  like do it pretty fast to actually keep the count going here i have to actually get to 200 here which  i'm just not gonna get it out of it
[03:08:54] I think I've been defeated. It's even tricky when the screen's large, right? Because sometimes I can't move the trackpad that much more. Very, very cool. Although...
[03:09:17] I suppose...
[03:09:20] Thank you.
[03:09:21] It's not about the specific things.  Let's just look for a second at...
[03:09:27] Yeah.
[03:09:28] like,
[03:09:29] I'm just curious.
[03:09:32] Thank you.
[03:09:34] not
[03:09:35] Wow.
[03:09:36] Bye.
[03:09:37] Okay.
[03:09:39] Something just...
[03:09:41] Game entities.
[03:09:47] OK, so we have...
[03:09:49] Bye.
[03:09:51] Thank you.
[03:09:51] Thank you.
[03:09:56] Thank you.
[03:10:02] Thank you.
[03:10:03] Bye.
[03:10:04] I'm trying to see what the actual...
[03:10:08] Thank you.
[03:10:10] Bye.
[03:10:11] platformer.
[03:10:14] Am I looking in the right place?
[03:10:17] Thank you.
[03:10:18] Source.
[03:10:21] Yeah.
[03:10:24] Thank you.
[03:10:26] Bye.
[03:10:27] Thank you.
[03:10:29] hmm okay
[03:10:37] Thank you.
[03:10:38] source index, JSX, there it is, okay.  So you define a bunch of objects
[03:10:45] And then, okay, I gotcha.  And then lay out your scene this way.
[03:10:54] Thank you.
[03:10:55] Thank you.
[03:11:03] - Cool, no, I mean,
[03:11:04] Yeah.
[03:11:05] Definitely, definitely, definitely, definitely cool.  Okay, cool.
[03:11:13] So it's always cool to see, like, things that kind of bend the expected dynamic semantics around, like, HTML and using declarative patterns to bring them to new different places.
[03:11:27] Uh...
[03:11:31] Yeah.
[03:11:32] Thank you.
[03:11:33] I think we went down the whole list though. Um,
[03:11:37] Very, very cool to see stuff so far.  You know, we have a handful of apps, what, three component libraries.  A couple of really useful utilities, like the map one.
[03:11:53] and like the cache resource one.
[03:12:00] I think it's really cool to see all these different kind of  projects here.
[03:12:04] I think one cool thing about the patterns we have is how
[03:12:13] Oh, yeah. I'm sorry. I forgot the synthesizer thing. It's just something else. Is that, you know, like, when you try and just make wrappers and they run once, like, you're not kind of, you're not fighting some, like, you don't feel like you're fighting two systems against each other. Everything is
[03:12:29] on Sol's base feels like it's additive. So like when you build these abstractions, they just feel like
[03:12:35] like they run the way they naturally do. They don't change the
[03:12:39] They don't necessarily pull everything into their world.  It is interesting because reactivity is...
[03:12:43] Yeah.
[03:12:44] does kind of, it is
[03:12:46] pervasive, like once you
[03:12:49] choose to do reactivity you kind of have to do reactivity everywhere it like has spreads out  like uh like a virus maybe but on the other hand
[03:12:59] So,
[03:13:01] the stuff that's outside of the reactivity isn't affected by it, so to speak, right?  You can have different systems and use reactivity as just like the communication system.
[03:13:10] piece, so to speak.  So yeah, I think it does definitely lend...
[03:13:13] to that more.
[03:13:15] Thank you.
[03:13:16] Thank you.
[03:13:18] Can we submit our entries for more than one category, like student and app? Yeah, I mean, I don't know about the student one. I mean, technically, you're allowed to do more than one submission, but I don't think you can submit a single one to more than one category. I could be wrong. I'm not familiar with the rules. I did not write the rules. But my gut feeling is...
[03:13:37] is is that but i'm not sure i could be completely wrong so don't listen to me
[03:13:41] Any questions, like hack.solidjs.com has...
[03:13:51] I think a bunch of rules.
[03:13:55] Where's the rules?  Register...
[03:14:00] Um,
[03:14:04] Info.
[03:14:05] Prizes?
[03:14:06] Thank you.
[03:14:08] Rules, yeah, sorry, here you go.
[03:14:12] Submissions, all projects must have working demo,  submissions posted after, blah, blah, blah,  submissions have started after this day,  submissions have changed, submissions vetted,  submissions have licensing, submission,  treatment, blah, blah, blah, all sorts of blah, blah, blah.
[03:14:25] Thank you.
[03:14:26] Yeah.
[03:14:29] Thank you.
[03:14:32] Thank you.
[03:14:33] Thank you.
[03:14:34] Thank you.
[03:14:36] Yeah, I actually don't know the answer to these questions. Probably best to ask on the Discord.
[03:14:48] Yeah. As I said, I wasn't actually very involved with this.  I just gave my blessing and said that was a really cool idea. So I'm,
[03:14:57] It's incredible how much...
[03:14:59] Solid has grown that there's like a whole group of people making this possible.
[03:15:04] Found the funding for it.  Found our great sponsors.
[03:15:12] Builder.
[03:15:13] You know, you guys make quick in Party Town 402. Dan's on the core team heading the docks and, you know, Clear Spend.  I think they made the biggest contribution and stitch like found all these companies to put money forward and to.
[03:15:31] uh, basically make this whole thing possible. Um,
[03:15:36] And I honestly didn't even have to lift a finger. So really cool to see this happen. I'm going to be so excited for next week when we can see the full list of submissions that come in.  And I know that the team committee in charge are going to be pouring over all of them. And, you know, we've got the voting system and all that set up. So really, really quite, quite exciting stuff.
[03:16:02] this whole thing and the fact that, you know, the community has grown to the part, not only that this is possible to put, being able to fill backfill those kind of libraries and, you know, build out an ecosystem this way. It's really cool. We're,
[03:16:18] we're looking at potential to do more of this stuff in the future, actually.  And we've been collecting the money from Open Collective, like all the donations.  And we're looking at different ways we can use that money to fund more efforts and put it back in the community.  Because there's some legal fees and like some administration stuff.  But for the most part, we're looking at the money.
[03:16:42] I mentioned before that my bottleneck is time.  So I think there's a lot of ways to award contributors,  people who put significant effort in,  and give their time to make solid better.  So we're looking at different avenues  even beyond the hackathon in the future.  But I'm just so glad that so many people have decided  to kind of participate and make the ecosystem  that much better.
[03:17:08] Thank you.
[03:17:10] Yeah.
[03:17:14] Find and page multiple.
[03:17:20] - Nothing, okay.  Anyway, I don't know, anyone got any more questions?  I know the discussion at the beginning of the stream  was like pretty good, pretty heavy,  but I think we covered a lot of stuff.  We gotta leave some stuff for next week, as I said.  And we got a chance to look at all the salt hack stuff.  So,
[03:17:38] Plan is next week, we're going to look at Astro 1.0 beta and have Fred K. Scott kind of.
[03:17:48] leads the team over at Astro to join us and kind of look at how SSR changes the equation. I've got some great ideas for demos that I want to play around with. One of the ones I want to do is I want to remake that Hacker News demo like I always do. Now that it's dynamic SSR, we should be able to see if we can take
[03:18:09] Astro and solid together and remake
[03:18:13] the Marco demo and do it
[03:18:18] perfectly declaratively like Marco in that example,
[03:18:22] So I'm looking forward to giving that a shot.
[03:18:29] Thank you.
[03:18:29] Yeah, it is really amazing.
[03:18:35] Thank you.
[03:18:36] Thank you.
[03:18:37] Thank you.
[03:18:38] So, yeah, I think next week's going to be a lot of fun too.  And then probably by then the docs will be coming around for Solid Start.  And for after that, we can kind of look at where Solid Start is.  That's kind of the high level plan, at least for the next few weeks.  We'll see how it goes when we get there.
[03:19:00] But thank you, everyone, for joining me this week. And it was a lot of fun looking at these submissions and a lot of fun discussing this week in JavaScript. So thanks.
[03:19:12] I think I am going to just--
[03:19:15] sign off and,  uh,
[03:19:18] Have a good weekend.
[03:19:24] Mm-hmm.