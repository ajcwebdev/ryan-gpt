---
title: "gfKrdN1RzoI"
slug: "gfKrdN1RzoI"
duration: "4:13:50"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/gfKrdN1RzoI.m4a"
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
[00:02:08] All right. All right. Hello, everyone, and welcome to my stream today. Um,
[00:02:14] Just getting set up, sorry I'm running a little bit late. I was pushing commits as of like
[00:02:20] five minutes ago.
[00:02:22] Thank you.
[00:02:26] I wanted to show something off pretty cool in the stream. I'll be coming up with a bit.
[00:02:31] Um,
[00:02:32] But yeah, I'm pretty excited.
[00:02:34] There's some speculation into why I chose this topic today.
[00:02:39] But yeah, I see all the birthday wishes coming in, starting with my dad, although I think you've got to fix up your last name.
[00:02:47] um
[00:02:48] But, yeah.
[00:02:51] Thanks, dad.
[00:02:53] But yeah, thank you for the birthday wishes. Today's my birthday. I think my birthday fell on a stream a couple years ago as well. I don't know. I did an AMA. Maybe it was just birthday week. I can't remember now, but...
[00:03:08] It is my birthday and I am streaming.
[00:03:11] thank you everyone a lot of people saying happy birthday
[00:03:16] Am I drinking ketchup? No, this is a smoothie my wife made. It's like a beet and...
[00:03:24] Goodbye.
[00:03:27] Mmm, that's sweet.
[00:03:28] Only banana
[00:03:30] Strawberry.
[00:03:31] Thank you.
[00:03:32] Yeah.
[00:03:32] Thank you.
[00:03:34] Thank you.
[00:03:39] Thank you.
[00:03:41] Thank you.
[00:03:43] Thank you.
[00:03:48] I just scroll down all these for a while. Very appreciated.
[00:03:54] Hmm. Yeah, I've been hearing a lot about people having birthdays either today or around around the same time. My old boss actually had his birthday, I believe.
[00:04:05] Was it the same day or the 8th, like the day before? The guy who created knockback?
[00:04:11] Thank you.
[00:04:14] Thank you.
[00:04:15] Thank you.
[00:04:16] Hmm. Iniquil. Dave.
[00:04:22] *thud*
[00:04:23] Am I going to announce server components? RSC is Ryan's server components. No, not exactly, but we will talk about server components today.  I just want to put it out there for people thinking otherwise. The topic today is not necessarily... We're going to talk about GraphQL, don't get me wrong, but it's not necessarily just about GraphQL.
[00:04:43] Um,
[00:04:45] *sniff*
[00:04:50] So yeah, a lot of happy birthday wishes coming out here.
[00:04:56] All right. I think I'm almost done scrolling through all of these.
[00:05:06] Ryan Florent serialized components, yeah.
[00:05:13] - Very random question to you,  but do you feel web technology frames  should look into offline first more than they are?  It's somewhat hype in mobile world,  but it has no buzz in the web world.
[00:05:21] Well, the funny thing is it was...
[00:05:24] Hot, hot,
[00:05:25] For like a couple of years there.  And then something...
[00:05:28] flipped around 2018. Can't say what, but like almost everything was in conferences was talking towards it. It was all about PWAs. We were creating really smart
[00:05:40] smart like
[00:05:42] data layers in the client.
[00:05:44] Like this actually ties a bit in today, today, because it was like around the pinnacle of GraphQL time period that everyone's talking about it. And then everything just switched.
[00:05:54] All right. Thank you for birthday wishes.
[00:05:58] I just can scroll down these forever.
[00:06:01] Right, solid Carnietto components, there you go.
[00:06:04] Yeah, we already got our RSCs.
[00:06:09] Thank you.
[00:06:11] Thank you.
[00:06:12] Yeah, it's just interesting because the framework side almost completely just failed. I mean, it was a tricky problem in that the frameworks themselves didn't have much to add to it, more of the data fetching layers. But I guess if you just look at the companies people were working for at the time, it just
[00:06:27] It just never really went anywhere.
[00:06:29] from the major frameworks at least.
[00:06:34] There you go. Happy birthday.
[00:06:39] Thank you.
[00:06:42] It is the ninth where I am right here.
[00:06:44] Thank you.
[00:06:48] Thank you.
[00:06:48] Thank you.
[00:06:49] Thank you.
[00:06:52] Anyway, how does it feel the P20? Nice try.
[00:06:57] you
[00:07:01] Oh man, like double that.
[00:07:05] Anyway, um, guys, um...
[00:07:09] Thank you.
[00:07:11] .
[00:07:12] We should get started here. I should tell people that I'm online. Give me two seconds. Let's retweet.
[00:07:20] here. I should have done it earlier to let the...
[00:07:24] The Twitch people get past that pre-roll, right?
[00:07:31] Ooh, that's an interesting view, but I don't like it.
[00:07:34] Thank you.
[00:07:35] Thank you.
[00:07:37] Well, hee-be.
[00:07:39] Thank you.
[00:07:40] Alright. Cool.
[00:07:43] Thank you.
[00:07:44] Oh yeah, I didn't put the Twitch link in this time.
[00:07:47] I won't.
[00:07:49] as I usually do.
[00:07:51] This will actually drastically affect people on Twitch probably.
[00:07:55] How many people are on Twitch right now?
[00:07:57] Let me take a look. I just opened Twitch and it says zero, but I can see you guys in the chat, so I know that it's not zero.
[00:08:03] Wait a leg, Twitch.
[00:08:07] At least one, yeah.
[00:08:10] Issues with Twitch right now, yeah.
[00:08:12] Okay.
[00:08:13] Yeah, there's no one here.
[00:08:17] Well...
[00:08:21] Yeah, that's very vented.
[00:08:25] Thank you.
[00:08:26] Thank you.
[00:08:33] Okay.
[00:08:34] Okay.
[00:08:35] There's a hype train going on though. Level 2 hype train with no one here, right?
[00:08:41] Hopefully you guys on Twitch all got subs last time, two weeks ago.
[00:08:46] PatrickJS, I believe, came on and gave everybody subs on the channel, like 100 subs. So, hopefully, you guys are all still living off that and can avoid those Twitch ads so I don't have to delay starting as much.
[00:09:00] and
[00:09:03] Yeah, I have no clue why this is zero people on Twitch. It's fine.
[00:09:07] There's 100 people watching overall, so I don't know if the Twitch numbers aren't rolling in properly.
[00:09:14] Thank you.
[00:09:16] We are bots.
[00:09:20] bots for my birthday thank you all
[00:09:28] you
[00:09:33] All right, all right, all right, all right.
[00:09:37] Just finishing up my smoothie here, 'cause I also have
[00:09:40] Thank you.
[00:09:42] *sniff*
[00:09:42] more conventional
[00:09:47] Lemon ginger drink.
[00:09:50] Hmm. Gotta stay hydrated here.
[00:09:53] Thank you.
[00:09:53] Okay, okay.
[00:09:55] Let me pop back out here. Yeah, so...
[00:09:59] Thank you.
[00:10:00] I do want to...
[00:10:04] I'm going to start this off by just saying I am not suggesting that people
[00:10:10] I'll make a mass exodus from GraphQL. There was like a conversation like that a couple of years ago.
[00:10:15] Um,
[00:10:16] maybe like late 2022, I want to say. And, you know, everyone was like, you know,  TRPC and this is the new this and all that. And, um,
[00:10:26] Yeah, I mean, I don't care. These trends
[00:10:30] I'm looking at purely from a technology side and what it means to be using it.
[00:10:38] I...
[00:10:39] Thank you.
[00:10:39] know that GraphQL has a long future, especially in enterprise, being able to make that level of contract between all your data services is incredibly powerful.
[00:10:52] Tons of companies are still investing in it, especially larger companies, and it's like
[00:10:59] It's not even like exist because they have existing stuff like new
[00:11:04] companies, large companies are continuing to adopt GraphQL because of what it can do.
[00:11:09] So GraphQL,
[00:11:12] in itself.
[00:11:14] is not going anywhere. I just want
[00:11:17] The whole...
[00:11:19] This whole conversation and the title of the stream, uh,
[00:11:23] comes from actually, I don't know how true this is.  I heard it from members of the React core team,  but basically the journey to how we got to server components is
[00:11:33] started
[00:11:34] with a conversation or a document, you know, internal draft, so to speak, that was like, what comes after GraphQL? So this whole stream title is actually playing off this document that apparently was written by the React core team circa 2016, I believe.
[00:11:52] Some people said that Sebastian Marquardt is the
[00:11:56] Thank you.
[00:11:57] original author of said document. I don't know all the details.
[00:12:01] but
[00:12:02] They were looking at...
[00:12:05] where things had gone to react at that time period and looking where they could take things forward.  They're probably pretty happy patting themselves on the back where in that point reacted gone mass adoption.  Um,
[00:12:18] as being, you know, getting used in Facebook, probably big plans with a rewrite right around the corner. And they wanted to think of like,
[00:12:26] What can they do here? Like, because
[00:12:28] While GraphQL is incredibly powerful, and we're going to talk about that today, you know, especially with the stuff that the patterns they set up at Facebook, like,
[00:12:36] Like, um,
[00:12:38] Relay, it wasn't like something people could just pick up off the shelf.
[00:12:44] My understanding of how the history goes is that the React team actually went through a few different iterations before they landed on server components.
[00:12:54] The reason we're here today is I want to talk about
[00:12:58] you know,
[00:12:59] mechanically what GraphQL actually enables and actually see if these successors actually are true successors or, you know,
[00:13:08] even alternatives to cover the bases. And at the same time, I've been working on something really cool with SolidStart and I want to show you guys what I've been doing because
[00:13:17] I don't know. I think we have options here.  I think there's more to the world than just server components.  So let's, you know,
[00:13:26] With that in mind, we can get started here.
[00:13:28] -
[00:13:30] uh yeah more happy birthday wishes it's awesome
[00:13:35] Yes.
[00:13:36] All right.
[00:13:39] *laughs*
[00:13:40] all right
[00:13:49] Yeah, the case of GraphQL is stronger when you have multiple APIs you want to unify access to that makes zero sense if you're a small web app with single API, in my opinion.  Yeah, for sure.
[00:13:57] Oh.
[00:14:00] Yeah, and there's a connection here.  It was a long path, but there's definitely...
[00:14:06] you know,
[00:14:07] a connection here. I mean,
[00:14:09] It's an urban legend. I mean, I don't know.  I heard it originally  from Danny Vermouth himself.
[00:14:16] So...
[00:14:18] I don't know who else has other sources.
[00:14:20] But yeah
[00:14:24] sharing types between languages. Well, and this is what I get to. I, I, I, one of my absolutely favorite, um,
[00:14:33] posts on the topic came from our friend, Theo.
[00:14:38] He makes great graphs.  I try to make graphs, but my graphs make sense to like...
[00:14:44] way less people.
[00:14:45] And this is
[00:14:48] TRPC is not the death of graph here. It just means I reach for it way less. Yeah, he's he's suggesting that
[00:14:55] So
[00:14:57] It's funny because when you look at this thing, you're like, okay, GraphQL is a good chunk of the graph.  REST is a good chunk.  And TRPC is this little square.  The thing that...
[00:15:05] This table might not be suggesting on its
[00:15:09] Oh, because when you read this table,
[00:15:11] Nobody's offended. Everyone's like, yeah, this is clear. You have the GraphQL people going, yeah, this makes sense. You have everyone disagreeing. This is a good thing.
[00:15:19] The part that Theo doesn't
[00:15:21] really highlight so much, although he suggests it himself here very subtly is
[00:15:27] For what he cares about and what a lot of people care about...
[00:15:31] is literally just in this first quadrant. And you might be going like,
[00:15:35] Well...
[00:15:37] Why? Well, I mean, there's always going to be large companies. There's always going to be large scale. There's always going to be different companies having to interrupt each other, different teams and all that. But...
[00:15:47] If the technology continues to improve and be easier to build with, you can do more with less developers. You don't need as many teams. You shrink it down naturally. So if you're working in the zone of startups,
[00:16:02] Like,
[00:16:03] Think about the number of developers you needed
[00:16:07] to accomplish a very interactive client heavy app.
[00:16:12] at various phases over the last 15 years. And what, you know,
[00:16:16] Theo's suggesting is, you know, you've got your SaaS company.
[00:16:20] I mean, I'm putting words in his mouth, but this is my take on it.  You have your SaaS company, you're delivering some kind of
[00:16:27] digital product.
[00:16:28] You have a website to serve it and administrate it.
[00:16:32] you know maybe an admin dashboard
[00:16:34] Like,
[00:16:35] You're not in different company zone.
[00:16:39] You're probably not even these days, not in different team zone.  You can just like serverless up your your infrastructure.
[00:16:46] You know, and then it's like,
[00:16:49] Why aren't you just on TypeScript?  Like, basically...
[00:16:53] his sphere and a large sphere of, especially people working in startups,
[00:16:58] is just that first sphere.  So this is a very, very important sphere  for a whole range of people and developers  just building products every day.  There's obviously the larger companies  and there's obviously other things,  but this first quadrant is increasingly important
[00:17:16] important.
[00:17:20] Thank you.
[00:17:21] So just to put this in perspective, but I like that almost no one disagrees with this. I remember  there was this debate I went to that was like GraphQL versus TRPC. And unfortunately, Alex  creator, or I guess not technically creator, but basically the TRPC guy at this point, because I  believe TRPC was originally created by the guy who created Zod. But anyways, let's face it, Alex is
[00:17:47] uh, basically done the
[00:17:50] or and his other maintainers, the core of all the work over the last couple of years.
[00:17:55] He he he turned his back and he didn't come out. So Theo was it sat in for him. And the debate was like the most boring debate ever because they just sat there agreeing with each other the whole time. They're just like, yeah, yeah. Like they could have just like brought out this this table at the beginning and been like, OK, we're all good.
[00:18:11] End of debate.
[00:18:12] And
[00:18:15] Thank you.
[00:18:16] The truth is, on a technical matter, a little bit more nuanced. And I want to dig into this a little bit, especially on where GraphQL fits in this first quadrant, because I sat there and talked with Alex a bit about this. He's a huge fan of GraphQL, by the way. And
[00:18:35] I think...
[00:18:36] I think we have to kind of understand what these things...
[00:18:41] actually mechanically do
[00:18:42] to understand what we're giving up when we make these trade-offs and why we do it.
[00:18:47] Thank you.
[00:18:50] Okay, what do we got here in chat?
[00:18:53] It's interesting that GraphQL's mutation command,  query, notification, middleware.  I wonder if you need to learn CQRS to know how to think about it  when honestly you pull advantage of it at the edge,  at the same where optimistic updates come from, blah, blah, blah.  That's something.  But the interesting thing is,
[00:19:06] Most of these, maybe not, you don't have subscriptions mentioned here, which is
[00:19:12] Yeah.
[00:19:12] Good because that's WebSockets that staple. But I was going to say, I guess, maybe notification. Most of the mechanisms and most importantly, the CQRS mentality persists in a lot of the solutions that would replace the.
[00:19:28] GraphQL, interestingly.  I think that was one of the biggest influences.  I know it influenced what...
[00:19:36] what I was doing with Solid immensely. It's why
[00:19:40] I didn't.
[00:19:41] go with pattern similar to Remix.
[00:19:43] was because of GraphQL.  I did not
[00:19:48] like the idea
[00:19:50] that
[00:19:51] my
[00:19:52] Mutations?
[00:19:54] should be RESTful. I was like, no, they should be RPCs. And GraphQL is kind of interesting in that. So maybe we should talk about GraphQL. Are you all familiar with GraphQL at a base level? But I think that's where we should start.
[00:20:09] I
[00:20:11] Right.
[00:20:13] Yeah, and I've shown this before, what I called the slippery slope of front-end data fetching. This idea that we started
[00:20:22] at
[00:20:23] having very simplistic means that weren't capable of doing much.  And then over time, we got better and more sophisticated,  till we hit the pinnacle around GraphQL,  and then we just started sliding off down the other side again.
[00:20:37] And there's a reason for that as well, which we'll get to today. But
[00:20:42] In a lot of ways, GraphQL
[00:20:44] represents
[00:20:46] a pinnacle of data fetching patterns.
[00:20:53] Thank you.
[00:20:56] Thank you.
[00:20:58] Thank you.
[00:21:00] So yeah, where should we get started?  Let's get started with GraphQL.
[00:21:05] I personally, my experience with GraphQL was awesome.
[00:21:09] Super stoked about it early on, like 2015, 16 time period.  I built my own ORM.
[00:21:16] Well, it's part of a project that did, but what I ended up doing, let's get a little
[00:21:21] background here you got to understand like let's see backbone orm can i find it here it still exists
[00:21:28] Hehe.
[00:21:30] I don't think this would ever show off what I want to show off.
[00:21:34] on this page because it was just a silly ORM, but the key part was that it used the same  backbone models for client and server, so you essentially could generate queries
[00:21:45] from the client and have it use HTTP to serialize them. They're almost like Mongo format.
[00:21:51] over the wire and then have the controllers basically feed that into models on the server. And the big thing was we spent a lot of time the query language, which is Mongo based. And you know, if anyone's ever used MongoDB, they know that it has like dot notations to go into sub documents. Well, we use dot notations to represent relationships. So I spent
[00:22:13] like largely some of my earliest AST work was taking like this dot, this dot, this, like creating joins out of MongoDB queries across database tables and creating optimal data fetching from basically JSON MongoDB syntax against SQL.
[00:22:31] This version that was released didn't have all the goodness and only let one depth, like single dot notation. And I bet you there's not a single example here showing how it worked. But what was really cool is we could project or query against any sort of data. We could be like, get me the users who have cars that are blue, you know, essentially.
[00:22:54] and using all JSON syntax that automatically serialized.  And we focused a lot on the query side because we cared a lot about auth.  We'd be like, you know, people in these groups who also
[00:23:08] have, it was about kids photos. So it's like people like find me like people who are in these groups or who have kids in these groups, which, you know, would be able to, you know, meet this sort of auth criteria, you know,
[00:23:22] you know,
[00:23:23] That sort of thing. And it was a really crazy thing. And we're building this back in 2012 or 13, because there was no great solution for it.
[00:23:31] And then...
[00:23:33] You know, like what's cool is you could do cross model things.  So the client could ask for exactly what it wanted.
[00:23:40] But then, yeah, about a year later, Facebook open sourced their secret sauce that they had been developing, which
[00:23:48] In some ways it was a lot better than this, but in some ways kind of worse. But it doesn't really matter. We eventually ended up moving to GraphQL and I was a big fan. We focused a lot on cross model queries and we had some level of projection where GraphQL
[00:24:05] is all about projection. It's about being able to, um,
[00:24:11] It's about being able to describe the shape of your data  and then have the server return exactly
[00:24:18] the fields you need. So it prevents overfetching.  And the way it accomplished this is through
[00:24:25] schemas.
[00:24:27] Very tightly designed schemas where essentially...
[00:24:33] you could describe, you know,
[00:24:36] relationships.
[00:24:38] between data
[00:24:40] And this is basically what you would crawl in order to get it. So you can you could get very specific, like give me heroes, give me their name, give me their friends, the name of their friends, you know, what homeworld, the name and climate of that homeworld, you could basically just walk across.
[00:24:56] Huge amounts.
[00:24:57] of data in your database in a single query  without worrying about like,
[00:25:02] Um,
[00:25:03] which rest endpoints you have to hit.
[00:25:07] Right. Because a lot of the challenges of like...
[00:25:12] "How many friends does our hero have?"  Like maybe you put a query,  "Show me the first five friends."
[00:25:17] like all those N plus one problems are now pushed to the server backend rather than like a client.  It would be terrible if you're in the browser and you're like, give me the hero and get me with their friends IDs.  And now go fetch each of those 20 friends and then fetch each of their homeworld.  Like, but that's how things were, generally speaking, right?  If when you were following very simplistic REST scenarios where each resource owns its resource, doing cross record,
[00:25:47] projection
[00:25:48] was not
[00:25:50] terribly common. We built our own system is what I was showing you a minute ago with backbone ORM.
[00:25:56] Thank you.
[00:25:57] And why was this important? Well,
[00:26:00] Uh...
[00:26:01] Funnily enough, my understanding is GraphQL really got to prominence within Meta was through their mobile app initially, actually, needing to pull information for like feed stories.  Because they're an example of amalgamation where you have like the core, let's say feed or stories, you know, kind of thing.  But then you're pulling all this other specific information, maybe based on the type of story it is, maybe based on, you know,
[00:26:27] you know, like
[00:26:30] you need to show certain information about certain users, certain groups of their friends, etc.
[00:26:40] Thank you.
[00:26:43] Thank you.
[00:26:44] Yeah, so are we talking about database denormalization and stuff?
[00:26:51] Um...
[00:26:52] Yeah, I mean, this is incredible.  And what was really cool about this layer is,  it's completely an abstraction.  The implementation on the server,
[00:27:00] doesn't really care. As long as you follow the scheme on both sides, you can have your GraphQL server written in Java or Go or whatever, and the client just gets to ask what it needs. So once you understand what the contract looks like,
[00:27:11] Both sides can go independently build.
[00:27:13] their pieces and meet in the middle. I mean, I, I, I, the rewrite of, uh, Vidigami, um, that was  basically the thing. We basically had like team A, team B, and they just kind of went off independently.  You know, in our case, we were doing our backend in JavaScript or TypeScript technically, and then  GraphQL would like auto-generate the types for the client side, but we could kind of spoof them  while we were mocking things as long as the schema was good. And I spent a lot of time
[00:27:41] even before we did the rewrite,  taking the domain model,  like of how we thought things would work  and looking at the...
[00:27:50] Looking at both the database model that we wanted from a, like a,
[00:27:55] realized point and then also making a GraphQL model.  And I basically just modeled everything between, you know,
[00:28:01] typical database modeling tools, use GraphQL to figure out our API schema.  And I basically was like pretty happy before we did a single thing  that I designed this whole system picture.  As I said, picture something kind of like
[00:28:15] Instagram
[00:28:16] but for kids with incredibly stringent, um,
[00:28:21] off
[00:28:22] considerations in terms of visibility, who could see stuff like very locked down.
[00:28:27] So it's like a complete social media app. People posted stuff, people left comments, likes, you know.
[00:28:33] But...
[00:28:34] Yeah, I mean, GraphQL is kind of incredible. Hey, thanks Aiden.
[00:28:40] Sorry, I'm trying to sneak in all the birthday wishes in.
[00:28:44] as people join on the stream.
[00:28:51] Michael, sorry.
[00:28:53] All right.
[00:28:55] Yeah, people talking about Mongo's query language or now I guess DynamoDB is pretty similar.
[00:29:00] Um,
[00:29:01] But what I'm getting at is
[00:29:04] like
[00:29:06] This...
[00:29:08] It's pretty easy to see why people wanted this. It's pretty incredible.
[00:29:14] and
[00:29:15] The you could just the thing is, it did a lot more than that,  because once you've set up this language and this ability to query like this,
[00:29:26] People.
[00:29:27] took it to the next level.  And by that, I meant...
[00:29:32] I was already talking about the feeds.  The thing is, sometimes different parts of the page
[00:29:37] would know...
[00:29:40] that
[00:29:41] they need different pieces of data, right?
[00:29:44] Right.  Let me...
[00:29:46] Let me see if I can, I'll just grab a polydocs.  It doesn't really matter where I go here, but
[00:29:51] This idea of a fragment where you could basically go, hey,
[00:29:55] This is a part of a query on person. So I need these fields on
[00:30:00] person.
[00:30:00] Someone else could need...
[00:30:02] this field on person and then you could kind of
[00:30:05] spread them in. So you could actually
[00:30:08] distribute your query definition throughout your source code based on which components or which piece of your app you want to draw and then have them
[00:30:17] basically come together to form a single query that could pull them all
[00:30:21] you know, at once, right?  And this is kind of a dream,
[00:30:25] you know, the thinking is because you could basically just know exactly all the data you need
[00:30:30] and pull it all up.
[00:30:33] you know, in once. Now, don't get me wrong, there's complication to this, right? Because,
[00:30:38] One example that comes off to mind is what if some data takes longer to fetch than other data? People started adding directives like add defer and stuff so they could stream part of it.
[00:30:50] a lot of things. The other really obvious one is how do you stitch this together, right?
[00:30:55] Because, you know, at the time GraphQL first came out, a lot of us were doing really dumb stuff and just putting our whole app as a single JS bundle. But consider the scenario now where you're code splitting routes and the, you know,
[00:31:09] You have data for maybe the top section of your app that's shared on all the routes and then different pages underneath have different data and you're kind of trying to stitch them all together.
[00:31:18] Basically,
[00:31:23] You need to import them, but you wouldn't want to import the code.  So you needed to kind of like have the code be code splittable, but these fragments be
[00:31:31] addressable outside. And the thing is, I mean,
[00:31:35] People were solving this nested router patterns, figuring out ways to hoist stuff into like data, like client side data loaders on nested routes that they could parallelize, getting around stuff. And you can do something like Apollo and you can basically just import.
[00:31:51] You could basically have a My Component
[00:31:54] So like user component dot TX, and then beside it user component dot,
[00:32:00] fragment or data, and you put all your fragments there, and then your route
[00:32:04] or wherever you create the query could import those fragments and stitch them in to this particular  page so it can know what to do. There's also solutions like Relay which would automatically  use a compiler and walk through all your code looking for fragments that it could  automatically merge itself. Sorry, just give me a second.  I'm sure people are trying to wish me birthday wishes right now. Yeah, with my dad.
[00:32:29] Anyway.
[00:32:32] Like,
[00:32:33] But kind of conceptually the same idea.  You would try and...
[00:32:39] bunch all the queries together, like all these fragments, very specific needs. So it was kind of like, technically, you always have to hoist data fetching, there's no such thing as local fetching without waterfalls. But
[00:32:52] You know, we could use a compiler or some kind of tooling. That was, you know, part of the allure here.
[00:33:00] But
[00:33:01] I don't know how many of you have made GraphQL
[00:33:04] applications in practice, like where you've actually designed a GraphQL server, actually built applications or like built on it. I just want to see some people just in the chat. Give me give me give me an idea if you guys have done this.
[00:33:17] - Thank you.
[00:33:17] I have, as I mentioned, completely rewrote our application.  We went from a knockout app to a React app.
[00:33:25] with GraphQL.
[00:33:29] Bye.
[00:33:30] You have two companies. I love Relay.
[00:33:34] We used Apollo when we did it.  I got...
[00:33:38] Yeah.
[00:33:39] Yeah.
[00:33:41] yeah  still graphic on production  you know
[00:33:46] Yeah, used Apollo.  Yeah.
[00:33:48] A lot of Apollo here, some people use relay.
[00:33:52] It only happened, we were used to React Native. We'd mixed knockout signals with React Native before. And when hooks came out, we were like, "Oh, maybe we don't need signals anymore."
[00:34:04] It was interesting because we learned a lot of things of how hooks are not signals in that process.
[00:34:09] Um...
[00:34:11] Anyway.
[00:34:12] But our first use of React was actually React Native with knockout observables or signals.
[00:34:23] Relays is awesome.
[00:34:28] Gatsby.
[00:34:30] Yeah.
[00:34:34] Well, I mean...
[00:34:38] It's because if you were looking for, it's not, I don't know if it solves, okay, it does solve a specific problem really effectively, but it also can be.
[00:34:47] taken as like, if you're told that you had to choose one solution that could solve everything,
[00:34:53] Forever?
[00:34:55] Maybe not the best for certain things because it's overkill, but if you could pick a solution that would just be like look if
[00:35:00] I, you know, I don't care. I don't want to be, you know, I want to incur not even technical debt isn't the right term. Like, I want to make sure that my solution will work with anything I throw at it. Like, you know, the overengineering kind of mentality of things. Like, it's hard to go wrong with GraphQL, right? Like, it can literally just do everything.
[00:35:21] I'm talking about the data fetching model here and the use of fragments. This use of fragments was actually really inspired a lot of the loader work that had unsolved because
[00:35:33] I too have been trying to find simpler things after GraphQL.  So when I first added like,  I'm not like remixed loaders exactly,  but like a client side parallelized data fetching,
[00:35:44] my thought was that people would just co-locate the,  almost like fragments, the queries  with the components they wanted,  and then they import them into the route load
[00:35:55] um data load function um maybe use a convention so you just go component.data or page.data like  whatever the thing is and then you'd import them all to where you do your fetching and then you  call them all up there like
[00:36:05] I was very inspired by GraphQL on this fetching side of things.  I was also on mutation, which we'll get to in a minute, but it seemed that like,
[00:36:15] The thing is that what you could never...
[00:36:18] Do
[00:36:19] that GraphQL did really well was
[00:36:23] was this idea of...
[00:36:26] How it managed...
[00:36:28] the client side cash.
[00:36:31] Thank you.
[00:36:33] I now see a much more surge in frames with react query. Okay, we'll get there in a minute. Yeah.
[00:36:39] Um,
[00:36:43] Thank you.
[00:36:45] So...
[00:36:46] The thing is,
[00:36:49] The thing that makes GraphQL so amazing...
[00:36:53] is its caching mechanism.  Because yeah, fetching, getting everything  on a single flight request is awesome.  You will get rid of waterfalls.  But technically it's just hoisting.
[00:37:03] Whether you have a compiler do it, or you relay, or you do it manually,
[00:37:10] You could...
[00:37:12] Just do that by hand and it's actually not that much work. You just go like I
[00:37:17] Get me it hoisted into the same zone now. Don't get me wrong.
[00:37:21] The fact that it could do these joint queries meant you weren't doing multiple fetches or things that depended on other things.
[00:37:28] those problems are all solvable when your code's in the same location.  Like when it doesn't have to be declared there,  but when you're importing like,
[00:37:35] into the same location, all those problems are solvable. You can go, "Okay, this API is  inefficient. It's causing waterfalls on the client. Let's just think." You can see it in front of your eyes.
[00:37:45] Like, this is not...
[00:37:47] You know, like if your waterfalls are spread throughout your app, you don't know what the hell is going on.
[00:37:54] But if you
[00:37:55] pull them all up to the like routes level section,  you know, loading section,  then you immediately can tell when there's waterfalls.  You understand how the data flows through your app, right?  So that's all GraphQL did on the fetching side.  It just, you know, they were smart, um...
[00:38:13] I saw some really clever solutions that would render React components just to get the GraphQL query out of it, and then fetch the data and then render it for real. I mean, these are all really clever UX things, but from a UX standpoint, that's kind of horrendous. Can you picture like,
[00:38:31] rendering a React app
[00:38:33] More...
[00:38:34] then you already have to like
[00:38:36] How many times do you need to re-render your React components? Like, really? So like,
[00:38:44] But you can...
[00:38:46] Like these are all ways to just automate the fact that we just need to hoist the data.  Like undeniably, we're hoisting the data.
[00:38:53] So...
[00:38:56] .
[00:38:57] Nobody ever got fired from unless you work with Theo.  You guys are...
[00:39:02] Ugh.
[00:39:04] Okay, so...
[00:39:06] *laughs*
[00:39:08] Thank you.
[00:39:11] Right, if loaders could automatically fetch... and I've seen solutions do this. The only way to do this is compilers, though, because you're code splitting considerations and your view-based waterfall.
[00:39:20] Essentially, you
[00:39:21] The only way to avoid waterfalls is either hoist it yourself or get a compiler to do it.
[00:39:27] Every system that does localized data fetching in the components
[00:39:33] will eventually, as optimized, will become one that hoists it.  Right? You're always just inventing a system to hoist data vetting.  That's just how this works.
[00:39:42] local data fetching and components from an optimization standpoint,
[00:39:48] is never basically the solution, but we'll get to that more in a minute.
[00:39:55] Okay.
[00:40:00] Okay.
[00:40:01] *clicks*
[00:40:03] Thank you.
[00:40:04] So this cache is magical, which is like the one difference here, because
[00:40:09] Like,
[00:40:10] And these fragments can merge.  I wasn't too clear on it,  but if one component needs one field of user  and another one needs another one, they can merge it.
[00:40:18] It's kind of tricky to use any system that doesn't involve exporting from the child the raw query pieces rather than the data fetching itself to merge.  So there are things that make GraphQL interesting.
[00:40:32] even better than simpler
[00:40:34] solutions.
[00:40:35] this cash was crazy because they use something called a denormalized cash.  So they could tell based on like,
[00:40:43] schema and relation
[00:40:46] Um,
[00:40:47] Like,
[00:40:48] A way of thinking about a denormalized cache is,
[00:40:51] You've ever seen a list where you have like 10 posts, like a blog site, and then you go into one specific post and you have...
[00:40:58] the same story, but
[00:41:00] of one of those blogs, but now with a bunch more details.
[00:41:04] So two ways to look at it is the fragments are sort of like the,
[00:41:09] In your cache, when you load the listing page, and then you click into the specific page, you actually already have the data.
[00:41:16] for maybe not all the fields on the page,
[00:41:20] but the, you know, like the title and, you know, maybe the caption. So
[00:41:27] With the schema from GraphQL, it would know that those are the same things.
[00:41:31] Similarly, if you reloaded the whole page on one of the
[00:41:35] on one of the pages, you'd have all the details for one of the stories. So when you went back to the
[00:41:40] the listing page, technically you already had all the details you needed for one of those things in the list.
[00:41:46] This is really, really powerful when you think about it in theory.
[00:41:50] Challenges in practice, as you can tell, is you never have all the data.
[00:41:54] Um,
[00:41:55] you know, in those cases usually, like
[00:41:58] unless you load all the data for the next page,  like when you're going into the details on the listing page,  which you probably wouldn't want to do, because that's overfetching.
[00:42:05] then you're going to have to go back and probably hit this exact same database table. Yes, you can cut down on the stuff transferred because you go, oh, I don't need these specific fields. But I don't think in practice, the normalized caching actually ended up lending that much of a benefit because it's a good thing.
[00:42:21] Like,
[00:42:22] In extreme cases, you could optimize for it if you were very smart on how
[00:42:26] all these multi-page interactions would work.  But generally speaking,
[00:42:33] Like, because you're only ever dealing with pieces of it, there's a reasonable chance
[00:42:38] that
[00:42:42] you know, like you'd have to go to the source again anyways.
[00:42:45] especially if there's any commutation invalidation involved.
[00:42:49] but
[00:42:50] And I think I remember Tanner writing a blog article like
[00:42:55] five years ago about like why you don't need that normalized cash.
[00:42:58] It is incredibly powerful, though.
[00:43:02] Um...
[00:43:07] Caching is such a huge source of bugs. I agree. We can talk about this.
[00:43:15] Yeah, and this is why we've slipped down this case,  you know, while we're back talking about HTMax.  The problem is...
[00:43:25] *sniff*
[00:43:28] just because you can go okay well this causes a lot of bugs
[00:43:32] It doesn't make it more performant to not do it like
[00:43:36] The challenge here is...
[00:43:38] GraphQL
[00:43:40] with...
[00:43:40] also very, very performant.
[00:43:44] because
[00:43:45] When you did a mutation, you could tell it exactly what data changed.  So it would just update all the right spots.
[00:43:52] And only those things could update the change. Maybe you're feeding it to react and it didn't matter and you freaking re-rendered your whole page again. But
[00:43:59] Like.
[00:44:00] In theory, at least, and when not using React, you could basically apply fine-grained updates. It knew exactly
[00:44:10] what data changed.
[00:44:12] And
[00:44:13] You as a developer on those base cases didn't have to do anything except set up the schema
[00:44:18] return the right data,
[00:44:19] and set the go. The challenge is the reality and the promise
[00:44:25] Thank you.
[00:44:26] gap. And this is what happened. You start making paginated queries or doing mutations on these things. And
[00:44:36] you want optimistic updates and the process for all of these involved going in and writing to  the cache or being like okay take the cache data and then you have multiple states you're like okay  i'm optimistic in flight this is success case this is this is a fail case and you'd go through
[00:44:53] and you basically write all this cache updating logic.
[00:44:59] I knew I was in store for it and you can kind of copy and paste a lot of it.  Like if you like always made had a bunch of lists of similar type models, like
[00:45:06] image grids.
[00:45:08] We have a ton of them in our...
[00:45:10] photo sharing app, then like we can kind of like share the logic between pagination and kind of like encapsulate that and then like any image grid can kind of handle the pagination same way. But like, generally speaking,
[00:45:21] Like there was a whole bunch of these people
[00:45:25] logic about maintaining the cash.
[00:45:30] Thank you.
[00:45:32] Yeah. Yeah, of course. HTML is pretty easy to cache, but the problem is if you're
[00:45:38] If you're...
[00:45:40] you're already kind of like over serializing or over
[00:45:44] fetching what you need probably because view doesn't equal data.  And I think this is an important thing.
[00:45:50] distinction because
[00:45:53] Like,
[00:45:54] In one hand, you could say that the view has exactly the amount of data you need.
[00:45:59] right to display. But on the other hand, it's not able
[00:46:04] You're kind of forcing yourself along the lines of dipping or...
[00:46:09] Straight up replacing.
[00:46:11] I think this is one of the challenges between being data centric and being view centric.  And I'm going to use those terms a bunch today because GraphQL is a very data centric model,  or say RSC is a very view centric model. And
[00:46:25] In a sense, it's a very similar analogy.  Our signals is a very data-centric model, and the virtual DOM is a very view-centric model.  It has the very similar trade-offs.  There's a reason why signals can be so much more performant than the virtual DOM.
[00:46:39] Right?
[00:46:40] Oop.
[00:46:41] So like...
[00:46:43] There is an analogy here to kind of see in terms of stuff, right?
[00:46:50] granular patching versus diffing.  Like these kind of things carry with both approaches.
[00:46:58] Um...
[00:46:59] Okay.
[00:47:01] so
[00:47:07] Yeah, offline first and another is essentially the norm of cats. But the problem I was getting at is no one wants to write
[00:47:13] Like,
[00:47:14] GraphQL.
[00:47:16] was pretty optimal in most cases.  The fetch case we just talked about and then the...
[00:47:24] Mutation case we just talked about.  And then, like, there might be the mutation then fetch case.
[00:47:31] Um,
[00:47:32] GraphQL wasn't the best here per se.
[00:47:35] Because...
[00:47:37] But it wasn't bad. Like it could be good.
[00:47:39] Like, because what you do is you'd mutate the data  on the page you are, return the data that needed to be updated,  then you navigate to the next page.  You may already have the data you need on that next page,  not to fetch it again,
[00:47:49] or you'd probably do a second trip to the server to fill out the rest of the data as you needed.  So there was like a two step on the redirect case where you do like the post in the get. But
[00:47:59] Um,
[00:48:01] For the most part...
[00:48:03] GraphQL had the tools to be very efficient.  One of the downsides obviously were a lot of like,  DX considerations, like managing this cache.
[00:48:15] incredibly painful um
[00:48:17] There were some UX trade-offs too. Thighs.
[00:48:21] how big is Apollo client or relay client?  I'm pretty sure they're in the 30 or 40 kilobyte range.  Like these normalized caches are sizable systems.  It's like,
[00:48:32] You know, if you're doing simpler stuff,
[00:48:34] You don't need...
[00:48:36] to like, you don't like, why are you bringing in
[00:48:40] you know, 40 kilobytes more JavaScript. Your React is 43 kilobytes. This is 40 kilobytes. I'm talking gzip, minzip. So we're at 83 kilobytes now. I guess, are we server rendering with Next.js? So like we're at 120 kilobytes now. And
[00:48:55] we put hello on the screen, right?
[00:48:59] This is a sizable consideration, you know?
[00:49:04] And...
[00:49:08] That, you know, is, these are all things  that kind of came into the, like,  you ain't gonna need it category.
[00:49:15] Um,
[00:49:16] In some ways, we have never...
[00:49:18] reached the efficiency of GraphQL since.  None of the solutions that we pointed at have been able to give you that ability to be like
[00:49:29] so effectively be get things down to that granular data level where  even unrelated queries could update the same data sources
[00:49:40] You know, like it's not tied to the query.  It's not like,
[00:49:43] if you have a user query and a user's query being different,  like one's a list of users and one's a user.  With the GraphQL normalized craft,  that single user is the same as one of the users  in the user's query, so to speak.
[00:49:56] GraphQL,
[00:49:58] is
[00:49:59] Kind of incredible and nothing's really come to touch yet, but...
[00:50:04] We're not all...
[00:50:06] You know, where did we start here?  We're not all...
[00:50:08] in enterprise, we're not all here.  There's a lot of people who are kind of just sitting in this zone.
[00:50:14] And a lot of the benefits from GraphQL
[00:50:18] you could get
[00:50:20] Other ways, right? Like,
[00:50:23] Do-
[00:50:24] And this is what kind of started us down this path, because people doing...
[00:50:30] uh,
[00:50:31] this normalized cash, that was the first thing that went out the door.  People didn't want to handle the normalized cash anymore.
[00:50:40] Thank you.
[00:50:40] Thank you.
[00:50:42] Yeah. So like every day, right? I don't even know what that thing is, but I mean, it's kind of the baseline. It's,
[00:50:51] Thank you.
[00:50:52] I'm
[00:50:57] Thank you.
[00:50:58] Okay, yeah, okay. GraphQL, yeah. See, the thing is, and it's important, I like that you bring this up, because a lot of the problems is, we just kind of pushed the problem down the chain.
[00:51:09] GraphQL, the resolvers became the performance bottleneck on GraphQL, because now you have n+1 problem. People weren't optimizing it, and it was a little bit challenging of a problem because you'd have models and models and models and models. Like, I remember
[00:51:24] the work I was doing on my ORM, I would look at the whole freaking query and figure out how to make the best database query out of it.
[00:51:30] Most of the way people built resolvers was at a single tier.  So every single piece was a separate run to the database.  Every model was, you know,  and you could do stuff like M plus one to kind of improve that,  add caching layers in between.  But there was...
[00:51:46] a challenge in building that.
[00:51:48] Why the front end people like myself are making such a kind of applaud to GraphQL was,
[00:51:54] The network.
[00:51:56] is generally an order of magnitude more expensive in terms of the bandwidth.
[00:52:01] you
[00:52:02] If the same stuff that was happening...
[00:52:05] on the back end was happening in the front end, you would be your app would be dead in the water.  So it just kind of pushed it down the lane and you're going to see this pattern a lot.  RC's you're like, oh, waterfalls on the client, you know,
[00:52:19] Terrible. Waterfalls on the server, you know, Neo sunglasses, you know, like,
[00:52:24] Like,
[00:52:25] There is a bit of a history of that because...
[00:52:29] Generally speaking, the further you push these problems away from the client, the
[00:52:35] Um.
[00:52:36] Just getting it from the client to the server is like a 10x performance improvement, not because the server doing stuff on the server is necessarily faster, just removing the network cost. Network is just incredibly bottlenecking in all our considerations here.
[00:52:57] Thank you.
[00:52:58] Thank you.
[00:52:59] Thank you.
[00:53:00] Thank you.
[00:53:01] Right. So
[00:53:03] Anyway, where I was getting with this.
[00:53:07] Thank you.
[00:53:08] Thank you.
[00:53:09] you
[00:53:15] No one wanted the right to catch. So the first thing we saw was let's get rid of
[00:53:19] of the cache. How bad is it instead of having a normalized cache that we have a query cache?
[00:53:24] And, um...
[00:53:27] It's funny, if I go through this document here,
[00:53:32] I'm probably going to find where I made very similar claims on a previous stream.
[00:53:39] I could probably find like
[00:53:40] Okay, this one's about routing, but API as HTML, API as JSON, jQuery, API as state, API as normalized cache, yeah, yeah.
[00:53:49] Here we go.
[00:53:50] This is from a previous stream.
[00:53:52] But...
[00:53:54] GraphQL kind of comes here, and then we start going down the other side. So query cache, I mentioned React query, but I want to mention that I think it's also fair that we mention React.
[00:54:09] Okay.
[00:54:10] And even
[00:54:13] Yeah, basically any of these options which got away.  Because suddenly your cash mechanism goes from being...
[00:54:20] 40 kilobytes to being 9 kilobytes, right? It's much, much lighter.
[00:54:24] But is it as efficient?
[00:54:27] Thank you.
[00:54:28] Right, and the answer to that is obviously not.
[00:54:34] But what do we actually give up?
[00:54:36] with these models.
[00:54:41] Well...
[00:54:46] Thank you.
[00:54:48] The first thing that we give up
[00:54:51] when we go to query cache,
[00:54:53] is
[00:54:54] into normal-ex caches, that we don't have this
[00:54:58] fragment blending generally.
[00:55:01] Thank you.
[00:55:01] So like, um,
[00:55:05] I mean, you could still, because there's only really one version of it.  You're not model-centric, you're query-centric.
[00:55:15] Um.
[00:55:15] You could fetch...
[00:55:17] each resource for each page the way you want to, but you might have to fetch more often. Like, how should I put it, you can have a user
[00:55:25] for this page that's different than a user for this page. And you can put them under separate cache keys.
[00:55:31] like user and user details.
[00:55:34] Like they're not shared.
[00:55:36] anymore. You can still invalidate them both,
[00:55:39] by saying invalidate things that start with user. But like, you're, it's not,
[00:55:45] It's not like the data that sets the requirement, but the...
[00:55:50] the query, like the conceptual usage of it.  And this is a...
[00:55:57] This is definitely a drop-off, and it's why you kind of lose a bit on the Enterprise people.  But...
[00:56:03] on the positive is it's still relatively granular.
[00:56:07] If you're
[00:56:08] If you're working on
[00:56:11] you know, a user on one page
[00:56:15] like our specific post and you update and edit it and then you finish and you go back to the listing page, you do a separate query.  You don't save it, but you kind of had probably did a separate query anyways, as I mentioned a moment ago, like most of those cases where the normalized cache actually mattered.
[00:56:31] don't apply there. The other tricky part, obviously, is how do you deal with needing the data way down in your component tree?  Like what the shape is, what fields you need. Well, you kind of have to know all your data up front.  You can't just stitch the fragments together. And these query caches, though, generally de-dupe duplicate things.  So if you go...
[00:56:52] and run your page and call the same user query by...
[00:56:56] places on your page as you load it, it will get to the same single fetch or promise. So instead of stitching it via compiler,
[00:57:07] it essentially just deduped it.  And
[00:57:12] If you hoisted the initial fetch,
[00:57:15] up to that loader I said before.
[00:57:17] Then...
[00:57:19] kind of get the same...
[00:57:21] effect of basically doing, you know, per any given resource, a single flight.
[00:57:29] solution, so to speak. But conceptually, it's a lot like rest, right? Where you have like,
[00:57:35] The same things that you'd separate the resources for, like you have would be the different HTTP verbs, would basically be on the get side, would basically be very similar with this.
[00:57:50] system, right?
[00:57:52] you know,
[00:57:52] get all users.
[00:57:55] Get single user, separate query.
[00:58:00] Thank you.
[00:58:04] Thank you.
[00:58:06] In QueerCasted Architects, you give up the locality of behavior and your cache becomes distributed, which I think you're getting at with the point about conceptual disk. Yeah, yeah.
[00:58:14] But...
[00:58:15] Um.
[00:58:17] it's still data oriented or at least query oriented. You think about it, you still think about types of resources on your page, right? So if you update
[00:58:26] If you have like six different types of collections of data on your page and you update one of them,
[00:58:32] then you just update that one.  You don't go get all the data for your page.  You just get the data for the one thing that has changed.
[00:58:39] Right.
[00:58:40] So a lot of people were pretty happy on this side.  The challenge of course is GraphQL
[00:58:48] Like something like a query cache isn't enough.
[00:58:51] on its own to get all the TypeScript benefits  and all those, right?  So you could use Urkel, so you could keep using your GraphQL,  but with a simpler client.
[00:58:59] you could...
[00:59:00] You could feed your GraphQL through tan stack query.
[00:59:03] But this is where things like PRPC came in, right?  Because suddenly it was like, okay,
[00:59:11] we can generate
[00:59:13] You can describe the types for the server, and then we can basically use those types
[00:59:20] on the client again.
[00:59:22] I
[00:59:23] And we can get this end to end TypeScript.
[00:59:26] I have to admit,
[00:59:28] TRPC came out at a time that I was already working on something else. So I don't know, like, does it, does it use type gen to generate the types? Um,
[00:59:39] on both sides or like it does a trick with imports.  I actually don't know the mechanism behind how tRPC does.  And I'm sure someone in chat can tell me because I said,  I was already kind of working on the next thing.
[00:59:51] when it came out, but it was definitely...
[00:59:54] If you combine
[00:59:57] TypeScript on both sides to give you that schema without
[01:00:00] a special schema.
[01:00:01] and something with Zod style validation or something like that, and you combine that
[01:00:07] with query catches, you have
[01:00:11] you know, semi granular
[01:00:13] Um,
[01:00:15] uh,
[01:00:16] invalidation and for basically any situation
[01:00:20] in which
[01:00:21] You are dealing with
[01:00:25] multiple models on your same page.
[01:00:27] You know, it's not quite GraphQL, but most of the time,
[01:00:31] Even in those cases, you might not need GraphQL.
[01:00:35] Because like,
[01:00:38] you're still fetching the type of thing you want. The biggest downside of this approach
[01:00:43] is usually, and it's kind of the strength is like, you could do a mutation,
[01:00:48] And...
[01:00:50] Um,
[01:00:53] you know, get the data back.
[01:00:55] to invalidate it.
[01:00:57] or not invalidate to replace it in the cache,
[01:01:00] But people...
[01:01:01] got so sick of doing cash for basically anything that they just do revalidate.  So most times you did an update, you basically go,
[01:01:09] Update user.
[01:01:12] Success comes back, so do one trip, and then on the next trip you go, "Get me updated user."
[01:01:17] So we kind of got to a world where we were doing
[01:01:20] Basically...
[01:01:21] a client waterfall on mutation. Kind of
[01:01:25] acceptable because when you go and perform an action on a web page you're expecting to wait a little bit
[01:01:30] It's a little bit different fetching. You want to see the data as soon as possible. Mutation,
[01:01:35] we're a little bit more forgivable, right?
[01:01:37] You know, another example, if you're on a page, you save that post, it redirects you to the listing and then you load the listing.  It's two fetches.
[01:01:45] post get right.
[01:01:48] so
[01:01:50] This is kind of the trade-off
[01:01:52] we find ourselves in.
[01:01:56] It's...
[01:01:57] a pretty good solution, people building very interactive apps.
[01:02:01] use these kind of
[01:02:03] e-based things. There's a reason why Tanner has popularized this approach.  And he built a lot of dashboards, a lot of data-centric apps, because it lets him...
[01:02:12] still isolate data enough,
[01:02:15] The normalized cache wasn't actually doing very much for him.
[01:02:18] So he gets like 90% of the effort
[01:02:22] or like benefit there because he still has complete granular control over the types of things he cares about.
[01:02:28] He just can't share it.
[01:02:30] in the same sort of way, but it also probably doesn't impact them very much.
[01:02:38] Okay, so it's an import trick. That's great.
[01:02:42] Thank you.
[01:02:44] Thank you.
[01:02:52] Yeah, right, right, right, right.  So right off the bat, if you're worried about
[01:02:56] using a different language on the back end,
[01:02:59] you're kind of already outside of this.  Nothing is replacing GraphQL
[01:03:05] if you're not in this this
[01:03:07] this boat as I started it with at the beginning here because
[01:03:11] Like, the reason there's so much stuff around it is because it's very...
[01:03:21] strict on the contract. People are going to be using GraphQL for ages. I'm just saying personally,  I'm mostly only interested in this first square. And when people say what comes after GraphQL,  they're generally only talking about this first square.
[01:03:35] when people talk about our server components are actually only talking about this first square.  In fact, a huge amount
[01:03:42] of web development is only talking about this first square.  I mean, some might be talking about this square as well.
[01:03:48] Thank you.
[01:03:49] Thank you.
[01:03:49] But he means back-end, front-end.
[01:03:53] different teams.
[01:03:54] So actually.
[01:03:58] Like, oh, pretty much multiple teams in this scenario is is is kind of where a lot of the folks in front end has gone to.
[01:04:08] for better or for worse. And the reason for that is for different reasons. I've talked about this in previous streams. It's not just because of this, it's because of the JavaScript problem.
[01:04:17] If you...
[01:04:19] If you have to run JavaScript in the browser,
[01:04:22] It's the only constraint that is actually
[01:04:25] unavoidable, which means that if you want to streamline your development,
[01:04:30] Um...
[01:04:30] and even UX considerations when it comes to saving over the network, you're kind of stuck with JavaScript.
[01:04:36] on the server.
[01:04:37] You can use other languages along with it, but
[01:04:40] your web server layer, like eBay, for example.  Java, all Java backend, but all the web servers are node.  Like they use JavaScript to render the web pages.  Sure, the APIs and stuff are all written in Java,  but all the websites are written in node.
[01:04:58] Um,
[01:04:59] So, yeah.
[01:05:05] Thank you.
[01:05:13] Thank you.
[01:05:15] Yeah, one of the big things on enterprise thing is the GraphQL lets you do the facade pattern, right? Where you create an API layer that walks in between the existing services, and then you just start replacing what's behind it once the facade's up, right?
[01:05:30] classic design pattern. So like GraphQL is great. It's a migration tool. It's like, don't get me wrong, like people when they do the big switch will probably hit performance issues.
[01:05:42] Because it lets you be unperformant because it gives you the ability to just
[01:05:47] Pull all the crap together.  And sometimes...
[01:05:51] Pulling this stuff together
[01:05:53] the, you know, isn't necessarily the best thing, because they like have different data requirements.  If you're sitting there on the server now stitching all the stuff together,
[01:05:59] and they take different lengths and have different latencies, then you're slowing everyone down, right?
[01:06:05] Breaking it apart is actually kind of
[01:06:07] really beneficial, which, you know, talking about the fact that the only my only complaint about GraphQL, I know it can support it if you do the right thing, is how streamable the the the the people set up if it can be set up to stream back stuff, then I think it would possibly be the ultimate client oriented thing, except for the fact that it has a reasonable amount of JavaScript on the client.
[01:06:37] Thank you.
[01:06:38] Right. So what I'm getting at is like, to me, and this is why TRPC is probably kind of, you know, where it is at. TRPC isn't about replacing your backend Go Python things. It's about the pipeline to the server rendering, so to speak.
[01:06:55] in JavaScript. That being said, yeah, yeah. I'm familiar with that defer and new directive name  that stream for streaming data. Yeah. I'm sure there's ways, but it's like,
[01:07:06] Yeah, I think it's I think it's interesting.
[01:07:12] Yeah, so, like, one of the reasons, like, I think CodeGen is the future of the API, the scheme of the starting point is true.jai.
[01:07:21] -
[01:07:22] At a certain point,
[01:07:24] Either the abstraction for the automation is good enough that everyone just accepts it as a baseline,
[01:07:30] or people hit friction.  And in the case of GraphQL,
[01:07:33] I know this because we used it.  Like generating a cogen was so slow back then.  And I'm trying to do development of people's teams.  It was really like here,  and not needing that cogen, I'm pretty sure.  And like these kinds of solutions  feel like a billion times better
[01:07:46] better than code. Cogen always feels kind of like a little bit
[01:07:51] Like, it's like a minor DX consideration.  I told you a lot of the GraphQL complaints that...
[01:07:56] It's like it's kind of silly, but it's like
[01:08:00] If you need it from a contractual enterprise level, like 100%.  But people just didn't want to deal with that anymore.
[01:08:08] Right?
[01:08:10] Right? So...
[01:08:12] Okay.
[01:08:13] -
[01:08:14] I am trying to kind of get this to here.  And I do have to retrace over a little bit of the few things  that we covered in my streams before  because we kind of get the query cache thing.
[01:08:27] Right?
[01:08:29] Queer Cash
[01:08:31] Did sacrifice a couple things from GraphQL.  But a lot of the things to sacrifice were kind of like...
[01:08:36] probably wasn't going to work to your benefit anyways.
[01:08:40] except for the dual flight thing.  It was kind of
[01:08:45] You know
[01:08:46] And honestly...
[01:08:48] Eh, you know, who cares?
[01:08:51] The next thing on the slope here, you know,
[01:08:54] is GSSP or loaders like remix style kind of stuff.  And...
[01:08:59] Um,
[01:09:04] I'm talking really generically because these ones are on the fetch side. We also have to talk about the mutation side.
[01:09:10] but these were just like let's just put it on the route
[01:09:14] So get rid of the query keys altogether and just be like,
[01:09:17] Data for Page, yes.
[01:09:20] Then when you mutate,
[01:09:23] regardless of the approach, like Remix uses
[01:09:27] like posts. Other systems could use like
[01:09:31] Um...
[01:09:33] like,
[01:09:35] RPCs to trigger this. The kind of mentality here though,
[01:09:39] is like,
[01:09:40] You always fetch the whole thing on the page.
[01:09:44] This...
[01:09:46] is okay for simple pages, but...
[01:09:50] that what you lose here is you no longer,  if you have five different data sources,  you're fetching all five of those data sources
[01:09:57] every time you, you know, you basically need two systems  if you want to avoid that.  You'd have the server,  this is why like the classic part of this was  you'd have the server initially load
[01:10:07] all this data for you, like all the data sources on your page,  and then you'd feed it into another system,  and it would do localized updates of the specific things you needed,  which meant you're always kind of dealing with these two different patterns.  Remix closed the loop by adding...
[01:10:22] like actions.
[01:10:23] I...
[01:10:25] But like essentially with this sort of pattern,
[01:10:29] Um...
[01:10:32] there is this kind of
[01:10:34] awkwardness
[01:10:38] this all yeah this kind of awkwardness where like
[01:10:41] If you actually went back
[01:10:43] to that particular page you did a mutation, suddenly you're updating
[01:10:47] all the data.
[01:10:48] by default.
[01:10:51] And I think I should mention this,
[01:10:55] A lot of
[01:10:56] The work around here where like we had query caches, react query, and this is people even with SSR were deferring, fetching the data.
[01:11:04] not at SSR time, but doing it when the client loaded the data.  You know, so you'd like render part of the page and then it would like,
[01:11:10] fetch the stuff after the fact. If you actually had to use React query on the server, there wasn't really good solutions here before in most libraries. I always forget about this because, um,
[01:11:21] I guess this sounds like humble brags or whatever,  but Solid had solved this problem about five years ago.
[01:11:26] where we when we had a suspense of the server, but in like the react
[01:11:31] side of things.
[01:11:33] Like, it was awkward to try and get this data on the server and then deal with the serialization yourself.  And then, like, you know, like...
[01:11:43] Now you have, you know, they've invented these loaders to solve the problem, like, but it never felt.
[01:11:49] like it was really React, you know, like it was very specific to the framework that was wrapping React.
[01:11:56] and you need a different data mutation problem solution.  It never felt consistent. So you're trapped between like
[01:12:05] these query cache solutions that wouldn't really SSR
[01:12:09] Kind of, unless you're managing it.  I mean, to be fair, most of the GraphQL solutions were also...
[01:12:13] Um,
[01:12:14] built in with the SSR consideration and stuff like that's why these libraries are so massive. But a lot of people
[01:12:21] You know, there was like this awkwardness around patterns here because all you had was like rendered a string. You had no async. Like you basically have to fetch all your data up front and then render your page or do a pre-pass or like these different kind of mechanisms.
[01:12:37] So adding loaders and get service side props are really powerful because then like the framework could be like, oh, I know what data to load up front.  And then like everything else would fall to like React query and you just like fetch in the client later or something like that.
[01:12:50] So there is like a historical stuff.  I don't want this to blind the pure technical aspects of this, though.
[01:12:59] So like
[01:13:04] In a sense, you know, we saw a lot of people move to trpc with React Query.
[01:13:11] But stuff like
[01:13:13] GSSP, which is like a different
[01:13:15] protocol kind of still fell into some categories of data, right?
[01:13:20] And this approach, generally speaking,
[01:13:24] Sucked for apps.
[01:13:26] You might not have to, but if you had to go back,
[01:13:32] you basically had this weird hybrid.  And if you had to go back to the server,  which I don't think people generally like designed it that way,  you'd be just like fetching all the data  and re-rendering everything again.
[01:13:42] I think this is one of the biggest frictions Remix had when they came in because they're like, look, look, look, look, we have a way of doing it without reloading the whole page. We have like a use Fetcher approach or whatever, you know, and then you can just hit it like this one thing as an endpoint, but use Fetcher is just them making their own kind of micro React query, so to speak.
[01:14:00] It's a second data pattern to the main one.
[01:14:03] And I think this is...
[01:14:05] kind of
[01:14:07] Like...
[01:14:08] In one way...
[01:14:11] I mean, the big win here, and I want to talk about Remix here is...
[01:14:15] When you got to React query, we stopped caring about writing the cache on any successful thing.  We would just be like, okay, just revalidate.  When we got to actions and loaders or remix, their biggest innovation thing that they should be remembered in history for is that they came up with a cache-less optimistic updates.  Because they didn't even bother with this client-side cache that these things had.
[01:14:37] And for that reason, they were like, okay, we're just going to feed it back through his state while it's in blight.
[01:14:43] which is absolutely genius because we got to this point where we no longer needed the client-side cash,  which paved the way...
[01:14:49] to RSCs. But this, you can see as we went down the slope, we lost the ability to
[01:14:57] to like granularly update our data here from the client.
[01:15:02] Like it's like kind of like, let's just grab it all or from a route section, perhaps.
[01:15:09] So, I mean, there's other solutions here, right?
[01:15:11] You can...
[01:15:13] hash things on the server so that the cost of going to the server doesn't mean you have to like do a bunch of requests on the server but
[01:15:20] conceptually, you're still sending all that data over the wire, and you're still dipping everything in the client because the client
[01:15:26] knows exactly what it needs,
[01:15:28] But...
[01:15:29] There's really no way of telling the server that.  And these solutions basically
[01:15:36] Went from place of absolute knowledge in the client. Basically, we have no clue what's going on. Just dip it.
[01:15:42] I'm going to go.
[01:15:45] Okay.
[01:15:46] Thank you.
[01:15:49] Thank you.
[01:15:51] *clicks*
[01:15:56] Bye.
[01:15:58] So I would say that when you put them together, this was a DX win.
[01:16:04] Thank you.
[01:16:05] Thank you.
[01:16:06] This question is, performance winner DX win?
[01:16:09] I think TRPC...
[01:16:12] gave us types.
[01:16:14] And a good, you know,
[01:16:16] It gave us types over a fetch. It gave us a good protocol to use with our React query, essentially.
[01:16:21] Um,
[01:16:23] Compared to...
[01:16:25] um, what we're doing GraphQL, it wasn't quite as optimal.
[01:16:29] probably optimal enough.
[01:16:31] Thank you.
[01:16:32] But the floor has continued to go from here, right?  In a sense...
[01:16:38] Yeah.
[01:16:38] This is why we hit that sweet spot.  I feel like trpc with React query might be
[01:16:45] one of those like sweet spot.
[01:16:48] Um,
[01:16:49] Like,
[01:16:51] You know, API has normalized cached with GraphQL.  It might have been really performance-oriented,  but you're really fighting for that last bit of performance,  and you probably weren't going to get it.
[01:17:02] -
[01:17:04] React query plus tRPC hits a sweet spot.  We get into GSP and loaders.
[01:17:11] It's a little bit...
[01:17:13] It's okay for simple stuff.  You can work it to work for more complicated stuff,  but it's no longer, it's like,  it's gone a little bit past the sweet spot.
[01:17:23] So how do RFCs fit into the picture, right?
[01:17:27] Thank you.
[01:17:28] Local Maxima. Yeah, exactly.  Let's talk our RSCs.  I told you this conversation started because...
[01:17:36] RSCs were...
[01:17:40] more or less...
[01:17:43] the answer to GraphQL. It didn't start like that. As I mentioned, React used something called flight, right? They were working on the single flight mechanism
[01:17:53] But the reason is RC's...
[01:17:55] Weave two trees. If you've ever seen like the, what is it? Uh,
[01:18:01] bundle lists are react server components, the original like release thing. If you ever look  for images from that, there's this one image, they always show this one here. It doesn't show at the
[01:18:14] easiest and I think
[01:18:17] Dan Ibramoth has done better images. But the point of this whole image is there's actually
[01:18:24] Thank you.
[01:18:24] two trees that are independent that weave through each other. So at any depth in one of the trees,
[01:18:30] you can have server components next to client components. So in a sense,
[01:18:34] The server components are the relay fragments,
[01:18:38] and the client components are your old kind of React app.
[01:18:45] So you can kind of set them. So the server components are, the funny thing is the client components are all separate trees. Like they're connected through context and stuff, but they actually like kind of separate routes. But the server has one single consistent route. That's why you have all those weird import rules. Like you can't import server components and client components or whatever is to so that you can only project it through. So the server component tree is one single tree.
[01:19:07] So this makes sure kind of like our old GraphQL system  that we're doing one fetch when we go to the server.  We can always just get that full tree.  There's no like, oh, go to the client to the server,  the client to the server, there's no back and forth.  The server can always render the complete server tree.
[01:19:25] always as a single fetch.  They know all the data fetching because they're,
[01:19:29] Essentially whenever you go to a page or a route or whatever they pull out
[01:19:33] all the data,
[01:19:35] along that. Now you might be going, well, but it's returning JSX, not data. Well, to be fair,  a lot of companies do that. I'm pretty sure at Meta, their GraphQL server returns component  representations to get rendered. It's a common trick you do on mobile.  eBay had something called the Experience Server that was very similar.  Service, sorry, that was very similar. Like this idea that you could have the web and the mobile
[01:20:00] design
[01:20:01] by essentially describing what the UI should be via API and having it render rather than actually shipping the code. You can kind of and in a sense,
[01:20:11] you could view server components as an evolution of that, right?  It's both the solving the
[01:20:18] the
[01:20:20] Like,
[01:20:21] components as API consideration for these kind of services, which is probably something that most of you don't even need or particularly concerned with.
[01:20:29] and at the same time create a single server tree that can fetch the data through.
[01:20:36] That single server tree has some interesting considerations though, right? Because
[01:20:42] I mean, if you think about it,
[01:20:45] Um...
[01:20:50] Like
[01:20:52] It's organized by how you view your code, like your view code.  So like if things are...
[01:20:58] if dependencies aren't data dependencies necessarily,  but are view dependencies,  like don't show this panel unless this user exists,
[01:21:07] even though to fetch the data for this panel, you already have that information, like you already have a user ID.
[01:21:16] you basically force the data fetching into the view construct,  causing, you know, perhaps unnecessary waterfalls.  It's just something to kind of consider,  like, there's structural considerations to, like,
[01:21:31] how your components are set up that actually affect how it works.  But generally speaking, you're doing a single request to the server and pulling out a single thing of data.  It's not unlike the GraphQL
[01:21:41] thing except
[01:21:42] GraphQL was about data. When we looked at those fragments, we looked at, oh, sorry, we were looking at how we could merge together and find the exact pieces of data. And each of these fields can resolve kind of problems.
[01:21:57] somewhat separately
[01:21:58] There is a nesting consideration. But...
[01:22:04] Essentially.
[01:22:06] With...
[01:22:07] With our Cs, we kind of sort of solve two problems, kind of.
[01:22:14] Right. Like we get that we do accomplish this, but
[01:22:18] you're now getting the final view out.  So, and the data fetching is kind of baked in.  Now, to be fair,  you don't have to put the data fetching
[01:22:28] in waterfall. You can hoist it up again. You can always hoist it up. That's the solution to almost every data fetching problem. Hoist it up.
[01:22:34] Um, but
[01:22:36] Like, generally speaking...
[01:22:38] This is why the tie-in comes to Relay, because...
[01:22:44] Instead of...
[01:22:46] using a compiler to detect ahead how to stitch the stuff together like Relay does.
[01:22:51] it just runs the stuff top down.  And as it hits it, it's probably good enough for you, right?  That's kind of the idea, just kind of water falls itself down the tree,  gets all the data and sends in a single request.  Way better to do that on the server than on the client, right?
[01:23:04] Um,
[01:23:05] But that's... And in general, that's true.  But what's interesting, if we go back to our story here, is...
[01:23:15] Go back to our case where we have five data sources,
[01:23:20] Yeah.
[01:23:21] on on the client and we know that we're gonna update one
[01:23:25] Well,
[01:23:27] with RSCs like GSTP or whatever, you actually end up re-rendering the whole page.  So while those waterfalls,
[01:23:35] are generally better on the server than the client,
[01:23:39] you might have not needed to
[01:23:41] render four out of the five of them.
[01:23:45] So, like, there is this kind of consideration here, right?  It's not GraphQL because there's no client cache that's aware of
[01:23:56] of
[01:23:57] exactly what changed from a mutation standpoint.
[01:24:02] Like,
[01:24:03] You can use server caches.
[01:24:06] And the interesting thing is like I've done plenty of server rendering optimization in the past using Redis to cache stuff.  But what's interesting about this model is it's kind of like.
[01:24:17] Cache by architectural, like you need to almost cache
[01:24:21] the other four data sources or all the data sources in case one invalidates. Unless you do want to hit the database,
[01:24:28] every single time and go through that waterfall every single time.
[01:24:32] Um, right. Whereas interestingly enough, when we were at the peak of client side caches with APIs,
[01:24:39] Um.
[01:24:44] We only got the data that we requested.
[01:24:48] So,
[01:24:50] It's interesting, right? Something like RFCs makes up
[01:24:54] for this because it diffs on the client.  It's okay if the server does some extra stuff, produces a bunch of extra markup,  does a bunch of stuff because the client
[01:25:04] probably is just going to diff the changes and it's not going to impact it as much.  There was this great demo, the Notes app demo, that was
[01:25:12] done like when they first showed it off. And it was a really good example of showing how
[01:25:18] You could do everything app-like with RSCs.
[01:25:21] model, which is something that I always wish we remixed it early on, because people assume you can't build apps with Remix.
[01:25:29] Like Remix,
[01:25:32] These things are relying on React to do all the heavy lifting of diffing.  Instead of going like, okay...
[01:25:38] I know that I only need to do this much work. It's a bit like, let's do it all and let React figure it out.
[01:25:45] And it's not surprising that that mentality is coming from React because
[01:25:49] I mean, like, that's how React always works.
[01:25:52] Except...
[01:25:54] Now...
[01:25:56] So,
[01:25:57] Now it's doing it across the network boundaries.
[01:26:01] And
[01:26:02] It's an MPA in disguise and SPA for sure. Right. But would you build
[01:26:06] a highly interactive write heavy app as an MPA.
[01:26:13] Probably not.
[01:26:15] Like, this doesn't actually change...
[01:26:20] the MPA-like behavior of it.
[01:26:23] Multi-page app.
[01:26:26] multi-page app, so server-side routed app.
[01:26:33] It's also Morph libraries work. You're talking about like how Phoenix Live View does stuff. The funny thing is, I feel like stuff like Live View could be done way more effectively with signals.
[01:26:44] Like they are smart enough to know where all the state is that they could do all the updates without diffing.
[01:26:49] Anyways, that's a whole other thing. I haven't worked on stateful
[01:26:53] I think stateful.
[01:26:54] backends, while it's something that usually I think is prohibitive from a hardware infrastructure consideration, if it was on the table,
[01:27:01] I think we could do way better than the solutions that are out there today.  Like,
[01:27:05] way better. I'm just, it's not a problem space that we're, that particularly working on, on the front end side. But if stateful back end suddenly became like the de facto, there's so many ways we could, we could do better than what we're doing today.
[01:27:20] Thank you.
[01:27:30] - Yeah, and I don't even know if it's that much  of a performance problem.  Like, the RPC is just the protocol, as you said, right?  Like, it's just the thing passing the data.  So, I think the invalidation would be  whatever React query does or whatever
[01:27:43] consumer considers on it.
[01:27:49] Yeah, it's not about...
[01:27:53] Yeah, I want to make that clear.  I feel like they're just a really nice pair because...
[01:28:00] We needed a type safe protocol, and we needed...
[01:28:04] So,
[01:28:06] we needed a reasonable approach to doing granular invalidation.
[01:28:11] Which is.
[01:28:13] And as I said, you can put the cash on either side.  So like if your app gets large enough, I can see an argument.  You don't want the cash on this client because then you have to serialize and send it.  But if you.
[01:28:21] So like there is this.
[01:28:22] thing that that serialization cost of keeping on the server is good.  But then it's like, it's not an easy...
[01:28:28] choice. It scales differently and you have to look at the specific scenario to decide whether your cache should be on the client or on the server.
[01:28:35] And it's very...
[01:28:36] Awkward if
[01:28:38] Changing that means completely changing the data fetching mechanisms.  Like this is kind of...
[01:28:43] the tension feeling.  And in a sense, why...
[01:28:46] Um...
[01:28:47] stuff hasn't
[01:28:50] you know,
[01:28:51] You know, like quite...
[01:28:53] clicked always for people when it comes to like, picturing them building their apps with RSCs or whatever. It's doable
[01:29:00] But you need the other patterns there that haven't been fleshed out.
[01:29:08] Thank you.
[01:29:11] Is this one of Sunil's posts about how we all need to do more stateful backends?
[01:29:17] I mean, let me pull it up here.
[01:29:22] Thank you.
[01:29:25] Thank you.
[01:29:28] Let me pull.
[01:29:33] The next evolution is serverless is stateful,  and enable metric a ton of use cases  we've ignored for the last decade plus,  because they didn't enter serverless model,  or were otherwise hard to expense them to maintain.  I've been waiting for this post for a while.
[01:29:42] Scary claim, but it's silly.  The model is now inevitable.  I'll try to rig it down one big idea.  Blah, blah, blah.
[01:29:47] extra-related use cases.
[01:29:50] best about it is that it's not the right you can build this thing today with part again.
[01:29:54] Yeah, I mean, if this...  I mean, he's using Cloudflare will probably
[01:30:00] because he used to work with Cloudflare, and I'm gathering he's probably using durable objects with Cloudflare.
[01:30:05] Um, it's like a very specific solution that only they had.  I, we had, me and Nikhil had some fun with that.  Um, when we were playing with, uh, the first version of Solid Start.
[01:30:14] I think it's interesting.  It's always hard because I never feel comfortable pushing infrastructure costs on people.
[01:30:21] like as framework design, same reason I don't like server side caches, right?  But
[01:30:25] Thank you.
[01:30:27] If we're going here, yes, this is a place that can be optimized the crap out of because suddenly you don't need diffing anymore.
[01:30:37] BMI told you view-centric, data-centric, it becomes a...
[01:30:41] signals problem.
[01:30:42] Um...
[01:30:43] And people tend to just keep on
[01:30:46] When in doubt, start with a diffing solution until you can do a path solution.
[01:30:50] So yeah, I think this is a zone that could improve significantly from how it is today.
[01:30:56] Anyway, let's get back to business here.
[01:31:00] Um...
[01:31:02] *sigh*
[01:31:06] Thank you.
[01:31:08] Thank you.
[01:31:11] I mean, the problem is there's always going to be both.
[01:31:18] The...
[01:31:20] There's always ephemeral state in the client.
[01:31:22] And if you push to the server, like it's so funny, we started the stream again where people are talking about offline first and we're seeing the opposite, right?
[01:31:32] I'm convinced
[01:31:33] And I think most people should be convinced that
[01:31:36] The state you push closest to the client is always going to give you the better user experience, like generally speaking, because you can be more interactive.  You can deal with that.
[01:31:43] I just think that stateful servers do open up more, but generally speaking,
[01:31:49] You want to push as much state to the client as possible for interactive reasons.  It's the non-interactive stuff that you don't really care that much. It's tricky.
[01:32:00] Thank you.
[01:32:01] I'm sorry.
[01:32:03] Like, even if we get to a place
[01:32:09] Yeah, I do see like it's hard because data distribution becomes a challenge as well.  There's a lot of privacy considerations with using edge.  I don't want to derail going too far down that.
[01:32:23] But, yeah, I mean, I think if you put stateful on the table, it changes the math considerably.
[01:32:35] Um,
[01:32:36] Almost all solutions sitting here are doing that.  So, okay.
[01:32:40] Okay.
[01:32:41] If I go back to...
[01:32:44] all here.
[01:32:46] How many of you watched
[01:32:49] that original...
[01:32:50] Talk introducing zero server commodes, Lauren Tan, Danny Bromoff.
[01:32:55] They went through and they show off.
[01:32:58] this like...
[01:33:00] this like notes demo it was like Christmas 2020 or something
[01:33:04] Amen.
[01:33:08] So they show like server components and this example,
[01:33:14] Um,
[01:33:15] was
[01:33:16] was always an inspiration to us working on it because like this is how we vetted our solids hybrid island solution. We built kind of like a server component version of this in solid when we're working on our hybrid islands. And I think
[01:33:33] It was...
[01:33:34] reasonably small, the initial page load. I can't remember the exact. We never got search working. There's some interesting things that are really cool from this demo where
[01:33:45] like,
[01:33:46] They have searched.  They show off that you can go in here and then like...
[01:33:51] basically not lose the client components when the server components reload.  I'm probably not going to find it right now,  but they did something where they like expanded it and then typed into the  search and,
[01:34:02] And then it would like...
[01:34:04] Essentially.
[01:34:06] Thank you.
[01:34:07] All right.
[01:34:08] Okay, yeah.
[01:34:09] I think that's a good question.
[01:34:10] If you haven't seen this talk or this thing, it's probably, it's one of the oldest. I understand it's under legacy, which is hilarious.
[01:34:21] Like,
[01:34:23] I
[01:34:24] Thank you.
[01:34:25] This demo is also...
[01:34:28] Not when it came out, but a year later when server components finally clicked for me.
[01:34:32] I opened
[01:34:35] I open the network tab.
[01:34:37] Thank you.
[01:34:42] And, um...
[01:34:48] Yeah, I opened the network tab and I saw that when they added a new note,
[01:34:53] You can see this moment on stream, I think, from one of my pre-streams.
[01:34:56] It did a post and it returned the next page.
[01:34:59] Essentially, like you...
[01:35:00] Added the...
[01:35:02] the data and then it returned the next page.
[01:35:05] of data. Like, because when this one, when you add a new note, it goes in. And this demo talks about how it doesn't pull in
[01:35:14] the
[01:35:15] the you know marked markdown editor until you go to the editor page and it shows how you  never need the date formatter you know
[01:35:26] Right?
[01:35:28] And
[01:35:31] Yeah, I mean, it was definitely, like...
[01:35:35] a good demo to say, "Hey, we can do all this stuff with RLCs." So
[01:35:42] Thank you.
[01:35:43] This is definitely one way to go, right?
[01:35:48] As we talked about here...
[01:35:51] We're trying to get to another sweet spot on this RSC side of things where we can essentially
[01:35:56] Um, like,
[01:35:58] The caching is happening on the server.
[01:36:01] And I think...
[01:36:02] Eh.
[01:36:03] I think the challenge for me is
[01:36:06] And it's something I only really realized in the last, like really realized in the last few months is...
[01:36:10] RC's
[01:36:12] aren't
[01:36:13] They might be what comes after
[01:36:15] GraphQL, but they aren't a replacement tool.
[01:36:18] for GraphQL. They're not even a replacement
[01:36:20] for trpc with React Query.
[01:36:24] Once we went down past the stage, we aren't dealing with equivalent solutions.  They're kind of equivalent.
[01:36:32] In that, like, you know, you solve waterfalls, but they're not actually...
[01:36:37] The...
[01:36:39] the same
[01:36:41] How should I put it?  Like they're not doing the same things,  which means that there's trade-offs  or repercussions of it.
[01:36:46] I was curious about this topic on server components because I've been having a hard time.  I was what I've been one of the biggest supporters of server components.  Very bullish, very positive on server components.  Last couple of years, I've been implementing prototypes and all that.  And some time when I got more in practice working through it the last few weeks, I've
[01:37:03] I suddenly got very, um,
[01:37:05] how should I put it, a lot less optimistic about their value.  Part of it was when I looked at HTML partials and I spent a lot of time thinking here  about essentially what is happening
[01:37:15] First of all, when you're serializing markup versus serializing data, usually the markup's larger. Not always, but usually. You're doing the same thing, but just sending more data over the wire. Where you really save, arguably, is the code size because you didn't need to send the code directly.
[01:37:31] the one time to generate it, but you pay that on every request. And this was an old complaint people made about server components. I was like, who cares? Faster hydration, all this kind of stuff. But then I thought they were saving the serialization costs, but...
[01:37:42] RSCs don't.  And actually solving it for islands or MPAs  is actually pretty easy to solve the serialization,  whether you're using islands or even quick.  But once even quick becomes a single page app,  it loses that serialization
[01:37:56] And I think that once I realized that server phones didn't work
[01:38:01] solve the serialization problem, and that the mutations
[01:38:05] called for two different stories, like they didn't actually replace GraphQL, I started going like,
[01:38:11] Maybe...
[01:38:12] maybe we've been just focusing on this so long, so much, maybe too much. And I, I put a poll out there. I was like,
[01:38:18] Hey people.
[01:38:19] Why? What's the big value? Why do I want server components?
[01:38:26] Thank you.
[01:38:28] Thank you.
[01:38:33] Happy birthday and weird. Yeah. The drummer of my old band, um, Mr. Solid.
[01:38:41] Thanks, Duncan.
[01:38:42] Um...
[01:38:45] No, the funniest thing is I never got disillusioned with presumability.  I just thought that it was an optimization stage because
[01:38:55] Like I always knew resumability didn't solve the serialization problem.  So I was like, okay, we can just not hydrate. Sweet.
[01:39:03] And I came to that conclusion about a year or a bit ago.  And I was just like, you know what?
[01:39:09] We can have like, resumability can just
[01:39:12] improve the client components that we do have.
[01:39:15] Like, it's just the thing, right?
[01:39:18] But,
[01:39:20] And it is probably possible to solve the serialization problem with RSCs with a lot of complication.
[01:39:25] You know, but it's like,
[01:39:27] If
[01:39:28] you haven't solved that fundamental problem,
[01:39:31] Why are we doing this?
[01:39:33] Like,
[01:39:34] it doesn't actually solve the performance problem.
[01:39:37] um it improves hydration slightly but i
[01:39:41] Not as much as improving the serialization. We've seen that. Astro out hydrates.
[01:39:47] Any of the MPA frameworks outhydrate RLCs.
[01:39:50] by more of a measure than the RSCs hydrate normal JavaScript frameworks.
[01:39:58] So like...
[01:40:02] The thing is, if you aren't solving the actual problem, what's the point?
[01:40:07] Like from a technical standpoint, I had to revalidate things and I had to see what people cared about. What were the problems people felt were the problems. I know I have my technical performance hat on, but what do people actually care about or feel like the benefits are?
[01:40:24] Purely DX, right? That's what you're saying. But
[01:40:27] I mean...
[01:40:29] Is the DX of server components actually...
[01:40:33] better
[01:40:36] Okay, we'll get there in a second.
[01:40:38] I'm
[01:40:41] Reduce bundle size.
[01:40:43] I chose this poll on purpose because I was fishing a little bit.
[01:40:48] Thank you.
[01:40:57] And part of this is everyone...  React bundled all of the server component-esque stuff  all in one release that no one actually knows
[01:41:07] what server components did. I almost wanted to make this dream like what server components really solve and what they what people think they solve, right? Because
[01:41:17] Thank you.
[01:41:17] First of all, this is a pretty even split. People want to remove client waterfalls and
[01:41:23] Mm-hmm.
[01:41:24] To be fair, Remix already removes the majority of client waterfalls.
[01:41:30] There's people brought up awkwardnesses in the pattern because of like getting the data  in other loaders and all this kind of stuff, you know, like,
[01:41:38] And
[01:41:39] I didn't even think about them because technically Solid's clone of Remix doesn't have Remixes.
[01:41:45] problems, right? So like it's not inherent, it might be inherent to Remix solution, but not to the zone at all. So I didn't even realize that. But so I'm just gonna say Remix-esque solves this problem. Streaming page load.
[01:41:56] Everyone's I talked to people and people were surprised remix did this as well like even in the react ecosystem so again
[01:42:02] You don't need server components for suspense or streaming.
[01:42:04] Thank you.
[01:42:05] Thank you.
[01:42:07] Reduced bundle sizes.
[01:42:08] Well, yes, serving components do deliver that.
[01:42:12] But do you know what else delivers that?
[01:42:14] Use Svelte. Use Preact. Use Solid. To a certain degree.
[01:42:18] Scale consideration when you get to a certain size, but
[01:42:22] If your baseline that you're starting at
[01:42:25] is
[01:42:26] four or five times smaller, the size of the components themselves, like it's the big libraries and stuff, the things that you can't avoid that are probably going to bog you down eventually anyways. So you can say now I put them on the server. Well, you probably could have put them on the server anyways.
[01:42:41] We'll look at that, you know.
[01:42:43] a bit in a minute, but
[01:42:45] Like, don't get me wrong.
[01:42:46] These are real wins.  It's just like,
[01:42:49] How much do they matter?
[01:42:51] and how much
[01:42:53] How easy is it to accomplish these things other ways, right?
[01:42:57] The thing I don't have here is like hydration reduction, right?  So resumability or something could fall into that category.  But I...
[01:43:04] I wanted to focus on these ones specifically for that because really, as expected, I thought the new authoring experience would be relatively high. Although people seem to be more concerned with the waterfalls. But I want to talk about that authoring experience.
[01:43:20] .
[01:43:25] Thank you.
[01:43:30] Thank you.
[01:43:33] Right, yeah, yeah. But component level loaders in quick, it's the relay thing again, right? Like, yeah, I was talking to the guy from the WhatsApp framework, really cool framework, React one, rackets. Yeah, yeah. And he was like, telling me about something similar. And I was thinking about too. And to be fair, when we first made create route data in solid start, we were like,
[01:43:57] uh,
[01:43:58] Let's see.
[01:43:59] a year and a half, two years ago, before we did the beta release.
[01:44:04] We did it like the way Quick ended up doing it.
[01:44:07] I just looked at it and I'm like, oh my God.
[01:44:10] I can't follow what's going on.  Like, because we could just like anywhere just be like,
[01:44:15] add data to the router and it got automatically hoisted and did the whole thing. And I was just like,
[01:44:22] I thought server dollar sign was confusing enough.  And I kept on bringing up a point  that now I think is probably mute,  was that conditionally rendered components could add...
[01:44:32] to this without them ever being rendered.  But I think that's kind of
[01:44:37] you should consider that the case to be anyways, right? But yeah, compiler based solutions, I consider this on the same avenue as relay, right? I still think this is a, this is always the choice you can make after the fact core mechanism works, which is hoisting, then decide how you can make the magic work. But
[01:44:55] Yes, this is a perfect example of other ways to remove client waterfalls.
[01:45:00] Right?
[01:45:00] I'm going to go.
[01:45:04] Thank you.
[01:45:06] Thank you.
[01:45:08] Thank you.
[01:45:11] .
[01:45:14] It depends what a content is. Is it better if I do not need to be maintaining API for the sake of a client or rather an API code instead of HTTP endpoints? Yeah, we'll get there. What I'm trying to get at is a lot of people, a lot of the advantages they gave me about authoring experience, I was kind of going down here and talking to people and I'd be like, well, can't you just use use server instead of use client to do that?
[01:45:35] Right?
[01:45:37] Like,
[01:45:39] Let's see if I can go in here and look at some of the chat.
[01:45:42] new unified model for architecture UI development.  And I was like, is it unified?  It's kind of like client and server still.  It's like MPA thing.
[01:45:52] Um...
[01:45:53] or not throw in every cell.
[01:45:55] It's so funny. Anyone who's ever worked at Netlify...
[01:45:58] And it...
[01:46:00] Yeah.
[01:46:01] And or AWS Cloudflare, basically any provider that's not Brucell are always have like such a like.
[01:46:09] Next.js skew on it because it is actually really difficult.  They always act like it's not,  but it's actually difficult to get stuff working outside of your cell and to  have the same functionality.  It's just funny how you can't post,  like I was not talking about this,
[01:46:24] Um...
[01:46:26] Yeah.
[01:46:27] Level composition we haven't seen before.  Yeah, I looked at this interaction with Ryan Florence.  I love this one.  I guess new opportunity because it brings a level of composition we haven't seen before.
[01:46:35] On the UI side, we can keep 100% running on the server, blah, blah, blah, blah. I'd like to see this more. I've always looked at this as a technical perspective. I'd argue server actions might actually be more impactful on the competition than SCs. React components are always composable, right?
[01:46:46] Yeah, server action is a bigger deal. I still want all my loading at the nested route section level. Being RC or not doesn't really change anything, and composing components that load their own data is mostly performance in an RC.
[01:46:57] Me and my man Ryan are on the same page here, right?
[01:47:02] So like,
[01:47:05] Yeah.
[01:47:05] Thank you.
[01:47:08] I...
[01:47:09] I think...
[01:47:13] I just, maybe it's just easier to show people what I'm talking about.
[01:47:18] Right, but you can have a full stack component as long as you have server functions. You don't actually need
[01:47:24] server components. The question is, do you need to render that markup on the server? The benefit of rendering the markup on the server is you don't need the JS code in the server.
[01:47:31] It's a good enhancement.
[01:47:33] But if you base your whole architecture off it, you also cut off all the people doing CSR.
[01:47:39] Thank you.
[01:47:40] Okay.
[01:47:43] I know server components don't have to only run on the server, but they're designed to run across two different environments. They don't have to. This original React server component notes demo that I'm talking about here has no SSR in it. It's completely client side.
[01:47:57] I like looking at it though because even in this simple example you can start seeing
[01:48:02] Not this, let's go to the source folder.  Kind of seeing like how the app breaks apart  into the different pieces, you know, and you go,  they don't have it here anymore.  They used to have like,
[01:48:12] dot.
[01:48:14] client or whatever in the original,  when it was originally posted,  they've updated this to be the latest.  Okay, so this one is a server component,  and then sidebar node is a client component.  Actually, no, it's a shared component.  Sidebar node, no, that one's a,  and there's the client component.  This issue, this has been cleaned up a decent amount.
[01:48:35] This example, I actually had some fun
[01:48:38] Because
[01:48:39] I thought, what if I just remade this notes demo in the latest solid start?
[01:48:45] Because we kind of got really hooked on this whole,
[01:48:49] Um...
[01:48:51] Uh, where is it?  Uh...
[01:48:54] Thank you.
[01:48:55] this whole authoring experience question. And I was like, okay, let's, let's do something else.
[01:49:02] So let's take a look at this.
[01:49:09] Thank you.
[01:49:10] Thank you.
[01:49:12] Thank you.
[01:49:15] Thank you.
[01:49:16] How do I do Komota's reading writing cookies?
[01:49:22] I mean...
[01:49:23] with server functions.
[01:49:26] If...
[01:49:28] If you wanted to, right?
[01:49:31] Yeah.
[01:49:32] I.E.
[01:49:33] You're still going back to the server.  I guess the question is waterfalls.  But do waterfalls matter when...
[01:49:41] the what you're doing is independent.
[01:49:44] Okay, let's just do this.  Let's not start demo.  Let's just go solid start.
[01:49:51] Let's get the latest.
[01:49:53] Remind me later. Let's go solid start. I'm so out of date. I'm probably on like
[01:50:00] What version of Solstart am I on here?
[01:50:02] Pull it up.
[01:50:07] Thank you.
[01:50:08] Okay.
[01:50:15] But, how do I put this parasolical...
[01:50:20] The client's involved because the client's going back to the server to do this, even with server components.
[01:50:28] you're still going to the server.
[01:50:34] I guess there's an argument that the mental model is easier if you go like this component is server versus saying I'm calling an API endpoint or something, but you're you're still.
[01:50:43] going to the server.
[01:50:49] Thank you.
[01:50:50] Right?
[01:50:56] So I was like, okay, let's do this.  Because it's funny.  I went into Solid Start and let's...
[01:51:05] Let's close.
[01:51:09] It's funny, the old CLI. Okay, delete that. Okay, so...
[01:51:15] I had an example here in this repo.
[01:51:18] Let's close some extra stuff we don't need.  And it was this notes example.  And we built it with server components and...
[01:51:24] or Solids version of server components.  And the layouts are a little bit fun  because, like, the way the refresh had to work.  And Nikhil was, like, co-locating it.  But he was using a convention.  I think he was putting...
[01:51:37] Let's see here in the components. There's like
[01:51:39] sidebar note dot client
[01:51:42] So I went through and kind of rebuilt this example.  We also added a dark mode thing for fun.
[01:51:49] And I was like, okay, this seems fine.  And I was like, okay, let's remake this...
[01:51:56] package. Let's see, where's my example? I went and remade notes example. And
[01:52:01] Let's look at how the notes example looks like.  In our source folder, we have our entry server entry client, standard solid startup.
[01:52:09] Then we have a router and our root component, our root in the router is this layout, which is essentially just
[01:52:17] the header and then it has a search field in it, it has an edit button from Pretty New, it has a suspense around a note list for the sidebar, and then it has suspense for the main...
[01:52:26] content that we're setting through.
[01:52:30] Um...
[01:52:31] Looks like I have a type error.
[01:52:35] This is probably my bad. Anyway, type error hopefully won't cause the end of the day. We also have a loader function for the root component. I just did this so I didn't have to like put another layout in here. So I flattened it out. We have a 404 page. It just does a redirect. And then we have a homepage, which shows nothing.
[01:52:55] We have a new page, which loads our note editor.  And then when you go to the specific notes,  there's the default view, which is a preview page,  where you can get the note.
[01:53:04] you
[01:53:05] Load the note in, show it.
[01:53:07] And then we have an edit page.
[01:53:11] where we can show our note editor. And
[01:53:17] Component-wise,
[01:53:19] Uh...
[01:53:21] there's a few components.  The only thing you're gonna notice is our routes have these  export route loaders, kind of like remixed, they call getnote.
[01:53:29] And then we use them inside our components like this.  Kind of a bit of a duplication thing.  But generally speaking, this is all part of stuff exposed from this component.
[01:53:42] Yeah, let's PM PMI while we're waiting. Exposed from this API, I call it, but it's really just a bunch of server functions. We have a server function that gets the notes and uses a search text query.
[01:53:56] We have a server function that gets an individual note.  We have a server function that gets a note in a
[01:54:05] what I call preview mode, which uses marked.
[01:54:08] to show the...
[01:54:11] the markup, and then we have a bunch of actions.  One to save the node,
[01:54:17] and one to delete the note.
[01:54:19] and these are using unstorage just as the backend.  The original demo used SQLite.
[01:54:26] Thank you.
[01:54:28] But essentially...
[01:54:30] Um.
[01:54:32] You know, like when we succeed at saving, we do a redirect.
[01:54:36] This should feel similar to you, Remix style.  The biggest difference is that...
[01:54:43] the actions are essentially
[01:54:46] and the cache functions, these should be familiar from React, or just...
[01:54:52] perfectly typed functions, you just import them into your components. So like if we're in the node editor and we press save,
[01:54:58] Um...
[01:54:59] You can go use submission to know if you're saving.  And then you just find a form here and go action, save note with this ID.  And then it basically appends the ID directly.
[01:55:09] to the front of it and then gives you all the form data.  So that's why if you notice the save function here,  takes an ID number and then takes the form data that you're going to save.  So
[01:55:20] Like...
[01:55:21] It's just kind of, you just declare a bunch of server functions.  This is all client side. There's no server components or anything.
[01:55:29] Thank you.
[01:55:30] And the truth of the matter is I could actually go in here and turn SSR
[01:55:34] Off.
[01:55:35] And it would still work with the same patterns because it's completely isomorphic.  It has nothing to do with SSR.  We just defined endpoints that happened to do our data processing for us.
[01:55:48] Right.
[01:55:50] We already covered this, yes.
[01:55:52] Thank you.
[01:55:53] Yeah, so this is PanStack, isn't it?  Like, I didn't show it here, but if I go here on this redirect,
[01:56:01] And
[01:56:02] if we return in our redirect, revalidate,  we can sit some keys and we can do something like,
[01:56:07] revalidate
[01:56:09] What are we going to read validate post?
[01:56:12] Sorry, what did I call it?
[01:56:15] Um...
[01:56:17] Sorry, this...
[01:56:18] Get, yeah, let's pretend like when we update the one note, we go get note.
[01:56:23] And we can go key for...
[01:56:27] the ID or something. So we have these nice helpers on our cache functions where you can get a specific key for any and you just it's the same arguments as the original function to get the
[01:56:38] to get the key. You can also get like the top level key, which is just the name, which invalidates  everything in that collection. You can put strings, you can make an array of strings.  Our default behavior here though is remix style. So it's just going to
[01:56:53] It's just going to refresh all the data for the particular route that we read directory.  But you can set it by keys. It is basically...
[01:57:02] Tan stack, right?
[01:57:04] except with server functions. So you can basically fetch it,
[01:57:09] and you call in your components, the component streams in.  Right? So going back to,
[01:57:16] Um,
[01:57:17] our example here. So PM PM filter.
[01:57:21] I'm gonna go...
[01:57:23] Let's go filter notes. Let's build it right now.  Okay. I'm not going to do dev mode.
[01:57:30] Hopefully it all builds properly. It's been a while.
[01:57:34] that I've used this computer.
[01:57:36] Um,
[01:57:38] And let's start at 3,000.
[01:57:42] Like, this is more or less tan-stacked with server components.
[01:57:47] You there's there's there's a there's a and it's kind of like remix, too, because we hoist the the stuff into the pages.  Right. As I showed you when I went to.
[01:57:59] Where is it?
[01:58:01] um routes
[01:58:03] by going to like notes preview,
[01:58:05] We both...
[01:58:07] load it as a preload. This helps when you do hover over, and then we also load it. And because these use the same cache key automatically, like React, it's based on the arguments, it just uses the exact same thing and...
[01:58:20] It's not a long-lived cache.  In fact, the cache only lives the length of the request  on the server and on the client, it lasts five seconds,  just long enough that it dedupes  while it's like doing the navigation, okay?
[01:58:29] So.
[01:58:30] Fairly easy setup.
[01:58:32] You set up a key, like if you noticed on my APIs here, they say note preview.
[01:58:37] notes or whatever, like, or note, like we just set a key string for these cache APIs and we're off the race.  So the funny thing is RSCs don't save you from having to write these cache APIs. If you go next,  they have like an unstable cache. It's very similar to this. The only difference here,
[01:58:53] is this is not...
[01:58:55] like a persistent server cache. You don't need a KV. You don't need to go buy another thing off  Netlify or Vercel or whatever. This is literally just TanStack, okay?
[01:59:07] Thank you.
[01:59:09] Thank you.
[01:59:11] Yeah, it's kind of tRPC, React query, but way easier, right?  Because as I mentioned before, like...
[01:59:18] I've shown this before in the previous streams, but like this get note preview,
[01:59:23] is fully typed and it just did it from the import. Like, "gip, note, pp, id number, promise of node are undefined" and then like,
[01:59:31] Like, there's a reason when I did the...
[01:59:35] the, uh,
[01:59:36] the edit here, where was it in the note editor?
[01:59:40] Like,
[01:59:42] And save note with props ID, because when I do this, what I get back is something that just takes form data.  If I didn't put this with props ID and tried to pass it to the action, it's going to complain at me because it's going to be like,
[01:59:55] This takes other arguments, not just form data.
[01:59:59] So like,
[02:00:00] It's fully typed.
[02:00:01] You can also not put in a form.  You can just call save note if you use action,  like you use action hook,  and then you can actually just call it with the arguments.  So like,
[02:00:09] It works, you know...
[02:00:12] And...
[02:00:13] You know, you can pretend this is like mutation in TanStack, wrapping with action.
[02:00:19] It's basically this. So why am I showing you this? Well,
[02:00:25] Huh.
[02:00:26] Let's go, actually, I'm going to open in a new incognito tab.
[02:00:31] Let's go low-cost 3000.
[02:00:34] We haven't created any notes yet, right?
[02:00:36] So
[02:00:37] Um,
[02:00:38] Let's do that. Let's just make a new node.
[02:00:41] Let's go like hello.
[02:00:44] World.
[02:00:45] And actually, as you can tell, this is a...
[02:00:48] This is actually Markdown, so if I go like...
[02:00:51] It's actually...
[02:00:54] It's actually like, you know,
[02:00:56] And then when we save, we get it here and we can actually see the preview doesn't have the markdown processed here. But we can see this, it's server rendered.
[02:01:04] We that state is client state.  So like when we refresh the page, we don't remember that we're expanded.  It's not a big deal. Right.  And then we can do like a let me add one more note so we can like see stuff.  So I can go hello and how about different.
[02:01:19] Note.
[02:01:22] And I would do that. And, you know, like, as you expect, this state expanded while I did this redirect. And, you know, this is typical stuff. And if I search, you know, this is a client app, you would never expect a client app, like when you, when you
[02:01:36] search for it to lose the client state. So like there's nothing special here. This is just your typical app, right?
[02:01:49] Actually, I'm not. We'll get there in a minute.
[02:01:53] Let's...
[02:01:56] Let's look at...
[02:01:59] Let's look at what's going on here.
[02:02:03] I showed you guys what the code you might have kind of slipped over it, but let's
[02:02:08] let's let's let's uh let's look back at this demo example again let's go back to  this and go what are we trying to solve here well
[02:02:18] Thank you.
[02:02:20] I was talking about the authoring experience.  That authoring experience is not bad.
[02:02:26] I'm going to say...
[02:02:28] simpler than tan stack plus our TRPC is pretty good.  Everything, you don't need to know about server components or anything.  You need to know that you can make server functions, and you need to know about, you know, cache,
[02:02:40] and APIs and
[02:02:43] action APIs. So like you do need to know, you know, similar to like tan stack where you have  mutation inquiry, you need to know about that.
[02:02:50] but
[02:02:51] that and as you guys know this is solid so it's all streaming like with suspense and stuff you  don't have to do anything streaming is automatic when you load the page it'll stream i this demo  is not slow enough to see it but
[02:03:03] Just trust me, I've done it a billion times. Streaming works.
[02:03:06] Right?
[02:03:09] I used to love Falcor.  Hey, Prime.
[02:03:13] Um...
[02:03:14] But...
[02:03:16] Um...
[02:03:18] I didn't just get rated or anything crazy like that. No, okay.
[02:03:24] Um...
[02:03:26] But let's let's go to what else can we do here?  So authoring experience.
[02:03:30] Pretty good. Reasonable.
[02:03:33] if anything, just like a slight improvement of what we've done before.  Let's talk about client waterfalls, maybe.
[02:03:40] Yeah, let's let's do that one. So, um,
[02:03:43] Let's go back here. Okay, so
[02:03:45] Let's open the Network tab.
[02:03:47] now
[02:03:48] If I go to the network tab and I put it on Fetch,
[02:03:52] and stuff we're going to see.
[02:03:54] Obviously when I load the page, nothing gets fetched because it's also rendered in the page. Classic SSR.
[02:04:00] when I navigate,
[02:04:01] Oh, we had to fetch the specific note.  So we see our payload.
[02:04:07] Great Cerevel stuff working.
[02:04:09] In fact, we're prefetching. You might notice it actually showing up before I actually click on it. So
[02:04:16] you know,
[02:04:17] That's great.
[02:04:18] Now
[02:04:19] You guys expect that.
[02:04:21] How about if I go in here
[02:04:24] And
[02:04:25] I...
[02:04:27] I edit this and press done.
[02:04:29] What do you expect to happen?
[02:04:32] I'm going to press done, and you might expect
[02:04:36] because sorry, we're right here, we have four of these right now.  Let's actually just clear them all out, right?  You might expect it to do a post,
[02:04:42] and then a git kind of like what you usually see.
[02:04:45] But what? No, it redirected
[02:04:48] to a different page, the non-edit page,
[02:04:51] And there's only one thing in here.
[02:04:54] And it's a post.
[02:04:55] But...
[02:04:56] Oh!
[02:04:58] It's actually returning the data from the next page in here.
[02:05:03] So it's not a post than a get. It's actually doing it all as a single post and back. And you're like, okay, well,
[02:05:09] It's a little bit different.
[02:05:10] Because...
[02:05:12] You're not even on the same page, you're actually on the next page and it fetched the data for the page that it was going to head to.
[02:05:17] How can it do that? Well, it knows
[02:05:20] what data to load from the data loading pattern,
[02:05:22] for any route in your app.
[02:05:24] and it knows what keys you need to invalidate.
[02:05:27] because it works like CanStack.  So why can't we just fetch exactly the data we need  for the next page on any mutation  without doing a back and forth to the server?
[02:05:41] No.
[02:05:47] Thank you.
[02:05:51] This is a single flight mutation I'm calling it,  where essentially it's even better than that,  because this data is a little bit complicated.
[02:05:58] what you've seen back, but what it actually does is it goes to the page
[02:06:02] does the action promise out.  And then it,
[02:06:04] um,
[02:06:05] it immediately returns and then it runs the next
[02:06:09] page route, but just the data only. But before that data resolves, it starts responding.
[02:06:14] And then each resource that it finds, well, it finds a promise from the cache function based on the keys or whatever.  And then it streams those promises over the wire directly.
[02:06:23] as it responds. So it's not just waiting for the next page data
[02:06:29] before it responds, is it actually streaming the next page's data while client-side routing?
[02:06:35] I might have to ScalaDraw this for you guys.
[02:06:41] Right. It all does this thing. RSCs do this. This is when I was sold on RSCs when I saw them return
[02:06:48] JSX on the next page. And it's kind of like an old, uh,
[02:06:52] You know,
[02:06:53] You know, like the old, you know, post to a form, return to HTML back.
[02:06:57] Who says you can't just stream back...
[02:07:00] Data.
[02:07:01] Right?
[02:07:03] I can turn this behavior off, and if I slow down my network,
[02:07:07] Like this will be literally twice as fast because
[02:07:10] instead of doing the post,
[02:07:13] Having it come back.
[02:07:15] and then doing the get and having it come back, we just do it in one flight.
[02:07:19] Right?
[02:07:20] And we do this because we've combined the knowledge
[02:07:24] of both
[02:07:25] feed-based invalidation, and the route information. So we can
[02:07:30] basically mimic like we can know if we
[02:07:33] If we only want to care about invalidating certain keys and the top router section
[02:07:37] is already on the page.  We know we don't actually have to fetch the data for the other...
[02:07:41] Um,
[02:07:43] keys like that aren't
[02:07:45] being invalidated
[02:07:46] even if they're used in the section that changes because we already have that data on the page.
[02:07:51] So we can actually diff the keys and fetch only the new data that's not yet shown on the page and anything that needs to be invalidated.
[02:08:02] Thank you.
[02:08:02] Thank you.
[02:08:04] Thank you.
[02:08:07] Right. So, okay. Like, I came up with a bunch of scenarios when I was trying to think of how to explain this.
[02:08:16] Um,
[02:08:17] But like...
[02:08:19] Thank you.
[02:08:20] I mean, what do I  Excalodraw here to explain? Like...
[02:08:25] Thank you.
[02:08:28] Yeah, it's RSCs, but you're not sending markup.
[02:08:32] Yeah, it's kind of like that.
[02:08:34] I didn't need to introduce a new concept to you.
[02:08:40] And it's streamed, right?  So think about our example.  Let's try and let's draw our typical like
[02:08:48] lines, right? CV, right?
[02:08:52] And, you know, you know what I mean?  This is the classic like...
[02:08:59] Quite client.
[02:09:02] server back and forth.
[02:09:09] Okay.
[02:09:13] How does it know the next route?
[02:09:15] I already showed you.
[02:09:18] When we went into our action here, into our API,
[02:09:23] and we did our save.
[02:09:26] When it's saved, it said redirect to the next route.
[02:09:29] It's part of our protocol.
[02:09:33] So we know on the server while we're saving this thing in KV where it's going to.
[02:09:39] And you can also tell it what keys to invalidate.  Because I made the whole protocol work over HTTP,  what's really cool is,  'cause you can actually not even have server functions,
[02:09:49] And obviously, like single flight is not going to work in that case because it's like you're going from the client.  In this case, all these protocols work for client only and server function because we just talk and request response.  Right. And then we use headers as our mechanism for identifying key invalidation.  So like you could even have a server side key here that you could invalidate to like cache could have an option that's like,
[02:10:14] on the server stored in a KB as well.  Like you'd have multi layers of cache, whatever.  But like,
[02:10:20] Essentially,
[02:10:22] You're telling it.
[02:10:24] to redirect so we know
[02:10:27] Right? It's like...
[02:10:31] Um...
[02:10:32] It's yeah, it's it's it's basically we know. So, yeah, I mean, typically.
[02:10:40] We talked about this where you'll...  Okay, let's get rid of the double arrows here.  I need...
[02:10:47] this. Okay. So typically,
[02:10:50] what you'll do is you'll be like,
[02:10:54] Let's go here.
[02:10:56] You'll be like, "Save...
[02:10:59] Note.
[02:10:59] Right?
[02:11:03] And then...
[02:11:07] you
[02:11:08] you know, you opposed it.
[02:11:11] Thank you.
[02:11:11] Thank you.
[02:11:12] So I don't even know. Post.
[02:11:17] Save, right?
[02:11:19] And then there'll be some time over here where you're like,
[02:11:23] Saving in the database.
[02:11:24] Let's make this a region so we can see it.
[02:11:27] Let's move this over here.
[02:11:32] like this and let's make this
[02:11:35] Get a box here.
[02:11:38] here.
[02:11:40] We're saving.
[02:11:42] Right. And then when you're done saving,
[02:11:44] generally like most of the query styles they return like a
[02:11:50] Um...
[02:11:52] Success.
[02:11:53] Go back to white.
[02:11:55] Success.
[02:11:56] And then...
[02:11:58] At this point, the router decides that it needs to reload or whatever.  So the client does something here, which is like more or less like do-do.  Like the client's like...
[02:12:11] Thank you.
[02:12:13] This is just how client-side stuff works.  Decide where to go.
[02:12:20] Okay.
[02:12:23] Okay, so let's go like this. Decide where to go. Right. And then based on that, it goes,
[02:12:35] Thank you.
[02:12:37] Thank you.
[02:12:38] get data or get like get our note or whatever with the ID or whatever.
[02:12:46] Right?
[02:12:48] And then...
[02:12:54] Thank you.
[02:12:59] Kit. No. From DB.
[02:13:03] Read.
[02:13:05] database.
[02:13:07] And then...
[02:13:09] Luckily in modern frameworks we have suspense and stuff to handle the asynchronicity. There's also code loading and stuff at this time. And then finally we're like,
[02:13:19] render, right?
[02:13:22] This is typical Tanstack style, right?
[02:13:25] But...
[02:13:27] Yeah.
[02:13:29] Zoom out a little bit.
[02:13:31] Thank you.
[02:13:34] Thank you.
[02:13:37] So awkward sometimes. Okay. What this model that I'm showing does is
[02:13:52] Thank you.
[02:13:54] Thank you.
[02:13:56] Thank you.
[02:13:59] Thank you.
[02:14:01] Thank you.
[02:14:04] Thank you.
[02:14:25] Actually, it's more like that.
[02:14:33] Thank you.
[02:14:37] Thank you.
[02:14:43] Kind of like that.  Truthfully, it's like...  It's...  Detach this from that. It's like...
[02:14:52] Thank you.
[02:14:53] Thank you.
[02:14:56] Because there's suspense involved here while it's waiting on the promise that's being streamed.
[02:15:01] But it's kind of like...
[02:15:03] It's kind of like...
[02:15:05] Not like this.
[02:15:08] Like it's not going to be complete until the data...
[02:15:12] finishes, but
[02:15:14] It's kind of like this.
[02:15:16] Because it starts streaming the response back.
[02:15:18] once it realizes that it's done saving and decides where to go like based on your action and
[02:15:23] It's like that.
[02:15:32] Thank you.
[02:15:35] No, that's the thing. Pages and actions, they're only as tightly coupled as...  Yes, I mean, to be fair, actions have been tightly coupled
[02:15:44] by remix have been tightly coupled by React.  Like technically server functions can do anything,  but if you think about it in React,  when you perform an action, you do the same.  Like, let me go to the next JS.
[02:15:55] Next.
[02:15:58] server actions.  They themselves aren't like a special URL.  You don't need to make them post a specific page.  But yes, they are conceptually...
[02:16:10] Like...
[02:16:11] If we look here, they're going to be like client component, blah, blah, blah, behavior, blah, blah, blah,  forms, right? Put the form in. We already talked about forms. You saw my example used a form,  you form status. This is kind of like use submission. We also do our optimistic updates  that way. Yeah, do the same thing.
[02:16:31] nested,
[02:16:33] Thank you.
[02:16:33] Did they actually sh...
[02:16:36] Okay.
[02:16:37] Revalidating data. See, they have this revalidating path, revalidate tag. So we put those on the response headers, but similar idea, redirecting, return redirect. Like, it's very similar to the server action component. Like, this isn't actually that different from React's server action model in terms of like the redirects. But the cool part is,
[02:17:02] These aren't designed to be generic APIs.  They're different than API routes.
[02:17:08] But this is true for Next.js as well.  These are RPC calls.
[02:17:16] Yeah, and if you want to see that, the to-do MVC example,
[02:17:21] does that in our repo where we just update just the to-dos. I was thinking of making a demo where  I had like four tables on, like four to-do lists, and then just each one updated, only sent the data  for the specific to-do list that you updated. Yeah.
[02:17:35] You know, because you can you can just do that because it's all key based.  You know what I mean?
[02:17:43] Thank you.
[02:17:44] Yeah, I mean, it's Remix.
[02:17:49] with fine grained invalidation.
[02:17:51] But it's also...
[02:17:53] single flight mutation like RSCs
[02:17:58] And I don't think the developer experience is any worse than using TanStack with TRPC.  In fact, I think we've improved the experience.
[02:18:09] Right?
[02:18:12] So like...
[02:18:16] Yeah, I mean, this is kind of cool because essentially...
[02:18:22] you can actually respond right as soon as you're done data and you actually stream it in. So like you're actually
[02:18:28] Um,
[02:18:29] Saving...
[02:18:30] a significant amount, depending on how long the database takes. Maybe the database is pretty fast, but it's not it's not even waiting for this.  You're basically redoing the initial stream in of data.
[02:18:41] in a sense.
[02:18:43] Right? Like, if you compare...
[02:18:46] Like,
[02:18:49] Yeah. So if we're looking at
[02:18:53] Um...
[02:18:54] our list here.
[02:18:56] We've removed...
[02:18:57] client waterfalls as well as React server components remove client waterfalls. Not just on creation, but on
[02:19:05] mutation and also
[02:19:08] we've done it more granularly.
[02:19:10] Right? The React server components have to render the whole
[02:19:14] Tree, we are just grabbing the exact data that we need.
[02:19:19] when we need it.
[02:19:21] So...
[02:19:22] Yeah.
[02:19:24] Yes, yes, yes.
[02:19:26] Let's talk about bundle sizes, shall we?
[02:19:29] Or do you guys have more questions about this?
[02:19:33] Yes, the edit page did download the markdown live to show the preview before saving. Yes, it did.
[02:19:42] Thank you.
[02:19:44] So...
[02:19:48] Yeah, this is not...
[02:19:49] This is in the realm
[02:19:51] of TRPC, this isn't for generic APIs.  This is for you living in this zone, right?
[02:19:59] But
[02:20:01] So are RSCs. Like we're living in the same zone here. So let's continue. In a sense, I think React's flight
[02:20:09] that the thing they did before RFCs was probably kind of like this, right?
[02:20:14] But...
[02:20:14] But the difference here is...
[02:20:17] I think other pieces might have evolved at the same time.  We have tools to make the DX nicer.
[02:20:22] So let's continue with our demo here for a second.
[02:20:28] Let's
[02:20:29] Let's change our network instead of looking at fetch XSR.  Let's look at JavaScript.
[02:20:34] Let's go back home and let's refresh the page.
[02:20:39] OK, and let's disable cache too because we need to do that.  OK, let's go.
[02:20:43] So this page loads 29.4 kilobytes of JavaScript.
[02:20:48] It is more than I would hope. I'm... I...
[02:20:54] You guys might remember...
[02:20:56] Back in the day, I was showing like 15 kilobyte
[02:20:59] Hacker News demos. And I'm going to tell you guys right now, they're more like 25 kilobytes on the latest version of Solid Start, which is a significant size increase because, well...
[02:21:11] Adding...
[02:21:11] Thank you.
[02:21:13] Link preloads.
[02:21:15] adding a bunch of stuff to the router, adding serialize, uh, Cereval deserialization,
[02:21:23] Adding, you know, a few stuff, these things added, a little bit bigger too, tiny bit, not much. But adding all the stuff, this actually uses stores too.
[02:21:34] which you...
[02:21:36] you know like there's a few things here that kind of got pulled in because of these more  advanced solutions that basically increase the bundle size about eight kilobytes
[02:21:48] So,
[02:21:49] Just take that where it's at.
[02:21:52] I'm not stoked about it.
[02:21:55] But...
[02:21:56] Given the power of what we can do with the serializer and stuff, it's just where we are. We're at. You can choose not to use any of these features. Don't use server functions and you don't need this extra serialization. It all tree shakes beautifully. If you get solid start bare example, it's five kilobytes.
[02:22:10] I'm just saying in our new reality,
[02:22:13] This is just where we're at.
[02:22:16] Thank you.
[02:22:20] Thank you.
[02:22:21] Right. Yeah, I mean, the 13 kilobytes movie demo was using islands and server component type stuff. This is not using server components. This is just full client side rendered. I didn't change my paradigm.
[02:22:36] Stop.
[02:22:39] Right? Like the server component movies demo, I had to be like, use client and I, you know, you have to do the whole server component dance.
[02:22:47] This, I told you I can turn off SSR and it's like,
[02:22:52] Yeah.
[02:22:53] Now, if...
[02:22:55] .
[02:22:56] Thank you.
[02:22:57] So this is where we sit here.  But...
[02:23:00] you know, you get cool stuff. Like if I hover over this,
[02:23:03] We're going to see...
[02:23:06] uh,
[02:23:07] we're gonna see some more JavaScript load.  In fact, this 1.2 kilobytes loaded for the preview page.
[02:23:13] So I'm going to click and go to this preview page.
[02:23:16] Right? So, yeah, we did definitely, like...
[02:23:21] That's essentially just adding the ability to see this page, right?  So we didn't load marked here, even though it is, well, let me go here.
[02:23:30] I'm seeing markdown, but I'm not seeing marked in the browser.
[02:23:34] I didn't actually load Mark.  If you want to see Mark, I have to go to edit.  In fact, if I hover over edit, you'll see that
[02:23:39] We just downloaded another 11.9 kilobytes.  This is where the big one came.  And there's actually a date formatter here.
[02:23:48] That date formatter,
[02:23:49] never...
[02:23:51] came to the browser at all.
[02:23:53] in this example. So yeah, when we go to the editor, we need the editor, we need marked in the browser. But until we get to that point,
[02:23:59] We didn't load marked.
[02:24:02] and
[02:24:03] So it's all code split.  And how did I do that?  Well, I showed you guys at the beginning.  It's because...
[02:24:09] I mean, these are sort of functions. I can just make APIs for it, right? I was just like, okay,
[02:24:14] Marked?
[02:24:15] I just made
[02:24:16] get notes and or get note and get no preview. Now you might be like, well, I don't want to do that, but like,
[02:24:22] That's fair.
[02:24:23] Why am I serving it from separate API?
[02:24:26] But making API routes is trivial in this approach, right?  And the other thing to consider
[02:24:32] is that
[02:24:35] That is what you're doing with server components.
[02:24:37] you are making
[02:24:39] a different API route.  You made a different component
[02:24:44] Right?
[02:24:45] To do it.
[02:24:47] But like,
[02:24:49] Thank you.
[02:24:50] Like...
[02:24:50] It didn't actually save you all that much code because you're still making a second version of it.
[02:24:59] Like, if you look at the setup of this, of this, uh,
[02:25:05] of this whole thing.
[02:25:07] It's pretty simple. We have a couple routes.
[02:25:10] And then we have like
[02:25:12] a note editor which has a few buttons on it. If you actually look at the component, there is
[02:25:18] the one that uses marked on the client to stick it in,
[02:25:23] And then there is, if I look at the preview page,
[02:25:31] I just...
[02:25:32] inner HTML
[02:25:34] the already marked up, marked out. Like...
[02:25:41] I'm sure there's cases where server components were, you know, rendering the XML might be better.  Yes, I'm just saying...
[02:25:50] From this basic demo,
[02:25:53] all the same characteristics of not loading the libraries is true.
[02:25:59] And I can see at a certain scale,
[02:26:05] Um,
[02:26:06] this could actually get, you know,
[02:26:08] larger, right?
[02:26:11] I have to admit, I've never seen a 29 kilobyte Next.js app.
[02:26:16] But...
[02:26:18] Essentially...
[02:26:23] You can make the determination for yourself on bundle size.
[02:26:27] But...
[02:26:29] no one...
[02:26:31] This is definitely a reduced bundle size compared to
[02:26:35] that's being built.
[02:26:36] In next AS.
[02:26:39] Just throwing that out there.
[02:26:41] Thank you.
[02:26:44] Thank you.
[02:26:45] Thank you.
[02:26:45] so I don't know
[02:26:52] Thank you.
[02:26:54] Thank you.
[02:26:55] You guys...
[02:26:57] I...
[02:26:58] .
[02:26:59] Nothing actually replaces GraphQL
[02:27:03] Um,
[02:27:04] For what it's good at.
[02:27:07] Thank you.
[02:27:09] Right. But
[02:27:11] Thank you.
[02:27:13] If you thought that TanStack query and TRPC
[02:27:17] was a sweet spot.
[02:27:19] But, you know, it didn't solve all the...
[02:27:22] The issues here,
[02:27:24] This could be the type of option, as I said.
[02:27:28] It does all the stuff.
[02:27:31] And it.
[02:27:32] all it asked of you was to set up
[02:27:36] basically
[02:27:38] these cache and action functions that you would have set up with RSCs anyways.
[02:27:43] but there's no client components.
[02:27:45] There's no...
[02:27:49] Yes, there's no use client.
[02:27:53] And
[02:27:55] Yeah, I don't know.
[02:27:57] Thank you.
[02:27:58] Thank you.
[02:27:59] Oh
[02:28:10] So from the wishlist you gave me on Twitter a couple of weeks ago, you're giving up on  partial hydration in favor of fine-grained ablation.
[02:28:17] Yeah, the tricky part, this was what I was talking about, like,
[02:28:24] I'm not giving up on those other solutions.
[02:28:27] I just needed to
[02:28:29] or that space, I just needed to ask the question of what they're solving and
[02:28:35] You could still combine this with server components.  I wrote a document a couple...
[02:28:39] weeks ago.
[02:28:41] where I talked about unified data loading, right?
[02:28:44] Um...
[02:28:46] It's completely doable. It's just like,
[02:28:50] I wanted to be happy with the data.
[02:28:53] Model.
[02:28:54] for when we release Solid Start 1.0.
[02:28:58] And I think this is it. It's basically trying to be the pinnacle
[02:29:03] of
[02:29:04] of what we've been doing with Remix and Tanstack and
[02:29:09] and these kind of experiences.
[02:29:13] The last piece for me...
[02:29:15] was what I got working this week was the single flight mutations because
[02:29:20] There's basically nothing on the client waterfall side of things.
[02:29:24] or I feel on the dev experience side of things, that
[02:29:28] people could say are
[02:29:31] a downgrade from  using something like RSCs.
[02:29:37] Thank you.
[02:29:41] Thank you.
[02:29:45] So, yeah, anyway. I don't know. I think this is a cool demo. I still
[02:29:52] I want to just do it one more time to...
[02:29:55] Because the thing is, we combine these techniques...
[02:30:00] you know,
[02:30:01] Let's go back to PetchxHR.
[02:30:05] We combine these and let's open up different.
[02:30:08] We combine these techniques
[02:30:10] with our ability to do fine grained, right? Like,
[02:30:14] I just love that it's that single.
[02:30:18] single post and it fits in like
[02:30:20] We still...
[02:30:22] I wonder if...
[02:30:23] Yeah, this one does a page redirect.  But like, if I open up to do MVC,
[02:30:31] you know.
[02:30:33] But like to experiment, you know,
[02:30:36] No, example to do MVC.
[02:30:40] And I'm not going to bother with the production build here.  I'm just going to go in dev, OK?
[02:30:46] So forgive me for a moment.
[02:30:49] Because we're going to get a bunch of stuff, but...
[02:30:53] Like...
[02:30:54] Let's go. Hello.
[02:30:59] You're actually seeing the...
[02:31:02] the single flights here.
[02:31:03] Another.
[02:31:06] Even though technically we're doing the whole list because it's invalidating the to do list.
[02:31:11] Like...
[02:31:12] It's still, you know,
[02:31:15] Thank you.
[02:31:18] If I have these list items all expanded out here,
[02:31:23] If you go and add another,
[02:31:25] Hey.
[02:31:26] It's I mean, it's not impacting these.  We're still doing we're using a store.
[02:31:31] in solid to actually diff the data.  So these just gets basically just skipped right away  and nothing renders.  It's all completely granular updates.  Like which one is this?  Let's inspect here, right?
[02:31:47] Another. What happens when I cross this out?
[02:31:51] Right?
[02:31:54] So, yeah, I mean...
[02:31:56] It's not quite GraphQL, but...
[02:32:02] The fact that it's organized by data source lets us, you know,
[02:32:07] save work when they're
[02:32:09] multiple of these.
[02:32:13] Thank you.
[02:32:19] Thank you.
[02:32:20] Yeah. Action, single flight. Yeah. I mean, we have all the information. Um,
[02:32:27] with these systems. So
[02:32:29] Do you guys want to see...
[02:32:34] It's actually easier to show it to do MVC demo, right?  If I go to the network,
[02:32:39] And I...
[02:32:42] Okay. Bye.
[02:32:43] Trying to think of how to do this.  Okay, that's fine.  Let's go...
[02:32:47] Let's go fast 3G so we can stand ourselves. Let's just click this check. It's taking 585 milliseconds roughly to do this update, right?
[02:33:00] 587, do, do.
[02:33:03] five, right?  If you're seeing it, when it turns purple here,  that's when it's doing an optimistic update.
[02:33:08] Like that's the optimistic update triggering, right?
[02:33:11] It's like already unclicked it, but you can see it.
[02:33:14] Right?
[02:33:15] If I...
[02:33:16] Turn off.
[02:33:17] Now I'm going to have to turn no throttling here because all the Vinch resources are going to go  here, but if I go into to do MVC.
[02:33:26] I'm going to go into...
[02:33:28] app PSX and I just do a little bit of a
[02:33:32] single flight
[02:33:33] equals false. Let's just turn it off. Okay. And the whole page is going to reload now. Let's make sure it's all reloaded. Good.
[02:33:42] Who has to pass 3G? And do the same thing.
[02:33:44] Let's check it.
[02:33:47] Thank you.
[02:33:48] I mean,
[02:33:53] We're doing a post, we're getting no response, and then we're doing the get for the data, right?
[02:33:59] You can see it, it's taking about 1100 milliseconds.  It's twice as long here.
[02:34:05] like it does impact
[02:34:08] the snappiness of your app.
[02:34:10] Um,
[02:34:11] so to speak.
[02:34:12] It might be minor.
[02:34:16] But...
[02:34:17] The network is definitely consideration. And I haven't increased the, like if I put artificial delays on the data, it's also kind of cool because the,
[02:34:27] Again, the data can, like, if you have multiple sources, it can stream in independently as it finishes, as you fetch it.
[02:34:34] Um,
[02:34:35] Again, I don't have a good example for that, but I just...
[02:34:39] Just kind of showing the difference here.
[02:34:43] Like, let's see how painful slow 3G is.
[02:34:47] *laughs*
[02:34:50] All right, there we go.
[02:34:52] There's slow 3G.
[02:34:54] That's...
[02:34:56] So that was about four seconds.  I mean, it's pretty predictable.  I'm pretty sure the Chrome simulation is just like,
[02:35:04] almost like
[02:35:05] going to just...
[02:35:07] Let's go back slow 3G.
[02:35:10] So let's first refresh the page because I don't want to
[02:35:13] Let's go slow 3G and then let's do it again.
[02:35:20] Right?
[02:35:24] So,  you know, maybe I'm  too much of a performance nut, but
[02:35:30] It's pretty cool when
[02:35:32] You can double the speed of any process on your page simply by like,  this is what you would do anyways.  Just we got lazy, right? When we got a query cache,  we didn't want to deal with caches and,
[02:35:44] The fact that it even works through redirects is really cool as well.
[02:35:51] Thank you.
[02:35:52] Thank you.
[02:35:54] Thank you.
[02:36:00] Thank you.
[02:36:03] We're going to call it name flight, yeah.
[02:36:08] Amen.
[02:36:15] But aren't we past Optimistic Updates? Are the downside of Optimistic Updates already thinking? I mean, Optimistic Updates are...
[02:36:21] cool in that you get immediate responsiveness. If you ever want to see, Ryan Florence makes some of the best demos around optimistic updates because then you're not waiting. You get a Kanban board where you drag items between lists and with optimistic updates,
[02:36:35] you don't feel like you're like dragging and you're like, okay, like that experience wouldn't be possible without optimistic updates in a sense.
[02:36:45] Because, like, if you want drag and drop to work smoothly, you don't want to, like...
[02:36:50] Like, have it like, oh...
[02:36:53] I'm intending to drop it there. Let's wait for it.  Okay, now I'm going to move this one here.  Let's wait for it. Picture getting stunted  by that. Um...
[02:37:00] It's better for localized updates,
[02:37:02] One cool thing about the pattern with solid is because you just import the action. Technically, it's not through the component tree. You can literally use submission in any component on the page and then it can like tie into the optimistic updates, even if it's not part of the direct tree. So maybe that's like asking for abuse. But generally speaking,
[02:37:19] You know, optimistic updates do have value for like tactile type interfaces, like when you like things like like buttons or drag and drop.
[02:37:34] Well, transitions generally happen with optimistic updates, right?
[02:37:41] Because
[02:37:44] *laughs*
[02:37:45] Thank you.
[02:37:45] But...
[02:37:47] Yeah, I mean, the one that I always enjoyed doing was, um...
[02:37:53] Yeah, I actually should check the timing on that. I used to like spam
[02:37:57] I remember doing a thing where I was like spamming this.
[02:38:00] And one thing you'll notice is
[02:38:03] Although it's not doing it now. It's interesting.
[02:38:05] Thank you.
[02:38:06] The air hand-- there's a bunch of race case
[02:38:10] Um, what do you call it?  Um, there's a bunch of like, uh,
[02:38:15] Uh...
[02:38:18] what do you call it, rates condition cancellation logic  built into these things.  And then they use transitions to try and--
[02:38:25] coordinate updates together because they do
[02:38:28] generally there's like this get this is post and get cycle.  But if the previous one has gone and the data is invalidated, it
[02:38:36] It knows that as it feeds back through the resource because the client still treats it like a fetch, even though it's coming from a cached value.
[02:38:46] If that makes sense?
[02:38:48] So...
[02:38:49] Like, it has all the same rules around it.
[02:38:55] Thank you.
[02:39:01] what do you got for me dave
[02:39:03] Thank you.
[02:39:04] Thank you.
[02:39:05] Thank you.
[02:39:08] Yeah, yeah, yeah, yeah. This demo is...
[02:39:12] Just...
[02:39:15] is just...
[02:39:16] Amazing. I want to remake this with Start. Our APIs completely allow for us to do this, but if you ever get a chance...
[02:39:23] Because he shows some code, but like...
[02:39:33] He was basically just showing how he could just drag and drop.  It's what I was explaining before.  Yeah, definitely check this out.
[02:39:42] Yeah.
[02:39:45] Thank you.
[02:39:47] Thank you.
[02:39:52] Yeah, yeah, I mean, the thing is, sometimes things fail. If you assume stuff's gonna go forward most of the time, it means a better thing. But occasionally we get to a point where we go, "Hey, this fails." But the cool thing about this off-nest-rug update pattern that we use, that we got from Remix, you know, thank you Remix again, is that
[02:40:13] It's using ephemeral state.  You don't have to worry about cache reads.  If you've ever done optimistic updates in GraphQL  or like old mutation API and TansTack, do you still like
[02:40:20] basically write to a pseudo cache, and then you'd read from that cache, and then you'd like, you'd have to undo it.  By feeding it through ephemeral state, we don't have to do any cache writes. So it just makes the UX or the sort of DX so much nicer to deal with. You just import your action anywhere. If it's in flight,
[02:40:36] you can use that submission information and then just show your optimistic updates.
[02:40:44] Thank you.
[02:40:45] Thank you.
[02:40:46] Thank you.
[02:40:46] Thank you.
[02:40:51] I mean, that was the one thing that I have stolen from Remix was the optimistic updates.
[02:40:59] Most of the other stuff,
[02:41:00] we were already kind of doing like nested routing and parallel data fetching and all that. We didn't even loaders, but they weren't like the same. Ours were isomorphic. We didn't have server loaders.
[02:41:09] See, this is why I love server functions.  It's because...
[02:41:12] This is an isomorphic API, right?  If I go into this silly demo now, and I go, we're in TodoMVC, and I'm just like, "Hey, guys,
[02:41:25] um, vconfig.
[02:41:29] I don't know, start...
[02:41:32] SSR.
[02:41:35] False.
[02:41:36] I haven't tried this, watch this like backfire on me terribly, but if I do SSR false, what we're going to see here when the page reloads and we get out not on slow 3G killing us here, what you're going to see here when our page reloads is that
[02:41:51] Um...
[02:41:52] Let's look at the dock.
[02:41:54] You could hopefully see, yeah, you see it's blank.  It's because if we get down here, this is dev mode, sorry for all that extra stuff.  But if I format this out and look at what's in the HTML here, you're going to see just like a
[02:42:07] empty div or something, right?  Div app ID, like here we go, client-side rendered.  This is client-side rendered.
[02:42:12] But that does not...
[02:42:14] prevent us from
[02:42:16] It's so funny because of the air log stuff coming in.
[02:42:20] but not GS.  I'm going to fetch X.  It doesn't prevent us from being able to leverage,  um,
[02:42:27] Because it's SSR false, this is the original get request from the page loads.  But it doesn't stop us from doing these single...
[02:42:36] single flight things, right? Because
[02:42:40] Yeah, so usually on SSR this will be rendered on the server, because this is SSR off, we have to actually do the original get
[02:42:46] from the client, but then look, single flight.
[02:42:49] did not require SSR.
[02:42:51] Technically, there's a backend server handling these server functions, but yeah.
[02:43:06] Yeah, I mean, then if you're dealing with stateful backends, then we're talking a completely different...
[02:43:14] problem space solution as I've been kind of saying, staying about.
[02:43:18] There's obviously staple solutions to those kind of things.
[02:43:23] Thank you.
[02:43:24] Okay.
[02:43:26] But like we used server functions when we were doing our service and events because we could get the URL.  Like you can always take the URL of the server function and plug it into.
[02:43:35] these things, but generally speaking, I'm not talking about that. Obviously, signals are an  amazing way to do multiplayer, because literally, as the data comes in, you can just do fine-grained  updates, good performance, whatnot. But
[02:43:49] Thank you.
[02:43:52] Right.
[02:43:57] The failure is also super easy handle on the remix hook is super comfy and stable. Exactly. Yeah, yeah. We have our use submission. You can propagate the errors through and do all the kind of same stuff you do in remix.
[02:44:07] But as I said, what's cool is...
[02:44:10] some of the cool stuff that we have that, you know, as in Remix doesn't do, which is single flight mutations,
[02:44:18] fine-grained granular invalidation revalidation. It's kind of like,
[02:44:24] Taking that...
[02:44:25] maxima that we had  with trpc and tan stack  query and taking it
[02:44:33] you know, to that next level.
[02:44:35] - I'm sorry.
[02:44:36] Anyway.
[02:44:41] Thank you.
[02:44:43] Can you show us the code doing the optimistic update? Sure. Yeah. Yeah. Cause this is all,  this to do MVC is all in a single thing. It's,
[02:44:51] It's a little bit complicated, but it handles all the cases. So you can kind of see it. Let's go here to do MVC routes. I just it's all right in here.
[02:44:59] So, first of all,
[02:45:04] We import all our actions and cache functions, and there's quite a few for todo MVC from here.  So this is the kind of setup that I showed the other place where essentially we have all these, you know, server
[02:45:16] actions and our one cache function for our to-dos. And then when you go in here,
[02:45:23] We load our to-dos, get our async store,  and then we have use submission for adding to-do,  removing to-do, and toggling all.  And the thing is this, it tells us for an appending state,  and it also gives us the in-flight submission.  This also works.  The reason we like this pattern is it works  when JavaScript is turned off.
[02:45:41] Um...
[02:45:42] So like,
[02:45:43] It works completely like this is why we use forms for this, because
[02:45:48] This actually produces an actual URL properly for the form action. So if there's no JavaScript load on the page and you submit the form, this to do app works perfectly fine. You don't get the optimistic updates, obviously, but it works completely. But the thing is, we have this add to do. And what this add to do is doing is give me all the submissions. See S, all the submissions for add to do. And then add to do.
[02:46:10] Somewhere down in our list further, we have for each adding to do, we show a different thing.  See, we have the for loop for all the actual to do's.  And then underneath, we have a for loop for the adding to do's that are currently pending.  Then what we do again, this is form data.  So it's a little bit of a pain because of this, you know, we grab our input first argument, which is a form element, and we get the title.
[02:46:31] So we can always feed, like if you're not using actual forms, you can
[02:46:34] or using some of those width fields, you can just take the input and this input is typed
[02:46:39] based on what the actual action is. This one takes only form data. So you get the input
[02:46:46] from there, get the title,
[02:46:48] and show that with a disabled
[02:46:51] destroy button. So this is just feeding it back into the reactive cycle so that when I sit there and I spam this with a bunch of stuff,
[02:46:58] maybe slow that network down again so we can see it.
[02:47:03] You know, we can see those it's purple right now.  And then as you see them as they as they come in, I don't have an error example right now, but I've had version the past with with like remaking a bunch of the remix stuff where essentially.
[02:47:17] Um...
[02:47:20] we're more or less,  we,  we basically handled the,  the errors and like let people retry and stuff.  Um,
[02:47:30] But yeah, I mean, it's...
[02:47:33] It's pretty powerful. Like you might be going, well, how do you do the checkbox?  Well, that's a little bit more interesting in each list.
[02:47:40] here, I go, okay,
[02:47:41] toggling to do. Is it toggling? Let's use that submission. So it goes, gets me a submission and  it only gets me the submissions that equal this ID. So this is going like, get me the
[02:47:52] See, because input zero is the ID number.
[02:47:57] So it goes, get me the submission.
[02:47:59] that I've toggled to do related to the specific ID. And then
[02:48:04] how do we know if we're completed?  Well, either toggle all is pending,  and in that case it's not,  it's whatever the opposite of that input is  from the checkbox, essentially,  or toggle to do is pending,  and then it's not its current status,  otherwise it is its current status.  So there's a bit of logic here,  because you can think about it,  you can toggle the optimistic
[02:48:26] here, although it looks like I have the
[02:48:29] a wrong opposite for the toggle. I should fix that.
[02:48:32] You see that?
[02:48:36] Yeah, I have an opposite for the toggle all. It should be
[02:48:39] when it's toggle all
[02:48:42] It looks like it actually wants to be like this.
[02:48:46] Save that.
[02:48:48] Now, when we toggle...
[02:48:50] So our month's row, slow 3G is just brutal for hot reloading.  Anyway, sorry.
[02:48:56] So like all the JS assets float again and then just,
[02:48:59] painful.
[02:49:02] Let's put it back to the slow 3G so we can see this.  I think that should fix it.  See, now it's optimistic, yeah.
[02:49:08] About...
[02:49:11] Yeah.
[02:49:14] Yeah, there we go.
[02:49:18] Okay.
[02:49:20] Amen.
[02:49:30] Yeah, our examples are in the solid start repo right now, yeah.
[02:49:39] Thank you.
[02:49:40] Thank you.
[02:49:46] Thank you.
[02:49:48] So you guys are following along?
[02:49:55] Yeah.
[02:49:56] I think you thank you, Dave, for explaining this in the chat.
[02:50:03] Yeah.
[02:50:05] Yeah, it's
[02:50:06] I don't know. I'm not saying this is
[02:50:09] This is a thing that comes after GraphQL.
[02:50:13] But yeah, pretty, pretty powerful paradigm. And just because you always have to show this, this, this example.
[02:50:22] Here.
[02:50:24] disable JavaScript, right? This is what we got to do this, right?
[02:50:29] Just to keep us honest here.
[02:50:32] Oh, let's not slow 3G it.
[02:50:36] Thank you.
[02:50:37] Is it because I'm in dev mode?
[02:50:40] This is not--
[02:50:42] That's actually weird.
[02:50:44] What's going on?
[02:50:45] Oh, it's good. I turned off JavaScript. Do you know what's wrong, guys? We were doing this whole thing with SSR turned off.
[02:50:52] I forgot about that. When I disable JavaScript, well, nothing rendered.  See, I proved that SSR was false.  There we go. Let's try this again.
[02:51:02] There we go.
[02:51:04] There we go.
[02:51:05] Thank you.
[02:51:06] Slow page load is because it's all the dev scripts running in the background. I have to admit, I'm a little bit choked by this. It's because we have amazing dev tools now that give you code highlighting down to the line you're on, but it sometimes slows down the initial load. Anyways.
[02:51:20] JavaScript is off, right?
[02:51:24] If I look here, you're not going to see any history, you're just going to see the whole page reload on the spinner, right?
[02:51:30] See?
[02:51:31] Dude, there's no optimistic updates anymore.  There's just no JavaScript on this page.
[02:51:36] But we still get most of our functionality.
[02:51:39] You can only submit one thing at a time.
[02:51:41] because...
[02:51:42] But we're pretty close to the server anyway.
[02:51:48] Anyway.
[02:51:49] Just keeping me honest here with the...
[02:51:54] No, wrong one.
[02:51:56] Thank you.
[02:51:58] enable that javascript again anyways
[02:52:01] I've demoed this enough, or at least the existing features.
[02:52:08] Amen.
[02:52:12] Thank you.
[02:52:13] Yeah.
[02:52:19] Almost this pattern of double fetching became super, super common the last several years because of things like hand stack query.
[02:52:28] Because the thing that I'm not getting at here is a reason part of it is people don't like cash rewrites.  The other reason is think rest.
[02:52:36] Like sometimes you update a resource and it actually impacts multiple things on the page.
[02:52:42] So like returning the data, or how about if you do like a redirect afterwards, like you post to some data and then you go to the next page.
[02:52:50] Right? Like,
[02:52:52] there's always these cases where like...
[02:52:56] You could return the data if you know what you're doing, essentially, specifically, but you'd kind of go and be like, okay, I need to update this, this and this.  With using the cache keys, you're kind of like doing almost like a...
[02:53:10] PubSub kind of like where you're just like, hey, stuff with this key or
[02:53:14] with this sort of key update. You might go update everything related to users.
[02:53:19] It made it a lot easier for people then to make sure that they were writing to all the right APIs and caches and all the right places, returning the exact data, that it became incredibly common to de-optimize.
[02:53:37] Yeah, so...
[02:53:41] Yeah, don't get me wrong.
[02:53:45] I would try and avoid this always, but...
[02:53:48] Like it just.
[02:53:51] And the problem is...
[02:53:53] It started getting ingrained into it because like...
[02:53:56] Even...
[02:53:57] Even like when we move to everyone's...  You know, people start moving to Remix, for example...
[02:54:04] Like the choice...
[02:54:06] wasn't yours anymore. Because that's just how Remix works.
[02:54:11] Right. Like,
[02:54:13] So like with this, you know, the slippery slope, wherever I have it here that I talked about before here.
[02:54:24] Thank you.
[02:54:27] Like, we just kind of accepted this, you know?  And I always like challenging these kind of assumptions we accept.  Like, we're very quick for DX reasons to say good enough.
[02:54:36] But often you can make small wins without necessarily sacrificing the DX. And if you're smart enough, you can figure out how to maybe bend things to, you know, actually make...
[02:54:49] It, you know,
[02:54:51] Even better DX, arguably.
[02:54:53] Thank you.
[02:54:54] Anyway.
[02:54:56] Um...
[02:54:59] I don't know, you guys, I think I've shown it off.  I showed the network tab, I showed the timing,  and I showed that this is basically something you just get for free  if you if you use this setup. So
[02:55:12] I don't know.
[02:55:12] Bye.
[02:55:15] Obviously,
[02:55:16] maybe not as hot of a demo as like our
[02:55:19] 13 kilobyte movies app demo, but I actually think this one's actually more
[02:55:23] practical when I think of all the loopholes and the fact that you can basically use this using the patterns that you already are all used today without learning any like without really learning much new stuff no server components no like restructuring the laws of you know all that.
[02:55:44] Thank you.
[02:55:47] Yeah, I mean, yeah, in theory, it could. You just, like, the keys were my trick to basically doing the fetching and then, like, and selectively doing the fetching and then, like,
[02:56:00] passing it across in a data format and then just cache setting. But yeah, this could be,  the core mechanism of this is using HTTP communication, using headers, so basically to  decide on a data format. So it's like a protocol. So technically speaking, you could probably do  this with something like GraphQL as well. I just, I just wanted to,
[02:56:21] Thank you.
[02:56:21] You know, I mean, GraphQL already, except for the redirect case, already kind of already did
[02:56:27] this stuff, right? You know,
[02:56:30] ...
[02:56:34] I
[02:56:35] what are those hex values at the top of the JS files?  Or you mean on the top of the requests  that we were looking at?  This, yeah, this isn't JS files.  What's going on here is, oh, sorry.
[02:56:48] Let's get JavaScript back.
[02:56:50] is...
[02:56:52] He uses this for chunk encoding for the stream.  It just works better.  Basically, whenever you see one of these,
[02:57:01] inside the server functions, that's telling you that it was streamed in. This is
[02:57:08] is the path back initially.
[02:57:10] And then this is what comes back later.  So like, this is what I was talking about where
[02:57:18] the initial response goes, "Hey, this to-do
[02:57:21] Um,
[02:57:23] isn't ready yet, here's a promise.
[02:57:25] And then later on, it's like,
[02:57:27] Where does it store that promise? It looks like R2. You'll see something down here.
[02:57:33] where...
[02:57:36] Probably...
[02:57:38] I think it's stored in R2. R2, no, this is the function he calls.
[02:57:42] So is it R1? Somewhere down here, what we're going to see
[02:57:46] is
[02:57:48] He's going to call...
[02:57:51] the function essentially with the success data.
[02:57:55] Yeah, like I think...
[02:57:57] Oh, the--
[02:57:58] What is this?
[02:58:01] Whenever this
[02:58:03] Yeah, this is actually the serialization of the promise resolve function.  Like the code that we actually need to resolve the function isn't present  until we stream it in the first time. Like so
[02:58:15] This code is a function that calls with the reference to the promise, which was R1.
[02:58:21] And then with the data,
[02:58:23] that it completes with. Yeah.
[02:58:29] Thank you.
[02:58:30] Yeah, so yeah, the Notes app and the TodoMVC app are all in the Solid repo. You can just go to the SolidStart repo. They're not deployed. These are just examples. You can literally go npm init solid and install and run them on your own computer, part of the virus CLI.
[02:58:47] Yeah.
[02:58:49] So,
[02:58:50] Yeah, this is...
[02:58:52] This is...
[02:58:53] I think it's worth it, you know, adding those kilobytes to be able to do these kind of really cool serialization stories.  But yeah.
[02:59:01] Thank you.
[02:59:02] This is...
[02:59:03] This is all gearing up to Solid Start 1.0.
[02:59:08] Thank you.
[02:59:10] Okay. I think it's probably time to switch gears, right?  I've answered everyone's questions. We can probably kind of get into...
[02:59:18] maybe this week in JavaScript.
[02:59:24] Thank you.
[02:59:24] Thank you.
[02:59:31] I'm glad you guys like it.
[02:59:37] I feel like I was more excited about this than other people.  Like I was going to think about posting the notes demo on, but I don't think like it's not like the islands demo where people just go, oh, look at how small the JavaScript is.  Like single flight mutations, people, this is the problem.  People were doing this stuff and just didn't realize like like people were doing multifliting and weren't realizing that they were taking that hit.  They just like weren't thinking about it.  So like how do you suddenly show people?
[03:00:00] people that
[03:00:00] Thank you.
[03:00:01] you can simultaneously...
[03:00:04] make a DX improvement,
[03:00:05] in this area and the UX improvement when they weren't even thinking about the UX improvement,  even though like that's probably the more significant part.
[03:00:13] All right.  Um...
[03:00:20] Okay, let me get this stuff ready for next part.
[03:00:26] To do to do to do to do to do.
[03:00:30] Thank you.
[03:00:31] Um...
[03:00:34] Thank you.
[03:00:35] Thank you.
[03:00:38] Sorry, it just takes me a minute to get all set up for this week in JavaScript.
[03:00:44] Um...
[03:00:49] It's funny, making this demo happen and everything probably took more work than actually showcasing it.  It's just like, it just works, right?  So it's kind of...
[03:01:00] It's always tricky when that happens.
[03:01:04] Um...
[03:01:09] It's funny, the Sunil post that you showed me earlier, I already had, like, bookmarked.
[03:01:16] I wanted to talk about it, but we already talked about it.
[03:01:19] Let's
[03:01:21] One more sorry, just give me a second while I get this stuff organized.
[03:01:28] yeah yeah well it's so funny because he posted that this morning and i'm just thinking of like so many times in the
[03:01:38] like when we, you know, accomplish stuff with solid and it's been like,  it's felt like that, like especially the JSX one, I will never forget.
[03:01:47] the time that I first went on Twitter and something about
[03:01:52] JSX not being suitable for Svelte and someone like going like,  Oh,  I forget who it was.  Maybe it's rich himself.  So there's something about it being analyzable or something for his  purposes.  And I'm like nobody at this point.  It was like,
[03:02:04] early 2020 or something.  And I'm just like, well, no, JSX is perfectly analyzable.  You could do something with a compiler, blah, blah.  And the people in the reply were just like,
[03:02:17] like,  like,
[03:02:20] No, you can't.
[03:02:21] And I was like, no, just trust me, just give me a second.  Just check out this repo or just look at this article or the thing that I wrote.
[03:02:31] Just trust me, like,
[03:02:33] You don't have to trust me, just if you take a moment to look, this is possible. I'm like, no, you can't.
[03:02:38] Dominic Ganaway couldn't do it with React prepacked. You can't. And I'm like,
[03:02:44] And it was so fun. It was frustrating at that point because like I'd write it and then like
[03:02:47] the other person would write something and they'd get like 10 likes and I'd get none.  So it's like very new to Twitter and I was like kind of bombarded.  But like...
[03:02:56] I don't know. You've got to be careful when you talk with such certainty in tech. We'll look at this tweet. I enjoyed this tweet a lot.
[03:03:08] Yeah.
[03:03:10] Uh-huh.
[03:03:10] Yes, thank you. Looks like my dad's back.
[03:03:16] Hey.
[03:03:18] Yeah, you're welcome to Twitter moment.  Yeah, it was like...  People were telling me that JSX wasn't transpiled.  If you guys ever find that conversation, it's pretty funny.  It's like...
[03:03:29] between me
[03:03:31] And then it was like Adam Rakist and like
[03:03:34] What's his name? Jamie Kyle.
[03:03:37] Um, and so like these guys had like followers and people and
[03:03:43] Yeah.
[03:03:44] Like at one point, even like a clown face came out and I was just like, what do you like?
[03:03:49] what are you guys doing?  And it was so,  I remember this one specifically  because at a certain point  they flagged Dominic  and they were like this  and he came on  and he was just like,  man, no, this is legit,  you know?  And I don't know.  It was just,
[03:04:03] Yeah.
[03:04:04] That was definitely a welcome to Twitter moment for me.
[03:04:08] Um...
[03:04:10] Okay.
[03:04:11] Because, you know, I didn't, I barely knew Dominic.  I didn't actually really know him.  I just, like, interfaced on GitHub because of, like, JS Framework Benchmark type stuff.
[03:04:21] Amen.
[03:04:22] Uh...
[03:04:25] Oh man.
[03:04:29] reminiscing okay so what we got here we got solid we got my page and we got some bookmarks okay I think we're
[03:04:37] We're good to go here.
[03:04:41] When was my last dream?
[03:04:42] like the 23rd or something.
[03:04:47] Let's look here, because I took a week off.
[03:04:52] We talked all about complexity.
[03:04:55] Right? So that was the 26.
[03:04:57] Yeah, so it's the 20, it's the...
[03:05:06] Yeah, okay, let's go here.
[03:05:09] Yeah, okay, 30th, yeah, so...
[03:05:12] Let's go.
[03:05:15] Okay.
[03:05:17] All right.
[03:05:23] All right.
[03:05:30] he's he's good guy I am I it was it was definitely tricky you don't understand it wasn't just people  like it wasn't just him like god
[03:05:40] Flix was pretty awkward, too.  He did the same thing, calling me out.  He just... I guess the problem is  people have conversations, they have  narratives where they want to  push on Twitter, so they can't have people  disagreeing with them. And then sometimes, you know,  you...
[03:05:56] Like they're missing the point of what they're like, you're trying to promote this particular idea and then someone's like, no, that's not the case. You're like, okay, it's this freaking reply guys. So sometimes you apply them, you're pretty nasty.
[03:06:06] The difference in my case was I had evidence and proof and I wasn't
[03:06:09] talking their scope of what reality wasn't. Like it was really, when Solid came out, people were very much on the fence. Like you have to be like Vue or Svelte or you have to be like ReactJSX. There's no middle ground.
[03:06:22] So it was very, very weird
[03:06:25] Um,
[03:06:27] It was very weird to...
[03:06:29] to like,
[03:06:31] like when I was like,  oh no,  JSX is fine.  People are just like,  no,  you can't do that.  And it's like,
[03:06:35] Why not? You know?
[03:06:41] Yeah.
[03:06:41] Yeah.
[03:06:43] Yeah.
[03:06:47] You know, it's fine.
[03:06:50] Yeah, this is not anything against Adam, because quite often people need to state the obvious or say it in a kind of like a...
[03:06:58] kind of outspoken, rude way, just so people can think around the problems.  I have no I have no grief with Adam at all, because I always knew that
[03:07:07] that was never like that was never
[03:07:09] He wasn't the guy giving me clown faces or stuff.  You know what I mean?  Um...
[03:07:15] other people I can't say the same thing for though
[03:07:19] Thank you.
[03:07:21] No, Ken Wheeler was not involved.
[03:07:24] No, these guys are good.
[03:07:27] Okay, um...
[03:07:28] Okay, well then let's...
[03:07:31] Let's do this week in JavaScript.
[03:07:36] Alright.
[03:07:38] .
[03:07:39] Yeah, I guess I should put the banner up. Why not?
[03:07:44] I use StreamYard features less and less these days.  Let's talk about this week in JavaScript.
[03:07:50] I'll start off with a little bit of solid stuff, because why not, honestly.
[03:07:54] I hope I... I'm going to have to ask him if I pronounce his name properly, but...
[03:07:57] whether it's Attila or Attila, I think it's Attila.
[03:08:01] He's been doing amazing work.  DX team has been coming together between...
[03:08:06] between him and Daniel.
[03:08:09] Um,
[03:08:11] I'm so stoked to see more people giving talks so I don't have to travel and give talks.  I am at a conference.  I'm at JS World at the end of the month.
[03:08:23] which is like the big VIEW conference.
[03:08:28] But...
[03:08:31] Yeah, no, it's awesome to kind of see this. Yeah, see, um, super excited to join the DX team. So there's a push on developer experience happening. Um, this is really the message for solid the last week or two. Um, get back to there. Um, there was a, uh,
[03:08:48] great podcast with this dot media that Tila did talking about teaching people solid and kind of getting there himself in his own journey.
[03:08:57] really excited to kind of
[03:09:00] have other advocates in the community pushing out the good word. Um,
[03:09:04] Very, very stoked. Let's see here.
[03:09:13] Thank you.
[03:09:14] And, yeah, I'm just looking at the chat to see
[03:09:20] Achilla
[03:09:21] Oh, there we go.
[03:09:22] Or is it okay? Chiller?
[03:09:25] All right. But other things is, have you seen Solid Start?
[03:09:29] Some big updates.
[03:09:32] Um, are the serve functions for the cache are actually get functions.  So you can use like content control headers.  We, we have a bunch of devX improvements given async local storage, um, uh,
[03:09:43] APIs, single flight mutations, all the stuff, you know, have been kind of sneaking in. The tricky part is like we're attacking this on so many places because the router is now pulled out of solid starts. So like works happening in the router that's making stuff better, that's like might not be reflected on the release notes. I've been
[03:10:02] getting better change management so people can tell what's going on.  Stuff is moving very fast right now.
[03:10:08] but
[03:10:09] Like,
[03:10:11] you know,
[03:10:12] Save maybe having server components
[03:10:15] I think we put together an amazing set of features and capabilities.  I'm very, very happy with how this is turning out architecturally.  We're still, you know, working through bugs and stuff, figuring out where our...
[03:10:30] shortcomings or like what we don't understand about like, say, how we do deploys with Nitro and different presets and stuff. But generally speaking, like the feature level, like the top surface, I'm very, very happy.
[03:10:41] in.
[03:10:43] So yeah, cells start progressing quite nicely.
[03:10:50] yeah no I'm loving  seeing like
[03:10:55] people build apps, responsive PWA discord clone built completely in solid. I mean,
[03:11:03] It's capable, you know, just it's just a matter of people taking the taking the chance to, you know, try this stuff.  This is.
[03:11:11] Yeah.
[03:11:12] Um,
[03:11:14] Kind of cool little side story.  Those you know, Giorgio works very closely with Quick, Quick Advocate as it says here.  Met him when I was traveling last.  And he poked me one day and he was like, hey, want to get Party Town integration, right?  That's the thing that offloads the main scripts.  So you can get your analytics off the main thread, improves, you know, page load scores considerably.  And I was like, yeah, sure.  I don't know what it takes.  He's like, oh, don't worry.  If there's nothing special you can think of, I'll just go try.
[03:11:44] and he did it and he got integration, did it all in a day.  Super, super stoked about that.
[03:11:50] So thank you, Giorgio. Just wanted to give a quick shout out from him and the guys at Builder who have always been very supportive. So,
[03:11:58] Very cool to see.
[03:12:00] I've got a good relationship with the quick.
[03:12:03] group as you guys all know so yeah
[03:12:09] Um...
[03:12:18] Sorry, Benton, you caught me for a second. I have no clue what you're saying.
[03:12:30] what I'm looking at, and I don't know if I want to look at this right now.
[03:12:35] Let's keep on going with this week in JavaScript.
[03:12:40] Okay.
[03:12:45] I'm sorry.
[03:12:48] um anyway that's mostly solid news i just love seeing like new integrations so let's let's let's  flip this back around again um
[03:12:58] I'm going to go
[03:12:59] Thank you.
[03:13:02] I was struggling a bit on the router.  I knew I had to do those router releases for Solid Start and
[03:13:09] Something came really clear to me that I missed. You notice that Next.js and SolidStart
[03:13:16] use lowercase form elements.
[03:13:18] but they don't use
[03:13:23] Like...
[03:13:24] lowercase links or anchors.  They use capital on it.
[03:13:28] And it always bugged me because getting larger templates and stuff just cleans up the code and makes it more performance. It's just a
[03:13:34] Good win.  And that...
[03:13:37] In a sense,
[03:13:39] I really wish that we could just use anchors in our apps as normal with lowercase. And that's what we did with solid 0.10 for the router. But like, I realized later that like, we've come to expect things like having base path applied to all the routes, you know, like,
[03:13:55] Ahrefs, we're using components as a way of injecting Ahrefs configuration and formatting. And it's like, it's fine, but it's also like,
[03:14:05] the thing is,
[03:14:06] If you...
[03:14:08] have a library that has a capital A anchor tag.  Now, anyone who wants to use that anchor  essentially has to find a way of injecting it in.  If it's lowercase, everyone can just use it,  and it's expected behavior of that anchor.  You don't need a special system around it.  Svelte does that, but then if, you know,  I looked up SvelteKit and I was like, okay, SvelteKit,
[03:14:27] GitHub pages. GitHub pages is
[03:14:29] is like the classic
[03:14:31] problem you have when you need a base URL,  and set the base path, okay?
[03:14:39] And they're like, okay, well, that's simple.  Just go through and update all your URLs in your app.
[03:14:45] I was like, oh, okay, crap.  Because obviously when you have capital A,  you can just set it once in the router  and all the routes automatically get it.  Here, like their solution was just...
[03:14:55] go in and add it to all your hrefs.  'Cause in Svelte, you just used lowercase a.
[03:15:00] I was kind of like torn because I was like, man, in a way, I'd love to be as brave as  felt sometimes to simplify stuff and just be like, you handle it.
[03:15:07] right? But on the other hand,
[03:15:10] Um...
[03:15:12] Yeah.
[03:15:13] you know what I mean?  Like people come to expect this behavior.  It's you're taking something away from,
[03:15:19] when you go this way.
[03:15:22] Then the Angular crew came out and all told me about how powerful their directors work. They work even without, you know, like,
[03:15:29] applying something to the element. But our problem is our directives don't work on SSR.
[03:15:34] Because they expect an element reference.  They don't expect a...
[03:15:38] a string or whatever. So like,
[03:15:41] You could come up with all these solutions.  It's just much nicer...
[03:15:46] If you could just...
[03:15:48] you know, you could have like a special namespace prop like link:href or whatever, you know, kind of thing. But
[03:15:56] E
[03:15:57] I was just lamenting that we've gone to a point where I...
[03:16:01] felt it was awkward that in solid router, the lowercase a is like Svelte.  The capital A actually does the application.  So if you never need that, you can just skip the JavaScript, the capital A,  and just keep it nice import all that.  But I kind of wished I could just make everything lowercase a.
[03:16:20] Um...
[03:16:21] So,
[03:16:24] Yeah.
[03:16:25] Bye.
[03:16:26] Someone posted this really cool thing from Adobe...
[03:16:32] about how to do routing, and they're like, "Look, this is how you can use any router with our design system."  See, we have our own router provider,
[03:16:40] And then you pass navigate to it, and then you can put your router in here. See, this is how you do it with the React router, this is how you do it in the next router, this is how you do it with the pages versus the app router, this is how you do Remix. And I was like,
[03:16:52] I mean, this is universal.  It could work on anything.  But my point was, like, TanStackRouter wasn't here.  And it kind of brought to my head, like, I mean, wouldn't it be sweet if this whole page of docs wasn't necessary?  Like, you could literally just use lowercase anchor and be like...
[03:17:07] Like any library could assume that behavior because you can always pass the props through anything that proxies like a design system that proxies a link through. It's going to give you the ability to set an href or setting the underlying properties but.
[03:17:19] Like,
[03:17:21] Thank you.
[03:17:22] Yeah, I don't know. This is something that's still... It's probably more interesting to me as a framework designer than to you all, but...
[03:17:33] Yeah.
[03:17:37] Thank you.
[03:17:39] Yeah, Angular can...  Sorry, where was it?  The Angular can set...
[03:17:44] the base path. There's a comment here.
[03:17:50] Because
[03:17:51] I was one of the things-- and I swear you could catch the base on it.  You can, because Angular's directives--
[03:17:57] like apply the rule to the element without even attaching it.  So it is definitely just most systems,  even like,  like felt like,  like,
[03:18:05] and are kind of
[03:18:06] approach of augmentation only works on the DOM elements. It doesn't work during SSR because we use the element reference. Like there's user code. We wouldn't put it in that I actually am interested in how SSR works with Angular on that it feels like they designed a lot of their API's pre
[03:18:27] SSR so
[03:18:29] Yeah, I don't know.
[03:18:33] Well, see, here's the thing, active class,
[03:18:36] Yeah, that one needs JS, but like...
[03:18:39] And that's wrapping up a component seems convenient.  It was just like I'm thinking about stuff from like relative or type safe links with Anchor, right?  I mean, the only way you could do that is if you augmented the href itself, like used a helper function.  No one wants to import a helper function to use regular href.  But the difference here is this.  If you use regular href.
[03:19:01] then you could take an Adobe component,
[03:19:04] like say Adobe's
[03:19:06] link or button or whatever hell thing they have, and just apply your function
[03:19:12] that does the formatting to their HREP. You don't need to apply it to a lower anchor. You could apply it to theirs and it'll pass through. You'll know it works. Whereas,
[03:19:19] Mm.
[03:19:20] there's no way for them to have your anchor component.
[03:19:28] right?  Like we have directives,  but they don't work for SSR.  And I need this to work  for progressive enhancement.
[03:19:38] Thank you.
[03:19:39] Thank you.
[03:19:40] yeah, but what I'm getting at is the whole  fact that this exists  smells.  And especially when you look at this  from a requires JavaScript  standpoint.
[03:19:55] *sigh*
[03:19:56] Right. Like, it's kind of sad we got here. Like, I sometimes felt so dead on the money with their simplifications.
[03:20:07] You know, where it's like people don't want to give up certain DX because they're used to it.  But on the other hand, like...
[03:20:13] It's just...
[03:20:14] *sniff*
[03:20:15] It makes a lot of sense.
[03:20:20] Thank you.
[03:20:24] This was pointed out to me  that we can use the native base path.  It just doesn't actually help.  It helps with the top level case,  but it doesn't help us like relative links, TypeScript links.  But like I said, a wrapper function  for TypeScript links would actually probably work better.  So I started like thinking util-wise, you know,  but like, yeah, I started typing it up  and I was like, no one will ever accept this.  They just want a component that does it.  But the sad part about it is,
[03:20:48] It's kind of like
[03:20:51] Like...
[03:20:53] it actually affects composability.  It's actually a negative on composability.
[03:21:01] Yeah, I mean, the DX is worse. It's clunkier.
[03:21:08] Yeah, I mean, but the thing is...
[03:21:15] Heh.
[03:21:15] Again, that's a familiarity thing.  Like, the way anchors behave is still...
[03:21:24] It still falls within the semantics of anchors as long as they do navigation client side or server side.  We don't need to make that distinction based on the components or not. It was a good split.
[03:21:33] But once you go to components, there is a composable consideration unless you make that component core.
[03:21:44] Thank you.
[03:21:47] Thank you.
[03:21:50] We're from anger, tagging, why is everything?  Right, right.
[03:21:56] It's like better on so many sides when you can remove that kind of component.  Like components should be your choice of how you break apart your app, not having...
[03:22:05] Yeah, it's it.
[03:22:07] It's tricky. Routing is so fundamental to the web that it's a place that I'd be willing to make an exception to general rules because it is so fundamental to application architecture.
[03:22:21] Yeah, I mean, the same way these all handle it, like, you can, like, what does this actually say here?
[03:22:27] Note that external links to different origins  will not trigger client-side routing  and will use native browser navigation.  Additionally, if the link has target other than self,
[03:22:35] uses the download attribute or user presses modified keys such as command all to change the  default behavior browser native navigational occurrence instead of client-side running.  Funny thing is we actually use self as a way of saying that no don't do client-side in ours but generally
[03:22:49] like,
[03:22:50] Okay.
[03:22:52] Like,
[03:22:54] I
[03:22:55] You can there's always ways to opt out of it. But if you're saying like, hey, I'm going to use this tool and use like this library, having it like having a router on the page that controls navigation makes a lot of sense.
[03:23:08] Thank you.
[03:23:09] Right. So yeah, for like same origin, we use target self actually, ironically.
[03:23:17] Um,
[03:23:21] But...
[03:23:23] But like, and this is true of Solid Router right now, actually.
[03:23:28] Right.
[03:23:29] There was a while that we were explicit that lowercase a wasn't like that, but before we were.
[03:23:35] Stuff like this is true of Svelte as well.
[03:23:38] So, yeah, I'm just throwing this out here, right? Like,
[03:23:42] I understand why people don't like it and not what they're used to.
[03:23:45] But this is actually a decision that makes a ton of sense.
[03:23:51] Like...
[03:23:52] because routing is so fundamental.
[03:23:56] Like, it's basically a base element of the thing.  You know what the most ironic thing about this whole thing was?
[03:24:01] You're going to love this.  What do you think happened when I posted this?
[03:24:04] I got the web component people all came out.
[03:24:09] *sniff*
[03:24:10] Um,
[03:24:11] Thank you.
[03:24:12] Thank you.
[03:24:12] Thank you.
[03:24:13] Huh.
[03:24:15] Thanks.
[03:24:18] The web component people came out because they're like, well, we can upgrade an anchor tag without making a component.  We go a is.  And I was like...
[03:24:27] I was like, "Oh man."
[03:24:30] You're right.
[03:24:32] Um,
[03:24:33] But there's so many other concerns that come from Web Components. If you make X link, then you're not solving it. The native extensions for Web Components are actually a good use case for this kind of thing because you could...
[03:24:47] you know, in theory, apply that extension through.
[03:24:50] But like,
[03:24:51] The...
[03:24:52] My point is about being able to wrap it after the fact.
[03:24:57] Yeah, actually web components don't solve it in a sense, because if someone else comes up with their own component,
[03:25:03] that needs to make a design system around anchor, you need it to be plain anchor. You don't need it to be
[03:25:09] is Anchor.
[03:25:10] Unless you are...
[03:25:13] Like, I don't even know if you can pass...  You'd have to think of how to pass is from Adobe Link down to the anchor underneath it without it making...
[03:25:21] Adobe Link is like I
[03:25:25] Someone could probably design something for this. I'm just saying, generally speaking, web phones actually don't solve this wrapper problem. What I'm saying is the core navigation mechanisms for the web, like anchors and forms and stuff, should be...
[03:25:40] left alone to be core with the library or framework figuring out how to actually augment the behavior, not forcing them to be wrapped. Otherwise, they're not, they're like, sure, it means you might have to choose only a single router or that. I understand there's complexity there. Maybe it's related to regions of your DOM elements. But generally speaking,
[03:26:02] I'm kind of putting out there that like,
[03:26:05] from a composability standpoint, because these are the
[03:26:09] like you're addressing the core functionality of your app and you can't assume that
[03:26:13] when you're writing component wrappers that you like know how
[03:26:18] someone's chosen to use the router or whatnot.
[03:26:22] Thank you.
[03:26:23] Well, yeah, that sort of whole conversation as well, right? Because then you have to think about how the SSR story works in here.
[03:26:30] The funny thing is, if we didn't care about progressive enhancement, I could literally apply the base path on the delegated link. The problem is,
[03:26:37] it would be the wrong URL in the anchor.
[03:26:39] Um,
[03:26:40] And then when you clicked it, we'd solve it.
[03:26:43] Right, but the problem with progressive enhancement is when there's no JS, I wouldn't be able to intercept it and the anchor link would be wrong.
[03:26:52] Thank you.
[03:26:56] I mean, reactive webcomodes are fine.  We had solid element and...
[03:27:01] I built that old knockout app was all...
[03:27:04] web components um i built a when i built solid though we ended up not with components  originally because i was like oh i'll just use web components like
[03:27:13] It was clunky because when you try to use components in the way React uses components, you make too many DOM elements. But, I mean, it's fine.
[03:27:22] Thank you.
[03:27:25] Yeah, yeah.
[03:27:30] Yeah, yeah. I mean, it's just...
[03:27:33] The concept, again, this is the same argument almost here.  The conceptual breakdown of how you organize your app  shouldn't infer the DOM elements required.  It's just the wrong,
[03:27:42] thing like I understand like you're like oh I have this reusable component when you're thinking about  it from like
[03:27:48] a custom element standpoint, like I have this element,
[03:27:51] you know, design wise, you know, I put it in my document. It makes sense, but that's not what components are. This whole discussion of components is the misalignment of the word and the expectation.
[03:28:01] Thank you.
[03:28:02] If it had docs, people would use it.
[03:28:07] Thank you.
[03:28:10] Thank you.
[03:28:12] Thank you.
[03:28:14] Thank you.
[03:28:19] Not much, it's so funny. We'll see. I thought it was going to be 18. It was actually originally going to be 17. The React core team actually thinks it's funny. It's like whenever Alex Russell publishes a paper dissing React, they pull back the support of web components by a major version.
[03:28:36] Um...
[03:28:38] .
[03:28:40] We have much better support of web components than they do, but I mean...
[03:28:43] They could just do it at any time.
[03:28:47] It's almost by just not doing it.  They just don't have to worry about a bunch of this crap.  You know, like there's a certain region where like people will do it, but you're just like,
[03:28:56] Why are you even doing it?
[03:28:58] I'm sorry. I know we have people who are big on WebPots and Solid community.  It's just...
[03:29:03] I'm...
[03:29:05] It's the hardest position to get someone excited about something who was previously excited and now disillusioned.
[03:29:14] It's very hard to go full circle like that.
[03:29:19] Hey Austin, how's it going?
[03:29:20] Thank you.
[03:29:22] Oh, rating party.
[03:29:23] Thanks for the raid.
[03:29:26] and
[03:29:29] Yeah, I mean...
[03:29:32] Yeah, there we go.
[03:29:34] Reel Link's forms for the win.
[03:29:37] Thank you.
[03:29:39] Oh, web components. But it was only a tangent. I was talking about this week in JavaScript, talking about some... I was trying to convince everyone that we should use lowercase anchor instead of wrapped link components, but it would make developers have to do more work.
[03:29:55] Not every community resets like Svelte. There's expectations like
[03:30:00] Jack.
[03:30:00] Yeah.
[03:30:01] And then I said that when I proposed this to a bunch of web component, people came out of the woodwork and be like, web components solve this.  And I was like, yeah...
[03:30:09] Maybe, maybe not.
[03:30:11] Anyway.
[03:30:18] Okay.
[03:30:19] Yeah, I didn't stream last week, as I mentioned, because I put this release out.
[03:30:22] Um...
[03:30:24] This is cool. Let's talk.
[03:30:27] Greg, Greg, we know Greg. He's usually here in the stream hanging out.
[03:30:31] Um,
[03:30:35] Thank you.
[03:30:36] He...
[03:30:37] One thing that we haven't talked about much because I've been underplaying it, Solid Islands mode still works in Solid Start. You can go make like an Astro-esque island setup. We don't have like, we didn't bring back the client routing thing yet. I felt like it wasn't.
[03:30:53] stable enough, but you can...
[03:30:56] do islands mode, and you can do, like,  a, like, I guess a fresh type  setup of islands. It's not quite Astro.  Astro's actually a little bit better. But, like,  generally, you can do pretty good in Solid Start.  As it turns out, Greg...
[03:31:09] has the same feature in Leptos Start. He doesn't call it that, but he made the server function. I remember how amazed I was that he had very similar setup when he set up Leptos. I haven't kept him on the same page in all the new stuff I've been doing, but his latest version of his Hacker News Islands demo, it's 17.2 total kilobytes of JavaScript.
[03:31:33] which is only, again, 14, 4K of awesomeness.  This is incredible.  Don't get me wrong, like an island's version  of a JS framework that's small, like, say solid,  might be six kilobytes.  So, or, so like, it's not quite in that zone, but like,
[03:31:48] If we're talking like
[03:31:50] anything else.
[03:31:52] like React or whatever, like
[03:31:54] This is good. You know what? Let's just open up his Hacker News demo. I haven't even played with it yet. Did he color code it nicely? Is this a leptose color? Like a dark color?
[03:32:05] Yeah, see it's an MPA, you can see the page reload, but it looks good. You know what?
[03:32:10] Yeah.
[03:32:11] I haven't even looked at this.  Let's go to my old...
[03:32:14] Favorite.
[03:32:16] Let's start putting something in here.
[03:32:18] 301/8, this is the magic number here, whatever this is.
[03:32:23] And then let's go like this.
[03:32:27] And then we want, what was it? Stories.
[03:32:30] Let's see, does he follow the same URL
[03:32:32] format that we do.
[03:32:35] Stories, yeah. I don't... let's just go.
[03:32:40] Thank you.
[03:32:42] Yeah, I mean, I would love to see...  I don't know if we'll get all the stories here.  I've been getting as good data recently,  but I have no clue how this goes.
[03:32:53] But...
[03:32:58] This is actually pretty amusing to me.  Because those sizes, I don't know if Wasm's expensive to process,
[03:33:06] I want to see if...
[03:33:08] I mean, obviously, this is a demo set up.
[03:33:11] for
[03:33:13] Um...
[03:33:15] more static type pages. So islands slay at this demo.
[03:33:19] Server components do better than
[03:33:23] like SSR demos. And I know this page specifically because of its 1300 or 1400 stories. Sometimes edge functions have a hard time
[03:33:32] I might be just like completely killing his server right now.
[03:33:37] All right.
[03:33:39] Okay.
[03:33:44] Do you know how fast a solid...
[03:33:47] Um,
[03:33:48] app does on this
[03:33:50] like a solid start standard spa on this demo.  52.
[03:33:56] Next.js Remix: Spellkit 47.
[03:34:01] Server components, 61, like in NextPageApp61, yeah.
[03:34:07] Um,
[03:34:09] Astro, quick, solid islands.
[03:34:13] All of those, 85.
[03:34:17] So yes, this is a static page.
[03:34:20] Pretty much, right? Like...
[03:34:23] If I open up this demo,
[03:34:25] All you can do is collapse these comments.
[03:34:29] But
[03:34:30] Thank you.
[03:34:31] Thank you.
[03:34:32] This is already significantly more performant than the server component version.
[03:34:37] Oh yeah, yeah.
[03:34:39] So like, this is a WASM framework not getting... having issue on page load with an island thing. Yes, it's mostly static demo, but the point is
[03:34:50] Page load is the weakness here. Like a WASM framework update speed, they're fine. They're like less than 10% slower than JavaScript framework. Not a big deal.
[03:34:59] page load,
[03:35:00] is a big deal.
[03:35:01] So,
[03:35:04] You know?
[03:35:07] Obviously, this is a mostly static page. I'm sure it doesn't scale as well, you know, in the case for apps or whatever. But this is impressive.
[03:35:20] Thank you.
[03:35:23] Marco 5 was about...
[03:35:29] Um...
[03:35:32] was about in this range  around 76, 77?
[03:35:36] And then Marco Six obviously is...
[03:35:37] in the 85, 90 range with all the other guys.
[03:35:43] So, yeah, I mean...
[03:35:48] This is pretty good for an islands demo.
[03:35:51] This is faster than fresh.
[03:35:53] was Fresh had a problem with recursive,
[03:35:55] islands. They probably fixed it now, I haven't checked it. I'm pretty sure Fresh scored around 57 and 60 around the same place as server components.
[03:36:05] Rizal told us  Lighthouse scores don't matter  Yeah, of course not
[03:36:11] Like what really matters is when you get page speed insights or whatever.  But I like using this for profiling just basic load somatics.  You can see, look, streaming works.
[03:36:21] You can see the page stream in content.
[03:36:24] We could run this a few times and see where it actually sits.  But this might not be a good run.  Maybe he is in the 80s.  I'm just happy that I turned it on and we're in the ballpark.  This is not...
[03:36:37] Bad.
[03:36:38] by any means.
[03:36:41] And let's look, yeah, 1,406 comments are all loaded. So,
[03:36:48] Great work, Greg, showing people that Wasm doesn't have to have slow loading pages.  Obviously, this is a very static page.
[03:36:57] But--
[03:36:58] This is still an accomplishment in itself.
[03:37:04] Thank you.
[03:37:07] Yeah, there you go, Greg.
[03:37:11] Thank you.
[03:37:14] Thank you.
[03:37:15] No, I always like doing this kind of comparison.  I've done it a bunch.
[03:37:21] And this is--
[03:37:23] This is...
[03:37:24] This is good stuff.
[03:37:28] Yeah, but I mean, if you're already writing in that intense system language,
[03:37:35] Like, you don't...  The stranglehold that JS has...
[03:37:39] on the front end is so hard.
[03:37:43] It's so funny because I know people don't agree with me.  I know Prime doesn't agree with me all the time, you know, you know, those people.  But like you have to use JS on your back end if you want to like the best experience for your end user.  And this shows that it might be possible to change that.
[03:37:58] That's why this is exciting.
[03:38:00] Like, this direction and seeing what stuff is.  Like...
[03:38:04] Sure, this is Ross to maybe go something else, but like...
[03:38:07] I don't know.
[03:38:09] Right now, I mean, people can lie to themselves and think that it's different, but for your client's UX sake, you want to use JS on your backend.
[03:38:16] Um,
[03:38:18] So like...
[03:38:20] Yeah, this is huge.
[03:38:26] Anyway.
[03:38:29] Alright, where are we?
[03:38:37] Thank you.
[03:38:39] Thank you.
[03:38:41] Thank you.
[03:38:42] We already talked about this value server components
[03:38:46] I think...
[03:38:48] It's so funny, just as people are getting excited about server components finally stabilizing, I've become the less
[03:38:55] optimistic about them in the whole time since they've existed.
[03:39:01] It's very weird to be counter that trend. But I'm glad that people are thinking about this stuff because then when they make the comparisons, they can see
[03:39:10] Hopefully the other solutions
[03:39:12] Um,
[03:39:13] can deliver similar stuff.
[03:39:15] without
[03:39:16] that
[03:39:18] -
[03:39:20] Not much to say about this.
[03:39:22] This is a great story, though.  I'm glad. I did this post a while ago.  But...
[03:39:28] My dad was said hi on the stream a while ago, but he's what got me started in programming because he was an ironwork retrograde and he went back to work. He wanted to go back to school and get his computer degree back in, I think it was like, what is it, like 1990-ish?
[03:39:46] And he came back and he showed me this quick basic program after one of his days. And it was like a screen with like a white arrow and you could see the paint rebuffering, like flashing going on as the arrow went up the screen. You could actually literally see the frame rate flicker on the whole page. It was horrible, this arrow. But he's like, look, Brian, it's a spaceship.
[03:40:09] Thank you.
[03:40:10] And once I realized that he'd programmed that, I was pretty young around then.  But once I realized that it was something that was programmed and not something like that...
[03:40:21] It wasn't a video. It wasn't like, you know, a game. It was like he made the computer do that. I knew that I wanted the program.
[03:40:29] And I also saw like what he wrote and I was like, I can do this.
[03:40:35] Thank you.
[03:40:39] Thank you.
[03:40:40] Yeah, I mean, I've talked about this on many of my previous streams, but yes, it's because the knowledge that we get from running the JavaScript on the front end or on the back end actually saves us.
[03:40:51] lets us optimize what we can send,  what we can execute when the page loads.  So it gives us more power to actually optimize  even like serialization, deserialization of stuff.  If we're running that logic, we can kind of split
[03:41:07] our stuff across client and server and actually reduce the cost in the client,  which means we can, you know, reduce what hurts like network or what, um,
[03:41:17] or even CPU when you have lower end devices.
[03:41:20] Like we can actually like,
[03:41:23] On one hand, if your server gets overrun, you have too many requests and stuff, everyone suffers. But on the other hand, you can throw more servers at it. I'm not saying it's a bad thing, but you can't do anything about the end user's network or their device.
[03:41:44] Thank you.
[03:41:44] Thank you. That's awesome. You listen to our stuff. I will say that...
[03:41:50] There might be some weird comments if you check out the van camps and stuff right now.
[03:41:55] Our base player is, I think, going through something,  and he's kind of taking over our accounts and says that,
[03:42:02] We weren't in the band anymore.  Um...
[03:42:06] sort of like another dance situation going on. But the music's still up there, and the YouTube,  so you could definitely check it out.
[03:42:14] Two Ryans are distracting.  Anyway.
[03:42:18] uh this is this important story for me and i'm glad that they got shared again um
[03:42:23] Okay, let's keep on going.
[03:42:26] So
[03:42:27] -
[03:42:31] I love their insights. They always say the really smart things and always look to see their opinion because they always get it and cut through it. And...
[03:42:40] I'm starting to think the point of solid JS might not be single spine green reactivity.  It's more a happy action.  The real point is about primitives over abstractions, explicit over implicitness, simplicity over easy use.
[03:42:49] And...
[03:42:51] This is such a...
[03:42:53] Powerful comment.
[03:42:55] Um,
[03:42:56] And this is the truth heavily inspired by one of my favorite JavaScript libraries. I did this on purpose. Do you guys know which JavaScript library I'm talking about?
[03:43:05] I'm not going to look at the chat yet, but I figured...
[03:43:09] I was hoping people would know what JavaScript library I was talking about.
[03:43:13] Because I feel like if you started web dev in the last five years, you might actually not know what
[03:43:18] JavaScript library I'm talking about.
[03:43:22] No, I'm not talking about Knockout.  I mean, Knockout had signals and stuff, but it was, it was, they didn't have much of a  philosophy about it.
[03:43:32] Thank you.
[03:43:34] Thank you.
[03:43:35] Thank you.
[03:43:40] Yeah, I'm talking about React.  If you look at React these days, you'd never guess that.  But React was like...
[03:43:50] So React was all about its primitives, which in case it was component, but it was all about being explicit over implicit simplicity over easy ease of use.
[03:44:00] You know, every part of React,
[03:44:02] was about that.  I don't know what's happened to React  in the last several years,  but this is like, this is what I learned from React.  Like I had signals and knockout and things,  but React codified
[03:44:14] these qualities.
[03:44:18] Right. React. So like,
[03:44:23] I love this is part of the reason why I love this kind of stuff because
[03:44:27] The things that made people fall in love react in the first place are why.
[03:44:33] people should be interested in solid.
[03:44:36] That's where we're coming from.
[03:44:40] It's hard when you grow and you have users and you get to where you are in your life cycle. React probably doesn't want to be that way. They have a mainstream audience. They want to expand into WordPress and jQuery of the world.
[03:44:51] But,
[03:44:53] React as a philosophy...
[03:44:56] and his approach and the thing that attracted those first developers back in 2013-14 or whatever
[03:45:02] That's how I see solid today.
[03:45:06] Yeah, no, for me, this really...
[03:45:09] big part of React's inspiration on how we are.
[03:45:12] It's just...
[03:45:15] You know, I understand as an author that we can't always...
[03:45:19] Stay that way.
[03:45:20] which is fine.
[03:45:23] But it is definitely, you know, something we have to, you know, consider.
[03:45:29] Anyway.
[03:45:32] Yeah, his core team changed. Yeah, that's true.
[03:45:38] I still point to it, honestly.
[03:45:44] If the React guys...
[03:45:46] I mean, it's not fair because of...
[03:45:52] Like a git.
[03:45:54] There's nuance to it and I get where they're going with React and Forget and the whole thing. But if you want to make one of those pie on the face kind of scenarios, grab Pete Hunt's talk from the university that he did. He did a lecture and he talked about he was comparing React to Angular and then to Ember and Knockout. He had these three use cases and things that made React
[03:46:20] simpler, more streamlined, and like,
[03:46:23] philosophically, like, better.
[03:46:27] Thank you.
[03:46:27] Thank you.
[03:46:28] I take that talk.  I, I, I, I,
[03:46:32] I don't have it offhand right now.
[03:46:34] And
[03:46:36] pretend that when he's talking about Ember or Knockout,  he's talking about React Hooks.
[03:46:40] and it lines up so perfectly
[03:46:44] that it's crazy, that you're just like,
[03:46:47] Wow, like would Pete Hunt really dislike the React that is today?
[03:46:54] And the thing is, he doesn't.  Because when the whole signals thing came out, he was one of those guys that came out of the woodworks to be like...
[03:47:01] Push back the horde of barbarians, you know?  But the...
[03:47:04] Funniest thing is
[03:47:06] you could apply his
[03:47:08] arguments against these libraries as readily against React hooks.
[03:47:12] So,
[03:47:14] Yeah, it's interesting.
[03:47:16] Thank you.
[03:47:17] Thank you.
[03:47:18] Thank you.
[03:47:22] Let me see if it's this one.
[03:47:31] I almost wanted to like put audio on this one time and actually play it.  Like, look, I'm partly through it.  So I think it is this one.
[03:47:39] .
[03:47:44] Thank you.
[03:47:46] Yeah, yeah, yeah, yeah, it's this one, yeah, yeah. This is one of the most scathing reviews against React Hooks I've ever heard.
[03:47:54] Um,
[03:47:56] Yeah, it's a CS294...
[03:47:59] Class.
[03:48:04] Thank you.
[03:48:06] Yeah, he's talking about computed properties and data bindings, but most of these things actually apply to React hooks too. It's great.
[03:48:14] Thank you.
[03:48:15] Anyway, yeah, that
[03:48:17] Let's.
[03:48:18] I know you posted in Dev, but let's, in case the people on YouTube want to see it too, I'm going to post this again.
[03:48:29] Great talk.
[03:48:31] Yeah, there's a lot of talks I've watched over time.  They're just so...
[03:48:36] Um...
[03:48:37] like powerful for their time.  Um, that one is definitely one of them.
[03:48:43] All right.
[03:48:44] Thank you.
[03:48:46] Thank you.
[03:48:46] Okay.
[03:48:47] Thank you.
[03:48:48] Let's look at
[03:48:50] bookmarks.
[03:48:54] Thank you.
[03:48:58] I'm trying to remember why I quoted this one. I think RSC is the best way of crossing the network gap ever. I can find parallels with every stack I've worked with my whole career and it's always better. It deserves careful implementation. That's why we're attempting Remix right now. We're not going to rush it.
[03:49:17] Thank you.
[03:49:20] Thank you.
[03:49:22] Thank you.
[03:49:25] With all the caching streaming nonsense.  I mean, the streaming nonsense isn't nonsense, but...
[03:49:31] Yeah, I don't know. I can't remember why I bookmarked this. We talked about this topic a lot today.
[03:49:37] I think...
[03:49:39] It is interesting. The remix keeps on reaffirming that they're going to go to RSCs and it's just taking a while. I think
[03:49:46] He's going, I feel like every time I see Ryan Post, he's been going through a lot of the same...
[03:49:52] conflict struggles that I have with these things. That being said,
[03:49:55] If he was fine with the remix patterns, he's probably fine with RSCs.
[03:50:01] Um, because
[03:50:02] If you remember what I was talking about earlier with the slope remix was already on the slope
[03:50:08] back down. So I think
[03:50:11] I think he can get...
[03:50:13] To RSCs where he's comfortable.  So, um...
[03:50:18] It is interesting, though, because
[03:50:20] the longer this drags,
[03:50:22] and next is the only one,
[03:50:24] the more interesting the conversation gets about how,  what other options we have other than RSCs.
[03:50:33] Thank you.
[03:50:35] We talked about Sunil's...
[03:50:40] thing already earlier.
[03:50:43] I should actually look at this and double check what I said was true.
[03:50:47] He's using...  Let me...
[03:50:49] Jer... let me...
[03:50:51] Durable objects. Yeah.
[03:50:55] So he's basically saying that Cloudflare has come up with a way that you can have stateful servers with edge functions.
[03:51:03] So...
[03:51:05] Yeah, he's very excited
[03:51:07] with PartyKit. Obviously, that's his company
[03:51:10] Um,
[03:51:11] I don't know.
[03:51:12] I think it's powerful.
[03:51:13] He should talk to me, probably.
[03:51:17] or I should talk to him. It's been a while. I've been busy on other stuff, but
[03:51:21] If he wants to superpower the stuff, it's not about...
[03:51:25] Oh, he's working with Remixer. It's not about React.
[03:51:30] This is like the use case for signals, I'm pretty sure.
[03:51:38] Alright, let's keep on going.
[03:51:44] Ah, very on topic.
[03:51:48] Thank you.
[03:51:50] Oh, side question. How's Nikhil doing?
[03:51:53] Nikhil's doing pretty good. He's uh...
[03:51:55] He's fencing off all the Vinci bugs that people have been throwing at him, but...
[03:52:00] He's he's
[03:52:03] I feel like he's...
[03:52:04] He's in a much better place.
[03:52:07] the past year.
[03:52:09] Um,
[03:52:10] He seems much happier.  It's fine.  I'm not getting into this.
[03:52:14] personal stuff at all, but he's been back in India for about a year now.
[03:52:19] Um,
[03:52:20] close to family and friends and
[03:52:23] Uh,
[03:52:23] I feel like we have a more grounded, more responsible, older, mature Nikhil who continues to put out good work.  So I'm happy about that.
[03:52:34] Yeah, we should talk about the original post. You got that from me?
[03:52:39] I don't necessarily want to rip into you if you're not comfortable.  As you said, I'm not going to, but I...
[03:52:47] I should grab that.
[03:52:50] Thank you.
[03:52:51] *sniff*
[03:52:54] I could probably find it as well.
[03:52:58] In fact, let me actually do something here.
[03:53:04] Thank you.
[03:53:05] I wanna, I'm gonna, I'm gonna pre, I, something I should have done before, whenever I do This Week in JavaScript, I should stop presenting my entire desktop and just, uh, uh,
[03:53:15] present
[03:53:16] Um...
[03:53:18] my Chrome window because if I present
[03:53:22] Um,
[03:53:23] Chrome window? No, you can only do it on a single tab.
[03:53:27] Oh, that's annoying.
[03:53:32] I can share audio really easily.
[03:53:36] Let's see if I can get this.
[03:53:41] Uh, one second.
[03:53:45] I get the URL.
[03:53:49] Yeah, let's do this.
[03:53:51] That's probably why
[03:53:53] I don't share this all the time, but...
[03:53:57] See, now I got easy audio.
[03:53:59] This is the...
[03:54:00] Funniest format
[03:54:02] that I probably
[03:54:04] I've seen for talking tech.
[03:54:08] But, uh...
[03:54:11] Let's see.
[03:54:12] rendered output can be serialized over the DOM. Signals and server components have taken the world by storm. But are they mutually exclusive? VDOM libraries like React have two separate steps for rendering your components and reconciling the rendered output into the DOM. This means that as long as the rendered output can be serialized over the network, the rendering can happen on the server. Hence, server components. Reactive libraries turn everything into a reactive object.
[03:54:42] can achieve efficient updates.  They no longer have the intermediary step  between the pure computation and the side effects.  This means that while React might be the only library  without signals, it might also be the only library  with server components.
[03:54:59] I might be wrong here. So let me know if I am.  Signals and server components have taken the world by storm. What are they?
[03:55:07] I hope the audio worked there.  The audio worked?
[03:55:11] Yeah, yeah.
[03:55:13] So, uh...
[03:55:18] Thank you.
[03:55:20] Yeah. Um, this is, it is interesting. Um,
[03:55:28] Because if you think about it, things like Quick actually serialize the whole reactive graph, pure and side-effectful. And to be fair, we don't need to run the side effects on the server.
[03:55:39] Actually, I would like we render the rendering, but like the serialized part of the graph that we can transform on the pure side is actually very clear what it is.  My gripes are things that I've been struggling with it have largely been.
[03:55:57] It's largely been that server components are set up for...
[03:56:02] Diffing.
[03:56:03] Like,
[03:56:04] essentially, like replacing or diffing. And it's awkward when you build
[03:56:09] apps that are set up for fine grade updates. Like we don't need key props.
[03:56:14] But suddenly, if we're going to do diffing, we probably should have key props.  It's the view versus data-centric problem again.
[03:56:23] you
[03:56:25] Right?
[03:56:27] so like
[03:56:29] This has kind of been like the challenge here in general.  I forget what I did earlier.
[03:56:36] Yeah, see, quick is an example of a server-commoners thing. And then there's this whole discussion:  How do client navigation work in quick? The entire page is resumed on the client.  You can often client navigation on your server-side. Currently, if you do client-side, yeah, you resume the full next page.
[03:56:48] But coming quick to what we need to do now with containers, this means you're just loading frames h12.  Yeah, so they've been working on fragments solution.
[03:56:55] but it's
[03:56:57] It's tricky because of shared state problems.  It's all the same problems that we've been looking at as well, right?
[03:57:12] Thank you.
[03:57:13] HTML parts are quite the same.  I mean, this is an interesting discussion because  you can encode a lot into  HTML if you want to.  My comment about it being lossy was  mostly that the final  output of HTML is  lossy, but you can always add more  crap into it. You can add
[03:57:31] comments and data HK's. What QUIC does is they actually put comments around components. For us, we put comments on templates that we want to absorb. So if you have keys, you could put the keys into the HTML template. So you can use HTML as that format.
[03:57:49] Um,
[03:57:50] But I do wonder if we should differentiate here on the terms.  Just small kind of note, I don't actually consider what Quick does server components, so to speak, because...
[03:58:01] none of they don't have server or client components they just literally just have their components  that can run on the server the client depending on the situation which is different than
[03:58:11] server components which are explicitly server only.
[03:58:14] Um,
[03:58:19] so he's like um so like that's where this whole kind of conversation came down because they're
[03:58:27] I just mean codes that start on the server and stay on the server.  And I'm going to call the server codes.
[03:58:32] Yeah, I mean, technically there are components that could start on the server and stay on the server.
[03:58:37] With QUIC,
[03:58:38] But
[03:58:39] You don't denote it, at least to my knowledge.
[03:58:45] Thank you.
[03:58:46] Judith Vierk.
[03:58:53] Thank you.
[03:58:56] Yeah.
[03:58:58] yeah so like this is what kind of started this whole conversation here of like
[03:59:04] Um,
[03:59:06] of essentially, oh, did I lose? Where's my bookmarks?
[03:59:12] uh
[03:59:17] Thank you.
[03:59:18] is not a word owned by React.  Nuxt has server components.  It makes every Astro, Marco, Quick component  is a server component, et cetera.  Yeah, this is an interesting definition.  I'm not sure if I can get behind this one.  Nuxt does have server components,
[03:59:33] Um,
[03:59:34] They're kind of like server lakes right now.
[03:59:38] But I'd say the server part of Astro or the server part of Marco, like in the islands, the not islands could be considered server components to a certain degree.
[03:59:48] I think what...
[03:59:49] You could argue that the server component architecture refers to having that client side routing, but at least
[03:59:56] There are two clear types of components that interweave in a tree-like
[04:00:00] fashion where
[04:00:00] They're
[04:00:01] where there's like a continuous server tree
[04:00:04] That runs through it. To me, like at least server components are defined by that tree weaving. It's not, it's a terrible name because it's not about components necessarily, but it's about being able to have that separate, separatable tree.
[04:00:20] explicitly.
[04:00:22] And because they all share characteristics where, uh, resumable solutions like, um,
[04:00:29] quick.
[04:00:31] don't actually make that distinction and it actually impacts things.  It's why like client side routing works the way it does.  Cause at the point of an,
[04:00:39] of a stateful change, everything below it has to come.
[04:00:42] Unless you can separate the trees.
[04:00:47] Thank you.
[04:00:49] *sad music*
[04:00:56] Yeah, I don't consider them server components, no.
[04:01:00] Thank you.
[04:01:03] Thank you.
[04:01:04] Thank you.
[04:01:05] Thank you.
[04:01:06] But it's interesting because like people, there's a reason you might want to jump on the term so that it not only React has server components in this conversation, because then you can be like, look, we all have equivalents to server components, especially with like islands frameworks, because then you're like, we had this problem before, right? Because they're not being viewed as the same thing.
[04:01:25] Quick is a interesting one, though.
[04:01:29] Because it does have...
[04:01:31] through its
[04:01:33] bundling a form of it. It's just not explicit. And as I said, with client-set routing at any point,
[04:01:40] those server components could become client components.
[04:01:43] So it's not...
[04:01:45] .
[04:01:47] I'm not sure.
[04:01:51] I don't think I agree with Steve generally.
[04:01:55] But you don't have to have server components that have the same benefits that server components give.
[04:02:00] which is kind of the whole point of the stream today. I was saying on the data fetching side, you can basically solve all the issue server components with without having a bad DX.
[04:02:13] Thank you.
[04:02:14] Thank you.
[04:02:16] Because now people are talking about like SSR.
[04:02:18] I've been running React on the server for 10 years, so server commands are already thinking.  See, this is why they have to be...
[04:02:24] We need some way to talk about the similar distinctions, though.  You mentioned Quick and Astro.  Astro templates are very much like RSC in the sense that you compose this without waterfalls.  Quick on there, they can't.  Yes.  Like...
[04:02:34] I think Dan and I are in agreement here that generally speaking, we're okay with calling it, it sort of comes to the about the tree. We're okay with talking about it. Like the characteristics.
[04:02:50] See, I need at least some way to separate the solution so that astronauts
[04:02:54] and RSC stay in one bucket.
[04:02:56] We'll say solid start and quick stay in the other bucket.  Yes.
[04:03:00] To be fair, what we were doing in SolidStart was actually in the React bucket.
[04:03:08] Thank you.
[04:03:08] Dan's probably not aware of that, but yeah. But yes, I agree.
[04:03:16] Yeah. Whoa, wow. He just keeps on going.
[04:03:23] Thank you.
[04:03:25] Sweet. He just said everything.
[04:03:29] Yeah, it's so funny because we I put that out there, right?  So that like literally we released that like it's exact same week  that they released our season next.  We're just like, look, we got server components to
[04:03:42] But...
[04:03:43] Yeah.
[04:03:45] I don't know.
[04:03:46] I think
[04:03:48] I think if we were to do them in solid, we should do them correctly.  Um...
[04:03:53] And for that, that starts with serializing async JSX.
[04:03:58] We basically need to take our streaming
[04:04:00] protocol.
[04:04:01] that we use when we initially render the page to render the stuff afterwards, like make it  cerebral friendly on the where we insert the script tags. Because if you do that,  then if you think about it, what I showed you today with single flight mutations are server components.
[04:04:15] Because instead of going to the next page and loading the data,
[04:04:18] You go to the next page and you just render the page.
[04:04:22] The whole streaming back in and everything works identically.
[04:04:26] So...
[04:04:27] Like,
[04:04:28] single flight mutations are kind of like the island's router.
[04:04:32] If you actually think about it.
[04:04:34] I just did it without the serialization.
[04:04:38] And approaching it this way,
[04:04:40] isn't one final product, but it means that everyone, even people using CSR, get the benefit from it.
[04:04:46] Right? Just...
[04:04:47] looking at the primitives, not releasing a product.
[04:04:52] Thank you.
[04:04:54] So, yeah, I'm happy where things are.
[04:05:05] Yeah, I mean...  I...
[04:05:10] Having...
[04:05:11] The server tree is a very powerful concept.  It lets you shake off
[04:05:17] some of the
[04:05:19] the stuff. But for me to be happy where it gets to, I need the data fetching mechanism.  This would be the same and the mutation mechanisms. And that makes it
[04:05:28] tricky. To be fair,
[04:05:30] If Solid were to make such a solution,
[04:05:33] we would still be using the exact same cache API
[04:05:37] and the exact same action API, it would just be
[04:05:41] when you do the redirect,
[04:05:43] we'd recognize which data lived
[04:05:47] in the client loader and which...
[04:05:51] and then render the server.  So we just be splitting the past.  So technically speaking,  it,  it,
[04:05:57] we could actually do this with all the same data APIs.
[04:06:00] But...
[04:06:01] I...
[04:06:02] It's weird to...
[04:06:04] I think I needed to see single flight mutation type stuff working first, because then there's a solution for people who don't want to invest in server side caching.
[04:06:13] Right.
[04:06:14] Like investing in server components is acknowledging that you need to invest in server side caching.
[04:06:21] which is not thing you need in single page app world.  Now I feel like that should have been like upfront for people.  Like I know for sale can kind of build into their infrastructure and just be  like, here you go. But like, generally speaking,
[04:06:34] People need to understand that, like, hey, we're doing server components.  Now you need this other infrastructure.  Like, it's hard to make that the default.
[04:06:43] Um,
[04:06:44] when that's not how things have been packaged up to date.
[04:06:50] Thank you.
[04:06:53] Yeah, the ascending UI definitely has some benefits, definitely on code size, and it saves on hydration time. Of course, if you were resumable, and I don't mean like quick resumable, I mean just pure resumable, the hydration time would disappear as well, which means that like...
[04:07:11] it would really just come down to code size in the end.
[04:07:15] Um,
[04:07:17] Thank you.
[04:07:19] I don't know if there's...  You could argue that there's a DX benefit, but I actually...
[04:07:27] I'm still struggling on that one.
[04:07:29] Because anything you can do with server components, you can do with client component calling a server function.
[04:07:35] And in fact, it extracts better because then you're not actually encouraging waterfalls because you're like, look, I have this data I need.  And then people can feed it into like their loader or whatever.  You actually...
[04:07:46] Like you're not, you're actually pushing people towards a pattern.  Like next suggests that you could like pull out the data fetcher out of your component so that you can preload it somewhere above.
[04:07:55] this pattern just says
[04:07:56] do that, right? Like, so it's not even like a choice. You just have the better performed pattern.
[04:08:03] Anyway, so it's like...
[04:08:04] Yeah.
[04:08:11] I hear people talking about web forms.
[04:08:18] No, no, no.
[04:08:22] No, if we go back to staples servers, it's not going to look like that.
[04:08:26] Um...
[04:08:27] I don't think.
[04:08:30] We're talking live view. We're talking party kit. We're talking stuff like that.
[04:08:39] Yeah.
[04:08:42] It's funny, in a way, RSCs are the inverse of the old ASP.NET update panels.
[04:08:51] but they are much,  the inverse is much saner than the,  like the,  what was originally there.  But yeah,
[04:08:59] The real trick is if you want to avoid diffing,
[04:09:04] You have to put
[04:09:06] the data closest to where the data, like you have to put the, like you, you basically have to get as close to where the data is that changes. Um,
[04:09:14] And like if you can you can be fine grained anywhere that you put put stuff close to closest to where the change happens. Right. We like signals on the client because when people interact with stuff, we can update it right away.
[04:09:30] If we want signals basically on the back end, then it needs to be on the back end if we want to wire it in that kind of granularity. You need it on both sides. It's the diffing over the wires that kill us when there's a mismatch. We try and put stuff that's on the server on the client or vice versa.
[04:09:49] Anyway.
[04:09:52] Okay.
[04:09:56] So, yeah. Send HTML to the server to update the database.
[04:10:06] Yeah, just...
[04:10:08] The HTML is the new XML.
[04:10:15] Thank you.
[04:10:16] Yeah, yeah, yeah. I think there's like really cool, like once you say you have stapled servers, the whole thing freaking opens up like completely. Like as I said, Convex was a great example, tying into existing front end server frameworks.
[04:10:34] Yeah.
[04:10:36] But as I said, it's...
[04:10:40] It's difficult to say like, hey, I'm building an app and then being like, you need this infrastructure.
[04:10:45] We got to a point now on the spa side where we could basically say, like, you don't have to worry about infrastructure.
[04:10:52] So like that backtrace is going to be interesting because I feel like that's how we got to RSCs. It's like the but RSCs actually don't accomplish that. RSCs are already backtracing the other way because once you're like, okay, I'm okay with a heavy, heavy server side caching, then you might be like, okay.
[04:11:09] well, I've already got that persistent thing.  Why don't I just make it a durable object and make it, you know what I mean?  Like, it sounds like we're already walking back that way.
[04:11:19] the actual hill that we're climbing over
[04:11:22] Already hit
[04:11:24] its peak, so to speak. RSCs are already on the other side of the slope.
[04:11:32] It's interesting.
[04:11:38] *sad*
[04:11:40] But yeah, I mean, from that perspective, then maybe all that we've been doing here in solid is optimizing, just optimizing the crap out of the best way to do certain things that we do today.
[04:11:54] Oh.
[04:11:55] Anyway, um...
[04:11:57] I don't know.
[04:11:58] I am pretty content with calling this one an early stream, to be fair.
[04:12:06] It's not even early. It's just I could take my daughter to daddy-daughter dance. That happens to be always right before Valentine's Day, which is by my birthday.
[04:12:19] Good
[04:12:23] So
[04:12:24] Thank you.
[04:12:25] Yeah, thank you all for joining me. I hope you really liked my awesome single flight demo.
[04:12:30] show you that you don't need server components to do a lot of the incredible stuff that you can do with
[04:12:39] you know, technical stuff that they do and to have great DX.
[04:12:44] Thank you all again for birthday wishes.
[04:12:50] Yeah, who can we raid?
[04:12:54] I
[04:12:57] No, it was a lot of fun.
[04:13:02] Yeah. Thank you all.
[04:13:06] Is Theo's not streaming right now, is he? Oh, he is streaming right now.
[04:13:14] Oh, he is. Yeah, sure. Let's rate Theo.
[04:13:18] Yeah, that makes a lot of sense. Yeah.
[04:13:22] Yeah, but he's also...
[04:13:24] He's also...
[04:13:26] He's also later.  You know what I mean?
[04:13:29] Like than he usually is. Okay guys, let's get the let's get this raid going. Hopefully I did it right. It's just slash Theo, right?
[04:13:38] Thank you.
[04:13:40] All right.
[04:13:41] Well, I will say bye to you all.
[04:13:44] Enjoy your weekend.
[04:13:46] Till next time.